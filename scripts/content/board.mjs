// The board tool, for checking what a note claims about a position (README.md). Usage:
//   node scripts/content/board.mjs show "<line>"                the board after the line, side to move, legal moves
//   node scripts/content/board.mjs square "<line>" <square>     what stands on the square and which pieces attack it
//   node scripts/content/board.mjs piece "<line>" <square>      the squares the piece on that square attacks
// Lines are in English notation as the keys write them: "1.e4 e5 2.Nf3", or "" for the start.
import { gameAt, legalMoves, toSan } from "./lib.mjs";

const LETTER = { king: "k", queen: "q", rook: "r", bishop: "b", knight: "n", pawn: "p" };
const FILES = "abcdefgh";
const [command, line = "", square] = process.argv.slice(2);
const position = gameAt(line).position;
const placement = position.placement;

const at = (f, r) => (f >= 0 && f < 8 && r >= 0 && r < 8 ? `${FILES[f]}${r + 1}` : undefined);
const coords = (sq) => [FILES.indexOf(sq[0]), Number(sq[1]) - 1];
const name = (p) => `${p.color} ${p.type}`;

function attacked(from) {
  const piece = placement.get(from);
  const [f, r] = coords(from);
  const steps = (list) => list.map(([df, dr]) => at(f + df, r + dr)).filter(Boolean);
  const rays = (dirs) => {
    const out = [];
    for (const [df, dr] of dirs) {
      for (let i = 1; ; i++) {
        const sq = at(f + df * i, r + dr * i);
        if (!sq) break;
        out.push(sq);
        if (placement.has(sq)) break;
      }
    }
    return out;
  };
  const ortho = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const diag = [[1, 1], [1, -1], [-1, 1], [-1, -1]];
  switch (piece.type) {
    case "knight": return steps([[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]]);
    case "king": return steps([...ortho, ...diag]);
    case "pawn": return steps(piece.color === "white" ? [[1, 1], [-1, 1]] : [[1, -1], [-1, -1]]);
    case "bishop": return rays(diag);
    case "rook": return rays(ortho);
    case "queen": return rays([...ortho, ...diag]);
  }
}

if (command === "show") {
  for (let r = 7; r >= 0; r--) {
    let row = `${r + 1} `;
    for (let f = 0; f < 8; f++) {
      const p = placement.get(at(f, r));
      row += " " + (p ? (p.color === "white" ? LETTER[p.type].toUpperCase() : LETTER[p.type]) : ".");
    }
    console.log(row);
  }
  console.log("   a b c d e f g h   (uppercase White, lowercase Black)");
  console.log(`${position.turn} to move`);
  console.log(`legal moves: ${legalMoves(position).map((m) => toSan(position, m, "en")).join(" ")}`);
} else if (command === "square" && square) {
  const p = placement.get(square);
  console.log(`${square}: ${p ? name(p) : "empty"}`);
  for (const color of ["white", "black"]) {
    const by = [...placement].filter(([sq, q]) => q.color === color && attacked(sq).includes(square));
    console.log(`attacked by ${color}: ${by.map(([sq, q]) => `${q.type} ${sq}`).join(", ") || "nothing"}`);
  }
} else if (command === "piece" && square && placement.has(square)) {
  console.log(`${name(placement.get(square))} on ${square} attacks: ${attacked(square).join(" ")}`);
} else {
  console.error('usage: board.mjs show "<line>" | square "<line>" <sq> | piece "<line>" <sq>');
  process.exit(1);
}
