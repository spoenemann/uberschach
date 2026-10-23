import type { OpeningTexts } from "../book.ts";

// German prose for b3-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.b3 c5 2.Bb2": {
    strategy:
      "Stellt den Läufer auf die lange Diagonale, wo er auf das Zentrum und g7 zielt. Weiß " +
      "behält die Wahl des Plans: e4 für eine Sizilianische Verteidigung mit bereits " +
      "gespieltem b3, c4 für die Symmetrische Variante der Englischen Eröffnung oder den " +
      "ruhigen Aufbau mit e3, Sf3, Le2 und O-O. Schwarz antwortet meist mit 2...Sc6, worauf " +
      "gewöhnlich 3.e3 oder 3.Sf3 folgt.",
  },

  "1.b3 c5 2.e3": {
    strategy:
      "Öffnet die Diagonale des Läufers f1 und stützt ein späteres d4 oder f4, während Lb2 " +
      "noch folgt. Sobald der Läufer dort steht, geht die Partie in die Linien mit 2.Lb2 " +
      "über, mit Sf3, Le2, O-O und d3 oder Sbd2 als Fortsetzung. Der Bauer legt sich fest, " +
      "bevor Schwarz gezeigt hat, ob ...e5, ...d5 oder ...Sf6 kommt, doch Weiß gibt nichts " +
      "preis.",
  },

  "1.b3 c5 2.c4": {
    strategy:
      "Führt in die Symmetrische Variante der Englischen Eröffnung mit bereits gespieltem b3: " +
      "Der Bauer c4 kontrolliert d5 und b5, und Lb2, Sc3 sowie g3 mit Lg2 können folgen. Der " +
      "Zug ist korrekt, aber langsam und erlaubt Schwarz, dem Lb2 mit ...Sc6 und ...e5 die " +
      "Diagonale zu verstellen oder sie ihm mit ...g6 und ...Lg7 streitig zu machen.",
  },

  "1.b3 c5 2.e4": {
    strategy:
      "Gewinnt Raum im Zentrum und führt zu einer Sizilianischen Verteidigung, in der Weiß " +
      "bereits b3 gespielt hat; Lb2 folgt auf der langen Diagonale. Korrekt, doch b3 ist in " +
      "dieser Struktur langsam: Schwarz entwickelt sich bequem mit ...Sc6, ...e6 und ...d5, " +
      "und der Springer c6 deckt d4 und e5 auf der Diagonale des Läufers.",
  },

  "1.b3 c5 2.g3": {
    strategy:
      "Bereitet Lg2 als Gegenstück zu Lb2 vor: Im Doppelfianchetto wirken beide Läufer von " +
      "den Flügeln auf das Zentrum, und es folgen Sf3, O-O und d3 oder c4. Korrekt, doch ohne " +
      "Zentrumsbauern und ohne entwickelten Springer lässt Weiß Schwarz mit ...Sc6, ...e5 " +
      "oder ...d5 Raum gewinnen.",
  },

  "1.b3 c5 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer mit Blick auf d4 und e5 und hält Lb2, e3, g3 und c4 " +
      "offen. Der Zug ist korrekt, doch der Springer verstellt den f-Bauern und verzichtet " +
      "auf ein frühes f4, und Schwarz kann frei zwischen ...Sc6, ...e6 und ...d5 wählen.",
  },

  "1.b3 c5 2.d3": {
    strategy:
      "Bereitet e4 vor und strebt einen Aufbau mit Lb2, Sf3 oder Sd2, g3 und Lg2 nach Art des " +
      "Königsindischen Angriffs an. Der Zug ist korrekt, aber passiv und gibt Schwarz Zeit, " +
      "mit ...Sc6, ...e5 und ...d5 das Zentrum zu besetzen.",
  },

  "1.b3 c5 2.f4": {
    strategy:
      "Nimmt e5 unter Kontrolle und strebt einen Aufbau wie in der Bird-Eröffnung mit Lb2, " +
      "Sf3 und e3 an, in dem Bauer und Läufer gemeinsam auf e5 wirken. Der Zug ist korrekt, " +
      "öffnet aber die Diagonale e1-h4 zum König hin, und Schwarz kann mit ...Sc6, ...Sf6 und " +
      "...d5 zuerst das Zentrum besetzen.",
  },

  "1.b3 c5 2.d4": {
    strategy:
      "Nach 2...cxd4 kann Weiß nur mit der Dame zurückschlagen, und 3.Dxd4 Sc6 greift sie mit " +
      "Tempo an. Ein Zentrumsbauer wird gegen den schwarzen Flügelbauern getauscht, und Weiß " +
      "verliert Zeit, während Schwarz sich entwickelt.",
  },

  "1.b3 c5 2.c3": {
    strategy:
      "Bereitet d4 vor, doch der Bauer steht auf der langen Diagonale und verstellt den " +
      "Läufer, den b3 auf b2 aktivieren sollte. Schwarz entwickelt sich ungehindert mit " +
      "...Sc6, ...Sf6 und ...d5.",
  },

  "1.b3 c5 2.Nc3": {
    strategy:
      "Stellt den Springer auf die Diagonale, die der Bauer b3 für Lb2 öffnen sollte. Nach " +
      "2...d5 kann der Springer nicht schlagen (3.Sxd5 Dxd5 kostet eine Figur für einen " +
      "Bauern), und 3.Lb2 d4 greift ihn mit Tempo an, sodass Schwarz Raum und Zeit gewinnt.",
  },

  "1.b3 c5 2.a3": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauernzug, der nichts entwickelt und nicht um das " +
      "Zentrum kämpft. Schwarz nimmt ungehindert mit ...Sc6, ...e5 oder ...d5 Raum.",
  },

  "1.b3 c5 2.a4": {
    strategy:
      "Zieht den Randbauern vor, ohne eine Figur zu entwickeln, und der a-Bauer kann b4 nicht " +
      "mehr decken, wo sich ein schwarzer Springer über ...Sc6 festsetzen kann, gestützt vom " +
      "Bauern c5. Schwarz entwickelt sich und kämpft zuerst um das Zentrum.",
  },

  "1.b3 c5 2.f3": {
    strategy:
      "Nimmt dem Königsspringer das Feld f3, öffnet die Diagonale e1-h4 zum König hin und " +
      "entwickelt nichts. Das folgende e4 ist langsam, und Schwarz besetzt mit ...Sc6 und " +
      "...d5 oder ...e5 das Zentrum.",
  },

  "1.b3 c5 2.h3": {
    strategy:
      "Ein Wartezug am Königsflügel, der nichts entwickelt und nicht um das Zentrum kämpft. " +
      "Er nimmt einer schwarzen Figur das Feld g4, doch Schwarz hat dafür noch keine " +
      "Verwendung und besetzt mit ...Sc6, ...e5 oder ...d5 das Zentrum.",
  },

  "1.b3 c5 2.h4": {
    strategy:
      "Zieht den Randbauern vor, ohne eine Figur zu entwickeln oder um das Zentrum zu " +
      "kämpfen, und der h-Bauer kann g4 nicht mehr decken. Schwarz entwickelt sich in Ruhe " +
      "mit ...Sc6, ...Sf6 und ...d5.",
  },

  "1.b3 c5 2.Na3": {
    strategy:
      "Stellt den Springer an den Rand, wo er b5 und c4 im Blick hat, aber weit vom Zentrum " +
      "und vom Königsflügel entfernt steht. Schwarz besetzt mit ...Sc6, ...e5 oder ...d5 das " +
      "Zentrum, und der Springer braucht einen weiteren Zug, um nützlich zu werden.",
  },

  "1.b3 c5 2.Ba3": {
    strategy:
      "Greift sofort c5 an, doch Schwarz deckt mit ...e6 (dann schützt der Läufer f8 den " +
      "Bauern: 3.Lxc5 Lxc5), ...b6 oder ...d6. Der Läufer steht danach auf a3, abseits der " +
      "langen Diagonale, und hat wenig erreicht.",
  },

  "1.b3 c5 2.Nh3": {
    strategy:
      "Stellt den Springer an den Rand, um f4 oder g5 zu erreichen, doch nach ...d5 oder " +
      "...d6 kann Schwarz ...Lxh3 spielen, und nach gxh3 hat Weiß einen Doppelbauern auf der " +
      "h-Linie. Sf3 ist das natürliche Feld.",
  },

  "1.b3 c5 2.g4": {
    strategy:
      "Zieht den g-Bauern ohne Unterstützung vor: 2...Sf6 oder 2...d5 greift ihn an, und Weiß " +
      "muss einen weiteren Zug für h3, f3, Lh3 oder g5 aufwenden. Der Königsflügel ist " +
      "gelockert, bevor eine Figur entwickelt ist.",
  },

  "1.b3 c5 2.b4": {
    strategy:
      "Zieht den b-Bauern ein zweites Mal, nur um ihn herzugeben: 2...cxb4 gewinnt ihn, und " +
      "nach 3.Lb2 Sf6 verstellt der Springer die lange Diagonale, sodass Weiß keine " +
      "Kompensation für den Bauern hat.",
  },

  "1.b3 c5": {
    name: "Larsen-Eröffnung: Englische Variante",
  },
};
