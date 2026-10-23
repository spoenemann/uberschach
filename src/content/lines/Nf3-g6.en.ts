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
};
