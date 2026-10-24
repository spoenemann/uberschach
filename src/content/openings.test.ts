// The shipped book against the promises of docs/product-specs/opening-explorer.md
// (The database) and the content principles recorded there: through the
// breadth-first plies every legal move from a followed position is rated and
// explained and only moves rated 4 and 5 are followed; beyond them, and after
// a move rated 1 to 3, the book writes exactly the moves of the named lines
// (src/content/named/), to the length the plan sets; every historical
// background names its source, and both languages are complete. Importing
// OPENINGS already fails when data and prose disagree (book.ts); these tests
// hold what the loader cannot know, and the shape of the modules and of the
// served form that the app's loading relies on
// (docs/adr/0001-opening-book-as-fetched-json.md).
import { existsSync, statSync } from "node:fs";
import { describe, expect, test } from "vitest";
import { newGame } from "../domain/game.ts";
import { legalMoves, playMove } from "../domain/moves.ts";
import type { Position } from "../domain/position.ts";
import { toSan } from "../domain/san.ts";
import { SUPPORTED_LANGUAGES } from "../i18n/language.ts";
import { lookup, type BookPosition, type Rating } from "./book.ts";
import { moduleFile, moduleId } from "./files.ts";
import { NAMED_LINE_PLIES, namedBook, readNamedLines } from "./named.ts";
import { MODULES, OPENINGS } from "./openings.ts";
import { parseMove, serveBook } from "./serve.ts";

/**
 * The deepest position, counted in moves played, from which the breadth-first
 * plies write every legal move: White's second move (docs/exec-plans/active/0002-opening-explorer.md,
 * Decision log, Depth). A move rated 4 or 5 into a position at or before it is
 * followed with every legal move; beyond it the named lines decide
 * (Decision log, Named lines).
 */
const LAST_FOLLOWED_PLY = 3;

/**
 * The most a module reaching more than two plies below its root may hold, its data and prose
 * files together: the largest module of the breadth-first plies (lines/e4-e5, 98,675 bytes on
 * 2026-10-24), rounded up (docs/adr/0002-opening-modules-folded-to-a-size-budget.md).
 */
const MODULE_BYTES = 100_000;

