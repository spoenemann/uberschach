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

  "1.e4 c5 2.c3 Nf6": {
    background:
      "Its main line, 2...Nf6 3.e5 Nd5, is the one in current practice against the Alapin and " +
      "can also arise when Black declines the Smith–Morra Gambit.",
    strategy:
      "Attacks e4 and invites 3.e5 Nd5, when White gains space and chooses between 4.d4, " +
      "4.Nf3, 4.g3 and 4.Bc4. The knight on d5 is active but exposed to tempo moves, and " +
      "Black aims to undermine the e5 pawn with ...Nc6, ...d6 and ...cxd4. The price is less " +
      "central space for a time.",
  },

  "1.e4 c5 2.c3 d5": {
    strategy:
      "Challenges e4 at once and trades off White's central pawn: after 3.exd5 Qxd5 4.d4 " +
      "Black develops quickly with ...Nf6 and ...e6 or ...Nc6 and pressures d4. The queen " +
      "comes out early, though, and once the c-pawns are exchanged White gains time against " +
      "it with Nc3, so Black has to play precisely to equalise.",
  },

  "1.e4 c5 2.c3 e6": {
    strategy:
      "Prepares ...d5 and steers toward French Defence structures: 3.d4 d5 4.e5 transposes to " +
      "the Advance French, and 4.Nd2 gives a Tarrasch-type position. The c8-bishop stays " +
      "behind its pawns, and in the exchange line 4.exd5 exd5 5.Be3 White keeps a slight " +
      "edge.",
  },

  "1.e4 c5 2.c3 Nc6": {
    strategy:
      "Develops a piece and adds pressure on d4, keeping ...d5 and ...e6 available. It does " +
      "not prevent 3.d4 cxd4 4.cxd4, which gives White a two-pawn centre, and after 4...d5 " +
      "5.exd5 Qxd5 6.Nf3 White keeps a slight edge, gaining time on the queen with Nc3. Sound " +
      "enough, but a step behind the main replies.",
  },

  "1.e4 c5 2.c3 d6": {
    strategy:
      "A sharp try that prepares ...Nf6 against e4. White can take the full centre at once " +
      "with 3.d4, and after the quiet 3.d4 Nf6 4.Bd3 keeps a space advantage. 4.dxc5 instead " +
      "accepts Black's gambit: after 4...Nc6 5.cxd6 Nxe4 Black has given up material for " +
      "activity.",
  },

  "1.e4 c5 2.c3 g6": {
    strategy:
      "Heads for a kingside fianchetto, the bishop on g7 bearing on d4 from a distance. White " +
      "answers 3.d4 cxd4 4.cxd4, and Black has to strike at the broad centre quickly, usually " +
      "with 4...d5. A viable set-up, but White's extra space makes it harder than the main " +
      "replies.",
  },

  "1.e4 c5 2.c3 e5": {
    strategy:
      "Stakes out d4 and makes a quick d4 awkward for White, but seriously weakens the d5 " +
      "square. After 3.Nf3 Nc6 4.Bc4 White has a solid edge and targets f7 and d5. Playable " +
      "and rare, yet not recommended.",
  },

  "1.e4 c5 2.c3 Qa5": {
    strategy:
      "Pins the c3 pawn along the e1-a5 diagonal once d2 moves, so 3.d4 cxd4 cannot be " +
      "answered by 4.cxd4. White avoids the issue with 3.Nf3 or 3.Bc4 and plays d4 later, " +
      "while the queen on a5 stands exposed. A rare try that is not refuted by force.",
  },

  "1.e4 c5 2.c3 b6": {
    strategy:
      "Prepares a queenside fianchetto with ...Bb7 to pressure e4 and keeps ...e6 in hand. It " +
      "is slow, though: after 3.d4 cxd4 4.cxd4 Bb7 5.Nc3 White has a broad centre and quicker " +
      "development, and the knight already covers e4 against the bishop. A rare, playable " +
      "try.",
  },

  "1.e4 c5 2.c3 Qc7": {
    strategy:
      "Brings the queen out early to watch e5 and the c-file, but does not stop 3.d4 cxd4 " +
      "4.cxd4, which gives White a full centre. Nc3 and Nb5 then gain time against the queen.",
  },

  "1.e4 c5 2.c3 Qb6": {
    strategy:
      "Eyes b2 and, after exchanges on d4, the d4 pawn, but Bc1 covers b2 and 3.d4 cxd4 " +
      "4.cxd4 builds a full centre. The exposed queen then loses time to moves such as Nc3 " +
      "and Na4.",
  },

  "1.e4 c5 2.c3 Na6": {
    strategy:
      "The knight aims for c7 to support ...d5 but is badly placed on the rim: 3.Bxa6 bxa6 " +
      "doubles Black's a-pawns at once, and 3.d4 takes the centre without a fight.",
  },

  "1.e4 c5 2.c3 Nh6": {
    strategy:
      "Heads for f5 but does nothing about d4. After 3.d4 the c1-bishop eyes h6, so Black " +
      "must spend another move on the knight or accept doubled h-pawns after Bxh6 gxh6.",
  },

  "1.e4 c5 2.c3 a6": {
    strategy:
      "Prepares ...b5 in other Sicilian set-ups, but here it is slow and leaves 3.d4 " +
      "unopposed, so White gets the full centre before Black has developed a piece.",
  },

  "1.e4 c5 2.c3 a5": {
    strategy:
      "Gains queenside space but does nothing about 3.d4, and it weakens b5, where a white " +
      "bishop or knight (Na3-b5) can settle. Black spends a tempo without developing.",
  },

  "1.e4 c5 2.c3 h6": {
    strategy:
      "A waiting move that prevents Bg5 but does nothing about 3.d4 and the centre, and " +
      "leaves Black a tempo behind in development.",
  },

  "1.e4 c5 2.c3 h5": {
    strategy:
      "Gains kingside space but loosens g5 and g6 and does nothing about 3.d4. Black spends a " +
      "tempo without developing a piece or contesting the centre.",
  },

  "1.e4 c5 2.c3 g5": {
    strategy:
      "Loosens the kingside for good: 3.d4 opens the c1-bishop's diagonal against g5, so " +
      "after 3...cxd4 4.cxd4 Black must spend another move holding the pawn, usually ...h6, " +
      "while White has the full centre.",
  },

  "1.e4 c5 2.c3 b5": {
    strategy:
      "Gives up a pawn for nothing: nothing defends b5, so 3.Bxb5 wins it, and Black has no " +
      "lead in development or other clear compensation.",
  },

  "1.e4 c5 2.c3 c4": {
    strategy:
      "Overextends the pawn, which nothing defends: 3.Bxc4 takes it at once, and White then " +
      "has a free hand in the centre.",
  },

  "1.e4 c5 2.c3 f6": {
    strategy:
      "Weakens the e8-h5 diagonal and takes f6 from the g8-knight: 3.Qh5+ g6 4.Qxc5 wins a " +
      "pawn, and the king stays exposed.",
  },

  "1.e4 c5 2.c3 f5": {
    strategy:
      "Hangs the pawn, since 3.exf5 wins it at once, and it opens the e8-h5 diagonal against " +
      "the king without any development in return.",
  },

  "1.e4 c5 2.Nc3 Nc6": {
    strategy:
      "Develops a piece, contests d4 and e5 and keeps the pawn structure flexible. Black can " +
      "wait for White's plan: against 3.g3 the usual set-up is ...g6, ...Bg7 and ...d6, " +
      "against 3.f4 it is ...g6 and ...Bg7 after Nf3. If White heads for an Open Sicilian " +
      "with 3.Nge2 g6 4.d4, Black reaches an Accelerated Dragon in which White can no longer " +
      "set up the Maróczy Bind with c4.",
  },

  "1.e4 c5 2.Nc3 d6": {
    strategy:
      "Guards e5 and the c5-pawn and opens the c8-bishop. If White turns to an Open Sicilian " +
      "with Nf3 and d4, Black can still choose the Najdorf, Dragon or Scheveningen; against " +
      "3.g3 the main-line set-up follows with ...Nc6, ...g6 and ...Bg7. The pawn is committed " +
      "early, though, and after 3.Nf3 White can also choose Bb5+, as in the Moscow Variation.",
  },

  "1.e4 c5 2.Nc3 e6": {
    strategy:
      "Opens the f8-bishop and prepares ...d5. Against 3.g3 or 3.f4 Black can strike with " +
      "...d5 at once; if White turns to an Open Sicilian with Nf3 and d4, Black reaches Kan " +
      "or Taimanov structures with ...a6 or ...Nc6. The cost is that the e6-pawn blocks the " +
      "c8-bishop's diagonal to the kingside for the time being.",
  },

  "1.e4 c5 2.Nc3 Qc7": {
    strategy:
      "Heads for Taimanov and Kan set-ups: ...Nc6, ...e6 and ...a6 follow, and many lines " +
      "transpose into those Sicilians. The queen is committed before any piece, though, and " +
      "Nb5 or Nd5 can hit it at once. The plain 2...Nc6 reaches the same structures without " +
      "that exposure.",
  },

  "1.e4 c5 2.Nc3 a6": {
    strategy:
      "Prepares ...b5 and ...Bb7 and takes b5 from White's knight. Against 3.g3 Black can " +
      "expand with ...b5 at once; after 3.Nf3 and d4 the game becomes an Open Sicilian in " +
      "which ...a6 fits the Najdorf and Kan structures. The move is less common than ...Nc6, " +
      "...e6 or ...d6 and develops no piece.",
  },

  "1.e4 c5 2.Nc3 b6": {
    strategy:
      "Prepares ...Bb7, which bears on e4 along the long diagonal. The move does little for " +
      "d4 or e5, and the same idea after 2.Nf3 is considered inferior, because it commits " +
      "Black to ...b6 rather than the more aggressive set-ups with ...b5.",
  },

  "1.e4 c5 2.Nc3 e5": {
    strategy:
      "Sets pawns on c5 and e5 against d4 and turns the game into a Vienna Game with ...c5 " +
      "added. With the e-pawn on e5, neither the c- nor the e-pawn can guard d5, so a white " +
      "knight can settle there with Nd5. The move gives up the usual Sicilian structure and " +
      "is less common than ...Nc6, ...e6 or ...d6.",
  },

  "1.e4 c5 2.Nc3 g6": {
    strategy:
      "Heads for a Hyper-Accelerated Dragon with ...Bg7 and ...Nc6. If White goes into an " +
      "Open Sicilian with Nf3 and d4, the knight on c3 keeps White from the Maróczy Bind with " +
      "c4. The move is less common than ...Nc6, ...e6 or ...d6 and commits Black to the " +
      "fianchetto before White has shown his plan.",
  },

  "1.e4 c5 2.Nc3 Na6": {
    strategy:
      "Puts the knight on the rim, where it contests neither d4 nor e5 and needs ...Nc7 to " +
      "reach a useful square. White can also take at once with Bxa6 bxa6, doubling Black's " +
      "a-pawns but handing Black the bishop pair.",
  },

  "1.e4 c5 2.Nc3 Qb6": {
    strategy:
      "Brings the queen out before any piece is developed, and it threatens nothing, because " +
      "the c1-bishop guards b2. 3.Nd5 or 3.Na4 hits the queen at once, and White gains time " +
      "while it retreats.",
  },

  "1.e4 c5 2.Nc3 Qa5": {
    strategy:
      "Puts the queen on a5 before any piece is developed. It eyes c3, but the b- and d-pawns " +
      "guard the knight and the d2-pawn closes the diagonal to e1, so White develops " +
      "undisturbed with Nf3, Bc4 and O-O.",
  },

  "1.e4 c5 2.Nc3 Nh6": {
    strategy:
      "Places the knight on the rim, where it eyes f5 and g4 but no central square. Once d3 " +
      "or d4 is played, Bxh6 gxh6 doubles Black's pawns.",
  },

  "1.e4 c5 2.Nc3 Nf6": {
    strategy:
      "Attacks e4 but runs into 3.e5, because the knight loses to Nxd5, Nxe4, Qxg4 or Qxh5 on " +
      "every square except g8. Black must retreat, having spent two tempi while White gains " +
      "space.",
  },

  "1.e4 c5 2.Nc3 a5": {
    strategy:
      "Takes b4 from White but does nothing for the centre or development. The a-pawn can no " +
      "longer cover b5, so a white knight landing there cannot be driven away by ...a6.",
  },

  "1.e4 c5 2.Nc3 d5": {
    strategy:
      "Offers a pawn, because after 3.exd5 the queen cannot recapture: 3...Qxd5 loses it to " +
      "Nxd5. After 3...Nf6 White keeps the extra pawn with Bb5+ and Bc4, and Black has little " +
      "to show for it.",
  },

  "1.e4 c5 2.Nc3 f6": {
    strategy:
      "Takes f6 from the king's knight and opens the diagonal from h5 to the king on e8. The " +
      "pawn covers e5 but does nothing for development.",
  },

  "1.e4 c5 2.Nc3 h6": {
    strategy:
      "A rim-pawn move that does nothing for the centre or development, and gives White a " +
      "free hand to build with Nf3, g3 or f4.",
  },

  "1.e4 c5 2.Nc3 h5": {
    strategy:
      "Advances the h-pawn without any developing or central purpose, and loosens g5 and the " +
      "kingside. White continues with Nf3 and d4 at leisure.",
  },

  "1.e4 c5 2.Nc3 b5": {
    strategy:
      "Gives away a pawn: 3.Nxb5 or 3.Bxb5 takes it, and ...a6 and ...Bb7 win back a little " +
      "time but not the pawn.",
  },

  "1.e4 c5 2.Nc3 f5": {
    strategy:
      "Gives up a pawn: 3.exf5 takes it, and the c8-bishop cannot recapture past the d7-pawn. " +
      "The opened diagonal from h5 to e8 also allows Qh5+ against Black's king.",
  },

  "1.e4 c5 2.Nc3 g5": {
    strategy:
      "Weakens the whole kingside and cannot hold the pawn: after 3.d4 cxd4 4.Qxd4 the queen " +
      "attacks the rook on h8 and Bxg5 follows, with Black behind in development.",
  },

  "1.e4 c5 2.Nc3 c4": {
    strategy:
      "Gives away the pawn: 3.Bxc4 takes it at once and develops the bishop towards f7, while " +
      "Black loses the c-pawn and with it all pressure on d4.",
  },

  "1.e4 c5 2.Nf3 d6": {
    name: "Sicilian Defence: Modern Variations",
    background:
      "Black's most common move after 2.Nf3. It is the gateway to the Najdorf, Dragon, " +
      "Scheveningen and Classical Variations, which arise after 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3.",
    strategy:
      "Prepares ...Nf6 against the e-pawn without letting White push it to e5, and keeps " +
      "...e5 in reserve. After 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Black has traded the c-pawn for " +
      "White's d-pawn and plays with a central pawn majority and the half-open c-file against " +
      "White's lead in development and kingside space. White's most important alternative to " +
      "3.d4 is 3.Bb5+, the Moscow Variation.",
  },

  "1.e4 c5 2.Nf3 Nc6": {
    name: "Sicilian Defence: Old Sicilian",
    background:
      "One of Black's three main replies to 2.Nf3, with 2...d6 and 2...e6. Lines beginning " +
      "2...Nc6 that do not transpose into lines of 2...d6 have their own ECO codes, B30–B39; " +
      "the most important among them are the Rossolimo, Kalashnikov, Sveshnikov and " +
      "Accelerated Dragon.",
    strategy:
      "Develops the knight towards the centre, controls d4 and e5 and, like 2...d6, prepares " +
      "...Nf6 without allowing e5. After 3.d4 cxd4 4.Nxd4 Black has committed neither the d- " +
      "nor the e-pawn and chooses between 4...Nf6, 4...e6, 4...g6 and 4...e5. The cost is " +
      "3.Bb5, which avoids the Open Sicilian and aims for Bxc6, leaving Black with doubled " +
      "pawns.",
  },

  "1.e4 c5 2.Nf3 e6": {
    name: "Sicilian Defence: French Variation",
    background:
      "One of Black's three main replies to 2.Nf3, with 2...d6 and 2...Nc6. After 3.d4 cxd4 " +
      "4.Nxd4 it leads to the Taimanov Variation, named after Mark Taimanov, and the Kan " +
      "Variation, named after Ilya Kan and also called the Paulsen Variation after Louis " +
      "Paulsen.",
    strategy:
      "Opens the f8-bishop's diagonal, so it can come to b4 or c5, and prepares ...d5. After " +
      "3.d4 cxd4 4.Nxd4 Black keeps the choice between 4...Nc6, 4...a6 and 4...Nf6 and " +
      "decides later where the knights and the queen go. The costs are a c8-bishop hemmed in " +
      "by the e6-pawn and a weak d6-square, which White eyes with a knight on b5.",
  },

  "1.e4 c5 2.Nf3 Nf6": {
    name: "Sicilian Defence: Nimzowitsch Variation",
    background:
      "Named after Aron Nimzowitsch, who pioneered it as one of two provocative variations of " +
      "the Sicilian Defence; it is also known as the Nimzowitsch–Rubinstein Variation. After " +
      "3.e5 Nd5 it resembles Alekhine's Defence.",
    strategy:
      "Attacks e4 at once, but White gains space and time with 3.e5 Nd5 4.Nc3. After 4...Nxc3 " +
      "5.dxc3 the move 5...b6 loses to 6.e6, and the main line 4...e6 5.Nxd5 exd5 6.d4 Nc6 " +
      "7.dxc5 Bxc5 8.Qxd5 leads to sharp play that favours White.",
  },

  "1.e4 c5 2.Nf3 a6": {
    name: "Sicilian Defence: O'Kelly Variation",
    background:
      "Named after the Belgian grandmaster Albéric O'Kelly de Galway, who won the Belgian " +
      "championship thirteen times between 1937 and 1959.",
    strategy:
      "Takes b5 from White's knight and bishop, so after 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5 the " +
      "knight cannot go to b5, and against 6.Nb3 or 6.Nf3 Black equalises with 6...Bb4 and " +
      "possibly ...d5. White avoids the idea with 3.c3 or 3.c4, when ...a6 has cost a tempo " +
      "for little.",
  },

  "1.e4 c5 2.Nf3 g6": {
    name: "Sicilian Defence: Hyper-Accelerated Dragon",
    strategy:
      "Prepares ...Bg7 and aims for the Accelerated Dragon, which 3.d4 cxd4 4.Nxd4 Nc6 " +
      "reaches by transposition. White has extra options against the early fianchetto: 4.Qxd4 " +
      "eyes the h8-rook along the long diagonal, 3.c3 leads to an Alapin-type position and " +
      "3.c4 sets up the Maróczy Bind.",
  },

  "1.e4 c5 2.Nf3 Qc7": {
    name: "Sicilian Defence: Quinteros Variation",
    background:
      "Sometimes named after the Argentine grandmaster Miguel Quinteros, who introduced the " +
      "move into first-class play against Henrique Mecking in 1971.",
    strategy:
      "Controls e5 from c7 and keeps ...e6, ...Nc6 and ...a6 in hand; after 3.d4 cxd4 4.Nxd4 " +
      "it often transposes into the Taimanov or the Kan. White can instead play 3.c3 in the " +
      "style of the Alapin, when the queen may be poorly placed on c7.",
  },

  "1.e4 c5 2.Nf3 b6": {
    name: "Sicilian Defence: Katalymov Variation",
    background:
      "Named after Boris Katalymov, a Soviet and later Kazakhstani player and multiple " +
      "champion of Kazakhstan. The French grandmaster Christian Bauer favours it and drew " +
      "Magnus Carlsen with it in 2005.",
    strategy:
      "Prepares ...Bb7 to press on e4 along the long diagonal, but commits Black to ...b6 " +
      "rather than the more active ...b5, and White's pieces can use the b5-square unless " +
      "Black guards it. After 3.d4 cxd4 4.Nxd4 Bb7 5.Nc3 a6 6.Bd3 White keeps a slight plus.",
  },

  "1.e4 c5 2.Nf3 Qb6": {
    strategy:
      "Brings the queen out before any minor piece, eyeing b2 and, once ...cxd4 has opened " +
      "the diagonal, the d4-square. White develops with Nc3 and gains time against the queen " +
      "with Na4 or Nd5, keeping a lead in development.",
  },

  "1.e4 c5 2.Nf3 Qa5": {
    name: "Sicilian Defence: Mongoose Variation",
    strategy:
      "Pins the d2-pawn against the king, so 3.d4 is illegal for now, but White simply blocks " +
      "the diagonal with 3.Nc3 or 3.c3 and plays d4 next. The queen then does little on a5, " +
      "and Black is behind in development.",
  },

  "1.e4 c5 2.Nf3 Na6": {
    name: "Zukertort Defence: Sicilian Knight Variation",
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c7 but fights for nothing in the " +
      "centre. White can ignore it and play 3.d4, or take it with 3.Bxa6 bxa6, which doubles " +
      "Black's a-pawns.",
  },

  "1.e4 c5 2.Nf3 Nh6": {
    strategy:
      "Puts the knight on the rim, where e4 already controls f5, so it has no active square " +
      "and the centre stays uncontested. White takes the centre with 3.d4 cxd4 4.Nxd4.",
  },

  "1.e4 c5 2.Nf3 a5": {
    strategy:
      "Spends a tempo on the a-pawn and gives up b5 for good, since no black pawn can cover " +
      "that square any more. After 3.d4 cxd4 4.Nxd4 a white knight or bishop can settle there " +
      "while Black lags in development.",
  },

  "1.e4 c5 2.Nf3 h6": {
    name: "Sicilian Defence: Bücker Variation",
    strategy:
      "Takes g5 from White's pieces but spends a tempo on a pawn move that does nothing for " +
      "the centre or development. White plays 3.d4 cxd4 4.Nxd4 and enjoys the freer game.",
  },

  "1.e4 c5 2.Nf3 h5": {
    strategy:
      "Spends a tempo on the rook's pawn and weakens g5 and the kingside, while the centre " +
      "and development stay untouched. White takes the centre with d4 and develops at " +
      "leisure.",
  },

  "1.e4 c5 2.Nf3 f6": {
    strategy:
      "Supports a later ...e5, but takes f6 from the knight, weakens the e8-h5 diagonal and " +
      "the king, and develops nothing. White takes the centre with 3.d4.",
  },

  "1.e4 c5 2.Nf3 d5": {
    strategy:
      "Challenges the centre at once, but White wins a tempo: 3.exd5 Qxd5 4.Nc3 attacks the " +
      "queen, which must retreat while White follows with d4 and a lead in development.",
  },

  "1.e4 c5 2.Nf3 e5": {
    strategy:
      "Offers the e-pawn: 3.Nxe5 takes it, and Black can try ...Qe7 to hit the knight and e4, " +
      "but regains the pawn only at the cost of time and with a lasting weakness on d5.",
  },

  "1.e4 c5 2.Nf3 b5": {
    name: "Sicilian Defence: Polish Gambit",
    strategy:
      "Gives up a pawn: 3.Bxb5 takes it along the open f1-a6 diagonal, and ...Bb7 against e4 " +
      "or ...Qa5 against the bishop does not offer enough compensation.",
  },

  "1.e4 c5 2.Nf3 g5": {
    strategy:
      "Hangs the g-pawn: 3.Nxg5 wins it, since nothing can recapture, with the c8-bishop and " +
      "the queen both blocked by their own pawns. The weakened kingside offers no " +
      "compensation.",
  },

  "1.e4 c5 2.Nf3 f5": {
    name: "Sicilian Defence: Brussels Gambit",
    strategy:
      "Offers the f-pawn: 3.exf5 wins it, since the d7-pawn blocks the c8-bishop, and winning " +
      "it back with ...d5 and ...Bxf5 costs time. The e8-h5 diagonal to Black's king stays " +
      "open for good.",
  },

  "1.e4 c5 2.Nf3 c4": {
    strategy:
      "Pushes the c-pawn where it cannot be defended: 3.Bxc4 wins it along the open diagonal " +
      "and develops the bishop at the same time.",
  },
};
