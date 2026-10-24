/// <reference types="node" />
// The named lines: the Lichess chess-openings dataset (src/content/named/,
// five TSV files as published, README.md there), which decides which moves the
// book follows beyond the breadth-first plies and what the positions on the way
// are called (docs/product-specs/opening-explorer.md, The database). Read by
// openings.test.ts, which holds the book to it, and by the content tools,
// which write what it names; never by the app.

import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { applyMove } from "../domain/apply.ts";
import { newGame, positionKey } from "../domain/game.ts";
import type { Position } from "../domain/position.ts";
import { parseSan, toSan } from "../domain/san.ts";

export const NAMED_DIR = `${path.join(path.dirname(fileURLToPath(import.meta.url)), "named")}/`;

/**
 * The longest line the book follows, in moves played: a named line longer than
 * this is cut there, and its name, which belongs to its last position, is not
 * given (docs/exec-plans/completed/0002-opening-explorer.md, Decision log, Named
 * lines).
 */
export const NAMED_LINE_PLIES = 12;

export interface NamedLine {
  readonly eco: string;
  /** The name as the dataset writes it, American spelling. */
  readonly name: string;
  /** The moves as the dataset writes them, without numbers; namedBook plays them. */
  readonly moves: readonly string[];
}

/** Every line of the dataset, in file order. */
export function readNamedLines(dir: string = NAMED_DIR): NamedLine[] {
  return ["a", "b", "c", "d", "e"].flatMap((volume) =>
    parseNamedLines(readFileSync(`${dir}${volume}.tsv`, "utf8"), `${volume}.tsv`),
  );
}

/** A move number before a move, glued or on its own: "1.", "1...". */
const MOVE_NUMBER = /^\d+\.+/;

/** The rows of one TSV file: eco, name and pgn separated by tabs, under a header. */
export function parseNamedLines(tsv: string, file: string): NamedLine[] {
  const rows = tsv.split("\n").filter((row) => row.trim() !== "");
  return rows.slice(1).map((row, index) => {
    const [eco, name, pgn] = row.split("\t");
    if (eco === undefined || name === undefined || pgn === undefined) {
      throw new Error(`${file}, row ${index + 2}: expected eco, name and pgn separated by tabs`);
    }
    const moves = pgn.split(/\s+/).map((token) => token.replace(MOVE_NUMBER, "")).filter((san) => san !== "");
    return { eco, name, moves };
  });
}

/** The name in the book's British spelling: "Defence", "Centre". */
export function britishName(name: string): string {
  return name.replace(/Defense/g, "Defence").replace(/Center/g, "Centre");
}

export interface NamedBook {
  /** By position key, the moves the named lines play from that position, as the book writes them. */
  readonly moves: ReadonlyMap<string, ReadonlySet<string>>;
  /** By position key, the line that ends there, its name in British spelling: the dataset names a position once. */
  readonly names: ReadonlyMap<string, NamedLine>;
}

/** A node of the lines' tree: the lines share their first moves, so each move is played once. */
interface Branch {
  readonly next: Map<string, Branch>;
  line?: NamedLine;
}

/**
 * What the named lines, each cut at `plies` moves, play and name, keyed by
 * position. Throws, naming the line, on a move that is not legal.
 */
export function namedBook(lines: readonly NamedLine[], plies: number = NAMED_LINE_PLIES): NamedBook {
  const tree: Branch = { next: new Map() };
  for (const line of lines) {
    let branch = tree;
    for (const san of line.moves.slice(0, plies)) {
      branch = branch.next.get(san) ?? branch.next.set(san, { next: new Map() }).get(san) ?? branch;
    }
    if (line.moves.length > plies) continue;
    if (branch.line !== undefined) {
      throw new Error(`"${line.name}" ends where "${branch.line.name}" does; the dataset names a position once`);
    }
    branch.line = line;
  }
  const moves = new Map<string, Set<string>>();
  const names = new Map<string, NamedLine>();
  const walk = (branch: Branch, position: Position, path: string): void => {
    const key = positionKey(position);
    if (branch.line !== undefined) {
      const twin = names.get(key);
      if (twin !== undefined) {
        throw new Error(`"${branch.line.name}" ends where "${twin.name}" does; the dataset names a position once`);
      }
      names.set(key, { ...branch.line, name: britishName(branch.line.name) });
    }
    for (const [text, child] of branch.next) {
      const parsed = parseSan(position, text, "en");
      if (!parsed.ok) throw new Error(`The named line "${path} ${text}" cannot be played: "${text}" is ${parsed.reason}`);
      const san = toSan(position, parsed.move, "en");
      (moves.get(key) ?? moves.set(key, new Set()).get(key))?.add(san);
      walk(child, applyMove(position, parsed.move), `${path} ${text}`.trim());
    }
  };
  walk(tree, newGame().position, "");
  return { moves, names };
}
