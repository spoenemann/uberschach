// Candidate arrows on the board: from the piece's square to its target,
// drawn as one filled polygon per arrow in board units (one unit per
// square, origin at the top-left corner as drawn, so the orientation is
// part of the geometry). The widths are drawing units and live here with
// the drawing, as the piece stroke widths do (docs/design-docs/design-system.md,
// Amendments, 2026-10-23, the explorer).

import { fileIndex, rankIndex, type Color, type Square } from "../../domain/position.ts";

/** Strong for a candidate rated 5, light for one rated 4, faint for one rated 3. */
export type ArrowStrength = "strong" | "light" | "faint";

export interface BoardArrow {
  readonly from: Square;
  readonly to: Square;
  readonly strength: ArrowStrength;
  /** Drawn as under the pointer: the pointer is on the same candidate elsewhere. */
  readonly highlighted?: boolean;
}

interface ArrowGeometry {
  /** The width of the shaft. */
  readonly shaft: number;
  /** The width of the head at its base. */
  readonly head: number;
  /** The length of the head along the arrow. */
  readonly headLength: number;
}

const GEOMETRY: Readonly<Record<ArrowStrength, ArrowGeometry>> = {
  strong: { shaft: 0.17, head: 0.5, headLength: 0.42 },
  light: { shaft: 0.12, head: 0.4, headLength: 0.36 },
  faint: { shaft: 0.08, head: 0.32, headLength: 0.3 },
};

/**
 * The arrow starts this far from the centre of its square, so the piece
 * underneath stays visible and clickable, and ends at the centre of the
 * target square.
 */
const TAIL_OFFSET = 0.36;

/** The centre of the square, as drawn for the orientation. */
export function squareCentre(square: Square, orientation: Color): readonly [number, number] {
  const file = fileIndex(square);
  const rank = rankIndex(square);
  return orientation === "white" ? [file + 0.5, 7.5 - rank] : [7.5 - file, rank + 0.5];
}

/**
 * The arrows in the order they are drawn: the longest first, so a shorter
 * arrow lying on a longer one (a pawn's single step on its double step) is
 * on top and stays reachable by the pointer. Equal lengths keep their order.
 */
export function drawingOrder(arrows: readonly BoardArrow[]): readonly BoardArrow[] {
  const length = (arrow: BoardArrow) => {
    const [fromX, fromY] = squareCentre(arrow.from, "white");
    const [toX, toY] = squareCentre(arrow.to, "white");
    return Math.hypot(toX - fromX, toY - fromY);
  };
  return [...arrows].sort((a, b) => length(b) - length(a));
}

/** The SVG path of the arrow: a shaft with a head, as one closed polygon. */
export function arrowPath(arrow: BoardArrow, orientation: Color): string {
  const { shaft, head, headLength } = GEOMETRY[arrow.strength];
  const [fromX, fromY] = squareCentre(arrow.from, orientation);
  const [toX, toY] = squareCentre(arrow.to, orientation);
  const length = Math.hypot(toX - fromX, toY - fromY);
  const dx = (toX - fromX) / length;
  const dy = (toY - fromY) / length;
  // The normal to the direction, for the half-widths.
  const nx = -dy;
  const ny = dx;
  const startX = fromX + dx * TAIL_OFFSET;
  const startY = fromY + dy * TAIL_OFFSET;
  const baseX = toX - dx * headLength;
  const baseY = toY - dy * headLength;
  const points: (readonly [number, number])[] = [
    [startX + (nx * shaft) / 2, startY + (ny * shaft) / 2],
    [baseX + (nx * shaft) / 2, baseY + (ny * shaft) / 2],
    [baseX + (nx * head) / 2, baseY + (ny * head) / 2],
    [toX, toY],
    [baseX - (nx * head) / 2, baseY - (ny * head) / 2],
    [baseX - (nx * shaft) / 2, baseY - (ny * shaft) / 2],
    [startX - (nx * shaft) / 2, startY - (ny * shaft) / 2],
  ];
  return `M${points.map(([x, y]) => `${x.toFixed(3)},${y.toFixed(3)}`).join("L")}Z`;
}
