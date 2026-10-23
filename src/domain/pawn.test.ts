// The pawn: FIDE 3.7, with en passant (3.7.3.1, 3.7.3.2) and promotion
// (3.7.3.3 to 3.7.3.5).
import { describe, expect, test } from "vitest";
import { isInCheck } from "./attacks.ts";
import { parseFen, toFen } from "./fen.ts";
import { legalMoves, playMove, validateMove, type Move } from "./moves.ts";
import type { Position, Square } from "./position.ts";

function targets(fen: string, from: Square): Square[] {
  return legalMoves(parseFen(fen), from)
    .map((move) => move.to)
    .sort();
}

function playAll(fen: string, moves: readonly Move[]): Position {
  return moves.reduce((position, move) => playMove(position, move), parseFen(fen));
}

describe("FIDE 3.7.1 and 3.7.2: pawn advances", () => {
  test("3.7.1: one square forward when that square is unoccupied", () => {
    expect(targets("4k3/8/8/8/8/4P3/8/4K3 w - - 0 1", "e3")).toEqual(["e4"]);
    expect(targets("4k3/8/8/8/4p3/4P3/8/4K3 w - - 0 1", "e3")).toEqual([]);
  });

  test("a pawn never captures straight ahead", () => {
    expect(targets("4k3/8/8/8/8/4p3/4P3/4K3 w - - 0 1", "e2")).toEqual([]);
  });

  test("3.7.2: two squares on its first move when both squares are unoccupied", () => {
    expect(targets("4k3/8/8/8/8/8/4P3/4K3 w - - 0 1", "e2")).toEqual(["e3", "e4"]);
    expect(targets("4k3/8/8/8/4p3/8/4P3/4K3 w - - 0 1", "e2")).toEqual(["e3"]);
    expect(targets("4k3/8/8/8/8/4p3/4P3/4K3 w - - 0 1", "e2")).toEqual([]);
  });

  test("3.7.2: not from any other rank", () => {
    expect(targets("4k3/8/8/8/8/4P3/8/4K3 w - - 0 1", "e3")).toEqual(["e4"]);
  });

  test("Black's pawns move down the board", () => {
    expect(targets("4k3/4p3/8/8/8/8/8/4K3 b - - 0 1", "e7")).toEqual(["e5", "e6"]);
    expect(targets("4k3/8/4p3/8/8/8/8/4K3 b - - 0 1", "e6")).toEqual(["e5"]);
  });
});

describe("FIDE 3.7.3: pawn captures", () => {
  test("captures diagonally forward onto an opponent's piece", () => {
    expect(targets("4k3/8/8/3p1p2/4P3/8/8/4K3 w - - 0 1", "e4")).toEqual(["d5", "e5", "f5"]);
    expect(targets("4k3/8/8/4p3/3P1P2/8/8/4K3 b - - 0 1", "e5")).toEqual(["d4", "e4", "f4"]);
  });

  test("does not move diagonally onto an empty square or its own piece", () => {
    expect(targets("4k3/8/8/3P4/4P3/8/8/4K3 w - - 0 1", "e4")).toEqual(["e5"]);
  });

  test("does not capture backwards", () => {
    expect(targets("4k3/8/8/8/4P3/3p1p2/8/4K3 w - - 0 1", "e4")).toEqual(["e5"]);
  });
});

describe("FIDE 3.7.3.1 and 3.7.3.2: en passant", () => {
  const fen = "4k3/8/8/8/3p4/8/4P3/4K3 w - - 0 1";

  test("a pawn beside a pawn that has just advanced two squares may capture it as if it had advanced one", () => {
    const after = playAll(fen, [{ from: "e2", to: "e4" }]);
    expect(after.enPassant).toBe("e3");
    expect(targets(toFen(after), "d4")).toEqual(["d3", "e3"]);
    const captured = playMove(after, { from: "d4", to: "e3" });
    expect(toFen(captured)).toBe("4k3/8/8/8/8/4p3/8/4K3 w - - 0 2");
  });

  test("only on the move immediately following the advance", () => {
    const later = playAll(fen, [
      { from: "e2", to: "e4" },
      { from: "e8", to: "d8" },
      { from: "e1", to: "d1" },
    ]);
    expect(later.enPassant).toBeNull();
    expect(targets(toFen(later), "d4")).toEqual(["d3"]);
  });

  test("not after a single-square advance to the same square", () => {
    const after = playAll("4k3/8/8/8/3p4/4P3/8/4K3 w - - 0 1", [{ from: "e3", to: "e4" }]);
    expect(after.enPassant).toBeNull();
    expect(targets(toFen(after), "d4")).toEqual(["d3"]);
  });

  test("White captures en passant too, and the capture resets the halfmove clock", () => {
    const after = playAll("4k3/7p/8/6P1/8/8/8/4K3 b - - 5 1", [{ from: "h7", to: "h5" }]);
    expect(after.enPassant).toBe("h6");
    expect(after.halfmoveClock).toBe(0);
    const captured = playMove(after, { from: "g5", to: "h6" });
    expect(toFen(captured)).toBe("4k3/8/7P/8/8/8/8/4K3 b - - 0 2");
  });

  test("a pawn that is not beside the advanced pawn may not capture it", () => {
    const after = playAll("4k3/8/8/8/8/3p4/4P3/4K3 w - - 0 1", [{ from: "e2", to: "e4" }]);
    expect(targets(toFen(after), "d3")).toEqual(["d2"]);
  });
});

