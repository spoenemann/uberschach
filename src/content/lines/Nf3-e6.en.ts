import type { OpeningTexts } from "../book.ts";

// English prose for Nf3-e6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.Nf3 e6 2.c4": {
    name: "English Opening: Agincourt Defence",
    background:
      "The same position arises from 1.c4 e6 2.Nf3, one of White's two usual replies to " +
      "1...e6 in the English Opening. Black intends a supported ...d5, comparable to the " +
      "French Defence, and the game often transposes to other lines, most commonly the " +
      "Queen's Gambit Declined or the Catalan Opening.",
    strategy:
      "Puts a pawn on c4 that presses on d5 while the d-pawn waits. After 2...d5, 3.d4 " +
      "transposes to the Queen's Gambit Declined, 3.g3 with Bg2 leads to the Neo-Catalan, and " +
      "3.b3 to a Réti set-up. Black can also do without ...d5 and play ...Nf6 with ...b6 or " +
      "...Bb4, or strike with ...c5. The pawn occupies no central square yet, so Black keeps " +
      "the choice of structure.",
  },

  "1.Nf3 e6 2.d4": {
    strategy:
      "Takes the centre and opens the c1-bishop. After 2...d5 White chooses 3.c4 for the " +
      "Queen's Gambit Declined, Bf4 for the London System or e3 for a Colle set-up; 2...Nf6 " +
      "3.c4 b6 leads into the Queen's Indian Defence and 2...f5 into the Dutch Defence. Black " +
      "can also challenge the d4-pawn at once with 2...c5.",
  },

  "1.Nf3 e6 2.g3": {
    strategy:
      "Prepares Bg2 and short castling. After 2...d5 3.Bg2 Nf6 4.O-O White can build a King's " +
      "Indian Attack with d3, Nbd2 and e4, or add c4 and d4 for a Catalan. Black takes space " +
      "with ...d5 and ...c5, and the g2-bishop bites on the d5-pawn until White challenges it " +
      "with c4 or e4.",
  },

  "1.Nf3 e6 2.b3": {
    name: "Nimzowitsch–Larsen Attack",
    background:
      "The opening is often reached by transposition, particularly with 1.Nf3 followed by " +
      "2.b3, as here. Aron Nimzowitsch experimented with 1.b3 in the 1920s and 1930s but more " +
      "commonly used the order 1.Nf3 d5 2.b3; Bent Larsen played 1.b3 frequently between 1968 " +
      "and 1972.",
    strategy:
      "Prepares Bb2, which aims along the long diagonal at e5 and f6, while c4, d3 and e3 " +
      "stay in reserve. After 2...d5 3.Bb2 Nf6 4.e3 Be7 White has a solid position and Black " +
      "more central space. Theory rates many such lines as only equal, so the set-up's value " +
      "is practical rather than objective.",
  },

  "1.Nf3 e6 2.e4": {
    strategy:
      "Takes the centre at once and transposes to the Knight Variation of the French Defence. " +
      "After 2...d5, 3.exd5 exd5 4.d4 leads into the Exchange Variation, and 2...c5 3.d4 cxd4 " +
      "4.Nxd4 gives an open Sicilian with ...e6. Sound, but Black chooses which of the two " +
      "defences the game becomes.",
  },

  "1.Nf3 e6 2.e3": {
    strategy:
      "Opens the f1-bishop and prepares d4 in a Colle-style set-up with Bd3, O-O and Nbd2, or " +
      "a queenside fianchetto with b3 and Bb2. Once d4 follows, the e3-pawn shuts in the " +
      "c1-bishop, and since nothing contests d5, Black reaches ...d5 and ...c5 comfortably.",
  },

  "1.Nf3 e6 2.d3": {
    strategy:
      "Opens the c1-bishop and prepares e4, usually with g3, Bg2, O-O and Nbd2 in a King's " +
      "Indian Attack set-up. The structure is solid but modest: Black takes space with ...d5 " +
      "and ...c5, and White's play depends on achieving e4.",
  },

  "1.Nf3 e6 2.c3": {
    strategy:
      "Prepares d4 and opens the d1–a4 diagonal for Qb3 or Qa4, but it develops nothing and " +
      "takes c3 from the queen's knight. Black takes space with ...d5 and ...c5 unchallenged, " +
      "and a later c4 would cost White another tempo.",
  },

  "1.Nf3 e6 2.Nc3": {
    strategy:
      "Develops the queen's knight and watches d5 and e4, but it blocks the c-pawn, so " +
      "English set-ups with c4 are off for now. Black takes the centre with 2...d5, after " +
      "which 3.e4 leads into a French Defence and 3.d4 into a queen's pawn game without c4. " +
      "Black can also attack the knight at once with 2...Bb4.",
  },

  "1.Nf3 e6 2.a3": {
    strategy:
      "A waiting move that prepares b4 but does nothing for the centre or for development. " +
      "White spends a tempo on the wing while Black takes space with ...d5 and develops " +
      "freely.",
  },

  "1.Nf3 e6 2.a4": {
    strategy:
      "Gains queenside space and stops ...b5, but it costs a tempo and does not help White in " +
      "the centre. Black takes space with ...d5 and ...c5 and develops without being " +
      "challenged.",
  },

  "1.Nf3 e6 2.h3": {
    strategy:
      "Takes g4 from a black knight, but the c8-bishop is shut in behind e6 and no piece is " +
      "ready to land on g4, so the tempo is wasted. Black takes the centre with ...d5 and " +
      "...c5 while White still has to develop.",
  },

  "1.Nf3 e6 2.Na3": {
    strategy:
      "Develops the knight to the rim, where it eyes c4 and b5 but does nothing for the " +
      "centre. After 2...Bxa3 3.bxa3 White has the bishop pair and the b-file, yet the " +
      "doubled, isolated a-pawns are a lasting weakness, and 2...d5 simply takes the centre.",
  },

  "1.Nf3 e6 2.Ne5": {
    strategy:
      "Moves the knight a second time to a square where 2...d6 attacks it, and it must " +
      "retreat; after 3.Nc4 even 3...d5 gains another tempo. White has lost time while Black " +
      "builds a pawn centre.",
  },

  "1.Nf3 e6 2.Nd4": {
    strategy:
      "Centralises the knight, but 2...c5 or 2...e5 attacks it at once and it must move " +
      "again, for example back to f3 or to the rim at b3 or b5. Black gains central space " +
      "with tempo.",
  },

  "1.Nf3 e6 2.Ng1": {
    strategy:
      "Retreats the knight to its starting square and undoes the first move. White has lost " +
      "two tempi, and Black, with ...e6 already played, is effectively a move ahead.",
  },

  "1.Nf3 e6 2.b4": {
    strategy:
      "Gambits the b-pawn without enough in return: the f8-bishop, freed by ...e6, takes it " +
      "with 2...Bxb4 and nothing recaptures. c3 and d4 only gain a few tempi against a bishop " +
      "that retreats with ...Be7 or ...Bd6.",
  },

  "1.Nf3 e6 2.g4": {
    strategy:
      "Gains kingside space, but nothing defends the g4-pawn, and the king's pawn cover is " +
      "loosened for good. Black can attack the pawn at once with 2...h5 or simply take the " +
      "centre with ...d5, and the advance has done nothing for White's development.",
  },

  "1.Nf3 e6 2.h4": {
    strategy:
      "A wing-pawn push that develops nothing and gives Black time for ...d5 and ...c5. It " +
      "weakens g4 and the king's side for good, and the idea Ng5 is shut out by ...h6.",
  },

  "1.Nf3 e6 2.Rg1": {
    strategy:
      "The rook can step to g1 only because the knight has left; the move forfeits castling " +
      "kingside for good and develops nothing. Black takes the centre with ...d5 while " +
      "White's king stays in the middle.",
  },

  "1.Nf3 e6 2.Ng5": {
    strategy:
      "Loses the knight: the pawn move ...e6 has opened the diagonal from d8, so 2...Qxg5 " +
      "takes it, and nothing guards g5 because the c1-bishop is blocked by the d2-pawn.",
  },

  "1.Nf3 e6 2.Nh4": {
    strategy:
      "Loses the knight to 2...Qxh4, since ...e6 has opened the d8-h4 diagonal and nothing " +
      "guards h4. White gets nothing in return.",
  },

  "1.Nf3 e6": {
    name: "Zukertort Opening: Queen's Gambit Invitation",
  },
};
