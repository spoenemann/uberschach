import type { OpeningTexts } from "../book.ts";

// English prose for c4-g6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.c4 g6 2.Nc3": {
    strategy:
      "Develops the queen's knight towards d5 and e4 and keeps the main plans open: e4 and d4 " +
      "for a broad centre, g3 and Bg2 for a fianchetto of White's own, or d4 alone for a " +
      "King's Indian or Modern structure. The knight stands on the long diagonal of Black's " +
      "coming ...Bg7, so White must reckon with ...Bxc3 and doubled c-pawns.",
  },

  "1.c4 g6 2.d4": {
    strategy:
      "Occupies the centre at once and steers the game towards 1.d4 structures; after 2...Bg7 " +
      "White chooses between 3.Nc3, 3.Nf3 and 3.e4, and 3.e4 d6 4.Nc3 reaches a King's Indian " +
      "or Modern set-up. The bishop on g7 bears down on d4, so the pawn often needs support " +
      "from Nf3 or e3, and Black can strike at the centre later with ...c5, ...e5 or ...d5.",
  },

  "1.c4 g6 2.e4": {
    strategy:
      "Places pawns on c4 and e4 and prepares d4 and Nc3; after 2...Bg7 3.d4 d6 4.Nc3 the " +
      "position is the Averbakh System of the Modern Defence. Black can challenge at once " +
      "with 2...c5, when 3.Nf3 Bg7 4.d4 cxd4 5.Nxd4 gives a Maróczy Bind, or with 2...e5. The " +
      "pawns on c4 and e4 clamp d5, and Black's counterplay aims at d4 and the dark squares.",
  },

  "1.c4 g6 2.g3": {
    strategy:
      "Prepares Bg2, which supports e4 and aims along the long diagonal at the queenside, and " +
      "keeps Nc3, Nf3, d3 and d4 available. Black can mirror it with 2...Bg7 and ...Nf6, or " +
      "claim space with ...c5 or ...e5. The set-up is solid and flexible, though it leaves " +
      "Black free to take central space first.",
  },

  "1.c4 g6 2.Nf3": {
    strategy:
      "Develops the king's knight, covers d4 and e5 and keeps the set-up open: g3 and Bg2 " +
      "give White a kingside fianchetto, d4 leads to positions that also arise from 1.d4 g6 " +
      "2.c4, and Nc3 with e4 remains possible. White has no central pawn yet, so Black may " +
      "answer with ...c5, ...e5 or ...d6 and choose the structure.",
  },

  "1.c4 g6 2.d3": {
    strategy:
      "Prepares e4, opens the diagonal of the c1-bishop and keeps a flexible set-up with Nc3, " +
      "g3 and Bg2 in reach. It leaves d4 unclaimed, so Black can build a centre with ...Bg7, " +
      "...d6 and ...e5. Sound, but slower than Nc3, g3 or d4.",
  },

  "1.c4 g6 2.e3": {
    strategy:
      "Opens the f1-bishop, prepares d4 and keeps Nc3, Nf3 or Nge2 in reserve. No pawn " +
      "occupies the centre yet and the c1-bishop stays shut in by the d2-pawn, so Black can " +
      "take space with ...Bg7 and ...e5. Sound but passive, and it lets Black choose the " +
      "structure.",
  },

  "1.c4 g6 2.a3": {
    strategy:
      "Prepares b4 and a space gain on the queenside, but leaves the centre and development " +
      "untouched; Black plays ...Bg7, ...d6 and ...Nf6 or ...c5 and claims the central " +
      "squares.",
  },

  "1.c4 g6 2.a4": {
    strategy:
      "Gains queenside space but does nothing for the centre or development, and it leaves b4 " +
      "weak. Black plays ...Bg7 and ...d6 undisturbed.",
  },

  "1.c4 g6 2.b3": {
    strategy:
      "Opens the long diagonal for Black: after 2...Bg7 the bishop eyes the rook on a1, and " +
      "the natural 3.Bb2 loses a piece to 3...Bxb2 because nothing recaptures, so White must " +
      "first block with d4 or Nc3 and the fianchetto plan is delayed.",
  },

  "1.c4 g6 2.b4": {
    strategy:
      "Overextends the queenside: after 2...Bg7 the rook on a1 is attacked and 3.Bb2 loses a " +
      "piece to 3...Bxb2, while the b4-pawn becomes a target for ...a5. The advance does " +
      "nothing for the centre or development.",
  },

  "1.c4 g6 2.f3": {
    strategy:
      "Takes f3 from the king's knight and weakens the e1-h4 diagonal; it only makes sense " +
      "with e4, Nc3 and d4 to follow, and Black meanwhile develops with ...Bg7 and challenges " +
      "the centre with ...d5 or ...c5.",
  },

  "1.c4 g6 2.f4": {
    strategy:
      "Grabs kingside space and controls e5, but opens the e1-h4 diagonal to the king before " +
      "White has a pawn in the centre. Black develops with ...Bg7, ...d6 and ...Nf6 and hits " +
      "the centre at leisure.",
  },

  "1.c4 g6 2.g4": {
    strategy:
      "Advances the g-pawn without support: ...d6 threatens ...Bxg4 because the queen cannot " +
      "recapture through e2, and ...h5 undermines it at once. It also loosens f4, h4 and the " +
      "long diagonal with the king still in the centre.",
  },

  "1.c4 g6 2.h3": {
    strategy:
      "A slow prophylactic move that guards against a later ...Bg4 but does nothing for the " +
      "centre or development; Black plays ...Bg7 and ...d6 or ...c5 and takes the initiative.",
  },

  "1.c4 g6 2.h4": {
    strategy:
      "Aims for h5 to open the h-file against Black's fianchetto, but Black meets it with " +
      "2...h5 or 2...Nf6, which covers h5, and the advance does nothing for the centre. The " +
      "h-pawn can never again guard g3 or g4.",
  },

  "1.c4 g6 2.Na3": {
    strategy:
      "A rim knight that eyes c2 and b5 but is far from the centre and hampers the a-pawn; " +
      "Black takes space with ...Bg7, ...d6 and ...e5 unhindered.",
  },

  "1.c4 g6 2.Qc2": {
    strategy:
      "Brings the queen out before any minor piece has moved, guarding c4 and eyeing e4, but " +
      "it has no target. Black develops with ...Bg7, ...d6 and ...Nf6 while White's minor " +
      "pieces are still at home.",
  },

  "1.c4 g6 2.Qb3": {
    strategy:
      "Presses on b7, a pawn the c8-bishop guards, so there is no threat, and the diagonal to " +
      "f7 is blocked by White's own c4-pawn. Black develops with ...Bg7 and ...Nc6 while the " +
      "queen has no target.",
  },

  "1.c4 g6 2.Qa4": {
    strategy:
      "Brings the queen out to a4, where it pins the d7-pawn until Black plays ...c6 or " +
      "...Nc6 but has no real target, since d7 and a7 are well guarded. Black develops with " +
      "...Bg7 and ...Nc6 or ...Nf6, and the queen has done nothing for White's pieces still " +
      "at home.",
  },

  "1.c4 g6 2.Nh3": {
    strategy:
      "Puts a knight on the rim aiming at f4 and g5, but after ...d6 the c8-bishop threatens " +
      "...Bxh3, which would leave White with doubled h-pawns after gxh3 and a weakened " +
      "kingside.",
  },

  "1.c4 g6 2.c5": {
    strategy:
      "Gains space but pushes the c-pawn a second time and gives up control of d5. ...d6 " +
      "challenges it at once, and after cxd6 Black recaptures with ...exd6 or ...Qxd6, with " +
      "an open centre and easy development.",
  },

  "1.c4 g6": {
    name: "English Opening: Great Snake Variation",
  },
};
