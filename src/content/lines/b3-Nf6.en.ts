import type { OpeningTexts } from "../book.ts";

// English prose for b3-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.b3 Nf6 2.Bb2": {
    strategy:
      "Puts the bishop on the long diagonal at once, where it bears on e5 and the knight on " +
      "f6, and on g7 and h8 once the knight moves. Black can contest the diagonal with ...g6 " +
      "and ...Bg7, but 2...g6 allows 3.e4, because 3...Nxe4 loses the rook to Bxh8. Otherwise " +
      "Black builds with ...e6 and ...d5 or ...b6, and White follows with e3, Nf3 and c4 or " +
      "d4.",
  },

  "1.b3 Nf6 2.e3": {
    strategy:
      "Opens the f1-bishop's diagonal and supports a later d4, keeping Bb2, Nf3 and Be2 or " +
      "Bd3 available in any order. It often transposes into the lines with 2.Bb2, for example " +
      "against ...d5 and ...e6, or against ...e5 and ...Nc6. The cost is an early commitment: " +
      "a later e4 now takes two moves, and Black chooses the set-up first.",
  },

  "1.b3 Nf6 2.Nf3": {
    strategy:
      "Develops the knight, covers e5 and keeps c4, d4 and e3 available, with Bb2 to follow. " +
      "Since 2...e5 would lose a pawn to Nxe5, Black builds with ...d5, ...e6 or ...b6 " +
      "instead. Black can also fianchetto with ...g6 and ...Bg7 undisturbed: without the " +
      "bishop on b2, e4 simply drops a pawn to ...Nxe4.",
  },

  "1.b3 Nf6 2.c4": {
    strategy:
      "Places the c-pawn on c4, supported by b3, where it controls d5, with Bb2, Nc3 and Nf3 " +
      "to follow in English-style set-ups. Sound but slow: no pawn stands in the centre yet, " +
      "so Black can claim it with ...e5 or with ...e6 and ...d5.",
  },

  "1.b3 Nf6 2.d4": {
    strategy:
      "Occupies the centre with a pawn, but after Bb2 the d4-pawn blocks the bishop's " +
      "diagonal, so the bishop mainly supports d4 until the centre opens. Without a pawn on " +
      "c4, Black can take space with ...d5 or strike at d4 with ...c5 and develops easily.",
  },

  "1.b3 Nf6 2.g3": {
    strategy:
      "Prepares Bg2 for a double fianchetto in which both bishops aim at the centre along the " +
      "long diagonals. The set-up is solid and easy to play, but slow: Black can take space " +
      "with ...d5 and ...e5 or ...c5 while White completes the development.",
  },

  "1.b3 Nf6 2.d3": {
    strategy:
      "Supports a later e4 and keeps Bb2, Nd2 and Nf3 available for a modest set-up. With the " +
      "pawn on d3, d4 now costs a second move, so Black can take the centre with ...d5 and " +
      "...e5 almost unopposed. Sound but passive.",
  },

  "1.b3 Nf6 2.Nc3": {
    strategy:
      "Develops a knight that watches e4 and d5 and prepares e4. It blocks the c-pawn, so c4 " +
      "set-ups are off for now, and after ...d5 and Bb2 the advance ...d4 gains space with a " +
      "tempo against the knight. Playable, but there is no reason to prefer it to Bb2.",
  },

  "1.b3 Nf6 2.a3": {
    strategy:
      "Keeps a black bishop off b4 and prepares b4, but spends a tempo on a rim pawn that " +
      "does nothing for the centre or development. Black takes space at leisure with ...d5 " +
      "and ...e6 or ...e5.",
  },

  "1.b3 Nf6 2.a4": {
    strategy:
      "Gains queenside space and stops ...b5, but spends a tempo on a rim pawn and weakens " +
      "the b4-square. The centre and development are untouched, so Black builds with ...d5 " +
      "and ...e6.",
  },

  "1.b3 Nf6 2.c3": {
    strategy:
      "Prepares d4 but blocks the long diagonal that b3 was meant to open, so a bishop on b2 " +
      "would run into its own pawn. It also takes c3 from the knight and develops nothing. " +
      "Black claims the centre with ...d5 and ...e5.",
  },

  "1.b3 Nf6 2.f3": {
    strategy:
      "Prepares e4 but takes f3 from the knight, weakens the e1-h4 diagonal and develops " +
      "nothing. Black can take the centre with ...e5 and ...d5 and gets ahead in development.",
  },

  "1.b3 Nf6 2.f4": {
    strategy:
      "Controls e5 and aims for a Bird-type set-up, but spends a move on the f-pawn that " +
      "develops nothing and weakens e3 and the e1-h4 diagonal. Black develops with ...d5, " +
      "...e6 or ...g6.",
  },

  "1.b3 Nf6 2.h3": {
    strategy:
      "Takes g4 from a black knight or bishop, but spends a tempo on a rim pawn the position " +
      "does not yet call for. Black gets the centre with ...d5 and ...e6 or ...e5 while White " +
      "is still undeveloped.",
  },

  "1.b3 Nf6 2.h4": {
    strategy:
      "Grabs kingside space, but develops nothing and loosens the kingside for no concrete " +
      "gain. Black takes the centre with ...d5 and ...e6 or ...e5 and is simply ahead in " +
      "development.",
  },

  "1.b3 Nf6 2.Na3": {
    strategy:
      "Develops the knight to the rim, aiming at b5 and c4, but leaves it far from the centre " +
      "and blocks the a-pawn. Black takes the centre with ...d5, which also covers c4, and " +
      "...e6, while the knight stays out of play.",
  },

  "1.b3 Nf6 2.Nh3": {
    strategy:
      "Heads for f4 via the rim, but does nothing for the centre meanwhile. Once ...d5 opens " +
      "the c8-bishop, ...Bxh3 followed by gxh3 would double White's pawns; Nf3 was the " +
      "natural square.",
  },

  "1.b3 Nf6 2.Ba3": {
    strategy:
      "Aims at f8, but the e7-pawn blocks the diagonal, and the bishop leaves the long " +
      "diagonal that b3 prepared. Black develops with ...d5 and ...e6, and the bishop on a3 " +
      "achieves nothing beyond a possible trade of the dark-squared bishops.",
  },

  "1.b3 Nf6 2.b4": {
    strategy:
      "Spends a second move on the b-pawn to reach b4, where nothing defends it: after 2...e6 " +
      "the f8-bishop attacks it, so White must spend yet another tempo on a3, c3 or b5 or " +
      "give it up to ...Bxb4. The position is that of 1.b4 Nf6, but with Black to move.",
  },

  "1.b3 Nf6 2.g4": {
    strategy:
      "Hangs a pawn: 2...Nxg4 wins it, because the queen's diagonal is closed by the e2-pawn " +
      "and nothing else covers g4. The kingside is loosened as well.",
  },

  "1.b3 Nf6 2.e4": {
    strategy:
      "Leaves the e-pawn undefended, so 2...Nxe4 wins it. After 3.Bb2 the bishop eyes g7, but " +
      "the f8-bishop guards it, and Black keeps the extra pawn in a sound position with ...d5 " +
      "or ...Nf6.",
  },

  "1.b3 Nf6": {
    name: "Nimzowitsch–Larsen Attack: Indian Variation",
    background:
      "The third most common reply to 1.b3, chosen in about 15 percent of games overall and " +
      "in about 20 percent at the 2500 rating level.",
  },

  "1.b3 Nf6 2.Bb2 e6": {
    strategy:
      "Opens the f8-bishop's diagonal and keeps the choice between a classical set-up with " +
      "...d5 and ...Be7, a Queen's Indian set-up with ...b6 and ...Bb7, and the break ...c5. " +
      "The queen now also guards the f6-knight, so Bxf6 can be met by ...Qxf6 without damage " +
      "to Black's pawns. White usually continues with e3 and Nf3, then c4 or d4. The cost is " +
      "a c8-bishop that stays shut in until the pawn structure is decided.",
  },

  "1.b3 Nf6 2.Bb2 d5": {
    strategy:
      "Takes the centre with a pawn and, together with the f6-knight, makes e4 hard for White " +
      "to achieve. The position is the same as after 1...d5 2.Bb2 Nf6: White usually " +
      "continues with e3 and Nf3, while Black builds with ...e6, ...Be7 and ...O-O or " +
      "develops the c8-bishop to f5 first. The b2-bishop then bites on a solid pawn centre, " +
      "which White later challenges with c4.",
  },

  "1.b3 Nf6 2.Bb2 g6": {
    strategy:
      "Prepares ...Bg7 to meet the b2-bishop on the long diagonal, followed by ...O-O and " +
      "...d6 or ...d5. Until the bishop arrives, the h8-rook stands behind the f6-knight on " +
      "that diagonal: after 3.e4, 3...Nxe4 loses the rook to 4.Bxh8, so Black usually answers " +
      "3...d6 or 3...Bg7. White can also take at once with 3.Bxf6 exf6, giving up the bishop " +
      "pair for Black's doubled f-pawns.",
  },

  "1.b3 Nf6 2.Bb2 c5": {
    strategy:
      "Contests d4 at once and keeps the choice between ...d5, ...d6 and a kingside " +
      "fianchetto open. Black can follow with ...e6 and ...Nc6, or with ...d5. White most " +
      "often answers with e3 and Nf3; with c4 instead, the game reaches structures of the " +
      "Symmetrical English.",
  },

  "1.b3 Nf6 2.Bb2 b6": {
    strategy:
      "Mirrors White's set-up in Queen's Indian style: ...Bb7 takes the other long diagonal " +
      "and watches e4, followed by ...e6 and ...Be7. The set-up is solid but leaves the " +
      "centre to White, who builds with e3, Nf3 and c4. Sound, though Black has little active " +
      "counterplay and mostly reacts to White's plan.",
  },

  "1.b3 Nf6 2.Bb2 Nc6": {
    strategy:
      "Develops a piece and prepares ...e5: after 3.e3 e5 the position is that of 1...e5 " +
      "2.Bb2 Nc6 3.e3 Nf6. But 3.Nf3 stops the plan, since ...e5 would then lose a pawn to " +
      "Nxe5. The knight also blocks the c-pawn, so Black commits early while White chooses " +
      "the set-up.",
  },

  "1.b3 Nf6 2.Bb2 d6": {
    strategy:
      "Prepares ...e5, which the d6-pawn then holds against the b2-bishop, or a King's Indian " +
      "set-up with ...g6 and ...Bg7. The move frees the c8-bishop but does not contest e4 as " +
      "...d5 does, so White develops freely with e3, g3 or c4.",
  },

  "1.b3 Nf6 2.Bb2 c6": {
    strategy:
      "Prepares ...d5 with a Slav-style pawn pair and keeps the c8-bishop free for ...Bf5 " +
      "once the d-pawn has moved. The move is solid but slower than ...d5 at once and takes " +
      "c6 away from the b8-knight, so White gets time for e3, Nf3 and c4.",
  },

  "1.b3 Nf6 2.Bb2 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but does nothing for the centre. " +
      "Once e3 opens the f1-bishop's diagonal, Bxa6 bxa6 would double Black's a-pawns.",
  },

  "1.b3 Nf6 2.Bb2 Rg8": {
    strategy:
      "Moves the rook off h8 for no reason, since the g7-pawn already shields it from the " +
      "b2-bishop. The move spends a tempo and gives up kingside castling, while White gets a " +
      "free hand for e3, Nf3 and c4.",
  },

  "1.b3 Nf6 2.Bb2 a6": {
    strategy:
      "Spends a tempo on a rim pawn that neither takes the centre nor develops a piece. White " +
      "continues with e3, Nf3 and c4 and gets ahead in development.",
  },

  "1.b3 Nf6 2.Bb2 a5": {
    strategy:
      "Aims at ...a4 to undermine b3, but spends a tempo on a rim pawn and leaves b5 and b6 " +
      "weak. White ignores it and develops with e3 and Nf3.",
  },

  "1.b3 Nf6 2.Bb2 b5": {
    strategy:
      "Grabs queenside space, but the pawn is loose: 3.e3 threatens Bxb5, and 3.a4 undermines " +
      "it as well. Black has to spend moves on ...a6 or ...c6, and the squares c5 and c6 stay " +
      "weak.",
  },

  "1.b3 Nf6 2.Bb2 g5": {
    strategy:
      "Gains kingside space, but loosens f5 and h5 and opens the long diagonal toward the " +
      "h8-rook. 3.h4 undermines the pawn: after 3...gxh4 the h-file opens for Rxh4, and after " +
      "3...g4 the pawn is overextended.",
  },

  "1.b3 Nf6 2.Bb2 h6": {
    strategy:
      "Takes g5 from a white bishop or knight, but no piece is heading there. The tempo does " +
      "nothing for the centre or development, and White gets e3, Nf3 and c4 for free.",
  },

  "1.b3 Nf6 2.Bb2 h5": {
    strategy:
      "Advances on the flank to prepare ...Ng4 or ...h4, but weakens g5 and develops nothing. " +
      "White plays e3, Nf3 and c4, and the kingside advance has no target.",
  },

  "1.b3 Nf6 2.Bb2 Ng8": {
    strategy:
      "Undoes the knight move, so White has made two useful moves, b3 and Bb2, and Black " +
      "none. White continues with e3, Nf3 and c4 or e4 against a position in which Black has " +
      "developed nothing.",
  },

  "1.b3 Nf6 2.Bb2 Ng4": {
    strategy:
      "Attacks f2 and h2, but nothing supports the knight: 3.e3 opens the queen's diagonal to " +
      "g4, and 3.h3 drives it away at once. ...Ne5 runs into Bxe5, so the knight returns to " +
      "f6 or h6 and White has gained time.",
  },

  "1.b3 Nf6 2.Bb2 Nh5": {
    strategy:
      "Aims at f4 but puts the knight on the rim. 3.e3 takes f4 away and lets the queen " +
      "attack h5, so the knight must go back to f6, since ...g6 would drop the h8-rook to " +
      "Bxh8.",
  },

  "1.b3 Nf6 2.Bb2 Ne4": {
    strategy:
      "Centralises the knight, but nothing supports it, and 3.d3 attacks it at once. " +
      "Retreating to f6 loses two tempi, and 3...Nc5 allows 4.d4 with tempo, so White gains " +
      "time for e4 or Nf3.",
  },

  "1.b3 Nf6 2.Bb2 Nd5": {
    strategy:
      "Centralises the knight, but 3.e4 hits it at once and takes the centre with tempo. " +
      "After 3...Nf6 4.e5 chases it again, and after 3...Nb6 4.d4 White has a broad pawn " +
      "centre while Black has spent three moves on one knight.",
  },

  "1.b3 Nf6 2.Bb2 e5": {
    strategy:
      "Puts the pawn on a square the bishop on b2 already attacks and nothing defends, so " +
      "3.Bxe5 wins it. After 3...Nc6 4.Bb2 Black has only a small lead in development for the " +
      "pawn.",
  },

  "1.b3 Nf6 2.e3 d5": {
    strategy:
      "Takes the centre at once and keeps White from advancing the e-pawn to e4 for the " +
      "moment. Black follows with …e6 and …c5, or places the light-squared bishop on f5 " +
      "before closing the chain with …e6, while White develops with Bb2, Nf3 and Be2 or Bb5 " +
      "and keeps c4 as a lever against d5. The game continues as after 1.b3 d5 2.e3 Nf6.",
  },

  "1.b3 Nf6 2.e3 e5": {
    strategy:
      "Occupies the centre and invites 3.Bb2, which attacks the pawn; Black defends it with " +
      "…Nc6, or with …d6 for a more modest set-up. After 3.Bb2 Nc6 the position is the same " +
      "as after 1.b3 e5 2.Bb2 Nc6 3.e3 Nf6, where White plays Bb5 against the knight that " +
      "guards e5, and can strike at e5 with f4 or restrain …d5 with c4. The price is that e5 " +
      "needs support for a long time.",
  },

  "1.b3 Nf6 2.e3 g6": {
    strategy:
      "Prepares …Bg7 to meet Bb2 on the long diagonal, followed by …O-O and …d6 or …d5. The " +
      "set-up is solid and flexible and keeps …c5 available. Until Black castles, the " +
      "g7-bishop is undefended, so moving the f6-knight off the long diagonal lets Bxg7 win a " +
      "piece.",
  },

  "1.b3 Nf6 2.e3 e6": {
    strategy:
      "Opens the f8-bishop and keeps the choice of set-up open. After Bb2 Black can build the " +
      "classical centre with …d5, …Be7 and …O-O, or fianchetto with …b6 and …Bb7 in Queen's " +
      "Indian style. The position stays solid, but the e6-pawn shuts in the c8-bishop unless " +
      "it goes to b7.",
  },

  "1.b3 Nf6 2.e3 Nc6": {
    strategy:
      "Develops a piece toward the centre and prepares …e5, which can transpose to the lines " +
      "of 1…e5 with …Nc6 and …Nf6. The knight blocks the c-pawn, and Bb5 can trade it for " +
      "doubled c-pawns, a pin once the d-pawn has moved. Sound, though less flexible than …e6 " +
      "or …d5.",
  },

  "1.b3 Nf6 2.e3 b6": {
    strategy:
      "Mirrors White's b3: …Bb7 will contest the long diagonal, and …e6 and …Be7 follow in " +
      "the manner of a Queen's Indian. The structure is solid, but Black claims no central " +
      "space and mostly reacts to White's set-up. Sound, yet less ambitious than …d5 or …e5.",
  },

  "1.b3 Nf6 2.e3 c6": {
    strategy:
      "Prepares …d5 with a Slav-style pawn pair and keeps the c8-bishop free for …Bf5. It is " +
      "solid but slow, and it takes c6 away from the b8-knight, so White gains time for Bb2 " +
      "and Nf3. Sound, though less active than …d5 at once.",
  },

  "1.b3 Nf6 2.e3 c5": {
    strategy:
      "Contests d4 from the flank and keeps …Nc6, …e6, …d5 and …g6 all available. After Bb2 " +
      "Black develops with …Nc6 and …e6 or with …g6 and …Bg7, while White chooses between Nf3 " +
      "with Be2, Bb5 against the c6-knight, or c4. Sound, but rarely chosen here, where …d5 " +
      "and …g6 are the main replies.",
  },

  "1.b3 Nf6 2.e3 d6": {
    strategy:
      "Prepares …e5 with …Nbd7 for a compact set-up with a firm hold on e5, or …g6 and …Bg7 " +
      "for a fianchetto. Sound but modest: unlike …d5, the pawn does not contest e4, and " +
      "White develops freely with Bb2 and Nf3.",
  },

  "1.b3 Nf6 2.e3 Na6": {
    strategy:
      "Puts the knight on the rim, aiming at b4 or c5. Bxa6 bxa6 doubles the a-pawns at once, " +
      "and from a6 the knight does little for the centre.",
  },

  "1.b3 Nf6 2.e3 Rg8": {
    strategy:
      "Gives up kingside castling for good and puts the rook on a closed file, doing nothing " +
      "for the centre or for development. White continues with Bb2 and Nf3 while Black's king " +
      "has lost its natural home.",
  },

  "1.b3 Nf6 2.e3 a6": {
    strategy:
      "Spends a tempo on a flank pawn to prepare …b5, but neither fights for the centre nor " +
      "develops a piece. White continues with Bb2 and Nf3 and leads in development.",
  },

  "1.b3 Nf6 2.e3 a5": {
    strategy:
      "Gains space on the queenside and can follow with …a4, but develops nothing and weakens " +
      "b5 and b6. White continues with Bb2 and Nf3 while the flank pawn does nothing for the " +
      "centre.",
  },

  "1.b3 Nf6 2.e3 g5": {
    strategy:
      "Weakens f5, h5 and the long diagonal without developing a piece. After Bb2 the " +
      "f6-knight cannot move without losing the h8-rook to Bxh8, and h4 undermines the " +
      "g5-pawn at once.",
  },

  "1.b3 Nf6 2.e3 h6": {
    strategy:
      "Spends a tempo on a flank pawn that guards g5, a square the c1-bishop cannot reach " +
      "behind the d2- and e3-pawns. The move does nothing for the centre, and White develops " +
      "with Bb2 undisturbed.",
  },

  "1.b3 Nf6 2.e3 h5": {
    strategy:
      "Advances the rook pawn without purpose, loses a tempo and weakens g5 and g6, with " +
      "nothing gained in the centre. White simply develops with Bb2 and Nf3.",
  },

  "1.b3 Nf6 2.e3 Ng8": {
    strategy:
      "Retreats the only developed piece and undoes Black's one useful move. White has made " +
      "two useful moves, b3 and e3, to Black's none, and continues with Bb2 and Nf3 at " +
      "leisure.",
  },

  "1.b3 Nf6 2.e3 Ne4": {
    strategy:
      "Centralises the knight too early. d3 kicks it at once, and after …Nf6 or …Nc5 White " +
      "has gained a tempo; the retreat …Nc5 also runs into b4.",
  },

  "1.b3 Nf6 2.e3 Nd5": {
    strategy:
      "Puts the knight where c4 hits it with tempo. After 3.c4 Nb6 White has taken space with " +
      "gain of time and continues with Bb2, while Black has spent three moves on one knight.",
  },

  "1.b3 Nf6 2.e3 b5": {
    strategy:
      "Hangs the pawn to Bxb5: nothing defends it, and the f1-bishop reaches b5 along the " +
      "diagonal that e3 has opened. …Bb7 then hits g2, but Nf3 blocks the diagonal and White " +
      "stays a clean pawn up.",
  },

  "1.b3 Nf6 2.e3 Ng4": {
    strategy:
      "Hangs the knight: nothing defends g4, and Qxg4 wins it along the diagonal that e3 has " +
      "opened. Black cannot recapture, because the d7-pawn shuts in the c8-bishop.",
  },

  "1.b3 Nf6 2.e3 Nh5": {
    strategy:
      "Hangs the knight to Qxh5 along the diagonal that e3 has opened, since nothing defends " +
      "h5. Black can chase the queen with …g6, but the piece is not regained.",
  },
};
