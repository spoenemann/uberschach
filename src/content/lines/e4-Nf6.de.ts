import type { OpeningTexts } from "../book.ts";

// German prose for e4-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.e4 Nf6 2.e5": {
    strategy:
      "Greift den Springer an und gewinnt Zeit: Nach 2...Sd5 3.d4 d6 wählt Weiß zwischen dem " +
      "bescheideneren 4.Sf3 und 4.c4 Sb6, das ein breites Zentrum errichtet und zu 5.exd6 " +
      "oder zum Vierbauernangriff 5.f4 führt. Schwarz lässt die Bauern vorrücken, um sie " +
      "danach zu untergraben, typischerweise mit ...dxe5, ...g6 und ...Lg4. Weiß gewinnt Raum " +
      "und Zeit, doch das vorgerückte Zentrum braucht ständige Unterstützung.",
  },

  "1.e4 Nf6 2.Nc3": {
    strategy:
      "Deckt e4 mit einem Entwicklungszug, statt den Springer zu jagen. Er ist die mit " +
      "Abstand häufigste Alternative zu 2.e5 und kann nach 2...e5 in eine Wiener Partie oder " +
      "ein Vierspringerspiel übergehen, nach 2...d6 in eine Pirc-Ufimzew-Verteidigung. " +
      "Eigenständig ist 2...d5, worauf Weiß zwischen 3.exd5 Sxd5 und 3.e5 wählt. Der Preis " +
      "ist der Raum, auf den Weiß ohne 2.e5 verzichtet.",
  },

  "1.e4 Nf6 2.d3": {
    name: "Aljechin-Verteidigung: Maróczy-Variante",
    strategy:
      "Deckt e4 mit dem d-Bauern, sperrt aber den Läufer f1 ein; fianchettiert Weiß ihn mit " +
      "g3 und Lg2, entsteht wahrscheinlich ein Königsindischer Angriff. Schwarz gleicht mit " +
      "2...d5 aus, etwa 3.Sd2 e5, eine Philidor-Verteidigung mit vertauschten Farben. " +
      "Spielbar, aber passiv.",
  },

  "1.e4 Nf6 2.Qe2": {
    strategy:
      "Deckt e4 mit der Dame, sodass 2...Sxe4 3.Dxe4 eine Figur kosten würde. Die Dame " +
      "verstellt den Läufer f1 und verzögert die Entwicklung am Königsflügel, und Schwarz " +
      "erreicht mit 2...e5 ein ausgeglichenes Spiel. Gesund, aber passiv und nicht zu " +
      "empfehlen.",
  },

  "1.e4 Nf6 2.Bd3": {
    strategy:
      "Deckt e4 mit dem Läufer, der jedoch vor dem d-Bauern steht: Solange er auf d3 bleibt, " +
      "kann der d-Bauer nicht ziehen, und der Läufer c1 ist eingesperrt. Sie mit c3 und Lc2 " +
      "zu befreien kostet Zeit, und Schwarz sichert sich mit 2...e5 seinen Anteil am Zentrum. " +
      "Spielbar, aber nicht zu empfehlen.",
  },

  "1.e4 Nf6 2.c4": {
    strategy:
      "Opfert den Bauern e4 für Entwicklung: Nach 2...Sxe4 3.Sf3 folgt d3 oder Sc3 gegen den " +
      "Springer, doch der Mehrbauer ist real und die Kompensation zweifelhaft. Schwarz kann " +
      "auch mit 2...g6 ablehnen, worauf 3.Sc3 in eine Königsindische Verteidigung übergehen " +
      "kann.",
  },

  "1.e4 Nf6 2.d4": {
    strategy:
      "Baut ein Bauernzentrum auf, lässt e4 aber ungedeckt, sodass 2...Sxe4 einen Bauern " +
      "gewinnt. Weiß erhält mit Ld3 und Sf3 etwas Raum im Zentrum und einen " +
      "Entwicklungsvorsprung, aber keine klare Kompensation, und Schwarz konsolidiert mit " +
      "...d5.",
  },

  "1.e4 Nf6 2.f3": {
    strategy:
      "Deckt e4 mit dem f-Bauern, nimmt aber dem Springer g1 sein bestes Feld und schwächt " +
      "die Diagonale e1-h4 und den weißen König. Schwarz greift das Zentrum mit 2...d5 oder " +
      "2...e5 an.",
  },

  "1.e4 Nf6 2.Qf3": {
    strategy:
      "Deckt e4 mit der Dame, sodass 2...Sxe4 3.Dxe4 eine Figur verliert, nimmt aber dem " +
      "Springer g1 das Feld f3 und bringt die Dame früh heraus. Schwarz entwickelt sich mit " +
      "2...Sc6 oder 2...e5 und gewinnt Zeit gegen die exponierte Dame, etwa mit ...Sd4.",
  },

  "1.e4 Nf6 2.Bc4": {
    name: "Aljechin-Verteidigung: Krejcik-Variante",
    strategy:
      "Entwickelt den Läufer in Richtung f7, gibt aber e4 preis: Nach 2...Sxe4 3.Lxf7+ Kxf7 " +
      "4.Dh5+ Kg8 5.Dd5+ e6 6.Dxe4 d5 hat Weiß die Figur zurückgewonnen, doch Schwarz besitzt " +
      "das Läuferpaar und gewinnt mit Tempo Raum im Zentrum. Schwarz kann auch mit 2...e5, " +
      "2...d5 oder 2...e6 ablehnen.",
  },

  "1.e4 Nf6 2.Nf3": {
    name: "Aljechin-Verteidigung: John-Tracy-Gambit",
    strategy:
      "Entwickelt eine Figur, deckt e4 aber nicht, sodass 2...Sxe4 den Königsbauern gewinnt. " +
      "Ein Entwicklungsvorsprung mit d3 und Sc3 oder De2 ist eine zweifelhafte Kompensation, " +
      "und die Variante gilt als schlechte Wahl.",
  },

  "1.e4 Nf6 2.a3": {
    strategy:
      "Ein langsamer Randbauernzug, der den Angriff auf e4 übergeht: 2...Sxe4 gewinnt einen " +
      "Bauern, und Weiß hat dafür nichts vorzuweisen, weder Entwicklung noch " +
      "Zentrumskontrolle.",
  },

  "1.e4 Nf6 2.a4": {
    strategy:
      "Verwendet ein Tempo auf den Randbauern, während e4 hängt: 2...Sxe4 gewinnt einen " +
      "Bauern, und der Bauer auf a4 trägt weder zur Entwicklung noch zum Zentrum etwas bei.",
  },

  "1.e4 Nf6 2.b3": {
    strategy:
      "Bereitet Lb2 vor, lässt aber e4 hängen: Nach 2...Sxe4 3.Lb2 zielt der Läufer auf g7, " +
      "doch Schwarz spielt einfach ...d5 oder ...Sf6 und behält den Mehrbauern.",
  },

  "1.e4 Nf6 2.b4": {
    strategy:
      "Zielt auf Lb2 und Raum am Damenflügel, lässt aber e4 hängen: 2...Sxe4 gewinnt einen " +
      "Bauern, und der Flügelvorstoß bietet keine Kompensation.",
  },

  "1.e4 Nf6 2.c3": {
    strategy:
      "Bereitet d4 vor, lässt e4 aber ungedeckt: 2...Sxe4 gewinnt einen Bauern, und der " +
      "Springer zieht sich einfach nach f6 zurück, wenn Weiß ihn mit d3 oder der Dame jagt.",
  },

  "1.e4 Nf6 2.f4": {
    strategy:
      "Lässt e4 hängen und schwächt die Diagonale e1-h4 und den weißen König: Nach 2...Sxe4 " +
      "hat Schwarz einen glatten Mehrbauern, und der f-Bauer hat nichts für die weiße " +
      "Entwicklung getan.",
  },

  "1.e4 Nf6 2.g3": {
    strategy:
      "Bereitet Lg2 vor, lässt aber e4 hängen: Nach 2...Sxe4 3.Lg2 deckt Schwarz den Springer " +
      "mit ...d5 oder zieht ihn nach f6 zurück und behält den Mehrbauern.",
  },

  "1.e4 Nf6 2.g4": {
    strategy:
      "Schwächt den Königsflügel ohne Grund. Die Dame deckt g4, sodass 2...Sxg4 3.Dxg4 " +
      "Schwarz eine Figur kosten würde, doch 2...Sxe4 gewinnt einfach den e-Bauern, während " +
      "der g-Bauer zu weit vorgerückt ist.",
  },

  "1.e4 Nf6 2.h3": {
    strategy:
      "Ein Wartezug ohne Zweck: e4 hängt, sodass 2...Sxe4 einen Bauern gewinnt, und der Zug " +
      "des h-Bauern hilft weder der Entwicklung noch im Zentrum.",
  },

  "1.e4 Nf6 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel, lässt aber e4 hängen: 2...Sxe4 gewinnt einen Bauern, und " +
      "der vorgerückte h-Bauer wird eher zur Schwäche als zum Angriffsmittel.",
  },

  "1.e4 Nf6 2.Na3": {
    strategy:
      "Stellt den Springer an den Rand und lässt e4 hängen: 2...Sxe4 gewinnt einen Bauern, " +
      "und der Springer auf a3 steht weit vom Zentrum entfernt.",
  },

  "1.e4 Nf6 2.Qg4": {
    strategy:
      "Stellt die Dame auf ein Feld, das der Springer f6 angreift: 2...Sxg4 gewinnt sie " +
      "umsonst.",
  },

  "1.e4 Nf6 2.Qh5": {
    strategy:
      "Stellt die Dame auf ein Feld, das der Springer f6 angreift: 2...Sxh5 gewinnt sie ohne " +
      "Weiteres.",
  },

  "1.e4 Nf6 2.Ke2": {
    strategy:
      "Lässt e4 hängen und führt den König ins Zentrum: 2...Sxe4 gewinnt einen Bauern, und " +
      "Weiß kann nicht mehr rochieren.",
  },

  "1.e4 Nf6 2.Be2": {
    strategy:
      "Entwickelt den Läufer, lässt e4 aber ungedeckt: 2...Sxe4 gewinnt einen Bauern, und " +
      "3.Lf3 erreicht nichts gegen einen Springer, den ...d5 deckt.",
  },

  "1.e4 Nf6 2.Bb5": {
    strategy:
      "Lässt e4 hängen: 2...Sxe4 gewinnt einen Bauern, und der Läufer auf b5 greift nur den " +
      "gut gedeckten Bauern d7 an und wird mit ...c6 vertrieben.",
  },

  "1.e4 Nf6 2.Ba6": {
    strategy: "Stellt den Läufer ein: 2...Sxa6 oder 2...bxa6 gewinnt eine Figur ohne Gegenwert.",
  },

  "1.e4 Nf6 2.Nh3": {
    strategy:
      "Stellt den Springer an den Rand und übergeht e4: 2...Sxe4 gewinnt einen Bauern, und " +
      "der Springer auf h3 leistet kaum mehr, als f4 und g5 ins Auge zu fassen.",
  },

  "1.e4 Nf6 2.Ne2": {
    strategy:
      "Deckt e4 nicht und verstellt sowohl den Läufer f1 als auch die Diagonale der Dame: " +
      "2...Sxe4 gewinnt einen Bauern, und der Springer steht auf e2 ungeschickt.",
  },

  "1.e4 Nf6": {
    name: "Aljechin-Verteidigung",
    background:
      "Von Alexander Aljechin beim Turnier in Budapest 1921 in Partien gegen Endre Steiner " +
      "und Fritz Sämisch eingeführt. Die Herausgeber von Modern Chess Openings nannten sie " +
      "1925 eine „bizarre Verteidigung“, und Bobby Fischer setzte sie im WM-Kampf 1972 " +
      "zweimal gegen Boris Spasski ein.",
  },
};
