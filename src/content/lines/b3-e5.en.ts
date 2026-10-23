import type { OpeningTexts } from "../book.ts";

// English prose for b3-e5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.b3 e5 2.Bb2": {
    strategy:
      "Puts the bishop on the long diagonal against e5, which has no defender yet, so Black " +
      "holds it with 2...Nc6 or 2...d6. After 2...Nc6 3.e3 d5 4.Bb5 Bd6 5.f4 White strikes at " +
      "Black's broad centre from the wing, and since 5...exf4 loses the h8-rook to Bxg7, " +
      "Black defends e5 again with 5...Qe7 or 5...f6. With 3.c4 instead, White contests d5 in " +
      "the manner of a reversed Sicilian.",
  },

  "1.b3 e5 2.e3": {
    strategy:
      "Opens the f1-bishop's diagonal for Bb5 and keeps Bb2, Ne2 and a later f4 or d4 in " +
      "reserve. It usually transposes into the main line, for example 2...Nc6 3.Bb2 d5 4.Bb5 " +
      "Bd6 5.f4. The cost is that e5 is not yet attacked, so Black can choose a set-up first, " +
      "such as 2...d5 or 2...Nf6, and meet Bb2 with ...Nc6 or ...Bd6.",
  },

  "1.b3 e5 2.Nf3": {
    strategy:
      "Attacks e5 and develops, but 2...e4 drives the knight away: after 3.Nd4 c5 4.Nb5 d5 it " +
      "stands offside while Black gains space, and 3...Nc6 4.Nxc6 dxc6 frees Black's " +
      "c8-bishop and opens the d-file. Against 2...Nc6 3.Bb2 the game returns to familiar " +
      "Larsen set-ups. Sound, but it gives Black the easier choice.",
  },

  "1.b3 e5 2.c4": {
    strategy:
      "Reaches an English structure by transposition, with Bb2 against e5 and Nc3, g3 or e3 " +
      "to follow. Black holds e5 with ...Nc6 or ...d6 and develops with ...Nf6, so the bishop " +
      "gains little at first. Sound, but slower than the main moves.",
  },

  "1.b3 e5 2.d3": {
    strategy:
      "Supports a later e4 and makes room for Nd2 in a quiet set-up with g3, Bg2 and Nf3. It " +
      "challenges neither e5 nor d5, so Black builds a pawn centre with ...Nf6, ...Nc6 and " +
      "...d5. Sound, but passive.",
  },

  "1.b3 e5 2.d4": {
    strategy:
      "Challenges e5 at once. After 2...exd4 only the queen can recapture, and 3.Qxd4 Nc6 " +
      "drives it away with a gain of time for Black, while after 2...e4 the d4-pawn blocks " +
      "the long diagonal that b3 opened for the bishop. Playable, but White gets nothing more " +
      "than with the main moves.",
  },

  "1.b3 e5 2.e4": {
    strategy:
      "Takes the centre at once and lets Bb2 and Nf3 work against e5, with Nc3 and d4 as " +
      "later ideas. After ...Nf6 the e4-pawn needs protection, ...Bc5 eyes f2, and Black " +
      "develops easily with ...Nc6. Sound, but it gives up the flexibility of the Larsen " +
      "set-up and promises no more than Bb2.",
  },

  "1.b3 e5 2.Nc3": {
    strategy:
      "Develops a knight and covers e4 and d5, with e3 or g3 and Nf3 to follow. The knight " +
      "blocks the c-pawn and the long diagonal of a bishop on b2, and it does not stop Black " +
      "from taking the centre with ...Nf6, ...Nc6 and ...d5. Playable, but the knight commits " +
      "before White's plan is clear.",
  },

  "1.b3 e5 2.g3": {
    strategy:
      "Prepares Bg2 for a double fianchetto, with bishops on b2 and g2 aiming at the long " +
      "diagonals. It leaves the centre to Black, who can set up with ...Nc6, ...d6 and ...Nf6 " +
      "or take space with ...d5, and e5 is not attacked until Bb2 follows. Sound, but not " +
      "testing.",
  },

  "1.b3 e5 2.a3": {
    strategy:
      "Stops ...Bb4 but develops nothing and does not touch the centre. Black occupies it " +
      "with ...Nf6, ...Nc6 and ...d5, and the a3-pawn has no further task, so White is a " +
      "tempo behind.",
  },

  "1.b3 e5 2.a4": {
    strategy:
      "Gains queenside space and covers b5, but takes no part in the fight for the centre, " +
      "and with the pawn past a3 only c3 can still cover b4. Black develops freely with " +
      "...Nf6, ...Nc6 and ...d5.",
  },

  "1.b3 e5 2.c3": {
    strategy:
      "Prepares d4 to build a broad centre, but the pawn blocks the long diagonal that b3 was " +
      "meant to open for the bishop. Black strikes first with 2...d5 or 2...Nf6, and White " +
      "needs d4 and further tempi to catch up.",
  },

  "1.b3 e5 2.f3": {
    strategy:
      "Supports a later e4, but takes f3, the g1-knight's best square, and weakens the e1-h4 " +
      "diagonal, so that 2...Qh4+ forces 3.g3. White trades development for a slow structure, " +
      "and Black takes the centre with ...Nc6 and ...d5.",
  },

  "1.b3 e5 2.Nh3": {
    strategy:
      "Heads for f4 or g5, but the e5-pawn already covers f4 and the knight stands on the " +
      "rim. After 2...d5 the c8-bishop eyes h3, and ...Bxh3 gxh3 doubles White's h-pawns " +
      "while Black keeps a free centre.",
  },

  "1.b3 e5 2.Na3": {
    strategy:
      "Aims at c4, from where the knight would hit e5, but leaves it on the rim, away from " +
      "the centre. Black takes the centre with ...d5, which also covers c4, and develops with " +
      "...Nf6 and ...Nc6 while the knight still has to find a useful square.",
  },

  "1.b3 e5 2.Ba3": {
    strategy:
      "Offers to trade the bishop that b3 was meant to bring to the long diagonal, and after " +
      "2...Bxa3 3.Nxa3 the recapturing knight stands on the rim. Black then takes the centre " +
      "with ...d5 and ...Nf6.",
  },

  "1.b3 e5 2.h3": {
    strategy:
      "A waiting move that prevents ...Bg4 but neither develops a piece nor contests the " +
      "centre. Black replies with ...Nf6, ...Nc6 and ...d5 while Bb2 is still to be played.",
  },

  "1.b3 e5 2.h4": {
    strategy:
      "Aims for h5 and space on the kingside but takes no part in the centre and weakens g4. " +
      "Black develops with ...Nf6 and ...Nc6 and takes space with ...d5.",
  },

  "1.b3 e5 2.b4": {
    strategy:
      "Offers the b-pawn with no development behind it: 2...Bxb4 wins it, and after 3.Bb2 the " +
      "pressure on e5 is easily met by ...Nc6 or ...d6, leaving White a pawn down for " +
      "nothing.",
  },

  "1.b3 e5 2.f4": {
    strategy:
      "Offers the f-pawn without a lead in development: 2...exf4 wins it, and the weakened " +
      "e1-h4 diagonal makes ...Qh4+ a constant threat, for example 3.Bb2 Qh4+ 4.g3 fxg3 with " +
      "the h1-rook under fire after hxg3.",
  },

  "1.b3 e5 2.g4": {
    strategy:
      "Gains kingside space but leaves the pawn without support: ...d5 opens the c8-bishop " +
      "against g4, and f3, h3 and the long diagonal are weakened for good while nothing is " +
      "developed.",
  },

  "1.b3 e5": {
    name: "Nimzowitsch–Larsen Attack: Modern Variation",
    background:
      "Black's most popular and ambitious reply to 1.b3, chosen in about 45 percent of games.",
  },

  "1.b3 e5 2.Bb2 Nc6": {
    background:
      "The more common of the two natural ways to defend the e5-pawn after 2.Bb2; the other " +
      "is 2...d6. A model game is Bent Larsen against Brian Eley, Hastings 1972, won by White " +
      "after 3.e3 Nf6 4.Bb5 d6 5.Ne2.",
    strategy:
      "Defends e5 with a developing move and prepares ...Nf6 and ...d5, which would give " +
      "Black a broad pawn centre in front of the b2-bishop. White can allow this with 3.e3 " +
      "and attack the centre from the wing, for instance 3...d5 4.Bb5 Bd6 5.f4, or contest d5 " +
      "at once with 3.c4 in the style of a reversed Sicilian. The knight blocks the c-pawn, " +
      "and Black has to watch Bb5 and a later f4 against e5.",
  },

  "1.b3 e5 2.Bb2 d6": {
    strategy:
      "Holds e5 with a pawn and keeps the structure compact, with ...Nf6, ...Nc6 and ...Be7 " +
      "or ...g6 and ...Bg7 to follow. White can build with e3 and Ne2 and then challenge the " +
      "centre by d4 or f4, or play c4 for a reversed Closed Sicilian or English set-up. The " +
      "move is solid but passive: Black has less central space than with ...Nc6 and ...d5, " +
      "and the f8-bishop is restricted for a while.",
  },

  "1.b3 e5 2.Bb2 Qe7": {
    strategy:
      "Defends e5 and eyes the e-file, but the queen blocks the f8-bishop and invites Nc3 and " +
      "Nd5 with tempo. Sound enough, yet a knight or a pawn is the more natural defender, and " +
      "White develops with e3, Nc3 or c4 while the f8-bishop stays shut in.",
  },

  "1.b3 e5 2.Bb2 Bd6": {
    strategy:
      "Defends e5 with the bishop, but it stands in front of the d-pawn, so neither ...d6 nor " +
      "...d5 is possible and the c8-bishop stays shut in until the bishop moves again. Nc3 " +
      "and Nb5 gain time against it, and White can also build with e3 and Nf3. Playable, but " +
      "less harmonious than a knight or pawn defending e5.",
  },

  "1.b3 e5 2.Bb2 Nf6": {
    strategy:
      "Develops but leaves e5 en prise: 3.Bxe5 Nc6 4.Bb2 wins a clean pawn. The lead in " +
      "development after ...d5 and ...Bd6 is modest compensation, and White can neutralise it " +
      "with e3 and Nf3.",
  },

  "1.b3 e5 2.Bb2 d5": {
    strategy:
      "Strikes in the centre but ignores the attack on e5: 3.Bxe5 wins a clean pawn. Black's " +
      "lead in development after ...Nf6, ...Nc6 and ...Bd6 is not enough to pay for it.",
  },

  "1.b3 e5 2.Bb2 Qf6": {
    strategy:
      "Defends e5, but takes the natural f6 square from the g8-knight and exposes the queen. " +
      "Nc3 followed by Nd5 or Ne4 gains time against it, and once the e5-pawn leaves, the " +
      "b2-bishop hits f6 too.",
  },

  "1.b3 e5 2.Bb2 f6": {
    strategy:
      "Holds e5 with a pawn but takes f6 from the g8-knight and opens the e8–h5 diagonal, so " +
      "Qh5+ becomes possible once White's e-pawn has moved. The knight has to develop to e7 " +
      "or h6 instead.",
  },

  "1.b3 e5 2.Bb2 e4": {
    strategy:
      "Gains space and avoids the attack on e5, but the pawn is unsupported and the b2–g7 " +
      "diagonal opens. Nc3 attacks e4, f3 or d3 undermine it, and Black must spend time on " +
      "...Nf6 or ...d5 to keep it.",
  },

  "1.b3 e5 2.Bb2 Na6": {
    strategy:
      "Puts the knight on the rim and does nothing about the attack on e5: 3.Bxe5 wins a " +
      "clean pawn, and the knight on a6 is far from the centre and the kingside.",
  },

  "1.b3 e5 2.Bb2 Nh6": {
    strategy:
      "Sends the knight to the rim, where it guards f7 but not e5: 3.Bxe5 wins a pawn for " +
      "free.",
  },

  "1.b3 e5 2.Bb2 Ne7": {
    strategy:
      "Blocks the f8-bishop and does not defend e5: 3.Bxe5 wins a pawn, and chasing the " +
      "bishop with ...Nbc6 or ...Ng6 gains time but does not win the pawn back.",
  },

  "1.b3 e5 2.Bb2 Qg5": {
    strategy:
      "Defends e5 along the rank and eyes g2, which Bf1 covers. 3.Nf3 attacks queen and e5 " +
      "together, and once the queen moves, e5 is attacked twice and falls.",
  },

  "1.b3 e5 2.Bb2 Qh4": {
    strategy:
      "Eyes f2 and h2 but leaves e5 undefended. 3.Bxe5 wins a pawn at once, and 3.Nf3 attacks " +
      "queen and e5 together, so the early queen only loses time.",
  },

  "1.b3 e5 2.Bb2 Ke7": {
    strategy:
      "Blocks the queen and the f8-bishop, gives up castling and leaves e5 hanging: 3.Bxe5 " +
      "wins a pawn for nothing, and the king stays in the centre.",
  },

  "1.b3 e5 2.Bb2 Be7": {
    strategy:
      "Develops the bishop but leaves e5 hanging, and g7 is loose without the f8-bishop: " +
      "3.Bxe5 wins the pawn and threatens Bxg7 with an attack on h8, so Black must spend a " +
      "move on ...Nf6 or ...Bf6 and stays a pawn down.",
  },

  "1.b3 e5 2.Bb2 Bc5": {
    strategy:
      "Eyes f2 but leaves e5 hanging. 3.Bxe5 wins the pawn and also threatens Bxg7 and the " +
      "h8-rook, since the f8-bishop no longer guards g7.",
  },

  "1.b3 e5 2.Bb2 Bb4": {
    strategy:
      "Develops with an eye on c3 but leaves e5 hanging, and without the f8-bishop g7 is " +
      "loose: 3.Bxe5 wins the pawn and threatens Bxg7. A later c3 also gains a tempo on the " +
      "bishop.",
  },

  "1.b3 e5 2.Bb2 Ba3": {
    strategy:
      "Walks into Nxa3 or Bxa3: the bishop is attacked twice and not defended, so it simply " +
      "loses a piece for nothing.",
  },

  "1.b3 e5 2.Bb2 a6": {
    strategy:
      "Spends a tempo on a rook pawn and ignores the attack on e5: 3.Bxe5 wins a pawn for " +
      "nothing.",
  },

  "1.b3 e5 2.Bb2 a5": {
    strategy:
      "Advances a rook pawn without defending e5, so 3.Bxe5 wins a pawn; the pawn on a5 also " +
      "weakens the b5 square.",
  },

  "1.b3 e5 2.Bb2 b6": {
    strategy:
      "Prepares ...Bb7, but 3.Bxe5 takes the e-pawn first and ...Bb7 cannot win it back, " +
      "since g2 is covered by Bf1.",
  },

  "1.b3 e5 2.Bb2 b5": {
    strategy:
      "Gains queenside space and prepares ...Bb7, but ignores e5: 3.Bxe5 wins the pawn, and " +
      "the advanced b-pawn gives White further targets.",
  },

  "1.b3 e5 2.Bb2 c6": {
    strategy:
      "Prepares ...d5 but leaves e5 hanging: 3.Bxe5 wins the pawn, and ...c6 also takes the " +
      "natural c6 square from the b8-knight.",
  },

  "1.b3 e5 2.Bb2 c5": {
    strategy:
      "Takes space on the queenside but ignores the attack on e5: 3.Bxe5 Nc6 4.Bb2 leaves " +
      "White a clean pawn up.",
  },

  "1.b3 e5 2.Bb2 f5": {
    strategy:
      "Takes e4 away in Dutch style but does not defend e5: 3.Bxe5 wins a pawn, and the e8–h5 " +
      "diagonal is weakened.",
  },

  "1.b3 e5 2.Bb2 g6": {
    strategy:
      "Prepares a fianchetto, but once e5 falls the long diagonal reaches the h8-rook: 3.Bxe5 " +
      "wins the pawn with an attack on h8, so Black must spend the next move on ...Nf6 or " +
      "...f6.",
  },

  "1.b3 e5 2.Bb2 g5": {
    strategy:
      "Opens the long diagonal to h8 and ignores e5: 3.Bxe5 wins the pawn and attacks the " +
      "h8-rook, so Black must answer with ...Nf6 or ...f6 and has weakened the kingside for " +
      "nothing.",
  },

  "1.b3 e5 2.Bb2 h6": {
    strategy: "Wastes a tempo on a rook pawn and ignores the attack on e5: 3.Bxe5 wins a pawn.",
  },

  "1.b3 e5 2.Bb2 h5": {
    strategy:
      "Gains kingside space without defending e5: 3.Bxe5 wins the pawn, and the pawn on h5 " +
      "weakens g5 and g6.",
  },

  "1.b3 e5 2.e3 Nc6": {
    strategy:
      "Develops a knight toward the centre and defends e5 before Bb2 attacks it. The d-pawn " +
      "stays free for ...d5, and after 3.Bb2 d5 4.Bb5 Bd6 5.f4 White undermines Black's broad " +
      "centre from the wing. The knight blocks the c-pawn, which rules out ...c5 for now.",
  },

  "1.b3 e5 2.e3 d5": {
    strategy:
      "Takes the centre at once, so Black has the pawn duo on d5 and e5 before White has " +
      "developed a piece. The pawn does not defend e5, so 3.Bb2 is met by ...Nc6 or ...Bd6, " +
      "and after 3...Nc6 4.Bb5 Bd6 5.f4 White undermines the broad centre from the wing.",
  },

  "1.b3 e5 2.e3 Nf6": {
    strategy:
      "Develops toward the centre, watches e4 and d5, and keeps both ...d5 and ...d6 " +
      "available. The knight does not defend e5, so 3.Bb2 must be met by ...Nc6 or ...d6, and " +
      "after 3...Nc6 4.Bb5 Black holds the pawn with ...d6 or ...Bd6.",
  },

  "1.b3 e5 2.e3 d6": {
    strategy:
      "Defends e5 with a pawn and opens the c8-bishop's diagonal, a solid set-up. White can " +
      "continue Bb2 and Ne2 and then challenge the centre with d4 or f4, while Black follows " +
      "with ...Nf6, ...Nc6 and ...Be7. The cost is some passivity, since a pawn on d6 claims " +
      "less central space than one on d5.",
  },

  "1.b3 e5 2.e3 Be7": {
    strategy:
      "Prepares castling and keeps the pawns flexible, but the bishop neither defends e5 nor " +
      "contests the centre. 3.Bb2 attacks e5 at once, so Black spends the next move on ...d6 " +
      "or ...Nc6 to hold it.",
  },

  "1.b3 e5 2.e3 Bd6": {
    strategy:
      "Defends e5 and prepares castling, but the bishop blocks the d7-pawn, so neither ...d6 " +
      "nor ...d5 is possible until it moves again. The c8-bishop stays shut in as well unless " +
      "Black spends a move on ...b6.",
  },

  "1.b3 e5 2.e3 b6": {
    strategy:
      "Prepares ...Bb7, a fianchetto mirroring White's, with the bishop aimed at g2. e5 is " +
      "still undefended, so 3.Bb2 forces a defence such as ...Nc6 or ...d6 first, since " +
      "3...Bb7 drops the pawn to 4.Bxe5.",
  },

  "1.b3 e5 2.e3 c6": {
    strategy:
      "Prepares ...d5 with the c6-pawn behind it and keeps White's bishop and knight off b5. " +
      "It develops nothing, though, and 3.Bb2 forces ...d6 or a queen move such as ...Qc7 to " +
      "hold e5.",
  },

  "1.b3 e5 2.e3 c5": {
    strategy:
      "Takes space on the queenside and prepares ...Nc6 and ...d6, but with pawns on c5 and " +
      "e5 no black pawn can guard d5 any more, a hole for a white knight after c4 and Nc3. e5 " +
      "also still needs a defender against 3.Bb2.",
  },

  "1.b3 e5 2.e3 g6": {
    strategy:
      "Prepares ...Bg7, which defends e5 along the long diagonal, so 3.Bb2 can be met by " +
      "3...Bg7. The set-up is sound but slow, and the e5-pawn then blocks the bishop's " +
      "diagonal, so the bishop defends rather than attacks.",
  },

  "1.b3 e5 2.e3 Na6": {
    strategy:
      "A rim knight that eyes b4 and c5 but does not defend e5, so 3.Bb2 costs Black another " +
      "move to hold the pawn. 3.Bxa6 bxa6 also doubles Black's a-pawns.",
  },

  "1.b3 e5 2.e3 Qe7": {
    strategy:
      "Defends e5 but shuts in the f8-bishop, whose only open diagonal runs through e7. 3.Ba3 " +
      "attacks the queen along the a3–f8 diagonal at once and forces ...d6, ...c5 or another " +
      "queen move.",
  },

  "1.b3 e5 2.e3 Qf6": {
    strategy:
      "Brings the queen out early and takes f6 from the king's knight. It defends e5, but " +
      "3.Nc3 threatens Nd5, hitting the queen and c7, and Ne4 can also gain time against it.",
  },

  "1.b3 e5 2.e3 Qg5": {
    strategy:
      "The queen eyes g2, which the f1-bishop guards, so nothing is threatened. 3.Nf3 attacks " +
      "queen and e5 at once, and after a retreat to e7 or f6 White has developed with tempo.",
  },

  "1.b3 e5 2.e3 Qh4": {
    strategy:
      "The queen attacks nothing, since f2 and h2 are both guarded. 3.Nf3 hits queen and e5 " +
      "together, and the queen needs a second move to reach e7 or f6, squares it could have " +
      "reached at once.",
  },

  "1.b3 e5 2.e3 Bc5": {
    strategy:
      "The e3-pawn blunts the bishop on the a7–g1 diagonal, and 3.d4 hits bishop and e5 at " +
      "once. After 3...exd4 4.exd4 the bishop has to move again, while White has a pawn on d4 " +
      "and open diagonals for both bishops.",
  },

  "1.b3 e5 2.e3 Bb4": {
    strategy:
      "The bishop attacks only the d2-pawn, which has four defenders, and 3.a3 or 3.c3 sends " +
      "it away again at once. It also leaves e5 without a defender against Bb2.",
  },

  "1.b3 e5 2.e3 Nh6": {
    strategy:
      "A rim knight that covers f5 and g4 but not the centre, and it leaves e5 without a " +
      "defender, which 3.Bb2 attacks at once. Unlike ...Nf6, it has no say over d5 or e4.",
  },

  "1.b3 e5 2.e3 Ne7": {
    strategy:
      "Blocks the f8-bishop and the queen and does not defend e5, which 3.Bb2 attacks at " +
      "once. The knight can reach c6 or g6 later, but only at the cost of another move.",
  },

  "1.b3 e5 2.e3 a6": {
    strategy:
      "Prevents Bb5 but develops nothing and leaves e5 without a defender, so 3.Bb2 costs " +
      "Black another move to hold the pawn.",
  },

  "1.b3 e5 2.e3 a5": {
    strategy:
      "Prepares ...a4 against the b3-pawn but develops nothing, and 3.Bb2 attacks the " +
      "undefended e5-pawn at once, so Black spends the next move defending it instead.",
  },

  "1.b3 e5 2.e3 f6": {
    strategy:
      "Defends e5 but takes f6 from the king's knight and opens the e8–h5 diagonal: 3.Qh5+ " +
      "forces ...g6 or ...Ke7. Black is left with weakened light squares and no development.",
  },

  "1.b3 e5 2.e3 f5": {
    strategy:
      "Grabs space on the kingside but opens the e8–h5 diagonal: 3.Qh5+ forces ...g6 or " +
      "...Ke7. The e5-pawn also has no defender against Bb2, so Black must hold it with a " +
      "weakened king.",
  },

  "1.b3 e5 2.e3 g5": {
    strategy:
      "Gains space but creates holes on f5 and h5, and 3.h4 undermines the pawn at once. The " +
      "kingside is weakened for no development in return.",
  },

  "1.b3 e5 2.e3 h6": {
    strategy:
      "Covers g5 but does nothing for development or the centre. 3.Bb2 then attacks e5, so " +
      "Black must spend another move on ...d6 or ...Nc6.",
  },

  "1.b3 e5 2.e3 h5": {
    strategy:
      "Develops nothing, and the pawn on h5 has only the rook as a defender, so 3.Be2 with " +
      "the queen behind it attacks the pawn twice. e5 also still lacks a defender against " +
      "Bb2.",
  },

  "1.b3 e5 2.e3 e4": {
    strategy:
      "Gains space, but the advanced pawn has no support and 3.d3 challenges it at once; " +
      "after 3...exd3 4.Bxd3 White's bishop is developed and Black's e-pawn is gone. The " +
      "advance also clears the long diagonal for Bb2 toward g7.",
  },

  "1.b3 e5 2.e3 Ke7": {
    strategy:
      "Forfeits castling and blocks the queen and the f8-bishop for no return. 3.Ba3+ checks " +
      "along the a3–f8 diagonal at once: ...d6 leaves a pinned pawn, ...c5 drops a pawn to " +
      "Bxc5+, and anything else moves the king again.",
  },

  "1.b3 e5 2.e3 Ba3": {
    strategy:
      "Walks into the diagonal of the c1-bishop: 3.Bxa3 or 3.Nxa3 wins the piece for nothing.",
  },

  "1.b3 e5 2.e3 b5": {
    strategy:
      "Hangs the pawn: 3.Bxb5 takes it for free, as nothing defends b5 and Black has no " +
      "development lead to compensate.",
  },
};
