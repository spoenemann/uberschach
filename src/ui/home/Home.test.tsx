import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import { LanguageContext } from "../language/LanguageContext.ts";
import { Home } from "./Home.tsx";

afterEach(cleanup);

test("shows one card per capability, a link with its name and one sentence", () => {
  render(<Home />);
  const card = screen.getByRole("link", { name: /Opening explorer/ });
  expect(card.getAttribute("href")).toBe("#/openings");
  expect(screen.getByRole("heading", { level: 2 }).textContent).toBe("Opening explorer");
  expect(screen.getAllByRole("link")).toHaveLength(1);
  expect(card.textContent).toMatch(/Play through an opening/);
});

test("speaks German", () => {
  render(
    <LanguageContext value={{ language: "de", setLanguage: () => undefined }}>
      <Home />
    </LanguageContext>,
  );
  expect(screen.getByRole("link", { name: /Eröffnungs-Explorer/ })).not.toBeNull();
});
