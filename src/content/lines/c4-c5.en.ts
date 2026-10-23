import type { OpeningTexts } from "../book.ts";

// English prose for c4-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.c4 c5 2.Nf3": {
    strategy:
      "Develops the king's knight, controls d4 and e5 and prepares d4 with a knight " +
      "recapture: after 2...Nf6 3.d4 cxd4 4.Nxd4 the game resembles an Open Sicilian with " +
      "White's pawn on c4 instead of e4. Black can also choose 2...Nc6 with ...g6 and ...Bg7, " +
      "or the Hedgehog with ...e6, ...b6 and ...Bb7. White keeps Nc3 and g3 in reserve.",
  },

  "1.c4 c5 2.Nc3": {
    name: "English Opening: Symmetrical Variation, Normal Variation",
    background:
      "ECO files 1.c4 c5 2.Nc3 as A34, the Normal Variation of the Symmetrical English; with " +
      "2...Nc6 it becomes the Two Knights Variation (A35), and 3.g3 then gives the Fianchetto " +
      "Variation (A36).",
    strategy:
      "Develops the queen's knight and puts d5 and e4 under watch: after 2...d5 3.cxd5 Black " +
      "cannot recapture with the queen, since Nxd5 wins it. White usually follows with g3 and " +
      "Bg2, then Nf3 or e3 and Nge2, keeping the d4 break and a later e4 available. Black " +
      "often mirrors with ...Nc6, ...g6 and ...Bg7, and the symmetry can last for many moves.",
  },

  "1.c4 c5 2.g3": {
    strategy:
      "Prepares Bg2, which presses on b7 and the centre along the long diagonal, and keeps " +
      "both Nc3 and Nf3 available. After 2...Nc6 3.Nc3 g6 4.Bg2 Bg7 it reaches the Fianchetto " +
      "Variation, where White follows with Nf3 and O-O. Black can also set up with ...Nc6 and " +
      "...e5, since no white knight on f3 yet attacks e5.",
  },

  "1.c4 c5 2.b3": {
    strategy:
      "Prepares Bb2 on the long diagonal, aiming at e5 and g7, with e3 and Nf3 or Nc3 to " +
      "follow. The plan is sound but slow: no knight is out yet, so Black can blunt the " +
      "bishop with ...Nc6 and ...e5 or contest the diagonal with ...g6 and ...Bg7.",
  },

  "1.c4 c5 2.d3": {
    strategy:
      "Prepares e4 with pawn support and frees the c1-bishop, usually followed by g3, Bg2 and " +
      "e4 for a closed set-up. It is solid but modest, and Black can take the centre with " +
      "...Nc6 and ...e5 or with ...d5 before White has developed a piece.",
  },

  "1.c4 c5 2.e3": {
    strategy:
      "Opens the f1-bishop and prepares d4, so that White can recapture with the e-pawn: " +
      "after 2...Nf6 3.d4 cxd4 4.exd4 d5 the pawn structure of the Panov–Botvinnik Attack in " +
      "the Caro-Kann appears. The move is solid but modest, and Black can also set up with " +
      "...Nc6, ...g6 and ...Bg7 or take space with ...e5.",
  },

  "1.c4 c5 2.e4": {
    strategy:
      "Takes space with pawns on c4 and e4, clamping d5, and White usually completes the " +
      "set-up with Nc3, g3, Bg2 and Nge2. The price is a permanent hole on d4, which no white " +
      "pawn can cover any more, so Black aims ...Nc6, ...g6, ...Bg7 and ...Nd4 at it. The " +
      "move is sound, but it hands Black a clear plan.",
  },

  "1.c4 c5 2.d4": {
    strategy:
      "Challenges the c-pawn before a knight can recapture on d4. After 2...cxd4 3.Qxd4 Nc6 " +
      "the queen is attacked and loses a tempo, and after 3.Nf3 Black can hold the pawn with " +
      "3...e5, since 4.Nxe5 Qa5+ wins the knight.",
  },

  "1.c4 c5 2.b4": {
    name: "English Opening: Wing Gambit",
    strategy:
      "Gives up the b-pawn to deflect the c-pawn from the fight for d4. After 2...cxb4 White " +
      "plays a3 or d4 for open lines and quick development, but Black keeps a sound extra " +
      "pawn and can consolidate with ...Nf6 and ...e6, so the compensation is thin.",
  },

  "1.c4 c5 2.a3": {
    strategy:
      "Prepares b4, but spends a tempo on a rim pawn that does nothing for the centre or " +
      "development. Black develops with ...Nc6 and ...Nf6 and takes space with ...d5 or " +
      "...e5, and nothing in the position makes a3 urgent.",
  },

  "1.c4 c5 2.a4": {
    strategy:
      "Stops ...b5 and gains queenside space, but weakens b4 and spends a tempo that does " +
      "nothing for the centre or development. Black plays ...Nc6 and ...Nf6, or ...d5, and " +
      "develops freely.",
  },

  "1.c4 c5 2.f3": {
    strategy:
      "Prepares e4 but blocks the g1-knight's best square and weakens e3 and the e1-h4 " +
      "diagonal. It develops nothing, and Black takes the centre with ...Nc6 and ...e5 or " +
      "with ...d5.",
  },

  "1.c4 c5 2.f4": {
    strategy:
      "Takes e5 for a Dutch-style structure, but develops no piece and weakens e3 and the " +
      "e1-h4 diagonal. Black answers ...Nc6, ...g6 and ...d6, or hits the centre with ...d5, " +
      "and White's kingside is loosened before the pieces are out.",
  },

  "1.c4 c5 2.g4": {
    strategy:
      "Gains kingside space but empties g2, opening the long diagonal towards the rook on h1. " +
      "After 2...d5 the c8-bishop attacks the g4-pawn, and 3.cxd5 Qxd5 also hits the rook, so " +
      "White must spend another move on f3, Nf3 or Rg1.",
  },

  "1.c4 c5 2.h3": {
    strategy:
      "Takes g4 from a black bishop or knight but spends a tempo on a rim pawn that the " +
      "position does not call for. Black takes the centre with ...Nc6, ...d5 or ...e5 while " +
      "White's development stands still.",
  },

  "1.c4 c5 2.h4": {
    strategy:
      "Gains kingside space and prepares h5, but does nothing for the centre or development. " +
      "Black takes the centre with ...Nc6 and ...d5 and develops freely.",
  },

  "1.c4 c5 2.Na3": {
    strategy:
      "Heads for c2, where it supports d4, or for b5, but on a3 the knight guards no central " +
      "square and blocks the a-pawn. Black takes the centre with ...Nc6, ...d5 or ...e5 while " +
      "the knight needs a second move to reach a useful post.",
  },

  "1.c4 c5 2.Nh3": {
    strategy:
      "Puts the knight on the rim, where it eyes f4 and g5. Once ...d5 or ...d6 opens the " +
      "c8-bishop, ...Bxh3 and gxh3 doubles White's kingside pawns, and the knight does " +
      "nothing for the centre.",
  },

  "1.c4 c5 2.Qc2": {
    strategy:
      "Brings the queen out before any piece has moved. It supports c4 and a later e4, but " +
      "Black develops with ...Nc6 and ...Nf6 and can gain a tempo later with ...Nb4, while " +
      "White's own pieces are still at home.",
  },

  "1.c4 c5 2.Qb3": {
    strategy:
      "Develops the queen before any piece and threatens nothing, since the bishop guards b7. " +
      "It also takes b3 from the b-pawn, so a fianchetto is no longer possible, while Black " +
      "plays ...Nc6 and ...Nf6 with a free game.",
  },

  "1.c4 c5 2.Qa4": {
    strategy:
      "Brings the queen out early to a4, where it bears only on the guarded pawns on a7 and " +
      "d7 and threatens nothing. Black develops with ...Nc6 and ...Nf6, and ...a6 followed by " +
      "...b5 can harass the queen, while White's own development falls behind.",
  },

  "1.c4 c5": {
    name: "English Opening: Symmetrical Variation",
    background:
      "So named because both players have advanced the c-pawn two squares. Alongside the " +
      "Reversed Sicilian (1...e5) it is one of the broad categories of defence to the English " +
      "Opening; ECO classes it as A30 to A39.",
  },
};
