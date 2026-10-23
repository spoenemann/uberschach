// The address: which screen, and for the explorer the line, the move shown
// and the orientation, in the hash so that GitHub Pages, which has no SPA
// fallback, serves index.html for every address
// (docs/product-specs/opening-explorer.md, Reaching it). Pure text in and
// out; src/app/App.tsx reads and writes location.hash.

import type { Color } from "../domain/position.ts";
import type { ExplorerState } from "../ui/explorer/Explorer.tsx";

export type Route = { readonly screen: "home" } | ({ readonly screen: "openings" } & ExplorerState);

export const HOME: Route = { screen: "home" };

const EXPLORER_PATH = "/openings";

/**
 * The route the hash names. The explorer's line is the `line` parameter
 * in English notation ("1.e4 e5 2.Nf3", written with "+" for the spaces as
 * URLSearchParams does), the move shown is `ply` (absent for the end of
 * the line, so a link to a line opens at its end), and `side=black` turns
 * the board. Anything else is the entry page.
 */
export function parseRoute(hash: string): Route {
  const [path = "", query = ""] = hash.replace(/^#/, "").split("?", 2);
  if (path !== EXPLORER_PATH) return HOME;
  const params = new URLSearchParams(query);
  const ply = params.get("ply") ?? "";
  const side: Color = params.get("side") === "black" ? "black" : "white";
  return {
    screen: "openings",
    line: params.get("line")?.trim() ?? "",
    ply: /^\d+$/.test(ply) ? Number(ply) : null,
    side,
  };
}

/** The hash for the route, parameters left out when they hold the default. */
export function formatRoute(route: Route): string {
  if (route.screen === "home") return "#/";
  const params = new URLSearchParams();
  if (route.line !== "") params.set("line", route.line);
  if (route.ply !== null) params.set("ply", String(route.ply));
  if (route.side === "black") params.set("side", "black");
  const query = params.toString();
  return `#${EXPLORER_PATH}${query === "" ? "" : `?${query}`}`;
}
