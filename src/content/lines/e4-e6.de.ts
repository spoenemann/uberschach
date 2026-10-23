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
};
