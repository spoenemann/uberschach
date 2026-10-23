import type { OpeningTexts } from "../book.ts";

// English prose for g3-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.g3 Nf6 2.Bg2": {
    strategy:
      "Completes the fianchetto and aims the bishop along the long diagonal at the centre and " +
      "b7. After 2...d5 the game transposes into the lines of 1...d5, usually with Nf3, O-O " +
      "and then d3 and e4 or c4; against Indian set-ups White can still choose between " +
      "English, Réti and King's Indian Attack structures. The cost is a centre still " +
      "unoccupied, which Black can claim with ...d5 and ...c5.",
  },

  "1.g3 Nf6 2.Nf3": {
    strategy:
      "Develops the knight towards the centre and prepares quick castling, with Bg2 and O-O " +
      "to follow. White keeps the choice between c4 for a Réti or English set-up, d3 with " +
      "Nbd2 and e4 for a King's Indian Attack, or d4 with c4 for a Catalan structure. The " +
      "knight also covers e5, so Black cannot play an immediate ...e5 and usually answers " +
      "with ...d5 or ...g6.",
  },

  "1.g3 Nf6 2.c4": {
    strategy:
      "Fights for d5 from the flank and keeps Nc3, Nf3 and d4 all available. Against ...e6 " +
      "and ...d5 White can add d4 for a Catalan set-up; against ...g6 the game is an English " +
      "Opening with both king's bishops fianchettoed, against ...c5 a Symmetrical English and " +
      "against ...e5 a reversed Sicilian. The pawn occupies no central square yet, so Black " +
      "still chooses the structure.",
  },

  "1.g3 Nf6 2.d4": {
    strategy:
      "Takes the centre with a pawn and prepares Bg2, Nf3 and O-O, with c4 to follow for a " +
      "Catalan-like set-up. It is sound, but less flexible than 2.Nf3 or 2.c4, since the " +
      "d-pawn is committed before Black's set-up is clear and Black can answer ...d5 or ...c5 " +
      "at once.",
  },

  "1.g3 Nf6 2.d3": {
    strategy:
      "Supports e4 and opens the c1-bishop, steering towards Bg2, Nf3 and e4 in King's Indian " +
      "Attack style. It is sound but modest: Black takes the centre with ...d5 and ...e5, and " +
      "White's game stays passive until e4 can be pushed.",
  },

  "1.g3 Nf6 2.Nc3": {
    strategy:
      "Develops the knight, covers d5 and e4 and supports a later e4. It blocks the c-pawn, " +
      "though, so English and Catalan plans with c4 are off for now, and Black can take space " +
      "with ...d5 at once and chase the knight with ...d4.",
  },

  "1.g3 Nf6 2.c3": {
    strategy:
      "Prepares d4 with a solid pawn chain, but develops nothing and takes c3 from the " +
      "queen's knight. The pawn does not fight for d5, so Black takes the centre with ...d5 " +
      "and develops freely.",
  },

  "1.g3 Nf6 2.e3": {
    strategy:
      "Supports d4 and prepares a quiet set-up with Bg2, Ne2 and d4. It is sound but passive: " +
      "once d4 follows, the e3-pawn shuts in the c1-bishop, which then needs b3 and Bb2 to " +
      "come out, and Black takes the centre with ...d5 and ...e5.",
  },

  "1.g3 Nf6 2.b3": {
    strategy:
      "Prepares Bb2, so that with Bg2 both bishops bear on the centre from the long diagonals " +
      "in a double fianchetto. It is sound but slow in the centre: Black can claim space with " +
      "...d5 and ...e5 or contest the a1–h8 diagonal with ...g6 and ...Bg7.",
  },

  "1.g3 Nf6 2.f4": {
    strategy:
      "Controls e5 and heads for a Bird's Opening with Bg2, Nf3 and O-O, the Leningrad Dutch " +
      "set-up with colours reversed. It is sound but loosens the king's position: with the " +
      "f-pawn gone, the g1–a7 diagonal lies open towards a castled king, and Black takes the " +
      "centre with ...d5 and ...c5.",
  },

  "1.g3 Nf6 2.Nh3": {
    strategy:
      "Develops the knight to the rim, where it keeps the f-pawn free and can go to f4, but " +
      "covers no central square. Black takes the centre with ...d5 and ...e5, and Nf3 would " +
      "develop the same piece to a better square.",
  },

  "1.g3 Nf6 2.Bh3": {
    strategy:
      "Develops the bishop on the c8–h3 diagonal instead of fianchettoing it. After ...d5 or " +
      "...d6 it faces Black's light-squared bishop, and either the bishops are traded, " +
      "leaving the light squares weakened by g3 without their defender, or White retreats to " +
      "g2 a tempo down.",
  },

  "1.g3 Nf6 2.Na3": {
    strategy:
      "Develops the knight to the rim, where it eyes b5 and c4 but guards nothing in the " +
      "centre. Black takes the centre with ...d5, which also covers c4, and Nc3 would develop " +
      "the same piece with more effect.",
  },

  "1.g3 Nf6 2.b4": {
    strategy:
      "Grabs queenside space and prepares Bb2, but nothing defends the pawn: after ...e6 the " +
      "f8-bishop attacks it, and White must spend another tempo on a3, c3 or b5 or give it " +
      "up. Black meanwhile takes the centre with ...d5.",
  },

  "1.g3 Nf6 2.a3": {
    strategy:
      "Spends a tempo on a queenside pawn move that prepares b4 but does nothing for the " +
      "centre or development. Black takes space with ...d5 and ...e5.",
  },

  "1.g3 Nf6 2.a4": {
    strategy:
      "Gains queenside space and controls b5, but spends a tempo on a rim pawn that does " +
      "nothing for the centre or development. Black occupies the centre with ...d5 and ...e5 " +
      "and develops freely.",
  },

  "1.g3 Nf6 2.f3": {
    strategy:
      "Prepares e4, but takes f3 from the g1-knight, blocks the long diagonal the g3 " +
      "fianchetto was meant to open and loosens the g1–a7 diagonal. Black takes the centre " +
      "with ...d5 and ...e5.",
  },

  "1.g3 Nf6 2.h3": {
    strategy:
      "A waiting move that stops ...Ng4 and ...Bg4 but costs a tempo with the centre and " +
      "development untouched. Black takes the centre with ...d5 and ...e5 while White has " +
      "nothing to show for it.",
  },

  "1.g3 Nf6 2.h4": {
    strategy:
      "Gains kingside space for h5, but with no ...g6 to attack yet it spends a tempo on a " +
      "rim pawn while the centre and development wait. It also loosens the pawns in front of " +
      "White's own king, and Black takes the centre with ...d5 and ...e5.",
  },

  "1.g3 Nf6 2.g4": {
    strategy:
      "Hangs a pawn: nothing defends g4, so 2...Nxg4 wins it for free, and the kingside is " +
      "left weakened.",
  },

  "1.g3 Nf6 2.e4": {
    strategy:
      "Leaves the e-pawn undefended: after 2...Nxe4 3.Bg2 attacks the knight, but ...d5 holds " +
      "it, and Black keeps a clean extra pawn.",
  },

  "1.g3 Nf6": {
    name: "Hungarian Opening: Indian Defence",
  },
};
