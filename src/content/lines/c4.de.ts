import type { OpeningTexts } from "../book.ts";

// German prose for c4.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.c4 e5": {
    strategy:
      "Besetzt sofort das Zentrum und kontrolliert d4 und f4, sodass Weiß d4 nicht leicht " +
      "spielen kann. Weiß hat das Mehrtempo und einen Griff auf d5, wo ein vom Bauern c4 " +
      "gedeckter Springer stark steht, während Schwarz den festen Zentrumsbauern hat.",
  },

  "1.c4 Nf6": {
    strategy:
      "Entwickelt eine Figur und kontrolliert d5 und e4, ohne einen Bauern festzulegen, sodass " +
      "Schwarz abwarten und seinen Aufbau wählen kann, sobald Weiß seinen Plan zeigt. Auch Weiß " +
      "hat die Wahl: ein ruhiges Flankenspiel oder sofort ein breites Bauernzentrum, das Schwarz " +
      "dann angreifen muss.",
  },

  "1.c4 c5": {
    strategy:
      "Kämpft um d4, so wie der weiße Bauer um d5 kämpft, sodass die Struktur ausgeglichen " +
      "bleibt und das Mehrtempo der wichtigste Trumpf von Weiß ist. Beide Seiten können im " +
      "richtigen Moment mit dem d-Bauern vorstoßen, und dieser Hebel prägt die Partie: Er öffnet " +
      "das Zentrum, ohne ihn bleibt es bei langsamem Manövrieren.",
  },

  "1.c4 e6": {
    strategy:
      "Bereitet ...d5 mit Bauernunterstützung vor, sodass Schwarz auf cxd5 mit ...exd5 ein " +
      "festes Zentrum behält, und hält die Entwicklung der schwarzen Figuren flexibel. Der " +
      "Läufer auf c8 bleibt vorerst eingesperrt, der übliche Preis dieses soliden Aufbaus; Weiß " +
      "hat viele Möglichkeiten, den Charakter der Partie zu ändern, deshalb muss Schwarz die " +
      "Zugfolge sorgfältig wählen.",
  },

  "1.c4 c6": {
    strategy:
      "Bereitet ...d5 mit einer soliden Bauernkette vor und lässt dem Läufer c8 die Möglichkeit, " +
      "sich vor ...e6 zu entwickeln. Der Preis: Der Damenspringer verliert das Feld c6 und " +
      "entwickelt sich oft nach d7, sodass Schwarz eher solide als aktiv spielt und Weiß " +
      "bestimmt, wie scharf die Partie wird.",
  },

  "1.c4 g6": {
    strategy:
      "Bereitet ...Lg7 auf der langen Diagonale vor und schiebt jede Entscheidung im Zentrum " +
      "auf. Schwarz kann später noch im Zentrum zuschlagen oder beim Fianchetto-Aufbau bleiben. " +
      "Weiß kann sofort ein großes Zentrum errichten, sodass Schwarz bereit sein muss, es " +
      "anzugreifen.",
  },

  "1.c4 Nc6": {
    name: "Englische Eröffnung: Anglo-Litauische Variante",
    strategy:
      "Entwickelt eine Figur und bereitet ...e5 vor. Der Springer verstellt den c-Bauern, sodass " +
      "Schwarz nicht mit ihm aufbauen kann, und 2.d4 e5 3.d5 gewinnt Raum mit Tempo. Solide, " +
      "bietet aber nichts, was die Hauptantworten nicht auch bieten.",
  },

  "1.c4 f5": {
    name: "Englische Eröffnung: Anglo-Holländische Verteidigung",
    strategy:
      "Kontrolliert e4 und strebt einen Aufbau im holländischen Stil an. Schwarz erhält scharfes " +
      "Spiel und Angriffschancen am Königsflügel, schwächt aber die Diagonale e8–h5 und das Feld " +
      "e6. Weiß kann mit einem Läufer auf g2 um e4 kämpfen.",
  },

  "1.c4 d5": {
    name: "Englische Eröffnung: Anglo-Skandinavische Verteidigung",
    background:
      "Gilt als schwächer als die Skandinavische Verteidigung, weil Weiß seinen c-Bauern " +
      "gegen einen schwarzen Zentrumsbauern tauscht. Sie wird selten gespielt, kann aber ins " +
      "Damengambit oder in die Réti-Eröffnung übergehen.",
    strategy:
      "Greift sofort das Zentrum an, doch nach 2.cxd5 hat Weiß einen Flügelbauern gegen den " +
      "schwarzen Zentrumsbauern getauscht. Das Zurückschlagen kostet Zeit: 2...Dxd5 3.Sc3 " +
      "vertreibt die Dame, und nach 2...Sf6 kann der Springer, der auf d5 zurückschlägt, mit Sc3 " +
      "und e4 gejagt werden.",
  },

  "1.c4 b6": {
    name: "Englische Verteidigung",
    background:
      "Entsteht auch nach 1.d4 e6 2.c4 b6. Der Spieler P. N. Wallis aus Leicester untersuchte " +
      "sie Ende der 1940er- und Anfang der 1950er-Jahre, und die englischen Großmeister Tony " +
      "Miles und Jonathan Speelman haben sie erfolgreich eingesetzt.",
    strategy:
      "Bereitet ...Lb7 vor und kämpft über die lange Diagonale um e4, statt das Zentrum zu " +
      "besetzen. Weiß kann ein breites Bauernzentrum errichten, das Schwarz dann mit " +
      "Bauernvorstößen und Figurendruck zu untergraben versucht. Zweischneidig: Gelingt das " +
      "nicht, macht sich der weiße Raumvorteil bemerkbar.",
  },

  "1.c4 d6": {
    strategy:
      "Bereitet ...e5 vor und öffnet dem Läufer c8 den Weg, verstellt aber den Läufer f8 und " +
      "nimmt weniger Raum als sofortiges ...e5, sodass Weiß sofort das Zentrum beanspruchen " +
      "kann. Solide, aber bescheiden.",
  },

  "1.c4 g5": {
    name: "Englische Eröffnung: Myers-Verteidigung",
    background:
      "Benannt nach Hugh Myers, der sie in Veröffentlichungen und in eigenen Partien vertrat. " +
      "Sie ist als verbesserter Grob-Angriff gedacht, und John L. Watson hält sie in seinem " +
      "1981 bei Batsford erschienenen Buch über die Englische Eröffnung für spielbar.",
    strategy:
      "Gewinnt Raum am Königsflügel und bereitet ...Lg7 vor, der über die lange Diagonale auf d4 " +
      "und b2 zielt. Der Bauer ist ungedeckt: Nach 2.d4 greift ihn der Läufer c1 an, sodass " +
      "Schwarz ihn decken oder als Gambit anbieten muss. Der Zug schwächt die dunklen Felder um " +
      "den schwarzen König, ist aber nicht forciert widerlegt.",
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
      "Ein Randspringer, der kein Zentrumsfeld beansprucht. Weiß baut sofort das Zentrum auf, " +
      "und Schwarz muss weitere Tempi aufwenden, um den Springer umzuleiten, meist über c7.",
  },

  "1.c4 Nh6": {
    strategy:
      "Strebt vom Rand nach f5, doch nach 2.d4 droht bereits Lxh6, und ...gxh6 zerstört die " +
      "Bauern am Königsflügel. Der Springer kostet Zeit, und das Zentrum bleibt Weiß " +
      "überlassen.",
  },

  "1.c4 a6": {
    strategy:
      "Bereitet ...b5 vor, tut aber nichts für Zentrum und Entwicklung. Weiß nimmt einfach Raum " +
      "oder entwickelt sich, während Schwarz einen langsamen Zug am Damenflügel gemacht hat.",
  },

  "1.c4 a5": {
    strategy:
      "Verhindert b4, ist aber ein langsamer Flankenzug, der b5 dauerhaft schwächt und nichts " +
      "für das Zentrum tut. Weiß besetzt einfach das Zentrum.",
  },

  "1.c4 f6": {
    strategy:
      "Kontrolliert e5 und g5, nimmt aber dem Springer sein bestes Feld f6 und schwächt die " +
      "Diagonale e8–h5 vor dem König. Der Zug entwickelt nichts, und Weiß besetzt sofort das " +
      "Zentrum.",
  },

  "1.c4 h6": {
    strategy:
      "Ein Wartezug, der dem weißen Läufer nur das Feld g5 nimmt. Er entwickelt nichts und " +
      "verliert ein Tempo, und Weiß behält alle Möglichkeiten im Zentrum.",
  },

  "1.c4 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel, schwächt aber g5 und g6 und tut nichts für Zentrum und " +
      "Entwicklung. Weiß besetzt sofort das Zentrum.",
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
