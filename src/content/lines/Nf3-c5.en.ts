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
      "Meets the c-pawn with the c-pawn: White fights for d5 and keeps the choice between a " +
      "central d4 break and slower piece play. The symmetry makes for a flexible, manoeuvring " +
      "game, quiet or sharp as the pawn breaks decide, but Black can also claim the centre with " +
      "...d5 early.",
  },

  "1.Nf3 c5 2.e4": {
    strategy:
      "Takes the Sicilian bargain: White occupies the centre and develops quickly, planning d4 " +
      "to open the position. Black trades a wing pawn for a central one and gets the half-open " +
      "c-file in return. The play is sharp and unbalanced, and it rewards knowledge of theory.",
  },

  "1.Nf3 c5 2.g3": {
    strategy:
      "Prepares Bg2 and early castling, with the bishop eyeing d5 and b7 along the long diagonal " +
      "once the f3-knight moves. White leaves the pawn set-up open, for a queenside squeeze or a " +
      "slower build-up. The game is quiet and flexible, and Black can take space in the centre " +
      "at once.",
  },

  "1.Nf3 c5 2.d4": {
    strategy:
      "Challenges the centre at once: after 2...cxd4 3.Nxd4 White has swapped the d-pawn for " +
      "Black's c-pawn, as in an Open Sicilian that still lacks e4. Sound and judged equal, but " +
      "it leaves Black free to choose the set-up.",
  },

  "1.Nf3 c5 2.b3": {
    strategy:
      "Prepares Bb2 on the long diagonal, aiming at e5 and the centre. The plan is sound but " +
      "slow: with no central pawn, White lets Black occupy the centre first.",
  },

  "1.Nf3 c5 2.Nc3": {
    strategy:
      "Develops the queen's knight towards d5 and e4 and keeps e4 in reserve. The knight blocks " +
      "the c-pawn, so the English plans with c4 are gone, and Black can take the centre at once " +
      "with ...d5. Sound, but it commits the knight early and sets Black no problems.",
  },

  "1.Nf3 c5 2.d3": {
    strategy:
      "Prepares e4 and frees the c1-bishop, for a solid set-up with a kingside fianchetto and " +
      "castling. It is slow, and it lets Black establish the centre without a fight.",
  },

  "1.Nf3 c5 2.e3": {
    strategy:
      "Opens the f1-bishop and prepares d4, but shuts in the c1-bishop. Solid but passive: Black " +
      "can take the centre or fianchetto a bishop while White has to catch up later.",
  },

  "1.Nf3 c5 2.c3": {
    strategy:
      "Prepares d4, so that ...cxd4 can be met by cxd4 with a pawn kept on d4. The pawn takes c3 " +
      "from the queen's knight and does little to stop Black grabbing space in the centre at " +
      "once. Solid, but slow.",
  },

  "1.Nf3 c5 2.b4": {
    strategy:
      "Offers the b-pawn as a wing gambit. After 2...cxb4 White gets open lines for the pawn, " +
      "but Black keeps the extra pawn and a half-open c-file, so the compensation is thin.",
  },

  "1.Nf3 c5 2.a3": {
    strategy:
      "Prepares b4 against the c5-pawn, but spends a tempo on a rim pawn while Black claims the " +
      "centre.",
  },

  "1.Nf3 c5 2.a4": {
    strategy:
      "Stops ...b5 and gains queenside space, but weakens b4 and spends a tempo without helping " +
      "the centre. Black develops freely, and White has nothing to show for it.",
  },

  "1.Nf3 c5 2.g4": {
    strategy:
      "Gains kingside space but leaves the pawn loose: after 2...d5 the c8-bishop eyes g4 and " +
      "...Bxg4 is threatened. The advance also weakens f4 and h4 without helping development.",
  },

  "1.Nf3 c5 2.h3": {
    strategy:
      "Takes g4 from the c8-bishop but spends a tempo on a rim pawn without helping development " +
      "or the centre. Black takes space at will.",
  },

  "1.Nf3 c5 2.h4": {
    strategy:
      "Advances the rook pawn with thoughts of h5, but does nothing for the centre or " +
      "development, and g4 can never again be covered by h3. Black takes the centre at once.",
  },

  "1.Nf3 c5 2.Rg1": {
    strategy:
      "Gives up the right to castle kingside and puts the rook behind its own g2-pawn for no " +
      "purpose. Black takes the centre at once, while White's king can find safety only on the " +
      "other wing.",
  },

  "1.Nf3 c5 2.Na3": {
    strategy:
      "Heads for b5 or c4, but the knight on the rim controls no central square and blocks the " +
      "a-pawn. Black takes the centre at once.",
  },

  "1.Nf3 c5 2.Ng5": {
    strategy:
      "Moves the same knight again, and its attacks on f7 and h7 come to nothing, since the " +
      "king and the rook on h8 defend them. After ...h6 the knight must move once more, and " +
      "White has lost time while Black claims the centre.",
  },

  "1.Nf3 c5 2.Nh4": {
    strategy:
      "Moves the knight a second time, to a rim square where it covers fewer squares than on f3 " +
      "and does nothing for the centre. Black takes the centre at no cost.",
  },

  "1.Nf3 c5 2.Ne5": {
    strategy:
      "Puts the knight on e5, where ...d6 drives it away at once, so Black gains a tempo for the " +
      "centre.",
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

  "1.Nf3 c5 2.c4 Nc6": {
    strategy:
      "Develops a knight to a square where it watches d4 and e5, and commits no pawn yet. Black " +
      "keeps both a Sicilian-style fianchetto and a fully symmetrical set-up open, and if the " +
      "centre opens, the game can take on the character of an Open Sicilian.",
  },

  "1.Nf3 c5 2.c4 Nf6": {
    strategy:
      "Develops with pressure on e4 and d5 and leaves every pawn structure open, so Black can " +
      "see what White commits to first. The same positions also arise when White starts with the " +
      "queen's pawn, which is why this reply is worth knowing in both forms.",
  },

  "1.Nf3 c5 2.c4 e6": {
    strategy:
      "Opens the f8-bishop and prepares ...d5, or a solid, flexible set-up that keeps the pawns " +
      "back and waits for White to commit. If Black settles for it, the price is less space and " +
      "a backward d-pawn on d6.",
  },

  "1.Nf3 c5 2.c4 g6": {
    strategy:
      "Prepares ...Bg7 on the long diagonal and quick castling, for a solid fianchetto set-up. " +
      "The risk is a space bind: if White gets pawns on c4 and e4, they control d5 and make the " +
      "freeing ...d5 hard, so Black must rely on piece play.",
  },

  "1.Nf3 c5 2.c4 b6": {
    strategy:
      "Prepares ...Bb7 on the long diagonal and keeps Black's set-up flexible. It is sound but " +
      "commits the b-pawn early, while the same ideas remain available without it.",
  },

  "1.Nf3 c5 2.c4 d6": {
    strategy:
      "Prepares ...e5 or a Sicilian-type set-up. It is sound but passive: it commits the d-pawn " +
      "before the knights and leaves White free to take space in the centre.",
  },

  "1.Nf3 c5 2.c4 d5": {
    strategy:
      "Challenges the centre at once. After 3.cxd5 Black can regain the pawn with a knight, but " +
      "recapturing with 3...Qxd5 lets 4.Nc3 gain a tempo against the queen and leaves White " +
      "ahead in development.",
  },

  "1.Nf3 c5 2.c4 Na6": {
    strategy:
      "Puts the knight on the rim, where it controls neither d4 nor e5 and needs another move to " +
      "become useful. White builds the centre while Black spends tempi.",
  },

  "1.Nf3 c5 2.c4 Qc7": {
    strategy:
      "Brings the queen out before any minor piece. White's knight gains time against it, and " +
      "Black falls behind in development.",
  },

  "1.Nf3 c5 2.c4 Qb6": {
    strategy:
      "Hits b2, but the bishop on c1 guards it, so there is no threat. White's knight gains time " +
      "against the queen while Black's pieces stay at home.",
  },

  "1.Nf3 c5 2.c4 Qa5": {
    strategy:
      "Eyes a2 and d2, but both pawns are guarded, so the queen threatens nothing. White " +
      "develops freely, and the early queen move costs Black time while the other pieces wait.",
  },

  "1.Nf3 c5 2.c4 Nh6": {
    strategy:
      "Heads for f5, where e4 or g4 would drive the knight away at once. On h6 it does nothing " +
      "for the centre, and White gains time for the centre.",
  },

  "1.Nf3 c5 2.c4 a6": {
    strategy:
      "Prepares ...b5 against the c4-pawn, but it develops nothing, and White builds the centre " +
      "while Black's kingside pieces stay at home.",
  },

  "1.Nf3 c5 2.c4 a5": {
    strategy:
      "Stops b4 but does not develop, and leaves b5 as a lasting hole that no Black pawn can " +
      "cover. White takes the centre at leisure.",
  },

  "1.Nf3 c5 2.c4 b5": {
    strategy:
      "Offers a pawn for queenside pressure: after 3.cxb5 Black can get open lines on the " +
      "queenside, but White's centre is intact, White castles safely after a kingside " +
      "fianchetto, and White stays a pawn up for little compensation.",
  },

  "1.Nf3 c5 2.c4 f6": {
    strategy:
      "Takes f6 from the knight and weakens the e8-h5 diagonal and the e6-square without " +
      "developing anything, while White simply builds the centre.",
  },

  "1.Nf3 c5 2.c4 f5": {
    strategy:
      "Controls e4 as in the Dutch Defence, but weakens the e8-h5 diagonal and the e6-square " +
      "without developing a piece. White develops with a free hand.",
  },

  "1.Nf3 c5 2.c4 h6": {
    strategy:
      "Takes g5 from the knight and the bishop, but does not develop a piece. White uses the " +
      "tempo for the centre.",
  },

  "1.Nf3 c5 2.c4 h5": {
    strategy:
      "A flank pawn move that weakens g5 and g6 and does nothing for the centre or development. " +
      "White simply builds the centre.",
  },

  "1.Nf3 c5 2.c4 e5": {
    strategy:
      "Leaves the pawn unguarded: 3.Nxe5 wins it at once, and attacking the knight afterwards " +
      "gains time but does not win the pawn back.",
  },

  "1.Nf3 c5 2.c4 g5": {
    strategy: "Drops a pawn at once: 3.Nxg5 takes it, and no Black piece guards g5.",
  },

  "1.Nf3 c5 2.g3 Nc6": {
    strategy:
      "Develops a piece and watches d4 and e5 at once, the natural way to fight for the centre. " +
      "Black commits to no pawn structure yet, so every set-up stays open, and White decides " +
      "whether the game stays quiet or grows into a Symmetrical English.",
  },

  "1.Nf3 c5 2.g3 Nf6": {
    strategy:
      "Develops the king's knight and keeps every set-up open. The knight does not watch d4, so " +
      "White may open the game at once with d4, giving both sides half-open files, but with the " +
      "e-pawn still on e2.",
  },

  "1.Nf3 c5 2.g3 b6": {
    strategy:
      "Prepares ...Bb7 to oppose the bishop that comes to g2 on the long diagonal. The set-up is " +
      "flexible but slow: no piece yet contests d4, so White can open the centre with d4, while " +
      "after c4 Black can build a compact Hedgehog structure.",
  },

  "1.Nf3 c5 2.g3 d5": {
    strategy:
      "Claims the centre at once, taking more space than White's quiet set-up. The price is a " +
      "target: White can challenge d5 with c4, and Black must then decide whether to push, " +
      "exchange or hold the pawn. The game turns on space against solidity.",
  },

  "1.Nf3 c5 2.g3 g6": {
    strategy:
      "Mirrors White's set-up with a fianchetto: the bishop on g7 will aim along the long " +
      "diagonal at d4 and b2, and the structure stays flexible. White can open the centre with " +
      "d4 or build a Symmetrical English, so the game is likely to be a quiet, manoeuvring one.",
  },

  "1.Nf3 c5 2.g3 b5": {
    strategy:
      "Gains queenside space and prepares ...Bb7 against the long diagonal. Nothing defends " +
      "the b5-pawn, so a4 attacks it at once, and d4 hits c5 as well. A risky try that is not " +
      "refuted by force, but it asks more of Black than plain development.",
  },

  "1.Nf3 c5 2.g3 d6": {
    strategy:
      "Opens the c8-bishop and supports a later ...e5 in a compact Sicilian-style structure. The " +
      "set-up is sound but passive: the pawn commits before White's plan is clear, and White's " +
      "natural development gives White the freer game.",
  },

  "1.Nf3 c5 2.g3 e6": {
    strategy:
      "Opens the f8-bishop and prepares ...d5 for a solid centre, or a compact set-up with the " +
      "c8-bishop fianchettoed if White plays c4. Sound, but it fixes the e-pawn early: after " +
      "...d5 the c8-bishop is shut in unless ...b6 follows, while developing the knight first " +
      "keeps both plans open.",
  },

  "1.Nf3 c5 2.g3 Na6": {
    strategy:
      "Puts the knight on the rim, where it contests neither d4 nor e5 and needs another move to " +
      "find a useful square. White develops and takes the centre while the knight is still on " +
      "its way.",
  },

  "1.Nf3 c5 2.g3 Qc7": {
    strategy:
      "Brings the queen out before any minor piece. After d4 cxd4 Nxd4 the knight can jump to b5 " +
      "and hit the queen, while developing a knight first reaches the same set-ups without that " +
      "exposure.",
  },

  "1.Nf3 c5 2.g3 Qb6": {
    strategy:
      "Hits b2, but the bishop on c1 guards it, and the exposed queen becomes a target: Nc3 " +
      "followed by Na4 or Nd5 attacks it with tempo while Black still has no piece developed.",
  },

  "1.Nf3 c5 2.g3 Qa5": {
    strategy:
      "Pins the d2-pawn to the king, so the d-pawn cannot move until Nc3 or c3 blocks the " +
      "diagonal, but the queen leaves d8 before a single piece is out. White simply develops, " +
      "and Black has spent time on a queen with nothing to attack.",
  },

  "1.Nf3 c5 2.g3 Nh6": {
    strategy:
      "Places the knight on the rim, where it eyes f5 and g4 but no central square. Once the " +
      "d-pawn moves, Bxh6 gxh6 can leave Black with doubled h-pawns, and on f5 the knight can " +
      "be chased by e4.",
  },

  "1.Nf3 c5 2.g3 a6": {
    strategy:
      "A waiting move that prepares ...b5 but does nothing for the centre or for development. " +
      "White develops and builds freely.",
  },

  "1.Nf3 c5 2.g3 a5": {
    strategy:
      "Advances a flank pawn that does nothing for the centre or for development. It leaves b5 " +
      "and b6 without pawn cover, and White develops with a free tempo.",
  },

  "1.Nf3 c5 2.g3 f6": {
    strategy:
      "Prepares ...e5 but takes f6 from the king's knight and weakens e6 and the e8-h5 diagonal " +
      "with no piece developed. White develops and takes space while Black's development lags.",
  },

  "1.Nf3 c5 2.g3 f5": {
    strategy:
      "Stakes out e4 with a pawn, but with nothing developed it weakens e6 and the e8-h5 " +
      "diagonal. Nh4 hits f5 at once, so Black must spend another tempo to hold the pawn.",
  },

  "1.Nf3 c5 2.g3 h6": {
    strategy:
      "Takes g5 from White's knight, but nothing is threatened there yet, and the move does " +
      "nothing for the centre or development. White gains a tempo for development.",
  },

  "1.Nf3 c5 2.g3 h5": {
    strategy:
      "Gains space on the flank but spends a tempo with nothing developed and weakens g5. The " +
      "follow-up ...h4 only loses the pawn, since the f3-knight and the g3-pawn both cover " +
      "h4.",
  },

  "1.Nf3 c5 2.g3 c4": {
    strategy:
      "Gains queenside space, but on c4 the pawn no longer controls d4, and b3 or d3 " +
      "challenges it at once. Black has spent a second move on the c-pawn while all the " +
      "pieces are still at home.",
  },

  "1.Nf3 c5 2.g3 e5": {
    strategy:
      "Hangs the e-pawn: nothing defends it, so 3.Nxe5 simply wins a pawn. Even if Black trades " +
      "knights and opens lines for the queen and the c8-bishop, Black is a clean pawn down.",
  },

  "1.Nf3 c5 2.g3 g5": {
    strategy:
      "Hangs the g-pawn: 3.Nxg5 wins it, because the queen's diagonal is closed by the " +
      "e7-pawn and nothing else guards g5. Black is left with a loosened kingside as well.",
  },
};
