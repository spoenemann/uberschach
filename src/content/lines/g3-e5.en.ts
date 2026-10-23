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

  "1.g3 e5 2.Bg2 d5": {
    strategy:
      "Takes the centre at once with pawns on d5 and e5, and the queen guards d5 against the " +
      "bishop on g2. Black follows with ...Nf6 and ...Nc6. White keeps a King's Indian Attack " +
      "set-up with d3, Nf3 and O-O, or strikes at d5 with c4. The same position arises after " +
      "1.g3 d5 2.Bg2 e5.",
  },

  "1.g3 e5 2.Bg2 Nc6": {
    strategy:
      "Develops the queen's knight to guard e5 and watch d4, and keeps two set-ups in " +
      "reserve: ...Nf6 with ...d5, or ...g6, ...Bg7 and ...d6 for a closed game. After 3.c4 " +
      "the game transposes into an English with g3 and Bg2, while 3.d3 or 3.Nf3 with O-O " +
      "keeps a King's Indian Attack set-up. The knight stands where the c-pawn would go, so " +
      "the plan of ...c6 and ...d5 is no longer available.",
  },

  "1.g3 e5 2.Bg2 Nf6": {
    strategy:
      "Develops the king's knight toward e4 and d5 and keeps ...d5, ...Nc6 and ...Bc5 or " +
      "...Be7 with castling in reserve. After 3.c4 the game transposes into an English with " +
      "g3 and Bg2. 3.Nf3 attacks the unguarded e5 pawn, which Black either covers with ...Nc6 " +
      "or advances with 3...e4 4.Nd4, gaining space.",
  },

  "1.g3 e5 2.Bg2 Be7": {
    strategy:
      "Develops the bishop modestly and prepares ...Nf6 and short castling. The move is sound " +
      "but passive: e5 still needs a defender once Nf3 attacks it, and White builds a " +
      "comfortable grip on d5 with c4 and Nc3.",
  },

  "1.g3 e5 2.Bg2 Bc5": {
    strategy:
      "Aims the bishop at f2 and prepares ...Nf6, ...Nc6 and castling. The set-up is sound, " +
      "but the bishop can become a target for Nf3 and d4, and e5 lacks support, so Black must " +
      "follow with the knights without delay.",
  },

  "1.g3 e5 2.Bg2 c6": {
    strategy:
      "Prepares ...d5, after which the c6 pawn backs up d5 and keeps the long diagonal " +
      "closed. It is sound, but it develops no piece and takes c6 from the b8 knight, so e5 " +
      "loses its natural defender while White gains time for d3, Nf3 and castling.",
  },

  "1.g3 e5 2.Bg2 d6": {
    strategy:
      "Supports e5 with a pawn and frees the c8 bishop for a solid set-up with ...Nf6 and " +
      "...Be7 or ...g6. It claims less of the centre than ...d5 and leaves White a free hand " +
      "with c4, Nc3 and Nf3.",
  },

  "1.g3 e5 2.Bg2 f5": {
    strategy:
      "Grabs space with pawns on e5 and f5 and prepares ...Nf6 and ...e4. It is a risky try " +
      "rather than a refuted one: the e8-h5 diagonal and the e6 square are weakened, and " +
      "White develops with Nf3 or d4 against the loose centre.",
  },

  "1.g3 e5 2.Bg2 g6": {
    strategy:
      "Prepares ...Bg7, which backs e5 along the a1-h8 diagonal, usually with ...Nc6 and " +
      "...d6 for a closed game. The move is sound but slow: White continues with c4, Nc3 and " +
      "d3 and keeps the pressure on d5.",
  },

  "1.g3 e5 2.Bg2 h5": {
    strategy:
      "Prepares ...h4 to undermine the g3 pawn and open the h-file against the fianchetto. " +
      "White develops with c4 and Nc3 or stops the idea with h4, after which g5 becomes a " +
      "strong square for a white piece.",
  },

  "1.g3 e5 2.Bg2 Na6": {
    strategy:
      "Puts the knight on the rim, aiming at c5 and b4, but leaves e5 without support and the " +
      "centre to White. ...Nc5 costs a second tempo and can be hit by d4 or b4.",
  },

  "1.g3 e5 2.Bg2 Qe7": {
    strategy:
      "Defends e5, but blocks the f8 bishop and takes e7 from the knight. White answers with " +
      "Nc3 and Nd5, protected by Bg2, which hits the queen and the c7 pawn with tempo.",
  },

  "1.g3 e5 2.Bg2 Qf6": {
    strategy:
      "Defends e5, but takes the best square from the king's knight. White answers with Nc3 " +
      "and Nd5, protected by Bg2, which hits the queen and the c7 pawn with tempo.",
  },

  "1.g3 e5 2.Bg2 Qg5": {
    strategy:
      "Eyes d2 and g3, but both are well guarded. 3.d4 attacks e5 and uncovers the c1 bishop " +
      "against the queen, so White takes the centre with tempo.",
  },

  "1.g3 e5 2.Bg2 Bd6": {
    strategy:
      "Guards e5 but blocks the d-pawn and with it the c8 bishop, which stays shut in until " +
      "the d6 bishop moves again. White develops with c4, Nc3 and Nf3 and can strike with d4 " +
      "at ease.",
  },

  "1.g3 e5 2.Bg2 Bb4": {
    strategy:
      "Puts the bishop on b4, where it only hits the well-guarded d2 pawn. A move such as c3 " +
      "or a3 drives it back with tempo, and c3 also prepares d4.",
  },

  "1.g3 e5 2.Bg2 Nh6": {
    strategy:
      "Develops the knight to the rim, where it eyes f5 and g4 but not the centre. Once d3 " +
      "opens the c1 bishop, Bxh6 gxh6 can wreck Black's kingside pawns.",
  },

  "1.g3 e5 2.Bg2 Ne7": {
    strategy:
      "Covers d5 but blocks the f8 bishop, so Black needs ...g6 or a second knight move " +
      "before castling kingside. The knight is more passive on e7 than on f6.",
  },

  "1.g3 e5 2.Bg2 a6": {
    strategy:
      "Spends a tempo on a flank pawn that does nothing for development or the centre. The " +
      "follow-up ...b5 is not available while Bg2 looks down the long diagonal, since it " +
      "would hang the rook on a8.",
  },

  "1.g3 e5 2.Bg2 a5": {
    strategy:
      "Stops b4 and gains a little queenside space, but spends a tempo that does nothing for " +
      "development or the centre. White develops freely with c4, Nc3 and Nf3.",
  },

  "1.g3 e5 2.Bg2 c5": {
    strategy:
      "Takes d4, but leaves d5 as a lasting hole, since neither the c-pawn nor the e-pawn can " +
      "cover it any more. White's Bg2, Nc3 and c4 all bear on the square.",
  },

  "1.g3 e5 2.Bg2 f6": {
    strategy:
      "Defends e5 but takes f6 from the king's knight and weakens e6 and the e8-h5 diagonal. " +
      "White develops freely with c4 and Nc3.",
  },

  "1.g3 e5 2.Bg2 g5": {
    strategy:
      "Weakens the kingside and the a1-h8 diagonal: after 3.d4 exd4 4.Qxd4 the queen hits the " +
      "rook on h8 while the c1 bishop eyes g5. Black has to block with a move such as ...Nf6 " +
      "or ...f6, and the weaknesses remain.",
  },

  "1.g3 e5 2.Bg2 h6": {
    strategy:
      "Spends a tempo to stop Bg5, a move the c1 bishop cannot make while the d2 pawn blocks " +
      "it. White develops with c4 and Nc3.",
  },

  "1.g3 e5 2.Bg2 Qh4": {
    strategy: "Hangs the queen: the g3 pawn simply captures it with 3.gxh4.",
  },

  "1.g3 e5 2.Bg2 Ke7": {
    strategy:
      "Gives up castling for good and blocks the f8 bishop. White develops with c4 and Nc3 " +
      "and can open the position against the king in the centre.",
  },

  "1.g3 e5 2.Bg2 Ba3": {
    strategy: "Hangs the bishop: 3.bxa3 or 3.Nxa3 wins a piece for nothing.",
  },

  "1.g3 e5 2.Bg2 b6": {
    strategy:
      "Opens the long diagonal to the rook on a8: 3.Bxa8 wins a whole rook, because nothing " +
      "can recapture on a8.",
  },

  "1.g3 e5 2.Bg2 b5": {
    strategy:
      "Unblocks the long diagonal and hangs the rook on a8: 3.Bxa8 wins a whole rook, because " +
      "nothing can recapture there.",
  },

  "1.g3 e5 2.Bg2 e4": {
    strategy:
      "Advances the pawn without support: 3.Bxe4 wins it, since no black piece guards e4. " +
      "...d5 or ...Nf6 then gains a tempo against the bishop, which does not make up for the " +
      "pawn.",
  },
};
