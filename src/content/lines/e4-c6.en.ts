import type { OpeningTexts } from "../book.ts";

// English prose for e4-c6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.e4 c6 2.d4": {
    strategy:
      "Builds a two-pawn centre and lets White choose the structure after 2...d5: 3.Nc3 or " +
      "3.Nd2 invites ...dxe4 and open piece play, 3.e5 gains space and closes the centre, and " +
      "3.exd5 cxd5 gives a Carlsbad structure with colours reversed. Because 2...d5 attacks " +
      "e4 at once, White has to defend, advance or exchange the pawn on the next move.",
  },

  "1.e4 c6 2.Nc3": {
    strategy:
      "Defends e4 with a developing move and keeps the d-pawn flexible. After 2...d5 White " +
      "can transpose to the main line with 3.d4, or play 3.Nf3 for rapid development with the " +
      "d-pawn held back. Against 3.Nf3 Black's most logical reply is the pin 3...Bg4, and " +
      "after 4.h3 Bxf3 5.Qxf3 White has the bishop pair while Black keeps a solid position.",
  },

  "1.e4 c6 2.c4": {
    name: "Caro–Kann Defence: Accelerated Panov Attack",
    background:
      "After 2...d5 3.exd5 cxd5 4.d4 it transposes to the Panov–Botvinnik Attack, named after " +
      "Vasily Panov and world champion Mikhail Botvinnik, which otherwise begins 2.d4 d5 " +
      "3.exd5 cxd5 4.c4. The position after 2.c4 can also arise from the English Opening, " +
      "after 1.c4 c6 2.e4.",
    strategy:
      "Controls d5 in advance, so that White can answer 2...d5 by exchanging on d5. After " +
      "3.exd5 cxd5 4.d4 White typically gets isolated-queen's-pawn positions, while 4.cxd5 " +
      "Nf6 5.Nc3 Nxd5 instead aims for open lines and quick development. Black can also " +
      "sidestep these structures with 2...e5, an independent line.",
  },

  "1.e4 c6 2.Nf3": {
    strategy:
      "Develops the king's knight and keeps several plans open after 2...d5: 3.Nc3 reaches " +
      "the same position as 2.Nc3 d5 3.Nf3, 3.d3 transposes to the quiet lines after 2.d3, " +
      "and 3.exd5 cxd5 4.Ne5 sets traps for Black. Unlike 2.Nc3, the move leaves e4 " +
      "undefended, so White must commit to one of these plans on the next move.",
  },

  "1.e4 c6 2.d3": {
    name: "Caro–Kann Defence: Breyer Variation",
    background:
      "White more often answers 2...d5 with 3.Nd2, but the queenless line 3.Nf3 dxe4 4.dxe4 " +
      "Qxd1+ 5.Kxd1 gained attention in the 21st century.",
    strategy:
      "Supports e4 with a pawn and prepares a quiet set-up with Nd2, Ngf3 and g3 or Be2. " +
      "After 2...d5 3.Nd2 dxe4 4.dxe4 the knight blocks the d-file, so the queens stay on the " +
      "board. The move is sound but unambitious, since White postpones the fight for d4.",
  },

  "1.e4 c6 2.c3": {
    strategy:
      "Prepares d4 with pawn support. After 2...d5 White can head for Exchange-type positions " +
      "with 3.exd5 cxd5 4.d4 or Advance-type ones with 3.e5 and d4. The move is sound but " +
      "rare: it takes c3 from the queen's knight, which can no longer defend e4 from there.",
  },

  "1.e4 c6 2.g3": {
    strategy:
      "Prepares Bg2 and keeps d4 and Nc3 in reserve. It is sound but slow: after 2...d5 the " +
      "e4-pawn needs an answer at once, and the bishop on g2 bears on the centre only after " +
      "that pawn has been exchanged or advanced.",
  },

  "1.e4 c6 2.b3": {
    name: "Caro–Kann Defence: Euwe Attack",
    background:
      "Max Euwe won with it against Richard Réti in the third game of their match in " +
      "Amsterdam in June 1920.",
    strategy:
      "Prepares Bb2 for the long diagonal and leaves the centre to Black in a hypermodern " +
      "spirit. After 2...d5 3.exd5 cxd5 4.Bb2 Black keeps a pawn on d5 and develops freely, " +
      "while White can only hope to undermine the centre later.",
  },

  "1.e4 c6 2.f3": {
    strategy:
      "Supports e4 with a pawn but takes f3 from the king's knight and weakens the e1–h4 and " +
      "a7–g1 diagonals. After 2...d5 3.d4 the game transposes to the Fantasy Variation, but " +
      "the early f3 also allows 2...e5, aiming at the dark squares around White's king.",
  },

  "1.e4 c6 2.e5": {
    strategy:
      "Pushes the e-pawn before d4 can support it. Black can reach the Advance Variation with " +
      "2...d5 3.d4, but 2...d6 hits the pawn at once, and White has gained space only if " +
      "Black allows it.",
  },

  "1.e4 c6 2.Ne2": {
    name: "Caro–Kann Defence: Bohemian Attack",
    strategy:
      "Blocks the f1-bishop and does not defend e4, so 2...d5 attacks the pawn at once. The " +
      "knight covers d4 and can go to g3 against ...Bf5, but White develops more slowly than " +
      "after 2.Nc3 or 2.Nf3.",
  },

  "1.e4 c6 2.Be2": {
    strategy:
      "A slow developing move that neither supports e4 nor prepares d4, and takes e2 from the " +
      "queen and the g1-knight. Black takes the centre with 2...d5, and the bishop on e2 does " +
      "nothing against it.",
  },

  "1.e4 c6 2.Bd3": {
    strategy:
      "Defends e4 but blocks the d2-pawn, so d4 is impossible until the bishop moves again. " +
      "Black takes the centre with 2...d5, and after ...dxe4 Bxe4 the bishop is hit by ...Nf6 " +
      "with gain of time.",
  },

  "1.e4 c6 2.Bc4": {
    name: "Caro–Kann Defence: Hillbilly Attack",
    background:
      "Simon Williams attributes the name to National Master Jack Young, who allegedly used " +
      "it for the move's unrefined nature and claimed to have invented it in 1988. It emerged " +
      "as a surprise weapon in online blitz because of the gambit 3.Bb3 after 2...d5, " +
      "advocated by Williams.",
    strategy:
      "Aims at f7 but the bishop is hit by 2...d5, and after 3.exd5 cxd5 it has to move " +
      "again, losing time. White gets no lasting initiative for the tempo and Black takes the " +
      "centre.",
  },

  "1.e4 c6 2.g4": {
    name: "Caro–Kann Defence: Spike Variation",
    strategy:
      "Advances on the kingside without developing a piece and leaves f3 and h3 without pawn " +
      "cover. Black strikes at e4 with 2...d5, and the g4-pawn becomes a target for the " +
      "c8-bishop and for ...h5.",
  },

  "1.e4 c6 2.b4": {
    name: "Caro–Kann Defence: Labahn Attack",
    strategy:
      "Gains queenside space without developing and leaves the b4-pawn unsupported. Black " +
      "takes the centre with ...d5 and can harass the pawn with ...a5, or with ...e5 and " +
      "...Bxb4.",
  },

  "1.e4 c6 2.f4": {
    strategy:
      "Gains kingside space and prepares Nf3 and e5, but weakens the e1–h4 diagonal and the " +
      "e3-square. It does nothing for e4, so 2...d5 attacks an undefended pawn and Black " +
      "develops easily.",
  },

  "1.e4 c6 2.Qf3": {
    strategy:
      "Defends e4 but takes f3 from the king's knight and exposes the queen early. After " +
      "2...d5 the c8-bishop can hit the queen from g4, so Black develops with gain of time.",
  },

  "1.e4 c6 2.Qe2": {
    strategy:
      "Defends e4 but shuts in the f1-bishop and takes e2 from the king's knight, while d4 " +
      "remains unprepared. Black takes the centre with 2...d5 and develops freely.",
  },

  "1.e4 c6 2.Qg4": {
    strategy:
      "Loses time: after 2...d5 the c8-bishop attacks the queen, which must retreat, and " +
      "3.exd5? even loses it to 3...Bxg4. Black gets the centre and development with tempo.",
  },

  "1.e4 c6 2.Qh5": {
    strategy:
      "Eyes f7, but the queen is exposed: 2...Nf6 attacks it and the e4-pawn at the same " +
      "time, and Black develops with gain of time.",
  },

  "1.e4 c6 2.Nh3": {
    strategy:
      "Develops the king's knight to the rim, where it neither defends e4 nor supports d4. " +
      "After 2...d5 the c8-bishop also hits the knight, and ...Bxh3 gxh3 would double White's " +
      "h-pawns.",
  },

  "1.e4 c6 2.Na3": {
    strategy:
      "A rim knight that helps neither e4 nor d4. It heads for c4, but 2...d5 takes that " +
      "square away at once, and White has lost time without a plan.",
  },

  "1.e4 c6 2.a3": {
    strategy:
      "A slow rook-pawn move that neither develops a piece nor fights for the centre. Black " +
      "takes space at once with 2...d5 and has gained a tempo.",
  },

  "1.e4 c6 2.a4": {
    strategy:
      "Gains queenside space slowly and weakens b4, but does nothing against 2...d5, which " +
      "takes the centre with a tempo against e4.",
  },

  "1.e4 c6 2.h3": {
    strategy:
      "A waiting move that only prevents ...Bg4 later. It costs a tempo and does nothing " +
      "about 2...d5, so Black takes the centre while White has not developed.",
  },

  "1.e4 c6 2.h4": {
    strategy:
      "Gains a little kingside space but neither develops a piece nor helps the centre. Black " +
      "takes the centre with 2...d5, attacking the undefended e4-pawn, and White is a tempo " +
      "behind.",
  },

  "1.e4 c6 2.Ke2": {
    strategy:
      "Gives up castling for good and leaves the king in the centre, with no gain in space or " +
      "development. Black plays 2...d5 and opens the centre against the exposed king.",
  },

  "1.e4 c6 2.Bb5": {
    strategy: "Hangs the bishop: the c6-pawn simply takes it with 2...cxb5.",
  },

  "1.e4 c6 2.Ba6": {
    strategy: "Hangs the bishop for nothing: 2...bxa6 or 2...Nxa6 wins it at once.",
  },

  "1.e4 c6": {
    name: "Caro–Kann Defence",
    background:
      "Named after the English player Horatio Caro and the Austrian Marcus Kann, who analysed " +
      "it in 1886. Kann had beaten Jacques Mieses with it in 24 moves at the German Chess " +
      "Congress in Hamburg in May 1885.",
  },

  "1.e4 c6 2.d4 d5": {
    strategy:
      "Challenges e4 at once, which is the point of the c6 pawn: it supports d5, so after an " +
      "exchange Black recaptures with a pawn and keeps a sound structure. The light-squared " +
      "bishop stays free to develop outside the pawn chain, usually to f5 or g4, before ...e6 " +
      "closes it in. The cost is the tempo spent on ...c6, so Black can lag in development; " +
      "White chooses between 3.Nc3 or 3.Nd2, 3.e5, 3.exd5 and 3.f3.",
  },

  "1.e4 c6 2.d4 Na6": {
    name: "Caro–Kann Defence: De Bruycker Defence",
    strategy:
      "Heads for c7 via a6, where the knight supports d5 and e6 without blocking the " +
      "c8-bishop. The price is an extra tempo and a knight that stands on the rim for a move, " +
      "so White develops freely with 3.Nc3 and Nf3 and stays slightly ahead in development.",
  },

  "1.e4 c6 2.d4 Nf6": {
    name: "Caro–Kann Defence: Masi Variation",
    strategy:
      "Attacks e4 and invites 3.e5 Nd5, when 4.c4 drives the knight on to c7 or b6 and White " +
      "gets a broad centre, much as in the Alekhine Defence but with ...c6 already played. If " +
      "White defends e4 with 3.Nc3 or 3.Bd3 instead, 3...d5 4.e5 again gains time on the " +
      "knight.",
  },

  "1.e4 c6 2.d4 d6": {
    strategy:
      "Heads for a Pirc or Modern setup with ...c6 already included, usually the Czech Pirc " +
      "once Nc3 and ...Nf6 are played. It concedes more central space than ...d5 does and " +
      "lets White choose between a broad centre with f4 and a calm Nf3 and Be2. Sound but " +
      "passive.",
  },

  "1.e4 c6 2.d4 g6": {
    strategy:
      "Prepares ...Bg7 and either ...d5 or ...d6. After 3.Nc3 d5 the game transposes straight " +
      "into the Gurgenidze Variation, and 3...Bg7 4.Nf3 d6 reaches a Pirc or Modern setup. " +
      "Sound and flexible, but less direct than ...d5, and White has extra options such as " +
      "3.Nc3 followed by f4.",
  },

  "1.e4 c6 2.d4 e6": {
    strategy:
      "Heads for ...d5 in a French-type setup with ...c6 already inserted, which supports d5 " +
      "solidly but shuts the c8-bishop in behind e6. Black also loses the quick ...c5 break " +
      "of the French, so the c6 pawn costs a tempo in the Advance and Tarrasch structures.",
  },

  "1.e4 c6 2.d4 Qc7": {
    strategy:
      "Brings the queen out before any minor piece; on c7 it eyes e5 but does nothing for " +
      "...d5. White develops freely with Nc3, Nf3 and Bd3, and once the c-pawn leaves c6, Nb5 " +
      "can hit the queen.",
  },

  "1.e4 c6 2.d4 Qb6": {
    strategy:
      "Hits d4 and b2 only on paper, since Qd1 and Bc1 cover them. White gains tempi against " +
      "the queen with Nc3 and Na4 or with c4 and c5, while ...d5 has still not been played.",
  },

  "1.e4 c6 2.d4 Qa5+": {
    strategy:
      "The check achieves nothing: 3.Nc3, 3.c3 or 3.Bd2 blocks it while developing or " +
      "strengthening the centre, and the queen is left loose on a5 with ...d5 still unplayed.",
  },

  "1.e4 c6 2.d4 Nh6": {
    strategy:
      "Puts the knight on the rim, where it invites 3.Bxh6 gxh6 and a ruined kingside pawn " +
      "structure, and does nothing about the centre. Black keeps the bishop pair after the " +
      "trade, but White's centre goes unchallenged.",
  },

  "1.e4 c6 2.d4 a6": {
    strategy:
      "A waiting move on the edge that prepares ...b5 but contests nothing. White develops " +
      "freely with 3.Nc3 and Nf3 or takes more space with 3.c4, while ...d5 is still to be " +
      "played.",
  },

  "1.e4 c6 2.d4 a5": {
    strategy:
      "Spends a tempo on the rook's pawn while d4 and e4 stand unopposed, and the a-pawn can " +
      "no longer cover b5 from a6, a hole once the c-pawn leaves c6. White simply develops " +
      "with Nc3, Nf3 and Bd3.",
  },

  "1.e4 c6 2.d4 b6": {
    strategy:
      "Prepares ...Bb7, but there the bishop bites on its own pawn on c6, and ...d5 is still " +
      "unplayed. White develops freely with Nc3, Nf3 and Bd3, and freeing the bishop with " +
      "...c5 costs Black another tempo.",
  },

  "1.e4 c6 2.d4 b5": {
    strategy:
      "Grabs queenside space before the centre is settled, weakening c6 and c5 and leaving " +
      "the b-pawn as a target for a4. Nothing is done against d4 and e4, and White develops " +
      "with Nc3 and Nf3.",
  },

  "1.e4 c6 2.d4 e5": {
    strategy:
      "Strikes at d4 before the pieces are out. After 3.dxe5 Black regains the pawn most " +
      "directly with ...Qa5+ and ...Qxe5, but the queen is then exposed to Nf3 and Bf4 while " +
      "White develops with tempo.",
  },

  "1.e4 c6 2.d4 f6": {
    strategy:
      "Takes f6 from the g8-knight, weakens e6 and the e8–h5 diagonal, and does not fight for " +
      "the centre. White simply builds with Nf3, Bd3 and Nc3.",
  },

  "1.e4 c6 2.d4 f5": {
    name: "Caro–Kann Defence: Massachusetts Defence",
    strategy:
      "Weakens e6, the e8–h5 diagonal and the kingside without developing anything. After " +
      "3.exf5 Black regains the pawn most directly with ...Qa5+ and ...Qxf5, and Nc3 followed " +
      "by Bd3 gains a tempo on the queen; 3.e5 simply takes space.",
  },

  "1.e4 c6 2.d4 h6": {
    strategy:
      "Stops Bg5 but is a pure waiting move on the rim. It loses time and does not contest d4 " +
      "or e4, so White builds freely with Nc3 and Nf3 while ...d5 waits.",
  },

  "1.e4 c6 2.d4 h5": {
    strategy:
      "Pushes the rook's pawn without contesting d4 or e4 and loosens g5 and g6. White " +
      "develops with Nc3, Nf3 and Bd3 while Black has still to deal with the centre.",
  },

  "1.e4 c6 2.d4 c5": {
    strategy:
      "Moves the same pawn a second time and lets White take space with 3.d5 or open the " +
      "centre with 3.dxc5, after which ...Qa5+ and ...Qxc5 regain the pawn with the queen out " +
      "early and White ahead in development.",
  },

  "1.e4 c6 2.d4 g5": {
    strategy:
      "Hangs the g-pawn to 3.Bxg5, since neither the queen nor the f8-bishop covers it, and " +
      "loosens the kingside for nothing.",
  },

  "1.e4 c6 2.Nc3 d5": {
    strategy:
      "Challenges e4 at once, which is the point of the c6 pawn. After 3.d4 the game " +
      "transposes into the main line, where 3...dxe4 4.Nxe4 usually follows. Against 3.Nf3 " +
      "the pin 3...Bg4 is Black's most logical reply, developing the light-squared bishop " +
      "before ...e6; playing as in the Classical Variation with 3...dxe4 4.Nxe4 Bf5 5.Ng3 Bg6 " +
      "instead allows White a strong attack starting with 6.h4.",
  },

  "1.e4 c6 2.Nc3 Nf6": {
    strategy:
      "Develops and attacks e4, but the knight becomes a target for the e-pawn. After 3.d4 " +
      "the natural 3...d5 runs into 4.e5, gaining time, and 3.e5 Nd5 4.Nxd5 cxd5 5.d4 at once " +
      "gives White a space advantage with the pawn on e5. Black can also answer 3.d4 with " +
      "3...d6, reaching the Czech Defence of the Pirc.",
  },

  "1.e4 c6 2.Nc3 d6": {
    strategy:
      "Prepares ...Nf6 and a Pirc-style set-up with ...g6 or ...e5, keeping the centre " +
      "flexible. After 3.d4 Nf6 the game transposes into the Czech Defence of the Pirc, 1.e4 " +
      "d6 2.d4 Nf6 3.Nc3 c6. It is sound but passive: White takes the full centre before " +
      "Black contests it.",
  },

  "1.e4 c6 2.Nc3 e6": {
    strategy:
      "Prepares ...d5 in a French-type set-up with ...c6 already played, which supports d5 " +
      "but shuts the c8 bishop in behind e6. After 3.d4 d5 4.e5 Black wants the ...c5 break " +
      "of the French, and the pawn on c6 needs a second move to get there. Solid, but 2...d5 " +
      "at once keeps the bishop free.",
  },

  "1.e4 c6 2.Nc3 g6": {
    strategy:
      "Prepares ...Bg7 with ...c6 already played and keeps both ...d5 and ...d6 open. After " +
      "3.d4 d5 the game transposes into the Gurgenidze Variation, while ...d6 instead leads " +
      "to Modern or Pirc set-ups. Sound and flexible, but it gives White more options than " +
      "the direct 2...d5.",
  },

  "1.e4 c6 2.Nc3 e5": {
    strategy:
      "Strikes in the centre, reaching a Vienna Game in which ...c6 has taken the b8 knight's " +
      "natural square and e5 lacks support. After 3.Nf3 Black usually has to spend another " +
      "tempo on ...d6, because 3...d5 4.exd5 cxd5 5.Nxe5 loses a pawn.",
  },

  "1.e4 c6 2.Nc3 Qc7": {
    strategy:
      "Brings the queen out before any minor piece; on c7 it supports ...e5 but does nothing " +
      "for ...d5. White takes the centre with 3.d4 and can add f4, while Black still has all " +
      "four minor pieces to develop.",
  },

  "1.e4 c6 2.Nc3 Qb6": {
    strategy:
      "Brings the queen out before any minor piece and eyes b2, which the c1 bishop guards. " +
      "After 3.d4 or 3.Nf3 White gains time against the queen with a4 and a5 or with Na4.",
  },

  "1.e4 c6 2.Nc3 Qa5": {
    strategy:
      "Brings the queen out before any minor piece and eyes the c3 knight, which the b- and " +
      "d-pawns guard. After 3.d4 the knight is pinned, but Bd2 can break the pin at any time, " +
      "and White builds the centre with Nf3 or f4 while the queen has nothing to attack.",
  },

  "1.e4 c6 2.Nc3 Nh6": {
    strategy:
      "Puts the knight on the rim, from where it can reach f5 to press on d4 but does nothing " +
      "against e4. Once White plays d4, the c1 bishop can take with Bxh6 gxh6, doubling " +
      "Black's h-pawns, although Black gets the bishop pair in return.",
  },

  "1.e4 c6 2.Nc3 Na6": {
    strategy:
      "Puts the knight on the rim, from where it heads for c7 to support ...d5. 3.Bxa6 bxa6 " +
      "doubles Black's a-pawns at once, at the cost of the bishop pair, and 3.d4 takes the " +
      "centre while the knight is still on its way.",
  },

  "1.e4 c6 2.Nc3 a6": {
    strategy:
      "A waiting move that prepares ...b5 but develops nothing and does not contest e4. White " +
      "takes the centre with 3.d4 and develops freely, while ...d5 has still to be played.",
  },

  "1.e4 c6 2.Nc3 a5": {
    strategy:
      "Spends a tempo on the rook's pawn and does nothing against e4 or for ...d5. White " +
      "takes the centre with 3.d4 and develops freely with Nf3 and Bd3.",
  },

  "1.e4 c6 2.Nc3 b6": {
    strategy:
      "Prepares ...Bb7, but the c6 pawn blocks that bishop's diagonal, so the fianchetto has " +
      "little to aim at. It costs a tempo while 3.d4 takes the centre.",
  },

  "1.e4 c6 2.Nc3 b5": {
    strategy:
      "Grabs queenside space but develops nothing, and the pawn, already hit by the c3 " +
      "knight, ties the c6 pawn to its defence. After 3.d4 d5 4.exd5, for instance, 4...cxd5 " +
      "drops the b-pawn to 5.Bxb5+ or 5.Nxb5.",
  },

  "1.e4 c6 2.Nc3 f6": {
    strategy:
      "Covers e5 but takes the natural f6 square from the g8 knight and opens the e8–h5 " +
      "diagonal, so Qh5+ is possible at any moment. White develops freely with 3.d4 and Bc4, " +
      "aiming at the weakened a2–g8 diagonal.",
  },

  "1.e4 c6 2.Nc3 g5": {
    strategy:
      "Loosens the kingside without developing anything. After 3.d4 the c1 bishop attacks g5, " +
      "so Black must spend another move holding the pawn, and after 3...h6 it comes under " +
      "fire again from 4.h4.",
  },

  "1.e4 c6 2.Nc3 h6": {
    strategy:
      "Spends a tempo on a pawn move that stops a bishop which cannot yet come to g5, and " +
      "does nothing for the centre. 3.d4 gives White the centre with a free hand.",
  },

  "1.e4 c6 2.Nc3 h5": {
    strategy:
      "Pushes the rook's pawn without contesting e4 and loosens g5 and g6. White takes the " +
      "centre with 3.d4 and develops freely with Nf3 and Bd3.",
  },

  "1.e4 c6 2.Nc3 c5": {
    strategy:
      "Moves the c-pawn a second time and reaches the Sicilian position after 1.e4 c5 2.Nc3 " +
      "with White to move, so Black has lost a whole tempo. White can enter an Open Sicilian " +
      "with 3.Nf3 and d4 a move ahead.",
  },

  "1.e4 c6 2.Nc3 f5": {
    strategy:
      "Gives up a pawn: after 3.exf5 nothing recaptures on f5, and 3...d5? runs into 4.Qh5+ " +
      "g6 5.fxg6. After 3...Nf6 White can hold the extra pawn with 4.g4.",
  },

  "1.e4 c6 2.c4 d5": {
    strategy:
      "Strikes at e4 at once with the thematic Caro–Kann break, before White can support the " +
      "centre with Nc3 and d4. After 3.exd5 cxd5 White chooses between 4.d4, which usually " +
      "leads to positions with an isolated queen's pawn for White, and 4.cxd5 Nf6 5.Nc3 Nxd5, " +
      "where Black regains the pawn and White's d-pawn is isolated.",
  },

  "1.e4 c6 2.c4 d6": {
    strategy:
      "Postpones the ...d5 break for a Pirc-style set-up in which ...c6 has already been " +
      "played. It is solid but passive: after 3.d4 the pawns on c4, d4 and e4 give White a " +
      "clear space advantage, and Black must rely on ...Nf6 and ...g6 or ...e5 to catch up.",
  },

  "1.e4 c6 2.c4 e6": {
    strategy:
      "Prepares ...d5 with a French-style pawn chain: after 3.d4 d5 White may close the " +
      "centre with 4.e5 or exchange on d5. It is sound, but it locks in the c8-bishop that " +
      "the Caro–Kann set-up usually keeps free, and White's extra space on c4 gives the more " +
      "comfortable play.",
  },

  "1.e4 c6 2.c4 e5": {
    name: "Caro–Kann Defence: Accelerated Panov Attack, Open Variation",
    strategy:
      "Claims the centre with a pawn instead of striking at e4 with ...d5. Since the c6-pawn " +
      "takes the c6-square from the knight, 3.Nf3 makes Black hold e5, usually with ...d6 or " +
      "...Bd6, and with c4 and e4 covering d5 the freeing ...d5 is hard to achieve. Black's " +
      "position stays solid but passive.",
  },

  "1.e4 c6 2.c4 g6": {
    strategy:
      "Prepares ...Bg7 and then ...d5 or ...d6, a Modern-style set-up with ...c6 already " +
      "played. It is sound, but it leaves the centre to White: after 3.d4 the pawns on c4, d4 " +
      "and e4 give a clear space advantage, and Black must find the right moment for ...d5.",
  },

  "1.e4 c6 2.c4 Na6": {
    strategy:
      "Puts the knight on the rim to reach c7 or b4, far from the centre. It does nothing " +
      "about d4 and a broad pawn centre, so White simply builds with d4 and Nc3 while c4 and " +
      "e4 keep their grip on d5.",
  },

  "1.e4 c6 2.c4 Qc7": {
    strategy:
      "Eyes e5 along the b8–h2 diagonal but brings the queen out before any piece is " +
      "developed. White takes the centre with d4 and Nc3, and Bf4 can later gain time against " +
      "the queen.",
  },

  "1.e4 c6 2.c4 Qb6": {
    strategy:
      "Aims at b2 and d4, but b2 is guarded by Bc1, so nothing is threatened. The queen " +
      "leaves the back rank before any piece is developed, and White carries on with Nc3 and " +
      "d4 in comfort.",
  },

  "1.e4 c6 2.c4 Qa5": {
    strategy:
      "Eyes the a5–e1 diagonal and prepares ...e5, but develops nothing. White gains time " +
      "with Nc3 and d4, and the queen stays exposed to harassment by ideas such as Bd2.",
  },

  "1.e4 c6 2.c4 Nh6": {
    strategy:
      "A rim knight aiming at f5 that leaves d5 uncontested. After d4 White threatens Bxh6 " +
      "gxh6, which would wreck the kingside pawns, so Black must spend further time on the " +
      "knight or the kingside.",
  },

  "1.e4 c6 2.c4 Nf6": {
    strategy:
      "Attacks e4 but runs into 3.e5, which drives the knight away. After 3...Ne4 4.d3 Nc5 " +
      "5.d4 Ne6 White has gained space and tempi, and Black's pieces stand awkwardly in the " +
      "face of a broad centre.",
  },

  "1.e4 c6 2.c4 a6": {
    strategy:
      "Prepares ...b5 against the c4-pawn but spends a tempo on the edge pawn. White answers " +
      "with d4 and Nc3 and takes a broad centre while ...d5 is still unplayed.",
  },

  "1.e4 c6 2.c4 a5": {
    strategy:
      "A wing move that gains no useful space and does not touch the centre or the d5 square. " +
      "White plays d4 and Nc3 and builds on the pawns already on c4 and e4.",
  },

  "1.e4 c6 2.c4 b6": {
    strategy:
      "Prepares ...Bb7, but the c6-pawn blocks that bishop's diagonal toward e4, and ...d5 " +
      "still has to be played. White meanwhile plays d4 and Nc3 and takes the centre.",
  },

  "1.e4 c6 2.c4 f6": {
    strategy:
      "Blocks the knight's natural square and weakens e6 and the king's diagonal. It does " +
      "nothing against the pawns on c4 and e4, and White takes the centre with d4.",
  },

  "1.e4 c6 2.c4 g5": {
    strategy:
      "Loosens the kingside for good and makes the pawn a target: after 3.d4 the c1-bishop " +
      "attacks g5, and holding it with ...h6 costs another tempo against White's full centre.",
  },

  "1.e4 c6 2.c4 h6": {
    strategy:
      "A prophylactic pawn move that takes g5 from the bishop but develops nothing and leaves " +
      "d5 uncontested. White plays d4 and Nc3 and builds a broad centre.",
  },

  "1.e4 c6 2.c4 h5": {
    strategy:
      "Gains space on the wing but weakens g5 and the kingside, and develops nothing. White " +
      "continues with d4 and Nc3 and keeps the centre.",
  },

  "1.e4 c6 2.c4 c5": {
    strategy:
      "The second step of the c-pawn gives a Sicilian-like structure but costs a tempo, and " +
      "with c4 and e4 White already controls d5. Nc3 and a quiet bind follow easily.",
  },

  "1.e4 c6 2.c4 b5": {
    strategy:
      "Offers a pawn without real compensation. After 3.cxb5 cxb5 4.Bxb5 White is a clean " +
      "pawn up, and the open c-file and ...Bb7 against e4 do not make up for it.",
  },

  "1.e4 c6 2.c4 f5": {
    strategy:
      "Offers the f-pawn for nothing: 3.exf5 simply wins it, and the king and the e6-square " +
      "are left weakened with no development in return.",
  },

  "1.e4 c6 2.Nf3 d5": {
    strategy:
      "Challenges e4 at once, as in every Caro-Kann: the c6 pawn supports d5, so after exd5 " +
      "cxd5 Black has a healthy centre and the half-open c-file. If e5 follows, ...Bf5 brings " +
      "the light-squared bishop out before ...e6 closes the diagonal, and d4 then reaches the " +
      "Advance Variation. Against exd5 cxd5 Ne5, which sets traps, ...e6 is a sound reply, " +
      "while ...Bf5? loses a tempo and the bishop pair to Bb5+ Bd7.",
  },

  "1.e4 c6 2.Nf3 e6": {
    strategy:
      "Supports ...d5 a second time, but the pawn closes the c8-bishop's diagonal before the " +
      "bishop is out, so d4 d5 e5 leaves it shut in behind a French-like pawn chain. Sound, " +
      "but it gives up the Caro-Kann's chief idea of developing the bishop before ...e6.",
  },

  "1.e4 c6 2.Nf3 Nf6": {
    strategy:
      "Attacks e4 and invites e5, after which ...Nd5 gives an Alekhine-like structure in " +
      "which c6 supports the knight. White gains space with d4 and Bc4 or c4 while the knight " +
      "is driven about, so the move is playable but less comfortable than the direct ...d5.",
  },

  "1.e4 c6 2.Nf3 d6": {
    strategy:
      "Prepares a Pirc-style set-up instead of ...d5: after d4 Nf6 Nc3 the pawns on c6 and d6 " +
      "face a broad White centre, and Black continues with ...g6 or ...Bg4. Solid and " +
      "flexible, but passive, ceding space and the initiative.",
  },

  "1.e4 c6 2.Nf3 g6": {
    strategy:
      "Prepares ...Bg7 and a hypermodern set-up that lets White build a centre with d4 and " +
      "Nc3 and aims to undermine it later with ...d5. Sound, but less direct than ...d5, and " +
      "White takes the centre unopposed.",
  },

  "1.e4 c6 2.Nf3 c5": {
    strategy:
      "Reaches the Sicilian pawn structure at the cost of a tempo: the same position with " +
      "Black to move would be an ordinary Sicilian, so after d4 cxd4 Nxd4 White has an Open " +
      "Sicilian with Black a move behind.",
  },

  "1.e4 c6 2.Nf3 Na6": {
    strategy:
      "Puts the knight on the rim on its way to c7, where it would support ...d5, but spends " +
      "a tempo while ...d5 is still undone. White plays d4 and Nc3 or Bd3 with a lead in " +
      "development and central space.",
  },

  "1.e4 c6 2.Nf3 Qc7": {
    strategy:
      "Brings the queen out before any minor piece; on c7 it eyes e5 but does nothing for " +
      "...d5. White answers with d4 and Nc3 and gains development and space.",
  },

  "1.e4 c6 2.Nf3 Qb6": {
    strategy:
      "Attacks b2 and f2, but Bc1 and the king guard them, so there is no threat. The queen " +
      "becomes a target for a4-a5 and Nc3-a4, and White develops with tempo while ...d5 is " +
      "still undone.",
  },

  "1.e4 c6 2.Nf3 Qa5": {
    strategy:
      "Pins the d2 pawn against the king, so d4 has to wait a move, but Nc3 or c3 closes the " +
      "diagonal and d4 follows. The queen stands exposed on a5, and Black has still not moved " +
      "a central pawn.",
  },

  "1.e4 c6 2.Nf3 Nh6": {
    strategy:
      "Heads for f5 from the rim, but d4 opens the c1-h6 diagonal, and Bxh6 forces ...gxh6 " +
      "and wrecks the kingside pawns. The knight also stays off f6, and ...d5 is still " +
      "undone.",
  },

  "1.e4 c6 2.Nf3 a6": {
    strategy:
      "Spends a tempo on a flank pawn: with c6 already covering b5, the move only prepares " +
      "...b5, which does nothing for the centre. White takes space with d4 and Nc3.",
  },

  "1.e4 c6 2.Nf3 a5": {
    strategy:
      "Gains queenside space for a tempo but does nothing for the centre or development, and " +
      "leaves b6 without a pawn guard.",
  },

  "1.e4 c6 2.Nf3 b6": {
    strategy:
      "Prepares a queenside fianchetto, but Bb7 would face its own c6 pawn and be blocked, " +
      "and the centre is left to White. d4 and Nc3 follow with a comfortable lead.",
  },

  "1.e4 c6 2.Nf3 b5": {
    strategy:
      "Throws the b-pawn forward before the centre is settled: a4 hits it at once, and the " +
      "pawns on b5 and c6 loosen the queenside without helping development.",
  },

  "1.e4 c6 2.Nf3 f6": {
    strategy:
      "Takes f6 from the knight, opens the e8-h5 diagonal and weakens e6, while doing nothing " +
      "for ...d5. White builds a centre with d4 and Nc3, and Black lags in development.",
  },

  "1.e4 c6 2.Nf3 h6": {
    strategy:
      "Takes g5 from White's knight and bishop but spends a tempo on a pawn move that does " +
      "nothing for the centre. White takes d4 and Nc3 with a free hand.",
  },

  "1.e4 c6 2.Nf3 h5": {
    strategy:
      "Gains kingside space, but the h-pawn can no longer cover g5 from h6, and the move does " +
      "nothing for development or the centre. White simply builds with d4 and Nc3.",
  },

  "1.e4 c6 2.Nf3 e5": {
    strategy:
      "Offers a pawn that nothing defends: Nxe5 takes it, and Black regains it with ...Qe7 " +
      "and ...Qxe4+ only by bringing the queen out early, which hands White a lead in " +
      "development.",
  },

  "1.e4 c6 2.Nf3 f5": {
    strategy:
      "Weakens e6 and the e8-h5 diagonal for a pawn that exf5 takes at once. Black can win it " +
      "back with ...d5 and ...Bxf5, but is left with a hole on e6 and a backward e7 pawn on " +
      "the half-open e-file.",
  },

  "1.e4 c6 2.Nf3 g5": {
    strategy:
      "Hangs the pawn to Nxg5, which nothing defends, and weakens f5, h5 and the whole " +
      "kingside for good.",
  },
};
