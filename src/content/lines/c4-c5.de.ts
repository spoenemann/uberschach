import type { OpeningTexts } from "../book.ts";

// German prose for c4-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.c4 c5 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer, kontrolliert d4 und e5 und bereitet d4 mit " +
      "Springerrückschlag vor: Nach 2...Sf6 3.d4 cxd4 4.Sxd4 ähnelt die Partie einem Offenen " +
      "Sizilianer, in dem der weiße Bauer auf c4 statt auf e4 steht. Schwarz kann auch " +
      "2...Sc6 mit ...g6 und ...Lg7 wählen oder den Igel mit ...e6, ...b6 und ...Lb7. Weiß " +
      "hält Sc3 und g3 in Reserve.",
  },

  "1.c4 c5 2.Nc3": {
    name: "Englische Symmetrievariante: Normalvariante",
    background:
      "Im ECO steht 1.c4 c5 2.Sc3 unter A34, als Normalvariante der Englischen " +
      "Symmetrievariante; mit 2...Sc6 wird daraus die Zweispringervariante (A35), und 3.g3 " +
      "ergibt dann die Fianchetto-Variante (A36).",
    strategy:
      "Entwickelt den Damenspringer und überwacht d5 und e4: Nach 2...d5 3.cxd5 kann Schwarz " +
      "nicht mit der Dame zurückschlagen, denn Sxd5 gewinnt sie. Weiß setzt meist mit g3 und " +
      "Lg2 fort, dann mit Sf3 oder mit e3 und Sge2, und hält sich den Hebel d4 und ein " +
      "späteres e4 offen. Schwarz spiegelt oft mit ...Sc6, ...g6 und ...Lg7, und die " +
      "Symmetrie kann viele Züge lang anhalten.",
  },

  "1.c4 c5 2.g3": {
    strategy:
      "Bereitet Lg2 vor, der auf der langen Diagonale gegen b7 und das Zentrum wirkt, und " +
      "hält sich Sc3 wie Sf3 offen. Nach 2...Sc6 3.Sc3 g6 4.Lg2 Lg7 entsteht die " +
      "Fianchetto-Variante, in der Weiß mit Sf3 und O-O fortsetzt. Schwarz kann sich auch mit " +
      "...Sc6 und ...e5 aufstellen, da noch kein weißer Springer auf f3 das Feld e5 angreift.",
  },

  "1.c4 c5 2.b3": {
    strategy:
      "Bereitet Lb2 auf der langen Diagonale vor, mit Blick auf e5 und g7, gefolgt von e3 und " +
      "Sf3 oder Sc3. Der Plan ist korrekt, aber langsam: Noch steht kein Springer draußen, " +
      "sodass Schwarz den Läufer mit ...Sc6 und ...e5 abblocken oder ihm die Diagonale mit " +
      "...g6 und ...Lg7 streitig machen kann.",
  },

  "1.c4 c5 2.d3": {
    strategy:
      "Bereitet e4 mit Bauerndeckung vor und öffnet dem Läufer c1 den Weg, meist gefolgt von " +
      "g3, Lg2 und e4 für einen geschlossenen Aufbau. Der Zug ist solide, aber bescheiden, " +
      "und Schwarz kann mit ...Sc6 und ...e5 oder mit ...d5 das Zentrum besetzen, bevor Weiß " +
      "eine Figur entwickelt hat.",
  },

  "1.c4 c5 2.e3": {
    strategy:
      "Öffnet den Läufer f1 und bereitet d4 vor, sodass Weiß mit dem e-Bauern zurückschlagen " +
      "kann: Nach 2...Sf6 3.d4 cxd4 4.exd4 d5 entsteht die Bauernstruktur des " +
      "Panow-Botwinnik-Angriffs der Caro-Kann-Verteidigung. Der Zug ist solide, aber " +
      "bescheiden, und Schwarz kann sich auch mit ...Sc6, ...g6 und ...Lg7 aufstellen oder " +
      "mit ...e5 Raum nehmen.",
  },

  "1.c4 c5 2.e4": {
    strategy:
      "Nimmt mit Bauern auf c4 und e4 Raum und klammert d5; Weiß vervollständigt den Aufbau " +
      "meist mit Sc3, g3, Lg2 und Sge2. Der Preis ist ein dauerhaftes Loch auf d4, das kein " +
      "weißer Bauer mehr decken kann, und Schwarz zielt mit ...Sc6, ...g6, ...Lg7 und ...Sd4 " +
      "darauf. Der Zug ist korrekt, überlässt Schwarz aber einen klaren Plan.",
  },

  "1.c4 c5 2.d4": {
    strategy:
      "Greift den c-Bauern an, bevor ein Springer auf d4 zurückschlagen kann. Nach 2...cxd4 " +
      "3.Dxd4 Sc6 wird die Dame angegriffen und verliert ein Tempo, und nach 3.Sf3 kann " +
      "Schwarz den Bauern mit 3...e5 halten, da 4.Sxe5 Da5+ den Springer gewinnt.",
  },

  "1.c4 c5 2.b4": {
    name: "Englische Eröffnung: Flügelgambit",
    strategy:
      "Gibt den b-Bauern her, um den c-Bauern vom Kampf um d4 abzulenken. Nach 2...cxb4 " +
      "spielt Weiß a3 oder d4 für offene Linien und schnelle Entwicklung, doch Schwarz behält " +
      "einen gesunden Mehrbauern und kann mit ...Sf6 und ...e6 konsolidieren, sodass die " +
      "Kompensation dünn ist.",
  },

  "1.c4 c5 2.a3": {
    strategy:
      "Bereitet b4 vor, verwendet aber ein Tempo auf einen Randbauern, der weder dem Zentrum " +
      "noch der Entwicklung dient. Schwarz entwickelt mit ...Sc6 und ...Sf6 und nimmt mit " +
      "...d5 oder ...e5 Raum, und nichts in der Stellung macht a3 dringend.",
  },

  "1.c4 c5 2.a4": {
    strategy:
      "Verhindert ...b5 und gewinnt Raum am Damenflügel, schwächt aber b4 und kostet ein " +
      "Tempo, das weder dem Zentrum noch der Entwicklung dient. Schwarz spielt ...Sc6 und " +
      "...Sf6 oder ...d5 und entwickelt sich frei.",
  },

  "1.c4 c5 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer g1 sein bestes Feld und schwächt e3 sowie die " +
      "Diagonale e1–h4. Der Zug entwickelt nichts, und Schwarz besetzt das Zentrum mit ...Sc6 " +
      "und ...e5 oder mit ...d5.",
  },

  "1.c4 c5 2.f4": {
    strategy:
      "Kontrolliert e5 für eine holländisch anmutende Struktur, entwickelt aber keine Figur " +
      "und schwächt e3 sowie die Diagonale e1–h4. Schwarz antwortet mit ...Sc6, ...g6 und " +
      "...d6 oder greift mit ...d5 das Zentrum an, und der weiße Königsflügel ist gelockert, " +
      "bevor die Figuren draußen sind.",
  },

  "1.c4 c5 2.g4": {
    strategy:
      "Gewinnt Raum am Königsflügel, räumt aber g2 und öffnet die lange Diagonale zum Turm " +
      "auf h1. Nach 2...d5 greift der Läufer c8 den Bauern g4 an, und 3.cxd5 Dxd5 trifft " +
      "zudem den Turm, sodass Weiß einen weiteren Zug für f3, Sf3 oder Tg1 aufwenden muss.",
  },

  "1.c4 c5 2.h3": {
    strategy:
      "Nimmt einem schwarzen Läufer oder Springer das Feld g4, kostet aber ein Tempo für " +
      "einen Randbauernzug, den die Stellung nicht verlangt. Schwarz besetzt das Zentrum mit " +
      "...Sc6, ...d5 oder ...e5, während die weiße Entwicklung stillsteht.",
  },

  "1.c4 c5 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel und bereitet h5 vor, tut aber nichts für Zentrum oder " +
      "Entwicklung. Schwarz besetzt mit ...Sc6 und ...d5 das Zentrum und entwickelt sich " +
      "frei.",
  },

  "1.c4 c5 2.Na3": {
    strategy:
      "Strebt nach c2, wo er d4 unterstützt, oder nach b5, doch auf a3 kontrolliert der " +
      "Springer kein Zentrumsfeld und blockiert den a-Bauern. Schwarz besetzt das Zentrum mit " +
      "...Sc6, ...d5 oder ...e5, während der Springer einen zweiten Zug braucht, um ein " +
      "nützliches Feld zu erreichen.",
  },

  "1.c4 c5 2.Nh3": {
    strategy:
      "Stellt den Springer an den Rand, wo er f4 und g5 im Blick hat. Sobald ...d5 oder ...d6 " +
      "den Läufer c8 öffnet, verdoppelt ...Lxh3 gxh3 die weißen Bauern am Königsflügel, und " +
      "der Springer tut nichts für das Zentrum.",
  },

  "1.c4 c5 2.Qc2": {
    strategy:
      "Bringt die Dame ins Spiel, bevor sich eine andere Figur bewegt hat. Sie deckt c4 und " +
      "unterstützt ein späteres e4, doch Schwarz entwickelt mit ...Sc6 und ...Sf6 und kann " +
      "später mit ...Sb4 ein Tempo gewinnen, während die weißen Figuren noch zu Hause stehen.",
  },

  "1.c4 c5 2.Qb3": {
    strategy:
      "Entwickelt die Dame vor jeder anderen Figur und droht nichts, da der Läufer b7 deckt. " +
      "Zudem nimmt sie dem b-Bauern das Feld b3, sodass kein Fianchetto mehr möglich ist, " +
      "während Schwarz mit ...Sc6 und ...Sf6 ein freies Spiel erhält.",
  },

  "1.c4 c5 2.Qa4": {
    strategy:
      "Bringt die Dame früh nach a4, wo sie nur die gedeckten Bauern a7 und d7 anvisiert und " +
      "nichts droht. Schwarz entwickelt mit ...Sc6 und ...Sf6, und ...a6 nebst ...b5 kann die " +
      "Dame belästigen, während die weiße Entwicklung zurückbleibt.",
  },

  "1.c4 c5": {
    name: "Englische Symmetrievariante",
    background:
      "So benannt, weil beide Seiten ihren c-Bauern zwei Felder vorgezogen haben. Neben " +
      "Sizilianisch im Anzuge (1...e5) ist sie eine der großen Gruppen von Verteidigungen " +
      "gegen die Englische Eröffnung; im ECO trägt sie die Schlüssel A30–A39.",
  },

  "1.c4 c5 2.Nc3 Nc6": {
    name: "Englische Symmetrievariante: Zweispringervariante",
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, wo er gemeinsam mit dem c5-Bauern " +
      "d4 überwacht und außerdem e5 und b4 kontrolliert. Nach 3.g3 kann Schwarz mit ...g6 und " +
      "...Lg7 spiegeln und dann zwischen ...e5 mit ...Sge7, das d4 fest im Griff hält, Weiß " +
      "aber das Feld d5 überlässt, und dem völlig symmetrischen ...Sf6 wählen. Ein anderer " +
      "Plan ist ...e6 mit ...Sf6 und ...d5.",
  },

  "1.c4 c5 2.Nc3 Nf6": {
    strategy:
      "Entwickelt den Königsspringer in Richtung Zentrum, wo er d5 und e4 kontrolliert. Nach " +
      "3.Sf3 kann Schwarz mit ...Sc6 spiegeln, mit ...e6, ...b6, ...Lb7 und ...Le7 die " +
      "Igelstellung aufbauen oder mit 3...d5 4.cxd5 Sxd5 zuschlagen. Weiß greift dann mit " +
      "5.d4 oder 5.e4 das Zentrum an oder spielt 5.g3 und überlässt Schwarz mehr Raum im " +
      "Zentrum.",
  },

  "1.c4 c5 2.Nc3 e6": {
    strategy:
      "Öffnet die Diagonale des Läufers f8 und bereitet ...d5 vor, hält aber zugleich die " +
      "Igelstellung mit ...Sf6, ...b6, ...Lb7, ...Le7 und später ...a6 und ...d6 in Reserve. " +
      "Nach ...d5 nimmt das Zentrum stattdessen eine Form wie in der Tarrasch-Verteidigung " +
      "an. Der Preis sind ein Läufer c8, der bis ...b6 eingesperrt bleibt, ein etwas " +
      "schwaches Feld d6 und die Möglichkeit für Weiß, mit 3.Sf3 nebst g3 oder einem frühen " +
      "e4 Raum zu gewinnen.",
  },

  "1.c4 c5 2.Nc3 g6": {
    strategy:
      "Bereitet ...Lg7 vor, dessen lange Diagonale auf d4, c3 und b2 drückt. Nach 3.g3 Lg7 " +
      "4.Lg2 Sc6 ist die Stellung völlig symmetrisch; mit ...Sf6, ...b6 und ...Lb7 statt " +
      "...Sc6 erreicht Schwarz das Doppelfianchetto, einen soliden Aufbau, der schwer zu " +
      "schlagen ist. Weiß kann auch früh mit d4, gestützt durch Sf3 oder e3, das Zentrum " +
      "öffnen, bevor die schwarzen Figuren entwickelt sind.",
  },

  "1.c4 c5 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, von wo der Läufer auf die lange Diagonale und e4 drückt, und hält " +
      "sowohl die Igelstellung mit ...e6 als auch das Doppelfianchetto mit ...g6 in Reserve. " +
      "So früh gespielt, erlaubt der Zug 3.e4, das die Diagonale abstumpft und Raum im " +
      "Zentrum gewinnt, bevor Schwarz den Springer g8 oder den d-Bauern festgelegt hat. " +
      "Korrekt, aber weniger flexibel als ...Sc6 oder ...Sf6.",
  },

  "1.c4 c5 2.Nc3 d6": {
    strategy:
      "Öffnet die Diagonale des Läufers c8 und bereitet ...e5 vor, meist zusammen mit ...Sc6, " +
      "...g6 und ...Lg7. Der Zug ist korrekt, legt aber den d-Bauern vor den Springern fest, " +
      "sodass Weiß frei zwischen einem Fianchetto mit g3 und Lg2 und einem frühen d4 nach Sf3 " +
      "wählen kann. Weniger flexibel als ...Sc6 oder ...Sf6.",
  },

  "1.c4 c5 2.Nc3 d5": {
    strategy:
      "Greift sofort im Zentrum an, doch nach 3.cxd5 kann die Dame nicht zurückschlagen, weil " +
      "Sxd5 sie gewinnt, also braucht Schwarz 3...Sf6. Nach 4.Sf3 Sxd5 kehrt die Partie in " +
      "die Varianten mit 2...Sf6 zurück, doch Weiß kann auch 4.e4 versuchen, worauf 4...Sxe4 " +
      "5.Sxe4 Dxd5 6.Sc3 Schwarz nur einen Bauern für eine Figur lässt. Spielbar, aber " +
      "selten.",
  },

  "1.c4 c5 2.Nc3 e5": {
    strategy:
      "Besetzt das Zentrum mit c- und e-Bauer, lässt aber d5 ohne Bauernkontrolle. Weiß " +
      "spielt g3, Lg2 und Sf3 und kann einen Springer auf d5 postieren, den Schwarz nur mit " +
      "Figuren bekämpfen kann. Spielbar, aber selten bevorzugt.",
  },

  "1.c4 c5 2.Nc3 Na6": {
    strategy:
      "Zielt auf b4 oder c7, doch der Springer am Rand tut nichts für das Zentrum, und ...Sb4 " +
      "wird mit a3 unter Tempogewinn beantwortet. Weiß entwickelt sich mit g3 und Sf3 oder " +
      "gewinnt mit e4 Raum.",
  },

  "1.c4 c5 2.Nc3 Qc7": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel, und 3.Sb5 greift sie sofort an, " +
      "sodass sie erneut ziehen muss und Schwarz in der Entwicklung zurückfällt. ...Sc6 oder " +
      "...Sf6 entwickelt wirkungsvoller.",
  },

  "1.c4 c5 2.Nc3 Qb6": {
    strategy:
      "Greift b2 an, doch der Läufer auf c1 deckt den Bauern, also droht nichts, und 3.Sd5 " +
      "greift die Dame an, sodass sie erneut ziehen muss. Schwarz verliert Zeit, während der " +
      "weiße Springer einen zentralen Posten bezieht.",
  },

  "1.c4 c5 2.Nc3 Qa5": {
    strategy:
      "Richtet sich gegen den Springer auf c3 und den König auf e1, sodass der Springer " +
      "gefesselt ist, sobald der weiße d-Bauer zieht. Nichts hängt, denn die Bauern b2 und d2 " +
      "decken den Springer, und Weiß entwickelt sich mit Sf3 und g3, während die schwarzen " +
      "Leichtfiguren zu Hause bleiben.",
  },

  "1.c4 c5 2.Nc3 Nh6": {
    strategy:
      "Strebt nach f5 oder g4, doch der Springer am Rand tut nichts für das Zentrum, und " +
      "sobald der weiße d-Bauer gezogen hat, verdoppelt Lxh6 gxh6 die schwarzen Bauern. " +
      "...Sf6 oder ...Sc6 entwickelt wirkungsvoller.",
  },

  "1.c4 c5 2.Nc3 a6": {
    strategy:
      "Bereitet ...b5 vor, doch der Hebel funktioniert noch nicht: Nach ...b5 cxb5 axb5 Sxb5 " +
      "hat Weiß einen Bauern gewonnen. Zugleich kommt keine Figur heraus, und Weiß nutzt das " +
      "Tempo für Sf3 und d4 oder für g3 und Lg2.",
  },

  "1.c4 c5 2.Nc3 a5": {
    strategy:
      "Kontrolliert b4 und gewinnt Raum am Damenflügel, entwickelt aber nichts und schwächt " +
      "b5 und b6 dauerhaft. Weiß entwickelt sich mit g3 und Sf3 und besetzt mit d4 oder e4 " +
      "das Zentrum, während die schwarzen Figuren noch zu Hause stehen.",
  },

  "1.c4 c5 2.Nc3 f6": {
    strategy:
      "Bereitet ...e5 vor, nimmt aber dem Springer g8 das Feld f6, schwächt die Diagonale " +
      "e8-h5 und entwickelt nichts. Weiß antwortet mit d4 oder mit g3 und Sf3 und hat das " +
      "freiere Spiel.",
  },

  "1.c4 c5 2.Nc3 f5": {
    strategy:
      "Kontrolliert e4 nach holländischer Art, lockert aber ohne jede Entwicklung den " +
      "Königsflügel und öffnet die Diagonale e8-h5. Weiß entwickelt sich mit g3, Lg2 und Sf3 " +
      "und hält d4 oder später den Hebel e4 in der Hinterhand.",
  },

  "1.c4 c5 2.Nc3 h6": {
    strategy:
      "Verhindert ein späteres Lg5, das bei einem weißen d-Bauern auf d2 ohnehin nicht " +
      "möglich ist, und entwickelt nichts. Weiß nutzt das Tempo für Sf3 und d4 oder für g3 " +
      "und Lg2.",
  },

  "1.c4 c5 2.Nc3 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel und bereitet ...h4 vor, entwickelt aber nichts und " +
      "lockert g5 und g6. Weiß setzt im Zentrum mit Sf3 und d4 fort, während die schwarzen " +
      "Figuren noch zu Hause stehen.",
  },

  "1.c4 c5 2.Nc3 b5": {
    strategy:
      "Bietet einen Bauern an, den Weiß mit 3.Sxb5 oder 3.cxb5 einfach nimmt, da nichts b5 " +
      "deckt. Schwarz hat dafür weder einen Entwicklungsvorsprung noch eine andere " +
      "Kompensation.",
  },

  "1.c4 c5 2.Nc3 g5": {
    strategy:
      "Öffnet die lange Diagonale zum Turm h8 und stellt den Bauern auf die Diagonale des " +
      "Läufers c1. Nach 3.d4 cxd4 4.Dxd4 greift die Dame den Turm an, und Lxg5 liegt in der " +
      "Luft, sodass Schwarz den Bauern verliert oder den Königsflügel mit ...f6 weiter " +
      "schwächen muss.",
  },

  "1.c4 c5 2.g3 Nc6": {
    strategy:
      "Entwickelt eine Figur und kontrolliert zugleich d4 und e5, während alle Aufbauten " +
      "offen bleiben. Nach 3.Lg2 kann Schwarz das Fianchetto mit ...g6 und ...Lg7 spiegeln, " +
      "mit ...e5 Raum nehmen oder ...Sf6 und ...e6 anstreben. Der Springer verstellt zudem " +
      "die lange Diagonale, sodass Lg2 keinen Druck auf b7 ausübt und ...b6 mit ...Lb7 später " +
      "möglich bleibt.",
  },

  "1.c4 c5 2.g3 Nf6": {
    strategy:
      "Entwickelt den Königsspringer in Richtung e4 und d5 und hält ...Sc6, ...g6, ...e6 und " +
      "...d5 offen; die Stellung ist dieselbe wie nach 1.c4 Sf6 2.g3 c5. Nach 3.Lg2 kann " +
      "Schwarz das Fianchetto mit ...Sc6 und ...g6 spiegeln oder mit ...d5 ins Zentrum stoßen " +
      "und auf 4.cxd5 mit dem Springer zurückschlagen. Der Springer kontrolliert d4 noch " +
      "nicht, sodass Weiß die Wahl zwischen Sc3, Sf3 und d4 behält.",
  },

  "1.c4 c5 2.g3 e6": {
    strategy:
      "Öffnet den Läufer f8 und hält ...d5, ...Sf6 und ...Sc6 bereit. Schwarz kann einen " +
      "Igel-Aufbau mit ...b6, ...Le7 und ...d6 anstreben und den Läufer c8 entwickeln, sobald " +
      "die lange Diagonale gesichert ist, oder nach Lg2 mit ...d5 ins Zentrum stoßen. Der " +
      "Preis ist eine leichte Enge: Der Läufer c8 bleibt hinter e6 eingesperrt, bis ...b6 ihm " +
      "die lange Diagonale öffnet.",
  },

  "1.c4 c5 2.g3 g6": {
    strategy:
      "Spiegelt den weißen Aufbau: Es folgen ...Lg7, dann ...Sc6, ...Sf6 und ...O-O, wobei " +
      "der Läufer auf der langen Diagonale d4 und b2 anvisiert. Bis der Läufer dort steht, " +
      "ist die Diagonale zum Turm h8 offen, sodass 3.d4 cxd4 4.Dxd4 ihn angreift. 4...Sf6 " +
      "verstellt sie, denn 4...Lg7 kostet nach 5.Dxg7 den Läufer, und ...Sc6 gewinnt danach " +
      "Zeit gegen die Dame.",
  },

  "1.c4 c5 2.g3 Qc7": {
    strategy:
      "Deckt den Bauern c5, kontrolliert e5 und lässt Raum für einen flexiblen Aufbau mit " +
      "...Sc6, ...e6 und ...Sf6. Die Dame legt sich fest, bevor eine Figur entwickelt ist, " +
      "sodass Sc3 mit anschließendem Sb5 gegen sie Zeit gewinnen kann. Das schlichte 2...Sc6 " +
      "erreicht ähnliche Stellungen, ohne die Dame so früh zu zeigen.",
  },

  "1.c4 c5 2.g3 b6": {
    strategy:
      "Bereitet einen Igel- oder Doppelfianchetto-Aufbau mit ...e6, ...Sf6 und ...Le7 oder " +
      "mit ...g6 vor. Das Problem ist die lange Diagonale: Nach 3.Lg2 greift der Läufer den " +
      "Turm a8 an, und 3...Lb7 kostet nach 4.Lxb7 den Läufer, sodass meist zuerst ...Sc6 " +
      "kommen muss. Der Plan ist gesund, aber langsamer als 2...Sc6.",
  },

  "1.c4 c5 2.g3 d6": {
    strategy:
      "Öffnet den Läufer c8 und bereitet ...e5 vor; ...Sc6 und ...g6 oder ...Sf6 " +
      "vervollständigen einen kompakten Aufbau. Die Struktur ist gesund, aber passiv: Der " +
      "Bauer legt sich früh fest, und ...d5 kostet nun ein zusätzliches Tempo, sodass Weiß " +
      "mit Lg2, Sc3, e3 und Sge2 das freiere Spiel erhält.",
  },

  "1.c4 c5 2.g3 d5": {
    strategy:
      "Greift das Zentrum sofort an, und 3.cxd5 stellt Schwarz vor eine Wahl. 3...Dxd5 greift " +
      "den Turm h1 an, ist aber nach 4.Sf3 dem Tempogewinn durch Sc3 ausgesetzt, während " +
      "3...Sf6 4.Lg2 Sxd5 den Bauern zurückgewinnt, wobei Lg2 und Sc3 den Springer unter " +
      "Druck setzen.",
  },

  "1.c4 c5 2.g3 e5": {
    strategy:
      "Besetzt das Zentrum mit c5 und e5 zugleich; die Stellung ist dieselbe wie nach 1.c4 e5 " +
      "2.g3 c5. Ohne Bauern auf c6 oder e6 wird d5 zu einem Loch, auf das Lg2 und Sc3 zielen, " +
      "und Weiß kann mit e3 und Sge2 den Hebel d4 vorbereiten. Gesund, doch Schwarz muss um " +
      "diese Schwäche herum mit ...Sc6, ...g6 und ...Sge7 oder ...Sf6 entwickeln.",
  },

  "1.c4 c5 2.g3 f5": {
    strategy:
      "Nimmt im holländischen Stil e4 ins Visier und lässt sich mit ...Sf6, ...g6 und ...Lg7 " +
      "fortsetzen. Da noch nichts entwickelt ist, lockert der Zug e6 und die Königsstellung, " +
      "und Weiß erhält mit Lg2, Sc3 und Sf3 das freiere Spiel.",
  },

  "1.c4 c5 2.g3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er weder d4 noch e5 umkämpft und erst über ...Sc7 " +
      "oder ...Sb4 ein nützliches Feld findet. Weiß gewinnt mit Lg2, Sc3 und e3 Zeit, während " +
      "der Springer noch unterwegs ist.",
  },

  "1.c4 c5 2.g3 Qb6": {
    strategy:
      "Greift b2 an, doch Lc1 deckt den Bauern, und die exponierte Dame wird zum Ziel: Sc3 " +
      "mit anschließendem Sd5 greift sie mit Tempo an, während Schwarz noch keine Figur " +
      "entwickelt hat.",
  },

  "1.c4 c5 2.g3 Qa5": {
    strategy:
      "Verlässt d8, bevor eine einzige Figur entwickelt ist, und hat kein echtes Ziel: Der " +
      "Turm deckt a2, und der Bauer d2 sperrt die Diagonale nach e1. Weiß entwickelt einfach " +
      "mit Lg2, Sc3 und e3.",
  },

  "1.c4 c5 2.g3 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo er f5 und g4 ins Auge fasst, aber kein " +
      "Zentrumsfeld. Sobald der weiße d-Bauer gezogen hat, beschert Lxh6 gxh6 Schwarz " +
      "Doppelbauern, und ...Sf5 lässt sich mit g4 oder e4 unter Raumgewinn beantworten.",
  },

  "1.c4 c5 2.g3 a6": {
    strategy:
      "Ein abwartender Zug, der ...b5 vorbereitet, aber weder für das Zentrum noch für die " +
      "Entwicklung etwas tut. Weiß baut mit Lg2, Sc3 und e3 ungestört auf.",
  },

  "1.c4 c5 2.g3 a5": {
    strategy:
      "Deckt b4 ein zweites Mal und gewinnt Raum am Damenflügel, tut aber weder für das " +
      "Zentrum noch für die Entwicklung etwas und macht b5 zu einem Loch, das kein schwarzer " +
      "Bauer mehr decken kann. Weiß setzt mit Lg2 und Sc3 fort und hat ein Tempo geschenkt " +
      "bekommen.",
  },

  "1.c4 c5 2.g3 b5": {
    strategy:
      "Bietet einen Bauern an: Nach 3.cxb5 a6 hofft Schwarz auf offene a- und b-Linien wie im " +
      "Wolga-Gambit, doch ohne Zentrumsbauern oder entwickelte Figur hinter dem Gambit " +
      "begegnet Weiß ihm gelassen mit Lg2 und Sc3.",
  },

  "1.c4 c5 2.g3 f6": {
    strategy:
      "Bereitet ...e5 vor, nimmt aber dem Königsspringer das Feld f6 und schwächt e6 und die " +
      "Königsstellung, ohne dass etwas entwickelt ist. Weiß baut mit Lg2 und Sc3 auf oder " +
      "öffnet mit d4 das Zentrum gegen die gelockerte Stellung.",
  },

  "1.c4 c5 2.g3 g5": {
    strategy:
      "Zieht den g-Bauern vor, ohne dass ihn etwas stützt. Die Antwort 3.h4 greift ihn sofort " +
      "an, und 3...h6? 4.hxg5 hxg5 5.Txh8 gewinnt einen Turm; aber auch sonst ist der " +
      "Königsflügel dauerhaft gelockert.",
  },

  "1.c4 c5 2.g3 h6": {
    strategy:
      "Ein abwartender Zug, der weder für das Zentrum noch für die Entwicklung etwas tut; der " +
      "einzige Plan, den er unterstützt, ist ...g5, das den Königsflügel lockert. Weiß " +
      "gewinnt ein Tempo für Lg2, Sc3 und e3.",
  },

  "1.c4 c5 2.g3 h5": {
    strategy:
      "Bereitet ...h4 vor, um g3 anzugreifen und die h-Linie zu öffnen, kostet aber ohne jede " +
      "Entwicklung ein Tempo und schwächt g5. Weiß antwortet mit 3.h4, was die Idee " +
      "unterbindet und den Königsflügel geschlossen hält.",
  },
};
