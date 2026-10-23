import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, test } from "vitest";
import { App } from "./App.tsx";

beforeEach(() => localStorage.clear());
// Without Vitest globals, Testing Library does not unmount between tests.
afterEach(cleanup);

test("renders the page with the sample board", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
    "uberschach",
  );
  const board = screen.getByRole("img", { name: /^Chessboard\./ });
  expect(board.querySelectorAll("[data-square]")).toHaveLength(64);
  expect(board.querySelector('[data-square="b5"] [data-piece="white-bishop"]')).not.toBeNull();
  expect(screen.getByText(/after 3\.Bb5/)).not.toBeNull();
});

test("switches to German from the footer, remembers it and marks the document", () => {
  render(<App />);
  expect(document.documentElement.lang).toBe("en");
  fireEvent.click(screen.getByRole("button", { name: "Deutsch" }));
  expect(screen.getByText(/Spanische Partie nach 3\.Lb5/)).not.toBeNull();
  expect(screen.getByRole("img", { name: /^Schachbrett\./ })).not.toBeNull();
  expect(document.documentElement.lang).toBe("de");
  expect(localStorage.getItem("uberschach.language")).toBe("de");
  expect(
    screen.getByRole("button", { name: "Deutsch" }).getAttribute("aria-pressed"),
  ).toBe("true");
});

test("starts in the stored language", () => {
  localStorage.setItem("uberschach.language", "de");
  render(<App />);
  expect(screen.getByRole("group", { name: "Sprache" })).not.toBeNull();
  expect(document.documentElement.lang).toBe("de");
});
