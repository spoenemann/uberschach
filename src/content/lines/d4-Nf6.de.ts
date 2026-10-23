import type { OpeningTexts } from "../book.ts";

// German prose for d4-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.d4 Nf6 2.c4": {
    name: "Indische Verteidigung: Normalvariante",
    strategy:
      "Erobert einen größeren Anteil am Zentrum und kontrolliert d5; es folgen Sc3 und e4 mit " +
      "breitem Bauernzentrum oder ein ruhigeres Sf3. Schwarz wählt dann die Struktur: " +
      "Nimzo-Indisch, Damenindisch oder Bogoljubow-Indisch nach ...e6, Königsindisch oder " +
      "Grünfeld-Indisch nach ...g6 oder Benoni- und altindische Aufbauten. Der Preis ist die " +
      "Menge an Theorie, die Weiß gegen all diese Verteidigungen kennen muss.",
  },

  "1.d4 Nf6 2.Nf3": {
    name: "Indische Verteidigung: Springervariante",
    strategy:
      "Entwickelt den Springer, deckt d4 und e5 und hält c4 in Reserve, bis Schwarz seinen " +
      "Aufbau zeigt. Nach ...d5 oder ...e6 kann Weiß ins Damengambit übergehen oder ein " +
      "ruhigeres System wählen, etwa das London-System mit Lf4, das Colle-System mit e3 und " +
      "Ld3 oder den Torre-Angriff mit Lg5. Der Zug legt sich weniger fest als 2.c4, doch Weiß " +
      "muss die indischen Varianten trotzdem kennen, wenn Schwarz ...g6 spielt und c4 folgt.",
  },

  "1.d4 Nf6 2.Bg5": {
    name: "Trompowsky-Angriff",
    background:
      "Die Eröffnung ist nach Octávio Trompowsky (1897–1984) benannt, einem früheren " +
      "brasilianischen Meister, der sie in den 1930er- und 1940er-Jahren spielte. Karel " +
      "Opočenský spielte sie ebenfalls in den 1930er-Jahren, und sie ist auch als " +
      "Opočenský-Eröffnung bekannt.",
    strategy:
      "Droht Lxf6 mit Doppelbauern für Schwarz und umgeht die umfangreiche indische Theorie " +
      "nach 2.c4. Schwarz hat mehrere Antworten: ...Se4 greift den Läufer an und wird mit " +
      "Lf4, Lh4 oder h4 beantwortet, ...d5 und ...c5 kämpfen um das Zentrum, und ...e6 " +
      "erlaubt der Dame, auf f6 zurückzuschlagen. Der Preis ist ein früher Läuferzug, der " +
      "Zeit kosten kann, und die Doppelbauern bringen Schwarz oft das Läuferpaar ein.",
  },

  "1.d4 Nf6 2.Bf4": {
    name: "Indische Verteidigung: Beschleunigtes London-System",
    background:
      "Das London-System ist nach dem Londoner Turnier von 1922 benannt, in dem es siebenmal " +
      "aufs Brett kam. Der Irisch-Amerikaner James Mason hatte es zuvor als erster Spieler " +
      "von Meisterstärke regelmäßig angewandt, unter anderem in Wien 1882, London 1883 und " +
      "New York 1889.",
    strategy:
      "Entwickelt den Läufer vor e3 außerhalb der Bauernkette, sodass Weiß unabhängig vom " +
      "schwarzen Aufbau mit e3, Sf3, c3 und Sbd2 fortsetzen kann. Ohne den Läufer auf c1 ist " +
      "b2 ungedeckt: Nach ...c5 und e3 greift ...Db6 den Bauern b2 an, was als kritischste " +
      "Fortsetzung gilt. Der Aufbau ist solide und leicht zu erlernen, aber weniger ehrgeizig " +
      "als 2.c4 und lässt Schwarz die freie Wahl der Struktur.",
  },

  "1.d4 Nf6 2.Nc3": {
    strategy:
      "Kontrolliert e4 und d5 und bereitet e4 vor, verstellt aber den c-Bauern, sodass der " +
      "Damengambit-Aufbau mit c4 nicht mehr möglich ist. Nach ...d5 spielt Weiß meist Lg5 " +
      "(Richter-Weressow-Angriff) oder Lf4 (Rapport-Jobava-System). Gesund, aber eine " +
      "Nebenwahl: Der Richter-Weressow-Angriff war auf höchstem Niveau nie sehr populär.",
  },

  "1.d4 Nf6 2.g3": {
    name: "Indische Verteidigung: Tartakower-Angriff",
    strategy:
      "Bereitet Lg2 vor, um Druck auf d5 und die lange Diagonale auszuüben, gefolgt von Sf3, " +
      "O-O und c4 in einem katalanisch anmutenden Aufbau. Weiß entwickelt sich ruhig, doch " +
      "solange kein Bauer auf c4 steht, kann Schwarz mit ...d5 und ...c5 Raum gewinnen. " +
      "Gesund, aber selten und langsamer als 2.c4 oder 2.Sf3.",
  },

  "1.d4 Nf6 2.e3": {
    strategy:
      "Stützt d4 und öffnet dem Läufer f1 den Weg, mit dem Ziel eines Colle-Aufbaus mit Sf3, " +
      "Ld3, c3 und Sbd2, sperrt aber den Läufer auf c1 ein, sofern dieser nicht später nach " +
      "b2 geht. Schwarz erhält mit ...d5, ...e6 oder ...b6 ein bequemes Spiel, da der " +
      "langsame Plan keinen frühen Druck auf das schwarze Zentrum ausübt.",
  },

  "1.d4 Nf6 2.c3": {
    strategy:
      "Stützt d4 für ein ruhiges System mit Sf3, Lf4 oder Lg5, e3 und Sbd2, nimmt aber dem " +
      "Damenspringer das Feld c3, und c4 kostet nun ein zweites Tempo. Gesund, doch Schwarz " +
      "kann seinen Aufbau frei wählen, und Weiß tut wenig im Kampf um e4 und d5.",
  },

  "1.d4 Nf6 2.b3": {
    name: "Baskische Eröffnung",
    strategy:
      "Bereitet Lb2 vor, doch mit dem Bauern auf d4 stützt der Läufer vor allem diesen " +
      "Bauern, bis sich das Zentrum öffnet. Weiß tut derweil wenig im Zentrum, sodass Schwarz " +
      "mit ...d5 und ...e6 Raum gewinnen oder mit ...c5 gegen d4 vorgehen kann. Gesund, aber " +
      "langsamer als 2.c4 oder 2.Sf3.",
  },

  "1.d4 Nf6 2.d5": {
    name: "Indische Verteidigung: Vorstoßvariante",
    strategy:
      "Gewinnt Raum und verhindert ...d5, zieht aber den d-Bauern ein zweites Mal und macht " +
      "ihn zur Zielscheibe. Schwarz antwortet mit ...e6, ...c6 oder ...c5, und nach ...e6 und " +
      "dxe6 fxe6 hat Weiß keinen Bauern mehr im Zentrum.",
  },

  "1.d4 Nf6 2.e4": {
    strategy:
      "Bietet den e-Bauern an: 2...Sxe4 gewinnt ihn, und Weiß muss Kompensation in schneller " +
      "Entwicklung mit Ld3 oder Sc3 suchen. Nach 3.Sc3 Sxc3 4.bxc3 hat Weiß zusätzlich zum " +
      "Minusbauern Doppelbauern auf der c-Linie.",
  },

  "1.d4 Nf6 2.f3": {
    name: "Paleface-Angriff",
    background:
      "Der Name „Paleface Attack“ erscheint 1986 in Eric Schillers Buch über das " +
      "Blackmar-Diemer-Gambit, das Weiß hier meist mit e4 und Sc3 zu erreichen sucht.",
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer g1 das Feld f3 und schwächt den Königsflügel " +
      "einschließlich der Diagonale e1–h4. Nach 2...d5 3.e4 dxe4 4.fxe4 Sxe4 hat Schwarz " +
      "einfach einen Mehrbauern, daher spielt Weiß stattdessen meist 4.Sc3 und gibt den " +
      "Bauern für schnelle Entwicklung.",
  },

  "1.d4 Nf6 2.f4": {
    name: "Canard-Eröffnung",
    strategy:
      "Kontrolliert e5 und strebt einen Stonewall-ähnlichen Aufbau mit Sf3, e3 und Ld3 an, " +
      "verwendet aber einen Zug auf den f-Bauern, der nichts entwickelt und e3, e4 sowie die " +
      "Diagonale e1–h4 schwächt. Schwarz begegnet dem mit ...d5, ...e6 oder ...c5, und der " +
      "Springer auf f6 blickt bereits auf e4, das Loch, das ein solcher Aufbau hinterlässt.",
  },

  "1.d4 Nf6 2.g4": {
    name: "Indische Verteidigung: Gibbins-Weidenhagen-Gambit",
    strategy:
      "Bietet den g-Bauern an: Nach 2...Sxg4 öffnet e3 oder e4 der Dame die Diagonale zum " +
      "Springer auf g4. Schwarz behält den Mehrbauern, indem er den Springer mit ...d6 deckt " +
      "oder zurückzieht, und der weiße Königsflügel bleibt für wenig Gegenwert geschwächt.",
  },

  "1.d4 Nf6 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 vor, lässt aber den b-Bauern ungedeckt: " +
      "Nach ...e6 droht der Läufer f8 mit ...Lxb4+, sodass Weiß einen Zug für a3 oder c3 " +
      "aufwenden oder den Bauern aufgeben muss. Der Zug entwickelt nichts und schwächt den " +
      "Damenflügel.",
  },

  "1.d4 Nf6 2.a3": {
    strategy:
      "Ein abwartender Zug, der ...Lb4+ verhindert und b4 vorbereitet, aber nichts entwickelt " +
      "und um kein Zentrumsfeld kämpft. Schwarz gewinnt Zeit für ...d5, ...e6 und ...c5.",
  },

  "1.d4 Nf6 2.a4": {
    strategy:
      "Kontrolliert b5 und gewinnt etwas Raum am Damenflügel, entwickelt aber nichts und " +
      "schwächt b4. Schwarz baut mit ...d5 und ...e6 das Zentrum auf, während Weiß noch Sf3, " +
      "c4 und Sc3 spielen muss.",
  },

  "1.d4 Nf6 2.h3": {
    strategy:
      "Verhindert ...Sg4 und ein späteres ...Lg4, verwendet aber ein Tempo auf einen " +
      "Randbauern, der weder eine Figur entwickelt noch etwas zum Zentrum beiträgt. Schwarz " +
      "gewinnt mit ...d5 und ...e6 Raum.",
  },

  "1.d4 Nf6 2.h4": {
    strategy:
      "Leitet einen Randbauernvorstoß mit den Ideen Lg5 und h5 ein, entwickelt aber nichts " +
      "und schwächt g4 und den Königsflügel. Schwarz besetzt in aller Ruhe mit ...d5 und " +
      "...e6 das Zentrum.",
  },

  "1.d4 Nf6 2.Nd2": {
    strategy:
      "Verstellt den Läufer auf c1 und nimmt der Dame die Deckung von d4, sodass ...c5 oder " +
      "...e5 einen ungedeckten Bauern angreift. Der Springer zielt auf e4 und c4, doch der " +
      "schwerfällige Aufbau kostet Zeit, die Schwarz im Zentrum nutzt.",
  },

  "1.d4 Nf6 2.Na3": {
    strategy:
      "Stellt den Springer an den Rand, wo er auf c4 und b5 zielt, aber weder d4 noch e4 " +
      "deckt. Weiß verliert Zeit, während Schwarz mit ...d5, ...e6 und ...c5 das Zentrum " +
      "aufbaut.",
  },

  "1.d4 Nf6 2.Nh3": {
    strategy:
      "Strebt über den Rand nach f4, doch dort kann der Springer mit ...e5 oder ...g5 " +
      "vertrieben werden, und bis dahin tut er nichts für das Zentrum. Schwarz baut mit ...d5 " +
      "und ...e6 auf.",
  },

  "1.d4 Nf6 2.Bd2": {
    strategy:
      "Entwickelt den Läufer auf ein passives Feld, wo er dem Damenspringer d2 nimmt und die " +
      "Deckung von d4 durch die Dame verstellt. Lf4 und Lg5 entwickeln denselben Läufer aktiv " +
      "und halten die d-Linie offen.",
  },

  "1.d4 Nf6 2.Be3": {
    strategy:
      "Entwickelt den Läufer vor den e-Bauern, sodass der Läufer f1 eingesperrt bleibt. " +
      "...Sg4 greift ihn sofort an und gewinnt ein Tempo: Weiß muss den Läufer zurückziehen " +
      "oder ihn gegen den Springer hergeben und erhält nach fxe3 Doppelbauern auf der " +
      "e-Linie.",
  },

  "1.d4 Nf6 2.Qd2": {
    strategy:
      "Bringt die Dame zu früh heraus, wo sie den Läufer auf c1 einsperrt, dem Springer d2 " +
      "nimmt und auf nichts zielt. Schwarz entwickelt sich ungehindert mit ...d5, ...e6 und " +
      "...c5.",
  },

  "1.d4 Nf6 2.Qd3": {
    strategy:
      "Entwickelt die Dame vor jeder Leichtfigur und nimmt dem Läufer f1 das Feld d3. Schwarz " +
      "kann sie mit ...d5 und ...Lf5 oder mit ...Sc6 und ...Sb4 bedrängen, und Weiß muss noch " +
      "die ganze Armee entwickeln.",
  },

  "1.d4 Nf6 2.Kd2": {
    strategy:
      "Gibt die Rochade auf und sperrt Dame und Läufer ein. 2...Se4+ zwingt den König sofort " +
      "zu einem weiteren Zug, und im Zentrum findet er keinen sicheren Platz.",
  },

  "1.d4 Nf6 2.Bh6": {
    strategy:
      "Verliert den Läufer für nichts: 2...gxh6 schlägt ihn mit einem Bauern. Die schwarzen " +
      "h-Bauern sind dann doppelt und isoliert, doch eine ganze Figur wiegt das bei Weitem " +
      "auf.",
  },

  "1.d4 Nf6": {
    name: "Indische Verteidigung",
    background:
      "Der Begriff „Indische Verteidigung“ ist erstmals 1884 belegt, bezogen auf die " +
      "Eröffnungen, die der indische Spieler Moheschunder Bannerjee gegen John Cochrane " +
      "spielte, und Savielly Tartakower machte ihn Anfang der 1920er-Jahre populär. Die " +
      "hypermoderne Schule setzte sich in den 1920er-Jahren für diese Verteidigungen ein, " +
      "voll anerkannt wurden sie aber erst, als russische Spieler Ende der 1940er-Jahre " +
      "zeigten, dass sie für Schwarz korrekt sind.",
  },
};
