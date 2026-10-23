import type { OpeningTexts } from "../book.ts";

// German prose for e4-e6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.e4 e6 2.d4": {
    strategy:
      "Errichtet das volle Bauernzentrum; auf 2...d5 deckt Weiß e4 mit Sc3 oder Sd2, rückt " +
      "mit e5 vor oder tauscht mit exd5 ab. Weiß gewinnt Raum, während Schwarz d4 mit ...c5 " +
      "angreift, einen vorgerückten Bauern e5 mit ...f6 unterminiert oder mit ...dxe4 das " +
      "Zentrum aufgibt. Der Preis ist die Spannung: Über den e-Bauern muss sofort entschieden " +
      "werden, und der Bauer d4 bleibt das übliche Ziel von Schwarz.",
  },

  "1.e4 e6 2.d3": {
    name: "Französische Verteidigung: Königsindischer Angriff",
    background:
      "Der Königsindische Angriff entsteht am häufigsten gegen die Französische Verteidigung, " +
      "meist nach 2...d5 3.Sd2. Führende Spieler wie Benko, Fischer, Stein und Psachis haben " +
      "2.d3 gespielt, und Fischer gewann damit 1967 beim Interzonenturnier in Sousse gegen " +
      "Mjagmarsüren.",
    strategy:
      "Bereitet einen Aufbau mit Sd2, Sgf3, g3, Lg2 und O-O vor und hält den Vorstoß e5 für " +
      "den Moment bereit, in dem Schwarz ...d5 gespielt hat. Weiß verzichtet auf den " +
      "sofortigen Kampf um das Zentrum und erhält dafür eine solide, flexible Stellung ohne " +
      "einen Bauern d4, den Schwarz angreifen könnte, und Chancen am Königsflügel. Schwarz " +
      "antwortet meist mit ...c5, ...Sc6, ...Sf6 und ...Le7 und dehnt sich am Damenflügel " +
      "aus.",
  },

  "1.e4 e6 2.Nc3": {
    name: "Französische Verteidigung: Damenspringer-Variante",
    strategy:
      "Entwickelt den Damenspringer und deckt e4, sodass 2...d5 3.d4 in die Hauptvarianten " +
      "mit 3.Sc3 überleitet. Schwarz kann die Französische Verteidigung aber auch mit 2...c5 " +
      "verlassen und ein Geschlossenes Sizilianisch ansteuern. Gesund, bietet aber nichts, " +
      "was 2.d4 nicht auch bietet.",
  },

  "1.e4 e6 2.Nf3": {
    name: "Französische Verteidigung: Springervariante",
    strategy:
      "Entwickelt eine Figur und hält d4 in Reserve, sodass 2...d5 3.exd5 exd5 4.d4 in die " +
      "Abtauschvariante überleitet. Der eigenständige Versuch 3.Sc3, die " +
      "Zweispringervariante, wird gut mit 3...d4 oder 3...Sf6 beantwortet, und 2...c5 führt " +
      "in eine Sizilianische Verteidigung. Spielbar, aber Weiß hat keinen Grund, diesen Zug " +
      "2.d4 vorzuziehen.",
  },

  "1.e4 e6 2.Qe2": {
    name: "Französische Verteidigung: Tschigorin-Variante",
    strategy:
      "Stellt die Dame auf die e-Linie, sodass nach 2...d5 3.exd5 der Bauer e6 gefesselt ist " +
      "und Schwarz mit der Dame zurückschlagen muss. Schwarz antwortet daher meist mit " +
      "2...c5, und eine Hauptvariante verläuft 3.Sf3 Sc6 4.g3 g6 5.Lg2 Lg7 mit ausgeglichenen " +
      "Chancen. Die Dame verstellt dem Läufer f1 die Diagonale, weshalb Weiß ihn " +
      "fianchettiert.",
  },

  "1.e4 e6 2.c4": {
    name: "Französische Verteidigung: Steiner-Variante",
    strategy:
      "Nimmt d5 ins Visier, um Schwarz von 2...d5 abzuhalten, doch Schwarz kann den Zug " +
      "trotzdem spielen: Nach 3.cxd5 exd5 4.exd5 Sf6 behält Weiß den Mehrbauern nur mit " +
      "5.Lb5+, und Schwarz erhält dafür gute Kompensation. Stattdessen führt 4.Db3 ins " +
      "Orthoschnapp-Gambit.",
  },

  "1.e4 e6 2.b3": {
    name: "Französische Verteidigung: Horwitz-Angriff",
    strategy:
      "Bereitet Lb2 vor, um Druck auf die lange Diagonale und auf g7 auszuüben. Nach 2...d5 " +
      "3.Lb2 dxe4 entsteht das Réti-Gambit, in dem Weiß den e-Bauern für schnelle Entwicklung " +
      "gibt; Schwarz kann es auch mit 3...Sf6 4.e5 Sfd7 ablehnen. Selten, riskant und nicht " +
      "zu empfehlen, aber nicht widerlegt.",
  },

  "1.e4 e6 2.c3": {
    strategy:
      "Bereitet d4 mit Bauernunterstützung vor, und 2...d5 3.e5 c5 4.d4 leitet in die " +
      "Hauptfortsetzung der Vorstoßvariante über. Schwarz hat jedoch andere Möglichkeiten: " +
      "2...c5 3.d4 führt in die Alapin-Variante der Sizilianischen Verteidigung, und nach " +
      "2...d5 3.d4 dxe4 kann der weiße Springer nur von d2 aus zurückschlagen. Gesund, aber " +
      "keine Verbesserung gegenüber 2.d4.",
  },

  "1.e4 e6 2.e5": {
    name: "Französische Verteidigung: Steinitz-Angriff",
    strategy:
      "Rückt den Bauern vor, bevor das Zentrum dafür bereit ist. 2...d6 greift ihn sofort an " +
      "und lässt Weiß keinen Vorteil, da exd6 Lxd6 nur die schwarze Entwicklung fördert; " +
      "2...d5 3.d4 leitet lediglich in die Vorstoßvariante über, die Weiß auch mit 2.d4 hätte " +
      "erreichen können.",
  },

  "1.e4 e6 2.Bb5": {
    name: "Französische Verteidigung: Bird-Einladung",
    background:
      "Von Henry Bird während des Turniers Wien 1873 eingeführt und seither kaum gespielt.",
    strategy:
      "Fesselt den Bauern d7 an den König, sodass 2...d5 nicht sofort möglich ist. Doch " +
      "2...c6 oder 2...a6 greift den Läufer an, und sobald er zurückweicht, spielt Schwarz " +
      "...d5 mit Tempogewinn.",
  },

  "1.e4 e6 2.Bc4": {
    strategy:
      "Entwickelt den Läufer auf eine Diagonale, die der Bauer e6 bereits verstellt, und " +
      "2...d5 greift ihn sofort an: Nach 3.exd5 exd5 muss er erneut ziehen, nach b3 oder d3, " +
      "und Weiß hat ein Tempo verloren, während Schwarz das Zentrum besitzt.",
  },

  "1.e4 e6 2.f4": {
    name: "Französische Verteidigung: La-Bourdonnais-Variante",
    background:
      "Benannt nach Louis-Charles Mahé de La Bourdonnais, einem französischen Meister des 19. " +
      "Jahrhunderts.",
    strategy:
      "Unterstützt ein späteres e5 und beansprucht Raum, entwickelt aber nichts und schwächt " +
      "die Diagonale e1-h4 sowie die Felder e3 und g3. Schwarz besetzt mit 2...d5 das Zentrum " +
      "und beantwortet e5 mit ...c5.",
  },

  "1.e4 e6 2.g3": {
    name: "Französische Verteidigung: Réti-Spielmann-Angriff",
    strategy:
      "Bereitet Lg2 vor, ist gegen 2...d5 aber zu langsam: 3.d3 dxe4 4.dxe4 Dxd1+ kostet Weiß " +
      "das Rochaderecht, 3.Lg2 dxe4 4.Lxe4 Sf6 bringt Schwarz ein Tempo am Läufer, und 3.exd5 " +
      "exd5 ergibt ein ausgeglichenes, symmetrisches Spiel.",
  },

  "1.e4 e6 2.b4": {
    name: "Französische Verteidigung: Banzai-Leong-Gambit",
    strategy:
      "Gibt den b-Bauern für Zeitgewinn: Nach 2...Lxb4 3.c3 muss der Läufer erneut ziehen und " +
      "Weiß kann d4 folgen lassen, doch das Zentrum wiegt den Bauern nicht auf, und Schwarz " +
      "entwickelt sich mit ...Sf6 und ...d5.",
  },

  "1.e4 e6 2.Be2": {
    strategy:
      "Bereitet die Rochade vor, tut aber nichts für das Zentrum und nimmt dem Springer g1 " +
      "das Feld e2. Nach 2...d5 muss Weiß den Angriff auf e4 noch mit exd5, e5, d3 oder Sc3 " +
      "klären, während Schwarz sich frei entwickelt.",
  },

  "1.e4 e6 2.Bd3": {
    strategy:
      "Blockiert den d-Bauern, sodass der zentrale Vorstoß d4 unmöglich ist, bis der Läufer " +
      "wieder zieht, und 2...d5 greift e4 sofort an.",
  },

  "1.e4 e6 2.Ne2": {
    strategy:
      "Entwickelt den Springer, doch er verstellt den Läufer f1 und die Diagonale der Dame " +
      "und kämpft nicht um das Zentrum. Nach 2...d5 hat Schwarz das leichtere Spiel.",
  },

  "1.e4 e6 2.Na3": {
    strategy:
      "Stellt den Springer an den Rand, Richtung c4 oder b5, ohne etwas für das Zentrum zu " +
      "tun. Schwarz kann mit 2...d5 das Zentrum besetzen oder mit 2...Lxa3 3.bxa3 die weißen " +
      "a-Bauern verdoppeln.",
  },

  "1.e4 e6 2.Nh3": {
    strategy:
      "Entwickelt den Springer an den Rand, Richtung f4, tut aber nichts für das Zentrum. " +
      "Schwarz besetzt mit 2...d5 das Zentrum, und sobald der Bauer e6 die Diagonale c8-h3 " +
      "freigibt, etwa nach 3.exd5 exd5, kann ...Lxh3 gxh3 die weißen Königsflügelbauern " +
      "zerrütten.",
  },

  "1.e4 e6 2.Qf3": {
    strategy:
      "Nimmt dem Springer g1 das Feld f3 und zielt auf f7, doch die frühe Dame erreicht " +
      "wenig: ...Sf6 entwickelt mit Angriff auf e4, ...d5 besetzt das Zentrum, und f7 ist " +
      "leicht zu verteidigen.",
  },

  "1.e4 e6 2.Qg4": {
    strategy:
      "Zielt auf g7, doch der Läufer f8 deckt den Bauern, sodass keine Drohung besteht. " +
      "2...Sf6 greift sofort die Dame und e4 an, und Schwarz entwickelt sich mit Tempo.",
  },

  "1.e4 e6 2.Qh5": {
    strategy:
      "Zielt auf f7, doch der Bauer e6 sperrt einen Läufer auf c4 bereits aus, sodass f7 " +
      "sicher ist; 2...Sf6 greift sofort die Dame und e4 an, und Schwarz entwickelt sich mit " +
      "Tempo.",
  },

  "1.e4 e6 2.f3": {
    strategy:
      "Stützt e4, nimmt aber dem Springer g1 das Feld f3 und öffnet die Diagonale e1-h4, " +
      "sodass 2...Dh4+ 3.g3 oder einen Königszug erzwingt. Schwarz kann auch einfach mit " +
      "2...d5 das Zentrum besetzen.",
  },

  "1.e4 e6 2.g4": {
    strategy:
      "Gewinnt Raum am Königsflügel, tut aber nichts für Zentrum und Entwicklung und lockert " +
      "die Bauern vor dem König. Schwarz besetzt mit 2...d5 das Zentrum und kann den Bauern " +
      "g4 mit ...h5 angreifen.",
  },

  "1.e4 e6 2.h4": {
    strategy:
      "Ein Flankenbauernzug, der nichts entwickelt, nichts für das Zentrum tut und den " +
      "Königsflügel lockert. Schwarz antwortet 2...d5, und Weiß hat ein Tempo verloren.",
  },

  "1.e4 e6 2.h3": {
    strategy:
      "Ein Wartezug, der ...Lg4 verhindert, aber nichts für Zentrum und Entwicklung tut. " +
      "2...d5 greift e4 an, während die weißen Figuren noch auf ihren Ausgangsfeldern stehen.",
  },

  "1.e4 e6 2.a3": {
    strategy:
      "Bereitet b4 und eine Ausdehnung am Damenflügel vor, verliert aber ein Tempo; 2...d5 " +
      "besetzt das Zentrum, und Weiß hat für die aufgewendete Zeit nichts vorzuweisen.",
  },

  "1.e4 e6 2.a4": {
    strategy:
      "Ein Flankenbauernzug, der weder eine Figur entwickelt noch um das Zentrum kämpft; " +
      "...d5 greift e4 an, während die weißen Figuren noch auf ihren Ausgangsfeldern stehen.",
  },

  "1.e4 e6 2.Ke2": {
    strategy:
      "Gibt die Rochade auf und sperrt den Läufer f1 und die Dame ohne jeden Gewinn ein. " +
      "Schwarz besetzt mit 2...d5 das Zentrum, und der König steht auf der e-Linie, die sich " +
      "öffnet, sobald auf d5 Bauern getauscht werden.",
  },

  "1.e4 e6 2.Ba6": {
    strategy:
      "Verliert eine Figur für nichts: Der Läufer greift nur b7 an, das der Läufer c8 deckt, " +
      "und 2...bxa6 oder 2...Sxa6 schlägt ihn einfach.",
  },

  "1.e4 e6": {
    name: "Französische Verteidigung",
    background:
      "Benannt nach einem Fernwettkampf zwischen London und Paris im Jahr 1834, in dem die " +
      "Pariser Seite sie auf Betreiben von Jacques Chamouillet wählte. Wilhelm Steinitz " +
      "nannte sie „die langweiligste aller Eröffnungen“, doch seit mehreren Jahrzehnten ist " +
      "sie nach 1...c5 und 1...e5 die dritthäufigste Antwort auf 1.e4.",
  },

  "1.e4 e6 2.d4 d5": {
    strategy:
      "Greift e4 sofort an und beansprucht einen Anteil am Zentrum. Weiß muss entscheiden, " +
      "wie er der Drohung ...dxe4 begegnet, ob mit 3.Sc3, 3.Sd2, 3.e5 oder 3.exd5, und " +
      "Schwarz untergräbt d4 meist bald danach mit ...c5. Der Preis ist die Bauernkette " +
      "e6–d5, die den weißfeldrigen Läufer auf c8 einengt.",
  },

  "1.e4 e6 2.d4 Bb4+": {
    strategy:
      "Gibt sofort Schach und erreicht mit ...d5 den Winawer-Aufbau, wenn Weiß mit 3.Sc3 " +
      "dazwischenzieht. Das Dazwischenziehen mit 3.c3 zwingt den Läufer zum Rückzug, und " +
      "3.Ld2 bietet den Tausch des schwarzfeldrigen Läufers von Schwarz an, sodass Schwarz " +
      "für die aufgewandte Zeit wenig gewonnen hat.",
  },

  "1.e4 e6 2.d4 a6": {
    name: "Französische Verteidigung: St.-George-Verteidigung",
    background:
      "Der Name stammt von der St.-George-Verteidigung 1.e4 a6, benannt nach dem heiligen " +
      "Georg, dem Schutzpatron Englands, die mit 2.d4 e6 diese Stellung erreicht. Ihre erste " +
      "bekannte Partie ist eine Simultanpartie, in der der englische Amateur J. Baker am 11. " +
      "Dezember 1868 Wilhelm Steinitz besiegte.",
    strategy:
      "Hält einen weißen Läufer von b5 fern und bereitet ...b5 und ...Lb7 gegen e4 vor, " +
      "während ...d5 wie in der Französischen Verteidigung noch folgen kann. Weiß entwickelt " +
      "sich mit 3.Sf3 und Ld3 oder nimmt mit 3.c4 mehr Raum und behält für das in ...a6 " +
      "investierte Tempo einen kleinen Vorteil.",
  },

  "1.e4 e6 2.d4 b6": {
    strategy:
      "Bereitet ...Lb7 gegen e4 und einen flexiblen Aufbau mit ...Sf6 oder ...Se7 vor. Weiß " +
      "kann das Zentrum mit 3.Sc3 oder 3.Ld3 stützen und mehr Raum behalten, und nach 3.c4 " +
      "Lb7 ist die Stellung der Englischen Verteidigung erreicht.",
  },

  "1.e4 e6 2.d4 c5": {
    name: "Französische Verteidigung: Franco-Sizilianische Verteidigung",
    strategy:
      "Greift d4 sofort an und steuert eine sizilianische Struktur mit bereits gespieltem " +
      "...e6 an. Nach 3.Sf3 cxd4 4.Sxd4 entsteht ein Offener Sizilianer mit ...e6, doch 3.d5 " +
      "verschafft Weiß zusätzlichen Raum. Eine seltene Nebenvariante, nicht widerlegt, aber " +
      "weniger solide als der Angriff mit ...d5.",
  },

  "1.e4 e6 2.d4 d6": {
    name: "Rat-Verteidigung: Kleinzentrum-Verteidigung",
    strategy:
      "Hält das Zentrum mit Bauern auf e6 und d6 kompakt und strebt ...Sf6, ...Le7 und die " +
      "Rochade an, später ...c5 oder ...e5. Weiß nimmt mit 3.c4 mehr Raum oder entwickelt " +
      "sich ungestört mit 3.Sf3 und Ld3, und ohne ...d5 bleibt Schwarz passiv.",
  },

  "1.e4 e6 2.d4 Nc6": {
    strategy:
      "Entwickelt den Springer und übt Druck auf d4 aus, verstellt aber den Bauern c7, sodass " +
      "der übliche französische Hebel ...c5 gegen d4 nicht mehr zur Verfügung steht. Weiß " +
      "behält mit 3.Sf3 oder 3.c3 mehr Raum, und 3.d5 kann den Springer auch sofort " +
      "zurückdrängen.",
  },

  "1.e4 e6 2.d4 Na6": {
    strategy:
      "Strebt nach b4 oder c7, doch auf a6 steht der Springer am Rand und tut nichts gegen " +
      "das Zentrum. Weiß kann ihm mit 3.a3 das Feld b4 nehmen und behält das größere Zentrum.",
  },

  "1.e4 e6 2.d4 Qe7": {
    strategy:
      "Stellt die Dame vor den Läufer f8 und nimmt dem Springer das Feld e7, ohne das Zentrum " +
      "anzugreifen. Weiß entwickelt sich mit 3.Sf3, Ld3 und c4 und behält den Raumvorteil.",
  },

  "1.e4 e6 2.d4 Qf6": {
    strategy:
      "Bringt die Dame früh gegen d4 ins Spiel und nimmt dem Springer das Feld f6. Weiß " +
      "entwickelt sich mit Tempogewinn, etwa mit 3.Sc3, worauf Sd5 oder e5 gegen die Dame " +
      "folgen.",
  },

  "1.e4 e6 2.d4 Qh4": {
    strategy:
      "Greift den Bauern e4 an, doch 3.Ld3 oder 3.Sc3 deckt ihn mit einem Entwicklungszug, " +
      "und später gewinnt Weiß mit Sf3 gegen die Dame weitere Zeit.",
  },

  "1.e4 e6 2.d4 Be7": {
    strategy:
      "Entwickelt den Läufer bescheiden noch vor ...d5 und nimmt dem Bauern g7 seinen " +
      "Verteidiger, sodass 3.Dg4 ...g6 oder ...Kf8 provozieren kann. Sonst behält Weiß mit " +
      "3.Sf3 oder 3.c3 das größere Zentrum, da der Läufer auf e7 nicht gegen d4 wirkt.",
  },

  "1.e4 e6 2.d4 Bd6": {
    strategy:
      "Verstellt den Bauern d7, sodass ...d5 vorerst unmöglich ist, und stellt den Läufer auf " +
      "ein Feld, das 3.e5 sofort angreift. Schlagen auf e5 gibt den Läufer nach dxe5 für " +
      "einen Bauern, also zieht er sich nach e7, f8 oder b4 zurück, und Weiß hat Raum und " +
      "Zeit gewonnen.",
  },

  "1.e4 e6 2.d4 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo e4 und die Dame seine Vorwärtsfelder f5 und g4 " +
      "kontrollieren, sodass er nichts gegen das Zentrum ausrichtet. Weiß entwickelt sich " +
      "ungestört mit 3.Ld3, Sf3 und Sc3 und behält das größere Zentrum.",
  },

  "1.e4 e6 2.d4 Nf6": {
    name: "Französische Verteidigung: Mittelmeer-Verteidigung",
    strategy:
      "Greift e4 an, erlaubt aber 3.e5, das den Springer vertreibt: Nach 3...Sd5 4.c4 muss er " +
      "ein drittes Mal ziehen, und Weiß hat Raum und Zeit gewonnen, bevor Schwarz ...d5 " +
      "gespielt hat.",
  },

  "1.e4 e6 2.d4 Ne7": {
    strategy:
      "Verstellt den Läufer f8, der erst nach ...g6 oder nach einem weiteren Springerzug ins " +
      "Spiel kommt, und übt keinen Druck auf d4 oder e4 aus. Weiß behält mit 3.Sf3, Ld3 und " +
      "O-O das größere Zentrum.",
  },

  "1.e4 e6 2.d4 a5": {
    strategy:
      "Verbraucht ein Tempo für einen Flügelzug, der weder eine Figur entwickelt noch das " +
      "Zentrum angreift, und schwächt b5. Weiß nutzt die Zeit für Sf3 und Ld3 oder c4.",
  },

  "1.e4 e6 2.d4 c6": {
    strategy:
      "Bereitet ...d5 mit einem Bauerndreieck c6, d5 und e6 vor, das den Läufer c8 einsperrt, " +
      "dem hier das ...Lf5 der Caro-Kann-Verteidigung fehlt. Nach 3.Sf3 d5 4.e5 entsteht eine " +
      "Struktur wie in der Vorstoßvariante der Französischen Verteidigung, in der ...c5 " +
      "Schwarz ein zweites Tempo kostet.",
  },

  "1.e4 e6 2.d4 f6": {
    strategy:
      "Kontrolliert e5 und bereitet ...e5 vor, öffnet aber die Diagonale e8–h5: 3.Dh5+ " +
      "erzwingt ...g6 oder ...Ke7, und der König verliert seinen Schutz. Außerdem nimmt der " +
      "Bauer dem Springer sein bestes Feld.",
  },

  "1.e4 e6 2.d4 f5": {
    name: "Französische Verteidigung: Franco-Hiva-Gambit",
    strategy:
      "Greift e4 nach holländischem Vorbild an, doch nach 3.exf5 exf5 liegen die e-Linie und " +
      "die Diagonale e8–h5 vor dem schwarzen König offen, und der Bauer f5 muss gegen Ld3 " +
      "gedeckt werden. Weiß entwickelt sich rasch mit Ld3, Sf3 und O-O, und Schwarz hat " +
      "keinen Ausgleich für die gelockerte Stellung.",
  },

  "1.e4 e6 2.d4 g6": {
    strategy:
      "Bereitet ...Lg7 gegen d4 vor, doch mit Bauern auf e6 und g6 sind die schwarzen Felder " +
      "f6 und h6 schwach, und 3.h4 mit anschließendem h5 greift g6 an. Sonst verschaffen " +
      "3.Sf3, Ld3 und O-O oder 3.c4 Weiß das Zentrum.",
  },

  "1.e4 e6 2.d4 h6": {
    strategy:
      "Verhindert Lg5, das noch keine Drohung ist, weil die Dame den Läufer einfach schlagen " +
      "würde. Der Zug verschenkt ein Tempo, das Weiß für Sf3, Ld3 und c4 nutzt.",
  },

  "1.e4 e6 2.d4 h5": {
    strategy:
      "Schwächt g5 und g6 dauerhaft, entwickelt keine Figur und greift das Zentrum nicht an. " +
      "Weiß nutzt das Tempo für Sf3 und Ld3 oder c4.",
  },

  "1.e4 e6 2.d4 Qg5": {
    strategy:
      "Stellt die Dame ein: Nach d4 ist die Diagonale c1–g5 offen, und 3.Lxg5 gewinnt sie " +
      "ohne Gegenwert.",
  },

  "1.e4 e6 2.d4 Ke7": {
    strategy:
      "Gibt das Rochaderecht auf und verstellt den Läufer f8. Sofort folgt 3.Lg5+, und " +
      "Schwarz muss mit ...f6 oder ...Sf6 dazwischenziehen oder den König erneut ziehen, " +
      "sodass er in der Mitte festsitzt.",
  },

  "1.e4 e6 2.d4 Bc5": {
    strategy:
      "Stellt den Läufer ein: Der Bauer d4 schlägt ihn mit 3.dxc5, und keine schwarze Figur " +
      "kann zurückschlagen.",
  },

  "1.e4 e6 2.d4 Ba3": {
    strategy:
      "Stellt den Läufer ein: 3.Sxa3 oder 3.bxa3 schlägt ihn, und nichts kann zurückschlagen, " +
      "sodass Schwarz eine ganze Figur weniger hat.",
  },

  "1.e4 e6 2.d4 b5": {
    name: "Französische Verteidigung: Baeuerle-Gambit",
    strategy:
      "Bietet den b-Bauern für Spiel auf der langen Diagonale mit ...Lb7 an. Nach 3.Lxb5 Lb7 " +
      "deckt Weiß e4 mit Sc3 oder Ld3 und behält den Mehrbauern, da die schwarze Aktivität " +
      "kaum Ersatz bietet.",
  },

  "1.e4 e6 2.d4 g5": {
    strategy:
      "Schwächt den Königsflügel ohne Grund: Nach 3.Sf3 ist der Bauer von Springer und Läufer " +
      "angegriffen und nur von der Dame gedeckt, sodass Schwarz ihn decken oder vorziehen " +
      "muss und Zeit und Struktur einbüßt.",
  },

  "1.e4 e6 2.d4 e5": {
    strategy:
      "Zieht den e-Bauern ein zweites Mal, direkt in 3.dxe5 hinein, und keine schwarze Figur " +
      "kann sofort zurückschlagen. Schwarz hat zwei Züge in den e-Bauern investiert, nur um " +
      "ihn herzugeben.",
  },

  "1.e4 e6 2.d3 d5": {
    strategy:
      "Greift e4 sofort an und beansprucht das Zentrum. Weiß antwortet meist mit 3.Sd2, damit " +
      "3...dxe4 4.dxe4 keinen Damentausch bringt, und setzt mit Sgf3, g3, Lg2 und O-O fort; " +
      "Schwarz baut typischerweise mit ...c5, ...Sf6, ...Sc6, ...Le7 und ...O-O auf. Der " +
      "Hauptplan von Weiß ist e5, um Schwarz einzuengen und am Königsflügel anzugreifen, " +
      "während Schwarz am Damenflügel spielt. Ein anderer Aufbau ist ...Sf6, ...Sc6, ...dxe4 " +
      "und ...e5, nach dem der Läufer g2 auf den eigenen Bauern e4 beißt.",
  },

  "1.e4 e6 2.d3 c5": {
    strategy:
      "Kontrolliert d4 und hält ...d5 in Reserve; dieselbe Stellung entsteht auch aus der " +
      "Sizilianischen Verteidigung nach 1.e4 c5 2.d3 e6. Schwarz kann als Nächstes ...d5 " +
      "spielen und mit ...Sc6, ...Sf6, ...Le7 und ...O-O die Hauptvarianten erreichen oder " +
      "den d-Bauern noch eine Weile zurückhalten. Der Preis ist, dass e4 vorerst " +
      "unangefochten bleibt, sodass Weiß auch einen geschlossenen sizilianischen Aufbau mit " +
      "Sc3, g3 und Lg2 wählen kann.",
  },

  "1.e4 e6 2.d3 Nc6": {
    strategy:
      "Entwickelt eine Figur und kontrolliert d4 und e5, verstellt aber den c-Bauern, sodass " +
      "der übliche französische Hebel ...c5 einen weiteren Springerzug erfordert. Solide " +
      "genug, aber weniger genau als 2...d5 oder 2...c5, die Schwarz alle Möglichkeiten " +
      "offenhalten.",
  },

  "1.e4 e6 2.d3 Nf6": {
    strategy:
      "Entwickelt und greift e4 an, das d3 bereits deckt, und geht nach 3.Sd2 d5 oder 3.Sf3 " +
      "d5 meist in die Varianten mit ...d5 über. Solide und flexibel, erlaubt aber auch 3.e5 " +
      "Sd5, eine Struktur wie in der Aljechin-Verteidigung, während 2...d5 den Anspruch auf " +
      "das Zentrum sofort stellt.",
  },

  "1.e4 e6 2.d3 Be7": {
    strategy:
      "Ein solider Entwicklungszug, der die Rochade vorbereitet und sowohl ...d5 als auch " +
      "...c5 in Reserve hält. Er ist langsam, weil er nichts gegen e4 unternimmt, und Weiß " +
      "vervollständigt seinen Aufbau mit Sf3, g3, Lg2 und O-O ungestört.",
  },

  "1.e4 e6 2.d3 b6": {
    strategy:
      "Bereitet ...Lb7 gegen e4 vor, für einen Aufbau mit ...Sf6 und ...c5 oder ...d5. " +
      "Solide, aber langsam: Der Bauer d3 hält e4 fest gedeckt, und Weiß entwickelt sich in " +
      "Ruhe mit Sf3, g3 und Lg2.",
  },

  "1.e4 e6 2.d3 c6": {
    strategy:
      "Bereitet ...d5 mit einem soliden Bauerndreieck auf c6, d5 und e6 vor, einer aus der " +
      "Caro-Kann-Verteidigung bekannten Struktur. Das ist solide, aber passiv: ...c5 kostet " +
      "später einen zweiten Zug mit dem c-Bauern, und der Springer b8 verliert sein " +
      "natürliches Feld c6.",
  },

  "1.e4 e6 2.d3 d6": {
    strategy:
      "Ein solider, aber passiver Aufbau: Die Bauern auf d6 und e6 decken e5 und d5 und " +
      "öffnen d7 für den Läufer c8, doch ein späteres ...d5 kostet einen zweiten Zug mit dem " +
      "d-Bauern. Weiß entwickelt sich mit Sf3, g3 und Lg2 und rochiert ungestört.",
  },

  "1.e4 e6 2.d3 g6": {
    strategy:
      "Bereitet ...Lg7 und ...Se7 vor, ein Fianchetto, das sowohl ...c5 als auch ...d5 in " +
      "Reserve hält. Solide, aber langsam: e4 bleibt unangefochten, und über die offene " +
      "Diagonale c1–h6 kann Weiß Dd2 und Lh6 gegen den Läufer g7 richten.",
  },

  "1.e4 e6 2.d3 Na6": {
    strategy:
      "Ein Randspringer, der nichts im Zentrum kontrolliert und nur auf ein späteres ...Sc7 " +
      "hofft. Er greift weder e4 an noch bereitet er ...d5 vor, sodass Weiß sich einfach " +
      "entwickelt und das Zentrum aufbaut.",
  },

  "1.e4 e6 2.d3 Qe7": {
    strategy:
      "Versperrt den Läufer f8 und verstopft den Königsflügel, sodass die Entwicklung stockt. " +
      "Weiß gewinnt Zeit für Sf3, g3 und Lg2, während die Dame den eigenen Figuren im Weg " +
      "steht.",
  },

  "1.e4 e6 2.d3 Qf6": {
    strategy:
      "Ein früher Damenausflug, der dem Springer g8 das Feld f6 nimmt und nichts droht, da b2 " +
      "und f2 beide gedeckt sind. Nach Sf3 und Sc3 gewinnt Weiß mit e5 oder Lg5 Zeit gegen " +
      "die Dame.",
  },

  "1.e4 e6 2.d3 Qh4": {
    strategy:
      "Die Dame wird sofort durch Sf3 oder g3 zurückgetrieben, sodass Weiß sich mit Tempo " +
      "entwickelt. Der Ausflug kostet Zeit und lässt die übrigen schwarzen Figuren " +
      "unentwickelt.",
  },

  "1.e4 e6 2.d3 Bd6": {
    strategy:
      "Blockiert den Bauern d7, sodass der französische Vorstoß ...d5 unmöglich ist, bis der " +
      "Läufer wieder zieht, und der Läufer c8 bleibt eingesperrt. Weiß entwickelt sich " +
      "ungehindert mit Sf3, g3 und Lg2.",
  },

  "1.e4 e6 2.d3 Bc5": {
    strategy:
      "Stellt den Läufer dorthin, wo 3.d4 ihn mit Tempo angreift. Nach 3...Lb4+ 4.c3 Le7 etwa " +
      "hat Weiß das volle Zentrum und den zusätzlichen Zug c3, während der Läufer drei Züge " +
      "bis e7 gebraucht hat.",
  },

  "1.e4 e6 2.d3 Bb4+": {
    strategy:
      "Das Schach bringt nichts: 3.c3 treibt den Läufer zurück und bereitet d4 vor, und 3.Ld2 " +
      "bietet einen Tausch an, der die weiße Entwicklung fördert. So oder so verliert Schwarz " +
      "Zeit.",
  },

  "1.e4 e6 2.d3 Nh6": {
    strategy:
      "Ein Randspringer, der Lxh6 gxh6 erlaubt, was die Bauern am Königsflügel zerrüttet, und " +
      "im Gegenzug nichts für das Zentrum oder für ...d5 tut.",
  },

  "1.e4 e6 2.d3 Ne7": {
    strategy:
      "Sperrt den Läufer f8 ein, dessen einzige offene Diagonale über e7 führt, sodass er " +
      "einen weiteren Springerzug oder ...g6 braucht, um herauszukommen. Weiß entwickelt sich " +
      "unterdessen ungehindert mit Sf3, g3 und Lg2.",
  },

  "1.e4 e6 2.d3 a6": {
    strategy:
      "Ein langsamer Flügelzug, der weder eine Figur entwickelt noch ...d5 vorbereitet. Weiß " +
      "setzt mit Sf3 und g3 fort oder spielt mit freier Hand d4.",
  },

  "1.e4 e6 2.d3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und verhindert b4, kostet aber ein Tempo ohne Entwicklung " +
      "und hinterlässt ein dauerhaftes Loch auf b5. Weiß nutzt die Zeit für Sf3, g3 und Lg2.",
  },

  "1.e4 e6 2.d3 b5": {
    strategy:
      "Ein verfrühter Vorstoß am Damenflügel, der c6 und die lange Diagonale a8-h1 schwächt " +
      "und nichts für ...d5 tut. Ein schnelles a4 unterminiert den Bauern.",
  },

  "1.e4 e6 2.d3 f6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6 und öffnet die Diagonale e8–h5, sodass 3.Dh5+ ...g6 " +
      "oder ...Ke7 erzwingt und die Königsstellung weiter lockert. Sein einziger Sinn ist, " +
      "...e5 zu unterstützen, einen zweiten Zug mit dem e-Bauern.",
  },

  "1.e4 e6 2.d3 f5": {
    name: "Französische Verteidigung: Königsindischer Angriff, Franco-Hiva-Gambit",
    strategy:
      "Ein Gambitversuch, der die Königsstellung schwächt. Nach 3.exf5 öffnet ...exf5 die " +
      "e-Linie für De2+, während 3...Sf6 4.fxe6 Schwarz mit einem Bauern weniger und ohne " +
      "ausreichenden Entwicklungsvorsprung als Ausgleich lässt.",
  },

  "1.e4 e6 2.d3 g5": {
    strategy:
      "Rückt den g-Bauern vor, ohne etwas zu entwickeln, und schwächt f6, h6 und die dunklen " +
      "Felder um den König. Weiß kann ihn mit h4 unterminieren und unterdessen das Zentrum " +
      "besetzen.",
  },

  "1.e4 e6 2.d3 h6": {
    strategy:
      "Ein langsamer Vorbeugezug gegen Lg5, der weder eine Figur entwickelt noch um das " +
      "Zentrum kämpft; Weiß nutzt die Zeit für Sf3, g3 und Lg2.",
  },

  "1.e4 e6 2.d3 h5": {
    strategy:
      "Ein langsamer Flankenzug, der g5 und g6 schwächt, weder der Entwicklung noch ...d5 " +
      "hilft und Weiß einen freien Zug für Sf3, g3 und Lg2 schenkt.",
  },

  "1.e4 e6 2.d3 e5": {
    strategy:
      "Gibt die französische Bauernstruktur auf, nachdem zwei Züge mit dem e-Bauern " +
      "verbraucht sind. Schwarz erreicht ein Königsbauernspiel mit ...e5, aber einem Tempo " +
      "weniger, und Weiß baut ungehindert mit Sf3, g3 und Lg2 auf.",
  },

  "1.e4 e6 2.d3 Qg5": {
    strategy:
      "Läuft in Lxg5, weil der Läufer c1 über die offene Diagonale c1-d2-e3-f4 nach g5 " +
      "blickt. Die Dame geht ohne Gegenwert verloren.",
  },

  "1.e4 e6 2.d3 Ke7": {
    strategy:
      "Gibt ohne Grund die Rochade auf und versperrt sowohl den Läufer f8 als auch die " +
      "Diagonale d8–h4 der Dame. 3.Lg5+ erzwingt dann ...f6, ...Sf6 mit Fesselung oder einen " +
      "weiteren Königszug.",
  },

  "1.e4 e6 2.d3 Ba3": {
    strategy:
      "Stellt den Läufer dorthin, wo 3.bxa3 oder 3.Sxa3 ihn schlägt, sodass Schwarz einfach " +
      "eine Figur verliert.",
  },
};
