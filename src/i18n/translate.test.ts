import { describe, expect, test } from "vitest";
import { CATALOGUES, msg, translate, translator } from "./translate.ts";

describe("translate", () => {
  test("uses the catalogue entry and fills placeholders", () => {
    const catalogue = { "Move {n} of {total}": "Zug {n} von {total}" };
    expect(
      translate(catalogue, "Move {n} of {total}", { n: 3, total: 10 }),
    ).toBe("Zug 3 von 10");
  });

  test("falls back to the English text itself", () => {
    expect(translate({}, "Plain")).toBe("Plain");
    expect(translate({}, "Move {n} of {total}", { n: 3, total: 10 })).toBe(
      "Move 3 of 10",
    );
  });

  test("leaves a placeholder without a value visible", () => {
    expect(translate({}, "Move {n}", {})).toBe("Move {n}");
  });
});

describe("translator and msg", () => {
  test("binds a language, English by default", () => {
    expect(translator("de")("Language")).toBe("Sprache");
    expect(translator()("Language")).toBe("Language");
  });

  test("English is the source and has no catalogue", () => {
    expect(CATALOGUES.en).toEqual({});
  });

  test("msg returns its message", () => {
    expect(msg("white king")).toBe("white king");
  });
});
