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
};
