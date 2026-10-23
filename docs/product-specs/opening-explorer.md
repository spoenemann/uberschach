# Opening explorer

Exploring openings by playing them. Specified with the maintainer on
2026-10-23, before any code; every statement here is the maintainer's
answer or a recommendation they accepted. Each promise gets a pointer to
the test that keeps it when the capability is built, as the other specs
have.

## Intent

The visitor learns an opening by walking into it. They make every move,
White's and Black's, and after each one the app says what it knows about
that move, where the line now stands, and which moves are worth knowing
next. The visitor is always in control: the app never moves a piece and
never refuses a legal move, and the information is offered where it helps
without crowding the board. Working means the maintainer plays a line they
half remember and comes away knowing why each move is played, what it aims
for and risks, and which replies matter.

## Promises

### Reaching it

- The explorer is a card on the entry page (`product-brief.md`, Entry
  page) and lives at the address `#/openings`.
- The line played, and the board's orientation, are part of the address.
  A reload shows the same position, its information and the whole line,
  and the address sent as a link opens the same for the reader. The
  address is replaced as the line changes, so the browser's back button
  returns to the entry page rather than undoing a move.
- An address whose moves are not all legal from the initial position opens
  at the last position its legal prefix reaches.

### Making moves

- The explorer opens at the initial position, White at the bottom, with
  the first moves offered as Candidates below describes. A flip control
  turns the board around.
- The visitor makes every move, for White and for Black in turn, in one of
  three ways: selecting a piece and then its target square; activating a
  candidate's arrow on the board; activating a candidate in the list.
- While a piece is selected, its legal target squares are marked.
  Selecting another own piece moves the selection; selecting the same
  piece or an unmarked square clears it.
- What is legal is decided by the rules engine
  (`docs/design-docs/chess-rules-engine.md`). A target the piece cannot
  legally reach does nothing. Any legal move can be made, whether the
  database rates it well, badly or not at all.
- The board highlights the from and to squares of the last move.
- When the rules end the game (checkmate, stalemate, a dead position, the
  fifth repetition, seventy-five moves), the panel says so in words and no
  further move is accepted. Stepping back still works.

### The database

- The app ships a database of openings as files in the repository
  (`src/content/`): positions, and for each position the moves written
  about from it. Nothing is fetched or computed at runtime.
- The database is keyed by position, not by move order, so a position
  reached by transposition shows the same information. Two positions are
  the same by the rule the chess rules spec states under 9.2.3: the same
  side to move, the same pieces on the same squares, the same castling
  rights, the same en passant possibility. (`src/content/book.test.ts`)
- Information belongs either to a move or to the position it reaches.
  Every move in the database carries a rating from 1 to 5 and a text on
  its strategic meaning: the approach it takes, what it aims for, what it
  risks or concedes. A position may carry the name of the opening or
  variation it belongs to and a short historical background; the initial
  position carries an introduction instead, which is what the visitor
  reads before the first move. (`src/content/book.test.ts`)
- From a position in the database, every legal move is covered: each is
  rated and has its text, so no move the visitor can make from a known
  position goes unexplained. (`src/content/openings.test.ts`)
- Only moves rated 4 and 5 are followed. The position after a move rated
  1 to 3 carries its name and background and no moves, so the book ends
  there; a position that a move rated 4 or 5 also reaches, by
  transposition, keeps its moves. (`src/content/openings.test.ts`)
- The book goes as deep as a move still belongs to the opening by public
  usage: as far as theory and the literature name the line as an opening
  or variation. Where that is for a line is decided from public knowledge,
  its history and its terminology, and recorded in the content's exec plan
  (`docs/exec-plans/active/0002-opening-explorer.md`).
- The ratings are 5 Best, 4 Good, 3 Playable, 2 Inaccuracy, 1 Mistake.
  A rating is the author's judgement of the move for the side that plays
  it: 5 and 4 are moves worth learning, 3 is sound but not recommended, 2
  gives something away, 1 gives a lot away or falls for a trap. It is not
  an engine evaluation.
- Every rating and text is read and approved by the maintainer before it
  ships, whoever drafted it. A historical statement is verified against
  public information before it ships and names its source in the data
  file; the source is not shown on screen. (`src/content/openings.test.ts`:
  every background names a source)
