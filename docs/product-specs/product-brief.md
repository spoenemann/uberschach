# Product brief: uberschach

Intent, users, success criteria and v1 scope, from the project interview with
the maintainer on 2026-10-22, audience corrected on 2026-10-23. Every
statement here is the maintainer's answer; nothing is inferred from code.
Per-capability specs appear in this folder spec-first, as features are built.

## What is being built

A chess training app that runs in the browser.

It may eventually train several things. v1 starts with just one capability: an
**opening explainer**. The maintainer will provide the details that specify
this feature later; until then it has no spec and no code.

## Users

Built first for the maintainer's own training, and published on GitHub Pages,
so it is open to anyone who finds it useful. No accounts and no server-side
user data: whatever the app stores stays in the visitor's browser.

## Success in 6 months

The maintainer uses it for their own training.

## Out of scope for v1

- Playing against humans online.
- Native or mobile packaging. The browser is the only target.
- Accounts and cloud sync.

## Open questions

- What the opening explainer does (behaviour, content source, interaction).
  The maintainer specifies it before it is built; it then gets its own spec
  here.
- Which capabilities follow the opening explainer.
