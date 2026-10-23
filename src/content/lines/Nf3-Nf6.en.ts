import type { OpeningTexts } from "../book.ts";

// English prose for Nf3-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.Nf3 Nf6 2.c4": {
    name: "English Opening: Anglo-Indian Defence, King's Knight Variation",
    background:
      "The same position arises from 1.c4 Nf6 2.Nf3. The English Opening is named after " +
      "Howard Staunton, who played 1.c4 in his 1843 match against Saint-Amant and at London " +
      "1851, the first international tournament, but it caught on only in the twentieth " +
      "century.",
    strategy:
      "Controls d5 from the flank and keeps both d4 and a fianchetto in reserve. With d4 the " +
      "game becomes a Queen's Gambit or an Indian defence: ...e6 heads for the Queen's Gambit " +
      "Declined or the Queen's Indian, ...g6 for the King's Indian or the Grünfeld. Without " +
      "d4, White plays Nc3, g3 and Bg2 in English structures, for example against ...c5. The " +
      "pawn occupies no central square yet, so Black chooses the defence.",
  },

  "1.Nf3 Nf6 2.g3": {
    background:
      "A common start of the King's Indian Attack, which Bobby Fischer (mostly in his early " +
      "career), Mikhail Botvinnik, Vasily Smyslov and Tigran Petrosian all employed. Its use " +
      "at grandmaster level began in the 1950s as an offshoot of the widespread King's Indian " +
      "Defence, with White adopting Black's set-up with an extra move.",
    strategy:
      "Prepares the fianchetto Bg2, which bears on e4 and d5 along the long diagonal, and " +
      "leaves d3, d4 and c4 all available. White usually follows with Bg2 and O-O, then " +
      "builds with d3 and e4 for a King's Indian Attack, with c4 for a Réti or English " +
      "set-up, or with d4 and c4 for a Catalan. The cost is that the centre is left to Black, " +
      "who can occupy it at once with ...d5.",
  },

  "1.Nf3 Nf6 2.d4": {
    strategy:
      "Occupies the centre with a pawn and reaches a queen's pawn position with the knight " +
      "already on f3. Black can build with ...d5 and ...e6 for Queen's Gambit structures, " +
      "with ...e6 and ...b6 for the Queen's Indian, or with ...g6 for the King's Indian and " +
      "the Grünfeld once White adds c4. White chooses between c4 and quieter set-ups with Bf4 " +
      "or e3, but the early knight rules out systems with f3, such as the Sämisch against the " +
      "King's Indian.",
  },

  "1.Nf3 Nf6 2.b3": {
    name: "Nimzowitsch–Larsen Attack",
    background:
      "Named after Aron Nimzowitsch, who experimented with 1.b3 in the 1920s and 1930s and " +
      "more often used the order 1.Nf3 d5 2.b3, and Bent Larsen, who played 1.b3 frequently " +
      "from 1968 to 1972.",
    strategy:
      "Prepares Bb2, which aims along the long diagonal at e5 and the knight on f6, while " +
      "keeping e3, c4 and d4 flexible. Black can build with ...d5 and ...e6, play ...g6 to " +
      "contest the diagonal, or answer with ...c5. The cost is a slower claim on the centre, " +
      "and theory rates the resulting positions as roughly level.",
  },

  "1.Nf3 Nf6 2.e3": {
    name: "Zukertort Opening: Quiet System",
    strategy:
      "Opens the f1-bishop and supports a later d4, heading for Colle-type set-ups with d4, " +
      "Bd3 and c3 or for a queenside fianchetto with b3 and Bb2. It is solid but slow, and " +
      "once d4 follows, the e3-pawn shuts in the c1-bishop; Black takes space with ...d5 and " +
      "...c5 or fianchettoes with ...b6 or ...g6.",
  },

  "1.Nf3 Nf6 2.d3": {
    strategy:
      "Supports e4 and opens the c1-bishop, aiming for g3, Bg2, O-O and e4 in King's Indian " +
      "Attack style. It is sound but modest: Black takes the centre with ...d5 and ...e5, and " +
      "White's game stays passive until e4 can be pushed.",
  },

  "1.Nf3 Nf6 2.c3": {
    strategy:
      "Supports a later d4 and opens the d1–a4 diagonal for the queen, but it develops " +
      "nothing and takes c3 from the queen's knight. Black claims space with ...d5 and ...c5 " +
      "or develops with ...e6 and ...b6, and the slow c3 puts no pressure on Black's set-up.",
  },

  "1.Nf3 Nf6 2.Nc3": {
    strategy:
      "Develops the second knight and watches e4 and d5 without committing a pawn. It blocks " +
      "the c-pawn, so English set-ups with c4 are off for now, and Black takes the centre " +
      "with ...d5 and can gain more space by chasing the knight with ...d4.",
  },

  "1.Nf3 Nf6 2.a3": {
    strategy:
      "Prepares b4 and keeps a black bishop off b4, but does nothing for the centre or " +
      "development. Black takes space with ...d5 and ...c5 while White is still waiting.",
  },

  "1.Nf3 Nf6 2.a4": {
    strategy:
      "Gains queenside space on the rim, but spends a tempo on a pawn move that does nothing " +
      "for the centre or development. Black takes the centre with ...d5 and ...e6 and " +
      "develops freely.",
  },

  "1.Nf3 Nf6 2.b4": {
    strategy:
      "Advances the b-pawn where nothing defends it: after 2...e6 the f8-bishop attacks it, " +
      "and White must spend another tempo on a3, c3 or b5 or give it up to ...Bxb4. The " +
      "advance also weakens c3 and leaves the queenside thin.",
  },

  "1.Nf3 Nf6 2.h3": {
    strategy:
      "Takes g4 from a black knight or bishop, but spends a tempo on a rim pawn the position " +
      "does not yet call for. Black takes the centre with ...d5 and ...e6 while White still " +
      "has to develop.",
  },

  "1.Nf3 Nf6 2.h4": {
    strategy:
      "Gains kingside space and prepares h5, but loosens the kingside for no concrete gain " +
      "and does nothing for the centre or development. Black takes the centre with ...d5 and " +
      "...e6.",
  },

  "1.Nf3 Nf6 2.Rg1": {
    strategy:
      "Supports a later g4 and g5, but gives up the right to castle kingside and puts the " +
      "rook on a closed file. Black takes the centre with ...d5 while White's king stays in " +
      "the middle.",
  },

  "1.Nf3 Nf6 2.Na3": {
    strategy:
      "Develops the knight to the rim, where it eyes b5 and c4 but guards nothing in the " +
      "centre and blocks the a-pawn. Black takes the centre with ...d5, which also covers c4, " +
      "and the knight stays out of play.",
  },

  "1.Nf3 Nf6 2.Ng5": {
    strategy:
      "Moves the knight a second time to attack h7 and f7, both of which are defended. After " +
      "2...h6 it has to go back to f3 or h3, and Black gains time for ...d5 and ...e5.",
  },

  "1.Nf3 Nf6 2.Nh4": {
    strategy:
      "Moves the knight a second time, to the rim, where it watches f5 and g6 but does " +
      "nothing for the centre. Black takes the centre with ...d5 and ...e5 while the knight " +
      "is out of play.",
  },

  "1.Nf3 Nf6 2.Ne5": {
    strategy:
      "Centralises the knight too early: 2...d6 attacks it and it must retreat, so White " +
      "spends two moves for nothing while Black gains central space and opens the c8-bishop.",
  },

  "1.Nf3 Nf6 2.Nd4": {
    strategy:
      "Centralises the knight, but ...e5 or ...c5 attacks it at once and it must retreat, " +
      "while Black gains central space with a tempo.",
  },

  "1.Nf3 Nf6 2.Ng1": {
    strategy:
      "Returns the knight to its starting square and undoes the first move, giving Black a " +
      "free tempo with the knight already on f6. Black takes the centre with ...d5 and ...e6 " +
      "while White has to start over.",
  },

  "1.Nf3 Nf6 2.e4": {
    strategy:
      "Leaves the e4-pawn undefended, so 2...Nxe4 wins it. White's lead in development after " +
      "Qe2 or Nc3 is doubtful compensation, and Black keeps an extra pawn in a sound " +
      "position.",
  },

  "1.Nf3 Nf6 2.g4": {
    strategy:
      "Hangs a pawn: nothing defends g4, since the knight on f3 blocks the queen's diagonal, " +
      "so 2...Nxg4 wins it. Rg1 then hits the knight, but it simply retreats and Black keeps " +
      "the extra pawn.",
  },
};
