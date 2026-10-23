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

  "1.e4 e5 2.Nf3 Nc6": {
    name: "Königsspringerspiel: Normalvariante",
    strategy:
      "Deckt e5 mit einem Entwicklungszug und kontrolliert zusätzlich d4. Weiß wählt dann das " +
      "Schlachtfeld: 3.Lb5 (Spanische Partie), 3.Lc4 (Italienische Partie), 3.d4 (Schottische " +
      "Partie) oder 3.Sc3 (Dreispringerspiel). Schwarz antwortet jeweils mit natürlicher " +
      "Entwicklung, ...Sf6, ...Lc5 oder ...Le7 und früher Rochade, muss aber alle kennen, " +
      "weil Weiß entscheidet, welche davon entsteht.",
  },

  "1.e4 e5 2.Nf3 Nf6": {
    name: "Russische Verteidigung",
    background:
      "Zuerst populär gemacht hat sie Mitte des 19. Jahrhunderts der russische Spieler " +
      "Alexander Petrow, nach dem sie auch Petrow-Verteidigung heißt; der Name Russische " +
      "Verteidigung würdigt die frühen Untersuchungen von Petrow und Carl Jaenisch und ist in " +
      "manchen Ländern der vorherrschende. Die Weltmeister Smyslow, Petrosjan, Karpow und " +
      "Kramnik haben sie alle gespielt.",
    strategy:
      "Greift e4 an, statt e5 zu decken, strebt eine solide, symmetrische Stellung an und " +
      "weicht der Spanischen, der Italienischen und der Schottischen Partie aus. Nach 3.Sxe5 " +
      "spielt Schwarz zuerst 3...d6 und schlägt erst nach 4.Sf3 auf e4, denn 3...Sxe4 4.De2 " +
      "lässt Schwarz schlechter stehen, und 4...Sf6?? verliert die Dame durch 5.Sc6+. Der " +
      "Preis sind ein remislastiger Ruf und viel Theorie.",
  },

  "1.e4 e5 2.Nf3 d6": {
    name: "Philidor-Verteidigung",
    background:
      "Schon Ruy López empfahl 2...d6 in seinem Buch von 1561, weil 2...Sc6 die Spanische " +
      "Partie mit 3.Lb5 zulässt, und der Meister Philidor im 18. Jahrhundert bevorzugte den " +
      "Zug als Alternative zu 2...Sc6. Bis zum Ersten Weltkrieg war die Eröffnung aus dem " +
      "Spitzenschach fast vollständig verschwunden.",
    strategy:
      "Deckt e5 mit einem Bauern und errichtet mit ...Sf6, ...Le7 und ...O-O einen kompakten, " +
      "soliden Aufbau, dazu ...Sbd7, wenn Schwarz e5 gegen d4 halten will. Der Preis ist " +
      "Passivität: Der Läufer auf f8 ist eingeengt, Weiß erhält nach d4 meist mehr Raum, und " +
      "Schwarz muss wählen, ob er e5 hält oder das Zentrum mit ...exd4 aufgibt, um mit " +
      "Figuren gegen e4 zu spielen.",
  },

  "1.e4 e5 2.Nf3 Qe7": {
    name: "Gunderam-Verteidigung",
    background:
      "Gerhart Gunderam spielte sie erstmals 1958 in einer Fernpartie gegen August Babel, " +
      "doch der Internationale Meister Hélder Câmara hatte sie schon vier Jahre früher, 1954, " +
      "in der brasilianischen Meisterschaft gespielt. Brasilianische Spieler griffen sie auf, " +
      "sodass sie den Namen Brasilianische Verteidigung erhielt.",
    strategy:
      "Deckt e5 mit der Dame, die den Läufer auf f8 blockiert und die schwarze Entwicklung " +
      "umständlich macht. Weiß entwickelt sich ungehindert mit Sc3, Lc4 und d4, während die " +
      "schwarzen Pläne einer langen Rochade oder eines späteren ...f5 Zeit kosten.",
  },

  "1.e4 e5 2.Nf3 Qf6": {
    name: "Greco-Verteidigung",
    background:
      "Benannt nach Gioachino Greco, der 1620 eine Variante dagegen angab. Sie heißt auch " +
      "McConnell-Verteidigung, und Paul Morphy traf 1849 in New Orleans gegen McConnell auf " +
      "sie.",
    strategy:
      "Deckt e5, bringt aber die Dame früh ins Spiel und nimmt dem Springer auf g8 das Feld " +
      "f6. Weiß entwickelt sich mit Lc4, Sc3 und d4 und gewinnt später mit e5 oder Sd5 Zeit " +
      "gegen die Dame; der Vorteil liegt vor allem in der glatteren Entwicklung.",
  },

  "1.e4 e5 2.Nf3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, weit weg vom Zentrum, und ignoriert den Angriff auf " +
      "e5. Nach 3.Sxe5 hat Weiß einen Bauern gewonnen und kann mit d4 und Sc3 aufbauen, " +
      "während der Springer auf a6 fehlplatziert ist.",
  },

  "1.e4 e5 2.Nf3 Bd6": {
    strategy:
      "Deckt e5, blockiert aber den d-Bauern und damit den Läufer auf c8 und lädt zu 3.d4 " +
      "ein. Nach 3...exd4 4.Sxd4 beherrscht Weiß das Zentrum und ist in der Entwicklung " +
      "voraus, und der Läufer auf d6 wird zum Ziel für Sb5 und Sf5.",
  },

  "1.e4 e5 2.Nf3 Bc5": {
    name: "Busch-Gass-Gambit",
    background:
      "Das Busch-Gass-Gambit war Anfang der 2020er-Jahre eine Art Online-Modeerscheinung.",
    strategy:
      "Entwickelt mit Druck auf f2 und bietet den Bauern e5 an. Nach 3.Sxe5 Sc6 4.Sf3 hat " +
      "Weiß einen Bauern mehr, der Springer steht wieder sicher, und Schwarz hat dafür nur " +
      "einen kleinen Entwicklungsvorsprung.",
  },

  "1.e4 e5 2.Nf3 Bb4": {
    strategy:
      "Entwickelt den Läufer auf ein Feld, auf dem er nichts fesselt, da der weiße Springer " +
      "noch nicht auf c3 steht, und lässt e5 angegriffen. Weiß nimmt den Bauern mit 3.Sxe5 " +
      "und kann mit c3 Zeit gegen den Läufer gewinnen.",
  },

  "1.e4 e5 2.Nf3 Nh6": {
    strategy:
      "Entwickelt den Springer an den Rand, weg vom Zentrum, wo Lxh6 die schwarzen Bauern " +
      "verdoppeln kann, sobald d3 oder d4 die Diagonale c1-h6 geöffnet hat. Außerdem bleibt " +
      "e5 angegriffen, sodass 3.Sxe5 einen Bauern gewinnt.",
  },

  "1.e4 e5 2.Nf3 a6": {
    strategy:
      "Deckt b5 gegen einen Läufer, der noch gar nicht dort steht, und ignoriert den Angriff " +
      "auf e5. Nach 3.Sxe5 hat Weiß einen Bauern gewonnen, und holt Schwarz ihn mit ...De7 " +
      "und ...Dxe4+ zurück, bleibt Weiß in der Entwicklung voraus.",
  },

  "1.e4 e5 2.Nf3 a5": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauern, während e5 angegriffen ist. 3.Sxe5 gewinnt " +
      "einen Bauern, und ...a5 trägt weder zur Entwicklung noch zum Zentrum bei.",
  },

  "1.e4 e5 2.Nf3 b6": {
    strategy:
      "Bereitet ...Lb7 gegen e4 vor, doch e5 ist angegriffen, und der Läufer würde den Bauern " +
      "nicht decken. Weiß nimmt ihn mit 3.Sxe5 und kann ...Lb7 mit d3 beantworten.",
  },

  "1.e4 e5 2.Nf3 c6": {
    name: "Königsbauernspiel: Gunderam-Gambit",
    strategy:
      "Bereitet ...d5 gegen den Bauern e4 vor, deckt aber e5 nicht. Weiß nimmt den Bauern mit " +
      "3.Sxe5, und ...d6 mit anschließendem ...d5 kostet Schwarz dann weitere Tempi.",
  },

  "1.e4 e5 2.Nf3 c5": {
    name: "Sizilianische Verteidigung: Jalalabad-Variante",
    strategy:
      "Führt zur selben Stellung wie die sizilianische Zugfolge 1.e4 c5 2.Sf3 e5, und ...c5 " +
      "tut nichts für den angegriffenen Bauern e5. Nach 3.Sxe5 d6 4.Sf3 hat Weiß schlicht " +
      "einen Bauern mehr.",
  },

  "1.e4 e5 2.Nf3 d5": {
    name: "Mittelgambit im Nachzug",
    background:
      "Auch Elefantengambit, Damenbauern-Gegengambit oder Türkisches Gambit genannt, gilt es " +
      "als inkorrekt. Zu den dafür angeführten Partien gehören Lob–Eliskases (deutsches " +
      "Fernschach, 1929), die Weiß gewann, sowie Bondarewski–Lilienthal (UdSSR, 1941) und " +
      "Tal–Lutikow (Tallinn, 1964), die Weiß den Vorteil brachten.",
    strategy:
      "Greift e4 um den Preis eines Bauern an: Nach 3.exd5 e4 4.De2 behält Weiß den " +
      "Mehrbauern, und nach 3.Sxe5 gewinnt Schwarz ihn auf e4 zurück, doch Weiß behält das " +
      "bessere Spiel. Schwarz kann Fallen stellen, gerät aber oft in eine passive Stellung, " +
      "in der Weiß die Initiative und mehr Raum hat.",
  },

  "1.e4 e5 2.Nf3 f5": {
    name: "Lettisches Gambit",
    background:
      "Von Giulio Cesare Polerio im späten 16. Jahrhundert analysiert, wurde es nach " +
      "Gioachino Greco als Greco-Gegengambit bekannt. Sein heutiger Name ehrt mehrere " +
      "lettische Spieler, die es analysierten, allen voran Kārlis Bētiņš.",
    strategy:
      "Greift sofort e4 an und gibt nach 3.Sxe5 den e-Bauern her, um mit ...Df6 und ...fxe4 " +
      "Linien zu öffnen. Der Preis ist ein gelockerter König, dessen Diagonale e8-h5 für Dh5+ " +
      "offen liegt, und bei genauem Spiel behält Weiß das bessere Spiel.",
  },

  "1.e4 e5 2.Nf3 g6": {
    strategy:
      "Bereitet ...Lg7 und ein Fianchetto am Königsflügel vor, doch e5 bleibt angegriffen. " +
      "Nach 3.Sxe5 Lg7 4.d4 d6 5.Sf3 hat Weiß einen Bauern mehr und ein breites Zentrum.",
  },

  "1.e4 e5 2.Nf3 h6": {
    strategy:
      "Ein Wartezug, der Sg5 und Lg5 verhindert und nichts gegen den Angriff auf e5 tut. " +
      "3.Sxe5 nimmt einen Bauern, und das einzige Gegenspiel von Schwarz ist ...De7 mit " +
      "anschließendem ...Dxe4+, wonach Weiß immer noch in der Entwicklung voraus ist.",
  },

  "1.e4 e5 2.Nf3 h5": {
    strategy:
      "Beginnt einen Bauernvorstoß am Königsflügel, ohne e5 zu decken. Nach 3.Sxe5 hat Weiß " +
      "einen Bauern mehr, und der h-Bauer kann g5 nicht mehr decken.",
  },

  "1.e4 e5 2.Nf3 Qg5": {
    strategy:
      "Läuft in 3.Sxg5: Der Springer auf f3 greift g5 an, und nichts deckt die Dame, sodass " +
      "Weiß sie umsonst gewinnt.",
  },

  "1.e4 e5 2.Nf3 Qh4": {
    strategy:
      "Stellt die Dame auf ein Feld, das der Springer auf f3 angreift, sodass 3.Sxh4 sie " +
      "glatt gewinnt; nichts deckt h4.",
  },

  "1.e4 e5 2.Nf3 Ke7": {
    strategy:
      "Gibt ohne Grund die Rochade auf, verstellt Dame und Königsläufer und lässt e5 " +
      "angegriffen. Nach 3.Sxe5 hat Weiß einen Bauern mehr, und der schwarze König bleibt im " +
      "Zentrum.",
  },

  "1.e4 e5 2.Nf3 Be7": {
    strategy:
      "Lässt e5 angegriffen und steht der Dame im Weg, sodass Schwarz nach 3.Sxe5 nicht mit " +
      "...De7 oder ...Df6 kontern kann. Weiß hat einfach einen Bauern mehr.",
  },

  "1.e4 e5 2.Nf3 Ba3": {
    strategy:
      "Gibt den Läufer weg: 3.bxa3 schlägt ihn, und Schwarz kann weder zurückschlagen noch " +
      "hat er irgendeinen Ausgleich.",
  },

  "1.e4 e5 2.Nf3 Ne7": {
    strategy:
      "Verstellt Dame und Königsläufer, deckt e5 nicht und nimmt sich die Möglichkeit ...De7. " +
      "3.Sxe5 gewinnt einen Bauern, und der Springer auf e7 steht ungeschickt.",
  },

  "1.e4 e5 2.Nf3 b5": {
    strategy:
      "Gibt einen Bauern umsonst her: 3.Lxb5 schlägt ihn, der Läufer fesselt dann den Bauern " +
      "d7, und e5 bleibt vom Springer angegriffen.",
  },

  "1.e4 e5 2.Nf3 f6": {
    name: "Damianos Verteidigung",
    background:
      "Benannt nach dem portugiesischen Autor Pedro Damiano, der den Zug in Wahrheit als " +
      "schwach verwarf; 1847 vermerkte Staunton, dass er in Damianos altem Werk vorkommt. " +
      "Tschigorin spielte ihn 1897 in St. Petersburg gegen Schiffers, und im Spitzenschach " +
      "kommt er heute nie vor.",
    strategy:
      "Deckt e5 mit einem Bauern, entblößt aber den König und nimmt dem Springer das Feld f6. " +
      "Nach 3.Sxe5 fxe5 4.Dh5+ Ke7 5.Dxe5+ steht Weiß klar auf Gewinn, und auch mit 3...De7 " +
      "statt des Schlagens steht Schwarz schlechter.",
  },

  "1.e4 e5 2.Nf3 g5": {
    strategy:
      "Lockert den Königsflügel, während e5 hängt: 3.Sxe5 gewinnt einen Bauern, und h4 greift " +
      "danach auch den vorgerückten g-Bauern an.",
  },

  "1.e4 e5 2.Bc4 Nf6": {
    name: "Läuferspiel: Berliner Verteidigung",
    background:
      "Ludwig Bledow und die Berliner Plejaden arbeiteten diese Erwiderung aus, die f2-f4 " +
      "wegen des Gegenstoßes ...d7-d5 entschärfte. Sie ist die häufigste Antwort von Schwarz " +
      "auf das Läuferspiel.",
    strategy:
      "Entwickelt mit Angriff auf den Bauern e4, sodass Weiß sofort entscheiden muss, wie er " +
      "damit umgeht. Üblich ist 3.d3, wonach Schwarz auf ein verzögertes f2-f4 achten muss; " +
      "3.Sc3 steuert Stellungen der Wiener Partie an, und 3.d4 oder 3.Sf3 führen meist zu " +
      "einem Gambit.",
  },

  "1.e4 e5 2.Bc4 Nc6": {
    strategy:
      "Deckt den Bauern e5 mit einem Entwicklungszug und überlässt Weiß die Wahl der " +
      "Partieanlage: 3.Sf3 führt in die Italienische Partie, 3.Sc3 in die Wiener Partie, und " +
      "3.d3 hält beides offen. Anders als 2...Sf6 übt der Zug keinen Druck auf e4 aus, sodass " +
      "Weiß auch 3.f4 versuchen kann, ein Bauernopfer im Stil des Königsgambits.",
  },

  "1.e4 e5 2.Bc4 Bc5": {
    name: "Läuferspiel: Klassische Variante",
    background:
      "Die symmetrische Antwort von Schwarz, auch Boi-Variante genannt, und nach 2...Sf6 und " +
      "2...Sc6 die nächsthäufige Erwiderung auf 2.Lc4.",
    strategy:
      "Spiegelt den weißen Läufer und entwickelt den eigenen mit Blick auf f2. Weiß kann mit " +
      "3.Sc3 oder 3.Sf3 Sc6 in andere Eröffnungen überleiten oder mit 3.c3 den Vorstoß d4 " +
      "vorbereiten, worauf Schwarz am aktivsten mit dem Gegenstoß 3...d5 antwortet. Schärfer " +
      "sind die Gambits 3.b4, 3.d4 und 3.f4, die jeweils einen Bauern für schnelles Spiel " +
      "anbieten.",
  },

  "1.e4 e5 2.Bc4 c6": {
    name: "Läuferspiel: Philidor-Gegenangriff",
    background:
      "Spielbar, aber selten zu sehen. Schwarz scheint besser zu fahren, wenn er die Idee um " +
      "einen Zug verschiebt, mit 2...Sf6 3.d3 c6, der Paulsen-Verteidigung.",
    strategy:
      "Bereitet ...d5 vor, um mit Tempogewinn gegen den Läufer ein breites Bauernzentrum zu " +
      "errichten. Das kostet Zeit, denn der Bauer nimmt dem Springer b8 das Feld c6 und lässt " +
      "e5 ohne Stütze: Weiß kann ...d5 mit 3.De2 verhindern oder mit 3.d4 zuerst zuschlagen.",
  },

  "1.e4 e5 2.Bc4 d6": {
    strategy:
      "Deckt e5 solide, und nach 3.Sf3 entsteht die Philidor-Verteidigung mit dem weißen " +
      "Läufer bereits auf c4. Der Bauer beschränkt den Läufer f8 auf e7 und überlässt Weiß " +
      "Raum, sodass Schwarz gesund, aber passiv steht.",
  },

  "1.e4 e5 2.Bc4 Qe7": {
    strategy:
      "Deckt e5 und f7 mit der Dame, sperrt aber den Läufer f8 ein, der untätig bleibt, bis " +
      "die Dame wieder zieht oder ...g6 folgt. Weiß entwickelt sich ungehindert und gewinnt " +
      "mit Sc3 und Sd5 Zeit gegen die Dame.",
  },

  "1.e4 e5 2.Bc4 Ne7": {
    strategy:
      "Bereitet ...d5 vor, doch der Springer verstellt den Läufer f8, und 2...Sf6 verfolgt " +
      "dasselbe Ziel von einem besseren Feld aus. 3.Dh5 greift dann e5 an und droht Matt auf " +
      "f7, und nur 3...Sg6 pariert beides.",
  },

  "1.e4 e5 2.Bc4 Na6": {
    strategy:
      "Stellt einen Springer an den Rand, weit weg vom Zentrum, und deckt e5 nicht, das 3.Sf3 " +
      "sofort angreift. Auch 3.Lxa6 bxa6 würde die schwarzen Bauern am Damenflügel zerrütten.",
  },

  "1.e4 e5 2.Bc4 Qf6": {
    strategy:
      "Bringt die Dame früh ins Spiel: Sie deckt e5 und zielt auf f2, nimmt aber dem Springer " +
      "das Feld f6. 3.Sc3 nebst Sd5 greift sie mit Tempo an, und Weiß entwickelt sich, " +
      "während Schwarz Züge mit der Dame verbraucht.",
  },

  "1.e4 e5 2.Bc4 Qg5": {
    strategy:
      "Greift den ungedeckten Bauern g2 an, doch 3.Sf3 trifft sofort Dame und e5. Das " +
      "Schlagen mit 3...Dxg2? scheitert an 4.Tg1 Dh3 5.Lxf7+ Kxf7 6.Sg5+, was die Dame " +
      "gewinnt.",
  },

  "1.e4 e5 2.Bc4 Qh4": {
    strategy:
      "Greift e4 und f2 zugleich an, doch 3.De2 deckt e4 und bereitet Sf3 vor, das die Dame " +
      "mit Tempo angreift. Nach dem Rückzug der Dame hat Weiß den Entwicklungsvorsprung.",
  },

  "1.e4 e5 2.Bc4 Bd6": {
    strategy:
      "Deckt e5, doch der Läufer blockiert den d-Bauern, sodass ...d6 und ...d5 unmöglich " +
      "sind und der Läufer c8 eingesperrt bleibt. 3.Dh5 droht bereits Dxf7#, und Weiß " +
      "entwickelt sich ungehindert gegen den schwerfälligen Aufbau.",
  },

  "1.e4 e5 2.Bc4 Bb4": {
    strategy:
      "Verliert Zeit: 3.c3 greift den Läufer sofort an und bereitet d4 vor, sodass Weiß das " +
      "Zentrum mit Tempo aufbaut. Auf b4 beißt der Läufer nur auf den gut gedeckten Bauern d2 " +
      "und tut nichts für e5.",
  },

  "1.e4 e5 2.Bc4 Nh6": {
    strategy:
      "Deckt f7 und zielt auf g4 und f5, doch der Randspringer leistet im Zentrum wenig. " +
      "Sobald der weiße d-Bauer gezogen hat, tauscht Weiß mit Lxh6 gxh6 seinen " +
      "schwarzfeldrigen Läufer gegen ihn und verdoppelt die schwarzen Bauern am Königsflügel.",
  },

  "1.e4 e5 2.Bc4 a6": {
    strategy:
      "Bereitet ...b5 vor, um den Läufer zu vertreiben, kostet dafür aber zwei Flügelzüge, " +
      "während e5 und f7 Sf3 und Dh5 ausgesetzt sind. Der Läufer weicht einfach nach b3 aus.",
  },

  "1.e4 e5 2.Bc4 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und verhindert b4, entwickelt aber nichts und lässt e5 " +
      "ungedeckt. Weiß nutzt das Tempo für Sf3 oder Dh5.",
  },

  "1.e4 e5 2.Bc4 b6": {
    strategy:
      "Bereitet ...Lb7 gegen den Bauern e4 vor, doch Sc3 oder De2 hält ihn mühelos, und der " +
      "langsame Zug lässt f7 und e5 gegen Dh5 ungeschützt.",
  },

  "1.e4 e5 2.Bc4 b5": {
    name: "Läuferspiel: Anderssen-Gambit",
    strategy:
      "Bietet den b-Bauern an, um den Läufer von seiner Diagonale wegzulocken, in der " +
      "Hoffnung auf ...Lb7 gegen e4 und schnelle Entwicklung. 3.Lxb5 nimmt ihn einfach, und " +
      "die Kompensation von Schwarz ist zu dünn, um den Bauern zu rechtfertigen.",
  },

  "1.e4 e5 2.Bc4 c5": {
    strategy:
      "Hinterlässt ein dauerhaftes Loch auf d5 und entwickelt nichts. Der Bauer e5 bleibt " +
      "ohne Stütze, und 3.Sf3 greift ihn sofort an.",
  },

  "1.e4 e5 2.Bc4 d5": {
    name: "Läuferspiel: Khan-Gambit",
    background:
      "Die Analyse billigt Schwarz für den Bauern ordentliche Kompensation zu, auch wenn das " +
      "Gambit objektiv nicht ausreicht.",
    strategy:
      "Greift Läufer und Bauern e4 zugleich an und bietet den d-Bauern für Zeitgewinn an. " +
      "Nach 3.exd5 Sf6 4.Sc3 Ld6 entwickelt sich Schwarz rasch und rochiert, während Weiß den " +
      "Mehrbauern mit d3 und Sf3 behauptet.",
  },

  "1.e4 e5 2.Bc4 f6": {
    strategy:
      "Deckt e5, nimmt aber dem Springer g8 das Feld f6 und öffnet dem Läufer c4 die " +
      "Diagonale a2-g8, sodass die kurze Rochade erschwert ist. 3.Dh5+ erzwingt ...g6 oder " +
      "...Ke7 und hinterlässt bleibende Löcher um den König.",
  },

  "1.e4 e5 2.Bc4 f5": {
    name: "Läuferspiel: Kalabrisches Gegengambit",
    background:
      "Benannt nach Grecos Heimat Kalabrien. Es gilt als zweifelhaft: Die von Carl Jänisch " +
      "empfohlene Fortsetzung 3.d3 Sf6 4.f4 d6 5.Sf3 verschafft Weiß den Vorteil.",
    strategy:
      "Greift e4 mit dem f-Bauern an und sucht den Gegenangriff, schwächt aber die Diagonale " +
      "e8-h5 und die Deckung des Königs. Weiß kann mit dem scharfen 3.f4 oder dem sicheren " +
      "3.Sc3 antworten und behält einen Vorteil.",
  },

  "1.e4 e5 2.Bc4 g6": {
    strategy:
      "Bereitet ein Fianchetto vor, entwickelt aber nichts und schwächt die dunklen Felder um " +
      "den König. 3.d4 greift e5 sofort an, und nach 3...exd4 4.Dxd4 trifft die Dame bereits " +
      "den Turm h8.",
  },

  "1.e4 e5 2.Bc4 g5": {
    strategy:
      "Gewinnt Raum am Königsflügel, entwickelt aber nichts und gibt die Kontrolle über f6 " +
      "und h6 endgültig auf. 3.Sf3 oder 3.d4 greift sofort e5 an, und h2-h4 kann später den " +
      "Bauern g5 untergraben.",
  },

  "1.e4 e5 2.Bc4 h6": {
    strategy:
      "Nimmt dem weißen Springer und Läufer das Feld g5, entwickelt aber nichts und lässt e5 " +
      "ohne Stütze. Weiß nutzt das Tempo für 3.Sf3 oder 3.d4 mit sofortigem Angriff auf e5.",
  },

  "1.e4 e5 2.Bc4 h5": {
    strategy:
      "Verhindert Dh5, schwächt aber g5 und den Königsflügel ohne echten Gewinn. Der Zug " +
      "entwickelt nichts, und 3.Sf3 greift den ungedeckten Bauern e5 mit Tempo an.",
  },

  "1.e4 e5 2.Bc4 Ke7": {
    strategy:
      "Verzichtet endgültig auf die Rochade und verstellt den Läufer f8. 3.Dh5 droht sofort " +
      "Dxe5#, und der Läufer c4 verstärkt den Druck auf f7, sodass der König im Zentrum " +
      "Zielscheibe bleibt.",
  },

  "1.e4 e5 2.Bc4 Be7": {
    strategy:
      "Strebt einen Aufbau wie in der Ungarischen Verteidigung an, verliert aber den Bauern " +
      "e5 gegen 3.Dh5, das e5 angreift und Dxf7# droht, weil der Läufer dem König das " +
      "Fluchtfeld nimmt. Nach 3...Sc6? beendet 4.Dxf7# die Partie sofort.",
  },

  "1.e4 e5 2.Bc4 Ba3": {
    strategy:
      "Stellt den Läufer ein: bxa3 oder Sxa3 gewinnt einfach die Figur, und Schwarz erhält " +
      "nichts dafür.",
  },

  "1.e4 e5 2.Nc3 Nf6": {
    name: "Wiener Partie: Falkbeer-Variante",
    background:
      "Benannt nach Ernst Falkbeer (1819–1885), dem österreichischen Schachmeister und " +
      "Journalisten, der 1855 die Wiener Schachzeitung gründete und auch dem " +
      "Falkbeer-Gegengambit seinen Namen gab. Sie ist die häufigste Antwort auf die Wiener " +
      "Partie.",
    strategy:
      "Entwickelt eine Figur, greift e4 an und bereitet vor, 3.f4 mit ...d5 zu beantworten " +
      "und im Zentrum zurückzuschlagen, bevor Weiß es aufbauen kann. Die klassischen " +
      "Varianten 3.f4 d5 4.fxe5 Sxe4 und 3.Lc4 Sxe4 4.Dh5 Sd6 sind scharf und verlangen " +
      "genaue Kenntnisse, während 3.g3 und 3.Sf3 zu ruhigerem Spiel führen. Den Gambitbauern " +
      "mit 3...exf4 zu nehmen ist ein Fehler, weil 4.e5 den Springer nach g8 zurücktreibt.",
  },

  "1.e4 e5 2.Nc3 Nc6": {
    name: "Wiener Partie: Max-Lange-Verteidigung",
    background:
      "Benannt nach Max Lange (1832–1899), dem deutschen Schachspieler, Problemkomponisten " +
      "und Organisator, nach dem auch der Max-Lange-Angriff im Zweispringerspiel im Nachzuge " +
      "benannt ist. Hooper und Whyld führen 2...Sc6 in ihrem Oxford Companion to Chess als " +
      "Max-Lange-Verteidigung.",
    strategy:
      "Entwickelt den Damenspringer und deckt e5. Gegen 3.f4 kann Schwarz mit ...exf4 " +
      "schlagen, da auf f6 kein Springer steht, den der Vorstoß e5 treffen könnte, und 4.Sf3 " +
      "g5 führt zu sehr scharfem Gambitspiel. Die häufigste Antwort von Weiß ist 3.Lc4, meist " +
      "beantwortet mit dem soliden 3...Sf6, da 3...Lc5 4.Dg4 für Schwarz unangenehm ist. Weiß " +
      "kann auch mit 3.g3 fianchettieren.",
  },

  "1.e4 e5 2.Nc3 Bc5": {
    name: "Wiener Partie: Anderssen-Verteidigung",
    background:
      "Eine ausgefallene, aber spielbare Alternative zu den Hauptantworten; der frühere " +
      "Weltmeister José Raúl Capablanca spielte sie 1936 in Moskau mit Schwarz gegen Ilja " +
      "Kan.",
    strategy:
      "Stellt den Läufer auf die Diagonale a7–g1, wo er auf f2 zielt, und hält ...Sf6 und " +
      "...d6 in Reserve. Gegen 3.Sf3 muss Schwarz genau 3...d6 spielen, denn nach 3...Sc6 " +
      "4.Sxe5! Sxe5 5.d4 gabelt Weiß Läufer und Springer und erhält großen Vorteil. 3.Sa4 " +
      "greift den Läufer an, doch das ruhige 3...Le7 gibt Schwarz ein gutes Spiel.",
  },

  "1.e4 e5 2.Nc3 Bb4": {
    strategy:
      "Entwickelt den Läufer gegen den Springer c3, der e4 deckt, und bereitet ...Sf6 vor. " +
      "Das direkte 3.Dg4 greift g7 an, und 3...Sf6 4.Dxg7 Tg8 gibt den Bauern für die " +
      "halboffene g-Linie und ein Tempo gegen die Dame. Ruhigere Züge wie 3.Sf3 führen oft in " +
      "andere Eröffnungen über, sodass der Zug eine spielbare Nebenvariante und keine " +
      "Hauptvariante ist.",
  },

  "1.e4 e5 2.Nc3 d6": {
    strategy:
      "Deckt e5 solide und öffnet den Läufer c8, beschränkt aber den Läufer f8 auf e7 und " +
      "überlässt Weiß Raum. Nach 3.Sf3 entsteht eine Stellung wie in der " +
      "Philidor-Verteidigung, und Weiß kann auch das ruhige 3.Lc4 Sf6 4.d3 oder das schärfere " +
      "3.f4 wählen.",
  },

  "1.e4 e5 2.Nc3 f5": {
    strategy:
      "Greift e4 sofort an, doch nach 3.exf5 hat Schwarz einen Bauern weniger, und die " +
      "Diagonale e8–h5 ist offen. Der Versuch, den Bauern mit 3...d5 zurückzugewinnen, stößt " +
      "auf 4.Dh5+.",
  },

  "1.e4 e5 2.Nc3 Qe7": {
    strategy:
      "Deckt e5, doch die Dame verstellt den Läufer f8 und steht exponiert: 3.Sd5 greift sie " +
      "und den Bauern c7 zugleich an, sodass die Dame erneut ziehen muss.",
  },

  "1.e4 e5 2.Nc3 Qf6": {
    strategy:
      "Zielt auf f2, nimmt aber dem Springer g8 das Feld f6, und 3.Sd5 greift die Dame und " +
      "den Bauern c7 zugleich an. Die Dame muss erneut ziehen und dabei c7 decken, sodass " +
      "Schwarz Zeit verloren hat.",
  },

  "1.e4 e5 2.Nc3 Qg5": {
    strategy:
      "Zielt auf g2, das der Läufer f1 deckt, doch 3.d4 greift mit dem Läufer c1 die Dame und " +
      "mit dem d-Bauern den Bauern e5 an. Schwarz verliert ein Tempo und muss das Zentrum " +
      "aufgeben.",
  },

  "1.e4 e5 2.Nc3 Qh4": {
    strategy:
      "Greift e4 an, das der Springer c3 deckt, und f2, das der König deckt. 3.Sf3 greift die " +
      "Dame mit einem Entwicklungszug an und zugleich e5, sodass Schwarz Zeit verliert.",
  },

  "1.e4 e5 2.Nc3 Be7": {
    strategy:
      "Entwickelt den Läufer bescheiden, verstellt aber die Dame und lässt e5 gegen 3.Sf3 " +
      "ungedeckt. Schwarz braucht als Nächstes ...Sc6 oder ...d6, nur um den Bauern zu " +
      "halten, und Weiß hat freie Hand für f4 oder d4.",
  },

  "1.e4 e5 2.Nc3 Bd6": {
    strategy:
      "Blockiert den d-Bauern und verliert nach 3.Sb5, das den Läufer und c7 angreift, Zeit. " +
      "Ignoriert Schwarz den Springer, verdoppelt Sxd6+ cxd6 die Bauern und lässt Weiß das " +
      "Läuferpaar.",
  },

  "1.e4 e5 2.Nc3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo ihm nach vorn nur b4 und c5 bleiben und er nichts " +
      "für e5 tut. Weiß entwickelt sich mit Sf3 und d4 gegen einen ungedeckten Zentralbauern.",
  },

  "1.e4 e5 2.Nc3 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, blockiert den h-Bauern und lässt e5 ungedeckt. Nach " +
      "3.d4 zielt der Läufer c1 auf h6, und Lxh6 gxh6 würde die Bauern am Königsflügel " +
      "zerrütten.",
  },

  "1.e4 e5 2.Nc3 Ne7": {
    strategy:
      "Verstellt den Läufer f8 und die Dame, lässt e5 ungedeckt und übt keinen Druck auf e4 " +
      "aus. Weiß entwickelt sich frei mit 3.Sf3 und greift e5 an, oder spielt 3.f4.",
  },

  "1.e4 e5 2.Nc3 a6": {
    strategy:
      "Ein Wartezug, der weder eine Figur entwickelt noch um das Zentrum kämpft. Nach 3.Sf3 " +
      "ist der Bauer e5 angegriffen, und Schwarz muss ihn mit einem Tempo weniger decken.",
  },

  "1.e4 e5 2.Nc3 a5": {
    strategy:
      "Rückt den a-Bauern ohne Zweck in der Eröffnung vor, verliert ein Tempo und schwächt " +
      "b5. Weiß entwickelt sich mit 3.Sf3 und greift e5 an.",
  },

  "1.e4 e5 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 gegen e4 vor, tut aber nichts für e5, das 3.Sf3 sofort angreift. Der " +
      "Bauernzug kostet ein Tempo, und der Läufer würde nur einen gut gedeckten Bauern e4 " +
      "angreifen.",
  },

  "1.e4 e5 2.Nc3 c6": {
    strategy:
      "Bereitet ...d5 vor, lässt aber e5 ohne Stütze und nimmt dem Springer b8 das Feld c6. " +
      "Nach 3.Sf3 muss Schwarz meist ein weiteres Tempo für ...d6 aufwenden, denn 3...d5 " +
      "4.exd5 cxd5 5.Sxe5 verliert einen Bauern.",
  },

  "1.e4 e5 2.Nc3 c5": {
    strategy:
      "Lässt e5 ungedeckt und gibt die Kontrolle über d5 auf, ein Feld, das der Springer c3 " +
      "sofort besetzen kann. Nach 3.Sf3 braucht Schwarz ohnehin ...Sc6 oder ...d6, sodass der " +
      "Zug des c-Bauern nur Zeit gekostet hat.",
  },

  "1.e4 e5 2.Nc3 f6": {
    strategy:
      "Stützt e5, nimmt aber dem Springer g8 das Feld f6 und schwächt den König: Da f7 leer " +
      "ist, öffnen sich die Diagonalen a2–g8 und e8–h5 für Lc4 und Dh5+. Nach 3.Lc4 " +
      "beherrscht der Läufer bereits g8, sodass Schwarz nicht kurz rochieren kann, bis die " +
      "Diagonale geschlossen ist.",
  },

  "1.e4 e5 2.Nc3 g6": {
    strategy:
      "Bereitet ...Lg7 vor, vernachlässigt aber das Zentrum und lockert die lange Diagonale. " +
      "Nach 3.d4 exd4 4.Dxd4 greift die Dame den Turm h8 an, und Schwarz muss die Diagonale " +
      "sofort verstellen, denn 4...Lg7? verliert den Läufer durch 5.Dxg7.",
  },

  "1.e4 e5 2.Nc3 g5": {
    strategy:
      "Schwächt die Deckung des Königs und die Felder f5 und h5 und öffnet die lange " +
      "Diagonale. Nach 3.d4 exd4 4.Dxd4 greift die Dame den Turm h8 an, und das Verstellen " +
      "mit 4...Sf6 schneidet die Dame d8 von g5 ab, sodass 5.Lxg5 einen Bauern gewinnt.",
  },

  "1.e4 e5 2.Nc3 h6": {
    strategy:
      "Verliert ein Tempo mit einem Bauernzug gegen einen Läufer, der ohnehin noch nicht nach " +
      "g5 kommen kann. e5 bleibt ungedeckt, und Weiß entwickelt sich mit 3.Sf3.",
  },

  "1.e4 e5 2.Nc3 h5": {
    strategy:
      "Ein Flankenvorstoß, der g5 und den Königsflügel ohne Gegenwert schwächt und weder der " +
      "Entwicklung dient noch etwas gegen e4 unternimmt. 3.Sf3 greift e5 sofort an.",
  },

  "1.e4 e5 2.Nc3 d5": {
    strategy:
      "Greift e4 zu früh an: 3.exd5 gewinnt einen Bauern, und 3...Dxd5 verliert die Dame " +
      "durch 4.Sxd5. Nach 3...Sf6 4.Lc4 decken der Springer c3 und der Läufer d5, sodass " +
      "4...Sxd5? 5.Sxd5 Schwarz eine Figur kostet.",
  },

  "1.e4 e5 2.Nc3 b5": {
    strategy:
      "Gibt einen Bauern weg: 3.Sxb5 oder 3.Lxb5 gewinnt ihn umsonst, denn ...a6 vertreibt " +
      "die Figur nur wieder.",
  },

  "1.e4 e5 2.Nc3 Ke7": {
    strategy:
      "Gibt das Rochaderecht endgültig auf, verstellt den Läufer f8 und die Dame und lässt " +
      "den König im Zentrum, wo ihn 3.Sd5+ und später f4 bedrängen.",
  },

  "1.e4 e5 2.Nc3 Ba3": {
    strategy:
      "Stellt den Läufer gegen 3.bxa3 ein: Keine schwarze Figur deckt a3, und für die Figur " +
      "gibt es keine Kompensation.",
  },
};
