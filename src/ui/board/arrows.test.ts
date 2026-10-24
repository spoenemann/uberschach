import { describe, expect, test } from "vitest";
import { arrowPath, drawingOrder, squareCentre } from "./arrows.ts";

describe("squareCentre", () => {
  test("puts a1 bottom-left for white and top-right for black", () => {
    expect(squareCentre("a1", "white")).toEqual([0.5, 7.5]);
    expect(squareCentre("h8", "white")).toEqual([7.5, 0.5]);
    expect(squareCentre("a1", "black")).toEqual([7.5, 0.5]);
    expect(squareCentre("h8", "black")).toEqual([0.5, 7.5]);
  });
});

describe("arrowPath", () => {
  test("is a closed polygon that ends at the centre of the target square", () => {
    const path = arrowPath({ from: "e2", to: "e4", strength: "strong" }, "white");
    expect(path).toMatch(/^M[\d.,L-]+Z$/);
    // e4 as drawn for White: file e is the fifth column, rank 4 the fifth row from the top.
    expect(path).toContain("L4.500,4.500L");
  });

  test("starts off the centre of the piece's square, so the piece stays visible", () => {
    const path = arrowPath({ from: "e2", to: "e4", strength: "strong" }, "white");
    const [first] = path.slice(1).split("L");
    const [, y] = (first ?? "").split(",").map(Number);
    // e2's centre is at y 6.5; the arrow starts 0.36 above it, toward e4.
    expect(y).toBeCloseTo(6.14, 2);
  });

  test("a light arrow is narrower than a strong one", () => {
    const width = (strength: "strong" | "light") => {
      const path = arrowPath({ from: "e2", to: "e4", strength }, "white");
      const xs = path.slice(1, -1).split("L").map((point) => Number(point.split(",")[0]));
      return Math.max(...xs) - Math.min(...xs);
    };
    expect(width("light")).toBeLessThan(width("strong"));
  });

  test("follows the orientation", () => {
    const forWhite = arrowPath({ from: "g1", to: "f3", strength: "strong" }, "white");
    const forBlack = arrowPath({ from: "g1", to: "f3", strength: "strong" }, "black");
    expect(forWhite).toContain("L5.500,5.500L");
    expect(forBlack).toContain("L2.500,2.500L");
  });
});

describe("drawingOrder", () => {
  test("draws a pawn's double step before its single step, so the single step is on top", () => {
    const single = { from: "e2", to: "e3", strength: "strong" } as const;
    const double = { from: "e2", to: "e4", strength: "light" } as const;
    expect(drawingOrder([single, double])).toEqual([double, single]);
    expect(drawingOrder([double, single])).toEqual([double, single]);
  });

  test("keeps the order of arrows of equal length", () => {
    const knight = { from: "g1", to: "f3", strength: "strong" } as const;
    const other = { from: "b1", to: "c3", strength: "light" } as const;
    expect(drawingOrder([knight, other])).toEqual([knight, other]);
    expect(drawingOrder([other, knight])).toEqual([other, knight]);
  });
});
