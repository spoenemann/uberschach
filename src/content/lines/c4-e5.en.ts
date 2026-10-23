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
};
