import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // Must match the GitHub Pages project URL, https://spoenemann.github.io/uberschach/
  // (docs/ARCHITECTURE.md, Shape). A wrong base still builds; the deployed page would then
  // request its script from the wrong path.
  base: "/uberschach/",
  plugins: [react()],
  build: {
    // Safari 15, the last iOS of the iPhone SE (1st generation); Vite's
    // default is Safari 16.4. Syntax and CSS are lowered to it. Built-ins are
    // not, and neither is a media query written in the range syntax
    // `(width < 40rem)`: tsconfig.app.json's `lib` keeps the former to
    // Safari 15, and the CSS Modules write `min-width`.
    target: "safari15",
  },
  test: {
    // Two test environments, split by layer (docs/ARCHITECTURE.md, Invariants):
    // domain, i18n and content run in plain Node, so any DOM access fails
    // there. A test file outside these globs never runs; the lint rule
    // boundaries/no-unknown-files is what catches that.
    projects: [
      {
        extends: true,
        test: {
          name: "node",
          environment: "node",
          include: [
            "src/domain/**/*.test.ts",
            "src/i18n/**/*.test.ts",
            "src/content/**/*.test.ts",
          ],
        },
      },
      {
        extends: true,
        test: {
          name: "dom",
          environment: "jsdom",
          include: ["src/ui/**/*.test.{ts,tsx}", "src/app/**/*.test.{ts,tsx}"],
        },
      },
    ],
    // Vitest's module cache (node_modules/.vitest-cache, on by default) keeps
    // a transformed module by its content. src/i18n/catalogue.test.ts scans
    // the sources with import.meta.glob, which is expanded at transform time,
    // so with the cache on a source file added later is not scanned until the
    // test file itself changes: found on 2026-10-23, when the explorer's new
    // messages counted as stale. The suite is small; the cache buys little.
    fsModuleCache: false,
    // The content tests play thousands of lines and the whole book: 2 s alone
    // on a laptop, but 6 s on the CI runner, where `npm run check` runs them
    // in parallel under coverage (named.test.ts timed out at the default 5 s
    // on 2026-10-24). A timeout here guards against a hang, not a slow run.
    testTimeout: 30_000,
    coverage: {
      // "A test with every domain or i18n change" (AGENTS.md, definition of
      // done), measured per file over src/domain and src/i18n only. Raise,
      // never lower.
      provider: "v8",
      include: ["src/domain/**/*.ts", "src/i18n/**/*.ts"],
      exclude: ["src/**/*.test.ts"],
      thresholds: {
        perFile: true,
        lines: 90,
        functions: 90,
        branches: 80,
        statements: 90,
      },
      reporter: ["text", "html"],
    },
  },
});
