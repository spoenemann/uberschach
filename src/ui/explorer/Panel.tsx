import { useId } from "react";
import type { DrawReason } from "../../domain/game.ts";
import { numberedSan } from "../../domain/line.ts";
import type { Move } from "../../domain/moves.ts";
import { textIn, type Rating } from "../../content/book.ts";
import { localizeSan, notationLanguage } from "../../i18n/notation.ts";
import { msg } from "../../i18n/translate.ts";
import { useLanguage, useT } from "../language/LanguageContext.ts";
import type { ExplorerView } from "./view.ts";
import styles from "./Panel.module.css";

export interface PanelProps {
  readonly view: ExplorerView;
  readonly onPlay: (move: Move) => void;
}

/**
 * What the visitor reads after a move: the move with its rating, the name
 * of where the line stands, the background and the strategic meaning;
 * then the candidates as the one list (docs/product-specs/opening-explorer.md,
 * After every move; Candidates).
 */
export function Panel({ view, onPlay }: PanelProps) {
  const t = useT();
  const { language } = useLanguage();
  const notation = notationLanguage(language);
  const { lastMove, entry, name, candidates } = view;
  const labelId = useId();
  return (
    <section className={styles.panel}>
      <div className={styles.reading} aria-live="polite">
        {lastMove !== null && (
          <p className={styles.move}>
            <span className={styles.san}>{numberedSan(lastMove.before, lastMove.move, notation)}</span>
            {lastMove.book !== undefined && <RatingWord rating={lastMove.book.rating} />}
          </p>
        )}
        {name !== undefined && <h2>{textIn(name, language)}</h2>}
        {entry?.background !== undefined && <p>{textIn(entry.background, language)}</p>}
        {lastMove?.book !== undefined && <p>{textIn(lastMove.book.strategy, language)}</p>}
        <Notes view={view} />
      </div>
      {candidates.length > 0 && (
        <div className={styles.next}>
          <p id={labelId} className={styles.label}>
            {t("Next moves")}
          </p>
          <ul className={styles.candidates} aria-labelledby={labelId}>
            {candidates.map(({ move, leadsTo }) => (
              <li key={move.san}>
                <button type="button" className={styles.candidate} onClick={() => onPlay(move.move)}>
                  <span className={styles.san}>{localizeSan(move.san, language)}</span>
                  <span className={styles.leadsTo}>{leadsTo === undefined ? "" : textIn(leadsTo, language)}</span>
                  <RatingWord rating={move.rating} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

const RATING_WORDS: Readonly<Record<Rating, string>> = {
  5: msg("Best"),
  4: msg("Good"),
  3: msg("Playable"),
  2: msg("Inaccuracy"),
  1: msg("Mistake"),
};

/** The rating as a word and a colour; the word is always there. */
function RatingWord({ rating }: { readonly rating: Rating }) {
  const t = useT();
  return (
    <span className={styles.rating} data-rating={rating}>
      {t(RATING_WORDS[rating])}
    </span>
  );
}

const END_WORDS: Readonly<Record<DrawReason, string>> = {
  stalemate: msg("Stalemate. The game is drawn."),
  "dead-position": msg("Dead position: no checkmate is possible. The game is drawn."),
  "fivefold-repetition": msg("The same position five times. The game is drawn."),
  "seventy-five-moves": msg("Seventy-five moves without a capture or a pawn move. The game is drawn."),
};

/** Where the information stops: the game has ended, the book has, or the line has left it. */
function Notes({ view }: { readonly view: ExplorerView }) {
  const t = useT();
  const { status, entry, lastMove } = view;
  if (status.kind === "checkmate") {
    return (
      <p className={styles.note}>
        {status.winner === "white" ? t("Checkmate. White wins.") : t("Checkmate. Black wins.")}
      </p>
    );
  }
  if (status.kind === "draw") return <p className={styles.note}>{t(END_WORDS[status.reason])}</p>;
  if (entry === undefined && lastMove !== null) {
    return <p className={styles.note}>{t("The line has left the openings the app knows.")}</p>;
  }
  if (entry !== undefined && entry.moves.length === 0) {
    return <p className={styles.note}>{t("The book ends here.")}</p>;
  }
  return null;
}
