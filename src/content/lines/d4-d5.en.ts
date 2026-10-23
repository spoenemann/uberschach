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
};
