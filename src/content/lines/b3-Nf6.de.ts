import type { OpeningTexts } from "../book.ts";

// German prose for b3-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.b3 Nf6 2.Bb2": {
    strategy:
      "Stellt den Läufer sofort auf die lange Diagonale, wo er auf e5 und den Springer f6 " +
      "wirkt und, sobald der Springer zieht, auch auf g7 und h8. Schwarz kann die Diagonale " +
      "mit ...g6 und ...Lg7 streitig machen, doch 2...g6 erlaubt 3.e4, weil 3...Sxe4 den Turm " +
      "durch Lxh8 verliert. Andernfalls baut Schwarz mit ...e6 und ...d5 oder ...b6 auf, und " +
      "Weiß setzt mit e3, Sf3 und c4 oder d4 fort.",
  },

  "1.b3 Nf6 2.e3": {
    strategy:
      "Öffnet die Diagonale des Läufers f1 und unterstützt ein späteres d4, wobei Lb2, Sf3 " +
      "und Le2 oder Ld3 in beliebiger Reihenfolge möglich bleiben. Oft geht der Zug in die " +
      "Varianten mit 2.Lb2 über, etwa gegen ...d5 und ...e6 oder gegen ...e5 und ...Sc6. Der " +
      "Preis ist eine frühe Festlegung: Ein späteres e4 kostet nun zwei Züge, und Schwarz " +
      "wählt seinen Aufbau zuerst.",
  },

  "1.b3 Nf6 2.Nf3": {
    strategy:
      "Entwickelt den Springer, überwacht e5 und hält c4, d4 und e3 offen, mit Lb2 als " +
      "Fortsetzung. Da 2...e5 durch Sxe5 einen Bauern verlöre, baut Schwarz stattdessen mit " +
      "...d5, ...e6 oder ...b6 auf. Schwarz kann auch ungestört mit ...g6 und ...Lg7 " +
      "fianchettieren: Ohne den Läufer auf b2 verliert e4 einfach einen Bauern durch ...Sxe4.",
  },

  "1.b3 Nf6 2.c4": {
    strategy:
      "Stellt den c-Bauern, gedeckt von b3, nach c4, wo er d5 kontrolliert, mit Lb2, Sc3 und " +
      "Sf3 als Fortsetzung in englischen Aufbauten. Solide, aber langsam: Noch steht kein " +
      "Bauer im Zentrum, sodass Schwarz es mit ...e5 oder mit ...e6 und ...d5 beanspruchen " +
      "kann.",
  },

  "1.b3 Nf6 2.d4": {
    strategy:
      "Besetzt das Zentrum mit einem Bauern, doch nach Lb2 verstellt der Bauer d4 die " +
      "Diagonale des Läufers, sodass dieser vor allem d4 deckt, bis sich das Zentrum öffnet. " +
      "Ohne einen Bauern auf c4 kann Schwarz mit ...d5 Raum gewinnen oder mit ...c5 gegen d4 " +
      "vorgehen und entwickelt sich bequem.",
  },

  "1.b3 Nf6 2.g3": {
    strategy:
      "Bereitet Lg2 für ein Doppelfianchetto vor, in dem beide Läufer über die langen " +
      "Diagonalen auf das Zentrum zielen. Der Aufbau ist solide und leicht zu spielen, aber " +
      "langsam: Schwarz kann mit ...d5 und ...e5 oder ...c5 Raum gewinnen, während Weiß seine " +
      "Entwicklung abschließt.",
  },

  "1.b3 Nf6 2.d3": {
    strategy:
      "Unterstützt ein späteres e4 und hält Lb2, Sd2 und Sf3 für einen bescheidenen Aufbau " +
      "offen. Mit dem Bauern auf d3 kostet d4 nun einen zweiten Zug, sodass Schwarz mit ...d5 " +
      "und ...e5 das Zentrum fast ungehindert besetzen kann. Solide, aber passiv.",
  },

  "1.b3 Nf6 2.Nc3": {
    strategy:
      "Entwickelt einen Springer, der e4 und d5 überwacht, und bereitet e4 vor. Er verstellt " +
      "den c-Bauern, sodass Aufbauten mit c4 vorerst ausscheiden, und nach ...d5 und Lb2 " +
      "gewinnt der Vorstoß ...d4 mit Tempo gegen den Springer Raum. Spielbar, aber es gibt " +
      "keinen Grund, ihn Lb2 vorzuziehen.",
  },

  "1.b3 Nf6 2.a3": {
    strategy:
      "Hält einen schwarzen Läufer von b4 fern und bereitet b4 vor, verbraucht aber ein Tempo " +
      "für einen Randbauern, der nichts für das Zentrum oder die Entwicklung tut. Schwarz " +
      "gewinnt in aller Ruhe mit ...d5 und ...e6 oder ...e5 Raum.",
  },

  "1.b3 Nf6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und verhindert ...b5, verbraucht aber ein Tempo für einen " +
      "Randbauern und schwächt das Feld b4. Zentrum und Entwicklung bleiben unberührt, sodass " +
      "Schwarz mit ...d5 und ...e6 aufbaut.",
  },

  "1.b3 Nf6 2.c3": {
    strategy:
      "Bereitet d4 vor, verstellt aber die lange Diagonale, die b3 öffnen sollte, sodass ein " +
      "Läufer auf b2 gegen den eigenen Bauern stieße. Außerdem nimmt der Zug dem Springer das " +
      "Feld c3 und entwickelt nichts. Schwarz beansprucht mit ...d5 und ...e5 das Zentrum.",
  },

  "1.b3 Nf6 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer das Feld f3, schwächt die Diagonale e1–h4 und " +
      "entwickelt nichts. Schwarz kann mit ...e5 und ...d5 das Zentrum besetzen und gewinnt " +
      "einen Entwicklungsvorsprung.",
  },

  "1.b3 Nf6 2.f4": {
    strategy:
      "Kontrolliert e5 und strebt einen Aufbau nach Art der Bird-Eröffnung an, verwendet aber " +
      "einen Zug auf den f-Bauern, der nichts entwickelt und e3 sowie die Diagonale e1–h4 " +
      "schwächt. Schwarz entwickelt sich mit ...d5, ...e6 oder ...g6.",
  },

  "1.b3 Nf6 2.h3": {
    strategy:
      "Nimmt einem schwarzen Springer oder Läufer das Feld g4, verbraucht aber ein Tempo für " +
      "einen Randbauernzug, den die Stellung noch nicht verlangt. Schwarz besetzt mit ...d5 " +
      "und ...e6 oder ...e5 das Zentrum, während Weiß noch unentwickelt ist.",
  },

  "1.b3 Nf6 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel, entwickelt aber nichts und lockert den Königsflügel ohne " +
      "konkreten Gewinn. Schwarz besetzt mit ...d5 und ...e6 oder ...e5 das Zentrum und liegt " +
      "in der Entwicklung einfach vorn.",
  },

  "1.b3 Nf6 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, mit Blick auf b5 und c4, lässt ihn aber fern vom " +
      "Zentrum und blockiert den a-Bauern. Schwarz besetzt das Zentrum mit ...d5, das auch c4 " +
      "überwacht, und ...e6, während der Springer außer Spiel bleibt.",
  },

  "1.b3 Nf6 2.Nh3": {
    strategy:
      "Strebt über den Rand nach f4, tut aber unterdessen nichts für das Zentrum. Sobald " +
      "...d5 den Läufer c8 öffnet, würde ...Lxh3 nebst gxh3 die weißen Bauern verdoppeln; Sf3 " +
      "war das natürliche Feld.",
  },

  "1.b3 Nf6 2.Ba3": {
    strategy:
      "Zielt auf f8, doch der Bauer e7 verstellt die Diagonale, und der Läufer verlässt die " +
      "lange Diagonale, die b3 vorbereitet hat. Schwarz entwickelt sich mit ...d5 und ...e6, " +
      "und der Läufer auf a3 erreicht nicht mehr als einen möglichen Tausch der " +
      "schwarzfeldrigen Läufer.",
  },

  "1.b3 Nf6 2.b4": {
    strategy:
      "Verwendet einen zweiten Zug auf den b-Bauern, um b4 zu erreichen, wo ihn nichts deckt: " +
      "Nach 2...e6 greift ihn der Läufer f8 an, sodass Weiß ein weiteres Tempo für a3, c3 " +
      "oder b5 aufwenden oder ihn nach ...Lxb4 hergeben muss. Es ist die Stellung nach 1.b4 " +
      "Sf6, aber mit Schwarz am Zug.",
  },

  "1.b3 Nf6 2.g4": {
    strategy:
      "Stellt einen Bauern ein: 2...Sxg4 gewinnt ihn, weil der Bauer e2 die Diagonale der " +
      "Dame versperrt und sonst nichts g4 deckt. Zudem ist der Königsflügel gelockert.",
  },

  "1.b3 Nf6 2.e4": {
    strategy:
      "Lässt den e-Bauern ungedeckt, sodass 2...Sxe4 ihn gewinnt. Nach 3.Lb2 zielt der Läufer " +
      "auf g7, doch der Läufer f8 deckt den Bauern, und Schwarz behält mit ...d5 oder ...Sf6 " +
      "den Mehrbauern in einer gesunden Stellung.",
  },

  "1.b3 Nf6": {
    name: "Larsen-Eröffnung: Indische Variante",
    background:
      "Die dritthäufigste Antwort auf 1.b3: Sie kommt in etwa 15 Prozent aller Partien vor, " +
      "bei einer Spielstärke von 2500 in etwa 20 Prozent.",
  },
};
