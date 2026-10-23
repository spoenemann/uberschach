import type { OpeningTexts } from "../book.ts";

// English prose for Nf3-f5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.Nf3 f5 2.d4": {
    strategy:
      "Takes the centre and transposes to the Dutch Defence, the position of 1.d4 f5 2.Nf3, " +
      "where the knight already covers e5 and supports the d-pawn. White keeps the choice " +
      "between a g3 fianchetto, c4 with Nc3, or Bf4 and e3, while Black chooses ...e6 for the " +
      "Stonewall or Classical set-up or ...g6 for the Leningrad. The price is that Black gets " +
      "the Dutch structure he was aiming for.",
  },

  "1.Nf3 f5 2.g3": {
    strategy:
      "Prepares Bg2 and castling while the centre pawns stay flexible: d4 later transposes to " +
      "a fianchetto line of the Dutch, and c4, or d3 with a later e4, keeps the game " +
      "independent. The bishop on g2 stands behind the f3-knight at first and bears on e4 and " +
      "d5 once the knight moves. Black usually continues with ...Nf6 and either ...e6 or " +
      "...g6.",
  },

  "1.Nf3 f5 2.c4": {
    name: "English Opening: Anglo-Dutch Defence",
    strategy:
      "Controls d5 and prepares Nc3 and g3 with Bg2, so that White can reach the Dutch with " +
      "d4 later or play without d4 at all. Against a Stonewall with ...e6 and ...d5, the " +
      "c4-pawn already presses on d5. Black usually develops with ...Nf6 and then chooses " +
      "between ...e6 and ...g6.",
  },

  "1.Nf3 f5 2.e4": {
    name: "Zukertort Opening: Lisitsin Gambit",
    background:
      "Named after Georgy Lisitsin, who played it against Nikolai Riumin in the first round " +
      "of the 1931 USSR Championship in Moscow and against Mikhail Botvinnik at the Leningrad " +
      "Masters of 1933. Edward Winter gives earlier games with the same moves, the oldest " +
      "being Alfred Emil Wolf against Max Weiss, played in Vienna on 12 May 1923. The Oxford " +
      "Companion to Chess calls the gambit “enterprising and probably sound”.",
    strategy:
      "Offers the e-pawn to open lines against Black's loosened kingside. After 2...fxe4 " +
      "3.Ng5 White has moved the knight twice, but on g5 it attacks e4 and is hard to chase " +
      "away, and 4.d3 opens further lines. Black can decline with 2...e5, which transposes to " +
      "the Latvian Gambit.",
  },

  "1.Nf3 f5 2.b3": {
    name: "Nimzowitsch–Larsen Attack: Dutch Variation",
    strategy:
      "Prepares Bb2 to eye the long diagonal towards g7 and keeps c4, e3 and g3 available. It " +
      "is sound and flexible but slower than 2.d4, 2.g3 or 2.c4, and Black builds the usual " +
      "Dutch structure with ...Nf6 and ...e6 without being challenged.",
  },

  "1.Nf3 f5 2.d3": {
    strategy:
      "Prepares e4 a move later than the 2.e4 gambit, so that the d-pawn can recapture if " +
      "Black takes there, and frees the c1-bishop. It is sound but slow, and Black often " +
      "answers 2...d6 or develops with ...Nf6 and ...e6.",
  },

  "1.Nf3 f5 2.e3": {
    strategy:
      "Opens the f1-bishop for Be2 or Bd3 and supports a later d4, a solid set-up against the " +
      "Dutch. It is sound but passive: the e3-pawn closes the c1-bishop's kingside diagonal, " +
      "so that bishop usually needs b3 and Bb2, and Black develops freely with ...Nf6 and " +
      "...e6.",
  },

  "1.Nf3 f5 2.Nc3": {
    strategy:
      "Develops the second knight and watches e4 and d5, preparing d4 or e4 without " +
      "committing a pawn yet. After ...Nf6 and ...e6, White can follow with d4 and Bg5, " +
      "pinning the knight, to reach Dutch structures. It is sound, but it blocks the c-pawn, " +
      "and the plain 2.d4 reaches the same ideas with more choice.",
  },

  "1.Nf3 f5 2.a3": {
    strategy:
      "A waiting move that prepares b4 but does nothing about the centre or development. " +
      "Black develops freely with ...Nf6 and ...e6 while White has spent a tempo on a " +
      "rook-pawn move.",
  },

  "1.Nf3 f5 2.a4": {
    strategy:
      "A slow rook-pawn move that neither develops a piece nor fights for the centre. It " +
      "weakens b4 and gives Black time for ...Nf6, ...e6 and ...Be7 with a free hand.",
  },

  "1.Nf3 f5 2.b4": {
    strategy:
      "Grabs queenside space and prepares Bb2 on the long diagonal, but the b4-pawn needs a3 " +
      "or c3 against ...e6 and ...Bxb4, and the centre is left to Black. Little is gained for " +
      "the tempo and the queenside is stretched.",
  },

  "1.Nf3 f5 2.c3": {
    strategy:
      "A slow preparation for d4 that takes c3 from the b1-knight and does nothing to contest " +
      "e4. Black meets it with ...Nf6 and ...e6 and keeps e4 under control.",
  },

  "1.Nf3 f5 2.h3": {
    strategy:
      "Prepares g4 to undermine the f5-pawn, but the plan costs time and loosens the kingside " +
      "where White's king usually castles. Black simply develops with ...Nf6 and ...e6.",
  },

  "1.Nf3 f5 2.h4": {
    strategy:
      "Spends a tempo on a flank pawn that does nothing for the centre or development. It " +
      "weakens g4 and the kingside, and Black continues with ...Nf6 and ...e6 at leisure.",
  },

  "1.Nf3 f5 2.Na3": {
    strategy:
      "A rim knight that eyes c4 or b5 but covers nothing in the centre and shuts in the " +
      "a-pawn. Black develops naturally with ...Nf6 and ...e6.",
  },

  "1.Nf3 f5 2.Rg1": {
    strategy:
      "Prepares g4 against the f5-pawn, but White gives up the right to castle kingside and " +
      "spends a tempo on the rook instead of developing. Black simply continues with ...Nf6 " +
      "and ...e6.",
  },

  "1.Nf3 f5 2.Ng5": {
    strategy:
      "Moves the developed knight again and invites ...h6, or ...e5 opening the queen's " +
      "diagonal to g5, with a gain of time. The knight must soon return to f3 or go to the " +
      "rim on h3, while Black builds the centre.",
  },

  "1.Nf3 f5 2.Nh4": {
    strategy:
      "Attacks the undefended f5-pawn, but 2...e6 defends it and opens the queen's diagonal " +
      "to h4, so the knight must go back to f3 or be propped up with g3. Either way White has " +
      "spent extra moves on one piece while Black develops.",
  },

  "1.Nf3 f5 2.Ne5": {
    strategy:
      "Puts the knight on a central square, but 2...d6 drives it away with a gain of time. It " +
      "must retreat to f3, d3 or c4, a third move with the same piece, while Black develops.",
  },

  "1.Nf3 f5 2.Nd4": {
    strategy:
      "Attacks the undefended f5-pawn, but 2...e6 defends it at no cost, and the knight then " +
      "becomes a target for ...c5. White has used two moves on the same piece and Black gains " +
      "time.",
  },

  "1.Nf3 f5 2.Ng1": {
    strategy:
      "Retreats the knight to its start square and so undoes the first move. Black has ...f5 " +
      "for free and builds the centre at once with ...Nf6, ...e6 and ...d5 against an " +
      "undeveloped position.",
  },

  "1.Nf3 f5 2.g4": {
    strategy:
      "Offers a pawn, but 2...fxg4 attacks the f3-knight, which has to move, and White has no " +
      "lasting compensation for the pawn. The kingside is loosened for good and no new piece " +
      "comes into play.",
  },

  "1.Nf3 f5": {
    name: "Zukertort Opening: Dutch Variation",
    background:
      "1...f5 is the move of the Dutch Defence (1.d4 f5), which Elias Stein, an Alsatian who " +
      "settled in The Hague, recommended as the best reply to 1.d4 in his 1789 book Nouvel " +
      "essai sur le Jeu des échecs.",
  },
};
