// After 1.c4 (English Opening): the replies, all rated, and the positions they
// reach that the book does not follow further. The replies it follows (rated 4 and 5) have
// their own modules in this folder.

import type { OpeningModule } from "../book.ts";
import { de } from "./c4.de.ts";
import { en } from "./c4.en.ts";

const WIKIPEDIA = "https://en.wikipedia.org/wiki/";

export const c4: OpeningModule = {
  positions: [
    {
      line: "1.c4",
      sources: [`${WIKIPEDIA}English_Opening`],
      moves: [
        { san: "e5", rating: 5 },
        { san: "Nf6", rating: 5 },
        { san: "c5", rating: 5 },
        { san: "e6", rating: 4 },
        { san: "c6", rating: 4 },
        { san: "g6", rating: 4 },
        { san: "Nc6", rating: 3 },
        { san: "f5", rating: 3 },
        { san: "d5", rating: 3 },
        { san: "b6", rating: 3 },
        { san: "d6", rating: 3 },
        { san: "g5", rating: 3 },
        { san: "b5", rating: 2 },
        { san: "Na6", rating: 2 },
        { san: "Nh6", rating: 2 },
        { san: "a6", rating: 2 },
        { san: "a5", rating: 2 },
        { san: "f6", rating: 2 },
        { san: "h6", rating: 2 },
        { san: "h5", rating: 2 },
      ],
    },
    {
      line: "1.c4 e5",
      sources: [
        `${WIKIPEDIA}English_Opening`,
        "https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._c4",
      ],
    },
    {
      line: "1.c4 Nf6",
      sources: [
        `${WIKIPEDIA}English_Opening`,
        "https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._c4",
      ],
    },
    {
      line: "1.c4 c5",
      sources: [
        `${WIKIPEDIA}English_Opening`,
        "https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._c4",
      ],
    },
    { line: "1.c4 e6" },
    { line: "1.c4 c6" },
    { line: "1.c4 g6" },
    { line: "1.c4 Nc6" },
    { line: "1.c4 f5" },
    {
      line: "1.c4 d5",
      sources: [
        `${WIKIPEDIA}English_Opening`,
        "https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._c4",
      ],
    },
    { line: "1.c4 b6", sources: [`${WIKIPEDIA}English_Opening`, `${WIKIPEDIA}English_Defence`] },
    { line: "1.c4 d6" },
    { line: "1.c4 g5", sources: [`${WIKIPEDIA}English_Opening`] },
    {
      line: "1.c4 b5",
      sources: [
        `${WIKIPEDIA}English_Opening`,
        "https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._c4",
      ],
    },
    { line: "1.c4 Na6" },
    { line: "1.c4 Nh6" },
    { line: "1.c4 a6" },
    { line: "1.c4 a5" },
    { line: "1.c4 f6" },
    { line: "1.c4 h6" },
    { line: "1.c4 h5" },
  ],
  texts: { en, de },
};
