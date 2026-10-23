// The chess piece drawings (docs/design-docs/design-system.md, Pieces).
//
// Every piece is drawn on a 100 × 100 square with the base at y ≈ 90. A piece
// is a list of closed `parts`, painted in order, each filled with the piece's
// colour and outlined; where a later part overlaps an earlier one its outline
// draws the joint, which is how a collar sits on a stem. `lines` are stroked
// only, in the opposite colour: on a light piece they merge with the outline,
// on a dark piece they are what gives it structure against a dark square.
// Paths run clockwise so a part never cancels its own fill.

import type { PieceType } from "../../domain/position.ts";

export interface PieceDrawing {
  readonly parts: readonly string[];
  readonly lines: string;
}

/** Outline stroke width, in drawing units; the fill is inset by half of it. */
export const OUTLINE_WIDTH = 4;
/** Width of the detail lines, in drawing units. */
export const LINE_WIDTH = 3.5;

function circle(cx: number, cy: number, r: number): string {
  return `M${cx - r} ${cy}a${r} ${r} 0 1 1 ${2 * r} 0a${r} ${r} 0 1 1 ${-2 * r} 0Z`;
}

function ellipse(cx: number, cy: number, rx: number, ry: number): string {
  return `M${cx - rx} ${cy}a${rx} ${ry} 0 1 1 ${2 * rx} 0a${rx} ${ry} 0 1 1 ${-2 * rx} 0Z`;
}

const SLAB_RADIUS = 3;

/** A slab with rounded corners: the plinth every piece stands on. */
function slab(x: number, y: number, w: number, h: number): string {
  const r = SLAB_RADIUS;
  return (
    `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}` +
    `a${r} ${r} 0 0 1 ${-r} ${r}h${-(w - 2 * r)}a${r} ${r} 0 0 1 ${-r} ${-r}` +
    `v${-(h - 2 * r)}a${r} ${r} 0 0 1 ${r} ${-r}Z`
  );
}

const BASE_WIDE = slab(24, 80, 52, 10);
const BASE_NARROW = slab(26, 80, 48, 10);
const BASE_LINE_WIDE = "M30 80H70";
const BASE_LINE_NARROW = "M32 80H68";

/** The royal body shared by king and queen: shoulders, a waist, a flared foot. */
const ROYAL_BODY = "M34 40L66 40C62 54 60 66 70 82L30 82C40 66 38 54 34 40Z";

const king: PieceDrawing = {
  parts: [
    ROYAL_BODY,
    BASE_WIDE,
    slab(32, 30, 36, 12),
    // The cross, one path so the bars have no joint.
    "M46 8H54V14H61V22H54V32H46V22H39V14H46Z",
  ],
  lines: `M34 42H66${BASE_LINE_WIDE}`,
};

const queen: PieceDrawing = {
  parts: [
    ROYAL_BODY,
    BASE_WIDE,
    // The crown: five points rising from the band.
    "M32 42L20 26L28 32L35 15L43 32L50 11L57 32L65 15L72 32L80 26L68 42Z",
    circle(20, 26, 3.5),
    circle(35, 15, 3.5),
    circle(50, 11, 3.5),
    circle(65, 15, 3.5),
    circle(80, 26, 3.5),
  ],
  lines: `M34 42H66${BASE_LINE_WIDE}`,
};

const rook: PieceDrawing = {
  parts: [
    "M36 36L64 36L67 82L33 82Z",
    BASE_WIDE,
    // The crenellated top: three merlons, two notches.
    "M26 16H34V26H46V16H54V26H66V16H74V36H26Z",
  ],
  lines: `M37 36H63${BASE_LINE_WIDE}`,
};

const bishop: PieceDrawing = {
  parts: [
    "M43 56L57 56C57 66 64 74 70 82L30 82C36 74 43 66 43 56Z",
    BASE_NARROW,
    // The mitre, a pointed egg.
    "M50 18C59 25 66 36 66 45C66 51 59 56 50 56C41 56 34 51 34 45C34 36 41 25 50 18Z",
    ellipse(50, 56, 15, 4.5),
    circle(50, 14, 4.5),
  ],
  // The slit in the mitre, the joint of mitre and collar, the base.
  lines: `M57 26L45 42M36 55a15 4.5 0 0 1 28 0${BASE_LINE_NARROW}`,
};

const knight: PieceDrawing = {
  parts: [
    // Head and neck, facing left: from behind the back ear down the arched
    // neck, along the base, up the chest into the throat, along the jaw and
    // round the muzzle, up the face, over both ears.
    "M54 15C72 17 84 36 76 82L30 82C30 66 46 62 46 48C46 40 42 56 32 56" +
      "C26 58 22 62 16 60C10 58 10 50 13 46C17 40 24 32 34 18L37 15L39 6" +
      "L44 15L46 16L52 5Z",
    slab(22, 80, 56, 10),
  ],
  // Eye, nostril, mouth, then the base.
  lines: `${circle(36, 27, 1)}${circle(17, 49, 0.8)}M17 55L23 54M28 80H72`,
};

const pawn: PieceDrawing = {
  parts: [
    "M42 48L58 48C58 62 66 74 70 82L30 82C34 74 42 62 42 48Z",
    BASE_NARROW,
    ellipse(50, 47, 16, 5),
    circle(50, 32, 11),
  ],
  lines: BASE_LINE_NARROW,
};

export const PIECE_DRAWINGS: Readonly<Record<PieceType, PieceDrawing>> = {
  king,
  queen,
  rook,
  bishop,
  knight,
  pawn,
};
