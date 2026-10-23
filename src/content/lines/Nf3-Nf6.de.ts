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
      "Kämpft von der Flanke aus um d5, ohne das Zentrum zu besetzen, und hält sowohl den " +
      "zentralen Vorstoß d4 als auch ein Königsflügel-Fianchetto bereit. Weiß wartet ab, wie " +
      "Schwarz sich aufstellt, und durch Zugumstellung können viele verschiedene Strukturen " +
      "entstehen. Der Preis ist, dass noch kein Bauer im Zentrum steht und Schwarz daher wählt, " +
      "wie er darauf reagiert.",
  },

  "1.Nf3 Nf6 2.g3": {
    background:
      "Ein häufiger Beginn des Königsindischen Angriffs, den Bobby Fischer (vor allem in " +
      "seiner frühen Karriere), Michail Botwinnik, Wassili Smyslow und Tigran Petrosjan alle " +
      "einsetzten. Auf Großmeisterebene kam er in den 1950er-Jahren als Ableger der " +
      "verbreiteten Königsindischen Verteidigung auf, wobei Weiß den schwarzen Aufbau mit " +
      "einem Zusatztempo übernimmt.",
    strategy:
      "Bereitet das Fianchetto des Königsläufers auf g2 vor, von wo er über die lange Diagonale " +
      "auf e4 und d5 wirkt, und hält die zentralen Pläne von Weiß offen. Weiß rochiert früh und " +
      "baut aus sicherer Königsstellung auf, was meist ein geschlossenes, strategisches Spiel " +
      "bedeutet. Der Preis ist, dass das Zentrum Schwarz überlassen bleibt, der es sofort mit " +
      "...d5 besetzen kann.",
  },

  "1.Nf3 Nf6 2.d4": {
    strategy:
      "Besetzt das Zentrum mit einem Bauern und macht die Partie zu einer Damenbauernpartie, mit " +
      "dem Springer schon auf f3. Weiß gewinnt Raum und öffnet den Läufer c1, und Schwarz muss " +
      "entscheiden, ob er das Zentrum sofort bestreitet oder sich aus der Distanz aufstellt. Der " +
      "frühe Springer schließt Aufbauten aus, die den f-Bauern auf f3 brauchen.",
  },

  "1.Nf3 Nf6 2.b3": {
    name: "Larsen-Eröffnung",
    background:
      "Benannt nach Aron Nimzowitsch, der in den 1920er- und 1930er-Jahren mit 1.b3 " +
      "experimentierte und häufiger die Zugfolge 1.Sf3 d5 2.b3 wählte, und nach Bent Larsen, " +
      "der 1.b3 zwischen 1968 und 1972 häufig spielte.",
    strategy:
      "Bereitet Lb2 vor, der über die lange Diagonale auf e5 und den Springer f6 zielt, und hält " +
      "die Zentrumsbauern flexibel. Weiß überlässt Schwarz das Zentrum und will es später nach " +
      "Art einer Flankeneröffnung untergraben. Der Preis ist ein langsamerer Anspruch auf das " +
      "Zentrum, sodass Schwarz sich bequem entwickeln kann.",
  },

  "1.Nf3 Nf6 2.e3": {
    name: "Zukertort-Eröffnung: Ruhiges System",
    strategy:
      "Öffnet den Läufer f1 und unterstützt ein späteres d4. Der Zug ist solide, aber langsam, " +
      "und sobald d4 folgt, sperrt der Bauer e3 den Läufer c1 ein, während Schwarz im Zentrum " +
      "frei Raum gewinnen kann.",
  },

  "1.Nf3 Nf6 2.d3": {
    strategy:
      "Unterstützt e4 und öffnet den Läufer c1, beansprucht aber keinen Raum. Der Zug ist " +
      "solide, aber bescheiden, und das weiße Spiel bleibt passiv, bis e4 gespielt werden kann.",
  },

  "1.Nf3 Nf6 2.c3": {
    strategy:
      "Unterstützt ein späteres d4 und öffnet der Dame die Diagonale d1–a4, entwickelt aber " +
      "nichts und nimmt dem Damenspringer das Feld c3. Er setzt den schwarzen Aufbau nicht unter " +
      "Druck, und Schwarz kann sich ungehindert entwickeln.",
  },

  "1.Nf3 Nf6 2.Nc3": {
    strategy:
      "Entwickelt den zweiten Springer und überwacht e4 und d5, ohne einen Bauern festzulegen. " +
      "Er verstellt den c-Bauern, sodass englische Aufbauten mit c4 vorerst ausscheiden, und " +
      "Schwarz besetzt sofort das Zentrum und kann durch Vertreiben des Springers weiteren Raum " +
      "gewinnen.",
  },

  "1.Nf3 Nf6 2.a3": {
    strategy:
      "Bereitet b4 vor und hält einen schwarzen Läufer von b4 fern, tut aber nichts für das " +
      "Zentrum oder die Entwicklung. Weiß wartet noch ab, während Schwarz Raum gewinnt.",
  },

  "1.Nf3 Nf6 2.a4": {
    strategy:
      "Gewinnt am Rand Raum auf dem Damenflügel, verbraucht aber ein Tempo für einen Bauernzug, " +
      "der nichts für das Zentrum oder die Entwicklung tut.",
  },

  "1.Nf3 Nf6 2.b4": {
    strategy:
      "Schiebt den b-Bauern auf ein Feld, auf dem ihn nichts deckt: Nach 2...e6 greift ihn der " +
      "Läufer f8 an, und Weiß muss ein weiteres Tempo für seine Rettung aufwenden oder ihn nach " +
      "...Lxb4 hergeben. Der Vorstoß schwächt außerdem c3 und lockert den Damenflügel.",
  },

  "1.Nf3 Nf6 2.h3": {
    strategy:
      "Nimmt einem schwarzen Springer oder Läufer das Feld g4, verbraucht aber ein Tempo für " +
      "einen Randbauernzug, den die Stellung noch nicht verlangt, während Weiß sich noch " +
      "entwickeln muss.",
  },

  "1.Nf3 Nf6 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel und bereitet h5 vor, lockert aber den Königsflügel ohne " +
      "konkreten Gewinn und tut nichts für das Zentrum oder die Entwicklung.",
  },

  "1.Nf3 Nf6 2.Rg1": {
    strategy:
      "Unterstützt ein späteres g4 und g5, gibt aber das Recht zur kurzen Rochade auf und stellt " +
      "den Turm auf eine geschlossene Linie, sodass der weiße König in der Mitte bleibt.",
  },

  "1.Nf3 Nf6 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er b5 und c4 ins Auge fasst, aber nichts im " +
      "Zentrum deckt und den a-Bauern blockiert. Ein schwarzes ...d5 deckt zudem c4, und der " +
      "Springer bleibt außer Spiel.",
  },

  "1.Nf3 Nf6 2.Ng5": {
    strategy:
      "Zieht den Springer ein zweites Mal, um h7 und f7 anzugreifen, die beide gedeckt sind. " +
      "Nach 2...h6 muss er nach f3 oder h3 zurück, und Schwarz gewinnt Zeit, um das Zentrum zu " +
      "besetzen.",
  },

  "1.Nf3 Nf6 2.Nh4": {
    strategy:
      "Zieht den Springer ein zweites Mal, an den Rand, wo er f5 und g6 überwacht, aber nichts " +
      "für das Zentrum tut. Der Springer steht außer Spiel, während Schwarz sich entwickelt.",
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
      "sofort das Zentrum, während Weiß von vorn beginnen muss.",
  },

  "1.Nf3 Nf6 2.e4": {
    strategy:
      "Lässt den Bauern e4 ungedeckt, sodass 2...Sxe4 ihn gewinnt. Der weiße " +
      "Entwicklungsvorsprung ist eine zweifelhafte Kompensation, und Schwarz behält einen " +
      "Mehrbauern in einer gesunden Stellung.",
  },

  "1.Nf3 Nf6 2.g4": {
    strategy:
      "Stellt einen Bauern ein: Nichts deckt g4, da der Springer f3 die Diagonale der Dame " +
      "verstellt, also gewinnt ihn 2...Sxg4. Der weiße Turm kann den Springer dann angreifen, " +
      "doch er zieht sich einfach zurück, und Schwarz behält den Mehrbauern.",
  },

  "1.Nf3 Nf6 2.c4 e6": {
    strategy:
      "Öffnet die Diagonale des Läufers f8 und bereitet ...d5 vor, sodass Schwarz alle Aufbauten " +
      "offenstehen: ein klassisches Zentrum oder ein Aufbau mit fianchettiertem Läufer. Der " +
      "Preis ist der Läufer c8, den der Bauer e6 einsperrt, bis ...b6 ihm die lange Diagonale " +
      "öffnet.",
  },

  "1.Nf3 Nf6 2.c4 g6": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung, Königsindischer Aufbau",
    background:
      "Bis Mitte der 1930er-Jahre galt die Königsindische Verteidigung allgemein als höchst " +
      "zweifelhaft, doch vor allem die Analysen und Partien dreier sowjetischer Spieler, " +
      "Alexander Konstantinopolski, Isaak Boleslawski und David Bronstein, trugen dazu bei, " +
      "dass sie deutlich mehr Ansehen und Verbreitung fand.",
    strategy:
      "Bereitet ...Lg7 und die schnelle Rochade vor und lässt offen, ob Schwarz sofort im " +
      "Zentrum zuschlägt oder langsam aufbaut. Der Preis ist das Zentrum: Schwarz lässt es Weiß " +
      "zuerst besetzen und setzt darauf, es später mit Bauernhebeln zu untergraben.",
  },

  "1.Nf3 Nf6 2.c4 c5": {
    name: "Englische Symmetrievariante",
    background:
      "Dieselbe Stellung entsteht nach 1.c4 c5 2.Sf3 Sf6. Eine Variante daraus ist die " +
      "Igel-Verteidigung mit 3.g3 b6 4.Lg2 Lb7 5.Sc3 e6 6.O-O Le7 7.d4 cxd4 8.Dxd4 d6; die " +
      "Ideen des Igels wurden ursprünglich in der Englischen Eröffnung entwickelt, und in den " +
      "1970er-Jahren wurde er erstmals ausführlich analysiert.",
    strategy:
      "Kontrolliert d4, so wie der weiße c-Bauer d5 kontrolliert, sodass Weiß das Zentrum nicht " +
      "umsonst bekommt. Der Preis ist Raum: Kommt Weiß neben c4 auch zu e4, steht Schwarz beengt " +
      "und braucht befreiende Hebel wie ...d5. Meist wird es ein manövrierender Kampf um d4 und " +
      "d5.",
  },

  "1.Nf3 Nf6 2.c4 b6": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung, Damenindischer Aufbau",
    background:
      "Die Damenindische Verteidigung, eine solide Verteidigung gegen das Damenbauernspiel, " +
      "verdankt ihren Namen dem Fianchetto des schwarzen Damenläufers und gilt als " +
      "Schwestereröffnung der Nimzo-Indischen Verteidigung.",
    strategy:
      "Bereitet ...Lb7 vor, das die Kontrolle des Springers f6 über e4 und d5 verstärkt und die " +
      "lange Diagonale besetzt. Schwarz stellt noch keinen Bauern ins Zentrum und kontrolliert " +
      "es aus der Ferne, was Weiß die Wahl der Struktur überlässt.",
  },

  "1.Nf3 Nf6 2.c4 d5": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung, Skandinavische Verteidigung",
    strategy:
      "Greift c4 sofort an. Schlägt Weiß auf d5, hat der schwarze Springer zweimal gezogen, " +
      "während Weiß mit Bauern ein Zentrum aufbaut. Der Zug ist solide, aber Weiß wählt die " +
      "Struktur.",
  },

  "1.Nf3 Nf6 2.c4 c6": {
    strategy:
      "Bereitet ...d5 mit einer slawischen Bauernkette vor, die dem Läufer c8 die Diagonale " +
      "offen hält, damit er außerhalb der Bauern entwickelt werden kann. Der Zug ist solide, " +
      "aber passiv, und der Springer b8 verliert das Feld c6 und entwickelt sich meist über d7.",
  },

  "1.Nf3 Nf6 2.c4 d6": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung, Altindischer Aufbau",
    background:
      "Siegbert Tarrasch führte die Altindische Verteidigung 1902 ein, doch sie wird eher mit " +
      "Michail Tschigorin verbunden, der sie fünf Jahre später übernahm und gegen Ende seiner " +
      "Laufbahn als Vorreiter spielte. Sie gilt als solide, hat aber nie die Verbreitung der " +
      "Königsindischen Verteidigung erreicht.",
    strategy:
      "Bereitet ...e5 vor und öffnet die Diagonale des Läufers c8, ein bescheidener Aufbau, der " +
      "sich immer noch zum Fianchetto des Königsläufers entwickeln kann. Der Zug ist solide, " +
      "aber Weiß kann ein breites Zentrum errichten, und steht der Läufer f8 am Ende auf e7 " +
      "statt auf g7, ist Schwarz meist beengt.",
  },

  "1.Nf3 Nf6 2.c4 Nc6": {
    strategy:
      "Entwickelt den Springer und hält einen zentralen Bauernvorstoß in Reserve, doch der " +
      "Springer auf c6 verstellt den c-Bauern und schließt ...c5 und ...c6 aus. Der Zug ist " +
      "solide, aber weniger flexibel als die Hauptzüge.",
  },

  "1.Nf3 Nf6 2.c4 Na6": {
    strategy:
      "Stellt den zweiten Springer an den Rand, mit Ziel b4 oder c5, wo er für das Zentrum " +
      "nichts leistet. Weiß errichtet in aller Ruhe das Zentrum.",
  },

  "1.Nf3 Nf6 2.c4 a6": {
    strategy:
      "Bereitet ...b5 gegen den Bauern c4 vor, verbraucht aber ein Tempo mit einem Randbauern, " +
      "statt eine zweite Figur zu entwickeln. Weiß errichtet in aller Ruhe das Zentrum, und " +
      "sobald der Springer auf c3 steht, kostet der Vorstoß ...b5 einen Bauern.",
  },

  "1.Nf3 Nf6 2.c4 a5": {
    strategy:
      "Verhindert b4, verbraucht aber ein Tempo mit einem Randbauern, schwächt b5 und kümmert " +
      "sich weder um das Zentrum noch um die Entwicklung. Weiß setzt in aller Ruhe fort.",
  },

  "1.Nf3 Nf6 2.c4 b5": {
    strategy:
      "Bietet den b-Bauern für Druck am Damenflügel an, aber ohne weißen Bauern auf d5 und ohne " +
      "...c5, das den Damenflügel öffnen würde. Nach 3.cxb5 behält Weiß den Mehrbauern, und der " +
      "Druck am Damenflügel gleicht das nicht aus.",
  },

  "1.Nf3 Nf6 2.c4 h6": {
    strategy:
      "Nimmt den weißen Figuren das Feld g5, verbraucht aber ein Tempo mit einem Randbauern, " +
      "ohne etwas zu entwickeln oder das Zentrum zu berühren. Weiß setzt ungestört fort.",
  },

  "1.Nf3 Nf6 2.c4 h5": {
    strategy:
      "Stützt einen Springer auf g4 und bereitet ...h4 vor, entwickelt aber nichts und gibt " +
      "...h6 als Deckung von g5 auf. Weiß nutzt das geschenkte Tempo zur Entwicklung.",
  },

  "1.Nf3 Nf6 2.c4 Ng8": {
    strategy:
      "Stellt den Springer nach g8 zurück und macht den einzigen Entwicklungszug von Schwarz " +
      "rückgängig. Da c4 und Sf3 schon gespielt sind, liegt Weiß zwei Tempi vorn und kann das " +
      "Zentrum nach Belieben besetzen.",
  },

  "1.Nf3 Nf6 2.c4 Ng4": {
    strategy:
      "Zieht den Springer ein zweites Mal ohne echte Drohung, denn der König deckt f2 und der " +
      "Turm h2. Nach 3.h3 muss er zurück, und Schwarz hat Zeit verloren, die Weiß für das " +
      "Zentrum nutzt.",
  },

  "1.Nf3 Nf6 2.c4 Nh5": {
    strategy:
      "Zieht den Springer ein zweites Mal an den Rand, wo er d5 und e4 nicht mehr kontrolliert. " +
      "Weiß errichtet das Zentrum, während der Springer auf h5 am Kampf darum keinen Anteil hat.",
  },

  "1.Nf3 Nf6 2.c4 Ne4": {
    strategy:
      "Zieht den Springer ein zweites Mal nach e4, wo ihn kein Bauer stützt. 3.d3 vertreibt ihn " +
      "sofort, und Weiß gewinnt Zeit für das Zentrum.",
  },

  "1.Nf3 Nf6 2.c4 Rg8": {
    strategy:
      "Gibt die kurze Rochade endgültig auf und entwickelt nichts, denn der Turm hat auf g8 " +
      "keine Aufgabe. Weiß errichtet das Zentrum, während der schwarze König bestenfalls lang " +
      "rochieren kann.",
  },

  "1.Nf3 Nf6 2.c4 e5": {
    strategy:
      "Lässt den Bauern ungedeckt stehen: 3.Sxe5 gewinnt ihn, und Schwarz hat keine echte " +
      "Kompensation, da Weiß den Bauern behält und sich einfach entwickelt.",
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
      "Besetzt sofort das Zentrum und hält den Läufer c8 frei, sich außerhalb der Bauernkette zu " +
      "entwickeln. Der Preis ist ein festgelegter d-Bauer, der Weiß ein klares Ziel für c4 " +
      "bietet und den Aufbau mit d3 und e4 erlaubt. Die Partie wird meist geschlossen und " +
      "strategisch, wobei Weiß das Tempo vorgibt.",
  },

  "1.Nf3 Nf6 2.g3 g6": {
    name: "Königsindischer Angriff: Symmetrische Verteidigung",
    strategy:
      "Spiegelt das weiße Königsfianchetto: Der Läufer wird die lange Diagonale beobachten und " +
      "der König kann früh rochieren, während das Zentrum vorerst offen bleibt. Nimmt Weiß mit " +
      "c4 und d4 Raum, wird die Partie zu einer Königsindischen oder Grünfeld-Verteidigung mit " +
      "dem weißen Läufer auf g2. Der Preis ist ein langsamerer Anspruch auf das Zentrum, als ihn " +
      "...d5 sofort erhebt.",
  },

  "1.Nf3 Nf6 2.g3 c5": {
    strategy:
      "Kontrolliert d4, sodass Weiß nur schwer ein breites Zentrum aufbauen kann, und hält den " +
      "d-Bauern flexibel. Schwarz kann einen symmetrischen Aufbau oder ein Königsindisch mit " +
      "vertauschten Farben ansteuern und dabei die übliche Rolle von Weiß übernehmen. Der " +
      "c-Bauer besetzt noch kein Zentrumsfeld, sodass beide Seiten ihre Möglichkeiten behalten.",
  },

  "1.Nf3 Nf6 2.g3 e6": {
    strategy:
      "Öffnet den Läufer f8 und bereitet ...d5 mit einem soliden Aufbau vor. Der Preis ist der " +
      "Läufer c8, der hinter dem Bauern e6 eingesperrt bleibt, wenn Schwarz keinen Ausweg " +
      "findet, etwa durch ein Fianchetto am Damenflügel; genau darauf zielt der langsame weiße " +
      "Aufbau mit d3 und e4. Weiß kann auch mit c4 und d4 Raum nehmen, wobei der Läufer g2 auf " +
      "der langen Diagonale drückt.",
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
      "Gewinnt Raum am Damenflügel und bereitet ...Lb7 vor, um die lange Diagonale streitig zu " +
      "machen. Anders als ...b6 erschwert der Zug c4, da der Bauer b5 dort schlagen könnte. Der " +
      "Preis ist ein Bauer, der zum Ziel des weißen a-Bauern und Springers werden kann, und ein " +
      "gelockerter Damenflügel.",
  },

  "1.Nf3 Nf6 2.g3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, um dem Läufer g2 auf der langen Diagonale entgegenzutreten. Der " +
      "Aufbau ist solide, erschwert aber anders als ...b5 nicht c4, sodass Weiß im Zentrum Raum " +
      "nehmen oder ruhig spielen kann.",
  },

  "1.Nf3 Nf6 2.g3 Nc6": {
    strategy:
      "Entwickelt den Springer in Richtung d4 und e5 und bereitet ...e5 vor, das er decken " +
      "würde. Er verstellt den c-Bauern, sodass ...c5 vorerst nicht möglich ist, und Weiß kann " +
      "mit d4 das Zentrum besetzen. Der Zug ist solide, aber weniger flexibel als Aufbauten, die " +
      "den c-Bauern freihalten.",
  },

  "1.Nf3 Nf6 2.g3 c6": {
    strategy:
      "Bereitet ...d5 mit einer soliden Bauernkette vor, wobei der Läufer c8 nach dem Vorrücken " +
      "des d-Bauern frei nach f5 oder g4 gehen kann. Der Zug tut noch nichts für das Zentrum, " +
      "sodass Weiß zuerst das Zentrum besetzen kann. Solide, aber ...d5 sofort erreicht " +
      "dieselben Aufbauten und hält den c-Bauern für ...c5 frei.",
  },

  "1.Nf3 Nf6 2.g3 d6": {
    strategy:
      "Bereitet ...e5 und einen kompakten Aufbau dahinter vor. Der Zug öffnet den Läufer c8, " +
      "überlässt Weiß aber Raum im Zentrum, sodass Weiß ein breites Zentrum aufbauen kann. " +
      "Solide, aber passiv.",
  },

  "1.Nf3 Nf6 2.g3 a6": {
    strategy:
      "Ein langsamer Zug, der ...b5 vorbereitet, das Schwarz auch sofort spielen kann; er " +
      "verliert also einfach ein Tempo, während Weiß das Zentrum aufbaut.",
  },

  "1.Nf3 Nf6 2.g3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und kontrolliert b4, tut aber nichts für Entwicklung oder " +
      "Zentrum, sodass Weiß ungestört aufbauen kann.",
  },

  "1.Nf3 Nf6 2.g3 Na6": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er b4 und c5 im Blick hat, aber wenig Einfluss " +
      "auf das Zentrum nimmt. Weiß gewinnt Zeit, dort aufzubauen.",
  },

  "1.Nf3 Nf6 2.g3 Rg8": {
    strategy:
      "Verbraucht ein Tempo und gibt die kurze Rochade endgültig auf, da der Turm h8 gezogen " +
      "hat, ohne Entwicklung oder Zentrum zu fördern.",
  },

  "1.Nf3 Nf6 2.g3 Ng8": {
    strategy:
      "Nimmt den ersten Zug zurück. Schwarz hat zwei Tempi verbraucht, um zur Ausgangsstellung " +
      "zurückzukehren, während Weiß den Springer entwickelt und das Fianchetto vorbereitet hat " +
      "und im Zentrum freie Hand besitzt.",
  },

  "1.Nf3 Nf6 2.g3 h6": {
    strategy:
      "Ein vorbeugender Bauernzug, der ein Tempo verbraucht, obwohl es noch nichts zu verhindern " +
      "gibt. Er fördert weder Entwicklung noch Zentrum, sodass Weiß in Ruhe aufbauen kann.",
  },

  "1.Nf3 Nf6 2.g3 h5": {
    strategy:
      "Strebt ...h4 an, um den Bauern g3 anzugreifen, schwächt aber g5 und lockert den " +
      "Königsflügel, bevor Schwarz entwickelt ist. Für das Zentrum tut der Zug nichts, sodass " +
      "Weiß es ungestört aufbaut.",
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
      "umkämpft. Weiß kann das Zentrum aufbauen oder ihn sofort mit 3.g4 vertreiben und dabei " +
      "mit Tempo Raum am Königsflügel gewinnen.",
  },

  "1.Nf3 Nf6 2.g3 Nd5": {
    strategy:
      "Zentralisiert den Springer, doch 3.c4 greift ihn sofort an, und er muss zurückweichen, " +
      "etwa nach b6. Weiß gewinnt Zeit für ein breites Zentrum, während Schwarz drei Züge mit " +
      "einem Springer verbraucht hat.",
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
      "Besetzt sofort das Zentrum und erschwert zusammen mit dem Springer f6 den weißen Vorstoß " +
      "e4. Der Läufer b2 beißt auf ein festes Bauernzentrum, das Weiß untergraben muss, während " +
      "Schwarz sich geradlinig entwickelt. Der Preis ist etwas Flexibilität, weil der d-Bauer " +
      "früh festgelegt ist.",
  },

  "1.Nf3 Nf6 2.b3 g6": {
    strategy:
      "Beantwortet das weiße Fianchetto mit einem eigenen: Der Läufer g7 wird den Läufer b2 auf " +
      "der langen Diagonale herausfordern. Der Aufbau ist flexibel und hält …c5 in Reserve, doch " +
      "solange Schwarz nicht rochiert hat, ist der Läufer g7 ungedeckt, sodass ein unbedachter " +
      "Zug des Springers f6 ihn durch Lxg7 einstellen kann.",
  },

  "1.Nf3 Nf6 2.b3 e6": {
    strategy:
      "Öffnet die Diagonale für den Läufer f8 und lässt die Wahl des Aufbaus offen, vom " +
      "klassischen Zentrum bis zum Fianchetto im Stil der Damenindischen Verteidigung. Der Preis " +
      "ist ein Läufer c8, der hinter dem Bauern e6 eingesperrt bleibt, bis Schwarz ihn befreit.",
  },

  "1.Nf3 Nf6 2.b3 c5": {
    strategy:
      "Kämpft sofort um d4, beantwortet das weiße Flügelspiel mit einem Schlag gegen das Zentrum " +
      "und hält den Bauernaufbau flexibel. Die Partie tendiert zu Strukturen der Englischen " +
      "Eröffnung mit symmetrischem Bauernbild, ruhig und manövrierend, wobei sich keine Seite " +
      "früh festlegt.",
  },

  "1.Nf3 Nf6 2.b3 b6": {
    strategy:
      "Übernimmt den weißen Aufbau: Der Läufer c8 stellt sich im Stil der Damenindischen " +
      "Verteidigung dem Läufer b2 auf der langen Diagonale entgegen. Die Stellung ist solide, " +
      "aber etwas passiv, da Schwarz kaum schnelles Gegenspiel hat und meist auf den weißen Plan " +
      "reagiert.",
  },

  "1.Nf3 Nf6 2.b3 Nc6": {
    strategy:
      "Entwickelt eine Figur und zielt auf d4 und e5, doch der Springer verstellt den c-Bauern " +
      "und legt sich fest, bevor die schwarze Struktur geklärt ist. Nach Lb2 wäre der Bauer nach " +
      "…e5 zweimal angegriffen und nur einmal gedeckt, daher muss Schwarz diesen Zug erst " +
      "vorbereiten.",
  },

  "1.Nf3 Nf6 2.b3 d6": {
    strategy:
      "Bereitet vor, im Zentrum Raum zu nehmen oder den Königsläufer zu fianchettieren. Der Zug " +
      "ist bescheiden: Er kämpft nicht wie …d5 um e4, und Weiß entwickelt sich ungestört.",
  },

  "1.Nf3 Nf6 2.b3 c6": {
    strategy:
      "Bereitet …d5 mit einem Bauernpaar wie in der Slawischen Verteidigung vor und hält den " +
      "Läufer c8 frei. Der Zug ist solide, aber langsamer als sofortiges …d5 und nimmt dem " +
      "Springer b8 das Feld c6, sodass Weiß Zeit zur Entwicklung erhält.",
  },

  "1.Nf3 Nf6 2.b3 a6": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern, der weder um das Zentrum kämpft noch eine " +
      "Figur entwickelt. Weiß erlangt einen Entwicklungsvorsprung.",
  },

  "1.Nf3 Nf6 2.b3 a5": {
    strategy:
      "Bereitet …a4 gegen den Bauern b3 vor, verbraucht aber ein Tempo am Flügel, solange das " +
      "Zentrum unbestritten ist, und der a-Bauer kann b6 und b5 nicht mehr decken. Weiß " +
      "entwickelt sich ungestört.",
  },

  "1.Nf3 Nf6 2.b3 b5": {
    strategy:
      "Schwächt den Damenflügel: Nach e3 greift der Läufer f1 den Bauern b5 an, sodass …a6 " +
      "oder …c6 nötig ist, um ihn zu halten, und die schwarze Entwicklung gerät in Rückstand.",
  },

  "1.Nf3 Nf6 2.b3 h6": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauernzug, obwohl auf g5 nichts zu verhindern ist, und " +
      "das Zentrum bleibt unbestritten. Weiß entwickelt sich ungestört.",
  },

  "1.Nf3 Nf6 2.b3 h5": {
    strategy:
      "Rückt den Randbauern ohne Zweck vor und verliert ein Tempo, während das Zentrum " +
      "unbestritten bleibt. Weiß entwickelt sich einfach weiter.",
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
      "nützlichen Zug von Schwarz rückgängig. Weiß gewinnt zwei Tempi und entwickelt sich in " +
      "Ruhe.",
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
      "Zentralisiert den Springer zu früh: d3 vertreibt ihn sofort und Weiß gewinnt einen freien " +
      "Zug, denn der Rückzug nach c5 läuft in b4, der nach d6 verstellt den d-Bauern.",
  },

  "1.Nf3 Nf6 2.b3 Nd5": {
    strategy:
      "Stellt den Springer auf ein Feld, auf dem ihn e4 oder c4 mit Tempo angreift; Weiß baut " +
      "dann ein breites Bauernzentrum auf, während der schwarze Springer drei Züge gebraucht hat " +
      "und vertrieben wurde.",
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
      "für Zentrum oder Entwicklung zu tun. Weiß entwickelt sich einfach weiter, während der " +
      "schwarze König seinen natürlichen Platz verloren hat.",
  },
};
