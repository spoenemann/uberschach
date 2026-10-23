import type { OpeningTexts } from "../book.ts";

// English prose for Nf3-f5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.Nf3 f5 2.d4": {
    strategy:
      "Takes the centre and transposes to the Dutch Defence, the position of 1.d4 f5 2.Nf3, " +
      "where the knight already covers e5 and supports the d-pawn. White keeps the choice " +
      "between a g3 fianchetto, c4 with Nc3, or Bf4 and e3, while Black chooses ...e6 for the " +
      "Stonewall or Classical set-up or ...g6 for the Leningrad. The price is that Black gets " +
      "the Dutch structure he was aiming for.",
  },

  "1.Nf3 f5 2.g3": {
    strategy:
      "Prepares Bg2 and castling while the centre pawns stay flexible: d4 later transposes to " +
      "a fianchetto line of the Dutch, and c4, or d3 with a later e4, keeps the game " +
      "independent. The bishop on g2 stands behind the f3-knight at first and bears on e4 and " +
      "d5 once the knight moves. Black usually continues with ...Nf6 and either ...e6 or " +
      "...g6.",
  },

  "1.Nf3 f5 2.c4": {
    name: "English Opening: Anglo-Dutch Defence",
    strategy:
      "Controls d5 and prepares Nc3 and g3 with Bg2, so that White can reach the Dutch with " +
      "d4 later or play without d4 at all. Against a Stonewall with ...e6 and ...d5, the " +
      "c4-pawn already presses on d5. Black usually develops with ...Nf6 and then chooses " +
      "between ...e6 and ...g6.",
  },

  "1.Nf3 f5 2.e4": {
    name: "Zukertort Opening: Lisitsin Gambit",
    background:
      "Named after Georgy Lisitsin, who played it against Nikolai Riumin in the first round " +
      "of the 1931 USSR Championship in Moscow and against Mikhail Botvinnik at the Leningrad " +
      "Masters of 1933. Edward Winter gives earlier games with the same moves, the oldest " +
      "being Alfred Emil Wolf against Max Weiss, played in Vienna on 12 May 1923. The Oxford " +
      "Companion to Chess calls the gambit “enterprising and probably sound”.",
    strategy:
      "Offers the e-pawn to open lines against Black's loosened kingside. After 2...fxe4 " +
      "3.Ng5 White has moved the knight twice, but on g5 it attacks e4 and is hard to chase " +
      "away, and 4.d3 opens further lines. Black can decline with 2...e5, which transposes to " +
      "the Latvian Gambit.",
  },

  "1.Nf3 f5 2.b3": {
    name: "Nimzowitsch–Larsen Attack: Dutch Variation",
    strategy:
      "Prepares Bb2 to eye the long diagonal towards g7 and keeps c4, e3 and g3 available. It " +
      "is sound and flexible but slower than 2.d4, 2.g3 or 2.c4, and Black builds the usual " +
      "Dutch structure with ...Nf6 and ...e6 without being challenged.",
  },

  "1.Nf3 f5 2.d3": {
    strategy:
      "Prepares e4 a move later than the 2.e4 gambit, so that the d-pawn can recapture if " +
      "Black takes there, and frees the c1-bishop. It is sound but slow, and Black often " +
      "answers 2...d6 or develops with ...Nf6 and ...e6.",
  },

  "1.Nf3 f5 2.e3": {
    strategy:
      "Opens the f1-bishop for Be2 or Bd3 and supports a later d4, a solid set-up against the " +
      "Dutch. It is sound but passive: the e3-pawn closes the c1-bishop's kingside diagonal, " +
      "so that bishop usually needs b3 and Bb2, and Black develops freely with ...Nf6 and " +
      "...e6.",
  },

  "1.Nf3 f5 2.Nc3": {
    strategy:
      "Develops the second knight and watches e4 and d5, preparing d4 or e4 without " +
      "committing a pawn yet. After ...Nf6 and ...e6, White can follow with d4 and Bg5, " +
      "pinning the knight, to reach Dutch structures. It is sound, but it blocks the c-pawn, " +
      "and the plain 2.d4 reaches the same ideas with more choice.",
  },

  "1.Nf3 f5 2.a3": {
    strategy:
      "A waiting move that prepares b4 but does nothing about the centre or development. " +
      "Black develops freely with ...Nf6 and ...e6 while White has spent a tempo on a " +
      "rook-pawn move.",
  },

  "1.Nf3 f5 2.a4": {
    strategy:
      "A slow rook-pawn move that neither develops a piece nor fights for the centre. It " +
      "weakens b4 and gives Black time for ...Nf6, ...e6 and ...Be7 with a free hand.",
  },

  "1.Nf3 f5 2.b4": {
    strategy:
      "Grabs queenside space and prepares Bb2 on the long diagonal, but the b4-pawn needs a3 " +
      "or c3 against ...e6 and ...Bxb4, and the centre is left to Black. Little is gained for " +
      "the tempo and the queenside is stretched.",
  },

  "1.Nf3 f5 2.c3": {
    strategy:
      "A slow preparation for d4 that takes c3 from the b1-knight and does nothing to contest " +
      "e4. Black meets it with ...Nf6 and ...e6 and keeps e4 under control.",
  },

  "1.Nf3 f5 2.h3": {
    strategy:
      "Prepares g4 to undermine the f5-pawn, but the plan costs time and loosens the kingside " +
      "where White's king usually castles. Black simply develops with ...Nf6 and ...e6.",
  },

  "1.Nf3 f5 2.h4": {
    strategy:
      "Spends a tempo on a flank pawn that does nothing for the centre or development. It " +
      "weakens g4 and the kingside, and Black continues with ...Nf6 and ...e6 at leisure.",
  },

  "1.Nf3 f5 2.Na3": {
    strategy:
      "A rim knight that eyes c4 or b5 but covers nothing in the centre and shuts in the " +
      "a-pawn. Black develops naturally with ...Nf6 and ...e6.",
  },

  "1.Nf3 f5 2.Rg1": {
    strategy:
      "Prepares g4 against the f5-pawn, but White gives up the right to castle kingside and " +
      "spends a tempo on the rook instead of developing. Black simply continues with ...Nf6 " +
      "and ...e6.",
  },

  "1.Nf3 f5 2.Ng5": {
    strategy:
      "Moves the developed knight again and invites ...h6, or ...e5 opening the queen's " +
      "diagonal to g5, with a gain of time. The knight must soon return to f3 or go to the " +
      "rim on h3, while Black builds the centre.",
  },

  "1.Nf3 f5 2.Nh4": {
    strategy:
      "Attacks the undefended f5-pawn, but 2...e6 defends it and opens the queen's diagonal " +
      "to h4, so the knight must go back to f3 or be propped up with g3. Either way White has " +
      "spent extra moves on one piece while Black develops.",
  },

  "1.Nf3 f5 2.Ne5": {
    strategy:
      "Puts the knight on a central square, but 2...d6 drives it away with a gain of time. It " +
      "must retreat to f3, d3 or c4, a third move with the same piece, while Black develops.",
  },

  "1.Nf3 f5 2.Nd4": {
    strategy:
      "Attacks the undefended f5-pawn, but 2...e6 defends it at no cost, and the knight then " +
      "becomes a target for ...c5. White has used two moves on the same piece and Black gains " +
      "time.",
  },

  "1.Nf3 f5 2.Ng1": {
    strategy:
      "Retreats the knight to its start square and so undoes the first move. Black has ...f5 " +
      "for free and builds the centre at once with ...Nf6, ...e6 and ...d5 against an " +
      "undeveloped position.",
  },

  "1.Nf3 f5 2.g4": {
    strategy:
      "Offers a pawn, but 2...fxg4 attacks the f3-knight, which has to move, and White has no " +
      "lasting compensation for the pawn. The kingside is loosened for good and no new piece " +
      "comes into play.",
  },

  "1.Nf3 f5": {
    name: "Zukertort Opening: Dutch Variation",
    background:
      "1...f5 is the move of the Dutch Defence (1.d4 f5), which Elias Stein, an Alsatian who " +
      "settled in The Hague, recommended as the best reply to 1.d4 in his 1789 book Nouvel " +
      "essai sur le Jeu des échecs.",
  },

  "1.Nf3 f5 2.g3 Nf6": {
    strategy:
      "Develops the knight to its natural square, where it controls e4 and h5 and keeps every " +
      "Dutch set-up open: …e6 with …d5 for a Stonewall, …g6 with …Bg7 for a Leningrad, or …e6 " +
      "with …d6 for a Classical set-up. White usually answers with Bg2, castling and d3 or d4 " +
      "with c4, and 3.Nh4 against the unguarded f5-pawn is met by …e6 or …g6.",
  },

  "1.Nf3 f5 2.g3 e6": {
    strategy:
      "Guards f5 and opens the f8-bishop for …Be7 or …Bd6 and castling, with …Nf6 to follow. " +
      "Black keeps the choice between a Stonewall with …d5 and a Classical set-up with …d6 " +
      "and …Qe8. The price is the c8-bishop, which stays shut in behind the e6-pawn until …b6 " +
      "and …Bb7, or …d6 and a later …e5, give it room.",
  },

  "1.Nf3 f5 2.g3 g6": {
    strategy:
      "Guards f5 and h5 and prepares …Bg7, …Nf6 and quick castling, the Leningrad formation " +
      "with the bishop on the long diagonal. …d6 and …Qe8 stay in reserve. The advanced f- " +
      "and g-pawns leave e6 without pawn cover once …d6 is played, and White's knights often " +
      "aim for it via g5 or d4.",
  },

  "1.Nf3 f5 2.g3 d5": {
    strategy:
      "Claims e4 and c4 at once and opens the c8-bishop so that it guards f5, heading for a " +
      "Stonewall with …Nf6, …e6 and …c6. The centre is fixed before the pieces are out, and " +
      "…e6 later shuts the bishop in again, so White develops with Bg2 and castling and then " +
      "strikes at d5 with c4 or with d3 and e4.",
  },

  "1.Nf3 f5 2.g3 d6": {
    strategy:
      "Opens the c8-bishop to guard f5 and prepares …Nf6, …g6 and …Bg7 or …e5. It is flexible " +
      "but slow, since no piece is developed yet, so White can build the centre with Bg2, " +
      "castling, d4 and c4 while Black is still choosing a set-up.",
  },

  "1.Nf3 f5 2.g3 c5": {
    strategy:
      "Claims d4 and queenside space for a Sicilian-style set-up with …Nc6, …Nf6 and …e6 or " +
      "…g6. It does nothing for the f5-pawn, which still needs a guard such as …e6 or …g6 " +
      "against Nh4, and White can castle and choose between d3 with e4 and d4.",
  },

  "1.Nf3 f5 2.g3 c6": {
    strategy:
      "Prepares …d5 with the c-pawn behind it, the usual Stonewall formation, with …Nf6 and " +
      "…e6 to follow. It develops nothing and leaves f5 unguarded, so 3.Nh4 already calls for " +
      "…e6, …g6 or …d5, while White castles and chooses between d3 with e4 and d4.",
  },

  "1.Nf3 f5 2.g3 Nc6": {
    strategy:
      "Develops a piece at once and eyes d4 and e5, preparing …Nf6 and …e5 or …d5. The knight " +
      "takes the square of the c-pawn, so the Stonewall set-up with …c6 is gone, and White " +
      "can take space with d4 after Bg2 and castling.",
  },

  "1.Nf3 f5 2.g3 b6": {
    strategy:
      "Prepares …Bb7, which opposes White's coming Bg2 on the long diagonal and adds a guard " +
      "to e4, the key square of the Dutch. It develops no piece yet and leaves f5 unguarded " +
      "against Nh4, so a guard such as …e6 has to follow soon.",
  },

  "1.Nf3 f5 2.g3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but stands far from the centre and " +
      "blocks the a-pawn. It costs a tempo for little, and f5 stays unguarded while White " +
      "plays Bg2, castling and d4 or c4.",
  },

  "1.Nf3 f5 2.g3 Nh6": {
    strategy:
      "Heads for f7 by way of the rim, a slow route for a knight that could reach f6 in one " +
      "move. After 3.d4 the c1-bishop eyes h6, and Bxh6 gxh6 would leave Black with doubled, " +
      "isolated h-pawns, so the knight soon spends another move on …Nf7.",
  },

  "1.Nf3 f5 2.g3 a6": {
    strategy:
      "A tempo spent on a flank move with no role yet, at best preparing …b5. It does not " +
      "guard f5, so 3.Nh4 already calls for …e6, …g6 or …d5, while White follows with Bg2 and " +
      "castling.",
  },

  "1.Nf3 f5 2.g3 a5": {
    strategy:
      "Stops b4 and gains space for …a4, but it weakens b5 and develops nothing. White plays " +
      "Bg2, castling and d3 or d4 with c4, and Nh4 can hit the unguarded f5-pawn.",
  },

  "1.Nf3 f5 2.g3 b5": {
    strategy:
      "Overextends the queenside before a single piece is out. The pawn weakens c5 and c6 and " +
      "can be challenged by a4, while White develops with Bg2 and castling from a stable " +
      "centre.",
  },

  "1.Nf3 f5 2.g3 h6": {
    strategy:
      "Takes g5 away from White's pieces, but it is slow, develops nothing and leaves f5 " +
      "unguarded. White plays Bg2 and castling, or Nh4 at once to attack f5.",
  },

  "1.Nf3 f5 2.g3 h5": {
    strategy:
      "Gains space and prepares …h4, but the g3-pawn and the f3-knight both cover h4, so the " +
      "push only drops a pawn. Meanwhile 3.Nh4 attacks the unguarded f5-pawn, so Black must " +
      "answer it first.",
  },

  "1.Nf3 f5 2.g3 Kf7": {
    strategy:
      "Gives up castling for nothing and puts the king on f7, where 3.Ng5+ already checks it. " +
      "The king needs further moves to reach safety while White develops with Bg2, castling " +
      "and d4.",
  },

  "1.Nf3 f5 2.g3 e5": {
    strategy:
      "Puts a second pawn forward, but nothing guards e5, so 3.Nxe5 simply wins it. After " +
      "…Qe7 or …d6 the knight retreats or is backed by d4, and White stays a pawn up.",
  },

  "1.Nf3 f5 2.g3 g5": {
    strategy:
      "Offers the g-pawn for nothing: 3.Nxg5 wins it, since nothing guards g5, and …h6 only " +
      "chases the knight back to f3. The pawn is gone and the kingside is loosened for good.",
  },

  "1.Nf3 f5 2.g3 f4": {
    strategy:
      "Attacks g3 but simply loses a pawn: 3.gxf4 wins it, and White's doubled f-pawns are no " +
      "compensation for Black, who has developed nothing.",
  },

  "1.Nf3 f5 2.c4 Nf6": {
    background:
      "The same position arises from 1.c4 f5 2.Nf3 Nf6. After 1.c4 f5, 2.d4 leads to a Dutch " +
      "Defence; after White's other choices, 2.Nc3, 2.Nf3 and 2.g3, Black usually plays " +
      "...Nf6.",
    strategy:
      "Develops a piece, adds a second guard to e4 and also covers d5, keeping every set-up " +
      "open: ...e6 with ...Be7 and ...O-O, ...e6 and ...d5 for a Stonewall, or ...g6 and " +
      "...Bg7 for the Leningrad. White usually continues with g3 and Bg2, as in 3.g3 g6 4.Bg2 " +
      "Bg7 5.O-O O-O, or plays d4 to transpose into a Dutch Defence.",
  },

  "1.Nf3 f5 2.c4 e6": {
    strategy:
      "Frees the f8-bishop and prepares either a Stonewall with ...d5, ...c6 and ...Bd6 or a " +
      "Classical set-up with ...Nf6, ...Be7 and ...O-O. After 3.g3 Nf6 4.Bg2 Be7 both sides " +
      "castle, while 3.d4 transposes into a Dutch Defence with c4 and Nf3 already played. The " +
      "price is a c8-bishop hemmed in behind the e6-pawn and, in the Stonewall, a hole on e5 " +
      "that no Black pawn can cover.",
  },

  "1.Nf3 f5 2.c4 g6": {
    strategy:
      "Prepares the Leningrad set-up, with the bishop on g7 on the long diagonal, ...Nf6 and " +
      "...O-O, then ...d6 and ...e5 or ...c6. After 3.g3 Bg7 4.Bg2 Nf6 5.O-O O-O Black has " +
      "the Leningrad structure while White still holds the d-pawn back, and 3.d4 heads for a " +
      "Leningrad Dutch. The price is a looser kingside, since the f- and g-pawns have both " +
      "left their starting squares.",
  },

  "1.Nf3 f5 2.c4 Nc6": {
    strategy:
      "Develops with pressure on d4 and e5 and prepares ...e5, but the knight takes c6 from " +
      "the pawn, ruling out a Stonewall with ...c6, and does nothing to control e4. White " +
      "builds comfortably with d4, Nc3 and g3, and a later d4-d5 can drive the knight away.",
  },

  "1.Nf3 f5 2.c4 d6": {
    strategy:
      "Prepares ...e5 and opens the c8-bishop's diagonal and the d7-square for the knight; " +
      "...d6 belongs in both the Classical Dutch and the Leningrad. It develops no piece, " +
      "though, and leaves White to choose between d4 with Nc3 and g3 with Bg2. Black can play " +
      "...d6 later, once ...Nf6 and ...e6 or ...g6 have fixed the set-up.",
  },

  "1.Nf3 f5 2.c4 c6": {
    strategy:
      "Prepares ...d5, backed by the c-pawn, for a Stonewall with ...e6 and ...Nf6. It " +
      "develops no piece and takes c6 from the b8-knight, which then has to go to d7 or a6, " +
      "while White develops freely with d4, Nc3 and g3.",
  },

  "1.Nf3 f5 2.c4 b6": {
    strategy:
      "Prepares ...Bb7, which joins the f-pawn in controlling e4 from the long diagonal. It " +
      "is slow and develops no piece, and White can oppose the bishop with g3 and Bg2 or take " +
      "the centre with d4 and Nc3.",
  },

  "1.Nf3 f5 2.c4 c5": {
    strategy:
      "Controls d4 but develops nothing, and 3.d4 cxd4 4.Nxd4 opens the centre while Black's " +
      "pieces are still at home, the knight on d4 already attacking the f5-pawn. White can " +
      "also simply develop with Nc3 and g3.",
  },

  "1.Nf3 f5 2.c4 d5": {
    strategy:
      "Challenges the centre at once, but 3.cxd5 makes Black spend time regaining the pawn, " +
      "and 3...Qxd5 is met by 4.Nc3 with tempo. Together with ...f5, the move leaves e5 and " +
      "e6 without pawn cover.",
  },

  "1.Nf3 f5 2.c4 Na6": {
    strategy:
      "Puts the knight on the rim, where its only forward squares are b4 and c5, far from e4 " +
      "and d5, the squares Black needs to contest. White builds with d4, Nc3 and g3 while the " +
      "knight needs another move to become active.",
  },

  "1.Nf3 f5 2.c4 Nh6": {
    strategy:
      "A rim knight that guards f5 but stands far from the centre and does nothing for e4 or " +
      "d5. Once White plays d4 or d3, the c1-bishop eyes h6, and Bxh6 gxh6 would leave Black " +
      "with doubled, isolated h-pawns.",
  },

  "1.Nf3 f5 2.c4 a6": {
    strategy:
      "Prepares ...b5 against the c4-pawn but develops nothing and does not help control e4, " +
      "so White takes the centre with d4 and Nc3 at leisure.",
  },

  "1.Nf3 f5 2.c4 a5": {
    strategy:
      "Stops b4 and gains queenside space, but develops nothing and leaves the centre to " +
      "White, who follows with d4 and Nc3.",
  },

  "1.Nf3 f5 2.c4 h6": {
    strategy:
      "A slow move that prepares ...g5 and stops Bg5 once the d-pawn has moved, but develops " +
      "nothing and weakens g6. White continues with d4 and Nc3.",
  },

  "1.Nf3 f5 2.c4 h5": {
    strategy:
      "Gains kingside space but develops nothing, and with the f-pawn already gone from f7 it " +
      "leaves g5 and g6 without pawn cover for good. White meets it with d4 and Nc3 at " +
      "leisure.",
  },

  "1.Nf3 f5 2.c4 f4": {
    strategy:
      "Gains space against e3 and g3, but no piece supports the pawn: 3.d4 opens the " +
      "c1-bishop's diagonal against it, and ...g5 to hold it allows Nxg5. White, ahead in " +
      "development, can also break it up with e3 or g3.",
  },

  "1.Nf3 f5 2.c4 b5": {
    strategy:
      "Gives away a pawn: 3.cxb5 takes it, and with no piece developed Black cannot use the " +
      "opened lines, so White simply stays a pawn up.",
  },

  "1.Nf3 f5 2.c4 Kf7": {
    strategy:
      "Gives up the right to castle for good and develops nothing. On f7 the king is open to " +
      "knight checks from g5 and e5, as in 3.e4 fxe4 4.Ng5+, which drives it on and regains " +
      "the pawn.",
  },

  "1.Nf3 f5 2.c4 e5": {
    strategy:
      "Leaves the pawn unguarded: 3.Nxe5 wins it at once, and ...Qe7 or ...Qf6 afterwards " +
      "gains time against the knight but not the pawn back.",
  },

  "1.Nf3 f5 2.c4 g5": {
    strategy:
      "Loses a pawn at once: 3.Nxg5 takes the unguarded pawn and eyes h7 and e6, while the " +
      "advance has weakened the kingside for nothing.",
  },
};
