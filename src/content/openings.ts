// The opening book the app ships: every content module, built into one book
// keyed by position (book.ts). A new module is one line in lines/index.ts.
// Built without verifying, which is what keeps startup cheap for thousands of
// positions; openings.test.ts builds MODULES again with every check on.

import { buildBook, type OpeningBook, type OpeningModule } from "./book.ts";
import { firstMoves } from "./firstMoves.ts";
import { LINES } from "./lines/index.ts";

export const MODULES: readonly OpeningModule[] = [firstMoves, ...LINES];

export const OPENINGS: OpeningBook = buildBook(MODULES, { verify: false });
