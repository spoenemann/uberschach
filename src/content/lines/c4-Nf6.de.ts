import type { OpeningTexts } from "../book.ts";

// German prose for c4-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.c4 Nf6 2.Nc3": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung, Damenspringer-Variante",
    background:
      "Auf 2...d5 kann Weiß mit 3.cxd5 Sxd5 4.g3 antworten, sodass Schwarz keine " +
      "Grünfeld-Verteidigung erzwingen kann; Michail Botwinnik spielte diese Variante 1958 " +
      "mehrfach in seinem Weltmeisterschaftskampf gegen Wassili Smyslow.",
    strategy:
      "Entwickelt den Springer Richtung Zentrum, wo er d5 und e4 kontrolliert, und hält e4, " +
      "g3 und d4 offen. Gegen ...e6 oder ...g6 kann Weiß mit e4 das Zentrum besetzen, mit g3 " +
      "und Lg2 den üblichen englischen Aufbau wählen oder mit d4 in eine indische Struktur " +
      "übergehen. Der Preis ist, dass d4 nun nach ...e6 und ...Lb4 die Nimzo-Indische " +
      "Verteidigung zulässt, und Schwarz kann mit ...d5 oder ...e5 sofort um das Zentrum " +
      "kämpfen.",
  },

  "1.c4 Nf6 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer, überwacht d4 und e5 und lässt die Wahl zwischen d4, g3 " +
      "und Sc3 offen, bis der schwarze Aufbau feststeht. Gegen ...e6 und ...b6 steuert er " +
      "eine damenindische Struktur an, gegen ...g6 einen Fianchetto-Aufbau, und d4 macht " +
      "daraus ein Damengambit oder eine indische Partie. Der Zug legt sich wenig fest, lässt " +
      "Schwarz aber die freie Wahl des Verteidigungssystems.",
  },

  "1.c4 Nf6 2.d4": {
    strategy:
      "Besetzt das Zentrum mit einem Bauern und führt zur Stellung nach 1.d4 Sf6 2.c4 mit " +
      "Schwarz am Zug. Schwarz wählt zwischen ...e6 für Damengambit, Damenindisch oder " +
      "Nimzo-Indisch, ...g6 für königsindische und Grünfeld-Strukturen und ...c5 für eine " +
      "Partie vom Benoni-Typ. Weiß erhält das klassische Bauernpaar c4 und d4 und mehr Raum, " +
      "muss aber auf jede dieser Verteidigungen vorbereitet sein, die Schwarz wählt.",
  },

  "1.c4 Nf6 2.g3": {
    strategy:
      "Bereitet Lg2 vor, der auf d5 und entlang der langen Diagonale bis b7 wirkt, und hält " +
      "Sc3, Sf3 und d4 in Reserve. Gegen ...e6 und ...d5 entstehen mit Sf3 Stellungen nach " +
      "Art der Katalanischen Eröffnung, gegen ...g6 ein symmetrisches Fianchetto und gegen " +
      "...e5 mit Sc3 Sizilianisch im Anzuge. Der Preis ist, dass das weiße Zentrum unbesetzt " +
      "bleibt und Schwarz den Bauern c4 sofort mit ...c6 und ...d5 angreifen kann.",
  },

  "1.c4 Nf6 2.e3": {
    strategy:
      "Öffnet den Läufer f1 und unterstützt d4, mit Damengambit- oder " +
      "Nimzo-Indisch-Strukturen nach Sc3 und d4 oder mit b3 und Lb2 als Ziel. Der Zug ist " +
      "solide, aber langsam, und legt den e-Bauern fest, bevor der schwarze Aufbau bekannt " +
      "ist; Schwarz kann mit ...e5 oder ...d5 Raum gewinnen und sich frei entwickeln.",
  },

  "1.c4 Nf6 2.b3": {
    strategy:
      "Bereitet Lb2 vor, der auf e5 und die lange Diagonale wirkt, stützt den Bauern c4 und " +
      "hält e3, Sf3 und d4 offen. Der Zug ist solide, aber langsam: Das Zentrum bleibt " +
      "unbesetzt, und Schwarz kann es mit ...e5 oder ...d5 besetzen oder mit ...g6 die " +
      "Diagonale streitig machen.",
  },

  "1.c4 Nf6 2.d3": {
    strategy:
      "Unterstützt ein späteres e4 und öffnet den Läufer c1, mit g3, Lg2 und Sc3 als " +
      "Fortsetzung. Der Zug ist solide, aber bescheiden: d4 kostet nun ein zusätzliches " +
      "Tempo, sodass Schwarz mit ...e5 oder ...d5 das Zentrum besetzen und sich frei " +
      "entwickeln kann.",
  },

  "1.c4 Nf6 2.Qc2": {
    strategy:
      "Deckt den Bauern c4 und bereitet e4 vor, entwickelt aber keine Leichtfigur und stellt " +
      "die Dame dorthin, wo ...Sc6 nebst ...Sb4 sie mit Tempogewinn angreifen kann. Schwarz " +
      "besetzt mit ...e5 oder ...d5 das Zentrum, während Weiß noch nicht bereit ist.",
  },

  "1.c4 Nf6 2.Qb3": {
    strategy:
      "Zielt auf b7 und deckt den Bauern c4, doch der Läufer c8 deckt b7 bereits, und keine " +
      "Leichtfigur wird entwickelt. ...Sc6 nebst ...Sa5 greift dann Dame und Bauern c4 mit " +
      "Tempogewinn an, und Schwarz besetzt das Zentrum, während Weiß umgruppiert.",
  },

  "1.c4 Nf6 2.Qa4": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel und droht nichts, da der Turm a7 " +
      "deckt. Die Dame fesselt den Bauern d7 vorübergehend, doch ...c6 hebt die Fesselung auf " +
      "und bereitet ...d5 vor, und Schwarz entwickelt sich frei, während die Dame am Rand " +
      "steht.",
  },

  "1.c4 Nf6 2.Na3": {
    strategy:
      "Deckt den Bauern c4 und kann weiter nach c2 oder b5, doch auf a3 kontrolliert der " +
      "Springer kein Zentrumsfeld. Schwarz besetzt unterdessen mit ...e5 oder ...d5 das " +
      "Zentrum.",
  },

  "1.c4 Nf6 2.Nh3": {
    strategy:
      "Entwickelt den Springer am Rand auf dem Weg nach f4 und lässt das Zentrum unberührt. " +
      "Sobald Schwarz den d-Bauern gezogen hat, kann ...Lxh3 die weißen h-Bauern verdoppeln, " +
      "und f3 wäre das natürliche Feld für den Springer gewesen.",
  },

  "1.c4 Nf6 2.a3": {
    strategy:
      "Nimmt den schwarzen Figuren das Feld b4 und bereitet b4 vor, verbraucht aber ein " +
      "Tempo, ohne etwas zu entwickeln oder das Zentrum zu berühren. Schwarz gewinnt mit " +
      "...e5 oder ...d5 Raum.",
  },

  "1.c4 Nf6 2.a4": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel, entwickelt aber nichts und gibt das Feld b4 " +
      "endgültig auf, auf dem sich ein schwarzer Springer oder Läufer festsetzen kann. " +
      "Schwarz besetzt unterdessen mit ...e5 oder ...d5 das Zentrum.",
  },

  "1.c4 Nf6 2.b4": {
    name: "Englischer Orang-Utan",
    strategy:
      "Rückt den b-Bauern auf ein Feld vor, auf dem ihn nichts deckt: Nach ...e6 oder ...e5 " +
      "greift ihn der Läufer f8 an, und Weiß muss ein weiteres Tempo für a3, Db3 oder b5 " +
      "aufwenden oder ihn aufgeben. Die Entwicklung bleibt zurück, während Schwarz das " +
      "Zentrum besetzt.",
  },

  "1.c4 Nf6 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer das Feld f3, schwächt die Diagonale e1-h4 und " +
      "entwickelt nichts. Schwarz entwickelt sich frei und besetzt mit ...e5 oder ...d5 das " +
      "Zentrum.",
  },

  "1.c4 Nf6 2.f4": {
    name: "Bird-Eröffnung: Mujannah",
    strategy:
      "Gewinnt Raum am Königsflügel und kontrolliert e5, öffnet aber die Diagonale e1-h4 zum " +
      "König und entwickelt nichts. Schwarz entwickelt sich natürlich mit ...d5, ...g6 oder " +
      "...d6 und ...e5.",
  },

  "1.c4 Nf6 2.h3": {
    strategy:
      "Verhindert ...Sg4 und ...Lg4, ist aber ein langsamer Wartezug, der nichts entwickelt. " +
      "Schwarz besetzt mit ...e5 oder ...d5 das Zentrum.",
  },

  "1.c4 Nf6 2.h4": {
    strategy:
      "Verbraucht ein Tempo am Brettrand, schwächt das Feld g3, entwickelt keine Figur und " +
      "tut nichts für das Zentrum. Schwarz gewinnt mit ...e5 oder ...d5 Raum.",
  },

  "1.c4 Nf6 2.c5": {
    strategy:
      "Gewinnt Raum, zieht aber denselben Bauern zweimal und gibt die Kontrolle über d5 auf. " +
      "Der Bauer c5 ist ungedeckt: ...e6 oder ...e5 öffnet den Läufer f8 gegen ihn, und ...b6 " +
      "untergräbt ihn, während Weiß nichts entwickelt hat.",
  },

  "1.c4 Nf6 2.g4": {
    strategy:
      "Stellt einen Bauern ein: 2...Sxg4 gewinnt ihn sofort, da nichts g4 deckt, und h3 " +
      "treibt den Springer nur auf ein gutes Feld wie e5. Der Königsflügel ist geschwächt, " +
      "ohne dass Weiß dafür einen Entwicklungsvorsprung erhält.",
  },

  "1.c4 Nf6 2.e4": {
    strategy:
      "Bietet den e-Bauern an: Schwarz gewinnt mit 2...Sxe4 einfach einen Bauern, und " +
      "schnelle Entwicklung wie Sc3 oder De2 holt ihn nicht zurück, da der Springer sich nach " +
      "f6 oder c5 zurückziehen kann.",
  },

  "1.c4 Nf6": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung",
    background:
      "Die häufigste Antwort auf 1.c4; die Encyclopaedia of Chess Openings ordnet ihre " +
      "eigenständigen Abspiele unter A15–A19 ein.",
  },

  "1.c4 Nf6 2.Nc3 e6": {
    name: "Englische Eröffnung: Anglo-Indische Verteidigung, Igel-System",
    background:
      "Die Ideen des Igel-Aufbaus wurden ursprünglich in der Englischen Eröffnung entwickelt, " +
      "und in den 1970er-Jahren wurde er erstmals ausführlich analysiert. Bobby Fischer " +
      "wählte ihn mit Weiß gegen Ulf Andersson in Siegen 1970, in einer der ersten Partien " +
      "mit diesem Aufbau, und sein vernichtender Sieg beeindruckte Andersson so sehr, dass er " +
      "später selbst einer der bedeutendsten Vertreter des Igels wurde.",
    strategy:
      "Öffnet die Diagonale des Läufers f8 und hält Schwarz flexibel. Nach 3.d4 entsteht mit " +
      "3...Lb4 die Nimzo-Indische Verteidigung oder mit 3...d5 das Abgelehnte Damengambit; " +
      "nach 3.Sf3 kann Schwarz zwischen ...d5, ...b6, ...c5 und ...Lb4 wählen, und ein Aufbau " +
      "mit ...c5, ...b6, ...Lb7 und ...d6 bleibt möglich. Weiß kann mit 3.e4 auch sofort Raum " +
      "gewinnen. Der Preis ist der Läufer c8, den der Bauer e6 einsperrt, bis ...b6 ihm die " +
      "lange Diagonale öffnet.",
  },

  "1.c4 Nf6 2.Nc3 e5": {
    strategy:
      "Beansprucht das Zentrum und führt durch Zugumstellung zum Zweispringer-Aufbau von " +
      "Sizilianisch im Anzuge. Nach 3.Sf3 Sc6 entwickeln sich beide Seiten wie im " +
      "Vierspringerspiel, während Schwarz 3.g3 mit ...d5 oder ...Lb4 begegnen kann. Der Bauer " +
      "e5 kontrolliert d4, doch auf das Feld d5 muss Schwarz achten, da der weiße Bauer c4 " +
      "und Sc3 beide darauf zielen.",
  },

  "1.c4 Nf6 2.Nc3 g6": {
    strategy:
      "Bereitet das Fianchetto ...Lg7 und die schnelle Rochade vor und zielt auf Strukturen " +
      "der Königsindischen oder der Grünfeld-Indischen Verteidigung. Nach 3.d4 d5 entsteht " +
      "durch Zugumstellung die Grünfeld-Indische Verteidigung, doch 3.e4 schließt sie aus und " +
      "zwingt Schwarz mit 3...d6 mehr oder weniger in die Königsindische Verteidigung. Der " +
      "Preis ist zunächst Raum im Zentrum, und der Läufer g7 erwacht erst, wenn Schwarz mit " +
      "...d5, ...c5 oder ...e5 das Zentrum angreift.",
  },

  "1.c4 Nf6 2.Nc3 d5": {
    name: "Englische Eröffnung: Anglo-Grünfeld-Verteidigung",
    background:
      "Diese eigenständige Variante der Englischen Eröffnung verläuft in ihrer Entwicklung " +
      "meist bis weit in die Partie hinein parallel zu ihrem Gegenstück nach 1.d4, der " +
      "Grünfeld-Indischen Verteidigung, daher ihr Name. Ernst Grünfeld führte diese " +
      "Verteidigung im April 1922 beim Turnier von Bad Pistyan in die internationale " +
      "Turnierpraxis ein.",
    strategy:
      "Schlägt sofort im Zentrum zu und greift den Bauern c4 an, den Weiß meist mit 3.cxd5 " +
      "Sxd5 abtauscht. Danach bereitet das ruhige 4.g3 Lg2 gegen den Springer und die lange " +
      "Diagonale vor, während 4.e4 den Springer sofort angreift und Schwarz zwischen ...Sb4, " +
      "...Sb6 und ...Sxc3 wählt. Schwarz erhält freies Figurenspiel, um den Preis eines " +
      "zentralisierten Springers, den Weiß mit Tempogewinn verjagen kann.",
  },

  "1.c4 Nf6 2.Nc3 c5": {
    name: "Englische Symmetrievariante",
    strategy:
      "Kontrolliert d4 vom Flügel aus, spiegelbildlich zum weißen c-Bauern. Nach 3.Sf3 d5 " +
      "4.cxd5 Sxd5 kann Weiß das Zentrum mit 5.d4 oder 5.e4 herausfordern oder Schwarz mit " +
      "5.g3 mehr Raum im Zentrum lassen; ...Sc6 mit ...g6 und ...Lg7 ist die ruhigere " +
      "Alternative. In den ruhigeren Varianten ist der Preis das Feld d5, das der Bauer c4 " +
      "und Sc3 bereits ins Visier nehmen und das ein Bauer auf e4 zusätzlich kontrollieren " +
      "würde.",
  },

  "1.c4 Nf6 2.Nc3 Nc6": {
    strategy:
      "Entwickelt mit Kontrolle über d4 und e5 und bereitet ...e5 vor; nach 3.Sf3 e5 entsteht " +
      "durch Zugumstellung die Vierspringervariante von Sizilianisch im Anzuge. Der Springer " +
      "verstellt den c-Bauern, sodass ...c6 den Vorstoß ...d5 nicht mehr stützen kann, und " +
      "nach 3.d4 e5 4.d5 wird der Springer wieder vertrieben.",
  },

  "1.c4 Nf6 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, das den Druck des Springers f6 auf e4 verstärkt; meist folgt " +
      "...e6. Hier deckt der Springer c3 das Feld e4 bereits, sodass Weiß nach 3.e4 Lb7 4.Ld3 " +
      "ein breites Zentrum erhält, das Schwarz mit ...e6 und ...c5 oder ...Lb4 untergraben " +
      "muss.",
  },

  "1.c4 Nf6 2.Nc3 c6": {
    strategy:
      "Bereitet ...d5 mit Bauernunterstützung vor und hält die Diagonale des Läufers c8 " +
      "offen; nach 3.d4 d5 entsteht die Slawische Verteidigung. Weiß kann stattdessen mit " +
      "3.e4 sofort Raum nehmen, und 3...d5 führt dann zu Caro-Kann-ähnlichen Strukturen, in " +
      "denen Schwarz auf 4.e5 oder einen Abtausch auf d5 antworten muss.",
  },

  "1.c4 Nf6 2.Nc3 d6": {
    strategy:
      "Bereitet ...e5 oder ...g6 und ...Lg7 vor und hält die Struktur flexibel; nach 3.d4 " +
      "entsteht mit ...e5 die Altindische und mit ...g6 die Königsindische Verteidigung. Der " +
      "Preis ist Zeit: Weiß kann mit e4 ein breites Bauernzentrum errichten, bevor Schwarz es " +
      "angreift.",
  },

  "1.c4 Nf6 2.Nc3 b5": {
    strategy:
      "Bietet einen Bauern an, den sowohl der Bauer c4 als auch der Springer c3 angreifen: " +
      "Nach 3.cxb5 hat Weiß einfach einen Bauern mehr, und die halboffene b-Linie ist dafür " +
      "kaum Ausgleich.",
  },

  "1.c4 Nf6 2.Nc3 a6": {
    strategy:
      "Bereitet ...b5 vor, ist aber zu langsam: Der Zug tut nichts für Entwicklung oder " +
      "Zentrum, und Weiß antwortet mit e4 oder d4 und nimmt ungehindert Raum ein.",
  },

  "1.c4 Nf6 2.Nc3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und kontrolliert b4, schwächt aber b5 und tut nichts für " +
      "Entwicklung oder Zentrum. Weiß setzt mit e4 oder d4 fort und hat freie Hand.",
  },

  "1.c4 Nf6 2.Nc3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4, c5 und c7 im Blick hat, aber kein " +
      "Zentrumsfeld, und wo er den a-Bauern blockiert. Von c6 aus würde derselbe Springer d4 " +
      "und e5 kontrollieren.",
  },

  "1.c4 Nf6 2.Nc3 h6": {
    strategy:
      "Nimmt einem späteren Lg5 das Feld g5, kostet aber ein Tempo, tut nichts für Zentrum " +
      "oder Entwicklung und lockert den Königsflügel leicht.",
  },

  "1.c4 Nf6 2.Nc3 h5": {
    strategy:
      "Verwendet ein Tempo auf einen Flankenvorstoß, der g5 und g6 schwächt und nichts für " +
      "Zentrum oder Entwicklung tut.",
  },

  "1.c4 Nf6 2.Nc3 Ng8": {
    strategy:
      "Bringt den Springer auf sein Ausgangsfeld zurück und macht den vorigen Zug rückgängig. " +
      "Schwarz hat praktisch zweimal gepasst, sodass Weiß zwei zusätzliche Tempi für " +
      "Entwicklung und Zentrum hat.",
  },

  "1.c4 Nf6 2.Nc3 Ng4": {
    strategy:
      "Zielt auf f2 und h2, doch beide sind gedeckt, und h3 kann den Springer jederzeit " +
      "zurückjagen; Schwarz verliert ein Tempo, während Weiß mit d4 und e4 das Zentrum " +
      "aufbaut.",
  },

  "1.c4 Nf6 2.Nc3 Nh5": {
    strategy:
      "Stellt den Springer an den Rand, wo er f4 und g3 kontrolliert, aber kein Zentrumsfeld. " +
      "Weiß besetzt mit d4 und e4 das Zentrum, und Le2 oder g4 können den Springer später mit " +
      "Tempogewinn vertreiben.",
  },

  "1.c4 Nf6 2.Nc3 g5": {
    strategy:
      "Schwächt den Königsflügel und tut nichts für das Zentrum: Nach 3.d4 greift der Läufer " +
      "c1 den ungedeckten Bauern g5 an, und dessen Deckung mit ...h6 lockert die " +
      "Königsstellung weiter. Zudem verstellt der Springer f6 die lange Diagonale eines " +
      "Läufers auf g7, sodass der Bauer keinen Druck auf d4 unterstützt.",
  },

  "1.c4 Nf6 2.Nc3 Rg8": {
    strategy:
      "Gibt das Recht zur kurzen Rochade endgültig auf und verwendet ein Tempo auf einen " +
      "Turmzug, der nichts für Entwicklung oder Zentrum tut.",
  },

  "1.c4 Nf6 2.Nc3 Ne4": {
    strategy: "Verliert den Springer sofort: 3.Sxe4, und nichts deckt e4.",
  },

  "1.c4 Nf6 2.Nc3 Nd5": {
    strategy:
      "Stellt den Springer gegen 3.cxd5 ein; der Bauer d7 verstellt der Dame das " +
      "Zurückschlagen, sodass Schwarz nichts dafür bekommt.",
  },

  "1.c4 Nf6 2.g3 e6": {
    strategy:
      "Bereitet ...d5 vor und hält mehrere Aufbauten offen: Nach 3.Lg2 d5 4.d4 entsteht eine " +
      "Katalanische Eröffnung, während ...c5 zu Strukturen der Symmetrievariante und ...b6 zu " +
      "damenindischen Strukturen führt. Schwarz erhält ein solides Zentrum und eine flexible " +
      "Bauernstruktur, um den Preis eines Läufers c8, der vorerst hinter dem Bauern e6 " +
      "eingesperrt bleibt.",
  },

  "1.c4 Nf6 2.g3 g6": {
    strategy:
      "Spiegelt das weiße Fianchetto und bereitet ...Lg7 und ...O-O vor. Schwarz errichtet " +
      "dann mit ...d6 und ...e5 ein königsindisches Zentrum oder schlägt im Stil der " +
      "Grünfeld-Verteidigung mit ...d5 zu. Weiß setzt meist mit Lg2 und Sc3 fort und spielt " +
      "entweder d4 mit einer Fianchetto-Variante der Königsindischen Verteidigung oder nimmt " +
      "stattdessen mit e4 und d3 Raum.",
  },

  "1.c4 Nf6 2.g3 c6": {
    strategy:
      "Bereitet ...d5 mit Bauernstütze vor, sodass cxd5 mit ...cxd5 statt ...Sxd5 beantwortet " +
      "werden kann, wo der Springer dem Läufer g2 ausgesetzt wäre. Schwarz erreicht slawische " +
      "Strukturen, in denen der Damenläufer vor ...e6 noch nach f5 oder g4 kommen kann. Der " +
      "c-Bauer ist festgelegt, sodass ein späteres ...c5 ein zusätzliches Tempo kostet.",
  },

  "1.c4 Nf6 2.g3 c5": {
    strategy:
      "Kontrolliert d4 und strebt eine symmetrische Struktur an: Nach 3.Lg2 Sc6 4.Sc3 g6 " +
      "5.Sf3 Lg7 haben beide Seiten fianchettiert. Der Kampf dreht sich um d4 und um die " +
      "Ausdehnung am Damenflügel mit b4 oder ...b5. Weiß behält den Anzugsvorteil und eine " +
      "leichte Initiative, und Schwarz muss dem Druck des Läufers g2 auf der langen Diagonale " +
      "begegnen.",
  },

  "1.c4 Nf6 2.g3 e5": {
    strategy:
      "Besetzt sofort das Zentrum und geht durch Zugumstellung in 1.c4 e5 2.g3 Sf6 über, " +
      "Sizilianisch im Anzuge mit einem Mehrtempo für Weiß. Schwarz setzt mit ...Sc6 und " +
      "entweder ...d5 oder dem ruhigeren ...d6 fort, während Weiß mit Lg2 und Sc3 entwickelt " +
      "und um das Feld d5 kämpft.",
  },

  "1.c4 Nf6 2.g3 d5": {
    strategy:
      "Greift sofort das Zentrum an, doch nach 3.cxd5 Sxd5 4.Lg2 greift der Läufer den " +
      "Springer auf d5 an. Schwarz muss einen Zug für ...Sb6 aufwenden oder den Springer mit " +
      "...c6 oder ...e6 decken, sodass Weiß mit Tempogewinn entwickelt; die Vorbereitung von " +
      "...d5 durch ...c6 oder ...e6 vermeidet das.",
  },

  "1.c4 Nf6 2.g3 Nc6": {
    strategy:
      "Entwickelt eine Figur und bereitet ...e5 vor, das nach 3.Lg2 e5 oder 3.Sc3 e5 zu " +
      "Strukturen von Sizilianisch im Anzuge führt. Der Zug ist solide, aber weniger flexibel " +
      "als ...e6 oder ...c6, da er den c-Bauern verstellt und den Damenspringer festlegt, " +
      "bevor Schwarz den weißen Aufbau kennt.",
  },

  "1.c4 Nf6 2.g3 d6": {
    strategy:
      "Bereitet ...e5 vor und öffnet die Diagonale des Läufers c8, wobei ...g6 und ...Lg7 für " +
      "einen königsindischen Aufbau weiter möglich sind. Der Zug ist solide, aber bescheiden: " +
      "Der Bauer beansprucht weniger Raum im Zentrum als ...d5 oder ...e5, sodass Weiß sich " +
      "mit Lg2, Sc3 und e4 aufbauen und einen kleinen Raumvorteil behalten kann.",
  },

  "1.c4 Nf6 2.g3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, um nach damenindischem Muster die lange Diagonale streitig zu " +
      "machen. Der Zug ist solide, doch nach 3.Lg2 Lb7 4.Sc3 kommen der Vorstoß e4 und die " +
      "weiße Ausdehnung im Zentrum leicht zustande. Schwarz hat im Zentrum weniger mitzureden " +
      "als nach vorherigem ...e6 oder ...c6.",
  },

  "1.c4 Nf6 2.g3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 im Blick hat, aber wenig für das " +
      "Zentrum tut. Er braucht weitere Züge, um nützlich zu werden, etwa ...c6 und ...Sc7, " +
      "während Weiß mit Lg2, Sc3 und e4 Raum gewinnt.",
  },

  "1.c4 Nf6 2.g3 a6": {
    strategy:
      "Langsam, und das vorbereitete ...b5 scheitert taktisch: Sobald der b-Bauer b7 " +
      "verlässt, trifft der Läufer g2 den Turm a8, sodass 3.Lg2 b5 4.Lxa8 den Turm schlägt.",
  },

  "1.c4 Nf6 2.g3 a5": {
    strategy:
      "Ein langsamer Randbauernzug, der b4 erschwert, aber b5 schwächt und weder für das " +
      "Zentrum noch für die Entwicklung etwas tut, während Weiß mit Lg2 und Sc3 fortsetzt.",
  },

  "1.c4 Nf6 2.g3 h6": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauernzug, der weder eine Figur entwickelt noch um " +
      "das Zentrum kämpft. Weiß spielt Lg2, Sc3 und e4 und baut ungehindert einen Raumvorteil " +
      "auf.",
  },

  "1.c4 Nf6 2.g3 h5": {
    strategy:
      "Strebt ...h4 gegen g3 an, doch nach 3.Sf3 verliert der Vorstoß ...h4 einfach einen " +
      "Bauern an Sxh4, da der Bauer g3 den Springer deckt. Zudem schwächt der Zug g5 und " +
      "macht die kurze Rochade weniger attraktiv, während Weiß sich entwickelt.",
  },

  "1.c4 Nf6 2.g3 Ng8": {
    strategy:
      "Nimmt den ersten schwarzen Zug zurück und stellt den Springer auf sein Ausgangsfeld, " +
      "sodass Weiß zwei nützliche Züge gegen keinen gemacht hat und im Zentrum freie Hand " +
      "behält.",
  },

  "1.c4 Nf6 2.g3 Ng4": {
    strategy:
      "Zieht den Springer ein zweites Mal ohne echte Drohung, denn der König deckt f2 und der " +
      "Turm h2. Nach 3.h3 muss er ein drittes Mal ziehen, während Weiß mit Lg2 und Sc3 " +
      "fortsetzt.",
  },

  "1.c4 Nf6 2.g3 Nh5": {
    strategy:
      "Zielt auf g3, doch der Bauer ist durch f2 und h2 gedeckt, sodass nichts droht. Der " +
      "Randspringer lässt sich bedrängen: 3.e4 öffnet der Dame die Diagonale nach h5, und " +
      "Weiß gewinnt Zeit.",
  },

  "1.c4 Nf6 2.g3 Ne4": {
    strategy:
      "Zieht den Springer ein zweites Mal auf ein Feld, auf dem ihn kein Bauer stützt: 3.d3 " +
      "vertreibt ihn sofort, und auch 3.Dc2 oder 3.Lg2 greifen ihn an. Nach 3.Dc2 Sc5 4.d4 " +
      "Se6 5.d5 gewinnt Weiß mit Tempo Raum.",
  },

  "1.c4 Nf6 2.g3 Rg8": {
    strategy:
      "Verbraucht ein Tempo und gibt die kurze Rochade endgültig auf, da der Turm h8 gezogen " +
      "hat, ohne Entwicklung oder Zentrum zu fördern. Weiß entwickelt sich einfach mit Lg2 " +
      "und Sc3 und besetzt das Zentrum.",
  },

  "1.c4 Nf6 2.g3 b5": {
    strategy:
      "Gibt einen Bauern für wenig her: Nach 3.cxb5 ist die lange Diagonale offen, sodass Lg2 " +
      "den Turm a8 angreifen wird und Schwarz Zeit darauf verwenden muss statt auf Druck am " +
      "Damenflügel wie im Wolga-Gambit.",
  },

  "1.c4 Nf6 2.g3 g5": {
    strategy:
      "Schwächt f5, h5 und die künftige Königsstellung, und der Bauer braucht sofort Deckung: " +
      "3.d4 öffnet die Diagonale des Läufers c1 gegen ihn, und auch 3.h4 greift ihn an. Der " +
      "gelockerte Königsflügel bleibt eine dauerhafte Schwäche.",
  },

  "1.c4 Nf6 2.g3 Nd5": {
    strategy:
      "Stellt den Springer ein: Der Bauer c4 greift d5 an, und nichts deckt das Feld, da der " +
      "Bauer d7 die Dame verstellt; 3.cxd5 gewinnt also eine Figur ohne Gegenwert.",
  },
};
