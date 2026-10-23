import type { OpeningTexts } from "../book.ts";

// English prose for Nf3-f5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.Nf3 f5 2.d4": {
    strategy:
      "Takes the centre and transposes to the Dutch Defence with the knight already on f3, where " +
      "it covers e5 and supports the d-pawn. Black keeps the claim on e4 and plays for an attack " +
      "on White's kingside, at the price of a loosened kingside of his own. The game is " +
      "unbalanced, with chances for both sides.",
  },

  "1.Nf3 f5 2.g3": {
    strategy:
      "Prepares Bg2 and castling while the centre pawns stay flexible: White does not yet commit " +
      "to d4 or c4. The bishop looks at e4 and d5 once the knight moves. The game stays quiet " +
      "and solid, at the price of leaving Black's f5 claim on e4 unchallenged for now.",
  },

  "1.Nf3 f5 2.c4": {
    name: "English Opening: Anglo-Dutch Defence",
    strategy:
      "Controls d5 and prepares Nc3 and a g3 fianchetto, a flexible set-up that can still switch " +
      "to d4 later. If Black builds a wall of pawns on f5, e6 and d5, the c4-pawn presses on d5 " +
      "at once. The centre is not occupied, so Black has time to set up as he likes.",
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
      "Offers the e-pawn to open lines against Black's loosened kingside. After 2...fxe4 3.Ng5 " +
      "the knight attacks the pawn on e4 again and is hard to chase away, so White plays for " +
      "quick development and the initiative. The price is a pawn and two moves with the same " +
      "piece.",
  },

  "1.Nf3 f5 2.b3": {
    name: "Nimzowitsch–Larsen Attack: Dutch Variation",
    strategy:
      "Prepares Bb2 to eye the long diagonal towards g7 and keeps White's set-up flexible. It is " +
      "sound but slower than more direct moves, and Black builds the usual Dutch structure " +
      "without being challenged.",
  },

  "1.Nf3 f5 2.d3": {
    strategy:
      "Prepares e4 a move later than the 2.e4 gambit, so that the d-pawn can recapture if Black " +
      "takes there, and frees the c1-bishop. It is sound but slow, and Black can build the usual " +
      "Dutch structure undisturbed.",
  },

  "1.Nf3 f5 2.e3": {
    strategy:
      "Opens the f1-bishop and supports a later d4, a solid set-up against the Dutch. It is " +
      "sound but passive: the e3-pawn closes the c1-bishop's kingside diagonal, so that bishop " +
      "usually needs b3 and Bb2, and Black develops freely.",
  },

  "1.Nf3 f5 2.Nc3": {
    strategy:
      "Develops the second knight and watches e4 and d5, keeping both d4 and e4 possible without " +
      "committing a pawn. It is sound, but it blocks the c-pawn, and the plain 2.d4 reaches the " +
      "same ideas with more choice.",
  },

  "1.Nf3 f5 2.a3": {
    strategy:
      "A waiting move that prepares b4 but does nothing about the centre or development. Black " +
      "develops freely while White has spent a tempo on a rook-pawn move.",
  },

  "1.Nf3 f5 2.a4": {
    strategy:
      "A slow rook-pawn move that neither develops a piece nor fights for the centre. It weakens " +
      "b4 and gives Black time to develop with a free hand.",
  },

  "1.Nf3 f5 2.b4": {
    strategy:
      "Grabs queenside space and prepares Bb2 on the long diagonal, but the b4-pawn needs " +
      "defending against ...e6 and ...Bxb4, and the centre is left to Black. Little is gained " +
      "for the tempo and the queenside is stretched.",
  },

  "1.Nf3 f5 2.c3": {
    strategy:
      "A slow preparation for d4 that takes c3 from the b1-knight and does nothing to contest " +
      "e4. Black simply develops and keeps e4 under control.",
  },

  "1.Nf3 f5 2.h3": {
    strategy:
      "Prepares g4 to undermine the f5-pawn, but the plan costs time and loosens the kingside " +
      "where White's king usually castles. Black simply develops.",
  },

  "1.Nf3 f5 2.h4": {
    strategy:
      "Spends a tempo on a flank pawn that does nothing for the centre or development. It " +
      "weakens g4 and the kingside, and Black develops at leisure.",
  },

  "1.Nf3 f5 2.Na3": {
    strategy:
      "A rim knight that eyes c4 or b5 but covers nothing in the centre and shuts in the a-pawn. " +
      "Black develops naturally.",
  },

  "1.Nf3 f5 2.Rg1": {
    strategy:
      "Prepares g4 against the f5-pawn, but White gives up the right to castle kingside and " +
      "spends a tempo on the rook instead of developing. Black simply develops.",
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
      "Retreats the knight to its start square and so undoes the first move. Black has ...f5 for " +
      "free and builds the centre at once against an undeveloped position.",
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
      "Develops the knight to its natural square, where it watches e4 and h5, and commits to no " +
      "pawn set-up yet. Black keeps every Dutch structure open and decides later how to guard " +
      "f5. The cost is that f5 stays unguarded for now, so a knight jump to h4 has to be kept in " +
      "mind.",
  },

  "1.Nf3 f5 2.g3 e6": {
    strategy:
      "Guards f5 with a pawn and frees the f8-bishop, so castling comes quickly. Black gets a " +
      "solid, flexible Dutch set-up that keeps the grip on e4. The price is the c8-bishop, which " +
      "stays shut in behind the e6-pawn and needs time to find a role.",
  },

  "1.Nf3 f5 2.g3 g6": {
    strategy:
      "Guards f5 and h5 and prepares ...Bg7 on the long diagonal, a fianchetto that fits the " +
      "Dutch and brings quick castling. The cost is the dark squares: with the f- and g-pawns " +
      "advanced, e6 loses its pawn cover once ...d6 is played.",
  },

  "1.Nf3 f5 2.g3 d5": {
    strategy:
      "Claims e4 and c4 and opens the c8-bishop so that it guards f5, heading for a Stonewall " +
      "set-up. The centre is fixed before the pieces are out, and a later ...e6 shuts that " +
      "bishop in again.",
  },

  "1.Nf3 f5 2.g3 d6": {
    strategy:
      "Opens the c8-bishop to guard f5 and keeps ...e5 or a fianchetto available. It is flexible " +
      "but slow: no piece is developed, so White can build the centre while Black is still " +
      "choosing a set-up.",
  },

  "1.Nf3 f5 2.g3 c5": {
    strategy:
      "Claims d4 and queenside space for a Sicilian-style set-up. It does nothing for the " +
      "f5-pawn, which still needs a guard against Nh4, and it develops no piece.",
  },

  "1.Nf3 f5 2.g3 c6": {
    strategy:
      "Prepares ...d5 with the c-pawn behind it, the usual Stonewall formation. It develops " +
      "nothing and leaves f5 unguarded, so 3.Nh4 already calls for an answer.",
  },

  "1.Nf3 f5 2.g3 Nc6": {
    strategy:
      "Develops a piece at once and eyes d4 and e5. The knight takes the square of the c-pawn, " +
      "so the Stonewall set-up with ...c6 is gone, and f5 stays unguarded.",
  },

  "1.Nf3 f5 2.g3 b6": {
    strategy:
      "Prepares ...Bb7, which opposes White's coming Bg2 on the long diagonal and adds a guard " +
      "to e4. It develops no piece yet and leaves f5 unguarded against Nh4.",
  },

  "1.Nf3 f5 2.g3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but stands far from the centre and " +
      "blocks the a-pawn. It costs a tempo for little, and f5 stays unguarded.",
  },

  "1.Nf3 f5 2.g3 Nh6": {
    strategy:
      "Heads for f7 by way of the rim, a slow route for a knight that could reach f6 in one " +
      "move. Once the c1-bishop is free, Bxh6 gxh6 would leave Black with doubled, isolated " +
      "h-pawns, so the knight soon needs another move.",
  },

  "1.Nf3 f5 2.g3 a6": {
    strategy:
      "A tempo spent on a flank move with no role yet, at best preparing ...b5. It does not " +
      "guard f5, so 3.Nh4 already calls for an answer.",
  },

  "1.Nf3 f5 2.g3 a5": {
    strategy:
      "Stops b4 and gains space for ...a4, but it weakens b5 and develops nothing. The f5-pawn " +
      "also stays unguarded against Nh4.",
  },

  "1.Nf3 f5 2.g3 b5": {
    strategy:
      "Overextends the queenside before a single piece is out. The pawn no longer guards a6 and " +
      "c6 and can be challenged by a4, and f5 stays unguarded.",
  },

  "1.Nf3 f5 2.g3 h6": {
    strategy:
      "Takes g5 away from White's pieces, but it is slow, develops nothing and leaves f5 " +
      "unguarded against Nh4.",
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
      "The king needs further moves to reach safety.",
  },

  "1.Nf3 f5 2.g3 e5": {
    strategy:
      "Puts a second pawn forward, but nothing guards e5, so 3.Nxe5 simply wins it and Black has " +
      "nothing to show for it.",
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
      "The natural developing move: the knight joins the f-pawn in controlling e4 and also " +
      "watches d5, while Black commits to no pawn structure yet. That flexibility is the " +
      "strength, and the cost is that White decides whether the game stays a quiet English or " +
      "grows into a Dutch Defence.",
  },

  "1.Nf3 f5 2.c4 e6": {
    strategy:
      "Frees the f8-bishop and builds a solid, compact set-up in front of the king. The price is " +
      "a c8-bishop hemmed in behind the e6-pawn and, once ...d5 is played, an e5 square that no " +
      "Black pawn can cover. Black trades some activity for safety and a closed game.",
  },

  "1.Nf3 f5 2.c4 g6": {
    strategy:
      "Prepares to fianchetto the kingside bishop on the long diagonal, where it eyes White's " +
      "centre and queenside. The price is a looser kingside, since the f- and g-pawns have both " +
      "left their starting squares, and the king must be tucked away with care.",
  },

  "1.Nf3 f5 2.c4 Nc6": {
    strategy:
      "Develops with pressure on d4 and e5 and prepares ...e5, but the knight takes c6 from the " +
      "c-pawn, so a Stonewall with ...c6 is gone, and it does nothing to control e4. A later " +
      "d4-d5 can drive it away.",
  },

  "1.Nf3 f5 2.c4 d6": {
    strategy:
      "Prepares ...e5 and opens the c8-bishop's diagonal and the d7-square for the knight, but " +
      "develops no piece and commits the pawn before Black knows which set-up to choose. It can " +
      "wait until the knight and the e- or g-pawn have fixed the plan.",
  },

  "1.Nf3 f5 2.c4 c6": {
    strategy:
      "Prepares ...d5, backed by the c-pawn, for a Stonewall set-up. It develops no piece and " +
      "takes c6 from the b8-knight, which then has to go to d7 or a6, while White develops " +
      "freely.",
  },

  "1.Nf3 f5 2.c4 b6": {
    strategy:
      "Prepares ...Bb7, which joins the f-pawn in controlling e4 from the long diagonal. It is " +
      "slow and develops no piece, and White can oppose the bishop on the same diagonal or take " +
      "the centre.",
  },

  "1.Nf3 f5 2.c4 c5": {
    strategy:
      "Controls d4 but develops nothing, and 3.d4 cxd4 4.Nxd4 opens the centre while Black's " +
      "pieces are still at home, the knight on d4 already attacking the f5-pawn. White can also " +
      "simply develop.",
  },

  "1.Nf3 f5 2.c4 d5": {
    strategy:
      "Challenges the centre at once, but 3.cxd5 makes Black spend time regaining the pawn, " +
      "and 3...Qxd5 is met by 4.Nc3 with tempo. Together with ...f5, the move leaves e5 and " +
      "e6 without pawn cover.",
  },

  "1.Nf3 f5 2.c4 Na6": {
    strategy:
      "Puts the knight on the rim, where its only forward squares are b4 and c5, far from e4 and " +
      "d5, the squares Black needs to contest. It needs another move to become active.",
  },

  "1.Nf3 f5 2.c4 Nh6": {
    strategy:
      "A rim knight that guards f5 but stands far from the centre and does nothing for e4 or d5. " +
      "Once White opens the c1-bishop's diagonal, the bishop eyes h6, and Bxh6 gxh6 would leave " +
      "Black with doubled, isolated h-pawns.",
  },

  "1.Nf3 f5 2.c4 a6": {
    strategy:
      "Prepares ...b5 against the c4-pawn but develops nothing and does not help control e4, so " +
      "White can take the centre at leisure.",
  },

  "1.Nf3 f5 2.c4 a5": {
    strategy:
      "Stops b4 and gains queenside space, but develops nothing and leaves the centre to White.",
  },

  "1.Nf3 f5 2.c4 h6": {
    strategy:
      "A slow move that prepares ...g5 and stops Bg5 once the d-pawn has moved, but develops " +
      "nothing and weakens g6.",
  },

  "1.Nf3 f5 2.c4 h5": {
    strategy:
      "Gains kingside space but develops nothing, and with the f-pawn already gone from f7 it " +
      "leaves g5 and g6 without pawn cover for good.",
  },

  "1.Nf3 f5 2.c4 f4": {
    strategy:
      "Gains space against e3 and g3, but no piece supports the pawn: 3.d4 opens the c1-bishop's " +
      "diagonal against it, and ...g5 to hold it allows Nxg5. White, ahead in development, can " +
      "also break it up with a pawn move.",
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
      "Leaves the pawn unguarded: 3.Nxe5 wins it at once, and a queen move afterwards gains time " +
      "against the knight but not the pawn back.",
  },

  "1.Nf3 f5 2.c4 g5": {
    strategy:
      "Loses a pawn at once: 3.Nxg5 takes the unguarded pawn and eyes h7 and e6, while the " +
      "advance has weakened the kingside for nothing.",
  },
};
