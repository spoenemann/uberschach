import type { OpeningTexts } from "../book.ts";

// English prose for d4-e6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.d4 e6 2.c4": {
    background:
      "The most common reply to 1...e6, keeping the game in Queen's Pawn territory. Howard " +
      "Staunton played 1...e6 five times in his 1843 match series against Saint-Amant, the " +
      "strongest French player of the time, and each game transposed into a Queen's Gambit " +
      "Declined with 2.c4 d5.",
    strategy:
      "Adds the c-pawn to the fight for d5 and keeps the Queen's Gambit and Indian structures " +
      "in play: 2...d5 gives a Queen's Gambit Declined, 2...Nf6 a Nimzo-Indian, Queen's " +
      "Indian or Bogo-Indian. Black also gets the widest choice of independent replies: a " +
      "Dutch with 2...f5, the English Defence with 2...b6, a Benoni with 2...c5 or the Keres " +
      "Defence with 2...Bb4+, which White usually meets with 3.Bd2.",
  },

  "1.d4 e6 2.Nf3": {
    strategy:
      "Develops the king's knight, guards d4 and e5 and keeps every set-up open: c4 for the " +
      "Queen's Gambit Declined and Indian structures, e3 and Bd3 for a Colle, Bf4 for a " +
      "London, g3 and Bg2 for a Catalan. It offers a similar range of transpositions as 2.c4 " +
      "but avoids the Keres Defence with 2...Bb4+. Black can still choose the structure with " +
      "2...d5, 2...c5 or 2...Nf6.",
  },

  "1.d4 e6 2.e4": {
    strategy:
      "Builds the full pawn centre and transposes to the French Defence, since the position " +
      "is the same as after 1.e4 e6 2.d4. After 2...d5 the e4-pawn is attacked, and White " +
      "chooses between defending it with 3.Nc3 or 3.Nd2, advancing with 3.e5 or exchanging " +
      "with 3.exd5. Black's counterplay comes from ...c5 against d4 and, after 3.e5, from " +
      "...f6 against the pawn chain.",
  },

  "1.d4 e6 2.Bf4": {
    strategy:
      "Develops the dark-squared bishop before e3 can shut it in, the first step of the " +
      "London System: e3, Nf3, c3 and Bd3 or Nbd2 follow in a solid set-up with a fixed plan. " +
      "With the bishop gone from c1 the b2-pawn is undefended, so ...c5 with ...Qb6 is a " +
      "typical answer. Black can also offer an exchange with ...Bd6 and reach ...d5 without " +
      "hurry.",
  },

  "1.d4 e6 2.g3": {
    strategy:
      "Prepares Bg2 on the long diagonal, aimed at d5 and b7, and can reach a Catalan after a " +
      "later c4 and Nf3. It is slower than 2.c4 or 2.Nf3, so Black can strike first with " +
      "2...c5 against d4 or settle the centre with 2...d5.",
  },

  "1.d4 e6 2.Nc3": {
    strategy:
      "Develops the knight and keeps two plans: after 2...d5, 3.e4 reaches the French Defence " +
      "with 3.Nc3, while Bf4 gives a Jobava London. The knight blocks the c-pawn, so the " +
      "Queen's Gambit structures are ruled out, and 2...Bb4 pins it at once. Sound, but less " +
      "flexible than 2.c4 or 2.Nf3.",
  },

  "1.d4 e6 2.Nd2": {
    strategy:
      "Supports e4, so that 2...d5 3.e4 reaches the Tarrasch Variation of the French Defence. " +
      "The knight shuts in the c1-bishop, ruling out Bf4, and Black can avoid the French with " +
      "2...c5 or 2...Nf6. Playable but passive.",
  },

  "1.d4 e6 2.c3": {
    strategy:
      "Props up d4 and stops ...Bb4+, with Nf3, Bf4 or e3 and Bd3 to follow in a compact " +
      "set-up. It is slow and takes c3 from the b1-knight, which must come out via d2, while " +
      "Black gets ...d5 and ...c5 or ...Nf6 with free development. Sound, but it gives up the " +
      "initiative.",
  },

  "1.d4 e6 2.e3": {
    strategy:
      "Frees the f1-bishop for Bd3 and supports d4 for a Colle-style set-up with Nf3, c3 or " +
      "b3, and Nbd2. It shuts the c1-bishop in behind the pawn, however, and Black answers " +
      "with ...d5 or ...c5 at no cost. Sound but committal, since 2.Nf3 reaches the same " +
      "set-up while keeping the option of Bf4 before e3.",
  },

  "1.d4 e6 2.b3": {
    strategy:
      "Prepares Bb2, but with the pawn already on d4 the bishop bites on its own pawn and " +
      "only supports it until a later d5 or dxc5 opens the diagonal. Black can answer with " +
      "2...Bb4+ or simply with ...d5, ...c5 and ...Nf6 for a free game. Playable, but 2.c4 " +
      "and 2.Nf3 do more for the centre.",
  },

  "1.d4 e6 2.a3": {
    strategy:
      "Stops ...Bb4+ and prepares b4, but it develops nothing and loses a tempo. Black takes " +
      "the centre with ...d5 and ...Nf6 while White's pieces are still at home.",
  },

  "1.d4 e6 2.a4": {
    strategy:
      "A rim pawn move that neither develops a piece nor fights for the centre, and it does " +
      "not even stop 2...Bb4+. Black then continues ...d5 with a free game.",
  },

  "1.d4 e6 2.b4": {
    strategy:
      "Prepares Bb2, but the pawn is undefended and 2...Bxb4+ takes it with check. After 3.c3 " +
      "Be7 or 3.Bd2 Bxd2+ White has only a little development for the lost pawn.",
  },

  "1.d4 e6 2.f3": {
    strategy:
      "Prepares e4 but takes f3 from the g1-knight and opens the e1-h4 diagonal, so 2...Qh4+ " +
      "forces the weakening 3.g3 or the loss of castling with 3.Kd2. The move does nothing " +
      "against ...d5 or ...c5.",
  },

  "1.d4 e6 2.f4": {
    strategy:
      "Takes e5 for a Dutch-style structure but develops no piece and opens the e1-h4 " +
      "diagonal, so 2...Qh4+ forces 3.g3 at once. The kingside is loosened before White has " +
      "developed, and Black continues with ...d5 or ...c5 freely.",
  },

  "1.d4 e6 2.g4": {
    strategy:
      "Gains space on the kingside but leaves the pawn undefended: 2...Qh4 attacks it at " +
      "once, pins the f2-pawn and forces 3.h3 or 3.Bh3 to keep it. The kingside is loosened " +
      "before a single piece has developed.",
  },

  "1.d4 e6 2.h3": {
    strategy:
      "A waiting move that does nothing for the centre or development. Black plays ...d5 and " +
      "...Nf6 while White's pieces are still at home.",
  },

  "1.d4 e6 2.h4": {
    strategy:
      "A flank thrust that does nothing for the centre or development and loosens the " +
      "kingside without a target. White has lost a tempo, and Black replies ...d5 with an " +
      "easy game.",
  },

  "1.d4 e6 2.Bd2": {
    strategy:
      "Takes d2 from the b1-knight and puts the bishop on a passive square, where it does " +
      "less than it would on f4. Black develops freely with ...d5, ...Nf6 and ...c5.",
  },

  "1.d4 e6 2.Be3": {
    strategy:
      "Blocks the e-pawn completely, since e2-e4 needs e3 to be empty, so while the bishop " +
      "stands there the f1-bishop can only come out via g3 and Bg2. The move does not " +
      "challenge the centre, and Black takes space with ...d5 or ...c5.",
  },

  "1.d4 e6 2.Qd2": {
    strategy:
      "An early queen move that blocks the c1-bishop, takes d2 from the b1-knight and " +
      "develops nothing. 2...Bb4 attacks the queen at once, so White must move it again or " +
      "block with c3 or Nc3, and Black takes the centre with ...d5.",
  },

  "1.d4 e6 2.Qd3": {
    strategy:
      "Brings the queen out early and blocks the f1-bishop's diagonal. Black can develop with " +
      "...Nc6 and ...Nb4 or hit d4 with ...c5, while White has no development to show for the " +
      "queen's trip.",
  },

  "1.d4 e6 2.Nh3": {
    strategy:
      "A rim knight heading for f4, where it would press on e6, but it stands far from the " +
      "centre and leaves the natural f3-square unused. Black simply takes the centre with " +
      "...d5.",
  },

  "1.d4 e6 2.Na3": {
    strategy:
      "Heads for c4 or b5 from the rim and does nothing against the centre. Black can play " +
      "...d5 at once, or take with 2...Bxa3 3.bxa3, doubling and isolating White's a-pawns at " +
      "the cost of the bishop pair.",
  },

  "1.d4 e6 2.d5": {
    strategy:
      "Exchanges the d-pawn for the e-pawn at once: after 2...exd5 3.Qxd5 the queen stands " +
      "exposed in the centre, and Black develops with gain of time by ...Nf6 and ...c6.",
  },

  "1.d4 e6 2.Kd2": {
    strategy:
      "Forfeits castling and puts the king in the open centre, where 2...Bb4+ gains time and " +
      "the king blocks the c1-bishop and the queen. Nothing is gained for the lasting " +
      "weakness.",
  },

  "1.d4 e6 2.Bg5": {
    strategy:
      "Hangs the bishop: the queen's diagonal d8-g5 is open after ...e6, nothing defends the " +
      "bishop, and 2...Qxg5 wins a piece.",
  },

  "1.d4 e6 2.Bh6": {
    strategy: "Loses the bishop for nothing: 2...gxh6 or 2...Nxh6 takes it and nothing recaptures.",
  },

  "1.d4 e6": {
    name: "Franco-Indian Defence",
    background:
      "The name reflects that 1...e6 may lead to the French Defence or to one of the Indian " +
      "Defences. Eric Schiller proposed calling it the Horwitz Defence, after Bernhard " +
      "Horwitz, who played it against Daniel Harrwitz between 1849 and 1852.",
  },

  "1.d4 e6 2.c4 Nf6": {
    strategy:
      "Develops the king's knight, controls e4 and keeps the main Indian set-ups and the " +
      "Queen's Gambit Declined open. After 3.Nc3 Black can pin with ...Bb4, after 3.Nf3 " +
      "choose ...b6, ...Bb4+ or ...d5, and 3.g3 d5 4.Bg2 leads to a Catalan. The cost is the " +
      "c8-bishop, which stays shut in behind the e6-pawn until ...b6 and ...Bb7 develop it.",
  },

  "1.d4 e6 2.c4 d5": {
    strategy:
      "Occupies the centre at once and reaches a Queen's Gambit Declined, where the c8-bishop " +
      "stays shut in behind the e6-pawn until Black frees it with ...b6 and ...Bb7 or with " +
      "...dxc4 and ...e5. After 3.Nc3 Nf6 or 3.Nf3 Nf6 the usual plan is ...Be7 and ...O-O. " +
      "The structure is solid but a little passive, and White keeps the initiative with " +
      "pressure on d5.",
  },

  "1.d4 e6 2.c4 Bb4+": {
    name: "Keres Defence",
    background:
      "Named after the Estonian grandmaster Paul Keres and also called the Kangaroo Defence. " +
      "The check was known from the 1840s, and Henry Thomas Buckle played it against Johann " +
      "Löwenthal in the fourth game of their match in London in 1851; the standard reply " +
      "today, 3.Bd2, was recommended by Howard Staunton.",
    strategy:
      "Develops with check before Black commits the g8-knight; White usually answers 3.Bd2 to " +
      "avoid a Nimzo-Indian. Then 3...Bxd2+ or 3...a5 tends to reach a Bogo-Indian once White " +
      "plays Nf3 and Black ...Nf6, while 3.Nc3 allows a Nimzo-Indian with ...Nf6, a Dutch " +
      "with ...f5 or an English Defence with ...b6. After 3.Bd2 Qe7 4.e4 d5 5.Bxb4 Qxb4+ " +
      "6.Qd2 the queens come off and White keeps a slight edge.",
  },

  "1.d4 e6 2.c4 f5": {
    name: "Dutch Defence",
    background:
      "Elias Stein recommended the Dutch as the best reply to 1.d4 in his 1789 book, and both " +
      "Botvinnik and Bronstein played it in their 1951 World Championship match. The English " +
      "grandmaster Simon Williams often plays 1.d4 e6 as a way of reaching the Dutch while " +
      "avoiding the Staunton Gambit (1.d4 f5 2.e4).",
    strategy:
      "Stakes a claim to e4 and aims for kingside attacking chances, usually with ...Nf6 and " +
      "either the Classical set-up (...Be7, ...O-O, ...d6) or the Stonewall (...d5, ...c6, " +
      "...Bd6). The price is a loosened kingside, especially the e8-h5 diagonal, and in the " +
      "Stonewall a hole on e5. White usually answers with 3.g3 and Bg2 or with 3.Nc3 and Nf3.",
  },

  "1.d4 e6 2.c4 Be7": {
    strategy:
      "Develops the bishop to its usual square in the Queen's Gambit Declined, with ...d5 and " +
      "...Nf6 to follow, so 3.Nc3 d5 transposes to that opening. It gives up the active " +
      "...Bb4 and lets White take space with 3.e4, which 2...d5 and 2...Nf6 prevent. Sound, " +
      "but those two moves reach the same structures without the concession.",
  },

  "1.d4 e6 2.c4 b6": {
    name: "English Defence",
    background:
      "The Leicester player P. N. Wallis investigated the opening in the late 1940s and early " +
      "1950s, and in the 1970s it was taken up by leading English players such as Tony Miles " +
      "and Raymond Keene. Viktor Korchnoi used it successfully in game 6 of his Candidates " +
      "semi-final match against Lev Polugaevsky at Évian in 1977.",
    strategy:
      "Prepares ...Bb7 against e4 and lets White build a broad centre, which Black then " +
      "attacks with ...Bb4, ...f5 and sometimes ...Qh4 instead of occupying it. A typical " +
      "line is 3.e4 Bb7 4.Bd3 Bb4+ 5.Nc3 f5, while 3.Nc3 Bb7 4.Nf3 Bb4 usually becomes a " +
      "Nimzo-Indian after ...Nf6. Rare in grandmaster play, and Black must play accurately " +
      "against White's space.",
  },

  "1.d4 e6 2.c4 c6": {
    strategy:
      "Prepares ...d5 and reaches Semi-Slav structures after 3.Nc3 d5 or 3.Nf3 d5, with " +
      "...Nf6 and ...Nbd7 to follow. It commits the c-pawn before White shows a plan and " +
      "gives White extra options such as 3.e4, so it is not recommended over 2...d5 or " +
      "2...Nf6.",
  },

  "1.d4 e6 2.c4 c5": {
    strategy:
      "Strikes at d4 at once and leaves the choice of structure to White: 3.d5 exd5 4.cxd5 " +
      "gives a Benoni pawn structure with a queenside majority for Black, 3.Nf3 can lead to a " +
      "Symmetrical English, and 3.dxc5 Bxc5 releases the tension. Sound, but after 3.d5 Black " +
      "has to accept White's extra space in the centre in return for queenside play.",
  },

  "1.d4 e6 2.c4 g6": {
    strategy:
      "Prepares ...Bg7 and a Modern-style set-up that lets White build a centre with Nc3 and " +
      "e4, then aims to undermine it with ...d6 and ...c5 or ...e5. Sound but slow: the " +
      "e6-pawn already shuts in the c8-bishop, and White gets a broad centre before ...Nf6 " +
      "can challenge it.",
  },

  "1.d4 e6 2.c4 Nc6": {
    strategy:
      "Develops a knight and eyes e5, but 3.d5 hits both the knight and the e6-pawn at once. " +
      "After 3...exd5 4.cxd5 the knight has to move again, and White follows with e4 to build " +
      "a broad centre.",
  },

  "1.d4 e6 2.c4 Na6": {
    strategy:
      "Aims for b4, or for c7 once the c-pawn has moved, but a knight on the rim does little " +
      "for the centre and costs time. White takes space with 3.e4 or develops with 3.Nc3 " +
      "while the knight is still looking for a square.",
  },

  "1.d4 e6 2.c4 Qe7": {
    strategy:
      "Puts the queen on e7, where it blocks the f8-bishop's only open diagonal and does " +
      "little for d5 or e4. White takes the centre with 3.e4 or develops with 3.Nc3 while " +
      "Black's pieces get in each other's way.",
  },

  "1.d4 e6 2.c4 Qf6": {
    strategy:
      "Takes f6 from the g8-knight and leaves the queen open to e4-e5 with gain of time. " +
      "White simply develops with 3.Nc3 and builds a centre with e4.",
  },

  "1.d4 e6 2.c4 Qh4": {
    strategy:
      "The queen comes out early and is attacked at once by 3.Nf3, which also guards d4, or " +
      "by 3.g3, so White develops with tempo. Black has no pieces out to support it and loses " +
      "time retreating.",
  },

  "1.d4 e6 2.c4 Bd6": {
    strategy:
      "Puts the bishop on d6, where it blocks the d-pawn and can be hit by c4-c5, e4-e5 or " +
      "Nc3-b5. Nothing is prepared in the centre, and White takes space while the bishop " +
      "looks for a better post.",
  },

  "1.d4 e6 2.c4 Nh6": {
    strategy:
      "Heads for f5 or g4 but runs into 3.Bxh6 gxh6, which wrecks the kingside pawns for " +
      "good. A knight on the rim also does nothing for the centre.",
  },

  "1.d4 e6 2.c4 Ne7": {
    strategy:
      "Heads for f5 or g6 but blocks the f8-bishop, which can then only come out via ...g6 " +
      "and ...Bg7 or after the knight moves on. White takes the centre with 3.Nc3 and e4 " +
      "while Black's pieces get in each other's way.",
  },

  "1.d4 e6 2.c4 a6": {
    strategy:
      "A flank move that prepares ...b5 but does nothing about the centre. White develops " +
      "with 3.Nc3 or takes space with 3.e4, while Black has made no real step towards getting " +
      "the pieces out.",
  },

  "1.d4 e6 2.c4 a5": {
    strategy:
      "Prepares ...Bb4+ with the pawn supporting the bishop, an idea from the Bogo-Indian, " +
      "but it spends a tempo on the wing and weakens b5. White develops with 3.Nc3 or takes " +
      "the centre with 3.e4 first.",
  },

  "1.d4 e6 2.c4 b5": {
    strategy:
      "Offers the b-pawn in the style of a Benko Gambit, but with White's pawn still on d4 " +
      "and no black piece developed. After 3.cxb5 White is a clean pawn up, and ...a6 or " +
      "...Bb7 brings too little for it.",
  },

  "1.d4 e6 2.c4 d6": {
    strategy:
      "A slow, passive move that rules out the Queen's Gambit set-ups with ...d5. White takes " +
      "the centre with 3.Nc3 and e4, and the e6-pawn keeps the c8-bishop cramped.",
  },

  "1.d4 e6 2.c4 f6": {
    strategy:
      "Takes f6 from the knight and weakens e6 and the e8-h5 diagonal while doing little for " +
      "the centre. White takes space with 3.e4 or develops with 3.Nc3, and Black's kingside " +
      "pieces have no good squares.",
  },

  "1.d4 e6 2.c4 g5": {
    strategy:
      "Weakens the kingside and the dark squares for nothing. Only the queen guards the pawn " +
      "against the c1-bishop, so after Nf3 Black must support it with ...h6 or push on with " +
      "...g4, which loosens the position further.",
  },

  "1.d4 e6 2.c4 h6": {
    strategy:
      "Stops Bg5 but spends a tempo on the rook pawn without helping development or the " +
      "centre. White takes space with 3.Nc3 and e4 or develops with 3.Nf3.",
  },

  "1.d4 e6 2.c4 h5": {
    strategy:
      "Spends a tempo on the rook pawn that does nothing for the centre or development and " +
      "gives up ...h6 as a way to keep a bishop off g5. White develops with 3.Nc3 or 3.Nf3 " +
      "and takes the centre with e4.",
  },

  "1.d4 e6 2.c4 e5": {
    name: "Horwitz Defence: Zilbermints Gambit",
    strategy:
      "Offers the e-pawn for activity: 3.dxe5 wins a pawn, and Black has spent two moves on " +
      "the e-pawn. Compensation must come from quick development with ...Nc6 and ...Bb4+, " +
      "which is hard because White can keep e5 with Nf3 or Bf4 and meets ...Bb4+ with Nc3 or " +
      "Bd2.",
  },

  "1.d4 e6 2.c4 Qg5": {
    strategy:
      "Loses the queen to 3.Bxg5: the c1-bishop's diagonal is open because the d-pawn has " +
      "left d2, and the queen steps onto a square the bishop attacks.",
  },

  "1.d4 e6 2.c4 Ke7": {
    strategy:
      "Gives up castling for good and blocks the f8-bishop and the queen's d8-h4 diagonal. " +
      "3.Bg5+ checks at once along the open c1-h6 diagonal, and Black must block with ...f6 " +
      "or a pinned ...Nf6, or move the king again.",
  },

  "1.d4 e6 2.c4 Bc5": {
    strategy:
      "Loses a piece: the d4-pawn attacks c5 and nothing guards the bishop, so 3.dxc5 wins it " +
      "for free.",
  },

  "1.d4 e6 2.c4 Ba3": {
    strategy:
      "Loses the bishop: 3.Nxa3 or 3.bxa3 simply takes it, and Black has no compensation for " +
      "the piece.",
  },

  "1.d4 e6 2.Nf3 Nf6": {
    strategy:
      "Develops the knight, controls e4 and d5 and keeps several Indian set-ups open: after " +
      "3.c4 Black chooses between ...b6, ...Bb4+ and ...d5, which give the Queen's Indian, " +
      "the Bogo-Indian or the Queen's Gambit Declined. Against 3.e3, 3.g3 or 3.Bf4 the plan " +
      "is ...d5 and ...c5, or ...b6 and ...Bb7. The price is the c8-bishop, hemmed in by the " +
      "e6-pawn until ...b6 opens the long diagonal for it.",
  },

  "1.d4 e6 2.Nf3 d5": {
    strategy:
      "Takes the centre at once and reaches a Queen's Gambit Declined after 3.c4, while 3.e3 " +
      "or 3.Bf4 steers towards a Colle or London set-up. Black follows with ...Nf6, ...Be7 " +
      "and ...O-O, or strikes at d4 with ...c5. The price is the c8-bishop, which is shut in " +
      "behind the e6-pawn until Black plays ...b6 or opens the centre.",
  },

  "1.d4 e6 2.Nf3 c5": {
    strategy:
      "Challenges d4 before White has built with c4 and e4. After 3.c4 cxd4 4.Nxd4 Nf6 5.Nc3 " +
      "the game is a Symmetrical English, 3.c4 Nf6 4.d5 exd5 5.cxd5 d6 gives a Benoni, and " +
      "3.e4 cxd4 4.Nxd4 transposes to an Open Sicilian. Against the quieter 3.e3 or 3.c3 " +
      "Black develops freely with ...Nf6 and ...d5. In the open lines the d-pawn is left " +
      "backward on the half-open d-file.",
  },

  "1.d4 e6 2.Nf3 f5": {
    name: "Dutch Defence",
    background:
      "Black sometimes begins with 1...e6 to reach the Dutch without allowing the Staunton " +
      "Gambit (1.d4 f5 2.e4), named after Howard Staunton, who introduced it in his match " +
      "against Bernhard Horwitz in London in 1846. English grandmaster Simon Williams often " +
      "uses 1.d4 e6 for exactly this purpose.",
    strategy:
      "Controls e4 and heads for a Dutch set-up with ...Nf6, ...Be7 and ...O-O, or a " +
      "Stonewall with ...d5, ...c6 and ...Bd6. White usually answers with 3.g3 and Bg2, 3.c4 " +
      "or 3.Bg5, and Black plays for the e4-square and the kingside. The advance weakens e6 " +
      "and the e8-h5 diagonal, and the e5-square can become an outpost for a white knight.",
  },

  "1.d4 e6 2.Nf3 Nc6": {
    strategy:
      "Develops a knight and adds pressure on d4, but blocks the c-pawn, so the ...c5 break " +
      "needs another knight move first. White simply builds the centre with 3.e4 or 3.c4, and " +
      "Black falls back on ...d5 or ...Nf6. Playable, but 2...Nf6 develops just as quickly " +
      "without blocking the c-pawn.",
  },

  "1.d4 e6 2.Nf3 Be7": {
    strategy:
      "Develops the bishop and prepares quick castling after ...Nf6, often heading for a " +
      "Queen's Gambit Declined set-up with ...d5. It commits the bishop before White's plan " +
      "is known and gives up the ...Bb4+ option that 2...Nf6 keeps, while 3.e4 d5 4.e5 gives " +
      "White a French Advance structure with extra space. Sound, but less flexible than the " +
      "main replies.",
  },

  "1.d4 e6 2.Nf3 b6": {
    strategy:
      "Prepares ...Bb7 against e4 and the long diagonal, and 3.c4 Bb7 4.Nc3 Nf6 reaches a " +
      "Queen's Indian. White can instead take the centre with 3.e4 Bb7 4.Bd3, the main line " +
      "of Owen's Defence, which theory regards as dubious for Black. Playable, not " +
      "recommended.",
  },

  "1.d4 e6 2.Nf3 c6": {
    strategy:
      "Prepares ...d5 and a Slav-style set-up: after 3.c4 d5 4.Nc3 Nf6 the Semi-Slav arises. " +
      "The c-pawn is committed before White's plan is clear, so White can sidestep it with " +
      "3.Bf4 or 3.e4, and a later ...c5 costs a second tempo. Sound, but less flexible than " +
      "2...Nf6 or 2...d5.",
  },

  "1.d4 e6 2.Nf3 d6": {
    strategy:
      "Opens d7 for the c8-bishop and the b8-knight and prepares a compact set-up with " +
      "...Nf6, ...Be7 and ...O-O, with ...b6 and ...c5 to follow. White takes space with 3.c4 " +
      "or 3.e4, and Black has no quick way to challenge the centre. Sound but passive.",
  },

  "1.d4 e6 2.Nf3 g6": {
    strategy:
      "Prepares ...Bg7 and kingside castling, a Modern-style set-up behind the e6-pawn. No " +
      "pawn contests d4 or e4 yet, so White has a free hand with 3.e4 or 3.c4, and Black must " +
      "later undermine the large centre with ...c5 or ...d5. Sound enough, but slower than " +
      "2...Nf6 or 2...d5.",
  },

  "1.d4 e6 2.Nf3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but does little else, and 3.e4 " +
      "followed by Bxa6 would double Black's a-pawns. The centre is left to White, who simply " +
      "takes space with e4 or c4.",
  },

  "1.d4 e6 2.Nf3 Qe7": {
    strategy:
      "Blocks the f8-bishop and invites 3.Bg5, which develops with an attack on the queen: " +
      "...f6 weakens the kingside, and ...Nf6 walks into a pin. Black's other pieces stay at " +
      "home while White develops with threats.",
  },

  "1.d4 e6 2.Nf3 Qf6": {
    strategy:
      "Brings the queen out early and takes f6 from the knight, and 3.Bg5 attacks it at once: " +
      "3...Qxg5 loses the queen to 4.Nxg5. White gains a tempo and a free hand in the centre.",
  },

  "1.d4 e6 2.Nf3 Bd6": {
    strategy:
      "Puts the bishop in front of the d-pawn, where 3.e4 and e5 will chase it. Developing " +
      "the knight is no cure: 3.e4 Nf6 4.e5 forks the bishop on d6 and the knight on f6.",
  },

  "1.d4 e6 2.Nf3 Bb4+": {
    strategy:
      "Checks without a target: 3.c3 drives the bishop back at once, and 3.Bd2 or 3.Nbd2 " +
      "blocks it with a developing move. Without a pawn on c4 the check gains nothing, and a " +
      "trade on d2 only brings another white piece into play.",
  },

  "1.d4 e6 2.Nf3 Nh6": {
    strategy:
      "Puts the knight on the rim, from where 3.Bxh6 gxh6 wrecks the kingside pawns for a " +
      "mere bishop-for-knight trade. Nothing is developed usefully and the h-pawns are " +
      "doubled and isolated.",
  },

  "1.d4 e6 2.Nf3 Ne7": {
    strategy:
      "Prepares ...d5 and ...Ng6 but blocks the f8-bishop and the queen, and the knight " +
      "stands worse on e7 than on f6. White takes the centre with 3.e4 or 3.c4 while Black's " +
      "pieces stay tangled.",
  },

  "1.d4 e6 2.Nf3 a6": {
    strategy:
      "Prepares ...b5 and ...Bb7 but spends a tempo on a rim pawn while the centre and " +
      "development are untouched. White chooses c4, e3 or Bf4 at leisure.",
  },

  "1.d4 e6 2.Nf3 a5": {
    strategy:
      "Stops b4 and gains queenside space, but spends a tempo on a rim pawn and leaves b5 " +
      "weak. Neither the centre nor development is addressed, so White continues with c4 or " +
      "e3.",
  },

  "1.d4 e6 2.Nf3 b5": {
    strategy:
      "Grabs queenside space before any piece is out, and the pawn is loose: 3.e4 opens the " +
      "f1-bishop and threatens Bxb5, and a4 can hit it as well. The c6-square is weakened, " +
      "and White gains the centre at no cost.",
  },

  "1.d4 e6 2.Nf3 f6": {
    strategy:
      "Takes f6 from the knight, weakens the e8-h5 diagonal and develops nothing. White " +
      "builds the centre with 3.e4 and c4, while the g8-knight is left with e7 or h6.",
  },

  "1.d4 e6 2.Nf3 h6": {
    strategy:
      "Stops Bg5 for the price of a tempo and does nothing for the centre or development. " +
      "White continues with c4, e3 or Bf4 as if Black had passed, and the kingside pawns are " +
      "loosened.",
  },

  "1.d4 e6 2.Nf3 h5": {
    strategy:
      "Develops nothing and weakens g6, and with the pawn already past h6 a bishop on g5 can " +
      "no longer be driven away by ...h6. White uses the tempo for c4, e3 or 3.Bg5, which " +
      "also hits the queen on d8.",
  },

  "1.d4 e6 2.Nf3 Qg5": {
    strategy:
      "Hangs the queen: both 3.Bxg5 and 3.Nxg5 capture it, and nothing defends g5 or " +
      "recaptures.",
  },

  "1.d4 e6 2.Nf3 Qh4": {
    strategy: "Hangs the queen to 3.Nxh4, since nothing defends h4.",
  },

  "1.d4 e6 2.Nf3 Ke7": {
    strategy:
      "Gives up castling for nothing and walks into 3.Bg5+, which gains a tempo. The king in " +
      "the open centre blocks the f8-bishop and the queen with no compensation.",
  },

  "1.d4 e6 2.Nf3 Bc5": {
    strategy:
      "Loses a piece to 3.dxc5, since the d-pawn attacks the bishop and nothing recaptures on " +
      "c5.",
  },

  "1.d4 e6 2.Nf3 Ba3": {
    strategy: "Loses the bishop: 3.bxa3 or 3.Nxa3 captures it and Black gets nothing in return.",
  },

  "1.d4 e6 2.Nf3 g5": {
    strategy:
      "Hangs the pawn: 3.Bxg5 or 3.Nxg5 wins it, and recapturing with ...Qxg5 loses the queen " +
      "to the other piece. The kingside is loosened for nothing.",
  },

  "1.d4 e6 2.Nf3 e5": {
    strategy:
      "Hangs the pawn: 3.dxe5 wins it, the knight on f3 guards the new pawn on e5, and Black " +
      "has no quick way to regain it. White is simply a pawn up.",
  },

  "1.d4 e6 2.Bf4 Nf6": {
    strategy:
      "Develops the kingside knight, controls e4 and d5 and keeps Black's options open: ...d5 " +
      "with ...c5 and ...Nc6 gives a Queen's Gambit Declined-type set-up, ...b6 and ...Bb7 a " +
      "Queen's Indian-type one, and ...c5 with ...Qb6 hits the undefended b2-pawn. The " +
      "position is the same as after 1.d4 Nf6 2.Bf4 e6. The c8-bishop stays shut in behind " +
      "the e6-pawn until ...b6 gives it the long diagonal.",
  },

  "1.d4 e6 2.Bf4 d5": {
    strategy:
      "Takes a share of the centre and reaches the Queen's Gambit Declined-type set-up, the " +
      "same position as after 1.d4 d5 2.Bf4 e6. Black follows with ...Nf6, ...c5 and ...Nc6, " +
      "develops the f8-bishop to d6 or e7 and castles; ...Bd6 challenges the f4-bishop, which " +
      "White meets with Bg3 or Bxd6. The cost is the c8-bishop, which the e6-pawn shuts in " +
      "and which often struggles to find a good square.",
  },

  "1.d4 e6 2.Bf4 c5": {
    background:
      "Black's most common response to the London System involves ...c5 and ...Qb6, and an " +
      "early ...c5 is described as popular at higher levels of play. With ...Nf6 instead of " +
      "...e6, Johnsen and Kovačević considered 1.d4 Nf6 2.Bf4 c5 3.e3 Qb6 the most critical " +
      "line.",
    strategy:
      "Strikes at d4 at once and exploits the bishop's absence from c1: the b2-pawn is " +
      "undefended, so ...Qb6 hits it straight away. After 3.c3 Qb6 White can answer 4.Qb3 and " +
      "offer a queen trade, while 3.e3 and 3.dxc5 Bxc5 are the other natural replies. Black " +
      "completes development with ...Nf6 and ...Nc6; the cost is a c8-bishop still shut in " +
      "behind e6.",
  },

  "1.d4 e6 2.Bf4 f5": {
    background:
      "The English grandmaster Simon Williams often uses 1.d4 e6 as a way of playing for the " +
      "Dutch Defence while avoiding the Staunton Gambit, 1.d4 f5 2.e4.",
    strategy:
      "Controls e4 and heads for a Dutch set-up with ...Nf6, ...Be7 and ...O-O, or a " +
      "Stonewall with ...d5, ...c6 and ...Bd6, where the bishop also challenges the one on " +
      "f4. White usually continues with Nf3, e3 and Bd3 or with c4. The advance weakens e6 " +
      "and the e8-h5 diagonal, and in the Stonewall the e5-square, which the f4-bishop " +
      "already covers, can become an outpost for a white knight.",
  },

  "1.d4 e6 2.Bf4 Bd6": {
    strategy:
      "Challenges the London bishop at once: 3.Bxd6 Qxd6 or 3...cxd6 trades off the key piece " +
      "of White's set-up, and 3.Bg3 Bxg3 4.hxg3 leaves White with doubled g-pawns in return " +
      "for a half-open h-file. It is sound, but a queen on d6 can be hit by e4 and e5, and " +
      "the c8-bishop stays behind e6.",
  },

  "1.d4 e6 2.Bf4 Be7": {
    strategy:
      "Prepares castling, but the bishop is passive on e7 and does not challenge the " +
      "f4-bishop as it would from d6. White builds freely with e3, Nf3, c3 and Nbd2, or " +
      "claims the centre with 3.e4.",
  },

  "1.d4 e6 2.Bf4 Nc6": {
    strategy:
      "Develops a piece and attacks d4, but blocks the c-pawn, so the usual ...c5 break " +
      "against the London is no longer available. Black usually follows with ...d5 and " +
      "...Nf6, while White keeps a solid centre with e3, Nf3 and c3. Sound, but it offers " +
      "less than ...Nf6 or ...d5.",
  },

  "1.d4 e6 2.Bf4 b6": {
    strategy:
      "Prepares ...Bb7 on the long diagonal, for a Queen's Indian-style set-up with ...Nf6 or " +
      "a Hippopotamus with ...Ne7 and ...g6. It is flexible but gives White a free hand in " +
      "the centre: 3.e4 Bb7 4.Nd2 or 4.Bd3 builds a broad pawn centre that Black must " +
      "undermine later with ...c5 or ...f5.",
  },

  "1.d4 e6 2.Bf4 g6": {
    strategy:
      "Prepares ...Bg7 for a Hippopotamus set-up with ...Ne7, ...d6 and ...b6, or an Indian " +
      "one with ...Nf6, keeping ...c5 and ...d5 in reserve. It is sound, but 3.e4 gives White " +
      "a broad centre with easy development, and the pawns on e6 and g6 leave f6 and h6 " +
      "without pawn cover.",
  },

  "1.d4 e6 2.Bf4 Ne7": {
    strategy:
      "Prepares ...Ng6 to chase the f4-bishop and fits Hippopotamus-type set-ups with ...g6 " +
      "or ...b6. The knight shuts in the f8-bishop until it moves on, and the plan is slow: " +
      "White can take the centre with 3.e4 and meet ...Ng6 with Bg3 or Be3.",
  },

  "1.d4 e6 2.Bf4 c6": {
    strategy:
      "Supports a later ...d5 in a Slav-like structure and opens the d8-a5 diagonal for " +
      "...Qb6 against b2 or ...Qa5+. It is sound but slow: it develops no piece, and White " +
      "can claim the centre with 3.e4 or set up with e3, Nf3 and Bd3.",
  },

  "1.d4 e6 2.Bf4 d6": {
    strategy:
      "Plays for a Hippopotamus-style set-up with ...Nd7, ...Ne7 and ...g6, keeping the pawns " +
      "on d6 and e6 as a compact wall. The pawn blocks the f8-bishop's diagonal, though, and " +
      "3.e4 gives White a broad centre against a cramped position.",
  },

  "1.d4 e6 2.Bf4 Na6": {
    strategy:
      "Puts the knight on the rim, where it covers b4 and c5 but no central square. White " +
      "takes the centre with 3.e4, which also opens the f1-bishop's diagonal, so Bxa6 bxa6 " +
      "can double Black's a-pawns.",
  },

  "1.d4 e6 2.Bf4 Nh6": {
    strategy:
      "Heads for f5 from the rim, but the bishop on f4 attacks it: 3.Bxh6 gxh6 wrecks Black's " +
      "kingside pawns for the bishop pair. Even without the exchange the knight is far from " +
      "the centre.",
  },

  "1.d4 e6 2.Bf4 a6": {
    strategy:
      "A waiting move on the wing that develops no piece and does nothing for the centre; at " +
      "most it prepares ...b5. White develops freely with e3, Nf3 and Bd3 or takes the centre " +
      "with 3.e4.",
  },

  "1.d4 e6 2.Bf4 a5": {
    strategy:
      "Gains space on the wing but weakens b5, where a knight from c3 would eye c7 and d6, " +
      "and does nothing for the centre or development. White continues e3, Nf3 and Nc3 at " +
      "leisure.",
  },

  "1.d4 e6 2.Bf4 b5": {
    strategy:
      "Gains queenside space but develops nothing and leaves the pawn undefended: 3.Nc3, or " +
      "3.e4 opening the f1-bishop's path to b5, attacks it at once, so Black must spend " +
      "another tempo on ...a6, ...c6 or ...b4. The advance also weakens c6.",
  },

  "1.d4 e6 2.Bf4 h6": {
    strategy:
      "Takes g5 from the bishop and prepares ...g5, but develops nothing and loosens the " +
      "kingside. White builds with e3, Nf3 and c3 while Black has done nothing for the " +
      "centre.",
  },

  "1.d4 e6 2.Bf4 h5": {
    strategy:
      "Advances the rook's pawn without developing a piece or contesting d4, and rules out " +
      "...h6 against a bishop on g5. White develops freely with e3, Nf3 and c3 or takes the " +
      "centre with 3.e4.",
  },

  "1.d4 e6 2.Bf4 f6": {
    strategy:
      "Takes f6 from the g8-knight, develops nothing and opens the e8-h5 diagonal to the " +
      "black king, so Qh5+ becomes possible once White's e-pawn has moved. White takes the " +
      "centre with 3.e4 and Nf3, and the g8-knight is left with e7 or h6.",
  },

  "1.d4 e6 2.Bf4 g5": {
    strategy:
      "Attacks the bishop with a pawn the queen guards, so 3.Bxg5 Qxg5 would lose a piece for " +
      "a pawn. White simply retreats with 3.Bg3 or 3.Be3, and the advance has only loosened " +
      "Black's kingside: f6 and h6 have lost their pawn cover, and h4 or Nf3 soon hits g5 " +
      "again.",
  },

  "1.d4 e6 2.Bf4 Bb4+": {
    strategy:
      "The check gains nothing: 3.c3 blocks it with a move White wants anyway and attacks the " +
      "bishop, which must retreat at the cost of a tempo.",
  },

  "1.d4 e6 2.Bf4 Qe7": {
    strategy:
      "Leaves c7 undefended, because the d7-pawn blocks the queen's guard along the seventh " +
      "rank, and shuts in the f8-bishop. After 3.Bxc7 Black regains the pawn with 3...Qb4+ " +
      "and ...Qxb2, but the queen wanders further while White develops.",
  },

  "1.d4 e6 2.Bf4 Ke7": {
    strategy:
      "Gives up castling at once and shuts in the f8-bishop. 3.Bg5+ then forces ...f6 or " +
      "...Nf6 with a pin, or another king move, and the king never finds a safe home on e7.",
  },

  "1.d4 e6 2.Bf4 e5": {
    strategy:
      "Pushes the pawn into capture: e5 is attacked by the d4-pawn and the bishop and " +
      "defended by nothing, so 3.dxe5 or 3.Bxe5 simply wins a pawn.",
  },

  "1.d4 e6 2.Bf4 Bc5": {
    strategy:
      "Hangs the bishop to 3.dxc5, and nothing recaptures on c5, since no black pawn or piece " +
      "covers it. White wins a whole piece for nothing.",
  },

  "1.d4 e6 2.Bf4 Ba3": {
    strategy:
      "Walks into a capture: 3.bxa3 or 3.Nxa3 wins the bishop for nothing, since a3 is " +
      "covered by the b2-pawn and the knight on b1 and Black has no follow-up.",
  },

  "1.d4 e6 2.Bf4 Qf6": {
    strategy:
      "Attacks the bishop on f4, but with the queen gone from d8 the c7-pawn is undefended, " +
      "so 3.Bxc7 saves the bishop and wins a pawn. The queen also takes f6 from the " +
      "g8-knight.",
  },

  "1.d4 e6 2.Bf4 Qg5": {
    strategy:
      "Hangs the queen: the bishop on f4 attacks g5 and nothing defends it, so 3.Bxg5 wins " +
      "the queen for nothing.",
  },

  "1.d4 e6 2.Bf4 Qh4": {
    strategy:
      "Attacks the bishop on f4, but with the queen gone from d8 the c7-pawn is undefended: " +
      "3.Bxc7 saves the bishop and wins a pawn, and 3.g3 or 3.Bg3 would gain time against the " +
      "queen instead.",
  },
};
