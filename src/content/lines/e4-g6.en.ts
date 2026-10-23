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
};
