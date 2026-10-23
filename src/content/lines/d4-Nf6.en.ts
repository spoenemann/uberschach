import type { OpeningTexts } from "../book.ts";

// English prose for d4-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.d4 Nf6 2.c4": {
    name: "Indian Defence: Normal Variation",
    strategy:
      "Takes a larger share of the centre and controls d5, preparing Nc3 and e4 for a broad " +
      "pawn centre, or a quieter Nf3. Black then chooses the structure: the Nimzo-Indian, " +
      "Queen's Indian or Bogo-Indian after ...e6, the King's Indian or Grünfeld after ...g6, " +
      "or Benoni and Old Indian set-ups. The cost is the amount of theory White must know " +
      "against all these defences.",
  },

  "1.d4 Nf6 2.Nf3": {
    name: "Indian Defence: Knights Variation",
    strategy:
      "Develops the knight, guards d4 and e5 and keeps c4 in reserve until Black shows its " +
      "set-up. After ...d5 or ...e6 White can reach the Queen's Gambit or choose a quieter " +
      "system such as the London with Bf4, the Colle with e3 and Bd3, or the Torre with Bg5. " +
      "It commits less than 2.c4, but White still has to know the Indian lines if Black plays " +
      "...g6 and c4 follows.",
  },

  "1.d4 Nf6 2.Bg5": {
    name: "Trompowsky Attack",
    background:
      "Named after Octávio Trompowsky (1897–1984), a one-time Brazilian champion who played " +
      "it in the 1930s and 1940s. Karel Opočenský also played it in the 1930s, and the " +
      "opening is also known as the Opočenský Opening.",
    strategy:
      "Threatens Bxf6, which would double Black's pawns, and sidesteps the heavy Indian " +
      "theory that follows 2.c4. Black has several answers: ...Ne4 hits the bishop and is met " +
      "by Bf4, Bh4 or h4, ...d5 and ...c5 fight for the centre, and ...e6 lets the queen " +
      "recapture on f6. The price is an early bishop move that can lose time, and the doubled " +
      "pawns often come with the bishop pair for Black.",
  },

  "1.d4 Nf6 2.Bf4": {
    name: "Indian Defence: Accelerated London System",
    background:
      "The London System is named after the London tournament of 1922, where it appeared " +
      "seven times. The Irish-American James Mason had been the first master-level player to " +
      "use it regularly, including at Vienna 1882, London 1883 and New York 1889.",
    strategy:
      "Develops the bishop outside the pawn chain before e3, so that White can follow with " +
      "e3, Nf3, c3 and Nbd2 whatever Black does. With the bishop gone from c1, b2 is " +
      "unguarded: after ...c5 and e3, the reply ...Qb6 hits the b2-pawn and is regarded as " +
      "the most critical line. The set-up is solid and easy to learn, but less ambitious than " +
      "2.c4 and leaves Black a free choice of structure.",
  },

  "1.d4 Nf6 2.Nc3": {
    strategy:
      "Controls e4 and d5 and prepares e4, but blocks the c-pawn, so the Queen's Gambit " +
      "set-up with c4 is no longer available. After ...d5, White usually plays Bg5 " +
      "(Richter–Veresov Attack) or Bf4 (Rapport–Jobava System). Sound, but a minor choice: " +
      "the Richter–Veresov has never been very popular at the top level.",
  },

  "1.d4 Nf6 2.g3": {
    name: "Indian Defence: Tartakower Attack",
    strategy:
      "Prepares Bg2 to pressure d5 and the long diagonal, with Nf3, O-O and c4 to follow in a " +
      "Catalan-like set-up. White develops quietly, but without a pawn on c4 yet Black can " +
      "take space with ...d5 and ...c5. Sound but uncommon, and slower than 2.c4 or 2.Nf3.",
  },

  "1.d4 Nf6 2.e3": {
    strategy:
      "Supports d4 and opens a path for the f1-bishop, aiming for a Colle-style set-up with " +
      "Nf3, Bd3, c3 and Nbd2, but it shuts in the bishop on c1 unless that later goes to b2. " +
      "Black reaches a comfortable game with ...d5, ...e6 or ...b6, since the slow plan puts " +
      "no early pressure on Black's centre.",
  },

  "1.d4 Nf6 2.c3": {
    strategy:
      "Props up d4 for a quiet system with Nf3, Bf4 or Bg5, e3 and Nbd2, but takes c3 from " +
      "the queen's knight, and c4 now costs a second tempo. Sound, though Black has a free " +
      "hand to choose its set-up and White does little to fight for e4 and d5.",
  },

  "1.d4 Nf6 2.b3": {
    name: "Basque Opening",
    strategy:
      "Prepares Bb2, but with the pawn already on d4 the bishop mainly supports that pawn " +
      "until the centre opens. White does little in the centre meanwhile, so Black can take " +
      "space with ...d5 and ...e6 or strike at d4 with ...c5. Sound but slower than 2.c4 or " +
      "2.Nf3.",
  },

  "1.d4 Nf6 2.d5": {
    name: "Indian Defence: Pawn Push Variation",
    strategy:
      "Grabs space and stops ...d5, but moves the d-pawn a second time and makes it a target. " +
      "Black answers with ...e6, ...c6 or ...c5, and after ...e6 and dxe6 fxe6 White has no " +
      "pawn left in the centre.",
  },

  "1.d4 Nf6 2.e4": {
    strategy:
      "Offers the e-pawn: 2...Nxe4 wins it, and White must look for compensation in quick " +
      "development with Bd3 or Nc3. After 3.Nc3 Nxc3 4.bxc3 White has doubled c-pawns as well " +
      "as a pawn less.",
  },

  "1.d4 Nf6 2.f3": {
    name: "Paleface Attack",
    background:
      "The name Paleface Attack appears in Eric Schiller's 1986 book on the Blackmar–Diemer " +
      "Gambit, which White usually hopes to reach with e4 and Nc3.",
    strategy:
      "Prepares e4, but takes f3 from the g1-knight and weakens the kingside, including the " +
      "e1–h4 diagonal. After 2...d5 3.e4 dxe4 4.fxe4 Nxe4 Black is simply a pawn up, so White " +
      "usually plays 4.Nc3 instead and gives the pawn for quick development.",
  },

  "1.d4 Nf6 2.f4": {
    name: "Canard Opening",
    strategy:
      "Controls e5 and aims for a Stonewall-like set-up with Nf3, e3 and Bd3, but spends a " +
      "move on the f-pawn that develops nothing and weakens e3, e4 and the e1–h4 diagonal. " +
      "Black meets it with ...d5, ...e6 or ...c5, and the knight on f6 already watches e4, " +
      "the hole such a set-up leaves.",
  },

  "1.d4 Nf6 2.g4": {
    name: "Indian Defence: Gibbins–Weidenhagen Gambit",
    strategy:
      "Offers the g-pawn: after 2...Nxg4, e3 or e4 opens the queen's diagonal to the knight " +
      "on g4. Black keeps the extra pawn by guarding the knight with ...d6 or retreating it, " +
      "and White's kingside stays weakened for little in return.",
  },

  "1.d4 Nf6 2.b4": {
    strategy:
      "Gains queenside space and prepares Bb2, but leaves the b-pawn loose: after ...e6 the " +
      "f8-bishop threatens ...Bxb4+, so White must spend a move on a3 or c3 or give up the " +
      "pawn. It develops nothing and weakens the queenside.",
  },

  "1.d4 Nf6 2.a3": {
    strategy:
      "A waiting move that stops ...Bb4+ and prepares b4, but it develops nothing and fights " +
      "for no central square. Black gains time for ...d5, ...e6 and ...c5.",
  },

  "1.d4 Nf6 2.a4": {
    strategy:
      "Controls b5 and gains a little queenside space, but it develops nothing and weakens " +
      "b4. Black builds the centre with ...d5 and ...e6 while White still needs Nf3, c4 and " +
      "Nc3.",
  },

  "1.d4 Nf6 2.h3": {
    strategy:
      "Stops ...Ng4 and a later ...Bg4, but it spends a tempo on a rim pawn that neither " +
      "develops a piece nor adds to the centre. Black takes space with ...d5 and ...e6.",
  },

  "1.d4 Nf6 2.h4": {
    strategy:
      "Starts a rim-pawn advance with ideas of Bg5 and h5, but develops nothing and weakens " +
      "g4 and the kingside. Black takes the centre with ...d5 and ...e6 at leisure.",
  },

  "1.d4 Nf6 2.Nd2": {
    strategy:
      "Blocks the bishop on c1 and takes the queen's guard from d4, so ...c5 or ...e5 hits an " +
      "unprotected pawn. The knight eyes e4 and c4, but the clumsy set-up costs time that " +
      "Black uses in the centre.",
  },

  "1.d4 Nf6 2.Na3": {
    strategy:
      "Puts the knight on the rim, where it eyes c4 and b5 but guards neither d4 nor e4. " +
      "White loses time while Black builds the centre with ...d5, ...e6 and ...c5.",
  },

  "1.d4 Nf6 2.Nh3": {
    strategy:
      "Heads for f4 via the rim, but on f4 the knight can be chased by ...e5 or ...g5, and " +
      "until then it does nothing for the centre. Black builds with ...d5 and ...e6.",
  },

  "1.d4 Nf6 2.Bd2": {
    strategy:
      "Develops the bishop on a passive square where it takes d2 from the queen's knight and " +
      "blocks the queen's guard of d4. Bf4 and Bg5 develop the same bishop actively and keep " +
      "the d-file open.",
  },

  "1.d4 Nf6 2.Be3": {
    strategy:
      "Develops the bishop in front of the e-pawn, so the f1-bishop stays shut in. ...Ng4 " +
      "hits it at once and wins a tempo: White must retreat the bishop or give it up for the " +
      "knight, doubling its e-pawns after fxe3.",
  },

  "1.d4 Nf6 2.Qd2": {
    strategy:
      "Brings the queen out too early, where it shuts in the bishop on c1, takes d2 from the " +
      "knight and aims at nothing. Black develops freely with ...d5, ...e6 and ...c5.",
  },

  "1.d4 Nf6 2.Qd3": {
    strategy:
      "Develops the queen before any minor piece, blocking d3 for the f1-bishop. Black can " +
      "harass it with ...d5 and ...Bf5, or with ...Nc6 and ...Nb4, and White still has the " +
      "whole army to bring out.",
  },

  "1.d4 Nf6 2.Kd2": {
    strategy:
      "Gives up castling and shuts in the queen and bishop. 2...Ne4+ forces the king to move " +
      "again at once, and it has no safe home in the centre.",
  },

  "1.d4 Nf6 2.Bh6": {
    strategy:
      "Loses the bishop for nothing: 2...gxh6 takes it with a pawn. Black's h-pawns are " +
      "doubled and isolated, but a whole piece is far more than that is worth.",
  },

  "1.d4 Nf6": {
    name: "Indian Defence",
    background:
      "The earliest known use of the term “Indian Defence” dates from 1884, attributed to the " +
      "openings played by the Indian player Moheschunder Bannerjee against John Cochrane, and " +
      "Savielly Tartakower popularised it in the early 1920s. Championed by the hypermodern " +
      "school in the 1920s, these defences were fully accepted only after Russian players " +
      "showed in the late 1940s that they are sound for Black.",
  },
};
