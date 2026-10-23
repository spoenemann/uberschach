import type { OpeningTexts } from "../book.ts";

// German prose for e4-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.e4 c5 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer, kontrolliert d4 und e5 und bereitet d4 vor, um das " +
      "Zentrum zu öffnen. Nach 2...d6, 2...Sc6 oder 2...e6 spielt Weiß 3.d4 cxd4 4.Sxd4 und " +
      "erhält einen Offenen Sizilianer: Entwicklungsvorsprung und Raum am Königsflügel gegen " +
      "die schwarze Bauernmehrheit im Zentrum und die halboffene c-Linie. Etwa vier von fünf " +
      "Meisterpartien, die mit 1.e4 c5 beginnen, gehen mit diesem Zug weiter.",
  },

  "1.e4 c5 2.c3": {
    name: "Sizilianische Verteidigung: Alapin-Variante",
    background:
      "Benannt nach dem russischen Meister Semjon Alapin (1856–1923), der sie Ende des 19. " +
      "Jahrhunderts verfocht. Viele Jahre war sie wenig angesehen, weil 2...d5 als leichter " +
      "Ausgleich für Schwarz galt; Ende der 1960er-Jahre wurde sie von Jewgeni Sweschnikow " +
      "und Jewgeni Wassjukow wiederbelebt, und Deep Blue spielte sie 1996 in der ersten " +
      "Partie seines Wettkampfs gegen Kasparow. Heute gilt sie als eines der solidesten und " +
      "angesehensten Systeme gegen Sizilianisch.",
    strategy:
      "Bereitet d4 vor, sodass ...cxd4 mit cxd4 beantwortet werden kann und Weiß zwei Bauern " +
      "im Zentrum hat. Schwarz greift deshalb sofort an, mit 2...Sf6 3.e5 Sd5 oder mit 2...d5 " +
      "3.exd5 Dxd5, wo die Dame sicher steht, weil der Springer b1 nicht mehr nach c3 kann. " +
      "Nach 4.d4 und einem Tausch auf d4 hat Weiß meist einen isolierten d-Bauern und aktive " +
      "Figuren, aber einen langsameren Angriff als im Offenen Sizilianer.",
  },

  "1.e4 c5 2.Nc3": {
    name: "Geschlossener Sizilianer",
    background:
      "Nach 2.Sf3 der zweithäufigste Zug von Weiß gegen 1...c5. Viele Varianten führen in den " +
      "Offenen Sizilianer, die Moskauer Variante oder die Rossolimo-Variante über, und Andrew " +
      "Soltis taufte den Aufbau mit 3.Sge2 das Chamäleon-System. Der frühere Weltmeister " +
      "Boris Spasski wandte den Geschlossenen Sizilianer oft erfolgreich an, sogar in " +
      "Kandidatenkämpfen.",
    strategy:
      "Entwickelt einen Springer und hält das Zentrum vorerst geschlossen. Weiß kann noch mit " +
      "Sf3 und d4 in einen Offenen Sizilianer einlenken oder mit g3, Lg2 und d3 aufbauen und " +
      "dann mit Le3 und Dd2 oder mit f4 und Sf3 am Königsflügel angreifen. Der Springer " +
      "verstellt den c-Bauern, sodass der direkte Kampf um d4 aufgeschoben ist, und Schwarz " +
      "stellt sich mit ...Sc6, ...g6 und ...Lg7 oder mit ...e6 und ...d6 bequem auf.",
  },

  "1.e4 c5 2.b3": {
    name: "Sizilianische Verteidigung: Snyder-Variante",
    background:
      "Benannt nach Robert M. Snyder, einem Meister des US-Schachverbands, der 1977 ein Buch " +
      "über das System veröffentlichte. Nigel Short hat sie gelegentlich gespielt, und sie " +
      "ist eine Lieblingswaffe des georgischen Großmeisters Tamaz Gelashvili.",
    strategy:
      "Bereitet Lb2 vor, damit der Läufer über die lange Diagonale auf d4, e5 und den " +
      "schwarzen Königsflügel zielt, und hält c4, f4 und Sf3 offen. Der Zug tut zunächst " +
      "nichts für das Zentrum, sodass Schwarz sich mit ...Sc6, ...e6 und ...d5 bequem " +
      "entwickelt. Gesund, aber Weiß erhält weniger als mit den wichtigsten zweiten Zügen.",
  },

  "1.e4 c5 2.d3": {
    strategy:
      "Bereitet einen Aufbau wie im Königsindischen Angriff mit g3, Lg2, Sf3 und O-O vor und " +
      "führt meist in den Geschlossenen Sizilianer über. Die Struktur ist solide, erhebt aber " +
      "keinen Anspruch auf d4, sodass Schwarz sich frei mit ...Sc6, ...g6 und ...Lg7 oder mit " +
      "...e6 und ...d5 aufbaut.",
  },

  "1.e4 c5 2.d4": {
    name: "Sizilianische Verteidigung: Morra-Gambit",
    background:
      "Das eigentliche Gambit entsteht nach 2...cxd4 3.c3 und ist nach dem Franzosen Pierre " +
      "Morra (1900–1969) und Ken Smith (1930–1999) vom Dallas Chess Club benannt. Um 1950 " +
      "veröffentlichte Morra eine Broschüre und mehrere Artikel darüber, und Smith schrieb " +
      "insgesamt neun Bücher und neunundvierzig Artikel über das Gambit.",
    strategy:
      "Öffnet sofort das Zentrum: Nach 2...cxd4 3.c3 dxc3 4.Sxc3 gibt Weiß einen Bauern für " +
      "schnelle Entwicklung, offene c- und d-Linien und Druck auf f7 durch einen Läufer auf " +
      "c4. Die Theorie hält das für zu wenig, doch die vielen Fallen machen es für einen " +
      "unvorbereiteten Gegner zu einer harten Prüfung. Schwarz kann auch mit 3...Sf6 oder " +
      "3...d5 ablehnen und gelangt so in Varianten mit 2.c3.",
  },

  "1.e4 c5 2.f4": {
    name: "Sizilianische Verteidigung: McDonnell-Angriff",
    background:
      "Der Name McDonnell-Angriff geht auf die 14. Wettkampfpartie zwischen Alexander " +
      "McDonnell und Louis de La Bourdonnais zurück, die 1834 in London gespielt wurde und " +
      "mit einem Sieg von Schwarz endete. Die Variante heißt auch Grand-Prix-Angriff, nach " +
      "den Wochenendturnieren, die in den 1970er-Jahren in England ausgetragen wurden.",
    strategy:
      "Kontrolliert e5 und bereitet Sf3 nebst Lc4 oder Lb5 vor, mit Blick auf einen Angriff " +
      "am Königsflügel. Sofort gespielt, erlaubt es 2...d5 3.exd5 Sf6, wonach Schwarz den " +
      "Bauern auf d5 zurückgewinnt oder dafür schnelle Entwicklung erhält, was mehrere " +
      "Autoren für die beste Antwort halten. Weiß beginnt daher meist mit 2.Sc3, das ...d5 " +
      "erschwert, und spielt f4 einen Zug später.",
  },

  "1.e4 c5 2.g3": {
    name: "Sizilianische Verteidigung: Lasker-Dunne-Angriff",
    background:
      "Die Variante kam 1866 im Wettkampf zwischen Steinitz und Anderssen vor, und Mark " +
      "Taimanow spielte sie gelegentlich.",
    strategy:
      "Bereitet Lg2 vor und hält das Zentrum geschlossen; nach ...Sc6, Lg2 und d3 führt es " +
      "oft in den Geschlossenen Sizilianer über. Schwarz kann sofort mit 2...d5 zuschlagen, " +
      "denn nach 3.exd5 Dxd5 greift die Dame über das leere Feld g2 den Turm h1 an; Weiß " +
      "blockt mit Sf3 und kann dann mit c3 und d4 aufbauen. Gesund, aber weniger ehrgeizig " +
      "als die Hauptvarianten.",
  },

  "1.e4 c5 2.Na3": {
    name: "Sizilianische Verteidigung: Kronberger-Variante",
    background:
      "Ein exzentrischer Zug, den Wadim Swjaginzew beim Superfinale der Russischen " +
      "Meisterschaft 2005 wieder ins Gespräch brachte: Er spielte ihn dort dreimal, mit zwei " +
      "Remis und einem Sieg gegen Alexander Chalifman.",
    strategy:
      "Bereitet Sc4 oder Sb5 vor und hält c3 für den c-Bauern frei, abseits der Haupttheorie. " +
      "Vorerst steht der Springer am Rand und tut nichts für d4, sodass Schwarz sich frei " +
      "entwickelt und mit ...Sc6, ...e6 und ...d5 das Zentrum besetzt. Der Zug ist gesund, " +
      "bringt Weiß aber wenig.",
  },

  "1.e4 c5 2.Ne2": {
    name: "Sizilianische Verteidigung: Keres-Variante",
    background:
      "Die Variante war ein Lieblingszug von Paul Keres, dessen Namen sie trägt, und teilt " +
      "ihre Ideen mit dem Chamäleon-System mit 2.Sc3 und 3.Sge2.",
    strategy:
      "Hält die Wahl offen: 3.d4 cxd4 4.Sxd4 führt in einen Offenen Sizilianer, 3.g3 in einen " +
      "geschlossenen Aufbau, und 3.Sbc3 schiebt die Entscheidung auf, während der f-Bauer " +
      "frei vorrücken kann. Vorerst verstellt der Springer den Läufer f1, und das frühe Se2 " +
      "stellt Schwarz vor keine großen Probleme, sodass er sich mühelos mit ...Sc6 und ...d6 " +
      "oder ...e6 entwickelt.",
  },

  "1.e4 c5 2.a3": {
    name: "Sizilianische Verteidigung: Mengarini-Variante",
    strategy:
      "Bereitet b4 vor, um ...cxb4 mit axb4 zu beantworten und den c-Bauern vom Kampf um d4 " +
      "abzulenken, verbraucht dafür aber ein Tempo am Rand. Nach 2...Sc6 funktioniert der " +
      "Vorstoß nicht mehr, denn 3.b4 cxb4 4.axb4 Sxb4 gewinnt einfach einen Bauern, und " +
      "Schwarz entwickelt sich frei mit ...e6 und ...d5 oder ...g6.",
  },

  "1.e4 c5 2.a4": {
    name: "Sizilianische Verteidigung: Myers-Angriff mit a4",
    strategy:
      "Verhindert ...b5, verbraucht aber ein Tempo am Rand und schwächt b4 dauerhaft, da der " +
      "a-Bauer das Feld nicht mehr decken kann, und ein schwarzer Springer von c6 kann es " +
      "nutzen. Schwarz entwickelt sich frei mit ...Sc6, ...e6 und ...d5 oder ...Sf6.",
  },

  "1.e4 c5 2.b4": {
    name: "Sizilianische Verteidigung: Flügelgambit",
    background:
      "Es gilt allgemein als zu waghalsig und ist auf Großmeisterebene selten zu sehen. 1994 " +
      "nannte Joe Gallagher es „ein vergessenes Relikt, das seit den Tagen von Frank Marshall " +
      "und Rudolph Spielmann kaum einen Turniersaal betreten hat“.",
    strategy:
      "Opfert den b-Bauern, um den c-Bauern abzulenken und dann mit d4 das Zentrum zu " +
      "besetzen. Nach 2...cxb4 3.a3 d5, das heute als beste Antwort gilt, hat Weiß zu wenig " +
      "für den Bauern und muss sogar 4.exd5 Dxd5 5.axb4 vermeiden, das nach 5...De5+ den Turm " +
      "a1 kostet.",
  },

  "1.e4 c5 2.c4": {
    name: "Sizilianische Verteidigung: Staunton-Cochrane-Variante",
    strategy:
      "Ähnelt einer Englischen Eröffnung mit dem Königsbauern schon auf e4, lässt aber d4 " +
      "ohne Bauerndeckung, da weder der c- noch der e-Bauer zurückkehren kann, um es zu " +
      "schützen. Schwarz antwortet mit ...Sc6 und ...e5 und erhält ein bequemes Spiel, mit d4 " +
      "als dauerhaftem Vorposten für einen Springer.",
  },

  "1.e4 c5 2.f3": {
    strategy:
      "Stützt e4, nimmt aber dem Königsspringer das Feld f3 und öffnet die Diagonale e1–h4 " +
      "zum König. Schwarz entwickelt sich mit ...Sc6, ...e6 und ...d5, während die weißen " +
      "Figuren am Königsflügel keine guten Felder finden.",
  },

  "1.e4 c5 2.h3": {
    strategy:
      "Nimmt den schwarzen Figuren das Feld g4, verbraucht aber ein Tempo ohne Gewinn für " +
      "Zentrum oder Entwicklung. Schwarz entwickelt sich frei mit ...Sc6 und ...e6 oder " +
      "...d6, und der Bauer auf h3 erweist sich selten als nützlich.",
  },

  "1.e4 c5 2.h4": {
    name: "Sizilianische Verteidigung: Myers-Angriff mit h4",
    strategy:
      "Verbraucht ein Tempo mit dem Randbauern und schwächt g4 dauerhaft, da der h-Bauer das " +
      "Feld nicht mehr decken kann, ohne etwas für Zentrum oder Entwicklung zu gewinnen. " +
      "Schwarz entwickelt sich frei mit ...Sc6 und ...e6 oder ...d6, und der vorgerückte " +
      "Bauer macht die kurze Rochade für Weiß weniger sicher.",
  },

  "1.e4 c5 2.Qe2": {
    strategy:
      "Stützt e4, verstellt aber den Läufer f1 und bringt die Dame vor den Leichtfiguren ins " +
      "Spiel. Schwarz entwickelt sich frei mit ...Sc6 und ...e6 oder ...d6, und Weiß hat für " +
      "das Tempo im Zentrum nichts vorzuweisen.",
  },

  "1.e4 c5 2.Qf3": {
    strategy:
      "Nimmt dem Königsspringer das Feld f3 und exponiert die Dame, die ...Sc6 und ...Sd4 mit " +
      "Tempogewinn angreifen, wobei der Springer zugleich c2 bedroht, das die Dame nicht mehr " +
      "deckt. Schwarz entwickelt sich frei, während Weiß die Dame erneut ziehen muss.",
  },

  "1.e4 c5 2.Qg4": {
    name: "Sizilianische Verteidigung: Amazonen-Angriff",
    strategy:
      "Zielt auf g7 und d7, doch beide sind gedeckt, sodass nichts droht. 2...Sf6 greift die " +
      "Dame und den Bauern e4 zugleich an, und die Dame muss erneut ziehen, während Schwarz " +
      "sich mit Tempogewinn entwickelt.",
  },

  "1.e4 c5 2.Qh5": {
    strategy:
      "Greift c5 über die fünfte Reihe an und zielt auf f7, bringt die Dame aber zu früh ins " +
      "Spiel. 2...Sf6 greift sie an: 3.Dxc5 Sxe4 gewinnt den Bauern mit Tempo zurück, und " +
      "3.Dh4 stellt die Dame nur abseits, sodass Schwarz bequem steht.",
  },

  "1.e4 c5 2.Be2": {
    strategy:
      "Bereitet Sf3 und eine schnelle Rochade vor, doch der Läufer steht auf e2 passiv und " +
      "deckt g2 nicht mehr: Nach 2...d5 3.exd5 Dxd5 greift die Dame g2 an, und Weiß muss " +
      "einen Zug für Lf3 oder Sf3 aufwenden.",
  },

  "1.e4 c5 2.Bd3": {
    strategy:
      "Blockiert den d-Bauern und damit auch den Läufer c1, bis der Läufer d3 wieder zieht. " +
      "Schwarz entwickelt sich frei mit ...Sc6 und ...e6 oder ...g6, während Weiß noch einen " +
      "Läuferzug braucht, um den Damenflügel zu befreien.",
  },

  "1.e4 c5 2.Bc4": {
    name: "Sizilianische Verteidigung: Bowdler-Angriff",
    background:
      "Einst auf höchster Ebene gespielt, etwa in Anderssen–Wyvill, London 1851, ist er heute " +
      "nur noch bei Klubspielern und Anfängern beliebt, die mit Sizilianisch wenig vertraut " +
      "sind.",
    strategy:
      "Zielt auf f7 und bereitet eine schnelle Rochade vor, doch der Läufer steht exponiert: " +
      "Nach 2...e6 folgt ...d5, das mit Tempogewinn gegen den Läufer das Zentrum öffnet. Der " +
      "Angriff auf f7 ist leicht abzuwehren, und Schwarz erhält ein bequemes Spiel.",
  },

  "1.e4 c5 2.Bb5": {
    strategy:
      "Entwickelt den Läufer ohne Ziel, und ...a6 treibt ihn mit Zeitverlust zurück; 3.La4 " +
      "verliert ihn sogar nach 3...b5 4.Lb3 c4, womit der Läufer gefangen ist. Schwarz " +
      "gewinnt zudem mit ...b5 Raum am Damenflügel und entwickelt sich bequem.",
  },

  "1.e4 c5 2.Nh3": {
    name: "Sizilianische Verteidigung: Brick-Variante",
    strategy:
      "Strebt nach f4 oder g5, steht aber am Rand, wo er weder um d4 kämpft noch e4 stützt. " +
      "Nach ...d6 zielt der Läufer c8 auf ihn, und ...Lxh3 gxh3 würde die weißen " +
      "Königsflügelbauern zerrütten.",
  },

  "1.e4 c5 2.e5": {
    strategy:
      "Gewinnt Raum und verhindert ...Sf6, doch der einzelne Bauer übt keinen zusätzlichen " +
      "Druck auf das Zentrum aus. ...Sc6 und ...d6 greifen ihn an, und Weiß muss Zeit " +
      "aufwenden, um ihn mit Sf3 und f4 zu stützen.",
  },

  "1.e4 c5 2.g4": {
    name: "Sizilianische Verteidigung: Grob-Variante",
    strategy:
      "Lockert die lange Diagonale und die Felder f4 und h4 ohne Gegenwert. Nach 2...d5 " +
      "3.exd5 Dxd5 greift die Dame den Turm h1 an, und nach 4.Sf3 Lxg4 hat Schwarz den " +
      "g-Bauern gewonnen und fesselt den Springer an die Dame.",
  },

  "1.e4 c5 2.Ke2": {
    name: "Sizilianische Verteidigung: König-David-Eröffnung",
    strategy:
      "Verzichtet auf die Rochade und verstellt den Läufer f1 und die Diagonale der Dame nach " +
      "h5. Schwarz entwickelt sich mit ...Sc6 und öffnet mit ...d5 das Zentrum gegen einen " +
      "König, der kein sicheres Feld mehr findet.",
  },

  "1.e4 c5 2.Ba6": {
    strategy:
      "Stellt den Läufer ein: 2...bxa6 oder 2...Sxa6 gewinnt ihn ohne Gegenwert, weil nichts " +
      "das Feld a6 deckt.",
  },

  "1.e4 c5": {
    name: "Sizilianische Verteidigung",
    background:
      "Giulio Cesare Polerio analysierte sie 1594 in einem Manuskript. 1813 legte Jacob Henry " +
      "Sarratt den englischen Namen fest, nach einer alten italienischen Handschrift, die von " +
      "„il gioco siciliano“ sprach, dem sizilianischen Spiel. In den 1940er- und " +
      "1950er-Jahren von Botwinnik, Boleslawski, Bronstein und Najdorf wiederbelebt, wurde " +
      "sie nach den Worten von Modern Chess Openings (1990) zur meistgespielten und am " +
      "gründlichsten analysierten Eröffnung, im Vereinsschach wie auf Meisterebene.",
  },

  "1.e4 c5 2.c3 Nf6": {
    background:
      "Die Hauptvariante dieses Zuges, 2...Sf6 3.e5 Sd5, ist in der heutigen Praxis die " +
      "übliche gegen die Alapin-Variante und kann auch entstehen, wenn Schwarz das " +
      "Morra-Gambit ablehnt.",
    strategy:
      "Greift e4 an und lädt zu 3.e5 Sd5 ein, wonach Weiß Raum gewinnt und zwischen 4.d4, " +
      "4.Sf3, 4.g3 und 4.Lc4 wählt. Der Springer auf d5 steht aktiv, ist aber Tempozügen " +
      "ausgesetzt, und Schwarz will den Bauern e5 mit ...Sc6, ...d6 und ...cxd4 untergraben. " +
      "Der Preis ist vorübergehend weniger Raum im Zentrum.",
  },

  "1.e4 c5 2.c3 d5": {
    strategy:
      "Greift e4 sofort an und tauscht den weißen Zentrumsbauern ab: Nach 3.exd5 Dxd5 4.d4 " +
      "entwickelt sich Schwarz rasch mit ...Sf6 und ...e6 oder ...Sc6 und setzt d4 unter " +
      "Druck. Die Dame kommt allerdings früh ins Spiel, und sobald die c-Bauern getauscht " +
      "sind, gewinnt Weiß mit Sc3 Zeit gegen sie, sodass Schwarz genau spielen muss, um " +
      "auszugleichen.",
  },

  "1.e4 c5 2.c3 e6": {
    strategy:
      "Bereitet ...d5 vor und steuert auf Strukturen der Französischen Verteidigung zu: 3.d4 " +
      "d5 4.e5 führt in die Vorstoßvariante, und 4.Sd2 ergibt eine Stellung nach Art der " +
      "Tarrasch-Variante. Der Läufer c8 bleibt hinter seinen Bauern, und in der " +
      "Abtauschvariante 4.exd5 exd5 5.Le3 behält Weiß einen leichten Vorteil.",
  },

  "1.e4 c5 2.c3 Nc6": {
    strategy:
      "Entwickelt eine Figur und verstärkt den Druck auf d4, wobei ...d5 und ...e6 möglich " +
      "bleiben. Der Zug verhindert 3.d4 cxd4 4.cxd4 nicht, wonach Weiß zwei Bauern im Zentrum " +
      "hat, und nach 4...d5 5.exd5 Dxd5 6.Sf3 behält Weiß einen leichten Vorteil und gewinnt " +
      "mit Sc3 Zeit gegen die Dame. Gesund genug, aber einen Schritt hinter den wichtigsten " +
      "Antworten.",
  },

  "1.e4 c5 2.c3 d6": {
    strategy:
      "Ein scharfer Versuch, der ...Sf6 gegen e4 vorbereitet. Weiß kann mit 3.d4 sofort das " +
      "ganze Zentrum besetzen und behält nach dem ruhigen 3.d4 Sf6 4.Ld3 einen Raumvorteil. " +
      "4.dxc5 nimmt dagegen das schwarze Gambit an: Nach 4...Sc6 5.cxd6 Sxe4 hat Schwarz " +
      "Material für Aktivität gegeben.",
  },

  "1.e4 c5 2.c3 g6": {
    strategy:
      "Steuert auf ein Fianchetto am Königsflügel zu, bei dem der Läufer von g7 aus der Ferne " +
      "auf d4 wirkt. Weiß antwortet mit 3.d4 cxd4 4.cxd4, und Schwarz muss das breite Zentrum " +
      "schnell angreifen, meist mit 4...d5. Ein brauchbarer Aufbau, doch der Raumvorteil von " +
      "Weiß macht ihn schwieriger als die wichtigsten Antworten.",
  },

  "1.e4 c5 2.c3 e5": {
    strategy:
      "Kontrolliert d4 und erschwert Weiß ein rasches d4, schwächt aber das Feld d5 " +
      "erheblich. Nach 3.Sf3 Sc6 4.Lc4 hat Weiß einen soliden Vorteil und zielt auf f7 und " +
      "d5. Spielbar und selten, aber nicht zu empfehlen.",
  },

  "1.e4 c5 2.c3 Qa5": {
    strategy:
      "Fesselt den Bauern c3 auf der Diagonale e1-a5, sobald der Bauer d2 zieht, sodass 3.d4 " +
      "cxd4 nicht mit 4.cxd4 beantwortet werden kann. Weiß umgeht das Problem mit 3.Sf3 oder " +
      "3.Lc4 und spielt d4 später, während die Dame auf a5 exponiert steht. Ein seltener " +
      "Versuch, der nicht forciert widerlegt ist.",
  },

  "1.e4 c5 2.c3 b6": {
    strategy:
      "Bereitet ein Fianchetto am Damenflügel mit ...Lb7 vor, um Druck auf e4 auszuüben, und " +
      "hält ...e6 in Reserve. Der Zug ist jedoch langsam: Nach 3.d4 cxd4 4.cxd4 Lb7 5.Sc3 hat " +
      "Weiß ein breites Zentrum und die schnellere Entwicklung, und der Springer deckt e4 " +
      "bereits gegen den Läufer. Ein seltener, spielbarer Versuch.",
  },

  "1.e4 c5 2.c3 Qc7": {
    strategy:
      "Bringt die Dame früh ins Spiel, um e5 und die c-Linie zu überwachen, verhindert aber " +
      "3.d4 cxd4 4.cxd4 nicht, wonach Weiß das volle Zentrum hat. Sc3 und Sb5 gewinnen dann " +
      "Zeit gegen die Dame.",
  },

  "1.e4 c5 2.c3 Qb6": {
    strategy:
      "Zielt auf b2 und nach einem Tausch auf d4 auf den Bauern d4, doch Lc1 deckt b2, und " +
      "3.d4 cxd4 4.cxd4 errichtet ein volles Zentrum. Die exponierte Dame verliert dann Zeit " +
      "durch Züge wie Sc3 und Sa4.",
  },

  "1.e4 c5 2.c3 Na6": {
    strategy:
      "Der Springer strebt nach c7, um ...d5 zu unterstützen, steht am Rand aber schlecht: " +
      "3.Lxa6 bxa6 verdoppelt sofort die schwarzen a-Bauern, und 3.d4 besetzt kampflos das " +
      "Zentrum.",
  },

  "1.e4 c5 2.c3 Nh6": {
    strategy:
      "Strebt nach f5, tut aber nichts gegen d4. Nach 3.d4 zielt der Läufer c1 auf h6, sodass " +
      "Schwarz einen weiteren Zug für den Springer aufwenden oder nach Lxh6 gxh6 Doppelbauern " +
      "auf der h-Linie hinnehmen muss.",
  },

  "1.e4 c5 2.c3 a6": {
    strategy:
      "Bereitet wie in anderen sizilianischen Aufbauten ...b5 vor, ist hier aber langsam und " +
      "lässt 3.d4 ungehindert zu, sodass Weiß das volle Zentrum erhält, bevor Schwarz eine " +
      "Figur entwickelt hat.",
  },

  "1.e4 c5 2.c3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel, tut aber nichts gegen 3.d4 und schwächt b5, wo sich ein " +
      "weißer Läufer oder Springer (Sa3-b5) festsetzen kann. Schwarz verbraucht ein Tempo, " +
      "ohne sich zu entwickeln.",
  },

  "1.e4 c5 2.c3 h6": {
    strategy:
      "Ein Wartezug, der Lg5 verhindert, aber nichts gegen 3.d4 und das Zentrum unternimmt " +
      "und Schwarz in der Entwicklung ein Tempo zurückwirft.",
  },

  "1.e4 c5 2.c3 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel, lockert aber g5 und g6 und tut nichts gegen 3.d4. " +
      "Schwarz verbraucht ein Tempo, ohne eine Figur zu entwickeln oder um das Zentrum zu " +
      "kämpfen.",
  },

  "1.e4 c5 2.c3 g5": {
    strategy:
      "Lockert den Königsflügel dauerhaft: 3.d4 öffnet dem Läufer c1 die Diagonale gegen g5, " +
      "sodass Schwarz nach 3...cxd4 4.cxd4 einen weiteren Zug aufwenden muss, um den Bauern " +
      "zu halten, meist ...h6, während Weiß das volle Zentrum hat.",
  },

  "1.e4 c5 2.c3 b5": {
    strategy:
      "Gibt einen Bauern umsonst: Nichts deckt b5, sodass 3.Lxb5 ihn gewinnt, und Schwarz hat " +
      "weder einen Entwicklungsvorsprung noch eine andere klare Kompensation.",
  },

  "1.e4 c5 2.c3 c4": {
    strategy:
      "Überdehnt den Bauern, den nichts deckt: 3.Lxc4 schlägt ihn sofort, und Weiß hat danach " +
      "freie Hand im Zentrum.",
  },

  "1.e4 c5 2.c3 f6": {
    strategy:
      "Schwächt die Diagonale e8-h5 und nimmt dem Springer g8 das Feld f6: 3.Dh5+ g6 4.Dxc5 " +
      "gewinnt einen Bauern, und der König bleibt exponiert.",
  },

  "1.e4 c5 2.c3 f5": {
    strategy:
      "Stellt den Bauern ein, denn 3.exf5 gewinnt ihn sofort, und öffnet ohne jede " +
      "Entwicklung als Gegenwert die Diagonale e8-h5 gegen den König.",
  },

  "1.e4 c5 2.Nc3 Nc6": {
    strategy:
      "Entwickelt eine Figur, kämpft um d4 und e5 und hält die Bauernstruktur flexibel. " +
      "Schwarz kann den weißen Plan abwarten: Gegen 3.g3 ist der übliche Aufbau ...g6, ...Lg7 " +
      "und ...d6, gegen 3.f4 nach Sf3 ...g6 und ...Lg7. Lenkt Weiß mit 3.Sge2 g6 4.d4 in " +
      "einen Offenen Sizilianer ein, erreicht Schwarz einen Beschleunigten Drachen, in dem " +
      "Weiß den Maróczy-Aufbau mit c4 nicht mehr errichten kann.",
  },

  "1.e4 c5 2.Nc3 d6": {
    strategy:
      "Deckt e5 und den Bauern c5 und öffnet den Läufer c8. Lenkt Weiß mit Sf3 und d4 in " +
      "einen Offenen Sizilianer ein, kann Schwarz noch die Najdorf-, die Drachen- oder die " +
      "Scheveninger Variante wählen; gegen 3.g3 folgt mit ...Sc6, ...g6 und ...Lg7 der Aufbau " +
      "der Hauptvariante. Der Bauer ist allerdings früh festgelegt, und nach 3.Sf3 kann Weiß " +
      "auch Lb5+ wählen, wie in der Moskauer Variante.",
  },

  "1.e4 c5 2.Nc3 e6": {
    strategy:
      "Öffnet den Läufer f8 und bereitet ...d5 vor. Gegen 3.g3 oder 3.f4 kann Schwarz sofort " +
      "mit ...d5 zuschlagen; lenkt Weiß mit Sf3 und d4 in einen Offenen Sizilianer ein, " +
      "erreicht Schwarz mit ...a6 oder ...Sc6 Strukturen der Paulsen- oder der " +
      "Taimanow-Variante. Der Preis ist, dass der Bauer e6 dem Läufer c8 vorerst die " +
      "Diagonale zum Königsflügel versperrt.",
  },

  "1.e4 c5 2.Nc3 Qc7": {
    strategy:
      "Strebt Aufbauten der Taimanow- und der Paulsen-Variante an: Es folgen ...Sc6, ...e6 " +
      "und ...a6, und viele Varianten gehen in diese Sizilianer über. Die Dame wird jedoch " +
      "festgelegt, bevor eine Leichtfigur entwickelt ist, und Sb5 oder Sd5 können sie sofort " +
      "angreifen. Das schlichte 2...Sc6 erreicht dieselben Strukturen, ohne die Dame so " +
      "auszusetzen.",
  },

  "1.e4 c5 2.Nc3 a6": {
    strategy:
      "Bereitet ...b5 und ...Lb7 vor und nimmt dem weißen Springer das Feld b5. Gegen 3.g3 " +
      "kann Schwarz sofort mit ...b5 am Damenflügel Raum gewinnen; nach 3.Sf3 und d4 entsteht " +
      "ein Offener Sizilianer, in dem ...a6 zu den Strukturen der Najdorf- und der " +
      "Paulsen-Variante passt. Der Zug ist seltener als ...Sc6, ...e6 oder ...d6 und " +
      "entwickelt keine Figur.",
  },

  "1.e4 c5 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, der über die lange Diagonale auf e4 zielt. Der Zug tut wenig für " +
      "d4 und e5, und dieselbe Idee nach 2.Sf3 gilt als minderwertig, weil sie Schwarz auf " +
      "...b6 festlegt statt auf die aggressiveren Aufbauten mit ...b5.",
  },

  "1.e4 c5 2.Nc3 e5": {
    strategy:
      "Stellt Bauern auf c5 und e5 gegen d4 und führt zu einer Wiener Partie mit " +
      "eingeschobenem ...c5. Mit dem e-Bauern auf e5 kann weder der c- noch der e-Bauer d5 " +
      "decken, sodass sich ein weißer Springer mit Sd5 dort festsetzen kann. Der Zug verlässt " +
      "die übliche sizilianische Struktur und ist seltener als ...Sc6, ...e6 oder ...d6.",
  },

  "1.e4 c5 2.Nc3 g6": {
    strategy:
      "Steuert mit ...Lg7 und ...Sc6 einen Hyper-beschleunigten Drachen an. Geht Weiß mit Sf3 " +
      "und d4 in einen Offenen Sizilianer über, verhindert der Springer auf c3 den " +
      "Maróczy-Aufbau mit c4. Der Zug ist seltener als ...Sc6, ...e6 oder ...d6 und legt " +
      "Schwarz auf das Fianchetto fest, bevor Weiß seinen Plan gezeigt hat.",
  },

  "1.e4 c5 2.Nc3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er weder um d4 noch um e5 kämpft und erst über " +
      "...Sc7 ein brauchbares Feld erreicht. Weiß kann auch sofort mit Lxa6 bxa6 schlagen, " +
      "was Schwarz einen Doppelbauern auf der a-Linie einbringt, ihm aber das Läuferpaar " +
      "überlässt.",
  },

  "1.e4 c5 2.Nc3 Qb6": {
    strategy:
      "Bringt die Dame heraus, bevor eine Leichtfigur entwickelt ist, und droht nichts, weil " +
      "der Läufer c1 den Bauern b2 deckt. 3.Sd5 oder 3.Sa4 greift die Dame sofort an, und " +
      "Weiß gewinnt Zeit, während sie zurückweicht.",
  },

  "1.e4 c5 2.Nc3 Qa5": {
    strategy:
      "Stellt die Dame nach a5, bevor eine Leichtfigur entwickelt ist. Sie zielt auf c3, doch " +
      "b- und d-Bauer decken den Springer, und der Bauer d2 sperrt die Diagonale nach e1, " +
      "sodass Weiß sich mit Sf3, Lc4 und O-O ungestört entwickelt.",
  },

  "1.e4 c5 2.Nc3 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo er f5 und g4, aber kein Zentrumsfeld im Blick hat. " +
      "Sobald d3 oder d4 gespielt ist, verschafft Lxh6 gxh6 Schwarz einen Doppelbauern.",
  },

  "1.e4 c5 2.Nc3 Nf6": {
    strategy:
      "Greift e4 an, läuft aber in 3.e5, denn auf jedem Feld außer g8 geht der Springer durch " +
      "Sxd5, Sxe4, Dxg4 oder Dxh5 verloren. Schwarz muss zurückziehen und hat zwei Tempi " +
      "verbraucht, während Weiß Raum gewinnt.",
  },

  "1.e4 c5 2.Nc3 a5": {
    strategy:
      "Nimmt Weiß das Feld b4, tut aber nichts für Zentrum und Entwicklung. Der a-Bauer kann " +
      "b5 nicht mehr decken, sodass ein weißer Springer dort nicht mehr mit ...a6 vertrieben " +
      "werden kann.",
  },

  "1.e4 c5 2.Nc3 d5": {
    strategy:
      "Bietet einen Bauern an, denn nach 3.exd5 kann die Dame nicht zurückschlagen: 3...Dxd5 " +
      "verliert sie gegen Sxd5. Nach 3...Sf6 behält Weiß mit Lb5+ und Lc4 den Mehrbauern, und " +
      "Schwarz hat dafür wenig vorzuweisen.",
  },

  "1.e4 c5 2.Nc3 f6": {
    strategy:
      "Nimmt dem Königsspringer das Feld f6 und öffnet die Diagonale von h5 zum König auf e8. " +
      "Der Bauer deckt e5, tut aber nichts für die Entwicklung.",
  },

  "1.e4 c5 2.Nc3 h6": {
    strategy:
      "Ein Randbauernzug, der nichts für Zentrum und Entwicklung tut und Weiß freie Hand " +
      "lässt, mit Sf3, g3 oder f4 aufzubauen.",
  },

  "1.e4 c5 2.Nc3 h5": {
    strategy:
      "Rückt den h-Bauern ohne jeden Zweck für Entwicklung oder Zentrum vor und lockert g5 " +
      "und den Königsflügel. Weiß setzt in aller Ruhe mit Sf3 und d4 fort.",
  },

  "1.e4 c5 2.Nc3 b5": {
    strategy:
      "Gibt einen Bauern weg: 3.Sxb5 oder 3.Lxb5 nimmt ihn, und ...a6 und ...Lb7 holen etwas " +
      "Zeit zurück, aber nicht den Bauern.",
  },

  "1.e4 c5 2.Nc3 f5": {
    strategy:
      "Gibt einen Bauern her: 3.exf5 nimmt ihn, und der Läufer c8 kann wegen des Bauern d7 " +
      "nicht zurückschlagen. Die geöffnete Diagonale von h5 nach e8 erlaubt zudem Dh5+ gegen " +
      "den schwarzen König.",
  },

  "1.e4 c5 2.Nc3 g5": {
    strategy:
      "Schwächt den ganzen Königsflügel und kann den Bauern nicht halten: Nach 3.d4 cxd4 " +
      "4.Dxd4 greift die Dame den Turm h8 an, und Lxg5 folgt, während Schwarz in der " +
      "Entwicklung zurückliegt.",
  },

  "1.e4 c5 2.Nc3 c4": {
    strategy:
      "Gibt den Bauern weg: 3.Lxc4 nimmt ihn sofort und entwickelt den Läufer mit Blick auf " +
      "f7, während Schwarz den c-Bauern und damit jeden Druck auf d4 verliert.",
  },

  "1.e4 c5 2.Nf3 d6": {
    name: "Sizilianische Verteidigung: Moderne Varianten",
    background:
      "Der häufigste Zug von Schwarz nach 2.Sf3. Er ist das Tor zur Najdorf-Variante, zur " +
      "Drachenvariante, zur Scheveninger und zur Klassischen Variante, die nach 3.d4 cxd4 " +
      "4.Sxd4 Sf6 5.Sc3 entstehen.",
    strategy:
      "Bereitet ...Sf6 gegen den e-Bauern vor, ohne dass Weiß ihn nach e5 vorstoßen kann, und " +
      "hält ...e5 in Reserve. Nach 3.d4 cxd4 4.Sxd4 Sf6 5.Sc3 hat Schwarz den c-Bauern gegen " +
      "den weißen d-Bauern getauscht und spielt mit einer Bauernmehrheit im Zentrum und der " +
      "halboffenen c-Linie gegen den weißen Entwicklungsvorsprung und Raumvorteil am " +
      "Königsflügel. Die wichtigste Alternative von Weiß zu 3.d4 ist 3.Lb5+, die Moskauer " +
      "Variante.",
  },

  "1.e4 c5 2.Nf3 Nc6": {
    name: "Sizilianische Verteidigung: Altsizilianische Variante",
    background:
      "Neben 2...d6 und 2...e6 eine der drei Hauptantworten von Schwarz auf 2.Sf3. Varianten, " +
      "die mit 2...Sc6 beginnen und nicht in Varianten mit 2...d6 überleiten, haben eigene " +
      "ECO-Codes, B30–B39; die wichtigsten darunter sind die Rossolimo-, die Kalaschnikow- " +
      "und die Sweschnikow-Variante sowie die Beschleunigte Drachenvariante.",
    strategy:
      "Entwickelt den Springer zum Zentrum hin, kontrolliert d4 und e5 und bereitet wie " +
      "2...d6 ...Sf6 vor, ohne e5 zuzulassen. Nach 3.d4 cxd4 4.Sxd4 hat Schwarz weder den d- " +
      "noch den e-Bauern festgelegt und wählt zwischen 4...Sf6, 4...e6, 4...g6 und 4...e5. " +
      "Der Preis ist 3.Lb5, das den Offenen Sizilianer vermeidet und auf Lxc6 zielt, wonach " +
      "Schwarz einen Doppelbauern hat.",
  },

  "1.e4 c5 2.Nf3 e6": {
    name: "Sizilianische Verteidigung: Französische Variante",
    background:
      "Neben 2...d6 und 2...Sc6 eine der drei Hauptantworten von Schwarz auf 2.Sf3. Nach 3.d4 " +
      "cxd4 4.Sxd4 führt der Zug zur Taimanow-Variante, benannt nach Mark Taimanow, und zur " +
      "Kan-Variante, benannt nach Ilja Kan und nach Louis Paulsen auch Paulsen-Variante " +
      "genannt.",
    strategy:
      "Öffnet die Diagonale des Läufers f8, der so nach b4 oder c5 gelangen kann, und " +
      "bereitet ...d5 vor. Nach 3.d4 cxd4 4.Sxd4 behält Schwarz die Wahl zwischen 4...Sc6, " +
      "4...a6 und 4...Sf6 und entscheidet erst später, wohin Springer und Dame gehen. Der " +
      "Preis sind ein durch den Bauern e6 eingeengter Läufer c8 und ein schwaches Feld d6, " +
      "auf das Weiß mit einem Springer auf b5 zielt.",
  },

  "1.e4 c5 2.Nf3 Nf6": {
    name: "Sizilianische Verteidigung: Nimzowitsch-Variante",
    background:
      "Benannt nach Aron Nimzowitsch, der sie als eine von zwei provokativen Varianten der " +
      "Sizilianischen Verteidigung einführte; sie ist auch als " +
      "Nimzowitsch-Rubinstein-Variante bekannt. Nach 3.e5 Sd5 ähnelt sie der " +
      "Aljechin-Verteidigung.",
    strategy:
      "Greift e4 sofort an, doch Weiß gewinnt mit 3.e5 Sd5 4.Sc3 Raum und Zeit. Nach 4...Sxc3 " +
      "5.dxc3 verliert 5...b6 wegen 6.e6, und die Hauptvariante 4...e6 5.Sxd5 exd5 6.d4 Sc6 " +
      "7.dxc5 Lxc5 8.Dxd5 führt zu scharfem Spiel, das Weiß begünstigt.",
  },

  "1.e4 c5 2.Nf3 a6": {
    name: "Sizilianische Verteidigung: O'Kelly-Variante",
    background:
      "Benannt nach dem belgischen Großmeister Albéric O'Kelly de Galway, der zwischen 1937 " +
      "und 1959 dreizehnmal die belgische Meisterschaft gewann.",
    strategy:
      "Nimmt dem weißen Springer und Läufer das Feld b5, sodass der Springer nach 3.d4 cxd4 " +
      "4.Sxd4 Sf6 5.Sc3 e5 nicht nach b5 kann, und gegen 6.Sb3 oder 6.Sf3 gleicht Schwarz mit " +
      "6...Lb4 und eventuell ...d5 aus. Weiß umgeht die Idee mit 3.c3 oder 3.c4, wonach ...a6 " +
      "ein Tempo für wenig gekostet hat.",
  },

  "1.e4 c5 2.Nf3 g6": {
    name: "Sizilianische Verteidigung: Hyper-beschleunigter Drache",
    strategy:
      "Bereitet ...Lg7 vor und zielt auf den Beschleunigten Drachen, der nach 3.d4 cxd4 " +
      "4.Sxd4 Sc6 durch Zugumstellung entsteht. Gegen das frühe Fianchetto hat Weiß " +
      "zusätzliche Möglichkeiten: 4.Dxd4 zielt über die lange Diagonale auf den Turm h8, 3.c3 " +
      "führt zu einer Stellung nach Art der Alapin-Variante, und 3.c4 errichtet den " +
      "Maróczy-Aufbau.",
  },

  "1.e4 c5 2.Nf3 Qc7": {
    name: "Sizilianische Verteidigung: Quinteros-Variante",
    background:
      "Mitunter nach dem argentinischen Großmeister Miguel Quinteros benannt, der den Zug " +
      "1971 gegen Henrique Mecking ins erstklassige Turnierschach einführte.",
    strategy:
      "Kontrolliert von c7 aus e5 und hält ...e6, ...Sc6 und ...a6 offen; nach 3.d4 cxd4 " +
      "4.Sxd4 führt der Zug oft in die Taimanow- oder die Kan-Variante über. Weiß kann " +
      "stattdessen 3.c3 im Stil der Alapin-Variante spielen, wonach die Dame auf c7 schlecht " +
      "stehen kann.",
  },

  "1.e4 c5 2.Nf3 b6": {
    name: "Sizilianische Verteidigung: Katalymow-Variante",
    background:
      "Benannt nach Boris Katalymow, einem sowjetischen und später kasachischen Spieler und " +
      "mehrfachen Meister Kasachstans. Der französische Großmeister Christian Bauer bevorzugt " +
      "sie und spielte damit 2005 remis gegen Magnus Carlsen.",
    strategy:
      "Bereitet ...Lb7 vor, um über die lange Diagonale Druck auf e4 auszuüben, legt Schwarz " +
      "aber auf ...b6 statt des aktiveren ...b5 fest, und die weißen Figuren können das Feld " +
      "b5 nutzen, wenn Schwarz es nicht deckt. Nach 3.d4 cxd4 4.Sxd4 Lb7 5.Sc3 a6 6.Ld3 " +
      "behält Weiß einen leichten Vorteil.",
  },

  "1.e4 c5 2.Nf3 Qb6": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel; sie zielt auf b2 und, sobald ...cxd4 " +
      "die Diagonale geöffnet hat, auf das Feld d4. Weiß entwickelt sich mit Sc3, gewinnt mit " +
      "Sa4 oder Sd5 Zeit gegen die Dame und behält einen Entwicklungsvorsprung.",
  },

  "1.e4 c5 2.Nf3 Qa5": {
    name: "Sizilianische Verteidigung: Mongoose-Variante",
    strategy:
      "Fesselt den Bauern d2 an den König, sodass 3.d4 vorerst nicht erlaubt ist, doch Weiß " +
      "verstellt die Diagonale einfach mit 3.Sc3 oder 3.c3 und spielt danach d4. Die Dame " +
      "bewirkt dann auf a5 wenig, und Schwarz liegt in der Entwicklung zurück.",
  },

  "1.e4 c5 2.Nf3 Na6": {
    name: "Zukertort-Verteidigung: Sizilianische Springervariante",
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c7 im Blick hat, aber nicht um das " +
      "Zentrum kämpft. Weiß kann ihn ignorieren und 3.d4 spielen oder ihn mit 3.Lxa6 bxa6 " +
      "schlagen, wonach Schwarz einen Doppelbauern auf der a-Linie hat.",
  },

  "1.e4 c5 2.Nf3 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo e4 bereits f5 kontrolliert, sodass er kein aktives " +
      "Feld hat und das Zentrum unbestritten bleibt. Weiß besetzt das Zentrum mit 3.d4 cxd4 " +
      "4.Sxd4.",
  },

  "1.e4 c5 2.Nf3 a5": {
    strategy:
      "Verbraucht ein Tempo für den a-Bauern und gibt das Feld b5 endgültig auf, da kein " +
      "schwarzer Bauer es mehr decken kann. Nach 3.d4 cxd4 4.Sxd4 kann sich dort ein weißer " +
      "Springer oder Läufer festsetzen, während Schwarz in der Entwicklung zurückliegt.",
  },

  "1.e4 c5 2.Nf3 h6": {
    name: "Sizilianische Verteidigung: Bücker-Variante",
    strategy:
      "Nimmt den weißen Figuren das Feld g5, verbraucht aber ein Tempo für einen Bauernzug, " +
      "der weder dem Zentrum noch der Entwicklung dient. Weiß spielt 3.d4 cxd4 4.Sxd4 und hat " +
      "das freiere Spiel.",
  },

  "1.e4 c5 2.Nf3 h5": {
    strategy:
      "Verbraucht ein Tempo für den Randbauern und schwächt g5 und den Königsflügel, während " +
      "Zentrum und Entwicklung unberührt bleiben. Weiß besetzt mit d4 das Zentrum und " +
      "entwickelt sich in aller Ruhe.",
  },

  "1.e4 c5 2.Nf3 f6": {
    strategy:
      "Unterstützt ein späteres ...e5, nimmt aber dem Springer das Feld f6, schwächt die " +
      "Diagonale e8-h5 und den König und entwickelt nichts. Weiß besetzt das Zentrum mit " +
      "3.d4.",
  },

  "1.e4 c5 2.Nf3 d5": {
    strategy:
      "Greift das Zentrum sofort an, doch Weiß gewinnt ein Tempo: 3.exd5 Dxd5 4.Sc3 greift " +
      "die Dame an, die zurückweichen muss, während Weiß mit d4 und einem " +
      "Entwicklungsvorsprung fortsetzt.",
  },

  "1.e4 c5 2.Nf3 e5": {
    strategy:
      "Bietet den e-Bauern an: 3.Sxe5 schlägt ihn, und Schwarz kann es mit ...De7 gegen den " +
      "Springer und e4 versuchen, gewinnt den Bauern aber nur unter Zeitverlust und mit einer " +
      "dauerhaften Schwäche auf d5 zurück.",
  },

  "1.e4 c5 2.Nf3 b5": {
    name: "Sizilianische Verteidigung: Polnisches Gambit",
    strategy:
      "Gibt einen Bauern: 3.Lxb5 schlägt ihn über die offene Diagonale f1-a6, und ...Lb7 " +
      "gegen e4 oder ...Da5 gegen den Läufer bietet keine ausreichende Kompensation.",
  },

  "1.e4 c5 2.Nf3 g5": {
    strategy:
      "Stellt den g-Bauern ein: 3.Sxg5 gewinnt ihn, da nichts zurückschlagen kann, denn der " +
      "Läufer c8 und die Dame sind beide durch eigene Bauern verstellt. Der geschwächte " +
      "Königsflügel bietet keine Kompensation.",
  },

  "1.e4 c5 2.Nf3 f5": {
    name: "Sizilianische Verteidigung: Brüsseler Gambit",
    strategy:
      "Bietet den f-Bauern an: 3.exf5 gewinnt ihn, da der Bauer d7 den Läufer c8 verstellt, " +
      "und ihn mit ...d5 und ...Lxf5 zurückzugewinnen kostet Zeit. Die Diagonale e8-h5 zum " +
      "schwarzen König bleibt dauerhaft offen.",
  },

  "1.e4 c5 2.Nf3 c4": {
    strategy:
      "Stellt den c-Bauern auf ein Feld, auf dem er nicht gedeckt werden kann: 3.Lxc4 gewinnt " +
      "ihn über die offene Diagonale und entwickelt zugleich den Läufer.",
  },
};
