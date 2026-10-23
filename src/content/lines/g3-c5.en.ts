import type { OpeningTexts } from "../book.ts";

// English prose for g3-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.g3 c5 2.Bg2": {
    strategy:
      "Puts the bishop on the long diagonal, where it presses on the centre, c6 and b7, and " +
      "clears f1 for castling once the knight leaves g1. White keeps every plan open: Nf3 and " +
      "O-O, c4 for a Symmetrical English structure, d3 and e4 as in a King's Indian Attack, " +
      "or Nc3 and e4 for a Closed Sicilian formation. Black can mirror the set-up with ...Nc6 " +
      "and ...g6 or build with ...e6 and ...Nf6.",
  },

  "1.g3 c5 2.Nf3": {
    strategy:
      "Brings out the king's knight, which covers d4 and e5, and clears g1 so that Bg2 and " +
      "O-O can follow at once. White keeps open both c4 for an English structure and d3 with " +
      "e4 as in a King's Indian Attack. With no central pawn yet, White allows Black to take " +
      "space with ...d5 or to mirror the set-up with ...Nc6 and ...g6.",
  },

  "1.g3 c5 2.c4": {
    strategy:
      "Meets the c-pawn with the c-pawn and enters the Symmetrical English with g3 already " +
      "played. Bg2 will press on d5, c6 and b7, and White follows with Nc3, Nf3 and O-O, " +
      "keeping d4 as a later break. Black can mirror with ...Nc6 and ...g6 or, since no white " +
      "knight on f3 yet attacks e5, aim for ...e5.",
  },

  "1.g3 c5 2.e4": {
    strategy:
      "Occupies the centre at once and transposes into a Sicilian Defence with g3 already " +
      "played, where Bg2, d3 and Nc3 often lead into the Closed Sicilian. Black can strike at " +
      "once with ...d5, since exd5 Qxd5 hits the rook on h1 through the gap on g2, and White " +
      "usually blocks with Nf3. Sound, but less ambitious than the main lines of the " +
      "Sicilian.",
  },

  "1.g3 c5 2.d3": {
    strategy:
      "Prepares e4 and frees the c1 bishop, aiming for Bg2, Nf3 and O-O in the manner of a " +
      "King's Indian Attack. It commits the d-pawn before Black's set-up is known, and Black " +
      "can take space with ...Nc6 and ...e5 or with ...d5. Sound, but Bg2 first keeps more " +
      "options open.",
  },

  "1.g3 c5 2.Nc3": {
    strategy:
      "Develops the knight towards d5 and e4 and heads for a Closed Sicilian formation with " +
      "Bg2, d3 and later e4. The knight blocks the c-pawn, so the English plan with c4 is " +
      "gone, and ...d5 followed by ...d4 gains space with tempo. Sound, but it commits the " +
      "knight early and sets Black no problems.",
  },

  "1.g3 c5 2.b3": {
    strategy:
      "Prepares Bb2 to pair with Bg2, so both bishops work on the long diagonals, with Nf3, " +
      "O-O and e3 or d3 to follow. The set-up is sound but slow: with no central pawn, White " +
      "lets Black take the centre with ...Nc6, ...e5 or ...d5 first.",
  },

  "1.g3 c5 2.c3": {
    strategy:
      "Prepares d4 to challenge the c5 pawn and builds a solid centre alongside Bg2, Nf3 and " +
      "O-O. The pawn takes the natural square of the queen's knight, which must come out via " +
      "d2, and ...Nc6 followed by ...d5 lets Black occupy the centre first. Sound but " +
      "passive.",
  },

  "1.g3 c5 2.e3": {
    strategy:
      "Prepares d4 and Ne2 for a compact set-up with Bg2 and O-O. The pawn blocks the c1 " +
      "bishop's diagonal, so the bishop usually comes out via b3 and Bb2, and ...Nc6 with " +
      "...d5 lets Black take the centre first. Sound, but slow.",
  },

  "1.g3 c5 2.f4": {
    strategy:
      "Takes e5 under control and heads for a reversed Leningrad Dutch, with Nf3, Bg2, O-O " +
      "and d3 to follow. The pawn slightly loosens White's king position, and Black can take " +
      "the centre first with ...d5 and ...Nc6. Sound, but less flexible than Bg2 or Nf3.",
  },

  "1.g3 c5 2.d4": {
    strategy:
      "Offers a trade that costs a tempo: after 2...cxd4 3.Qxd4 Nc6 the queen must move " +
      "again, and Black develops with gain of time. With no knight on f3, only the queen can " +
      "recapture at once.",
  },

  "1.g3 c5 2.b4": {
    strategy:
      "Offers the b-pawn to deflect Black's c-pawn, but after 2...cxb4 nothing recovers it " +
      "quickly. White has no central pawn to show for it, and Bg2 against b7 is met by ...Nc6 " +
      "or ...d5.",
  },

  "1.g3 c5 2.a3": {
    strategy:
      "Prepares b4 to undermine the c5 pawn, but spends a tempo on a rim pawn before any " +
      "piece or central pawn is out. Black takes the centre with ...Nc6 and ...e5 or ...d5.",
  },

  "1.g3 c5 2.a4": {
    strategy:
      "Takes b5 under control, but spends a tempo on the rim with nothing gained for the " +
      "centre or development. Black takes space with ...Nc6 and ...d5 or ...e5.",
  },

  "1.g3 c5 2.f3": {
    strategy:
      "Takes f3 from the king's knight and blocks the long diagonal on which the bishop is " +
      "meant to work from g2. It prepares e4, but it loosens the king's position further and " +
      "develops nothing.",
  },

  "1.g3 c5 2.h3": {
    strategy:
      "Spends a tempo on a rim pawn that guards g4 but neither fights for the centre nor " +
      "develops a piece. Black takes space with ...Nc6 and ...e5 or ...d5.",
  },

  "1.g3 c5 2.h4": {
    strategy:
      "Spends a second move on the kingside pawns with no target, since Black has not " +
      "fianchettoed. It leaves the g3 pawn guarded only by f2 and does nothing for the " +
      "centre; ...h5 or simple development answers it.",
  },

  "1.g3 c5 2.Bh3": {
    strategy:
      "Leaves the long diagonal for h3, where the bishop attacks only the guarded d7 pawn. " +
      "After ...d5 the c8 bishop opposes it, so White must trade bishops, retreat, or allow " +
      "...Bxh3 Nxh3 with a knight on the rim.",
  },

  "1.g3 c5 2.Nh3": {
    strategy:
      "Heads for f4, which the g3 pawn covers, but the knight stands on the rim instead of " +
      "f3, and on f4 it can be challenged by ...e5. Black takes space with ...d5 and ...Nc6.",
  },

  "1.g3 c5 2.Na3": {
    strategy:
      "Heads for c4 or b5, but a knight on the rim covers no central square and can be " +
      "harried by ...d5 and ...b5 once it reaches c4. Nc3 would develop the same knight " +
      "towards the centre.",
  },

  "1.g3 c5 2.g4": {
    strategy:
      "Loosens the kingside for good. The pawn on g4 is unprotected, since the e2 pawn blocks " +
      "the queen's defence, and after ...d5 or ...d6 the c8 bishop attacks it, as does ...h5, " +
      "so White must weaken further with h3 or f3.",
  },

  "1.g3 c5": {
    name: "Hungarian Opening: Sicilian Invitation",
  },
};
