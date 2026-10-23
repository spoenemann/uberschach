import type {
  Color,
  Piece as PieceModel,
  PieceType,
} from "../../domain/position.ts";
import { msg } from "../../i18n/translate.ts";
import { useT } from "../language/LanguageContext.ts";
import styles from "./Piece.module.css";
import { LINE_WIDTH, OUTLINE_WIDTH, PIECE_DRAWINGS } from "./pieceShapes.ts";

// Twelve messages rather than a colour word and a piece word: German declines
// the adjective with the noun ("weißer König", "weiße Dame"), so the two
// cannot be translated apart (docs/localization.md).
const PIECE_NAMES: Readonly<Record<Color, Readonly<Record<PieceType, string>>>> =
  {
    white: {
      king: msg("white king"),
      queen: msg("white queen"),
      rook: msg("white rook"),
      bishop: msg("white bishop"),
      knight: msg("white knight"),
      pawn: msg("white pawn"),
    },
    black: {
      king: msg("black king"),
      queen: msg("black queen"),
      rook: msg("black rook"),
      bishop: msg("black bishop"),
      knight: msg("black knight"),
      pawn: msg("black pawn"),
    },
  };

/** One piece, filling its container (docs/design-docs/design-system.md, Pieces). */
export function Piece({ piece }: { readonly piece: PieceModel }) {
  const t = useT();
  const drawing = PIECE_DRAWINGS[piece.type];
  return (
    <svg
      className={styles.piece}
      viewBox="0 0 100 100"
      role="img"
      aria-label={t(PIECE_NAMES[piece.color][piece.type])}
      data-piece={`${piece.color}-${piece.type}`}
      data-color={piece.color}
    >
      <g className={styles.parts} strokeWidth={OUTLINE_WIDTH}>
        {drawing.parts.map((d, index) => (
          <path key={index} d={d} />
        ))}
      </g>
      <path className={styles.lines} strokeWidth={LINE_WIDTH} d={drawing.lines} />
    </svg>
  );
}
