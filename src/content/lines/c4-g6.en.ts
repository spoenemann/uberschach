import type { OpeningTexts } from "../book.ts";

// English prose for c4-g6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.c4 g6 2.Nc3": {
    strategy:
      "Develops the queen's knight towards d5 and e4 and keeps the main plans open: e4 and d4 " +
      "for a broad centre, g3 and Bg2 for a fianchetto of White's own, or d4 alone for a " +
      "King's Indian or Modern structure. The knight stands on the long diagonal of Black's " +
      "coming ...Bg7, so White must reckon with ...Bxc3 and doubled c-pawns.",
  },

  "1.c4 g6 2.d4": {
    strategy:
      "Occupies the centre at once and steers the game towards 1.d4 structures; after 2...Bg7 " +
      "White chooses between 3.Nc3, 3.Nf3 and 3.e4, and 3.e4 d6 4.Nc3 reaches a King's Indian " +
      "or Modern set-up. The bishop on g7 bears down on d4, so the pawn often needs support " +
      "from Nf3 or e3, and Black can strike at the centre later with ...c5, ...e5 or ...d5.",
  },

  "1.c4 g6 2.e4": {
    strategy:
      "Places pawns on c4 and e4 and prepares d4 and Nc3; after 2...Bg7 3.d4 d6 4.Nc3 the " +
      "position is the Averbakh System of the Modern Defence. Black can challenge at once " +
      "with 2...c5, when 3.Nf3 Bg7 4.d4 cxd4 5.Nxd4 gives a Maróczy Bind, or with 2...e5. The " +
      "pawns on c4 and e4 clamp d5, and Black's counterplay aims at d4 and the dark squares.",
  },

  "1.c4 g6 2.g3": {
    strategy:
      "Prepares Bg2, which supports e4 and aims along the long diagonal at the queenside, and " +
      "keeps Nc3, Nf3, d3 and d4 available. Black can mirror it with 2...Bg7 and ...Nf6, or " +
      "claim space with ...c5 or ...e5. The set-up is solid and flexible, though it leaves " +
      "Black free to take central space first.",
  },

  "1.c4 g6 2.Nf3": {
    strategy:
      "Develops the king's knight, covers d4 and e5 and keeps the set-up open: g3 and Bg2 " +
      "give White a kingside fianchetto, d4 leads to positions that also arise from 1.d4 g6 " +
      "2.c4, and Nc3 with e4 remains possible. White has no central pawn yet, so Black may " +
      "answer with ...c5, ...e5 or ...d6 and choose the structure.",
  },

  "1.c4 g6 2.d3": {
    strategy:
      "Prepares e4, opens the diagonal of the c1-bishop and keeps a flexible set-up with Nc3, " +
      "g3 and Bg2 in reach. It leaves d4 unclaimed, so Black can build a centre with ...Bg7, " +
      "...d6 and ...e5. Sound, but slower than Nc3, g3 or d4.",
  },

  "1.c4 g6 2.e3": {
    strategy:
      "Opens the f1-bishop, prepares d4 and keeps Nc3, Nf3 or Nge2 in reserve. No pawn " +
      "occupies the centre yet and the c1-bishop stays shut in by the d2-pawn, so Black can " +
      "take space with ...Bg7 and ...e5. Sound but passive, and it lets Black choose the " +
      "structure.",
  },

  "1.c4 g6 2.a3": {
    strategy:
      "Prepares b4 and a space gain on the queenside, but leaves the centre and development " +
      "untouched; Black plays ...Bg7, ...d6 and ...Nf6 or ...c5 and claims the central " +
      "squares.",
  },

  "1.c4 g6 2.a4": {
    strategy:
      "Gains queenside space but does nothing for the centre or development, and it leaves b4 " +
      "weak. Black plays ...Bg7 and ...d6 undisturbed.",
  },

  "1.c4 g6 2.b3": {
    strategy:
      "Opens the long diagonal for Black: after 2...Bg7 the bishop eyes the rook on a1, and " +
      "the natural 3.Bb2 loses a piece to 3...Bxb2 because nothing recaptures, so White must " +
      "first block with d4 or Nc3 and the fianchetto plan is delayed.",
  },

  "1.c4 g6 2.b4": {
    strategy:
      "Overextends the queenside: after 2...Bg7 the rook on a1 is attacked and 3.Bb2 loses a " +
      "piece to 3...Bxb2, while the b4-pawn becomes a target for ...a5. The advance does " +
      "nothing for the centre or development.",
  },

  "1.c4 g6 2.f3": {
    strategy:
      "Takes f3 from the king's knight and weakens the e1-h4 diagonal; it only makes sense " +
      "with e4, Nc3 and d4 to follow, and Black meanwhile develops with ...Bg7 and challenges " +
      "the centre with ...d5 or ...c5.",
  },

  "1.c4 g6 2.f4": {
    strategy:
      "Grabs kingside space and controls e5, but opens the e1-h4 diagonal to the king before " +
      "White has a pawn in the centre. Black develops with ...Bg7, ...d6 and ...Nf6 and hits " +
      "the centre at leisure.",
  },

  "1.c4 g6 2.g4": {
    strategy:
      "Advances the g-pawn without support: ...d6 threatens ...Bxg4 because the queen cannot " +
      "recapture through e2, and ...h5 undermines it at once. It also loosens f4, h4 and the " +
      "long diagonal with the king still in the centre.",
  },

  "1.c4 g6 2.h3": {
    strategy:
      "A slow prophylactic move that guards against a later ...Bg4 but does nothing for the " +
      "centre or development; Black plays ...Bg7 and ...d6 or ...c5 and takes the initiative.",
  },

  "1.c4 g6 2.h4": {
    strategy:
      "Aims for h5 to open the h-file against Black's fianchetto, but Black meets it with " +
      "2...h5 or 2...Nf6, which covers h5, and the advance does nothing for the centre. The " +
      "h-pawn can never again guard g3 or g4.",
  },

  "1.c4 g6 2.Na3": {
    strategy:
      "A rim knight that eyes c2 and b5 but is far from the centre and hampers the a-pawn; " +
      "Black takes space with ...Bg7, ...d6 and ...e5 unhindered.",
  },

  "1.c4 g6 2.Qc2": {
    strategy:
      "Brings the queen out before any minor piece has moved, guarding c4 and eyeing e4, but " +
      "it has no target. Black develops with ...Bg7, ...d6 and ...Nf6 while White's minor " +
      "pieces are still at home.",
  },

  "1.c4 g6 2.Qb3": {
    strategy:
      "Presses on b7, a pawn the c8-bishop guards, so there is no threat, and the diagonal to " +
      "f7 is blocked by White's own c4-pawn. Black develops with ...Bg7 and ...Nc6 while the " +
      "queen has no target.",
  },

  "1.c4 g6 2.Qa4": {
    strategy:
      "Brings the queen out to a4, where it pins the d7-pawn until Black plays ...c6 or " +
      "...Nc6 but has no real target, since d7 and a7 are well guarded. Black develops with " +
      "...Bg7 and ...Nc6 or ...Nf6, and the queen has done nothing for White's pieces still " +
      "at home.",
  },

  "1.c4 g6 2.Nh3": {
    strategy:
      "Puts a knight on the rim aiming at f4 and g5, but after ...d6 the c8-bishop threatens " +
      "...Bxh3, which would leave White with doubled h-pawns after gxh3 and a weakened " +
      "kingside.",
  },

  "1.c4 g6 2.c5": {
    strategy:
      "Gains space but pushes the c-pawn a second time and gives up control of d5. ...d6 " +
      "challenges it at once, and after cxd6 Black recaptures with ...exd6 or ...Qxd6, with " +
      "an open centre and easy development.",
  },

  "1.c4 g6": {
    name: "English Opening: Great Snake Variation",
  },

  "1.c4 g6 2.d4 Bg7": {
    strategy:
      "Puts the bishop on the long diagonal against d4 and b2 and prepares ...O-O, keeping " +
      "...Nf6, ...d6, ...c5 and ...d5 all open. White chooses between 3.Nc3, 3.Nf3 and 3.e4, " +
      "and 3.Nc3 d6 4.e4 reaches the Averbakh System of the Modern Defence; with ...Nf6 the " +
      "game becomes a King's Indian or a Grünfeld. The price is that White holds the larger " +
      "centre first and Black must undermine it later.",
  },

  "1.c4 g6 2.d4 Nf6": {
    strategy:
      "Develops the knight to its natural square, controls e4 and d5, and reaches 1.d4 Nf6 " +
      "2.c4 g6, the move order of the King's Indian and the Grünfeld. After 3.Nc3 Bg7 4.e4 d6 " +
      "Black has a King's Indian, after 3.Nc3 d5 a Grünfeld, and 3.Nf3 Bg7 4.g3 leads to the " +
      "fianchetto lines of both. The positions are sharp and rich in theory, and White gets " +
      "the big centre first.",
  },

  "1.c4 g6 2.d4 d6": {
    strategy:
      "Controls e5, frees the c8-bishop and keeps ...Bg7 and ...Nf6 for later, so both a " +
      "Modern set-up and a King's Indian stay open. After 3.Nc3 Bg7 4.e4 Nf6 the game is a " +
      "King's Indian, while delaying ...Nf6 keeps a Modern Defence in hand. The d-pawn is " +
      "committed early, so ...d5 and the Grünfeld are no longer available and White decides " +
      "how much space to take.",
  },

  "1.c4 g6 2.d4 f5": {
    strategy:
      "Reaches a Leningrad Dutch set-up, with ...Bg7, ...Nf6, ...d6 and quick castling to " +
      "come, and takes control of e4. With the knight still on g8, Black can also answer " +
      "3.Nc3 with ...Nh6 and, after 4.e4 fxe4 5.Nxe4, fight for the centre with ...Bg7, ...c6 " +
      "and ...d5. The price is a loosened kingside, with e6 no longer guarded by the f-pawn.",
  },

  "1.c4 g6 2.d4 Na6": {
    strategy:
      "Guards c5 and b4 and keeps ...c5 and ...Bg7 available, but the knight on the rim does " +
      "nothing about d4 and c4 and blocks the a-pawn. White takes more space with Nc3 and e4, " +
      "and Black must still find a way to undermine the centre. Sound enough, but White gets " +
      "a free hand.",
  },

  "1.c4 g6 2.d4 Nh6": {
    strategy:
      "Heads for f5, where the knight would eye d4, and keeps ...Bg7 and ...c5 available. " +
      "White need not trade with 3.Bxh6 Bxh6, which hands Black the bishop pair: 3.e4 takes " +
      "f5 away and leaves the knight on the rim. Playable, but White gets a broad centre for " +
      "free.",
  },

  "1.c4 g6 2.d4 b6": {
    strategy:
      "Prepares ...Bb7 to go with ...Bg7, a double-fianchetto set-up that aims at d4 and e4 " +
      "from the wings. White simply takes the centre with Nc3 and e4, and Black must then " +
      "undermine it with ...c5 or ...e5. Sound, but it gives White time to build.",
  },

  "1.c4 g6 2.d4 c6": {
    strategy:
      "Prepares ...d5 with a solid, Slav-like pawn chain while ...Bg7 and ...Nf6 are still to " +
      "come. It commits the c-pawn early and takes c6 from the b8-knight, so Black's play is " +
      "sound but passive against White's broad centre.",
  },

  "1.c4 g6 2.d4 c5": {
    strategy:
      "Challenges d4 at once for a Benoni- or Sicilian-type game with ...Bg7 to come. After " +
      "3.dxc5 Black regains the pawn with ...Qa5+ and ...Qxc5 but loses time with the queen, " +
      "and 3.d5 gives White a space advantage in a Benoni-type structure. Playable, but White " +
      "chooses the structure.",
  },

  "1.c4 g6 2.d4 e6": {
    strategy:
      "Prepares ...d5 and a flexible set-up with ...Bg7 and ...Nf6 or ...Ne7, but the e6-pawn " +
      "shuts in the c8-bishop. White can play 3.e4 at once, and ...Nf6 is then met by e5, so " +
      "Black must strike at the centre with ...d5 or ...c5. Sound but slow.",
  },

  "1.c4 g6 2.d4 Nc6": {
    strategy:
      "Develops a knight, but 3.d5 attacks it at once and leaves it no good square: 3...Ne5 " +
      "hits c4 until 4.e4 lets the f1-bishop guard it and f4 chases the knight again, while " +
      "3...Nb4 4.a3 drives it to a6. White gains space and tempi while the f8-bishop is still " +
      "at home.",
  },

  "1.c4 g6 2.d4 Bh6": {
    strategy:
      "Attacks the c1-bishop, but 3.Bxh6 Nxh6 trades off the fianchetto bishop that ...g6 was " +
      "played for. Black is left with weak dark squares and a loose knight on h6, which 4.Qd2 " +
      "attacks at once.",
  },

  "1.c4 g6 2.d4 a6": {
    strategy:
      "Prepares ...b5, but a flank pawn move develops nothing and leaves the centre to White. " +
      "Black still lacks ...Bg7, ...d6 and ...Nf6, while White plays Nc3 and e4 at leisure.",
  },

  "1.c4 g6 2.d4 a5": {
    strategy:
      "Takes b4 and gains space on the queenside, but it ignores the centre and weakens b5. " +
      "White plays Nc3, e4 and Nf3 with a free hand while Black's pieces are still at home.",
  },

  "1.c4 g6 2.d4 d5": {
    strategy:
      "Strikes at c4 at once, but 3.cxd5 leaves no comfortable recapture: 3...Qxd5 4.Nc3 " +
      "gains a tempo on the queen, and 3...Nf6 4.Qa4+ also favours White. A Grünfeld arises " +
      "only if White allows it, as after 3...Nf6 4.Nc3 Nxd5.",
  },

  "1.c4 g6 2.d4 f6": {
    strategy:
      "Takes e5 from White's pieces and prepares ...e5, but it blocks the long diagonal of " +
      "the future g7-bishop and the f6 square for the knight. White builds with Nc3 and e4 " +
      "and holds more space.",
  },

  "1.c4 g6 2.d4 h6": {
    strategy:
      "Wastes a tempo on a rim pawn that contests neither c4 nor d4. The pawn is safe, since " +
      "3.Bxh6 Bxh6 loses the bishop for it, but White builds with Nc3 and e4 while Black's " +
      "pieces stay at home.",
  },

  "1.c4 g6 2.d4 h5": {
    strategy:
      "Weakens g5 for good and develops nothing: a bishop on g5 can no longer be challenged " +
      "by ...h6. White uses the tempo for Nc3 and e4, and the h-pawn does no work on the " +
      "kingside.",
  },

  "1.c4 g6 2.d4 b5": {
    strategy:
      "Hangs a pawn: 3.cxb5 wins it, and neither ...Bb7 nor ...Bg7 gives enough in return, " +
      "because g2 and d4 are both defended. White simply develops with Nc3 and e4.",
  },

  "1.c4 g6 2.d4 e5": {
    strategy:
      "Gives away a pawn: after 3.dxe5 Bg7 4.Nf3 the e5-pawn is defended and the bishop's " +
      "pressure achieves nothing, so White keeps the extra pawn.",
  },

  "1.c4 g6 2.d4 g5": {
    strategy:
      "Hangs the g-pawn: 3.Bxg5 wins it, because the e7-pawn blocks the queen's diagonal and " +
      "nothing else defends g5. The kingside is weakened for nothing.",
  },

  "1.c4 g6 2.g3 Bg7": {
    strategy:
      "Completes the fianchetto and aims the bishop down the long diagonal at c3 and b2. " +
      "Black keeps every set-up open: after 3.Bg2 the choice is still between ...e5 with " +
      "...Nc6, ...c5 for a Symmetrical English, or ...Nf6 and ...O-O for King's Indian play. " +
      "The cost is that White takes space first, with Nc3 and then e4 or d4.",
  },

  "1.c4 g6 2.g3 Nf6": {
    strategy:
      "Develops the knight to its natural square, covers e4 and d5 and transposes into 1.c4 " +
      "Nf6 2.g3 g6. Black follows with ...Bg7 and ...O-O and picks ...d6 and ...e5 for King's " +
      "Indian play or ...d5 for Grünfeld-style play. The knight is committed before White " +
      "shows a set-up, but nothing is conceded.",
  },

  "1.c4 g6 2.g3 c5": {
    strategy:
      "Takes d4 under control and aims for a Symmetrical English: after 3.Bg2 Bg7 4.Nc3 Nc6 " +
      "both sides have fianchettoed, and the fight is over d4 and over queenside expansion " +
      "with b4 or ...b5. Until ...Bg7 the diagonal to the h8-rook is open, so after 3.d4 cxd4 " +
      "4.Qxd4 the queen hits the rook; 4...Nf6 blocks, since 4...Bg7 loses the bishop to " +
      "5.Qxg7.",
  },

  "1.c4 g6 2.g3 Nc6": {
    strategy:
      "Develops the knight, eyes d4 and e5 and supports a later ...e5. The knight blocks the " +
      "c-pawn, though, and White can build with Bg2, Nc3 and d4 or e4 before Black has chosen " +
      "a structure. Sound, but ...Bg7 first keeps more options open.",
  },

  "1.c4 g6 2.g3 c6": {
    strategy:
      "Prepares ...d5 behind a solid chain and closes the long diagonal at c6 before Bg2 " +
      "arrives; after ...d5 the c8-bishop can come out to f5 or g4. The centre is left to " +
      "White for now, so Bg2, Nc3 and d4 or e4 follow. Sound, but it commits the c-pawn " +
      "before the set-up is known.",
  },

  "1.c4 g6 2.g3 d6": {
    strategy:
      "Frees the c8-bishop and prepares ...e5, which ...Bg7 will support, for a King's " +
      "Indian-style set-up with ...Nf6. It is sound but passive: the centre is left to White " +
      "for now, and White builds with Bg2, Nc3 and then d4 or e4.",
  },

  "1.c4 g6 2.g3 d5": {
    strategy:
      "Strikes at c4 at once. After 3.cxd5 Nf6 Black regains the pawn with ...Nxd5 for " +
      "Grünfeld-style play, though Nc3 then hits the knight with gain of time. Taking back " +
      "with 3...Qxd5 hits the rook on h1 instead, but 4.Nf3 blocks and Nc3 then drives the " +
      "queen away.",
  },

  "1.c4 g6 2.g3 e6": {
    strategy:
      "Prepares ...d5 behind a solid chain and frees e7 for the knight, so ...Bg7 and ...Ne7 " +
      "can follow. Once ...d5 is in, the e6-pawn shuts in the c8-bishop, while White takes " +
      "space with Bg2, Nc3 and d4 or e4. Sound, but passive.",
  },

  "1.c4 g6 2.g3 e5": {
    strategy:
      "Takes space in the centre and transposes to 1.c4 e5 2.g3 g6, with ...Bg7 and ...Nc6 to " +
      "support the pawn. After 3.Bg2 Bg7 4.Nc3 Nc6 the game is a Closed English in which " +
      "White controls d5 and starts queenside play with d3, Rb1 and b4. Sound, but it commits " +
      "Black to this structure early.",
  },

  "1.c4 g6 2.g3 f5": {
    strategy:
      "Controls e4 and leads, after ...Nf6, ...Bg7 and ...O-O, to the set-up of the Leningrad " +
      "Variation of the Dutch Defence. It loosens e6 and commits the kingside pawns, and " +
      "White answers with Bg2, Nc3 and d3 followed by e4, or with d4. Sound, but " +
      "double-edged.",
  },

  "1.c4 g6 2.g3 Na6": {
    strategy:
      "Develops the knight to the rim, where it eyes b4 and c5 but has little influence on " +
      "the centre. White gains time for Bg2, Nc3 and d4 or e4.",
  },

  "1.c4 g6 2.g3 Bh6": {
    strategy:
      "Puts the bishop on h6 instead of g7, where White's c1-bishop meets it once d3 or d4 " +
      "opens the diagonal. After Bxh6 Nxh6 Black has traded the dark-squared bishop that " +
      "should guard f6 and h6, and the knight stands on the rim; avoiding the trade with " +
      "...Bg7 costs a tempo.",
  },

  "1.c4 g6 2.g3 Nh6": {
    strategy:
      "Heads for f5, but the knight stands on the rim and e4 drives it away from there. It " +
      "does nothing for the centre, and White continues Bg2, Nc3 and d4 or e4.",
  },

  "1.c4 g6 2.g3 a6": {
    strategy:
      "Spends a tempo on a rim pawn to prepare ...b5, but once White has played 3.Bg2, ...b5 " +
      "opens the diagonal to the a8-rook and Bxa8 takes it, so ...c6 or ...Nc6 must come " +
      "first. Nothing is gained in the centre or in development.",
  },

  "1.c4 g6 2.g3 a5": {
    strategy:
      "Gains queenside space and covers b4, but weakens b5 and develops nothing. White " +
      "continues Bg2, Nc3 and d4 or e4 with a free hand.",
  },

  "1.c4 g6 2.g3 b6": {
    strategy:
      "Opens the long diagonal to the undefended rook on a8: after 3.Bg2 Black must block it " +
      "at once with ...c6, ...Nc6 or ...d5, since the natural ...Bb7 loses the bishop to " +
      "Bxb7. Each block leaves a later ...Bb7 behind Black's own piece or pawn, and the " +
      "queenside is loosened.",
  },

  "1.c4 g6 2.g3 f6": {
    strategy:
      "Takes f6 from the g8-knight and blocks the diagonal of the future g7-bishop, while " +
      "loosening e6 and the kingside. White plays Bg2, Nc3 and d4 or e4 at leisure.",
  },

  "1.c4 g6 2.g3 h6": {
    strategy:
      "Covers g5, a square White's c1-bishop cannot even reach until the d-pawn moves, and " +
      "develops nothing. The g6-pawn loses the h-pawn's support, and White continues with " +
      "Bg2, Nc3 and d4 or e4.",
  },

  "1.c4 g6 2.g3 h5": {
    strategy:
      "Starts a kingside pawn push with ...h4 in mind, but loosens g5 and g6 and develops " +
      "nothing. White answers with h4 or simply continues Bg2 and Nc3 and takes the centre.",
  },

  "1.c4 g6 2.g3 g5": {
    strategy:
      "Pushes the g-pawn a second time, abandoning the fianchetto it prepared and leaving f5 " +
      "and h5 without pawn cover. Once d3 or d4 opens the c1-bishop's diagonal, Bxg5 is " +
      "threatened, and Black must spend another tempo defending the pawn.",
  },

  "1.c4 g6 2.g3 b5": {
    strategy:
      "Gives up a pawn to 3.cxb5. Black gets only the half-open b-file and the long diagonal " +
      "for ...Bb7 in return, and White keeps the extra pawn by developing with Nf3, Bg2 and " +
      "Nc3.",
  },

  "1.c4 g6 2.Nc3 Bg7": {
    strategy:
      "Develops the bishop on the long diagonal, where it bears on the c3-knight and b2, and " +
      "clears f8, so that castling needs only ...Nf6. Against 3.e4 Black can build a King's " +
      "Indian set-up with ...d6 and ...Nf6 or strike at once with ...c5 or ...e5; against " +
      "3.g3 the choice is between ...c5 for a Symmetrical English and ...e5 for a Closed " +
      "English. The cost is central space, which White can take first with e4 and d4.",
  },

  "1.c4 g6 2.Nc3 Nf6": {
    strategy:
      "Develops the king's knight, eyes d5 and e4 and reaches the Anglo-Indian position that " +
      "also arises from 1.c4 Nf6 2.Nc3 g6. After 3.d4 d5 the game transposes into the " +
      "Grünfeld Defence, while after 3.e4 Black is steered into King's Indian lines with " +
      "...Bg7 and ...d6. White can also stay in the English with 3.g3 or 3.Nf3, when ...Bg7 " +
      "and ...O-O follow.",
  },

  "1.c4 g6 2.Nc3 c5": {
    strategy:
      "Controls d4 and heads for the Symmetrical English, the position that also arises from " +
      "1.c4 c5 2.Nc3 g6. After 3.g3 Bg7 4.Bg2 Nc6 the position is fully symmetrical, while " +
      "...Nf6, ...b6 and ...Bb7 instead of ...Nc6 give Black a double fianchetto. The cost is " +
      "the d5-square, which the c4-pawn and the c3-knight already cover and which 3.e4 would " +
      "control as well.",
  },

  "1.c4 g6 2.Nc3 d6": {
    strategy:
      "Opens the c8-bishop's diagonal and covers c5 and e5, heading for a King's Indian or " +
      "Modern set-up with ...Bg7 and ...Nf6. It is sound but not recommended: the d-pawn " +
      "commits before the knights, the Grünfeld set-ups with ...d5 are given up, and White " +
      "takes space with 3.e4 or 3.d4 before Black has chosen a plan.",
  },

  "1.c4 g6 2.Nc3 Nc6": {
    strategy:
      "Develops the knight towards the centre, eyes d4 and e5 and supports a later ...e5. It " +
      "blocks the c-pawn, though, so ...c5 is off while the knight stands there, and after " +
      "3.d4 the advance d5 can drive it away. Sound, but less flexible than ...Bg7 or ...Nf6 " +
      "first.",
  },

  "1.c4 g6 2.Nc3 e5": {
    strategy:
      "Claims the centre at once and reaches the position of 1.c4 e5 2.Nc3 g6, a Reversed " +
      "Sicilian in which ...Bg7 will guard e5. It is sound but not recommended: until the " +
      "bishop arrives, the long diagonal to the h8-rook is open, so 3.d4 exd4 4.Qxd4 hits the " +
      "rook and White gains time.",
  },

  "1.c4 g6 2.Nc3 c6": {
    strategy:
      "Prepares ...d5 with pawn support and reaches the position of 1.c4 c6 2.Nc3 g6. It is " +
      "sound but not recommended: the pawn takes c6 from the b8-knight, and White can build a " +
      "broad centre with e4 and d4 before ...d5 strikes at it.",
  },

  "1.c4 g6 2.Nc3 e6": {
    strategy:
      "Prepares ...d5 and frees e7 for the knight, reaching the position of 1.c4 e6 2.Nc3 g6. " +
      "It is sound but not recommended: once ...d5 is in, the e6-pawn shuts in the c8-bishop, " +
      "and the set-up is slow, so White can build the centre with e4 and d4 before Black has " +
      "made a claim in it.",
  },

  "1.c4 g6 2.Nc3 b6": {
    strategy:
      "Prepares ...Bb7 and, with ...Bg7, a double fianchetto that aims both bishops at " +
      "White's centre and queenside. It is sound but not recommended: neither knight is out " +
      "yet, and White can take space with e4 or d4 and Nf3 before Black has committed to " +
      "...c5, ...e6 or ...Nf6.",
  },

  "1.c4 g6 2.Nc3 f5": {
    strategy:
      "Controls e4 and heads for a Leningrad Dutch set-up with ...Nf6, ...Bg7 and ...O-O. It " +
      "is sound but not recommended: the move weakens e6 and loosens the kingside before a " +
      "piece is developed, and after 3.e4 fxe4 4.Nxe4 White's knight stands actively in the " +
      "centre.",
  },

  "1.c4 g6 2.Nc3 d5": {
    strategy:
      "Offers a pawn that White can keep: after 3.cxd5 Nf6 4.e4 the d5-pawn is guarded by Nc3 " +
      "and the e-pawn, so ...Nxd5 fails to exd5, and Black has no quick way to regain it.",
  },

  "1.c4 g6 2.Nc3 Na6": {
    strategy:
      "Puts the knight on the rim to reach b4 or c5, but it leaves the centre alone, and a3 " +
      "chases ...Nb4 with a gain of time. White takes space with e4 and d4, and d4 also takes " +
      "c5 from the knight.",
  },

  "1.c4 g6 2.Nc3 Nh6": {
    strategy:
      "Heads for f5 from the rim, but 3.e4 covers that square, and after 3.d4 the c1-bishop " +
      "already eyes the knight. On h6 it does nothing for the centre while White takes it " +
      "with e4 and d4.",
  },

  "1.c4 g6 2.Nc3 Bh6": {
    strategy:
      "Puts the bishop on h6 instead of g7, where 3.d4 opens the c1-bishop's diagonal against " +
      "it. A trade on h6 or c1 removes the dark-squared bishop the fianchetto was meant to " +
      "serve, and retreating to g7 costs a tempo.",
  },

  "1.c4 g6 2.Nc3 f6": {
    strategy:
      "Prepares ...e5, but takes f6 from the g8-knight, blocks the long diagonal of the " +
      "coming ...Bg7 and weakens e6. Nothing is developed, and White builds with e4 and d4.",
  },

  "1.c4 g6 2.Nc3 a6": {
    strategy:
      "Prepares ...b5, but the break does not work yet: ...b5 at once drops a pawn to cxb5 " +
      "axb5 Nxb5. The tempo does nothing for the centre or development, and White continues " +
      "with e4 and d4.",
  },

  "1.c4 g6 2.Nc3 a5": {
    strategy:
      "Controls b4 and gains a little queenside space, but develops nothing and weakens b5, " +
      "which the a-pawn can no longer cover. White builds the centre with e4 and d4 " +
      "undisturbed.",
  },

  "1.c4 g6 2.Nc3 h6": {
    strategy:
      "Takes g5 from White's c1-bishop, which cannot reach it while the d-pawn stands on d2, " +
      "and leaves the g6-pawn without the h-pawn's support. Nothing is developed, and White " +
      "builds with e4 and d4.",
  },

  "1.c4 g6 2.Nc3 h5": {
    strategy:
      "Prepares ...h4, but leaves the g6-pawn without the h-pawn's support, and the h-pawn " +
      "can never again cover g5. Nothing is developed, and White builds with e4 and d4.",
  },

  "1.c4 g6 2.Nc3 g5": {
    strategy:
      "Pushes the g-pawn a second time, abandons the fianchetto it prepared and leaves f5 and " +
      "h5 without pawn cover. Nothing guards g5, so 3.d4 threatens Bxg5, and Black must spend " +
      "yet another tempo on ...h6, ...f6 or ...Bh6.",
  },

  "1.c4 g6 2.Nc3 b5": {
    strategy:
      "Hangs a pawn: the c4-pawn and the c3-knight both attack b5 and nothing defends it, so " +
      "3.cxb5 or 3.Nxb5 simply wins it. Black has no lead in development to show for it.",
  },
};
