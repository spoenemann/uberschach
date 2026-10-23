import type { OpeningTexts } from "../book.ts";

// German prose for g3-e5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.g3 e5 2.Bg2": {
    background:
      "Die Eröffnungstheorie von Wikibooks führt 2.Lg2 mit der Antwort 2...d5 als " +
      "Hauptvariante nach 1...e5.",
    strategy:
      "Vollendet das Fianchetto und richtet den Läufer auf der langen Diagonale gegen d5 und " +
      "b7. Weiß wählt mit d3, Sf3 und O-O den Aufbau des Königsindischen Angriffs oder spielt " +
      "c4 oder e4, sobald Schwarz sich festgelegt hat. Schwarz besetzt meist mit 2...d5 das " +
      "Zentrum und entwickelt sich mit ...Sf6 und ...Sc6, und Weiß überlässt ihm Raum für " +
      "eine solide, flexible Stellung.",
  },

  "1.g3 e5 2.c4": {
    strategy:
      "Führt zur Englischen Eröffnung 1.c4 e5 2.g3, in der Weiß eine Sizilianische " +
      "Verteidigung mit vertauschten Farben und einem Tempo mehr spielt. Nach Lg2 drückt der " +
      "Läufer auf d5 und b7, und Sc3, Sf3 sowie d3 oder e3 vervollständigen die Entwicklung. " +
      "Schwarz antwortet mit ...Sf6 und ...Sc6, oft gefolgt von ...d5, und behält mehr Raum " +
      "im Zentrum, während Weiß auf den weißen Feldern arbeitet.",
  },

  "1.g3 e5 2.Nf3": {
    name: "Königsfianchetto: Aljechin-Verteidigung mit vertauschten Farben",
    background:
      "Trägt diesen Namen, weil die Ideen der Aljechin-Verteidigung hier mit vertauschten " +
      "Farben wiederkehren. Laut der Eröffnungstheorie von Wikibooks wird der Zug noch " +
      "gelegentlich gespielt, obwohl 1...e5 ihn eigentlich unattraktiv macht.",
    strategy:
      "Entwickelt und greift e5 an, doch 2...e4 vertreibt den Springer sofort, und nach 3.Sd4 " +
      "gewinnt Schwarz mit ...d5 und ...c5 Raum, wobei ...c5 den Springer erneut angreift. " +
      "Weiß versucht, den Bauern e4 mit d3 und Lg2 zu untergraben. Spielbar, aber Schwarz " +
      "erhält mehr Raum als nach dem ruhigen 2.Lg2.",
  },

  "1.g3 e5 2.d3": {
    strategy:
      "Bereitet e4 vor, öffnet die Diagonale des Läufers c1 und steuert mit Lg2, Sf3 und O-O " +
      "den Aufbau des Königsindischen Angriffs an. Der Zug kämpft weder um d5 noch um e5, " +
      "sodass Schwarz mit ...d5, ...Sf6 und ...Sc6 das Zentrum besetzt und mehr Raum hat. " +
      "Solide, aber ein langsamer Beginn.",
  },

  "1.g3 e5 2.b3": {
    strategy:
      "Bereitet Lb2 gegen e5 vor und zusammen mit Lg2 ein Doppelfianchetto auf beiden langen " +
      "Diagonalen. Schwarz deckt e5 mit ...Sc6 und besetzt mit ...d5 und ...Sf6 das Zentrum, " +
      "sodass beide Läufer zunächst auf gut gedeckte Bauern treffen. Solide, aber langsamer " +
      "als die Hauptzüge und ohne Einfluss auf d5.",
  },

  "1.g3 e5 2.d4": {
    strategy:
      "Greift e5 sofort an. Nach 2...exd4 3.Dxd4 Sc6 muss die Dame erneut ziehen und Schwarz " +
      "gewinnt Zeit, und Schwarz kann auch mit 2...e4 vorrücken und den Raum behalten. " +
      "Spielbar, aber der Anzugsvorteil ist dahin.",
  },

  "1.g3 e5 2.Nc3": {
    strategy:
      "Entwickelt den Springer in Richtung d5 und e4, verstellt aber den c-Bauern, sodass der " +
      "englische Aufbau mit c4 entfällt. Schwarz gewinnt mit ...d5 und ...Sf6 Raum, ...d4 " +
      "kann den Springer zurückdrängen, und ...Lb4 fesselt ihn, sobald der d-Bauer gezogen " +
      "hat. Solide, aber weniger flexibel als 2.Lg2 oder 2.c4.",
  },

  "1.g3 e5 2.e4": {
    strategy:
      "Führt zu 1.e4 e5 2.g3, wo der Bauer e4 die lange Diagonale für Lg2 verstellt. Schwarz " +
      "greift den Bauern sofort mit 2...d5 oder 2...Sf6 an, und nach 2...d5 3.exd5 Dxd5 " +
      "gewinnt die Dame mit dem Angriff auf den Turm h1 entlang der langen Diagonale Zeit.",
  },

  "1.g3 e5 2.a3": {
    strategy:
      "Verhindert ...Lb4 und bereitet b4 vor, trägt aber weder zur Entwicklung noch zum " +
      "Zentrum bei und ist bereits der zweite Flügelzug. Schwarz besetzt mit ...d5 und ...Sf6 " +
      "mühelos das Zentrum.",
  },

  "1.g3 e5 2.a4": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel, schwächt aber b4 und überlässt Zentrum und " +
      "Entwicklung Schwarz. Schwarz spielt ohne Mühe ...d5 und ...Sf6.",
  },

  "1.g3 e5 2.c3": {
    strategy:
      "Unterstützt ein späteres d4, nimmt aber dem Springer b1 sein natürliches Feld und tut " +
      "nichts gegen e5 oder d5. Schwarz baut mit ...d5 und ...Sf6 auf und beantwortet d4 " +
      "bequem mit ...e4 oder ...exd4.",
  },

  "1.g3 e5 2.e3": {
    strategy:
      "Kontrolliert d4 und f4 und macht e2 für den Springer frei, verstellt aber die " +
      "Diagonale des Läufers c1 auf e3 und überlässt d5 und e5 Schwarz. Schwarz gewinnt mit " +
      "...d5, ...Sf6 und ...Sc6 ungehindert Raum, während Weiß ohne aktiven Plan bleibt.",
  },

  "1.g3 e5 2.f3": {
    strategy:
      "Nimmt dem Springer sein natürliches Feld f3, verstellt die lange Diagonale für Lg2 und " +
      "schwächt e3 sowie die Diagonale e1-h4. Schwarz besetzt einfach mit ...d5 und ...Sf6 " +
      "das Zentrum.",
  },

  "1.g3 e5 2.h3": {
    strategy:
      "Verhindert ein späteres ...Lg4, ist aber der zweite Bauernzug am Königsflügel, und der " +
      "Bauer g3 verliert die Deckung durch den h-Bauern. Schwarz besetzt mit ...d5 und ...Sf6 " +
      "das Zentrum und entwickelt sich frei.",
  },

  "1.g3 e5 2.h4": {
    strategy:
      "Bereitet h5 vor, vernachlässigt aber Zentrum und Entwicklung, und der Bauer g3 " +
      "verliert die Stütze des h-Bauern, während kein Bauer mehr h3 decken kann. Schwarz " +
      "gewinnt mit ...d5 und ...Sf6 Raum.",
  },

  "1.g3 e5 2.Na3": {
    strategy:
      "Strebt nach c4, um e5 anzugreifen, doch ein Springer am Rand steht schlecht, und " +
      "2...d5 nimmt ihm c4 sofort weg. Zentrum und Entwicklung gehören Schwarz, der ...Sf6 " +
      "und ...Sc6 spielt.",
  },

  "1.g3 e5 2.Nh3": {
    strategy:
      "Der Springer auf h3 tut nichts für das Zentrum, und seine Vorwärtsfelder sind gedeckt: " +
      "Sf4 scheitert an ...exf4 und Sg5 an ...Dxg5. Schwarz besetzt mit ...d5 das Zentrum und " +
      "entwickelt sich frei.",
  },

  "1.g3 e5 2.Bh3": {
    strategy:
      "Entwickelt den Läufer außerhalb der Bauernkette und zielt auf d7, gibt aber die lange " +
      "Diagonale auf. Nach 2...d5 kann Schwarz mit ...Lxh3 Sxh3 tauschen, was einen Springer " +
      "am Rand zurücklässt, und besetzt das Zentrum.",
  },

  "1.g3 e5 2.b4": {
    strategy:
      "Stellt den Bauern ein: 2...Lxb4 schlägt ihn mit einem Entwicklungszug. Lb2 und c3 " +
      "gewinnen etwas Zeit gegen e5 und den Läufer, doch ...Sc6 hält e5, und Schwarz behält " +
      "den Mehrbauern.",
  },

  "1.g3 e5 2.f4": {
    strategy:
      "Verliert nach 2...exf4 einen Bauern, und das Zurückschlagen 3.gxf4 erlaubt sogar " +
      "3...Dh4 matt über die geöffnete Diagonale e1-h4. Weiß muss den Bauern mit 3.Lg2 oder " +
      "3.Sf3 aufgeben, und die Bauernstruktur am Königsflügel bleibt für wenig Gegenwert " +
      "beschädigt.",
  },

  "1.g3 e5 2.g4": {
    strategy:
      "Zieht den g-Bauern ein zweites Mal, gibt die Kontrolle über f4 und h4 auf und lässt " +
      "den Bauern g4 ungedeckt: 2...d5 öffnet dem Läufer c8 die Diagonale gegen ihn. Es " +
      "entsteht die Stellung nach 1.g4 e5 mit Schwarz am Zug, also ein volles Tempo weniger.",
  },
};
