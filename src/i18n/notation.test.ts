import { describe, expect, test } from "vitest";
import { localizeSan, notationLanguage, pieceLetter } from "./notation.ts";

describe("localizeSan", () => {
  test("German uses K D T L S and no letter for the pawn", () => {
    expect(localizeSan("Kg1", "de")).toBe("Kg1");
    expect(localizeSan("Qxf7#", "de")).toBe("Dxf7#");
    expect(localizeSan("Rad1", "de")).toBe("Tad1");
    expect(localizeSan("Bb5", "de")).toBe("Lb5");
    expect(localizeSan("Nf3", "de")).toBe("Sf3");
    expect(localizeSan("exd5", "de")).toBe("exd5");
  });

  test("keeps files, ranks, captures, checks, promotions and castling", () => {
    expect(localizeSan("e8=Q+", "de")).toBe("e8=D+");
    expect(localizeSan("O-O-O", "de")).toBe("O-O-O");
    expect(localizeSan("1.e4 e5 2.Nf3 Nc6 3.Bb5", "de")).toBe(
      "1.e4 e5 2.Sf3 Sc6 3.Lb5",
    );
  });

  test("English is unchanged", () => {
    expect(localizeSan("1.e4 e5 2.Nf3 Nc6 3.Bb5", "en")).toBe(
      "1.e4 e5 2.Nf3 Nc6 3.Bb5",
    );
  });
});

test("each language names the notation it reads", () => {
  expect(notationLanguage("en")).toBe("en");
  expect(notationLanguage("de")).toBe("de");
});

test("pieceLetter gives one letter per language", () => {
  expect(pieceLetter("knight", "en")).toBe("N");
  expect(pieceLetter("knight", "de")).toBe("S");
  expect(pieceLetter("king", "de")).toBe("K");
});
