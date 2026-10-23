import type { OpeningTexts } from "../book.ts";

// English prose for c4-c6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.c4 c6 2.Nf3": {
    strategy:
      "Develops the king's knight, covers d4 and e5 and keeps the centre pawns back, so White " +
      "can still choose the structure after 2...d5: 3.d4 for the Slav, 3.e3 with d4 later for " +
      "a quiet Slav or Semi-Slav, or 3.b3 and Bb2 for a Réti set-up with the bishop on the " +
      "long diagonal. Black keeps a free hand too and can develop the c8-bishop with ...Bf5 " +
      "or ...Bg4 before closing it in with ...e6.",
  },

  "1.c4 c6 2.e4": {
    strategy:
      "Takes the centre at once and strikes at d5 before Black can settle there. After 2...d5 " +
      "White can play 3.exd5 cxd5 4.d4, reaching the Panov Attack of the Caro-Kann by " +
      "transposition, or 3.cxd5 cxd5 4.exd5 Nf6 5.Nc3 Nxd5 and accept an isolated d-pawn for " +
      "open lines. Black can also decline the d5 fight with 2...e5.",
  },

  "1.c4 c6 2.Nc3": {
    strategy:
      "Develops the queen's knight, guards d5 and e4 and prepares e4 or d4. After 2...d5 " +
      "White can play 3.d4 for a Slav or Semi-Slav with the knight already on c3, or 3.cxd5 " +
      "cxd5 4.d4 for the symmetrical Exchange Slav structure. Black is not bound to ...d5, " +
      "though: 2...e5 claims the centre with the other pawn and keeps ...d5 in reserve.",
  },

  "1.c4 c6 2.d4": {
    strategy:
      "Claims the centre with the d-pawn and, after 2...d5, enters the Slav Defence by " +
      "transposition, usually with 3.Nf3 Nf6 4.Nc3 and ...dxc4 or ...e6 to follow. White can " +
      "also exchange with 3.cxd5 cxd5 for a symmetrical structure. Black keeps alternatives " +
      "such as 2...e6 or 2...Nf6, so White does not dictate the pawn structure.",
  },

  "1.c4 c6 2.e3": {
    strategy:
      "Opens the f1-bishop and prepares d4, aiming for a quiet Slav or Semi-Slav: 2...d5 " +
      "3.Nf3 Nf6 4.Nc3 e6 5.d4 reaches a Semi-Slav. It is sound but passive, since it shuts " +
      "in the c1-bishop and lets Black take central space with ...d5 or ...e5 before White " +
      "has a piece out.",
  },

  "1.c4 c6 2.g3": {
    strategy:
      "Prepares Bg2 to press on d5 along the long diagonal, with Nf3 and O-O to follow in a " +
      "Réti or Catalan-like set-up. It is sound but slow: no d- or e-pawn has moved, so Black " +
      "can build a broad centre with ...d5 and ...e5, or a solid one with ...d5, ...Nf6 and " +
      "...Bf5 or ...Bg4.",
  },

  "1.c4 c6 2.b3": {
    strategy:
      "Prepares Bb2 on the long diagonal, aimed at e5 and the kingside, and supports the " +
      "c4-pawn so that ...dxc4 can be met by bxc4. The plan is sound but slow, as White does " +
      "nothing against 2...d5 and ...e5, and Black gets the centre first.",
  },

  "1.c4 c6 2.d3": {
    strategy:
      "Prepares e4 and frees the c1-bishop, in a closed set-up with g3, Bg2 and Nf3. It is " +
      "solid but modest: the move neither fights for d5 nor takes space, so Black can build " +
      "the centre with 2...d5 and ...e5.",
  },

  "1.c4 c6 2.b4": {
    name: "Polish Opening: Outflank Variation",
    background:
      "The same position arises from 1.b4 c6, the Outflank Variation of the Polish Opening. " +
      "After 1.c4 c6, 2.b4 can serve as a surprise weapon against a player who knows little " +
      "about the Polish Opening. The opening is not popular at the top level but still sees " +
      "sporadic use: in May 2021 world champion Magnus Carlsen played it against Hikaru " +
      "Nakamura and Wesley So in the online FTX Crypto Cup rapid tournament.",
    strategy:
      "Gains queenside space and prepares Bb2 on the long diagonal towards g7. The b4-pawn " +
      "has no pawn support, though: 2...a5 and ...Qb6 attack it at once and ...e5 opens the " +
      "f8-bishop against it, so White spends time holding b4 and c4 while Black builds the " +
      "centre.",
  },

  "1.c4 c6 2.a3": {
    strategy:
      "Prepares b4, but spends a tempo on a rook-pawn move that develops nothing and does not " +
      "contest d5. Black takes the centre with 2...d5 and develops without hindrance.",
  },

  "1.c4 c6 2.a4": {
    strategy:
      "Stops ...b5 and gains a little queenside space, but weakens b4 and develops nothing. " +
      "Black replies 2...d5 and takes the centre while White has no piece out.",
  },

  "1.c4 c6 2.f3": {
    strategy:
      "Takes f3 from the king's knight and opens the e1–h4 diagonal towards the king. The " +
      "idea of e4 is slow, and 2...d5 takes the centre first.",
  },

  "1.c4 c6 2.f4": {
    strategy:
      "Gains kingside space and controls e5, with Nf3 and e3 to follow, but opens the e1–h4 " +
      "diagonal towards the king and does nothing about 2...d5, which wins central space at " +
      "once.",
  },

  "1.c4 c6 2.h3": {
    strategy:
      "A waiting move that only takes g4 from the c8-bishop for later. It costs a tempo and " +
      "does not stop 2...d5, so Black takes the centre while White has developed nothing.",
  },

  "1.c4 c6 2.Na3": {
    strategy:
      "Defends c4 and heads for c2, but on the rim the knight controls no central square, " +
      "cannot use b5 because of the c6-pawn and blocks the a-pawn. Black takes the centre " +
      "with 2...d5 and develops with ...Nf6.",
  },

  "1.c4 c6 2.Nh3": {
    strategy:
      "Heads for f4, but the knight sits on the rim instead of on f3, where it would cover d4 " +
      "and e5. After 2...d5 the c8-bishop eyes h3, and a later ...Bxh3 gxh3 leaves White with " +
      "doubled h-pawns for the bishop pair.",
  },

  "1.c4 c6 2.Qc2": {
    strategy:
      "Supports c4 and prepares e4, but brings the queen out before any minor piece. After " +
      "2...d5 the queen can be hit by ...Bf5, and Black gains time for development.",
  },

  "1.c4 c6 2.Qb3": {
    strategy:
      "Eyes b7 down the b-file, but the c4-pawn blocks the queen's diagonal and no minor " +
      "piece is out. Black takes the centre with 2...d5 and can offer a queen trade with " +
      "...Qb6, so White gains nothing for the early sortie.",
  },

  "1.c4 c6 2.Qa4": {
    strategy:
      "Eyes c6 and the a4–e8 diagonal without a real threat, since c6 is defended. Black " +
      "takes the centre with 2...d5 and develops with ...Nf6 and ...Bf5 while the queen is " +
      "left looking for a useful square.",
  },

  "1.c4 c6 2.c5": {
    strategy:
      "Gains queenside space but gives up the pressure on d5. Black can take the centre with " +
      "2...d5, or undermine the advanced pawn with ...b6 and ...d6, and it becomes a target " +
      "with no pawn support behind it.",
  },

  "1.c4 c6 2.g4": {
    strategy:
      "Lunges forward without developing a piece and leaves the pawn loose: after 2...d5 the " +
      "c8-bishop eyes g4, and White needs h3 or f3. The advance also weakens f4, h4 and the " +
      "long diagonal.",
  },

  "1.c4 c6 2.h4": {
    strategy:
      "Gains kingside space but does nothing for the centre or development, and weakens g4 " +
      "and g3 for good. Black takes the centre with 2...d5 and develops freely.",
  },

  "1.c4 c6": {
    name: "English Opening: Caro-Kann Defensive System",
  },

  "1.c4 c6 2.Nf3 d5": {
    strategy:
      "Claims the centre at once, with the c6-pawn guarding d5, so the c8-bishop stays free " +
      "to come out on f5 or g4 before ...e6 closes it in. White then chooses between 3.d4 for " +
      "the Slav, 3.e3 with d4 later for a Slow Slav or Semi-Slav, and 3.b3 for a Réti set-up. " +
      "The price is a solid but slightly passive structure and the question of when to " +
      "release the c8-bishop.",
  },

  "1.c4 c6 2.Nf3 Nf6": {
    strategy:
      "Develops the king's knight, eyes d5 and e4 and keeps both ...d5 and ...e6 in reserve. " +
      "After 3.Nc3 or 3.e3 Black can play ...d5 for a Slav or Semi-Slav structure, and 3.d4 " +
      "d5 is a Slav outright. White can also stay flexible with 3.g3 and Bg2 or with 3.b3 and " +
      "Bb2.",
  },

  "1.c4 c6 2.Nf3 e6": {
    strategy:
      "Prepares ...d5 with the Semi-Slav pawn triangle, but commits the e-pawn and shuts in " +
      "the c8-bishop before it has come out. White can answer with 3.d4, with 3.g3 and Bg2, " +
      "or with 3.e4, which takes central space at once. Sound, but less flexible than ...d5 " +
      "or ...Nf6.",
  },

  "1.c4 c6 2.Nf3 d6": {
    strategy:
      "Opens the c8-bishop's diagonal and prepares ...e5 with ...Nf6 and ...Nbd7. The push " +
      "needs that preparation: 3.d4 e5? 4.dxe5 dxe5 5.Qxd8+ Kxd8 6.Nxe5 wins a pawn. Sound " +
      "but passive, since White takes space with d4, Nc3 and e4.",
  },

  "1.c4 c6 2.Nf3 f5": {
    strategy:
      "Heads for a Dutch-style Stonewall with ...e6 and ...d5, the c6-pawn backing the chain. " +
      "It weakens e6 and the e8-h5 diagonal, and in the Stonewall the e5-square becomes a " +
      "lasting hole for a white knight. Sound, but not recommended over ...d5 or ...Nf6.",
  },

  "1.c4 c6 2.Nf3 g6": {
    strategy:
      "Prepares ...Bg7, followed by ...d5 or ...Nf6, a fianchetto set-up with the c6-pawn " +
      "ready to support ...d5. It is sound but slow, and White can claim space with 3.d4 or " +
      "3.e4 before Black has a pawn in the centre.",
  },

  "1.c4 c6 2.Nf3 c5": {
    strategy:
      "Pushes the c-pawn a second time. The position is a symmetrical English with White to " +
      "move, so White is a tempo up, and Black has spent two moves on one pawn without " +
      "developing a piece or taking central space.",
  },

  "1.c4 c6 2.Nf3 b6": {
    strategy:
      "Aims at ...Ba6 against c4, since on b7 the bishop would bite on its own c6-pawn, and " +
      "it does nothing about the centre. White takes it with 3.d4 or 3.e4, and Qc2 or b3 " +
      "meets ...Ba6.",
  },

  "1.c4 c6 2.Nf3 b5": {
    strategy:
      "Offers to trade the b-pawn for White's c-pawn, but after 3.cxb5 cxb5 the b5-pawn is a " +
      "target for Nc3 and Qb3. White gains time against it and builds the centre with d4 and " +
      "e4, while Black has developed nothing.",
  },

  "1.c4 c6 2.Nf3 a6": {
    strategy:
      "Prepares ...b5 but spends a tempo on the wing while the centre stands empty, so 3.d4 " +
      "or 3.e4 takes space at once. The pawn does nothing for d5 or for development.",
  },

  "1.c4 c6 2.Nf3 a5": {
    strategy:
      "Stops b2-b4 but spends a tempo on an edge pawn, leaves the centre to White and helps " +
      "no piece develop. 3.d4 or 3.e4 gains space with ease.",
  },

  "1.c4 c6 2.Nf3 h6": {
    strategy:
      "Takes g5 from a future Bg5 or Ng5, but spends a tempo on a pawn move before any piece " +
      "is out. White builds the centre with d4 and e4 unopposed.",
  },

  "1.c4 c6 2.Nf3 h5": {
    strategy:
      "Advances a flank pawn without a plan, weakens g6 and the kingside cover and develops " +
      "nothing. White simply builds the centre with d4 and e4.",
  },

  "1.c4 c6 2.Nf3 f6": {
    strategy:
      "Prepares ...e5 but takes f6 from the g8-knight and weakens e6 and the e8-h5 diagonal. " +
      "The centre is still unclaimed, so White answers 3.d4 or 3.e4 and gains space.",
  },

  "1.c4 c6 2.Nf3 Na6": {
    strategy:
      "Heads for c7, where the knight would cover d5 and b5, but the trip costs two moves and " +
      "the knight stands on the rim meanwhile. White takes the centre with 3.d4 or 3.e4.",
  },

  "1.c4 c6 2.Nf3 Nh6": {
    strategy:
      "Aims for f5, but the rim knight blocks the h-pawn and invites 3.d4, when Bxh6 " +
      "threatens to double Black's pawns and e4 drives the knight away from f5 with a gain of " +
      "space.",
  },

  "1.c4 c6 2.Nf3 Qc7": {
    strategy:
      "Brings the queen out early to support ...e5, before any other piece is developed. " +
      "White builds the centre with Nc3, d4 and e4, and after d4 a bishop on f4 can gain time " +
      "against the queen.",
  },

  "1.c4 c6 2.Nf3 Qb6": {
    strategy:
      "Seems to hit b2, but the bishop on c1 guards it. The queen has no target while White " +
      "develops with Nc3 and takes the centre with d4 and e4.",
  },

  "1.c4 c6 2.Nf3 Qa5": {
    strategy:
      "Puts the queen on the a5-e1 diagonal, where it pins the d2-pawn for a moment but " +
      "attacks nothing of value. White blocks the diagonal with 3.Nc3 and follows with d4, e4 " +
      "and Bd2, while Black has no piece out and no pawn in the centre.",
  },

  "1.c4 c6 2.Nf3 e5": {
    strategy:
      "Leaves the pawn undefended: 3.Nxe5 wins it, and after 3...Qa5 the knight simply " +
      "retreats to f3 with the extra pawn. Black gets too little for it.",
  },

  "1.c4 c6 2.Nf3 g5": {
    strategy:
      "Hangs the pawn, since nothing defends g5 and 3.Nxg5 takes it. It also loosens the " +
      "kingside for good, and Black gets neither development nor an attack in return.",
  },

  "1.c4 c6 2.Nc3 d5": {
    strategy:
      "Takes the centre with the pawn that ...c6 supports and keeps the c8-bishop free to " +
      "develop on f5 or g4. After 3.d4 Nf6 4.Nf3 the game reaches the main position of the " +
      "Slav, where Black chooses between 4...dxc4, 4...e6 and 4...a6. White can also exchange " +
      "at once with 3.cxd5 cxd5 4.d4 for the symmetrical Exchange Slav structure, or play " +
      "3.e4, when 3...dxe4 4.Nxe4 gives a Caro-Kann-type position with the c4-pawn covering " +
      "d5.",
  },

  "1.c4 c6 2.Nc3 Nf6": {
    strategy:
      "Develops the knight and keeps ...d5 in reserve, reaching the position of 1.c4 Nf6 " +
      "2.Nc3 c6. After 3.d4 d5 or 3.Nf3 d5 4.d4 the game transposes to the Slav, but unlike " +
      "2...d5 the move allows 3.e4, when 3...d5 4.e5 attacks the knight on f6.",
  },

  "1.c4 c6 2.Nc3 e6": {
    strategy:
      "Prepares ...d5 with a solid pawn chain and opens the f8-bishop, reaching the position " +
      "of 1.c4 e6 2.Nc3 c6. After 3.d4 d5 the pawns stand as in the Semi-Slav, but the " +
      "c8-bishop is shut in behind e6. White can also play 3.e4 and meet ...d5 with e5 or an " +
      "exchange on d5.",
  },

  "1.c4 c6 2.Nc3 e5": {
    strategy:
      "Claims central space and keeps ...d5 and ...Nf6 for later, reaching the position of " +
      "1.c4 e5 2.Nc3 c6. It is sound but not recommended: the c-pawn has taken c6 from the " +
      "knight, so after 3.Nf3 the e5-pawn must be defended by ...d6 or ...Qc7 or pushed on " +
      "with ...e4.",
  },

  "1.c4 c6 2.Nc3 g6": {
    strategy:
      "Prepares ...Bg7 and a quiet kingside set-up with ...d5 or ...e5 to follow. It is sound " +
      "but not recommended: it is slower than 2...d5, and White can build a broad centre with " +
      "e4 and d4 before Black strikes at it.",
  },

  "1.c4 c6 2.Nc3 d6": {
    strategy:
      "Prepares ...e5 behind a solid pawn on d6, with ...Nf6 and ...g6 or ...Be7 to follow. " +
      "It is sound but passive: it postpones the ...d5 that ...c6 prepared, and after 3.e4 or " +
      "3.d4 White holds more space in the centre.",
  },

  "1.c4 c6 2.Nc3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c7 but leaves the centre alone. " +
      "Bringing it to c7 to support ...d5 costs another move, and White takes e4 and d4 in " +
      "the meantime.",
  },

  "1.c4 c6 2.Nc3 Qc7": {
    strategy:
      "Brings the queen out before any piece is developed. It prepares ...e5 but leaves the " +
      "centre to White, who plays e4 and d4 with a free hand.",
  },

  "1.c4 c6 2.Nc3 Qb6": {
    strategy:
      "Eyes b2 and f2, but both are guarded (by the c1-bishop and the king), so nothing is " +
      "threatened. White develops with Nf3 and d4, which also blocks the diagonal to f2, and " +
      "c5 or Na4 can later hit the queen with a gain of time.",
  },

  "1.c4 c6 2.Nc3 Qa5": {
    strategy:
      "Eyes c3 and a2 without a real threat, since the knight is guarded by the b2- and " +
      "d2-pawns and a2 by the rook. Black has developed nothing, and White builds the centre " +
      "with Nf3 and d4, adding Bd2 so that the queen cannot pin the c3-knight against the " +
      "king.",
  },

  "1.c4 c6 2.Nc3 Nh6": {
    strategy:
      "Heads for f5 from the rim, but 3.d4 opens the c1-h6 diagonal and threatens Bxh6, " +
      "ruining the kingside pawns. After 3...Nf5 4.e4 hits the knight again with a gain of " +
      "space.",
  },

  "1.c4 c6 2.Nc3 a6": {
    strategy:
      "Prepares ...b5 but spends a tempo on a pawn move that does nothing for the centre or " +
      "development. White answers with e4 and d4 and takes space unopposed.",
  },

  "1.c4 c6 2.Nc3 a5": {
    strategy:
      "Gains a little queenside space and takes b4 from White's pieces, but does nothing for " +
      "the centre or development. White plays e4 and d4 unopposed.",
  },

  "1.c4 c6 2.Nc3 b6": {
    strategy:
      "Prepares ...Bb7, but the c6-pawn already blocks the long diagonal, so the bishop would " +
      "only look at its own pawn. The move does nothing against e4 and d4.",
  },

  "1.c4 c6 2.Nc3 f6": {
    strategy:
      "Takes f6 from the g8-knight and weakens the e8-h5 diagonal, with only control of e5 in " +
      "return. White takes space with e4 and d4 before Black has a real plan.",
  },

  "1.c4 c6 2.Nc3 f5": {
    strategy:
      "Stakes out e4 with the f-pawn, but weakens e6 and the e8-h5 diagonal and develops " +
      "nothing. White can strike at once with 3.e4, and after 3...fxe4 4.Nxe4 the open " +
      "diagonal gives the queen a check on h5.",
  },

  "1.c4 c6 2.Nc3 h6": {
    strategy:
      "Takes g5 away from White's bishop, but costs a tempo and does nothing for the centre " +
      "or development. White continues with e4 and d4.",
  },

  "1.c4 c6 2.Nc3 h5": {
    strategy:
      "A flank advance that leaves g5 without pawn cover for good, since the h-pawn can no " +
      "longer guard it from h6, and does nothing for the centre or development. White takes " +
      "e4 and d4 unopposed.",
  },

  "1.c4 c6 2.Nc3 c5": {
    strategy:
      "Moves the c-pawn a second time and reaches the Symmetrical English position of 1.c4 c5 " +
      "2.Nc3 with White to move, so Black has lost a full tempo. The pawn also gives up the " +
      "support for ...d5 that ...c6 provided.",
  },

  "1.c4 c6 2.Nc3 b5": {
    strategy:
      "Gambits a pawn that White simply takes: after 3.cxb5 cxb5 4.Nxb5 White is a clean pawn " +
      "up, and 4...Qa5 only hits the knight, which retreats to c3.",
  },

  "1.c4 c6 2.Nc3 g5": {
    strategy:
      "Overextends: nothing guards the g5-pawn, and 3.d4 opens the bishop's diagonal with the " +
      "threat of Bxg5. Defending it with ...h6 loosens the kingside further.",
  },

  "1.c4 c6 2.d4 d5": {
    strategy:
      "Stakes a claim in the centre at once and backs it with the c6-pawn, which keeps the " +
      "c8-bishop free to develop outside the pawn chain, to f5 or g4. After 3.Nf3 Nf6 4.Nc3 " +
      "Black chooses between ...dxc4, ...e6 and ...a6, while 3.cxd5 cxd5 gives a symmetrical " +
      "structure in which White keeps only the extra move.",
  },

  "1.c4 c6 2.d4 Nf6": {
    strategy:
      "Develops a knight that covers d5 and e4 and keeps the choice of structure open, and " +
      "unlike 2...e6 it rules out an immediate e4. After 3.Nf3 or 3.Nc3, 3...d5 leads to the " +
      "Slav Defence and 3...e6 to a Semi-Slav set-up. With 3...g6 instead, Black lets White " +
      "build a broad centre with e4, backed by Nc3.",
  },

  "1.c4 c6 2.d4 e6": {
    strategy:
      "Prepares ...d5 for the Semi-Slav triangle of pawns on c6, d5 and e6, and an exchange " +
      "on d5 then gives a Carlsbad structure rather than the symmetrical Exchange Slav. White " +
      "can reply 3.e4, and 3...d5 4.Nc3 reaches the Marshall Gambit position of the " +
      "Semi-Slav. The structure is solid, but the c8-bishop stays shut in until ...dxc4 and " +
      "...b5 or a later ...c5 free it.",
  },

  "1.c4 c6 2.d4 d6": {
    name: "Queen's Pawn Game: Anglo-Slav Opening",
    strategy:
      "Avoids the Slav by delaying ...d5, opens the c8-bishop's diagonal and prepares ...e5 " +
      "for an Old Indian-style set-up. It is sound but passive: White gets Nc3, e4 and Nf3 " +
      "with more space, and Black must find the right moment to break.",
  },

  "1.c4 c6 2.d4 g6": {
    strategy:
      "Prepares ...Bg7 and ...d6 or ...d5 in a Modern-style set-up that watches the long " +
      "diagonal and d4. It is sound but passive: White can build a broad centre with Nc3, e4 " +
      "and Nf3 before Black has made a central thrust.",
  },

  "1.c4 c6 2.d4 f5": {
    strategy:
      "Takes e4 under control for a Dutch Defence set-up with ...Nf6, ...e6 and ...d5, the " +
      "Stonewall with the c-pawn already on c6. It weakens the e8-h5 diagonal and the " +
      "e6-square, and in the Stonewall the c8-bishop is shut in behind the e6-pawn, so it is " +
      "playable but gives White easy development with Nc3, g3 and Bg2.",
  },

  "1.c4 c6 2.d4 Na6": {
    strategy:
      "Brings the knight to the rim, where it eyes b4 and c5 but does little for the centre " +
      "and blocks the a-pawn. Without ...d5 or ...e5 Black cedes space, and White builds with " +
      "Nc3 and e4.",
  },

  "1.c4 c6 2.d4 Qc7": {
    strategy:
      "Prepares ...e5, but the queen moves out before any minor piece and leaves the centre " +
      "to White. An immediate ...e5 meets dxe5 Qxe5 and Nf3 with a tempo on the queen, and " +
      "otherwise White builds with Nc3 and e4.",
  },

  "1.c4 c6 2.d4 Qb6": {
    strategy:
      "Eyes d4 and b2, but both are guarded and the queen is exposed: Nc3 and Na4, or c5 at " +
      "once, drive it back with tempo while Black has no piece out and has not fought for the " +
      "centre.",
  },

  "1.c4 c6 2.d4 Qa5+": {
    strategy:
      "The check gains nothing: Bd2 blocks it with a threat on the queen, or Nc3 develops a " +
      "piece, and Black must spend further moves on the queen with no piece developed and the " +
      "centre left to White.",
  },

  "1.c4 c6 2.d4 Nh6": {
    strategy:
      "Heads for f5 to hit d4, but the knight on the rim is met by Bxh6 gxh6, which leaves " +
      "Black with doubled, isolated h-pawns for the bishop pair. The centre belongs to White " +
      "meanwhile.",
  },

  "1.c4 c6 2.d4 a6": {
    strategy:
      "Prepares ...b5 against c4, but it takes a tempo and develops nothing, so White " +
      "continues Nc3 and e4 with a free hand in the centre.",
  },

  "1.c4 c6 2.d4 a5": {
    strategy:
      "Restrains a later b4 but is a slow rook-pawn move that develops nothing and gives up " +
      "control of b6. White builds the centre with Nc3 and e4.",
  },

  "1.c4 c6 2.d4 b6": {
    strategy:
      "Prepares ...Bb7, but the c6-pawn shuts that bishop in from the start, and ...c5 would " +
      "be needed to open it at the cost of another tempo. Meanwhile White takes the centre " +
      "with Nc3 and e4.",
  },

  "1.c4 c6 2.d4 b5": {
    strategy:
      "Challenges c4, but after cxb5 cxb5 the b5-pawn is loose: e4 opens the f1-bishop " +
      "against it, and Qb3 and Nc3 hit it too. Black spends further moves holding the pawn " +
      "while the pieces stay at home.",
  },

  "1.c4 c6 2.d4 e5": {
    strategy:
      "Hits d4 at once, but after 3.dxe5 the quickest way to win the pawn back is ...Qa5+ and " +
      "...Qxe5. With the queen in the open White gains tempi with Bd2 and Bc3 or with Nc3 and " +
      "Nf3, and Black falls behind in development.",
  },

  "1.c4 c6 2.d4 f6": {
    strategy:
      "Prepares ...e5, but takes f6 from the knight and weakens e6 and the e8-h5 diagonal. " +
      "White develops with Nc3 and e4 and claims the centre first.",
  },

  "1.c4 c6 2.d4 h6": {
    strategy:
      "Takes g5 from the bishop but is a slow rook-pawn move that develops nothing. White " +
      "continues Nc3 and e4 and has the centre to itself.",
  },

  "1.c4 c6 2.d4 h5": {
    strategy:
      "A flank advance that weakens g5 and g6 and does nothing for the centre or development. " +
      "White builds with Nc3 and e4 and may settle a bishop on g5.",
  },

  "1.c4 c6 2.d4 c5": {
    strategy:
      "Spends a second tempo on the c-pawn. After 3.d5 White has a Benoni-type space " +
      "advantage a tempo up, and after 3.dxc5 Black needs more time to regain the pawn with " +
      "...e6 and ...Bxc5 or ...Qa5+ and ...Qxc5.",
  },

  "1.c4 c6 2.d4 g5": {
    strategy:
      "Hangs a pawn: Bxg5 takes it for nothing, since the e7-pawn blocks the queen's guard. " +
      "Neither ...Qb6, hitting b2 and d4, nor ...Qa5+, hitting g5, wins it back, because Qd2 " +
      "answers both.",
  },
};
