import { describe, expect, test } from "vitest";
import { STARTING_FEN } from "./fen.ts";
import {
  fileIndex,
  opponent,
  parsePlacement,
  rankIndex,
  shift,
  squareAt,
  squareColor,
} from "./position.ts";

describe("parsePlacement", () => {
  test("reads the starting position", () => {
    const position = parsePlacement(STARTING_FEN);
    expect(position.size).toBe(32);
    expect(position.get("e1")).toEqual({ color: "white", type: "king" });
    expect(position.get("d8")).toEqual({ color: "black", type: "queen" });
    expect(position.get("a1")).toEqual({ color: "white", type: "rook" });
    expect(position.get("g8")).toEqual({ color: "black", type: "knight" });
    expect(position.get("c2")).toEqual({ color: "white", type: "pawn" });
    expect(position.get("e4")).toBeUndefined();
  });

  test("reads a placement without the other FEN fields", () => {
    const position = parsePlacement("8/8/8/4k3/8/8/8/4K3");
    expect([...position]).toEqual([
      ["e5", { color: "black", type: "king" }],
      ["e1", { color: "white", type: "king" }],
    ]);
  });

  test("skips empty squares inside a rank", () => {
    const position = parsePlacement("r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3");
    expect(position.get("b5")).toEqual({ color: "white", type: "bishop" });
    expect(position.get("c6")).toEqual({ color: "black", type: "knight" });
    expect(position.get("f1")).toBeUndefined();
    expect(position.get("e5")).toEqual({ color: "black", type: "pawn" });
  });

  test("rejects a placement with the wrong number of ranks", () => {
    expect(() => parsePlacement("8/8/8")).toThrow(/8 ranks, found 3/);
  });

  test("rejects an unknown piece letter", () => {
    expect(() => parsePlacement("8/8/8/8/8/8/8/4X3")).toThrow(/at "X"/);
  });

  test("rejects a rank that is too long or too short", () => {
    expect(() => parsePlacement("9/8/8/8/8/8/8/8")).toThrow(/at "9"/);
    expect(() => parsePlacement("8/8/8/8/8/8/8/44K")).toThrow(/at "K"/);
    expect(() => parsePlacement("8/8/8/8/8/8/8/7")).toThrow(/covers 7 squares/);
  });
});

describe("squareColor", () => {
  test("a1 is dark and colours alternate", () => {
    expect(squareColor("a1")).toBe("dark");
    expect(squareColor("b1")).toBe("light");
    expect(squareColor("a2")).toBe("light");
    expect(squareColor("h1")).toBe("light");
    expect(squareColor("h8")).toBe("dark");
    expect(squareColor("e4")).toBe("light");
    expect(squareColor("d4")).toBe("dark");
  });
});

describe("square geometry", () => {
  test("indexes files and ranks from zero", () => {
    expect(fileIndex("a1")).toBe(0);
    expect(fileIndex("h8")).toBe(7);
    expect(rankIndex("a1")).toBe(0);
    expect(rankIndex("e4")).toBe(3);
  });

  test("names a square by indices and rejects squares off the board", () => {
    expect(squareAt(4, 3)).toBe("e4");
    expect(squareAt(-1, 3)).toBeUndefined();
    expect(squareAt(8, 0)).toBeUndefined();
    expect(squareAt(0, 8)).toBeUndefined();
  });

  test("shifts a square and stops at the edge", () => {
    expect(shift("e4", 1, 1)).toBe("f5");
    expect(shift("e4", -4, 0)).toBe("a4");
    expect(shift("a1", -1, 0)).toBeUndefined();
    expect(shift("h8", 0, 1)).toBeUndefined();
  });

  test("opponent swaps the colours", () => {
    expect(opponent("white")).toBe("black");
    expect(opponent("black")).toBe("white");
  });
});
