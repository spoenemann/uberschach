import type { OpeningTexts } from "../book.ts";

// English prose for g3-g6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.g3 g6 2.Bg2": {
    strategy:
      "Completes the fianchetto: the bishop on the long diagonal presses on b7 and on the " +
      "centre from a distance. After 2...Bg7 White chooses mainly between 3.c4 with Nc3, d3, " +
      "e4 and Nge2, the Botvinnik System of the English Opening, and 3.Nf3 with O-O for a " +
      "King's Indian Attack set-up. White stays flexible but leaves Black free to claim the " +
      "centre first with ...d5, ...c5 or ...e5.",
  },

  "1.g3 g6 2.c4": {
    strategy:
      "Claims queenside space, controls d5 and reaches the position of 1.c4 g6 2.g3, an " +
      "English Opening with an early g3. Bg2 and Nc3 follow, then d3 and e4 in the Botvinnik " +
      "System, or Nf3 and d4. The pawn occupies no central square, so Black answers with " +
      "...Bg7 and claims a share of the centre with ...e5 or ...c5.",
  },

  "1.g3 g6 2.Nf3": {
    strategy:
      "Develops the knight, guarding d4 and e5, and reaches the position of 1.Nf3 g6 2.g3. " +
      "With Bg2 and O-O to follow, White builds with d3 and e4 for a King's Indian Attack or " +
      "with c4 for a Réti or English set-up. Black develops with ...Bg7 and can take central " +
      "space with ...d5 before White has chosen.",
  },

  "1.g3 g6 2.b3": {
    strategy:
      "Prepares Bb2 to contest the long diagonal, but 2...Bg7 hits the rook on a1 through the " +
      "empty b2 square, and 3.Bb2 Bxb2 loses a piece, since nothing guards b2. White must " +
      "first block the diagonal with c3, d4 or Nc3, so the double fianchetto costs an extra " +
      "move and loosens the queenside.",
  },

  "1.g3 g6 2.c3": {
    strategy:
      "Prepares d4 with pawn support and blocks the long diagonal in advance of ...Bg7. It " +
      "develops no piece and takes c3 from the queen's knight, while Black develops with " +
      "...Bg7 and takes the centre with ...d5 or ...e5. The move is sound but passive.",
  },

  "1.g3 g6 2.d3": {
    strategy:
      "Supports a later e4, opens the c1-bishop and prepares Bg2, Nf3 and O-O for a King's " +
      "Indian Attack set-up. It is sound but slow, since it takes no central space and lets " +
      "Black develop with ...Bg7 and claim the centre with ...e5 or ...d5.",
  },

  "1.g3 g6 2.d4": {
    strategy:
      "Takes the centre at once and reaches the position of 1.d4 g6 2.g3. With Bg2, Nf3 and " +
      "c4 the game heads for King's Indian or Grünfeld structures with the bishop on g2, once " +
      "...Nf6 is in. It is sound but gives up the flexibility of 1.g3, and Black hits the " +
      "centre at once with ...Bg7 and ...c5.",
  },

  "1.g3 g6 2.e3": {
    strategy:
      "Prepares a compact set-up with Bg2, Ne2, O-O and d3 while keeping d4 available. It is " +
      "solid but slow: the e3-pawn shuts in the c1-bishop, and Black develops with ...Bg7 and " +
      "...Nf6 and takes the centre with ...d5 and ...e5.",
  },

  "1.g3 g6 2.e4": {
    strategy:
      "Occupies the centre at once and reaches the position of 1.e4 g6 2.g3. Bg2 then backs " +
      "the pawn along the long diagonal, and d3, Nf3 and O-O complete a King's Indian Attack " +
      "set-up. Nothing guards e4 yet, so Black can strike at it with ...d5, when 3.exd5 Qxd5 " +
      "hits the rook on h1, or build with ...Bg7 and ...d6.",
  },

  "1.g3 g6 2.f4": {
    strategy:
      "Takes control of e5 and prepares Nf3, Bg2 and O-O in a Bird-style set-up. The pawn " +
      "weakens e4 and opens the g1-a7 diagonal before the king is safe, so Black develops " +
      "with ...Bg7 and aims at the centre with ...d5 or ...c5.",
  },

  "1.g3 g6 2.Nc3": {
    strategy:
      "Develops the queen's knight and covers d5 and e4, with Bg2, d3 and e4 to follow. The " +
      "knight blocks the c-pawn, so c4 has to wait, and Black can take the centre with ...d5 " +
      "or ...e5 after ...Bg7. The move is sound, but it commits the knight before White has " +
      "chosen a pawn set-up.",
  },

  "1.g3 g6 2.a3": {
    strategy:
      "Spends a tempo on a rim pawn to prepare b4 and does nothing for the centre or " +
      "development. Black develops with ...Bg7 and takes space with ...d5 or ...e5 while " +
      "White has yet to develop a piece.",
  },

  "1.g3 g6 2.a4": {
    strategy:
      "Gains queenside space and takes b5 from Black, but loosens b4 and the b3 square and " +
      "does nothing for the centre or development. Black builds with ...Bg7 and ...d5 or " +
      "...e5 at leisure.",
  },

  "1.g3 g6 2.b4": {
    strategy:
      "Grabs queenside space but leaves b2 empty, so 2...Bg7 attacks the rook on a1 at once " +
      "and 3.Bb2 Bxb2 loses a piece. White must spend a move on c3, d4 or Nc3, and the " +
      "b4-pawn becomes a target for ...a5.",
  },

  "1.g3 g6 2.f3": {
    strategy:
      "Blocks the long diagonal of the bishop meant for g2 and takes f3 from the king's " +
      "knight. It also opens the g1-a7 diagonal towards White's king and does nothing for the " +
      "centre, so Black develops with ...Bg7 and takes it with ...d5 or ...e5.",
  },

  "1.g3 g6 2.h3": {
    strategy:
      "Takes g4 from Black's bishop and knight but spends a tempo on a rim pawn and does " +
      "nothing for the centre or development. Black plays ...Bg7 and ...d5 or ...e5 and takes " +
      "the centre first.",
  },

  "1.g3 g6 2.h4": {
    strategy:
      "Prepares h5 against the g6-pawn, but Black can stop it with ...h5 or simply develop " +
      "with ...Bg7 and take the centre with ...d5. The advance leaves the g3-pawn guarded " +
      "only by f2 and develops nothing.",
  },

  "1.g3 g6 2.Na3": {
    strategy:
      "Develops the knight to the rim, where it eyes b5 and c4 but blocks the a-pawn and " +
      "guards nothing in the centre. Black takes the centre with ...d5, which also covers c4, " +
      "and develops with ...Bg7 while the knight needs more moves to find a post.",
  },

  "1.g3 g6 2.Bh3": {
    strategy:
      "Puts the bishop on h3, where it attacks only the guarded d7-pawn, instead of on the " +
      "long diagonal. After ...d5 the c8-bishop opposes it, so the bishops come off or White " +
      "spends another move on Bg2, while Black develops with ...Bg7.",
  },

  "1.g3 g6 2.Nh3": {
    strategy:
      "Heads for f4 or g5, but the knight stands on the rim, away from the centre, instead of " +
      "on f3. Black develops with ...Bg7 and takes the centre with ...d5 or ...e5, the latter " +
      "also taking f4 from the knight.",
  },

  "1.g3 g6 2.g4": {
    strategy:
      "Moves the g-pawn a second time, loosens the kingside for good and leaves the pawn on " +
      "g4 unguarded. After ...d5 or ...d6 the c8-bishop attacks it, as does ...h5, and White " +
      "must spend further moves on h3, f3, Bh3 or e3 just to keep it.",
  },

  "1.g3 g6": {
    name: "Hungarian Opening: Symmetrical Variation",
  },
};
