// The book as the app holds it: empty at first, filled chunk by chunk from a
// source as the line walks into new families
// (docs/adr/0001-opening-book-as-fetched-json.md). ensure(game) fetches the
// index on first use and then, for each position of the game that is not
// loaded yet, the chunk the index names for it; a position the index does not
// know is off the book and loads nothing. The source is given: src/app makes
// the one that fetches, since src/content may not (docs/ARCHITECTURE.md,
// Invariants), and tests give one that answers from memory.

import { positionKey, type Game } from "../domain/game.ts";
import type { BookMove, BookPosition, OpeningBook } from "./book.ts";
import { parseMove, type ServedBook, type ServedChunk, type ServedIndex, type ServedPosition } from "./serve.ts";

export interface BookSource {
  index(): Promise<ServedIndex>;
  chunk(id: string): Promise<ServedChunk>;
}

export interface LazyBook {
  /** The positions loaded so far. The same Map throughout; `version` says when it has grown. */
  readonly book: OpeningBook;
  /** The number of chunks loaded. */
  readonly version: number;
  /**
   * Loads what the game's positions need, every one of them, so that the
   * entries on the way to the current position are there too. Resolves when
   * each is in `book` or off it; rejects when the source fails, and the next
   * call tries again.
   */
  ensure(game: Game): Promise<void>;
}

export function lazyBook(source: BookSource): LazyBook {
  const book = new Map<string, BookPosition>();
  const chunks = new Map<string, Promise<void>>();
  let index: Promise<ServedIndex> | undefined;
  let version = 0;
  const indexOnce = () => {
    index ??= source.index().catch((error: unknown) => {
      index = undefined;
      throw error;
    });
    return index;
  };
  const chunkOnce = (id: string) => {
    const pending =
      chunks.get(id) ??
      source.chunk(id).then(
        (chunk) => {
          for (const position of chunk.positions) book.set(position.key, bookPosition(position, id));
          version += 1;
        },
        (error: unknown) => {
          chunks.delete(id);
          throw error;
        },
      );
    chunks.set(id, pending);
    return pending;
  };
  return {
    book,
    get version() {
      return version;
    },
    async ensure(game) {
      const keys = await indexOnce();
      const wanted = new Set<string>();
      for (const position of game.positions) {
        const id = keys[positionKey(position)];
        if (id !== undefined) wanted.add(id);
      }
      // Every chunk the game needs, the ones still on their way included: a
      // call that skipped a pending chunk resolved before it had arrived, and
      // the screen then showed nothing (found 2026-10-24 in development, where
      // StrictMode's doubled effect makes two calls overlap).
      await Promise.all([...wanted].map(chunkOnce));
    },
  };
}

/** A source that answers from a served book in memory: for tests, and the measure of what fetching adds. */
export function memorySource(served: ServedBook): BookSource {
  return {
    index: () => Promise.resolve(served.index),
    chunk: (id) => {
      const chunk = served.chunks.get(id);
      return chunk === undefined ? Promise.reject(new Error(`no chunk "${id}"`)) : Promise.resolve(chunk);
    },
  };
}

function bookPosition(position: ServedPosition, module: string): BookPosition {
  const moves: BookMove[] = position.moves.map((move) => ({
    san: move.san,
    move: parseMove(move.move),
    rating: move.rating,
    strategy: move.strategy,
    leadsTo: move.leadsTo,
  }));
  return {
    line: position.line,
    module,
    name: position.name,
    background: position.background,
    sources: [],
    moves,
  };
}
