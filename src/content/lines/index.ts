// Every content module in this folder, in the order the book is built (../openings.ts).

import type { OpeningModule } from "../book.ts";
import { e4 } from "./e4.ts";
import { d4 } from "./d4.ts";
import { nf3 } from "./Nf3.ts";
import { c4 } from "./c4.ts";
import { g3 } from "./g3.ts";
import { b3 } from "./b3.ts";

export const LINES: readonly OpeningModule[] = [
  e4,
  d4,
  nf3,
  c4,
  g3,
  b3,
];
