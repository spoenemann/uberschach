import type { OpeningTexts } from "../book.ts";

// German prose for c4.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.c4 e5": {
    name: "Sizilianisch im Anzuge",
    background:
      "Auch umgekehrtes Sizilianisch genannt, weil es eine Sizilianische Verteidigung mit " +
      "vertauschten Farben ist; Kasparow und Keene nennen es in Batsford Chess Openings " +
      "(1982) „King's English“. Bruce Leverett schrieb in Modern Chess Openings (14. Auflage, " +
      "1999), es liege nahe, die Englische Eröffnung als umgekehrtes Sizilianisch zu " +
      "behandeln, die Ergebnisse seien aber oft überraschend.",
    strategy:
      "Besetzt sofort das Zentrum und kontrolliert d4 und f4, sodass Weiß d4 erst vorbereiten " +
      "muss. Schwarz entwickelt meist mit ...Sf6 und ...Sc6, ergänzt ...Lb4 oder ...g6 nebst " +
      "...Lg7 und spielt ...d5, sobald das gefahrlos möglich ist. Weiß antwortet mit Sc3, g3 " +
      "und Lg2 und kämpft um d5, wo ein vom Bauern c4 gedeckter Springer stark steht.",
  },

  "1.c4 Nf6": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung",
    background:
      "Die häufigste Antwort auf 1.c4; die Encyclopaedia of Chess Openings ordnet ihre " +
      "eigenständigen Abspiele unter A15–A19 ein.",
    strategy:
      "Entwickelt eine Figur und kontrolliert d5 und e4, ohne einen Bauern festzulegen, " +
      "sodass Schwarz den weißen Aufbau abwarten kann. Nach d4 entsteht meist eine Indische " +
      "Verteidigung oder ein Damengambit; vermeidet Weiß d4, führt ein späteres ...c5 oder " +
      "...e5 in die Symmetrievariante oder zu Sizilianisch im Anzuge. Weiß hat auch " +
      "eigenständige Versuche, etwa 2.Sc3 e6 3.e4.",
  },

  "1.c4 c5": {
    name: "Englische Symmetrievariante",
    background:
      "So benannt, weil beide Seiten ihren c-Bauern zwei Felder vorgezogen haben. Neben " +
      "Sizilianisch im Anzuge (1...e5) ist sie eine der großen Gruppen von Verteidigungen " +
      "gegen die Englische Eröffnung; im ECO trägt sie die Schlüssel A30–A39.",
    strategy:
      "Kämpft um d4, so wie der weiße Bauer um d5 kämpft, sodass die Struktur ausgeglichen " +
      "bleibt und das Mehrtempo der wichtigste Trumpf von Weiß ist. Schwarz wählt später " +
      "zwischen dem Igel mit ...e6, ...b6, ...Lb7 und ...d6, dem soliden Aufbau mit ...Sc6, " +
      "...g6 und ...Lg7 und einem frühen ...d5. Für beide Seiten ist der Hebel mit dem " +
      "d-Bauern der entscheidende Moment, denn er öffnet das Zentrum.",
  },

  "1.c4 e6": {
    name: "Englische Eröffnung: Agincourt-Verteidigung",
    strategy:
      "Bereitet ...d5 mit Bauernunterstützung vor, sodass Schwarz auf cxd5 mit ...exd5 ein " +
      "festes Zentrum behält, und hält ...Sf6 und ...Lb4 in Reserve. Weiß antwortet meist " +
      "2.Sc3 oder 2.Sf3, und die Partie geht oft in ein Abgelehntes Damengambit, eine " +
      "Katalanische Eröffnung oder eine Indische Verteidigung über. Der Läufer auf c8 bleibt " +
      "vorerst eingesperrt, der übliche Preis dieses soliden Aufbaus.",
  },

  "1.c4 c6": {
    name: "Englische Eröffnung: Caro-Kann-Verteidigungssystem",
    strategy:
      "Bereitet ...d5 mit einer soliden Bauernkette vor und lässt dem Läufer c8 die " +
      "Möglichkeit, sich vor ...e6 zu entwickeln. Weiß bestimmt den Charakter der Partie: " +
      "2.d4 d5 führt zur Slawischen Verteidigung, 2.e4 d5 zur Caro-Kann-Verteidigung und " +
      "2.Sf3 d5 3.b3 zur Réti-Eröffnung. Der Preis: Der Damenspringer verliert das Feld c6 " +
      "und entwickelt sich oft nach d7, sodass Schwarz eher solide als aktiv spielt.",
  },

  "1.c4 g6": {
    name: "Englische Eröffnung: Great-Snake-Variante",
    strategy:
      "Bereitet ...Lg7 auf der langen Diagonale vor und schiebt jede Entscheidung im Zentrum " +
      "auf. Mit ...Sf6 kann eine Königsindische (...d6) oder eine Grünfeld-Verteidigung " +
      "(...d5) entstehen, ohne ...Sf6 eine Moderne Verteidigung, mit ...c5 oder ...e5 die " +
      "Symmetrievariante oder Sizilianisch im Anzuge. Weiß kann mit 2.e4 oder 2.d4 sofort " +
      "Raum nehmen, sodass Schwarz später gegen das Zentrum vorgehen muss.",
  },

  "1.c4 Nc6": {
    name: "Englische Eröffnung: Anglo-Litauische Variante",
    strategy:
      "Entwickelt eine Figur und bereitet ...e5 vor; nach 2.Sc3 e5 entsteht Sizilianisch im " +
      "Anzuge. Der Springer verstellt den c-Bauern, sodass Aufbauten mit ...c5 und ...c6 " +
      "entfallen, und 2.d4 e5 3.d5 gewinnt Raum mit Tempo. Solide, bietet aber nichts, was " +
      "die Hauptantworten nicht auch bieten.",
  },

  "1.c4 f5": {
    name: "Englische Eröffnung: Anglo-Holländische Verteidigung",
    strategy:
      "Kontrolliert e4 und wird zur Holländischen Verteidigung, wenn Weiß d4 spielt. Schwarz " +
      "erhält scharfes Spiel und Angriffschancen am Königsflügel, schwächt aber die Diagonale " +
      "e8–h5 und das Feld e6. Weiß kann mit 2.Sc3, 2.Sf3 oder 2.g3 auch im Rahmen der " +
      "Englischen Eröffnung bleiben, meist mit einem Läufer auf g2, der um e4 kämpft.",
  },

  "1.c4 d5": {
    name: "Englische Eröffnung: Anglo-Skandinavische Verteidigung",
    background:
      "Gilt als schwächer als die Skandinavische Verteidigung, weil Weiß seinen c-Bauern " +
      "gegen einen schwarzen Zentrumsbauern tauscht. Sie wird selten gespielt, kann aber ins " +
      "Damengambit oder in die Réti-Eröffnung übergehen.",
    strategy:
      "Greift sofort das Zentrum an, doch nach 2.cxd5 hat Weiß zwei Zentrumsbauern gegen " +
      "einen. Das Zurückschlagen kostet Zeit: 2...Dxd5 3.Sc3 vertreibt die Dame, und nach " +
      "2...Sf6 kann der Springer, der auf d5 zurückschlägt, mit Sc3 und e4 gejagt werden.",
  },

  "1.c4 b6": {
    name: "Englische Verteidigung",
    background:
      "Entsteht auch nach 1.d4 e6 2.c4 b6. Der Spieler P. N. Wallis aus Leicester untersuchte " +
      "sie Ende der 1940er- und Anfang der 1950er-Jahre, und die englischen Großmeister Tony " +
      "Miles und Jonathan Speelman haben sie erfolgreich eingesetzt.",
    strategy:
      "Bereitet ...Lb7 und ...e6 vor und kämpft über die lange Diagonale um e4, statt das " +
      "Zentrum zu besetzen. Weiß kann mit d4 und e4 ein breites Zentrum errichten, das " +
      "Schwarz dann mit ...Lb4, ...f5 und manchmal ...Dh4 zu untergraben versucht. " +
      "Zweischneidig: Gelingt das nicht, macht sich der weiße Raumvorteil bemerkbar.",
  },

  "1.c4 d6": {
    strategy:
      "Bereitet ...e5 und ...Sf6 vor und geht nach 2.Sc3 e5 meist in Sizilianisch im Anzuge " +
      "über. Der Zug öffnet dem Läufer c8 den Weg, verstellt aber den Läufer f8 und nimmt " +
      "weniger Raum als sofortiges ...e5, sodass Weiß mit 2.d4 oder 2.e4 das Zentrum " +
      "beanspruchen kann. Solide, aber bescheiden.",
  },

  "1.c4 g5": {
    name: "Englische Eröffnung: Myers-Verteidigung",
    background:
      "Benannt nach Hugh Myers, der sie in Veröffentlichungen und in eigenen Partien vertrat. " +
      "Sie ist als verbesserter Grob-Angriff gedacht, und John L. Watson hält sie in seinem " +
      "1981 bei Batsford erschienenen Buch über die Englische Eröffnung für spielbar.",
    strategy:
      "Gewinnt Raum am Königsflügel und bereitet ...Lg7 vor, der über die lange Diagonale auf " +
      "d4 und b2 zielt. Der Bauer ist ungedeckt: Nach 2.d4 greift ihn der Läufer c1 an, und " +
      "Schwarz deckt ihn mit ...h6 oder opfert ihn mit 2...Lg7 3.Lxg5 c5 gegen d4. Der Zug " +
      "schwächt die dunklen Felder um den schwarzen König, ist aber nicht forciert widerlegt.",
  },

  "1.c4 b5": {
    name: "Englische Eröffnung: Jaenisch-Gambit",
    background:
      "Benannt nach Carl Jaenisch; auch als Halibut-Gambit bekannt. Es kann Schwarz gute " +
      "praktische Chancen bieten, gilt auf professionellem Niveau aber als inkorrekt.",
    strategy:
      "Gibt den b-Bauern für offene Linien: Nach 2.cxb5 a6 hofft Schwarz auf Spiel auf der a- " +
      "und b-Linie. Weiß muss nicht auf a6 schlagen: 3.e4 baut ein Zentrum auf und behält den " +
      "Mehrbauern, sodass die Kompensation nicht ausreicht.",
  },

  "1.c4 Na6": {
    strategy:
      "Ein Randspringer, der kein Zentrumsfeld beansprucht. Weiß baut mit 2.d4 oder 2.e4 das " +
      "Zentrum auf, und Schwarz muss weitere Tempi aufwenden, um den Springer umzuleiten, " +
      "meist über c7.",
  },

  "1.c4 Nh6": {
    strategy:
      "Strebt vom Rand nach f5, doch nach 2.d4 droht bereits Lxh6, und ...gxh6 zerstört die " +
      "Bauern am Königsflügel. Der Springer kostet Zeit, und das Zentrum bleibt Weiß " +
      "überlassen.",
  },

  "1.c4 a6": {
    strategy:
      "Bereitet ...b5 vor, tut aber nichts für Zentrum und Entwicklung. Weiß nimmt mit 2.d4 " +
      "oder 2.e4 Raum oder entwickelt mit Sc3, während Schwarz einen langsamen Zug am " +
      "Damenflügel gemacht hat.",
  },

  "1.c4 a5": {
    strategy:
      "Verhindert b4, ist aber ein langsamer Flankenzug, der b5 dauerhaft schwächt und nichts " +
      "für das Zentrum tut. Weiß besetzt einfach mit Sc3 und e4 oder d4 das Zentrum.",
  },

  "1.c4 f6": {
    strategy:
      "Kontrolliert e5 und g5, nimmt aber dem Springer sein bestes Feld f6 und schwächt die " +
      "Diagonale e8–h5 vor dem König. Der Zug entwickelt nichts, und Weiß besetzt mit 2.d4 " +
      "oder 2.e4 das Zentrum.",
  },

  "1.c4 h6": {
    strategy:
      "Ein Wartezug, der dem weißen Läufer nur das Feld g5 nimmt. Er entwickelt nichts und " +
      "verliert ein Tempo, und Weiß behält mit 2.d4, 2.e4 oder 2.Sc3 alle Möglichkeiten im " +
      "Zentrum.",
  },

  "1.c4 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel, schwächt aber g5 und g6 und tut nichts für Zentrum und " +
      "Entwicklung. Weiß besetzt mit 2.d4 oder 2.e4 das Zentrum.",
  },

  "1.c4": {
    name: "Englische Eröffnung",
    background:
      "Benannt nach Howard Staunton, dem englischen Spieler, der als inoffizieller " +
      "Weltmeister seiner Zeit gilt und den Zug 1843 im Wettkampf gegen Saint-Amant sowie in " +
      "London 1851, dem ersten internationalen Turnier, spielte. Durchgesetzt hat er sich " +
      "erst im 20. Jahrhundert; Botwinnik, Karpow, Kasparow und Carlsen haben ihn in " +
      "Weltmeisterschaftskämpfen eingesetzt.",
  },
};
