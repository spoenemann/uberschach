import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, expect, test } from "vitest";
import { App } from "./App.tsx";

// The address is set through replaceState, never by assigning location.hash:
// jsdom turns an assignment into a navigation whose hashchange fires later,
// in a task of its own, and a late one would reset the route mid-test.
function setAddress(hash: string) {
  history.replaceState(null, "", hash === "" ? location.pathname : hash);
}

beforeEach(() => {
  localStorage.clear();
  setAddress("");
});
// Without Vitest globals, Testing Library does not unmount between tests.
afterEach(cleanup);

/** Changes the hash as a link or the back button would, and lets the app see it. */
async function navigate(hash: string) {
  await act(async () => {
    setAddress(hash);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    await Promise.resolve();
  });
}

test("opens on the entry page with the explorer's card and the app name", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Uberschach");
  expect(screen.getByRole("link", { name: "Uberschach" }).getAttribute("href")).toBe("#/");
  expect(screen.getByRole("link", { name: /Opening explorer/ }).getAttribute("href")).toBe("#/openings");
  expect(screen.queryByRole("img", { name: /^Chessboard/ })).toBeNull();
  expect(document.title).toBe("Uberschach");
});

test("the explorer lives at #/openings, named in the header, and the app name leads back", async () => {
  render(<App />);
  await navigate("#/openings");
  expect(screen.getByRole("img", { name: /^Chessboard/ })).not.toBeNull();
  expect(screen.getByText("Opening explorer")).not.toBeNull();
  expect(document.title).toBe("Opening explorer · Uberschach");
  await navigate("#/");
  expect(screen.queryByRole("img", { name: /^Chessboard/ })).toBeNull();
  expect(screen.getByRole("link", { name: /Opening explorer/ })).not.toBeNull();
});

test("a visit starts where its address says, and a move replaces the address", async () => {
  setAddress("#/openings?line=1.e4+e5&ply=1&side=black");
  render(<App />);
  const board = screen.getByRole("img", { name: /^Chessboard/ });
  expect(board.getAttribute("data-orientation")).toBe("black");
  expect(screen.getByText("1.e4")).not.toBeNull();
  const historyLength = history.length;
  await act(async () => {
    fireEvent.click(screen.getByRole("button", { name: "Forward" }));
    await Promise.resolve();
  });
  expect(location.hash).toBe("#/openings?line=1.e4+e5&side=black");
  expect(history.length).toBe(historyLength);
  expect(screen.getByText("1...e5")).not.toBeNull();
});

test("switches to German from the footer, remembers it and marks the document", async () => {
  render(<App />);
  await navigate("#/openings");
  expect(document.documentElement.lang).toBe("en");
  fireEvent.click(screen.getByRole("button", { name: "Deutsch" }));
  expect(screen.getByRole("img", { name: /^Schachbrett\./ })).not.toBeNull();
  expect(screen.getByText("Eröffnungsforscher")).not.toBeNull();
  expect(document.title).toBe("Eröffnungsforscher · Uberschach");
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
