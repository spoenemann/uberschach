import { expect, test } from "vitest";
import { parsePlacement } from "../../domain/position.ts";
import { translator } from "../../i18n/translate.ts";
import { describeBoard } from "./describe.ts";

test("lists each side by type from king to pawn, then by square", () => {
  const placement = parsePlacement("4k3/8/8/8/8/8/P7/R3K1N1");
  expect(describeBoard(placement, translator("en"))).toBe(
    "Chessboard. White: king e1, rook a1, knight g1, pawn a2. Black: king e8.",
  );
  expect(describeBoard(placement, translator("de"))).toBe(
    "Schachbrett. Weiß: König e1, Turm a1, Springer g1, Bauer a2. Schwarz: König e8.",
  );
});

test("says when a side has no pieces", () => {
  const empty = parsePlacement("8/8/8/8/8/8/8/8");
  expect(describeBoard(empty, translator("en"))).toBe(
    "Chessboard. White: none. Black: none.",
  );
  expect(describeBoard(empty, translator("de"))).toBe(
    "Schachbrett. Weiß: keine. Schwarz: keine.",
  );
});
