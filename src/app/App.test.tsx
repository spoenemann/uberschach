import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { App } from "./App.tsx";

test("renders the page with the sample board", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe(
    "uberschach",
  );
  const board = screen.getByRole("img", { name: /^Chessboard\./ });
  expect(board.querySelectorAll("[data-square]")).toHaveLength(64);
  expect(board.querySelector('[data-square="b5"] [data-piece="white-bishop"]')).not.toBeNull();
});
