import type { OpeningTexts } from "../book.ts";

// English prose for g3-e5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.g3 e5 2.Bg2": {
    background:
      "Wikibooks' opening theory labels 2.Bg2, answered by 2...d5, the main variation after " +
      "1...e5.",
    strategy:
      "Completes the fianchetto and aims the bishop along the long diagonal at d5 and b7. " +
      "White follows with d3, Nf3 and O-O in a King's Indian Attack set-up, or plays c4 or e4 " +
      "once Black has committed. Black usually takes the centre with 2...d5 and develops with " +
      "...Nf6 and ...Nc6, and White concedes space in return for a solid, flexible position.",
  },

  "1.g3 e5 2.c4": {
    strategy:
      "Transposes to the English Opening, 1.c4 e5 2.g3, where White plays a Sicilian Defence " +
      "with colours reversed and a move more. After Bg2 the bishop presses on d5 and b7, and " +
      "Nc3, Nf3 and d3 or e3 complete the development. Black answers with ...Nf6 and ...Nc6, " +
      "often followed by ...d5, and keeps more central space while White works on the light " +
      "squares.",
  },

  "1.g3 e5 2.Nf3": {
    name: "Hungarian Opening: Reversed Alekhine",
    background:
      "Called the Reversed Alekhine because its ideas mirror Alekhine's Defence with the " +
      "colours swapped. Wikibooks' opening theory notes that the move is still sometimes " +
      "seen, although 1...e5 discourages it.",
    strategy:
      "Develops and attacks e5, but 2...e4 drives the knight away at once, and after 3.Nd4 " +
      "Black gains space with ...d5 and ...c5, the latter hitting the knight again. White " +
      "aims to undermine the e4 pawn with d3 and Bg2. Playable, but it gives Black more space " +
      "than the quiet 2.Bg2.",
  },

  "1.g3 e5 2.d3": {
    strategy:
      "Prepares e4, opens the c1 bishop's diagonal and steers for Bg2, Nf3 and O-O in a " +
      "King's Indian Attack set-up. It contests neither d5 nor e5, so Black takes the centre " +
      "with ...d5, ...Nf6 and ...Nc6 and has more space. Sound, but a slow way to start.",
  },

  "1.g3 e5 2.b3": {
    strategy:
      "Prepares Bb2 against e5 and, together with Bg2, a double fianchetto on both long " +
      "diagonals. Black covers e5 with ...Nc6 and takes the centre with ...d5 and ...Nf6, so " +
      "both bishops meet well-defended pawns at first. Sound, but slower than the main moves " +
      "and without a say in d5.",
  },

  "1.g3 e5 2.d4": {
    strategy:
      "Challenges e5 at once. After 2...exd4 3.Qxd4 Nc6 the queen has to move again and Black " +
      "gains time, and Black can also advance with 2...e4 and keep the space. Playable, but " +
      "White's first-move initiative is gone.",
  },

  "1.g3 e5 2.Nc3": {
    strategy:
      "Develops the knight toward d5 and e4, but blocks the c-pawn, so the English set-up " +
      "with c4 is gone. Black takes space with ...d5 and ...Nf6, ...d4 can drive the knight " +
      "back, and ...Bb4 pins it once the d-pawn has moved. Sound, but less flexible than " +
      "2.Bg2 or 2.c4.",
  },

  "1.g3 e5 2.e4": {
    strategy:
      "Reaches 1.e4 e5 2.g3, where the e4 pawn blocks the long diagonal for Bg2. Black hits " +
      "the pawn at once with 2...d5 or 2...Nf6, and after 2...d5 3.exd5 Qxd5 the queen gains " +
      "time against the h1 rook along the long diagonal.",
  },

  "1.g3 e5 2.a3": {
    strategy:
      "Prevents ...Bb4 and prepares b4, but it plays no part in development or the centre and " +
      "spends a second move on the wing. Black takes the middle with ...d5 and ...Nf6 without " +
      "trouble.",
  },

  "1.g3 e5 2.a4": {
    strategy:
      "Gains a little queenside space but weakens b4, while the centre and development are " +
      "left to Black. Black follows with ...d5 and ...Nf6 at no cost.",
  },

  "1.g3 e5 2.c3": {
    strategy:
      "Supports a later d4 but takes the natural square from the b1 knight and does nothing " +
      "about e5 or d5. Black builds with ...d5 and ...Nf6 and meets d4 with ...e4 or ...exd4 " +
      "on comfortable terms.",
  },

  "1.g3 e5 2.e3": {
    strategy:
      "Covers d4 and f4 and frees e2 for the knight, but blocks the c1 bishop's diagonal at " +
      "e3 and leaves d5 and e5 to Black. Black takes space freely with ...d5, ...Nf6 and " +
      "...Nc6 while White has no active plan.",
  },

  "1.g3 e5 2.f3": {
    strategy:
      "Takes the natural f3 square from the knight and blocks the long diagonal for Bg2, " +
      "while weakening e3 and the e1-h4 diagonal. Black simply takes the centre with ...d5 " +
      "and ...Nf6.",
  },

  "1.g3 e5 2.h3": {
    strategy:
      "Stops a later ...Bg4 but spends a second pawn move on the kingside, and the g3 pawn " +
      "loses the support of the h-pawn. Black takes the centre with ...d5 and ...Nf6 and " +
      "develops freely.",
  },

  "1.g3 e5 2.h4": {
    strategy:
      "Prepares h5 but ignores the centre and development, and the g3 pawn loses the h-pawn's " +
      "support while h3 can no longer be covered by a pawn. Black takes space with ...d5 and " +
      "...Nf6.",
  },

  "1.g3 e5 2.Na3": {
    strategy:
      "Heads for c4 to hit e5, but a knight on the rim is badly placed, and 2...d5 takes away " +
      "c4 at once. The centre and development fall to Black, who plays ...Nf6 and ...Nc6.",
  },

  "1.g3 e5 2.Nh3": {
    strategy:
      "The knight on h3 does nothing for the centre, and its forward squares are covered: Nf4 " +
      "runs into ...exf4 and Ng5 into ...Qxg5. Black takes the centre with ...d5 and develops " +
      "freely.",
  },

  "1.g3 e5 2.Bh3": {
    strategy:
      "Develops the bishop outside the pawn chain and eyes d7, but gives up the long " +
      "diagonal. After 2...d5 Black can trade with ...Bxh3 Nxh3, leaving a knight on the rim, " +
      "and takes the centre.",
  },

  "1.g3 e5 2.b4": {
    strategy:
      "Hangs the pawn: 2...Bxb4 takes it with a developing move. Bb2 and c3 gain some time " +
      "against e5 and the bishop, but ...Nc6 holds e5 and Black keeps the extra pawn.",
  },

  "1.g3 e5 2.f4": {
    strategy:
      "Loses a pawn after 2...exf4, and the recapture 3.gxf4 even allows 3...Qh4 mate along " +
      "the opened e1-h4 diagonal. White has to give up the pawn with 3.Bg2 or 3.Nf3, and the " +
      "kingside structure is left damaged for little return.",
  },

  "1.g3 e5 2.g4": {
    strategy:
      "Moves the g-pawn a second time, gives up control of f4 and h4, and leaves the pawn on " +
      "g4 loose: 2...d5 opens the c8 bishop's diagonal against it. The result is the position " +
      "of 1.g4 e5 with Black to move, a full tempo lost.",
  },
};
