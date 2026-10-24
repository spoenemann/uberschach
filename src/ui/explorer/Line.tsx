import type { Game } from "../../domain/game.ts";
import { toSan, type NotationLanguage } from "../../domain/san.ts";
import { notationLanguage } from "../../i18n/notation.ts";
import { useLanguage, useT } from "../language/LanguageContext.ts";
import styles from "./Line.module.css";

export interface LineProps {
  /** The whole line, not only the part up to the current move. */
  readonly game: Game;
  /** How many of its moves the board shows. */
  readonly at: number;
  readonly onJump: (ply: number) => void;
  readonly onFlip: () => void;
}

/**
 * The moves played, as a move list with the current one marked, and the
 * controls under it: back, forward, reset, flip
 * (docs/product-specs/opening-explorer.md, The line).
 */
export function Line({ game, at, onJump, onFlip }: LineProps) {
  const t = useT();
  const { language } = useLanguage();
  const notation = notationLanguage(language);
  const total = game.moves.length;
  return (
    <div className={styles.line}>
      <ol className={styles.moves} aria-label={t("Moves played")}>
        {pairs(game).map(({ number, plies }) => (
          <li key={number} className={styles.pair}>
            <span className={styles.number}>{number}.</span>
            {plies.map((ply) => (
              <button
                key={ply}
                type="button"
                className={styles.move}
                aria-current={ply === at ? "true" : undefined}
                onClick={() => onJump(ply)}
              >
                {sanAt(game, ply, notation)}
              </button>
            ))}
          </li>
        ))}
      </ol>
      <div className={styles.controls}>
        <button type="button" className={styles.control} aria-label={t("Back")} disabled={at === 0} onClick={() => onJump(at - 1)}>
          <Chevron direction="back" />
        </button>
        <button type="button" className={styles.control} aria-label={t("Forward")} disabled={at === total} onClick={() => onJump(at + 1)}>
          <Chevron direction="forward" />
        </button>
        <button type="button" className={styles.control} disabled={at === 0} onClick={() => onJump(0)}>
          {t("Reset")}
        </button>
        <button type="button" className={styles.control} onClick={onFlip}>
          {t("Flip board")}
        </button>
      </div>
    </div>
  );
}

interface Pair {
  readonly number: number;
  /** The ply reached by White's move and, when played, by Black's. */
  readonly plies: readonly number[];
}

/** The moves grouped by move number, so the list wraps between full moves. */
function pairs(game: Game): Pair[] {
  const result: Pair[] = [];
  game.moves.forEach((_, index) => {
    const before = game.positions[index];
    if (before === undefined) return;
    const ply = index + 1;
    const last = result[result.length - 1];
    if (before.turn === "white" || last === undefined) {
      result.push({ number: before.fullmoveNumber, plies: [ply] });
    } else {
      result[result.length - 1] = { number: last.number, plies: [...last.plies, ply] };
    }
  });
  return result;
}

/** The move that reaches the ply, written in the notation. */
function sanAt(game: Game, ply: number, notation: NotationLanguage): string {
  const before = game.positions[ply - 1];
  const move = game.moves[ply - 1];
  if (before === undefined || move === undefined) return "";
  return toSan(before, move, notation);
}

/** Previous and next, the two icons the design system allows without a word. */
function Chevron({ direction }: { readonly direction: "back" | "forward" }) {
  return (
    <svg className={styles.icon} viewBox="0 0 20 20" aria-hidden="true">
      <path
        d={direction === "back" ? "M12 4 6 10l6 6" : "M8 4l6 6-6 6"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
