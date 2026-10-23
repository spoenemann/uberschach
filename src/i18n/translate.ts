import { de } from "./de.ts";
import { DEFAULT_LANGUAGE, type Language } from "./language.ts";

/** English message → translation, placeholders kept (docs/localization.md). */
export type Catalogue = Readonly<Record<string, string>>;

export type Params = Readonly<Record<string, string | number>>;

export type Translate = (message: string, params?: Params) => string;

/** English is the source: its catalogue is empty and every message is itself. */
export const CATALOGUES: Readonly<Record<Language, Catalogue>> = { en: {}, de };

/**
 * The message in the catalogue's language, or the English text itself when
 * the catalogue has no entry, with each `{name}` replaced from `params`. A
 * placeholder without a value stays visible rather than vanishing.
 */
export function translate(
  catalogue: Catalogue,
  message: string,
  params?: Params,
): string {
  const text = catalogue[message] ?? message;
  if (params === undefined) return text;
  return text.replace(/\{(\w+)\}/g, (placeholder, name: string) => {
    const value = params[name];
    return value === undefined ? placeholder : String(value);
  });
}

/** A `t` for one language, for code outside React; components use `useT()`. */
export function translator(language: Language = DEFAULT_LANGUAGE): Translate {
  const catalogue = CATALOGUES[language];
  return (message, params) => translate(catalogue, message, params);
}

/**
 * Marks an English message that is stored and translated later, such as an
 * entry in a lookup table, so the catalogue check still finds it. Returns
 * the message unchanged.
 */
export function msg(message: string): string {
  return message;
}
