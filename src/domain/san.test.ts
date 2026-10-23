// Standard Algebraic Notation: written as the PGN export format writes it
// (section 8.2.3) in the letters of each notation language, and read back
// leniently (docs/design-docs/chess-notation.md).
import { describe, expect, test } from "vitest";
import { parseFen, STARTING_FEN } from "./fen.ts";
import { legalMoves, type Move } from "./moves.ts";
import {
  NOTATION_LANGUAGES,
  parseSan,
  pieceLetter,
  pieceOfLetter,
  toSan,
  translateSan,
  type NotationLanguage,
} from "./san.ts";

function written(fen: string, move: Move, language: NotationLanguage = "en"): string {
  return toSan(parseFen(fen), move, language);
}

function read(fen: string, text: string, language: NotationLanguage = "en") {
  return parseSan(parseFen(fen), text, language);
}

function moveOf(from: Move["from"], to: Move["to"], promotion?: Move["promotion"]): Move {
  return promotion === undefined ? { from, to } : { from, to, promotion };
}

/** After 1.e4 d5. */
const E4_D5 = "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2";
/** After 1.e4 d5 2.e5 f5: the e-pawn may capture en passant on f6. */
const EN_PASSANT = "rnbqkbnr/ppp1p1pp/8/3pPp2/8/8/PPPP1PPP/RNBQKBNR w KQkq f6 0 3";
/** The Ruy Lopez after 2...Nc6: the bishop goes to b5 next. */
const RUY_NC6 = "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3";
/** The Ruy Lopez after 3...a6: White may take the knight or castle. */
const RUY_A6 = "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4";
/** Before 4.Qxf7#, the scholar's mate. */
const SCHOLAR = "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4";
/** Before 2...Qh4#, the fool's mate. */
const FOOL = "rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq g3 0 2";
/** Knights on b1 and f3 can both reach d2. */
const TWO_KNIGHTS = "4k3/8/8/8/8/5N2/8/1N2K3 w - - 0 1";
/** Rooks on a1 and a5 can both reach a3. */
const TWO_ROOKS = "4k3/8/8/R7/8/8/8/R3K3 w - - 0 1";
/** Queens on a1, a7 and g1 can all reach d4: the standard's case for both coordinates. */
const THREE_QUEENS = "4K3/Q7/8/8/8/7k/8/Q5Q1 w - - 0 1";
/** Knights on d2 and g1 can both reach f3, but the d2 knight is pinned to the king. */
const PINNED_KNIGHT = "3r3k/8/8/8/8/8/3N4/3K2N1 w - - 0 1";
const CASTLING = "r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1";
/** A white pawn on a7 and a black knight on b8: the pawn promotes, by moving or by taking. */
const PROMOTION = "1n2k3/P7/8/8/8/8/8/4K3 w - - 0 1";

