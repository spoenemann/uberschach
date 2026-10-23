import { useEffect, useMemo, useState } from "react";
import { newGame, play, type Game } from "../../domain/game.ts";
import { formatLine, playLine } from "../../domain/line.ts";
import { legalMoves, type Move } from "../../domain/moves.ts";
import type { Color, Square } from "../../domain/position.ts";
import { OPENINGS } from "../../content/openings.ts";
import { Board, type BoardArrow } from "../board/Board.tsx";
import styles from "./Explorer.module.css";
import { viewAt, type ExplorerView } from "./view.ts";
import { Line } from "./Line.tsx";
import { Panel } from "./Panel.tsx";

/**
 * Where the explorer stands, as the address carries it: the line in
 * English notation as formatLine writes it, the move the board shows (null
 * for the end of the line) and the side at the bottom
 * (docs/product-specs/opening-explorer.md, Reaching it).
 */
export interface ExplorerState {
  readonly line: string;
  readonly ply: number | null;
  readonly side: Color;
}

export interface ExplorerProps extends ExplorerState {
  /** The state after the visitor's action; the caller writes it to the address. */
  readonly onChange: (state: ExplorerState) => void;
}

/**
 * The opening explorer: the board with the line under it on the left, the
 * panel on the right, stacked at phone width. The visitor makes every
 * move; the state lives in the address, so the component holds only the
 * selected piece.
 */
export function Explorer({ line, ply, side, onChange }: ExplorerProps) {
  // An address whose moves are not all legal opens at the end of its legal prefix.
  const full = useMemo(() => playLine(newGame(), line, "en").game, [line]);
  const total = full.moves.length;
  const at = ply === null ? total : Math.min(Math.max(ply, 0), total);
  const view = useMemo(() => viewAt(full, at, OPENINGS), [full, at]);
  const { selected, select } = useSelection(`${line}@${at}`);
  const goTo = (next: number) => {
    onChange({ line: formatLine(full, "en"), ply: next === total ? null : next, side });
  };
  const playNow = (move: Move) => {
    const game = play(view.game, move);
    onChange({ line: formatLine(game, "en"), ply: null, side });
  };
  useArrowKeys(at, total, goTo);
  const position = view.game.position;
  const ongoing = view.status.kind === "ongoing";
  const targets = selected === undefined ? [] : legalMoves(position, selected).map((move) => move.to);
  const onSquareClick = (square: Square) => {
    if (!ongoing) return;
    const move = squareMove(position, selected, square);
    if (move !== undefined) {
      playNow(move);
      return;
    }
    const own = position.placement.get(square)?.color === position.turn;
    select(own && square !== selected ? square : undefined);
  };
  // While a piece is selected the arrows give way, so its targets stand alone.
  const arrows: BoardArrow[] =
    selected === undefined
      ? view.candidates.map(({ move }) => ({
          from: move.move.from,
          to: move.move.to,
          strength: move.rating === 5 ? "strong" : "light",
        }))
      : [];
  return (
    <div className={styles.explorer}>
      <div className={styles.boardColumn}>
        <Board
          placement={position.placement}
          orientation={side}
          highlights={highlightsOf(view, selected)}
          targets={targets}
          arrows={arrows}
          onSquareClick={onSquareClick}
          onArrowClick={(arrow) => playNow({ from: arrow.from, to: arrow.to, ...promotionFor(position, arrow) })}
        />
        <Line
          game={full}
          at={at}
          onJump={goTo}
          onFlip={() => onChange({ line, ply: at === total ? null : at, side: side === "white" ? "black" : "white" })}
        />
      </div>
      <Panel view={view} onPlay={playNow} />
    </div>
  );
}

/**
 * The selected square, dropped whenever the line or the move shown changes:
 * state reset on a changed key, as React documents it, rather than an
 * effect, so no render shows a stale selection.
 */
function useSelection(key: string) {
  const [selected, select] = useState<Square | undefined>(undefined);
  const [selectedKey, setSelectedKey] = useState(key);
  if (selectedKey !== key) {
    setSelectedKey(key);
    select(undefined);
  }
  return { selected, select };
}

/** The left and right arrow keys step back and forward. */
function useArrowKeys(at: number, total: number, goTo: (ply: number) => void) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === "ArrowLeft" && at > 0) goTo(at - 1);
      if (event.key === "ArrowRight" && at < total) goTo(at + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });
}

/** The legal move of the selected piece to the square, a pawn on the last rank becoming a queen. */
function squareMove(position: Game["position"], selected: Square | undefined, square: Square): Move | undefined {
  if (selected === undefined) return undefined;
  return legalMoves(position, selected).find(
    (move) => move.to === square && (move.promotion === undefined || move.promotion === "queen"),
  );
}

/** A candidate's promotion piece, when its pawn reaches the last rank: always a queen. */
function promotionFor(position: Game["position"], arrow: BoardArrow): Pick<Move, "promotion"> {
  const promotes = legalMoves(position, arrow.from).some(
    (move) => move.to === arrow.to && move.promotion !== undefined,
  );
  return promotes ? { promotion: "queen" } : {};
}

/** The last move's squares, and the selected square. */
function highlightsOf(view: ExplorerView, selected: Square | undefined): Square[] {
  const squares: Square[] = [];
  if (view.lastMove !== null) squares.push(view.lastMove.move.from, view.lastMove.move.to);
  if (selected !== undefined) squares.push(selected);
  return squares;
}
