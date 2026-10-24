# Localization

The app is published for anyone and speaks English, the language of the
code and the default, and German; more languages may follow (the
maintainer's rules, 2026-10-23). This guideline holds both what is promised
and how to write for it; there is no separate product spec. English is
written in the code, where it reads like the screen it produces; German is
extracted into one catalogue, `src/i18n/de.ts`, keyed by the English text;
and `npm run check` fails when code and catalogue disagree. Notation
follows the language too: a German reader sees `Lb5` where an English one
sees `Bb5`. The code lives in `src/i18n/` (pure TypeScript),
`src/ui/language/` (the React context, the hooks and the footer switch) and
`src/app/language.ts` (detecting and storing the choice);
`docs/ARCHITECTURE.md` has the layer.

## What a visitor gets

Each promise names the test that holds it.

- **English and German**; any other language gets English.
  (`src/i18n/language.test.ts`)
- **The browser's language on the first visit**: the first entry of
  `navigator.languages` whose primary subtag the app offers (`de-AT` is
  German), else English. (`src/app/language.test.ts`)
- **A switch in the footer**, each language named in itself and the current
  one marked. A choice takes effect at once, without a reload, and is kept
  under the localStorage key `uberschach.language`, where it wins over the
  browser's languages on later visits. `src/app/language.ts` reads both;
  `App` holds the language as state and provides it through
  `LanguageContext`; `src/ui/language/LanguageSwitch.tsx` changes and
  stores it. (`src/ui/language/LanguageSwitch.test.tsx`,
  `src/app/App.test.tsx`)
- **`<html lang>` follows the language**, so screen readers pronounce it
  right. (`src/app/App.test.tsx`)
- **Every text exists in both languages.** A missing German text would show
  English, and `npm run check` fails before that ships (The German
  catalogue, below). (`src/i18n/catalogue.test.ts`)
- **Notation in the language's piece letters**: `K Q R B N` in English,
  `K D T L S` in German (Notation, below). (`src/domain/san.test.ts`,
  `src/i18n/notation.test.ts`)

Not promised: regional variants (`de-CH` is German, `en-GB` is English);
the language in the URL, so a shared link opens in the reader's own
language; translated square names, FEN or app name; figurine notation;
German content for every lesson (the English then shows, by design); a
right-to-left layout.

## Writing text a visitor sees

- **Every string shown or read aloud goes through `t()`.** In a component,
  `const t = useT()` (`src/ui/language/LanguageContext.ts`); outside React,
  `translator(language)` from `src/i18n/translate.ts`. The English text is
  the key, written as one plain string literal: `t("Nothing to train yet.")`.
  There are no message ids to invent, and a reader of the code sees the
  screen.
- **Values go in as `{name}` placeholders**, never by concatenation:
  `t("Move {n} of {total}", { n, total })`. German declines and reorders:
  "white king" is "weißer König" but "white queen" is "weiße Dame", so a
  colour word and a piece word cannot be translated apart
  (`src/ui/board/Piece.tsx` has twelve messages for that reason). A name
  followed by a square ("king e1") is the one join that holds in every
  language.
- **A message chosen at runtime from a table** is wrapped in `msg()` where
  it is written, so the catalogue check still finds it:
  `const NAMES = { king: msg("king"), … }` and later `t(NAMES[type])`. Any
  other non-literal argument to `t()` is a translation the check cannot
  see.
- **Numbers and dates** are formatted with `Intl.NumberFormat` and
  `Intl.DateTimeFormat` for the language, never by hand. Plurals have no
  helper yet; the first message that needs one adds it (one English message
  per plural form, chosen with `Intl.PluralRules`) and updates this doc.
- **Not translated**: the app name, square names and FEN, and the language
  names in the switch, each written in its own language ("Deutsch").
- **An English literal in JSX has no sensor yet.** The first one that
  ships on a German screen is the incident that adds one
  (eslint-plugin-react's `jsx-no-literals`, scoped to `src/ui` and
  `src/app`).

## The German catalogue

`src/i18n/de.ts` maps each English message to its German, placeholders
kept. The German line lands in the same commit as the English, and
`src/i18n/catalogue.test.ts`, run by `npm test` and so by `npm run check`,
reads every `src/**/*.ts` and `.tsx` except tests, collects the literals in
`t("…")` and `msg("…")` calls, and fails on:

- a message with no entry (the German page would show English);
- an entry no code uses any more (dead text nobody reviews);
- an entry whose `{placeholders}` differ from its message's (a literal
  `{name}` on screen).

