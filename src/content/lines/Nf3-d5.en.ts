import type { OpeningTexts } from "../book.ts";

// English prose for Nf3-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.Nf3 d5 2.c4": {
    name: "Réti Opening",
    background:
      "According to Réti, the opening entered master play early in 1923, and Hans Kmoch " +
      "called the system of attack Réti used against Rubinstein at Karlovy Vary 1923 the Réti " +
      "Opening or Réti System. In modern usage the name refers only to Nf3 and c4 by White " +
      "against ...d5, with at least one bishop fianchettoed and no early d4.",
    strategy:
      "Strikes at d5 from the flank before committing the centre pawns, usually with g3 and " +
      "Bg2 to follow. Black can take with 2...dxc4, when e3, Na3 or Qa4+ wins the pawn back; " +
      "hold d5 with ...e6 or ...c6, often reaching Queen's Gambit positions; or push 2...d4, " +
      "met by e3 or the sharper b4. It is the most common independent line after 1.Nf3, " +
      "though the centre is left to Black for the moment.",
  },

  "1.Nf3 d5 2.d4": {
    strategy:
      "Claims the centre at once and transposes into the Queen's Pawn Game with the knight " +
      "already on f3. White can follow with c4 for a Queen's Gambit, with e3 and Bd3 for a " +
      "Colle set-up, or with Bf4 for a London System. The move gives up the independent " +
      "character of 1.Nf3 and lets Black pick a standard defence, but it is entirely sound.",
  },

  "1.Nf3 d5 2.g3": {
    name: "King's Indian Attack",
    background:
      "Its grandmaster use began as an offshoot of the widespread King's Indian Defence of " +
      "the 1950s. Prominent players of it include Bobby Fischer (mostly early in his career), " +
      "Mikhail Botvinnik, Vasily Smyslov and Tigran Petrosian; today it is relatively " +
      "uncommon at grandmaster level but popular at club level.",
    strategy:
      "Prepares Bg2 and castling, then d3, Nbd2 and e4 for a compact system that is easy to " +
      "repeat against most set-ups. Black can build a centre with ...Nf6, ...c5 and ...e6, " +
      "develop the bishop with ...c6 and ...Bg4, or go for the reversed King's Indian with " +
      "...c5, ...Nc6 and ...e5. White leaves the centre to Black at first and later aims for " +
      "e4-e5, which gains kingside space and attacking chances.",
  },

  "1.Nf3 d5 2.b3": {
    name: "Nimzowitsch–Larsen Attack",
    background:
      "Aron Nimzowitsch experimented with 1.b3 in the 1920s and 1930s but more commonly used " +
      "the move order 1.Nf3 d5 2.b3. Bent Larsen played 1.b3 frequently from 1968 to 1972, " +
      "and Bobby Fischer played it five times in 1970.",
    strategy:
      "Prepares Bb2, which bears down the long diagonal on e5 and g7, often with e3 and Bb5 " +
      "against a knight on c6 to follow, a reversed Nimzo-Indian approach. The knight on f3 " +
      "keeps Black from answering with ...e5 at once. Many of these lines are rated only " +
      "equal by theory, and White leaves the centre to Black for now.",
  },

  "1.Nf3 d5 2.e3": {
    strategy:
      "Opens the diagonal of the f1 bishop and heads for Be2 or Bd3 with d4 or c4 to follow, " +
      "steering towards a Colle-style or Queen's Gambit set-up. It is solid but shuts in the " +
      "c1 bishop and commits to a slow plan, so Black develops freely with ...Nf6, ...c5 or " +
      "...Bg4.",
  },

  "1.Nf3 d5 2.d3": {
    name: "Zukertort Opening: Old Indian Attack",
    strategy:
      "Supports an e4 advance for a reversed Old Indian set-up with Nbd2, g3 or Be2. It is " +
      "flexible and sound, yet passive: Black takes the centre with ...Nf6, ...Nc6 and ...e5, " +
      "or with ...c5, and meets e4 on equal terms.",
  },

  "1.Nf3 d5 2.c3": {
    strategy:
      "Prepares d4 for a Colle- or Slav-like structure, or e4 later. The pawn takes c3 from " +
      "the b1 knight, which has to develop via d2, while Black develops freely with ...Nf6 " +
      "and ...Bf5 or ...Bg4.",
  },

  "1.Nf3 d5 2.Nc3": {
    name: "Zukertort Opening: Reversed Mexican Defence",
    strategy:
      "Develops a piece and prepares e4, but blocks the c-pawn, so the c4 set-ups of the main " +
      "lines are no longer available. Black can gain space with ...d4 or play ...Nf6 and " +
      "...Bf5 and reach a comfortable position.",
  },

  "1.Nf3 d5 2.e4": {
    strategy:
      "Offers the e-pawn for quick piece play: after 2...dxe4 3.Ng5 White hopes to win it " +
      "back or to hit f7. Black returns it with 3...e5 or keeps it with 3...Bf5 and stands " +
      "better either way, although an unprepared defender can fall into tactical traps.",
  },

  "1.Nf3 d5 2.a3": {
    strategy:
      "Prepares b4 and takes b4 from a bishop, but spends a tempo on a rim pawn while Black " +
      "takes the centre with ...Nf6, ...c5 and ...e6.",
  },

  "1.Nf3 d5 2.a4": {
    name: "Zukertort Opening: The Potato",
    strategy:
      "Gains queenside space and stops ...b5, yet prepares nothing and weakens b4. Black " +
      "develops and builds the centre with ...Nf6, ...e6 and ...c5 without difficulty.",
  },

  "1.Nf3 d5 2.b4": {
    name: "Santasiere's Folly",
    background:
      "Named after the American master Anthony Santasiere (1904–1977), who originated and " +
      "developed it and wrote a book about it, The Futuristic Chess Opening: Santasiere's " +
      "Folly (Chess Digest, Dallas 1973).",
    strategy:
      "Gains queenside space with Bb2 in mind, but the b4-pawn has no pawn support and " +
      "becomes a target for ...e6 and ...Bxb4, ...Qd6 or ...a5. White spends time on the " +
      "flank while Black develops freely.",
  },

  "1.Nf3 d5 2.h3": {
    strategy:
      "Takes g4 from Black's bishop before ...Bg4 is any threat, and spends a tempo that " +
      "Black uses to claim the centre with ...Nf6, ...e6 and ...c5.",
  },

  "1.Nf3 d5 2.h4": {
    strategy:
      "Gains kingside space but does nothing for the centre or development, and loosens the " +
      "kingside where White's king would castle. Black develops freely with ...Nf6 and ...e6 " +
      "or ...Bf5.",
  },

  "1.Nf3 d5 2.Na3": {
    strategy:
      "Develops the knight to the rim, from where it eyes b5 and c4, but it stands badly and " +
      "blocks the a-pawn. Black takes the centre with ...Nf6 and ...e6 or ...c5.",
  },

  "1.Nf3 d5 2.Rg1": {
    name: "Zukertort Opening: Ampel Variation",
    strategy:
      "Forfeits kingside castling to support a later g4, with nothing else ready to back the " +
      "advance. Black develops with ...Nf6 and ...e6, and White can only castle long or leave " +
      "the king in the centre.",
  },

  "1.Nf3 d5 2.Ng5": {
    strategy:
      "Moves the knight a second time to hit f7 and h7, which the king and the rook defend. " +
      "After 2...h6 it has to go back to f3 or h3, and Black has gained a tempo.",
  },

  "1.Nf3 d5 2.Nh4": {
    strategy:
      "Puts the knight on the rim with no defender, where 2...e6 or 2...e5 opens the queen's " +
      "diagonal to h4. White must spend another tempo retreating it or covering it with g3.",
  },

  "1.Nf3 d5 2.Ne5": {
    strategy:
      "Moves the knight a second time to e5, where no pawn supports it. ...Nd7 offers a trade " +
      "and ...f6 drives it away with gain of time, while White has developed nothing else.",
  },

  "1.Nf3 d5 2.Nd4": {
    strategy:
      "Centralises the knight with a second move, but 2...e5 or 2...c5 hits it at once and it " +
      "must move again, to f3, b3 or b5. Black builds a broad centre with gain of time.",
  },

  "1.Nf3 d5 2.Ng1": {
    strategy:
      "Returns the knight to its starting square and undoes the first move. White has made no " +
      "progress, and Black has the extra tempo of d5 in hand.",
  },

  "1.Nf3 d5 2.g4": {
    strategy:
      "Loses a pawn at once: nothing defends g4, so 2...Bxg4 takes it, and White has only a " +
      "half-open g-file to show for the weakened kingside.",
  },

  "1.Nf3 d5": {
    background:
      "The usual reply in the 1920s, when Richard Réti began many of his games with 1.Nf3; " +
      "against it he played 2.c4, the move order now named after him.",
  },
};