describe("FIDE 3.7.3.3 to 3.7.3.5: promotion", () => {
  const fen = "3r4/4P3/8/8/8/8/8/k3K3 w - - 0 1";

  test("3.7.3.3: a pawn reaching the last rank is exchanged for a queen, rook, bishop or knight", () => {
    const moves = legalMoves(parseFen(fen), "e7");
    expect(moves.filter((move) => move.to === "e8").map((move) => move.promotion)).toEqual([
      "queen",
      "rook",
      "bishop",
      "knight",
    ]);
    expect(toFen(playMove(parseFen(fen), { from: "e7", to: "e8", promotion: "queen" }))).toBe(
      "3rQ3/8/8/8/8/8/8/k3K3 b - - 0 1",
    );
    expect(toFen(playMove(parseFen(fen), { from: "e7", to: "e8", promotion: "knight" }))).toBe(
      "3rN3/8/8/8/8/8/8/k3K3 b - - 0 1",
    );
  });

  test("promotion may be combined with a capture", () => {
    expect(toFen(playMove(parseFen(fen), { from: "e7", to: "d8", promotion: "rook" }))).toBe(
      "3R4/8/8/8/8/8/8/k3K3 b - - 0 1",
    );
  });

  test("the promotion piece must be given, and only for a pawn reaching the last rank", () => {
    expect(validateMove(parseFen(fen), { from: "e7", to: "e8" })).toEqual({
      ok: false,
      reason: "promotion-required",
    });
    expect(validateMove(parseFen(fen), { from: "e1", to: "e2", promotion: "queen" })).toEqual({
      ok: false,
      reason: "promotion-not-allowed",
    });
    const pawnOnE2 = "4k3/8/8/8/8/8/4P3/4K3 w - - 0 1";
    expect(validateMove(parseFen(pawnOnE2), { from: "e2", to: "e4", promotion: "queen" })).toEqual({
      ok: false,
      reason: "promotion-not-allowed",
    });
  });

  test("Black promotes on the first rank", () => {
    const black = parseFen("4k3/8/8/8/8/8/3p4/K7 b - - 0 1");
    expect(toFen(playMove(black, { from: "d2", to: "d1", promotion: "bishop" }))).toBe(
      "4k3/8/8/8/8/8/8/K2b4 w - - 0 2",
    );
  });

  test("3.7.3.4: the choice is not restricted to pieces captured before", () => {
    // White still has its queen; a second queen is fine.
    const after = playMove(parseFen("k7/4P3/8/8/8/8/8/3QK3 w - - 0 1"), {
      from: "e7",
      to: "e8",
      promotion: "queen",
    });
    const queens = [...after.placement.values()].filter(
      (piece) => piece.color === "white" && piece.type === "queen",
    );
    expect(queens).toHaveLength(2);
  });

  test("3.7.3.5: the new piece takes effect immediately", () => {
    const position = parseFen("k7/4P3/8/8/8/8/8/4K3 w - - 0 1");
    expect(isInCheck(playMove(position, { from: "e7", to: "e8", promotion: "queen" }))).toBe(true);
    expect(isInCheck(playMove(position, { from: "e7", to: "e8", promotion: "rook" }))).toBe(true);
    expect(isInCheck(playMove(position, { from: "e7", to: "e8", promotion: "knight" }))).toBe(false);
  });
});

describe("clocks after pawn moves", () => {
  test("a pawn move resets the halfmove clock; other moves add to it", () => {
    const position = parseFen("4k3/8/8/8/8/8/4P3/R3K3 w - - 7 20");
    expect(playMove(position, { from: "e2", to: "e3" }).halfmoveClock).toBe(0);
    expect(playMove(position, { from: "a1", to: "a2" }).halfmoveClock).toBe(8);
  });

  test("the fullmove number increases after Black's move only", () => {
    const position = parseFen("4k3/8/8/8/8/8/4P3/R3K3 w - - 0 20");
    const afterWhite = playMove(position, { from: "e2", to: "e3" });
    expect(afterWhite.fullmoveNumber).toBe(20);
    expect(playMove(afterWhite, { from: "e8", to: "e7" }).fullmoveNumber).toBe(21);
  });
});
