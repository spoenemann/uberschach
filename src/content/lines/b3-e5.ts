// After 1.b3 e5 (Nimzowitsch–Larsen Attack: Modern Variation): its moves, all rated, and the moves after each
// move rated 4 or 5, to the book's depth (docs/exec-plans/active/0002-opening-explorer.md,
// Decision log). Backgrounds were checked against the sources listed, read the day this
// module was written.

import type { OpeningModule } from "../book.ts";
import { de } from "./b3-e5.de.ts";
import { en } from "./b3-e5.en.ts";

export const b3E5: OpeningModule = {
  positions: [
    {
      line: "1.b3 e5",
      sources: [
        "https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._b3",
        "https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._b3/1...e5",
        "https://chessiverse.com/resources/openings/nimzowitsch-larsen-attack",
      ],
      moves: [
        { san: "Bb2", rating: 5 },
        { san: "e3", rating: 4 },
        { san: "Nf3", rating: 3 },
        { san: "c4", rating: 3 },
        { san: "d3", rating: 3 },
        { san: "d4", rating: 3 },
        { san: "e4", rating: 3 },
        { san: "Nc3", rating: 3 },
        { san: "g3", rating: 3 },
        { san: "a3", rating: 2 },
        { san: "a4", rating: 2 },
        { san: "c3", rating: 2 },
        { san: "f3", rating: 2 },
        { san: "Nh3", rating: 2 },
        { san: "Na3", rating: 2 },
        { san: "Ba3", rating: 2 },
        { san: "h3", rating: 2 },
        { san: "h4", rating: 2 },
        { san: "b4", rating: 1 },
        { san: "f4", rating: 1 },
        { san: "g4", rating: 1 },
      ],
    },
    { line: "1.b3 e5 2.Bb2" },
    { line: "1.b3 e5 2.e3" },
    { line: "1.b3 e5 2.Nf3" },
    { line: "1.b3 e5 2.d3" },
    { line: "1.b3 e5 2.d4" },
    { line: "1.b3 e5 2.Nc3" },
    { line: "1.b3 e5 2.a3" },
    { line: "1.b3 e5 2.a4" },
    { line: "1.b3 e5 2.c3" },
    { line: "1.b3 e5 2.f3" },
    { line: "1.b3 e5 2.Nh3" },
    { line: "1.b3 e5 2.Na3" },
    { line: "1.b3 e5 2.Ba3" },
    { line: "1.b3 e5 2.h3" },
    { line: "1.b3 e5 2.h4" },
    { line: "1.b3 e5 2.b4" },
    { line: "1.b3 e5 2.f4" },
    { line: "1.b3 e5 2.g4" },
  ],
  texts: { en, de },
};
