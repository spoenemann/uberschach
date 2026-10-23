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

  "1.g3 d5 2.Bg2 Nf6": {
    strategy:
      "Develops the knight to its natural square, where it guards d5 and eyes e4. Black keeps " +
      "every set-up open: ...c6 with ...Bf5 or ...Bg4, ...e6 with ...Be7, or ...c5 with " +
      "...Nc6. White usually continues with Nf3 and O-O, then d3 and e4 for a King's Indian " +
      "Attack, or c4 for a Réti or Catalan structure. The same position arises after 1.g3 Nf6 " +
      "2.Bg2 d5.",
  },

  "1.g3 d5 2.Bg2 c6": {
    name: "Hungarian Opening: Slav Formation",
    background:
      "The name refers to the Slav Defence, 1.d4 d5 2.c4 c6, which has the same pawns on c6 " +
      "and d5. That opening was analysed as early as 1590 but explored extensively only from " +
      "the 1920s, and many masters of Slavic descent, among them Alapin, Alekhine, Bogoljubov " +
      "and Vidmar, helped develop its theory.",
    strategy:
      "Supports d5 with a second pawn, which blunts the g2 bishop on the long diagonal. Black " +
      "follows with ...Nf6 and brings the c8 bishop to f5 or g4 before ...e6 completes the " +
      "chain; the b8 knight develops via d7, since c6 is taken. White chooses between c4 " +
      "against d5 and a King's Indian Attack with Nf3, O-O, d3 and e4.",
  },

  "1.g3 d5 2.Bg2 c5": {
    name: "Hungarian Opening: Reversed Modern Defence",
    strategy:
      "Takes control of d4 and gains queenside space, with ...Nc6, ...Nf6 and ...e5 or ...e6 " +
      "to follow. White chooses between c4, hitting d5, and Nf3, O-O and d3 for a King's " +
      "Indian Attack. Black has to watch d5, which only the queen guards against the g2 " +
      "bishop, and can meet c4 with ...d4, ...e6 or ...Nf6.",
  },

  "1.g3 d5 2.Bg2 e5": {
    strategy:
      "Takes the centre with a second pawn, the same position as after 1.g3 e5 2.Bg2 d5. " +
      "Black follows with ...Nf6, ...Nc6 and ...Be7. White keeps a King's Indian Attack " +
      "set-up with d3, Nf3 and O-O, or strikes at once with c4 or d4. Both central pawns need " +
      "support: the g2 bishop and c4 aim at d5, while Nf3 and d4 hit e5.",
  },

  "1.g3 d5 2.Bg2 e6": {
    name: "Hungarian Opening: Catalan Formation",
    background:
      "The name refers to the Catalan Opening, in which White plays d4 and c4 and " +
      "fianchettoes the bishop on g2. That opening takes its name from Catalonia: the " +
      "organisers of the 1929 Barcelona tournament asked Savielly Tartakower to create a new " +
      "variation in homage to Catalonia's chess history.",
    strategy:
      "Supports d5 and opens the f8 bishop's diagonal for ...Be7, with ...Nf6 and castling to " +
      "follow. White answers with Nf3, O-O, d3 and e4 in King's Indian Attack style, or with " +
      "c4 against d5. Sound but passive: the c8 bishop stays shut in behind e6 until ...b6 " +
      "and ...Bb7 or a later ...e5 frees it.",
  },

  "1.g3 d5 2.Bg2 Nc6": {
    strategy:
      "Develops the knight towards d4 and e5, but blocks the c-pawn, so ...c6 can no longer " +
      "support d5. After c4 the d5 pawn is attacked twice and guarded only by the queen, so " +
      "Black needs ...e6, ...Nf6 or ...d4. Playable, but ...Nf6 develops a piece without " +
      "blocking the c-pawn.",
  },

  "1.g3 d5 2.Bg2 f5": {
    strategy:
      "Takes e4 from White and aims for a Stonewall set-up with ...Nf6, ...e6 and ...c6. The " +
      "structure is solid, but it leaves a hole on e5, loosens the e8–h5 diagonal and shuts " +
      "in the c8 bishop once ...e6 follows. White develops with Nf3 and O-O, and after d4 the " +
      "e5 square becomes an outpost for a knight.",
  },

  "1.g3 d5 2.Bg2 g6": {
    strategy:
      "Mirrors White's set-up with ...Bg7, ...Nf6 and ...O-O, with ...c6 or ...c5 to follow. " +
      "The g7 bishop does nothing for d5, so c4 tests the pawn at once: it is attacked twice " +
      "and guarded only by the queen. Sound, but less flexible than ...Nf6.",
  },

  "1.g3 d5 2.Bg2 d4": {
    strategy:
      "Gains space and takes c3 and e3 from White's pieces, with ...c5 and ...e5 to support " +
      "the advanced pawn. The cost is the long diagonal: with d5 vacated the g2 bishop bears " +
      "on b7, so the c8 bishop is tied to its defence until ...c6 or ...Nc6 closes the line, " +
      "and c3 or e3 with Nf3 can undermine the pawn later.",
  },

  "1.g3 d5 2.Bg2 Be6": {
    strategy:
      "Guards d5 but blocks the e7 pawn, so the f8 bishop can come out only via ...g6, and " +
      "with the c8 bishop gone b7 has no guard against c4 and Qb3. White also gains time with " +
      "Nf3 and Ng5, hitting the bishop.",
  },

  "1.g3 d5 2.Bg2 Bf5": {
    strategy:
      "Develops the bishop outside the pawn chain but takes the guard away from b7. After " +
      "3.c4 c6 4.cxd5 cxd5 5.Qb3 the queen hits b7 and, together with the g2 bishop, d5, so " +
      "Black has to defend both pawns at once.",
  },

  "1.g3 d5 2.Bg2 Bg4": {
    strategy:
      "Develops the bishop before White's knight is on f3, so it pins nothing, and h3 makes " +
      "it move again at once. With the bishop gone from c8, b7 has no guard, and c4 with Qb3 " +
      "hits b7 and d5 together.",
  },

  "1.g3 d5 2.Bg2 Qd7": {
    strategy:
      "Keeps d5 guarded, but the queen blocks the c8 bishop and takes d7 from the b8 knight, " +
      "so Black's development stalls. White builds with c4, Nc3 and Nf3, and the queen " +
      "usually has to move again to let the c8 bishop out.",
  },

  "1.g3 d5 2.Bg2 Qd6": {
    strategy:
      "Brings the queen out before any minor piece. 3.Nc3 attacks d5 a second time and " +
      "threatens Nb5 against the queen and c7, so Black loses time defending while White " +
      "prepares e4.",
  },

  "1.g3 d5 2.Bg2 Na6": {
    strategy:
      "Puts the knight on the rim, where it guards neither d5 nor e5 and needs another move, " +
      "to b4 or c7, to help hold d5. White builds with c4 and Nf3 unhindered.",
  },

  "1.g3 d5 2.Bg2 Nh6": {
    strategy:
      "Heads for f5 instead of f6, the natural square from which the knight guards d5 and " +
      "covers e4. Once White's d-pawn has moved, Bxh6 gxh6 doubles Black's h-pawns.",
  },

  "1.g3 d5 2.Bg2 a6": {
    strategy:
      "Spends a tempo on a flank move that prepares only ...b5. Nothing is done for the " +
      "centre or for development, and White can take space with c4 or d4 and develop freely.",
  },

  "1.g3 d5 2.Bg2 a5": {
    strategy:
      "Gains queenside space and stops b4, but does nothing for the centre or development. " +
      "White continues with c4, Nf3 and O-O undisturbed.",
  },

  "1.g3 d5 2.Bg2 b6": {
    strategy:
      "Prepares ...Bb7, but the d5 pawn blocks that bishop, and with the b-pawn gone the long " +
      "diagonal opens towards a8 as soon as d5 moves: after 3.c4 dxc4? 4.Bxa8 White wins at " +
      "least the exchange.",
  },

  "1.g3 d5 2.Bg2 b5": {
    strategy:
      "Advances a flank pawn before developing. 3.Nc3 attacks b5 and d5 together, so Black " +
      "has to answer ...c6, and the pawns on b5, c6 and d5 leave a lasting hole on c5.",
  },

  "1.g3 d5 2.Bg2 f6": {
    strategy:
      "Prepares ...e5, but takes the best square from the g8 knight, weakens the e8-h5 " +
      "diagonal and the e6 square, and develops nothing. White takes the centre with c4 or " +
      "d4.",
  },

  "1.g3 d5 2.Bg2 g5": {
    strategy:
      "Weakens f5, h5 and the a1–h8 diagonal without developing anything, and 3.h4 attacks " +
      "the unprotected pawn at once. The kingside is loosened for good, and the king has no " +
      "safe home there.",
  },

  "1.g3 d5 2.Bg2 h6": {
    strategy:
      "Takes g5 from White's pieces, but White has not threatened to go there, and nothing is " +
      "done for development or the centre. The tempo is better spent on ...Nf6, ...c6 or " +
      "...e6.",
  },

  "1.g3 d5 2.Bg2 h5": {
    strategy:
      "Prepares ...h4 against g3, but with no piece developed the attack is premature. It " +
      "loosens g5 and the kingside and gives White time to take the centre with c4 or d4.",
  },

  "1.g3 d5 2.Bg2 Nd7": {
    strategy:
      "Blocks the queen's protection of d5, so 3.Bxd5 wins a pawn; ...Nb6 only gains a tempo " +
      "against the bishop, which retreats with the pawn won.",
  },

  "1.g3 d5 2.Bg2 Bd7": {
    strategy:
      "Blocks the queen's protection of d5 and leaves b7 without its bishop, so 3.Bxd5 wins a " +
      "pawn and attacks b7 as well.",
  },

  "1.g3 d5 2.Bg2 Kd7": {
    strategy:
      "Blocks the d-file, so d5 loses the queen's protection and 3.Bxd5 wins a pawn; the king " +
      "also gives up castling and stands in the centre.",
  },

  "1.g3 d5 2.Bg2 Bh3": {
    strategy:
      "Attacks the g2 bishop but hangs its own: 3.Bxh3 or 3.Nxh3 wins a whole piece, since " +
      "nothing protects h3.",
  },
};
