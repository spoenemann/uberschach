import { describe, expect, test } from "vitest";
import {
  describePosition,
  parseFen,
  squareColor,
  STARTING_FEN,
} from "./position.ts";

describe("parseFen", () => {
  test("reads the starting position", () => {
    const position = parseFen(STARTING_FEN);
    expect(position.size).toBe(32);
    expect(position.get("e1")).toEqual({ color: "white", type: "king" });
    expect(position.get("d8")).toEqual({ color: "black", type: "queen" });
    expect(position.get("a1")).toEqual({ color: "white", type: "rook" });
    expect(position.get("g8")).toEqual({ color: "black", type: "knight" });
    expect(position.get("c2")).toEqual({ color: "white", type: "pawn" });
    expect(position.get("e4")).toBeUndefined();
  });

  test("reads a placement without the other FEN fields", () => {
    const position = parseFen("8/8/8/4k3/8/8/8/4K3");
    expect([...position]).toEqual([
      ["e5", { color: "black", type: "king" }],
      ["e1", { color: "white", type: "king" }],
    ]);
  });

  test("skips empty squares inside a rank", () => {
    const position = parseFen("r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3");
    expect(position.get("b5")).toEqual({ color: "white", type: "bishop" });
    expect(position.get("c6")).toEqual({ color: "black", type: "knight" });
    expect(position.get("f1")).toBeUndefined();
    expect(position.get("e5")).toEqual({ color: "black", type: "pawn" });
  });

  test("rejects a placement with the wrong number of ranks", () => {
    expect(() => parseFen("8/8/8")).toThrow(/8 ranks, found 3/);
  });

  test("rejects an unknown piece letter", () => {
    expect(() => parseFen("8/8/8/8/8/8/8/4X3")).toThrow(/at "X"/);
  });

  test("rejects a rank that is too long or too short", () => {
    expect(() => parseFen("9/8/8/8/8/8/8/8")).toThrow(/at "9"/);
    expect(() => parseFen("8/8/8/8/8/8/8/44K")).toThrow(/at "K"/);
    expect(() => parseFen("8/8/8/8/8/8/8/7")).toThrow(/covers 7 squares/);
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

describe("describePosition", () => {
  test("lists each side by type from king to pawn, then by square", () => {
    const position = parseFen("4k3/8/8/8/8/8/P7/R3K1N1");
    expect(describePosition(position)).toBe(
      "White: king e1, rook a1, knight g1, pawn a2. Black: king e8.",
    );
  });

  test("says when a side has no pieces", () => {
    expect(describePosition(parseFen("8/8/8/8/8/8/8/8"))).toBe(
      "White: none. Black: none.",
    );
  });
});