describe("toSan", () => {
  test("8.2.3.3: a pawn move is its square; a pawn capture starts with the pawn's file", () => {
    expect(written(STARTING_FEN, moveOf("e2", "e4"))).toBe("e4");
    expect(written(E4_D5, moveOf("e4", "d5"))).toBe("exd5");
  });

  test("an en passant capture is written as a capture, without a suffix", () => {
    expect(written(EN_PASSANT, moveOf("e5", "f6"))).toBe("exf6");
  });

  test("8.2.3.3: a promotion ends with = and the piece", () => {
    expect(written(PROMOTION, moveOf("a7", "a8", "queen"))).toBe("a8=Q");
    expect(written(PROMOTION, moveOf("a7", "a8", "knight"))).toBe("a8=N");
    expect(written(PROMOTION, moveOf("a7", "b8", "rook"))).toBe("axb8=R+");
    expect(written(PROMOTION, moveOf("a7", "a8", "queen"), "de")).toBe("a8=D");
    expect(written(PROMOTION, moveOf("a7", "a8", "knight"), "de")).toBe("a8=S");
  });

  test("8.2.3.2: a piece is its letter in the language; a capture has an x", () => {
    expect(written(STARTING_FEN, moveOf("g1", "f3"))).toBe("Nf3");
    expect(written(STARTING_FEN, moveOf("g1", "f3"), "de")).toBe("Sf3");
    expect(written(RUY_NC6, moveOf("f1", "b5"))).toBe("Bb5");
    expect(written(RUY_NC6, moveOf("f1", "b5"), "de")).toBe("Lb5");
    expect(written(RUY_A6, moveOf("b5", "c6"))).toBe("Bxc6");
    expect(written(RUY_A6, moveOf("b5", "c6"), "de")).toBe("Lxc6");
  });

  test("8.2.3.4: the file tells identical pieces apart first", () => {
    expect(written(TWO_KNIGHTS, moveOf("b1", "d2"))).toBe("Nbd2");
    expect(written(TWO_KNIGHTS, moveOf("f3", "d2"))).toBe("Nfd2");
    expect(written(TWO_KNIGHTS, moveOf("b1", "d2"), "de")).toBe("Sbd2");
  });

  test("8.2.3.4: then the rank", () => {
    expect(written(TWO_ROOKS, moveOf("a1", "a3"))).toBe("R1a3");
    expect(written(TWO_ROOKS, moveOf("a5", "a3"))).toBe("R5a3");
  });

  test("8.2.3.4: then the whole square", () => {
    expect(written(THREE_QUEENS, moveOf("a1", "d4"))).toBe("Qa1d4");
    expect(written(THREE_QUEENS, moveOf("a7", "d4"))).toBe("Q7d4");
    expect(written(THREE_QUEENS, moveOf("g1", "d4"))).toBe("Qgd4");
  });

  test("8.2.3.4: a pinned piece does not count as an alternative", () => {
    expect(written(PINNED_KNIGHT, moveOf("g1", "f3"))).toBe("Nf3");
  });

  test("8.2.3.3: castling is O-O and O-O-O in every language", () => {
    for (const language of NOTATION_LANGUAGES) {
      expect(written(CASTLING, moveOf("e1", "g1"), language)).toBe("O-O");
      expect(written(CASTLING, moveOf("e1", "c1"), language)).toBe("O-O-O");
    }
  });

  test("8.2.3.5: + for check, # for checkmate, after any kind of move", () => {
    expect(written("4k3/8/8/8/8/8/8/4K2R w K - 0 1", moveOf("h1", "h8"))).toBe("Rh8+");
    expect(written("5k2/8/8/8/8/8/8/4K2R w K - 0 1", moveOf("e1", "g1"))).toBe("O-O+");
    expect(written(SCHOLAR, moveOf("h5", "f7"))).toBe("Qxf7#");
    expect(written(SCHOLAR, moveOf("h5", "f7"), "de")).toBe("Dxf7#");
    expect(written(FOOL, moveOf("d8", "h4"))).toBe("Qh4#");
  });

  test("throws with the reason for a move that is not legal", () => {
    expect(() => written(STARTING_FEN, moveOf("e2", "e5"))).toThrow(/e2e5: not-a-move/);
    expect(() => written(STARTING_FEN, moveOf("e4", "e5"))).toThrow(/e4e5: empty-square/);
    expect(() => written(STARTING_FEN, moveOf("e7", "e5"))).toThrow(/e7e5: wrong-colour/);
    expect(() => written(PROMOTION, moveOf("a7", "a8"))).toThrow(/a7a8: promotion-required/);
  });
});

