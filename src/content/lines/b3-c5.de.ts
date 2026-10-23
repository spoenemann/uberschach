import type { OpeningTexts } from "../book.ts";

// German prose for b3-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.b3 c5 2.Bb2": {
    strategy:
      "Stellt den Läufer auf die lange Diagonale, wo er auf das Zentrum und g7 zielt. Weiß " +
      "behält die Wahl des Plans: e4 für eine Sizilianische Verteidigung mit bereits " +
      "gespieltem b3, c4 für die Symmetrische Variante der Englischen Eröffnung oder den " +
      "ruhigen Aufbau mit e3, Sf3, Le2 und O-O. Schwarz antwortet meist mit 2...Sc6, worauf " +
      "gewöhnlich 3.e3 oder 3.Sf3 folgt.",
  },

  "1.b3 c5 2.e3": {
    strategy:
      "Öffnet die Diagonale des Läufers f1 und stützt ein späteres d4 oder f4, während Lb2 " +
      "noch folgt. Sobald der Läufer dort steht, geht die Partie in die Linien mit 2.Lb2 " +
      "über, mit Sf3, Le2, O-O und d3 oder Sbd2 als Fortsetzung. Der Bauer legt sich fest, " +
      "bevor Schwarz gezeigt hat, ob ...e5, ...d5 oder ...Sf6 kommt, doch Weiß gibt nichts " +
      "preis.",
  },

  "1.b3 c5 2.c4": {
    strategy:
      "Führt in die Symmetrische Variante der Englischen Eröffnung mit bereits gespieltem b3: " +
      "Der Bauer c4 kontrolliert d5 und b5, und Lb2, Sc3 sowie g3 mit Lg2 können folgen. Der " +
      "Zug ist korrekt, aber langsam und erlaubt Schwarz, dem Lb2 mit ...Sc6 und ...e5 die " +
      "Diagonale zu verstellen oder sie ihm mit ...g6 und ...Lg7 streitig zu machen.",
  },

  "1.b3 c5 2.e4": {
    strategy:
      "Gewinnt Raum im Zentrum und führt zu einer Sizilianischen Verteidigung, in der Weiß " +
      "bereits b3 gespielt hat; Lb2 folgt auf der langen Diagonale. Korrekt, doch b3 ist in " +
      "dieser Struktur langsam: Schwarz entwickelt sich bequem mit ...Sc6, ...e6 und ...d5, " +
      "und der Springer c6 deckt d4 und e5 auf der Diagonale des Läufers.",
  },

  "1.b3 c5 2.g3": {
    strategy:
      "Bereitet Lg2 als Gegenstück zu Lb2 vor: Im Doppelfianchetto wirken beide Läufer von " +
      "den Flügeln auf das Zentrum, und es folgen Sf3, O-O und d3 oder c4. Korrekt, doch ohne " +
      "Zentrumsbauern und ohne entwickelten Springer lässt Weiß Schwarz mit ...Sc6, ...e5 " +
      "oder ...d5 Raum gewinnen.",
  },

  "1.b3 c5 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer mit Blick auf d4 und e5 und hält Lb2, e3, g3 und c4 " +
      "offen. Der Zug ist korrekt, doch der Springer verstellt den f-Bauern und verzichtet " +
      "auf ein frühes f4, und Schwarz kann frei zwischen ...Sc6, ...e6 und ...d5 wählen.",
  },

  "1.b3 c5 2.d3": {
    strategy:
      "Bereitet e4 vor und strebt einen Aufbau mit Lb2, Sf3 oder Sd2, g3 und Lg2 nach Art des " +
      "Königsindischen Angriffs an. Der Zug ist korrekt, aber passiv und gibt Schwarz Zeit, " +
      "mit ...Sc6, ...e5 und ...d5 das Zentrum zu besetzen.",
  },

  "1.b3 c5 2.f4": {
    strategy:
      "Nimmt e5 unter Kontrolle und strebt einen Aufbau wie in der Bird-Eröffnung mit Lb2, " +
      "Sf3 und e3 an, in dem Bauer und Läufer gemeinsam auf e5 wirken. Der Zug ist korrekt, " +
      "öffnet aber die Diagonale e1-h4 zum König hin, und Schwarz kann mit ...Sc6, ...Sf6 und " +
      "...d5 zuerst das Zentrum besetzen.",
  },

  "1.b3 c5 2.d4": {
    strategy:
      "Nach 2...cxd4 kann Weiß nur mit der Dame zurückschlagen, und 3.Dxd4 Sc6 greift sie mit " +
      "Tempo an. Ein Zentrumsbauer wird gegen den schwarzen Flügelbauern getauscht, und Weiß " +
      "verliert Zeit, während Schwarz sich entwickelt.",
  },

  "1.b3 c5 2.c3": {
    strategy:
      "Bereitet d4 vor, doch der Bauer steht auf der langen Diagonale und verstellt den " +
      "Läufer, den b3 auf b2 aktivieren sollte. Schwarz entwickelt sich ungehindert mit " +
      "...Sc6, ...Sf6 und ...d5.",
  },

  "1.b3 c5 2.Nc3": {
    strategy:
      "Stellt den Springer auf die Diagonale, die der Bauer b3 für Lb2 öffnen sollte. Nach " +
      "2...d5 kann der Springer nicht schlagen (3.Sxd5 Dxd5 kostet eine Figur für einen " +
      "Bauern), und 3.Lb2 d4 greift ihn mit Tempo an, sodass Schwarz Raum und Zeit gewinnt.",
  },

  "1.b3 c5 2.a3": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauernzug, der nichts entwickelt und nicht um das " +
      "Zentrum kämpft. Schwarz nimmt ungehindert mit ...Sc6, ...e5 oder ...d5 Raum.",
  },

  "1.b3 c5 2.a4": {
    strategy:
      "Zieht den Randbauern vor, ohne eine Figur zu entwickeln, und der a-Bauer kann b4 nicht " +
      "mehr decken, wo sich ein schwarzer Springer über ...Sc6 festsetzen kann, gestützt vom " +
      "Bauern c5. Schwarz entwickelt sich und kämpft zuerst um das Zentrum.",
  },

  "1.b3 c5 2.f3": {
    strategy:
      "Nimmt dem Königsspringer das Feld f3, öffnet die Diagonale e1-h4 zum König hin und " +
      "entwickelt nichts. Das folgende e4 ist langsam, und Schwarz besetzt mit ...Sc6 und " +
      "...d5 oder ...e5 das Zentrum.",
  },

  "1.b3 c5 2.h3": {
    strategy:
      "Ein Wartezug am Königsflügel, der nichts entwickelt und nicht um das Zentrum kämpft. " +
      "Er nimmt einer schwarzen Figur das Feld g4, doch Schwarz hat dafür noch keine " +
      "Verwendung und besetzt mit ...Sc6, ...e5 oder ...d5 das Zentrum.",
  },

  "1.b3 c5 2.h4": {
    strategy:
      "Zieht den Randbauern vor, ohne eine Figur zu entwickeln oder um das Zentrum zu " +
      "kämpfen, und der h-Bauer kann g4 nicht mehr decken. Schwarz entwickelt sich in Ruhe " +
      "mit ...Sc6, ...Sf6 und ...d5.",
  },

  "1.b3 c5 2.Na3": {
    strategy:
      "Stellt den Springer an den Rand, wo er b5 und c4 im Blick hat, aber weit vom Zentrum " +
      "und vom Königsflügel entfernt steht. Schwarz besetzt mit ...Sc6, ...e5 oder ...d5 das " +
      "Zentrum, und der Springer braucht einen weiteren Zug, um nützlich zu werden.",
  },

  "1.b3 c5 2.Ba3": {
    strategy:
      "Greift sofort c5 an, doch Schwarz deckt mit ...e6 (dann schützt der Läufer f8 den " +
      "Bauern: 3.Lxc5 Lxc5), ...b6 oder ...d6. Der Läufer steht danach auf a3, abseits der " +
      "langen Diagonale, und hat wenig erreicht.",
  },

  "1.b3 c5 2.Nh3": {
    strategy:
      "Stellt den Springer an den Rand, um f4 oder g5 zu erreichen, doch nach ...d5 oder " +
      "...d6 kann Schwarz ...Lxh3 spielen, und nach gxh3 hat Weiß einen Doppelbauern auf der " +
      "h-Linie. Sf3 ist das natürliche Feld.",
  },

  "1.b3 c5 2.g4": {
    strategy:
      "Zieht den g-Bauern ohne Unterstützung vor: 2...Sf6 oder 2...d5 greift ihn an, und Weiß " +
      "muss einen weiteren Zug für h3, f3, Lh3 oder g5 aufwenden. Der Königsflügel ist " +
      "gelockert, bevor eine Figur entwickelt ist.",
  },

  "1.b3 c5 2.b4": {
    strategy:
      "Zieht den b-Bauern ein zweites Mal, nur um ihn herzugeben: 2...cxb4 gewinnt ihn, und " +
      "nach 3.Lb2 Sf6 verstellt der Springer die lange Diagonale, sodass Weiß keine " +
      "Kompensation für den Bauern hat.",
  },

  "1.b3 c5": {
    name: "Larsen-Eröffnung: Englische Variante",
  },

  "1.b3 c5 2.Bb2 Nc6": {
    strategy:
      "Entwickelt eine Figur und kontrolliert d4 und e5, die Felder, auf die der Läufer b2 " +
      "zielt, und hält dabei ...e6, ...Sf6, ...g6 und ...d5 offen. Ein typischer Verlauf ist " +
      "3.e3 Sf6 4.Sf3 g6 5.Le2 Lg7 6.O-O b6, wobei der Springer f6 die Diagonale nach h8 " +
      "verstellt, bis der Läufer auf g7 steht. Nach 3.e3 kann Schwarz auch mit ...e5 oder " +
      "...d5 Raum im Zentrum nehmen.",
  },

  "1.b3 c5 2.Bb2 Nf6": {
    strategy:
      "Entwickelt eine Figur, verstellt die lange Diagonale und nimmt e4 und d5 ins Visier; " +
      "...Sc6, ...e6, ...d5 und ...g6 bleiben alle möglich. Nach 3.e3 kann Schwarz hinter dem " +
      "Springer mit ...g6 und ...Lg7 fianchettieren. Sobald der g-Bauer gezogen hat, verliert " +
      "jeder Springerzug von f6 weg den Turm h8 durch Lxh8, daher bleibt der Springer stehen, " +
      "bis g7 gedeckt ist.",
  },

  "1.b3 c5 2.Bb2 d5": {
    strategy:
      "Besetzt das Zentrum und erschwert Weiß den Vorstoß e4. Schwarz setzt mit ...Sc6, " +
      "...Sf6 und ...e6 fort, während Weiß meist 3.e3, Sf3 und Lb5 spielt, ein Aufbau, der " +
      "einer Nimzo-Indischen Verteidigung mit vertauschten Farben ähnelt. Die Bauern c5 und " +
      "d5 können später durch d4 oder c4 zu Angriffszielen werden, daher muss Schwarz sie " +
      "gedeckt halten.",
  },

  "1.b3 c5 2.Bb2 b6": {
    strategy:
      "Stützt c5 und bereitet ...Lb7 vor, womit Schwarz den weißen Aufbau mit symmetrischer " +
      "Struktur nachahmt. Der Zug ist solide, beansprucht aber weder Raum im Zentrum noch " +
      "schafft er ein Ungleichgewicht. Nach 3.e3 Lb7 4.Sf3 e6 behält Weiß das leichtere " +
      "Spiel.",
  },

  "1.b3 c5 2.Bb2 d6": {
    strategy:
      "Öffnet die Diagonale des Läufers c8 und bereitet ...e5 vor, das der Bauer d6 stützen " +
      "würde, oder ...Sf6 mit anschließendem ...g6. Der Zug ist solide, aber passiv: Schwarz " +
      "wartet ab, und Weiß kann mit e3 und d4 Raum gewinnen oder mit 3.e4 eine sizilianische " +
      "Struktur wählen.",
  },

  "1.b3 c5 2.Bb2 e6": {
    strategy:
      "Öffnet die Diagonale des Läufers f8 und bereitet ...d5 vor, gefolgt von ...Sf6 und " +
      "...Sc6; gegen 3.e4 kann Schwarz einen sizilianischen Aufbau erreichen. Solide und " +
      "flexibel, aber bescheiden: Der Läufer c8 bleibt eingesperrt, bis ...b6 und ...Lb7 " +
      "folgen, und Schwarz beansprucht noch keinen Raum.",
  },

  "1.b3 c5 2.Bb2 f5": {
    strategy:
      "Kontrolliert e4 nach holländischer Art und bereitet ...Sf6 und ...g6 vor. Der " +
      "Königsflügel wird dabei jedoch gelockert: e6 und die Diagonale e8–h5 sind schwach, und " +
      "Weiß kann das sofort mit 3.e4 fxe4 4.Dh5+ g6 5.De5 prüfen, womit e4 und h8 angegriffen " +
      "sind. Riskant, und Schwarz muss genau spielen.",
  },

  "1.b3 c5 2.Bb2 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c7 ins Visier nimmt, nicht aber das " +
      "Zentrum, und blockiert den a-Bauern. Nach 3.e3 und a3 kontrolliert Weiß b4 und " +
      "entwickelt sich ungehindert, während der schwarze Springer weitere Züge braucht, um " +
      "ein brauchbares Feld zu erreichen.",
  },

  "1.b3 c5 2.Bb2 Qc7": {
    strategy:
      "Bringt die Dame ins Spiel, bevor eine Figur entwickelt ist, ohne klare Aufgabe. Nach " +
      "3.Sc3 und Sb5 greift der Springer die Dame an, die erneut ziehen muss, während Weiß " +
      "sich mit Tempo entwickelt.",
  },

  "1.b3 c5 2.Bb2 Qb6": {
    strategy:
      "Bringt die Dame früh gegen den Bauern b3 ins Spiel, den die Bauern a2 und c2 beide " +
      "decken. Sc3 und Sa4 greifen dann Dame und Bauern c5 zugleich an, während die schwarzen " +
      "Springer noch zu Hause stehen.",
  },

  "1.b3 c5 2.Bb2 Qa5": {
    strategy:
      "Fesselt den Bauern d2 an den König, doch 3.Lc3 greift die Dame sofort an, hält den " +
      "Läufer auf der langen Diagonale und zwingt die Dame, erneut zu ziehen. Schwarz hat " +
      "sonst nichts entwickelt.",
  },

  "1.b3 c5 2.Bb2 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, mit Ziel f5 oder g4, gibt aber das Feld f6 auf und " +
      "tut nichts für das Zentrum. Weiß entwickelt sich mit e3 und Sf3 und gewinnt mit d4 " +
      "oder e4 Raum, während die schwarze Entwicklung zurückbleibt.",
  },

  "1.b3 c5 2.Bb2 a6": {
    strategy:
      "Verwendet ein Tempo auf einen Bauernzug am Damenflügel, der ...b5 vorbereitet, aber " +
      "nichts entwickelt und Weiß das Zentrum überlässt, der e3, Sf3 und Le2 spielt oder mit " +
      "e4 Raum gewinnt.",
  },

  "1.b3 c5 2.Bb2 a5": {
    strategy:
      "Bereitet ...a4 gegen den Bauern b3 vor, entwickelt aber nichts und schwächt b5, wo " +
      "sich eine weiße Figur festsetzen kann, da kein schwarzer Bauer dieses Feld mehr decken " +
      "kann. Weiß setzt mit e3 und Sf3 fort und besetzt in aller Ruhe das Zentrum.",
  },

  "1.b3 c5 2.Bb2 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet ...Lb7 vor, entwickelt aber nichts. Nach 3.e3 " +
      "greift der Läufer f1 den Bauern an, sodass Schwarz einen weiteren Zug für seine " +
      "Deckung aufwenden muss, meist ...a6, und a4 kann ihn später untergraben.",
  },

  "1.b3 c5 2.Bb2 f6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6 und öffnet die Diagonale e8–h5, auf der Dh5+ möglich " +
      "wird, sobald der weiße e-Bauer gezogen hat. Der Bauer verstellt den Läufer b2, " +
      "entwickelt aber nichts.",
  },

  "1.b3 c5 2.Bb2 h6": {
    strategy:
      "Verliert ein Tempo mit einem Randbauernzug, der ...g5 vorbereitet, doch solange f6 " +
      "leer ist, würde ...g5 die Diagonale b2–h8 öffnen und den Turm h8 durch Lxh8 einbüßen. " +
      "Entwickelt wird nichts.",
  },

  "1.b3 c5 2.Bb2 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel, schwächt aber g5 und g6 und entwickelt nichts. Weiß " +
      "setzt mit e3 und Sf3 fort und behält das leichtere Spiel, während die schwarzen " +
      "Figuren zu Hause bleiben.",
  },

  "1.b3 c5 2.Bb2 e5": {
    strategy:
      "Lässt den Bauern auf der langen Diagonale ungedeckt: 3.Lxe5 gewinnt ihn, und ...Sc6 " +
      "treibt den Läufer nur nach b2 zurück, wobei Weiß einen sauberen Mehrbauern behält.",
  },

  "1.b3 c5 2.Bb2 g6": {
    strategy:
      "Öffnet sofort die lange Diagonale: 3.Lxh8 gewinnt den Turm, da nichts h8 deckt. Das " +
      "Fianchetto braucht zuerst ...Sf6, das die Diagonale auf f6 verstellt.",
  },

  "1.b3 c5 2.Bb2 g5": {
    strategy:
      "Öffnet die Diagonale b2–h8: 3.Lxh8 gewinnt den Turm glatt, und ...Lg7 würde mit Lxg7 " +
      "beantwortet. Der vorgerückte g-Bauer schwächt zudem den Königsflügel dauerhaft.",
  },

  "1.b3 c5 2.Bb2 c4": {
    strategy:
      "Gibt den c-Bauern auf: 3.bxc4 gewinnt ihn. 3...Db6 greift den Läufer b2 an, da b3 nun " +
      "leer ist, doch Lc3 oder Dc1 pariert das, und die weißen Doppelbauern auf der c-Linie " +
      "sind keine echte Kompensation.",
  },

  "1.b3 c5 2.e3 Nc6": {
    strategy:
      "Entwickelt den Springer auf ein Feld, von dem aus er d4 und b4 kontrolliert, und hält " +
      "alle Pläne offen: ...Sf6 mit ...g6 und ...Lg7, ...e6 mit ...d5 oder ...e5. Gegen 3.Lb2 " +
      "deckt der Springer bereits e5, sodass ein späteres ...e5 die Diagonale des Läufers " +
      "schließt, ohne den Bauern zu verlieren. Schwarz gibt nichts preis, und der Bauer c5 " +
      "kann später durch ...b6, ...d6 oder ...e6 gestützt werden.",
  },

  "1.b3 c5 2.e3 Nf6": {
    strategy:
      "Entwickelt den Königsspringer, kontrolliert e4 und d5 und deckt h5 und g4. Schwarz " +
      "behält die Wahl zwischen ...Sc6, ...e6 mit ...d5 und ...g6 mit ...Lg7, bis Weiß seinen " +
      "Aufbau gezeigt hat, und beantwortet 3.Lb2 mit ...e6 oder ...Sc6. Der Zug führt zur " +
      "selben Stellung wie 1.b3 Sf6 2.e3 c5.",
  },

  "1.b3 c5 2.e3 d5": {
    strategy:
      "Besetzt sofort das Zentrum und nimmt den weißen Figuren das Feld e4. Nach 3.Lb2 " +
      "entwickelt sich Schwarz mit ...Sc6 und ...Sf6, und nach Sf3 und Lb5 kann eine " +
      "Nimzo-Indische Verteidigung mit vertauschten Farben entstehen. Weiß kann den Bauern " +
      "mit c4 angreifen, und der Läufer c8, den ...d5 befreit hat, kann vor ...e6 nach f5 " +
      "oder g4 kommen.",
  },

  "1.b3 c5 2.e3 e6": {
    strategy:
      "Bereitet ...d5 hinter einem soliden Bauern vor und öffnet den Läufer f8, der nun c5 " +
      "deckt. Gegen 3.Lb2 setzt Schwarz mit ...Sf6, ...Sc6 oder ...d5 fort und behält eine " +
      "gesunde, flexible Stellung. Der Preis ist der Läufer c8: e6 sperrt ihn ein, sodass er " +
      "meist über ...b6 und ...Lb7 ins Spiel kommt.",
  },

  "1.b3 c5 2.e3 b6": {
    strategy:
      "Deckt c5 und bereitet ...Lb7 vor, ein spiegelbildliches Fianchetto mit Ziel g2. " +
      "Solide, aber der Zug kopiert Weiß mit einem Tempo weniger, überlässt das Zentrum Lb2, " +
      "Sf3 und c4 und entwickelt noch keine Figur, weshalb er nicht empfohlen wird.",
  },

  "1.b3 c5 2.e3 d6": {
    strategy:
      "Stützt c5 und öffnet den Läufer c8, ein solider, sizilianisch anmutender Aufbau mit " +
      "...Sf6, ...Sc6 und ...g6 als Fortsetzung. Der Zug verzichtet auf den Zentrumsraum, den " +
      "...d5 nehmen würde, sodass Weiß mit Lb2, Sf3 und c4 ein bequemes Spiel erhält, weshalb " +
      "er nicht empfohlen wird.",
  },

  "1.b3 c5 2.e3 e5": {
    strategy:
      "Gewinnt Raum mit Bauern auf c5 und e5 und bereitet ...Sc6 und ...d6 vor. Der Bauer e5 " +
      "braucht einen Verteidiger, sobald Lb2 kommt, und d5 wird zu einem Loch, das ein weißer " +
      "Springer nach c4 und Sc3 besetzen kann.",
  },

  "1.b3 c5 2.e3 g6": {
    strategy:
      "Bereitet ...Lg7 vor, um Lb2 auf der langen Diagonale zu begegnen, mit ...Sc6 und " +
      "...Sf6 als Fortsetzung in einem drachenähnlichen Aufbau. Solide, aber langsam: Der " +
      "g-Bauer legt sich fest, bevor ein Springer entwickelt ist, weshalb der Zug gegenüber " +
      "...Sc6 oder ...Sf6 nicht empfohlen wird.",
  },

  "1.b3 c5 2.e3 Na6": {
    strategy:
      "Zielt vom Rand aus auf b4 und c7, doch nach 3.Lxa6 bxa6 hat Schwarz einen isolierten " +
      "Doppelbauern auf der a-Linie. Andernfalls steht der Springer weit von d4 und e5 " +
      "entfernt und braucht weitere Züge, um nützlich zu werden.",
  },

  "1.b3 c5 2.e3 Qc7": {
    strategy:
      "Deckt c5 und zielt über die Diagonale b8-h2 auf h2, bringt die Dame aber vor jeder " +
      "Figurenentwicklung ins Spiel. Sc3-b5 greift sie mit Tempo an, und Weiß entwickelt sich " +
      "ungestört mit Lb2 und Sf3.",
  },

  "1.b3 c5 2.e3 Qb6": {
    strategy:
      "Zielt auf den Bauern b3, den a2 und c2 doppelt decken, sodass nichts droht. Die Dame " +
      "kann mit a2-a4-a5 oder Sc3-a4 vertrieben werden, während Weiß sich mit Lb2 entwickelt.",
  },

  "1.b3 c5 2.e3 Qa5": {
    strategy:
      "Bringt die Dame früh nach a5, wo sie a2 und c3 ins Visier nimmt, aber nichts " +
      "Ungedecktes angreift. Weiß entwickelt sich mit Lb2 und Sf3, während die Dame keine " +
      "Ziele hat und Schwarz noch keine Figur entwickelt hat.",
  },

  "1.b3 c5 2.e3 Nh6": {
    strategy:
      "Ein Randspringer: Von h6 aus zielt er auf f5 und g4, aber nicht auf d5 und e4, die " +
      "Zentrumsfelder, die er von f6 aus beherrschen würde. Weiß entwickelt sich mit Lb2 und " +
      "Sf3, und der Springer braucht einen weiteren Zug wie ...Sf5, um ins Spiel zu kommen.",
  },

  "1.b3 c5 2.e3 a6": {
    strategy:
      "Investiert ein Tempo in Raum am Damenflügel, das nichts entwickelt und nichts für das " +
      "Zentrum tut. Weiß spielt Lb2 und Sf3, während Schwarz noch Felder für Springer und " +
      "Läufer finden muss.",
  },

  "1.b3 c5 2.e3 a5": {
    strategy:
      "Plant ...a4, um b3 anzugreifen, investiert aber ein Tempo in den Randbauern und tut " +
      "nichts für Entwicklung oder Zentrum. Weiß entwickelt sich unterdessen ungestört mit " +
      "Lb2 und Sf3.",
  },

  "1.b3 c5 2.e3 f5": {
    strategy:
      "Gewinnt Raum, öffnet aber die Diagonale e8-h5: 3.Dh5+ erzwingt ...g6, wonach f6 und h6 " +
      "geschwächt sind. Weiß entwickelt sich dann mit Lb2 und Sf3 gegen einen gelockerten " +
      "Königsflügel.",
  },

  "1.b3 c5 2.e3 g5": {
    strategy:
      "Öffnet die lange Diagonale bis h8: 3.Lb2 greift den Turm an, sodass Schwarz die " +
      "Diagonale mit einem Zug wie ...Lg7, ...Sf6 oder ...f6 verstellen muss. h4 untergräbt " +
      "den Bauern, und der Königsflügel ist ohne Gegenwert geschwächt.",
  },

  "1.b3 c5 2.e3 h6": {
    strategy:
      "Ein Wartezug, der den weißen Figuren das Feld g5 nimmt, aber nichts für Entwicklung " +
      "oder Zentrum tut. Weiß spielt Lb2 und Sf3 und gewinnt Zeit.",
  },

  "1.b3 c5 2.e3 h5": {
    strategy:
      "Lockert den Königsflügel ohne Grund: Der h-Bauer kann g6 und g5 nie mehr decken, und " +
      "der Zug entwickelt nichts. Weiß entwickelt sich ungestört mit Lb2 und Sf3.",
  },

  "1.b3 c5 2.e3 b5": {
    strategy:
      "Verliert einen Bauern: 3.Lxb5 schlägt ihn, weil nichts b5 deckt, und nach 3...Da5 " +
      "zieht sich der Läufer einfach mit 4.Lc4 zurück.",
  },

  "1.b3 c5 2.e3 f6": {
    strategy:
      "Öffnet die Diagonale e8-h5: 3.Dh5+ g6 4.Dxc5 gewinnt den ungedeckten c-Bauern, und " +
      "zudem hat Schwarz dem Königsspringer sein bestes Feld genommen.",
  },

  "1.b3 c5 2.e3 c4": {
    strategy:
      "Schiebt einen Bauern vor, der nicht zu halten ist: 3.Lxc4 (oder 3.bxc4) schlägt ihn, " +
      "da nichts c4 deckt, und Schwarz hat keine Entwicklung als Ausgleich dafür.",
  },
};
