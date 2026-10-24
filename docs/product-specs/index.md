# Product specs

One spec per capability: intent, behaviour promises, deliberate non-promises.
Never restated code or task state. A spec is written before its capability is
built and changes in the same commit as the behaviour.

- [product-brief.md](product-brief.md) — what Uberschach is, for whom, what
  success means, the entry page, what v1 leaves out.
- [opening-explorer.md](opening-explorer.md) — the first capability, built
  from `docs/exec-plans/completed/0002-opening-explorer.md`: the visitor
  plays both sides, the app rates and explains each move from a database
  keyed by position, and shows the moves worth knowing next. The screen,
  the entry page and the book exist, written through White's second move
  and Black's reply to it and along the named lines to their twelfth move;
  deeper lines are content that can be added later.

The rules engine has no spec of its own: its promise is the FIDE Laws of
Chess, an external text, and what it decides and leaves out is in
`docs/design-docs/chess-rules-engine.md`.
