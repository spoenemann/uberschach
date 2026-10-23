import type { Piece as PieceModel } from "../../domain/position.ts";
import styles from "./Piece.module.css";
import { LINE_WIDTH, OUTLINE_WIDTH, PIECE_DRAWINGS } from "./pieceShapes.ts";

/** One piece, filling its container (docs/design-docs/design-system.md, Pieces). */
export function Piece({ piece }: { readonly piece: PieceModel }) {
  const drawing = PIECE_DRAWINGS[piece.type];
  return (
    <svg
      className={styles.piece}
      viewBox="0 0 100 100"
      role="img"
      aria-label={`${piece.color} ${piece.type}`}
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
