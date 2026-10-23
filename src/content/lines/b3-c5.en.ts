import type { OpeningTexts } from "../book.ts";

// English prose for b3-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.b3 c5 2.Bb2": {
    strategy:
      "Puts the bishop on the long diagonal, where it eyes the centre and g7. White keeps the " +
      "choice of plan: e4 for a Sicilian with b3 played, c4 for a Symmetrical English, or the " +
      "quiet set-up with e3, Nf3, Be2 and O-O. Black most often replies 2...Nc6, usually met " +
      "by 3.e3 or 3.Nf3.",
  },

  "1.b3 c5 2.e3": {
    strategy:
      "Opens the f1-bishop's diagonal and supports a later d4 or f4, with Bb2 still to come. " +
      "Once the bishop arrives the game transposes to the 2.Bb2 lines, with Nf3, Be2, O-O and " +
      "d3 or Nbd2 to follow. The pawn is committed before Black has shown whether ...e5, " +
      "...d5 or ...Nf6 is coming, but nothing is conceded.",
  },

  "1.b3 c5 2.c4": {
    strategy:
      "Turns the game into a Symmetrical English in which b3 is already played: the c4-pawn " +
      "controls d5 and b5, and Bb2, Nc3 and g3 with Bg2 can follow. Sound but slow, it lets " +
      "Black meet Bb2 by blocking the diagonal with ...Nc6 and ...e5 or contesting it with " +
      "...g6 and ...Bg7.",
  },

  "1.b3 c5 2.e4": {
    strategy:
      "Takes space in the centre and reaches a Sicilian in which White has already played b3, " +
      "with Bb2 to follow along the long diagonal. Sound, but b3 is a slow move in that " +
      "structure: Black develops comfortably with ...Nc6, ...e6 and ...d5, and the c6-knight " +
      "covers d4 and e5 on the bishop's diagonal.",
  },

  "1.b3 c5 2.g3": {
    strategy:
      "Prepares Bg2 to go with Bb2: in the double fianchetto both bishops bear on the centre " +
      "from the flanks, with Nf3, O-O and d3 or c4 to follow. Sound, but with no central pawn " +
      "and no knight developed, White lets Black take space with ...Nc6, ...e5 or ...d5.",
  },

  "1.b3 c5 2.Nf3": {
    strategy:
      "Develops the king's knight towards d4 and e5 and keeps Bb2, e3, g3 and c4 all " +
      "available. It is sound, but the knight blocks the f-pawn and gives up the option of an " +
      "early f4, and Black is free to choose between ...Nc6, ...e6 and ...d5.",
  },

  "1.b3 c5 2.d3": {
    strategy:
      "Prepares e4 and aims at a set-up with Bb2, Nf3 or Nd2, g3 and Bg2 in the style of a " +
      "King's Indian Attack. It is sound but passive, and gives Black time to take the centre " +
      "with ...Nc6, ...e5 and ...d5.",
  },

  "1.b3 c5 2.f4": {
    strategy:
      "Takes e5 under control and heads for a Bird's Opening set-up with Bb2, Nf3 and e3, in " +
      "which pawn and bishop both bear on e5. It is sound, but it opens the e1-h4 diagonal " +
      "towards the king, and Black can take the centre first with ...Nc6, ...Nf6 and ...d5.",
  },

  "1.b3 c5 2.d4": {
    strategy:
      "After 2...cxd4 White can recapture only with the queen, and 3.Qxd4 Nc6 hits it with " +
      "tempo. A central pawn is traded for Black's wing pawn, and White loses time while " +
      "Black develops.",
  },

  "1.b3 c5 2.c3": {
    strategy:
      "Prepares d4, but the pawn stands on the long diagonal and blocks the bishop that b3 " +
      "was meant to activate on b2. Black develops freely with ...Nc6, ...Nf6 and ...d5.",
  },

  "1.b3 c5 2.Nc3": {
    strategy:
      "Puts the knight on the diagonal the b3-pawn was meant to open for Bb2. After 2...d5 " +
      "the knight cannot take (3.Nxd5 Qxd5 costs a piece for a pawn), and 3.Bb2 d4 attacks it " +
      "with tempo, so Black gains space and time.",
  },

  "1.b3 c5 2.a3": {
    strategy:
      "Spends a tempo on a rook-pawn move that develops nothing and does not contest the " +
      "centre. Black takes space with ...Nc6, ...e5 or ...d5 unhindered.",
  },

  "1.b3 c5 2.a4": {
    strategy:
      "Advances the rook-pawn without developing a piece, and the a-pawn can no longer cover " +
      "b4, where a black knight supported by the c5-pawn can settle via ...Nc6. Black " +
      "develops and fights for the centre first.",
  },

  "1.b3 c5 2.f3": {
    strategy:
      "Takes f3 from the king's knight, opens the e1-h4 diagonal towards the king and " +
      "develops nothing. The follow-up e4 is slow, and Black occupies the centre with ...Nc6 " +
      "and ...d5 or ...e5.",
  },

  "1.b3 c5 2.h3": {
    strategy:
      "A waiting move on the kingside that develops nothing and does not contest the centre. " +
      "It denies g4 to a black piece, but Black has no use for that square yet and takes the " +
      "centre with ...Nc6, ...e5 or ...d5.",
  },

  "1.b3 c5 2.h4": {
    strategy:
      "Advances the rook-pawn without developing a piece or contesting the centre, and the " +
      "h-pawn can no longer cover g4. Black develops with ...Nc6, ...Nf6 and ...d5 at " +
      "leisure.",
  },

  "1.b3 c5 2.Na3": {
    strategy:
      "Places a knight on the rim, where it eyes b5 and c4 but is far from the centre and the " +
      "kingside. Black occupies the centre with ...Nc6, ...e5 or ...d5, and the knight needs " +
      "another move to become useful.",
  },

  "1.b3 c5 2.Ba3": {
    strategy:
      "Attacks c5 at once, but Black defends with ...e6 (the f8-bishop then guards the pawn: " +
      "3.Bxc5 Bxc5), ...b6 or ...d6. The bishop then stands on a3, away from the long " +
      "diagonal, and has achieved little.",
  },

  "1.b3 c5 2.Nh3": {
    strategy:
      "Puts the knight on the rim to reach f4 or g5, but after ...d5 or ...d6 Black can play " +
      "...Bxh3, and gxh3 leaves White with doubled h-pawns. Nf3 is the natural square.",
  },

  "1.b3 c5 2.g4": {
    strategy:
      "Advances the g-pawn without support: 2...Nf6 or 2...d5 attacks it, and White must " +
      "spend another move on h3, f3, Bh3 or g5. The kingside is loosened before any piece is " +
      "developed.",
  },

  "1.b3 c5 2.b4": {
    strategy:
      "Spends a second move on the b-pawn only to give it away: 2...cxb4 wins it, and after " +
      "3.Bb2 Nf6 the knight blocks the long diagonal, so White has no compensation for the " +
      "pawn.",
  },

  "1.b3 c5": {
    name: "Nimzowitsch–Larsen Attack: English Variation",
  },

  "1.b3 c5 2.Bb2 Nc6": {
    strategy:
      "Develops a piece and covers d4 and e5, the squares the b2-bishop aims at, while " +
      "keeping ...e6, ...Nf6, ...g6 and ...d5 all open. A typical course is 3.e3 Nf6 4.Nf3 g6 " +
      "5.Be2 Bg7 6.O-O b6, where the f6-knight blocks the diagonal to h8 until the bishop " +
      "reaches g7. After 3.e3 Black can also take central space with ...e5 or ...d5.",
  },

  "1.b3 c5 2.Bb2 Nf6": {
    strategy:
      "Develops a piece, blocks the long diagonal and eyes e4 and d5, leaving ...Nc6, ...e6, " +
      "...d5 and ...g6 all available. After 3.e3 Black can fianchetto with ...g6 and ...Bg7 " +
      "behind the knight. Once the g-pawn has moved, any knight move away from f6 drops the " +
      "h8 rook to Bxh8, so the knight stays until g7 is covered.",
  },

  "1.b3 c5 2.Bb2 d5": {
    strategy:
      "Takes the centre and makes e4 hard for White to achieve. Black follows with ...Nc6, " +
      "...Nf6 and ...e6, while White usually plays 3.e3, Nf3 and Bb5, a set-up that resembles " +
      "a Nimzo-Indian with colours reversed. The pawns on c5 and d5 can become targets for a " +
      "later d4 or c4, so Black has to keep them supported.",
  },

  "1.b3 c5 2.Bb2 b6": {
    strategy:
      "Supports c5 and prepares ...Bb7, copying White's set-up with a symmetrical structure. " +
      "It is sound, but it neither claims central space nor creates imbalance. After 3.e3 Bb7 " +
      "4.Nf3 e6 White keeps the easier game.",
  },

  "1.b3 c5 2.Bb2 d6": {
    strategy:
      "Opens the c8-bishop's diagonal and prepares ...e5, which the d6-pawn would support, or " +
      "...Nf6 followed by ...g6. It is sound but passive: Black waits, and White can take " +
      "space with e3 and d4 or choose 3.e4 for a Sicilian structure.",
  },

  "1.b3 c5 2.Bb2 e6": {
    strategy:
      "Opens the f8-bishop's diagonal and prepares ...d5, with ...Nf6 and ...Nc6 to follow; " +
      "against 3.e4 Black can reach a Sicilian set-up. Sound and flexible, but modest: the " +
      "c8-bishop stays shut in until ...b6 and ...Bb7, and Black claims no space yet.",
  },

  "1.b3 c5 2.Bb2 f5": {
    strategy:
      "Takes e4 in Dutch fashion and prepares ...Nf6 and ...g6. The kingside is loosened, " +
      "though: e6 and the e8–h5 diagonal are weak, and White can test it at once with 3.e4 " +
      "fxe4 4.Qh5+ g6 5.Qe5, hitting e4 and h8. Risky, and it demands accurate play from " +
      "Black.",
  },

  "1.b3 c5 2.Bb2 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c7 but not the centre, and blocks the " +
      "a-pawn. After 3.e3 and a3 White controls b4 and develops freely, while Black's knight " +
      "needs more moves to reach a useful square.",
  },

  "1.b3 c5 2.Bb2 Qc7": {
    strategy:
      "Brings the queen out before any piece, with no clear role. After 3.Nc3 and Nb5 the " +
      "knight attacks the queen, which must move again while White develops with tempo.",
  },

  "1.b3 c5 2.Bb2 Qb6": {
    strategy:
      "Brings the queen out early against the b3-pawn, which the a2- and c2-pawns both guard. " +
      "Nc3 and Na4 then hit the queen and the c5-pawn together, while Black's knights are " +
      "still at home.",
  },

  "1.b3 c5 2.Bb2 Qa5": {
    strategy:
      "Pins the d2-pawn against the king, but 3.Bc3 attacks the queen at once, keeps the " +
      "bishop on the long diagonal and forces the queen to move again. Black has developed " +
      "nothing else.",
  },

  "1.b3 c5 2.Bb2 Nh6": {
    strategy:
      "Puts the knight on the rim, aiming for f5 or g4, but gives up f6 and does nothing for " +
      "the centre. White develops with e3 and Nf3 and takes space with d4 or e4 while Black's " +
      "development lags.",
  },

  "1.b3 c5 2.Bb2 a6": {
    strategy:
      "Spends a tempo on a queenside pawn move that prepares ...b5 but develops nothing and " +
      "leaves the centre to White, who plays e3, Nf3 and Be2 or takes space with e4.",
  },

  "1.b3 c5 2.Bb2 a5": {
    strategy:
      "Prepares ...a4 against the b3-pawn, but develops nothing and weakens b5, where a white " +
      "piece can settle, since no black pawn can guard that square any more. White continues " +
      "with e3 and Nf3 and takes the centre at leisure.",
  },

  "1.b3 c5 2.Bb2 b5": {
    strategy:
      "Gains queenside space and prepares ...Bb7, but develops nothing. After 3.e3 the " +
      "f1-bishop attacks the pawn, so Black must spend another move defending it, usually " +
      "...a6, and a4 can undermine it later.",
  },

  "1.b3 c5 2.Bb2 f6": {
    strategy:
      "Takes f6 from the g8-knight and opens the e8–h5 diagonal, where Qh5+ becomes possible " +
      "once White's e-pawn has moved. The pawn blocks the b2-bishop but develops nothing.",
  },

  "1.b3 c5 2.Bb2 h6": {
    strategy:
      "Loses a tempo on a rook-pawn move that prepares ...g5, but while f6 is empty ...g5 " +
      "would open the b2–h8 diagonal and drop the h8 rook to Bxh8. Nothing is developed.",
  },

  "1.b3 c5 2.Bb2 h5": {
    strategy:
      "Gains kingside space but weakens g5 and g6 and develops nothing. White continues with " +
      "e3 and Nf3 and keeps the easier game while Black's pieces stay at home.",
  },

  "1.b3 c5 2.Bb2 e5": {
    strategy:
      "Leaves the pawn undefended on the long diagonal: 3.Bxe5 wins it, and ...Nc6 merely " +
      "drives the bishop back to b2 with White a clean pawn up.",
  },

  "1.b3 c5 2.Bb2 g6": {
    strategy:
      "Opens the long diagonal at once: 3.Bxh8 wins the rook, since nothing guards h8. The " +
      "fianchetto needs ...Nf6 first, which blocks the diagonal at f6.",
  },

  "1.b3 c5 2.Bb2 g5": {
    strategy:
      "Opens the b2–h8 diagonal: 3.Bxh8 wins the rook outright, and ...Bg7 would be met by " +
      "Bxg7. The advanced g-pawn also weakens the kingside for good.",
  },

  "1.b3 c5 2.Bb2 c4": {
    strategy:
      "Gives up the c-pawn: 3.bxc4 wins it. 3...Qb6 hits the b2-bishop now that b3 is empty, " +
      "but Bc3 or Qc1 deals with that, and White's doubled c-pawns are no real compensation.",
  },

  "1.b3 c5 2.e3 Nc6": {
    strategy:
      "Develops the knight to a square from which it controls d4 and b4 and keeps every plan " +
      "open: ...Nf6 with ...g6 and ...Bg7, ...e6 with ...d5, or ...e5. Against 3.Bb2 the " +
      "knight already guards e5, so a later ...e5 closes the bishop's diagonal without losing " +
      "the pawn. Nothing is conceded, and the c5-pawn can be supported later by ...b6, ...d6 " +
      "or ...e6.",
  },

  "1.b3 c5 2.e3 Nf6": {
    strategy:
      "Develops the king's knight, controls e4 and d5 and covers h5 and g4. Black keeps the " +
      "choice between ...Nc6, ...e6 with ...d5 and ...g6 with ...Bg7 until White has revealed " +
      "the set-up, and meets 3.Bb2 with ...e6 or ...Nc6. The move reaches the same position " +
      "as 1.b3 Nf6 2.e3 c5.",
  },

  "1.b3 c5 2.e3 d5": {
    strategy:
      "Claims the centre at once and takes e4 from White's pieces. After 3.Bb2 Black develops " +
      "with ...Nc6 and ...Nf6, and play can turn into a reversed Nimzo-Indian after Nf3 and " +
      "Bb5. White can challenge the pawn with c4, and the c8-bishop, freed by ...d5, can come " +
      "out to f5 or g4 before ...e6.",
  },

  "1.b3 c5 2.e3 e6": {
    strategy:
      "Prepares ...d5 behind a solid pawn and opens the f8-bishop, which now guards c5. " +
      "Against 3.Bb2 Black continues with ...Nf6, ...Nc6 or ...d5 and keeps a sound, flexible " +
      "position. The cost is the c8-bishop: e6 shuts it in, so it usually comes out by ...b6 " +
      "and ...Bb7.",
  },

  "1.b3 c5 2.e3 b6": {
    strategy:
      "Defends c5 and prepares ...Bb7, a mirror-image fianchetto aimed at g2. Sound, but it " +
      "copies White a tempo late, leaves the centre to Bb2, Nf3 and c4, and develops no piece " +
      "yet, which is why it is not recommended.",
  },

  "1.b3 c5 2.e3 d6": {
    strategy:
      "Supports c5 and opens the c8-bishop, a solid Sicilian-like set-up with ...Nf6, ...Nc6 " +
      "and ...g6 to follow. It gives up the central space that ...d5 would take, so White " +
      "gets an easy game with Bb2, Nf3 and c4, which is why it is not recommended.",
  },

  "1.b3 c5 2.e3 e5": {
    strategy:
      "Takes space with pawns on c5 and e5 and prepares ...Nc6 and ...d6. The e5-pawn needs a " +
      "defender as soon as Bb2 arrives, and d5 becomes a hole that a white knight can occupy " +
      "after c4 and Nc3.",
  },

  "1.b3 c5 2.e3 g6": {
    strategy:
      "Prepares ...Bg7 to meet Bb2 on the long diagonal, with ...Nc6 and ...Nf6 to follow in " +
      "a Dragon-like set-up. Sound, but slow: the g-pawn is committed before a knight is out, " +
      "which is why it is not recommended over ...Nc6 or ...Nf6.",
  },

  "1.b3 c5 2.e3 Na6": {
    strategy:
      "Aims at b4 and c7 from the rim, but 3.Bxa6 bxa6 leaves Black with doubled, isolated " +
      "a-pawns. Otherwise the knight is far from d4 and e5 and needs more moves to become " +
      "useful.",
  },

  "1.b3 c5 2.e3 Qc7": {
    strategy:
      "Defends c5 and eyes h2 along the b8-h2 diagonal, but brings the queen out before any " +
      "piece is developed. Nc3-b5 hits it with tempo, and Bb2 and Nf3 come with free " +
      "development.",
  },

  "1.b3 c5 2.e3 Qb6": {
    strategy:
      "Eyes the b3-pawn, which a2 and c2 guard twice, so nothing is threatened. The queen can " +
      "be chased by a2-a4-a5 or Nc3-a4 while White develops with Bb2.",
  },

  "1.b3 c5 2.e3 Qa5": {
    strategy:
      "Brings the queen out early to a5, where it eyes a2 and c3 but attacks nothing that is " +
      "not guarded. White develops with Bb2 and Nf3 while the queen has no targets and Black " +
      "has no piece out.",
  },

  "1.b3 c5 2.e3 Nh6": {
    strategy:
      "A rim knight: from h6 it eyes f5 and g4, but not d5 and e4, the central squares it " +
      "would cover from f6. White develops with Bb2 and Nf3, and the knight needs another " +
      "move, such as ...Nf5, to take part.",
  },

  "1.b3 c5 2.e3 a6": {
    strategy:
      "Spends a tempo on queenside space that develops nothing and does nothing for the " +
      "centre. White plays Bb2 and Nf3 while Black still has to find squares for the knights " +
      "and bishops.",
  },

  "1.b3 c5 2.e3 a5": {
    strategy:
      "Intends ...a4 to challenge b3, but spends a tempo on the rook pawn and does nothing " +
      "for development or the centre. Bb2 and Nf3 come with free development meanwhile.",
  },

  "1.b3 c5 2.e3 f5": {
    strategy:
      "Grabs space, but opens the e8-h5 diagonal: 3.Qh5+ forces ...g6, which leaves f6 and h6 " +
      "weak. White then develops with Bb2 and Nf3 against a loosened kingside.",
  },

  "1.b3 c5 2.e3 g5": {
    strategy:
      "Opens the long diagonal to h8: 3.Bb2 attacks the rook, so Black must block the " +
      "diagonal with a move such as ...Bg7, ...Nf6 or ...f6. h4 undermines the pawn, and the " +
      "kingside is weakened for no gain.",
  },

  "1.b3 c5 2.e3 h6": {
    strategy:
      "A waiting move that takes g5 from White's pieces but does nothing for development or " +
      "the centre. White plays Bb2 and Nf3 and gains time.",
  },

  "1.b3 c5 2.e3 h5": {
    strategy:
      "Loosens the kingside for no reason: the h-pawn can never again guard g6 or g5, and the " +
      "move develops nothing. Bb2 and Nf3 come with free development.",
  },

  "1.b3 c5 2.e3 b5": {
    strategy:
      "Drops a pawn: 3.Bxb5 takes it because nothing defends b5, and after 3...Qa5 the bishop " +
      "simply retreats with 4.Bc4.",
  },

  "1.b3 c5 2.e3 f6": {
    strategy:
      "Opens the e8-h5 diagonal: 3.Qh5+ g6 4.Qxc5 wins the c-pawn, which nothing guards, and " +
      "Black has also taken the best square from the king's knight.",
  },

  "1.b3 c5 2.e3 c4": {
    strategy:
      "Pushes a pawn that cannot be held: 3.Bxc4 (or 3.bxc4) takes it, as nothing defends c4 " +
      "and Black has no development to show for it.",
  },
};
