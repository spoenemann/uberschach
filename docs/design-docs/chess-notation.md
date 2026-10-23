# Design: chess notation

## Context and scope

`src/domain/san.ts` and `src/domain/line.ts` write a move as text and read
text back into a move, in the piece letters of a notation language, for
every capability that shows or accepts moves as text: the opening
explorer's panel, candidate list, move list and address
(`docs/product-specs/opening-explorer.md`), the content files, and whatever
follows. The written form is Standard Algebraic Notation as the PGN
standard's export format defines it (section 8.2.3 of
http://www.saremba.de/chessgml/standards/pgn/pgn-complete.htm, read
2026-10-23), with the piece letters of each language as the FIDE Laws
allow (Appendix C.3 of https://handbook.fide.com/chapter/E012023, read
2026-10-23: "each player is free to use the name which is commonly used
in his/her country"). The notation language is an argument to every
function. The app's mapping from its languages to a notation is
`src/i18n/notation.ts` (`docs/localization.md`, Notation); the domain
does not know the app's languages. The rules engine
(`chess-rules-engine.md`) decides what is legal; notation never does.

## Goals and non-goals

- Goal: every legal move has exactly one written form per language, the
  one a reader of a chess book in that language expects. English and
  German are the languages (K Q R B N; K D T L S); a new one is a row of
  letters.
- Goal: what the app writes, other programs read. The form is the PGN
  export format's: so a line the app shows pastes into any chess tool
  once the letters are English.
- Goal: text written by hand or by another program is read generously,
  against the legal moves of the position, and a text that cannot be
  played says why.
- Goal: a line of moves with move numbers, "1.e4 e5 2.Nf3", is read
  through the rules engine move by move, stopping at the first move that
  cannot be played and reporting which and why, with the legal prefix
  kept: the explorer's rule for an address.
- Non-goal: PGN files. Tags, comments, variations, results and numeric
  annotation glyphs are not read or written; a line is moves and move
  numbers only.
- Non-goal: long algebraic ("e2-e4"), descriptive ("P-K4") and figurine
  notation.
- Non-goal: verifying the decorations when reading. A capture sign, a
  check or mate sign and "!" or "?" are accepted and ignored; the written
  form is always regenerated from the move, so the canonical text is what
  the visitor sees.
- Non-goal: a king's promotion, an under-specified promotion ("e8"
  without the piece) and a pawn capture without its file ("xd5"). Each
  fails with its reason.
- Non-goal: checking move numbers in a line against the position. They
  are skipped.

## Design

- **Components**, each importing only from the rules engine and from
  those before it:
  - `san.ts` — `NotationLanguage` (`"en"`, `"de"`), `PIECE_LETTERS` per
    language, `pieceLetter` and `pieceOfLetter`; `toSan` writes one move,
    `parseSan` reads one; `translateSan` moves text between languages
    without a position.
  - `line.ts` — `numberedSan` ("3.Bb5", "3...a6"); `formatLine` writes a
    `Game` as a line; `playSan` and `playLine` read a move or a line onto
    a `Game`.
- **Data flow**: a caller holds a `Position` or a `Game` from the rules
  engine and a `NotationLanguage`. Writing validates the move, builds the
  body from the piece, the legal moves (for disambiguation) and the
  position after the move (for check and mate). Reading matches the text
  against one regular expression per language, then filters the legal
  moves by what the text says, and answers with the one move that fits
  or the reason none does. A line is split on whitespace, each token
  stripped of its move number and read onto the game in turn.
- **Key interfaces**:

| Need                                       | Call                                        | Module    |
| ------------------------------------------ | ------------------------------------------- | --------- |
| A move as text                             | `toSan(position, move, language)`           | `san.ts`  |
| Text as a move, or why not                 | `parseSan(position, text, language)`        | `san.ts`  |
| A move with its number, for the panel      | `numberedSan(position, move, language)`     | `line.ts` |
| A game as a line, for the move list        | `formatLine(game, language)`                | `line.ts` |
| A line onto a game, legal prefix on failure | `playLine(game, text, language)`           | `line.ts` |
| One move onto a game, throwing on failure  | `playSan(game, text, language)`             | `line.ts` |
| Stored English text in another language    | `translateSan(text, from, to)`              | `san.ts`  |
| The letters                                | `PIECE_LETTERS`, `pieceLetter`, `pieceOfLetter` | `san.ts` |

