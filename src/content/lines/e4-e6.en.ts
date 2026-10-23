import type { OpeningTexts } from "../book.ts";

// English prose for e4-e6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.e4 e6 2.d4": {
    strategy:
      "Builds the full pawn centre and meets 2...d5 by defending e4 with Nc3 or Nd2, " +
      "advancing with e5 or exchanging with exd5. White gains space, while Black strikes at " +
      "d4 with ...c5, at an advanced e5-pawn with ...f6, or gives up the centre with ...dxe4. " +
      "The price is the tension: the e-pawn's fate has to be settled at once, and the d4-pawn " +
      "remains Black's usual target.",
  },

  "1.e4 e6 2.d3": {
    name: "French Defence: King's Indian Attack",
    background:
      "The King's Indian Attack most often arises against the French Defence, usually after " +
      "2...d5 3.Nd2. Leading players such as Benko, Fischer, Stein and Psakhis have used " +
      "2.d3, and Fischer won with it against Myagmarsuren at the Sousse Interzonal of 1967.",
    strategy:
      "Prepares a set-up with Nd2, Ngf3, g3, Bg2 and O-O, keeping the advance e5 in reserve " +
      "for when Black has played ...d5. White gives up the immediate fight for the centre in " +
      "return for a solid, flexible position with no d4-pawn for Black to attack and chances " +
      "on the kingside. Black usually answers with ...c5, ...Nc6, ...Nf6 and ...Be7 and " +
      "expands on the queenside.",
  },

  "1.e4 e6 2.Nc3": {
    name: "French Defence: Queen's Knight",
    strategy:
      "Develops the queen's knight and defends e4, so that 2...d5 3.d4 transposes into the " +
      "main lines with 3.Nc3. Black can also leave the French with 2...c5 and steer for a " +
      "Closed Sicilian. Sound, but it offers nothing that 2.d4 does not.",
  },

  "1.e4 e6 2.Nf3": {
    name: "French Defence: Knight Variation",
    strategy:
      "Develops a piece and keeps d4 in reserve, so that 2...d5 3.exd5 exd5 4.d4 transposes " +
      "into the Exchange Variation. The independent try 3.Nc3, the Two Knights Variation, is " +
      "met well by 3...d4 or 3...Nf6, and 2...c5 turns the game into a Sicilian. Playable, " +
      "but White has no reason to prefer it to 2.d4.",
  },

  "1.e4 e6 2.Qe2": {
    name: "French Defence: Chigorin Variation",
    strategy:
      "Puts the queen on the e-file, so that after 2...d5 3.exd5 the e6-pawn is pinned and " +
      "Black has to recapture with the queen. Black therefore usually answers 2...c5, and a " +
      "main line runs 3.Nf3 Nc6 4.g3 g6 5.Bg2 Bg7 with equal chances. The queen blocks the " +
      "f1-bishop's diagonal, which is why White fianchettoes it.",
  },

  "1.e4 e6 2.c4": {
    name: "French Defence: Steiner Variation",
    strategy:
      "Takes aim at d5 to discourage 2...d5, but Black can still play it: after 3.cxd5 exd5 " +
      "4.exd5 Nf6, White keeps the extra pawn only with 5.Bb5+, and Black gets good " +
      "compensation for it. 4.Qb3 instead is the Orthoschnapp Gambit.",
  },

  "1.e4 e6 2.b3": {
    name: "French Defence: Horwitz Attack",
    strategy:
      "Prepares Bb2 to put pressure on the long diagonal and on g7. After 2...d5 3.Bb2 dxe4 " +
      "it is the Réti Gambit, in which White gives the e-pawn for quick development; Black " +
      "can also decline with 3...Nf6 4.e5 Nfd7. Rare, risky and not recommended, though not " +
      "refuted.",
  },

  "1.e4 e6 2.c3": {
    strategy:
      "Prepares d4 with pawn support, and 2...d5 3.e5 c5 4.d4 transposes into the main line " +
      "of the Advance Variation. Black has other options, though: 2...c5 3.d4 leads into the " +
      "Alapin Sicilian, and after 2...d5 3.d4 dxe4 White's knight can only recapture from d2. " +
      "Sound, but no improvement on 2.d4.",
  },

  "1.e4 e6 2.e5": {
    name: "French Defence: Steinitz Attack",
    strategy:
      "Advances the pawn before the centre is ready. 2...d6 hits it at once and gives White " +
      "no advantage, since exd6 Bxd6 only helps Black's development; 2...d5 3.d4 merely " +
      "transposes into the Advance Variation, which White could have reached with 2.d4.",
  },

  "1.e4 e6 2.Bb5": {
    name: "French Defence: Bird Invitation",
    background:
      "Introduced by Henry Bird during the Vienna 1873 tournament and little played since.",
    strategy:
      "Pins the d7-pawn against the king so that 2...d5 is not possible at once. But 2...c6 " +
      "or 2...a6 attacks the bishop, and once it retreats Black plays ...d5 with a gain of " +
      "time.",
  },

  "1.e4 e6 2.Bc4": {
    strategy:
      "Develops the bishop onto a diagonal that the e6-pawn already blocks, and 2...d5 hits " +
      "it at once: after 3.exd5 exd5 it has to move again, to b3 or d3, and White has lost a " +
      "tempo while Black has the centre.",
  },

  "1.e4 e6 2.f4": {
    name: "French Defence: La Bourdonnais Variation",
    background: "Named after Louis-Charles Mahé de La Bourdonnais, a 19th-century French master.",
    strategy:
      "Supports a later e5 and claims space, but develops nothing and weakens the e1-h4 " +
      "diagonal and the squares e3 and g3. Black takes the centre with 2...d5 and answers e5 " +
      "with ...c5.",
  },

  "1.e4 e6 2.g3": {
    name: "French Defence: Réti-Spielmann Attack",
    strategy:
      "Prepares Bg2 but is slow against 2...d5: 3.d3 dxe4 4.dxe4 Qxd1+ costs White the right " +
      "to castle, 3.Bg2 dxe4 4.Bxe4 Nf6 gains Black a tempo on the bishop, and 3.exd5 exd5 " +
      "gives a level, symmetrical game.",
  },

  "1.e4 e6 2.b4": {
    name: "French Defence: Banzai-Leong Gambit",
    strategy:
      "Gives up the b-pawn to gain time: after 2...Bxb4 3.c3 the bishop has to move again and " +
      "White can follow with d4, but the centre does not make up for the pawn, and Black " +
      "develops with ...Nf6 and ...d5.",
  },

  "1.e4 e6 2.Be2": {
    strategy:
      "Prepares castling but does nothing for the centre and takes e2 from the g1-knight. " +
      "After 2...d5 White still has to settle the attack on e4 with exd5, e5, d3 or Nc3, " +
      "while Black develops freely.",
  },

  "1.e4 e6 2.Bd3": {
    strategy:
      "Blocks the d-pawn, so the central break d4 is unavailable until the bishop moves " +
      "again, and 2...d5 challenges e4 at once.",
  },

  "1.e4 e6 2.Ne2": {
    strategy:
      "Develops the knight, but it blocks the f1-bishop and the queen's diagonal and does not " +
      "contest the centre. After 2...d5 Black has the easier game.",
  },

  "1.e4 e6 2.Na3": {
    strategy:
      "Puts the knight on the rim, heading for c4 or b5 but doing nothing for the centre. " +
      "Black can take the centre with 2...d5 or double White's a-pawns with 2...Bxa3 3.bxa3.",
  },

  "1.e4 e6 2.Nh3": {
    strategy:
      "Develops the knight to the rim, heading for f4, but does nothing for the centre. Black " +
      "takes the centre with 2...d5, and once the e6-pawn leaves the c8-h3 diagonal, for " +
      "instance after 3.exd5 exd5, ...Bxh3 gxh3 can wreck White's kingside pawns.",
  },

  "1.e4 e6 2.Qf3": {
    strategy:
      "Takes f3 from the king's knight and aims at f7, but an early queen achieves little: " +
      "...Nf6 develops with an attack on e4, ...d5 takes the centre, and f7 is easy to " +
      "defend.",
  },

  "1.e4 e6 2.Qg4": {
    strategy:
      "Eyes g7, but the Bf8 guards it, so there is no threat. 2...Nf6 hits the queen and e4 " +
      "at once and Black develops with tempo.",
  },

  "1.e4 e6 2.Qh5": {
    strategy:
      "Aims at f7, but the e6-pawn already shuts out a bishop on c4, so f7 is safe; 2...Nf6 " +
      "hits the queen and e4 at once, and Black develops with tempo.",
  },

  "1.e4 e6 2.f3": {
    strategy:
      "Supports e4 but takes f3 from the g1-knight and opens the e1-h4 diagonal, so that " +
      "2...Qh4+ forces 3.g3 or a king move. Black can also simply take the centre with " +
      "2...d5.",
  },

  "1.e4 e6 2.g4": {
    strategy:
      "Gains kingside space but does nothing for the centre or development and loosens the " +
      "pawns in front of the king. Black takes the centre with 2...d5 and can attack the " +
      "g4-pawn with ...h5.",
  },

  "1.e4 e6 2.h4": {
    strategy:
      "A flank pawn move that develops nothing, does nothing for the centre and loosens the " +
      "kingside. Black replies 2...d5 and White has lost a tempo.",
  },

  "1.e4 e6 2.h3": {
    strategy:
      "A waiting move that stops ...Bg4 but does nothing for the centre or development. " +
      "2...d5 challenges e4 with White's pieces still at home.",
  },

  "1.e4 e6 2.a3": {
    strategy:
      "Prepares b4 and a queenside expansion, but loses a tempo; 2...d5 takes the centre and " +
      "White has nothing to show for the time spent.",
  },

  "1.e4 e6 2.a4": {
    strategy:
      "A wing pawn move that neither develops a piece nor fights for the centre; ...d5 " +
      "challenges e4 with White's pieces still at home.",
  },

  "1.e4 e6 2.Ke2": {
    strategy:
      "Forfeits castling and shuts in the f1-bishop and the queen for nothing. Black takes " +
      "the centre with 2...d5, and the king stands on the e-file, which opens as soon as " +
      "pawns are exchanged on d5.",
  },

  "1.e4 e6 2.Ba6": {
    strategy:
      "Loses a piece for nothing: the bishop attacks only b7, which the Bc8 guards, and " +
      "2...bxa6 or 2...Nxa6 simply takes it.",
  },

  "1.e4 e6": {
    name: "French Defence",
    background:
      "Named after a correspondence match between London and Paris in 1834, in which the " +
      "Paris side, persuaded by Jacques Chamouillet, adopted it. Wilhelm Steinitz called it " +
      "“the dullest of all openings”, yet for several decades it has been the third most " +
      "popular reply to 1.e4, after 1...c5 and 1...e5.",
  },
};
