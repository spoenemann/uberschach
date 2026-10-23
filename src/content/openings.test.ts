// The shipped book against the promises of docs/product-specs/opening-explorer.md
// (The database) and the content principles recorded there: every legal move
// from a book position is rated and explained, only moves rated 4 and 5 are
// followed, every historical background names its source, and English is
// complete. Importing OPENINGS already fails when data and prose disagree
// (book.ts); these tests hold what the loader cannot know.
import { describe, expect, test } from "vitest";
import { newGame, positionKey } from "../domain/game.ts";
import { playLine } from "../domain/line.ts";
import { legalMoves, playMove } from "../domain/moves.ts";
import type { Position } from "../domain/position.ts";
import { toSan } from "../domain/san.ts";
import { lookup, type BookPosition, type Rating } from "./book.ts";
import { OPENINGS } from "./openings.ts";

const START = newGame().position;
const positions = [...OPENINGS.values()];

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