describe("parseSan", () => {
  test("reads each kind of move", () => {
    expect(read(STARTING_FEN, "e4")).toEqual({ ok: true, move: moveOf("e2", "e4") });
    expect(read(STARTING_FEN, "Nf3")).toEqual({ ok: true, move: moveOf("g1", "f3") });
    expect(read(E4_D5, "exd5")).toEqual({ ok: true, move: moveOf("e4", "d5") });
    expect(read(EN_PASSANT, "exf6")).toEqual({ ok: true, move: moveOf("e5", "f6") });
    expect(read(CASTLING, "O-O")).toEqual({ ok: true, move: moveOf("e1", "g1") });
    expect(read(CASTLING, "O-O-O")).toEqual({ ok: true, move: moveOf("e1", "c1") });
    expect(read(PROMOTION, "a8=Q")).toEqual({ ok: true, move: moveOf("a7", "a8", "queen") });
    expect(read(PROMOTION, "axb8=R")).toEqual({ ok: true, move: moveOf("a7", "b8", "rook") });
  });

  test("reads the language's letters and no other language's", () => {
    expect(read(RUY_NC6, "Lb5", "de")).toEqual({ ok: true, move: moveOf("f1", "b5") });
    expect(read(STARTING_FEN, "Sf3", "de")).toEqual({ ok: true, move: moveOf("g1", "f3") });
    expect(read(SCHOLAR, "Dxf7#", "de")).toEqual({ ok: true, move: moveOf("h5", "f7") });
    expect(read(PROMOTION, "a8=D", "de")).toEqual({ ok: true, move: moveOf("a7", "a8", "queen") });
    expect(read(RUY_NC6, "Bb5", "de")).toEqual({ ok: false, reason: "malformed" });
    expect(read(STARTING_FEN, "Nf3", "de")).toEqual({ ok: false, reason: "malformed" });
    expect(read(STARTING_FEN, "Sf3", "en")).toEqual({ ok: false, reason: "malformed" });
    expect(read(RUY_NC6, "Lb5", "en")).toEqual({ ok: false, reason: "malformed" });
    expect(read(PROMOTION, "a8=Q", "de")).toEqual({ ok: false, reason: "malformed" });
  });

  test("accepts the decorations without checking them", () => {
    const capture = { ok: true, move: moveOf("b5", "c6") };
    for (const text of ["Bxc6", "Bxc6+", "B:c6", "Bc6", "Bxc6!?", "Bxc6#", " Bxc6 "]) {
      expect(read(RUY_A6, text), text).toEqual(capture);
    }
    const castle = { ok: true, move: moveOf("e1", "g1") };
    for (const text of ["O-O", "0-0", "o-o", "O-O+"]) {
      expect(read(RUY_A6, text), text).toEqual(castle);
    }
    expect(read(PROMOTION, "a8Q")).toEqual({ ok: true, move: moveOf("a7", "a8", "queen") });
    expect(read(PROMOTION, "axb8R+")).toEqual({ ok: true, move: moveOf("a7", "b8", "rook") });
  });

  test("honours an originating file or rank that is not needed", () => {
    const knight = { ok: true, move: moveOf("g1", "f3") };
    for (const text of ["Ngf3", "N1f3", "Ng1f3"]) {
      expect(read(STARTING_FEN, text), text).toEqual(knight);
    }
    expect(read(STARTING_FEN, "e2e4")).toEqual({ ok: true, move: moveOf("e2", "e4") });
    expect(read(STARTING_FEN, "Nbf3")).toEqual({ ok: false, reason: "no-such-move" });
  });

  test("a pawn capture must name the pawn's file", () => {
    expect(read(E4_D5, "d5")).toEqual({ ok: false, reason: "no-such-move" });
  });

  test("requires the disambiguation the position needs", () => {
    expect(read(TWO_KNIGHTS, "Nd2")).toEqual({ ok: false, reason: "ambiguous" });
    expect(read(TWO_KNIGHTS, "Nbd2")).toEqual({ ok: true, move: moveOf("b1", "d2") });
    expect(read(THREE_QUEENS, "Qd4")).toEqual({ ok: false, reason: "ambiguous" });
    expect(read(THREE_QUEENS, "Qad4")).toEqual({ ok: false, reason: "ambiguous" });
    expect(read(THREE_QUEENS, "Q1d4")).toEqual({ ok: false, reason: "ambiguous" });
    expect(read(THREE_QUEENS, "Qa1d4")).toEqual({ ok: true, move: moveOf("a1", "d4") });
    expect(read(PINNED_KNIGHT, "Nf3")).toEqual({ ok: true, move: moveOf("g1", "f3") });
  });

  test("requires the promotion piece and allows no king", () => {
    expect(read(PROMOTION, "a8")).toEqual({ ok: false, reason: "promotion-required" });
    expect(read(PROMOTION, "axb8")).toEqual({ ok: false, reason: "promotion-required" });
    expect(read(PROMOTION, "a8=K")).toEqual({ ok: false, reason: "no-such-move" });
    expect(read(STARTING_FEN, "e4=Q")).toEqual({ ok: false, reason: "no-such-move" });
  });

  test("reports text that is not a move as malformed", () => {
    for (const text of ["", "x", "Nf9", "nf3", "Bb5 Nf3", "4e", "O-O-O-O", "e4-e5", "Kxe"]) {
      expect(read(STARTING_FEN, text), JSON.stringify(text)).toEqual({ ok: false, reason: "malformed" });
    }
  });

  test("reports a well-formed move that is not legal", () => {
    for (const text of ["e5", "Nf6", "O-O", "O-O-O", "Ke2", "Qxf7", "exd5"]) {
      expect(read(STARTING_FEN, text), text).toEqual({ ok: false, reason: "no-such-move" });
    }
  });
});

