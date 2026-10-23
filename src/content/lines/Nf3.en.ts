import type { OpeningTexts } from "../book.ts";

// English prose for Nf3.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.Nf3 Nf6": {
    strategy:
      "Develops a piece and controls e4 and d5 without committing a pawn, so Black can choose " +
      "the structure after seeing White's plan. White may continue 2.c4, 2.g3 or 2.d4, and " +
      "Black answers with ...g6, ...e6 or ...d5 into English, Réti or Indian positions. The " +
      "knight also keeps 2.e4 off the board, since the pawn would simply be lost to ...Nxe4. " +
      "The cost is that Black must know several of these structures.",
  },

  "1.Nf3 d5": {
    background:
      "The usual reply in the 1920s, when Richard Réti began many of his games with 1.Nf3; " +
      "against it he played 2.c4, the move order now named after him.",
    strategy:
      "Claims the centre at once and turns 2.e4 into a gambit, since ...dxe4 takes the pawn. " +
      "White usually answers with 2.d4, 2.g3 or 2.c4, and Black builds with ...Nf6, ...e6 and " +
      "...c5 or ...c6, reaching Queen's Gambit, King's Indian Attack or Réti structures. " +
      "Against 2.c4, which strikes at the d5-pawn, Black chooses between holding it with " +
      "...c6 or ...e6, pushing on with ...d4 and taking on c4.",
  },

  "1.Nf3 c5": {
    name: "Zukertort Opening: Sicilian Invitation",
    strategy:
      "Fights for d4 at once: after 2.d4 cxd4 3.Nxd4 Black has traded a flank pawn for a " +
      "centre pawn. The move keeps two main roads open, 2.c4 into a symmetrical English and " +
      "2.e4 into a Sicilian after ...d6, ...Nc6 or ...e6. It therefore suits a player who " +
      "already answers 1.e4 with 1...c5, since White decides which of the two it becomes.",
  },

  "1.Nf3 e6": {
    name: "Zukertort Opening: Queen's Gambit Invitation",
    strategy:
      "Opens the f8-bishop and prepares ...d5 while keeping the king's knight and the c-pawn " +
      "uncommitted. Black can follow with ...d5 and ...Nf6 for Queen's Gambit Declined " +
      "structures, with ...Nf6 and ...b6 for Queen's Indian ones, or meet 2.e4 with ...d5 for " +
      "a French. The cost is that White picks the type of game, and after ...d5 the c8-bishop " +
      "stays hemmed in behind the e6-pawn.",
  },

  "1.Nf3 g6": {
    name: "Zukertort Opening: Kingside Fianchetto",
    strategy:
      "Prepares ...Bg7 and leaves the centre for later, aiming at King's Indian or Modern " +
      "Defence structures after 2.d4 Bg7 or 2.e4 Bg7 3.d4. The fianchettoed bishop presses on " +
      "White's centre from a distance, and Black counterattacks with ...d6 and ...e5 or with " +
      "...c5. White gains space with e4 and d4, so Black must be ready to hit the centre.",
  },

  "1.Nf3 f5": {
    name: "Zukertort Opening: Dutch Variation",
    background:
      "1...f5 is the move of the Dutch Defence (1.d4 f5), which Elias Stein, an Alsatian who " +
      "settled in The Hague, recommended as the best reply to 1.d4 in his 1789 book Nouvel " +
      "essai sur le Jeu des échecs.",
    strategy:
      "Takes control of e4 and aims for the setups Black uses against 1.d4 f5, with ...Nf6 " +
      "followed by ...e6 or ...g6. White can steer into them with 2.d4 or 2.g3, or reply with " +
      "the gambit 2.e4 fxe4 3.Ng5, which attacks the e4-pawn and exploits the loosened " +
      "e6-square. Sound and established, but sharper and more committal than ...Nf6 or ...d5.",
  },

  "1.Nf3 c6": {
    name: "Zukertort Opening: Slav Invitation",
    strategy:
      "Prepares ...d5 with the pawn supported, aiming at Slav or Caro-Kann structures. It is " +
      "solid but more passive than the main replies, because the c-pawn move does not develop " +
      "a piece and White can choose freely between 2.d4, 2.c4 and 2.e4.",
  },

  "1.Nf3 d6": {
    name: "Zukertort Opening: Pirc Invitation",
    strategy:
      "Keeps the centre flexible and waits for White to commit before choosing a Pirc, " +
      "Philidor or Old Indian setup. Sound, but it gives White a free hand: 2.e4 or 2.d4 " +
      "builds a broad pawn centre, while the d6-pawn only watches e5 and c5.",
  },

  "1.Nf3 b6": {
    name: "Zukertort Opening: Queenside Fianchetto Variation",
    strategy:
      "Prepares the fianchetto ...Bb7, which presses on e4 along the long diagonal, with " +
      "...e6 and ...Nf6 to follow. The setup is sound but slow: White can take the centre at " +
      "once with d4 and e4, and Black has to attack the pawns afterwards.",
  },

  "1.Nf3 Nc6": {
    name: "Zukertort Opening: Black Mustang Defence",
    strategy:
      "Develops a knight and watches e5 and d4, so ...e5 and ...d5 both stay possible. The " +
      "knight blocks the c-pawn and commits itself before White shows a plan: 2.e4 e5 steers " +
      "into open games, 2.d4 d5 3.c4 into a Chigorin-style Queen's Gambit structure. Sound " +
      "enough, but Black gains nothing over the main replies.",
  },

  "1.Nf3 a6": {
    name: "Zukertort Opening: St. George Defence",
    background:
      "1...a6 is the move of the St. George Defence against 1.e4, on which the English IM " +
      "Michael Basman did much of the theoretical work and with which Tony Miles beat the " +
      "reigning world champion Anatoly Karpov at the 1980 European Team Championship in " +
      "Skara.",
    strategy:
      "Prepares ...b5 and ...Bb7, but spends a tempo on a rim pawn while White takes the " +
      "centre with d4 and e4. Nothing in the position makes the move urgent, so Black falls " +
      "behind in space and development.",
  },

  "1.Nf3 a5": {
    name: "Zukertort Opening: Ware Defence",
    strategy:
      "Gains a little space on the queenside but does nothing for the centre or development, " +
      "and leaves b6 and b5 without the a-pawn's protection. White builds a centre with d4 " +
      "and e4 and keeps the extra tempo.",
  },

  "1.Nf3 b5": {
    name: "Zukertort Opening: Polish Defence",
    strategy:
      "Claims queenside space and prepares ...Bb7, but the pawn on b5 needs constant " +
      "protection and the c6-square is weakened. White gains time against it with e4, which " +
      "opens the f1-bishop's diagonal to b5, or with a4.",
  },

  "1.Nf3 Na6": {
    strategy:
      "Heads for b4 or c5, but the knight on the rim covers no central square and blocks the " +
      "a-pawn. White takes space with d4 and e4 and keeps the initiative.",
  },

  "1.Nf3 Nh6": {
    strategy:
      "Eyes f5, but the knight on the rim covers no central square, and after 2.d4 the " +
      "c1-bishop can take it, doubling Black's h-pawns. Black loses time and White gets the " +
      "centre without a fight.",
  },

  "1.Nf3 f6": {
    name: "Zukertort Opening: Arctic Defence",
    strategy:
      "Prepares ...e5, but takes the g8-knight's best square and loosens e6 and the e8–h5 " +
      "diagonal. After 2.e4 e5 3.Nxe5, taking the knight with 3...fxe5? runs into 4.Qh5+ and " +
      "a decisive attack.",
  },

  "1.Nf3 h6": {
    name: "Zukertort Opening: Basman Defence",
    strategy:
      "Prepares ...g5 and ...g4 against the knight on f3, but loses a tempo and loosens the " +
      "kingside. White builds a centre with d4 and e4 while Black's flank play achieves " +
      "little.",
  },

  "1.Nf3 h5": {
    strategy:
      "Spends a tempo on a flank pawn and gives up control of g5, where White's knight can " +
      "settle because ...h6 is no longer possible. It does nothing for the centre or " +
      "development.",
  },

  "1.Nf3 e5": {
    name: "Zukertort Opening: Ross Gambit",
    strategy:
      "Walks into 2.Nxe5, which wins the unprotected pawn. After 2...Nc6 3.Nxc6 dxc6 Black " +
      "has open lines and quick development, but not enough for the pawn.",
  },

  "1.Nf3 g5": {
    name: "Zukertort Opening: Herrstrom Gambit",
    strategy:
      "Offers the g-pawn for nothing: 2.Nxg5 wins it, and 2...e5, which uncovers the queen's " +
      "attack on the knight, only drives it back while White keeps the extra pawn and Black's " +
      "kingside stays weakened.",
  },

  "1.Nf3": {
    name: "Zukertort Opening",
    background:
      "Named after Johannes Zukertort. Most sources call only 1.Nf3 d5 2.c4 the Réti Opening, " +
      "the line with which Richard Réti beat the reigning world champion Capablanca at New " +
      "York 1924. Réti championed the hypermodern school of the 1920s, which controlled the " +
      "centre from a distance rather than occupying it with pawns.",
  },
};
