import type { OpeningTexts } from "../book.ts";

// English prose for e4-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.e4 Nf6 2.e5": {
    strategy:
      "Attacks the knight and gains time: after 2...Nd5 3.d4 d6 White chooses between the " +
      "more modest 4.Nf3 and 4.c4 Nb6, which builds a broad centre and leads to 5.exd6 or the " +
      "Four Pawns Attack 5.f4. Black lets the pawns advance in order to undermine them, " +
      "typically with ...dxe5, ...g6 and ...Bg4. White gains space and time, but the advanced " +
      "centre needs constant support.",
  },

  "1.e4 Nf6 2.Nc3": {
    strategy:
      "Defends e4 with a developing move instead of chasing the knight. It is by far the most " +
      "common alternative to 2.e5 and can transpose into a Vienna Game or Four Knights Game " +
      "after 2...e5, or into a Pirc Defence after 2...d6. The independent test is 2...d5, " +
      "where White chooses between 3.exd5 Nxd5 and 3.e5. The price is the space White forgoes " +
      "by not playing 2.e5.",
  },

  "1.e4 Nf6 2.d3": {
    name: "Alekhine's Defence: Maróczy Variation",
    strategy:
      "Supports e4 with the d-pawn but shuts in the f1-bishop; if White fianchettoes it with " +
      "g3 and Bg2, the game is likely to become a King's Indian Attack. Black equalises with " +
      "2...d5, for instance 3.Nd2 e5, a Philidor Defence with colours reversed. Playable, but " +
      "passive.",
  },

  "1.e4 Nf6 2.Qe2": {
    strategy:
      "Defends e4 with the queen, so 2...Nxe4 3.Qxe4 would lose a piece. The queen blocks the " +
      "f1-bishop and delays kingside development, and Black reaches an equal game with " +
      "2...e5. Sound but passive, and not recommended.",
  },

  "1.e4 Nf6 2.Bd3": {
    strategy:
      "Protects e4 with the bishop, which stands in front of the d-pawn: while it stays on " +
      "d3, the d-pawn cannot move and the c1-bishop is shut in. Freeing them with c3 and Bc2 " +
      "costs time, and Black takes a share of the centre with 2...e5. Playable, but not " +
      "recommended.",
  },

  "1.e4 Nf6 2.c4": {
    strategy:
      "Gambits the e4-pawn for development: after 2...Nxe4 3.Nf3 White follows with d3 or Nc3 " +
      "against the knight, but the extra pawn is real and the compensation doubtful. Black " +
      "can also decline with 2...g6, when 3.Nc3 can transpose to a King's Indian Defence.",
  },

  "1.e4 Nf6 2.d4": {
    strategy:
      "Builds a pawn centre but leaves e4 unprotected, so 2...Nxe4 wins a pawn. White gets " +
      "some central space and a lead in development with Bd3 and Nf3, but no clear " +
      "compensation, and Black consolidates with ...d5.",
  },

  "1.e4 Nf6 2.f3": {
    strategy:
      "Supports e4 with the f-pawn, but takes the best square from the g1-knight and weakens " +
      "the e1-h4 diagonal and the white king. Black strikes at the centre with 2...d5 or " +
      "2...e5.",
  },

  "1.e4 Nf6 2.Qf3": {
    strategy:
      "Defends e4 with the queen, so 2...Nxe4 3.Qxe4 loses a piece, but it takes f3 from the " +
      "g1-knight and brings the queen out early. Black develops with 2...Nc6 or 2...e5 and " +
      "gains time against the exposed queen, for instance with ...Nd4.",
  },

  "1.e4 Nf6 2.Bc4": {
    name: "Alekhine's Defence: Krejcik Variation",
    strategy:
      "Develops the bishop towards f7 but gives up e4: after 2...Nxe4 3.Bxf7+ Kxf7 4.Qh5+ Kg8 " +
      "5.Qd5+ e6 6.Qxe4 d5 White has regained the piece, yet Black has the bishop pair and " +
      "gains central space with tempo. Black can also decline with 2...e5, 2...d5 or 2...e6.",
  },

  "1.e4 Nf6 2.Nf3": {
    name: "Alekhine's Defence: John Tracy Gambit",
    strategy:
      "Develops a piece but does not defend e4, so 2...Nxe4 wins the king's pawn. A lead in " +
      "development with d3 and Nc3 or Qe2 is doubtful compensation, and the line is regarded " +
      "as a poor choice.",
  },

  "1.e4 Nf6 2.a3": {
    strategy:
      "A slow rook-pawn move that ignores the attack on e4: 2...Nxe4 wins a pawn, and White " +
      "has nothing to show for it, neither development nor central control.",
  },

  "1.e4 Nf6 2.a4": {
    strategy:
      "Spends a tempo on the rook's pawn while e4 hangs: 2...Nxe4 wins a pawn, and the pawn " +
      "on a4 does nothing for development or the centre.",
  },

  "1.e4 Nf6 2.b3": {
    strategy:
      "Prepares Bb2 but leaves e4 hanging: after 2...Nxe4 3.Bb2 the bishop eyes g7, yet Black " +
      "simply plays ...d5 or ...Nf6 and keeps the extra pawn.",
  },

  "1.e4 Nf6 2.b4": {
    strategy:
      "Aims for Bb2 and space on the queenside but leaves e4 hanging: 2...Nxe4 wins a pawn, " +
      "and the wing advance offers no compensation.",
  },

  "1.e4 Nf6 2.c3": {
    strategy:
      "Prepares d4 but leaves e4 undefended: 2...Nxe4 wins a pawn, and the knight simply " +
      "retreats to f6 when White chases it with d3 or the queen.",
  },

  "1.e4 Nf6 2.f4": {
    strategy:
      "Leaves e4 hanging and weakens the e1-h4 diagonal and the white king: after 2...Nxe4 " +
      "Black is a clean pawn up, and the f-pawn has done nothing for White's development.",
  },

  "1.e4 Nf6 2.g3": {
    strategy:
      "Prepares Bg2 but leaves e4 hanging: after 2...Nxe4 3.Bg2 Black supports the knight " +
      "with ...d5 or retreats it to f6 and stays a pawn up.",
  },

  "1.e4 Nf6 2.g4": {
    strategy:
      "Weakens the kingside for no reason. The queen guards g4, so 2...Nxg4 3.Qxg4 would cost " +
      "Black a piece, but 2...Nxe4 simply wins the e-pawn while the g-pawn is overextended.",
  },

  "1.e4 Nf6 2.h3": {
    strategy:
      "A waiting move with no purpose: e4 hangs, so 2...Nxe4 wins a pawn, and the h-pawn move " +
      "helps neither development nor the centre.",
  },

  "1.e4 Nf6 2.h4": {
    strategy:
      "Gains kingside space but leaves e4 hanging: 2...Nxe4 wins a pawn, and the advanced " +
      "h-pawn becomes a weakness rather than an attack.",
  },

  "1.e4 Nf6 2.Na3": {
    strategy:
      "Puts the knight on the rim and leaves e4 hanging: 2...Nxe4 wins a pawn, and the knight " +
      "on a3 stands far from the centre.",
  },

  "1.e4 Nf6 2.Qg4": {
    strategy: "Puts the queen on a square the f6-knight attacks: 2...Nxg4 wins it for nothing.",
  },

  "1.e4 Nf6 2.Qh5": {
    strategy: "Puts the queen on a square the f6-knight attacks: 2...Nxh5 wins it outright.",
  },

  "1.e4 Nf6 2.Ke2": {
    strategy:
      "Leaves e4 hanging and takes the king into the centre: 2...Nxe4 wins a pawn, and White " +
      "can no longer castle.",
  },

  "1.e4 Nf6 2.Be2": {
    strategy:
      "Develops the bishop but leaves e4 undefended: 2...Nxe4 wins a pawn, and 3.Bf3 gains " +
      "nothing against a knight that ...d5 supports.",
  },

  "1.e4 Nf6 2.Bb5": {
    strategy:
      "Leaves e4 hanging: 2...Nxe4 wins a pawn, and the bishop on b5 hits only the " +
      "well-defended d7-pawn and is driven back by ...c6.",
  },

  "1.e4 Nf6 2.Ba6": {
    strategy: "Hangs the bishop: 2...Nxa6 or 2...bxa6 wins a piece for nothing.",
  },

  "1.e4 Nf6 2.Nh3": {
    strategy:
      "Puts the knight on the rim and ignores e4: 2...Nxe4 wins a pawn, and the knight on h3 " +
      "does little beyond eyeing f4 and g5.",
  },

  "1.e4 Nf6 2.Ne2": {
    strategy:
      "Does not defend e4 and blocks both the f1-bishop and the queen's diagonal: 2...Nxe4 " +
      "wins a pawn, and the knight is awkward on e2.",
  },

  "1.e4 Nf6": {
    name: "Alekhine's Defence",
    background:
      "Introduced by Alexander Alekhine at the Budapest tournament of 1921, in games against " +
      "Endre Steiner and Fritz Sämisch. The editors of the 1925 Modern Chess Openings called " +
      "it a “bizarre defence”, and Bobby Fischer used it twice against Boris Spassky in the " +
      "1972 World Championship match.",
  },

  "1.e4 Nf6 2.Nc3 e5": {
    strategy:
      "Takes the centre and keeps the knight on f6 aimed at e4, transposing into the Vienna " +
      "Game. Against 3.f4 Black strikes back with ...d5 and after 4.fxe5 Nxe4 has active " +
      "pieces; against 3.Bc4 the answer is 3...Nxe4 4.Qh5 Nd6, and 3.Nf3 Nc6 reaches the Four " +
      "Knights. The price is sharp theory in the gambit lines, and an early ...exf4 invites " +
      "e5, which drives the knight back.",
  },

  "1.e4 Nf6 2.Nc3 d6": {
    strategy:
      "Guards e5, so that 3.e5 simply loses a pawn to 3...dxe5, and steers towards a Pirc " +
      "set-up with ...g6, ...Bg7 and ...O-O. White can build a broad centre with d4 and f4, " +
      "or develop quietly with Nf3 and Be2, and Black later strikes back with ...c5 or ...e5. " +
      "The cost is some passivity: the centre belongs to White at first and Black must prove " +
      "it overextended.",
  },

  "1.e4 Nf6 2.Nc3 Nc6": {
    strategy:
      "Develops the knight and keeps ...e5 in reserve: 3.Nf3 e5 is a Four Knights Game, and " +
      "3.d4 leads to the Nimzowitsch Defence. The advance 3.e5 is no threat here, since the " +
      "pawn is undefended and 3...Nxe5 takes it. After 3.d4 d5 4.e5, however, the knight on " +
      "c6 blocks the c-pawn, so Black lacks the usual ...c5 break against the pawn chain.",
  },

  "1.e4 Nf6 2.Nc3 c6": {
    strategy:
      "Prepares ...d5 with a Caro-Kann set-up, and 3.d4 d5 4.e5 is met by ...Ne4 or ...Nfd7. " +
      "With the knight already on f6, however, 3.e5 Nd5 4.Nxd5 cxd5 5.d4 gives White the " +
      "space of an advanced centre, and Black must undermine e5 with ...d6 and ...Nc6. Sound, " +
      "but it concedes more than ...d5 would.",
  },

  "1.e4 Nf6 2.Nc3 d5": {
    name: "Alekhine's Defence: Scandinavian Variation",
    background:
      "This is the independent Alekhine line after 2.Nc3. Jonny Hector, who regularly plays " +
      "2.Nc3 against the Alekhine, has scored well against it, and his ideas have left White " +
      "with a theoretical edge, so textbook authors including Davies, Cox and Taylor have " +
      "encouraged 2...e5 instead.",
    strategy:
      "Attacks e4 a second time, and White usually answers by exchanging on d5 or advancing " +
      "to e5. After 3.exd5 Nxd5 4.Bc4 both ...Nb6 and ...Nxc3 give roughly equal play, while " +
      "3.e5 gains space and 3...Nfd7 4.d4 e6 transposes into the Steinitz Variation of the " +
      "French Defence. White chooses the structure, so the move is sound but not Black's most " +
      "comfortable reply.",
  },

  "1.e4 Nf6 2.Nc3 e6": {
    strategy:
      "Prepares ...d5, and 3.d4 d5 reaches the Classical Variation of the French Defence. " +
      "White can instead play 3.e5 Nd5, the Two Knights Variation of the Alekhine with ...e6 " +
      "already played: 4.Nxd5 exd5 lets Black dissolve the doubled pawns with ...d6 in a " +
      "position that tends to be drawish, while 4.d4 Nxc3 5.bxc3 gives a structure " +
      "reminiscent of the French. Sound, but White chooses which of these structures Black " +
      "gets.",
  },

  "1.e4 Nf6 2.Nc3 g6": {
    strategy:
      "Prepares ...Bg7 and ...d6, and 3.d4 d6 transposes into a Pirc Defence. Against 3.e5 " +
      "the knight goes to h5, defended by the g6-pawn, but it stands on the rim and White " +
      "gains space with d4 or g4. Sound, though it gives White more options than ...d6 does.",
  },

  "1.e4 Nf6 2.Nc3 Na6": {
    strategy:
      "Heads for b4 or c5 from the rim, but the knight stands badly there and does nothing " +
      "about 3.e5, which sends the knight on f6 back to g8 with a gain of time for White.",
  },

  "1.e4 Nf6 2.Nc3 a6": {
    strategy:
      "Prepares ...b5 but ignores the knight on f6, which 3.e5 sends back to g8 with a gain " +
      "of time. White then takes the centre with d4 while Black is still undeveloped.",
  },

  "1.e4 Nf6 2.Nc3 a5": {
    strategy:
      "Spends a tempo on a rook pawn and weakens b5, while 3.e5 drives the knight back to g8 " +
      "and leaves White free to build a broad centre.",
  },

  "1.e4 Nf6 2.Nc3 b6": {
    strategy:
      "Prepares ...Bb7 against e4, but 3.e5 hits the knight first, which can only retreat to " +
      "g8. Black has then lost two tempi and White follows with d4.",
  },

  "1.e4 Nf6 2.Nc3 c5": {
    strategy:
      "Strikes at d4, but 3.e5 forces the knight to g8, the only safe square: Nd5 loses to " +
      "Nxd5, Ne4 to Nxe4, Ng4 to Qxg4 and Nh5 to Qxh5. Black has spent two tempi and White " +
      "has gained space.",
  },

  "1.e4 Nf6 2.Nc3 h6": {
    strategy:
      "Takes g5 from the bishop but is a slow waiting move. After 3.e5 the knight must go to " +
      "h7 or g8, and White gains space and tempo.",
  },

  "1.e4 Nf6 2.Nc3 h5": {
    strategy:
      "Prepares ...Ng4 and supports it, but wastes a tempo and weakens g5 and g6. After 3.e5 " +
      "Ng4 4.d4 d6 5.h3 the knight must retreat to h6, and White keeps the extra space.",
  },

  "1.e4 Nf6 2.Nc3 Ng8": {
    strategy:
      "Retreats the knight at once, undoing the developing move and giving White two free " +
      "tempi to build a pawn centre with d4 and Nf3.",
  },

  "1.e4 Nf6 2.Nc3 Rg8": {
    strategy:
      "Takes away the only retreat of the f6-knight: after 3.e5 it has no safe square, " +
      "because Nd5, Ne4, Ng4 and Nh5 meet Nxd5, Nxe4, Qxg4 and Qxh5. The rook move also gives " +
      "up castling kingside.",
  },

  "1.e4 Nf6 2.Nc3 b5": {
    strategy:
      "Leaves the pawn unprotected: 3.Bxb5 wins it and keeps e4 covered by the knight, so " +
      "3...Nxe4 fails to 4.Nxe4. Black has no compensation for the pawn.",
  },

  "1.e4 Nf6 2.Nc3 g5": {
    strategy:
      "Weakens f5 and h5 and leaves the g5-pawn undefended: once d4 is played the c1-bishop " +
      "attacks it, and 3.e5 drives the knight back to g8 with tempo. Black must spend further " +
      "moves on the pawn and falls far behind in development.",
  },

  "1.e4 Nf6 2.Nc3 Ng4": {
    strategy:
      "Loses the knight to 3.Qxg4: nothing defends g4, because the bishop on c8 is blocked by " +
      "the d7-pawn.",
  },

  "1.e4 Nf6 2.Nc3 Nh5": {
    strategy: "Loses the knight to 3.Qxh5, as nothing defends the h5-square.",
  },

  "1.e4 Nf6 2.Nc3 Nxe4": {
    strategy:
      "Gives up a knight for a pawn: 3.Nxe4 wins the piece, and 3...d5 only forces the knight " +
      "to retreat to g3 or c3, leaving Black with no compensation.",
  },

  "1.e4 Nf6 2.Nc3 Nd5": {
    strategy: "Hangs the knight: 3.Nxd5 wins it, because the d7-pawn blocks the queen's way to d5.",
  },

  "1.e4 Nf6 2.e5 Nd5": {
    strategy:
      "Moves the attacked knight to the centre and invites White to chase it with c4 and to " +
      "build a broad pawn centre with d4. Black then strikes at the e5-pawn with ...d6, " +
      "retreats the knight to b6 when c4 attacks it, and develops with ...Bg4 or ...Bf5, or " +
      "with ...g6 and ...Bg7 aimed at the centre. The price is lost time and space; the aim " +
      "is to make White's pawns targets instead of strengths.",
  },

  "1.e4 Nf6 2.e5 Ng8": {
    name: "Alekhine's Defence: Brooklyn Defence",
    background:
      "Named by Joel Benjamin after his hometown, Brooklyn; he calls it his pet line. The " +
      "first recorded game with 2...Ng8 is Nimzowitsch–Albin, Vienna 1905, which Nimzowitsch " +
      "won as White.",
    strategy:
      "Retreats the knight to its starting square, then strikes at e5 with ...d6 or builds a " +
      "French-like pawn chain with ...e6 and ...d5 before breaking with ...c5. The two knight " +
      "moves cost Black time, so White develops freely with d4 and Nf3 and keeps extra space. " +
      "Theory gives White only a small edge, for example after 3.d4 d6 4.Nf3 Bg4 5.h3.",
  },

  "1.e4 Nf6 2.e5 Ne4": {
    name: "Alekhine's Defence: Mokele Mbembe",
    background:
      "John L. Watson and Eric Schiller call the move the “Mokele Mbembe” and, in The Big " +
      "Book of Busts (1995), analyse it to a winning advantage for White. Nunn's Chess " +
      "Openings (1999) concludes that White gets a large advantage.",
    strategy:
      "After 3.d4 the knight on e4 has no safe square, so Black must spend more moves " +
      "propping it up or freeing a retreat. The natural 3...f6 also opens the e8-h5 diagonal, " +
      "and 4.Qh5+ g6 5.Qh4 attacks the knight again while White leads in development.",
  },

  "1.e4 Nf6 2.e5 Ng4": {
    strategy:
      "Hangs the knight: 3.Qxg4 wins it, because the bishop on c8 is blocked by the d7-pawn " +
      "and no other black piece guards g4.",
  },

  "1.e4 Nf6 2.e5 Nh5": {
    strategy:
      "Sends the knight to the rim, where 3.Qxh5 simply wins it: the h7-pawn blocks the rook " +
      "and nothing else guards h5.",
  },

  "1.e4 Nf6 2.e5 Nc6": {
    strategy:
      "Hopes to take on e5 with the knight but ignores the attack on f6. After 3.exf6 the " +
      "target is gone and White has won a knight for a pawn.",
  },

  "1.e4 Nf6 2.e5 Na6": {
    strategy:
      "Develops to the rim without answering the attack on f6. 3.exf6 wins the knight for a " +
      "pawn, and the a6-knight is badly placed anyway.",
  },

  "1.e4 Nf6 2.e5 Rg8": {
    strategy:
      "A pointless rook move that leaves the f6-knight to its fate. 3.exf6 wins a piece for a " +
      "pawn, and Black has also given up the right to castle kingside.",
  },

  "1.e4 Nf6 2.e5 a6": {
    strategy:
      "A waiting move that ignores the attack on the f6-knight. 3.exf6 wins a piece for a " +
      "pawn.",
  },

  "1.e4 Nf6 2.e5 a5": {
    strategy:
      "Gains queenside space but leaves the f6-knight en prise. After 3.exf6 exf6 Black is a " +
      "piece down for a single pawn.",
  },

  "1.e4 Nf6 2.e5 b6": {
    strategy:
      "Prepares ...Bb7 and the long diagonal, but the f6-knight is still attacked. White wins " +
      "a piece for a pawn with 3.exf6.",
  },

  "1.e4 Nf6 2.e5 b5": {
    strategy:
      "Overextends the queenside and ignores the attack on f6. 3.exf6 wins a knight for a " +
      "pawn, and the b5-pawn is also loose to Bxb5.",
  },

  "1.e4 Nf6 2.e5 c6": {
    strategy:
      "Prepares ...d5 as in the Caro-Kann, but the knight on f6 is still attacked. After " +
      "3.exf6 exf6 Black has a pawn for a piece.",
  },

  "1.e4 Nf6 2.e5 c5": {
    strategy:
      "A Sicilian-style counter in the centre that is far too slow. 3.exf6 wins the knight " +
      "for a pawn before the c-pawn matters.",
  },

  "1.e4 Nf6 2.e5 d6": {
    strategy:
      "Challenges the e5-pawn, but White takes the knight first: 3.exf6 exf6 leaves Black a " +
      "piece down for a pawn.",
  },

  "1.e4 Nf6 2.e5 d5": {
    strategy:
      "Claims the centre as in a French set-up, but the f6-knight is still attacked. 3.exf6 " +
      "wins a piece, and ...exf6 only returns a pawn.",
  },

  "1.e4 Nf6 2.e5 e6": {
    strategy:
      "Opens the queen's diagonal so that ...Qxf6 can recapture, but that returns only a " +
      "pawn. After 3.exf6 Qxf6 White has won a knight for a pawn.",
  },

  "1.e4 Nf6 2.e5 g6": {
    strategy:
      "Prepares a fianchetto but overlooks the attack on f6. 3.exf6 exf6 leaves White a " +
      "knight up for a pawn.",
  },

  "1.e4 Nf6 2.e5 g5": {
    strategy:
      "Weakens the kingside for no reason and leaves the knight attacked. 3.exf6 wins a " +
      "piece, with only a pawn returned by ...exf6.",
  },

  "1.e4 Nf6 2.e5 h6": {
    strategy:
      "Stops Bg5 but not the capture on f6. 3.exf6 wins a piece for a pawn and the h-pawn " +
      "move is wasted.",
  },

  "1.e4 Nf6 2.e5 h5": {
    strategy:
      "A rim-pawn push that neither moves nor defends the attacked knight. 3.exf6 wins it for " +
      "a pawn.",
  },
};
