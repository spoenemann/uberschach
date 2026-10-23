import {
  describePosition,
  FILES,
  RANKS,
  squareColor,
  type Color,
  type Position,
  type Square,
} from "../../domain/position.ts";
import styles from "./Board.module.css";
import { Piece } from "./Piece.tsx";

export interface BoardProps {
  readonly position: Position;
  /** The colour whose side is at the bottom. */
  readonly orientation?: Color;
  /** Squares drawn with the highlight: the last move, the selected square. */
  readonly highlights?: readonly Square[];
}

/**
 * The board as a wooden object: 8 × 8 squares, coordinates outside
 * (docs/design-docs/design-system.md, Board). Display only; it fills the
 * width of its container.
 */
export function Board({
  position,
  orientation = "white",
  highlights = [],
}: BoardProps) {
  const files = orientation === "white" ? FILES : [...FILES].reverse();
  const ranks = orientation === "white" ? [...RANKS].reverse() : RANKS;
  return (
    <div
      className={styles.board}
      role="img"
      aria-label={`Chessboard. ${describePosition(position)}`}
      data-orientation={orientation}
    >
      <div className={styles.ranks}>
        {ranks.map((rank) => (
          <span key={rank}>{rank}</span>
        ))}
      </div>
      <div className={styles.squares}>
        {ranks.map((rank) =>
          files.map((file) => {
            const square: Square = `${file}${rank}`;
            const piece = position.get(square);
            return (
              <div
                key={square}
                className={styles.square}
                data-square={square}
                data-color={squareColor(square)}
                data-highlight={highlights.includes(square) ? "" : undefined}
              >
                {piece && <Piece piece={piece} />}
              </div>
            );
          }),
        )}
      </div>
      <div className={styles.files}>
        {files.map((file) => (
          <span key={file}>{file}</span>
        ))}
      </div>
    </div>
  );
}
