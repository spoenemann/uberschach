import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import { STARTING_FEN } from "../../domain/fen.ts";
import { parsePlacement } from "../../domain/position.ts";
import { Board } from "./Board.tsx";

const start = parsePlacement(STARTING_FEN);

// Without Vitest globals, Testing Library does not unmount between tests.
afterEach(cleanup);

function squares(container: HTMLElement) {
  return [...container.querySelectorAll<HTMLElement>("[data-square]")];
}

describe("Board", () => {
  test("renders 64 squares from a8 for white, with a1 dark", () => {
    const { container } = render(<Board placement={start} />);
    const all = squares(container);
    expect(all).toHaveLength(64);
    expect(all[0]?.dataset["square"]).toBe("a8");
    expect(all[63]?.dataset["square"]).toBe("h1");
    expect(all[63]?.dataset["color"]).toBe("light");
    expect(all[56]?.dataset["square"]).toBe("a1");
    expect(all[56]?.dataset["color"]).toBe("dark");
    expect(container.querySelectorAll("[data-piece]")).toHaveLength(32);
  });

  test("flips for black", () => {
    const { container } = render(
      <Board placement={start} orientation="black" />,
    );
    const all = squares(container);
    expect(all[0]?.dataset["square"]).toBe("h1");
    expect(all[63]?.dataset["square"]).toBe("a8");
    expect(container.textContent?.startsWith("12345678")).toBe(true);
    expect(container.textContent?.endsWith("hgfedcba")).toBe(true);
  });

  test("puts each piece on its square and names the position", () => {
    const { container } = render(<Board placement={start} />);
    const e1 = container.querySelector('[data-square="e1"] [data-piece]');
    expect(e1?.getAttribute("data-piece")).toBe("white-king");
    expect(e1?.getAttribute("aria-label")).toBe("white king");
    expect(
      container.querySelector('[data-square="b8"] [data-piece="black-knight"]'),
    ).not.toBeNull();
    expect(screen.getByRole("img", { name: /^Chessboard\./ }).getAttribute("aria-label")).toContain("White: king e1, queen d1");
  });

  test("marks highlighted squares", () => {
    const { container } = render(
      <Board placement={start} highlights={["e2", "e4"]} />,
    );
    expect(container.querySelectorAll("[data-highlight]")).toHaveLength(2);
    expect(
      container.querySelector('[data-square="e4"]')?.hasAttribute("data-highlight"),
    ).toBe(true);
    expect(
      container.querySelector('[data-square="d4"]')?.hasAttribute("data-highlight"),
    ).toBe(false);
  });
});
