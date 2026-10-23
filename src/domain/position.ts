// Squares, pieces and positions: what a board shows. Rules (legal moves,
// check, the result) are not here; the rules library is chosen with the
// opening explainer (docs/exec-plans/completed/0001-agent-ready-setup.md,
// roadmap), and may replace this module.

export type Color = "white" | "black";

export type PieceType =
  | "king"
  | "queen"
  | "rook"
  | "bishop"
  | "knight"
  | "pawn";

export interface Piece {
  readonly color: Color;
  readonly type: PieceType;
}

export const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;
export const RANKS = ["1", "2", "3", "4", "5", "6", "7", "8"] as const;

export type File = (typeof FILES)[number];
export type Rank = (typeof RANKS)[number];
export type Square = `${File}${Rank}`;

/** Which piece stands on which square; empty squares are absent. */
export type Position = ReadonlyMap<Square, Piece>;

export const STARTING_FEN =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const PIECE_LETTERS: Readonly<Record<string, PieceType>> = {
  k: "king",
  q: "queen",
  r: "rook",
  b: "bishop",
  n: "knight",
  p: "pawn",
};

/**
 * Reads the piece placement of a FEN string, its first field; the other
 * fields (side to move, castling, en passant, clocks) are ignored. Throws
 * on a placement that is not eight ranks of eight squares.
 */
export function parseFen(fen: string): Position {
  const placement = fen.trim().split(/\s+/)[0] ?? "";
  const rows = placement.split("/");
  if (rows.length !== 8) {
    throw new Error(`FEN placement must have 8 ranks, found ${rows.length}: ${placement}`);
  }
  const position = new Map<Square, Piece>();
  rows.forEach((row, index) => {
    const rank = RANKS[7 - index] as Rank;
    let file = 0;
    for (const letter of row) {
      if (letter >= "1" && letter <= "8") {
        file += Number(letter);
        continue;
      }
      const type = PIECE_LETTERS[letter.toLowerCase()];
      const fileName = FILES[file];
      if (type === undefined || fileName === undefined) {
        throw new Error(`Invalid FEN rank "${row}" at "${letter}": ${placement}`);
      }
      const color: Color = letter === letter.toUpperCase() ? "white" : "black";
      position.set(`${fileName}${rank}`, { color, type });
      file += 1;
    }
    if (file !== 8) {
      throw new Error(`FEN rank "${row}" covers ${file} squares, not 8: ${placement}`);
    }
  });
  return position;
}

/** a1 is dark; colours alternate along files and ranks. */
export function squareColor(square: Square): "light" | "dark" {
  const file = FILES.indexOf(square[0] as File);
  const rank = RANKS.indexOf(square[1] as Rank);
  return (file + rank) % 2 === 0 ? "dark" : "light";
}

const TYPE_ORDER: readonly PieceType[] = [
  "king",
  "queen",
  "rook",
  "bishop",
  "knight",
  "pawn",
];

/**
 * The position in words, for an accessible name:
 * "White: king e1, queen d1. Black: king e8." Pieces are listed by colour,
 * then by type from king to pawn, then by square.
 */
export function describePosition(position: Position): string {
  const sides = (["white", "black"] as const).map((color) => {
    const pieces = [...position]
      .filter(([, piece]) => piece.color === color)
      .sort(
        ([a, pa], [b, pb]) =>
          TYPE_ORDER.indexOf(pa.type) - TYPE_ORDER.indexOf(pb.type) ||
          a.localeCompare(b),
      )
      .map(([square, piece]) => `${piece.type} ${square}`);
    const name = color === "white" ? "White" : "Black";
    return pieces.length === 0 ? `${name}: none.` : `${name}: ${pieces.join(", ")}.`;
  });
  return sides.join(" ");
}
