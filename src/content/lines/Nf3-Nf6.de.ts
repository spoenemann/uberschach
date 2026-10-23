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

  "1.Nf3 Nf6 2.c4 e6": {
    strategy:
      "Öffnet die Diagonale des Läufers f8 und bereitet ...d5 vor, sodass Schwarz viele " +
      "Aufbauten offenstehen. Nach 3.Sc3 kann der Läufer nach b4 gehen und den Springer unter " +
      "Druck setzen, oder ...d5 folgt; nach 3.g3 d5 4.Lg2 ähnelt die Partie einer " +
      "Katalanischen Eröffnung; und 3.d4 erlaubt das Abgelehnte Damengambit, die " +
      "Damenindische oder die Bogoljubow-Indische Verteidigung. Der Preis ist der Läufer c8, " +
      "den der Bauer e6 einsperrt, bis ...b6 ihm die lange Diagonale öffnet.",
  },

  "1.Nf3 Nf6 2.c4 g6": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung, Königsindischer Aufbau",
    background:
      "Bis Mitte der 1930er-Jahre galt die Königsindische Verteidigung allgemein als höchst " +
      "zweifelhaft, doch vor allem die Analysen und Partien dreier sowjetischer Spieler, " +
      "Alexander Konstantinopolski, Isaak Boleslawski und David Bronstein, trugen dazu bei, " +
      "dass sie deutlich mehr Ansehen und Verbreitung fand.",
    strategy:
      "Bereitet ...Lg7 und die schnelle Rochade vor und hält sowohl die Königsindische als " +
      "auch die Grünfeld-Verteidigung in Reserve. Gegen Sc3 und e4 baut Schwarz mit ...d6 auf " +
      "und bricht dann mit ...e5 oder ...c5; gegen 3.g3 oder 3.Sc3 ist der Schlag ...d5 " +
      "sofort möglich. Der Preis ist das Zentrum: Schwarz lässt es Weiß zuerst besetzen und " +
      "setzt darauf, es später zu untergraben.",
  },

  "1.Nf3 Nf6 2.c4 c5": {
    name: "Englische Symmetrievariante",
    background:
      "Dieselbe Stellung entsteht nach 1.c4 c5 2.Sf3 Sf6. Eine Variante daraus ist die " +
      "Igel-Verteidigung mit 3.g3 b6 4.Lg2 Lb7 5.Sc3 e6 6.O-O Le7 7.d4 cxd4 8.Dxd4 d6; die " +
      "Ideen des Igels wurden ursprünglich in der Englischen Eröffnung entwickelt, und in den " +
      "1970er-Jahren wurde er erstmals ausführlich analysiert.",
    strategy:
      "Kontrolliert d4, so wie der weiße c-Bauer d5 kontrolliert. Gegen 3.g3 oder 3.Sc3 kann " +
      "Schwarz mit ...b6, ...Lb7, ...e6 und ...d6 aufbauen oder mit ...d5 zuschlagen; nach " +
      "3.d4 cxd4 4.Sxd4 setzt Schwarz mit ...e6 fort oder mit 4...e5, das den Springer aus " +
      "dem Zentrum vertreibt. Der Preis ist Raum: Kommt Weiß neben c4 auch zu e4, steht " +
      "Schwarz beengt und ist auf die Hebel ...b5 und ...d5 angewiesen.",
  },

  "1.Nf3 Nf6 2.c4 b6": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung, Damenindischer Aufbau",
    background:
      "Die Damenindische Verteidigung, eine solide Verteidigung gegen das Damenbauernspiel, " +
      "verdankt ihren Namen dem Fianchetto des schwarzen Damenläufers und gilt als " +
      "Schwestereröffnung der Nimzo-Indischen Verteidigung.",
    strategy:
      "Bereitet ...Lb7 vor, das die Kontrolle des Springers f6 über e4 und d5 verstärkt und " +
      "die lange Diagonale besetzt; meist folgt ...e6. Weiß stellt dem Läufer oft g3 und Lg2 " +
      "entgegen, und mit d4 kann die Partie in die Damenindische Verteidigung übergehen. Auch " +
      "Sc3 und e4 ist möglich, aber nur mit einer zweiten Deckung für e4 wie d3 oder Dc2. Der " +
      "Preis ist, dass Schwarz keinen Bauern ins Zentrum stellt und Weiß die Wahl der " +
      "Struktur überlässt.",
  },

  "1.Nf3 Nf6 2.c4 d5": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung, Skandinavische Verteidigung",
    strategy:
      "Greift c4 sofort an. Nach 3.cxd5 Sxd5 kann Weiß gegen einen Springer, der schon " +
      "zweimal gezogen hat, mit d4 und e4 ein Zentrum errichten, und nach 3.d4 geht die " +
      "Partie in Damengambit- oder Slawisch-Strukturen über. Der Zug ist solide, aber Weiß " +
      "wählt die Struktur, und der schwarze Springer auf d5 kann mit e4 und Sc3 bedrängt " +
      "werden.",
  },

  "1.Nf3 Nf6 2.c4 c6": {
    strategy:
      "Bereitet ...d5 mit einer slawischen Bauernkette vor, die dem Läufer c8 die Diagonale " +
      "für ...Lf5 oder ...Lg4 offen lässt. Der Zug ist solide, führt aber meist in andere " +
      "Systeme: 3.d4 d5 ergibt eine Slawische Verteidigung, nach 3.g3 d5 oder 3.b3 d5 behält " +
      "Weiß einen Réti-Aufbau, und der Springer b8 verliert das Feld c6 und entwickelt sich " +
      "meist über d7.",
  },

  "1.Nf3 Nf6 2.c4 d6": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung, Altindischer Aufbau",
    background:
      "Siegbert Tarrasch führte die Altindische Verteidigung 1902 ein, doch sie wird eher mit " +
      "Michail Tschigorin verbunden, der sie fünf Jahre später übernahm und gegen Ende seiner " +
      "Laufbahn als Vorreiter spielte. Sie gilt als solide, hat aber nie die Verbreitung der " +
      "Königsindischen Verteidigung erreicht.",
    strategy:
      "Bereitet ...e5 vor und öffnet die Diagonale des Läufers c8; es folgen ...Sbd7 und " +
      "...Le7 oder ...g6 mit Übergang ins Königsindische. Der Zug ist solide, aber " +
      "bescheiden: Weiß errichtet mit Sc3, d4 und e4 ein breites Zentrum, und mit dem Läufer " +
      "auf e7 statt g7 steht Schwarz meist beengt.",
  },

  "1.Nf3 Nf6 2.c4 Nc6": {
    strategy:
      "Entwickelt den Springer und hält ...e5 in Reserve: 3.Sc3 e5 ergibt die " +
      "Vierspringervariante der Englischen Eröffnung, und 3.d4 führt in die Mexikanische " +
      "Verteidigung, in der Schwarz meist mit ...e6 fortsetzt. Der Zug ist solide, aber " +
      "weniger flexibel als die Hauptzüge, denn der Springer auf c6 verstellt den c-Bauern " +
      "und schließt ...c5 und ...c6 aus.",
  },

  "1.Nf3 Nf6 2.c4 Na6": {
    strategy:
      "Stellt den zweiten Springer an den Rand, mit Ziel b4 oder c5, wo er für das Zentrum " +
      "nichts leistet. Weiß errichtet in aller Ruhe mit Sc3, d4 und e4 ein Zentrum.",
  },

  "1.Nf3 Nf6 2.c4 a6": {
    strategy:
      "Bereitet ...b5 gegen den Bauern c4 vor, verbraucht aber ein Tempo mit einem " +
      "Randbauern, statt eine zweite Figur zu entwickeln. Weiß errichtet mit Sc3 und d4 das " +
      "Zentrum, und sobald der Springer auf c3 steht, kostet der Vorstoß ...b5 einen Bauern.",
  },

  "1.Nf3 Nf6 2.c4 a5": {
    strategy:
      "Verhindert b4, verbraucht aber ein Tempo mit einem Randbauern, schwächt b5 und kümmert " +
      "sich weder um das Zentrum noch um die Entwicklung. Weiß setzt in aller Ruhe mit Sc3 " +
      "und d4 fort.",
  },

  "1.Nf3 Nf6 2.c4 b5": {
    strategy:
      "Bietet den b-Bauern wie im Wolga-Gambit an, aber ohne weißen Bauern auf d5 und ohne " +
      "...c5, das den Damenflügel öffnen würde. Nach 3.cxb5 a6 4.bxa6 Lxa6 behält Weiß den " +
      "Mehrbauern, und der Druck am Damenflügel gleicht das nicht aus.",
  },

  "1.Nf3 Nf6 2.c4 h6": {
    strategy:
      "Nimmt den weißen Figuren das Feld g5, verbraucht aber ein Tempo mit einem Randbauern, " +
      "ohne etwas zu entwickeln oder das Zentrum zu berühren. Weiß setzt ungestört mit Sc3 " +
      "und d4 oder g3 fort.",
  },

  "1.Nf3 Nf6 2.c4 h5": {
    strategy:
      "Stützt einen Springer auf g4 und bereitet ...h4 vor, entwickelt aber nichts und gibt " +
      "...h6 als Deckung von g5 auf. Weiß nutzt das geschenkte Tempo für Sc3, d4 oder g3.",
  },

  "1.Nf3 Nf6 2.c4 Ng8": {
    strategy:
      "Stellt den Springer nach g8 zurück und macht den einzigen Entwicklungszug von Schwarz " +
      "rückgängig. Da c4 und Sf3 schon gespielt sind, liegt Weiß zwei Tempi vorn und kann das " +
      "Zentrum nach Belieben mit d4 und e4 besetzen.",
  },

  "1.Nf3 Nf6 2.c4 Ng4": {
    strategy:
      "Zieht den Springer ein zweites Mal ohne echte Drohung, denn der König deckt f2 und der " +
      "Turm h2. Nach 3.h3 muss er zurück, und Schwarz hat Zeit verloren, die Weiß für Sc3 und " +
      "d4 nutzt.",
  },

  "1.Nf3 Nf6 2.c4 Nh5": {
    strategy:
      "Zieht den Springer ein zweites Mal an den Rand, wo er d5 und e4 nicht mehr " +
      "kontrolliert. Weiß errichtet mit Sc3, d4 und e4 ein Zentrum, während der Springer auf " +
      "h5 am Kampf darum keinen Anteil hat.",
  },

  "1.Nf3 Nf6 2.c4 Ne4": {
    strategy:
      "Zieht den Springer ein zweites Mal nach e4, wo ihn kein Bauer stützt. 3.d3 vertreibt " +
      "ihn sofort, oder 3.Dc2 greift ihn an, und Weiß gewinnt Zeit für das Zentrum.",
  },

  "1.Nf3 Nf6 2.c4 Rg8": {
    strategy:
      "Gibt die kurze Rochade endgültig auf und entwickelt nichts, denn der Turm hat auf g8 " +
      "keine Aufgabe. Weiß errichtet mit Sc3 und d4 das Zentrum, während der schwarze König " +
      "bestenfalls lang rochieren kann.",
  },

  "1.Nf3 Nf6 2.c4 e5": {
    strategy:
      "Lässt den Bauern ungedeckt stehen: 3.Sxe5 gewinnt ihn, und nach 3...Sc6 4.Sxc6 dxc6 " +
      "hat Schwarz zwar Linien geöffnet, aber keine echte Kompensation, da Weiß den Bauern " +
      "behält und einfach entwickelt.",
  },

  "1.Nf3 Nf6 2.c4 g5": {
    strategy:
      "Lässt den g-Bauern hängen, den der Springer f3 angreift und nichts deckt, da der Bauer " +
      "e7 die Diagonale der Dame verstellt. Nach 3.Sxg5 hat Weiß einen Mehrbauern, und der " +
      "schwarze Königsflügel ist ohne Gegenwert gelockert.",
  },

  "1.Nf3 Nf6 2.c4 Nd5": {
    strategy:
      "Stellt den Springer ein: 3.cxd5 gewinnt ihn glatt, da der Bauer d7 der Dame den " +
      "Rückschlag verstellt und sonst nichts d5 deckt.",
  },

  "1.Nf3 Nf6 2.g3 d5": {
    name: "Königsindischer Angriff",
    background:
      "Auf Großmeisterebene heute relativ selten, mit Bassem Amin als häufigstem Anwender auf " +
      "hohem Niveau, auf Vereinsebene aber wegen seiner wiederkehrenden Mittelspielpläne " +
      "beliebt. Der Trainer Mark Dworezki befürwortete das System und spielte es auch selbst.",
    strategy:
      "Besetzt sofort das Zentrum und hält mehrere Aufbauten offen: ...c6 mit ...Lf5 oder " +
      "...Lg4, ...c5 mit ...Sc6 oder ...e6 mit ...Le7. Weiß setzt meist mit Lg2 und O-O fort " +
      "und greift dann den Bauern d5 mit c4 an oder bereitet mit d3 den Vorstoß e4 vor. Die " +
      "frühe Festlegung des d-Bauern gibt Weiß ein klares Ziel für diese Hebel.",
  },

  "1.Nf3 Nf6 2.g3 g6": {
    name: "Königsindischer Angriff: Symmetrische Verteidigung",
    strategy:
      "Spiegelt das weiße Königsfianchetto: Es folgen ...Lg7 und ...O-O, und Schwarz wählt " +
      "zwischen ...d6 mit ...e5, ...d5 und ...c5, sobald sich Weiß festgelegt hat. Nimmt Weiß " +
      "mit c4 und d4 Raum, wird die Partie zu einer Königsindischen oder " +
      "Grünfeld-Verteidigung mit dem weißen Läufer auf g2. Der Preis ist ein langsamerer " +
      "Anspruch auf das Zentrum, als ihn ...d5 sofort erhebt.",
  },

  "1.Nf3 Nf6 2.g3 c5": {
    strategy:
      "Kontrolliert d4 und bereitet ...Sc6 vor, gefolgt entweder von ...g6 für einen " +
      "symmetrischen Aufbau oder von ...d5 und ...e5, also Königsindisch mit vertauschten " +
      "Farben, wobei Schwarz die übliche Rolle von Weiß übernimmt. Weiß kann mit c4 in die " +
      "Symmetrievariante der Englischen Eröffnung einlenken oder bei Lg2, O-O und d3 bleiben. " +
      "Der c-Bauer besetzt noch kein Zentrumsfeld, sodass beide Seiten ihre Möglichkeiten " +
      "behalten.",
  },

  "1.Nf3 Nf6 2.g3 e6": {
    strategy:
      "Öffnet den Läufer f8 und bereitet ...d5 mit ...Le7 vor, einen soliden Aufbau, dem Weiß " +
      "mit d3 und e4 begegnet oder mit c4 und d4, was zur Katalanischen Eröffnung führt. " +
      "Schwarz kann den Damenläufer stattdessen auch mit ...b6 und ...Lb7 entwickeln. Sonst " +
      "bleibt dieser Läufer hinter dem Bauern e6 eingesperrt, und genau darauf zielt der " +
      "weiße Aufbau mit d3 und e4.",
  },

  "1.Nf3 Nf6 2.g3 b5": {
    name: "Königsindischer Angriff: Spasski-Variante",
    background:
      "Manchmal Spasski-Variante genannt, nach Boris Spasskis Einsatz von ...b5 gegen Tigran " +
      "Petrosjan im WM-Kampf 1966, obwohl jene Partie, die entscheidende 22., mit 1.d4 b5 " +
      "begann. Die Variante ist durchaus respektabel und wurde von Großmeistern wie den " +
      "früheren Weltmeistern Michail Tal, Anatoli Karpow und Magnus Carlsen erfolgreich " +
      "gespielt.",
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet ...Lb7 vor, um die lange Diagonale streitig " +
      "zu machen; anders als ...b6 erschwert der Zug zudem c4, da der Bauer b5 dort schlagen " +
      "könnte. Typisch ist 3.Lg2 Lb7 4.O-O e6, danach wählt Weiß zwischen d3 mit späterem e4, " +
      "d4 und b3. Der Bauer b5 kann zum Ziel von a4 oder Sa3 werden.",
  },

  "1.Nf3 Nf6 2.g3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, um dem Läufer g2 auf der langen Diagonale entgegenzutreten, wie " +
      "in der Damenindischen Verteidigung. Der Aufbau ist solide, erschwert aber anders als " +
      "...b5 nicht c4, sodass Weiß mit c4 und d4 Raum nehmen oder ruhig mit d3 und e4 spielen " +
      "kann.",
  },

  "1.Nf3 Nf6 2.g3 Nc6": {
    strategy:
      "Entwickelt den Springer in Richtung d4 und e5 und bereitet ...e5 vor, das er decken " +
      "würde. Er verstellt den c-Bauern, sodass ...c5 vorerst nicht möglich ist, und Weiß " +
      "kann mit d4 das Zentrum besetzen. Der Zug ist solide, aber weniger flexibel als ...d5 " +
      "oder ...g6.",
  },

  "1.Nf3 Nf6 2.g3 c6": {
    strategy:
      "Bereitet ...d5 im Stil der Slawischen Verteidigung vor, wobei der Läufer c8 nach dem " +
      "Vorrücken des d-Bauern frei nach f5 oder g4 gehen kann. Der Zug tut noch nichts für " +
      "das Zentrum, sodass Weiß zuerst c4 oder d4 spielen kann. Solide, aber ...d5 sofort " +
      "erreicht dieselben Aufbauten und hält den c-Bauern für ...c5 frei.",
  },

  "1.Nf3 Nf6 2.g3 d6": {
    strategy:
      "Bereitet ...e5 und einen kompakten Aufbau mit ...Sbd7 und ...g6 oder ...Le7 vor. Der " +
      "Zug öffnet den Läufer c8, überlässt Weiß aber Raum im Zentrum, sodass Weiß mit Lg2, " +
      "O-O und danach c4 und d4 aufbauen kann. Solide, aber passiv.",
  },

  "1.Nf3 Nf6 2.g3 a6": {
    strategy:
      "Ein langsamer Zug, der ...b5 vorbereitet, das Schwarz auch sofort spielen kann. Weiß " +
      "gewinnt ein Tempo für Lg2, O-O und d4 oder c4.",
  },

  "1.Nf3 Nf6 2.g3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und kontrolliert b4, tut aber nichts für Entwicklung oder " +
      "Zentrum. Weiß spielt ungestört Lg2, O-O und d4 oder c4.",
  },

  "1.Nf3 Nf6 2.g3 Na6": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er b4 und c5 im Blick hat, aber wenig Einfluss " +
      "auf das Zentrum nimmt. Weiß gewinnt Zeit für Lg2, O-O und d4 oder c4.",
  },

  "1.Nf3 Nf6 2.g3 Rg8": {
    strategy:
      "Verbraucht ein Tempo und gibt die kurze Rochade endgültig auf, da der Turm h8 gezogen " +
      "hat, ohne Entwicklung oder Zentrum zu fördern. Weiß setzt einfach mit Lg2, O-O und d4 " +
      "fort.",
  },

  "1.Nf3 Nf6 2.g3 Ng8": {
    strategy:
      "Nimmt den ersten Zug zurück. Schwarz hat zwei Tempi verbraucht, um zur " +
      "Ausgangsstellung zurückzukehren, während Weiß den Springer entwickelt und Lg2 " +
      "vorbereitet hat und im Zentrum freie Hand besitzt.",
  },

  "1.Nf3 Nf6 2.g3 h6": {
    strategy:
      "Ein vorbeugender Bauernzug, der ein Tempo verbraucht, obwohl es noch nichts zu " +
      "verhindern gibt. Er fördert weder Entwicklung noch Zentrum, und Weiß spielt in Ruhe " +
      "Lg2, O-O und d4.",
  },

  "1.Nf3 Nf6 2.g3 h5": {
    strategy:
      "Strebt ...h4 an, um den Bauern g3 anzugreifen, schwächt aber g5 und lockert den " +
      "Königsflügel, bevor Schwarz entwickelt ist. Für das Zentrum tut der Zug nichts, und " +
      "Weiß setzt mit Lg2 und d4 fort.",
  },

  "1.Nf3 Nf6 2.g3 Ng4": {
    strategy:
      "Von g4 aus zielt der Springer auf f2 und h2, doch 3.h3 vertreibt ihn sofort, und " +
      "3...Se5 verliert ihn dann gegen Sxe5. Nach dem Rückzug nach f6 oder h6 hat Schwarz " +
      "zwei Tempi verloren, und Weiß hat h3 umsonst gespielt.",
  },

  "1.Nf3 Nf6 2.g3 Nh5": {
    strategy:
      "Stellt den Springer an den Rand, wo er g3 und f4 im Blick hat, aber kein Zentrumsfeld " +
      "umkämpft. Weiß kann mit Lg2 und d4 fortsetzen oder ihn sofort mit 3.g4 vertreiben und " +
      "dabei mit Tempo Raum am Königsflügel gewinnen.",
  },

  "1.Nf3 Nf6 2.g3 Nd5": {
    strategy:
      "Zentralisiert den Springer, doch 3.c4 greift ihn sofort an, und er muss zurückweichen, " +
      "etwa nach b6. Weiß gewinnt Zeit für d4 und ein breites Zentrum, während Schwarz drei " +
      "Züge mit einem Springer verbraucht hat.",
  },

  "1.Nf3 Nf6 2.g3 Ne4": {
    strategy:
      "Zielt auf f2 und g3, doch 3.d3 greift den Springer sofort an, und er muss nach f6, d6 " +
      "oder c5 zurückweichen; Schwarz verliert Zeit, während Weiß d3 umsonst bekommt. Das " +
      "Schlagen auf g3 bringt nur einen Bauern für den Springer.",
  },

  "1.Nf3 Nf6 2.g3 g5": {
    strategy:
      "Stellt einen Bauern ein: Der Springer f6 deckt g5 nicht, also gewinnt 3.Sxg5 ihn " +
      "einfach, und der schwarze Königsflügel bleibt gelockert.",
  },

  "1.Nf3 Nf6 2.g3 e5": {
    strategy:
      "Stellt den e-Bauern ein: Nichts deckt e5, also gewinnt 3.Sxe5 ihn einfach. Nach " +
      "3...Sc6 4.Sxc6 dxc6 haben die schwarze Dame und der Läufer c8 offene Linien, doch " +
      "Schwarz steht mit einem glatten Minusbauern da.",
  },

  "1.Nf3 Nf6 2.b3 d5": {
    strategy:
      "Besetzt sofort das Zentrum und erschwert zusammen mit dem Springer f6 den weißen " +
      "Vorstoß e4. Nach Lb2 kann Schwarz mit …e6, …Le7 und …c5 aufbauen oder den " +
      "weißfeldrigen Läufer aktiv nach f5 entwickeln, bevor er die Kette mit …e6 schließt. " +
      "Der Läufer b2 beißt dann auf ein festes Bauernzentrum, das Weiß meist mit e3 und c4 " +
      "angreift.",
  },

  "1.Nf3 Nf6 2.b3 g6": {
    strategy:
      "Beantwortet das weiße Fianchetto mit einem eigenen: …Lg7 stellt sich dem Läufer b2 auf " +
      "der langen Diagonale entgegen, es folgen …O-O und …d6 oder …d5. Der Aufbau ist " +
      "flexibel und hält …c5 in Reserve. Solange Schwarz nicht rochiert hat, ist der Läufer " +
      "g7 ungedeckt, sodass ein unbedachter Zug des Springers f6 ihn durch Lxg7 einstellen " +
      "kann.",
  },

  "1.Nf3 Nf6 2.b3 e6": {
    strategy:
      "Öffnet die Diagonale für den Läufer f8 und lässt die Wahl des Aufbaus offen. Nach Lb2 " +
      "kann Schwarz mit …d5, …Le7 und …O-O ein klassisches Zentrum errichten oder mit …b6 und " +
      "…Lb7 im Stil der Damenindischen Verteidigung fianchettieren; …c5 ist eine dritte " +
      "Möglichkeit. Der Preis ist ein Läufer c8, der hinter dem Bauern e6 eingesperrt bleibt, " +
      "bis Schwarz sich für …b6 entscheidet.",
  },

  "1.Nf3 Nf6 2.b3 c5": {
    strategy:
      "Kämpft sofort um d4 und lässt die Wahl zwischen …d5, …d6 und einem Königsfianchetto " +
      "offen. Schwarz setzt meist mit …Sc6 und …e6 oder mit …g6 und …Lg7 fort. Weiß antwortet " +
      "mit e3 und Le2 oder mit c4, was zu Strukturen der symmetrischen Variante der " +
      "Englischen Eröffnung führt.",
  },

  "1.Nf3 Nf6 2.b3 b6": {
    strategy:
      "Übernimmt den weißen Aufbau: …Lb7 stellt sich dem Läufer b2 auf der langen Diagonale " +
      "entgegen, es folgen …e6, …Le7 und …O-O im Stil der Damenindischen Verteidigung. Die " +
      "Stellung ist solide, aber etwas passiv, da Schwarz kaum schnelles Gegenspiel hat und " +
      "meist auf den weißen Plan reagiert.",
  },

  "1.Nf3 Nf6 2.b3 Nc6": {
    strategy:
      "Entwickelt eine Figur und zielt auf d4 und e5, doch der Springer verstellt den " +
      "c-Bauern und legt sich fest, bevor die schwarze Struktur geklärt ist. Nach Lb2 wäre " +
      "der Bauer nach …e5 zweimal angegriffen und nur einmal gedeckt, daher braucht Schwarz " +
      "zuerst …d6 oder wählt stattdessen …d5 und …e6.",
  },

  "1.Nf3 Nf6 2.b3 d6": {
    strategy:
      "Bereitet …e5 nebst …Sbd7 oder einen königsindischen Aufbau mit …g6 und …Lg7 vor. Der " +
      "Zug ist bescheiden: Er kämpft nicht wie …d5 um e4, und Weiß entwickelt sich ungestört " +
      "mit Lb2, e3 und c4.",
  },

  "1.Nf3 Nf6 2.b3 c6": {
    strategy:
      "Bereitet …d5 mit einem Bauernpaar wie in der Slawischen Verteidigung vor und hält den " +
      "Läufer c8 für …Lf5 frei. Der Zug ist solide, aber langsamer als sofortiges …d5 und " +
      "nimmt dem Springer b8 das Feld c6, sodass Weiß Zeit für Lb2, e3 und später c4 erhält.",
  },

  "1.Nf3 Nf6 2.b3 a6": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern, der weder um das Zentrum kämpft noch eine " +
      "Figur entwickelt. Weiß setzt mit Lb2 und e3 fort und erlangt einen " +
      "Entwicklungsvorsprung.",
  },

  "1.Nf3 Nf6 2.b3 a5": {
    strategy:
      "Bereitet …a4 gegen den Bauern b3 vor, verbraucht aber ein Tempo am Flügel, solange das " +
      "Zentrum unbestritten ist, und der a-Bauer kann b6 und b5 nicht mehr decken. Weiß setzt " +
      "mit Lb2 und e3 fort.",
  },

  "1.Nf3 Nf6 2.b3 b5": {
    strategy:
      "Schwächt den Damenflügel: Nach e3 greift der Läufer f1 den Bauern b5 an, sodass …a6 " +
      "oder …c6 nötig ist, um ihn zu halten, und die schwarze Entwicklung gerät in Rückstand.",
  },

  "1.Nf3 Nf6 2.b3 h6": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauernzug, obwohl auf g5 nichts zu verhindern ist, " +
      "und das Zentrum bleibt unbestritten. Weiß entwickelt sich ungestört mit Lb2 und e3.",
  },

  "1.Nf3 Nf6 2.b3 h5": {
    strategy:
      "Rückt den Randbauern ohne Zweck vor und verliert ein Tempo, während das Zentrum " +
      "unbestritten bleibt. Weiß entwickelt sich einfach mit Lb2 und e3.",
  },

  "1.Nf3 Nf6 2.b3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, mit Ziel b4 oder c5, ohne etwas für das Zentrum zu " +
      "tun. Sobald e3 die Diagonale des Läufers f1 öffnet, würde Lxa6 bxa6 die schwarzen " +
      "a-Bauern verdoppeln.",
  },

  "1.Nf3 Nf6 2.b3 Ng8": {
    strategy:
      "Zieht die einzige entwickelte Figur auf ihr Ausgangsfeld zurück und macht den einzigen " +
      "nützlichen Zug von Schwarz rückgängig. Weiß gewinnt zwei Tempi und setzt in Ruhe mit " +
      "Lb2 und e3 fort.",
  },

  "1.Nf3 Nf6 2.b3 Ng4": {
    strategy:
      "Stellt den Springer auf ein Feld, von dem ihn h3 sofort vertreibt; …Se5 geht nach Sxe5 " +
      "verloren, also muss er sich nach f6 oder h6 zurückziehen, und Weiß hat mit h3 ein " +
      "Tempo gewonnen.",
  },

  "1.Nf3 Nf6 2.b3 Nh5": {
    strategy:
      "Stellt den Springer an den Rand, um f4 zu erreichen, doch g3 nimmt ihm dieses Feld und " +
      "lässt nur f6 als sicheres Feld übrig, während der Zug nichts für Zentrum oder " +
      "Entwicklung tut.",
  },

  "1.Nf3 Nf6 2.b3 Ne4": {
    strategy:
      "Zentralisiert den Springer zu früh: d3 vertreibt ihn sofort, und nach …Sf6 hat Weiß " +
      "einen Zug gewonnen. Nach dem Rückzug …Sc5 wird er mit b4 weiter verjagt, und …Sd6 " +
      "verstellt den d-Bauern.",
  },

  "1.Nf3 Nf6 2.b3 Nd5": {
    strategy:
      "Stellt den Springer auf ein Feld, auf dem ihn e4 oder c4 mit Tempo angreift; nach 3.e4 " +
      "Sb6 4.d4 hat Weiß ein breites Bauernzentrum, während der schwarze Springer drei Züge " +
      "gebraucht hat, um b6 zu erreichen.",
  },

  "1.Nf3 Nf6 2.b3 e5": {
    strategy:
      "Stellt den e-Bauern ein: 3.Sxe5 gewinnt ihn, da nichts auf e5 zurückschlagen kann, und " +
      "3…Sc6 4.Sxc6 dxc6 tauscht nur Figuren, ohne den Bauern zurückzugewinnen.",
  },

  "1.Nf3 Nf6 2.b3 g5": {
    strategy:
      "Verliert nach 3.Sxg5 einen Bauern: Der Bauer e7 und der Springer f6 verstellen die " +
      "Diagonale der Dame, sodass nichts g5 deckt, und der Vorstoß schwächt zudem den " +
      "Königsflügel.",
  },

  "1.Nf3 Nf6 2.b3 Rg8": {
    strategy:
      "Gibt die kurze Rochade auf und stellt den Turm auf eine geschlossene Linie, ohne etwas " +
      "für Zentrum oder Entwicklung zu tun. Weiß setzt einfach mit Lb2 und e3 fort, während " +
      "der schwarze König seinen natürlichen Platz verloren hat.",
  },
};
