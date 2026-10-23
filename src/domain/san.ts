// Standard Algebraic Notation: one move as text, written and read, in the
// piece letters of a notation language. The written form is the PGN export
// format's (section 8.2.3): piece letter, disambiguation, "x", square,
// "=Q", "O-O", "+" and "#". Each language supplies its letters, as FIDE
// Appendix C.3 allows. Legality is the rules engine's: a move is written
// only when it is legal and read only against the legal moves
// (docs/design-docs/chess-notation.md).

import { applyMove, isCastling, isEnPassantCapture, type Move } from "./apply.ts";
import { isInCheck } from "./attacks.ts";
import { isSquare } from "./fen.ts";
import { legalMoves, validateMove } from "./moves.ts";
import type { CastlingSide, Piece, PieceType, Position, Square } from "./position.ts";

/** The notation languages: which letters a reader expects for the pieces. */
export const NOTATION_LANGUAGES = ["en", "de"] as const;

export type NotationLanguage = (typeof NOTATION_LANGUAGES)[number];

/** The pieces that have a letter in algebraic notation; the pawn has none. */
export type LetteredPiece = Exclude<PieceType, "pawn">;

export const LETTERED_PIECES: readonly LetteredPiece[] = [
  "king",
  "queen",
  "rook",
  "bishop",
  "knight",
];

/**
 * The piece letters per notation language: capital Latin letters, as FIDE
 * Appendix C.2 gives them for English and C.3 allows for other languages.
 * A new language is a row here.
 */
export const PIECE_LETTERS: Readonly<
  Record<NotationLanguage, Readonly<Record<LetteredPiece, string>>>
> = {
  en: { king: "K", queen: "Q", rook: "R", bishop: "B", knight: "N" },
  de: { king: "K", queen: "D", rook: "T", bishop: "L", knight: "S" },
};

export function pieceLetter(type: LetteredPiece, language: NotationLanguage): string {
  return PIECE_LETTERS[language][type];
}

/** The piece the letter stands for in the language; undefined for any other text. */
export function pieceOfLetter(
  letter: string,
  language: NotationLanguage,
): LetteredPiece | undefined {
  return LETTERED_PIECES.find((type) => PIECE_LETTERS[language][type] === letter);
}

/** A regular expression class matching one piece letter of the language. */
function letterClass(language: NotationLanguage): string {
  return `[${LETTERED_PIECES.map((type) => PIECE_LETTERS[language][type]).join("")}]`;
}

/**
 * Notation text with the piece letters of one language replaced by
 * another's: "3.Bb5" in English is "3.Lb5" in German. Needs no position, so
 * it serves stored text. It replaces every capital letter of `from`, so it
 * takes notation only, never the prose around it.
 */
export function translateSan(
  text: string,
  from: NotationLanguage,
  to: NotationLanguage,
): string {
  if (from === to) return text;
  const letters = new Map(
    LETTERED_PIECES.map((type) => [PIECE_LETTERS[from][type], PIECE_LETTERS[to][type]]),
  );
  return text.replace(new RegExp(letterClass(from), "g"), (letter) => letters.get(letter) ?? letter);
}

/**
 * The move written in the language, as the PGN export format writes it.
 * Throws with the reason for a move that is not legal in the position.
 */
export function toSan(position: Position, move: Move, language: NotationLanguage): string {
  const piece = position.placement.get(move.from);
  if (piece === undefined) throw illegal(move, "empty-square");
  const validation = validateMove(position, move);
  if (!validation.ok) throw illegal(move, validation.reason);
  const legal = validation.move;
  const body =
    piece.type === "pawn"
      ? pawnSan(position, piece, legal, language)
      : (castlingSan(piece, legal) ?? pieceSan(position, legal, piece.type, language));
  return body + checkSuffix(applyMove(position, legal));
}

function illegal(move: Move, reason: string): Error {
  return new Error(`Illegal move ${move.from}${move.to}${move.promotion ?? ""}: ${reason}`);
}

/** 8.2.3.3: the capturing pawn's file and "x", the square, "=" and the promotion piece. */
function pawnSan(position: Position, piece: Piece, move: Move, language: NotationLanguage): string {
  const captures = position.placement.has(move.to) || isEnPassantCapture(position, piece, move);
  const capture = captures ? `${move.from.charAt(0)}x` : "";
  const promotion = move.promotion === undefined ? "" : `=${pieceLetter(move.promotion, language)}`;
  return `${capture}${move.to}${promotion}`;
}

/** 8.2.3.3: castling is "O-O" or "O-O-O", with the letter O. */
function castlingSan(piece: Piece, move: Move): string | undefined {
  const side = isCastling(piece, move);
  if (side === undefined) return undefined;
  return side === "kingSide" ? "O-O" : "O-O-O";
}

function pieceSan(
  position: Position,
  move: Move,
  type: LetteredPiece,
  language: NotationLanguage,
): string {
  const capture = position.placement.has(move.to) ? "x" : "";
  return `${pieceLetter(type, language)}${disambiguation(position, move, type)}${capture}${move.to}`;
}

/**
 * 8.2.3.4: when another piece of the same type can legally move to the same
 * square, the originating file if it tells them apart, else the rank, else
 * the square. A pinned piece cannot move there and so does not count.
 */