- Every entry has its prose in English; German follows
  `docs/localization.md` (Opening content): it may lag, text by text, and
  the English then shows. (`src/content/book.test.ts`: a German text
  without its English is refused)

### After every move: the panel

- Beside the board, below it at phone width, the panel shows for the last
  move: its notation with the move number (3.Bb5, 3...a6) in the visitor's
  language's piece letters; its rating as a word and a colour, red for 1
  through to green for 5; the name of the opening or variation the
  position now belongs to; the background; the strategic text. The word is
  always there: colour is never the only signal.
- The name is the position's own when it has one, otherwise the last name
  on the way there, so a quiet move inside a named variation still shows
  where it is.
- Before the first move the panel shows the initial position's
  introduction.
- When the current position is not in the database, the panel says that
  the line has left the openings the app knows; when it is, but no moves
  are written from it, that the book ends here. A move not in the
  database is shown by its notation alone, unrated. In both cases no
  candidates are offered, the known information is one step back, and a
  move that brings the line into a known position, by transposition,
  brings the information back.

### Candidates

- From a database position, the moves rated 4 and 5 are the candidates.
  They are drawn as arrows on the board from the piece to its square,
  rating 5 strong and rating 4 lighter, both distinct from the last-move
  highlight. Activating an arrow plays the move.
- The same candidates are listed in the panel, each a button showing the
  move in notation, the name of the position it leads to when there is
  one, and its rating word. Activating one plays it. The list is how the
  candidates reach the keyboard, touch and screen readers: whatever the
  arrows show, the list shows.
- The list shows no more than that, and the panel holds one move's
  information and one list. A candidate's texts are read after it is
  played; nothing is previewed, nothing stacks.
- Moves rated 1 to 3 are not offered as candidates. Played, they are rated
  and explained like any other.

### The line

- The moves played form one line, shown as a move list in notation with
  move numbers, the current move highlighted. Activating a move in the
  list jumps to it.
- Back and forward step one move; reset goes to the initial position.
  None of the three discards the line: forward walks it again.
- The left and right arrow keys step back and forward.
- Stepping to a move shows the board, the panel and the candidates as
  they were when it was played.
- Making a move while not at the end of the line replaces the moves after
  the current one. The explorer keeps one line, not a tree.
- The explorer stores nothing in the browser. The line lives in the
  address, and a visit starts wherever its address says.

### Languages

- Everything the explorer says exists in both languages
  (`docs/localization.md`); content prose follows the rule under The
  database above. Notation is localized on
  the screen; in the address it reads the same in every language.

## Deliberately not promised

- No engine: ratings and texts are the authors'. Nothing is evaluated,
  and a position off the book gets no opinion.
- No opponent: the app never moves a piece.
- No coverage promise: which openings and how deep is content, and it
  grows. The arrows at each position are the map; there is no index of
  covered openings on the screen.
- No preview: a candidate's texts are read after it is played. The list
  carries notation, name and rating only.
- No tree: one line. Branching off earlier in the line drops what came
  after.
- No drag and drop: select the piece, then the square.
- No under-promotion: a pawn reaching the last rank becomes a queen.
- Not a game: no result is recorded and no draw claim (FIDE 9.2, 9.3;
  `docs/design-docs/chess-rules-engine.md`) is offered. The explorer stops only where the rules
  allow no move.
- No training: no question asked, no score, no progress. Nothing is
  stored in the browser.
- No PGN or FEN in or out. The address is the only way in and out.
- No sound.
- The address carries the line and the orientation, not the language
  (`docs/localization.md`, What a visitor gets).

## Pointers

- `product-brief.md` — the entry page the explorer is reached from.
- `docs/design-docs/chess-rules-engine.md` — legality, how a game ends,
  when positions are the same.
- `docs/design-docs/chess-notation.md` — how a move is written in the
  visitor's language and how the moves in the address are read.
- `src/content/book.ts` — the database's format and how it is checked;
  `src/content/firstMoves.ts` and its language files are the first content.
- `docs/exec-plans/active/0002-opening-explorer.md` — the build, its
  progress and its decisions, including how deep each line goes.
- `docs/localization.md` — the languages promised, translated text and
  the layout of per-language content.
- `docs/design-docs/design-system.md` — board highlights, legal-move
  marks, feedback colours. The rating colours and the arrows are a
  dated amendment there when they are built.
