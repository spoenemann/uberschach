import type { OpeningTexts } from "../book.ts";

// English prose for b3-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.b3 d5 2.Bb2": {
    strategy:
      "Places the bishop on the long diagonal against e5 and g7, so that ...e5 needs " +
      "preparation, usually with ...Nc6. White follows with e3, Nf3 and Be2 or Bb5, or " +
      "challenges d5 with e3 and c4; against ...c5 and ...Nc6 the usual set-up is a reversed " +
      "Nimzo-Indian. Black must watch the h8 corner, since ...g6 before ...Nf6 allows Bxh8. " +
      "The price is that the centre stays with Black for the moment.",
  },

  "1.b3 d5 2.Nf3": {
    strategy:
      "Develops the knight to cover e5 and d4, so that together with Bb2 it makes ...e5 hard " +
      "to achieve; the position is that of 1.Nf3 d5 2.b3. Typical continuations are Bb2, e3 " +
      "and Be2 or Bb5, with c4 as a later lever against d5. White leaves the centre to Black " +
      "for now, and many lines are rated only equal by theory.",
  },

  "1.b3 d5 2.e3": {
    strategy:
      "Opens the f1 bishop and prepares Bb2, Nf3 and Be2 or Bb5, with c4 as a later lever " +
      "against d5; the game usually transposes into the Bb2 lines. If Black answers 2...e5 at " +
      "once, Bb2 follows and Bb5 pins a knight on c6 that guards the pawn. The move is " +
      "flexible and sound, but it lets Black choose the pawn structure first.",
  },

  "1.b3 d5 2.c4": {
    strategy:
      "Attacks d5 at once, aiming for an English-style set-up with Bb2 behind it. After " +
      "2...dxc4 3.bxc4 White has the half-open b-file and an extra centre pawn but an " +
      "isolated a-pawn, while 2...d4 gains space for Black. Playable, but Black chooses the " +
      "structure before White has developed a piece.",
  },

  "1.b3 d5 2.d3": {
    strategy:
      "Prepares e4 with Nd2, Ngf3 or g3 and Bg2 for a reversed Old Indian set-up. It is " +
      "flexible and sound, yet passive: Black takes the centre with ...e5 and ...Nf6 and " +
      "meets e4 on equal terms.",
  },

  "1.b3 d5 2.d4": {
    strategy:
      "Takes the centre and transposes into a Queen's Pawn Game in which b3 is already " +
      "played, followed by Bb2, Nf3 and c4 or e3. Sound but slow: nothing is done against d5, " +
      "so Black completes development with ...Nf6, ...Bf5 and ...e6 or ...c5 at ease.",
  },

  "1.b3 d5 2.g3": {
    strategy:
      "Prepares Bg2, so that one bishop bears down on d5 and the other, from b2, on the long " +
      "dark diagonal. Black develops freely with ...Nf6, ...c5 and ...Nc6 or takes space with " +
      "...e5, and White must find the moment for c4 or d3 and e4. Playable, but it leaves the " +
      "centre undisputed.",
  },

  "1.b3 d5 2.f4": {
    strategy:
      "Takes control of e5 and prepares Nf3, e3 and Bb2 for a Bird-style set-up. It weakens " +
      "the e1-h4 diagonal and the e3 square and commits the f-pawn before Black has shown a " +
      "set-up; sound, but it gives up the flexibility of the other moves.",
  },

  "1.b3 d5 2.Ba3": {
    name: "Nimzowitsch–Larsen Attack: Graz Attack",
    strategy:
      "Aims the bishop at e7 and f8, so that ...e6 allows Bxf8 and forces ...Kxf8, which " +
      "costs Black the right to castle. The bishop gives up the long diagonal and has little " +
      "else to hit, and Black can answer with ...Nf6 and ...g6 or ...Bf5, while 2...c5 would " +
      "drop a pawn to Bxc5.",
  },

  "1.b3 d5 2.Nc3": {
    strategy:
      "Develops the knight onto c3, on the long diagonal that b3 prepared for the bishop, and " +
      "2...d4 attacks it at once, gains space and forces it to move again, for instance to e4 " +
      "or b1. White loses a tempo, and a later Bb2 bites on the pawn on d4.",
  },

  "1.b3 d5 2.c3": {
    strategy:
      "Blocks the long diagonal that b3 prepared for the bishop, since a bishop on b2 would " +
      "now face its own pawn on c3. Black develops freely with ...Nf6, ...e5 or ...Bf5, and " +
      "White has spent a tempo undoing the point of b3.",
  },

  "1.b3 d5 2.Na3": {
    strategy:
      "Puts the knight on the rim, where it eyes b5, while c4 is covered by the d5 pawn. It " +
      "does nothing for the centre, ...c6 also takes b5 away, and Black builds the centre " +
      "with ...e5 and ...Nf6.",
  },

  "1.b3 d5 2.Nh3": {
    strategy:
      "Heads for f4 or g5, but 2...Bxh3 forces 3.gxh3, since the f1 bishop is blocked by g2, " +
      "and leaves White with doubled, isolated h-pawns. Even without the exchange the knight " +
      "stands badly on the rim.",
  },

  "1.b3 d5 2.b4": {
    strategy:
      "Pushes the same pawn a second time, reaching the position after 1.b4 d5 with Black to " +
      "move, a full tempo down. On b4 the pawn can be hit by ...a5, ...Qd6 or the f8 bishop " +
      "once the e-pawn has moved, and it needs a3 or c3 to hold it.",
  },

  "1.b3 d5 2.f3": {
    strategy:
      "Prepares e4 but takes f3 from the g1 knight and weakens the e1-h4 diagonal. Black " +
      "answers with ...e5 or ...Nf6 and White has spent a tempo without developing a piece.",
  },

  "1.b3 d5 2.a3": {
    strategy:
      "A waiting move that neither develops a piece nor contests the centre; it only takes b4 " +
      "from Black's pieces. Black sets up with ...e5 or ...Nf6 at leisure.",
  },

  "1.b3 d5 2.a4": {
    strategy:
      "Pushes a flank pawn that neither develops a piece nor contests the centre. It controls " +
      "b5 but leaves b4 weak, and Black plays ...e5 or ...Nf6 at leisure.",
  },

  "1.b3 d5 2.h3": {
    strategy:
      "Takes g4 from the c8 bishop but spends a tempo on a prophylactic move before any piece " +
      "is developed, handing Black the centre with ...e5 or ...Nf6.",
  },

  "1.b3 d5 2.h4": {
    strategy:
      "Gains space on the kingside and prepares h5, but does nothing for the centre or " +
      "development and weakens the squares g3 and g4. Black simply develops with ...Nf6 and " +
      "...Bf5.",
  },

  "1.b3 d5 2.e4": {
    strategy:
      "Puts a pawn on e4 where d5 attacks it and nothing defends it, so 2...dxe4 simply wins " +
      "it. Bb2 hits g7 only until ...Nf6 closes the diagonal, and Black keeps the extra pawn " +
      "with ...Bf5 or ...f5.",
  },

  "1.b3 d5 2.g4": {
    strategy:
      "Loses a pawn to 2...Bxg4: ...d5 has opened the c8-h3 diagonal and nothing protects g4. " +
      "White gets no compensation and has also weakened the kingside.",
  },

  "1.b3 d5": {
    name: "Nimzowitsch–Larsen Attack: Classical Variation",
    background:
      "Aron Nimzowitsch more often reached this kind of position through 1.Nf3 d5 2.b3, a " +
      "move order that rules out ...e5. After 1.b3 itself, 1...d5 is Black's second most " +
      "common reply, in about 27 percent of games.",
  },
};
