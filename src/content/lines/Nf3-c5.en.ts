import type { OpeningTexts } from "../book.ts";

// English prose for Nf3-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.Nf3 c5 2.c4": {
    name: "English Opening: Symmetrical Variation",
    background:
      "So named because both c-pawns have advanced two squares; after 1.Nf3 c5 it is one of " +
      "the two transpositions Black invites, the other being 2.e4 into the Sicilian. The " +
      "English takes its name from Howard Staunton, who played it during his 1843 match with " +
      "Saint-Amant and at London 1851, the first international tournament.",
    strategy:
      "Meets the c-pawn with the c-pawn: White fights for d5, keeps d4 in reserve and has Nc3 " +
      "and g3 as natural follow-ups. Black chooses between ...Nc6 with ...g6 and ...Bg7, the " +
      "Hedgehog with ...Nf6, ...e6, ...b6 and ...Bb7, and a quick ...d5. After d4 cxd4 Nxd4 " +
      "White can add e4 for a Maróczy Bind, as in the Sicilian.",
  },

  "1.Nf3 c5 2.e4": {
    strategy:
      "Transposes to the main line of the Sicilian: after ...d6, ...Nc6 or ...e6 White plays " +
      "d4 and recaptures on d4 with the knight for an Open Sicilian. White gains central " +
      "space and quick development, while Black gets the half-open c-file and two central " +
      "pawns against one. The play is sharp and unbalanced and calls for knowledge of " +
      "Sicilian theory.",
  },

  "1.Nf3 c5 2.g3": {
    strategy:
      "Prepares Bg2 and early castling, with the bishop on the long diagonal aiming at d5 and " +
      "b7 once the f3-knight moves. White keeps open both c4, for a Réti or English set-up, " +
      "and d3 with e4, as in the King's Indian Attack. Black can take space with ...d5 or " +
      "mirror the set-up with ...Nc6, ...g6 and ...Bg7.",
  },

  "1.Nf3 c5 2.d4": {
    strategy:
      "Challenges the centre at once: after 2...cxd4 3.Nxd4 White has swapped the d-pawn for " +
      "Black's c-pawn, as in an Open Sicilian that still lacks e4. Black can choose ...Nf6, " +
      "...g6 or the central ...e5, and White must still decide between e4 and c4. Sound and " +
      "judged equal, but it hands Black the choice of set-up.",
  },

  "1.Nf3 c5 2.b3": {
    strategy:
      "Prepares Bb2 on the long diagonal, aiming at e5 and the centre, with e3 and Be2 to " +
      "follow in the manner of a Nimzowitsch–Larsen set-up. The plan is sound but slow: with " +
      "no central pawn, White allows Black to occupy the centre with ...d5 and ...Nc6 first.",
  },

  "1.Nf3 c5 2.Nc3": {
    strategy:
      "Develops the queen's knight towards d5 and e4 and keeps e4 in reserve, which would " +
      "lead to a Sicilian with Nc3 already played. The knight blocks the c-pawn, so the " +
      "English plans with c4 are gone, and Black can take the centre at once with ...d5. " +
      "Sound, but it commits the knight early and sets Black no problems.",
  },

  "1.Nf3 c5 2.d3": {
    strategy:
      "Prepares e4 and frees the c1-bishop, aiming at the set-up of the King's Indian Attack " +
      "with g3, Bg2 and O-O. The system is solid but slow, and it lets Black establish ...d5 " +
      "and ...Nc6 without a fight.",
  },

  "1.Nf3 c5 2.e3": {
    strategy:
      "Opens the f1-bishop and prepares d4 and Be2. The set-up is solid but passive and shuts " +
      "in the c1-bishop, so Black can take the centre with ...d5 or fianchetto with ...g6 " +
      "while White has to catch up with c4 or d4 later.",
  },

  "1.Nf3 c5 2.c3": {
    strategy:
      "Prepares d4, so that ...cxd4 can be met by cxd4 with a pawn kept on d4, an Alapin-like " +
      "idea without e4. The pawn takes c3 from the queen's knight and does little against " +
      "...d5, which grabs space at once. Solid, but slow.",
  },

  "1.Nf3 c5 2.b4": {
    strategy:
      "Offers the b-pawn as a wing gambit. After 2...cxb4 White can open lines with a3 or " +
      "take the centre with d4, but Black keeps the extra pawn and gets a half-open c-file, " +
      "so the compensation is thin.",
  },

  "1.Nf3 c5 2.a3": {
    strategy:
      "Prepares b4 against the c5-pawn, but spends a tempo on a rim pawn while Black claims " +
      "the centre with ...d5 and ...Nf6.",
  },

  "1.Nf3 c5 2.a4": {
    strategy:
      "Stops ...b5 and gains queenside space, but weakens b4 and spends a tempo without " +
      "helping the centre. Black develops with ...Nc6 and ...d5, and White has nothing to " +
      "show for it.",
  },

  "1.Nf3 c5 2.g4": {
    strategy:
      "Gains kingside space but leaves the pawn loose: after 2...d5 the c8-bishop eyes g4 and " +
      "...Bxg4 is threatened. The advance also weakens f4 and h4 without helping development.",
  },

  "1.Nf3 c5 2.h3": {
    strategy:
      "Takes g4 from the c8-bishop but spends a tempo on a rim pawn without helping " +
      "development or the centre. Black takes space with ...d5 and ...Nc6.",
  },

  "1.Nf3 c5 2.h4": {
    strategy:
      "Advances the rook pawn with thoughts of h5, but does nothing for the centre or " +
      "development, and g4 can never again be covered by h3. Black takes the centre with " +
      "...d5 and ...Nc6.",
  },

  "1.Nf3 c5 2.Rg1": {
    strategy:
      "Gives up the right to castle kingside and puts the rook behind its own g2-pawn for no " +
      "purpose. Black takes the centre with ...d5 and ...Nc6, while White's king can find " +
      "safety only on the other wing.",
  },

  "1.Nf3 c5 2.Na3": {
    strategy:
      "Heads for b5 or c4, but the knight on the rim controls no central square and blocks " +
      "the a-pawn. Black takes the centre with ...d5 and ...Nf6.",
  },

  "1.Nf3 c5 2.Ng5": {
    strategy:
      "Moves the same knight again, and its attacks on f7 and h7 come to nothing, since the " +
      "king and the rook on h8 defend them. After ...h6 the knight must move once more, and " +
      "White has lost time while Black claims the centre.",
  },

  "1.Nf3 c5 2.Nh4": {
    strategy:
      "Moves the knight a second time, to a rim square where it covers fewer squares than on " +
      "f3 and does nothing for the centre. Black takes the centre with ...d5 and ...Nf6 at no " +
      "cost.",
  },

  "1.Nf3 c5 2.Ne5": {
    strategy:
      "Puts the knight on e5, where ...d6 drives it away at once. It must retreat to f3, d3 " +
      "or c4, and Black has gained a tempo for the centre.",
  },

  "1.Nf3 c5 2.Ng1": {
    strategy:
      "Retreats the knight to its start square, so White has spent two moves for nothing and " +
      "Black is effectively a full move ahead in the centre.",
  },

  "1.Nf3 c5 2.Nd4": {
    strategy:
      "Hangs a piece: 2...cxd4 wins the knight, and the d2-pawn blocks the queen from " +
      "recapturing, so White regains at most a pawn later.",
  },

  "1.Nf3 c5": {
    name: "Zukertort Opening: Sicilian Invitation",
  },
};
