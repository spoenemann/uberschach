import type { OpeningTexts } from "../book.ts";

// English prose for c4.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.c4 e5": {
    strategy:
      "Occupies the centre at once and controls d4 and f4, so White cannot easily play d4. White " +
      "has the extra tempo and a grip on d5, where a knight backed by the c4-pawn is strong, " +
      "while Black has the firm centre pawn.",
  },

  "1.c4 Nf6": {
    strategy:
      "Develops a piece and controls d5 and e4 without committing a pawn, so Black can wait and " +
      "choose a set-up once White shows his plan. White keeps the choice too: a quiet flank " +
      "game, or a broad pawn centre at once, which Black must then challenge.",
  },

  "1.c4 c5": {
    strategy:
      "Contests d4 just as White's pawn contests d5, so the structure stays balanced and White's " +
      "extra tempo is the main asset. Either side can strike with the d-pawn at the right " +
      "moment, and that break decides the game: it opens the centre, while without it the play " +
      "is slow manoeuvring.",
  },

  "1.c4 e6": {
    strategy:
      "Prepares ...d5 with pawn support, so that cxd5 can be met by ...exd5 with a firm centre, " +
      "and keeps the development of Black's pieces flexible. The bishop on c8 stays shut in for " +
      "a while, the usual price of this solid set-up, and White has many ways to change the " +
      "character of the game, so Black must choose the move order with care.",
  },

  "1.c4 c6": {
    strategy:
      "Prepares ...d5 with a solid pawn chain while keeping the c8-bishop free to develop before " +
      "...e6. The price is that the queen's knight loses c6 and often develops to d7, so Black's " +
      "play is solid rather than active, and White decides how sharp the game becomes.",
  },

  "1.c4 g6": {
    strategy:
      "Prepares ...Bg7 on the long diagonal and postpones every central decision. Black can " +
      "still strike later in the centre or keep the fianchetto set-up. White may build a big " +
      "centre at once, so Black must be ready to attack it.",
  },

  "1.c4 Nc6": {
    name: "English Opening: Anglo-Lithuanian Variation",
    strategy:
      "Develops a piece and prepares ...e5. The knight blocks the c-pawn, so Black cannot build " +
      "with it, and 2.d4 e5 3.d5 gains space with tempo. Sound, but it offers nothing the main " +
      "replies do not.",
  },

  "1.c4 f5": {
    name: "English Opening: Anglo-Dutch Defence",
    strategy:
      "Controls e4 and aims for a Dutch-style set-up. Black gets sharp play and kingside " +
      "attacking chances, but weakens the e8-h5 diagonal and the e6 square. White can fight for " +
      "e4 with a bishop on g2.",
  },

  "1.c4 d5": {
    name: "English Opening: Anglo-Scandinavian Defence",
    background:
      "Thought of as inferior to the Scandinavian Defence because White exchanges its c-pawn " +
      "for Black's centre pawn. It is seldom played, though it may transpose into the Queen's " +
      "Gambit or the Réti Opening.",
    strategy:
      "Strikes at the centre at once, but after 2.cxd5 White has traded a flank pawn for Black's " +
      "centre pawn. Recapturing costs time: 2...Qxd5 3.Nc3 drives the queen away, and after " +
      "2...Nf6 the knight that retakes on d5 can be chased by Nc3 and e4.",
  },

  "1.c4 b6": {
    name: "English Defence",
    background:
      "Also reached by 1.d4 e6 2.c4 b6. The Leicester player P. N. Wallis investigated it in " +
      "the late 1940s and early 1950s, and the English grandmasters Tony Miles and Jonathan " +
      "Speelman have used it successfully.",
    strategy:
      "Prepares ...Bb7, fighting for e4 along the long diagonal instead of occupying the centre. " +
      "White may build a broad pawn centre, which Black then tries to undermine with pawn breaks " +
      "and piece pressure. Double-edged: if the undermining fails, White's space tells.",
  },

  "1.c4 d6": {
    strategy:
      "Prepares ...e5 and frees the c8-bishop, but blocks the f8-bishop and takes less space " +
      "than ...e5 at once, so White can claim the centre at once. Sound but modest.",
  },

  "1.c4 g5": {
    name: "English Opening: Myers Defence",
    background:
      "Named after Hugh Myers, who advocated it in print and in actual play. It is intended " +
      "as an improved Grob's Attack, and John L. Watson considers it playable in his 1981 " +
      "Batsford book on the English Opening.",
    strategy:
      "Gains kingside space and prepares ...Bg7, aiming at d4 and b2 along the long diagonal. " +
      "The pawn is loose: after 2.d4 the bishop on c1 attacks it, so Black must cover it or " +
      "offer it as a gambit. The move weakens the dark squares around Black's king but is not " +
      "refuted by force.",
  },

  "1.c4 b5": {
    name: "English Opening: Jaenisch Gambit",
    background:
      "Named after Carl Jaenisch; also known as the Halibut Gambit. It can give Black good " +
      "practical chances but is considered unsound at professional level.",
    strategy:
      "Gives up the b-pawn for open lines: after 2.cxb5 a6 Black hopes for play on the a- and " +
      "b-files. White does not need to take on a6: 3.e4 builds a centre and keeps the extra " +
      "pawn, so the compensation falls short.",
  },

  "1.c4 Na6": {
    strategy:
      "A rim knight that claims no central square. White builds the centre at once, and Black " +
      "must spend further tempi re-routing the knight, typically via c7.",
  },

  "1.c4 Nh6": {
    strategy:
      "Heads for f5 from a rim square, but 2.d4 already threatens Bxh6, after which ...gxh6 " +
      "wrecks the kingside pawns. The knight costs time and the centre is left to White.",
  },

  "1.c4 a6": {
    strategy:
      "Prepares ...b5 but does nothing for the centre or for development. White simply takes " +
      "space or develops while Black has made a slow queenside move.",
  },

  "1.c4 a5": {
    strategy:
      "Stops b4 but is a slow flank move that permanently weakens b5 and does nothing for the " +
      "centre. White simply occupies the centre.",
  },

  "1.c4 f6": {
    strategy:
      "Takes e5 and g5 but blocks the knight's best square on f6 and weakens the e8-h5 diagonal " +
      "in front of the king. It develops nothing, and White takes the centre at once.",
  },

  "1.c4 h6": {
    strategy:
      "A waiting move that only takes g5 from White's bishop. It develops nothing and loses a " +
      "tempo, and White keeps every central option.",
  },

  "1.c4 h5": {
    strategy:
      "Gains space on the kingside but weakens g5 and g6 and does nothing for the centre or " +
      "development. White takes the centre at once.",
  },

  "1.c4": {
    name: "English Opening",
    background:
      "Named after Howard Staunton, the English player regarded as the unofficial world " +
      "champion of his time, who played it in his 1843 match against Saint-Amant and at " +
      "London 1851, the first international tournament. It caught on only in the 20th " +
      "century; Botvinnik, Karpov, Kasparov and Carlsen have all used it in world " +
      "championship matches.",
  },
};
