import type { OpeningTexts } from "../book.ts";

// English prose for e4-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.e4 d5 2.exd5": {
    strategy:
      "Captures the pawn and makes Black choose how to regain it: the positional …Qxd5, when " +
      "Nc3 gains a tempo on the queen, or the tactical …Nf6, when d4 lets the knight " +
      "recapture and c4 then drives it from d5. Either way White leads in development and has " +
      "more central space. It is played in the overwhelming majority of games at all levels " +
      "and is generally considered the only second move that offers White serious prospects " +
      "of an advantage.",
  },

  "1.e4 d5 2.Nc3": {
    name: "Dunst Opening",
    background:
      "Named after Ted A. Dunst (1907–1985), a New York master who analysed and played 1.Nc3, " +
      "which gave the opening its most popular name in the United States. The same position " +
      "arises from 1.Nc3 d5 2.e4; Blackburne played 1.Nc3 against Josef Noa in the London " +
      "1883 tournament.",
    strategy:
      "Defends e4 and develops, a sound but rarely seen choice that sidesteps the main lines. " +
      "Black can gain space with tempo by …d4, or take on e4 and play …Bf5 for a kind of " +
      "Caro-Kann in which the tempo for …c6 has been saved. Either way Black gets an easy " +
      "game, and White forgoes the chances that exd5 offers.",
  },

  "1.e4 d5 2.d4": {
    name: "Blackmar–Diemer Gambit",
    background:
      "Grew out of the Blackmar Gambit, named after Armand Blackmar, a New Orleans player of " +
      "the late nineteenth century who published the first analysis of 1.d4 d5 2.e4 dxe4 " +
      "3.f3. Ignatz von Popiel introduced 3.Nc3 in 1889, and the German master Emil Josef " +
      "Diemer (1908–1990) popularised the modern 3.Nc3 Nf6 4.f3. It can also be reached from " +
      "the Scandinavian Defence with 2.d4.",
    strategy:
      "Offers the e4-pawn for quick development: after 2.d4 dxe4 3.Nc3 Nf6 4.f3 White plays a " +
      "pawn down for open lines and an attack. Theory gives Black several ways to equalise, " +
      "so the gambit is almost never seen at top level. Black can also decline it with …e6, " +
      "…c6 or …Nc6 and transpose into a French, a Caro-Kann or a Nimzowitsch Defence.",
  },

  "1.e4 d5 2.Nf3": {
    name: "Tennison Gambit",
    background:
      "Named after Otto Mandrup Tennison (1834–1909), a Danish-born amateur who moved to the " +
      "United States in 1854, played in the New Orleans chess clubs and was the first to " +
      "research the opening significantly. It is also known as the Lemberg, Lviv or Polish " +
      "Gambit, and 1.Nf3 d5 2.e4 reaches the same position.",
    strategy:
      "Sacrifices the e4-pawn for quick piece play: after 2.Nf3 dxe4 3.Ng5 White hopes to win " +
      "it back or to hit f7. Black keeps the pawn with …Bf5 or returns it with …e5, and " +
      "stands better either way.",
  },

  "1.e4 d5 2.e5": {
    strategy:
      "Gains space but releases the central tension and poses Black no problems. Black " +
      "develops the c8-bishop outside the pawn chain with …Bf5 or …Bg4, then plays …e6 and " +
      "…c5 for a favourable French-like structure in which the e5-pawn needs constant " +
      "support.",
  },

  "1.e4 d5 2.c3": {
    strategy:
      "Prepares d4 and opens the d1–a4 diagonal, but leaves e4 attacked. After 2.c3 dxe4 " +
      "3.Qa4+ c6 4.Qxe4 Nf6 the pawn is back, but the queen is chased again and Black " +
      "develops freely.",
  },

  "1.e4 d5 2.c4": {
    strategy:
      "Hits d5 a second time, but gives up the e4-pawn: after 2.c4 dxe4 the c4-pawn blocks " +
      "the fourth rank, so Qa4+ does not win e4 back, and White plays a pawn down. Black can " +
      "also gain space with …d4.",
  },

  "1.e4 d5 2.d3": {
    strategy:
      "Defends e4 solidly but shuts in the diagonal of the f1-bishop. After 2.d3 dxe4 3.dxe4 " +
      "Qxd1+ 4.Kxd1 White loses the right to castle for a harmless queenless position, and " +
      "Black develops with …Nf6 and …e5 without difficulty.",
  },

  "1.e4 d5 2.f3": {
    strategy:
      "Supports e4, but takes f3 from the king's knight and opens the e1–h4 diagonal to the " +
      "king. After 2.f3 dxe4 3.fxe4 e5 the open diagonal already allows …Qh4+, and White has " +
      "weakened the king for nothing.",
  },

  "1.e4 d5 2.Qe2": {
    strategy:
      "Defends e4 with the queen, which blocks the f1-bishop. After 2.Qe2 dxe4 3.Qxe4 Nf6 the " +
      "queen is hit at once and must lose another tempo, so Black develops with gain of time.",
  },

  "1.e4 d5 2.Qf3": {
    strategy:
      "Puts the queen on f3, where it eyes f7 and keeps e4 defended, but takes the best " +
      "square from the king's knight. After 2.Qf3 dxe4 3.Qxe4 Nf6 the queen is hit and Black " +
      "has the easier development.",
  },

  "1.e4 d5 2.Bd3": {
    strategy:
      "Defends e4 but blocks the d-pawn, so White cannot build a pawn centre with d4. After " +
      "2.Bd3 dxe4 3.Bxe4 Nf6 the bishop is hit and Black gains a tempo.",
  },

  "1.e4 d5 2.Bb5+": {
    strategy:
      "Gives a check that gains nothing: 2.Bb5+ c6 attacks the bishop, and 3.exd5 cxb5 gives " +
      "it up for a pawn. The bishop must retreat while e4 is still attacked, and Black has " +
      "gained the useful …c6 for free.",
  },

  "1.e4 d5 2.a3": {
    strategy:
      "Ignores the attack on e4, so …dxe4 wins a clean pawn. The rook-pawn move does nothing " +
      "for development or the centre.",
  },

  "1.e4 d5 2.a4": {
    strategy:
      "Gains queenside space and stops …b5, but leaves e4 attacked. After …dxe4 White is a " +
      "pawn down with no development or central play to show for it.",
  },

  "1.e4 d5 2.b3": {
    strategy:
      "Prepares Bb2 against g7, but leaves e4 hanging. After 2.b3 dxe4 3.Bb2 Nf6 the diagonal " +
      "is closed and White has nothing concrete for the pawn.",
  },

  "1.e4 d5 2.b4": {
    name: "Scandinavian Defence: Zilbermints Gambit",
    strategy:
      "Plays for Bb2 and a lead in development at the cost of the e4-pawn, and loosens the " +
      "queenside. After 2.b4 dxe4 3.Bb2 Nf6 the long diagonal is shut and Black is a clean " +
      "pawn up.",
  },

  "1.e4 d5 2.f4": {
    name: "Bird's Opening: Williams Gambit",
    strategy:
      "A pawn sacrifice that also opens the e1–h4 diagonal to the king. After 2.f4 dxe4 3.Nc3 " +
      "Nf6 Black keeps the extra pawn, and White has little to show for it.",
  },

  "1.e4 d5 2.g3": {
    strategy:
      "Prepares Bg2 to support e4, but too slowly: …dxe4 wins the pawn first, and …Nf6 or " +
      "…Bf5 keeps it when the bishop arrives on g2.",
  },

  "1.e4 d5 2.g4": {
    strategy:
      "Ignores the attack on e4 and loosens the kingside, so …dxe4 wins a pawn. The pawn on " +
      "g4 is weak and ties the queen to its defence against …Bxg4.",
  },

  "1.e4 d5 2.h3": {
    strategy:
      "Prepares g4 or stops …Bg4, but does nothing for e4. After …dxe4 White is a pawn down " +
      "and Black develops freely with …Nf6.",
  },

  "1.e4 d5 2.h4": {
    strategy:
      "Advances the rook pawn with thoughts of h5, but leaves e4 en prise. After …dxe4 White " +
      "is simply a pawn down, with a loosened kingside as well.",
  },

  "1.e4 d5 2.Na3": {
    strategy:
      "A rim knight that leaves e4 en prise: …dxe4 wins a pawn, and from a3 the knight eyes " +
      "b5 and c4 without a target.",
  },

  "1.e4 d5 2.Qg4": {
    strategy:
      "Hangs the queen: 2.Qg4 Bxg4 captures it, because the c8-bishop sees g4 through the " +
      "opened d7-square and nothing defends the queen.",
  },

  "1.e4 d5 2.Qh5": {
    strategy:
      "Aims at d5 along the fifth rank, but that pawn is defended. After 2.Qh5 dxe4 White is " +
      "a pawn down, and …Nf6 then drives the queen back with tempo.",
  },

  "1.e4 d5 2.Ke2": {
    strategy:
      "Gives up castling and walks the king into the centre while e4 is attacked. After …dxe4 " +
      "White is a pawn down, and the king on e2 blocks both the f1-bishop and the queen's " +
      "diagonal.",
  },

  "1.e4 d5 2.Be2": {
    strategy:
      "Develops the bishop, but nothing guards e4. After …dxe4 White is a pawn down with no " +
      "quick way to open lines in return.",
  },

  "1.e4 d5 2.Bc4": {
    strategy:
      "Hangs the bishop: the d5-pawn attacks both c4 and e4, so 2.Bc4 dxc4 wins a piece, and " +
      "nothing recaptures on c4.",
  },

  "1.e4 d5 2.Ba6": {
    strategy:
      "Aims at b7, but the bishop is simply taken: 2.Ba6 bxa6 (or …Nxa6) wins a piece, and " +
      "nothing recaptures on a6.",
  },

  "1.e4 d5 2.Nh3": {
    strategy:
      "Ignores e4 and puts the knight on the rim, where 2.Nh3 Bxh3 3.gxh3 wrecks the kingside " +
      "pawns. Black can also simply play …dxe4 and win a pawn.",
  },

  "1.e4 d5 2.Ne2": {
    strategy:
      "Prepares Nbc3 or Ng3 against e4, but the knight blocks the queen and the f1-bishop. " +
      "After 2.Ne2 dxe4 3.Nbc3 f5 or …Nf6 Black holds the extra pawn.",
  },

  "1.e4 d5": {
    name: "Scandinavian Defence",
    background:
      "Arguably the oldest recorded opening: it appears in the Catalan poem Scachs d'amor " +
      "(around 1475) and in Lucena's book of 1497. Bent Larsen's win over Karpov at Montreal " +
      "1979 spurred a rise in its popularity; in 1995 Anand played it against Kasparov in " +
      "their PCA World Championship match in New York, its first appearance in a world " +
      "championship match, and in 2014 Carlsen beat Caruana with it at the Olympiad in " +
      "Tromsø.",
  },
};
