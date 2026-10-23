import type { OpeningTexts } from "../book.ts";

// English prose for Nf3-e6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.Nf3 e6 2.c4": {
    name: "English Opening: Agincourt Defence",
    background:
      "The same position arises from 1.c4 e6 2.Nf3, one of White's two usual replies to " +
      "1...e6 in the English Opening. Black intends a supported ...d5, comparable to the " +
      "French Defence, and the game often transposes to other lines, most commonly the " +
      "Queen's Gambit Declined or the Catalan Opening.",
    strategy:
      "Puts a pawn on c4 that presses on d5 while the d-pawn waits. After 2...d5, 3.d4 " +
      "transposes to the Queen's Gambit Declined, 3.g3 with Bg2 leads to the Neo-Catalan, and " +
      "3.b3 to a Réti set-up. Black can also do without ...d5 and play ...Nf6 with ...b6 or " +
      "...Bb4, or strike with ...c5. The pawn occupies no central square yet, so Black keeps " +
      "the choice of structure.",
  },

  "1.Nf3 e6 2.d4": {
    strategy:
      "Takes the centre and opens the c1-bishop. After 2...d5 White chooses 3.c4 for the " +
      "Queen's Gambit Declined, Bf4 for the London System or e3 for a Colle set-up; 2...Nf6 " +
      "3.c4 b6 leads into the Queen's Indian Defence and 2...f5 into the Dutch Defence. Black " +
      "can also challenge the d4-pawn at once with 2...c5.",
  },

  "1.Nf3 e6 2.g3": {
    strategy:
      "Prepares Bg2 and short castling. After 2...d5 3.Bg2 Nf6 4.O-O White can build a King's " +
      "Indian Attack with d3, Nbd2 and e4, or add c4 and d4 for a Catalan. Black takes space " +
      "with ...d5 and ...c5, and the g2-bishop bites on the d5-pawn until White challenges it " +
      "with c4 or e4.",
  },

  "1.Nf3 e6 2.b3": {
    name: "Nimzowitsch–Larsen Attack",
    background:
      "The opening is often reached by transposition, particularly with 1.Nf3 followed by " +
      "2.b3, as here. Aron Nimzowitsch experimented with 1.b3 in the 1920s and 1930s but more " +
      "commonly used the order 1.Nf3 d5 2.b3; Bent Larsen played 1.b3 frequently between 1968 " +
      "and 1972.",
    strategy:
      "Prepares Bb2, which aims along the long diagonal at e5 and f6, while c4, d3 and e3 " +
      "stay in reserve. After 2...d5 3.Bb2 Nf6 4.e3 Be7 White has a solid position and Black " +
      "more central space. Theory rates many such lines as only equal, so the set-up's value " +
      "is practical rather than objective.",
  },

  "1.Nf3 e6 2.e4": {
    strategy:
      "Takes the centre at once and transposes to the Knight Variation of the French Defence. " +
      "After 2...d5, 3.exd5 exd5 4.d4 leads into the Exchange Variation, and 2...c5 3.d4 cxd4 " +
      "4.Nxd4 gives an open Sicilian with ...e6. Sound, but Black chooses which of the two " +
      "defences the game becomes.",
  },

  "1.Nf3 e6 2.e3": {
    strategy:
      "Opens the f1-bishop and prepares d4 in a Colle-style set-up with Bd3, O-O and Nbd2, or " +
      "a queenside fianchetto with b3 and Bb2. Once d4 follows, the e3-pawn shuts in the " +
      "c1-bishop, and since nothing contests d5, Black reaches ...d5 and ...c5 comfortably.",
  },

  "1.Nf3 e6 2.d3": {
    strategy:
      "Opens the c1-bishop and prepares e4, usually with g3, Bg2, O-O and Nbd2 in a King's " +
      "Indian Attack set-up. The structure is solid but modest: Black takes space with ...d5 " +
      "and ...c5, and White's play depends on achieving e4.",
  },

  "1.Nf3 e6 2.c3": {
    strategy:
      "Prepares d4 and opens the d1–a4 diagonal for Qb3 or Qa4, but it develops nothing and " +
      "takes c3 from the queen's knight. Black takes space with ...d5 and ...c5 unchallenged, " +
      "and a later c4 would cost White another tempo.",
  },

  "1.Nf3 e6 2.Nc3": {
    strategy:
      "Develops the queen's knight and watches d5 and e4, but it blocks the c-pawn, so " +
      "English set-ups with c4 are off for now. Black takes the centre with 2...d5, after " +
      "which 3.e4 leads into a French Defence and 3.d4 into a queen's pawn game without c4. " +
      "Black can also attack the knight at once with 2...Bb4.",
  },

  "1.Nf3 e6 2.a3": {
    strategy:
      "A waiting move that prepares b4 but does nothing for the centre or for development. " +
      "White spends a tempo on the wing while Black takes space with ...d5 and develops " +
      "freely.",
  },

  "1.Nf3 e6 2.a4": {
    strategy:
      "Gains queenside space and stops ...b5, but it costs a tempo and does not help White in " +
      "the centre. Black takes space with ...d5 and ...c5 and develops without being " +
      "challenged.",
  },

  "1.Nf3 e6 2.h3": {
    strategy:
      "Takes g4 from a black knight, but the c8-bishop is shut in behind e6 and no piece is " +
      "ready to land on g4, so the tempo is wasted. Black takes the centre with ...d5 and " +
      "...c5 while White still has to develop.",
  },

  "1.Nf3 e6 2.Na3": {
    strategy:
      "Develops the knight to the rim, where it eyes c4 and b5 but does nothing for the " +
      "centre. After 2...Bxa3 3.bxa3 White has the bishop pair and the b-file, yet the " +
      "doubled, isolated a-pawns are a lasting weakness, and 2...d5 simply takes the centre.",
  },

  "1.Nf3 e6 2.Ne5": {
    strategy:
      "Moves the knight a second time to a square where 2...d6 attacks it, and it must " +
      "retreat; after 3.Nc4 even 3...d5 gains another tempo. White has lost time while Black " +
      "builds a pawn centre.",
  },

  "1.Nf3 e6 2.Nd4": {
    strategy:
      "Centralises the knight, but 2...c5 or 2...e5 attacks it at once and it must move " +
      "again, for example back to f3 or to the rim at b3 or b5. Black gains central space " +
      "with tempo.",
  },

  "1.Nf3 e6 2.Ng1": {
    strategy:
      "Retreats the knight to its starting square and undoes the first move. White has lost " +
      "two tempi, and Black, with ...e6 already played, is effectively a move ahead.",
  },

  "1.Nf3 e6 2.b4": {
    strategy:
      "Gambits the b-pawn without enough in return: the f8-bishop, freed by ...e6, takes it " +
      "with 2...Bxb4 and nothing recaptures. c3 and d4 only gain a few tempi against a bishop " +
      "that retreats with ...Be7 or ...Bd6.",
  },

  "1.Nf3 e6 2.g4": {
    strategy:
      "Gains kingside space, but nothing defends the g4-pawn, and the king's pawn cover is " +
      "loosened for good. Black can attack the pawn at once with 2...h5 or simply take the " +
      "centre with ...d5, and the advance has done nothing for White's development.",
  },

  "1.Nf3 e6 2.h4": {
    strategy:
      "A wing-pawn push that develops nothing and gives Black time for ...d5 and ...c5. It " +
      "weakens g4 and the king's side for good, and the idea Ng5 is shut out by ...h6.",
  },

  "1.Nf3 e6 2.Rg1": {
    strategy:
      "The rook can step to g1 only because the knight has left; the move forfeits castling " +
      "kingside for good and develops nothing. Black takes the centre with ...d5 while " +
      "White's king stays in the middle.",
  },

  "1.Nf3 e6 2.Ng5": {
    strategy:
      "Loses the knight: the pawn move ...e6 has opened the diagonal from d8, so 2...Qxg5 " +
      "takes it, and nothing guards g5 because the c1-bishop is blocked by the d2-pawn.",
  },

  "1.Nf3 e6 2.Nh4": {
    strategy:
      "Loses the knight to 2...Qxh4, since ...e6 has opened the d8-h4 diagonal and nothing " +
      "guards h4. White gets nothing in return.",
  },

  "1.Nf3 e6": {
    name: "Zukertort Opening: Queen's Gambit Invitation",
  },

  "1.Nf3 e6 2.c4 Nf6": {
    strategy:
      "Develops the kingside knight and keeps several set-ups open: ...d5 for a Queen's " +
      "Gambit or Catalan structure, ...Bb4 for a Nimzo-Indian or Bogo-Indian once White has " +
      "played d4, ...b6 for a Queen's Indian, or ...c5 for a symmetrical structure. The move " +
      "transposes into Anglo-Indian lines. White chooses between d4, Nc3 and g3, so Black " +
      "needs to know several structures.",
  },

  "1.Nf3 e6 2.c4 d5": {
    strategy:
      "Stakes a claim in the centre at once and heads for a Queen's Gambit type of position. " +
      "After 3.d4 Nf6 4.Nc3 it is a Queen's Gambit Declined, and after 3.g3 Nf6 4.Bg2 a " +
      "Neo-Catalan. The e6-pawn supports d5 solidly, at the price of a c8-bishop shut in " +
      "behind it until ...b6 and ...Bb7, or ...dxc4 and a later ...e5, free it.",
  },

  "1.Nf3 e6 2.c4 c5": {
    strategy:
      "Takes control of d4 at once and heads for a symmetrical English structure with the " +
      "pawn already on e6, so ...d5 stays available. Black develops with ...Nf6 and ...Nc6, " +
      "or with ...b6 and ...Bb7, while White chooses between g3, Nc3 and d4 cxd4 Nxd4, which " +
      "opens the game. Once ...d5 follows, cxd5 exd5 can leave Black with an isolated d-pawn " +
      "or hanging pawns on c5 and d5.",
  },

  "1.Nf3 e6 2.c4 Nc6": {
    strategy:
      "Develops a knight and eyes d4 and e5, but it blocks the c-pawn, so ...c5 is ruled out " +
      "for now. White takes the centre with 3.d4, and after ...d5 and ...Nf6 the game reaches " +
      "a Queen's Gambit Declined structure with the knight in front of the c-pawn. Sound, " +
      "though less flexible than ...Nf6 or ...d5.",
  },

  "1.Nf3 e6 2.c4 Be7": {
    strategy:
      "Develops the dark-squared bishop and clears the way for castling, keeping ...d5 for " +
      "later. It gives up the active ...Bb4 of the Nimzo- and Bogo-Indian set-ups and leaves " +
      "White free to choose d4, e4 or g3. Sound, but slower and less flexible than ...Nf6 or " +
      "...d5.",
  },

  "1.Nf3 e6 2.c4 Bb4": {
    strategy:
      "Develops the bishop with a pin on the d2-pawn, so d4 is impossible until White blocks " +
      "the diagonal or drives the bishop away. 3.a3 or 3.Qb3 puts the question to it at once, " +
      "and after 3.Nc3 Nf6 the game reaches a Nimzo-Indian set-up without d4. Playable, but " +
      "the bishop has no clear target as long as White does not play d4.",
  },

  "1.Nf3 e6 2.c4 b6": {
    strategy:
      "Prepares ...Bb7 on the long diagonal and a Queen's Indian set-up with ...Nf6 and " +
      "...Be7. White can answer with d4, or with e4 and Nc3, and claim central space at once, " +
      "so Black must be ready to hit the centre with ...Bb4 or ...c5. Sound and flexible, but " +
      "a less direct fight for the centre than ...d5 or ...Nf6.",
  },

  "1.Nf3 e6 2.c4 c6": {
    strategy:
      "Prepares ...d5 with a Semi-Slav pawn structure; after d4 and Nc3 Black follows with " +
      "...Nf6 and ...d5. The move is slow and takes c6 from the b8-knight, and White can " +
      "avoid the Semi-Slav with g3 or b3. Sound, but less flexible than ...Nf6 or ...d5 at " +
      "once.",
  },

  "1.Nf3 e6 2.c4 d6": {
    strategy:
      "Builds a compact pawn pair on d6 and e6, behind which ...Nf6, ...Be7, ...O-O and a " +
      "later ...e5 or ...c5 are possible. It does not contest e4, so White is free to build a " +
      "broad centre with d4, Nc3 and e4. Playable and solid, though passive.",
  },

  "1.Nf3 e6 2.c4 f5": {
    strategy:
      "Heads for a Dutch-type set-up with ...Nf6, ...Be7 and ...O-O, or a Stonewall with " +
      "...d5 and ...c6, and takes e4 under control. It loosens the e8–h5 diagonal, the " +
      "Stonewall leaves a hole on e5, and White meets the move with g3, Bg2 and d4. Sound " +
      "enough, but committal and less solid than ...d5.",
  },

  "1.Nf3 e6 2.c4 g6": {
    strategy:
      "Prepares ...Bg7, which presses along the long diagonal, with ...Ne7 or ...Nf6, ...O-O " +
      "and ...d5 or ...c5 to follow. It does nothing for the centre at once, so White can " +
      "build with d4 and Nc3 or e4 first. A flexible but slow set-up, not recommended over " +
      "...Nf6 or ...d5.",
  },

  "1.Nf3 e6 2.c4 Na6": {
    strategy:
      "Places the knight on the rim, where it eyes b4 and c5 but leaves d5 and the centre " +
      "uncontested. White takes space with d4 and Nc3 while Black has lost time.",
  },

  "1.Nf3 e6 2.c4 Qe7": {
    strategy:
      "Brings the queen out early to e7, where it blocks the f8-bishop's only open diagonal, " +
      "so the kingside pieces are slow to develop. White builds the centre with Nc3 and d4 or " +
      "e4 and gains time.",
  },

  "1.Nf3 e6 2.c4 Qf6": {
    strategy:
      "Brings the queen out early and takes f6 from the g8-knight. The attack on b2 is empty, " +
      "since ...Qxb2 loses the queen to Bxb2, and Nc3 followed by e4 and e5 gains time " +
      "against the queen.",
  },

  "1.Nf3 e6 2.c4 Bd6": {
    strategy:
      "Blocks the d7-pawn, so ...d5 is impossible while the bishop stays on d6, and the " +
      "bishop is a target for Nc3-b5 or a later e4-e5. White simply builds the centre with " +
      "d4, Nc3 and e4.",
  },

  "1.Nf3 e6 2.c4 Bc5": {
    strategy:
      "Puts the bishop where d4 attacks it, so White gains central space with a tempo while " +
      "the bishop moves again, usually to b6 or with check to b4.",
  },

  "1.Nf3 e6 2.c4 Nh6": {
    strategy:
      "Puts the knight on the rim. After d4 the c1-bishop attacks it, and Bxh6 gxh6 would " +
      "double the h-pawns, while ...Nf5 can be met by e4 with a gain of time.",
  },

  "1.Nf3 e6 2.c4 Ne7": {
    strategy:
      "Blocks the f8-bishop and passes up the natural ...Nf6. The knight supports ...d5 from " +
      "e7, but the bishop stays shut in until the knight moves again or ...g6 follows, and " +
      "White gains time with d4 and Nc3.",
  },

  "1.Nf3 e6 2.c4 a6": {
    strategy:
      "Spends a tempo on a flank pawn that neither fights for the centre nor develops a " +
      "piece; it prepares ...b5 at best, which c4 already restrains. White continues with d4 " +
      "and Nc3.",
  },

  "1.Nf3 e6 2.c4 a5": {
    strategy:
      "Advances the a-pawn without purpose, weakening b5 and the queenside for a tempo. White " +
      "builds the centre with d4 and Nc3 or e4 undisturbed.",
  },

  "1.Nf3 e6 2.c4 f6": {
    strategy:
      "Takes f6 from the g8-knight, which is left with e7 and h6, and opens the e8–h5 " +
      "diagonal towards the king, with no development in return. White builds a broad centre " +
      "with d4 and Nc3 or e4.",
  },

  "1.Nf3 e6 2.c4 g5": {
    strategy:
      "Loosens the kingside for good and does nothing for the centre or development. The " +
      "queen guards g5, but d4 adds the c1-bishop as a second attacker, so Black must spend " +
      "another tempo on ...h6 or ...g4, and after ...g4 Ne5 the pawn becomes a target.",
  },

  "1.Nf3 e6 2.c4 h6": {
    strategy:
      "Rules out Bg5 and Ng5 in advance, but neither is a threat yet, so the move mainly " +
      "costs a tempo while the centre is still uncontested. White continues with d4 and Nc3 " +
      "or e4 undisturbed.",
  },

  "1.Nf3 e6 2.c4 h5": {
    strategy:
      "Pushes the rook pawn without purpose and loses a tempo; ...h6 is no longer available " +
      "to drive a bishop or knight from g5. White simply builds with d4 and Nc3.",
  },

  "1.Nf3 e6 2.c4 Qg5": {
    strategy: "Places the queen on a square attacked by the f3-knight; Nxg5 wins it outright.",
  },

  "1.Nf3 e6 2.c4 Qh4": {
    strategy: "The f3-knight attacks h4 and nothing defends the queen, so Nxh4 wins it at once.",
  },

  "1.Nf3 e6 2.c4 Ke7": {
    strategy:
      "Gives up castling for good and blocks the f8-bishop and the queen's diagonal, with " +
      "nothing gained. The king stays in the centre, where it becomes a target once White " +
      "opens the position with d4.",
  },

  "1.Nf3 e6 2.c4 Ba3": {
    strategy: "Gives the bishop away: bxa3 or Nxa3 takes it, and Black gets nothing in return.",
  },

  "1.Nf3 e6 2.c4 b5": {
    strategy: "Hangs a pawn: cxb5 takes it, and Black has no real compensation for it.",
  },

  "1.Nf3 e6 2.c4 e5": {
    strategy:
      "Spends a second move on the e-pawn and loses it: nothing defends e5, so Nxe5 wins a " +
      "pawn, and Black has no development to show for it.",
  },

  "1.Nf3 e6 2.g3 d5": {
    strategy:
      "Claims the centre at once and, with ...e6 already played, builds the French-style " +
      "set-up against the King's Indian Attack. After 3.Bg2 Nf6 4.O-O Be7 White chooses " +
      "between d3 with Nbd2 and e4, or c4 and d4 for a Catalan, while Black follows with " +
      "...O-O and ...c5. The c8-bishop stays shut in behind the e6-pawn, the price of the " +
      "solidity.",
  },

  "1.Nf3 e6 2.g3 Nf6": {
    strategy:
      "Develops the knight and reaches the position of 1.Nf3 Nf6 2.g3 e6, with ...d5 and " +
      "...Be7 to follow. White can continue with Bg2 and O-O, then c4 and d4 for a Catalan or " +
      "d3 and e4 for a King's Indian Attack, while Black can also choose ...b6 and ...Bb7 " +
      "instead of ...d5. The knight controls d5 and e4, but no black pawn stands in the " +
      "centre yet.",
  },

  "1.Nf3 e6 2.g3 c5": {
    strategy:
      "Fights for d4 and keeps ...d5, ...Nc6 and ...Nf6 in reserve, reaching the position of " +
      "1.Nf3 c5 2.g3 e6. White can play Bg2, O-O and c4 for an English structure, or open the " +
      "centre with d4, when ...cxd4 and Nxd4 give a Sicilian-style game with ...e6 already " +
      "played. Black has not yet developed a piece.",
  },

  "1.Nf3 e6 2.g3 Nc6": {
    strategy:
      "Develops with pressure on d4 and e5 and keeps ...d5 and ...Nf6 available. The knight " +
      "blocks the c-pawn, so ...c5 is ruled out for now, and White can take space with d4 or " +
      "play Bg2 and O-O. Sound, but the knight is committed before the pawn structure is " +
      "settled.",
  },

  "1.Nf3 e6 2.g3 Be7": {
    strategy:
      "Develops the bishop and, after ...Nf6, clears the way for castling, with ...d5 to " +
      "follow in a solid set-up. It makes no claim on the centre, so after Bg2 and O-O White " +
      "is free to choose between c4 and d4 or d3 and e4. Sound, but less direct than ...d5 or " +
      "...Nf6.",
  },

  "1.Nf3 e6 2.g3 b6": {
    strategy:
      "Prepares ...Bb7, which gives the c8-bishop an open diagonal and contests the long " +
      "diagonal against White's coming Bg2, in Queen's Indian style. No black pawn claims the " +
      "centre yet, so White can take space with c4 and d4 or play Bg2, O-O, d3 and e4. Sound, " +
      "but slower than ...d5 or ...Nf6.",
  },

  "1.Nf3 e6 2.g3 b5": {
    strategy:
      "Gains queenside space and prepares ...Bb7 against the long diagonal. Nothing guards " +
      "the b5-pawn, so a4 attacks it at once, and once the e-pawn has moved, the f1-bishop " +
      "can join in. The move does nothing for the centre, where ...d5 is the more direct " +
      "claim.",
  },

  "1.Nf3 e6 2.g3 c6": {
    strategy:
      "Prepares ...d5 behind a compact chain of pawns on c6, d5 and e6, and takes b5 and d5 " +
      "under control. Once ...d5 is in, the c8-bishop is shut in behind e6, and White can " +
      "play c4 or d4 at once. Sound, but slower than playing ...d5 immediately.",
  },

  "1.Nf3 e6 2.g3 d6": {
    strategy:
      "Prepares a compact set-up with ...Nf6 and ...Be7 or a later ...e5. It concedes central " +
      "space, so White builds with Bg2, O-O, c4 and d4 or with e4, and the c8-bishop has only " +
      "d7 to go to. Sound, though passive.",
  },

  "1.Nf3 e6 2.g3 f5": {
    strategy:
      "Controls e4 and heads for a Dutch set-up with ...Nf6 and ...Be7, followed by ...d6 or " +
      "by ...d5 for a Stonewall. The pawn opens the e8-h5 diagonal, and after ...d5 the " +
      "e5-square becomes a hole for a white knight. White answers with Bg2, O-O and d3 to " +
      "prepare e4, or with c4 and d4.",
  },

  "1.Nf3 e6 2.g3 g6": {
    strategy:
      "Prepares ...Bg7 and a mirrored fianchetto, with ...Ne7 or ...Nf6 and short castling. " +
      "No black pawn claims the centre yet, so White can take space with c4 and d4 or play " +
      "Bg2, O-O, d3 and e4. Sound, though slow.",
  },

  "1.Nf3 e6 2.g3 Na6": {
    strategy:
      "Develops the knight to the edge, where it eyes b4 and c5 but has little influence on " +
      "the centre. White gains time for Bg2, O-O and d4 or c4.",
  },

  "1.Nf3 e6 2.g3 Qe7": {
    strategy:
      "Puts the queen in front of the f8-bishop and blocks its only open diagonal, so Black's " +
      "kingside development waits until the queen moves again. White simply develops with " +
      "Bg2, O-O and d4 or c4.",
  },

  "1.Nf3 e6 2.g3 Qf6": {
    strategy:
      "Brings the queen out early, where it eyes b2, which the c1-bishop guards, and takes f6 " +
      "from the g8-knight. After 3.d4 the bishop can come to g5 and attack the queen with " +
      "tempo, while White completes development with Bg2 and O-O.",
  },

  "1.Nf3 e6 2.g3 Bd6": {
    strategy:
      "Blocks the d-pawn, so ...d5 is impossible until the bishop moves again, and leaves the " +
      "bishop a target for a later e4-e5. White develops with Bg2 and O-O and takes the " +
      "centre with d4 and c4.",
  },

  "1.Nf3 e6 2.g3 Bc5": {
    strategy:
      "Eyes f2, which the king guards, but 3.d4 attacks the bishop, which must move again, to " +
      "b6, d6 or e7 or with check to b4, while White has taken the centre with tempo.",
  },

  "1.Nf3 e6 2.g3 Bb4": {
    strategy:
      "Looks at d2, which is guarded several times, so there is no threat, and 3.c3 drives " +
      "the bishop away with a useful move that also prepares d4.",
  },

  "1.Nf3 e6 2.g3 Nh6": {
    strategy:
      "Aims for f5, but the knight stands on the rim in the meantime, and once the d-pawn has " +
      "moved, Bxh6 gxh6 leaves Black with doubled h-pawns. White gets Bg2, O-O and d4 at " +
      "leisure, and g4 can later drive the knight from f5.",
  },

  "1.Nf3 e6 2.g3 Ne7": {
    strategy:
      "Blocks the f8-bishop, whose natural square is e7, and stakes no claim in the centre. " +
      "White takes space with Bg2, O-O and d4 or c4 while Black's kingside development lags.",
  },

  "1.Nf3 e6 2.g3 a6": {
    strategy:
      "A waiting move that prepares ...b5 but spends a tempo without developing a piece or " +
      "claiming central space. White continues with Bg2, O-O and d4 or c4.",
  },

  "1.Nf3 e6 2.g3 a5": {
    strategy:
      "Controls b4 but takes no part in the centre and weakens b5, which the a-pawn can no " +
      "longer cover. White continues undisturbed with Bg2, O-O and d4 or c4.",
  },

  "1.Nf3 e6 2.g3 f6": {
    strategy:
      "Takes f6 from the g8-knight and loosens the e6-pawn and the e8-h5 diagonal without " +
      "developing a piece. White develops with Bg2, O-O and d4 or e4 and aims at the weakened " +
      "light squares.",
  },

  "1.Nf3 e6 2.g3 g5": {
    strategy:
      "Prepares ...g4 against the f3-knight, but loosens the kingside for good. Only the " +
      "queen guards the pawn, so once the d-pawn has moved, the c1-bishop joins the knight " +
      "against it and Black must spend more time on its defence.",
  },

  "1.Nf3 e6 2.g3 h6": {
    strategy:
      "A prophylactic pawn move that spends a tempo with nothing concrete to prevent, " +
      "develops no piece and claims no central space. White plays Bg2, O-O and d4 at leisure.",
  },

  "1.Nf3 e6 2.g3 h5": {
    strategy:
      "Prepares ...h4 against g3, but spends a tempo on a flank advance that weakens g5 and " +
      "the kingside and develops nothing. White plays Bg2, O-O and d4, or h4 to stop the idea " +
      "for good.",
  },

  "1.Nf3 e6 2.g3 Ke7": {
    strategy:
      "Gives up castling for good and blocks the f8-bishop and the queen's d8-h4 diagonal. " +
      "After d4 the c1-bishop can come to g5 with check or, after ...Nf6, with a pin, while " +
      "the king stays stuck in the centre.",
  },

  "1.Nf3 e6 2.g3 Qg5": {
    strategy:
      "Puts the queen on a square attacked by the f3-knight, which takes it with 3.Nxg5 " +
      "because no Black piece defends g5.",
  },

  "1.Nf3 e6 2.g3 Qh4": {
    strategy:
      "Walks the queen into the attack of both the f3-knight and the g3-pawn, so 3.Nxh4 or " +
      "3.gxh4 wins it for nothing.",
  },

  "1.Nf3 e6 2.g3 Ba3": {
    strategy:
      "The b2-pawn and the b1-knight both attack a3, so 3.bxa3 or 3.Nxa3 wins the bishop " +
      "outright.",
  },

  "1.Nf3 e6 2.g3 e5": {
    strategy:
      "Hangs a pawn: the f3-knight attacks e5 and nothing defends it, so 3.Nxe5 wins it. " +
      "After 3...Qg5, 4.d4 uncovers the c1-bishop against the queen and keeps the knight " +
      "protected.",
  },

  "1.Nf3 e6 2.b3 Nf6": {
    strategy:
      "Develops the knight to its natural square, controls e4 and d5 and commits nothing in " +
      "the centre. After Bb2 Black can build with …d5, …Be7 and …O-O, or choose a " +
      "Queen's-Indian-style fianchetto with …b6 and …Bb7, keeping …c5 in reserve. The price " +
      "is that White may complete the Bb2, e3 and Be2 set-up without being disturbed.",
  },

  "1.Nf3 e6 2.b3 d5": {
    strategy:
      "Claims the centre at once and, with the e6-pawn as support, makes e4 hard for White to " +
      "achieve. After Bb2 Black can develop with …Nf6, …Be7 and …O-O, adding …c5 and …Nc6 to " +
      "contest d4 and e5. The solid pawn pair costs a little: the c8-bishop stays shut in " +
      "behind e6 until …b6 and …Bb7 give it the long diagonal.",
  },

  "1.Nf3 e6 2.b3 c5": {
    strategy:
      "Contests d4 from the flank and keeps the choice between …d5, …Nf6 and a fianchetto " +
      "with …b6 and …Bb7. After Bb2 Black can follow with …Nf6 and …Nc6, reaching a flexible " +
      "structure that can turn into a symmetrical English-style one after c4. White can build " +
      "with e3 and Be2 or fight for the centre with c4 and Nc3.",
  },

  "1.Nf3 e6 2.b3 f5": {
    strategy:
      "Takes e4 under control and heads for a Dutch set-up with …Nf6, …Be7 and …O-O, followed " +
      "by …d6 or by …d5 and …c6 for a Stonewall. The pawn loosens the e8–h5 diagonal, and " +
      "once …d5 is played, e5 becomes a hole that Bb2 and a knight on e5 can use. White " +
      "continues with Bb2 and e3, or plays c4 and d4.",
  },

  "1.Nf3 e6 2.b3 Nc6": {
    strategy:
      "Develops a piece and eyes d4 and e5, but the knight blocks the c-pawn, so …c5 is ruled " +
      "out for now. Once Bb2 is played, …e5 would leave the pawn attacked twice and defended " +
      "only once, so Black needs …d6 first or turns to …d5 and …Nf6. Sound, though less " +
      "flexible than …Nf6 or …d5.",
  },

  "1.Nf3 e6 2.b3 Be7": {
    strategy:
      "Develops the bishop and, after …Nf6, clears the way for castling, keeping …d5 and …c5 " +
      "for later. After 3.Bb2 the g7-pawn is attacked and no longer guarded by the bishop, so " +
      "…Nf6 or …Bf6 has to follow at once. Sound, but less direct than …Nf6 or …d5.",
  },

  "1.Nf3 e6 2.b3 Bb4": {
    strategy:
      "Pins the d2-pawn, so d3 and d4 are impossible until White drives the bishop away with " +
      "a3 or c3 or blocks the diagonal. After 3.Bb2 the g7-pawn is attacked and no longer " +
      "guarded by the bishop, so …Nf6 or …f6 is needed. Playable, but the bishop has no clear " +
      "target and may have to move again.",
  },

  "1.Nf3 e6 2.b3 b6": {
    strategy:
      "Prepares …Bb7 to oppose Bb2 on the long diagonal, with …Nf6, …Be7 and …O-O in Queen's " +
      "Indian style and …c5 or …d5 later. The structure is solid but somewhat passive, since " +
      "Black mostly reacts to White's plan and has little quick counterplay.",
  },

  "1.Nf3 e6 2.b3 c6": {
    strategy:
      "Prepares …d5 with a Semi-Slav-style chain of pawns on c6, d5 and e6. The move is slow, " +
      "takes c6 from the b8-knight and leaves the c8-bishop shut in once …d5 is played, so " +
      "White gets time for Bb2, e3 and a later c4. Sound, though …d5 at once is more direct.",
  },

  "1.Nf3 e6 2.b3 d6": {
    strategy:
      "Builds a compact pawn pair on d6 and e6 that keeps e5 under control against the coming " +
      "Bb2, with …Nf6, …Be7 and …O-O to follow. It concedes central space, and the c8-bishop " +
      "has only d7 to go to until …b6 follows, so White develops with Bb2, e3 and c4 or d4 at " +
      "leisure. Sound, though passive.",
  },

  "1.Nf3 e6 2.b3 g6": {
    strategy:
      "Prepares …Bg7 against the coming Bb2, but after 3.Bb2 the h8-rook is attacked along " +
      "the long diagonal and …Bg7 loses the bishop to Bxg7, so Black first has to block with " +
      "…Nf6 or …f6. With pawns on e6 and g6, the dark squares f6 and h6 also grow weak once " +
      "the dark-squared bishops are exchanged. Sound, but clumsier than …Nf6 or …d5.",
  },

  "1.Nf3 e6 2.b3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but controls neither d4 nor e5. " +
      "Once e3 opens the f1-bishop's diagonal, Bxa6 bxa6 would double Black's a-pawns, and " +
      "White develops with Bb2 and c4 undisturbed.",
  },

  "1.Nf3 e6 2.b3 Qe7": {
    strategy:
      "Puts the queen in front of the f8-bishop and blocks its only open diagonal, so Black's " +
      "kingside development waits. 3.Ba3 attacks the queen along the a3–f8 diagonal at once " +
      "and forces …d6, …c5 or another queen move.",
  },

  "1.Nf3 e6 2.b3 Qf6": {
    strategy:
      "Attacks the undefended a1-rook along the open long diagonal and rules out Bb2 for the " +
      "moment, because Qxb2 would win the bishop. After Nc3 or d4 the threat is parried, and " +
      "the queen is exposed to Ne4 and to the pawn advance e4–e5 while Black's development " +
      "lags.",
  },

  "1.Nf3 e6 2.b3 Bd6": {
    strategy:
      "Blocks the d7-pawn, so …d5 is impossible while the bishop stays on d6, and the bishop " +
      "becomes a target for a later e4–e5. White develops with Bb2 and e3 and takes space in " +
      "the centre with c4 or d4.",
  },

  "1.Nf3 e6 2.b3 Bc5": {
    strategy:
      "Puts the bishop where 3.d4 attacks it, so White gains central space with tempo while " +
      "the bishop moves again, to b6, d6 or e7 or with check to b4.",
  },

  "1.Nf3 e6 2.b3 Nh6": {
    strategy:
      "Puts the knight on the rim, aiming at f5 and g4 but doing nothing for the centre. Once " +
      "the d-pawn moves, Bxh6 gxh6 would double Black's h-pawns, and White develops with Bb2 " +
      "and e3 or d4 at leisure.",
  },

  "1.Nf3 e6 2.b3 Ne7": {
    strategy:
      "Blocks the f8-bishop, whose natural square is e7, and passes up …Nf6, the knight's " +
      "best square. The bishop stays shut in until the knight moves again or …g6 follows, and " +
      "White develops with Bb2 and e3 and takes space with c4 or d4.",
  },

  "1.Nf3 e6 2.b3 a6": {
    strategy:
      "A waiting move that neither develops a piece nor contests the centre; it prepares …b5 " +
      "at best. White continues with Bb2 and e3 and takes the lead in development.",
  },

  "1.Nf3 e6 2.b3 a5": {
    strategy:
      "Prepares …a4 against the b3-pawn, but spends a tempo on the flank while the centre is " +
      "uncontested. White continues with Bb2 and e3 undisturbed.",
  },

  "1.Nf3 e6 2.b3 b5": {
    strategy:
      "Advances a flank pawn without developing a piece, and nothing guards it on b5. Once " +
      "the e-pawn moves, the f1-bishop attacks it, and Black must spend another tempo on …a6 " +
      "or …c6 to hold it.",
  },

  "1.Nf3 e6 2.b3 f6": {
    strategy:
      "Takes f6 from the g8-knight, which is left with e7 and h6, and opens the e8–h5 " +
      "diagonal towards the king without developing a piece. White simply plays Bb2 and e3 or " +
      "d4 and claims the centre.",
  },

  "1.Nf3 e6 2.b3 h6": {
    strategy:
      "Rules out Ng5 and a later Bg5 in advance, but neither is a threat, so the move only " +
      "costs a tempo while the centre stays uncontested. White develops with Bb2, e3 and c4 " +
      "or d4 undisturbed.",
  },

  "1.Nf3 e6 2.b3 h5": {
    strategy:
      "Pushes the rook pawn without a purpose: it develops nothing, leaves the centre to " +
      "White and loosens the kingside, where …h6 is no longer available to drive a piece from " +
      "g5. White continues with Bb2 and e3 at leisure.",
  },

  "1.Nf3 e6 2.b3 Qg5": {
    strategy: "Hangs the queen at once: the f3-knight attacks g5, and Nxg5 wins it for nothing.",
  },

  "1.Nf3 e6 2.b3 Qh4": {
    strategy: "Hangs the queen at once: the f3-knight attacks h4, and Nxh4 wins it for nothing.",
  },

  "1.Nf3 e6 2.b3 Ke7": {
    strategy:
      "Gives up castling for good and blocks the f8-bishop and the queen's d8–h4 diagonal. " +
      "3.Ba3+ checks at once along the open a3–f8 diagonal, and Black must answer with …d6, " +
      "which is then pinned, or another king move, since …c5 loses a pawn to Bxc5+.",
  },

  "1.Nf3 e6 2.b3 Ba3": {
    strategy: "Hangs the bishop: nothing defends a3, and Bxa3 or Nxa3 wins it for nothing.",
  },

  "1.Nf3 e6 2.b3 g5": {
    strategy:
      "Loosens the kingside and opens the long diagonal to the h8-rook. 3.Bb2 attacks the " +
      "rook, and every answer costs something: …Bg7 drops the bishop to Bxg7, …Nf6 cuts the " +
      "queen off from g5 so Nxg5 wins a pawn, and …f6 leaves the kingside full of holes.",
  },

  "1.Nf3 e6 2.b3 e5": {
    strategy:
      "Spends a second move on the e-pawn and hangs it: the f3-knight attacks e5 and nothing " +
      "defends it, so Nxe5 wins a pawn. After 3…Qf6 4.d4 the knight stays protected and the " +
      "long diagonal to the a1-rook is closed.",
  },
};
