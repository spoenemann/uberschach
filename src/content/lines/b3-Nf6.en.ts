import type { OpeningTexts } from "../book.ts";

// English prose for b3-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.b3 Nf6 2.Bb2": {
    strategy:
      "Puts the bishop on the long diagonal at once, where it bears on e5 and the knight on " +
      "f6, and on g7 and h8 once the knight moves. Black can contest the diagonal with ...g6 " +
      "and ...Bg7, but 2...g6 allows 3.e4, because 3...Nxe4 loses the rook to Bxh8. Otherwise " +
      "Black builds with ...e6 and ...d5 or ...b6, and White follows with e3, Nf3 and c4 or " +
      "d4.",
  },

  "1.b3 Nf6 2.e3": {
    strategy:
      "Opens the f1-bishop's diagonal and supports a later d4, keeping Bb2, Nf3 and Be2 or " +
      "Bd3 available in any order. It often transposes into the lines with 2.Bb2, for example " +
      "against ...d5 and ...e6, or against ...e5 and ...Nc6. The cost is an early commitment: " +
      "a later e4 now takes two moves, and Black chooses the set-up first.",
  },

  "1.b3 Nf6 2.Nf3": {
    strategy:
      "Develops the knight, covers e5 and keeps c4, d4 and e3 available, with Bb2 to follow. " +
      "Since 2...e5 would lose a pawn to Nxe5, Black builds with ...d5, ...e6 or ...b6 " +
      "instead. Black can also fianchetto with ...g6 and ...Bg7 undisturbed: without the " +
      "bishop on b2, e4 simply drops a pawn to ...Nxe4.",
  },

  "1.b3 Nf6 2.c4": {
    strategy:
      "Places the c-pawn on c4, supported by b3, where it controls d5, with Bb2, Nc3 and Nf3 " +
      "to follow in English-style set-ups. Sound but slow: no pawn stands in the centre yet, " +
      "so Black can claim it with ...e5 or with ...e6 and ...d5.",
  },

  "1.b3 Nf6 2.d4": {
    strategy:
      "Occupies the centre with a pawn, but after Bb2 the d4-pawn blocks the bishop's " +
      "diagonal, so the bishop mainly supports d4 until the centre opens. Without a pawn on " +
      "c4, Black can take space with ...d5 or strike at d4 with ...c5 and develops easily.",
  },

  "1.b3 Nf6 2.g3": {
    strategy:
      "Prepares Bg2 for a double fianchetto in which both bishops aim at the centre along the " +
      "long diagonals. The set-up is solid and easy to play, but slow: Black can take space " +
      "with ...d5 and ...e5 or ...c5 while White completes the development.",
  },

  "1.b3 Nf6 2.d3": {
    strategy:
      "Supports a later e4 and keeps Bb2, Nd2 and Nf3 available for a modest set-up. With the " +
      "pawn on d3, d4 now costs a second move, so Black can take the centre with ...d5 and " +
      "...e5 almost unopposed. Sound but passive.",
  },

  "1.b3 Nf6 2.Nc3": {
    strategy:
      "Develops a knight that watches e4 and d5 and prepares e4. It blocks the c-pawn, so c4 " +
      "set-ups are off for now, and after ...d5 and Bb2 the advance ...d4 gains space with a " +
      "tempo against the knight. Playable, but there is no reason to prefer it to Bb2.",
  },

  "1.b3 Nf6 2.a3": {
    strategy:
      "Keeps a black bishop off b4 and prepares b4, but spends a tempo on a rim pawn that " +
      "does nothing for the centre or development. Black takes space at leisure with ...d5 " +
      "and ...e6 or ...e5.",
  },

  "1.b3 Nf6 2.a4": {
    strategy:
      "Gains queenside space and stops ...b5, but spends a tempo on a rim pawn and weakens " +
      "the b4-square. The centre and development are untouched, so Black builds with ...d5 " +
      "and ...e6.",
  },

  "1.b3 Nf6 2.c3": {
    strategy:
      "Prepares d4 but blocks the long diagonal that b3 was meant to open, so a bishop on b2 " +
      "would run into its own pawn. It also takes c3 from the knight and develops nothing. " +
      "Black claims the centre with ...d5 and ...e5.",
  },

  "1.b3 Nf6 2.f3": {
    strategy:
      "Prepares e4 but takes f3 from the knight, weakens the e1-h4 diagonal and develops " +
      "nothing. Black can take the centre with ...e5 and ...d5 and gets ahead in development.",
  },

  "1.b3 Nf6 2.f4": {
    strategy:
      "Controls e5 and aims for a Bird-type set-up, but spends a move on the f-pawn that " +
      "develops nothing and weakens e3 and the e1-h4 diagonal. Black develops with ...d5, " +
      "...e6 or ...g6.",
  },

  "1.b3 Nf6 2.h3": {
    strategy:
      "Takes g4 from a black knight or bishop, but spends a tempo on a rim pawn the position " +
      "does not yet call for. Black gets the centre with ...d5 and ...e6 or ...e5 while White " +
      "is still undeveloped.",
  },

  "1.b3 Nf6 2.h4": {
    strategy:
      "Grabs kingside space, but develops nothing and loosens the kingside for no concrete " +
      "gain. Black takes the centre with ...d5 and ...e6 or ...e5 and is simply ahead in " +
      "development.",
  },

  "1.b3 Nf6 2.Na3": {
    strategy:
      "Develops the knight to the rim, aiming at b5 and c4, but leaves it far from the centre " +
      "and blocks the a-pawn. Black takes the centre with ...d5, which also covers c4, and " +
      "...e6, while the knight stays out of play.",
  },

  "1.b3 Nf6 2.Nh3": {
    strategy:
      "Heads for f4 via the rim, but does nothing for the centre meanwhile. Once ...d5 opens " +
      "the c8-bishop, ...Bxh3 followed by gxh3 would double White's pawns; Nf3 was the " +
      "natural square.",
  },

  "1.b3 Nf6 2.Ba3": {
    strategy:
      "Aims at f8, but the e7-pawn blocks the diagonal, and the bishop leaves the long " +
      "diagonal that b3 prepared. Black develops with ...d5 and ...e6, and the bishop on a3 " +
      "achieves nothing beyond a possible trade of the dark-squared bishops.",
  },

  "1.b3 Nf6 2.b4": {
    strategy:
      "Spends a second move on the b-pawn to reach b4, where nothing defends it: after 2...e6 " +
      "the f8-bishop attacks it, so White must spend yet another tempo on a3, c3 or b5 or " +
      "give it up to ...Bxb4. The position is that of 1.b4 Nf6, but with Black to move.",
  },

  "1.b3 Nf6 2.g4": {
    strategy:
      "Hangs a pawn: 2...Nxg4 wins it, because the queen's diagonal is closed by the e2-pawn " +
      "and nothing else covers g4. The kingside is loosened as well.",
  },

  "1.b3 Nf6 2.e4": {
    strategy:
      "Leaves the e-pawn undefended, so 2...Nxe4 wins it. After 3.Bb2 the bishop eyes g7, but " +
      "the f8-bishop guards it, and Black keeps the extra pawn in a sound position with ...d5 " +
      "or ...Nf6.",
  },

  "1.b3 Nf6": {
    name: "Nimzowitsch–Larsen Attack: Indian Variation",
    background:
      "The third most common reply to 1.b3, chosen in about 15 percent of games overall and " +
      "in about 20 percent at the 2500 rating level.",
  },
};
