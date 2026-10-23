import type { OpeningTexts } from "../book.ts";

// English prose for e4-g6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.e4 g6 2.d4": {
    strategy:
      "Builds the full pawn centre at once, the very structure the Modern Defence is designed " +
      "to undermine later with ...c5, ...e5 or ...d5. After 2...Bg7 White chooses between " +
      "3.Nc3 d6 4.f4, the Averbakh set-up with 3.c4, or a quieter Nf3 and Be2, and ...d6 with " +
      "...Nf6 often transposes into the Pirc. The price is a centre that needs defending once " +
      "Black's pieces are out.",
  },

  "1.e4 g6 2.Nc3": {
    strategy:
      "Develops the queen's knight and guards e4 while keeping both d4 and a Closed Sicilian " +
      "set-up with g3, Bg2 and d3 available. Black can offer that transposition with 2...c5 " +
      "or play 2...Bg7, when 3.d4 d6 transposes to the main line with 2.d4. The knight blocks " +
      "the c-pawn, and the move order lets Black choose between a Sicilian and a Modern " +
      "structure.",
  },

  "1.e4 g6 2.Nf3": {
    strategy:
      "Develops the king's knight towards the centre, covering d4 and e5, while keeping both " +
      "Nc3 and d4 in reserve. Black can transpose to a Sicilian with 2...c5, or play 2...Bg7 " +
      "3.d4 d6, which reaches the 2.d4 lines with 3.Nf3. The knight does not guard e4, so " +
      "Black can also hit the pawn at once with ...d5 or later with ...Nf6.",
  },

  "1.e4 g6 2.f4": {
    strategy:
      "Aims for an Austrian-Attack-style set-up with Nf3 and a later e5, and 2...Bg7 3.d4 " +
      "transposes to the Three Pawns Attack. It is playable, but it loosens e4 and the e1-h4 " +
      "diagonal before the centre is settled, while 2.d4 is the stronger reply.",
  },

  "1.e4 g6 2.Bc4": {
    name: "Modern Defence: Monkey's Bum",
    background:
      "Found and championed by IM Nigel Povah in the 1970s, during a wave of popularity of " +
      "the Modern Defence. The name comes from his friend Ken Coates, who said when Povah " +
      "showed him the first moves: “If that works then I’m a monkey’s bum!” Povah published " +
      "it in the British Chess Magazine in August 1977.",
    strategy:
      "Aims the bishop at f7 and prepares Qf3 with a later d4, a pawn gambit after 2...Bg7 " +
      "3.Qf3 e6 4.d4 Bxd4 5.Ne2. If Black plays 2...Bg7 and White follows with 3.d4, the game " +
      "becomes the Bishop Attack. The gambit gives up a pawn for active pieces, but in " +
      "practice the compensation has proved thin.",
  },

  "1.e4 g6 2.c4": {
    strategy:
      "Takes space on the queenside and prepares Nc3 and d4, reaching the Averbakh System, or " +
      "the Maróczy Bind after 2...c5 3.Nf3 Bg7 4.d4 cxd4 5.Nxd4. It is sound but unusual, and " +
      "the c-pawn is committed before the centre is settled.",
  },

  "1.e4 g6 2.g3": {
    strategy:
      "Prepares Bg2 to mirror Black's fianchetto and support e4 along the diagonal. The plan " +
      "is sound, but it spends time on the kingside while d4 is not yet played, so Black can " +
      "strike at e4 with ...d5 or take space with ...c5.",
  },

  "1.e4 g6 2.c3": {
    strategy:
      "Prepares d4 with pawn support in the manner of the Alapin Sicilian, and the pawn on c3 " +
      "blunts the bishop on g7 in advance. It takes c3 from the queen's knight, and Black can " +
      "challenge e4 at once with ...d5 before d4 is in.",
  },

  "1.e4 g6 2.Be2": {
    strategy:
      "Develops the bishop, clears f1 for castling and prepares Nf3 and d4; after 2...Bg7 " +
      "3.d4 d6 4.Nf3 Nf6 5.Nc3 the Classical Pirc arises by transposition. It is sound but " +
      "passive, since the bishop does nothing against the fianchetto.",
  },

  "1.e4 g6 2.h4": {
    background:
      "Bobby Fischer suggested 3.h4 as an unorthodox try against 1...g6 2.d4 Bg7 in his notes " +
      "to his game against Pal Benko, although he played 3.Nc3 in the game itself. The idea " +
      "has also been tried a move earlier.",
    strategy:
      "Prepares h5 and hxg6 to open the h-file against the fianchetto. Black can stop it with " +
      "2...h5 or ignore it with 2...Bg7 and ...d6. The move is a risky try that is not " +
      "refuted by force, but it weakens g4 and g3 and does nothing for development.",
  },

  "1.e4 g6 2.d3": {
    strategy:
      "Supports e4 and prepares a King's Indian Attack set-up with g3, Bg2 and Nf3, which is " +
      "sound but modest. It blocks the f1-bishop's diagonal and gives up d4 for now, so Black " +
      "can take the centre with ...d5 or build with ...Bg7 and ...c5.",
  },

  "1.e4 g6 2.Ne2": {
    strategy:
      "Supports a later d4, but it blocks the f1-bishop, delays castling and puts the knight " +
      "where it is less active than on f3 or c3.",
  },

  "1.e4 g6 2.Qe2": {
    strategy:
      "Supports e4 but blocks the f1-bishop and brings the queen out early with nothing to " +
      "attack; Black develops with ...Bg7 and ...d6 and hits the centre at leisure.",
  },

  "1.e4 g6 2.Qf3": {
    strategy:
      "Takes f3 from the king's knight and puts the queen out before the minor pieces, eyeing " +
      "f7 with a later Bc4. Black develops with ...Bg7 and ...d6, meets Bc4 with ...e6, and " +
      "the queen has no target.",
  },

  "1.e4 g6 2.Qg4": {
    strategy:
      "The queen goes to g4, where ...h5 attacks it with tempo and it must retreat. Nothing " +
      "is threatened: g6 is guarded twice, by the h7 and f7 pawns.",
  },

  "1.e4 g6 2.Bb5": {
    strategy:
      "Attacks the d7-pawn, which is guarded four times, and ...c6 or ...a6 drives the bishop " +
      "away with a gain of time.",
  },

  "1.e4 g6 2.Bd3": {
    strategy:
      "Puts the bishop in front of the d-pawn, so d4 cannot be played until it moves again; " +
      "the centre is neglected while Black develops with ...Bg7 and ...d6 or ...c5 at ease.",
  },

  "1.e4 g6 2.Nh3": {
    strategy:
      "Puts a knight on the rim, aiming at f4 and g5, but after ...d6 the c8-bishop can take " +
      "it with ...Bxh3, wrecking White's kingside pawns after gxh3.",
  },

  "1.e4 g6 2.Na3": {
    strategy:
      "A rim knight that is far from the centre and blocks the a-pawn; Black develops with " +
      "...Bg7 and ...d6 while the knight needs further moves to reach the centre.",
  },

  "1.e4 g6 2.a3": {
    strategy:
      "Spends a move on the edge pawn to prepare b4, leaving the centre and development " +
      "untouched while Black plays ...Bg7 and ...d6 or ...d5.",
  },

  "1.e4 g6 2.a4": {
    strategy:
      "Gains queenside space but does nothing for the centre or development and weakens b4; " +
      "Black plays ...Bg7 and ...d6 undisturbed.",
  },

  "1.e4 g6 2.b3": {
    strategy:
      "Opens the long diagonal for Black: after 2...Bg7 the bishop hits the rook on a1, and " +
      "3.Bb2 loses a piece to 3...Bxb2. White has to block with d4, c3 or Nc3, and a bishop " +
      "on b2 then bites on its own pawn or knight.",
  },

  "1.e4 g6 2.b4": {
    strategy:
      "Opens the long diagonal for Black's bishop: after 2...Bg7 the rook on a1 is attacked " +
      "and 3.Bb2 loses a piece to 3...Bxb2, so White must block with c3, d4 or Nc3, while the " +
      "b4-pawn is exposed to ...a5.",
  },

  "1.e4 g6 2.f3": {
    strategy:
      "Blocks the knight's best square and weakens the e1-h4 diagonal and the king; it only " +
      "makes sense with d4, Nc3 and Be3 to follow, and Black takes the long diagonal with " +
      "...Bg7 in the meantime.",
  },

  "1.e4 g6 2.g4": {
    strategy:
      "Advances the g-pawn into ...h5, when it is either exchanged or overextended, and " +
      "loosens f4, h4 and the long diagonal with the king still in the centre.",
  },

  "1.e4 g6 2.h3": {
    strategy:
      "A slow prophylactic move that stops ...Bg4 but does nothing for the centre or " +
      "development; Black develops freely with ...Bg7 and ...d6 or strikes at once with ...c5 " +
      "or ...d5.",
  },

  "1.e4 g6 2.e5": {
    strategy:
      "A premature advance: the pawn is unsupported and 2...Bg7 attacks it at once, so White " +
      "needs d4, f4 or Nf3 to hold it, while ...d6 undermines it and ends in an exchange on " +
      "d6 or a weakened centre.",
  },

  "1.e4 g6 2.Qh5": {
    strategy:
      "Puts the queen on h5, a square attacked by the g6-pawn, so 2...gxh5 wins it for " +
      "nothing.",
  },

  "1.e4 g6 2.Ke2": {
    strategy:
      "Forfeits castling for good, blocks the f1-bishop and the queen's diagonal, and leaves " +
      "the king in the middle for no gain; Black develops freely with ...Bg7 and ...d5.",
  },

  "1.e4 g6 2.Ba6": {
    strategy:
      "Hangs the bishop: 2...bxa6 or 2...Nxa6 takes it and nothing on the board can recapture " +
      "on a6.",
  },

  "1.e4 g6": {
    name: "Modern Defence",
    background:
      "Also called the Robatsch Defence, after Karl Robatsch. It is closely related to the " +
      "Pirc, and the 10th edition of Modern Chess Openings (1965) grouped the two as the " +
      "“Pirc–Robatsch Defense”.",
  },

  "1.e4 g6 2.d4 Bg7": {
    strategy:
      "Develops the bishop on the long diagonal, where it presses on d4 and, behind it, b2. " +
      "Black follows with ...d6 and castling and challenges the centre later with ...c5 or " +
      "...e5, keeping the knights flexible. White chooses between 3.Nc3, 3.c4 heading for the " +
      "Averbakh System, 3.Nf3 and sharper tries such as 3.f4 or 3.Bc4. The price is less " +
      "space and a slow start for Black's counterplay.",
  },

  "1.e4 g6 2.d4 d6": {
    strategy:
      "Controls e5 and c5 and keeps two set-ups open: a Modern with ...Bg7 and ...c6, or a " +
      "Pirc with ...Nf6. After 3.Nc3 or 3.Nf3 and ...Bg7 the usual positions arise by " +
      "transposition, for example a Pirc after 3.Nf3 Bg7 4.Be2 Nf6 5.Nc3. The pawn on d6 " +
      "later supports ...e5 or ...c5, but until then White has a free hand in the centre.",
  },

  "1.e4 g6 2.d4 Nf6": {
    name: "Modern Defence: Norwegian Defence",
    background:
      "Also called the North Sea Variation. Magnus Carlsen calls the continuation 3.e5 Nh5 " +
      "the “Norwegian Rat”, and he played it, with 4.Be2 d6, against Michael Adams at the " +
      "2010 Khanty-Mansiysk Olympiad.",
    strategy:
      "Attacks e4 at once and reaches a Pirc if White defends with 3.Nc3 d6. White can " +
      "instead gain space with 3.e5 Nh5, when 4.g4 drives the knight to g7 and 4.Be2 attacks " +
      "it again, while Black hopes to undermine e5 with ...d6. A risky route that is not " +
      "refuted by force.",
  },

  "1.e4 g6 2.d4 c6": {
    strategy:
      "Supports ...d5 and still allows ...d6. After 3.Nc3 d5 the game transposes into the " +
      "Gurgenidze System of the Caro–Kann, and 3.Nc3 Bg7 4.Nf3 d6 reaches a Modern set-up " +
      "with ...c6. Sound, but less flexible than 2...Bg7, because the c-pawn is committed " +
      "before the bishop is out.",
  },

  "1.e4 g6 2.d4 c5": {
    strategy:
      "Hits d4 at once, and 3.Nf3 cxd4 4.Nxd4 transposes into a Sicilian with an early ...g6. " +
      "White can instead take space with 3.d5 or open the position with 3.dxc5, when ...Qa5+ " +
      "and ...Qxc5 regain the pawn but bring the queen out early, and Be3 gains time against " +
      "it.",
  },

  "1.e4 g6 2.d4 d5": {
    strategy:
      "Strikes at e4 at once, but with neither ...c6 nor ...e6 behind it, 3.exd5 Qxd5 4.Nc3 " +
      "gains time against the queen. After 3.e5 White has an advance structure in which a " +
      "bishop on g7 bites on e5, and Black needs ...c5 and ...Bf5 or ...Bg4 for counterplay. " +
      "Sound enough, but it concedes time or space.",
  },

  "1.e4 g6 2.d4 b6": {
    strategy:
      "Prepares ...Bb7 against e4 alongside ...Bg7, a flexible set-up with both bishops on " +
      "the long diagonals. White supports e4 with 3.Nc3 or 3.Bd3 and keeps the larger centre, " +
      "so Black has to prove the counterplay with ...c5 or ...e6 and ...Ne7. Sound enough, " +
      "but it gives White time to build.",
  },

  "1.e4 g6 2.d4 e6": {
    strategy:
      "Prepares ...d5 in French style, but with ...g6 already played the dark squares f6 and " +
      "h6 are weak and the c8-bishop is shut in behind e6. White develops with Nf3 and Bd3, " +
      "or plays 3.c4, and keeps the broader centre.",
  },

  "1.e4 g6 2.d4 Nc6": {
    strategy:
      "Pressures d4, but 3.d5 drives the knight away at once and Black loses time. The " +
      "natural 3...Ne5? even loses a piece to 4.f4, because c4, d3, f3, g4 and c6 are all " +
      "covered.",
  },

  "1.e4 g6 2.d4 Na6": {
    strategy:
      "Puts the knight on the rim, heading for c7 or b4, and does nothing against d4 and e4. " +
      "3.Bxa6 bxa6 doubles Black's a-pawns at the cost of the bishop pair, and otherwise " +
      "White builds freely with Nc3 and Nf3.",
  },

  "1.e4 g6 2.d4 Bh6": {
    strategy:
      "Invites 3.Bxh6 Nxh6, which trades off the dark-squared bishop that the ...g6 set-up " +
      "exists for and leaves a knight on the rim. White keeps the pawn centre and Black has " +
      "no counter to it.",
  },

  "1.e4 g6 2.d4 Nh6": {
    strategy:
      "Puts the knight on the rim, where both forward squares are covered: f5 by the e4-pawn " +
      "and g4 by the queen. The centre goes unchallenged, and White develops with Nc3 and " +
      "Nf3.",
  },

  "1.e4 g6 2.d4 a6": {
    strategy:
      "Prepares ...b5 and ...Bb7 but contests nothing. White develops with Nc3 and Nf3 or " +
      "takes more space with 3.c4, while the ...g6 set-up still lacks ...Bg7 and ...d6.",
  },

  "1.e4 g6 2.d4 a5": {
    strategy:
      "Spends a tempo on the rook's pawn while d4 and e4 stand unopposed, and the pawn can no " +
      "longer cover b5 from a6. White simply develops with Nc3 and Nf3 or Bd3.",
  },

  "1.e4 g6 2.d4 f6": {
    strategy:
      "Takes e5 from White but blocks the f6 square and the long diagonal of the future " +
      "g7-bishop, while doing nothing to challenge d4 and e4. White builds with c4 or Nc3 and " +
      "Nf3.",
  },

  "1.e4 g6 2.d4 h6": {
    strategy:
      "Wastes a tempo on a rim pawn that contests neither d4 nor e4. The pawn is safe, since " +
      "3.Bxh6 Bxh6 wins a piece, but White builds with Nc3 and Nf3 or c4.",
  },

  "1.e4 g6 2.d4 h5": {
    strategy:
      "Weakens g5 and g6 for good and develops nothing. White uses the tempo for Nc3 and Nf3 " +
      "or c4, and a piece on g5 can no longer be challenged by ...h6.",
  },

  "1.e4 g6 2.d4 b5": {
    strategy:
      "Hangs a pawn for nothing: 3.Bxb5 Bb7 is met by 4.Nc3, which defends e4, and White " +
      "keeps the extra pawn with a lead in development.",
  },

  "1.e4 g6 2.d4 e5": {
    strategy:
      "Gives away a pawn: after 3.dxe5 nothing recaptures it, and ...Bg7 followed by ...d6 is " +
      "met by Nf3, so White keeps the extra pawn with a lead in development.",
  },

  "1.e4 g6 2.d4 f5": {
    name: "Modern Defence: Fianchetto Gambit",
    strategy:
      "Loses a pawn: 3.exf5 gxf5? walks into 4.Qh5#, so Black continues with 3...Bg7 or " +
      "3...Nf6, and 4.fxg6 hxg6 leaves Black a pawn down.",
  },

  "1.e4 g6 2.d4 g5": {
    strategy:
      "Hangs the g-pawn: 3.Bxg5 wins it, because the e7-pawn blocks the queen's diagonal and " +
      "nothing else defends g5, and the kingside is weakened for nothing.",
  },

  "1.e4 g6 2.Nc3 Bg7": {
    strategy:
      "Completes the fianchetto at once: the bishop on the long diagonal bears on d4 and on " +
      "the knight on c3, while ...d6, ...c6 and ...c5 all stay available. After 3.d4 d6 the " +
      "game is the main line of the Modern Defence, and a later ...Nf6 turns it into a Pirc. " +
      "The cost is that White builds the full centre first, and Black has to undermine it " +
      "later with ...c5 or ...e5.",
  },

  "1.e4 g6 2.Nc3 d6": {
    strategy:
      "Guards e5 and c5, frees the c8-bishop and prepares ...Bg7 and ...Nf6. After 3.d4 Nf6 " +
      "the game is a Pirc Defence, and after 3.d4 Bg7 a Modern one. In both White keeps the " +
      "broad centre, and Black strikes at it later with ...c5 or ...e5.",
  },

  "1.e4 g6 2.Nc3 c5": {
    strategy:
      "Turns the game into a Sicilian Defence with the fianchetto already under way. Against " +
      "3.g3 Black continues with ...Bg7, ...Nc6 and ...d6 as in the Closed Sicilian, and " +
      "after 3.Nf3 Bg7 4.d4 cxd4 5.Nxd4 Nc6 the knight on c3 keeps White from the Maróczy " +
      "Bind with c4. White, not Black, chooses between the closed and the open lines.",
  },

  "1.e4 g6 2.Nc3 c6": {
    strategy:
      "Prepares ...d5 and a Caro-Kann pawn structure with the fianchetto added. After 3.d4 d5 " +
      "4.e5 White gains space, and the e5-pawn blocks the long diagonal of a bishop on g7. " +
      "Sound, but less flexible than ...Bg7, since the pawns are committed before the pieces " +
      "are out.",
  },

  "1.e4 g6 2.Nc3 Nf6": {
    strategy:
      "Attacks e4 and heads for a Pirc after 3.d4 d6. It allows 3.e5, however, which gains a " +
      "tempo: ...Nd5 loses a piece to Nxd5, ...Ng4 to Qxg4, and the knight must go to h5 or " +
      "back to g8. Playable, but White gets space for free.",
  },

  "1.e4 g6 2.Nc3 Nc6": {
    name: "Nimzowitsch Defence: Pirc Connection",
    background:
      "The position also arises from the Nimzowitsch Defence, 1.e4 Nc6 2.Nc3 g6, named after " +
      "Aron Nimzowitsch, who usually answered 2.d4 with 2...d5. Kasparov and Keene wrote that " +
      "the opening has never been fully accepted as a dependable one, though it is sound.",
    strategy:
      "Develops and watches d4 and e5, preparing ...Bg7 and ...d6. The knight blocks the " +
      "c-pawn and can be hit by d5: after 3.d4 d6 4.d5 Ne5 5.f4 it must move again, and White " +
      "has gained space and time. Playable, but White's centre comes easily.",
  },

  "1.e4 g6 2.Nc3 a6": {
    strategy:
      "Takes b5 away from White's pieces and prepares ...b5 and ...Bb7 as queenside play " +
      "beside the fianchetto. It is slow, though: no piece is developed, and 3.d4 or 3.f4 " +
      "lets White build a broad centre first. Playable, but ...Bg7 and ...d6 come first.",
  },

  "1.e4 g6 2.Nc3 b6": {
    strategy:
      "Prepares ...Bb7 and ...Bg7, so that both bishops press on the long diagonals, with " +
      "...e6 or ...c5 to follow. Black develops no piece while White takes the centre with d4 " +
      "and f4 or Nf3, so the double fianchetto is sound but passive.",
  },

  "1.e4 g6 2.Nc3 e6": {
    strategy:
      "Prepares ...d5 in the manner of the French Defence, with ...Ne7 or ...Nf6 and ...c5 to " +
      "follow. After 3.d4 d5 4.e5 White gains space and the c8-bishop is shut in behind e6. " +
      "Sound, but with pawns on e6 and g6 no pawn guards f6, and the e5-pawn blocks a bishop " +
      "on g7.",
  },

  "1.e4 g6 2.Nc3 e5": {
    strategy:
      "Takes the centre at once, but 3.d4 exd4 4.Qxd4 attacks the h8-rook along the long " +
      "diagonal, since the g-pawn has left g7. Black has to block the diagonal at once, as " +
      "4...Bg7? drops the bishop to 5.Qxg7, and the dark squares d6 and f6 stay weak.",
  },

  "1.e4 g6 2.Nc3 Na6": {
    strategy:
      "Develops the knight to the rim, where it blocks the a-pawn and does little in the " +
      "centre. Black spends a tempo before ...Bg7, and 3.d4 gives White the full centre.",
  },

  "1.e4 g6 2.Nc3 a5": {
    strategy:
      "Takes b4 from White's pieces but spends a tempo on a flank pawn, and a knight on b5 " +
      "can no longer be driven off by ...a6. Nothing is done for the centre or development, " +
      "and 3.d4 gives White the full centre.",
  },

  "1.e4 g6 2.Nc3 Bh6": {
    strategy:
      "Puts the bishop on the c1–h6 diagonal instead of the long one, so after 3.d4 the " +
      "dark-squared bishops face each other. Either exchange removes the piece that ...g6 was " +
      "played for and leaves the dark squares around Black's king weak, while White keeps the " +
      "centre.",
  },

  "1.e4 g6 2.Nc3 Nh6": {
    strategy:
      "Develops the knight to the rim, aiming at f5 instead of attacking e4 as ...Nf6 would. " +
      "After 3.d4 White has the full centre, and the knight needs further moves to join the " +
      "fight for it.",
  },

  "1.e4 g6 2.Nc3 f6": {
    strategy:
      "Takes f6 from the king's knight and opens the a2–g8 diagonal: after 3.Bc4 the bishop " +
      "aims at g8 and stops short castling until ...d5 or ...e6 blocks it. The pawn covers " +
      "e5, but the king is loosened and 3.d4 gives White the full centre.",
  },

  "1.e4 g6 2.Nc3 h6": {
    strategy:
      "Covers g5 against Bg5 and Ng5, but spends a tempo on a flank pawn before ...Bg7 or " +
      "...d6. White uses the time for d4 and a broad centre.",
  },

  "1.e4 g6 2.Nc3 h5": {
    strategy:
      "Aims at ...h4 but leaves g6 guarded only by the f7-pawn and weakens g5. It costs a " +
      "tempo, develops nothing, and 3.d4 gives White the centre.",
  },

  "1.e4 g6 2.Nc3 d5": {
    strategy:
      "Offers the d-pawn. After 3.exd5 the queen cannot recapture, since 3...Qxd5 loses it to " +
      "4.Nxd5, and after 3...Nf6 4.Bc4 the pawn is held, because ...Nxd5 fails to Nxd5 Qxd5 " +
      "Bxd5.",
  },

  "1.e4 g6 2.Nc3 f5": {
    strategy:
      "Loses a pawn to 3.exf5, and the obvious recapture 3...gxf5?? walks into 4.Qh5#, since " +
      "g6 and f7 are both empty. After 3...Bg7 4.fxg6 Black is simply a pawn down.",
  },

  "1.e4 g6 2.Nc3 b5": {
    strategy:
      "Hangs the b-pawn to 3.Nxb5 or 3.Bxb5, as nothing guards it. ...a6 or ...c6 only chases " +
      "the piece back, and Black has given a pawn for no development.",
  },

  "1.e4 g6 2.Nc3 g5": {
    strategy:
      "Moves the g-pawn a second time, and after 3.d4 it hangs to Bxg5. Holding it with ...h6 " +
      "or ...f6 loosens the kingside for good, and after ...h6 White can hit the pawn again " +
      "with h4.",
  },

  "1.e4 g6 2.Nf3 Bg7": {
    strategy:
      "Completes the fianchetto and aims the bishop down the long diagonal at the centre and " +
      "at b2, while Black waits to see how White builds. Black usually follows with ...d6, " +
      "then ...Nf6 or ...c6, and strikes at the pawn centre later with ...c5 or ...e5. After " +
      "3.d4 d6 4.Nc3 Nf6 the game has transposed to the Pirc Defence. The cost is that White " +
      "may take a broad centre, which Black has to undermine rather than prevent.",
  },

  "1.e4 g6 2.Nf3 d6": {
    strategy:
      "Prepares ...Bg7 and keeps the choice between a Pirc with ...Nf6 and a Modern set-up " +
      "without it. After 3.d4 Nf6 4.Nc3 Bg7 the game is a Pirc Defence, and Black undermines " +
      "White's centre later with ...c5 or ...e5. Compared with 2...Bg7 the d-pawn is " +
      "committed early, and 3.Bb5+ has to be answered by a block such as ...c6 or ...Bd7.",
  },

  "1.e4 g6 2.Nf3 c5": {
    strategy:
      "Transposes to a Sicilian with an early ...g6, aiming for the Accelerated Dragon. " +
      "Delaying ...Nc6 avoids the Rossolimo, and after 3.d4 cxd4 4.Nxd4 Black develops with " +
      "...Bg7 and ...Nc6. The drawback is that White can recapture with 4.Qxd4, hitting the " +
      "rook on h8, or meet 4.Nxd4 Nc6 with 5.c4, the Maróczy Bind.",
  },

  "1.e4 g6 2.Nf3 Nf6": {
    strategy:
      "Attacks e4 and heads for a Pirc Defence after 3.Nc3 d6 4.d4 Bg7. Not recommended " +
      "because 3.e5 drives the knight away at once, for example to h5 on the rim or to d5, " +
      "where c4 chases it again, and White gains space and time.",
  },

  "1.e4 g6 2.Nf3 c6": {
    strategy:
      "Prepares ...d5 with a Caro-Kann structure, and 3.d4 d5 4.Nc3 Bg7 transposes to the " +
      "Gurgenidze Variation of the Caro-Kann. Sound but passive, since 3.d4 d5 4.e5 gains " +
      "space and blocks the long diagonal that the fianchettoed bishop is meant to use.",
  },

  "1.e4 g6 2.Nf3 d5": {
    strategy:
      "Strikes at the centre at once, as in a Scandinavian, but 3.exd5 Qxd5 4.Nc3 gains a " +
      "tempo against the queen and leaves White ahead in development, while 3.e5 gains space. " +
      "Playable because the queen has safe squares such as a5, d6 and d8 and the position " +
      "stays solid, but White's lead is not easy to neutralise.",
  },

  "1.e4 g6 2.Nf3 e6": {
    strategy:
      "Supports ...d5 and prepares a French-style setup with ...Bg7 and ...Ne7. Solid but " +
      "passive: after 3.d4 d5 4.e5 the pawn on e6 hems in the c8-bishop, and Black needs " +
      "...c5 to get counterplay.",
  },

  "1.e4 g6 2.Nf3 Nc6": {
    strategy:
      "Develops a piece towards d4 and e5, but blocks the c-pawn and invites 3.d4. After " +
      "3...Bg7 4.d5 the knight has to move again, to a worse square or into an exchange on e5 " +
      "or d4, so White gains space and time.",
  },

  "1.e4 g6 2.Nf3 b6": {
    strategy:
      "Plans ...Bb7 and a double fianchetto that presses on e4 along the long diagonal. White " +
      "simply builds a broad centre with 3.d4 Bb7 4.Bd3 or 4.Nc3, and Black has to show that " +
      "the centre is a target. Sound, but unusual and a little slow.",
  },

  "1.e4 g6 2.Nf3 a6": {
    strategy:
      "Prepares ...b5 and rules out Bb5, but spends a tempo on the edge while White takes the " +
      "full centre with d4 and Nc3 and the f8-bishop is still at home.",
  },

  "1.e4 g6 2.Nf3 a5": {
    strategy:
      "Gains a little queenside space but spends a tempo on a rim pawn that does nothing for " +
      "the centre, and it weakens b5 and b6. White takes the centre with d4 and Nc3 at " +
      "leisure.",
  },

  "1.e4 g6 2.Nf3 Na6": {
    strategy:
      "Puts the knight on the rim, where it can be taken at once: 3.Bxa6 bxa6 leaves Black " +
      "with doubled, isolated a-pawns, since the c8-bishop cannot recapture. The bishop pair " +
      "and the half-open b-file are only partial compensation.",
  },

  "1.e4 g6 2.Nf3 Bh6": {
    strategy:
      "Misplaces the bishop: 3.d4 opens the c1-h6 diagonal, and trading with ...Bxc1 4.Qxc1 " +
      "leaves the dark squares around the king weak, while a later ...Bg7 costs a tempo.",
  },

  "1.e4 g6 2.Nf3 Nh6": {
    strategy:
      "Puts the knight on the rim, where it watches f5 but not the centre, and delays ...Bg7. " +
      "After 3.d4 White holds the full centre, and the opened c1-h6 diagonal leaves the " +
      "knight exposed to Bxh6.",
  },

  "1.e4 g6 2.Nf3 f6": {
    strategy:
      "Blocks the long diagonal of the future bishop on g7 and takes f6 from the knight. It " +
      "also weakens the e6-square, the a2-g8 diagonal and the king, while 3.d4 gives White " +
      "the centre unopposed.",
  },

  "1.e4 g6 2.Nf3 f5": {
    strategy:
      "Challenges e4 but loosens the king and the e6-square. After 3.exf5 gxf5 4.Nh4 the " +
      "knight attacks f5 and clears the way for Qh5+, so the pawn and the king are hard to " +
      "cover at the same time.",
  },

  "1.e4 g6 2.Nf3 h6": {
    strategy:
      "Spends a tempo on a rim pawn with no clear purpose, since nothing threatens g5 yet. " +
      "White takes the centre with 3.d4 while the king's bishop is still at home.",
  },

  "1.e4 g6 2.Nf3 h5": {
    strategy:
      "Spends a tempo on a rook's pawn and leaves the g6-pawn without the h-pawn's support. " +
      "White takes the centre with 3.d4 and develops freely with Nc3.",
  },

  "1.e4 g6 2.Nf3 e5": {
    strategy:
      "Puts a pawn on e5 that nothing defends against the knight on f3. Black regains it " +
      "after 3.Nxe5 Qe7 4.d4 d6 5.Nf3 Qxe4+ 6.Be2, but the queen stands exposed on e4 and " +
      "White can gain further time against it with Nc3.",
  },

  "1.e4 g6 2.Nf3 b5": {
    strategy:
      "Hangs the b-pawn to 3.Bxb5, since nothing defends it. Black's ...Bb7 hits the " +
      "unprotected e4-pawn, but Nc3 or Qe2 holds it and White is a clean pawn up.",
  },

  "1.e4 g6 2.Nf3 g5": {
    strategy:
      "Hangs a pawn to 3.Nxg5, since neither the queen nor the bishop covers g5. It also " +
      "leaves the king's side full of holes for nothing in return.",
  },

  "1.e4 g6 2.c4 Bg7": {
    strategy:
      "Puts the bishop on the long diagonal, where it eyes the centre and b2, and keeps " +
      "...d6, ...c5, ...Nf6 and ...Nc6 all available. After 3.d4 d6 4.Nc3 Nf6 the game has " +
      "transposed into the King's Indian Defence, and 3.Nf3 c5 4.d4 cxd4 5.Nxd4 Nc6 is a " +
      "Maróczy Bind. The cost is that White has time to build the centre with c4, d4 and e4, " +
      "and Black must undermine it later with ...c5 or ...e5.",
  },

  "1.e4 g6 2.c4 c5": {
    strategy:
      "Fights for d4 before White can set up the full centre. After 3.Nf3 Bg7 4.d4 cxd4 " +
      "5.Nxd4 the structure is a Maróczy Bind: White has the space, and Black plays for piece " +
      "activity with ...Nc6 and ...Nf6. The cost is a cramped game if White keeps the bind " +
      "and Black never achieves a freeing ...d5 or ...b5.",
  },

  "1.e4 g6 2.c4 d6": {
    strategy:
      "Controls e5 and c5, opens the diagonal of the c8-bishop and keeps ...Bg7 and ...Nf6 " +
      "for the next moves. After 3.Nc3 Bg7 4.d4 Nf6 5.Nf3 O-O 6.Be2 e5 the game has " +
      "transposed into the Classical King's Indian. The cost is the usual King's Indian one: " +
      "White takes the centre with c4, d4 and e4 and chooses the set-up, with Be2, f3 or f4.",
  },

  "1.e4 g6 2.c4 Nf6": {
    strategy:
      "Develops with pressure on e4 and reaches a King's Indian after 3.Nc3 d6 4.d4 Bg7. It " +
      "allows 3.e5, however: 3...Ng4 loses the knight to 4.Qxg4, 3...Nd5 to 4.cxd5, and after " +
      "3...Nh5 the knight sits on the rim while White has a large space advantage.",
  },

  "1.e4 g6 2.c4 e5": {
    name: "English Opening: Adorjan Defence",
    strategy:
      "Claims central space and controls d4, at the price of blocking the long diagonal for a " +
      "bishop on g7. Once the e-pawn is exchanged, the diagonal opens for White: after 3.d4 " +
      "exd4 4.Qxd4 the queen hits the h8-rook, 4...Bg7? drops the bishop to 5.Qxg7, and Black " +
      "must block with 4...Nf6 or 4...f6.",
  },

  "1.e4 g6 2.c4 e6": {
    strategy:
      "Prepares ...d5 and a flexible set-up with ...Bg7 and ...Ne7 or ...Nf6. It is sound but " +
      "slow: after 3.d4 Bg7 4.Nc3 White holds c4, d4 and e4, and the c8-bishop stays shut in " +
      "behind the e6-pawn until ...b6 opens the long diagonal for it.",
  },

  "1.e4 g6 2.c4 b6": {
    strategy:
      "Prepares ...Bb7 against e4 and a double fianchetto with ...Bg7. It is sound but leaves " +
      "the centre to White: after 3.d4 Bb7 4.Nc3 Bg7 5.f3 the pawns on c4, d4 and e4 stand " +
      "firm, and Black has to challenge them later with ...c5.",
  },

  "1.e4 g6 2.c4 c6": {
    strategy:
      "Prepares ...d5 with a Caro-Kann pawn chain while ...Bg7 and ...Nf6 are still to come. " +
      "It is sound but passive: after 3.d4 d5 4.exd5 cxd5 5.cxd5 Qxd5 6.Nc3 White gains a " +
      "tempo against the queen and keeps the freer game.",
  },

  "1.e4 g6 2.c4 Nc6": {
    strategy:
      "Develops the knight against d4 and e5 and keeps ...Bg7 and ...d6 in reserve. It is " +
      "sound but not recommended: the knight blocks the c-pawn, so neither ...c6 nor ...c5 is " +
      "possible, and after 3.d4 Bg7 4.d5 it must move again while White gains space with " +
      "tempo.",
  },

  "1.e4 g6 2.c4 Na6": {
    strategy:
      "Puts the knight on the rim, from where it eyes c5 and b4, but 3.d4 takes c5 away and " +
      "the knight does nothing to challenge the centre. White continues with Nc3 and a free " +
      "hand.",
  },

  "1.e4 g6 2.c4 Nh6": {
    strategy:
      "Aims at f5, but the e4-pawn controls that square, so the knight stays on the rim with " +
      "no useful follow-up. White builds the centre with d4 and Nc3 at no cost.",
  },

  "1.e4 g6 2.c4 Bh6": {
    strategy:
      "Offers a trade of the dark-squared bishops, the piece ...g6 was played for: after 3.d4 " +
      "d6 4.Bxh6 Nxh6 the knight stands on the rim and the dark squares around Black's king " +
      "are weakened.",
  },

  "1.e4 g6 2.c4 a6": {
    strategy:
      "Prepares ...b5, but with a pawn on c4 that break fails: 3.d4 b5 4.cxb5 axb5 5.Bxb5 " +
      "wins a pawn. The move is a tempo spent while White plays d4 and Nc3.",
  },

  "1.e4 g6 2.c4 a5": {
    strategy:
      "Gains queenside space but weakens b5 and does nothing for development. White builds " +
      "the centre with d4 and Nc3 while Black's pieces stay at home.",
  },

  "1.e4 g6 2.c4 f6": {
    strategy:
      "Covers e5 but takes the f6-square from the g8-knight and weakens e6 and Black's king. " +
      "It develops nothing, so White builds the centre with d4 and Nc3 unhindered.",
  },

  "1.e4 g6 2.c4 h6": {
    strategy:
      "A waiting move that stops Bg5 but does nothing for the centre or development. White " +
      "plays d4 and Nc3 and the tempo spent on the h-pawn is simply lost.",
  },

  "1.e4 g6 2.c4 h5": {
    strategy:
      "Starts a wing attack with no pieces developed and weakens g5 and the g6-pawn. White " +
      "just develops with d4 and Nc3, and Black has nothing to show for the loosened " +
      "kingside.",
  },

  "1.e4 g6 2.c4 b5": {
    strategy:
      "Offers a pawn for nothing: 3.cxb5 wins it, and ...Bg7 does not win it back, because " +
      "...Bxb2 is met by Bxb2. White also keeps the e4-pawn and the centre intact.",
  },

  "1.e4 g6 2.c4 d5": {
    strategy:
      "Offers a pawn that cannot be regained: after 3.exd5 the c4-pawn guards d5, so 3...Nf6 " +
      "4.Nc3 Nxd5? loses a piece to 5.cxd5. Black is left a pawn down with little to show for " +
      "it.",
  },

  "1.e4 g6 2.c4 f5": {
    strategy:
      "Offers the f-pawn, and the natural recapture walks into a trap: 3.exf5 gxf5?? allows " +
      "4.Qh5#. After 3...Bg7 4.fxg6 hxg6 White is simply a pawn up.",
  },

  "1.e4 g6 2.c4 g5": {
    strategy:
      "Moves the g-pawn a second time and makes it a target: 3.d4 opens the c1-bishop against " +
      "g5, and holding the pawn with ...h6 runs into h4. The kingside is loosened for good " +
      "while White develops freely.",
  },
};
