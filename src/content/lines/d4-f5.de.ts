import type { OpeningTexts } from "../book.ts";

// German prose for d4-f5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.d4 f5 2.c4": {
    strategy:
      "Gewinnt Raum und kontrolliert zusätzlich d5, bereitet Sc3 und Sf3 mit e4 als späterem " +
      "Hebel im Zentrum vor und lässt die Wahl zwischen einem Fianchetto am Königsflügel und " +
      "rascher Entwicklung offen. Nach ...Sf6 mit ...e6 oder ...g6 entstehen die üblichen " +
      "holländischen Strukturen, Weiß mit einem Aufbau wie im Damengambit. Sobald ...e6 " +
      "geschehen ist, erlaubt der frühe c-Bauer Schwarz, den Läufer von f8 mit Schach auf b4 " +
      "zu entwickeln.",
  },

  "1.d4 f5 2.g3": {
    name: "Holländische Verteidigung: Fianchetto-Angriff",
    background:
      "Die traditionelle Zugfolge gegen die Holländische Verteidigung beginnt mit 2.c4, " +
      "häufiger beginnt Weiß jedoch mit 2.g3.",
    strategy:
      "Bereitet Lg2 vor, der über die lange Diagonale um e4 kämpft; es folgen Sf3, O-O und " +
      "c4. Derselbe Aufbau taugt gegen das Leningrader System, den Stonewall und das " +
      "klassische System, sodass Weiß sich kaum festlegt, und die Rochade vor c4 nimmt " +
      "Schwarz das Schach auf b4, das ein frühes c4 erlaubt. Das Zentrum ist noch nicht " +
      "besetzt, und Schwarz wählt frei zwischen ...Sf6 mit ...e6 und ...g6.",
  },

  "1.d4 f5 2.Nf3": {
    strategy:
      "Ein flexibler Entwicklungszug, der e5 kontrolliert und d4 stützt und die Wahl zwischen " +
      "g3 mit Lg2, c4 mit Sc3 oder Lf4 mit e3 offen hält. Leningrader System, Stonewall und " +
      "klassischer Aufbau bleiben für Schwarz möglich, sodass Weiß seinen Plan nach der Wahl " +
      "von Schwarz richten kann.",
  },

  "1.d4 f5 2.Nc3": {
    name: "Holländische Verteidigung: Raphael-Variante",
    strategy:
      "Entwickelt mit Druck auf e4 und d5 und bereitet Lg5 vor, den Kern der Variante nach " +
      "2...Sf6 oder 2...d5; zudem unterstützt der Springer ein späteres e4. Weiß hält e3 und " +
      "Sf3 in Reserve. Der Nachteil ist, dass der Springer den c-Bauern blockiert, sodass ein " +
      "c4 wie im Damengambit vorerst ausscheidet.",
  },

  "1.d4 f5 2.b3": {
    strategy:
      "Bereitet Lb2 vor, der d4 deckt und auf der langen Diagonale zur Geltung kommt, sobald " +
      "der d-Bauer vorrückt oder getauscht wird, während c4, e3 und Sf3 möglich bleiben. Der " +
      "Zug ist gesund, aber langsamer als 2.Sf3 oder 2.g3, und Schwarz baut mit ...Sf6 und " +
      "...e6 ungestört die übliche holländische Struktur auf.",
  },

  "1.d4 f5 2.e3": {
    strategy:
      "Öffnet dem Läufer von f1 den Weg nach d3, wo er auf f5 zielt, und bereitet Sf3 und c4 " +
      "vor. Der Zug ist gesund, aber passiv, weil der Bauer den Läufer auf c1 einsperrt, und " +
      "Schwarz entwickelt sich mit ...Sf6 und ...e6 und wählt in Ruhe einen Stonewall- oder " +
      "einen klassischen Aufbau.",
  },

  "1.d4 f5 2.e4": {
    name: "Holländische Verteidigung: Staunton-Gambit",
    background:
      "Benannt nach Howard Staunton, der es 1846 in London gegen Bernhard Horwitz spielte. " +
      "Einst eine gefürchtete Waffe für Weiß, wird es heute nur noch selten gespielt, da " +
      "Verteidigungstechniken entwickelt wurden, die es entschärfen.",
    strategy:
      "Opfert einen Bauern für schnelle Entwicklung und Spiel gegen den schwarzen " +
      "Königsflügel, der auf der Diagonale e8-h5 geschwächt ist. Nach 2...fxe4 3.Sc3 Sf6 " +
      "4.Lg5 verliert das natürliche 4...d5? einen Bauern durch 5.Lxf6 exf6 6.Dh5+ g6 7.Dxd5, " +
      "während 4...Sc6 rasch entwickelt und den Bauern nur bei Bedarf zurückgibt. Bei genauem " +
      "Spiel bietet das Gambit Weiß bestenfalls Ausgleich.",
  },

  "1.d4 f5 2.h3": {
    name: "Holländische Verteidigung: Kortschnoi-Angriff",
    background:
      "Carl Mayet führte das Gambit mit h3 und g4 im Jahr 1839 gegen von der Lasa ein, und " +
      "von der Lasa veröffentlichte später eine Analyse dazu in der ersten Auflage des " +
      "Handbuchs des Schachspiels. Viktor Kortschnoi brachte die Variante in der Partie " +
      "Kortschnoi–Känel, Biel 1979, in die Turnierpraxis zurück.",
    strategy:
      "Bereitet g4 vor, um den schwarzen f5-Bauern aufzubrechen, ein gambitartiger Versuch " +
      "statt normaler Entwicklung. Schwarz kann mit 2...Sf6 3.g4 d5 ablehnen und steht gut, " +
      "sodass die Variante eher als Überraschungswaffe denn als empfehlenswerte Wahl taugt.",
  },

  "1.d4 f5 2.Bf4": {
    name: "Londoner System",
    background:
      "Das Londoner System verdankt seinen Namen dem Londoner Turnier von 1922, in dem es in " +
      "sieben Partien vorkam, darunter Partien von Capablanca, Aljechin und Rubinstein. James " +
      "Mason war der erste Spieler von Meisterstärke, der es regelmäßig anwandte, unter " +
      "anderem in Wien 1882, London 1883 und New York 1889.",
    strategy:
      "Entwickelt den Läufer vor die Bauernkette, deckt e5 und bereitet e3, Sf3 und Ld3 oder " +
      "c4 vor. Der Zug ist gesund, aber ruhig und nicht der anspruchsvollste, da Schwarz sich " +
      "mühelos mit ...Sf6, ...e6 und ...Le7 oder mit einem Stonewall aufstellen kann.",
  },

  "1.d4 f5 2.Bg5": {
    name: "Holländische Verteidigung: Hopton-Angriff",
    strategy:
      "Zielt über die Diagonale d8-h4 auf e7 und plant nach ...Sf6 den Abtausch Lxf6, der die " +
      "schwarzen f-Bauern verdoppelt, Schwarz aber das Läuferpaar überlässt. Mit Sorgfalt " +
      "gleicht Schwarz aus, etwa mit 2...g6, während das unvorsichtige 2...h6 3.Lh4 g5 4.Lg3 " +
      "f4 5.e3 fxg3?? 6.Dh5# erlaubt.",
  },

  "1.d4 f5 2.Nh3": {
    strategy:
      "Strebt nach f4 und eventuell d3, wo der Springer e5 kontrollieren hilft, und hält f3 " +
      "frei, sodass ein späterer Lg2 ungehindert auf e4 wirkt. Der Zug ist gesund, aber " +
      "selten, denn der Springer steht zunächst am Rand und tut noch nichts für das Zentrum, " +
      "und Schwarz entwickelt sich mit ...Sf6 und ...e6.",
  },

  "1.d4 f5 2.a3": {
    strategy:
      "Bereitet b4 und Raumgewinn am Damenflügel vor, kostet aber ein Tempo, während Schwarz " +
      "mit ...Sf6 und ...e6 entwickelt. Für das Zentrum und den Kampf um e4 tut der Zug " +
      "nichts.",
  },

  "1.d4 f5 2.a4": {
    strategy:
      "Ein langsamer Randbauernzug, der weder eine Figur entwickelt noch um e4 kämpft. Er " +
      "schwächt b4 und lässt Schwarz ungestört ...Sf6 und ...e6 spielen.",
  },

  "1.d4 f5 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 vor, doch der Bauer ist ungedeckt: Nach " +
      "...e6 greift ihn der Läufer von f8 an, und Weiß muss ein weiteres Tempo für seine " +
      "Deckung aufwenden. Unterdessen entwickelt Schwarz mit ...Sf6, während Zentrum und " +
      "Königsflügel von Weiß warten.",
  },

  "1.d4 f5 2.c3": {
    strategy:
      "Stützt d4 und öffnet der Dame die Diagonale d1-a4, nimmt aber dem Damenspringer das " +
      "Feld c3 und kämpft nicht um e4. Weiß hat ein Tempo in einen bescheidenen Zug gesteckt, " +
      "und Schwarz entwickelt sich frei mit ...Sf6 und ...e6.",
  },

  "1.d4 f5 2.f3": {
    strategy:
      "Bereitet e4 vor, schwächt aber e3 und die Diagonale g1-a7 und nimmt dem Königsspringer " +
      "das Feld f3. Nach 2...d5 oder 2...Sf6 entwickelt sich Schwarz normal, und Weiß hat " +
      "seinen Königsflügel für wenig gelockert.",
  },

  "1.d4 f5 2.f4": {
    strategy:
      "Spiegelt den schwarzen Bauernzug und kontrolliert e5, lässt aber e3 und e4 dauerhaft " +
      "ohne Bauernschutz und schwächt die Diagonale e1-h4. Schwarz entwickelt sich mit ...Sf6 " +
      "und ...e6, hat in e4 ein natürliches Feld für den Springer und steht bequem.",
  },

  "1.d4 f5 2.g4": {
    name: "Holländische Verteidigung: Krejcik-Gambit",
    background:
      "Benannt nach Josef Krejcik (1885–1957), einem österreichischen Schachmeister, " +
      "Problemkomponisten und Journalisten, der auch durch die als „Unsterbliche des Dr. " +
      "Krejcik“ bekannte Partie gegen Johann Berger in Karlsbad 1911 in Erinnerung geblieben " +
      "ist.",
    strategy:
      "Bietet den g-Bauern an, um den f5-Bauern von der Kontrolle über e4 abzulenken. Nach " +
      "2...fxg4 kann Schwarz ...d5 folgen lassen, das e4 unter Kontrolle hält und dem Läufer " +
      "von c8 die Deckung von g4 ermöglicht, und Weiß hat Mühe, den Bauern zurückzugewinnen.",
  },

  "1.d4 f5 2.h4": {
    strategy:
      "Investiert ein Tempo in einen Flügelbauern, der weder dem Zentrum noch der Entwicklung " +
      "dient. Der Zug schwächt g4 und den Königsflügel, und Schwarz setzt einfach mit ...Sf6 " +
      "und ...e6 fort.",
  },

  "1.d4 f5 2.Nd2": {
    strategy:
      "Bereitet e4 mit Springerunterstützung vor, verstellt aber den Läufer auf c1 und die " +
      "Dame, und der Springer kontrolliert weniger vom Zentrum als von c3 aus. Schwarz " +
      "entwickelt sich mit ...Sf6 und ...e6, und der weiße Aufbau ist schwerfälliger als nach " +
      "2.Sf3.",
  },

  "1.d4 f5 2.Na3": {
    strategy:
      "Ein Randspringer auf dem Weg nach c4 oder b5, vorerst aus dem Spiel und ohne Einfluss " +
      "auf e4 oder das Zentrum. Schwarz entwickelt sich natürlich mit ...Sf6 und ...e6.",
  },

  "1.d4 f5 2.Bd2": {
    strategy:
      "Entwickelt passiv, nimmt dem Damenspringer das Feld d2 und kämpft nicht um e4. Schwarz " +
      "setzt mühelos mit ...Sf6 und ...e6 fort.",
  },

  "1.d4 f5 2.Be3": {
    strategy:
      "Entwickelt den Läufer, blockiert aber den e-Bauern, was den üblichen Aufbau mit e3 und " +
      "Sf3 erschwert. Schwarz antwortet mit ...Sf6 und ...e6, und Weiß hat gegenüber einem " +
      "ruhigen Sf3 nichts gewonnen.",
  },

  "1.d4 f5 2.Qd2": {
    strategy:
      "Sperrt den Läufer auf c1 ein und verwendet ein Tempo auf einen frühen Damenzug, ohne " +
      "einen Zweck, den ein normaler Entwicklungszug nicht besser erfüllen würde.",
  },

  "1.d4 f5 2.Qd3": {
    name: "Holländische Verteidigung: Alapin-Variante",
    background:
      "Benannt nach Semjon Alapin (1856–1923), einem russischen Spieler und " +
      "Eröffnungsanalytiker, nach dem auch Varianten der Sizilianischen, der Französischen " +
      "und der Caro-Kann-Verteidigung benannt sind. Sie ist auch als Manhattan-Variante " +
      "bekannt.",
    strategy:
      "Greift f5 über die Diagonale b1-h7 an und bereitet g4 oder e4 gegen den Bauern vor, " +
      "doch Schwarz deckt ihn mit ...e6, ...d6 oder ...g6. Der frühe Damenzug kostet dann " +
      "Zeit und verstellt den Läufer auf f1, während Schwarz mit ...Sf6 entwickelt.",
  },

  "1.d4 f5 2.d5": {
    strategy:
      "Gewinnt sofort Raum, doch der ungestützte Bauer wird zum Ziel: Schwarz greift ihn mit " +
      "...Sf6 und ...c6 an oder stellt ihn mit ...e6 in Frage. Zudem gibt der Vorstoß die " +
      "Kontrolle des d-Bauern über e5 und c5 auf.",
  },

  "1.d4 f5 2.Bh6": {
    strategy: "Stellt den Läufer gegen 2...gxh6 ein, ohne dass Weiß etwas dafür bekommt.",
  },

  "1.d4 f5 2.Kd2": {
    strategy:
      "Verzichtet auf die Rochade und verstellt Dame und Läufer auf c1. Der König bleibt ohne " +
      "jeden Gewinn im Zentrum, und Schwarz entwickelt sich frei.",
  },

  "1.d4 f5": {
    name: "Holländische Verteidigung",
    background:
      "Elias Stein, ein Elsässer, der sich in Den Haag niedergelassen hatte, empfahl sie in " +
      "seinem 1789 erschienenen Buch „Nouvel essai sur le Jeu des échecs“ als beste Antwort " +
      "auf 1.d4. Im Weltmeisterschaftskampf 1951 spielten sie sowohl Michail Botwinnik als " +
      "auch sein Herausforderer David Bronstein.",
  },

  "1.d4 f5 2.c4 Nf6": {
    name: "Holländische Verteidigung: Normalvariante",
    strategy:
      "Entwickelt eine Figur und kontrolliert e4 und d5, was den weißen Zentrumsvorstoß e4 " +
      "erschwert. Der Zug hält jeden holländischen Aufbau offen: ...e6 für den " +
      "Stonewall-Aufbau oder das Klassische System, ...g6 und ...Lg7 für das Leningrader " +
      "System. Weiß setzt meist mit 3.Sc3 fort, das e4 unterstützt, oder mit 3.g3 und Lg2, " +
      "der von der langen Diagonale aus auf e4 wirkt.",
  },

  "1.d4 f5 2.c4 e6": {
    strategy:
      "Öffnet dem Läufer auf f8 den Weg, der sich nun auch mit Schach auf b4 entwickeln kann, " +
      "und bereitet ...Sf6, ...Le7 und eine frühe Rochade vor oder ...d5 für den " +
      "Stonewall-Aufbau. Der Bauer engt den Läufer auf c8 ein, und solange der Springer noch " +
      "auf g8 steht, kann Weiß das Gambit 3.e4 versuchen, doch Schwarz behält ein solides, " +
      "flexibles Spiel.",
  },

  "1.d4 f5 2.c4 g6": {
    strategy:
      "Steuert den Aufbau des Leningrader Systems mit ...Lg7, ...Sf6, ...d6 und rascher " +
      "Rochade an und hält einen zweiten Plan bereit: Nach 3.Sc3 kann Schwarz ...Sh6 spielen, " +
      "die Rochade aufschieben und mit ...c6 und ...d5 um das Zentrum kämpfen. Ohne Springer " +
      "auf f6 kann Weiß dann e4 spielen, und nach ...fxe4 Sxe4 wird die Partie halboffen, " +
      "wobei Schwarz einen zusätzlichen Zentrumsbauern behält.",
  },

  "1.d4 f5 2.c4 d6": {
    strategy:
      "Bereitet ...e5 vor und hält ...Sf6 mit ...g6 oder ...e6 für später offen, legt aber " +
      "den d-Bauern fest, bevor der Springer entwickelt ist. Ein sofortiges ...e5 erlaubt " +
      "dxe5 dxe5 Dxd8+ Kxd8, wonach Schwarz nicht mehr rochieren kann.",
  },

  "1.d4 f5 2.c4 c6": {
    strategy:
      "Bereitet ...d5 vor, gestützt durch den c-Bauern, für einen Stonewall-Aufbau nach Art " +
      "der Slawischen Verteidigung. Der Zug ist jedoch langsam: Der Springer verliert das " +
      "Feld c6, ...Sf6 und ...e6 stehen noch aus, und Weiß entwickelt sich frei mit Sc3 und " +
      "Sf3 oder g3.",
  },

  "1.d4 f5 2.c4 b6": {
    strategy:
      "Bereitet ...Lb7 vor, der von der langen Diagonale aus gemeinsam mit dem f-Bauern e4 " +
      "kontrolliert, eine Idee aus der Damenindischen Verteidigung. Der Zug ist langsam und " +
      "überlässt Weiß das Zentrum, der sich mit Sc3 und Sf3 entwickelt und den Läufer mit d5 " +
      "abblocken kann.",
  },

  "1.d4 f5 2.c4 c5": {
    strategy:
      "Greift d4 an, bevor eine Figur entwickelt ist. Weiß kann mit 3.d5 eine Benoni-artige " +
      "Struktur herbeiführen, in der der schwarze f-Bauer bereits gezogen hat, oder 3.dxc5 " +
      "spielen, wonach Schwarz Zeit aufwendet, um den Bauern mit ...e6 und ...Lxc5 oder mit " +
      "...Da5+ zurückzugewinnen.",
  },

  "1.d4 f5 2.c4 Nc6": {
    strategy:
      "Greift d4 an, doch 3.d5 vertreibt den Springer: Nach 3...Se5 greift ihn 4.Dd4 an und " +
      "deckt c4, f4 kann folgen, sodass Schwarz Zeit verliert, während Weiß im Zentrum Raum " +
      "gewinnt.",
  },

  "1.d4 f5 2.c4 d5": {
    strategy:
      "Fordert das Zentrum sofort heraus, doch nach 3.cxd5 muss Schwarz Zeit aufwenden, um " +
      "den Bauern zurückzugewinnen, und auf 3...Dxd5 folgt 4.Sc3 mit Tempo. Zusammen mit " +
      "...f5 lässt der Zug e5 und e6 ohne Bauerndeckung.",
  },

  "1.d4 f5 2.c4 e5": {
    strategy:
      "Bietet einen Bauern an, um das Zentrum aufzubrechen, doch 3.dxe5 nimmt ihn einfach. " +
      "Schwarz kann mit ...Sc6 und ...De7 auf e5 zielen, Weiß deckt den Bauern aber mit Sf3 " +
      "und Lf4, und da ...f5 schon gespielt ist, bleibt der schwarze Königsflügel für wenig " +
      "gelockert.",
  },

  "1.d4 f5 2.c4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er nach vorn nur b4 und c5 erreicht, fern von den " +
      "Feldern e4 und d5, um die Schwarz kämpfen muss. Das Tempo wäre mit ...Sf6 oder ...e6 " +
      "besser genutzt.",
  },

  "1.d4 f5 2.c4 Nh6": {
    strategy:
      "Strebt nach f7, um ...e5 zu unterstützen, doch der Springer steht am Rand exponiert: " +
      "3.Lxh6 gxh6 hinterlässt Schwarz einen isolierten Doppelbauern auf der h-Linie und " +
      "einen zerrütteten Königsflügel.",
  },

  "1.d4 f5 2.c4 a6": {
    strategy:
      "Ein Wartezug, der b5 kontrolliert und ...b5 gegen c4 vorbereiten kann, aber nichts " +
      "entwickelt, während ...Sf6 und ...e6 noch ausstehen und Weiß bereits das Bauernzentrum " +
      "besitzt.",
  },

  "1.d4 f5 2.c4 a5": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel und sichert das Feld b4 für einen Springer auf a6, " +
      "kostet aber ein Tempo am Flügel, während die Figuren des Königsflügels zu Hause " +
      "bleiben. Weiß entwickelt sich mit Sc3 und Sf3 und bereitet e4 vor.",
  },

  "1.d4 f5 2.c4 h6": {
    strategy:
      "Nimmt dem weißen Läufer das Feld g5, doch diese langsame Prophylaxe überlässt Weiß das " +
      "Zentrum, der Sc3 und e4 spielt, während die schwarzen Springer noch zu Hause stehen.",
  },

  "1.d4 f5 2.c4 h5": {
    strategy:
      "Nimmt den weißen Figuren das Feld g4, entwickelt aber nichts und lässt, da der f-Bauer " +
      "f7 bereits verlassen hat, g5 und g6 dauerhaft ohne Bauerndeckung.",
  },

  "1.d4 f5 2.c4 Kf7": {
    strategy:
      "Gibt das Rochaderecht endgültig auf und entwickelt nichts. Auf f7 steht der König auf " +
      "der Diagonale a2-g8 und kann von einem Springer auf e5 oder g5 Schach erhalten.",
  },

  "1.d4 f5 2.c4 b5": {
    strategy:
      "Bietet einen Bauern für nichts Greifbares an: Nach 3.cxb5 hat Schwarz keine " +
      "entwickelten Figuren, um die geöffneten Linien zu nutzen, und Weiß behält das Zentrum " +
      "mit d4 und einen Mehrbauern.",
  },

  "1.d4 f5 2.c4 g5": {
    strategy:
      "Verliert sofort einen Bauern: 3.Lxg5 gewinnt ihn, da nichts g5 deckt und Schwarz nicht " +
      "zurückschlagen kann. Zudem ist der Königsflügel dauerhaft geschwächt.",
  },

  "1.d4 f5 2.c4 f4": {
    strategy:
      "Gewinnt Raum, lässt den Bauern aber ungedeckt: 3.Lxf4 gewinnt ihn auf der offenen " +
      "Diagonale c1-h6, und Schwarz hat keine entwickelte Figur, die dafür Kompensation " +
      "bieten könnte.",
  },

  "1.d4 f5 2.g3 Nf6": {
    strategy:
      "Entwickelt den Springer, deckt e4 und d5 und hält alle holländischen Aufbauten offen: " +
      "...e6 mit ...d5 für den Stonewall oder mit ...d6 und ...Le7 für die klassische " +
      "Variante, oder ...g6 und ...Lg7 für das Leningrader System. Nach 3.Lg2 wählt Schwarz " +
      "zwischen 3...e6 und 3...g6, während Weiß noch zwischen Sf3, Sh3 und c4 wählen kann.",
  },

  "1.d4 f5 2.g3 g6": {
    strategy:
      "Steuert den Leningrader Aufbau mit ...Lg7, ...Sf6, ...0-0 und ...d6 an; der Läufer " +
      "schützt den König und wirkt auf der langen Diagonale. Nach ...Sf6 kann es in die " +
      "Varianten von 2...Sf6 3.Lg2 g6 überleiten. Solange der Springer h5 noch nicht deckt, " +
      "kann Weiß jedoch mit 3.h4 und h5 gegen den Bauern g6 vorgehen.",
  },

  "1.d4 f5 2.g3 e6": {
    strategy:
      "Stützt den Bauern f5 und gibt den Läufer f8 frei, mit Kurs auf ...Sf6 nebst ...Le7 " +
      "oder ...d5 für einen klassischen oder einen Stonewall-Aufbau. Nach 3.Lg2 Sf6 geht es " +
      "in die Varianten von 2...Sf6 3.Lg2 e6 über. Der Preis ist ein eingesperrter Läufer c8, " +
      "und sobald ...d5 folgt, wird e5 zu einem Loch für den weißen Springer.",
  },

  "1.d4 f5 2.g3 d5": {
    strategy:
      "Stellt sofort den Stonewall-Bauern auf, sodass d5 und f5 das Feld e4 beherrschen; " +
      "...e6, ...Sf6 und ...c6 folgen. Die frühe Festlegung schließt den klassischen und den " +
      "Leningrader Aufbau mit ...d6 aus, und e5 ist schon jetzt ein Loch, auf das Weiß mit " +
      "Lf4 zielen kann. Sobald ...e6 folgt, ist der Läufer c8 eingesperrt.",
  },

  "1.d4 f5 2.g3 d6": {
    strategy:
      "Deckt e5 und öffnet dem Läufer c8 eine Diagonale, mit Kurs auf den klassischen Aufbau " +
      "mit ...Sf6 und ...e6 oder das Leningrader System mit ...g6. Der frühe Bauernzug " +
      "verzichtet auf den Stonewall, und 2...Sf6 erreicht dieselben Stellungen, hält aber " +
      "mehr Möglichkeiten offen.",
  },

  "1.d4 f5 2.g3 c6": {
    strategy:
      "Bereitet ...d5 für eine Stonewall-Struktur vor und entschärft die lange Diagonale, " +
      "bevor der weiße Läufer nach g2 kommt, entwickelt aber nichts. Der Zug ist langsam, " +
      "denn 2...Sf6 erreicht dieselben Strukturen und entwickelt dabei eine Figur.",
  },

  "1.d4 f5 2.g3 Nc6": {
    strategy:
      "Entwickelt und übt Druck auf d4 aus, verstellt aber den c-Bauern und erlaubt 3.d5, das " +
      "den Springer sofort vertreibt. Schwarz verliert mit dem Springer Zeit, während Weiß " +
      "Raum gewinnt.",
  },

  "1.d4 f5 2.g3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 im Blick hat, aber nichts für das " +
      "Zentrum oder für e4 tut und den a-Bauern blockiert. Weiß entwickelt sich ungestört mit " +
      "Lg2, Sf3 und c4.",
  },

  "1.d4 f5 2.g3 a6": {
    strategy:
      "Ein langsamer Randbauernzug, der weder eine Figur entwickelt noch um das Zentrum " +
      "kämpft. Schwarz hat ein Tempo verbraucht, und Weiß setzt mit Lg2, Sf3 und c4 fort.",
  },

  "1.d4 f5 2.g3 a5": {
    strategy:
      "Ein langsamer Randbauernzug, der b4 kontrolliert, aber weder eine Figur entwickelt " +
      "noch um das Zentrum kämpft, und er schwächt b5. Weiß setzt mit Lg2, Sf3 und c4 fort.",
  },

  "1.d4 f5 2.g3 b6": {
    strategy:
      "Schwächt die lange Diagonale: Nach 3.Lg2 ist der Turm a8 angegriffen, und ...Lb7 würde " +
      "den Läufer durch Lxb7 verlieren. Schwarz muss ein Tempo für eine Sperre wie ...c6, " +
      "...d5 oder ...Sc6 aufwenden.",
  },

  "1.d4 f5 2.g3 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel, schwächt aber die lange Diagonale: 3.Lg2 greift den Turm " +
      "a8 an, ...Lb7 geht durch Lxb7 verloren, und Schwarz muss mit ...c6, ...d5 oder ...Sc6 " +
      "sperren. Der Bauer b5 ist danach ein Ziel für a4.",
  },

  "1.d4 f5 2.g3 c5": {
    strategy:
      "Greift d4 an, entwickelt aber nichts und lässt Weiß die Wahl: 3.d5 gewinnt Raum, und " +
      "3.dxc5 nimmt einen Bauern, den Schwarz nur mit Zeitaufwand zurückgewinnt, durch " +
      "...Da5+ oder durch ...e6 und ...Lxc5.",
  },

  "1.d4 f5 2.g3 h5": {
    strategy:
      "Zielt auf ...h4 gegen g3, entwickelt aber nichts und kämpft um kein Zentrumsfeld. Der " +
      "Königsflügel ist gelockert, und Weiß setzt ungestört mit Lg2, Sf3 und c4 fort.",
  },

  "1.d4 f5 2.g3 Nh6": {
    strategy:
      "Deckt den Bauern f5 vom Rand aus, doch 3.Lxh6 gxh6 hinterlässt isolierte Doppelbauern " +
      "auf der h-Linie und keinen Bauern mehr, der auf g6 dazwischenziehen kann. Nach 4.e4 " +
      "erlaubt 4...fxe4?? 5.Dh5#, und das Läuferpaar wiegt den entblößten König nicht auf.",
  },

  "1.d4 f5 2.g3 e5": {
    strategy:
      "Gibt den e-Bauern für zu wenig her: Nach 3.dxe5 behauptet Weiß den Mehrbauern mit Sf3 " +
      "und Lf4, und die offenen Linien wiegen ihn für Schwarz nicht auf.",
  },

  "1.d4 f5 2.g3 h6": {
    strategy:
      "Nimmt dem Läufer c1 das Feld g5, schwächt aber g6 und entwickelt nichts. Weiß schlägt " +
      "sofort mit 3.e4 zu, und 3...fxe4?? verliert durch 4.Dh5+ g6 5.Dxg6#.",
  },

  "1.d4 f5 2.g3 Kf7": {
    strategy:
      "Gibt die Rochade für nichts auf und stellt den König auf die Diagonale e8-h5, die " +
      "...f5 geöffnet hat und auf der e4 und Dh5+ ihn treffen können. Weiß gewinnt Zeit und " +
      "Raum, während Schwarz nichts entwickelt hat.",
  },

  "1.d4 f5 2.g3 g5": {
    strategy:
      "Bietet einen Bauern für nichts an: 3.Lxg5 gewinnt ihn sofort, da der Läufer c1 eine " +
      "offene Diagonale hat und nichts g5 deckt. Schwarz erhält dafür keine Entwicklung, und " +
      "der Königsflügel ist gelockert.",
  },

  "1.d4 f5 2.g3 f4": {
    strategy:
      "Greift g3 an, verliert aber einfach den Bauern: 3.Lxf4 oder 3.gxf4 schlägt ihn, und " +
      "Schwarz hat keine entwickelten Figuren, um die offenen Linien zu nutzen. Weiß hat " +
      "einen glatten Mehrbauern.",
  },

  "1.d4 f5 2.Nc3 Nf6": {
    strategy:
      "Entwickelt den Königsspringer und kontrolliert e4 und d5, sodass der Vorstoß 3.e4 nun " +
      "einen Bauern kostet: Nach 3...fxe4 entsteht per Zugumstellung das Staunton-Gambit. Der " +
      "Springer hält jeden holländischen Aufbau offen: ...e6 mit ...d5 oder ...Le7, oder " +
      "...g6 und ...Lg7. Weiß setzt meist mit 3.Lg5 fort und droht, auf f6 zu tauschen und " +
      "die schwarze Bauernstruktur zu beschädigen.",
  },

  "1.d4 f5 2.Nc3 e6": {
    strategy:
      "Öffnet dem Läufer auf f8 den Weg und steuert einen Stonewall-Aufbau mit ...d5 oder " +
      "einen klassischen Aufbau mit ...Sf6 und ...Le7 an. Anders als 2...Sf6 trägt der Zug " +
      "nichts zur Kontrolle von e4 bei, sodass sich Weiß nach 3.e4 fxe4 4.Sxe4 mit einem " +
      "entwickelten Springer seinen Anteil am Zentrum sichert. Schwarz antwortet mit ...Sf6 " +
      "oder ...d5 und steht solide, auch wenn der Läufer auf c8 vorerst eingesperrt ist.",
  },

  "1.d4 f5 2.Nc3 d5": {
    strategy:
      "Bewacht e4 mit einem zweiten Bauern, legt aber die Bauernstruktur fest, bevor eine " +
      "Figur entwickelt ist. Der Zug hinterlässt auf e5 ein dauerhaftes Loch, auf das 3.Lf4 " +
      "zielt, und schwächt e6. Weiß kann auch das Gambit 3.e4 versuchen, das nach 3...dxe4 " +
      "per Zugumstellung in eine Variante des Blackmar-Diemer-Gambits übergeht.",
  },

  "1.d4 f5 2.Nc3 g6": {
    strategy:
      "Steuert einen Aufbau des Leningrader Systems mit ...Lg7, ...Sf6, ...d6 und ...O-O an. " +
      "Der g-Bauer tut nichts für e4, sodass Weiß sofort mit 3.e4 fxe4 4.Sxe4 zuschlagen und " +
      "sich einen Anteil am Zentrum sichern kann, ohne das Bauernopfer, das nach 2...Sf6 " +
      "nötig gewesen wäre. Der Zug ist korrekt, doch nach dem Tausch auf e4 steht der " +
      "e7-Bauer auf einer halboffenen Linie.",
  },

  "1.d4 f5 2.Nc3 d6": {
    strategy:
      "Bereitet ...e5 vor, hält ...Sf6, ...g6 und ...e6 in Reserve und öffnet die Diagonale " +
      "des Läufers auf c8. Für e4 tut der Zug nichts, sodass Weiß mit 3.e4 fxe4 4.Sxe4 einen " +
      "Anteil am Zentrum gewinnen kann, ohne einen Bauern zu opfern.",
  },

  "1.d4 f5 2.Nc3 c6": {
    strategy:
      "Bereitet ...d5 mit Unterstützung des c-Bauern vor und strebt eine Stonewall-Struktur " +
      "an. Der Zug ist langsam und tut nichts für e4: Nach 3.e4 fxe4 4.Sxe4 kann Schwarz den " +
      "Springer mit ...d5 angreifen, doch Weiß bleibt in der Entwicklung voraus, während " +
      "...Sf6 und ...e6 noch ausstehen.",
  },

  "1.d4 f5 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, von wo der Läufer über die lange Diagonale auf e4 wirkt. Der Zug " +
      "ist langsam und entwickelt am Königsflügel nichts, sodass Weiß mit 3.e4 fxe4 4.Sxe4 " +
      "das Zentrum öffnen und ...Lb7 mit Ld3 oder Sg3 beantworten kann, mit " +
      "Entwicklungsvorsprung, während ...Sf6 und ...e6 noch ausstehen.",
  },

  "1.d4 f5 2.Nc3 c5": {
    strategy:
      "Greift d4 an, bevor eine Figur entwickelt ist. Weiß kann mit 3.d5 antworten, was eine " +
      "Benoni-artige Struktur mit bereits vorgerücktem schwarzem f-Bauern ergibt, oder mit " +
      "3.dxc5, wonach Schwarz Zeit für ...Da5 oder für ...e6 und ...Lxc5 aufwenden muss, um " +
      "den Bauern zurückzugewinnen.",
  },

  "1.d4 f5 2.Nc3 Nc6": {
    strategy:
      "Greift d4 an, doch 3.d5 vertreibt den Springer: Nach 3...Se5 4.Dd4 kann Schwarz ihn " +
      "mit ...d6 halten, aber f4 erzwingt dann einen weiteren Rückzug, sodass Schwarz Zeit " +
      "verliert und Raum im Zentrum preisgibt.",
  },

  "1.d4 f5 2.Nc3 e5": {
    strategy:
      "Gibt einen Bauern, um das Zentrum zu öffnen: 3.dxe5 nimmt ihn, und die Versuche, ihn " +
      "mit ...Sc6 und ...De7 zurückzugewinnen, kosten weitere Zeit. Schwarz erhält etwas " +
      "schnellere Entwicklung, aber nichts Konkretes für das Material.",
  },

  "1.d4 f5 2.Nc3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo b4 und c5 seine einzigen Felder nach vorn sind, " +
      "und tut nichts für e4 oder d5. Weiß kann sofort 3.e4 spielen, einen Vorstoß, der nach " +
      "2...Sf6 einen Bauern gekostet hätte.",
  },

  "1.d4 f5 2.Nc3 Nh6": {
    strategy:
      "Strebt nach f7, wo der Springer e5 und d6 decken würde, doch auf h6 kann er sofort " +
      "geschlagen werden: 3.Lxh6 gxh6 hinterlässt Schwarz isolierte Doppelbauern auf der " +
      "h-Linie.",
  },

  "1.d4 f5 2.Nc3 a6": {
    strategy:
      "Nimmt dem Springer auf c3 das Feld b5 und bereitet ...b5 vor, verbraucht aber ein " +
      "Tempo am Flügel, während ...Sf6 und ...e6 noch ausstehen, und Weiß kann ungehindert " +
      "3.e4 spielen.",
  },

  "1.d4 f5 2.Nc3 a5": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel und sichert b4 für einen Springer von a6, verbraucht " +
      "aber ein Tempo am Flügel, während die Figuren des Königsflügels zu Hause bleiben. Weiß " +
      "kann sofort mit 3.e4 das Zentrum öffnen.",
  },

  "1.d4 f5 2.Nc3 h6": {
    strategy:
      "Nimmt dem weißen Läufer das Feld g5, doch diese langsame Prophylaxe entwickelt nichts " +
      "und schwächt g6. Weiß setzt mit e4 oder Sf3 fort, während die schwarzen Springer noch " +
      "zu Hause stehen.",
  },

  "1.d4 f5 2.Nc3 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel, entwickelt aber nichts, lässt g6 ohne Bauerndeckung und " +
      "schließt ...h6 gegen einen Läufer auf g5 aus. Weiß setzt mit 3.e4 oder 3.Lg5 fort und " +
      "sieht sich keiner Drohung gegenüber.",
  },

  "1.d4 f5 2.Nc3 Kf7": {
    strategy:
      "Gibt die Rochade auf und stellt den König dorthin, wo e4 ihn bloßlegt: Nach 3.e4 fxe4 " +
      "4.Sxe4 hat Weiß Sg5+, Dh5+ und Lc4+ zur Hand, während keine schwarze Figur entwickelt " +
      "ist.",
  },

  "1.d4 f5 2.Nc3 b5": {
    strategy:
      "Verliert sofort einen Bauern: 3.Sxb5 gewinnt ihn, da ihn nichts deckt, und der " +
      "Springer zielt von dort zudem auf c7. Schwarz hat keine entwickelten Figuren, die " +
      "dafür Kompensation bieten könnten.",
  },

  "1.d4 f5 2.Nc3 g5": {
    strategy:
      "Verliert sofort einen Bauern: 3.Lxg5 gewinnt ihn, da nichts g5 deckt, und der " +
      "Königsflügel ist dauerhaft geschwächt.",
  },

  "1.d4 f5 2.Nc3 f4": {
    strategy:
      "Gewinnt Raum, lässt den Bauern aber ungedeckt: 3.Lxf4 gewinnt ihn über die offene " +
      "Diagonale c1-h6, und Schwarz hat keine entwickelte Figur, die Kompensation bieten " +
      "könnte.",
  },

  "1.d4 f5 2.Nf3 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, verstärkt die Kontrolle über e4, " +
      "deckt h5 und hält jeden holländischen Aufbau offen: Nach 3.g3 e6 4.Lg2 kann Schwarz " +
      "zwischen dem klassischen System und dem Stonewall wählen, nach 3.g3 g6 4.Lg2 Lg7 " +
      "entsteht das Leningrader System. Gegen 3.Lg5 spielt Schwarz ...e6 und ...Le7, sodass " +
      "Lxf6 mit ...Lxf6 beantwortet werden kann.",
  },

  "1.d4 f5 2.Nf3 e6": {
    strategy:
      "Öffnet dem Läufer von f8 den Weg und stützt ein späteres ...d5, mit dem Ziel des " +
      "klassischen Aufbaus mit ...Sf6 und ...Le7 oder des Stonewalls mit ...d5 und ...c6. " +
      "Meist führt der Zug in dieselben Stellungen wie 2...Sf6. Der Preis ist, dass der " +
      "e6-Bauer den Läufer auf c8 einsperrt, ein dauerhaftes Problem in Stonewall-Strukturen.",
  },

  "1.d4 f5 2.Nf3 d5": {
    strategy:
      "Errichtet sofort die Stonewall-Bauern auf d5 und f5, sodass e4 fest in schwarzer Hand " +
      "ist; ...Sf6 und ...e6 folgen. Der Zug ist gesund, legt aber den d-Bauern fest, bevor " +
      "eine Figur entwickelt ist. Da weder der d- noch der f-Bauer jemals e5 decken kann, " +
      "wird dieses Feld zu einem dauerhaften Vorposten für den weißen Springer.",
  },

  "1.d4 f5 2.Nf3 d6": {
    strategy:
      "Deckt e5, sodass sich der weiße Springer dort nicht festsetzen kann, öffnet die " +
      "Diagonale des Läufers auf c8 und bereitet ...Sf6 mit ...g6 für einen Leningrader " +
      "Aufbau oder mit ...e6 für einen klassischen vor. Gesund, aber weniger flexibel: Der " +
      "d-Bauer legt sich fest, bevor die Figuren entwickelt sind, und der Stonewall-Plan mit " +
      "...d5 würde nun ein Tempo kosten.",
  },

  "1.d4 f5 2.Nf3 g6": {
    strategy:
      "Steuert mit ...Lg7, ...Sf6, ...O-O und ...d6 das Leningrader System an, stellt den " +
      "Läufer auf die lange Diagonale und schließt die Diagonale e8-h5. Spielbar, aber " +
      "weniger flexibel als 2...Sf6, da sich Schwarz auf das Fianchetto festlegt, bevor der " +
      "Springer entwickelt ist.",
  },

  "1.d4 f5 2.Nf3 c6": {
    strategy:
      "Bereitet ...d5 für eine Stonewall-Kette aus c6, d5, e6 und f5 vor und öffnet der Dame " +
      "die Diagonale nach b6 und a5. Gesund, aber langsam: Der Zug entwickelt nichts, und " +
      "...Sf6 und ...e6 müssen erst noch folgen.",
  },

  "1.d4 f5 2.Nf3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, das den Läufer von c8 auf die lange Diagonale bringt, wo er " +
      "zusätzlich Druck auf e4 ausübt und den Springer auf f3 ins Visier nimmt. Gesund, aber " +
      "selten und langsam: Der Königsflügel ist noch unentwickelt, und Weiß kann dem Läufer " +
      "mit g3 und Lg2 entgegentreten.",
  },

  "1.d4 f5 2.Nf3 c5": {
    strategy:
      "Greift d4 an, bevor eine Figur entwickelt ist. 3.d5 gewinnt Raum und nimmt den " +
      "schwarzen Figuren die Felder c6 und e6, während Schwarz nach 3.dxc5 weitere Züge " +
      "aufwenden muss, um den Bauern mit ...e6 und ...Lxc5 oder mit ...Da5+ zurückzugewinnen.",
  },

  "1.d4 f5 2.Nf3 e5": {
    name: "Holländische Verteidigung: Omega-Isis-Gambit",
    strategy:
      "Bietet sofort den e-Bauern an. Nach 3.dxe5 kann Schwarz mit ...Sc6 entwickeln und e5 " +
      "angreifen oder mit ...d6 Linien öffnen, doch die rasche Entwicklung wiegt den Bauern " +
      "und den gelockerten Königsflügel nicht auf.",
  },

  "1.d4 f5 2.Nf3 Nc6": {
    strategy:
      "Entwickelt den Springer, doch 3.d5 greift ihn sofort an. ...Se5 und ...Sd4 verlieren " +
      "den Springer einfach, also muss er nach b8, a5 oder b4 zurück, und Schwarz hat Zeit " +
      "verloren, während der weiße Bauer auf d5 Raum gewinnt.",
  },

  "1.d4 f5 2.Nf3 Na6": {
    strategy:
      "Ein Randspringer, der auf b4 und c5 zielt, aber nichts für das Zentrum oder den " +
      "Königsflügel tut und ...Sf6 und ...e6 hinauszögert. Weiß entwickelt sich ungehindert " +
      "mit g3 und Lg2 oder e3 und Ld3.",
  },

  "1.d4 f5 2.Nf3 Nh6": {
    strategy:
      "Erlaubt 3.Lxh6 gxh6, was die schwarzen Bauern am Königsflügel zerrüttet; ansonsten " +
      "steht der Springer am Rand schlecht, mit nur f7 und g4 als Zielfeldern.",
  },

  "1.d4 f5 2.Nf3 a6": {
    strategy:
      "Investiert ein Tempo in einen Flügelbauern, der weder entwickelt noch um das Zentrum " +
      "kämpft, sodass Weiß einfach mit g3 und Lg2 oder e3 und Ld3 fortsetzt.",
  },

  "1.d4 f5 2.Nf3 a5": {
    strategy:
      "Investiert ein Tempo in einen Flügelbauern, der nichts entwickelt, nicht um das " +
      "Zentrum kämpft und b5 schwächt. Weiß hat mit e3, c4 und Sc3 freie Hand.",
  },

  "1.d4 f5 2.Nf3 h6": {
    strategy:
      "Investiert ein Tempo, um Lg5 zu verhindern, das noch gar nicht droht, und schwächt g6. " +
      "Schwarz gerät in Entwicklungsrückstand, während Weiß g3 und Lg2 oder e3 spielt.",
  },

  "1.d4 f5 2.Nf3 h5": {
    strategy:
      "Zieht einen Randbauern vor, der nichts droht und g5 und g6 schwächt. Weiß entwickelt " +
      "sich mit Lg5, e3 oder g3, während die schwarzen Springer und Läufer noch auf ihren " +
      "Ausgangsfeldern stehen.",
  },

  "1.d4 f5 2.Nf3 b5": {
    strategy:
      "Lässt den Bauern auf b5 ungedeckt: 3.Dd3 greift ihn und den Bauern auf f5 zugleich an, " +
      "und Schwarz kann nicht beide halten. Der Zug entwickelt nichts.",
  },

  "1.d4 f5 2.Nf3 Kf7": {
    strategy:
      "Gibt ohne Gegenleistung das Rochaderecht auf, entwickelt keine Figur und führt den " +
      "König in Se5+ und einen Durchbruch mit e4 hinein, fern von jedem Schutz.",
  },

  "1.d4 f5 2.Nf3 g5": {
    strategy:
      "Verliert einen Bauern durch 3.Sxg5 oder 3.Lxg5, da ihn nichts deckt, und hinterlässt " +
      "einen Königsflügel voller Löcher.",
  },

  "1.d4 f5 2.Nf3 f4": {
    strategy:
      "Verliert den Bauern durch 3.Lxf4, da ihn nichts deckt, und gewinnt dafür weder Raum " +
      "noch Entwicklung.",
  },
};
