import type { OpeningTexts } from "../book.ts";

// English prose for d4.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.d4 Nf6": {
    name: "Indian Defence",
    background:
      "The earliest known use of the term “Indian Defence” dates from 1884, attributed to the " +
      "openings played by the Indian player Moheschunder Bannerjee against John Cochrane, and " +
      "Savielly Tartakower popularised it in the early 1920s. Championed by the hypermodern " +
      "school in the 1920s, these defences were fully accepted only after Russian players " +
      "showed in the late 1940s that they are sound for Black.",
    strategy:
      "Develops a piece without committing a central pawn and controls e4, so 2.e4 would give " +
      "up a pawn. Depending on White's next moves, Black can choose ...e6 with ...Bb4 or " +
      "...b6, ...g6 with ...Bg7, ...c5, or ...d5. Many of these setups let White build a " +
      "centre first and attack it later with pieces and the breaks ...c5, ...d5 or ...e5. " +
      "White in turn can sidestep the main lines with systems such as the Trompowsky, 2.Bg5, " +
      "or the London with Bf4.",
  },

  "1.d4 d5": {
    name: "Closed Game",
    background:
      "1.d4 d5 became widely popular by the early 20th century, as players with White began " +
      "to try first moves other than 1.e4 more often. 1...d5 remains the second most popular " +
      "reply to 1.d4, after 1...Nf6.",
    strategy:
      "Occupies the centre and stops e4, which White can now play only as a gambit. White " +
      "most often challenges d5 with 2.c4 or chooses a quieter setup with Nf3, Bf4 or e3. " +
      "Black supports d5 with ...e6 or ...c6; after ...c6 the light-squared bishop can often " +
      "develop before ...e6 shuts it in. The cost is flexibility: with the d-pawn committed, " +
      "Black must be ready to meet the Queen's Gambit.",
  },

  "1.d4 e6": {
    name: "Franco-Indian Defence",
    background:
      "The name reflects that 1...e6 may lead to the French Defence or to one of the Indian " +
      "Defences. Eric Schiller proposed calling it the Horwitz Defence, after Bernhard " +
      "Horwitz, who played it against Daniel Harrwitz between 1849 and 1852.",
    strategy:
      "Opens the diagonal of the dark-squared bishop and keeps several systems in reserve: " +
      "after 2.c4, Black can head for a Queen's Gambit Declined with ...d5, a Nimzo-Indian or " +
      "Queen's Indian with ...Nf6, or a Dutch with ...f5. The price is that White can answer " +
      "2.e4, and Black must then be ready to play a French Defence. The light-squared bishop " +
      "often stays behind the e6 pawn and needs ...b6 or a later pawn break to become active.",
  },

  "1.d4 f5": {
    name: "Dutch Defence",
    background:
      "Elias Stein, an Alsatian who settled in The Hague, recommended it as the best reply to " +
      "1.d4 in his 1789 book Nouvel essai sur le Jeu des échecs. In the 1951 World " +
      "Championship match both Mikhail Botvinnik and his challenger David Bronstein played " +
      "it.",
    strategy:
      "Stakes a claim to e4 and aims for unbalanced play with kingside chances. Black chooses " +
      "between the Stonewall with ...e6 and ...d5, the Leningrad with ...g6 and ...Bg7, and " +
      "the Classical setup with ...e6 and ...Be7. The price is a weakened kingside, with the " +
      "e8-h5 diagonal opened, which White can test at once with the gambits 2.e4 or 2.h3 and " +
      "3.g4.",
  },

  "1.d4 Nc6": {
    name: "Bogoljubov–Mikenas Defence",
    background:
      "Named after Efim Bogoljubov and Vladas Mikėnas. Hypermodern players such as Aron " +
      "Nimzowitsch and Bogoljubov tried 1...Nc6, but it has never become very popular.",
    strategy:
      "Develops a knight towards the centre and prepares ...e5, but blocks the c-pawn, so the " +
      "usual ...c5 and ...c6 plans are unavailable. White can reply 2.d5, driving the knight " +
      "away, usually to e5, 2.e4 with a broad centre, or 2.Nf3, which stops ...e5. Sound " +
      "enough, but it commits the knight before White's setup is clear.",
  },

  "1.d4 b6": {
    name: "English Defence",
    background:
      "The English Defence is characterised by 1.d4 e6 2.c4 b6, but it can also arise from " +
      "1.d4 b6, especially at club level, where some players adopt 1...b6 and 2...Bb7 as a " +
      "universal system. It was taken up in the 1970s by leading English players such as Tony " +
      "Miles and Raymond Keene, and Viktor Korchnoi used it successfully in game 6 of his " +
      "Candidates semi-final against Lev Polugaevsky at Évian 1977.",
    strategy:
      "Prepares ...Bb7 to pressure e4 along the long diagonal, usually with ...e6 to follow. " +
      "If White builds a broad centre with c4 and e4, Black attacks it with pieces, ...Bb4 " +
      "and sometimes ...f5, instead of occupying it. Sound but rare, and Black has to play " +
      "accurately against the space White gains.",
  },

  "1.d4 c6": {
    strategy:
      "Prepares ...d5, heading for a Slav after 2.c4 or a Caro-Kann after 2.e4. Sound, but " +
      "Black commits the c-pawn early and must be ready for both openings, while White " +
      "decides which one the game becomes.",
  },

  "1.d4 c5": {
    name: "Old Benoni Defence",
    background:
      "The Benoni name goes back to Aaron Reinganum's 1825 book Ben-Oni, which besides " +
      "defences to the King's and Queen's Gambits analysed the then unknown 1.d4 c5. The line " +
      "is sometimes called the Blackburne Defence after Joseph Henry Blackburne, the first " +
      "player known to have used it successfully. It has never attracted serious interest in " +
      "high-level play, though Alexander Alekhine beat Efim Bogoljubov with it in one game of " +
      "their second match, in 1934.",
    strategy:
      "Attacks d4 at once. White usually answers 2.d5 and gains space, and Black then blocks " +
      "the centre with ...e5 or attacks the advanced pawn with ...e6, while 2.dxc5 e6 " +
      "promises White nothing. Playable, but the space White gains after 2.d5 is lasting.",
  },

  "1.d4 d6": {
    name: "Pillsbury Defence",
    strategy:
      "Prepares ...Nf6 and ...g6 or ...e5, often transposing into a Pirc, Philidor, Old " +
      "Indian or King's Indian structure. Sound but modest: it develops nothing, and White " +
      "gains space with e4 or c4 and picks the line it prefers.",
  },

  "1.d4 g6": {
    name: "Modern Defence",
    strategy:
      "Prepares ...Bg7, so the game usually transposes into a King's Indian or Pirc " +
      "structure. Black lets White build a centre and attacks it later with the g7 bishop and " +
      "pawn breaks such as ...c5 or ...e5. Sound, but after 2.e4 White gets a broad pawn " +
      "centre before ...Nf6 can challenge it, and White picks the line that suits it best.",
  },

  "1.d4 Na6": {
    name: "Australian Defence",
    strategy:
      "Develops the knight to the rim, where it eyes b4 and c5 but does little for the " +
      "centre. White simply takes space with e4 or c4 while the knight still needs several " +
      "moves to become useful.",
  },

  "1.d4 Nh6": {
    strategy:
      "Puts the knight on the rim, where 2.Bxh6 gxh6 leaves Black with doubled, isolated " +
      "h-pawns and a damaged kingside for only the bishop pair. Even without the exchange the " +
      "knight does little for the centre.",
  },

  "1.d4 a6": {
    strategy:
      "Spends a tempo on a rook-pawn move that prepares ...b5 but neither develops a piece " +
      "nor contests the centre. White builds with e4, c4 and Nc3 at leisure.",
  },

  "1.d4 a5": {
    strategy:
      "Spends a tempo on a rook-pawn move that controls b4 but does nothing for the centre or " +
      "development. White is free to build a broad centre with e4 and c4.",
  },

  "1.d4 b5": {
    name: "Polish Defence",
    background:
      "Named by analogy with the Polish Opening, 1.b4. Alexander Wagner played 1.d4 b5 " +
      "against Kuhn in the 1913 Swiss Correspondence Championship and published an analysis " +
      "in Deutsches Wochenschach in 1914, and Boris Spassky played it against Tigran " +
      "Petrosian in game 22 of their 1966 World Championship match.",
    strategy:
      "Gains queenside space but neglects the centre and leaves the b5-pawn loose: after 2.e4 " +
      "the bishop on f1 aims at b5, and defending or recovering the pawn costs Black time.",
  },

  "1.d4 e5": {
    name: "Englund Gambit",
    background:
      "Named after the Swedish player Fritz Englund (1871–1933), who sponsored a thematic " +
      "tournament in 1932–33 in which every game began with the position after 4.Qd5. Kārlis " +
      "Bētiņš (1867–1943) introduced the main line with 2...Nc6 and 3...Qe7, and Henry " +
      "Charlick, the second Australian champion, introduced the 2...d6 line in the early " +
      "1890s.",
    strategy:
      "Offers the e-pawn for quick development and trap chances: after 2.dxe5 Nc6 3.Nf3 Qe7, " +
      "ideas such as ...Qb4+ and ...Qxb2 are in the air. Accurate play lets White keep the " +
      "pawn or a clear lead, so the compensation is questionable.",
  },

  "1.d4 f6": {
    strategy:
      "Takes f6 from the knight, weakens e6 and the e8-h5 diagonal, and develops nothing. " +
      "After 2.e4 White has a broad centre and ideas of Qh5+.",
  },

  "1.d4 h6": {
    strategy:
      "Stops Bg5 but spends a tempo on a rook-pawn move that neither develops a piece nor " +
      "contests the centre. White is free to take space with e4 and c4.",
  },

  "1.d4 h5": {
    strategy:
      "Spends a tempo on a rook-pawn advance that develops nothing, ignores the centre and " +
      "weakens g6. White is free to take the centre with e4 and c4.",
  },

  "1.d4 g5": {
    name: "Borg Defence: Borg Gambit",
    strategy:
      "Hangs the g-pawn to 2.Bxg5 and weakens the whole kingside. After 2...Bg7 the bishop " +
      "only eyes d4, which White defends with c3 or e3, and White stays a clean pawn up.",
  },

  "1.d4": {
    name: "Queen's Pawn Game",
    background:
      "Unusual in the 19th century, when 1.e4 was by far the most common move. Its merits " +
      "were explored in the 20th, first through the Queen's Gambit, then through the Indian " +
      "defences the hypermoderns popularised.",
  },
};
