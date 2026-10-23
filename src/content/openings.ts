// The opening book the app ships: every content module, built into one book
// keyed by position (book.ts). A new module is one line here.

import { buildBook, type OpeningBook } from "./book.ts";
import { firstMoves } from "./firstMoves.ts";

export const OPENINGS: OpeningBook = buildBook([firstMoves]);
