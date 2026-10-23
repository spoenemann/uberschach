// A line: moves in sequence with their move numbers, "1.e4 e5 2.Nf3",
// written from a game and read into one through the rules engine, in the
// piece letters of a notation language (docs/design-docs/chess-notation.md).

import { play, status, type Game } from "./game.ts";
import type { Move } from "./moves.ts";
import type { Position } from "./position.ts";
import { parseSan, toSan, type NotationLanguage, type SanFailure } from "./san.ts";

/** "3." before a move by White, "3..." before one by Black. */
function moveNumber(position: Position): string {
  return `${position.fullmoveNumber}${position.turn === "white" ? "." : "..."}`;
}

/** The move with its number: "3.Bb5", "3...a6". Throws for an illegal move. */
export function numberedSan(position: Position, move: Move, language: NotationLanguage): string {
  return moveNumber(position) + toSan(position, move, language);
}

/**
 * The game's moves as one line, numbered as a game score is: "1.e4 e5
 * 2.Nf3 Nc6", or "1...e5 2.Nf3" when the game starts with Black to move.
 * Empty for a game without moves.
 */
export function formatLine(game: Game, language: NotationLanguage): string {
  return game.moves
    .map((move, index) => {
      const position = game.positions[index];
      if (position === undefined) {
        throw new Error(`Game has ${game.positions.length} positions for ${game.moves.length} moves`);
      }
      const san = toSan(position, move, language);
      return position.turn === "white" || index === 0 ? moveNumber(position) + san : san;
    })
    .join(" ");
}

/** The game after the move the text names. Throws with the reason when it names none. */
export function playSan(game: Game, text: string, language: NotationLanguage): Game {
  const result = parseSan(game.position, text, language);
  if (!result.ok) throw new Error(`Cannot play "${text}": ${result.reason}`);
  return play(game, result.move);
}

export interface LineFailure {
  /** The token that could not be played, as written, move number included. */
  readonly text: string;
  /** How many moves of the line were played before it. */
  readonly index: number;
  readonly reason: SanFailure | "game-over";
}

export interface LineResult {
  /** The game after the whole line, or after the moves before the failure. */
  readonly game: Game;
  readonly failure: LineFailure | null;
}

/** A move number before a move, glued or on its own: "1.", "1...", "1…". */
const MOVE_NUMBER = /^\d+(?:\.+|…)/;

/**
 * Plays the line on the game, move by move. Tokens are separated by
 * whitespace; a move number before a move, glued ("2.Nf3") or on its own
 * ("2. Nf3"), is skipped and not checked against the position. Reading
 * stops at the first token that is not a legal move, or at the end of the
 * game, and the result says where and why; the game then holds the legal
 * prefix.
 */
export function playLine(game: Game, text: string, language: NotationLanguage): LineResult {
  let current = game;
  let index = 0;
  for (const token of text.trim().split(/\s+/)) {
    const san = token.replace(MOVE_NUMBER, "");
    if (san === "") continue;
    if (status(current).kind !== "ongoing") {
      return { game: current, failure: { text: token, index, reason: "game-over" } };
    }
    const result = parseSan(current.position, san, language);
    if (!result.ok) {
      return { game: current, failure: { text: token, index, reason: result.reason } };
    }
    current = play(current, result.move);
    index += 1;
  }
  return { game: current, failure: null };
}