describe("writing and reading agree", () => {
  const POSITIONS = [
    STARTING_FEN,
    "r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq -",
    "8/2p5/3p4/KP5r/1R3p1k/8/4P1P1/8 w - - 0 1",
    "r3k2r/Pppp1ppp/1b3nbN/nP6/BBP1P3/q4N2/Pp1P2PP/R2Q1RK1 w kq - 0 1",
    "r2q1rk1/pP1p2pp/Q4n2/bbp1p3/Np6/1B3NBn/pPPP1PPP/R3K2R b KQ - 0 1",
    "rnbq1k1r/pp1Pbppp/2p5/8/2B5/8/PPP1NnPP/RNBQK2R w KQ - 1 8",
    "r4rk1/1pp1qppp/p1np1n2/2b1p1B1/2B1P1b1/P1NP1N2/1PP1QPPP/R4RK1 w - - 0 10",
    THREE_QUEENS,
    PINNED_KNIGHT,
  ];

  test.each(NOTATION_LANGUAGES)(
    "every legal move of the perft positions reads back as itself in %s, and no two read alike",
    (language) => {
      for (const fen of POSITIONS) {
        const position = parseFen(fen);
        const seen = new Set<string>();
        for (const move of legalMoves(position)) {
          const san = toSan(position, move, language);
          expect(seen.has(san), `${san} written twice in ${fen}`).toBe(false);
          seen.add(san);
          expect(parseSan(position, san, language), `${san} in ${fen}`).toEqual({ ok: true, move });
        }
      }
    },
  );
});

describe("translateSan", () => {
  test("replaces the piece letters and nothing else", () => {
    expect(translateSan("1.e4 e5 2.Nf3 Nc6 3.Bb5", "en", "de")).toBe("1.e4 e5 2.Sf3 Sc6 3.Lb5");
    expect(translateSan("1.e4 e5 2.Sf3 Sc6 3.Lb5", "de", "en")).toBe("1.e4 e5 2.Nf3 Nc6 3.Bb5");
    expect(translateSan("Kg1 Qxf7# Rad1 e8=Q+ O-O-O exd6", "en", "de")).toBe(
      "Kg1 Dxf7# Tad1 e8=D+ O-O-O exd6",
    );
  });

  test("leaves text in its own language alone", () => {
    expect(translateSan("3.Bb5", "en", "en")).toBe("3.Bb5");
    expect(translateSan("3.Lb5", "de", "de")).toBe("3.Lb5");
  });
});

describe("the letters", () => {
  test("pieceLetter and pieceOfLetter are inverses in each language", () => {
    expect(pieceLetter("knight", "en")).toBe("N");
    expect(pieceLetter("knight", "de")).toBe("S");
    expect(pieceLetter("king", "de")).toBe("K");
    expect(pieceOfLetter("N", "en")).toBe("knight");
    expect(pieceOfLetter("S", "de")).toBe("knight");
    expect(pieceOfLetter("S", "en")).toBeUndefined();
    expect(pieceOfLetter("n", "en")).toBeUndefined();
    expect(pieceOfLetter("P", "en")).toBeUndefined();
  });
});
