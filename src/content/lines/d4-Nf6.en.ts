import type { OpeningTexts } from "../book.ts";

// English prose for d4-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.d4 Nf6 2.c4": {
    name: "Indian Defence: Normal Variation",
    strategy:
      "Takes a larger share of the centre and controls d5, preparing Nc3 and e4 for a broad " +
      "pawn centre, or a quieter Nf3. Black then chooses the structure: the Nimzo-Indian, " +
      "Queen's Indian or Bogo-Indian after ...e6, the King's Indian or Grünfeld after ...g6, " +
      "or Benoni and Old Indian set-ups. The cost is the amount of theory White must know " +
      "against all these defences.",
  },

  "1.d4 Nf6 2.Nf3": {
    name: "Indian Defence: Knights Variation",
    strategy:
      "Develops the knight, guards d4 and e5 and keeps c4 in reserve until Black shows its " +
      "set-up. After ...d5 or ...e6 White can reach the Queen's Gambit or choose a quieter " +
      "system such as the London with Bf4, the Colle with e3 and Bd3, or the Torre with Bg5. " +
      "It commits less than 2.c4, but White still has to know the Indian lines if Black plays " +
      "...g6 and c4 follows.",
  },

  "1.d4 Nf6 2.Bg5": {
    name: "Trompowsky Attack",
    background:
      "Named after Octávio Trompowsky (1897–1984), a one-time Brazilian champion who played " +
      "it in the 1930s and 1940s. Karel Opočenský also played it in the 1930s, and the " +
      "opening is also known as the Opočenský Opening.",
    strategy:
      "Threatens Bxf6, which would double Black's pawns, and sidesteps the heavy Indian " +
      "theory that follows 2.c4. Black has several answers: ...Ne4 hits the bishop and is met " +
      "by Bf4, Bh4 or h4, ...d5 and ...c5 fight for the centre, and ...e6 lets the queen " +
      "recapture on f6. The price is an early bishop move that can lose time, and the doubled " +
      "pawns often come with the bishop pair for Black.",
  },

  "1.d4 Nf6 2.Bf4": {
    name: "Indian Defence: Accelerated London System",
    background:
      "The London System is named after the London tournament of 1922, where it appeared " +
      "seven times. The Irish-American James Mason had been the first master-level player to " +
      "use it regularly, including at Vienna 1882, London 1883 and New York 1889.",
    strategy:
      "Develops the bishop outside the pawn chain before e3, so that White can follow with " +
      "e3, Nf3, c3 and Nbd2 whatever Black does. With the bishop gone from c1, b2 is " +
      "unguarded: after ...c5 and e3, the reply ...Qb6 hits the b2-pawn and is regarded as " +
      "the most critical line. The set-up is solid and easy to learn, but less ambitious than " +
      "2.c4 and leaves Black a free choice of structure.",
  },

  "1.d4 Nf6 2.Nc3": {
    strategy:
      "Controls e4 and d5 and prepares e4, but blocks the c-pawn, so the Queen's Gambit " +
      "set-up with c4 is no longer available. After ...d5, White usually plays Bg5 " +
      "(Richter–Veresov Attack) or Bf4 (Rapport–Jobava System). Sound, but a minor choice: " +
      "the Richter–Veresov has never been very popular at the top level.",
  },

  "1.d4 Nf6 2.g3": {
    name: "Indian Defence: Tartakower Attack",
    strategy:
      "Prepares Bg2 to pressure d5 and the long diagonal, with Nf3, O-O and c4 to follow in a " +
      "Catalan-like set-up. White develops quietly, but without a pawn on c4 yet Black can " +
      "take space with ...d5 and ...c5. Sound but uncommon, and slower than 2.c4 or 2.Nf3.",
  },

  "1.d4 Nf6 2.e3": {
    strategy:
      "Supports d4 and opens a path for the f1-bishop, aiming for a Colle-style set-up with " +
      "Nf3, Bd3, c3 and Nbd2, but it shuts in the bishop on c1 unless that later goes to b2. " +
      "Black reaches a comfortable game with ...d5, ...e6 or ...b6, since the slow plan puts " +
      "no early pressure on Black's centre.",
  },

  "1.d4 Nf6 2.c3": {
    strategy:
      "Props up d4 for a quiet system with Nf3, Bf4 or Bg5, e3 and Nbd2, but takes c3 from " +
      "the queen's knight, and c4 now costs a second tempo. Sound, though Black has a free " +
      "hand to choose its set-up and White does little to fight for e4 and d5.",
  },

  "1.d4 Nf6 2.b3": {
    name: "Basque Opening",
    strategy:
      "Prepares Bb2, but with the pawn already on d4 the bishop mainly supports that pawn " +
      "until the centre opens. White does little in the centre meanwhile, so Black can take " +
      "space with ...d5 and ...e6 or strike at d4 with ...c5. Sound but slower than 2.c4 or " +
      "2.Nf3.",
  },

  "1.d4 Nf6 2.d5": {
    name: "Indian Defence: Pawn Push Variation",
    strategy:
      "Grabs space and stops ...d5, but moves the d-pawn a second time and makes it a target. " +
      "Black answers with ...e6, ...c6 or ...c5, and after ...e6 and dxe6 fxe6 White has no " +
      "pawn left in the centre.",
  },

  "1.d4 Nf6 2.e4": {
    strategy:
      "Offers the e-pawn: 2...Nxe4 wins it, and White must look for compensation in quick " +
      "development with Bd3 or Nc3. After 3.Nc3 Nxc3 4.bxc3 White has doubled c-pawns as well " +
      "as a pawn less.",
  },

  "1.d4 Nf6 2.f3": {
    name: "Paleface Attack",
    background:
      "The name Paleface Attack appears in Eric Schiller's 1986 book on the Blackmar–Diemer " +
      "Gambit, which White usually hopes to reach with e4 and Nc3.",
    strategy:
      "Prepares e4, but takes f3 from the g1-knight and weakens the kingside, including the " +
      "e1–h4 diagonal. After 2...d5 3.e4 dxe4 4.fxe4 Nxe4 Black is simply a pawn up, so White " +
      "usually plays 4.Nc3 instead and gives the pawn for quick development.",
  },

  "1.d4 Nf6 2.f4": {
    name: "Canard Opening",
    strategy:
      "Controls e5 and aims for a Stonewall-like set-up with Nf3, e3 and Bd3, but spends a " +
      "move on the f-pawn that develops nothing and weakens e3, e4 and the e1–h4 diagonal. " +
      "Black meets it with ...d5, ...e6 or ...c5, and the knight on f6 already watches e4, " +
      "the hole such a set-up leaves.",
  },

  "1.d4 Nf6 2.g4": {
    name: "Indian Defence: Gibbins–Weidenhagen Gambit",
    strategy:
      "Offers the g-pawn: after 2...Nxg4, e3 or e4 opens the queen's diagonal to the knight " +
      "on g4. Black keeps the extra pawn by guarding the knight with ...d6 or retreating it, " +
      "and White's kingside stays weakened for little in return.",
  },

  "1.d4 Nf6 2.b4": {
    strategy:
      "Gains queenside space and prepares Bb2, but leaves the b-pawn loose: after ...e6 the " +
      "f8-bishop threatens ...Bxb4+, so White must spend a move on a3 or c3 or give up the " +
      "pawn. It develops nothing and weakens the queenside.",
  },

  "1.d4 Nf6 2.a3": {
    strategy:
      "A waiting move that stops ...Bb4+ and prepares b4, but it develops nothing and fights " +
      "for no central square. Black gains time for ...d5, ...e6 and ...c5.",
  },

  "1.d4 Nf6 2.a4": {
    strategy:
      "Controls b5 and gains a little queenside space, but it develops nothing and weakens " +
      "b4. Black builds the centre with ...d5 and ...e6 while White still needs Nf3, c4 and " +
      "Nc3.",
  },

  "1.d4 Nf6 2.h3": {
    strategy:
      "Stops ...Ng4 and a later ...Bg4, but it spends a tempo on a rim pawn that neither " +
      "develops a piece nor adds to the centre. Black takes space with ...d5 and ...e6.",
  },

  "1.d4 Nf6 2.h4": {
    strategy:
      "Starts a rim-pawn advance with ideas of Bg5 and h5, but develops nothing and weakens " +
      "g4 and the kingside. Black takes the centre with ...d5 and ...e6 at leisure.",
  },

  "1.d4 Nf6 2.Nd2": {
    strategy:
      "Blocks the bishop on c1 and takes the queen's guard from d4, so ...c5 or ...e5 hits an " +
      "unprotected pawn. The knight eyes e4 and c4, but the clumsy set-up costs time that " +
      "Black uses in the centre.",
  },

  "1.d4 Nf6 2.Na3": {
    strategy:
      "Puts the knight on the rim, where it eyes c4 and b5 but guards neither d4 nor e4. " +
      "White loses time while Black builds the centre with ...d5, ...e6 and ...c5.",
  },

  "1.d4 Nf6 2.Nh3": {
    strategy:
      "Heads for f4 via the rim, but on f4 the knight can be chased by ...e5 or ...g5, and " +
      "until then it does nothing for the centre. Black builds with ...d5 and ...e6.",
  },

  "1.d4 Nf6 2.Bd2": {
    strategy:
      "Develops the bishop on a passive square where it takes d2 from the queen's knight and " +
      "blocks the queen's guard of d4. Bf4 and Bg5 develop the same bishop actively and keep " +
      "the d-file open.",
  },

  "1.d4 Nf6 2.Be3": {
    strategy:
      "Develops the bishop in front of the e-pawn, so the f1-bishop stays shut in. ...Ng4 " +
      "hits it at once and wins a tempo: White must retreat the bishop or give it up for the " +
      "knight, doubling its e-pawns after fxe3.",
  },

  "1.d4 Nf6 2.Qd2": {
    strategy:
      "Brings the queen out too early, where it shuts in the bishop on c1, takes d2 from the " +
      "knight and aims at nothing. Black develops freely with ...d5, ...e6 and ...c5.",
  },

  "1.d4 Nf6 2.Qd3": {
    strategy:
      "Develops the queen before any minor piece, blocking d3 for the f1-bishop. Black can " +
      "harass it with ...d5 and ...Bf5, or with ...Nc6 and ...Nb4, and White still has the " +
      "whole army to bring out.",
  },

  "1.d4 Nf6 2.Kd2": {
    strategy:
      "Gives up castling and shuts in the queen and bishop. 2...Ne4+ forces the king to move " +
      "again at once, and it has no safe home in the centre.",
  },

  "1.d4 Nf6 2.Bh6": {
    strategy:
      "Loses the bishop for nothing: 2...gxh6 takes it with a pawn. Black's h-pawns are " +
      "doubled and isolated, but a whole piece is far more than that is worth.",
  },

  "1.d4 Nf6": {
    name: "Indian Defence",
    background:
      "The earliest known use of the term “Indian Defence” dates from 1884, attributed to the " +
      "openings played by the Indian player Moheschunder Bannerjee against John Cochrane, and " +
      "Savielly Tartakower popularised it in the early 1920s. Championed by the hypermodern " +
      "school in the 1920s, these defences were fully accepted only after Russian players " +
      "showed in the late 1940s that they are sound for Black.",
  },

  "1.d4 Nf6 2.c4 e6": {
    strategy:
      "Frees the king's bishop and keeps several set-ups open: 3.Nc3 Bb4 is the Nimzo-Indian, " +
      "3.Nf3 b6 the Queen's Indian, 3.Nf3 Bb4+ the Bogo-Indian and ...d5 a Queen's Gambit " +
      "Declined. Black chooses the structure only after seeing White's third move. The cost " +
      "is the c8-bishop, which the e6-pawn shuts off from the c8–h3 diagonal, so Black often " +
      "develops it with ...b6 and ...Bb7.",
  },

  "1.d4 Nf6 2.c4 g6": {
    name: "King's Indian Defence",
    background:
      "Until the mid-1930s it was generally regarded as highly suspect, but the analysis and " +
      "play of Alexander Konstantinopolsky, Isaac Boleslavsky and David Bronstein helped to " +
      "make it much more respected and popular. It has been a favourite of the former world " +
      "champions Garry Kasparov, Bobby Fischer and Mikhail Tal.",
    strategy:
      "Prepares ...Bg7 and ...O-O and lets White build a broad centre with Nc3 and e4, which " +
      "Black then challenges with ...d6 and ...e5 or ...c5. Against 3.Nc3 Black can also " +
      "strike at once with 3...d5, the Grünfeld Defence. The positions are sharp and " +
      "unbalanced, and both sides play for a win; the price is White's extra space and a " +
      "large body of theory.",
  },

  "1.d4 Nf6 2.c4 c5": {
    name: "Benoni Defence",
    background:
      "The name goes back to Aaron Reinganum's 1825 book Ben-Oni, which analysed, among other " +
      "openings, the then unknown 1.d4 c5. The Modern Benoni, with ...e6 after 3.d5, was " +
      "introduced by Frank Marshall at New York 1927, revived by Soviet players in the 1950s " +
      "and played by Mikhail Tal against Mikhail Botvinnik in their 1960 world championship " +
      "match.",
    strategy:
      "Strikes at d4 at once and invites 3.d5: after 3...e6 Black plays ...exd5, ...d6 and " +
      "...g6 for a queenside pawn majority backed by a bishop on g7, while 3...b5 is the " +
      "Benko Gambit. The price is White's pawn wedge on d5, extra space and central majority, " +
      "so Black must find active play quickly. White can also avoid the main lines with 3.Nf3 " +
      "or 3.e3.",
  },

  "1.d4 Nf6 2.c4 d6": {
    name: "Old Indian Defence",
    background:
      "Siegbert Tarrasch introduced it in 1902, but it is more commonly associated with " +
      "Mikhail Chigorin, who adopted it five years later and pioneered it late in his career. " +
      "It has never attained the popularity of the King's Indian, though some King's Indian " +
      "players use it to avoid the Sämisch and Averbakh Variations.",
    strategy:
      "Prepares ...e5 with a compact set-up of ...Nbd7, ...Be7 and ...O-O, keeping a switch " +
      "to the King's Indian with ...g6 in reserve. After 3.Nc3 e5 4.Nf3 Nbd7 5.e4 Black's " +
      "position is solid but usually cramped, because the bishop on e7 is less active than on " +
      "g7. Against 3.Nc3, the alternative 3...Bf5 stops e4 for the moment.",
  },

  "1.d4 Nf6 2.c4 Nc6": {
    name: "Black Knights' Tango",
    background:
      "It originated in the 1920s with the Mexican grandmaster Carlos Torre, hence the name " +
      "Mexican Defence, and the American master Alexander Kevitz. After decades of obscurity, " +
      "the International Master Georgi Orlov revived it with a booklet in 1992 and a book in " +
      "1998 and renamed it the Black Knights' Tango.",
    strategy:
      "Develops the knight, presses on d4 and prepares ...e5: after 3.Nc3 e5 4.d5 Ne7 the " +
      "game can transpose into a King's Indian. The knight blocks the c-pawn for now, and the " +
      "most common reply 3.Nf3 discourages ...e5, so Black usually turns to ...e6. Sound but " +
      "offbeat and highly transpositional.",
  },

  "1.d4 Nf6 2.c4 c6": {
    name: "Slav Indian",
    strategy:
      "Prepares ...d5 and usually transposes into a Slav Defence, with the c8-bishop still " +
      "free to come out before ...e6. The c-pawn is committed early, so Benoni play with " +
      "...c5 would cost a tempo, but ...d6 can still lead to Old Indian or King's Indian " +
      "set-ups. One of the few independent lines is the offbeat gambit 3.Nf3 b5.",
  },

  "1.d4 Nf6 2.c4 b6": {
    name: "Accelerated Queen's Indian Defence",
    background:
      "It is considered less accurate than the standard Queen's Indian move order 2...e6 " +
      "3.Nf3 b6: in Alekhine–König, Vienna 1922, White was better after 3.Nc3 Bb7 4.Qc2 d5 " +
      "5.cxd5 Nxd5 6.Nf3. James Plaskett and Raymond Keene analyse the line in their 1987 " +
      "book on the English Defence.",
    strategy:
      "Prepares ...Bb7 to control e4 and d5, with ...e6 to follow. Until ...e6 the f8-bishop " +
      "cannot pin a knight on c3, so White can answer 3.Nc3 and prepare e4 with Qc2; stopping " +
      "it with ...d5 lets White gain time against the knight after cxd5 Nxd5.",
  },

  "1.d4 Nf6 2.c4 e5": {
    name: "Budapest Gambit",
    background:
      "The first known game was a casual game between Mór Adler and Géza Maróczy in Budapest " +
      "on 5 March 1896. It gained attention when Milan Vidmar beat Akiba Rubinstein with it " +
      "at Berlin in April 1918, the year Carl Schlechter published a monograph that can be " +
      "considered the first book on the opening.",
    strategy:
      "Offers the e-pawn: after 3.dxe5 Ng4 Black regains it on e5, often after ...Nc6, helped " +
      "by quick development and ...Bb4+ or ...Bc5. White cannot hold the extra pawn without " +
      "awkward piece placement and usually aims for a small positional edge instead, as in " +
      "4.Bf4 Nc6 5.Nf3 Bb4+ 6.Nbd2, where White often gets the bishop pair. Rarely played at " +
      "grandmaster level.",
  },

  "1.d4 Nf6 2.c4 d5": {
    name: "Queen's Gambit Declined: Marshall Defence",
    background:
      "Frank Marshall played it in the 1920s but gave it up after losing with it to Alexander " +
      "Alekhine at Baden-Baden in 1925. It is regarded as a fairly dubious variation of the " +
      "Queen's Gambit Declined, and experienced players no longer use it.",
    strategy:
      "Claims the centre at once, and 3.Nc3 e6 transposes into a Queen's Gambit Declined. But " +
      "after 3.cxd5 Nxd5 4.Nf3, with e4 to follow, White gains time against the knight and " +
      "builds a broad centre without allowing the counter ...e5.",
  },

  "1.d4 Nf6 2.c4 b5": {
    name: "Indian Defence: Pyrenees Gambit",
    strategy:
      "Offers a pawn in Benko style, but without a pawn on d5 and without ...c5 to open the " +
      "queenside. After 3.cxb5 White is a clean pawn ahead, and the queenside pressure from " +
      "...a6 does not make up for it while White develops with Nc3 and Nf3.",
  },

  "1.d4 Nf6 2.c4 a6": {
    strategy:
      "Prepares ...b5 and keeps White's pieces off b5, but does nothing for the centre or " +
      "development. Black spends a tempo on a rook-pawn move while White continues with Nc3, " +
      "Nf3 and e4 or e3 at leisure.",
  },

  "1.d4 Nf6 2.c4 a5": {
    strategy:
      "Stops b4 but contributes nothing to development or the fight for the centre. A tempo " +
      "is spent on the rook's pawn while White occupies the centre with Nc3 and e4 or Nf3.",
  },

  "1.d4 Nf6 2.c4 Na6": {
    strategy:
      "Develops the knight to the rim, where it eyes b4 and c5 and can recapture on c5 after " +
      "...c5 and dxc5. From a6 it does nothing for d5 or e5, and White takes an easy central " +
      "edge with Nc3 and e4.",
  },

  "1.d4 Nf6 2.c4 h6": {
    strategy:
      "Prevents Bg5 but spends a tempo on a rook-pawn move and leaves the centre alone. White " +
      "simply continues with Nc3 and e4 and has a lead in development.",
  },

  "1.d4 Nf6 2.c4 h5": {
    strategy:
      "Spends a tempo on the rook's pawn and does nothing for the centre or development; with " +
      "the pawn past h6, Black can no longer meet Bg5 with ...h6. White develops with Nc3, " +
      "Bg5 and e4 and has a clear lead in development.",
  },

  "1.d4 Nf6 2.c4 Ng8": {
    strategy:
      "Undoes the knight's development and costs two tempi. White has a full centre and the " +
      "move, and Black has to start again with ...Nf6.",
  },

  "1.d4 Nf6 2.c4 Ng4": {
    strategy:
      "Moves the same knight a second time without a target: f2 and h2 are both guarded, and " +
      "h3 can drive it back later. White builds the centre with Nc3 and e4 and gains further " +
      "time against the knight.",
  },

  "1.d4 Nf6 2.c4 Nh5": {
    strategy:
      "Moves the knight a second time, to the rim, where its only forward squares, f4 and g3, " +
      "are covered by White. White takes the centre with Nc3 and e4 and is clearly ahead in " +
      "development.",
  },

  "1.d4 Nf6 2.c4 Ne4": {
    strategy:
      "Moves the knight again to e4, where Qc2, Nc3 or f3 chase it with a gain of time. Black " +
      "has no pawn on d5 or f5 yet to support it, and White builds a broad centre with the " +
      "time gained.",
  },

  "1.d4 Nf6 2.c4 Rg8": {
    strategy:
      "Wastes a tempo with the rook and forfeits the right to castle kingside for good, while " +
      "the centre and development are untouched.",
  },

  "1.d4 Nf6 2.c4 g5": {
    name: "Indian Defence: Medusa Gambit",
    strategy:
      "Loses a pawn at once: 3.Bxg5 wins it, and after 3...Ne4 the bishop retreats with 4.Bf4 " +
      "or 4.Bh4 while the weakened kingside leaves Black no real compensation.",
  },

  "1.d4 Nf6 2.c4 Nd5": {
    strategy:
      "Hangs the knight: 3.cxd5 wins it for nothing, because the d7-pawn blocks the queen's " +
      "defence of d5 and no other piece guards the square.",
  },

  "1.d4 Nf6 2.Nf3 e6": {
    strategy:
      "Opens the diagonal for the f8-bishop and keeps Queen's Gambit, Queen's Indian and " +
      "Bogo-Indian set-ups all available, usually by transposition. After 3.c4 Black chooses " +
      "between ...d5, ...b6 and ...Bb4+; against 3.Bg5, 3.Bf4 or 3.e3 a common plan is ...d5 " +
      "and ...c5. The price is a c8-bishop hemmed in by the e6-pawn, which usually needs " +
      "...b6 and ...Bb7 to find a diagonal.",
  },

  "1.d4 Nf6 2.Nf3 g6": {
    name: "East Indian Defence",
    background:
      "The Encyclopaedia of Chess Openings files the East Indian Defence under A48, and its " +
      "Przepiórka Variation (3.g3) under A49. White's Barry Attack, which starts with 3.Nc3, " +
      "has been tried at grandmaster level by Mark Hebden and Julian Hodgson.",
    strategy:
      "Prepares ...Bg7 and kingside castling, and keeps both the King's Indian and the " +
      "Grünfeld open if White plays c4. White often avoids that with 3.g3, 3.Bg5 or 3.Bf4, " +
      "and Black develops with ...Bg7, ...O-O and ...d6 or ...d5, striking at the centre " +
      "later with ...c5 or ...e5. The cost is that White has the first say in the centre.",
  },

  "1.d4 Nf6 2.Nf3 d5": {
    name: "Queen's Pawn Game: Symmetrical Variation",
    strategy:
      "Meets the pawn with a pawn and takes a share of the centre, which also lets the " +
      "c8-bishop come out before ...e6. After 3.c4 e6 or 3.c4 c6 the game is a Queen's Gambit " +
      "Declined or a Slav, and against 3.Bf4, 3.Bg5 or 3.e3 Black develops with ...e6, ...c5 " +
      "and ...Nc6 or ...Bf5. The cost is that White decides which structure arises.",
  },

  "1.d4 Nf6 2.Nf3 b6": {
    name: "Accelerated Queen's Indian Defence",
    background:
      "Against 2.c4, playing ...b6 before ...e6 is considered less accurate than the standard " +
      "Queen's Indian order because of 3.Nc3 Bb7 4.Qc2, after which White was better in " +
      "Alekhine–König, Vienna 1922. With the knight already committed to f3 that line is not " +
      "available, which makes the early ...b6 somewhat more common against 2.Nf3 than against " +
      "2.c4.",
    strategy:
      "Prepares ...Bb7 to bear on e4 and the long diagonal and keeps ...e6 in hand, so that " +
      "3.c4 e6 reaches a Queen's Indian set-up. Against 3.g3, 3.Bf4 or 3.Bg5 Black still " +
      "develops with ...Bb7 and ...e6 and aims for ...c5 or ...d5. The cost is that the " +
      "centre stays with White for now, and White picks which structure arises.",
  },

  "1.d4 Nf6 2.Nf3 c5": {
    name: "Indian Defence: Spielmann-Indian Variation",
    strategy:
      "Strikes at d4 at once and heads for a Benoni-type structure: after 3.d5 Black plays " +
      "...e6 against the d5-pawn, or ...d6, ...g6 and ...Bg7, or 3...b5 for queenside play. " +
      "It is less common than 2...e6, 2...g6 or 2...d5, and White, not obliged to play c4, " +
      "can build up with Nc3 and e4 and press with extra space.",
  },

  "1.d4 Nf6 2.Nf3 d6": {
    name: "Indian Defence: Tartakower Defence",
    strategy:
      "Frees the c8-bishop and prepares ...Nbd7 and ...e5; after ...g6 and ...Bg7 it can " +
      "still become a King's Indian or East Indian set-up, and if White plays c4, an Old " +
      "Indian. Against 3.Bf4, which stops ...e5 for now, Black can chase the bishop with " +
      "...Nh5 and perhaps ...h6 and ...g5. Sound but modest: the d6-pawn claims less space " +
      "than 2...d5, and White keeps a free choice of set-up.",
  },

  "1.d4 Nf6 2.Nf3 c6": {
    name: "Indian Defence: Czech-Indian",
    strategy:
      "Prepares ...d5, so that 3.c4 d5 reaches the Slav Defence, and keeps ...d6 with an Old " +
      "Indian or King's Indian set-up in reserve. White need not play c4: 3.Bf4, 3.g3 or " +
      "3.Bg5 lead to quieter positions in which the c6-pawn has taken the natural square of " +
      "the b8-knight.",
  },

  "1.d4 Nf6 2.Nf3 Ne4": {
    name: "Döry Defence",
    background:
      "The Döry Defence was the subject of a theme tournament in Vienna in 1937, won by Paul " +
      "Keres. It is uncommon, and sometimes transposes into a variation of the Queen's Indian " +
      "Defence.",
    strategy:
      "Puts the knight on a central post at once, to be supported later by ...d5, or by ...b6 " +
      "and ...Bb7. It has now moved twice, and White can challenge it with 3.Nfd2 or 3.Nbd2, " +
      "aiming to trade it off or, after Nfd2, to drive it back with f3 and gain time for e4.",
  },

  "1.d4 Nf6 2.Nf3 Nc6": {
    strategy:
      "Develops a knight but invites 3.d5, which attacks it at once. 3...Ne5 loses the piece " +
      "to 4.Nxe5, so the knight goes back to b8 or to a5 or b4, where it is soon driven on, " +
      "and White has gained space and time.",
  },

  "1.d4 Nf6 2.Nf3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but does nothing for the centre. " +
      "White can take space with c4, Nc3 and e4 while the piece stays out of play.",
  },

  "1.d4 Nf6 2.Nf3 Rg8": {
    strategy:
      "Moves the rook for no purpose, wasting a tempo and giving up the right to castle " +
      "kingside. Nothing is developed and the king has lost its natural shelter.",
  },

  "1.d4 Nf6 2.Nf3 a6": {
    name: "Indian Defence: Knights Variation, Alburt-Miles Variation",
    strategy:
      "Prepares ...b5 and ...Bb7 but spends a tempo on a rim pawn while the centre and " +
      "development are untouched. White can choose c4, Bf4 or e3 at leisure.",
  },

  "1.d4 Nf6 2.Nf3 a5": {
    strategy:
      "Stops b4 and gains queenside space, but spends a tempo on a rim pawn and leaves the " +
      "b5-square weak. Neither the centre nor development is addressed, so White simply " +
      "continues with c4 or Bf4.",
  },

  "1.d4 Nf6 2.Nf3 b5": {
    name: "Indian Defence: Polish Variation",
    strategy:
      "Grabs queenside space and prepares ...Bb7, but spends a tempo on a pawn push with only " +
      "one piece developed. The b5-pawn becomes a target: e3 or e4 opens the f1-bishop's " +
      "diagonal to it, and a4 or c4 attack it as well.",
  },

  "1.d4 Nf6 2.Nf3 h6": {
    strategy:
      "Stops Bg5 for the price of a tempo and does nothing for the centre or development. " +
      "White continues with c4, Bf4 or e3 as if Black had passed, and the kingside pawns are " +
      "loosened.",
  },

  "1.d4 Nf6 2.Nf3 h5": {
    strategy:
      "Weakens g5 and g6 without developing anything. White takes the free tempo for c4, e3 " +
      "or Bf4, and the advanced h-pawn gains nothing in return.",
  },

  "1.d4 Nf6 2.Nf3 Ng8": {
    strategy:
      "Retreats the knight to where it began, undoing Black's first move. White gets two free " +
      "tempi in the centre and can set up with c4, e4 or Bf4 as it likes.",
  },

  "1.d4 Nf6 2.Nf3 Ng4": {
    strategy:
      "Moves the knight a second time with no real threat, since the f3-knight and the " +
      "h1-rook guard h2 and the king guards f2. 3.h3 drives it back, so Black has lost a " +
      "tempo while White gains a useful move.",
  },

  "1.d4 Nf6 2.Nf3 Nh5": {
    strategy:
      "Puts the knight on the rim, from where 3.g4 drives it back with gain of space; 3...Nf4 " +
      "would lose it to 4.Bxf4. Black has spent two moves on the knight and developed nothing " +
      "else.",
  },

  "1.d4 Nf6 2.Nf3 Nd5": {
    strategy:
      "Centralises the knight, but 3.c4 or 3.e4 drives it away with tempo, so that it moves a " +
      "third time while White builds a broad pawn centre.",
  },

  "1.d4 Nf6 2.Nf3 e5": {
    strategy:
      "Loses a pawn for little: the f3-knight and the d4-pawn both attack e5, and after " +
      "3.Nxe5 d6 4.Nf3 White is simply a pawn up.",
  },

  "1.d4 Nf6 2.Nf3 g5": {
    strategy:
      "Hangs the g-pawn, which both Nf3 and Bc1 attack and nothing defends, so 3.Bxg5 or " +
      "3.Nxg5 wins a pawn for nothing and leaves Black's kingside loosened.",
  },

  "1.d4 Nf6 2.Bg5 Ne4": {
    background:
      "The most common reply to the Trompowsky Attack. When White defends the bishop with " +
      "3.h4, the line is known as the Raptor Variation.",
    strategy:
      "Attacks the bishop at once, so White moves it again with 3.Bf4 or 3.Bh4 or defends it " +
      "with 3.h4. The careless 3.Nf3 allows 3...Nxg5 4.Nxg5 e5, and the discovered attack on " +
      "the knight regains the lost time. Black then strikes at the centre with ...c5 or ...d5 " +
      "and keeps the knight on e4 until White spends a move to chase it, often f3, which " +
      "takes the best square from White's own knight.",
  },

  "1.d4 Nf6 2.Bg5 e6": {
    name: "Trompowsky Attack: Classical Defence",
    background: "The second most popular reply to the Trompowsky Attack, after 2...Ne4.",
    strategy:
      "Lets the queen recapture if White takes on f6, so Black avoids doubled pawns, and " +
      "opens the diagonal of the f8-bishop. The price is a pinned knight, and 3.e4 builds a " +
      "broad centre at once. After 3...h6 4.Bxf6 Qxf6 White has the centre, Black the bishop " +
      "pair and an intact pawn structure. With 3.Nf3 White transposes to the Torre Attack.",
  },

  "1.d4 Nf6 2.Bg5 d5": {
    background:
      "Magnus Carlsen chose the Trompowsky, an uncommon opening at the elite level, in the " +
      "first game of the 2016 World Chess Championship, and Sergey Karjakin answered 2...d5. " +
      "After 3.e3 c5 4.Bxf6 gxf6 the game was drawn in 42 moves.",
    strategy:
      "Takes the centre at once and allows 3.Bxf6, doubling Black's pawns. Black usually " +
      "recaptures 3...exf6, keeping a defensible structure and opening diagonals for the " +
      "queen and the f8-bishop, though 3...gxf6 is also common. In return Black has the " +
      "bishop pair, and White has spent two moves on a bishop only to trade it. White can " +
      "also transpose to the Richter–Veresov Attack with 3.Nc3 or to a line of the Torre " +
      "Attack with 3.Nf3.",
  },

  "1.d4 Nf6 2.Bg5 c5": {
    strategy:
      "Strikes at d4 and plans to trade the c-pawn for White's d-pawn. With the bishop gone " +
      "from c1, ...Qb6 hits b2: after 3.d5 Qb6 White can offer the pawn with 4.Nc3 Qxb2 " +
      "5.Bd2. White can also take 3.Bxf6 first, and 3...gxf6 4.d5 Qb6 leads to sharp play. " +
      "Once its pawns are doubled, Black relies on the bishop pair and play against White's " +
      "centre.",
  },

  "1.d4 Nf6 2.Bg5 g6": {
    strategy:
      "Prepares ...Bg7 and a King's Indian set-up. It is sound, but 3.Bxf6 forces 3...exf6, " +
      "away from the centre, and the doubled f-pawns block the fianchettoed bishop in return " +
      "for the bishop pair.",
  },

  "1.d4 Nf6 2.Bg5 c6": {
    background:
      "In Djordjević–Kovačević, Bela Crkva 1984, White played 3.e3?? and resigned after " +
      "3...Qa5+ in view of 4...Qxg5. Graham Burgess, in The Quickest Chess Victories of All " +
      "Time, calls it “the shortest ever loss by a master”.",
    strategy:
      "Opens the d8-a5 diagonal and prepares ...Qb6 against the b2-pawn, unguarded since the " +
      "bishop left c1. White must avoid 3.e3??, because 3...Qa5+ attacks king and bishop at " +
      "once; 3.Bxf6 and 3.Nf3 are the usual replies. An offbeat but sound move.",
  },

  "1.d4 Nf6 2.Bg5 Nc6": {
    strategy:
      "Develops with pressure on d4 but blocks the c-pawn, so the ...c5 break has to wait. " +
      "3.d5 drives the knight to e5, where f4 or Qd4 can chase it again, and 3.Bxf6 doubles " +
      "Black's pawns at once. Sound, but slower than the central replies.",
  },

  "1.d4 Nf6 2.Bg5 b6": {
    strategy:
      "Prepares ...Bb7 and ...e6 in the style of the Queen's Indian. After 3.Bxf6 exf6 Black " +
      "has doubled f-pawns, and White builds with e3 and Nf3 or aims for e4 with Nd2. " +
      "Playable, but slower than the central replies ...d5 and ...c5.",
  },

  "1.d4 Nf6 2.Bg5 d6": {
    strategy:
      "Opens the c8-bishop and prepares ...e5 or ...g6, but leaves the centre to White for " +
      "now. After 3.Bxf6 exf6 4.e4 White has the broader pawn centre, and Black has the " +
      "bishop pair for the doubled f-pawns. Sound, but more passive than the central replies.",
  },

  "1.d4 Nf6 2.Bg5 h6": {
    strategy:
      "Puts the question to the bishop at once instead of developing. 3.Bxf6 exf6 doubles " +
      "Black's pawns and leaves ...h6 a lost tempo, while 3.Bh4 g5 4.Bg3 loosens Black's " +
      "kingside.",
  },

  "1.d4 Nf6 2.Bg5 Na6": {
    strategy:
      "Puts the knight on the rim, where it contests neither d4 nor e5, and does nothing " +
      "against 3.Bxf6. White develops freely with e3, Nf3 and c4.",
  },

  "1.d4 Nf6 2.Bg5 a6": {
    strategy:
      "A rim-pawn move that develops nothing and does nothing against Bxf6. White continues " +
      "with e3, Nf3 and c4 at leisure.",
  },

  "1.d4 Nf6 2.Bg5 a5": {
    strategy:
      "Gains a little queenside space but develops nothing and does nothing against Bxf6, " +
      "which doubles Black's pawns. White gets e3, Nf3 and c4 for free.",
  },

  "1.d4 Nf6 2.Bg5 b5": {
    strategy:
      "Advances the b-pawn before a second piece is developed and weakens c6 and the " +
      "queenside. The pawn is already a target: 3.Qd3 or 3.a4 hits it, and Black must spend " +
      "another move such as ...a6 or ...c6 on it.",
  },

  "1.d4 Nf6 2.Bg5 h5": {
    strategy:
      "A flank pawn move that develops nothing and weakens g5 and g6 for good. It does not " +
      "stop 3.Bxf6, which doubles Black's pawns while White develops.",
  },

  "1.d4 Nf6 2.Bg5 Ng8": {
    strategy:
      "Returns the knight to its starting square and undoes Black's only developing move. " +
      "White has d4 and the active bishop on g5 for free and a clear lead in development.",
  },

  "1.d4 Nf6 2.Bg5 Ng4": {
    strategy:
      "Moves the knight again without creating a threat, to a square where 3.h3 hits it at " +
      "once. Then 3...Nf6 has only lost time, and 3...Nh6 4.Bxh6 gxh6 wrecks Black's kingside " +
      "pawns.",
  },

  "1.d4 Nf6 2.Bg5 Nh5": {
    strategy:
      "Puts the knight on the rim, where 3.e3 or 3.e4 opens the queen's diagonal and " +
      "threatens Qxh5. Black must then guard it with ...g6, leaving it offside, or bring it " +
      "back to f6 with two tempi lost.",
  },

  "1.d4 Nf6 2.Bg5 Nd5": {
    strategy:
      "Centralises the knight, but on d5 it is a target: 3.c4 or 3.e4 attacks it at once. " +
      "White gains central space with tempo while Black has moved the same piece twice.",
  },

  "1.d4 Nf6 2.Bg5 Rg8": {
    strategy:
      "Gives up kingside castling for good and spends a tempo guarding g7, which the " +
      "f8-bishop already guards. White develops freely, and Bxf6 still doubles Black's pawns.",
  },

  "1.d4 Nf6 2.Bg5 e5": {
    strategy:
      "Offers the e-pawn, but after 3.dxe5 the knight is pinned to the queen, since e7 is now " +
      "empty: 3...Ne4 or 3...Ng4 allows 4.Bxd8. Black stays at least a pawn down, for example " +
      "after 3...h6 4.exf6 hxg5 5.fxg7 Bxg7.",
  },

  "1.d4 Nf6 2.Bf4 d5": {
    name: "London System",
    strategy:
      "Meets the pawn with a pawn and takes a share of the centre, and the c8-bishop can now " +
      "come out to f5 or g4. Black can strike back with ...c5 and ...Nc6, or hit b2 with " +
      "...c5 and ...Qb6, while White sets up with e3, Nf3, c3 and Bd3 or transposes to a " +
      "Queen's Gambit with c4. The cost is the e5-square: with the d-pawn on d5, White can " +
      "plant a knight there, backed by d4 and the f4-bishop.",
  },

  "1.d4 Nf6 2.Bf4 e6": {
    strategy:
      "Opens the diagonal of the f8-bishop and keeps ...d5, ...b6 and ...c5 in hand, so Black " +
      "can still choose between a Queen's Gambit structure with ...d5 and a Queen's Indian " +
      "set-up with ...b6. Against e3 and Nf3 a common plan is ...c5 with ...d5, or ...b6 and " +
      "...Bb7, where the bishop controls e4. The cost is a c8-bishop shut in by the e6-pawn " +
      "until ...b6 gives it a diagonal.",
  },

  "1.d4 Nf6 2.Bf4 c5": {
    background:
      "An early ...c5 is described as a popular response to the London System at higher " +
      "levels of play. Johnsen and Kovačević considered 1.d4 Nf6 2.Bf4 c5 3.e3 Qb6 the most " +
      "critical line.",
    strategy:
      "Challenges d4 at once and targets the b2-pawn, which no bishop guards any more: after " +
      "3.e3 the reply ...Qb6 hits it, and White must defend it or offer it for activity. " +
      "White can instead gain space with 3.d5, reaching a Benoni-type structure. The price is " +
      "a sharper game in which Black's development can lag if the queen sortie comes to " +
      "nothing.",
  },

  "1.d4 Nf6 2.Bf4 g6": {
    strategy:
      "Prepares ...Bg7 and kingside castling, followed by ...d6 and ...Nbd7 in King's Indian " +
      "style or by ...d5. White usually continues with e3 or Nc3, and a bishop on e2 suits " +
      "the position better than one on d3, where Black's fianchetto leaves it little scope. " +
      "The cost is that Black leaves the centre to White for now and must prepare ...c5 or " +
      "...e5 to challenge it.",
  },

  "1.d4 Nf6 2.Bf4 b6": {
    strategy:
      "Prepares ...Bb7 and ...e6, a Queen's Indian set-up in which the bishop controls e4. It " +
      "is sound, but it does not challenge d4 and commits the b-pawn before Black knows " +
      "White's plan, while White develops freely with e3, Nf3 and Bd3. The same set-up is " +
      "available after ...e6, which keeps ...d5 and ...c5 in hand as well.",
  },

  "1.d4 Nf6 2.Bf4 d6": {
    strategy:
      "Frees the c8-bishop and prepares ...Nbd7 and ...e5, which would hit the f4-bishop, or " +
      "...g6 and ...Bg7 for a King's Indian set-up. It is sound but modest: the d6-pawn " +
      "claims less space than ...d5, and White develops with e3, Nf3 and Be2 or takes space " +
      "with Nc3 and e4.",
  },

  "1.d4 Nf6 2.Bf4 c6": {
    strategy:
      "Prepares ...d5 with a Slav-type structure in which the c8-bishop can come out to f5, " +
      "and opens the d8-b6 diagonal for ...Qb6 against b2. It is sound but less direct than " +
      "...c5: the pawn takes c6 from the b8-knight, and ...c5 later costs a second tempo, " +
      "while White continues with e3, Nf3 and Nbd2.",
  },

  "1.d4 Nf6 2.Bf4 Ne4": {
    strategy:
      "Puts the knight on a central post at once, to be supported later by ...d5, or by ...b6 " +
      "and ...Bb7. White can challenge it with 3.Nd2 or drive it back with 3.f3 and follow " +
      "with e4, so Black has spent two moves on one piece. Sound enough, but not recommended: " +
      "White develops comfortably while the knight looks for a role.",
  },

  "1.d4 Nf6 2.Bf4 Nh5": {
    strategy:
      "Attacks the bishop and aims for ...Nxf4, which would give Black the bishop pair. White " +
      "can keep the bishop with Bg5 or Bd2, after which e3 opens the d1-h5 diagonal so that " +
      "the knight on the rim must move again, or allow the trade with e3 and recapture exf4 " +
      "for control of e5. Sound enough, but Black spends time on the knight.",
  },

  "1.d4 Nf6 2.Bf4 Nc6": {
    strategy:
      "Develops the knight but blocks the c-pawn and allows 3.d5, which attacks it at once. " +
      "The knight cannot go to e5, where Bxe5 wins it, so it usually goes to b4, a5 or b8, " +
      "and White gains space with tempo.",
  },

  "1.d4 Nf6 2.Bf4 Na6": {
    strategy:
      "Sends the knight to the rim, where it eyes b4 and c5 and guards c7 but does nothing " +
      "for the centre. White develops freely with e3, Nf3 and Nbd2, or takes more space with " +
      "c4.",
  },

  "1.d4 Nf6 2.Bf4 Rg8": {
    strategy:
      "Gives up kingside castling for good, and its only point, a later ...g5 against the " +
      "bishop, loosens Black's position further. White simply continues with e3, Nf3 and c3 " +
      "while Black's king stays in the centre or must castle long.",
  },

  "1.d4 Nf6 2.Bf4 a6": {
    strategy:
      "Spends a tempo on a rook-pawn move that neither develops a piece nor fights for the " +
      "centre. White continues with e3, Nf3 and c3, or takes space with Nc3 and e4.",
  },

  "1.d4 Nf6 2.Bf4 a5": {
    strategy:
      "Spends a tempo on the rook's pawn: it takes b4 away but develops nothing, leaves b5 " +
      "weak and does not fight for the centre. White continues with e3, Nf3 and Nbd2 at " +
      "leisure.",
  },

  "1.d4 Nf6 2.Bf4 b5": {
    strategy:
      "Gains queenside space and prepares ...Bb7, but weakens c6 and leaves the b5-pawn " +
      "without support: e3 opens the f1-bishop's diagonal to it, and a4 or Nc3 attack it as " +
      "well. Black must spend further time on the pawn, for instance with ...a6.",
  },

  "1.d4 Nf6 2.Bf4 e5": {
    strategy:
      "Offers the e-pawn in the spirit of the Budapest Gambit, aiming for ...Ng4 and ...Nc6 " +
      "against e5. After 3.dxe5 the f4-bishop already guards the pawn and Nf3 adds a second " +
      "guard, so Black struggles to win it back and has limited counterplay.",
  },

  "1.d4 Nf6 2.Bf4 h6": {
    strategy:
      "Takes g5 away and prepares ...g5 to drive the bishop back, but it delays development " +
      "and loosens the kingside. After ...g5 and Bg3 the bishop stays on a good diagonal, and " +
      "White continues with e3, Nf3 and c3.",
  },

  "1.d4 Nf6 2.Bf4 h5": {
    strategy:
      "Advances the rook's pawn to support a knight on g4, but develops nothing and weakens " +
      "g5 and the kingside. White continues with e3, Nf3 and c3 and faces no threat.",
  },

  "1.d4 Nf6 2.Bf4 Ng8": {
    strategy:
      "Returns the knight to g8 and wastes the first move, so White has d4 and Bf4 played " +
      "against an undeveloped army and can take the centre with e4 or c4 and Nc3 at will.",
  },

  "1.d4 Nf6 2.Bf4 Ng4": {
    strategy:
      "Moves the knight again to a square where it hits f2 and h2, but both are guarded, and " +
      "3.h3 drives it back with gain of time. Black has developed nothing else.",
  },

  "1.d4 Nf6 2.Bf4 Nd5": {
    strategy:
      "Attacks the unprotected bishop, but White keeps it with 3.Bg3 and then threatens c4 or " +
      "e4 to drive the knight back with gain of time. Black has moved the same knight twice " +
      "and is behind in development.",
  },

  "1.d4 Nf6 2.Bf4 g5": {
    strategy:
      "Attacks the bishop, but the pawn on g5 is unprotected: 3.Bxg5 wins it at once, and " +
      "after ...Rg8 White can trade on f6 and keep the extra pawn. Black's kingside is " +
      "loosened for nothing.",
  },
};
