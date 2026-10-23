import type { OpeningTexts } from "../book.ts";

// English prose for g3-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.g3 Nf6 2.Bg2": {
    strategy:
      "Completes the fianchetto and aims the bishop along the long diagonal at the centre and " +
      "b7. After 2...d5 the game transposes into the lines of 1...d5, usually with Nf3, O-O " +
      "and then d3 and e4 or c4; against Indian set-ups White can still choose between " +
      "English, Réti and King's Indian Attack structures. The cost is a centre still " +
      "unoccupied, which Black can claim with ...d5 and ...c5.",
  },

  "1.g3 Nf6 2.Nf3": {
    strategy:
      "Develops the knight towards the centre and prepares quick castling, with Bg2 and O-O " +
      "to follow. White keeps the choice between c4 for a Réti or English set-up, d3 with " +
      "Nbd2 and e4 for a King's Indian Attack, or d4 with c4 for a Catalan structure. The " +
      "knight also covers e5, so Black cannot play an immediate ...e5 and usually answers " +
      "with ...d5 or ...g6.",
  },

  "1.g3 Nf6 2.c4": {
    strategy:
      "Fights for d5 from the flank and keeps Nc3, Nf3 and d4 all available. Against ...e6 " +
      "and ...d5 White can add d4 for a Catalan set-up; against ...g6 the game is an English " +
      "Opening with both king's bishops fianchettoed, against ...c5 a Symmetrical English and " +
      "against ...e5 a reversed Sicilian. The pawn occupies no central square yet, so Black " +
      "still chooses the structure.",
  },

  "1.g3 Nf6 2.d4": {
    strategy:
      "Takes the centre with a pawn and prepares Bg2, Nf3 and O-O, with c4 to follow for a " +
      "Catalan-like set-up. It is sound, but less flexible than 2.Nf3 or 2.c4, since the " +
      "d-pawn is committed before Black's set-up is clear and Black can answer ...d5 or ...c5 " +
      "at once.",
  },

  "1.g3 Nf6 2.d3": {
    strategy:
      "Supports e4 and opens the c1-bishop, steering towards Bg2, Nf3 and e4 in King's Indian " +
      "Attack style. It is sound but modest: Black takes the centre with ...d5 and ...e5, and " +
      "White's game stays passive until e4 can be pushed.",
  },

  "1.g3 Nf6 2.Nc3": {
    strategy:
      "Develops the knight, covers d5 and e4 and supports a later e4. It blocks the c-pawn, " +
      "though, so English and Catalan plans with c4 are off for now, and Black can take space " +
      "with ...d5 at once and chase the knight with ...d4.",
  },

  "1.g3 Nf6 2.c3": {
    strategy:
      "Prepares d4 with a solid pawn chain, but develops nothing and takes c3 from the " +
      "queen's knight. The pawn does not fight for d5, so Black takes the centre with ...d5 " +
      "and develops freely.",
  },

  "1.g3 Nf6 2.e3": {
    strategy:
      "Supports d4 and prepares a quiet set-up with Bg2, Ne2 and d4. It is sound but passive: " +
      "once d4 follows, the e3-pawn shuts in the c1-bishop, which then needs b3 and Bb2 to " +
      "come out, and Black takes the centre with ...d5 and ...e5.",
  },

  "1.g3 Nf6 2.b3": {
    strategy:
      "Prepares Bb2, so that with Bg2 both bishops bear on the centre from the long diagonals " +
      "in a double fianchetto. It is sound but slow in the centre: Black can claim space with " +
      "...d5 and ...e5 or contest the a1–h8 diagonal with ...g6 and ...Bg7.",
  },

  "1.g3 Nf6 2.f4": {
    strategy:
      "Controls e5 and heads for a Bird's Opening with Bg2, Nf3 and O-O, the Leningrad Dutch " +
      "set-up with colours reversed. It is sound but loosens the king's position: with the " +
      "f-pawn gone, the g1–a7 diagonal lies open towards a castled king, and Black takes the " +
      "centre with ...d5 and ...c5.",
  },

  "1.g3 Nf6 2.Nh3": {
    strategy:
      "Develops the knight to the rim, where it keeps the f-pawn free and can go to f4, but " +
      "covers no central square. Black takes the centre with ...d5 and ...e5, and Nf3 would " +
      "develop the same piece to a better square.",
  },

  "1.g3 Nf6 2.Bh3": {
    strategy:
      "Develops the bishop on the c8–h3 diagonal instead of fianchettoing it. After ...d5 or " +
      "...d6 it faces Black's light-squared bishop, and either the bishops are traded, " +
      "leaving the light squares weakened by g3 without their defender, or White retreats to " +
      "g2 a tempo down.",
  },

  "1.g3 Nf6 2.Na3": {
    strategy:
      "Develops the knight to the rim, where it eyes b5 and c4 but guards nothing in the " +
      "centre. Black takes the centre with ...d5, which also covers c4, and Nc3 would develop " +
      "the same piece with more effect.",
  },

  "1.g3 Nf6 2.b4": {
    strategy:
      "Grabs queenside space and prepares Bb2, but nothing defends the pawn: after ...e6 the " +
      "f8-bishop attacks it, and White must spend another tempo on a3, c3 or b5 or give it " +
      "up. Black meanwhile takes the centre with ...d5.",
  },

  "1.g3 Nf6 2.a3": {
    strategy:
      "Spends a tempo on a queenside pawn move that prepares b4 but does nothing for the " +
      "centre or development. Black takes space with ...d5 and ...e5.",
  },

  "1.g3 Nf6 2.a4": {
    strategy:
      "Gains queenside space and controls b5, but spends a tempo on a rim pawn that does " +
      "nothing for the centre or development. Black occupies the centre with ...d5 and ...e5 " +
      "and develops freely.",
  },

  "1.g3 Nf6 2.f3": {
    strategy:
      "Prepares e4, but takes f3 from the g1-knight, blocks the long diagonal the g3 " +
      "fianchetto was meant to open and loosens the g1–a7 diagonal. Black takes the centre " +
      "with ...d5 and ...e5.",
  },

  "1.g3 Nf6 2.h3": {
    strategy:
      "A waiting move that stops ...Ng4 and ...Bg4 but costs a tempo with the centre and " +
      "development untouched. Black takes the centre with ...d5 and ...e5 while White has " +
      "nothing to show for it.",
  },

  "1.g3 Nf6 2.h4": {
    strategy:
      "Gains kingside space for h5, but with no ...g6 to attack yet it spends a tempo on a " +
      "rim pawn while the centre and development wait. It also loosens the pawns in front of " +
      "White's own king, and Black takes the centre with ...d5 and ...e5.",
  },

  "1.g3 Nf6 2.g4": {
    strategy:
      "Hangs a pawn: nothing defends g4, so 2...Nxg4 wins it for free, and the kingside is " +
      "left weakened.",
  },

  "1.g3 Nf6 2.e4": {
    strategy:
      "Leaves the e-pawn undefended: after 2...Nxe4 3.Bg2 attacks the knight, but ...d5 holds " +
      "it, and Black keeps a clean extra pawn.",
  },

  "1.g3 Nf6": {
    name: "Hungarian Opening: Indian Defence",
  },

  "1.g3 Nf6 2.Bg2 d5": {
    strategy:
      "Claims the centre and transposes into 1.g3 d5 2.Bg2 Nf6. White goes on with Nf3 and " +
      "O-O, then either prepares e4 with d3 or strikes at d5 with c4, often adding d4 for a " +
      "Catalan set-up. Black keeps a sound game with …c6 and …Bg4, or with …e6 and …Be7, and " +
      "the d5-pawn is what both White plans aim at.",
  },

  "1.g3 Nf6 2.Bg2 g6": {
    strategy:
      "Mirrors White's set-up: …Bg7 and …O-O follow, then …d6 or …d5, with …c5 or …e5 as the " +
      "central break. Each fianchettoed bishop rules its own long diagonal, White's on h1–a8 " +
      "and Black's on a1–h8. White chooses between c4 with Nc3, an English with both king's " +
      "bishops fianchettoed, Nf3 with O-O and d3, and d4 with c4, which leads to a fianchetto " +
      "King's Indian or Grünfeld.",
  },

  "1.g3 Nf6 2.Bg2 e5": {
    strategy:
      "Takes the centre and frees the f8-bishop, transposing into 1.g3 e5 2.Bg2 Nf6. White " +
      "chooses between d3, Nf3 and O-O, a King's Indian set-up with the colours reversed, and " +
      "c4 with Nc3 for an English. Black builds with …d5 or with …Nc6 and …d6, and the " +
      "e5-pawn needs a defender once Nf3 attacks it.",
  },

  "1.g3 Nf6 2.Bg2 c5": {
    strategy:
      "Controls d4 from the flank and keeps …d5, …e6 and …g6 available. White can enter a " +
      "Symmetrical English with c4 and Nc3, or play Nf3 and O-O and keep the centre flexible. " +
      "Black follows with …Nc6 and …g6 for a symmetrical set-up, or with …d5 to claim the " +
      "centre.",
  },

  "1.g3 Nf6 2.Bg2 e6": {
    strategy:
      "Opens the f8-bishop and prepares …d5 with …Be7, a solid set-up. White meets it with " +
      "Nf3, d3 and e4 in King's Indian Attack style, or with c4 and d4 for a Catalan. The " +
      "cost is the c8-bishop, which stays shut in behind e6 once …d5 follows, unless Black " +
      "develops it with …b6 and …Bb7, which is safe once …d5 has closed the long diagonal.",
  },

  "1.g3 Nf6 2.Bg2 Nc6": {
    strategy:
      "Develops a knight towards d4 and e5 and blocks the long diagonal, so Bxc6 would only " +
      "give up White's best bishop. It puts no pawn in the centre, though, so White can take " +
      "space with d4 or c4 and Black must react. Sound, but less flexible than …d5 or …e5.",
  },

  "1.g3 Nf6 2.Bg2 c6": {
    strategy:
      "Prepares …d5 behind a solid pawn chain and closes the long diagonal in advance, with " +
      "…Bg4 or …Bf5 to follow once the centre is settled. The c-pawn is committed before " +
      "White shows a set-up, and the b8-knight loses c6 and usually develops via d7. Sound, " +
      "but slower than …d5 at once.",
  },

  "1.g3 Nf6 2.Bg2 d6": {
    strategy:
      "Prepares …e5 and a compact set-up with …Nbd7, …Be7 or …g6, and opens the c8-bishop's " +
      "diagonal. It concedes central space, so White builds with c4, Nc3 and e4, or with d4 " +
      "after Nf3. Sound, though passive.",
  },

  "1.g3 Nf6 2.Bg2 Na6": {
    strategy:
      "Puts a knight on the rim, from where it eyes b4 and c5 but does nothing for the " +
      "centre. White gets time for Nf3, O-O and d4 or c4, and d4 also takes c5 away.",
  },

  "1.g3 Nf6 2.Bg2 Rg8": {
    strategy:
      "Wastes a tempo and gives up kingside castling for good, without helping development or " +
      "the centre. The rook has no job on g8 while White simply continues with Nf3, O-O and " +
      "d4.",
  },

  "1.g3 Nf6 2.Bg2 a6": {
    strategy:
      "A waiting move that prepares …b5, but that advance would still drop the a8-rook to " +
      "Bxa8 while the long diagonal is open. It does nothing for the centre or development, " +
      "and White continues with Nf3, O-O and d4 or c4.",
  },

  "1.g3 Nf6 2.Bg2 a5": {
    strategy:
      "Gains a little queenside space and controls b4, but does nothing for the centre or " +
      "development. White continues with Nf3, O-O and d4 or c4 with a free hand.",
  },

  "1.g3 Nf6 2.Bg2 g5": {
    strategy:
      "Gains kingside space but loosens f5 and h5 and the cover of a future castled king. The " +
      "pawn is also exposed: 3.d4 threatens Bxg5 and 3.h4 attacks it directly, so Black must " +
      "spend further moves on it.",
  },

  "1.g3 Nf6 2.Bg2 h6": {
    strategy:
      "A prophylactic pawn move that takes g5 from a bishop still locked behind its own " +
      "pawns. It does not help development or the centre, and White plays Nf3, O-O and d4 or " +
      "c4 at leisure.",
  },

  "1.g3 Nf6 2.Bg2 h5": {
    strategy:
      "Prepares …h4 to open lines against g3, but weakens g5 and develops nothing. White can " +
      "halt the pawn with h4 or simply develop with Nf3 and d4.",
  },

  "1.g3 Nf6 2.Bg2 Ng8": {
    strategy:
      "Undoes the first move. Black has spent two tempi to get back to the start while White " +
      "has developed the bishop and keeps a free hand in the centre.",
  },

  "1.g3 Nf6 2.Bg2 Ng4": {
    strategy:
      "Eyes f2 and h2, but both are guarded and 3.h3 drives the knight away at once; 3…Ne5 " +
      "4.d4 only gains White more time. After the retreat to f6 Black has spent two moves on " +
      "the knight while White has added h3.",
  },

  "1.g3 Nf6 2.Bg2 Nh5": {
    strategy:
      "Puts the knight on the rim, where it eyes g3 but cannot take it, as the pawn is " +
      "guarded by h2 and f2. It does nothing for the centre or development, and White gets " +
      "Nf3, O-O and d4 or c4 for free.",
  },

  "1.g3 Nf6 2.Bg2 b6": {
    strategy:
      "Opens the long diagonal, and 3.Bxa8 takes the rook, as nothing recaptures on a8; even " +
      "if the bishop is later trapped there, White stays at least the exchange ahead. A " +
      "queenside fianchetto works only after the diagonal is closed first, for instance by " +
      "…d5 or …c6.",
  },

  "1.g3 Nf6 2.Bg2 b5": {
    strategy:
      "Opens the long diagonal as well: 3.Bxa8 takes the rook, since nothing recaptures on " +
      "a8, and White stays at least the exchange ahead even if the bishop is later trapped " +
      "there. The queenside space gained does not make up for the material.",
  },

  "1.g3 Nf6 2.Bg2 Ne4": {
    strategy:
      "Walks into the bishop's diagonal: 3.Bxe4 wins the knight, as nothing guards e4 and " +
      "Black has no pawn on d5 to recapture.",
  },

  "1.g3 Nf6 2.Bg2 Nd5": {
    strategy:
      "Hangs the knight: 3.Bxd5 wins it, since the d7-pawn blocks the queen from recapturing " +
      "on d5 and nothing else guards the square.",
  },
};
