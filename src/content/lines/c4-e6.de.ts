import type { OpeningTexts } from "../book.ts";

// German prose for c4-e6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.c4 e6 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer und deckt d4 und e5, ohne einen Bauern festzulegen. Nach " +
      "2...d5 kann Weiß mit 3.d4 ins Abgelehnte Damengambit oder mit 3.g3 Sf6 4.Lg2 in den " +
      "neokatalanischen Aufbau gehen, während 2...Sf6 zu anglo-indischen Linien führt. " +
      "Schwarz bestimmt die Struktur weiterhin mit 2...d5, 2...c5 oder 2...Sf6.",
  },

  "1.c4 e6 2.Nc3": {
    strategy:
      "Entwickelt den Damenspringer zum Zentrum hin, verstärkt die Kontrolle über d5 und e4 " +
      "und hält d4, e4 und g3 als Fortsetzungen offen. Nach 2...d5 erreicht Weiß mit 3.d4 ein " +
      "Abgelehntes Damengambit oder mit 3.cxd5 exd5 4.d4 dessen Abtauschstruktur, während " +
      "2...Sf6 zu anglo-indischen Aufbauten führt. Schwarz kann auch 2...Lb4 spielen, um auf " +
      "c3 zu schlagen und Weiß einen Doppelbauern auf der c-Linie zu geben.",
  },

  "1.c4 e6 2.d4": {
    strategy:
      "Besetzt sofort das Zentrum: Zusammen mit dem Bauern c4 kontrolliert der Bauer d4 die " +
      "Felder c5, d5 und e5. Nach 2...d5 entsteht das Abgelehnte Damengambit, und 2...Sf6 " +
      "steuert die Nimzo-Indische, Damenindische oder Bogo-Indische Verteidigung an. Schwarz " +
      "kann auch mit 2...f5 Holländisch, mit 2...b6 die Englische Verteidigung oder mit " +
      "2...Lb4+ die Keres-Verteidigung wählen, die meist mit 3.Ld2 beantwortet wird.",
  },

  "1.c4 e6 2.g3": {
    strategy:
      "Bereitet Lg2 vor, der auf der langen Diagonale Druck auf d5 und b7 ausübt. Nach 2...d5 " +
      "3.Lg2 Sf6 4.Sf3 entsteht die neokatalanische Stellung, und ein späteres d4 macht " +
      "daraus eine Katalanische Eröffnung; auch Sc3 bleibt möglich. Allerdings kommt der " +
      "Königsflügel zuerst: 2...d5 greift sofort den ungedeckten Bauern c4 an, und Schwarz " +
      "kann auch mit 2...c5 vorgehen.",
  },

  "1.c4 e6 2.e4": {
    strategy:
      "Besetzt das Zentrum mit dem c- und dem e-Bauern und leitet in eine Französische " +
      "Verteidigung über, in der Weiß c4 statt d4 gespielt hat. Die Antwort 2...d5 greift " +
      "beide Bauern an, und nach 3.exd5 exd5 4.cxd5 Dxd5 5.Sc3 gewinnt Weiß Zeit gegen die " +
      "Dame, behält aber einen isolierten Bauern d2. Solide, gibt aber den Charakter der " +
      "Englischen Eröffnung auf.",
  },

  "1.c4 e6 2.b3": {
    strategy:
      "Bereitet Lb2 auf der langen Diagonale in Richtung g7 vor und deckt den Bauern c4 gegen " +
      "2...d5. Sf3, e3 oder g3 können in einem flexiblen Aufbau folgen, während Schwarz sich " +
      "mit ...d5, ...Sf6 und ...Le7 oder ...c5 frei entwickelt. Solide, aber langsamer als " +
      "2.Sf3 oder 2.Sc3.",
  },

  "1.c4 e6 2.d3": {
    strategy:
      "Deckt den Bauern c4, unterstützt ein späteres e4 und gibt dem Läufer c1 den Weg frei, " +
      "womit ein Aufbau mit Sc3, g3, Lg2 und e4 vorbereitet wird. Der Bauer d3 steht jedoch " +
      "bescheiden: Er nimmt nicht am Kampf um d5 und d4 teil, und Schwarz gewinnt mit 2...d5 " +
      "Raum oder entwickelt sich frei mit ...Sf6 und ...c5. Solide, aber passiver als 2.d4.",
  },

  "1.c4 e6 2.e3": {
    strategy:
      "Öffnet die Diagonale des Läufers f1, der damit auch c4 deckt, und bereitet Sc3, Sf3 " +
      "und d4 in einem kompakten Aufbau vor, der in ein ruhiges Abgelehntes Damengambit " +
      "übergehen kann. Der Zug sperrt den Läufer c1 bis zu b3 und Lb2 ein, und nach 2...d5 " +
      "3.cxd5 exd5 ist der Läufer c8 frei und Schwarz hat ein bequemes Spiel. Solide, aber " +
      "passiv.",
  },

  "1.c4 e6 2.a3": {
    strategy:
      "Verhindert ...Lb4 und bereitet b4 vor, entwickelt aber nichts und kostet ein Tempo. " +
      "Schwarz besetzt mit ...d5 und ...Sf6 das Zentrum, während die weißen Figuren noch zu " +
      "Hause stehen.",
  },

  "1.c4 e6 2.a4": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel, hinterlässt aber auf b4 ein dauerhaftes Loch, da " +
      "weder der a- noch der c-Bauer dieses Feld noch decken kann. Der Zug entwickelt nichts, " +
      "und Schwarz besetzt mit ...d5 und ...Sf6 das Zentrum.",
  },

  "1.c4 e6 2.f4": {
    strategy:
      "Kontrolliert e5, entwickelt aber keine Figur und öffnet die Diagonale e1–h4, sodass " +
      "2...Dh4+ sofort 3.g3 erzwingt. Der weiße Königsflügel ist geschwächt, bevor eine Figur " +
      "entwickelt ist, und Schwarz setzt frei mit ...d5 oder ...Sf6 fort.",
  },

  "1.c4 e6 2.g4": {
    strategy:
      "Gewinnt Raum am Königsflügel, lässt den Bauern aber locker: 2...Dh4 greift ihn sofort " +
      "an und fesselt den Bauern f2, sodass Weiß einen weiteren Zug wie 3.h3 aufwenden muss, " +
      "um ihn zu halten. Der Königsflügel ist geschwächt, bevor sich auch nur eine Figur " +
      "entwickelt hat.",
  },

  "1.c4 e6 2.h3": {
    strategy:
      "Ein Wartezug, der weder für das Zentrum noch für die Entwicklung etwas tut. Schwarz " +
      "spielt ...d5 und ...Sf6, während die weißen Figuren noch zu Hause stehen.",
  },

  "1.c4 e6 2.h4": {
    strategy:
      "Ein Flankenvorstoß, der weder für das Zentrum noch für die Entwicklung etwas tut und " +
      "den Königsflügel ohne Ziel lockert. Weiß hat ein Tempo verloren, und Schwarz erhält " +
      "mit ...d5 ein bequemes Spiel.",
  },

  "1.c4 e6 2.Na3": {
    strategy:
      "Deckt vom Rand aus c4 und strebt nach c2 oder b5, steht aber weit vom Zentrum " +
      "entfernt. Schwarz kann sofort ...d5 spielen oder mit 2...Lxa3 3.bxa3 schlagen, was die " +
      "weißen a-Bauern verdoppelt und isoliert, Weiß aber das Läuferpaar überlässt.",
  },

  "1.c4 e6 2.Nh3": {
    strategy:
      "Ein Randspringer auf dem Weg nach f4, der das natürliche Feld f3 ungenutzt lässt. Nach " +
      "2...d5 3.cxd5 exd5 zielt der Läufer c8 auf h3, und ...Lxh3 gxh3 ließe Weiß mit " +
      "isolierten Doppelbauern auf der h-Linie zurück.",
  },

  "1.c4 e6 2.Qc2": {
    strategy:
      "Deckt c4 und unterstützt e4, bringt die Dame aber vor den Leichtfiguren heraus. " +
      "Schwarz besetzt mit ...d5 das Zentrum oder gewinnt mit ...Sc6 und ...Sb4 Zeit, und " +
      "Weiß hat für den frühen Damenzug wenig vorzuweisen.",
  },

  "1.c4 e6 2.Qb3": {
    strategy:
      "Zielt auf b7, das der Läufer c8 bereits deckt, sodass keine Drohung besteht. Schwarz " +
      "entwickelt sich mit ...Sc6 oder gewinnt mit ...d5 Raum, während die früh ausgezogene " +
      "Dame keine gute Fortsetzung hat.",
  },

  "1.c4 e6 2.Qa4": {
    strategy:
      "Bringt die Dame auf die Diagonale a4–e8, wo sie nichts droht, da d7 gedeckt ist. " +
      "Schwarz entwickelt sich mit ...Sf6 und ...Sc6 und setzt mit ...d5 fort, während die " +
      "Dame auf a4 abseits steht.",
  },

  "1.c4 e6 2.b4": {
    strategy:
      "Lässt den Bauern auf der offenen Diagonale f8–a3 ungedeckt, und 2...Lxb4 gewinnt ihn " +
      "sofort. Weiß erhält dafür nur die halboffene b-Linie und ein schnelles Lb2.",
  },

  "1.c4 e6 2.f3": {
    strategy:
      "Öffnet die Diagonale e1–h4 und verliert einen Bauern: 2...Dh4+ erzwingt 3.g3, da der " +
      "König weder nach d2 noch nach f2 ausweichen kann, und 3...Dxc4 schlägt den ungedeckten " +
      "c-Bauern. Zudem nimmt der Zug dem Springer g1 das Feld f3.",
  },

  "1.c4 e6 2.c5": {
    strategy:
      "Gewinnt Raum, lässt den Bauern aber ungedeckt: 2...Lxc5 gewinnt ihn sofort, da ...e6 " +
      "die Diagonale des Läufers f8 geöffnet hat. 3.d4 gewinnt ein Tempo gegen den Läufer, " +
      "doch Weiß hat schlicht einen Bauern weniger.",
  },

  "1.c4 e6": {
    name: "Englische Eröffnung: Agincourt-Verteidigung",
  },

  "1.c4 e6 2.Nc3 Nf6": {
    strategy:
      "Entwickelt den Königsspringer und hält jede Struktur offen: …d5 für eine Stellung vom " +
      "Typ Damengambit, …Lb4 für eine nimzo-indische Aufstellung, …b6 für eine damenindische " +
      "Formation oder …c5 für eine symmetrische. Die schärfste Antwort von Weiß ist 3.e4, das " +
      "sofort das Zentrum besetzt, während 3.Sf3 und 3.g3 zu ruhigerem Spiel führen. 3.d4 " +
      "führt nach …Lb4 in die Nimzowitsch-Indische Verteidigung und nach …d5 in das " +
      "Abgelehnte Damengambit.",
  },

  "1.c4 e6 2.Nc3 d5": {
    strategy:
      "Erhebt sofort Anspruch auf das Zentrum und steuert eine Stellung vom Typ Damengambit " +
      "an. Nach 3.d4 entsteht das Abgelehnte Damengambit, nach 3.cxd5 exd5 4.d4 eine " +
      "Abtauschstruktur mit weißer Mehrheit im Zentrum und schwarzer Mehrheit am Damenflügel. " +
      "Ohne den Abtausch stützt der Bauer e6 den Punkt d5 solide, um den Preis eines Läufers " +
      "c8, der eingesperrt bleibt, bis …dxc4 oder …b6 und …Lb7 ihn befreien.",
  },

  "1.c4 e6 2.Nc3 c5": {
    strategy:
      "Kontrolliert d4 und steuert eine symmetrische Struktur an, in der der Bauer e6 " +
      "bereitsteht, …d5 zu unterstützen. Schwarz entwickelt sich mit …Sf6 und …Sc6 oder mit " +
      "…b6 und …Lb7, während Weiß zwischen Sf3 und einem Fianchetto mit g3 und Lg2 wählt. " +
      "Kommt …d5, können ein Tausch auf d5 und ein späteres d4 Schwarz einen isolierten " +
      "d-Bauern bescheren.",
  },

  "1.c4 e6 2.Nc3 Nc6": {
    strategy:
      "Entwickelt eine Figur und zielt auf d4 und e5, doch der Springer verstellt den " +
      "c-Bauern und legt sich fest, bevor die schwarze Bauernstruktur geklärt ist. Weiß kann " +
      "mit e4 oder d4 und Sf3 das Zentrum besetzen, während …Sf6 und …Lb4 oder …d5 Schwarz " +
      "weiterhin vertraute Aufstellungen bieten. Solide, aber weniger flexibel als …Sf6 oder " +
      "…d5.",
  },

  "1.c4 e6 2.Nc3 Be7": {
    strategy:
      "Entwickelt den schwarzfeldrigen Läufer und macht nach …Sf6 den Weg zur Rochade frei, " +
      "während …d5 für später bleibt. Der Zug verzichtet auf das aktive …Lb4 und lässt Weiß " +
      "die Wahl zwischen e4 und d4 oder Sf3 und g3. Solide, aber langsamer und weniger " +
      "flexibel als …Sf6 oder …d5.",
  },

  "1.c4 e6 2.Nc3 Bb4": {
    strategy:
      "Greift den Springer c3 an und bereitet …Lxc3 vor, um Weiß einen Doppelbauern zu " +
      "verschaffen, mit …Sf6 und …d5 oder …c5 als Fortsetzung. Weiß kann mit Dc2 antworten, " +
      "das auf c3 ohne Strukturschaden zurückschlägt, oder mit a3 das Läuferpaar " +
      "beanspruchen. Spielbar, doch der Zug legt den Läufer fest, bevor das Zentrum geklärt " +
      "ist, und ist weniger direkt als …d5 oder …Sf6.",
  },

  "1.c4 e6 2.Nc3 b6": {
    strategy:
      "Bereitet …Lb7 auf der langen Diagonale und eine damenindische Aufstellung mit …Sf6 und " +
      "…Le7 vor. Weiß kann mit e4 und d4 sofort Raum im Zentrum nehmen, sodass Schwarz bereit " +
      "sein muss, das Zentrum mit …Lb4 oder …c5 anzugreifen. Solide und flexibel, aber ein " +
      "weniger direkter Kampf um das Zentrum als …d5 oder …Sf6.",
  },

  "1.c4 e6 2.Nc3 c6": {
    strategy:
      "Bereitet …d5 vor, meist mit einer halbslawischen Bauernstruktur nach d4, gefolgt von " +
      "…Sf6. Der Zug ist langsam und nimmt dem Springer b8 das Feld c6, und Weiß kann diese " +
      "Struktur mit e4 umgehen, sodass …d5 mit exd5 und einem frühen Bauerntausch beantwortet " +
      "wird. Solide, aber weniger flexibel als …Sf6 oder sofort …d5.",
  },

  "1.c4 e6 2.Nc3 d6": {
    strategy:
      "Bildet ein kompaktes Bauernpaar auf d6 und e6, hinter dem …Sf6, …Le7 und …O-O möglich " +
      "sind, mit …e5 oder …c5 als spätere Hebel. Der Zug gibt den Kampf um das Zentrum auf, " +
      "und nach d4 erlaubt ein voreiliges …e5 dxe5 dxe5 und einen Damentausch, der Schwarz " +
      "das Rochaderecht kostet. Spielbar, aber passiv.",
  },

  "1.c4 e6 2.Nc3 f5": {
    strategy:
      "Steuert eine holländische Aufstellung mit …Sf6, …Le7 und …O-O oder einen Stonewall mit " +
      "…d5 und …c6 an und kontrolliert e4. Der Zug schwächt e6 und die Diagonale e8–h5, und " +
      "Weiß antwortet mit d4 oder g3 und Lg2. Vertretbar, aber festlegend und weniger solide " +
      "als …d5.",
  },

  "1.c4 e6 2.Nc3 g6": {
    strategy:
      "Bereitet …Lg7 vor, um Druck entlang der langen Diagonale auszuüben, gefolgt von …Se7, " +
      "…O-O und …d5 oder …c5. Die Aufstellung ist langsam, und Weiß kann mit e4 und d4 das " +
      "Zentrum aufbauen, bevor Schwarz dort Anspruch erhoben hat. Flexibel, aber langsamer " +
      "als …Sf6 oder …d5.",
  },

  "1.c4 e6 2.Nc3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er auf b4 und c5 zielt, aber d5 und das Zentrum " +
      "nicht umkämpft. Weiß gewinnt mit e4 oder d4 und Sf3 Raum, während Schwarz Zeit " +
      "verloren hat.",
  },

  "1.c4 e6 2.Nc3 Qe7": {
    strategy:
      "Bringt die Dame früh heraus, verstellt den Läufer f8 und lässt c7 ohne Deckung, sodass " +
      "Sb5 mit Sxc7+ droht und Zeit gewinnt. Danach baut Weiß mit e4 und d4 das Zentrum auf.",
  },

  "1.c4 e6 2.Nc3 Qf6": {
    strategy:
      "Bringt die Dame früh heraus und nimmt dem Springer g8 das Feld f6. Die Diagonale der " +
      "Dame reicht nur bis zum Springer c3, den die Bauern b2 und d2 decken, während Sb5 mit " +
      "Sxc7+ eine Gabel gegen König und Turm droht und Se4 die Dame angreift, sodass Schwarz " +
      "weitere Zeit verliert.",
  },

  "1.c4 e6 2.Nc3 Qg5": {
    strategy:
      "Stellt die Dame auf ein Feld, auf dem d4 die Diagonale des Läufers c1 gegen sie öffnet " +
      "und auch Sf3 sie angreift, sodass Weiß mit Tempogewinn entwickelt. Der Druck auf g2 " +
      "ist harmlos, da Lf1 das Feld deckt.",
  },

  "1.c4 e6 2.Nc3 Qh4": {
    strategy:
      "Zielt auf f2, das der König deckt, und auf den Bauern c4, den noch nichts deckt. Weiß " +
      "deckt ihn mit e3, das die Diagonale des Läufers f1 öffnet, oder mit b3 und gewinnt " +
      "dann mit Sf3 oder g3 Zeit gegen die Dame, während Schwarz noch nichts entwickelt hat.",
  },

  "1.c4 e6 2.Nc3 Bd6": {
    strategy:
      "Blockiert den Bauern d7, sodass …d5 unmöglich ist, solange der Läufer auf d6 steht, " +
      "und lädt zu Sb5 ein, wonach Sxd6+ cxd6 Weiß das Läuferpaar verschaffen und Schwarz " +
      "einen Doppelbauern auf der d-Linie hinterlassen würde. Danach baut Weiß mit e4 und d4 " +
      "das Zentrum auf.",
  },

  "1.c4 e6 2.Nc3 Bc5": {
    strategy:
      "Stellt den Läufer auf ein Feld, das d4 angreift, sodass Weiß mit Tempo Raum im Zentrum " +
      "gewinnt, während Schwarz nach b4 oder e7 ausweicht.",
  },

  "1.c4 e6 2.Nc3 Nh6": {
    strategy:
      "Stellt den Springer an den Rand. Nach d4 greift ihn der Läufer c1 an, und Lxh6 gxh6 " +
      "würde die h-Bauern verdoppeln, während …Sf5 mit Tempogewinn durch e4 beantwortet " +
      "werden kann.",
  },

  "1.c4 e6 2.Nc3 Ne7": {
    strategy:
      "Verstellt den Läufer f8, dessen einzige offene Diagonale über e7 führt, und verzichtet " +
      "auf das natürliche …Sf6. Der Springer unterstützt …d5, doch Weiß besetzt mit e4 und d4 " +
      "das Zentrum, während Schwarz seinen Königsflügel entwirrt.",
  },

  "1.c4 e6 2.Nc3 a6": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauern, der weder um das Zentrum kämpft noch eine " +
      "Figur entwickelt; bestenfalls bereitet er …b5 vor, das der Bauer c4 bereits erschwert. " +
      "Weiß setzt mit e4 und d4 oder Sf3 fort.",
  },

  "1.c4 e6 2.Nc3 a5": {
    strategy:
      "Zieht den a-Bauern ohne Zweck vor: Er kontrolliert b4, gibt aber …a6 gegen einen " +
      "Springer auf b5 auf und tut nichts für Zentrum oder Entwicklung. Weiß baut mit e4 und " +
      "d4 oder Sf3 auf.",
  },

  "1.c4 e6 2.Nc3 f6": {
    strategy:
      "Schwächt e6 und die Diagonale e8–h5 und nimmt dem Springer g8 das Feld f6, ohne dafür " +
      "etwas zu entwickeln. Weiß baut mit e4 und d4 ein breites Zentrum auf, und die " +
      "geschwächte Diagonale lädt zu Dh5+ ein, sobald e4 gespielt ist.",
  },

  "1.c4 e6 2.Nc3 g5": {
    strategy:
      "Prescht am Königsflügel vor, ohne etwas entwickelt zu haben, und schwächt f6, h6 und " +
      "die dunklen Felder um den König dauerhaft. Vorerst deckt die Dame d8 den Bauern, doch " +
      "d4 öffnet den Läufer c1 gegen ihn, und h4 greift ihn ein weiteres Mal an.",
  },

  "1.c4 e6 2.Nc3 h6": {
    strategy:
      "Verhindert Lg5, obwohl auf g5 noch nichts droht, und tut nichts für Zentrum oder " +
      "Entwicklung. Weiß spielt ungestört e4 und d4.",
  },

  "1.c4 e6 2.Nc3 h5": {
    strategy:
      "Zieht den Randbauern ohne Zweck vor und schwächt g5, da der h-Bauer das Feld nicht " +
      "mehr von h6 aus decken kann. Der Zug entwickelt nichts und tut nichts für das Zentrum, " +
      "sodass Weiß einfach mit e4 und d4 aufbaut.",
  },

  "1.c4 e6 2.Nc3 e5": {
    strategy:
      "Zieht den e-Bauern zweimal, um das Feld zu erreichen, das 1…e5 in einem Zug erreicht, " +
      "sodass Weiß in einer Struktur des umgekehrten Sizilianers ein volles Tempo mehr hat " +
      "und sich mit Sf3 und g3 entwickeln oder direkt auf d4 spielen kann.",
  },

  "1.c4 e6 2.Nc3 Ke7": {
    strategy:
      "Verzichtet endgültig auf die Rochade und verstellt den Läufer f8, ohne etwas dafür zu " +
      "bekommen. Der König bleibt im Zentrum, wo er zur Zielscheibe wird, sobald Weiß mit d4 " +
      "und e4 Linien öffnet.",
  },

  "1.c4 e6 2.Nc3 Ba3": {
    strategy: "Verschenkt den Läufer: bxa3 schlägt ihn, und Schwarz erhält nichts dafür.",
  },

  "1.c4 e6 2.Nc3 b5": {
    strategy:
      "Stellt einen Bauern ein: cxb5 gewinnt ihn, und Schwarz hat dafür weder Entwicklung " +
      "noch offene Linien vorzuweisen.",
  },

  "1.c4 e6 2.g3 d5": {
    strategy:
      "Greift sofort ins Zentrum ein, mit einem Bauern, den der Bauer e6 stützt, ähnlich wie " +
      "in der Französischen Verteidigung. Weiß setzt meist mit 3.Lg2 Sf6 4.Sf3 fort, und ein " +
      "späteres d4 macht daraus eine Katalanische Eröffnung; Schwarz kann auch auf c4 " +
      "schlagen oder d5 mit ...c6 stützen. Der Läufer c8 steht vorerst hinter dem Bauern e6 " +
      "und kommt oft über b7 ins Spiel, nach ...b6 oder nach ...dxc4 und ...b5.",
  },

  "1.c4 e6 2.g3 Nf6": {
    strategy:
      "Entwickelt den Springer und erreicht die Stellung nach 1.c4 Sf6 2.g3 e6, in der ...d5 " +
      "und ...c5 noch beide möglich sind. Nach 3.Lg2 d5 4.Sf3 mündet die Partie in die " +
      "Hauptlinie mit 2...d5, während 3...c5 zu einer symmetrischen Struktur der Englischen " +
      "Eröffnung führt; ...Le7 und die kurze Rochade passen zu beiden Plänen.",
  },

  "1.c4 e6 2.g3 c5": {
    strategy:
      "Spiegelt den c-Bauern von Weiß und erreicht die Stellung nach 1.c4 c5 2.g3 e6. Schwarz " +
      "kontrolliert d4 und hält ...Sc6, ...Sf6 und ...d5 in Reserve, wobei der Bauer e6 das " +
      "Feld d5 bereits stützt. Weiß setzt meist mit 3.Lg2 fort, und ...Sc6 oder ...d5 sperrt " +
      "dann die lange Diagonale des Läufers in Richtung b7.",
  },

  "1.c4 e6 2.g3 f5": {
    strategy:
      "Kontrolliert e4 und strebt einen holländischen Aufbau mit ...Sf6, ...Le7 und kurzer " +
      "Rochade an oder einen Stonewall mit ...d5 und ...c6. Der Vorstoß schwächt die " +
      "Diagonale e8-h5, und im Stonewall wird das Feld e5 zu einem dauerhaften Loch. Weiß " +
      "spielt fast immer 3.Lg2, entwickelt dann mit Sf3 oder Sc3 und wählt später zwischen d4 " +
      "und d3 mit e4.",
  },

  "1.c4 e6 2.g3 Nc6": {
    strategy:
      "Entwickelt den Springer, kontrolliert d4 und e5 und hält ...Sf6 und ...d5 offen. Der " +
      "Springer verstellt den c-Bauern, sodass ...c5 vorerst ausgeschlossen ist, und nach " +
      "3.Lg2 zielt der Läufer auf c6. Solide, aber Schwarz legt eine Figur fest, bevor die " +
      "Bauernstruktur geklärt ist.",
  },

  "1.c4 e6 2.g3 Be7": {
    strategy:
      "Entwickelt den Läufer und macht f8 für die Rochade frei, sobald der Springer g8 " +
      "draußen ist, mit ...Sf6 und ...d5 als solidem Aufbau. Der Zug beansprucht noch keinen " +
      "Raum im Zentrum, sodass Weiß ungehindert mit Lg2, Sc3 und d4 oder e4 fortsetzen kann. " +
      "Solide, aber er überlässt Weiß die Wahl der Bauernstruktur.",
  },

  "1.c4 e6 2.g3 b6": {
    strategy:
      "Bereitet ...Lb7 nach damenindischem Muster vor, doch der Vorstoß des b-Bauern öffnet " +
      "die lange Diagonale zum Turm a8. Nach 3.Lg2 ist der Turm angegriffen, und 3...Lb7 " +
      "verliert nach 4.Lxb7 eine Figur, also braucht Schwarz zuerst ...c6, ...Sc6 oder ...d5, " +
      "um die Diagonale zu schließen. Spielbar, doch Weiß gewinnt Zeit.",
  },

  "1.c4 e6 2.g3 c6": {
    strategy:
      "Bereitet ...d5 hinter einer kompakten Bauernkette c6, d5 und e6 vor und sperrt die " +
      "lange Diagonale eines künftigen Läufers auf g2. Der Läufer c8 bleibt hinter e6 " +
      "eingeschlossen, und Weiß kann sofort mit d4 oder e4 Raum gewinnen. Solide, aber " +
      "langsamer als das sofortige ...d5.",
  },

  "1.c4 e6 2.g3 d6": {
    strategy:
      "Bereitet einen kompakten Aufbau mit ...Sf6, ...Le7 und Rochade oder ein späteres ...e5 " +
      "vor. Der Zug überlässt Weiß Raum im Zentrum, sodass Weiß mit Lg2, Sc3 und e4 oder d4 " +
      "aufbaut. Solide, aber passiv.",
  },

  "1.c4 e6 2.g3 g6": {
    strategy:
      "Bereitet ...Lg7 und ein eigenes Fianchetto vor, gefolgt von ...Se7 oder ...Sf6 und " +
      "kurzer Rochade. Schwarz hat noch keinen Bauern im Zentrum, sodass Weiß mit Sc3, Sf3 " +
      "und d4 oder e4 Raum gewinnen kann. Solide, aber passiv.",
  },

  "1.c4 e6 2.g3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 ins Auge fasst, im Zentrum aber wenig " +
      "bewirkt. Weiß spielt Lg2, Sc3 und d4 oder e4 mit Zeit im Überfluss.",
  },

  "1.c4 e6 2.g3 Qe7": {
    strategy:
      "Stellt die Dame vor den Läufer f8, der keine andere offene Diagonale hat, sodass die " +
      "Entwicklung des schwarzen Königsflügels auf einen weiteren Damenzug wartet. Weiß " +
      "entwickelt sich mit Lg2, Sc3 und d4 und besetzt währenddessen das Zentrum.",
  },

  "1.c4 e6 2.g3 Qf6": {
    strategy:
      "Bringt die Dame nach f6, wo sie auf b2 zielt, das der Läufer c1 deckt, und nimmt dem " +
      "Springer g8 das Feld f6. Weiß entwickelt sich mit Lg2 und Sc3 und kann gegen die " +
      "exponierte Dame Zeit gewinnen, etwa mit Se4.",
  },

  "1.c4 e6 2.g3 Qg5": {
    strategy:
      "Schickt die Dame nach g5, wo sie auf den Bauern d2 zielt, doch 3.d4 öffnet die " +
      "Diagonale des Läufers c1 und greift die Dame an, sodass Weiß mit Tempo das Zentrum " +
      "besetzt.",
  },

  "1.c4 e6 2.g3 Bd6": {
    strategy:
      "Verstellt den d-Bauern, sodass ...d5 warten muss, bis der Läufer wieder zieht, und " +
      "macht den Läufer zur Zielscheibe für e4-e5. Weiß besetzt mit Lg2, Sc3 und d4 das " +
      "Zentrum.",
  },

  "1.c4 e6 2.g3 Bc5": {
    strategy:
      "Zielt auf f2 und die Diagonale g1-a7, doch 3.d4 greift den Läufer an, der erneut " +
      "ziehen muss, während Weiß mit Tempo das Zentrum besetzt hat.",
  },

  "1.c4 e6 2.g3 Bb4": {
    strategy:
      "Zielt auf d2, das viermal gedeckt ist, sodass keine Drohung besteht, und 3.a3 " +
      "vertreibt den Läufer. Weiß bekommt einen nützlichen Bauernzug für die Zeit, die " +
      "Schwarz für den Rückzug aufwendet.",
  },

  "1.c4 e6 2.g3 Nh6": {
    strategy:
      "Strebt nach f5, doch bis dahin steht der Springer am Rand, und g4 kann ihn später von " +
      "f5 vertreiben. Weiß spielt in aller Ruhe Lg2, Sc3 und d4 oder e4.",
  },

  "1.c4 e6 2.g3 Ne7": {
    strategy:
      "Verstellt den Läufer f8, dessen natürliches Feld e7 ist, und stellt den Springer " +
      "dorthin, wo er weniger leistet als auf f6. Weiß gewinnt mit Lg2, Sc3 und d4 oder e4 " +
      "Raum, während die schwarze Entwicklung am Königsflügel zurückbleibt.",
  },

  "1.c4 e6 2.g3 a6": {
    strategy:
      "Bereitet ...b5 vor, doch sobald der Läufer auf g2 steht, öffnet ...b5 die lange " +
      "Diagonale zum Turm a8, sodass der Zug vor allem ein Tempo kostet. Weiß setzt mit Lg2, " +
      "Sc3 und d4 oder e4 fort.",
  },

  "1.c4 e6 2.g3 a5": {
    strategy:
      "Kontrolliert b4, entwickelt aber nichts und nimmt nicht am Kampf ums Zentrum teil, und " +
      "der a-Bauer kann b5 nie mehr decken. Weiß setzt mit Lg2, Sc3 und d4 oder e4 fort und " +
      "hat freie Hand.",
  },

  "1.c4 e6 2.g3 b5": {
    strategy:
      "Opfert nach 3.cxb5 einen Bauern in der Hoffnung auf ...Lb7 entlang der offenen langen " +
      "Diagonale gegen den Turm h1. Weiß begegnet dem mit 4.Sf3 oder 4.f3 und behält den " +
      "Mehrbauern, sodass Schwarz wenig dafür vorzuweisen hat.",
  },

  "1.c4 e6 2.g3 f6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6, öffnet die Diagonale e8-h5 zum König und lässt e6 " +
      "ohne die Stütze des f-Bauern, alles ohne eine Figur zu entwickeln. Weiß gewinnt mit " +
      "Lg2, Sc3 und d4 oder e4 Zeit.",
  },

  "1.c4 e6 2.g3 g5": {
    strategy:
      "Lockert die Deckung des Königs, lässt f6 und h6, die der g-Bauer gedeckt hat, ohne " +
      "Bauernschutz und entwickelt nichts. Weiß gewinnt mit d4 Zeit, da dann der Läufer c1 " +
      "den Bauern angreift, und kann mit h4 Linien öffnen.",
  },

  "1.c4 e6 2.g3 h6": {
    strategy:
      "Verwendet ein Tempo auf die Deckung von g5, wohin noch keine weiße Figur gelangen " +
      "kann, und entwickelt weder eine Figur, noch beansprucht er das Zentrum. Weiß spielt in " +
      "aller Ruhe Lg2, Sc3 und d4.",
  },

  "1.c4 e6 2.g3 h5": {
    strategy:
      "Bereitet ...h4 gegen g3 vor, verbraucht aber ein Tempo für einen Flankenvorstoß, der " +
      "g5 und den Königsflügel schwächt und nichts entwickelt. Weiß spielt Lg2, Sc3 und d4 " +
      "oder h4, um die Idee endgültig zu unterbinden.",
  },

  "1.c4 e6 2.g3 e5": {
    strategy:
      "Zieht den e-Bauern zweimal und erreicht die Stellung nach 1.c4 e5 2.g3, aber mit Weiß " +
      "am Zug, sodass Schwarz gegenüber Sizilianisch im Anzug ein volles Tempo verliert. Das " +
      "Bauernzentrum ist gesund, doch Weiß entwickelt sich mit Lg2 und Sc3 und hat einen Zug " +
      "mehr.",
  },

  "1.c4 e6 2.g3 Qh4": {
    strategy:
      "Stellt die Dame auf ein Feld, das der Bauer g3 angreift, sodass 3.gxh4 sie ohne " +
      "Gegenwert gewinnt.",
  },

  "1.c4 e6 2.g3 Ke7": {
    strategy:
      "Gibt das Rochaderecht endgültig auf und verstellt den Läufer f8 und die Diagonale " +
      "d8-h4 der Dame, ohne etwas dafür zu bekommen. Weiß entwickelt sich mit Lg2, Sc3 und " +
      "d4, während der König im Zentrum bleibt.",
  },

  "1.c4 e6 2.g3 Ba3": {
    strategy:
      "Der Läufer steht auf einem Feld, das der Bauer b2 und der Springer b1 angreifen, " +
      "sodass 3.bxa3 oder 3.Sxa3 ihn ohne Gegenwert gewinnt.",
  },
};
