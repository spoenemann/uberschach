// Forsyth-Edwards Notation: a position as one line of text, read and written.
// Six fields: placement, side to move, castling rights, en passant square,
// halfmove clock, fullmove number. Missing trailing fields take the values of
// a game start (white to move, no castling, no en passant, 0, 1).

import {
  FILES,
  RANKS,
  parsePlacement,
  rankIndex,
  type CastlingRights,
  type Color,
  type Piece,
  type Placement,
  type Position,
  type Square,
} from "./position.ts";

export const STARTING_FEN =
  "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const NO_CASTLING: CastlingRights = {
  white: { kingSide: false, queenSide: false },
  black: { kingSide: false, queenSide: false },
};

const CASTLING_LETTERS = ["K", "Q", "k", "q"] as const;
type CastlingLetter = (typeof CASTLING_LETTERS)[number];

const PIECE_LETTER: Readonly<Record<Piece["type"], string>> = {
  king: "k",
  queen: "q",
  rook: "r",
  bishop: "b",
  knight: "n",
  pawn: "p",
};

/**
 * Reads a FEN string into a position. Throws on malformed fields, on a side
 * without exactly one king, and on an en passant square that does not fit the
 * side to move (it must lie on the sixth rank when White is to move, on the
 * third when Black is). Legality beyond that is not checked.
 */
export function parseFen(fen: string): Position {
  const fields = fen.trim().split(/\s+/);
  const [placementField = "", turnField = "w", castlingField = "-"] = fields;
  const [, , , enPassantField = "-", halfmoveField = "0", fullmoveField = "1"] =
    fields;
  const placement = parsePlacement(placementField);
  requireOneKing(placement, "white");
  requireOneKing(placement, "black");
  const turn = parseTurn(turnField);
  return {
    placement,
    turn,
    castling: parseCastling(castlingField),
    enPassant: parseEnPassant(enPassantField, turn),
    halfmoveClock: parseCount(halfmoveField, "halfmove clock", 0),
    fullmoveNumber: parseCount(fullmoveField, "fullmove number", 1),
  };
}

function requireOneKing(placement: Placement, color: Color): void {
  const kings = [...placement.values()].filter(
    (piece) => piece.color === color && piece.type === "king",
  ).length;
  if (kings !== 1) {
    throw new Error(`FEN must place exactly one ${color} king, found ${kings}`);
  }
}

function parseTurn(field: string): Color {
  if (field === "w") return "white";
  if (field === "b") return "black";
  throw new Error(`FEN side to move must be "w" or "b", found "${field}"`);
}

function parseCastling(field: string): CastlingRights {
  if (field === "-") return NO_CASTLING;
  const seen = new Set<CastlingLetter>();
  for (const letter of field) {
    if (!isCastlingLetter(letter) || seen.has(letter)) {
      throw new Error(`FEN castling rights must be "-" or letters from KQkq, found "${field}"`);
    }
    seen.add(letter);
  }
  return {
    white: { kingSide: seen.has("K"), queenSide: seen.has("Q") },
    black: { kingSide: seen.has("k"), queenSide: seen.has("q") },
  };
}

function isCastlingLetter(letter: string): letter is CastlingLetter {
  return (CASTLING_LETTERS as readonly string[]).includes(letter);
}

function parseEnPassant(field: string, turn: Color): Square | null {
  if (field === "-") return null;
  if (!isSquare(field)) {
    throw new Error(`FEN en passant square must be "-" or a square, found "${field}"`);
  }
  const expectedRank = turn === "white" ? 5 : 2;
  if (rankIndex(field) !== expectedRank) {
    throw new Error(
      `FEN en passant square ${field} does not fit ${turn} to move: it must be on rank ${expectedRank + 1}`,
    );
  }
  return field;
}

export function isSquare(text: string): text is Square {
  return (
    text.length === 2 &&
    (FILES as readonly string[]).includes(text[0] ?? "") &&
    (RANKS as readonly string[]).includes(text[1] ?? "")
  );
}

function parseCount(field: string, name: string, min: number): number {
  if (!/^\d+$/.test(field) || Number(field) < min) {
    throw new Error(`FEN ${name} must be an integer of at least ${min}, found "${field}"`);
  }
  return Number(field);
}

/** Writes the position as a FEN string, castling rights in KQkq order. */
export function toFen(position: Position): string {
  return [
    placementToFen(position.placement),
    position.turn === "white" ? "w" : "b",
    castlingToFen(position.castling),
    position.enPassant ?? "-",
    String(position.halfmoveClock),
    String(position.fullmoveNumber),
  ].join(" ");
}

export function placementToFen(placement: Placement): string {
  return [...RANKS]
    .reverse()
    .map((rank) => {
      let row = "";
      let empty = 0;
      for (const file of FILES) {
        const piece = placement.get(`${file}${rank}`);
        if (piece === undefined) {
          empty += 1;
          continue;
        }
        row += empty > 0 ? String(empty) : "";
        empty = 0;
        const letter = PIECE_LETTER[piece.type];
        row += piece.color === "white" ? letter.toUpperCase() : letter;
      }
      return empty > 0 ? row + String(empty) : row;
    })
    .join("/");
}

function castlingToFen(castling: CastlingRights): string {
  const letters =
    (castling.white.kingSide ? "K" : "") +
    (castling.white.queenSide ? "Q" : "") +
    (castling.black.kingSide ? "k" : "") +
    (castling.black.queenSide ? "q" : "");
  return letters === "" ? "-" : letters;
}
