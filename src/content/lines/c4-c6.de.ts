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
};
