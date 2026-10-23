// The languages the app speaks (docs/product-specs/languages.md). English is
// the source language: text is written in English in the code, and the other
// languages are catalogues keyed by it (docs/localization.md).

export const SUPPORTED_LANGUAGES = ["en", "de"] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = "en";

/** Each language named in itself, for the switch; deliberately not translated. */
export const LANGUAGE_NAMES: Readonly<Record<Language, string>> = {
  en: "English",
  de: "Deutsch",
};

export function isLanguage(value: unknown): value is Language {
  return (SUPPORTED_LANGUAGES as readonly unknown[]).includes(value);
}

/**
 * The first supported language in a list of BCP 47 tags in order of
 * preference, such as `navigator.languages`, matched by primary subtag
 * ("de-AT" is German); English when none is supported.
 */
export function pickLanguage(preferred: readonly string[]): Language {
  for (const tag of preferred) {
    const primary = tag.toLowerCase().split("-")[0];
    if (isLanguage(primary)) return primary;
  }
  return DEFAULT_LANGUAGE;
}
