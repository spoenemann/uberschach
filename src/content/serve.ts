// The served form of the book: what the app fetches
// (docs/adr/0001-opening-book-as-fetched-json.md). One chunk per content
// module, its positions keyed and its moves carrying the name of the position
// each reaches, so that the app shows a position without any chess
// computation; and the index from every position's key to its chunk, so that
// a transposition, from inside the book or from outside it, finds the chunk
// that declares the position. Only what the screen shows: no sources.
// scripts/content/serve.mjs writes it into public/openings/ when the app is
// built; loader.ts reads it back.

import type { Move, PromotionPiece } from "../domain/moves.ts";
import type { Square } from "../domain/position.ts";
import type { OpeningBook, Rating, Text } from "./book.ts";

export interface ServedMove {
  readonly san: string;
  /** The move as squares, "e2e4", with the promotion piece's letter after them: "e7e8q". */
  readonly move: string;
  readonly rating: Rating;
  readonly strategy: Text;
  readonly leadsTo?: Text;
}

export interface ServedPosition {
  /** The positionKey; the index and the book are keyed by it. */
  readonly key: string;
  readonly line: string;
  readonly name?: Text;
  readonly background?: Text;
  readonly moves: readonly ServedMove[];
}

export interface ServedChunk {
  readonly positions: readonly ServedPosition[];
}

/** Every position's key, and the id of the chunk that holds it. */
export type ServedIndex = Readonly<Record<string, string>>;

export interface ServedBook {
  readonly index: ServedIndex;
  /** By chunk id, the module's id. */
  readonly chunks: ReadonlyMap<string, ServedChunk>;
}

export function serveBook(book: OpeningBook): ServedBook {
  const index: Record<string, string> = {};
  const positions = new Map<string, ServedPosition[]>();
  for (const [key, entry] of book) {
    index[key] = entry.module;
    const served: ServedPosition = {
      key,
      line: entry.line,
      ...(entry.name === undefined ? {} : { name: entry.name }),
      ...(entry.background === undefined ? {} : { background: entry.background }),
      moves: entry.moves.map((move) => ({
        san: move.san,
        move: formatMove(move.move),
        rating: move.rating,
        strategy: move.strategy,
        ...(move.leadsTo === undefined ? {} : { leadsTo: move.leadsTo }),
      })),
    };
    const chunk = positions.get(entry.module) ?? [];
    chunk.push(served);
    positions.set(entry.module, chunk);
  }
  const chunks = new Map<string, ServedChunk>();
  for (const [id, list] of positions) chunks.set(id, { positions: list });
  return { index, chunks };
}

const PROMOTION_LETTERS: Readonly<Record<PromotionPiece, string>> = {
  queen: "q",
  rook: "r",
  bishop: "b",
  knight: "n",
};

/** "e2e4", or "e7e8q" with a promotion. */
export function formatMove(move: Move): string {
  return `${move.from}${move.to}${move.promotion === undefined ? "" : PROMOTION_LETTERS[move.promotion]}`;
}

const MOVE_TEXT = /^([a-h][1-8])([a-h][1-8])([qrbn]?)$/;

export function parseMove(text: string): Move {
  const match = MOVE_TEXT.exec(text);
  if (match === null) throw new Error(`"${text}" is not a move written as squares, like "e2e4" or "e7e8q"`);
  const [, from, to, letter] = match as unknown as [string, Square, Square, string];
  const promotion = (Object.keys(PROMOTION_LETTERS) as PromotionPiece[]).find(
    (piece) => PROMOTION_LETTERS[piece] === letter,
  );
  return promotion === undefined ? { from, to } : { from, to, promotion };
}
