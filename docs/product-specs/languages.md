# Languages

**Intent** — The app is published for anyone, and its first two languages
are English, the language of the code and the default, and German, with
more languages possible later (the maintainer's rules, 2026-10-23). Working
means a German visitor reads German sentences and German notation without
asking for them, and anyone can switch in the footer.

## Promises

- English and German are offered; any other language gets English.
  (`src/i18n/language.test.ts`)
- On the first visit the language is the first of the browser's preferred
  languages that the app offers, matched by primary subtag ("de-AT" is
  German); English when none is. (`src/app/language.test.ts`)
- The footer switch names each language in itself and shows which is
  current. A choice takes effect at once, without a reload, and is kept in
  the browser (localStorage), where it wins over the browser's languages on
  later visits. (`src/ui/language/LanguageSwitch.test.tsx`,
  `src/app/App.test.tsx`)
- The document's `lang` attribute follows the language, so screen readers
  pronounce it right. (`src/app/App.test.tsx`)
- Every text the app shows or reads aloud exists in both languages. A
  missing German text would show English, and `npm run check` fails before
  that ships. (`src/i18n/catalogue.test.ts`)
- Chess notation uses the language's piece letters: `K Q R B N` in English,
  `K D T L S` in German, no letter for the pawn in either; squares,
  captures, checks, promotions and castling read the same.
  (`src/i18n/notation.test.ts`)

## Deliberately not promised

- No regional variants: `de-CH` is German, `en-GB` is English.
- The language is not in the URL; a shared link opens in the reader's own
  language.
- Square names, FEN and the app's name are never translated.
- No figurine notation (piece symbols in place of letters).
- Opening content may exist in English only for a lesson; the English then
  shows in German mode. Accepted, not a bug.
- No right-to-left layout.

## Surface

- `SUPPORTED_LANGUAGES`, `Language`, `pickLanguage`, `LANGUAGE_NAMES` —
  `src/i18n/language.ts`
- `translate`, `translator`, `msg`, `CATALOGUES` — `src/i18n/translate.ts`
- `localizeSan`, `pieceLetter` — `src/i18n/notation.ts`
- `LanguageContext`, `useLanguage`, `useT` —
  `src/ui/language/LanguageContext.ts`
- `LanguageSwitch` — the footer control, `src/ui/language/`
- `loadLanguage`, `saveLanguage` — `src/app/language.ts`

## Pointers

- `docs/localization.md` — how to write translatable text, the catalogue
  check, notation, the content layout, and the decisions behind them.
