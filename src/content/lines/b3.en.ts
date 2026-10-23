import type { OpeningTexts } from "../book.ts";

// English prose for b3.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.b3 e5": {
    strategy:
      "Occupies the centre at once and blocks the long diagonal, so White's bishop meets a pawn " +
      "instead of open board. Black can follow with ...d5 for a broad pawn centre, which White " +
      "then has to undermine from the wings. The price is that e5 needs constant support.",
  },

  "1.b3 d5": {
    strategy:
      "Takes space in the centre and keeps White from playing e4 cheaply. Black can build a " +
      "broad centre or develop solidly, but must respect the long diagonal: ...g6 is only safe " +
      "once the knight stands on f6, otherwise the bishop takes the h8 rook.",
  },

  "1.b3 Nf6": {
    strategy:
      "Develops a piece, eyes e4 and d5 and leaves the choice of central pawn open, so many " +
      "central structures remain possible. A ...g6 fianchetto is possible, but the knight is " +
      "then tied to the long diagonal: if it moves, the h8 rook is exposed to White's bishop.",
  },

  "1.b3 c5": {
    strategy:
      "Fights for d4 from the wing and keeps Black's central pawns flexible, since every central " +
      "set-up remains possible. It often leads to games in which Black's c-pawn contests the " +
      "centre, so Black can steer toward familiar ground, but White decides which of them " +
      "arises.",
  },

  "1.b3 b6": {
    name: "Nimzowitsch–Larsen Attack: Symmetrical Variation",
    strategy:
      "Copies White's queen's fianchetto and prepares ...Bb7 to contest the long diagonal, " +
      "keeping a solid symmetrical structure. It is sound, but it neither claims the centre nor " +
      "creates imbalance, so White can still choose how to build.",
  },

  "1.b3 e6": {
    strategy:
      "Prepares ...d5 and opens the f8 bishop's diagonal while keeping every option open; if " +
      "White plays e4, it can become a French Defence. Sound but modest, as the pawn on e6 hems " +
      "in the c8 bishop until Black frees it.",
  },

  "1.b3 c6": {
    strategy:
      "Prepares ...d5 with a Caro-Kann-style pawn on c6 and a solid structure. Sound, but the " +
      "pawn takes c6 from the knight and does nothing for development, so Black reacts to " +
      "White's set-up instead of shaping the game.",
  },

  "1.b3 d6": {
    strategy:
      "Prepares a flexible, compact set-up that defends the centre from behind. Sound but " +
      "passive: Black waits and leaves White free to take space in the centre.",
  },

  "1.b3 Nc6": {
    strategy:
      "Develops a piece and supports ...e5. The knight blocks the c-pawn, though, and White need " +
      "not cooperate: an early d4 takes the centre first. Playable, but less direct than " +
      "occupying the centre with a pawn.",
  },

  "1.b3 f5": {
    name: "Nimzowitsch–Larsen Attack: Dutch Variation",
    strategy:
      "Stakes out e4 with a flank pawn and prepares to develop around it. The cost is a loosened " +
      "kingside: the e8–h5 diagonal and the e6 square are weakened, and White can build calmly " +
      "or take space in the centre. Rare and not refuted, but risky.",
  },

  "1.b3 g6": {
    strategy:
      "Prepares a kingside fianchetto, but the g-pawn has left the long diagonal open: once " +
      "White's bishop reaches b2 it attacks the h8 rook, and ...Bg7 would simply lose the " +
      "bishop. Black must spend the next move on ...Nf6, which then stays tied to the diagonal.",
  },

  "1.b3 b5": {
    name: "Nimzowitsch–Larsen Attack: Polish Variation",
    strategy:
      "Gains queenside space and prepares ...Bb7 to contest the long diagonal. The advanced pawn " +
      "becomes a target once the f1 bishop is free, and a4 can undermine it, so Black must keep " +
      "the queenside under control. Rare, but not refuted.",
  },

  "1.b3 a6": {
    strategy:
      "Spends a tempo on a queenside pawn before any piece or central pawn has moved. White " +
      "simply develops and takes the centre at leisure.",
  },

  "1.b3 a5": {
    strategy:
      "Prepares ...a4 against the b3 pawn, but White can stop it with a4 or meet ...axb3 with " +
      "axb3, and meanwhile the move does nothing for development or the centre. It also " +
      "weakens the b5 square.",
  },

  "1.b3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but blocks the a-pawn and does little " +
      "for the centre. White simply develops and takes space in the centre.",
  },

  "1.b3 Nh6": {
    strategy:
      "Puts the knight on the rim instead of f6, where it eyes f5 and g4 but controls no central " +
      "square. White develops and takes the centre while Black's development lags.",
  },

  "1.b3 f6": {
    strategy:
      "Covers e5 and blunts the long diagonal, but takes f6 from the knight and opens the e8–h5 " +
      "diagonal, where Qh5+ becomes possible once White's e-pawn has moved. White develops " +
      "freely.",
  },

  "1.b3 h6": {
    strategy:
      "Loses a tempo on a rook-pawn move that prepares ...g5 but neither develops a piece nor " +
      "fights for the centre. White develops and takes the centre unhindered.",
  },

  "1.b3 h5": {
    strategy:
      "Gains kingside space, but the h-pawn can no longer guard g5 or g6, and the move leaves " +
      "development and the centre alone. White develops and keeps the easier game.",
  },

  "1.b3 g5": {
    strategy:
      "Opens the long diagonal to the h8 rook: once White's bishop reaches b2 the rook is " +
      "attacked, and ...Bg7 loses a piece. Black has to block the diagonal, which loosens the " +
      "king or allows a trade on f6 that doubles Black's pawns, so White gains time against a " +
      "weakened kingside.",
  },

  "1.b3": {
    name: "Nimzowitsch–Larsen Attack",
    background:
      "Named after Aron Nimzowitsch, who experimented with it in the 1920s and 30s, and Bent " +
      "Larsen, the Danish grandmaster who played it frequently between 1968 and 1972, " +
      "including a loss to Spassky in 17 moves at the 1970 USSR versus Rest of the World " +
      "match. Fischer used it five times in 1970.",
  },
};
