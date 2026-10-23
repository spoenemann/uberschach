import type { OpeningTexts } from "../book.ts";

// German prose for g3-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.g3 d5 2.Bg2": {
    strategy:
      "Vollendet das Fianchetto: Der Läufer wirkt auf d5 und entlang der langen Diagonale in " +
      "Richtung b7, und nach Sf3 kann Weiß rasch rochieren. Von hier aus wählt Weiß zwischen " +
      "einem Aufbau des Königsindischen Angriffs mit d3, Sbd2 und e4 oder c4, das d5 nach Art " +
      "der Katalanischen Eröffnung oder der Réti-Eröffnung angreift. Der Preis ist das " +
      "Zentrum, das Schwarz mit ...Sf6, ...c5 oder ...e5 besetzen kann und das Weiß später " +
      "angreifen muss.",
  },

  "1.g3 d5 2.Nf3": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, wo er d4 und e5 kontrolliert, " +
      "sodass 2...e5? nach 3.Sxe5 einen Bauern verliert. Es folgen Lg2 und O-O, danach d3, " +
      "Sbd2 und e4 für einen Königsindischen Angriff oder c4 für eine Struktur der Réti- oder " +
      "Katalanischen Eröffnung. Schwarz kann sich mit ...Sf6, ...c5 oder ...c6 nebst ...Lg4 " +
      "oder ...Lf5 entwickeln und behält den größeren Anteil am Zentrum.",
  },

  "1.g3 d5 2.d4": {
    strategy:
      "Besetzt sofort das Zentrum und führt in ein Damenbauernspiel, in dem g3 bereits " +
      "gespielt ist; Lg2, Sf3 und c4 folgen nach Art der Katalanischen Eröffnung. Der Zug ist " +
      "solide, aber langsam: d5 wird noch nicht angegriffen, sodass Schwarz sich mit ...Sf6, " +
      "...Lf5 und ...e6 oder ...c5 problemlos entwickeln kann.",
  },

  "1.g3 d5 2.c4": {
    strategy:
      "Greift d5 von der Flanke an; Lg2 und Sc3 folgen. Nach 2...dxc4 gewinnt Weiß den Bauern " +
      "mit Da4+ und Dxc4 zurück, während 2...d4 Schwarz Raum verschafft. Der Zug ist solide, " +
      "wird aber selten gespielt, da der Bauer d5 angreift, bevor der Läufer auf g2 auf der " +
      "langen Diagonale mitwirken kann.",
  },

  "1.g3 d5 2.d3": {
    strategy:
      "Unterstützt ein späteres e4 und hält Lg2, Sf3 und Sbd2 in Reserve, mit Kurs auf einen " +
      "Aufbau des Königsindischen Angriffs. Der Zug ist solide und flexibel, aber passiv: " +
      "Schwarz besetzt das Zentrum mit ...e5 und ...Sf6 oder ...c5 und begegnet e4 mit " +
      "gleichen Chancen.",
  },

  "1.g3 d5 2.b3": {
    strategy:
      "Bereitet Lb2 vor, sodass in einem Doppelfianchetto beide Läufer auf den langen " +
      "Diagonalen wirken; Lg2 und Sf3 folgen. Der Zug ist solide, aber langsam: Schwarz kann " +
      "mit ...e5 und ...Sf6 Raum gewinnen, während Weiß noch nichts gegen d5 unternimmt.",
  },

  "1.g3 d5 2.Nc3": {
    strategy:
      "Entwickelt eine Figur, zielt auf d5 und bereitet e4 vor, verstellt aber den c-Bauern " +
      "und lädt zu 2...d4 ein. Der Springer muss dann erneut ziehen, nach e4 oder b5, wo ihn " +
      "...Sf6 oder ...f5 beziehungsweise ...c6 angreifen, sodass Schwarz mit Tempo Raum " +
      "gewinnt.",
  },

  "1.g3 d5 2.f4": {
    strategy:
      "Kontrolliert e5 und strebt einen Aufbau der Bird-Eröffnung mit Sf3, Lg2 und O-O an. " +
      "Der Zug ist solide, lockert aber die Diagonale a7–g1 und das Feld e3, und Schwarz " +
      "entwickelt sich bequem mit ...Sf6, ...g6 und ...Lg7 oder mit ...c5 und ...Sc6.",
  },

  "1.g3 d5 2.a3": {
    strategy:
      "Verwendet ein Tempo auf einen Flankenzug, der nur ein späteres b4 vorbereitet. Weder " +
      "im Zentrum noch in der Entwicklung verbessert sich Weiß, und Schwarz besetzt mit ...e5 " +
      "und ...Sf6 ungehindert das Zentrum.",
  },

  "1.g3 d5 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel, trägt aber nichts zum Zentrum oder zur Entwicklung bei, " +
      "und der a-Bauer kann ein späteres b4 nicht mehr stützen. Schwarz baut mit ...e5 und " +
      "...Sf6 auf, und Weiß hat ein Tempo eingebüßt.",
  },

  "1.g3 d5 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 vor, doch der Bauer auf b4 ist ungedeckt: " +
      "...a5 greift ihn sofort an, und sobald der e-Bauer zieht, nimmt ihn auch der Läufer f8 " +
      "ins Visier. Schwarz entwickelt sich mit ...Sf6 und ...e5 oder ...e6, während Weiß sich " +
      "um den Bauern kümmern muss.",
  },

  "1.g3 d5 2.c3": {
    strategy:
      "Unterstützt ein späteres d4, nimmt aber dem Springer b1 das Feld c3, sodass er über d2 " +
      "oder a3 entwickelt werden muss, und unternimmt noch nichts gegen d5. Schwarz " +
      "entwickelt sich frei mit ...Sf6, ...e5 oder ...c5.",
  },

  "1.g3 d5 2.e3": {
    strategy:
      "Öffnet dem Läufer f1 eine Diagonale, obwohl ihm g2 bereits offenstand, und sperrt den " +
      "Läufer c1 ein. Der Bauer kontrolliert d4, unternimmt aber nichts gegen d5, sodass " +
      "Schwarz mit ...e5 Raum gewinnt oder sich mit ...Sf6 und ...c5 entwickelt.",
  },

  "1.g3 d5 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Königsspringer das Feld f3 und öffnet die Diagonale " +
      "a7–g1, was die kurze Rochade unsicherer macht. Schwarz baut mit ...e5 und ...Sf6 das " +
      "Zentrum auf, während sich Weiß nur umständlich entwickeln kann.",
  },

  "1.g3 d5 2.h3": {
    strategy:
      "Verhindert ...Lg4, ist aber ein langsamer Zug, der weder eine Figur entwickelt noch um " +
      "das Zentrum kämpft. Schwarz besetzt mit ...e5 und ...Sf6 das Zentrum und hat das " +
      "leichtere Spiel.",
  },

  "1.g3 d5 2.h4": {
    strategy:
      "Leitet mit Blick auf h5 einen Bauernvorstoß am Königsflügel ein, doch es gibt noch " +
      "nichts anzugreifen: Der Zug nimmt dem Bauern g3 die Stütze des h-Bauern und " +
      "vernachlässigt das Zentrum. Schwarz antwortet mit ...h5 oder baut einfach mit ...Sf6 " +
      "und ...e5 auf.",
  },

  "1.g3 d5 2.Na3": {
    strategy:
      "Strebt nach b5, doch ...c6 nimmt dem Springer dieses Feld, und der Bauer d5 " +
      "kontrolliert bereits c4, sodass er kaum nützliche Felder hat. Er verlässt b1 in " +
      "Richtung Rand, verstellt den a-Bauern und tut nichts für das Zentrum.",
  },

  "1.g3 d5 2.Bh3": {
    strategy:
      "Bietet nach 2...Lxh3 3.Sxh3 den Läufertausch an, der das Fianchetto aufgibt, den " +
      "Springer an den Rand stellt und die lange Diagonale sowie die weißen Felder schwächt. " +
      "Schwarz kann den Zug auch ignorieren und mit ...e5 und ...Sf6 aufbauen.",
  },

  "1.g3 d5 2.Nh3": {
    strategy:
      "Hält g2 für den Läufer frei und strebt nach f4, um Druck auf d5 auszuüben, doch 2...e5 " +
      "kontrolliert f4 und lässt den Springer am Rand ohne gutes Feld zurück. Schwarz " +
      "entwickelt sich frei mit ...Sf6 und ...Sc6, während Weiß den Springer erst wieder ins " +
      "Spiel bringen muss.",
  },

  "1.g3 d5 2.e4": {
    strategy:
      "Opfert den e-Bauern im Vertrauen auf das Fianchetto, doch nach 2...dxe4 3.Lg2 " +
      "behauptet Schwarz den Mehrbauern mit ...Sf6 oder ...f5. Der Entwicklungsvorsprung von " +
      "Weiß ist zu gering, um dafür zu entschädigen.",
  },

  "1.g3 d5 2.g4": {
    strategy:
      "Stellt den Bauern ein: 2...Lxg4 gewinnt ihn, weil der Bauer e2 der Dame den Weg " +
      "versperrt und nichts g4 deckt. Weiß hat dafür keinen Entwicklungsvorsprung, und 3.h3 " +
      "treibt den Läufer nur auf ein gutes Feld.",
  },

  "1.g3 d5": {
    background:
      "Die häufigste Antwort auf 1.g3: In jeder der fünf Partiedatenbanken, die die " +
      "Eröffnungstheorie bei Wikibooks vergleicht, wird 1...d5 in rund 28 bis 37 Prozent der " +
      "Partien gespielt.",
  },
};
