// The opening book: what the content files say about positions and the
// moves from them, indexed by position so that a transposition finds the
// same entry (docs/product-specs/opening-explorer.md, The database). A
// content module holds the chess data once, in a neutral file, and the prose
// once per language beside it (docs/localization.md, Opening content). Both
// name a position by the canonical line that reaches it, in English notation
// ("1.e4 e5 2.Nf3"; "" is the initial position): buildBook plays every line
// through the rules engine, checks that data and prose agree, and keys the
// book by positionKey. Content is static, so a disagreement throws at import
// and src/content/openings.test.ts fails npm run check before it ships.

import { newGame, play, positionKey, type Game } from "../domain/game.ts";
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
}

export interface BookPosition {
  readonly line: string;
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

/** Builds the book from the modules. Throws, naming the entry, when data and prose disagree. */
export function buildBook(modules: readonly OpeningModule[]): OpeningBook {
  const book = new Map<string, BookPosition>();
  for (const module of modules) {
    const declared: Declared = { positions: new Set(), moves: new Set() };
    for (const data of module.positions) {
      const game = gameAt(data.line);
      const key = positionKey(game.position);
      const twin = book.get(key);
      if (twin !== undefined) {
        throw new Error(
          `Position "${data.line}" is already in the book as "${twin.line}": declare it once and ` +
            `let the other line reach it by transposition`,
        );
      }
      declared.positions.add(data.line);
      book.set(key, {
        line: data.line,
        name: optionalText(module.texts, data.line, "name"),
        background: optionalText(module.texts, data.line, "background"),
        sources: data.sources ?? [],
        moves: (data.moves ?? []).map((move) => bookMove(game, data.line, move, module.texts, declared)),
      });
    }
    checkProse(module.texts, declared);
  }
  return book;
}

/** The game after the line, which must be legal and written canonically. */
function gameAt(line: string): Game {
  const result = playLine(newGame(), line, "en");
  if (result.failure !== null) {
    throw new Error(
      `Line "${line}" cannot be played: "${result.failure.text}" is ${result.failure.reason}`,
    );
  }
  const canonical = formatLine(result.game, "en");
  if (canonical !== line) {
    throw new Error(`Line "${line}" must be written as "${canonical}"`);
  }
  return result.game;
}

// eslint-disable-next-line max-params -- the module's texts and its declared lines travel with every move
function bookMove(game: Game, from: string, data: MoveData, texts: Texts, declared: Declared): BookMove {
  const parsed = parseSan(game.position, data.san, "en");
  if (!parsed.ok) {
    throw new Error(`Move "${data.san}" from "${from}" is ${parsed.reason}`);
  }
  const canonical = toSan(game.position, parsed.move, "en");
  if (canonical !== data.san) {
    throw new Error(`Move "${data.san}" from "${from}" must be written as "${canonical}"`);
  }
  const line = formatLine(play(game, parsed.move), "en");
  if (declared.moves.has(line)) {
    throw new Error(`Move "${data.san}" from "${from}" is listed twice`);
  }
  declared.moves.add(line);
  const strategy = optionalText(texts, line, "strategy");
  if (strategy === undefined) {
    throw new Error(`Move "${line}" has no English strategy text; add one under that key`);
  }
  return { san: data.san, move: parsed.move, rating: data.rating, strategy };
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
