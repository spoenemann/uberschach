// Castling: FIDE 3.8.2, when the right is lost (3.8.2.1) and when it is
// temporarily prevented (3.8.2.2).
import { describe, expect, test } from "vitest";
import { parseFen, toFen } from "./fen.ts";
import { legalMoves, playMove, validateMove, type Move } from "./moves.ts";
import type { Position, Square } from "./position.ts";

const BOTH_SIDES = "r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1";

function targets(position: Position, from: Square): Square[] {
  return legalMoves(position, from)
    .map((move) => move.to)
    .sort();
}

function kingTargets(fen: string, from: Square): Square[] {
  return targets(parseFen(fen), from);
}

function playAll(fen: string, moves: readonly Move[]): Position {
  return moves.reduce((position, move) => playMove(position, move), parseFen(fen));
}

describe("FIDE 3.8.2: castling", () => {
  test("the king moves two squares towards the rook, which jumps to the square the king crossed", () => {
    const kingSide = playMove(parseFen(BOTH_SIDES), { from: "e1", to: "g1" });
    expect(toFen(kingSide)).toBe("r3k2r/8/8/8/8/8/8/R4RK1 b kq - 1 1");
    const queenSide = playMove(parseFen(BOTH_SIDES), { from: "e1", to: "c1" });
    expect(toFen(queenSide)).toBe("r3k2r/8/8/8/8/8/8/2KR3R b kq - 1 1");
  });

  test("Black castles on its first rank", () => {
    const black = parseFen("r3k2r/8/8/8/8/8/8/R3K2R b KQkq - 0 1");
    expect(toFen(playMove(black, { from: "e8", to: "g8" }))).toBe(
      "r4rk1/8/8/8/8/8/8/R3K2R w KQ - 1 2",
    );
    expect(toFen(playMove(black, { from: "e8", to: "c8" }))).toBe(
      "2kr3r/8/8/8/8/8/8/R3K2R w KQ - 1 2",
    );
  });

  test("castling is listed among the king's moves", () => {
    expect(kingTargets(BOTH_SIDES, "e1")).toEqual(["c1", "d1", "d2", "e2", "f1", "f2", "g1"]);
  });
});

describe("FIDE 3.8.2.1: the right to castle is lost", () => {
  test("1) when the king has moved, even if it returns", () => {
    const after = playAll(BOTH_SIDES, [
      { from: "e1", to: "e2" },
      { from: "e8", to: "e7" },
      { from: "e2", to: "e1" },
      { from: "e7", to: "e8" },
    ]);
    expect(toFen(after)).toBe("r3k2r/8/8/8/8/8/8/R3K2R w - - 4 3");
    expect(targets(after, "e1")).toEqual(["d1", "d2", "e2", "f1", "f2"]);
  });

  test("2) with a rook that has moved, even if it returns", () => {
    const after = playAll(BOTH_SIDES, [
      { from: "h1", to: "h2" },
      { from: "a8", to: "a7" },
      { from: "h2", to: "h1" },
      { from: "a7", to: "a8" },
    ]);
    expect(toFen(after)).toBe("r3k2r/8/8/8/8/8/8/R3K2R w Qk - 4 3");
    expect(targets(after, "e1")).toEqual(["c1", "d1", "d2", "e2", "f1", "f2"]);
  });

  test("with a rook that has been captured", () => {
    const after = playAll("r3k2r/8/8/8/8/8/8/R3K2R b KQkq - 0 1", [{ from: "h8", to: "h1" }]);
    expect(toFen(after)).toBe("r3k3/8/8/8/8/8/8/R3K2r w Qq - 0 2");
  });
});

