// What the explorer shows at one point of the line: the game so far, how it
// stands, the last move with what the book says about it, the position's
// entry, its name (own or inherited) and the candidates
// (docs/product-specs/opening-explorer.md, After every move; Candidates).
// Pure functions over the rules engine and the book, so the screen's logic
// is tested without rendering.

import { status, type Game, type GameStatus } from "../../domain/game.ts";
import type { Move } from "../../domain/moves.ts";
import type { Position } from "../../domain/position.ts";
import { lookup, type BookMove, type BookPosition, type OpeningBook, type Text } from "../../content/book.ts";

export interface LastMove {
  /** The position the move was made from. */
  readonly before: Position;
  readonly move: Move;
  /** What the book says about the move, when it is written there. */
  readonly book: BookMove | undefined;
}

export interface Candidate {
  readonly move: BookMove;
  /** The name of the position the move leads to, when it has one; the book carries it with the move. */
  readonly leadsTo: Text | undefined;
}

export interface ExplorerView {
  /** The game up to the current move. */
  readonly game: Game;
  readonly status: GameStatus;
  readonly lastMove: LastMove | null;
  /** The current position's entry in the book; undefined off the book. */
  readonly entry: BookPosition | undefined;
  /**
   * The position's own name, or the last name on the way there, so a quiet
   * move inside a named variation still shows where it is. Undefined off
   * the book.
   */
  readonly name: Text | undefined;
  /**
   * The moves rated 4 and 5 from the position, and those rated 3 too when
   * fewer than three are rated 4 or 5, in the book's order; none off the
   * book or after the game ends.
   */
  readonly candidates: readonly Candidate[];
}

/** The game truncated to its first `ply` moves. */
export function gameAt(full: Game, ply: number): Game {
  const position = full.positions[ply];
  if (position === undefined) {
    throw new Error(`The line has ${full.moves.length} moves; there is no position ${ply}`);
  }
  return {
    position,
    positions: full.positions.slice(0, ply + 1),
    moves: full.moves.slice(0, ply),
  };
}

export function viewAt(full: Game, ply: number, book: OpeningBook): ExplorerView {
  const game = gameAt(full, ply);
  const gameStatus = status(game);
  const entry = lookup(book, game.position);
  const candidates =
    entry === undefined || gameStatus.kind !== "ongoing"
      ? []
      : candidateMoves(entry.moves).map((move) => ({ move, leadsTo: move.leadsTo }));
  return {
    game,
    status: gameStatus,
    lastMove: lastMoveOf(game, book),
    entry,
    name: entry === undefined ? undefined : (entry.name ?? inheritedName(game, book)),
    candidates,
  };
}

/** Fewer than this many moves rated 4 and 5 bring in the moves rated 3. */
const FEW_CANDIDATES = 3;

function candidateMoves(moves: readonly BookMove[]): readonly BookMove[] {
  const good = moves.filter((move) => move.rating >= 4);
  return good.length >= FEW_CANDIDATES ? good : moves.filter((move) => move.rating >= 3);
}

function lastMoveOf(game: Game, book: OpeningBook): LastMove | null {
  const move = game.moves[game.moves.length - 1];
  const before = game.positions[game.positions.length - 2];
  if (move === undefined || before === undefined) return null;
  const written = lookup(book, before)?.moves.find((candidate) => sameMove(candidate.move, move));
  return { before, move, book: written };
}

/** The same move: the same squares and the same promotion. */
export function sameMove(a: Move, b: Move): boolean {
  return a.from === b.from && a.to === b.to && a.promotion === b.promotion;
}

/** The name of the nearest earlier position that has one. */
function inheritedName(game: Game, book: OpeningBook): Text | undefined {
  for (let index = game.positions.length - 2; index >= 0; index -= 1) {
    const position = game.positions[index];
    const name = position === undefined ? undefined : lookup(book, position)?.name;
    if (name !== undefined) return name;
  }
  return undefined;
}
