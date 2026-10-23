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
      "The natural developing move: it attacks the e5 pawn, brings a knight into play and " +
      "prepares castling. White keeps every plan open, from pressure on e5 to an attack on f7 or " +
      "a central break with d4, and Black has to deal with the pawn first. The only cost is that " +
      "the knight blocks the f-pawn, so f4 is out for now.",
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
      "Aims the bishop at f7 and stops ...d5 for the moment, while keeping the f-pawn free, so " +
      "White can build up quietly or go for f4 later. The bishop can become a target for gains " +
      "of time, and with no piece attacking e5 Black develops without pressure, so White gets a " +
      "flexible game that is rarely forcing.",
  },

  "1.e4 e5 2.Nc3": {
    name: "Vienna Game",
    background:
      "Named after the city of Vienna and popular in the nineteenth century, it began as a " +
      "delayed King's Gambit. Weaver W. Adams famously claimed that it wins by force for " +
      "White, whereas Nick de Firmian concludes in the 15th edition of Modern Chess Openings " +
      "that it leads to equality with best play.",
    strategy:
      "Defends e4 with a piece and keeps the f-pawn free, so White can still treat it as a " +
      "delayed King's Gambit with f4 or develop quietly. It blocks the c-pawn and puts no " +
      "pressure on e5, so Black can equalise with accurate play: the move offers flexibility " +
      "rather than an advantage.",
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
      "Offers a pawn to pull Black's e-pawn away from the centre and open the f-file, aiming for " +
      "a pawn centre and an attack on f7. The cost is White's own king: the e1-h4 diagonal is " +
      "open. The game tends to be sharp and double-edged, risky rather than recommended.",
  },

  "1.e4 e5 2.d4": {
    name: "Centre Game",
    background:
      "Dated to 1590 or earlier and first analysed by Philipp Stamma in 1745, it was played " +
      "regularly by Tarrasch, Chigorin and Paulsen in the late nineteenth century. It was " +
      "mostly abandoned after 1900 because no advantage could be shown for White, and " +
      "Alexander Shabalov revived it in the 1990s.",
    strategy:
      "Strikes at the centre at once and aims to open lines for quick development. But with no " +
      "knight on f3 only the queen can recapture on d4, and Black attacks it with a gain of " +
      "time. White can castle long and attack, yet Black develops easily, so the move is sound " +
      "but not recommended.",
  },

  "1.e4 e5 2.d3": {
    name: "King's Pawn Game: Leonardis Variation",
    strategy:
      "Supports e4 and frees the c1-bishop for a solid set-up. But the pawn shuts the king's " +
      "bishop's diagonal, and Black takes equal space in the centre. Sound but passive, so it is " +
      "not recommended.",
  },

  "1.e4 e5 2.Bb5": {
    name: "Portuguese Opening",
    strategy:
      "Aims for a Ruy Lopez-type bishop on b5 while keeping the f-pawn free for f4. Without Nf3 " +
      "there is no pressure on e5, so Black has a free hand and can even gain time against the " +
      "bishop. Playable, though Black gets an easy game.",
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
      "Attacks e5 and f7 at once, hoping for a quick mate on f7 if Black is careless. Black " +
      "defends the pawn with a developing move, and the early queen then becomes a target for " +
      "attacks that gain time. It forces a few small concessions but gains no real advantage.",
  },

  "1.e4 e5 2.Ne2": {
    name: "Alapin's Opening",
    background:
      "Named after the Russo-Lithuanian player and openings analyst Semyon Alapin " +
      "(1856–1923). It is rarely used, but occurred in Jacobsen–Ljubojević, Groningen 1970.",
    strategy:
      "A quiet knight move that keeps the f-pawn free for f4 or a slow set-up with g3, and " +
      "avoids heavily analysed lines. But it blocks the king's bishop and the queen, and from e2 " +
      "the knight controls nothing on Black's half of the board, so Black equalises easily. " +
      "Playable as a surprise, not as a main weapon.",
  },

  "1.e4 e5 2.a3": {
    name: "King's Pawn Game: Mengarini's Opening",
    background:
      "Named after Ariel Mengarini, who advocated the move order 1.e4 e5 2.a3. The name is " +
      "also given to the Vienna Game line 2.Nc3 Nf6 3.a3, where Hugh Myers inserted the " +
      "knight moves before the a-pawn move.",
    strategy:
      "A waiting move that stops ...Bb4 and prepares b4, but develops nothing. Black takes the " +
      "centre and in effect takes over the first move.",
  },

  "1.e4 e5 2.a4": {
    strategy:
      "Gains queenside space and prepares Ra3, but spends a tempo on the rim while the centre " +
      "and development wait. Black develops at leisure.",
  },

  "1.e4 e5 2.b3": {
    strategy:
      "Prepares Bb2 against e5, but that pawn is easily defended, and the bishop does little " +
      "else. Meanwhile Black hits e4 at once, so White loses time without improving the centre.",
  },

  "1.e4 e5 2.c3": {
    name: "King's Pawn Game: MacLeod Attack",
    strategy:
      "Prepares d4 to build a broad centre, but takes c3 from the knight and delays development. " +
      "Black strikes first, hitting e4 before White's centre is ready, and equalises without " +
      "trouble.",
  },

  "1.e4 e5 2.c4": {
    name: "English Opening: The Whale",
    strategy:
      "Takes control of d5 but develops nothing and leaves holes on d4 and d3, since neither the " +
      "c-pawn nor the e-pawn can guard them any more. Black can aim at d4, while the e4-pawn " +
      "needs a defender.",
  },

  "1.e4 e5 2.f3": {
    name: "King's Pawn Game: King's Head Opening",
    strategy:
      "Supports e4, but takes f3 from the g1-knight and opens the e1-h4 diagonal, so ...Qh4+ " +
      "becomes possible. Black develops freely or strikes in the centre and gets the easier " +
      "game.",
  },

  "1.e4 e5 2.g3": {
    strategy:
      "Prepares Bg2, but with White's pawn on e4 the bishop's diagonal is blocked by its own " +
      "pawn. Black hits e4 at once, and after 2...d5 3.exd5 Qxd5 the queen looks along the " +
      "vacated long diagonal at the h1-rook.",
  },

  "1.e4 e5 2.h3": {
    strategy:
      "Takes g4 from Black's c8-bishop and king's knight, but develops nothing and does not " +
      "fight for the centre. Black gets a free hand in the centre.",
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
      "freely, while the bishop stays shut in until the queen moves or White plays g3.",
  },

  "1.e4 e5 2.Qf3": {
    name: "Napoleon Opening",
    background:
      "The name came into use after publications of the mid-nineteenth century reported that " +
      "Napoleon Bonaparte played it, in the game he lost to the chess automaton known as the " +
      "Turk in Vienna in 1809.",
    strategy:
      "Eyes f7 and sets a trap, 2...Nc6 3.Bc4 Bc5?? 4.Qxf7#, which Black easily avoids by " +
      "developing. The queen takes f3 from the g1-knight and can be harassed with tempo, so " +
      "White falls behind in development.",
  },

  "1.e4 e5 2.Qg4": {
    strategy:
      "The queen attacks g7, which the f8-bishop defends, and walks into 2...d5, which " +
      "uncovers the c8-bishop against the queen and attacks e4. After 3.exd5?? Bxg4 the queen " +
      "is lost, so it must retreat at a cost in time.",
  },

  "1.e4 e5 2.Be2": {
    strategy:
      "Prepares castling but blocks the queen's diagonal to h5 and does nothing for the centre. " +
      "Black takes the centre, and White is left with a passive set-up without an active bishop.",
  },

  "1.e4 e5 2.Bd3": {
    name: "King's Pawn Game: Tortoise Opening",
    strategy:
      "Defends e4 but blocks the d-pawn and with it the c1-bishop, so White's development stalls " +
      "until the bishop moves again. Black develops in comfort and takes over the initiative.",
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
      "centre or development. Black attacks e4 at once and gets a comfortable game, while the " +
      "kingside, where White's king usually castles, is loosened.",
  },

  "1.e4 e5 2.b4": {
    strategy:
      "Offers the b-pawn with no development behind it: 2...Bxb4 wins it, and after 3.c3 the " +
      "bishop retreats safely, leaving White without enough compensation.",
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
      "Gives up castling and blocks both the queen and the king's bishop, so the king has to " +
      "move again before White can develop normally. Black needs nothing special: quick " +
      "development and an open centre are enough against the stranded king.",
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

  "1.e4 e5 2.Nf3 Nc6": {
    name: "King's Knight Opening: Normal Variation",
    strategy:
      "The most natural reply: Black defends the attacked pawn and develops a piece in the same " +
      "move, and the knight joins the fight for the centre. Black commits to nothing yet, and " +
      "that is both the strength and the cost. Every set-up stays open, but White now decides " +
      "what kind of game it becomes, from slow manoeuvring to sharp open play, and Black has to " +
      "be at home in all of them.",
  },

  "1.e4 e5 2.Nf3 Nf6": {
    name: "Petrov's Defence",
    background:
      "First popularised by the Russian player Alexander Petrov in the mid-nineteenth " +
      "century; in recognition of the early investigations by Petrov and Carl Jaenisch it is " +
      "also called the Russian Game, the predominant name in some countries. World champions " +
      "Smyslov, Petrosian, Karpov and Kramnik have all adopted it.",
    strategy:
      "Counterattacks e4 instead of defending e5, aiming for a solid, symmetrical position and " +
      "sidestepping the main set-ups White would otherwise choose. Black must be careful, " +
      "though: grabbing e4 at once after 3.Nxe5 is an error that leaves Black worse. The price " +
      "is a drawish reputation and a large body of theory to learn.",
  },

  "1.e4 e5 2.Nf3 d6": {
    name: "Philidor Defence",
    background:
      "Ruy López already recommended 2...d6 in his 1561 book, because 2...Nc6 allows the Ruy " +
      "Lopez 3.Bb5, and the eighteenth-century master Philidor favoured it as an alternative " +
      "to 2...Nc6. By the First World War it had almost completely vanished from top-level " +
      "chess.",
    strategy:
      "Defends e5 with a pawn and builds a compact, solid set-up, but a passive one: the " +
      "f8-bishop is hemmed in and White usually gets more space with d4. Black must then choose " +
      "between holding e5 and giving up the centre for piece play against e4. It is easy to " +
      "understand and rarely seen at the top level.",
  },

  "1.e4 e5 2.Nf3 Qe7": {
    name: "Gunderam Defence",
    background:
      "Gerhart Gunderam first played it in a 1958 correspondence game against August Babel, " +
      "but International Master Hélder Câmara had played it four years earlier, in 1954, in " +
      "the Brazilian Championship. Brazilian players took it up, so that it came to be called " +
      "the Brazilian Defence.",
    strategy:
      "Defends e5 with the queen, which blocks the f8-bishop and makes Black's development " +
      "awkward. White develops freely with natural moves, while Black's plans of queenside " +
      "castling or a later ...f5 cost time.",
  },

  "1.e4 e5 2.Nf3 Qf6": {
    name: "Greco Defence",
    background:
      "Named after Gioachino Greco, who gave a line against it in 1620. It is also called the " +
      "McConnell Defence, and Paul Morphy met it against McConnell in New Orleans in 1849.",
    strategy:
      "Defends e5 but brings the queen out early and takes f6 from the knight on g8. White " +
      "develops with tempo against the queen, for example with e5 or Nd5 later; the advantage is " +
      "mainly one of smoother development.",
  },

  "1.e4 e5 2.Nf3 Na6": {
    strategy:
      "Puts the knight on the rim, far from the centre, and ignores the attack on e5. After " +
      "3.Nxe5 White has won a pawn and can build the centre while the knight on a6 is misplaced.",
  },

  "1.e4 e5 2.Nf3 Bd6": {
    strategy:
      "Defends e5 but blocks the d-pawn, and with it the c8-bishop, and invites 3.d4. After " +
      "3...exd4 4.Nxd4 White has the centre and a lead in development, and the bishop on d6 " +
      "becomes a target for Nb5 and Nf5.",
  },

  "1.e4 e5 2.Nf3 Bc5": {
    name: "Busch–Gass Gambit",
    background: "The Busch–Gass Gambit was something of an online fad in the early 2020s.",
    strategy:
      "Develops with pressure on f2 and offers the e5-pawn. After 3.Nxe5 Nc6 4.Nf3 White is a " +
      "pawn up with the knight safely back, and Black has only a small lead in development to " +
      "show for it.",
  },

  "1.e4 e5 2.Nf3 Bb4": {
    strategy:
      "Develops the bishop to a square where it pins nothing, since the white knight has not " +
      "yet come to c3, and leaves e5 attacked. White takes the pawn with 3.Nxe5 and can gain " +
      "time against the bishop with c3.",
  },

  "1.e4 e5 2.Nf3 Nh6": {
    strategy:
      "Develops the knight to the rim, away from the centre, where Bxh6 can double Black's " +
      "pawns once d3 or d4 has opened the c1-h6 diagonal. It also leaves e5 attacked, so " +
      "3.Nxe5 wins a pawn.",
  },

  "1.e4 e5 2.Nf3 a6": {
    strategy:
      "Guards b5 against a bishop that is not there yet and ignores the attack on e5. After " +
      "3.Nxe5 White has won a pawn, and if Black wins it back with ...Qe7 and ...Qxe4+, White " +
      "still leads in development.",
  },

  "1.e4 e5 2.Nf3 a5": {
    strategy:
      "Spends a tempo on a rim pawn while e5 is attacked. 3.Nxe5 wins a pawn, and ...a5 " +
      "contributes nothing to development or to the centre.",
  },

  "1.e4 e5 2.Nf3 b6": {
    strategy:
      "Prepares ...Bb7 against e4, but e5 is attacked and the bishop would not defend it. " +
      "White takes the pawn with 3.Nxe5 and can answer ...Bb7 with d3.",
  },

  "1.e4 e5 2.Nf3 c6": {
    name: "King's Pawn Game: Gunderam Gambit",
    strategy:
      "Prepares ...d5 to challenge the e4-pawn, but does not defend e5. White takes the pawn " +
      "with 3.Nxe5, and Black's challenge to e4 then costs further tempi.",
  },

  "1.e4 e5 2.Nf3 c5": {
    name: "Sicilian Defence: Jalalabad Variation",
    strategy:
      "Does nothing for the attacked e5-pawn: the c-pawn move ignores the threat. After 3.Nxe5 " +
      "d6 4.Nf3 White is simply a pawn up.",
  },

  "1.e4 e5 2.Nf3 d5": {
    name: "Elephant Gambit",
    background:
      "Also known as the Queen's Pawn Countergambit and the Turkish Gambit, it is considered " +
      "unsound. Games cited for it include Lob–Eliskases (German correspondence, 1929), which " +
      "White won, and Bondarevsky–Lilienthal (USSR, 1941) and Tal–Lutikov (Tallinn, 1964), " +
      "which gave White the advantage.",
    strategy:
      "Strikes at e4 at the cost of a pawn: after 3.exd5 e4 4.Qe2 White keeps the extra pawn, " +
      "and after 3.Nxe5 Black wins it back on e4 but White keeps the better game. Black can " +
      "set traps but often ends up passive, with White holding the initiative and more space.",
  },

  "1.e4 e5 2.Nf3 f5": {
    name: "Latvian Gambit",
    background:
      "Analysed by Giulio Cesare Polerio in the late sixteenth century, it came to be called " +
      "the Greco Countergambit after Gioachino Greco. Its present name honours several " +
      "Latvian players who analysed it, most prominently Kārlis Bētiņš.",
    strategy:
      "Hits e4 at once and gives up the e-pawn after 3.Nxe5, aiming for open lines. The price is " +
      "a loosened king, with the e8-h5 diagonal open to Qh5+, and with accurate play White keeps " +
      "the better game.",
  },

  "1.e4 e5 2.Nf3 g6": {
    strategy:
      "Prepares ...Bg7 and a kingside fianchetto, but e5 remains attacked. After 3.Nxe5 White is " +
      "a pawn up and can build a broad centre.",
  },

  "1.e4 e5 2.Nf3 h6": {
    strategy:
      "A waiting move that guards against Ng5 and Bg5 and does nothing about e5. 3.Nxe5 takes " +
      "a pawn, and Black's only counter is ...Qe7 followed by ...Qxe4+, which still leaves " +
      "White ahead in development.",
  },

  "1.e4 e5 2.Nf3 h5": {
    strategy:
      "Starts a kingside pawn advance without defending e5. After 3.Nxe5 White is a pawn up, " +
      "and the h-pawn can no longer guard g5.",
  },

  "1.e4 e5 2.Nf3 Qg5": {
    strategy:
      "Walks into 3.Nxg5: the knight on f3 attacks g5 and nothing protects the queen, so " +
      "White wins it for nothing.",
  },

  "1.e4 e5 2.Nf3 Qh4": {
    strategy:
      "Puts the queen on a square the knight on f3 attacks, so 3.Nxh4 wins it outright; " +
      "nothing protects h4.",
  },

  "1.e4 e5 2.Nf3 Ke7": {
    strategy:
      "Gives up castling for no reason, blocks the queen and the king's bishop, and leaves e5 " +
      "attacked. After 3.Nxe5 White is a pawn up and Black's king stays in the centre.",
  },

  "1.e4 e5 2.Nf3 Be7": {
    strategy:
      "Leaves e5 attacked and stands in the queen's way, so after 3.Nxe5 Black cannot hit " +
      "back with ...Qe7 or ...Qf6. White is simply a pawn up.",
  },

  "1.e4 e5 2.Nf3 Ba3": {
    strategy:
      "Throws the bishop away: 3.bxa3 takes it, and Black has no recapture and nothing in " +
      "return.",
  },

  "1.e4 e5 2.Nf3 Ne7": {
    strategy:
      "Blocks the queen and the king's bishop, does not defend e5, and takes away the ...Qe7 " +
      "resource. 3.Nxe5 wins a pawn, and the knight on e7 is clumsily placed.",
  },

  "1.e4 e5 2.Nf3 b5": {
    strategy:
      "Gives a pawn away for nothing: 3.Bxb5 takes it, the bishop then pins the d7-pawn, and " +
      "e5 is still attacked by the knight.",
  },

  "1.e4 e5 2.Nf3 f6": {
    name: "Damiano Defence",
    background:
      "Named after the Portuguese author Pedro Damiano, who in fact condemned the move as " +
      "weak; in 1847 Staunton noted that it occurs in Damiano's old work. Chigorin played it " +
      "against Schiffers at St Petersburg in 1897, and it is never seen in top-level play " +
      "today.",
    strategy:
      "Defends e5 with a pawn but exposes the king and takes f6 from the knight. After 3.Nxe5 " +
      "fxe5 4.Qh5+ Ke7 5.Qxe5+ White is clearly winning, and declining with 3...Qe7 still " +
      "leaves Black worse.",
  },

  "1.e4 e5 2.Nf3 g5": {
    strategy:
      "Loosens the kingside while e5 hangs: 3.Nxe5 wins a pawn, and h4 then attacks the " +
      "advanced g-pawn as well.",
  },

  "1.e4 e5 2.Bc4 Nf6": {
    name: "Bishop's Opening: Berlin Defence",
    background:
      "Ludwig Bledow and the Berlin Pleiades worked out this reply, which neutralised f2-f4 " +
      "in view of the counterstroke ...d7-d5. It is Black's most common answer to the " +
      "Bishop's Opening.",
    strategy:
      "Develops a piece with an attack on e4, so White must decide at once how to defend the " +
      "pawn, and Black gets active play early. The usual quiet defence lets Black develop " +
      "comfortably, but White can still play f2-f4 later, a delayed King's Gambit, so Black has " +
      "to stay alert.",
  },

  "1.e4 e5 2.Bc4 Nc6": {
    strategy:
      "Defends e5 with a developing move but puts no pressure on e4, so White is free to choose " +
      "the kind of game: a calm, familiar development, or a pawn sacrifice with f2-f4 in King's " +
      "Gambit style, which Black must be ready for.",
  },

  "1.e4 e5 2.Bc4 Bc5": {
    name: "Bishop's Opening: Classical Variation",
    background:
      "Black's symmetrical reply, also called the Boi Variation, and after 2...Nf6 and " +
      "2...Nc6 the next most common answer to 2.Bc4.",
    strategy:
      "Mirrors White's bishop and develops it with an eye on f2, a symmetrical and solid set-up. " +
      "White can steer the game into other openings or prepare d4 with c3, and Black must be " +
      "ready for a pawn offered for quick play.",
  },

  "1.e4 e5 2.Bc4 c6": {
    name: "Bishop's Opening: Philidor Counterattack",
    background:
      "Playable but rarely seen. Black seems to do better by delaying the idea one move, with " +
      "2...Nf6 3.d3 c6, the Paulsen Defence.",
    strategy:
      "Prepares ...d5 to gain a tempo on the bishop and build a broad pawn centre. It costs " +
      "time: the pawn takes c6 from the b8-knight and leaves e5 without support, so White can " +
      "strike first in the centre.",
  },

  "1.e4 e5 2.Bc4 d6": {
    strategy:
      "Defends e5 solidly, and after 3.Nf3 the game transposes to the Philidor Defence with " +
      "White's bishop already on c4. The pawn limits the f8-bishop to e7 and cedes space, so " +
      "Black is sound but passive.",
  },

  "1.e4 e5 2.Bc4 Qe7": {
    strategy:
      "Covers e5 and f7 with the queen but shuts in the f8-bishop, which stays idle until the " +
      "queen moves again or ...g6 follows. White develops freely and gains time by harassing the " +
      "queen with a knight.",
  },

  "1.e4 e5 2.Bc4 Ne7": {
    strategy:
      "Prepares ...d5, but the knight blocks the f8-bishop, and a knight on f6 serves the same " +
      "aim from a better square. 3.Qh5 then hits e5 and threatens mate on f7, and only 3...Ng6 " +
      "parries both.",
  },

  "1.e4 e5 2.Bc4 Na6": {
    strategy:
      "Puts a knight on the rim, far from the centre, and does not defend e5, which 3.Nf3 " +
      "attacks at once. 3.Bxa6 bxa6 would also wreck Black's queenside pawns.",
  },

  "1.e4 e5 2.Bc4 Qf6": {
    strategy:
      "Brings the queen out early: it defends e5 and eyes f2 but takes f6 from the knight. " +
      "3.Nc3 followed by Nd5 attacks it with tempo, and White develops while Black spends " +
      "moves on the queen.",
  },

  "1.e4 e5 2.Bc4 Qg5": {
    strategy:
      "Attacks the undefended g2-pawn, but 3.Nf3 hits the queen and e5 at once. Taking with " +
      "3...Qxg2? fails to 4.Rg1 Qh3 5.Bxf7+ Kxf7 6.Ng5+, which wins the queen.",
  },

  "1.e4 e5 2.Bc4 Qh4": {
    strategy:
      "Hits e4 and f2 at once, but 3.Qe2 defends e4 and prepares Nf3, which attacks the queen " +
      "with tempo. After the queen retreats White has the lead in development.",
  },

  "1.e4 e5 2.Bc4 Bd6": {
    strategy:
      "Defends e5, but the bishop blocks the d-pawn, so ...d6 and ...d5 are impossible and " +
      "the c8-bishop stays shut in. 3.Qh5 already threatens Qxf7#, and White develops freely " +
      "against the clumsy set-up.",
  },

  "1.e4 e5 2.Bc4 Bb4": {
    strategy:
      "Loses time: 3.c3 hits the bishop at once and prepares d4, so White builds the centre " +
      "with tempo. On b4 the bishop bites only on the well-defended d2-pawn and does nothing " +
      "for e5.",
  },

  "1.e4 e5 2.Bc4 Nh6": {
    strategy:
      "Covers f7 and eyes g4 and f5, but the rim knight does little in the centre. Once the " +
      "d-pawn moves, Bxh6 gxh6 exchanges it for White's dark-squared bishop and doubles " +
      "Black's kingside pawns.",
  },

  "1.e4 e5 2.Bc4 a6": {
    strategy:
      "Prepares ...b5 to chase the bishop, but spends two wing moves on it while e5 and f7 are " +
      "exposed to attack. The bishop simply retreats to b3.",
  },

  "1.e4 e5 2.Bc4 a5": {
    strategy:
      "Gains queenside space and stops b4, but develops nothing and leaves e5 undefended. White " +
      "uses the tempo to attack e5.",
  },

  "1.e4 e5 2.Bc4 b6": {
    strategy:
      "Prepares ...Bb7 against the e4-pawn, but White holds e4 easily, and the slow move leaves " +
      "f7 and e5 exposed to Qh5.",
  },

  "1.e4 e5 2.Bc4 b5": {
    name: "Bishop's Opening: Anderssen Gambit",
    strategy:
      "Offers the b-pawn to draw the bishop off its diagonal, hoping for ...Bb7 against e4 " +
      "and quick development. 3.Bxb5 simply takes it, and Black's compensation is too thin to " +
      "justify the pawn.",
  },

  "1.e4 e5 2.Bc4 c5": {
    strategy:
      "Leaves a permanent hole on d5 and develops nothing. The e5-pawn is left without " +
      "support, and 3.Nf3 attacks it at once.",
  },

  "1.e4 e5 2.Bc4 d5": {
    name: "Bishop's Opening: Khan Gambit",
    background:
      "Analysis credits Black with fair compensation for the pawn, even if the gambit is " +
      "objectively insufficient.",
    strategy:
      "Strikes at the bishop and the e4-pawn at once and offers the d-pawn for time. Black " +
      "develops quickly after 3.exd5, but the gambit is objectively insufficient and White keeps " +
      "the extra pawn.",
  },

  "1.e4 e5 2.Bc4 f6": {
    strategy:
      "Defends e5 but takes f6 from the g8-knight and opens the a2-g8 diagonal to the " +
      "c4-bishop, which then hinders castling short. 3.Qh5+ forces ...g6 or ...Ke7 and leaves " +
      "lasting holes around the king.",
  },

  "1.e4 e5 2.Bc4 f5": {
    name: "Bishop's Opening: Calabrese Countergambit",
    background:
      "Named after Greco's homeland, Calabria. It is considered dubious: the line recommended " +
      "by Carl Jaenisch, 3.d3 Nf6 4.f4 d6 5.Nf3, gives White the advantage.",
    strategy:
      "Hits e4 with the f-pawn and goes for a counterattack, but it weakens the e8-h5 diagonal " +
      "and the king's cover, so White keeps an edge.",
  },

  "1.e4 e5 2.Bc4 g6": {
    strategy:
      "Prepares a fianchetto but develops nothing and loosens the dark squares around the " +
      "king. 3.d4 strikes at e5 at once, and after 3...exd4 4.Qxd4 the queen already hits the " +
      "rook on h8.",
  },

  "1.e4 e5 2.Bc4 g5": {
    strategy:
      "Grabs space on the kingside but develops nothing and gives up control of f6 and h6 for " +
      "good. White hits e5 at once, and h2-h4 can later undermine the g5-pawn.",
  },

  "1.e4 e5 2.Bc4 h6": {
    strategy:
      "Takes g5 from White's knight and bishop but develops nothing and leaves e5 without " +
      "support. White uses the tempo to hit e5 at once.",
  },

  "1.e4 e5 2.Bc4 h5": {
    strategy:
      "Prevents Qh5 but weakens g5 and the kingside for no real gain. It develops nothing, " +
      "and 3.Nf3 hits the undefended e5-pawn with tempo.",
  },

  "1.e4 e5 2.Bc4 Ke7": {
    strategy:
      "Gives up castling for good and blocks the f8-bishop. 3.Qh5 at once threatens Qxe5#, " +
      "and the c4-bishop adds to the pressure on f7, so the king remains a target in the " +
      "centre.",
  },

  "1.e4 e5 2.Bc4 Be7": {
    strategy:
      "Aims for a compact, solid set-up but loses the e5-pawn to 3.Qh5, which hits e5 and " +
      "threatens Qxf7# because the bishop takes away the king's escape square. After 3...Nc6? " +
      "4.Qxf7# ends the game at once.",
  },

  "1.e4 e5 2.Bc4 Ba3": {
    strategy:
      "Hangs the bishop: bxa3 or Nxa3 simply wins the piece, and Black gets nothing in " +
      "return.",
  },

  "1.e4 e5 2.Nc3 Nf6": {
    name: "Vienna Game: Falkbeer Variation",
    background:
      "Named after Ernst Falkbeer (1819–1885), the Austrian master and journalist who founded " +
      "the Wiener Schachzeitung in 1855 and also gave his name to the Falkbeer Countergambit. " +
      "It is the most common reply to the Vienna Game.",
    strategy:
      "Develops a piece and attacks e4, which the c3 knight must keep guarding. It also prepares " +
      "to answer an attack on the centre with ...d5, striking back at once instead of defending. " +
      "Taking a gambit pawn on f4 would be a mistake, since the push to e5 drives the knight " +
      "back.",
  },

  "1.e4 e5 2.Nc3 Nc6": {
    name: "Vienna Game: Max Lange Defence",
    background:
      "Named after Max Lange (1832–1899), the German chess player, problem composer and " +
      "organiser who also gave his name to the Max Lange Attack in the Two Knights Defence. " +
      "Hooper and Whyld's Oxford Companion to Chess lists 2...Nc6 as the Max Lange Defence.",
    strategy:
      "Develops the queen's knight and defends e5. With no knight on f6 for a push to e5 to hit, " +
      "Black can accept a gambit pawn on f4, which leads to very sharp play. Otherwise the " +
      "set-up is solid and flexible, and White chooses between quiet development and attack.",
  },

  "1.e4 e5 2.Nc3 Bc5": {
    name: "Vienna Game: Anderssen Defence",
    background:
      "An offbeat but playable alternative to the main replies; the former world champion " +
      "José Raúl Capablanca played it as Black against Ilya Kan at Moscow 1936.",
    strategy:
      "Puts the bishop on the a7–g1 diagonal, where it eyes f2, and keeps Black's development " +
      "flexible. It is offbeat but playable, and Black must watch e5: after Nf3, the natural " +
      "...Nc6 allows Nxe5 Nxe5 d4, forking bishop and knight.",
  },

  "1.e4 e5 2.Nc3 Bb4": {
    strategy:
      "Develops the bishop against the c3 knight, the guard of e4, and prepares ...Nf6. It is a " +
      "playable sideline: a direct attack on g7 gains White nothing clear, and quieter play " +
      "often transposes to other openings.",
  },

  "1.e4 e5 2.Nc3 d6": {
    strategy:
      "Defends e5 solidly and opens the c8 bishop, but restricts the f8 bishop to e7 and " +
      "concedes space. The game often resembles a Philidor Defence, with White free to choose " +
      "between quiet play and a sharper attack.",
  },

  "1.e4 e5 2.Nc3 f5": {
    strategy:
      "Strikes at e4 at once, but after 3.exf5 Black is a pawn down and the e8–h5 diagonal is " +
      "open. Trying to regain the pawn with 3...d5 runs into 4.Qh5+.",
  },

  "1.e4 e5 2.Nc3 Qe7": {
    strategy:
      "Defends e5, but the queen blocks the f8 bishop and stands exposed: 3.Nd5 attacks it " +
      "and the c7 pawn at once, so the queen must move again.",
  },

  "1.e4 e5 2.Nc3 Qf6": {
    strategy:
      "Eyes f2 but takes the f6 square from the g8 knight, and 3.Nd5 attacks the queen and " +
      "the c7 pawn at once. The queen must move again while guarding c7, so Black has lost " +
      "time.",
  },

  "1.e4 e5 2.Nc3 Qg5": {
    strategy:
      "Eyes g2, which the f1 bishop defends, but 3.d4 attacks the queen with the c1 bishop " +
      "and the e5 pawn with the d-pawn. Black loses a tempo and has to give up the centre.",
  },

  "1.e4 e5 2.Nc3 Qh4": {
    strategy:
      "Attacks e4, which the c3 knight guards, and f2, which the king guards. 3.Nf3 hits the " +
      "queen with a developing move and attacks e5 as well, so Black loses time.",
  },

  "1.e4 e5 2.Nc3 Be7": {
    strategy:
      "Develops the bishop modestly but blocks the queen and leaves e5 undefended against 3.Nf3. " +
      "Black needs another move just to hold the pawn, and White gets a free hand in the centre.",
  },

  "1.e4 e5 2.Nc3 Bd6": {
    strategy:
      "Blocks the d-pawn and loses time after 3.Nb5, which attacks the bishop and c7. If " +
      "Black ignores it, Nxd6+ cxd6 doubles the pawns and leaves White the two bishops.",
  },

  "1.e4 e5 2.Nc3 Na6": {
    strategy:
      "Puts the knight on the rim, where its only forward squares are b4 and c5 and it does " +
      "nothing for e5. White develops and takes the centre against an undefended centre pawn.",
  },

  "1.e4 e5 2.Nc3 Nh6": {
    strategy:
      "Puts the knight on the rim, blocks the h-pawn and leaves e5 undefended. After 3.d4 the " +
      "c1 bishop eyes h6, and Bxh6 gxh6 would wreck the kingside pawns.",
  },

  "1.e4 e5 2.Nc3 Ne7": {
    strategy:
      "Blocks the f8 bishop and the queen, leaves e5 undefended and puts no pressure on e4. " +
      "White develops freely with 3.Nf3, attacking e5.",
  },

  "1.e4 e5 2.Nc3 a6": {
    strategy:
      "A waiting move that neither develops a piece nor contests the centre. After 3.Nf3 the " +
      "e5 pawn is attacked and Black has to defend it a tempo down.",
  },

  "1.e4 e5 2.Nc3 a5": {
    strategy:
      "Advances the a-pawn for no purpose in the opening, loses a tempo and weakens b5. White " +
      "develops with 3.Nf3, attacking e5.",
  },

  "1.e4 e5 2.Nc3 b6": {
    strategy:
      "Prepares ...Bb7 against e4, but does nothing for e5, which 3.Nf3 attacks at once. The " +
      "pawn move costs a tempo, and the bishop would only hit a well-guarded e4 pawn.",
  },

  "1.e4 e5 2.Nc3 c6": {
    strategy:
      "Prepares ...d5 but leaves e5 without support and takes c6 from the b8 knight. After 3.Nf3 " +
      "Black usually has to spend another tempo on defending e5, because 3...d5 4.exd5 cxd5 " +
      "5.Nxe5 loses a pawn.",
  },

  "1.e4 e5 2.Nc3 c5": {
    strategy:
      "Leaves e5 undefended and weakens d5, a square the c3 knight can occupy at once. After " +
      "3.Nf3 Black needs to defend e5 anyway, so the c-pawn move has only cost time.",
  },

  "1.e4 e5 2.Nc3 f6": {
    strategy:
      "Supports e5 but takes the f6 square from the g8 knight and weakens the king: with f7 " +
      "empty, the a2–g8 and e8–h5 diagonals open for Bc4 and Qh5+. After 3.Bc4 the bishop " +
      "already covers g8, so Black cannot castle short until the diagonal is closed.",
  },

  "1.e4 e5 2.Nc3 g6": {
    strategy:
      "Prepares ...Bg7 but ignores the centre and loosens the long diagonal. After 3.d4 exd4 " +
      "4.Qxd4 the queen attacks the h8 rook, and Black must block at once, since 4...Bg7? " +
      "drops the bishop to 5.Qxg7.",
  },

  "1.e4 e5 2.Nc3 g5": {
    strategy:
      "Weakens the king's cover and the f5 and h5 squares and opens the long diagonal. After " +
      "3.d4 exd4 4.Qxd4 the queen attacks the h8 rook, and blocking with 4...Nf6 shuts the d8 " +
      "queen off from g5, so 5.Bxg5 wins a pawn.",
  },

  "1.e4 e5 2.Nc3 h6": {
    strategy:
      "Loses a tempo on a pawn move that stops a bishop which cannot yet come to g5. e5 stays " +
      "undefended, and White develops with 3.Nf3.",
  },

  "1.e4 e5 2.Nc3 h5": {
    strategy:
      "A flank advance that weakens g5 and the kingside for no gain, with nothing done for " +
      "development or against e4. 3.Nf3 attacks e5 immediately.",
  },

  "1.e4 e5 2.Nc3 d5": {
    strategy:
      "Challenges e4 too early: 3.exd5 wins a pawn, and 3...Qxd5 loses the queen to 4.Nxd5. " +
      "After 3...Nf6 4.Bc4 the c3 knight and the bishop guard d5, so 4...Nxd5? 5.Nxd5 costs " +
      "Black a piece.",
  },

  "1.e4 e5 2.Nc3 b5": {
    strategy:
      "Throws a pawn away: 3.Nxb5 or 3.Bxb5 wins it for nothing, since ...a6 only chases the " +
      "piece back.",
  },

  "1.e4 e5 2.Nc3 Ke7": {
    strategy:
      "Gives up castling for good, blocks the f8 bishop and the queen and keeps the king in " +
      "the centre, where 3.Nd5+ and a later f4 harass it.",
  },

  "1.e4 e5 2.Nc3 Ba3": {
    strategy:
      "Hangs the bishop to 3.bxa3: no Black piece guards a3, and there is no compensation for " +
      "the piece.",
  },
};
