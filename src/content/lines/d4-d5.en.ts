import type { OpeningTexts } from "../book.ts";

// English prose for d4-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.d4 d5 2.c4": {
    name: "Queen's Gambit",
    background:
      "One of the oldest known openings: it is mentioned in the Göttingen manuscript of 1490 " +
      "and was analysed by Gioachino Greco in the 17th century. It did not become common " +
      "until the 1873 Vienna tournament, and it was played in all but two of the 34 games of " +
      "the 1927 World Championship match between Capablanca and Alekhine.",
    strategy:
      "Attacks d5 from the wing and prepares e4, offering a pawn that Black cannot keep " +
      "without conceding something. Black accepts with ...dxc4 and returns the pawn for quick " +
      "development, or supports d5 with ...e6 for a solid structure or with ...c6, keeping " +
      "the light-squared bishop free. White gets the bigger centre and lasting pressure on " +
      "d5, but must be ready for the breaks ...c5 and ...e5.",
  },

  "1.d4 d5 2.Nf3": {
    name: "Queen's Pawn Game: Zukertort Variation",
    background:
      "2.Nf3 is the second most common move after 1.d4 d5, behind the Queen's Gambit 2.c4, " +
      "and the position is also frequently reached via 1.Nf3.",
    strategy:
      "Develops the kingside knight to a square from which it covers e5 and d4, without " +
      "deciding the pawn structure. White keeps every main set-up open: c4 gives a Queen's " +
      "Gambit, Bf4 a London System, Bg5 a Torre Attack, e3 with Bd3 a Colle System, and g3 a " +
      "fianchetto set-up. Black most often answers 2...Nf6, and White must then choose the " +
      "system.",
  },

  "1.d4 d5 2.Bf4": {
    name: "London System",
    background:
      "Named after the 1922 London tournament, where the opening was played seven times, " +
      "including in games by Capablanca, Alekhine and Rubinstein. James Mason was the first " +
      "master-level player to use it regularly, at Vienna 1882, London 1883 and New York " +
      "1889.",
    strategy:
      "Develops the c1 bishop outside the pawn chain before e3 can lock it in, and plans e3, " +
      "Nf3, c3, Nbd2 and Bd3 in a compact set-up that needs little theory. Black can attack " +
      "d4 with ...c5, often followed by ...Qb6 against the loose b2-pawn, or build a solid " +
      "structure with ...Nf6 and ...e6. The set-up is low-risk, but Black is regarded as able " +
      "to equalise fairly easily.",
  },

  "1.d4 d5 2.Nc3": {
    name: "Queen's Pawn Game: Chigorin Variation",
    strategy:
      "Develops the knight, puts pressure on d5 and prepares e4, but blocks the c-pawn, so " +
      "the usual c4 break is not available. White follows up with 3.Bg5 against a knight on " +
      "f6, with 3.Bf4 for a London-style set-up, or with the pawn offer 3.e4. Black usually " +
      "answers 2...Nf6, and 2...c5 is also viable, striking at d4, which the c-pawn cannot " +
      "support from c3.",
  },

  "1.d4 d5 2.Bg5": {
    name: "Hodgson Attack",
    background:
      "Named after the English grandmaster Julian Hodgson, who studied it extensively and " +
      "found several new ideas; Preston Ware had already tested it in the 1880s. It was a " +
      "very rare line until the 1980s, when players including Michael Adams and Tony Miles " +
      "tried it. It is also called the Levitsky Attack, after Stepan Levitsky, and the " +
      "Pseudo-Trompowsky.",
    strategy:
      "Develops the bishop to g5, where it eyes e7 and stands ready to answer ...Nf6 with " +
      "Bxf6, doubling Black's f-pawns. Black has solid replies: 2...h6 3.Bh4 c6 followed by " +
      "...Qb6 hits b2, which the bishop no longer guards, and after 2...Nf6 3.Bxf6 Black gets " +
      "the bishop pair for the damaged structure.",
  },

  "1.d4 d5 2.e3": {
    strategy:
      "Supports d4 and opens the f1 bishop, heading for a Colle set-up with Nf3 and Bd3 or a " +
      "Stonewall set-up with f4. The c1 bishop is shut in behind the pawn, while Black can " +
      "develop ...Bf5 outside the chain at once. Sound and low-risk, but passive, because " +
      "nothing is done against d5.",
  },

  "1.d4 d5 2.e4": {
    strategy:
      "Offers the e-pawn for quick development: after 2...dxe4 3.Nc3 Nf6 4.f3 White gets a " +
      "tempo and a half-open f-file for the pawn. Theory gives Black several ways to " +
      "equalise, so the gambit is almost never seen at top level, and Black can also decline " +
      "it with 2...e6, 2...c6 or 2...Nc6.",
  },

  "1.d4 d5 2.g3": {
    strategy:
      "Prepares Bg2, which pressures d5 along the long diagonal, and can lead to a " +
      "Catalan-style set-up after Nf3 and c4. Sound but slow: d5 is not challenged yet, so " +
      "Black can develop with ...Bf5, ...Nf6 and ...e6 or ...c5 without difficulty.",
  },

  "1.d4 d5 2.b3": {
    strategy:
      "Prepares Bb2, which backs up d4 from behind, though the d4-pawn blocks the bishop's " +
      "view along the long diagonal. Sound but slow: nothing is done against d5, so Black " +
      "completes development with ...Nf6, ...Bf5 and ...e6 or ...c5 at ease.",
  },

  "1.d4 d5 2.f4": {
    strategy:
      "Takes e5 and aims for a Stonewall set-up with e3, Nf3 and Bd3. It is playable, but it " +
      "leaves e4 as a hole for a black knight, opens the e1–h4 diagonal, and makes the c1 " +
      "bishop a bad bishop behind its own pawns. Black develops easily with ...Bf5 or with " +
      "...Nf6 and ...e6.",
  },

  "1.d4 d5 2.c3": {
    strategy:
      "Supports d4 and opens the d1–a4 diagonal, so an early ...Bf5 can be met by Qb3 against " +
      "the b7-pawn. The cost is that the b1 knight loses c3 and a later c4 takes a second " +
      "tempo; Black develops freely with ...Nf6 and ...e6.",
  },

  "1.d4 d5 2.a3": {
    strategy:
      "A rook-pawn move that neither develops a piece nor challenges d5. White's only gain is " +
      "control of b4, while Black develops freely with ...Nf6, ...Bf5 and ...e6.",
  },

  "1.d4 d5 2.a4": {
    strategy:
      "Gains a little queenside space but weakens b4, and it neither develops a piece nor " +
      "challenges d5. Black develops at ease with ...Nf6, ...Bf5 and ...e6.",
  },

  "1.d4 d5 2.b4": {
    strategy:
      "Gains queenside space but leaves the b4-pawn loose: after ...e6 the f8 bishop attacks " +
      "it, and ...Bxb4 would come with check, so White must spend a tempo on a3 or c3. " +
      "Nothing is done about d5 meanwhile.",
  },

  "1.d4 d5 2.f3": {
    strategy:
      "Prepares e4, but takes f3 from the g1 knight and opens the e1–h4 diagonal to the king. " +
      "After 2...Nf6 3.e4 dxe4 4.Nc3 White is a pawn down in a Blackmar–Diemer Gambit, and " +
      "Black can also strike at d4 at once with 2...c5.",
  },

  "1.d4 d5 2.h3": {
    strategy:
      "Stops ...Bg4, but spends a tempo on a rook-pawn move that develops nothing and leaves " +
      "d5 unchallenged. Black develops freely with ...Nf6, ...Bf5 and ...e6.",
  },

  "1.d4 d5 2.h4": {
    strategy:
      "Advances a rook pawn that neither develops a piece nor challenges d5, and loosens the " +
      "kingside. Black develops freely with ...Nf6, ...Bf5 and ...e6.",
  },

  "1.d4 d5 2.Na3": {
    strategy:
      "Puts the knight on the rim, where it eyes b5 and c4 but does little for the centre. " +
      "After ...e6 the knight can be exchanged by ...Bxa3 bxa3, which leaves White with " +
      "doubled a-pawns.",
  },

  "1.d4 d5 2.Nd2": {
    strategy:
      "Develops the knight and supports a later e4 or c4, but shuts in the c1 bishop until " +
      "the knight moves on or b3 is played. Nothing is done against d5, so Black develops " +
      "easily with ...Nf6, ...Bf5 and ...e6.",
  },

  "1.d4 d5 2.Nh3": {
    strategy:
      "Puts the knight on the rim, where ...Bxh3 gxh3 gives White doubled h-pawns and a " +
      "weakened kingside for only the bishop pair. Even without the exchange the knight does " +
      "little for the centre.",
  },

  "1.d4 d5 2.Bd2": {
    strategy:
      "Develops the bishop to a passive square where it blocks the b1 knight's natural square " +
      "and the queen, and does nothing about d5. Black takes the lead in development with " +
      "...Nf6, ...Bf5 and ...e6.",
  },

  "1.d4 d5 2.Be3": {
    strategy:
      "Puts the bishop on the e-pawn's natural square, so e3 is no longer available, and the " +
      "bishop does nothing about d5. Black develops freely with ...Nf6, ...Bf5 and ...e6.",
  },

  "1.d4 d5 2.Qd2": {
    strategy:
      "Brings the queen out early to a square where it blocks the c1 bishop and takes d2 from " +
      "the b1 knight, and does nothing about d5. Black develops freely with ...Nf6, ...Bf5 " +
      "and ...e6.",
  },

  "1.d4 d5 2.Qd3": {
    name: "Amazon Attack",
    strategy:
      "Brings the queen out before the minor pieces, but ...Bf5 attacks it at once, so White " +
      "must spend a tempo to move it again. Black gains time for ...Nf6 and ...e6 and is " +
      "ahead in development.",
  },

  "1.d4 d5 2.g4": {
    name: "Queen's Pawn Game: Zurich Gambit",
    strategy:
      "Hangs the pawn: 2...Bxg4 wins it, because the queen cannot recapture while the e2-pawn " +
      "blocks the diagonal, and the kingside is weakened for nothing in return.",
  },

  "1.d4 d5 2.Bh6": {
    strategy:
      "Loses the bishop for nothing, since 2...gxh6 captures it and no White piece defends " +
      "h6.",
  },

  "1.d4 d5 2.Kd2": {
    strategy:
      "Gives up castling and puts the king on a square where it blocks the c1 bishop and the " +
      "queen. Black can chase it at once, for example with ...Nf6 and ...Ne4+.",
  },

  "1.d4 d5": {
    name: "Closed Game",
    background:
      "1.d4 d5 became widely popular by the early 20th century, as players with White began " +
      "to try first moves other than 1.e4 more often. 1...d5 remains the second most popular " +
      "reply to 1.d4, after 1...Nf6.",
  },

  "1.d4 d5 2.c4 e6": {
    name: "Queen's Gambit Declined",
    background:
      "It became particularly common in the early 20th century and has the reputation of " +
      "being one of Black's most reliable defences to 1.d4. Viswanathan Anand chose its " +
      "Lasker Variation in the final game of the 2010 World Championship, defeating Topalov " +
      "and retaining the title.",
    strategy:
      "Supports d5 with the e-pawn and builds a solid centre, usually followed by ...Nf6, " +
      "...Be7 and ...O-O. White keeps up the pressure on d5 with Nc3, Bg5 and the option of " +
      "cxd5, and usually holds a little more space. The cost is the c8-bishop, shut in behind " +
      "e6 until ...b6 and ...Bb7, or a freeing break with ...c5 or ...e5, gives it play.",
  },

  "1.d4 d5 2.c4 c6": {
    name: "Slav Defence",
    background:
      "Although it was analysed as early as 1590, it was not until the 1920s that it started " +
      "to be explored extensively. The two Alekhine–Euwe World Championship matches of 1935 " +
      "and 1937 gave it an exhaustive test, and Vladimir Kramnik played it in six of his " +
      "eight games as Black in the 2006 World Championship.",
    strategy:
      "Defends d5 with the c-pawn and keeps the c8-bishop's diagonal open, so the bishop can " +
      "still reach f5 or g4, often after ...Nf6 and ...dxc4. After ...dxc4 the pawn on c6 " +
      "also supports ...b5, to hold the pawn or gain time against the piece that takes it, " +
      "while an early ...e6 leads to the Semi-Slav. The drawbacks are that ...c6 develops no " +
      "piece and takes c6 from the b8-knight, and that the later break ...c5 costs a tempo.",
  },

  "1.d4 d5 2.c4 dxc4": {
    name: "Queen's Gambit Accepted",
    background:
      "The 1886 World Championship match between Wilhelm Steinitz and Johannes Zukertort " +
      "introduced the first modern ideas: Steinitz gave the pawn back and left White with an " +
      "isolated d4-pawn. Alexander Alekhine added new ideas, and the line was played at the " +
      "highest level from the 1930s. It declined after the Second World War as the Indian " +
      "Defences gained ground, but several elite players returned to it in the late 1990s, " +
      "and it is currently considered sound.",
    strategy:
      "Takes the pawn and gives up the centre in return for free piece play. Black usually " +
      "develops with ...Nf6 and ...e6, then strikes at White's centre with ...c5 and ...cxd4. " +
      "White usually regains the pawn with e3 and Bxc4; holding it with ...b5 tends to " +
      "backfire after a4, so Black spends the time on play against the centre instead.",
  },

  "1.d4 d5 2.c4 Nc6": {
    name: "Chigorin Defence",
    background:
      "Named after the 19th-century Russian master Mikhail Chigorin. Vasily Smyslov used it " +
      "against Garry Kasparov in the 1980s and drew, and Alexander Morozevich, who is perhaps " +
      "the only modern grandmaster to play it regularly, published a book on it with Vladimir " +
      "Barskij in 2007.",
    strategy:
      "Develops with pressure on d4 and prepares ...e5, but the knight blocks the c-pawn and " +
      "leaves d5 to the queen. Black plays for quick piece activity and accepts giving a " +
      "bishop for a knight, as in 3.Nf3 Bg4 4.cxd5 Bxf3, or recaptures with the queen, as in " +
      "3.cxd5 Qxd5 4.e3 e5. It is playable and a useful surprise, but its theory is less " +
      "developed than that of the main defences.",
  },

  "1.d4 d5 2.c4 Bf5": {
    name: "Baltic Defence",
    background:
      "Also known as the Grau Defence and the Sahovic Defence. Grandmasters including Paul " +
      "Keres and Alexei Shirov have used it, but it has not found widespread acceptance among " +
      "chess masters.",
    strategy:
      "Develops the bishop before ...e6 can shut it in, but leaves b7 undefended and the " +
      "bishop exposed. 3.Qb3 hits b7 at once, and 3.cxd5 Qxd5 4.Nc3 gains time with e4 to " +
      "follow, so Black meets 3.cxd5 with 3...Bxb1 and gives White the bishop pair. It is an " +
      "offbeat but playable line.",
  },

  "1.d4 d5 2.c4 e5": {
    name: "Albin Countergambit",
    background:
      "Takes its name from Adolf Albin, who played it against Emanuel Lasker in New York in " +
      "1893, although Cavallotti had played it against Salvioli at the Milan tournament of " +
      "1881. Alexander Morozevich made some successful use of it in the 2000s.",
    strategy:
      "Sacrifices a pawn for a central wedge on d4 after 3.dxe5 d4, with quick development by " +
      "...Nc6 and ...Be6, often queenside castling, and some attacking chances. White usually " +
      "returns the pawn at a good moment for a positional edge, often after g3, Bg2 and Nbd2. " +
      "The careless 4.e3 runs into the Lasker Trap.",
  },

  "1.d4 d5 2.c4 c5": {
    name: "Austrian Defence",
    background:
      "First described in print by Alessandro Salvio in 1604. The name comes from Austrian " +
      "players who studied it, including Hans Haberditz, Hans Müller and Ernst Grünfeld. " +
      "Hikaru Nakamura used it in 2023 and 2024, drawing Magnus Carlsen in the Champions " +
      "Chess Tour 2023 finals and beating Ding Liren at Norway Chess 2024.",
    strategy:
      "Mirrors White's move and hits d4 at once. After 3.cxd5 Black should not recapture with " +
      "the queen, since 3...Qxd5 4.Nf3 cxd4 5.Nc3 gains time against it, so 3...Nf6 prepares " +
      "to retake with the knight. Theory holds that 4.Nf3 or 4.e4 keeps an edge for White, " +
      "and that Black plays at best for a draw.",
  },

  "1.d4 d5 2.c4 Nf6": {
    strategy:
      "Develops the knight but leaves d5 to the queen: 3.cxd5 Nxd5 4.e4 drives the knight " +
      "away with a gain of time and gives White a broad pawn centre. Supporting d5 first with " +
      "...e6 or ...c6 avoids this.",
  },

  "1.d4 d5 2.c4 Na6": {
    strategy:
      "Aims at b4 from the rim but does nothing in the centre and leaves d5 to the queen " +
      "alone. After 3.cxd5 Qxd5 4.Nc3 the queen is driven back, and White leads in " +
      "development.",
  },

  "1.d4 d5 2.c4 Be6": {
    strategy:
      "Guards d5 a second time, but the bishop blocks the e-pawn and leaves b7 undefended. " +
      "After 3.cxd5 Bxd5 4.Nc3 it comes under attack again, and White develops with a gain of " +
      "time.",
  },

  "1.d4 d5 2.c4 Bg4": {
    strategy:
      "Develops the bishop before ...e6 can shut it in, but on g4 it hits only the " +
      "well-defended e2-pawn and leaves b7 undefended. 3.cxd5 Qxd5 4.Nc3 gains time against " +
      "the queen, and f3 or h3 later chases the bishop.",
  },

  "1.d4 d5 2.c4 Qd7": {
    strategy:
      "Keeps d5 guarded but puts the queen on d7, where it blocks the c8-bishop and takes d7 " +
      "from the b8-knight. After 3.cxd5 Qxd5 4.Nc3 the queen has to move again, and White is " +
      "ahead in development.",
  },

  "1.d4 d5 2.c4 Qd6": {
    strategy:
      "Brings the queen out early to hold d5, but after 3.cxd5 Qxd5 4.Nc3 it must move again " +
      "while White develops with tempo.",
  },

  "1.d4 d5 2.c4 Nh6": {
    strategy:
      "Heads for f5 from the rim, but the c1-bishop already eyes h6: 3.Bxh6 gxh6 wrecks " +
      "Black's kingside pawns, with only the bishop pair in return. The d5 pawn is also left " +
      "to the queen.",
  },

  "1.d4 d5 2.c4 a6": {
    strategy:
      "Prepares ...b5 for the case of ...dxc4, but spends a tempo on a rook-pawn move and " +
      "leaves d5 to the queen. After 3.cxd5 Qxd5 4.Nc3 the queen is attacked and must " +
      "retreat.",
  },

  "1.d4 d5 2.c4 a5": {
    strategy:
      "A wing move that weakens b5 and contributes nothing to the centre or development. " +
      "White plays 3.cxd5 Qxd5 4.Nc3 and gains a tempo against the queen.",
  },

  "1.d4 d5 2.c4 b6": {
    strategy:
      "Prepares ...Bb7, but there the bishop would face its own d5-pawn, and d5 is left to " +
      "the queen alone. 3.cxd5 Qxd5 4.Nc3 drives the queen off with a gain of time.",
  },

  "1.d4 d5 2.c4 f6": {
    strategy:
      "Takes f6 from the knight and weakens e6 and the e8-h5 diagonal, while neither " +
      "supporting d5 nor developing a piece. White answers 3.cxd5 Qxd5 4.Nc3 and gains a " +
      "tempo.",
  },

  "1.d4 d5 2.c4 f5": {
    strategy:
      "Stakes out e4 as in a Dutch set-up, but leaves d5 to the queen and weakens e6 and the " +
      "e8-h5 diagonal. 3.cxd5 Qxd5 4.Nc3 gains time against the queen.",
  },

  "1.d4 d5 2.c4 g6": {
    strategy:
      "Prepares the fianchetto ...Bg7 but ignores the centre. 3.cxd5 Qxd5 4.Nc3 chases the " +
      "queen away, and White keeps the bigger centre and the lead in development.",
  },

  "1.d4 d5 2.c4 h6": {
    strategy:
      "Takes g5 from the c1-bishop, but it is a slow rim-pawn move that does nothing for d5 " +
      "or development. After 3.cxd5 Qxd5 4.Nc3 White hits the queen with tempo.",
  },

  "1.d4 d5 2.c4 h5": {
    strategy:
      "Spends a tempo on the rim and loosens g5 and g6, with no connection to d5 or to " +
      "development. White answers 3.cxd5 Qxd5 4.Nc3 and develops with a gain of time.",
  },

  "1.d4 d5 2.c4 Nd7": {
    strategy:
      "Blocks the queen's defence of d5, so 3.cxd5 wins a pawn: after 3...Ngf6 4.Nc3 and e4 " +
      "White keeps it. The knight on d7 also shuts in the c8-bishop.",
  },

  "1.d4 d5 2.c4 Bd7": {
    strategy:
      "Blocks the queen's defence of d5, so 3.cxd5 wins a pawn that no black piece can retake " +
      "at once. The bishop on d7 is passive and takes d7 from the b8-knight.",
  },

  "1.d4 d5 2.c4 Bh3": {
    strategy:
      "Gives away the bishop for nothing: 3.gxh3 takes it, and no black piece can recapture " +
      "on h3, so Black has no compensation at all.",
  },

  "1.d4 d5 2.c4 Kd7": {
    strategy:
      "Gives up castling and blocks the queen's defence of d5, so 3.cxd5 wins a pawn that " +
      "cannot be retaken at once. The king is left in the middle with nothing in return.",
  },

  "1.d4 d5 2.c4 b5": {
    name: "Queen's Gambit Declined: Zilbermints Gambit",
    strategy:
      "Offers the b-pawn to deflect the c-pawn, but 3.cxb5 wins it, since nothing can " +
      "recapture, and Black has no lead in development to show for it. The queenside is " +
      "loosened for good.",
  },

  "1.d4 d5 2.c4 g5": {
    strategy:
      "Leaves the g-pawn en prise: 3.Bxg5 takes it along the open c1-h6 diagonal, and nothing " +
      "of Black's can retake, since the queen's diagonal is blocked by e7. The kingside is " +
      "loosened for good with no development in return.",
  },

  "1.d4 d5 2.Nf3 Nf6": {
    strategy:
      "Develops the knight to its natural square, controls e4 and keeps every plan open: …e6 " +
      "or …c6 against 3.c4, …c5 or …Bf5 against quieter set-ups. The position is the same as " +
      "after 1.d4 Nf6 2.Nf3 d5. The cost is that White still chooses the structure: 3.c4 " +
      "gives a Queen's Gambit, while 3.Bf4, 3.Bg5 or 3.e3 lead to the London, Torre or Colle " +
      "systems.",
  },

  "1.d4 d5 2.Nf3 c6": {
    strategy:
      "Supports d5 and keeps the c8-bishop's route to f5 or g4 open, since …e6 has not been " +
      "played. After 3.c4 the game is a Slav Defence, and against quieter moves …Bf5, …e6 and " +
      "…Nf6 make a solid set-up. The cost is that the b8-knight loses its natural c6-square.",
  },

  "1.d4 d5 2.Nf3 e6": {
    strategy:
      "Supports d5 and opens the f8-bishop's diagonal. After 3.c4 the game is a Queen's " +
      "Gambit Declined, and against 3.Bf4, 3.e3 or 3.g3 Black develops with …Nf6, …Be7 or " +
      "…Bd6 and …c5. The cost is the c8-bishop, now shut in behind the e6-pawn, which usually " +
      "needs …b6 or a later …e5 to find a diagonal.",
  },

  "1.d4 d5 2.Nf3 Nc6": {
    name: "Queen's Pawn Game: Chigorin Variation",
    background:
      "This is the knight move of the Chigorin Defence, 1.d4 d5 2.c4 Nc6, named after the " +
      "19th-century Russian master Mikhail Chigorin and considered playable but rare. After " +
      "3.c4 this position transposes into that defence's 3.Nf3 line.",
    strategy:
      "Develops a piece at once and pressures d4, but the knight blocks the c-pawn, so d5 can " +
      "no longer be supported by …c6. White can answer with 3.c4, hitting d5 at once, or " +
      "choose a quieter set-up with 3.Bf4 or 3.e3.",
  },

  "1.d4 d5 2.Nf3 Bf5": {
    strategy:
      "Develops the bishop outside the pawn chain before …e6, a London System with colours " +
      "reversed. With the bishop gone from c8 the b7-pawn has no defender, so 3.c4 strikes at " +
      "d5 and Qb3 can follow against b7, while 3.Nh4 attacks the bishop and aims to take it " +
      "for the knight.",
  },

  "1.d4 d5 2.Nf3 Bg4": {
    name: "Queen's Pawn Game: Anti-Torre",
    strategy:
      "Develops the bishop actively and prepares …Bxf3, which would double White's f-pawns. " +
      "3.Ne5 attacks the bishop and gains a tempo, and with the bishop gone from c8 the " +
      "b7-pawn has no defender, so c4 and Qb3 can press against it.",
  },

  "1.d4 d5 2.Nf3 c5": {
    name: "Queen's Pawn Game: Krause Variation",
    background:
      "Named after Orla Hermann Krause (1867–1935), a Danish chess master and analyst who " +
      "found many new ideas in the Slav Defence in the 1920s. He played first board for " +
      "Denmark at the 1927 London Olympiad, where the team won silver.",
    strategy:
      "Strikes at d4 at once and brings tension into the centre. 3.c4 reaches a position of " +
      "the Austrian Defence, in which most theoreticians believe Black cannot equalise, and " +
      "3.dxc5 gives a reversed Queen's Gambit Accepted in which Black spends time regaining " +
      "the pawn.",
  },

  "1.d4 d5 2.Nf3 g6": {
    strategy:
      "Prepares to fianchetto the king's bishop before the centre is settled. It is sound, " +
      "but without …Nf6 or …c6 the d5-pawn has only the queen to guard it, so 3.c4 puts " +
      "pressure on it at once.",
  },

  "1.d4 d5 2.Nf3 Nd7": {
    strategy:
      "Blocks the c8-bishop, and the knight does little on d7 before …c6 or …e6 has been " +
      "played. White takes space with c4 or develops with Bf4 undisturbed.",
  },

  "1.d4 d5 2.Nf3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but is far from the centre. It " +
      "costs a tempo for little, and White continues with c4 or Bf4 straight away.",
  },

  "1.d4 d5 2.Nf3 Bd7": {
    strategy:
      "Puts the bishop on a passive square, where it blocks the queen and takes d7 from the " +
      "b8-knight. White continues with c4 or Bf4 with a free hand.",
  },

  "1.d4 d5 2.Nf3 Be6": {
    strategy:
      "Shuts in the e-pawn, so …e6 is no longer possible. The bishop guards d5, but it " +
      "invites 3.Ng5, which attacks it and threatens Nxe6 fxe6 to double Black's pawns.",
  },

  "1.d4 d5 2.Nf3 Qd7": {
    strategy:
      "Brings the queen out early and blocks the c8-bishop. 3.Ne5 attacks it at once and " +
      "gains a tempo, with the d4-pawn guarding the knight.",
  },

  "1.d4 d5 2.Nf3 Qd6": {
    strategy:
      "Brings the queen out early to an exposed square. 3.Nc3 threatens Nb5, which would " +
      "attack both the queen and c7, and prepares e4 to gain more time against the queen.",
  },

  "1.d4 d5 2.Nf3 Nh6": {
    strategy:
      "Aims for f5 but invites 3.Bxh6 gxh6, which wrecks Black's kingside pawns into doubled, " +
      "isolated h-pawns. The bishop pair is little compensation.",
  },

  "1.d4 d5 2.Nf3 a6": {
    strategy:
      "Spends a tempo on a flank move that has no role yet. At best it prepares …b5, while " +
      "White strikes at d5 with c4 or develops with Bf4.",
  },

  "1.d4 d5 2.Nf3 a5": {
    strategy:
      "A rim pawn move that only controls b4 and leaves b5 without pawn cover. It develops " +
      "nothing, and White builds up freely with c4, Bf4 or e3.",
  },

  "1.d4 d5 2.Nf3 b6": {
    strategy:
      "Prepares …Bb7, but that bishop would only look at Black's own d5-pawn, and c6 is " +
      "weakened. White develops with Bf4 and e3 or strikes at d5 with c4.",
  },

  "1.d4 d5 2.Nf3 b5": {
    strategy:
      "Stops c4 for now but leaves the pawn loose: 3.e3 already threatens Bxb5+, and a4 or " +
      "Qd3 can attack it as well. It develops nothing and leaves c6 without pawn cover.",
  },

  "1.d4 d5 2.Nf3 f6": {
    strategy:
      "Prepares …e5 but takes f6 from the g8-knight and weakens e6 and the e8–h5 diagonal. " +
      "White develops freely, with 3.Bf4 adding control of e5, while Black's development lags " +
      "behind.",
  },

  "1.d4 d5 2.Nf3 f5": {
    strategy:
      "Plays for a Dutch-style set-up, but the pawn weakens e6 and the king's diagonal and " +
      "leaves e5 as an outpost for White's knight. Black must still develop all the pieces " +
      "behind it.",
  },

  "1.d4 d5 2.Nf3 h6": {
    strategy:
      "A slow move that takes g5 from White's pieces but develops nothing. White uses the " +
      "tempo for c4, Bf4 or e3.",
  },

  "1.d4 d5 2.Nf3 h5": {
    strategy:
      "Gains space on the flank at the cost of a tempo and the g5-square: the h-pawn can no " +
      "longer drive a White piece from g5, and the advanced pawn can become a target.",
  },

  "1.d4 d5 2.Nf3 Bh3": {
    strategy:
      "Hangs the bishop: 3.gxh3 wins a whole piece for nothing, since the bishop on h3 is " +
      "attacked by the g2-pawn and defended by nothing.",
  },

  "1.d4 d5 2.Nf3 Kd7": {
    strategy:
      "Gives up castling for nothing and walks into 3.Ne5+, which forces the king to move " +
      "again. Black loses more time, and the king stays stuck in the centre.",
  },

  "1.d4 d5 2.Nf3 e5": {
    strategy:
      "Offers a pawn for no clear return: after 3.dxe5 the pawn is gone, and …d4 would lose a " +
      "second one to Nxd4. …Nc6 or …Bg4 give only brief activity against a White position " +
      "without weaknesses.",
  },

  "1.d4 d5 2.Nf3 g5": {
    strategy:
      "Hangs a pawn at once: 3.Bxg5 or 3.Nxg5 wins it, and the loosened kingside offers no " +
      "compensation.",
  },

  "1.d4 d5 2.Bf4 Nf6": {
    strategy:
      "Develops the knight, guards d5 and e4 and keeps Black's options open: ...e6 with " +
      "...Bd6 to challenge the bishop, or ...c5 with ...Nc6 and ...Qb6 against the unguarded " +
      "b2-pawn. It is the most common reply and reaches the same position as 1.d4 Nf6 2.Bf4 " +
      "d5.",
  },

  "1.d4 d5 2.Bf4 c5": {
    name: "Accelerated London System: Steinitz Countergambit",
    background:
      "Wilhelm Steinitz played the move against James Mason in the London tournament of 1883. " +
      "Mason took the pawn, and after 3.dxc5 Nc6 4.Nf3 f6 5.e3 e5 6.Bg3 Bxc5 Black had won it " +
      "back and taken over the centre; Steinitz won the game.",
    strategy:
      "Strikes at d4 at once and exploits the bishop's absence from c1: ...Nc6, ...Bf5 and " +
      "...Qb6 follow quickly, with the queen pressing on the unguarded b2-pawn before Black " +
      "castles. White usually declines the pawn with e3 and c3, so that an exchange on d4 " +
      "still leaves two white pawns in the centre, and c3 lets Qb3 meet ...Qb6.",
  },

  "1.d4 d5 2.Bf4 e6": {
    strategy:
      "Supports d5 in Queen's Gambit Declined style and opens the f8-bishop's path to d6, " +
      "where it challenges the f4-bishop; ...Nf6, ...c5 and ...Nc6 usually follow. The price " +
      "is the c8-bishop, which the e6-pawn shuts in and which often struggles to find a good " +
      "square. White answers with e3, Nf3 or Nd2, Bd3 and c3, and meets ...Bd6 with Bg3 or " +
      "Bxd6.",
  },

  "1.d4 d5 2.Bf4 c6": {
    strategy:
      "Supports d5 in Slav style and keeps the c8-bishop free for ...Bf5, while the queen " +
      "gains the b6-square against the unguarded b2-pawn. The set-up is solid, and White " +
      "usually continues with e3, Nf3 and c3 and meets ...Qb6 with Qb3 or Qc1.",
  },

  "1.d4 d5 2.Bf4 Bf5": {
    background:
      "The Göttingen manuscript, the earliest known work devoted entirely to modern chess, " +
      "already includes 1.d4 d5 2.Bf4 Bf5 among its twelve openings; the possible dates given " +
      "for it are 1500–1505 and 1471. Jacob Sarratt's “A Treatise on the Game of Chess” " +
      "(1808) gives the line as well, continuing 3.Nc3 Nc6 4.f3.",
    strategy:
      "Mirrors White's development and gets the bishop outside the pawn chain before ...e6, " +
      "with ...Nf6 and ...c6 or ...Nc6 to follow. The symmetrical structure is sound, and " +
      "without a transposition the game tends toward a quiet draw. White's most testing plan " +
      "is to steer into a Queen's Gambit with c4.",
  },

  "1.d4 d5 2.Bf4 Nc6": {
    strategy:
      "Develops the knight with pressure on d4 and prepares ...Bf5 or ...Bg4 and a later " +
      "...e5, in the manner of the Chigorin Defence. It blocks the c-pawn, so the usual ...c5 " +
      "and ...c6 set-ups are gone, and e3 with Nf3 keeps d4 firmly guarded.",
  },

  "1.d4 d5 2.Bf4 Nd7": {
    strategy:
      "Develops the knight to a square from which it supports ...e5 and ...c5 and leaves the " +
      "c-pawn free for ...c6, with ...Ngf6 to follow. It blocks the c8-bishop and the queen's " +
      "file, so Black is slightly cramped, and White settles into the London with e3, Nf3 and " +
      "c3 or switches to c4.",
  },

  "1.d4 d5 2.Bf4 Bg4": {
    strategy:
      "Pins the e2-pawn against the queen, so 3.e3 is ruled out for now: 3...Bxd1 would " +
      "follow. White answers 3.Nf3, when ...Nf6 and ...e6 give a reversed Torre Attack, or " +
      "questions the bishop at once with 3.h3 or 3.f3.",
  },

  "1.d4 d5 2.Bf4 b6": {
    strategy:
      "Prepares ...Bb7 with ...e6 and ...c5, but with the pawn already on d5 the bishop bites " +
      "on its own pawn for the time being. The move develops nothing yet and loosens c6, and " +
      "White builds the usual London with e3, Nf3 and c3 or switches to c4.",
  },

  "1.d4 d5 2.Bf4 g6": {
    strategy:
      "Prepares ...Bg7, ...Nf6 and ...O-O, a King's Indian-style set-up in which the " +
      "g7-bishop presses on d4 along the long diagonal. It is sound but slow, and White " +
      "usually answers with e3, Nf3, Be2 and h3, which gives the f4-bishop a retreat on h2.",
  },

  "1.d4 d5 2.Bf4 h5": {
    strategy:
      "An uncommon sideline with a trap: the routine 3.e3? closes the bishop's retreat to d2, " +
      "and 3...e5! lets Black trap it with ...f6, ...g5 and ...h4 and win it for pawns. White " +
      "avoids this with 3.Nf3, which keeps the retreat open, or with 3.c4, after which the " +
      "h-pawn does little for Black.",
  },

  "1.d4 d5 2.Bf4 Na6": {
    strategy:
      "Puts the knight on the rim, where it aims at b4 and c5 but takes little part in the " +
      "fight for the centre. It does guard c7, yet costs time that White uses for e3, Nf3 and " +
      "c3.",
  },

  "1.d4 d5 2.Bf4 Bd7": {
    strategy:
      "Puts the bishop on a passive square, where it takes d7 from the b8-knight and blocks " +
      "the queen's d-file. It does less than ...Bf5 would, and White simply continues with e3 " +
      "and Nf3.",
  },

  "1.d4 d5 2.Bf4 Be6": {
    strategy:
      "Puts the bishop on e6, where it blocks the e-pawn and with it the f8-bishop, so the " +
      "usual ...e6 and ...Bd6 plan is gone. White develops with Nf3, e3 and c4 or c3 at " +
      "leisure while the bishop does little.",
  },

  "1.d4 d5 2.Bf4 Qd7": {
    strategy:
      "Brings the queen out early, where it blocks the c8-bishop and the knight and can be " +
      "hit with tempo, for example by Nf3 followed by Ne5. Black spends time on the queen " +
      "instead of developing.",
  },

  "1.d4 d5 2.Bf4 Nh6": {
    strategy:
      "Heads for f5 or g4 but offers the trade 3.Bxh6 gxh6, after which the doubled, isolated " +
      "h-pawns are a lasting weakness in Black's kingside.",
  },

  "1.d4 d5 2.Bf4 a6": {
    strategy:
      "Spends a tempo on a flank move that only prepares ...b5. It develops no piece and " +
      "leaves the centre alone, so White continues with e3, Nf3 and c4 unhindered.",
  },

  "1.d4 d5 2.Bf4 a5": {
    strategy:
      "Spends a tempo on a rook-pawn advance that takes b4 but develops nothing and does not " +
      "contest the centre. White develops with e3 and Nf3 and gains space with c4.",
  },

  "1.d4 d5 2.Bf4 b5": {
    strategy:
      "Pushes the b-pawn without developing a piece, weakens c5 and c6 and makes the pawn a " +
      "target: after 3.e3 the f1-bishop threatens Bxb5+, and a4 can attack it too. Black then " +
      "spends further moves such as ...a6 or ...c6 to hold it.",
  },

  "1.d4 d5 2.Bf4 f6": {
    strategy:
      "Aims for ...e5 but takes f6 from the g8-knight and opens the e8–h5 diagonal, so once " +
      "White has played e3 the queen can check on h5. Black spends a tempo without developing " +
      "a piece, while White continues with e3 and Nf3.",
  },

  "1.d4 d5 2.Bf4 f5": {
    strategy:
      "Aims for a Stonewall set-up with ...Nf6 and ...e6, but weakens e6 and the e8–h5 " +
      "diagonal and leaves e5 as a permanent hole, which the f4-bishop already controls and a " +
      "knight can occupy from f3. After ...e6 the c8-bishop is hemmed in behind its own " +
      "pawns.",
  },

  "1.d4 d5 2.Bf4 h6": {
    strategy:
      "Spends a tempo on a rook-pawn move that develops nothing; its point, a later ...g5 " +
      "against the f4-bishop, would loosen Black's own kingside. White continues with e3 and " +
      "Nf3, and h3 gives the bishop a retreat on h2.",
  },

  "1.d4 d5 2.Bf4 Bh3": {
    strategy:
      "Gives up the bishop for nothing: 3.Nxh3 or 3.gxh3 wins it, and Black has no " +
      "compensation for the piece.",
  },

  "1.d4 d5 2.Bf4 Qd6": {
    strategy:
      "Puts the queen where the f4-bishop takes it: 3.Bxd6 wins the queen, and after ...cxd6 " +
      "or ...exd6 Black has only a bishop in return.",
  },

  "1.d4 d5 2.Bf4 Kd7": {
    strategy:
      "Gives up castling for good and puts the king in front of the queen and the c8-bishop, " +
      "blocking both. After 3.e3 the f1-bishop can already check on b5, and the king stays " +
      "exposed in the centre.",
  },

  "1.d4 d5 2.Bf4 e5": {
    strategy:
      "Offers a pawn that 3.Bxe5 simply wins: after 3...Nc6 White retreats with 4.Bg3, and d4 " +
      "stays guarded by the queen. Black has opened the position but has no compensation for " +
      "the pawn.",
  },

  "1.d4 d5 2.Bf4 g5": {
    strategy:
      "Hangs the g-pawn: 3.Bxg5 wins it, because the queen cannot recapture with the e7-pawn " +
      "in the way, and the bishop remains active. The advance also weakens the kingside for " +
      "nothing.",
  },

  "1.d4 d5 2.Nc3 Nf6": {
    strategy:
      "Develops the kingside knight, adds a second guard to d5 and watches e4; it is the most " +
      "common reply. White chooses between 3.Bg5, the Richter–Veresov Attack, 3.Bf4, the " +
      "Jobava London System, and the gambit 3.e4, where 3...dxe4 transposes to the " +
      "Blackmar–Diemer Gambit. Black follows with ...e6, ...c6 or ...Bf5 and gets a sound, " +
      "flexible position.",
  },

  "1.d4 d5 2.Nc3 c6": {
    strategy:
      "Supports d5 and takes b5 from the knight while leaving the c8-bishop's diagonal open. " +
      "3.e4 transposes to the Caro-Kann Defence, 1.e4 c6 2.d4 d5 3.Nc3, and against 3.Nf3 or " +
      "3.Bf4 Black develops the bishop to f5 or g4 before ...e6 and gets a solid structure. " +
      "In return the b8-knight loses c6 and usually goes to d7.",
  },

  "1.d4 d5 2.Nc3 e6": {
    strategy:
      "Supports d5 and opens the f8-bishop. 3.e4 transposes to the French Defence, 1.e4 e6 " +
      "2.d4 d5 3.Nc3, while after 3.Bf4 or 3.Nf3 Black follows with ...Nf6 and ...c5 or " +
      "...Bd6. The price is the usual one in the French: the c8-bishop is shut in behind the " +
      "e6-pawn.",
  },

  "1.d4 d5 2.Nc3 Nc6": {
    strategy:
      "Develops with pressure on d4, but the knight blocks the c-pawn, so ...c6 can no longer " +
      "support d5. 3.e4 transposes to the Nimzowitsch Defence, 1.e4 Nc6 2.d4 d5 3.Nc3, where " +
      "3...dxe4 4.d5 drives the knight to e5 with tempo and White usually continues 5.Qd4 or " +
      "5.Bf4. Sound but offbeat.",
  },

  "1.d4 d5 2.Nc3 Bf5": {
    name: "Queen's Pawn Game: Chigorin Variation, Alburt Defence",
    strategy:
      "Develops the light-squared bishop before ...e6 can shut it in and prepares ...e6, " +
      "...Nf6 and ...Nc6. The bishop becomes a target: 3.Bf4 Nc6 4.e3 e6 5.g4 Bg6 gains " +
      "kingside space for White, and f3 with e4 gains time against it. Sound but rarely " +
      "played.",
  },

  "1.d4 d5 2.Nc3 Bg4": {
    name: "Queen's Pawn Game: Chigorin Variation, Anti-Veresov",
    strategy:
      "Develops the bishop before ...e6 shuts it in and prepares ...Nc6 and ...e6, with " +
      "...Bxf3 available once the knight comes to f3. The bishop is easy to harass: 3.f3 Bf5 " +
      "4.e4 dxe4 5.fxe4 builds a broad centre with tempo, and 3.h3 Bh5 4.g4 Bg6 gains " +
      "kingside space. Playable, but Black spends time on the bishop.",
  },

  "1.d4 d5 2.Nc3 c5": {
    name: "Queen's Pawn Game: Chigorin Variation, Irish Gambit",
    strategy:
      "Strikes at d4 at once and offers the c-pawn. Taking with 3.dxc5 gives up the centre, " +
      "and Black aims to win the pawn back, ideally with ...Bxc5; 3.Bf4 cxd4 4.Qxd4 declines " +
      "with a slight edge for White, and 3.e4 answers with a counter-gambit. Viable, but a " +
      "rare and little-explored sideline.",
  },

  "1.d4 d5 2.Nc3 e5": {
    name: "Queen's Pawn Game: Chigorin Variation, Shaviliuk Gambit",
    strategy:
      "Offers the e-pawn to gain space with ...d4: after 3.dxe5 d4 the knight must move, and " +
      "on 4.Ne4 the reply 4...Qd5 attacks the knight and e5 together and wins the pawn back. " +
      "The gambit is rare, and its value is unclear.",
  },

  "1.d4 d5 2.Nc3 f5": {
    name: "Queen's Pawn Game: Veresov Attack, Dutch System",
    strategy:
      "Sets up a Stonewall structure, with the pawns on d5 and f5 holding e4. The price is a " +
      "weak e5-square and an open e8-h5 diagonal, and 3.e4 fxe4 4.Qh5+ g6 5.Qxd5 wins the " +
      "pawn back at once. Playable but rare and risky.",
  },

  "1.d4 d5 2.Nc3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but does nothing for d5 or e4. " +
      "White takes the centre with 3.e4 dxe4 4.Nxe4 and leads in development.",
  },

  "1.d4 d5 2.Nc3 Be6": {
    strategy:
      "Stands in front of the e-pawn, so neither ...e6 nor ...e5 can follow, and the " +
      "f8-bishop can only come out by way of ...g6. After 3.e4 dxe4 4.Nxe4 White has the " +
      "freer centre and more space.",
  },

  "1.d4 d5 2.Nc3 Qd7": {
    strategy:
      "Blocks the c8-bishop and takes d7 from the b8-knight, a queen move that develops " +
      "nothing and does nothing for the centre. After 3.e4 dxe4 4.Nxe4 White develops with " +
      "the better centre.",
  },

  "1.d4 d5 2.Nc3 Qd6": {
    strategy:
      "Brings the queen out early, where it is a target: 3.Nb5 hits it and c7, and 3.e4 dxe4 " +
      "4.Nxe4 attacks it with tempo, leaving White ahead in development.",
  },

  "1.d4 d5 2.Nc3 Nh6": {
    strategy:
      "Allows 3.Bxh6 gxh6, which doubles Black's h-pawns and breaks up the kingside, with " +
      "only the bishop pair in return.",
  },

  "1.d4 d5 2.Nc3 a6": {
    strategy:
      "Takes b5 from the knight but spends a tempo on a rim pawn without developing anything. " +
      "White takes the centre with 3.e4 dxe4 4.Nxe4 and leads in development.",
  },

  "1.d4 d5 2.Nc3 a5": {
    strategy:
      "Spends a tempo on a rim pawn and gives up control of b6, without helping the centre or " +
      "developing a piece. White takes the centre with 3.e4.",
  },

  "1.d4 d5 2.Nc3 b6": {
    strategy:
      "Prepares ...Bb7 but does nothing for d5, so White takes the centre with 3.e4. After " +
      "3...dxe4 4.Nxe4 Bb7 5.Bd3 the knight is well guarded, and White has more space and " +
      "easier development.",
  },

  "1.d4 d5 2.Nc3 f6": {
    strategy:
      "Prepares ...e5, but takes f6 from the g8-knight and opens the e8-h5 diagonal to the " +
      "black king. White answers 3.e4 and takes the centre with quicker development.",
  },

  "1.d4 d5 2.Nc3 g6": {
    strategy:
      "Prepares ...Bg7 but does nothing for d5, so White takes the centre with 3.e4. After " +
      "3...dxe4 4.Nxe4 White has the freer centre and quicker development.",
  },

  "1.d4 d5 2.Nc3 h6": {
    strategy:
      "Takes g5 from the c1-bishop but spends a tempo on a rim pawn, so White takes the " +
      "centre with 3.e4 and develops faster.",
  },

  "1.d4 d5 2.Nc3 h5": {
    name: "Queen's Pawn Game: Chigorin Variation, Shropshire Defence",
    strategy:
      "Spends a tempo on a rim pawn that develops nothing and does nothing for the centre, " +
      "and it gives up control of g6. White simply develops, for example with 3.e4 dxe4 " +
      "4.Nxe4.",
  },

  "1.d4 d5 2.Nc3 Nd7": {
    strategy:
      "Blocks the queen's defence of d5 as well as the c8-bishop, and nothing else guards the " +
      "pawn, so 3.Nxd5 wins it.",
  },

  "1.d4 d5 2.Nc3 Bd7": {
    strategy:
      "Blocks the queen's defence of d5, which has no other guard, so 3.Nxd5 wins a pawn. The " +
      "bishop also takes d7 from the b8-knight.",
  },

  "1.d4 d5 2.Nc3 Bh3": {
    strategy: "Hangs the bishop to 3.gxh3, with no compensation at all.",
  },

  "1.d4 d5 2.Nc3 Kd7": {
    strategy:
      "Gives up castling and blocks the queen's defence of d5, so 3.Nxd5 wins a pawn, and the " +
      "king on d7 also shuts in the c8-bishop.",
  },

  "1.d4 d5 2.Nc3 b5": {
    strategy:
      "Drops a pawn to 3.Nxb5. Black has nothing to regain it with: 3...Ba6 is met by 4.Nc3, " +
      "and White keeps the extra pawn.",
  },

  "1.d4 d5 2.Nc3 g5": {
    strategy: "Drops a pawn to 3.Bxg5 and weakens the whole kingside for nothing.",
  },
};
