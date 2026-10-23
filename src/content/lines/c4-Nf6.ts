// After 1.c4 Nf6 (English Opening: Anglo-Indian Defence): its moves, all rated, and the moves after each
// move rated 4 or 5, to the book's depth (docs/exec-plans/active/0002-opening-explorer.md,
// Decision log). Backgrounds were checked against the sources listed, read the day this
// module was written.

import type { OpeningModule } from "../book.ts";
import { de } from "./c4-Nf6.de.ts";
import { en } from "./c4-Nf6.en.ts";

const WIKIPEDIA = "https://en.wikipedia.org/wiki/";

export const c4Nf6: OpeningModule = {
  positions: [
    {
      line: "1.c4 Nf6",
      sources: [
        `${WIKIPEDIA}English_Opening`,
        "https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._c4",
      ],
      moves: [
        { san: "Nc3", rating: 5 },
        { san: "Nf3", rating: 5 },
        { san: "d4", rating: 5 },
        { san: "g3", rating: 4 },
        { san: "e3", rating: 3 },
        { san: "b3", rating: 3 },
        { san: "d3", rating: 3 },
        { san: "Qc2", rating: 2 },
        { san: "Qb3", rating: 2 },
        { san: "Qa4", rating: 2 },
        { san: "Na3", rating: 2 },
        { san: "Nh3", rating: 2 },
        { san: "a3", rating: 2 },
        { san: "a4", rating: 2 },
        { san: "b4", rating: 2 },
        { san: "f3", rating: 2 },
        { san: "f4", rating: 2 },
        { san: "h3", rating: 2 },
        { san: "h4", rating: 2 },
        { san: "c5", rating: 2 },
        { san: "g4", rating: 1 },
        { san: "e4", rating: 1 },
      ],
    },
    { line: "1.c4 Nf6 2.Nc3", sources: [`${WIKIPEDIA}English_Opening`] },
    { line: "1.c4 Nf6 2.g3" },
    { line: "1.c4 Nf6 2.e3" },
    { line: "1.c4 Nf6 2.b3" },
    { line: "1.c4 Nf6 2.d3" },
    { line: "1.c4 Nf6 2.Qc2" },
    { line: "1.c4 Nf6 2.Qb3" },
    { line: "1.c4 Nf6 2.Qa4" },
    { line: "1.c4 Nf6 2.Na3" },
    { line: "1.c4 Nf6 2.Nh3" },
    { line: "1.c4 Nf6 2.a3" },
    { line: "1.c4 Nf6 2.a4" },
    { line: "1.c4 Nf6 2.b4" },
    { line: "1.c4 Nf6 2.f3" },
    { line: "1.c4 Nf6 2.f4" },
    { line: "1.c4 Nf6 2.g4" },
    { line: "1.c4 Nf6 2.h3" },
    { line: "1.c4 Nf6 2.h4" },
    { line: "1.c4 Nf6 2.c5" },
  ],
  texts: { en, de },
};
