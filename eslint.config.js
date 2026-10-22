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

const LAYERS = ["domain", "content", "ui", "app"];

// Browser-only globals that src/domain and src/content must not touch.
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
  message: `${name} is browser-only; domain and content run in plain Node. Take the value as a parameter and let src/app read the browser.`,
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
    languageOptions: { globals: { console: "readonly", process: "readonly" } },
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
            "{{from.type}} may not import from {{to.type}}. Layers import downward only: app → ui → content → domain (docs/ARCHITECTURE.md).",
          policies: [
            {
              from: { element: { type: "domain" } },
              allow: { to: { element: { type: "domain" } } },
            },
            {
              from: { element: { type: "content" } },
              allow: {
                to: { element: { types: { anyOf: ["domain", "content"] } } },
              },
            },
            {
              from: { element: { type: "ui" } },
              allow: {
                to: {
                  element: { types: { anyOf: ["domain", "content", "ui"] } },
                },
              },
            },
            {
              from: { element: { type: "app" } },
              allow: { to: { element: { types: { anyOf: LAYERS } } } },
            },
            // External packages are allowed everywhere except React in the
            // framework-free layers.
            { allow: { to: { module: { origin: "external" } } } },
            {
              from: { element: { types: { anyOf: ["domain", "content"] } } },
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
    files: ["src/domain/**", "src/content/**"],
    rules: { "no-restricted-globals": ["error", ...browserGlobals] },
  },
  {
    // Only src/app touches browser storage (docs/ARCHITECTURE.md, Invariants).
    files: ["src/ui/**"],
    rules: { "no-restricted-globals": ["error", ...storageGlobals] },
  },
);
