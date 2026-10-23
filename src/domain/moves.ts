// Legal moves (FIDE 3.9, 3.10): the pseudo-legal moves that leave the mover's
// own king out of check, tested by making each move and looking at the king.

import { applyMove, type Move } from "./apply.ts";
import { isKingAttacked } from "./attacks.ts";
import type { Position, Square } from "./position.ts";
import { pseudoMoves } from "./pseudoMoves.ts";

export type { Move, PromotionPiece } from "./apply.ts";

/**
 * Every legal move of the side to move, or only those of the piece on `from`.
 * A pawn reaching the last rank appears once per promotion piece. Empty when
 * `from` is empty or holds an opponent's piece.
 */
export function legalMoves(position: Position, from?: Square): Move[] {
  return pseudoMoves(position, from).filter((move) => !exposesKing(position, move));
}

/** Whether the move leaves or places the mover's own king in check (FIDE 3.9.2). */
function exposesKing(position: Position, move: Move): boolean {
  return isKingAttacked(applyMove(position, move).placement, position.turn);
}

export type IllegalMoveReason =
  /** No piece on the from square. */
  | "empty-square"
  /** The piece on the from square belongs to the side not to move. */
  | "wrong-colour"
  /** The piece does not move that way, is blocked, or the castling is not allowed. */
  | "not-a-move"
  /** The move would leave or place the mover's own king in check. */
  | "exposes-king"
  /** A pawn reaching the last rank must say which piece it becomes. */
  | "promotion-required"
  /** Only a pawn reaching the last rank promotes. */
  | "promotion-not-allowed";

export type MoveValidation =
  | { readonly ok: true; readonly move: Move }
  | { readonly ok: false; readonly reason: IllegalMoveReason };

/** Whether the move is legal in the position, and if not, why (FIDE 3.10). */
export function validateMove(position: Position, move: Move): MoveValidation {
  const piece = position.placement.get(move.from);
  if (piece === undefined) return { ok: false, reason: "empty-square" };
  if (piece.color !== position.turn) return { ok: false, reason: "wrong-colour" };
  const candidates = pseudoMoves(position, move.from).filter((m) => m.to === move.to);
  const first = candidates[0];
  if (first === undefined) return { ok: false, reason: "not-a-move" };
  if (first.promotion !== undefined && move.promotion === undefined) {
    return { ok: false, reason: "promotion-required" };
  }
  if (first.promotion === undefined && move.promotion !== undefined) {
    return { ok: false, reason: "promotion-not-allowed" };
  }
  const match = candidates.find((m) => m.promotion === move.promotion);
  if (match === undefined) return { ok: false, reason: "not-a-move" };
  if (exposesKing(position, match)) return { ok: false, reason: "exposes-king" };
  return { ok: true, move: match };
}

/** The position after a legal move. Throws with the reason for an illegal one. */
export function playMove(position: Position, move: Move): Position {
  const validation = validateMove(position, move);
  if (!validation.ok) {
    throw new Error(
      `Illegal move ${move.from}${move.to}${move.promotion ?? ""}: ${validation.reason}`,
    );
  }
  return applyMove(position, validation.move);
}
