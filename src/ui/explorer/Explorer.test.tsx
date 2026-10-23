// The explorer screen against docs/product-specs/opening-explorer.md: Making
// moves, After every move, Candidates, The line. The state lives in the
// address, so the component is rendered controlled, re-rendered with
// whatever it reports.
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { useState } from "react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { LanguageContext } from "../language/LanguageContext.ts";
import { Explorer, type ExplorerState } from "./Explorer.tsx";

afterEach(cleanup);

/** The explorer with its state held as the app holds it, each change recorded. */
function Harness({ initial, record }: { initial: ExplorerState; record: (state: ExplorerState) => void }) {
  const [state, setState] = useState(initial);
  return (
    <Explorer
      {...state}
      onChange={(next) => {
        record(next);
        setState(next);
      }}
    />
  );
}

function renderExplorer(initial: Partial<ExplorerState> = {}, language: "en" | "de" = "en") {
  const record = vi.fn<(state: ExplorerState) => void>();
  const state: ExplorerState = { line: "", ply: null, side: "white", ...initial };
  const result = render(
    <LanguageContext value={{ language, setLanguage: () => undefined }}>
      <Harness initial={state} record={record} />
    </LanguageContext>,
  );
  return { ...result, record, last: () => record.mock.lastCall?.[0] };
}

function square(container: HTMLElement, name: string): Element {
  const element = container.querySelector(`[data-square="${name}"]`);
  if (element === null) throw new Error(`no square ${name}`);
  return element;
}

