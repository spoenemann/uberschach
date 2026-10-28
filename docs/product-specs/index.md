# Product specs

One spec per capability: intent, behaviour promises, deliberate non-promises.
Never restated code or task state. A spec is written before its capability is
built and changes in the same commit as the behaviour.

- [product-brief.md](product-brief.md) — what Uberschach is, for whom, what
  success means, the entry page, what v1 leaves out.
- [opening-explorer.md](opening-explorer.md) — the opening explorer: the
  visitor plays both sides, the app rates and explains each move from a
  book keyed by position, and shows the moves worth knowing next. What the
  book covers and how deep, and how its texts are reviewed, is under The
  database.

The rules engine has no spec of its own: its promise is the FIDE Laws of
Chess, an external text, and what it decides and leaves out is in
`docs/design-docs/chess-rules-engine.md`.
