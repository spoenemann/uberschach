import type { OpeningTexts } from "../book.ts";

// English prose for b3-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.b3 d5 2.Bb2": {
    strategy:
      "Places the bishop on the long diagonal against e5 and g7, so that ...e5 needs " +
      "preparation, usually with ...Nc6. White follows with e3, Nf3 and Be2 or Bb5, or " +
      "challenges d5 with e3 and c4; against ...c5 and ...Nc6 the usual set-up is a reversed " +
      "Nimzo-Indian. Black must watch the h8 corner, since ...g6 before ...Nf6 allows Bxh8. " +
      "The price is that the centre stays with Black for the moment.",
  },

  "1.b3 d5 2.Nf3": {
    strategy:
      "Develops the knight to cover e5 and d4, so that together with Bb2 it makes ...e5 hard " +
      "to achieve; the position is that of 1.Nf3 d5 2.b3. Typical continuations are Bb2, e3 " +
      "and Be2 or Bb5, with c4 as a later lever against d5. White leaves the centre to Black " +
      "for now, and many lines are rated only equal by theory.",
  },

  "1.b3 d5 2.e3": {
    strategy:
      "Opens the f1 bishop and prepares Bb2, Nf3 and Be2 or Bb5, with c4 as a later lever " +
      "against d5; the game usually transposes into the Bb2 lines. If Black answers 2...e5 at " +
      "once, Bb2 follows and Bb5 pins a knight on c6 that guards the pawn. The move is " +
      "flexible and sound, but it lets Black choose the pawn structure first.",
  },

  "1.b3 d5 2.c4": {
    strategy:
      "Attacks d5 at once, aiming for an English-style set-up with Bb2 behind it. After " +
      "2...dxc4 3.bxc4 White has the half-open b-file and an extra centre pawn but an " +
      "isolated a-pawn, while 2...d4 gains space for Black. Playable, but Black chooses the " +
      "structure before White has developed a piece.",
  },

  "1.b3 d5 2.d3": {
    strategy:
      "Prepares e4 with Nd2, Ngf3 or g3 and Bg2 for a reversed Old Indian set-up. It is " +
      "flexible and sound, yet passive: Black takes the centre with ...e5 and ...Nf6 and " +
      "meets e4 on equal terms.",
  },

  "1.b3 d5 2.d4": {
    strategy:
      "Takes the centre and transposes into a Queen's Pawn Game in which b3 is already " +
      "played, followed by Bb2, Nf3 and c4 or e3. Sound but slow: nothing is done against d5, " +
      "so Black completes development with ...Nf6, ...Bf5 and ...e6 or ...c5 at ease.",
  },

  "1.b3 d5 2.g3": {
    strategy:
      "Prepares Bg2, so that one bishop bears down on d5 and the other, from b2, on the long " +
      "dark diagonal. Black develops freely with ...Nf6, ...c5 and ...Nc6 or takes space with " +
      "...e5, and White must find the moment for c4 or d3 and e4. Playable, but it leaves the " +
      "centre undisputed.",
  },

  "1.b3 d5 2.f4": {
    strategy:
      "Takes control of e5 and prepares Nf3, e3 and Bb2 for a Bird-style set-up. It weakens " +
      "the e1-h4 diagonal and the e3 square and commits the f-pawn before Black has shown a " +
      "set-up; sound, but it gives up the flexibility of the other moves.",
  },

  "1.b3 d5 2.Ba3": {
    name: "Nimzowitsch–Larsen Attack: Graz Attack",
    strategy:
      "Aims the bishop at e7 and f8, so that ...e6 allows Bxf8 and forces ...Kxf8, which " +
      "costs Black the right to castle. The bishop gives up the long diagonal and has little " +
      "else to hit, and Black can answer with ...Nf6 and ...g6 or ...Bf5, while 2...c5 would " +
      "drop a pawn to Bxc5.",
  },

  "1.b3 d5 2.Nc3": {
    strategy:
      "Develops the knight onto c3, on the long diagonal that b3 prepared for the bishop, and " +
      "2...d4 attacks it at once, gains space and forces it to move again, for instance to e4 " +
      "or b1. White loses a tempo, and a later Bb2 bites on the pawn on d4.",
  },

  "1.b3 d5 2.c3": {
    strategy:
      "Blocks the long diagonal that b3 prepared for the bishop, since a bishop on b2 would " +
      "now face its own pawn on c3. Black develops freely with ...Nf6, ...e5 or ...Bf5, and " +
      "White has spent a tempo undoing the point of b3.",
  },

  "1.b3 d5 2.Na3": {
    strategy:
      "Puts the knight on the rim, where it eyes b5, while c4 is covered by the d5 pawn. It " +
      "does nothing for the centre, ...c6 also takes b5 away, and Black builds the centre " +
      "with ...e5 and ...Nf6.",
  },

  "1.b3 d5 2.Nh3": {
    strategy:
      "Heads for f4 or g5, but 2...Bxh3 forces 3.gxh3, since the f1 bishop is blocked by g2, " +
      "and leaves White with doubled, isolated h-pawns. Even without the exchange the knight " +
      "stands badly on the rim.",
  },

  "1.b3 d5 2.b4": {
    strategy:
      "Pushes the same pawn a second time, reaching the position after 1.b4 d5 with Black to " +
      "move, a full tempo down. On b4 the pawn can be hit by ...a5, ...Qd6 or the f8 bishop " +
      "once the e-pawn has moved, and it needs a3 or c3 to hold it.",
  },

  "1.b3 d5 2.f3": {
    strategy:
      "Prepares e4 but takes f3 from the g1 knight and weakens the e1-h4 diagonal. Black " +
      "answers with ...e5 or ...Nf6 and White has spent a tempo without developing a piece.",
  },

  "1.b3 d5 2.a3": {
    strategy:
      "A waiting move that neither develops a piece nor contests the centre; it only takes b4 " +
      "from Black's pieces. Black sets up with ...e5 or ...Nf6 at leisure.",
  },

  "1.b3 d5 2.a4": {
    strategy:
      "Pushes a flank pawn that neither develops a piece nor contests the centre. It controls " +
      "b5 but leaves b4 weak, and Black plays ...e5 or ...Nf6 at leisure.",
  },

  "1.b3 d5 2.h3": {
    strategy:
      "Takes g4 from the c8 bishop but spends a tempo on a prophylactic move before any piece " +
      "is developed, handing Black the centre with ...e5 or ...Nf6.",
  },

  "1.b3 d5 2.h4": {
    strategy:
      "Gains space on the kingside and prepares h5, but does nothing for the centre or " +
      "development and weakens the squares g3 and g4. Black simply develops with ...Nf6 and " +
      "...Bf5.",
  },

  "1.b3 d5 2.e4": {
    strategy:
      "Puts a pawn on e4 where d5 attacks it and nothing defends it, so 2...dxe4 simply wins " +
      "it. Bb2 hits g7 only until ...Nf6 closes the diagonal, and Black keeps the extra pawn " +
      "with ...Bf5 or ...f5.",
  },

  "1.b3 d5 2.g4": {
    strategy:
      "Loses a pawn to 2...Bxg4: ...d5 has opened the c8-h3 diagonal and nothing protects g4. " +
      "White gets no compensation and has also weakened the kingside.",
  },

  "1.b3 d5": {
    name: "Nimzowitsch–Larsen Attack: Classical Variation",
    background:
      "Aron Nimzowitsch more often reached this kind of position through 1.Nf3 d5 2.b3, a " +
      "move order that rules out ...e5. After 1.b3 itself, 1...d5 is Black's second most " +
      "common reply, in about 27 percent of games.",
  },

  "1.b3 d5 2.Bb2 Nf6": {
    strategy:
      "Develops the knight to its natural square, guards d5, covers e4 and blocks the long " +
      "diagonal on f6, so …g6 and …Bg7 become possible without losing the h8-rook. Black " +
      "keeps …c5, …e6, …Bf5 and …Bg4 available and picks a set-up after White's next move, " +
      "usually Nf3 or e3. Nothing is conceded, and c4 remains White's main lever against d5.",
  },

  "1.b3 d5 2.Bb2 c5": {
    background:
      "The Nimzo-Indian Defence is a popular defence to 1.d4; after 3.e3 Nc6 4.Nf3 Nf6 5.Bb5 " +
      "White has it with colours reversed and an extra tempo. Aron Nimzowitsch reached that " +
      "position against Rudolf Spielmann at New York 1927, by the move order 1.Nf3 d5 2.b3 c5 " +
      "3.Bb2 Nc6 4.e3 Nf6 5.Bb5, and won in 55 moves.",
    strategy:
      "Strikes at d4 before White can occupy it and prepares …Nc6 and …Nf6 behind a broad " +
      "pawn front on c5 and d5. After 3.e3 Nc6 4.Nf3 Nf6 White often pins the knight with " +
      "5.Bb5 and fights for e5 and d4. The cost is that d5 lacks pawn support until …e6, and " +
      "White can give up the bishop on c6 to plant a knight on e5.",
  },

  "1.b3 d5 2.Bb2 Bf5": {
    background:
      "Baadur Jobava beat Yu Yangyi from this position at the Tata Steel Challengers 2014 in " +
      "Wijk aan Zee, answering with 3.e3 e6 4.h3 h6 5.Nc3 Bh7 6.d4 and castling queenside on " +
      "move 9.",
    strategy:
      "Develops the light-squared bishop outside the pawn chain before …e6 shuts it in, " +
      "aiming for a reversed London set-up with …e6, …Nf6 and …c6. The bishop covers e4, so " +
      "White often prepares that advance with d3, Nd2, g3 and Bg2, or plays Nf3 and later Nh4 " +
      "to question the bishop; …h6 keeps a retreat open on h7. Black develops easily, but the " +
      "bishop can become a target.",
  },

  "1.b3 d5 2.Bb2 Bg4": {
    background:
      "Raymond Keene, later the author of the book Nimzowitsch/Larsen Attack (1977), had the " +
      "position after 3.Nf3 as White against Vlatko Kovačević at Amsterdam 1973, reached " +
      "there by 1.Nf3 d5 2.b3 Bg4 3.Bb2, and won after 3…Nd7 4.g3 Bxf3 5.exf3.",
    strategy:
      "Develops the bishop outside the pawn chain and pins the e2-pawn to the queen, so 3.e3 " +
      "would lose the queen to …Bxd1. White's usual answers are Nf3, h3, f3 or g3 with Bg2. " +
      "Black follows with …Nd7, …Ngf6 and …e6 or …c6, ready to take a knight on f3 when the " +
      "exchange damages White's pawns or removes a guard of e5.",
  },

  "1.b3 d5 2.Bb2 e6": {
    strategy:
      "Supports d5 and opens the f8-bishop for …Nf6, …Be7 and …O-O, with …c5 to follow. " +
      "Sound, but it shuts in the c8-bishop before …Bf5 or …Bg4 is possible, which is why " +
      "Black usually develops that bishop first, while White builds freely with Nf3, e3 and " +
      "c4.",
  },

  "1.b3 d5 2.Bb2 Nc6": {
    strategy:
      "Develops with pressure on d4 and e5 and prepares …e5. After 3.e3 e5 4.Bb5 the game " +
      "transposes to the line 1.b3 e5 2.Bb2 Nc6 3.e3 d5 4.Bb5, but 3.Nf3 rules out …e5 for " +
      "now, since Nxe5 Nxe5 Bxe5 wins a pawn. Sound, but the knight blocks the c-pawn and " +
      "lets White decide the set-up.",
  },

  "1.b3 d5 2.Bb2 c6": {
    strategy:
      "Supports d5 with a Slav-style pawn and keeps the c8-bishop free for …Bf5 or …Bg4 " +
      "before …e6. Sound but passive: the pawn controls neither d4 nor e5, takes c6 from the " +
      "b8-knight, and a later …c5 costs a second move, so White builds freely with c4, Nf3 " +
      "and e3.",
  },

  "1.b3 d5 2.Bb2 b6": {
    strategy:
      "Mirrors White's set-up by preparing …Bb7, but on the other long diagonal, where the " +
      "bishop looks at its own d5-pawn. It does little until …c5 and …d4 or an exchange opens " +
      "that diagonal, while White builds with Nf3, e3 and c4. Sound but unambitious.",
  },

  "1.b3 d5 2.Bb2 Nd7": {
    strategy:
      "Guards e5 and so prepares …e5, with …Ngf6 still available. But it shuts in the " +
      "c8-bishop and cuts the queen's guard of d5, and after 3.Nf3 an immediate …e5 still " +
      "loses a pawn to Nxe5 and Bxe5. Playable but passive.",
  },

  "1.b3 d5 2.Bb2 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but does nothing for d4 or e5, " +
      "which it would cover from c6. White continues Nf3, e3 and c4 without opposition.",
  },

  "1.b3 d5 2.Bb2 Bd7": {
    strategy:
      "Develops the bishop to a passive square where it cuts the queen's guard of d5 and " +
      "blocks the b8-knight's route to d7. Nothing is attacked, so White plays e3 and c4 " +
      "against a d5-pawn that needs …c6 or …e6 to hold.",
  },

  "1.b3 d5 2.Bb2 Be6": {
    strategy:
      "Blocks the e7-pawn, so neither …e6 nor …e5 can be played until the bishop moves again, " +
      "and the bishop does less on e6 than on f5 or g4. White continues Nf3, e3 and c4 " +
      "without obstruction.",
  },

  "1.b3 d5 2.Bb2 Qd7": {
    strategy:
      "Brings the queen out early, where it blocks the c8-bishop and the b8-knight's route to " +
      "d7. Nothing is attacked, so White gains time with e3 and Nf3 while the queen stands in " +
      "the way.",
  },

  "1.b3 d5 2.Bb2 Qd6": {
    strategy:
      "Brings the queen out early onto the a3–f8 diagonal, where 3.Ba3 attacks it at once, " +
      "and Nc3 with Nb5 can hit it again later. No minor piece is developed, and the queen " +
      "takes d6 from the f8-bishop.",
  },

  "1.b3 d5 2.Bb2 Nh6": {
    strategy:
      "Puts the g8-knight on the rim on its way to f5, instead of on f6, where it would cover " +
      "e4 and block the long diagonal. White's Nf3, e3 and c4 face no resistance.",
  },

  "1.b3 d5 2.Bb2 a6": {
    strategy:
      "Spends a tempo on a flank pawn without developing a piece or touching the centre; its " +
      "point is …b5, and meanwhile White takes space freely with Nf3, e3 and c4.",
  },

  "1.b3 d5 2.Bb2 a5": {
    strategy:
      "Gains queenside space with the idea …a4 against the b3-pawn, but develops nothing, and " +
      "the a-pawn no longer covers b6. White plays Nf3, e3 and c4 unopposed.",
  },

  "1.b3 d5 2.Bb2 b5": {
    strategy:
      "Advances a flank pawn without developing a piece, and the pawn on b5 has no defender: " +
      "3.e3 already threatens Bxb5+, and a4 can strike at it as well.",
  },

  "1.b3 d5 2.Bb2 f6": {
    strategy:
      "Prepares …e5 and blocks the long diagonal, but takes f6 from the g8-knight and weakens " +
      "e6 and the e8–h5 diagonal without developing a piece. White continues Nf3, e3 and c4 " +
      "or d4.",
  },

  "1.b3 d5 2.Bb2 f5": {
    strategy:
      "Commits at once to a Stonewall-style pawn formation that leaves e5 as a lasting hole " +
      "for Bb2 and a knight, and the f5-pawn shuts the c8-bishop out of f5, g4 and h3. The " +
      "e8–h5 diagonal is opened as well.",
  },

  "1.b3 d5 2.Bb2 h6": {
    strategy:
      "Spends a tempo on a prophylactic pawn move that prevents nothing White threatens, " +
      "while White continues e3, Nf3 and c4 and claims the centre.",
  },

  "1.b3 d5 2.Bb2 h5": {
    strategy:
      "Starts a flank advance without developing a piece. The h-pawn weakens g5 and g6 and " +
      "commits to an attack with no pieces behind it, leaving the centre to White.",
  },

  "1.b3 d5 2.Bb2 d4": {
    strategy:
      "Grabs space and blocks the long diagonal, but the pawn is guarded only by the queen " +
      "while Bb2 already attacks it. 3.Nf3 or 3.e3 adds pressure, so Black must spend more " +
      "moves on …c5 or …Nc6 to hold it, and the pawn no longer covers c4 and e4.",
  },

  "1.b3 d5 2.Bb2 Bh3": {
    strategy:
      "Loses the bishop at once to 3.gxh3 or 3.Nxh3, because no black piece can recapture on " +
      "h3.",
  },

  "1.b3 d5 2.Bb2 Kd7": {
    strategy:
      "Forfeits castling for no reason and puts the king on d7, where it cuts the queen's " +
      "guard of d5 and blocks the c8-bishop. The king stays exposed in the centre, and the " +
      "h8-rook is out of play.",
  },

  "1.b3 d5 2.Bb2 e5": {
    strategy:
      "Hangs the e-pawn, because nothing guards e5 and 3.Bxe5 wins it. After 3…Nc6 the bishop " +
      "simply retreats to b2, so the tempo gained is not enough and White keeps the extra " +
      "pawn.",
  },

  "1.b3 d5 2.Bb2 g6": {
    strategy:
      "Opens the long diagonal to h8, so 3.Bxh8 wins the rook outright and nothing of Black's " +
      "can recapture. The fianchetto only works once …Nf6 has blocked the diagonal.",
  },

  "1.b3 d5 2.Bb2 g5": {
    strategy:
      "Opens the long diagonal to h8, so 3.Bxh8 wins the rook for nothing, since nothing of " +
      "Black's can recapture. The kingside is loosened for no gain.",
  },

  "1.b3 d5 2.e3 Nf6": {
    strategy:
      "Develops the knight to its natural square, covers e4 and keeps every set-up open: …e6 " +
      "with …c5, …Bf5 with …e6, or …c5 and …Nc6 at once. After 3.Bb2 typical continuations " +
      "are …e6, …Be7 and …O-O or …c5 and …Nc6, and with Nf3 and Bb5 from White the second " +
      "path reaches the reversed Nimzo-Indian. Nothing is conceded, and the knight shields g7 " +
      "and h8 from the bishop on b2.",
  },

  "1.b3 d5 2.e3 c5": {
    strategy:
      "Controls d4 from the flank and lets Black follow with …Nc6 and …Nf6, fighting for the " +
      "centre before White occupies it. After 3.Bb2 Nc6 4.Nf3 Nf6 5.Bb5 the set-up is a " +
      "reversed Nimzo-Indian, with the c6-knight pinned. The c5-pawn stands on the a3–f8 " +
      "diagonal, where Ba3 can attack it, so Black usually adds …e6, which brings the " +
      "f8-bishop behind it and supports d5.",
  },

  "1.b3 d5 2.e3 e5": {
    strategy:
      "Builds the classical d5–e5 pawn centre that White's set-up aims to undermine. 3.Bb2 " +
      "attacks the e5-pawn at once, so …Nc6 usually follows, reaching the main line 1.b3 e5 " +
      "2.Bb2 Nc6 3.e3 d5 by transposition. Bb5 then pins the knight and f4 hits e5 again, so " +
      "Black must keep the pawn firmly defended, with …Bd6 and …Qe7 or …f6.",
  },

  "1.b3 d5 2.e3 Bf5": {
    strategy:
      "Develops the light-squared bishop outside the pawn chain before …e6 shuts it in, " +
      "aiming for a reversed London set-up with …e6, …Nf6 and …c6. White can offer the " +
      "exchange with Bd3, chase the bishop with Ne2-g3 or with h3 and g4, or prepare e4 with " +
      "d3 and Nd2. Black's development is easy, but the bishop can become a target.",
  },

  "1.b3 d5 2.e3 e6": {
    strategy:
      "Supports d5 and opens the f8-bishop for …Nf6, …Be7 and …O-O, usually transposing to " +
      "lines of 2…Nf6 with …e6. Sound, but it shuts in the c8-bishop before …Bf5 is possible, " +
      "giving up one of the main set-ups for no gain, while White builds with Bb2, Nf3 and c4 " +
      "or d4.",
  },

  "1.b3 d5 2.e3 Nc6": {
    strategy:
      "Develops with pressure on d4 and e5 and prepares …e5, which after 3.Bb2 e5 reaches the " +
      "main line of 1.b3 e5 by transposition. The knight blocks the c-pawn, so the …c5 and " +
      "…c6 set-ups are gone, and Bb5 can pin it at once. Sound, but less flexible than …Nf6.",
  },

  "1.b3 d5 2.e3 c6": {
    strategy:
      "Supports d5 with a Slav-style pawn and keeps the c8-bishop free to reach f5 before " +
      "…e6. It fights for neither d4 nor e5, so White develops easily with Bb2, Nf3 and Bd3 " +
      "or Be2 and may choose c4 or d4 later. Sound but reactive, and the pawn takes c6 from " +
      "the b8-knight.",
  },

  "1.b3 d5 2.e3 b6": {
    strategy:
      "Mirrors White's set-up by preparing …Bb7, with …e6, …Nf6 and …Be7 to follow. The " +
      "bishop on b7 looks at its own d5-pawn, so it does little until …c5 and …d4 or an " +
      "exchange on d5 opens the diagonal. Sound but unambitious, and White develops freely " +
      "with Bb2 and Nf3.",
  },

  "1.b3 d5 2.e3 g6": {
    strategy:
      "Prepares …Bg7, but 3.Bb2 attacks the h8-rook at once, and …Bg7 would then lose the " +
      "bishop to Bxg7, since nothing recaptures on g7. Black must first block with …Nf6, when " +
      "Bxf6 exf6 doubles the f-pawns, or with …f6, which takes the knight's best square and " +
      "weakens e6. Playable, but the long diagonal gives White the initiative.",
  },

  "1.b3 d5 2.e3 f5": {
    strategy:
      "Stakes out e4 in the manner of the Dutch Defence but leaves a hole on e5, on the " +
      "diagonal of a bishop on b2, and weakens e6 and the e8–h5 diagonal, so Qh5+ is already " +
      "possible. A Stonewall with …e6 and …Nf6 also shuts in the c8-bishop.",
  },

  "1.b3 d5 2.e3 Nd7": {
    strategy:
      "Supports …e5 and …c5 but shuts in the c8-bishop, and on d7 the knight can be pinned to " +
      "the king by Bb5. White develops with Bb2 and Nf3 while Black still has to free the " +
      "bishop.",
  },

  "1.b3 d5 2.e3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but does nothing for the centre. " +
      "Bxa6 bxa6 saddles Black with doubled a-pawns, and the knight would stand better on c6 " +
      "or d7.",
  },

  "1.b3 d5 2.e3 Bd7": {
    strategy:
      "Puts the bishop on a passive square, where it does nothing for the centre and takes d7 " +
      "from the b8-knight. The bishop has no target there, and White develops freely with Bb2 " +
      "and Nf3.",
  },

  "1.b3 d5 2.e3 Be6": {
    strategy:
      "Puts the bishop in front of the e7-pawn, so the f8-bishop stays shut in until the " +
      "e6-bishop moves again or …g6 follows. The bishop does less on e6 than on f5, and " +
      "Nf3-g5 can hit it with tempo.",
  },

  "1.b3 d5 2.e3 Qd7": {
    strategy:
      "Puts the queen on d7, where it shuts in the c8-bishop and takes d7 from the b8-knight. " +
      "White develops with Bb2 and Nf3 and can gain time with Ne5 against the queen.",
  },

  "1.b3 d5 2.e3 Qd6": {
    strategy:
      "Takes the queen out early onto the a3–f8 diagonal, where Ba3 attacks it at once, so it " +
      "must move again or be shielded by …c5. No minor piece is developed, and the queen " +
      "keeps losing time while White builds up with Nf3 and Be2.",
  },

  "1.b3 d5 2.e3 Nh6": {
    strategy:
      "Puts the knight on the rim on its way to f5, instead of on f6, where it would control " +
      "e4 and d5. On h6 it controls no central square, and White develops with Bb2 and Nf3.",
  },

  "1.b3 d5 2.e3 a6": {
    strategy:
      "Spends a tempo on a flank pawn without developing a piece or touching the centre. It " +
      "takes b5 from the f1-bishop and prepares …b5, but White simply develops with Bb2 and " +
      "Nf3.",
  },

  "1.b3 d5 2.e3 a5": {
    strategy:
      "Gains space on the queenside and prepares …a4 against the b3-pawn, but develops " +
      "nothing and does not touch the centre. White continues with Bb2 and Nf3, or stops the " +
      "pawn with a4.",
  },

  "1.b3 d5 2.e3 f6": {
    strategy:
      "Prepares …e5 but takes f6 from the g8-knight and weakens e6 and the e8–h5 diagonal, " +
      "without developing a piece. White develops with Bb2 and Nf3, while the g8-knight is " +
      "left with h6 or, after …e5, e7.",
  },

  "1.b3 d5 2.e3 h6": {
    strategy:
      "Spends a tempo on a prophylactic pawn move against a knight jump to g5 that nobody " +
      "threatens, while White continues Bb2 and Nf3 and Black's development has not started.",
  },

  "1.b3 d5 2.e3 h5": {
    strategy:
      "Starts a flank advance without developing a piece; the pawn guards g4 for a later …Bg4 " +
      "but weakens g5. White meets it with Bb2 and Nf3 while Black has no pieces behind the " +
      "advance.",
  },

  "1.b3 d5 2.e3 d4": {
    strategy:
      "Grabs space, but 3.exd4 Qxd4 4.Bb2 attacks the queen at once, so White develops with " +
      "tempo and Black has opened the centre for nothing.",
  },

  "1.b3 d5 2.e3 Bg4": {
    strategy:
      "Hangs the bishop to Qxg4. The e-pawn has left e2, so the queen sees g4, and nothing of " +
      "Black's defends the bishop; Black gets no compensation for the piece.",
  },

  "1.b3 d5 2.e3 Bh3": {
    strategy:
      "Loses the bishop for nothing to gxh3 or Nxh3, since nothing of Black's can recapture " +
      "on h3.",
  },

  "1.b3 d5 2.e3 Kd7": {
    strategy:
      "Forfeits castling and walks the king onto the d-file, where Bb5+ gives check at once. " +
      "The king stays in the centre and the h8-rook is shut in.",
  },

  "1.b3 d5 2.e3 b5": {
    strategy:
      "Hangs the pawn, because nothing defends b5 and Bxb5+ wins it with check. After …c6 or " +
      "…Bd7 White is a clean pawn up with the better development.",
  },

  "1.b3 d5 2.e3 g5": {
    strategy:
      "Opens the long diagonal to the h8-rook, which 3.Bb2 attacks at once. Blocking with …f6 " +
      "allows Qh5+ and costs the right to castle, and blocking with …Nf6 allows Bxf6 exf6, " +
      "with doubled f-pawns beside the loose g5-pawn.",
  },
};
