import type { OpeningTexts } from "../book.ts";

// English prose for c4-c6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.c4 c6 2.Nf3": {
    strategy:
      "Develops the king's knight, covers d4 and e5 and keeps the centre pawns back, so White " +
      "can still choose the structure after 2...d5: 3.d4 for the Slav, 3.e3 with d4 later for " +
      "a quiet Slav or Semi-Slav, or 3.b3 and Bb2 for a Réti set-up with the bishop on the " +
      "long diagonal. Black keeps a free hand too and can develop the c8-bishop with ...Bf5 " +
      "or ...Bg4 before closing it in with ...e6.",
  },

  "1.c4 c6 2.e4": {
    strategy:
      "Takes the centre at once and strikes at d5 before Black can settle there. After 2...d5 " +
      "White can play 3.exd5 cxd5 4.d4, reaching the Panov Attack of the Caro-Kann by " +
      "transposition, or 3.cxd5 cxd5 4.exd5 Nf6 5.Nc3 Nxd5 and accept an isolated d-pawn for " +
      "open lines. Black can also decline the d5 fight with 2...e5.",
  },

  "1.c4 c6 2.Nc3": {
    strategy:
      "Develops the queen's knight, guards d5 and e4 and prepares e4 or d4. After 2...d5 " +
      "White can play 3.d4 for a Slav or Semi-Slav with the knight already on c3, or 3.cxd5 " +
      "cxd5 4.d4 for the symmetrical Exchange Slav structure. Black is not bound to ...d5, " +
      "though: 2...e5 claims the centre with the other pawn and keeps ...d5 in reserve.",
  },

  "1.c4 c6 2.d4": {
    strategy:
      "Claims the centre with the d-pawn and, after 2...d5, enters the Slav Defence by " +
      "transposition, usually with 3.Nf3 Nf6 4.Nc3 and ...dxc4 or ...e6 to follow. White can " +
      "also exchange with 3.cxd5 cxd5 for a symmetrical structure. Black keeps alternatives " +
      "such as 2...e6 or 2...Nf6, so White does not dictate the pawn structure.",
  },

  "1.c4 c6 2.e3": {
    strategy:
      "Opens the f1-bishop and prepares d4, aiming for a quiet Slav or Semi-Slav: 2...d5 " +
      "3.Nf3 Nf6 4.Nc3 e6 5.d4 reaches a Semi-Slav. It is sound but passive, since it shuts " +
      "in the c1-bishop and lets Black take central space with ...d5 or ...e5 before White " +
      "has a piece out.",
  },

  "1.c4 c6 2.g3": {
    strategy:
      "Prepares Bg2 to press on d5 along the long diagonal, with Nf3 and O-O to follow in a " +
      "Réti or Catalan-like set-up. It is sound but slow: no d- or e-pawn has moved, so Black " +
      "can build a broad centre with ...d5 and ...e5, or a solid one with ...d5, ...Nf6 and " +
      "...Bf5 or ...Bg4.",
  },

  "1.c4 c6 2.b3": {
    strategy:
      "Prepares Bb2 on the long diagonal, aimed at e5 and the kingside, and supports the " +
      "c4-pawn so that ...dxc4 can be met by bxc4. The plan is sound but slow, as White does " +
      "nothing against 2...d5 and ...e5, and Black gets the centre first.",
  },

  "1.c4 c6 2.d3": {
    strategy:
      "Prepares e4 and frees the c1-bishop, in a closed set-up with g3, Bg2 and Nf3. It is " +
      "solid but modest: the move neither fights for d5 nor takes space, so Black can build " +
      "the centre with 2...d5 and ...e5.",
  },

  "1.c4 c6 2.b4": {
    name: "Polish Opening: Outflank Variation",
    background:
      "The same position arises from 1.b4 c6, the Outflank Variation of the Polish Opening. " +
      "After 1.c4 c6, 2.b4 can serve as a surprise weapon against a player who knows little " +
      "about the Polish Opening. The opening is not popular at the top level but still sees " +
      "sporadic use: in May 2021 world champion Magnus Carlsen played it against Hikaru " +
      "Nakamura and Wesley So in the online FTX Crypto Cup rapid tournament.",
    strategy:
      "Gains queenside space and prepares Bb2 on the long diagonal towards g7. The b4-pawn " +
      "has no pawn support, though: 2...a5 and ...Qb6 attack it at once and ...e5 opens the " +
      "f8-bishop against it, so White spends time holding b4 and c4 while Black builds the " +
      "centre.",
  },

  "1.c4 c6 2.a3": {
    strategy:
      "Prepares b4, but spends a tempo on a rook-pawn move that develops nothing and does not " +
      "contest d5. Black takes the centre with 2...d5 and develops without hindrance.",
  },

  "1.c4 c6 2.a4": {
    strategy:
      "Stops ...b5 and gains a little queenside space, but weakens b4 and develops nothing. " +
      "Black replies 2...d5 and takes the centre while White has no piece out.",
  },

  "1.c4 c6 2.f3": {
    strategy:
      "Takes f3 from the king's knight and opens the e1–h4 diagonal towards the king. The " +
      "idea of e4 is slow, and 2...d5 takes the centre first.",
  },

  "1.c4 c6 2.f4": {
    strategy:
      "Gains kingside space and controls e5, with Nf3 and e3 to follow, but opens the e1–h4 " +
      "diagonal towards the king and does nothing about 2...d5, which wins central space at " +
      "once.",
  },

  "1.c4 c6 2.h3": {
    strategy:
      "A waiting move that only takes g4 from the c8-bishop for later. It costs a tempo and " +
      "does not stop 2...d5, so Black takes the centre while White has developed nothing.",
  },

  "1.c4 c6 2.Na3": {
    strategy:
      "Defends c4 and heads for c2, but on the rim the knight controls no central square, " +
      "cannot use b5 because of the c6-pawn and blocks the a-pawn. Black takes the centre " +
      "with 2...d5 and develops with ...Nf6.",
  },

  "1.c4 c6 2.Nh3": {
    strategy:
      "Heads for f4, but the knight sits on the rim instead of on f3, where it would cover d4 " +
      "and e5. After 2...d5 the c8-bishop eyes h3, and a later ...Bxh3 gxh3 leaves White with " +
      "doubled h-pawns for the bishop pair.",
  },

  "1.c4 c6 2.Qc2": {
    strategy:
      "Supports c4 and prepares e4, but brings the queen out before any minor piece. After " +
      "2...d5 the queen can be hit by ...Bf5, and Black gains time for development.",
  },

  "1.c4 c6 2.Qb3": {
    strategy:
      "Eyes b7 down the b-file, but the c4-pawn blocks the queen's diagonal and no minor " +
      "piece is out. Black takes the centre with 2...d5 and can offer a queen trade with " +
      "...Qb6, so White gains nothing for the early sortie.",
  },

  "1.c4 c6 2.Qa4": {
    strategy:
      "Eyes c6 and the a4–e8 diagonal without a real threat, since c6 is defended. Black " +
      "takes the centre with 2...d5 and develops with ...Nf6 and ...Bf5 while the queen is " +
      "left looking for a useful square.",
  },

  "1.c4 c6 2.c5": {
    strategy:
      "Gains queenside space but gives up the pressure on d5. Black can take the centre with " +
      "2...d5, or undermine the advanced pawn with ...b6 and ...d6, and it becomes a target " +
      "with no pawn support behind it.",
  },

  "1.c4 c6 2.g4": {
    strategy:
      "Lunges forward without developing a piece and leaves the pawn loose: after 2...d5 the " +
      "c8-bishop eyes g4, and White needs h3 or f3. The advance also weakens f4, h4 and the " +
      "long diagonal.",
  },

  "1.c4 c6 2.h4": {
    strategy:
      "Gains kingside space but does nothing for the centre or development, and weakens g4 " +
      "and g3 for good. Black takes the centre with 2...d5 and develops freely.",
  },

  "1.c4 c6": {
    name: "English Opening: Caro-Kann Defensive System",
  },
};
