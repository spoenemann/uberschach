import { LANGUAGE_NAMES, SUPPORTED_LANGUAGES } from "../../i18n/language.ts";
import { useLanguage, useT } from "./LanguageContext.ts";
import styles from "./LanguageSwitch.module.css";

/**
 * The language switch in the site footer: one button per language, named in
 * that language and marked with it, the current one pressed
 * (docs/product-specs/languages.md).
 */
export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const t = useT();
  return (
    <div className={styles.switch} role="group" aria-label={t("Language")}>
      {SUPPORTED_LANGUAGES.map((candidate) => (
        <button
          key={candidate}
          type="button"
          lang={candidate}
          aria-pressed={candidate === language}
          onClick={() => setLanguage(candidate)}
        >
          {LANGUAGE_NAMES[candidate]}
        </button>
      ))}
    </div>
  );
}
