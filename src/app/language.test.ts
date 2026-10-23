import { afterEach, expect, test, vi } from "vitest";
import { loadLanguage, saveLanguage } from "./language.ts";

function browserLanguages(languages: readonly string[]) {
  Object.defineProperty(navigator, "languages", {
    value: languages,
    configurable: true,
  });
}

afterEach(() => {
  localStorage.clear();
  Reflect.deleteProperty(navigator, "languages");
  vi.restoreAllMocks();
});

test("takes the browser's first supported language, else English", () => {
  browserLanguages(["de-DE", "en"]);
  expect(loadLanguage()).toBe("de");
  browserLanguages(["fr-FR", "en-GB"]);
  expect(loadLanguage()).toBe("en");
  browserLanguages(["fr"]);
  expect(loadLanguage()).toBe("en");
});

test("a stored choice wins; an unknown stored value is ignored", () => {
  browserLanguages(["en"]);
  saveLanguage("de");
  expect(localStorage.getItem("uberschach.language")).toBe("de");
  expect(loadLanguage()).toBe("de");
  localStorage.setItem("uberschach.language", "fr");
  expect(loadLanguage()).toBe("en");
});

test("works when storage is unavailable", () => {
  browserLanguages(["de"]);
  const blocked = () => {
    throw new Error("storage blocked");
  };
  vi.spyOn(Storage.prototype, "getItem").mockImplementation(blocked);
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(blocked);
  expect(() => saveLanguage("en")).not.toThrow();
  expect(loadLanguage()).toBe("de");
});
