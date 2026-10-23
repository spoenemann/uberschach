// The book loader: positions keyed by position, prose joined to data, and
// every disagreement between the two named (docs/product-specs/opening-explorer.md,
// The database; docs/localization.md, Opening content).
import { describe, expect, test } from "vitest";
import { newGame } from "../domain/game.ts";
import { playLine } from "../domain/line.ts";
import type { Position } from "../domain/position.ts";
import {
  buildBook,
  lookup,
  textIn,
  type OpeningModule,
  type OpeningTexts,
  type PositionData,
} from "./book.ts";

function after(line: string): Position {
  const result = playLine(newGame(), line, "en");
  expect(result.failure).toBeNull();
  return result.game.position;
}

/** A module with the given positions and prose; German empty unless given. */
function module(
  positions: readonly PositionData[],
  en: OpeningTexts,
  de: OpeningTexts = {},
): OpeningModule {
  return { positions, texts: { en, de } };
}

/** Two roads to the position after 1.d4 d5 2.Nf3, declared once. */
const TRANSPOSITION = module(
  [
    { line: "", moves: [{ san: "d4", rating: 5 }, { san: "Nf3", rating: 5 }] },
    { line: "1.d4", moves: [{ san: "d5", rating: 5 }] },
    { line: "1.d4 d5", moves: [{ san: "Nf3", rating: 4 }] },
    { line: "1.Nf3", moves: [{ san: "d5", rating: 5 }] },
    { line: "1.Nf3 d5", moves: [{ san: "d4", rating: 4 }] },
    { line: "1.d4 d5 2.Nf3", sources: ["https://example.org/qp"] },
  ],
  {
    "": { background: "Intro" },
    "1.d4": { name: "Queen's Pawn Game", strategy: "d4" },
    "1.Nf3": { name: "Zukertort Opening", strategy: "Nf3" },
    "1.d4 d5": { strategy: "d5" },
    "1.Nf3 d5": { strategy: "d5 again" },
    "1.d4 d5 2.Nf3": { name: "Queen's Pawn: Zukertort", background: "History", strategy: "Nf3" },
    "1.Nf3 d5 2.d4": { strategy: "d4 transposing" },
  },
  { "1.d4": { name: "Damenbauernspiel" }, "1.d4 d5 2.Nf3": { strategy: "Sf3" } },
);

describe("buildBook", () => {
  const book = buildBook([TRANSPOSITION]);

  test("keys positions by position, so a transposition finds the same entry", () => {
    const viaKnight = lookup(book, after("1.Nf3 d5 2.d4"));
    expect(viaKnight?.line).toBe("1.d4 d5 2.Nf3");
    expect(viaKnight?.name?.en).toBe("Queen's Pawn: Zukertort");
    expect(viaKnight?.background?.en).toBe("History");
    expect(viaKnight?.sources).toEqual(["https://example.org/qp"]);
    expect(viaKnight?.moves).toEqual([]);
    expect(lookup(book, after("1.e4"))).toBeUndefined();
  });

  test("joins each move to its rating, its Move and its strategy in every language that has it", () => {
    const root = lookup(book, after(""));
    expect(root?.name).toBeUndefined();
    expect(root?.background).toEqual({ en: "Intro" });
    expect(root?.moves.map((move) => [move.san, move.rating])).toEqual([["d4", 5], ["Nf3", 5]]);
    expect(root?.moves[0]?.move).toEqual({ from: "d2", to: "d4" });
    const nf3 = lookup(book, after("1.d4 d5"))?.moves[0];
    expect(nf3?.strategy).toEqual({ en: "Nf3", de: "Sf3" });
    expect(lookup(book, after("1.d4"))?.name).toEqual({ en: "Queen's Pawn Game", de: "Damenbauernspiel" });
  });

  test("a module may give a transposing move its own strategy without redeclaring the position", () => {
    const d4 = lookup(book, after("1.Nf3 d5"))?.moves[0];
    expect(d4?.strategy.en).toBe("d4 transposing");
  });

  test("merges modules, later modules declaring positions earlier ones only reach", () => {
    const later = module([{ line: "1.e4", moves: [{ san: "e5", rating: 5 }] }], {
      "1.e4": { name: "King's Pawn Game" },
      "1.e4 e5": { strategy: "e5" },
    });
    const first = module([{ line: "", moves: [{ san: "e4", rating: 5 }] }], {
      "1.e4": { strategy: "e4" },
    });
    const merged = buildBook([first, later]);
    expect(merged.size).toBe(2);
    expect(lookup(merged, after("1.e4"))?.name?.en).toBe("King's Pawn Game");
    expect(lookup(merged, after(""))?.moves[0]?.strategy.en).toBe("e4");
  });
});

