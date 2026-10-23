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

  "1.c4 g6 2.d4 Bg7": {
    strategy:
      "Stellt den Läufer auf die lange Diagonale gegen d4 und b2 und bereitet ...O-O vor, " +
      "wobei ...Sf6, ...d6, ...c5 und ...d5 alle offenbleiben. Weiß wählt zwischen 3.Sc3, " +
      "3.Sf3 und 3.e4, und 3.Sc3 d6 4.e4 führt zum Awerbach-System der Modernen Verteidigung; " +
      "mit ...Sf6 wird daraus eine Königsindische oder eine Grünfeld-Indische Verteidigung. " +
      "Der Preis: Weiß hat zuerst das größere Zentrum, und Schwarz muss es später " +
      "untergraben.",
  },

  "1.c4 g6 2.d4 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, kontrolliert e4 und d5 und erreicht " +
      "1.d4 Sf6 2.c4 g6, die Zugfolge der Königsindischen und der Grünfeld-Indischen " +
      "Verteidigung. Nach 3.Sc3 Lg7 4.e4 d6 steht eine Königsindische Verteidigung auf dem " +
      "Brett, nach 3.Sc3 d5 eine Grünfeld-Indische, und 3.Sf3 Lg7 4.g3 führt zu den " +
      "Fianchettosystemen beider Eröffnungen. Die Stellungen sind scharf und theoriereich, " +
      "und Weiß bekommt zuerst das große Zentrum.",
  },

  "1.c4 g6 2.d4 d6": {
    strategy:
      "Kontrolliert e5, öffnet dem Läufer c8 den Weg und hebt ...Lg7 und ...Sf6 für später " +
      "auf, sodass sowohl ein Aufbau der Modernen Verteidigung als auch Königsindisch " +
      "offenbleiben. Nach 3.Sc3 Lg7 4.e4 Sf6 ist die Partie eine Königsindische Verteidigung, " +
      "während das Aufschieben von ...Sf6 die Moderne Verteidigung in der Hinterhand hält. " +
      "Der d-Bauer ist früh festgelegt, sodass ...d5 und die Grünfeld-Indische Verteidigung " +
      "nicht mehr zur Verfügung stehen und Weiß bestimmt, wie viel Raum er nimmt.",
  },

  "1.c4 g6 2.d4 f5": {
    strategy:
      "Führt zu einem Aufbau des Leningrader Systems der Holländischen Verteidigung, mit " +
      "...Lg7, ...Sf6, ...d6 und rascher Rochade als nächsten Schritten, und nimmt e4 unter " +
      "Kontrolle. Da der Springer noch auf g8 steht, kann Schwarz 3.Sc3 auch mit ...Sh6 " +
      "beantworten und nach 4.e4 fxe4 5.Sxe4 mit ...Lg7, ...c6 und ...d5 um das Zentrum " +
      "kämpfen. Der Preis ist ein gelockerter Königsflügel, denn e6 wird nicht mehr vom " +
      "f-Bauern gedeckt.",
  },

  "1.c4 g6 2.d4 Na6": {
    strategy:
      "Deckt c5 und b4 und hält ...c5 und ...Lg7 offen, doch der Springer am Rand tut nichts " +
      "gegen d4 und c4 und blockiert den a-Bauern. Weiß nimmt mit Sc3 und e4 weiteren Raum, " +
      "und Schwarz muss erst noch einen Weg finden, das Zentrum zu untergraben. Solide genug, " +
      "doch Weiß hat freie Hand.",
  },

  "1.c4 g6 2.d4 Nh6": {
    strategy:
      "Strebt nach f5, wo der Springer d4 ins Visier nähme, und hält ...Lg7 und ...c5 offen. " +
      "Weiß muss nicht mit 3.Lxh6 Lxh6 tauschen, was Schwarz das Läuferpaar gäbe: 3.e4 nimmt " +
      "dem Springer das Feld f5 und lässt ihn am Rand stehen. Spielbar, doch Weiß bekommt ein " +
      "breites Zentrum geschenkt.",
  },

  "1.c4 g6 2.d4 b6": {
    strategy:
      "Bereitet ...Lb7 als Gegenstück zu ...Lg7 vor, ein Doppelfianchetto, das von den " +
      "Flügeln aus auf d4 und e4 zielt. Weiß nimmt mit Sc3 und e4 einfach das Zentrum, und " +
      "Schwarz muss es dann mit ...c5 oder ...e5 untergraben. Solide, doch Weiß bekommt Zeit " +
      "für seinen Aufbau.",
  },

  "1.c4 g6 2.d4 c6": {
    strategy:
      "Bereitet ...d5 mit einer soliden Bauernkette wie in der Slawischen Verteidigung vor, " +
      "während ...Lg7 und ...Sf6 noch folgen. Der Zug legt den c-Bauern früh fest und nimmt " +
      "dem Springer b8 das Feld c6, sodass Schwarz gegen das breite weiße Zentrum solide, " +
      "aber passiv spielt.",
  },

  "1.c4 g6 2.d4 c5": {
    strategy:
      "Greift d4 sofort an, für eine Partie vom Benoni- oder sizilianischen Typ, ...Lg7 folgt " +
      "noch. Nach 3.dxc5 gewinnt Schwarz den Bauern mit ...Da5+ und ...Dxc5 zurück, verliert " +
      "aber Zeit mit der Dame, und 3.d5 gibt Weiß einen Raumvorteil in einer Benoni-Struktur. " +
      "Spielbar, doch Weiß wählt die Struktur.",
  },

  "1.c4 g6 2.d4 e6": {
    strategy:
      "Bereitet ...d5 und einen flexiblen Aufbau mit ...Lg7 und ...Sf6 oder ...Se7 vor, doch " +
      "der Bauer e6 sperrt den Läufer c8 ein. Weiß kann sofort 3.e4 spielen, worauf ...Sf6 " +
      "mit e5 beantwortet wird, sodass Schwarz das Zentrum mit ...d5 oder ...c5 angreifen " +
      "muss. Solide, aber langsam.",
  },

  "1.c4 g6 2.d4 Nc6": {
    strategy:
      "Entwickelt einen Springer, doch 3.d5 greift ihn sofort an und lässt ihm kein gutes " +
      "Feld: 3...Se5 greift c4 an, bis nach 4.e4 der Läufer f1 den Bauern deckt und f4 den " +
      "Springer erneut vertreibt, während 3...Sb4 4.a3 ihn nach a6 treibt. Weiß gewinnt Raum " +
      "und Tempi, während der Läufer f8 noch zu Hause steht.",
  },

  "1.c4 g6 2.d4 Bh6": {
    strategy:
      "Greift den Läufer c1 an, doch 3.Lxh6 Sxh6 tauscht genau den Fianchettoläufer ab, für " +
      "den ...g6 gespielt wurde. Schwarz bleibt mit schwachen schwarzen Feldern und einem " +
      "ungedeckten Springer auf h6 zurück, den 4.Dd2 sofort angreift.",
  },

  "1.c4 g6 2.d4 a6": {
    strategy:
      "Bereitet ...b5 vor, doch ein Bauernzug am Flügel entwickelt nichts und überlässt Weiß " +
      "das Zentrum. Schwarz fehlen noch ...Lg7, ...d6 und ...Sf6, während Weiß in aller Ruhe " +
      "Sc3 und e4 spielt.",
  },

  "1.c4 g6 2.d4 a5": {
    strategy:
      "Nimmt das Feld b4 unter Kontrolle und gewinnt Raum am Damenflügel, vernachlässigt aber " +
      "das Zentrum und schwächt b5. Weiß spielt ungehindert Sc3, e4 und Sf3, während die " +
      "schwarzen Figuren noch zu Hause stehen.",
  },

  "1.c4 g6 2.d4 d5": {
    strategy:
      "Greift c4 sofort an, doch nach 3.cxd5 gibt es kein bequemes Zurückschlagen: 3...Dxd5 " +
      "4.Sc3 gewinnt ein Tempo gegen die Dame, und auch 3...Sf6 4.Da4+ ist günstig für Weiß. " +
      "Eine Grünfeld-Indische Verteidigung entsteht nur, wenn Weiß sie zulässt, wie nach " +
      "3...Sf6 4.Sc3 Sxd5.",
  },

  "1.c4 g6 2.d4 f6": {
    strategy:
      "Nimmt den weißen Figuren das Feld e5 und bereitet ...e5 vor, verstellt aber die lange " +
      "Diagonale des künftigen Läufers g7 und nimmt dem Springer das Feld f6. Weiß baut mit " +
      "Sc3 und e4 auf und hat mehr Raum.",
  },

  "1.c4 g6 2.d4 h6": {
    strategy:
      "Verschwendet ein Tempo mit einem Randbauern, der weder c4 noch d4 bekämpft. Der Bauer " +
      "ist sicher, da Weiß nach 3.Lxh6 Lxh6 nur einen Bauern für den Läufer bekäme, doch Weiß " +
      "baut mit Sc3 und e4 auf, während die schwarzen Figuren zu Hause bleiben.",
  },

  "1.c4 g6 2.d4 h5": {
    strategy:
      "Schwächt g5 dauerhaft und entwickelt nichts: Ein Läufer auf g5 kann nicht mehr mit " +
      "...h6 angegriffen werden. Weiß nutzt das Tempo für Sc3 und e4, und der h-Bauer leistet " +
      "am Königsflügel keine Arbeit.",
  },

  "1.c4 g6 2.d4 b5": {
    strategy:
      "Lässt einen Bauern hängen: 3.cxb5 gewinnt ihn, und weder ...Lb7 noch ...Lg7 bringt " +
      "genug dafür ein, weil g2 und d4 beide gedeckt sind. Weiß entwickelt sich einfach mit " +
      "Sc3 und e4.",
  },

  "1.c4 g6 2.d4 e5": {
    strategy:
      "Gibt einen Bauern weg: Nach 3.dxe5 Lg7 4.Sf3 ist der Bauer e5 gedeckt und der Druck " +
      "des Läufers bewirkt nichts, sodass Weiß den Mehrbauern behält.",
  },

  "1.c4 g6 2.d4 g5": {
    strategy:
      "Lässt den g-Bauern hängen: 3.Lxg5 gewinnt ihn, weil der Bauer e7 die Diagonale der " +
      "Dame verstellt und sonst nichts g5 deckt. Der Königsflügel ist umsonst geschwächt.",
  },

  "1.c4 g6 2.g3 Bg7": {
    strategy:
      "Vollendet das Fianchetto und richtet den Läufer über die lange Diagonale auf c3 und " +
      "b2. Schwarz hält sich jeden Aufbau offen: Nach 3.Lg2 bleibt die Wahl zwischen ...e5 " +
      "mit ...Sc6, ...c5 für die Englische Symmetrievariante oder ...Sf6 und ...O-O für " +
      "königsindisches Spiel. Der Preis ist, dass Weiß zuerst Raum nimmt, mit Sc3 und danach " +
      "e4 oder d4.",
  },

  "1.c4 g6 2.g3 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, deckt e4 und d5 und führt zur " +
      "Stellung nach 1.c4 Sf6 2.g3 g6. Schwarz setzt mit ...Lg7 und ...O-O fort und wählt " +
      "...d6 und ...e5 für königsindisches Spiel oder ...d5 für Spiel nach Art der " +
      "Grünfeld-Indischen Verteidigung. Der Springer legt sich fest, bevor Weiß seinen Aufbau " +
      "zeigt, doch Schwarz gibt dabei nichts preis.",
  },

  "1.c4 g6 2.g3 c5": {
    strategy:
      "Nimmt d4 unter Kontrolle und strebt die Englische Symmetrievariante an: Nach 3.Lg2 Lg7 " +
      "4.Sc3 Sc6 haben beide Seiten fianchettiert, und der Kampf dreht sich um d4 und um die " +
      "Expansion am Damenflügel mit b4 oder ...b5. Bis ...Lg7 geschieht, ist die Diagonale " +
      "zum Turm h8 offen, sodass nach 3.d4 cxd4 4.Dxd4 die Dame den Turm angreift; 4...Sf6 " +
      "verstellt die Diagonale, denn 4...Lg7 verliert den Läufer nach 5.Dxg7.",
  },

  "1.c4 g6 2.g3 Nc6": {
    strategy:
      "Entwickelt den Springer, nimmt d4 und e5 ins Visier und unterstützt ein späteres " +
      "...e5. Allerdings verstellt der Springer den c-Bauern, und Weiß kann mit Lg2, Sc3 und " +
      "d4 oder e4 aufbauen, bevor Schwarz sich für eine Struktur entschieden hat. Solide, " +
      "doch ...Lg7 zuerst hält mehr Möglichkeiten offen.",
  },

  "1.c4 g6 2.g3 c6": {
    strategy:
      "Bereitet ...d5 mit fester Bauernkette vor und schließt die lange Diagonale auf c6, " +
      "bevor Lg2 kommt; nach ...d5 kann der Läufer c8 nach f5 oder g4 gelangen. Vorerst " +
      "bleibt das Zentrum Weiß überlassen, sodass Lg2, Sc3 und d4 oder e4 folgen. Solide, " +
      "legt aber den c-Bauern fest, bevor der Aufbau feststeht.",
  },

  "1.c4 g6 2.g3 d6": {
    strategy:
      "Befreit den Läufer c8 und bereitet ...e5 vor, das ...Lg7 später unterstützt, für einen " +
      "königsindischen Aufbau mit ...Sf6. Der Zug ist solide, aber passiv: Vorerst bleibt das " +
      "Zentrum Weiß überlassen, der mit Lg2, Sc3 und dann d4 oder e4 aufbaut.",
  },

  "1.c4 g6 2.g3 d5": {
    strategy:
      "Greift c4 sofort an. Nach 3.cxd5 Sf6 gewinnt Schwarz den Bauern mit ...Sxd5 zurück und " +
      "erhält Spiel nach Art der Grünfeld-Indischen Verteidigung, doch Sc3 greift den " +
      "Springer dann mit Tempogewinn an. Das Zurückschlagen mit 3...Dxd5 greift stattdessen " +
      "den Turm h1 an, doch 4.Sf3 verstellt die Diagonale, und Sc3 vertreibt danach die Dame.",
  },

  "1.c4 g6 2.g3 e6": {
    strategy:
      "Bereitet ...d5 mit fester Bauernkette vor und macht e7 für den Springer frei, sodass " +
      "...Lg7 und ...Se7 folgen können. Steht erst ...d5, sperrt der Bauer e6 den Läufer c8 " +
      "ein, während Weiß mit Lg2, Sc3 und d4 oder e4 Raum nimmt. Solide, aber passiv.",
  },

  "1.c4 g6 2.g3 e5": {
    strategy:
      "Nimmt Raum im Zentrum und führt zur Stellung nach 1.c4 e5 2.g3 g6, wobei ...Lg7 und " +
      "...Sc6 den Bauern stützen. Nach 3.Lg2 Lg7 4.Sc3 Sc6 entsteht ein geschlossenes System " +
      "der Englischen Eröffnung, in dem Weiß d5 kontrolliert und mit d3, Tb1 und b4 Spiel am " +
      "Damenflügel beginnt. Solide, legt Schwarz aber früh auf diese Struktur fest.",
  },

  "1.c4 g6 2.g3 f5": {
    strategy:
      "Kontrolliert e4 und führt nach ...Sf6, ...Lg7 und ...O-O zum Aufbau des Leningrader " +
      "Systems der Holländischen Verteidigung. Der Zug schwächt e6 und legt die Bauern am " +
      "Königsflügel fest, und Weiß antwortet mit Lg2, Sc3 und d3 nebst e4 oder mit d4. " +
      "Solide, aber zweischneidig.",
  },

  "1.c4 g6 2.g3 Na6": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er b4 und c5 ins Visier nimmt, aber kaum " +
      "Einfluss auf das Zentrum hat. Weiß gewinnt Zeit für Lg2, Sc3 und d4 oder e4.",
  },

  "1.c4 g6 2.g3 Bh6": {
    strategy:
      "Stellt den Läufer statt nach g7 nach h6, wo ihm der Läufer c1 entgegentritt, sobald d3 " +
      "oder d4 die Diagonale öffnet. Nach Lxh6 Sxh6 hat Schwarz den schwarzfeldrigen Läufer " +
      "abgetauscht, der f6 und h6 decken sollte, und der Springer steht am Rand; weicht " +
      "Schwarz dem Tausch mit ...Lg7 aus, kostet das ein Tempo.",
  },

  "1.c4 g6 2.g3 Nh6": {
    strategy:
      "Strebt nach f5, doch der Springer steht am Rand, und e4 vertreibt ihn von dort. Für " +
      "das Zentrum tut er nichts, und Weiß setzt mit Lg2, Sc3 und d4 oder e4 fort.",
  },

  "1.c4 g6 2.g3 a6": {
    strategy:
      "Investiert ein Tempo in einen Randbauern, um ...b5 vorzubereiten, doch sobald Weiß " +
      "3.Lg2 gespielt hat, öffnet ...b5 die Diagonale zum Turm a8 und Lxa8 schlägt ihn, " +
      "sodass zuerst ...c6 oder ...Sc6 kommen muss. Im Zentrum und in der Entwicklung gewinnt " +
      "Schwarz nichts.",
  },

  "1.c4 g6 2.g3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und deckt b4, schwächt aber b5 und entwickelt nichts. Weiß " +
      "setzt mit Lg2, Sc3 und d4 oder e4 ungehindert fort.",
  },

  "1.c4 g6 2.g3 b6": {
    strategy:
      "Öffnet die lange Diagonale zum ungedeckten Turm a8: Nach 3.Lg2 muss Schwarz sie sofort " +
      "mit ...c6, ...Sc6 oder ...d5 verstellen, denn das natürliche ...Lb7 verliert den " +
      "Läufer nach Lxb7. Nach jeder dieser Sperren steht ein späterer Läufer auf b7 hinter " +
      "einer eigenen Figur oder einem eigenen Bauern, und der Damenflügel ist gelockert.",
  },

  "1.c4 g6 2.g3 f6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6 und verstellt die Diagonale des künftigen Läufers " +
      "g7, während e6 und der Königsflügel geschwächt werden. Weiß spielt in Ruhe Lg2, Sc3 " +
      "und d4 oder e4.",
  },

  "1.c4 g6 2.g3 h6": {
    strategy:
      "Deckt g5, ein Feld, das der Läufer c1 erst erreichen kann, wenn der d-Bauer gezogen " +
      "hat, und entwickelt nichts. Der Bauer g6 verliert die Stütze des h-Bauern, und Weiß " +
      "setzt mit Lg2, Sc3 und d4 oder e4 fort.",
  },

  "1.c4 g6 2.g3 h5": {
    strategy:
      "Plant einen Vorstoß des h-Bauern nach h4, schwächt aber g5 und g6 und entwickelt " +
      "nichts. Weiß antwortet mit h4 oder setzt einfach mit Lg2 und Sc3 fort und besetzt das " +
      "Zentrum.",
  },

  "1.c4 g6 2.g3 g5": {
    strategy:
      "Zieht den g-Bauern ein zweites Mal, gibt das vorbereitete Fianchetto auf und lässt f5 " +
      "und h5 ohne Bauerndeckung. Sobald d3 oder d4 die Diagonale des Läufers c1 öffnet, " +
      "droht Lxg5, und Schwarz muss ein weiteres Tempo für die Deckung des Bauern aufwenden.",
  },

  "1.c4 g6 2.g3 b5": {
    strategy:
      "Gibt nach 3.cxb5 einen Bauern her. Dafür erhält Schwarz nur die halboffene b-Linie und " +
      "die lange Diagonale für ...Lb7, und Weiß behält den Mehrbauern, indem er sich mit Sf3, " +
      "Lg2 und Sc3 entwickelt.",
  },

  "1.c4 g6 2.Nc3 Bg7": {
    strategy:
      "Entwickelt den Läufer auf die lange Diagonale, wo er auf den Springer c3 und auf b2 " +
      "drückt, und räumt f8, sodass zur Rochade nur noch ...Sf6 fehlt. Gegen 3.e4 kann " +
      "Schwarz mit ...d6 und ...Sf6 einen königsindischen Aufbau wählen oder mit ...c5 oder " +
      "...e5 sofort zuschlagen; gegen 3.g3 wählt Schwarz zwischen ...c5 für die " +
      "Symmetrievariante und ...e5 für die geschlossene Variante der Englischen Eröffnung. " +
      "Der Preis ist Raum im Zentrum, den Weiß mit e4 und d4 zuerst besetzen kann.",
  },

  "1.c4 g6 2.Nc3 Nf6": {
    strategy:
      "Entwickelt den Königsspringer, nimmt d5 und e4 ins Visier und erreicht die " +
      "anglo-indische Stellung, die auch nach 1.c4 Sf6 2.Sc3 g6 entsteht. Nach 3.d4 d5 " +
      "entsteht durch Zugumstellung die Grünfeld-Indische Verteidigung, während Schwarz nach " +
      "3.e4 mit ...Lg7 und ...d6 in königsindische Varianten gelenkt wird. Weiß kann mit 3.g3 " +
      "oder 3.Sf3 auch in der Englischen Eröffnung bleiben, worauf ...Lg7 und ...O-O folgen.",
  },

  "1.c4 g6 2.Nc3 c5": {
    strategy:
      "Kontrolliert d4 und steuert die Symmetrievariante der Englischen Eröffnung an, die " +
      "Stellung, die auch nach 1.c4 c5 2.Sc3 g6 entsteht. Nach 3.g3 Lg7 4.Lg2 Sc6 ist die " +
      "Stellung völlig symmetrisch, während ...Sf6, ...b6 und ...Lb7 statt ...Sc6 Schwarz ein " +
      "Doppelfianchetto geben. Der Preis ist das Feld d5, das der Bauer c4 und der Springer " +
      "c3 bereits kontrollieren und das 3.e4 zusätzlich beherrschen würde.",
  },

  "1.c4 g6 2.Nc3 d6": {
    strategy:
      "Öffnet die Diagonale des Läufers c8 und deckt c5 und e5, mit Kurs auf einen " +
      "königsindischen Aufbau oder einen Aufbau der Modernen Verteidigung mit ...Lg7 und " +
      "...Sf6. Der Zug ist gesund, aber nicht zu empfehlen: Der d-Bauer legt sich vor den " +
      "Springern fest, die Grünfeld-Aufbauten mit ...d5 entfallen, und Weiß gewinnt mit 3.e4 " +
      "oder 3.d4 Raum, bevor Schwarz einen Plan gewählt hat.",
  },

  "1.c4 g6 2.Nc3 Nc6": {
    strategy:
      "Entwickelt den Springer Richtung Zentrum, nimmt d4 und e5 ins Visier und unterstützt " +
      "ein späteres ...e5. Er blockiert jedoch den c-Bauern, sodass ...c5 nicht möglich ist, " +
      "solange der Springer dort steht, und nach 3.d4 kann ihn der Vorstoß d5 vertreiben. " +
      "Solide, aber weniger flexibel als zuerst ...Lg7 oder ...Sf6.",
  },

  "1.c4 g6 2.Nc3 e5": {
    strategy:
      "Beansprucht sofort das Zentrum und erreicht die Stellung nach 1.c4 e5 2.Sc3 g6, eine " +
      "Stellung aus Sizilianisch im Anzuge, in der ...Lg7 den Bauern e5 decken wird. Der Zug " +
      "ist gesund, aber nicht zu empfehlen: Bis der Läufer dort steht, ist die lange " +
      "Diagonale zum Turm h8 offen, sodass 3.d4 exd4 4.Dxd4 den Turm angreift und Weiß Zeit " +
      "gewinnt.",
  },

  "1.c4 g6 2.Nc3 c6": {
    strategy:
      "Bereitet ...d5 mit Bauernunterstützung vor und erreicht die Stellung nach 1.c4 c6 " +
      "2.Sc3 g6. Der Zug ist gesund, aber nicht zu empfehlen: Der Bauer nimmt dem Springer b8 " +
      "das Feld c6, und Weiß kann mit e4 und d4 ein breites Zentrum errichten, bevor ...d5 es " +
      "angreift.",
  },

  "1.c4 g6 2.Nc3 e6": {
    strategy:
      "Bereitet ...d5 vor und macht e7 für den Springer frei; es entsteht die Stellung nach " +
      "1.c4 e6 2.Sc3 g6. Der Zug ist gesund, aber nicht zu empfehlen: Sobald ...d5 gespielt " +
      "ist, sperrt der Bauer e6 den Läufer c8 ein, und der Aufbau ist langsam, sodass Weiß " +
      "mit e4 und d4 das Zentrum errichten kann, bevor Schwarz dort Anspruch erhebt.",
  },

  "1.c4 g6 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 und zusammen mit ...Lg7 ein Doppelfianchetto vor, das beide Läufer auf " +
      "das weiße Zentrum und den Damenflügel richtet. Der Zug ist gesund, aber nicht zu " +
      "empfehlen: Noch ist kein Springer entwickelt, und Weiß kann mit e4 oder d4 und Sf3 " +
      "Raum gewinnen, bevor Schwarz sich auf ...c5, ...e6 oder ...Sf6 festgelegt hat.",
  },

  "1.c4 g6 2.Nc3 f5": {
    strategy:
      "Kontrolliert e4 und steuert mit ...Sf6, ...Lg7 und ...O-O einen Aufbau wie im " +
      "Leningrader System der Holländischen Verteidigung an. Der Zug ist gesund, aber nicht " +
      "zu empfehlen: Er schwächt e6 und lockert den Königsflügel, bevor eine Figur entwickelt " +
      "ist, und nach 3.e4 fxe4 4.Sxe4 steht der weiße Springer aktiv im Zentrum.",
  },

  "1.c4 g6 2.Nc3 d5": {
    strategy:
      "Bietet einen Bauern an, den Weiß behalten kann: Nach 3.cxd5 Sf6 4.e4 decken Sc3 und " +
      "der e-Bauer den Bauern d5, sodass ...Sxd5 an exd5 scheitert, und Schwarz hat keinen " +
      "schnellen Weg, ihn zurückzugewinnen.",
  },

  "1.c4 g6 2.Nc3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, um b4 oder c5 zu erreichen, lässt aber das Zentrum " +
      "außer Acht, und a3 vertreibt ...Sb4 mit Tempogewinn. Weiß gewinnt mit e4 und d4 Raum, " +
      "und d4 nimmt dem Springer zudem das Feld c5.",
  },

  "1.c4 g6 2.Nc3 Nh6": {
    strategy:
      "Strebt vom Rand aus nach f5, doch 3.e4 kontrolliert dieses Feld, und nach 3.d4 nimmt " +
      "der Läufer c1 den Springer bereits ins Visier. Auf h6 tut er nichts für das Zentrum, " +
      "während Weiß es mit e4 und d4 besetzt.",
  },

  "1.c4 g6 2.Nc3 Bh6": {
    strategy:
      "Stellt den Läufer nach h6 statt nach g7, wo 3.d4 die Diagonale des Läufers c1 gegen " +
      "ihn öffnet. Ein Tausch auf h6 oder c1 beseitigt den schwarzfeldrigen Läufer, dem das " +
      "Fianchetto dienen sollte, und der Rückzug nach g7 kostet ein Tempo.",
  },

  "1.c4 g6 2.Nc3 f6": {
    strategy:
      "Bereitet ...e5 vor, nimmt aber dem Springer g8 das Feld f6, verstellt die lange " +
      "Diagonale des kommenden Läufers g7 und schwächt e6. Nichts wird entwickelt, und Weiß " +
      "baut mit e4 und d4 auf.",
  },

  "1.c4 g6 2.Nc3 a6": {
    strategy:
      "Bereitet ...b5 vor, doch der Hebel funktioniert noch nicht: Ein sofortiges ...b5 " +
      "verliert nach cxb5 axb5 Sxb5 einen Bauern. Das Tempo tut nichts für Zentrum oder " +
      "Entwicklung, und Weiß setzt mit e4 und d4 fort.",
  },

  "1.c4 g6 2.Nc3 a5": {
    strategy:
      "Kontrolliert b4 und gewinnt etwas Raum am Damenflügel, entwickelt aber nichts und " +
      "schwächt b5, das der a-Bauer nicht mehr decken kann. Weiß baut mit e4 und d4 ungestört " +
      "das Zentrum auf.",
  },

  "1.c4 g6 2.Nc3 h6": {
    strategy:
      "Nimmt dem Läufer c1 das Feld g5, das er ohnehin nicht erreichen kann, solange der " +
      "d-Bauer auf d2 steht, und lässt den Bauern g6 ohne die Stütze des h-Bauern. Nichts " +
      "wird entwickelt, und Weiß baut mit e4 und d4 auf.",
  },

  "1.c4 g6 2.Nc3 h5": {
    strategy:
      "Bereitet ...h4 vor, lässt aber den Bauern g6 ohne die Stütze des h-Bauern, und der " +
      "h-Bauer kann g5 nie mehr decken. Nichts wird entwickelt, und Weiß baut mit e4 und d4 " +
      "auf.",
  },

  "1.c4 g6 2.Nc3 g5": {
    strategy:
      "Zieht den g-Bauern ein zweites Mal, gibt das vorbereitete Fianchetto auf und lässt f5 " +
      "und h5 ohne Bauerndeckung. Nichts deckt g5, sodass 3.d4 Lxg5 droht, und Schwarz muss " +
      "ein weiteres Tempo für ...h6, ...f6 oder ...Lh6 aufwenden.",
  },

  "1.c4 g6 2.Nc3 b5": {
    strategy:
      "Stellt einen Bauern ein: Der Bauer c4 und der Springer c3 greifen b5 an, und nichts " +
      "deckt ihn, sodass 3.cxb5 oder 3.Sxb5 ihn einfach gewinnt. Schwarz hat dafür keinen " +
      "Entwicklungsvorsprung.",
  },
};
