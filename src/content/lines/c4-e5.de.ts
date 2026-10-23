import type { OpeningTexts } from "../book.ts";

// German prose for c4-e5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.c4 e5 2.Nc3": {
    name: "Sizilianisch im Anzuge mit 2.Sc3",
    strategy:
      "Entwickelt den Springer in Richtung d5 und e4, sodass Springer und c-Bauer gemeinsam " +
      "d5 kontrollieren. Weiß setzt meist mit g3, Lg2 und d3 oder e3 fort; Sf3 gegen ...Sc6 " +
      "und ...Sf6 führt zur Vierspringervariante. Schwarz wählt zwischen 2...Sf6, oft mit " +
      "...Lb4, das mit ...Lxc3 einen weißen Doppelbauern auf der c-Linie droht, 2...Sc6 für " +
      "ein geschlossenes Spiel mit ...g6 und ...Lg7 und einem frühen Durchbruch ...d5.",
  },

  "1.c4 e5 2.g3": {
    strategy:
      "Bereitet Lg2 vor, der auf der langen Diagonale gegen d5 und b7 wirkt, und legt sich " +
      "mit beiden Springern noch nicht fest. Weil Sc3 zurückgestellt wird, findet ein frühes " +
      "...Lb4 keinen Springer als Ziel, und Weiß wählt später je nach schwarzer Aufstellung " +
      "Sc3, Sf3 oder e3. Ohne Springer auf c3 fällt Schwarz ...d5 leichter, und er bereitet " +
      "den Zug oft mit ...c6 oder ...Sf6 vor.",
  },

  "1.c4 e5 2.Nf3": {
    name: "Sizilianisch im Anzuge: Nimzowitsch-Variante",
    strategy:
      "Entwickelt eine Figur und greift sofort e5 an, sodass Schwarz den Bauern mit ...Sc6 " +
      "oder ...d6 decken oder vorziehen muss. Nach 2...Sc6 3.Sc3 Sf6 entsteht die " +
      "Vierspringervariante, während 2...e4 3.Sd4 eine Art Aljechin-Verteidigung mit " +
      "vertauschten Farben ergibt, in der der vorgerückte Bauer zum Ziel für d3 wird. Nach " +
      "3...Sc6 4.Sxc6 dxc6 hat Schwarz einen Doppelbauern auf der c-Linie, doch die d-Linie " +
      "öffnet sich für die Dame, und der Läufer c8 ist frei.",
  },

  "1.c4 e5 2.a3": {
    strategy:
      "Verhindert ...Lb4 und bereitet b4 zum Raumgewinn am Damenflügel vor, entwickelt aber " +
      "nichts und trägt nichts zum Kampf um das Zentrum bei. Schwarz kann in Ruhe ...Sf6, " +
      "...Sc6 und ...d5 spielen, sodass der Zug solide, aber langsam ist.",
  },

  "1.c4 e5 2.b3": {
    strategy:
      "Bereitet Lb2 vor, um auf der langen Diagonale Druck gegen e5 auszuüben, und hält die " +
      "Wahl zwischen Sc3, g3 und e3 offen. Schwarz hält e5 mit ...Sc6 oder ...d6 und " +
      "entwickelt sich mit ...Sf6, sodass der Läufer zunächst wenig ausrichtet. Solide, aber " +
      "langsamer als die Hauptzüge.",
  },

  "1.c4 e5 2.d3": {
    strategy:
      "Unterstützt ein späteres e4 und öffnet den Läufer c1, mit dem Ziel eines ruhigen " +
      "Aufbaus mit g3, Lg2 und Sc3. Der Zug entwickelt keine Figur und verstärkt den Druck " +
      "auf d5 nicht, sodass Schwarz sich mit ...Sf6 und ...Sc6 entwickelt und ...d5 " +
      "vorbereitet. Solide, aber passiv.",
  },

  "1.c4 e5 2.e3": {
    strategy:
      "Öffnet den Läufer f1 und bereitet d4 gegen e5 vor; danach folgen Sc3 und Sf3 oder " +
      "Sge2. Gegen ...d5 tut der Zug nichts, und Schwarz bereitet den Vorstoß mit ...Sf6 und " +
      "...Sc6 vor und steht bequem. Solide, aber bescheiden.",
  },

  "1.c4 e5 2.d4": {
    strategy:
      "Greift sofort e5 an und öffnet das Zentrum. Nach 2...exd4 3.Dxd4 Sc6 muss die Dame " +
      "erneut ziehen, und nach 3.Sf3 Sc6 4.Sxd4 entwickelt sich Schwarz ungehindert. Der " +
      "Anzugsvorteil ist dahin, doch die Stellung bleibt ausgeglichen.",
  },

  "1.c4 e5 2.e4": {
    strategy:
      "Errichtet das Bauernpaar c4 und e4 des Botwinnik-Systems, das d5 unter Kontrolle hält; " +
      "meist folgen Sc3, d3, g3 und Lg2. Der Preis ist das Feld d4, das kein weißer Bauer " +
      "mehr decken kann, und Schwarz zielt mit ...Sc6 und ...Lc5 darauf, während ...Sf6 den " +
      "Bauern e4 angreift. Solide, aber Weiß erreicht damit nicht mehr als mit den " +
      "Hauptzügen.",
  },

  "1.c4 e5 2.Qc2": {
    strategy:
      "Bringt die Dame vor den Leichtfiguren ins Spiel, um c4 zu decken und auf e4 zu zielen. " +
      "Nach ...Sc6 kann der Springer nach d4 oder b4 springen und die Dame mit Tempo " +
      "angreifen, während die weiße Entwicklung zurückbleibt.",
  },

  "1.c4 e5 2.a4": {
    strategy:
      "Deckt b5, entwickelt aber nichts und gibt b4 endgültig auf: Mit dem a-Bauern auf a4 " +
      "und dem c-Bauern auf c4 kann kein weißer Bauer das Feld je wieder decken. Schwarz kann " +
      "es für ...Lb4 oder ...Sc6–b4 nutzen und entwickelt sich ungehindert mit ...Sf6 und " +
      "...d5.",
  },

  "1.c4 e5 2.f3": {
    strategy:
      "Nimmt dem Springer g1 das Feld f3 und öffnet die Diagonale e1–h4, sodass ...Dh4+ den " +
      "Zug g3 erzwingt. Der Zug deckt e4, entwickelt aber nichts, und Schwarz setzt mit " +
      "...Sc6, ...Sf6 und ...d5 fort.",
  },

  "1.c4 e5 2.h3": {
    strategy:
      "Ein Wartezug, der ein Tempo verliert: Er verhindert ...Lg4, entwickelt aber keine " +
      "Figur und kämpft nicht um das Zentrum, und Schwarz antwortet mit ...Sf6, ...Sc6 und " +
      "...d5 und hat dabei freie Hand.",
  },

  "1.c4 e5 2.h4": {
    strategy:
      "Verbraucht ein Tempo am Rand und schwächt g4, ohne dem Zentrum oder der Entwicklung zu " +
      "helfen. Schwarz entwickelt sich mit ...Sf6 oder ...Sc6 und gewinnt mit ...d5 Raum.",
  },

  "1.c4 e5 2.Na3": {
    strategy:
      "Stellt den Springer an den Rand, mit Ziel c2 oder b5, und erlaubt 2...Lxa3 3.bxa3, " +
      "wonach Weiß für das Läuferpaar einen isolierten Doppelbauern auf der a-Linie hat. " +
      "Andernfalls steht der Springer weit von d5 und e4 entfernt, und Schwarz entwickelt " +
      "sich ungehindert.",
  },

  "1.c4 e5 2.Nh3": {
    strategy:
      "Strebt nach f4 oder g5, doch vorerst deckt der Bauer e5 das Feld f4 und die Dame d8 " +
      "das Feld g5, sodass der Springer vom Rand aus nicht vorankommt. Schwarz entwickelt " +
      "sich mit ...Sc6, ...Sf6 und ...d5.",
  },

  "1.c4 e5 2.Qb3": {
    strategy:
      "Greift b7 an, das der Läufer c8 deckt, und bringt die Dame früh ins Spiel. 2...Sc6 " +
      "nebst ...Sd4 vertreibt sie mit Tempo, und die weiße Entwicklung bleibt zurück.",
  },

  "1.c4 e5 2.Qa4": {
    strategy:
      "Fesselt den Bauern d7 für einen Moment an den König, doch ...Sc6 oder ...c6 verstellt " +
      "die Diagonale, und ...d5 folgt. Sonst richtet die Dame auf a4 nichts aus und hat ein " +
      "Tempo verbraucht, das die unentwickelten weißen Figuren brauchen.",
  },

  "1.c4 e5 2.b4": {
    strategy:
      "Bietet den b-Bauern an: Nach 2...Lxb4 3.Lb2 greift der Läufer e5 an, doch ...Sc6 oder " +
      "...d6 hält den Bauern. Da der c-Bauer bereits auf c4 steht, kann Weiß den Läufer nicht " +
      "mit c3 vertreiben, und Schwarz behält einen glatten Mehrbauern.",
  },

  "1.c4 e5 2.f4": {
    strategy:
      "Anders als beim Königsgambit steht kein Bauer auf e4, der das Zentrum übernehmen " +
      "könnte: 2...exf4 gewinnt einfach einen Bauern und öffnet die Diagonale e1–h4 gegen den " +
      "weißen König. Weiß muss ein Tempo für Sf3 aufwenden, um ...Dh4+ zu verhindern, bevor " +
      "er den Bauern zurückzugewinnen versucht.",
  },

  "1.c4 e5 2.g4": {
    strategy:
      "Lässt den Bauern g4 ohne Deckung und schwächt f3 und h3. Nach 2...d5 greift der Läufer " +
      "c8 den Bauern g4 an, und 3.cxd5 Dxd5 trifft zudem den Turm h1 auf der geöffneten " +
      "langen Diagonale.",
  },

  "1.c4 e5 2.c5": {
    strategy:
      "Schiebt den c-Bauern auf ein Feld, auf dem ihn nichts deckt, und 2...Lxc5 gewinnt ihn, " +
      "wobei sich der Läufer gleich mit Blick auf f2 entwickelt. Weiß hat für den Bauern " +
      "nichts vorzuweisen.",
  },

  "1.c4 e5": {
    name: "Sizilianisch im Anzuge",
    background:
      "Auch umgekehrtes Sizilianisch genannt, weil es eine Sizilianische Verteidigung mit " +
      "vertauschten Farben ist; Kasparow und Keene nennen es in Batsford Chess Openings " +
      "(1982) „King's English“. Bruce Leverett schrieb in Modern Chess Openings (14. Auflage, " +
      "1999), es liege nahe, die Englische Eröffnung als umgekehrtes Sizilianisch zu " +
      "behandeln, die Ergebnisse seien aber oft überraschend.",
  },
};
