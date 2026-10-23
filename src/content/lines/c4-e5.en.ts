import type { OpeningTexts } from "../book.ts";

// English prose for c4-e5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.c4 e5 2.Nc3": {
    name: "English Opening: King's English Variation, Reversed Sicilian",
    strategy:
      "Develops the knight toward d5 and e4, so that knight and c-pawn together control d5. " +
      "White usually follows with g3, Bg2 and d3 or e3; Nf3 against ...Nc6 and ...Nf6 gives " +
      "the Four Knights Variation. Black chooses between 2...Nf6, often with ...Bb4 to " +
      "threaten ...Bxc3 and double White's c-pawns, 2...Nc6 for a closed game with ...g6 and " +
      "...Bg7, and an early ...d5 break.",
  },

  "1.c4 e5 2.g3": {
    strategy:
      "Prepares Bg2, which bears on d5 and b7 along the long diagonal, and leaves both " +
      "knights uncommitted. Holding back Nc3 gives an early ...Bb4 no knight to hit, and " +
      "White picks Nc3, Nf3 or e3 later according to Black's set-up. Without a knight on c3, " +
      "...d5 is easier for Black, who often prepares it with ...c6 or ...Nf6.",
  },

  "1.c4 e5 2.Nf3": {
    name: "English Opening: King's English Variation, Nimzowitsch Variation",
    strategy:
      "Develops a piece and attacks e5 at once, so Black must defend the pawn with ...Nc6 or " +
      "...d6 or advance it. After 2...Nc6 3.Nc3 Nf6 the game reaches the Four Knights " +
      "Variation, while 2...e4 3.Nd4 gives a kind of reversed Alekhine's Defence in which the " +
      "advanced pawn becomes a target for d3. After 3...Nc6 4.Nxc6 dxc6 Black's c-pawns are " +
      "doubled, but the d-file opens for the queen and the c8-bishop is free.",
  },

  "1.c4 e5 2.a3": {
    strategy:
      "Prevents ...Bb4 and prepares b4 to gain queenside space, but develops nothing and adds " +
      "nothing to the fight for the centre. Black can play ...Nf6, ...Nc6 and ...d5 at " +
      "leisure, so the move is sound but slow.",
  },

  "1.c4 e5 2.b3": {
    strategy:
      "Prepares Bb2 to pressure e5 along the long diagonal and keeps the choice between Nc3, " +
      "g3 and e3 open. Black holds e5 with ...Nc6 or ...d6 and develops with ...Nf6, so the " +
      "bishop gains little at first. Sound, but slower than the main moves.",
  },

  "1.c4 e5 2.d3": {
    strategy:
      "Supports a later e4 and opens the c1-bishop, aiming for a quiet set-up with g3, Bg2 " +
      "and Nc3. It neither develops a piece nor adds pressure on d5, so Black develops with " +
      "...Nf6 and ...Nc6 and prepares ...d5. Sound, but passive.",
  },

  "1.c4 e5 2.e3": {
    strategy:
      "Opens the f1-bishop and prepares d4 to challenge e5, with Nc3 and Nf3 or Nge2 to " +
      "follow. It does nothing against ...d5, which Black prepares with ...Nf6 and ...Nc6 for " +
      "a comfortable game. Sound, but modest.",
  },

  "1.c4 e5 2.d4": {
    strategy:
      "Strikes at e5 at once and opens the centre. After 2...exd4 3.Qxd4 Nc6 the queen must " +
      "move again, and after 3.Nf3 Nc6 4.Nxd4 Black develops freely. White's opening edge is " +
      "gone, though the game stays balanced.",
  },

  "1.c4 e5 2.e4": {
    strategy:
      "Sets up the c4 and e4 pawn pair of the Botvinnik System, which clamps d5, usually with " +
      "Nc3, d3, g3 and Bg2 to follow. The cost is d4, which no white pawn can cover any more, " +
      "and Black aims at it with ...Nc6 and ...Bc5 while ...Nf6 hits e4. Sound, but it offers " +
      "White no more than the main moves.",
  },

  "1.c4 e5 2.Qc2": {
    strategy:
      "Brings the queen out before the minor pieces to cover c4 and eye e4. After ...Nc6 the " +
      "knight can jump to d4 or b4 and hit the queen with tempo, while White's development " +
      "lags.",
  },

  "1.c4 e5 2.a4": {
    strategy:
      "Covers b5 but develops nothing and gives up b4 for good: with the a-pawn on a4 and the " +
      "c-pawn on c4, no white pawn can ever cover the square. Black can use it for ...Bb4 or " +
      "...Nc6–b4 and develops freely with ...Nf6 and ...d5.",
  },

  "1.c4 e5 2.f3": {
    strategy:
      "Takes f3 from the g1-knight and opens the e1–h4 diagonal, so ...Qh4+ forces g3. It " +
      "covers e4 but develops nothing, and Black continues with ...Nc6, ...Nf6 and ...d5.",
  },

  "1.c4 e5 2.h3": {
    strategy:
      "A waiting move that loses a tempo: it prevents ...Bg4 but neither develops a piece nor " +
      "contests the centre, and Black replies ...Nf6, ...Nc6 and ...d5 with a free hand.",
  },

  "1.c4 e5 2.h4": {
    strategy:
      "Spends a tempo on the rim and weakens g4 without helping the centre or development. " +
      "Black develops with ...Nf6 or ...Nc6 and takes space with ...d5.",
  },

  "1.c4 e5 2.Na3": {
    strategy:
      "Puts the knight on the rim, heading for c2 or b5, and allows 2...Bxa3 3.bxa3, which " +
      "leaves White with doubled, isolated a-pawns in return for the bishop pair. Otherwise " +
      "the knight stands far from d5 and e4, and Black develops freely.",
  },

  "1.c4 e5 2.Nh3": {
    strategy:
      "Heads for f4 or g5, but for now the e5-pawn covers f4 and the d8-queen covers g5, so " +
      "the knight has no way forward from the rim. Black develops with ...Nc6, ...Nf6 and " +
      "...d5.",
  },

  "1.c4 e5 2.Qb3": {
    strategy:
      "Hits b7, which the c8-bishop guards, and brings the queen out early. 2...Nc6 followed " +
      "by ...Nd4 chases it away with tempo, and White's development lags.",
  },

  "1.c4 e5 2.Qa4": {
    strategy:
      "Pins the d7-pawn against the king for a moment, but ...Nc6 or ...c6 blocks the " +
      "diagonal and ...d5 follows. The queen achieves nothing else on a4 and has spent a " +
      "tempo that White's undeveloped pieces need.",
  },

  "1.c4 e5 2.b4": {
    strategy:
      "Offers the b-pawn: after 2...Bxb4 3.Bb2 the bishop hits e5, but ...Nc6 or ...d6 holds " +
      "it. With the c-pawn already on c4, c3 is not available to chase the bishop, and Black " +
      "stays a clean pawn up.",
  },

  "1.c4 e5 2.f4": {
    strategy:
      "Unlike the King's Gambit, it has no pawn on e4 to take over the centre: 2...exf4 " +
      "simply wins a pawn and opens the e1–h4 diagonal against White's king. White must spend " +
      "a tempo on Nf3 to stop ...Qh4+ before trying to win the pawn back.",
  },

  "1.c4 e5 2.g4": {
    strategy:
      "Leaves the g4-pawn without a defender and weakens f3 and h3. After 2...d5 the " +
      "c8-bishop attacks g4, and 3.cxd5 Qxd5 also hits the h1-rook along the opened long " +
      "diagonal.",
  },

  "1.c4 e5 2.c5": {
    strategy:
      "Pushes the c-pawn to a square where nothing defends it, and 2...Bxc5 wins it while " +
      "developing the bishop toward f2. White has nothing to show for the pawn.",
  },

  "1.c4 e5": {
    name: "English Opening: King's English Variation",
    background:
      "Also called the Reversed Sicilian, because it is a Sicilian Defence with the colours " +
      "reversed; Kasparov and Keene's Batsford Chess Openings (1982) calls it the King's " +
      "English. In Modern Chess Openings (14th edition, 1999), Bruce Leverett wrote that it " +
      "is natural to treat the English as a Sicilian reversed, but that the results are often " +
      "surprising.",
  },

  "1.c4 e5 2.Nc3 Nf6": {
    name: "English Opening: King's English Variation, Two Knights Variation",
    strategy:
      "Develops a piece and covers d5 and e4, so White cannot take the centre unopposed. The " +
      "knight keeps every set-up open: after 3.Nf3 Black chooses between ...Nc6 for the Four " +
      "Knights and ...e4 to hit the knight, and after 3.g3 ...d5 strikes in the centre at " +
      "once, while ...c6 prepares it. In many lines ...Bb4 adds pressure on the c3-knight. " +
      "White keeps the extra tempo of a reversed Sicilian.",
  },

  "1.c4 e5 2.Nc3 Nc6": {
    name: "English Opening: King's English Variation, Reversed Closed Sicilian",
    strategy:
      "Develops the knight, guards e5 and keeps ...Nf6, ...f5 and ...Bb4 in reserve. 3.Nf3 " +
      "Nf6 leads to the Four Knights, while 3.g3 g6 4.Bg2 Bg7 5.d3 d6 gives a closed position " +
      "in which both sides fianchetto the king's bishop. There White usually expands on the " +
      "queenside with Rb1 and b4, and Black counters on the kingside with ...f5.",
  },

  "1.c4 e5 2.Nc3 Bb4": {
    name: "English Opening: King's English Variation, Kramnik-Shirov Counterattack",
    background:
      "Popularised by Vladimir Kramnik and Alexei Shirov, who played the opening in slightly " +
      "different ways.",
    strategy:
      "Attacks the c3-knight and threatens ...Bxc3, which would damage White's pawn " +
      "structure. 3.Nd5 chases the bishop and leads to unclear play, for instance 3...Bc5 " +
      "4.Nf3 c6; quieter moves such as 3.e3 or 3.Nf3 allow ...Bxc3 and an unbalanced game. " +
      "The price is an early commitment of the king's bishop, which may have to move again " +
      "after 3.Nd5.",
  },

  "1.c4 e5 2.Nc3 d6": {
    strategy:
      "Guards e5 with a pawn and opens the c8-bishop, aiming for a compact set-up with " +
      "...Nc6, ...Nf6 and ...Be7. The pawn on d6 hems in the f8-bishop, and ...d5 now needs a " +
      "second move, so White keeps more space in the centre. Sound, but passive.",
  },

  "1.c4 e5 2.Nc3 Bc5": {
    strategy:
      "Develops the bishop towards f2 but leaves e5 without a defender, so 3.Nf3 makes Black " +
      "spend the next move on ...Nc6 or ...d6. After 3...Nc6 the fork trick 4.Nxe5 Nxe5 5.d4 " +
      "wins the piece back and leaves White with the bishop pair. Playable, but White has the " +
      "easier game.",
  },

  "1.c4 e5 2.Nc3 Be7": {
    strategy:
      "Prepares ...Nf6 and castling, but the bishop is passive on e7 and does not guard e5, " +
      "which 3.Nf3 attacks at once, so Black must still spend a move on ...d6 or ...Nc6. " +
      "Sound enough, yet White keeps the extra tempo and the easier development.",
  },

  "1.c4 e5 2.Nc3 Ne7": {
    strategy:
      "Supports a later ...d5 and leaves c6 free for the other knight, but on e7 the knight " +
      "blocks the f8-bishop and does not guard e5, which 3.Nf3 attacks at once. Sound, yet " +
      "more passive than ...Nf6, and White develops freely with g3 and Bg2.",
  },

  "1.c4 e5 2.Nc3 g6": {
    strategy:
      "Prepares ...Bg7, which guards e5 and works along the long diagonal, but until the " +
      "bishop arrives the h8-rook stands exposed on that diagonal. 3.d4 strikes at e5 at " +
      "once, and after 3...exd4 4.Qxd4 the queen hits the rook, so Black must answer with " +
      "...Nf6, ...Qf6 or ...f6. Playable, but less flexible than ...Nc6 first.",
  },

  "1.c4 e5 2.Nc3 Na6": {
    strategy:
      "Puts a knight on the rim and aims for ...Nc5, but it does not defend e5, which 3.Nf3 " +
      "attacks at once. Black must spend a further tempo while the knight is far from the " +
      "action.",
  },

  "1.c4 e5 2.Nc3 Qe7": {
    strategy:
      "Guards e5 but blocks the f8-bishop, and 3.Nd5 attacks the queen while also threatening " +
      "Nxc7+. The queen has to move again to a square that guards c7, and White gains time.",
  },

  "1.c4 e5 2.Nc3 Qf6": {
    strategy:
      "Brings the queen out early and takes f6 from the g8-knight. 3.Nd5 attacks it and " +
      "threatens Nxc7+, so the queen has to move again to a square that guards c7, such as d8 " +
      "or d6, and White gains time.",
  },

  "1.c4 e5 2.Nc3 Qg5": {
    strategy:
      "Brings the queen out early to a square where it is easily chased. 3.d4 attacks e5 and " +
      "opens the c1-bishop's diagonal against the queen, so 3...exd4 loses it to 4.Bxg5, and " +
      "the queen must move again while White gains central space.",
  },

  "1.c4 e5 2.Nc3 Qh4": {
    strategy:
      "Brings the queen out early and hits the unprotected c4-pawn along the fourth rank. " +
      "3.Nf3 attacks the queen with tempo, and 3...Qxc4 4.Nxe5 wins the pawn back while " +
      "hitting the queen again, so White gains time for development.",
  },

  "1.c4 e5 2.Nc3 Bd6": {
    strategy:
      "Guards e5 but blocks the d-pawn, so neither ...d6 nor ...d5 is possible and the " +
      "c8-bishop stays shut in. The bishop is also a target for 3.Nb5, which threatens to " +
      "take it and double Black's d-pawns.",
  },

  "1.c4 e5 2.Nc3 Nh6": {
    strategy:
      "Puts the knight on the rim, where it guards f7 and eyes f5 but fights for no central " +
      "square. Once the d-pawn moves, Bxh6 forces gxh6 and wrecks the kingside pawns.",
  },

  "1.c4 e5 2.Nc3 a6": {
    strategy:
      "A waiting move that guards b5 but develops nothing. 3.Nf3 attacks e5 and White gains a " +
      "tempo.",
  },

  "1.c4 e5 2.Nc3 a5": {
    strategy:
      "Takes queenside space and prevents b4, but develops nothing, and the a-pawn can no " +
      "longer cover b5, a square for White's knight. 3.Nf3 attacks e5 and White gains a " +
      "tempo.",
  },

  "1.c4 e5 2.Nc3 b6": {
    strategy:
      "Prepares ...Bb7 along the long diagonal, but e5 is left to be attacked by 3.Nf3 and " +
      "the bishop does not defend it. The move is slow and weakens c6.",
  },

  "1.c4 e5 2.Nc3 c6": {
    strategy:
      "Prepares ...d5, but takes c6 from the b8-knight and leaves e5 unguarded, so 3.Nf3 " +
      "attacks it at once. Black then spends the next move on e5, with ...d6 or ...e4, " +
      "instead of developing a piece.",
  },

  "1.c4 e5 2.Nc3 c5": {
    strategy:
      "Takes queenside space, but with pawns on c5 and e5 no black pawn can cover d5, which " +
      "becomes an outpost for a white knight. It also leaves e5 loose to 3.Nf3 and develops " +
      "nothing.",
  },

  "1.c4 e5 2.Nc3 d5": {
    strategy:
      "Offers a pawn to open the centre: 3.cxd5 Nf6 4.Nf3 Nxd5 5.Nxe5 leaves White a clean " +
      "pawn up, since e5 has no defender. Black gets some activity, but too little for the " +
      "pawn.",
  },

  "1.c4 e5 2.Nc3 f6": {
    strategy:
      "Defends e5 with a pawn but takes f6 from the g8-knight, weakens e6 and the e8-h5 " +
      "diagonal and develops nothing. White builds with g3, d4 or e4 and Black's king is left " +
      "exposed.",
  },

  "1.c4 e5 2.Nc3 f5": {
    strategy:
      "Stakes a claim on e4 but weakens e6 and the e8-h5 diagonal before a single piece is " +
      "developed. 3.d4 strikes at e5 at once, and after 3...exd4 4.Qxd4 Nc6 5.Qe3+ the open " +
      "e-file points at the uncastled king.",
  },

  "1.c4 e5 2.Nc3 h6": {
    strategy:
      "A waiting move that covers g5 but develops nothing and does not guard e5. 3.Nf3 " +
      "attacks e5 and gains a tempo.",
  },

  "1.c4 e5 2.Nc3 h5": {
    strategy:
      "Starts a kingside advance without purpose and weakens g5 and g6. It develops nothing, " +
      "and 3.Nf3 attacks e5 with tempo.",
  },

  "1.c4 e5 2.Nc3 Ke7": {
    strategy:
      "Gives up castling for good and blocks the f8-bishop and the queen's diagonal. The king " +
      "is stuck in the centre where d4 can open the position, and nothing is gained for it.",
  },

  "1.c4 e5 2.Nc3 Ba3": {
    strategy: "Hangs the bishop: 3.bxa3 simply wins a piece, and Black gets nothing in return.",
  },

  "1.c4 e5 2.Nc3 b5": {
    strategy:
      "Offers the b-pawn with no follow-up: 3.cxb5 simply wins it, and Black has no lead in " +
      "development to make up for the pawn.",
  },

  "1.c4 e5 2.Nc3 g5": {
    strategy:
      "Loosens the kingside while e5 is undefended. 3.d4 hits e5 and opens the c1-bishop " +
      "against g5, and after 3...exd4 4.Qxd4 the white queen hits the h8-rook; 4...Nf6 blocks " +
      "the black queen's guard of g5, so 5.Bxg5 wins a pawn and pins the knight.",
  },

  "1.c4 e5 2.Nc3 e4": {
    strategy:
      "Advances the pawn to a square White attacks and Black cannot defend: 3.Nxe4 simply " +
      "wins a pawn, and the extra space is gone.",
  },

  "1.c4 e5 2.g3 Nc6": {
    strategy:
      "Develops the queen's knight to guard e5 and watch d4, and keeps several set-ups open: " +
      "...Nf6 with ...d5 or ...Bb4, or ...g6, ...Bg7 and ...d6 for a closed game, often with " +
      "...f5 later. White usually continues with Bg2 and Nc3, when the bishop and the c4-pawn " +
      "bear on d5. The knight stands where the c-pawn would go, so the plan of ...c6 and " +
      "...d5 is no longer available.",
  },

  "1.c4 e5 2.g3 Nf6": {
    strategy:
      "Develops the king's knight toward e4 and d5 and keeps ...Nc6, ...c6 and ...d5 in " +
      "reserve. After 3.Bg2 d5 4.cxd5 Nxd5 the structure is a Sicilian Dragon with colours " +
      "reversed: Nc3 drives the knight on, usually to b6, and Black develops with ...Nc6, " +
      "...Be7 and castling. White has the extra tempo and pressure along the long diagonal, " +
      "Black central space with the e5-pawn.",
  },

  "1.c4 e5 2.g3 d5": {
    strategy:
      "Strikes at the centre before the bishop reaches g2. After 3.cxd5 Qxd5 the queen hits " +
      "the rook on h1, so 4.Nf3 blocks the diagonal and attacks e5, which Black can guard " +
      "with ...Nc6. 4...e4 5.Nc3 Qe6? drops the pawn to 6.Qa4+ Bd7 7.Qxe4, while 5...Qc6 " +
      "keeps material level. The early queen gives White tempi with Nc3.",
  },

  "1.c4 e5 2.g3 c6": {
    strategy:
      "Prepares ...d5, so that after cxd5 the c-pawn recaptures and Black keeps two pawns in " +
      "the centre: the Alapin set-up with colours reversed. Against 3.Nf3 Black often gains a " +
      "tempo with 3...e4 4.Nd4 and then plays ...d5. The move develops no piece, so White " +
      "uses the time for Bg2, Nc3 and d3 or d4 to work against the black centre.",
  },

  "1.c4 e5 2.g3 Bc5": {
    strategy:
      "Develops the bishop toward f2 and prepares ...Nf6, ...Nc6 and castling. The set-up is " +
      "sound, but the bishop can become a target for Nf3 and d4, and White's Bg2 with Nc3 " +
      "keeps an easy grip on d5. Black must follow with the knights without delay.",
  },

  "1.c4 e5 2.g3 g6": {
    strategy:
      "Prepares ...Bg7, which supports e5 along the long diagonal, usually with ...Nc6 and " +
      "...d6 for a closed game. After 3.Bg2 Bg7 4.Nc3 Nc6 the position is a Closed English in " +
      "which White, with the extra tempo, starts queenside play with Rb1 and b4. The move is " +
      "sound but commits Black to this set-up early.",
  },

  "1.c4 e5 2.g3 d6": {
    strategy:
      "Supports e5 and frees the c8 bishop in a solid, waiting set-up, with ...Nf6, ...g6 or " +
      "...f5 to follow. It concedes space and makes a later ...d5 cost another tempo, so Bg2 " +
      "and Nc3 exert lasting pressure on d5.",
  },

  "1.c4 e5 2.g3 Be7": {
    strategy:
      "Develops the bishop modestly and prepares kingside castling. The move is sound but " +
      "does nothing about the centre, and White builds a comfortable grip with Bg2, Nc3 and " +
      "d3 while Black still has to settle where the knights belong.",
  },

  "1.c4 e5 2.g3 f5": {
    strategy:
      "Stakes out e4 for a Dutch-like attack with the e-pawn already on e5. It is a risky try " +
      "rather than a refuted one: the h5-e8 diagonal and the e6 square are weakened, and 3.d4 " +
      "exd4 4.Qxd4 Nf6 gives White a centralised queen and easy development.",
  },

  "1.c4 e5 2.g3 h5": {
    name: "English Opening: Drill Variation",
    strategy:
      "Prepares ...h4 to undermine the g3 pawn and open the h-file against the fianchetto. " +
      "White simply develops with Bg2 and Nc3 and keeps a slight edge, while the advanced " +
      "pawn loosens Black's kingside. It is playable but a gamble.",
  },

  "1.c4 e5 2.g3 Na6": {
    strategy:
      "Moves the knight to the rim, aiming at c5 and b4, but leaves e5 without support and " +
      "the centre to White. ...Nc5 costs two moves and can be hit by b4.",
  },

  "1.c4 e5 2.g3 Qe7": {
    strategy:
      "Defends e5, but blocks the f8 bishop and the e7 square and invites Nc3-d5 with tempo " +
      "on the queen. White develops while the queen has little to do.",
  },

  "1.c4 e5 2.g3 Qf6": {
    strategy:
      "Defends e5, but takes the best square from the king's knight, and Nc3-d5 later hits " +
      "the queen with a gain of time. White develops while the queen has to move again.",
  },

  "1.c4 e5 2.g3 Qg5": {
    strategy:
      "Eyes d2 and g3, but both are well protected, and 3.h4 chases the queen away at once. " +
      "Black loses time with the queen for nothing.",
  },

  "1.c4 e5 2.g3 Bd6": {
    strategy:
      "Guards e5 but blocks the d-pawn, which keeps the c8-bishop shut in. White develops " +
      "with Bg2 and Nc3 and can play d4 or Nd5 at ease.",
  },

  "1.c4 e5 2.g3 Bb4": {
    strategy:
      "Puts the bishop on b4, where it attacks nothing because d2 is guarded. A move such as " +
      "a3 or Nc3 forces it to commit or retreat, gaining time for White.",
  },

  "1.c4 e5 2.g3 Nh6": {
    strategy:
      "Develops the knight to the rim, where it eyes f5 and g4 but does nothing about d5 or " +
      "the centre. ...Nf6 does the same job with central influence.",
  },

  "1.c4 e5 2.g3 Ne7": {
    strategy:
      "Covers d5, but shuts in the f8-bishop, whose only diagonal runs through e7, so Black " +
      "needs ...g6 or another knight move before castling.",
  },

  "1.c4 e5 2.g3 a6": {
    strategy:
      "Spends a tempo on a flank pawn that only takes b5 away from White's pieces. Bg2, Nc3 " +
      "and d3 follow without resistance.",
  },

  "1.c4 e5 2.g3 a5": {
    strategy:
      "Gains queenside space and stops b4, but loses a tempo and weakens b5, where Nc3 can " +
      "settle.",
  },

  "1.c4 e5 2.g3 b6": {
    strategy:
      "Aims for ...Bb7, but with Bg2 coming the bishop hangs on the long diagonal until " +
      "...Nc6 blocks it. A slow flank move that weakens c6 and leaves White ahead in " +
      "development.",
  },

  "1.c4 e5 2.g3 c5": {
    strategy:
      "Mirrors the c-pawn and takes d4, but leaves d5 as a lasting hole that Nc3 and Bg2 can " +
      "occupy and press on. Black has no easy way to challenge it.",
  },

  "1.c4 e5 2.g3 f6": {
    strategy:
      "Defends e5 but blocks the king's knight, weakens e6 and the king's diagonal, and ties " +
      "Black to passive defence. White develops freely with Bg2 and Nc3.",
  },

  "1.c4 e5 2.g3 g5": {
    strategy:
      "Loosens the kingside and the long diagonal: after 3.d4 exd4 4.Qxd4 the queen attacks " +
      "the rook on h8 at once, and Black must block with a move such as ...Nf6 or ...f6. The " +
      "kingside weaknesses stay for the rest of the game.",
  },

  "1.c4 e5 2.g3 h6": {
    strategy:
      "Spends a tempo to parry a threat that does not exist, because the c1 bishop is blocked " +
      "by the d2 pawn. White develops with Bg2 and Nc3.",
  },

  "1.c4 e5 2.g3 e4": {
    strategy:
      "Advances the pawn without support to a square that Bg2, Nc3 and d3 will all attack. " +
      "After 3.Bg2 d5 4.cxd5 Qxd5 5.Nc3 the pawn falls, so Black must defend it with ...Nf6 " +
      "or ...f5 instead and spends time on it while White develops.",
  },

  "1.c4 e5 2.g3 Qh4": {
    strategy: "Hangs the queen: the g3 pawn simply captures it with 3.gxh4.",
  },

  "1.c4 e5 2.g3 Ke7": {
    strategy:
      "Gives up castling for good, blocks the f8 bishop and leaves the king in the centre for " +
      "no reason. White develops with Bg2 and Nc3 and can open the position against the " +
      "exposed king.",
  },

  "1.c4 e5 2.g3 Ba3": {
    strategy: "Hangs the bishop: 3.bxa3 or 3.Nxa3 wins a piece for nothing.",
  },

  "1.c4 e5 2.g3 b5": {
    strategy:
      "Offers a pawn: 3.cxb5 wins it, and Black has no lead in development or open lines in " +
      "return.",
  },

  "1.c4 e5 2.Nf3 Nc6": {
    strategy:
      "Defends e5 with a developing move and keeps the Reversed Sicilian set-up flexible, " +
      "with ...Nf6 and ...Bb4 or ...d5 to follow. After 3.Nc3 Nf6 the game reaches the Four " +
      "Knights English; White can also open the centre with 3.d4 exd4 4.Nxd4 or build with " +
      "3.g3. Black accepts that White keeps the first-move initiative in return for a firmly " +
      "guarded e5-pawn.",
  },

  "1.c4 e5 2.Nf3 e4": {
    name: "English Opening: King's English Variation, Nimzowitsch-Flohr Variation",
    background:
      "Wikibooks' opening theory notes that 2.Nf3 can lead to a reversed Alekhine's Defence " +
      "of sorts if Black replies ...e4. In his 2024 Modern Chess course on 1.c4 e5, " +
      "Grandmaster Boris Avrukh describes the position after 3.Nd4 Nc6 as a reversed Alapin " +
      "in which Black has not played ...c6, and calls 4.e3 White's main move and the " +
      "speciality of Alexander Rakhmanov.",
    strategy:
      "Gains space and drives the knight from f3 at once; 3.Ng5 fails to 3...Qxg5, so the " +
      "knight usually goes to d4. After 3.Nd4 Nc6 Black develops with gain of time, and " +
      "4.Nxc6 dxc6 opens lines for Black's pieces at the cost of doubled c-pawns, while 4.e3 " +
      "supports the knight on d4. The advanced pawn is a target for d3 and Nc3, so Black " +
      "backs it up with ...Nf6, ...d5 or ...f5.",
  },

  "1.c4 e5 2.Nf3 d6": {
    strategy:
      "Guards e5 with a pawn in a Philidor-like set-up and frees the c8-bishop. The structure " +
      "is solid, but the f8-bishop is hemmed in, and White can strike at once with 3.d4 or " +
      "develop calmly with Nc3 and g3.",
  },

  "1.c4 e5 2.Nf3 Qe7": {
    strategy:
      "Guards e5 but blocks the f8-bishop and puts the queen where 3.Nc3 and Nd5 hit it with " +
      "gain of tempo. The pawn is not lost, but Black falls behind in development.",
  },

  "1.c4 e5 2.Nf3 Qf6": {
    strategy:
      "Guards e5 with the queen but takes f6 from the knight and invites 3.Nc3 followed by " +
      "Nd5 with gain of tempo. An early queen sortie that costs time without a clear purpose.",
  },

  "1.c4 e5 2.Nf3 Bd6": {
    strategy:
      "Guards e5 but blocks the d-pawn, so the c8-bishop stays shut in and ...d5 is hard to " +
      "prepare. White develops freely with Nc3 and d4 or g3 while Black's pieces lack good " +
      "squares; no material is lost.",
  },

  "1.c4 e5 2.Nf3 Bc5": {
    strategy:
      "Leaves e5 unprotected and hopes for 3.Nxe5 Bxf2+ 4.Kxf2 Qh4+. That regains the piece " +
      "after 5.g3 Qd4+ 6.e3 Qxe5, but 7.d4 chases the queen and White keeps the bishop pair; " +
      "White can also just develop with 3.Nc3.",
  },

  "1.c4 e5 2.Nf3 d5": {
    strategy:
      "Strikes at c4 at once, but 3.cxd5 Qxd5 4.Nc3 gains a tempo on the queen and leaves " +
      "White ahead in development, while 3.Nxe5 is also available.",
  },

  "1.c4 e5 2.Nf3 f6": {
    strategy:
      "Guards e5 with a pawn but takes f6 from the knight and weakens the e6-square and the " +
      "e8-h5 diagonal. White continues d4 or Nc3 with an easy lead in development.",
  },

  "1.c4 e5 2.Nf3 Na6": {
    strategy:
      "Develops to the rim and heads for c5 or c7, but never guards e5: 3.Nxe5 wins the pawn, " +
      "and the knight on a6 stays offside.",
  },

  "1.c4 e5 2.Nf3 Qg5": {
    strategy:
      "Eyes g2, but the queen steps onto a square the f3-knight covers: 3.Nxg5 wins it for " +
      "nothing.",
  },

  "1.c4 e5 2.Nf3 Qh4": {
    strategy: "Puts the queen en prise to the f3-knight: 3.Nxh4 simply wins it.",
  },

  "1.c4 e5 2.Nf3 Ke7": {
    strategy:
      "Forfeits castling and blocks the queen and the f8-bishop while e5 still hangs: 3.Nxe5 " +
      "wins the pawn, with Black's king stuck in the centre.",
  },

  "1.c4 e5 2.Nf3 Be7": {
    strategy:
      "Does not guard e5, which the f3-knight takes: 3.Nxe5 wins a pawn, and 3...Bf6 is met " +
      "by 4.Nf3 or 4.d4, so Black has nothing to show for it.",
  },

  "1.c4 e5 2.Nf3 Bb4": {
    strategy:
      "Pins the d2-pawn to the king but leaves e5 hanging: 3.Nxe5 wins a pawn. After 3...Qe7 " +
      "4.Nd3 the knight hits the bishop, and the pin does not win the pawn back.",
  },

  "1.c4 e5 2.Nf3 Ba3": {
    strategy:
      "Throws the bishop away: 3.Nxa3 or 3.bxa3 wins a piece for nothing, and e5 is still " +
      "hanging.",
  },

  "1.c4 e5 2.Nf3 Nh6": {
    strategy:
      "Puts a knight on the rim where it does not help guard e5: 3.Nxe5 wins the pawn and " +
      "Black is left with a poorly placed piece.",
  },

  "1.c4 e5 2.Nf3 Nf6": {
    strategy:
      "Develops, but the knight does not guard e5 and no e4-pawn is there to win back: 3.Nxe5 " +
      "takes the pawn, and after 3...Nc6 4.Nxc6 dxc6 Black has open lines but no real " +
      "compensation for it.",
  },

  "1.c4 e5 2.Nf3 Ne7": {
    strategy:
      "Heads for g6 or c6 but does not guard e5: 3.Nxe5 wins the pawn, and 3...Ng6 4.Nxg6 " +
      "hxg6 leaves Black a pawn down.",
  },

  "1.c4 e5 2.Nf3 a6": {
    strategy:
      "Prepares ...b5 but ignores the threat on e5: 3.Nxe5 wins the pawn, and the a-pawn move " +
      "does nothing for development or the centre.",
  },

  "1.c4 e5 2.Nf3 a5": {
    strategy:
      "Gains queenside space but leaves e5 en prise: 3.Nxe5 wins the pawn, and the rook-pawn " +
      "move plays no part in the fight for the centre.",
  },

  "1.c4 e5 2.Nf3 b6": {
    strategy:
      "Prepares ...Bb7 against the long diagonal but never defends e5: 3.Nxe5 wins the pawn, " +
      "and the bishop on b7 meets only a solid g2-pawn.",
  },

  "1.c4 e5 2.Nf3 b5": {
    strategy:
      "Offers a pawn on the flank while e5 also hangs: 3.cxb5 or 3.Nxe5 wins a pawn at once, " +
      "and the b-pawn thrust has no follow-up in the centre.",
  },

  "1.c4 e5 2.Nf3 c6": {
    strategy:
      "Prepares ...d5 but leaves e5 undefended: 3.Nxe5 wins a pawn, and ...Qa5 only hits the " +
      "knight, which retreats with the extra pawn.",
  },

  "1.c4 e5 2.Nf3 c5": {
    strategy:
      "Mirrors White's pawn but forgets e5: 3.Nxe5 takes it, and ...Nc6 trades the knight off " +
      "while White keeps the extra pawn.",
  },

  "1.c4 e5 2.Nf3 f5": {
    strategy:
      "Aims at space on the kingside but forgets the e5-pawn: 3.Nxe5 takes it, and the queen " +
      "sorties ...Qf6 or ...Qe7 are met by d4 or Nd3.",
  },

  "1.c4 e5 2.Nf3 g6": {
    strategy:
      "Prepares the fianchetto ...Bg7 but leaves e5 en prise: 3.Nxe5 wins the pawn, and " +
      "3...Bg7 4.d4 supports the knight, so Black is simply a pawn down.",
  },

  "1.c4 e5 2.Nf3 g5": {
    strategy:
      "A lunge that loosens the kingside for good and still leaves e5 hanging: 3.Nxe5 wins a " +
      "pawn, and White can add h4 or d4 against the advanced g-pawn.",
  },

  "1.c4 e5 2.Nf3 h6": {
    strategy:
      "A waiting move that guards g5 but ignores the threat on e5: 3.Nxe5 wins the pawn, and " +
      "the tempo contributes nothing to development.",
  },

  "1.c4 e5 2.Nf3 h5": {
    strategy:
      "Pushes the rook-pawn for no reason and leaves e5 en prise: 3.Nxe5 wins the pawn, and " +
      "the h-pawn does nothing for the centre or development.",
  },
};
