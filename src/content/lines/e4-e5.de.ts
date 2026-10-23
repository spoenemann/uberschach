import type { OpeningTexts } from "../book.ts";

// German prose for e4-e5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.e4 e5 2.Nf3": {
    name: "Königsspringerspiel",
    background:
      "Der beliebteste zweite Zug von Weiß. Mit ihm beginnen die Spanische Partie, auf " +
      "Spitzenniveau die häufigste Wahl von Weiß, die Italienische Partie, die seit " +
      "Jahrhunderten analysiert wird, und die Schottische Partie, die im 19. Jahrhundert " +
      "beliebt war.",
    strategy:
      "Greift e5 an, entwickelt eine Figur und bereitet die Rochade vor, während der Hebel d4 " +
      "und die Läuferzüge nach b5 und c4 möglich bleiben. Nach dem üblichen 2...Sc6 kann Weiß " +
      "mit Lb5 den Verteidiger von e5 unter Druck setzen, mit Lc4 auf f7 zielen oder mit d4 " +
      "das Zentrum öffnen; Schwarz kann auch mit 2...Sf6 zum Gegenangriff auf e4 übergehen " +
      "oder mit 2...d6 solide decken. Der einzige Nachteil ist, dass der Springer den " +
      "f-Bauern blockiert, sodass f4 nicht möglich ist, solange er auf f3 steht.",
  },

  "1.e4 e5 2.Bc4": {
    name: "Läuferspiel",
    background:
      "Es gehört zu den ältesten analysierten Eröffnungen: Lucena und Ruy López untersuchten " +
      "es, und Philidor legte sein theoretisches Fundament. Mitte des 19. Jahrhunderts geriet " +
      "es aus der Mode, nachdem Verbesserungen für Schwarz gefunden worden waren. Bent Larsen " +
      "war einer der wenigen Großmeister, die es oft spielten, nachdem er es erstmals beim " +
      "Interzonenturnier 1964 eingesetzt hatte, und Péter Lékó wählte es bei der " +
      "Weltmeisterschaft 2007 gegen Kramnik.",
    strategy:
      "Zielt auf f7, verhindert ein sofortiges ...d5 und lässt den f-Bauern frei, sodass Weiß " +
      "weiterhin zwischen Sf3, Sc3 und einem frühen f4 wählen kann. Die häufigste Antwort ist " +
      "2...Sf6 mit Angriff auf e4; nach 3.d3 kann Schwarz mit ...c6 und ...d5 ein Zentrum " +
      "aufbauen, das Zeit gegen den Läufer gewinnt. Andere Antworten wie 2...Sc6 oder 2...Lc5 " +
      "gehen oft in die Italienische Partie oder die Wiener Partie über, sodass Weiß ein " +
      "flexibles, aber selten forcierendes Spiel erhält.",
  },

  "1.e4 e5 2.Nc3": {
    name: "Wiener Partie",
    background:
      "Benannt nach der Stadt Wien und im 19. Jahrhundert beliebt, war sie ursprünglich als " +
      "verzögertes Königsgambit gedacht. Weaver W. Adams behauptete bekanntlich, sie gewinne " +
      "für Weiß forciert, während Nick de Firmian in der 15. Auflage von Modern Chess " +
      "Openings zu dem Schluss kommt, dass sie bei bestem Spiel zum Ausgleich führt.",
    strategy:
      "Deckt e4 mit einer Figur und lässt den f-Bauern frei, sodass Weiß später zwischen f4, " +
      "ruhiger Entwicklung mit Lc4 oder Sf3 und einem Fianchetto mit g3 wählen kann. Schwarz " +
      "antwortet meist mit 2...Sf6, oft gefolgt von ...d5 zur Befreiung, oder mit 2...Sc6. " +
      "Bei genauem Spiel gleicht Schwarz aus, sodass der Zug eher Flexibilität als einen " +
      "Vorteil bietet.",
  },

  "1.e4 e5 2.f4": {
    name: "Königsgambit",
    background:
      "Ruy López de Segura veröffentlichte als Erster eine Analyse dazu, und es findet sich " +
      "bereits in Lucenas Buch von 1497. Nachdem Fischer 1960 in Mar del Plata gegen Spasskis " +
      "Königsgambit verloren hatte, veröffentlichte er im folgenden Jahr seinen berühmten " +
      "Aufsatz mit der Behauptung, es verliere forciert; seit Rudolf Spielmann es nicht mehr " +
      "regelmäßig spielte, ist die Eröffnung auf höchster Ebene selten.",
    strategy:
      "Bietet den f-Bauern an, um den schwarzen e-Bauern abzulenken und mit d4 ein " +
      "Bauernzentrum aufzubauen, und öffnet zugleich die f-Linie für den Turm. Das Gambit ist " +
      "scharf und spielbar, doch Schwarz kann den Bauern mit 2...exf4 und ...g5 behalten oder " +
      "mit 2...d5 oder 2...Lc5 ablehnen, und der weiße König steht auf der Diagonale e1–h4 " +
      "ungeschützt. Es ist ein riskanter Versuch, keine Empfehlung.",
  },

  "1.e4 e5 2.d4": {
    name: "Mittelgambit",
    background:
      "Es ist seit 1590 oder früher belegt und wurde 1745 erstmals von Philipp Stamma " +
      "analysiert; im späten 19. Jahrhundert spielten es Tarrasch, Tschigorin und Paulsen " +
      "regelmäßig. Nach 1900 wurde es weitgehend aufgegeben, weil sich für Weiß kein Vorteil " +
      "nachweisen ließ, und Alexander Schabalow belebte es in den 1990er-Jahren wieder.",
    strategy:
      "Greift sofort das Zentrum an, doch nach 2...exd4 steht kein Springer auf f3 zum " +
      "Zurückschlagen, sodass Weiß mit Dxd4 nehmen muss und 3...Sc6 ein Tempo gegen die Dame " +
      "gewinnt. Die Alternative 3.c3 opfert einen oder zwei Bauern für schnelle Entwicklung. " +
      "Weiß kann lang rochieren und angreifen, doch Schwarz entwickelt sich leicht und " +
      "gleicht aus, sodass der Zug korrekt, aber nicht empfehlenswert ist.",
  },

  "1.e4 e5 2.d3": {
    name: "Königsbauernspiel: Leonardis-Variante",
    strategy:
      "Stützt e4 und gibt dem Läufer c1 den Weg frei; es entsteht eine solide " +
      "Philidor-Struktur mit vertauschten Farben. Allerdings versperrt der Zug dem " +
      "Königsläufer die Diagonale f1–a6, und Schwarz nimmt sich mit ...Sf6 und ...d5 gleich " +
      "viel Raum. Korrekt, aber passiv und daher nicht empfehlenswert.",
  },

  "1.e4 e5 2.Bb5": {
    name: "Portugiesische Eröffnung",
    strategy:
      "Strebt einen Läufer auf b5 wie in der Spanischen Partie an und hält den f-Bauern für " +
      "f4 frei. Ohne Sf3 fehlt jeder Druck auf e5, sodass Schwarz freie Hand hat: 2...c6 " +
      "gewinnt Zeit gegen den Läufer, während 2...Sf6 oder 2...Sc6 bequem entwickelt. " +
      "Spielbar, doch Schwarz erhält ein leichtes Spiel.",
  },

  "1.e4 e5 2.Qh5": {
    name: "Parhams Angriff",
    background:
      "Zum ersten Mal gedruckt erschien sie, soweit bekannt, im Dubuque Chess Journal vom Mai " +
      "1875, das sie Kentucky Opening nannte; 1905 nannte das American Chess Bulletin sie " +
      "Danvers Opening, ein Name, den ihr der Psychiater E. E. Southard nach der Klinik gab, " +
      "in der er arbeitete. Im Englischen heißt sie auch Wayward Queen Attack und Parham " +
      "Attack; Bernard Parham aus Indianapolis war einer der wenigen Spieler auf " +
      "Meisterniveau, die sie empfahlen. Hikaru Nakamura spielte sie beim Sigeman-Turnier " +
      "2005, und Hans Ree nannte sie „einen provokanten, aber durchaus vernünftigen Zug“.",
    strategy:
      "Greift e5 und f7 zugleich an und stellt die Falle 2...Sc6 3.Lc4 Sf6?? 4.Dxf7#. Schwarz " +
      "deckt mit 2...Sc6 und beantwortet 3.Lc4 mit 3...g6, das die Dame vertreibt, meist nach " +
      "f3, oder mit 3...De7, das den Läufer f8 verstellt. Der frühe Damenausflug erzwingt " +
      "kleine Zugeständnisse, bringt aber keinen Vorteil, und die Dame bleibt ein Ziel für " +
      "die schwarzen Entwicklungszüge.",
  },

  "1.e4 e5 2.Ne2": {
    name: "Alapin-Eröffnung",
    background:
      "Benannt nach dem russisch-litauischen Spieler und Eröffnungstheoretiker Simon Alapin " +
      "(1856–1923). Sie wird selten gespielt, kam aber in der Partie Jacobsen–Ljubojević, " +
      "Groningen 1970, vor.",
    strategy:
      "Hält den f-Bauern für ein frühes f4 oder für einen ruhigen Aufbau mit g3, Sbc3, d3 und " +
      "Lg2 frei und umgeht stark analysierte Systeme wie die Spanische Partie. Doch der " +
      "Springer versperrt Läufer f1 und Dame und kontrolliert nichts in der schwarzen Hälfte " +
      "des Bretts, sodass Schwarz mit 2...Sf6 oder 2...Sc6 leicht ausgleicht. Spielbar, vor " +
      "allem als Überraschungswaffe.",
  },

  "1.e4 e5 2.a3": {
    name: "Königsbauernspiel: Mengarini-Eröffnung",
    background:
      "Benannt nach Ariel Mengarini, der die Zugfolge 1.e4 e5 2.a3 empfahl. Der Name wird " +
      "auch für die Variante 2.Sc3 Sf6 3.a3 der Wiener Partie verwendet, in der Hugh Myers " +
      "die Springerzüge vor den Zug des a-Bauern einschob.",
    strategy:
      "Ein Wartezug, der ...Lb4 verhindert und b4 vorbereitet, aber nichts entwickelt. " +
      "Schwarz besetzt mit ...Sf6, ...Sc6 oder ...d5 das Zentrum und übernimmt im Grunde das " +
      "Anzugsrecht.",
  },

  "1.e4 e5 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Ta3 vor, verbraucht aber ein Tempo am Rand, " +
      "während Zentrum und Entwicklung warten. Schwarz spielt in Ruhe ...Sf6, ...Sc6 oder " +
      "...d5, und b4 ist geschwächt.",
  },

  "1.e4 e5 2.b3": {
    strategy:
      "Bereitet Lb2 gegen e5 vor, doch dieser Bauer lässt sich mit ...Sc6 oder ...d6 leicht " +
      "decken, und der Läufer bewirkt sonst wenig. Unterdessen greift ...d5 oder ...Sf6 " +
      "sofort e4 an, sodass Weiß Zeit verliert, ohne das Zentrum zu stärken.",
  },

  "1.e4 e5 2.c3": {
    name: "Königsbauernspiel: MacLeod-Angriff",
    strategy:
      "Bereitet d4 für ein breites Zentrum vor, nimmt aber dem Springer das Feld c3 und " +
      "verzögert die Entwicklung. Schwarz schlägt mit 2...d5 oder 2...Sf6 zuerst zu, greift " +
      "e4 an, bevor das weiße Zentrum steht, und gleicht mühelos aus.",
  },

  "1.e4 e5 2.c4": {
    name: "Englische Eröffnung: The Whale",
    strategy:
      "Kontrolliert d5, entwickelt aber nichts und hinterlässt Löcher auf d4 und d3, da weder " +
      "der c- noch der e-Bauer sie noch decken kann. Schwarz setzt mit ...Sf6, ...Sc6 und " +
      "...Lc5 fort und zielt auf d4, während der Bauer e4 einen Verteidiger braucht.",
  },

  "1.e4 e5 2.f3": {
    name: "Königsbauernspiel: King's-Head-Eröffnung",
    strategy:
      "Stützt e4, nimmt aber dem Springer g1 das Feld f3 und öffnet die Diagonale e1–h4, " +
      "sodass ...Dh4+ möglich wird. Schwarz entwickelt sich mit ...Sc6 und ...Sf6 oder " +
      "schlägt mit ...d5 zu und erhält das leichtere Spiel.",
  },

  "1.e4 e5 2.g3": {
    strategy:
      "Bereitet Lg2 vor, doch mit dem weißen Bauern auf e4 ist die Diagonale des Läufers " +
      "durch den eigenen Bauern verstellt. Schwarz greift e4 sofort mit ...d5 oder ...Sf6 an, " +
      "und nach 2...d5 3.exd5 Dxd5 blickt die Dame über die frei gewordene lange Diagonale " +
      "auf den Turm h1.",
  },

  "1.e4 e5 2.h3": {
    strategy:
      "Nimmt dem schwarzen Läufer c8 und dem Königsspringer das Feld g4, entwickelt aber " +
      "nichts und kämpft nicht um das Zentrum. Schwarz antwortet mit ...Sf6, ...Sc6 oder " +
      "...d5 und hat im Zentrum freie Hand.",
  },

  "1.e4 e5 2.Na3": {
    strategy:
      "Ein Randspringer, der c4 und b5 im Blick hat, sonst aber wenig. Schwarz kann ihn mit " +
      "...Lxa3 abtauschen, und nach bxa3 hat Weiß isolierte Doppelbauern auf der a-Linie, " +
      "während Schwarz sich im Zentrum frei entwickelt.",
  },

  "1.e4 e5 2.Qe2": {
    strategy:
      "Deckt e4, versperrt aber den Läufer f1 und nimmt dem Springer g1 das Feld e2. Schwarz " +
      "entwickelt sich frei mit ...Sf6, ...Sc6 und ...Lc5, während der Läufer f1 eingesperrt " +
      "bleibt, bis die Dame erneut zieht oder Weiß g3 spielt.",
  },

  "1.e4 e5 2.Qf3": {
    name: "Napoleons Angriff",
    background:
      "Der Name kam auf, nachdem Veröffentlichungen aus der Mitte des 19. Jahrhunderts " +
      "berichtet hatten, Napoleon Bonaparte habe diese Eröffnung gespielt, und zwar 1809 in " +
      "Wien in der Partie, die er gegen den als Schachtürke bekannten Automaten verlor.",
    strategy:
      "Zielt auf f7 und stellt die Falle 2...Sc6 3.Lc4 Lc5?? 4.Dxf7#, die ...Sf6 leicht " +
      "verhindert. Die Dame nimmt dem Springer g1 das Feld f3 und kann mit ...Sd4 belästigt " +
      "werden, sodass Weiß in der Entwicklung zurückfällt.",
  },

  "1.e4 e5 2.Qg4": {
    strategy:
      "Die Dame greift g7 an, das der Läufer f8 deckt, und läuft in 2...d5, das die Diagonale " +
      "des Läufers c8 gegen die Dame öffnet und e4 angreift. Nach 3.exd5?? Lxg4 ist die Dame " +
      "verloren, also muss sie unter Zeitverlust zurückweichen.",
  },

  "1.e4 e5 2.Be2": {
    strategy:
      "Bereitet die Rochade vor, verstellt aber der Dame die Diagonale nach h5 und tut nichts " +
      "für das Zentrum. Schwarz besetzt mit ...Sf6 und ...d5 das Zentrum, und Weiß bleibt ein " +
      "passiver Aufbau ohne den Druck von Lc4 oder Lb5.",
  },

  "1.e4 e5 2.Bd3": {
    name: "Königsbauernspiel: Tortoise-Eröffnung",
    strategy:
      "Deckt e4, blockiert aber den d-Bauern und damit den Läufer c1, sodass die weiße " +
      "Entwicklung stockt, bis der Läufer erneut zieht. Schwarz spielt in Ruhe ...Sf6, ...Sc6 " +
      "und ...d5 und übernimmt die Initiative.",
  },

  "1.e4 e5 2.Nh3": {
    strategy:
      "Der Springer strebt nach g5 oder f4, steht aber am Rand, und 2...d5 3.exd5 Lxh3 4.gxh3 " +
      "Dxd5 zerstört die weiße Bauernstruktur am Königsflügel und greift den Turm h1 an. " +
      "Schwarz erhält ein freies Zentrum und eine leichte Entwicklung.",
  },

  "1.e4 e5 2.h4": {
    strategy:
      "Gewinnt Raum am Rand und bereitet h5 oder einen Turmschwenk über h3 vor, tut aber " +
      "nichts für Zentrum und Entwicklung. Schwarz antwortet mit ...Sf6 oder ...d5 gegen e4 " +
      "und erhält ein bequemes Spiel, während der Königsflügel, auf dem der weiße König meist " +
      "rochiert, gelockert ist.",
  },

  "1.e4 e5 2.b4": {
    strategy:
      "Bietet den b-Bauern ohne jede Entwicklung dahinter an: 2...Lxb4 gewinnt ihn, und nach " +
      "3.c3 zieht sich der Läufer nach a5, c5 oder e7 zurück, sodass Weiß keine ausreichende " +
      "Kompensation hat.",
  },

  "1.e4 e5 2.g4": {
    strategy:
      "Gewinnt Raum am Königsflügel, schwächt aber f3, h3 und die lange Diagonale. Nach " +
      "2...d5 3.exd5 Dxd5 greift die Dame den Turm h1 an, und Schwarz übernimmt die Führung " +
      "im Zentrum; der Königsflügel bleibt dauerhaft gelockert.",
  },

  "1.e4 e5 2.Ke2": {
    name: "Bongcloud-Angriff",
    background:
      "Der Name geht vermutlich entweder auf den Chess.com-Nutzer „Lenny_Bongcloud“ zurück, " +
      "der ihn mit wenig Erfolg spielte, oder auf das Wort „Bong“, als Anspielung darauf, " +
      "dass man berauscht sein müsse, um ihn ernst zu nehmen. Magnus Carlsen eröffnete am 15. " +
      "März 2021 beim Magnus Carlsen Invitational damit gegen Hikaru Nakamura; Nakamura " +
      "antwortete 2...Ke7, und die Partie endete durch dreifache Stellungswiederholung remis.",
    strategy:
      "Gibt das Rochaderecht auf und versperrt Dame und Läufer f1, sodass der König erneut " +
      "ziehen muss, bevor Weiß normal entwickeln kann. Schwarz entwickelt sich einfach mit " +
      "...Sf6, ...Sc6 und ...d5 und öffnet das Zentrum gegen den gestrandeten König.",
  },

  "1.e4 e5 2.Ba6": {
    strategy:
      "Stellt den Läufer ein: 2...bxa6 oder 2...Sxa6 gewinnt ihn umsonst, und Weiß hat keinen " +
      "Ausgleich für die verlorene Figur.",
  },

  "1.e4 e5": {
    name: "Offenes Spiel",
    background:
      "Zu den Offenen Spielen, die mit 1.e4 e5 beginnen, gehören viele der ältesten und am " +
      "gründlichsten analysierten Eröffnungen. 1...e5 war jahrhundertelang die übliche " +
      "Antwort auf 1.e4, bis Mitte des 20. Jahrhunderts die Sizilianische Verteidigung bei " +
      "Turnierspielern etwas beliebter wurde.",
  },
};
