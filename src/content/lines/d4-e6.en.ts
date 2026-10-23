import type { OpeningTexts } from "../book.ts";

// English prose for d4-e6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.d4 e6 2.c4": {
    background:
      "The most common reply to 1...e6, keeping the game in Queen's Pawn territory. Howard " +
      "Staunton played 1...e6 five times in his 1843 match series against Saint-Amant, the " +
      "strongest French player of the time, and each game transposed into a Queen's Gambit " +
      "Declined with 2.c4 d5.",
    strategy:
      "Adds the c-pawn to the fight for d5 and keeps the Queen's Gambit and Indian structures " +
      "in play: 2...d5 gives a Queen's Gambit Declined, 2...Nf6 a Nimzo-Indian, Queen's " +
      "Indian or Bogo-Indian. Black also gets the widest choice of independent replies: a " +
      "Dutch with 2...f5, the English Defence with 2...b6, a Benoni with 2...c5 or the Keres " +
      "Defence with 2...Bb4+, which White usually meets with 3.Bd2.",
  },

  "1.d4 e6 2.Nf3": {
    strategy:
      "Develops the king's knight, guards d4 and e5 and keeps every set-up open: c4 for the " +
      "Queen's Gambit Declined and Indian structures, e3 and Bd3 for a Colle, Bf4 for a " +
      "London, g3 and Bg2 for a Catalan. It offers a similar range of transpositions as 2.c4 " +
      "but avoids the Keres Defence with 2...Bb4+. Black can still choose the structure with " +
      "2...d5, 2...c5 or 2...Nf6.",
  },

  "1.d4 e6 2.e4": {
    strategy:
      "Builds the full pawn centre and transposes to the French Defence, since the position " +
      "is the same as after 1.e4 e6 2.d4. After 2...d5 the e4-pawn is attacked, and White " +
      "chooses between defending it with 3.Nc3 or 3.Nd2, advancing with 3.e5 or exchanging " +
      "with 3.exd5. Black's counterplay comes from ...c5 against d4 and, after 3.e5, from " +
      "...f6 against the pawn chain.",
  },

  "1.d4 e6 2.Bf4": {
    strategy:
      "Develops the dark-squared bishop before e3 can shut it in, the first step of the " +
      "London System: e3, Nf3, c3 and Bd3 or Nbd2 follow in a solid set-up with a fixed plan. " +
      "With the bishop gone from c1 the b2-pawn is undefended, so ...c5 with ...Qb6 is a " +
      "typical answer. Black can also offer an exchange with ...Bd6 and reach ...d5 without " +
      "hurry.",
  },

  "1.d4 e6 2.g3": {
    strategy:
      "Prepares Bg2 on the long diagonal, aimed at d5 and b7, and can reach a Catalan after a " +
      "later c4 and Nf3. It is slower than 2.c4 or 2.Nf3, so Black can strike first with " +
      "2...c5 against d4 or settle the centre with 2...d5.",
  },

  "1.d4 e6 2.Nc3": {
    strategy:
      "Develops the knight and keeps two plans: after 2...d5, 3.e4 reaches the French Defence " +
      "with 3.Nc3, while Bf4 gives a Jobava London. The knight blocks the c-pawn, so the " +
      "Queen's Gambit structures are ruled out, and 2...Bb4 pins it at once. Sound, but less " +
      "flexible than 2.c4 or 2.Nf3.",
  },

  "1.d4 e6 2.Nd2": {
    strategy:
      "Supports e4, so that 2...d5 3.e4 reaches the Tarrasch Variation of the French Defence. " +
      "The knight shuts in the c1-bishop, ruling out Bf4, and Black can avoid the French with " +
      "2...c5 or 2...Nf6. Playable but passive.",
  },

  "1.d4 e6 2.c3": {
    strategy:
      "Props up d4 and stops ...Bb4+, with Nf3, Bf4 or e3 and Bd3 to follow in a compact " +
      "set-up. It is slow and takes c3 from the b1-knight, which must come out via d2, while " +
      "Black gets ...d5 and ...c5 or ...Nf6 with free development. Sound, but it gives up the " +
      "initiative.",
  },

  "1.d4 e6 2.e3": {
    strategy:
      "Frees the f1-bishop for Bd3 and supports d4 for a Colle-style set-up with Nf3, c3 or " +
      "b3, and Nbd2. It shuts the c1-bishop in behind the pawn, however, and Black answers " +
      "with ...d5 or ...c5 at no cost. Sound but committal, since 2.Nf3 reaches the same " +
      "set-up while keeping the option of Bf4 before e3.",
  },

  "1.d4 e6 2.b3": {
    strategy:
      "Prepares Bb2, but with the pawn already on d4 the bishop bites on its own pawn and " +
      "only supports it until a later d5 or dxc5 opens the diagonal. Black can answer with " +
      "2...Bb4+ or simply with ...d5, ...c5 and ...Nf6 for a free game. Playable, but 2.c4 " +
      "and 2.Nf3 do more for the centre.",
  },

  "1.d4 e6 2.a3": {
    strategy:
      "Stops ...Bb4+ and prepares b4, but it develops nothing and loses a tempo. Black takes " +
      "the centre with ...d5 and ...Nf6 while White's pieces are still at home.",
  },

  "1.d4 e6 2.a4": {
    strategy:
      "A rim pawn move that neither develops a piece nor fights for the centre, and it does " +
      "not even stop 2...Bb4+. Black then continues ...d5 with a free game.",
  },

  "1.d4 e6 2.b4": {
    strategy:
      "Prepares Bb2, but the pawn is undefended and 2...Bxb4+ takes it with check. After 3.c3 " +
      "Be7 or 3.Bd2 Bxd2+ White has only a little development for the lost pawn.",
  },

  "1.d4 e6 2.f3": {
    strategy:
      "Prepares e4 but takes f3 from the g1-knight and opens the e1-h4 diagonal, so 2...Qh4+ " +
      "forces the weakening 3.g3 or the loss of castling with 3.Kd2. The move does nothing " +
      "against ...d5 or ...c5.",
  },

  "1.d4 e6 2.f4": {
    strategy:
      "Takes e5 for a Dutch-style structure but develops no piece and opens the e1-h4 " +
      "diagonal, so 2...Qh4+ forces 3.g3 at once. The kingside is loosened before White has " +
      "developed, and Black continues with ...d5 or ...c5 freely.",
  },

  "1.d4 e6 2.g4": {
    strategy:
      "Gains space on the kingside but leaves the pawn undefended: 2...Qh4 attacks it at " +
      "once, pins the f2-pawn and forces 3.h3 or 3.Bh3 to keep it. The kingside is loosened " +
      "before a single piece has developed.",
  },

  "1.d4 e6 2.h3": {
    strategy:
      "A waiting move that does nothing for the centre or development. Black plays ...d5 and " +
      "...Nf6 while White's pieces are still at home.",
  },

  "1.d4 e6 2.h4": {
    strategy:
      "A flank thrust that does nothing for the centre or development and loosens the " +
      "kingside without a target. White has lost a tempo, and Black replies ...d5 with an " +
      "easy game.",
  },

  "1.d4 e6 2.Bd2": {
    strategy:
      "Takes d2 from the b1-knight and puts the bishop on a passive square, where it does " +
      "less than it would on f4. Black develops freely with ...d5, ...Nf6 and ...c5.",
  },

  "1.d4 e6 2.Be3": {
    strategy:
      "Blocks the e-pawn completely, since e2-e4 needs e3 to be empty, so while the bishop " +
      "stands there the f1-bishop can only come out via g3 and Bg2. The move does not " +
      "challenge the centre, and Black takes space with ...d5 or ...c5.",
  },

  "1.d4 e6 2.Qd2": {
    strategy:
      "An early queen move that blocks the c1-bishop, takes d2 from the b1-knight and " +
      "develops nothing. 2...Bb4 attacks the queen at once, so White must move it again or " +
      "block with c3 or Nc3, and Black takes the centre with ...d5.",
  },

  "1.d4 e6 2.Qd3": {
    strategy:
      "Brings the queen out early and blocks the f1-bishop's diagonal. Black can develop with " +
      "...Nc6 and ...Nb4 or hit d4 with ...c5, while White has no development to show for the " +
      "queen's trip.",
  },

  "1.d4 e6 2.Nh3": {
    strategy:
      "A rim knight heading for f4, where it would press on e6, but it stands far from the " +
      "centre and leaves the natural f3-square unused. Black simply takes the centre with " +
      "...d5.",
  },

  "1.d4 e6 2.Na3": {
    strategy:
      "Heads for c4 or b5 from the rim and does nothing against the centre. Black can play " +
      "...d5 at once, or take with 2...Bxa3 3.bxa3, doubling and isolating White's a-pawns at " +
      "the cost of the bishop pair.",
  },

  "1.d4 e6 2.d5": {
    strategy:
      "Exchanges the d-pawn for the e-pawn at once: after 2...exd5 3.Qxd5 the queen stands " +
      "exposed in the centre, and Black develops with gain of time by ...Nf6 and ...c6.",
  },

  "1.d4 e6 2.Kd2": {
    strategy:
      "Forfeits castling and puts the king in the open centre, where 2...Bb4+ gains time and " +
      "the king blocks the c1-bishop and the queen. Nothing is gained for the lasting " +
      "weakness.",
  },

  "1.d4 e6 2.Bg5": {
    strategy:
      "Hangs the bishop: the queen's diagonal d8-g5 is open after ...e6, nothing defends the " +
      "bishop, and 2...Qxg5 wins a piece.",
  },

  "1.d4 e6 2.Bh6": {
    strategy: "Loses the bishop for nothing: 2...gxh6 or 2...Nxh6 takes it and nothing recaptures.",
  },

  "1.d4 e6": {
    name: "Franco-Indian Defence",
    background:
      "The name reflects that 1...e6 may lead to the French Defence or to one of the Indian " +
      "Defences. Eric Schiller proposed calling it the Horwitz Defence, after Bernhard " +
      "Horwitz, who played it against Daniel Harrwitz between 1849 and 1852.",
  },
};
