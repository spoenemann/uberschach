import type { OpeningTexts } from "../book.ts";

// English prose for e4-d6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.e4 d6 2.d4": {
    strategy:
      "Builds a broad pawn centre on d4 and e4 and opens the diagonal of the c1-bishop. Black " +
      "lets the centre stand for now, develops with ...Nf6, ...g6 and ...Bg7, and strikes at " +
      "it later with ...c5 or ...e5. White usually defends e4 with Nc3 and then chooses " +
      "between the aggressive f4, the quieter Nf3 with Be2, or Be3 with Qd2 and f3.",
  },

  "1.e4 d6 2.Nf3": {
    strategy:
      "Develops the knight, covers d4 and e5 and keeps the advance d4 in reserve. After " +
      "2...Nf6 3.Nc3 g6 4.d4 the classical set-up with Nf3 arises, while 2...e5 3.d4 reaches " +
      "the Philidor Defence and 2...c5 the Sicilian. The cost is the early f4 of White's " +
      "sharpest attacking systems, and the knight can be pinned by ...Bg4.",
  },

  "1.e4 d6 2.Nc3": {
    strategy:
      "Develops the knight, protects e4 and keeps d4, f4 and Nf3 all available. After 2...Nf6 " +
      "3.d4 g6 the main line is reached by transposition, but Black can also choose 2...e5 " +
      "and aim for a Philidor-type structure. A sound, flexible alternative to the immediate " +
      "d4 with a slightly more modest claim on the centre.",
  },

  "1.e4 d6 2.b3": {
    strategy:
      "Prepares Bb2 to put pressure on e5 and the long diagonal, with Nf3 and a later c4 or " +
      "d4 to follow. The set-up is flexible and sound, but it leaves the centre to Black, who " +
      "can occupy it with ...e5 and ...Nf6. Slower than 2.d4.",
  },

  "1.e4 d6 2.c3": {
    strategy:
      "Supports a later d4 with the c-pawn, but it takes c3 away from the queen's knight and " +
      "costs a tempo compared with playing d4 at once. Black answers ...Nf6, hitting e4, or " +
      "takes space with ...e5. Sound but slow.",
  },

  "1.e4 d6 2.c4": {
    strategy:
      "Takes space with c4 and e4 together, which controls d5 and prepares Nc3 and d4. Black " +
      "can answer ...e5, claiming the centre at once, or ...Nf6 with pressure on e4. Sound " +
      "but unusual, and less direct than 2.d4.",
  },

  "1.e4 d6 2.d3": {
    strategy:
      "Supports e4 modestly and opens the c1-bishop's diagonal, aiming for Nf3 and Be2 or a " +
      "g3 and Bg2 set-up. It makes no claim on d4, so Black takes space with ...e5 and " +
      "develops ...Nf6 without difficulty. Solid, but far less ambitious than 2.d4.",
  },

  "1.e4 d6 2.g3": {
    strategy:
      "Prepares Bg2 on the long diagonal, supporting e4, followed by Nf3 and castling. It is " +
      "a restrained set-up that commits no second pawn to the centre, so Black takes space " +
      "with ...e5 and develops ...Nf6 without opposition. Sound but unambitious.",
  },

  "1.e4 d6 2.Be2": {
    strategy:
      "A modest development that prepares Nf3 and castling and keeps d4 available. It stakes " +
      "no claim in the centre, so Black can play ...e5 or ...Nf6 at once and has no problems. " +
      "Sound, but slower than 2.d4.",
  },

  "1.e4 d6 2.Bc4": {
    strategy:
      "Develops the bishop towards f7 at once, but ...Nf6 hits e4, so d3, Nc3 or Qe2 must " +
      "follow, and Black can blunt the bishop with ...e6 or take space with ...e5. Sound and " +
      "seen in practice, but less effective than 2.d4.",
  },

  "1.e4 d6 2.f4": {
    name: "Rat Defence: Harmonist",
    strategy:
      "Puts pawns on e4 and f4 at once, aiming for Nf3, Nc3 and a later e5, but without d4 " +
      "the centre is less stable than in the f4 systems after 2.d4. Black answers ...Nf6 " +
      "against e4 or strikes with ...e5, when 3.Nf3 exf4 reaches a King's Gambit Accepted " +
      "position. Sound and seen in practice, but less flexible than 2.d4.",
  },

  "1.e4 d6 2.a3": {
    strategy:
      "Spends a tempo on a rook-pawn move that supports nothing and threatens nothing. Black " +
      "answers ...Nf6 or ...e5 and takes the central space while White's d-pawn and knights " +
      "stay at home.",
  },

  "1.e4 d6 2.a4": {
    strategy:
      "Pushes a rook pawn instead of developing or taking the centre. The queenside space " +
      "gained is of no use yet, and Black gets ...Nf6 and ...e5 with a free hand.",
  },

  "1.e4 d6 2.b4": {
    strategy:
      "Grabs queenside space and prepares Bb2, but the pawn weakens c3 and c4 and the centre " +
      "goes to Black, who replies ...e5 and ...Nf6 with an easy game.",
  },

  "1.e4 d6 2.f3": {
    strategy:
      "Supports e4 and prepares Be3 and Qd2, but only makes sense after d4 and Nc3. Here it " +
      "takes f3 from the king's knight and loosens the e1-h4 diagonal for nothing while Black " +
      "develops freely.",
  },

  "1.e4 d6 2.h3": {
    strategy:
      "A prophylactic rook-pawn move against ...Bg4, made before any piece is out. It loses a " +
      "tempo and leaves the centre to Black, who plays ...Nf6 and ...e5 unhindered.",
  },

  "1.e4 d6 2.Na3": {
    strategy:
      "Places the knight on the rim, far from the centre and without supporting d4 or e4. " +
      "Black replies ...e5 or ...Nf6, and White needs another tempo to bring the knight to c4 " +
      "or c2.",
  },

  "1.e4 d6 2.Qe2": {
    strategy:
      "Brings the queen out early and blocks the f1-bishop, which delays kingside castling. " +
      "It protects e4 but neither develops a minor piece nor prepares d4, and Black plays " +
      "...Nf6 or ...e5 with an easy game.",
  },

  "1.e4 d6 2.Qf3": {
    strategy:
      "Brings the queen out early and takes f3 from the king's knight. Black develops with " +
      "...Nf6 and ...Nc6 and gains time against the queen with ...Bg4 or ...Nd4.",
  },

  "1.e4 d6 2.Qh5": {
    strategy:
      "Brings the queen out where 2...Nf6 attacks it and the e4-pawn at once, and ...g6 also " +
      "drives it back. With no real threat against f7, Black gains time for development.",
  },

  "1.e4 d6 2.Bd3": {
    strategy:
      "Puts the bishop in front of the d-pawn, so d4 is impossible until it moves again and " +
      "the c1-bishop stays shut in. Black takes the centre with ...e5 and ...Nf6 unhindered.",
  },

  "1.e4 d6 2.Bb5+": {
    strategy:
      "Gives a check that Black meets with ...c6, attacking the bishop and gaining a tempo, " +
      "or with ...Bd7 and a trade. White has used the bishop for no lasting gain.",
  },

  "1.e4 d6 2.Nh3": {
    strategy:
      "Heads for f4 or g5 from the rim, but 2...Bxh3 3.gxh3 doubles White's h-pawns and " +
      "breaks up the king's side at once.",
  },

  "1.e4 d6 2.Ne2": {
    strategy:
      "Develops the knight to a passive square where it blocks the f1-bishop and the queen's " +
      "path to e2, and covers d4 but not e5. Black takes space with ...e5 and develops ...Nf6 " +
      "against e4.",
  },

  "1.e4 d6 2.g4": {
    name: "Rat Defence: Spike Attack",
    strategy:
      "Weakens f3, h3 and the whole king's side while developing nothing, and ...Nf6 hits e4 " +
      "at once. Black follows with ...h6 and ...e5 against a loosened position.",
  },

  "1.e4 d6 2.h4": {
    name: "Rat Defence: Petruccioli Attack",
    strategy:
      "Pushes the rook pawn for a kingside attack that has nothing behind it. The centre and " +
      "development are ignored, g4 is weakened, and Black replies ...Nf6 or ...e5 with a free " +
      "hand.",
  },

  "1.e4 d6 2.Qg4": {
    strategy:
      "Hangs the queen: 2...Bxg4 wins it, because the c8-bishop sees g4 along the open " +
      "diagonal and nothing protects the square.",
  },

  "1.e4 d6 2.Ke2": {
    strategy:
      "Gives up castling for nothing, blocks the bishop and the queen, and leaves the king in " +
      "the centre where ...Bg4+ and ...e5 gain time. A lasting concession.",
  },

  "1.e4 d6 2.Ba6": {
    strategy:
      "Loses a bishop for nothing: 2...bxa6 or 2...Nxa6 takes it, and no White piece can " +
      "recapture on a6.",
  },

  "1.e4 d6 2.e5": {
    strategy:
      "Pushes the pawn where nothing protects it: 2...dxe5 wins it, and White has no " +
      "recapture and no lead in development in return.",
  },

  "1.e4 d6": {
    name: "Pirc Defence",
    background:
      "Named after the Slovenian grandmaster Vasja Pirc, who played it often from the late " +
      "1940s; in Russia it is often called the Ufimtsev Defence, after Anatoly Ufimtsev. It " +
      "made its World Championship debut in Game 17 of the 1972 match in Reykjavík, when " +
      "Bobby Fischer played it against Boris Spassky and drew.",
  },

  "1.e4 d6 2.d4 Nf6": {
    strategy:
      "Develops the knight, attacks e4 and keeps the pawn structure flexible. Black plans " +
      "...g6, ...Bg7 and ...O-O, letting White build a broad centre that ...c5 or ...e5 will " +
      "undermine later. The price is a cramped game against sharp set-ups such as the " +
      "Austrian Attack with f4.",
  },

  "1.e4 d6 2.d4 g6": {
    background:
      "The same position arises from 1.e4 g6 2.d4 d6, the Modern Defence, also known as the " +
      "Robatsch Defence. The tenth edition of Modern Chess Openings (1965) grouped the Pirc " +
      "and the Robatsch together as the Pirc–Robatsch Defence.",
    strategy:
      "Prepares ...Bg7 and ...O-O while keeping ...Nf6 in reserve, so the game can still turn " +
      "into a Pirc or stay a Modern set-up. White can reinforce d4 against the g7-bishop with " +
      "c3, or play Nc3, Be3, Qd2 and f3, and Black strikes back later with ...c5 or ...e5. " +
      "Delaying ...Nf6 puts less early pressure on e4.",
  },

  "1.e4 d6 2.d4 Nd7": {
    name: "Rat Defence: Antal Defence",
    strategy:
      "Covers e5, so 3.e5 would simply lose a pawn to ...dxe5 and ...Nxe5, and prepares ...e5 " +
      "with a Philidor-like structure. The knight blocks the c8-bishop and Black has taken no " +
      "space yet, so White develops freely with Nf3, Nc3 or Bc4 and keeps the larger share of " +
      "the centre.",
  },

  "1.e4 d6 2.d4 Nc6": {
    name: "Nimzowitsch Defence: Mikenas Variation",
    strategy:
      "Develops a piece and adds pressure on d4, but 3.d5 chases the knight: 3...Ne5 runs " +
      "into 4.f4 with another tempo, and 3...Nb8 wastes time. Black can regroup with ...Ng6 " +
      "or ...Ned7 and stays solid, yet White keeps an easy space advantage.",
  },

  "1.e4 d6 2.d4 e5": {
    name: "King's Pawn Game: Maróczy Defence",
    strategy:
      "Challenges the centre at once and heads for a Philidor-type pawn structure, which " +
      "arises after 3.Nf3. White can instead trade with 3.dxe5 dxe5 4.Qxd8+ Kxd8, leaving " +
      "Black without castling and White a little more comfortable. Sound, but less flexible " +
      "than ...Nf6.",
  },

  "1.e4 d6 2.d4 c5": {
    strategy:
      "Strikes at d4 in Sicilian fashion, and 3.Nf3 cxd4 4.Nxd4 Nf6 5.Nc3 transposes into an " +
      "Open Sicilian. White can avoid that with 3.d5, gaining space in a Benoni-like " +
      "structure, or with 3.dxc5, when 3...dxc5 4.Qxd8+ Kxd8 costs Black the right to castle. " +
      "Playable, but White chooses the structure.",
  },

  "1.e4 d6 2.d4 c6": {
    strategy:
      "Keeps open both a Pirc set-up with ...Nf6 and ...g6 and a Philidor-type one with " +
      "...Nbd7 and ...e5, and 3.Nc3 Nf6 reaches the Pribyl System, also called the Czech " +
      "Defence. The move develops nothing and gains no space, so White can reinforce the " +
      "centre with Nc3 and Be3 or expand with f4 at leisure. Sound, but slower than ...Nf6.",
  },

  "1.e4 d6 2.d4 e6": {
    strategy:
      "Sets up a compact small centre with pawns on d6 and e6 and prepares ...Nf6, ...Be7 and " +
      "...O-O, keeping ...c5 or ...e5 as later breaks. The c8-bishop stays shut in until " +
      "...b6 or ...e5, while White develops freely with Nc3, Nf3 and Bd3. Solid but passive.",
  },

  "1.e4 d6 2.d4 f5": {
    name: "Balogh Defence",
    background:
      "Named after János Balogh, a Hungarian International Master of correspondence chess, " +
      "who analysed it in the Wiener Schachzeitung in 1930. It is rarely seen today, although " +
      "Hikaru Nakamura beat the grandmaster Eugene Perelshteyn with it at the HB Global Chess " +
      "Challenge 2005.",
    strategy:
      "Hits e4 at once but weakens the kingside and the e6-square. Most books treat 3.exf5 " +
      "Bxf5 4.Qf3 Qc8 5.Bd3 as a refutation, though the International Correspondence Chess " +
      "Master Keith Hayward argues that it is risky but playable.",
  },

  "1.e4 d6 2.d4 d5": {
    strategy:
      "Spends a second move on the d-pawn and ends up in a Scandinavian-type position with " +
      "White already having d4. After 3.exd5 Qxd5 4.Nc3 the queen must move again, so White " +
      "is a clear tempo up.",
  },

  "1.e4 d6 2.d4 b6": {
    strategy:
      "Prepares ...Bb7 to pressure e4, but the pawn is easily defended with Nc3 and Bd3 while " +
      "White keeps the centre and Black lags in kingside development.",
  },

  "1.e4 d6 2.d4 a6": {
    strategy:
      "Waits to play ...b5 or to cover b5, but loses a tempo while White builds the centre " +
      "with Nc3, Nf3 or Bd3. It develops nothing and does not help the centre.",
  },

  "1.e4 d6 2.d4 a5": {
    strategy:
      "Gains queenside space and covers b4, but costs a tempo and gives up the a-pawn's " +
      "control of b5 for good. It does nothing for the centre or for development.",
  },

  "1.e4 d6 2.d4 h6": {
    strategy:
      "Prevents Bg5 but wastes a tempo; the rook pawn contributes nothing to the centre or to " +
      "development, so White continues with Nc3 and Nf3 undisturbed.",
  },

  "1.e4 d6 2.d4 h5": {
    strategy:
      "Pushes the rook pawn without developing or contesting the centre. It weakens g5 and g6 " +
      "and costs a tempo; White develops with Nc3 and Bg5, and ...h6 can no longer drive the " +
      "bishop away.",
  },

  "1.e4 d6 2.d4 f6": {
    strategy:
      "Weakens the e8–h5 diagonal and the e6-square and takes f6 away from the g8-knight. " +
      "Black has spent a move without developing a piece, while White continues with Nc3, Nf3 " +
      "and Bc4.",
  },

  "1.e4 d6 2.d4 Bd7": {
    strategy:
      "Develops the bishop passively to d7, where it takes the natural square of the " +
      "b8-knight and does nothing for the centre. White continues with Nc3 and Nf3 or Be3 " +
      "against no opposition.",
  },

  "1.e4 d6 2.d4 Be6": {
    strategy:
      "Puts the bishop on a square that 3.d5 attacks at once, gaining a tempo and space. " +
      "After ...Bd7 or ...Bc8 White has a lead in development and a cramped opponent.",
  },

  "1.e4 d6 2.d4 Qd7": {
    strategy:
      "Brings the queen out early to d7, where it shuts in the c8-bishop and takes the " +
      "b8-knight's natural square. Black has spent a move without developing a minor piece, " +
      "and White continues with Nc3 and Nf3 unhindered.",
  },

  "1.e4 d6 2.d4 Na6": {
    strategy:
      "Puts the knight on the rim, where it supports ...c5 or heads for c7 but is slow and " +
      "invites Bxa6, which doubles the a-pawns after ...bxa6. White develops freely and keeps " +
      "the centre.",
  },

  "1.e4 d6 2.d4 Nh6": {
    strategy:
      "Puts the knight on the rim aiming at f5 and g4, but Bxh6 gxh6 would double Black's " +
      "kingside pawns. The knight does little for the centre while White keeps developing.",
  },

  "1.e4 d6 2.d4 Kd7": {
    strategy:
      "Forfeits castling, blocks the queen, the c8-bishop and the b8-knight's natural square, " +
      "and leaves the king exposed in the centre where White can open lines with a lead in " +
      "development.",
  },

  "1.e4 d6 2.d4 b5": {
    strategy:
      "Hangs the b-pawn to Bxb5+, since nothing defends it. White is a clean pawn up and " +
      "Black has no clear compensation.",
  },

  "1.e4 d6 2.d4 g5": {
    strategy:
      "Hangs the g-pawn to Bxg5, because the queen cannot recapture with the e7-pawn blocking " +
      "its diagonal. The kingside is also loosened for good.",
  },

  "1.e4 d6 2.d4 Bf5": {
    strategy: "Hangs the bishop: exf5 wins a piece for nothing, since nothing defends f5.",
  },

  "1.e4 d6 2.d4 Bg4": {
    strategy:
      "Hangs the bishop: the white queen takes it on g4 along the open d1–h5 diagonal and " +
      "nothing defends the square.",
  },

  "1.e4 d6 2.d4 Bh3": {
    strategy:
      "Gives away the bishop for nothing: the g2-pawn simply takes it with gxh3 and Black has " +
      "no follow-up.",
  },

  "1.e4 d6 2.Nf3 Nf6": {
    strategy:
      "Attacks the e-pawn at once and develops a piece without committing another pawn, so " +
      "...g6, ...c5 and ...e5 all stay available. White usually defends with 3.Nc3, less " +
      "often with 3.d3, and after 3.Nc3 g6 4.d4 Bg7 the Pirc set-ups arise, for example the " +
      "Classical System with Be2 and castling. Black concedes central space and strikes at " +
      "the centre later with ...c5 or ...e5.",
  },

  "1.e4 d6 2.Nf3 c5": {
    strategy:
      "Takes control of d4 and invites the Open Sicilian: after 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 " +
      "Black chooses between the Najdorf, Classical, Dragon and Scheveningen set-ups. Black " +
      "gets a central pawn majority and the half-open c-file, White a lead in development and " +
      "more space. White can also avoid the main lines with 3.Bb5+ or 3.c3.",
  },

  "1.e4 d6 2.Nf3 e5": {
    strategy:
      "Claims a share of the centre and reaches a Philidor structure. Against 3.d4 Black " +
      "either gives up the centre with ...exd4, followed by ...Nf6, ...Be7 and castling, or " +
      "holds e5 with ...Nd7, ...Be7 and ...c6. The set-up is compact and sound but passive: " +
      "the f8-bishop has only e7, and White keeps more space and the easier play.",
  },

  "1.e4 d6 2.Nf3 g6": {
    strategy:
      "Prepares ...Bg7 and delays ...Nf6, which keeps the choice between a Pirc set-up (3.d4 " +
      "Nf6 4.Nc3 Bg7) and a Modern one. Black accepts White's pawn centre and plans to " +
      "undermine it with ...c5 or ...e5. The cost is some space, and since e4 is not attacked " +
      "White can choose his own moment for d4, Nc3 or Bc4.",
  },

  "1.e4 d6 2.Nf3 Nd7": {
    strategy:
      "Supports a later ...e5 and keeps ...Ngf6 available, aiming for a Philidor-type set-up " +
      "after 3.d4 e5 or a Pirc-type one after 3.d4 Ngf6 4.Nc3 g6. The knight blocks the " +
      "c8-bishop and the queen, and White decides which structure arises. Sound but cramped.",
  },

  "1.e4 d6 2.Nf3 Nc6": {
    name: "Nimzowitsch Defence: Williams Variation",
    background:
      "The same position arises from 1.e4 Nc6 2.Nf3 d6, the Williams Variation of the " +
      "Nimzowitsch Defence, which is named after Aron Nimzowitsch. The sharp Keene Attack, " +
      "3.d4 Bg4 4.d5 Ne5 5.Nxe5, sacrifices the queen, which White can win back after " +
      "5...Bxd1; it is named after Raymond Keene, who played it in a 1964 game against E. " +
      "Fielder.",
    strategy:
      "Develops the knight against d4 and e5, but it blocks the c-pawn and can be driven away " +
      "by d4-d5. After 3.d4 Black usually pins with ...Bg4 or develops with ...Nf6, and Bb5 " +
      "with Bxc6+ can leave doubled c-pawns against the bishop pair in a roughly equal " +
      "position. Solid, but less dynamic than the main Pirc set-ups.",
  },

  "1.e4 d6 2.Nf3 Bg4": {
    strategy:
      "Pins the knight to the queen before White has built a centre, with ...Nf6 and ...Nc6 " +
      "against d4 or ...Bxf3 to follow. White breaks the pin with Be2 or questions the bishop " +
      "with h3, and after ...Bxf3 Qxf3 White has the bishop pair and a lead in development. " +
      "Black gets quick piece play but often gives up a bishop for a knight.",
  },

  "1.e4 d6 2.Nf3 c6": {
    strategy:
      "Covers d5 and b5 and opens the d8-a5 diagonal for the queen, with ...Nf6 and then " +
      "...Qc7 and ...e5, or ...b5, to follow. The pawn takes c6 from the queen's knight and " +
      "does not contest d4, so White builds a centre with d4 and Nc3 or c4; Black's structure " +
      "is solid but passive.",
  },

  "1.e4 d6 2.Nf3 e6": {
    strategy:
      "Opens the f8-bishop and prepares ...Nf6, ...Be7 and castling, with ...c5 as a later " +
      "break. After 3.d4 White has the larger centre, and the e6-pawn blocks the c8-bishop's " +
      "diagonal towards h3, so Black stands solid but passive.",
  },

  "1.e4 d6 2.Nf3 b6": {
    strategy:
      "Prepares the fianchetto ...Bb7 to press on e4, with ...Nf6 and ...e6 to follow. The " +
      "flank set-up lets White take the centre with 3.d4, and Nc3 or Bd3 protects e4 easily, " +
      "so the b7-bishop meets a well-guarded pawn.",
  },

  "1.e4 d6 2.Nf3 d5": {
    strategy:
      "Moves the d-pawn a second time: after 3.exd5 Qxd5 4.Nc3 the queen is chased with gain " +
      "of time, and Black has a Scandinavian Defence a full tempo down.",
  },

  "1.e4 d6 2.Nf3 f5": {
    strategy:
      "Strikes at e4 but loosens the e8-h5 diagonal in front of the king. After 3.exf5 Bxf5 " +
      "4.d4 White takes the centre, Nh4 can chase the bishop for the bishop pair, and the " +
      "e6-square stays weak.",
  },

  "1.e4 d6 2.Nf3 f6": {
    strategy:
      "Takes f6 from the king's knight and weakens the e8-h5 diagonal and the e6-square " +
      "without helping development. White continues with d4 and Nc3, while the g8-knight is " +
      "left with h6 as its only square.",
  },

  "1.e4 d6 2.Nf3 Bd7": {
    strategy:
      "Develops the bishop to a passive square where it takes d7 from the b8-knight and puts " +
      "no pressure on e4. White builds a centre with d4 and Nc3 unopposed.",
  },

  "1.e4 d6 2.Nf3 Be6": {
    strategy:
      "Brings the bishop out before the knights to a square where 3.Ng5 attacks it at once " +
      "and d4-d5 can chase it with gain of time. It also blocks the e-pawn.",
  },

  "1.e4 d6 2.Nf3 Qd7": {
    strategy:
      "Brings the queen out where it blocks the c8-bishop and the d7-square for the knight, " +
      "with no threat behind it. White develops freely with d4 and Nc3, and the queen will " +
      "have to move again to free the pieces.",
  },

  "1.e4 d6 2.Nf3 Nh6": {
    strategy:
      "Puts the knight on the rim, where the e4-pawn covers f5 and the knight does nothing " +
      "against the centre. Once d4 opens the c1-bishop's diagonal, Bxh6 gxh6 can wreck " +
      "Black's kingside pawns.",
  },

  "1.e4 d6 2.Nf3 Na6": {
    strategy:
      "Puts the knight on the rim, where it covers c5 and c7 but no central square and does " +
      "nothing against e4. White takes the centre with d4 and Nc3, while Black still needs " +
      "...Nf6 and ...g6 or ...e5.",
  },

  "1.e4 d6 2.Nf3 a6": {
    strategy:
      "A rim pawn move that develops nothing and fights nothing in the centre. White plays d4 " +
      "and Nc3 with a free hand, while Black still needs ...Nf6 and ...g6 or ...e6.",
  },

  "1.e4 d6 2.Nf3 a5": {
    strategy:
      "Gains queenside space and takes b4 from White, but develops nothing and does not touch " +
      "the centre. White simply plays d4 and Nc3, and b5 is weakened for good, since only " +
      "...c6 can still cover it.",
  },

  "1.e4 d6 2.Nf3 h6": {
    strategy:
      "Prevents Bg5 and Ng5 but spends a tempo on a precaution that is not yet needed. " +
      "Nothing is developed, and White takes the centre with d4 and Nc3.",
  },

  "1.e4 d6 2.Nf3 h5": {
    strategy:
      "Weakens g5 and the g6-square for no purpose. It develops nothing and does not touch " +
      "the centre, and White simply plays d4 and Nc3.",
  },

  "1.e4 d6 2.Nf3 b5": {
    strategy:
      "Loses a pawn to 3.Bxb5+, which comes with check, and nothing can take the bishop back. " +
      "Black has no development or attack to show for it.",
  },

  "1.e4 d6 2.Nf3 g5": {
    strategy:
      "Hangs a pawn: 3.Nxg5 wins it, as nothing guards g5, and the knight then eyes f7. The " +
      "advance also weakens the kingside for no return.",
  },

  "1.e4 d6 2.Nf3 Kd7": {
    strategy:
      "Gives up castling for nothing and blocks the c8-bishop and the queen. White develops " +
      "with d4 and Nc3 or Bc4 while the black king stands in the centre.",
  },

  "1.e4 d6 2.Nf3 Bf5": {
    strategy:
      "Loses a piece to 3.exf5, as nothing can recapture on f5 and the e-pawn already attacks " +
      "that square.",
  },

  "1.e4 d6 2.Nf3 Bh3": {
    strategy:
      "Hangs the bishop: 3.gxh3 wins a piece, and the doubled h-pawns and the open g-file are " +
      "no compensation for it.",
  },

  "1.e4 d6 2.Nc3 Nf6": {
    strategy:
      "Develops with a hit on e4 and keeps every Pirc set-up available. After 3.d4 g6 Black " +
      "reaches the main line with ...Bg7 and ...O-O, then challenges the centre with ...c5 or " +
      "...e5. If White avoids d4, for instance with 3.f4 or 3.Bc4, Black can still choose " +
      "between ...g6 and ...e5 without conceding anything.",
  },

  "1.e4 d6 2.Nc3 g6": {
    strategy:
      "Prepares the fianchetto ...Bg7 before committing the king's knight, which keeps both " +
      "...e5 and ...c5 in reserve; after 3.d4 Bg7 and a later ...Nf6 the position usually " +
      "transposes into the Pirc. The delay lets White set up a broad centre with f4 or Be3 " +
      "and Qd2, and Black has to counter it with ...c5 or ...e5 in time.",
  },

  "1.e4 d6 2.Nc3 c5": {
    strategy:
      "Turns the game into a Sicilian with ...d6 already played. After 3.Nf3 Black chooses " +
      "...Nc6 or ...Nf6 and answers 4.d4 with ...cxd4, reaching the usual Open Sicilian " +
      "structure with queenside counterplay. White can instead choose the Closed Sicilian " +
      "with 3.g3 or 3.f4, against which ...Nc6 and ...g6 are the standard set-up.",
  },

  "1.e4 d6 2.Nc3 e5": {
    strategy:
      "Takes a share of the centre at once and heads for a Philidor set-up: after 3.Nf3 Black " +
      "develops with ...Nbd7 or ...Nf6, then ...Be7 and ...O-O behind a solid pawn chain. The " +
      "price is a slightly cramped, passive position; White can also play 3.f4 or 3.Bc4 to " +
      "steer into Vienna-type play.",
  },

  "1.e4 d6 2.Nc3 c6": {
    strategy:
      "Keeps ...Nf6 in hand: after 3.d4 Nf6 the game reaches the Czech Defence of the Pirc, " +
      "where Black follows up with ...Qa5 and ...e5 or expands with ...b5. The pawn takes c6 " +
      "from the queen's knight and does nothing against e4 yet, so White gets more space and " +
      "a free choice of set-up.",
  },

  "1.e4 d6 2.Nc3 Nd7": {
    strategy:
      "Aims for ...e5 and ...Ngf6 in a Hanham-style set-up. The knight blocks the c8-bishop " +
      "and leaves Black short of space, and White can take the centre at once with 3.d4 or " +
      "3.f4. Sound enough, but more passive than ...Nf6.",
  },

  "1.e4 d6 2.Nc3 Nc6": {
    strategy:
      "Develops and eyes d4 and e5, preparing ...e5 or ...Nf6. The knight blocks the c-pawn " +
      "and invites 3.d4 e5 4.d5, which gains space with tempo and drives the knight away, " +
      "usually to e7. Playable, but White's centre comes easily.",
  },

  "1.e4 d6 2.Nc3 e6": {
    strategy:
      "Prepares ...Nf6 and ...Be7 in a solid but slow set-up. The pawn shuts in the " +
      "c8-bishop, and after 3.d4 d5 Black reaches a French Defence position a full tempo " +
      "down, since the d-pawn has moved twice.",
  },

  "1.e4 d6 2.Nc3 b6": {
    strategy:
      "Plans ...Bb7 against e4 and a compact hypermodern set-up with ...Nf6 and ...e6. Black " +
      "spends time on the queenside while White builds a big centre with d4, Bd3 and Nf3, so " +
      "the set-up is sound but a little slow.",
  },

  "1.e4 d6 2.Nc3 Na6": {
    strategy:
      "Puts the knight on the rim, hoping for ...c6 and ...Nc7. That route costs time, the " +
      "knight does nothing for the centre in the meantime, and White simply plays d4 and Nf3.",
  },

  "1.e4 d6 2.Nc3 Bd7": {
    strategy:
      "Passive development that takes d7 from the queen's knight and puts no pressure on e4. " +
      "White takes the centre with d4 and Nf3, and the bishop has little to do on d7.",
  },

  "1.e4 d6 2.Nc3 Be6": {
    strategy:
      "Brings the bishop out before the knights and blocks the e-pawn. After 3.d4 the bishop " +
      "is a target: d5, or f4 and f5, drives it away with gain of time.",
  },

  "1.e4 d6 2.Nc3 Qd7": {
    strategy:
      "Blocks the c8-bishop and takes d7 from the queen's knight, so Black develops " +
      "awkwardly. White develops freely with d4 and Nf3 and builds a big centre.",
  },

  "1.e4 d6 2.Nc3 Nh6": {
    strategy:
      "Puts the knight on the rim, where f5 is covered by the e4-pawn. After 3.d4 White " +
      "threatens Bxh6, which wrecks Black's kingside pawns after ...gxh6.",
  },

  "1.e4 d6 2.Nc3 a6": {
    strategy:
      "A slow waiting move that prepares ...b5 but develops nothing. White takes the centre " +
      "with d4 and Nf3, or f4 with a broad pawn front.",
  },

  "1.e4 d6 2.Nc3 a5": {
    strategy:
      "Stops b4 but weakens b5, where a white knight becomes annoying, and helps neither " +
      "development nor the centre. White continues with d4 and Nf3.",
  },

  "1.e4 d6 2.Nc3 f6": {
    strategy:
      "Takes f6 from the king's knight, weakens e6 and the e8-h5 diagonal, and develops " +
      "nothing. White plays d4 and Nf3 or Bc4 against a clumsy set-up.",
  },

  "1.e4 d6 2.Nc3 f5": {
    strategy:
      "A Dutch-style strike at e4 that comes too early: after 3.exf5 Bxf5 the e8-h5 diagonal " +
      "and e6 stay weak, and 4.Qf3 hits f5 and b7 at once, which already costs Black time.",
  },

  "1.e4 d6 2.Nc3 h6": {
    strategy:
      "Prophylaxis against Bg5 that costs a tempo before Black has developed a piece. White " +
      "takes the centre with d4 and Nf3 or f4, and Black has to catch up in development.",
  },

  "1.e4 d6 2.Nc3 h5": {
    strategy:
      "Weakens g5 and the kingside without developing anything or influencing the centre. " +
      "White continues d4, Nf3 and Bg5 with an easy lead.",
  },

  "1.e4 d6 2.Nc3 Bf5": {
    strategy: "Hangs the bishop: 3.exf5 wins a whole piece, because nothing recaptures on f5.",
  },

  "1.e4 d6 2.Nc3 Bg4": {
    strategy:
      "Hangs the bishop to 3.Qxg4, since the d1-g4 diagonal is open. Black loses a piece for " +
      "nothing.",
  },

  "1.e4 d6 2.Nc3 Bh3": {
    strategy:
      "Loses the bishop to 3.gxh3 or 3.Nxh3, with nothing in return. The g2-pawn and the " +
      "knight on g1 both guard h3.",
  },

  "1.e4 d6 2.Nc3 Kd7": {
    strategy:
      "Gives up castling and walks the king into the open centre for no purpose. White plays " +
      "d4, Nf3 and Bb5+ or Bc4 with an easy attack on the exposed king.",
  },

  "1.e4 d6 2.Nc3 b5": {
    strategy:
      "Loses a pawn: 3.Nxb5 or 3.Bxb5+ takes it, since nothing defends b5, and the half-open " +
      "b-file is little compensation.",
  },

  "1.e4 d6 2.Nc3 g5": {
    strategy:
      "Weakens f5, h5 and the whole kingside for good: after 3.d4 the c1-bishop attacks the " +
      "g5-pawn, and ...h6 is met by h4, which hits it again. Black develops nothing in the " +
      "meantime.",
  },

  "1.e4 d6 2.Nc3 d5": {
    strategy:
      "Moves the d-pawn a second time and loses a pawn: after 3.exd5 the pawn on d5 is " +
      "guarded by Nc3, so 3...Qxd5?? 4.Nxd5 drops the queen, and after 3...Nf6 4.Bc4 White " +
      "can keep the extra pawn.",
  },
};
