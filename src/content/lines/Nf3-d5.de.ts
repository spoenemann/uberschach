import type { OpeningTexts } from "../book.ts";

// German prose for Nf3-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.Nf3 d5 2.c4": {
    name: "Réti-Eröffnung",
    background:
      "Nach Rétis eigener Angabe kam die Eröffnung Anfang 1923 in die Meisterpraxis, und Hans " +
      "Kmoch nannte das Angriffssystem, das Réti in Karlsbad 1923 gegen Rubinstein anwandte, " +
      "Réti-Eröffnung oder Réti-System. Heute bezeichnet der Name nur noch Sf3 und c4 von " +
      "Weiß gegen ...d5, wobei mindestens ein Läufer fianchettiert wird und kein frühes d4 " +
      "folgt.",
    strategy:
      "Greift d5 von der Flanke an, bevor sich Weiß mit den Zentrumsbauern festlegt; meist " +
      "folgen g3 und Lg2. Schwarz kann mit 2...dxc4 schlagen, worauf e3, Sa3 oder Da4+ den " +
      "Bauern zurückgewinnt, d5 mit ...e6 oder ...c6 halten, was oft zu Stellungen des " +
      "Damengambits führt, oder 2...d4 vorstoßen, worauf e3 oder das schärfere b4 folgt. Es " +
      "ist die häufigste eigenständige Fortsetzung nach 1.Sf3, auch wenn das Zentrum vorerst " +
      "Schwarz überlassen bleibt.",
  },

  "1.Nf3 d5 2.d4": {
    strategy:
      "Besetzt sofort das Zentrum und führt ins Damenbauernspiel mit dem Springer bereits auf " +
      "f3. Weiß kann mit c4 ein Damengambit anstreben, mit e3 und Ld3 einen Colle-Aufbau oder " +
      "mit Lf4 ein London-System. Der Zug gibt den eigenständigen Charakter von 1.Sf3 auf und " +
      "lässt Schwarz eine Standardverteidigung wählen, ist aber völlig gesund.",
  },

  "1.Nf3 d5 2.g3": {
    name: "Königsindischer Angriff",
    background:
      "Auf Großmeisterebene kam er als Ableger der in den 1950er-Jahren weit verbreiteten " +
      "Königsindischen Verteidigung auf. Zu seinen bekannten Anwendern zählen Bobby Fischer " +
      "(vor allem früh in seiner Laufbahn), Michail Botwinnik, Wassili Smyslow und Tigran " +
      "Petrosjan; heute ist er auf Großmeisterebene relativ selten, auf Vereinsebene aber " +
      "beliebt.",
    strategy:
      "Bereitet Lg2 und die Rochade vor, danach d3, Sbd2 und e4 für ein kompaktes System, das " +
      "sich gegen die meisten Aufstellungen wiederholen lässt. Schwarz kann mit ...Sf6, ...c5 " +
      "und ...e6 ein Zentrum errichten, den Läufer mit ...c6 und ...Lg4 entwickeln oder mit " +
      "...c5, ...Sc6 und ...e5 eine Königsindische Verteidigung mit vertauschten Farben " +
      "wählen. Weiß überlässt Schwarz zunächst das Zentrum und strebt später e4-e5 an, das " +
      "Raum am Königsflügel und Angriffschancen bringt.",
  },

  "1.Nf3 d5 2.b3": {
    name: "Larsen-Eröffnung",
    background:
      "Aron Nimzowitsch experimentierte in den 1920er- und 1930er-Jahren mit 1.b3, wählte " +
      "aber häufiger die Zugfolge 1.Sf3 d5 2.b3. Bent Larsen spielte 1.b3 von 1968 bis 1972 " +
      "häufig, und Bobby Fischer setzte es 1970 fünfmal ein.",
    strategy:
      "Bereitet Lb2 vor, der auf der langen Diagonale gegen e5 und g7 wirkt, oft gefolgt von " +
      "e3 und Lb5 gegen einen Springer auf c6, eine Nimzo-Indische Verteidigung mit " +
      "vertauschten Farben. Der Springer auf f3 hindert Schwarz daran, sofort mit ...e5 zu " +
      "antworten. Viele dieser Varianten gelten theoretisch nur als ausgeglichen, und Weiß " +
      "überlässt Schwarz vorerst das Zentrum.",
  },

  "1.Nf3 d5 2.e3": {
    strategy:
      "Öffnet die Diagonale des Läufers f1 und strebt Le2 oder Ld3 mit anschließendem d4 oder " +
      "c4 an, hin zu einem Colle-artigen Aufbau oder einem Damengambit. Der Zug ist solide, " +
      "sperrt aber den Läufer c1 ein und legt Weiß auf einen langsamen Plan fest, sodass " +
      "Schwarz sich mit ...Sf6, ...c5 oder ...Lg4 frei entwickelt.",
  },

  "1.Nf3 d5 2.d3": {
    name: "Zukertort-Eröffnung: Altindischer Angriff",
    strategy:
      "Unterstützt den Vorstoß e4 für einen Altindischen Aufbau mit vertauschten Farben, mit " +
      "Sbd2, g3 oder Le2. Der Zug ist flexibel und gesund, aber passiv: Schwarz besetzt mit " +
      "...Sf6, ...Sc6 und ...e5 oder mit ...c5 das Zentrum und begegnet e4 auf Augenhöhe.",
  },

  "1.Nf3 d5 2.c3": {
    strategy:
      "Bereitet d4 für eine Colle- oder Slawisch-artige Struktur vor, oder später e4. Der " +
      "Bauer nimmt dem Springer b1 das Feld c3, sodass dieser über d2 entwickelt werden muss, " +
      "während Schwarz sich mit ...Sf6 und ...Lf5 oder ...Lg4 frei entwickelt.",
  },

  "1.Nf3 d5 2.Nc3": {
    name: "Zukertort-Eröffnung: Mexikanisch im Anzuge",
    strategy:
      "Entwickelt eine Figur und bereitet e4 vor, verstellt aber den c-Bauern, sodass die " +
      "c4-Aufbauten der Hauptvarianten nicht mehr möglich sind. Schwarz kann mit ...d4 Raum " +
      "gewinnen oder mit ...Sf6 und ...Lf5 eine bequeme Stellung erreichen.",
  },

  "1.Nf3 d5 2.e4": {
    strategy:
      "Bietet den e-Bauern für schnelles Figurenspiel an: Nach 2...dxe4 3.Sg5 will Weiß ihn " +
      "zurückgewinnen oder f7 angreifen. Schwarz gibt ihn mit 3...e5 zurück oder behält ihn " +
      "mit 3...Lf5 und steht in beiden Fällen besser, auch wenn ein unvorbereiteter " +
      "Verteidiger in taktische Fallen geraten kann.",
  },

  "1.Nf3 d5 2.a3": {
    strategy:
      "Bereitet b4 vor und nimmt einem Läufer das Feld b4, kostet aber ein Tempo für einen " +
      "Randbauern, während Schwarz mit ...Sf6, ...c5 und ...e6 das Zentrum besetzt.",
  },

  "1.Nf3 d5 2.a4": {
    name: "Zukertort-Eröffnung: The Potato",
    strategy:
      "Gewinnt Raum am Damenflügel und verhindert ...b5, bereitet aber nichts vor und " +
      "schwächt b4. Schwarz entwickelt sich mühelos und baut mit ...Sf6, ...e6 und ...c5 sein " +
      "Zentrum auf.",
  },

  "1.Nf3 d5 2.b4": {
    name: "Santasiere's Folly",
    background:
      "Benannt nach dem amerikanischen Meister Anthony Santasiere (1904–1977), der die " +
      "Eröffnung erfand, ausarbeitete und ihr ein Buch widmete, „The Futuristic Chess " +
      "Opening: Santasiere's Folly“ (Chess Digest, Dallas 1973).",
    strategy:
      "Gewinnt Raum am Damenflügel mit Blick auf Lb2, doch der Bauer b4 hat keine " +
      "Bauerndeckung und wird zum Ziel von ...e6 und ...Lxb4, ...Dd6 oder ...a5. Weiß " +
      "verbringt Zeit am Flügel, während Schwarz sich frei entwickelt.",
  },

  "1.Nf3 d5 2.h3": {
    strategy:
      "Nimmt dem schwarzen Läufer das Feld g4, bevor ...Lg4 überhaupt droht, und kostet ein " +
      "Tempo, das Schwarz nutzt, um mit ...Sf6, ...e6 und ...c5 das Zentrum zu besetzen.",
  },

  "1.Nf3 d5 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel, tut aber nichts für Zentrum und Entwicklung und lockert " +
      "den Königsflügel, auf dem der weiße König rochieren würde. Schwarz entwickelt sich " +
      "frei mit ...Sf6 und ...e6 oder ...Lf5.",
  },

  "1.Nf3 d5 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, von wo er b5 und c4 ins Auge fasst, doch dort " +
      "steht er schlecht und blockiert den a-Bauern. Schwarz besetzt mit ...Sf6 und ...e6 " +
      "oder ...c5 das Zentrum.",
  },

  "1.Nf3 d5 2.Rg1": {
    name: "Zukertort-Eröffnung: Ampel-Variante",
    strategy:
      "Verzichtet auf die kurze Rochade, um einen späteren Vorstoß g4 zu stützen, ohne dass " +
      "sonst etwas diesen Vorstoß vorbereitet. Schwarz entwickelt sich mit ...Sf6 und ...e6, " +
      "und Weiß kann nur noch lang rochieren oder den König im Zentrum lassen.",
  },

  "1.Nf3 d5 2.Ng5": {
    strategy:
      "Zieht den Springer ein zweites Mal, um f7 und h7 anzugreifen, die König und Turm " +
      "decken. Nach 2...h6 muss er nach f3 oder h3 zurück, und Schwarz hat ein Tempo " +
      "gewonnen.",
  },

  "1.Nf3 d5 2.Nh4": {
    strategy:
      "Stellt den Springer ungedeckt an den Rand, wo 2...e6 oder 2...e5 die Diagonale der " +
      "Dame nach h4 öffnet. Weiß muss ein weiteres Tempo aufwenden, um ihn zurückzuziehen " +
      "oder mit g3 zu decken.",
  },

  "1.Nf3 d5 2.Ne5": {
    strategy:
      "Zieht den Springer ein zweites Mal, nach e5, wo ihn kein Bauer stützt. ...Sd7 bietet " +
      "den Tausch an, und ...f6 vertreibt ihn mit Zeitgewinn, während Weiß sonst nichts " +
      "entwickelt hat.",
  },

  "1.Nf3 d5 2.Nd4": {
    strategy:
      "Zentralisiert den Springer mit einem zweiten Zug, doch 2...e5 oder 2...c5 greift ihn " +
      "sofort an, und er muss erneut ziehen, nach f3, b3 oder b5. Schwarz baut mit Zeitgewinn " +
      "ein breites Zentrum auf.",
  },

  "1.Nf3 d5 2.Ng1": {
    strategy:
      "Bringt den Springer auf sein Ausgangsfeld zurück und macht den ersten Zug rückgängig. " +
      "Weiß hat nichts erreicht, und Schwarz hat mit d5 ein zusätzliches Tempo in der Hand.",
  },

  "1.Nf3 d5 2.g4": {
    strategy:
      "Verliert sofort einen Bauern: Nichts deckt g4, also schlägt 2...Lxg4, und Weiß hat für " +
      "den geschwächten Königsflügel nur die halboffene g-Linie vorzuweisen.",
  },

  "1.Nf3 d5": {
    background:
      "In den 1920er-Jahren die übliche Antwort, als Richard Réti viele seiner Partien mit " +
      "1.Sf3 begann; er spielte dagegen 2.c4, die Zugfolge, die heute seinen Namen trägt.",
  },

  "1.Nf3 d5 2.c4 e6": {
    name: "Englische Eröffnung: Agincourt-Verteidigung",
    background:
      "Dieselbe Stellung entsteht nach 1.c4 e6 2.Sf3 d5, der Agincourt-Verteidigung der " +
      "Englischen Eröffnung, in der 1...e6 ein gestütztes ...d5 vorbereitet, vergleichbar mit " +
      "der Französischen Verteidigung. In der Réti-Zugfolge führen 2...e6 und 2...c6 beide " +
      "durch Zugumstellung in die Englische Eröffnung.",
    strategy:
      "Deckt d5 mit einem Bauern und öffnet den Läufer f8; das Spiel steuert auf Strukturen " +
      "des Damengambits und der Katalanischen Eröffnung zu. Nach 3.d4 entsteht das Abgelehnte " +
      "Damengambit, nach 3.g3 Sf6 4.Lg2 hat Weiß eine Neo-Katalanische Eröffnung, und Schwarz " +
      "wählt zwischen ...Le7 und ...dxc4, worauf meist 5.Da4+ folgt. Der Preis ist der Läufer " +
      "c8, der hinter e6 eingesperrt bleibt, bis ...b6 und ...Lb7 oder ein späteres ...e5 ihm " +
      "Spiel verschafft.",
  },

  "1.Nf3 d5 2.c4 c6": {
    strategy:
      "Hält d5 mit dem c-Bauern und lässt, anders als ...e6, dem weißfeldrigen Läufer den Weg " +
      "nach f5 oder g4 offen. Nach 3.d4 entsteht die Slawische Verteidigung; 3.e3 Sf6 4.d4 " +
      "ergibt die ruhige Slawische Variante mit e3, 4.Sc3 e6 5.d4 die Halbslawische " +
      "Verteidigung. Der Preis ist, dass der Bauer dem Springer b8 das Feld c6 nimmt, sodass " +
      "dieser meist nach d7 geht.",
  },

  "1.Nf3 d5 2.c4 d4": {
    name: "Réti-Eröffnung: Vorstoßvariante",
    background:
      "Neben 2...dxc4 eine der beiden eigenständigen Hauptvarianten der Réti-Eröffnung. Sie " +
      "hält das Spiel geschlossen, und die Struktur ähnelt einer Benoni-Verteidigung mit " +
      "vertauschten Farben: Wie Schwarz im Benoni fianchettiert Weiß meist den Königsläufer.",
    strategy:
      "Gewinnt Raum und hält die Stellung geschlossen: Der Bauer nimmt Weiß die Felder c3 und " +
      "e3, sodass 3.Sc3 nach ...dxc3 einen Springer kosten würde. Weiß stellt ihn meist mit " +
      "3.e3 oder dem schärferen 3.b4 in Frage, das Raum am Damenflügel gewinnt. Schwarz " +
      "stützt den Bauern mit ...c5 oder ...e5 und entwickelt sich mit ...Sc6 und ...Sf6. Der " +
      "Bauer auf d4 kann zur Zielscheibe werden, sobald Weiß mit e3 und b4 Linien öffnet.",
  },

  "1.Nf3 d5 2.c4 dxc4": {
    name: "Réti-Eröffnung: Angenommenes Réti-Gambit",
    background:
      "Neben 2...d4 eine der beiden eigenständigen Hauptvarianten der Réti-Eröffnung, und " +
      "zwar diejenige, die das Spiel öffnet. Die vielen Möglichkeiten, mit denen Weiß den " +
      "Bauern zurückgewinnen kann, schränken ihre Beliebtheit ein.",
    strategy:
      "Nimmt den Bauern sofort und lädt Weiß ein, ihn zurückzugewinnen. 3.e3 oder 3.e4 holt " +
      "ihn mit einem kleinen Entwicklungsvorsprung zurück, 3.Sa3 und 3.Da4+ sind weitere " +
      "gängige Wege. Den Bauern mit 3...b5?! zu halten, gilt wegen 4.a4 als zweifelhaft, " +
      "deshalb muss Schwarz bereit sein, ihn zurückzugeben und die Entwicklung mit ...Sf6, " +
      "...e6 oder ...c6 abzuschließen. Die Strukturen ähneln dem Angenommenen Damengambit.",
  },

  "1.Nf3 d5 2.c4 Nf6": {
    strategy:
      "Entwickelt den Springer und deckt d5 ein zweites Mal, doch nach 3.cxd5 Sxd5 hat Weiß " +
      "die Bauernmehrheit im Zentrum und kann den Springer mit Sc3 und e4 vertreiben. Nach " +
      "3.d4 kann Schwarz noch zwischen dem Abgelehnten Damengambit mit ...e6 und der " +
      "Slawischen Verteidigung mit ...c6 wählen. Die Stellung ist dieselbe wie nach 1.Sf3 Sf6 " +
      "2.c4 d5.",
  },

  "1.Nf3 d5 2.c4 Nc6": {
    strategy:
      "Entwickelt mit Druck auf d4 und e5, gibt d5 aber keine Stütze: 3.cxd5 Dxd5 4.Sc3 " +
      "gewinnt ein Tempo gegen die Dame, und 3.d4 führt durch Zugumstellung in die " +
      "Tschigorin-Verteidigung. Spielbar, doch Weiß hat die leichtere Entwicklung. Der " +
      "Springer nimmt außerdem dem c-Bauern das Feld c6, sodass ein slawischer Aufbau mit " +
      "...c6 nicht mehr möglich ist.",
  },

  "1.Nf3 d5 2.c4 c5": {
    strategy:
      "Kämpft um d4, überlässt d5 aber 3.cxd5. Das Zurückschlagen mit 3...Dxd5 erlaubt 4.Sc3 " +
      "mit Tempogewinn, deshalb ist 3...Sf6 nebst ...Sxd5 besser, und nach 4.Sc3 Sxd5 " +
      "entsteht eine Symmetrievariante der Englischen Eröffnung, in der 5.e4 mit Tempo gegen " +
      "den Springer Raum im Zentrum gewinnt.",
  },

  "1.Nf3 d5 2.c4 g6": {
    strategy:
      "Bereitet ...Lg7 vor, überlässt die Deckung von d5 aber allein der Dame. Nach 3.cxd5 " +
      "läuft das Zurückschlagen mit 3...Dxd5 in 4.Sc3 mit Tempogewinn, während 3...Sf6 4.Sc3 " +
      "Sxd5 5.e4 Weiß mit Tempo gegen den Springer das Zentrum gibt. Spielbar, aber langsamer " +
      "als die Hauptantworten.",
  },

  "1.Nf3 d5 2.c4 b5": {
    name: "Réti-Eröffnung: Zilbermints-Gambit",
    strategy:
      "Bietet den b-Bauern an, damit 3.cxb5 den c-Bauern vom Zentrum ablenkt, in der Hoffnung " +
      "auf offene Linien und schnelle Entwicklung. Nach 3.cxb5 hat Weiß einfach einen Bauern " +
      "mehr, und auch nach 3.cxd5 Dxd5 4.Sc3 bleibt der Bauer b5 angreifbar.",
  },

  "1.Nf3 d5 2.c4 e5": {
    strategy:
      "Bietet den e-Bauern für offene Linien an, doch 3.Sxe5 nimmt ihn einfach, und nach " +
      "3...dxc4 oder 3...d4 hat Schwarz für den Bauern nur etwas Aktivität.",
  },

  "1.Nf3 d5 2.c4 Na6": {
    strategy:
      "Ein Randspringer, der auf b4 und c5 zielt, aber nichts für d5 tut; nach 3.cxd5 Dxd5 " +
      "4.Sc3 entwickelt sich Weiß mit Tempo gegen die Dame.",
  },

  "1.Nf3 d5 2.c4 Be6": {
    strategy:
      "Deckt d5 ein zweites Mal, verstellt aber den e-Bauern und lässt b7 ungedeckt. Nach " +
      "3.cxd5 Lxd5 4.Sc3 wird der Läufer erneut angegriffen, und Weiß entwickelt sich mit " +
      "Tempogewinn.",
  },

  "1.Nf3 d5 2.c4 Bf5": {
    strategy:
      "Entwickelt den Läufer außerhalb der Bauernkette und zielt auf b1, lässt aber b7 und d5 " +
      "zu schwach gedeckt: 3.Db3 greift b7 an, cxd5 folgt, und Schwarz hat Mühe, beide Bauern " +
      "zu halten.",
  },

  "1.Nf3 d5 2.c4 Bg4": {
    strategy:
      "Entwickelt den Läufer gegen den Springer f3, doch da hinter ihm nur der Bauer e2 " +
      "steht, ist der Springer nicht gefesselt, und b7 bleibt ungedeckt. 3.cxd5 Lxf3 4.exf3 " +
      "Dxd5 5.Sc3 vertreibt die Dame mit Tempo und lässt Weiß das Läuferpaar, und 3.Db3 " +
      "greift b7 sofort an.",
  },

  "1.Nf3 d5 2.c4 Qd7": {
    strategy:
      "Verstellt den Läufer c8, nimmt dem Springer b8 das Feld d7 und verliert Zeit, denn " +
      "3.cxd5 Dxd5 4.Sc3 greift die Dame erneut an.",
  },

  "1.Nf3 d5 2.c4 Qd6": {
    strategy:
      "Bringt die Dame früh ins Spiel und entwickelt nichts; nach 3.cxd5 Dxd5 4.Sc3 wird sie " +
      "erneut angegriffen, und Weiß entwickelt sich mit Tempo.",
  },

  "1.Nf3 d5 2.c4 Nh6": {
    strategy:
      "Ein Randspringer, der zwar f5 erreichen kann, aber d5 nicht stützt; 3.cxd5 Dxd5 4.Sc3 " +
      "gewinnt dann ein Tempo gegen die Dame.",
  },

  "1.Nf3 d5 2.c4 a6": {
    strategy:
      "Ein langsamer Zug, der weder d5 noch der Entwicklung hilft; 3.cxd5 Dxd5 4.Sc3 gewinnt " +
      "ein Tempo, und Weiß besetzt das Zentrum mit d4 oder e4.",
  },

  "1.Nf3 d5 2.c4 a5": {
    strategy:
      "Verhindert b4, tut aber nichts für d5 oder die Entwicklung; 3.cxd5 Dxd5 4.Sc3 gewinnt " +
      "ein Tempo, und Weiß setzt mit d4 oder e4 fort.",
  },

  "1.Nf3 d5 2.c4 b6": {
    strategy:
      "Bereitet ...Lb7 vor, überlässt d5 aber 3.cxd5 Dxd5 4.Sc3, das die Dame mit Tempogewinn " +
      "angreift und Weiß freie Hand im Zentrum gibt.",
  },

  "1.Nf3 d5 2.c4 f6": {
    strategy:
      "Nimmt dem Springer das Feld f6, schwächt die Diagonale e8–h5 und das Feld e6 und tut " +
      "nichts für d5; 3.cxd5 Dxd5 4.Sc3 gewinnt Zeit.",
  },

  "1.Nf3 d5 2.c4 f5": {
    strategy:
      "Kontrolliert e4 wie in der Holländischen Verteidigung, schwächt aber die Diagonale " +
      "e8–h5 und das Feld e6 und tut nichts für d5; 3.cxd5 Dxd5 4.Sc3 gewinnt ein Tempo.",
  },

  "1.Nf3 d5 2.c4 h6": {
    strategy:
      "Ein langsamer Bauernzug, der weder d5 deckt noch etwas entwickelt; 3.cxd5 Dxd5 4.Sc3 " +
      "gewinnt ein Tempo.",
  },

  "1.Nf3 d5 2.c4 h5": {
    strategy:
      "Verschwendet einen Zug und schwächt g5 und g6, während d5 dem Abtausch 3.cxd5 Dxd5 " +
      "4.Sc3 überlassen bleibt, der ein Tempo gewinnt.",
  },

  "1.Nf3 d5 2.c4 Nd7": {
    strategy:
      "Verstellt der Dame die Deckung von d5 und sperrt den Läufer c8 ein, sodass 3.cxd5 " +
      "einen Bauern gewinnt, den keine schwarze Figur sofort zurückschlagen kann. Weiß kann " +
      "ihn mit Sc3 und e4 halten, während Schwarz mit ...Sgf6 und ...Sb6 umgruppiert.",
  },

  "1.Nf3 d5 2.c4 Bd7": {
    strategy:
      "Verstellt der Dame die Deckung von d5 und nimmt dem Springer b8 das Feld d7, sodass " +
      "3.cxd5 einen Bauern gewinnt, den keine schwarze Figur sofort zurückschlagen kann. Der " +
      "Läufer auf d7 steht passiv, und nach 3...Sf6 4.Sc3 ist der Bauer gedeckt.",
  },

  "1.Nf3 d5 2.c4 Bh3": {
    strategy:
      "Der Läufer wird vom Bauern g2 angegriffen und ist ungedeckt, sodass 3.gxh3 eine Figur " +
      "ohne Gegenwert gewinnt.",
  },

  "1.Nf3 d5 2.c4 Kd7": {
    strategy:
      "Gibt die Rochade auf und verstellt der Dame die Deckung von d5, sodass 3.cxd5 einen " +
      "Bauern gewinnt, den keine schwarze Figur sofort zurückschlagen kann. Der König bleibt " +
      "ohne jede Gegenleistung im Zentrum.",
  },

  "1.Nf3 d5 2.c4 g5": {
    strategy:
      "Verliert sofort einen Bauern: 3.Sxg5 gewinnt ihn, da g5 ungedeckt ist, und h7 und f7 " +
      "geraten unter Beschuss, während Schwarz den Königsflügel ohne Gegenwert geschwächt " +
      "hat.",
  },

  "1.Nf3 d5 2.g3 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld und kontrolliert e4, wohin Weiß " +
      "seinen e-Bauern stellen will, und hält sich dabei alle Aufstellungen offen. Nach 3.Lg2 " +
      "kann Schwarz …c5 mit …Sc6 und …e6 oder …e5 wählen, …c6 mit …Lg4 oder …Lf5, bevor …e6 " +
      "den Läufer einsperrt, oder …g6 mit …Lg7. Dieselbe Stellung entsteht nach 1.Sf3 Sf6 " +
      "2.g3 d5.",
  },

  "1.Nf3 d5 2.g3 c5": {
    name: "Königsindischer Angriff: Sizilianische Variante",
    strategy:
      "Gewinnt Raum am Damenflügel und kontrolliert d4; es folgen …Sc6 und …e5 für einen " +
      "königsindischen Aufbau mit vertauschten Farben oder …Sf6 und …e6 für ein solides " +
      "Zentrum. Da kein Bauer d5 stützt, kann Weiß sofort mit c4 gegen d5 oder mit d4 gegen " +
      "c5 zurückschlagen. Schwarz muss noch entscheiden, wohin der Läufer c8 geht.",
  },

  "1.Nf3 d5 2.g3 c6": {
    strategy:
      "Stützt d5 und bereitet vor, den Läufer c8 nach f5 oder g4 zu entwickeln, bevor …e6 ihn " +
      "einsperrt; es folgen …Sf6 und …Sbd7. Der Bauer nimmt dem Springer b8 das Feld c6, " +
      "sodass dieser über d7 entwickelt wird. Weiß kann rochieren und mit d3 und Sbd2 e4 " +
      "anstreben oder mit d4 und c4 Raum nehmen.",
  },

  "1.Nf3 d5 2.g3 Bg4": {
    name: "Königsindischer Angriff: Keres-Variante",
    strategy:
      "Entwickelt den Läufer c8 außerhalb der Bauernkette, bevor …Sd7 oder …e6 ihn verstellen " +
      "können, und setzt mit …Sd7, …c6 und …Sgf6 fort. Da hinter dem Springer f3 nur der " +
      "Bauer e2 steht, übt der Läufer keinen echten Druck aus; …Lxf3 überlässt Weiß das " +
      "Läuferpaar, und h3 oder Se5 zwingen den Läufer, sich zu entscheiden.",
  },

  "1.Nf3 d5 2.g3 Nc6": {
    strategy:
      "Entwickelt sofort eine Figur und bereitet …e5 vor, wonach …Sf6 und …Le7 eine flexible " +
      "Aufstellung gegen Lg2, Rochade und d3 ergeben. Der Springer verstellt allerdings den " +
      "c-Bauern, sodass d5 keine Stütze durch …c6 erhält und Weiß mit c4 Druck ausüben oder " +
      "mit d4 Raum nehmen kann. Solide genug, aber der Springer legt sich fest, bevor die " +
      "Struktur geklärt ist.",
  },

  "1.Nf3 d5 2.g3 Bf5": {
    strategy:
      "Entwickelt den Läufer außerhalb der Bauernkette, bevor …e6 folgt, ein Londoner System " +
      "mit vertauschten Farben. So früh gespielt erlaubt es 3.Sh4, das den Läufer angreift; " +
      "nach …Lg6 Sxg6 hxg6 hat Schwarz Doppelbauern auf der g-Linie und das Läuferpaar " +
      "abgegeben. Spielbar, doch ein sicheres Feld auf h7 hat der Läufer erst nach …h6.",
  },

  "1.Nf3 d5 2.g3 e6": {
    strategy:
      "Stützt d5 und befreit den Läufer f8, mit …Sf6, …Le7 und …c5 als Fortsetzung, sperrt " +
      "aber den Läufer c8 ein, bevor er herausgekommen ist. Gegen diese Struktur wird der " +
      "weiße Plan mit Lg2, Rochade, d3, Sbd2 und e4 am häufigsten angewandt, und der Läufer " +
      "c8 muss später auf b7 oder d7 eine Aufgabe finden. Solide, aber passiv.",
  },

  "1.Nf3 d5 2.g3 g6": {
    name: "Königsindischer Angriff: Doppelfianchetto",
    strategy:
      "Spiegelt das Fianchetto mit …Lg7, sodass beide Königsläufer auf den langen Diagonalen " +
      "stehen; Schwarz kann mit …e5 und …Se7 ein breites Zentrum bilden oder mit …Sf6 und " +
      "…O-O fortsetzen. Den Bauern d5 deckt vorerst nur die Dame, und der Läufer auf g7 hilft " +
      "ihm nicht, sodass c4 ihn sofort prüft. Solide, legt sich aber stärker fest als …Sf6.",
  },

  "1.Nf3 d5 2.g3 b6": {
    strategy:
      "Bereitet …Lb7 vor, doch mit dem Bauern auf d5 blickt dieser Läufer nur auf den eigenen " +
      "Bauern, und der Zug lockert c6 und die lange Diagonale nach a8. Weiß entwickelt sich " +
      "mit Lg2 und Rochade und greift d5 mit c4 an.",
  },

  "1.Nf3 d5 2.g3 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel, ohne eine Figur zu entwickeln, und lockert c6 und die " +
      "lange Diagonale nach a8. Der Bauer ist sofort ein Ziel: a4 oder c4 stellt ihn infrage, " +
      "während Weiß mit Lg2 und Rochade fortsetzt.",
  },

  "1.Nf3 d5 2.g3 a6": {
    strategy:
      "Verbraucht ein Tempo für einen Randzug, der noch keine Aufgabe hat und bestenfalls …b5 " +
      "vorbereitet. Weiß entwickelt sich mit Lg2 und Rochade und nimmt dann mit d3 und e4 " +
      "oder mit d4 und c4 Raum.",
  },

  "1.Nf3 d5 2.g3 a5": {
    strategy:
      "Ein Randbauernzug: Er verhindert b4 und gewinnt Raum für …a4, entwickelt aber nichts. " +
      "Weiß setzt mit Lg2, Rochade und d4 oder c4 fort.",
  },

  "1.Nf3 d5 2.g3 h6": {
    strategy:
      "Ein langsamer Zug, der den weißen Figuren das Feld g5 nimmt, aber nichts entwickelt. " +
      "Weiß nutzt das Tempo für Lg2, Rochade und einen Zentrumsvorstoß mit d4 oder c4.",
  },

  "1.Nf3 d5 2.g3 h5": {
    strategy:
      "Gewinnt Raum am Flügel, verbraucht aber ein Tempo, ohne eine Figur zu entwickeln. Das " +
      "folgende …h4 verliert nur den Bauern durch Sxh4, da g3 den Springer deckt.",
  },

  "1.Nf3 d5 2.g3 f6": {
    strategy:
      "Bereitet …e5 vor, nimmt aber dem Springer g8 das Feld f6 und schwächt e6 sowie die " +
      "Diagonale e8–h5. Weiß besetzt mit Lg2, Rochade und d4 oder c4 das Zentrum, während " +
      "Schwarz in der Entwicklung zurückbleibt.",
  },

  "1.Nf3 d5 2.g3 f5": {
    strategy:
      "Strebt eine holländische Aufstellung an, doch der Bauer schwächt e6 und die Diagonale " +
      "e8–h5 und überlässt dem weißen Springer e5 als Vorposten. Schwarz muss noch alle " +
      "Figuren dahinter entwickeln, während Weiß rochiert und mit d3 oder d4 aufbaut.",
  },

  "1.Nf3 d5 2.g3 d4": {
    strategy:
      "Gewinnt Raum, bevor eine Figur entwickelt ist, doch der Bauer wird zum Ziel für c3 " +
      "oder e3 und den Springer f3. Schwarz muss ihn mit …c5, …e5 oder …Sc6 halten, während " +
      "Weiß erst rochiert und den Zeitpunkt des Angriffs wählt.",
  },

  "1.Nf3 d5 2.g3 Nd7": {
    strategy:
      "Verstellt den Läufer c8, sodass …Lf5 und …Lg4 nicht mehr möglich sind, und der " +
      "Springer auf d7 deckt d5 nicht, wie es …Sf6 täte. Weiß besetzt mit Lg2, Rochade und d4 " +
      "oder c4 das Zentrum.",
  },

  "1.Nf3 d5 2.g3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 ins Auge fasst, aber weit vom Zentrum " +
      "entfernt steht und den a-Bauern blockiert. Das kostet ein Tempo für wenig, und Weiß " +
      "nimmt mit Lg2, Rochade und d4 oder c4 Raum.",
  },

  "1.Nf3 d5 2.g3 Nh6": {
    strategy:
      "Strebt nach f5, wo er d4 und e3 ins Auge fassen würde, braucht dafür aber zwei Züge " +
      "und steht so lange am Rand. Weiß entwickelt sich mit Lg2, nimmt mit d4 oder c4 Raum " +
      "und kann den Springer später mit g4 vertreiben.",
  },

  "1.Nf3 d5 2.g3 Bd7": {
    strategy:
      "Schneidet die Dame von d5 ab, sodass der Bauer ungedeckt ist, und nimmt dem Springer " +
      "b8 das Feld d7, während der Läufer passiver steht als auf f5 oder g4. Weiß entwickelt " +
      "sich mit Lg2 und Rochade und greift d5 mit c4 an.",
  },

  "1.Nf3 d5 2.g3 Be6": {
    strategy:
      "Blockiert den Bauern e7, sodass weder …e6 noch …e5 den Läufer f8 befreien kann. Der " +
      "Läufer deckt d5, doch 3.Sg5 greift ihn an und droht Sxe6 fxe6 mit Doppelbauern auf der " +
      "e-Linie, sodass Schwarz Zeit verliert, um ihn erneut zu ziehen.",
  },

  "1.Nf3 d5 2.g3 Qd7": {
    strategy:
      "Bringt die Dame früh heraus und verstellt den Läufer c8. 3.Se5 greift die Dame sofort " +
      "an und gewinnt ein Tempo, da sie erneut ziehen muss.",
  },

  "1.Nf3 d5 2.g3 Qd6": {
    strategy:
      "Bringt die Dame früh auf ein exponiertes Feld. 3.Sc3 droht Sb5 mit Angriff auf die " +
      "Dame und c7, und sobald der d-Bauer gezogen hat, gewinnt Lf4 ein weiteres Tempo gegen " +
      "die Dame.",
  },

  "1.Nf3 d5 2.g3 g5": {
    name: "Königsfianchetto: Wiedenhagen-Beta-Gambit",
    strategy:
      "Bietet den g-Bauern an: 3.Sxg5 gewinnt ihn, und …e5 oder …h6 bringen höchstens ein " +
      "Tempo gegen den Springer. Der Bauer ist verloren und der Königsflügel dauerhaft " +
      "gelockert.",
  },

  "1.Nf3 d5 2.g3 e5": {
    name: "Königsindischer Angriff: Omega-Delta-Gambit",
    strategy:
      "Gibt den e-Bauern auf: 3.Sxe5 gewinnt ihn, und nach …Ld6 stützt Weiß den Springer mit " +
      "d4 und behält den Mehrbauern, ohne dass Schwarz echte Kompensation erhält.",
  },

  "1.Nf3 d5 2.g3 Kd7": {
    strategy:
      "Gibt ohne Grund das Rochaderecht auf und läuft in 3.Se5+, das den König zu einem " +
      "weiteren Zug zwingt. Der König bleibt im Zentrum stecken, während Schwarz noch mehr " +
      "Zeit verliert.",
  },

  "1.Nf3 d5 2.g3 Bh3": {
    strategy:
      "Stellt den Läufer ein: 3.Lxh3 gewinnt eine ganze Figur, da nichts h3 deckt und der " +
      "Turm h8 hinter dem Bauern h7 eingesperrt ist.",
  },

  "1.Nf3 d5 2.b3 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, deckt e4 und hält …c5, …e6, …Lf5, " +
      "…Lg4 und …g6 offen. Nach 3.Lb2 folgen meist …e6 und …c5 mit …Sc6, oder Schwarz " +
      "entwickelt zuerst den Läufer mit …Lf5 oder …Lg4 und hält dabei d5 und e4 fest im " +
      "Griff. Schwarz gibt nichts preis, und es entsteht dieselbe Stellung wie nach 1.Sf3 Sf6 " +
      "2.b3 d5.",
  },

  "1.Nf3 d5 2.b3 c5": {
    background:
      "Aron Nimzowitsch erreichte diese Stellung als Weißer gegen Rudolf Spielmann in New " +
      "York 1927 (3.Lb2 Sc6 4.e3 Sf6 5.Lb5) und gewann in 55 Zügen.",
    strategy:
      "Greift das Zentrum sofort vom Flügel aus an, bereitet …Sc6 und …Sf6 vor und kämpft um " +
      "d4, bevor Weiß das Feld besetzen kann. Ein typischer Verlauf, 3.Lb2 Sc6 4.e3 Sf6 " +
      "5.Lb5, ergibt eine Struktur der Nimzo-Indischen Verteidigung mit vertauschten Farben, " +
      "mit schwarzen Bauern auf c5 und d5 und gefesseltem Springer c6. Dafür fehlt d5 bis …e6 " +
      "die Bauerndeckung, und Weiß kann den Läufer auf c6 hergeben, um einen Springer auf e5 " +
      "zu postieren.",
  },

  "1.Nf3 d5 2.b3 Bg4": {
    background:
      "Raymond Keene, später Autor des Buches „Nimzowitsch/Larsen Attack“ (1977), gewann als " +
      "Weißer gegen Vlatko Kovačević in Amsterdam 1973 nach 2…Lg4 3.Lb2 Sd7.",
    strategy:
      "Entwickelt den Läufer außerhalb der Bauernkette und setzt den Springer f3 unter Druck, " +
      "der e5 und d4 deckt. Nach 3.Lb2 Sd7 bereitet Schwarz …e5 oder …Sgf6 mit …e6 vor und " +
      "nimmt auf f3, sobald der Tausch diesen Verteidiger beseitigt oder die weißen f-Bauern " +
      "verdoppelt. Dafür gibt Schwarz das Läuferpaar ab, und Weiß antwortet oft mit e3 und h3 " +
      "oder mit g3 und Lg2.",
  },

  "1.Nf3 d5 2.b3 Bf5": {
    strategy:
      "Entwickelt den weißfeldrigen Läufer außerhalb der Bauernkette, bevor …e6 ihn " +
      "einsperrt, und strebt ein Londoner System mit vertauschten Farben an, mit …Sf6, …e6, " +
      "…c6 und …Ld6 oder …Le7. Der Läufer kontrolliert e4, daher bereitet Weiß diesen Vorstoß " +
      "oft mit d3, Sbd2, g3 und Lg2 vor oder stellt den Läufer sofort mit Sh4 zur Rede. " +
      "Schwarz entwickelt sich bequem, doch der Läufer kann zur Zielscheibe werden.",
  },

  "1.Nf3 d5 2.b3 e6": {
    strategy:
      "Stützt d5 und öffnet dem Läufer f8 den Weg für …Sf6, …Le7 und …O-O; meist geht der Zug " +
      "in Abspiele von 2…Sf6 mit …e6 über. Solide, aber er sperrt den Läufer c8 ein, bevor " +
      "…Lf5 oder …Lg4 möglich ist, und verzichtet so ohne Gewinn gegenüber 2…Sf6 auf zwei der " +
      "Hauptaufbauten, während Weiß mit Lb2, e3 und c4 oder d4 aufbaut.",
  },

  "1.Nf3 d5 2.b3 Nc6": {
    strategy:
      "Entwickelt mit Druck auf d4 und e5 und bereitet …e5 vor, verstellt aber den c-Bauern " +
      "und verzichtet auf die Aufbauten mit …c6 und …c5. Nach 3.Lb2 verliert ein sofortiges " +
      "…e5 einen Bauern durch Sxe5 und Lxe5, der Vorstoß braucht also weitere Vorbereitung. " +
      "Solide, doch der Springer legt sich fest, bevor Weiß einen Plan gezeigt hat.",
  },

  "1.Nf3 d5 2.b3 c6": {
    strategy:
      "Stützt d5 mit einem Bauern wie in der Slawischen Verteidigung und hält den Läufer c8 " +
      "für …Lf5 oder …Lg4 frei, bevor …e6 folgt. Solide, aber passiv: Der Bauer kontrolliert " +
      "weder d4 noch e5, nimmt dem Springer b8 das Feld c6, und ein späteres …c5 kostet einen " +
      "zweiten Zug, sodass Weiß mit Lb2, e3 und c4 oder d4 ungestört aufbaut.",
  },

  "1.Nf3 d5 2.b3 b6": {
    strategy:
      "Spiegelt den weißen Aufbau, bereitet …Lb7 vor und lässt die Zentrumsfrage offen. Der " +
      "Läufer auf b7 blickt auf den eigenen Bauern d5 und bleibt wirkungslos, bis …c5 und …d4 " +
      "oder ein Tausch die Diagonale öffnet, während Weiß derweil mit e3 und c4 oder d4 " +
      "aufbauen kann. Solide, aber anspruchslos.",
  },

  "1.Nf3 d5 2.b3 g6": {
    strategy:
      "Bereitet …Lg7 vor, um Lb2 auf der langen Diagonale entgegenzutreten, gefolgt von …Sf6 " +
      "und …O-O. Solide, aber langsam im Zentrum: Der Bauer d5 steht ohne Bauerndeckung, und " +
      "Weiß kann ihn sofort mit c4 angreifen.",
  },

  "1.Nf3 d5 2.b3 Nd7": {
    strategy:
      "Entwickelt den Springer b8 auf ein Feld, auf dem er den Läufer c8 verstellt. Er " +
      "unterstützt …e5 und …c5, doch nach Lb2 scheitert …e5 weiterhin an Sxe5, und der Läufer " +
      "bleibt hinter ihm vergraben.",
  },

  "1.Nf3 d5 2.b3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 ins Auge fasst, aber nichts für d4 " +
      "oder e5 tut, die er von c6 aus kontrollieren würde. Weiß setzt ungehindert mit Lb2, e3 " +
      "und c4 fort.",
  },

  "1.Nf3 d5 2.b3 Bd7": {
    strategy:
      "Entwickelt den Läufer auf ein passives Feld, das dem Springer b8 den Weg nach d7 " +
      "verstellt, statt ihn mit …Lf5 oder …Lg4 aktiv zu postieren. Nichts wird angegriffen, " +
      "sodass Weiß ungestört Lb2 und e3 spielt.",
  },

  "1.Nf3 d5 2.b3 Be6": {
    strategy:
      "Blockiert den Bauern e7, sodass weder …e6 noch …e5 möglich ist, bis der Läufer wieder " +
      "zieht, und auf e6 leistet der Läufer weniger als auf f5 oder g4. Weiß setzt " +
      "ungehindert mit Lb2, e3 und c4 fort.",
  },

  "1.Nf3 d5 2.b3 Qd7": {
    strategy:
      "Bringt die Dame früh ins Spiel, wo sie den Läufer c8 und den Weg des Springers b8 nach " +
      "d7 verstellt. Nichts wird angegriffen, sodass Weiß mit Lb2 und e3 Zeit gewinnt, " +
      "während die Dame im Weg steht.",
  },

  "1.Nf3 d5 2.b3 Qd6": {
    strategy:
      "Bringt die Dame früh auf die Diagonale a3–f8, wo 3.La3 sie sofort angreift, sodass sie " +
      "erneut ziehen oder mit …c5 abgeschirmt werden muss. Bis dahin ist keine Leichtfigur " +
      "entwickelt.",
  },

  "1.Nf3 d5 2.b3 Nh6": {
    strategy:
      "Stellt den Springer g8 auf dem Weg nach f5 an den Rand statt nach f6, wo er e4 und d5 " +
      "decken würde. Weiß spielt Lb2 und e3 ohne jeden Widerstand.",
  },

  "1.Nf3 d5 2.b3 a6": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern, ohne eine Figur zu entwickeln oder das " +
      "Zentrum zu berühren; der Sinn ist …b5, und Weiß gewinnt derweil ungehindert Raum mit " +
      "Lb2, e3 und c4.",
  },

  "1.Nf3 d5 2.b3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel mit der Idee …a4 gegen den Bauern b3, entwickelt aber " +
      "nichts, und der a-Bauer kann b6 und b5 nicht mehr decken. Weiß spielt Lb2 und e3 " +
      "ungehindert.",
  },

  "1.Nf3 d5 2.b3 b5": {
    strategy:
      "Rückt einen Flügelbauern vor, ohne eine Figur zu entwickeln, und der Bauer auf b5 ist " +
      "ungedeckt: Schon 3.e3 droht Lxb5+, und auch a4 kann ihn angreifen.",
  },

  "1.Nf3 d5 2.b3 f6": {
    strategy:
      "Bereitet …e5 vor, nimmt aber dem Springer g8 das Feld f6 und schwächt e6 sowie die " +
      "Diagonale e8–h5, ohne eine Figur zu entwickeln. Weiß setzt mit Lb2, e3 und c4 oder d4 " +
      "fort.",
  },

  "1.Nf3 d5 2.b3 f5": {
    strategy:
      "Legt sich sofort auf eine Bauernformation wie im Stonewall fest, die e5 als Loch " +
      "hinterlässt, das Lb2 und ein Springer auf e5 nutzen können, und verzögert die " +
      "Entwicklung der Königsflügelfiguren.",
  },

  "1.Nf3 d5 2.b3 h6": {
    strategy:
      "Verbraucht ein Tempo für einen vorbeugenden Bauernzug gegen ein Sg5, das niemand " +
      "droht, während Weiß mit Lb2 und e3 fortsetzt und das Zentrum beansprucht.",
  },

  "1.Nf3 d5 2.b3 h5": {
    strategy:
      "Beginnt einen Flügelvorstoß, ohne eine Figur zu entwickeln. Der h-Bauer schwächt g5 " +
      "und g6, legt sich auf einen Angriff fest, hinter dem keine Figuren stehen, und " +
      "überlässt Weiß das Zentrum.",
  },

  "1.Nf3 d5 2.b3 d4": {
    strategy:
      "Gewinnt Raum, doch 3.Lb2 greift den Bauern zweimal an, mit Läufer und Springer, sodass " +
      "Schwarz einen weiteren Zug wie …c5 oder …Sc6 aufwenden muss, um ihn zu halten, und e3 " +
      "oder c3 können ihn später untergraben. Zudem kontrolliert der Bauer c4 und e4 nicht " +
      "mehr.",
  },

  "1.Nf3 d5 2.b3 Bh3": {
    strategy:
      "Verliert den Läufer sofort durch 3.gxh3, denn keine schwarze Figur kann auf h3 " +
      "zurückschlagen.",
  },

  "1.Nf3 d5 2.b3 Kd7": {
    strategy:
      "Gibt das Rochaderecht auf und stellt den König ohne Grund auf die d-Linie, wo Se5+ " +
      "sofort Schach gibt. Der König bleibt im Zentrum ungeschützt, und der Turm h8 ist vom " +
      "Spiel abgeschnitten.",
  },

  "1.Nf3 d5 2.b3 e5": {
    strategy:
      "Gibt den e-Bauern weg: Nichts deckt e5, daher gewinnt 3.Sxe5 ihn, und der Springer " +
      "steht stark im Zentrum.",
  },

  "1.Nf3 d5 2.b3 g5": {
    strategy:
      "Lässt den g-Bauern durch 3.Sxg5 hängen, da der Bauer e7 die Diagonale der Dame " +
      "versperrt und keine andere Figur ihn deckt. Zudem wird der Königsflügel ohne Gegenwert " +
      "geschwächt.",
  },
};
