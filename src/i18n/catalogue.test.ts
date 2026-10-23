import { expect, test } from "vitest";
import { CATALOGUES } from "./translate.ts";

// The catalogue check (docs/localization.md, The German catalogue): every
// English message the code passes to t() or msg() has an entry in each
// translation catalogue, no catalogue has an entry the code no longer uses,
// and message and translation use the same placeholders. English is the
// source and has no catalogue to check. The sources are read as text at
// build time; test files are left out.
const SOURCES: Record<string, string> = import.meta.glob<string>(
  ["/src/**/*.{ts,tsx}", "!/src/**/*.test.{ts,tsx}"],
  { query: "?raw", import: "default", eager: true },
);

// t("…") or msg("…"), single or double quotes, the literal on one line. The
// word boundary before the name keeps `split(` and `at(` out.
const CALL = /\b(?:t|msg)\(\s*(?:"((?:[^"\\\n]|\\.)*)"|'((?:[^'\\\n]|\\.)*)')/g;

const GUIDANCE = [
  "A translation catalogue in src/i18n and the messages in the code disagree",
  "(docs/localization.md, The German catalogue).",
  "Why: a missing entry shows English on the translated page; a stale entry is",
  "dead text nobody reviews; different placeholders print a literal {name}.",
  "Fix: for each line above, add the translation under exactly the English",
  "text, delete the stale entry, or make the placeholders match.",
  "Exception: none. A text that must stay English is not a message: write it",
  "without t().",
].join("\n");

export function messagesIn(source: string): string[] {
  return [...source.matchAll(CALL)].map((match) =>
    (match[1] ?? match[2] ?? "").replace(/\\(.)/g, "$1"),
  );
}

function placeholders(text: string): string {
  const names = [...text.matchAll(/\{(\w+)\}/g)].map((match) => match[1] ?? "");
  return [...new Set(names)].sort().join(",");
}

function messagesInUse(): Map<string, string[]> {
  const used = new Map<string, string[]>();
  for (const [file, source] of Object.entries(SOURCES)) {
    for (const message of messagesIn(source)) {
      used.set(message, [...(used.get(message) ?? []), file]);
    }
  }
  return used;
}

function problemsIn(catalogue: Record<string, string>, used: Map<string, string[]>): string[] {
  const problems: string[] = [];
  for (const [message, files] of used) {
    if (!(message in catalogue)) {
      problems.push(`missing: "${message}" (${files.join(", ")})`);
    }
  }
  for (const [message, translation] of Object.entries(catalogue)) {
    if (!used.has(message)) {
      problems.push(`stale: "${message}"`);
    } else if (placeholders(message) !== placeholders(translation)) {
      problems.push(`placeholders differ: "${message}" → "${translation}"`);
    }
  }
  return problems;
}

test("every translation catalogue matches the messages in the code", () => {
  const files = Object.keys(SOURCES);
  expect(files.length, "the source glob found no files").toBeGreaterThan(5);
  expect(files.filter((f) => f.includes(".test."))).toEqual([]);
  const used = messagesInUse();
  expect(used.size, "the scan found no t() or msg() messages").toBeGreaterThan(0);
  for (const [language, catalogue] of Object.entries(CATALOGUES)) {
    if (language === "en") continue;
    expect(problemsIn(catalogue, used), `${language}: ${GUIDANCE}`).toEqual([]);
  }
});

test("the scan reads t() and msg() literals in either quote style and skips look-alikes", () => {
  const source = [
    `const a = t("Plain");`,
    `const b = t('Single "quoted"');`,
    `const c = msg("Escaped \\"inner\\" text");`,
    `const d = t(`,
    `  "Next line",`,
    `);`,
    `const e = "x".split("("); const f = list.at(0); const g = t(variable);`,
    `const h = useT(); const i = format("not a message");`,
  ].join("\n");
  expect(messagesIn(source)).toEqual([
    "Plain",
    'Single "quoted"',
    'Escaped "inner" text',
    "Next line",
  ]);
});

test("placeholder sets are compared regardless of order and repetition", () => {
  expect(placeholders("{b} and {a} and {b}")).toBe(placeholders("{a} {b}"));
  expect(placeholders("{a}")).not.toBe(placeholders("{b}"));
});
