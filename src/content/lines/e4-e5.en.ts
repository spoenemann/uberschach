import type { OpeningTexts } from "../book.ts";

// English prose for e4-e5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.e4 e5 2.Nf3": {
    name: "King's Knight Opening",
    background:
      "The most popular second move for White. It begins the Ruy Lopez, White's most frequent " +
      "choice at the top level, the Italian Game, which has been analysed for hundreds of " +
      "years, and the Scotch Game, which was popular in the nineteenth century.",
    strategy:
      "Attacks e5, develops a piece and prepares castling, while keeping the d4 break and the " +
      "bishop moves to b5 and c4 available. After the usual 2...Nc6 White can pressure the " +
      "defender of e5 with Bb5, aim at f7 with Bc4 or open the centre with d4; Black can also " +
      "counterattack e4 with 2...Nf6 or defend solidly with 2...d6. The only cost is that the " +
      "knight blocks the f-pawn, so f4 is ruled out while it stays on f3.",
  },

  "1.e4 e5 2.Bc4": {
    name: "Bishop's Opening",
    background:
      "One of the oldest openings to be analysed, studied by Lucena and Ruy López and given " +
      "its theoretical foundation by Philidor. It fell out of favour in the mid-nineteenth " +
      "century after improvements for Black appeared. Bent Larsen was one of the few " +
      "grandmasters to play it often, after first using it at the 1964 Interzonal, and Péter " +
      "Lékó played it against Kramnik in the 2007 World Championship.",
    strategy:
      "Eyes f7, stops an immediate ...d5 and keeps the f-pawn free, so White can still choose " +
      "between Nf3, Nc3 and an early f4. Black's most common reply is 2...Nf6, which attacks " +
      "e4; after 3.d3 Black can play ...c6 and ...d5 to build a centre that gains time " +
      "against the bishop. Other replies such as 2...Nc6 or 2...Bc5 often transpose into the " +
      "Italian Game or the Vienna Game, so White gets a flexible but rarely forcing game.",
  },

  "1.e4 e5 2.Nc3": {
    name: "Vienna Game",
    background:
      "Named after the city of Vienna and popular in the nineteenth century, it began as a " +
      "delayed King's Gambit. Weaver W. Adams famously claimed that it wins by force for " +
      "White, whereas Nick de Firmian concludes in the 15th edition of Modern Chess Openings " +
      "that it leads to equality with best play.",
    strategy:
      "Defends e4 with a piece and keeps the f-pawn free, so White can later choose between " +
      "f4, quiet development with Bc4 or Nf3, and a g3 fianchetto. Black usually replies " +
      "2...Nf6, often followed by ...d5 to free the game, or 2...Nc6. With accurate play " +
      "Black equalises, so the move offers flexibility rather than an advantage.",
  },

  "1.e4 e5 2.f4": {
    name: "King's Gambit",
    background:
      "Ruy López de Segura was the first to publish analysis of it, and it already appears in " +
      "Lucena's book of 1497. After losing to Spassky's King's Gambit at Mar del Plata in " +
      "1960, Fischer published “A Bust to the King's Gambit” the following year, claiming " +
      "that it loses by force; the opening has been rare at the highest level since Rudolf " +
      "Spielmann stopped playing it regularly.",
    strategy:
      "Offers the f-pawn to deflect Black's e-pawn and build a pawn centre with d4, while " +
      "opening the f-file for the rook. The gambit is sharp and playable, but Black can keep " +
      "the pawn with 2...exf4 and ...g5, or decline with 2...d5 or 2...Bc5, and White's king " +
      "is left exposed on the e1–h4 diagonal. It is a risky try, not a recommendation.",
  },

  "1.e4 e5 2.d4": {
    name: "Centre Game",
    background:
      "Dated to 1590 or earlier and first analysed by Philipp Stamma in 1745, it was played " +
      "regularly by Tarrasch, Chigorin and Paulsen in the late nineteenth century. It was " +
      "mostly abandoned after 1900 because no advantage could be shown for White, and " +
      "Alexander Shabalov revived it in the 1990s.",
    strategy:
      "Strikes at the centre at once, but after 2...exd4 there is no knight on f3 to " +
      "recapture, so taking back means Qxd4, and 3...Nc6 gains a tempo against the queen. The " +
      "alternative 3.c3 offers one or two pawns for quick development. White can castle long " +
      "and attack, yet Black develops easily and equalises, so the move is sound but not " +
      "recommended.",
  },

  "1.e4 e5 2.d3": {
    name: "King's Pawn Game: Leonardis Variation",
    strategy:
      "Supports e4 and frees the c1-bishop, building a solid reversed Philidor structure. It " +
      "shuts the f1–a6 diagonal for the king's bishop, though, and Black takes equal space " +
      "with ...Nf6 and ...d5. Sound but passive, so it is not recommended.",
  },

  "1.e4 e5 2.Bb5": {
    name: "Portuguese Opening",
    strategy:
      "Aims for a Ruy Lopez-type bishop on b5 while keeping the f-pawn free for f4. Without " +
      "Nf3 there is no pressure on e5, so Black has a free hand: 2...c6 gains time against " +
      "the bishop, while 2...Nf6 or 2...Nc6 develops comfortably. Playable, though Black gets " +
      "an easy game.",
  },

  "1.e4 e5 2.Qh5": {
    name: "Danvers Opening",
    background:
      "The earliest known appearance in print was in the Dubuque Chess Journal of May 1875, " +
      "which called it the Kentucky Opening; in 1905 the American Chess Bulletin called it " +
      "the Danvers Opening, a name the psychiatrist E. E. Southard gave it after the hospital " +
      "where he worked. It is also known as the Wayward Queen Attack and the Parham Attack; " +
      "Bernard Parham of Indianapolis was one of the few master-level players to advocate it. " +
      "Hikaru Nakamura played it at the 2005 Sigeman Tournament, and Hans Ree called it “a " +
      "provocative but quite sensible move”.",
    strategy:
      "Attacks e5 and f7 at once and sets the trap 2...Nc6 3.Bc4 Nf6?? 4.Qxf7#. Black defends " +
      "with 2...Nc6 and meets 3.Bc4 with 3...g6, which drives the queen away, usually to f3, " +
      "or with 3...Qe7, which blocks the f8-bishop. The early queen sortie forces small " +
      "concessions but gains no advantage, and the queen remains a target for Black's " +
      "developing moves.",
  },

  "1.e4 e5 2.Ne2": {
    name: "Alapin's Opening",
    background:
      "Named after the Russo-Lithuanian player and openings analyst Semyon Alapin " +
      "(1856–1923). It is rarely used, but occurred in Jacobsen–Ljubojević, Groningen 1970.",
    strategy:
      "Keeps the f-pawn free for an early f4 or for a quiet setup with g3, Nbc3, d3 and Bg2, " +
      "and sidesteps heavily analysed lines such as the Ruy Lopez. But the knight blocks the " +
      "f1-bishop and the queen and has no control over Black's half of the board, so Black " +
      "equalises easily with 2...Nf6 or 2...Nc6. Playable, mostly as a surprise weapon.",
  },

  "1.e4 e5 2.a3": {
    name: "King's Pawn Game: Mengarini's Opening",
    background:
      "Named after Ariel Mengarini, who advocated the move order 1.e4 e5 2.a3. The name is " +
      "also given to the Vienna Game line 2.Nc3 Nf6 3.a3, where Hugh Myers inserted the " +
      "knight moves before the a-pawn move.",
    strategy:
      "A waiting move that stops ...Bb4 and prepares b4, but develops nothing. Black takes " +
      "the centre with ...Nf6, ...Nc6 or ...d5 and in effect takes over the first move.",
  },

  "1.e4 e5 2.a4": {
    strategy:
      "Gains queenside space and prepares Ra3, but spends a tempo on the rim while the centre " +
      "and development wait. Black plays ...Nf6, ...Nc6 or ...d5 at leisure, and b4 is " +
      "weakened.",
  },

  "1.e4 e5 2.b3": {
    strategy:
      "Prepares Bb2 against e5, but that pawn is easily defended by ...Nc6 or ...d6, and the " +
      "bishop does little else. Meanwhile ...d5 or ...Nf6 hits e4 at once, so White loses " +
      "time without improving the centre.",
  },

  "1.e4 e5 2.c3": {
    name: "King's Pawn Game: MacLeod Attack",
    strategy:
      "Prepares d4 to build a broad centre, but takes c3 from the knight and delays " +
      "development. Black strikes first with 2...d5 or 2...Nf6, hitting e4 before White's " +
      "centre is ready, and equalises without trouble.",
  },

  "1.e4 e5 2.c4": {
    name: "English Opening: The Whale",
    strategy:
      "Takes control of d5 but develops nothing and leaves holes on d4 and d3, since neither " +
      "the c-pawn nor the e-pawn can guard them any more. Black continues with ...Nf6, ...Nc6 " +
      "and ...Bc5, aiming at d4, while the e4-pawn needs a defender.",
  },

  "1.e4 e5 2.f3": {
    name: "King's Pawn Game: King's Head Opening",
    strategy:
      "Supports e4, but takes f3 from the g1-knight and opens the e1–h4 diagonal, so ...Qh4+ " +
      "becomes possible. Black develops with ...Nc6 and ...Nf6 or strikes with ...d5 and gets " +
      "the easier game.",
  },

  "1.e4 e5 2.g3": {
    strategy:
      "Prepares Bg2, but with White's pawn on e4 the bishop's diagonal is blocked by its own " +
      "pawn. Black hits e4 at once with ...d5 or ...Nf6, and after 2...d5 3.exd5 Qxd5 the " +
      "queen looks along the vacated long diagonal at the h1-rook.",
  },

  "1.e4 e5 2.h3": {
    strategy:
      "Takes g4 from Black's c8-bishop and king's knight, but develops nothing and does not " +
      "fight for the centre. Black answers with ...Nf6, ...Nc6 or ...d5 and gets a free hand " +
      "in the centre.",
  },

  "1.e4 e5 2.Na3": {
    strategy:
      "A rim knight that eyes c4 and b5 but little else. Black can trade it with ...Bxa3, and " +
      "after bxa3 White is left with doubled, isolated a-pawns while Black develops freely in " +
      "the centre.",
  },

  "1.e4 e5 2.Qe2": {
    strategy:
      "Defends e4, but blocks the f1-bishop and takes e2 from the g1-knight. Black develops " +
      "freely with ...Nf6, ...Nc6 and ...Bc5, while the f1-bishop stays shut in until the " +
      "queen moves again or White plays g3.",
  },

  "1.e4 e5 2.Qf3": {
    name: "Napoleon Opening",
    background:
      "The name came into use after publications of the mid-nineteenth century reported that " +
      "Napoleon Bonaparte played it, in the game he lost to the chess automaton known as the " +
      "Turk in Vienna in 1809.",
    strategy:
      "Eyes f7 and sets the trap 2...Nc6 3.Bc4 Bc5?? 4.Qxf7#, which ...Nf6 easily prevents. " +
      "The queen takes f3 from the g1-knight and can be harassed by ...Nd4, so White falls " +
      "behind in development.",
  },

  "1.e4 e5 2.Qg4": {
    strategy:
      "The queen attacks g7, which the f8-bishop defends, and walks into 2...d5, which " +
      "uncovers the c8-bishop against the queen and attacks e4. After 3.exd5?? Bxg4 the queen " +
      "is lost, so it must retreat at a cost in time.",
  },

  "1.e4 e5 2.Be2": {
    strategy:
      "Prepares castling but blocks the queen's diagonal to h5 and does nothing for the " +
      "centre. Black takes the centre with ...Nf6 and ...d5, and White is left with a passive " +
      "setup without the pressure of Bc4 or Bb5.",
  },

  "1.e4 e5 2.Bd3": {
    name: "King's Pawn Game: Tortoise Opening",
    strategy:
      "Defends e4 but blocks the d-pawn and with it the c1-bishop, so White's development " +
      "stalls until the bishop moves again. Black plays ...Nf6, ...Nc6 and ...d5 in comfort " +
      "and takes over the initiative.",
  },

  "1.e4 e5 2.Nh3": {
    strategy:
      "The knight heads for g5 or f4 but sits on the rim, and 2...d5 3.exd5 Bxh3 4.gxh3 Qxd5 " +
      "wrecks White's kingside pawns and attacks the h1-rook. Black gets a free centre and " +
      "easy development.",
  },

  "1.e4 e5 2.h4": {
    strategy:
      "Gains space on the rim and prepares h5 or a rook lift via h3, but does nothing for the " +
      "centre or development. Black answers with ...Nf6 or ...d5 against e4 and gets a " +
      "comfortable game, while the kingside, where White's king usually castles, is loosened.",
  },

  "1.e4 e5 2.b4": {
    strategy:
      "Offers the b-pawn with no development behind it: 2...Bxb4 wins it, and after 3.c3 the " +
      "bishop retreats to a5, c5 or e7, leaving White without enough compensation.",
  },

  "1.e4 e5 2.g4": {
    strategy:
      "Gains kingside space but weakens f3, h3 and the long diagonal. After 2...d5 3.exd5 " +
      "Qxd5 the queen attacks the h1-rook and Black takes the lead in the centre; the king's " +
      "flank stays loosened for good.",
  },

  "1.e4 e5 2.Ke2": {
    name: "Bongcloud Attack",
    background:
      "The name is thought to come either from the Chess.com user “Lenny_Bongcloud”, who " +
      "played it with little success, or from the word “bong”, implying that one would have " +
      "to be intoxicated to take it seriously. Magnus Carlsen opened with it against Hikaru " +
      "Nakamura at the Magnus Carlsen Invitational on 15 March 2021; Nakamura answered " +
      "2...Ke7 and the game was drawn by threefold repetition.",
    strategy:
      "Gives up the right to castle and blocks both the queen and the f1-bishop, so the king " +
      "must move again before White can develop normally. Black simply develops with ...Nf6, " +
      "...Nc6 and ...d5 and opens the centre against the stranded king.",
  },

  "1.e4 e5 2.Ba6": {
    strategy:
      "Hangs the bishop: 2...bxa6 or 2...Nxa6 wins it for nothing, and White has no " +
      "compensation for the lost piece.",
  },

  "1.e4 e5": {
    name: "Open Game",
    background:
      "The Open Games, which begin 1.e4 e5, include many of the oldest and most deeply " +
      "analysed openings in chess. 1...e5 was the usual answer to 1.e4 for centuries, until " +
      "the Sicilian Defence became slightly more popular among tournament players in the " +
      "mid-twentieth century.",
  },
};
