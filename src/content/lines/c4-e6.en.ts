import type { OpeningTexts } from "../book.ts";

// English prose for c4-e6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.c4 e6 2.Nf3": {
    strategy:
      "Develops the king's knight and guards d4 and e5 without committing a pawn. After " +
      "2...d5 White can enter the Queen's Gambit Declined with 3.d4 or the Neo-Catalan set-up " +
      "with 3.g3 Nf6 4.Bg2, while 2...Nf6 leads to Anglo-Indian lines. Black still chooses " +
      "the structure with 2...d5, 2...c5 or 2...Nf6.",
  },

  "1.c4 e6 2.Nc3": {
    strategy:
      "Develops the queen's knight toward the centre, adds control of d5 and e4 and keeps d4, " +
      "e4 and g3 all available. After 2...d5 White can reach a Queen's Gambit Declined with " +
      "3.d4 or its Exchange structure with 3.cxd5 exd5 4.d4, while 2...Nf6 leads to " +
      "Anglo-Indian set-ups. Black can also play 2...Bb4, ready to take on c3 and double " +
      "White's c-pawns.",
  },

  "1.c4 e6 2.d4": {
    strategy:
      "Occupies the centre at once: together with the c4-pawn, the d4-pawn controls c5, d5 " +
      "and e5. After 2...d5 the game is a Queen's Gambit Declined, and 2...Nf6 heads for the " +
      "Nimzo-Indian, Queen's Indian or Bogo-Indian. Black can also choose the Dutch with " +
      "2...f5, the English Defence with 2...b6 or the Keres Defence with 2...Bb4+, usually " +
      "met by 3.Bd2.",
  },

  "1.c4 e6 2.g3": {
    strategy:
      "Prepares Bg2, which presses on d5 and b7 along the long diagonal. After 2...d5 3.Bg2 " +
      "Nf6 4.Nf3 the game reaches the Neo-Catalan, and a later d4 turns it into a Catalan; " +
      "Nc3 also stays available. The kingside comes first, though: 2...d5 attacks the " +
      "undefended c4-pawn at once, and Black can also strike with 2...c5.",
  },

  "1.c4 e6 2.e4": {
    strategy:
      "Takes the centre with the c- and e-pawns and transposes to a French Defence in which " +
      "White has played c4 instead of d4. The reply 2...d5 attacks both pawns, and after " +
      "3.exd5 exd5 4.cxd5 Qxd5 5.Nc3 White gains time on the queen but is left with an " +
      "isolated d2-pawn. Sound, but it gives up the English character of the opening.",
  },

  "1.c4 e6 2.b3": {
    strategy:
      "Prepares Bb2 on the long diagonal toward g7 and protects the c4-pawn against 2...d5. " +
      "Nf3, e3 or g3 can follow in a flexible set-up, while Black develops freely with ...d5, " +
      "...Nf6 and ...Be7 or ...c5. Sound, but slower than 2.Nf3 or 2.Nc3.",
  },

  "1.c4 e6 2.d3": {
    strategy:
      "Protects the c4-pawn, supports a later e4 and frees the c1-bishop, preparing a set-up " +
      "with Nc3, g3, Bg2 and e4. The pawn on d3 is modest, though: it takes no part in the " +
      "fight for d5 or d4, and Black takes space with 2...d5 or develops freely with ...Nf6 " +
      "and ...c5. Sound, but more passive than 2.d4.",
  },

  "1.c4 e6 2.e3": {
    strategy:
      "Opens the f1-bishop's diagonal, which also guards c4, and prepares Nc3, Nf3 and d4 in " +
      "a compact set-up that can transpose to a quiet Queen's Gambit Declined. It shuts in " +
      "the c1-bishop until b3 and Bb2, and after 2...d5 3.cxd5 exd5 Black's c8-bishop is free " +
      "and the game is easy for Black. Sound but passive.",
  },

  "1.c4 e6 2.a3": {
    strategy:
      "Stops ...Bb4 and prepares b4, but it develops nothing and spends a tempo. Black takes " +
      "the centre with ...d5 and ...Nf6 while White's pieces are still at home.",
  },

  "1.c4 e6 2.a4": {
    strategy:
      "Gains a little queenside space but leaves b4 as a permanent hole, since neither the a- " +
      "nor the c-pawn can guard it any more. It develops nothing, and Black takes the centre " +
      "with ...d5 and ...Nf6.",
  },

  "1.c4 e6 2.f4": {
    strategy:
      "Takes e5 but develops no piece and opens the e1-h4 diagonal, so 2...Qh4+ forces 3.g3 " +
      "at once. White's kingside is loosened before any piece is out, and Black continues " +
      "freely with ...d5 or ...Nf6.",
  },

  "1.c4 e6 2.g4": {
    strategy:
      "Gains kingside space but leaves the pawn loose: 2...Qh4 attacks it at once and pins " +
      "the f2-pawn, so White must spend another move such as 3.h3 to keep it. The kingside is " +
      "loosened before a single piece has developed.",
  },

  "1.c4 e6 2.h3": {
    strategy:
      "A waiting move that does nothing for the centre or development. Black plays ...d5 and " +
      "...Nf6 while White's pieces are still at home.",
  },

  "1.c4 e6 2.h4": {
    strategy:
      "A flank thrust that does nothing for the centre or development and loosens the " +
      "kingside without a target. White has lost a tempo, and Black replies ...d5 with an " +
      "easy game.",
  },

  "1.c4 e6 2.Na3": {
    strategy:
      "Guards c4 from the rim and heads for c2 or b5, but the knight stands far from the " +
      "centre. Black can play ...d5 at once, or take with 2...Bxa3 3.bxa3, doubling and " +
      "isolating White's a-pawns at the cost of the bishop pair.",
  },

  "1.c4 e6 2.Nh3": {
    strategy:
      "A rim knight heading for f4, which leaves the natural f3-square unused. After 2...d5 " +
      "3.cxd5 exd5 the c8-bishop eyes h3, and ...Bxh3 gxh3 would leave White with doubled, " +
      "isolated h-pawns.",
  },

  "1.c4 e6 2.Qc2": {
    strategy:
      "Guards c4 and supports e4, but brings the queen out before the minor pieces. Black " +
      "takes the centre with ...d5 or gains time with ...Nc6 and ...Nb4, and White has little " +
      "to show for the early queen.",
  },

  "1.c4 e6 2.Qb3": {
    strategy:
      "Eyes b7, which the c8-bishop already guards, so there is no threat. Black develops " +
      "with ...Nc6 or takes space with ...d5, while the early queen has no good follow-up.",
  },

  "1.c4 e6 2.Qa4": {
    strategy:
      "Brings the queen out to the a4-e8 diagonal, where it threatens nothing because d7 is " +
      "guarded. Black develops with ...Nf6 and ...Nc6 and follows with ...d5, with the queen " +
      "offside on a4.",
  },

  "1.c4 e6 2.b4": {
    strategy:
      "Leaves the pawn undefended on the open f8-a3 diagonal, and 2...Bxb4 wins it at once. " +
      "White gets only the half-open b-file and a quick Bb2 in return.",
  },

  "1.c4 e6 2.f3": {
    strategy:
      "Opens the e1-h4 diagonal and loses a pawn: 2...Qh4+ forces 3.g3, since the king can go " +
      "neither to d2 nor to f2, and 3...Qxc4 takes the undefended c-pawn. The move also takes " +
      "f3 from the g1-knight.",
  },

  "1.c4 e6 2.c5": {
    strategy:
      "Gains space but leaves the pawn undefended: 2...Bxc5 wins it at once, since ...e6 has " +
      "opened the f8-bishop's diagonal. 3.d4 gains a tempo on the bishop, but White is simply " +
      "a pawn down.",
  },

  "1.c4 e6": {
    name: "English Opening: Agincourt Defence",
  },

  "1.c4 e6 2.Nc3 Nf6": {
    strategy:
      "Develops the kingside knight and keeps every structure open: …d5 for a Queen's Gambit " +
      "type of position, …Bb4 for a Nimzo-style set-up, …b6 for a Queen's Indian formation or " +
      "…c5 for a symmetrical one. White's sharpest answer is 3.e4, taking the centre at once, " +
      "while 3.Nf3 and 3.g3 lead to quieter play. 3.d4 transposes to the Nimzo-Indian after " +
      "…Bb4 or to the Queen's Gambit Declined after …d5.",
  },

  "1.c4 e6 2.Nc3 d5": {
    strategy:
      "Stakes a claim in the centre at once and heads for a Queen's Gambit type of position. " +
      "After 3.d4 it is a Queen's Gambit Declined, and after 3.cxd5 exd5 4.d4 an Exchange " +
      "structure with a central majority for White and a queenside majority for Black. " +
      "Without the exchange, the e6-pawn supports d5 solidly at the price of a c8-bishop that " +
      "stays shut in until …dxc4 or …b6 and …Bb7 free it.",
  },

  "1.c4 e6 2.Nc3 c5": {
    strategy:
      "Controls d4 and heads for a symmetrical structure in which the e6-pawn stands ready to " +
      "support …d5. Black develops with …Nf6 and …Nc6, or with …b6 and …Bb7, while White " +
      "chooses between Nf3 and a fianchetto with g3 and Bg2. When …d5 comes, an exchange on " +
      "d5 and a later d4 can leave Black with an isolated d-pawn.",
  },

  "1.c4 e6 2.Nc3 Nc6": {
    strategy:
      "Develops a piece and eyes d4 and e5, but the knight blocks the c-pawn and commits " +
      "itself before Black's structure is clear. White can take the centre with e4 or d4 and " +
      "Nf3, while …Nf6 and …Bb4 or …d5 still give Black familiar set-ups. Sound, though less " +
      "flexible than …Nf6 or …d5.",
  },

  "1.c4 e6 2.Nc3 Be7": {
    strategy:
      "Develops the dark-squared bishop and clears the way for castling after …Nf6, keeping " +
      "…d5 for later. It gives up the active …Bb4 and lets White choose between e4 and d4 or " +
      "Nf3 and g3. Sound, but slower and less flexible than …Nf6 or …d5.",
  },

  "1.c4 e6 2.Nc3 Bb4": {
    strategy:
      "Attacks the c3-knight and prepares …Bxc3 to double White's pawns, with …Nf6 and …d5 or " +
      "…c5 to follow. White can meet it with Qc2, which recaptures on c3 without damage, or " +
      "with a3 to claim the bishop pair. Playable, but it commits the bishop before the " +
      "centre is settled and is less direct than …d5 or …Nf6.",
  },

  "1.c4 e6 2.Nc3 b6": {
    strategy:
      "Prepares …Bb7 on the long diagonal and a Queen's Indian set-up with …Nf6 and …Be7. " +
      "White can claim central space at once with e4 and d4, so Black must be ready to hit " +
      "the centre with …Bb4 or …c5. Sound and flexible, but a less direct fight for the " +
      "centre than …d5 or …Nf6.",
  },

  "1.c4 e6 2.Nc3 c6": {
    strategy:
      "Prepares …d5, usually with a Semi-Slav pawn structure after d4, followed by …Nf6. The " +
      "move is slow and takes c6 from the b8-knight, and White can avoid that structure with " +
      "e4, so that …d5 is met by exd5 and an early exchange of pawns. Sound, but less " +
      "flexible than …Nf6 or …d5 at once.",
  },

  "1.c4 e6 2.Nc3 d6": {
    strategy:
      "Builds a compact pawn pair on d6 and e6 from which …Nf6, …Be7 and …O-O are possible, " +
      "with …e5 or …c5 as later breaks. It gives up the fight for the centre, and after d4 a " +
      "hasty …e5 allows dxe5 dxe5 and an exchange of queens that costs Black the right to " +
      "castle. Playable, though passive.",
  },

  "1.c4 e6 2.Nc3 f5": {
    strategy:
      "Heads for a Dutch-type set-up with …Nf6, …Be7 and …O-O, or a Stonewall with …d5 and " +
      "…c6, and takes e4 under control. It weakens e6 and the e8–h5 diagonal, and White meets " +
      "it with d4 or g3 and Bg2. Sound enough, but committal and less solid than …d5.",
  },

  "1.c4 e6 2.Nc3 g6": {
    strategy:
      "Prepares …Bg7 to press along the long diagonal, with …Ne7, …O-O and …d5 or …c5 to " +
      "follow. The set-up is slow, and White can build the centre with e4 and d4 before Black " +
      "has made a claim in it. Flexible, but slower than …Nf6 or …d5.",
  },

  "1.c4 e6 2.Nc3 Na6": {
    strategy:
      "Places the knight on the rim, where it eyes b4 and c5 but leaves d5 and the centre " +
      "uncontested. White takes space with e4 or d4 and Nf3 while Black has lost time.",
  },

  "1.c4 e6 2.Nc3 Qe7": {
    strategy:
      "Brings the queen out early, blocks the f8-bishop and leaves c7 without a defender, so " +
      "Nb5 threatens Nxc7+ and wins time. White then builds the centre with e4 and d4.",
  },

  "1.c4 e6 2.Nc3 Qf6": {
    strategy:
      "Brings the queen out early and takes f6 from the g8-knight. The queen's diagonal only " +
      "reaches the c3-knight, which the b2- and d2-pawns cover, while Nb5 threatens Nxc7+ " +
      "with a fork of king and rook and Ne4 attacks the queen, so Black loses more time.",
  },

  "1.c4 e6 2.Nc3 Qg5": {
    strategy:
      "Puts the queen where d4 opens the c1-bishop's diagonal against it and Nf3 attacks it " +
      "as well, so White develops with gain of time. The pressure on g2 is harmless, since " +
      "Bf1 covers it.",
  },

  "1.c4 e6 2.Nc3 Qh4": {
    strategy:
      "Eyes f2, which the king covers, and the c4-pawn, which nothing defends yet. White " +
      "covers it with e3, opening the f1-bishop's diagonal, or with b3, and then gains time " +
      "against the queen with Nf3 or g3 while Black has developed nothing.",
  },

  "1.c4 e6 2.Nc3 Bd6": {
    strategy:
      "Blocks the d7-pawn, so …d5 is impossible while the bishop stays on d6, and invites " +
      "Nb5, when Nxd6+ cxd6 would take the bishop pair and leave Black with doubled d-pawns. " +
      "White then builds the centre with e4 and d4.",
  },

  "1.c4 e6 2.Nc3 Bc5": {
    strategy:
      "Puts the bishop where d4 attacks it, so White gains central space with a tempo while " +
      "Black retreats to b4 or e7.",
  },

  "1.c4 e6 2.Nc3 Nh6": {
    strategy:
      "Puts the knight on the rim. After d4 the c1-bishop attacks it, and Bxh6 gxh6 would " +
      "double the h-pawns, while …Nf5 can be met by e4 with a gain of time.",
  },

  "1.c4 e6 2.Nc3 Ne7": {
    strategy:
      "Blocks the f8-bishop, whose only open diagonal runs through e7, and passes up the " +
      "natural …Nf6. The knight supports …d5, but White takes the centre with e4 and d4 while " +
      "Black untangles the kingside.",
  },

  "1.c4 e6 2.Nc3 a6": {
    strategy:
      "Spends a tempo on a flank pawn that neither fights for the centre nor develops a " +
      "piece; it prepares …b5 at best, which c4 already restrains. White continues with e4 " +
      "and d4 or Nf3.",
  },

  "1.c4 e6 2.Nc3 a5": {
    strategy:
      "Advances the a-pawn without purpose: it controls b4 but gives up …a6 against a knight " +
      "on b5, and does nothing for the centre or development. White builds with e4 and d4 or " +
      "Nf3.",
  },

  "1.c4 e6 2.Nc3 f6": {
    strategy:
      "Weakens e6 and the e8–h5 diagonal and takes f6 from the g8-knight, with no development " +
      "in return. White builds a broad centre with e4 and d4, and the weakened diagonal " +
      "invites Qh5+ once e4 is played.",
  },

  "1.c4 e6 2.Nc3 g5": {
    strategy:
      "Lunges on the kingside with nothing developed and weakens f6, h6 and the dark squares " +
      "around the king for good. The d8-queen guards the pawn for now, but d4 opens the " +
      "c1-bishop against it and h4 hits it again.",
  },

  "1.c4 e6 2.Nc3 h6": {
    strategy:
      "Prevents Bg5, but nothing threatens g5 yet, and the move does nothing for the centre " +
      "or development. White plays e4 and d4 undisturbed.",
  },

  "1.c4 e6 2.Nc3 h5": {
    strategy:
      "Advances the rook pawn without purpose and weakens g5, since the h-pawn can no longer " +
      "cover it from h6. It develops nothing and does nothing for the centre, so White simply " +
      "builds with e4 and d4.",
  },

  "1.c4 e6 2.Nc3 e5": {
    strategy:
      "Plays the e-pawn twice to reach the square that 1…e5 reached in one move, so White is " +
      "a full tempo up in a Reversed Sicilian structure and can develop with Nf3 and g3 or " +
      "play for d4 directly.",
  },

  "1.c4 e6 2.Nc3 Ke7": {
    strategy:
      "Gives up castling for good and blocks the f8-bishop, with nothing gained in return. " +
      "The king stays in the centre, where it becomes a target once White opens lines with d4 " +
      "and e4.",
  },

  "1.c4 e6 2.Nc3 Ba3": {
    strategy: "Gives the bishop away: bxa3 takes it, and Black gets nothing in return.",
  },

  "1.c4 e6 2.Nc3 b5": {
    strategy:
      "Hangs a pawn: cxb5 wins it, and Black has neither development nor open lines to show " +
      "for it.",
  },

  "1.c4 e6 2.g3 d5": {
    strategy:
      "Claims the centre at once with a pawn the e6-pawn supports, much as in the French " +
      "Defence. White usually continues 3.Bg2 Nf6 4.Nf3, and a later d4 turns the game into a " +
      "Catalan; Black can also take on c4 or support d5 with ...c6. The c8-bishop stays " +
      "behind the e6-pawn for now and often comes out via b7, after ...b6 or after ...dxc4 " +
      "and ...b5.",
  },

  "1.c4 e6 2.g3 Nf6": {
    strategy:
      "Develops the knight and reaches the position of 1.c4 Nf6 2.g3 e6, with ...d5 and ...c5 " +
      "both still open. After 3.Bg2 d5 4.Nf3 the game joins the main line of 2...d5, while " +
      "3...c5 leads to a symmetrical English structure; ...Be7 and short castling fit either " +
      "plan.",
  },

  "1.c4 e6 2.g3 c5": {
    strategy:
      "Mirrors White's c-pawn and reaches the position of 1.c4 c5 2.g3 e6. Black controls d4 " +
      "and keeps ...Nc6, ...Nf6 and ...d5 in reserve, with the e6-pawn already backing the d5 " +
      "square. White usually continues 3.Bg2, and ...Nc6 or ...d5 then closes the bishop's " +
      "long diagonal toward b7.",
  },

  "1.c4 e6 2.g3 f5": {
    strategy:
      "Controls e4 and heads for a Dutch set-up with ...Nf6, ...Be7 and short castling, or " +
      "for a Stonewall with ...d5 and ...c6. The advance loosens the e8-h5 diagonal, and in " +
      "the Stonewall the e5 square becomes a lasting hole. White almost always continues " +
      "3.Bg2, then develops with Nf3 or Nc3 and chooses later between d4 and d3 with e4.",
  },

  "1.c4 e6 2.g3 Nc6": {
    strategy:
      "Develops the knight and controls d4 and e5, keeping ...Nf6 and ...d5 available. The " +
      "knight blocks the c-pawn, so ...c5 is ruled out for now, and after 3.Bg2 the bishop " +
      "bears down on c6. Sound, but Black commits a piece before the pawn structure is " +
      "settled.",
  },

  "1.c4 e6 2.g3 Be7": {
    strategy:
      "Develops the bishop and clears f8 for castling once the g8-knight is out, with ...Nf6 " +
      "and ...d5 to follow in a solid set-up. It claims no central space yet, so White can " +
      "follow with Bg2, Nc3 and d4 or e4 without hindrance. Sound, but it leaves the choice " +
      "of pawn structure to White.",
  },

  "1.c4 e6 2.g3 b6": {
    strategy:
      "Prepares ...Bb7 in Queen's Indian style, but the b-pawn's advance opens the long " +
      "diagonal toward the a8-rook. After 3.Bg2 the rook is attacked, and 3...Bb7 loses a " +
      "piece to 4.Bxb7, so Black first needs ...c6, ...Nc6 or ...d5 to close the diagonal. " +
      "Playable, yet White gains time.",
  },

  "1.c4 e6 2.g3 c6": {
    strategy:
      "Prepares ...d5 behind a compact chain of pawns on c6, d5 and e6, and blocks the long " +
      "diagonal of a future g2-bishop. The c8-bishop stays shut in behind e6, and White can " +
      "take space with d4 or e4 at once. Sound, but slower than playing ...d5 immediately.",
  },

  "1.c4 e6 2.g3 d6": {
    strategy:
      "Prepares a compact set-up with ...Nf6, ...Be7 and castling, or a later ...e5. It " +
      "concedes central space, so White builds with Bg2, Nc3 and e4 or d4. Sound, though " +
      "passive.",
  },

  "1.c4 e6 2.g3 g6": {
    strategy:
      "Prepares ...Bg7 and a fianchetto of Black's own, with ...Ne7 or ...Nf6 and short " +
      "castling to follow. Black has no pawn in the centre yet, so White can take space with " +
      "Nc3, Nf3 and d4 or e4. Sound, though passive.",
  },

  "1.c4 e6 2.g3 Na6": {
    strategy:
      "Places the knight on the rim, where it eyes b4 and c5 but does little in the centre. " +
      "White gets Bg2, Nc3 and d4 or e4 with tempo to spare.",
  },

  "1.c4 e6 2.g3 Qe7": {
    strategy:
      "Puts the queen in front of the f8-bishop, which has no other open diagonal, so Black's " +
      "kingside development waits on another queen move. White develops with Bg2, Nc3 and d4 " +
      "and takes the centre in the meantime.",
  },

  "1.c4 e6 2.g3 Qf6": {
    strategy:
      "Brings the queen out to f6, where it eyes b2, which the c1-bishop guards, and takes f6 " +
      "from the g8-knight. White develops with Bg2 and Nc3 and can gain time against the " +
      "exposed queen, for instance with Ne4.",
  },

  "1.c4 e6 2.g3 Qg5": {
    strategy:
      "Sends the queen to g5 to eye the d2-pawn, but 3.d4 opens the c1-bishop's diagonal and " +
      "attacks the queen, so White takes the centre with tempo.",
  },

  "1.c4 e6 2.g3 Bd6": {
    strategy:
      "Blocks the d-pawn, so ...d5 has to wait until the bishop moves again, and leaves the " +
      "bishop a target for e4-e5. White takes the centre with Bg2, Nc3 and d4.",
  },

  "1.c4 e6 2.g3 Bc5": {
    strategy:
      "Eyes f2 and the g1-a7 diagonal, but 3.d4 attacks the bishop, which must move again " +
      "while White has taken the centre with tempo.",
  },

  "1.c4 e6 2.g3 Bb4": {
    strategy:
      "Looks at d2, which is guarded four times, so there is no threat, and 3.a3 drives the " +
      "bishop away. White gets a useful pawn move for the time Black spends on retreating.",
  },

  "1.c4 e6 2.g3 Nh6": {
    strategy:
      "Heads for f5, but the knight stands on the rim in the meantime, and g4 can later drive " +
      "it from f5. White gets Bg2, Nc3 and d4 or e4 at leisure.",
  },

  "1.c4 e6 2.g3 Ne7": {
    strategy:
      "Blocks the f8-bishop, whose natural square is e7, and puts the knight where it does " +
      "less than on f6. White takes space with Bg2, Nc3 and d4 or e4 while Black's kingside " +
      "development lags.",
  },

  "1.c4 e6 2.g3 a6": {
    strategy:
      "Prepares ...b5, but once the bishop stands on g2, ...b5 opens the long diagonal to the " +
      "a8-rook, so the move mostly costs a tempo. White continues with Bg2, Nc3 and d4 or e4.",
  },

  "1.c4 e6 2.g3 a5": {
    strategy:
      "Controls b4 but develops nothing and takes no part in the centre, and the a-pawn can " +
      "never again cover b5. White continues with Bg2, Nc3 and d4 or e4 and has a free hand.",
  },

  "1.c4 e6 2.g3 b5": {
    strategy:
      "Gambits a pawn after 3.cxb5, hoping for ...Bb7 along the open long diagonal against " +
      "the h1-rook. White meets that with 4.Nf3 or 4.f3 and keeps the extra pawn, so Black " +
      "has little to show for it.",
  },

  "1.c4 e6 2.g3 f6": {
    strategy:
      "Takes f6 from the g8-knight, opens the e8-h5 diagonal to the king and leaves e6 " +
      "without the f-pawn's support, all without developing a piece. White gains time with " +
      "Bg2, Nc3 and d4 or e4.",
  },

  "1.c4 e6 2.g3 g5": {
    strategy:
      "Loosens the king's cover and leaves f6 and h6, which the g-pawn guarded, without pawn " +
      "protection, and develops nothing. White gains time with d4, when the c1-bishop attacks " +
      "the pawn, and can open lines with h4.",
  },

  "1.c4 e6 2.g3 h6": {
    strategy:
      "Spends a tempo guarding g5, where no white piece can go yet, and neither develops a " +
      "piece nor claims the centre. White plays Bg2, Nc3 and d4 at leisure.",
  },

  "1.c4 e6 2.g3 h5": {
    strategy:
      "Prepares ...h4 against g3, but spends a tempo on a flank advance that weakens g5 and " +
      "the kingside and develops nothing. White plays Bg2, Nc3 and d4, or h4 to stop the idea " +
      "for good.",
  },

  "1.c4 e6 2.g3 e5": {
    strategy:
      "Plays the e-pawn twice and reaches the position of 1.c4 e5 2.g3 with White to move, so " +
      "Black is a full tempo down on the reversed Sicilian. The pawn centre is sound, but " +
      "White develops with Bg2 and Nc3 with an extra move in hand.",
  },

  "1.c4 e6 2.g3 Qh4": {
    strategy: "Walks the queen onto a square the g3-pawn attacks, so 3.gxh4 wins it for nothing.",
  },

  "1.c4 e6 2.g3 Ke7": {
    strategy:
      "Gives up castling for good and blocks the f8-bishop and the queen's d8-h4 diagonal, " +
      "with nothing gained in return. White develops with Bg2, Nc3 and d4 while the king " +
      "stays in the centre.",
  },

  "1.c4 e6 2.g3 Ba3": {
    strategy:
      "The bishop stands on a square attacked by the b2-pawn and the b1-knight, so 3.bxa3 or " +
      "3.Nxa3 wins it for nothing.",
  },
};
