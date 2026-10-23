import type { OpeningTexts } from "../book.ts";

// German prose for g3-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.g3 Nf6 2.Bg2": {
    strategy:
      "Vollendet das Fianchetto und richtet den Läufer über die lange Diagonale auf das " +
      "Zentrum und b7. Nach 2...d5 geht die Partie in die Varianten von 1...d5 über, meist " +
      "mit Sf3, O-O und danach d3 und e4 oder c4; gegen indische Aufbauten kann Weiß " +
      "weiterhin zwischen Strukturen der Englischen Eröffnung, der Réti-Eröffnung und des " +
      "Königsindischen Angriffs wählen. Der Preis ist ein noch unbesetztes Zentrum, das " +
      "Schwarz mit ...d5 und ...c5 beanspruchen kann.",
  },

  "1.g3 Nf6 2.Nf3": {
    strategy:
      "Entwickelt den Springer zum Zentrum hin und bereitet die schnelle Rochade vor, mit Lg2 " +
      "und O-O als Fortsetzung. Weiß behält die Wahl zwischen c4 für einen Réti- oder " +
      "englischen Aufbau, d3 mit Sbd2 und e4 für einen Königsindischen Angriff oder d4 mit c4 " +
      "für eine katalanische Struktur. Der Springer kontrolliert außerdem e5, sodass Schwarz " +
      "nicht sofort ...e5 spielen kann und meist mit ...d5 oder ...g6 antwortet.",
  },

  "1.g3 Nf6 2.c4": {
    strategy:
      "Kämpft von der Flanke aus um d5 und hält Sc3, Sf3 und d4 offen. Gegen ...e6 und ...d5 " +
      "kann Weiß mit d4 einen katalanischen Aufbau wählen; gegen ...g6 entsteht eine " +
      "Englische Eröffnung mit beiderseits fianchettierten Königsläufern, gegen ...c5 die " +
      "Symmetrische Variante und gegen ...e5 ein Sizilianisch mit vertauschten Farben. Der " +
      "Bauer besetzt noch kein Zentrumsfeld, sodass Schwarz die Struktur noch wählen kann.",
  },

  "1.g3 Nf6 2.d4": {
    strategy:
      "Besetzt das Zentrum mit einem Bauern und bereitet Lg2, Sf3 und O-O vor, mit c4 als " +
      "Fortsetzung zu einem katalanisch geprägten Aufbau. Der Zug ist solide, aber weniger " +
      "flexibel als 2.Sf3 oder 2.c4, da der d-Bauer festgelegt ist, bevor der schwarze Aufbau " +
      "feststeht, und Schwarz sofort mit ...d5 oder ...c5 antworten kann.",
  },

  "1.g3 Nf6 2.d3": {
    strategy:
      "Unterstützt e4 und öffnet den Läufer c1, mit dem Ziel Lg2, Sf3 und e4 nach Art des " +
      "Königsindischen Angriffs. Der Zug ist solide, aber bescheiden: Schwarz besetzt mit " +
      "...d5 und ...e5 das Zentrum, und das weiße Spiel bleibt passiv, bis e4 durchgesetzt " +
      "werden kann.",
  },

  "1.g3 Nf6 2.Nc3": {
    strategy:
      "Entwickelt den Springer, überwacht d5 und e4 und unterstützt ein späteres e4. Er " +
      "verstellt jedoch den c-Bauern, sodass englische und katalanische Pläne mit c4 vorerst " +
      "ausscheiden, und Schwarz kann sofort mit ...d5 Raum gewinnen und den Springer mit " +
      "...d4 vertreiben.",
  },

  "1.g3 Nf6 2.c3": {
    strategy:
      "Bereitet d4 mit einer soliden Bauernkette vor, entwickelt aber nichts und nimmt dem " +
      "Damenspringer das Feld c3. Der Bauer kämpft nicht um d5, sodass Schwarz mit ...d5 das " +
      "Zentrum besetzt und sich ungehindert entwickelt.",
  },

  "1.g3 Nf6 2.e3": {
    strategy:
      "Unterstützt d4 und bereitet einen ruhigen Aufbau mit Lg2, Se2 und d4 vor. Der Zug ist " +
      "solide, aber passiv: Sobald d4 folgt, sperrt der Bauer e3 den Läufer c1 ein, der dann " +
      "b3 und Lb2 braucht, um ins Spiel zu kommen, und Schwarz besetzt mit ...d5 und ...e5 " +
      "das Zentrum.",
  },

  "1.g3 Nf6 2.b3": {
    strategy:
      "Bereitet Lb2 vor, sodass nach Lg2 beide Läufer im Doppelfianchetto von den langen " +
      "Diagonalen aus auf das Zentrum wirken. Der Zug ist solide, aber im Zentrum langsam: " +
      "Schwarz kann mit ...d5 und ...e5 Raum gewinnen oder mit ...g6 und ...Lg7 die Diagonale " +
      "a1–h8 streitig machen.",
  },

  "1.g3 Nf6 2.f4": {
    strategy:
      "Kontrolliert e5 und steuert eine Bird-Eröffnung mit Lg2, Sf3 und O-O an, das " +
      "Leningrader System der Holländischen Verteidigung mit vertauschten Farben. Der Zug ist " +
      "solide, lockert aber die Königsstellung: Ohne den f-Bauern liegt die Diagonale g1–a7 " +
      "zum rochierten König hin offen, und Schwarz besetzt mit ...d5 und ...c5 das Zentrum.",
  },

  "1.g3 Nf6 2.Nh3": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er den f-Bauern nicht verstellt und nach f4 " +
      "gehen kann, aber kein Zentrumsfeld überwacht. Schwarz besetzt mit ...d5 und ...e5 das " +
      "Zentrum, und Sf3 hätte dieselbe Figur auf ein besseres Feld entwickelt.",
  },

  "1.g3 Nf6 2.Bh3": {
    strategy:
      "Entwickelt den Läufer auf die Diagonale c8–h3, statt ihn zu fianchettieren. Nach ...d5 " +
      "oder ...d6 steht er dem weißfeldrigen Läufer von Schwarz gegenüber, und entweder " +
      "werden die Läufer getauscht, sodass die durch g3 geschwächten weißen Felder ihren " +
      "Verteidiger verlieren, oder Weiß zieht mit Tempoverlust nach g2 zurück.",
  },

  "1.g3 Nf6 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er b5 und c4 ins Auge fasst, aber nichts im " +
      "Zentrum deckt. Schwarz besetzt mit ...d5 das Zentrum, womit er auch c4 überwacht, und " +
      "Sc3 hätte dieselbe Figur wirksamer entwickelt.",
  },

  "1.g3 Nf6 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 vor, doch nichts deckt den Bauern: Nach " +
      "...e6 greift ihn der Läufer f8 an, und Weiß muss ein weiteres Tempo für a3, c3 oder b5 " +
      "aufwenden oder ihn hergeben. Schwarz besetzt unterdessen mit ...d5 das Zentrum.",
  },

  "1.g3 Nf6 2.a3": {
    strategy:
      "Verbraucht ein Tempo für einen Bauernzug am Damenflügel, der b4 vorbereitet, aber " +
      "nichts für das Zentrum oder die Entwicklung tut. Schwarz gewinnt mit ...d5 und ...e5 " +
      "Raum.",
  },

  "1.g3 Nf6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und kontrolliert b5, verbraucht aber ein Tempo für einen " +
      "Randbauernzug, der nichts für das Zentrum oder die Entwicklung tut. Schwarz besetzt " +
      "mit ...d5 und ...e5 das Zentrum und entwickelt sich ungehindert.",
  },

  "1.g3 Nf6 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer g1 das Feld f3, verstellt die lange " +
      "Diagonale, die das Fianchetto nach g3 öffnen sollte, und lockert die Diagonale g1–a7. " +
      "Schwarz besetzt mit ...d5 und ...e5 das Zentrum.",
  },

  "1.g3 Nf6 2.h3": {
    strategy:
      "Ein Wartezug, der ...Sg4 und ...Lg4 verhindert, aber ein Tempo kostet, während Zentrum " +
      "und Entwicklung unberührt bleiben. Schwarz besetzt mit ...d5 und ...e5 das Zentrum, " +
      "ohne dass Weiß dafür etwas vorzuweisen hat.",
  },

  "1.g3 Nf6 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel für h5, verbraucht aber ohne ein ...g6 als Angriffsziel " +
      "ein Tempo für einen Randbauernzug, während Zentrum und Entwicklung warten. Außerdem " +
      "lockert der Zug die Bauern vor dem eigenen König, und Schwarz besetzt mit ...d5 und " +
      "...e5 das Zentrum.",
  },

  "1.g3 Nf6 2.g4": {
    strategy:
      "Stellt einen Bauern ein: Nichts deckt g4, sodass 2...Sxg4 ihn kostenlos gewinnt, und " +
      "der Königsflügel bleibt geschwächt.",
  },

  "1.g3 Nf6 2.e4": {
    strategy:
      "Lässt den e-Bauern ungedeckt: Nach 2...Sxe4 greift 3.Lg2 den Springer an, doch ...d5 " +
      "hält ihn, und Schwarz behält einen sauberen Mehrbauern.",
  },

  "1.g3 Nf6": {
    name: "Königsfianchetto: Indische Verteidigung",
  },
};
