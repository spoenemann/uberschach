import type { OpeningTexts } from "../book.ts";

// English prose for Nf3-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.Nf3 d5 2.c4": {
    name: "Réti Opening",
    background:
      "According to Réti, the opening entered master play early in 1923, and Hans Kmoch " +
      "called the system of attack Réti used against Rubinstein at Karlovy Vary 1923 the Réti " +
      "Opening or Réti System. In modern usage the name refers only to Nf3 and c4 by White " +
      "against ...d5, with at least one bishop fianchettoed and no early d4.",
    strategy:
      "Challenges d5 from the flank before White commits a centre pawn, so the centre stays " +
      "flexible and the bishops can be developed along the long diagonals. The cost is that " +
      "Black may hold, take or advance past d5 and so decides how open the game becomes; White " +
      "gets pressure on the centre from a distance instead of occupying it.",
  },

  "1.Nf3 d5 2.d4": {
    strategy:
      "Claims the centre at once and turns the game into a Queen's Pawn opening with the knight " +
      "already developed. White keeps every plan open, from a quiet set-up to a fight for space, " +
      "but gives up the independent character of 1.Nf3 and lets Black pick a standard defence. " +
      "The move is entirely sound.",
  },

  "1.Nf3 d5 2.g3": {
    name: "King's Indian Attack",
    background:
      "Its grandmaster use began as an offshoot of the widespread King's Indian Defence of " +
      "the 1950s. Prominent players of it include Bobby Fischer (mostly early in his career), " +
      "Mikhail Botvinnik, Vasily Smyslov and Tigran Petrosian; today it is relatively " +
      "uncommon at grandmaster level but popular at club level.",
    strategy:
      "Prepares to fianchetto the kingside bishop and castle, for a compact system that is easy " +
      "to repeat against most set-ups. White leaves the centre to Black at first and builds it " +
      "up later, aiming for e4 and the space and attacking chances that come with it.",
  },

  "1.Nf3 d5 2.b3": {
    name: "Nimzowitsch–Larsen Attack",
    background:
      "Aron Nimzowitsch experimented with 1.b3 in the 1920s and 1930s but more commonly used " +
      "the move order 1.Nf3 d5 2.b3. Bent Larsen played 1.b3 frequently from 1968 to 1972, " +
      "and Bobby Fischer played it five times in 1970.",
    strategy:
      "Prepares to fianchetto the queen's bishop, which together with the knight on f3 bears " +
      "down on e5 and keeps Black from simply occupying it. White leaves the centre to Black for " +
      "now.",
  },

  "1.Nf3 d5 2.e3": {
    strategy:
      "Opens the diagonal of the f1 bishop and aims for a solid, slow set-up in the centre. It " +
      "shuts in the c1 bishop and commits White to that plan, so Black develops freely.",
  },

  "1.Nf3 d5 2.d3": {
    name: "Zukertort Opening: Old Indian Attack",
    strategy:
      "Prepares e4 for a reversed Old Indian set-up. It is flexible and sound, yet passive: " +
      "Black takes the centre and can meet e4 on equal terms.",
  },

  "1.Nf3 d5 2.c3": {
    strategy:
      "Prepares d4 for a solid pawn structure, or e4 later. The pawn takes c3 from the b1 " +
      "knight, which has to develop via d2, while Black develops freely.",
  },

  "1.Nf3 d5 2.Nc3": {
    name: "Zukertort Opening: Reversed Mexican Defence",
    strategy:
      "Develops a piece and prepares e4, but blocks the c-pawn, so the set-ups with c4 are no " +
      "longer available. Black can gain space with ...d4 or simply develop and reach a " +
      "comfortable position.",
  },

  "1.Nf3 d5 2.e4": {
    strategy:
      "Offers the e-pawn for quick piece play: after 2...dxe4 the knight can hit e4 and f7, and " +
      "White hopes to win the pawn back or to attack f7. Black can return the pawn or keep it " +
      "and stands better either way, although an unprepared defender can fall into tactical " +
      "traps.",
  },

  "1.Nf3 d5 2.a3": {
    strategy:
      "Prepares b4 and takes b4 from a bishop, but spends a tempo on a rim pawn while Black " +
      "takes the centre.",
  },

  "1.Nf3 d5 2.a4": {
    name: "Zukertort Opening: The Potato",
    strategy:
      "Gains queenside space and stops ...b5, yet prepares nothing and weakens b4. Black " +
      "develops and builds the centre without difficulty.",
  },

  "1.Nf3 d5 2.b4": {
    name: "Santasiere's Folly",
    background:
      "Named after the American master Anthony Santasiere (1904–1977), who originated and " +
      "developed it and wrote a book about it, The Futuristic Chess Opening: Santasiere's " +
      "Folly (Chess Digest, Dallas 1973).",
    strategy:
      "Gains queenside space with Bb2 in mind, but the b4-pawn has no pawn support and becomes a " +
      "target. White spends time on the flank while Black develops freely.",
  },

  "1.Nf3 d5 2.h3": {
    strategy:
      "Takes g4 from Black's bishop before ...Bg4 is any threat, and spends a tempo that Black " +
      "uses to claim the centre.",
  },

  "1.Nf3 d5 2.h4": {
    strategy:
      "Gains kingside space but does nothing for the centre or development, and loosens the " +
      "kingside where White's king would castle. Black develops freely.",
  },

  "1.Nf3 d5 2.Na3": {
    strategy:
      "Develops the knight to the rim, from where it eyes b5 and c4, but it stands badly and " +
      "blocks the a-pawn. Black takes the centre.",
  },

  "1.Nf3 d5 2.Rg1": {
    name: "Zukertort Opening: Ampel Variation",
    strategy:
      "Forfeits kingside castling to support a later g4, with nothing else ready to back the " +
      "advance. White can only castle long or leave the king in the centre.",
  },

  "1.Nf3 d5 2.Ng5": {
    strategy:
      "Moves the knight a second time to hit f7 and h7, which the king and the rook defend. " +
      "After 2...h6 it has to go back to f3 or h3, and Black has gained a tempo.",
  },

  "1.Nf3 d5 2.Nh4": {
    strategy:
      "Puts the knight on the rim with no defender, where a pawn move by Black opens the queen's " +
      "diagonal to h4. White must spend another tempo retreating it or covering it with g3.",
  },

  "1.Nf3 d5 2.Ne5": {
    strategy:
      "Moves the knight a second time to e5, where no pawn supports it. Black can offer a trade " +
      "or drive it away with ...f6, gaining time, while White has developed nothing else.",
  },

  "1.Nf3 d5 2.Nd4": {
    strategy:
      "Centralises the knight with a second move, but a Black pawn move hits it at once and it " +
      "must move again. Black builds a broad centre with gain of time.",
  },

  "1.Nf3 d5 2.Ng1": {
    strategy:
      "Returns the knight to its starting square and undoes the first move. White has made no " +
      "progress, and Black has the extra tempo of d5 in hand.",
  },

  "1.Nf3 d5 2.g4": {
    strategy:
      "Loses a pawn at once: nothing defends g4, so 2...Bxg4 takes it, and White has only a " +
      "half-open g-file to show for the weakened kingside.",
  },

  "1.Nf3 d5": {
    background:
      "The usual reply in the 1920s, when Richard Réti began many of his games with 1.Nf3; " +
      "against it he played 2.c4, the move order now named after him.",
  },

  "1.Nf3 d5 2.c4 e6": {
    name: "English Opening: Agincourt Defence",
    background:
      "The same position arises from 1.c4 e6 2.Nf3 d5, the Agincourt Defence of the English " +
      "Opening, in which 1...e6 prepares a supported ...d5, comparable to the French Defence. " +
      "In the Réti move order, 2...e6 and 2...c6 both transpose to the English Opening.",
    strategy:
      "Defends d5 with a pawn and opens the f8-bishop, aiming for a solid set-up with pawns on " +
      "d5 and e6. The cost is the c8-bishop, shut in behind e6 until a later pawn move gives it " +
      "play. The game is solid, and White decides whether to fight for the centre or to " +
      "fianchetto.",
  },

  "1.Nf3 d5 2.c4 c6": {
    strategy:
      "Holds d5 with the c-pawn and, unlike ...e6, keeps the c8-bishop free to develop outside " +
      "the pawn chain. The cost is that the pawn takes c6 from the b8-knight, which usually has " +
      "to go to d7. A solid game follows, in which Black gives up little.",
  },

  "1.Nf3 d5 2.c4 d4": {
    name: "Réti Opening: Advance Variation",
    background:
      "Together with 2...dxc4, one of the two main independent lines of the Réti Opening. It " +
      "keeps the game closed, and the structure resembles a Benoni Defence with the colours " +
      "reversed: as Black does in the Benoni, White usually fianchettoes the kingside bishop.",
    strategy:
      "Gains space and keeps the position closed: the pawn takes c3 and e3 from White, so 3.Nc3 " +
      "would lose a knight to ...dxc3. The cost is that an advanced pawn needs support and " +
      "becomes a target once White attacks it with the f3-knight and a pawn on e3. Expect a " +
      "closed, manoeuvring game.",
  },

  "1.Nf3 d5 2.c4 dxc4": {
    name: "Réti Opening: Réti Accepted",
    background:
      "Together with 2...d4, one of the two main independent lines of the Réti Opening, the " +
      "one that opens the game. The many ways White has to regain the pawn limit its " +
      "popularity.",
    strategy:
      "Takes the pawn at once and leaves White to choose how to win it back, and there are many " +
      "good ways. Black is behind in development, so cannot hope to hold the extra pawn: " +
      "3...b5?! is dubious because of 4.a4. Black must finish developing quickly and give the " +
      "pawn back when needed, and the game opens up.",
  },

  "1.Nf3 d5 2.c4 Nf6": {
    strategy:
      "Develops the knight and adds a defender to d5, but after 3.cxd5 Nxd5 White has the " +
      "central pawn majority and can gain time against the knight. Black still keeps a choice of " +
      "solid set-ups.",
  },

  "1.Nf3 d5 2.c4 Nc6": {
    strategy:
      "Develops with pressure on d4 and e5 but gives d5 no support: 3.cxd5 Qxd5 4.Nc3 wins a " +
      "tempo against the queen. Playable, but White gets the easier development. The knight also " +
      "takes c6 from the c-pawn, so Black can no longer defend d5 with that pawn.",
  },

  "1.Nf3 d5 2.c4 c5": {
    strategy:
      "Fights for d4 but leaves d5 to 3.cxd5. Recapturing with the queen lets 4.Nc3 gain a " +
      "tempo, so Black does better to recapture with the knight, and then White gains central " +
      "space against it. Playable, but White is the one with the initiative.",
  },

  "1.Nf3 d5 2.c4 g6": {
    strategy:
      "Prepares ...Bg7 but leaves d5 to the queen alone. After 3.cxd5 the recapture 3...Qxd5 " +
      "runs into 4.Nc3 with a gain of time, while recapturing with the knight lets White gain " +
      "the centre against it. Playable, but slower than the main replies.",
  },

  "1.Nf3 d5 2.c4 b5": {
    name: "Réti Opening: Zilbermints Gambit",
    strategy:
      "Offers the b-pawn so that 3.cxb5 pulls the c-pawn away from the centre, hoping for " +
      "open lines and quick development. White is simply a pawn up after 3.cxb5, and 3.cxd5 " +
      "Qxd5 4.Nc3 also leaves the b5-pawn loose.",
  },

  "1.Nf3 d5 2.c4 e5": {
    strategy:
      "Offers the e-pawn for open lines, but 3.Nxe5 simply takes it, and Black has only some " +
      "activity to show for the pawn.",
  },

  "1.Nf3 d5 2.c4 Na6": {
    strategy:
      "A rim knight that eyes b4 and c5 but does nothing for d5; after 3.cxd5 Qxd5 4.Nc3 " +
      "White develops with a tempo against the queen.",
  },

  "1.Nf3 d5 2.c4 Be6": {
    strategy:
      "Guards d5 a second time but blocks the e-pawn and leaves b7 undefended. After 3.cxd5 " +
      "Bxd5 4.Nc3 the bishop comes under attack again, and White develops with a gain of " +
      "time.",
  },

  "1.Nf3 d5 2.c4 Bf5": {
    strategy:
      "Develops outside the pawn chain and eyes b1, but leaves both b7 and d5 short of " +
      "defenders: 3.Qb3 attacks b7 with cxd5 to follow, and Black struggles to keep both " +
      "pawns.",
  },

  "1.Nf3 d5 2.c4 Bg4": {
    strategy:
      "Develops the bishop against the f3-knight, but with only the e2-pawn behind it the " +
      "knight is not pinned, and b7 is left undefended. 3.cxd5 Bxf3 4.exf3 Qxd5 5.Nc3 drives " +
      "the queen away with tempo and leaves White the bishop pair, and 3.Qb3 hits b7 at once.",
  },

  "1.Nf3 d5 2.c4 Qd7": {
    strategy:
      "Blocks the c8-bishop, takes d7 from the b8-knight and loses time, since 3.cxd5 Qxd5 " +
      "4.Nc3 attacks the queen again.",
  },

  "1.Nf3 d5 2.c4 Qd6": {
    strategy:
      "Brings the queen out early and develops nothing; after 3.cxd5 Qxd5 4.Nc3 it is " +
      "attacked again and White develops with tempo.",
  },

  "1.Nf3 d5 2.c4 Nh6": {
    strategy:
      "A rim knight that can reach f5 but does not support d5; 3.cxd5 Qxd5 4.Nc3 then gains a " +
      "tempo against the queen.",
  },

  "1.Nf3 d5 2.c4 a6": {
    strategy:
      "A slow move that does nothing for d5 or development; 3.cxd5 Qxd5 4.Nc3 wins a tempo and " +
      "White takes the centre.",
  },

  "1.Nf3 d5 2.c4 a5": {
    strategy:
      "Stops b4 but does nothing about d5 or development; 3.cxd5 Qxd5 4.Nc3 gains a tempo and " +
      "White takes the centre.",
  },

  "1.Nf3 d5 2.c4 b6": {
    strategy:
      "Prepares ...Bb7 but leaves d5 to 3.cxd5 Qxd5 4.Nc3, which attacks the queen with a " +
      "gain of time and gives White a free hand in the centre.",
  },

  "1.Nf3 d5 2.c4 f6": {
    strategy:
      "Takes f6 from the knight, weakens the e8-h5 diagonal and e6, and does nothing for d5; " +
      "3.cxd5 Qxd5 4.Nc3 gains time.",
  },

  "1.Nf3 d5 2.c4 f5": {
    strategy:
      "Stakes out e4 with the f-pawn but weakens the e8-h5 diagonal and e6 and does nothing for " +
      "d5; 3.cxd5 Qxd5 4.Nc3 gains a tempo.",
  },

  "1.Nf3 d5 2.c4 h6": {
    strategy:
      "A slow pawn move that does not defend d5 or develop anything; 3.cxd5 Qxd5 4.Nc3 gains " +
      "a tempo.",
  },

  "1.Nf3 d5 2.c4 h5": {
    strategy:
      "Wastes a move and weakens g5 and g6 while d5 is left to 3.cxd5 Qxd5 4.Nc3, which gains " +
      "a tempo.",
  },

  "1.Nf3 d5 2.c4 Nd7": {
    strategy:
      "Blocks the queen's defence of d5 and shuts in the c8-bishop, so 3.cxd5 wins a pawn that " +
      "no black piece can retake at once. White can hold it while Black regroups.",
  },

  "1.Nf3 d5 2.c4 Bd7": {
    strategy:
      "Blocks the queen's defence of d5 and takes d7 from the b8-knight, so 3.cxd5 wins a pawn " +
      "that no black piece can retake at once. The bishop on d7 is passive, and even after Black " +
      "develops the knight, White holds the pawn.",
  },

  "1.Nf3 d5 2.c4 Bh3": {
    strategy:
      "The bishop is attacked by the g2-pawn and has no support, so 3.gxh3 wins a piece for " +
      "nothing.",
  },

  "1.Nf3 d5 2.c4 Kd7": {
    strategy:
      "Gives up castling and blocks the queen's defence of d5, so 3.cxd5 wins a pawn that no " +
      "black piece can retake at once. The king stays in the centre with nothing in return.",
  },

  "1.Nf3 d5 2.c4 g5": {
    strategy:
      "Loses a pawn at once: 3.Nxg5 wins it, as nothing defends g5, and h7 and f7 come under " +
      "fire, while Black has weakened the kingside for nothing.",
  },

  "1.Nf3 d5 2.g3 Nf6": {
    strategy:
      "Develops the knight to its natural square and controls e4, where White would like to put " +
      "a pawn. Black commits to nothing: a solid pawn centre, an early bishop sortie or a " +
      "mirrored fianchetto all stay possible. The cost is that White's slow set-up is not yet " +
      "challenged.",
  },

  "1.Nf3 d5 2.g3 c5": {
    name: "King's Indian Attack: Sicilian Variation",
    strategy:
      "Claims queenside space and eyes d4, aiming for a King's Indian set-up with the colours " +
      "reversed. Black fights for the centre at once, but no pawn backs d5, so White can strike " +
      "with c4 against it or d4 against c5. The game turns on whether Black's centre holds.",
  },

  "1.Nf3 d5 2.g3 c6": {
    strategy:
      "Supports d5 with a pawn and keeps the c8-bishop free to leave the pawn chain before …e6 " +
      "would shut it in. The pawn takes c6 from the b8-knight, which therefore develops via d7. " +
      "Black gets a sturdy but slightly passive centre against White's slow build-up.",
  },

  "1.Nf3 d5 2.g3 Bg4": {
    name: "King's Indian Attack: Keres Variation",
    strategy:
      "Develops the c8-bishop outside the pawn chain before …e6 can lock it in. It has little to " +
      "bite on, though: the f3-knight is backed by the e2-pawn, and h3 or Ne5 soon asks the " +
      "bishop to decide whether to take the knight and give White the bishop pair.",
  },

  "1.Nf3 d5 2.g3 Nc6": {
    strategy:
      "Develops a piece at once and prepares …e5. The knight blocks the c-pawn, though, so d5 " +
      "has no support from …c6 and White can pressure it with c4 or take space with d4. Sound " +
      "enough, but it commits the knight before the structure is clear.",
  },

  "1.Nf3 d5 2.g3 Bf5": {
    strategy:
      "Develops the bishop outside the pawn chain before …e6, so it is not shut in behind its " +
      "own pawns. Played this early it allows 3.Nh4, which hits the bishop; after …Bg6 Nxg6 hxg6 " +
      "Black has doubled g-pawns and has given up the bishop pair. Playable, but not free.",
  },

  "1.Nf3 d5 2.g3 e6": {
    strategy:
      "Supports d5 and frees the f8-bishop, but shuts the c8-bishop in before it has left. White " +
      "builds slowly with the fianchetto, castling and a later e4, and the c8-bishop has to find " +
      "a role on b7 or d7. Sound, but passive.",
  },

  "1.Nf3 d5 2.g3 g6": {
    name: "King's Indian Attack: Double Fianchetto",
    strategy:
      "Mirrors the fianchetto, so both king's bishops aim down the long diagonals. The d5-pawn " +
      "is guarded only by the queen for now, and the bishop on g7 does not help it, so c4 tests " +
      "it at once. Sound, but more committal than …Nf6.",
  },

  "1.Nf3 d5 2.g3 b6": {
    strategy:
      "Prepares …Bb7, but with the pawn on d5 that bishop would look only at its own pawn, and " +
      "the move loosens c6 and the long diagonal towards a8. White develops quietly and attacks " +
      "d5 with c4.",
  },

  "1.Nf3 d5 2.g3 b5": {
    strategy:
      "Grabs queenside space without developing a piece and loosens c6 and the long diagonal " +
      "towards a8. The pawn is a target at once: a4 or c4 challenges it while White simply " +
      "develops.",
  },

  "1.Nf3 d5 2.g3 a6": {
    strategy:
      "Spends a tempo on a flank move that has no role yet, at best preparing …b5. White is free " +
      "to develop and then claim the centre.",
  },

  "1.Nf3 d5 2.g3 a5": {
    strategy:
      "A rim pawn move: it stops b4 and gains space for …a4, but develops nothing. White can " +
      "ignore it and develop at leisure.",
  },

  "1.Nf3 d5 2.g3 h6": {
    strategy:
      "A slow move that takes g5 from White's pieces but develops nothing. White uses the tempo " +
      "to develop and prepare a central break.",
  },

  "1.Nf3 d5 2.g3 h5": {
    strategy:
      "Gains space on the flank but spends a tempo without developing a piece. The follow-up …h4 " +
      "loses material to Nxh4, since g3 covers the knight.",
  },

  "1.Nf3 d5 2.g3 f6": {
    strategy:
      "Prepares …e5 but takes f6 from the g8-knight and weakens e6 and the e8–h5 diagonal. White " +
      "takes the centre while Black's development lags.",
  },

  "1.Nf3 d5 2.g3 f5": {
    strategy:
      "Aims for a Dutch-style set-up, but the pawn weakens e6 and the e8–h5 diagonal and leaves " +
      "e5 as an outpost for White's knight. Black must still develop every piece behind it, " +
      "while White castles and builds.",
  },

  "1.Nf3 d5 2.g3 d4": {
    strategy:
      "Gains space before any piece is out, but the pawn becomes a target for c3 or e3 and the " +
      "f3-knight. Black has to hold it, while White castles first and chooses when to strike.",
  },

  "1.Nf3 d5 2.g3 Nd7": {
    strategy:
      "Blocks the c8-bishop, so it can no longer reach f5 or g4, and the knight on d7 does not " +
      "guard d5 as a knight on f6 would. White takes the centre unhindered.",
  },

  "1.Nf3 d5 2.g3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but is far from the centre and blocks " +
      "the a-pawn. It costs a tempo for little, and White takes space.",
  },

  "1.Nf3 d5 2.g3 Nh6": {
    strategy:
      "Heads for f5, where the knight would eye d4 and e3, but stands on the rim until it gets " +
      "there and has cost a tempo. White develops and takes space in the centre.",
  },

  "1.Nf3 d5 2.g3 Bd7": {
    strategy:
      "Cuts the queen off from d5, leaving the pawn undefended, and takes d7 from the b8-knight, " +
      "while the bishop stands more passively than on f5 or g4. White develops and attacks d5 " +
      "with c4.",
  },

  "1.Nf3 d5 2.g3 Be6": {
    strategy:
      "Blocks the e7-pawn, so neither …e6 nor …e5 can free the f8-bishop. The bishop guards " +
      "d5, but 3.Ng5 attacks it and threatens Nxe6 fxe6 with doubled e-pawns, so Black loses " +
      "time moving it again.",
  },

  "1.Nf3 d5 2.g3 Qd7": {
    strategy:
      "Brings the queen out early and blocks the c8-bishop. 3.Ne5 attacks the queen at once " +
      "and gains a tempo as it moves again.",
  },

  "1.Nf3 d5 2.g3 Qd6": {
    strategy:
      "Brings the queen out early to an exposed square. 3.Nc3 threatens Nb5, hitting the queen " +
      "and c7, so Black loses time moving it again.",
  },

  "1.Nf3 d5 2.g3 g5": {
    name: "Hungarian Opening: Wiedenhagen-Beta Gambit",
    strategy:
      "Offers the g-pawn: 3.Nxg5 wins it, and …e5 or …h6 gain at most a tempo against the " +
      "knight. The pawn is gone and the kingside is loosened for good.",
  },

  "1.Nf3 d5 2.g3 e5": {
    name: "King's Indian Attack: Omega-Delta Gambit",
    strategy:
      "Gives up the e-pawn: 3.Nxe5 wins it, and White can support the knight with d4 and keep " +
      "the extra pawn without Black getting real compensation.",
  },

  "1.Nf3 d5 2.g3 Kd7": {
    strategy:
      "Gives up castling for no reason and walks into 3.Ne5+, which forces the king to move " +
      "again. The king stays stuck in the centre while Black loses still more time.",
  },

  "1.Nf3 d5 2.g3 Bh3": {
    strategy:
      "Hangs the bishop: 3.Bxh3 wins a whole piece, since nothing defends h3 and the rook on " +
      "h8 is shut in behind the h7-pawn.",
  },

  "1.Nf3 d5 2.b3 Nf6": {
    strategy:
      "Develops the knight to its natural square, where it supports d5 and covers e4. Black " +
      "commits to nothing yet, so every set-up with the bishops and the c- and e-pawns stays " +
      "open, and White has to show what the b3 fianchetto is for.",
  },

  "1.Nf3 d5 2.b3 c5": {
    background:
      "Aron Nimzowitsch reached this position as White against Rudolf Spielmann at New York " +
      "1927 (3.Bb2 Nc6 4.e3 Nf6 5.Bb5) and won in 55 moves.",
    strategy:
      "Fights for d4 from the flank before White can build a pawn centre, and prepares to bring " +
      "out both knights. The game often becomes a reversed Nimzo-Indian, with Black’s pawns on " +
      "c5 and d5 facing White’s fianchettoed bishop. The cost is that d5 has no pawn support " +
      "until …e6, so Black has to watch that pawn while developing.",
  },

  "1.Nf3 d5 2.b3 Bg4": {
    background:
      "Raymond Keene, later the author of the book Nimzowitsch/Larsen Attack (1977), won as " +
      "White against Vlatko Kovačević at Amsterdam 1973 after 2…Bg4 3.Bb2 Nd7.",
    strategy:
      "Develops the bishop outside the pawn chain and puts pressure on the f3-knight, which " +
      "guards e5 and d4. Taking on f3 removes that guard and may double White’s pawns, but it " +
      "gives up the bishop pair, and the bishop can be driven back by h3. Black gets quick " +
      "development in exchange for some time spent on the bishop.",
  },

  "1.Nf3 d5 2.b3 Bf5": {
    strategy:
      "Develops the light-squared bishop outside the pawn chain before …e6 shuts it in, and eyes " +
      "e4. Black aims for a solid reversed London set-up with …Nf6, …e6 and …c6 behind it. " +
      "Development is easy, but White’s plan is to force through e4 anyway, and the bishop can " +
      "become a target.",
  },

  "1.Nf3 d5 2.b3 e6": {
    strategy:
      "Supports d5 and opens the f8-bishop, preparing quick kingside development and castling, " +
      "usually reaching the same positions as 2…Nf6 with …e6. Sound, but it shuts in the " +
      "c8-bishop before it can come out actively, giving up two of the main set-ups for no gain " +
      "over 2…Nf6, while White builds freely.",
  },

  "1.Nf3 d5 2.b3 Nc6": {
    strategy:
      "Develops with pressure on d4 and e5 and prepares …e5, but it blocks the c-pawn and " +
      "gives up the …c6 and …c5 set-ups. After 3.Bb2 an immediate …e5 loses a pawn to Nxe5 " +
      "and Bxe5, so the advance needs more preparation first. Sound, yet the knight is " +
      "committed before White has shown a plan.",
  },

  "1.Nf3 d5 2.b3 c6": {
    strategy:
      "Supports d5 with a pawn and keeps the c8-bishop free to come out in front of the pawn " +
      "chain before …e6. Sound but passive: the pawn controls neither d4 nor e5, takes c6 from " +
      "the b8-knight, and a later …c5 costs a second move, so White builds freely.",
  },

  "1.Nf3 d5 2.b3 b6": {
    strategy:
      "Mirrors White's set-up by preparing …Bb7, and leaves the centre to be settled later. The " +
      "bishop on b7 looks at its own d5-pawn, so it does little until …c5 and …d4 or an exchange " +
      "opens the diagonal, and White can build the centre meanwhile. Sound but unambitious.",
  },

  "1.Nf3 d5 2.b3 g6": {
    strategy:
      "Prepares …Bg7 to oppose Bb2 on the long diagonal. Sound but slow in the centre: the " +
      "d5-pawn stands without pawn support, and White can hit it at once with c4.",
  },

  "1.Nf3 d5 2.b3 Nd7": {
    strategy:
      "Develops the b8-knight to a square where it blocks the c8-bishop. It supports …e5 and " +
      "…c5, but …e5 still fails to Nxe5 once Bb2 is played, and the bishop stays buried " +
      "behind it.",
  },

  "1.Nf3 d5 2.b3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but does nothing for d4 or e5, which " +
      "it would cover from c6. White builds the centre without opposition.",
  },

  "1.Nf3 d5 2.b3 Bd7": {
    strategy:
      "Develops the bishop to a passive square that blocks the b8-knight's route to d7, instead " +
      "of placing it actively outside the pawn chain. Nothing is attacked, so White builds " +
      "unhindered.",
  },

  "1.Nf3 d5 2.b3 Be6": {
    strategy:
      "Blocks the e7-pawn, so neither …e6 nor …e5 can be played until the bishop moves again, " +
      "and the bishop does less on e6 than on f5 or g4. White builds the centre without " +
      "obstruction.",
  },

  "1.Nf3 d5 2.b3 Qd7": {
    strategy:
      "Brings the queen out early, where it blocks the c8-bishop and the b8-knight's route to " +
      "d7. Nothing is attacked, so White gains time while the queen stands in the way.",
  },

  "1.Nf3 d5 2.b3 Qd6": {
    strategy:
      "Brings the queen out early onto the a3–f8 diagonal, where 3.Ba3 attacks it at once, so " +
      "it must move again or be shielded with …c5. No minor piece is developed meanwhile.",
  },

  "1.Nf3 d5 2.b3 Nh6": {
    strategy:
      "Puts the g8-knight on the rim on its way to f5, instead of on f6, where it would cover e4 " +
      "and d5. White's development faces no resistance.",
  },

  "1.Nf3 d5 2.b3 a6": {
    strategy:
      "Spends a tempo on a flank pawn without developing a piece or touching the centre; its " +
      "point is …b5, and meanwhile White takes space freely.",
  },

  "1.Nf3 d5 2.b3 a5": {
    strategy:
      "Gains queenside space with the idea …a4 against the b3-pawn, but develops nothing, and " +
      "the a-pawn can no longer cover b6 or b5. White builds unopposed.",
  },

  "1.Nf3 d5 2.b3 b5": {
    strategy:
      "Advances a flank pawn without developing a piece, and the pawn on b5 has no defender: " +
      "3.e3 already threatens Bxb5+, and a4 can strike at it as well.",
  },

  "1.Nf3 d5 2.b3 f6": {
    strategy:
      "Prepares …e5, but takes f6 from the g8-knight and weakens e6 and the e8–h5 diagonal " +
      "without developing a piece. White builds the centre freely.",
  },

  "1.Nf3 d5 2.b3 f5": {
    strategy:
      "Commits to a Stonewall-style pawn formation at once, which leaves e5 as a hole that " +
      "Bb2 and a knight on e5 can exploit and delays the development of the kingside pieces.",
  },

  "1.Nf3 d5 2.b3 h6": {
    strategy:
      "Spends a tempo on a prophylactic pawn move, preventing an Ng5 that nobody threatens, " +
      "while White develops and claims the centre.",
  },

  "1.Nf3 d5 2.b3 h5": {
    strategy:
      "Starts a flank advance without developing a piece. The h-pawn weakens g5 and g6 and " +
      "commits to an attack with no pieces behind it, leaving the centre to White.",
  },

  "1.Nf3 d5 2.b3 d4": {
    strategy:
      "Grabs space, but 3.Bb2 attacks the pawn twice, with bishop and knight, so Black must " +
      "spend another move to hold it, and a later pawn move can undermine it. The pawn also no " +
      "longer covers c4 and e4.",
  },

  "1.Nf3 d5 2.b3 Bh3": {
    strategy: "Loses the bishop at once to 3.gxh3, because no black piece can recapture on h3.",
  },

  "1.Nf3 d5 2.b3 Kd7": {
    strategy:
      "Forfeits castling and walks the king onto the d-file for no reason, where Ne5+ gives " +
      "check at once. The king stays exposed in the centre and the h8-rook is left out of " +
      "play.",
  },

  "1.Nf3 d5 2.b3 e5": {
    strategy:
      "Gives away the e-pawn: nothing guards e5, so 3.Nxe5 wins it, and the knight stands " +
      "well in the centre.",
  },

  "1.Nf3 d5 2.b3 g5": {
    strategy:
      "Hangs the g-pawn to 3.Nxg5, since the e7-pawn blocks the queen's diagonal and no other " +
      "piece guards it. The kingside is also loosened for nothing.",
  },
};
