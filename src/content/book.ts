// The opening book: what the content modules say about positions and the
// moves from them, keyed by position so that a transposition finds the same
// entry (docs/product-specs/opening-explorer.md, The database). A module is
// JSON under lines/, the chess data once in a neutral file and the prose once
// per language beside it (docs/localization.md, Opening content), read and
// parsed by files.ts. Both name a position by the canonical line that reaches
// it, in English notation ("1.e4 e5 2.Nf3"; "" is the initial position).
// buildBook plays every line through the rules engine, checks that data and
// prose agree, and keys the book by positionKey; a disagreement throws,
// naming the entry. The app never builds the book: scripts/content/serve.mjs
// builds it when the app is built and writes the served form (serve.ts),
// which the app fetches chunk by chunk (loader.ts), and openings.test.ts
// builds it with every check (docs/adr/0001-opening-book-as-fetched-json.md).

import { applyMove } from "../domain/apply.ts";
import { newGame, positionKey, type Game } from "../domain/game.ts";
import { formatLine, playLine } from "../domain/line.ts";
import type { Move } from "../domain/moves.ts";
import type { Position } from "../domain/position.ts";
import { parseSan, toSan } from "../domain/san.ts";
import { SUPPORTED_LANGUAGES, type Language } from "../i18n/language.ts";

/** 5 Best, 4 Good, 3 Playable, 2 Inaccuracy, 1 Mistake: the author's judgement, not an engine's. */
export type Rating = 1 | 2 | 3 | 4 | 5;

export interface MoveData {
  /** The move as the engine writes it from the position, in English letters: "e4", "Nf3". */
  readonly san: string;
  readonly rating: Rating;
}

export interface PositionData {
  /** The canonical line to the position, as formatLine writes it in English; "" for the initial position. */
  readonly line: string;
  /** Where the background's historical statements were checked. Not shown on screen. */
  readonly sources?: readonly string[];
  /** The moves written about from here. Absent or empty when the book ends here. */
  readonly moves?: readonly MoveData[];
}

/**
 * The prose at one line: for the position it reaches, its name and
 * background (for the initial position, the introduction); for its last
 * move, the strategic meaning. A module gives name and background only
 * where it declares the position, and strategy only where it declares the
 * move. Written in the language's own notation: a German text says "Sf3".
 */
export interface LineTexts {
  readonly name?: string;
  readonly background?: string;
  readonly strategy?: string;
}

export type OpeningTexts = Readonly<Record<string, LineTexts>>;

export interface OpeningModule {
  /** The module's file stem, lines/<id>.json, and the id of its served chunk: "root", "e4", "e4-e5". */
  readonly id: string;
  readonly positions: readonly PositionData[];
  /** English is complete; another language may lack any text, and the English then shows. */
  readonly texts: Readonly<Record<Language, OpeningTexts>>;
}

/** A text in English and in each other language that has it. */
export type Text = Readonly<{ en: string } & Partial<Record<Language, string>>>;

export function textIn(text: Text, language: Language): string {
  return text[language] ?? text.en;
}

export interface BookMove {
  /** In English letters; the screen writes it from the position in the visitor's notation. */
  readonly san: string;
  readonly move: Move;
  readonly rating: Rating;
  readonly strategy: Text;
  /** The name of the position the move reaches, when the book names it; what the candidate list shows. */
  readonly leadsTo: Text | undefined;
}

export interface BookPosition {
  readonly line: string;
  /** The id of the module that declares the position. */
  readonly module: string;
  readonly name: Text | undefined;
  readonly background: Text | undefined;
  readonly sources: readonly string[];
  readonly moves: readonly BookMove[];
}

/** Every position in the book by its positionKey. */
export type OpeningBook = ReadonlyMap<string, BookPosition>;

export function lookup(book: OpeningBook, position: Position): BookPosition | undefined {
  return book.get(positionKey(position));
}

type Texts = OpeningModule["texts"];

/** The lines a module declares, as positions and as moves; the prose may use no others. */
interface Declared {
  readonly positions: Set<string>;
  readonly moves: Set<string>;
}

/** A declared position before its moves are read: the moves wait until every position is known, for leadsTo. */
interface Draft {
  readonly key: string;
  readonly game: Game;
  readonly data: PositionData;
  readonly module: OpeningModule;
  readonly name: Text | undefined;
  readonly background: Text | undefined;
}

/** The games already played, by the line that reaches them: a line costs one move beyond its parent's. */
type Games = Map<string, Game>;

/** Builds the book from the modules. Throws, naming the entry, when data and prose disagree. */
export function buildBook(modules: readonly OpeningModule[]): OpeningBook {
  const games: Games = new Map([["", newGame()]]);
  const drafts = new Map<string, Draft>();
  for (const module of modules) {
    const declared: Declared = { positions: new Set(), moves: new Set() };
    for (const data of module.positions) {
      const game = gameAt(data.line, data.line, games);
      const key = positionKey(game.position);
      const twin = drafts.get(key);
      if (twin !== undefined) {
        throw new Error(
          `Position "${data.line}" is already in the book as "${twin.data.line}": declare it once and ` +
            `let the other line reach it by transposition`,
        );
      }
      declared.positions.add(data.line);
      declareMoves(game, data, declared);
      drafts.set(key, {
        key,
        game,
        data,
        module,
        name: optionalText(module.texts, data.line, "name"),
        background: optionalText(module.texts, data.line, "background"),
      });
    }
    checkProse(module.texts, declared);
  }
  const book = new Map<string, BookPosition>();
  for (const draft of drafts.values()) {
    book.set(draft.key, {
      line: draft.data.line,
      module: draft.module.id,
      name: draft.name,
      background: draft.background,
      sources: draft.data.sources ?? [],
      moves: (draft.data.moves ?? []).map((move) => bookMove(draft, move, drafts)),
    });
  }
  return book;
}

