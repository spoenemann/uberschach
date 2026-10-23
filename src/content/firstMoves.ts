// The first move: the initial position with all twenty legal moves, rated,
// and the twenty positions they reach, each with its name and background
// (firstMoves.en.ts, firstMoves.de.ts). Only moves rated 4 and 5 are
// followed further; the others end the book where they land
// (docs/product-specs/opening-explorer.md, The database). The ratings are the
// maintainer's, settled on 2026-10-23; the backgrounds were checked against
// the sources listed, read the same day.

import { de } from "./firstMoves.de.ts";
import { en } from "./firstMoves.en.ts";
import type { OpeningModule } from "./book.ts";

const WIKIPEDIA = "https://en.wikipedia.org/wiki/";

export const firstMoves: OpeningModule = {
  positions: [
    {
      line: "",
      sources: [`${WIKIPEDIA}Zukertort_Opening`, `${WIKIPEDIA}King%27s_Fianchetto_Opening`],
      moves: [
        { san: "e4", rating: 5 },
        { san: "d4", rating: 5 },
        { san: "Nf3", rating: 5 },
        { san: "c4", rating: 5 },
        { san: "g3", rating: 4 },
        { san: "b3", rating: 4 },
        { san: "f4", rating: 3 },
        { san: "Nc3", rating: 3 },
        { san: "b4", rating: 2 },
        { san: "e3", rating: 2 },
        { san: "d3", rating: 2 },
        { san: "c3", rating: 2 },
        { san: "a3", rating: 2 },
        { san: "h3", rating: 2 },
        { san: "g4", rating: 1 },
        { san: "f3", rating: 1 },
        { san: "h4", rating: 1 },
        { san: "a4", rating: 1 },
        { san: "Na3", rating: 1 },
        { san: "Nh3", rating: 1 },
      ],
    },
    { line: "1.e4", sources: [`${WIKIPEDIA}King%27s_Pawn_Game`] },
    { line: "1.d4", sources: [`${WIKIPEDIA}Queen%27s_Pawn_Game`] },
    {
      line: "1.Nf3",
      sources: [
        `${WIKIPEDIA}Zukertort_Opening`,
        `${WIKIPEDIA}R%C3%A9ti_Opening`,
        `${WIKIPEDIA}Hypermodernism_(chess)`,
      ],
    },
    { line: "1.c4", sources: [`${WIKIPEDIA}English_Opening`] },
    { line: "1.g3", sources: [`${WIKIPEDIA}King%27s_Fianchetto_Opening`] },
    { line: "1.b3", sources: [`${WIKIPEDIA}Nimzowitsch%E2%80%93Larsen_Attack`] },
    { line: "1.f4", sources: [`${WIKIPEDIA}Bird%27s_Opening`] },
    { line: "1.Nc3", sources: [`${WIKIPEDIA}Dunst_Opening`] },
    { line: "1.b4", sources: [`${WIKIPEDIA}Sokolsky_Opening`] },
    { line: "1.e3", sources: [`${WIKIPEDIA}Van_%27t_Kruijs_Opening`] },
    { line: "1.d3", sources: [`${WIKIPEDIA}Mieses_Opening`] },
    { line: "1.c3", sources: [`${WIKIPEDIA}Saragossa_Opening`] },
    { line: "1.a3", sources: [`${WIKIPEDIA}Anderssen%27s_Opening`] },
    { line: "1.h3", sources: [`${WIKIPEDIA}Clemenz_Opening`] },
    { line: "1.g4", sources: [`${WIKIPEDIA}Grob%27s_Attack`] },
    { line: "1.f3", sources: [`${WIKIPEDIA}Barnes_Opening`] },
    { line: "1.h4", sources: [`${WIKIPEDIA}Desprez_Opening`] },
    { line: "1.a4", sources: [`${WIKIPEDIA}Ware_Opening`, `${WIKIPEDIA}King%27s_Pawn_Game`] },
    { line: "1.Na3", sources: [`${WIKIPEDIA}Durkin_Opening`] },
    { line: "1.Nh3", sources: [`${WIKIPEDIA}Amar_Opening`] },
  ],
  texts: { en, de },
};
