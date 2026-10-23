import type { OpeningTexts } from "../book.ts";

// German prose for e4-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.e4 Nf6 2.e5": {
    strategy:
      "Greift den Springer an und gewinnt Zeit: Nach 2...Sd5 3.d4 d6 wählt Weiß zwischen dem " +
      "bescheideneren 4.Sf3 und 4.c4 Sb6, das ein breites Zentrum errichtet und zu 5.exd6 " +
      "oder zum Vierbauernangriff 5.f4 führt. Schwarz lässt die Bauern vorrücken, um sie " +
      "danach zu untergraben, typischerweise mit ...dxe5, ...g6 und ...Lg4. Weiß gewinnt Raum " +
      "und Zeit, doch das vorgerückte Zentrum braucht ständige Unterstützung.",
  },

  "1.e4 Nf6 2.Nc3": {
    strategy:
      "Deckt e4 mit einem Entwicklungszug, statt den Springer zu jagen. Er ist die mit " +
      "Abstand häufigste Alternative zu 2.e5 und kann nach 2...e5 in eine Wiener Partie oder " +
      "ein Vierspringerspiel übergehen, nach 2...d6 in eine Pirc-Ufimzew-Verteidigung. " +
      "Eigenständig ist 2...d5, worauf Weiß zwischen 3.exd5 Sxd5 und 3.e5 wählt. Der Preis " +
      "ist der Raum, auf den Weiß ohne 2.e5 verzichtet.",
  },

  "1.e4 Nf6 2.d3": {
    name: "Aljechin-Verteidigung: Maróczy-Variante",
    strategy:
      "Deckt e4 mit dem d-Bauern, sperrt aber den Läufer f1 ein; fianchettiert Weiß ihn mit " +
      "g3 und Lg2, entsteht wahrscheinlich ein Königsindischer Angriff. Schwarz gleicht mit " +
      "2...d5 aus, etwa 3.Sd2 e5, eine Philidor-Verteidigung mit vertauschten Farben. " +
      "Spielbar, aber passiv.",
  },

  "1.e4 Nf6 2.Qe2": {
    strategy:
      "Deckt e4 mit der Dame, sodass 2...Sxe4 3.Dxe4 eine Figur kosten würde. Die Dame " +
      "verstellt den Läufer f1 und verzögert die Entwicklung am Königsflügel, und Schwarz " +
      "erreicht mit 2...e5 ein ausgeglichenes Spiel. Gesund, aber passiv und nicht zu " +
      "empfehlen.",
  },

  "1.e4 Nf6 2.Bd3": {
    strategy:
      "Deckt e4 mit dem Läufer, der jedoch vor dem d-Bauern steht: Solange er auf d3 bleibt, " +
      "kann der d-Bauer nicht ziehen, und der Läufer c1 ist eingesperrt. Sie mit c3 und Lc2 " +
      "zu befreien kostet Zeit, und Schwarz sichert sich mit 2...e5 seinen Anteil am Zentrum. " +
      "Spielbar, aber nicht zu empfehlen.",
  },

  "1.e4 Nf6 2.c4": {
    strategy:
      "Opfert den Bauern e4 für Entwicklung: Nach 2...Sxe4 3.Sf3 folgt d3 oder Sc3 gegen den " +
      "Springer, doch der Mehrbauer ist real und die Kompensation zweifelhaft. Schwarz kann " +
      "auch mit 2...g6 ablehnen, worauf 3.Sc3 in eine Königsindische Verteidigung übergehen " +
      "kann.",
  },

  "1.e4 Nf6 2.d4": {
    strategy:
      "Baut ein Bauernzentrum auf, lässt e4 aber ungedeckt, sodass 2...Sxe4 einen Bauern " +
      "gewinnt. Weiß erhält mit Ld3 und Sf3 etwas Raum im Zentrum und einen " +
      "Entwicklungsvorsprung, aber keine klare Kompensation, und Schwarz konsolidiert mit " +
      "...d5.",
  },

  "1.e4 Nf6 2.f3": {
    strategy:
      "Deckt e4 mit dem f-Bauern, nimmt aber dem Springer g1 sein bestes Feld und schwächt " +
      "die Diagonale e1-h4 und den weißen König. Schwarz greift das Zentrum mit 2...d5 oder " +
      "2...e5 an.",
  },

  "1.e4 Nf6 2.Qf3": {
    strategy:
      "Deckt e4 mit der Dame, sodass 2...Sxe4 3.Dxe4 eine Figur verliert, nimmt aber dem " +
      "Springer g1 das Feld f3 und bringt die Dame früh heraus. Schwarz entwickelt sich mit " +
      "2...Sc6 oder 2...e5 und gewinnt Zeit gegen die exponierte Dame, etwa mit ...Sd4.",
  },

  "1.e4 Nf6 2.Bc4": {
    name: "Aljechin-Verteidigung: Krejcik-Variante",
    strategy:
      "Entwickelt den Läufer in Richtung f7, gibt aber e4 preis: Nach 2...Sxe4 3.Lxf7+ Kxf7 " +
      "4.Dh5+ Kg8 5.Dd5+ e6 6.Dxe4 d5 hat Weiß die Figur zurückgewonnen, doch Schwarz besitzt " +
      "das Läuferpaar und gewinnt mit Tempo Raum im Zentrum. Schwarz kann auch mit 2...e5, " +
      "2...d5 oder 2...e6 ablehnen.",
  },

  "1.e4 Nf6 2.Nf3": {
    name: "Aljechin-Verteidigung: John-Tracy-Gambit",
    strategy:
      "Entwickelt eine Figur, deckt e4 aber nicht, sodass 2...Sxe4 den Königsbauern gewinnt. " +
      "Ein Entwicklungsvorsprung mit d3 und Sc3 oder De2 ist eine zweifelhafte Kompensation, " +
      "und die Variante gilt als schlechte Wahl.",
  },

  "1.e4 Nf6 2.a3": {
    strategy:
      "Ein langsamer Randbauernzug, der den Angriff auf e4 übergeht: 2...Sxe4 gewinnt einen " +
      "Bauern, und Weiß hat dafür nichts vorzuweisen, weder Entwicklung noch " +
      "Zentrumskontrolle.",
  },

  "1.e4 Nf6 2.a4": {
    strategy:
      "Verwendet ein Tempo auf den Randbauern, während e4 hängt: 2...Sxe4 gewinnt einen " +
      "Bauern, und der Bauer auf a4 trägt weder zur Entwicklung noch zum Zentrum etwas bei.",
  },

  "1.e4 Nf6 2.b3": {
    strategy:
      "Bereitet Lb2 vor, lässt aber e4 hängen: Nach 2...Sxe4 3.Lb2 zielt der Läufer auf g7, " +
      "doch Schwarz spielt einfach ...d5 oder ...Sf6 und behält den Mehrbauern.",
  },

  "1.e4 Nf6 2.b4": {
    strategy:
      "Zielt auf Lb2 und Raum am Damenflügel, lässt aber e4 hängen: 2...Sxe4 gewinnt einen " +
      "Bauern, und der Flügelvorstoß bietet keine Kompensation.",
  },

  "1.e4 Nf6 2.c3": {
    strategy:
      "Bereitet d4 vor, lässt e4 aber ungedeckt: 2...Sxe4 gewinnt einen Bauern, und der " +
      "Springer zieht sich einfach nach f6 zurück, wenn Weiß ihn mit d3 oder der Dame jagt.",
  },

  "1.e4 Nf6 2.f4": {
    strategy:
      "Lässt e4 hängen und schwächt die Diagonale e1-h4 und den weißen König: Nach 2...Sxe4 " +
      "hat Schwarz einen glatten Mehrbauern, und der f-Bauer hat nichts für die weiße " +
      "Entwicklung getan.",
  },

  "1.e4 Nf6 2.g3": {
    strategy:
      "Bereitet Lg2 vor, lässt aber e4 hängen: Nach 2...Sxe4 3.Lg2 deckt Schwarz den Springer " +
      "mit ...d5 oder zieht ihn nach f6 zurück und behält den Mehrbauern.",
  },

  "1.e4 Nf6 2.g4": {
    strategy:
      "Schwächt den Königsflügel ohne Grund. Die Dame deckt g4, sodass 2...Sxg4 3.Dxg4 " +
      "Schwarz eine Figur kosten würde, doch 2...Sxe4 gewinnt einfach den e-Bauern, während " +
      "der g-Bauer zu weit vorgerückt ist.",
  },

  "1.e4 Nf6 2.h3": {
    strategy:
      "Ein Wartezug ohne Zweck: e4 hängt, sodass 2...Sxe4 einen Bauern gewinnt, und der Zug " +
      "des h-Bauern hilft weder der Entwicklung noch im Zentrum.",
  },

  "1.e4 Nf6 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel, lässt aber e4 hängen: 2...Sxe4 gewinnt einen Bauern, und " +
      "der vorgerückte h-Bauer wird eher zur Schwäche als zum Angriffsmittel.",
  },

  "1.e4 Nf6 2.Na3": {
    strategy:
      "Stellt den Springer an den Rand und lässt e4 hängen: 2...Sxe4 gewinnt einen Bauern, " +
      "und der Springer auf a3 steht weit vom Zentrum entfernt.",
  },

  "1.e4 Nf6 2.Qg4": {
    strategy:
      "Stellt die Dame auf ein Feld, das der Springer f6 angreift: 2...Sxg4 gewinnt sie " +
      "umsonst.",
  },

  "1.e4 Nf6 2.Qh5": {
    strategy:
      "Stellt die Dame auf ein Feld, das der Springer f6 angreift: 2...Sxh5 gewinnt sie ohne " +
      "Weiteres.",
  },

  "1.e4 Nf6 2.Ke2": {
    strategy:
      "Lässt e4 hängen und führt den König ins Zentrum: 2...Sxe4 gewinnt einen Bauern, und " +
      "Weiß kann nicht mehr rochieren.",
  },

  "1.e4 Nf6 2.Be2": {
    strategy:
      "Entwickelt den Läufer, lässt e4 aber ungedeckt: 2...Sxe4 gewinnt einen Bauern, und " +
      "3.Lf3 erreicht nichts gegen einen Springer, den ...d5 deckt.",
  },

  "1.e4 Nf6 2.Bb5": {
    strategy:
      "Lässt e4 hängen: 2...Sxe4 gewinnt einen Bauern, und der Läufer auf b5 greift nur den " +
      "gut gedeckten Bauern d7 an und wird mit ...c6 vertrieben.",
  },

  "1.e4 Nf6 2.Ba6": {
    strategy: "Stellt den Läufer ein: 2...Sxa6 oder 2...bxa6 gewinnt eine Figur ohne Gegenwert.",
  },

  "1.e4 Nf6 2.Nh3": {
    strategy:
      "Stellt den Springer an den Rand und übergeht e4: 2...Sxe4 gewinnt einen Bauern, und " +
      "der Springer auf h3 leistet kaum mehr, als f4 und g5 ins Auge zu fassen.",
  },

  "1.e4 Nf6 2.Ne2": {
    strategy:
      "Deckt e4 nicht und verstellt sowohl den Läufer f1 als auch die Diagonale der Dame: " +
      "2...Sxe4 gewinnt einen Bauern, und der Springer steht auf e2 ungeschickt.",
  },

  "1.e4 Nf6": {
    name: "Aljechin-Verteidigung",
    background:
      "Von Alexander Aljechin beim Turnier in Budapest 1921 in Partien gegen Endre Steiner " +
      "und Fritz Sämisch eingeführt. Die Herausgeber von Modern Chess Openings nannten sie " +
      "1925 eine „bizarre Verteidigung“, und Bobby Fischer setzte sie im WM-Kampf 1972 " +
      "zweimal gegen Boris Spasski ein.",
  },

  "1.e4 Nf6 2.Nc3 e5": {
    strategy:
      "Besetzt das Zentrum und lässt den Springer auf f6 weiter auf e4 zielen; die Partie " +
      "geht in die Wiener Partie über. Gegen 3.f4 schlägt Schwarz mit ...d5 zurück und hat " +
      "nach 4.fxe5 Sxe4 aktive Figuren; gegen 3.Lc4 lautet die Antwort 3...Sxe4 4.Dh5 Sd6, " +
      "und 3.Sf3 Sc6 erreicht das Vierspringerspiel. Der Preis ist scharfe Theorie in den " +
      "Gambitvarianten, und ein frühes ...exf4 lädt zu e5 ein, das den Springer zurücktreibt.",
  },

  "1.e4 Nf6 2.Nc3 d6": {
    strategy:
      "Deckt e5, sodass 3.e5 nach 3...dxe5 einfach einen Bauern verliert, und steuert einen " +
      "Pirc-Aufbau mit ...g6, ...Lg7 und ...O-O an. Weiß kann mit d4 und f4 ein breites " +
      "Zentrum errichten oder sich ruhig mit Sf3 und Le2 entwickeln, und Schwarz schlägt " +
      "später mit ...c5 oder ...e5 zurück. Der Preis ist eine gewisse Passivität: Das Zentrum " +
      "gehört zunächst Weiß, und Schwarz muss beweisen, dass es überdehnt ist.",
  },

  "1.e4 Nf6 2.Nc3 Nc6": {
    strategy:
      "Entwickelt den Springer und hält ...e5 in Reserve: 3.Sf3 e5 ist ein Vierspringerspiel, " +
      "und 3.d4 führt in die Nimzowitsch-Verteidigung. Der Vorstoß 3.e5 droht hier nichts, " +
      "denn der Bauer ist ungedeckt und 3...Sxe5 nimmt ihn. Nach 3.d4 d5 4.e5 versperrt der " +
      "Springer auf c6 jedoch den c-Bauern, sodass Schwarz der übliche Hebel ...c5 gegen die " +
      "Bauernkette fehlt.",
  },

  "1.e4 Nf6 2.Nc3 c6": {
    strategy:
      "Bereitet ...d5 mit einem Caro-Kann-Aufbau vor, und 3.d4 d5 4.e5 wird mit ...Se4 oder " +
      "...Sfd7 beantwortet. Da der Springer schon auf f6 steht, verschafft 3.e5 Sd5 4.Sxd5 " +
      "cxd5 5.d4 Weiß jedoch den Raum eines vorgerückten Zentrums, und Schwarz muss e5 mit " +
      "...d6 und ...Sc6 untergraben. Korrekt, gibt aber mehr preis als ...d5.",
  },

  "1.e4 Nf6 2.Nc3 d5": {
    name: "Aljechin-Verteidigung: Skandinavische Variante",
    background:
      "Dies ist die eigenständige Aljechin-Variante nach 2.Sc3. Jonny Hector, der gegen die " +
      "Aljechin-Verteidigung regelmäßig 2.Sc3 spielt, hat gegen sie gut gepunktet, und seine " +
      "Ideen haben Weiß einen theoretischen Vorteil verschafft, weshalb Lehrbuchautoren wie " +
      "Davies, Cox und Taylor stattdessen 2...e5 empfohlen haben.",
    strategy:
      "Greift e4 ein zweites Mal an, und Weiß antwortet meist mit dem Abtausch auf d5 oder " +
      "dem Vorstoß nach e5. Nach 3.exd5 Sxd5 4.Lc4 führen sowohl ...Sb6 als auch ...Sxc3 zu " +
      "etwa ausgeglichenem Spiel, während 3.e5 Raum gewinnt und 3...Sfd7 4.d4 e6 in die " +
      "Steinitz-Variante der Französischen Verteidigung übergeht. Weiß bestimmt die Struktur, " +
      "daher ist der Zug korrekt, aber nicht die bequemste Antwort für Schwarz.",
  },

  "1.e4 Nf6 2.Nc3 e6": {
    strategy:
      "Bereitet ...d5 vor, und 3.d4 d5 erreicht das Klassische System der Französischen " +
      "Verteidigung. Weiß kann stattdessen 3.e5 Sd5 spielen, die Zweispringervariante der " +
      "Aljechin-Verteidigung mit bereits gezogenem ...e6: Nach 4.Sxd5 exd5 löst Schwarz den " +
      "Doppelbauern mit ...d6 auf, und die Stellung ist eher remisträchtig, während 4.d4 Sxc3 " +
      "5.bxc3 eine an die Französische Verteidigung erinnernde Struktur ergibt. Korrekt, doch " +
      "Weiß bestimmt, welche dieser Strukturen Schwarz bekommt.",
  },

  "1.e4 Nf6 2.Nc3 g6": {
    strategy:
      "Bereitet ...Lg7 und ...d6 vor, und 3.d4 d6 geht in eine Pirc-Ufimzew-Verteidigung " +
      "über. Gegen 3.e5 zieht der Springer nach h5, wo ihn der g6-Bauer deckt, doch er steht " +
      "am Rand, und Weiß gewinnt mit d4 oder g4 Raum. Korrekt, lässt Weiß aber mehr " +
      "Möglichkeiten als ...d6.",
  },

  "1.e4 Nf6 2.Nc3 Na6": {
    strategy:
      "Strebt vom Rand nach b4 oder c5, doch der Springer steht dort schlecht und tut nichts " +
      "gegen 3.e5, das den Springer auf f6 mit Zeitgewinn für Weiß nach g8 zurückschickt.",
  },

  "1.e4 Nf6 2.Nc3 a6": {
    strategy:
      "Bereitet ...b5 vor, kümmert sich aber nicht um den Springer auf f6, den 3.e5 mit " +
      "Zeitgewinn nach g8 zurückschickt. Weiß besetzt dann mit d4 das Zentrum, während " +
      "Schwarz noch unentwickelt ist.",
  },

  "1.e4 Nf6 2.Nc3 a5": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern und schwächt b5, während 3.e5 den Springer " +
      "nach g8 zurücktreibt und Weiß freie Hand lässt, ein breites Zentrum aufzubauen.",
  },

  "1.e4 Nf6 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 gegen e4 vor, doch zuerst greift 3.e5 den Springer an, der nur nach g8 " +
      "zurückkann. Schwarz hat dann zwei Tempi verloren, und Weiß setzt mit d4 fort.",
  },

  "1.e4 Nf6 2.Nc3 c5": {
    strategy:
      "Zielt auf d4, doch 3.e5 zwingt den Springer nach g8, dem einzigen sicheren Feld: Sd5 " +
      "scheitert an Sxd5, Se4 an Sxe4, Sg4 an Dxg4 und Sh5 an Dxh5. Schwarz hat zwei Tempi " +
      "verbraucht, und Weiß hat Raum gewonnen.",
  },

  "1.e4 Nf6 2.Nc3 h6": {
    strategy:
      "Nimmt dem Läufer das Feld g5, ist aber ein langsamer Wartezug. Nach 3.e5 muss der " +
      "Springer nach h7 oder g8, und Weiß gewinnt Raum und Tempo.",
  },

  "1.e4 Nf6 2.Nc3 h5": {
    strategy:
      "Bereitet ...Sg4 vor und deckt das Feld g4, verliert aber ein Tempo und schwächt g5 und " +
      "g6. Nach 3.e5 Sg4 4.d4 d6 5.h3 muss der Springer nach h6 zurück, und Weiß behält den " +
      "Raumvorteil.",
  },

  "1.e4 Nf6 2.Nc3 Ng8": {
    strategy:
      "Zieht den Springer sofort zurück, macht den Entwicklungszug rückgängig und schenkt " +
      "Weiß zwei Tempi, um mit d4 und Sf3 ein Bauernzentrum aufzubauen.",
  },

  "1.e4 Nf6 2.Nc3 Rg8": {
    strategy:
      "Nimmt dem Springer auf f6 das einzige Rückzugsfeld: Nach 3.e5 hat er kein sicheres " +
      "Feld mehr, denn Sd5, Se4, Sg4 und Sh5 scheitern an Sxd5, Sxe4, Dxg4 und Dxh5. Der " +
      "Turmzug gibt außerdem die kurze Rochade auf.",
  },

  "1.e4 Nf6 2.Nc3 b5": {
    strategy:
      "Lässt den Bauern ungedeckt: 3.Lxb5 gewinnt ihn und hält e4 durch den Springer gedeckt, " +
      "sodass 3...Sxe4 an 4.Sxe4 scheitert. Schwarz hat für den Bauern keine Kompensation.",
  },

  "1.e4 Nf6 2.Nc3 g5": {
    strategy:
      "Schwächt f5 und h5 und lässt den Bauern auf g5 ungedeckt: Sobald d4 gezogen ist, " +
      "greift ihn der Läufer von c1 an, und 3.e5 treibt den Springer mit Tempo nach g8 " +
      "zurück. Schwarz muss weitere Züge für den Bauern aufwenden und gerät weit in " +
      "Entwicklungsrückstand.",
  },

  "1.e4 Nf6 2.Nc3 Ng4": {
    strategy:
      "Verliert den Springer nach 3.Dxg4: Nichts deckt g4, denn der Läufer auf c8 ist durch " +
      "den d7-Bauern versperrt.",
  },

  "1.e4 Nf6 2.Nc3 Nh5": {
    strategy: "Verliert den Springer nach 3.Dxh5, da nichts das Feld h5 deckt.",
  },

  "1.e4 Nf6 2.Nc3 Nxe4": {
    strategy:
      "Gibt einen Springer für einen Bauern: 3.Sxe4 gewinnt die Figur, und 3...d5 zwingt den " +
      "Springer nur zum Rückzug nach g3 oder c3, ohne dass Schwarz Kompensation hat.",
  },

  "1.e4 Nf6 2.Nc3 Nd5": {
    strategy:
      "Stellt den Springer ein: 3.Sxd5 gewinnt ihn, denn der d7-Bauer verstellt der Dame den " +
      "Weg nach d5.",
  },

  "1.e4 Nf6 2.e5 Nd5": {
    strategy:
      "Bringt den angegriffenen Springer ins Zentrum und lädt Weiß ein, ihn mit c4 zu jagen " +
      "und mit d4 ein breites Bauernzentrum aufzubauen. Schwarz greift dann den Bauern e5 mit " +
      "...d6 an, zieht den Springer nach b6 zurück, sobald c4 ihn angreift, und entwickelt " +
      "sich mit ...Lg4 oder ...Lf5 oder mit ...g6 und ...Lg7 gegen das Zentrum. Der Preis " +
      "sind Zeit und Raum; das Ziel ist, die weißen Bauern von Stärken zu Angriffszielen zu " +
      "machen.",
  },

  "1.e4 Nf6 2.e5 Ng8": {
    name: "Aljechin-Verteidigung: Brooklyn-Verteidigung",
    background:
      "Joel Benjamin benannte die Variante nach seiner Heimatstadt Brooklyn; er nennt sie " +
      "seine Lieblingsvariante. Die erste überlieferte Partie mit 2...Sg8 ist " +
      "Nimzowitsch–Albin, Wien 1905, die Nimzowitsch mit Weiß gewann.",
    strategy:
      "Zieht den Springer auf sein Ausgangsfeld zurück und greift dann e5 mit ...d6 an oder " +
      "baut mit ...e6 und ...d5 eine Bauernkette wie in der Französischen Verteidigung auf, " +
      "um anschließend mit ...c5 zu hebeln. Die beiden Springerzüge kosten Schwarz Zeit, " +
      "sodass Weiß sich mit d4 und Sf3 ungehindert entwickelt und mehr Raum behält. Die " +
      "Theorie sieht Weiß nur leicht im Vorteil, etwa nach 3.d4 d6 4.Sf3 Lg4 5.h3.",
  },

  "1.e4 Nf6 2.e5 Ne4": {
    name: "Aljechin-Verteidigung: Mokele-Mbembe",
    background:
      "John L. Watson und Eric Schiller nennen den Zug „Mokele-Mbembe“ und analysieren ihn in " +
      "The Big Book of Busts (1995) bis zu einer Gewinnstellung für Weiß. Nunn's Chess " +
      "Openings (1999) kommt zu dem Schluss, dass Weiß großen Vorteil erhält.",
    strategy:
      "Nach 3.d4 hat der Springer auf e4 kein sicheres Feld mehr, sodass Schwarz weitere Züge " +
      "darauf verwenden muss, ihn zu stützen oder ihm ein Rückzugsfeld freizumachen. Das " +
      "naheliegende 3...f6 öffnet zudem die Diagonale e8–h5, und 4.Dh5+ g6 5.Dh4 greift den " +
      "Springer erneut an, während Weiß in der Entwicklung vorn liegt.",
  },

  "1.e4 Nf6 2.e5 Ng4": {
    strategy:
      "Stellt den Springer ein: 3.Dxg4 gewinnt ihn, weil der Bauer d7 den Läufer c8 verstellt " +
      "und keine andere schwarze Figur g4 deckt.",
  },

  "1.e4 Nf6 2.e5 Nh5": {
    strategy:
      "Stellt den Springer an den Rand, wo 3.Dxh5 ihn einfach gewinnt: Der Bauer h7 verstellt " +
      "den Turm, und sonst deckt nichts h5.",
  },

  "1.e4 Nf6 2.e5 Nc6": {
    strategy:
      "Will mit dem Springer auf e5 schlagen, übergeht aber den Angriff auf f6. Nach 3.exf6 " +
      "ist das Ziel verschwunden, und Weiß hat einen Springer für einen Bauern gewonnen.",
  },

  "1.e4 Nf6 2.e5 Na6": {
    strategy:
      "Entwickelt den Springer an den Rand, ohne auf den Angriff auf f6 zu reagieren. 3.exf6 " +
      "gewinnt den Springer für einen Bauern, und der Springer auf a6 steht ohnehin schlecht.",
  },

  "1.e4 Nf6 2.e5 Rg8": {
    strategy:
      "Ein sinnloser Turmzug, der den Springer f6 seinem Schicksal überlässt. 3.exf6 gewinnt " +
      "eine Figur für einen Bauern, und Schwarz hat zudem das Recht zur kurzen Rochade " +
      "aufgegeben.",
  },

  "1.e4 Nf6 2.e5 a6": {
    strategy:
      "Ein Wartezug, der den Angriff auf den Springer f6 übergeht. 3.exf6 gewinnt eine Figur " +
      "für einen Bauern.",
  },

  "1.e4 Nf6 2.e5 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel, lässt aber den angegriffenen Springer f6 stehen. Nach " +
      "3.exf6 exf6 hat Schwarz für die Figur nur einen Bauern.",
  },

  "1.e4 Nf6 2.e5 b6": {
    strategy:
      "Bereitet ...Lb7 und die lange Diagonale vor, doch der Springer f6 bleibt angegriffen. " +
      "Weiß gewinnt mit 3.exf6 eine Figur für einen Bauern.",
  },

  "1.e4 Nf6 2.e5 b5": {
    strategy:
      "Überdehnt den Damenflügel und übergeht den Angriff auf f6. 3.exf6 gewinnt einen " +
      "Springer für einen Bauern, und der ungedeckte Bauer b5 fällt zudem nach Lxb5.",
  },

  "1.e4 Nf6 2.e5 c6": {
    strategy:
      "Bereitet ...d5 wie in der Caro-Kann-Verteidigung vor, doch der Springer f6 bleibt " +
      "angegriffen. Nach 3.exf6 exf6 hat Schwarz für die Figur nur einen Bauern.",
  },

  "1.e4 Nf6 2.e5 c5": {
    strategy:
      "Ein Gegenstoß im Zentrum wie in der Sizilianischen Verteidigung, der viel zu langsam " +
      "ist. 3.exf6 gewinnt den Springer für einen Bauern, bevor der c-Bauer eine Rolle " +
      "spielt.",
  },

  "1.e4 Nf6 2.e5 d6": {
    strategy:
      "Greift den Bauern e5 an, doch Weiß schlägt zuerst den Springer: Nach 3.exf6 exf6 hat " +
      "Schwarz für die Figur nur einen Bauern.",
  },

  "1.e4 Nf6 2.e5 d5": {
    strategy:
      "Besetzt das Zentrum wie in einem französischen Aufbau, doch der Springer f6 bleibt " +
      "angegriffen. 3.exf6 gewinnt eine Figur, und ...exf6 bringt nur einen Bauern zurück.",
  },

  "1.e4 Nf6 2.e5 e6": {
    strategy:
      "Öffnet der Dame die Diagonale, damit ...Dxf6 zurückschlagen kann, doch das bringt nur " +
      "einen Bauern zurück. Nach 3.exf6 Dxf6 hat Weiß einen Springer für einen Bauern " +
      "gewonnen.",
  },

  "1.e4 Nf6 2.e5 g6": {
    strategy:
      "Bereitet ein Fianchetto vor, übersieht aber den Angriff auf f6. Nach 3.exf6 exf6 hat " +
      "Weiß einen Springer für einen Bauern gewonnen.",
  },

  "1.e4 Nf6 2.e5 g5": {
    strategy:
      "Schwächt grundlos den Königsflügel und lässt den Springer im Angriff stehen. 3.exf6 " +
      "gewinnt eine Figur, und ...exf6 bringt nur einen Bauern zurück.",
  },

  "1.e4 Nf6 2.e5 h6": {
    strategy:
      "Verhindert Lg5, aber nicht das Schlagen auf f6. 3.exf6 gewinnt eine Figur für einen " +
      "Bauern, und der Zug des h-Bauern ist verschwendet.",
  },

  "1.e4 Nf6 2.e5 h5": {
    strategy:
      "Ein Randbauernzug, der den angegriffenen Springer weder wegzieht noch deckt. 3.exf6 " +
      "gewinnt ihn für einen Bauern.",
  },
};
