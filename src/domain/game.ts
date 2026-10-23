// A game: the positions from the start to now, and how it ends (FIDE 1.4, 5,
// 9). The ends that happen by themselves (checkmate, stalemate, dead position,
// fivefold repetition, seventy-five moves) are the status; the draws a player
// may claim (threefold repetition, fifty moves) are reported separately.

import { isInCheck } from "./attacks.ts";
import { parseFen, STARTING_FEN, toFen } from "./fen.ts";
import { legalMoves, playMove, type Move } from "./moves.ts";
import {
  opponent,
  squareColor,
  type Color,
  type Placement,
  type Position,
} from "./position.ts";

export interface Game {
  /** The current position, the last of `positions`. */
  readonly position: Position;
  /** Every position of the game: the starting one first, the current one last. */
  readonly positions: readonly Position[];
  /** The moves played, in order; positions[i + 1] follows positions[i] by moves[i]. */
  readonly moves: readonly Move[];
}

export type DrawReason =
  | "stalemate"
  | "dead-position"
  | "fivefold-repetition"
  | "seventy-five-moves";

export type GameStatus =
  | { readonly kind: "ongoing" }
  | { readonly kind: "checkmate"; readonly winner: Color }
  | { readonly kind: "draw"; readonly reason: DrawReason };

export type DrawClaim = "threefold-repetition" | "fifty-moves";

/** A game from the starting position, or from the given FEN. */
export function newGame(fen: string = STARTING_FEN): Game {
  const position = parseFen(fen);
  return { position, positions: [position], moves: [] };
}

/** The game after the move. Throws if the game is over or the move is illegal. */
export function play(game: Game, move: Move): Game {
  const current = status(game);
  if (current.kind !== "ongoing") {
    throw new Error(`The game is over (${current.kind}); no move can be played`);
  }
  const position = playMove(game.position, move);
  return {
    position,
    positions: [...game.positions, position],
    moves: [...game.moves, move],
  };
}

/**
 * How the game stands. Checkmate (5.1.1) comes first: it takes precedence over
 * the seventy-five-move rule (9.6.2). Then stalemate (5.2.1), dead position
 * (5.2.2), fivefold repetition (9.6.1) and seventy-five moves (9.6.2).
 */
export function status(game: Game): GameStatus {
  const { position } = game;
  if (legalMoves(position).length === 0) {
    return isInCheck(position)
      ? { kind: "checkmate", winner: opponent(position.turn) }
      : { kind: "draw", reason: "stalemate" };
  }
  if (isDeadPosition(position.placement)) return { kind: "draw", reason: "dead-position" };
  if (repetitions(game) >= 5) return { kind: "draw", reason: "fivefold-repetition" };
  if (position.halfmoveClock >= 150) return { kind: "draw", reason: "seventy-five-moves" };
  return { kind: "ongoing" };
}

/**
 * The draws the side to move may claim in an ongoing game: threefold
 * repetition (9.2) and fifty moves without a pawn move or capture (9.3). A
 * claim made together with an intended move (9.2.1, 9.3.1) is the same test
 * on the game after that move.
 */
export function claimableDraws(game: Game): DrawClaim[] {
  if (status(game).kind !== "ongoing") return [];
  const claims: DrawClaim[] = [];
  if (repetitions(game) >= 3) claims.push("threefold-repetition");
  if (game.position.halfmoveClock >= 100) claims.push("fifty-moves");
  return claims;
}

/**
 * How many times the current position has appeared in the game, this time
 * included. Positions are the same when the same side has the move, the same
 * pieces stand on the same squares and the same moves are possible (9.2.3):
 * castling rights count as such, and an en passant square counts only while a
 * pawn can actually capture there (9.2.3.1).
 */
export function repetitions(game: Game): number {
  const key = positionKey(game.position);
  return game.positions.filter((position) => positionKey(position) === key).length;
}

/**
 * The identity of a position in the sense of 9.2.3, as text: the placement,
 * the side to move, the castling rights, and the en passant square only
 * while a pawn can actually capture there. Two positions with the same key
 * are the same position, however they were reached; the clocks do not
 * count. The opening book is keyed by it, so a transposition finds the same
 * entry (docs/product-specs/opening-explorer.md, The database).
 */
export function positionKey(position: Position): string {
  const enPassant =
    position.enPassant !== null && hasEnPassantCapture(position) ? position.enPassant : null;
  const [placement, turn, castling] = toFen(position).split(" ");
  return `${placement} ${turn} ${castling} ${enPassant ?? "-"}`;
}

function hasEnPassantCapture(position: Position): boolean {
  return legalMoves(position).some(
    (move) =>
      move.to === position.enPassant &&
      position.placement.get(move.from)?.type === "pawn",
  );
}

/**
 * FIDE 5.2.2 as far as material alone decides it: no sequence of legal moves
 * can checkmate when, with no pawn, rook or queen on the board, at most one
 * minor piece remains, or every remaining piece besides the kings is a bishop
 * and all bishops stand on squares of one colour. Blocked positions that are
 * dead by their pawn structure are not recognised.
 */
export function isDeadPosition(placement: Placement): boolean {
  const bishopColors = new Set<"light" | "dark">();
  let minors = 0;
  for (const [square, piece] of placement) {
    if (piece.type === "pawn" || piece.type === "rook" || piece.type === "queen") return false;
    if (piece.type === "bishop") bishopColors.add(squareColor(square));
    if (piece.type !== "king") minors += 1;
  }
  if (minors <= 1) return true;
  const knights = minors - bishopCount(placement);
  return knights === 0 && bishopColors.size === 1;
}

function bishopCount(placement: Placement): number {
  return [...placement.values()].filter((piece) => piece.type === "bishop").length;
}
