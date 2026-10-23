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
};
