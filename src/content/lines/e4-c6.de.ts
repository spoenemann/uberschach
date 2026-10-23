import type { OpeningTexts } from "../book.ts";

// German prose for e4-c6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.e4 c6 2.d4": {
    strategy:
      "Bildet mit zwei Bauern ein Zentrum und lässt Weiß nach 2...d5 die Struktur wählen: " +
      "3.Sc3 oder 3.Sd2 lädt zu ...dxe4 und offenem Figurenspiel ein, 3.e5 gewinnt Raum und " +
      "schließt das Zentrum, und 3.exd5 cxd5 ergibt eine Karlsbader Struktur mit vertauschten " +
      "Farben. Da 2...d5 sofort e4 angreift, muss Weiß den Bauern im nächsten Zug decken, " +
      "vorziehen oder tauschen.",
  },

  "1.e4 c6 2.Nc3": {
    strategy:
      "Deckt e4 mit einem Entwicklungszug und hält den d-Bauern flexibel. Nach 2...d5 kann " +
      "Weiß mit 3.d4 in die Hauptvariante überleiten oder mit 3.Sf3 schnell entwickeln und " +
      "den d-Bauern zurückhalten. Gegen 3.Sf3 ist die Fesselung 3...Lg4 die logischste " +
      "Antwort, und nach 4.h3 Lxf3 5.Dxf3 hat Weiß das Läuferpaar, während Schwarz eine " +
      "solide Stellung behält.",
  },

  "1.e4 c6 2.c4": {
    name: "Caro-Kann-Verteidigung: Beschleunigter Panow-Angriff",
    background:
      "Nach 2...d5 3.exd5 cxd5 4.d4 entsteht durch Zugumstellung der Panow-Botwinnik-Angriff, " +
      "benannt nach Wassili Panow und Weltmeister Michail Botwinnik, der sonst mit 2.d4 d5 " +
      "3.exd5 cxd5 4.c4 beginnt. Die Stellung nach 2.c4 kann auch aus der Englischen " +
      "Eröffnung entstehen, nach 1.c4 c6 2.e4.",
    strategy:
      "Kontrolliert das Feld d5 schon im Voraus, sodass Weiß 2...d5 mit einem Abtausch auf d5 " +
      "beantworten kann. Nach 3.exd5 cxd5 4.d4 erhält Weiß typischerweise Stellungen mit " +
      "isoliertem Damenbauern, während 4.cxd5 Sf6 5.Sc3 Sxd5 stattdessen auf offene Linien " +
      "und schnelle Entwicklung zielt. Schwarz kann diesen Strukturen auch mit 2...e5 " +
      "ausweichen, einer eigenständigen Fortsetzung.",
  },

  "1.e4 c6 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer und hält nach 2...d5 mehrere Pläne offen: 3.Sc3 führt " +
      "zur selben Stellung wie 2.Sc3 d5 3.Sf3, 3.d3 leitet in die ruhigen Varianten nach 2.d3 " +
      "über, und 3.exd5 cxd5 4.Se5 stellt Schwarz Fallen. Anders als 2.Sc3 lässt der Zug e4 " +
      "ungedeckt, sodass Weiß sich im nächsten Zug für einen dieser Pläne entscheiden muss.",
  },

  "1.e4 c6 2.d3": {
    name: "Caro-Kann-Verteidigung: Breyer-Variante",
    background:
      "Weiß antwortet auf 2...d5 häufiger mit 3.Sd2, doch die damenlose Variante 3.Sf3 dxe4 " +
      "4.dxe4 Dxd1+ 5.Kxd1 fand im 21. Jahrhundert zunehmend Beachtung.",
    strategy:
      "Stützt e4 mit einem Bauern und bereitet einen ruhigen Aufbau mit Sd2, Sgf3 sowie g3 " +
      "oder Le2 vor. Nach 2...d5 3.Sd2 dxe4 4.dxe4 sperrt der Springer die d-Linie, sodass " +
      "die Damen auf dem Brett bleiben. Der Zug ist solide, aber wenig ehrgeizig, da Weiß den " +
      "Kampf um d4 aufschiebt.",
  },

  "1.e4 c6 2.c3": {
    strategy:
      "Bereitet d4 mit Bauernunterstützung vor. Nach 2...d5 kann Weiß mit 3.exd5 cxd5 4.d4 " +
      "Stellungen vom Typ der Abtauschvariante oder mit 3.e5 nebst d4 solche vom Typ der " +
      "Vorstoßvariante anstreben. Der Zug ist solide, aber selten: Er nimmt dem Damenspringer " +
      "das Feld c3, von dem aus er e4 decken könnte.",
  },

  "1.e4 c6 2.g3": {
    strategy:
      "Bereitet Lg2 vor und hält d4 und Sc3 in Reserve. Der Zug ist solide, aber langsam: " +
      "Nach 2...d5 verlangt der Bauer e4 sofort eine Antwort, und der Läufer auf g2 wirkt " +
      "erst ins Zentrum, wenn dieser Bauer getauscht oder vorgerückt ist.",
  },

  "1.e4 c6 2.b3": {
    name: "Caro-Kann-Verteidigung: Euwe-Angriff",
    background:
      "Max Euwe gewann damit im Juni 1920 in Amsterdam die dritte Partie seines Wettkampfs " +
      "gegen Richard Réti.",
    strategy:
      "Bereitet Lb2 auf der langen Diagonale vor und überlässt Schwarz im hypermodernen Sinne " +
      "das Zentrum. Nach 2...d5 3.exd5 cxd5 4.Lb2 behält Schwarz einen Bauern auf d5 und " +
      "entwickelt sich frei, während Weiß nur hoffen kann, das Zentrum später zu untergraben.",
  },

  "1.e4 c6 2.f3": {
    strategy:
      "Stützt e4 mit einem Bauern, nimmt aber dem Königsspringer das Feld f3 und schwächt die " +
      "Diagonalen e1–h4 und a7–g1. Nach 2...d5 3.d4 entsteht durch Zugumstellung die " +
      "Fantasy-Variante, doch das frühe f3 erlaubt auch 2...e5 mit Blick auf die dunklen " +
      "Felder um den weißen König.",
  },

  "1.e4 c6 2.e5": {
    strategy:
      "Schiebt den e-Bauern vor, bevor d4 ihn stützen kann. Schwarz kann mit 2...d5 3.d4 die " +
      "Vorstoßvariante erreichen, doch 2...d6 greift den Bauern sofort an, und Weiß hat nur " +
      "dann Raum gewonnen, wenn Schwarz es zulässt.",
  },

  "1.e4 c6 2.Ne2": {
    name: "Caro-Kann-Verteidigung: Böhmischer Angriff",
    strategy:
      "Sperrt den Läufer f1 ein und deckt e4 nicht, sodass 2...d5 den Bauern sofort angreift. " +
      "Der Springer kontrolliert d4 und kann gegen ...Lf5 nach g3 gehen, doch Weiß entwickelt " +
      "sich langsamer als nach 2.Sc3 oder 2.Sf3.",
  },

  "1.e4 c6 2.Be2": {
    strategy:
      "Ein langsamer Entwicklungszug, der weder e4 stützt noch d4 vorbereitet und der Dame " +
      "und dem Springer g1 das Feld e2 nimmt. Schwarz besetzt mit 2...d5 das Zentrum, und der " +
      "Läufer auf e2 hat dem nichts entgegenzusetzen.",
  },

  "1.e4 c6 2.Bd3": {
    strategy:
      "Deckt e4, blockiert aber den Bauern d2, sodass d4 erst möglich ist, wenn der Läufer " +
      "wieder zieht. Schwarz besetzt mit 2...d5 das Zentrum, und nach ...dxe4 Lxe4 greift " +
      "...Sf6 den Läufer mit Tempogewinn an.",
  },

  "1.e4 c6 2.Bc4": {
    name: "Caro-Kann-Verteidigung: Hillbilly-Angriff",
    background:
      "Simon Williams schreibt den Namen dem National Master Jack Young zu, der damit " +
      "angeblich den ungeschliffenen Charakter des Zuges beschreiben wollte und für sich " +
      "beanspruchte, ihn 1988 erfunden zu haben. Zur Überraschungswaffe im Online-Blitzschach " +
      "wurde er durch das von Williams propagierte Gambit 3.Lb3 nach 2...d5.",
    strategy:
      "Zielt auf f7, doch 2...d5 greift den Läufer an, und nach 3.exd5 cxd5 muss er erneut " +
      "ziehen und verliert Zeit. Weiß erhält für das Tempo keine dauerhafte Initiative, und " +
      "Schwarz besetzt das Zentrum.",
  },

  "1.e4 c6 2.g4": {
    name: "Caro-Kann-Verteidigung: Spike-Variante",
    strategy:
      "Rückt am Königsflügel vor, ohne eine Figur zu entwickeln, und lässt f3 und h3 ohne " +
      "Bauernschutz. Schwarz greift mit 2...d5 den Bauern e4 an, und der Bauer g4 wird zum " +
      "Ziel für den Läufer c8 und für ...h5.",
  },

  "1.e4 c6 2.b4": {
    name: "Caro-Kann-Verteidigung: Labahn-Angriff",
    strategy:
      "Gewinnt Raum am Damenflügel, ohne zu entwickeln, und lässt den Bauern b4 ungedeckt. " +
      "Schwarz besetzt mit ...d5 das Zentrum und kann den Bauern mit ...a5 oder mit ...e5 " +
      "nebst ...Lxb4 bedrängen.",
  },

  "1.e4 c6 2.f4": {
    strategy:
      "Gewinnt Raum am Königsflügel und bereitet Sf3 und e5 vor, schwächt aber die Diagonale " +
      "e1–h4 und das Feld e3. Für e4 tut der Zug nichts, sodass 2...d5 einen ungedeckten " +
      "Bauern angreift und Schwarz sich leicht entwickelt.",
  },

  "1.e4 c6 2.Qf3": {
    strategy:
      "Deckt e4, nimmt aber dem Königsspringer das Feld f3 und stellt die Dame früh heraus. " +
      "Nach 2...d5 kann der Läufer c8 die Dame von g4 aus angreifen, sodass Schwarz sich mit " +
      "Tempogewinn entwickelt.",
  },

  "1.e4 c6 2.Qe2": {
    strategy:
      "Deckt e4, sperrt aber den Läufer f1 ein und nimmt dem Königsspringer das Feld e2, " +
      "während d4 unvorbereitet bleibt. Schwarz besetzt mit 2...d5 das Zentrum und entwickelt " +
      "sich frei.",
  },

  "1.e4 c6 2.Qg4": {
    strategy:
      "Verliert Zeit: Nach 2...d5 greift der Läufer c8 die Dame an, die zurückweichen muss, " +
      "und 3.exd5? verliert sie sogar durch 3...Lxg4. Schwarz erhält das Zentrum und " +
      "entwickelt sich mit Tempogewinn.",
  },

  "1.e4 c6 2.Qh5": {
    strategy:
      "Zielt auf f7, doch die Dame steht exponiert: 2...Sf6 greift sie und den Bauern e4 " +
      "zugleich an, und Schwarz entwickelt sich mit Tempogewinn.",
  },

  "1.e4 c6 2.Nh3": {
    strategy:
      "Entwickelt den Königsspringer an den Rand, wo er weder e4 deckt noch d4 unterstützt. " +
      "Nach 2...d5 greift zudem der Läufer c8 den Springer an, und ...Lxh3 gxh3 würde Weiß " +
      "einen Doppelbauern auf der h-Linie bescheren.",
  },

  "1.e4 c6 2.Na3": {
    strategy:
      "Ein Randspringer, der weder e4 noch d4 hilft. Er strebt nach c4, doch 2...d5 nimmt ihm " +
      "dieses Feld sofort, und Weiß hat ohne Plan Zeit verloren.",
  },

  "1.e4 c6 2.a3": {
    strategy:
      "Ein langsamer Randbauernzug, der weder eine Figur entwickelt noch um das Zentrum " +
      "kämpft. Schwarz gewinnt mit 2...d5 sofort Raum und hat ein Tempo gewonnen.",
  },

  "1.e4 c6 2.a4": {
    strategy:
      "Gewinnt langsam Raum am Damenflügel und schwächt b4, tut aber nichts gegen 2...d5, das " +
      "mit Tempo gegen e4 das Zentrum besetzt.",
  },

  "1.e4 c6 2.h3": {
    strategy:
      "Ein Wartezug, der nur ein späteres ...Lg4 verhindert. Er kostet ein Tempo und tut " +
      "nichts gegen 2...d5, sodass Schwarz das Zentrum besetzt, während Weiß noch nicht " +
      "entwickelt hat.",
  },

  "1.e4 c6 2.h4": {
    strategy:
      "Gewinnt etwas Raum am Königsflügel, entwickelt aber keine Figur und hilft dem Zentrum " +
      "nicht. Schwarz besetzt mit 2...d5 das Zentrum und greift dabei den ungedeckten Bauern " +
      "e4 an, und Weiß liegt ein Tempo zurück.",
  },

  "1.e4 c6 2.Ke2": {
    strategy:
      "Gibt das Rochaderecht endgültig auf und lässt den König im Zentrum, ohne Raum oder " +
      "Entwicklung zu gewinnen. Schwarz spielt 2...d5 und öffnet das Zentrum gegen den " +
      "exponierten König.",
  },

  "1.e4 c6 2.Bb5": {
    strategy: "Stellt den Läufer ein: Der Bauer c6 schlägt ihn einfach mit 2...cxb5.",
  },

  "1.e4 c6 2.Ba6": {
    strategy: "Stellt den Läufer ohne Gegenwert ein: 2...bxa6 oder 2...Sxa6 gewinnt ihn sofort.",
  },

  "1.e4 c6": {
    name: "Caro-Kann-Verteidigung",
    background:
      "Benannt nach dem Engländer Horatio Caro und dem Österreicher Marcus Kann, die sie 1886 " +
      "analysierten. Kann hatte damit im Mai 1885 beim Deutschen Schachkongress in Hamburg " +
      "Jacques Mieses in 24 Zügen besiegt.",
  },
};
