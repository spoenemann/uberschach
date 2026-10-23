import type { OpeningTexts } from "../book.ts";

// German prose for g3.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.g3 d5": {
    background:
      "Die häufigste Antwort auf 1.g3: In jeder der fünf Partiedatenbanken, die die " +
      "Eröffnungstheorie bei Wikibooks vergleicht, wird 1...d5 in rund 28 bis 37 Prozent der " +
      "Partien gespielt.",
    strategy:
      "Besetzt sofort das Zentrum und stellt dem Läufer, den Weiß gleich nach g2 bringt, " +
      "einen Bauern in den Weg. Weiß setzt meist mit Lg2, Sf3 und O-O fort und bereitet dann " +
      "entweder mit d3 den Vorstoß e4 vor, wie im Königsindischen Angriff, oder greift d5 mit " +
      "c4 an, im Stil der Réti-Eröffnung oder der Katalanischen Eröffnung. Schwarz entwickelt " +
      "sich mit ...Sf6, ...c6 oder ...e6 und ...Le7 oder ...Lg4 und steht solide; der Bauer " +
      "d5 ist das Ziel beider weißer Pläne.",
  },

  "1.g3 e5": {
    strategy:
      "Nimmt mit dem e-Bauern das Zentrum und befreit den Läufer f8. Weiß kann mit 2.c4 " +
      "antworten, einer Englischen Eröffnung mit frühem g3, oder mit 2.Lg2 nebst d3 und Sf3, " +
      "einem Königsindischen Aufbau mit vertauschten Farben und einem Tempo mehr. Schwarz " +
      "baut mit ...d5 oder ...Sf6 und ...Sc6 auf und hat mehr Raum im Zentrum, doch der Bauer " +
      "e5 braucht Schutz, sobald Sf3 und später d4 oder f4 ihn angreifen.",
  },

  "1.g3 Nf6": {
    name: "Königsfianchetto: Indische Verteidigung",
    strategy:
      "Kontrolliert e4 und d5 und lässt alle Bauern stehen, sodass Schwarz noch zwischen " +
      "...d5 mit klassischem Zentrum und ...g6 mit indischem Aufbau wählen kann. Nach 2.Lg2 " +
      "führt ...d5 in die Varianten von 1...d5, während ...g6, ...Lg7 und ...O-O das weiße " +
      "Fianchetto spiegeln. Auch Weiß behält freie Hand und kann mit c4 eine Englische " +
      "Eröffnung ansteuern oder mit d4 und Sf3 ein Fianchetto-System gegen die indischen " +
      "Verteidigungen.",
  },

  "1.g3 g6": {
    name: "Königsfianchetto: Symmetrische Variante",
    strategy:
      "Spiegelt den weißen Aufbau: ...Lg7 wirkt über die lange Diagonale auf das Zentrum und " +
      "auf b2, es folgen ...Sf6, ...O-O und ...d6 oder ...d5, mit ...e5 oder ...c5 als Hebel " +
      "im Zentrum. Weiß setzt meist mit Lg2 fort und spielt entweder c4 und Sc3, eine " +
      "Englische Eröffnung mit beiden Läufern auf den langen Diagonalen, oder ruhiger e3 und " +
      "Se2. Beide Seiten kämpfen aus der Ferne um das Zentrum, im Stil der Hypermoderne.",
  },

  "1.g3 c5": {
    name: "Königsfianchetto: Sizilianische Einladung",
    strategy:
      "Kontrolliert d4 vom Flügel aus und hält den d- und den e-Bauern beweglich. Weiß kann " +
      "2.Lg2 Sc6 3.c4 spielen, die Symmetrische Variante der Englischen Eröffnung, 2.Sf3 Sc6 " +
      "3.Lg2 g6 oder 2.e4, eine Sizilianische Verteidigung mit frühem g3. Schwarz folgt mit " +
      "...Sc6 und ...g6 oder ...e6, gewinnt Raum am Damenflügel und erreicht ein " +
      "ausgeglichenes Spiel.",
  },

  "1.g3 Nc6": {
    strategy:
      "Entwickelt einen Springer mit Blick auf d4 und e5, verstellt aber den c-Bauern und " +
      "stellt keinen Bauern ins Zentrum, sodass Weiß es mit 2.d4 oder 2.e4 und Lg2 besetzen " +
      "kann. Solide, doch Schwarz reagiert danach auf das weiße Zentrum, statt es " +
      "mitzugestalten.",
  },

  "1.g3 b6": {
    strategy:
      "Bereitet das Fianchetto des Damenläufers gegen den weißen Läufer vor, kommt dafür aber " +
      "ein Tempo zu spät: Nach 2.Lg2 ist der Turm a8 über das leere Feld b7 angegriffen, und " +
      "2...Lb7 verliert den Läufer nach 3.Lxb7. Schwarz verstellt zuerst die Diagonale mit " +
      "...d5, ...c6 oder ...Sc6, während Weiß im Zentrum mit e4 und d4 freie Hand behält.",
  },

  "1.g3 c6": {
    strategy:
      "Bereitet ...d5 mit einer soliden Bauernkette wie in der Slawischen Verteidigung oder " +
      "der Caro-Kann-Verteidigung vor, entwickelt aber nichts und überlässt Weiß mit 2.d4 " +
      "oder 2.e4 die Wahl des Zentrums. Solide und in Meisterpartien selten, nimmt der Zug " +
      "dem Damenspringer zudem das Feld c6.",
  },

  "1.g3 d6": {
    strategy:
      "Bereitet ...e5 vor, oder ...Sf6 und ...g6 im Stil der Pirc-Ufimzew-Verteidigung, und " +
      "hält die Figuren beweglich. Der Zug verzichtet auf ...d5, sodass Weiß mit e4 und d4 " +
      "das Zentrum besetzen oder Lg2 und c4 spielen kann. Solide, aber passiv und in " +
      "Meisterpartien selten.",
  },

  "1.g3 e6": {
    strategy:
      "Bereitet ...d5 mit einer Struktur wie in der Französischen Verteidigung vor; es folgen " +
      "...Sf6 und ...Le7. Der Zug sperrt vorerst den Läufer c8 ein und lässt Weiß nach Lg2, " +
      "Sf3 und O-O die freie Wahl zwischen d3 und c4. Solide, aber in Meisterpartien selten.",
  },

  "1.g3 f5": {
    name: "Königsfianchetto: Holländische Verteidigung",
    strategy:
      "Kontrolliert e4 nach Art der Holländischen Verteidigung, sodass der Läufer, der nach " +
      "g2 kommt, auf der langen Diagonale auf Widerstand trifft; es folgen ...Sf6 und ...e6 " +
      "oder ...g6. Der Zug lockert die Diagonale e8-h5 und das Feld e6, während Weiß sich mit " +
      "Lg2, Sf3 und c4 oder d4 bequem entwickelt. Solide, aber selten gewählt.",
  },

  "1.g3 Na6": {
    strategy:
      "Strebt nach c5 oder b4, doch ein Springer am Rand kontrolliert kein Zentrumsfeld und " +
      "kostet Zeit. Weiß besetzt mit Lg2, e4 und d4 das Zentrum, während der Springer noch " +
      "einen Posten sucht.",
  },

  "1.g3 Nh6": {
    strategy:
      "Zielt auf f5 und g4, doch der Randspringer nimmt nicht am Kampf um das Zentrum teil. " +
      "Nach 2.d4 kann Weiß Lxh6 spielen, und nach gxh6 hat Schwarz einen isolierten " +
      "Doppelbauern auf der h-Linie.",
  },

  "1.g3 a6": {
    strategy:
      "Bereitet ...b5 vor, verbraucht aber ein Tempo mit einem Randbauern, ohne etwas für das " +
      "Zentrum oder die Entwicklung zu tun. Weiß besetzt mit Lg2, e4 und d4 in aller Ruhe das " +
      "Zentrum.",
  },

  "1.g3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und nimmt den weißen Figuren das Feld b4, tut aber nichts " +
      "für das Zentrum oder die Entwicklung. Weiß besetzt mit Lg2, e4 und d4 das Zentrum.",
  },

  "1.g3 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel, öffnet aber die lange Diagonale nach a8: Nach 2.Lg2 ist " +
      "der Turm angegriffen, und 2...Lb7 verliert den Läufer nach 3.Lxb7. Schwarz muss die " +
      "Diagonale mit ...c6, ...Sc6 oder ...d5 verstellen, und der vorgerückte b-Bauer wird " +
      "bald zum Ziel von a4 oder c4.",
  },

  "1.g3 f6": {
    strategy:
      "Bereitet ...e5 vor, nimmt aber dem Springer g8 das Feld f6, lockert die Diagonale " +
      "e8-h5 und verzögert die Entwicklung. Weiß besetzt in aller Ruhe mit e4 und d4 das " +
      "Zentrum.",
  },

  "1.g3 g5": {
    name: "Königsfianchetto: Myers-Verteidigung",
    background:
      "1.c4 g5 heißt Myers-Verteidigung, weil der US-amerikanische National Master Hugh Myers " +
      "(1930–2008), vor allem durch seine Schriften über ungewöhnliche Eröffnungen bekannt, " +
      "sie in seinen Schriften und am Brett vertrat. Die Eröffnungsnamen von Lichess " +
      "übertragen den Namen auf 1.g3 g5.",
    strategy:
      "Gewinnt Raum am Königsflügel, lockert aber die eigene Königsstellung und lässt den " +
      "Bauern g5 ungeschützt. 2.d4 greift ihn sofort mit dem Läufer c1 an, sodass Schwarz " +
      "einen weiteren Zug für seine Deckung aufwenden muss, etwa ...h6, oder ihn aufgibt.",
  },

  "1.g3 h6": {
    strategy:
      "Verhindert Lg5, verschenkt aber ein Tempo mit einem Randbauern, ohne Entwicklung und " +
      "ohne Einfluss auf das Zentrum. Weiß setzt mit Lg2 und e4 oder d4 fort.",
  },

  "1.g3 h5": {
    name: "Lasker Simul Special",
    strategy:
      "Bereitet ...h4 vor, um die h-Linie gegen den Bauern g3 zu öffnen, verbraucht aber ein " +
      "Tempo mit einem Randbauern und entwickelt nichts. Weiß kann den Plan mit 2.h4 " +
      "unterbinden oder sich einfach mit Lg2 und Sf3 entwickeln und behält einen kleinen " +
      "Vorteil.",
  },

  "1.g3": {
    name: "Königsfianchetto",
    background:
      "Auch Benko-Eröffnung nach Pal Benko, der damit beim Kandidatenturnier 1962 in Curaçao " +
      "Bobby Fischer und Michail Tal besiegte und den Zug dort in seinen ersten elf " +
      "Weißpartien spielte. Richard Réti hatte ihn schon in Baden-Baden 1925 mit wechselndem " +
      "Erfolg versucht.",
  },
};
