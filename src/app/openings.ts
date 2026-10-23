// The book's source in the browser: the served files under <base>/openings/,
// written by scripts/content/serve.mjs when the app is built and fetched from
// the app's own origin as the line walks into them
// (docs/adr/0001-opening-book-as-fetched-json.md). The only fetch in the app.

import { lazyBook, type LazyBook } from "../content/loader.ts";

const OPENINGS_URL = `${import.meta.env.BASE_URL}openings/`;

async function fetchJson<T>(name: string): Promise<T> {
  const response = await fetch(`${OPENINGS_URL}${name}.json`);
  if (!response.ok) throw new Error(`${response.url}: HTTP ${response.status}`);
  return (await response.json()) as T;
}

export function fetchedBook(): LazyBook {
  return lazyBook({ index: () => fetchJson("index"), chunk: (id) => fetchJson(id) });
}
