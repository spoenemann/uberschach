import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, test, vi } from "vitest";
import { LanguageContext } from "./LanguageContext.ts";
import { LanguageSwitch } from "./LanguageSwitch.tsx";

// Without Vitest globals, Testing Library does not unmount between tests.
afterEach(cleanup);

test("names each language in itself, marks the current one and reports a choice", () => {
  const setLanguage = vi.fn();
  render(
    <LanguageContext value={{ language: "de", setLanguage }}>
      <LanguageSwitch />
    </LanguageContext>,
  );
  expect(screen.getByRole("group", { name: "Sprache" })).not.toBeNull();
  const english = screen.getByRole("button", { name: "English" });
  const german = screen.getByRole("button", { name: "Deutsch" });
  expect(english.getAttribute("lang")).toBe("en");
  expect(german.getAttribute("lang")).toBe("de");
  expect(german.getAttribute("aria-pressed")).toBe("true");
  expect(english.getAttribute("aria-pressed")).toBe("false");
  fireEvent.click(english);
  expect(setLanguage).toHaveBeenCalledWith("en");
});

test("renders in English without a provider", () => {
  render(<LanguageSwitch />);
  expect(screen.getByRole("group", { name: "Language" })).not.toBeNull();
  expect(
    screen.getByRole("button", { name: "English" }).getAttribute("aria-pressed"),
  ).toBe("true");
});
