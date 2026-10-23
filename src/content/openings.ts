// Every content module read from disk, and the whole book built from them
// with every check: for the tests (openings.test.ts) and for whatever needs the
// book in one piece under Node. The app never imports this (eslint.config.js,
// no-restricted-imports): it fetches the served form, which
// scripts/content/serve.mjs writes from the same modules when the app is built
// (docs/adr/0001-opening-book-as-fetched-json.md).

import { buildBook, type OpeningBook, type OpeningModule } from "./book.ts";
import { readModules } from "./files.ts";

export const MODULES: readonly OpeningModule[] = readModules();

export const OPENINGS: OpeningBook = buildBook(MODULES);
