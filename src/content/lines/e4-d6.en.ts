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
};
