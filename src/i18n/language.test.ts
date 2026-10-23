import { describe, expect, test } from "vitest";
import {
  DEFAULT_LANGUAGE,
  isLanguage,
  LANGUAGE_NAMES,
  pickLanguage,
  SUPPORTED_LANGUAGES,
} from "./language.ts";

describe("pickLanguage", () => {
  test("takes the first supported language by primary subtag", () => {
    expect(pickLanguage(["de-AT", "en"])).toBe("de");
    expect(pickLanguage(["fr-FR", "EN-US", "de"])).toBe("en");
  });

  test("falls back to English", () => {
    expect(pickLanguage(["fr", "it"])).toBe("en");
    expect(pickLanguage([])).toBe("en");
    expect(DEFAULT_LANGUAGE).toBe("en");
  });
});

describe("the language list", () => {
  test("knows its languages and nothing else", () => {
    expect(isLanguage("de")).toBe(true);
    expect(isLanguage("en")).toBe(true);
    expect(isLanguage("fr")).toBe(false);
    expect(isLanguage(undefined)).toBe(false);
  });

  test("names every language in itself", () => {
    expect(Object.keys(LANGUAGE_NAMES).sort()).toEqual(
      [...SUPPORTED_LANGUAGES].sort(),
    );
    expect(LANGUAGE_NAMES.de).toBe("Deutsch");
  });
});
