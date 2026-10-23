import type { OpeningTexts } from "../book.ts";

// English prose for b3.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move.
export const en: OpeningTexts = {
  "1.b3 e5": {
    name: "Nimzowitsch–Larsen Attack: Modern Variation",
    background:
      "Black's most popular and ambitious reply to 1.b3, chosen in about 45 percent of games.",
    strategy:
      "Occupies the centre at once and blocks the long diagonal. After 2.Bb2 attacks the " +
      "pawn, Black's usual answer is ...Nc6, often followed by ...d5 for a broad pawn centre; " +
      "...d6 is a more timid way to hold e5. White then attacks the centre with e3, Bb5 and " +
      "f4, the bishop pinning the knight that guards e5, or plays c4 for a Sicilian with " +
      "colours reversed.",
  },

  "1.b3 d5": {
    name: "Nimzowitsch–Larsen Attack: Classical Variation",
    background:
      "Aron Nimzowitsch more often reached this kind of position through 1.Nf3 d5 2.b3, a " +
      "move order that rules out ...e5. After 1.b3 itself, 1...d5 is Black's second most " +
      "common reply, in about 27 percent of games.",
    strategy:
      "Takes space in the centre and keeps White from playing e4 cheaply. After 2.Bb2 Black " +
      "can build a broad centre with ...c5 and ...Nc6, when e3, Nf3 and Bb5 lead to a " +
      "reversed Nimzo-Indian, or develop London-style with ...Bf5 and ...e6. Black only has " +
      "to watch the long diagonal: ...g6 must come after ...Nf6, or Bb2 takes the h8 rook.",
  },

  "1.b3 Nf6": {
    name: "Nimzowitsch–Larsen Attack: Indian Variation",
    background:
      "The third most common reply to 1.b3, chosen in about 15 percent of games overall and " +
      "in about 20 percent at the 2500 rating level.",
    strategy:
      "Develops a piece, eyes e4 and d5 and leaves the choice of central pawn open, so the " +
      "game often transposes into the structures of 1...d5 or 1...e5. After 2.Bb2 a common " +
      "setup is 2...g6 with ...Bg7, but then 3.e4 takes the centre, because the knight is " +
      "pinned against the h8 rook and ...Nxe4 loses the rook to Bxh8.",
  },

  "1.b3 c5": {
    name: "Nimzowitsch–Larsen Attack: English Variation",
    strategy:
      "Fights for d4 from the wing and keeps the central pawns flexible. After 2.Bb2 Black " +
      "develops with ...Nc6 and ...Nf6 and can add ...d5, transposing into the 1...d5 lines " +
      "with ...c5. White can also choose 2.e4, entering a Sicilian, or 2.c4, a Symmetrical " +
      "English, so Black needs to know those structures too.",
  },

  "1.b3 b6": {
    name: "Nimzowitsch–Larsen Attack: Symmetrical Variation",
    strategy:
      "Copies White's queen's fianchetto and prepares ...Bb7 to contest the long diagonal, " +
      "keeping a solid symmetrical structure. It is sound, but it neither claims the centre " +
      "nor creates imbalance, so White keeps the easier game with Bb2, e3 and Nf3.",
  },

  "1.b3 e6": {
    strategy:
      "Prepares ...d5 and opens the f8 bishop's diagonal while keeping every option open; " +
      "after 2.Bb2 the game often transposes into the 1...d5 or 1...Nf6 lines. White can also " +
      "choose 2.e4, when 2...d5 gives a French Defence. Sound but modest, as the pawn on e6 " +
      "hems in the c8 bishop unless Black adds ...b6 and ...Bb7.",
  },

  "1.b3 c6": {
    strategy:
      "Prepares ...d5 with a Caro-Kann-style pawn on c6 and a solid structure; after 2.e4 d5 " +
      "the game is indeed a Caro-Kann. Sound, but the pawn takes c6 from the knight and does " +
      "nothing for development, so Black reacts to White's setup instead of shaping the game.",
  },

  "1.b3 d6": {
    strategy:
      "Prepares ...e5 and ...Nf6 in a flexible, Philidor-like setup; after 2.Bb2 e5 the game " +
      "transposes into 1...e5 2.Bb2 d6. Sound but passive: Black waits and leaves White free " +
      "to take space with e4, or with e3 and d4.",
  },

  "1.b3 Nc6": {
    strategy:
      "Develops a piece and supports ...e5; after 2.Bb2 e5 the game transposes into the main " +
      "line of 1...e5. The knight blocks the c-pawn, though, and White need not cooperate: " +
      "2.e4 or 2.d4 takes the centre first. Playable, but less direct than 1...e5 or 1...d5.",
  },

  "1.b3 f5": {
    name: "Nimzowitsch–Larsen Attack: Dutch Variation",
    strategy:
      "Stakes out e4 in the manner of the Dutch Defence and prepares ...Nf6 and ...e6. The " +
      "cost is a loosened kingside: the e8–h5 diagonal and the e6 square are weakened, and " +
      "White can build calmly with Bb2 and Nf3 or take space by d4. Rare and not refuted, but " +
      "risky.",
  },

  "1.b3 g6": {
    strategy:
      "Prepares a kingside fianchetto, but after 2.Bb2 the h8 rook is attacked and 2...Bg7? " +
      "loses the bishop to Bxg7. Black blocks with 2...Nf6 and reaches the Indian setup, " +
      "where 3.e4 takes the centre because ...Nxe4 would drop the rook to Bxh8. Playable, but " +
      "it hands White an extra favourable option.",
  },

  "1.b3 b5": {
    name: "Nimzowitsch–Larsen Attack: Polish Variation",
    strategy:
      "Gains queenside space and prepares ...Bb7 to contest the long diagonal. The advanced " +
      "pawn becomes a target once e3 or e4 opens the f1 bishop's diagonal, and a4 can " +
      "undermine it, so Black must keep the queenside under control. Rare, but not refuted.",
  },

  "1.b3 a6": {
    strategy:
      "Spends a tempo on a queenside pawn before any piece or central pawn has moved. White " +
      "develops with Bb2 and takes the centre with e4 or d4 at leisure.",
  },

  "1.b3 a5": {
    strategy:
      "Prepares ...a4 against the b3 pawn, but White can stop it with a4 or meet ...axb3 with " +
      "axb3, and meanwhile the move does nothing for development or the centre. It also " +
      "weakens the b5 square.",
  },

  "1.b3 Na6": {
    strategy:
      "Puts the knight on the rim, where it eyes b4 and c5 but blocks the a-pawn and does " +
      "little for the centre. White simply develops with Bb2 and takes space by e3 and d4 or " +
      "e4.",
  },

  "1.b3 Nh6": {
    strategy:
      "Puts the knight on the rim instead of f6, where it eyes f5 and g4 but controls no " +
      "central square. White develops with Bb2 and takes the centre with e3 and d4 or with e4 " +
      "while Black's development lags.",
  },

  "1.b3 f6": {
    strategy:
      "Covers e5 and blunts the long diagonal, but takes f6 from the knight and opens the " +
      "e8–h5 diagonal, where Qh5+ becomes possible once White's e-pawn has moved. White " +
      "replies 2.e4 or 2.Bb2 and develops freely.",
  },

  "1.b3 h6": {
    strategy:
      "Loses a tempo on a rook-pawn move that prepares ...g5 but neither develops a piece nor " +
      "fights for the centre. White continues with Bb2 and a central pawn advance.",
  },

  "1.b3 h5": {
    strategy:
      "Gains kingside space, but the h-pawn can no longer guard g5 or g6, and the move does " +
      "nothing for development or the centre. White develops with Bb2 and e3 or e4 and keeps " +
      "the easier game.",
  },

  "1.b3 g5": {
    strategy:
      "Opens the long diagonal to the h8 rook: after 2.Bb2 the rook is attacked, and 2...Bg7? " +
      "loses a piece to Bxg7. Black has to block with ...f6, loosening the king, or with " +
      "...Nf6, which Bxf6 can answer with doubled pawns, so White gains time against a " +
      "weakened kingside.",
  },

  "1.b3": {
    name: "Nimzowitsch–Larsen Attack",
    background:
      "Named after Aron Nimzowitsch, who experimented with it in the 1920s and 30s, and Bent " +
      "Larsen, the Danish grandmaster who played it frequently between 1968 and 1972, " +
      "including a loss to Spassky in 17 moves at the 1970 USSR versus Rest of the World " +
      "match. Fischer used it five times in 1970.",
  },
};
