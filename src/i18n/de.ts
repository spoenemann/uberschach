import type { Catalogue } from "./translate.ts";

// German. Each key is the English text exactly as written in the code,
// placeholders kept. src/i18n/catalogue.test.ts fails npm run check on a
// missing or stale entry (docs/localization.md, The German catalogue).
export const de: Catalogue = {
  // The welcome page
  "Nothing to train yet. This is the Ruy Lopez after {move}, shown to look at the board.":
    "Noch nichts zu trainieren. Das ist die Spanische Partie nach {move}, gezeigt, um das Brett anzuschauen.",

  // The language switch
  Language: "Sprache",

  // The board's accessible name
  "Chessboard. {position}": "Schachbrett. {position}",
  "White: {pieces}.": "Weiß: {pieces}.",
  "Black: {pieces}.": "Schwarz: {pieces}.",
  "White: none.": "Weiß: keine.",
  "Black: none.": "Schwarz: keine.",
  king: "König",
  queen: "Dame",
  rook: "Turm",
  bishop: "Läufer",
  knight: "Springer",
  pawn: "Bauer",

  // The pieces' accessible names: the adjective declines with the noun
  "white king": "weißer König",
  "white queen": "weiße Dame",
  "white rook": "weißer Turm",
  "white bishop": "weißer Läufer",
  "white knight": "weißer Springer",
  "white pawn": "weißer Bauer",
  "black king": "schwarzer König",
  "black queen": "schwarze Dame",
  "black rook": "schwarzer Turm",
  "black bishop": "schwarzer Läufer",
  "black knight": "schwarzer Springer",
  "black pawn": "schwarzer Bauer",
};
