import type { OpeningTexts } from "../book.ts";

// German prose for g3-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.g3 Nf6 2.Bg2": {
    strategy:
      "Vollendet das Fianchetto und richtet den Läufer über die lange Diagonale auf das " +
      "Zentrum und b7. Nach 2...d5 geht die Partie in die Varianten von 1...d5 über, meist " +
      "mit Sf3, O-O und danach d3 und e4 oder c4; gegen indische Aufbauten kann Weiß " +
      "weiterhin zwischen Strukturen der Englischen Eröffnung, der Réti-Eröffnung und des " +
      "Königsindischen Angriffs wählen. Der Preis ist ein noch unbesetztes Zentrum, das " +
      "Schwarz mit ...d5 und ...c5 beanspruchen kann.",
  },

  "1.g3 Nf6 2.Nf3": {
    strategy:
      "Entwickelt den Springer zum Zentrum hin und bereitet die schnelle Rochade vor, mit Lg2 " +
      "und O-O als Fortsetzung. Weiß behält die Wahl zwischen c4 für einen Réti- oder " +
      "englischen Aufbau, d3 mit Sbd2 und e4 für einen Königsindischen Angriff oder d4 mit c4 " +
      "für eine katalanische Struktur. Der Springer kontrolliert außerdem e5, sodass Schwarz " +
      "nicht sofort ...e5 spielen kann und meist mit ...d5 oder ...g6 antwortet.",
  },

  "1.g3 Nf6 2.c4": {
    strategy:
      "Kämpft von der Flanke aus um d5 und hält Sc3, Sf3 und d4 offen. Gegen ...e6 und ...d5 " +
      "kann Weiß mit d4 einen katalanischen Aufbau wählen; gegen ...g6 entsteht eine " +
      "Englische Eröffnung mit beiderseits fianchettierten Königsläufern, gegen ...c5 die " +
      "Symmetrische Variante und gegen ...e5 ein Sizilianisch mit vertauschten Farben. Der " +
      "Bauer besetzt noch kein Zentrumsfeld, sodass Schwarz die Struktur noch wählen kann.",
  },

  "1.g3 Nf6 2.d4": {
    strategy:
      "Besetzt das Zentrum mit einem Bauern und bereitet Lg2, Sf3 und O-O vor, mit c4 als " +
      "Fortsetzung zu einem katalanisch geprägten Aufbau. Der Zug ist solide, aber weniger " +
      "flexibel als 2.Sf3 oder 2.c4, da der d-Bauer festgelegt ist, bevor der schwarze Aufbau " +
      "feststeht, und Schwarz sofort mit ...d5 oder ...c5 antworten kann.",
  },

  "1.g3 Nf6 2.d3": {
    strategy:
      "Unterstützt e4 und öffnet den Läufer c1, mit dem Ziel Lg2, Sf3 und e4 nach Art des " +
      "Königsindischen Angriffs. Der Zug ist solide, aber bescheiden: Schwarz besetzt mit " +
      "...d5 und ...e5 das Zentrum, und das weiße Spiel bleibt passiv, bis e4 durchgesetzt " +
      "werden kann.",
  },

  "1.g3 Nf6 2.Nc3": {
    strategy:
      "Entwickelt den Springer, überwacht d5 und e4 und unterstützt ein späteres e4. Er " +
      "verstellt jedoch den c-Bauern, sodass englische und katalanische Pläne mit c4 vorerst " +
      "ausscheiden, und Schwarz kann sofort mit ...d5 Raum gewinnen und den Springer mit " +
      "...d4 vertreiben.",
  },

  "1.g3 Nf6 2.c3": {
    strategy:
      "Bereitet d4 mit einer soliden Bauernkette vor, entwickelt aber nichts und nimmt dem " +
      "Damenspringer das Feld c3. Der Bauer kämpft nicht um d5, sodass Schwarz mit ...d5 das " +
      "Zentrum besetzt und sich ungehindert entwickelt.",
  },

  "1.g3 Nf6 2.e3": {
    strategy:
      "Unterstützt d4 und bereitet einen ruhigen Aufbau mit Lg2, Se2 und d4 vor. Der Zug ist " +
      "solide, aber passiv: Sobald d4 folgt, sperrt der Bauer e3 den Läufer c1 ein, der dann " +
      "b3 und Lb2 braucht, um ins Spiel zu kommen, und Schwarz besetzt mit ...d5 und ...e5 " +
      "das Zentrum.",
  },

  "1.g3 Nf6 2.b3": {
    strategy:
      "Bereitet Lb2 vor, sodass nach Lg2 beide Läufer im Doppelfianchetto von den langen " +
      "Diagonalen aus auf das Zentrum wirken. Der Zug ist solide, aber im Zentrum langsam: " +
      "Schwarz kann mit ...d5 und ...e5 Raum gewinnen oder mit ...g6 und ...Lg7 die Diagonale " +
      "a1–h8 streitig machen.",
  },

  "1.g3 Nf6 2.f4": {
    strategy:
      "Kontrolliert e5 und steuert eine Bird-Eröffnung mit Lg2, Sf3 und O-O an, das " +
      "Leningrader System der Holländischen Verteidigung mit vertauschten Farben. Der Zug ist " +
      "solide, lockert aber die Königsstellung: Ohne den f-Bauern liegt die Diagonale g1–a7 " +
      "zum rochierten König hin offen, und Schwarz besetzt mit ...d5 und ...c5 das Zentrum.",
  },

  "1.g3 Nf6 2.Nh3": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er den f-Bauern nicht verstellt und nach f4 " +
      "gehen kann, aber kein Zentrumsfeld überwacht. Schwarz besetzt mit ...d5 und ...e5 das " +
      "Zentrum, und Sf3 hätte dieselbe Figur auf ein besseres Feld entwickelt.",
  },

  "1.g3 Nf6 2.Bh3": {
    strategy:
      "Entwickelt den Läufer auf die Diagonale c8–h3, statt ihn zu fianchettieren. Nach ...d5 " +
      "oder ...d6 steht er dem weißfeldrigen Läufer von Schwarz gegenüber, und entweder " +
      "werden die Läufer getauscht, sodass die durch g3 geschwächten weißen Felder ihren " +
      "Verteidiger verlieren, oder Weiß zieht mit Tempoverlust nach g2 zurück.",
  },

  "1.g3 Nf6 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er b5 und c4 ins Auge fasst, aber nichts im " +
      "Zentrum deckt. Schwarz besetzt mit ...d5 das Zentrum, womit er auch c4 überwacht, und " +
      "Sc3 hätte dieselbe Figur wirksamer entwickelt.",
  },

  "1.g3 Nf6 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 vor, doch nichts deckt den Bauern: Nach " +
      "...e6 greift ihn der Läufer f8 an, und Weiß muss ein weiteres Tempo für a3, c3 oder b5 " +
      "aufwenden oder ihn hergeben. Schwarz besetzt unterdessen mit ...d5 das Zentrum.",
  },

  "1.g3 Nf6 2.a3": {
    strategy:
      "Verbraucht ein Tempo für einen Bauernzug am Damenflügel, der b4 vorbereitet, aber " +
      "nichts für das Zentrum oder die Entwicklung tut. Schwarz gewinnt mit ...d5 und ...e5 " +
      "Raum.",
  },

  "1.g3 Nf6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und kontrolliert b5, verbraucht aber ein Tempo für einen " +
      "Randbauernzug, der nichts für das Zentrum oder die Entwicklung tut. Schwarz besetzt " +
      "mit ...d5 und ...e5 das Zentrum und entwickelt sich ungehindert.",
  },

  "1.g3 Nf6 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer g1 das Feld f3, verstellt die lange " +
      "Diagonale, die das Fianchetto nach g3 öffnen sollte, und lockert die Diagonale g1–a7. " +
      "Schwarz besetzt mit ...d5 und ...e5 das Zentrum.",
  },

  "1.g3 Nf6 2.h3": {
    strategy:
      "Ein Wartezug, der ...Sg4 und ...Lg4 verhindert, aber ein Tempo kostet, während Zentrum " +
      "und Entwicklung unberührt bleiben. Schwarz besetzt mit ...d5 und ...e5 das Zentrum, " +
      "ohne dass Weiß dafür etwas vorzuweisen hat.",
  },

  "1.g3 Nf6 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel für h5, verbraucht aber ohne ein ...g6 als Angriffsziel " +
      "ein Tempo für einen Randbauernzug, während Zentrum und Entwicklung warten. Außerdem " +
      "lockert der Zug die Bauern vor dem eigenen König, und Schwarz besetzt mit ...d5 und " +
      "...e5 das Zentrum.",
  },

  "1.g3 Nf6 2.g4": {
    strategy:
      "Stellt einen Bauern ein: Nichts deckt g4, sodass 2...Sxg4 ihn kostenlos gewinnt, und " +
      "der Königsflügel bleibt geschwächt.",
  },

  "1.g3 Nf6 2.e4": {
    strategy:
      "Lässt den e-Bauern ungedeckt: Nach 2...Sxe4 greift 3.Lg2 den Springer an, doch ...d5 " +
      "hält ihn, und Schwarz behält einen sauberen Mehrbauern.",
  },

  "1.g3 Nf6": {
    name: "Königsfianchetto: Indische Verteidigung",
  },

  "1.g3 Nf6 2.Bg2 d5": {
    strategy:
      "Besetzt das Zentrum und geht in 1.g3 d5 2.Lg2 Sf6 über. Weiß setzt mit Sf3 und O-O " +
      "fort und bereitet dann entweder mit d3 den Vorstoß e4 vor oder greift d5 mit c4 an, " +
      "oft ergänzt durch d4 zu einem katalanischen Aufbau. Schwarz behält mit …c6 und …Lg4 " +
      "oder mit …e6 und …Le7 ein gesundes Spiel, und der Bauer d5 ist das Ziel beider weißer " +
      "Pläne.",
  },

  "1.g3 Nf6 2.Bg2 g6": {
    strategy:
      "Spiegelt den weißen Aufbau: Es folgen …Lg7 und …O-O, dann …d6 oder …d5, mit …c5 oder " +
      "…e5 als Zentrumshebel. Jeder fianchettierte Läufer beherrscht seine eigene lange " +
      "Diagonale, der weiße h1–a8, der schwarze a1–h8. Weiß wählt zwischen c4 mit Sc3, einer " +
      "Englischen Eröffnung mit beiderseits fianchettierten Königsläufern, Sf3 mit O-O und d3 " +
      "sowie d4 mit c4, was zu einer Königsindischen oder Grünfeld-Verteidigung mit " +
      "Fianchetto führt.",
  },

  "1.g3 Nf6 2.Bg2 e5": {
    strategy:
      "Besetzt das Zentrum, öffnet den Läufer f8 und geht in 1.g3 e5 2.Lg2 Sf6 über. Weiß " +
      "wählt zwischen d3, Sf3 und O-O, einem königsindischen Aufbau mit vertauschten Farben, " +
      "und c4 mit Sc3 für eine Englische Eröffnung. Schwarz baut mit …d5 oder mit …Sc6 und " +
      "…d6 auf, und der Bauer e5 braucht einen Verteidiger, sobald Sf3 ihn angreift.",
  },

  "1.g3 Nf6 2.Bg2 c5": {
    strategy:
      "Kontrolliert d4 von der Flanke aus und hält …d5, …e6 und …g6 offen. Weiß kann mit c4 " +
      "und Sc3 in die Symmetrievariante der Englischen Eröffnung einlenken oder Sf3 und O-O " +
      "spielen und das Zentrum flexibel halten. Schwarz setzt mit …Sc6 und …g6 zu einem " +
      "symmetrischen Aufbau fort oder beansprucht mit …d5 das Zentrum.",
  },

  "1.g3 Nf6 2.Bg2 e6": {
    strategy:
      "Öffnet den Läufer f8 und bereitet …d5 mit …Le7 vor, einen soliden Aufbau. Weiß " +
      "begegnet ihm mit Sf3, d3 und e4 nach Art des Königsindischen Angriffs oder mit c4 und " +
      "d4 zu einer Katalanischen Eröffnung. Der Preis ist der Läufer c8, der nach …d5 hinter " +
      "e6 eingesperrt bleibt, sofern Schwarz ihn nicht mit …b6 und …Lb7 entwickelt, was erst " +
      "sicher ist, wenn …d5 die lange Diagonale geschlossen hat.",
  },

  "1.g3 Nf6 2.Bg2 Nc6": {
    strategy:
      "Entwickelt einen Springer in Richtung d4 und e5 und verstellt die lange Diagonale, " +
      "sodass Lxc6 nur den besten weißen Läufer hergeben würde. Der Zug stellt jedoch keinen " +
      "Bauern ins Zentrum, sodass Weiß mit d4 oder c4 Raum gewinnen kann und Schwarz " +
      "reagieren muss. Solide, aber weniger flexibel als …d5 oder …e5.",
  },

  "1.g3 Nf6 2.Bg2 c6": {
    strategy:
      "Bereitet …d5 hinter einer soliden Bauernkette vor und schließt die lange Diagonale " +
      "vorsorglich, mit …Lg4 oder …Lf5 als Fortsetzung, sobald das Zentrum geklärt ist. Der " +
      "c-Bauer ist festgelegt, bevor Weiß seinen Aufbau zeigt, und der Springer b8 verliert " +
      "das Feld c6 und entwickelt sich meist über d7. Solide, aber langsamer als sofort …d5.",
  },

  "1.g3 Nf6 2.Bg2 d6": {
    strategy:
      "Bereitet …e5 und einen kompakten Aufbau mit …Sbd7, …Le7 oder …g6 vor und öffnet die " +
      "Diagonale des Läufers c8. Der Zug überlässt Weiß Raum im Zentrum, sodass Weiß mit c4, " +
      "Sc3 und e4 oder nach Sf3 mit d4 aufbaut. Solide, aber passiv.",
  },

  "1.g3 Nf6 2.Bg2 Na6": {
    strategy:
      "Stellt einen Springer an den Rand, von wo er b4 und c5 ins Auge fasst, aber nichts für " +
      "das Zentrum tut. Weiß gewinnt Zeit für Sf3, O-O und d4 oder c4, und d4 nimmt ihm zudem " +
      "das Feld c5.",
  },

  "1.g3 Nf6 2.Bg2 Rg8": {
    strategy:
      "Verschenkt ein Tempo und gibt die kurze Rochade endgültig auf, ohne der Entwicklung " +
      "oder dem Zentrum zu helfen. Der Turm hat auf g8 keine Aufgabe, während Weiß einfach " +
      "mit Sf3, O-O und d4 fortsetzt.",
  },

  "1.g3 Nf6 2.Bg2 a6": {
    strategy:
      "Ein Wartezug, der …b5 vorbereitet, doch dieser Vorstoß würde den Turm a8 weiterhin an " +
      "Lxa8 verlieren, solange die lange Diagonale offen ist. Er tut nichts für das Zentrum " +
      "oder die Entwicklung, und Weiß setzt mit Sf3, O-O und d4 oder c4 fort.",
  },

  "1.g3 Nf6 2.Bg2 a5": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel und kontrolliert b4, tut aber nichts für das Zentrum " +
      "oder die Entwicklung. Weiß setzt ungestört mit Sf3, O-O und d4 oder c4 fort.",
  },

  "1.g3 Nf6 2.Bg2 g5": {
    strategy:
      "Gewinnt Raum am Königsflügel, schwächt aber f5 und h5 und die Deckung eines später " +
      "rochierten Königs. Der Bauer ist zudem angreifbar: 3.d4 droht Lxg5, und 3.h4 greift " +
      "ihn direkt an, sodass Schwarz weitere Züge für ihn aufwenden muss.",
  },

  "1.g3 Nf6 2.Bg2 h6": {
    strategy:
      "Ein vorbeugender Bauernzug, der einem noch hinter den eigenen Bauern eingesperrten " +
      "Läufer das Feld g5 nimmt. Er hilft weder der Entwicklung noch dem Zentrum, und Weiß " +
      "spielt in aller Ruhe Sf3, O-O und d4 oder c4.",
  },

  "1.g3 Nf6 2.Bg2 h5": {
    strategy:
      "Bereitet …h4 vor, um Linien gegen g3 zu öffnen, schwächt aber g5 und entwickelt " +
      "nichts. Weiß kann den Bauern mit h4 aufhalten oder sich einfach mit Sf3 und d4 " +
      "entwickeln.",
  },

  "1.g3 Nf6 2.Bg2 Ng8": {
    strategy:
      "Nimmt den ersten Zug zurück. Schwarz hat zwei Tempi verbraucht, um zur " +
      "Ausgangsstellung zurückzukehren, während Weiß den Läufer entwickelt hat und im Zentrum " +
      "freie Hand behält.",
  },

  "1.g3 Nf6 2.Bg2 Ng4": {
    strategy:
      "Fasst f2 und h2 ins Auge, doch beide sind gedeckt, und 3.h3 vertreibt den Springer " +
      "sofort; 3…Se5 4.d4 bringt Weiß nur weiteren Zeitgewinn. Nach dem Rückzug nach f6 hat " +
      "Schwarz zwei Züge mit dem Springer verbraucht, während Weiß h3 gespielt hat.",
  },

  "1.g3 Nf6 2.Bg2 Nh5": {
    strategy:
      "Stellt den Springer an den Rand, wo er g3 ins Auge fasst, ihn aber nicht schlagen " +
      "kann, da der Bauer von h2 und f2 gedeckt ist. Der Zug tut nichts für das Zentrum oder " +
      "die Entwicklung, und Weiß bekommt Sf3, O-O und d4 oder c4 geschenkt.",
  },

  "1.g3 Nf6 2.Bg2 b6": {
    strategy:
      "Öffnet die lange Diagonale, und 3.Lxa8 schlägt den Turm, da keine schwarze Figur auf " +
      "a8 zurückschlagen kann; selbst wenn der Läufer dort später eingesperrt wird, bleibt " +
      "Weiß mindestens die Qualität voraus. Ein Damenfianchetto funktioniert erst, wenn die " +
      "Diagonale zuvor geschlossen ist, etwa durch …d5 oder …c6.",
  },

  "1.g3 Nf6 2.Bg2 b5": {
    strategy:
      "Öffnet ebenfalls die lange Diagonale: 3.Lxa8 schlägt den Turm, da keine schwarze Figur " +
      "auf a8 zurückschlagen kann, und Weiß bleibt mindestens die Qualität voraus, selbst " +
      "wenn der Läufer dort später eingesperrt wird. Der Raumgewinn am Damenflügel wiegt das " +
      "Material nicht auf.",
  },

  "1.g3 Nf6 2.Bg2 Ne4": {
    strategy:
      "Läuft in die Diagonale des Läufers: 3.Lxe4 gewinnt den Springer, da nichts e4 deckt " +
      "und Schwarz keinen Bauern auf d5 hat, um zurückzuschlagen.",
  },

  "1.g3 Nf6 2.Bg2 Nd5": {
    strategy:
      "Stellt den Springer ein: 3.Lxd5 gewinnt ihn, da der Bauer d7 der Dame das " +
      "Zurückschlagen auf d5 versperrt und nichts sonst das Feld deckt.",
  },
};
