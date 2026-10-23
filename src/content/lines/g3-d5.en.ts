import type { OpeningTexts } from "../book.ts";

// English prose for g3-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.g3 d5 2.Bg2": {
    strategy:
      "Completes the fianchetto: the bishop bears on d5 and along the long diagonal towards " +
      "b7, and White can castle quickly after Nf3. From here White chooses between a King's " +
      "Indian Attack set-up with d3, Nbd2 and e4, or c4 to strike at d5 in Catalan or Réti " +
      "style. The price is the centre, which Black can occupy with ...Nf6, ...c5 or ...e5 and " +
      "which White has to challenge later.",
  },

  "1.g3 d5 2.Nf3": {
    strategy:
      "Develops the knight to its natural square, where it covers d4 and e5, so that 2...e5? " +
      "loses a pawn to 3.Nxe5. Bg2 and O-O follow, then d3, Nbd2 and e4 for a King's Indian " +
      "Attack, or c4 for a Réti or Catalan structure. Black can develop with ...Nf6, ...c5, " +
      "or ...c6 with ...Bg4 or ...Bf5, and keeps the larger share of the centre.",
  },

  "1.g3 d5 2.d4": {
    strategy:
      "Claims the centre at once and reaches a Queen's Pawn Game in which g3 is already " +
      "played, with Bg2, Nf3 and c4 to follow in Catalan style. It is sound but slow: d5 is " +
      "not yet challenged, so Black can develop with ...Nf6, ...Bf5 and ...e6 or ...c5 " +
      "without difficulty.",
  },

  "1.g3 d5 2.c4": {
    strategy:
      "Attacks d5 from the flank, with Bg2 and Nc3 to follow. After 2...dxc4 White regains " +
      "the pawn with Qa4+ and Qxc4, while 2...d4 gains space for Black. It is sound but " +
      "rarely played, as the pawn challenges d5 before the bishop on g2 can add pressure " +
      "along the long diagonal.",
  },

  "1.g3 d5 2.d3": {
    strategy:
      "Supports a later e4 and keeps Bg2, Nf3 and Nbd2 in reserve, heading for a King's " +
      "Indian Attack set-up. It is sound and flexible but passive: Black takes the centre " +
      "with ...e5 and ...Nf6 or ...c5 and meets e4 on equal terms.",
  },

  "1.g3 d5 2.b3": {
    strategy:
      "Prepares Bb2 so that both bishops bear on the long diagonals in a double fianchetto, " +
      "with Bg2 and Nf3 to follow. It is sound but slow: Black can take space with ...e5 and " +
      "...Nf6 while White has nothing against d5 yet.",
  },

  "1.g3 d5 2.Nc3": {
    strategy:
      "Develops a piece, eyes d5 and prepares e4, but blocks the c-pawn and invites 2...d4. " +
      "The knight must then move again, to e4 or b5, where ...Nf6 or ...f5 and ...c6 " +
      "challenge it, so Black gains space with a tempo.",
  },

  "1.g3 d5 2.f4": {
    strategy:
      "Controls e5 and heads for a Bird's Opening set-up with Nf3, Bg2 and O-O. It is sound, " +
      "but it loosens the a7–g1 diagonal and the e3 square, and Black develops comfortably " +
      "with ...Nf6, ...g6 and ...Bg7 or with ...c5 and ...Nc6.",
  },

  "1.g3 d5 2.a3": {
    strategy:
      "Spends a tempo on a flank move that prepares only a later b4. Nothing in the centre or " +
      "in White's development improves, and Black occupies the centre with ...e5 and ...Nf6 " +
      "unhindered.",
  },

  "1.g3 d5 2.a4": {
    strategy:
      "Gains queenside space but contributes nothing to the centre or to development, and the " +
      "a-pawn can no longer support a later b4. Black builds with ...e5 and ...Nf6 and White " +
      "is a tempo behind.",
  },

  "1.g3 d5 2.b4": {
    strategy:
      "Grabs queenside space and prepares Bb2, but the pawn on b4 lacks support: ...a5 " +
      "attacks it at once, and once the e-pawn moves the f8 bishop hits it too. Black " +
      "develops with ...Nf6 and ...e5 or ...e6 while White has to look after the pawn.",
  },

  "1.g3 d5 2.c3": {
    strategy:
      "Supports a later d4, but takes c3 from the b1 knight, which has to develop via d2 or " +
      "a3, and does nothing yet against d5. Black develops freely with ...Nf6, ...e5 or " +
      "...c5.",
  },

  "1.g3 d5 2.e3": {
    strategy:
      "Opens a diagonal for the f1 bishop, which already had g2, and shuts in the c1 bishop. " +
      "The pawn covers d4 but does nothing against d5, so Black takes space with ...e5 or " +
      "develops with ...Nf6 and ...c5.",
  },

  "1.g3 d5 2.f3": {
    strategy:
      "Prepares e4 but takes f3 from the king's knight and opens the a7–g1 diagonal, which " +
      "makes short castling less safe. Black builds the centre with ...e5 and ...Nf6 while " +
      "White's development is awkward.",
  },

  "1.g3 d5 2.h3": {
    strategy:
      "Stops ...Bg4 but is a slow move that neither develops a piece nor contests the centre. " +
      "Black occupies the centre with ...e5 and ...Nf6 and has the easier game.",
  },

  "1.g3 d5 2.h4": {
    strategy:
      "Starts a kingside pawn advance with h5 in mind, but there is nothing to attack yet: " +
      "the move takes the h-pawn's support from g3 and ignores the centre. Black replies " +
      "...h5 or simply builds with ...Nf6 and ...e5.",
  },

  "1.g3 d5 2.Na3": {
    strategy:
      "Heads for b5, but ...c6 takes that square away and the d5 pawn already controls c4, so " +
      "the knight has few useful squares. It leaves b1 for the rim, blocks the a-pawn and " +
      "does nothing for the centre.",
  },

  "1.g3 d5 2.Bh3": {
    strategy:
      "Offers a bishop trade after 2...Bxh3 3.Nxh3, which gives up the fianchetto, puts the " +
      "knight on the rim and leaves the long diagonal and the light squares weak. Black can " +
      "also ignore it and build with ...e5 and ...Nf6.",
  },

  "1.g3 d5 2.Nh3": {
    strategy:
      "Keeps g2 free for the bishop and heads for f4 to press on d5, but 2...e5 covers f4 and " +
      "leaves the knight on the rim with no good square to go to. Black develops freely with " +
      "...Nf6 and ...Nc6 while White still has to bring the knight back into play.",
  },

  "1.g3 d5 2.e4": {
    strategy:
      "Gambits the e-pawn on the strength of the fianchetto, but after 2...dxe4 3.Bg2 Black " +
      "holds the extra pawn with ...Nf6 or ...f5. White's lead in development is too small to " +
      "pay for it.",
  },

  "1.g3 d5 2.g4": {
    strategy:
      "Hangs the pawn: 2...Bxg4 wins it, because the queen is blocked by the e2 pawn and " +
      "nothing defends g4. White has no lead in development in return, and 3.h3 only chases " +
      "the bishop to a good square.",
  },

  "1.g3 d5": {
    background:
      "The most frequent reply to 1.g3: in each of the five game databases compared in " +
      "Wikibooks' opening theory, 1...d5 is played in roughly 28 to 37 percent of the games.",
  },
};
