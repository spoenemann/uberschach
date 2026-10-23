import type { OpeningTexts } from "../book.ts";

// German prose for d4-f5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.d4 f5 2.c4": {
    strategy:
      "Die traditionelle Herausforderung: Weiß gewinnt Raum, kontrolliert zusätzlich d5 und " +
      "strebt einen Aufbau wie im Damengambit an, mit e4 als späterem Hebel im Zentrum. Der " +
      "frühe c-Bauer hat einen Preis: Nach ...e6 kann sich der Läufer von f8 mit Schach auf b4 " +
      "entwickeln. Gekämpft wird um e4, das der schwarze f-Bauer schon im Blick hat.",
  },

  "1.d4 f5 2.g3": {
    name: "Holländische Verteidigung: Fianchetto-Angriff",
    background:
      "Die traditionelle Zugfolge gegen die Holländische Verteidigung beginnt mit 2.c4, " +
      "häufiger beginnt Weiß jedoch mit 2.g3.",
    strategy:
      "Bereitet Lg2 vor, der über die lange Diagonale um e4 kämpft, und legt Weiß auf sehr wenig " +
      "fest. Die Rochade vor c4 verhindert, dass der schwarze Läufer mit Schach nach b4 kommt. " +
      "Es wird ein geduldiger Kampf um e4 und die lange Diagonale, ruhiger als nach 2.c4.",
  },

  "1.d4 f5 2.Nf3": {
    strategy:
      "Ein flexibler Entwicklungszug, der e5 kontrolliert und d4 stützt. Weiß hält sowohl ein " +
      "Fianchetto als auch ein c4 wie im Damengambit offen und kann seinen Plan anpassen, sobald " +
      "Schwarz zeigt, welchen Aufbau er wählt.",
  },

  "1.d4 f5 2.Nc3": {
    name: "Holländische Verteidigung: Raphael-Variante",
    strategy:
      "Entwickelt mit Druck auf e4 und d5 und bereitet Lg5 für aktives Figurenspiel vor; zudem " +
      "unterstützt der Springer ein späteres e4. Der Preis: Er blockiert den c-Bauern, sodass " +
      "ein c4 wie im Damengambit vorerst ausscheidet. Ein lebhafterer Versuch als die ruhigen " +
      "Entwicklungszüge.",
  },

  "1.d4 f5 2.b3": {
    strategy:
      "Bereitet Lb2 vor, der d4 deckt und die lange Diagonale im Blick hat. Der Zug ist gesund, " +
      "aber langsamer als natürliche Entwicklungszüge und tut noch nichts gegen e4, das der " +
      "schwarze f-Bauer bereits kontrolliert.",
  },

  "1.d4 f5 2.e3": {
    strategy:
      "Öffnet dem Läufer von f1 den Weg nach d3, wo er auf f5 zielt. Der Zug ist gesund, aber " +
      "passiv, weil der Bauer den Läufer auf c1 einsperrt und Weiß wenig gegen e4 unternimmt.",
  },

  "1.d4 f5 2.e4": {
    name: "Holländische Verteidigung: Staunton-Gambit",
    background:
      "Benannt nach Howard Staunton, der es 1846 in London gegen Bernhard Horwitz spielte. " +
      "Einst eine gefürchtete Waffe für Weiß, wird es heute nur noch selten gespielt, da " +
      "Verteidigungstechniken entwickelt wurden, die es entschärfen.",
    strategy:
      "Opfert einen Bauern für schnelle Entwicklung und Spiel gegen den schwarzen Königsflügel, " +
      "der entlang der Diagonale e8-h5 geschwächt ist. Bei genauem Spiel bringt das Gambit Weiß " +
      "bestenfalls Ausgleich, daher ist es eher eine praktische Waffe als eine gesunde " +
      "Hauptwahl.",
  },

  "1.d4 f5 2.h3": {
    name: "Holländische Verteidigung: Kortschnoi-Angriff",
    background:
      "Carl Mayet führte das Gambit mit h3 und g4 im Jahr 1839 gegen von der Lasa ein, und " +
      "von der Lasa veröffentlichte später eine Analyse dazu in der ersten Auflage des " +
      "Handbuchs des Schachspiels. Viktor Kortschnoi brachte die Variante in der Partie " +
      "Kortschnoi–Känel, Biel 1979, in die Turnierpraxis zurück.",
    strategy:
      "Bereitet g4 vor, um den schwarzen f5-Bauern aufzubrechen, ein gambitartiger Versuch statt " +
      "normaler Entwicklung. Schwarz kann einfach ablehnen und steht gut, sodass die Variante " +
      "eher als Überraschungswaffe denn als empfehlenswerte Wahl taugt.",
  },

  "1.d4 f5 2.Bf4": {
    name: "Londoner System",
    background:
      "Das Londoner System verdankt seinen Namen dem Londoner Turnier von 1922, in dem es in " +
      "sieben Partien vorkam, darunter Partien von Capablanca, Aljechin und Rubinstein. James " +
      "Mason war der erste Spieler von Meisterstärke, der es regelmäßig anwandte, unter " +
      "anderem in Wien 1882, London 1883 und New York 1889.",
    strategy:
      "Entwickelt den Läufer vor die Bauernkette und deckt e5, ein solider Aufbau, der zu vielen " +
      "Plänen passt. Er ist ruhig und nicht der anspruchsvollste: Schwarz kann mühelos einen " +
      "Stonewall- oder einen klassischen Aufbau wählen.",
  },

  "1.d4 f5 2.Bg5": {
    name: "Holländische Verteidigung: Hopton-Angriff",
    strategy:
      "Zielt über die Diagonale d8-h4 auf e7 und droht nach ...Sf6 mit Lxf6, was die schwarzen " +
      "f-Bauern verdoppelt, aber das Läuferpaar kostet. Mit Sorgfalt gleicht Schwarz aus; ein " +
      "unvorsichtiger Vorstoß am Königsflügel kann auf der geschwächten Diagonale e8-h5 in ein " +
      "Dh5 matt laufen.",
  },

  "1.d4 f5 2.Nh3": {
    strategy:
      "Strebt nach f4 und eventuell d3, um e5 kontrollieren zu helfen, und hält f3 frei, sodass " +
      "ein späterer Lg2 auf e4 wirkt. Der Zug ist gesund, aber selten: Der Springer steht " +
      "zunächst am Rand und tut noch nichts fürs Zentrum.",
  },

  "1.d4 f5 2.a3": {
    strategy:
      "Bereitet b4 und Raumgewinn am Damenflügel vor, kostet aber ein Tempo für einen Flügelzug. " +
      "Für das Zentrum und den Kampf um e4 tut der Zug nichts.",
  },

  "1.d4 f5 2.a4": {
    strategy:
      "Ein langsamer Randbauernzug, der weder eine Figur entwickelt noch um e4 kämpft. Er " +
      "schwächt b4 und lässt Schwarz freie Hand bei der Entwicklung.",
  },

  "1.d4 f5 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 vor, doch der Bauer ist ungedeckt: Nach " +
      "...e6 greift ihn der Läufer von f8 an, und Weiß muss ein weiteres Tempo für seine Deckung " +
      "aufwenden.",
  },

  "1.d4 f5 2.c3": {
    strategy:
      "Stützt d4 und öffnet der Dame die Diagonale d1-a4, nimmt aber dem Damenspringer das Feld " +
      "c3 und kämpft nicht um e4. Ein bescheidener Zug, der ein Tempo kostet.",
  },

  "1.d4 f5 2.f3": {
    strategy:
      "Bereitet e4 vor, schwächt aber e3 und die Diagonale g1-a7 und nimmt dem Königsspringer " +
      "das Feld f3. Weiß lockert den Königsflügel für wenig.",
  },

  "1.d4 f5 2.f4": {
    strategy:
      "Spiegelt den schwarzen Bauernzug und kontrolliert e5, lässt aber e3 und e4 dauerhaft ohne " +
      "Bauernschutz und schwächt die Diagonale e1-h4. Schwarz bekommt in e4 ein natürliches Feld " +
      "für einen Springer und steht bequem.",
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
      "2...fxg4 hält Schwarz e4 mit einem Zentrumsbauern unter Kontrolle, was auch dem Läufer " +
      "von c8 die Deckung von g4 ermöglicht.",
  },

  "1.d4 f5 2.h4": {
    strategy:
      "Investiert ein Tempo in einen Flügelbauern, der weder dem Zentrum noch der Entwicklung " +
      "dient. Der Zug schwächt g4 und den Königsflügel, und Schwarz entwickelt sich einfach.",
  },

  "1.d4 f5 2.Nd2": {
    strategy:
      "Bereitet e4 mit Springerunterstützung vor, verstellt aber den Läufer auf c1 und die Dame, " +
      "und der Springer kontrolliert weniger vom Zentrum als von c3 aus. Schwerfälliger als " +
      "2.Sf3.",
  },

  "1.d4 f5 2.Na3": {
    strategy:
      "Ein Randspringer auf dem Weg nach c4 oder b5, vorerst aus dem Spiel und ohne Einfluss auf " +
      "e4 oder das Zentrum.",
  },

  "1.d4 f5 2.Bd2": {
    strategy:
      "Entwickelt passiv, nimmt dem Damenspringer das Feld d2 und kämpft nicht um e4.",
  },

  "1.d4 f5 2.Be3": {
    strategy:
      "Entwickelt den Läufer, blockiert aber den e-Bauern, was den üblichen Aufbau mit e3 und " +
      "Sf3 erschwert. Weiß hat gegenüber einem ruhigen Sf3 nichts gewonnen.",
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
      "Greift f5 über die Diagonale b1-h7 an, doch Schwarz deckt den Bauern mühelos. Der frühe " +
      "Damenzug kostet dann Zeit und verstellt den Läufer auf f1.",
  },

  "1.d4 f5 2.d5": {
    strategy:
      "Gewinnt sofort Raum, doch der vorgerückte Bauer wird zum Ziel, das Schwarz mit " +
      "natürlicher Entwicklung angreifen kann. Zudem gibt der Vorstoß die Kontrolle des d-Bauern " +
      "über e5 und c5 auf.",
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
      "erschwert. Der Springer legt keine Bauernstruktur fest, sodass für Schwarz jeder " +
      "holländische Aufbau offen bleibt, vom soliden Stonewall bis zum Fianchetto. Dafür muss " +
      "Schwarz einen Weg finden, mit dem vorgerückten f-Bauern um das Zentrum zu kämpfen.",
  },

  "1.d4 f5 2.c4 e6": {
    strategy:
      "Öffnet dem Läufer auf f8 den Weg, der sich nun mit Schach auf b4 entwickeln kann, und " +
      "stützt ein späteres ...d5 im Stonewall-Aufbau. Der Bauer engt den Läufer auf c8 ein, doch " +
      "Schwarz erhält ein solides, flexibles Spiel und hält die besten Felder beider Springer " +
      "frei.",
  },

  "1.d4 f5 2.c4 g6": {
    strategy:
      "Bereitet das Fianchetto des Königsläufers für das Leningrader System vor und hält einen " +
      "zweiten Plan bereit: Der Springer kann nach h6 gehen, die Rochade aufschieben und die c- " +
      "und d-Bauern um das Zentrum kämpfen lassen. Der Preis ist Zeit, denn Weiß bekommt Raum, " +
      "das Zentrum einzunehmen.",
  },

  "1.d4 f5 2.c4 d6": {
    strategy:
      "Bereitet ...e5 vor und hält die Entwicklung des Springers für später offen, legt aber den " +
      "d-Bauern fest, bevor der Springer entwickelt ist. Ein sofortiges ...e5 erlaubt dxe5 dxe5 " +
      "Dxd8+ Kxd8, wonach Schwarz nicht mehr rochieren kann.",
  },

  "1.d4 f5 2.c4 c6": {
    strategy:
      "Bereitet ...d5 vor, gestützt durch den c-Bauern, für eine solide Bauernmauer im Zentrum. " +
      "Der Zug ist jedoch langsam: Der Springer verliert das Feld c6, Schwarz hat noch keine " +
      "Figur entwickelt, und Weiß entwickelt sich frei.",
  },

  "1.d4 f5 2.c4 b6": {
    strategy:
      "Bereitet ...Lb7 vor, der von der langen Diagonale aus gemeinsam mit dem f-Bauern e4 " +
      "kontrolliert, eine Idee aus der Damenindischen Verteidigung. Der Zug ist langsam und " +
      "überlässt Weiß das Zentrum, der den Läufer mit d5 abblocken kann.",
  },

  "1.d4 f5 2.c4 c5": {
    strategy:
      "Greift d4 an, bevor eine Figur entwickelt ist. Weiß kann den Bauern nehmen, wonach " +
      "Schwarz Zeit aufwendet, um ihn zurückzugewinnen, oder vorrücken und das Zentrum " +
      "schließen, in einer Struktur, in der der schwarze f-Bauer bereits gezogen hat.",
  },

  "1.d4 f5 2.c4 Nc6": {
    strategy:
      "Greift d4 an, doch 3.d5 vertreibt den Springer: Nach 3...Se5 greift ihn 4.Dd4 an und " +
      "deckt c4, sodass Schwarz Zeit verliert, während Weiß im Zentrum Raum gewinnt.",
  },

  "1.d4 f5 2.c4 d5": {
    strategy:
      "Fordert das Zentrum sofort heraus, doch nach 3.cxd5 muss Schwarz Zeit aufwenden, um " +
      "den Bauern zurückzugewinnen, und auf 3...Dxd5 folgt 4.Sc3 mit Tempo. Zusammen mit " +
      "...f5 lässt der Zug e5 und e6 ohne Bauerndeckung.",
  },

  "1.d4 f5 2.c4 e5": {
    strategy:
      "Bietet einen Bauern an, um das Zentrum aufzubrechen, doch 3.dxe5 nimmt ihn einfach, und " +
      "Weiß kann ihn mit natürlicher Entwicklung halten. Da ...f5 schon gespielt ist, bleibt der " +
      "schwarze Königsflügel für wenig gelockert.",
  },

  "1.d4 f5 2.c4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er nach vorn nur b4 und c5 erreicht, fern von den " +
      "Feldern e4 und d5, um die Schwarz kämpfen muss. Das Tempo wäre mit einer zentraleren " +
      "Entwicklung besser genutzt.",
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
      "entwickelt, während Schwarz kaum begonnen hat, sich zu entwickeln, und Weiß bereits das " +
      "Bauernzentrum besitzt.",
  },

  "1.d4 f5 2.c4 a5": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel und sichert das Feld b4 für einen Springer auf a6, " +
      "kostet aber ein Tempo am Flügel, während die Figuren des Königsflügels zu Hause bleiben " +
      "und Weiß das Zentrum aufbaut.",
  },

  "1.d4 f5 2.c4 h6": {
    strategy:
      "Nimmt dem weißen Läufer das Feld g5, doch diese langsame Prophylaxe überlässt Weiß das " +
      "Zentrum, der es aufbaut, während die schwarzen Springer noch zu Hause stehen.",
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
      "Entwickelt eine Figur, deckt e4 und d5 und legt sich noch auf keine Bauernstruktur fest. " +
      "Schwarz kann weiterhin eine solide Stonewall-Mauer, einen klassischen Aufbau oder einen " +
      "fianchettierten Läufer wählen, während Weiß entscheidet, wie scharf er um das Zentrum " +
      "kämpft. Meist entsteht ein Manövrierspiel um die Kontrolle von e4.",
  },

  "1.d4 f5 2.g3 g6": {
    strategy:
      "Bereitet das Fianchetto des Königsläufers für den Leningrader Aufbau vor: Der Läufer " +
      "schützt den König und wirkt auf der langen Diagonale. Der Preis ist ein gelockerter " +
      "Königsflügel, solange der Springer h5 noch nicht deckt; Weiß kann dann mit 3.h4 und h5 " +
      "gegen den Bauern g6 vorgehen. Bei sorgfältigem Spiel entsteht eine dynamische Partie, in " +
      "der der Bauer f5 e4 kontrolliert.",
  },

  "1.d4 f5 2.g3 e6": {
    strategy:
      "Stützt den Bauern f5 und gibt den Läufer f8 frei, sodass ein klassischer oder ein " +
      "Stonewall-Aufbau offen bleibt. Der Preis ist ein eingesperrter Läufer c8, und sobald " +
      "...d5 folgt, wird e5 zu einem Loch für den weißen Springer. Es entsteht eine solide, " +
      "geschlossene Partie, in der Schwarz um e4 kämpft.",
  },

  "1.d4 f5 2.g3 d5": {
    strategy:
      "Stellt sofort den Stonewall-Bauern auf, sodass d5 und f5 das Feld e4 beherrschen. Die " +
      "frühe Festlegung schließt Aufbauten mit dem Bauern auf d6 aus, und e5 ist schon jetzt ein " +
      "Loch, auf das Weiß mit dem Läufer zielen kann. Sobald Schwarz den e-Bauern vorzieht, ist " +
      "der Läufer c8 eingesperrt.",
  },

  "1.d4 f5 2.g3 d6": {
    strategy:
      "Deckt e5 und öffnet dem Läufer c8 eine Diagonale. Der frühe Bauernzug verzichtet auf die " +
      "Stonewall-Struktur, und 2...Sf6 behält dieselben Ideen bei und entwickelt dabei eine " +
      "Figur.",
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
      "Zentrum oder für e4 tut und den a-Bauern blockiert. Weiß kann sich ungestört entwickeln.",
  },

  "1.d4 f5 2.g3 a6": {
    strategy:
      "Ein langsamer Randbauernzug, der weder eine Figur entwickelt noch um das Zentrum kämpft. " +
      "Schwarz hat ein Tempo verbraucht, und Weiß kann sich einfach weiterentwickeln.",
  },

  "1.d4 f5 2.g3 a5": {
    strategy:
      "Ein langsamer Randbauernzug, der b4 kontrolliert, aber weder eine Figur entwickelt noch " +
      "um das Zentrum kämpft, und er schwächt b5. Weiß kann sich einfach weiterentwickeln.",
  },

  "1.d4 f5 2.g3 b6": {
    strategy:
      "Schwächt die lange Diagonale: Nach 3.Lg2 ist der Turm a8 angegriffen, und ...Lb7 würde " +
      "den Läufer durch Lxb7 verlieren. Schwarz muss ein Tempo für eine Sperre aufwenden.",
  },

  "1.d4 f5 2.g3 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel, schwächt aber die lange Diagonale: 3.Lg2 greift den Turm a8 " +
      "an, ...Lb7 geht durch Lxb7 verloren, und Schwarz muss sperren. Der Bauer b5 ist danach " +
      "ein Ziel für a4.",
  },

  "1.d4 f5 2.g3 c5": {
    strategy:
      "Greift d4 an, entwickelt aber nichts und lässt Weiß die Wahl: Raum gewinnen oder einen " +
      "Bauern nehmen, den Schwarz nur mit Zeitaufwand zurückgewinnt.",
  },

  "1.d4 f5 2.g3 h5": {
    strategy:
      "Zielt auf ...h4 gegen g3, entwickelt aber nichts und kämpft um kein Zentrumsfeld. Der " +
      "Königsflügel ist gelockert, und Weiß kann sich ungestört weiterentwickeln.",
  },

  "1.d4 f5 2.g3 Nh6": {
    strategy:
      "Deckt den Bauern f5 vom Rand aus, doch 3.Lxh6 gxh6 hinterlässt isolierte Doppelbauern " +
      "auf der h-Linie und keinen Bauern mehr, der auf g6 dazwischenziehen kann. Nach 4.e4 " +
      "erlaubt 4...fxe4?? 5.Dh5#, und das Läuferpaar wiegt den entblößten König nicht auf.",
  },

  "1.d4 f5 2.g3 e5": {
    strategy:
      "Gibt den e-Bauern für zu wenig her: Nach 3.dxe5 kann Weiß den Mehrbauern behaupten, und " +
      "die offenen Linien wiegen ihn für Schwarz nicht auf.",
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
      "Entwickelt den Königsspringer und deckt e4 und d5, sodass der weiße e-Bauer nicht " +
      "vorrücken kann, ohne einen Bauern zu verlieren. Schwarz hält jeden holländischen Aufbau " +
      "offen und kämpft von Anfang an um e4. Der Preis ist ein Königsflügel, der durch den " +
      "f-Bauern bereits gelockert ist und den der weiße Läufer auszunutzen versuchen kann.",
  },

  "1.d4 f5 2.Nc3 e6": {
    strategy:
      "Öffnet dem Königsläufer den Weg und bereitet einen soliden Aufbau vor, entweder eine " +
      "geschlossene Bauernkette im Zentrum oder einen flexiblen Aufbau mit Springer und Läufer. " +
      "Der Zug trägt nichts zur Kontrolle von e4 bei, sodass Weiß das Zentrum sofort öffnen kann " +
      "und dort einen entwickelten Springer hat. Schwarz steht sicher, auch wenn der " +
      "weißfeldrige Läufer vorerst eingesperrt ist.",
  },

  "1.d4 f5 2.Nc3 d5": {
    strategy:
      "Bewacht e4 mit einem zweiten Bauern, legt aber die Bauernstruktur fest, bevor eine Figur " +
      "entwickelt ist. Der Zug hinterlässt auf e5 ein dauerhaftes Loch, auf das 3.Lf4 zielt, und " +
      "schwächt e6. Weiß kann auch einen Gambitbauern im Zentrum anbieten, um sich schnell zu " +
      "entwickeln.",
  },

  "1.d4 f5 2.Nc3 g6": {
    strategy:
      "Steuert ein Fianchetto des Königsläufers auf der langen Diagonale an. Der g-Bauer tut " +
      "nichts für e4, sodass Weiß sofort im Zentrum zuschlagen und sich einen Anteil daran " +
      "sichern kann, ohne das Bauernopfer, das nach vorheriger Springerentwicklung nötig gewesen " +
      "wäre. Der Zug ist korrekt, doch nach dem Tausch auf e4 steht der e7-Bauer auf einer " +
      "halboffenen Linie.",
  },

  "1.d4 f5 2.Nc3 d6": {
    strategy:
      "Bereitet ...e5 vor und öffnet die Diagonale des Läufers auf c8, wobei die übrigen " +
      "Aufbauten in Reserve bleiben. Für e4 tut der Zug nichts, sodass Weiß sofort einen Anteil " +
      "am Zentrum gewinnen kann, ohne einen Bauern zu opfern.",
  },

  "1.d4 f5 2.Nc3 c6": {
    strategy:
      "Bereitet ...d5 mit Unterstützung des c-Bauern vor und strebt eine solide Bauernmauer an. " +
      "Der Zug ist langsam und tut nichts für e4: Weiß kann das Zentrum sofort öffnen, und auch " +
      "wenn Schwarz den wiedergenommenen Springer mit ...d5 angreifen kann, bleibt Weiß in der " +
      "Entwicklung voraus.",
  },

  "1.d4 f5 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, von wo der Läufer über die lange Diagonale auf e4 wirkt. Der Zug ist " +
      "langsam und entwickelt am Königsflügel nichts, sodass Weiß das Zentrum sofort öffnen und " +
      "in der Entwicklung voraus bleiben kann.",
  },

  "1.d4 f5 2.Nc3 c5": {
    strategy:
      "Greift d4 an, bevor eine Figur entwickelt ist. Weiß kann antworten, indem es das Zentrum " +
      "mit d5 schließt, wobei Schwarz den f-Bauern bereits vorgerückt hat, oder indem es auf c5 " +
      "schlägt, wonach Schwarz Zeit aufwenden muss, um den Bauern zurückzugewinnen.",
  },

  "1.d4 f5 2.Nc3 Nc6": {
    strategy:
      "Greift d4 an, doch 3.d5 vertreibt den Springer. Er muss bald darauf erneut zurückweichen, " +
      "sodass Schwarz Zeit verliert und Raum im Zentrum preisgibt.",
  },

  "1.d4 f5 2.Nc3 e5": {
    strategy:
      "Gibt einen Bauern, um das Zentrum zu öffnen: 3.dxe5 nimmt ihn, und die Versuche, ihn " +
      "zurückzugewinnen, kosten weitere Zeit. Schwarz erhält etwas schnellere Entwicklung, aber " +
      "nichts Konkretes für das Material.",
  },

  "1.d4 f5 2.Nc3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo b4 und c5 seine einzigen Felder nach vorn sind, und " +
      "tut nichts für e4 oder d5. Weiß kann sofort e4 spielen, ohne das Bauernopfer, das ein " +
      "entwickelter Springer erzwingen würde.",
  },

  "1.d4 f5 2.Nc3 Nh6": {
    strategy:
      "Strebt nach f7, wo der Springer e5 und d6 decken würde, doch auf h6 kann er sofort " +
      "geschlagen werden: 3.Lxh6 gxh6 hinterlässt Schwarz isolierte Doppelbauern auf der " +
      "h-Linie.",
  },

  "1.d4 f5 2.Nc3 a6": {
    strategy:
      "Nimmt dem Springer auf c3 das Feld b5 und bereitet ...b5 vor, verbraucht aber ein Tempo " +
      "am Flügel, während die schwarze Entwicklung und das Zentrum noch ausstehen, und Weiß kann " +
      "ungehindert das Zentrum besetzen.",
  },

  "1.d4 f5 2.Nc3 a5": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel und sichert b4 für einen Springer von a6, verbraucht " +
      "aber ein Tempo am Flügel, während die Figuren des Königsflügels zu Hause bleiben. Weiß " +
      "kann sofort mit 3.e4 das Zentrum öffnen.",
  },

  "1.d4 f5 2.Nc3 h6": {
    strategy:
      "Nimmt dem weißen Läufer das Feld g5, doch diese langsame Prophylaxe entwickelt nichts und " +
      "schwächt g6. Weiß kann in Ruhe entwickeln oder das Zentrum besetzen, während die " +
      "schwarzen Springer noch zu Hause stehen.",
  },

  "1.d4 f5 2.Nc3 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel, entwickelt aber nichts, lässt g6 ohne Bauerndeckung und " +
      "schließt ...h6 gegen einen Läufer auf g5 aus. Weiß kann das Zentrum besetzen oder den " +
      "Läufer entwickeln und sieht sich keiner Drohung gegenüber.",
  },

  "1.d4 f5 2.Nc3 Kf7": {
    strategy:
      "Gibt die Rochade auf und stellt den König dorthin, wo e4 ihn bloßlegt: Nach 3.e4 fxe4 " +
      "4.Sxe4 hat Weiß mehrere Schachgebote zur Hand, während keine schwarze Figur entwickelt " +
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
      "Der natürliche Entwicklungszug: Der Springer kontrolliert e4, deckt h5 und hält jeden " +
      "holländischen Aufbau offen, von der soliden Bauernkette bis zum Fianchetto des " +
      "Königsläufers. Schwarz legt sich noch nicht fest, und Weiß muss entscheiden, wie er dem " +
      "gewählten Plan begegnet. Der Preis ist ein langsamerer Griff nach dem Zentrum, als es " +
      "...d5 sofort bringen würde.",
  },

  "1.d4 f5 2.Nf3 e6": {
    strategy:
      "Öffnet dem Läufer von f8 den Weg und stützt ein späteres ...d5, um einen soliden Aufbau " +
      "um die Bauern e6 und f5 vorzubereiten. Meist führt der Zug in dieselben Stellungen wie " +
      "die frühe Springerentwicklung. Der Preis ist, dass der e6-Bauer den Läufer auf c8 " +
      "einsperrt, ein dauerhaftes Problem, wenn Schwarz eine Bauernkette auf hellen Feldern " +
      "aufbaut.",
  },

  "1.d4 f5 2.Nf3 d5": {
    strategy:
      "Errichtet sofort eine Bauernmauer auf d5 und f5, sodass e4 fest in schwarzer Hand ist. " +
      "Der Zug ist gesund, legt aber den d-Bauern fest, bevor eine Figur entwickelt ist. Da " +
      "weder der d- noch der f-Bauer jemals e5 decken kann, wird dieses Feld zu einem " +
      "dauerhaften Vorposten für den weißen Springer.",
  },

  "1.d4 f5 2.Nf3 d6": {
    strategy:
      "Deckt e5, sodass sich der weiße Springer dort nicht festsetzen kann, öffnet die Diagonale " +
      "des Läufers auf c8 und bereitet eine Entwicklung am Königsflügel vor. Gesund, aber " +
      "weniger flexibel: Der d-Bauer legt sich fest, bevor die Figuren entwickelt sind, und eine " +
      "Bauernmauer mit ...d5 würde nun ein Tempo kosten.",
  },

  "1.d4 f5 2.Nf3 g6": {
    strategy:
      "Steuert ein Fianchetto am Königsflügel an, stellt den Läufer auf die lange Diagonale und " +
      "schließt die Diagonale e8-h5. Spielbar, aber weniger flexibel als zuerst den Springer zu " +
      "entwickeln, da sich Schwarz auf das Fianchetto festlegt, bevor der Springer entwickelt " +
      "ist.",
  },

  "1.d4 f5 2.Nf3 c6": {
    strategy:
      "Bereitet ...d5 für eine solide Bauernkette vor und öffnet der Dame die Diagonale nach b6 " +
      "und a5. Gesund, aber langsam: Der Zug entwickelt nichts, und Springer und e-Bauer müssen " +
      "erst noch folgen.",
  },

  "1.d4 f5 2.Nf3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, das den Läufer von c8 auf die lange Diagonale bringt, wo er " +
      "zusätzlich Druck auf e4 ausübt und den Springer auf f3 ins Visier nimmt. Gesund, aber " +
      "selten und langsam: Der Königsflügel ist noch unentwickelt, und Weiß kann dem Läufer mit " +
      "einem eigenen Fianchetto entgegentreten.",
  },

  "1.d4 f5 2.Nf3 c5": {
    strategy:
      "Greift d4 an, bevor eine Figur entwickelt ist. 3.d5 gewinnt Raum und nimmt den schwarzen " +
      "Figuren die Felder c6 und e6, während Schwarz nach 3.dxc5 weitere Züge aufwenden muss, um " +
      "den Bauern zurückzugewinnen.",
  },

  "1.d4 f5 2.Nf3 e5": {
    name: "Holländische Verteidigung: Omega-Isis-Gambit",
    strategy:
      "Bietet sofort den e-Bauern an. Nach 3.dxe5 hat Schwarz rasche Entwicklung und offene " +
      "Linien, doch sie wiegen den Bauern und den gelockerten Königsflügel nicht auf.",
  },

  "1.d4 f5 2.Nf3 Nc6": {
    strategy:
      "Entwickelt den Springer, doch 3.d5 greift ihn sofort an. Er kann weder nach e5 noch nach " +
      "d4 ziehen, ohne verloren zu gehen, also muss er zurück, und Schwarz hat Zeit verloren, " +
      "während der weiße Bauer auf d5 Raum gewinnt.",
  },

  "1.d4 f5 2.Nf3 Na6": {
    strategy:
      "Ein Randspringer, der auf b4 und c5 zielt, aber nichts für das Zentrum oder den " +
      "Königsflügel tut und die Entwicklung am Königsflügel hinauszögert. Weiß entwickelt sich " +
      "ungehindert.",
  },

  "1.d4 f5 2.Nf3 Nh6": {
    strategy:
      "Erlaubt 3.Lxh6 gxh6, was die schwarzen Bauern am Königsflügel zerrüttet; ansonsten steht " +
      "der Springer am Rand schlecht, mit wenigen Zielfeldern.",
  },

  "1.d4 f5 2.Nf3 a6": {
    strategy:
      "Investiert ein Tempo in einen Flügelbauern, der weder entwickelt noch um das Zentrum " +
      "kämpft, sodass Weiß sich einfach ungehindert entwickelt.",
  },

  "1.d4 f5 2.Nf3 a5": {
    strategy:
      "Investiert ein Tempo in einen Flügelbauern, der nichts entwickelt, nicht um das Zentrum " +
      "kämpft und b5 schwächt. Weiß hat im Zentrum freie Hand.",
  },

  "1.d4 f5 2.Nf3 h6": {
    strategy:
      "Investiert ein Tempo, um Lg5 zu verhindern, das noch gar nicht droht, und schwächt g6. " +
      "Schwarz gerät in Entwicklungsrückstand, während Weiß sich ungehindert entwickelt.",
  },

  "1.d4 f5 2.Nf3 h5": {
    strategy:
      "Zieht einen Randbauern vor, der nichts droht und g5 und g6 schwächt. Weiß entwickelt sich " +
      "ungehindert, während die schwarzen Springer und Läufer noch auf ihren Ausgangsfeldern " +
      "stehen.",
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
