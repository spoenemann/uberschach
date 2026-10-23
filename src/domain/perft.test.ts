// Move generation against the reference node counts of
// https://www.chessprogramming.org/Perft_Results (read 2026-10-23): the
// number of legal move sequences of a given length, and at depth 2 how many
// of the last moves are captures, en passant, castlings, promotions, checks
// and checkmates. Depth 2 is a deliberate limit on test time. To check deeper
// after a change to move generation, raise the depths below locally and run
// this file alone (do not commit): the reference counts are 8 902 / 97 862 /
// 2 812 / 9 467 / 9 467 / 62 379 / 89 890 at depth 3 for the seven rows in
// order (about 1.5 s together), 197 281 for the initial position and 43 238
// for position 3 at depth 4 (about 1 s). All matched on 2026-10-23.
import { describe, expect, test } from "vitest";
import { applyMove, isCastling, isEnPassantCapture, type Move } from "./apply.ts";
import { isInCheck } from "./attacks.ts";
import { parseFen } from "./fen.ts";
import { legalMoves } from "./moves.ts";
import type { Position } from "./position.ts";

interface Counts {
  nodes: number;
  captures: number;
  enPassant: number;
  castles: number;
  promotions: number;
  checks: number;
  checkmates: number;
}

function perft(position: Position, depth: number): Counts {
  const counts: Counts = {
    nodes: 0, captures: 0, enPassant: 0, castles: 0, promotions: 0, checks: 0, checkmates: 0,
  };
  for (const move of legalMoves(position)) {
    if (depth === 1) {
      count(counts, position, move);
    } else {
      const sub = perft(applyMove(position, move), depth - 1);
      for (const key of Object.keys(counts) as (keyof Counts)[]) counts[key] += sub[key];
    }
  }
  return counts;
}

function count(counts: Counts, position: Position, move: Move): void {
  const piece = position.placement.get(move.from);
  if (piece === undefined) throw new Error(`no piece on ${move.from}`);
  const after = applyMove(position, move);
  counts.nodes += 1;
  if (isEnPassantCapture(position, piece, move)) counts.enPassant += 1;
  if (position.placement.has(move.to) || isEnPassantCapture(position, piece, move)) counts.captures += 1;
  if (isCastling(piece, move) !== undefined) counts.castles += 1;
  if (move.promotion !== undefined) counts.promotions += 1;
  if (isInCheck(after)) {
    counts.checks += 1;
    if (legalMoves(after).length === 0) counts.checkmates += 1;
  }
}

describe("perft", () => {
  test.each([
    ["initial position", "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", 20, 400],
    ["position 2, Kiwipete", "r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq -", 48, 2039],
    ["position 3", "8/2p5/3p4/KP5r/1R3p1k/8/4P1P1/8 w - - 0 1", 14, 191],
    ["position 4", "r3k2r/Pppp1ppp/1b3nbN/nP6/BBP1P3/q4N2/Pp1P2PP/R2Q1RK1 w kq - 0 1", 6, 264],
    ["position 4 mirrored", "r2q1rk1/pP1p2pp/Q4n2/bbp1p3/Np6/1B3NBn/pPPP1PPP/R3K2R b KQ - 0 1", 6, 264],
    ["position 5", "rnbq1k1r/pp1Pbppp/2p5/8/2B5/8/PPP1NnPP/RNBQK2R w KQ - 1 8", 44, 1486],
    ["position 6", "r4rk1/1pp1qppp/p1np1n2/2b1p1B1/2B1P1b1/P1NP1N2/1PP1QPPP/R4RK1 w - - 0 10", 46, 2079],
  ])("%s: node counts at depth 1 and 2", (_name, fen, depth1, depth2) => {
    const position = parseFen(fen);
    expect(perft(position, 1).nodes).toBe(depth1);
    expect(perft(position, 2).nodes).toBe(depth2);
  });

  test("initial position: no captures, checks or special moves within two plies", () => {
    expect(perft(parseFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"), 2)).toEqual({
      nodes: 400, captures: 0, enPassant: 0, castles: 0, promotions: 0, checks: 0, checkmates: 0,
    });
  });

  test("Kiwipete: the kinds of move at depth 1 and 2", () => {
    const position = parseFen("r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq -");
    expect(perft(position, 1)).toEqual({
      nodes: 48, captures: 8, enPassant: 0, castles: 2, promotions: 0, checks: 0, checkmates: 0,
    });
    expect(perft(position, 2)).toEqual({
      nodes: 2039, captures: 351, enPassant: 1, castles: 91, promotions: 0, checks: 3, checkmates: 0,
    });
  });

  test("position 4: promotions and castlings at depth 2", () => {
    const position = parseFen("r3k2r/Pppp1ppp/1b3nbN/nP6/BBP1P3/q4N2/Pp1P2PP/R2Q1RK1 w kq - 0 1");
    expect(perft(position, 2)).toEqual({
      nodes: 264, captures: 87, enPassant: 0, castles: 6, promotions: 48, checks: 10, checkmates: 0,
    });
  });
});
