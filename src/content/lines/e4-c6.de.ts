import type { OpeningTexts } from "../book.ts";

// German prose for e4-c6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.e4 c6 2.d4": {
    strategy:
      "Bildet ein Zweibauernzentrum und nimmt am meisten Raum. Schwarz greift mit 2...d5 sofort " +
      "e4 an, und Weiß entscheidet dann über den Charakter der Partie: offenes Figurenspiel, ein " +
      "geschlossenes Zentrum, in dem Weiß den Raumvorteil hält, oder eine ausgeglichene Struktur " +
      "nach dem Abtausch. Der Preis ist ein Zentrum, das Schwarz sofort herausfordert.",
  },

  "1.e4 c6 2.Nc3": {
    strategy:
      "Deckt e4 mit einem Entwicklungszug und hält den d-Bauern flexibel, sodass Weiß noch in " +
      "die Hauptvariante einlenken oder mit den Springern schneller entwickeln kann. Der Preis: " +
      "Der Springer besetzt c3, was einen Aufbau mit dem c-Bauern auf c3 ausschließt.",
  },

  "1.e4 c6 2.c4": {
    name: "Caro-Kann-Verteidigung: Beschleunigter Panow-Angriff",
    background:
      "Nach 2...d5 3.exd5 cxd5 4.d4 entsteht durch Zugumstellung der Panow-Botwinnik-Angriff, " +
      "benannt nach Wassili Panow und Weltmeister Michail Botwinnik, der sonst mit 2.d4 d5 " +
      "3.exd5 cxd5 4.c4 beginnt. Die Stellung nach 2.c4 kann auch aus der Englischen " +
      "Eröffnung entstehen, nach 1.c4 c6 2.e4.",
    strategy:
      "Kontrolliert d5 im Voraus, sodass Weiß 2...d5 durch Abtausch beantworten und dann mit d4 " +
      "im Zentrum zuschlagen kann, auf offenes, aktives Spiel zielend. Der Zug entwickelt keine " +
      "Figur, und Schwarz kann diesen Strukturen ausweichen, indem er das Zentrum anders " +
      "aufbaut.",
  },

  "1.e4 c6 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer zum Zentrum und hält den d-Bauern flexibel, auf schnelle " +
      "Entwicklung zielend. Der Zug lässt e4 vorerst ungedeckt, sodass Weiß nach 2...d5 mit dem " +
      "Angriff darauf umgehen muss, doch der Damenspringer kann sich sein Feld noch aussuchen.",
  },

  "1.e4 c6 2.d3": {
    name: "Caro-Kann-Verteidigung: Breyer-Variante",
    background:
      "Weiß antwortet auf 2...d5 häufiger mit 3.Sd2, doch die damenlose Variante 3.Sf3 dxe4 " +
      "4.dxe4 Dxd1+ 5.Kxd1 fand im 21. Jahrhundert zunehmend Beachtung.",
    strategy:
      "Stützt e4 mit einem Bauern und bereitet ruhige Entwicklung der Figuren vor. Der Zug ist " +
      "solide, aber wenig ehrgeizig: Weiß schiebt den Kampf um d4 auf und strebt ein langsames, " +
      "flexibles Spiel an, in dem die Damen oft auf dem Brett bleiben.",
  },

  "1.e4 c6 2.c3": {
    strategy:
      "Bereitet d4 mit Bauernunterstützung vor. Der Zug ist solide, aber selten: Er nimmt dem " +
      "Damenspringer das Feld c3, von dem aus er e4 decken könnte.",
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
      "Bereitet Lb2 auf der langen Diagonale vor und kämpft aus der Distanz ums Zentrum, statt " +
      "es zu besetzen. Schwarz kann frei ein breites Zentrum aufbauen, und Weiß muss dieses " +
      "Zentrum später untergraben.",
  },

  "1.e4 c6 2.f3": {
    strategy:
      "Stützt e4 mit einem Bauern, nimmt aber dem Königsspringer das Feld f3 und schwächt die " +
      "Diagonalen e1–h4 und a7–g1. Schwarz kann auch 2...e5 antworten, mit Blick auf die dunklen " +
      "Felder um den weißen König.",
  },

  "1.e4 c6 2.e5": {
    strategy:
      "Schiebt den e-Bauern vor, bevor d4 ihn stützen kann, sodass 2...d6 ihn sofort angreift. " +
      "Weiß hat nur dann Raum gewonnen, wenn Schwarz es zulässt.",
  },

  "1.e4 c6 2.Ne2": {
    name: "Caro-Kann-Verteidigung: Böhmischer Angriff",
    strategy:
      "Sperrt den Läufer f1 ein und deckt e4 nicht, sodass 2...d5 den Bauern sofort angreift. " +
      "Der Springer kontrolliert d4 und kann nach g3 umgruppiert werden, doch Weiß entwickelt " +
      "sich langsamer als nach den natürlichen Springerzügen.",
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
      "Rückt am Königsflügel vor, ohne eine Figur zu entwickeln, und schwächt die Felder um den " +
      "König. Schwarz greift mit 2...d5 den Bauern e4 an, und der Bauer g4 wird zum Ziel für den " +
      "Läufer c8 und für ...h5.",
  },

  "1.e4 c6 2.b4": {
    name: "Caro-Kann-Verteidigung: Labahn-Angriff",
    strategy:
      "Gewinnt Raum am Damenflügel, ohne zu entwickeln, und lässt den Bauern b4 ungedeckt. " +
      "Schwarz besetzt sofort das Zentrum und kann den ungeschützten Bauern bedrängen.",
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
      "Schwarz mit einem Bauern zurückschlägt und eine gesunde Struktur behält. Anders als in " +
      "der Französischen Verteidigung wird der Läufer c8 nicht eingesperrt. Der Preis ist das " +
      "Tempo für ...c6, sodass Schwarz in der Entwicklung zurückbleiben kann; die Partie wird " +
      "meist solide und positionell.",
  },

  "1.e4 c6 2.d4 Na6": {
    name: "Caro-Kann-Verteidigung: De-Bruycker-Verteidigung",
    strategy:
      "Strebt über a6 nach c7, wo der Springer d5 und e6 stützt, ohne den Läufer c8 zu " +
      "verstellen. Der Preis ist ein zusätzliches Tempo und ein Springer, der einen Zug lang am " +
      "Rand steht, sodass Weiß in Ruhe das Zentrum aufbaut und einen leichten " +
      "Entwicklungsvorsprung behält.",
  },

  "1.e4 c6 2.d4 Nf6": {
    name: "Caro-Kann-Verteidigung: Masi-Variante",
    strategy:
      "Greift e4 an und lädt Weiß ein, mit e5 den Springer zu vertreiben; ein folgendes c4 jagt " +
      "ihn erneut weiter und gibt Weiß ein breites Zentrum, wobei das bereits gespielte ...c6 " +
      "ein verlorenes Tempo ist. Deckt Weiß e4 stattdessen einfach, wird ...d5 mit e5 " +
      "beantwortet, und Weiß gewinnt erneut Zeit gegen den Springer.",
  },

  "1.e4 c6 2.d4 d6": {
    strategy:
      "Strebt einen kompakten, flexiblen Aufbau mit bereits gespieltem ...c6 an. Der Zug " +
      "überlässt Weiß mehr Raum im Zentrum als ...d5 und lässt Weiß die Wahl, ein breites " +
      "Zentrum aufzubauen oder ruhig zu entwickeln. Solide, aber passiv.",
  },

  "1.e4 c6 2.d4 g6": {
    strategy:
      "Bereitet das Fianchetto des Königsläufers vor und hält die Wahl zwischen einer " +
      "Caro-Kann-Struktur und einem kompakteren Aufbau offen. Solide und flexibel, aber weniger " +
      "direkt als ...d5, und Weiß kann frei ein breites Zentrum aufbauen.",
  },

  "1.e4 c6 2.d4 e6": {
    strategy:
      "Bereitet ...d5 mit einer soliden Bauernkette vor, ...c6 bereits eingeschoben, was d5 " +
      "stützt, aber den Läufer c8 hinter e6 einsperrt. Außerdem fehlt Schwarz der schnelle Hebel " +
      "...c5, der eine solche Kette normalerweise befreit, sodass der Bauer auf c6 ein Tempo " +
      "kostet.",
  },

  "1.e4 c6 2.d4 Qc7": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel; auf c7 nimmt sie e5 ins Visier, tut aber " +
      "nichts für ...d5. Weiß entwickelt sich ungehindert, und sobald der c-Bauer c6 verlässt, " +
      "kann Sb5 die Dame angreifen.",
  },

  "1.e4 c6 2.d4 Qb6": {
    strategy:
      "Greift d4 und b2 nur scheinbar an, denn Dd1 und Lc1 decken sie. Weiß gewinnt Tempi gegen " +
      "die Dame, während ...d5 noch immer nicht gespielt ist.",
  },

  "1.e4 c6 2.d4 Qa5+": {
    strategy:
      "Das Schach bringt nichts: Weiß unterbricht es mit einem Entwicklungs- oder " +
      "Zentrumsstärkenden Zug, und die Dame steht ungedeckt auf a5, während ...d5 noch aussteht.",
  },

  "1.e4 c6 2.d4 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo er zu 3.Lxh6 gxh6 und einer zerrütteten " +
      "Bauernstruktur am Königsflügel einlädt, und tut nichts für das Zentrum. Schwarz behält " +
      "nach dem Tausch das Läuferpaar, doch das weiße Zentrum bleibt unangefochten.",
  },

  "1.e4 c6 2.d4 a6": {
    strategy:
      "Ein Wartezug am Rand, der ...b5 vorbereitet, aber nichts bekämpft. Weiß entwickelt sich " +
      "ungehindert oder gewinnt weiteren Raum, während ...d5 noch aussteht.",
  },

  "1.e4 c6 2.d4 a5": {
    strategy:
      "Verwendet ein Tempo auf den Randbauern, während d4 und e4 unangefochten stehen, und der " +
      "a-Bauer kann b5 nicht mehr von a6 aus decken, ein Loch, sobald der c-Bauer c6 verlässt. " +
      "Weiß baut einfach auf.",
  },

  "1.e4 c6 2.d4 b6": {
    strategy:
      "Bereitet ...Lb7 vor, doch dort beißt der Läufer auf den eigenen Bauern c6, und ...d5 ist " +
      "noch immer nicht gespielt. Weiß entwickelt sich ungehindert, und den Läufer mit ...c5 zu " +
      "befreien kostet Schwarz ein weiteres Tempo.",
  },

  "1.e4 c6 2.d4 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel, bevor das Zentrum geklärt ist, schwächt c6 und c5 und macht " +
      "den b-Bauern zur Zielscheibe für a4. Gegen d4 und e4 geschieht nichts, und Weiß " +
      "entwickelt sich ungehindert.",
  },

  "1.e4 c6 2.d4 e5": {
    strategy:
      "Greift d4 an, bevor die Figuren entwickelt sind. Nach 3.dxe5 gewinnt Schwarz den " +
      "Bauern am direktesten mit ...Da5+ und ...Dxe5 zurück, doch dann ist die Dame Sf3 und " +
      "Lf4 ausgesetzt, während Weiß mit Tempo entwickelt.",
  },

  "1.e4 c6 2.d4 f6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6, schwächt e6 und die Diagonale e8–h5 und kämpft nicht " +
      "um das Zentrum. Weiß baut einfach auf.",
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
      "Verhindert Lg5, ist aber ein reiner Wartezug am Rand. Er kostet Zeit und bekämpft weder " +
      "d4 noch e4, sodass Weiß ungehindert aufbaut, während ...d5 noch wartet.",
  },

  "1.e4 c6 2.d4 h5": {
    strategy:
      "Zieht den Randbauern vor, ohne d4 oder e4 zu bekämpfen, und lockert g5 und g6. Weiß " +
      "entwickelt sich ungehindert, während Schwarz das Zentrum noch klären muss.",
  },

  "1.e4 c6 2.d4 c5": {
    strategy:
      "Zieht denselben Bauern ein zweites Mal und erlaubt Weiß, Raum zu gewinnen oder das " +
      "Zentrum zu öffnen. Schlägt Weiß auf c5, gewinnen ...Da5+ und ...Dxc5 den Bauern zurück, " +
      "aber mit früh herausgebrachter Dame und weißem Entwicklungsvorsprung.",
  },

  "1.e4 c6 2.d4 g5": {
    strategy:
      "Verliert den g-Bauern an 3.Lxg5, denn weder die Dame noch der Läufer f8 deckt ihn, und " +
      "lockert den Königsflügel ohne Gegenwert.",
  },

  "1.e4 c6 2.Nc3 d5": {
    strategy:
      "Greift e4 sofort an, und der Bauer auf c6 deckt d5 bereits, sodass Schwarz dort " +
      "zurückschlagen kann, ohne etwas zu lockern. Schwarz behält eine solide Struktur mit " +
      "freiem weißfeldrigem Läufer, entwickelt sich aber etwas langsamer, weil der c-Bauer schon " +
      "gezogen ist.",
  },

  "1.e4 c6 2.Nc3 Nf6": {
    strategy:
      "Entwickelt eine Figur und greift e4 an, doch der Springer wird zur Zielscheibe für den " +
      "e-Bauern. Nach 3.d4 stößt das natürliche 3...d5 auf 4.e5 mit Zeitgewinn, und 3.e5 Sd5 " +
      "4.Sxd5 cxd5 5.d4 verschafft Weiß sofort mit dem Bauern auf e5 einen Raumvorteil.",
  },

  "1.e4 c6 2.Nc3 d6": {
    strategy:
      "Bereitet ...Sf6 und einen kompakten, flexiblen Aufbau vor, der das Zentrum für mehrere " +
      "Pläne offen hält. Der Zug ist solide, aber passiv: Weiß besetzt das volle Zentrum, bevor " +
      "Schwarz es angreift.",
  },

  "1.e4 c6 2.Nc3 e6": {
    strategy:
      "Bereitet ...d5 bei bereits gespieltem ...c6 vor, ein Aufbau, der d5 stützt, aber den " +
      "Läufer c8 hinter e6 einsperrt. Nach 3.d4 d5 4.e5 strebt Schwarz den Hebel ...c5 gegen die " +
      "weiße Bauernkette an, und der Bauer auf c6 braucht dafür einen zweiten Zug. Solide, doch " +
      "das sofortige 2...d5 hält den Läufer frei.",
  },

  "1.e4 c6 2.Nc3 g6": {
    strategy:
      "Bereitet ...Lg7 bei bereits gespieltem ...c6 vor und lässt Schwarz die Wahl zwischen " +
      "einem soliden Bauernzentrum und einem elastischeren Aufbau. Solide und flexibel, doch " +
      "Weiß erhält mehr Möglichkeiten als nach dem direkten 2...d5.",
  },

  "1.e4 c6 2.Nc3 e5": {
    strategy:
      "Greift ins Zentrum ein, doch ...c6 hat dem Springer b8 sein natürliches Feld genommen, " +
      "und e5 bleibt ohne Stütze. Nach 3.Sf3 muss Schwarz meist ein weiteres Tempo für die " +
      "Deckung von e5 aufwenden, denn 3...d5 4.exd5 cxd5 5.Sxe5 kostet einen Bauern.",
  },

  "1.e4 c6 2.Nc3 Qc7": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel; auf c7 unterstützt sie ...e5, tut aber " +
      "nichts für ...d5. Weiß besetzt sofort das Zentrum und baut darauf auf, während Schwarz " +
      "noch alle vier Leichtfiguren entwickeln muss.",
  },

  "1.e4 c6 2.Nc3 Qb6": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel und zielt auf b2, das der Läufer c1 " +
      "deckt. Weiß gewinnt Zeit gegen die Dame, indem er sie mit dem a-Bauern oder dem Springer " +
      "angreift.",
  },

  "1.e4 c6 2.Nc3 Qa5": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel und zielt auf den Springer c3, den b- und " +
      "d-Bauer decken. Nach 3.d4 ist der Springer zwar gefesselt, doch Ld2 kann die Fesselung " +
      "jederzeit aufheben, und Weiß baut das Zentrum weiter aus, während die Dame nichts " +
      "angreift.",
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
      "bxa6 verschafft Schwarz sofort einen Doppelbauern auf der a-Linie, kostet Weiß aber das " +
      "Läuferpaar, und Weiß kann auch das Zentrum besetzen, während der Springer noch unterwegs " +
      "ist.",
  },

  "1.e4 c6 2.Nc3 a6": {
    strategy:
      "Ein Wartezug, der ...b5 vorbereitet, aber nichts entwickelt und e4 nicht angreift. Weiß " +
      "besetzt sofort das Zentrum und entwickelt sich ungehindert, während ...d5 noch aussteht.",
  },

  "1.e4 c6 2.Nc3 a5": {
    strategy:
      "Verwendet ein Tempo auf den Randbauern und tut weder etwas gegen e4 noch für ...d5. Weiß " +
      "besetzt sofort das Zentrum und entwickelt sich ungehindert.",
  },

  "1.e4 c6 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, doch der Bauer c6 versperrt diesem Läufer die Diagonale, sodass das " +
      "Fianchetto kaum ein Ziel hat. Der Zug kostet ein Tempo, während Weiß das Zentrum besetzt.",
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
      "e8–h5, sodass Dh5+ jederzeit möglich ist. Weiß entwickelt sich ungehindert und zielt auf " +
      "die geschwächte Diagonale a2–g8.",
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
      "Zieht den Randbauern vor, ohne e4 anzugreifen, und lockert g5 und g6. Weiß besetzt sofort " +
      "das Zentrum und entwickelt sich ungehindert.",
  },

  "1.e4 c6 2.Nc3 c5": {
    strategy:
      "Zieht den c-Bauern ein zweites Mal und erreicht die Stellung nach 1.e4 c5 2.Sc3, jedoch " +
      "mit Weiß am Zug, sodass Schwarz ein ganzes Tempo verloren hat. Weiß kann sich entwickeln " +
      "und mit d4 das Zentrum öffnen, und zwar einen Zug voraus.",
  },

  "1.e4 c6 2.Nc3 f5": {
    strategy:
      "Gibt einen Bauern her: Nach 3.exf5 kann nichts auf f5 zurückschlagen, und 3...d5? " +
      "scheitert an 4.Dh5+ g6 5.fxg6. Nach 3...Sf6 kann Weiß den Mehrbauern mit 4.g4 " +
      "behaupten.",
  },

  "1.e4 c6 2.c4 d5": {
    strategy:
      "Greift den Bauern e4 sofort an, der thematische Caro-Kann-Hebel, bevor Weiß das Zentrum " +
      "stützen kann. Der Preis: Weiß darf die Struktur wählen, entweder einen isolierten " +
      "Damenbauern mit schneller Entwicklung und Angriffschancen oder einen Bauerntausch auf d5, " +
      "der Weiß den isolierten d-Bauern lässt.",
  },

  "1.e4 c6 2.c4 d6": {
    strategy:
      "Verschiebt den Hebel ...d5 zugunsten eines kompakten Aufbaus mit Bauern auf c6 und d6. " +
      "Der Zug ist solide, aber passiv: Mit Bauern auf c4, d4 und e4 erhält Weiß einen klaren " +
      "Raumvorteil, und Schwarz muss von hinten aufholen.",
  },

  "1.e4 c6 2.c4 e6": {
    strategy:
      "Bereitet ...d5 mit einer Bauernkette im Stil der Französischen Verteidigung vor. Der Zug " +
      "ist gesund, sperrt aber den Läufer c8 ein, den der Caro-Kann-Aufbau sonst frei hält, und " +
      "der zusätzliche Raum durch den Bauern c4 verschafft Weiß das angenehmere Spiel.",
  },

  "1.e4 c6 2.c4 e5": {
    name: "Caro-Kann-Verteidigung: Beschleunigter Panow-Angriff, Offene Variante",
    strategy:
      "Besetzt das Zentrum mit einem Bauern, statt mit ...d5 gegen e4 vorzugehen. Der Bauer c6 " +
      "nimmt dem Springer das natürliche Feld, daher muss Schwarz e5 gedeckt halten, und weil c4 " +
      "und e4 das Feld d5 kontrollieren, ist der befreiende Hebel ...d5 schwer durchzusetzen. " +
      "Die Stellung bleibt solide, aber passiv.",
  },

  "1.e4 c6 2.c4 g6": {
    strategy:
      "Bereitet das Fianchetto des Königsläufers vor, mit bereits gespieltem ...c6. Der Zug ist " +
      "gesund, überlässt Weiß aber das Zentrum: Mit Bauern auf c4, d4 und e4 hat Weiß einen " +
      "klaren Raumvorteil, und Schwarz muss den richtigen Moment für ...d5 finden.",
  },

  "1.e4 c6 2.c4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, weit weg vom Zentrum, mit Ziel c7 oder b4. Gegen ein " +
      "breites Bauernzentrum unternimmt der Zug nichts, sodass Weiß einfach eines aufbaut, " +
      "während c4 und e4 das Feld d5 im Griff behalten.",
  },

  "1.e4 c6 2.c4 Qc7": {
    strategy:
      "Zielt auf der Diagonale b8–h2 auf e5, bringt die Dame aber heraus, bevor eine Figur " +
      "entwickelt ist. Weiß besetzt das Zentrum in aller Ruhe, und Lf4 kann später mit " +
      "Tempogewinn gegen die Dame folgen.",
  },

  "1.e4 c6 2.c4 Qb6": {
    strategy:
      "Zielt auf b2 und d4, doch b2 ist durch den Läufer c1 gedeckt, sodass nichts droht. Die " +
      "Dame verlässt die Grundreihe, bevor eine Figur entwickelt ist, und Weiß baut bequem ein " +
      "volles Zentrum auf.",
  },

  "1.e4 c6 2.c4 Qa5": {
    strategy:
      "Zielt auf die Diagonale a5–e1 und bereitet ...e5 vor, entwickelt aber nichts. Weiß " +
      "gewinnt beim Entwickeln Zeit, und die Dame bleibt ein Ziel für weitere Tempogewinne, etwa " +
      "durch Ld2.",
  },

  "1.e4 c6 2.c4 Nh6": {
    strategy:
      "Ein Randspringer mit Ziel f5, der d5 unbestritten lässt. Sobald Weiß d4 gespielt hat, " +
      "droht Lxh6 gxh6, was die schwarzen Königsflügelbauern zerrütten würde, sodass Schwarz " +
      "weitere Zeit für den Springer oder den Königsflügel aufwenden muss.",
  },

  "1.e4 c6 2.c4 Nf6": {
    strategy:
      "Greift e4 an, läuft aber in 3.e5, das den Springer vertreibt. Weiß gewinnt Raum und " +
      "Tempi, und die schwarzen Figuren stehen gegenüber einem breiten Zentrum ungeschickt.",
  },

  "1.e4 c6 2.c4 a6": {
    strategy:
      "Bereitet ...b5 gegen den Bauern c4 vor, verwendet aber ein Tempo auf einen Randbauern. " +
      "Weiß errichtet ein breites Zentrum, solange ...d5 noch nicht gespielt ist.",
  },

  "1.e4 c6 2.c4 a5": {
    strategy:
      "Ein Flügelzug, der keinen nützlichen Raum gewinnt und weder das Zentrum noch das Feld d5 " +
      "berührt. Weiß baut auf den Bauern auf, die bereits auf c4 und e4 stehen.",
  },

  "1.e4 c6 2.c4 b6": {
    strategy:
      "Bereitet ...Lb7 vor, doch der Bauer c6 versperrt diesem Läufer die Diagonale nach e4, und " +
      "...d5 muss erst noch gespielt werden. Weiß besetzt unterdessen das Zentrum.",
  },

  "1.e4 c6 2.c4 f6": {
    strategy:
      "Verstellt dem Springer sein natürliches Feld und schwächt e6 sowie die Diagonale zum " +
      "König. Gegen die Bauern c4 und e4 unternimmt der Zug nichts, und Weiß besetzt das " +
      "Zentrum.",
  },

  "1.e4 c6 2.c4 g5": {
    strategy:
      "Lockert den Königsflügel dauerhaft und macht den Bauern zum Angriffsziel: Nach d4 greift " +
      "der Läufer c1 den Bauern g5 an, und ihn mit ...h6 zu halten kostet ein weiteres Tempo " +
      "gegenüber dem vollen weißen Zentrum.",
  },

  "1.e4 c6 2.c4 h6": {
    strategy:
      "Ein vorbeugender Bauernzug, der dem Läufer das Feld g5 nimmt, aber nichts entwickelt und " +
      "d5 unbestritten lässt. Weiß errichtet ein breites Zentrum.",
  },

  "1.e4 c6 2.c4 h5": {
    strategy:
      "Gewinnt Raum am Flügel, schwächt aber g5 und den Königsflügel und entwickelt nichts. Weiß " +
      "behält das Zentrum und entwickelt sich ungestört.",
  },

  "1.e4 c6 2.c4 c5": {
    strategy:
      "Der zweite Schritt des c-Bauern ergibt eine sizilianisch anmutende Struktur, kostet aber " +
      "ein Tempo, und mit c4 und e4 kontrolliert Weiß bereits d5. Eine ruhige Klammerstellung " +
      "folgt mühelos.",
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
      "Greift e4 sofort an, der Kerngedanke der Caro-Kann-Verteidigung: Der Bauer c6 stützt d5, " +
      "sodass Schwarz bei einem Schlagen mit dem c-Bauern wiedernimmt und einen gesunden " +
      "Zentrumsbauern und die halboffene c-Linie behält. Schiebt Weiß stattdessen e5, kann " +
      "Schwarz den weißfeldrigen Läufer entwickeln, bevor er dessen Diagonale schließt. Der " +
      "Preis ist ein Tempo für ...c6, im Gegenzug steht die Struktur solide.",
  },

  "1.e4 c6 2.Nf3 e6": {
    strategy:
      "Stützt ein späteres ...d5, schließt aber die Diagonale des Läufers c8, bevor dieser " +
      "entwickelt ist. Kommt ein weißer Bauer nach e5, bleibt der Läufer hinter einer " +
      "Bauernkette wie in der Französischen Verteidigung eingesperrt. Solide, aber der Zug gibt " +
      "die Kernidee der Caro-Kann-Verteidigung auf, zuerst diesen Läufer zu entwickeln.",
  },

  "1.e4 c6 2.Nf3 Nf6": {
    strategy:
      "Greift e4 an und lädt Weiß ein, mit e5 den Springer zu vertreiben. Schwarz bekommt eine " +
      "solide Stellung, doch Weiß gewinnt Raum, während der Springer umhergejagt wird; der Zug " +
      "ist daher unbequemer als das direkte ...d5.",
  },

  "1.e4 c6 2.Nf3 d6": {
    strategy:
      "Bereitet einen Aufbau mit den Bauern c6 und d6 gegen ein breites weißes Zentrum vor, " +
      "statt es mit ...d5 herauszufordern. Solide und flexibel, aber passiv: Schwarz überlässt " +
      "Weiß Raum und Initiative.",
  },

  "1.e4 c6 2.Nf3 g6": {
    strategy:
      "Bereitet das Fianchetto des Königsläufers vor und will das weiße Zentrum später " +
      "untergraben, statt es jetzt zu bekämpfen. Solide, aber weniger direkt als ...d5, und Weiß " +
      "besetzt das Zentrum ungestört.",
  },

  "1.e4 c6 2.Nf3 c5": {
    strategy:
      "Erreicht die Bauernstruktur der Sizilianischen Verteidigung unter Tempoverlust: Dieselbe " +
      "Stellung mit Schwarz am Zug wäre ein gewöhnlicher Sizilianer, sodass Weiß einen offenen " +
      "Sizilianer hat, in dem Schwarz einen Zug zurückliegt.",
  },

  "1.e4 c6 2.Nf3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, auf dem Weg nach c7, wo er ...d5 stützen würde, kostet " +
      "aber ein Tempo, während ...d5 noch aussteht. Weiß erhält einen Entwicklungsvorsprung und " +
      "mehr Raum im Zentrum.",
  },

  "1.e4 c6 2.Nf3 Qc7": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel; auf c7 blickt sie auf e5, tut aber " +
      "nichts für ...d5. Weiß entwickelt sich mit Tempogewinn und nimmt Raum.",
  },

  "1.e4 c6 2.Nf3 Qb6": {
    strategy:
      "Greift b2 und f2 an, doch der Läufer c1 und der König decken sie, sodass keine Drohung " +
      "besteht. Die Dame wird zur Angriffsfläche, und Weiß entwickelt sich mit Tempo, während " +
      "...d5 noch aussteht.",
  },

  "1.e4 c6 2.Nf3 Qa5": {
    strategy:
      "Fesselt den Bauern d2 an den König, sodass Weiß einen Zug lang nicht d4 spielen kann; " +
      "blockiert Weiß die Diagonale mit einer Figur oder einem Bauern, ist die Fesselung aber " +
      "beendet. Die Dame steht auf a5 exponiert, und Schwarz hat noch immer keinen " +
      "Zentrumsbauern bewegt.",
  },

  "1.e4 c6 2.Nf3 Nh6": {
    strategy:
      "Strebt vom Rand nach f5, doch Weiß öffnet mit d4 die Diagonale c1-h6, und Lxh6 erzwingt " +
      "...gxh6 und zerstört die Bauern am Königsflügel. Zudem meidet der Springer f6, und ...d5 " +
      "steht noch aus.",
  },

  "1.e4 c6 2.Nf3 a6": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauern: Da c6 das Feld b5 bereits deckt, bereitet der " +
      "Zug nur ...b5 vor, das nichts für das Zentrum tut. Weiß gewinnt Raum und entwickelt sich.",
  },

  "1.e4 c6 2.Nf3 a5": {
    strategy:
      "Gewinnt um den Preis eines Tempos Raum am Damenflügel, tut aber nichts für Zentrum " +
      "oder Entwicklung und lässt b6 ohne Bauerndeckung.",
  },

  "1.e4 c6 2.Nf3 b6": {
    strategy:
      "Bereitet ein Fianchetto am Damenflügel vor, doch ein Läufer auf b7 stünde vor dem eigenen " +
      "Bauern c6 und wäre blockiert, und das Zentrum bleibt Weiß überlassen.",
  },

  "1.e4 c6 2.Nf3 b5": {
    strategy:
      "Treibt den b-Bauern vor, bevor das Zentrum geklärt ist: a4 greift ihn sofort an, und " +
      "die Bauern auf b5 und c6 lockern den Damenflügel, ohne der Entwicklung zu helfen.",
  },

  "1.e4 c6 2.Nf3 f6": {
    strategy:
      "Nimmt dem Springer das Feld f6, öffnet die Diagonale e8-h5 und schwächt e6, ohne etwas " +
      "für ...d5 zu tun. Weiß baut in Ruhe ein Zentrum auf, und Schwarz bleibt in der " +
      "Entwicklung zurück.",
  },

  "1.e4 c6 2.Nf3 h6": {
    strategy:
      "Nimmt dem weißen Springer und Läufer das Feld g5, verwendet aber ein Tempo auf einen " +
      "Bauernzug, der nichts für das Zentrum tut. Weiß baut ungehindert ein Zentrum auf.",
  },

  "1.e4 c6 2.Nf3 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel, doch der h-Bauer kann g5 nicht mehr von h6 aus decken, und " +
      "der Zug tut nichts für Entwicklung oder Zentrum. Weiß baut einfach ein Zentrum auf.",
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
      "kann ihn zurückgewinnen, behält aber ein Loch auf e6 und einen rückständigen Bauern e7 " +
      "auf der halboffenen e-Linie.",
  },

  "1.e4 c6 2.Nf3 g5": {
    strategy:
      "Verliert den Bauern an Sxg5, denn nichts deckt ihn, und schwächt f5, h5 und den ganzen " +
      "Königsflügel dauerhaft.",
  },
};
