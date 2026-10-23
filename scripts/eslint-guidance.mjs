// ESLint formatter: the usual listing, then a guidance block for every rule
// that fired. Error channels are guidance channels: each entry says why the
// rule exists, what to do instead, how to record a justified exception, and
// where the rule lives. Add an entry whenever a rule is added to
// eslint.config.js; a rule without one falls back to its documentation URL.

const EXCEPTION =
  "Exception: `// eslint-disable-next-line <rule> -- <reason>`; the reason is " +
  "mandatory: commits land on main without review (AGENTS.md, Boundaries).";

const GUIDANCE = {
  "boundaries/dependencies": [
    "Layers import downward only: app → ui → content → i18n → domain, and",
    "domain, i18n and content never import React (docs/ARCHITECTURE.md, Layers).",
    "Why: chess and training logic stays framework-free and unit-testable in",
    "plain Node, and React stays replaceable.",
    "Fix: move the code so the dependency points down, or pass the value in",
    "from the higher layer as a parameter or prop.",
    "Exception: none at the import site. If the layering itself is wrong, change",
    "the table in docs/ARCHITECTURE.md and the policies in eslint.config.js in",
    "the same commit.",
  ],
  "boundaries/no-unknown-files": [
    "Every file under src/ belongs to src/domain, src/i18n, src/content, src/ui",
    "or src/app.",
    "Why: the Vitest projects in vite.config.ts only run tests inside those",
    "folders; a test anywhere else silently never runs.",
    "Fix: move the file into the layer it belongs to.",
    "Exception: a new layer is an architecture change. Add it to",
    "docs/ARCHITECTURE.md, eslint.config.js and vite.config.ts in one commit.",
  ],
  "boundaries/no-unknown": [
    "The import points at a file outside the five layers under src/.",
    "Fix: move that file into src/domain, src/i18n, src/content, src/ui or src/app.",
    "See boundaries/no-unknown-files for why and for the exception.",
  ],
  "no-restricted-imports": [
    "The app never bundles the opening book: it fetches the served form chunk by",
    "chunk (docs/adr/0001-opening-book-as-fetched-json.md). src/content/openings.ts,",
    "src/content/files.ts and the modules under src/content/lines/ are the authored",
    "content and its readers, for the serve step and the tests only.",
    "Why: with the content imported the bundle was 1.9 MB and grew with every position.",
    "Fix: read the book through the LazyBook the app passes down (src/app/openings.ts",
    "makes it); a test may build the book in memory from src/content/openings.ts.",
    "Exception: none in the app. A test file is not covered by the rule.",
  ],
  "no-restricted-globals": [
    "src/domain, src/i18n and src/content run without a browser",
    "(docs/ARCHITECTURE.md, Invariants), so their tests run in plain Node.",
    "Fix: take the value as a parameter and let src/app read the browser.",
    "Exception: none; a browser-dependent helper belongs in src/app.",
  ],
  "max-lines": sizeGuidance("file"),
  "max-lines-per-function": sizeGuidance("function"),
  complexity: sizeGuidance("function"),
  "max-params": sizeGuidance("parameter list"),
  "max-depth": sizeGuidance("nesting"),
  "@typescript-eslint/no-floating-promises": [
    "Fix: await it, return it, or write `void promise` with a comment on why",
    "the result may be dropped. An unhandled rejection is invisible otherwise.",
    EXCEPTION,
  ],
  "@typescript-eslint/no-explicit-any": [
    "Fix: use `unknown` and narrow it, or write the precise type. `any`",
    "switches the type checker off for everything it touches.",
    EXCEPTION,
  ],
  "@typescript-eslint/no-unused-vars": [
    "Fix: delete it. A parameter that must stay for its position gets a `_`",
    "prefix, which this rule and tsconfig both ignore.",
  ],
  "react-refresh/only-export-components": [
    "Fix: keep components and other exports in separate files so Vite fast",
    "refresh can swap a component without reloading the page.",
    EXCEPTION,
  ],
  "@eslint-community/eslint-comments/require-description": [
    "Every eslint-disable needs a reason: `// eslint-disable-next-line <rule> --",
    "<reason>`. The reason is the review record: commits land on main without",
    "review (AGENTS.md, Boundaries).",
  ],
};

function sizeGuidance(unit) {
  return [
    `Size and complexity limits catch the usual failure of generated code: one ${unit}`,
    "that keeps growing.",
    "Fix: split by responsibility: extract a helper, a module or a component.",
    "Exception: when splitting would hurt, raise the limit in eslint.config.js by",
    "a small step with a comment saying why. Never disable the rule: a raised",
    "limit still fires when things get worse.",
  ];
}

function fallback(ruleId, rulesMeta) {
  const url = rulesMeta?.[ruleId]?.docs?.url;
  return [
    url
      ? `See ${url}`
      : "No guidance recorded; add an entry to scripts/eslint-guidance.mjs.",
  ];
}

function collect(results) {
  const lines = [];
  const fired = new Map();
  let errors = 0;
  let warnings = 0;
  for (const result of results) {
    if (result.messages.length === 0) continue;
    lines.push("", result.filePath);
    for (const m of result.messages) {
      const severity = m.severity === 2 ? "error" : "warning";
      if (m.severity === 2) errors += 1;
      else warnings += 1;
      lines.push(
        `  ${m.line}:${m.column}  ${severity}  ${m.message}  ${m.ruleId ?? ""}`,
      );
      if (m.ruleId) fired.set(m.ruleId, (fired.get(m.ruleId) ?? 0) + 1);
    }
  }
  return { lines, fired, errors, warnings };
}

export default function format(results, context) {
  const { lines, fired, errors, warnings } = collect(results);
  if (errors + warnings === 0) return "";
  lines.push(
    "",
    `✖ ${errors + warnings} problems (${errors} errors, ${warnings} warnings)`,
  );
  lines.push(
    "",
    "Guidance (why each rule exists, what to do, how to record an exception):",
  );
  for (const [ruleId, count] of fired) {
    const text = GUIDANCE[ruleId] ?? fallback(ruleId, context?.rulesMeta);
    lines.push("", `${ruleId} (${count}×)`, ...text.map((l) => `  ${l}`));
  }
  return lines.join("\n") + "\n";
}
