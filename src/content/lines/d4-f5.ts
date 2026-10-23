// After 1.d4 f5 (Dutch Defence): its moves, all rated, and the moves after each
// move rated 4 or 5, to the book's depth (docs/exec-plans/active/0002-opening-explorer.md,
// Decision log). Backgrounds were checked against the sources listed, read the day this
// module was written.

import type { OpeningModule } from "../book.ts";
import { de } from "./d4-f5.de.ts";
import { en } from "./d4-f5.en.ts";

const WIKIPEDIA = "https://en.wikipedia.org/wiki/";

export const d4F5: OpeningModule = {
  positions: [
    {
      line: "1.d4 f5",
      sources: [`${WIKIPEDIA}Dutch_Defence`],
      moves: [
        { san: "c4", rating: 5 },
        { san: "g3", rating: 5 },
        { san: "Nf3", rating: 5 },
        { san: "Nc3", rating: 4 },
        { san: "b3", rating: 3 },
        { san: "e3", rating: 3 },
        { san: "e4", rating: 3 },
        { san: "h3", rating: 3 },
        { san: "Bf4", rating: 3 },
        { san: "Bg5", rating: 3 },
        { san: "Nh3", rating: 3 },
        { san: "a3", rating: 2 },
        { san: "a4", rating: 2 },
        { san: "b4", rating: 2 },
        { san: "c3", rating: 2 },
        { san: "f3", rating: 2 },
        { san: "f4", rating: 2 },
        { san: "g4", rating: 2 },
        { san: "h4", rating: 2 },
        { san: "Nd2", rating: 2 },
        { san: "Na3", rating: 2 },
        { san: "Bd2", rating: 2 },
        { san: "Be3", rating: 2 },
        { san: "Qd2", rating: 2 },
        { san: "Qd3", rating: 2 },
        { san: "d5", rating: 2 },
        { san: "Bh6", rating: 1 },
        { san: "Kd2", rating: 1 },
      ],
    },
    { line: "1.d4 f5 2.a3" },
    { line: "1.d4 f5 2.a4" },
    { line: "1.d4 f5 2.b3" },
    { line: "1.d4 f5 2.b4" },
    { line: "1.d4 f5 2.c3" },
    { line: "1.d4 f5 2.c4" },
    { line: "1.d4 f5 2.e3" },
    { line: "1.d4 f5 2.e4", sources: [`${WIKIPEDIA}Staunton_Gambit`, `${WIKIPEDIA}Dutch_Defence`] },
    { line: "1.d4 f5 2.f3" },
    { line: "1.d4 f5 2.f4" },
    { line: "1.d4 f5 2.g3", sources: [`${WIKIPEDIA}Dutch_Defence`] },
    { line: "1.d4 f5 2.g4", sources: [`${WIKIPEDIA}Josef_Krejcik`, `${WIKIPEDIA}Dutch_Defence`] },
    { line: "1.d4 f5 2.h3", sources: [`${WIKIPEDIA}Dutch_Defence`] },
    { line: "1.d4 f5 2.h4" },
    { line: "1.d4 f5 2.Nc3" },
    { line: "1.d4 f5 2.Nd2" },
    { line: "1.d4 f5 2.Na3" },
    { line: "1.d4 f5 2.Bd2" },
    { line: "1.d4 f5 2.Be3" },
    { line: "1.d4 f5 2.Bf4", sources: [`${WIKIPEDIA}London_System`, `${WIKIPEDIA}Dutch_Defence`] },
    { line: "1.d4 f5 2.Bg5" },
    { line: "1.d4 f5 2.Bh6" },
    { line: "1.d4 f5 2.Qd2" },
    { line: "1.d4 f5 2.Qd3", sources: [`${WIKIPEDIA}Semyon_Alapin`] },
    { line: "1.d4 f5 2.Kd2" },
    { line: "1.d4 f5 2.Nh3" },
    { line: "1.d4 f5 2.Nf3" },
    { line: "1.d4 f5 2.d5" },
  ],
  texts: { en, de },
};
