// Attack, check and legality: FIDE 1.4.1, 3.1.2, 3.1.3, 3.9 and 3.10.
import { describe, expect, test } from "vitest";
import { findKing, isAttacked, isInCheck, isKingAttacked } from "./attacks.ts";
import { parseFen } from "./fen.ts";
import { legalMoves, playMove, validateMove } from "./moves.ts";
import { parsePlacement, type Square } from "./position.ts";

function targets(fen: string, from: Square): Square[] {
  return legalMoves(parseFen(fen), from)
    .map((move) => move.to)
    .sort();
}

function allMoves(fen: string): string[] {
  return legalMoves(parseFen(fen))
    .map((move) => `${move.from}${move.to}`)
    .sort();
}

describe("FIDE 3.1.2 and 3.1.3: attacked squares", () => {
  test("each piece attacks the squares it could capture on", () => {
    const placement = parsePlacement("k7/8/8/8/2N5/8/8/7K");
    expect(isAttacked(placement, "b6", "white")).toBe(true);
    expect(isAttacked(placement, "c5", "white")).toBe(false);
    expect(isAttacked(placement, "b6", "black")).toBe(false);
  });

  test("pawns attack diagonally forward only", () => {
    const placement = parsePlacement("k7/8/8/8/4P3/8/8/7K");
    expect(isAttacked(placement, "d5", "white")).toBe(true);
    expect(isAttacked(placement, "f5", "white")).toBe(true);
    expect(isAttacked(placement, "e5", "white")).toBe(false);
    expect(isAttacked(placement, "d3", "white")).toBe(false);
    const black = parsePlacement("k7/8/8/4p3/8/8/8/7K");
    expect(isAttacked(black, "d4", "black")).toBe(true);
    expect(isAttacked(black, "f4", "black")).toBe(true);
    expect(isAttacked(black, "d6", "black")).toBe(false);
  });

  test("sliding attacks stop at the first piece", () => {
    const placement = parsePlacement("k7/8/8/8/8/2n5/8/B6K");
    expect(isAttacked(placement, "b2", "white")).toBe(true);
    expect(isAttacked(placement, "c3", "white")).toBe(true);
    expect(isAttacked(placement, "d4", "white")).toBe(false);
    const queen = parsePlacement("k7/8/8/8/8/8/8/Q6K");
    expect(isAttacked(queen, "a8", "white")).toBe(true);
    expect(isAttacked(queen, "h8", "white")).toBe(true);
    expect(isAttacked(queen, "g1", "white")).toBe(true);
    expect(isAttacked(queen, "b3", "white")).toBe(false);
  });

  test("the king attacks the adjoining squares", () => {
    const placement = parsePlacement("k7/8/8/8/8/8/8/7K");
    expect(isAttacked(placement, "g2", "white")).toBe(true);
    expect(isAttacked(placement, "f3", "white")).toBe(false);
  });

  test("3.1.3: a pinned piece still attacks", () => {
    // White bishop e4 is pinned by the rook e8 against the king e1, yet it
    // attacks c6, d5 and b7: the black king on c6 is in check and may not go
    // to b7 or d5.
    const fen = "4r3/8/2k5/8/4B3/8/8/4K3 b - - 0 1";
    expect(isInCheck(parseFen(fen))).toBe(true);
    expect(targets(fen, "c6")).toEqual(["b5", "b6", "c5", "c7", "d6", "d7"]);
  });

  test("findKing and isKingAttacked", () => {
    const placement = parsePlacement("4k3/8/8/8/8/8/8/4K2r");
    expect(findKing(placement, "white")).toBe("e1");
    expect(findKing(placement, "black")).toBe("e8");
    expect(findKing(parsePlacement("8/8/8/8/8/8/8/8"), "white")).toBeUndefined();
    expect(isKingAttacked(placement, "white")).toBe(true);
    expect(isKingAttacked(placement, "black")).toBe(false);
    expect(isKingAttacked(parsePlacement("8/8/8/8/8/8/8/8"), "white")).toBe(false);
  });
});

