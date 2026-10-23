import type { OpeningTexts } from "../book.ts";

// German prose for b3-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.b3 Nf6 2.Bb2": {
    strategy:
      "Stellt den Läufer sofort auf die lange Diagonale, wo er auf e5 und den Springer f6 " +
      "wirkt und, sobald der Springer zieht, auch auf g7 und h8. Schwarz kann die Diagonale " +
      "mit ...g6 und ...Lg7 streitig machen, doch 2...g6 erlaubt 3.e4, weil 3...Sxe4 den Turm " +
      "durch Lxh8 verliert. Andernfalls baut Schwarz mit ...e6 und ...d5 oder ...b6 auf, und " +
      "Weiß setzt mit e3, Sf3 und c4 oder d4 fort.",
  },

  "1.b3 Nf6 2.e3": {
    strategy:
      "Öffnet die Diagonale des Läufers f1 und unterstützt ein späteres d4, wobei Lb2, Sf3 " +
      "und Le2 oder Ld3 in beliebiger Reihenfolge möglich bleiben. Oft geht der Zug in die " +
      "Varianten mit 2.Lb2 über, etwa gegen ...d5 und ...e6 oder gegen ...e5 und ...Sc6. Der " +
      "Preis ist eine frühe Festlegung: Ein späteres e4 kostet nun zwei Züge, und Schwarz " +
      "wählt seinen Aufbau zuerst.",
  },

  "1.b3 Nf6 2.Nf3": {
    strategy:
      "Entwickelt den Springer, überwacht e5 und hält c4, d4 und e3 offen, mit Lb2 als " +
      "Fortsetzung. Da 2...e5 durch Sxe5 einen Bauern verlöre, baut Schwarz stattdessen mit " +
      "...d5, ...e6 oder ...b6 auf. Schwarz kann auch ungestört mit ...g6 und ...Lg7 " +
      "fianchettieren: Ohne den Läufer auf b2 verliert e4 einfach einen Bauern durch ...Sxe4.",
  },

  "1.b3 Nf6 2.c4": {
    strategy:
      "Stellt den c-Bauern, gedeckt von b3, nach c4, wo er d5 kontrolliert, mit Lb2, Sc3 und " +
      "Sf3 als Fortsetzung in englischen Aufbauten. Solide, aber langsam: Noch steht kein " +
      "Bauer im Zentrum, sodass Schwarz es mit ...e5 oder mit ...e6 und ...d5 beanspruchen " +
      "kann.",
  },

  "1.b3 Nf6 2.d4": {
    strategy:
      "Besetzt das Zentrum mit einem Bauern, doch nach Lb2 verstellt der Bauer d4 die " +
      "Diagonale des Läufers, sodass dieser vor allem d4 deckt, bis sich das Zentrum öffnet. " +
      "Ohne einen Bauern auf c4 kann Schwarz mit ...d5 Raum gewinnen oder mit ...c5 gegen d4 " +
      "vorgehen und entwickelt sich bequem.",
  },

  "1.b3 Nf6 2.g3": {
    strategy:
      "Bereitet Lg2 für ein Doppelfianchetto vor, in dem beide Läufer über die langen " +
      "Diagonalen auf das Zentrum zielen. Der Aufbau ist solide und leicht zu spielen, aber " +
      "langsam: Schwarz kann mit ...d5 und ...e5 oder ...c5 Raum gewinnen, während Weiß seine " +
      "Entwicklung abschließt.",
  },

  "1.b3 Nf6 2.d3": {
    strategy:
      "Unterstützt ein späteres e4 und hält Lb2, Sd2 und Sf3 für einen bescheidenen Aufbau " +
      "offen. Mit dem Bauern auf d3 kostet d4 nun einen zweiten Zug, sodass Schwarz mit ...d5 " +
      "und ...e5 das Zentrum fast ungehindert besetzen kann. Solide, aber passiv.",
  },

  "1.b3 Nf6 2.Nc3": {
    strategy:
      "Entwickelt einen Springer, der e4 und d5 überwacht, und bereitet e4 vor. Er verstellt " +
      "den c-Bauern, sodass Aufbauten mit c4 vorerst ausscheiden, und nach ...d5 und Lb2 " +
      "gewinnt der Vorstoß ...d4 mit Tempo gegen den Springer Raum. Spielbar, aber es gibt " +
      "keinen Grund, ihn Lb2 vorzuziehen.",
  },

  "1.b3 Nf6 2.a3": {
    strategy:
      "Hält einen schwarzen Läufer von b4 fern und bereitet b4 vor, verbraucht aber ein Tempo " +
      "für einen Randbauern, der nichts für das Zentrum oder die Entwicklung tut. Schwarz " +
      "gewinnt in aller Ruhe mit ...d5 und ...e6 oder ...e5 Raum.",
  },

  "1.b3 Nf6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und verhindert ...b5, verbraucht aber ein Tempo für einen " +
      "Randbauern und schwächt das Feld b4. Zentrum und Entwicklung bleiben unberührt, sodass " +
      "Schwarz mit ...d5 und ...e6 aufbaut.",
  },

  "1.b3 Nf6 2.c3": {
    strategy:
      "Bereitet d4 vor, verstellt aber die lange Diagonale, die b3 öffnen sollte, sodass ein " +
      "Läufer auf b2 gegen den eigenen Bauern stieße. Außerdem nimmt der Zug dem Springer das " +
      "Feld c3 und entwickelt nichts. Schwarz beansprucht mit ...d5 und ...e5 das Zentrum.",
  },

  "1.b3 Nf6 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer das Feld f3, schwächt die Diagonale e1–h4 und " +
      "entwickelt nichts. Schwarz kann mit ...e5 und ...d5 das Zentrum besetzen und gewinnt " +
      "einen Entwicklungsvorsprung.",
  },

  "1.b3 Nf6 2.f4": {
    strategy:
      "Kontrolliert e5 und strebt einen Aufbau nach Art der Bird-Eröffnung an, verwendet aber " +
      "einen Zug auf den f-Bauern, der nichts entwickelt und e3 sowie die Diagonale e1–h4 " +
      "schwächt. Schwarz entwickelt sich mit ...d5, ...e6 oder ...g6.",
  },

  "1.b3 Nf6 2.h3": {
    strategy:
      "Nimmt einem schwarzen Springer oder Läufer das Feld g4, verbraucht aber ein Tempo für " +
      "einen Randbauernzug, den die Stellung noch nicht verlangt. Schwarz besetzt mit ...d5 " +
      "und ...e6 oder ...e5 das Zentrum, während Weiß noch unentwickelt ist.",
  },

  "1.b3 Nf6 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel, entwickelt aber nichts und lockert den Königsflügel ohne " +
      "konkreten Gewinn. Schwarz besetzt mit ...d5 und ...e6 oder ...e5 das Zentrum und liegt " +
      "in der Entwicklung einfach vorn.",
  },

  "1.b3 Nf6 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, mit Blick auf b5 und c4, lässt ihn aber fern vom " +
      "Zentrum und blockiert den a-Bauern. Schwarz besetzt das Zentrum mit ...d5, das auch c4 " +
      "überwacht, und ...e6, während der Springer außer Spiel bleibt.",
  },

  "1.b3 Nf6 2.Nh3": {
    strategy:
      "Strebt über den Rand nach f4, tut aber unterdessen nichts für das Zentrum. Sobald " +
      "...d5 den Läufer c8 öffnet, würde ...Lxh3 nebst gxh3 die weißen Bauern verdoppeln; Sf3 " +
      "war das natürliche Feld.",
  },

  "1.b3 Nf6 2.Ba3": {
    strategy:
      "Zielt auf f8, doch der Bauer e7 verstellt die Diagonale, und der Läufer verlässt die " +
      "lange Diagonale, die b3 vorbereitet hat. Schwarz entwickelt sich mit ...d5 und ...e6, " +
      "und der Läufer auf a3 erreicht nicht mehr als einen möglichen Tausch der " +
      "schwarzfeldrigen Läufer.",
  },

  "1.b3 Nf6 2.b4": {
    strategy:
      "Verwendet einen zweiten Zug auf den b-Bauern, um b4 zu erreichen, wo ihn nichts deckt: " +
      "Nach 2...e6 greift ihn der Läufer f8 an, sodass Weiß ein weiteres Tempo für a3, c3 " +
      "oder b5 aufwenden oder ihn nach ...Lxb4 hergeben muss. Es ist die Stellung nach 1.b4 " +
      "Sf6, aber mit Schwarz am Zug.",
  },

  "1.b3 Nf6 2.g4": {
    strategy:
      "Stellt einen Bauern ein: 2...Sxg4 gewinnt ihn, weil der Bauer e2 die Diagonale der " +
      "Dame versperrt und sonst nichts g4 deckt. Zudem ist der Königsflügel gelockert.",
  },

  "1.b3 Nf6 2.e4": {
    strategy:
      "Lässt den e-Bauern ungedeckt, sodass 2...Sxe4 ihn gewinnt. Nach 3.Lb2 zielt der Läufer " +
      "auf g7, doch der Läufer f8 deckt den Bauern, und Schwarz behält mit ...d5 oder ...Sf6 " +
      "den Mehrbauern in einer gesunden Stellung.",
  },

  "1.b3 Nf6": {
    name: "Larsen-Eröffnung: Indische Variante",
    background:
      "Die dritthäufigste Antwort auf 1.b3: Sie kommt in etwa 15 Prozent aller Partien vor, " +
      "bei einer Spielstärke von 2500 in etwa 20 Prozent.",
  },

  "1.b3 Nf6 2.Bb2 e6": {
    strategy:
      "Öffnet die Diagonale des Läufers f8 und lässt die Wahl zwischen einem klassischen " +
      "Aufbau mit ...d5 und ...Le7, einem damenindischen Aufbau mit ...b6 und ...Lb7 und dem " +
      "Hebel ...c5. Nun deckt auch die Dame den Springer f6, sodass Schwarz Lxf6 mit ...Dxf6 " +
      "beantworten kann, ohne seine Bauern zu beschädigen. Weiß setzt meist mit e3 und Sf3 " +
      "fort, danach folgt c4 oder d4. Der Preis ist ein Läufer c8, der eingesperrt bleibt, " +
      "bis die Bauernstruktur geklärt ist.",
  },

  "1.b3 Nf6 2.Bb2 d5": {
    strategy:
      "Besetzt das Zentrum mit einem Bauern und erschwert zusammen mit dem Springer f6 den " +
      "weißen Vorstoß e4. Die Stellung ist dieselbe wie nach 1...d5 2.Lb2 Sf6: Weiß setzt " +
      "meist mit e3 und Sf3 fort, während Schwarz mit ...e6, ...Le7 und ...O-O aufbaut oder " +
      "zuerst den Läufer c8 nach f5 entwickelt. Der Läufer b2 beißt dann auf ein festes " +
      "Bauernzentrum, das Weiß später mit c4 angreift.",
  },

  "1.b3 Nf6 2.Bb2 g6": {
    strategy:
      "Bereitet ...Lg7 vor, das sich dem Läufer b2 auf der langen Diagonale entgegenstellt, " +
      "es folgen ...O-O und ...d6 oder ...d5. Bis der Läufer dort steht, befindet sich der " +
      "Turm h8 hinter dem Springer f6 auf dieser Diagonale: Nach 3.e4 verliert 3...Sxe4 den " +
      "Turm durch 4.Lxh8, daher antwortet Schwarz meist mit 3...d6 oder 3...Lg7. Weiß kann " +
      "auch sofort mit 3.Lxf6 exf6 tauschen und gibt dabei das Läuferpaar für die schwarzen " +
      "Doppelbauern auf der f-Linie her.",
  },

  "1.b3 Nf6 2.Bb2 c5": {
    strategy:
      "Kämpft sofort um d4 und lässt die Wahl zwischen ...d5, ...d6 und einem " +
      "Königsfianchetto offen. Schwarz kann mit ...e6 und ...Sc6 oder mit ...d5 fortsetzen. " +
      "Weiß antwortet meist mit e3 und Sf3; mit c4 entstehen stattdessen Strukturen der " +
      "Symmetrischen Variante der Englischen Eröffnung.",
  },

  "1.b3 Nf6 2.Bb2 b6": {
    strategy:
      "Spiegelt den weißen Aufbau im Stil der Damenindischen Verteidigung: ...Lb7 besetzt die " +
      "andere lange Diagonale und überwacht e4, es folgen ...e6 und ...Le7. Der Aufbau ist " +
      "solide, überlässt aber Weiß das Zentrum, der mit e3, Sf3 und c4 aufbaut. Spielbar, " +
      "doch Schwarz hat wenig aktives Gegenspiel und reagiert meist auf den weißen Plan.",
  },

  "1.b3 Nf6 2.Bb2 Nc6": {
    strategy:
      "Entwickelt eine Figur und bereitet ...e5 vor: Nach 3.e3 e5 entsteht die Stellung nach " +
      "1...e5 2.Lb2 Sc6 3.e3 Sf6. Doch 3.Sf3 durchkreuzt den Plan, da ...e5 dann einen Bauern " +
      "durch Sxe5 verlöre. Der Springer verstellt zudem den c-Bauern, sodass Schwarz sich " +
      "früh festlegt, während Weiß den Aufbau wählt.",
  },

  "1.b3 Nf6 2.Bb2 d6": {
    strategy:
      "Bereitet ...e5 vor, das der Bauer d6 dann gegen den Läufer b2 deckt, oder einen " +
      "königsindischen Aufbau mit ...g6 und ...Lg7. Der Zug befreit den Läufer c8, kämpft " +
      "aber nicht wie ...d5 um e4, sodass Weiß sich ungestört mit e3, g3 oder c4 entwickelt.",
  },

  "1.b3 Nf6 2.Bb2 c6": {
    strategy:
      "Bereitet ...d5 mit einem Bauernpaar wie in der Slawischen Verteidigung vor und hält " +
      "den Läufer c8 für ...Lf5 frei, sobald der d-Bauer gezogen hat. Der Zug ist solide, " +
      "aber langsamer als sofortiges ...d5 und nimmt dem Springer b8 das Feld c6, sodass Weiß " +
      "Zeit für e3, Sf3 und c4 erhält.",
  },

  "1.b3 Nf6 2.Bb2 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 ins Auge fasst, aber nichts für das " +
      "Zentrum tut. Sobald e3 die Diagonale des Läufers f1 öffnet, würde Lxa6 bxa6 die " +
      "schwarzen a-Bauern verdoppeln.",
  },

  "1.b3 Nf6 2.Bb2 Rg8": {
    strategy:
      "Zieht den Turm ohne Grund von h8 weg, denn der Bauer g7 schirmt ihn bereits gegen den " +
      "Läufer b2 ab. Der Zug kostet ein Tempo und gibt die kurze Rochade auf, während Weiß " +
      "freie Hand für e3, Sf3 und c4 hat.",
  },

  "1.b3 Nf6 2.Bb2 a6": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern, der weder das Zentrum besetzt noch eine " +
      "Figur entwickelt. Weiß setzt mit e3, Sf3 und c4 fort und erlangt einen " +
      "Entwicklungsvorsprung.",
  },

  "1.b3 Nf6 2.Bb2 a5": {
    strategy:
      "Zielt auf ...a4, um b3 zu untergraben, verbraucht aber ein Tempo für einen Randbauern " +
      "und schwächt b5 und b6. Weiß ignoriert den Zug und entwickelt sich mit e3 und Sf3.",
  },

  "1.b3 Nf6 2.Bb2 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel, doch der Bauer hängt in der Luft: 3.e3 droht Lxb5, und " +
      "3.a4 untergräbt ihn zusätzlich. Schwarz muss Züge für ...a6 oder ...c6 aufwenden, und " +
      "die Felder c5 und c6 bleiben schwach.",
  },

  "1.b3 Nf6 2.Bb2 g5": {
    strategy:
      "Gewinnt Raum am Königsflügel, lockert aber f5 und h5 und öffnet die lange Diagonale in " +
      "Richtung des Turms h8. 3.h4 untergräbt den Bauern: Nach 3...gxh4 öffnet sich die " +
      "h-Linie für Txh4, und nach 3...g4 ist der Bauer zu weit vorgerückt.",
  },

  "1.b3 Nf6 2.Bb2 h6": {
    strategy:
      "Nimmt einem weißen Läufer oder Springer das Feld g5, doch keine Figur strebt dorthin. " +
      "Das Tempo tut nichts für Zentrum oder Entwicklung, und Weiß erhält e3, Sf3 und c4 " +
      "umsonst.",
  },

  "1.b3 Nf6 2.Bb2 h5": {
    strategy:
      "Rückt am Flügel vor, um ...Sg4 oder ...h4 vorzubereiten, schwächt aber g5 und " +
      "entwickelt nichts. Weiß spielt e3, Sf3 und c4, und der Vorstoß am Königsflügel hat " +
      "kein Ziel.",
  },

  "1.b3 Nf6 2.Bb2 Ng8": {
    strategy:
      "Macht den Springerzug rückgängig, sodass Weiß zwei nützliche Züge, b3 und Lb2, gemacht " +
      "hat und Schwarz keinen. Weiß setzt mit e3, Sf3 und c4 oder e4 fort, gegen eine " +
      "Stellung, in der Schwarz nichts entwickelt hat.",
  },

  "1.b3 Nf6 2.Bb2 Ng4": {
    strategy:
      "Greift f2 und h2 an, doch nichts unterstützt den Springer: 3.e3 öffnet der Dame die " +
      "Diagonale nach g4, und 3.h3 vertreibt ihn sofort. ...Se5 scheitert an Lxe5, also kehrt " +
      "der Springer nach f6 oder h6 zurück, und Weiß hat Zeit gewonnen.",
  },

  "1.b3 Nf6 2.Bb2 Nh5": {
    strategy:
      "Zielt auf f4, stellt den Springer aber an den Rand. 3.e3 nimmt ihm f4 und lässt die " +
      "Dame h5 angreifen, sodass der Springer nach f6 zurück muss, denn ...g6 würde den Turm " +
      "h8 durch Lxh8 einstellen.",
  },

  "1.b3 Nf6 2.Bb2 Ne4": {
    strategy:
      "Zentralisiert den Springer, doch nichts stützt ihn, und 3.d3 greift ihn sofort an. Der " +
      "Rückzug nach f6 kostet zwei Tempi, und 3...Sc5 erlaubt 4.d4 mit Tempo, sodass Weiß " +
      "Zeit für e4 oder Sf3 gewinnt.",
  },

  "1.b3 Nf6 2.Bb2 Nd5": {
    strategy:
      "Zentralisiert den Springer, doch 3.e4 greift ihn sofort an und besetzt mit Tempo das " +
      "Zentrum. Nach 3...Sf6 vertreibt ihn 4.e5 erneut, und nach 3...Sb6 4.d4 hat Weiß ein " +
      "breites Bauernzentrum, während Schwarz drei Züge für einen Springer aufgewendet hat.",
  },

  "1.b3 Nf6 2.Bb2 e5": {
    strategy:
      "Stellt den Bauern auf ein Feld, das der Läufer b2 bereits angreift und das nichts " +
      "deckt, sodass 3.Lxe5 ihn gewinnt. Nach 3...Sc6 4.Lb2 hat Schwarz für den Bauern nur " +
      "einen kleinen Entwicklungsvorsprung.",
  },

  "1.b3 Nf6 2.e3 d5": {
    strategy:
      "Besetzt sofort das Zentrum und verhindert vorerst, dass Weiß den e-Bauern nach e4 " +
      "vorrückt. Schwarz setzt mit …e6 und …c5 fort oder stellt den weißfeldrigen Läufer nach " +
      "f5, bevor …e6 die Kette schließt, während Weiß sich mit Lb2, Sf3 und Le2 oder Lb5 " +
      "entwickelt und c4 als Hebel gegen d5 bereithält. Die Partie geht weiter wie nach 1.b3 " +
      "d5 2.e3 Sf6.",
  },

  "1.b3 Nf6 2.e3 e5": {
    strategy:
      "Besetzt das Zentrum und lädt zu 3.Lb2 ein, das den Bauern angreift; Schwarz deckt ihn " +
      "mit …Sc6 oder, bescheidener, mit …d6. Nach 3.Lb2 Sc6 ist die Stellung dieselbe wie " +
      "nach 1.b3 e5 2.Lb2 Sc6 3.e3 Sf6, wo Weiß mit Lb5 den Springer angeht, der e5 deckt, " +
      "und mit f4 gegen e5 vorgehen oder mit c4 …d5 erschweren kann. Der Preis ist, dass e5 " +
      "lange Unterstützung braucht.",
  },

  "1.b3 Nf6 2.e3 g6": {
    strategy:
      "Bereitet …Lg7 vor, um Lb2 auf der langen Diagonale zu begegnen, gefolgt von …O-O und " +
      "…d6 oder …d5. Der Aufbau ist solide und flexibel und hält …c5 offen. Bis Schwarz " +
      "rochiert hat, ist der Läufer g7 ungedeckt, sodass ein Abzug des Springers f6 von der " +
      "langen Diagonale Lxg7 mit Figurengewinn erlaubt.",
  },

  "1.b3 Nf6 2.e3 e6": {
    strategy:
      "Öffnet den Läufer f8 und lässt die Wahl des Aufbaus offen. Nach Lb2 kann Schwarz mit " +
      "…d5, …Le7 und …O-O das klassische Zentrum errichten oder mit …b6 und …Lb7 nach " +
      "damenindischem Muster fianchettieren. Die Stellung bleibt solide, doch der Bauer e6 " +
      "sperrt den Läufer c8 ein, wenn dieser nicht nach b7 geht.",
  },

  "1.b3 Nf6 2.e3 Nc6": {
    strategy:
      "Entwickelt eine Figur Richtung Zentrum und bereitet …e5 vor, womit die Partie in die " +
      "Varianten von 1…e5 mit …Sc6 und …Sf6 übergehen kann. Der Springer verstellt den " +
      "c-Bauern, und Lb5 kann ihn gegen einen Doppelbauern auf der c-Linie tauschen; sobald " +
      "der d-Bauer gezogen hat, ist es eine Fesselung. Korrekt, aber weniger flexibel als …e6 " +
      "oder …d5.",
  },

  "1.b3 Nf6 2.e3 b6": {
    strategy:
      "Spiegelt den weißen Zug b3: …Lb7 macht Weiß die lange Diagonale streitig, und …e6 und " +
      "…Le7 folgen wie in der Damenindischen Verteidigung. Die Struktur ist solide, doch " +
      "Schwarz beansprucht keinen Raum im Zentrum und reagiert meist nur auf den weißen " +
      "Aufbau. Korrekt, aber weniger ehrgeizig als …d5 oder …e5.",
  },

  "1.b3 Nf6 2.e3 c6": {
    strategy:
      "Bereitet …d5 mit einem slawischen Bauernpaar vor und hält den Läufer c8 für …Lf5 frei. " +
      "Der Zug ist solide, aber langsam und nimmt dem Springer b8 das Feld c6, sodass Weiß " +
      "Zeit für Lb2 und Sf3 gewinnt. Korrekt, aber weniger aktiv als sofort …d5.",
  },

  "1.b3 Nf6 2.e3 c5": {
    strategy:
      "Bekämpft d4 vom Flügel aus und hält …Sc6, …e6, …d5 und …g6 offen. Nach Lb2 entwickelt " +
      "sich Schwarz mit …Sc6 und …e6 oder mit …g6 und …Lg7, während Weiß zwischen Sf3 mit " +
      "Le2, Lb5 gegen den Springer c6 und c4 wählt. Korrekt, aber selten gewählt; in dieser " +
      "Stellung sind …d5 und …g6 die Hauptantworten.",
  },

  "1.b3 Nf6 2.e3 d6": {
    strategy:
      "Bereitet …e5 mit …Sbd7 für einen kompakten Aufbau mit festem Griff auf e5 vor, oder " +
      "…g6 und …Lg7 für ein Fianchetto. Korrekt, aber bescheiden: Anders als …d5 kämpft der " +
      "Bauer nicht um e4, und Weiß entwickelt sich ungestört mit Lb2 und Sf3.",
  },

  "1.b3 Nf6 2.e3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, mit Blick auf b4 oder c5. Lxa6 bxa6 verdoppelt sofort " +
      "die a-Bauern, und von a6 aus tut der Springer wenig für das Zentrum.",
  },

  "1.b3 Nf6 2.e3 Rg8": {
    strategy:
      "Gibt die kurze Rochade endgültig auf und stellt den Turm auf eine geschlossene Linie, " +
      "ohne etwas für Zentrum oder Entwicklung zu tun. Weiß setzt mit Lb2 und Sf3 fort, " +
      "während der schwarze König sein natürliches Quartier verloren hat.",
  },

  "1.b3 Nf6 2.e3 a6": {
    strategy:
      "Verwendet ein Tempo auf einen Flügelbauern, um …b5 vorzubereiten, kämpft aber nicht um " +
      "das Zentrum und entwickelt keine Figur. Weiß setzt mit Lb2 und Sf3 fort und führt in " +
      "der Entwicklung.",
  },

  "1.b3 Nf6 2.e3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und kann mit …a4 fortgesetzt werden, entwickelt aber " +
      "nichts und schwächt b5 und b6. Weiß setzt mit Lb2 und Sf3 fort, während der " +
      "Flügelbauer nichts für das Zentrum tut.",
  },

  "1.b3 Nf6 2.e3 g5": {
    strategy:
      "Schwächt f5, h5 und die lange Diagonale, ohne eine Figur zu entwickeln. Nach Lb2 kann " +
      "der Springer f6 nicht ziehen, ohne den Turm h8 durch Lxh8 zu verlieren, und h4 greift " +
      "den Bauern g5 sofort an.",
  },

  "1.b3 Nf6 2.e3 h6": {
    strategy:
      "Verwendet ein Tempo auf einen Flügelbauern, der g5 deckt, ein Feld, das der Läufer c1 " +
      "hinter den Bauern d2 und e3 nicht erreichen kann. Für das Zentrum tut der Zug nichts, " +
      "und Weiß entwickelt sich ungestört mit Lb2.",
  },

  "1.b3 Nf6 2.e3 h5": {
    strategy:
      "Rückt den Randbauern ohne Ziel vor, verliert ein Tempo und schwächt g5 und g6, ohne im " +
      "Zentrum etwas zu gewinnen. Weiß entwickelt sich einfach mit Lb2 und Sf3.",
  },

  "1.b3 Nf6 2.e3 Ng8": {
    strategy:
      "Zieht die einzige entwickelte Figur zurück und macht den einzigen nützlichen Zug von " +
      "Schwarz rückgängig. Weiß hat mit b3 und e3 zwei nützliche Züge gemacht, Schwarz " +
      "keinen; Weiß setzt in aller Ruhe mit Lb2 und Sf3 fort.",
  },

  "1.b3 Nf6 2.e3 Ne4": {
    strategy:
      "Zentralisiert den Springer zu früh. d3 vertreibt ihn sofort, und nach …Sf6 oder …Sc5 " +
      "hat Weiß ein Tempo gewonnen; der Rückzug …Sc5 läuft zudem in b4 hinein.",
  },

  "1.b3 Nf6 2.e3 Nd5": {
    strategy:
      "Stellt den Springer dorthin, wo c4 ihn mit Tempo angreift. Nach 3.c4 Sb6 hat Weiß mit " +
      "Tempogewinn Raum genommen und setzt mit Lb2 fort, während Schwarz drei Züge für einen " +
      "einzigen Springer verbraucht hat.",
  },

  "1.b3 Nf6 2.e3 b5": {
    strategy:
      "Stellt den Bauern ein, Lxb5 gewinnt ihn: Nichts deckt ihn, und der Läufer f1 erreicht " +
      "b5 über die Diagonale, die e3 geöffnet hat. …Lb7 greift danach g2 an, doch Sf3 " +
      "verstellt die Diagonale, und Weiß behält einen glatten Mehrbauern.",
  },

  "1.b3 Nf6 2.e3 Ng4": {
    strategy:
      "Stellt den Springer ein: Nichts deckt g4, und Dxg4 gewinnt ihn über die Diagonale, die " +
      "e3 geöffnet hat. Schwarz kann nicht zurückschlagen, weil der Bauer d7 den Läufer c8 " +
      "einsperrt.",
  },

  "1.b3 Nf6 2.e3 Nh5": {
    strategy:
      "Stellt den Springer ein, Dxh5 gewinnt ihn über die Diagonale, die e3 geöffnet hat, " +
      "denn nichts deckt h5. Schwarz kann die Dame mit …g6 vertreiben, gewinnt die Figur aber " +
      "nicht zurück.",
  },
};
