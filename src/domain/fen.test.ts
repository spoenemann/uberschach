import { describe, expect, test } from "vitest";
import { isSquare, parseFen, placementToFen, STARTING_FEN, toFen } from "./fen.ts";
import { parsePlacement } from "./position.ts";

describe("parseFen", () => {
  test("reads all six fields", () => {
    const position = parseFen("r3k2r/8/8/3pP3/8/8/8/R3K2R w Kq d6 4 31");
    expect(position.placement.size).toBe(8);
    expect(position.turn).toBe("white");
    expect(position.castling).toEqual({
      white: { kingSide: true, queenSide: false },
      black: { kingSide: false, queenSide: true },
    });
    expect(position.enPassant).toBe("d6");
    expect(position.halfmoveClock).toBe(4);
    expect(position.fullmoveNumber).toBe(31);
  });

  test("reads the starting position with every right (FIDE 1.2: White moves first)", () => {
    const position = parseFen(STARTING_FEN);
    expect(position.turn).toBe("white");
    expect(position.castling).toEqual({
      white: { kingSide: true, queenSide: true },
      black: { kingSide: true, queenSide: true },
    });
    expect(position.enPassant).toBeNull();
    expect(position.halfmoveClock).toBe(0);
    expect(position.fullmoveNumber).toBe(1);
  });

  test("fills missing trailing fields with the values of a game start", () => {
    const position = parseFen("4k3/8/8/8/8/8/8/4K3");
    expect(position.turn).toBe("white");
    expect(position.castling).toEqual({
      white: { kingSide: false, queenSide: false },
      black: { kingSide: false, queenSide: false },
    });
    expect(position.enPassant).toBeNull();
    expect(position.halfmoveClock).toBe(0);
    expect(position.fullmoveNumber).toBe(1);
    expect(parseFen("4k3/8/8/8/8/8/8/4K3 b").turn).toBe("black");
  });

  test("accepts castling letters in any order", () => {
    expect(toFen(parseFen("4k3/8/8/8/8/8/8/4K3 w qkQK - 0 1"))).toBe(
      "4k3/8/8/8/8/8/8/4K3 w KQkq - 0 1",
    );
  });

  test("rejects a side to move other than w or b", () => {
    expect(() => parseFen("4k3/8/8/8/8/8/8/4K3 white")).toThrow(/side to move/);
  });

  test("rejects unknown or repeated castling letters", () => {
    expect(() => parseFen("4k3/8/8/8/8/8/8/4K3 w X - 0 1")).toThrow(/castling/);
    expect(() => parseFen("4k3/8/8/8/8/8/8/4K3 w KK - 0 1")).toThrow(/castling/);
    expect(() => parseFen("4k3/8/8/8/8/8/8/4K3 w K- - 0 1")).toThrow(/castling/);
  });

  test("rejects an en passant square that is not a square", () => {
    expect(() => parseFen("4k3/8/8/8/8/8/8/4K3 w - e9 0 1")).toThrow(/en passant/);
    expect(() => parseFen("4k3/8/8/8/8/8/8/4K3 w - x 0 1")).toThrow(/en passant/);
  });

  test("rejects an en passant square on the wrong rank for the side to move", () => {
    expect(() => parseFen("4k3/8/8/8/8/8/8/4K3 w - e3 0 1")).toThrow(/rank 6/);
    expect(() => parseFen("4k3/8/8/8/8/8/8/4K3 b - e6 0 1")).toThrow(/rank 3/);
    expect(parseFen("4k3/8/8/8/8/8/8/4K3 w - e6 0 1").enPassant).toBe("e6");
    expect(parseFen("4k3/8/8/8/8/8/8/4K3 b - e3 0 1").enPassant).toBe("e3");
  });

  test("rejects clocks that are not counts", () => {
    expect(() => parseFen("4k3/8/8/8/8/8/8/4K3 w - - x 1")).toThrow(/halfmove clock/);
    expect(() => parseFen("4k3/8/8/8/8/8/8/4K3 w - - -1 1")).toThrow(/halfmove clock/);
    expect(() => parseFen("4k3/8/8/8/8/8/8/4K3 w - - 0 0")).toThrow(/fullmove number/);
    expect(() => parseFen("4k3/8/8/8/8/8/8/4K3 w - - 0 1.5")).toThrow(/fullmove number/);
  });

  test("requires exactly one king per side", () => {
    expect(() => parseFen("8/8/8/8/8/8/8/4K3 w - - 0 1")).toThrow(/one black king, found 0/);
    expect(() => parseFen("4k3/8/8/8/8/8/8/4KK2 w - - 0 1")).toThrow(/one white king, found 2/);
  });

  test("rejects a bad placement", () => {
    expect(() => parseFen("4k3/8/8/8/8/8/4K3 w - - 0 1")).toThrow(/8 ranks/);
  });
});

describe("toFen", () => {
  test("writes back what parseFen read", () => {
    for (const fen of [
      STARTING_FEN,
      "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
      "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
      "8/2p5/3p4/KP5r/1R3p1k/8/4P1P1/8 w - - 0 1",
      "4k3/8/8/8/8/8/8/4K3 b - - 99 120",
    ]) {
      expect(toFen(parseFen(fen))).toBe(fen);
    }
  });

  test("writes an empty board as eights", () => {
    expect(placementToFen(parsePlacement("8/8/8/8/8/8/8/8"))).toBe("8/8/8/8/8/8/8/8");
  });
});

describe("isSquare", () => {
  test("accepts a1 to h8 and nothing else", () => {
    expect(isSquare("a1")).toBe(true);
    expect(isSquare("h8")).toBe(true);
    expect(isSquare("i1")).toBe(false);
    expect(isSquare("a9")).toBe(false);
    expect(isSquare("a")).toBe(false);
    expect(isSquare("a10")).toBe(false);
  });
});
