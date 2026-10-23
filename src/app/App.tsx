import { useCallback, useEffect, useMemo, useState } from "react";
import type { Language } from "../i18n/language.ts";
import { Explorer, type ExplorerState } from "../ui/explorer/Explorer.tsx";
import { Home } from "../ui/home/Home.tsx";
import {
  LanguageContext,
  useLanguage,
  useT,
} from "../ui/language/LanguageContext.ts";
import { LanguageSwitch } from "../ui/language/LanguageSwitch.tsx";
import styles from "./App.module.css";
import { loadLanguage, saveLanguage } from "./language.ts";
import { formatRoute, parseRoute, type Route } from "./route.ts";

export function App() {
  const [language, setLanguage] = useState<Language>(loadLanguage);
  const chooseLanguage = useCallback((chosen: Language) => {
    setLanguage(chosen);
    saveLanguage(chosen);
  }, []);
  // The document's language follows the visitor's, for screen readers and
  // hyphenation (docs/localization.md).
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const state = useMemo(
    () => ({ language, setLanguage: chooseLanguage }),
    [language, chooseLanguage],
  );
  return (
    <LanguageContext value={state}>
      <Screen />
    </LanguageContext>
  );
}

/** The page frame around the route's screen: header, screen, footer. */
function Screen() {
  const t = useT();
  const { language } = useLanguage();
  const { route, replaceRoute } = useRoute();
  const title = route.screen === "openings" ? t("Opening explorer") : null;
  useEffect(() => {
    document.title = title === null ? "Uberschach" : `${title} · Uberschach`;
  }, [title, language]);
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.wordmark}>
          <a href="#/">uberschach</a>
        </h1>
        {title !== null && <span className={styles.screen}>{title}</span>}
      </header>
      <main className={styles.main}>
        {route.screen === "openings" ? (
          <Explorer
            line={route.line}
            ply={route.ply}
            side={route.side}
            onChange={(next: ExplorerState) => replaceRoute({ screen: "openings", ...next })}
          />
        ) : (
          <Home />
        )}
      </main>
      <footer className={styles.footer}>
        <LanguageSwitch />
      </footer>
    </div>
  );
}

/**
 * The route, read from the hash and kept in step with it. A link changes
 * the hash and so the route; the explorer replaces the address as its line
 * changes, so the browser's back button returns to the entry page rather
 * than undoing a move (docs/product-specs/opening-explorer.md, Reaching it).
 */
function useRoute() {
  const [route, setRoute] = useState<Route>(() => parseRoute(location.hash));
  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute(location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  const replaceRoute = useCallback((next: Route) => {
    history.replaceState(null, "", formatRoute(next));
    setRoute(next);
  }, []);
  return { route, replaceRoute };
}
