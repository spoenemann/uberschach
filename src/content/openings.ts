// The opening book the app ships: every content module, built into one book
// keyed by position (book.ts). A new module is one line in lines/index.ts.

import { buildBook, type OpeningBook } from "./book.ts";
import { firstMoves } from "./firstMoves.ts";
import { LINES } from "./lines/index.ts";

export const OPENINGS: OpeningBook = buildBook([firstMoves, ...LINES]);
