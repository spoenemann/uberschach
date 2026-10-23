import type { OpeningTexts } from "../book.ts";

// English prose for d4-f5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.d4 f5 2.c4": {
    strategy:
      "Gains space and adds control of d5, preparing Nc3 and Nf3 with e4 as a later central " +
      "break, while the choice between a kingside fianchetto and quick development stays " +
      "open. After ...Nf6 with ...e6 or ...g6 the usual Dutch structures arise, with White in " +
      "a Queen's Gambit-style set-up. Once ...e6 is played, the early c-pawn lets Black " +
      "develop the f8-bishop with check on b4.",
  },

  "1.d4 f5 2.g3": {
    name: "Dutch Defence: Fianchetto Attack",
    background:
      "The traditional move order against the Dutch starts with 2.c4, but White more commonly " +
      "begins with 2.g3.",
    strategy:
      "Prepares Bg2 to fight for e4 along the long diagonal, with Nf3, O-O and c4 to follow. " +
      "The same set-up meets the Leningrad, the Stonewall and the Classical, so White commits " +
      "to little, and castling before c4 takes away the check on b4 that an early c4 allows. " +
      "The centre is not yet occupied, and Black chooses freely between ...Nf6 with ...e6 and " +
      "...g6.",
  },

  "1.d4 f5 2.Nf3": {
    strategy:
      "A flexible developing move that covers e5 and supports d4, keeping open the choice " +
      "between g3 with Bg2, c4 with Nc3, or Bf4 with e3. The Leningrad, the Stonewall and the " +
      "Classical set-ups all remain possible for Black, so White can adapt the plan to " +
      "Black's choice.",
  },

  "1.d4 f5 2.Nc3": {
    name: "Dutch Defence: Raphael Variation",
    strategy:
      "Develops with pressure on e4 and d5 and prepares Bg5, the point of the line after " +
      "2...Nf6 or 2...d5; the knight also supports a later e4. White keeps e3 and Nf3 in " +
      "reserve. The drawback is that the knight blocks the c-pawn, so a Queen's Gambit-style " +
      "c4 is ruled out for now.",
  },

  "1.d4 f5 2.b3": {
    strategy:
      "Prepares Bb2, which backs up d4 and opens up on the long diagonal once the d-pawn " +
      "advances or is exchanged, while c4, e3 and Nf3 stay available. It is sound but slower " +
      "than 2.Nf3 or 2.g3, and Black builds the usual Dutch structure with ...Nf6 and ...e6 " +
      "undisturbed.",
  },

  "1.d4 f5 2.e3": {
    strategy:
      "Opens the way for the f1-bishop to d3, where it eyes f5, and prepares Nf3 and c4. It " +
      "is sound but passive, since the pawn shuts in the c1-bishop, and Black develops with " +
      "...Nf6 and ...e6 and chooses a Stonewall or a Classical set-up at leisure.",
  },

  "1.d4 f5 2.e4": {
    name: "Dutch Defence: Staunton Gambit",
    background:
      "Named after Howard Staunton, who played it against Bernhard Horwitz in London in 1846. " +
      "Once a feared weapon for White, it is rarely played today, since defensive techniques " +
      "have been developed to neutralise it.",
    strategy:
      "Sacrifices a pawn for quick development and play against Black's kingside, weakened " +
      "along the e8-h5 diagonal. After 2...fxe4 3.Nc3 Nf6 4.Bg5 the natural 4...d5? loses a " +
      "pawn to 5.Bxf6 exf6 6.Qh5+ g6 7.Qxd5, while 4...Nc6 develops quickly and gives the " +
      "pawn back only if needed. With accurate play the gambit offers White equality at best.",
  },

  "1.d4 f5 2.h3": {
    name: "Dutch Defence: Korchnoi Attack",
    background:
      "Carl Mayet introduced the gambit with h3 and g4 against von der Lasa in 1839, and von " +
      "der Lasa later published analysis of it in the first edition of the Handbuch des " +
      "Schachspiels. Viktor Korchnoi reintroduced the line into tournament practice in " +
      "Korchnoi–Känel, Biel 1979.",
    strategy:
      "Prepares g4 to break up Black's f5 pawn, a gambit-like try instead of normal " +
      "development. Black can decline with 2...Nf6 3.g4 d5 and has a good game, so the line " +
      "works as a surprise weapon rather than a recommended choice.",
  },

  "1.d4 f5 2.Bf4": {
    name: "London System",
    background:
      "The London System takes its name from the London tournament of 1922, where it appeared " +
      "in seven games, among them games by Capablanca, Alekhine and Rubinstein. James Mason " +
      "was the first master-level player to use it regularly, including at Vienna 1882, " +
      "London 1883 and New York 1889.",
    strategy:
      "Develops the bishop outside the pawn chain, covering e5 and preparing e3, Nf3 and Bd3 " +
      "or c4. It is sound but quiet and not the most testing, since Black can set up with " +
      "...Nf6, ...e6 and ...Be7, or with a Stonewall, without difficulty.",
  },

  "1.d4 f5 2.Bg5": {
    name: "Dutch Defence: Hopton Attack",
    strategy:
      "Eyes e7 along the d8-h4 diagonal and plans Bxf6 after ...Nf6, doubling Black's f-pawns " +
      "at the cost of the bishop pair. Black equalises with care, for example with 2...g6, " +
      "while the careless 2...h6 3.Bh4 g5 4.Bg3 f4 5.e3 fxg3?? allows 6.Qh5#.",
  },

  "1.d4 f5 2.Nh3": {
    strategy:
      "Heads for f4 and possibly d3, where the knight helps control e5, and keeps f3 free so " +
      "that a later Bg2 bears on e4 unobstructed. It is sound but rare, since the knight " +
      "starts on the rim and does nothing for the centre yet, and Black develops with ...Nf6 " +
      "and ...e6.",
  },

  "1.d4 f5 2.a3": {
    strategy:
      "Prepares b4 and a queenside space grab, but spends a tempo while Black develops with " +
      "...Nf6 and ...e6. It does nothing for the centre or for the fight over e4.",
  },

  "1.d4 f5 2.a4": {
    strategy:
      "A slow rook-pawn move that neither develops a piece nor contests e4. It weakens b4 and " +
      "leaves Black free to complete ...Nf6 and ...e6 unhindered.",
  },

  "1.d4 f5 2.b4": {
    strategy:
      "Grabs queenside space and prepares Bb2, but the pawn is loose: after ...e6 the " +
      "f8-bishop attacks it, and White must spend another tempo defending it. Meanwhile Black " +
      "develops with ...Nf6 while White's centre and kingside wait.",
  },

  "1.d4 f5 2.c3": {
    strategy:
      "Supports d4 and opens the d1-a4 diagonal for the queen, but takes c3 from the queen's " +
      "knight and does nothing to contest e4. White has spent a tempo on a modest move, and " +
      "Black develops freely with ...Nf6 and ...e6.",
  },

  "1.d4 f5 2.f3": {
    strategy:
      "Prepares e4, but weakens e3 and the g1-a7 diagonal and takes f3 from the king's " +
      "knight. After 2...d5 or 2...Nf6 Black develops normally, and White has loosened the " +
      "kingside for little.",
  },

  "1.d4 f5 2.f4": {
    strategy:
      "Mirrors Black's pawn and controls e5, but leaves e3 and e4 without pawn cover for good " +
      "and weakens the e1-h4 diagonal. Black develops with ...Nf6 and ...e6, with e4 as a " +
      "natural square for the knight, and gets a comfortable game.",
  },

  "1.d4 f5 2.g4": {
    name: "Dutch Defence: Krejcik Gambit",
    background:
      "Named after Josef Krejcik (1885–1957), an Austrian chess master, problemist and " +
      "journalist, who is also remembered for the game known as “The Immortal of Dr. " +
      "Krejcik”, played against Johann Berger at Carlsbad in 1911.",
    strategy:
      "Offers the g-pawn to lure the f5-pawn away from its control of e4. After 2...fxg4 " +
      "Black can follow with ...d5, which keeps e4 under control and lets the c8-bishop guard " +
      "g4, and White has trouble winning the pawn back.",
  },

  "1.d4 f5 2.h4": {
    strategy:
      "Spends a tempo on a flank pawn that does nothing for the centre or development. It " +
      "weakens g4 and the kingside, and Black simply continues with ...Nf6 and ...e6.",
  },

  "1.d4 f5 2.Nd2": {
    strategy:
      "Prepares e4 with knight support, but blocks the c1-bishop and the queen, and the " +
      "knight covers less of the centre than from c3. Black develops with ...Nf6 and ...e6, " +
      "and White's set-up is clumsier than after 2.Nf3.",
  },

  "1.d4 f5 2.Na3": {
    strategy:
      "A rim knight heading for c4 or b5, out of play for now and unable to support e4 or the " +
      "centre. Black develops naturally with ...Nf6 and ...e6.",
  },

  "1.d4 f5 2.Bd2": {
    strategy:
      "Develops passively, blocks the queen's knight from d2 and does not fight for e4. Black " +
      "continues with ...Nf6 and ...e6 without difficulty.",
  },

  "1.d4 f5 2.Be3": {
    strategy:
      "Develops the bishop but blocks the e-pawn, which makes the usual e3 and Nf3 set-up " +
      "awkward. Black replies with ...Nf6 and ...e6, and White has gained nothing over a " +
      "quiet Nf3.",
  },

  "1.d4 f5 2.Qd2": {
    strategy:
      "Shuts in the c1-bishop and spends a tempo on an early queen move, with no purpose that " +
      "a normal developing move would not serve better.",
  },

  "1.d4 f5 2.Qd3": {
    name: "Dutch Defence: Alapin Variation",
    background:
      "Named after Semyon Alapin (1856–1923), a Russian player and openings analyst who also " +
      "gave his name to variations of the Sicilian, French and Caro-Kann defences. It is also " +
      "known as the Manhattan Variation.",
    strategy:
      "Attacks f5 along the b1-h7 diagonal and prepares g4 or e4 against the pawn, but Black " +
      "covers it with ...e6, ...d6 or ...g6. The early queen move then costs time and blocks " +
      "the f1-bishop, while Black develops with ...Nf6.",
  },

  "1.d4 f5 2.d5": {
    strategy:
      "Gains space at once, but the unsupported pawn becomes a target: Black attacks it with " +
      "...Nf6 and ...c6 or challenges it with ...e6. The advance also gives up the d-pawn's " +
      "control of e5 and c5.",
  },

  "1.d4 f5 2.Bh6": {
    strategy: "Hangs the bishop to 2...gxh6, and White gets nothing in return.",
  },

  "1.d4 f5 2.Kd2": {
    strategy:
      "Forfeits castling and blocks the queen and the c1-bishop. The king stays in the centre " +
      "for no gain, and Black develops freely.",
  },

  "1.d4 f5": {
    name: "Dutch Defence",
    background:
      "Elias Stein, an Alsatian who settled in The Hague, recommended it as the best reply to " +
      "1.d4 in his 1789 book Nouvel essai sur le Jeu des échecs. In the 1951 World " +
      "Championship match both Mikhail Botvinnik and his challenger David Bronstein played " +
      "it.",
  },

  "1.d4 f5 2.c4 Nf6": {
    name: "Dutch Defence: Normal Variation",
    strategy:
      "Develops a piece and controls e4 and d5, which makes White's central break e4 harder. " +
      "The move keeps every Dutch set-up open: ...e6 for the Stonewall or Classical, or ...g6 " +
      "and ...Bg7 for the Leningrad. White typically continues with 3.Nc3, which supports e4, " +
      "or with 3.g3 and Bg2, which bears on e4 from the long diagonal.",
  },

  "1.d4 f5 2.c4 e6": {
    strategy:
      "Opens the f8-bishop, which can now also develop with check on b4, and prepares ...Nf6, " +
      "...Be7 and early castling, or ...d5 for the Stonewall. The pawn hems in the c8-bishop, " +
      "and with the knight still on g8 White can try the gambit 3.e4, but Black keeps a " +
      "solid, flexible game.",
  },

  "1.d4 f5 2.c4 g6": {
    strategy:
      "Heads for the Leningrad set-up with ...Bg7, ...Nf6, ...d6 and quick castling, while " +
      "keeping a second plan: after 3.Nc3 Black can play ...Nh6, delay castling and fight for " +
      "the centre with ...c6 and ...d5. With no knight on f6, White can then play e4, and " +
      "after ...fxe4 Nxe4 the game turns semi-open, with Black keeping an extra centre pawn.",
  },

  "1.d4 f5 2.c4 d6": {
    strategy:
      "Prepares ...e5 and keeps ...Nf6 with ...g6 or ...e6 for later, but commits the d-pawn " +
      "before the knight is out. An immediate ...e5 allows dxe5 dxe5 Qxd8+ Kxd8, which takes " +
      "away Black's right to castle.",
  },

  "1.d4 f5 2.c4 c6": {
    strategy:
      "Prepares ...d5, backed by the c-pawn, for a Slav-like Stonewall set-up. It is slow, " +
      "though: the knight loses c6, ...Nf6 and ...e6 are still to come, and White develops " +
      "freely with Nc3 and Nf3 or g3.",
  },

  "1.d4 f5 2.c4 b6": {
    strategy:
      "Prepares ...Bb7, which joins the f-pawn in controlling e4 from the long diagonal, an " +
      "idea borrowed from the Queen's Indian. It is slow and leaves the centre to White, who " +
      "develops with Nc3 and Nf3 and can blunt the bishop with d5.",
  },

  "1.d4 f5 2.c4 c5": {
    strategy:
      "Strikes at d4 before any piece is out. White can answer 3.d5 for a Benoni-like " +
      "structure in which Black's f-pawn has already moved, or 3.dxc5, when Black spends time " +
      "regaining the pawn with ...e6 and ...Bxc5 or with ...Qa5+.",
  },

  "1.d4 f5 2.c4 Nc6": {
    strategy:
      "Hits d4, but 3.d5 drives the knight away: after 3...Ne5, 4.Qd4 attacks it and guards " +
      "c4, with f4 to follow, so Black loses time while White gains space in the centre.",
  },

  "1.d4 f5 2.c4 d5": {
    strategy:
      "Challenges the centre at once, but 3.cxd5 makes Black spend time regaining the pawn, " +
      "and 3...Qxd5 is met by 4.Nc3 with tempo. Together with ...f5, the move leaves e5 and " +
      "e6 without pawn cover.",
  },

  "1.d4 f5 2.c4 e5": {
    strategy:
      "Offers a pawn to break up the centre, but 3.dxe5 simply takes it. Black can aim ...Nc6 " +
      "and ...Qe7 at e5, yet White defends it with Nf3 and Bf4, and with ...f5 already played " +
      "Black's kingside is loosened for little.",
  },

  "1.d4 f5 2.c4 Na6": {
    strategy:
      "Puts the knight on the rim, where its only forward squares are b4 and c5, far from the " +
      "e4 and d5 squares Black needs to contest. The tempo is better spent on ...Nf6 or " +
      "...e6.",
  },

  "1.d4 f5 2.c4 Nh6": {
    strategy:
      "Heads for f7 to support ...e5, but the knight is exposed on the rim: 3.Bxh6 gxh6 " +
      "leaves Black with doubled, isolated h-pawns and a broken kingside.",
  },

  "1.d4 f5 2.c4 a6": {
    strategy:
      "A waiting move that controls b5 and may prepare ...b5 against c4, but it develops " +
      "nothing while ...Nf6 and ...e6 are still undone and White already holds the pawn " +
      "centre.",
  },

  "1.d4 f5 2.c4 a5": {
    strategy:
      "Gains a little queenside space and secures b4 for a knight on a6, but it is a tempo " +
      "spent on the flank while the kingside pieces stay at home. White develops with Nc3 and " +
      "Nf3 and prepares e4.",
  },

  "1.d4 f5 2.c4 h6": {
    strategy:
      "Takes g5 from White's bishop, but this slow prophylaxis leaves the centre to White, " +
      "who plays Nc3 and e4 while Black's knights are still at home.",
  },

  "1.d4 f5 2.c4 h5": {
    strategy:
      "Takes g4 from White's pieces but develops nothing, and with the f-pawn already gone " +
      "from f7 it leaves g5 and g6 without pawn cover for good.",
  },

  "1.d4 f5 2.c4 Kf7": {
    strategy:
      "Gives up the right to castle for good and develops nothing. On f7 the king stands on " +
      "the a2-g8 diagonal and can be checked by a knight from e5 or g5.",
  },

  "1.d4 f5 2.c4 b5": {
    strategy:
      "Offers a pawn for nothing concrete: after 3.cxb5 Black has no developed pieces to use " +
      "the open lines, and White keeps the d4 centre and an extra pawn.",
  },

  "1.d4 f5 2.c4 g5": {
    strategy:
      "Loses a pawn at once: 3.Bxg5 wins it, since nothing protects g5 and Black cannot " +
      "recapture. The kingside is also weakened for good.",
  },

  "1.d4 f5 2.c4 f4": {
    strategy:
      "Gains space but leaves the pawn undefended: 3.Bxf4 wins it along the open c1-h6 " +
      "diagonal, and Black has no developed piece to offer compensation.",
  },

  "1.d4 f5 2.g3 Nf6": {
    strategy:
      "Develops the knight, covers e4 and d5 and keeps every Dutch set-up open: ...e6 with " +
      "...d5 for the Stonewall or with ...d6 and ...Be7 for the Classical, or ...g6 and " +
      "...Bg7 for the Leningrad. After 3.Bg2 Black chooses between 3...e6 and 3...g6, while " +
      "White keeps the choice between Nf3, Nh3 and c4.",
  },

  "1.d4 f5 2.g3 g6": {
    strategy:
      "Heads for the Leningrad set-up with ...Bg7, ...Nf6, ...0-0 and ...d6, the bishop " +
      "guarding the king and working along the long diagonal. After ...Nf6 it can transpose " +
      "into the lines of 2...Nf6 3.Bg2 g6. Before the knight covers h5, though, White can " +
      "strike with 3.h4 and h5 against the g6-pawn.",
  },

  "1.d4 f5 2.g3 e6": {
    strategy:
      "Supports the f5-pawn and frees the f8-bishop, heading for ...Nf6 with ...Be7 or ...d5 " +
      "for a Classical or Stonewall set-up. After 3.Bg2 Nf6 it transposes into the lines of " +
      "2...Nf6 3.Bg2 e6. The price is a hemmed-in c8-bishop, and once ...d5 follows, e5 " +
      "becomes a hole for White's knight.",
  },

  "1.d4 f5 2.g3 d5": {
    strategy:
      "Sets up the Stonewall pawn at once, so d5 and f5 grip e4, with ...e6, ...Nf6 and ...c6 " +
      "to follow. The early commitment rules out the Classical and Leningrad set-ups with " +
      "...d6, and e5 is already a hole that White can eye with Bf4. Once ...e6 follows, the " +
      "c8-bishop is hemmed in.",
  },

  "1.d4 f5 2.g3 d6": {
    strategy:
      "Covers e5 and opens a diagonal for the c8-bishop, heading for the Classical set-up " +
      "with ...Nf6 and ...e6 or the Leningrad with ...g6. The early pawn move gives up the " +
      "Stonewall, and 2...Nf6 reaches the same positions while keeping more options.",
  },

  "1.d4 f5 2.g3 c6": {
    strategy:
      "Prepares ...d5 for a Stonewall structure and blunts the long diagonal before White's " +
      "bishop reaches g2, but develops nothing. It is slow, since 2...Nf6 reaches the same " +
      "structures while developing a piece.",
  },

  "1.d4 f5 2.g3 Nc6": {
    strategy:
      "Develops and presses on d4, but blocks the c-pawn and allows 3.d5, which drives the " +
      "knight away at once. Black loses time with the knight while White gains space.",
  },

  "1.d4 f5 2.g3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but does nothing for the centre or " +
      "for e4 and blocks the a-pawn. White develops freely with Bg2, Nf3 and c4.",
  },

  "1.d4 f5 2.g3 a6": {
    strategy:
      "A slow rook-pawn move that neither develops a piece nor contests the centre. Black has " +
      "spent a tempo, and White continues with Bg2, Nf3 and c4.",
  },

  "1.d4 f5 2.g3 a5": {
    strategy:
      "A slow rook-pawn move that restrains b4 but neither develops a piece nor contests the " +
      "centre, and it weakens b5. White continues with Bg2, Nf3 and c4.",
  },

  "1.d4 f5 2.g3 b6": {
    strategy:
      "Weakens the long diagonal: after 3.Bg2 the a8-rook is attacked, and ...Bb7 would lose " +
      "the bishop to Bxb7. Black must spend a tempo on a block such as ...c6, ...d5 or " +
      "...Nc6.",
  },

  "1.d4 f5 2.g3 b5": {
    strategy:
      "Gains queenside space but weakens the long diagonal: 3.Bg2 attacks the a8-rook, ...Bb7 " +
      "hangs to Bxb7, and Black has to block with ...c6, ...d5 or ...Nc6. The b5-pawn is then " +
      "a target for a4.",
  },

  "1.d4 f5 2.g3 c5": {
    strategy:
      "Challenges d4 but develops nothing and lets White choose: 3.d5 gains space, and 3.dxc5 " +
      "takes a pawn that Black must spend time to regain with ...Qa5+ or with ...e6 and " +
      "...Bxc5.",
  },

  "1.d4 f5 2.g3 h5": {
    strategy:
      "Aims at ...h4 to challenge g3 but develops nothing and contests no central square. The " +
      "kingside is loosened, and White continues with Bg2, Nf3 and c4 undisturbed.",
  },

  "1.d4 f5 2.g3 Nh6": {
    strategy:
      "Defends the f5-pawn from the rim, but 3.Bxh6 gxh6 leaves doubled, isolated h-pawns and " +
      "no pawn to block on g6. After 4.e4, 4...fxe4?? allows 5.Qh5#, and the bishop pair does " +
      "not make up for the exposed king.",
  },

  "1.d4 f5 2.g3 e5": {
    strategy:
      "Gives up the e-pawn for too little: after 3.dxe5 White holds the extra pawn with Nf3 " +
      "and Bf4, and Black's open lines do not make up for it.",
  },

  "1.d4 f5 2.g3 h6": {
    strategy:
      "Takes g5 from the c1-bishop but weakens g6 and develops nothing. White strikes at once " +
      "with 3.e4, and 3...fxe4?? loses to 4.Qh5+ g6 5.Qxg6#.",
  },

  "1.d4 f5 2.g3 Kf7": {
    strategy:
      "Gives up castling for nothing and puts the king on the e8-h5 diagonal that ...f5 " +
      "opened, where e4 and Qh5+ can hit it. White gains time and space while Black has " +
      "developed nothing.",
  },

  "1.d4 f5 2.g3 g5": {
    strategy:
      "Offers a pawn for nothing: 3.Bxg5 wins it at once, since the c1-bishop has an open " +
      "diagonal and nothing defends g5. Black gets no development in return and the kingside " +
      "is loosened.",
  },

  "1.d4 f5 2.g3 f4": {
    strategy:
      "Attacks g3 but simply loses the pawn: 3.Bxf4 or 3.gxf4 takes it, and Black has no " +
      "developed pieces to exploit the open lines. White is a clean pawn up.",
  },

  "1.d4 f5 2.Nc3 Nf6": {
    strategy:
      "Develops the king's knight and controls e4 and d5, so the push 3.e4 now costs a pawn: " +
      "3...fxe4 reaches the Staunton Gambit by transposition. The knight keeps every Dutch " +
      "set-up open: ...e6 with ...d5 or ...Be7, or ...g6 and ...Bg7. White usually continues " +
      "3.Bg5, which threatens to take on f6 and damage Black's pawn structure.",
  },

  "1.d4 f5 2.Nc3 e6": {
    strategy:
      "Opens the f8-bishop and heads for a Stonewall with ...d5 or a Classical set-up with " +
      "...Nf6 and ...Be7. Unlike 2...Nf6 it adds nothing to the control of e4, so 3.e4 fxe4 " +
      "4.Nxe4 gives White a share of the centre with a developed knight. Black answers with " +
      "...Nf6 or ...d5 and stays solid, though the c8-bishop is shut in for now.",
  },

  "1.d4 f5 2.Nc3 d5": {
    strategy:
      "Guards e4 with a second pawn but fixes the pawn structure before any piece is out. It " +
      "leaves e5 as a permanent hole, which 3.Bf4 targets, and weakens e6. White can also try " +
      "the gambit 3.e4, which after 3...dxe4 transposes into a Blackmar-Diemer line.",
  },

  "1.d4 f5 2.Nc3 g6": {
    strategy:
      "Heads for a Leningrad set-up with ...Bg7, ...Nf6, ...d6 and ...O-O. The g-pawn does " +
      "nothing for e4, so White can strike at once with 3.e4 fxe4 4.Nxe4 and take a share of " +
      "the centre without the pawn sacrifice that 2...Nf6 would have demanded. The move is " +
      "sound, but after the exchange on e4 the e7-pawn stands on a half-open file.",
  },

  "1.d4 f5 2.Nc3 d6": {
    strategy:
      "Prepares ...e5, keeps ...Nf6, ...g6 and ...e6 in reserve and opens the c8-bishop's " +
      "diagonal. It does nothing for e4, so White can take a share of the centre with 3.e4 " +
      "fxe4 4.Nxe4 without giving up a pawn.",
  },

  "1.d4 f5 2.Nc3 c6": {
    strategy:
      "Prepares ...d5 with the c-pawn's support, aiming for a Stonewall structure. It is slow " +
      "and does nothing for e4: after 3.e4 fxe4 4.Nxe4 Black can hit the knight with ...d5, " +
      "but White stays ahead in development while ...Nf6 and ...e6 are still to come.",
  },

  "1.d4 f5 2.Nc3 b6": {
    strategy:
      "Prepares ...Bb7, which bears on e4 along the long diagonal. It is slow and develops " +
      "nothing on the kingside, so White can open the centre with 3.e4 fxe4 4.Nxe4 and meet " +
      "...Bb7 with Bd3 or Ng3, ahead in development while ...Nf6 and ...e6 are still to be " +
      "played.",
  },

  "1.d4 f5 2.Nc3 c5": {
    strategy:
      "Strikes at d4 before any piece is out. White can answer 3.d5 for a Benoni-like " +
      "structure with Black's f-pawn already advanced, or 3.dxc5, when Black must spend time " +
      "on ...Qa5 or on ...e6 and ...Bxc5 to recover the pawn.",
  },

  "1.d4 f5 2.Nc3 Nc6": {
    strategy:
      "Hits d4, but 3.d5 drives the knight away: after 3...Ne5 4.Qd4 Black can hold it with " +
      "...d6, but f4 then forces another retreat, so Black loses time and cedes central " +
      "space.",
  },

  "1.d4 f5 2.Nc3 e5": {
    strategy:
      "Gives up a pawn to open the centre: 3.dxe5 takes it, and Black's attempts to regain it " +
      "with ...Nc6 and ...Qe7 cost further time. Black gets some quick development but " +
      "nothing concrete for the material.",
  },

  "1.d4 f5 2.Nc3 Na6": {
    strategy:
      "Puts the knight on the rim, where its only forward squares are b4 and c5, and does " +
      "nothing for e4 or d5. White can play 3.e4 at once, a push that would have cost a pawn " +
      "after 2...Nf6.",
  },

  "1.d4 f5 2.Nc3 Nh6": {
    strategy:
      "Heads for f7, where the knight would cover e5 and d6, but on h6 it can be taken at " +
      "once: 3.Bxh6 gxh6 leaves Black with doubled, isolated h-pawns.",
  },

  "1.d4 f5 2.Nc3 a6": {
    strategy:
      "Takes b5 from the c3-knight and prepares ...b5, but spends a tempo on the flank while " +
      "...Nf6 and ...e6 are still undone, and White is free to play 3.e4.",
  },

  "1.d4 f5 2.Nc3 a5": {
    strategy:
      "Gains a little queenside space and secures b4 for a knight from a6, but spends a tempo " +
      "on the flank while the kingside pieces stay at home. White can open the centre with " +
      "3.e4 at once.",
  },

  "1.d4 f5 2.Nc3 h6": {
    strategy:
      "Takes g5 away from White's bishop, but this slow prophylaxis develops nothing and " +
      "weakens g6. White continues with e4 or Nf3 while Black's knights are still at home.",
  },

  "1.d4 f5 2.Nc3 h5": {
    strategy:
      "Gains kingside space but develops nothing, leaves g6 without pawn cover and rules out " +
      "...h6 against a bishop on g5. White continues with 3.e4 or 3.Bg5 and meets no threat.",
  },

  "1.d4 f5 2.Nc3 Kf7": {
    strategy:
      "Gives up castling and puts the king where e4 exposes it: after 3.e4 fxe4 4.Nxe4 White " +
      "has Ng5+, Qh5+ and Bc4+ at hand while no black piece is developed.",
  },

  "1.d4 f5 2.Nc3 b5": {
    strategy:
      "Loses a pawn at once: 3.Nxb5 wins it, since nothing protects it, and the knight there " +
      "also eyes c7. Black has no developed pieces to offer compensation.",
  },

  "1.d4 f5 2.Nc3 g5": {
    strategy:
      "Loses a pawn at once: 3.Bxg5 wins it, since nothing guards g5, and the kingside is " +
      "weakened for good.",
  },

  "1.d4 f5 2.Nc3 f4": {
    strategy:
      "Gains space but leaves the pawn undefended: 3.Bxf4 wins it along the open c1-h6 " +
      "diagonal, and Black has no developed piece to offer compensation.",
  },

  "1.d4 f5 2.Nf3 Nf6": {
    strategy:
      "Develops the knight to its natural square, adds control of e4, covers h5 and keeps " +
      "every Dutch set-up open: after 3.g3 e6 4.Bg2 Black can choose between the Classical " +
      "and the Stonewall, and after 3.g3 g6 4.Bg2 Bg7 the Leningrad arises. Against 3.Bg5 " +
      "Black plays ...e6 and ...Be7, so that Bxf6 can be met by ...Bxf6.",
  },

  "1.d4 f5 2.Nf3 e6": {
    strategy:
      "Opens the f8-bishop and supports a later ...d5, heading for the Classical set-up with " +
      "...Nf6 and ...Be7 or the Stonewall with ...d5 and ...c6. It usually transposes into " +
      "the same positions as 2...Nf6. The cost is that the c8-bishop is shut in by the " +
      "e6-pawn, a lasting problem in Stonewall structures.",
  },

  "1.d4 f5 2.Nf3 d5": {
    strategy:
      "Builds the Stonewall pawns on d5 and f5 at once, so that e4 is firmly under Black's " +
      "control, with ...Nf6 and ...e6 to follow. Sound, but it commits the d-pawn before any " +
      "piece is developed. Since neither the d- nor the f-pawn can ever cover e5, that square " +
      "becomes a lasting outpost for White's knight.",
  },

  "1.d4 f5 2.Nf3 d6": {
    strategy:
      "Covers e5, so White's knight cannot settle there, opens the c8-bishop's diagonal and " +
      "prepares ...Nf6 with ...g6 for a Leningrad set-up or with ...e6 for a Classical one. " +
      "Sound but less flexible: the d-pawn commits before the pieces are out, and the " +
      "Stonewall plan with ...d5 would now cost a tempo.",
  },

  "1.d4 f5 2.Nf3 g6": {
    strategy:
      "Heads for the Leningrad with ...Bg7, ...Nf6, ...O-O and ...d6, putting the bishop on " +
      "the long diagonal and closing the e8-h5 diagonal. Playable, but less flexible than " +
      "2...Nf6, since Black commits to the fianchetto before the knight comes out.",
  },

  "1.d4 f5 2.Nf3 c6": {
    strategy:
      "Prepares ...d5 for a Stonewall chain of c6, d5, e6 and f5, and opens the queen's " +
      "diagonal toward b6 and a5. Sound but slow: it develops nothing, and ...Nf6 and ...e6 " +
      "still have to come.",
  },

  "1.d4 f5 2.Nf3 b6": {
    strategy:
      "Prepares ...Bb7, putting the c8-bishop on the long diagonal, where it adds pressure on " +
      "e4 and eyes the f3-knight. Sound but rare and slow: the kingside is still undeveloped, " +
      "and White can oppose the bishop with g3 and Bg2.",
  },

  "1.d4 f5 2.Nf3 c5": {
    strategy:
      "Strikes at d4 before any piece is out. 3.d5 gains space and takes c6 and e6 from " +
      "Black's pieces, while after 3.dxc5 Black must spend further moves regaining the pawn " +
      "with ...e6 and ...Bxc5 or with ...Qa5+.",
  },

  "1.d4 f5 2.Nf3 e5": {
    name: "Dutch Defence: Omega-Isis Gambit",
    strategy:
      "Offers the e-pawn at once. After 3.dxe5 Black can develop with ...Nc6, hitting e5, or " +
      "open lines with ...d6, but the quick development does not make up for the pawn and the " +
      "loosened kingside.",
  },

  "1.d4 f5 2.Nf3 Nc6": {
    strategy:
      "Develops the knight, but 3.d5 attacks it at once. ...Ne5 and ...Nd4 simply lose the " +
      "knight, so it must retreat to b8, a5 or b4, and Black has lost time while White's pawn " +
      "gains space on d5.",
  },

  "1.d4 f5 2.Nf3 Na6": {
    strategy:
      "A rim knight that eyes b4 and c5 but does nothing for the centre or the kingside, and " +
      "delays ...Nf6 and ...e6. White develops freely with g3 and Bg2 or e3 and Bd3.",
  },

  "1.d4 f5 2.Nf3 Nh6": {
    strategy:
      "Allows 3.Bxh6 gxh6, which wrecks Black's kingside pawns; the knight is otherwise badly " +
      "placed on the rim, with only f7 and g4 to go to.",
  },

  "1.d4 f5 2.Nf3 a6": {
    strategy:
      "Spends a tempo on a flank pawn that neither develops nor contests the centre, so White " +
      "simply continues with g3 and Bg2 or e3 and Bd3.",
  },

  "1.d4 f5 2.Nf3 a5": {
    strategy:
      "Spends a tempo on a flank pawn that develops nothing, contests nothing in the centre " +
      "and leaves b5 weaker. White gets a free hand with e3, c4 and Nc3.",
  },

  "1.d4 f5 2.Nf3 h6": {
    strategy:
      "Spends a tempo to stop Bg5, which is no threat yet, and weakens g6. Black falls behind " +
      "in development while White plays g3 and Bg2 or e3.",
  },

  "1.d4 f5 2.Nf3 h5": {
    strategy:
      "Pushes a rim pawn that creates no threat and weakens g5 and g6. White develops with " +
      "Bg5, e3 or g3 while Black's knights and bishops are still at home.",
  },

  "1.d4 f5 2.Nf3 b5": {
    strategy:
      "Leaves the b5-pawn undefended: 3.Qd3 attacks it and the f5-pawn at once, and Black " +
      "cannot hold both. The move develops nothing.",
  },

  "1.d4 f5 2.Nf3 Kf7": {
    strategy:
      "Gives up the right to castle for nothing, develops no piece and walks the king into " +
      "Ne5+ and an e4 break, with the king far from any shelter.",
  },

  "1.d4 f5 2.Nf3 g5": {
    strategy:
      "Drops a pawn to 3.Nxg5 or 3.Bxg5, since nothing defends it, and the kingside is left " +
      "full of holes.",
  },

  "1.d4 f5 2.Nf3 f4": {
    strategy:
      "Loses the pawn to 3.Bxf4, because nothing defends it, and gains nothing in space or " +
      "development in return.",
  },
};
