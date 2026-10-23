// After 1.Nf3 (Zukertort Opening): the replies, all rated, and the positions they
// reach that the book does not follow further. The replies it follows (rated 4 and 5) have
// their own modules in this folder.

import type { OpeningModule } from "../book.ts";
import { de } from "./Nf3.de.ts";
import { en } from "./Nf3.en.ts";

const WIKIPEDIA = "https://en.wikipedia.org/wiki/";

export const nf3: OpeningModule = {
  positions: [
    {
      line: "1.Nf3",
      sources: [
        `${WIKIPEDIA}Zukertort_Opening`,
        `${WIKIPEDIA}R%C3%A9ti_Opening`,
        `${WIKIPEDIA}Hypermodernism_(chess)`,
      ],
      moves: [
        { san: "Nf6", rating: 5 },
        { san: "d5", rating: 5 },
        { san: "c5", rating: 5 },
        { san: "e6", rating: 4 },
        { san: "g6", rating: 4 },
        { san: "f5", rating: 4 },
        { san: "c6", rating: 3 },
        { san: "d6", rating: 3 },
        { san: "b6", rating: 3 },
        { san: "Nc6", rating: 3 },
        { san: "a6", rating: 2 },
        { san: "a5", rating: 2 },
        { san: "b5", rating: 2 },
        { san: "Na6", rating: 2 },
        { san: "Nh6", rating: 2 },
        { san: "f6", rating: 2 },
        { san: "h6", rating: 2 },
        { san: "h5", rating: 2 },
        { san: "e5", rating: 1 },
        { san: "g5", rating: 1 },
      ],
    },
    { line: "1.Nf3 c6" },
    { line: "1.Nf3 d6" },
    { line: "1.Nf3 b6" },
    { line: "1.Nf3 Nc6" },
    { line: "1.Nf3 a6", sources: [`${WIKIPEDIA}St._George_Defence`] },
    { line: "1.Nf3 a5" },
    { line: "1.Nf3 b5" },
    { line: "1.Nf3 Na6" },
    { line: "1.Nf3 Nh6" },
    { line: "1.Nf3 f6" },
    { line: "1.Nf3 h6" },
    { line: "1.Nf3 h5" },
    { line: "1.Nf3 e5" },
    { line: "1.Nf3 g5" },
  ],
  texts: { en, de },
};