describe("textIn", () => {
  test("gives the language's text, or English when the language lacks it", () => {
    expect(textIn({ en: "Knight", de: "Springer" }, "de")).toBe("Springer");
    expect(textIn({ en: "Knight" }, "de")).toBe("Knight");
    expect(textIn({ en: "Knight", de: "Springer" }, "en")).toBe("Knight");
  });
});

describe("buildBook refuses, naming the entry", () => {
  const ROOT_E4: PositionData = { line: "", moves: [{ san: "e4", rating: 5 }] };
  const E4_TEXT: OpeningTexts = { "1.e4": { strategy: "e4" } };

  test("a line that cannot be played", () => {
    expect(() => buildBook([module([{ line: "1.e5" }], {})])).toThrow(
      'Line "1.e5" cannot be played: "1.e5" is no-such-move',
    );
  });

  test("a line not written canonically", () => {
    expect(() => buildBook([module([{ line: "1. e4 e5" }], {})])).toThrow(
      'Line "1. e4 e5" must be written as "1.e4 e5"',
    );
  });

  test("a position declared twice, by any two lines", () => {
    const twice = module([{ line: "1.d4 d5 2.Nf3" }, { line: "1.Nf3 d5 2.d4" }], {});
    expect(() => buildBook([twice])).toThrow(
      'Position "1.Nf3 d5 2.d4" is already in the book as "1.d4 d5 2.Nf3"',
    );
    const acrossModules = [module([{ line: "1.e4" }], {}), module([{ line: "1.e4" }], {})];
    expect(() => buildBook(acrossModules)).toThrow('Position "1.e4" is already in the book');
  });

  test("a move that is illegal, not canonical, or listed twice", () => {
    expect(() => buildBook([module([{ line: "", moves: [{ san: "e5", rating: 5 }] }], {})])).toThrow(
      'Move "e5" from "" is no-such-move',
    );
    expect(() => buildBook([module([{ line: "", moves: [{ san: "Ngf3", rating: 5 }] }], {})])).toThrow(
      'Move "Ngf3" from "" must be written as "Nf3"',
    );
    const twice = module([{ line: "", moves: [{ san: "e4", rating: 5 }, { san: "e4", rating: 4 }] }], E4_TEXT);
    expect(() => buildBook([twice])).toThrow('Move "e4" from "" is listed twice');
  });

  test("a move without an English strategy, even when German has one", () => {
    expect(() => buildBook([module([ROOT_E4], {})])).toThrow(
      'Move "1.e4" has no English strategy text; add one under that key',
    );
    expect(() => buildBook([module([ROOT_E4], {}, E4_TEXT)])).toThrow(
      '"1.e4" has a strategy in de but not in English',
    );
  });

  test("a name or background in German only", () => {
    const data = [ROOT_E4, { line: "1.e4" }];
    expect(() => buildBook([module(data, E4_TEXT, { "1.e4": { name: "Königsbauernspiel" } })])).toThrow(
      '"1.e4" has a name in de but not in English',
    );
  });

  test("prose at a line the module neither declares nor reaches", () => {
    expect(() => buildBook([module([ROOT_E4], { ...E4_TEXT, "1.d4": { strategy: "d4" } })])).toThrow(
      'en: "1.d4" is neither a position nor a move of this module',
    );
    expect(() => buildBook([module([ROOT_E4], E4_TEXT, { "1.d4": { name: "x" } })])).toThrow(
      'de: "1.d4" is neither a position nor a move of this module',
    );
  });

  test("a name where the module only reaches the position, or a strategy where it only declares it", () => {
    const reachesOnly = module([ROOT_E4], { "1.e4": { strategy: "e4", name: "King's Pawn Game" } });
    expect(() => buildBook([reachesOnly])).toThrow(
      'en: name and background of "1.e4" belong to the module that declares the position',
    );
    const declaresOnly = module([{ line: "1.e4" }], { "1.e4": { strategy: "e4" } });
    expect(() => buildBook([declaresOnly])).toThrow(
      'en: the strategy of "1.e4" belongs to the module that declares the move',
    );
  });

  test("but accepts German that lags behind English", () => {
    expect(() => buildBook([module([ROOT_E4, { line: "1.e4" }], E4_TEXT)])).not.toThrow();
  });
});
