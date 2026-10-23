import type { OpeningTexts } from "../book.ts";

// German prose for c4-e6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.c4 e6 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer und deckt d4 und e5, ohne einen Bauern festzulegen. Nach " +
      "2...d5 kann Weiß mit 3.d4 ins Abgelehnte Damengambit oder mit 3.g3 Sf6 4.Lg2 in den " +
      "neokatalanischen Aufbau gehen, während 2...Sf6 zu anglo-indischen Linien führt. " +
      "Schwarz bestimmt die Struktur weiterhin mit 2...d5, 2...c5 oder 2...Sf6.",
  },

  "1.c4 e6 2.Nc3": {
    strategy:
      "Entwickelt den Damenspringer zum Zentrum hin, verstärkt die Kontrolle über d5 und e4 " +
      "und hält d4, e4 und g3 als Fortsetzungen offen. Nach 2...d5 erreicht Weiß mit 3.d4 ein " +
      "Abgelehntes Damengambit oder mit 3.cxd5 exd5 4.d4 dessen Abtauschstruktur, während " +
      "2...Sf6 zu anglo-indischen Aufbauten führt. Schwarz kann auch 2...Lb4 spielen, um auf " +
      "c3 zu schlagen und Weiß einen Doppelbauern auf der c-Linie zu geben.",
  },

  "1.c4 e6 2.d4": {
    strategy:
      "Besetzt sofort das Zentrum: Zusammen mit dem Bauern c4 kontrolliert der Bauer d4 die " +
      "Felder c5, d5 und e5. Nach 2...d5 entsteht das Abgelehnte Damengambit, und 2...Sf6 " +
      "steuert die Nimzo-Indische, Damenindische oder Bogo-Indische Verteidigung an. Schwarz " +
      "kann auch mit 2...f5 Holländisch, mit 2...b6 die Englische Verteidigung oder mit " +
      "2...Lb4+ die Keres-Verteidigung wählen, die meist mit 3.Ld2 beantwortet wird.",
  },

  "1.c4 e6 2.g3": {
    strategy:
      "Bereitet Lg2 vor, der auf der langen Diagonale Druck auf d5 und b7 ausübt. Nach 2...d5 " +
      "3.Lg2 Sf6 4.Sf3 entsteht die neokatalanische Stellung, und ein späteres d4 macht " +
      "daraus eine Katalanische Eröffnung; auch Sc3 bleibt möglich. Allerdings kommt der " +
      "Königsflügel zuerst: 2...d5 greift sofort den ungedeckten Bauern c4 an, und Schwarz " +
      "kann auch mit 2...c5 vorgehen.",
  },

  "1.c4 e6 2.e4": {
    strategy:
      "Besetzt das Zentrum mit dem c- und dem e-Bauern und leitet in eine Französische " +
      "Verteidigung über, in der Weiß c4 statt d4 gespielt hat. Die Antwort 2...d5 greift " +
      "beide Bauern an, und nach 3.exd5 exd5 4.cxd5 Dxd5 5.Sc3 gewinnt Weiß Zeit gegen die " +
      "Dame, behält aber einen isolierten Bauern d2. Solide, gibt aber den Charakter der " +
      "Englischen Eröffnung auf.",
  },

  "1.c4 e6 2.b3": {
    strategy:
      "Bereitet Lb2 auf der langen Diagonale in Richtung g7 vor und deckt den Bauern c4 gegen " +
      "2...d5. Sf3, e3 oder g3 können in einem flexiblen Aufbau folgen, während Schwarz sich " +
      "mit ...d5, ...Sf6 und ...Le7 oder ...c5 frei entwickelt. Solide, aber langsamer als " +
      "2.Sf3 oder 2.Sc3.",
  },

  "1.c4 e6 2.d3": {
    strategy:
      "Deckt den Bauern c4, unterstützt ein späteres e4 und gibt dem Läufer c1 den Weg frei, " +
      "womit ein Aufbau mit Sc3, g3, Lg2 und e4 vorbereitet wird. Der Bauer d3 steht jedoch " +
      "bescheiden: Er nimmt nicht am Kampf um d5 und d4 teil, und Schwarz gewinnt mit 2...d5 " +
      "Raum oder entwickelt sich frei mit ...Sf6 und ...c5. Solide, aber passiver als 2.d4.",
  },

  "1.c4 e6 2.e3": {
    strategy:
      "Öffnet die Diagonale des Läufers f1, der damit auch c4 deckt, und bereitet Sc3, Sf3 " +
      "und d4 in einem kompakten Aufbau vor, der in ein ruhiges Abgelehntes Damengambit " +
      "übergehen kann. Der Zug sperrt den Läufer c1 bis zu b3 und Lb2 ein, und nach 2...d5 " +
      "3.cxd5 exd5 ist der Läufer c8 frei und Schwarz hat ein bequemes Spiel. Solide, aber " +
      "passiv.",
  },

  "1.c4 e6 2.a3": {
    strategy:
      "Verhindert ...Lb4 und bereitet b4 vor, entwickelt aber nichts und kostet ein Tempo. " +
      "Schwarz besetzt mit ...d5 und ...Sf6 das Zentrum, während die weißen Figuren noch zu " +
      "Hause stehen.",
  },

  "1.c4 e6 2.a4": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel, hinterlässt aber auf b4 ein dauerhaftes Loch, da " +
      "weder der a- noch der c-Bauer dieses Feld noch decken kann. Der Zug entwickelt nichts, " +
      "und Schwarz besetzt mit ...d5 und ...Sf6 das Zentrum.",
  },

  "1.c4 e6 2.f4": {
    strategy:
      "Kontrolliert e5, entwickelt aber keine Figur und öffnet die Diagonale e1–h4, sodass " +
      "2...Dh4+ sofort 3.g3 erzwingt. Der weiße Königsflügel ist geschwächt, bevor eine Figur " +
      "entwickelt ist, und Schwarz setzt frei mit ...d5 oder ...Sf6 fort.",
  },

  "1.c4 e6 2.g4": {
    strategy:
      "Gewinnt Raum am Königsflügel, lässt den Bauern aber locker: 2...Dh4 greift ihn sofort " +
      "an und fesselt den Bauern f2, sodass Weiß einen weiteren Zug wie 3.h3 aufwenden muss, " +
      "um ihn zu halten. Der Königsflügel ist geschwächt, bevor sich auch nur eine Figur " +
      "entwickelt hat.",
  },

  "1.c4 e6 2.h3": {
    strategy:
      "Ein Wartezug, der weder für das Zentrum noch für die Entwicklung etwas tut. Schwarz " +
      "spielt ...d5 und ...Sf6, während die weißen Figuren noch zu Hause stehen.",
  },

  "1.c4 e6 2.h4": {
    strategy:
      "Ein Flankenvorstoß, der weder für das Zentrum noch für die Entwicklung etwas tut und " +
      "den Königsflügel ohne Ziel lockert. Weiß hat ein Tempo verloren, und Schwarz erhält " +
      "mit ...d5 ein bequemes Spiel.",
  },

  "1.c4 e6 2.Na3": {
    strategy:
      "Deckt vom Rand aus c4 und strebt nach c2 oder b5, steht aber weit vom Zentrum " +
      "entfernt. Schwarz kann sofort ...d5 spielen oder mit 2...Lxa3 3.bxa3 schlagen, was die " +
      "weißen a-Bauern verdoppelt und isoliert, Weiß aber das Läuferpaar überlässt.",
  },

  "1.c4 e6 2.Nh3": {
    strategy:
      "Ein Randspringer auf dem Weg nach f4, der das natürliche Feld f3 ungenutzt lässt. Nach " +
      "2...d5 3.cxd5 exd5 zielt der Läufer c8 auf h3, und ...Lxh3 gxh3 ließe Weiß mit " +
      "isolierten Doppelbauern auf der h-Linie zurück.",
  },

  "1.c4 e6 2.Qc2": {
    strategy:
      "Deckt c4 und unterstützt e4, bringt die Dame aber vor den Leichtfiguren heraus. " +
      "Schwarz besetzt mit ...d5 das Zentrum oder gewinnt mit ...Sc6 und ...Sb4 Zeit, und " +
      "Weiß hat für den frühen Damenzug wenig vorzuweisen.",
  },

  "1.c4 e6 2.Qb3": {
    strategy:
      "Zielt auf b7, das der Läufer c8 bereits deckt, sodass keine Drohung besteht. Schwarz " +
      "entwickelt sich mit ...Sc6 oder gewinnt mit ...d5 Raum, während die früh ausgezogene " +
      "Dame keine gute Fortsetzung hat.",
  },

  "1.c4 e6 2.Qa4": {
    strategy:
      "Bringt die Dame auf die Diagonale a4–e8, wo sie nichts droht, da d7 gedeckt ist. " +
      "Schwarz entwickelt sich mit ...Sf6 und ...Sc6 und setzt mit ...d5 fort, während die " +
      "Dame auf a4 abseits steht.",
  },

  "1.c4 e6 2.b4": {
    strategy:
      "Lässt den Bauern auf der offenen Diagonale f8–a3 ungedeckt, und 2...Lxb4 gewinnt ihn " +
      "sofort. Weiß erhält dafür nur die halboffene b-Linie und ein schnelles Lb2.",
  },

  "1.c4 e6 2.f3": {
    strategy:
      "Öffnet die Diagonale e1–h4 und verliert einen Bauern: 2...Dh4+ erzwingt 3.g3, da der " +
      "König weder nach d2 noch nach f2 ausweichen kann, und 3...Dxc4 schlägt den ungedeckten " +
      "c-Bauern. Zudem nimmt der Zug dem Springer g1 das Feld f3.",
  },

  "1.c4 e6 2.c5": {
    strategy:
      "Gewinnt Raum, lässt den Bauern aber ungedeckt: 2...Lxc5 gewinnt ihn sofort, da ...e6 " +
      "die Diagonale des Läufers f8 geöffnet hat. 3.d4 gewinnt ein Tempo gegen den Läufer, " +
      "doch Weiß hat schlicht einen Bauern weniger.",
  },

  "1.c4 e6": {
    name: "Englische Eröffnung: Agincourt-Verteidigung",
  },
};