- **Mechanisms**:
  - *Writing* (8.2.3.3): a pawn move is its square, a pawn capture the
    pawn's file and "x" first, en passant like any capture without a
    suffix, a promotion "=" and the piece; a piece move its letter, the
    disambiguation, "x" when capturing, the square; castling "O-O" and
    "O-O-O" with the letter O, as PGN writes it, although FIDE Appendix
    C.13 writes zeros. Then "+" or "#" (8.2.3.5), judged by the rules
    engine on the position after the move.
  - *Disambiguation* (8.2.3.4) counts the other pieces of the same type
    that can legally move to the square: the originating file if it
    tells them apart, else the rank, else the whole square. A pinned
    piece has no legal move there and so does not count.
  - *Reading* is lenient where the form varies and strict where meaning
    does: "x" and ":" are both capture signs and neither is checked;
    "+", "#", "!" and "?" are skipped; "0-0", "o-o" and "O-O" all castle;
    "e8Q" reads as "e8=Q"; an originating file or rank is honoured even
    when not needed ("Ngf3"). A letter of another language is malformed.
    A text that fits more than one legal move is ambiguous, one that
    fits none has no such move, a promotion without its piece is
    promotion-required. A pawn text without a file is a plain advance,
    so "d5" never means "exd5".
  - *Lines*: tokens split on whitespace; a move number glued ("2.Nf3") or
    on its own ("2." then "Nf3"), with dots or an ellipsis, is stripped.
    Before each move the game's status is asked, so a line past
    checkmate, stalemate or an automatic draw stops with `game-over`
    rather than throwing. The result carries the game reached and, when
    reading stopped, the token as written, how many moves preceded it,
    and the reason.
  - *Languages* are a table: `PIECE_LETTERS` holds five capital Latin
    letters per language; the reading pattern and the translation are
    built from it, so a new language is one row and nothing else.

### Invariants

- Every legal move of a position has one written form per language, and
  it reads back as that move. Enforced by: `src/domain/san.test.ts`
  ("writing and reading agree"), over all six perft positions and the
  disambiguation cases, in every notation language.
- A written move is the PGN export form, article by article: pawn and
  piece moves, captures, promotion, castling, disambiguation order, check
  and mate signs. Enforced by: `src/domain/san.test.ts`, the test named
  after each 8.2.3 subsection.
- A letter of another language is malformed, never read as a different
  piece. Enforced by: `src/domain/san.test.ts` ("reads the language's
  letters and no other language's").
- A canonical line reads and writes back unchanged, in every language.
  Enforced by: `src/domain/line.test.ts` ("writes back what it read").
- A line stops at the first move that cannot be played, keeps the legal
  prefix and names the token and the reason. Enforced by:
  `src/domain/line.test.ts`.
- Each app language names its notation. Enforced by: the
  `Record<Language, NotationLanguage>` in `src/i18n/notation.ts`, a type
  error when a language is added without one.
- A notation file without a test fails `npm run check`. Enforced by: the
  per-file coverage threshold in `vite.config.ts`.

## Alternatives considered

- **A letters table as the argument** instead of a language name.
  Rejected on 2026-10-23: the maintainer asked for the language as the
  argument; a name keeps call sites short and the list of languages in
  one place. Cost: a new notation is a code change, not data from the
  caller.
- **Notation keyed by the app's `Language`** in `src/i18n/`. Rejected:
  notation needs the rules engine, which the domain holds, and the
  domain may not import `i18n`; and a notation is a chess convention,
  not an interface language. `src/i18n/notation.ts` maps one to the
  other, so a future language with no notation of its own (English
  letters are common across languages) is a map entry.
- **A regular expression per call versus a cached one.** Built per call:
  the expression is small and a line of forty moves builds forty; the
  cost is microseconds and the code has no module state.
- **Strict reading**, refusing "Bxb5" for a non-capture or "Nf3" without
  its check sign. Rejected: the app's own text is always canonical, and
  the content author's or a visitor's text should play when its meaning
  is clear. Ambiguity stays strict because its meaning is not.
- **Zeros for castling** ("0-0", FIDE Appendix C.13). Written with the
  letter O, as the PGN standard and every chess tool do; read either way.
- **A default queen for "e8"**, as the explorer promotes. Rejected: the
  explorer writes "e8=Q" in its address and shows it so; a text without
  the piece is incomplete and says so, and the caller decides what to do.

## Cross-cutting concerns

- Performance, measured 2026-10-23 on a forty-ply line: writing takes
  about 3 ms, reading about 50 ms. Writing generates the legal moves once
  per piece move for disambiguation and once more when the move checks.
  Reading asks the game's status before each move, and `play` asks it
  again; each status walks every position so far for repetitions, so
  reading grows with the square of the length. Accepted: the explorer
  reads a line once per page load and writes one per move. A bulk import
  or a search would be a new design.
- Security, privacy, operability: nothing to decide. Pure functions, no
  I/O.

## Amendments

None yet.
