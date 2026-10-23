import type { OpeningTexts } from "../book.ts";

// English prose for c4-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.c4 Nf6 2.Nc3": {
    name: "English Opening: Anglo-Indian Defence, Queen's Knight Variation",
    background:
      "Against 2...d5, White can answer 3.cxd5 Nxd5 4.g3 so that Black cannot force a " +
      "Grünfeld Defence; Mikhail Botvinnik played this line several times in his 1958 world " +
      "championship match against Vasily Smyslov.",
    strategy:
      "Develops the knight towards the centre, where it controls d5 and e4, and keeps e4, g3 " +
      "and d4 all available. Against ...e6 or ...g6 White can take the centre with e4, play " +
      "g3 and Bg2 for the usual English set-up, or turn to d4 for an Indian structure. The " +
      "cost is that d4 now allows the Nimzo-Indian after ...e6 and ...Bb4, and Black can " +
      "contest the centre at once with ...d5 or ...e5.",
  },

  "1.c4 Nf6 2.Nf3": {
    strategy:
      "Develops the king's knight, watches d4 and e5 and leaves the choice between d4, g3 and " +
      "Nc3 until Black's set-up is clear. Against ...e6 and ...b6 it heads for a Queen's " +
      "Indian structure, against ...g6 for a fianchetto set-up, and d4 turns it into a " +
      "Queen's Gambit or Indian game. The move commits little, though it gives Black a free " +
      "choice of defensive scheme.",
  },

  "1.c4 Nf6 2.d4": {
    strategy:
      "Takes the centre with a pawn and reaches the 1.d4 Nf6 2.c4 position with Black to " +
      "move. Black chooses between ...e6 for Queen's Gambit, Queen's Indian or Nimzo-Indian " +
      "play, ...g6 for King's Indian and Grünfeld structures, and ...c5 for a Benoni-type " +
      "game. White gets the classical c4-d4 pawn pair and extra space, but must be ready for " +
      "whichever of these defences Black picks.",
  },

  "1.c4 Nf6 2.g3": {
    strategy:
      "Prepares Bg2, which bears on d5 and along the long diagonal towards b7, and keeps Nc3, " +
      "Nf3 and d4 in reserve. Against ...e6 and ...d5 White reaches Catalan-like positions " +
      "with Nf3, against ...g6 a symmetrical fianchetto, and against ...e5 a Reversed " +
      "Sicilian with Nc3. The cost is that White's centre stays unoccupied, and Black can " +
      "strike at the c4-pawn at once with ...c6 and ...d5.",
  },

  "1.c4 Nf6 2.e3": {
    strategy:
      "Opens the f1-bishop and supports d4, steering towards Queen's Gambit or Nimzo-Indian " +
      "structures after Nc3 and d4, or towards b3 and Bb2. It is solid but slow, and it " +
      "commits the e-pawn before Black's set-up is known; Black can take space with ...e5 or " +
      "...d5 and develop freely.",
  },

  "1.c4 Nf6 2.b3": {
    strategy:
      "Prepares Bb2, which bears on e5 and the long diagonal, supports the c4-pawn and keeps " +
      "e3, Nf3 and d4 flexible. It is sound but slow: the centre stays unoccupied, and Black " +
      "can claim it with ...e5 or ...d5 or contest the diagonal with ...g6.",
  },

  "1.c4 Nf6 2.d3": {
    strategy:
      "Supports a later e4 and opens the c1-bishop, with g3, Bg2 and Nc3 to follow. It is " +
      "sound but modest: d4 now costs an extra tempo, so Black can take the centre with ...e5 " +
      "or ...d5 and develop freely.",
  },

  "1.c4 Nf6 2.Qc2": {
    strategy:
      "Backs the c4-pawn and prepares e4, but develops no minor piece and leaves the queen " +
      "where ...Nc6 followed by ...Nb4 can hit it with tempo. Black takes the centre with " +
      "...e5 or ...d5 while White is still unready.",
  },

  "1.c4 Nf6 2.Qb3": {
    strategy:
      "Eyes b7 and defends the c4-pawn, but the c8-bishop already covers b7 and no minor " +
      "piece is developed. ...Nc6 followed by ...Na5 then hits the queen and the c4-pawn with " +
      "tempo, and Black takes the centre while White rearranges.",
  },

  "1.c4 Nf6 2.Qa4": {
    strategy:
      "Brings the queen out before any minor piece and threatens nothing, since the rook " +
      "covers a7. The queen pins the d7-pawn for a moment, but ...c6 breaks the pin and " +
      "prepares ...d5, and Black develops freely while the queen stands on the rim.",
  },

  "1.c4 Nf6 2.Na3": {
    strategy:
      "Defends the c4-pawn and can continue to c2 or b5, but on a3 the knight controls no " +
      "central square. Black takes the centre with ...e5 or ...d5 in the meantime.",
  },

  "1.c4 Nf6 2.Nh3": {
    strategy:
      "Develops the knight on the rim on its way to f4 and leaves the centre alone. Once " +
      "Black's d-pawn has moved, ...Bxh3 can double White's h-pawns, and f3 was the natural " +
      "square for the knight.",
  },

  "1.c4 Nf6 2.a3": {
    strategy:
      "Takes b4 from Black's pieces and prepares b4, but spends a tempo without developing " +
      "anything or touching the centre. Black takes space with ...e5 or ...d5.",
  },

  "1.c4 Nf6 2.a4": {
    strategy:
      "Gains a little queenside space but develops nothing and gives up the b4-square for " +
      "good, where a black knight or bishop can settle. Black takes the centre with ...e5 or " +
      "...d5 in the meantime.",
  },

  "1.c4 Nf6 2.b4": {
    name: "English Orangutan",
    strategy:
      "Advances the b-pawn where nothing defends it: after ...e6 or ...e5 the f8-bishop " +
      "attacks it, and White must spend another tempo on a3, Qb3 or b5 or give it up. " +
      "Development lags while Black takes the centre.",
  },

  "1.c4 Nf6 2.f3": {
    strategy:
      "Prepares e4 but takes f3 from the knight, weakens the e1-h4 diagonal and develops " +
      "nothing. Black develops freely and takes the centre with ...e5 or ...d5.",
  },

  "1.c4 Nf6 2.f4": {
    name: "Bird Opening: Mujannah",
    strategy:
      "Grabs kingside space and controls e5, but opens the e1-h4 diagonal to the king and " +
      "develops nothing. Black develops naturally with ...d5, ...g6 or ...d6 and ...e5.",
  },

  "1.c4 Nf6 2.h3": {
    strategy:
      "Stops ...Ng4 and ...Bg4 but is a slow waiting move that develops nothing. Black takes " +
      "the centre with ...e5 or ...d5.",
  },

  "1.c4 Nf6 2.h4": {
    strategy:
      "Spends a tempo on the edge of the board, weakens the g3-square, develops no piece and " +
      "does nothing for the centre. Black takes space with ...e5 or ...d5.",
  },

  "1.c4 Nf6 2.c5": {
    strategy:
      "Gains space but moves the same pawn twice and gives up control of d5. The pawn on c5 " +
      "has no defender: ...e6 or ...e5 opens the f8-bishop against it and ...b6 undermines " +
      "it, while White has developed nothing.",
  },

  "1.c4 Nf6 2.g4": {
    strategy:
      "Hangs a pawn: 2...Nxg4 wins it at once because nothing defends g4, and h3 only drives " +
      "the knight to a good square like e5. The kingside is loosened with no lead in " +
      "development in return.",
  },

  "1.c4 Nf6 2.e4": {
    strategy:
      "Offers the e-pawn: Black simply wins a pawn with 2...Nxe4, and quick development such " +
      "as Nc3 or Qe2 does not regain it, since the knight can retreat to f6 or c5.",
  },

  "1.c4 Nf6": {
    name: "English Opening: Anglo-Indian Defence",
    background:
      "The most common reply to 1.c4; the Encyclopaedia of Chess Openings classifies its " +
      "independent lines as A15 to A19.",
  },

  "1.c4 Nf6 2.Nc3 e6": {
    name: "English Opening: Anglo-Indian Defence, Hedgehog System",
    background:
      "The ideas behind the Hedgehog set-up were originally developed in the English Opening, " +
      "and it first became extensively analysed in the 1970s. Bobby Fischer adopted it with " +
      "White against Ulf Andersson at Siegen in 1970, one of the first games to feature it, " +
      "and his crushing win so impressed Andersson that he later became one of the foremost " +
      "Hedgehog exponents himself.",
    strategy:
      "Opens the f8-bishop's diagonal and keeps Black flexible. After 3.d4 the game enters " +
      "the Nimzo-Indian with 3...Bb4 or the Queen's Gambit Declined with 3...d5; after 3.Nf3 " +
      "Black can choose ...d5, ...b6, ...c5 or ...Bb4, and a set-up with ...c5, ...b6, ...Bb7 " +
      "and ...d6 stays available. White can also seize space at once with 3.e4. The cost is " +
      "the c8-bishop, which the e6-pawn shuts in until ...b6 gives it the long diagonal.",
  },

  "1.c4 Nf6 2.Nc3 e5": {
    strategy:
      "Claims the centre and transposes into the Two Knights set-up of the Reversed Sicilian. " +
      "After 3.Nf3 Nc6 both sides develop in the Four Knights manner, while 3.g3 can be met " +
      "by ...d5 or ...Bb4. The e5-pawn controls d4, but the d5-square needs watching, since " +
      "White's c4-pawn and Nc3 both aim at it.",
  },

  "1.c4 Nf6 2.Nc3 g6": {
    strategy:
      "Prepares the fianchetto ...Bg7 and quick castling, aiming for King's Indian or " +
      "Grünfeld structures. After 3.d4 d5 the game transposes into the Grünfeld Defence, but " +
      "3.e4 rules that out and more or less forces a King's Indian with 3...d6. The cost is " +
      "central space at first, and the g7-bishop only comes alive once Black strikes at the " +
      "centre with ...d5, ...c5 or ...e5.",
  },

  "1.c4 Nf6 2.Nc3 d5": {
    name: "English Opening: Anglo-Grünfeld Defence",
    background:
      "This independent line of the English Opening generally parallels the development of " +
      "its 1.d4 counterpart, the Grünfeld Defence, well into the game, hence its name. Ernst " +
      "Grünfeld introduced that defence into international play at the Bad Pistyan tournament " +
      "in April 1922.",
    strategy:
      "Strikes at the centre at once and attacks the c4-pawn, which White usually exchanges " +
      "with 3.cxd5 Nxd5. The quiet 4.g3 then prepares Bg2 against the knight and the long " +
      "diagonal, while 4.e4 hits the knight at once and Black chooses between ...Nb4, ...Nb6 " +
      "and ...Nxc3. Black gets free piece play, at the price of a centralised knight that " +
      "White can chase with gain of time.",
  },

  "1.c4 Nf6 2.Nc3 c5": {
    name: "English Opening: Symmetrical Variation",
    strategy:
      "Controls d4 from the flank, mirroring White's c-pawn. After 3.Nf3 d5 4.cxd5 Nxd5 White " +
      "can challenge the centre with 5.d4 or 5.e4 or allow Black more central space with " +
      "5.g3; ...Nc6 with ...g6 and ...Bg7 is the slower alternative. In the slower lines the " +
      "cost is the d5-square, which White's c4-pawn and Nc3 already eye and which a pawn on " +
      "e4 would control as well.",
  },

  "1.c4 Nf6 2.Nc3 Nc6": {
    strategy:
      "Develops with control of d4 and e5 and prepares ...e5; after 3.Nf3 e5 the game " +
      "transposes into the Four Knights Variation of the Reversed Sicilian. The knight blocks " +
      "the c-pawn, so ...c6 can no longer support ...d5, and after 3.d4 e5 4.d5 the knight is " +
      "driven away again.",
  },

  "1.c4 Nf6 2.Nc3 b6": {
    strategy:
      "Prepares ...Bb7, which adds to the f6-knight's pressure on e4, usually with ...e6 to " +
      "follow. Here the knight on c3 already guards e4, so 3.e4 Bb7 4.Bd3 gives White a broad " +
      "centre that Black must undermine with ...e6 and ...c5 or ...Bb4.",
  },

  "1.c4 Nf6 2.Nc3 c6": {
    strategy:
      "Prepares ...d5 with pawn support while keeping the c8-bishop's diagonal open; after " +
      "3.d4 d5 the game is a Slav Defence. White can instead take space at once with 3.e4, " +
      "and 3...d5 then leads to Caro-Kann-like structures in which Black must answer 4.e5 or " +
      "an exchange on d5.",
  },

  "1.c4 Nf6 2.Nc3 d6": {
    strategy:
      "Prepares ...e5 or ...g6 and ...Bg7, keeping the structure flexible; after 3.d4 the " +
      "game becomes an Old Indian with ...e5 or a King's Indian with ...g6. The cost is time: " +
      "White can add e4 and build a broad pawn centre before Black challenges it.",
  },

  "1.c4 Nf6 2.Nc3 b5": {
    strategy:
      "Offers a pawn that both the c4-pawn and the c3-knight attack: after 3.cxb5 White is " +
      "simply a pawn up, and the half-open b-file is scant compensation.",
  },

  "1.c4 Nf6 2.Nc3 a6": {
    strategy:
      "Prepares ...b5 but is too slow: it does nothing for development or the centre, and " +
      "White answers with e4 or d4 to take space unopposed.",
  },

  "1.c4 Nf6 2.Nc3 a5": {
    strategy:
      "Gains space on the queenside and covers b4, but weakens b5 and does nothing for " +
      "development or the centre. White continues with e4 or d4 and a free hand.",
  },

  "1.c4 Nf6 2.Nc3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4, c5 and c7 but no central square, and " +
      "blocks the a-pawn. From c6 the same knight would control d4 and e5.",
  },

  "1.c4 Nf6 2.Nc3 h6": {
    strategy:
      "Takes g5 from a later Bg5 but costs a tempo, does nothing for the centre or " +
      "development, and slightly loosens the kingside.",
  },

  "1.c4 Nf6 2.Nc3 h5": {
    strategy:
      "Spends a tempo on a flank advance that weakens g5 and g6 and does nothing for the " +
      "centre or development.",
  },

  "1.c4 Nf6 2.Nc3 Ng8": {
    strategy:
      "Returns the knight to its starting square, undoing the previous move. Black has in " +
      "effect passed twice, so White has two extra tempi for development and the centre.",
  },

  "1.c4 Nf6 2.Nc3 Ng4": {
    strategy:
      "Eyes f2 and h2, but both are guarded, and h3 can drive the knight back at any time; " +
      "Black spends a tempo while White builds the centre with d4 and e4.",
  },

  "1.c4 Nf6 2.Nc3 Nh5": {
    strategy:
      "Puts the knight on the rim, where it controls f4 and g3 but no central square. White " +
      "takes the centre with d4 and e4, and Be2 or g4 can later drive the knight away with " +
      "gain of time.",
  },

  "1.c4 Nf6 2.Nc3 g5": {
    strategy:
      "Weakens the kingside and does nothing for the centre: after 3.d4 the c1-bishop attacks " +
      "the unprotected g5-pawn, and guarding it with ...h6 loosens the king's cover further. " +
      "The f6-knight also blocks the long diagonal of a bishop on g7, so the pawn supports no " +
      "pressure on d4.",
  },

  "1.c4 Nf6 2.Nc3 Rg8": {
    strategy:
      "Gives up the right to castle kingside for good and spends a tempo on a rook move that " +
      "does nothing for development or the centre.",
  },

  "1.c4 Nf6 2.Nc3 Ne4": {
    strategy: "Loses the knight outright: 3.Nxe4, and nothing protects e4.",
  },

  "1.c4 Nf6 2.Nc3 Nd5": {
    strategy:
      "Hangs the knight to 3.cxd5; the d7-pawn blocks the queen's recapture, so Black has " +
      "nothing in return.",
  },

  "1.c4 Nf6 2.g3 e6": {
    strategy:
      "Prepares ...d5 and keeps several set-ups open: after 3.Bg2 d5 4.d4 the game becomes a " +
      "Catalan, while ...c5 leads to Symmetrical English structures and ...b6 to Queen's " +
      "Indian ones. Black gets a solid centre and a flexible pawn structure, at the price of " +
      "a c8-bishop that stays shut in behind the e6-pawn for the time being.",
  },

  "1.c4 Nf6 2.g3 g6": {
    strategy:
      "Mirrors White's fianchetto and prepares ...Bg7 and ...O-O. Black then builds a King's " +
      "Indian centre with ...d6 and ...e5, or strikes with ...d5 in Grünfeld style. White " +
      "usually continues with Bg2 and Nc3, and either plays d4 for a fianchetto King's Indian " +
      "or takes space with e4 and d3 instead.",
  },

  "1.c4 Nf6 2.g3 c6": {
    strategy:
      "Prepares ...d5 with a pawn behind it, so that cxd5 can be met by ...cxd5 instead of " +
      "...Nxd5, where the knight would stand exposed to Bg2. Black reaches Slav-like " +
      "structures in which the queen's bishop can still come out to f5 or g4 before ...e6. " +
      "The c-pawn is committed, so a later ...c5 costs an extra tempo.",
  },

  "1.c4 Nf6 2.g3 c5": {
    strategy:
      "Controls d4 and heads for a symmetrical structure: after 3.Bg2 Nc6 4.Nc3 g6 5.Nf3 Bg7 " +
      "both sides have fianchettoed. The fight centres on d4 and on queenside expansion with " +
      "b4 or ...b5. White keeps the move and a small initiative, and Black has to meet the " +
      "pressure of the g2-bishop on the long diagonal.",
  },

  "1.c4 Nf6 2.g3 e5": {
    strategy:
      "Takes the centre at once and transposes into 1.c4 e5 2.g3 Nf6, a reversed Sicilian in " +
      "which White has an extra tempo. Black follows with ...Nc6 and either ...d5 or the " +
      "quieter ...d6, while White develops with Bg2 and Nc3 and fights for the d5 square.",
  },

  "1.c4 Nf6 2.g3 d5": {
    strategy:
      "Strikes at the centre at once, but after 3.cxd5 Nxd5 4.Bg2 the bishop attacks the " +
      "knight on d5. Black must spend a move on ...Nb6 or cover the knight with ...c6 or " +
      "...e6, so White develops with gain of time; preparing ...d5 with ...c6 or ...e6 first " +
      "avoids this.",
  },

  "1.c4 Nf6 2.g3 Nc6": {
    strategy:
      "Develops a piece and prepares ...e5, which gives reversed-Sicilian structures after " +
      "3.Bg2 e5 or 3.Nc3 e5. It is sound but less flexible than ...e6 or ...c6, since it " +
      "blocks the c-pawn and fixes the queen's knight before Black knows White's set-up.",
  },

  "1.c4 Nf6 2.g3 d6": {
    strategy:
      "Prepares ...e5 and opens the diagonal of the c8-bishop, with ...g6 and ...Bg7 still " +
      "available for a King's Indian set-up. It is sound but modest: the pawn claims less " +
      "central space than ...d5 or ...e5, so White can build up with Bg2, Nc3 and e4 and keep " +
      "a small space advantage.",
  },

  "1.c4 Nf6 2.g3 b6": {
    strategy:
      "Prepares ...Bb7 to challenge the long diagonal in the Queen's Indian manner. It is " +
      "sound, but after 3.Bg2 Bb7 4.Nc3 White's e4 push and central expansion come easily. " +
      "Black has less say in the centre than after ...e6 or ...c6 first.",
  },

  "1.c4 Nf6 2.g3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but does little for the centre. It " +
      "needs more moves to become useful, for example ...c6 and ...Nc7, while White gains " +
      "space with Bg2, Nc3 and e4.",
  },

  "1.c4 Nf6 2.g3 a6": {
    strategy:
      "Slow, and the ...b5 it prepares fails tactically: once the b-pawn leaves b7, the " +
      "bishop on g2 hits the rook on a8, so 3.Bg2 b5 4.Bxa8 takes the rook.",
  },

  "1.c4 Nf6 2.g3 a5": {
    strategy:
      "A slow edge-pawn move that restrains b4 but weakens b5 and does nothing for the centre " +
      "or for development, while White continues with Bg2 and Nc3.",
  },

  "1.c4 Nf6 2.g3 h6": {
    strategy:
      "Spends a tempo on a rook-pawn move that neither develops a piece nor fights for the " +
      "centre. White plays Bg2, Nc3 and e4 and builds a space advantage without hindrance.",
  },

  "1.c4 Nf6 2.g3 h5": {
    strategy:
      "Heads for ...h4 against g3, but after 3.Nf3 the push ...h4 just drops a pawn to Nxh4, " +
      "as the g3-pawn guards the knight. The move also weakens g5 and makes kingside castling " +
      "less attractive while White develops.",
  },

  "1.c4 Nf6 2.g3 Ng8": {
    strategy:
      "Undoes Black's first move and returns the knight to its starting square, so White has " +
      "made two useful moves to none and keeps a free hand in the centre.",
  },

  "1.c4 Nf6 2.g3 Ng4": {
    strategy:
      "Moves the knight a second time without a real threat, since the king guards f2 and the " +
      "rook guards h2. After 3.h3 it has to move a third time, while White continues with Bg2 " +
      "and Nc3.",
  },

  "1.c4 Nf6 2.g3 Nh5": {
    strategy:
      "Aims at g3, but the pawn is guarded by f2 and h2, so nothing is threatened. The rim " +
      "knight can be harassed: 3.e4 opens the queen's diagonal to h5, and White gains time.",
  },

  "1.c4 Nf6 2.g3 Ne4": {
    strategy:
      "Moves the knight a second time to a square where no pawn supports it: 3.d3 drives it " +
      "away at once, and 3.Qc2 or 3.Bg2 attack it too. After 3.Qc2 Nc5 4.d4 Ne6 5.d5 White " +
      "gains space with tempo.",
  },

  "1.c4 Nf6 2.g3 Rg8": {
    strategy:
      "Spends a tempo and gives up kingside castling for good, since the h8-rook has moved, " +
      "without helping development or the centre. White simply develops with Bg2 and Nc3 and " +
      "takes the centre.",
  },

  "1.c4 Nf6 2.g3 b5": {
    strategy:
      "Gives up a pawn for little: after 3.cxb5 the long diagonal is open, so Bg2 will hit " +
      "the rook on a8, and Black has to spend time on it instead of on Benko-style queenside " +
      "pressure.",
  },

  "1.c4 Nf6 2.g3 g5": {
    strategy:
      "Weakens f5, h5 and the future king's cover, and the pawn needs support at once: 3.d4 " +
      "opens the c1-bishop's diagonal against it, and 3.h4 challenges it too. The loosened " +
      "kingside remains a lasting weakness.",
  },

  "1.c4 Nf6 2.g3 Nd5": {
    strategy:
      "Hangs the knight: the c4-pawn attacks d5 and nothing defends it, as the d7-pawn blocks " +
      "the queen, so 3.cxd5 wins a piece for nothing.",
  },
};