/** A move in English piece letters (Nf3, Qxd5, the 2.Nf3 of a line), which a German text must not contain. */
const ENGLISH_PIECE_MOVE = /(^|[\s(.])[NBRQ][a-h1-8]?x?[a-h][1-8](?![a-z0-9])/;

const START = newGame().position;
const positions = [...OPENINGS.values()];
const keyOf = new Map([...OPENINGS].map(([key, entry]) => [entry, key]));
const NAMED = namedBook(readNamedLines());

/** How many moves a line plays: one token each, as formatLine writes it. */
function plyOfLine(line: string): number {
  return line.split(/\s+/).filter((token) => token !== "").length;
}

function plyOf(entry: BookPosition): number {
  return plyOfLine(entry.line);
}

/** The position a book entry describes, from its key, which is a FEN without the clocks. */
function positionOf(entry: BookPosition): Position {
  return newGame(`${keyOf.get(entry) ?? ""} 0 1`).position;
}

/**
 * The positions the breadth-first plies follow, where every legal move is written: the initial
 * position, and each position up to LAST_FOLLOWED_PLY that a move rated 4 or 5 from one of
 * them reaches.
 */
const breadthFirst = new Set<BookPosition>();
{
  const root = lookup(OPENINGS, START);
  const queue = root === undefined ? [] : [root];
  for (let entry = queue.shift(); entry !== undefined; entry = queue.shift()) {
    if (breadthFirst.has(entry)) continue;
    breadthFirst.add(entry);
    for (const move of entry.moves) {
      const reached = lookup(OPENINGS, playMove(positionOf(entry), move.move));
      if (move.rating >= 4 && reached !== undefined && plyOf(reached) <= LAST_FOLLOWED_PLY) queue.push(reached);
    }
  }
}

describe("the shipped book", () => {
  // The app fetches the book one module at a time, so a module's size is a chunk's size: a module
  // is one subtree of the book, its root and positions each a move away from another of its own.
  // Up to two plies below its root it grows with the branching; a module that reaches deeper
  // stays within MODULE_BYTES on disk, the size of the largest module of the breadth-first plies
  // (docs/adr/0002-opening-modules-folded-to-a-size-budget.md).
  test("every module is one subtree, rooted at one position and named after it, and within its size when deeper than two plies", () => {
    for (const module of MODULES) {
      const plies = module.positions.map((position) => plyOfLine(position.line));
      const rootPly = Math.min(...plies);
      const roots = module.positions.filter((position) => plyOfLine(position.line) === rootPly);
      expect(roots.map((root) => root.line), `the shallowest position of lines/${module.id}.json`).toHaveLength(1);
      expect(module.id, `the id of the module rooted at "${roots[0]?.line}"`).toBe(moduleId(roots[0]?.line ?? ""));
      const lines = new Set(module.positions.map((position) => position.line));
      for (const position of module.positions) {
        if (position === roots[0]) continue;
        expect(
          lines.has(position.line.replace(/\s*\S+$/, "")),
          `"${position.line}" in lines/${module.id}.json is not a move away from another of its positions; ` +
            `declare it in the module that holds the position before it`,
        ).toBe(true);
      }
      if (Math.max(...plies) <= rootPly + 2) continue;
      const bytes = [undefined, ...SUPPORTED_LANGUAGES].reduce(
        (sum, language) => sum + (existsSync(moduleFile(module.id, language)) ? statSync(moduleFile(module.id, language)).size : 0),
        0,
      );
      expect(
        bytes,
        `lines/${module.id}.json and its prose reach more than two plies below its root and hold more than ` +
          `${MODULE_BYTES} bytes; move a position below its root into a module of its own, with the positions below it`,
      ).toBeLessThanOrEqual(MODULE_BYTES);
    }
  });

  test("the served form holds every position once in its module's chunk, keyed and indexed, with its moves as squares", () => {
    const served = serveBook(OPENINGS);
    let count = 0;
    for (const [id, chunk] of served.chunks) {
      for (const position of chunk.positions) {
        count += 1;
        const entry = OPENINGS.get(position.key);
        expect(entry?.line, `the key of "${position.line}"`).toBe(position.line);
        expect(entry?.module, `the chunk of "${position.line}"`).toBe(id);
        expect(served.index[position.key], `the index for "${position.line}"`).toBe(id);
        expect(position).not.toHaveProperty("sources");
        const before = entry === undefined ? START : positionOf(entry);
        position.moves.forEach((move, index) => {
          const written = entry?.moves[index];
          expect(parseMove(move.move), `move ${move.san} from "${position.line}"`).toEqual(written?.move);
          expect(move.leadsTo, `where ${move.san} from "${position.line}" leads`).toEqual(
            written === undefined ? undefined : lookup(OPENINGS, playMove(before, written.move))?.name,
          );
        });
      }
    }
    expect(count).toBe(OPENINGS.size);
    expect(Object.keys(served.index)).toHaveLength(OPENINGS.size);
  });

  test("holds the initial position with an introduction in both languages and no name", () => {
    const root = lookup(OPENINGS, START);
    expect(root?.line).toBe("");
    expect(root?.name).toBeUndefined();
    expect(root?.background?.en).toMatch(/^Twenty moves are legal/);
    expect(root?.background?.de).toMatch(/^Aus der Grundstellung sind zwanzig/);
  });

  test("rates and explains every legal move from every position the breadth-first plies follow", () => {
    for (const entry of breadthFirst) {
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

  test("follows every move rated 4 or 5 through the breadth-first plies", () => {
    for (const entry of breadthFirst) {
      for (const move of entry.moves) {
        if (move.rating < 4) continue;
        const reached = lookup(OPENINGS, playMove(positionOf(entry), move.move));
        expect(reached, `position after "${entry.line}" ${move.san}`).toBeDefined();
      }
    }
  });

  // Beyond the breadth-first plies, and after a move rated 1 to 3 within them, the named lines
  // decide what the book follows (docs/product-specs/opening-explorer.md, The database).
  test("writes from every other position exactly the moves the named lines play from it", () => {
    for (const entry of positions) {
      if (breadthFirst.has(entry)) continue;
      const named = [...(NAMED.moves.get(keyOf.get(entry) ?? "") ?? [])].sort();
      const written = entry.moves.map((move) => move.san).sort();
      expect(written, `moves from "${entry.line}", which the breadth-first plies do not follow`).toEqual(named);
    }
  });

  test(`covers every named line to its ${NAMED_LINE_PLIES}th move: each position on it is in the book, and each named one has a name`, () => {
    for (const [key, moves] of NAMED.moves) {
      const entry = OPENINGS.get(key);
      expect(entry, `the position ${key}, on a named line`).toBeDefined();
      const written = new Set(entry?.moves.map((move) => move.san));
      for (const san of moves) expect(written.has(san), `${san} from "${entry?.line}", a named move`).toBe(true);
    }
    for (const [key, line] of NAMED.names) {
      const entry = OPENINGS.get(key);
      expect(entry, `the position of "${line.name}"`).toBeDefined();
      expect(entry?.name?.en, `the name of "${entry?.line}", which the dataset calls "${line.name}"`).toBeTruthy();
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
