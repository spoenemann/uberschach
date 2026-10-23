// After 1.Nf3 f5 (Zukertort Opening: Dutch Variation): its moves, all rated, and the moves after each
// move rated 4 or 5, to the book's depth (docs/exec-plans/active/0002-opening-explorer.md,
// Decision log). Backgrounds were checked against the sources listed, read the day this
// module was written.

import type { OpeningModule } from "../book.ts";
import { de } from "./Nf3-f5.de.ts";
import { en } from "./Nf3-f5.en.ts";

const WIKIPEDIA = "https://en.wikipedia.org/wiki/";

export const nf3F5: OpeningModule = {
  positions: [
    {
      line: "1.Nf3 f5",
      sources: [`${WIKIPEDIA}Dutch_Defence`],
      moves: [
        { san: "d4", rating: 5 },
        { san: "g3", rating: 4 },
        { san: "c4", rating: 4 },
        { san: "e4", rating: 3 },
        { san: "b3", rating: 3 },
        { san: "d3", rating: 3 },
        { san: "e3", rating: 3 },
        { san: "Nc3", rating: 3 },
        { san: "a3", rating: 2 },
        { san: "a4", rating: 2 },
        { san: "b4", rating: 2 },
        { san: "c3", rating: 2 },
        { san: "h3", rating: 2 },
        { san: "h4", rating: 2 },
        { san: "Na3", rating: 2 },
        { san: "Rg1", rating: 2 },
        { san: "Ng5", rating: 2 },
        { san: "Nh4", rating: 2 },
        { san: "Ne5", rating: 2 },
        { san: "Nd4", rating: 2 },
        { san: "Ng1", rating: 2 },
        { san: "g4", rating: 1 },
      ],
    },
    { line: "1.Nf3 f5 2.g3" },
    { line: "1.Nf3 f5 2.c4" },
    {
      line: "1.Nf3 f5 2.e4",
      sources: [
        `${WIKIPEDIA}Lisitsin_Gambit`,
        "https://chesshistory.com/winter/extra/lisitsinsgambit.html",
      ],
    },
    { line: "1.Nf3 f5 2.b3" },
    { line: "1.Nf3 f5 2.d3" },
    { line: "1.Nf3 f5 2.e3" },
    { line: "1.Nf3 f5 2.Nc3" },
    { line: "1.Nf3 f5 2.a3" },
    { line: "1.Nf3 f5 2.a4" },
    { line: "1.Nf3 f5 2.b4" },
    { line: "1.Nf3 f5 2.c3" },
    { line: "1.Nf3 f5 2.g4" },
    { line: "1.Nf3 f5 2.h3" },
    { line: "1.Nf3 f5 2.h4" },
    { line: "1.Nf3 f5 2.Na3" },
    { line: "1.Nf3 f5 2.Rg1" },
    { line: "1.Nf3 f5 2.Ng5" },
    { line: "1.Nf3 f5 2.Nh4" },
    { line: "1.Nf3 f5 2.Ne5" },
    { line: "1.Nf3 f5 2.Nd4" },
    { line: "1.Nf3 f5 2.Ng1" },
  ],
  texts: { en, de },
};
