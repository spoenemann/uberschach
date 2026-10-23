import type { OpeningTexts } from "../book.ts";

// English prose for g3.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.g3 d5": {
    strategy:
      "Occupies the centre at once and puts a pawn in the path of the bishop White is about " +
      "to place on g2. White usually continues Bg2, Nf3 and O-O, then either prepares e4 with " +
      "d3, as in the King's Indian Attack, or strikes at d5 with c4 in Réti or Catalan style. " +
      "Black develops with ...Nf6, ...c6 or ...e6 and ...Be7 or ...Bg4 and has a sound game; " +
      "the d5 pawn is the target of both White plans.",
  },

  "1.g3 e5": {
    strategy:
      "Takes the centre with the e-pawn and frees the f8 bishop. White can answer 2.c4, an " +
      "English Opening with an early g3, or 2.Bg2 with d3 and Nf3, a King's Indian set-up " +
      "with colours reversed and an extra tempo. Black builds with ...d5 or ...Nf6 and ...Nc6 " +
      "and has more central space, but the e5 pawn needs support once Nf3 and a later d4 or " +
      "f4 strike at it.",
  },

  "1.g3 Nf6": {
    strategy:
      "Controls e4 and d5 and keeps every pawn at home, so Black can still choose between " +
      "...d5 with a classical centre and ...g6 with an Indian set-up. After 2.Bg2, ...d5 " +
      "transposes into the lines of 1...d5, while ...g6, ...Bg7 and ...O-O mirror White's " +
      "fianchetto. White, too, keeps a free hand and can head for an English Opening with c4 " +
      "or a fianchetto system against the Indian defences with d4 and Nf3.",
  },

  "1.g3 g6": {
    strategy:
      "Mirrors White's set-up: ...Bg7 bears down the long diagonal on the centre and on b2, " +
      "followed by ...Nf6, ...O-O and ...d6 or ...d5, with ...e5 or ...c5 as the central " +
      "break. White usually continues Bg2 and either c4 and Nc3, an English Opening with both " +
      "bishops on the long diagonals, or the quieter e3 and Ne2. Both sides fight for the " +
      "centre from a distance, in hypermodern style.",
  },

  "1.g3 c5": {
    strategy:
      "Controls d4 from the flank and keeps the d- and e-pawns flexible. White can play 2.Bg2 " +
      "Nc6 3.c4, a Symmetrical English, 2.Nf3 Nc6 3.Bg2 g6, or 2.e4, a Sicilian Defence with " +
      "an early g3. Black follows with ...Nc6 and ...g6 or ...e6, gains queenside space and " +
      "reaches an equal game.",
  },

  "1.g3 Nc6": {
    strategy:
      "Develops a knight towards d4 and e5, but blocks the c-pawn and puts no pawn in the " +
      "centre, so White can take it with 2.d4 or 2.e4 and Bg2. Sound, but Black then reacts " +
      "to White's centre instead of shaping it.",
  },

  "1.g3 b6": {
    strategy:
      "Prepares to fianchetto the queen's bishop against White's, but comes a tempo late: " +
      "after 2.Bg2 the rook on a8 is attacked through the empty b7 square, and 2...Bb7 loses " +
      "the bishop to 3.Bxb7. Black first blocks the diagonal with ...d5, ...c6 or ...Nc6, " +
      "while White keeps a free hand in the centre with e4 and d4.",
  },

  "1.g3 c6": {
    strategy:
      "Prepares ...d5 with a solid pawn chain as in the Slav or Caro-Kann, but develops " +
      "nothing and lets White choose the centre with 2.d4 or 2.e4. Sound and seldom seen in " +
      "master games, it also takes the c6 square from the queen's knight.",
  },

  "1.g3 d6": {
    strategy:
      "Prepares ...e5, or ...Nf6 and ...g6 in Pirc style, and keeps the pieces flexible. It " +
      "forgoes ...d5, so White can take the centre with e4 and d4 or play Bg2 and c4. Sound, " +
      "but passive and seldom seen in master games.",
  },

  "1.g3 e6": {
    strategy:
      "Prepares ...d5 with a French-style structure, with ...Nf6 and ...Be7 to follow. It " +
      "shuts in the c8 bishop for the moment and leaves White a free choice between d3 and c4 " +
      "after Bg2, Nf3 and O-O. Sound, but rare in master play.",
  },

  "1.g3 f5": {
    name: "Hungarian Opening: Dutch Defence",
    strategy:
      "Takes control of e4 in Dutch style, so the bishop coming to g2 meets resistance on the " +
      "long diagonal, with ...Nf6 and ...e6 or ...g6 to follow. The move loosens the e8-h5 " +
      "diagonal and the e6 square, while White develops comfortably with Bg2, Nf3 and c4 or " +
      "d4. Sound, but seldom chosen.",
  },

  "1.g3 Na6": {
    strategy:
      "Heads for c5 or b4, but a knight on the rim controls no central square and loses time. " +
      "White takes the centre with Bg2, e4 and d4 while the knight still looks for a post.",
  },

  "1.g3 Nh6": {
    strategy:
      "Aims at f5 and g4, but the rim knight takes no part in the fight for the centre. After " +
      "2.d4 White can play Bxh6, and gxh6 leaves Black with doubled, isolated h-pawns.",
  },

  "1.g3 a6": {
    strategy:
      "Prepares ...b5 but spends a tempo on a rim pawn with no move for the centre or for " +
      "development. White takes the centre with Bg2, e4 and d4 at leisure.",
  },

  "1.g3 a5": {
    strategy:
      "Gains queenside space and takes b4 away from White's pieces, but does nothing for the " +
      "centre or for development. White takes the centre with Bg2, e4 and d4.",
  },

  "1.g3 b5": {
    strategy:
      "Grabs queenside space but opens the long diagonal to a8: after 2.Bg2 the rook is " +
      "attacked, and 2...Bb7 loses the bishop to 3.Bxb7. Black has to block the diagonal with " +
      "...c6, ...Nc6 or ...d5, and the advanced b-pawn soon becomes a target for a4 or c4.",
  },

  "1.g3 f6": {
    strategy:
      "Prepares ...e5 but takes f6 away from the g8 knight, loosens the e8-h5 diagonal and " +
      "delays development. White takes the centre with e4 and d4 at leisure.",
  },

  "1.g3 g5": {
    name: "Hungarian Opening: Myers' Defence",
    background:
      "1.c4 g5 is known as Myers' Defense because Hugh Myers (1930–2008), an American " +
      "National Master best known for his writings on unusual openings, advocated it in print " +
      "and over the board. The Lichess opening names extend the name to 1.g3 g5.",
    strategy:
      "Gains kingside space but loosens Black's own king position and leaves the g5 pawn " +
      "exposed. 2.d4 attacks it with the c1 bishop at once, so Black must spend another move " +
      "defending it, for example with ...h6, or give it up.",
  },

  "1.g3 h6": {
    strategy:
      "Prevents Bg5 but wastes a tempo on a rim pawn without development or influence on the " +
      "centre. White continues with Bg2 and e4 or d4.",
  },

  "1.g3 h5": {
    name: "Lasker Simul Special",
    strategy:
      "Prepares ...h4 to pry open the h-file against the g3 pawn, but spends a tempo on a rim " +
      "pawn and develops nothing. White can stop the idea with 2.h4 or simply develop with " +
      "Bg2 and Nf3 and keep a small edge.",
  },

  "1.g3": {
    name: "King's Fianchetto Opening",
    background:
      "Also called the Benko Opening after Pal Benko, who beat Bobby Fischer and Mikhail Tal " +
      "with it at the 1962 Candidates Tournament in Curaçao and played it in his first eleven " +
      "games as White there. Richard Réti had already tried it at Baden-Baden 1925, with " +
      "mixed results.",
  },
};
