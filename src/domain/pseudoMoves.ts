// The moves of the pieces (FIDE 3.1 to 3.8) before the king-safety test of
// 3.9: where each piece may go given the pieces on the board. moves.ts filters
// these down to the legal moves.

import { HOME_RANK, ROOK_FILES, type Move, type PromotionPiece } from "./apply.ts";
import { DIAGONAL, isAttacked, KING_STEPS, KNIGHT_STEPS, ORTHOGONAL, type Step } from "./attacks.ts";
import {
  opponent,
  rankIndex,
  shift,
  type CastlingSide,
  type Color,
  type File,
  type Piece,
  type Placement,
  type Position,
  type Square,
} from "./position.ts";

const PROMOTIONS: readonly PromotionPiece[] = ["queen", "rook", "bishop", "knight"];

/** All pseudo-legal moves of the side to move, or of the piece on `from`. */
export function pseudoMoves(position: Position, from?: Square): Move[] {
  if (from !== undefined) return pseudoMovesFrom(position, from);
  const moves: Move[] = [];
  for (const square of position.placement.keys()) {
    moves.push(...pseudoMovesFrom(position, square));
  }
  return moves;
}

function pseudoMovesFrom(position: Position, from: Square): Move[] {
  const piece = position.placement.get(from);
  if (piece === undefined || piece.color !== position.turn) return [];
  switch (piece.type) {
    case "pawn":
      return pawnMoves(position, from, piece.color);
    case "knight":
      return stepMoves(position.placement, from, piece.color, KNIGHT_STEPS);
    case "bishop":
      return rayMoves(position.placement, from, piece.color, DIAGONAL);
    case "rook":
      return rayMoves(position.placement, from, piece.color, ORTHOGONAL);
    case "queen":
      return rayMoves(position.placement, from, piece.color, [...ORTHOGONAL, ...DIAGONAL]);
    case "king":
      return [
        ...stepMoves(position.placement, from, piece.color, KING_STEPS),
        ...castlingMoves(position, from, piece.color),
      ];
  }
}

/**
 * Whether a piece of that colour may land on the square: it is empty or holds
 * an opponent's piece (FIDE 3.1, 3.1.1). The king is never captured (1.4.1).
 */
function canLandOn(placement: Placement, square: Square, color: Color): boolean {
  const occupant = placement.get(square);
  return occupant === undefined || (occupant.color !== color && occupant.type !== "king");
}

/** Knight and king: one step in each direction (FIDE 3.6, 3.8.1). */
function stepMoves(placement: Placement, from: Square, color: Color, steps: readonly Step[]): Move[] {
  const moves: Move[] = [];
  for (const [df, dr] of steps) {
    const to = shift(from, df, dr);
    if (to !== undefined && canLandOn(placement, to, color)) moves.push({ from, to });
  }
  return moves;
}

/** Bishop, rook and queen: along a line until a piece is reached (FIDE 3.2 to 3.5). */
function rayMoves(placement: Placement, from: Square, color: Color, directions: readonly Step[]): Move[] {
  const moves: Move[] = [];
  for (const [df, dr] of directions) {
    let to = shift(from, df, dr);
    while (to !== undefined) {
      if (canLandOn(placement, to, color)) moves.push({ from, to });
      if (placement.has(to)) break;
      to = shift(to, df, dr);
    }
  }
  return moves;
}

/** FIDE 3.7: forward one, forward two from the starting rank, diagonal capture, en passant. */
function pawnMoves(position: Position, from: Square, color: Color): Move[] {
  return [...pawnAdvances(position.placement, from, color), ...pawnCaptures(position, from, color)];
}

/** FIDE 3.7.1, 3.7.2: onto the empty square ahead; two squares from the starting rank. */
function pawnAdvances(placement: Placement, from: Square, color: Color): Move[] {
  const forward = color === "white" ? 1 : -1;
  const startRank = color === "white" ? 1 : 6;
  const one = shift(from, 0, forward);
  if (one === undefined || placement.has(one)) return [];
  const moves = pawnMove(from, one, color);
  const two = shift(from, 0, 2 * forward);
  if (rankIndex(from) === startRank && two !== undefined && !placement.has(two)) {
    moves.push({ from, to: two });
  }
  return moves;
}

/** FIDE 3.7.3: diagonally forward onto an opponent's piece or the en passant square. */
function pawnCaptures(position: Position, from: Square, color: Color): Move[] {
  const forward = color === "white" ? 1 : -1;
  const moves: Move[] = [];
  for (const df of [-1, 1]) {
    const to = shift(from, df, forward);
    if (to === undefined) continue;
    const target = position.placement.get(to);
    const captures = target !== undefined && target.color !== color && target.type !== "king";
    if (captures || to === position.enPassant) moves.push(...pawnMove(from, to, color));
  }
  return moves;
}

/** A pawn reaching the last rank must promote; one move per choice (FIDE 3.7.3.3). */
function pawnMove(from: Square, to: Square, color: Color): Move[] {
  const lastRank = color === "white" ? 7 : 0;
  if (rankIndex(to) !== lastRank) return [{ from, to }];
  return PROMOTIONS.map((promotion) => ({ from, to, promotion }));
}

/** The files between king and rook that must be empty, and those the king crosses or lands on. */
const CASTLING_FILES: Readonly<
  Record<CastlingSide, { readonly empty: readonly File[]; readonly kingPath: readonly File[] }>
> = {
  kingSide: { empty: ["f", "g"], kingPath: ["f", "g"] },
  queenSide: { empty: ["b", "c", "d"], kingPath: ["d", "c"] },
};

/** FIDE 3.8.2: castling from the king's original square, when allowed and not prevented. */
function castlingMoves(position: Position, from: Square, color: Color): Move[] {
  const rank = HOME_RANK[color];
  if (from !== `e${rank}`) return [];
  const moves: Move[] = [];
  for (const side of ["kingSide", "queenSide"] as const) {
    if (position.castling[color][side] && canCastle(position, color, side)) {
      const kingFile = side === "kingSide" ? "g" : "c";
      moves.push({ from, to: `${kingFile}${rank}` });
    }
  }
  return moves;
}

function canCastle(position: Position, color: Color, side: CastlingSide): boolean {
  const rank = HOME_RANK[color];
  const { placement } = position;
  const rook: Piece | undefined = placement.get(`${ROOK_FILES[side].from}${rank}`);
  if (rook?.type !== "rook" || rook.color !== color) return false;
  const { empty, kingPath } = CASTLING_FILES[side];
  // 3.8.2.2 (4): no piece between the king and the rook.
  if (empty.some((file) => placement.has(`${file}${rank}`))) return false;
  // 3.8.2.2 (3): neither the king's square, the one it crosses nor the one it lands on is attacked.
  const by = opponent(color);
  const kingSquares: readonly File[] = ["e", ...kingPath];
  return !kingSquares.some((file) => isAttacked(placement, `${file}${rank}`, by));
}
