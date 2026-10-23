import type { OpeningTexts } from "../book.ts";

// German prose for Nf3-f5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.Nf3 f5 2.d4": {
    strategy:
      "Besetzt das Zentrum und führt in die Holländische Verteidigung, in die Stellung nach " +
      "1.d4 f5 2.Sf3, in der der Springer bereits e5 kontrolliert und den d-Bauern deckt. " +
      "Weiß behält die Wahl zwischen einem Fianchetto mit g3, c4 mit Sc3 oder Lf4 und e3, " +
      "während Schwarz sich zwischen ...e6 für den Stonewall- oder den klassischen Aufbau und " +
      "...g6 für die Leningrader Variante entscheidet. Der Preis dafür ist, dass Schwarz die " +
      "holländische Struktur bekommt, die er angestrebt hat.",
  },

  "1.Nf3 f5 2.g3": {
    strategy:
      "Bereitet Lg2 und die Rochade vor, während die Zentrumsbauern beweglich bleiben: Ein " +
      "späteres d4 führt in eine Fianchetto-Variante der Holländischen Verteidigung, c4 oder " +
      "d3 mit späterem e4 halten die Partie eigenständig. Der Läufer auf g2 steht zunächst " +
      "hinter dem Springer f3 und wirkt auf e4 und d5, sobald der Springer zieht. Schwarz " +
      "setzt meist mit ...Sf6 und dann ...e6 oder ...g6 fort.",
  },

  "1.Nf3 f5 2.c4": {
    name: "Englische Eröffnung: Anglo-Holländische Verteidigung",
    strategy:
      "Kontrolliert d5 und bereitet Sc3 sowie g3 mit Lg2 vor, sodass Weiß später mit d4 in " +
      "die Holländische Verteidigung einlenken oder ganz ohne d4 spielen kann. Gegen einen " +
      "Stonewall mit ...e6 und ...d5 drückt der Bauer c4 bereits auf d5. Schwarz entwickelt " +
      "sich meist mit ...Sf6 und wählt dann zwischen ...e6 und ...g6.",
  },

  "1.Nf3 f5 2.e4": {
    name: "Zukertort-Eröffnung: Lisitsin-Gambit",
    background:
      "Benannt nach Georgi Lissizyn, der das Gambit 1931 in der ersten Runde der " +
      "UdSSR-Meisterschaft in Moskau gegen Nikolai Rjumin und beim Meisterturnier in " +
      "Leningrad 1933 gegen Michail Botwinnik spielte. Edward Winter nennt frühere Partien " +
      "mit denselben Zügen, deren älteste Alfred Emil Wolf gegen Max Weiss ist, gespielt am " +
      "12. Mai 1923 in Wien. Der Oxford Companion to Chess bezeichnet das Gambit als " +
      "unternehmungslustig und wahrscheinlich korrekt.",
    strategy:
      "Bietet den e-Bauern an, um Linien gegen den geschwächten schwarzen Königsflügel zu " +
      "öffnen. Nach 2...fxe4 3.Sg5 hat Weiß den Springer zweimal gezogen, doch auf g5 greift " +
      "er e4 an und ist schwer zu vertreiben, und 4.d3 öffnet weitere Linien. Schwarz kann " +
      "mit 2...e5 ablehnen, was ins Lettische Gambit überleitet.",
  },

  "1.Nf3 f5 2.b3": {
    name: "Larsen-Eröffnung: Holländische Variante",
    strategy:
      "Bereitet Lb2 vor, der die lange Diagonale bis g7 ins Visier nimmt, und hält c4, e3 und " +
      "g3 offen. Der Zug ist gesund und flexibel, aber langsamer als 2.d4, 2.g3 oder 2.c4, " +
      "und Schwarz baut ungestört mit ...Sf6 und ...e6 die übliche holländische Struktur auf.",
  },

  "1.Nf3 f5 2.d3": {
    strategy:
      "Bereitet e4 einen Zug später als im Gambit 2.e4 vor, sodass der d-Bauer zurückschlagen " +
      "kann, falls Schwarz dort schlägt, und macht den Läufer c1 frei. Der Zug ist gesund, " +
      "aber langsam, und Schwarz antwortet oft mit 2...d6 oder entwickelt sich mit ...Sf6 und " +
      "...e6.",
  },

  "1.Nf3 f5 2.e3": {
    strategy:
      "Öffnet dem Läufer f1 den Weg nach e2 oder d3 und stützt ein späteres d4, ein solider " +
      "Aufbau gegen die Holländische Verteidigung. Der Zug ist gesund, aber passiv: Der Bauer " +
      "e3 verstellt die Diagonale des Läufers c1 zum Königsflügel, sodass dieser Läufer meist " +
      "b3 und Lb2 braucht, und Schwarz entwickelt sich ungestört mit ...Sf6 und ...e6.",
  },

  "1.Nf3 f5 2.Nc3": {
    strategy:
      "Entwickelt den zweiten Springer und überwacht e4 und d5; er bereitet d4 oder e4 vor, " +
      "ohne schon einen Bauern festzulegen. Nach ...Sf6 und ...e6 kann Weiß mit d4 und der " +
      "Fesselung Lg5 fortsetzen und so holländische Strukturen erreichen. Der Zug ist gesund, " +
      "verstellt aber den c-Bauern, und das schlichte 2.d4 erreicht dieselben Ideen mit mehr " +
      "Auswahl.",
  },

  "1.Nf3 f5 2.a3": {
    strategy:
      "Ein Wartezug, der b4 vorbereitet, aber weder für das Zentrum noch für die Entwicklung " +
      "etwas tut. Schwarz entwickelt sich ungestört mit ...Sf6 und ...e6, während Weiß ein " +
      "Tempo für einen Randbauernzug verbraucht hat.",
  },

  "1.Nf3 f5 2.a4": {
    strategy:
      "Ein langsamer Randbauernzug, der weder eine Figur entwickelt noch um das Zentrum " +
      "kämpft. Er schwächt b4 und gibt Schwarz Zeit, ungestört ...Sf6, ...e6 und ...Le7 zu " +
      "spielen.",
  },

  "1.Nf3 f5 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 auf der langen Diagonale vor, doch der " +
      "Bauer b4 braucht a3 oder c3 gegen ...e6 und ...Lxb4, und das Zentrum bleibt Schwarz " +
      "überlassen. Für das Tempo wird wenig gewonnen, und der Damenflügel ist überdehnt.",
  },

  "1.Nf3 f5 2.c3": {
    strategy:
      "Eine langsame Vorbereitung von d4, die dem Springer b1 das Feld c3 nimmt und nichts " +
      "für den Kampf um e4 tut. Schwarz antwortet mit ...Sf6 und ...e6 und behält e4 unter " +
      "Kontrolle.",
  },

  "1.Nf3 f5 2.h3": {
    strategy:
      "Bereitet g4 vor, um den Bauern f5 zu untergraben, doch der Plan kostet Zeit und " +
      "schwächt den Königsflügel, auf den der weiße König gewöhnlich rochiert. Schwarz " +
      "entwickelt sich einfach mit ...Sf6 und ...e6.",
  },

  "1.Nf3 f5 2.h4": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern, der weder für das Zentrum noch für die " +
      "Entwicklung etwas tut. Der Zug schwächt g4 und den Königsflügel, und Schwarz setzt in " +
      "aller Ruhe mit ...Sf6 und ...e6 fort.",
  },

  "1.Nf3 f5 2.Na3": {
    strategy:
      "Ein Randspringer, der nach c4 oder b5 blickt, aber im Zentrum nichts deckt und den " +
      "a-Bauern blockiert. Schwarz entwickelt sich natürlich mit ...Sf6 und ...e6.",
  },

  "1.Nf3 f5 2.Rg1": {
    strategy:
      "Bereitet g4 gegen den Bauern f5 vor, doch Weiß gibt das Recht zur kurzen Rochade auf " +
      "und verwendet ein Tempo auf den Turm, statt Figuren zu entwickeln. Schwarz setzt " +
      "einfach mit ...Sf6 und ...e6 fort.",
  },

  "1.Nf3 f5 2.Ng5": {
    strategy:
      "Zieht den bereits entwickelten Springer erneut und lädt zu ...h6 oder zu ...e5 ein, " +
      "das die Diagonale der Dame nach g5 öffnet, jeweils mit Tempogewinn. Der Springer muss " +
      "bald nach f3 zurück oder an den Rand nach h3, während Schwarz das Zentrum aufbaut.",
  },

  "1.Nf3 f5 2.Nh4": {
    strategy:
      "Greift den ungedeckten Bauern f5 an, doch 2...e6 deckt ihn und öffnet die Diagonale " +
      "der Dame nach h4, sodass der Springer nach f3 zurück muss oder mit g3 gestützt wird. " +
      "So oder so hat Weiß zusätzliche Züge mit einer Figur verbraucht, während Schwarz sich " +
      "entwickelt.",
  },

  "1.Nf3 f5 2.Ne5": {
    strategy:
      "Stellt den Springer auf ein Zentrumsfeld, doch 2...d6 vertreibt ihn mit Tempogewinn. " +
      "Er muss nach f3, d3 oder c4 zurück, der dritte Zug mit derselben Figur, während " +
      "Schwarz sich entwickelt.",
  },

  "1.Nf3 f5 2.Nd4": {
    strategy:
      "Greift den ungedeckten Bauern f5 an, doch 2...e6 deckt ihn ohne Kosten, und danach " +
      "wird der Springer zur Zielscheibe von ...c5. Weiß hat zwei Züge mit derselben Figur " +
      "verbraucht, und Schwarz gewinnt Zeit.",
  },

  "1.Nf3 f5 2.Ng1": {
    strategy:
      "Zieht den Springer auf sein Ausgangsfeld zurück und macht so den ersten Zug " +
      "rückgängig. Schwarz hat ...f5 umsonst und baut sofort mit ...Sf6, ...e6 und ...d5 das " +
      "Zentrum gegen eine unentwickelte Stellung auf.",
  },

  "1.Nf3 f5 2.g4": {
    strategy:
      "Bietet einen Bauern an, doch 2...fxg4 greift den Springer f3 an, der wegziehen muss, " +
      "und Weiß hat keine dauerhafte Kompensation für den Bauern. Der Königsflügel ist für " +
      "immer geschwächt, und keine neue Figur kommt ins Spiel.",
  },

  "1.Nf3 f5": {
    name: "Zukertort-Eröffnung: Holländische Variante",
    background:
      "1...f5 ist der Zug der Holländischen Verteidigung (1.d4 f5), die Elias Stein, ein " +
      "Elsässer, der sich in Den Haag niedergelassen hatte, in seinem Buch „Nouvel essai sur " +
      "le Jeu des échecs“ von 1789 als beste Antwort auf 1.d4 empfahl.",
  },
};
