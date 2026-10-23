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

  "1.d4 d5 2.c4 e6": {
    name: "Abgelehntes Damengambit",
    background:
      "Es wurde im frühen 20. Jahrhundert besonders häufig gespielt und gilt als eine der " +
      "zuverlässigsten Verteidigungen von Schwarz gegen 1.d4. Viswanathan Anand wählte seine " +
      "Lasker-Variante in der letzten Partie der Weltmeisterschaft 2010, besiegte Topalow und " +
      "verteidigte den Titel.",
    strategy:
      "Stützt d5 mit dem e-Bauern und errichtet ein solides Zentrum, meist gefolgt von " +
      "...Sf6, ...Le7 und ...O-O. Weiß hält mit Sc3, Lg5 und der Option cxd5 den Druck auf d5 " +
      "aufrecht und hat in der Regel etwas mehr Raum. Der Preis ist der Läufer c8, der hinter " +
      "e6 eingesperrt bleibt, bis ...b6 nebst ...Lb7 oder ein befreiender Hebel mit ...c5 " +
      "oder ...e5 ihm Spiel verschafft.",
  },

  "1.d4 d5 2.c4 c6": {
    name: "Slawische Verteidigung",
    background:
      "Obwohl sie schon 1590 analysiert wurde, wurde sie erst in den 1920er-Jahren eingehend " +
      "erforscht. Die beiden Weltmeisterschaftskämpfe zwischen Aljechin und Euwe 1935 und " +
      "1937 stellten sie gründlich auf die Probe, und Wladimir Kramnik spielte sie bei der " +
      "Weltmeisterschaft 2006 in sechs seiner acht Schwarzpartien.",
    strategy:
      "Deckt d5 mit dem c-Bauern und hält die Diagonale des Läufers c8 offen, sodass der " +
      "Läufer noch nach f5 oder g4 gelangen kann, oft nach ...Sf6 und ...dxc4. Nach ...dxc4 " +
      "stützt der Bauer c6 zudem ...b5, um den Bauern zu halten oder Zeit gegen die " +
      "schlagende Figur zu gewinnen, während ein frühes ...e6 in die Halbslawische " +
      "Verteidigung führt. Die Nachteile sind, dass ...c6 keine Figur entwickelt und dem " +
      "Springer b8 das Feld c6 nimmt, und dass der spätere Hebel ...c5 ein Tempo kostet.",
  },

  "1.d4 d5 2.c4 dxc4": {
    name: "Angenommenes Damengambit",
    background:
      "Der Weltmeisterschaftskampf 1886 zwischen Wilhelm Steinitz und Johannes Zukertort " +
      "brachte die ersten modernen Ideen: Steinitz gab den Bauern zurück und hinterließ Weiß " +
      "einen isolierten Bauern auf d4. Alexander Aljechin steuerte neue Ideen bei, und ab den " +
      "1930er-Jahren wurde es auf höchstem Niveau gespielt. Nach dem Zweiten Weltkrieg verlor " +
      "es an Boden, als die Indischen Verteidigungen aufkamen, doch Ende der 1990er-Jahre " +
      "kehrten mehrere Spieler der Weltspitze zu ihm zurück, und heute gilt es als korrekt.",
    strategy:
      "Nimmt den Bauern und gibt das Zentrum für freies Figurenspiel auf. Schwarz entwickelt " +
      "sich meist mit ...Sf6 und ...e6 und greift dann mit ...c5 und ...cxd4 das weiße " +
      "Zentrum an. Weiß gewinnt den Bauern in der Regel mit e3 und Lxc4 zurück; ihn mit ...b5 " +
      "zu halten, rächt sich meist nach a4, daher nutzt Schwarz die Zeit stattdessen für " +
      "Spiel gegen das Zentrum.",
  },

  "1.d4 d5 2.c4 Nc6": {
    name: "Tschigorin-Verteidigung",
    background:
      "Benannt nach dem russischen Meister Michail Tschigorin aus dem 19. Jahrhundert. " +
      "Wassili Smyslow setzte sie in den 1980er-Jahren gegen Garri Kasparow ein und erreichte " +
      "ein Remis, und Alexander Morosewitsch, vielleicht der einzige moderne Großmeister, der " +
      "sie regelmäßig spielt, veröffentlichte 2007 gemeinsam mit Wladimir Barski ein Buch " +
      "über sie.",
    strategy:
      "Entwickelt mit Druck auf d4 und bereitet ...e5 vor, doch der Springer verstellt den " +
      "c-Bauern und überlässt d5 der Dame. Schwarz spielt auf rasche Figurenaktivität und " +
      "gibt dafür einen Läufer gegen einen Springer, wie nach 3.Sf3 Lg4 4.cxd5 Lxf3, oder " +
      "schlägt mit der Dame zurück, wie nach 3.cxd5 Dxd5 4.e3 e5. Die Verteidigung ist " +
      "spielbar und eine nützliche Überraschungswaffe, ihre Theorie ist aber weniger " +
      "ausgearbeitet als die der Hauptverteidigungen.",
  },

  "1.d4 d5 2.c4 Bf5": {
    name: "Keres-Verteidigung",
    background:
      "Auch als Baltische Verteidigung, Grau-Verteidigung oder Sahovic-Verteidigung bekannt. " +
      "Großmeister wie Paul Keres und Alexei Schirow haben sie gespielt, doch unter " +
      "Schachmeistern hat sie keine weite Verbreitung gefunden.",
    strategy:
      "Entwickelt den Läufer, bevor ...e6 ihn einsperren kann, lässt aber b7 ungedeckt und " +
      "den Läufer exponiert. 3.Db3 greift b7 sofort an, und 3.cxd5 Dxd5 4.Sc3 gewinnt Zeit, " +
      "gefolgt von e4, daher beantwortet Schwarz 3.cxd5 mit 3...Lxb1 und überlässt Weiß das " +
      "Läuferpaar. Es ist eine ungewöhnliche, aber spielbare Variante.",
  },

  "1.d4 d5 2.c4 e5": {
    name: "Albins Gegengambit",
    background:
      "Benannt nach Adolf Albin, der es 1893 in New York gegen Emanuel Lasker spielte, obwohl " +
      "Cavallotti es schon beim Turnier in Mailand 1881 gegen Salvioli gespielt hatte. " +
      "Alexander Morosewitsch setzte es in den 2000er-Jahren mit einigem Erfolg ein.",
    strategy:
      "Opfert nach 3.dxe5 d4 einen Bauern für einen Keil im Zentrum auf d4, mit rascher " +
      "Entwicklung durch ...Sc6 und ...Le6, oft langer Rochade und einigen Angriffschancen. " +
      "Weiß gibt den Bauern meist im passenden Moment für einen positionellen Vorteil zurück, " +
      "oft nach g3, Lg2 und Sbd2. Das unvorsichtige 4.e3 läuft in die Lasker-Falle.",
  },

  "1.d4 d5 2.c4 c5": {
    name: "Österreichische Verteidigung",
    background:
      "Erstmals 1604 von Alessandro Salvio im Druck beschrieben. Der Name geht auf " +
      "österreichische Spieler zurück, die sie untersuchten, darunter Hans Haberditz, Hans " +
      "Müller und Ernst Grünfeld. Hikaru Nakamura spielte sie 2023 und 2024, erreichte damit " +
      "im Finale der Champions Chess Tour 2023 ein Remis gegen Magnus Carlsen und besiegte " +
      "bei Norway Chess 2024 Ding Liren.",
    strategy:
      "Spiegelt den weißen Zug und greift d4 sofort an. Nach 3.cxd5 sollte Schwarz nicht mit " +
      "der Dame zurückschlagen, da 3...Dxd5 4.Sf3 cxd4 5.Sc3 Zeit gegen sie gewinnt; daher " +
      "bereitet 3...Sf6 das Zurückschlagen mit dem Springer vor. Die Theorie hält 4.Sf3 oder " +
      "4.e4 für vorteilhaft für Weiß, und Schwarz spielt bestenfalls auf Remis.",
  },

  "1.d4 d5 2.c4 Nf6": {
    strategy:
      "Entwickelt den Springer, überlässt d5 aber der Dame: 3.cxd5 Sxd5 4.e4 vertreibt den " +
      "Springer mit Tempogewinn und verschafft Weiß ein breites Bauernzentrum. Eine Stützung " +
      "von d5 zuerst mit ...e6 oder ...c6 vermeidet das.",
  },

  "1.d4 d5 2.c4 Na6": {
    strategy:
      "Zielt vom Rand aus auf b4, tut aber nichts für das Zentrum und überlässt d5 allein der " +
      "Dame. Nach 3.cxd5 Dxd5 4.Sc3 wird die Dame zurückgedrängt, und Weiß führt in der " +
      "Entwicklung.",
  },

  "1.d4 d5 2.c4 Be6": {
    strategy:
      "Deckt d5 ein zweites Mal, doch der Läufer verstellt den e-Bauern und lässt b7 " +
      "ungedeckt. Nach 3.cxd5 Lxd5 4.Sc3 wird er erneut angegriffen, und Weiß entwickelt sich " +
      "mit Tempogewinn.",
  },

  "1.d4 d5 2.c4 Bg4": {
    strategy:
      "Entwickelt den Läufer, bevor ...e6 ihn einsperren kann, doch auf g4 greift er nur den " +
      "gut gedeckten Bauern e2 an und lässt b7 ungedeckt. 3.cxd5 Dxd5 4.Sc3 gewinnt Zeit " +
      "gegen die Dame, und f3 oder h3 vertreibt später den Läufer.",
  },

  "1.d4 d5 2.c4 Qd7": {
    strategy:
      "Hält d5 gedeckt, stellt die Dame aber nach d7, wo sie den Läufer c8 verstellt und dem " +
      "Springer b8 das Feld d7 nimmt. Nach 3.cxd5 Dxd5 4.Sc3 muss die Dame erneut ziehen, und " +
      "Weiß hat einen Entwicklungsvorsprung.",
  },

  "1.d4 d5 2.c4 Qd6": {
    strategy:
      "Bringt die Dame früh heraus, um d5 zu halten, doch nach 3.cxd5 Dxd5 4.Sc3 muss sie " +
      "erneut ziehen, während Weiß sich mit Tempogewinn entwickelt.",
  },

  "1.d4 d5 2.c4 Nh6": {
    strategy:
      "Strebt vom Rand nach f5, doch der Läufer c1 zielt bereits auf h6: 3.Lxh6 gxh6 zerstört " +
      "die schwarzen Königsflügelbauern, und als Ausgleich bleibt nur das Läuferpaar. Zudem " +
      "bleibt der Bauer d5 allein der Dame überlassen.",
  },

  "1.d4 d5 2.c4 a6": {
    strategy:
      "Bereitet ...b5 für den Fall von ...dxc4 vor, verbraucht aber ein Tempo für einen " +
      "Randbauernzug und überlässt d5 der Dame. Nach 3.cxd5 Dxd5 4.Sc3 wird die Dame " +
      "angegriffen und muss zurückweichen.",
  },

  "1.d4 d5 2.c4 a5": {
    strategy:
      "Ein Flügelzug, der b5 schwächt und weder zum Zentrum noch zur Entwicklung beiträgt. " +
      "Weiß spielt 3.cxd5 Dxd5 4.Sc3 und gewinnt ein Tempo gegen die Dame.",
  },

  "1.d4 d5 2.c4 b6": {
    strategy:
      "Bereitet ...Lb7 vor, doch dort stieße der Läufer auf den eigenen Bauern d5, und d5 " +
      "bleibt allein der Dame überlassen. 3.cxd5 Dxd5 4.Sc3 vertreibt die Dame mit " +
      "Tempogewinn.",
  },

  "1.d4 d5 2.c4 f6": {
    strategy:
      "Nimmt dem Springer das Feld f6 und schwächt e6 sowie die Diagonale e8–h5, ohne d5 zu " +
      "stützen oder eine Figur zu entwickeln. Weiß antwortet 3.cxd5 Dxd5 4.Sc3 und gewinnt " +
      "ein Tempo.",
  },

  "1.d4 d5 2.c4 f5": {
    strategy:
      "Nimmt e4 wie in einem holländischen Aufbau unter Kontrolle, überlässt d5 aber der Dame " +
      "und schwächt e6 sowie die Diagonale e8–h5. 3.cxd5 Dxd5 4.Sc3 gewinnt Zeit gegen die " +
      "Dame.",
  },

  "1.d4 d5 2.c4 g6": {
    strategy:
      "Bereitet das Fianchetto ...Lg7 vor, vernachlässigt aber das Zentrum. 3.cxd5 Dxd5 4.Sc3 " +
      "verjagt die Dame, und Weiß behält das größere Zentrum und den Entwicklungsvorsprung.",
  },

  "1.d4 d5 2.c4 h6": {
    strategy:
      "Nimmt dem Läufer c1 das Feld g5, ist aber ein langsamer Randbauernzug, der weder d5 " +
      "noch der Entwicklung hilft. Nach 3.cxd5 Dxd5 4.Sc3 greift Weiß die Dame mit Tempo an.",
  },

  "1.d4 d5 2.c4 h5": {
    strategy:
      "Verbraucht ein Tempo am Rand und lockert g5 und g6, ohne Bezug zu d5 oder zur " +
      "Entwicklung. Weiß antwortet 3.cxd5 Dxd5 4.Sc3 und entwickelt sich mit Tempogewinn.",
  },

  "1.d4 d5 2.c4 Nd7": {
    strategy:
      "Verstellt der Dame die Deckung von d5, sodass 3.cxd5 einen Bauern gewinnt: Nach " +
      "3...Sgf6 4.Sc3 und e4 behält Weiß ihn. Der Springer auf d7 sperrt zudem den Läufer c8 " +
      "ein.",
  },

  "1.d4 d5 2.c4 Bd7": {
    strategy:
      "Verstellt der Dame die Deckung von d5, sodass 3.cxd5 einen Bauern gewinnt, den keine " +
      "schwarze Figur sofort zurückschlagen kann. Der Läufer steht auf d7 passiv und nimmt " +
      "dem Springer b8 das Feld d7.",
  },

  "1.d4 d5 2.c4 Bh3": {
    strategy:
      "Gibt den Läufer umsonst weg: 3.gxh3 schlägt ihn, und da keine schwarze Figur auf h3 " +
      "zurückschlagen kann, hat Schwarz keinerlei Kompensation.",
  },

  "1.d4 d5 2.c4 Kd7": {
    strategy:
      "Gibt das Rochaderecht auf und verstellt der Dame die Deckung von d5, sodass 3.cxd5 " +
      "einen Bauern gewinnt, der nicht sofort zurückgeschlagen werden kann. Der König bleibt " +
      "ohne jede Gegenleistung in der Mitte.",
  },

  "1.d4 d5 2.c4 b5": {
    name: "Abgelehntes Damengambit: Zilbermints-Gambit",
    strategy:
      "Bietet den b-Bauern an, um den c-Bauern abzulenken, doch 3.cxb5 gewinnt ihn, da nichts " +
      "zurückschlagen kann, und Schwarz hat keinen Entwicklungsvorsprung als Ausgleich. Der " +
      "Damenflügel bleibt dauerhaft geschwächt.",
  },

  "1.d4 d5 2.c4 g5": {
    strategy:
      "Lässt den g-Bauern ungedeckt: 3.Lxg5 schlägt ihn über die offene Diagonale c1–h6, und " +
      "nichts kann zurückschlagen, da die Diagonale der Dame durch e7 verstellt ist. Der " +
      "Königsflügel ist dauerhaft gelockert, ohne dass Schwarz dafür Entwicklung erhält.",
  },

  "1.d4 d5 2.Nf3 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, kontrolliert e4 und hält alle Pläne " +
      "offen: …e6 oder …c6 gegen 3.c4, …c5 oder …Lf5 gegen ruhigere Aufbauten. Die Stellung " +
      "ist dieselbe wie nach 1.d4 Sf6 2.Sf3 d5. Der Preis ist, dass Weiß weiterhin die " +
      "Struktur bestimmt: 3.c4 führt ins Damengambit, 3.Lf4, 3.Lg5 oder 3.e3 ins Londoner " +
      "System, den Torre-Angriff oder das Colle-System.",
  },

  "1.d4 d5 2.Nf3 c6": {
    strategy:
      "Stützt d5 und hält dem Läufer c8 den Weg nach f5 oder g4 offen, da …e6 noch nicht " +
      "gespielt ist. Nach 3.c4 entsteht die Slawische Verteidigung, und gegen ruhigere Züge " +
      "ergeben …Lf5, …e6 und …Sf6 einen soliden Aufbau. Der Preis ist, dass der Springer b8 " +
      "sein natürliches Feld c6 verliert.",
  },

  "1.d4 d5 2.Nf3 e6": {
    strategy:
      "Stützt d5 und öffnet die Diagonale des Läufers f8. Nach 3.c4 entsteht ein Abgelehntes " +
      "Damengambit, und gegen 3.Lf4, 3.e3 oder 3.g3 entwickelt sich Schwarz mit …Sf6, …Le7 " +
      "oder …Ld6 und …c5. Der Preis ist der hinter dem Bauern e6 eingesperrte Läufer c8, der " +
      "meist …b6 oder ein späteres …e5 braucht, um eine Diagonale zu finden.",
  },

  "1.d4 d5 2.Nf3 Nc6": {
    name: "Damenbauernspiel: Tschigorin-Variante",
    background:
      "Es ist der Springerzug der Tschigorin-Verteidigung, 1.d4 d5 2.c4 Sc6, die nach dem " +
      "russischen Meister Michail Tschigorin aus dem 19. Jahrhundert benannt ist und als " +
      "spielbar, aber selten gilt. Nach 3.c4 geht diese Stellung in deren Abspiel mit 3.Sf3 " +
      "über.",
    strategy:
      "Entwickelt sofort eine Figur und übt Druck auf d4 aus, doch der Springer verstellt den " +
      "c-Bauern, sodass d5 nicht mehr durch …c6 gestützt werden kann. Weiß kann mit 3.c4 " +
      "sofort d5 angreifen oder mit 3.Lf4 oder 3.e3 einen ruhigeren Aufbau wählen.",
  },

  "1.d4 d5 2.Nf3 Bf5": {
    strategy:
      "Entwickelt den Läufer vor …e6 außerhalb der Bauernkette, ein Londoner System mit " +
      "vertauschten Farben. Da der Läufer c8 verlassen hat, ist der Bauer b7 ungedeckt, " +
      "sodass 3.c4 den Bauern d5 angreift und Db3 gegen b7 folgen kann, während 3.Sh4 den " +
      "Läufer angreift und ihn gegen den Springer tauschen will.",
  },

  "1.d4 d5 2.Nf3 Bg4": {
    name: "Damenbauernspiel: Anti-Torre",
    strategy:
      "Entwickelt den Läufer aktiv und bereitet …Lxf3 vor, das Weiß Doppelbauern auf der " +
      "f-Linie einbrächte. 3.Se5 greift den Läufer an und gewinnt ein Tempo, und da der " +
      "Läufer c8 verlassen hat, ist der Bauer b7 ungedeckt, sodass c4 und Db3 Druck gegen ihn " +
      "machen können.",
  },

  "1.d4 d5 2.Nf3 c5": {
    name: "Damenbauernspiel: Krause-Variante",
    background:
      "Benannt nach Orla Hermann Krause (1867–1935), einem dänischen Schachmeister und " +
      "Analytiker, der in den 1920er-Jahren viele neue Ideen in der Slawischen Verteidigung " +
      "fand. Bei der Schacholympiade 1927 in London spielte er am ersten Brett für Dänemark, " +
      "das die Silbermedaille gewann.",
    strategy:
      "Greift d4 sofort an und bringt Spannung ins Zentrum. 3.c4 führt zu einer Stellung der " +
      "Symmetrischen Variante des Damengambits, in der Schwarz nach Ansicht der meisten " +
      "Theoretiker nicht ausgleichen kann, und 3.dxc5 ergibt ein Angenommenes Damengambit mit " +
      "vertauschten Farben, in dem Schwarz Zeit für den Rückgewinn des Bauern aufwendet.",
  },

  "1.d4 d5 2.Nf3 g6": {
    strategy:
      "Bereitet das Fianchetto des Königsläufers vor, bevor das Zentrum geklärt ist. Der Zug " +
      "ist solide, doch ohne …Sf6 oder …c6 wird der Bauer d5 nur von der Dame gedeckt, sodass " +
      "3.c4 sofort Druck auf ihn ausübt.",
  },

  "1.d4 d5 2.Nf3 Nd7": {
    strategy:
      "Verstellt den Läufer c8, und der Springer bewirkt auf d7 wenig, solange weder …c6 noch " +
      "…e6 gespielt ist. Weiß gewinnt ungestört mit c4 Raum oder entwickelt sich mit Lf4.",
  },

  "1.d4 d5 2.Nf3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 im Blick hat, aber weit vom Zentrum " +
      "entfernt steht. Der Zug kostet ein Tempo für wenig, und Weiß setzt sofort mit c4 oder " +
      "Lf4 fort.",
  },

  "1.d4 d5 2.Nf3 Bd7": {
    strategy:
      "Stellt den Läufer auf ein passives Feld, wo er die Dame verstellt und dem Springer b8 " +
      "das Feld d7 nimmt. Weiß setzt mit c4 oder Lf4 ungehindert fort.",
  },

  "1.d4 d5 2.Nf3 Be6": {
    strategy:
      "Blockiert den e-Bauern, sodass …e6 nicht mehr möglich ist. Der Läufer deckt d5, lädt " +
      "aber zu 3.Sg5 ein, das ihn angreift und mit Sxe6 fxe6 schwarze Doppelbauern droht.",
  },

  "1.d4 d5 2.Nf3 Qd7": {
    strategy:
      "Bringt die Dame früh ins Spiel und verstellt den Läufer c8. 3.Se5 greift sie sofort an " +
      "und gewinnt ein Tempo, wobei der Bauer d4 den Springer deckt.",
  },

  "1.d4 d5 2.Nf3 Qd6": {
    strategy:
      "Bringt die Dame früh auf ein exponiertes Feld. 3.Sc3 droht Sb5, das die Dame und c7 " +
      "zugleich angriffe, und bereitet e4 vor, um mit weiterem Zeitgewinn gegen die Dame " +
      "vorzugehen.",
  },

  "1.d4 d5 2.Nf3 Nh6": {
    strategy:
      "Strebt nach f5, lädt aber zu 3.Lxh6 gxh6 ein, was die schwarzen Königsflügelbauern zu " +
      "isolierten Doppelbauern auf der h-Linie zerreißt. Das Läuferpaar ist dafür ein " +
      "geringer Ausgleich.",
  },

  "1.d4 d5 2.Nf3 a6": {
    strategy:
      "Verwendet ein Tempo auf einen Flankenzug, der noch keine Aufgabe hat. Bestenfalls " +
      "bereitet er …b5 vor, während Weiß mit c4 gegen d5 vorgeht oder sich mit Lf4 " +
      "entwickelt.",
  },

  "1.d4 d5 2.Nf3 a5": {
    strategy:
      "Ein Randbauernzug, der nur b4 kontrolliert und b5 ohne Bauerndeckung lässt. Er " +
      "entwickelt nichts, und Weiß baut sich mit c4, Lf4 oder e3 ungehindert auf.",
  },

  "1.d4 d5 2.Nf3 b6": {
    strategy:
      "Bereitet …Lb7 vor, doch dieser Läufer blickte nur auf den eigenen Bauern d5, und c6 " +
      "wird geschwächt. Weiß entwickelt sich mit Lf4 und e3 oder greift mit c4 den Bauern d5 " +
      "an.",
  },

  "1.d4 d5 2.Nf3 b5": {
    strategy:
      "Verhindert vorerst c4, lässt den Bauern aber ungedeckt: Schon 3.e3 droht Lxb5+, und " +
      "auch a4 oder Dd3 können ihn angreifen. Der Zug entwickelt nichts und lässt c6 ohne " +
      "Bauerndeckung.",
  },

  "1.d4 d5 2.Nf3 f6": {
    strategy:
      "Bereitet …e5 vor, nimmt aber dem Springer g8 das Feld f6 und schwächt e6 sowie die " +
      "Diagonale e8–h5. Weiß entwickelt sich ungehindert, wobei 3.Lf4 zusätzlich e5 " +
      "kontrolliert, während Schwarz in der Entwicklung zurückbleibt.",
  },

  "1.d4 d5 2.Nf3 f5": {
    strategy:
      "Strebt einen Aufbau wie in der Holländischen Verteidigung an, doch der Bauer schwächt " +
      "e6 und die Diagonale e8–h5 und überlässt dem weißen Springer e5 als Vorposten. Schwarz " +
      "muss dahinter noch alle Figuren entwickeln.",
  },

  "1.d4 d5 2.Nf3 h6": {
    strategy:
      "Ein langsamer Zug, der den weißen Figuren g5 nimmt, aber nichts entwickelt. Weiß nutzt " +
      "das Tempo für c4, Lf4 oder e3.",
  },

  "1.d4 d5 2.Nf3 h5": {
    strategy:
      "Gewinnt am Flügel Raum, kostet aber ein Tempo und das Feld g5: Der h-Bauer kann keine " +
      "weiße Figur mehr von g5 vertreiben, und der vorgerückte Bauer kann zum Angriffsziel " +
      "werden.",
  },

  "1.d4 d5 2.Nf3 Bh3": {
    strategy:
      "Stellt den Läufer ein: 3.gxh3 gewinnt eine ganze Figur ohne Gegenwert, denn der Läufer " +
      "auf h3 wird vom Bauern g2 angegriffen und ist ungedeckt.",
  },

  "1.d4 d5 2.Nf3 Kd7": {
    strategy:
      "Gibt ohne Grund das Rochaderecht auf und läuft in 3.Se5+, das den König zu einem " +
      "weiteren Zug zwingt. Schwarz verliert weitere Zeit, und der König bleibt im Zentrum " +
      "stecken.",
  },

  "1.d4 d5 2.Nf3 e5": {
    strategy:
      "Bietet einen Bauern ohne klaren Gegenwert an: Nach 3.dxe5 ist der Bauer weg, und …d4 " +
      "würde nach Sxd4 einen zweiten kosten. …Sc6 oder …Lg4 bringen nur kurzzeitige Aktivität " +
      "gegen eine weiße Stellung ohne Schwächen.",
  },

  "1.d4 d5 2.Nf3 g5": {
    strategy:
      "Stellt sofort einen Bauern ein: 3.Lxg5 oder 3.Sxg5 gewinnt ihn, und der gelockerte " +
      "Königsflügel bietet keinen Ausgleich.",
  },

  "1.d4 d5 2.Bf4 Nf6": {
    strategy:
      "Entwickelt den Springer, deckt d5 und e4 und hält Schwarz alle Wege offen: ...e6 mit " +
      "...Ld6, um den Läufer herauszufordern, oder ...c5 mit ...Sc6 und ...Db6 gegen den " +
      "ungedeckten Bauern b2. Es ist die häufigste Antwort und führt zur selben Stellung wie " +
      "1.d4 Sf6 2.Lf4 d5.",
  },

  "1.d4 d5 2.Bf4 c5": {
    name: "Beschleunigtes Londoner System: Steinitz-Gegengambit",
    background:
      "Wilhelm Steinitz spielte den Zug im Londoner Turnier von 1883 gegen James Mason. Mason " +
      "nahm den Bauern, und nach 3.dxc5 Sc6 4.Sf3 f6 5.e3 e5 6.Lg3 Lxc5 hatte Schwarz ihn " +
      "zurückgewonnen und das Zentrum übernommen; Steinitz gewann die Partie.",
    strategy:
      "Greift d4 sofort an und nutzt, dass der Läufer c1 verlassen hat: Rasch folgen ...Sc6, " +
      "...Lf5 und ...Db6, wobei die Dame noch vor der Rochade den ungedeckten Bauern b2 unter " +
      "Druck setzt. Weiß lehnt den Bauern meist mit e3 und c3 ab, damit nach einem Tausch auf " +
      "d4 zwei weiße Bauern im Zentrum bleiben, und c3 erlaubt es, ...Db6 mit Db3 zu " +
      "beantworten.",
  },

  "1.d4 d5 2.Bf4 e6": {
    strategy:
      "Stützt d5 wie im Abgelehnten Damengambit und öffnet dem Läufer f8 den Weg nach d6, wo " +
      "er den Läufer f4 herausfordert; meist folgen ...Sf6, ...c5 und ...Sc6. Der Preis ist " +
      "der Läufer c8, den der Bauer e6 einsperrt und der oft nur schwer ein gutes Feld " +
      "findet. Weiß antwortet mit e3, Sf3 oder Sd2, Ld3 und c3 und begegnet ...Ld6 mit Lg3 " +
      "oder Lxd6.",
  },

  "1.d4 d5 2.Bf4 c6": {
    strategy:
      "Stützt d5 wie in der Slawischen Verteidigung und hält den Läufer c8 für ...Lf5 frei, " +
      "während die Dame das Feld b6 gegen den ungedeckten Bauern b2 erhält. Der Aufbau ist " +
      "solide; Weiß setzt meist mit e3, Sf3 und c3 fort und beantwortet ...Db6 mit Db3 oder " +
      "Dc1.",
  },

  "1.d4 d5 2.Bf4 Bf5": {
    background:
      "Die Göttinger Handschrift, das älteste bekannte Werk, das sich ausschließlich dem " +
      "modernen Schach widmet, enthält 1.d4 d5 2.Lf4 Lf5 bereits unter ihren zwölf " +
      "Eröffnungen; als mögliche Entstehungszeit werden 1500–1505 und 1471 genannt. Auch " +
      "Jacob Sarratts „A Treatise on the Game of Chess“ (1808) bringt die Variante, " +
      "fortgesetzt mit 3.Sc3 Sc6 4.f3.",
    strategy:
      "Spiegelt die weiße Entwicklung und bringt den Läufer vor ...e6 außerhalb der " +
      "Bauernkette ins Spiel; es folgen ...Sf6 und ...c6 oder ...Sc6. Die symmetrische " +
      "Struktur ist gesund, und ohne Zugumstellung neigt die Partie zu einem ruhigen Remis. " +
      "Den härtesten Test stellt Weiß, indem er mit c4 ins Damengambit überleitet.",
  },

  "1.d4 d5 2.Bf4 Nc6": {
    strategy:
      "Entwickelt den Springer mit Druck auf d4 und bereitet ...Lf5 oder ...Lg4 und später " +
      "...e5 vor, ähnlich wie in der Tschigorin-Verteidigung. Er verstellt den c-Bauern, " +
      "sodass die üblichen Aufbauten mit ...c5 und ...c6 entfallen, und e3 mit Sf3 hält d4 " +
      "sicher gedeckt.",
  },

  "1.d4 d5 2.Bf4 Nd7": {
    strategy:
      "Entwickelt den Springer auf ein Feld, von dem aus er ...e5 und ...c5 unterstützt und " +
      "den c-Bauern für ...c6 frei lässt; es folgt ...Sgf6. Er verstellt den Läufer c8 und " +
      "die d-Linie der Dame, sodass Schwarz etwas beengt steht, und Weiß spielt das Londoner " +
      "System mit e3, Sf3 und c3 oder wechselt zu c4.",
  },

  "1.d4 d5 2.Bf4 Bg4": {
    strategy:
      "Fesselt den Bauern e2 an die Dame, sodass 3.e3 vorerst ausscheidet: Es folgte " +
      "3...Lxd1. Weiß antwortet mit 3.Sf3, wonach ...Sf6 und ...e6 einen Torre-Angriff mit " +
      "vertauschten Farben ergeben, oder stellt den Läufer sofort mit 3.h3 oder 3.f3 zur " +
      "Rede.",
  },

  "1.d4 d5 2.Bf4 b6": {
    strategy:
      "Bereitet ...Lb7 mit ...e6 und ...c5 vor, doch da der Bauer schon auf d5 steht, beißt " +
      "der Läufer vorerst auf den eigenen Bauern. Der Zug entwickelt noch nichts und schwächt " +
      "c6, und Weiß baut mit e3, Sf3 und c3 das übliche Londoner System auf oder wechselt zu " +
      "c4.",
  },

  "1.d4 d5 2.Bf4 g6": {
    strategy:
      "Bereitet ...Lg7, ...Sf6 und ...O-O vor, einen königsindischen Aufbau, in dem der " +
      "Läufer g7 entlang der langen Diagonale auf d4 drückt. Der Zug ist gesund, aber " +
      "langsam; Weiß antwortet meist mit e3, Sf3, Le2 und h3, womit der Läufer f4 einen " +
      "Rückzug nach h2 erhält.",
  },

  "1.d4 d5 2.Bf4 h5": {
    strategy:
      "Ein seltenes Nebengleis mit einer Falle: Das routinemäßige 3.e3? nimmt dem Läufer den " +
      "Rückzug nach d2, und nach 3...e5! kann Schwarz ihn mit ...f6, ...g5 und ...h4 " +
      "einfangen und für Bauern gewinnen. Weiß weicht dem mit 3.Sf3 aus, das den Rückzug " +
      "offen hält, oder mit 3.c4, wonach der h-Bauer für Schwarz wenig leistet.",
  },

  "1.d4 d5 2.Bf4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er auf b4 und c5 zielt, aber kaum am Kampf um das " +
      "Zentrum teilnimmt. Er deckt zwar c7, kostet aber Zeit, die Weiß für e3, Sf3 und c3 " +
      "nutzt.",
  },

  "1.d4 d5 2.Bf4 Bd7": {
    strategy:
      "Stellt den Läufer auf ein passives Feld, wo er dem Springer b8 das Feld d7 nimmt und " +
      "der Dame die d-Linie verstellt. Er leistet weniger als ...Lf5, und Weiß setzt einfach " +
      "mit e3 und Sf3 fort.",
  },

  "1.d4 d5 2.Bf4 Be6": {
    strategy:
      "Stellt den Läufer nach e6, wo er den e-Bauern und damit den Läufer f8 blockiert, " +
      "sodass der übliche Plan mit ...e6 und ...Ld6 entfällt. Weiß entwickelt sich in Ruhe " +
      "mit Sf3, e3 und c4 oder c3, während der Läufer wenig ausrichtet.",
  },

  "1.d4 d5 2.Bf4 Qd7": {
    strategy:
      "Bringt die Dame früh ins Spiel, wo sie den Läufer c8 und den Springer behindert und " +
      "mit Tempo angegriffen werden kann, etwa durch Sf3 mit anschließendem Se5. Schwarz " +
      "verwendet Zeit auf die Dame, statt Figuren zu entwickeln.",
  },

  "1.d4 d5 2.Bf4 Nh6": {
    strategy:
      "Strebt nach f5 oder g4, bietet aber den Tausch 3.Lxh6 gxh6 an, nach dem die isolierten " +
      "Doppelbauern auf der h-Linie eine dauerhafte Schwäche am schwarzen Königsflügel sind.",
  },

  "1.d4 d5 2.Bf4 a6": {
    strategy:
      "Verwendet ein Tempo auf einen Randzug, der nur ...b5 vorbereitet. Er entwickelt keine " +
      "Figur und lässt das Zentrum unberührt, sodass Weiß ungehindert mit e3, Sf3 und c4 " +
      "fortsetzt.",
  },

  "1.d4 d5 2.Bf4 a5": {
    strategy:
      "Verwendet ein Tempo auf einen Vorstoß des Randbauern, der b4 kontrolliert, aber nichts " +
      "entwickelt und das Zentrum nicht umkämpft. Weiß entwickelt sich mit e3 und Sf3 und " +
      "gewinnt mit c4 Raum.",
  },

  "1.d4 d5 2.Bf4 b5": {
    strategy:
      "Zieht den b-Bauern vor, ohne eine Figur zu entwickeln, schwächt c5 und c6 und macht " +
      "den Bauern zum Ziel: Nach 3.e3 droht der Läufer f1 mit Lxb5+, und auch a4 kann ihn " +
      "angreifen. Schwarz muss dann weitere Züge wie ...a6 oder ...c6 aufwenden, um ihn zu " +
      "halten.",
  },

  "1.d4 d5 2.Bf4 f6": {
    strategy:
      "Strebt ...e5 an, nimmt aber dem Springer g8 das Feld f6 und öffnet die Diagonale " +
      "e8–h5, sodass die weiße Dame nach e3 auf h5 Schach bieten kann. Schwarz verliert ein " +
      "Tempo, ohne eine Figur zu entwickeln, während Weiß mit e3 und Sf3 fortsetzt.",
  },

  "1.d4 d5 2.Bf4 f5": {
    strategy:
      "Strebt einen Stonewall-Aufbau mit ...Sf6 und ...e6 an, schwächt aber e6 und die " +
      "Diagonale e8–h5 und hinterlässt auf e5 ein dauerhaftes Loch, das der Läufer f4 schon " +
      "kontrolliert und ein Springer von f3 aus besetzen kann. Nach ...e6 ist der Läufer c8 " +
      "hinter den eigenen Bauern eingesperrt.",
  },

  "1.d4 d5 2.Bf4 h6": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauernzug, der nichts entwickelt; sein Sinn, ein " +
      "späteres ...g5 gegen den Läufer f4, würde den eigenen Königsflügel lockern. Weiß setzt " +
      "mit e3 und Sf3 fort, und h3 verschafft dem Läufer einen Rückzug nach h2.",
  },

  "1.d4 d5 2.Bf4 Bh3": {
    strategy:
      "Gibt den Läufer für nichts her: 3.Sxh3 oder 3.gxh3 gewinnt ihn, und Schwarz hat für " +
      "die Figur keinerlei Ausgleich.",
  },

  "1.d4 d5 2.Bf4 Qd6": {
    strategy:
      "Stellt die Dame dorthin, wo der Läufer f4 sie schlägt: 3.Lxd6 gewinnt die Dame, und " +
      "nach ...cxd6 oder ...exd6 hat Schwarz dafür nur einen Läufer.",
  },

  "1.d4 d5 2.Bf4 Kd7": {
    strategy:
      "Verzichtet endgültig auf die Rochade und stellt den König vor Dame und Läufer c8, die " +
      "er beide blockiert. Nach 3.e3 kann der Läufer f1 bereits auf b5 Schach bieten, und der " +
      "König bleibt im Zentrum ungeschützt.",
  },

  "1.d4 d5 2.Bf4 e5": {
    strategy:
      "Bietet einen Bauern an, den 3.Lxe5 einfach gewinnt: Nach 3...Sc6 zieht sich Weiß mit " +
      "4.Lg3 zurück, und d4 bleibt durch die Dame gedeckt. Schwarz hat die Stellung geöffnet, " +
      "aber keinen Ausgleich für den Bauern.",
  },

  "1.d4 d5 2.Bf4 g5": {
    strategy:
      "Lässt den g-Bauern hängen: 3.Lxg5 gewinnt ihn, weil die Dame wegen des Bauern e7 nicht " +
      "zurückschlagen kann, und der Läufer bleibt aktiv. Der Vorstoß schwächt zudem grundlos " +
      "den Königsflügel.",
  },

  "1.d4 d5 2.Nc3 Nf6": {
    strategy:
      "Entwickelt den Königsspringer, deckt d5 ein zweites Mal und überwacht e4; es ist die " +
      "häufigste Antwort. Weiß wählt zwischen 3.Lg5, dem Richter-Weressow-System, 3.Lf4, dem " +
      "Jobava-London-System, und dem Gambit 3.e4, bei dem 3...dxe4 ins Blackmar-Diemer-Gambit " +
      "überleitet. Schwarz setzt mit ...e6, ...c6 oder ...Lf5 fort und erhält eine solide, " +
      "flexible Stellung.",
  },

  "1.d4 d5 2.Nc3 c6": {
    strategy:
      "Stützt d5 und nimmt dem Springer das Feld b5, während die Diagonale des Läufers c8 " +
      "offen bleibt. 3.e4 leitet in die Caro-Kann-Verteidigung über, 1.e4 c6 2.d4 d5 3.Sc3, " +
      "und gegen 3.Sf3 oder 3.Lf4 entwickelt Schwarz den Läufer vor ...e6 nach f5 oder g4 und " +
      "erhält eine solide Struktur. Dafür verliert der Springer b8 das Feld c6 und geht meist " +
      "nach d7.",
  },

  "1.d4 d5 2.Nc3 e6": {
    strategy:
      "Stützt d5 und öffnet den Läufer f8. 3.e4 leitet in die Französische Verteidigung über, " +
      "1.e4 e6 2.d4 d5 3.Sc3, während Schwarz nach 3.Lf4 oder 3.Sf3 mit ...Sf6 und ...c5 oder " +
      "...Ld6 fortsetzt. Der Preis ist der übliche der Französischen Verteidigung: Der Läufer " +
      "c8 ist hinter dem Bauern e6 eingesperrt.",
  },

  "1.d4 d5 2.Nc3 Nc6": {
    strategy:
      "Entwickelt mit Druck auf d4, verstellt aber den c-Bauern, sodass ...c6 den Bauern d5 " +
      "nicht mehr stützen kann. 3.e4 leitet in die Nimzowitsch-Verteidigung über, 1.e4 Sc6 " +
      "2.d4 d5 3.Sc3, in der 3...dxe4 4.d5 den Springer mit Tempo nach e5 treibt und Weiß " +
      "meist mit 5.Dd4 oder 5.Lf4 fortsetzt. Solide, aber abseitig.",
  },

  "1.d4 d5 2.Nc3 Bf5": {
    name: "Damenbauernspiel: Tschigorin-Variante, Alburt-Verteidigung",
    strategy:
      "Entwickelt den weißfeldrigen Läufer, bevor ...e6 ihn einsperren kann, und bereitet " +
      "...e6, ...Sf6 und ...Sc6 vor. Der Läufer wird zur Zielscheibe: 3.Lf4 Sc6 4.e3 e6 5.g4 " +
      "Lg6 bringt Weiß Raum am Königsflügel, und f3 mit e4 gewinnt Zeit gegen ihn. Solide, " +
      "aber selten gespielt.",
  },

  "1.d4 d5 2.Nc3 Bg4": {
    name: "Damenbauernspiel: Tschigorin-Variante, Anti-Weressow",
    strategy:
      "Entwickelt den Läufer, bevor ...e6 ihn einsperrt, und bereitet ...Sc6 und ...e6 vor; " +
      "kommt der Springer nach f3, steht ...Lxf3 zur Verfügung. Der Läufer lässt sich leicht " +
      "bedrängen: 3.f3 Lf5 4.e4 dxe4 5.fxe4 errichtet mit Tempo ein breites Zentrum, und 3.h3 " +
      "Lh5 4.g4 Lg6 gewinnt Raum am Königsflügel. Spielbar, aber Schwarz verliert Zeit mit " +
      "dem Läufer.",
  },

  "1.d4 d5 2.Nc3 c5": {
    name: "Damenbauernspiel: Tschigorin-Variante, Irisches Gambit",
    strategy:
      "Greift sofort d4 an und bietet den c-Bauern an. Mit 3.dxc5 gibt Weiß das Zentrum auf, " +
      "und Schwarz will den Bauern zurückgewinnen, am liebsten mit ...Lxc5; 3.Lf4 cxd4 4.Dxd4 " +
      "lehnt ab und lässt Weiß einen leichten Vorteil, und 3.e4 antwortet mit einem " +
      "Gegengambit. Spielbar, aber eine seltene und wenig erforschte Nebenvariante.",
  },

  "1.d4 d5 2.Nc3 e5": {
    name: "Damenbauernspiel: Tschigorin-Variante, Shaviliuk-Gambit",
    strategy:
      "Bietet den e-Bauern an, um mit ...d4 Raum zu gewinnen: Nach 3.dxe5 d4 muss der " +
      "Springer ziehen, und auf 4.Se4 greift 4...Dd5 Springer und Bauern e5 zugleich an und " +
      "gewinnt den Bauern zurück. Das Gambit ist selten, und seine Bewertung ist unklar.",
  },

  "1.d4 d5 2.Nc3 f5": {
    name: "Damenbauernspiel: Weressow-Angriff, Holländisches System",
    strategy:
      "Errichtet eine Stonewall-Struktur, in der die Bauern d5 und f5 das Feld e4 " +
      "beherrschen. Der Preis ist ein schwaches Feld e5 und eine offene Diagonale e8–h5, und " +
      "3.e4 fxe4 4.Dh5+ g6 5.Dxd5 holt den Bauern sofort zurück. Spielbar, aber selten und " +
      "riskant.",
  },

  "1.d4 d5 2.Nc3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 ins Auge fasst, aber nichts für d5 " +
      "oder e4 tut. Weiß übernimmt mit 3.e4 dxe4 4.Sxe4 das Zentrum und führt in der " +
      "Entwicklung.",
  },

  "1.d4 d5 2.Nc3 Be6": {
    strategy:
      "Steht vor dem e-Bauern, sodass weder ...e6 noch ...e5 folgen kann, und der Läufer f8 " +
      "kommt nur noch über ...g6 heraus. Nach 3.e4 dxe4 4.Sxe4 hat Weiß das freiere Zentrum " +
      "und mehr Raum.",
  },

  "1.d4 d5 2.Nc3 Qd7": {
    strategy:
      "Verstellt den Läufer c8 und nimmt dem Springer b8 das Feld d7, ein Damenzug, der " +
      "nichts entwickelt und nichts für das Zentrum tut. Nach 3.e4 dxe4 4.Sxe4 entwickelt " +
      "sich Weiß mit dem besseren Zentrum.",
  },

  "1.d4 d5 2.Nc3 Qd6": {
    strategy:
      "Bringt die Dame früh heraus, wo sie zur Zielscheibe wird: 3.Sb5 greift sie und c7 an, " +
      "und 3.e4 dxe4 4.Sxe4 greift sie mit Tempo an, sodass Weiß in der Entwicklung vorn " +
      "liegt.",
  },

  "1.d4 d5 2.Nc3 Nh6": {
    strategy:
      "Erlaubt 3.Lxh6 gxh6 mit Doppelbauern auf der h-Linie und zerrissenem Königsflügel für " +
      "Schwarz, der dafür nur das Läuferpaar erhält.",
  },

  "1.d4 d5 2.Nc3 a6": {
    strategy:
      "Nimmt dem Springer das Feld b5, verbraucht aber ein Tempo mit einem Randbauern, ohne " +
      "etwas zu entwickeln. Weiß übernimmt mit 3.e4 dxe4 4.Sxe4 das Zentrum und führt in der " +
      "Entwicklung.",
  },

  "1.d4 d5 2.Nc3 a5": {
    strategy:
      "Verbraucht ein Tempo mit einem Randbauern und gibt die Kontrolle über b6 auf, ohne dem " +
      "Zentrum zu helfen oder eine Figur zu entwickeln. Weiß übernimmt mit 3.e4 das Zentrum.",
  },

  "1.d4 d5 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, tut aber nichts für d5, sodass Weiß mit 3.e4 das Zentrum " +
      "übernimmt. Nach 3...dxe4 4.Sxe4 Lb7 5.Ld3 ist der Springer gut gedeckt, und Weiß hat " +
      "mehr Raum und die leichtere Entwicklung.",
  },

  "1.d4 d5 2.Nc3 f6": {
    strategy:
      "Bereitet ...e5 vor, nimmt aber dem Springer g8 das Feld f6 und öffnet die Diagonale " +
      "e8–h5 zum schwarzen König. Weiß antwortet 3.e4 und übernimmt mit schnellerer " +
      "Entwicklung das Zentrum.",
  },

  "1.d4 d5 2.Nc3 g6": {
    strategy:
      "Bereitet ...Lg7 vor, tut aber nichts für d5, sodass Weiß mit 3.e4 das Zentrum " +
      "übernimmt. Nach 3...dxe4 4.Sxe4 hat Weiß das freiere Zentrum und die schnellere " +
      "Entwicklung.",
  },

  "1.d4 d5 2.Nc3 h6": {
    strategy:
      "Nimmt dem Läufer c1 das Feld g5, verbraucht aber ein Tempo mit einem Randbauern, " +
      "sodass Weiß mit 3.e4 das Zentrum übernimmt und sich schneller entwickelt.",
  },

  "1.d4 d5 2.Nc3 h5": {
    name: "Damenbauernspiel: Tschigorin-Variante, Shropshire-Verteidigung",
    strategy:
      "Verbraucht ein Tempo mit einem Randbauern, der nichts entwickelt und nichts für das " +
      "Zentrum tut, und gibt die Kontrolle über g6 auf. Weiß entwickelt sich einfach, etwa " +
      "mit 3.e4 dxe4 4.Sxe4.",
  },

  "1.d4 d5 2.Nc3 Nd7": {
    strategy:
      "Verstellt der Dame die Deckung von d5 und zugleich den Läufer c8, und nichts sonst " +
      "deckt den Bauern, sodass 3.Sxd5 ihn gewinnt.",
  },

  "1.d4 d5 2.Nc3 Bd7": {
    strategy:
      "Verstellt der Dame die Deckung von d5, das keinen anderen Schutz hat, sodass 3.Sxd5 " +
      "einen Bauern gewinnt. Zudem nimmt der Läufer dem Springer b8 das Feld d7.",
  },

  "1.d4 d5 2.Nc3 Bh3": {
    strategy: "Verliert den Läufer nach 3.gxh3 ohne jede Kompensation.",
  },

  "1.d4 d5 2.Nc3 Kd7": {
    strategy:
      "Gibt die Rochade auf und verstellt der Dame die Deckung von d5, sodass 3.Sxd5 einen " +
      "Bauern gewinnt; zudem sperrt der König auf d7 den Läufer c8 ein.",
  },

  "1.d4 d5 2.Nc3 b5": {
    strategy:
      "Verliert einen Bauern an 3.Sxb5. Schwarz hat nichts, um ihn zurückzugewinnen: 3...La6 " +
      "wird mit 4.Sc3 beantwortet, und Weiß behält den Mehrbauern.",
  },

  "1.d4 d5 2.Nc3 g5": {
    strategy:
      "Verliert einen Bauern an 3.Lxg5 und schwächt ohne Gegenwert den ganzen Königsflügel.",
  },
};
