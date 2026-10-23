// Which notation each of the app's languages reads. The notation itself,
// the letters and the writing and reading of moves, is the domain's
// (src/domain/san.ts, docs/design-docs/chess-notation.md); this maps a
// Language to a NotationLanguage (docs/localization.md, Notation).

import {
  PIECE_LETTERS,
  translateSan,
  type LetteredPiece,
  type NotationLanguage,
} from "../domain/san.ts";
import type { Language } from "./language.ts";

/** The notation each language reads. A new language names its notation here. */
export const NOTATION_OF: Readonly<Record<Language, NotationLanguage>> = {
  en: "en",
  de: "de",
};

export function notationLanguage(language: Language): NotationLanguage {
  return NOTATION_OF[language];
}

export function pieceLetter(type: LetteredPiece, language: Language): string {
  return PIECE_LETTERS[notationLanguage(language)][type];
}

/**
 * English notation text, such as "Bb5" or "1.e4 e5 2.Nf3", in the language's
 * piece letters: "3.Bb5" reads "3.Lb5" in German. Inside the app stored
 * notation is English; this runs at display time only, on notation, never
 * on the prose around it (docs/localization.md, Notation). A move shown
 * from a position is written in the language directly instead, with the
 * domain's toSan and notationLanguage.
 */
export function localizeSan(san: string, language: Language): string {
  return translateSan(san, "en", notationLanguage(language));
}
