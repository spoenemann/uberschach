import type { OpeningTexts } from "../book.ts";

// German prose for Nf3-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.Nf3 Nf6 2.c4": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung, Königsspringer-Variante",
    background:
      "Dieselbe Stellung entsteht nach 1.c4 Sf6 2.Sf3. Die Englische Eröffnung ist nach " +
      "Howard Staunton benannt, der 1.c4 im Wettkampf gegen Saint-Amant 1843 und in London " +
      "1851, dem ersten internationalen Turnier, spielte; durchgesetzt hat sie sich aber erst " +
      "im 20. Jahrhundert.",
    strategy:
      "Kontrolliert d5 von der Flanke aus und hält sowohl d4 als auch ein Fianchetto in " +
      "Reserve. Mit d4 wird die Partie zu einem Damengambit oder einer indischen " +
      "Verteidigung: ...e6 führt zum Abgelehnten Damengambit oder zur Damenindischen " +
      "Verteidigung, ...g6 zur Königsindischen oder zur Grünfeld-Verteidigung. Ohne d4 spielt " +
      "Weiß Sc3, g3 und Lg2 in englischen Strukturen, etwa gegen ...c5. Der Bauer besetzt " +
      "noch kein Zentrumsfeld, sodass Schwarz die Verteidigung wählt.",
  },

  "1.Nf3 Nf6 2.g3": {
    background:
      "Ein häufiger Beginn des Königsindischen Angriffs, den Bobby Fischer (vor allem in " +
      "seiner frühen Karriere), Michail Botwinnik, Wassili Smyslow und Tigran Petrosjan alle " +
      "einsetzten. Auf Großmeisterebene kam er in den 1950er-Jahren als Ableger der " +
      "verbreiteten Königsindischen Verteidigung auf, wobei Weiß den schwarzen Aufbau mit " +
      "einem Zusatztempo übernimmt.",
    strategy:
      "Bereitet das Fianchetto Lg2 vor, das über die lange Diagonale auf e4 und d5 wirkt, und " +
      "hält d3, d4 und c4 offen. Weiß setzt meist mit Lg2 und O-O fort und baut dann mit d3 " +
      "und e4 einen Königsindischen Angriff, mit c4 einen Réti- oder englischen Aufbau oder " +
      "mit d4 und c4 eine Katalanische Eröffnung auf. Der Preis ist, dass das Zentrum Schwarz " +
      "überlassen bleibt, der es sofort mit ...d5 besetzen kann.",
  },

  "1.Nf3 Nf6 2.d4": {
    strategy:
      "Besetzt das Zentrum mit einem Bauern und führt zu einer Damenbauernstellung, in der " +
      "der Springer schon auf f3 steht. Schwarz kann mit ...d5 und ...e6 " +
      "Damengambit-Strukturen anstreben, mit ...e6 und ...b6 die Damenindische Verteidigung " +
      "oder mit ...g6 die Königsindische und die Grünfeld-Verteidigung, sobald Weiß c4 folgen " +
      "lässt. Weiß wählt zwischen c4 und ruhigeren Aufbauten mit Lf4 oder e3, doch der frühe " +
      "Springer schließt Systeme mit f3 aus, etwa die Sämisch-Variante gegen die " +
      "Königsindische Verteidigung.",
  },

  "1.Nf3 Nf6 2.b3": {
    name: "Larsen-Eröffnung",
    background:
      "Benannt nach Aron Nimzowitsch, der in den 1920er- und 1930er-Jahren mit 1.b3 " +
      "experimentierte und häufiger die Zugfolge 1.Sf3 d5 2.b3 wählte, und nach Bent Larsen, " +
      "der 1.b3 zwischen 1968 und 1972 häufig spielte.",
    strategy:
      "Bereitet Lb2 vor, der über die lange Diagonale auf e5 und den Springer f6 zielt, und " +
      "hält e3, c4 und d4 offen. Schwarz kann mit ...d5 und ...e6 aufbauen, mit ...g6 die " +
      "Diagonale streitig machen oder mit ...c5 antworten. Der Preis ist ein langsamerer " +
      "Anspruch auf das Zentrum, und die Theorie bewertet die entstehenden Stellungen als " +
      "etwa ausgeglichen.",
  },

  "1.Nf3 Nf6 2.e3": {
    name: "Zukertort-Eröffnung: Ruhiges System",
    strategy:
      "Öffnet den Läufer f1 und unterstützt ein späteres d4, mit Colle-artigen Aufbauten aus " +
      "d4, Ld3 und c3 oder einem Damenflügelfianchetto mit b3 und Lb2 als Ziel. Der Zug ist " +
      "solide, aber langsam, und sobald d4 folgt, sperrt der Bauer e3 den Läufer c1 ein; " +
      "Schwarz gewinnt mit ...d5 und ...c5 Raum oder fianchettiert mit ...b6 oder ...g6.",
  },

  "1.Nf3 Nf6 2.d3": {
    strategy:
      "Unterstützt e4 und öffnet den Läufer c1, mit dem Ziel g3, Lg2, O-O und e4 nach Art des " +
      "Königsindischen Angriffs. Der Zug ist solide, aber bescheiden: Schwarz besetzt mit " +
      "...d5 und ...e5 das Zentrum, und das weiße Spiel bleibt passiv, bis e4 durchgesetzt " +
      "werden kann.",
  },

  "1.Nf3 Nf6 2.c3": {
    strategy:
      "Unterstützt ein späteres d4 und öffnet der Dame die Diagonale d1–a4, entwickelt aber " +
      "nichts und nimmt dem Damenspringer das Feld c3. Schwarz gewinnt mit ...d5 und ...c5 " +
      "Raum oder entwickelt sich mit ...e6 und ...b6, und das langsame c3 setzt den schwarzen " +
      "Aufbau nicht unter Druck.",
  },

  "1.Nf3 Nf6 2.Nc3": {
    strategy:
      "Entwickelt den zweiten Springer und überwacht e4 und d5, ohne einen Bauern " +
      "festzulegen. Er verstellt den c-Bauern, sodass englische Aufbauten mit c4 vorerst " +
      "ausscheiden, und Schwarz besetzt mit ...d5 das Zentrum und kann mit ...d4 den Springer " +
      "vertreiben und weiteren Raum gewinnen.",
  },

  "1.Nf3 Nf6 2.a3": {
    strategy:
      "Bereitet b4 vor und hält einen schwarzen Läufer von b4 fern, tut aber nichts für das " +
      "Zentrum oder die Entwicklung. Schwarz gewinnt mit ...d5 und ...c5 Raum, während Weiß " +
      "noch abwartet.",
  },

  "1.Nf3 Nf6 2.a4": {
    strategy:
      "Gewinnt am Rand Raum auf dem Damenflügel, verbraucht aber ein Tempo für einen " +
      "Bauernzug, der nichts für das Zentrum oder die Entwicklung tut. Schwarz besetzt mit " +
      "...d5 und ...e6 das Zentrum und entwickelt sich ungehindert.",
  },

  "1.Nf3 Nf6 2.b4": {
    strategy:
      "Schiebt den b-Bauern auf ein Feld, auf dem ihn nichts deckt: Nach 2...e6 greift ihn " +
      "der Läufer f8 an, und Weiß muss ein weiteres Tempo für a3, c3 oder b5 aufwenden oder " +
      "ihn nach ...Lxb4 hergeben. Der Vorstoß schwächt außerdem c3 und lockert den " +
      "Damenflügel.",
  },

  "1.Nf3 Nf6 2.h3": {
    strategy:
      "Nimmt einem schwarzen Springer oder Läufer das Feld g4, verbraucht aber ein Tempo für " +
      "einen Randbauernzug, den die Stellung noch nicht verlangt. Schwarz besetzt mit ...d5 " +
      "und ...e6 das Zentrum, während Weiß sich noch entwickeln muss.",
  },

  "1.Nf3 Nf6 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel und bereitet h5 vor, lockert aber den Königsflügel ohne " +
      "konkreten Gewinn und tut nichts für das Zentrum oder die Entwicklung. Schwarz besetzt " +
      "mit ...d5 und ...e6 das Zentrum.",
  },

  "1.Nf3 Nf6 2.Rg1": {
    strategy:
      "Unterstützt ein späteres g4 und g5, gibt aber das Recht zur kurzen Rochade auf und " +
      "stellt den Turm auf eine geschlossene Linie. Schwarz besetzt mit ...d5 das Zentrum, " +
      "während der weiße König in der Mitte bleibt.",
  },

  "1.Nf3 Nf6 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er b5 und c4 ins Auge fasst, aber nichts im " +
      "Zentrum deckt und den a-Bauern blockiert. Schwarz besetzt das Zentrum mit ...d5, womit " +
      "er auch c4 überwacht, und der Springer bleibt außer Spiel.",
  },

  "1.Nf3 Nf6 2.Ng5": {
    strategy:
      "Zieht den Springer ein zweites Mal, um h7 und f7 anzugreifen, die beide gedeckt sind. " +
      "Nach 2...h6 muss er nach f3 oder h3 zurück, und Schwarz gewinnt Zeit für ...d5 und " +
      "...e5.",
  },

  "1.Nf3 Nf6 2.Nh4": {
    strategy:
      "Zieht den Springer ein zweites Mal, an den Rand, wo er f5 und g6 überwacht, aber " +
      "nichts für das Zentrum tut. Schwarz besetzt mit ...d5 und ...e5 das Zentrum, während " +
      "der Springer außer Spiel steht.",
  },

  "1.Nf3 Nf6 2.Ne5": {
    strategy:
      "Zentralisiert den Springer zu früh: 2...d6 greift ihn an und er muss zurück, sodass " +
      "Weiß zwei Züge umsonst aufwendet, während Schwarz Raum im Zentrum gewinnt und dem " +
      "Läufer c8 die Diagonale öffnet.",
  },

  "1.Nf3 Nf6 2.Nd4": {
    strategy:
      "Zentralisiert den Springer, doch ...e5 oder ...c5 greift ihn sofort an und er muss " +
      "zurück, während Schwarz mit Tempo Raum im Zentrum gewinnt.",
  },

  "1.Nf3 Nf6 2.Ng1": {
    strategy:
      "Bringt den Springer auf sein Ausgangsfeld zurück und macht den ersten Zug rückgängig, " +
      "sodass Schwarz mit dem Springer schon auf f6 ein freies Tempo erhält. Schwarz besetzt " +
      "mit ...d5 und ...e6 das Zentrum, während Weiß von vorn beginnen muss.",
  },

  "1.Nf3 Nf6 2.e4": {
    strategy:
      "Lässt den Bauern e4 ungedeckt, sodass 2...Sxe4 ihn gewinnt. Der weiße " +
      "Entwicklungsvorsprung nach De2 oder Sc3 ist eine zweifelhafte Kompensation, und " +
      "Schwarz behält einen Mehrbauern in einer gesunden Stellung.",
  },

  "1.Nf3 Nf6 2.g4": {
    strategy:
      "Stellt einen Bauern ein: Nichts deckt g4, da der Springer f3 die Diagonale der Dame " +
      "verstellt, also gewinnt ihn 2...Sxg4. Tg1 greift dann den Springer an, doch er zieht " +
      "sich einfach zurück, und Schwarz behält den Mehrbauern.",
  },
};
