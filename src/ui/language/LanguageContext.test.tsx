import { renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { expect, test } from "vitest";
import { LanguageContext, useLanguage, useT } from "./LanguageContext.ts";

function german({ children }: { children: ReactNode }) {
  return (
    <LanguageContext value={{ language: "de", setLanguage: () => undefined }}>
      {children}
    </LanguageContext>
  );
}

test("useT translates in the provided language and falls back to English", () => {
  const { result } = renderHook(() => useT(), { wrapper: german });
  expect(result.current("Language")).toBe("Sprache");
  expect(result.current("Not in any catalogue")).toBe("Not in any catalogue");
});

test("without a provider the language is English", () => {
  expect(renderHook(() => useLanguage()).result.current.language).toBe("en");
  expect(renderHook(() => useT()).result.current("Language")).toBe("Language");
});
