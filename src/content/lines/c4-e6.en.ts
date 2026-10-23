import type { OpeningTexts } from "../book.ts";

// English prose for c4-e6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.c4 e6 2.Nf3": {
    strategy:
      "Develops the king's knight and guards d4 and e5 without committing a pawn. After " +
      "2...d5 White can enter the Queen's Gambit Declined with 3.d4 or the Neo-Catalan set-up " +
      "with 3.g3 Nf6 4.Bg2, while 2...Nf6 leads to Anglo-Indian lines. Black still chooses " +
      "the structure with 2...d5, 2...c5 or 2...Nf6.",
  },

  "1.c4 e6 2.Nc3": {
    strategy:
      "Develops the queen's knight toward the centre, adds control of d5 and e4 and keeps d4, " +
      "e4 and g3 all available. After 2...d5 White can reach a Queen's Gambit Declined with " +
      "3.d4 or its Exchange structure with 3.cxd5 exd5 4.d4, while 2...Nf6 leads to " +
      "Anglo-Indian set-ups. Black can also play 2...Bb4, ready to take on c3 and double " +
      "White's c-pawns.",
  },

  "1.c4 e6 2.d4": {
    strategy:
      "Occupies the centre at once: together with the c4-pawn, the d4-pawn controls c5, d5 " +
      "and e5. After 2...d5 the game is a Queen's Gambit Declined, and 2...Nf6 heads for the " +
      "Nimzo-Indian, Queen's Indian or Bogo-Indian. Black can also choose the Dutch with " +
      "2...f5, the English Defence with 2...b6 or the Keres Defence with 2...Bb4+, usually " +
      "met by 3.Bd2.",
  },

  "1.c4 e6 2.g3": {
    strategy:
      "Prepares Bg2, which presses on d5 and b7 along the long diagonal. After 2...d5 3.Bg2 " +
      "Nf6 4.Nf3 the game reaches the Neo-Catalan, and a later d4 turns it into a Catalan; " +
      "Nc3 also stays available. The kingside comes first, though: 2...d5 attacks the " +
      "undefended c4-pawn at once, and Black can also strike with 2...c5.",
  },

  "1.c4 e6 2.e4": {
    strategy:
      "Takes the centre with the c- and e-pawns and transposes to a French Defence in which " +
      "White has played c4 instead of d4. The reply 2...d5 attacks both pawns, and after " +
      "3.exd5 exd5 4.cxd5 Qxd5 5.Nc3 White gains time on the queen but is left with an " +
      "isolated d2-pawn. Sound, but it gives up the English character of the opening.",
  },

  "1.c4 e6 2.b3": {
    strategy:
      "Prepares Bb2 on the long diagonal toward g7 and protects the c4-pawn against 2...d5. " +
      "Nf3, e3 or g3 can follow in a flexible set-up, while Black develops freely with ...d5, " +
      "...Nf6 and ...Be7 or ...c5. Sound, but slower than 2.Nf3 or 2.Nc3.",
  },

  "1.c4 e6 2.d3": {
    strategy:
      "Protects the c4-pawn, supports a later e4 and frees the c1-bishop, preparing a set-up " +
      "with Nc3, g3, Bg2 and e4. The pawn on d3 is modest, though: it takes no part in the " +
      "fight for d5 or d4, and Black takes space with 2...d5 or develops freely with ...Nf6 " +
      "and ...c5. Sound, but more passive than 2.d4.",
  },

  "1.c4 e6 2.e3": {
    strategy:
      "Opens the f1-bishop's diagonal, which also guards c4, and prepares Nc3, Nf3 and d4 in " +
      "a compact set-up that can transpose to a quiet Queen's Gambit Declined. It shuts in " +
      "the c1-bishop until b3 and Bb2, and after 2...d5 3.cxd5 exd5 Black's c8-bishop is free " +
      "and the game is easy for Black. Sound but passive.",
  },

  "1.c4 e6 2.a3": {
    strategy:
      "Stops ...Bb4 and prepares b4, but it develops nothing and spends a tempo. Black takes " +
      "the centre with ...d5 and ...Nf6 while White's pieces are still at home.",
  },

  "1.c4 e6 2.a4": {
    strategy:
      "Gains a little queenside space but leaves b4 as a permanent hole, since neither the a- " +
      "nor the c-pawn can guard it any more. It develops nothing, and Black takes the centre " +
      "with ...d5 and ...Nf6.",
  },

  "1.c4 e6 2.f4": {
    strategy:
      "Takes e5 but develops no piece and opens the e1-h4 diagonal, so 2...Qh4+ forces 3.g3 " +
      "at once. White's kingside is loosened before any piece is out, and Black continues " +
      "freely with ...d5 or ...Nf6.",
  },

  "1.c4 e6 2.g4": {
    strategy:
      "Gains kingside space but leaves the pawn loose: 2...Qh4 attacks it at once and pins " +
      "the f2-pawn, so White must spend another move such as 3.h3 to keep it. The kingside is " +
      "loosened before a single piece has developed.",
  },

  "1.c4 e6 2.h3": {
    strategy:
      "A waiting move that does nothing for the centre or development. Black plays ...d5 and " +
      "...Nf6 while White's pieces are still at home.",
  },

  "1.c4 e6 2.h4": {
    strategy:
      "A flank thrust that does nothing for the centre or development and loosens the " +
      "kingside without a target. White has lost a tempo, and Black replies ...d5 with an " +
      "easy game.",
  },

  "1.c4 e6 2.Na3": {
    strategy:
      "Guards c4 from the rim and heads for c2 or b5, but the knight stands far from the " +
      "centre. Black can play ...d5 at once, or take with 2...Bxa3 3.bxa3, doubling and " +
      "isolating White's a-pawns at the cost of the bishop pair.",
  },

  "1.c4 e6 2.Nh3": {
    strategy:
      "A rim knight heading for f4, which leaves the natural f3-square unused. After 2...d5 " +
      "3.cxd5 exd5 the c8-bishop eyes h3, and ...Bxh3 gxh3 would leave White with doubled, " +
      "isolated h-pawns.",
  },

  "1.c4 e6 2.Qc2": {
    strategy:
      "Guards c4 and supports e4, but brings the queen out before the minor pieces. Black " +
      "takes the centre with ...d5 or gains time with ...Nc6 and ...Nb4, and White has little " +
      "to show for the early queen.",
  },

  "1.c4 e6 2.Qb3": {
    strategy:
      "Eyes b7, which the c8-bishop already guards, so there is no threat. Black develops " +
      "with ...Nc6 or takes space with ...d5, while the early queen has no good follow-up.",
  },

  "1.c4 e6 2.Qa4": {
    strategy:
      "Brings the queen out to the a4-e8 diagonal, where it threatens nothing because d7 is " +
      "guarded. Black develops with ...Nf6 and ...Nc6 and follows with ...d5, with the queen " +
      "offside on a4.",
  },

  "1.c4 e6 2.b4": {
    strategy:
      "Leaves the pawn undefended on the open f8-a3 diagonal, and 2...Bxb4 wins it at once. " +
      "White gets only the half-open b-file and a quick Bb2 in return.",
  },

  "1.c4 e6 2.f3": {
    strategy:
      "Opens the e1-h4 diagonal and loses a pawn: 2...Qh4+ forces 3.g3, since the king can go " +
      "neither to d2 nor to f2, and 3...Qxc4 takes the undefended c-pawn. The move also takes " +
      "f3 from the g1-knight.",
  },

  "1.c4 e6 2.c5": {
    strategy:
      "Gains space but leaves the pawn undefended: 2...Bxc5 wins it at once, since ...e6 has " +
      "opened the f8-bishop's diagonal. 3.d4 gains a tempo on the bishop, but White is simply " +
      "a pawn down.",
  },

  "1.c4 e6": {
    name: "English Opening: Agincourt Defence",
  },
};
