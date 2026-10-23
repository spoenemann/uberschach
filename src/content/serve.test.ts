// The served form of the book (docs/adr/0001-opening-book-as-fetched-json.md):
// one chunk per module, keyed positions, moves as squares with the name they
// lead to, an index from key to chunk, and nothing the screen does not show.
import { describe, expect, test } from "vitest";
import { newGame, positionKey } from "../domain/game.ts";
import { playLine } from "../domain/line.ts";
import { buildBook, type OpeningModule } from "./book.ts";
import { formatMove, parseMove, serveBook } from "./serve.ts";

const ROOT: OpeningModule = {
  id: "root",
  positions: [
    { line: "", sources: ["https://example.org/root"], moves: [{ san: "d4", rating: 5 }, { san: "Nf3", rating: 5 }] },
    { line: "1.d4", moves: [{ san: "d5", rating: 5 }] },
    { line: "1.d4 d5", moves: [{ san: "Nf3", rating: 4 }] },
    { line: "1.Nf3", moves: [{ san: "d5", rating: 5 }] },
    { line: "1.Nf3 d5", moves: [{ san: "d4", rating: 4 }] },
  ],
  texts: {
    en: {
      "": { background: "Intro" },
      "1.d4": { name: "Queen's Pawn Game", strategy: "d4" },
      "1.Nf3": { name: "Zukertort Opening", strategy: "Nf3" },
      "1.d4 d5": { strategy: "d5" },
      "1.Nf3 d5": { strategy: "d5 again" },
      "1.d4 d5 2.Nf3": { strategy: "Nf3" },
      "1.Nf3 d5 2.d4": { strategy: "d4 transposing" },
    },
    de: { "1.d4": { name: "Damenbauernspiel" } },
  },
};

const D4_D5: OpeningModule = {
  id: "d4-d5",
  positions: [{ line: "1.d4 d5 2.Nf3", sources: ["https://example.org/qp"] }],
  texts: { en: { "1.d4 d5 2.Nf3": { name: "Queen's Pawn: Zukertort", background: "History" } }, de: {} },
};

const PROMOTION_LINE = "1.d4 e5 2.dxe5 f6 3.exf6 Nc6 4.fxg7 Nf6";
const PROMOTION: OpeningModule = {
  id: "promotion",
  positions: [{ line: PROMOTION_LINE, moves: [{ san: "gxh8=Q", rating: 5 }] }],
  texts: { en: { [`${PROMOTION_LINE} 5.gxh8=Q`]: { strategy: "a queen" } }, de: {} },
};

const keyOf = (line: string) => positionKey(playLine(newGame(), line, "en").game.position);

describe("serveBook", () => {
  const served = serveBook(buildBook([ROOT, D4_D5, PROMOTION]));

  test("one chunk per module, every position keyed, and the index naming each key's chunk", () => {
    expect([...served.chunks.keys()]).toEqual(["root", "d4-d5", "promotion"]);
    const root = served.chunks.get("root");
    expect(root?.positions.map((position) => position.line)).toEqual(["", "1.d4", "1.d4 d5", "1.Nf3", "1.Nf3 d5"]);
    expect(root?.positions[1]?.key).toBe(keyOf("1.d4"));
    expect(served.chunks.get("d4-d5")?.positions[0]?.key).toBe(keyOf("1.Nf3 d5 2.d4"));
    expect(Object.keys(served.index)).toHaveLength(7);
    expect(served.index[keyOf("1.d4 d5 2.Nf3")]).toBe("d4-d5");
    expect(served.index[keyOf("")]).toBe("root");
  });

  test("a position carries its texts and its moves as squares, with the name each leads to", () => {
    const root = served.chunks.get("root");
    expect(root?.positions[0]).toEqual({
      key: keyOf(""),
      line: "",
      background: { en: "Intro" },
      moves: [
        { san: "d4", move: "d2d4", rating: 5, strategy: { en: "d4" }, leadsTo: { en: "Queen's Pawn Game", de: "Damenbauernspiel" } },
        { san: "Nf3", move: "g1f3", rating: 5, strategy: { en: "Nf3" }, leadsTo: { en: "Zukertort Opening" } },
      ],
    });
    // Across modules and by transposition alike.
    expect(root?.positions[4]?.moves[0]?.leadsTo).toEqual({ en: "Queen's Pawn: Zukertort" });
    // A promotion is a letter after the squares.
    expect(served.chunks.get("promotion")?.positions[0]?.moves[0]?.move).toBe("g7h8q");
  });

  test("serves nothing the screen does not show: no sources, no absent fields", () => {
    for (const chunk of served.chunks.values()) {
      for (const position of chunk.positions) {
        expect(position).not.toHaveProperty("sources");
        expect(position).not.toHaveProperty("name", undefined);
        for (const move of position.moves) expect(move).not.toHaveProperty("leadsTo", undefined);
      }
    }
    expect(served.chunks.get("d4-d5")?.positions[0]).toEqual({
      key: keyOf("1.d4 d5 2.Nf3"),
      line: "1.d4 d5 2.Nf3",
      name: { en: "Queen's Pawn: Zukertort" },
      background: { en: "History" },
      moves: [],
    });
  });
});

describe("a move as squares", () => {
  test("round-trips, with and without a promotion", () => {
    expect(formatMove({ from: "e2", to: "e4" })).toBe("e2e4");
    expect(parseMove("e2e4")).toEqual({ from: "e2", to: "e4" });
    expect(formatMove({ from: "e7", to: "e8", promotion: "knight" })).toBe("e7e8n");
    expect(parseMove("e7e8n")).toEqual({ from: "e7", to: "e8", promotion: "knight" });
  });

  test("refuses anything else", () => {
    expect(() => parseMove("e4")).toThrow('"e4" is not a move written as squares, like "e2e4" or "e7e8q"');
    expect(() => parseMove("e7e8k")).toThrow(/not a move written as squares/);
  });
});
