import type { OpeningTexts } from "../book.ts";

// German prose for e4-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.e4 d5 2.exd5": {
    strategy:
      "Schlägt den Bauern und stellt Schwarz vor die Wahl, wie er ihn zurückgewinnt: " +
      "positionell mit …Dxd5, worauf Sc3 ein Tempo an der Dame gewinnt, oder taktisch mit " +
      "…Sf6, worauf d4 den Springer zurückschlagen lässt und c4 ihn dann von d5 vertreibt. In " +
      "beiden Fällen hat Weiß den Entwicklungsvorsprung und mehr Raum im Zentrum. Der Zug " +
      "kommt auf jedem Niveau in der überwiegenden Mehrheit der Partien vor und gilt " +
      "allgemein als einziger zweiter Zug, der Weiß ernsthafte Aussichten auf Vorteil bietet.",
  },

  "1.e4 d5 2.Nc3": {
    name: "Dunst-Eröffnung",
    background:
      "Benannt nach Ted A. Dunst (1907–1985), einem New Yorker Meister, der 1.Sc3 analysierte " +
      "und spielte, wodurch die Eröffnung in den USA ihren verbreitetsten Namen erhielt. " +
      "Dieselbe Stellung entsteht nach 1.Sc3 d5 2.e4; Blackburne spielte 1.Sc3 gegen Josef " +
      "Noa im Turnier London 1883.",
    strategy:
      "Deckt e4 und entwickelt, eine gesunde, aber selten gespielte Wahl, die den " +
      "Hauptvarianten ausweicht. Schwarz kann mit …d4 Raum mit Tempo gewinnen oder auf e4 " +
      "schlagen und …Lf5 spielen, eine Art Caro-Kann, in der das Tempo für …c6 gespart ist. " +
      "In beiden Fällen erhält Schwarz ein bequemes Spiel, und Weiß verzichtet auf die " +
      "Chancen, die exd5 bietet.",
  },

  "1.e4 d5 2.d4": {
    name: "Blackmar-Diemer-Gambit",
    background:
      "Ging aus dem Blackmar-Gambit hervor, benannt nach Armand Blackmar, einem Spieler aus " +
      "New Orleans im späten 19. Jahrhundert, der als Erster eine Analyse von 1.d4 d5 2.e4 " +
      "dxe4 3.f3 veröffentlichte. Ignatz von Popiel brachte 1889 den Zug 3.Sc3 auf, und der " +
      "deutsche Meister Emil Josef Diemer (1908–1990) machte die moderne Fortsetzung 3.Sc3 " +
      "Sf6 4.f3 populär. Es kann auch aus der Skandinavischen Verteidigung mit 2.d4 " +
      "entstehen.",
    strategy:
      "Bietet den Bauern e4 für schnelle Entwicklung an: Nach 2.d4 dxe4 3.Sc3 Sf6 4.f3 spielt " +
      "Weiß mit einem Bauern weniger auf offene Linien und Angriff. Die Theorie kennt für " +
      "Schwarz mehrere Wege zum Ausgleich, daher ist das Gambit auf höchstem Niveau fast nie " +
      "zu sehen. Schwarz kann es auch mit …e6, …c6 oder …Sc6 ablehnen und in die " +
      "Französische, die Caro-Kann- oder die Nimzowitsch-Verteidigung übergehen.",
  },

  "1.e4 d5 2.Nf3": {
    name: "Tennison-Gambit",
    background:
      "Benannt nach Otto Mandrup Tennison (1834–1909), einem in Dänemark geborenen Amateur, " +
      "der 1854 in die USA übersiedelte, in den Schachklubs von New Orleans spielte und als " +
      "Erster die Eröffnung gründlich untersuchte. Es heißt auch Lemberg-, Lwiw- oder " +
      "Polnisches Gambit, und 1.Sf3 d5 2.e4 führt zur selben Stellung.",
    strategy:
      "Opfert den Bauern e4 für schnelles Figurenspiel: Nach 2.Sf3 dxe4 3.Sg5 will Weiß ihn " +
      "zurückgewinnen oder f7 angreifen. Schwarz behält den Bauern mit …Lf5 oder gibt ihn mit " +
      "…e5 zurück und steht in beiden Fällen besser.",
  },

  "1.e4 d5 2.e5": {
    strategy:
      "Gewinnt Raum, gibt aber die Spannung im Zentrum auf und stellt Schwarz vor keine " +
      "Probleme. Schwarz entwickelt den Läufer c8 mit …Lf5 oder …Lg4 vor die Bauernkette und " +
      "spielt dann …e6 und …c5, eine günstige französische Struktur, in der der Bauer e5 " +
      "ständig Deckung braucht.",
  },

  "1.e4 d5 2.c3": {
    strategy:
      "Bereitet d4 vor und öffnet die Diagonale d1–a4, lässt aber e4 angegriffen. Nach 2.c3 " +
      "dxe4 3.Da4+ c6 4.Dxe4 Sf6 ist der Bauer zurück, doch die Dame wird erneut vertrieben, " +
      "und Schwarz entwickelt sich frei.",
  },

  "1.e4 d5 2.c4": {
    strategy:
      "Greift d5 ein zweites Mal an, gibt aber den Bauern e4 auf: Nach 2.c4 dxe4 versperrt " +
      "der Bauer c4 die vierte Reihe, sodass Da4+ e4 nicht zurückgewinnt, und Weiß spielt mit " +
      "einem Bauern weniger. Schwarz kann auch mit …d4 Raum gewinnen.",
  },

  "1.e4 d5 2.d3": {
    strategy:
      "Deckt e4 solide, versperrt aber die Diagonale des Läufers f1. Nach 2.d3 dxe4 3.dxe4 " +
      "Dxd1+ 4.Kxd1 verliert Weiß das Rochaderecht für eine harmlose Stellung ohne Damen, und " +
      "Schwarz entwickelt sich mühelos mit …Sf6 und …e5.",
  },

  "1.e4 d5 2.f3": {
    strategy:
      "Stützt e4, nimmt aber dem Königsspringer das Feld f3 und öffnet die Diagonale e1–h4 " +
      "zum König. Nach 2.f3 dxe4 3.fxe4 e5 ist auf der offenen Diagonale schon …Dh4+ möglich, " +
      "und Weiß hat seinen König umsonst geschwächt.",
  },

  "1.e4 d5 2.Qe2": {
    strategy:
      "Deckt e4 mit der Dame, die den Läufer f1 einsperrt. Nach 2.De2 dxe4 3.Dxe4 Sf6 wird " +
      "die Dame sofort angegriffen und muss ein weiteres Tempo verlieren, sodass Schwarz sich " +
      "mit Tempogewinn entwickelt.",
  },

  "1.e4 d5 2.Qf3": {
    strategy:
      "Stellt die Dame nach f3, wo sie auf f7 zielt und e4 gedeckt hält, nimmt aber dem " +
      "Königsspringer sein bestes Feld. Nach 2.Df3 dxe4 3.Dxe4 Sf6 wird die Dame angegriffen, " +
      "und Schwarz hat die leichtere Entwicklung.",
  },

  "1.e4 d5 2.Bd3": {
    strategy:
      "Deckt e4, blockiert aber den d-Bauern, sodass Weiß kein Bauernzentrum mit d4 errichten " +
      "kann. Nach 2.Ld3 dxe4 3.Lxe4 Sf6 wird der Läufer angegriffen, und Schwarz gewinnt ein " +
      "Tempo.",
  },

  "1.e4 d5 2.Bb5+": {
    strategy:
      "Ein Schach, das nichts einbringt: 2.Lb5+ c6 greift den Läufer an, und 3.exd5 cxb5 gibt " +
      "ihn für einen Bauern her. Der Läufer muss zurück, während e4 weiter angegriffen ist, " +
      "und Schwarz hat das nützliche …c6 umsonst bekommen.",
  },

  "1.e4 d5 2.a3": {
    strategy:
      "Übergeht den Angriff auf e4, sodass …dxe4 glatt einen Bauern gewinnt. Der " +
      "Randbauernzug tut nichts für Entwicklung oder Zentrum.",
  },

  "1.e4 d5 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und verhindert …b5, lässt aber e4 angegriffen. Nach …dxe4 " +
      "hat Weiß einen Bauern weniger, ohne Entwicklung oder Spiel im Zentrum als Gegenwert.",
  },

  "1.e4 d5 2.b3": {
    strategy:
      "Bereitet Lb2 gegen g7 vor, lässt aber e4 hängen. Nach 2.b3 dxe4 3.Lb2 Sf6 ist die " +
      "Diagonale geschlossen, und Weiß hat nichts Greifbares für den Bauern.",
  },

  "1.e4 d5 2.b4": {
    name: "Skandinavische Verteidigung: Zilbermints-Gambit",
    strategy:
      "Spielt auf Lb2 und einen Entwicklungsvorsprung, kostet aber den Bauern e4 und lockert " +
      "den Damenflügel. Nach 2.b4 dxe4 3.Lb2 Sf6 ist die lange Diagonale versperrt, und " +
      "Schwarz hat glatt einen Bauern mehr.",
  },

  "1.e4 d5 2.f4": {
    name: "Bird-Eröffnung: Williams-Gambit",
    strategy:
      "Ein Bauernopfer, das zudem die Diagonale e1–h4 zum König öffnet. Nach 2.f4 dxe4 3.Sc3 " +
      "Sf6 behält Schwarz den Mehrbauern, und Weiß hat wenig dafür vorzuweisen.",
  },

  "1.e4 d5 2.g3": {
    strategy:
      "Bereitet Lg2 zur Unterstützung von e4 vor, aber zu langsam: …dxe4 gewinnt den Bauern " +
      "zuerst, und …Sf6 oder …Lf5 behält ihn, wenn der Läufer auf g2 ankommt.",
  },

  "1.e4 d5 2.g4": {
    strategy:
      "Übergeht den Angriff auf e4 und lockert den Königsflügel, sodass …dxe4 einen Bauern " +
      "gewinnt. Der Bauer g4 ist schwach und bindet die Dame an seine Deckung gegen …Lxg4.",
  },

  "1.e4 d5 2.h3": {
    strategy:
      "Bereitet g4 vor oder verhindert …Lg4, tut aber nichts für e4. Nach …dxe4 hat Weiß " +
      "einen Bauern weniger, und Schwarz entwickelt sich frei mit …Sf6.",
  },

  "1.e4 d5 2.h4": {
    strategy:
      "Zieht den Randbauern mit dem Gedanken an h5 vor, lässt aber e4 ungedeckt. Nach …dxe4 " +
      "hat Weiß einfach einen Bauern weniger und dazu einen gelockerten Königsflügel.",
  },

  "1.e4 d5 2.Na3": {
    strategy:
      "Ein Randspringer, der e4 ungedeckt lässt: …dxe4 gewinnt einen Bauern, und von a3 " +
      "blickt der Springer auf b5 und c4, ohne dort etwas anzugreifen.",
  },

  "1.e4 d5 2.Qg4": {
    strategy:
      "Stellt die Dame ein: 2.Dg4 Lxg4 schlägt sie, denn der Läufer c8 sieht über das frei " +
      "gewordene Feld d7 bis g4, und nichts deckt die Dame.",
  },

  "1.e4 d5 2.Qh5": {
    strategy:
      "Zielt über die fünfte Reihe auf d5, doch dieser Bauer ist gedeckt. Nach 2.Dh5 dxe4 hat " +
      "Weiß einen Bauern weniger, und …Sf6 vertreibt die Dame dann mit Tempo.",
  },

  "1.e4 d5 2.Ke2": {
    strategy:
      "Gibt die Rochade auf und stellt den König ins Zentrum, während e4 angegriffen ist. " +
      "Nach …dxe4 hat Weiß einen Bauern weniger, und der König auf e2 versperrt sowohl dem " +
      "Läufer f1 als auch der Dame die Diagonale.",
  },

  "1.e4 d5 2.Be2": {
    strategy:
      "Entwickelt den Läufer, aber nichts deckt e4. Nach …dxe4 hat Weiß einen Bauern weniger " +
      "und keine schnelle Möglichkeit, dafür Linien zu öffnen.",
  },

  "1.e4 d5 2.Bc4": {
    strategy:
      "Stellt den Läufer ein: Der Bauer d5 greift c4 und e4 zugleich an, also gewinnt 2.Lc4 " +
      "dxc4 eine Figur, und nichts kann auf c4 zurückschlagen.",
  },

  "1.e4 d5 2.Ba6": {
    strategy:
      "Zielt auf b7, doch der Läufer wird einfach geschlagen: 2.La6 bxa6 (oder …Sxa6) gewinnt " +
      "eine Figur, und nichts kann auf a6 zurückschlagen.",
  },

  "1.e4 d5 2.Nh3": {
    strategy:
      "Übergeht e4 und stellt den Springer an den Rand, wo 2.Sh3 Lxh3 3.gxh3 die Bauern am " +
      "Königsflügel zerrüttet. Schwarz kann auch einfach …dxe4 spielen und einen Bauern " +
      "gewinnen.",
  },

  "1.e4 d5 2.Ne2": {
    strategy:
      "Bereitet Sbc3 oder Sg3 gegen e4 vor, doch der Springer verstellt die Dame und den " +
      "Läufer f1. Nach 2.Se2 dxe4 3.Sbc3 f5 oder …Sf6 behält Schwarz den Mehrbauern.",
  },

  "1.e4 d5": {
    name: "Skandinavische Verteidigung",
    background:
      "Wohl die älteste überlieferte Eröffnung: Sie erscheint im katalanischen Gedicht Scachs " +
      "d'amor (um 1475) und in Lucenas Buch von 1497. Bent Larsens Sieg gegen Karpow in " +
      "Montreal 1979 verschaffte ihr neue Beliebtheit; 1995 spielte Anand sie in New York im " +
      "PCA-Weltmeisterschaftskampf gegen Kasparow, ihr erster Auftritt in einem WM-Kampf, und " +
      "2014 besiegte Carlsen damit Caruana bei der Olympiade in Tromsø.",
  },
};
