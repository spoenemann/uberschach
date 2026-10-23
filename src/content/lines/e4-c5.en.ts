import type { OpeningTexts } from "../book.ts";

// English prose for e4-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.e4 c5 2.Nf3": {
    strategy:
      "Develops the king's knight, controls d4 and e5 and prepares d4 to open the centre. " +
      "After 2...d6, 2...Nc6 or 2...e6 White plays 3.d4 cxd4 4.Nxd4 and gets an Open " +
      "Sicilian: a lead in development and kingside space, against Black's central pawn " +
      "majority and half-open c-file. About four in five master games beginning 1.e4 c5 " +
      "continue with this move.",
  },

  "1.e4 c5 2.c3": {
    name: "Sicilian Defence: Alapin Variation",
    background:
      "Named after the Russian master Semyon Alapin (1856–1923), who championed it at the end " +
      "of the 19th century. For many years it was not held in high regard, since 2...d5 was " +
      "thought to give Black easy equality; it was revived in the late 1960s by Evgeny " +
      "Sveshnikov and Evgeny Vasiukov, and Deep Blue played it against Kasparov in the first " +
      "game of their 1996 match. Today it is considered one of the most solid and respectable " +
      "Anti-Sicilians.",
    strategy:
      "Prepares d4, so that ...cxd4 can be answered by cxd4 with two pawns in the centre. " +
      "Black therefore strikes at once, with 2...Nf6 3.e5 Nd5 or with 2...d5 3.exd5 Qxd5, " +
      "where the queen is safe because the b1-knight can no longer come to c3. After 4.d4 and " +
      "an exchange on d4, White usually has an isolated d-pawn and active pieces, but a " +
      "slower attack than in the Open Sicilian.",
  },

  "1.e4 c5 2.Nc3": {
    name: "Closed Sicilian",
    background:
      "White's second most common move against 1...c5, after 2.Nf3. Many lines transpose into " +
      "the Open Sicilian, the Moscow Variation or the Rossolimo Variation, and Andrew Soltis " +
      "dubbed the set-up with 3.Nge2 the Chameleon System. The former world champion Boris " +
      "Spassky often used the Closed Sicilian with success, even in Candidates matches.",
    strategy:
      "Develops a knight and keeps the centre closed for now. White can still play Nf3 and d4 " +
      "for an Open Sicilian, or build up with g3, Bg2 and d3 and continue with Be3 and Qd2 or " +
      "with f4 and Nf3 for a kingside attack. The knight blocks the c-pawn, so the direct " +
      "fight for d4 is postponed, and Black settles comfortably with ...Nc6, ...g6 and ...Bg7 " +
      "or with ...e6 and ...d6.",
  },

  "1.e4 c5 2.b3": {
    name: "Sicilian Defence: Snyder Variation",
    background:
      "Named after Robert M. Snyder, a US Chess Federation master, who published a book on " +
      "the system in 1977. Nigel Short has used it occasionally, and it is a favourite of the " +
      "Georgian grandmaster Tamaz Gelashvili.",
    strategy:
      "Prepares Bb2, aiming down the long diagonal at d4, e5 and Black's kingside, and keeps " +
      "c4, f4 and Nf3 available. The move does nothing for the centre at once, so Black " +
      "develops comfortably with ...Nc6, ...e6 and ...d5. Sound, but it gives White less than " +
      "the main second moves.",
  },

  "1.e4 c5 2.d3": {
    strategy:
      "Prepares a King's Indian Attack set-up with g3, Bg2, Nf3 and O-O, and usually " +
      "transposes into the Closed Sicilian. The structure is solid but makes no claim on d4, " +
      "so Black builds freely with ...Nc6, ...g6 and ...Bg7 or with ...e6 and ...d5.",
  },

  "1.e4 c5 2.d4": {
    name: "Sicilian Defence: Smith–Morra Gambit",
    background:
      "The gambit proper arises after 2...cxd4 3.c3 and is named after Pierre Morra " +
      "(1900–1969) of France and Ken Smith (1930–1999) of the Dallas Chess Club. Around 1950 " +
      "Morra published a booklet and several articles on it, and Smith wrote a total of nine " +
      "books and forty-nine articles on the gambit.",
    strategy:
      "Opens the centre at once: after 2...cxd4 3.c3 dxc3 4.Nxc3 White gives a pawn for quick " +
      "development, open c- and d-files and pressure on f7 from a bishop on c4. Theory holds " +
      "that this is not enough for the pawn, but the many traps make it a hard test for an " +
      "unprepared opponent. Black can also decline with 3...Nf6 or 3...d5, reaching lines of " +
      "2.c3.",
  },

  "1.e4 c5 2.f4": {
    name: "Sicilian Defence: McDonnell Attack",
    background:
      "The name McDonnell Attack stems from the 14th match game between Alexander McDonnell " +
      "and Louis de La Bourdonnais, played in London in 1834 and won by Black. The line is " +
      "also known as the Grand Prix Attack, after the weekend tournaments held in England in " +
      "the 1970s.",
    strategy:
      "Controls e5 and prepares Nf3 with Bc4 or Bb5, aiming for a kingside attack. Played at " +
      "once, it allows 2...d5 3.exd5 Nf6, when Black regains the pawn on d5 or gets quick " +
      "development for it, which several authors regard as Black's best answer. White " +
      "therefore usually starts with 2.Nc3, which makes ...d5 harder, and plays f4 a move " +
      "later.",
  },

  "1.e4 c5 2.g3": {
    name: "Sicilian Defence: Lasker–Dunne Attack",
    background:
      "The line occurred in the 1866 match between Steinitz and Anderssen, and Mark Taimanov " +
      "sometimes played it.",
    strategy:
      "Prepares Bg2 and keeps the centre closed, often transposing into the Closed Sicilian " +
      "after ...Nc6, Bg2 and d3. Black can strike at once with 2...d5, since 3.exd5 Qxd5 hits " +
      "the rook on h1 through the gap on g2; White blocks with Nf3 and can then build up with " +
      "c3 and d4. Sound, but less ambitious than the main lines.",
  },

  "1.e4 c5 2.Na3": {
    name: "Sicilian Defence: Kronberger Variation",
    background:
      "An eccentric move brought back into prominence by Vadim Zvjaginsev at the 2005 Russian " +
      "Chess Championship Superfinal, where he played it three times, drawing twice and " +
      "beating Alexander Khalifman.",
    strategy:
      "Prepares Nc4 or Nb5 and keeps c3 free for the c-pawn, away from the main lines of " +
      "theory. For now the knight stands on the rim and does nothing for d4, so Black " +
      "develops freely and takes the centre with ...Nc6, ...e6 and ...d5. It is sound but " +
      "gives White little.",
  },

  "1.e4 c5 2.Ne2": {
    name: "Sicilian Defence: Keres Variation",
    background:
      "It was a favourite of Paul Keres, whose name it carries, and it shares its ideas with " +
      "the Chameleon System of 2.Nc3 and 3.Nge2.",
    strategy:
      "Keeps the choice open: 3.d4 cxd4 4.Nxd4 reaches an Open Sicilian, 3.g3 a closed " +
      "set-up, and 3.Nbc3 defers the decision, while the f-pawn stays free to advance. For " +
      "now the knight blocks the f1-bishop, and the early Ne2 is not very challenging, so " +
      "Black develops with ...Nc6 and ...d6 or ...e6 without trouble.",
  },

  "1.e4 c5 2.a3": {
    name: "Sicilian Defence: Mengarini Variation",
    strategy:
      "Prepares b4, so that ...cxb4 can be met by axb4 and the c-pawn is deflected from the " +
      "fight for d4, but it spends a tempo on the rim. After 2...Nc6 the push no longer " +
      "works, since 3.b4 cxb4 4.axb4 Nxb4 simply wins a pawn, and Black develops freely with " +
      "...e6 and ...d5 or ...g6.",
  },

  "1.e4 c5 2.a4": {
    name: "Sicilian Defence: Myers Attack, with a4",
    strategy:
      "Stops ...b5 but spends a tempo on the rim and weakens b4 for good, since the a-pawn " +
      "can no longer guard it, and a black knight from c6 can use the square. Black develops " +
      "freely with ...Nc6, ...e6 and ...d5 or ...Nf6.",
  },

  "1.e4 c5 2.b4": {
    name: "Sicilian Defence: Wing Gambit",
    background:
      "Generally considered too reckless, it is rarely seen in grandmaster play. In 1994 Joe " +
      "Gallagher called it “a forgotten relic, hardly having set foot in a tournament hall " +
      "since the days of Frank Marshall and Rudolph Spielmann”.",
    strategy:
      "Offers the b-pawn to deflect the c-pawn and then take the centre with d4. After " +
      "2...cxb4 3.a3 d5, now considered Black's best, White has too little for the pawn and " +
      "must even avoid 4.exd5 Qxd5 5.axb4, which loses the rook on a1 to 5...Qe5+.",
  },

  "1.e4 c5 2.c4": {
    name: "Sicilian Defence: Staunton–Cochrane Variation",
    strategy:
      "Resembles an English Opening with the king's pawn already on e4, but leaves d4 without " +
      "pawn cover, since neither the c- nor the e-pawn can return to guard it. Black answers " +
      "with ...Nc6 and ...e5 and gets a comfortable game, with d4 as a lasting outpost for a " +
      "knight.",
  },

  "1.e4 c5 2.f3": {
    strategy:
      "Supports e4 but takes f3 from the king's knight and opens the e1–h4 diagonal to the " +
      "king. Black develops with ...Nc6, ...e6 and ...d5, while White's kingside pieces lack " +
      "good squares.",
  },

  "1.e4 c5 2.h3": {
    strategy:
      "Takes g4 from Black's pieces but spends a tempo without any gain in the centre or " +
      "development. Black develops freely with ...Nc6 and ...e6 or ...d6, and the pawn on h3 " +
      "rarely proves useful.",
  },

  "1.e4 c5 2.h4": {
    name: "Sicilian Defence: Myers Attack, with h4",
    strategy:
      "Spends a tempo on the rook's pawn and weakens g4 for good, since the h-pawn can no " +
      "longer guard it, with nothing gained for the centre or development. Black develops " +
      "freely with ...Nc6 and ...e6 or ...d6, and the advanced pawn makes castling short less " +
      "safe for White.",
  },

  "1.e4 c5 2.Qe2": {
    strategy:
      "Supports e4 but blocks the f1-bishop and brings the queen out before the minor pieces. " +
      "Black develops freely with ...Nc6 and ...e6 or ...d6, and White has nothing in the " +
      "centre to show for the tempo.",
  },

  "1.e4 c5 2.Qf3": {
    strategy:
      "Takes f3 from the king's knight and exposes the queen, which ...Nc6 and ...Nd4 attack " +
      "with gain of time, the knight also hitting c2, which the queen no longer guards. Black " +
      "develops freely while White has to move the queen again.",
  },

  "1.e4 c5 2.Qg4": {
    name: "Sicilian Defence: Amazon Attack",
    strategy:
      "Eyes g7 and d7, but both are defended, so nothing is threatened. 2...Nf6 hits the " +
      "queen and the e4-pawn at once, and the queen has to move again while Black develops " +
      "with gain of time.",
  },

  "1.e4 c5 2.Qh5": {
    strategy:
      "Attacks c5 along the fifth rank and eyes f7, but brings the queen out too early. " +
      "2...Nf6 hits it: 3.Qxc5 Nxe4 regains the pawn with gain of time, and 3.Qh4 only " +
      "displaces the queen, so Black gets a comfortable game.",
  },

  "1.e4 c5 2.Be2": {
    strategy:
      "Prepares Nf3 and quick castling, but the bishop is passive on e2 and no longer guards " +
      "g2: after 2...d5 3.exd5 Qxd5 the queen hits g2, and White must spend a move on Bf3 or " +
      "Nf3.",
  },

  "1.e4 c5 2.Bd3": {
    strategy:
      "Blocks the d-pawn, and with it the c1-bishop, until the bishop on d3 moves again. " +
      "Black develops freely with ...Nc6 and ...e6 or ...g6, while White needs another bishop " +
      "move to free the queenside.",
  },

  "1.e4 c5 2.Bc4": {
    name: "Sicilian Defence: Bowdler Attack",
    background:
      "Though once played at the highest level, for example in Anderssen–Wyvill, London 1851, " +
      "it is popular today only among club players and beginners who are unfamiliar with the " +
      "Sicilian.",
    strategy:
      "Aims at f7 and prepares quick castling, but the bishop is exposed: after 2...e6 Black " +
      "follows with ...d5, opening the centre with gain of time on the bishop. The attack on " +
      "f7 is easy to meet, and Black gets a comfortable game.",
  },

  "1.e4 c5 2.Bb5": {
    strategy:
      "Develops the bishop without a target, and ...a6 drives it back with loss of time; " +
      "3.Ba4 even loses it to 3...b5 4.Bb3 c4, which traps the bishop. Black gains queenside " +
      "space with ...b5 as well and develops comfortably.",
  },

  "1.e4 c5 2.Nh3": {
    name: "Sicilian Defence: Brick Variation",
    strategy:
      "Heads for f4 or g5 but sits on the rim, where it neither contests d4 nor supports e4. " +
      "After ...d6 the c8-bishop eyes it, and ...Bxh3 gxh3 would wreck White's kingside " +
      "pawns.",
  },

  "1.e4 c5 2.e5": {
    strategy:
      "Gains space and stops ...Nf6, but the lone pawn adds no pressure on the centre. ...Nc6 " +
      "and ...d6 attack it, and White has to spend time supporting it with Nf3 and f4.",
  },

  "1.e4 c5 2.g4": {
    name: "Sicilian Defence: Grob Variation",
    strategy:
      "Loosens the long diagonal and the squares f4 and h4 for no gain. After 2...d5 3.exd5 " +
      "Qxd5 the queen hits the rook on h1, and after 4.Nf3 Bxg4 Black has won the g-pawn and " +
      "pins the knight against the queen.",
  },

  "1.e4 c5 2.Ke2": {
    name: "Sicilian Defence: King David's Opening",
    strategy:
      "Gives up castling and blocks the f1-bishop and the queen's diagonal to h5. Black " +
      "develops with ...Nc6 and opens the centre with ...d5 against a king that has nowhere " +
      "safe to go.",
  },

  "1.e4 c5 2.Ba6": {
    strategy:
      "Hangs the bishop: 2...bxa6 or 2...Nxa6 wins it for nothing, because nothing defends " +
      "a6.",
  },

  "1.e4 c5": {
    name: "Sicilian Defence",
    background:
      "Giulio Cesare Polerio analysed it in a manuscript of 1594. In 1813 Jacob Henry Sarratt " +
      "standardised the English name, after an old Italian manuscript that spoke of “il gioco " +
      "siciliano”, the Sicilian game. Revived by Botvinnik, Boleslavsky, Bronstein and " +
      "Najdorf in the 1940s and 1950s, it became, in the words of Modern Chess Openings " +
      "(1990), the most played and most analysed opening at both club and master level.",
  },
};
