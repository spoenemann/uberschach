import type { OpeningTexts } from "../book.ts";

// English prose for c4.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.c4 e5": {
    strategy:
      "Occupies the centre at once and controls d4 and f4, so White's d4 needs preparation. " +
      "Black usually develops with ...Nf6 and ...Nc6, adds ...Bb4 or ...g6 and ...Bg7, and " +
      "plays ...d5 once it can be done safely. White answers with Nc3, g3 and Bg2 and fights " +
      "for d5, where a knight backed by the pawn on c4 is strong.",
  },

  "1.c4 Nf6": {
    strategy:
      "Develops a piece and controls d5 and e4 without committing a pawn, so Black can wait " +
      "for White's set-up. After d4 the game usually becomes an Indian Defence or a Queen's " +
      "Gambit; if White avoids d4, a later ...c5 or ...e5 leads to Symmetrical or Reversed " +
      "Sicilian positions. White also has independent tries of its own, such as 2.Nc3 e6 " +
      "3.e4.",
  },

  "1.c4 c5": {
    strategy:
      "Contests d4 just as White's pawn contests d5, so the structure stays balanced and " +
      "White's extra tempo is the main asset. Black chooses later between the Hedgehog with " +
      "...e6, ...b6, ...Bb7 and ...d6, the solid ...Nc6, ...g6 and ...Bg7, and an early " +
      "...d5. For both sides the key moment is the break with the d-pawn, which opens the " +
      "centre.",
  },

  "1.c4 e6": {
    strategy:
      "Prepares ...d5 with pawn support, so that cxd5 can be met by ...exd5 with a firm " +
      "centre, and keeps ...Nf6 and ...Bb4 in reserve. White usually replies 2.Nc3 or 2.Nf3, " +
      "and the game often transposes into a Queen's Gambit Declined, a Catalan or an Indian " +
      "Defence. The bishop on c8 stays shut in for a while, the usual price of this solid " +
      "set-up.",
  },

  "1.c4 c6": {
    strategy:
      "Prepares ...d5 with a solid pawn chain while keeping the c8-bishop free to develop " +
      "before ...e6. White decides the character of the game: 2.d4 d5 leads to a Slav " +
      "Defence, 2.e4 d5 to a Caro-Kann Defence and 2.Nf3 d5 3.b3 to a Réti Opening. The price " +
      "is that the queen's knight loses c6 and often develops to d7, so Black's play is solid " +
      "rather than active.",
  },

  "1.c4 g6": {
    strategy:
      "Prepares ...Bg7 on the long diagonal and postpones every central decision. With ...Nf6 " +
      "it can lead to a King's Indian (...d6) or a Grünfeld (...d5), without it to a Modern " +
      "Defence, and with ...c5 or ...e5 to Symmetrical or Reversed Sicilian positions. White " +
      "may take space at once with 2.e4 or 2.d4, so Black must be ready to strike at the " +
      "centre later.",
  },

  "1.c4 Nc6": {
    name: "English Opening: Anglo-Lithuanian Variation",
    strategy:
      "Develops a piece and prepares ...e5; after 2.Nc3 e5 the game is a Reversed Sicilian. " +
      "The knight blocks the c-pawn, so the ...c5 and ...c6 set-ups are gone, and 2.d4 e5 " +
      "3.d5 gains space with tempo. Sound, but it offers nothing the main replies do not.",
  },

  "1.c4 f5": {
    name: "English Opening: Anglo-Dutch Defence",
    strategy:
      "Controls e4 and becomes a Dutch Defence if White plays d4. Black gets sharp play and " +
      "kingside attacking chances, but weakens the e8-h5 diagonal and the e6 square. White " +
      "can also stay in English lines with 2.Nc3, 2.Nf3 or 2.g3, usually with a bishop on g2 " +
      "that contests e4.",
  },

  "1.c4 d5": {
    name: "English Opening: Anglo-Scandinavian Defence",
    background:
      "Thought of as inferior to the Scandinavian Defence because White exchanges its c-pawn " +
      "for Black's centre pawn. It is seldom played, though it may transpose into the Queen's " +
      "Gambit or the Réti Opening.",
    strategy:
      "Strikes at the centre at once, but after 2.cxd5 White has two centre pawns against " +
      "one. Recapturing costs time: 2...Qxd5 3.Nc3 drives the queen away, and after 2...Nf6 " +
      "the knight that retakes on d5 can be chased by Nc3 and e4.",
  },

  "1.c4 b6": {
    name: "English Defence",
    background:
      "Also reached by 1.d4 e6 2.c4 b6. The Leicester player P. N. Wallis investigated it in " +
      "the late 1940s and early 1950s, and the English grandmasters Tony Miles and Jonathan " +
      "Speelman have used it successfully.",
    strategy:
      "Prepares ...Bb7 and ...e6, fighting for e4 along the long diagonal instead of " +
      "occupying the centre. White can build a broad centre with d4 and e4, which Black then " +
      "tries to undermine with ...Bb4, ...f5 and sometimes ...Qh4. Double-edged: if the " +
      "undermining fails, White's space tells.",
  },

  "1.c4 d6": {
    strategy:
      "Prepares ...e5 and ...Nf6 and most often transposes into the Reversed Sicilian after " +
      "2.Nc3 e5. It frees the c8-bishop but blocks the f8-bishop and takes less space than " +
      "...e5 at once, so White can claim the centre with 2.d4 or 2.e4. Sound but modest.",
  },

  "1.c4 g5": {
    name: "English Opening: Myers Defence",
    background:
      "Named after Hugh Myers, who advocated it in print and in actual play. It is intended " +
      "as an improved Grob's Attack, and John L. Watson considers it playable in his 1981 " +
      "Batsford book on the English Opening.",
    strategy:
      "Gains kingside space and prepares ...Bg7, aiming at d4 and b2 along the long diagonal. " +
      "The pawn is loose: after 2.d4 the bishop on c1 attacks it, and Black either covers it " +
      "with ...h6 or offers it with 2...Bg7 3.Bxg5 c5 against d4. The move weakens the dark " +
      "squares around Black's king but is not refuted by force.",
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
      "A rim knight that claims no central square. White builds the centre with 2.d4 or 2.e4, " +
      "and Black must spend further tempi re-routing the knight, typically via c7.",
  },

  "1.c4 Nh6": {
    strategy:
      "Heads for f5 from a rim square, but 2.d4 already threatens Bxh6, after which ...gxh6 " +
      "wrecks the kingside pawns. The knight costs time and the centre is left to White.",
  },

  "1.c4 a6": {
    strategy:
      "Prepares ...b5 but does nothing for the centre or for development. White takes space " +
      "with 2.d4 or 2.e4 or develops with Nc3 while Black has made a slow queenside move.",
  },

  "1.c4 a5": {
    strategy:
      "Stops b4 but is a slow flank move that permanently weakens b5 and does nothing for the " +
      "centre. White simply occupies the centre with Nc3 and e4 or d4.",
  },

  "1.c4 f6": {
    strategy:
      "Takes e5 and g5 but blocks the knight's best square on f6 and weakens the e8-h5 " +
      "diagonal in front of the king. It develops nothing, and White takes the centre with " +
      "2.d4 or 2.e4.",
  },

  "1.c4 h6": {
    strategy:
      "A waiting move that only takes g5 from White's bishop. It develops nothing and loses a " +
      "tempo, and White keeps all central options with 2.d4, 2.e4 or 2.Nc3.",
  },

  "1.c4 h5": {
    strategy:
      "Gains space on the kingside but weakens g5 and g6 and does nothing for the centre or " +
      "development. White takes the centre with 2.d4 or 2.e4.",
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
