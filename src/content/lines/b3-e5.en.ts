import type { OpeningTexts } from "../book.ts";

// English prose for b3-e5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.b3 e5 2.Bb2": {
    strategy:
      "Puts the bishop on the long diagonal against e5, which has no defender yet, so Black " +
      "holds it with 2...Nc6 or 2...d6. After 2...Nc6 3.e3 d5 4.Bb5 Bd6 5.f4 White strikes at " +
      "Black's broad centre from the wing, and since 5...exf4 loses the h8-rook to Bxg7, " +
      "Black defends e5 again with 5...Qe7 or 5...f6. With 3.c4 instead, White contests d5 in " +
      "the manner of a reversed Sicilian.",
  },

  "1.b3 e5 2.e3": {
    strategy:
      "Opens the f1-bishop's diagonal for Bb5 and keeps Bb2, Ne2 and a later f4 or d4 in " +
      "reserve. It usually transposes into the main line, for example 2...Nc6 3.Bb2 d5 4.Bb5 " +
      "Bd6 5.f4. The cost is that e5 is not yet attacked, so Black can choose a set-up first, " +
      "such as 2...d5 or 2...Nf6, and meet Bb2 with ...Nc6 or ...Bd6.",
  },

  "1.b3 e5 2.Nf3": {
    strategy:
      "Attacks e5 and develops, but 2...e4 drives the knight away: after 3.Nd4 c5 4.Nb5 d5 it " +
      "stands offside while Black gains space, and 3...Nc6 4.Nxc6 dxc6 frees Black's " +
      "c8-bishop and opens the d-file. Against 2...Nc6 3.Bb2 the game returns to familiar " +
      "Larsen set-ups. Sound, but it gives Black the easier choice.",
  },

  "1.b3 e5 2.c4": {
    strategy:
      "Reaches an English structure by transposition, with Bb2 against e5 and Nc3, g3 or e3 " +
      "to follow. Black holds e5 with ...Nc6 or ...d6 and develops with ...Nf6, so the bishop " +
      "gains little at first. Sound, but slower than the main moves.",
  },

  "1.b3 e5 2.d3": {
    strategy:
      "Supports a later e4 and makes room for Nd2 in a quiet set-up with g3, Bg2 and Nf3. It " +
      "challenges neither e5 nor d5, so Black builds a pawn centre with ...Nf6, ...Nc6 and " +
      "...d5. Sound, but passive.",
  },

  "1.b3 e5 2.d4": {
    strategy:
      "Challenges e5 at once. After 2...exd4 only the queen can recapture, and 3.Qxd4 Nc6 " +
      "drives it away with a gain of time for Black, while after 2...e4 the d4-pawn blocks " +
      "the long diagonal that b3 opened for the bishop. Playable, but White gets nothing more " +
      "than with the main moves.",
  },

  "1.b3 e5 2.e4": {
    strategy:
      "Takes the centre at once and lets Bb2 and Nf3 work against e5, with Nc3 and d4 as " +
      "later ideas. After ...Nf6 the e4-pawn needs protection, ...Bc5 eyes f2, and Black " +
      "develops easily with ...Nc6. Sound, but it gives up the flexibility of the Larsen " +
      "set-up and promises no more than Bb2.",
  },

  "1.b3 e5 2.Nc3": {
    strategy:
      "Develops a knight and covers e4 and d5, with e3 or g3 and Nf3 to follow. The knight " +
      "blocks the c-pawn and the long diagonal of a bishop on b2, and it does not stop Black " +
      "from taking the centre with ...Nf6, ...Nc6 and ...d5. Playable, but the knight commits " +
      "before White's plan is clear.",
  },

  "1.b3 e5 2.g3": {
    strategy:
      "Prepares Bg2 for a double fianchetto, with bishops on b2 and g2 aiming at the long " +
      "diagonals. It leaves the centre to Black, who can set up with ...Nc6, ...d6 and ...Nf6 " +
      "or take space with ...d5, and e5 is not attacked until Bb2 follows. Sound, but not " +
      "testing.",
  },

  "1.b3 e5 2.a3": {
    strategy:
      "Stops ...Bb4 but develops nothing and does not touch the centre. Black occupies it " +
      "with ...Nf6, ...Nc6 and ...d5, and the a3-pawn has no further task, so White is a " +
      "tempo behind.",
  },

  "1.b3 e5 2.a4": {
    strategy:
      "Gains queenside space and covers b5, but takes no part in the fight for the centre, " +
      "and with the pawn past a3 only c3 can still cover b4. Black develops freely with " +
      "...Nf6, ...Nc6 and ...d5.",
  },

  "1.b3 e5 2.c3": {
    strategy:
      "Prepares d4 to build a broad centre, but the pawn blocks the long diagonal that b3 was " +
      "meant to open for the bishop. Black strikes first with 2...d5 or 2...Nf6, and White " +
      "needs d4 and further tempi to catch up.",
  },

  "1.b3 e5 2.f3": {
    strategy:
      "Supports a later e4, but takes f3, the g1-knight's best square, and weakens the e1-h4 " +
      "diagonal, so that 2...Qh4+ forces 3.g3. White trades development for a slow structure, " +
      "and Black takes the centre with ...Nc6 and ...d5.",
  },

  "1.b3 e5 2.Nh3": {
    strategy:
      "Heads for f4 or g5, but the e5-pawn already covers f4 and the knight stands on the " +
      "rim. After 2...d5 the c8-bishop eyes h3, and ...Bxh3 gxh3 doubles White's h-pawns " +
      "while Black keeps a free centre.",
  },

  "1.b3 e5 2.Na3": {
    strategy:
      "Aims at c4, from where the knight would hit e5, but leaves it on the rim, away from " +
      "the centre. Black takes the centre with ...d5, which also covers c4, and develops with " +
      "...Nf6 and ...Nc6 while the knight still has to find a useful square.",
  },

  "1.b3 e5 2.Ba3": {
    strategy:
      "Offers to trade the bishop that b3 was meant to bring to the long diagonal, and after " +
      "2...Bxa3 3.Nxa3 the recapturing knight stands on the rim. Black then takes the centre " +
      "with ...d5 and ...Nf6.",
  },

  "1.b3 e5 2.h3": {
    strategy:
      "A waiting move that prevents ...Bg4 but neither develops a piece nor contests the " +
      "centre. Black replies with ...Nf6, ...Nc6 and ...d5 while Bb2 is still to be played.",
  },

  "1.b3 e5 2.h4": {
    strategy:
      "Aims for h5 and space on the kingside but takes no part in the centre and weakens g4. " +
      "Black develops with ...Nf6 and ...Nc6 and takes space with ...d5.",
  },

  "1.b3 e5 2.b4": {
    strategy:
      "Offers the b-pawn with no development behind it: 2...Bxb4 wins it, and after 3.Bb2 the " +
      "pressure on e5 is easily met by ...Nc6 or ...d6, leaving White a pawn down for " +
      "nothing.",
  },

  "1.b3 e5 2.f4": {
    strategy:
      "Offers the f-pawn without a lead in development: 2...exf4 wins it, and the weakened " +
      "e1-h4 diagonal makes ...Qh4+ a constant threat, for example 3.Bb2 Qh4+ 4.g3 fxg3 with " +
      "the h1-rook under fire after hxg3.",
  },

  "1.b3 e5 2.g4": {
    strategy:
      "Gains kingside space but leaves the pawn without support: ...d5 opens the c8-bishop " +
      "against g4, and f3, h3 and the long diagonal are weakened for good while nothing is " +
      "developed.",
  },

  "1.b3 e5": {
    name: "Nimzowitsch–Larsen Attack: Modern Variation",
    background:
      "Black's most popular and ambitious reply to 1.b3, chosen in about 45 percent of games.",
  },
};
