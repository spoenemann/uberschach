import type { OpeningTexts } from "../book.ts";

// English prose for b3-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.b3 c5 2.Bb2": {
    strategy:
      "Puts the bishop on the long diagonal, where it eyes the centre and g7. White keeps the " +
      "choice of plan: e4 for a Sicilian with b3 played, c4 for a Symmetrical English, or the " +
      "quiet set-up with e3, Nf3, Be2 and O-O. Black most often replies 2...Nc6, usually met " +
      "by 3.e3 or 3.Nf3.",
  },

  "1.b3 c5 2.e3": {
    strategy:
      "Opens the f1-bishop's diagonal and supports a later d4 or f4, with Bb2 still to come. " +
      "Once the bishop arrives the game transposes to the 2.Bb2 lines, with Nf3, Be2, O-O and " +
      "d3 or Nbd2 to follow. The pawn is committed before Black has shown whether ...e5, " +
      "...d5 or ...Nf6 is coming, but nothing is conceded.",
  },

  "1.b3 c5 2.c4": {
    strategy:
      "Turns the game into a Symmetrical English in which b3 is already played: the c4-pawn " +
      "controls d5 and b5, and Bb2, Nc3 and g3 with Bg2 can follow. Sound but slow, it lets " +
      "Black meet Bb2 by blocking the diagonal with ...Nc6 and ...e5 or contesting it with " +
      "...g6 and ...Bg7.",
  },

  "1.b3 c5 2.e4": {
    strategy:
      "Takes space in the centre and reaches a Sicilian in which White has already played b3, " +
      "with Bb2 to follow along the long diagonal. Sound, but b3 is a slow move in that " +
      "structure: Black develops comfortably with ...Nc6, ...e6 and ...d5, and the c6-knight " +
      "covers d4 and e5 on the bishop's diagonal.",
  },

  "1.b3 c5 2.g3": {
    strategy:
      "Prepares Bg2 to go with Bb2: in the double fianchetto both bishops bear on the centre " +
      "from the flanks, with Nf3, O-O and d3 or c4 to follow. Sound, but with no central pawn " +
      "and no knight developed, White lets Black take space with ...Nc6, ...e5 or ...d5.",
  },

  "1.b3 c5 2.Nf3": {
    strategy:
      "Develops the king's knight towards d4 and e5 and keeps Bb2, e3, g3 and c4 all " +
      "available. It is sound, but the knight blocks the f-pawn and gives up the option of an " +
      "early f4, and Black is free to choose between ...Nc6, ...e6 and ...d5.",
  },

  "1.b3 c5 2.d3": {
    strategy:
      "Prepares e4 and aims at a set-up with Bb2, Nf3 or Nd2, g3 and Bg2 in the style of a " +
      "King's Indian Attack. It is sound but passive, and gives Black time to take the centre " +
      "with ...Nc6, ...e5 and ...d5.",
  },

  "1.b3 c5 2.f4": {
    strategy:
      "Takes e5 under control and heads for a Bird's Opening set-up with Bb2, Nf3 and e3, in " +
      "which pawn and bishop both bear on e5. It is sound, but it opens the e1-h4 diagonal " +
      "towards the king, and Black can take the centre first with ...Nc6, ...Nf6 and ...d5.",
  },

  "1.b3 c5 2.d4": {
    strategy:
      "After 2...cxd4 White can recapture only with the queen, and 3.Qxd4 Nc6 hits it with " +
      "tempo. A central pawn is traded for Black's wing pawn, and White loses time while " +
      "Black develops.",
  },

  "1.b3 c5 2.c3": {
    strategy:
      "Prepares d4, but the pawn stands on the long diagonal and blocks the bishop that b3 " +
      "was meant to activate on b2. Black develops freely with ...Nc6, ...Nf6 and ...d5.",
  },

  "1.b3 c5 2.Nc3": {
    strategy:
      "Puts the knight on the diagonal the b3-pawn was meant to open for Bb2. After 2...d5 " +
      "the knight cannot take (3.Nxd5 Qxd5 costs a piece for a pawn), and 3.Bb2 d4 attacks it " +
      "with tempo, so Black gains space and time.",
  },

  "1.b3 c5 2.a3": {
    strategy:
      "Spends a tempo on a rook-pawn move that develops nothing and does not contest the " +
      "centre. Black takes space with ...Nc6, ...e5 or ...d5 unhindered.",
  },

  "1.b3 c5 2.a4": {
    strategy:
      "Advances the rook-pawn without developing a piece, and the a-pawn can no longer cover " +
      "b4, where a black knight supported by the c5-pawn can settle via ...Nc6. Black " +
      "develops and fights for the centre first.",
  },

  "1.b3 c5 2.f3": {
    strategy:
      "Takes f3 from the king's knight, opens the e1-h4 diagonal towards the king and " +
      "develops nothing. The follow-up e4 is slow, and Black occupies the centre with ...Nc6 " +
      "and ...d5 or ...e5.",
  },

  "1.b3 c5 2.h3": {
    strategy:
      "A waiting move on the kingside that develops nothing and does not contest the centre. " +
      "It denies g4 to a black piece, but Black has no use for that square yet and takes the " +
      "centre with ...Nc6, ...e5 or ...d5.",
  },

  "1.b3 c5 2.h4": {
    strategy:
      "Advances the rook-pawn without developing a piece or contesting the centre, and the " +
      "h-pawn can no longer cover g4. Black develops with ...Nc6, ...Nf6 and ...d5 at " +
      "leisure.",
  },

  "1.b3 c5 2.Na3": {
    strategy:
      "Places a knight on the rim, where it eyes b5 and c4 but is far from the centre and the " +
      "kingside. Black occupies the centre with ...Nc6, ...e5 or ...d5, and the knight needs " +
      "another move to become useful.",
  },

  "1.b3 c5 2.Ba3": {
    strategy:
      "Attacks c5 at once, but Black defends with ...e6 (the f8-bishop then guards the pawn: " +
      "3.Bxc5 Bxc5), ...b6 or ...d6. The bishop then stands on a3, away from the long " +
      "diagonal, and has achieved little.",
  },

  "1.b3 c5 2.Nh3": {
    strategy:
      "Puts the knight on the rim to reach f4 or g5, but after ...d5 or ...d6 Black can play " +
      "...Bxh3, and gxh3 leaves White with doubled h-pawns. Nf3 is the natural square.",
  },

  "1.b3 c5 2.g4": {
    strategy:
      "Advances the g-pawn without support: 2...Nf6 or 2...d5 attacks it, and White must " +
      "spend another move on h3, f3, Bh3 or g5. The kingside is loosened before any piece is " +
      "developed.",
  },

  "1.b3 c5 2.b4": {
    strategy:
      "Spends a second move on the b-pawn only to give it away: 2...cxb4 wins it, and after " +
      "3.Bb2 Nf6 the knight blocks the long diagonal, so White has no compensation for the " +
      "pawn.",
  },

  "1.b3 c5": {
    name: "Nimzowitsch–Larsen Attack: English Variation",
  },
};
