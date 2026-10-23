import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
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

  test("marks targets as a dot on an empty square and a ring on a piece", () => {
    const { container } = render(<Board placement={start} targets={["e4", "e7"]} />);
    expect(container.querySelector('[data-square="e4"]')?.getAttribute("data-target")).toBe("empty");
    expect(container.querySelector('[data-square="e7"]')?.getAttribute("data-target")).toBe("capture");
    expect(container.querySelectorAll("[data-target]")).toHaveLength(2);
  });

  test("reports the square under a click, through the piece on it", () => {
    const onSquareClick = vi.fn();
    const { container } = render(<Board placement={start} onSquareClick={onSquareClick} />);
    const pieceOnE2 = container.querySelector('[data-square="e2"] [data-piece]');
    fireEvent.click(pieceOnE2 as Element);
    fireEvent.click(container.querySelector('[data-square="e4"]') as Element);
    expect(onSquareClick.mock.calls).toEqual([["e2"], ["e4"]]);
    expect(screen.getByRole("img", { name: /^Chessboard\./ }).hasAttribute("data-interactive")).toBe(true);
  });

  test("draws arrows above the pieces, by strength, and reports a click on one", () => {
    const onArrowClick = vi.fn();
    const onSquareClick = vi.fn();
    const arrows = [
      { from: "e2", to: "e4", strength: "strong" },
      { from: "g2", to: "g3", strength: "light" },
    ] as const;
    const { container } = render(
      <Board placement={start} arrows={arrows} onArrowClick={onArrowClick} onSquareClick={onSquareClick} />,
    );
    const drawn = container.querySelectorAll("[data-arrow]");
    expect(drawn).toHaveLength(2);
    expect(container.querySelector('[data-arrow="e2e4"]')?.getAttribute("data-strength")).toBe("strong");
    expect(container.querySelector('[data-arrow="g2g3"]')?.getAttribute("data-strength")).toBe("light");
    expect(container.querySelector("svg[aria-hidden]")).not.toBeNull();
    fireEvent.click(container.querySelector('[data-arrow="g2g3"]') as Element);
    expect(onArrowClick).toHaveBeenCalledWith(arrows[1]);
    // The overlay is not a square: a click on an arrow is not a click on a square.
    expect(onSquareClick).not.toHaveBeenCalled();
  });

  test("draws no overlay without arrows and is not interactive without a handler", () => {
    const { container } = render(<Board placement={start} />);
    expect(container.querySelector("svg[aria-hidden]")).toBeNull();
    expect(screen.getByRole("img", { name: /^Chessboard\./ }).hasAttribute("data-interactive")).toBe(false);
  });
});
