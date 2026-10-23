import type { MouseEvent } from "react";
import {
  FILES,
  RANKS,
  squareColor,
  type Color,
  type Placement,
  type Square,
} from "../../domain/position.ts";
import { isSquare } from "../../domain/fen.ts";
import { useT } from "../language/LanguageContext.ts";
import { arrowPath, type BoardArrow } from "./arrows.ts";
import styles from "./Board.module.css";
import { describeBoard } from "./describe.ts";
import { Piece } from "./Piece.tsx";

export type { ArrowStrength, BoardArrow } from "./arrows.ts";

export interface BoardProps {
  /** The pieces to show. */
  readonly placement: Placement;
  /** The colour whose side is at the bottom. */
  readonly orientation?: Color;
  /** Squares drawn with the highlight: the last move, the selected square. */
  readonly highlights?: readonly Square[];
  /** Squares marked as legal targets of the selected piece: a dot, a ring on a capture. */
  readonly targets?: readonly Square[];
  /** Candidate moves, drawn as arrows above the pieces. */
  readonly arrows?: readonly BoardArrow[];
  /** A pointer on a square. The board stays an image; the keyboard gets the candidate list. */
  readonly onSquareClick?: (square: Square) => void;
  /** A pointer on an arrow. */
  readonly onArrowClick?: (arrow: BoardArrow) => void;
  /** The pointer entering an arrow, and leaving it (undefined). */
  readonly onArrowHover?: (arrow: BoardArrow | undefined) => void;
}

/**
 * The board as a wooden object: 8 × 8 squares, coordinates outside
 * (docs/design-docs/design-system.md, Board). It fills the width of its
 * container. Pointer input is reported by square and by arrow; what a
 * click means is the caller's.
 */
export function Board({
  placement,
  orientation = "white",
  highlights = [],
  targets = [],
  arrows = [],
  onSquareClick,
  onArrowClick,
  onArrowHover,
}: BoardProps) {
  const t = useT();
  const files = orientation === "white" ? FILES : [...FILES].reverse();
  const ranks = orientation === "white" ? [...RANKS].reverse() : RANKS;
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as Element;
    const square = target.closest("[data-square]")?.getAttribute("data-square");
    if (square !== null && square !== undefined && isSquare(square)) onSquareClick?.(square);
  };
  return (
    <div
      className={styles.board}
      role="img"
      aria-label={describeBoard(placement, t)}
      data-orientation={orientation}
      data-interactive={onSquareClick === undefined ? undefined : ""}
    >
      <div className={styles.ranks}>
        {ranks.map((rank) => (
          <span key={rank}>{rank}</span>
        ))}
      </div>
      <div className={styles.squares} onClick={onSquareClick && handleClick}>
        {ranks.map((rank) =>
          files.map((file) => {
            const square: Square = `${file}${rank}`;
            const piece = placement.get(square);
            return (
              <div
                key={square}
                className={styles.square}
                data-square={square}
                data-color={squareColor(square)}
                data-highlight={highlights.includes(square) ? "" : undefined}
                data-target={targets.includes(square) ? (piece ? "capture" : "empty") : undefined}
              >
                {piece && <Piece piece={piece} />}
              </div>
            );
          }),
        )}
        {arrows.length > 0 && (
          <svg className={styles.arrows} viewBox="0 0 8 8" aria-hidden="true">
            {arrows.map((arrow) => (
              <path
                key={`${arrow.from}${arrow.to}`}
                className={styles.arrow}
                data-arrow={`${arrow.from}${arrow.to}`}
                data-strength={arrow.strength}
                data-highlighted={arrow.highlighted ? "" : undefined}
                d={arrowPath(arrow, orientation)}
                onClick={() => onArrowClick?.(arrow)}
                onPointerEnter={() => onArrowHover?.(arrow)}
                onPointerLeave={() => onArrowHover?.(undefined)}
              />
            ))}
          </svg>
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
