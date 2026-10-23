// After 1.d4 Nf6 (Indian Defence): its moves, all rated, and the moves after each
// move rated 4 or 5, to the book's depth (docs/exec-plans/active/0002-opening-explorer.md,
// Decision log). Backgrounds were checked against the sources listed, read the day this
// module was written.

import type { OpeningModule } from "../book.ts";
import { de } from "./d4-Nf6.de.ts";
import { en } from "./d4-Nf6.en.ts";

const WIKIPEDIA = "https://en.wikipedia.org/wiki/";

export const d4Nf6: OpeningModule = {
  positions: [
    {
      line: "1.d4 Nf6",
      sources: [`${WIKIPEDIA}Indian_Defence`],
      moves: [
        { san: "c4", rating: 5 },
        { san: "Nf3", rating: 5 },
        { san: "Bg5", rating: 4 },
        { san: "Bf4", rating: 4 },
        { san: "Nc3", rating: 3 },
        { san: "g3", rating: 3 },
        { san: "e3", rating: 3 },
        { san: "c3", rating: 3 },
        { san: "b3", rating: 3 },
        { san: "d5", rating: 2 },
        { san: "e4", rating: 2 },
        { san: "f3", rating: 2 },
        { san: "f4", rating: 2 },
        { san: "g4", rating: 2 },
        { san: "b4", rating: 2 },
        { san: "a3", rating: 2 },
        { san: "a4", rating: 2 },
        { san: "h3", rating: 2 },
        { san: "h4", rating: 2 },
        { san: "Nd2", rating: 2 },
        { san: "Na3", rating: 2 },
        { san: "Nh3", rating: 2 },
        { san: "Bd2", rating: 2 },
        { san: "Be3", rating: 2 },
        { san: "Qd2", rating: 2 },
        { san: "Qd3", rating: 2 },
        { san: "Kd2", rating: 1 },
        { san: "Bh6", rating: 1 },
      ],
    },
    { line: "1.d4 Nf6 2.c4" },
    { line: "1.d4 Nf6 2.Nf3" },
    { line: "1.d4 Nf6 2.Bg5", sources: [`${WIKIPEDIA}Trompowsky_Attack`] },
    { line: "1.d4 Nf6 2.Bf4", sources: [`${WIKIPEDIA}London_System`] },
    { line: "1.d4 Nf6 2.Nc3" },
    { line: "1.d4 Nf6 2.g3" },
    { line: "1.d4 Nf6 2.e3" },
    { line: "1.d4 Nf6 2.c3" },
    { line: "1.d4 Nf6 2.b3" },
    { line: "1.d4 Nf6 2.d5" },
    {
      line: "1.d4 Nf6 2.f3",
      sources: ["https://en.wikibooks.org/wiki/Chess_Opening_Theory/1._d4/1...Nf6/2._f3"],
    },
    { line: "1.d4 Nf6 2.f4" },
    { line: "1.d4 Nf6 2.g4" },
    { line: "1.d4 Nf6 2.b4" },
    { line: "1.d4 Nf6 2.a3" },
    { line: "1.d4 Nf6 2.a4" },
    { line: "1.d4 Nf6 2.h3" },
    { line: "1.d4 Nf6 2.h4" },
    { line: "1.d4 Nf6 2.Nd2" },
    { line: "1.d4 Nf6 2.Na3" },
    { line: "1.d4 Nf6 2.Nh3" },
    { line: "1.d4 Nf6 2.Bd2" },
    { line: "1.d4 Nf6 2.Be3" },
    { line: "1.d4 Nf6 2.Qd2" },
    { line: "1.d4 Nf6 2.Qd3" },
    { line: "1.d4 Nf6 2.Kd2" },
    { line: "1.d4 Nf6 2.Bh6" },
  ],
  texts: { en, de },
};
