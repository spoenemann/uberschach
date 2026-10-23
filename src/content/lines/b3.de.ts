import type { OpeningTexts } from "../book.ts";

// German prose for b3.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.b3 e5": {
    strategy:
      "Besetzt sofort das Zentrum und versperrt die lange Diagonale. Greift 2.Lb2 den Bauern " +
      "an, antwortet Schwarz meist mit ...Sc6, oft gefolgt von ...d5 für ein breites " +
      "Bauernzentrum; ...d6 ist ein zaghafterer Weg, e5 zu halten. Weiß greift das Zentrum " +
      "dann mit e3, Lb5 und f4 an, wobei der Läufer den Springer fesselt, der e5 deckt, oder " +
      "spielt c4 und erreicht Sizilianisch im Anzuge.",
  },

  "1.b3 d5": {
    strategy:
      "Nimmt Raum im Zentrum und verhindert, dass Weiß ohne Weiteres e4 spielt. Nach 2.Lb2 " +
      "kann Schwarz mit ...c5 und ...Sc6 ein breites Zentrum errichten, worauf e3, Sf3 und " +
      "Lb5 zu einer Nimzo-Indischen Verteidigung mit vertauschten Farben führen, oder nach " +
      "Art des Londoner Systems mit ...Lf5 und ...e6 entwickeln. Schwarz muss nur die lange " +
      "Diagonale im Auge behalten: ...g6 darf erst nach ...Sf6 kommen, sonst schlägt Lb2 den " +
      "Turm auf h8.",
  },

  "1.b3 Nf6": {
    strategy:
      "Entwickelt eine Figur, nimmt e4 und d5 ins Visier und lässt offen, welcher " +
      "Zentrumsbauer folgt, sodass die Partie oft in die Strukturen nach 1...d5 oder 1...e5 " +
      "übergeht. Nach 2.Lb2 ist 2...g6 mit ...Lg7 ein üblicher Aufbau, doch dann besetzt 3.e4 " +
      "das Zentrum, weil der Springer gegen den Turm auf h8 gefesselt ist und ...Sxe4 den " +
      "Turm durch Lxh8 kostet.",
  },

  "1.b3 c5": {
    strategy:
      "Kämpft vom Flügel aus um d4 und hält die Zentrumsbauern beweglich. Nach 2.Lb2 " +
      "entwickelt Schwarz mit ...Sc6 und ...Sf6 und kann ...d5 folgen lassen, womit die " +
      "Partie in die Linien von 1...d5 mit ...c5 übergeht. Weiß kann auch 2.e4 wählen, was in " +
      "die Sizilianische Verteidigung führt, oder 2.c4, die Symmetrische Variante der " +
      "Englischen Eröffnung; Schwarz muss also auch diese Strukturen kennen.",
  },

  "1.b3 b6": {
    name: "Larsen-Eröffnung: Symmetrische Variante",
    strategy:
      "Ahmt das weiße Damenfianchetto nach und bereitet ...Lb7 vor, um die lange Diagonale " +
      "streitig zu machen; die Struktur bleibt solide und symmetrisch. Der Zug ist gesund, " +
      "beansprucht aber weder das Zentrum, noch schafft er ein Ungleichgewicht, sodass Weiß " +
      "mit Lb2, e3 und Sf3 das bequemere Spiel behält.",
  },

  "1.b3 e6": {
    strategy:
      "Bereitet ...d5 vor und öffnet dem Läufer auf f8 die Diagonale, ohne sich festzulegen; " +
      "nach 2.Lb2 geht die Partie oft in die Linien von 1...d5 oder 1...Sf6 über. Weiß kann " +
      "auch 2.e4 wählen, worauf 2...d5 zur Französischen Verteidigung führt. Solide, aber " +
      "bescheiden, denn der Bauer auf e6 sperrt den Läufer auf c8 ein, solange Schwarz nicht " +
      "...b6 und ...Lb7 folgen lässt.",
  },

  "1.b3 c6": {
    strategy:
      "Bereitet ...d5 mit einem Bauern auf c6 nach Art der Caro-Kann-Verteidigung und einer " +
      "soliden Struktur vor; nach 2.e4 d5 entsteht tatsächlich eine Caro-Kann-Verteidigung. " +
      "Solide, aber der Bauer nimmt dem Springer das Feld c6 und tut nichts für die " +
      "Entwicklung, sodass Schwarz auf den weißen Aufbau reagiert, statt die Partie zu " +
      "gestalten.",
  },

  "1.b3 d6": {
    strategy:
      "Bereitet ...e5 und ...Sf6 in einem flexiblen Aufbau nach Art der Philidor-Verteidigung " +
      "vor; nach 2.Lb2 e5 geht die Partie in 1...e5 2.Lb2 d6 über. Solide, aber passiv: " +
      "Schwarz wartet ab und lässt Weiß freie Hand, mit e4 oder mit e3 und d4 Raum zu nehmen.",
  },

  "1.b3 Nc6": {
    strategy:
      "Entwickelt eine Figur und unterstützt ...e5; nach 2.Lb2 e5 geht die Partie in die " +
      "Hauptvariante von 1...e5 über. Der Springer verstellt allerdings den c-Bauern, und " +
      "Weiß muss nicht mitspielen: 2.e4 oder 2.d4 besetzt zuerst das Zentrum. Spielbar, aber " +
      "weniger direkt als 1...e5 oder 1...d5.",
  },

  "1.b3 f5": {
    name: "Larsen-Eröffnung: Holländische Variante",
    strategy:
      "Beansprucht e4 nach Art der Holländischen Verteidigung und bereitet ...Sf6 und ...e6 " +
      "vor. Der Preis ist ein gelockerter Königsflügel: Die Diagonale e8–h5 und das Feld e6 " +
      "sind geschwächt, und Weiß kann in Ruhe mit Lb2 und Sf3 aufbauen oder mit d4 Raum " +
      "nehmen. Selten und nicht widerlegt, aber riskant.",
  },

  "1.b3 g6": {
    strategy:
      "Bereitet ein Königsfianchetto vor, doch nach 2.Lb2 ist der Turm auf h8 angegriffen, " +
      "und 2...Lg7? verliert den Läufer durch Lxg7. Schwarz verstellt die Diagonale mit " +
      "2...Sf6 und erreicht den indischen Aufbau, in dem 3.e4 das Zentrum besetzt, weil " +
      "...Sxe4 den Turm durch Lxh8 kosten würde. Spielbar, aber Weiß erhält eine zusätzliche " +
      "günstige Möglichkeit.",
  },

  "1.b3 b5": {
    name: "Larsen-Eröffnung: Polnische Variante",
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet ...Lb7 vor, um die lange Diagonale streitig " +
      "zu machen. Der vorgerückte Bauer wird zur Zielscheibe, sobald e3 oder e4 die Diagonale " +
      "des Läufers auf f1 öffnet, und a4 kann ihn unterminieren, sodass Schwarz den " +
      "Damenflügel unter Kontrolle halten muss. Selten, aber nicht widerlegt.",
  },

  "1.b3 a6": {
    strategy:
      "Verbraucht ein Tempo für einen Damenflügelbauern, bevor eine Figur oder ein " +
      "Zentrumsbauer gezogen hat. Weiß entwickelt mit Lb2 und besetzt in aller Ruhe mit e4 " +
      "oder d4 das Zentrum.",
  },

  "1.b3 a5": {
    strategy:
      "Bereitet ...a4 gegen den Bauern b3 vor, doch Weiß kann das mit a4 verhindern oder " +
      "...axb3 mit axb3 beantworten, und für Entwicklung und Zentrum tut der Zug nichts. " +
      "Außerdem schwächt er das Feld b5.",
  },

  "1.b3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 ins Auge fasst, aber den a-Bauern " +
      "blockiert und wenig für das Zentrum tut. Weiß entwickelt einfach mit Lb2 und nimmt mit " +
      "e3 und d4 oder mit e4 Raum.",
  },

  "1.b3 Nh6": {
    strategy:
      "Stellt den Springer an den Rand statt nach f6, wo er f5 und g4 ins Auge fasst, aber " +
      "kein Zentrumsfeld kontrolliert. Weiß entwickelt mit Lb2 und besetzt mit e3 und d4 oder " +
      "mit e4 das Zentrum, während die schwarze Entwicklung zurückbleibt.",
  },

  "1.b3 f6": {
    strategy:
      "Deckt e5 und verstellt die lange Diagonale, nimmt aber dem Springer das Feld f6 und " +
      "öffnet die Diagonale e8–h5, auf der Dh5+ möglich wird, sobald der weiße e-Bauer " +
      "gezogen hat. Weiß antwortet mit 2.e4 oder 2.Lb2 und entwickelt sich frei.",
  },

  "1.b3 h6": {
    strategy:
      "Verliert ein Tempo mit einem Randbauernzug, der ...g5 vorbereitet, aber weder eine " +
      "Figur entwickelt noch um das Zentrum kämpft. Weiß setzt mit Lb2 und einem " +
      "Bauernvorstoß im Zentrum fort.",
  },

  "1.b3 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel, doch der h-Bauer kann g5 und g6 nicht mehr decken, und " +
      "für Entwicklung und Zentrum tut der Zug nichts. Weiß entwickelt mit Lb2 und e3 oder e4 " +
      "und behält das bequemere Spiel.",
  },

  "1.b3 g5": {
    strategy:
      "Öffnet die lange Diagonale zum Turm auf h8: Nach 2.Lb2 ist der Turm angegriffen, und " +
      "2...Lg7? verliert durch Lxg7 eine Figur. Schwarz muss die Diagonale mit ...f6 " +
      "verstellen, was den König entblößt, oder mit ...Sf6, worauf Lxf6 einen Doppelbauern " +
      "schafft, sodass Weiß Zeit gegen einen geschwächten Königsflügel gewinnt.",
  },

  "1.b3": {
    name: "Larsen-Eröffnung",
    background:
      "Auch Nimzowitsch-Larsen-Angriff: benannt nach Aron Nimzowitsch, der in den 1920er- und " +
      "1930er-Jahren damit experimentierte, und Bent Larsen, dem dänischen Großmeister, der " +
      "den Zug zwischen 1968 und 1972 häufig spielte, darunter eine Niederlage in 17 Zügen " +
      "gegen Spasski beim Wettkampf UdSSR gegen den Rest der Welt 1970. Fischer setzte ihn " +
      "1970 fünfmal ein.",
  },
};