describe("the opening explorer", () => {
  test("opens at the initial position with the introduction and the first moves as candidates and arrows", () => {
    const { container } = renderExplorer();
    expect(screen.getByText(/^Twenty moves are legal/)).not.toBeNull();
    const list = screen.getByRole("list", { name: "Next moves" });
    const names = within(list).getAllByRole("button").map((b) => b.textContent);
    expect(names).toEqual([
      "e4King's Pawn GameBest",
      "d4Queen's Pawn GameBest",
      "Nf3Zukertort OpeningBest",
      "c4English OpeningBest",
      "g3King's Fianchetto OpeningGood",
      "b3Nimzowitsch–Larsen AttackGood",
    ]);
    expect(container.querySelectorAll('[data-arrow][data-strength="strong"]')).toHaveLength(4);
    expect(container.querySelectorAll('[data-arrow][data-strength="light"]')).toHaveLength(2);
    expect(screen.getByRole("img", { name: /^Chessboard/ }).getAttribute("data-orientation")).toBe("white");
  });

  test("plays a move by selecting the piece and then the square, marking the targets in between", () => {
    const { container, last } = renderExplorer();
    fireEvent.click(square(container, "e2"));
    expect(square(container, "e2").hasAttribute("data-highlight")).toBe(true);
    expect(square(container, "e3").getAttribute("data-target")).toBe("empty");
    expect(square(container, "e4").getAttribute("data-target")).toBe("empty");
    expect(container.querySelectorAll("[data-target]")).toHaveLength(2);
    fireEvent.click(square(container, "e4"));
    expect(last()).toEqual({ line: "1.e4", ply: null, side: "white" });
    expect(screen.getByText("1.e4")).not.toBeNull();
    expect(screen.getByText("Best")).not.toBeNull();
    expect(screen.getByRole("heading", { level: 2 }).textContent).toBe("King's Pawn Game");
    expect(screen.getByText(/best by test/)).not.toBeNull();
    expect(screen.getByText(/^Occupies a central square/)).not.toBeNull();
    expect(square(container, "e2").hasAttribute("data-highlight")).toBe(true);
    expect(square(container, "e4").hasAttribute("data-highlight")).toBe(true);
    expect(container.querySelectorAll("[data-target]")).toHaveLength(0);
  });

  test("moves the selection to another own piece, clears it on the same piece or an unmarked square, ignores the opponent", () => {
    const { container, record } = renderExplorer();
    fireEvent.click(square(container, "e2"));
    fireEvent.click(square(container, "g1"));
    expect(square(container, "g1").hasAttribute("data-highlight")).toBe(true);
    expect(square(container, "e2").hasAttribute("data-highlight")).toBe(false);
    expect(square(container, "f3").getAttribute("data-target")).toBe("empty");
    fireEvent.click(square(container, "g1"));
    expect(container.querySelectorAll("[data-highlight]")).toHaveLength(0);
    fireEvent.click(square(container, "e2"));
    fireEvent.click(square(container, "e5"));
    expect(container.querySelectorAll("[data-highlight]")).toHaveLength(0);
    fireEvent.click(square(container, "e7"));
    expect(container.querySelectorAll("[data-highlight]")).toHaveLength(0);
    expect(record).not.toHaveBeenCalled();
  });

  test("plays a candidate from the list and from its arrow", () => {
    const { container, last } = renderExplorer();
    fireEvent.click(screen.getByRole("button", { name: /^d4/ }));
    expect(last()?.line).toBe("1.d4");
    cleanup();
    const second = renderExplorer();
    fireEvent.click(second.container.querySelector('[data-arrow="g1f3"]') as Element);
    expect(second.last()?.line).toBe("1.Nf3");
    expect(container).toBeDefined();
  });

  test("any legal move is accepted, rated when the book rates it, unrated and off the book otherwise", () => {
    const { container } = renderExplorer();
    fireEvent.click(square(container, "g2"));
    fireEvent.click(square(container, "g4"));
    expect(screen.getByText("1.g4")).not.toBeNull();
    expect(screen.getByText("Mistake")).not.toBeNull();
    expect(screen.getByRole("heading", { level: 2 }).textContent).toBe("Grob's Attack");
    expect(screen.getByText("The book ends here.")).not.toBeNull();
    expect(screen.queryByRole("list", { name: "Next moves" })).toBeNull();
    fireEvent.click(square(container, "e7"));
    fireEvent.click(square(container, "e5"));
    expect(screen.getByText("1...e5")).not.toBeNull();
    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
    expect(screen.getByText("The line has left the openings the app knows.")).not.toBeNull();
    expect(container.querySelectorAll("[data-arrow]")).toHaveLength(0);
  });

  test("shows the line with the current move marked, steps back and forward without discarding it, and resets", () => {
    const { container, last } = renderExplorer({ line: "1.e4 e5 2.Nf3" });
    const moves = within(screen.getByRole("list", { name: "Moves played" })).getAllByRole("button");
    expect(moves.map((m) => m.textContent)).toEqual(["e4", "e5", "Nf3"]);
    expect(moves[2]?.getAttribute("aria-current")).toBe("true");
    expect(screen.getByText("2.Nf3")).not.toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Back" }));
    expect(last()).toEqual({ line: "1.e4 e5 2.Nf3", ply: 2, side: "white" });
    expect(screen.getByText("1...e5")).not.toBeNull();
    expect(square(container, "g1").querySelector("[data-piece]")).not.toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Forward" }));
    expect(last()).toEqual({ line: "1.e4 e5 2.Nf3", ply: null, side: "white" });
    expect(screen.getByRole<HTMLButtonElement>("button", { name: "Forward" }).disabled).toBe(true);
    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect(last()).toEqual({ line: "1.e4 e5 2.Nf3", ply: 0, side: "white" });
    expect(screen.getByText(/^Twenty moves are legal/)).not.toBeNull();
    expect(screen.getByRole<HTMLButtonElement>("button", { name: "Back" }).disabled).toBe(true);
    expect(screen.getByRole<HTMLButtonElement>("button", { name: "Reset" }).disabled).toBe(true);
    fireEvent.click(within(screen.getByRole("list", { name: "Moves played" })).getByRole("button", { name: "e5" }));
    expect(last()?.ply).toBe(2);
  });

  test("the arrow keys step back and forward", () => {
    const { last } = renderExplorer({ line: "1.e4 e5", ply: 1 });
    fireEvent.keyDown(window, { key: "ArrowLeft" });
    expect(last()?.ply).toBe(0);
    fireEvent.keyDown(window, { key: "ArrowLeft" });
    expect(last()?.ply).toBe(0);
    fireEvent.keyDown(window, { key: "ArrowRight" });
    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(last()?.ply).toBeNull();
    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(last()?.ply).toBeNull();
  });

  test("a move made before the end of the line replaces what came after", () => {
    const { container, last } = renderExplorer({ line: "1.e4 e5 2.Nf3", ply: 1 });
    fireEvent.click(square(container, "c7"));
    fireEvent.click(square(container, "c5"));
    expect(last()).toEqual({ line: "1.e4 c5", ply: null, side: "white" });
  });

  test("flips the board and keeps the line and the move shown", () => {
    const { last } = renderExplorer({ line: "1.e4 e5", ply: 1 });
    fireEvent.click(screen.getByRole("button", { name: "Flip board" }));
    expect(last()).toEqual({ line: "1.e4 e5", ply: 1, side: "black" });
    expect(screen.getByRole("img", { name: /^Chessboard/ }).getAttribute("data-orientation")).toBe("black");
  });

  test("an address whose moves are not all legal opens at the end of its legal prefix", () => {
    renderExplorer({ line: "1.e4 e5 2.Ke2 Ke7 3.Qh5" });
    const moves = within(screen.getByRole("list", { name: "Moves played" })).getAllByRole("button");
    expect(moves.map((m) => m.textContent)).toEqual(["e4", "e5", "Ke2", "Ke7"]);
    expect(moves[3]?.getAttribute("aria-current")).toBe("true");
  });

  test("a ply beyond the line shows its end", () => {
    renderExplorer({ line: "1.e4", ply: 7 });
    expect(screen.getByText("1.e4")).not.toBeNull();
  });

  test("says when the game ends and accepts no further move, while stepping back still works", () => {
    const { container, record, last } = renderExplorer({ line: "1.f3 e5 2.g4 Qh4#" });
    expect(screen.getByText("Checkmate. Black wins.")).not.toBeNull();
    fireEvent.click(square(container, "e2"));
    expect(container.querySelectorAll("[data-highlight]")).toHaveLength(2);
    expect(record).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole("button", { name: "Back" }));
    expect(last()?.ply).toBe(3);
  });

  test("a pawn reaching the last rank becomes a queen", () => {
    const { container, last } = renderExplorer({ line: "1.d4 e5 2.dxe5 f6 3.exf6 Nc6 4.fxg7 Nf6" });
    fireEvent.click(square(container, "g7"));
    expect(square(container, "h8").getAttribute("data-target")).toBe("capture");
    fireEvent.click(square(container, "h8"));
    expect(last()?.line).toBe("1.d4 e5 2.dxe5 f6 3.exf6 Nc6 4.fxg7 Nf6 5.gxh8=Q");
  });

  test("writes notation in the visitor's language, and the address in English", () => {
    const { last } = renderExplorer({ line: "1.Nf3" }, "de");
    expect(screen.getByText("1.Sf3")).not.toBeNull();
    expect(screen.getByText("Bester Zug")).not.toBeNull();
    expect(screen.getByText("Das Buch endet hier.")).not.toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Zurück" }));
    expect(last()).toEqual({ line: "1.Nf3", ply: 0, side: "white" });
    const list = screen.getByRole("list", { name: "Nächste Züge" });
    fireEvent.click(within(list).getByRole("button", { name: /^Sf3/ }));
    expect(last()).toEqual({ line: "1.Nf3", ply: null, side: "white" });
  });
});
