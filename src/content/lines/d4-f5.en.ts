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
};
