import type { OpeningTexts } from "../book.ts";

// German prose for c4-g6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.c4 g6 2.Nc3": {
    strategy:
      "Entwickelt den Damenspringer mit Blick auf d5 und e4 und hält die wichtigsten Pläne " +
      "offen: e4 und d4 für ein breites Zentrum, g3 und Lg2 für ein eigenes Fianchetto oder " +
      "d4 allein für eine königsindische Struktur oder eine der Modernen Verteidigung. Der " +
      "Springer steht auf der langen Diagonale, die Schwarz mit ...Lg7 besetzen wird, sodass " +
      "Weiß mit ...Lxc3 und einem Doppelbauern auf der c-Linie rechnen muss.",
  },

  "1.c4 g6 2.d4": {
    strategy:
      "Besetzt sofort das Zentrum und lenkt die Partie in Strukturen von 1.d4; nach 2...Lg7 " +
      "wählt Weiß zwischen 3.Sc3, 3.Sf3 und 3.e4, und 3.e4 d6 4.Sc3 führt zu einem " +
      "königsindischen Aufbau oder einem Aufbau der Modernen Verteidigung. Der Läufer g7 " +
      "drückt auf d4, sodass der Bauer oft Unterstützung durch Sf3 oder e3 braucht, und " +
      "Schwarz kann das Zentrum später mit ...c5, ...e5 oder ...d5 angreifen.",
  },

  "1.c4 g6 2.e4": {
    strategy:
      "Stellt Bauern auf c4 und e4 und bereitet d4 und Sc3 vor; nach 2...Lg7 3.d4 d6 4.Sc3 " +
      "ist das Awerbach-System der Modernen Verteidigung erreicht. Schwarz kann sofort mit " +
      "2...c5 dagegenhalten, wonach 3.Sf3 Lg7 4.d4 cxd4 5.Sxd4 einen Maróczy-Aufbau ergibt, " +
      "oder mit 2...e5. Die Bauern c4 und e4 kontrollieren d5, und das schwarze Gegenspiel " +
      "richtet sich gegen d4 und die dunklen Felder.",
  },

  "1.c4 g6 2.g3": {
    strategy:
      "Bereitet Lg2 vor, der e4 unterstützt und über die lange Diagonale auf den Damenflügel " +
      "zielt, und hält Sc3, Sf3, d3 und d4 offen. Schwarz kann mit 2...Lg7 und ...Sf6 " +
      "spiegeln oder mit ...c5 oder ...e5 Raum beanspruchen. Der Aufbau ist solide und " +
      "flexibel, lässt Schwarz aber die Freiheit, zuerst Raum im Zentrum zu nehmen.",
  },

  "1.c4 g6 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer, deckt d4 und e5 und hält den Aufbau offen: g3 und Lg2 " +
      "ergeben ein Fianchetto am Königsflügel, d4 führt zu Stellungen, die auch aus 1.d4 g6 " +
      "2.c4 entstehen, und Sc3 mit e4 bleibt möglich. Weiß hat noch keinen Bauern im Zentrum, " +
      "sodass Schwarz mit ...c5, ...e5 oder ...d6 antworten und die Struktur wählen kann.",
  },

  "1.c4 g6 2.d3": {
    strategy:
      "Bereitet e4 vor, öffnet die Diagonale des Läufers c1 und hält einen flexiblen Aufbau " +
      "mit Sc3, g3 und Lg2 offen. Das Feld d4 bleibt unbesetzt, sodass Schwarz mit ...Lg7, " +
      "...d6 und ...e5 ein Zentrum errichten kann. Solide, aber langsamer als Sc3, g3 oder " +
      "d4.",
  },

  "1.c4 g6 2.e3": {
    strategy:
      "Öffnet den Läufer f1, bereitet d4 vor und hält Sc3, Sf3 oder Sge2 in Reserve. Noch " +
      "steht kein Bauer im Zentrum, und der Läufer c1 bleibt hinter dem Bauern d2 " +
      "eingesperrt, sodass Schwarz mit ...Lg7 und ...e5 Raum nehmen kann. Solide, aber " +
      "passiv, und Schwarz darf die Struktur wählen.",
  },

  "1.c4 g6 2.a3": {
    strategy:
      "Bereitet b4 und Raumgewinn am Damenflügel vor, lässt aber Zentrum und Entwicklung " +
      "außer Acht; Schwarz spielt ...Lg7, ...d6 und ...Sf6 oder ...c5 und besetzt die " +
      "Zentrumsfelder.",
  },

  "1.c4 g6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel, tut aber nichts für Zentrum oder Entwicklung und schwächt " +
      "das Feld b4. Schwarz spielt ungestört ...Lg7 und ...d6.",
  },

  "1.c4 g6 2.b3": {
    strategy:
      "Öffnet Schwarz die lange Diagonale: Nach 2...Lg7 zielt der Läufer auf den Turm a1, und " +
      "das natürliche 3.Lb2 verliert nach 3...Lxb2 eine Figur, weil nichts zurückschlagen " +
      "kann, sodass Weiß die Diagonale erst mit d4 oder Sc3 verstellen muss und das " +
      "Fianchetto sich verzögert.",
  },

  "1.c4 g6 2.b4": {
    strategy:
      "Überdehnt den Damenflügel: Nach 2...Lg7 ist der Turm a1 angegriffen, 3.Lb2 verliert " +
      "nach 3...Lxb2 eine Figur, und der Bauer b4 wird zum Angriffsziel für ...a5. Der " +
      "Vorstoß tut nichts für Zentrum oder Entwicklung.",
  },

  "1.c4 g6 2.f3": {
    strategy:
      "Nimmt dem Königsspringer das Feld f3 und schwächt die Diagonale e1–h4; der Zug ergibt " +
      "nur mit e4, Sc3 und d4 Sinn, während Schwarz mit ...Lg7 entwickelt und das Zentrum mit " +
      "...d5 oder ...c5 angreift.",
  },

  "1.c4 g6 2.f4": {
    strategy:
      "Gewinnt Raum am Königsflügel und kontrolliert e5, öffnet aber die Diagonale e1–h4 zum " +
      "König, bevor Weiß einen Bauern im Zentrum hat. Schwarz entwickelt mit ...Lg7, ...d6 " +
      "und ...Sf6 und greift das Zentrum in aller Ruhe an.",
  },

  "1.c4 g6 2.g4": {
    strategy:
      "Rückt den g-Bauern ohne Deckung vor: ...d6 droht ...Lxg4, weil der Bauer e2 der Dame " +
      "den Weg zum Zurückschlagen versperrt, und ...h5 untergräbt ihn sofort. Außerdem " +
      "lockert der Zug f4, h4 und die lange Diagonale, während der König noch im Zentrum " +
      "steht.",
  },

  "1.c4 g6 2.h3": {
    strategy:
      "Ein langsamer prophylaktischer Zug gegen ein späteres ...Lg4, der nichts für Zentrum " +
      "oder Entwicklung tut; Schwarz spielt ...Lg7 und ...d6 oder ...c5 und übernimmt die " +
      "Initiative.",
  },

  "1.c4 g6 2.h4": {
    strategy:
      "Zielt auf h5, um die h-Linie gegen das schwarze Fianchetto zu öffnen, doch Schwarz " +
      "antwortet mit 2...h5 oder 2...Sf6, das h5 deckt, und der Vorstoß tut nichts für das " +
      "Zentrum. Der h-Bauer kann g3 und g4 nie mehr decken.",
  },

  "1.c4 g6 2.Na3": {
    strategy:
      "Ein Randspringer, der auf c2 und b5 blickt, aber weit vom Zentrum steht und den " +
      "a-Bauern behindert; Schwarz nimmt mit ...Lg7, ...d6 und ...e5 ungehindert Raum.",
  },

  "1.c4 g6 2.Qc2": {
    strategy:
      "Bringt die Dame ins Spiel, bevor sich eine Leichtfigur bewegt hat; sie deckt c4 und " +
      "blickt auf e4, findet aber kein Ziel. Schwarz entwickelt mit ...Lg7, ...d6 und ...Sf6, " +
      "während die weißen Leichtfiguren noch zu Hause stehen.",
  },

  "1.c4 g6 2.Qb3": {
    strategy:
      "Drückt auf b7, einen Bauern, den der Läufer c8 deckt, sodass keine Drohung entsteht, " +
      "und die Diagonale nach f7 ist durch den eigenen Bauern c4 versperrt. Schwarz " +
      "entwickelt mit ...Lg7 und ...Sc6, während die Dame kein Ziel hat.",
  },

  "1.c4 g6 2.Qa4": {
    strategy:
      "Bringt die Dame nach a4, wo sie den Bauern d7 fesselt, bis Schwarz ...c6 oder ...Sc6 " +
      "spielt, aber kein echtes Ziel hat, da d7 und a7 gut gedeckt sind. Schwarz entwickelt " +
      "mit ...Lg7 und ...Sc6 oder ...Sf6, und die Dame hat nichts für die weißen Figuren " +
      "getan, die noch zu Hause stehen.",
  },

  "1.c4 g6 2.Nh3": {
    strategy:
      "Stellt einen Springer an den Rand mit Blick auf f4 und g5, doch nach ...d6 droht der " +
      "Läufer c8 mit ...Lxh3, wonach Weiß nach gxh3 einen Doppelbauern auf der h-Linie und " +
      "einen geschwächten Königsflügel hätte.",
  },

  "1.c4 g6 2.c5": {
    strategy:
      "Gewinnt Raum, zieht den c-Bauern aber ein zweites Mal und gibt die Kontrolle über d5 " +
      "auf. ...d6 stellt ihn sofort in Frage, und nach cxd6 nimmt Schwarz mit ...exd6 oder " +
      "...Dxd6 zurück und hat ein offenes Zentrum und eine leichte Entwicklung.",
  },

  "1.c4 g6": {
    name: "Englische Eröffnung: Great-Snake-Variante",
  },
};
