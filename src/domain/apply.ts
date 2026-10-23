// Making a move: the position after it, with castling rook, en passant
// capture, promotion, castling rights, en passant square and clocks updated.
// Assumes the move is one of the side to move's pseudo-legal moves; legality
// is checked in moves.ts.

import {
  fileIndex,
  opponent,
  rankIndex,
  shift,
  type CastlingRights,
  type CastlingSide,
  type Color,
  type File,
  type Piece,
  type Placement,
  type Position,
  type Rank,
  type Square,
} from "./position.ts";

export type PromotionPiece = "queen" | "rook" | "bishop" | "knight";

export interface Move {
  readonly from: Square;
  readonly to: Square;
  /** Required for a pawn reaching the last rank, not allowed otherwise. */
  readonly promotion?: PromotionPiece;
}

export const HOME_RANK: Readonly<Record<Color, Rank>> = { white: "1", black: "8" };

/** The rook's file and where it lands, per castling side (FIDE 3.8.2). */
export const ROOK_FILES: Readonly<
  Record<CastlingSide, { readonly from: File; readonly to: File }>
> = {
  kingSide: { from: "h", to: "f" },
  queenSide: { from: "a", to: "d" },
};

export function isCastling(piece: Piece, move: Move): CastlingSide | undefined {
  if (piece.type !== "king") return undefined;
  const distance = fileIndex(move.to) - fileIndex(move.from);
  if (distance === 2) return "kingSide";
  if (distance === -2) return "queenSide";
  return undefined;
}

/** Whether the move is a pawn capturing en passant onto the position's en passant square. */
export function isEnPassantCapture(position: Position, piece: Piece, move: Move): boolean {
  return piece.type === "pawn" && move.to === position.enPassant;
}

/** The position after the move. Throws if `from` holds no piece of the side to move. */
export function applyMove(position: Position, move: Move): Position {
  const piece = position.placement.get(move.from);
  if (piece === undefined || piece.color !== position.turn) {
    throw new Error(`No ${position.turn} piece on ${move.from}`);
  }
  const captures =
    position.placement.has(move.to) || isEnPassantCapture(position, piece, move);
  return {
    placement: movePieces(position, piece, move),
    turn: opponent(position.turn),
    castling: updatedCastling(position.castling, piece, move),
    enPassant: passedSquare(piece, move),
    halfmoveClock: piece.type === "pawn" || captures ? 0 : position.halfmoveClock + 1,
    fullmoveNumber:
      position.turn === "black" ? position.fullmoveNumber + 1 : position.fullmoveNumber,
  };
}

function movePieces(position: Position, piece: Piece, move: Move): Placement {
  const placement = new Map(position.placement);
  placement.delete(move.from);
  if (isEnPassantCapture(position, piece, move)) {
    // The captured pawn stands behind the square the capturer lands on (FIDE 3.7.3.1).
    const captured = shift(move.to, 0, piece.color === "white" ? -1 : 1);
    if (captured !== undefined) placement.delete(captured);
  }
  const castling = isCastling(piece, move);
  if (castling !== undefined) {
    const rank = HOME_RANK[piece.color];
    const rook = placement.get(`${ROOK_FILES[castling].from}${rank}`);
    placement.delete(`${ROOK_FILES[castling].from}${rank}`);
    if (rook !== undefined) placement.set(`${ROOK_FILES[castling].to}${rank}`, rook);
  }
  placement.set(
    move.to,
    move.promotion === undefined ? piece : { color: piece.color, type: move.promotion },
  );
  return placement;
}

/**
 * Castling rights after the move (FIDE 3.8.2.1): a king move loses both of
 * its side's rights, a rook leaving its corner loses that right, and a move
 * onto a corner takes the opponent's right for it (the rook there is captured).
 */
function updatedCastling(castling: CastlingRights, piece: Piece, move: Move): CastlingRights {
  let next = castling;
  if (piece.type === "king") {
    next = withoutRight(next, piece.color, "kingSide");
    next = withoutRight(next, piece.color, "queenSide");
  }
  for (const color of ["white", "black"] as const) {
    for (const side of ["kingSide", "queenSide"] as const) {
      const corner: Square = `${ROOK_FILES[side].from}${HOME_RANK[color]}`;
      if (move.from === corner || move.to === corner) {
        next = withoutRight(next, color, side);
      }
    }
  }
  return next;
}

function withoutRight(castling: CastlingRights, color: Color, side: CastlingSide): CastlingRights {
  if (!castling[color][side]) return castling;
  return { ...castling, [color]: { ...castling[color], [side]: false } };
}

/** The square a pawn passes over when advancing two squares, else null (FIDE 3.7.3.1). */
function passedSquare(piece: Piece, move: Move): Square | null {
  if (piece.type !== "pawn") return null;
  const advance = rankIndex(move.to) - rankIndex(move.from);
  if (Math.abs(advance) !== 2) return null;
  return shift(move.from, 0, advance / 2) ?? null;
}
