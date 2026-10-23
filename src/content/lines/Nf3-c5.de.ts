import type { OpeningTexts } from "../book.ts";

// German prose for Nf3-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.Nf3 c5 2.c4": {
    name: "Englische Symmetrievariante",
    background:
      "So benannt, weil beide c-Bauern zwei Felder vorgerückt sind; nach 1.Sf3 c5 ist dies " +
      "einer der beiden Übergänge, zu denen Schwarz einlädt, der andere führt mit 2.e4 in die " +
      "Sizilianische Verteidigung. Die Englische Eröffnung ist nach Howard Staunton benannt, " +
      "der sie in seinem Wettkampf gegen Saint-Amant 1843 und in London 1851, dem ersten " +
      "internationalen Turnier, spielte.",
    strategy:
      "Beantwortet den c-Bauern mit dem c-Bauern: Weiß kämpft um d5, hält d4 in Reserve und " +
      "hat Sc3 und g3 als natürliche Fortsetzungen. Schwarz wählt zwischen ...Sc6 mit ...g6 " +
      "und ...Lg7, dem Igel mit ...Sf6, ...e6, ...b6 und ...Lb7 und einem raschen ...d5. Nach " +
      "d4 cxd4 Sxd4 kann Weiß mit e4 den Maróczy-Aufbau errichten, wie in der Sizilianischen " +
      "Verteidigung.",
  },

  "1.Nf3 c5 2.e4": {
    strategy:
      "Führt in die Hauptlinie der Sizilianischen Verteidigung: Nach ...d6, ...Sc6 oder ...e6 " +
      "spielt Weiß d4 und schlägt auf d4 mit dem Springer zurück, ein Offener Sizilianer. " +
      "Weiß gewinnt Raum im Zentrum und eine schnelle Entwicklung, Schwarz erhält die " +
      "halboffene c-Linie und zwei Zentrumsbauern gegen einen. Das Spiel ist scharf und " +
      "zweischneidig und verlangt Kenntnis der sizilianischen Theorie.",
  },

  "1.Nf3 c5 2.g3": {
    strategy:
      "Bereitet Lg2 und die frühe Rochade vor; der Läufer steht auf der langen Diagonale und " +
      "zielt auf d5 und b7, sobald der Springer f3 zieht. Weiß hält sich sowohl c4 für einen " +
      "Réti- oder englischen Aufbau offen als auch d3 mit e4 wie im Königsindischen Angriff. " +
      "Schwarz kann mit ...d5 Raum nehmen oder den Aufbau mit ...Sc6, ...g6 und ...Lg7 " +
      "spiegeln.",
  },

  "1.Nf3 c5 2.d4": {
    strategy:
      "Greift das Zentrum sofort an: Nach 2...cxd4 3.Sxd4 hat Weiß den d-Bauern gegen den " +
      "schwarzen c-Bauern getauscht, wie in einem Offenen Sizilianer, dem noch e4 fehlt. " +
      "Schwarz kann ...Sf6, ...g6 oder das zentrale ...e5 wählen, und Weiß muss sich noch " +
      "zwischen e4 und c4 entscheiden. Korrekt und als ausgeglichen bewertet, doch der Zug " +
      "überlässt Schwarz die Wahl des Aufbaus.",
  },

  "1.Nf3 c5 2.b3": {
    strategy:
      "Bereitet Lb2 auf der langen Diagonale vor, mit Blick auf e5 und das Zentrum, gefolgt " +
      "von e3 und Le2 wie in der Larsen-Eröffnung. Der Plan ist korrekt, aber langsam: Ohne " +
      "Zentrumsbauern lässt Weiß Schwarz zuerst mit ...d5 und ...Sc6 das Zentrum besetzen.",
  },

  "1.Nf3 c5 2.Nc3": {
    strategy:
      "Entwickelt den Damenspringer mit Blick auf d5 und e4 und hält e4 in Reserve, womit " +
      "eine Sizilianische Verteidigung mit bereits gespieltem Sc3 entstünde. Der Springer " +
      "verstellt den c-Bauern, sodass die englischen Pläne mit c4 entfallen, und Schwarz kann " +
      "mit ...d5 sofort das Zentrum besetzen. Korrekt, aber der Springer legt sich früh fest " +
      "und stellt Schwarz vor keine Probleme.",
  },

  "1.Nf3 c5 2.d3": {
    strategy:
      "Bereitet e4 vor und befreit den Läufer c1, mit dem Ziel des Aufbaus im Königsindischen " +
      "Angriff mit g3, Lg2 und O-O. Das System ist solide, aber langsam, und erlaubt Schwarz, " +
      "...d5 und ...Sc6 kampflos aufzubauen.",
  },

  "1.Nf3 c5 2.e3": {
    strategy:
      "Öffnet dem Läufer f1 die Diagonale und bereitet d4 und Le2 vor. Der Aufbau ist solide, " +
      "aber passiv und sperrt den Läufer c1 ein, sodass Schwarz mit ...d5 das Zentrum nehmen " +
      "oder mit ...g6 fianchettieren kann, während Weiß später mit c4 oder d4 aufholen muss.",
  },

  "1.Nf3 c5 2.c3": {
    strategy:
      "Bereitet d4 vor, sodass Weiß ...cxd4 mit cxd4 beantworten kann und einen Bauern auf d4 " +
      "behält, eine Alapin-ähnliche Idee ohne e4. Der Bauer nimmt dem Damenspringer das Feld " +
      "c3 und tut wenig gegen ...d5, das sofort Raum gewinnt. Solide, aber langsam.",
  },

  "1.Nf3 c5 2.b4": {
    strategy:
      "Bietet den b-Bauern als Flügelgambit an. Nach 2...cxb4 kann Weiß mit a3 Linien öffnen " +
      "oder mit d4 das Zentrum besetzen, doch Schwarz behält den Mehrbauern und erhält eine " +
      "halboffene c-Linie, sodass die Kompensation dürftig ist.",
  },

  "1.Nf3 c5 2.a3": {
    strategy:
      "Bereitet b4 gegen den Bauern c5 vor, verbraucht aber ein Tempo mit einem Randbauern, " +
      "während Schwarz mit ...d5 und ...Sf6 das Zentrum besetzt.",
  },

  "1.Nf3 c5 2.a4": {
    strategy:
      "Verhindert ...b5 und gewinnt Raum am Damenflügel, schwächt aber b4 und verbraucht ein " +
      "Tempo, ohne dem Zentrum zu helfen. Schwarz entwickelt sich mit ...Sc6 und ...d5, und " +
      "Weiß hat dafür nichts vorzuweisen.",
  },

  "1.Nf3 c5 2.g4": {
    strategy:
      "Gewinnt Raum am Königsflügel, lässt den Bauern aber ungedeckt: Nach 2...d5 zielt der " +
      "Läufer c8 auf g4, und ...Lxg4 droht. Der Vorstoß schwächt außerdem f4 und h4, ohne der " +
      "Entwicklung zu helfen.",
  },

  "1.Nf3 c5 2.h3": {
    strategy:
      "Nimmt dem Läufer c8 das Feld g4, verbraucht aber ein Tempo mit einem Randbauern, ohne " +
      "der Entwicklung oder dem Zentrum zu helfen. Schwarz nimmt mit ...d5 und ...Sc6 Raum.",
  },

  "1.Nf3 c5 2.h4": {
    strategy:
      "Schiebt den Randbauern mit dem Gedanken an h5 vor, tut aber nichts für Zentrum und " +
      "Entwicklung, und g4 lässt sich nie mehr durch h3 decken. Schwarz besetzt mit ...d5 und " +
      "...Sc6 das Zentrum.",
  },

  "1.Nf3 c5 2.Rg1": {
    strategy:
      "Gibt das Recht zur kurzen Rochade auf und stellt den Turm ohne Zweck hinter den " +
      "eigenen Bauern g2. Schwarz besetzt mit ...d5 und ...Sc6 das Zentrum, während der weiße " +
      "König nur noch auf dem anderen Flügel Sicherheit finden kann.",
  },

  "1.Nf3 c5 2.Na3": {
    strategy:
      "Strebt nach b5 oder c4, doch der Springer am Rand kontrolliert kein Zentrumsfeld und " +
      "blockiert den a-Bauern. Schwarz besetzt mit ...d5 und ...Sf6 das Zentrum.",
  },

  "1.Nf3 c5 2.Ng5": {
    strategy:
      "Zieht denselben Springer erneut, und seine Angriffe auf f7 und h7 verpuffen, da König " +
      "und Turm h8 diese Felder decken. Nach ...h6 muss der Springer abermals ziehen, und " +
      "Weiß hat Zeit verloren, während Schwarz das Zentrum besetzt.",
  },

  "1.Nf3 c5 2.Nh4": {
    strategy:
      "Zieht den Springer ein zweites Mal, auf ein Randfeld, wo er weniger Felder beherrscht " +
      "als auf f3 und nichts für das Zentrum tut. Schwarz besetzt mit ...d5 und ...Sf6 " +
      "ungestört das Zentrum.",
  },

  "1.Nf3 c5 2.Ne5": {
    strategy:
      "Stellt den Springer nach e5, wo ihn ...d6 sofort vertreibt. Er muss nach f3, d3 oder " +
      "c4 zurück, und Schwarz hat ein Tempo für das Zentrum gewonnen.",
  },

  "1.Nf3 c5 2.Ng1": {
    strategy:
      "Zieht den Springer auf sein Ausgangsfeld zurück, sodass Weiß zwei Züge umsonst " +
      "gespielt hat und Schwarz im Zentrum praktisch einen ganzen Zug voraus ist.",
  },

  "1.Nf3 c5 2.Nd4": {
    strategy:
      "Stellt eine Figur ein: 2...cxd4 gewinnt den Springer, und der Bauer d2 verstellt der " +
      "Dame das Zurückschlagen, sodass Weiß später höchstens einen Bauern zurückgewinnt.",
  },

  "1.Nf3 c5": {
    name: "Zukertort-Eröffnung: Sizilianische Einladung",
  },

  "1.Nf3 c5 2.c4 Nc6": {
    strategy:
      "Entwickelt den Springer auf ein zentrales Feld, von dem aus er d4 und e5 überwacht, " +
      "und hält sowohl ...g6 mit ...Lg7 als auch ...Sf6 mit ...e6 in Reserve. Öffnet Weiß das " +
      "Zentrum mit 3.d4 cxd4 4.Sxd4, entstehen sizilianische Strukturen wie die Beschleunigte " +
      "Drachenvariante nach 4...g6, in der 5.e4 den Maróczy-Aufbau errichtet. Nach 3.Sc3 Sf6 " +
      "ist die Stellung völlig symmetrisch, und Weiß ist am Zug.",
  },

  "1.Nf3 c5 2.c4 Nf6": {
    strategy:
      "Entwickelt mit Kontrolle über e4 und d5 und hält jeden Aufbau offen: ...d5, ...g6, " +
      "...e6 und ...Sc6 bleiben alle möglich. Nach 3.d4 cxd4 4.Sxd4 entsteht dieselbe " +
      "Stellung wie nach 1.d4 Sf6 2.c4 c5 3.Sf3 cxd4 4.Sxd4, dem Anti-Benoni. Da Weiß noch " +
      "zwischen Sc3, g3 und d4 wählen muss, kann Schwarz einen Zug später über die " +
      "Bauernstruktur entscheiden.",
  },

  "1.Nf3 c5 2.c4 e6": {
    strategy:
      "Öffnet den Läufer f8 und bereitet ...d5 vor, oder ...b6 mit ...Lb7 und ...Le7 für den " +
      "flexiblen Igel-Aufbau, während ...Sf6 und ...Sc6 in beliebiger Reihenfolge folgen " +
      "können. Weiß kann 3.Sc3 spielen oder mit 3.d4 cxd4 4.Sxd4 und späterem e4 Raum nehmen. " +
      "Begnügt sich Schwarz mit dem Igel, zahlt er mit weniger Raum und einem rückständigen " +
      "d-Bauern auf d6.",
  },

  "1.Nf3 c5 2.c4 g6": {
    strategy:
      "Bereitet ...Lg7 auf der langen Diagonale und eine schnelle Rochade vor, für einen " +
      "drachenartigen Aufbau oder, mit ...b6 und ...Lb7, ein solides Doppelfianchetto. Weiß " +
      "kann mit 3.d4 cxd4 4.Sxd4 Lg7 5.e4 antworten und so den Maróczy-Aufbau errichten, " +
      "dessen Bauern auf c4 und e4 das Feld d5 kontrollieren und den befreienden Vorstoß " +
      "...d5 erschweren. Schwarz setzt dann auf Figurenspiel gegen diesen Aufbau.",
  },

  "1.Nf3 c5 2.c4 b6": {
    strategy:
      "Bereitet ...Lb7 auf der langen Diagonale vor, mit dem Ziel eines Igels mit ...e6 oder " +
      "eines Doppelfianchettos mit ...g6. Der Zug ist gesund, legt aber den b-Bauern früh " +
      "fest, während dieselben Aufbauten auch nach 2...e6 oder 2...Sf6 möglich bleiben. Weiß " +
      "kann 3.Sc3 antworten oder mit 3.d4 cxd4 4.Sxd4 Raum gewinnen.",
  },

  "1.Nf3 c5 2.c4 d6": {
    strategy:
      "Bereitet ...e5 oder einen sizilianischen Aufbau vor, etwa 3.d4 cxd4 4.Sxd4 Sf6 5.Sc3 " +
      "g6 mit dem weißen Bauern bereits auf c4. Der Zug ist gesund, aber passiv: Er legt den " +
      "d-Bauern vor den Springern fest und lässt Weiß freie Hand, mit Sc3, d4 und e4 Raum zu " +
      "nehmen.",
  },

  "1.Nf3 c5 2.c4 d5": {
    strategy:
      "Stellt sofort das Zentrum in Frage. Nach 3.cxd5 Sf6 4.Sc3 Sxd5 entsteht durch " +
      "Zugumstellung die bekannte Stellung nach 1.c4 c5 2.Sc3 Sf6 3.Sf3 d5 4.cxd5 Sxd5, doch " +
      "das Zurückschlagen mit 3...Dxd5 erlaubt 4.Sc3 mit Tempogewinn gegen die Dame, und Weiß " +
      "führt in der Entwicklung.",
  },

  "1.Nf3 c5 2.c4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er weder d4 noch e5 kontrolliert und erst nach " +
      "...Sc7 oder ...Sb4 nützlich wird. Weiß baut mit Sc3 und d4 das Zentrum auf, während " +
      "Schwarz Tempi verbraucht.",
  },

  "1.Nf3 c5 2.c4 Qc7": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel. Sc3 mit anschließendem Sb5 oder Sd5 " +
      "gewinnt Zeit gegen sie, und Schwarz gerät in der Entwicklung in Rückstand.",
  },

  "1.Nf3 c5 2.c4 Qb6": {
    strategy:
      "Greift b2 an, doch der Läufer auf c1 deckt den Bauern, also droht nichts. Sc3 mit " +
      "anschließendem Sa4 oder Sd5 gewinnt Zeit gegen die Dame, während die schwarzen Figuren " +
      "zu Hause bleiben.",
  },

  "1.Nf3 c5 2.c4 Qa5": {
    strategy:
      "Zielt auf a2 und d2, doch beide Bauern sind gedeckt, also droht die Dame nichts. Weiß " +
      "entwickelt sich mit Sc3, g3 und Lg2, und der frühe Damenzug kostet Schwarz Zeit, " +
      "während ...Sc6 und ...Sf6 warten.",
  },

  "1.Nf3 c5 2.c4 Nh6": {
    strategy:
      "Strebt nach f5, wo e4 oder g4 den Springer sofort vertreiben würde. Auf h6 tut er " +
      "nichts für das Zentrum, und Weiß gewinnt Zeit für Sc3 und d4.",
  },

  "1.Nf3 c5 2.c4 a6": {
    strategy:
      "Bereitet ...b5 gegen den Bauern c4 vor, entwickelt aber nichts, und Weiß baut mit Sc3 " +
      "und d4 das Zentrum auf, während die schwarzen Figuren am Königsflügel zu Hause " +
      "bleiben.",
  },

  "1.Nf3 c5 2.c4 a5": {
    strategy:
      "Verhindert b4, entwickelt aber nichts und hinterlässt auf b5 ein dauerhaftes Loch, das " +
      "kein schwarzer Bauer mehr decken kann. Weiß besetzt in aller Ruhe mit Sc3 und d4 das " +
      "Zentrum.",
  },

  "1.Nf3 c5 2.c4 b5": {
    strategy:
      "Bietet einen Bauern nach Art des Wolga-Gambits an: Nach 3.cxb5 a6 4.bxa6 Lxa6 erhält " +
      "Schwarz die offenen a- und b-Linien, doch das weiße Zentrum ist intakt, und Weiß " +
      "rochiert über g3 und Lg2 sicher und behält bei geringer Kompensation den Mehrbauern.",
  },

  "1.Nf3 c5 2.c4 f6": {
    strategy:
      "Nimmt dem Springer das Feld f6 und schwächt die Diagonale e8-h5 sowie das Feld e6, " +
      "ohne etwas zu entwickeln, während Weiß einfach mit Sc3 und d4 fortsetzt.",
  },

  "1.Nf3 c5 2.c4 f5": {
    strategy:
      "Kontrolliert e4 wie in der Holländischen Verteidigung, schwächt aber die Diagonale " +
      "e8-h5 und das Feld e6, ohne eine Figur zu entwickeln. Weiß setzt mit Sc3, d4 und g3 " +
      "ungestört fort.",
  },

  "1.Nf3 c5 2.c4 h6": {
    strategy:
      "Nimmt Springer und Läufer das Feld g5, entwickelt aber keine Figur. Weiß nutzt das " +
      "Tempo für Sc3 und d4.",
  },

  "1.Nf3 c5 2.c4 h5": {
    strategy:
      "Ein Randbauernzug, der g5 und g6 schwächt und weder für das Zentrum noch für die " +
      "Entwicklung etwas tut. Weiß setzt mit Sc3 und d4 fort.",
  },

  "1.Nf3 c5 2.c4 e5": {
    strategy:
      "Lässt den Bauern ungedeckt: 3.Sxe5 gewinnt ihn sofort, und ...Sc6 oder ...Df6 gewinnt " +
      "danach Zeit gegen den Springer, aber nicht den Bauern zurück.",
  },

  "1.Nf3 c5 2.c4 g5": {
    strategy:
      "Verliert sofort einen Bauern: 3.Sxg5 schlägt ihn, und keine schwarze Figur deckt g5.",
  },

  "1.Nf3 c5 2.g3 Nc6": {
    strategy:
      "Entwickelt eine Figur und überwacht zugleich d4 und e5. Schwarz hält sich jeden Aufbau " +
      "offen: ...g6 mit ...Lg7 für ein gespiegeltes Fianchetto, ...e5 mit ...Sf6 für ein " +
      "breites Zentrum oder ...d5 mit ...e6 gegen einen Aufbau nach Art des Königsindischen " +
      "Angriffs. Spielt Weiß zusätzlich c4 und Sc3, etwa mit 3.Lg2 g6 4.c4 Lg7 5.Sc3, wird " +
      "die Partie zur Symmetrievariante der Englischen Eröffnung.",
  },

  "1.Nf3 c5 2.g3 Nf6": {
    strategy:
      "Entwickelt den Königsspringer und hält ...d5, ...g6 und ...Sc6 offen; die Stellung ist " +
      "dieselbe wie nach 1.Sf3 Sf6 2.g3 c5. Gegen Lg2 kann Schwarz mit ...Sc6 und ...g6 " +
      "aufbauen oder mit ...d5 das Zentrum besetzen. Der Springer überwacht d4 nicht, sodass " +
      "Weiß sofort mit d4 cxd4 Sxd4 tauschen kann; es entstehen die halboffenen Linien wie im " +
      "offenen Sizilianer, aber mit dem e-Bauern noch auf e2.",
  },

  "1.Nf3 c5 2.g3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, um dem Läufer, der nach g2 kommt, auf der langen Diagonale " +
      "entgegenzutreten; es folgen ...e6 und ...Sf6 oder ...g6 und ...Lg7. Spielt Weiß c4, " +
      "kann Schwarz mit ...e6, ...d6 und ...a6 einen Igel aufbauen. Noch keine Figur umkämpft " +
      "d4, sodass Weiß das Zentrum mit d4 öffnen kann, vor oder nach c4.",
  },

  "1.Nf3 c5 2.g3 d5": {
    strategy:
      "Besetzt sofort das Zentrum: Mit Bauern auf c5 und d5 nimmt Schwarz mehr Raum ein als " +
      "der zurückhaltende weiße Aufbau. Nach Lg2 kann Schwarz mit ...Sc6, ...e5 und ...Sf6 " +
      "ein Maximum an Raum anstreben oder solider mit ...e6 und ...Sf6 aufbauen. Weiß kann d5 " +
      "mit c4 angreifen, worauf Schwarz zwischen ...d4, ...dxc4 und dem Halten des Bauern mit " +
      "...e6 oder ...Sf6 wählt.",
  },

  "1.Nf3 c5 2.g3 g6": {
    strategy:
      "Spiegelt den weißen Aufbau: Es folgen ...Lg7 und ...Sc6, dann ...d6 oder ...e6 mit " +
      "...Sf6 oder ...Sge7. Der Läufer auf g7 zielt entlang der langen Diagonale auf d4 und " +
      "b2, und die Struktur bleibt flexibel. Weiß kann mit c4 und Sc3 die Symmetrievariante " +
      "der Englischen Eröffnung ansteuern oder mit d4 cxd4 Sxd4 das Zentrum öffnen.",
  },

  "1.Nf3 c5 2.g3 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet ...Lb7 gegen die lange Diagonale vor. Nichts " +
      "deckt den Bauern b5, sodass a4 ihn sofort angreift, und d4 trifft zudem c5. Ein " +
      "riskanter Versuch, der nicht forciert widerlegt ist, aber von Schwarz mehr verlangt " +
      "als eine schlichte Entwicklung.",
  },

  "1.Nf3 c5 2.g3 d6": {
    strategy:
      "Öffnet den Läufer c8 und unterstützt ein späteres ...e5; es folgen ...Sc6, ...Sf6 und " +
      "...g6 in einer kompakten Struktur nach sizilianischem Muster. Der Aufbau ist gesund, " +
      "aber passiv: Der Bauer legt sich fest, bevor der weiße Plan klar ist, und Lg2, O-O und " +
      "c4 verschaffen Weiß das freiere Spiel.",
  },

  "1.Nf3 c5 2.g3 e6": {
    strategy:
      "Öffnet den Läufer f8 und bereitet ...d5 vor, mit ...Sf6, ...Sc6 und ...Le7 für ein " +
      "solides Zentrum oder mit ...b6 und ...Lb7 für einen igelartigen Aufbau, falls Weiß c4 " +
      "spielt. Gesund, aber der e-Bauer legt sich früh fest: Nach ...d5 ist der Läufer c8 " +
      "eingesperrt, sofern nicht ...b6 folgt, während 2...Sc6 beide Pläne offenhält.",
  },

  "1.Nf3 c5 2.g3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er weder d4 noch e5 umkämpft und ...Sc7 oder " +
      "...Sb4 braucht, um ein nützliches Feld zu finden. Weiß gewinnt mit Lg2, O-O und c4 " +
      "oder d4 Zeit, während der Springer noch unterwegs ist.",
  },

  "1.Nf3 c5 2.g3 Qc7": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel. Nach d4 cxd4 Sxd4 kann der Springer " +
      "nach b5 springen und die Dame angreifen, während 2...Sc6 dieselben Aufbauten erreicht, " +
      "ohne die Dame so früh zu exponieren.",
  },

  "1.Nf3 c5 2.g3 Qb6": {
    strategy:
      "Greift b2 an, doch der Läufer auf c1 deckt den Bauern, und die exponierte Dame wird " +
      "zum Ziel: Sc3 mit anschließendem Sa4 oder Sd5 greift sie mit Tempo an, während Schwarz " +
      "noch keine Figur entwickelt hat.",
  },

  "1.Nf3 c5 2.g3 Qa5": {
    strategy:
      "Fesselt den Bauern d2 an den König, sodass der d-Bauer nicht ziehen kann, bis Sc3 oder " +
      "c3 die Diagonale verstellt, doch die Dame verlässt d8, bevor eine einzige Figur " +
      "entwickelt ist. Weiß entwickelt sich einfach mit Lg2, O-O und Sc3, und Schwarz hat " +
      "Zeit für eine Dame verbraucht, die nichts anzugreifen hat.",
  },

  "1.Nf3 c5 2.g3 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo er f5 und g4 im Blick hat, aber kein Zentrumsfeld. " +
      "Sobald der d-Bauer gezogen hat, kann Schwarz nach Lxh6 gxh6 mit Doppelbauern auf der " +
      "h-Linie dastehen, und auf f5 lässt sich der Springer mit e4 vertreiben.",
  },

  "1.Nf3 c5 2.g3 a6": {
    strategy:
      "Ein Wartezug, der ...b5 vorbereitet, aber weder für das Zentrum noch für die " +
      "Entwicklung etwas tut. Weiß baut mit Lg2, O-O und c4 oder d3 ungestört auf.",
  },

  "1.Nf3 c5 2.g3 a5": {
    strategy:
      "Rückt einen Randbauern vor, der weder für das Zentrum noch für die Entwicklung etwas " +
      "tut. Er lässt b5 und b6 ohne Bauerndeckung, und Weiß nutzt das gewonnene Tempo für " +
      "Lg2, O-O und c4 oder d3.",
  },

  "1.Nf3 c5 2.g3 f6": {
    strategy:
      "Bereitet ...e5 vor, nimmt aber dem Königsspringer das Feld f6 und schwächt e6 sowie " +
      "die Diagonale e8-h5, ohne dass eine Figur entwickelt ist. Weiß entwickelt sich mit Lg2 " +
      "und O-O und nimmt mit d4 oder c4 Raum, während Schwarz in der Entwicklung " +
      "zurückbleibt.",
  },

  "1.Nf3 c5 2.g3 f5": {
    strategy:
      "Kontrolliert e4 nach holländischem Vorbild, schwächt aber ohne jede Entwicklung e6 und " +
      "die Diagonale e8-h5. Sh4 greift f5 sofort an, sodass Schwarz ein weiteres Tempo für " +
      "...e6 oder ...g6 aufwenden muss, um den Bauern zu halten.",
  },

  "1.Nf3 c5 2.g3 h6": {
    strategy:
      "Nimmt dem weißen Springer das Feld g5, doch dort droht noch nichts, und der Zug tut " +
      "nichts für Zentrum oder Entwicklung. Weiß gewinnt ein Tempo für Lg2, O-O und c4 oder " +
      "d3.",
  },

  "1.Nf3 c5 2.g3 h5": {
    strategy:
      "Gewinnt Raum am Flügel, verbraucht aber ein Tempo ohne jede Entwicklung und schwächt " +
      "g5. Das folgende ...h4 verliert nur den Bauern, da der Springer f3 und der Bauer g3 " +
      "beide h4 decken.",
  },

  "1.Nf3 c5 2.g3 c4": {
    strategy:
      "Gewinnt Raum am Damenflügel, doch auf c4 kontrolliert der Bauer d4 nicht mehr, und b3 " +
      "oder d3 stellt ihn sofort infrage. Schwarz hat einen zweiten Zug mit dem c-Bauern " +
      "verbraucht, während alle Figuren noch zu Hause stehen.",
  },

  "1.Nf3 c5 2.g3 e5": {
    strategy:
      "Stellt den e-Bauern ein: Nichts deckt ihn, also gewinnt 3.Sxe5 einfach einen Bauern. " +
      "Nach 3...Sc6 4.Sxc6 dxc6 haben die schwarze Dame und der Läufer c8 offene Linien, doch " +
      "Schwarz steht mit einem glatten Minusbauern da.",
  },

  "1.Nf3 c5 2.g3 g5": {
    strategy:
      "Stellt den g-Bauern ein: 3.Sxg5 gewinnt ihn, weil der Bauer e7 die Diagonale der Dame " +
      "versperrt und sonst nichts g5 deckt. Zudem bleibt der schwarze Königsflügel gelockert.",
  },
};