Its failure message lists each offending message and what to do. At
runtime a missing entry falls back to the English text, so the symptom is
an English sentence on a German page; the check is what catches it before
the commit. The scan is an `import.meta.glob`, expanded when the test file
is transformed, so Vitest's module cache is off in `vite.config.ts`: with
it on, a source file added after the last transform was not scanned until
the test file itself changed (found 2026-10-23). English has no catalogue: `CATALOGUES.en` is empty by design.
The scan is textual, so a comment that quotes a call, `t("like this")`, is
collected too; write `t()` in comments.

## Notation

The domain writes and reads moves in whichever notation language it is
given (`docs/design-docs/chess-notation.md`): `toSan(position, move,
notation)`, `parseSan`, `formatLine` and `playLine` in `src/domain/san.ts`
and `src/domain/line.ts`. Which notation a visitor's language reads is
`notationLanguage(language)` in `src/i18n/notation.ts`: English reads
`K Q R B N`, German `K D T L S`; the pawn has no letter in either, and
files, ranks, `x`, `+`, `#`, `=` and `O-O` are the same everywhere. A
component that has the move writes it in the visitor's notation directly,
`toSan(position, move, notationLanguage(language))`. Stored notation is
English: the content files, the explorer's address and later PGN all use
`K Q R B N`, and stored text shown as it is, such as a line quoted in
prose, is adapted at display time by `localizeSan(san, language)`, which
replaces every capital `K Q R B N` and so takes notation only, never the
prose around it. `pieceLetter(type, language)` gives one letter.

## Opening content

Content holds the chess data once and the prose once per language: a
neutral JSON file with the positions, moves, ratings and sources, and
beside it one JSON file per language with the names, backgrounds and
strategy texts (`docs/product-specs/opening-explorer.md`, The database),
under `src/content/lines/` as `<id>.json`, `<id>.en.json`, `<id>.de.json`,
one module per subtree of the book, `root` for the initial position
(`docs/adr/0002-opening-modules-folded-to-a-size-budget.md`). `src/content/files.ts`
reads them into a `Record<Language, …>` with `Language` from
`src/i18n/language.ts`, so a new language is a new file beside the others.
Both the data and the prose name a position by the canonical line that
reaches it, in English notation, and each language's prose is written in
its own notation: the key says `1.Nf3`, the German text beside it says
`Sf3`, and nothing is translated at runtime. English is complete; German
may lag text by text, and the English then shows, which is accepted above;
a module whose German file is missing has no German. `src/content/book.ts`
joins data and prose when the served book is built and in the tests, and
refuses a German text without its English, a key no position or move of
the module has, and a move without its English text
(`src/content/book.test.ts`). The served chunk a visitor fetches carries
both languages.

## Adding a language

Its tag in `SUPPORTED_LANGUAGES` and its name in `LANGUAGE_NAMES`
(`src/i18n/language.ts`), a catalogue file and its `CATALOGUES` entry
(`translate.ts`), the notation it reads in `NOTATION_OF` (`notation.ts`),
with a new row of piece letters in `src/domain/san.ts` when no existing
notation fits, its content files. The `Record<Language, …>` types point at
every other place, and the catalogue check covers every catalogue but
English.

## Decisions

Taken with the maintainer on 2026-10-23; the recommended option each time.

- **Hand-rolled over Lingui, i18next and react-intl.** About two hundred
  lines over five small files, comments included; no dependency, no build
  plugin, no extraction CLI; the catalogue check does in Vitest what
  `lingui extract` would. Lingui matched the rules best out of the box but
  adds a macro plugin and `.po` tooling; i18next keys by id, so the English
  would leave the code; react-intl is the heaviest.
- **`src/i18n/` as a layer** between `domain` and `content`, so content
  files can type their languages and the domain stays chess only.
- **Stored in localStorage, not in the URL.** There is no routing yet, and
  Pages has no SPA fallback; detection alone would switch a German visitor
  with an English browser back on every visit.
- **Neutral data once, prose per language beside it**, over one folder per
  language, which would duplicate the chess data.
- **One guideline, no product spec beside it** (the maintainer, later the
  same day): the promises above and the rules below them change together,
  so one file holds both.
