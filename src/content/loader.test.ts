// The book as the app holds it: loaded chunk by chunk from a source, the index
// first, each chunk once, transpositions through the index, nothing for a
// position off the book, and a failure retried
// (docs/adr/0001-opening-book-as-fetched-json.md).
import { describe, expect, test } from "vitest";
import { newGame } from "../domain/game.ts";
import { playLine } from "../domain/line.ts";
import { buildBook, lookup, type OpeningModule } from "./book.ts";
import { lazyBook, memorySource, type BookSource } from "./loader.ts";
import { serveBook } from "./serve.ts";

const ROOT: OpeningModule = {
  id: "root",
  positions: [
    { line: "", moves: [{ san: "d4", rating: 5 }, { san: "Nf3", rating: 5 }, { san: "e4", rating: 3 }] },
    { line: "1.e4" },
  ],
  texts: {
    en: {
      "": { background: "Intro" },
      "1.d4": { strategy: "d4" },
      "1.Nf3": { strategy: "Nf3" },
      "1.e4": { name: "King's Pawn Game", strategy: "e4" },
    },
    de: {},
  },
};
const D4: OpeningModule = {
  id: "d4",
  positions: [
    { line: "1.d4", moves: [{ san: "d5", rating: 5 }] },
    { line: "1.d4 d5", moves: [{ san: "Nf3", rating: 4 }] },
    { line: "1.d4 d5 2.Nf3" },
  ],
  texts: {
    en: {
      "1.d4": { name: "Queen's Pawn Game" },
      "1.d4 d5": { strategy: "d5" },
      "1.d4 d5 2.Nf3": { name: "Queen's Pawn: Zukertort", strategy: "Nf3" },
    },
    de: {},
  },
};
const NF3: OpeningModule = {
  id: "Nf3",
  positions: [
    { line: "1.Nf3", moves: [{ san: "d5", rating: 5 }] },
    { line: "1.Nf3 d5", moves: [{ san: "d4", rating: 4 }] },
  ],
  texts: {
    en: { "1.Nf3": { name: "Zukertort Opening" }, "1.Nf3 d5": { strategy: "d5" }, "1.Nf3 d5 2.d4": { strategy: "d4" } },
    de: {},
  },
};

const SERVED = serveBook(buildBook([ROOT, D4, NF3]));

const gameOf = (line: string) => playLine(newGame(), line, "en").game;

/** The memory source, with every call recorded. */
function recording(): { source: BookSource; calls: string[] } {
  const calls: string[] = [];
  const memory = memorySource(SERVED);
  return {
    calls,
    source: {
      index: () => {
        calls.push("index");
        return memory.index();
      },
      chunk: (id) => {
        calls.push(id);
        return memory.chunk(id);
      },
    },
  };
}

