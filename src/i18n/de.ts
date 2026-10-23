import type { Catalogue } from "./translate.ts";

// German. Each key is the English text exactly as written in the code,
// placeholders kept. src/i18n/catalogue.test.ts fails npm run check on a
// missing or stale entry (docs/localization.md, The German catalogue).
export const de: Catalogue = {
  // The entry page and the header
  "Opening explorer": "Eröffnungsforscher",
  "Play through an opening for both sides and read after every move why it is played, what it aims for and which replies matter.":
    "Spiele eine Eröffnung für beide Seiten durch und lies nach jedem Zug, warum er gespielt wird, was er anstrebt und welche Antworten zählen.",

  // The explorer: the line and its controls
  "Moves played": "Gespielte Züge",
  Back: "Zurück",
  Forward: "Vor",
  Reset: "Zurücksetzen",
  "Flip board": "Brett drehen",

  // The explorer: the panel
  "Next moves": "Nächste Züge",
  Best: "Bester Zug",
  Good: "Gut",
  Playable: "Spielbar",
  Inaccuracy: "Ungenauigkeit",
  Mistake: "Fehler",
  "The line has left the openings the app knows.":
    "Die Zugfolge hat die Eröffnungen verlassen, die die App kennt.",
  "The book ends here.": "Das Buch endet hier.",
  "Checkmate. White wins.": "Schachmatt. Weiß gewinnt.",
  "Checkmate. Black wins.": "Schachmatt. Schwarz gewinnt.",
  "Stalemate. The game is drawn.": "Patt. Die Partie ist remis.",
  "Dead position: no checkmate is possible. The game is drawn.":
    "Tote Stellung: kein Matt ist mehr möglich. Die Partie ist remis.",
  "The same position five times. The game is drawn.":
    "Dieselbe Stellung zum fünften Mal. Die Partie ist remis.",
  "Seventy-five moves without a capture or a pawn move. The game is drawn.":
    "Fünfundsiebzig Züge ohne Schlagen und ohne Bauernzug. Die Partie ist remis.",

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
