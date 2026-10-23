import type { OpeningTexts } from "../book.ts";

// German prose for c4-c6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.c4 c6 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer, deckt d4 und e5 und hält die Zentrumsbauern zurück, " +
      "sodass Weiß nach 2...d5 die Struktur noch wählen kann: 3.d4 für die Slawische " +
      "Verteidigung, 3.e3 mit späterem d4 für eine ruhige Slawische oder Halbslawische " +
      "Verteidigung, oder 3.b3 und Lb2 für einen Réti-Aufbau mit dem Läufer auf der langen " +
      "Diagonale. Auch Schwarz behält freie Hand und kann den Läufer c8 mit ...Lf5 oder " +
      "...Lg4 entwickeln, bevor ...e6 ihn einsperrt.",
  },

  "1.c4 c6 2.e4": {
    strategy:
      "Besetzt sofort das Zentrum und greift d5 an, bevor Schwarz sich dort festsetzen kann. " +
      "Nach 2...d5 kann Weiß mit 3.exd5 cxd5 4.d4 durch Zugumstellung in den Panow-Angriff " +
      "der Caro-Kann-Verteidigung übergehen oder mit 3.cxd5 cxd5 4.exd5 Sf6 5.Sc3 Sxd5 einen " +
      "isolierten d-Bauern für offene Linien in Kauf nehmen. Schwarz kann dem Kampf um d5 " +
      "auch mit 2...e5 ausweichen.",
  },

  "1.c4 c6 2.Nc3": {
    strategy:
      "Entwickelt den Damenspringer, deckt d5 und e4 und bereitet e4 oder d4 vor. Nach 2...d5 " +
      "kann Weiß mit 3.d4 in eine Slawische oder Halbslawische Verteidigung übergehen, in der " +
      "der Springer schon auf c3 steht, oder mit 3.cxd5 cxd5 4.d4 die symmetrische Struktur " +
      "der slawischen Abtauschvariante herbeiführen. Schwarz ist jedoch nicht auf ...d5 " +
      "festgelegt: 2...e5 besetzt das Zentrum mit dem anderen Bauern und hält ...d5 in " +
      "Reserve.",
  },

  "1.c4 c6 2.d4": {
    strategy:
      "Besetzt das Zentrum mit dem d-Bauern und führt nach 2...d5 durch Zugumstellung in die " +
      "Slawische Verteidigung, meist mit 3.Sf3 Sf6 4.Sc3 und anschließend ...dxc4 oder ...e6. " +
      "Weiß kann auch mit 3.cxd5 cxd5 abtauschen und eine symmetrische Struktur herbeiführen. " +
      "Schwarz behält Alternativen wie 2...e6 oder 2...Sf6, sodass Weiß die Bauernstruktur " +
      "nicht allein bestimmt.",
  },

  "1.c4 c6 2.e3": {
    strategy:
      "Öffnet dem Läufer f1 den Weg und bereitet d4 vor, mit dem Ziel einer ruhigen " +
      "Slawischen oder Halbslawischen Verteidigung: 2...d5 3.Sf3 Sf6 4.Sc3 e6 5.d4 führt zur " +
      "Halbslawischen Verteidigung. Der Zug ist gesund, aber passiv, denn er sperrt den " +
      "Läufer c1 ein und lässt Schwarz mit ...d5 oder ...e5 Raum im Zentrum nehmen, bevor " +
      "Weiß eine Figur entwickelt hat.",
  },

  "1.c4 c6 2.g3": {
    strategy:
      "Bereitet Lg2 vor, um über die lange Diagonale Druck auf d5 auszuüben, gefolgt von Sf3 " +
      "und O-O in einem Réti- oder katalanisch geprägten Aufbau. Der Zug ist gesund, aber " +
      "langsam: Weiß hat weder den d- noch den e-Bauern gezogen, sodass Schwarz mit ...d5 und " +
      "...e5 ein breites Zentrum oder mit ...d5, ...Sf6 und ...Lf5 oder ...Lg4 ein solides " +
      "Zentrum errichten kann.",
  },

  "1.c4 c6 2.b3": {
    strategy:
      "Bereitet Lb2 auf der langen Diagonale vor, gerichtet auf e5 und den Königsflügel, und " +
      "stützt den Bauern c4, sodass ...dxc4 mit bxc4 beantwortet werden kann. Der Plan ist " +
      "gesund, aber langsam, denn Weiß tut nichts gegen 2...d5 und ...e5, und Schwarz besetzt " +
      "das Zentrum zuerst.",
  },

  "1.c4 c6 2.d3": {
    strategy:
      "Bereitet e4 vor und öffnet dem Läufer c1 die Diagonale, in einem geschlossenen Aufbau " +
      "mit g3, Lg2 und Sf3. Der Zug ist solide, aber bescheiden: Er kämpft weder um d5, noch " +
      "gewinnt er Raum, sodass Schwarz mit 2...d5 und ...e5 das Zentrum aufbauen kann.",
  },

  "1.c4 c6 2.b4": {
    name: "Sokolski-Eröffnung: Outflank-Variante",
    background:
      "Dieselbe Stellung entsteht nach 1.b4 c6, der Outflank-Variante der Sokolski-Eröffnung. " +
      "Nach 1.c4 c6 kann 2.b4 als Überraschungswaffe gegen einen Gegner dienen, der sich mit " +
      "der Sokolski-Eröffnung wenig auskennt. Auf höchstem Niveau ist die Eröffnung nicht " +
      "populär, wird aber noch sporadisch gespielt: Im Mai 2021 setzte Weltmeister Magnus " +
      "Carlsen sie im Online-Schnellschachturnier FTX Crypto Cup gegen Hikaru Nakamura und " +
      "Wesley So ein.",
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 auf der langen Diagonale gegen g7 vor. " +
      "Der Bauer b4 hat jedoch keine Bauerndeckung: 2...a5 und ...Db6 greifen ihn sofort an, " +
      "und ...e5 öffnet die Diagonale des Läufers f8 gegen ihn, sodass Weiß Zeit für die " +
      "Deckung von b4 und c4 aufwendet, während Schwarz das Zentrum aufbaut.",
  },

  "1.c4 c6 2.a3": {
    strategy:
      "Bereitet b4 vor, verbraucht aber ein Tempo für einen Randbauernzug, der nichts " +
      "entwickelt und nicht um d5 kämpft. Schwarz besetzt mit 2...d5 das Zentrum und " +
      "entwickelt sich ungehindert.",
  },

  "1.c4 c6 2.a4": {
    strategy:
      "Verhindert ...b5 und gewinnt etwas Raum am Damenflügel, schwächt aber b4 und " +
      "entwickelt nichts. Schwarz antwortet 2...d5 und besetzt das Zentrum, während Weiß noch " +
      "keine Figur entwickelt hat.",
  },

  "1.c4 c6 2.f3": {
    strategy:
      "Nimmt dem Königsspringer das Feld f3 und öffnet die Diagonale e1–h4 zum König. Der " +
      "Plan mit e4 ist langsam, und 2...d5 besetzt das Zentrum zuerst.",
  },

  "1.c4 c6 2.f4": {
    strategy:
      "Gewinnt Raum am Königsflügel und kontrolliert e5, gefolgt von Sf3 und e3, öffnet aber " +
      "die Diagonale e1–h4 zum König und tut nichts gegen 2...d5, das sofort Raum im Zentrum " +
      "gewinnt.",
  },

  "1.c4 c6 2.h3": {
    strategy:
      "Ein Wartezug, der nur dem Läufer c8 das Feld g4 für später nimmt. Er kostet ein Tempo " +
      "und verhindert 2...d5 nicht, sodass Schwarz das Zentrum besetzt, während Weiß noch " +
      "nichts entwickelt hat.",
  },

  "1.c4 c6 2.Na3": {
    strategy:
      "Deckt c4 und strebt nach c2, doch am Rand kontrolliert der Springer kein Zentrumsfeld, " +
      "kann wegen des Bauern c6 nicht nach b5 und blockiert den a-Bauern. Schwarz besetzt mit " +
      "2...d5 das Zentrum und entwickelt sich mit ...Sf6.",
  },

  "1.c4 c6 2.Nh3": {
    strategy:
      "Strebt nach f4, doch der Springer steht am Rand statt auf f3, wo er d4 und e5 decken " +
      "würde. Nach 2...d5 zielt der Läufer c8 auf h3, und ein späteres ...Lxh3 gxh3 " +
      "hinterlässt Weiß einen h-Doppelbauern für das Läuferpaar.",
  },

  "1.c4 c6 2.Qc2": {
    strategy:
      "Stützt c4 und bereitet e4 vor, bringt aber die Dame vor jeder Leichtfigur ins Spiel. " +
      "Nach 2...d5 kann die Dame mit ...Lf5 angegriffen werden, und Schwarz gewinnt Zeit für " +
      "die Entwicklung.",
  },

  "1.c4 c6 2.Qb3": {
    strategy:
      "Zielt über die b-Linie auf b7, doch der Bauer c4 versperrt der Dame die Diagonale, und " +
      "keine Leichtfigur ist entwickelt. Schwarz besetzt mit 2...d5 das Zentrum und kann mit " +
      "...Db6 den Damentausch anbieten, sodass Weiß für den frühen Ausflug nichts erhält.",
  },

  "1.c4 c6 2.Qa4": {
    strategy:
      "Zielt auf c6 und die Diagonale a4–e8, ohne echte Drohung, da c6 gedeckt ist. Schwarz " +
      "besetzt mit 2...d5 das Zentrum und entwickelt sich mit ...Sf6 und ...Lf5, während die " +
      "Dame noch ein sinnvolles Feld sucht.",
  },

  "1.c4 c6 2.c5": {
    strategy:
      "Gewinnt Raum am Damenflügel, gibt aber den Druck auf d5 auf. Schwarz kann mit 2...d5 " +
      "das Zentrum besetzen oder den vorgerückten Bauern mit ...b6 und ...d6 untergraben, und " +
      "ohne Bauernstütze dahinter wird er zur Zielscheibe.",
  },

  "1.c4 c6 2.g4": {
    strategy:
      "Stürmt vor, ohne eine Figur zu entwickeln, und lässt den Bauern ungedeckt: Nach 2...d5 " +
      "zielt der Läufer c8 auf g4, und Weiß braucht h3 oder f3. Der Vorstoß schwächt außerdem " +
      "f4, h4 und die lange Diagonale.",
  },

  "1.c4 c6 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel, tut aber nichts für Zentrum und Entwicklung und schwächt " +
      "g4 und g3 dauerhaft. Schwarz besetzt mit 2...d5 das Zentrum und entwickelt sich frei.",
  },

  "1.c4 c6": {
    name: "Englische Eröffnung: Caro-Kann-Verteidigungssystem",
  },

  "1.c4 c6 2.Nf3 d5": {
    strategy:
      "Besetzt sofort das Zentrum, wobei der c6-Bauer d5 deckt, sodass der Läufer c8 noch " +
      "nach f5 oder g4 kommen kann, bevor ...e6 ihn einsperrt. Weiß wählt dann zwischen 3.d4 " +
      "mit der Slawischen Verteidigung, 3.e3 mit späterem d4 für die ruhige Slawische " +
      "Variante mit e3 oder die Halbslawische Verteidigung und 3.b3 für einen Réti-Aufbau. " +
      "Der Preis ist eine solide, aber etwas passive Struktur und die Frage, wann der Läufer " +
      "c8 ins Spiel kommt.",
  },

  "1.c4 c6 2.Nf3 Nf6": {
    strategy:
      "Entwickelt den Königsspringer, nimmt d5 und e4 ins Visier und hält sowohl ...d5 als " +
      "auch ...e6 in Reserve. Nach 3.Sc3 oder 3.e3 kann Schwarz mit ...d5 eine slawische oder " +
      "halbslawische Struktur aufbauen, und 3.d4 d5 ist unmittelbar die Slawische " +
      "Verteidigung. Weiß kann auch mit 3.g3 und Lg2 oder mit 3.b3 und Lb2 flexibel bleiben.",
  },

  "1.c4 c6 2.Nf3 e6": {
    strategy:
      "Bereitet ...d5 mit dem halbslawischen Bauerndreieck vor, legt aber den e-Bauern fest " +
      "und sperrt den Läufer c8 ein, bevor er herausgekommen ist. Weiß kann mit 3.d4, mit " +
      "3.g3 und Lg2 oder mit 3.e4 antworten, das sofort Raum im Zentrum nimmt. Solide, aber " +
      "weniger flexibel als ...d5 oder ...Sf6.",
  },

  "1.c4 c6 2.Nf3 d6": {
    strategy:
      "Öffnet die Diagonale des Läufers c8 und bereitet ...e5 mit ...Sf6 und ...Sbd7 vor. Der " +
      "Vorstoß braucht diese Vorbereitung: 3.d4 e5? 4.dxe5 dxe5 5.Dxd8+ Kxd8 6.Sxe5 gewinnt " +
      "einen Bauern. Solide, aber passiv, da Weiß mit d4, Sc3 und e4 Raum nimmt.",
  },

  "1.c4 c6 2.Nf3 f5": {
    strategy:
      "Strebt mit ...e6 und ...d5 einen Stonewall-Aufbau wie in der Holländischen " +
      "Verteidigung an, wobei der c6-Bauer die Kette stützt. Der Zug schwächt e6 und die " +
      "Diagonale e8-h5, und im Stonewall wird e5 zu einem dauerhaften Loch für einen weißen " +
      "Springer. Solide, aber ...d5 oder ...Sf6 sind vorzuziehen.",
  },

  "1.c4 c6 2.Nf3 g6": {
    strategy:
      "Bereitet ...Lg7 vor, gefolgt von ...d5 oder ...Sf6, ein Fianchetto-Aufbau, in dem der " +
      "c6-Bauer ...d5 unterstützen kann. Der Zug ist solide, aber langsam, und Weiß kann mit " +
      "3.d4 oder 3.e4 Raum gewinnen, bevor Schwarz einen Bauern im Zentrum hat.",
  },

  "1.c4 c6 2.Nf3 c5": {
    strategy:
      "Zieht den c-Bauern ein zweites Mal. Es entsteht die Symmetrische Variante der " +
      "Englischen Eröffnung mit Weiß am Zug, sodass Weiß ein Tempo mehr hat, und Schwarz hat " +
      "zwei Züge für einen Bauern verbraucht, ohne eine Figur zu entwickeln oder Raum im " +
      "Zentrum zu nehmen.",
  },

  "1.c4 c6 2.Nf3 b6": {
    strategy:
      "Zielt auf ...La6 gegen c4, da der Läufer auf b7 auf den eigenen c6-Bauern beißen " +
      "würde, und tut nichts für das Zentrum. Weiß besetzt es mit 3.d4 oder 3.e4, und Dc2 " +
      "oder b3 beantwortet ...La6.",
  },

  "1.c4 c6 2.Nf3 b5": {
    strategy:
      "Bietet den Tausch des b-Bauern gegen den weißen c-Bauern an, doch nach 3.cxb5 cxb5 ist " +
      "der Bauer b5 ein Angriffsziel für Sc3 und Db3. Weiß gewinnt Zeit gegen ihn und baut " +
      "mit d4 und e4 das Zentrum auf, während Schwarz noch nichts entwickelt hat.",
  },

  "1.c4 c6 2.Nf3 a6": {
    strategy:
      "Bereitet ...b5 vor, verbraucht aber ein Tempo am Flügel, während das Zentrum leer " +
      "bleibt, sodass 3.d4 oder 3.e4 sofort Raum gewinnt. Der Bauer tut nichts für d5 oder " +
      "für die Entwicklung.",
  },

  "1.c4 c6 2.Nf3 a5": {
    strategy:
      "Verhindert b2-b4, verbraucht aber ein Tempo mit einem Randbauern, überlässt Weiß das " +
      "Zentrum und hilft keiner Figur bei der Entwicklung. 3.d4 oder 3.e4 gewinnt mühelos " +
      "Raum.",
  },

  "1.c4 c6 2.Nf3 h6": {
    strategy:
      "Nimmt einem späteren Lg5 oder Sg5 das Feld g5, verbraucht aber ein Tempo mit einem " +
      "Bauernzug, bevor eine Figur entwickelt ist. Weiß baut ungehindert mit d4 und e4 das " +
      "Zentrum auf.",
  },

  "1.c4 c6 2.Nf3 h5": {
    strategy:
      "Rückt einen Flügelbauern ohne Plan vor, schwächt g6 und die Deckung des Königsflügels " +
      "und entwickelt nichts. Weiß baut einfach mit d4 und e4 das Zentrum auf.",
  },

  "1.c4 c6 2.Nf3 f6": {
    strategy:
      "Bereitet ...e5 vor, nimmt aber dem Springer g8 das Feld f6 und schwächt e6 sowie die " +
      "Diagonale e8-h5. Das Zentrum ist noch unbesetzt, daher antwortet Weiß mit 3.d4 oder " +
      "3.e4 und gewinnt Raum.",
  },

  "1.c4 c6 2.Nf3 Na6": {
    strategy:
      "Strebt nach c7, wo der Springer d5 und b5 decken würde, doch der Weg kostet zwei Züge, " +
      "und bis dahin steht der Springer am Rand. Weiß besetzt mit 3.d4 oder 3.e4 das Zentrum.",
  },

  "1.c4 c6 2.Nf3 Nh6": {
    strategy:
      "Zielt auf f5, doch der Randspringer blockiert den h-Bauern und lädt zu 3.d4 ein, " +
      "wonach Lxh6 droht, die schwarzen Bauern zu verdoppeln, und e4 den Springer unter " +
      "Raumgewinn von f5 vertreibt.",
  },

  "1.c4 c6 2.Nf3 Qc7": {
    strategy:
      "Bringt die Dame früh heraus, um ...e5 zu unterstützen, bevor eine andere Figur " +
      "entwickelt ist. Weiß baut mit Sc3, d4 und e4 das Zentrum auf, und nach d4 kann ein " +
      "Läufer auf f4 Zeit gegen die Dame gewinnen.",
  },

  "1.c4 c6 2.Nf3 Qb6": {
    strategy:
      "Scheint b2 anzugreifen, doch der Läufer auf c1 deckt den Bauern. Die Dame hat kein " +
      "Ziel, während Weiß mit Sc3 entwickelt und mit d4 und e4 das Zentrum besetzt.",
  },

  "1.c4 c6 2.Nf3 Qa5": {
    strategy:
      "Stellt die Dame auf die Diagonale a5-e1, wo sie den Bauern d2 vorübergehend fesselt, " +
      "aber nichts Wertvolles angreift. Weiß verstellt die Diagonale mit 3.Sc3 und folgt mit " +
      "d4, e4 und Ld2, während Schwarz keine Figur entwickelt und keinen Bauern im Zentrum " +
      "hat.",
  },

  "1.c4 c6 2.Nf3 e5": {
    strategy:
      "Lässt den Bauern ungedeckt: 3.Sxe5 gewinnt ihn, und nach 3...Da5 zieht sich der " +
      "Springer einfach mit dem Mehrbauern nach f3 zurück. Schwarz erhält dafür zu wenig.",
  },

  "1.c4 c6 2.Nf3 g5": {
    strategy:
      "Stellt den Bauern ein, denn nichts deckt g5, und 3.Sxg5 schlägt ihn. Der Zug lockert " +
      "außerdem dauerhaft den Königsflügel, und Schwarz erhält dafür weder Entwicklung noch " +
      "Angriff.",
  },

  "1.c4 c6 2.Nc3 d5": {
    strategy:
      "Besetzt das Zentrum mit dem Bauern, den ...c6 stützt, und hält dem Läufer c8 den Weg " +
      "nach f5 oder g4 offen. Nach 3.d4 Sf6 4.Sf3 entsteht die Hauptstellung der Slawischen " +
      "Verteidigung, in der Schwarz zwischen 4...dxc4, 4...e6 und 4...a6 wählt. Weiß kann " +
      "auch sofort mit 3.cxd5 cxd5 4.d4 tauschen und die symmetrische Struktur der slawischen " +
      "Abtauschvariante herbeiführen oder 3.e4 spielen, worauf 3...dxe4 4.Sxe4 eine " +
      "Caro-Kann-artige Stellung ergibt, in der der Bauer c4 das Feld d5 kontrolliert.",
  },

  "1.c4 c6 2.Nc3 Nf6": {
    strategy:
      "Entwickelt den Springer und hält ...d5 in Reserve; die Stellung ist dieselbe wie nach " +
      "1.c4 Sf6 2.Sc3 c6. Nach 3.d4 d5 oder 3.Sf3 d5 4.d4 entsteht durch Zugumstellung die " +
      "Slawische Verteidigung, doch anders als 2...d5 erlaubt der Zug 3.e4, und nach 3...d5 " +
      "greift 4.e5 den Springer f6 an.",
  },

  "1.c4 c6 2.Nc3 e6": {
    strategy:
      "Bereitet ...d5 mit einer soliden Bauernkette vor und öffnet den Läufer f8; die " +
      "Stellung ist dieselbe wie nach 1.c4 e6 2.Sc3 c6. Nach 3.d4 d5 stehen die Bauern wie in " +
      "der Halbslawischen Verteidigung, doch der Läufer c8 ist hinter e6 eingesperrt. Weiß " +
      "kann auch 3.e4 spielen und ...d5 mit e5 oder einem Tausch auf d5 beantworten.",
  },

  "1.c4 c6 2.Nc3 e5": {
    strategy:
      "Beansprucht Raum im Zentrum und hebt ...d5 und ...Sf6 für später auf; die Stellung ist " +
      "dieselbe wie nach 1.c4 e5 2.Sc3 c6. Der Zug ist gesund, aber nicht zu empfehlen: Der " +
      "c-Bauer hat dem Springer das Feld c6 genommen, sodass der Bauer e5 nach 3.Sf3 mit " +
      "...d6 oder ...Dc7 gedeckt oder mit ...e4 weitergeschoben werden muss.",
  },

  "1.c4 c6 2.Nc3 g6": {
    strategy:
      "Bereitet ...Lg7 und einen ruhigen Aufbau am Königsflügel vor, dem ...d5 oder ...e5 " +
      "folgen soll. Der Zug ist gesund, aber nicht zu empfehlen: Er ist langsamer als 2...d5, " +
      "und Weiß kann mit e4 und d4 ein breites Zentrum errichten, bevor Schwarz es angreift.",
  },

  "1.c4 c6 2.Nc3 d6": {
    strategy:
      "Bereitet ...e5 hinter einem soliden Bauern auf d6 vor, gefolgt von ...Sf6 und ...g6 " +
      "oder ...Le7. Der Zug ist gesund, aber passiv: Er verschiebt das ...d5, das ...c6 " +
      "vorbereitet hat, und nach 3.e4 oder 3.d4 hat Weiß mehr Raum im Zentrum.",
  },

  "1.c4 c6 2.Nc3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c7 ins Auge fasst, das Zentrum aber " +
      "unbeachtet lässt. Ihn nach c7 zu führen, um ...d5 zu stützen, kostet einen weiteren " +
      "Zug, und Weiß besetzt in der Zwischenzeit e4 und d4.",
  },

  "1.c4 c6 2.Nc3 Qc7": {
    strategy:
      "Bringt die Dame heraus, bevor eine Figur entwickelt ist. Der Zug bereitet ...e5 vor, " +
      "überlässt Weiß aber das Zentrum, der ungehindert e4 und d4 spielt.",
  },

  "1.c4 c6 2.Nc3 Qb6": {
    strategy:
      "Zielt auf b2 und f2, doch beide Felder sind gedeckt (durch den Läufer c1 und den " +
      "König), sodass nichts droht. Weiß entwickelt sich mit Sf3 und d4, das zugleich die " +
      "Diagonale nach f2 sperrt, und c5 oder Sa4 können die Dame später mit Tempogewinn " +
      "angreifen.",
  },

  "1.c4 c6 2.Nc3 Qa5": {
    strategy:
      "Zielt auf c3 und a2, ohne echte Drohung, denn der Springer ist durch die Bauern b2 und " +
      "d2 gedeckt und a2 durch den Turm. Schwarz hat nichts entwickelt, und Weiß baut mit Sf3 " +
      "und d4 das Zentrum auf und fügt Ld2 hinzu, damit die Dame den Springer c3 nicht gegen " +
      "den König fesseln kann.",
  },

  "1.c4 c6 2.Nc3 Nh6": {
    strategy:
      "Strebt vom Rand aus nach f5, doch 3.d4 öffnet die Diagonale c1-h6 und droht Lxh6, was " +
      "die Bauern am Königsflügel zerrüttet. Nach 3...Sf5 greift 4.e4 den Springer erneut an " +
      "und gewinnt dabei Raum.",
  },

  "1.c4 c6 2.Nc3 a6": {
    strategy:
      "Bereitet ...b5 vor, verbraucht aber ein Tempo für einen Bauernzug, der weder dem " +
      "Zentrum noch der Entwicklung dient. Weiß antwortet mit e4 und d4 und nimmt ungehindert " +
      "Raum.",
  },

  "1.c4 c6 2.Nc3 a5": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel und nimmt den weißen Figuren das Feld b4, tut aber " +
      "nichts für Zentrum oder Entwicklung. Weiß spielt ungehindert e4 und d4.",
  },

  "1.c4 c6 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, doch der Bauer c6 versperrt bereits die lange Diagonale, sodass " +
      "der Läufer nur auf den eigenen Bauern blicken würde. Gegen e4 und d4 unternimmt der " +
      "Zug nichts.",
  },

  "1.c4 c6 2.Nc3 f6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6 und schwächt die Diagonale e8-h5; als Gegenwert " +
      "bleibt nur die Kontrolle über e5. Weiß nimmt mit e4 und d4 Raum, bevor Schwarz einen " +
      "echten Plan hat.",
  },

  "1.c4 c6 2.Nc3 f5": {
    strategy:
      "Kontrolliert e4 mit dem f-Bauern, schwächt aber e6 und die Diagonale e8-h5 und " +
      "entwickelt nichts. Weiß kann sofort mit 3.e4 zuschlagen, und nach 3...fxe4 4.Sxe4 " +
      "erlaubt die offene Diagonale der Dame ein Schach auf h5.",
  },

  "1.c4 c6 2.Nc3 h6": {
    strategy:
      "Nimmt dem weißen Läufer das Feld g5, kostet aber ein Tempo und tut nichts für Zentrum " +
      "oder Entwicklung. Weiß setzt mit e4 und d4 fort.",
  },

  "1.c4 c6 2.Nc3 h5": {
    strategy:
      "Ein Flankenvorstoß, der g5 dauerhaft ohne Bauerndeckung lässt, weil der h-Bauer das " +
      "Feld nicht mehr von h6 aus decken kann, und der nichts für Zentrum oder Entwicklung " +
      "tut. Weiß besetzt ungehindert e4 und d4.",
  },

  "1.c4 c6 2.Nc3 c5": {
    strategy:
      "Zieht den c-Bauern ein zweites Mal und erreicht die Stellung der Symmetrischen " +
      "Variante nach 1.c4 c5 2.Sc3, aber mit Weiß am Zug, sodass Schwarz ein volles Tempo " +
      "verloren hat. Der Bauer gibt außerdem die Stütze für ...d5 auf, die ...c6 bot.",
  },

  "1.c4 c6 2.Nc3 b5": {
    strategy:
      "Opfert einen Bauern, den Weiß einfach nimmt: Nach 3.cxb5 cxb5 4.Sxb5 hat Weiß einen " +
      "glatten Mehrbauern, und 4...Da5 greift nur den Springer an, der nach c3 zurückgeht.",
  },

  "1.c4 c6 2.Nc3 g5": {
    strategy:
      "Überzieht: Nichts deckt den Bauern g5, und 3.d4 öffnet die Diagonale des Läufers mit " +
      "der Drohung Lxg5. Ihn mit ...h6 zu decken, lockert den Königsflügel weiter.",
  },

  "1.c4 c6 2.d4 d5": {
    strategy:
      "Erhebt sofort Anspruch auf das Zentrum und stützt den Bauern mit dem Bauern c6, sodass " +
      "der Läufer c8 frei bleibt, sich außerhalb der Bauernkette nach f5 oder g4 zu " +
      "entwickeln. Nach 3.Sf3 Sf6 4.Sc3 wählt Schwarz zwischen ...dxc4, ...e6 und ...a6, " +
      "während 3.cxd5 cxd5 eine symmetrische Struktur ergibt, in der Weiß nur der " +
      "Anzugsvorteil bleibt.",
  },

  "1.c4 c6 2.d4 Nf6": {
    strategy:
      "Entwickelt einen Springer, der d5 und e4 deckt, und hält die Wahl der Bauernstruktur " +
      "offen; anders als 2...e6 verhindert der Zug ein sofortiges e4. Nach 3.Sf3 oder 3.Sc3 " +
      "führt 3...d5 in die Slawische Verteidigung und 3...e6 zu einem halbslawischen Aufbau. " +
      "Mit 3...g6 lässt Schwarz Weiß dagegen ein breites Zentrum mit e4 errichten, gestützt " +
      "durch Sc3.",
  },

  "1.c4 c6 2.d4 e6": {
    strategy:
      "Bereitet ...d5 für das halbslawische Bauerndreieck c6, d5 und e6 vor, und ein Abtausch " +
      "auf d5 ergibt dann eine Karlsbader Struktur statt der symmetrischen slawischen " +
      "Abtauschvariante. Weiß kann mit 3.e4 antworten, und 3...d5 4.Sc3 führt in die Stellung " +
      "des Marshall-Gambits der Halbslawischen Verteidigung. Die Struktur ist solide, doch " +
      "der Läufer c8 bleibt eingesperrt, bis ...dxc4 und ...b5 oder ein späteres ...c5 ihn " +
      "befreien.",
  },

  "1.c4 c6 2.d4 d6": {
    name: "Damenbauernspiel: Anglo-Slawische Eröffnung",
    strategy:
      "Vermeidet die Slawische Verteidigung, indem ...d5 aufgeschoben wird, öffnet die " +
      "Diagonale des Läufers c8 und bereitet ...e5 für einen altindischen Aufbau vor. Der Zug " +
      "ist solide, aber passiv: Weiß erhält mit Sc3, e4 und Sf3 mehr Raum, und Schwarz muss " +
      "den richtigen Moment für den Befreiungshebel finden.",
  },

  "1.c4 c6 2.d4 g6": {
    strategy:
      "Bereitet ...Lg7 und ...d6 oder ...d5 in einem Aufbau nach Art der Modernen " +
      "Verteidigung vor, der die lange Diagonale und d4 ins Visier nimmt. Der Zug ist solide, " +
      "aber passiv: Weiß kann mit Sc3, e4 und Sf3 ein breites Zentrum errichten, bevor " +
      "Schwarz im Zentrum vorgestoßen ist.",
  },

  "1.c4 c6 2.d4 f5": {
    strategy:
      "Kontrolliert e4 für einen Aufbau der Holländischen Verteidigung mit ...Sf6, ...e6 und " +
      "...d5, den Stonewall mit dem c-Bauern bereits auf c6. Der Zug schwächt die Diagonale " +
      "e8-h5 und das Feld e6, und im Stonewall ist der Läufer c8 hinter dem Bauern e6 " +
      "eingesperrt, daher ist er spielbar, gibt Weiß aber mit Sc3, g3 und Lg2 eine bequeme " +
      "Entwicklung.",
  },

  "1.c4 c6 2.d4 Na6": {
    strategy:
      "Bringt den Springer an den Rand, wo er b4 und c5 ins Auge fasst, aber wenig für das " +
      "Zentrum tut und den a-Bauern blockiert. Ohne ...d5 oder ...e5 überlässt Schwarz Weiß " +
      "den Raum, und Weiß baut mit Sc3 und e4 auf.",
  },

  "1.c4 c6 2.d4 Qc7": {
    strategy:
      "Bereitet ...e5 vor, doch die Dame zieht vor jeder Leichtfigur heraus und überlässt " +
      "Weiß das Zentrum. Ein sofortiges ...e5 beantwortet Weiß mit dxe5 Dxe5 und Sf3 mit " +
      "Tempogewinn gegen die Dame, andernfalls baut Weiß mit Sc3 und e4 auf.",
  },

  "1.c4 c6 2.d4 Qb6": {
    strategy:
      "Zielt auf d4 und b2, doch beide sind gedeckt und die Dame steht exponiert: Sc3 und Sa4 " +
      "oder sofort c5 vertreiben sie mit Tempogewinn, während Schwarz noch keine Figur " +
      "entwickelt und nicht um das Zentrum gekämpft hat.",
  },

  "1.c4 c6 2.d4 Qa5+": {
    strategy:
      "Das Schachgebot bringt nichts: Ld2 pariert es mit Angriff auf die Dame, oder Sc3 " +
      "entwickelt eine Figur, und Schwarz muss weitere Züge mit der Dame verbringen, ohne " +
      "eine Figur entwickelt zu haben, während das Zentrum Weiß überlassen bleibt.",
  },

  "1.c4 c6 2.d4 Nh6": {
    strategy:
      "Strebt nach f5, um d4 anzugreifen, doch den Randspringer beantwortet Weiß mit Lxh6 " +
      "gxh6, wonach Schwarz für das Läuferpaar isolierte Doppelbauern auf der h-Linie hat. " +
      "Das Zentrum gehört derweil Weiß.",
  },

  "1.c4 c6 2.d4 a6": {
    strategy:
      "Bereitet ...b5 gegen c4 vor, kostet aber ein Tempo und entwickelt nichts, sodass Weiß " +
      "mit Sc3 und e4 fortsetzt und im Zentrum freie Hand hat.",
  },

  "1.c4 c6 2.d4 a5": {
    strategy:
      "Verhindert ein späteres b4, ist aber ein langsamer Randbauernzug, der nichts " +
      "entwickelt und die Kontrolle über b6 aufgibt. Weiß baut mit Sc3 und e4 das Zentrum " +
      "auf.",
  },

  "1.c4 c6 2.d4 b6": {
    strategy:
      "Bereitet ...Lb7 vor, doch der Bauer c6 sperrt diesen Läufer von Anfang an ein, und " +
      "erst ...c5 würde seine Diagonale öffnen, um den Preis eines weiteren Tempos. " +
      "Unterdessen besetzt Weiß mit Sc3 und e4 das Zentrum.",
  },

  "1.c4 c6 2.d4 b5": {
    strategy:
      "Greift c4 an, doch nach cxb5 cxb5 hängt der Bauer b5 in der Luft: e4 öffnet dem Läufer " +
      "f1 den Weg dorthin, und auch Db3 und Sc3 greifen ihn an. Schwarz muss weitere Züge für " +
      "den Bauern aufwenden, während die Figuren zu Hause bleiben.",
  },

  "1.c4 c6 2.d4 e5": {
    strategy:
      "Greift sofort d4 an, doch nach 3.dxe5 gewinnt Schwarz den Bauern am schnellsten mit " +
      "...Da5+ und ...Dxe5 zurück. Gegen die exponierte Dame gewinnt Weiß mit Ld2 und Lc3 " +
      "oder mit Sc3 und Sf3 Tempi, und Schwarz gerät in Entwicklungsrückstand.",
  },

  "1.c4 c6 2.d4 f6": {
    strategy:
      "Bereitet ...e5 vor, nimmt dem Springer aber das Feld f6 und schwächt e6 sowie die " +
      "Diagonale e8-h5. Weiß entwickelt sich mit Sc3 und e4 und besetzt zuerst das Zentrum.",
  },

  "1.c4 c6 2.d4 h6": {
    strategy:
      "Nimmt dem Läufer das Feld g5, ist aber ein langsamer Randbauernzug, der nichts " +
      "entwickelt. Weiß setzt mit Sc3 und e4 fort und beherrscht das Zentrum allein.",
  },

  "1.c4 c6 2.d4 h5": {
    strategy:
      "Ein Flankenvorstoß, der g5 und g6 schwächt und weder dem Zentrum noch der Entwicklung " +
      "dient. Weiß baut mit Sc3 und e4 auf und kann einen Läufer auf g5 postieren.",
  },

  "1.c4 c6 2.d4 c5": {
    strategy:
      "Verwendet ein zweites Tempo auf den c-Bauern. Nach 3.d5 hat Weiß einen Raumvorteil wie " +
      "im Benoni mit einem Mehrtempo, und nach 3.dxc5 braucht Schwarz weitere Zeit, um den " +
      "Bauern mit ...e6 und ...Lxc5 oder ...Da5+ und ...Dxc5 zurückzugewinnen.",
  },

  "1.c4 c6 2.d4 g5": {
    strategy:
      "Stellt einen Bauern ein: Lxg5 schlägt ihn ohne Gegenwert, da der Bauer e7 die Deckung " +
      "durch die Dame verstellt. Weder ...Db6 gegen b2 und d4 noch ...Da5+ gegen g5 gewinnt " +
      "ihn zurück, denn Dd2 pariert beides.",
  },
};
