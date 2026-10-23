import type { OpeningTexts } from "../book.ts";

// German prose for g3.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.g3 d5": {
    strategy:
      "Besetzt sofort das Zentrum und stellt dem Läufer, den Weiß gleich nach g2 bringt, einen " +
      "Bauern in den Weg. Schwarz bekommt ein solides, flexibles Spiel. Weiß baut ruhig weiter " +
      "auf und fordert den Bauern d5 später heraus, entweder durch die Vorbereitung von e4 oder " +
      "durch einen Angriff mit dem c-Bauern.",
  },

  "1.g3 e5": {
    strategy:
      "Nimmt mit dem e-Bauern das Zentrum und befreit den Läufer f8. Schwarz gewinnt Raum im " +
      "Zentrum, doch der Bauer braucht Schutz und kann beim Aufbau der weißen Figuren zum Ziel " +
      "werden. Weiß baut derweil vom Flügel aus auf und übt aus der Ferne Druck auf das Zentrum " +
      "aus.",
  },

  "1.g3 Nf6": {
    strategy:
      "Kontrolliert e4 und d5 und lässt alle Bauern stehen, sodass Schwarz noch zwischen einem " +
      "klassischen Bauernzentrum und einem eigenen Fianchetto wählen kann. Keine Seite legt sich " +
      "fest, und das Spiel bleibt flexibel.",
  },

  "1.g3 g6": {
    strategy:
      "Spiegelt den weißen Aufbau: Der Läufer auf g7 wirkt künftig auf das Zentrum und auf b2, " +
      "und Schwarz kann rasch rochieren. Beide Seiten kämpfen aus der Ferne mit Figuren statt " +
      "mit Bauern um das Zentrum, was meist ein geschlossenes Manövrierspiel bedeutet.",
  },

  "1.g3 c5": {
    strategy:
      "Kontrolliert d4 vom Flügel aus und gewinnt Raum am Damenflügel, während der d- und der " +
      "e-Bauer beweglich bleiben. Die Stellung ist ausgeglichen, doch der weiße Läufer auf g2 " +
      "wird auf der langen Diagonale gegen den schwarzen Damenflügel drücken.",
  },

  "1.g3 Nc6": {
    strategy:
      "Entwickelt einen Springer mit Blick auf d4 und e5, verstellt aber den c-Bauern und stellt " +
      "keinen Bauern ins Zentrum, sodass Weiß es besetzen kann. Solide, doch Schwarz reagiert " +
      "danach auf das weiße Zentrum, statt es mitzugestalten.",
  },

  "1.g3 b6": {
    strategy:
      "Bereitet das Fianchetto des Damenläufers gegen den weißen Läufer vor, kommt dafür aber " +
      "ein Tempo zu spät: Nach 2.Lg2 ist der Turm a8 angegriffen, und 2...Lb7 verliert den " +
      "Läufer nach 3.Lxb7. Schwarz muss zuerst die Diagonale verstellen, während Weiß im Zentrum " +
      "freie Hand behält.",
  },

  "1.g3 c6": {
    strategy:
      "Bereitet ...d5 mit einer soliden Bauernkette vor, entwickelt aber nichts und überlässt " +
      "Weiß die Wahl des Zentrums. Solide, wenn auch passiv; zudem nimmt der Zug dem " +
      "Damenspringer das Feld c6.",
  },

  "1.g3 d6": {
    strategy:
      "Bereitet ...e5 oder ein eigenes Fianchetto am Königsflügel vor und hält die Figuren " +
      "beweglich. Der Zug verzichtet auf ...d5, sodass Weiß in aller Ruhe das Zentrum besetzen " +
      "kann. Solide, aber passiv.",
  },

  "1.g3 e6": {
    strategy:
      "Bereitet ...d5 mit einer soliden Struktur wie in der Französischen Verteidigung vor, " +
      "sperrt aber vorerst den Läufer c8 ein und entwickelt nichts. Solide, aber passiv: Weiß " +
      "entwickelt sich frei und entscheidet, wie er um das Zentrum kämpft.",
  },

  "1.g3 f5": {
    name: "Königsfianchetto: Holländische Verteidigung",
    strategy:
      "Kontrolliert e4 nach Art der Holländischen Verteidigung, sodass der weiße Läufer auf g2 " +
      "auf der langen Diagonale auf Widerstand trifft. Der Zug lockert die Diagonale e8-h5 und " +
      "das Feld e6, während Weiß sich bequem entwickelt. Solide, aber selten gewählt.",
  },

  "1.g3 Na6": {
    strategy:
      "Strebt nach c5 oder b4, doch ein Springer am Rand kontrolliert kein Zentrumsfeld und " +
      "kostet Zeit. Weiß kann das Zentrum besetzen, während der Springer noch einen Posten " +
      "sucht.",
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
      "Zentrum oder die Entwicklung zu tun. Weiß kann in aller Ruhe das Zentrum besetzen.",
  },

  "1.g3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und nimmt den weißen Figuren das Feld b4, tut aber nichts für " +
      "das Zentrum oder die Entwicklung. Weiß kann einfach das Zentrum besetzen.",
  },

  "1.g3 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel, öffnet aber die lange Diagonale nach a8: Nach 2.Lg2 ist der " +
      "Turm angegriffen, und 2...Lb7 verliert den Läufer nach 3.Lxb7. Schwarz muss die Diagonale " +
      "verstellen, und der vorgerückte b-Bauer bleibt ein langfristiges Ziel.",
  },

  "1.g3 f6": {
    strategy:
      "Bereitet ...e5 vor, nimmt aber dem Springer g8 das Feld f6, lockert die Diagonale e8-h5 " +
      "und verzögert die Entwicklung. Weiß kann in aller Ruhe das Zentrum besetzen.",
  },

  "1.g3 g5": {
    name: "Königsfianchetto: Myers-Verteidigung",
    background:
      "1.c4 g5 heißt Myers-Verteidigung, weil der US-amerikanische National Master Hugh Myers " +
      "(1930–2008), vor allem durch seine Schriften über ungewöhnliche Eröffnungen bekannt, " +
      "sie in seinen Schriften und am Brett vertrat. Die Eröffnungsnamen von Lichess " +
      "übertragen den Namen auf 1.g3 g5.",
    strategy:
      "Gewinnt Raum am Königsflügel, lockert aber die eigene Königsstellung und lässt den Bauern " +
      "g5 ungeschützt. 2.d4 greift ihn sofort mit dem Läufer c1 an, sodass Schwarz einen " +
      "weiteren Zug für seine Deckung aufwenden muss oder ihn aufgibt.",
  },

  "1.g3 h6": {
    strategy:
      "Verhindert Lg5, verschenkt aber ein Tempo mit einem Randbauern, ohne Entwicklung und ohne " +
      "Einfluss auf das Zentrum.",
  },

  "1.g3 h5": {
    name: "Lasker Simul Special",
    strategy:
      "Bereitet ...h4 vor, um die h-Linie gegen den Bauern g3 zu öffnen, verbraucht aber ein " +
      "Tempo mit einem Randbauern und entwickelt nichts. Weiß kann den Plan mit 2.h4 unterbinden " +
      "oder sich einfach entwickeln und behält einen kleinen Vorteil.",
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
