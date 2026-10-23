// After 1.e4 e5 (Open Game): its moves, all rated, and the moves after each
// move rated 4 or 5, to the book's depth (docs/exec-plans/active/0002-opening-explorer.md,
// Decision log). Backgrounds were checked against the sources listed, read the day this
// module was written.

import type { OpeningModule } from "../book.ts";
import { de } from "./e4-e5.de.ts";
import { en } from "./e4-e5.en.ts";

const WIKIPEDIA = "https://en.wikipedia.org/wiki/";

export const e4E5: OpeningModule = {
  positions: [
    {
      line: "1.e4 e5",
      sources: [`${WIKIPEDIA}Open_Game`],
      moves: [
        { san: "Nf3", rating: 5 },
        { san: "Bc4", rating: 4 },
        { san: "Nc3", rating: 4 },
        { san: "f4", rating: 3 },
        { san: "d4", rating: 3 },
        { san: "d3", rating: 3 },
        { san: "Bb5", rating: 3 },
        { san: "Qh5", rating: 3 },
        { san: "Ne2", rating: 3 },
        { san: "a3", rating: 2 },
        { san: "a4", rating: 2 },
        { san: "b3", rating: 2 },
        { san: "c3", rating: 2 },
        { san: "c4", rating: 2 },
        { san: "f3", rating: 2 },
        { san: "g3", rating: 2 },
        { san: "h3", rating: 2 },
        { san: "Na3", rating: 2 },
        { san: "Qe2", rating: 2 },
        { san: "Qf3", rating: 2 },
        { san: "Qg4", rating: 2 },
        { san: "Be2", rating: 2 },
        { san: "Bd3", rating: 2 },
        { san: "Nh3", rating: 2 },
        { san: "h4", rating: 2 },
        { san: "b4", rating: 1 },
        { san: "g4", rating: 1 },
        { san: "Ke2", rating: 1 },
        { san: "Ba6", rating: 1 },
      ],
    },
    {
      line: "1.e4 e5 2.Nf3",
      sources: [`${WIKIPEDIA}King%27s_Knight_Opening`, `${WIKIPEDIA}Open_Game`],
    },
    { line: "1.e4 e5 2.Bc4", sources: [`${WIKIPEDIA}Bishop%27s_Opening`] },
    { line: "1.e4 e5 2.Nc3", sources: [`${WIKIPEDIA}Vienna_Game`] },
    { line: "1.e4 e5 2.f4", sources: [`${WIKIPEDIA}King%27s_Gambit`] },
    { line: "1.e4 e5 2.d4", sources: [`${WIKIPEDIA}Center_Game`] },
    { line: "1.e4 e5 2.d3" },
    { line: "1.e4 e5 2.Bb5" },
    { line: "1.e4 e5 2.Qh5", sources: [`${WIKIPEDIA}Danvers_Opening`] },
    { line: "1.e4 e5 2.Ne2", sources: [`${WIKIPEDIA}Alapin%27s_Opening`] },
    { line: "1.e4 e5 2.a3", sources: [`${WIKIPEDIA}Vienna_Game`] },
    { line: "1.e4 e5 2.a4" },
    { line: "1.e4 e5 2.b3" },
    { line: "1.e4 e5 2.c3" },
    { line: "1.e4 e5 2.c4" },
    { line: "1.e4 e5 2.f3" },
    { line: "1.e4 e5 2.g3" },
    { line: "1.e4 e5 2.h3" },
    { line: "1.e4 e5 2.Na3" },
    { line: "1.e4 e5 2.Qe2" },
    { line: "1.e4 e5 2.Qf3", sources: [`${WIKIPEDIA}Napoleon_Opening`] },
    { line: "1.e4 e5 2.Qg4" },
    { line: "1.e4 e5 2.Be2" },
    { line: "1.e4 e5 2.Bd3" },
    { line: "1.e4 e5 2.Nh3" },
    { line: "1.e4 e5 2.h4" },
    { line: "1.e4 e5 2.b4" },
    { line: "1.e4 e5 2.g4" },
    { line: "1.e4 e5 2.Ke2", sources: [`${WIKIPEDIA}Bongcloud_Attack`] },
    { line: "1.e4 e5 2.Ba6" },
  ],
  texts: { en, de },
};