/** A bare move number, "1." or "2...", which a line may write apart from its move. */
const MOVE_NUMBER = /^\d+(?:\.+|…)/;

/**
 * The game after the line, which must be legal and written canonically.
 * `whole` is the declared line, named in an error. A line is played from the
 * game of its parent, the line without its last token.
 */
function gameAt(line: string, whole: string, games: Games): Game {
  const known = games.get(line);
  if (known !== undefined) return known;
  const cut = line.lastIndexOf(" ");
  const before = gameAt(line.slice(0, Math.max(cut, 0)), whole, games);
  const token = line.slice(cut + 1);
  const san = token.replace(MOVE_NUMBER, "");
  if (san === "") {
    games.set(line, before);
    return before;
  }
  const parsed = parseSan(before.position, san, "en");
  if (!parsed.ok) {
    throw new Error(`Line "${whole}" cannot be played: "${token}" is ${parsed.reason}`);
  }
  if (token !== numbered(before.position, toSan(before.position, parsed.move, "en"))) {
    const canonical = formatLine(playLine(newGame(), whole, "en").game, "en");
    throw new Error(`Line "${whole}" must be written as "${canonical}"`);
  }
  const position = applyMove(before.position, parsed.move);
  const game: Game = {
    position,
    positions: [...before.positions, position],
    moves: [...before.moves, parsed.move],
  };
  games.set(line, game);
  return game;
}

/** The move as a line writes it from this position: "3.Bb5" by White, "3...a6" by Black is written "a6" within a line. */
function numbered(position: Position, san: string): string {
  return position.turn === "white" ? `${position.fullmoveNumber}.${san}` : san;
}

/** The line after the move, as `formatLine` writes it for a line from the initial position. */
function childLine(game: Game, line: string, san: string): string {
  return line === "" ? numbered(game.position, san) : `${line} ${numbered(game.position, san)}`;
}

/** Declares the lines of a position's moves, so the prose can be checked against them. */
function declareMoves(game: Game, data: PositionData, declared: Declared): void {
  for (const move of data.moves ?? []) {
    const line = childLine(game, data.line, move.san);
    if (declared.moves.has(line)) {
      throw new Error(`Move "${move.san}" from "${data.line}" is listed twice`);
    }
    declared.moves.add(line);
  }
}

function bookMove(draft: Draft, data: MoveData, drafts: ReadonlyMap<string, Draft>): BookMove {
  const { game, module } = draft;
  const from = draft.data.line;
  const parsed = parseSan(game.position, data.san, "en");
  if (!parsed.ok) {
    throw new Error(`Move "${data.san}" from "${from}" is ${parsed.reason}`);
  }
  const canonical = toSan(game.position, parsed.move, "en");
  if (canonical !== data.san) {
    throw new Error(`Move "${data.san}" from "${from}" must be written as "${canonical}"`);
  }
  const line = childLine(game, from, data.san);
  const strategy = optionalText(module.texts, line, "strategy");
  if (strategy === undefined) {
    throw new Error(`Move "${line}" has no English strategy text; add one under that key`);
  }
  const reached = drafts.get(positionKey(applyMove(game.position, parsed.move)));
  return { san: data.san, move: parsed.move, rating: data.rating, strategy, leadsTo: reached?.name };
}

/** The field in every language that has it, or undefined when English lacks it. */
function optionalText(texts: Texts, line: string, field: keyof LineTexts): Text | undefined {
  const en = texts.en[line]?.[field];
  const text: { en: string } & Partial<Record<Language, string>> = { en: en ?? "" };
  const others: Language[] = [];
  for (const language of SUPPORTED_LANGUAGES) {
    const value = texts[language][line]?.[field];
    if (language === "en" || value === undefined) continue;
    text[language] = value;
    others.push(language);
  }
  if (en !== undefined) return text;
  if (others.length > 0) {
    throw new Error(`"${line}" has a ${field} in ${others.join(", ")} but not in English`);
  }
  return undefined;
}

/** Every prose key names a declared position or move, and carries only the fields that fit. */
function checkProse(texts: Texts, declared: Declared): void {
  for (const language of SUPPORTED_LANGUAGES) {
    for (const [line, entry] of Object.entries(texts[language])) {
      checkEntry(language, line, entry, declared);
    }
  }
}

function checkEntry(language: Language, line: string, entry: LineTexts, declared: Declared): void {
  const isPosition = declared.positions.has(line);
  const isMove = declared.moves.has(line);
  if (!isPosition && !isMove) {
    throw new Error(`${language}: "${line}" is neither a position nor a move of this module`);
  }
  if (!isPosition && (entry.name !== undefined || entry.background !== undefined)) {
    throw new Error(
      `${language}: name and background of "${line}" belong to the module that declares the position`,
    );
  }
  if (!isMove && entry.strategy !== undefined) {
    throw new Error(`${language}: the strategy of "${line}" belongs to the module that declares the move`);
  }
}
