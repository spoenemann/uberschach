import type { OpeningTexts } from "./book.ts";

// English prose for firstMoves.ts: at each line, the name and background of
// the position it reaches and the strategic meaning of its last move. The
// line "" is the initial position; its background is the introduction.
export const en: OpeningTexts = {
  "": {
    background:
      "Twenty moves are legal from the initial position: two for each of the eight pawns " +
      "and two for each knight. Four of them, 1.e4, 1.d4, 1.Nf3 and 1.c4, are by far the most " +
      "popular and the ones worth learning. The rest are rated here so that every first move " +
      "gets a verdict, but only the good ones are followed further.",
  },

  "1.e4": {
    strategy:
      "Occupies a central square, attacks d5 and opens the diagonals of the queen and the " +
      "king's bishop, so White can develop quickly and castle early. The pawn on e4 is not " +
      "defended by another pawn, and the open lines tend to give sharp, tactical play.",
  },

  "1.d4": {
    strategy:
      "Occupies the centre and attacks c5 and e5. Unlike the e-pawn, the d-pawn is defended by " +
      "the queen from the start, so Black cannot attack it as easily; the position tends to stay " +
      "closed longer, and the struggle is more strategic than tactical.",
  },

  "1.Nf3": {
    strategy:
      "Develops a piece towards the centre and controls e5 and d4 without committing a pawn. " +
      "The most flexible first move: White can still steer into 1.d4, 1.c4 or 1.e4 openings, " +
      "or keep the hypermodern setup with a kingside fianchetto. It also rules out 1...e5.",
  },

  "1.c4": {
    strategy:
      "Claims d5 from the wing and keeps the central pawns back, so White decides later whether " +
      "to play d4, e4 or a fianchetto. Flexible and solid, with asymmetrical positions when Black " +
      "answers 1...e5. It develops no piece and opens no diagonal for the king's bishop, so " +
      "development comes a move later.",
  },

  "1.g3": {
    strategy:
      "Prepares the fianchetto Bg2, which controls the long diagonal and supports a later e4 " +
      "and d5. It commits nothing in the centre and usually transposes into another opening " +
      "with a fianchettoed king's bishop; Black can take central space at once.",
  },

  "1.b3": {
    strategy:
      "Prepares the fianchetto Bb2, aiming at e5 and along the long diagonal at Black's " +
      "kingside. White lets Black build a classical pawn centre and plans to undermine it " +
      "later. Theory rates the resulting positions as equal, so the opening's value is " +
      "practical rather than objective.",
  },

  "1.f4": {
    name: "Bird's Opening",
    background:
      "Named after Henry Bird, the English master who first played it in 1855 and kept playing " +
      "it for forty years; the Hereford Times coined the name in 1885. It is a Dutch Defence " +
      "with colours reversed.",
    strategy:
      "Takes control of e5 and prepares a kingside attack, like a reversed Dutch. The cost is an " +
      "early weakening of the king's position: the e1–h4 diagonal is open, and From's Gambit " +
      "1...e5 exploits it at once. It does nothing for development.",
  },

  "1.Nc3": {
    name: "Dunst Opening",
    background:
      "Named after Ted A. Dunst (1907–1985), a New York master; in the Netherlands called the " +
      "Van Geet Opening after Dick van Geet (1932–2012), who played it frequently. Its recorded " +
      "origin is Blackburne against Noa, London 1883.",
    strategy:
      "Develops a piece towards the centre and attacks d5 and e4. The knight blocks the c-pawn, " +
      "which White needs in most queen's pawn structures, and it can be chased with ...d5 and " +
      "...d4. Playable, but an inferior way to use the first move.",
  },

  "1.b4": {
    name: "Sokolsky Opening",
    background:
      "Named after the Soviet player Alexei Sokolsky (1908–1969), whose 1963 monograph defended " +
      "it. Also called the Polish Opening, and the Orangutan after Tartakower, who claimed that " +
      "an orangutan at the Bronx Zoo had advised the move before his game against Maróczy at " +
      "New York 1924.",
    strategy:
      "Gains space on the queenside and prepares Bb2 against e5 and g7. It reveals White's plan " +
      "before Black has shown anything, the pawn on b4 needs attention, and Black takes the " +
      "centre with ...e5 or ...d5. Rare at the top level.",
  },

  "1.e3": {
    name: "Van 't Kruijs Opening",
    background:
      "Named after Maarten van 't Kruijs (1813–1885), who won the sixth Dutch championship in " +
      "1878. Nimzowitsch and Larsen played it occasionally; it is the sixth most popular first " +
      "move, but rare in modern master play.",
    strategy:
      "Opens the king's bishop and keeps every option open, since it can transpose into many " +
      "openings. On its own it claims little: the e-pawn goes only one step, the queen's bishop " +
      "stays shut in, and White gives up most of the first-move advantage.",
  },

  "1.d3": {
    name: "Mieses Opening",
    background:
      "Named after Jacques Mieses, who used it in his 1910 match against Teichmann. Deep Blue " +
      "played it against Kasparov in the third game of their 1997 match, which was drawn.",
    strategy:
      "Covers e4 and opens the queen's bishop, often heading for a King's Indian Attack setup " +
      "with Nf3, g3 and Bg2. A modest claim to the centre: Black can answer with any central " +
      "move and take the initiative.",
  },

  "1.c3": {
    name: "Saragossa Opening",
    background:
      "Became popular at the Saragossa chess club in 1919; the next year the club member José " +
      "Juncosa analysed it, and in 1922 a thematic tournament in Mannheim, won by Tarrasch, " +
      "required the players to open with it.",
    strategy:
      "Prepares d4 with pawn support and keeps the game solid, often transposing into a Slav or " +
      "Caro-Kann with colours reversed. The move takes c3 from the knight and makes only a timid " +
      "claim to the centre. Not bad, but 1.e4 and 1.d4 do more.",
  },

  "1.a3": {
    name: "Anderssen's Opening",
    background:
      "Named after Adolf Anderssen, who played it three times against Paul Morphy in their Paris " +
      "match of December 1858, scoring 1½ out of 3. Steinitz, Blackburne and Mieses tried it " +
      "later, and Nakamura beat Carlsen with it in an online blitz game in 2023.",
    strategy:
      "A waiting move: it controls b4 and keeps every piece at home, so Black must show a plan " +
      "first. It does little for development or the centre and hands the first-move advantage " +
      "to Black, who in effect plays White.",
  },

  "1.h3": {
    name: "Clemenz Opening",
    background:
      "Named after Hermann Clemenz (1846–1908), an Estonian player. Among the rarest first " +
      "moves; Michael Basman has experimented with it as a prelude to 2.g4 or 2.a3.",
    strategy:
      "Takes g4 from Black's pieces and nothing more: it claims no central square, develops " +
      "nothing, and slightly weakens the kingside where White usually castles. A tempo spent " +
      "for later, like 1.a3.",
  },

  "1.g4": {
    name: "Grob's Attack",
    background:
      "Named after the Swiss master Henri Grob (1904–1974), who analysed it extensively and " +
      "played hundreds of correspondence games with it; Carl Ahlhausen of Berlin was one of the " +
      "first to play it, in the 19th century. Michael Basman beat John Nunn with it in 1978. " +
      "Engines give Black a clear advantage after 1.g4.",
    strategy:
      "Grabs space on the kingside and prepares Bg2 on the long diagonal, hoping for an opponent " +
      "who does not know the refutation. The pawn on g4 is undefended, the kingside is weakened " +
      "for good, and Black takes the centre. Widely considered one of the worst first moves.",
  },

  "1.f3": {
    name: "Barnes Opening",
    background:
      "Named after Thomas Wilson Barnes (1825–1874), the English player who scored eight wins " +
      "against Paul Morphy in 1858, one of them with 1.e4 f6 as Black. Edmar Mednis argued that " +
      "1.f3 is the worst of the twenty first moves.",
    strategy:
      "Covers e4 and nothing else: it develops no piece, opens no line, takes the knight's best " +
      "square f3 and opens the e1–h4 diagonal against White's uncastled king. Almost any other " +
      "move serves the same aim better.",
  },

  "1.h4": {
    name: "Kádas Opening",
    background:
      "Also called the Desprez Opening, after the French player Marcel Després; Kádas is the " +
      "name chess sites use today. Among the rarest first moves. David Bronstein liked to tell " +
      "of a Russian player who always opened with 1.h4 and always won.",
    strategy:
      "Gains space on the kingside and threatens h5 against a fianchetto, but does nothing for " +
      "the centre or development, and the rook rarely comes out via h3. The kingside is " +
      "weakened for good.",
  },

  "1.a4": {
    name: "Ware Opening",
    background:
      "Named after Preston Ware, the American player who favoured uncommon openings and played " +
      "them in tournaments around 1880. Carlsen opened with it against Radjabov at the 2012 " +
      "World Blitz Championship as a joke, and won.",
    strategy:
      "Attacks b5 and prepares to bring the rook out via a3, but b5 matters to nobody, and after " +
      "1...e5 the bishop on f8 keeps the rook in. A lost tempo that ignores the centre entirely.",
  },

  "1.Na3": {
    name: "Durkin Opening",
    background:
      "Named after Robert T. Durkin (1923–2014) of New Jersey, who published his analysis of it " +
      "in 1959. Also called the Sodium Attack, since Na is the chemical symbol for sodium.",
    strategy:
      "A knight on the rim controls no central square, and this one can be taken by the bishop " +
      "from f8, doubling White's pawns. White gives up most of the first-move advantage; a later " +
      "c4 or e4 may still reach a reasonable position.",
  },

  "1.Nh3": {
    name: "Amar Opening",
    background:
      "Named after Charles Amar, a Parisian amateur who played it in the 1930s, probably by " +
      "Tartakower, who also called it the Paris Opening. Carlsen beat Dreev with it in a 2018 " +
      "online rapid game.",
    strategy:
      "A knight on the rim controls no central square, and 1...d5 already threatens ...Bxh3, " +
      "which would double White's pawns in front of the king. Black takes the centre " +
      "undisturbed.",
  },
};
