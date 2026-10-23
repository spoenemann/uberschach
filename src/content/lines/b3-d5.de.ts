import type { OpeningTexts } from "../book.ts";

// German prose for b3-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.b3 d5 2.Bb2": {
    strategy:
      "Stellt den Läufer auf die lange Diagonale gegen e5 und g7, sodass ...e5 vorbereitet " +
      "werden muss, meist mit ...Sc6. Weiß setzt mit e3, Sf3 und Le2 oder Lb5 fort oder " +
      "greift d5 mit e3 und c4 an; gegen ...c5 und ...Sc6 ist der übliche Aufbau eine " +
      "Nimzo-Indische Verteidigung mit vertauschten Farben. Schwarz muss auf die Ecke h8 " +
      "achten, denn ...g6 vor ...Sf6 erlaubt Lxh8. Der Preis ist, dass das Zentrum vorerst " +
      "Schwarz gehört.",
  },

  "1.b3 d5 2.Nf3": {
    strategy:
      "Entwickelt den Springer, der e5 und d4 kontrolliert, sodass ...e5 zusammen mit Lb2 " +
      "kaum durchzusetzen ist; die Stellung ist dieselbe wie nach 1.Sf3 d5 2.b3. Typische " +
      "Fortsetzungen sind Lb2, e3 und Le2 oder Lb5, mit c4 als späterem Hebel gegen d5. Weiß " +
      "überlässt Schwarz vorerst das Zentrum, und viele Varianten gelten theoretisch nur als " +
      "ausgeglichen.",
  },

  "1.b3 d5 2.e3": {
    strategy:
      "Öffnet die Diagonale des Läufers f1 und bereitet Lb2, Sf3 und Le2 oder Lb5 vor, mit c4 " +
      "als späterem Hebel gegen d5; meist mündet die Partie in die Varianten mit Lb2. " +
      "Antwortet Schwarz sofort mit 2...e5, folgt Lb2, und Lb5 fesselt einen Springer auf c6, " +
      "der den Bauern deckt. Der Zug ist flexibel und gesund, lässt aber Schwarz zuerst die " +
      "Bauernstruktur wählen.",
  },

  "1.b3 d5 2.c4": {
    strategy:
      "Greift d5 sofort an, mit dem Ziel eines Aufbaus wie in der Englischen Eröffnung, mit " +
      "Lb2 dahinter. Nach 2...dxc4 3.bxc4 hat Weiß die halboffene b-Linie und einen " +
      "zusätzlichen Zentrumsbauern, aber einen isolierten a-Bauern, während 2...d4 Schwarz " +
      "Raum verschafft. Spielbar, doch Schwarz wählt die Struktur, bevor Weiß eine Figur " +
      "entwickelt hat.",
  },

  "1.b3 d5 2.d3": {
    strategy:
      "Bereitet e4 mit Sd2, Sgf3 oder g3 und Lg2 vor, für einen Altindischen Aufbau mit " +
      "vertauschten Farben. Der Zug ist flexibel und gesund, aber passiv: Schwarz besetzt mit " +
      "...e5 und ...Sf6 das Zentrum und begegnet e4 auf Augenhöhe.",
  },

  "1.b3 d5 2.d4": {
    strategy:
      "Besetzt das Zentrum und führt in ein Damenbauernspiel, in dem b3 schon gezogen ist, " +
      "gefolgt von Lb2, Sf3 und c4 oder e3. Solide, aber langsam: Gegen d5 geschieht nichts, " +
      "sodass Schwarz seine Entwicklung mit ...Sf6, ...Lf5 und ...e6 oder ...c5 in aller Ruhe " +
      "abschließt.",
  },

  "1.b3 d5 2.g3": {
    strategy:
      "Bereitet Lg2 vor, sodass ein Läufer auf d5 wirkt und der andere, von b2 aus, auf der " +
      "langen schwarzfeldrigen Diagonale. Schwarz entwickelt sich frei mit ...Sf6, ...c5 und " +
      "...Sc6 oder gewinnt mit ...e5 Raum, und Weiß muss den richtigen Moment für c4 oder für " +
      "d3 und e4 finden. Spielbar, aber das Zentrum bleibt unbestritten.",
  },

  "1.b3 d5 2.f4": {
    strategy:
      "Kontrolliert e5 und bereitet Sf3, e3 und Lb2 für einen Aufbau nach Art der " +
      "Bird-Eröffnung vor. Der Zug schwächt die Diagonale e1–h4 und das Feld e3 und legt den " +
      "f-Bauern fest, bevor Schwarz seinen Aufbau gezeigt hat; er ist gesund, gibt aber die " +
      "Flexibilität der anderen Züge auf.",
  },

  "1.b3 d5 2.Ba3": {
    name: "Larsen-Eröffnung: Grazer Angriff",
    strategy:
      "Richtet den Läufer auf e7 und f8, sodass ...e6 Lxf8 erlaubt und ...Kxf8 erzwingt, " +
      "womit Schwarz das Rochaderecht verliert. Der Läufer verzichtet auf die lange Diagonale " +
      "und hat sonst wenig anzugreifen, und Schwarz kann mit ...Sf6 und ...g6 oder ...Lf5 " +
      "antworten, während 2...c5 durch Lxc5 einen Bauern kosten würde.",
  },

  "1.b3 d5 2.Nc3": {
    strategy:
      "Entwickelt den Springer nach c3, auf die lange Diagonale, die b3 für den Läufer " +
      "vorbereitet hat, und 2...d4 greift ihn sofort an, gewinnt Raum und zwingt ihn, erneut " +
      "zu ziehen, etwa nach e4 oder b1. Weiß verliert ein Tempo, und ein späterer Lb2 beißt " +
      "auf den Bauern d4.",
  },

  "1.b3 d5 2.c3": {
    strategy:
      "Verstellt die lange Diagonale, die b3 für den Läufer vorbereitet hat, denn ein Läufer " +
      "auf b2 stünde nun vor dem eigenen Bauern c3. Schwarz entwickelt sich frei mit ...Sf6, " +
      "...e5 oder ...Lf5, und Weiß hat ein Tempo darauf verwendet, den Sinn von b3 " +
      "zunichtezumachen.",
  },

  "1.b3 d5 2.Na3": {
    strategy:
      "Stellt den Springer an den Rand, wo er b5 ins Auge fasst, während c4 vom Bauern d5 " +
      "kontrolliert wird. Er tut nichts für das Zentrum, ...c6 nimmt ihm auch noch b5, und " +
      "Schwarz baut mit ...e5 und ...Sf6 sein Zentrum auf.",
  },

  "1.b3 d5 2.Nh3": {
    strategy:
      "Strebt nach f4 oder g5, doch 2...Lxh3 erzwingt 3.gxh3, da der Läufer f1 durch g2 " +
      "versperrt ist, und lässt Weiß mit verdoppelten, isolierten h-Bauern zurück. Auch ohne " +
      "den Tausch steht der Springer am Rand schlecht.",
  },

  "1.b3 d5 2.b4": {
    strategy:
      "Zieht denselben Bauern ein zweites Mal und erreicht die Stellung nach 1.b4 d5 mit " +
      "Schwarz am Zug, also ein volles Tempo weniger. Auf b4 wird der Bauer zum Ziel von " +
      "...a5, ...Dd6 oder, sobald der e-Bauer gezogen hat, vom Läufer f8, und er braucht a3 " +
      "oder c3 als Stütze.",
  },

  "1.b3 d5 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer g1 das Feld f3 und schwächt die Diagonale " +
      "e1–h4. Schwarz antwortet mit ...e5 oder ...Sf6, und Weiß hat ein Tempo verbraucht, " +
      "ohne eine Figur zu entwickeln.",
  },

  "1.b3 d5 2.a3": {
    strategy:
      "Ein Wartezug, der weder eine Figur entwickelt noch um das Zentrum kämpft; er nimmt den " +
      "schwarzen Figuren nur das Feld b4. Schwarz baut in aller Ruhe mit ...e5 oder ...Sf6 " +
      "auf.",
  },

  "1.b3 d5 2.a4": {
    strategy:
      "Zieht einen Randbauern, der weder eine Figur entwickelt noch um das Zentrum kämpft. Er " +
      "kontrolliert b5, lässt aber b4 schwach, und Schwarz spielt in aller Ruhe ...e5 oder " +
      "...Sf6.",
  },

  "1.b3 d5 2.h3": {
    strategy:
      "Nimmt dem Läufer c8 das Feld g4, verbraucht aber ein Tempo für einen vorbeugenden Zug, " +
      "bevor eine Figur entwickelt ist, und überlässt Schwarz mit ...e5 oder ...Sf6 das " +
      "Zentrum.",
  },

  "1.b3 d5 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel und bereitet h5 vor, tut aber nichts für Zentrum und " +
      "Entwicklung und schwächt die Felder g3 und g4. Schwarz entwickelt sich einfach mit " +
      "...Sf6 und ...Lf5.",
  },

  "1.b3 d5 2.e4": {
    strategy:
      "Stellt einen Bauern nach e4, wo d5 ihn angreift und nichts ihn deckt, sodass 2...dxe4 " +
      "ihn einfach gewinnt. Lb2 greift g7 nur an, bis ...Sf6 die Diagonale schließt, und " +
      "Schwarz behält den Mehrbauern mit ...Lf5 oder ...f5.",
  },

  "1.b3 d5 2.g4": {
    strategy:
      "Verliert einen Bauern durch 2...Lxg4: ...d5 hat die Diagonale c8–h3 geöffnet, und " +
      "nichts deckt g4. Weiß erhält keine Kompensation und hat zudem den Königsflügel " +
      "geschwächt.",
  },

  "1.b3 d5": {
    name: "Larsen-Eröffnung: Klassische Variante",
    background:
      "Aron Nimzowitsch erreichte diese Art von Stellung häufiger über 1.Sf3 d5 2.b3, eine " +
      "Zugfolge, die ...e5 ausschließt. Nach 1.b3 selbst ist 1...d5 mit etwa 27 Prozent der " +
      "Partien die zweithäufigste Antwort von Schwarz.",
  },
};
