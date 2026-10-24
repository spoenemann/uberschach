// The explorer screen against docs/product-specs/opening-explorer.md: Making
// moves, After every move, Candidates, The line. The state lives in the
// address, so the component is rendered controlled, re-rendered with
// whatever it reports. The book is loaded as the app loads it, chunk by chunk
// from a source, here one that answers from memory, so what the book says
// appears a moment after the board and is awaited.
import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { StrictMode, useState } from "react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { lazyBook, memorySource, type LazyBook } from "../../content/loader.ts";
import { MODULES, OPENINGS } from "../../content/openings.ts";
import { serveBook } from "../../content/serve.ts";
import { LanguageContext } from "../language/LanguageContext.ts";
import { Explorer, type ExplorerState } from "./Explorer.tsx";

afterEach(cleanup);

const SERVED = serveBook(OPENINGS);
/** The English prose of the root module, lines/root.en.json: the shipped text of the first moves. */
const rootEn = MODULES.find((module) => module.id === "root")?.texts.en ?? {};

/** The explorer with its state held as the app holds it, each change recorded. */
function Harness({ initial, book, record }: { initial: ExplorerState; book: LazyBook; record: (state: ExplorerState) => void }) {
  const [state, setState] = useState(initial);
  return (
    <Explorer
      {...state}
      book={book}
      onChange={(next) => {
        record(next);
        setState(next);
      }}
    />
  );
}

function renderExplorer(initial: Partial<ExplorerState> = {}, language: "en" | "de" = "en", book = lazyBook(memorySource(SERVED))) {
  const record = vi.fn<(state: ExplorerState) => void>();
  const state: ExplorerState = { line: "", ply: null, side: "white", ...initial };
  const result = render(
    <LanguageContext value={{ language, setLanguage: () => undefined }}>
      <Harness initial={state} book={book} record={record} />
    </LanguageContext>,
  );
  return { ...result, record, last: () => record.mock.lastCall?.[0] };
}

function square(container: HTMLElement, name: string): Element {
  const element = container.querySelector(`[data-square="${name}"]`);
  if (element === null) throw new Error(`no square ${name}`);
  return element;
}

/** The arrow of the move, once the book has arrived and drawn it. */
async function arrow(container: HTMLElement, name: string): Promise<Element> {
  return waitFor(() => {
    const element = container.querySelector(`[data-arrow="${name}"]`);
    if (element === null) throw new Error(`no arrow ${name} yet`);
    return element;
  });
}

