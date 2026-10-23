import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import type { PieceType } from "../../domain/position.ts";
import { Piece } from "./Piece.tsx";
import { PIECE_DRAWINGS } from "./pieceShapes.ts";

const TYPES = Object.keys(PIECE_DRAWINGS) as PieceType[];

test("every piece draws its parts and lines and names itself", () => {
  expect(TYPES).toHaveLength(6);
  for (const type of TYPES) {
    for (const color of ["white", "black"] as const) {
      const { container, unmount } = render(<Piece piece={{ color, type }} />);
      const svg = container.querySelector("svg");
      expect(svg?.getAttribute("aria-label")).toBe(`${color} ${type}`);
      expect(svg?.dataset["color"]).toBe(color);
      expect(svg?.querySelectorAll("g > path").length).toBe(
        PIECE_DRAWINGS[type].parts.length,
      );
      expect(svg?.querySelector("g + path")?.getAttribute("d")).toBe(
        PIECE_DRAWINGS[type].lines,
      );
      unmount();
    }
  }
});

test("every path is closed and starts with a move", () => {
  for (const type of TYPES) {
    for (const d of PIECE_DRAWINGS[type].parts) {
      expect(d.startsWith("M")).toBe(true);
      expect(d.endsWith("Z")).toBe(true);
    }
    expect(PIECE_DRAWINGS[type].lines.startsWith("M")).toBe(true);
  }
});
