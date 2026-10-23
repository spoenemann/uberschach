import type { OpeningTexts } from "../book.ts";

// German prose for b3-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.b3 Nf6 2.Bb2": {
    strategy:
      "Vollendet sofort das Fianchetto: Der Läufer zielt auf e5 und, durch den Springer f6 " +
      "hindurch, auf g7 und h8. Weiß überlässt Schwarz vorerst das Zentrum und kämpft aus der " +
      "Ferne über die lange Diagonale darum. Der Preis: Schwarz kann mit einem eigenen " +
      "Fianchetto nachziehen.",
  },

  "1.b3 Nf6 2.e3": {
    strategy:
      "Öffnet die Diagonale des Läufers f1 und bereitet d4 vor, wobei die Reihenfolge der " +
      "übrigen Entwicklungszüge flexibel bleibt. Es ist ein solider, geduldiger Aufbau, der oft " +
      "in dieselben Stellungen wie nach Lb2 führt. Der Preis: Ein späteres e4 kostet nun zwei " +
      "Züge, und Schwarz wählt seinen Aufbau zuerst.",
  },

  "1.b3 Nf6 2.Nf3": {
    strategy:
      "Entwickelt den Springer, überwacht e5 und hält c4, d4 und e3 für den nächsten Bauernzug " +
      "offen. Schwarz kann das Feld e5 nicht mit einem Bauern besetzen, weil dieser verloren " +
      "ginge. Der Preis: Ohne den Läufer auf b2 hat Weiß weniger Einfluss auf e4, und Schwarz " +
      "kann seinerseits fianchettieren.",
  },

  "1.b3 Nf6 2.c4": {
    strategy:
      "Stellt den c-Bauern, gedeckt von b3, nach c4, wo er d5 kontrolliert. Solide, aber " +
      "langsam: Noch steht kein Bauer im Zentrum, sodass Schwarz es sofort beanspruchen kann.",
  },

  "1.b3 Nf6 2.d4": {
    strategy:
      "Besetzt das Zentrum mit einem Bauern, doch der Bauer d4 verstellt die lange Diagonale, " +
      "sodass ein Läufer auf b2 vor allem d4 deckt, bis sich das Zentrum öffnet. Ohne einen " +
      "Bauern auf c4 kann Schwarz sofort Raum gewinnen oder den Bauern d4 angreifen.",
  },

  "1.b3 Nf6 2.g3": {
    strategy:
      "Bereitet Lg2 für ein Doppelfianchetto vor, in dem beide Läufer über die langen Diagonalen " +
      "auf das Zentrum zielen. Solide und leicht zu spielen, aber langsam: Schwarz kann im " +
      "Zentrum Raum gewinnen, während Weiß seine Entwicklung abschließt.",
  },

  "1.b3 Nf6 2.d3": {
    strategy:
      "Unterstützt ein späteres e4 für einen bescheidenen Aufbau. Mit dem Bauern auf d3 kostet " +
      "d4 nun einen zweiten Zug, sodass Schwarz das Zentrum fast ungehindert besetzen kann. " +
      "Solide, aber passiv.",
  },

  "1.b3 Nf6 2.Nc3": {
    strategy:
      "Entwickelt einen Springer, der e4 und d5 überwacht, und bereitet e4 vor. Er verstellt den " +
      "c-Bauern, sodass Aufbauten mit c4 vorerst ausscheiden. Spielbar, aber es gibt keinen " +
      "Grund, ihn Lb2 vorzuziehen.",
  },

  "1.b3 Nf6 2.a3": {
    strategy:
      "Hält einen schwarzen Läufer von b4 fern und bereitet b4 vor, verbraucht aber ein Tempo " +
      "für einen Randbauern, der nichts für das Zentrum oder die Entwicklung tut. Schwarz " +
      "gewinnt in aller Ruhe Raum.",
  },

  "1.b3 Nf6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und verhindert ...b5, verbraucht aber ein Tempo für einen " +
      "Randbauern und schwächt das Feld b4. Zentrum und Entwicklung bleiben unberührt.",
  },

  "1.b3 Nf6 2.c3": {
    strategy:
      "Bereitet d4 vor, verstellt aber die Diagonale, die b3 öffnen sollte, sodass ein Läufer " +
      "auf b2 gegen den eigenen Bauern stieße. Außerdem nimmt der Zug dem Springer das Feld c3 " +
      "und entwickelt nichts.",
  },

  "1.b3 Nf6 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer das Feld f3, schwächt die Diagonale e1–h4 und " +
      "entwickelt nichts. Schwarz kann das Zentrum besetzen und gewinnt einen " +
      "Entwicklungsvorsprung.",
  },

  "1.b3 Nf6 2.f4": {
    strategy:
      "Kontrolliert e5 und strebt einen Aufbau nach Art der Bird-Eröffnung an, verwendet aber " +
      "einen Zug auf den f-Bauern, der nichts entwickelt und e3 sowie die Diagonale e1–h4 " +
      "schwächt.",
  },

  "1.b3 Nf6 2.h3": {
    strategy:
      "Nimmt einem schwarzen Springer oder Läufer das Feld g4, verbraucht aber ein Tempo für " +
      "einen Randbauernzug, den die Stellung noch nicht verlangt. Schwarz erhält das Zentrum, " +
      "während Weiß noch unentwickelt ist.",
  },

  "1.b3 Nf6 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel, entwickelt aber nichts und lockert den Königsflügel ohne " +
      "konkreten Gewinn. Schwarz besetzt das Zentrum und liegt in der Entwicklung einfach vorn.",
  },

  "1.b3 Nf6 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, mit Blick auf b5 und c4, lässt ihn aber fern vom " +
      "Zentrum und blockiert den a-Bauern. Schwarz besetzt das Zentrum, während der Springer " +
      "außer Spiel bleibt.",
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
      "lange Diagonale, die b3 vorbereitet hat. Er erreicht nicht mehr als einen möglichen " +
      "Tausch der schwarzfeldrigen Läufer.",
  },

  "1.b3 Nf6 2.b4": {
    strategy:
      "Verwendet einen zweiten Zug auf den b-Bauern, um b4 zu erreichen, wo ihn nichts deckt: " +
      "Nach 2...e6 greift ihn der Läufer f8 an, sodass Weiß ein weiteres Tempo aufwenden oder " +
      "ihn hergeben muss. Es ist die Stellung nach 1.b4 Sf6, aber mit Schwarz am Zug.",
  },

  "1.b3 Nf6 2.g4": {
    strategy:
      "Stellt einen Bauern ein: 2...Sxg4 gewinnt ihn, weil der Bauer e2 die Diagonale der " +
      "Dame versperrt und sonst nichts g4 deckt. Zudem ist der Königsflügel gelockert.",
  },

  "1.b3 Nf6 2.e4": {
    strategy:
      "Lässt den e-Bauern ungedeckt, sodass 2...Sxe4 ihn gewinnt. Ein späteres Lb2 würde auf g7 " +
      "zielen, doch der Läufer f8 deckt den Bauern, und Schwarz behält den Mehrbauern in einer " +
      "gesunden Stellung.",
  },

  "1.b3 Nf6": {
    name: "Larsen-Eröffnung: Indische Variante",
    background:
      "Die dritthäufigste Antwort auf 1.b3: Sie kommt in etwa 15 Prozent aller Partien vor, " +
      "bei einer Spielstärke von 2500 in etwa 20 Prozent.",
  },

  "1.b3 Nf6 2.Bb2 e6": {
    strategy:
      "Öffnet die Diagonale des Läufers f8 und hält jeden Aufbau offen. Die Dame deckt nun den " +
      "Springer f6, sodass Schwarz Lxf6 mit ...Dxf6 beantworten kann, ohne seine Bauern zu " +
      "beschädigen. Der Preis ist ein Läufer c8, der eingesperrt bleibt, bis die Bauernstruktur " +
      "geklärt ist.",
  },

  "1.b3 Nf6 2.Bb2 d5": {
    strategy:
      "Besetzt das Zentrum mit einem Bauern und erschwert zusammen mit dem Springer f6 den " +
      "weißen Vorstoß e4. Schwarz erhält ein festes Bauernzentrum, auf das der Läufer b2 beißt, " +
      "und Weiß muss es mit c4 angreifen oder langsam aufbauen.",
  },

  "1.b3 Nf6 2.Bb2 g6": {
    strategy:
      "Bereitet ...Lg7 vor, das sich dem Läufer b2 auf der langen Diagonale entgegenstellt. Bis " +
      "er dort steht, befindet sich der Turm h8 hinter dem Springer f6 auf dieser Diagonale: " +
      "Nach 3.e4 verliert 3...Sxe4 den Turm durch 4.Lxh8, Schwarz muss also aufpassen. Weiß kann " +
      "auch sofort auf f6 tauschen und gibt dabei das Läuferpaar für die schwarzen Doppelbauern " +
      "auf der f-Linie her.",
  },

  "1.b3 Nf6 2.Bb2 c5": {
    strategy:
      "Kämpft sofort um d4 und lässt die Wahl des Aufbaus offen. Spielt Weiß c4, bleibt die " +
      "Stellung symmetrisch; sonst hat Schwarz einen soliden, flexiblen Aufbau mit " +
      "ausgeglichenen Chancen.",
  },

  "1.b3 Nf6 2.Bb2 b6": {
    strategy:
      "Bereitet das Fianchetto des Läufers c8 vor und spiegelt den weißen Aufbau: Er besetzt die " +
      "andere lange Diagonale und überwacht e4. Der Aufbau ist solide, überlässt aber Weiß das " +
      "Zentrum, der es ungestört aufbauen kann. Spielbar, doch Schwarz hat wenig aktives " +
      "Gegenspiel und reagiert meist auf den weißen Plan.",
  },

  "1.b3 Nf6 2.Bb2 Nc6": {
    strategy:
      "Entwickelt eine Figur und bereitet ...e5 vor. Doch 3.Sf3 durchkreuzt den Plan, da ...e5 " +
      "dann einen Bauern durch Sxe5 verlöre. Der Springer verstellt zudem den c-Bauern, sodass " +
      "Schwarz sich früh festlegt, während Weiß den Aufbau wählt.",
  },

  "1.b3 Nf6 2.Bb2 d6": {
    strategy:
      "Bereitet ...e5 vor, das der Bauer d6 dann gegen den Läufer b2 deckt, oder ein Fianchetto " +
      "am Königsflügel. Der Zug befreit den Läufer c8, kämpft aber nicht wie ...d5 um e4, sodass " +
      "Weiß sich ungestört entwickelt.",
  },

  "1.b3 Nf6 2.Bb2 c6": {
    strategy:
      "Bereitet ...d5 mit einem soliden Bauernpaar vor und hält den Läufer c8 frei, sodass er " +
      "sich entwickeln kann, sobald der d-Bauer gezogen hat. Der Zug ist solide, aber langsamer " +
      "als sofortiges ...d5 und nimmt dem Springer b8 das Feld c6, sodass Weiß Zeit erhält, das " +
      "Zentrum aufzubauen.",
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
      "Läufer b2 ab. Der Zug kostet ein Tempo und gibt die kurze Rochade auf, während Weiß im " +
      "Zentrum freie Hand hat.",
  },

  "1.b3 Nf6 2.Bb2 a6": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern, der weder das Zentrum besetzt noch eine Figur " +
      "entwickelt. Weiß entwickelt sich einfach weiter und erlangt einen Vorsprung.",
  },

  "1.b3 Nf6 2.Bb2 a5": {
    strategy:
      "Zielt auf ...a4, um b3 zu untergraben, verbraucht aber ein Tempo für einen Randbauern und " +
      "schwächt b5 und b6. Weiß ignoriert den Zug und entwickelt sich einfach.",
  },

  "1.b3 Nf6 2.Bb2 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel, doch der Bauer hängt in der Luft: 3.e3 droht Lxb5, und 3.a4 " +
      "untergräbt ihn zusätzlich. Schwarz muss Züge für seine Verteidigung aufwenden, und die " +
      "Felder c5 und c6 bleiben schwach.",
  },

  "1.b3 Nf6 2.Bb2 g5": {
    strategy:
      "Gewinnt Raum am Königsflügel, lockert aber f5 und h5 und öffnet die lange Diagonale in " +
      "Richtung des Turms h8. 3.h4 untergräbt den Bauern: Schlägt er, öffnet sich die h-Linie " +
      "für den weißen Turm, sonst ist der Bauer zu weit vorgerückt.",
  },

  "1.b3 Nf6 2.Bb2 h6": {
    strategy:
      "Nimmt einem weißen Läufer oder Springer das Feld g5, doch keine Figur strebt dorthin. Das " +
      "Tempo tut nichts für Zentrum oder Entwicklung, und Weiß baut das Zentrum umsonst auf.",
  },

  "1.b3 Nf6 2.Bb2 h5": {
    strategy:
      "Rückt am Flügel vor, schwächt aber g5 und entwickelt nichts. Weiß entwickelt sich " +
      "einfach, und der Vorstoß am Königsflügel hat kein Ziel.",
  },

  "1.b3 Nf6 2.Bb2 Ng8": {
    strategy:
      "Macht den Springerzug rückgängig, sodass Weiß zwei nützliche Züge, b3 und Lb2, gemacht " +
      "hat und Schwarz keinen. Weiß kann das Zentrum in Ruhe besetzen, gegen eine Stellung, in " +
      "der Schwarz nichts entwickelt hat.",
  },

  "1.b3 Nf6 2.Bb2 Ng4": {
    strategy:
      "Greift f2 und h2 an, doch nichts unterstützt den Springer: 3.e3 öffnet der Dame die " +
      "Diagonale nach g4, und 3.h3 vertreibt ihn sofort. ...Se5 scheitert an Lxe5, der Springer " +
      "muss also zurück, und Weiß hat Zeit gewonnen.",
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
      "Rückzug nach f6 kostet zwei Tempi, und 3...Sc5 erlaubt 4.d4 mit Tempo, sodass Weiß Zeit " +
      "fürs Zentrum gewinnt.",
  },

  "1.b3 Nf6 2.Bb2 Nd5": {
    strategy:
      "Zentralisiert den Springer, doch 3.e4 greift ihn sofort an und besetzt mit Tempo das " +
      "Zentrum. Der Springer muss erneut ziehen, womöglich zweimal, sodass Weiß Raum gewinnt, " +
      "während Schwarz mehrere Züge für einen Springer aufgewendet hat.",
  },

  "1.b3 Nf6 2.Bb2 e5": {
    strategy:
      "Stellt den Bauern auf ein Feld, das der Läufer b2 bereits angreift und das nichts deckt, " +
      "sodass 3.Lxe5 ihn gewinnt. Schwarz hat für den Bauern nur einen kleinen " +
      "Entwicklungsvorsprung.",
  },

  "1.b3 Nf6 2.e3 d5": {
    strategy:
      "Besetzt sofort das Zentrum und kontrolliert e4, sodass Weiß den e-Bauern nicht ohne " +
      "Weiteres dorthin vorschieben kann, um Raum zu gewinnen. Schwarz erhält einen klassischen, " +
      "soliden Aufbau, und die ruhigen Züge b3 und e3 lassen ein flexibles Spiel, in dem c4 der " +
      "Hebel gegen d5 ist.",
  },

  "1.b3 Nf6 2.e3 e5": {
    strategy:
      "Besetzt sofort das Zentrum und lädt zu Lb2 ein, das den Bauern angreift. Schwarz kann ihn " +
      "decken und behält einen starken Punkt in der Mitte, doch e5 braucht lange Unterstützung " +
      "und gibt Weiß ein Ziel. Das Spiel wird direkter und offener als nach einem Fianchetto.",
  },

  "1.b3 Nf6 2.e3 g6": {
    strategy:
      "Bereitet …Lg7 vor, um Lb2 auf der langen Diagonale zu begegnen, danach folgt die Rochade: " +
      "ein solider, flexibler Aufbau, der beide zentralen Bauernvorstöße offenhält. Bis Schwarz " +
      "rochiert hat, ist der Läufer g7 ungedeckt, sodass der Springer f6 die Diagonale nicht " +
      "verlassen darf, solange Lb2 sie beherrscht.",
  },

  "1.b3 Nf6 2.e3 e6": {
    strategy:
      "Öffnet den Läufer f8 und lässt die Wahl des Aufbaus offen: das klassische Zentrum mit …d5 " +
      "oder ein Fianchetto auf b7 nach damenindischem Muster. Die Stellung bleibt solide, doch " +
      "der Bauer e6 sperrt den Läufer c8 ein, wenn dieser nicht nach b7 geht.",
  },

  "1.b3 Nf6 2.e3 Nc6": {
    strategy:
      "Entwickelt eine Figur Richtung Zentrum und bereitet …e5 vor. Der Springer verstellt den " +
      "c-Bauern, und Lb5 kann ihn gegen einen Doppelbauern auf der c-Linie tauschen. Korrekt, " +
      "aber weniger flexibel als ein Bauernzug im Zentrum.",
  },

  "1.b3 Nf6 2.e3 b6": {
    strategy:
      "Spiegelt den weißen Zug b3: …Lb7 macht Weiß die lange Diagonale streitig. Die Struktur " +
      "ist solide, doch Schwarz beansprucht keinen Raum im Zentrum und reagiert meist nur auf " +
      "den weißen Aufbau. Korrekt, aber weniger ehrgeizig als Raumgewinn im Zentrum.",
  },

  "1.b3 Nf6 2.e3 c6": {
    strategy:
      "Bereitet …d5 mit einem soliden Bauernpaar vor und hält den Läufer c8 für …Lf5 frei. Der " +
      "Zug ist solide, aber langsam und nimmt dem Springer b8 das Feld c6, sodass Weiß Zeit zur " +
      "Entwicklung gewinnt. Korrekt, aber weniger aktiv als der sofortige Griff nach dem " +
      "Zentrum.",
  },

  "1.b3 Nf6 2.e3 c5": {
    strategy:
      "Bekämpft d4 vom Flügel aus und hält die schwarze Entwicklung flexibel. Korrekt, aber " +
      "selten gewählt; in dieser Stellung sind ein Zentrumsbauer oder ein Fianchetto die " +
      "üblichen Antworten.",
  },

  "1.b3 Nf6 2.e3 d6": {
    strategy:
      "Bereitet …e5 mit einem kompakten Aufbau und festem Griff auf e5 vor, oder ein Fianchetto. " +
      "Korrekt, aber bescheiden: Anders als ein Bauer auf d5 kämpft der Bauer nicht um e4, und " +
      "Weiß entwickelt sich ungestört.",
  },

  "1.b3 Nf6 2.e3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, mit Blick auf b4 oder c5. Lxa6 bxa6 verdoppelt sofort " +
      "die a-Bauern, und von a6 aus tut der Springer wenig für das Zentrum.",
  },

  "1.b3 Nf6 2.e3 Rg8": {
    strategy:
      "Gibt die kurze Rochade endgültig auf und stellt den Turm auf eine geschlossene Linie, " +
      "ohne etwas für Zentrum oder Entwicklung zu tun. Weiß entwickelt sich einfach, während der " +
      "schwarze König sein natürliches Quartier verloren hat.",
  },

  "1.b3 Nf6 2.e3 a6": {
    strategy:
      "Verwendet ein Tempo auf einen Flügelbauern, um …b5 vorzubereiten, kämpft aber nicht um " +
      "das Zentrum und entwickelt keine Figur. Weiß entwickelt sich einfach und führt in der " +
      "Entwicklung.",
  },

  "1.b3 Nf6 2.e3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und kann mit …a4 fortgesetzt werden, entwickelt aber nichts " +
      "und schwächt b5 und b6. Weiß entwickelt sich einfach, während der Flügelbauer nichts für " +
      "das Zentrum tut.",
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
      "hinter den Bauern d2 und e3 nicht erreichen kann. Für das Zentrum tut der Zug nichts, und " +
      "Weiß entwickelt sich ungestört.",
  },

  "1.b3 Nf6 2.e3 h5": {
    strategy:
      "Rückt den Randbauern ohne Ziel vor, verliert ein Tempo und schwächt g5 und g6, ohne im " +
      "Zentrum etwas zu gewinnen. Weiß entwickelt sich einfach.",
  },

  "1.b3 Nf6 2.e3 Ng8": {
    strategy:
      "Zieht die einzige entwickelte Figur zurück und macht den einzigen nützlichen Zug von " +
      "Schwarz rückgängig. Weiß hat mit b3 und e3 zwei nützliche Züge gemacht, Schwarz keinen; " +
      "Weiß entwickelt sich in aller Ruhe weiter.",
  },

  "1.b3 Nf6 2.e3 Ne4": {
    strategy:
      "Zentralisiert den Springer zu früh. d3 vertreibt ihn sofort, und nach jedem Rückzug hat " +
      "Weiß ein Tempo gewonnen; ein Rückzug nach c5 läuft zudem in b4 hinein.",
  },

  "1.b3 Nf6 2.e3 Nd5": {
    strategy:
      "Stellt den Springer dorthin, wo c4 ihn mit Tempo angreift. Nach 3.c4 Sb6 hat Weiß mit " +
      "Tempogewinn Raum genommen und entwickelt sich weiter, während Schwarz drei Züge für einen " +
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