describe("lazyBook", () => {
  test("starts empty and loads the index and the chunks the game's positions need, each once", async () => {
    const { source, calls } = recording();
    const lazy = lazyBook(source);
    expect(lazy.book.size).toBe(0);
    expect(lazy.version).toBe(0);
    await lazy.ensure(gameOf(""));
    expect(calls).toEqual(["index", "root"]);
    expect(lazy.version).toBe(1);
    expect(lookup(lazy.book, newGame().position)?.background?.en).toBe("Intro");
    await lazy.ensure(gameOf("1.d4 d5"));
    expect(calls).toEqual(["index", "root", "d4"]);
    expect(lazy.version).toBe(2);
    const d4 = lookup(lazy.book, gameOf("1.d4").position);
    expect(d4?.name?.en).toBe("Queen's Pawn Game");
    expect(d4?.moves[0]?.move).toEqual({ from: "d7", to: "d5" });
    expect(d4?.moves[0]?.leadsTo).toBeUndefined();
    expect(lookup(lazy.book, newGame().position)?.moves[0]?.leadsTo?.en).toBe("Queen's Pawn Game");
    await lazy.ensure(gameOf("1.d4 d5"));
    expect(calls).toEqual(["index", "root", "d4"]);
  });

  test("a deep link loads every chunk on the way, and a transposition the chunk that declares the position", async () => {
    const { source, calls } = recording();
    const lazy = lazyBook(source);
    await lazy.ensure(gameOf("1.Nf3 d5 2.d4"));
    expect(calls.sort()).toEqual(["Nf3", "d4", "index", "root"]);
    expect(lookup(lazy.book, gameOf("1.Nf3 d5 2.d4").position)?.name?.en).toBe("Queen's Pawn: Zukertort");
    expect(lookup(lazy.book, gameOf("1.Nf3 d5").position)?.moves[0]?.leadsTo?.en).toBe("Queen's Pawn: Zukertort");
  });

  test("a position off the book loads nothing and is not found; one that is reached from off the book is", async () => {
    const { source, calls } = recording();
    const lazy = lazyBook(source);
    await lazy.ensure(gameOf("1.e4 e5"));
    expect(calls).toEqual(["index", "root"]);
    expect(lookup(lazy.book, gameOf("1.e4").position)?.name?.en).toBe("King's Pawn Game");
    expect(lookup(lazy.book, gameOf("1.e4 e5").position)).toBeUndefined();
    // Both knights go home again, and 3.d4 reaches the position after 1.d4 from outside the book.
    await lazy.ensure(gameOf("1.Nf3 Nf6 2.Ng1 Ng8 3.d4"));
    expect(calls).toEqual(["index", "root", "Nf3", "d4"]);
    expect(lookup(lazy.book, gameOf("1.Nf3 Nf6 2.Ng1 Ng8 3.d4").position)?.name?.en).toBe("Queen's Pawn Game");
    expect(lookup(lazy.book, gameOf("1.Nf3 Nf6").position)).toBeUndefined();
  });

  test("a call made while a chunk is on its way waits for it, instead of reporting the book ready", async () => {
    // Found 2026-10-24: in development StrictMode runs the explorer's effect twice, the second
    // call saw the root chunk as already requested and resolved at once, and the screen stayed empty.
    let arrive: () => void = () => undefined;
    const memory = memorySource(SERVED);
    const lazy = lazyBook({
      index: () => memory.index(),
      chunk: (id) => new Promise((resolve) => {
        arrive = () => resolve(memory.chunk(id));
      }),
    });
    const first = lazy.ensure(gameOf(""));
    const second = lazy.ensure(gameOf(""));
    let secondDone = false;
    void second.then(() => {
      secondDone = true;
    });
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(secondDone).toBe(false);
    expect(lazy.book.size).toBe(0);
    arrive();
    await Promise.all([first, second]);
    expect(secondDone).toBe(true);
    expect(lazy.book.size).toBe(2);
    expect(lazy.version).toBe(1);
  });

  test("a source that fails rejects, and the next call tries again", async () => {
    let failing = true;
    const memory = memorySource(SERVED);
    const calls: string[] = [];
    const lazy = lazyBook({
      index: () => {
        calls.push("index");
        return failing ? Promise.reject(new Error("offline")) : memory.index();
      },
      chunk: (id) => {
        calls.push(id);
        return failing ? Promise.reject(new Error("offline")) : memory.chunk(id);
      },
    });
    await expect(lazy.ensure(gameOf(""))).rejects.toThrow("offline");
    expect(lazy.book.size).toBe(0);
    failing = false;
    await lazy.ensure(gameOf(""));
    expect(calls).toEqual(["index", "index", "root"]);
    expect(lazy.book.size).toBe(2);
  });

  test("a chunk that fails is tried again too", async () => {
    let failChunk = true;
    const memory = memorySource(SERVED);
    const lazy = lazyBook({
      index: () => memory.index(),
      chunk: (id) => (failChunk ? Promise.reject(new Error("offline")) : memory.chunk(id)),
    });
    await expect(lazy.ensure(gameOf(""))).rejects.toThrow("offline");
    failChunk = false;
    await lazy.ensure(gameOf(""));
    expect(lazy.version).toBe(1);
    expect(lookup(lazy.book, newGame().position)).toBeDefined();
  });
});

describe("memorySource", () => {
  test("answers from the served book and refuses an unknown chunk", async () => {
    const source = memorySource(SERVED);
    expect(Object.keys(await source.index())).toHaveLength(7);
    expect((await source.chunk("root")).positions).toHaveLength(2);
    await expect(source.chunk("e4")).rejects.toThrow('no chunk "e4"');
  });
});
