import type { OpeningTexts } from "../book.ts";

// German prose for b3-e5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.b3 e5 2.Bb2": {
    strategy:
      "Stellt den Läufer auf die lange Diagonale gegen e5, das noch ungedeckt ist, sodass " +
      "Schwarz den Bauern mit 2...Sc6 oder 2...d6 hält. Nach 2...Sc6 3.e3 d5 4.Lb5 Ld6 5.f4 " +
      "greift Weiß das breite schwarze Zentrum vom Flügel aus an, und da 5...exf4 durch Lxg7 " +
      "den Turm h8 verliert, deckt Schwarz e5 mit 5...De7 oder 5...f6 ein zweites Mal. Mit " +
      "3.c4 kämpft Weiß stattdessen um d5, wie in Sizilianisch mit vertauschten Farben.",
  },

  "1.b3 e5 2.e3": {
    strategy:
      "Öffnet die Diagonale des Läufers f1 für Lb5 und hält Lb2, Se2 und ein späteres f4 oder " +
      "d4 in Reserve. Meist geht der Zug in die Hauptvariante über, etwa mit 2...Sc6 3.Lb2 d5 " +
      "4.Lb5 Ld6 5.f4. Der Preis ist, dass e5 noch nicht angegriffen wird, sodass Schwarz " +
      "zuerst seinen Aufbau wählen kann, etwa 2...d5 oder 2...Sf6, und Lb2 mit ...Sc6 oder " +
      "...Ld6 beantwortet.",
  },

  "1.b3 e5 2.Nf3": {
    strategy:
      "Greift e5 an und entwickelt, doch 2...e4 vertreibt den Springer: Nach 3.Sd4 c5 4.Sb5 " +
      "d5 steht er abseits, während Schwarz Raum gewinnt, und 3...Sc6 4.Sxc6 dxc6 befreit den " +
      "schwarzen Läufer c8 und öffnet die d-Linie. Gegen 2...Sc6 3.Lb2 kehrt die Partie zu " +
      "vertrauten Larsen-Aufbauten zurück. Solide, doch Schwarz hat die leichtere Wahl.",
  },

  "1.b3 e5 2.c4": {
    strategy:
      "Erreicht durch Zugumstellung eine Struktur der Englischen Eröffnung, mit Lb2 gegen e5 " +
      "und Sc3, g3 oder e3 als Fortsetzung. Schwarz hält e5 mit ...Sc6 oder ...d6 und " +
      "entwickelt sich mit ...Sf6, sodass der Läufer zunächst wenig bewirkt. Solide, aber " +
      "langsamer als die Hauptzüge.",
  },

  "1.b3 e5 2.d3": {
    strategy:
      "Unterstützt ein späteres e4 und schafft Platz für Sd2 in einem ruhigen Aufbau mit g3, " +
      "Lg2 und Sf3. Der Zug greift weder e5 noch d5 an, sodass Schwarz mit ...Sf6, ...Sc6 und " +
      "...d5 ein Bauernzentrum errichtet. Solide, aber passiv.",
  },

  "1.b3 e5 2.d4": {
    strategy:
      "Greift e5 sofort an. Nach 2...exd4 kann nur die Dame zurückschlagen, und 3.Dxd4 Sc6 " +
      "vertreibt sie mit Tempogewinn für Schwarz, während nach 2...e4 der Bauer d4 die lange " +
      "Diagonale verstellt, die b3 für den Läufer geöffnet hat. Spielbar, aber Weiß erreicht " +
      "nicht mehr als mit den Hauptzügen.",
  },

  "1.b3 e5 2.e4": {
    strategy:
      "Besetzt sofort das Zentrum und lässt Lb2 und Sf3 gegen e5 wirken, mit Sc3 und d4 als " +
      "späteren Ideen. Nach ...Sf6 braucht der Bauer e4 Schutz, ...Lc5 zielt auf f2, und " +
      "Schwarz entwickelt sich mit ...Sc6 mühelos. Solide, doch der Zug gibt die Flexibilität " +
      "des Larsen-Aufbaus auf und verspricht nicht mehr als Lb2.",
  },

  "1.b3 e5 2.Nc3": {
    strategy:
      "Entwickelt einen Springer und überwacht e4 und d5, mit e3 oder g3 und Sf3 als " +
      "Fortsetzung. Der Springer verstellt den c-Bauern und die lange Diagonale eines Läufers " +
      "auf b2 und hindert Schwarz nicht daran, mit ...Sf6, ...Sc6 und ...d5 das Zentrum zu " +
      "besetzen. Spielbar, aber der Springer legt sich fest, bevor der weiße Plan feststeht.",
  },

  "1.b3 e5 2.g3": {
    strategy:
      "Bereitet Lg2 für ein doppeltes Fianchetto vor, mit Läufern auf b2 und g2, die auf die " +
      "langen Diagonalen zielen. Der Zug überlässt Schwarz das Zentrum, der sich mit ...Sc6, " +
      "...d6 und ...Sf6 aufstellen oder mit ...d5 Raum gewinnen kann, und e5 wird erst " +
      "angegriffen, wenn Lb2 folgt. Solide, stellt Schwarz aber vor keine Probleme.",
  },

  "1.b3 e5 2.a3": {
    strategy:
      "Verhindert ...Lb4, entwickelt aber nichts und greift nicht ins Zentrum ein. Schwarz " +
      "besetzt es mit ...Sf6, ...Sc6 und ...d5, und der Bauer a3 hat keine weitere Aufgabe, " +
      "sodass Weiß ein Tempo zurückliegt.",
  },

  "1.b3 e5 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und überwacht b5, nimmt aber nicht am Kampf um das Zentrum " +
      "teil, und da der a-Bauer an a3 vorbeigezogen ist, kann nur noch c3 das Feld b4 decken. " +
      "Schwarz entwickelt sich ungehindert mit ...Sf6, ...Sc6 und ...d5.",
  },

  "1.b3 e5 2.c3": {
    strategy:
      "Bereitet d4 für ein breites Zentrum vor, doch der Bauer verstellt die lange Diagonale, " +
      "die b3 für den Läufer öffnen sollte. Schwarz wird mit 2...d5 oder 2...Sf6 zuerst im " +
      "Zentrum aktiv, und Weiß braucht d4 und weitere Tempi, um aufzuholen.",
  },

  "1.b3 e5 2.f3": {
    strategy:
      "Unterstützt ein späteres e4, nimmt aber dem Springer g1 sein bestes Feld f3 und " +
      "schwächt die Diagonale e1–h4, sodass 2...Dh4+ den Zug 3.g3 erzwingt. Weiß tauscht " +
      "Entwicklung gegen eine langsame Struktur, und Schwarz besetzt mit ...Sc6 und ...d5 das " +
      "Zentrum.",
  },

  "1.b3 e5 2.Nh3": {
    strategy:
      "Strebt nach f4 oder g5, doch der Bauer e5 überwacht f4 bereits, und der Springer steht " +
      "am Rand. Nach 2...d5 zielt der Läufer c8 auf h3, und ...Lxh3 gxh3 beschert Weiß einen " +
      "Doppelbauern auf der h-Linie, während Schwarz ein freies Zentrum behält.",
  },

  "1.b3 e5 2.Na3": {
    strategy:
      "Zielt auf c4, von wo der Springer e5 angreifen würde, lässt ihn aber am Rand und fern " +
      "vom Zentrum stehen. Schwarz besetzt das Zentrum mit ...d5, das auch c4 überwacht, und " +
      "entwickelt sich mit ...Sf6 und ...Sc6, während der Springer noch ein brauchbares Feld " +
      "suchen muss.",
  },

  "1.b3 e5 2.Ba3": {
    strategy:
      "Bietet den Tausch des Läufers an, den b3 auf die lange Diagonale bringen sollte, und " +
      "nach 2...Lxa3 3.Sxa3 steht der zurückschlagende Springer am Rand. Schwarz besetzt dann " +
      "mit ...d5 und ...Sf6 das Zentrum.",
  },

  "1.b3 e5 2.h3": {
    strategy:
      "Ein Wartezug, der ...Lg4 verhindert, aber weder eine Figur entwickelt noch um das " +
      "Zentrum kämpft. Schwarz antwortet mit ...Sf6, ...Sc6 und ...d5, während Lb2 noch " +
      "aussteht.",
  },

  "1.b3 e5 2.h4": {
    strategy:
      "Zielt auf h5 und Raum am Königsflügel, nimmt aber nicht am Kampf um das Zentrum teil " +
      "und schwächt g4. Schwarz entwickelt sich mit ...Sf6 und ...Sc6 und gewinnt mit ...d5 " +
      "Raum.",
  },

  "1.b3 e5 2.b4": {
    strategy:
      "Bietet den b-Bauern ohne jede Entwicklung dahinter an: 2...Lxb4 gewinnt ihn, und nach " +
      "3.Lb2 lässt sich der Druck auf e5 mit ...Sc6 oder ...d6 leicht abwehren, sodass Weiß " +
      "ohne Gegenwert einen Bauern weniger hat.",
  },

  "1.b3 e5 2.f4": {
    strategy:
      "Bietet den f-Bauern ohne Entwicklungsvorsprung an: 2...exf4 gewinnt ihn, und die " +
      "geschwächte Diagonale e1–h4 macht ...Dh4+ zu einer ständigen Drohung, etwa 3.Lb2 Dh4+ " +
      "4.g3 fxg3, und nach hxg3 hängt der Turm h1.",
  },

  "1.b3 e5 2.g4": {
    strategy:
      "Gewinnt Raum am Königsflügel, lässt den Bauern aber ungedeckt: ...d5 öffnet dem Läufer " +
      "c8 den Weg gegen g4, und f3, h3 sowie die lange Diagonale sind dauerhaft geschwächt, " +
      "während nichts entwickelt ist.",
  },

  "1.b3 e5": {
    name: "Larsen-Eröffnung: Moderne Variante",
    background:
      "Die meistgespielte und ehrgeizigste Antwort von Schwarz auf 1.b3; sie kommt in etwa 45 " +
      "Prozent der Partien vor.",
  },
};
