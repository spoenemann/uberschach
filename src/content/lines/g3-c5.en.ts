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

  "1.g3 c5 2.Bg2 Nc6": {
    strategy:
      "Develops the knight toward the centre, adds pressure on d4 and blocks the long " +
      "diagonal of White's bishop, so that ...b6 and ...b5 stop hanging the a8-rook. Black " +
      "normally follows with ...g6 and ...Bg7, which after c4 and Nc3 gives a symmetrical " +
      "English structure, or with ...e5 and ...Nf6 for a flexible central set-up. Nothing is " +
      "conceded and every option stays open.",
  },

  "1.g3 c5 2.Bg2 Nf6": {
    strategy:
      "Develops the knight toward the centre, eyeing e4 and d5, and keeps ...g6, ...Nc6, " +
      "...d5 and ...e6 all available. After 3.c4 the game is a Symmetrical English with " +
      "White's fianchetto, and after 3.Nf3 Black chooses between ...g6 and ...d5 with " +
      "ordinary development.",
  },

  "1.g3 c5 2.Bg2 d5": {
    strategy:
      "Takes the centre at once and shuts the long diagonal of White's bishop. The queen " +
      "guards d5 and ...Nf6 or ...e6 adds support, while ...Nc6 with ...e5 builds a broad " +
      "centre. The pawn is a target for c4 and Bg2, so Black must develop without loosening " +
      "the centre; ...d4 is available as a space-gaining advance.",
  },

  "1.g3 c5 2.Bg2 g6": {
    strategy:
      "Mirrors White's set-up: ...Bg7 takes the long diagonal toward b2 and c3, and ...Nc6, " +
      "...d6 and ...e5 or ...Nf6 follow. After c4 and Nc3 the structure is that of the " +
      "Symmetrical English. It concedes nothing but offers little to unbalance the game, so " +
      "Black plays for a slow strategic fight.",
  },

  "1.g3 c5 2.Bg2 d6": {
    strategy:
      "Opens the c8-bishop and prepares ...e5 or ...Nf6 with ...g6, a solid Sicilian-style " +
      "set-up. It claims less of the centre than ...d5, which would now cost a second tempo, " +
      "and leaves White free to develop with c4, Nc3 and Nf3.",
  },

  "1.g3 c5 2.Bg2 e6": {
    strategy:
      "Opens the f8-bishop and prepares ...d5 backed by a pawn, followed by ...Nc6 and ...Nf6 " +
      "or ...Nge7. Once ...d5 is in, the e6-pawn shuts in the c8-bishop, and White meanwhile " +
      "develops with c4, Nc3 and Nf3 at leisure.",
  },

  "1.g3 c5 2.Bg2 e5": {
    strategy:
      "Takes the centre with pawns on c5 and e5, controlling d4 and f4, and prepares ...Nc6, " +
      "...Nf6 or ...d6. Neither pawn can cover d5 any more, so the square is a lasting hole; " +
      "White answers with c4 and Nc3, aiming a knight at d5, or with Nf3 against the e5-pawn " +
      "and d3 for a slower game.",
  },

  "1.g3 c5 2.Bg2 f5": {
    strategy:
      "Claims e4 and prepares a Dutch-style set-up with ...Nf6, ...g6 and ...Bg7. It loosens " +
      "e6 and the a2-g8 diagonal and delays development, while White continues with Nf3, O-O " +
      "and d3, preparing e4.",
  },

  "1.g3 c5 2.Bg2 Na6": {
    strategy:
      "Heads for b4 or c7 from the rim, which costs time and leaves the g2-a8 diagonal " +
      "unblocked, so ...b6 and ...b5 still lose the rook. The natural ...Nc6 develops with " +
      "more effect.",
  },

  "1.g3 c5 2.Bg2 Qc7": {
    strategy:
      "Brings the queen out before any minor piece and defends nothing that is attacked. " +
      "White develops with Nc3 and gains time with Nb5 or Nd5, both of which hit the queen on " +
      "c7.",
  },

  "1.g3 c5 2.Bg2 Qb6": {
    strategy:
      "Eyes b2, which Bc1 guards, so there is no real threat. The queen is out early and Nc3 " +
      "followed by Nd5 or Na4 drives it back with gain of time.",
  },

  "1.g3 c5 2.Bg2 Qa5": {
    strategy:
      "Brings the queen out before any minor piece and only pins the d2-pawn, a pin that Nc3 " +
      "or c3 ends at once. The queen on a5 later becomes a target for a white knight arriving " +
      "on b3 or c4, so the move costs time.",
  },

  "1.g3 c5 2.Bg2 Nh6": {
    strategy:
      "Puts the knight on the rim, where it controls neither e4 nor d5. Once d3 opens the " +
      "c1-bishop, Bxh6 gxh6 can wreck Black's kingside pawns.",
  },

  "1.g3 c5 2.Bg2 a6": {
    strategy:
      "Prepares ...b5, but that hangs the a8-rook to Bxa8 as long as the long diagonal is " +
      "open, so Black first needs ...Nc6 or ...d5. The move spends a tempo on the flank while " +
      "White develops with c4, Nc3 and d3.",
  },

  "1.g3 c5 2.Bg2 a5": {
    strategy:
      "Takes queenside space but develops nothing and weakens b5 for a white knight arriving " +
      "via Nc3. White continues with Nf3, O-O and d3 unhindered.",
  },

  "1.g3 c5 2.Bg2 f6": {
    strategy:
      "Prepares ...e5 but takes the f6-square from the king's knight, weakens e6 and the " +
      "e8-h5 diagonal, and develops nothing.",
  },

  "1.g3 c5 2.Bg2 g5": {
    strategy:
      "Weakens the kingside and opens the a1-h8 diagonal. After 3.d4 the c1-bishop eyes the " +
      "loose g5-pawn, and 3...cxd4 4.Qxd4 also hits the h8-rook, so Black has to block with " +
      "...Nf6 or ...f6 and the g5-pawn stays a target.",
  },

  "1.g3 c5 2.Bg2 h6": {
    strategy:
      "A waiting move that develops nothing and does not touch the centre. White gains a " +
      "tempo for Nf3, O-O, d3 or c4; the pawn on h6 only takes g5 from a white bishop or " +
      "knight.",
  },

  "1.g3 c5 2.Bg2 h5": {
    strategy:
      "Aims for ...h4 against the g3-pawn but develops nothing and weakens g5 and g6. White " +
      "can close the flank with h4 and carry on with Nf3, O-O and d3.",
  },

  "1.g3 c5 2.Bg2 c4": {
    strategy:
      "Gains space, but the pawn is undermined at once by b3 or d3 and cannot be backed up by " +
      "...b5, which hangs the a8-rook. After the exchange Black has spent two moves on the " +
      "c-pawn and White's pieces get open lines.",
  },

  "1.g3 c5 2.Bg2 b6": {
    strategy:
      "Hangs the rook: with the b7-pawn gone the long diagonal is open, and 3.Bxa8 wins the " +
      "a8-rook because the queen cannot recapture past the c8-bishop and the b8-knight.",
  },

  "1.g3 c5 2.Bg2 b5": {
    strategy:
      "Hangs the rook: the b-pawn no longer blocks the long diagonal, and 3.Bxa8 wins the " +
      "a8-rook because the queen cannot recapture past the c8-bishop and the b8-knight. The " +
      "pawn on b5 wins nothing back.",
  },
};