describe("FIDE 3.8.2.2: castling is prevented temporarily", () => {
  test("3) while the king is in check", () => {
    // Black rook e4 gives check along the file.
    expect(kingTargets("4k3/8/8/8/4r3/8/8/R3K2R w KQ - 0 1", "e1")).toEqual(["d1", "d2", "f1", "f2"]);
  });

  test("3) when the square the king must cross is attacked", () => {
    // Black rook f7 attacks f1: no king side; queen side is still possible.
    expect(kingTargets("4k3/5r2/8/8/8/8/8/R3K2R w KQ - 0 1", "e1")).toContain("c1");
    expect(kingTargets("4k3/5r2/8/8/8/8/8/R3K2R w KQ - 0 1", "e1")).not.toContain("g1");
    // Black rook d7 attacks d1: no queen side.
    expect(kingTargets("4k3/3r4/8/8/8/8/8/R3K2R w KQ - 0 1", "e1")).not.toContain("c1");
    expect(kingTargets("4k3/3r4/8/8/8/8/8/R3K2R w KQ - 0 1", "e1")).toContain("g1");
  });

  test("3) when the square the king is to occupy is attacked", () => {
    expect(kingTargets("4k3/6r1/8/8/8/8/8/R3K2R w KQ - 0 1", "e1")).not.toContain("g1");
    expect(kingTargets("4k3/2r5/8/8/8/8/8/R3K2R w KQ - 0 1", "e1")).not.toContain("c1");
  });

  test("an attack on b1 does not prevent queen side castling: the king does not cross it", () => {
    // Black bishop f5 attacks b1 along f5-e4-d3-c2-b1 and nothing on the king's path.
    expect(kingTargets("4k3/8/8/5b2/8/8/8/R3K2R w KQ - 0 1", "e1")).toContain("c1");
  });

  test("an attack on the rook does not prevent castling", () => {
    // Black rook a8 attacks a1 down the open a-file.
    expect(kingTargets("r3k3/8/8/8/8/8/8/R3K2R w KQ - 0 1", "e1")).toContain("c1");
  });

  test("4) when any piece stands between the king and the rook", () => {
    expect(kingTargets("4k3/8/8/8/8/8/8/R3K1NR w KQ - 0 1", "e1")).not.toContain("g1");
    expect(kingTargets("4k3/8/8/8/8/8/8/RN2K2R w KQ - 0 1", "e1")).not.toContain("c1");
    expect(kingTargets("4k3/8/8/8/8/8/8/R2BK2R w KQ - 0 1", "e1")).not.toContain("c1");
    expect(kingTargets("4k3/8/8/8/8/8/8/R3KB1R w KQ - 0 1", "e1")).not.toContain("g1");
    // An opponent's piece between counts the same.
    expect(kingTargets("4k3/8/8/8/8/8/8/Rn2K2R w KQ - 0 1", "e1")).not.toContain("c1");
  });

  test("the right alone is not enough: the rook must stand on its square", () => {
    expect(kingTargets("4k3/8/8/8/8/8/8/4K2R w KQ - 0 1", "e1")).not.toContain("c1");
    expect(kingTargets("4k3/8/8/8/8/8/8/4K2R w KQ - 0 1", "e1")).toContain("g1");
    expect(kingTargets("4k3/8/8/8/8/8/8/N3K2R w KQ - 0 1", "e1")).not.toContain("c1");
  });

  test("a king away from its original square does not castle, whatever the FEN claims", () => {
    expect(kingTargets("4k3/8/8/8/8/8/8/R2K3R w KQ - 0 1", "d1")).toEqual(["c1", "c2", "d2", "e1", "e2"]);
  });

  test("validateMove reports a prevented castling as not a move", () => {
    const inCheck = parseFen("4k3/8/8/8/4r3/8/8/R3K2R w KQ - 0 1");
    expect(validateMove(inCheck, { from: "e1", to: "g1" })).toEqual({ ok: false, reason: "not-a-move" });
    const noRight = parseFen("r3k2r/8/8/8/8/8/8/R3K2R w - - 0 1");
    expect(validateMove(noRight, { from: "e1", to: "g1" })).toEqual({ ok: false, reason: "not-a-move" });
  });
});
