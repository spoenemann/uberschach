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

  "1.g3 e5 2.Bg2 d5": {
    strategy:
      "Besetzt sofort das Zentrum mit Bauern auf d5 und e5, und die Dame deckt d5 gegen den " +
      "Läufer g2. Schwarz setzt mit ...Sf6 und ...Sc6 fort. Weiß bleibt beim Aufbau des " +
      "Königsindischen Angriffs mit d3, Sf3 und O-O oder greift d5 mit c4 an. Dieselbe " +
      "Stellung entsteht nach 1.g3 d5 2.Lg2 e5.",
  },

  "1.g3 e5 2.Bg2 Nc6": {
    strategy:
      "Entwickelt den Damenspringer, der e5 deckt und d4 überwacht, und hält zwei Aufbauten " +
      "in Reserve: ...Sf6 mit ...d5 oder ...g6, ...Lg7 und ...d6 für ein geschlossenes Spiel. " +
      "Nach 3.c4 geht die Partie in eine Englische Eröffnung mit g3 und Lg2 über, während " +
      "Weiß mit 3.d3 oder 3.Sf3 und O-O beim Aufbau des Königsindischen Angriffs bleibt. Der " +
      "Springer steht auf dem Feld des c-Bauern, sodass der Plan mit ...c6 und ...d5 " +
      "entfällt.",
  },

  "1.g3 e5 2.Bg2 Nf6": {
    strategy:
      "Entwickelt den Königsspringer mit Blick auf e4 und d5 und hält ...d5, ...Sc6 und " +
      "...Lc5 oder ...Le7 mit Rochade in Reserve. Nach 3.c4 geht die Partie in eine Englische " +
      "Eröffnung mit g3 und Lg2 über. 3.Sf3 greift den ungedeckten Bauern e5 an, den Schwarz " +
      "entweder mit ...Sc6 deckt oder mit 3...e4 4.Sd4 unter Raumgewinn vorrückt.",
  },

  "1.g3 e5 2.Bg2 Be7": {
    strategy:
      "Entwickelt den Läufer bescheiden und bereitet ...Sf6 und die kurze Rochade vor. Der " +
      "Zug ist solide, aber passiv: e5 braucht noch einen Verteidiger, sobald Sf3 den Bauern " +
      "angreift, und Weiß bekommt mit c4 und Sc3 das Feld d5 bequem in den Griff.",
  },

  "1.g3 e5 2.Bg2 Bc5": {
    strategy:
      "Richtet den Läufer auf f2 und bereitet ...Sf6, ...Sc6 und die Rochade vor. Der Aufbau " +
      "ist solide, doch der Läufer kann zum Ziel von Sf3 und d4 werden, und e5 fehlt die " +
      "Stütze, sodass Schwarz die Springer ohne Verzögerung folgen lassen muss.",
  },

  "1.g3 e5 2.Bg2 c6": {
    strategy:
      "Bereitet ...d5 vor, wonach der Bauer c6 den Bauern d5 stützt und die lange Diagonale " +
      "geschlossen hält. Der Zug ist solide, entwickelt aber keine Figur und nimmt dem " +
      "Springer b8 das Feld c6, sodass e5 seinen natürlichen Verteidiger verliert, während " +
      "Weiß Zeit für d3, Sf3 und die Rochade gewinnt.",
  },

  "1.g3 e5 2.Bg2 d6": {
    strategy:
      "Stützt e5 mit einem Bauern und öffnet den Läufer c8 für einen soliden Aufbau mit " +
      "...Sf6 und ...Le7 oder ...g6. Der Zug beansprucht weniger Zentrum als ...d5 und lässt " +
      "Weiß freie Hand mit c4, Sc3 und Sf3.",
  },

  "1.g3 e5 2.Bg2 f5": {
    strategy:
      "Gewinnt Raum mit Bauern auf e5 und f5 und bereitet ...Sf6 und ...e4 vor. Der Zug ist " +
      "eher riskant als widerlegt: Die Diagonale e8-h5 und das Feld e6 sind geschwächt, und " +
      "Weiß entwickelt sich mit Sf3 oder d4 gegen das lockere Zentrum.",
  },

  "1.g3 e5 2.Bg2 g6": {
    strategy:
      "Bereitet ...Lg7 vor, der e5 über die Diagonale a1-h8 stützt, meist mit ...Sc6 und " +
      "...d6 für ein geschlossenes Spiel. Der Zug ist solide, aber langsam: Weiß setzt mit " +
      "c4, Sc3 und d3 fort und hält den Druck auf d5 aufrecht.",
  },

  "1.g3 e5 2.Bg2 h5": {
    strategy:
      "Bereitet ...h4 vor, um den Bauern g3 zu untergraben und die h-Linie gegen das " +
      "Fianchetto zu öffnen. Weiß entwickelt sich mit c4 und Sc3 oder unterbindet die Idee " +
      "mit h4, wonach g5 ein starkes Feld für eine weiße Figur wird.",
  },

  "1.g3 e5 2.Bg2 Na6": {
    strategy:
      "Stellt den Springer an den Rand mit Blick auf c5 und b4, lässt aber e5 ohne Stütze und " +
      "überlässt Weiß das Zentrum. ...Sc5 kostet ein weiteres Tempo, und dort kann der " +
      "Springer mit d4 oder b4 angegriffen werden.",
  },

  "1.g3 e5 2.Bg2 Qe7": {
    strategy:
      "Deckt e5, verstellt aber den Läufer f8 und nimmt dem Springer das Feld e7. Weiß " +
      "antwortet mit Sc3 und Sd5, gedeckt vom Lg2, und greift mit Tempo die Dame und den " +
      "Bauern c7 an.",
  },

  "1.g3 e5 2.Bg2 Qf6": {
    strategy:
      "Deckt e5, nimmt aber dem Königsspringer sein bestes Feld. Weiß antwortet mit Sc3 und " +
      "Sd5, gedeckt vom Lg2, und greift mit Tempo die Dame und den Bauern c7 an.",
  },

  "1.g3 e5 2.Bg2 Qg5": {
    strategy:
      "Zielt auf d2 und g3, doch beide Felder sind gut gedeckt. 3.d4 greift e5 an und öffnet " +
      "dem Läufer c1 den Weg gegen die Dame, sodass Weiß mit Tempo das Zentrum besetzt.",
  },

  "1.g3 e5 2.Bg2 Bd6": {
    strategy:
      "Deckt e5, blockiert aber den d-Bauern und damit den Läufer c8, der eingesperrt bleibt, " +
      "bis der Läufer d6 erneut zieht. Weiß entwickelt sich mit c4, Sc3 und Sf3 und kann in " +
      "Ruhe mit d4 zuschlagen.",
  },

  "1.g3 e5 2.Bg2 Bb4": {
    strategy:
      "Stellt den Läufer nach b4, wo er nur den gut gedeckten Bauern d2 angreift. Ein Zug wie " +
      "c3 oder a3 vertreibt ihn mit Tempo, und c3 bereitet zudem d4 vor.",
  },

  "1.g3 e5 2.Bg2 Nh6": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er f5 und g4 im Blick hat, aber nicht das " +
      "Zentrum. Sobald d3 den Läufer c1 öffnet, kann Lxh6 gxh6 die schwarzen Bauern am " +
      "Königsflügel zerrütten.",
  },

  "1.g3 e5 2.Bg2 Ne7": {
    strategy:
      "Deckt d5, verstellt aber den Läufer f8, sodass Schwarz vor der kurzen Rochade ...g6 " +
      "oder einen zweiten Springerzug braucht. Auf e7 steht der Springer passiver als auf f6.",
  },

  "1.g3 e5 2.Bg2 a6": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern, der weder der Entwicklung noch dem Zentrum " +
      "dient. Die Fortsetzung ...b5 ist nicht möglich, solange der Lg2 die lange Diagonale " +
      "beherrscht, denn sie würde den Turm a8 einstellen.",
  },

  "1.g3 e5 2.Bg2 a5": {
    strategy:
      "Verhindert b4 und gewinnt etwas Raum am Damenflügel, verbraucht aber ein Tempo, das " +
      "weder der Entwicklung noch dem Zentrum dient. Weiß entwickelt sich ungestört mit c4, " +
      "Sc3 und Sf3.",
  },

  "1.g3 e5 2.Bg2 c5": {
    strategy:
      "Kontrolliert d4, hinterlässt aber auf d5 ein dauerhaftes Loch, weil weder der c- noch " +
      "der e-Bauer das Feld noch decken kann. Lg2, Sc3 und der Bauer c4 wirken alle auf " +
      "dieses Feld.",
  },

  "1.g3 e5 2.Bg2 f6": {
    strategy:
      "Deckt e5, nimmt aber dem Königsspringer das Feld f6 und schwächt e6 und die Diagonale " +
      "e8-h5. Weiß entwickelt sich ungestört mit c4 und Sc3.",
  },

  "1.g3 e5 2.Bg2 g5": {
    strategy:
      "Schwächt den Königsflügel und die Diagonale a1-h8: Nach 3.d4 exd4 4.Dxd4 greift die " +
      "Dame den Turm h8 an, während der Läufer c1 auf g5 zielt. Schwarz muss mit einem Zug " +
      "wie ...Sf6 oder ...f6 dazwischenziehen, und die Schwächen bleiben.",
  },

  "1.g3 e5 2.Bg2 h6": {
    strategy:
      "Verbraucht ein Tempo gegen Lg5, einen Zug, den der Läufer c1 nicht machen kann, " +
      "solange der Bauer d2 ihn blockiert. Weiß entwickelt sich mit c4 und Sc3.",
  },

  "1.g3 e5 2.Bg2 Qh4": {
    strategy: "Stellt die Dame ein: Der Bauer g3 schlägt sie einfach mit 3.gxh4.",
  },

  "1.g3 e5 2.Bg2 Ke7": {
    strategy:
      "Verzichtet endgültig auf die Rochade und verstellt den Läufer f8. Weiß entwickelt sich " +
      "mit c4 und Sc3 und kann die Stellung gegen den König im Zentrum öffnen.",
  },

  "1.g3 e5 2.Bg2 Ba3": {
    strategy: "Stellt den Läufer ein: 3.bxa3 oder 3.Sxa3 gewinnt eine Figur ohne Gegenwert.",
  },

  "1.g3 e5 2.Bg2 b6": {
    strategy:
      "Öffnet die lange Diagonale zum Turm a8: 3.Lxa8 gewinnt einen ganzen Turm, weil nichts " +
      "auf a8 zurückschlagen kann.",
  },

  "1.g3 e5 2.Bg2 b5": {
    strategy:
      "Gibt die lange Diagonale frei und stellt den Turm a8 ein: 3.Lxa8 gewinnt einen ganzen " +
      "Turm, weil nichts dort zurückschlagen kann.",
  },

  "1.g3 e5 2.Bg2 e4": {
    strategy:
      "Rückt den Bauern ohne Unterstützung vor: 3.Lxe4 gewinnt ihn, da keine schwarze Figur " +
      "e4 deckt. ...d5 oder ...Sf6 gewinnt dann zwar ein Tempo gegen den Läufer, gleicht den " +
      "Bauern aber nicht aus.",
  },
};