function disambiguation(position: Position, move: Move, type: LetteredPiece): string {
  const others = legalMoves(position).filter(
    (other) =>
      other.to === move.to &&
      other.from !== move.from &&
      position.placement.get(other.from)?.type === type,
  );
  if (others.length === 0) return "";
  const file = move.from.charAt(0);
  const rank = move.from.charAt(1);
  if (!others.some((other) => other.from.charAt(0) === file)) return file;
  if (!others.some((other) => other.from.charAt(1) === rank)) return rank;
  return move.from;
}

/** 8.2.3.5: "+" for check, "#" for checkmate, judged in the position after the move. */
function checkSuffix(after: Position): string {
  if (!isInCheck(after)) return "";
  return legalMoves(after).length === 0 ? "#" : "+";
}

export type SanFailure =
  /** Not the shape of a move in this language; a letter of another language counts as such. */
  | "malformed"
  /** Well-formed, but no legal move in the position matches. */
  | "no-such-move"
  /** More than one legal move matches: the text lacks the disambiguation. */
  | "ambiguous"
  /** The pawn reaches the last rank and the text does not say which piece it becomes. */
  | "promotion-required";

export type SanResult =
  | { readonly ok: true; readonly move: Move }
  | { readonly ok: false; readonly reason: SanFailure };

/** What the text says about the move, before the legal moves are consulted. */
interface Reading {
  readonly type: PieceType;
  readonly fromFile: string | undefined;
  readonly fromRank: string | undefined;
  readonly to: Square;
  /** The promotion piece's letter, when written. */
  readonly promotion: string | undefined;
}

/**
 * One move in the language, read against the legal moves of the position.
 * The decorations the export format and common usage add are accepted and
 * not verified: a capture sign ("x" or ":"), "+", "#", "!" and "?", so
 * "Bxb5" resolves like "Bb5"; "0-0" reads as castling and "e8Q" as "e8=Q";
 * an originating file or rank is honoured even when not needed. Whitespace
 * around the text is ignored. The text is one move, never a line.
 */
export function parseSan(position: Position, text: string, language: NotationLanguage): SanResult {
  const groups = sanPattern(language).exec(text.trim())?.groups;
  if (groups === undefined) return { ok: false, reason: "malformed" };
  if (groups.castling !== undefined) {
    return pick(castlingMoves(position, groups.castling));
  }
  const reading = readGroups(groups, language);
  if (reading === undefined) return { ok: false, reason: "malformed" };
  const matches = legalMoves(position).filter((move) => fits(position, move, reading));
  if (reading.promotion === undefined) {
    const plain = matches.filter((move) => move.promotion === undefined);
    if (plain.length === 0 && matches.length > 0) {
      return { ok: false, reason: "promotion-required" };
    }
    return pick(plain);
  }
  const promotion = pieceOfLetter(reading.promotion, language);
  return pick(matches.filter((move) => move.promotion === promotion));
}

/**
 * Castling: "O-O" or "O-O-O", the O also a zero or lower case. A move: an
 * optional piece letter of the language, an optional originating file and
 * rank, an optional capture sign, the square, an optional promotion. Then
 * any of "+", "#", "!" and "?".
 */
function sanPattern(language: NotationLanguage): RegExp {
  const letter = letterClass(language);
  return new RegExp(
    "^(?:(?<castling>[Oo0]-[Oo0](?:-[Oo0])?)" +
      `|(?<piece>${letter})?(?<fromFile>[a-h])?(?<fromRank>[1-8])?[x:]?(?<to>[a-h][1-8])(?:=?(?<promotion>${letter}))?` +
      ")[+#!?]*$",
  );
}

function readGroups(
  groups: Record<string, string | undefined>,
  language: NotationLanguage,
): Reading | undefined {
  const { to, piece } = groups;
  const type = piece === undefined ? "pawn" : pieceOfLetter(piece, language);
  // The pattern admits only squares and the language's letters; this narrows the types.
  if (to === undefined || !isSquare(to) || type === undefined) return undefined;
  return {
    type,
    fromFile: groups.fromFile,
    fromRank: groups.fromRank,
    to,
    promotion: groups.promotion,
  };
}

/**
 * Whether the legal move is one the reading describes. A pawn move without
 * an originating file is a plain advance, so "d5" never means "exd5".
 */
function fits(position: Position, move: Move, reading: Reading): boolean {
  if (move.to !== reading.to) return false;
  if (position.placement.get(move.from)?.type !== reading.type) return false;
  if (reading.fromFile !== undefined && move.from.charAt(0) !== reading.fromFile) return false;
  if (reading.fromRank !== undefined && move.from.charAt(1) !== reading.fromRank) return false;
  const pawnAdvance = reading.type === "pawn" && reading.fromFile === undefined;
  return !pawnAdvance || move.from.charAt(0) === move.to.charAt(0);
}

function castlingMoves(position: Position, text: string): Move[] {
  // "O-O-O" is five characters, "O-O" three.
  const side: CastlingSide = text.length > 3 ? "queenSide" : "kingSide";
  return legalMoves(position).filter((move) => {
    const piece = position.placement.get(move.from);
    return piece !== undefined && isCastling(piece, move) === side;
  });
}

function pick(matches: readonly Move[]): SanResult {
  const [move, second] = matches;
  if (move === undefined) return { ok: false, reason: "no-such-move" };
  if (second !== undefined) return { ok: false, reason: "ambiguous" };
  return { ok: true, move };
}
