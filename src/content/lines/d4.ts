// After 1.d4 (Queen's Pawn Game): the replies, all rated, and the positions they
// reach that the book does not follow further. The replies it follows (rated 4 and 5) have
// their own modules in this folder.

import type { OpeningModule } from "../book.ts";
import { de } from "./d4.de.ts";
import { en } from "./d4.en.ts";

const WIKIPEDIA = "https://en.wikipedia.org/wiki/";

export const d4: OpeningModule = {
  positions: [
    {
      line: "1.d4",
      sources: [`${WIKIPEDIA}Queen%27s_Pawn_Game`],
      moves: [
        { san: "Nf6", rating: 5 },
        { san: "d5", rating: 5 },
        { san: "e6", rating: 4 },
        { san: "f5", rating: 4 },
        { san: "Nc6", rating: 3 },
        { san: "b6", rating: 3 },
        { san: "c6", rating: 3 },
        { san: "c5", rating: 3 },
        { san: "d6", rating: 3 },
        { san: "g6", rating: 3 },
        { san: "Na6", rating: 2 },
        { san: "Nh6", rating: 2 },
        { san: "a6", rating: 2 },
        { san: "a5", rating: 2 },
        { san: "b5", rating: 2 },
        { san: "e5", rating: 2 },
        { san: "f6", rating: 2 },
        { san: "h6", rating: 2 },
        { san: "h5", rating: 2 },
        { san: "g5", rating: 1 },
      ],
    },
    {
      line: "1.d4 Nc6",
      sources: [
        `${WIKIPEDIA}Bogoljubov%E2%80%93Mikenas_Defense`,
        `${WIKIPEDIA}Queen%27s_Pawn_Game`,
      ],
    },
    { line: "1.d4 Na6" },
    { line: "1.d4 Nh6" },
    { line: "1.d4 Nf6", sources: [`${WIKIPEDIA}Indian_Defence`] },
    { line: "1.d4 a6" },
    { line: "1.d4 a5" },
    { line: "1.d4 b6", sources: [`${WIKIPEDIA}English_Defence`] },
    { line: "1.d4 b5", sources: [`${WIKIPEDIA}Polish_Defense`] },
    { line: "1.d4 c6" },
    { line: "1.d4 c5", sources: [`${WIKIPEDIA}Benoni_Defense`] },
    { line: "1.d4 d6" },
    { line: "1.d4 d5", sources: [`${WIKIPEDIA}Closed_Game`, `${WIKIPEDIA}Queen%27s_Pawn_Game`] },
    { line: "1.d4 e6", sources: [`${WIKIPEDIA}Franco-Indian_Defence`] },
    { line: "1.d4 e5", sources: [`${WIKIPEDIA}Englund_Gambit`] },
    { line: "1.d4 f6" },
    { line: "1.d4 f5", sources: [`${WIKIPEDIA}Dutch_Defence`] },
    { line: "1.d4 g6" },
    { line: "1.d4 g5" },
    { line: "1.d4 h6" },
    { line: "1.d4 h5" },
  ],
  texts: { en, de },
};
