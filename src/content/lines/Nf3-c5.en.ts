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

  "1.Nf3 c5 2.c4 Nc6": {
    strategy:
      "Develops the knight to a central square where it watches d4 and e5, and keeps both " +
      "...g6 with ...Bg7 and ...Nf6 with ...e6 in reserve. If White opens the centre with " +
      "3.d4 cxd4 4.Nxd4, play reaches Sicilian structures such as the Accelerated Dragon " +
      "after 4...g6, where 5.e4 sets up the Maróczy Bind. After 3.Nc3 Nf6 the position is " +
      "fully symmetrical, with White to move.",
  },

  "1.Nf3 c5 2.c4 Nf6": {
    strategy:
      "Develops with control of e4 and d5 and keeps every set-up open: ...d5, ...g6, ...e6 " +
      "and ...Nc6 all remain possible. After 3.d4 cxd4 4.Nxd4 the same position arises from " +
      "1.d4 Nf6 2.c4 c5 3.Nf3 cxd4 4.Nxd4, the Anti-Benoni. Since White must still choose " +
      "between Nc3, g3 and d4, Black can decide on the pawn structure a move later.",
  },

  "1.Nf3 c5 2.c4 e6": {
    strategy:
      "Opens the f8-bishop and prepares ...d5, or ...b6 with ...Bb7 and ...Be7 for the " +
      "flexible Hedgehog set-up, while ...Nf6 and ...Nc6 can follow in any order. White can " +
      "play 3.Nc3 or take space with 3.d4 cxd4 4.Nxd4 and a later e4. If Black settles for " +
      "the Hedgehog, the price is less space and a backward d-pawn on d6.",
  },

  "1.Nf3 c5 2.c4 g6": {
    strategy:
      "Prepares ...Bg7 on the long diagonal and quick castling, for a Dragon-like set-up or, " +
      "with ...b6 and ...Bb7, a solid double fianchetto. White can reply 3.d4 cxd4 4.Nxd4 Bg7 " +
      "5.e4, building the Maróczy Bind, whose pawns on c4 and e4 control d5 and make the " +
      "freeing ...d5 hard to achieve. Black then relies on piece play against the bind.",
  },

  "1.Nf3 c5 2.c4 b6": {
    strategy:
      "Prepares ...Bb7 on the long diagonal, heading for a Hedgehog with ...e6 or a double " +
      "fianchetto with ...g6. It is sound but commits the b-pawn early, while the same " +
      "set-ups remain available after 2...e6 or 2...Nf6. White can reply 3.Nc3 or gain space " +
      "with 3.d4 cxd4 4.Nxd4.",
  },

  "1.Nf3 c5 2.c4 d6": {
    strategy:
      "Prepares ...e5 or a Sicilian-type set-up, for instance 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6 " +
      "with White's pawn already on c4. It is sound but passive: it commits the d-pawn before " +
      "the knights and leaves White free to take space with Nc3, d4 and e4.",
  },

  "1.Nf3 c5 2.c4 d5": {
    strategy:
      "Challenges the centre at once. After 3.cxd5 Nf6 4.Nc3 Nxd5 play transposes to the " +
      "known line 1.c4 c5 2.Nc3 Nf6 3.Nf3 d5 4.cxd5 Nxd5, but recapturing with 3...Qxd5 lets " +
      "4.Nc3 gain a tempo against the queen and leaves White ahead in development.",
  },

  "1.Nf3 c5 2.c4 Na6": {
    strategy:
      "Puts the knight on the rim, where it controls neither d4 nor e5 and needs ...Nc7 or " +
      "...Nb4 to become useful. White builds the centre with Nc3 and d4 while Black spends " +
      "tempi.",
  },

  "1.Nf3 c5 2.c4 Qc7": {
    strategy:
      "Brings the queen out before any minor piece. Nc3 followed by Nb5 or Nd5 gains time " +
      "against it, and Black falls behind in development.",
  },

  "1.Nf3 c5 2.c4 Qb6": {
    strategy:
      "Hits b2, but the bishop on c1 guards it, so there is no threat. Nc3 followed by Na4 or " +
      "Nd5 gains time against the queen while Black's pieces stay at home.",
  },

  "1.Nf3 c5 2.c4 Qa5": {
    strategy:
      "Eyes a2 and d2, but both pawns are guarded, so the queen threatens nothing. White " +
      "develops with Nc3, g3 and Bg2, and the early queen move costs Black time while ...Nc6 " +
      "and ...Nf6 wait.",
  },

  "1.Nf3 c5 2.c4 Nh6": {
    strategy:
      "Heads for f5, where e4 or g4 would drive the knight away at once. On h6 it does " +
      "nothing for the centre, and White gains time for Nc3 and d4.",
  },

  "1.Nf3 c5 2.c4 a6": {
    strategy:
      "Prepares ...b5 against the c4-pawn, but it develops nothing, and White builds the " +
      "centre with Nc3 and d4 while Black's kingside pieces stay at home.",
  },

  "1.Nf3 c5 2.c4 a5": {
    strategy:
      "Stops b4 but does not develop, and leaves b5 as a lasting hole that no Black pawn can " +
      "cover. White takes the centre with Nc3 and d4 at leisure.",
  },

  "1.Nf3 c5 2.c4 b5": {
    strategy:
      "Offers a pawn in Benko style: after 3.cxb5 a6 4.bxa6 Bxa6 Black gets the open a- and " +
      "b-files, but White's centre is intact, and White castles safely via g3 and Bg2 and " +
      "stays a pawn up for thin compensation.",
  },

  "1.Nf3 c5 2.c4 f6": {
    strategy:
      "Takes f6 from the knight and weakens the e8-h5 diagonal and the e6-square without " +
      "developing anything, while White simply continues with Nc3 and d4.",
  },

  "1.Nf3 c5 2.c4 f5": {
    strategy:
      "Controls e4 as in the Dutch Defence, but weakens the e8-h5 diagonal and the e6-square " +
      "without developing a piece. White continues with Nc3, d4 and g3 with a free hand.",
  },

  "1.Nf3 c5 2.c4 h6": {
    strategy:
      "Takes g5 from the knight and the bishop, but does not develop a piece. White uses the " +
      "tempo for Nc3 and d4.",
  },

  "1.Nf3 c5 2.c4 h5": {
    strategy:
      "A flank pawn move that weakens g5 and g6 and does nothing for the centre or " +
      "development. White continues Nc3 and d4.",
  },

  "1.Nf3 c5 2.c4 e5": {
    strategy:
      "Leaves the pawn unguarded: 3.Nxe5 wins it at once, and ...Nc6 or ...Qf6 afterwards " +
      "gains time against the knight but not the pawn back.",
  },

  "1.Nf3 c5 2.c4 g5": {
    strategy: "Drops a pawn at once: 3.Nxg5 takes it, and no Black piece guards g5.",
  },

  "1.Nf3 c5 2.g3 Nc6": {
    strategy:
      "Develops a piece and watches d4 and e5 at once. Black keeps every set-up open: ...g6 " +
      "with ...Bg7 for a mirrored fianchetto, ...e5 with ...Nf6 for a broad centre, or ...d5 " +
      "with ...e6 against a King's Indian Attack set-up. If White adds c4 and Nc3, as in " +
      "3.Bg2 g6 4.c4 Bg7 5.Nc3, the game becomes a Symmetrical English.",
  },

  "1.Nf3 c5 2.g3 Nf6": {
    strategy:
      "Develops the king's knight and keeps ...d5, ...g6 and ...Nc6 open; the position is the " +
      "same as after 1.Nf3 Nf6 2.g3 c5. Against Bg2 Black can build with ...Nc6 and ...g6, or " +
      "take the centre with ...d5. The knight does not watch d4, so White may exchange at " +
      "once with d4 cxd4 Nxd4, reaching the half-open files of an Open Sicilian but with the " +
      "e-pawn still on e2.",
  },

  "1.Nf3 c5 2.g3 b6": {
    strategy:
      "Prepares ...Bb7 to oppose the bishop that comes to g2 on the long diagonal, with ...e6 " +
      "and ...Nf6 or ...g6 and ...Bg7 to follow. If White plays c4, Black can build a " +
      "Hedgehog with ...e6, ...d6 and ...a6. No piece yet contests d4, so White can open the " +
      "centre with d4, before or after c4.",
  },

  "1.Nf3 c5 2.g3 d5": {
    strategy:
      "Claims the centre at once: with pawns on c5 and d5 Black takes more space than White's " +
      "quiet set-up does. After Bg2 Black can build with ...Nc6, ...e5 and ...Nf6 for the " +
      "most space, or more solidly with ...e6 and ...Nf6. White can challenge d5 with c4, " +
      "after which Black chooses between ...d4, ...dxc4 and holding the pawn with ...e6 or " +
      "...Nf6.",
  },

  "1.Nf3 c5 2.g3 g6": {
    strategy:
      "Mirrors White's set-up: ...Bg7 and ...Nc6 follow, then ...d6 or ...e6 with ...Nf6 or " +
      "...Nge7. The bishop on g7 aims along the long diagonal at d4 and b2, and the structure " +
      "stays flexible. White can steer for a Symmetrical English with c4 and Nc3, or open the " +
      "centre with d4 cxd4 Nxd4.",
  },

  "1.Nf3 c5 2.g3 b5": {
    strategy:
      "Gains queenside space and prepares ...Bb7 against the long diagonal. Nothing defends " +
      "the b5-pawn, so a4 attacks it at once, and d4 hits c5 as well. A risky try that is not " +
      "refuted by force, but it asks more of Black than plain development.",
  },

  "1.Nf3 c5 2.g3 d6": {
    strategy:
      "Opens the c8-bishop and supports a later ...e5, with ...Nc6, ...Nf6 and ...g6 to " +
      "follow in a compact Sicilian-style structure. The set-up is sound but passive: the " +
      "pawn commits before White's plan is clear, and Bg2, O-O and c4 give White the freer " +
      "game.",
  },

  "1.Nf3 c5 2.g3 e6": {
    strategy:
      "Opens the f8-bishop and prepares ...d5, with ...Nf6, ...Nc6 and ...Be7 for a solid " +
      "centre, or ...b6 and ...Bb7 for a Hedgehog-style set-up if White plays c4. Sound, but " +
      "it fixes the e-pawn early: after ...d5 the c8-bishop is shut in unless ...b6 follows, " +
      "while 2...Nc6 keeps both plans open.",
  },

  "1.Nf3 c5 2.g3 Na6": {
    strategy:
      "Puts the knight on the rim, where it contests neither d4 nor e5 and needs ...Nc7 or " +
      "...Nb4 to find a useful square. White gains time with Bg2, O-O and c4 or d4 while the " +
      "knight is still on its way.",
  },

  "1.Nf3 c5 2.g3 Qc7": {
    strategy:
      "Brings the queen out before any minor piece. After d4 cxd4 Nxd4 the knight can jump to " +
      "b5 and hit the queen, while 2...Nc6 reaches the same set-ups without that exposure.",
  },

  "1.Nf3 c5 2.g3 Qb6": {
    strategy:
      "Hits b2, but the bishop on c1 guards it, and the exposed queen becomes a target: Nc3 " +
      "followed by Na4 or Nd5 attacks it with tempo while Black still has no piece developed.",
  },

  "1.Nf3 c5 2.g3 Qa5": {
    strategy:
      "Pins the d2-pawn to the king, so the d-pawn cannot move until Nc3 or c3 blocks the " +
      "diagonal, but the queen leaves d8 before a single piece is out. White simply develops " +
      "with Bg2, O-O and Nc3, and Black has spent time on a queen with nothing to attack.",
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
      "White builds freely with Bg2, O-O and c4 or d3.",
  },

  "1.Nf3 c5 2.g3 a5": {
    strategy:
      "Advances a flank pawn that does nothing for the centre or for development. It leaves " +
      "b5 and b6 without pawn cover, and White continues Bg2, O-O and c4 or d3 with a free " +
      "tempo.",
  },

  "1.Nf3 c5 2.g3 f6": {
    strategy:
      "Prepares ...e5 but takes f6 from the king's knight and weakens e6 and the e8-h5 " +
      "diagonal with no piece developed. White develops with Bg2 and O-O and takes space with " +
      "d4 or c4 while Black's development lags.",
  },

  "1.Nf3 c5 2.g3 f5": {
    strategy:
      "Stakes out e4 in Dutch style, but with nothing developed it weakens e6 and the e8-h5 " +
      "diagonal. Nh4 hits f5 at once, so Black must spend another tempo on ...e6 or ...g6 to " +
      "hold the pawn.",
  },

  "1.Nf3 c5 2.g3 h6": {
    strategy:
      "Takes g5 from White's knight, but nothing is threatened there yet, and the move does " +
      "nothing for the centre or development. White gains a tempo for Bg2, O-O and c4 or d3.",
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
      "Hangs the e-pawn: nothing defends it, so 3.Nxe5 simply wins a pawn. After 3...Nc6 " +
      "4.Nxc6 dxc6 Black's queen and c8-bishop have open lines, but Black is a clean pawn " +
      "down.",
  },

  "1.Nf3 c5 2.g3 g5": {
    strategy:
      "Hangs the g-pawn: 3.Nxg5 wins it, because the queen's diagonal is closed by the " +
      "e7-pawn and nothing else guards g5. Black is left with a loosened kingside as well.",
  },
};
