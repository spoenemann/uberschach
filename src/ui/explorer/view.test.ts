// The explorer's view at a point of the line, against the spec's promises
// under After every move and Candidates (docs/product-specs/opening-explorer.md).
import { describe, expect, test } from "vitest";
import { newGame } from "../../domain/game.ts";
import { playLine } from "../../domain/line.ts";
import { buildBook, type OpeningModule } from "../../content/book.ts";
import { MODULES, OPENINGS } from "../../content/openings.ts";
import { gameAt, viewAt } from "./view.ts";

/** The English prose of the root module, lines/root.en.json: the shipped text of the first moves. */
const rootEn = MODULES.find((module) => module.id === "root")?.texts.en ?? {};

function lineOf(text: string) {
  const result = playLine(newGame(), text, "en");
  expect(result.failure).toBeNull();
  return result.game;
}

describe("gameAt", () => {
  test("truncates the line to the ply, keeping the positions before it", () => {
    const full = lineOf("1.e4 e5 2.Nf3");
    const game = gameAt(full, 1);
    expect(game.moves).toHaveLength(1);
    expect(game.positions).toHaveLength(2);
    expect(game.position).toBe(full.positions[1]);
    expect(gameAt(full, 0).moves).toEqual([]);
    expect(gameAt(full, 3)).toEqual(full);
  });

  test("refuses a ply beyond the line", () => {
    expect(() => gameAt(lineOf("1.e4"), 2)).toThrow(/no position 2/);
  });
});

describe("viewAt with the shipped book", () => {
  test("before the first move: the introduction, no name, no last move, the moves rated 4 and 5 as candidates", () => {
    const view = viewAt(newGame(), 0, OPENINGS);
    expect(view.lastMove).toBeNull();
    expect(view.name).toBeUndefined();
    expect(view.entry?.background?.en).toMatch(/^Twenty moves/);
    expect(view.candidates.map((c) => c.move.san)).toEqual(["e4", "d4", "Nf3", "c4", "g3", "b3"]);
    expect(view.candidates[0]?.leadsTo?.en).toBe("King's Pawn Game");
    expect(view.status.kind).toBe("ongoing");
  });

  test("after a rated move: the move with its rating and strategy, the position's name and background", () => {
    const view = viewAt(lineOf("1.e4"), 1, OPENINGS);
    expect(view.lastMove?.move).toEqual({ from: "e2", to: "e4" });
    expect(view.lastMove?.book?.rating).toBe(5);
    // The note is content and its wording changes with it: the shipped one is shown.
    expect(view.lastMove?.book?.strategy.en).toBe(rootEn["1.e4"]?.strategy);
    expect(view.name?.en).toBe("King's Pawn Game");
    expect(view.entry?.background?.en).toMatch(/best by test/);
    // Black's replies rated 4 and 5 are the candidates, the others are written but not offered.
    expect(view.entry?.moves).toHaveLength(20);
    expect(view.candidates.map((c) => c.move.san)).toContain("e5");
    expect(view.candidates.every((c) => c.move.rating >= 4)).toBe(true);
    expect(view.candidates.length).toBeLessThan(20);
  });

  test("a move rated below 4 is rated and explained when played", () => {
    const view = viewAt(lineOf("1.c3"), 1, OPENINGS);
    expect(view.lastMove?.book?.rating).toBe(2);
    expect(view.name?.en).toBe("Saragossa Opening");
    // Not followed, and no named line goes on: the book ends here.
    expect(view.entry?.moves).toEqual([]);
    expect(view.candidates).toEqual([]);
  });

  test("off the book: no entry, no name, the move unrated, no candidates", () => {
    // 2.Ke2 is a move the book rates and does not follow, so the position after ...Ke7 is not in it.
    const view = viewAt(lineOf("1.e4 e5 2.Ke2 Ke7"), 4, OPENINGS);
    expect(view.entry).toBeUndefined();
    expect(view.name).toBeUndefined();
    expect(view.lastMove?.book).toBeUndefined();
    expect(view.candidates).toEqual([]);
  });

  test("stepping back brings the information back", () => {
    const full = lineOf("1.e4 e5");
    expect(viewAt(full, 1, OPENINGS).name?.en).toBe("King's Pawn Game");
    expect(viewAt(full, 1, OPENINGS).game.moves).toHaveLength(1);
  });
});

/** A small book with a quiet move inside a named variation and a transposition. */
const SMALL: OpeningModule = {
  id: "small",
  positions: [
    { line: "", moves: [{ san: "e4", rating: 5 }, { san: "d4", rating: 4 }, { san: "Nf3", rating: 3 }] },
    { line: "1.e4", moves: [{ san: "e5", rating: 5 }] },
    { line: "1.e4 e5", moves: [{ san: "Nf3", rating: 5 }] },
    { line: "1.e4 e5 2.Nf3", moves: [{ san: "Nc6", rating: 5 }] },
    { line: "1.e4 e5 2.Nf3 Nc6" },
    { line: "1.d4" },
    { line: "1.Nf3" },
  ],
  texts: {
    en: {
      "": { background: "Intro" },
      "1.e4": { name: "King's Pawn Game", strategy: "centre" },
      "1.e4 e5": { strategy: "mirror" },
      "1.e4 e5 2.Nf3": { name: "King's Knight Opening", strategy: "attacks e5" },
      "1.e4 e5 2.Nf3 Nc6": { strategy: "defends" },
      "1.d4": { name: "Queen's Pawn Game", strategy: "d4" },
      "1.Nf3": { name: "Zukertort", strategy: "Nf3" },
    },
    de: {},
  },
};

describe("viewAt with a small book", () => {
  const book = buildBook([SMALL]);

  test("a position without a name shows the last name on the way there", () => {
    const view = viewAt(lineOf("1.e4 e5"), 2, book);
    expect(view.entry?.name).toBeUndefined();
    expect(view.name?.en).toBe("King's Pawn Game");
    const deeper = viewAt(lineOf("1.e4 e5 2.Nf3 Nc6"), 4, book);
    expect(deeper.name?.en).toBe("King's Knight Opening");
    expect(deeper.candidates).toEqual([]);
  });

  test("only moves rated 4 and 5 are candidates, with the name of the position each leads to", () => {
    const view = viewAt(newGame(), 0, book);
    expect(view.candidates.map((c) => [c.move.san, c.leadsTo?.en])).toEqual([
      ["e4", "King's Pawn Game"],
      ["d4", "Queen's Pawn Game"],
    ]);
  });

  test("a transposition into the book brings the information back, the move itself unrated", () => {
    // 1.Nf3 is not followed; 1.Nf3 e5?? is nonsense but legal, and 2.e4 is not written; neither is the position.
    const off = viewAt(lineOf("1.Nf3 Nc6"), 2, book);
    expect(off.entry).toBeUndefined();
    // Reaching a book position by another move order.
    const back = viewAt(lineOf("1.e4 e5 2.Nf3"), 3, book);
    expect(back.name?.en).toBe("King's Knight Opening");
    expect(back.lastMove?.book?.rating).toBe(5);
  });
});

describe("viewAt when the game ends", () => {
  test("names checkmate and offers no candidates", () => {
    const view = viewAt(lineOf("1.f3 e5 2.g4 Qh4#"), 4, OPENINGS);
    expect(view.status).toEqual({ kind: "checkmate", winner: "black" });
    expect(view.candidates).toEqual([]);
  });
});
