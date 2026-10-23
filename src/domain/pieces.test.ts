// The moves of the pieces other than the pawn: FIDE 3.1 to 3.6 and 3.8.1.
import { describe, expect, test } from "vitest";
import { applyMove } from "./apply.ts";
import { parseFen, toFen } from "./fen.ts";
import { legalMoves, playMove } from "./moves.ts";
import type { Square } from "./position.ts";

/** Where the piece on `from` may go, sorted. */
function targets(fen: string, from: Square): Square[] {
  return legalMoves(parseFen(fen), from)
    .map((move) => move.to)
    .sort();
}

describe("FIDE 3.1: occupied squares", () => {
  test("a piece may not move to a square occupied by a piece of its own colour", () => {
    // Rook a1 with own pawn on a2 and own knight on b1.
    const rook = targets("4k3/8/8/8/8/8/P7/RN2K3 w - - 0 1", "a1");
    expect(rook).toEqual([]);
  });

  test("3.1.1: moving onto an opponent's piece captures it as part of the move", () => {
    const position = parseFen("4k3/8/8/8/8/8/p7/R3K3 w - - 0 1");
    const after = playMove(position, { from: "a1", to: "a2" });
    expect(after.placement.get("a2")).toEqual({ color: "white", type: "rook" });
    expect(after.placement.get("a1")).toBeUndefined();
    expect(after.placement.size).toBe(position.placement.size - 1);
    expect(toFen(after)).toBe("4k3/8/8/8/8/8/R7/4K3 b - - 0 1");
  });

  test("1.4.1: the opponent's king is never captured, even in an illegal position", () => {
    // Black king on e8 is already in check from the rook on e2 with White to move.
    expect(targets("4k3/8/8/8/8/8/4R3/K7 w - - 0 1", "e2")).not.toContain("e8");
  });
});

describe("FIDE 3.2 to 3.5: bishop, rook and queen", () => {
  const empty = "k7/8/8/8/3X4/8/8/7K w - - 0 1";

  test("3.2: the bishop moves along its diagonals", () => {
    expect(targets(empty.replace("X", "B"), "d4")).toEqual(
      ["a1", "a7", "b2", "b6", "c3", "c5", "e3", "e5", "f2", "f6", "g1", "g7", "h8"].sort(),
    );
  });

  test("3.3: the rook moves along its file and rank", () => {
    expect(targets(empty.replace("X", "R"), "d4")).toEqual(
      ["a4", "b4", "c4", "d1", "d2", "d3", "d5", "d6", "d7", "d8", "e4", "f4", "g4", "h4"].sort(),
    );
  });

  test("3.4: the queen moves along file, rank and diagonals", () => {
    expect(targets(empty.replace("X", "Q"), "d4")).toHaveLength(27);
  });

  test("3.5: bishop, rook and queen may not move over intervening pieces", () => {
    // Rook d4, own pawn d6, opponent's pawn d2, opponent's knight g4.
    const rook = targets("k7/8/3P4/8/3R2n1/8/3p4/7K w - - 0 1", "d4");
    expect(rook).toContain("d5");
    expect(rook).not.toContain("d6");
    expect(rook).not.toContain("d7");
    expect(rook).toContain("d2");
    expect(rook).not.toContain("d1");
    expect(rook).toContain("g4");
    expect(rook).not.toContain("h4");
    // Bishop a1 behind own pawn b2 has no move; behind an opponent's pawn, one capture.
    expect(targets("k7/8/8/8/8/8/1P6/B6K w - - 0 1", "a1")).toEqual([]);
    expect(targets("k7/8/8/8/8/8/1p6/B6K w - - 0 1", "a1")).toEqual(["b2"]);
  });
});

describe("FIDE 3.6: the knight", () => {
  test("moves to the nearest squares not on its rank, file or diagonal", () => {
    expect(targets("k7/8/8/8/3N4/8/8/7K w - - 0 1", "d4")).toEqual(
      ["b3", "b5", "c2", "c6", "e2", "e6", "f3", "f5"].sort(),
    );
  });

  test("jumps over pieces of either colour", () => {
    // Knight d4 ringed by pieces of both colours.
    expect(targets("k7/8/8/2PPP3/2pNp3/2PPP3/8/7K w - - 0 1", "d4")).toEqual(
      ["b3", "b5", "c2", "c6", "e2", "e6", "f3", "f5"].sort(),
    );
  });

  test("stays on the board from a corner", () => {
    expect(targets("k7/8/8/8/8/8/8/N6K w - - 0 1", "a1")).toEqual(["b3", "c2"]);
  });
});

describe("FIDE 3.8.1: the king moves to an adjoining square", () => {
  test("one square in any direction", () => {
    expect(targets("k7/8/8/8/4K3/8/8/8 w - - 0 1", "e4")).toEqual(
      ["d3", "d4", "d5", "e3", "e5", "f3", "f4", "f5"].sort(),
    );
  });

  test("not onto its own pieces, and capturing the opponent's", () => {
    expect(targets("k7/8/8/8/3PK3/4p3/8/8 w - - 0 1", "e4")).toEqual(
      ["d3", "d5", "e3", "e5", "f3", "f4", "f5"].sort(),
    );
  });
});

describe("legalMoves for a square", () => {
  test("is empty for an empty square or an opponent's piece", () => {
    expect(targets("k7/8/8/8/8/8/8/7K w - - 0 1", "e4")).toEqual([]);
    expect(targets("k7/8/8/8/8/8/8/7K w - - 0 1", "a8")).toEqual([]);
  });

  test("lists twenty moves for White at the start (1.2: White moves first)", () => {
    expect(legalMoves(parseFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"))).toHaveLength(20);
  });

  test("applyMove refuses a square without a piece of the side to move", () => {
    const position = parseFen("k7/8/8/8/8/8/8/7K w - - 0 1");
    expect(() => applyMove(position, { from: "e4", to: "e5" })).toThrow("No white piece on e4");
    expect(() => applyMove(position, { from: "a8", to: "a7" })).toThrow("No white piece on a8");
  });
});
