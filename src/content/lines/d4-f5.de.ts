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
};
