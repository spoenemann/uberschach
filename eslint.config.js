// ESLint flat config. ESLint rather than the Vite template's oxlint because
// the layer rules (eslint-plugin-boundaries), the type-aware rules and the
// guidance formatter in scripts/eslint-guidance.mjs need ESLint's plugin API.
// The layer policies below mirror the table in docs/ARCHITECTURE.md; change
// both in the same commit.
import eslintComments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import js from "@eslint/js";
import boundaries from "eslint-plugin-boundaries";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

// Bottom to top: each layer may import from itself and the layers before it.
const LAYERS = ["domain", "i18n", "content", "ui", "app"];

// Framework-free layers: pure TypeScript, tests in plain Node.
const PURE_LAYERS = ["domain", "i18n", "content"];

// Browser-only globals that the pure layers must not touch.
const browserGlobals = [
  "window",
  "document",
  "navigator",
  "location",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "fetch",
].map((name) => ({
  name,
  message: `${name} is browser-only; domain, i18n and content run in plain Node. Take the value as a parameter and let src/app read the browser.`,
}));

const storageGlobals = ["localStorage", "sessionStorage", "indexedDB"].map(
  (name) => ({
    name,
    message: `${name} is wired in src/app only; a component receives stored values as props and reports changes through callbacks.`,
  }),
);

export default tseslint.config(
  { ignores: ["dist", "coverage", "node_modules"] },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { files: ["**/*.{js,mjs,cjs}"], ...tseslint.configs.disableTypeChecked },
  {
    // scripts/ run under Node; these are the globals they use.
    files: ["scripts/**/*.mjs"],
    languageOptions: {
      globals: { AbortSignal: "readonly", console: "readonly", fetch: "readonly", process: "readonly", setTimeout: "readonly" },
    },
  },
  eslintComments.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  {
    // Suppressions need a reason, and a suppression that no longer suppresses
    // anything is removed. Guidance: scripts/eslint-guidance.mjs.
    linterOptions: { reportUnusedDisableDirectives: "error" },
    rules: {
      "@eslint-community/eslint-comments/require-description": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // Size and complexity limits: the usual failure of generated code is one
      // function or file that keeps growing. Raise by a small step with a
      // comment rather than disabling.
      "max-lines": [
        "error",
        { max: 300, skipBlankLines: true, skipComments: true },
      ],
      "max-lines-per-function": [
        "error",
        { max: 80, skipBlankLines: true, skipComments: true },
      ],
      complexity: ["error", 12],
      "max-params": ["error", 4],
      "max-depth": ["error", 4],
    },
  },
  {
    // Test files are lists of cases; function length does not apply.
    files: ["**/*.test.{ts,tsx}"],
    rules: { "max-lines-per-function": "off" },
  },
  {
    // Layers: docs/ARCHITECTURE.md, "Layers under src/".
    files: ["src/**/*.{ts,tsx}"],
    plugins: { boundaries },
    settings: {
      "boundaries/include": ["src/**/*"],
      "boundaries/elements": LAYERS.map((layer) => ({
        type: layer,
        pattern: `src/${layer}`,
      })),
    },
    rules: {
      "boundaries/no-unknown-files": "error",
      "boundaries/no-unknown-dependencies": "error",
      "boundaries/dependencies": [
        "error",
        {
          default: "disallow",
          // Without checkAllOrigins the rule skips external packages, and the
          // React policy below never fires.
          checkAllOrigins: true,
          message:
            "{{from.type}} may not import from {{to.type}}. Layers import downward only: app → ui → content → i18n → domain (docs/ARCHITECTURE.md).",
          policies: [
            ...LAYERS.map((layer, index) => ({
              from: { element: { type: layer } },
              allow: {
                to: { element: { types: { anyOf: LAYERS.slice(0, index + 1) } } },
              },
            })),
            // External packages are allowed everywhere except React in the
            // framework-free layers.
            { allow: { to: { module: { origin: "external" } } } },
            // Node's own modules only in src/content, which reads the authored
            // book from disk for the serve step and the tests
            // (src/content/files.ts); in the other layers they would either
            // break the browser bundle or make the domain depend on a runtime.
            {
              from: { element: { type: "content" } },
              allow: { to: { module: { origin: "core" } } },
            },
            {
              from: { element: { types: { anyOf: PURE_LAYERS } } },
              disallow: {
                to: {
                  module: {
                    origin: "external",
                    source: ["react", "react-dom", "react/*", "react-dom/*"],
                  },
                },
              },
              message:
                "{{from.type}} is framework-free TypeScript: no React, so it stays unit-testable in plain Node. Put React code in src/ui or src/app and call {{from.type}} from there (docs/ARCHITECTURE.md, Invariants).",
            },
          ],
        },
      ],
    },
  },
  {
    files: PURE_LAYERS.map((layer) => `src/${layer}/**`),
    rules: { "no-restricted-globals": ["error", ...browserGlobals] },
  },
  {
    // Only src/app touches browser storage (docs/ARCHITECTURE.md, Invariants).
    files: ["src/ui/**"],
    rules: { "no-restricted-globals": ["error", ...storageGlobals] },
  },
  {
    // The app fetches the book and never bundles it
    // (docs/adr/0001-opening-book-as-fetched-json.md): with the content
    // imported, the bundle was 1.9 MB on 2026-10-23 and grew with every
    // position. The authored modules, the named lines and the files that
    // read them stay out of src/ui and src/app; tests may build the book in
    // memory.
    files: ["src/ui/**", "src/app/**"],
    ignores: ["**/*.test.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "**/content/openings.ts",
                "**/content/files.ts",
                "**/content/lines/*",
                "**/content/named.ts",
                "**/content/named/*",
              ],
              message:
                "The app fetches the book chunk by chunk (src/content/loader.ts, src/app/openings.ts); importing the content would bundle it (docs/adr/0001-opening-book-as-fetched-json.md).",
            },
          ],
        },
      ],
    },
  },
);
