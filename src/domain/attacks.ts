// Which squares a side attacks, and whether a king is in check. "Attack" is
// FIDE 3.1.2 and 3.1.3: a piece attacks a square if it could capture there by
// its way of moving, even when moving there would expose its own king.

import {
  opponent,
  shift,
  type Color,
  type PieceType,
  type Placement,
  type Position,
  type Square,
} from "./position.ts";

/** A step on the board as (files, ranks). */
export type Step = readonly [number, number];

export const KNIGHT_STEPS: readonly Step[] = [
  [1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1],
];
export const ORTHOGONAL: readonly Step[] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
export const DIAGONAL: readonly Step[] = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
export const KING_STEPS: readonly Step[] = [...ORTHOGONAL, ...DIAGONAL];

/** Where a pawn of the given colour stands relative to the square it attacks. */
const PAWN_ORIGINS: Readonly<Record<Color, readonly Step[]>> = {
  white: [[-1, -1], [1, -1]],
  black: [[-1, 1], [1, 1]],
};

interface Target {
  readonly placement: Placement;
  readonly square: Square;
  readonly by: Color;
}

/** Whether any piece of colour `by` attacks the square (FIDE 3.1.2, 3.1.3). */
export function isAttacked(placement: Placement, square: Square, by: Color): boolean {
  const target: Target = { placement, square, by };
  return (
    stepAttack(target, KNIGHT_STEPS, "knight") ||
    stepAttack(target, KING_STEPS, "king") ||
    stepAttack(target, PAWN_ORIGINS[by], "pawn") ||
    rayAttack(target, ORTHOGONAL, ["rook", "queen"]) ||
    rayAttack(target, DIAGONAL, ["bishop", "queen"])
  );
}

function stepAttack(target: Target, steps: readonly Step[], type: PieceType): boolean {
  return steps.some(([df, dr]) => {
    const from = shift(target.square, df, dr);
    const piece = from === undefined ? undefined : target.placement.get(from);
    return piece?.color === target.by && piece.type === type;
  });
}

function rayAttack(target: Target, directions: readonly Step[], types: readonly PieceType[]): boolean {
  return directions.some(([df, dr]) => {
    let square = shift(target.square, df, dr);
    while (square !== undefined) {
      const piece = target.placement.get(square);
      if (piece !== undefined) {
        return piece.color === target.by && types.includes(piece.type);
      }
      square = shift(square, df, dr);
    }
    return false;
  });
}

/** The square of the king of that colour; undefined only for a placement without one. */
export function findKing(placement: Placement, color: Color): Square | undefined {
  for (const [square, piece] of placement) {
    if (piece.type === "king" && piece.color === color) return square;
  }
  return undefined;
}

/** Whether the king of that colour is attacked by the other side (FIDE 3.9.1). */
export function isKingAttacked(placement: Placement, color: Color): boolean {
  const king = findKing(placement, color);
  return king !== undefined && isAttacked(placement, king, opponent(color));
}

/** Whether the side to move is in check. */
export function isInCheck(position: Position): boolean {
  return isKingAttacked(position.placement, position.turn);
}
