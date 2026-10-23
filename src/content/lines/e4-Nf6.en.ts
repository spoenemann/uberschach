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
};
