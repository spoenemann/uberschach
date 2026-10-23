import type { OpeningTexts } from "../book.ts";

// German prose for Nf3.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.Nf3 Nf6": {
    strategy:
      "Entwickelt eine Figur und kontrolliert e4 und d5, ohne einen Bauern festzulegen, " +
      "sodass Schwarz die Struktur wählen kann, nachdem Weiß seinen Plan gezeigt hat. Weiß " +
      "kann mit 2.c4, 2.g3 oder 2.d4 fortsetzen, und Schwarz antwortet mit ...g6, ...e6 oder " +
      "...d5 und gelangt in englische, Réti- oder indische Stellungen. Der Springer " +
      "verhindert außerdem 2.e4, denn der Bauer ginge nach ...Sxe4 einfach verloren. Der " +
      "Preis ist, dass Schwarz mehrere dieser Strukturen kennen muss.",
  },

  "1.Nf3 d5": {
    strategy:
      "Beansprucht sofort das Zentrum und macht 2.e4 zu einem Gambit, da ...dxe4 den Bauern " +
      "nimmt. Weiß antwortet meist mit 2.d4, 2.g3 oder 2.c4, und Schwarz baut mit ...Sf6, " +
      "...e6 und ...c5 oder ...c6 auf, mit Strukturen aus dem Damengambit, dem " +
      "Königsindischen Angriff oder der Réti-Eröffnung. Gegen 2.c4, das den Bauern d5 " +
      "angreift, wählt Schwarz zwischen seiner Deckung durch ...c6 oder ...e6, dem Vorstoß " +
      "...d4 und dem Schlagen auf c4.",
  },

  "1.Nf3 c5": {
    strategy:
      "Kämpft sofort um d4: Nach 2.d4 cxd4 3.Sxd4 hat Schwarz einen Flügelbauern gegen einen " +
      "Zentrumsbauern getauscht. Der Zug hält zwei Hauptwege offen, 2.c4 in die " +
      "Symmetrievariante der Englischen Eröffnung und 2.e4 nach ...d6, ...Sc6 oder ...e6 in " +
      "die Sizilianische Verteidigung. Er eignet sich daher für Spieler, die 1.e4 ohnehin mit " +
      "1...c5 beantworten, denn Weiß entscheidet, welcher der beiden Wege es wird.",
  },

  "1.Nf3 e6": {
    strategy:
      "Öffnet den Läufer auf f8 und bereitet ...d5 vor, während Königsspringer und c-Bauer " +
      "noch nicht festgelegt sind. Schwarz kann mit ...d5 und ...Sf6 Strukturen des " +
      "Abgelehnten Damengambits anstreben, mit ...Sf6 und ...b6 solche der Damenindischen " +
      "Verteidigung, oder 2.e4 mit ...d5 beantworten und in die Französische Verteidigung " +
      "übergehen. Der Preis ist, dass Weiß den Charakter der Partie wählt, und nach ...d5 " +
      "bleibt der Läufer auf c8 hinter dem Bauern e6 eingesperrt.",
  },

  "1.Nf3 g6": {
    strategy:
      "Bereitet ...Lg7 vor und stellt das Zentrum zurück; nach 2.d4 Lg7 oder 2.e4 Lg7 3.d4 " +
      "entstehen Strukturen der Königsindischen oder der Modernen Verteidigung. Der " +
      "fianchettierte Läufer drückt aus der Ferne auf das weiße Zentrum, und Schwarz kontert " +
      "mit ...d6 und ...e5 oder mit ...c5. Weiß gewinnt mit e4 und d4 Raum, daher muss " +
      "Schwarz bereit sein, das Zentrum anzugreifen.",
  },

  "1.Nf3 f5": {
    strategy:
      "Kontrolliert e4 und strebt die Aufbauten an, die Schwarz gegen 1.d4 f5 wählt, mit " +
      "...Sf6 und danach ...e6 oder ...g6. Weiß kann mit 2.d4 oder 2.g3 dorthin übergehen " +
      "oder mit dem Gambit 2.e4 fxe4 3.Sg5 antworten, das den Bauern e4 angreift und das " +
      "geschwächte Feld e6 ausnutzt. Theoretisch anerkannt, aber schärfer und festlegender " +
      "als ...Sf6 oder ...d5.",
  },

  "1.Nf3 c6": {
    name: "Zukertort-Eröffnung: Slawische Einladung",
    strategy:
      "Bereitet ...d5 mit Bauernunterstützung vor und zielt auf Strukturen der Slawischen " +
      "oder der Caro-Kann-Verteidigung. Der Zug ist solide, aber passiver als die " +
      "Hauptantworten, denn er entwickelt keine Figur, und Weiß kann frei zwischen 2.d4, 2.c4 " +
      "und 2.e4 wählen.",
  },

  "1.Nf3 d6": {
    name: "Zukertort-Eröffnung: Pirc-Einladung",
    strategy:
      "Hält das Zentrum flexibel und wartet, bis Weiß sich festlegt, bevor Schwarz einen " +
      "Pirc-, Philidor- oder altindischen Aufbau wählt. Korrekt, aber Weiß hat freie Hand: " +
      "2.e4 oder 2.d4 errichtet ein breites Bauernzentrum, während der Bauer d6 nur e5 und c5 " +
      "überwacht.",
  },

  "1.Nf3 b6": {
    name: "Zukertort-Eröffnung: Damenfianchetto-Variante",
    strategy:
      "Bereitet das Fianchetto ...Lb7 vor, das über die lange Diagonale auf e4 drückt, " +
      "gefolgt von ...e6 und ...Sf6. Der Aufbau ist korrekt, aber langsam: Weiß kann sofort " +
      "mit d4 und e4 das Zentrum besetzen, und Schwarz muss die Bauern danach angreifen.",
  },

  "1.Nf3 Nc6": {
    name: "Zukertort-Eröffnung: Black-Mustang-Verteidigung",
    strategy:
      "Entwickelt einen Springer und überwacht e5 und d4, sodass sowohl ...e5 als auch ...d5 " +
      "möglich bleiben. Der Springer verstellt den c-Bauern und legt sich fest, bevor Weiß " +
      "einen Plan zeigt: 2.e4 e5 führt in die offenen Spiele, 2.d4 d5 3.c4 in eine " +
      "Damengambit-Struktur wie in der Tschigorin-Verteidigung. Brauchbar, aber Schwarz " +
      "gewinnt nichts gegenüber den Hauptantworten.",
  },

  "1.Nf3 a6": {
    name: "Zukertort-Eröffnung: St.-George-Verteidigung",
    background:
      "1...a6 ist der Zug der St.-George-Verteidigung gegen 1.e4, deren Theorie zum großen " +
      "Teil der englische Internationale Meister Michael Basman ausarbeitete und mit der Tony " +
      "Miles bei der Mannschaftseuropameisterschaft 1980 in Skara den amtierenden Weltmeister " +
      "Anatoli Karpow besiegte.",
    strategy:
      "Bereitet ...b5 und ...Lb7 vor, verbraucht aber ein Tempo für einen Randbauern, während " +
      "Weiß mit d4 und e4 das Zentrum besetzt. Nichts in der Stellung macht den Zug dringend, " +
      "sodass Schwarz an Raum und Entwicklung zurückfällt.",
  },

  "1.Nf3 a5": {
    name: "Zukertort-Eröffnung: Ware-Verteidigung",
    strategy:
      "Gewinnt etwas Raum am Damenflügel, tut aber nichts für Zentrum und Entwicklung und " +
      "nimmt den Feldern b6 und b5 den Schutz des a-Bauern. Weiß baut mit d4 und e4 ein " +
      "Zentrum auf und behält das zusätzliche Tempo.",
  },

  "1.Nf3 b5": {
    name: "Zukertort-Eröffnung: Polnische Verteidigung",
    strategy:
      "Nimmt Raum am Damenflügel und bereitet ...Lb7 vor, aber der Bauer auf b5 braucht " +
      "ständige Deckung, und das Feld c6 wird geschwächt. Weiß gewinnt Zeit gegen ihn mit e4, " +
      "das dem Läufer auf f1 die Diagonale nach b5 öffnet, oder mit a4.",
  },

  "1.Nf3 Na6": {
    strategy:
      "Strebt nach b4 oder c5, aber der Springer am Rand kontrolliert kein Zentrumsfeld und " +
      "blockiert den a-Bauern. Weiß nimmt mit d4 und e4 Raum und behält die Initiative.",
  },

  "1.Nf3 Nh6": {
    strategy:
      "Zielt auf f5, aber der Springer am Rand kontrolliert kein Zentrumsfeld, und nach 2.d4 " +
      "kann der Läufer von c1 ihn schlagen und die schwarzen h-Bauern verdoppeln. Schwarz " +
      "verliert Zeit, und Weiß bekommt das Zentrum kampflos.",
  },

  "1.Nf3 f6": {
    name: "Zukertort-Eröffnung: Arktische Verteidigung",
    strategy:
      "Bereitet ...e5 vor, nimmt aber dem Springer g8 sein bestes Feld und schwächt e6 sowie " +
      "die Diagonale e8–h5. Nach 2.e4 e5 3.Sxe5 führt das Schlagen 3...fxe5? zu 4.Dh5+ mit " +
      "entscheidendem Angriff.",
  },

  "1.Nf3 h6": {
    name: "Zukertort-Eröffnung: Basman-Verteidigung",
    strategy:
      "Bereitet ...g5 und ...g4 gegen den Springer auf f3 vor, verliert aber ein Tempo und " +
      "lockert den Königsflügel. Weiß baut mit d4 und e4 ein Zentrum auf, während das " +
      "schwarze Flügelspiel wenig erreicht.",
  },

  "1.Nf3 h5": {
    strategy:
      "Verbraucht ein Tempo für einen Flügelbauern und gibt die Kontrolle über g5 auf, wo " +
      "sich der weiße Springer festsetzen kann, weil ...h6 nicht mehr möglich ist. Für " +
      "Zentrum und Entwicklung tut der Zug nichts.",
  },

  "1.Nf3 e5": {
    name: "Zukertort-Eröffnung: Ross-Gambit",
    strategy:
      "Läuft in 2.Sxe5, das den ungedeckten Bauern gewinnt. Nach 2...Sc6 3.Sxc6 dxc6 hat " +
      "Schwarz offene Linien und schnelle Entwicklung, aber nicht genug für den Bauern.",
  },

  "1.Nf3 g5": {
    name: "Zukertort-Eröffnung: Herrstrom-Gambit",
    strategy:
      "Bietet den g-Bauern ohne Gegenwert an: 2.Sxg5 gewinnt ihn, und 2...e5, das den Angriff " +
      "der Dame auf den Springer freilegt, vertreibt ihn nur, während Weiß den Mehrbauern " +
      "behält und der schwarze Königsflügel geschwächt bleibt.",
  },

  "1.Nf3": {
    name: "Zukertort-Eröffnung",
    background:
      "Benannt nach Johannes Zukertort. Als Réti-Eröffnung gilt meist nur die Folge 1.Sf3 d5 " +
      "2.c4, mit der Richard Réti in New York 1924 den amtierenden Weltmeister Capablanca " +
      "besiegte. Réti war ein Vorkämpfer der hypermodernen Schule der 1920er-Jahre, die das " +
      "Zentrum aus der Ferne kontrollierte, statt es mit Bauern zu besetzen.",
  },
};