describe("FIDE 3.9: the king in check", () => {
  test("3.9.1: isInCheck says whether the side to move is in check", () => {
    expect(isInCheck(parseFen("4k3/8/8/8/8/8/8/4K2r w - - 0 1"))).toBe(true);
    expect(isInCheck(parseFen("4k3/8/8/8/8/8/8/4K2r b - - 0 1"))).toBe(false);
    expect(isInCheck(parseFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"))).toBe(false);
  });

  test("3.9.2: a pinned piece may move only along the line of the pin", () => {
    // White rook e2 is pinned by the black rook e8.
    expect(targets("4k3/8/8/4r3/8/8/4R3/4K3 w - - 0 1", "e2")).toEqual(["e3", "e4", "e5"]);
    // A pinned knight has no move at all.
    expect(targets("4k3/8/8/4r3/8/8/4N3/4K3 w - - 0 1", "e2")).toEqual([]);
  });

  test("3.9.2: the king may not move into check", () => {
    expect(targets("k7/8/8/8/8/8/8/K5r1 w - - 0 1", "a1")).toEqual(["a2", "b2"]);
    // Kings keep their distance: the squares next to the other king are attacked.
    expect(targets("8/8/8/8/8/2k5/8/K7 w - - 0 1", "a1")).toEqual(["a2", "b1"]);
  });

  test("3.9.2: a move must get the king out of check", () => {
    // Black rook e4 checks. White may move the king, capture with the
    // knight or interpose it; the rook a1 cannot help.
    expect(allMoves("4k3/8/8/8/4r3/2N5/8/R3K3 w Q - 0 1")).toEqual(
      ["c3e2", "c3e4", "e1d1", "e1d2", "e1f1", "e1f2"].sort(),
    );
  });

  test("3.9.2: in a double check only the king may move", () => {
    // Rook e8 and bishop h4 both check; the knight g1 could block one line only.
    expect(allMoves("k3r3/8/8/8/7b/8/8/4K1N1 w - - 0 1")).toEqual(["e1d1", "e1d2", "e1f1"]);
  });

  test("3.9.2: a discovered attack on one's own king makes the move illegal", () => {
    // Moving the bishop d2 off the d-file would expose the king d1 to the rook d8.
    expect(targets("3rk3/8/8/8/8/8/3B4/3K4 w - - 0 1", "d2")).toEqual([]);
  });
});

describe("FIDE 3.10: legal and illegal moves", () => {
  const fen = "4k3/8/8/8/4r3/2N5/8/R3K3 w Q - 0 1";

  test("a legal move is accepted and returned", () => {
    expect(validateMove(parseFen(fen), { from: "c3", to: "e4" })).toEqual({
      ok: true,
      move: { from: "c3", to: "e4" },
    });
  });

  test("an empty from square", () => {
    expect(validateMove(parseFen(fen), { from: "d4", to: "d5" })).toEqual({
      ok: false,
      reason: "empty-square",
    });
  });

  test("a piece of the side not to move", () => {
    expect(validateMove(parseFen(fen), { from: "e8", to: "e7" })).toEqual({
      ok: false,
      reason: "wrong-colour",
    });
  });

  test("a square the piece cannot reach", () => {
    expect(validateMove(parseFen(fen), { from: "c3", to: "c5" })).toEqual({
      ok: false,
      reason: "not-a-move",
    });
    expect(validateMove(parseFen(fen), { from: "a1", to: "a2", promotion: "queen" })).toEqual({
      ok: false,
      reason: "promotion-not-allowed",
    });
  });

  test("a move that leaves the king in check", () => {
    expect(validateMove(parseFen(fen), { from: "a1", to: "a2" })).toEqual({
      ok: false,
      reason: "exposes-king",
    });
    expect(validateMove(parseFen(fen), { from: "e1", to: "e2" })).toEqual({
      ok: false,
      reason: "exposes-king",
    });
  });

  test("playMove throws with the reason", () => {
    expect(() => playMove(parseFen(fen), { from: "a1", to: "a2" })).toThrow(
      "Illegal move a1a2: exposes-king",
    );
    expect(() =>
      playMove(parseFen("k7/4P3/8/8/8/8/8/4K3 w - - 0 1"), { from: "e7", to: "e8" }),
    ).toThrow("Illegal move e7e8: promotion-required");
  });
});
