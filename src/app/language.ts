import { isLanguage, pickLanguage, type Language } from "../i18n/language.ts";

// Which language the visitor gets, and remembering their choice
// (docs/localization.md, What a visitor gets). Only src/app reads the
// browser and its storage (docs/ARCHITECTURE.md, Invariants).

const STORAGE_KEY = "uberschach.language";

/**
 * The stored choice if there is one, else the browser's first supported
 * language, else English.
 */
export function loadLanguage(): Language {
  const stored = readStored();
  return isLanguage(stored) ? stored : pickLanguage(navigator.languages);
}

/** Remembers an explicit choice for later visits. */
export function saveLanguage(language: Language): void {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // Storage blocked or full (private mode, quota): the choice lasts for
    // this page load only.
  }
}

function readStored(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}
