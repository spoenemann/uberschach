import type { OpeningTexts } from "../book.ts";

// English prose for Nf3-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.Nf3 Nf6 2.c4": {
    name: "English Opening: Anglo-Indian Defence, King's Knight Variation",
    background:
      "The same position arises from 1.c4 Nf6 2.Nf3. The English Opening is named after " +
      "Howard Staunton, who played 1.c4 in his 1843 match against Saint-Amant and at London " +
      "1851, the first international tournament, but it caught on only in the twentieth " +
      "century.",
    strategy:
      "Controls d5 from the flank and keeps both d4 and a fianchetto in reserve. With d4 the " +
      "game becomes a Queen's Gambit or an Indian defence: ...e6 heads for the Queen's Gambit " +
      "Declined or the Queen's Indian, ...g6 for the King's Indian or the Grünfeld. Without " +
      "d4, White plays Nc3, g3 and Bg2 in English structures, for example against ...c5. The " +
      "pawn occupies no central square yet, so Black chooses the defence.",
  },

  "1.Nf3 Nf6 2.g3": {
    background:
      "A common start of the King's Indian Attack, which Bobby Fischer (mostly in his early " +
      "career), Mikhail Botvinnik, Vasily Smyslov and Tigran Petrosian all employed. Its use " +
      "at grandmaster level began in the 1950s as an offshoot of the widespread King's Indian " +
      "Defence, with White adopting Black's set-up with an extra move.",
    strategy:
      "Prepares the fianchetto Bg2, which bears on e4 and d5 along the long diagonal, and " +
      "leaves d3, d4 and c4 all available. White usually follows with Bg2 and O-O, then " +
      "builds with d3 and e4 for a King's Indian Attack, with c4 for a Réti or English " +
      "set-up, or with d4 and c4 for a Catalan. The cost is that the centre is left to Black, " +
      "who can occupy it at once with ...d5.",
  },

  "1.Nf3 Nf6 2.d4": {
    strategy:
      "Occupies the centre with a pawn and reaches a queen's pawn position with the knight " +
      "already on f3. Black can build with ...d5 and ...e6 for Queen's Gambit structures, " +
      "with ...e6 and ...b6 for the Queen's Indian, or with ...g6 for the King's Indian and " +
      "the Grünfeld once White adds c4. White chooses between c4 and quieter set-ups with Bf4 " +
      "or e3, but the early knight rules out systems with f3, such as the Sämisch against the " +
      "King's Indian.",
  },

  "1.Nf3 Nf6 2.b3": {
    name: "Nimzowitsch–Larsen Attack",
    background:
      "Named after Aron Nimzowitsch, who experimented with 1.b3 in the 1920s and 1930s and " +
      "more often used the order 1.Nf3 d5 2.b3, and Bent Larsen, who played 1.b3 frequently " +
      "from 1968 to 1972.",
    strategy:
      "Prepares Bb2, which aims along the long diagonal at e5 and the knight on f6, while " +
      "keeping e3, c4 and d4 flexible. Black can build with ...d5 and ...e6, play ...g6 to " +
      "contest the diagonal, or answer with ...c5. The cost is a slower claim on the centre, " +
      "and theory rates the resulting positions as roughly level.",
  },

  "1.Nf3 Nf6 2.e3": {
    name: "Zukertort Opening: Quiet System",
    strategy:
      "Opens the f1-bishop and supports a later d4, heading for Colle-type set-ups with d4, " +
      "Bd3 and c3 or for a queenside fianchetto with b3 and Bb2. It is solid but slow, and " +
      "once d4 follows, the e3-pawn shuts in the c1-bishop; Black takes space with ...d5 and " +
      "...c5 or fianchettoes with ...b6 or ...g6.",
  },

  "1.Nf3 Nf6 2.d3": {
    strategy:
      "Supports e4 and opens the c1-bishop, aiming for g3, Bg2, O-O and e4 in King's Indian " +
      "Attack style. It is sound but modest: Black takes the centre with ...d5 and ...e5, and " +
      "White's game stays passive until e4 can be pushed.",
  },

  "1.Nf3 Nf6 2.c3": {
    strategy:
      "Supports a later d4 and opens the d1–a4 diagonal for the queen, but it develops " +
      "nothing and takes c3 from the queen's knight. Black claims space with ...d5 and ...c5 " +
      "or develops with ...e6 and ...b6, and the slow c3 puts no pressure on Black's set-up.",
  },

  "1.Nf3 Nf6 2.Nc3": {
    strategy:
      "Develops the second knight and watches e4 and d5 without committing a pawn. It blocks " +
      "the c-pawn, so English set-ups with c4 are off for now, and Black takes the centre " +
      "with ...d5 and can gain more space by chasing the knight with ...d4.",
  },

  "1.Nf3 Nf6 2.a3": {
    strategy:
      "Prepares b4 and keeps a black bishop off b4, but does nothing for the centre or " +
      "development. Black takes space with ...d5 and ...c5 while White is still waiting.",
  },

  "1.Nf3 Nf6 2.a4": {
    strategy:
      "Gains queenside space on the rim, but spends a tempo on a pawn move that does nothing " +
      "for the centre or development. Black takes the centre with ...d5 and ...e6 and " +
      "develops freely.",
  },

  "1.Nf3 Nf6 2.b4": {
    strategy:
      "Advances the b-pawn where nothing defends it: after 2...e6 the f8-bishop attacks it, " +
      "and White must spend another tempo on a3, c3 or b5 or give it up to ...Bxb4. The " +
      "advance also weakens c3 and leaves the queenside thin.",
  },

  "1.Nf3 Nf6 2.h3": {
    strategy:
      "Takes g4 from a black knight or bishop, but spends a tempo on a rim pawn the position " +
      "does not yet call for. Black takes the centre with ...d5 and ...e6 while White still " +
      "has to develop.",
  },

  "1.Nf3 Nf6 2.h4": {
    strategy:
      "Gains kingside space and prepares h5, but loosens the kingside for no concrete gain " +
      "and does nothing for the centre or development. Black takes the centre with ...d5 and " +
      "...e6.",
  },

  "1.Nf3 Nf6 2.Rg1": {
    strategy:
      "Supports a later g4 and g5, but gives up the right to castle kingside and puts the " +
      "rook on a closed file. Black takes the centre with ...d5 while White's king stays in " +
      "the middle.",
  },

  "1.Nf3 Nf6 2.Na3": {
    strategy:
      "Develops the knight to the rim, where it eyes b5 and c4 but guards nothing in the " +
      "centre and blocks the a-pawn. Black takes the centre with ...d5, which also covers c4, " +
      "and the knight stays out of play.",
  },

  "1.Nf3 Nf6 2.Ng5": {
    strategy:
      "Moves the knight a second time to attack h7 and f7, both of which are defended. After " +
      "2...h6 it has to go back to f3 or h3, and Black gains time for ...d5 and ...e5.",
  },

  "1.Nf3 Nf6 2.Nh4": {
    strategy:
      "Moves the knight a second time, to the rim, where it watches f5 and g6 but does " +
      "nothing for the centre. Black takes the centre with ...d5 and ...e5 while the knight " +
      "is out of play.",
  },

  "1.Nf3 Nf6 2.Ne5": {
    strategy:
      "Centralises the knight too early: 2...d6 attacks it and it must retreat, so White " +
      "spends two moves for nothing while Black gains central space and opens the c8-bishop.",
  },

  "1.Nf3 Nf6 2.Nd4": {
    strategy:
      "Centralises the knight, but ...e5 or ...c5 attacks it at once and it must retreat, " +
      "while Black gains central space with a tempo.",
  },

  "1.Nf3 Nf6 2.Ng1": {
    strategy:
      "Returns the knight to its starting square and undoes the first move, giving Black a " +
      "free tempo with the knight already on f6. Black takes the centre with ...d5 and ...e6 " +
      "while White has to start over.",
  },

  "1.Nf3 Nf6 2.e4": {
    strategy:
      "Leaves the e4-pawn undefended, so 2...Nxe4 wins it. White's lead in development after " +
      "Qe2 or Nc3 is doubtful compensation, and Black keeps an extra pawn in a sound " +
      "position.",
  },

  "1.Nf3 Nf6 2.g4": {
    strategy:
      "Hangs a pawn: nothing defends g4, since the knight on f3 blocks the queen's diagonal, " +
      "so 2...Nxg4 wins it. Rg1 then hits the knight, but it simply retreats and Black keeps " +
      "the extra pawn.",
  },

  "1.Nf3 Nf6 2.c4 e6": {
    strategy:
      "Opens the f8-bishop's diagonal and prepares ...d5, leaving Black many set-ups. After " +
      "3.Nc3 the bishop can go to b4 to put pressure on the knight, or ...d5 follows; after " +
      "3.g3 d5 4.Bg2 the game resembles a Catalan; and 3.d4 allows the Queen's Gambit " +
      "Declined, the Queen's Indian or the Bogo-Indian. The cost is the c8-bishop, which the " +
      "e6-pawn shuts in until ...b6 gives it the long diagonal.",
  },

  "1.Nf3 Nf6 2.c4 g6": {
    name: "English Opening: Anglo-Indian Defence, King's Indian Formation",
    background:
      "Until the mid-1930s the King's Indian Defence was generally regarded as highly " +
      "suspect, but the analysis and play of three Soviet players in particular, Alexander " +
      "Konstantinopolsky, Isaac Boleslavsky and David Bronstein, helped to make it much more " +
      "respected and popular.",
    strategy:
      "Prepares ...Bg7 and quick castling, keeping both the King's Indian and the Grünfeld in " +
      "reserve. Against Nc3 and e4 Black sets up with ...d6 and then breaks with ...e5 or " +
      "...c5; against 3.g3 or 3.Nc3 the strike ...d5 is available at once. The cost is the " +
      "centre: Black lets White occupy it first and relies on undermining it later.",
  },

  "1.Nf3 Nf6 2.c4 c5": {
    name: "English Opening: Symmetrical Variation",
    background:
      "The same position arises from 1.c4 c5 2.Nf3 Nf6. The Hedgehog Defence, a line of it, " +
      "continues 3.g3 b6 4.Bg2 Bb7 5.Nc3 e6 6.O-O Be7 7.d4 cxd4 8.Qxd4 d6; the ideas behind " +
      "the Hedgehog were originally developed in the English Opening, and it first became " +
      "extensively analysed in the 1970s.",
    strategy:
      "Controls d4, just as White's c-pawn controls d5. Against 3.g3 or 3.Nc3 Black can set " +
      "up with ...b6, ...Bb7, ...e6 and ...d6, or strike with ...d5; after 3.d4 cxd4 4.Nxd4 " +
      "Black continues with ...e6, or with 4...e5, which drives the knight from the centre. " +
      "The cost is space: if White gets e4 in beside c4, Black's position is cramped and " +
      "depends on the breaks ...b5 and ...d5.",
  },

  "1.Nf3 Nf6 2.c4 b6": {
    name: "English Opening: Anglo-Indian Defence, Queen's Indian Formation",
    background:
      "The Queen's Indian Defence, a solid defence to the Queen's Pawn Game, takes its name " +
      "from the fianchetto of Black's queen's bishop and is regarded as the sister opening of " +
      "the Nimzo-Indian.",
    strategy:
      "Prepares ...Bb7, which adds to the f6-knight's control of e4 and d5 and claims the " +
      "long diagonal; ...e6 usually follows. White often opposes the bishop with g3 and Bg2, " +
      "and d4 can transpose to the Queen's Indian. Nc3 and e4 is possible too, but only with " +
      "a second guard on e4 such as d3 or Qc2. The cost is that Black puts no pawn in the " +
      "centre and leaves White the choice of structure.",
  },

  "1.Nf3 Nf6 2.c4 d5": {
    name: "English Opening: Anglo-Indian Defence, Scandinavian Defence",
    strategy:
      "Challenges c4 at once. After 3.cxd5 Nxd5 White can build a centre with d4 and e4 " +
      "against a knight that has already moved twice, and after 3.d4 the game goes into " +
      "Queen's Gambit or Slav structures. It is sound, but White chooses the structure and " +
      "Black's knight on d5 can be harassed by e4 and Nc3.",
  },

  "1.Nf3 Nf6 2.c4 c6": {
    strategy:
      "Prepares ...d5 with a Slav-type pawn chain that leaves the c8-bishop's diagonal open " +
      "for ...Bf5 or ...Bg4. It is sound but mostly transposes: 3.d4 d5 gives a Slav, while " +
      "after 3.g3 d5 or 3.b3 d5 White keeps a Réti set-up, and the b8-knight loses c6 and " +
      "usually develops via d7.",
  },

  "1.Nf3 Nf6 2.c4 d6": {
    name: "English Opening: Anglo-Indian Defence, Old Indian Formation",
    background:
      "Siegbert Tarrasch introduced the Old Indian Defence in 1902, but it is more commonly " +
      "associated with Mikhail Chigorin, who adopted it five years later and pioneered it " +
      "late in his career. It is considered sound but has never attained the popularity of " +
      "the King's Indian.",
    strategy:
      "Prepares ...e5 and opens the c8-bishop's diagonal, with ...Nbd7 and ...Be7 to follow, " +
      "or ...g6 for a King's Indian. It is sound but modest: White builds a broad centre with " +
      "Nc3, d4 and e4, and with the bishop on e7 rather than g7 Black's position is usually " +
      "cramped.",
  },

  "1.Nf3 Nf6 2.c4 Nc6": {
    strategy:
      "Develops the knight and keeps ...e5 in reserve: 3.Nc3 e5 gives the Four Knights " +
      "Variation of the English, and 3.d4 transposes to the Black Knights' Tango, where Black " +
      "usually continues with ...e6. It is sound but less flexible than the main moves, since " +
      "the knight on c6 blocks the c-pawn and rules out ...c5 and ...c6.",
  },

  "1.Nf3 Nf6 2.c4 Na6": {
    strategy:
      "Puts the second knight on the rim, heading for b4 or c5, where it does nothing for the " +
      "centre. White builds the centre with Nc3, d4 and e4 at leisure.",
  },

  "1.Nf3 Nf6 2.c4 a6": {
    strategy:
      "Prepares ...b5 against the c4-pawn but spends a tempo on a rook's pawn instead of " +
      "developing a second piece. White builds the centre with Nc3 and d4, and once the " +
      "knight is on c3 the push ...b5 costs a pawn.",
  },

  "1.Nf3 Nf6 2.c4 a5": {
    strategy:
      "Restrains b4 but spends a tempo on a rim pawn, weakens b5 and fights neither for the " +
      "centre nor for development. White continues with Nc3 and d4 at leisure.",
  },

  "1.Nf3 Nf6 2.c4 b5": {
    strategy:
      "Offers the b-pawn in Benko style, but without White's pawn on d5 and without ...c5 to " +
      "open the queenside. After 3.cxb5 a6 4.bxa6 Bxa6 White keeps the extra pawn, and the " +
      "pressure on the queenside does not make up for it.",
  },

  "1.Nf3 Nf6 2.c4 h6": {
    strategy:
      "Takes g5 from White's pieces but spends a tempo on a rim pawn without developing " +
      "anything or touching the centre. White continues with Nc3 and d4 or g3 undisturbed.",
  },

  "1.Nf3 Nf6 2.c4 h5": {
    strategy:
      "Supports a knight on g4 and prepares ...h4, but develops nothing and gives up ...h6 as " +
      "a way to cover g5. White uses the free tempo for Nc3, d4 or g3.",
  },

  "1.Nf3 Nf6 2.c4 Ng8": {
    strategy:
      "Returns the knight to g8 and undoes Black's only developing move. With c4 and Nf3 " +
      "already played, White is two tempi ahead and can take the centre with d4 and e4 as it " +
      "likes.",
  },

  "1.Nf3 Nf6 2.c4 Ng4": {
    strategy:
      "Moves the knight a second time without a real threat, since the king guards f2 and the " +
      "rook guards h2. After 3.h3 it has to retreat, and Black has lost time that White uses " +
      "for Nc3 and d4.",
  },

  "1.Nf3 Nf6 2.c4 Nh5": {
    strategy:
      "Moves the knight a second time to the rim, where it no longer covers d5 or e4. White " +
      "builds the centre with Nc3, d4 and e4 while the knight on h5 takes no part in the " +
      "fight for it.",
  },

  "1.Nf3 Nf6 2.c4 Ne4": {
    strategy:
      "Moves the knight a second time to e4, where no pawn supports it. 3.d3 drives it away " +
      "at once, or 3.Qc2 attacks it, and White gains time for the centre.",
  },

  "1.Nf3 Nf6 2.c4 Rg8": {
    strategy:
      "Gives up kingside castling for good and develops nothing, since the rook has no work " +
      "on g8. White builds the centre with Nc3 and d4 while Black's king can at best castle " +
      "long.",
  },

  "1.Nf3 Nf6 2.c4 e5": {
    strategy:
      "Leaves the pawn en prise: 3.Nxe5 wins it, and after 3...Nc6 4.Nxc6 dxc6 Black has " +
      "opened lines but no real compensation, since White keeps the pawn and simply develops.",
  },

  "1.Nf3 Nf6 2.c4 g5": {
    strategy:
      "Hangs the g-pawn, which the f3-knight attacks and nothing defends, since the e7-pawn " +
      "blocks the queen's diagonal. After 3.Nxg5 White is a pawn up and Black's kingside is " +
      "loosened for nothing.",
  },

  "1.Nf3 Nf6 2.c4 Nd5": {
    strategy:
      "Hangs the knight: 3.cxd5 wins it outright, since the d7-pawn blocks the queen from " +
      "recapturing and nothing else covers d5.",
  },

  "1.Nf3 Nf6 2.g3 d5": {
    name: "King's Indian Attack",
    background:
      "Relatively uncommon at grandmaster level today, with Bassem Amin its most frequent " +
      "high-level practitioner, but popular at club level for its repeatable middlegame " +
      "plans. The trainer Mark Dvoretsky advocated the system and played it himself.",
    strategy:
      "Claims the centre at once and keeps several set-ups open: ...c6 with ...Bf5 or ...Bg4, " +
      "...c5 with ...Nc6, or ...e6 with ...Be7. White usually continues with Bg2 and O-O, " +
      "then strikes at the pawn on d5 with c4, or prepares e4 with d3. The early commitment " +
      "of the d-pawn gives White a clear target for these levers.",
  },

  "1.Nf3 Nf6 2.g3 g6": {
    name: "King's Indian Attack: Symmetrical Defence",
    strategy:
      "Mirrors White's kingside fianchetto: ...Bg7 and ...O-O follow, and Black chooses " +
      "between ...d6 with ...e5, ...d5 and ...c5 once White has committed. If White takes " +
      "space with c4 and d4, the game becomes a King's Indian or a Grünfeld with White's " +
      "bishop on g2. The cost is a slower claim on the centre than ...d5 makes at once.",
  },

  "1.Nf3 Nf6 2.g3 c5": {
    strategy:
      "Controls d4 and prepares ...Nc6, followed either by ...g6 for a symmetrical set-up or " +
      "by ...d5 and ...e5, a Reversed King's Indian in which Black takes White's usual role. " +
      "White can answer with c4 for a Symmetrical English or keep to Bg2, O-O and d3. The " +
      "c-pawn occupies no central square yet, so both sides keep their options.",
  },

  "1.Nf3 Nf6 2.g3 e6": {
    strategy:
      "Opens the f8-bishop and prepares ...d5 with ...Be7, a solid set-up that White meets " +
      "with d3 and e4, or with c4 and d4 for a Catalan. Black can also develop the queen's " +
      "bishop with ...b6 and ...Bb7 instead. Otherwise that bishop stays shut in behind the " +
      "e6-pawn, which is what White's d3 and e4 set-up aims to exploit.",
  },

  "1.Nf3 Nf6 2.g3 b5": {
    name: "King's Indian Attack: Spassky Variation",
    background:
      "Sometimes called the Spassky Variation after Boris Spassky's use of ...b5 against " +
      "Tigran Petrosian in the 1966 World Championship match, although that game, the " +
      "decisive 22nd, began 1.d4 b5. The line is fully respectable and has been played " +
      "successfully by grandmasters including former world champions Mikhail Tal, Anatoly " +
      "Karpov and Magnus Carlsen.",
    strategy:
      "Gains queenside space and prepares ...Bb7 to contest the long diagonal; unlike ...b6, " +
      "it also discourages c4, since the pawn on b5 could take there. Play typically runs " +
      "3.Bg2 Bb7 4.O-O e6, after which White chooses between d3 with a later e4, d4 and b3. " +
      "The b5-pawn can become a target for a4 or Na3.",
  },

  "1.Nf3 Nf6 2.g3 b6": {
    strategy:
      "Prepares ...Bb7 to oppose the bishop on g2 on the long diagonal, as in the Queen's " +
      "Indian. The set-up is sound, but unlike ...b5 it does not discourage c4, so White can " +
      "take space with c4 and d4 or play quietly with d3 and e4.",
  },

  "1.Nf3 Nf6 2.g3 Nc6": {
    strategy:
      "Develops the knight towards d4 and e5 and prepares ...e5, which it would support. It " +
      "blocks the c-pawn, ruling out ...c5 for now, and White can take the centre with d4. " +
      "The move is sound but less flexible than ...d5 or ...g6.",
  },

  "1.Nf3 Nf6 2.g3 c6": {
    strategy:
      "Prepares ...d5 in Slav style, with the c8-bishop free to go to f5 or g4 once the " +
      "d-pawn advances. The move does nothing for the centre yet, so White can play c4 or d4 " +
      "first. Sound, but ...d5 at once reaches the same set-ups and keeps the c-pawn free for " +
      "...c5.",
  },

  "1.Nf3 Nf6 2.g3 d6": {
    strategy:
      "Prepares ...e5 and a compact set-up with ...Nbd7 and ...g6 or ...Be7. It opens the " +
      "c8-bishop but concedes central space, so White can build with Bg2, O-O and then c4 and " +
      "d4. Sound, though passive.",
  },

  "1.Nf3 Nf6 2.g3 a6": {
    strategy:
      "A slow move that prepares ...b5, which Black can play at once. White gains a tempo for " +
      "Bg2, O-O and d4 or c4.",
  },

  "1.Nf3 Nf6 2.g3 a5": {
    strategy:
      "Gains space on the queenside and controls b4, but does nothing for development or the " +
      "centre. White continues with Bg2, O-O and d4 or c4 undisturbed.",
  },

  "1.Nf3 Nf6 2.g3 Na6": {
    strategy:
      "Develops the knight to the edge, where it eyes b4 and c5 but has little influence on " +
      "the centre. White gains time for Bg2, O-O and d4 or c4.",
  },

  "1.Nf3 Nf6 2.g3 Rg8": {
    strategy:
      "Spends a tempo and gives up kingside castling for good, since the h8-rook has moved, " +
      "without helping development or the centre. White simply continues with Bg2, O-O and " +
      "d4.",
  },

  "1.Nf3 Nf6 2.g3 Ng8": {
    strategy:
      "Undoes the first move. Black has spent two tempi to return to the start while White " +
      "has developed the knight and prepared Bg2, with a free hand in the centre.",
  },

  "1.Nf3 Nf6 2.g3 h6": {
    strategy:
      "A prophylactic pawn move that spends a tempo with nothing yet to prevent. It does not " +
      "help development or the centre, and White plays Bg2, O-O and d4 at leisure.",
  },

  "1.Nf3 Nf6 2.g3 h5": {
    strategy:
      "Heads for ...h4 to attack the g3-pawn, but weakens g5 and loosens the kingside before " +
      "Black has developed. It does nothing for the centre, and White continues with Bg2 and " +
      "d4.",
  },

  "1.Nf3 Nf6 2.g3 Ng4": {
    strategy:
      "The knight eyes f2 and h2 from g4, but 3.h3 chases it at once, and 3...Ne5 then loses " +
      "it to Nxe5. After the retreat to f6 or h6 Black has lost two tempi and White has " +
      "played h3 for free.",
  },

  "1.Nf3 Nf6 2.g3 Nh5": {
    strategy:
      "Puts the knight on the rim, where it eyes g3 and f4 but contests no central square. " +
      "White can continue with Bg2 and d4, or drive it away at once with 3.g4, gaining " +
      "kingside space with tempo.",
  },

  "1.Nf3 Nf6 2.g3 Nd5": {
    strategy:
      "Centralises the knight, but 3.c4 attacks it at once and it must retreat, for example " +
      "to b6. White gains time for d4 and a broad centre, while Black has spent three moves " +
      "on one knight.",
  },

  "1.Nf3 Nf6 2.g3 Ne4": {
    strategy:
      "Eyes f2 and g3, but 3.d3 attacks the knight at once and it must retreat to f6, d6 or " +
      "c5, losing time while White gains d3 for free. Capturing on g3 only gives a knight for " +
      "a pawn.",
  },

  "1.Nf3 Nf6 2.g3 g5": {
    strategy:
      "Hangs a pawn: the knight on f6 does not guard g5, so 3.Nxg5 simply wins it, and " +
      "Black's kingside is left loose.",
  },

  "1.Nf3 Nf6 2.g3 e5": {
    strategy:
      "Hangs the e-pawn: nothing defends e5, so 3.Nxe5 simply wins it. After 3...Nc6 4.Nxc6 " +
      "dxc6 Black's queen and c8-bishop have open lines, but Black is a clean pawn down.",
  },

  "1.Nf3 Nf6 2.b3 d5": {
    strategy:
      "Takes the centre at once and, together with the f6-knight, makes e4 hard for White to " +
      "achieve. After Bb2 Black can build with …e6, …Be7 and …c5, or develop the " +
      "light-squared bishop actively to f5 before closing the chain with …e6. The b2-bishop " +
      "then bites on a solid pawn centre, which White usually challenges with e3 and c4.",
  },

  "1.Nf3 Nf6 2.b3 g6": {
    strategy:
      "Answers White's fianchetto with one of its own: …Bg7 meets the b2-bishop on the long " +
      "diagonal, and …O-O with …d6 or …d5 follows. The set-up is flexible and keeps …c5 " +
      "available. Until Black castles, the g7-bishop is undefended, so a careless move of the " +
      "f6-knight can drop it to Bxg7.",
  },

  "1.Nf3 Nf6 2.b3 e6": {
    strategy:
      "Opens the diagonal for the f8-bishop and keeps the choice of set-up open. After Bb2 " +
      "Black can build a classical centre with …d5, …Be7 and …O-O, or fianchetto with …b6 and " +
      "…Bb7 in Queen's Indian style; …c5 is a third option. The price is a c8-bishop shut in " +
      "behind the e6-pawn until Black decides on …b6.",
  },

  "1.Nf3 Nf6 2.b3 c5": {
    strategy:
      "Contests d4 at once and keeps the choice between …d5, …d6 and a kingside fianchetto " +
      "open. Black usually follows with …Nc6 and …e6, or with …g6 and …Bg7. White answers " +
      "with e3 and Be2, or with c4, which leads to structures of the Symmetrical English.",
  },

  "1.Nf3 Nf6 2.b3 b6": {
    strategy:
      "Copies White's set-up: …Bb7 meets the b2-bishop on the long diagonal, followed by …e6, " +
      "…Be7 and …O-O in Queen's Indian style. The structure is solid but somewhat passive, " +
      "since Black has little quick counterplay and mostly reacts to White's plan.",
  },

  "1.Nf3 Nf6 2.b3 Nc6": {
    strategy:
      "Develops a piece and eyes d4 and e5, but the knight blocks the c-pawn and commits " +
      "itself before Black's structure is clear. Once Bb2 is played, …e5 would leave the pawn " +
      "attacked twice and defended once, so Black needs …d6 first or turns to …d5 and …e6 " +
      "instead.",
  },

  "1.Nf3 Nf6 2.b3 d6": {
    strategy:
      "Prepares …e5 supported by …Nbd7, or a King's Indian set-up with …g6 and …Bg7. The move " +
      "is modest: it does not contest e4 as …d5 does, and White develops freely with Bb2, e3 " +
      "and c4.",
  },

  "1.Nf3 Nf6 2.b3 c6": {
    strategy:
      "Prepares …d5 with a Slav-style pawn pair and keeps the c8-bishop free for …Bf5. It is " +
      "solid but slower than …d5 at once and takes c6 away from the b8-knight, so White gets " +
      "time for Bb2, e3 and a later c4.",
  },

  "1.Nf3 Nf6 2.b3 a6": {
    strategy:
      "Spends a tempo on a flank pawn that neither fights for the centre nor develops a " +
      "piece. White continues with Bb2 and e3 and takes the lead in development.",
  },

  "1.Nf3 Nf6 2.b3 a5": {
    strategy:
      "Prepares …a4 against the b3-pawn, but spends a tempo on the flank while the centre is " +
      "uncontested, and the a-pawn can no longer cover b6 or b5. White continues with Bb2 and " +
      "e3.",
  },

  "1.Nf3 Nf6 2.b3 b5": {
    strategy:
      "Weakens the queenside: after e3 the f1-bishop attacks b5, so …a6 or …c6 is needed to " +
      "hold the pawn, and Black's development falls behind.",
  },

  "1.Nf3 Nf6 2.b3 h6": {
    strategy:
      "Spends a tempo on a rook-pawn move although nothing needs to be prevented on g5, and " +
      "the centre stays uncontested. White develops with Bb2 and e3 undisturbed.",
  },

  "1.Nf3 Nf6 2.b3 h5": {
    strategy:
      "Pushes the rook pawn without a purpose and loses a tempo while the centre stays " +
      "uncontested. White simply develops with Bb2 and e3.",
  },

  "1.Nf3 Nf6 2.b3 Na6": {
    strategy:
      "Puts the knight on the rim, aiming at b4 or c5, without doing anything for the centre. " +
      "Once e3 opens the f1-bishop's diagonal, Bxa6 bxa6 would double Black's a-pawns.",
  },

  "1.Nf3 Nf6 2.b3 Ng8": {
    strategy:
      "Retreats the only developed piece to its starting square and undoes the single useful " +
      "move Black has made. White gains two tempi and continues with Bb2 and e3 at leisure.",
  },

  "1.Nf3 Nf6 2.b3 Ng4": {
    strategy:
      "Sends the knight to a square where h3 chases it away at once; …Ne5 hangs to Nxe5, so " +
      "it has to retreat to f6 or h6, and White has gained a tempo with h3.",
  },

  "1.Nf3 Nf6 2.b3 Nh5": {
    strategy:
      "Places the knight on the rim to reach f4, but g3 takes that square away and leaves f6 " +
      "as its only safe square, while the move does nothing for the centre or for " +
      "development.",
  },

  "1.Nf3 Nf6 2.b3 Ne4": {
    strategy:
      "Centralises the knight too early: d3 kicks it at once, and after …Nf6 White has gained " +
      "a free move. The retreat …Nc5 runs into b4, and …Nd6 blocks the d-pawn.",
  },

  "1.Nf3 Nf6 2.b3 Nd5": {
    strategy:
      "Puts the knight on a square where e4 or c4 hits it with tempo; after 3.e4 Nb6 4.d4 " +
      "White has a broad pawn centre, while Black's knight has spent three moves to reach b6.",
  },

  "1.Nf3 Nf6 2.b3 e5": {
    strategy:
      "Hangs the e-pawn: 3.Nxe5 wins it because nothing recaptures on e5, and 3…Nc6 4.Nxc6 " +
      "dxc6 only trades pieces without regaining the pawn.",
  },

  "1.Nf3 Nf6 2.b3 g5": {
    strategy:
      "Loses a pawn to 3.Nxg5: the e7-pawn and the f6-knight block the queen's diagonal, so " +
      "nothing defends g5, and the advance also weakens the kingside.",
  },

  "1.Nf3 Nf6 2.b3 Rg8": {
    strategy:
      "Forfeits kingside castling and sends the rook to a closed file, achieving nothing in " +
      "the centre or in development. White simply continues with Bb2 and e3 while Black's " +
      "king has lost its natural home.",
  },
};
