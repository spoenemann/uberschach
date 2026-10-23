// After 1.g3 Nf6 (Hungarian Opening: Indian Defence): its moves, all rated, and the moves after each
// move rated 4 or 5, to the book's depth (docs/exec-plans/active/0002-opening-explorer.md,
// Decision log). Backgrounds were checked against the sources listed, read the day this
// module was written.

import type { OpeningModule } from "../book.ts";
import { de } from "./g3-Nf6.de.ts";
import { en } from "./g3-Nf6.en.ts";

export const g3Nf6: OpeningModule = {
  positions: [
    {
      line: "1.g3 Nf6",
      moves: [
        { san: "Bg2", rating: 5 },
        { san: "Nf3", rating: 5 },
        { san: "c4", rating: 4 },
        { san: "d4", rating: 3 },
        { san: "d3", rating: 3 },
        { san: "Nc3", rating: 3 },
        { san: "c3", rating: 3 },
        { san: "e3", rating: 3 },
        { san: "b3", rating: 3 },
        { san: "f4", rating: 3 },
        { san: "Nh3", rating: 2 },
        { san: "Bh3", rating: 2 },
        { san: "Na3", rating: 2 },
        { san: "b4", rating: 2 },
        { san: "a3", rating: 2 },
        { san: "a4", rating: 2 },
        { san: "f3", rating: 2 },
        { san: "h3", rating: 2 },
        { san: "h4", rating: 2 },
        { san: "g4", rating: 1 },
        { san: "e4", rating: 1 },
      ],
    },
    { line: "1.g3 Nf6 2.Bg2" },
    { line: "1.g3 Nf6 2.d3" },
    { line: "1.g3 Nf6 2.Nc3" },
    { line: "1.g3 Nf6 2.c3" },
    { line: "1.g3 Nf6 2.e3" },
    { line: "1.g3 Nf6 2.b3" },
    { line: "1.g3 Nf6 2.f4" },
    { line: "1.g3 Nf6 2.Nh3" },
    { line: "1.g3 Nf6 2.Bh3" },
    { line: "1.g3 Nf6 2.Na3" },
    { line: "1.g3 Nf6 2.b4" },
    { line: "1.g3 Nf6 2.a3" },
    { line: "1.g3 Nf6 2.a4" },
    { line: "1.g3 Nf6 2.f3" },
    { line: "1.g3 Nf6 2.h3" },
    { line: "1.g3 Nf6 2.h4" },
    { line: "1.g3 Nf6 2.g4" },
  ],
  texts: { en, de },
};
