import type { OpeningTexts } from "../book.ts";

// German prose for Nf3-f5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.Nf3 f5 2.d4": {
    strategy:
      "Besetzt das Zentrum und führt in die Holländische Verteidigung, in die Stellung nach " +
      "1.d4 f5 2.Sf3, in der der Springer bereits e5 kontrolliert und den d-Bauern deckt. " +
      "Weiß behält die Wahl zwischen einem Fianchetto mit g3, c4 mit Sc3 oder Lf4 und e3, " +
      "während Schwarz sich zwischen ...e6 für den Stonewall- oder den klassischen Aufbau und " +
      "...g6 für die Leningrader Variante entscheidet. Der Preis dafür ist, dass Schwarz die " +
      "holländische Struktur bekommt, die er angestrebt hat.",
  },

  "1.Nf3 f5 2.g3": {
    strategy:
      "Bereitet Lg2 und die Rochade vor, während die Zentrumsbauern beweglich bleiben: Ein " +
      "späteres d4 führt in eine Fianchetto-Variante der Holländischen Verteidigung, c4 oder " +
      "d3 mit späterem e4 halten die Partie eigenständig. Der Läufer auf g2 steht zunächst " +
      "hinter dem Springer f3 und wirkt auf e4 und d5, sobald der Springer zieht. Schwarz " +
      "setzt meist mit ...Sf6 und dann ...e6 oder ...g6 fort.",
  },

  "1.Nf3 f5 2.c4": {
    name: "Englische Eröffnung: Anglo-Holländische Verteidigung",
    strategy:
      "Kontrolliert d5 und bereitet Sc3 sowie g3 mit Lg2 vor, sodass Weiß später mit d4 in " +
      "die Holländische Verteidigung einlenken oder ganz ohne d4 spielen kann. Gegen einen " +
      "Stonewall mit ...e6 und ...d5 drückt der Bauer c4 bereits auf d5. Schwarz entwickelt " +
      "sich meist mit ...Sf6 und wählt dann zwischen ...e6 und ...g6.",
  },

  "1.Nf3 f5 2.e4": {
    name: "Zukertort-Eröffnung: Lisitsin-Gambit",
    background:
      "Benannt nach Georgi Lissizyn, der das Gambit 1931 in der ersten Runde der " +
      "UdSSR-Meisterschaft in Moskau gegen Nikolai Rjumin und beim Meisterturnier in " +
      "Leningrad 1933 gegen Michail Botwinnik spielte. Edward Winter nennt frühere Partien " +
      "mit denselben Zügen, deren älteste Alfred Emil Wolf gegen Max Weiss ist, gespielt am " +
      "12. Mai 1923 in Wien. Der Oxford Companion to Chess bezeichnet das Gambit als " +
      "unternehmungslustig und wahrscheinlich korrekt.",
    strategy:
      "Bietet den e-Bauern an, um Linien gegen den geschwächten schwarzen Königsflügel zu " +
      "öffnen. Nach 2...fxe4 3.Sg5 hat Weiß den Springer zweimal gezogen, doch auf g5 greift " +
      "er e4 an und ist schwer zu vertreiben, und 4.d3 öffnet weitere Linien. Schwarz kann " +
      "mit 2...e5 ablehnen, was ins Lettische Gambit überleitet.",
  },

  "1.Nf3 f5 2.b3": {
    name: "Larsen-Eröffnung: Holländische Variante",
    strategy:
      "Bereitet Lb2 vor, der die lange Diagonale bis g7 ins Visier nimmt, und hält c4, e3 und " +
      "g3 offen. Der Zug ist gesund und flexibel, aber langsamer als 2.d4, 2.g3 oder 2.c4, " +
      "und Schwarz baut ungestört mit ...Sf6 und ...e6 die übliche holländische Struktur auf.",
  },

  "1.Nf3 f5 2.d3": {
    strategy:
      "Bereitet e4 einen Zug später als im Gambit 2.e4 vor, sodass der d-Bauer zurückschlagen " +
      "kann, falls Schwarz dort schlägt, und macht den Läufer c1 frei. Der Zug ist gesund, " +
      "aber langsam, und Schwarz antwortet oft mit 2...d6 oder entwickelt sich mit ...Sf6 und " +
      "...e6.",
  },

  "1.Nf3 f5 2.e3": {
    strategy:
      "Öffnet dem Läufer f1 den Weg nach e2 oder d3 und stützt ein späteres d4, ein solider " +
      "Aufbau gegen die Holländische Verteidigung. Der Zug ist gesund, aber passiv: Der Bauer " +
      "e3 verstellt die Diagonale des Läufers c1 zum Königsflügel, sodass dieser Läufer meist " +
      "b3 und Lb2 braucht, und Schwarz entwickelt sich ungestört mit ...Sf6 und ...e6.",
  },

  "1.Nf3 f5 2.Nc3": {
    strategy:
      "Entwickelt den zweiten Springer und überwacht e4 und d5; er bereitet d4 oder e4 vor, " +
      "ohne schon einen Bauern festzulegen. Nach ...Sf6 und ...e6 kann Weiß mit d4 und der " +
      "Fesselung Lg5 fortsetzen und so holländische Strukturen erreichen. Der Zug ist gesund, " +
      "verstellt aber den c-Bauern, und das schlichte 2.d4 erreicht dieselben Ideen mit mehr " +
      "Auswahl.",
  },

  "1.Nf3 f5 2.a3": {
    strategy:
      "Ein Wartezug, der b4 vorbereitet, aber weder für das Zentrum noch für die Entwicklung " +
      "etwas tut. Schwarz entwickelt sich ungestört mit ...Sf6 und ...e6, während Weiß ein " +
      "Tempo für einen Randbauernzug verbraucht hat.",
  },

  "1.Nf3 f5 2.a4": {
    strategy:
      "Ein langsamer Randbauernzug, der weder eine Figur entwickelt noch um das Zentrum " +
      "kämpft. Er schwächt b4 und gibt Schwarz Zeit, ungestört ...Sf6, ...e6 und ...Le7 zu " +
      "spielen.",
  },

  "1.Nf3 f5 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 auf der langen Diagonale vor, doch der " +
      "Bauer b4 braucht a3 oder c3 gegen ...e6 und ...Lxb4, und das Zentrum bleibt Schwarz " +
      "überlassen. Für das Tempo wird wenig gewonnen, und der Damenflügel ist überdehnt.",
  },

  "1.Nf3 f5 2.c3": {
    strategy:
      "Eine langsame Vorbereitung von d4, die dem Springer b1 das Feld c3 nimmt und nichts " +
      "für den Kampf um e4 tut. Schwarz antwortet mit ...Sf6 und ...e6 und behält e4 unter " +
      "Kontrolle.",
  },

  "1.Nf3 f5 2.h3": {
    strategy:
      "Bereitet g4 vor, um den Bauern f5 zu untergraben, doch der Plan kostet Zeit und " +
      "schwächt den Königsflügel, auf den der weiße König gewöhnlich rochiert. Schwarz " +
      "entwickelt sich einfach mit ...Sf6 und ...e6.",
  },

  "1.Nf3 f5 2.h4": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern, der weder für das Zentrum noch für die " +
      "Entwicklung etwas tut. Der Zug schwächt g4 und den Königsflügel, und Schwarz setzt in " +
      "aller Ruhe mit ...Sf6 und ...e6 fort.",
  },

  "1.Nf3 f5 2.Na3": {
    strategy:
      "Ein Randspringer, der nach c4 oder b5 blickt, aber im Zentrum nichts deckt und den " +
      "a-Bauern blockiert. Schwarz entwickelt sich natürlich mit ...Sf6 und ...e6.",
  },

  "1.Nf3 f5 2.Rg1": {
    strategy:
      "Bereitet g4 gegen den Bauern f5 vor, doch Weiß gibt das Recht zur kurzen Rochade auf " +
      "und verwendet ein Tempo auf den Turm, statt Figuren zu entwickeln. Schwarz setzt " +
      "einfach mit ...Sf6 und ...e6 fort.",
  },

  "1.Nf3 f5 2.Ng5": {
    strategy:
      "Zieht den bereits entwickelten Springer erneut und lädt zu ...h6 oder zu ...e5 ein, " +
      "das die Diagonale der Dame nach g5 öffnet, jeweils mit Tempogewinn. Der Springer muss " +
      "bald nach f3 zurück oder an den Rand nach h3, während Schwarz das Zentrum aufbaut.",
  },

  "1.Nf3 f5 2.Nh4": {
    strategy:
      "Greift den ungedeckten Bauern f5 an, doch 2...e6 deckt ihn und öffnet die Diagonale " +
      "der Dame nach h4, sodass der Springer nach f3 zurück muss oder mit g3 gestützt wird. " +
      "So oder so hat Weiß zusätzliche Züge mit einer Figur verbraucht, während Schwarz sich " +
      "entwickelt.",
  },

  "1.Nf3 f5 2.Ne5": {
    strategy:
      "Stellt den Springer auf ein Zentrumsfeld, doch 2...d6 vertreibt ihn mit Tempogewinn. " +
      "Er muss nach f3, d3 oder c4 zurück, der dritte Zug mit derselben Figur, während " +
      "Schwarz sich entwickelt.",
  },

  "1.Nf3 f5 2.Nd4": {
    strategy:
      "Greift den ungedeckten Bauern f5 an, doch 2...e6 deckt ihn ohne Kosten, und danach " +
      "wird der Springer zur Zielscheibe von ...c5. Weiß hat zwei Züge mit derselben Figur " +
      "verbraucht, und Schwarz gewinnt Zeit.",
  },

  "1.Nf3 f5 2.Ng1": {
    strategy:
      "Zieht den Springer auf sein Ausgangsfeld zurück und macht so den ersten Zug " +
      "rückgängig. Schwarz hat ...f5 umsonst und baut sofort mit ...Sf6, ...e6 und ...d5 das " +
      "Zentrum gegen eine unentwickelte Stellung auf.",
  },

  "1.Nf3 f5 2.g4": {
    strategy:
      "Bietet einen Bauern an, doch 2...fxg4 greift den Springer f3 an, der wegziehen muss, " +
      "und Weiß hat keine dauerhafte Kompensation für den Bauern. Der Königsflügel ist für " +
      "immer geschwächt, und keine neue Figur kommt ins Spiel.",
  },

  "1.Nf3 f5": {
    name: "Zukertort-Eröffnung: Holländische Variante",
    background:
      "1...f5 ist der Zug der Holländischen Verteidigung (1.d4 f5), die Elias Stein, ein " +
      "Elsässer, der sich in Den Haag niedergelassen hatte, in seinem Buch „Nouvel essai sur " +
      "le Jeu des échecs“ von 1789 als beste Antwort auf 1.d4 empfahl.",
  },

  "1.Nf3 f5 2.g3 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, wo er e4 und h5 kontrolliert und " +
      "jeden holländischen Aufbau offenhält: …e6 mit …d5 für den Stonewall, …g6 mit …Lg7 für " +
      "das Leningrader System oder …e6 mit …d6 für den klassischen Aufbau. Weiß antwortet " +
      "meist mit Lg2, Rochade und d3 oder d4 mit c4, und 3.Sh4 gegen den ungedeckten Bauern " +
      "f5 begegnet Schwarz mit …e6 oder …g6.",
  },

  "1.Nf3 f5 2.g3 e6": {
    strategy:
      "Deckt f5 und macht den Läufer f8 für …Le7 oder …Ld6 und die Rochade frei, …Sf6 folgt. " +
      "Schwarz behält die Wahl zwischen einem Stonewall mit …d5 und einem klassischen Aufbau " +
      "mit …d6 und …De8. Der Preis ist der Läufer c8, der hinter dem Bauern e6 eingesperrt " +
      "bleibt, bis …b6 und …Lb7 oder …d6 und ein späteres …e5 ihm Raum geben.",
  },

  "1.Nf3 f5 2.g3 g6": {
    strategy:
      "Deckt f5 und h5 und bereitet …Lg7, …Sf6 und die schnelle Rochade vor, die Leningrader " +
      "Aufstellung mit dem Läufer auf der langen Diagonale. …d6 und …De8 bleiben in Reserve. " +
      "Mit den vorgerückten f- und g-Bauern fehlt e6 nach …d6 jede Bauerndeckung, und die " +
      "weißen Springer steuern dieses Feld oft über g5 oder d4 an.",
  },

  "1.Nf3 f5 2.g3 d5": {
    strategy:
      "Kontrolliert sofort e4 und c4 und öffnet den Läufer c8, sodass er f5 deckt, mit Kurs " +
      "auf einen Stonewall mit …Sf6, …e6 und …c6. Das Zentrum ist festgelegt, bevor die " +
      "Figuren draußen sind, und …e6 sperrt den Läufer später wieder ein, sodass Weiß mit Lg2 " +
      "und Rochade entwickelt und dann mit c4 oder mit d3 und e4 gegen d5 vorgeht.",
  },

  "1.Nf3 f5 2.g3 d6": {
    strategy:
      "Öffnet den Läufer c8 zur Deckung von f5 und bereitet …Sf6, …g6 und …Lg7 oder …e5 vor. " +
      "Der Zug ist flexibel, aber langsam, da noch keine Figur entwickelt ist, sodass Weiß " +
      "mit Lg2, Rochade, d4 und c4 das Zentrum aufbauen kann, während Schwarz noch seinen " +
      "Aufbau wählt.",
  },

  "1.Nf3 f5 2.g3 c5": {
    strategy:
      "Beansprucht d4 und Raum am Damenflügel für einen sizilianisch geprägten Aufbau mit " +
      "…Sc6, …Sf6 und …e6 oder …g6. Für den Bauern f5 tut der Zug nichts, er braucht gegen " +
      "Sh4 weiterhin eine Deckung wie …e6 oder …g6, und Weiß kann rochieren und zwischen d3 " +
      "mit e4 und d4 wählen.",
  },

  "1.Nf3 f5 2.g3 c6": {
    strategy:
      "Bereitet …d5 mit dem c-Bauern dahinter vor, die übliche Stonewall-Formation, …Sf6 und " +
      "…e6 folgen. Der Zug entwickelt nichts und lässt f5 ungedeckt, sodass 3.Sh4 sofort …e6, " +
      "…g6 oder …d5 verlangt, während Weiß rochiert und zwischen d3 mit e4 und d4 wählt.",
  },

  "1.Nf3 f5 2.g3 Nc6": {
    strategy:
      "Entwickelt sofort eine Figur und nimmt d4 und e5 ins Visier, mit …Sf6 und …e5 oder …d5 " +
      "als Fortsetzung. Der Springer steht auf dem Feld des c-Bauern, sodass der " +
      "Stonewall-Aufbau mit …c6 entfällt, und Weiß kann nach Lg2 und Rochade mit d4 Raum " +
      "gewinnen.",
  },

  "1.Nf3 f5 2.g3 b6": {
    strategy:
      "Bereitet …Lb7 vor, der sich dem kommenden weißen Lg2 auf der langen Diagonale " +
      "entgegenstellt und e4, das Schlüsselfeld der Holländischen Verteidigung, zusätzlich " +
      "deckt. Der Zug entwickelt noch keine Figur und lässt f5 gegen Sh4 ungedeckt, sodass " +
      "bald eine Deckung wie …e6 folgen muss.",
  },

  "1.Nf3 f5 2.g3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 ins Auge fasst, aber weit vom Zentrum " +
      "steht und den a-Bauern blockiert. Das kostet ein Tempo für wenig, und f5 bleibt " +
      "ungedeckt, während Weiß Lg2, Rochade und d4 oder c4 spielt.",
  },

  "1.Nf3 f5 2.g3 Nh6": {
    strategy:
      "Steuert über den Rand f7 an, ein langsamer Weg für einen Springer, der f6 mit einem " +
      "Zug erreichen könnte. Nach 3.d4 zielt der Läufer c1 auf h6, und Lxh6 gxh6 hinterließe " +
      "Schwarz isolierte Doppelbauern auf der h-Linie, sodass der Springer bald einen " +
      "weiteren Zug für …Sf7 aufwendet.",
  },

  "1.Nf3 f5 2.g3 a6": {
    strategy:
      "Ein Tempo für einen Randzug ohne Aufgabe, bestenfalls zur Vorbereitung von …b5. Der " +
      "Zug deckt f5 nicht, sodass 3.Sh4 sofort …e6, …g6 oder …d5 verlangt, während Weiß mit " +
      "Lg2 und Rochade fortsetzt.",
  },

  "1.Nf3 f5 2.g3 a5": {
    strategy:
      "Verhindert b4 und gewinnt Raum für …a4, schwächt aber b5 und entwickelt nichts. Weiß " +
      "spielt Lg2, Rochade und d3 oder d4 mit c4, und Sh4 kann den ungedeckten Bauern f5 " +
      "angreifen.",
  },

  "1.Nf3 f5 2.g3 b5": {
    strategy:
      "Überdehnt den Damenflügel, bevor eine einzige Figur entwickelt ist. Der Bauer schwächt " +
      "c5 und c6 und kann mit a4 angegriffen werden, während Weiß aus einem stabilen Zentrum " +
      "heraus mit Lg2 und Rochade entwickelt.",
  },

  "1.Nf3 f5 2.g3 h6": {
    strategy:
      "Nimmt den weißen Figuren das Feld g5, ist aber langsam, entwickelt nichts und lässt f5 " +
      "ungedeckt. Weiß spielt Lg2 und Rochade oder sofort Sh4 gegen f5.",
  },

  "1.Nf3 f5 2.g3 h5": {
    strategy:
      "Gewinnt Raum und bereitet …h4 vor, doch der Bauer g3 und der Springer f3 kontrollieren " +
      "h4, sodass der Vorstoß nur einen Bauern kostet. Zudem greift 3.Sh4 den ungedeckten " +
      "Bauern f5 an, und Schwarz muss zuerst darauf antworten.",
  },

  "1.Nf3 f5 2.g3 Kf7": {
    strategy:
      "Gibt die Rochade ohne Not auf und stellt den König nach f7, wo ihm 3.Sg5+ sofort " +
      "Schach bietet. Der König braucht weitere Züge, um in Sicherheit zu kommen, während " +
      "Weiß mit Lg2, Rochade und d4 entwickelt.",
  },

  "1.Nf3 f5 2.g3 e5": {
    strategy:
      "Rückt einen zweiten Bauern vor, doch nichts deckt e5, sodass 3.Sxe5 ihn einfach " +
      "gewinnt. Nach …De7 oder …d6 zieht sich der Springer zurück oder wird durch d4 " +
      "gestützt, und Weiß bleibt einen Bauern voraus.",
  },

  "1.Nf3 f5 2.g3 g5": {
    strategy:
      "Gibt den g-Bauern für nichts her: 3.Sxg5 gewinnt ihn, da nichts g5 deckt, und …h6 jagt " +
      "den Springer nur nach f3 zurück. Der Bauer ist weg und der Königsflügel dauerhaft " +
      "geschwächt.",
  },

  "1.Nf3 f5 2.g3 f4": {
    strategy:
      "Greift g3 an, verliert aber einfach einen Bauern: 3.gxf4 gewinnt ihn, und die weißen " +
      "f-Doppelbauern sind keine Kompensation für Schwarz, der noch nichts entwickelt hat.",
  },

  "1.Nf3 f5 2.c4 Nf6": {
    background:
      "Dieselbe Stellung entsteht nach 1.c4 f5 2.Sf3 Sf6. Nach 1.c4 f5 führt 2.d4 in die " +
      "Holländische Verteidigung; nach den anderen Möglichkeiten von Weiß, 2.Sc3, 2.Sf3 und " +
      "2.g3, spielt Schwarz meist ...Sf6.",
    strategy:
      "Entwickelt eine Figur, kontrolliert neben dem f-Bauern ebenfalls e4 und dazu d5 und " +
      "hält jeden Aufbau offen: ...e6 mit ...Le7 und ...O-O, ...e6 und ...d5 für den " +
      "Stonewall-Aufbau oder ...g6 und ...Lg7 für das Leningrader System. Weiß setzt meist " +
      "mit g3 und Lg2 fort, etwa 3.g3 g6 4.Lg2 Lg7 5.O-O O-O, oder spielt d4 und lenkt in die " +
      "Holländische Verteidigung ein.",
  },

  "1.Nf3 f5 2.c4 e6": {
    strategy:
      "Macht den Läufer f8 frei und bereitet entweder einen Stonewall-Aufbau mit ...d5, ...c6 " +
      "und ...Ld6 oder einen klassischen Aufbau mit ...Sf6, ...Le7 und ...O-O vor. Nach 3.g3 " +
      "Sf6 4.Lg2 Le7 rochieren beide Seiten, während 3.d4 in eine Holländische Verteidigung " +
      "überleitet, in der c4 und Sf3 bereits gespielt sind. Der Preis ist ein hinter dem " +
      "Bauern e6 eingesperrter Läufer c8 und im Stonewall ein Loch auf e5, das kein schwarzer " +
      "Bauer mehr decken kann.",
  },

  "1.Nf3 f5 2.c4 g6": {
    strategy:
      "Bereitet das Leningrader System vor, mit dem Läufer auf g7 auf der langen Diagonale, " +
      "...Sf6 und ...O-O, danach ...d6 und ...e5 oder ...c6. Nach 3.g3 Lg7 4.Lg2 Sf6 5.O-O " +
      "O-O hat Schwarz die Leningrader Struktur, während Weiß den d-Bauern noch zurückhält, " +
      "und 3.d4 steuert das Leningrader System der Holländischen Verteidigung an. Der Preis " +
      "ist ein gelockerter Königsflügel, da f- und g-Bauer beide ihre Ausgangsfelder " +
      "verlassen haben.",
  },

  "1.Nf3 f5 2.c4 Nc6": {
    strategy:
      "Entwickelt mit Druck auf d4 und e5 und bereitet ...e5 vor, nimmt aber dem Bauern das " +
      "Feld c6, schließt damit einen Stonewall mit ...c6 aus und tut nichts für die Kontrolle " +
      "von e4. Weiß baut bequem mit d4, Sc3 und g3 auf, und ein späteres d4-d5 kann den " +
      "Springer vertreiben.",
  },

  "1.Nf3 f5 2.c4 d6": {
    strategy:
      "Bereitet ...e5 vor und öffnet die Diagonale des Läufers c8 sowie das Feld d7 für den " +
      "Springer; ...d6 gehört sowohl zum Klassischen System als auch zum Leningrader System. " +
      "Der Zug entwickelt jedoch keine Figur und lässt Weiß die Wahl zwischen d4 mit Sc3 und " +
      "g3 mit Lg2. Schwarz kann ...d6 auch später spielen, wenn ...Sf6 und ...e6 oder ...g6 " +
      "den Aufbau festgelegt haben.",
  },

  "1.Nf3 f5 2.c4 c6": {
    strategy:
      "Bereitet ...d5 vor, gestützt durch den c-Bauern, für einen Stonewall-Aufbau mit ...e6 " +
      "und ...Sf6. Der Zug entwickelt keine Figur und nimmt dem Springer b8 das Feld c6, " +
      "sodass er nach d7 oder a6 muss, während Weiß sich frei mit d4, Sc3 und g3 entwickelt.",
  },

  "1.Nf3 f5 2.c4 b6": {
    strategy:
      "Bereitet ...Lb7 vor, der von der langen Diagonale aus gemeinsam mit dem f-Bauern e4 " +
      "kontrolliert. Der Zug ist langsam und entwickelt keine Figur, und Weiß kann dem Läufer " +
      "mit g3 und Lg2 entgegentreten oder mit d4 und Sc3 das Zentrum besetzen.",
  },

  "1.Nf3 f5 2.c4 c5": {
    strategy:
      "Kontrolliert d4, entwickelt aber nichts, und 3.d4 cxd4 4.Sxd4 öffnet das Zentrum, " +
      "während die schwarzen Figuren noch zu Hause stehen, wobei der Springer auf d4 bereits " +
      "den Bauern f5 angreift. Weiß kann sich auch einfach mit Sc3 und g3 entwickeln.",
  },

  "1.Nf3 f5 2.c4 d5": {
    strategy:
      "Fordert das Zentrum sofort heraus, doch nach 3.cxd5 muss Schwarz Zeit aufwenden, um " +
      "den Bauern zurückzugewinnen, und auf 3...Dxd5 folgt 4.Sc3 mit Tempo. Zusammen mit " +
      "...f5 lässt der Zug e5 und e6 ohne Bauerndeckung.",
  },

  "1.Nf3 f5 2.c4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er nach vorn nur b4 und c5 erreicht, fern von e4 " +
      "und d5, den Feldern, um die Schwarz kämpfen muss. Weiß baut mit d4, Sc3 und g3 auf, " +
      "während der Springer noch einen Zug braucht, um aktiv zu werden.",
  },

  "1.Nf3 f5 2.c4 Nh6": {
    strategy:
      "Ein Randspringer, der f5 deckt, aber fern vom Zentrum steht und nichts für e4 oder d5 " +
      "tut. Sobald Weiß d4 oder d3 spielt, zielt der Läufer c1 auf h6, und Lxh6 gxh6 " +
      "hinterließe Schwarz einen isolierten Doppelbauern auf der h-Linie.",
  },

  "1.Nf3 f5 2.c4 a6": {
    strategy:
      "Bereitet ...b5 gegen den Bauern c4 vor, entwickelt aber nichts und hilft nicht bei der " +
      "Kontrolle von e4, sodass Weiß in aller Ruhe mit d4 und Sc3 das Zentrum besetzt.",
  },

  "1.Nf3 f5 2.c4 a5": {
    strategy:
      "Verhindert b4 und gewinnt Raum am Damenflügel, entwickelt aber nichts und überlässt " +
      "Weiß das Zentrum, der mit d4 und Sc3 fortsetzt.",
  },

  "1.Nf3 f5 2.c4 h6": {
    strategy:
      "Ein langsamer Zug, der ...g5 vorbereitet und Lg5 verhindert, sobald der d-Bauer " +
      "gezogen hat, aber nichts entwickelt und g6 schwächt. Weiß setzt mit d4 und Sc3 fort.",
  },

  "1.Nf3 f5 2.c4 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel, entwickelt aber nichts und lässt, da der f-Bauer f7 " +
      "bereits verlassen hat, g5 und g6 dauerhaft ohne Bauerndeckung. Weiß antwortet in aller " +
      "Ruhe mit d4 und Sc3.",
  },

  "1.Nf3 f5 2.c4 f4": {
    strategy:
      "Gewinnt Raum gegen e3 und g3, doch keine Figur stützt den Bauern: 3.d4 öffnet die " +
      "Diagonale des Läufers c1 gegen ihn, und ...g5 zu seiner Deckung erlaubt Sxg5. Weiß, in " +
      "der Entwicklung voraus, kann ihn auch mit e3 oder g3 untergraben.",
  },

  "1.Nf3 f5 2.c4 b5": {
    strategy:
      "Gibt einen Bauern weg: 3.cxb5 schlägt ihn, und ohne entwickelte Figur kann Schwarz die " +
      "geöffneten Linien nicht nutzen, sodass Weiß einfach einen Bauern mehr behält.",
  },

  "1.Nf3 f5 2.c4 Kf7": {
    strategy:
      "Gibt das Rochaderecht endgültig auf und entwickelt nichts. Auf f7 kann der König von " +
      "einem Springer auf g5 oder e5 Schach erhalten, etwa nach 3.e4 fxe4 4.Sg5+, das ihn " +
      "weitertreibt und den Bauern zurückgewinnt.",
  },

  "1.Nf3 f5 2.c4 e5": {
    strategy:
      "Lässt den Bauern ungedeckt: 3.Sxe5 gewinnt ihn sofort, und ...De7 oder ...Df6 gewinnt " +
      "danach Zeit gegen den Springer, aber nicht den Bauern zurück.",
  },

  "1.Nf3 f5 2.c4 g5": {
    strategy:
      "Verliert sofort einen Bauern: 3.Sxg5 schlägt den ungedeckten Bauern und nimmt h7 und " +
      "e6 ins Visier, während der Vorstoß den Königsflügel umsonst geschwächt hat.",
  },
};
