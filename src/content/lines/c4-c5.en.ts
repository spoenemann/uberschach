import type { OpeningTexts } from "../book.ts";

// English prose for c4-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.c4 c5 2.Nf3": {
    strategy:
      "Develops the king's knight, controls d4 and e5 and prepares d4 with a knight " +
      "recapture: after 2...Nf6 3.d4 cxd4 4.Nxd4 the game resembles an Open Sicilian with " +
      "White's pawn on c4 instead of e4. Black can also choose 2...Nc6 with ...g6 and ...Bg7, " +
      "or the Hedgehog with ...e6, ...b6 and ...Bb7. White keeps Nc3 and g3 in reserve.",
  },

  "1.c4 c5 2.Nc3": {
    name: "English Opening: Symmetrical Variation, Normal Variation",
    background:
      "ECO files 1.c4 c5 2.Nc3 as A34, the Normal Variation of the Symmetrical English; with " +
      "2...Nc6 it becomes the Two Knights Variation (A35), and 3.g3 then gives the Fianchetto " +
      "Variation (A36).",
    strategy:
      "Develops the queen's knight and puts d5 and e4 under watch: after 2...d5 3.cxd5 Black " +
      "cannot recapture with the queen, since Nxd5 wins it. White usually follows with g3 and " +
      "Bg2, then Nf3 or e3 and Nge2, keeping the d4 break and a later e4 available. Black " +
      "often mirrors with ...Nc6, ...g6 and ...Bg7, and the symmetry can last for many moves.",
  },

  "1.c4 c5 2.g3": {
    strategy:
      "Prepares Bg2, which presses on b7 and the centre along the long diagonal, and keeps " +
      "both Nc3 and Nf3 available. After 2...Nc6 3.Nc3 g6 4.Bg2 Bg7 it reaches the Fianchetto " +
      "Variation, where White follows with Nf3 and O-O. Black can also set up with ...Nc6 and " +
      "...e5, since no white knight on f3 yet attacks e5.",
  },

  "1.c4 c5 2.b3": {
    strategy:
      "Prepares Bb2 on the long diagonal, aiming at e5 and g7, with e3 and Nf3 or Nc3 to " +
      "follow. The plan is sound but slow: no knight is out yet, so Black can blunt the " +
      "bishop with ...Nc6 and ...e5 or contest the diagonal with ...g6 and ...Bg7.",
  },

  "1.c4 c5 2.d3": {
    strategy:
      "Prepares e4 with pawn support and frees the c1-bishop, usually followed by g3, Bg2 and " +
      "e4 for a closed set-up. It is solid but modest, and Black can take the centre with " +
      "...Nc6 and ...e5 or with ...d5 before White has developed a piece.",
  },

  "1.c4 c5 2.e3": {
    strategy:
      "Opens the f1-bishop and prepares d4, so that White can recapture with the e-pawn: " +
      "after 2...Nf6 3.d4 cxd4 4.exd4 d5 the pawn structure of the Panov–Botvinnik Attack in " +
      "the Caro-Kann appears. The move is solid but modest, and Black can also set up with " +
      "...Nc6, ...g6 and ...Bg7 or take space with ...e5.",
  },

  "1.c4 c5 2.e4": {
    strategy:
      "Takes space with pawns on c4 and e4, clamping d5, and White usually completes the " +
      "set-up with Nc3, g3, Bg2 and Nge2. The price is a permanent hole on d4, which no white " +
      "pawn can cover any more, so Black aims ...Nc6, ...g6, ...Bg7 and ...Nd4 at it. The " +
      "move is sound, but it hands Black a clear plan.",
  },

  "1.c4 c5 2.d4": {
    strategy:
      "Challenges the c-pawn before a knight can recapture on d4. After 2...cxd4 3.Qxd4 Nc6 " +
      "the queen is attacked and loses a tempo, and after 3.Nf3 Black can hold the pawn with " +
      "3...e5, since 4.Nxe5 Qa5+ wins the knight.",
  },

  "1.c4 c5 2.b4": {
    name: "English Opening: Wing Gambit",
    strategy:
      "Gives up the b-pawn to deflect the c-pawn from the fight for d4. After 2...cxb4 White " +
      "plays a3 or d4 for open lines and quick development, but Black keeps a sound extra " +
      "pawn and can consolidate with ...Nf6 and ...e6, so the compensation is thin.",
  },

  "1.c4 c5 2.a3": {
    strategy:
      "Prepares b4, but spends a tempo on a rim pawn that does nothing for the centre or " +
      "development. Black develops with ...Nc6 and ...Nf6 and takes space with ...d5 or " +
      "...e5, and nothing in the position makes a3 urgent.",
  },

  "1.c4 c5 2.a4": {
    strategy:
      "Stops ...b5 and gains queenside space, but weakens b4 and spends a tempo that does " +
      "nothing for the centre or development. Black plays ...Nc6 and ...Nf6, or ...d5, and " +
      "develops freely.",
  },

  "1.c4 c5 2.f3": {
    strategy:
      "Prepares e4 but blocks the g1-knight's best square and weakens e3 and the e1-h4 " +
      "diagonal. It develops nothing, and Black takes the centre with ...Nc6 and ...e5 or " +
      "with ...d5.",
  },

  "1.c4 c5 2.f4": {
    strategy:
      "Takes e5 for a Dutch-style structure, but develops no piece and weakens e3 and the " +
      "e1-h4 diagonal. Black answers ...Nc6, ...g6 and ...d6, or hits the centre with ...d5, " +
      "and White's kingside is loosened before the pieces are out.",
  },

  "1.c4 c5 2.g4": {
    strategy:
      "Gains kingside space but empties g2, opening the long diagonal towards the rook on h1. " +
      "After 2...d5 the c8-bishop attacks the g4-pawn, and 3.cxd5 Qxd5 also hits the rook, so " +
      "White must spend another move on f3, Nf3 or Rg1.",
  },

  "1.c4 c5 2.h3": {
    strategy:
      "Takes g4 from a black bishop or knight but spends a tempo on a rim pawn that the " +
      "position does not call for. Black takes the centre with ...Nc6, ...d5 or ...e5 while " +
      "White's development stands still.",
  },

  "1.c4 c5 2.h4": {
    strategy:
      "Gains kingside space and prepares h5, but does nothing for the centre or development. " +
      "Black takes the centre with ...Nc6 and ...d5 and develops freely.",
  },

  "1.c4 c5 2.Na3": {
    strategy:
      "Heads for c2, where it supports d4, or for b5, but on a3 the knight guards no central " +
      "square and blocks the a-pawn. Black takes the centre with ...Nc6, ...d5 or ...e5 while " +
      "the knight needs a second move to reach a useful post.",
  },

  "1.c4 c5 2.Nh3": {
    strategy:
      "Puts the knight on the rim, where it eyes f4 and g5. Once ...d5 or ...d6 opens the " +
      "c8-bishop, ...Bxh3 and gxh3 doubles White's kingside pawns, and the knight does " +
      "nothing for the centre.",
  },

  "1.c4 c5 2.Qc2": {
    strategy:
      "Brings the queen out before any piece has moved. It supports c4 and a later e4, but " +
      "Black develops with ...Nc6 and ...Nf6 and can gain a tempo later with ...Nb4, while " +
      "White's own pieces are still at home.",
  },

  "1.c4 c5 2.Qb3": {
    strategy:
      "Develops the queen before any piece and threatens nothing, since the bishop guards b7. " +
      "It also takes b3 from the b-pawn, so a fianchetto is no longer possible, while Black " +
      "plays ...Nc6 and ...Nf6 with a free game.",
  },

  "1.c4 c5 2.Qa4": {
    strategy:
      "Brings the queen out early to a4, where it bears only on the guarded pawns on a7 and " +
      "d7 and threatens nothing. Black develops with ...Nc6 and ...Nf6, and ...a6 followed by " +
      "...b5 can harass the queen, while White's own development falls behind.",
  },

  "1.c4 c5": {
    name: "English Opening: Symmetrical Variation",
    background:
      "So named because both players have advanced the c-pawn two squares. Alongside the " +
      "Reversed Sicilian (1...e5) it is one of the broad categories of defence to the English " +
      "Opening; ECO classes it as A30 to A39.",
  },

  "1.c4 c5 2.Nc3 Nc6": {
    name: "English Opening: Symmetrical Variation, Two Knights Variation",
    strategy:
      "Develops the knight to its natural square, where it joins the c5-pawn in guarding d4 " +
      "and also covers e5 and b4. After 3.g3 Black can mirror with ...g6 and ...Bg7 and then " +
      "choose between ...e5 with ...Nge7, which clamps d4 but leaves d5 to White, and the " +
      "fully symmetrical ...Nf6. Another plan is ...e6 with ...Nf6 and ...d5.",
  },

  "1.c4 c5 2.Nc3 Nf6": {
    strategy:
      "Develops the king's knight towards the centre, where it covers d5 and e4. After 3.Nf3 " +
      "Black can mirror with ...Nc6, build the Hedgehog with ...e6, ...b6, ...Bb7 and ...Be7, " +
      "or strike with 3...d5 4.cxd5 Nxd5. White then challenges the centre with 5.d4 or 5.e4, " +
      "or plays 5.g3 and allows Black more central space.",
  },

  "1.c4 c5 2.Nc3 e6": {
    strategy:
      "Opens the f8-bishop's diagonal and prepares ...d5, while keeping the Hedgehog set-up " +
      "with ...Nf6, ...b6, ...Bb7, ...Be7 and later ...a6 and ...d6 in reserve. After ...d5 " +
      "the centre takes a Tarrasch-style shape instead. The cost is a c8-bishop that stays " +
      "shut in until ...b6, a slightly weak d6, and White's option of 3.Nf3 with g3 or an " +
      "early e4 to take space.",
  },

  "1.c4 c5 2.Nc3 g6": {
    strategy:
      "Prepares ...Bg7, whose long diagonal presses on d4, c3 and b2. After 3.g3 Bg7 4.Bg2 " +
      "Nc6 the position is fully symmetrical; with ...Nf6, ...b6 and ...Bb7 instead of " +
      "...Nc6, Black reaches the double fianchetto, a solid set-up that is hard to beat. " +
      "White can also strike early with d4, backed by Nf3 or e3, to open the centre before " +
      "Black's pieces are out.",
  },

  "1.c4 c5 2.Nc3 b6": {
    strategy:
      "Prepares ...Bb7, from where the bishop presses on the long diagonal and e4, and keeps " +
      "both the Hedgehog with ...e6 and the double fianchetto with ...g6 in reserve. Played " +
      "this early, it allows 3.e4, which blunts the diagonal and gains central space before " +
      "Black has committed the g8-knight or the d-pawn. Sound, but less flexible than ...Nc6 " +
      "or ...Nf6.",
  },

  "1.c4 c5 2.Nc3 d6": {
    strategy:
      "Opens the c8-bishop's diagonal and prepares ...e5, usually together with ...Nc6, ...g6 " +
      "and ...Bg7. It is sound but commits the d-pawn before the knights, leaving White free " +
      "to choose between a fianchetto with g3 and Bg2 and an early d4 after Nf3. Less " +
      "flexible than ...Nc6 or ...Nf6.",
  },

  "1.c4 c5 2.Nc3 d5": {
    strategy:
      "Strikes in the centre at once, but after 3.cxd5 the queen cannot recapture because " +
      "Nxd5 wins it, so Black needs 3...Nf6. After 4.Nf3 Nxd5 play returns to the 2...Nf6 " +
      "lines, but White can also try 4.e4, when 4...Nxe4 5.Nxe4 Qxd5 6.Nc3 leaves Black with " +
      "only a pawn for a piece. Playable but rare.",
  },

  "1.c4 c5 2.Nc3 e5": {
    strategy:
      "Takes the centre with both the c- and e-pawns, but leaves d5 without a pawn to control " +
      "it. White plays g3, Bg2 and Nf3 and can settle a knight on d5, which Black can only " +
      "challenge with pieces. Playable but rarely preferred.",
  },

  "1.c4 c5 2.Nc3 Na6": {
    strategy:
      "Aims for b4 or c7, but the knight on the rim does nothing for the centre, and ...Nb4 " +
      "is met by a3 with a gain of time. White develops with g3 and Nf3 or takes space with " +
      "e4.",
  },

  "1.c4 c5 2.Nc3 Qc7": {
    strategy:
      "Brings the queen out before any minor piece, and 3.Nb5 attacks it at once, so it must " +
      "move again and Black falls behind in development. ...Nc6 or ...Nf6 develops with more " +
      "effect.",
  },

  "1.c4 c5 2.Nc3 Qb6": {
    strategy:
      "Hits b2, but the bishop on c1 guards it, so nothing is threatened, and 3.Nd5 attacks " +
      "the queen so that it must move again. Black loses time while White's knight takes up a " +
      "central post.",
  },

  "1.c4 c5 2.Nc3 Qa5": {
    strategy:
      "Lines up on the c3-knight and the e1-king, so the knight is pinned as soon as White's " +
      "d-pawn moves. Nothing hangs, since the b2- and d2-pawns guard the knight, and White " +
      "develops with Nf3 and g3 while Black's minor pieces stay at home.",
  },

  "1.c4 c5 2.Nc3 Nh6": {
    strategy:
      "Heads for f5 or g4, but the knight on the rim does nothing for the centre, and once " +
      "White's d-pawn has moved, Bxh6 gxh6 doubles Black's pawns. ...Nf6 or ...Nc6 develops " +
      "with more effect.",
  },

  "1.c4 c5 2.Nc3 a6": {
    strategy:
      "Prepares ...b5, but the break does not work yet: after ...b5 cxb5 axb5 Nxb5 White has " +
      "won a pawn. Meanwhile no piece comes out, and White uses the tempo for Nf3 and d4 or " +
      "for g3 and Bg2.",
  },

  "1.c4 c5 2.Nc3 a5": {
    strategy:
      "Controls b4 and gains queenside space, but develops nothing and weakens b5 and b6 for " +
      "good. White develops with g3 and Nf3 and takes the centre with d4 or e4 while Black's " +
      "pieces are still at home.",
  },

  "1.c4 c5 2.Nc3 f6": {
    strategy:
      "Prepares ...e5 but takes f6 from the g8-knight, weakens the e8-h5 diagonal and " +
      "develops nothing. White answers with d4 or with g3 and Nf3 and enjoys the freer game.",
  },

  "1.c4 c5 2.Nc3 f5": {
    strategy:
      "Takes e4 in Dutch style, but loosens the kingside with nothing developed and opens the " +
      "e8-h5 diagonal. White develops with g3, Bg2 and Nf3 and keeps d4 or a later e4 break " +
      "in hand.",
  },

  "1.c4 c5 2.Nc3 h6": {
    strategy:
      "Prevents a later Bg5, which is not even possible while White's d-pawn stands on d2, " +
      "and develops nothing. White uses the tempo for Nf3 and d4 or for g3 and Bg2.",
  },

  "1.c4 c5 2.Nc3 h5": {
    strategy:
      "Gains kingside space and prepares ...h4, but develops nothing and loosens g5 and g6. " +
      "White continues in the centre with Nf3 and d4 while Black's pieces are still at home.",
  },

  "1.c4 c5 2.Nc3 b5": {
    strategy:
      "Offers a pawn that White simply takes with 3.Nxb5 or 3.cxb5, since nothing guards b5. " +
      "Black has no lead in development or other compensation to show for it.",
  },

  "1.c4 c5 2.Nc3 g5": {
    strategy:
      "Opens the long diagonal to the h8-rook and puts the pawn on the c1-bishop's diagonal. " +
      "After 3.d4 cxd4 4.Qxd4 the queen attacks the rook and Bxg5 is in the air, so Black " +
      "loses the pawn or must weaken the kingside further with ...f6.",
  },

  "1.c4 c5 2.g3 Nc6": {
    strategy:
      "Develops a piece and watches d4 and e5 at once while every set-up stays open. After " +
      "3.Bg2 Black can mirror the fianchetto with ...g6 and ...Bg7, take space with ...e5, or " +
      "aim for ...Nf6 and ...e6. The knight also blocks the long diagonal, so Bg2 does not " +
      "press on b7, and ...b6 with ...Bb7 stays possible later.",
  },

  "1.c4 c5 2.g3 Nf6": {
    strategy:
      "Develops the king's knight toward e4 and d5 and keeps ...Nc6, ...g6, ...e6 and ...d5 " +
      "open; the position is the same as after 1.c4 Nf6 2.g3 c5. After 3.Bg2 Black can mirror " +
      "the fianchetto with ...Nc6 and ...g6, or strike with ...d5 and meet 4.cxd5 by " +
      "recapturing with the knight. The knight does not yet watch d4, so White keeps the " +
      "choice of Nc3, Nf3 and d4.",
  },

  "1.c4 c5 2.g3 e6": {
    strategy:
      "Opens the f8-bishop and keeps ...d5, ...Nf6 and ...Nc6 available. Black can head for a " +
      "Hedgehog set-up with ...b6, ...Be7 and ...d6, bringing the c8-bishop out once the long " +
      "diagonal is secured, or strike with ...d5 after Bg2. The cost is a slight cramp: the " +
      "c8-bishop stays shut in behind e6 until ...b6 opens the long diagonal for it.",
  },

  "1.c4 c5 2.g3 g6": {
    strategy:
      "Mirrors White's set-up: ...Bg7 follows, then ...Nc6, ...Nf6 and ...O-O, with the " +
      "bishop eyeing d4 and b2 along the long diagonal. Until the bishop arrives, the " +
      "diagonal to the rook on h8 is open, so 3.d4 cxd4 4.Qxd4 hits it. 4...Nf6 blocks, since " +
      "4...Bg7 loses the bishop to 5.Qxg7, and ...Nc6 then gains time on the queen.",
  },

  "1.c4 c5 2.g3 Qc7": {
    strategy:
      "Defends the c5-pawn, covers e5 and leaves room for ...Nc6, ...e6 and ...Nf6 in a " +
      "flexible set-up. The queen commits before any piece is out, so Nc3 followed by Nb5 can " +
      "gain time against it. The plain 2...Nc6 reaches similar positions without that " +
      "exposure.",
  },

  "1.c4 c5 2.g3 b6": {
    strategy:
      "Prepares a Hedgehog or double-fianchetto set-up with ...e6, ...Nf6 and ...Be7, or with " +
      "...g6. The long diagonal is the problem: after 3.Bg2 the bishop hits the rook on a8, " +
      "and 3...Bb7 loses the bishop to 4.Bxb7, so ...Nc6 usually has to come first. The plan " +
      "is sound but slower than 2...Nc6.",
  },

  "1.c4 c5 2.g3 d6": {
    strategy:
      "Opens the c8-bishop and prepares ...e5, with ...Nc6 and ...g6 or ...Nf6 completing a " +
      "compact set-up. The structure is sound but passive: the pawn commits early and makes " +
      "...d5 cost an extra tempo, so Bg2, Nc3, e3 and Nge2 give White the freer game.",
  },

  "1.c4 c5 2.g3 d5": {
    strategy:
      "Challenges the centre at once, and 3.cxd5 forces a choice. 3...Qxd5 hits the rook on " +
      "h1, but after 4.Nf3 the queen is exposed to Nc3, while 3...Nf6 4.Bg2 Nxd5 regains the " +
      "pawn with Bg2 and Nc3 pressing on the knight.",
  },

  "1.c4 c5 2.g3 e5": {
    strategy:
      "Takes the centre with c5 and e5 together; the position is the same as after 1.c4 e5 " +
      "2.g3 c5. With no pawn on c6 or e6, d5 becomes a hole that Bg2 and Nc3 aim at, and " +
      "White can prepare the d4 break with e3 and Nge2. Sound, but Black has to develop " +
      "around that weakness with ...Nc6, ...g6 and ...Nge7 or ...Nf6.",
  },

  "1.c4 c5 2.g3 f5": {
    strategy:
      "Stakes out e4 in Dutch style and can be followed by ...Nf6, ...g6 and ...Bg7. With " +
      "nothing developed yet it loosens e6 and the king's position, and White answers with " +
      "Bg2, Nc3 and Nf3 for the freer game.",
  },

  "1.c4 c5 2.g3 Na6": {
    strategy:
      "Puts the knight on the rim, where it contests neither d4 nor e5 and needs ...Nc7 or " +
      "...Nb4 to find a useful square. White gains time with Bg2, Nc3 and e3 while the knight " +
      "is still on its way.",
  },

  "1.c4 c5 2.g3 Qb6": {
    strategy:
      "Hits b2, but Bc1 covers it, and the exposed queen becomes a target: Nc3 followed by " +
      "Nd5 attacks it with tempo while Black still has no piece developed.",
  },

  "1.c4 c5 2.g3 Qa5": {
    strategy:
      "Leaves d8 before a single piece is out and has no real target: the rook covers a2, and " +
      "the d2-pawn closes the diagonal to e1. White simply develops with Bg2, Nc3 and e3.",
  },

  "1.c4 c5 2.g3 Nh6": {
    strategy:
      "Places the knight on the rim, where it eyes f5 and g4 but no central square. Once " +
      "White's d-pawn moves, Bxh6 gxh6 doubles Black's pawns, and ...Nf5 can be met by g4 or " +
      "e4 with a gain of space.",
  },

  "1.c4 c5 2.g3 a6": {
    strategy:
      "A waiting move that prepares ...b5 but does nothing for the centre or for development. " +
      "White builds freely with Bg2, Nc3 and e3.",
  },

  "1.c4 c5 2.g3 a5": {
    strategy:
      "Adds a second guard to b4 and gains queenside space, but does nothing for the centre " +
      "or for development and turns b5 into a hole no Black pawn can cover. White continues " +
      "Bg2 and Nc3 with a free tempo.",
  },

  "1.c4 c5 2.g3 b5": {
    strategy:
      "Offers a pawn: after 3.cxb5 a6 Black hopes for Benko-style open a- and b-files, but " +
      "with no central pawn or developed piece behind the gambit, White's Bg2 and Nc3 meet it " +
      "calmly.",
  },

  "1.c4 c5 2.g3 f6": {
    strategy:
      "Prepares ...e5 but takes f6 from the king's knight and weakens e6 and the king's " +
      "position with nothing developed. White builds with Bg2 and Nc3 or opens the centre " +
      "with d4 against a loosened set-up.",
  },

  "1.c4 c5 2.g3 g5": {
    strategy:
      "Advances the g-pawn with nothing to support it. The reply 3.h4 hits it at once, and " +
      "3...h6? 4.hxg5 hxg5 5.Rxh8 wins a rook; even otherwise the kingside is loosened for " +
      "good.",
  },

  "1.c4 c5 2.g3 h6": {
    strategy:
      "A waiting move that does nothing for the centre or for development; the only plan it " +
      "supports is ...g5, which loosens the kingside. White gains a tempo for Bg2, Nc3 and " +
      "e3.",
  },

  "1.c4 c5 2.g3 h5": {
    strategy:
      "Prepares ...h4 to attack g3 and open the h-file, but costs a tempo with nothing " +
      "developed and loosens g5. White answers 3.h4, which stops the idea and keeps the " +
      "kingside shut.",
  },
};
