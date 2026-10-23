// After 1.e4 c5 (Sicilian Defence): its moves, all rated, and the moves after each
// move rated 4 or 5, to the book's depth (docs/exec-plans/active/0002-opening-explorer.md,
// Decision log). Backgrounds were checked against the sources listed, read the day this
// module was written.

import type { OpeningModule } from "../book.ts";
import { de } from "./e4-c5.de.ts";
import { en } from "./e4-c5.en.ts";

const WIKIPEDIA = "https://en.wikipedia.org/wiki/";

export const e4C5: OpeningModule = {
  positions: [
    {
      line: "1.e4 c5",
      sources: [`${WIKIPEDIA}Sicilian_Defence`],
      moves: [
        { san: "Nf3", rating: 5 },
        { san: "c3", rating: 4 },
        { san: "Nc3", rating: 4 },
        { san: "b3", rating: 3 },
        { san: "d3", rating: 3 },
        { san: "d4", rating: 3 },
        { san: "f4", rating: 3 },
        { san: "g3", rating: 3 },
        { san: "Na3", rating: 3 },
        { san: "Ne2", rating: 3 },
        { san: "a3", rating: 2 },
        { san: "a4", rating: 2 },
        { san: "b4", rating: 2 },
        { san: "c4", rating: 2 },
        { san: "f3", rating: 2 },
        { san: "h3", rating: 2 },
        { san: "h4", rating: 2 },
        { san: "Qe2", rating: 2 },
        { san: "Qf3", rating: 2 },
        { san: "Qg4", rating: 2 },
        { san: "Qh5", rating: 2 },
        { san: "Be2", rating: 2 },
        { san: "Bd3", rating: 2 },
        { san: "Bc4", rating: 2 },
        { san: "Bb5", rating: 2 },
        { san: "Nh3", rating: 2 },
        { san: "e5", rating: 2 },
        { san: "g4", rating: 1 },
        { san: "Ke2", rating: 1 },
        { san: "Ba6", rating: 1 },
      ],
    },
    { line: "1.e4 c5 2.a3" },
    { line: "1.e4 c5 2.a4" },
    { line: "1.e4 c5 2.b3", sources: [`${WIKIPEDIA}Sicilian_Defence`] },
    { line: "1.e4 c5 2.b4", sources: [`${WIKIPEDIA}Sicilian_Defence`, `${WIKIPEDIA}Wing_Gambit`] },
    {
      line: "1.e4 c5 2.c3",
      sources: [`${WIKIPEDIA}Sicilian_Defence,_Alapin_Variation`, `${WIKIPEDIA}Sicilian_Defence`],
    },
    { line: "1.e4 c5 2.c4" },
    { line: "1.e4 c5 2.d3" },
    {
      line: "1.e4 c5 2.d4",
      sources: [`${WIKIPEDIA}Smith%E2%80%93Morra_Gambit`, `${WIKIPEDIA}Sicilian_Defence`],
    },
    { line: "1.e4 c5 2.f3" },
    {
      line: "1.e4 c5 2.f4",
      sources: [
        `${WIKIPEDIA}Sicilian_Defence`,
        "https://de.wikipedia.org/wiki/Sizilianische_Verteidigung",
      ],
    },
    { line: "1.e4 c5 2.g3", sources: [`${WIKIPEDIA}Sicilian_Defence`] },
    { line: "1.e4 c5 2.g4" },
    { line: "1.e4 c5 2.h3" },
    { line: "1.e4 c5 2.h4" },
    {
      line: "1.e4 c5 2.Nc3",
      sources: [
        `${WIKIPEDIA}Sicilian_Defence`,
        "https://de.wikipedia.org/wiki/Sizilianische_Verteidigung",
      ],
    },
    { line: "1.e4 c5 2.Na3", sources: [`${WIKIPEDIA}Sicilian_Defence`] },
    { line: "1.e4 c5 2.Qe2" },
    { line: "1.e4 c5 2.Qf3" },
    { line: "1.e4 c5 2.Qg4" },
    { line: "1.e4 c5 2.Qh5" },
    { line: "1.e4 c5 2.Ke2" },
    { line: "1.e4 c5 2.Be2" },
    { line: "1.e4 c5 2.Bd3" },
    { line: "1.e4 c5 2.Bc4", sources: [`${WIKIPEDIA}Sicilian_Defence`] },
    { line: "1.e4 c5 2.Bb5" },
    { line: "1.e4 c5 2.Ba6" },
    { line: "1.e4 c5 2.Nh3" },
    { line: "1.e4 c5 2.Nf3" },
    { line: "1.e4 c5 2.Ne2", sources: [`${WIKIPEDIA}Sicilian_Defence`] },
    { line: "1.e4 c5 2.e5" },
  ],
  texts: { en, de },
};
