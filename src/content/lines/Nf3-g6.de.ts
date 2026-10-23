import type { OpeningTexts } from "../book.ts";

// German prose for Nf3-g6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.Nf3 g6 2.c4": {
    background:
      "Die Stellung gehört zur Englischen Eröffnung und entsteht auch nach 1.c4 g6 2.Sf3. Die " +
      "Englische Eröffnung ist nach Howard Staunton benannt, der 1.c4 im Wettkampf gegen " +
      "Saint-Amant 1843 und in London 1851, dem ersten internationalen Turnier, spielte. " +
      "Seine Zeitgenossen griffen sie nicht auf, durchgesetzt hat sie sich erst im 20. " +
      "Jahrhundert.",
    strategy:
      "Gewinnt Raum am Damenflügel, kontrolliert d5 und bereitet Sc3 und d4 vor. Nach 2...Lg7 " +
      "3.d4 Sf6 steuert die Partie auf die Königsindische, die Grünfeld- oder eine " +
      "Benoni-Verteidigung zu, während 2...c5 zu einer symmetrischen Englischen Eröffnung mit " +
      "Sc3 und g3 oder nach d4 cxd4 Sxd4 und e4 zum Maróczy-Aufbau führt. Der Bauer besetzt " +
      "kein Zentrumsfeld, sodass Schwarz die Struktur noch wählt.",
  },

  "1.Nf3 g6 2.d4": {
    strategy:
      "Besetzt das Zentrum und hält c4 und e4 in Reserve. Nach 2...Lg7 wählt Weiß vor allem " +
      "zwischen 3.c4, das zu königsindischen oder Grünfeld-Strukturen führt, sobald ...Sf6 " +
      "gespielt ist, und 3.e4, einer Modernen oder Pirc-Ufimzew-Verteidigung mit dem Springer " +
      "schon auf f3. Schwarz lässt Weiß das Zentrum aufbauen und greift es später mit ...c5 " +
      "oder mit ...d6 und ...e5 an.",
  },

  "1.Nf3 g6 2.e4": {
    strategy:
      "Besetzt das Zentrum und erreicht die Stellung nach 1.e4 g6 2.Sf3. Nach 2...Lg7 3.d4 d6 " +
      "entsteht die Moderne Verteidigung, und ...Sf6 mit Sc3 führt in die " +
      "Pirc-Ufimzew-Verteidigung über, während 2...c5 in eine Sizilianische Verteidigung mit " +
      "frühem ...g6 überleitet. Noch deckt nichts den Bauern e4, sodass Schwarz ihn auch " +
      "sofort mit ...d5 angreifen kann.",
  },

  "1.Nf3 g6 2.g3": {
    background:
      "Ein Weg in den Königsindischen Angriff, den Bobby Fischer (vor allem in seiner frühen " +
      "Karriere), Michail Botwinnik, Wassili Smyslow und Tigran Petrosjan alle einsetzten. " +
      "Auf Großmeisterebene kam er als Ableger der in den 1950er-Jahren weit verbreiteten " +
      "Königsindischen Verteidigung auf, wobei Weiß den schwarzen Aufbau mit einem " +
      "Zusatztempo übernimmt.",
    strategy:
      "Bereitet Lg2 vor, um das schwarze Fianchetto zu spiegeln, und hält d3, d4 und c4 " +
      "offen. Weiß setzt mit Lg2 und O-O fort und baut dann mit d3 und e4 einen " +
      "Königsindischen Angriff oder mit c4 einen Réti- oder englischen Aufbau auf. Schwarz " +
      "kann mit ...d5 sofort das Zentrum besetzen, daher muss Weiß bereit sein, es mit c4 " +
      "oder mit d3 und e4 anzugreifen.",
  },

  "1.Nf3 g6 2.b3": {
    strategy:
      "Bereitet Lb2 vor, doch 2...Lg7 greift über das leere Feld b2 den Turm a1 an, und 3.Lb2 " +
      "Lxb2 kostet eine Figur, da nichts b2 deckt. Weiß muss die Diagonale erst mit c3, d4 " +
      "oder Sc3 verstellen, sodass das Fianchetto einen Zusatzzug kostet und Schwarz " +
      "unterdessen das Zentrum besetzt.",
  },

  "1.Nf3 g6 2.c3": {
    strategy:
      "Bereitet d4 mit Bauernunterstützung vor und verstellt die lange Diagonale schon vor " +
      "...Lg7. Der Zug entwickelt nichts und nimmt dem Damenspringer das Feld c3, während " +
      "Schwarz ...Lg7 spielt und das Zentrum mit ...d5 oder mit ...d6 und ...e5 besetzt.",
  },

  "1.Nf3 g6 2.d3": {
    strategy:
      "Unterstützt ein späteres e4 und öffnet den Läufer c1, mit dem Ziel g3, Lg2, O-O und e4 " +
      "nach Art des Königsindischen Angriffs. Der Zug ist solide, aber bescheiden: Schwarz " +
      "entwickelt sich mit ...Lg7 und besetzt mit ...d5 oder ...e5 das Zentrum, und das weiße " +
      "Spiel bleibt passiv, bis e4 durchgesetzt ist.",
  },

  "1.Nf3 g6 2.e3": {
    strategy:
      "Öffnet den Läufer f1 und unterstützt d4, worauf Le2, O-O und d4 oder c4 folgen. Der " +
      "Zug ist solide, aber passiv: Der Bauer e3 sperrt den Läufer c1 ein, und Schwarz " +
      "entwickelt sich mit ...Lg7 und gewinnt mit ...d5 oder ...c5 Raum.",
  },

  "1.Nf3 g6 2.Nc3": {
    strategy:
      "Entwickelt den zweiten Springer und überwacht e4 und d5. Er verstellt den c-Bauern, " +
      "sodass c4 vorerst ausscheidet, und Schwarz kann mit ...d5 das Zentrum besetzen oder " +
      "...Lg7 und ...d6 spielen. Der Zug ist solide, legt den Springer aber fest, bevor Weiß " +
      "einen Bauernaufbau gewählt hat.",
  },

  "1.Nf3 g6 2.a3": {
    strategy:
      "Ein langsamer Randbauernzug, der b4 vorbereitet, aber nichts für das Zentrum oder die " +
      "Entwicklung tut. Schwarz entwickelt sich mit ...Lg7 und gewinnt mit ...d5 oder ...c5 " +
      "Raum, während Weiß noch abwartet.",
  },

  "1.Nf3 g6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel, schwächt aber b4 und das Feld b3 und entwickelt nichts. " +
      "Schwarz baut mit ...Lg7 und ...d5 oder ...c5 auf, und der Randbauernzug erweist sich " +
      "als verlorenes Tempo.",
  },

  "1.Nf3 g6 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel, lässt aber b2 leer, sodass 2...Lg7 sofort den Turm a1 " +
      "angreift und Weiß die Diagonale mit c3, d4 oder Sc3 verstellen muss. Der Bauer b4 wird " +
      "dann zum Angriffsziel für ...a5 und ...c5.",
  },

  "1.Nf3 g6 2.h3": {
    strategy:
      "Nimmt dem schwarzen Läufer und Springer das Feld g4, verbraucht aber ein Tempo für " +
      "einen Randbauernzug und tut nichts für das Zentrum. Schwarz spielt ...Lg7 und ...d5 " +
      "und besetzt als Erster das Zentrum.",
  },

  "1.Nf3 g6 2.h4": {
    strategy:
      "Bereitet h5 gegen den Bauern g6 vor, doch Schwarz kann das mit ...h5 verhindern oder " +
      "sich einfach mit ...Lg7 entwickeln und mit ...d5 das Zentrum besetzen. Der Vorstoß " +
      "schwächt g3 und tut nichts für die Entwicklung.",
  },

  "1.Nf3 g6 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er b5 und c4 ins Auge fasst, aber den a-Bauern " +
      "blockiert und nichts im Zentrum deckt. Schwarz besetzt mit ...d5 das Zentrum, womit er " +
      "auch c4 überwacht, und entwickelt sich mit ...Lg7, während der Springer außer Spiel " +
      "bleibt.",
  },

  "1.Nf3 g6 2.Rg1": {
    strategy:
      "Unterstützt ein späteres g4 und g5, gibt aber die kurze Rochade auf und entwickelt " +
      "nichts. Schwarz spielt ...Lg7 und ...d5 und besetzt das Zentrum, während der weiße " +
      "König vorerst in der Mitte bleibt.",
  },

  "1.Nf3 g6 2.Ng5": {
    strategy:
      "Zieht den Springer ein zweites Mal, um h7 und f7 anzugreifen, die beide gedeckt sind. " +
      "Nach 2...h6 muss er erneut ziehen, und Schwarz gewinnt Zeit für ...Lg7 und ...d5.",
  },

  "1.Nf3 g6 2.Nh4": {
    strategy:
      "Zieht den Springer ein zweites Mal, an den Rand, wo er g6 ins Auge fasst, doch Sxg6 " +
      "hxg6 gibt nur einen Springer für einen Bauern. 2...e5 öffnet der Dame den Weg nach h4, " +
      "und der Springer muss erneut ziehen oder mit g3 gedeckt werden.",
  },

  "1.Nf3 g6 2.Ne5": {
    strategy:
      "Zieht den Springer ein zweites Mal auf ein Feld, auf dem ihn nichts stützt: 2...d6 " +
      "greift ihn an und er muss erneut ziehen, sodass Weiß zwei Züge umsonst aufwendet, " +
      "während Schwarz Raum im Zentrum gewinnt und dem Läufer c8 die Diagonale öffnet.",
  },

  "1.Nf3 g6 2.Nd4": {
    strategy:
      "Zieht den Springer ein zweites Mal auf ein Feld, auf dem ihn ...e5 oder ...c5 sofort " +
      "angreift. Er muss erneut ziehen, und Schwarz gewinnt mit Tempo Raum im Zentrum.",
  },

  "1.Nf3 g6 2.Ng1": {
    strategy:
      "Bringt den Springer auf sein Ausgangsfeld zurück und macht den ersten Zug rückgängig, " +
      "als hätte Weiß zweimal ausgesetzt. Schwarz besetzt mit ...d5 oder ...e5 das Zentrum, " +
      "während Weiß von vorn beginnt.",
  },

  "1.Nf3 g6 2.g4": {
    strategy:
      "Schwächt den Königsflügel dauerhaft und lässt den Bauern ungedeckt, da der Springer f3 " +
      "die Diagonale der Dame verstellt. Nach 2...d5 greift der Läufer c8 den Bauern g4 an, " +
      "und Weiß muss einen weiteren Zug für h3, Lh3 oder Tg1 aufwenden, nur um ihn zu halten.",
  },

  "1.Nf3 g6": {
    name: "Zukertort-Eröffnung: Königsfianchetto",
  },

  "1.Nf3 g6 2.c4 Bg7": {
    strategy:
      "Stellt den Läufer auf die lange Diagonale, wo er das Zentrum und b2 ins Visier nimmt, " +
      "und hält ...Sf6, ...d6, ...c5 und ...d5 offen. Nach 3.d4 Sf6 4.Sc3 wählt Schwarz " +
      "zwischen ...d6 und ...O-O für einen königsindischen Aufbau und ...d5 für die " +
      "Grünfeld-Indische Verteidigung, und auch 3.e4 d6 4.d4 Sf6 5.Sc3 ist Königsindisch. Der " +
      "Preis dafür ist, dass Weiß zuerst das Zentrum besetzt und Schwarz es später " +
      "untergraben muss.",
  },

  "1.Nf3 g6 2.c4 Nf6": {
    strategy:
      "Entwickelt den Springer, kontrolliert e4 und d5 und steuert dieselben " +
      "Fianchetto-Strukturen an wie ...Lg7. Nach 3.Sc3 Lg7 4.e4 d6 5.d4 ist die Partie " +
      "Königsindisch, 3.d4 Lg7 4.Sc3 d5 ist Grünfeld-Indisch, und 3.Sc3 d5 4.cxd5 Sxd5 5.e4 " +
      "Sxc3 6.bxc3 Lg7 7.d4 ist die Abtauschvariante der Grünfeld-Indischen Verteidigung. " +
      "Schwarz wählt zwischen ...d6 und ...d5, Weiß zwischen einem frühen e4 und einem frühen " +
      "d4.",
  },

  "1.Nf3 g6 2.c4 c5": {
    strategy:
      "Zielt auf d4 und lenkt in die Symmetrische Variante der Englischen Eröffnung. Nach " +
      "3.d4 cxd4 4.Sxd4 Lg7 5.e4 errichtet Weiß den Maróczy-Aufbau, Bauern auf c4 und e4, die " +
      "...d5 und ...b5 erschweren, und Schwarz setzt auf Figurenspiel mit ...Sc6 und ...Sf6; " +
      "3.Sc3 Lg7 4.d4 cxd4 5.Sxd4 führt zur selben Struktur, sobald Weiß e4 folgen lässt. Der " +
      "Preis ist ein eingeengtes Spiel, wenn Schwarz den Aufbau zulässt.",
  },

  "1.Nf3 g6 2.c4 d6": {
    strategy:
      "Deckt e5 und c5 und bereitet ...Lg7 mit ...Sf6 oder ...e5 vor. Der Zug ist solide, " +
      "legt sich aber früh fest: 3.Sc3 Lg7 4.d4 Sf6 5.e4 ist Königsindisch, und die " +
      "Grünfeld-Indische Verteidigung mit ...d5 ist nur noch mit Tempoverlust zu haben.",
  },

  "1.Nf3 g6 2.c4 d5": {
    strategy:
      "Greift c4 an, bevor eine Figur entwickelt ist, und nach 3.cxd5 muss Schwarz Züge " +
      "darauf verwenden, den Bauern zurückzugewinnen. 3...Dxd5 4.Sc3 vertreibt die Dame mit " +
      "Tempogewinn, und 3...Sf6 4.Sc3 Sxd5 erreicht dieselbe Stellung wie 2...Sf6 3.Sc3 d5 " +
      "4.cxd5 Sxd5, doch Weiß muss nicht 4.Sc3 wählen.",
  },

  "1.Nf3 g6 2.c4 e6": {
    strategy:
      "Deckt d5 und f5 und bereitet ...d5 vor, dazu folgen ...Lg7 und ...Sf6 oder ...Se7. Der " +
      "Zug ist solide, aber langsam: Nach 3.d4 Lg7 4.Sc3 kann Weiß e4 folgen lassen, und der " +
      "Läufer c8 bleibt hinter e6 eingesperrt, bis ...b6 ihm das Feld b7 freimacht.",
  },

  "1.Nf3 g6 2.c4 b6": {
    strategy:
      "Bereitet ...Lb7 zusammen mit ...Lg7 vor, ein doppeltes Fianchetto, das beide Läufer " +
      "auf das Zentrum richtet. Der Zug ist solide, überlässt Weiß aber das Zentrum: Nach " +
      "3.d4 Lb7 4.Sc3 Lg7 5.e4 hat Weiß ein breites Bauernzentrum, und Schwarz muss es später " +
      "angreifen, etwa mit ...c5.",
  },

  "1.Nf3 g6 2.c4 c6": {
    strategy:
      "Bereitet ...d5 mit einer Bauernkette wie in der Slawischen Verteidigung vor, während " +
      "...Lg7 und ...Sf6 noch folgen. Der Zug ist solide, aber passiv: Der Bauer nimmt dem " +
      "Springer b8 das Feld c6, und 3.d4 d5 4.Sc3 Lg7 5.cxd5 cxd5 6.Db3 setzt d5 und b7 " +
      "zugleich unter Druck.",
  },

  "1.Nf3 g6 2.c4 f5": {
    strategy:
      "Kontrolliert e4 und steuert das Leningrader System der Holländischen Verteidigung an, " +
      "das 3.d4 Sf6 4.g3 Lg7 5.Lg2 O-O durch Zugumstellung erreicht. Der Zug ist solide, legt " +
      "sich aber fest: Der Bauer schwächt e6 und die Diagonale a2-g8, und Weiß muss nicht mit " +
      "g3 und Lg2 ins Leningrader System einlenken.",
  },

  "1.Nf3 g6 2.c4 Nc6": {
    strategy:
      "Entwickelt den Springer auf ein natürliches Feld, von dem aus er d4 und e5 " +
      "kontrolliert. Der Zug ist solide, aber nicht zu empfehlen: Der Springer verstellt den " +
      "c-Bauern und muss nach 3.d4 Lg7 4.d5 erneut ziehen, während Weiß mit Tempo Raum " +
      "gewinnt.",
  },

  "1.Nf3 g6 2.c4 b5": {
    strategy:
      "Bietet den b-Bauern an, damit 3.cxb5 den c-Bauern vom Zentrum ablenkt. Schwarz kann " +
      "mit ...a6 Linien am Damenflügel öffnen, doch ohne ...c5 fehlt der Druck wie im " +
      "Wolga-Gambit: ...Lg7 trifft auf b2, das der Läufer c1 deckt, und Weiß behält den " +
      "Mehrbauern.",
  },

  "1.Nf3 g6 2.c4 Na6": {
    strategy:
      "Ein verfrühter Randzug, der auf b4 und c5 zielt. Der Springer deckt weder d4 noch e5, " +
      "daher erhält Weiß mit 3.d4 Lg7 4.e4 ein breites Zentrum, während der Springer noch ein " +
      "gutes Feld suchen muss.",
  },

  "1.Nf3 g6 2.c4 Bh6": {
    strategy:
      "Verlässt die lange Diagonale zugunsten der Diagonale c1-h6. Nach 3.d4 stehen sich die " +
      "Läufer gegenüber, während Weiß das Zentrum hält, und ein Tausch auf c1 oder h6 kostet " +
      "Schwarz den Läufer, der f6 und h6 decken soll, die durch ...g6 geschwächten dunklen " +
      "Felder.",
  },

  "1.Nf3 g6 2.c4 Nh6": {
    strategy:
      "Ein Randspringer, der nach f5 strebt und dort vertrieben wird: Nach 3.d4 Sf5 4.e4 muss " +
      "er erneut ziehen, während Weiß mit Tempo das Zentrum besetzt. Schwarz hat eine Figur " +
      "auf ein schlechtes Feld entwickelt und Weiß das Zentrum überlassen.",
  },

  "1.Nf3 g6 2.c4 a6": {
    strategy:
      "Bereitet ...b5 gegen c4 vor, verwendet aber ein Tempo auf einen Randbauern, bevor eine " +
      "Figur entwickelt ist. Weiß antwortet mit 3.d4 oder 3.Sc3 und besetzt das Zentrum.",
  },

  "1.Nf3 g6 2.c4 a5": {
    strategy:
      "Erschwert b4, verwendet aber ein Tempo auf einen Randbauern, schwächt b5 und tut weder " +
      "etwas für das Zentrum noch für die Entwicklung. Weiß spielt 3.d4 oder 3.Sc3 und " +
      "gewinnt ungehindert Raum.",
  },

  "1.Nf3 g6 2.c4 f6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6, schwächt e6 und die Diagonale a2-g8 und entwickelt " +
      "nichts. Weiß setzt mit 3.d4 und Sc3 fort, und die schwarzen Figuren finden kaum gute " +
      "Felder.",
  },

  "1.Nf3 g6 2.c4 h6": {
    strategy:
      "Nimmt den weißen Figuren das Feld g5, verwendet aber ein Tempo auf einen Randbauern, " +
      "entwickelt nichts und lässt den Bauern g6 ohne Stütze durch den h-Bauern. Weiß spielt " +
      "3.d4 und 4.Sc3 und baut ungehindert das Zentrum auf.",
  },

  "1.Nf3 g6 2.c4 h5": {
    strategy:
      "Bereitet ...h4 vor, verwendet aber ein Tempo auf einen Randbauern, schwächt g5 und " +
      "entwickelt nichts. Weiß besetzt mit 3.d4 oder 3.Sc3 das Zentrum, und der Vorstoß des " +
      "h-Bauern gewinnt kein Tempo.",
  },

  "1.Nf3 g6 2.c4 e5": {
    strategy:
      "Stellt den Bauern ein: 3.Sxe5 schlägt ihn, und 3...Lg7 wird mit 4.d4 beantwortet, das " +
      "den Springer deckt, sodass Schwarz für den verlorenen Bauern nichts vorzuweisen hat.",
  },

  "1.Nf3 g6 2.c4 g5": {
    strategy:
      "Verliert sofort einen Bauern: Nichts deckt g5, also gewinnt ihn 3.Sxg5, und der " +
      "Springer nimmt h7 und f7 ins Visier, während Schwarz den Königsflügel umsonst " +
      "geschwächt hat.",
  },

  "1.Nf3 g6 2.d4 Bg7": {
    strategy:
      "Stellt den Läufer auf die lange Diagonale gegen d4 und b2 und bereitet ...O-O vor, " +
      "während ...Sf6, ...d6, ...c5 und ...d5 offenbleiben. Weiß baut meist mit 3.c4 auf, mit " +
      "Blick auf königsindische oder Grünfeld-Strukturen nach ...Sf6, oder mit 3.e4, wonach " +
      "...d6 eine Moderne Verteidigung ergibt. Der Preis: Weiß nimmt zuerst Raum, und Schwarz " +
      "muss das Zentrum später mit ...c5 oder ...e5 untergraben.",
  },

  "1.Nf3 g6 2.d4 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, kontrolliert e4 und d5 und erreicht " +
      "dieselbe Stellung wie 1.d4 Sf6 2.Sf3 g6. Spielt Weiß 3.c4, führt ...Lg7 zu " +
      "königsindischen oder Grünfeld-Strukturen; vermeidet Weiß c4 mit 3.g3, 3.Lf4 oder " +
      "3.Lg5, entwickelt sich Schwarz mit ...Lg7, ...O-O und ...d6 oder ...d5 und greift das " +
      "Zentrum mit ...c5 oder ...e5 an. Im Zentrum hat Weiß dennoch das erste Wort.",
  },

  "1.Nf3 g6 2.d4 d6": {
    name: "Damenbauernspiel: Rossolimo-Variante",
    strategy:
      "Kontrolliert e5, öffnet dem Läufer c8 den Weg zu ...Lg4 und hebt ...Lg7 und ...Sf6 für " +
      "später auf. Nach 3.e4 Lg7 bewegt sich die Partie im Gebiet der Pirc-Ufimzew- oder der " +
      "Modernen Verteidigung, und nach 3.c4 Lg7 4.e4 kann Schwarz den Springer f3 mit ...Lg4 " +
      "fesseln oder mit ...Sf6 einen königsindischen Aufbau wählen. Der Bauer d6 legt das " +
      "Zentrum früh fest: ...d5 kostet nun ein Tempo, die Grünfeld-Verteidigung scheidet also " +
      "aus, und Weiß bestimmt die Struktur.",
  },

  "1.Nf3 g6 2.d4 Na6": {
    strategy:
      "Strebt nach c7 oder b4 und hält den c-Bauern für ...c5 oder ...c6 frei, ...Lg7 folgt " +
      "noch. Der Springer steht am Rand und tut nichts für das Zentrum, und 3.e4 Lg7 4.Lxa6 " +
      "bxa6 hinterlässt Schwarz einen Doppelbauern auf der a-Linie, wenn auch mit dem " +
      "Läuferpaar als Gegenwert. Solide, doch Weiß antwortet ohne Mühe mit e4 und c4.",
  },

  "1.Nf3 g6 2.d4 Nh6": {
    name: "Zukertort-Verteidigung: Königsflügelvariante",
    strategy:
      "Entwickelt den Springer in Richtung f5 und hält ...Lg7 offen. Am Rand tut er wenig für " +
      "das Zentrum, und 3.Lxh6 Lxh6 gibt Schwarz das Läuferpaar, doch Weiß behält das Zentrum " +
      "und baut in aller Ruhe mit e4 und c4 auf.",
  },

  "1.Nf3 g6 2.d4 b6": {
    strategy:
      "Bereitet ...Lb7 als Gegenstück zu ...Lg7 vor, ein Doppelfianchetto, das von den " +
      "Flügeln aus auf d4 und e4 zielt. Solide, doch Schwarz überlässt Weiß das Zentrum: Nach " +
      "3.e4 Lb7 4.Sc3 oder 4.Ld3 müssen die Bauern d4 und e4 später mit ...c5 oder ...e5 " +
      "untergraben werden.",
  },

  "1.Nf3 g6 2.d4 c6": {
    strategy:
      "Bereitet ...d5 mit einer Bauernkette wie in der Slawischen oder der " +
      "Caro-Kann-Verteidigung vor, ...Lg7 und ...Sf6 folgen noch. Der Zug legt den c-Bauern " +
      "fest, bevor der weiße Aufbau klar ist, und 3.e4 d5 4.e5 gibt Weiß den Raum der " +
      "Vorstoßvariante der Caro-Kann-Verteidigung, den Schwarz mit ...c5 oder ...f6 " +
      "untergraben muss. Solide, aber passiv.",
  },

  "1.Nf3 g6 2.d4 c5": {
    strategy:
      "Greift d4 sofort an, für eine Partie sizilianischen oder Benoni-Typs, ...Lg7 folgt " +
      "noch. Nach 3.dxc5 gewinnt Schwarz den Bauern mit ...Da5+ und ...Dxc5 zurück, verliert " +
      "aber Zeit mit der Dame, und 3.d5 gibt Weiß einen Raumvorteil wie im Benoni, bevor " +
      "Schwarz ...Sf6 oder ...e6 eingeschoben hat. Spielbar, doch Weiß bekommt die Wahl der " +
      "Struktur.",
  },

  "1.Nf3 g6 2.d4 d5": {
    strategy:
      "Besetzt sofort das Zentrum und erreicht die Stellung nach 1.d4 d5 2.Sf3 g6. Schwarz " +
      "folgt mit ...Lg7 und ...Sf6, mit ...c6 für einen slawischen Aufbau oder ohne für ein " +
      "Spiel wie in der Grünfeld-Verteidigung, doch vorerst deckt nur die Dame d5, sodass " +
      "3.c4 den Bauern sofort angreift. Spielbar, legt aber den Bauern fest, bevor die " +
      "Figuren draußen sind.",
  },

  "1.Nf3 g6 2.d4 e6": {
    strategy:
      "Hält ...d5 und ...c5 in Reserve und erreicht die Stellung nach 1.d4 e6 2.Sf3 g6. Noch " +
      "macht kein Bauer d4 oder e4 streitig, sodass Weiß mit 3.e4 das Zentrum besetzen kann " +
      "und Schwarz es später mit ...c5 oder ...d5 untergraben muss. Zusammen mit ...g6 lässt " +
      "der Zug f6 ohne Bauerndeckung, und der Bauer e6 sperrt den Läufer c8 ein.",
  },

  "1.Nf3 g6 2.d4 f5": {
    strategy:
      "Nimmt Weiß das Feld e4 und steuert einen Leningrader Aufbau der Holländischen " +
      "Verteidigung mit ...Lg7, ...Sf6, ...O-O und ...d6 an, der den Läufer auf die lange " +
      "Diagonale stellt. Spielbar, doch Weiß behält die freie Wahl des Aufbaus, und das Feld " +
      "e6 sowie die Diagonale a2-g8 bleiben schwach.",
  },

  "1.Nf3 g6 2.d4 Nc6": {
    strategy:
      "Entwickelt einen Springer, läuft aber in 3.d5, das ihn angreift, und 3...Se5 verliert " +
      "nach 4.Sxe5 eine Figur. Der Springer muss nach b8 zurück oder nach b4 oder a5 " +
      "ausweichen, wo ihn a3, c3 oder b4 erneut vertreibt, sodass Weiß Raum und Zeit gewinnt, " +
      "während der Läufer f8 noch zu Hause steht.",
  },

  "1.Nf3 g6 2.d4 Bh6": {
    strategy:
      "Greift den Läufer c1 an, doch 3.Lxh6 Sxh6 tauscht genau den Fianchettoläufer ab, dem " +
      "der Bauer g6 dienen sollte. Schwarz bleibt mit einem Springer am Rand und schwachen " +
      "schwarzen Feldern um den König zurück.",
  },

  "1.Nf3 g6 2.d4 a6": {
    strategy:
      "Bereitet ...b5 und ...Lb7 vor, tut aber nichts für das Zentrum oder den Königsflügel. " +
      "Weiß baut mit e4 und c4 auf, während die schwarzen Figuren zu Hause bleiben, und der " +
      "Vorstoß am Damenflügel hat noch kein Ziel.",
  },

  "1.Nf3 g6 2.d4 a5": {
    strategy:
      "Nimmt den weißen Figuren das Feld b4 und gewinnt Raum am Damenflügel, vernachlässigt " +
      "aber das Zentrum und schwächt b5. Weiß spielt ungehindert e4, c4 und Sc3, während " +
      "Schwarz noch unentwickelt ist.",
  },

  "1.Nf3 g6 2.d4 b5": {
    strategy:
      "Schiebt den b-Bauern vor, bevor die Figuren entwickelt sind, und nimmt dem Feld c6 den " +
      "Schutz des b-Bauern. Weiß entwickelt sich mit e4, Sc3 und Ld3, wobei die beiden " +
      "Figuren b5 angreifen, sodass Schwarz weitere Züge für ...a6 oder ...c6 aufwenden muss, " +
      "um den Bauern zu halten.",
  },

  "1.Nf3 g6 2.d4 f6": {
    strategy:
      "Nimmt dem Springer das Feld f6, raubt dem Bauern g6 die Stütze des f-Bauern und " +
      "schwächt e6 sowie die Diagonale a2-g8. Der Zug entwickelt nichts, und Weiß besetzt mit " +
      "e4 und c4 das Zentrum, während die schwarzen Figuren zu Hause bleiben.",
  },

  "1.Nf3 g6 2.d4 h6": {
    strategy:
      "Verhindert Lg5 und Sg5, ist aber ein langsamer, defensiver Zug, der nichts für Zentrum " +
      "oder Entwicklung tut. Weiß besetzt mit e4 und c4 das Zentrum, während Schwarz noch " +
      "keine Figur entwickelt hat.",
  },

  "1.Nf3 g6 2.d4 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel mit Blick auf ...h4, doch der Bauer g6 verliert die " +
      "Stütze des h-Bauern, und der h-Bauer kann g5 nie mehr decken. Weiß baut mit e4 und c4 " +
      "auf, während Schwarz noch nichts entwickelt hat.",
  },

  "1.Nf3 g6 2.d4 e5": {
    strategy:
      "Verliert einen Bauern: Nach 3.dxe5 deckt der Springer f3 das Feld e5, und sobald Lf4 " +
      "einen zweiten Verteidiger hinzufügt, reichen ...Sc6 und ...Lg7 allein nicht, um ihn " +
      "zurückzugewinnen. Schwarz erhält für den Bauern nur etwas Entwicklung.",
  },

  "1.Nf3 g6 2.d4 g5": {
    strategy:
      "Verliert sofort einen Bauern: Der Bauer g5 wird vom Springer und vom Läufer c1 " +
      "angegriffen und von nichts gedeckt, sodass 3.Sxg5 oder 3.Lxg5 ihn gewinnt und den " +
      "Königsflügel öffnet.",
  },

  "1.Nf3 g6 2.g3 Bg7": {
    strategy:
      "Vollendet das Fianchetto: Der Läufer auf g7 blickt die lange Diagonale entlang " +
      "Richtung d4 und b2 und macht f8 frei, sodass …Sf6 und …O-O folgen können. Schwarz " +
      "spiegelt den weißen Aufbau und hält das Zentrum flexibel; er wählt zwischen …c5, …d5 " +
      "und …d6 mit …e5, sobald der weiße Plan klar ist. Der Preis ist ein langsameres Spiel " +
      "im Zentrum, denn Weiß kann mit c4 und d4 Raum nehmen oder d3 und e4 spielen.",
  },

  "1.Nf3 g6 2.g3 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, deckt e4 und d5 und führt zur " +
      "Stellung nach 1.Sf3 Sf6 2.g3 g6. Schwarz setzt mit …Lg7 und …O-O fort und wählt " +
      "zwischen …d6, …d5 und …c5, sobald Weiß Lg2 gespielt und rochiert hat. Noch steht kein " +
      "Bauer im Zentrum, sodass Weiß weiterhin zwischen c4 mit d4 und dem ruhigeren d3 mit e4 " +
      "wählen kann.",
  },

  "1.Nf3 g6 2.g3 c5": {
    strategy:
      "Kontrolliert d4 und bereitet …Sc6 vor, wobei …Lg7 zusätzlich Druck entlang der langen " +
      "Diagonale erzeugt. Weiß kann mit Lg2, O-O und c4 in die Symmetrievariante der " +
      "Englischen Eröffnung einlenken oder mit d4 das Zentrum öffnen; nach …cxd4 Sxd4 steht " +
      "der Springer dann auf der Diagonale des Läufers g7. Schwarz behält die Wahl zwischen " +
      "…d6 und …d5 für später.",
  },

  "1.Nf3 g6 2.g3 d5": {
    strategy:
      "Erhebt Anspruch auf das Zentrum und öffnet dem Läufer c8 die Diagonale nach f5 und g4; " +
      "es folgen …Lg7 und …Sf6 mit der Stellung nach 1.Sf3 d5 2.g3 g6. Weiß setzt meist mit " +
      "Lg2 und O-O fort und greift dann d5 mit c4 an oder bereitet mit d3 und Sbd2 den " +
      "Vorstoß e4 vor. Der Bauer d5 hat keine Bauerndeckung, und der schwarzfeldrige Läufer " +
      "g7 schützt ihn nicht, sodass c4 ihn sofort auf die Probe stellt.",
  },

  "1.Nf3 g6 2.g3 d6": {
    strategy:
      "Befreit den Läufer c8 und bereitet …e5 vor, das …Lg7 später unterstützt, für einen " +
      "königsindischen Aufbau mit …Sf6. Vorerst überlässt der Zug Weiß das Zentrum, sodass " +
      "Lg2 und O-O, danach c4 mit d4 oder d3 mit e4, ungehindert folgen. Solide, aber passiv.",
  },

  "1.Nf3 g6 2.g3 Nc6": {
    strategy:
      "Entwickelt den Springer, nimmt d4 und e5 ins Visier und unterstützt ein späteres …e5. " +
      "Allerdings verstellt der Springer den c-Bauern, und Weiß kann mit d4 und Lg2 Raum " +
      "nehmen, bevor Schwarz sich für eine Struktur entschieden hat. Solide, doch …Lg7 zuerst " +
      "ist flexibler.",
  },

  "1.Nf3 g6 2.g3 c6": {
    strategy:
      "Bereitet …d5 mit Bauerndeckung vor, wonach der Läufer c8 weiterhin nach f5 oder g4 " +
      "gelangen kann. Vorerst bleibt das Zentrum Weiß überlassen, sodass c4 oder d4 sofort " +
      "folgen kann. Solide, legt aber den c-Bauern fest, bevor das Zentrum geklärt ist.",
  },

  "1.Nf3 g6 2.g3 e6": {
    strategy:
      "Bereitet …d5 vor und hält …Lg7 mit …Se7 oder …Sf6 offen. Steht erst …d5, sperrt der " +
      "Bauer e6 den Läufer c8 ein, der dann …b6 und …Lb7 braucht, während Weiß nach Lg2 und " +
      "O-O mit c4 und d4 Raum nimmt. Solide, aber passiv.",
  },

  "1.Nf3 g6 2.g3 b6": {
    strategy:
      "Bereitet …Lb7 für ein Doppelfianchetto mit …Lg7 vor: Der Läufer b7 macht dem weißen " +
      "Lg2 die lange helle Diagonale streitig, der Läufer g7 kontrolliert die dunkle. Solide, " +
      "doch kein schwarzer Bauer erreicht das Zentrum, sodass Weiß nach Lg2 und O-O mit c4 " +
      "und d4 ein breites Zentrum errichten kann.",
  },

  "1.Nf3 g6 2.g3 f5": {
    strategy:
      "Kontrolliert e4 und führt nach …Sf6, …Lg7 und …O-O zum Aufbau des Leningrader Systems " +
      "der Holländischen Verteidigung. Der Zug schwächt e6 und den Königsflügel, und Weiß " +
      "antwortet mit Lg2, O-O und d3 nebst e4 oder mit c4 und d4. Spielbar, aber " +
      "zweischneidig.",
  },

  "1.Nf3 g6 2.g3 Na6": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er b4 und c5 ins Visier nimmt, aber kaum " +
      "Einfluss auf das Zentrum hat. Weiß gewinnt Zeit für Lg2, O-O und d4 oder c4.",
  },

  "1.Nf3 g6 2.g3 Nh6": {
    strategy:
      "Strebt nach f5, wo e4 den Springer mit Tempo vertreiben würde, und auf h6 tut er " +
      "nichts für das Zentrum. Weiß setzt mit Lg2, O-O und d4 oder c4 fort.",
  },

  "1.Nf3 g6 2.g3 Bh6": {
    strategy:
      "Stellt den Läufer statt nach g7 nach h6, wo ihm der Läufer c1 entgegentritt, sobald d3 " +
      "oder d4 die Diagonale öffnet. Nach Lxh6 Sxh6 hat Schwarz den schwarzfeldrigen Läufer " +
      "abgetauscht, der f6 und h6 decken sollte, und der Springer steht am Rand; weicht " +
      "Schwarz dem Tausch mit …Lg7 aus, kostet das ein Tempo.",
  },

  "1.Nf3 g6 2.g3 a6": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauernzug, der bestenfalls …b5 vorbereitet. Weiß " +
      "entwickelt sich mit Lg2 und O-O und nimmt dann mit d4 oder c4 Raum.",
  },

  "1.Nf3 g6 2.g3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und deckt b4, schwächt aber b5 und entwickelt nichts. Weiß " +
      "setzt ungehindert mit Lg2, O-O und d4 oder c4 fort.",
  },

  "1.Nf3 g6 2.g3 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet …Lb7 vor, doch der Bauer b5 steht ungedeckt, " +
      "c6 ist geschwächt, und keine Figur kommt ins Spiel. Weiß vollendet Lg2 und O-O, danach " +
      "greift a4 oder c4 den Bauern an.",
  },

  "1.Nf3 g6 2.g3 f6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6, verstellt die lange Diagonale des künftigen Läufers " +
      "g7 und schwächt e6 und g6, ohne etwas zu entwickeln. Weiß spielt in aller Ruhe Lg2, " +
      "O-O und d4.",
  },

  "1.Nf3 g6 2.g3 h6": {
    strategy:
      "Verwendet ein Tempo auf einen Zug, der noch nichts zu verhindern hat, und entzieht dem " +
      "Bauern g6 die Deckung durch den h-Bauern. Er entwickelt nichts und lässt Weiß freie " +
      "Hand für Lg2, O-O und d4 oder c4.",
  },

  "1.Nf3 g6 2.g3 h5": {
    strategy:
      "Leitet einen Bauernvorstoß am Königsflügel ein, der g5 und g6 schwächt und weder dem " +
      "Zentrum noch der Entwicklung dient. Weiß setzt mit Lg2 und O-O fort oder hält den " +
      "Bauern mit h4 auf und besetzt danach das Zentrum.",
  },

  "1.Nf3 g6 2.g3 e5": {
    strategy:
      "Lässt den e-Bauern ungedeckt, sodass 3.Sxe5 ihn gewinnt. Ob …De7 oder …Lg7 mit …d6, " +
      "Schwarz vertreibt den Springer, doch Weiß behält den Mehrbauern.",
  },

  "1.Nf3 g6 2.g3 g5": {
    strategy:
      "Lässt den g-Bauern ungedeckt, sodass 3.Sxg5 ihn gewinnt. …Lh6 vertreibt den Springer, " +
      "doch Weiß behält den Mehrbauern.",
  },
};
