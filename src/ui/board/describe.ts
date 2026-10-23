import type {
  Color,
  Piece,
  PieceType,
  Placement,
  Square,
} from "../../domain/position.ts";
import { msg, type Translate } from "../../i18n/translate.ts";

const TYPE_ORDER: readonly PieceType[] = [
  "king",
  "queen",
  "rook",
  "bishop",
  "knight",
  "pawn",
];

// Stored messages, marked for the catalogue check (docs/localization.md).
const TYPE_NAMES: Readonly<Record<PieceType, string>> = {
  king: msg("king"),
  queen: msg("queen"),
  rook: msg("rook"),
  bishop: msg("bishop"),
  knight: msg("knight"),
  pawn: msg("pawn"),
};

const SIDES: Readonly<Record<Color, { some: string; none: string }>> = {
  white: { some: msg("White: {pieces}."), none: msg("White: none.") },
  black: { some: msg("Black: {pieces}."), none: msg("Black: none.") },
};

/**
 * The board's accessible name, in the visitor's language: "Chessboard.
 * White: king e1, queen d1. Black: king e8." Pieces are listed by colour,
 * then by type from king to pawn, then by square.
 */
export function describeBoard(placement: Placement, t: Translate): string {
  const sides = (["white", "black"] as const).map((color) => {
    const pieces = piecesOf(placement, color).map(
      ([square, piece]) => `${t(TYPE_NAMES[piece.type])} ${square}`,
    );
    return pieces.length === 0
      ? t(SIDES[color].none)
      : t(SIDES[color].some, { pieces: pieces.join(", ") });
  });
  return t("Chessboard. {position}", { position: sides.join(" ") });
}

function piecesOf(placement: Placement, color: Color): [Square, Piece][] {
  return [...placement]
    .filter(([, piece]) => piece.color === color)
    .sort(
      ([a, pa], [b, pb]) =>
        TYPE_ORDER.indexOf(pa.type) - TYPE_ORDER.indexOf(pb.type) ||
        a.localeCompare(b),
    );
}
