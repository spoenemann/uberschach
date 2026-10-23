// The shipped book against the promises of docs/product-specs/opening-explorer.md
// (The database) and the content principles recorded there: every legal move
// from a book position is rated and explained, only moves rated 4 and 5 are
// followed, to the depth the plan sets and no further, every historical
// background names its source, and both languages are complete. Importing
// OPENINGS already fails when data and prose disagree (book.ts); these tests
// hold what the loader cannot know.
import { describe, expect, test } from "vitest";
import { newGame, positionKey } from "../domain/game.ts";
import { playLine } from "../domain/line.ts";
import { legalMoves, playMove } from "../domain/moves.ts";
import type { Position } from "../domain/position.ts";
import { toSan } from "../domain/san.ts";
import { lookup, type BookPosition, type Rating } from "./book.ts";
import { OPENINGS } from "./openings.ts";

/**
 * The deepest position, counted in moves played, from which the book writes
 * moves. The plan sets it at 3, White's second move
 * (docs/exec-plans/active/0002-opening-explorer.md, Decision log), and the
 * content reaches it one ply at a time; this is the ply reached so far. A move
 * rated 4 or 5 into a position at or before it is followed; positions beyond it
 * end the book.
 */
const LAST_FOLLOWED_PLY = 2;

/** A move in English piece letters (Nf3, Qxd5, the 2.Nf3 of a line), which a German text must not contain. */
const ENGLISH_PIECE_MOVE = /(^|[\s(.])[NBRQ][a-h1-8]?x?[a-h][1-8](?![a-z0-9])/;

const START = newGame().position;
const positions = [...OPENINGS.values()];

/** How many moves a book entry's line plays. */
function plyOf(entry: BookPosition): number {
  return playLine(newGame(), entry.line, "en").game.moves.length;
}

/** The position a book entry describes, replayed from its line. */
function positionOf(entry: BookPosition): Position {
  return playLine(newGame(), entry.line, "en").game.position;
}

describe("the shipped book", () => {
  test("holds the initial position with an introduction in both languages and no name", () => {
    const root = lookup(OPENINGS, START);
    expect(root?.line).toBe("");
    expect(root?.name).toBeUndefined();
    expect(root?.background?.en).toMatch(/^Twenty moves are legal/);
    expect(root?.background?.de).toMatch(/^Aus der Grundstellung sind zwanzig/);
  });

  test("rates and explains every legal move from every position that has moves at all", () => {
    for (const entry of positions) {
      if (entry.moves.length === 0) continue;
      const position = positionOf(entry);
      const legal = legalMoves(position).map((move) => toSan(position, move, "en")).sort();
      const written = entry.moves.map((move) => move.san).sort();
      expect(written, `moves from "${entry.line}"`).toEqual(legal);
    }
  });

  test("gives the first move the maintainer's ratings", () => {
    const root = lookup(OPENINGS, START);
    const ratings = Object.fromEntries(root?.moves.map((move) => [move.san, move.rating]) ?? []);
    const expected: Record<string, Rating> = {
      e4: 5, d4: 5, Nf3: 5, c4: 5,
      g3: 4, b3: 4,
      f4: 3, Nc3: 3,
      b4: 2, e3: 2, d3: 2, c3: 2, a3: 2, h3: 2,
      g4: 1, f3: 1, h4: 1, a4: 1, Na3: 1, Nh3: 1,
    };
    expect(ratings).toEqual(expected);
  });

  test("follows only moves rated 4 and 5: a position reached by lower ratings alone has no moves", () => {
    const best = new Map<string, Rating>();
    for (const entry of positions) {
      const position = positionOf(entry);
      for (const move of entry.moves) {
        const key = positionKey(playMove(position, move.move));
        best.set(key, Math.max(best.get(key) ?? 1, move.rating) as Rating);
      }
    }
    for (const [key, rating] of best) {
      const reached = OPENINGS.get(key);
      if (reached !== undefined && rating <= 3) {
        expect(reached.moves, `moves from "${reached.line}", reached by a move rated ${rating}`).toEqual([]);
      }
    }
  });

  test("follows every move rated 4 or 5 to the depth the plan sets, and goes no deeper", () => {
    for (const entry of positions) {
      if (plyOf(entry) > LAST_FOLLOWED_PLY) {
        expect(entry.moves, `moves from "${entry.line}", beyond the depth`).toEqual([]);
      }
      for (const move of entry.moves) {
        if (move.rating < 4) continue;
        const reached = lookup(OPENINGS, playMove(positionOf(entry), move.move));
        expect(reached, `position after "${entry.line}" ${move.san}`).toBeDefined();
        if (reached !== undefined && plyOf(reached) <= LAST_FOLLOWED_PLY) {
          expect(reached.moves.length, `moves from "${reached.line}", reached by a move rated ${move.rating}`).toBeGreaterThan(0);
        }
      }
    }
  });

  test("writes every name, background and strategy in both languages", () => {
    for (const entry of positions) {
      if (entry.name !== undefined) expect(entry.name.de, `German name of "${entry.line}"`).toBeTruthy();
      if (entry.background !== undefined) {
        expect(entry.background.de, `German background of "${entry.line}"`).toBeTruthy();
      }
      for (const move of entry.moves) {
        expect(move.strategy.de, `German strategy of "${entry.line}" ${move.san}`).toBeTruthy();
      }
    }
  });

  test("writes the moves in a German text with German piece letters", () => {
    for (const entry of positions) {
      const texts = [entry.name?.de, entry.background?.de, ...entry.moves.map((move) => move.strategy.de)];
      for (const text of texts) {
        if (text !== undefined) expect(text, `German text at "${entry.line}"`).not.toMatch(ENGLISH_PIECE_MOVE);
      }
    }
  });

  test("names every position a first move reaches, in both languages, and explains the move in both", () => {
    const root = lookup(OPENINGS, START);
    expect(root?.moves).toHaveLength(20);
    for (const move of root?.moves ?? []) {
      const reached = lookup(OPENINGS, playMove(START, move.move));
      expect(reached, `position after 1.${move.san}`).toBeDefined();
      expect(reached?.name?.en, `name after 1.${move.san}`).toBeTruthy();
      expect(reached?.name?.de, `German name after 1.${move.san}`).toBeTruthy();
      expect(reached?.background?.de, `German background after 1.${move.san}`).toBeTruthy();
      expect(move.strategy.de, `German strategy of 1.${move.san}`).toBeTruthy();
    }
  });

  test("names at least one source, a URL, for every background", () => {
    for (const entry of positions) {
      if (entry.background === undefined) continue;
      expect(entry.sources.length, `sources of "${entry.line}"`).toBeGreaterThan(0);
      for (const source of entry.sources) expect(source).toMatch(/^https:\/\//);
    }
  });
});
