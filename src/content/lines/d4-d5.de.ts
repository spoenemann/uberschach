import type { OpeningTexts } from "../book.ts";

// German prose for d4-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.d4 d5 2.c4": {
    name: "Damengambit",
    background:
      "Eine der ältesten bekannten Eröffnungen: Sie wird in der Göttinger Handschrift von " +
      "1490 erwähnt und wurde im 17. Jahrhundert von Gioachino Greco analysiert. Verbreitet " +
      "wurde sie erst mit dem Turnier in Wien 1873, und im Weltmeisterschaftskampf 1927 " +
      "zwischen Capablanca und Aljechin kam sie in allen bis auf zwei der 34 Partien aufs " +
      "Brett.",
    strategy:
      "Greift d5 vom Flügel aus an und bereitet e4 vor; der angebotene Bauer lässt sich von " +
      "Schwarz nicht ohne Zugeständnisse halten. Schwarz nimmt mit ...dxc4 an und gibt den " +
      "Bauern für eine rasche Entwicklung zurück, oder er stützt d5 mit ...e6 für eine solide " +
      "Struktur oder mit ...c6, wobei der weißfeldrige Läufer frei bleibt. Weiß erhält das " +
      "größere Zentrum und anhaltenden Druck auf d5, muss aber mit den Hebeln ...c5 und ...e5 " +
      "rechnen.",
  },

  "1.d4 d5 2.Nf3": {
    name: "Damenbauernspiel: Zukertort-Variante",
    background:
      "2.Sf3 ist nach 1.d4 d5 hinter dem Damengambit 2.c4 der zweithäufigste Zug, und die " +
      "Stellung entsteht oft auch über 1.Sf3.",
    strategy:
      "Entwickelt den Königsspringer auf ein Feld, von dem aus er e5 und d4 kontrolliert, " +
      "ohne die Bauernstruktur festzulegen. Weiß hält sich alle Hauptsysteme offen: c4 führt " +
      "zum Damengambit, Lf4 zum Londoner System, Lg5 zum Torre-Angriff, e3 mit Ld3 zum " +
      "Colle-System und g3 zu einem Fianchetto-Aufbau. Schwarz antwortet meist 2...Sf6, und " +
      "erst dann muss Weiß sein System wählen.",
  },

  "1.d4 d5 2.Bf4": {
    name: "Londoner System",
    background:
      "Benannt nach dem Turnier London 1922, in dem die Eröffnung siebenmal gespielt wurde, " +
      "unter anderem in Partien von Capablanca, Aljechin und Rubinstein. James Mason setzte " +
      "sie als erster Spieler von Meisterstärke regelmäßig ein, in Wien 1882, London 1883 und " +
      "New York 1889.",
    strategy:
      "Entwickelt den Läufer c1 vor die Bauernkette, bevor e3 ihn einsperren kann, und plant " +
      "e3, Sf3, c3, Sbd2 und Ld3 in einem kompakten Aufbau, der wenig Theorie verlangt. " +
      "Schwarz kann d4 mit ...c5 angreifen, oft gefolgt von ...Db6 gegen den ungedeckten " +
      "Bauern b2, oder mit ...Sf6 und ...e6 eine solide Struktur aufbauen. Der Aufbau ist " +
      "risikoarm, doch nach gängiger Einschätzung kann Schwarz recht leicht ausgleichen.",
  },

  "1.d4 d5 2.Nc3": {
    name: "Damenbauernspiel: Tschigorin-Variante",
    strategy:
      "Entwickelt den Springer, übt Druck auf d5 aus und bereitet e4 vor, verstellt aber den " +
      "c-Bauern, sodass der übliche Hebel c4 nicht zur Verfügung steht. Weiß setzt mit 3.Lg5 " +
      "gegen einen Springer auf f6 fort, mit 3.Lf4 zu einem Aufbau nach Art des Londoner " +
      "Systems oder mit dem Bauernangebot 3.e4. Schwarz antwortet meist 2...Sf6, und auch " +
      "2...c5 ist spielbar: Der Zug greift d4 an, das der c-Bauer nicht von c3 aus stützen " +
      "kann.",
  },

  "1.d4 d5 2.Bg5": {
    name: "Hodgson-Angriff",
    background:
      "Benannt nach dem englischen Großmeister Julian Hodgson, der die Eröffnung eingehend " +
      "untersuchte und dabei mehrere neue Ideen fand; Preston Ware hatte sie schon in den " +
      "1880er-Jahren erprobt. Bis in die 1980er-Jahre war sie sehr selten, dann versuchten " +
      "sich unter anderem Michael Adams und Tony Miles daran. Sie heißt auch " +
      "Lewitski-Angriff, nach Stepan Lewitski, und Pseudo-Trompowsky.",
    strategy:
      "Entwickelt den Läufer nach g5, wo er e7 ins Visier nimmt und bereitsteht, ...Sf6 mit " +
      "Lxf6 zu beantworten und Schwarz einen Doppelbauern auf der f-Linie zu geben. Schwarz " +
      "hat solide Antworten: 2...h6 3.Lh4 c6 mit anschließendem ...Db6 greift b2 an, das der " +
      "Läufer nicht mehr deckt, und nach 2...Sf6 3.Lxf6 erhält Schwarz das Läuferpaar für die " +
      "beschädigte Struktur.",
  },

  "1.d4 d5 2.e3": {
    strategy:
      "Stützt d4 und öffnet den Läufer f1, mit Kurs auf einen Colle-Aufbau mit Sf3 und Ld3 " +
      "oder einen Stonewall-Aufbau mit f4. Der Läufer c1 ist hinter dem Bauern eingesperrt, " +
      "während Schwarz sofort ...Lf5 außerhalb der Kette entwickeln kann. Solide und " +
      "risikoarm, aber passiv, weil nichts gegen d5 geschieht.",
  },

  "1.d4 d5 2.e4": {
    strategy:
      "Bietet den e-Bauern für schnelle Entwicklung an: Nach 2...dxe4 3.Sc3 Sf6 4.f3 erhält " +
      "Weiß für den Bauern ein Tempo und die halboffene f-Linie. Die Theorie kennt für " +
      "Schwarz mehrere Wege zum Ausgleich, daher ist das Gambit auf höchstem Niveau fast nie " +
      "zu sehen, und Schwarz kann es auch mit 2...e6, 2...c6 oder 2...Sc6 ablehnen.",
  },

  "1.d4 d5 2.g3": {
    strategy:
      "Bereitet Lg2 vor, der auf der langen Diagonale Druck auf d5 ausübt, und kann nach Sf3 " +
      "und c4 zu einem Aufbau nach Art der Katalanischen Eröffnung führen. Solide, aber " +
      "langsam: d5 wird noch nicht angegriffen, sodass Schwarz sich mit ...Lf5, ...Sf6 und " +
      "...e6 oder ...c5 problemlos entwickeln kann.",
  },

  "1.d4 d5 2.b3": {
    strategy:
      "Bereitet Lb2 vor, der d4 von hinten deckt, wobei der Bauer d4 dem Läufer die lange " +
      "Diagonale versperrt. Solide, aber langsam: Gegen d5 geschieht nichts, sodass Schwarz " +
      "seine Entwicklung mit ...Sf6, ...Lf5 und ...e6 oder ...c5 in aller Ruhe abschließt.",
  },

  "1.d4 d5 2.f4": {
    strategy:
      "Kontrolliert e5 und strebt einen Stonewall-Aufbau mit e3, Sf3 und Ld3 an. Der Zug ist " +
      "spielbar, hinterlässt aber auf e4 ein Loch für einen schwarzen Springer, öffnet die " +
      "Diagonale e1–h4 und macht den Läufer c1 zu einem schlechten Läufer hinter den eigenen " +
      "Bauern. Schwarz entwickelt sich leicht mit ...Lf5 oder mit ...Sf6 und ...e6.",
  },

  "1.d4 d5 2.c3": {
    strategy:
      "Stützt d4 und öffnet die Diagonale d1–a4, sodass ein frühes ...Lf5 mit Db3 gegen den " +
      "Bauern b7 beantwortet werden kann. Dafür verliert der Springer b1 das Feld c3, und ein " +
      "späteres c4 kostet ein zweites Tempo; Schwarz entwickelt sich mit ...Sf6 und ...e6 " +
      "ungehindert.",
  },

  "1.d4 d5 2.a3": {
    strategy:
      "Ein Randbauernzug, der weder eine Figur entwickelt noch d5 angreift. Weiß gewinnt nur " +
      "die Kontrolle über b4, während Schwarz sich mit ...Sf6, ...Lf5 und ...e6 ungehindert " +
      "entwickelt.",
  },

  "1.d4 d5 2.a4": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel, schwächt aber b4, entwickelt keine Figur und greift " +
      "d5 nicht an. Schwarz entwickelt sich bequem mit ...Sf6, ...Lf5 und ...e6.",
  },

  "1.d4 d5 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel, lässt den Bauern b4 aber ungedeckt: Nach ...e6 greift ihn " +
      "der Läufer f8 an, und ...Lxb4 käme mit Schach, sodass Weiß ein Tempo für a3 oder c3 " +
      "aufwenden muss. Gegen d5 geschieht derweil nichts.",
  },

  "1.d4 d5 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer g1 das Feld f3 und öffnet die Diagonale e1–h4 " +
      "zum König. Nach 2...Sf6 3.e4 dxe4 4.Sc3 steht Weiß mit einem Bauern weniger im " +
      "Blackmar-Diemer-Gambit, und Schwarz kann d4 auch sofort mit 2...c5 angreifen.",
  },

  "1.d4 d5 2.h3": {
    strategy:
      "Verhindert ...Lg4, verbraucht aber ein Tempo für einen Randbauernzug, der nichts " +
      "entwickelt und d5 unangetastet lässt. Schwarz entwickelt sich mit ...Sf6, ...Lf5 und " +
      "...e6 ungehindert.",
  },

  "1.d4 d5 2.h4": {
    strategy:
      "Zieht einen Randbauern vor, der weder eine Figur entwickelt noch d5 angreift, und " +
      "lockert den Königsflügel. Schwarz entwickelt sich mit ...Sf6, ...Lf5 und ...e6 " +
      "ungehindert.",
  },

  "1.d4 d5 2.Na3": {
    strategy:
      "Stellt den Springer an den Rand, wo er b5 und c4 ins Auge fasst, aber wenig für das " +
      "Zentrum tut. Nach ...e6 kann Schwarz ihn mit ...Lxa3 bxa3 abtauschen, wonach Weiß " +
      "einen Doppelbauern auf der a-Linie hat.",
  },

  "1.d4 d5 2.Nd2": {
    strategy:
      "Entwickelt den Springer und unterstützt ein späteres e4 oder c4, sperrt aber den " +
      "Läufer c1 ein, bis der Springer weiterzieht oder b3 gespielt ist. Gegen d5 geschieht " +
      "nichts, sodass Schwarz sich mit ...Sf6, ...Lf5 und ...e6 leicht entwickelt.",
  },

  "1.d4 d5 2.Nh3": {
    strategy:
      "Stellt den Springer an den Rand, wo ...Lxh3 gxh3 Weiß einen Doppelbauern auf der " +
      "h-Linie und einen geschwächten Königsflügel einbringt, nur für das Läuferpaar. Auch " +
      "ohne den Abtausch tut der Springer wenig für das Zentrum.",
  },

  "1.d4 d5 2.Bd2": {
    strategy:
      "Entwickelt den Läufer auf ein passives Feld, wo er das natürliche Feld des Springers " +
      "b1 besetzt, die Dame verstellt und nichts gegen d5 unternimmt. Schwarz übernimmt mit " +
      "...Sf6, ...Lf5 und ...e6 die Führung in der Entwicklung.",
  },

  "1.d4 d5 2.Be3": {
    strategy:
      "Stellt den Läufer auf das natürliche Feld des e-Bauern, sodass e3 nicht mehr zur " +
      "Verfügung steht, und der Läufer unternimmt nichts gegen d5. Schwarz entwickelt sich " +
      "mit ...Sf6, ...Lf5 und ...e6 ungehindert.",
  },

  "1.d4 d5 2.Qd2": {
    strategy:
      "Bringt die Dame früh auf ein Feld, auf dem sie den Läufer c1 verstellt und dem " +
      "Springer b1 das Feld d2 nimmt, und unternimmt nichts gegen d5. Schwarz entwickelt sich " +
      "mit ...Sf6, ...Lf5 und ...e6 ungehindert.",
  },

  "1.d4 d5 2.Qd3": {
    name: "Amazonen-Angriff",
    strategy:
      "Bringt die Dame vor den Leichtfiguren heraus, doch ...Lf5 greift sie sofort an, sodass " +
      "Weiß ein Tempo aufwenden muss, um sie erneut zu ziehen. Schwarz gewinnt Zeit für " +
      "...Sf6 und ...e6 und liegt in der Entwicklung vorn.",
  },

  "1.d4 d5 2.g4": {
    name: "Damenbauernspiel: Zürcher Gambit",
    strategy:
      "Stellt den Bauern ein: 2...Lxg4 gewinnt ihn, weil die Dame nicht zurückschlagen kann, " +
      "solange der Bauer e2 die Diagonale versperrt, und der Königsflügel ist ohne Gegenwert " +
      "geschwächt.",
  },

  "1.d4 d5 2.Bh6": {
    strategy:
      "Verliert den Läufer ohne Gegenwert, denn 2...gxh6 schlägt ihn, und keine weiße Figur " +
      "deckt h6.",
  },

  "1.d4 d5 2.Kd2": {
    strategy:
      "Gibt die Rochade auf und stellt den König auf ein Feld, auf dem er den Läufer c1 und " +
      "die Dame verstellt. Schwarz kann ihn sofort jagen, etwa mit ...Sf6 und ...Se4+.",
  },

  "1.d4 d5": {
    name: "Geschlossenes Spiel",
    background:
      "1.d4 d5 war Anfang des 20. Jahrhunderts weit verbreitet, als Weißspieler häufiger " +
      "andere erste Züge als 1.e4 versuchten. 1...d5 ist bis heute die zweithäufigste Antwort " +
      "auf 1.d4, nach 1...Sf6.",
  },
};
