import type { OpeningTexts } from "../book.ts";

// English prose for c4-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.c4 Nf6 2.Nc3": {
    name: "English Opening: Anglo-Indian Defence, Queen's Knight Variation",
    background:
      "Against 2...d5, White can answer 3.cxd5 Nxd5 4.g3 so that Black cannot force a " +
      "Grünfeld Defence; Mikhail Botvinnik played this line several times in his 1958 world " +
      "championship match against Vasily Smyslov.",
    strategy:
      "Develops the knight towards the centre, where it controls d5 and e4, and keeps e4, g3 " +
      "and d4 all available. Against ...e6 or ...g6 White can take the centre with e4, play " +
      "g3 and Bg2 for the usual English set-up, or turn to d4 for an Indian structure. The " +
      "cost is that d4 now allows the Nimzo-Indian after ...e6 and ...Bb4, and Black can " +
      "contest the centre at once with ...d5 or ...e5.",
  },

  "1.c4 Nf6 2.Nf3": {
    strategy:
      "Develops the king's knight, watches d4 and e5 and leaves the choice between d4, g3 and " +
      "Nc3 until Black's set-up is clear. Against ...e6 and ...b6 it heads for a Queen's " +
      "Indian structure, against ...g6 for a fianchetto set-up, and d4 turns it into a " +
      "Queen's Gambit or Indian game. The move commits little, though it gives Black a free " +
      "choice of defensive scheme.",
  },

  "1.c4 Nf6 2.d4": {
    strategy:
      "Takes the centre with a pawn and reaches the 1.d4 Nf6 2.c4 position with Black to " +
      "move. Black chooses between ...e6 for Queen's Gambit, Queen's Indian or Nimzo-Indian " +
      "play, ...g6 for King's Indian and Grünfeld structures, and ...c5 for a Benoni-type " +
      "game. White gets the classical c4-d4 pawn pair and extra space, but must be ready for " +
      "whichever of these defences Black picks.",
  },

  "1.c4 Nf6 2.g3": {
    strategy:
      "Prepares Bg2, which bears on d5 and along the long diagonal towards b7, and keeps Nc3, " +
      "Nf3 and d4 in reserve. Against ...e6 and ...d5 White reaches Catalan-like positions " +
      "with Nf3, against ...g6 a symmetrical fianchetto, and against ...e5 a Reversed " +
      "Sicilian with Nc3. The cost is that White's centre stays unoccupied, and Black can " +
      "strike at the c4-pawn at once with ...c6 and ...d5.",
  },

  "1.c4 Nf6 2.e3": {
    strategy:
      "Opens the f1-bishop and supports d4, steering towards Queen's Gambit or Nimzo-Indian " +
      "structures after Nc3 and d4, or towards b3 and Bb2. It is solid but slow, and it " +
      "commits the e-pawn before Black's set-up is known; Black can take space with ...e5 or " +
      "...d5 and develop freely.",
  },

  "1.c4 Nf6 2.b3": {
    strategy:
      "Prepares Bb2, which bears on e5 and the long diagonal, supports the c4-pawn and keeps " +
      "e3, Nf3 and d4 flexible. It is sound but slow: the centre stays unoccupied, and Black " +
      "can claim it with ...e5 or ...d5 or contest the diagonal with ...g6.",
  },

  "1.c4 Nf6 2.d3": {
    strategy:
      "Supports a later e4 and opens the c1-bishop, with g3, Bg2 and Nc3 to follow. It is " +
      "sound but modest: d4 now costs an extra tempo, so Black can take the centre with ...e5 " +
      "or ...d5 and develop freely.",
  },

  "1.c4 Nf6 2.Qc2": {
    strategy:
      "Backs the c4-pawn and prepares e4, but develops no minor piece and leaves the queen " +
      "where ...Nc6 followed by ...Nb4 can hit it with tempo. Black takes the centre with " +
      "...e5 or ...d5 while White is still unready.",
  },

  "1.c4 Nf6 2.Qb3": {
    strategy:
      "Eyes b7 and defends the c4-pawn, but the c8-bishop already covers b7 and no minor " +
      "piece is developed. ...Nc6 followed by ...Na5 then hits the queen and the c4-pawn with " +
      "tempo, and Black takes the centre while White rearranges.",
  },

  "1.c4 Nf6 2.Qa4": {
    strategy:
      "Brings the queen out before any minor piece and threatens nothing, since the rook " +
      "covers a7. The queen pins the d7-pawn for a moment, but ...c6 breaks the pin and " +
      "prepares ...d5, and Black develops freely while the queen stands on the rim.",
  },

  "1.c4 Nf6 2.Na3": {
    strategy:
      "Defends the c4-pawn and can continue to c2 or b5, but on a3 the knight controls no " +
      "central square. Black takes the centre with ...e5 or ...d5 in the meantime.",
  },

  "1.c4 Nf6 2.Nh3": {
    strategy:
      "Develops the knight on the rim on its way to f4 and leaves the centre alone. Once " +
      "Black's d-pawn has moved, ...Bxh3 can double White's h-pawns, and f3 was the natural " +
      "square for the knight.",
  },

  "1.c4 Nf6 2.a3": {
    strategy:
      "Takes b4 from Black's pieces and prepares b4, but spends a tempo without developing " +
      "anything or touching the centre. Black takes space with ...e5 or ...d5.",
  },

  "1.c4 Nf6 2.a4": {
    strategy:
      "Gains a little queenside space but develops nothing and gives up the b4-square for " +
      "good, where a black knight or bishop can settle. Black takes the centre with ...e5 or " +
      "...d5 in the meantime.",
  },

  "1.c4 Nf6 2.b4": {
    name: "English Orangutan",
    strategy:
      "Advances the b-pawn where nothing defends it: after ...e6 or ...e5 the f8-bishop " +
      "attacks it, and White must spend another tempo on a3, Qb3 or b5 or give it up. " +
      "Development lags while Black takes the centre.",
  },

  "1.c4 Nf6 2.f3": {
    strategy:
      "Prepares e4 but takes f3 from the knight, weakens the e1-h4 diagonal and develops " +
      "nothing. Black develops freely and takes the centre with ...e5 or ...d5.",
  },

  "1.c4 Nf6 2.f4": {
    name: "Bird Opening: Mujannah",
    strategy:
      "Grabs kingside space and controls e5, but opens the e1-h4 diagonal to the king and " +
      "develops nothing. Black develops naturally with ...d5, ...g6 or ...d6 and ...e5.",
  },

  "1.c4 Nf6 2.h3": {
    strategy:
      "Stops ...Ng4 and ...Bg4 but is a slow waiting move that develops nothing. Black takes " +
      "the centre with ...e5 or ...d5.",
  },

  "1.c4 Nf6 2.h4": {
    strategy:
      "Spends a tempo on the edge of the board, weakens the g3-square, develops no piece and " +
      "does nothing for the centre. Black takes space with ...e5 or ...d5.",
  },

  "1.c4 Nf6 2.c5": {
    strategy:
      "Gains space but moves the same pawn twice and gives up control of d5. The pawn on c5 " +
      "has no defender: ...e6 or ...e5 opens the f8-bishop against it and ...b6 undermines " +
      "it, while White has developed nothing.",
  },

  "1.c4 Nf6 2.g4": {
    strategy:
      "Hangs a pawn: 2...Nxg4 wins it at once because nothing defends g4, and h3 only drives " +
      "the knight to a good square like e5. The kingside is loosened with no lead in " +
      "development in return.",
  },

  "1.c4 Nf6 2.e4": {
    strategy:
      "Offers the e-pawn: Black simply wins a pawn with 2...Nxe4, and quick development such " +
      "as Nc3 or Qe2 does not regain it, since the knight can retreat to f6 or c5.",
  },

  "1.c4 Nf6": {
    name: "English Opening: Anglo-Indian Defence",
    background:
      "The most common reply to 1.c4; the Encyclopaedia of Chess Openings classifies its " +
      "independent lines as A15 to A19.",
  },
};
