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

  "1.e4 c6 2.d4 d5": {
    strategy:
      "Greift e4 sofort an, und darin liegt der Sinn des Bauern auf c6: Er stützt d5, sodass " +
      "Schwarz nach einem Abtausch mit einem Bauern zurückschlägt und eine gesunde Struktur " +
      "behält. Der weißfeldrige Läufer kann sich außerhalb der Bauernkette entwickeln, meist " +
      "nach f5 oder g4, bevor ...e6 ihn einsperrt. Der Preis ist das Tempo für ...c6, sodass " +
      "Schwarz in der Entwicklung zurückbleiben kann; Weiß wählt zwischen 3.Sc3 oder 3.Sd2, " +
      "3.e5, 3.exd5 und 3.f3.",
  },

  "1.e4 c6 2.d4 Na6": {
    name: "Caro-Kann-Verteidigung: De-Bruycker-Verteidigung",
    strategy:
      "Strebt über a6 nach c7, wo der Springer d5 und e6 stützt, ohne den Läufer c8 zu " +
      "verstellen. Der Preis ist ein zusätzliches Tempo und ein Springer, der einen Zug lang " +
      "am Rand steht, sodass Weiß sich mit 3.Sc3 und Sf3 ungehindert entwickelt und einen " +
      "leichten Entwicklungsvorsprung behält.",
  },

  "1.e4 c6 2.d4 Nf6": {
    name: "Caro-Kann-Verteidigung: Masi-Variante",
    strategy:
      "Greift e4 an und lädt zu 3.e5 Sd5 ein, worauf 4.c4 den Springer weiter nach c7 oder b6 " +
      "vertreibt und Weiß ein breites Zentrum erhält, ähnlich wie in der " +
      "Aljechin-Verteidigung, nur mit bereits gespieltem ...c6. Deckt Weiß e4 stattdessen mit " +
      "3.Sc3 oder 3.Ld3, gewinnt es nach 3...d5 mit 4.e5 erneut Zeit gegen den Springer.",
  },

  "1.e4 c6 2.d4 d6": {
    strategy:
      "Strebt einen Aufbau wie in der Pirc- oder der Modernen Verteidigung mit bereits " +
      "gespieltem ...c6 an, meist die tschechische Variante der Pirc-Verteidigung, sobald Sc3 " +
      "und ...Sf6 gespielt sind. Der Zug überlässt Weiß mehr Raum im Zentrum als ...d5 und " +
      "lässt Weiß die Wahl zwischen einem breiten Zentrum mit f4 und dem ruhigen Sf3 nebst " +
      "Le2. Solide, aber passiv.",
  },

  "1.e4 c6 2.d4 g6": {
    strategy:
      "Bereitet ...Lg7 und entweder ...d5 oder ...d6 vor. Nach 3.Sc3 d5 entsteht durch " +
      "Zugumstellung direkt die Gurgenidze-Variante, und 3...Lg7 4.Sf3 d6 führt zu einem " +
      "Aufbau wie in der Pirc- oder der Modernen Verteidigung. Solide und flexibel, aber " +
      "weniger direkt als ...d5, und Weiß hat zusätzliche Möglichkeiten wie 3.Sc3 nebst f4.",
  },

  "1.e4 c6 2.d4 e6": {
    strategy:
      "Strebt ...d5 in einem französischen Aufbau mit bereits eingeschobenem ...c6 an, der d5 " +
      "solide stützt, aber den Läufer c8 hinter e6 einsperrt. Außerdem fehlt Schwarz der " +
      "schnelle Hebel ...c5 der Französischen Verteidigung, sodass der Bauer auf c6 in den " +
      "Strukturen der Vorstoß- und der Tarrasch-Variante ein Tempo kostet.",
  },

  "1.e4 c6 2.d4 Qc7": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel; auf c7 nimmt sie e5 ins Visier, tut " +
      "aber nichts für ...d5. Weiß entwickelt sich ungehindert mit Sc3, Sf3 und Ld3, und " +
      "sobald der c-Bauer c6 verlässt, kann Sb5 die Dame angreifen.",
  },

  "1.e4 c6 2.d4 Qb6": {
    strategy:
      "Greift d4 und b2 nur scheinbar an, denn Dd1 und Lc1 decken sie. Weiß gewinnt mit Sc3 " +
      "und Sa4 oder mit c4 und c5 Tempi gegen die Dame, während ...d5 noch immer nicht " +
      "gespielt ist.",
  },

  "1.e4 c6 2.d4 Qa5+": {
    strategy:
      "Das Schach bringt nichts: 3.Sc3, 3.c3 oder 3.Ld2 unterbricht es und entwickelt dabei " +
      "oder stärkt das Zentrum, und die Dame steht ungedeckt auf a5, während ...d5 noch " +
      "aussteht.",
  },

  "1.e4 c6 2.d4 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo er zu 3.Lxh6 gxh6 und einer zerrütteten " +
      "Bauernstruktur am Königsflügel einlädt, und tut nichts für das Zentrum. Schwarz behält " +
      "nach dem Tausch das Läuferpaar, doch das weiße Zentrum bleibt unangefochten.",
  },

  "1.e4 c6 2.d4 a6": {
    strategy:
      "Ein Wartezug am Rand, der ...b5 vorbereitet, aber nichts bekämpft. Weiß entwickelt " +
      "sich ungehindert mit 3.Sc3 und Sf3 oder gewinnt mit 3.c4 weiteren Raum, während ...d5 " +
      "noch aussteht.",
  },

  "1.e4 c6 2.d4 a5": {
    strategy:
      "Verwendet ein Tempo auf den Randbauern, während d4 und e4 unangefochten stehen, und " +
      "der a-Bauer kann b5 nicht mehr von a6 aus decken, ein Loch, sobald der c-Bauer c6 " +
      "verlässt. Weiß entwickelt sich einfach mit Sc3, Sf3 und Ld3.",
  },

  "1.e4 c6 2.d4 b6": {
    strategy:
      "Bereitet ...Lb7 vor, doch dort beißt der Läufer auf den eigenen Bauern c6, und ...d5 " +
      "ist noch immer nicht gespielt. Weiß entwickelt sich ungehindert mit Sc3, Sf3 und Ld3, " +
      "und den Läufer mit ...c5 zu befreien kostet Schwarz ein weiteres Tempo.",
  },

  "1.e4 c6 2.d4 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel, bevor das Zentrum geklärt ist, schwächt c6 und c5 und " +
      "macht den b-Bauern zur Zielscheibe für a4. Gegen d4 und e4 geschieht nichts, und Weiß " +
      "entwickelt sich mit Sc3 und Sf3.",
  },

  "1.e4 c6 2.d4 e5": {
    strategy:
      "Greift d4 an, bevor die Figuren entwickelt sind. Nach 3.dxe5 gewinnt Schwarz den " +
      "Bauern am direktesten mit ...Da5+ und ...Dxe5 zurück, doch dann ist die Dame Sf3 und " +
      "Lf4 ausgesetzt, während Weiß mit Tempo entwickelt.",
  },

  "1.e4 c6 2.d4 f6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6, schwächt e6 und die Diagonale e8–h5 und kämpft " +
      "nicht um das Zentrum. Weiß baut einfach mit Sf3, Ld3 und Sc3 auf.",
  },

  "1.e4 c6 2.d4 f5": {
    name: "Caro-Kann-Verteidigung: Massachusetts-Verteidigung",
    strategy:
      "Schwächt e6, die Diagonale e8–h5 und den Königsflügel, ohne etwas zu entwickeln. Nach " +
      "3.exf5 gewinnt Schwarz den Bauern am direktesten mit ...Da5+ und ...Dxf5 zurück, und " +
      "Sc3 nebst Ld3 gewinnt ein Tempo gegen die Dame; 3.e5 gewinnt einfach Raum.",
  },

  "1.e4 c6 2.d4 h6": {
    strategy:
      "Verhindert Lg5, ist aber ein reiner Wartezug am Rand. Er kostet Zeit und bekämpft " +
      "weder d4 noch e4, sodass Weiß ungehindert mit Sc3 und Sf3 aufbaut, während ...d5 noch " +
      "wartet.",
  },

  "1.e4 c6 2.d4 h5": {
    strategy:
      "Zieht den Randbauern vor, ohne d4 oder e4 zu bekämpfen, und lockert g5 und g6. Weiß " +
      "entwickelt sich mit Sc3, Sf3 und Ld3, während Schwarz das Zentrum noch klären muss.",
  },

  "1.e4 c6 2.d4 c5": {
    strategy:
      "Zieht denselben Bauern ein zweites Mal und erlaubt Weiß, mit 3.d5 Raum zu gewinnen " +
      "oder mit 3.dxc5 das Zentrum zu öffnen, worauf ...Da5+ und ...Dxc5 den Bauern " +
      "zurückgewinnen, aber mit früh herausgebrachter Dame und weißem Entwicklungsvorsprung.",
  },

  "1.e4 c6 2.d4 g5": {
    strategy:
      "Verliert den g-Bauern an 3.Lxg5, denn weder die Dame noch der Läufer f8 deckt ihn, und " +
      "lockert den Königsflügel ohne Gegenwert.",
  },

  "1.e4 c6 2.Nc3 d5": {
    strategy:
      "Greift e4 sofort an, und darin liegt der Sinn des Bauern auf c6. Nach 3.d4 entsteht " +
      "durch Zugumstellung die Hauptvariante, in der meist 3...dxe4 4.Sxe4 folgt. Gegen 3.Sf3 " +
      "ist die Fesselung 3...Lg4 die logischste Antwort, die den weißfeldrigen Läufer vor " +
      "...e6 entwickelt; spielt Schwarz stattdessen wie in der Klassischen Variante 3...dxe4 " +
      "4.Sxe4 Lf5 5.Sg3 Lg6, erhält Weiß einen starken Angriff, der mit 6.h4 beginnt.",
  },

  "1.e4 c6 2.Nc3 Nf6": {
    strategy:
      "Entwickelt eine Figur und greift e4 an, doch der Springer wird zur Zielscheibe für den " +
      "e-Bauern. Nach 3.d4 stößt das natürliche 3...d5 auf 4.e5 mit Zeitgewinn, und 3.e5 Sd5 " +
      "4.Sxd5 cxd5 5.d4 verschafft Weiß sofort mit dem Bauern auf e5 einen Raumvorteil. " +
      "Schwarz kann 3.d4 auch mit 3...d6 beantworten und erreicht so die tschechische " +
      "Variante der Pirc-Ufimzew-Verteidigung.",
  },

  "1.e4 c6 2.Nc3 d6": {
    strategy:
      "Bereitet ...Sf6 und einen Aufbau wie in der Pirc-Ufimzew-Verteidigung mit ...g6 oder " +
      "...e5 vor und hält das Zentrum flexibel. Nach 3.d4 Sf6 entsteht durch Zugumstellung " +
      "die tschechische Variante der Pirc-Ufimzew-Verteidigung, 1.e4 d6 2.d4 Sf6 3.Sc3 c6. " +
      "Der Zug ist solide, aber passiv: Weiß besetzt das volle Zentrum, bevor Schwarz es " +
      "angreift.",
  },

  "1.e4 c6 2.Nc3 e6": {
    strategy:
      "Bereitet ...d5 in einem französischen Aufbau mit bereits gespieltem ...c6 vor, der d5 " +
      "stützt, aber den Läufer c8 hinter e6 einsperrt. Nach 3.d4 d5 4.e5 strebt Schwarz den " +
      "Hebel ...c5 der Französischen Verteidigung an, und der Bauer auf c6 braucht dafür " +
      "einen zweiten Zug. Solide, doch das sofortige 2...d5 hält den Läufer frei.",
  },

  "1.e4 c6 2.Nc3 g6": {
    strategy:
      "Bereitet ...Lg7 bei bereits gespieltem ...c6 vor und hält sowohl ...d5 als auch ...d6 " +
      "offen. Nach 3.d4 d5 entsteht durch Zugumstellung die Gurgenidze-Variante, während " +
      "...d6 stattdessen zu Aufbauten wie in der Modernen oder der Pirc-Ufimzew-Verteidigung " +
      "führt. Solide und flexibel, doch Weiß erhält mehr Möglichkeiten als nach dem direkten " +
      "2...d5.",
  },

  "1.e4 c6 2.Nc3 e5": {
    strategy:
      "Greift ins Zentrum ein und erreicht eine Wiener Partie, in der ...c6 dem Springer b8 " +
      "sein natürliches Feld genommen hat und e5 ohne Stütze bleibt. Nach 3.Sf3 muss Schwarz " +
      "meist ein weiteres Tempo für ...d6 aufwenden, denn 3...d5 4.exd5 cxd5 5.Sxe5 kostet " +
      "einen Bauern.",
  },

  "1.e4 c6 2.Nc3 Qc7": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel; auf c7 unterstützt sie ...e5, tut " +
      "aber nichts für ...d5. Weiß besetzt mit 3.d4 das Zentrum und kann f4 folgen lassen, " +
      "während Schwarz noch alle vier Leichtfiguren entwickeln muss.",
  },

  "1.e4 c6 2.Nc3 Qb6": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel und zielt auf b2, das der Läufer c1 " +
      "deckt. Nach 3.d4 oder 3.Sf3 gewinnt Weiß mit a4 und a5 oder mit Sa4 Zeit gegen die " +
      "Dame.",
  },

  "1.e4 c6 2.Nc3 Qa5": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel und zielt auf den Springer c3, den b- " +
      "und d-Bauer decken. Nach 3.d4 ist der Springer zwar gefesselt, doch Ld2 kann die " +
      "Fesselung jederzeit aufheben, und Weiß baut mit Sf3 oder f4 das Zentrum aus, während " +
      "die Dame nichts angreift.",
  },

  "1.e4 c6 2.Nc3 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, von wo er über f5 auf d4 drücken kann, aber nichts " +
      "gegen e4 unternimmt. Sobald Weiß d4 spielt, kann der Läufer c1 mit Lxh6 gxh6 schlagen " +
      "und Schwarz einen Doppelbauern auf der h-Linie verschaffen, wofür Schwarz allerdings " +
      "das Läuferpaar erhält.",
  },

  "1.e4 c6 2.Nc3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, von wo er nach c7 strebt, um ...d5 zu stützen. 3.Lxa6 " +
      "bxa6 verschafft Schwarz sofort einen Doppelbauern auf der a-Linie, kostet Weiß aber " +
      "das Läuferpaar, und 3.d4 besetzt das Zentrum, während der Springer noch unterwegs ist.",
  },

  "1.e4 c6 2.Nc3 a6": {
    strategy:
      "Ein Wartezug, der ...b5 vorbereitet, aber nichts entwickelt und e4 nicht angreift. " +
      "Weiß besetzt mit 3.d4 das Zentrum und entwickelt sich ungehindert, während ...d5 noch " +
      "aussteht.",
  },

  "1.e4 c6 2.Nc3 a5": {
    strategy:
      "Verwendet ein Tempo auf den Randbauern und tut weder etwas gegen e4 noch für ...d5. " +
      "Weiß besetzt mit 3.d4 das Zentrum und entwickelt sich ungehindert mit Sf3 und Ld3.",
  },

  "1.e4 c6 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, doch der Bauer c6 versperrt diesem Läufer die Diagonale, sodass " +
      "das Fianchetto kaum ein Ziel hat. Der Zug kostet ein Tempo, während 3.d4 das Zentrum " +
      "besetzt.",
  },

  "1.e4 c6 2.Nc3 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel, entwickelt aber nichts, und der Bauer, den der Springer " +
      "c3 schon angreift, bindet den Bauern c6 an seine Deckung. Nach 3.d4 d5 4.exd5 etwa " +
      "verliert 4...cxd5 den b-Bauern an 5.Lxb5+ oder 5.Sxb5.",
  },

  "1.e4 c6 2.Nc3 f6": {
    strategy:
      "Deckt e5, nimmt aber dem Springer g8 sein natürliches Feld f6 und öffnet die Diagonale " +
      "e8–h5, sodass Dh5+ jederzeit möglich ist. Weiß entwickelt sich ungehindert mit 3.d4 " +
      "und Lc4 und zielt auf die geschwächte Diagonale a2–g8.",
  },

  "1.e4 c6 2.Nc3 g5": {
    strategy:
      "Lockert den Königsflügel, ohne etwas zu entwickeln. Nach 3.d4 greift der Läufer c1 den " +
      "Bauern g5 an, sodass Schwarz einen weiteren Zug zu seiner Deckung aufwenden muss, und " +
      "nach 3...h6 gerät er durch 4.h4 erneut unter Beschuss.",
  },

  "1.e4 c6 2.Nc3 h6": {
    strategy:
      "Verwendet ein Tempo auf einen Bauernzug, der einen Läufer aufhält, der g5 noch gar " +
      "nicht erreichen kann, und tut nichts für das Zentrum. 3.d4 gibt Weiß das Zentrum und " +
      "freie Hand.",
  },

  "1.e4 c6 2.Nc3 h5": {
    strategy:
      "Zieht den Randbauern vor, ohne e4 anzugreifen, und lockert g5 und g6. Weiß besetzt mit " +
      "3.d4 das Zentrum und entwickelt sich ungehindert mit Sf3 und Ld3.",
  },

  "1.e4 c6 2.Nc3 c5": {
    strategy:
      "Zieht den c-Bauern ein zweites Mal und erreicht die Stellung der Sizilianischen " +
      "Verteidigung nach 1.e4 c5 2.Sc3, jedoch mit Weiß am Zug, sodass Schwarz ein ganzes " +
      "Tempo verloren hat. Weiß kann mit 3.Sf3 und d4 einen Offenen Sizilianer mit einem Zug " +
      "mehr anstreben.",
  },

  "1.e4 c6 2.Nc3 f5": {
    strategy:
      "Gibt einen Bauern her: Nach 3.exf5 kann nichts auf f5 zurückschlagen, und 3...d5? " +
      "scheitert an 4.Dh5+ g6 5.fxg6. Nach 3...Sf6 kann Weiß den Mehrbauern mit 4.g4 " +
      "behaupten.",
  },

  "1.e4 c6 2.c4 d5": {
    strategy:
      "Greift e4 sofort mit dem thematischen Caro-Kann-Hebel an, bevor Weiß das Zentrum mit " +
      "Sc3 und d4 stützen kann. Nach 3.exd5 cxd5 wählt Weiß zwischen 4.d4, das meist zu " +
      "Stellungen mit einem weißen isolierten Damenbauern führt, und 4.cxd5 Sf6 5.Sc3 Sxd5, " +
      "wobei Schwarz den Bauern zurückgewinnt und der weiße d-Bauer isoliert ist.",
  },

  "1.e4 c6 2.c4 d6": {
    strategy:
      "Verschiebt den Hebel ...d5 zugunsten eines Aufbaus im Stil der Pirc-Verteidigung, in " +
      "dem ...c6 bereits gespielt ist. Der Zug ist solide, aber passiv: Nach 3.d4 geben die " +
      "Bauern c4, d4 und e4 Weiß einen klaren Raumvorteil, und Schwarz muss sich auf ...Sf6 " +
      "und ...g6 oder ...e5 verlassen, um aufzuholen.",
  },

  "1.e4 c6 2.c4 e6": {
    strategy:
      "Bereitet ...d5 mit einer Bauernkette im Stil der Französischen Verteidigung vor: Nach " +
      "3.d4 d5 kann Weiß das Zentrum mit 4.e5 schließen oder auf d5 tauschen. Der Zug ist " +
      "gesund, sperrt aber den Läufer c8 ein, den der Caro-Kann-Aufbau sonst frei hält, und " +
      "der zusätzliche Raum durch den Bauern c4 verschafft Weiß das angenehmere Spiel.",
  },

  "1.e4 c6 2.c4 e5": {
    name: "Caro-Kann-Verteidigung: Beschleunigter Panow-Angriff, Offene Variante",
    strategy:
      "Besetzt das Zentrum mit einem Bauern, statt mit ...d5 gegen e4 vorzugehen. Da der " +
      "Bauer c6 dem Springer das Feld c6 nimmt, zwingt 3.Sf3 Schwarz, e5 zu halten, meist mit " +
      "...d6 oder ...Ld6, und weil c4 und e4 das Feld d5 kontrollieren, ist der befreiende " +
      "Hebel ...d5 schwer durchzusetzen. Die schwarze Stellung bleibt solide, aber passiv.",
  },

  "1.e4 c6 2.c4 g6": {
    strategy:
      "Bereitet ...Lg7 und danach ...d5 oder ...d6 vor, ein Aufbau im Stil der Modernen " +
      "Verteidigung mit bereits gespieltem ...c6. Der Zug ist gesund, überlässt Weiß aber das " +
      "Zentrum: Nach 3.d4 geben die Bauern c4, d4 und e4 einen klaren Raumvorteil, und " +
      "Schwarz muss den richtigen Moment für ...d5 finden.",
  },

  "1.e4 c6 2.c4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, um c7 oder b4 zu erreichen, weit weg vom Zentrum. " +
      "Gegen d4 und ein breites Bauernzentrum unternimmt der Zug nichts, sodass Weiß einfach " +
      "mit d4 und Sc3 aufbaut, während c4 und e4 das Feld d5 im Griff behalten.",
  },

  "1.e4 c6 2.c4 Qc7": {
    strategy:
      "Zielt auf der Diagonale b8–h2 auf e5, bringt die Dame aber heraus, bevor eine Figur " +
      "entwickelt ist. Weiß besetzt mit d4 und Sc3 das Zentrum, und Lf4 kann später mit " +
      "Tempogewinn gegen die Dame folgen.",
  },

  "1.e4 c6 2.c4 Qb6": {
    strategy:
      "Zielt auf b2 und d4, doch b2 ist durch Lc1 gedeckt, sodass nichts droht. Die Dame " +
      "verlässt die Grundreihe, bevor eine Figur entwickelt ist, und Weiß setzt bequem mit " +
      "Sc3 und d4 fort.",
  },

  "1.e4 c6 2.c4 Qa5": {
    strategy:
      "Zielt auf die Diagonale a5–e1 und bereitet ...e5 vor, entwickelt aber nichts. Weiß " +
      "gewinnt mit Sc3 und d4 Zeit, und die Dame bleibt ein Ziel für weitere Tempogewinne, " +
      "etwa durch Ld2.",
  },

  "1.e4 c6 2.c4 Nh6": {
    strategy:
      "Ein Randspringer mit Ziel f5, der d5 unbestritten lässt. Nach d4 droht Weiß Lxh6 gxh6, " +
      "was die schwarzen Königsflügelbauern zerrütten würde, sodass Schwarz weitere Zeit für " +
      "den Springer oder den Königsflügel aufwenden muss.",
  },

  "1.e4 c6 2.c4 Nf6": {
    strategy:
      "Greift e4 an, läuft aber in 3.e5, das den Springer vertreibt. Nach 3...Se4 4.d3 Sc5 " +
      "5.d4 Se6 hat Weiß Raum und Tempi gewonnen, und die schwarzen Figuren stehen gegenüber " +
      "einem breiten Zentrum ungeschickt.",
  },

  "1.e4 c6 2.c4 a6": {
    strategy:
      "Bereitet ...b5 gegen den Bauern c4 vor, verwendet aber ein Tempo auf den Randbauern. " +
      "Weiß antwortet mit d4 und Sc3 und errichtet ein breites Zentrum, solange ...d5 noch " +
      "nicht gespielt ist.",
  },

  "1.e4 c6 2.c4 a5": {
    strategy:
      "Ein Flügelzug, der keinen nützlichen Raum gewinnt und weder das Zentrum noch das Feld " +
      "d5 berührt. Weiß spielt d4 und Sc3 und baut auf den Bauern auf, die bereits auf c4 und " +
      "e4 stehen.",
  },

  "1.e4 c6 2.c4 b6": {
    strategy:
      "Bereitet ...Lb7 vor, doch der Bauer c6 versperrt diesem Läufer die Diagonale nach e4, " +
      "und ...d5 muss erst noch gespielt werden. Weiß spielt unterdessen d4 und Sc3 und " +
      "besetzt das Zentrum.",
  },

  "1.e4 c6 2.c4 f6": {
    strategy:
      "Verstellt dem Springer sein natürliches Feld und schwächt e6 sowie die Diagonale zum " +
      "König. Gegen die Bauern c4 und e4 unternimmt der Zug nichts, und Weiß besetzt mit d4 " +
      "das Zentrum.",
  },

  "1.e4 c6 2.c4 g5": {
    strategy:
      "Lockert den Königsflügel dauerhaft und macht den Bauern zum Angriffsziel: Nach 3.d4 " +
      "greift der Läufer c1 den Bauern g5 an, und ihn mit ...h6 zu halten kostet ein weiteres " +
      "Tempo gegenüber dem vollen weißen Zentrum.",
  },

  "1.e4 c6 2.c4 h6": {
    strategy:
      "Ein vorbeugender Bauernzug, der dem Läufer das Feld g5 nimmt, aber nichts entwickelt " +
      "und d5 unbestritten lässt. Weiß spielt d4 und Sc3 und errichtet ein breites Zentrum.",
  },

  "1.e4 c6 2.c4 h5": {
    strategy:
      "Gewinnt Raum am Flügel, schwächt aber g5 und den Königsflügel und entwickelt nichts. " +
      "Weiß setzt mit d4 und Sc3 fort und behält das Zentrum.",
  },

  "1.e4 c6 2.c4 c5": {
    strategy:
      "Der zweite Schritt des c-Bauern ergibt eine sizilianisch anmutende Struktur, kostet " +
      "aber ein Tempo, und mit c4 und e4 kontrolliert Weiß bereits d5. Sc3 und eine ruhige " +
      "Klammerstellung folgen mühelos.",
  },

  "1.e4 c6 2.c4 b5": {
    strategy:
      "Bietet einen Bauern ohne echte Kompensation an. Nach 3.cxb5 cxb5 4.Lxb5 hat Weiß einen " +
      "sauberen Mehrbauern, und die offene c-Linie sowie ...Lb7 gegen e4 wiegen ihn nicht " +
      "auf.",
  },

  "1.e4 c6 2.c4 f5": {
    strategy:
      "Bietet den f-Bauern für nichts an: 3.exf5 gewinnt ihn einfach, und König und Feld e6 " +
      "bleiben geschwächt, ohne dass Schwarz dafür Entwicklung erhält.",
  },

  "1.e4 c6 2.Nf3 d5": {
    strategy:
      "Greift e4 sofort an, wie in jeder Caro-Kann-Verteidigung: Der Bauer c6 stützt d5, " +
      "sodass Schwarz nach exd5 cxd5 ein gesundes Zentrum und die halboffene c-Linie hat. " +
      "Folgt e5, entwickelt ...Lf5 den weißfeldrigen Läufer, bevor ...e6 die Diagonale " +
      "schließt, und d4 führt dann in die Vorstoßvariante. Gegen exd5 cxd5 Se5, das Fallen " +
      "stellt, ist ...e6 eine solide Antwort, während ...Lf5? nach Lb5+ Ld7 ein Tempo und das " +
      "Läuferpaar kostet.",
  },

  "1.e4 c6 2.Nf3 e6": {
    strategy:
      "Stützt ...d5 ein zweites Mal, schließt aber die Diagonale des Läufers c8, bevor dieser " +
      "entwickelt ist, sodass er nach d4 d5 e5 hinter einer Bauernkette wie in der " +
      "Französischen Verteidigung eingesperrt bleibt. Solide, aber der Zug gibt die Kernidee " +
      "der Caro-Kann-Verteidigung auf, den Läufer vor ...e6 zu entwickeln.",
  },

  "1.e4 c6 2.Nf3 Nf6": {
    strategy:
      "Greift e4 an und lädt zu e5 ein, worauf ...Sd5 eine Struktur wie in der " +
      "Aljechin-Verteidigung ergibt, in der c6 den Springer stützt. Weiß gewinnt mit d4 und " +
      "Lc4 oder c4 Raum, während der Springer umhergejagt wird, sodass der Zug spielbar, aber " +
      "unbequemer als das direkte ...d5 ist.",
  },

  "1.e4 c6 2.Nf3 d6": {
    strategy:
      "Bereitet statt ...d5 einen Aufbau wie in der Pirc-Ufimzew-Verteidigung vor: Nach d4 " +
      "Sf6 Sc3 stehen die Bauern c6 und d6 einem breiten weißen Zentrum gegenüber, und " +
      "Schwarz setzt mit ...g6 oder ...Lg4 fort. Solide und flexibel, aber passiv; Schwarz " +
      "überlässt Weiß Raum und Initiative.",
  },

  "1.e4 c6 2.Nf3 g6": {
    strategy:
      "Bereitet ...Lg7 und einen hypermodernen Aufbau vor, der Weiß mit d4 und Sc3 ein " +
      "Zentrum errichten lässt und es später mit ...d5 untergraben will. Solide, aber weniger " +
      "direkt als ...d5, und Weiß besetzt das Zentrum ungestört.",
  },

  "1.e4 c6 2.Nf3 c5": {
    strategy:
      "Erreicht die Bauernstruktur der Sizilianischen Verteidigung unter Tempoverlust: " +
      "Dieselbe Stellung mit Schwarz am Zug wäre ein gewöhnlicher Sizilianer, sodass Weiß " +
      "nach d4 cxd4 Sxd4 einen offenen Sizilianer hat, in dem Schwarz einen Zug zurückliegt.",
  },

  "1.e4 c6 2.Nf3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, auf dem Weg nach c7, wo er ...d5 stützen würde, " +
      "kostet aber ein Tempo, während ...d5 noch aussteht. Weiß spielt d4 und Sc3 oder Ld3 " +
      "und hat einen Entwicklungsvorsprung und mehr Raum im Zentrum.",
  },

  "1.e4 c6 2.Nf3 Qc7": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel; auf c7 blickt sie auf e5, tut aber " +
      "nichts für ...d5. Weiß antwortet mit d4 und Sc3 und gewinnt Entwicklung und Raum.",
  },

  "1.e4 c6 2.Nf3 Qb6": {
    strategy:
      "Greift b2 und f2 an, doch der Läufer c1 und der König decken sie, sodass keine Drohung " +
      "besteht. Die Dame wird zur Zielscheibe für a4-a5 und Sc3-a4, und Weiß entwickelt sich " +
      "mit Tempo, während ...d5 noch aussteht.",
  },

  "1.e4 c6 2.Nf3 Qa5": {
    strategy:
      "Fesselt den Bauern d2 an den König, sodass d4 einen Zug warten muss, doch Sc3 oder c3 " +
      "schließt die Diagonale, und d4 folgt. Die Dame steht auf a5 exponiert, und Schwarz hat " +
      "noch immer keinen Zentrumsbauern bewegt.",
  },

  "1.e4 c6 2.Nf3 Nh6": {
    strategy:
      "Strebt vom Rand nach f5, doch d4 öffnet die Diagonale c1-h6, und Lxh6 erzwingt ...gxh6 " +
      "und zerstört die Bauern am Königsflügel. Zudem meidet der Springer f6, und ...d5 steht " +
      "noch aus.",
  },

  "1.e4 c6 2.Nf3 a6": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauern: Da c6 das Feld b5 bereits deckt, bereitet " +
      "der Zug nur ...b5 vor, das nichts für das Zentrum tut. Weiß gewinnt mit d4 und Sc3 " +
      "Raum.",
  },

  "1.e4 c6 2.Nf3 a5": {
    strategy:
      "Gewinnt um den Preis eines Tempos Raum am Damenflügel, tut aber nichts für Zentrum " +
      "oder Entwicklung und lässt b6 ohne Bauerndeckung.",
  },

  "1.e4 c6 2.Nf3 b6": {
    strategy:
      "Bereitet ein Fianchetto am Damenflügel vor, doch auf b7 stünde der Läufer vor dem " +
      "eigenen Bauern c6 und wäre blockiert, und das Zentrum bleibt Weiß überlassen. Es " +
      "folgen d4 und Sc3 mit bequemem Vorsprung.",
  },

  "1.e4 c6 2.Nf3 b5": {
    strategy:
      "Treibt den b-Bauern vor, bevor das Zentrum geklärt ist: a4 greift ihn sofort an, und " +
      "die Bauern auf b5 und c6 lockern den Damenflügel, ohne der Entwicklung zu helfen.",
  },

  "1.e4 c6 2.Nf3 f6": {
    strategy:
      "Nimmt dem Springer das Feld f6, öffnet die Diagonale e8-h5 und schwächt e6, ohne etwas " +
      "für ...d5 zu tun. Weiß baut mit d4 und Sc3 ein Zentrum auf, und Schwarz bleibt in der " +
      "Entwicklung zurück.",
  },

  "1.e4 c6 2.Nf3 h6": {
    strategy:
      "Nimmt dem weißen Springer und Läufer das Feld g5, verwendet aber ein Tempo auf einen " +
      "Bauernzug, der nichts für das Zentrum tut. Weiß spielt ungehindert d4 und Sc3.",
  },

  "1.e4 c6 2.Nf3 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel, doch der h-Bauer kann g5 nicht mehr von h6 aus decken, " +
      "und der Zug tut nichts für Entwicklung oder Zentrum. Weiß baut einfach mit d4 und Sc3 " +
      "auf.",
  },

  "1.e4 c6 2.Nf3 e5": {
    strategy:
      "Bietet einen Bauern an, den nichts deckt: Sxe5 schlägt ihn, und Schwarz gewinnt ihn " +
      "mit ...De7 und ...Dxe4+ nur zurück, indem er die Dame früh ins Spiel bringt, was Weiß " +
      "einen Entwicklungsvorsprung verschafft.",
  },

  "1.e4 c6 2.Nf3 f5": {
    strategy:
      "Schwächt e6 und die Diagonale e8-h5 für einen Bauern, den exf5 sofort schlägt. Schwarz " +
      "kann ihn mit ...d5 und ...Lxf5 zurückgewinnen, behält aber ein Loch auf e6 und einen " +
      "rückständigen Bauern e7 auf der halboffenen e-Linie.",
  },

  "1.e4 c6 2.Nf3 g5": {
    strategy:
      "Verliert den Bauern an Sxg5, denn nichts deckt ihn, und schwächt f5, h5 und den ganzen " +
      "Königsflügel dauerhaft.",
  },
};
