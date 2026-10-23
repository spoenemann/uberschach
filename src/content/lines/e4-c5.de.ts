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
};
