import type { PieceType } from "../domain/position.ts";
import type { Language } from "./language.ts";

/** The pieces that have a letter in algebraic notation; the pawn has none. */
export type LetteredPiece = Exclude<PieceType, "pawn">;

type EnglishLetter = "K" | "Q" | "R" | "B" | "N";

const ENGLISH_LETTERS: Readonly<Record<LetteredPiece, EnglishLetter>> = {
  king: "K",
  queen: "Q",
  rook: "R",
  bishop: "B",
  knight: "N",
};

const TYPE_OF_ENGLISH_LETTER: Readonly<Record<EnglishLetter, LetteredPiece>> = {
  K: "king",
  Q: "queen",
  R: "rook",
  B: "bishop",
  N: "knight",
};

/** The piece letters per language (docs/product-specs/languages.md, Promises). */
export const PIECE_LETTERS: Readonly<
  Record<Language, Readonly<Record<LetteredPiece, string>>>
> = {
  en: ENGLISH_LETTERS,
  de: { king: "K", queen: "D", rook: "T", bishop: "L", knight: "S" },
};

export function pieceLetter(type: LetteredPiece, language: Language): string {
  return PIECE_LETTERS[language][type];
}

/**
 * A move or a sequence of moves in English algebraic notation, such as
 * "Bb5" or "1.e4 e5 2.Nf3", with the piece letters replaced by the
 * language's: "3.Bb5" reads "3.Lb5" in German. Files, ranks, captures,
 * checks, promotions and castling are the same in every language. Inside
 * the app notation is always English; this runs at display time only. It
 * replaces every capital K, Q, R, B and N, so it takes notation, never the
 * prose around it (docs/localization.md, Notation).
 */
export function localizeSan(san: string, language: Language): string {
  const letters = PIECE_LETTERS[language];
  return san.replace(
    /[KQRBN]/g,
    // The pattern admits only the five English letters.
    (english) => letters[TYPE_OF_ENGLISH_LETTER[english as EnglishLetter]],
  );
}
