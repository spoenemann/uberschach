import type { OpeningTexts } from "../book.ts";

// English prose for e4.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.e4 e5": {
    strategy:
      "Claims the centre with a pawn and opens lines for the queen and the king's bishop, " +
      "mirroring White's move. Black aims for quick development with ...Nc6 and ...Nf6 and " +
      "for early castling, while the e5-pawn becomes a target that White usually attacks with " +
      "2.Nf3. Play is often open and tactical, and White keeps the first-move initiative.",
  },

  "1.e4 c5": {
    strategy:
      "Fights for d4 from the flank instead of mirroring White. After Nf3 and d4, Black " +
      "trades the c-pawn for White's d-pawn, which gives a central pawn majority and a " +
      "half-open c-file. White usually leads in development and attacks on the kingside, " +
      "Black counterattacks on the queenside, and the unbalanced structure gives both sides " +
      "winning chances.",
  },

  "1.e4 e6": {
    strategy:
      "Prepares ...d5 with the e-pawn's support and accepts a slightly cramped position in " +
      "return for a resilient structure. After 2.d4 d5 Black strikes at White's centre with " +
      "...c5 and, against a pawn on e5, with ...f6, while the c8-bishop is hemmed in by the " +
      "e6-pawn and often has to be traded via ...b6 and ...Ba6 or rerouted via d7. The result " +
      "is a sound game with clear plans, at the price of some passivity.",
  },

  "1.e4 c6": {
    strategy:
      "Prepares ...d5 while keeping the c8-bishop free to come out to f5 or g4 before ...e6, " +
      "so Black gets a sound pawn structure without a passive light-squared bishop. The price " +
      "is time: the knight loses its natural c6-square, and the ...c5 break costs the c-pawn " +
      "a second move. White usually gets more space and freer development, while Black relies " +
      "on a solid structure with few weaknesses.",
  },

  "1.e4 d5": {
    strategy:
      "Challenges e4 at once and, after 2.exd5, trades Black's d-pawn for White's e-pawn. " +
      "Recapturing with the queen loses time to 3.Nc3, while 2...Nf6 regains the pawn a move " +
      "later unless White tries to hold it with 3.c4. Black gets an open game and easy " +
      "development, typically with ...c6 and ...Bf5, at the cost of tempi and some space.",
  },

  "1.e4 d6": {
    strategy:
      "Prepares ...Nf6 and ...g6 and invites White to build a broad centre with d4 and Nc3, " +
      "which Black then undermines with ...c5 or ...e5 and a fianchettoed king's bishop. The " +
      "setup is flexible and keeps many pawn structures possible, but White gets space and " +
      "attacking chances if Black reacts passively.",
  },

  "1.e4 Nf6": {
    strategy:
      "Attacks e4 at once and invites 2.e5, hoping the advanced pawns become targets. After " +
      "2...Nd5 White can chase the knight with c4 and build a broad pawn centre with d4 and " +
      "even f4, while Black strikes at it with ...d6 and often ...c5 or ...Bg4. The game is " +
      "double-edged: White gains space and tempi, and Black gets counterplay against " +
      "overextended pawns.",
  },

  "1.e4 g6": {
    strategy:
      "Prepares ...Bg7 to hit White's centre from a distance and keeps ...d6, ...Nf6 and " +
      "...c6 available until White commits. After 2.d4 Bg7 Black accepts less space for a " +
      "flexible, hypermodern setup, aiming for counterplay with ...c5 or ...e5. The risk is a " +
      "passive position if White builds a big centre and Black does not strike back in time.",
  },

  "1.e4 Nc6": {
    name: "Nimzowitsch Defence",
    background:
      "Named after Aron Nimzowitsch, who originated the defence and usually answered 2.d4 " +
      "with 2...d5. Kasparov and Keene wrote that it “has never been fully accepted as a " +
      "dependable opening”, though they considered it sound.",
    strategy:
      "Develops a knight at once and invites a pawn centre: after 2.d4 Black answers ...d5 or " +
      "...e5, and 2.Nf3 e5 transposes into an open game. The knight blocks the c-pawn, so the " +
      "usual ...c6 and ...c5 breaks are unavailable, and White keeps more space after 2.d4 d5 " +
      "3.e5. Sound, but it gives White the easier game.",
  },

  "1.e4 b6": {
    name: "Owen's Defence",
    background:
      "Named after John Owen, a nineteenth-century English vicar and strong amateur, who " +
      "played it in two games against Paul Morphy in 1858, winning one and losing one. It was " +
      "rare at master level until Bent Larsen and Michael Basman adopted it in the 1970s.",
    strategy:
      "Prepares ...Bb7 to press on e4 and the long diagonal, but leaves the centre to White: " +
      "after 2.d4 Bb7 3.Bd3 the e4-pawn is covered, and Black continues with ...e6, ...c5 and " +
      "...Nf6 against a broad White centre. Theory regards the move as unreliable rather than " +
      "refuted, since the bishop's pressure seldom makes up for the space conceded.",
  },

  "1.e4 a6": {
    name: "St. George Defence",
    background:
      "The first known game with 1.e4 a6 was a simultaneous exhibition on 11 December 1868, " +
      "in which the English amateur J. Baker beat Wilhelm Steinitz. Tony Miles beat Anatoly " +
      "Karpov with it at the 1980 European Team Championship in Skara, after which it was " +
      "also called the Birmingham Defence, after Miles's hometown.",
    strategy:
      "Prepares ...b5 and ...Bb7 to attack the centre from the flank, and keeps the choice " +
      "between ...e6, ...d5 and ...Nf6 open. White simply takes space with 2.d4, and the slow " +
      "a-pawn move needs ...b5 to justify its tempo. Sound enough, but the lost time leaves " +
      "Black slightly worse.",
  },

  "1.e4 h6": {
    name: "Carr Defence",
    background:
      "The defence is mentioned in Unorthodox Chess Openings, and Michael Basman and Magnus " +
      "Carlsen have both played it.",
    strategy:
      "Spends a tempo on a rook's pawn to prevent Bg5 and prepare ...g5, but does nothing for " +
      "the centre or development. After 2.d4 White has a free hand in the centre, and a " +
      "follow-up ...g5 only adds a weakened kingside.",
  },

  "1.e4 Na6": {
    name: "Lemming Defence",
    strategy:
      "Puts the knight on the rim, where it does nothing for the centre and can be exchanged " +
      "by Bxa6 bxa6, which doubles the a-pawns. White takes the centre with d4 and Nf3 while " +
      "the knight still looks for a useful square.",
  },

  "1.e4 Nh6": {
    name: "Adams Defence",
    strategy:
      "Puts the knight on the rim, where it covers f5 and g4 but becomes a target: after d4 " +
      "the bishop on c1 can take it with Bxh6 gxh6 and wreck Black's kingside pawns. Black " +
      "also spends time without helping the centre.",
  },

  "1.e4 a5": {
    name: "Ware Defence",
    background:
      "Also known as the Corn Stalk Defence. Preston Ware, an American player who often " +
      "played uncommon openings, used it in eleven recorded tournament games from 1880 to " +
      "1882, winning four and losing seven.",
    strategy:
      "Spends a tempo on a rook's pawn that neither challenges the centre nor develops a " +
      "piece, and weakens b5. White takes the centre with 2.d4 and 3.Nf3 and Black has no " +
      "compensation for the lost time.",
  },

  "1.e4 b5": {
    name: "O'Neill Gambit",
    strategy:
      "Offers the b-pawn: 2.Bxb5 wins it at once, and the compensation, ...Bb7 against e4 and " +
      "the half-open b-file, is too little, since White defends e4 with Nc3 or Qe2 and stays " +
      "a clean pawn up.",
  },

  "1.e4 f6": {
    name: "Barnes Defence",
    background:
      "Named after Thomas Wilson Barnes, who beat Paul Morphy with it in 1858, although it is " +
      "regarded as clearly inferior.",
    strategy:
      "Blocks the natural f6 square of the king's knight and weakens the e8–h5 diagonal and " +
      "the king. White takes the centre with 2.d4 and develops freely, while Black has no " +
      "useful follow-up.",
  },

  "1.e4 f5": {
    name: "Duras Gambit",
    background:
      "The line was played three times in an exhibition match between Ossip Bernstein and " +
      "Oldřich Duras, after whom the gambit is named.",
    strategy:
      "Offers a pawn: after 2.exf5 Black gets a modest lead in development with ...Nf6 but " +
      "little else for it, and the e8–h5 diagonal and the king stay weakened.",
  },

  "1.e4 g5": {
    name: "Borg Defence",
    background:
      "The name is “Grob” spelled backwards. Michael Basman often played it, and it is also " +
      "called the Basman Defence; Modern Chess Openings judges Black only somewhat worse, " +
      "although the move weakens the kingside severely.",
    strategy:
      "Gains kingside space at the price of a lasting weakness: after 2.d4 the bishop on c1 " +
      "attacks the g5-pawn at once, and the squares around Black's king stay weak for the " +
      "rest of the game.",
  },

  "1.e4 h5": {
    name: "Goldsmith Defence",
    background:
      "Also called the Pickering Defence, it is the Kádas Opening (1.h4) with the colours " +
      "reversed. Modern Chess Openings dismisses it: “Other defenses, such as 1...h5, are not " +
      "considered as they are simply too bad and need no discussion.”",
    strategy:
      "Wastes a tempo and weakens g5 and the whole kingside for no gain: the pawn does " +
      "nothing for the centre or development, and White simply takes the centre with 2.d4.",
  },

  "1.e4": {
    name: "King's Pawn Game",
    background:
      "The most popular first move in chess. Bobby Fischer called it “best by test” in My 60 " +
      "Memorable Games (1969).",
  },
};
