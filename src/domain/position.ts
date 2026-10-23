// The vocabulary of a chess position: colours, pieces, squares, the placement
// of pieces on the board, and the position as the Laws of Chess define it
// (placement, side to move, castling rights, en passant, clocks). The rules
// themselves live in attacks.ts, moves.ts and game.ts
// (docs/design-docs/chess-rules-engine.md).

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
export type Placement = ReadonlyMap<Square, Piece>;

export type CastlingSide = "kingSide" | "queenSide";

/** Which castlings are still allowed, per colour (FIDE 3.8.2.1). */
export type CastlingRights = Readonly<
  Record<Color, Readonly<Record<CastlingSide, boolean>>>
>;

/**
 * A position in the sense of the Laws of Chess (FIDE 9.2.3): the pieces,
 * who has the move, and the rights that decide which moves are possible.
 * The clocks are the two FEN counters.
 */
export interface Position {
  readonly placement: Placement;
  readonly turn: Color;
  readonly castling: CastlingRights;
  /** The square a pawn has just passed over by advancing two squares, if any. */
  readonly enPassant: Square | null;
  /** Half-moves since the last pawn move or capture (FIDE 9.3, 9.6.2). */
  readonly halfmoveClock: number;
  /** Starts at 1 and increases after each move by Black. */
  readonly fullmoveNumber: number;
}

export function opponent(color: Color): Color {
  return color === "white" ? "black" : "white";
}

/** 0 for the a-file, 7 for the h-file. */
export function fileIndex(square: Square): number {
  return square.charCodeAt(0) - 97;
}

/** 0 for the first rank, 7 for the eighth. */
export function rankIndex(square: Square): number {
  return square.charCodeAt(1) - 49;
}

/** The square at the given indices, or undefined when off the board. */
export function squareAt(file: number, rank: number): Square | undefined {
  const f = FILES[file];
  const r = RANKS[rank];
  return f === undefined || r === undefined ? undefined : `${f}${r}`;
}

/** The square reached by moving `df` files and `dr` ranks, if on the board. */
export function shift(square: Square, df: number, dr: number): Square | undefined {
  return squareAt(fileIndex(square) + df, rankIndex(square) + dr);
}

const PIECE_LETTERS: Readonly<Record<string, PieceType>> = {
  k: "king",
  q: "queen",
  r: "rook",
  b: "bishop",
  n: "knight",
  p: "pawn",
};

/**
 * Reads a FEN piece placement, the first FEN field; later fields, if present,
 * are ignored. Throws on a placement that is not eight ranks of eight squares.
 * For a whole position use parseFen in fen.ts.
 */
export function parsePlacement(fen: string): Placement {
  const placement = fen.trim().split(/\s+/)[0] ?? "";
  const rows = placement.split("/");
  if (rows.length !== 8) {
    throw new Error(`FEN placement must have 8 ranks, found ${rows.length}: ${placement}`);
  }
  const pieces = new Map<Square, Piece>();
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
      pieces.set(`${fileName}${rank}`, { color, type });
      file += 1;
    }
    if (file !== 8) {
      throw new Error(`FEN rank "${row}" covers ${file} squares, not 8: ${placement}`);
    }
  });
  return pieces;
}

/** a1 is dark; colours alternate along files and ranks. */
export function squareColor(square: Square): "light" | "dark" {
  return (fileIndex(square) + rankIndex(square)) % 2 === 0 ? "dark" : "light";
}
