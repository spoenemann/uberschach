import type { OpeningTexts } from "../book.ts";

// German prose for d4-e6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.d4 e6 2.c4": {
    background:
      "Der häufigste Zug gegen 1...e6, der die Partie im Rahmen des Damenbauernspiels hält. " +
      "Howard Staunton spielte 1...e6 in seinen Wettkämpfen von 1843 gegen Saint-Amant, den " +
      "stärksten französischen Spieler seiner Zeit, fünfmal, und jede dieser Partien ging mit " +
      "2.c4 d5 in ein Abgelehntes Damengambit über.",
    strategy:
      "Bringt den c-Bauern in den Kampf um d5 und hält die Strukturen des Damengambits und " +
      "der indischen Verteidigungen offen: 2...d5 führt zum Abgelehnten Damengambit, 2...Sf6 " +
      "zur Nimzo-Indischen, Damenindischen oder Bogo-Indischen Verteidigung. Schwarz erhält " +
      "zugleich die größte Auswahl an eigenständigen Antworten: Holländisch mit 2...f5, die " +
      "Englische Verteidigung mit 2...b6, Benoni mit 2...c5 oder die Keres-Verteidigung mit " +
      "2...Lb4+, die Weiß meist mit 3.Ld2 beantwortet.",
  },

  "1.d4 e6 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer, deckt d4 und e5 und hält jeden Aufbau offen: c4 für das " +
      "Abgelehnte Damengambit und die indischen Strukturen, e3 und Ld3 für ein Colle-System, " +
      "Lf4 für ein London-System, g3 und Lg2 für Katalanisch. Der Zug bietet ähnliche " +
      "Zugumstellungen wie 2.c4, umgeht aber die Keres-Verteidigung mit 2...Lb4+. Schwarz " +
      "kann die Struktur weiterhin mit 2...d5, 2...c5 oder 2...Sf6 bestimmen.",
  },

  "1.d4 e6 2.e4": {
    strategy:
      "Errichtet das volle Bauernzentrum und leitet in die Französische Verteidigung über, " +
      "denn die Stellung ist dieselbe wie nach 1.e4 e6 2.d4. Nach 2...d5 ist der Bauer e4 " +
      "angegriffen, und Weiß wählt zwischen der Deckung mit 3.Sc3 oder 3.Sd2, dem Vorstoß " +
      "3.e5 und dem Abtausch 3.exd5. Schwarz sucht Gegenspiel mit ...c5 gegen d4 und nach " +
      "3.e5 mit ...f6 gegen die Bauernkette.",
  },

  "1.d4 e6 2.Bf4": {
    strategy:
      "Entwickelt den schwarzfeldrigen Läufer, bevor e3 ihn einsperrt, der erste Schritt zum " +
      "London-System: e3, Sf3, c3 und Ld3 oder Sbd2 folgen in einem soliden Aufbau mit festem " +
      "Plan. Da der Läufer c1 verlassen hat, ist der Bauer b2 ungedeckt, und ...c5 mit ...Db6 " +
      "ist eine typische Antwort. Schwarz kann auch mit ...Ld6 den Läufertausch anbieten und " +
      "ohne Eile ...d5 erreichen.",
  },

  "1.d4 e6 2.g3": {
    strategy:
      "Bereitet Lg2 auf der langen Diagonale vor, gerichtet auf d5 und b7, und kann nach " +
      "späterem c4 und Sf3 in die Katalanische Eröffnung münden. Der Zug ist langsamer als " +
      "2.c4 oder 2.Sf3, sodass Schwarz zuerst mit 2...c5 gegen d4 vorgehen oder das Zentrum " +
      "mit 2...d5 festlegen kann.",
  },

  "1.d4 e6 2.Nc3": {
    strategy:
      "Entwickelt den Springer und hält zwei Pläne bereit: Nach 2...d5 führt 3.e4 in die " +
      "Französische Verteidigung mit 3.Sc3, während Lf4 ein Jobava-London-System ergibt. Der " +
      "Springer verstellt den c-Bauern, sodass die Strukturen des Damengambits ausscheiden, " +
      "und 2...Lb4 fesselt ihn sofort. Solide, aber weniger flexibel als 2.c4 oder 2.Sf3.",
  },

  "1.d4 e6 2.Nd2": {
    strategy:
      "Unterstützt e4, sodass 2...d5 3.e4 die Tarrasch-Variante der Französischen " +
      "Verteidigung erreicht. Der Springer sperrt den Läufer c1 ein und schließt Lf4 aus, und " +
      "Schwarz kann der Französischen Verteidigung mit 2...c5 oder 2...Sf6 ausweichen. " +
      "Spielbar, aber passiv.",
  },

  "1.d4 e6 2.c3": {
    strategy:
      "Stützt d4 und verhindert ...Lb4+, worauf Sf3, Lf4 oder e3 und Ld3 in einem kompakten " +
      "Aufbau folgen. Der Zug ist langsam und nimmt dem Springer b1 das Feld c3, sodass er " +
      "über d2 ins Spiel kommen muss, während Schwarz sich mit ...d5 und ...c5 oder ...Sf6 " +
      "frei entwickelt. Solide, aber Weiß gibt die Initiative ab.",
  },

  "1.d4 e6 2.e3": {
    strategy:
      "Öffnet dem Läufer f1 den Weg nach d3 und stützt d4 für einen Colle-Aufbau mit Sf3, c3 " +
      "oder b3 und Sbd2. Allerdings sperrt der Zug den Läufer c1 hinter dem Bauern ein, und " +
      "Schwarz antwortet ohne Zugeständnis mit ...d5 oder ...c5. Solide, aber festlegend, " +
      "denn 2.Sf3 erreicht denselben Aufbau und hält die Möglichkeit Lf4 vor e3 offen.",
  },

  "1.d4 e6 2.b3": {
    strategy:
      "Bereitet Lb2 vor, doch mit dem Bauern auf d4 beißt der Läufer auf den eigenen Bauern " +
      "und deckt ihn nur, bis ein späteres d5 oder dxc5 die Diagonale öffnet. Schwarz kann " +
      "mit 2...Lb4+ antworten oder einfach mit ...d5, ...c5 und ...Sf6 frei spielen. " +
      "Spielbar, aber 2.c4 und 2.Sf3 tun mehr für das Zentrum.",
  },

  "1.d4 e6 2.a3": {
    strategy:
      "Verhindert ...Lb4+ und bereitet b4 vor, entwickelt aber nichts und verliert ein Tempo. " +
      "Schwarz besetzt mit ...d5 und ...Sf6 das Zentrum, während die weißen Figuren noch zu " +
      "Hause stehen.",
  },

  "1.d4 e6 2.a4": {
    strategy:
      "Ein Randbauernzug, der weder eine Figur entwickelt noch um das Zentrum kämpft und " +
      "nicht einmal 2...Lb4+ verhindert. Schwarz setzt mit ...d5 fort und hat freies Spiel.",
  },

  "1.d4 e6 2.b4": {
    strategy:
      "Bereitet Lb2 vor, doch der Bauer ist ungedeckt, und 2...Lxb4+ schlägt ihn mit Schach. " +
      "Nach 3.c3 Le7 oder 3.Ld2 Lxd2+ hat Weiß für den verlorenen Bauern nur einen kleinen " +
      "Entwicklungsvorsprung.",
  },

  "1.d4 e6 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer g1 das Feld f3 und öffnet die Diagonale " +
      "e1–h4, sodass 2...Dh4+ das schwächende 3.g3 oder mit 3.Kd2 den Verlust der Rochade " +
      "erzwingt. Gegen ...d5 oder ...c5 tut der Zug nichts.",
  },

  "1.d4 e6 2.f4": {
    strategy:
      "Kontrolliert e5 für eine holländische Struktur, entwickelt aber keine Figur und öffnet " +
      "die Diagonale e1–h4, sodass 2...Dh4+ sofort 3.g3 erzwingt. Der Königsflügel ist " +
      "geschwächt, bevor Weiß entwickelt hat, und Schwarz setzt frei mit ...d5 oder ...c5 " +
      "fort.",
  },

  "1.d4 e6 2.g4": {
    strategy:
      "Gewinnt Raum am Königsflügel, lässt den Bauern aber ungedeckt: 2...Dh4 greift ihn " +
      "sofort an, fesselt den Bauern f2 und erzwingt 3.h3 oder 3.Lh3, um ihn zu halten. Der " +
      "Königsflügel ist geschwächt, bevor sich auch nur eine Figur entwickelt hat.",
  },

  "1.d4 e6 2.h3": {
    strategy:
      "Ein Wartezug, der weder für das Zentrum noch für die Entwicklung etwas tut. Schwarz " +
      "spielt ...d5 und ...Sf6, während die weißen Figuren noch zu Hause stehen.",
  },

  "1.d4 e6 2.h4": {
    strategy:
      "Ein Flankenvorstoß, der weder für das Zentrum noch für die Entwicklung etwas tut und " +
      "den Königsflügel ohne Ziel lockert. Weiß hat ein Tempo verloren, und Schwarz erhält " +
      "mit ...d5 ein bequemes Spiel.",
  },

  "1.d4 e6 2.Bd2": {
    strategy:
      "Nimmt dem Springer b1 das Feld d2 und stellt den Läufer auf ein passives Feld, wo er " +
      "weniger leistet als auf f4. Schwarz entwickelt sich frei mit ...d5, ...Sf6 und ...c5.",
  },

  "1.d4 e6 2.Be3": {
    strategy:
      "Blockiert den e-Bauern vollständig, da e2-e4 ein freies Feld e3 voraussetzt, sodass " +
      "der Läufer f1 nur über g3 und Lg2 ins Spiel kommt, solange der Läufer dort steht. Der " +
      "Zug greift das Zentrum nicht an, und Schwarz gewinnt mit ...d5 oder ...c5 Raum.",
  },

  "1.d4 e6 2.Qd2": {
    strategy:
      "Ein früher Damenzug, der den Läufer c1 verstellt, dem Springer b1 das Feld d2 nimmt " +
      "und nichts entwickelt. 2...Lb4 greift die Dame sofort an, sodass Weiß sie erneut " +
      "ziehen oder mit c3 oder Sc3 dazwischenziehen muss, und Schwarz besetzt mit ...d5 das " +
      "Zentrum.",
  },

  "1.d4 e6 2.Qd3": {
    strategy:
      "Bringt die Dame früh heraus und verstellt die Diagonale des Läufers f1. Schwarz kann " +
      "mit ...Sc6 und ...Sb4 entwickeln oder mit ...c5 gegen d4 vorgehen, während Weiß für " +
      "den Ausflug der Dame keine Entwicklung vorzuweisen hat.",
  },

  "1.d4 e6 2.Nh3": {
    strategy:
      "Ein Randspringer auf dem Weg nach f4, wo er Druck auf e6 ausüben würde, doch er steht " +
      "weit vom Zentrum entfernt und lässt das natürliche Feld f3 ungenutzt. Schwarz besetzt " +
      "einfach mit ...d5 das Zentrum.",
  },

  "1.d4 e6 2.Na3": {
    strategy:
      "Strebt vom Rand nach c4 oder b5 und tut nichts gegen das Zentrum. Schwarz kann sofort " +
      "...d5 spielen oder mit 2...Lxa3 3.bxa3 schlagen, was die weißen a-Bauern verdoppelt " +
      "und isoliert, Weiß aber das Läuferpaar überlässt.",
  },

  "1.d4 e6 2.d5": {
    strategy:
      "Tauscht sofort den d-Bauern gegen den e-Bauern: Nach 2...exd5 3.Dxd5 steht die Dame " +
      "exponiert im Zentrum, und Schwarz entwickelt sich mit ...Sf6 und ...c6 unter " +
      "Tempogewinn.",
  },

  "1.d4 e6 2.Kd2": {
    strategy:
      "Verzichtet auf die Rochade und stellt den König ins offene Zentrum, wo 2...Lb4+ Zeit " +
      "gewinnt und der König den Läufer c1 und die Dame verstellt. Für die dauerhafte " +
      "Schwäche erhält Weiß nichts.",
  },

  "1.d4 e6 2.Bg5": {
    strategy:
      "Stellt den Läufer ein: Die Diagonale d8–g5 der Dame ist nach ...e6 offen, nichts deckt " +
      "den Läufer, und 2...Dxg5 gewinnt eine Figur.",
  },

  "1.d4 e6 2.Bh6": {
    strategy:
      "Verliert den Läufer ohne Gegenwert: 2...gxh6 oder 2...Sxh6 schlägt ihn, und nichts " +
      "schlägt zurück.",
  },

  "1.d4 e6": {
    name: "Franco-Indische Verteidigung",
    background:
      "Der Name spiegelt wider, dass 1...e6 in die Französische Verteidigung oder in eine der " +
      "Indischen Verteidigungen übergehen kann. Eric Schiller schlug den Namen " +
      "Horwitz-Verteidigung vor, nach Bernhard Horwitz, der sie zwischen 1849 und 1852 gegen " +
      "Daniel Harrwitz spielte.",
  },
};