describe("the opening explorer", () => {
  test("opens at the initial position with the introduction and the first moves as candidates and arrows", async () => {
    const { container } = renderExplorer();
    expect(await screen.findByText(/^Twenty moves are legal/)).not.toBeNull();
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

  test("plays a move by selecting the piece and then the square, marking the targets in between", async () => {
    const { container, last } = renderExplorer();
    await arrow(container, "e2e4");
    fireEvent.click(square(container, "e2"));
    expect(square(container, "e2").hasAttribute("data-highlight")).toBe(true);
    expect(square(container, "e3").getAttribute("data-target")).toBe("empty");
    expect(square(container, "e4").getAttribute("data-target")).toBe("empty");
    expect(container.querySelectorAll("[data-target]")).toHaveLength(2);
    // The arrows give way while a piece is selected, and return when it is not.
    expect(container.querySelectorAll("[data-arrow]")).toHaveLength(0);
    fireEvent.click(square(container, "e2"));
    expect(container.querySelectorAll("[data-arrow]")).toHaveLength(6);
    fireEvent.click(square(container, "e2"));
    fireEvent.click(square(container, "e4"));
    expect(last()).toEqual({ line: "1.e4", ply: null, side: "white" });
    expect(screen.getByText("1.e4")).not.toBeNull();
    // The reading comes first, the candidates (Black's replies, also rated Best) after it.
    expect((await screen.findByRole("heading", { level: 2 })).textContent).toBe("King's Pawn Game");
    expect(screen.getAllByText("Best")[0]?.getAttribute("data-rating")).toBe("5");
    expect(screen.getByText(/best by test/)).not.toBeNull();
    expect(screen.getByText(rootEn["1.e4"]?.strategy ?? "")).not.toBeNull();
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

  test("plays a candidate from the list and from its arrow", async () => {
    const { last } = renderExplorer();
    fireEvent.click(await screen.findByRole("button", { name: /^d4/ }));
    expect(last()?.line).toBe("1.d4");
    cleanup();
    const second = renderExplorer();
    fireEvent.click(await arrow(second.container, "g1f3"));
    expect(second.last()?.line).toBe("1.Nf3");
  });

  test("plays the one candidate whose arrow points to a square clicked, and none where two do", async () => {
    // After 1.e4 c5 the candidates are Nf3, c3 and Nc3: two arrows point to c3.
    const { container, last, record } = renderExplorer({ line: "1.e4 c5" });
    await arrow(container, "c2c3");
    fireEvent.click(square(container, "c3"));
    expect(record).not.toHaveBeenCalled();
    fireEvent.click(square(container, "f3"));
    expect(last()?.line).toBe("1.e4 c5 2.Nf3");
  });

  test("with fewer than three moves rated 4 and 5, offers the moves rated 3 too, their arrows faint", async () => {
    // After 1.e4 d5 the book rates exd5 Best, and Nc3 and d4 Playable.
    const { container } = renderExplorer({ line: "1.e4 d5" });
    expect((await arrow(container, "e4d5")).getAttribute("data-strength")).toBe("strong");
    expect((await arrow(container, "b1c3")).getAttribute("data-strength")).toBe("faint");
    expect((await arrow(container, "d2d4")).getAttribute("data-strength")).toBe("faint");
    expect(screen.getByRole("button", { name: /^Nc3.*Playable$/ })).not.toBeNull();
  });

  test("a candidate under the pointer is highlighted as an arrow and in the list alike", async () => {
    const { container } = renderExplorer();
    const e2e4 = await arrow(container, "e2e4");
    const highlighted = () => [...container.querySelectorAll("[data-highlighted]")];
    // The pointer on an arrow lights its candidate in the list.
    fireEvent.pointerEnter(e2e4);
    expect(highlighted().map((e) => e.getAttribute("data-arrow") ?? e.textContent)).toEqual([
      "e2e4",
      "e4King's Pawn GameBest",
    ]);
    fireEvent.pointerLeave(e2e4);
    expect(highlighted()).toHaveLength(0);
    // The pointer on a candidate in the list lights its arrow.
    fireEvent.pointerEnter(screen.getByRole("button", { name: /^Nf3/ }));
    expect((await arrow(container, "g1f3")).hasAttribute("data-highlighted")).toBe(true);
    expect(e2e4.hasAttribute("data-highlighted")).toBe(false);
    expect(highlighted()).toHaveLength(2);
    // Selecting a piece takes the arrows away, and the highlight with them.
    fireEvent.click(square(container, "e2"));
    expect(highlighted()).toHaveLength(0);
    fireEvent.click(square(container, "e2"));
    expect(highlighted()).toHaveLength(0);
    // Playing the candidate replaces the position, and nothing stays lit.
    fireEvent.pointerEnter(screen.getByRole("button", { name: /^d4/ }));
    fireEvent.click(screen.getByRole("button", { name: /^d4/ }));
    expect(screen.getByText("1.d4")).not.toBeNull();
    expect(highlighted()).toHaveLength(0);
  });

  test("any legal move is accepted, rated when the book rates it, unrated and off the book otherwise", async () => {
    const { container } = renderExplorer();
    fireEvent.click(square(container, "c2"));
    fireEvent.click(square(container, "c3"));
    expect(screen.getByText("1.c3")).not.toBeNull();
    expect(await screen.findByText("Inaccuracy")).not.toBeNull();
    expect(screen.getByRole("heading", { level: 2 }).textContent).toBe("Saragossa Opening");
    expect(await screen.findByText("No further moves are rated or explained from here.")).not.toBeNull();
    expect(screen.queryByRole("list", { name: "Next moves" })).toBeNull();
    fireEvent.click(square(container, "e7"));
    fireEvent.click(square(container, "e5"));
    expect(screen.getByText("1...e5")).not.toBeNull();
    expect(await screen.findByText("The line has left the openings the app knows.")).not.toBeNull();
    expect(screen.queryByRole("heading", { level: 2 })).toBeNull();
    expect(container.querySelectorAll("[data-arrow]")).toHaveLength(0);
  });

  test("shows the line with the current move marked, steps back and forward without discarding it, and resets", async () => {
    const { container, last } = renderExplorer({ line: "1.e4 e5 2.Nf3" });
    const moves = within(screen.getByRole("list", { name: "Moves played" })).getAllByRole("button");
    expect(moves.map((m) => m.textContent)).toEqual(["e4", "e5", "Nf3"]);
    expect(moves[2]?.getAttribute("aria-current")).toBe("true");
    expect(screen.getByText("2.Nf3")).not.toBeNull();
    // A deep link loads the chunks on the way: the root, 1.e4 and 1.e4 e5.
    expect((await screen.findByRole("heading", { level: 2 })).textContent).toBe("King's Knight Opening");
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

  test("writes notation in the visitor's language, and the address in English", async () => {
    const { last } = renderExplorer({ line: "1.Nf3" }, "de");
    expect(screen.getByText("1.Sf3")).not.toBeNull();
    expect((await screen.findAllByText("Bester Zug"))[0]?.getAttribute("data-rating")).toBe("5");
    // Black's replies are the candidates, written in German letters.
    const replies = within(screen.getByRole("list", { name: "Nächste Züge" }));
    expect(replies.getByRole("button", { name: /^Sf6/ })).not.toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Zurück" }));
    expect(last()).toEqual({ line: "1.Nf3", ply: 0, side: "white" });
    const list = screen.getByRole("list", { name: "Nächste Züge" });
    fireEvent.click(within(list).getByRole("button", { name: /^Sf3/ }));
    expect(last()).toEqual({ line: "1.Nf3", ply: null, side: "white" });
  });

  test("shows the book on the first visit under StrictMode, whose doubled effect asks for it twice", async () => {
    // Found by the maintainer on 2026-10-24 in development: the first visit showed the bare
    // board, the second the book. A source that answers a tick later, as a server does.
    const memory = memorySource(SERVED);
    const later = <T,>(value: Promise<T>) =>
      new Promise<T>((resolve, reject) => {
        setTimeout(() => {
          value.then(resolve, reject).catch(reject);
        }, 0);
      });
    const slow = lazyBook({ index: () => later(memory.index()), chunk: (id) => later(memory.chunk(id)) });
    render(
      <StrictMode>
        <Harness initial={{ line: "", ply: null, side: "white" }} book={slow} record={() => undefined} />
      </StrictMode>,
    );
    expect(await screen.findByText(/^Twenty moves are legal/)).not.toBeNull();
    expect(within(screen.getByRole("list", { name: "Next moves" })).getAllByRole("button")).toHaveLength(6);
  });

  test("says when the book cannot be loaded, and the board still plays", async () => {
    const offline = lazyBook({
      index: () => Promise.reject(new Error("offline")),
      chunk: () => Promise.reject(new Error("offline")),
    });
    const { container, last } = renderExplorer({}, "en", offline);
    expect(await screen.findByText("The openings could not be loaded.")).not.toBeNull();
    expect(screen.queryByText(/^Twenty moves are legal/)).toBeNull();
    expect(container.querySelectorAll("[data-arrow]")).toHaveLength(0);
    fireEvent.click(square(container, "e2"));
    fireEvent.click(square(container, "e4"));
    expect(last()).toEqual({ line: "1.e4", ply: null, side: "white" });
    expect(screen.getByText("1.e4")).not.toBeNull();
    expect(await screen.findByText("The openings could not be loaded.")).not.toBeNull();
  });
});
