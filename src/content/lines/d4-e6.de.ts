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

  "1.d4 e6 2.c4 Nf6": {
    strategy:
      "Entwickelt den Königsspringer, kontrolliert e4 und hält die wichtigsten indischen " +
      "Aufbauten sowie das Abgelehnte Damengambit offen. Nach 3.Sc3 kann Schwarz mit ...Lb4 " +
      "fesseln, nach 3.Sf3 zwischen ...b6, ...Lb4+ und ...d5 wählen, und 3.g3 d5 4.Lg2 führt " +
      "zur Katalanischen Eröffnung. Der Preis ist der Läufer c8, der hinter dem Bauern e6 " +
      "eingesperrt bleibt, bis ...b6 und ...Lb7 ihn entwickeln.",
  },

  "1.d4 e6 2.c4 d5": {
    strategy:
      "Besetzt sofort das Zentrum und führt zum Abgelehnten Damengambit, in dem der Läufer c8 " +
      "hinter dem Bauern e6 eingesperrt bleibt, bis Schwarz ihn mit ...b6 und ...Lb7 oder mit " +
      "...dxc4 und ...e5 befreit. Nach 3.Sc3 Sf6 oder 3.Sf3 Sf6 ist der übliche Plan ...Le7 " +
      "und ...O-O. Die Struktur ist solide, aber etwas passiv, und Weiß behält mit Druck auf " +
      "d5 die Initiative.",
  },

  "1.d4 e6 2.c4 Bb4+": {
    name: "Keres-Verteidigung",
    background:
      "Benannt nach dem estnischen Großmeister Paul Keres und auch als Känguru-Verteidigung " +
      "bekannt. Das Schach war schon in den 1840er-Jahren bekannt, und Henry Thomas Buckle " +
      "spielte es 1851 in London in der vierten Partie seines Wettkampfs gegen Johann " +
      "Löwenthal; die heute übliche Antwort 3.Ld2 hatte Howard Staunton empfohlen.",
    strategy:
      "Entwickelt mit Schach, bevor Schwarz sich mit dem Springer g8 festlegt; Weiß antwortet " +
      "meist mit 3.Ld2, um Nimzo-Indisch zu vermeiden. Danach führen 3...Lxd2+ oder 3...a5 in " +
      "der Regel zu Bogo-Indisch, sobald Weiß Sf3 und Schwarz ...Sf6 spielt, während 3.Sc3 " +
      "Nimzo-Indisch mit ...Sf6, Holländisch mit ...f5 oder die Englische Verteidigung mit " +
      "...b6 zulässt. Nach 3.Ld2 De7 4.e4 d5 5.Lxb4 Dxb4+ 6.Dd2 werden die Damen getauscht, " +
      "und Weiß behält einen leichten Vorteil.",
  },

  "1.d4 e6 2.c4 f5": {
    name: "Holländische Verteidigung",
    background:
      "Elias Stein empfahl die Holländische Verteidigung in seinem 1789 erschienenen Buch als " +
      "beste Antwort auf 1.d4, und sowohl Botwinnik als auch Bronstein spielten sie in ihrem " +
      "Weltmeisterschaftskampf 1951. Der englische Großmeister Simon Williams spielt oft 1.d4 " +
      "e6, um die Holländische Verteidigung zu erreichen und dabei dem Staunton-Gambit (1.d4 " +
      "f5 2.e4) auszuweichen.",
    strategy:
      "Erhebt Anspruch auf e4 und sucht Angriffschancen am Königsflügel, meist mit ...Sf6 und " +
      "entweder dem klassischen Aufbau (...Le7, ...O-O, ...d6) oder dem Stonewall (...d5, " +
      "...c6, ...Ld6). Der Preis ist ein gelockerter Königsflügel, vor allem die Diagonale " +
      "e8-h5, und im Stonewall ein Loch auf e5. Weiß antwortet meist mit 3.g3 und Lg2 oder " +
      "mit 3.Sc3 und Sf3.",
  },

  "1.d4 e6 2.c4 Be7": {
    strategy:
      "Entwickelt den Läufer auf sein übliches Feld im Abgelehnten Damengambit, ...d5 und " +
      "...Sf6 folgen, sodass 3.Sc3 d5 in diese Eröffnung überleitet. Der Zug verzichtet auf " +
      "das aktive ...Lb4 und erlaubt Weiß, mit 3.e4 Raum zu gewinnen, was 2...d5 und 2...Sf6 " +
      "verhindern. Solide, aber diese beiden Züge erreichen dieselben Strukturen ohne das " +
      "Zugeständnis.",
  },

  "1.d4 e6 2.c4 b6": {
    name: "Englische Verteidigung",
    background:
      "Der Spieler P. N. Wallis aus Leicester untersuchte die Eröffnung Ende der 1940er- und " +
      "Anfang der 1950er-Jahre, und in den 1970er-Jahren griffen führende englische Spieler " +
      "wie Tony Miles und Raymond Keene sie auf. Viktor Kortschnoi setzte sie 1977 in Évian " +
      "in der 6. Partie seines Kandidaten-Halbfinales gegen Lew Polugajewski erfolgreich ein.",
    strategy:
      "Bereitet ...Lb7 gegen e4 vor und lässt Weiß ein breites Zentrum errichten, das Schwarz " +
      "dann mit ...Lb4, ...f5 und manchmal ...Dh4 angreift, statt es zu besetzen. Eine " +
      "typische Fortsetzung ist 3.e4 Lb7 4.Ld3 Lb4+ 5.Sc3 f5, während 3.Sc3 Lb7 4.Sf3 Lb4 " +
      "nach ...Sf6 meist zu Nimzo-Indisch wird. Selten auf Großmeisterniveau, und Schwarz " +
      "muss gegen den weißen Raumvorteil genau spielen.",
  },

  "1.d4 e6 2.c4 c6": {
    strategy:
      "Bereitet ...d5 vor und erreicht nach 3.Sc3 d5 oder 3.Sf3 d5 halbslawische Strukturen, " +
      "gefolgt von ...Sf6 und ...Sbd7. Der Zug legt den c-Bauern fest, bevor Weiß einen Plan " +
      "gezeigt hat, und gibt Weiß zusätzliche Möglichkeiten wie 3.e4, weshalb er gegenüber " +
      "2...d5 oder 2...Sf6 nicht zu empfehlen ist.",
  },

  "1.d4 e6 2.c4 c5": {
    strategy:
      "Greift d4 sofort an und überlässt Weiß die Wahl der Struktur: 3.d5 exd5 4.cxd5 ergibt " +
      "eine Benoni-Bauernstruktur mit schwarzer Mehrheit am Damenflügel, 3.Sf3 kann in die " +
      "Symmetrische Variante der Englischen Eröffnung führen, und 3.dxc5 Lxc5 löst die " +
      "Spannung. Solide, doch nach 3.d5 muss Schwarz den weißen Raumvorteil im Zentrum " +
      "hinnehmen und sucht dafür Spiel am Damenflügel.",
  },

  "1.d4 e6 2.c4 g6": {
    strategy:
      "Bereitet ...Lg7 und einen Aufbau im Stil der Modernen Verteidigung vor, der Weiß mit " +
      "Sc3 und e4 ein Zentrum errichten lässt, um es dann mit ...d6 und ...c5 oder ...e5 zu " +
      "untergraben. Solide, aber langsam: Der Bauer e6 sperrt den Läufer c8 bereits ein, und " +
      "Weiß erhält ein breites Zentrum, bevor ...Sf6 es angreifen kann.",
  },

  "1.d4 e6 2.c4 Nc6": {
    strategy:
      "Entwickelt einen Springer und zielt auf e5, doch 3.d5 greift Springer und Bauer e6 " +
      "zugleich an. Nach 3...exd5 4.cxd5 muss der Springer erneut ziehen, und Weiß errichtet " +
      "mit e4 ein breites Zentrum.",
  },

  "1.d4 e6 2.c4 Na6": {
    strategy:
      "Zielt auf b4 oder, sobald der c-Bauer gezogen hat, auf c7, doch ein Springer am Rand " +
      "tut wenig für das Zentrum und kostet Zeit. Weiß gewinnt mit 3.e4 Raum oder entwickelt " +
      "sich mit 3.Sc3, während der Springer noch ein Feld sucht.",
  },

  "1.d4 e6 2.c4 Qe7": {
    strategy:
      "Stellt die Dame nach e7, wo sie dem Läufer f8 die einzige offene Diagonale verstellt " +
      "und wenig für d5 oder e4 tut. Weiß besetzt mit 3.e4 das Zentrum oder entwickelt sich " +
      "mit 3.Sc3, während sich die schwarzen Figuren gegenseitig im Weg stehen.",
  },

  "1.d4 e6 2.c4 Qf6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6 und setzt die Dame einem Tempogewinn durch e4-e5 " +
      "aus. Weiß entwickelt sich einfach mit 3.Sc3 und baut mit e4 ein Zentrum auf.",
  },

  "1.d4 e6 2.c4 Qh4": {
    strategy:
      "Die Dame kommt früh heraus und wird sofort von 3.Sf3, das zugleich d4 deckt, oder von " +
      "3.g3 angegriffen, sodass Weiß sich mit Tempo entwickelt. Schwarz hat keine Figur " +
      "draußen, die sie unterstützt, und verliert beim Rückzug Zeit.",
  },

  "1.d4 e6 2.c4 Bd6": {
    strategy:
      "Stellt den Läufer nach d6, wo er den d-Bauern blockiert und von c4-c5, e4-e5 oder " +
      "Sc3-b5 angegriffen werden kann. Im Zentrum ist nichts vorbereitet, und Weiß gewinnt " +
      "Raum, während der Läufer ein besseres Feld sucht.",
  },

  "1.d4 e6 2.c4 Nh6": {
    strategy:
      "Strebt nach f5 oder g4, läuft aber in 3.Lxh6 gxh6, was die Bauern am Königsflügel " +
      "dauerhaft zerstört. Ein Springer am Rand tut zudem nichts für das Zentrum.",
  },

  "1.d4 e6 2.c4 Ne7": {
    strategy:
      "Strebt nach f5 oder g6, verstellt aber den Läufer f8, der dann nur über ...g6 und " +
      "...Lg7 oder nach einem weiteren Springerzug ins Spiel kommt. Weiß besetzt mit 3.Sc3 " +
      "und e4 das Zentrum, während sich die schwarzen Figuren gegenseitig im Weg stehen.",
  },

  "1.d4 e6 2.c4 a6": {
    strategy:
      "Ein Flankenzug, der ...b5 vorbereitet, aber nichts für das Zentrum tut. Weiß " +
      "entwickelt sich mit 3.Sc3 oder gewinnt mit 3.e4 Raum, während Schwarz keinen echten " +
      "Schritt zur Entwicklung seiner Figuren gemacht hat.",
  },

  "1.d4 e6 2.c4 a5": {
    strategy:
      "Bereitet ...Lb4+ vor, wobei der Bauer den Läufer stützt, eine Idee aus dem " +
      "Bogo-Indischen, kostet aber ein Tempo am Flügel und schwächt b5. Weiß entwickelt sich " +
      "zuerst mit 3.Sc3 oder besetzt mit 3.e4 das Zentrum.",
  },

  "1.d4 e6 2.c4 b5": {
    strategy:
      "Bietet den b-Bauern nach Art des Wolga-Gambits an, doch der weiße Bauer steht noch auf " +
      "d4, und keine schwarze Figur ist entwickelt. Nach 3.cxb5 hat Weiß einen glatten " +
      "Mehrbauern, und ...a6 oder ...Lb7 bringt dafür zu wenig.",
  },

  "1.d4 e6 2.c4 d6": {
    strategy:
      "Ein langsamer, passiver Zug, der die Damengambit-Aufbauten mit ...d5 ausschließt. Weiß " +
      "besetzt mit 3.Sc3 und e4 das Zentrum, und der Bauer e6 engt den Läufer c8 ein.",
  },

  "1.d4 e6 2.c4 f6": {
    strategy:
      "Nimmt dem Springer das Feld f6 und schwächt e6 sowie die Diagonale e8-h5, ohne viel " +
      "für das Zentrum zu tun. Weiß gewinnt mit 3.e4 Raum oder entwickelt sich mit 3.Sc3, und " +
      "die schwarzen Figuren am Königsflügel finden keine guten Felder.",
  },

  "1.d4 e6 2.c4 g5": {
    strategy:
      "Schwächt den Königsflügel und die schwarzen Felder ohne Gegenwert. Gegen den Läufer c1 " +
      "deckt nur die Dame den Bauern, sodass Schwarz ihn nach Sf3 mit ...h6 stützen oder mit " +
      "...g4 weiterziehen muss, was die Stellung zusätzlich lockert.",
  },

  "1.d4 e6 2.c4 h6": {
    strategy:
      "Verhindert Lg5, kostet aber ein Tempo mit dem Randbauern, ohne der Entwicklung oder " +
      "dem Zentrum zu helfen. Weiß gewinnt mit 3.Sc3 und e4 Raum oder entwickelt sich mit " +
      "3.Sf3.",
  },

  "1.d4 e6 2.c4 h5": {
    strategy:
      "Kostet ein Tempo mit dem Randbauern, das weder dem Zentrum noch der Entwicklung dient " +
      "und ...h6 als Mittel gegen einen Läufer auf g5 aufgibt. Weiß entwickelt sich mit 3.Sc3 " +
      "oder 3.Sf3 und besetzt mit e4 das Zentrum.",
  },

  "1.d4 e6 2.c4 e5": {
    name: "Horwitz-Verteidigung: Zilbermints-Gambit",
    strategy:
      "Bietet den e-Bauern für Aktivität an: 3.dxe5 gewinnt einen Bauern, und Schwarz hat " +
      "zwei Züge mit dem e-Bauern verbraucht. Ausgleich muss aus schneller Entwicklung mit " +
      "...Sc6 und ...Lb4+ kommen, was schwerfällt, weil Weiß e5 mit Sf3 oder Lf4 halten und " +
      "...Lb4+ mit Sc3 oder Ld2 beantworten kann.",
  },

  "1.d4 e6 2.c4 Qg5": {
    strategy:
      "Verliert die Dame nach 3.Lxg5: Die Diagonale des Läufers c1 ist offen, weil der " +
      "d-Bauer d2 verlassen hat, und die Dame betritt ein Feld, das der Läufer angreift.",
  },

  "1.d4 e6 2.c4 Ke7": {
    strategy:
      "Verzichtet endgültig auf die Rochade und verstellt den Läufer f8 und die Diagonale " +
      "d8-h4 der Dame. 3.Lg5+ gibt sofort Schach auf der offenen Diagonale c1-h6, und Schwarz " +
      "muss mit ...f6 oder einem gefesselten ...Sf6 decken oder den König erneut ziehen.",
  },

  "1.d4 e6 2.c4 Bc5": {
    strategy:
      "Verliert eine Figur: Der Bauer d4 greift c5 an, und nichts deckt den Läufer, sodass " +
      "3.dxc5 ihn kostenlos gewinnt.",
  },

  "1.d4 e6 2.c4 Ba3": {
    strategy:
      "Verliert den Läufer: 3.Sxa3 oder 3.bxa3 schlägt ihn einfach, und Schwarz hat keinen " +
      "Ersatz für die Figur.",
  },

  "1.d4 e6 2.Nf3 Nf6": {
    strategy:
      "Entwickelt den Springer, kontrolliert e4 und d5 und hält mehrere indische Aufbauten " +
      "offen: Nach 3.c4 wählt Schwarz zwischen ...b6, ...Lb4+ und ...d5, die zur " +
      "Damenindischen, zur Bogoljubow-Indischen Verteidigung oder zum Abgelehnten Damengambit " +
      "führen. Gegen 3.e3, 3.g3 oder 3.Lf4 lautet der Plan ...d5 und ...c5 oder ...b6 und " +
      "...Lb7. Der Preis ist der Läufer c8, den der Bauer e6 einsperrt, bis ...b6 ihm die " +
      "lange Diagonale öffnet.",
  },

  "1.d4 e6 2.Nf3 d5": {
    strategy:
      "Besetzt sofort das Zentrum und erreicht nach 3.c4 das Abgelehnte Damengambit, während " +
      "3.e3 oder 3.Lf4 zu einem Colle- oder London-Aufbau führt. Schwarz folgt mit ...Sf6, " +
      "...Le7 und ...O-O oder greift d4 mit ...c5 an. Der Preis ist der Läufer c8, der hinter " +
      "dem Bauern e6 eingesperrt bleibt, bis Schwarz ...b6 spielt oder das Zentrum öffnet.",
  },

  "1.d4 e6 2.Nf3 c5": {
    strategy:
      "Greift d4 an, bevor Weiß mit c4 und e4 aufgebaut hat. Nach 3.c4 cxd4 4.Sxd4 Sf6 5.Sc3 " +
      "entsteht die Symmetrische Variante der Englischen Eröffnung, 3.c4 Sf6 4.d5 exd5 5.cxd5 " +
      "d6 ergibt eine Benoni-Struktur, und 3.e4 cxd4 4.Sxd4 führt in den Offenen Sizilianer. " +
      "Gegen das ruhigere 3.e3 oder 3.c3 entwickelt sich Schwarz frei mit ...Sf6 und ...d5. " +
      "In den offenen Varianten bleibt der d-Bauer rückständig auf der halboffenen d-Linie.",
  },

  "1.d4 e6 2.Nf3 f5": {
    name: "Holländische Verteidigung",
    background:
      "Schwarz beginnt manchmal mit 1...e6, um die Holländische Verteidigung zu erreichen, " +
      "ohne das Staunton-Gambit (1.d4 f5 2.e4) zuzulassen, das nach Howard Staunton benannt " +
      "ist, der es 1846 in London in seinem Wettkampf gegen Bernhard Horwitz einführte. Der " +
      "englische Großmeister Simon Williams verwendet 1.d4 e6 oft genau zu diesem Zweck.",
    strategy:
      "Kontrolliert e4 und steuert einen holländischen Aufbau mit ...Sf6, ...Le7 und ...O-O " +
      "an oder einen Stonewall mit ...d5, ...c6 und ...Ld6. Weiß antwortet meist mit 3.g3 und " +
      "Lg2, 3.c4 oder 3.Lg5, und Schwarz spielt um das Feld e4 und am Königsflügel. Der " +
      "Vorstoß schwächt e6 und die Diagonale e8–h5, und das Feld e5 kann zum Vorposten für " +
      "einen weißen Springer werden.",
  },

  "1.d4 e6 2.Nf3 Nc6": {
    strategy:
      "Entwickelt einen Springer und erhöht den Druck auf d4, verstellt aber den c-Bauern, " +
      "sodass der Hebel ...c5 erst einen weiteren Springerzug verlangt. Weiß baut mit 3.e4 " +
      "oder 3.c4 einfach das Zentrum auf, und Schwarz greift auf ...d5 oder ...Sf6 zurück. " +
      "Spielbar, aber 2...Sf6 entwickelt ebenso schnell, ohne den c-Bauern zu verstellen.",
  },

  "1.d4 e6 2.Nf3 Be7": {
    strategy:
      "Entwickelt den Läufer und bereitet nach ...Sf6 die schnelle Rochade vor, oft mit ...d5 " +
      "und einem Aufbau wie im Abgelehnten Damengambit. Der Läufer legt sich fest, bevor der " +
      "weiße Plan feststeht, und verzichtet auf die Option ...Lb4+, die 2...Sf6 offenhält, " +
      "während 3.e4 d5 4.e5 Weiß eine Struktur wie in der Vorstoßvariante der Französischen " +
      "Verteidigung mit Raumvorteil gibt. Solide, aber weniger flexibel als die " +
      "Hauptantworten.",
  },

  "1.d4 e6 2.Nf3 b6": {
    strategy:
      "Bereitet ...Lb7 gegen e4 und die lange Diagonale vor, und 3.c4 Lb7 4.Sc3 Sf6 führt zur " +
      "Damenindischen Verteidigung. Weiß kann stattdessen mit 3.e4 Lb7 4.Ld3 das Zentrum " +
      "besetzen, der Hauptvariante der Owen-Verteidigung, die nach der Theorie für Schwarz " +
      "zweifelhaft ist. Spielbar, aber nicht empfohlen.",
  },

  "1.d4 e6 2.Nf3 c6": {
    strategy:
      "Bereitet ...d5 und einen slawischen Aufbau vor: Nach 3.c4 d5 4.Sc3 Sf6 entsteht die " +
      "Halbslawische Verteidigung. Der c-Bauer legt sich fest, bevor der weiße Plan klar ist, " +
      "sodass Weiß mit 3.Lf4 oder 3.e4 ausweichen kann, und ein späteres ...c5 kostet ein " +
      "zweites Tempo. Solide, aber weniger flexibel als 2...Sf6 oder 2...d5.",
  },

  "1.d4 e6 2.Nf3 d6": {
    strategy:
      "Macht d7 für den Läufer c8 und den Springer b8 frei und bereitet einen kompakten " +
      "Aufbau mit ...Sf6, ...Le7 und ...O-O vor, gefolgt von ...b6 und ...c5. Weiß gewinnt " +
      "mit 3.c4 oder 3.e4 Raum, und Schwarz hat keinen schnellen Weg, das Zentrum " +
      "anzugreifen. Solide, aber passiv.",
  },

  "1.d4 e6 2.Nf3 g6": {
    strategy:
      "Bereitet ...Lg7 und die kurze Rochade vor, ein Aufbau im Stil der Modernen " +
      "Verteidigung hinter dem Bauern e6. Noch greift kein Bauer d4 oder e4 an, sodass Weiß " +
      "mit 3.e4 oder 3.c4 freie Hand hat, und Schwarz muss das breite Zentrum später mit " +
      "...c5 oder ...d5 untergraben. Solide genug, aber langsamer als 2...Sf6 oder 2...d5.",
  },

  "1.d4 e6 2.Nf3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 im Blick hat, aber sonst wenig " +
      "leistet, und 3.e4 mit anschließendem Lxa6 würde Schwarz Doppelbauern auf der a-Linie " +
      "einbringen. Das Zentrum bleibt Weiß überlassen, der mit e4 oder c4 einfach Raum " +
      "gewinnt.",
  },

  "1.d4 e6 2.Nf3 Qe7": {
    strategy:
      "Verstellt den Läufer f8 und lädt zu 3.Lg5 ein, das mit Angriff auf die Dame " +
      "entwickelt: ...f6 schwächt den Königsflügel, und ...Sf6 läuft in eine Fesselung. Die " +
      "übrigen schwarzen Figuren bleiben zu Hause, während Weiß mit Drohungen entwickelt.",
  },

  "1.d4 e6 2.Nf3 Qf6": {
    strategy:
      "Bringt die Dame früh heraus und nimmt dem Springer das Feld f6, und 3.Lg5 greift sie " +
      "sofort an: 3...Dxg5 verliert die Dame gegen 4.Sxg5. Weiß gewinnt ein Tempo und freie " +
      "Hand im Zentrum.",
  },

  "1.d4 e6 2.Nf3 Bd6": {
    strategy:
      "Stellt den Läufer vor den d-Bauern, wo ihn 3.e4 und e5 vertreiben. Die Entwicklung des " +
      "Springers hilft nicht: 3.e4 Sf6 4.e5 gabelt den Läufer auf d6 und den Springer auf f6.",
  },

  "1.d4 e6 2.Nf3 Bb4+": {
    strategy:
      "Gibt Schach ohne Ziel: 3.c3 treibt den Läufer sofort zurück, und 3.Ld2 oder 3.Sbd2 " +
      "pariert es mit einem Entwicklungszug. Ohne Bauern auf c4 bringt das Schach nichts, und " +
      "ein Tausch auf d2 bringt nur eine weitere weiße Figur ins Spiel.",
  },

  "1.d4 e6 2.Nf3 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo 3.Lxh6 gxh6 für den bloßen Tausch Läufer gegen " +
      "Springer die Bauern am Königsflügel zerstört. Nichts wird sinnvoll entwickelt, und die " +
      "h-Bauern sind verdoppelt und isoliert.",
  },

  "1.d4 e6 2.Nf3 Ne7": {
    strategy:
      "Bereitet ...d5 und ...Sg6 vor, verstellt aber den Läufer f8 und die Dame, und auf e7 " +
      "steht der Springer schlechter als auf f6. Weiß besetzt mit 3.e4 oder 3.c4 das Zentrum, " +
      "während die schwarzen Figuren einander im Weg stehen.",
  },

  "1.d4 e6 2.Nf3 a6": {
    strategy:
      "Bereitet ...b5 und ...Lb7 vor, verbraucht aber ein Tempo für einen Randbauern, während " +
      "Zentrum und Entwicklung unberührt bleiben. Weiß wählt in aller Ruhe zwischen c4, e3 " +
      "und Lf4.",
  },

  "1.d4 e6 2.Nf3 a5": {
    strategy:
      "Verhindert b4 und gewinnt Raum am Damenflügel, verbraucht aber ein Tempo für einen " +
      "Randbauern und schwächt b5. Weder Zentrum noch Entwicklung werden angegangen, also " +
      "setzt Weiß mit c4 oder e3 fort.",
  },

  "1.d4 e6 2.Nf3 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel, bevor eine Figur entwickelt ist, und der Bauer steht " +
      "ungedeckt: 3.e4 öffnet den Läufer f1 und droht Lxb5, und auch a4 kann ihn angreifen. " +
      "Das Feld c6 ist geschwächt, und Weiß erhält das Zentrum umsonst.",
  },

  "1.d4 e6 2.Nf3 f6": {
    strategy:
      "Nimmt dem Springer das Feld f6, schwächt die Diagonale e8–h5 und entwickelt nichts. " +
      "Weiß baut mit 3.e4 und c4 das Zentrum auf, während dem Springer g8 nur e7 oder h6 " +
      "bleibt.",
  },

  "1.d4 e6 2.Nf3 h6": {
    strategy:
      "Verhindert Lg5 um den Preis eines Tempos und tut nichts für Zentrum oder Entwicklung. " +
      "Weiß setzt mit c4, e3 oder Lf4 fort, als hätte Schwarz gepasst, und die Bauern am " +
      "Königsflügel sind gelockert.",
  },

  "1.d4 e6 2.Nf3 h5": {
    strategy:
      "Entwickelt nichts und schwächt g6, und da der Bauer h6 schon passiert hat, kann ein " +
      "Läufer auf g5 nicht mehr mit ...h6 vertrieben werden. Weiß nutzt das Tempo für c4, e3 " +
      "oder 3.Lg5, das zugleich die Dame auf d8 angreift.",
  },

  "1.d4 e6 2.Nf3 Qg5": {
    strategy:
      "Stellt die Dame ein: Sowohl 3.Lxg5 als auch 3.Sxg5 schlagen sie, und nichts deckt g5 " +
      "oder schlägt zurück.",
  },

  "1.d4 e6 2.Nf3 Qh4": {
    strategy: "Stellt die Dame gegen 3.Sxh4 ein, da nichts h4 deckt.",
  },

  "1.d4 e6 2.Nf3 Ke7": {
    strategy:
      "Gibt ohne Not das Rochaderecht auf und läuft in 3.Lg5+, das ein Tempo gewinnt. Der " +
      "König im offenen Zentrum verstellt den Läufer f8 und die Dame, ohne jede Kompensation.",
  },

  "1.d4 e6 2.Nf3 Bc5": {
    strategy:
      "Verliert eine Figur gegen 3.dxc5, da der d-Bauer den Läufer angreift und nichts auf c5 " +
      "zurückschlagen kann.",
  },

  "1.d4 e6 2.Nf3 Ba3": {
    strategy:
      "Verliert den Läufer: 3.bxa3 oder 3.Sxa3 schlägt ihn, und Schwarz erhält nichts dafür.",
  },

  "1.d4 e6 2.Nf3 g5": {
    strategy:
      "Stellt den Bauern ein: 3.Lxg5 oder 3.Sxg5 gewinnt ihn, und das Zurückschlagen mit " +
      "...Dxg5 verliert die Dame gegen die andere Figur. Der Königsflügel wird umsonst " +
      "gelockert.",
  },

  "1.d4 e6 2.Nf3 e5": {
    strategy:
      "Stellt den Bauern ein: 3.dxe5 gewinnt ihn, der Springer f3 deckt den neuen Bauern auf " +
      "e5, und Schwarz hat keinen schnellen Weg, ihn zurückzugewinnen. Weiß hat einfach einen " +
      "Bauern mehr.",
  },

  "1.d4 e6 2.Bf4 Nf6": {
    strategy:
      "Entwickelt den Königsspringer, kontrolliert e4 und d5 und hält Schwarz mehrere " +
      "Möglichkeiten offen: ...d5 mit ...c5 und ...Sc6 ergibt einen Aufbau wie im Abgelehnten " +
      "Damengambit, ...b6 und ...Lb7 einen damenindischen Aufbau, und ...c5 mit ...Db6 greift " +
      "den ungedeckten Bauern b2 an. Die Stellung ist dieselbe wie nach 1.d4 Sf6 2.Lf4 e6. " +
      "Der Läufer c8 bleibt hinter dem Bauern e6 eingesperrt, bis ...b6 ihm die lange " +
      "Diagonale öffnet.",
  },

  "1.d4 e6 2.Bf4 d5": {
    strategy:
      "Sichert sich einen Anteil am Zentrum und erreicht den Aufbau nach Art des Abgelehnten " +
      "Damengambits, dieselbe Stellung wie nach 1.d4 d5 2.Lf4 e6. Schwarz setzt mit ...Sf6, " +
      "...c5 und ...Sc6 fort, entwickelt den Läufer f8 nach d6 oder e7 und rochiert; ...Ld6 " +
      "fordert den Läufer f4 heraus, worauf Weiß mit Lg3 oder Lxd6 antwortet. Der Preis ist " +
      "der Läufer c8, den der Bauer e6 einsperrt und der oft nur schwer ein gutes Feld " +
      "findet.",
  },

  "1.d4 e6 2.Bf4 c5": {
    background:
      "Die häufigste schwarze Reaktion auf das Londoner System besteht in ...c5 und ...Db6, " +
      "und auf höherem Spielniveau gilt ein frühes ...c5 als beliebte Antwort. Mit ...Sf6 " +
      "statt ...e6 hielten Johnsen und Kovačević 1.d4 Sf6 2.Lf4 c5 3.e3 Db6 für die " +
      "kritischste Variante.",
    strategy:
      "Greift d4 sofort an und nutzt, dass der Läufer c1 verlassen hat: Der Bauer b2 ist " +
      "ungedeckt, sodass ...Db6 ihn sofort angreift. Nach 3.c3 Db6 kann Weiß mit 4.Db3 " +
      "antworten und den Damentausch anbieten, während 3.e3 und 3.dxc5 Lxc5 die anderen " +
      "natürlichen Antworten sind. Schwarz vollendet die Entwicklung mit ...Sf6 und ...Sc6; " +
      "der Preis ist ein Läufer c8, der weiterhin hinter e6 eingesperrt bleibt.",
  },

  "1.d4 e6 2.Bf4 f5": {
    background:
      "Der englische Großmeister Simon Williams nutzt 1.d4 e6 oft, um die Holländische " +
      "Verteidigung zu spielen und dabei das Staunton-Gambit 1.d4 f5 2.e4 zu umgehen.",
    strategy:
      "Kontrolliert e4 und steuert einen holländischen Aufbau mit ...Sf6, ...Le7 und ...O-O " +
      "an oder einen Stonewall mit ...d5, ...c6 und ...Ld6, wo der Läufer zugleich den Läufer " +
      "f4 herausfordert. Weiß setzt meist mit Sf3, e3 und Ld3 oder mit c4 fort. Der Vorstoß " +
      "schwächt e6 und die Diagonale e8–h5, und im Stonewall kann das Feld e5, das der Läufer " +
      "f4 bereits kontrolliert, zum Vorposten für einen weißen Springer werden.",
  },

  "1.d4 e6 2.Bf4 Bd6": {
    strategy:
      "Fordert den Londoner Läufer sofort heraus: 3.Lxd6 Dxd6 oder 3...cxd6 tauscht die " +
      "Schlüsselfigur des weißen Aufbaus ab, und nach 3.Lg3 Lxg3 4.hxg3 hat Weiß einen " +
      "Doppelbauern auf der g-Linie, dafür aber die halboffene h-Linie. Der Zug ist gesund, " +
      "doch eine Dame auf d6 kann durch e4 und e5 angegriffen werden, und der Läufer c8 " +
      "bleibt hinter e6.",
  },

  "1.d4 e6 2.Bf4 Be7": {
    strategy:
      "Bereitet die Rochade vor, doch auf e7 steht der Läufer passiv und fordert den Läufer " +
      "f4 nicht heraus, wie er es von d6 aus täte. Weiß baut ungestört mit e3, Sf3, c3 und " +
      "Sbd2 auf oder besetzt mit 3.e4 das Zentrum.",
  },

  "1.d4 e6 2.Bf4 Nc6": {
    strategy:
      "Entwickelt eine Figur und greift d4 an, verstellt aber den c-Bauern, sodass der " +
      "übliche Hebel ...c5 gegen das Londoner System nicht mehr zur Verfügung steht. Schwarz " +
      "setzt meist mit ...d5 und ...Sf6 fort, während Weiß mit e3, Sf3 und c3 ein festes " +
      "Zentrum behält. Gesund, aber weniger ergiebig als ...Sf6 oder ...d5.",
  },

  "1.d4 e6 2.Bf4 b6": {
    strategy:
      "Bereitet ...Lb7 auf der langen Diagonale vor, für einen damenindischen Aufbau mit " +
      "...Sf6 oder einen Hippopotamus-Aufbau mit ...Se7 und ...g6. Der Zug ist flexibel, " +
      "lässt Weiß aber im Zentrum freie Hand: 3.e4 Lb7 4.Sd2 oder 4.Ld3 errichtet ein breites " +
      "Bauernzentrum, das Schwarz später mit ...c5 oder ...f5 untergraben muss.",
  },

  "1.d4 e6 2.Bf4 g6": {
    strategy:
      "Bereitet ...Lg7 vor, für einen Hippopotamus-Aufbau mit ...Se7, ...d6 und ...b6 oder " +
      "einen indischen Aufbau mit ...Sf6, und hält ...c5 und ...d5 in Reserve. Der Zug ist " +
      "gesund, doch 3.e4 verschafft Weiß ein breites Zentrum bei bequemer Entwicklung, und " +
      "die Bauern auf e6 und g6 lassen f6 und h6 ohne Bauernschutz.",
  },

  "1.d4 e6 2.Bf4 Ne7": {
    strategy:
      "Bereitet ...Sg6 vor, um den Läufer f4 zu vertreiben, und passt zu " +
      "Hippopotamus-Aufbauten mit ...g6 oder ...b6. Der Springer sperrt den Läufer f8 ein, " +
      "bis er weiterzieht, und der Plan ist langsam: Weiß kann mit 3.e4 das Zentrum besetzen " +
      "und ...Sg6 mit Lg3 oder Le3 beantworten.",
  },

  "1.d4 e6 2.Bf4 c6": {
    strategy:
      "Unterstützt ein späteres ...d5 in einer slawischen Struktur und öffnet die Diagonale " +
      "d8–a5 für ...Db6 gegen b2 oder ...Da5+. Der Zug ist gesund, aber langsam: Er " +
      "entwickelt keine Figur, und Weiß kann mit 3.e4 das Zentrum besetzen oder sich mit e3, " +
      "Sf3 und Ld3 aufbauen.",
  },

  "1.d4 e6 2.Bf4 d6": {
    strategy:
      "Strebt einen Hippopotamus-Aufbau mit ...Sd7, ...Se7 und ...g6 an, bei dem die Bauern " +
      "auf d6 und e6 einen kompakten Wall bilden. Allerdings verstellt der Bauer die " +
      "Diagonale des Läufers f8, und 3.e4 verschafft Weiß ein breites Zentrum gegen eine " +
      "beengte Stellung.",
  },

  "1.d4 e6 2.Bf4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 deckt, aber kein Zentralfeld. Weiß " +
      "besetzt mit 3.e4 das Zentrum und öffnet zugleich die Diagonale des Läufers f1, sodass " +
      "Lxa6 bxa6 die schwarzen a-Bauern verdoppeln kann.",
  },

  "1.d4 e6 2.Bf4 Nh6": {
    strategy:
      "Strebt vom Rand nach f5, doch der Läufer f4 greift ihn an: 3.Lxh6 gxh6 zerstört die " +
      "schwarzen Königsflügelbauern, wofür Schwarz das Läuferpaar erhält. Auch ohne den " +
      "Tausch steht der Springer weit vom Zentrum entfernt.",
  },

  "1.d4 e6 2.Bf4 a6": {
    strategy:
      "Ein Wartezug am Flügel, der keine Figur entwickelt und nichts für das Zentrum tut; " +
      "allenfalls bereitet er ...b5 vor. Weiß entwickelt sich ungestört mit e3, Sf3 und Ld3 " +
      "oder besetzt mit 3.e4 das Zentrum.",
  },

  "1.d4 e6 2.Bf4 a5": {
    strategy:
      "Gewinnt Raum am Flügel, schwächt aber b5, wo ein Springer von c3 aus c7 und d6 ins " +
      "Visier nähme, und tut nichts für Zentrum und Entwicklung. Weiß setzt in aller Ruhe mit " +
      "e3, Sf3 und Sc3 fort.",
  },

  "1.d4 e6 2.Bf4 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel, entwickelt aber nichts und lässt den Bauern ungedeckt: " +
      "3.Sc3 oder 3.e4, das dem Läufer f1 den Weg nach b5 öffnet, greift ihn sofort an, " +
      "sodass Schwarz ein weiteres Tempo für ...a6, ...c6 oder ...b4 aufwenden muss. Der " +
      "Vorstoß schwächt außerdem c6.",
  },

  "1.d4 e6 2.Bf4 h6": {
    strategy:
      "Nimmt dem Läufer das Feld g5 und bereitet ...g5 vor, entwickelt aber nichts und " +
      "lockert den Königsflügel. Weiß baut mit e3, Sf3 und c3 auf, während Schwarz nichts für " +
      "das Zentrum getan hat.",
  },

  "1.d4 e6 2.Bf4 h5": {
    strategy:
      "Zieht den Randbauern vor, ohne eine Figur zu entwickeln oder d4 anzugreifen, und " +
      "verzichtet auf ...h6 gegen einen Läufer auf g5. Weiß entwickelt sich ungestört mit e3, " +
      "Sf3 und c3 oder besetzt mit 3.e4 das Zentrum.",
  },

  "1.d4 e6 2.Bf4 f6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6, entwickelt nichts und öffnet die Diagonale e8–h5 " +
      "zum schwarzen König, sodass Dh5+ möglich wird, sobald der weiße e-Bauer gezogen hat. " +
      "Weiß besetzt mit 3.e4 und Sf3 das Zentrum, und dem Springer g8 bleiben nur e7 oder h6.",
  },

  "1.d4 e6 2.Bf4 g5": {
    strategy:
      "Greift den Läufer mit einem von der Dame gedeckten Bauern an, sodass 3.Lxg5 Dxg5 eine " +
      "Figur gegen einen Bauern einbüßen würde. Weiß zieht einfach mit 3.Lg3 oder 3.Le3 " +
      "zurück, und der Vorstoß hat nur den schwarzen Königsflügel gelockert: f6 und h6 haben " +
      "ihren Bauernschutz verloren, und h4 oder Sf3 greift g5 bald erneut an.",
  },

  "1.d4 e6 2.Bf4 Bb4+": {
    strategy:
      "Das Schach bringt nichts ein: 3.c3 deckt es mit einem Zug, den Weiß ohnehin spielen " +
      "will, und greift den Läufer an, der unter Tempoverlust zurückweichen muss.",
  },

  "1.d4 e6 2.Bf4 Qe7": {
    strategy:
      "Lässt c7 ungedeckt, weil der Bauer d7 die Deckung durch die Dame entlang der siebten " +
      "Reihe verstellt, und sperrt den Läufer f8 ein. Nach 3.Lxc7 gewinnt Schwarz den Bauern " +
      "mit 3...Db4+ und ...Dxb2 zurück, doch die Dame entfernt sich weiter, während Weiß sich " +
      "entwickelt.",
  },

  "1.d4 e6 2.Bf4 Ke7": {
    strategy:
      "Gibt sofort die Rochade auf und sperrt den Läufer f8 ein. 3.Lg5+ erzwingt dann ...f6 " +
      "oder ...Sf6 mit Fesselung oder einen weiteren Königszug, und auf e7 findet der König " +
      "nie ein sicheres Zuhause.",
  },

  "1.d4 e6 2.Bf4 e5": {
    strategy:
      "Stellt den Bauern ein: e5 wird vom Bauern d4 und vom Läufer angegriffen und von nichts " +
      "gedeckt, sodass 3.dxe5 oder 3.Lxe5 einfach einen Bauern gewinnt.",
  },

  "1.d4 e6 2.Bf4 Bc5": {
    strategy:
      "Stellt den Läufer gegen 3.dxc5 ein, und nichts kann auf c5 zurückschlagen, da kein " +
      "schwarzer Bauer und keine schwarze Figur das Feld deckt. Weiß gewinnt eine ganze Figur " +
      "ohne Gegenwert.",
  },

  "1.d4 e6 2.Bf4 Ba3": {
    strategy:
      "Stellt den Läufer ein: 3.bxa3 oder 3.Sxa3 gewinnt ihn ohne Gegenwert, da a3 vom Bauern " +
      "b2 und vom Springer b1 gedeckt ist und Schwarz keine Fortsetzung hat.",
  },

  "1.d4 e6 2.Bf4 Qf6": {
    strategy:
      "Greift den Läufer f4 an, doch da die Dame d8 verlassen hat, ist der Bauer c7 " +
      "ungedeckt, sodass 3.Lxc7 den Läufer rettet und einen Bauern gewinnt. Zudem nimmt die " +
      "Dame dem Springer g8 das Feld f6.",
  },

  "1.d4 e6 2.Bf4 Qg5": {
    strategy:
      "Stellt die Dame ein: Der Läufer f4 greift g5 an, und nichts deckt das Feld, sodass " +
      "3.Lxg5 die Dame ohne Gegenwert gewinnt.",
  },

  "1.d4 e6 2.Bf4 Qh4": {
    strategy:
      "Greift den Läufer f4 an, doch da die Dame d8 verlassen hat, ist der Bauer c7 " +
      "ungedeckt: 3.Lxc7 rettet den Läufer und gewinnt einen Bauern, und 3.g3 oder 3.Lg3 " +
      "würde stattdessen Tempo gegen die Dame gewinnen.",
  },
};
