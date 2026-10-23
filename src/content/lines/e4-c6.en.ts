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
};
