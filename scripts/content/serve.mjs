// Writes the served book into public/openings/, which Vite copies into dist/
// and serves in development: index.json, every position's key and the chunk
// that holds it, and one <id>.json per content module
// (docs/adr/0001-opening-book-as-fetched-json.md; the format is
// src/content/serve.ts). Run by npm run build and npm run dev; the folder is
// generated and ignored by git. The book is built with every check on the
// way, so a content error fails here, before the app is built.
// Usage: node scripts/content/serve.mjs
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const REPO = path.resolve(import.meta.dirname, "../..");
const OUT = `${REPO}/public/openings`;
const content = (name) => import(pathToFileURL(`${REPO}/src/content/${name}.ts`).href);
const { readModules } = await content("files");
const { buildBook } = await content("book");
const { serveBook } = await content("serve");

let served;
try {
  served = serveBook(buildBook(readModules()));
} catch (error) {
  console.error(
    `✖ openings: ${error.message}\n` +
      "  The book is built from src/content/lines/ before the app, so that a content\n" +
      "  error fails the build instead of a visitor's screen (src/content/book.ts\n" +
      "  names every check). → Fix the named entry in its module; npx vitest run\n" +
      "  src/content/openings.test.ts runs the same checks and the content principles.",
  );
  process.exit(1);
}
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
let bytes = 0;
const write = (name, value) => {
  const text = JSON.stringify(value);
  bytes += text.length;
  writeFileSync(`${OUT}/${name}.json`, text);
};
write("index", served.index);
let positions = 0;
for (const [id, chunk] of served.chunks) {
  write(id, chunk);
  positions += chunk.positions.length;
}
console.log(
  `✔ openings: ${served.chunks.size} chunks, ${positions} positions, ${Math.round(bytes / 1024)} kB → public/openings/`,
);
