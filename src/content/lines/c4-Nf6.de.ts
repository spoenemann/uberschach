import type { OpeningTexts } from "../book.ts";

// German prose for c4-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.c4 Nf6 2.Nc3": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung, Damenspringer-Variante",
    background:
      "Auf 2...d5 kann Weiß mit 3.cxd5 Sxd5 4.g3 antworten, sodass Schwarz keine " +
      "Grünfeld-Verteidigung erzwingen kann; Michail Botwinnik spielte diese Variante 1958 " +
      "mehrfach in seinem Weltmeisterschaftskampf gegen Wassili Smyslow.",
    strategy:
      "Entwickelt den Springer Richtung Zentrum, wo er d5 und e4 kontrolliert, und hält e4, " +
      "g3 und d4 offen. Gegen ...e6 oder ...g6 kann Weiß mit e4 das Zentrum besetzen, mit g3 " +
      "und Lg2 den üblichen englischen Aufbau wählen oder mit d4 in eine indische Struktur " +
      "übergehen. Der Preis ist, dass d4 nun nach ...e6 und ...Lb4 die Nimzo-Indische " +
      "Verteidigung zulässt, und Schwarz kann mit ...d5 oder ...e5 sofort um das Zentrum " +
      "kämpfen.",
  },

  "1.c4 Nf6 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer, überwacht d4 und e5 und lässt die Wahl zwischen d4, g3 " +
      "und Sc3 offen, bis der schwarze Aufbau feststeht. Gegen ...e6 und ...b6 steuert er " +
      "eine damenindische Struktur an, gegen ...g6 einen Fianchetto-Aufbau, und d4 macht " +
      "daraus ein Damengambit oder eine indische Partie. Der Zug legt sich wenig fest, lässt " +
      "Schwarz aber die freie Wahl des Verteidigungssystems.",
  },

  "1.c4 Nf6 2.d4": {
    strategy:
      "Besetzt das Zentrum mit einem Bauern und führt zur Stellung nach 1.d4 Sf6 2.c4 mit " +
      "Schwarz am Zug. Schwarz wählt zwischen ...e6 für Damengambit, Damenindisch oder " +
      "Nimzo-Indisch, ...g6 für königsindische und Grünfeld-Strukturen und ...c5 für eine " +
      "Partie vom Benoni-Typ. Weiß erhält das klassische Bauernpaar c4 und d4 und mehr Raum, " +
      "muss aber auf jede dieser Verteidigungen vorbereitet sein, die Schwarz wählt.",
  },

  "1.c4 Nf6 2.g3": {
    strategy:
      "Bereitet Lg2 vor, der auf d5 und entlang der langen Diagonale bis b7 wirkt, und hält " +
      "Sc3, Sf3 und d4 in Reserve. Gegen ...e6 und ...d5 entstehen mit Sf3 Stellungen nach " +
      "Art der Katalanischen Eröffnung, gegen ...g6 ein symmetrisches Fianchetto und gegen " +
      "...e5 mit Sc3 Sizilianisch im Anzuge. Der Preis ist, dass das weiße Zentrum unbesetzt " +
      "bleibt und Schwarz den Bauern c4 sofort mit ...c6 und ...d5 angreifen kann.",
  },

  "1.c4 Nf6 2.e3": {
    strategy:
      "Öffnet den Läufer f1 und unterstützt d4, mit Damengambit- oder " +
      "Nimzo-Indisch-Strukturen nach Sc3 und d4 oder mit b3 und Lb2 als Ziel. Der Zug ist " +
      "solide, aber langsam, und legt den e-Bauern fest, bevor der schwarze Aufbau bekannt " +
      "ist; Schwarz kann mit ...e5 oder ...d5 Raum gewinnen und sich frei entwickeln.",
  },

  "1.c4 Nf6 2.b3": {
    strategy:
      "Bereitet Lb2 vor, der auf e5 und die lange Diagonale wirkt, stützt den Bauern c4 und " +
      "hält e3, Sf3 und d4 offen. Der Zug ist solide, aber langsam: Das Zentrum bleibt " +
      "unbesetzt, und Schwarz kann es mit ...e5 oder ...d5 besetzen oder mit ...g6 die " +
      "Diagonale streitig machen.",
  },

  "1.c4 Nf6 2.d3": {
    strategy:
      "Unterstützt ein späteres e4 und öffnet den Läufer c1, mit g3, Lg2 und Sc3 als " +
      "Fortsetzung. Der Zug ist solide, aber bescheiden: d4 kostet nun ein zusätzliches " +
      "Tempo, sodass Schwarz mit ...e5 oder ...d5 das Zentrum besetzen und sich frei " +
      "entwickeln kann.",
  },

  "1.c4 Nf6 2.Qc2": {
    strategy:
      "Deckt den Bauern c4 und bereitet e4 vor, entwickelt aber keine Leichtfigur und stellt " +
      "die Dame dorthin, wo ...Sc6 nebst ...Sb4 sie mit Tempogewinn angreifen kann. Schwarz " +
      "besetzt mit ...e5 oder ...d5 das Zentrum, während Weiß noch nicht bereit ist.",
  },

  "1.c4 Nf6 2.Qb3": {
    strategy:
      "Zielt auf b7 und deckt den Bauern c4, doch der Läufer c8 deckt b7 bereits, und keine " +
      "Leichtfigur wird entwickelt. ...Sc6 nebst ...Sa5 greift dann Dame und Bauern c4 mit " +
      "Tempogewinn an, und Schwarz besetzt das Zentrum, während Weiß umgruppiert.",
  },

  "1.c4 Nf6 2.Qa4": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel und droht nichts, da der Turm a7 " +
      "deckt. Die Dame fesselt den Bauern d7 vorübergehend, doch ...c6 hebt die Fesselung auf " +
      "und bereitet ...d5 vor, und Schwarz entwickelt sich frei, während die Dame am Rand " +
      "steht.",
  },

  "1.c4 Nf6 2.Na3": {
    strategy:
      "Deckt den Bauern c4 und kann weiter nach c2 oder b5, doch auf a3 kontrolliert der " +
      "Springer kein Zentrumsfeld. Schwarz besetzt unterdessen mit ...e5 oder ...d5 das " +
      "Zentrum.",
  },

  "1.c4 Nf6 2.Nh3": {
    strategy:
      "Entwickelt den Springer am Rand auf dem Weg nach f4 und lässt das Zentrum unberührt. " +
      "Sobald Schwarz den d-Bauern gezogen hat, kann ...Lxh3 die weißen h-Bauern verdoppeln, " +
      "und f3 wäre das natürliche Feld für den Springer gewesen.",
  },

  "1.c4 Nf6 2.a3": {
    strategy:
      "Nimmt den schwarzen Figuren das Feld b4 und bereitet b4 vor, verbraucht aber ein " +
      "Tempo, ohne etwas zu entwickeln oder das Zentrum zu berühren. Schwarz gewinnt mit " +
      "...e5 oder ...d5 Raum.",
  },

  "1.c4 Nf6 2.a4": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel, entwickelt aber nichts und gibt das Feld b4 " +
      "endgültig auf, auf dem sich ein schwarzer Springer oder Läufer festsetzen kann. " +
      "Schwarz besetzt unterdessen mit ...e5 oder ...d5 das Zentrum.",
  },

  "1.c4 Nf6 2.b4": {
    name: "Englischer Orang-Utan",
    strategy:
      "Rückt den b-Bauern auf ein Feld vor, auf dem ihn nichts deckt: Nach ...e6 oder ...e5 " +
      "greift ihn der Läufer f8 an, und Weiß muss ein weiteres Tempo für a3, Db3 oder b5 " +
      "aufwenden oder ihn aufgeben. Die Entwicklung bleibt zurück, während Schwarz das " +
      "Zentrum besetzt.",
  },

  "1.c4 Nf6 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer das Feld f3, schwächt die Diagonale e1-h4 und " +
      "entwickelt nichts. Schwarz entwickelt sich frei und besetzt mit ...e5 oder ...d5 das " +
      "Zentrum.",
  },

  "1.c4 Nf6 2.f4": {
    name: "Bird-Eröffnung: Mujannah",
    strategy:
      "Gewinnt Raum am Königsflügel und kontrolliert e5, öffnet aber die Diagonale e1-h4 zum " +
      "König und entwickelt nichts. Schwarz entwickelt sich natürlich mit ...d5, ...g6 oder " +
      "...d6 und ...e5.",
  },

  "1.c4 Nf6 2.h3": {
    strategy:
      "Verhindert ...Sg4 und ...Lg4, ist aber ein langsamer Wartezug, der nichts entwickelt. " +
      "Schwarz besetzt mit ...e5 oder ...d5 das Zentrum.",
  },

  "1.c4 Nf6 2.h4": {
    strategy:
      "Verbraucht ein Tempo am Brettrand, schwächt das Feld g3, entwickelt keine Figur und " +
      "tut nichts für das Zentrum. Schwarz gewinnt mit ...e5 oder ...d5 Raum.",
  },

  "1.c4 Nf6 2.c5": {
    strategy:
      "Gewinnt Raum, zieht aber denselben Bauern zweimal und gibt die Kontrolle über d5 auf. " +
      "Der Bauer c5 ist ungedeckt: ...e6 oder ...e5 öffnet den Läufer f8 gegen ihn, und ...b6 " +
      "untergräbt ihn, während Weiß nichts entwickelt hat.",
  },

  "1.c4 Nf6 2.g4": {
    strategy:
      "Stellt einen Bauern ein: 2...Sxg4 gewinnt ihn sofort, da nichts g4 deckt, und h3 " +
      "treibt den Springer nur auf ein gutes Feld wie e5. Der Königsflügel ist geschwächt, " +
      "ohne dass Weiß dafür einen Entwicklungsvorsprung erhält.",
  },

  "1.c4 Nf6 2.e4": {
    strategy:
      "Bietet den e-Bauern an: Schwarz gewinnt mit 2...Sxe4 einfach einen Bauern, und " +
      "schnelle Entwicklung wie Sc3 oder De2 holt ihn nicht zurück, da der Springer sich nach " +
      "f6 oder c5 zurückziehen kann.",
  },

  "1.c4 Nf6": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung",
    background:
      "Die häufigste Antwort auf 1.c4; die Encyclopaedia of Chess Openings ordnet ihre " +
      "eigenständigen Abspiele unter A15–A19 ein.",
  },
};
