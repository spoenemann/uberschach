import { useCallback, useEffect, useMemo, useState } from "react";
import { parsePlacement } from "../domain/position.ts";
import type { Language } from "../i18n/language.ts";
import { localizeSan } from "../i18n/notation.ts";
import { Board } from "../ui/board/Board.tsx";
import {
  LanguageContext,
  useLanguage,
  useT,
} from "../ui/language/LanguageContext.ts";
import { LanguageSwitch } from "../ui/language/LanguageSwitch.tsx";
import styles from "./App.module.css";
import { loadLanguage, saveLanguage } from "./language.ts";

// A sample position to look at the board and the pieces in dev mode: the Ruy
// Lopez after 3.Bb5, the bishop's move highlighted. The first capability (the
// opening explainer) is not yet specified; see
// docs/product-specs/product-brief.md, Open questions.
const SAMPLE_PLACEMENT = parsePlacement(
  "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
);

export function App() {
  const [language, setLanguage] = useState<Language>(loadLanguage);
  const chooseLanguage = useCallback((chosen: Language) => {
    setLanguage(chosen);
    saveLanguage(chosen);
  }, []);
  // The document's language follows the visitor's, for screen readers and
  // hyphenation (docs/product-specs/languages.md).
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const state = useMemo(
    () => ({ language, setLanguage: chooseLanguage }),
    [language, chooseLanguage],
  );
  return (
    <LanguageContext value={state}>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>uberschach</h1>
          <Welcome />
        </main>
        <footer className={styles.footer}>
          <LanguageSwitch />
        </footer>
      </div>
    </LanguageContext>
  );
}

function Welcome() {
  const t = useT();
  const { language } = useLanguage();
  return (
    <div className={styles.sample}>
      <Board placement={SAMPLE_PLACEMENT} highlights={["f1", "b5"]} />
      <p>
        {t(
          "Nothing to train yet. This is the Ruy Lopez after {move}, shown to look at the board.",
          { move: localizeSan("3.Bb5", language) },
        )}
      </p>
    </div>
  );
}
