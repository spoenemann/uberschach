import type { OpeningTexts } from "../book.ts";

// German prose for e4.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.e4 e5": {
    strategy:
      "Besetzt das Zentrum mit einem Bauern und öffnet Dame und Königsläufer die Linien, " +
      "spiegelbildlich zum Zug von Weiß. Schwarz strebt schnelle Entwicklung mit ...Sc6 und " +
      "...Sf6 und eine frühe Rochade an, während der Bauer e5 zum Angriffsziel wird, meist " +
      "schon durch 2.Sf3. Das Spiel ist oft offen und taktisch, und Weiß behält die " +
      "Initiative des Anzugs.",
  },

  "1.e4 c5": {
    strategy:
      "Kämpft von der Flanke aus um d4, statt den Zug von Weiß zu spiegeln. Nach Sf3 und d4 " +
      "tauscht Schwarz den c-Bauern gegen den weißen d-Bauern und erhält so eine " +
      "Bauernmehrheit im Zentrum und die halboffene c-Linie. Weiß hat meist den " +
      "Entwicklungsvorsprung und greift am Königsflügel an, Schwarz kontert am Damenflügel, " +
      "und die unausgeglichene Struktur gibt beiden Seiten Gewinnchancen.",
  },

  "1.e4 e6": {
    strategy:
      "Bereitet ...d5 mit Unterstützung des e-Bauern vor und nimmt eine etwas beengte " +
      "Stellung für eine widerstandsfähige Struktur in Kauf. Nach 2.d4 d5 greift Schwarz das " +
      "weiße Zentrum mit ...c5 an und, gegen einen Bauern auf e5, mit ...f6, während der " +
      "Läufer c8 vom Bauern e6 eingesperrt ist und oft über ...b6 und ...La6 abgetauscht oder " +
      "über d7 umgruppiert werden muss. Das Ergebnis ist ein gesundes Spiel mit klaren " +
      "Plänen, um den Preis einer gewissen Passivität.",
  },

  "1.e4 c6": {
    strategy:
      "Bereitet ...d5 vor und lässt dem Läufer c8 den Weg nach f5 oder g4 frei, bevor ...e6 " +
      "folgt, sodass Schwarz eine gesunde Bauernstruktur ohne passiven weißfeldrigen Läufer " +
      "erhält. Der Preis ist Zeit: Der Springer verliert sein natürliches Feld c6, und der " +
      "Hebel ...c5 kostet den c-Bauern einen zweiten Zug. Weiß erhält meist mehr Raum und " +
      "freiere Entwicklung, während Schwarz auf eine solide Struktur mit wenigen Schwächen " +
      "setzt.",
  },

  "1.e4 d5": {
    strategy:
      "Greift e4 sofort an und tauscht nach 2.exd5 den schwarzen d-Bauern gegen den weißen " +
      "e-Bauern. Das Zurückschlagen mit der Dame kostet nach 3.Sc3 Zeit, während 2...Sf6 den " +
      "Bauern einen Zug später zurückgewinnt, sofern Weiß ihn nicht mit 3.c4 zu halten " +
      "versucht. Schwarz erhält ein offenes Spiel und eine leichte Entwicklung, " +
      "typischerweise mit ...c6 und ...Lf5, auf Kosten von Tempi und etwas Raum.",
  },

  "1.e4 d6": {
    strategy:
      "Bereitet ...Sf6 und ...g6 vor und lädt Weiß ein, mit d4 und Sc3 ein breites Zentrum " +
      "aufzubauen, das Schwarz dann mit ...c5 oder ...e5 und dem fianchettierten Königsläufer " +
      "untergräbt. Der Aufbau ist flexibel und lässt viele Bauernstrukturen zu, doch Weiß " +
      "erhält Raum und Angriffschancen, wenn Schwarz passiv reagiert.",
  },

  "1.e4 Nf6": {
    strategy:
      "Greift e4 sofort an und lädt zu 2.e5 ein, in der Hoffnung, dass die vorgerückten " +
      "Bauern zu Angriffszielen werden. Nach 2...Sd5 kann Weiß den Springer mit c4 vertreiben " +
      "und mit d4 und sogar f4 ein breites Bauernzentrum errichten, während Schwarz es mit " +
      "...d6 und oft ...c5 oder ...Lg4 angreift. Das Spiel ist zweischneidig: Weiß gewinnt " +
      "Raum und Tempi, Schwarz erhält Gegenspiel gegen überdehnte Bauern.",
  },

  "1.e4 g6": {
    strategy:
      "Bereitet ...Lg7 vor, um das weiße Zentrum aus der Ferne anzugreifen, und hält ...d6, " +
      "...Sf6 und ...c6 in Reserve, bis Weiß sich festlegt. Nach 2.d4 Lg7 nimmt Schwarz " +
      "weniger Raum für einen flexiblen, hypermodernen Aufbau in Kauf und sucht Gegenspiel " +
      "mit ...c5 oder ...e5. Die Gefahr ist eine passive Stellung, wenn Weiß ein großes " +
      "Zentrum aufbaut und Schwarz nicht rechtzeitig zurückschlägt.",
  },

  "1.e4 Nc6": {
    name: "Nimzowitsch-Verteidigung",
    background:
      "Benannt nach Aron Nimzowitsch, der sie erfand und auf 2.d4 meist mit 2...d5 " +
      "antwortete. Kasparow und Keene schrieben, sie sei „nie ganz als verlässliche Eröffnung " +
      "anerkannt“ worden, hielten sie aber für gesund.",
    strategy:
      "Entwickelt sofort einen Springer und lädt zum Bauernzentrum ein: Nach 2.d4 antwortet " +
      "Schwarz mit ...d5 oder ...e5, und 2.Sf3 e5 führt in ein offenes Spiel über. Der " +
      "Springer blockiert den c-Bauern, sodass die üblichen Hebel ...c6 und ...c5 fehlen, und " +
      "nach 2.d4 d5 3.e5 behält Weiß mehr Raum. Gesund, aber Weiß hat das leichtere Spiel.",
  },

  "1.e4 b6": {
    name: "Owen-Verteidigung",
    background:
      "Benannt nach John Owen, einem englischen Pfarrer und starken Amateur des 19. " +
      "Jahrhunderts, der sie 1858 in zwei Partien gegen Paul Morphy spielte und eine davon " +
      "gewann, die andere verlor. Auf Meisterebene blieb sie selten, bis Bent Larsen und " +
      "Michael Basman sie in den 1970er-Jahren aufgriffen.",
    strategy:
      "Bereitet ...Lb7 vor, um Druck auf e4 und die lange Diagonale auszuüben, überlässt Weiß " +
      "aber das Zentrum: Nach 2.d4 Lb7 3.Ld3 ist der Bauer e4 gedeckt, und Schwarz setzt " +
      "gegen ein breites weißes Zentrum mit ...e6, ...c5 und ...Sf6 fort. Die Theorie hält " +
      "den Zug für unzuverlässig, aber nicht für widerlegt, weil der Druck des Läufers den " +
      "abgegebenen Raum selten aufwiegt.",
  },

  "1.e4 a6": {
    name: "St.-George-Verteidigung",
    background:
      "Die erste bekannte Partie mit 1.e4 a6 war eine Simultanpartie am 11. Dezember 1868, in " +
      "der der englische Amateur J. Baker Wilhelm Steinitz besiegte. Tony Miles schlug damit " +
      "Anatoli Karpow bei der Mannschaftseuropameisterschaft 1980 in Skara; danach hieß sie " +
      "auch Birmingham-Verteidigung, nach Miles' Heimatstadt.",
    strategy:
      "Bereitet ...b5 und ...Lb7 vor, um das Zentrum von der Flanke aus anzugreifen, und hält " +
      "die Wahl zwischen ...e6, ...d5 und ...Sf6 offen. Weiß nimmt mit 2.d4 einfach Raum, und " +
      "der langsame Zug des a-Bauern braucht ...b5, um sein Tempo zu rechtfertigen. Gesund " +
      "genug, aber die verlorene Zeit lässt Schwarz etwas schlechter stehen.",
  },

  "1.e4 h6": {
    name: "Carr-Verteidigung",
    background:
      "Die Verteidigung wird in Unorthodox Chess Openings erwähnt, und sowohl Michael Basman " +
      "als auch Magnus Carlsen haben sie gespielt.",
    strategy:
      "Verwendet ein Tempo auf einen Randbauern, um Lg5 zu verhindern und ...g5 " +
      "vorzubereiten, tut aber nichts für Zentrum und Entwicklung. Nach 2.d4 hat Weiß im " +
      "Zentrum freie Hand, und ein folgendes ...g5 schwächt zusätzlich nur den Königsflügel.",
  },

  "1.e4 Na6": {
    name: "Lemming-Verteidigung",
    strategy:
      "Stellt den Springer an den Rand, wo er nichts für das Zentrum tut und mit Lxa6 bxa6 " +
      "abgetauscht werden kann, was die a-Bauern verdoppelt. Weiß besetzt mit d4 und Sf3 das " +
      "Zentrum, während der Springer noch ein brauchbares Feld sucht.",
  },

  "1.e4 Nh6": {
    name: "Adams-Verteidigung",
    strategy:
      "Stellt den Springer an den Rand, wo er f5 und g4 kontrolliert, aber zum Ziel wird: " +
      "Nach d4 kann der Läufer c1 ihn mit Lxh6 gxh6 schlagen und die schwarzen " +
      "Königsflügelbauern zerrütten. Außerdem verliert Schwarz Zeit, ohne dem Zentrum zu " +
      "helfen.",
  },

  "1.e4 a5": {
    name: "Ware-Verteidigung",
    background:
      "Auch als Corn-Stalk-Verteidigung bekannt. Preston Ware, ein amerikanischer Spieler, " +
      "der oft ungewöhnliche Eröffnungen wählte, spielte sie von 1880 bis 1882 in elf " +
      "überlieferten Turnierpartien, von denen er vier gewann und sieben verlor.",
    strategy:
      "Verwendet ein Tempo auf einen Randbauern, der weder das Zentrum angreift noch eine " +
      "Figur entwickelt, und schwächt b5. Weiß besetzt mit 2.d4 und 3.Sf3 das Zentrum, und " +
      "Schwarz hat für die verlorene Zeit keinen Ausgleich.",
  },

  "1.e4 b5": {
    name: "O'Neill-Gambit",
    strategy:
      "Bietet den b-Bauern an: 2.Lxb5 gewinnt ihn sofort, und die Kompensation, ...Lb7 gegen " +
      "e4 und die halboffene b-Linie, reicht nicht, denn Weiß deckt e4 mit Sc3 oder De2 und " +
      "bleibt einen sauberen Bauern vorn.",
  },

  "1.e4 f6": {
    name: "Barnes-Verteidigung",
    background:
      "Benannt nach Thomas Wilson Barnes, der damit 1858 Paul Morphy besiegte, obwohl sie als " +
      "klar unterlegen gilt.",
    strategy:
      "Nimmt dem Königsspringer sein natürliches Feld f6 und schwächt die Diagonale e8–h5 und " +
      "den König. Weiß besetzt mit 2.d4 das Zentrum und entwickelt sich frei, während Schwarz " +
      "keine sinnvolle Fortsetzung hat.",
  },

  "1.e4 f5": {
    name: "Duras-Gambit",
    background:
      "Die Linie wurde dreimal in einem Schaukampf zwischen Ossip Bernstein und Oldřich Duras " +
      "gespielt, nach dem das Gambit benannt ist.",
    strategy:
      "Bietet einen Bauern an: Nach 2.exf5 erhält Schwarz mit ...Sf6 einen kleinen " +
      "Entwicklungsvorsprung, aber sonst wenig dafür, und die Diagonale e8–h5 und der König " +
      "bleiben geschwächt.",
  },

  "1.e4 g5": {
    name: "Borg-Verteidigung",
    background:
      "Der Name ist „Grob“ rückwärts gelesen. Michael Basman spielte sie oft, und sie heißt " +
      "auch Basman-Verteidigung; laut Modern Chess Openings steht Schwarz nur etwas " +
      "schlechter, obwohl der Zug den Königsflügel stark schwächt.",
    strategy:
      "Gewinnt Raum am Königsflügel um den Preis einer dauerhaften Schwäche: Nach 2.d4 greift " +
      "der Läufer c1 sofort den Bauern g5 an, und die Felder um den schwarzen König bleiben " +
      "für den Rest der Partie geschwächt.",
  },

  "1.e4 h5": {
    name: "Goldsmith-Verteidigung",
    background:
      "Sie heißt auch Pickering-Verteidigung und ist die Kádas-Eröffnung (1.h4) mit " +
      "vertauschten Farben. Modern Chess Openings tut sie ab: „Andere Verteidigungen wie " +
      "1...h5 werden nicht betrachtet, da sie einfach zu schlecht sind und keiner Diskussion " +
      "bedürfen.“",
    strategy:
      "Verschenkt ein Tempo und schwächt g5 und den ganzen Königsflügel ohne Gegenwert: Der " +
      "Bauer tut nichts für Zentrum und Entwicklung, und Weiß besetzt mit 2.d4 einfach das " +
      "Zentrum.",
  },

  "1.e4": {
    name: "Königsbauernspiel",
    background:
      "Der meistgespielte Eröffnungszug. Bobby Fischer nannte ihn in „Meine 60 denkwürdigen " +
      "Partien“ (1969) „best by test“.",
  },
};
