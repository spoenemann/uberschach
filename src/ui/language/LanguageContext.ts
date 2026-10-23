import { createContext, useContext, useMemo } from "react";
import { DEFAULT_LANGUAGE, type Language } from "../../i18n/language.ts";
import { translator, type Translate } from "../../i18n/translate.ts";

export interface LanguageState {
  readonly language: Language;
  readonly setLanguage: (language: Language) => void;
}

/**
 * The visitor's language, provided by src/app (which detects and stores it)
 * and read by components through useLanguage() and useT(). Without a
 * provider, components render in English.
 */
export const LanguageContext = createContext<LanguageState>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => undefined,
});

export function useLanguage(): LanguageState {
  return useContext(LanguageContext);
}

/**
 * The `t` of the visitor's language: `t(message, params)` with the English
 * text as the message (docs/localization.md, Writing text a visitor sees).
 */
export function useT(): Translate {
  const { language } = useLanguage();
  return useMemo(() => translator(language), [language]);
}
