import type { OpeningTexts } from "../book.ts";

// English prose for Nf3-g6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.Nf3 g6 2.c4": {
    background:
      "The position belongs to the English Opening and also arises from 1.c4 g6 2.Nf3. The " +
      "English is named after Howard Staunton, who played 1.c4 in his 1843 match against " +
      "Saint-Amant and at London 1851, the first international tournament. It did not inspire " +
      "his contemporaries and caught on only in the twentieth century.",
    strategy:
      "Claims queenside space, controls d5 and prepares Nc3 and d4. After 2...Bg7 3.d4 Nf6 " +
      "the game heads for the King's Indian, the Grünfeld or a Benoni, while 2...c5 leads to " +
      "a symmetrical English with Nc3 and g3, or to the Maróczy Bind after d4 cxd4 Nxd4 and " +
      "e4. The pawn occupies no central square, so Black still chooses the structure.",
  },

  "1.Nf3 g6 2.d4": {
    strategy:
      "Takes the centre and keeps c4 and e4 in reserve. After 2...Bg7 White chooses mainly " +
      "between 3.c4, heading for King's Indian or Grünfeld structures once ...Nf6 is in, and " +
      "3.e4, a Modern or Pirc Defence with the knight already on f3. Black lets White build " +
      "the centre and strikes at it later with ...c5, or with ...d6 and ...e5.",
  },

  "1.Nf3 g6 2.e4": {
    strategy:
      "Occupies the centre and reaches the position of 1.e4 g6 2.Nf3. After 2...Bg7 3.d4 d6 " +
      "the game is a Modern Defence, and ...Nf6 with Nc3 transposes to the Pirc, while 2...c5 " +
      "transposes to a Sicilian with an early ...g6. Nothing guards the e4-pawn yet, so Black " +
      "can also hit it at once with ...d5.",
  },

  "1.Nf3 g6 2.g3": {
    background:
      "A route into the King's Indian Attack, which Bobby Fischer (mostly in his early " +
      "career), Mikhail Botvinnik, Vasily Smyslov and Tigran Petrosian all employed. Its use " +
      "at grandmaster level began as an offshoot of the King's Indian Defence, widespread in " +
      "the 1950s, with White adopting Black's set-up and an extra move in hand.",
    strategy:
      "Prepares Bg2 to mirror Black's fianchetto and keeps d3, d4 and c4 available. White " +
      "follows with Bg2 and O-O and builds with d3 and e4 for a King's Indian Attack, or with " +
      "c4 for a Réti or English set-up. Black can seize the centre at once with ...d5, so " +
      "White must be ready to challenge it with c4 or with d3 and e4.",
  },

  "1.Nf3 g6 2.b3": {
    strategy:
      "Prepares Bb2, but 2...Bg7 hits the rook on a1 through the empty b2 square, and 3.Bb2 " +
      "Bxb2 loses a piece, since nothing guards b2. White must first block the diagonal with " +
      "c3, d4 or Nc3, so the fianchetto costs an extra move and Black takes the centre in the " +
      "meantime.",
  },

  "1.Nf3 g6 2.c3": {
    strategy:
      "Prepares d4 with pawn support and blocks the long diagonal in advance of ...Bg7. It " +
      "develops nothing and takes c3 from the queen's knight, while Black plays ...Bg7 and " +
      "takes the centre with ...d5, or with ...d6 and ...e5.",
  },

  "1.Nf3 g6 2.d3": {
    strategy:
      "Supports a later e4 and opens the c1-bishop, aiming for g3, Bg2, O-O and e4 in King's " +
      "Indian Attack style. It is sound but modest: Black develops with ...Bg7 and takes the " +
      "centre with ...d5 or ...e5, and White's game stays passive until e4 is pushed.",
  },

  "1.Nf3 g6 2.e3": {
    strategy:
      "Opens the f1-bishop and supports d4, with Be2, O-O and d4 or c4 to follow. It is solid " +
      "but passive: the e3-pawn shuts in the c1-bishop, and Black develops with ...Bg7 and " +
      "takes space with ...d5 or ...c5.",
  },

  "1.Nf3 g6 2.Nc3": {
    strategy:
      "Develops the second knight and covers e4 and d5. It blocks the c-pawn, so c4 is off " +
      "for now, and Black can take the centre with ...d5 or play ...Bg7 and ...d6. The move " +
      "is sound, but it commits the knight before White has chosen a pawn set-up.",
  },

  "1.Nf3 g6 2.a3": {
    strategy:
      "A slow rook-pawn move that prepares b4 but does nothing for the centre or development. " +
      "Black develops with ...Bg7 and takes space with ...d5 or ...c5 while White is still " +
      "waiting.",
  },

  "1.Nf3 g6 2.a4": {
    strategy:
      "Gains queenside space but weakens b4 and the b3 square and develops nothing. Black " +
      "builds with ...Bg7 and ...d5 or ...c5, and the rook-pawn move proves a lost tempo.",
  },

  "1.Nf3 g6 2.b4": {
    strategy:
      "Grabs queenside space but leaves b2 empty, so 2...Bg7 attacks the rook on a1 at once " +
      "and White must block the diagonal with c3, d4 or Nc3. The b4-pawn then becomes a " +
      "target for ...a5 and ...c5.",
  },

  "1.Nf3 g6 2.h3": {
    strategy:
      "Takes g4 from Black's bishop and knight, but spends a tempo on a rim pawn and does " +
      "nothing for the centre. Black plays ...Bg7 and ...d5 and takes the centre first.",
  },

  "1.Nf3 g6 2.h4": {
    strategy:
      "Prepares h5 against the g6-pawn, but Black can stop it with ...h5 or simply develop " +
      "with ...Bg7 and take the centre with ...d5. The advance weakens g3 and does nothing " +
      "for development.",
  },

  "1.Nf3 g6 2.Na3": {
    strategy:
      "Develops the knight to the rim, where it eyes b5 and c4 but blocks the a-pawn and " +
      "guards nothing in the centre. Black takes the centre with ...d5, which also covers c4, " +
      "and develops with ...Bg7 while the knight stays out of play.",
  },

  "1.Nf3 g6 2.Rg1": {
    strategy:
      "Supports a later g4 and g5, but gives up kingside castling and develops nothing. Black " +
      "plays ...Bg7 and ...d5 and takes the centre while White's king stays in the middle for " +
      "now.",
  },

  "1.Nf3 g6 2.Ng5": {
    strategy:
      "Moves the knight a second time to hit h7 and f7, both of which are defended. After " +
      "2...h6 it has to move again, and Black gains time for ...Bg7 and ...d5.",
  },

  "1.Nf3 g6 2.Nh4": {
    strategy:
      "Moves the knight a second time, to the rim, where it eyes g6, but Nxg6 hxg6 only gives " +
      "a knight for a pawn. 2...e5 uncovers the queen's attack on h4, and the knight must " +
      "move again or be defended with g3.",
  },

  "1.Nf3 g6 2.Ne5": {
    strategy:
      "Moves the knight a second time to a square where nothing supports it: 2...d6 attacks " +
      "it and it must move again, so White spends two moves for nothing while Black gains " +
      "central space and opens the c8-bishop.",
  },

  "1.Nf3 g6 2.Nd4": {
    strategy:
      "Moves the knight a second time to a square where ...e5 or ...c5 attacks it at once. It " +
      "must move again, and Black gains central space with tempo.",
  },

  "1.Nf3 g6 2.Ng1": {
    strategy:
      "Returns the knight to its starting square and undoes the first move, as if White had " +
      "passed twice. Black takes the centre with ...d5 or ...e5 while White starts over.",
  },

  "1.Nf3 g6 2.g4": {
    strategy:
      "Weakens the kingside for good and leaves the pawn undefended, since the knight on f3 " +
      "blocks the queen's diagonal. After 2...d5 the c8-bishop attacks g4, and White must " +
      "spend a further move on h3, Bh3 or Rg1 just to keep the pawn.",
  },

  "1.Nf3 g6": {
    name: "Zukertort Opening: Kingside Fianchetto",
  },

  "1.Nf3 g6 2.c4 Bg7": {
    strategy:
      "Puts the bishop on the long diagonal, where it eyes the centre and b2, and keeps " +
      "...Nf6, ...d6, ...c5 and ...d5 all available. After 3.d4 Nf6 4.Nc3 Black chooses " +
      "between ...d6 and ...O-O for a King's Indian set-up and ...d5 for a Grünfeld, and 3.e4 " +
      "d6 4.d4 Nf6 5.Nc3 is a King's Indian as well. The cost is that White takes the centre " +
      "first and Black must undermine it later.",
  },

  "1.Nf3 g6 2.c4 Nf6": {
    strategy:
      "Develops the knight with control of e4 and d5 and heads for the same fianchetto " +
      "structures as ...Bg7. After 3.Nc3 Bg7 4.e4 d6 5.d4 the game is a King's Indian, 3.d4 " +
      "Bg7 4.Nc3 d5 is a Grünfeld, and 3.Nc3 d5 4.cxd5 Nxd5 5.e4 Nxc3 6.bxc3 Bg7 7.d4 is the " +
      "Grünfeld's Exchange Variation. Black chooses between ...d6 and ...d5, White between an " +
      "early e4 and an early d4.",
  },

  "1.Nf3 g6 2.c4 c5": {
    strategy:
      "Hits d4 and steers into the Symmetrical English. After 3.d4 cxd4 4.Nxd4 Bg7 5.e4 White " +
      "builds a Maróczy Bind, pawns on c4 and e4 that restrain ...d5 and ...b5, and Black " +
      "relies on piece play with ...Nc6 and ...Nf6; 3.Nc3 Bg7 4.d4 cxd4 5.Nxd4 reaches the " +
      "same structure once White adds e4. The cost is a restricted game if Black accepts the " +
      "bind.",
  },

  "1.Nf3 g6 2.c4 d6": {
    strategy:
      "Covers e5 and c5 and prepares ...Bg7 with ...Nf6 or ...e5. It is sound but commits " +
      "early: 3.Nc3 Bg7 4.d4 Nf6 5.e4 is a King's Indian, and the Grünfeld with ...d5 is no " +
      "longer available without losing a tempo.",
  },

  "1.Nf3 g6 2.c4 d5": {
    strategy:
      "Strikes at c4 before a piece is developed, and 3.cxd5 makes Black spend moves winning " +
      "the pawn back. 3...Qxd5 4.Nc3 drives the queen away with a gain of time, and 3...Nf6 " +
      "4.Nc3 Nxd5 reaches the same position as 2...Nf6 3.Nc3 d5 4.cxd5 Nxd5, but White need " +
      "not choose 4.Nc3.",
  },

  "1.Nf3 g6 2.c4 e6": {
    strategy:
      "Covers d5 and f5 and prepares ...d5, with ...Bg7 and ...Nf6 or ...Ne7 to follow. It is " +
      "sound but slow: after 3.d4 Bg7 4.Nc3 White can add e4, and the c8-bishop stays shut in " +
      "behind e6 until ...b6 frees b7 for it.",
  },

  "1.Nf3 g6 2.c4 b6": {
    strategy:
      "Prepares ...Bb7 to go with ...Bg7, a double fianchetto that aims both bishops at the " +
      "centre. It is sound but leaves the centre to White: after 3.d4 Bb7 4.Nc3 Bg7 5.e4 " +
      "White has a broad pawn centre, and Black must challenge it later, for example with " +
      "...c5.",
  },

  "1.Nf3 g6 2.c4 c6": {
    strategy:
      "Prepares ...d5 with a Slav-like pawn chain while ...Bg7 and ...Nf6 are still to come. " +
      "It is sound but passive: the pawn takes c6 from the b8-knight, and 3.d4 d5 4.Nc3 Bg7 " +
      "5.cxd5 cxd5 6.Qb3 puts pressure on d5 and b7 at once.",
  },

  "1.Nf3 g6 2.c4 f5": {
    strategy:
      "Stakes out e4 and heads for the Leningrad Dutch, which 3.d4 Nf6 4.g3 Bg7 5.Bg2 O-O " +
      "reaches by transposition. It is sound but committal: the pawn weakens e6 and the a2-g8 " +
      "diagonal, and White is not obliged to enter the Leningrad with g3 and Bg2.",
  },

  "1.Nf3 g6 2.c4 Nc6": {
    strategy:
      "Develops the knight to a natural square where it eyes d4 and e5. It is sound but not " +
      "recommended: the knight blocks the c-pawn and, after 3.d4 Bg7 4.d5, must move again " +
      "while White gains space with tempo.",
  },

  "1.Nf3 g6 2.c4 b5": {
    strategy:
      "Offers the b-pawn so that 3.cxb5 pulls the c-pawn away from the centre. Black can " +
      "follow with ...a6 to open lines on the queenside, but without ...c5 there is no " +
      "Benko-style pressure: ...Bg7 finds b2 guarded by the c1-bishop, and White keeps the " +
      "extra pawn.",
  },

  "1.Nf3 g6 2.c4 Na6": {
    strategy:
      "A premature rim move aiming at b4 and c5. The knight guards neither d4 nor e5, so 3.d4 " +
      "Bg7 4.e4 gives White a broad centre while the knight has still to find a good square.",
  },

  "1.Nf3 g6 2.c4 Bh6": {
    strategy:
      "Leaves the long diagonal for the c1-h6 diagonal. After 3.d4 the bishops face each " +
      "other while White holds the centre, and a trade on either square removes the bishop " +
      "that should guard f6 and h6, the dark squares weakened by ...g6.",
  },

  "1.Nf3 g6 2.c4 Nh6": {
    strategy:
      "A rim knight that heads for f5, where it is driven back: after 3.d4 Nf5 4.e4 it must " +
      "move again while White gains the centre with tempo. Black has developed one piece to a " +
      "poor square and left the centre to White.",
  },

  "1.Nf3 g6 2.c4 a6": {
    strategy:
      "Prepares ...b5 against c4, but spends a tempo on a rim pawn before any piece is " +
      "developed. White answers 3.d4 or 3.Nc3 and takes the centre.",
  },

  "1.Nf3 g6 2.c4 a5": {
    strategy:
      "Restrains b4 but spends a tempo on a rim pawn, weakens b5 and fights neither for the " +
      "centre nor for development. White plays 3.d4 or 3.Nc3 and gains space unopposed.",
  },

  "1.Nf3 g6 2.c4 f6": {
    strategy:
      "Takes f6 from the g8-knight, weakens e6 and the a2-g8 diagonal, and develops nothing. " +
      "White follows with 3.d4 and Nc3, and Black's pieces have few good squares.",
  },

  "1.Nf3 g6 2.c4 h6": {
    strategy:
      "Takes g5 from White's pieces but spends a tempo on a rim pawn, develops nothing and " +
      "leaves the g6-pawn without the h-pawn's support. White plays 3.d4 and 4.Nc3 and builds " +
      "the centre unopposed.",
  },

  "1.Nf3 g6 2.c4 h5": {
    strategy:
      "Prepares ...h4 but spends a tempo on a rim pawn, weakens g5 and develops nothing. " +
      "White takes the centre with 3.d4 or 3.Nc3 and the h-pawn push gains no time.",
  },

  "1.Nf3 g6 2.c4 e5": {
    strategy:
      "Hangs the pawn: 3.Nxe5 takes it, and 3...Bg7 is met by 4.d4, which supports the " +
      "knight, so Black has nothing to show for the lost pawn.",
  },

  "1.Nf3 g6 2.c4 g5": {
    strategy:
      "Loses a pawn at once: nothing defends g5, so 3.Nxg5 wins it, and the knight eyes h7 " +
      "and f7 while Black has weakened the kingside for nothing.",
  },

  "1.Nf3 g6 2.d4 Bg7": {
    strategy:
      "Puts the bishop on the long diagonal against d4 and b2 and prepares ...O-O, while " +
      "leaving ...Nf6, ...d6, ...c5 and ...d5 open. White usually builds with 3.c4, aiming at " +
      "King's Indian or Grünfeld structures after ...Nf6, or with 3.e4, when ...d6 gives a " +
      "Modern Defence. The price is that White takes space first and Black must undermine the " +
      "centre later with ...c5 or ...e5.",
  },

  "1.Nf3 g6 2.d4 Nf6": {
    strategy:
      "Develops the knight to its natural square, controls e4 and d5 and reaches the same " +
      "position as 1.d4 Nf6 2.Nf3 g6. If White plays 3.c4, ...Bg7 leads to King's Indian or " +
      "Grünfeld structures; if White avoids c4 with 3.g3, 3.Bf4 or 3.Bg5, Black develops with " +
      "...Bg7, ...O-O and ...d6 or ...d5 and strikes at the centre with ...c5 or ...e5. White " +
      "still has the first say in the centre.",
  },

  "1.Nf3 g6 2.d4 d6": {
    name: "Queen's Pawn Game: Rossolimo Variation",
    strategy:
      "Controls e5, frees the c8-bishop for ...Bg4 and keeps ...Bg7 and ...Nf6 for later. " +
      "After 3.e4 Bg7 the game moves into Pirc or Modern Defence territory, and after 3.c4 " +
      "Bg7 4.e4 Black can pin the f3-knight with ...Bg4 or play ...Nf6 for a King's Indian " +
      "set-up. The d6-pawn commits the centre early: ...d5 now costs a tempo, so the Grünfeld " +
      "is off the table, and White chooses the structure.",
  },

  "1.Nf3 g6 2.d4 Na6": {
    strategy:
      "Heads for c7 or b4 and keeps the c-pawn free for ...c5 or ...c6, with ...Bg7 still to " +
      "come. The knight stands on the rim and does nothing about the centre, and 3.e4 Bg7 " +
      "4.Bxa6 bxa6 leaves Black with doubled a-pawns, though with the bishop pair in return. " +
      "Sound, but White meets it with e4 and c4 on easy terms.",
  },

  "1.Nf3 g6 2.d4 Nh6": {
    name: "Zukertort Defence: Kingside Variation",
    strategy:
      "Develops the knight toward f5 and keeps ...Bg7 available. On the rim it does little " +
      "for the centre, and 3.Bxh6 Bxh6 hands Black the bishop pair, but White keeps the " +
      "centre and builds at leisure with e4 and c4.",
  },

  "1.Nf3 g6 2.d4 b6": {
    strategy:
      "Prepares ...Bb7 to go with ...Bg7, a double-fianchetto set-up that aims at d4 and e4 " +
      "from the wings. Sound, but Black leaves the centre to White: after 3.e4 Bb7 4.Nc3 or " +
      "4.Bd3 the pawns on d4 and e4 have to be undermined later with ...c5 or ...e5.",
  },

  "1.Nf3 g6 2.d4 c6": {
    strategy:
      "Prepares ...d5 with a Slav- or Caro-Kann-type pawn chain, with ...Bg7 and ...Nf6 still " +
      "to come. It commits the c-pawn before White's set-up is clear, and 3.e4 d5 4.e5 gives " +
      "White the space of a Caro-Kann Advance Variation, which Black must undermine with " +
      "...c5 or ...f6. Solid, but passive.",
  },

  "1.Nf3 g6 2.d4 c5": {
    strategy:
      "Challenges d4 at once for a Sicilian- or Benoni-type game with ...Bg7 to come. After " +
      "3.dxc5 Black regains the pawn with ...Qa5+ and ...Qxc5 but loses time with the queen, " +
      "and 3.d5 gives White a Benoni-style space edge before Black has ...Nf6 or ...e6 in. " +
      "Playable, but it hands White the choice of structure.",
  },

  "1.Nf3 g6 2.d4 d5": {
    strategy:
      "Takes the centre at once and reaches the position of 1.d4 d5 2.Nf3 g6. Black follows " +
      "with ...Bg7 and ...Nf6, adding ...c6 for a Slav-like set-up or leaving it out for " +
      "Grünfeld-like play, but for now only the queen guards d5, so 3.c4 attacks the pawn at " +
      "once. Playable, but it commits the pawn before the pieces are out.",
  },

  "1.Nf3 g6 2.d4 e6": {
    strategy:
      "Keeps ...d5 and ...c5 in reserve and reaches the position of 1.d4 e6 2.Nf3 g6. No pawn " +
      "contests d4 or e4 yet, so White can take the centre with 3.e4, and Black must " +
      "undermine it later with ...c5 or ...d5. Together with ...g6, the move leaves f6 " +
      "without pawn cover, and the e6-pawn shuts in the c8-bishop.",
  },

  "1.Nf3 g6 2.d4 f5": {
    strategy:
      "Takes e4 away and heads for a Leningrad Dutch set-up with ...Bg7, ...Nf6, ...O-O and " +
      "...d6, which puts the bishop on the long diagonal. Playable, but White keeps a free " +
      "choice of set-up, and the e6 square and the a2-g8 diagonal stay weak.",
  },

  "1.Nf3 g6 2.d4 Nc6": {
    strategy:
      "Develops a knight but walks into 3.d5, which attacks it, and 3...Ne5 loses a piece to " +
      "4.Nxe5. The knight must retreat to b8 or go to b4 or a5, where a3, c3 or b4 chases it " +
      "again, so White gains space and time while the f8-bishop is still at home.",
  },

  "1.Nf3 g6 2.d4 Bh6": {
    strategy:
      "Attacks the c1-bishop, but 3.Bxh6 Nxh6 trades off the fianchetto bishop that the " +
      "g6-pawn was meant to serve. Black is left with a knight on the rim and weak dark " +
      "squares around the king.",
  },

  "1.Nf3 g6 2.d4 a6": {
    strategy:
      "Prepares ...b5 and ...Bb7 but does nothing for the centre or the kingside. White " +
      "builds with e4 and c4 while Black's pieces stay at home, and the queenside advance has " +
      "no target yet.",
  },

  "1.Nf3 g6 2.d4 a5": {
    strategy:
      "Takes b4 from White's pieces and gains space on the queenside, but it ignores the " +
      "centre and weakens b5. White plays e4, c4 and Nc3 with a free hand while Black has yet " +
      "to develop.",
  },

  "1.Nf3 g6 2.d4 b5": {
    strategy:
      "Pushes the b-pawn before the pieces are out and leaves c6 without the b-pawn's cover. " +
      "White develops with e4, Nc3 and Bd3, the last two hitting b5, so Black must spend " +
      "further moves on ...a6 or ...c6 to hold the pawn.",
  },

  "1.Nf3 g6 2.d4 f6": {
    strategy:
      "Takes f6 from the knight, leaves the g6-pawn without the f7-pawn's support and weakens " +
      "e6 and the a2-g8 diagonal. It develops nothing, and White takes the centre with e4 and " +
      "c4 while Black's pieces stay at home.",
  },

  "1.Nf3 g6 2.d4 h6": {
    strategy:
      "Stops Bg5 and Ng5 but is a slow, defensive move that does nothing for the centre or " +
      "development. White takes the centre with e4 and c4 while Black has not yet developed a " +
      "piece.",
  },

  "1.Nf3 g6 2.d4 h5": {
    strategy:
      "Grabs kingside space with ...h4 in mind, but the g6-pawn loses the h-pawn's support " +
      "and the h-pawn can never again cover g5. White builds with e4 and c4 while nothing of " +
      "Black's is developed.",
  },

  "1.Nf3 g6 2.d4 e5": {
    strategy:
      "Drops a pawn: after 3.dxe5 the f3-knight guards e5, and once Bf4 adds a second " +
      "defender, ...Nc6 and ...Bg7 alone cannot win it back. Black gets only a little " +
      "development for the pawn.",
  },

  "1.Nf3 g6 2.d4 g5": {
    strategy:
      "Loses a pawn at once: the g5-pawn is attacked by the knight and the c1-bishop and " +
      "defended by nothing, so 3.Nxg5 or 3.Bxg5 wins it and leaves the kingside open.",
  },

  "1.Nf3 g6 2.g3 Bg7": {
    strategy:
      "Completes the fianchetto: the bishop on g7 looks down the long diagonal towards d4 and " +
      "b2, and it clears f8 so that …Nf6 and …O-O can follow. Black mirrors White's set-up " +
      "and keeps the centre flexible, choosing between …c5, …d5 and …d6 with …e5 once White's " +
      "plan is clear. The cost is slower central play, since White can take space with c4 and " +
      "d4 or play d3 and e4.",
  },

  "1.Nf3 g6 2.g3 Nf6": {
    strategy:
      "Develops the knight to its natural square, covers e4 and d5 and transposes to the " +
      "position after 1.Nf3 Nf6 2.g3 g6. Black follows with …Bg7 and …O-O and chooses between " +
      "…d6, …d5 and …c5 once White has played Bg2 and castled. No pawn has reached the centre " +
      "yet, so White can still choose between c4 with d4 and the quieter d3 with e4.",
  },

  "1.Nf3 g6 2.g3 c5": {
    strategy:
      "Controls d4 and prepares …Nc6, with …Bg7 adding pressure along the long diagonal. " +
      "White can enter a Symmetrical English with Bg2, O-O and c4, or open the centre with " +
      "d4, when …cxd4 Nxd4 puts the knight on the diagonal of the g7-bishop. Black keeps the " +
      "choice between …d6 and …d5 for later.",
  },

  "1.Nf3 g6 2.g3 d5": {
    strategy:
      "Stakes a claim in the centre and opens the c8-bishop's diagonal towards f5 and g4; " +
      "…Bg7 and …Nf6 follow, reaching the position of 1.Nf3 d5 2.g3 g6. White usually " +
      "continues with Bg2 and O-O, then strikes at d5 with c4 or prepares e4 with d3 and " +
      "Nbd2. The d5-pawn has no pawn support and the dark-squared g7-bishop does not guard " +
      "it, so c4 tests it at once.",
  },

  "1.Nf3 g6 2.g3 d6": {
    strategy:
      "Frees the c8-bishop and prepares …e5, which …Bg7 will support, for a King's " +
      "Indian-style set-up with …Nf6. It leaves the centre to White for now, so Bg2 and O-O, " +
      "then c4 with d4 or d3 with e4, come without hindrance. Sound, but passive.",
  },

  "1.Nf3 g6 2.g3 Nc6": {
    strategy:
      "Develops the knight, eyes d4 and e5 and supports a later …e5. The knight blocks the " +
      "c-pawn, though, and White can take space with d4 and Bg2 before Black has chosen a " +
      "structure. Sound, but …Bg7 first is more flexible.",
  },

  "1.Nf3 g6 2.g3 c6": {
    strategy:
      "Prepares …d5 with pawn support, after which the c8-bishop can still come out to f5 or " +
      "g4. The centre is left to White for now, so c4 or d4 can follow at once. Sound, but it " +
      "commits the c-pawn before the centre is clear.",
  },

  "1.Nf3 g6 2.g3 e6": {
    strategy:
      "Prepares …d5 and keeps …Bg7 with …Ne7 or …Nf6 available. Once …d5 is in, the e6-pawn " +
      "shuts in the c8-bishop, which then needs …b6 and …Bb7, while White takes space with c4 " +
      "and d4 after Bg2 and O-O. Sound, but passive.",
  },

  "1.Nf3 g6 2.g3 b6": {
    strategy:
      "Prepares …Bb7 for a double fianchetto with …Bg7: the b7-bishop contests the long light " +
      "diagonal against White's Bg2, and the g7-bishop covers the dark one. Sound, but no " +
      "black pawn reaches the centre, so White can build a broad one with c4 and d4 after Bg2 " +
      "and O-O.",
  },

  "1.Nf3 g6 2.g3 f5": {
    strategy:
      "Controls e4 and leads, after …Nf6, …Bg7 and …O-O, to the set-up of the Leningrad " +
      "Variation of the Dutch Defence. It loosens e6 and the kingside, and White meets it " +
      "with Bg2, O-O and d3 with e4, or with c4 and d4. Playable, but double-edged.",
  },

  "1.Nf3 g6 2.g3 Na6": {
    strategy:
      "Develops the knight to the rim, where it eyes b4 and c5 but has little influence on " +
      "the centre. White gains time for Bg2, O-O and d4 or c4.",
  },

  "1.Nf3 g6 2.g3 Nh6": {
    strategy:
      "Heads for f5, where e4 would drive the knight away with tempo, and on h6 it does " +
      "nothing for the centre. White continues with Bg2, O-O and d4 or c4.",
  },

  "1.Nf3 g6 2.g3 Bh6": {
    strategy:
      "Puts the bishop on h6 instead of g7, where White's c1-bishop meets it as soon as d3 or " +
      "d4 opens the diagonal. After Bxh6 Nxh6 Black has traded off the dark-squared bishop " +
      "that should guard f6 and h6, and the knight stands on the rim; avoiding the trade with " +
      "…Bg7 costs a tempo.",
  },

  "1.Nf3 g6 2.g3 a6": {
    strategy:
      "Spends a tempo on a rim-pawn move that at best prepares …b5. White develops with Bg2 " +
      "and O-O, then takes space with d4 or c4.",
  },

  "1.Nf3 g6 2.g3 a5": {
    strategy:
      "Gains queenside space and covers b4, but weakens b5 and develops nothing. White " +
      "continues with Bg2, O-O and d4 or c4 with a free hand.",
  },

  "1.Nf3 g6 2.g3 b5": {
    strategy:
      "Gains queenside space and prepares …Bb7, but the b5-pawn stands unprotected, c6 is " +
      "loosened and nothing is developed. White completes Bg2 and O-O, then a4 or c4 attacks " +
      "the pawn.",
  },

  "1.Nf3 g6 2.g3 f6": {
    strategy:
      "Takes f6 from the g8-knight, blocks the long diagonal of the future g7-bishop and " +
      "loosens e6 and g6, while developing nothing. White plays Bg2, O-O and d4 at leisure.",
  },

  "1.Nf3 g6 2.g3 h6": {
    strategy:
      "Spends a tempo on a move with nothing yet to prevent and takes the h-pawn's support " +
      "away from g6. It develops nothing and leaves White free to play Bg2, O-O and d4 or c4.",
  },

  "1.Nf3 g6 2.g3 h5": {
    strategy:
      "Starts a kingside pawn advance that loosens g5 and g6 and does nothing for the centre " +
      "or development. White continues with Bg2 and O-O, or stops the pawn with h4, and then " +
      "takes the centre.",
  },

  "1.Nf3 g6 2.g3 e5": {
    strategy:
      "Leaves the e-pawn unguarded, so 3.Nxe5 wins it. Either …Qe7 or …Bg7 with …d6 drives " +
      "the knight away, but White keeps the extra pawn.",
  },

  "1.Nf3 g6 2.g3 g5": {
    strategy:
      "Leaves the g-pawn unguarded, so 3.Nxg5 wins it. …Bh6 drives the knight away, but White " +
      "keeps the extra pawn.",
  },
};
