import type { OpeningTexts } from "../book.ts";

// German prose for d4-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.d4 Nf6 2.c4": {
    name: "Indische Verteidigung: Normalvariante",
    strategy:
      "Erobert einen größeren Anteil am Zentrum und kontrolliert d5; es folgen Sc3 und e4 mit " +
      "breitem Bauernzentrum oder ein ruhigeres Sf3. Schwarz wählt dann die Struktur: " +
      "Nimzo-Indisch, Damenindisch oder Bogoljubow-Indisch nach ...e6, Königsindisch oder " +
      "Grünfeld-Indisch nach ...g6 oder Benoni- und altindische Aufbauten. Der Preis ist die " +
      "Menge an Theorie, die Weiß gegen all diese Verteidigungen kennen muss.",
  },

  "1.d4 Nf6 2.Nf3": {
    name: "Indische Verteidigung: Springervariante",
    strategy:
      "Entwickelt den Springer, deckt d4 und e5 und hält c4 in Reserve, bis Schwarz seinen " +
      "Aufbau zeigt. Nach ...d5 oder ...e6 kann Weiß ins Damengambit übergehen oder ein " +
      "ruhigeres System wählen, etwa das London-System mit Lf4, das Colle-System mit e3 und " +
      "Ld3 oder den Torre-Angriff mit Lg5. Der Zug legt sich weniger fest als 2.c4, doch Weiß " +
      "muss die indischen Varianten trotzdem kennen, wenn Schwarz ...g6 spielt und c4 folgt.",
  },

  "1.d4 Nf6 2.Bg5": {
    name: "Trompowsky-Angriff",
    background:
      "Die Eröffnung ist nach Octávio Trompowsky (1897–1984) benannt, einem früheren " +
      "brasilianischen Meister, der sie in den 1930er- und 1940er-Jahren spielte. Karel " +
      "Opočenský spielte sie ebenfalls in den 1930er-Jahren, und sie ist auch als " +
      "Opočenský-Eröffnung bekannt.",
    strategy:
      "Droht Lxf6 mit Doppelbauern für Schwarz und umgeht die umfangreiche indische Theorie nach " +
      "2.c4. Der Preis ist ein früher Läuferzug, bevor das Zentrum geklärt ist, der Zeit kosten " +
      "kann, wenn Schwarz den Läufer angreift. Schwarz kann Doppelbauern für das Läuferpaar in " +
      "Kauf nehmen oder sie ganz vermeiden.",
  },

  "1.d4 Nf6 2.Bf4": {
    name: "Indische Verteidigung: Beschleunigtes London-System",
    background:
      "Das London-System ist nach dem Londoner Turnier von 1922 benannt, in dem es siebenmal " +
      "aufs Brett kam. Der Irisch-Amerikaner James Mason hatte es zuvor als erster Spieler " +
      "von Meisterstärke regelmäßig angewandt, unter anderem in Wien 1882, London 1883 und " +
      "New York 1889.",
    strategy:
      "Entwickelt den Läufer außerhalb der Bauernkette, bevor e3 ihn einsperrt, und baut danach " +
      "unabhängig vom schwarzen Aufbau eine solide Stellung auf. Der Preis ist b2: Ohne den " +
      "Läufer auf c1 deckt nichts diesen Bauern, sodass eine Dame auf b6 ihn angreifen kann. Der " +
      "Aufbau ist leicht zu erlernen, stellt Schwarz aber vor wenig Aufgaben, der sich frei " +
      "entwickeln kann.",
  },

  "1.d4 Nf6 2.Nc3": {
    strategy:
      "Kontrolliert e4 und d5 und bereitet e4 vor, verstellt aber den c-Bauern, sodass der " +
      "Damengambit-Aufbau mit c4 nicht mehr möglich ist. Nach ...d5 spielt Weiß meist Lg5 " +
      "(Richter-Weressow-Angriff) oder Lf4 (Rapport-Jobava-System). Gesund, aber eine " +
      "Nebenwahl: Der Richter-Weressow-Angriff war auf höchstem Niveau nie sehr populär.",
  },

  "1.d4 Nf6 2.g3": {
    name: "Indische Verteidigung: Tartakower-Angriff",
    strategy:
      "Bereitet das Fianchetto des Königsläufers vor, um Druck auf d5 und die lange Diagonale " +
      "auszuüben, in einem ruhigen Aufbau, den Weiß später vervollständigt. Weiß entwickelt sich " +
      "ruhig, doch solange kein Bauer auf c4 steht, kann Schwarz im Zentrum Raum gewinnen. " +
      "Gesund, aber selten und langsamer als 2.c4 oder 2.Sf3.",
  },

  "1.d4 Nf6 2.e3": {
    strategy:
      "Stützt d4 und öffnet dem Läufer f1 den Weg, mit dem Ziel eines langsamen, soliden " +
      "Aufbaus, sperrt aber den Läufer auf c1 ein, sofern dieser nicht später nach b2 geht. " +
      "Schwarz erhält ein bequemes Spiel, da der langsame Plan keinen frühen Druck auf das " +
      "schwarze Zentrum ausübt.",
  },

  "1.d4 Nf6 2.c3": {
    strategy:
      "Stützt d4 für ein ruhiges Entwicklungssystem, nimmt aber dem Damenspringer das Feld c3, " +
      "und c4 kostet nun ein zweites Tempo. Gesund, doch Schwarz kann seinen Aufbau frei wählen, " +
      "und Weiß tut wenig im Kampf um e4 und d5.",
  },

  "1.d4 Nf6 2.b3": {
    name: "Baskische Eröffnung",
    strategy:
      "Bereitet Lb2 vor, doch mit dem Bauern auf d4 stützt der Läufer vor allem diesen Bauern, " +
      "bis sich das Zentrum öffnet. Weiß tut derweil wenig im Zentrum, sodass Schwarz dort Raum " +
      "gewinnen oder gegen d4 vorgehen kann. Gesund, aber langsam.",
  },

  "1.d4 Nf6 2.d5": {
    name: "Indische Verteidigung: Vorstoßvariante",
    strategy:
      "Gewinnt Raum und verhindert ...d5, zieht aber den d-Bauern ein zweites Mal und macht ihn " +
      "zur Zielscheibe. Schwarz untergräbt ihn mit ...e6, und nach dxe6 fxe6 hat Weiß keinen " +
      "vorgerückten Zentrumsbauern mehr.",
  },

  "1.d4 Nf6 2.e4": {
    strategy:
      "Bietet den e-Bauern an: 2...Sxe4 gewinnt ihn, und Weiß muss Kompensation in schneller " +
      "Entwicklung suchen. Nach 3.Sc3 Sxc3 4.bxc3 hat Weiß zusätzlich zum Minusbauern " +
      "Doppelbauern auf der c-Linie.",
  },

  "1.d4 Nf6 2.f3": {
    name: "Paleface-Angriff",
    background:
      "Der Name „Paleface Attack“ erscheint 1986 in Eric Schillers Buch über das " +
      "Blackmar-Diemer-Gambit, das Weiß hier meist mit e4 und Sc3 zu erreichen sucht.",
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer g1 das Feld f3 und schwächt den Königsflügel " +
      "einschließlich der Diagonale e1–h4. Nach 2...d5 3.e4 dxe4 4.fxe4 Sxe4 hat Schwarz einfach " +
      "einen Mehrbauern, daher muss Weiß den Bauern meist stattdessen für schnelle Entwicklung " +
      "opfern.",
  },

  "1.d4 Nf6 2.f4": {
    name: "Canard-Eröffnung",
    strategy:
      "Kontrolliert e5 und strebt eine solide Bauernmauer im Zentrum an, verwendet aber einen " +
      "Zug auf den f-Bauern, der nichts entwickelt und e3, e4 sowie die Diagonale e1–h4 " +
      "schwächt. Schwarz entwickelt sich ungehindert, und der Springer auf f6 blickt bereits auf " +
      "e4, das Loch, das ein solcher Aufbau hinterlässt.",
  },

  "1.d4 Nf6 2.g4": {
    name: "Indische Verteidigung: Gibbins-Weidenhagen-Gambit",
    strategy:
      "Bietet den g-Bauern an: Nach 2...Sxg4 öffnet e3 oder e4 der Dame die Diagonale zum " +
      "Springer auf g4. Schwarz behält den Mehrbauern, indem er den Springer deckt oder " +
      "zurückzieht, und der weiße Königsflügel bleibt für wenig Gegenwert geschwächt.",
  },

  "1.d4 Nf6 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 vor, lässt aber den b-Bauern ungedeckt: Nach " +
      "...e6 droht der Läufer f8 mit ...Lxb4+, sodass Weiß einen Zug zur Deckung des Bauern " +
      "aufwenden oder ihn aufgeben muss. Der Zug entwickelt nichts und schwächt den Damenflügel.",
  },

  "1.d4 Nf6 2.a3": {
    strategy:
      "Ein abwartender Zug, der ...Lb4+ verhindert und b4 vorbereitet, aber nichts entwickelt " +
      "und um kein Zentrumsfeld kämpft. Schwarz gewinnt Zeit, das Zentrum aufzubauen.",
  },

  "1.d4 Nf6 2.a4": {
    strategy:
      "Kontrolliert b5 und gewinnt etwas Raum am Damenflügel, entwickelt aber nichts und " +
      "schwächt b4. Schwarz baut das Zentrum auf, während Weiß noch den Großteil seiner Armee " +
      "entwickeln muss.",
  },

  "1.d4 Nf6 2.h3": {
    strategy:
      "Verhindert ...Sg4 und ein späteres ...Lg4, verwendet aber ein Tempo auf einen Randbauern, " +
      "der weder eine Figur entwickelt noch etwas zum Zentrum beiträgt. Schwarz gewinnt im " +
      "Zentrum Raum.",
  },

  "1.d4 Nf6 2.h4": {
    strategy:
      "Leitet einen Randbauernvorstoß mit den Ideen Lg5 und h5 ein, entwickelt aber nichts und " +
      "schwächt g4 und den Königsflügel. Schwarz besetzt in aller Ruhe das Zentrum.",
  },

  "1.d4 Nf6 2.Nd2": {
    strategy:
      "Verstellt den Läufer auf c1 und nimmt der Dame die Deckung von d4, sodass ...c5 oder " +
      "...e5 einen ungedeckten Bauern angreift. Der Springer zielt auf e4 und c4, doch der " +
      "schwerfällige Aufbau kostet Zeit, die Schwarz im Zentrum nutzt.",
  },

  "1.d4 Nf6 2.Na3": {
    strategy:
      "Stellt den Springer an den Rand, wo er auf c4 und b5 zielt, aber weder d4 noch e4 deckt. " +
      "Weiß verliert Zeit, während Schwarz das Zentrum aufbaut.",
  },

  "1.d4 Nf6 2.Nh3": {
    strategy:
      "Strebt über den Rand nach f4, doch dort kann der Springer mit ...e5 oder ...g5 vertrieben " +
      "werden, und bis dahin tut er nichts für das Zentrum. Schwarz baut das Zentrum auf.",
  },

  "1.d4 Nf6 2.Bd2": {
    strategy:
      "Entwickelt den Läufer auf ein passives Feld, wo er dem Damenspringer d2 nimmt und die " +
      "Deckung von d4 durch die Dame verstellt. Den Läufer aktiv außerhalb der Bauernkette zu " +
      "entwickeln, würde d2 und die d-Linie freihalten.",
  },

  "1.d4 Nf6 2.Be3": {
    strategy:
      "Entwickelt den Läufer vor den e-Bauern, sodass der Läufer f1 eingesperrt bleibt. " +
      "...Sg4 greift ihn sofort an und gewinnt ein Tempo: Weiß muss den Läufer zurückziehen " +
      "oder ihn gegen den Springer hergeben und erhält nach fxe3 Doppelbauern auf der " +
      "e-Linie.",
  },

  "1.d4 Nf6 2.Qd2": {
    strategy:
      "Bringt die Dame zu früh heraus, wo sie den Läufer auf c1 einsperrt, dem Springer d2 nimmt " +
      "und auf nichts zielt. Schwarz entwickelt sich ungehindert.",
  },

  "1.d4 Nf6 2.Qd3": {
    strategy:
      "Entwickelt die Dame vor jeder Leichtfigur und nimmt dem Läufer f1 das Feld d3. Schwarz " +
      "kann sie mit natürlichen Entwicklungszügen bedrängen, und Weiß muss noch die ganze Armee " +
      "entwickeln.",
  },

  "1.d4 Nf6 2.Kd2": {
    strategy:
      "Gibt die Rochade auf und sperrt Dame und Läufer ein. 2...Se4+ zwingt den König sofort " +
      "zu einem weiteren Zug, und im Zentrum findet er keinen sicheren Platz.",
  },

  "1.d4 Nf6 2.Bh6": {
    strategy:
      "Verliert den Läufer für nichts: 2...gxh6 schlägt ihn mit einem Bauern. Die schwarzen " +
      "h-Bauern sind dann doppelt und isoliert, doch eine ganze Figur wiegt das bei Weitem " +
      "auf.",
  },

  "1.d4 Nf6": {
    name: "Indische Verteidigung",
    background:
      "Der Begriff „Indische Verteidigung“ ist erstmals 1884 belegt, bezogen auf die " +
      "Eröffnungen, die der indische Spieler Moheschunder Bannerjee gegen John Cochrane " +
      "spielte, und Savielly Tartakower machte ihn Anfang der 1920er-Jahre populär. Die " +
      "hypermoderne Schule setzte sich in den 1920er-Jahren für diese Verteidigungen ein, " +
      "voll anerkannt wurden sie aber erst, als russische Spieler Ende der 1940er-Jahre " +
      "zeigten, dass sie für Schwarz korrekt sind.",
  },

  "1.d4 Nf6 2.c4 e6": {
    strategy:
      "Öffnet dem Königsläufer die Diagonale und hält den Aufbau flexibel: Schwarz kann einen " +
      "Springer fesseln, den Damenläufer fianchettieren oder das Zentrum sofort angreifen und " +
      "entscheidet erst, nachdem er den dritten Zug von Weiß gesehen hat. Der Preis ist der " +
      "Läufer c8, den der Bauer e6 einsperrt, weshalb er meist über ein Fianchetto herauskommt.",
  },

  "1.d4 Nf6 2.c4 g6": {
    name: "Königsindische Verteidigung",
    background:
      "Bis Mitte der 1930er-Jahre galt sie allgemein als höchst zweifelhaft, doch die " +
      "Analysen und Partien von Alexander Konstantinopolski, Isaak Boleslawski und David " +
      "Bronstein trugen dazu bei, dass sie deutlich mehr Ansehen und Verbreitung fand. Sie " +
      "zählt zu den Lieblingseröffnungen der früheren Weltmeister Garri Kasparow, Bobby " +
      "Fischer und Michail Tal.",
    strategy:
      "Bereitet das Fianchetto des Königsläufers und die Rochade vor und lässt Weiß ein breites " +
      "Bauernzentrum errichten, das Schwarz dann von der Flanke aus angreift. Die Stellungen " +
      "sind scharf und unausgeglichen, meist mit Spiel auf entgegengesetzten Flügeln, und beide " +
      "Seiten spielen auf Gewinn. Der Preis sind der Raumvorteil von Weiß und eine große Menge " +
      "Theorie.",
  },

  "1.d4 Nf6 2.c4 c5": {
    name: "Benoni-Verteidigung",
    background:
      "Der Name geht auf Aaron Reinganums Buch „Ben-Oni“ von 1825 zurück, das neben anderen " +
      "Eröffnungen auch das damals unbekannte 1.d4 c5 untersuchte. Die Moderne " +
      "Benoni-Verteidigung mit ...e6 nach 3.d5 wurde von Frank Marshall in New York 1927 " +
      "eingeführt, in den 1950er-Jahren von sowjetischen Spielern wiederbelebt und von " +
      "Michail Tal 1960 in seinem Weltmeisterschaftskampf gegen Michail Botwinnik gespielt.",
    strategy:
      "Greift d4 sofort an und strebt eine Bauernmehrheit am Damenflügel an, gestützt von einem " +
      "fianchettierten Königsläufer. Dafür überlässt Schwarz Weiß Raum und einen starken Bauern " +
      "auf d5, sodass er aktives Spiel finden muss, bevor die Enge spürbar wird. Die Partien " +
      "sind unausgeglichen und oft scharf.",
  },

  "1.d4 Nf6 2.c4 d6": {
    name: "Altindische Verteidigung",
    background:
      "Siegbert Tarrasch führte sie 1902 ein, doch sie wird eher mit Michail Tschigorin " +
      "verbunden, der sie fünf Jahre später übernahm und gegen Ende seiner Laufbahn als " +
      "Vorreiter spielte. Sie hat nie die Verbreitung der Königsindischen Verteidigung " +
      "erreicht, doch manche Königsindisch-Spieler wählen sie, um der Sämisch- und der " +
      "Awerbach-Variante auszuweichen.",
    strategy:
      "Bereitet ...e5 mit einem kompakten Aufbau vor und lässt offen, ob Schwarz den Läufer " +
      "solide nach e7 setzt oder königsindisch fianchettiert. Die Stellung ist solide, aber " +
      "meist beengt, weil der Läufer auf e7 weniger aktiv ist als auf g7, und es fehlen die " +
      "dynamischen Chancen der Königsindischen Verteidigung.",
  },

  "1.d4 Nf6 2.c4 Nc6": {
    name: "Mexikanische Verteidigung",
    background:
      "Sie entstand in den 1920er-Jahren mit dem mexikanischen Großmeister Carlos Torre, " +
      "daher der Name Mexikanische Verteidigung, und dem US-amerikanischen Meister Alexander " +
      "Kevitz. Nach Jahrzehnten der Vergessenheit belebte der Internationale Meister Georgi " +
      "Orlow sie 1992 mit einer Broschüre und 1998 mit einem Buch wieder und taufte sie " +
      "„Black Knights’ Tango“.",
    strategy:
      "Entwickelt eine Figur und übt Druck auf d4 aus, sodass ...e5 folgen kann; Schwarz hofft, " +
      "Weiß zu verfrühten Bauernvorstößen zu verleiten. Der Springer verstellt den c-Bauern, und " +
      "eine Entwicklungsantwort erschwert ...e5, weshalb Schwarz oft zu einem bescheideneren " +
      "Aufbau wechselt. Gesund, aber abseitig und reich an Zugumstellungen.",
  },

  "1.d4 Nf6 2.c4 c6": {
    name: "Slawisch-Indisch",
    strategy:
      "Bereitet ...d5 und eine solide Bauernkette vor, wobei der Läufer c8 noch frei " +
      "herauskommen kann, bevor der e-Bauer ihn einsperrt. Der c-Bauer legt sich früh fest, " +
      "sodass ein rasches ...c5 ein Tempo kosten würde, doch Schwarz kann stattdessen immer noch " +
      "ein kompaktes Bauernzentrum aufbauen.",
  },

  "1.d4 Nf6 2.c4 b6": {
    name: "Beschleunigte Damenindische Verteidigung",
    background:
      "Sie gilt als ungenauer als die übliche damenindische Zugfolge 2...e6 3.Sf3 b6: In der " +
      "Partie Aljechin–König, Wien 1922, stand Weiß nach 3.Sc3 Lb7 4.Dc2 d5 5.cxd5 Sxd5 6.Sf3 " +
      "besser. James Plaskett und Raymond Keene untersuchen die Variante in ihrem Buch über " +
      "die Englische Verteidigung von 1987.",
    strategy:
      "Bereitet ...Lb7 vor, um e4 und d5 zu kontrollieren. Solange der e-Bauer nicht gezogen " +
      "ist, kann der Läufer f8 keinen Springer auf c3 fesseln, sodass Weiß sich frei entwickeln " +
      "und e4 vorbereiten kann; verhindert Schwarz das mit ...d5, gewinnt Weiß nach dem Abtausch " +
      "auf d5 Zeit gegen den Springer.",
  },

  "1.d4 Nf6 2.c4 e5": {
    name: "Budapester Gambit",
    background:
      "Die erste bekannte Partie war eine freie Partie zwischen Mór Adler und Géza Maróczy am " +
      "5. März 1896 in Budapest. Beachtung fand das Gambit, als Milan Vidmar damit im April " +
      "1918 in Berlin Akiba Rubinstein besiegte, im selben Jahr, in dem Carl Schlechter eine " +
      "Monografie veröffentlichte, die als erstes Buch über die Eröffnung gelten kann.",
    strategy:
      "Opfert einen Bauern für schnelle Entwicklung und aktives Figurenspiel und gewinnt ihn " +
      "meist zurück. Weiß kann versuchen, den Mehrbauern zu behalten, oder ihn für einen " +
      "Entwicklungsvorsprung zurückgeben, sodass die Partie davon abhängt, ob Schwarz' Aktivität " +
      "das Material aufwiegt. Auf Großmeisterebene selten gespielt.",
  },

  "1.d4 Nf6 2.c4 d5": {
    name: "Abgelehntes Damengambit: Marshall-Verteidigung",
    background:
      "Frank Marshall spielte sie in den 1920er-Jahren, gab sie aber auf, nachdem er damit " +
      "1925 in Baden-Baden gegen Alexander Aljechin verloren hatte. Sie gilt als ziemlich " +
      "zweifelhafte Variante des Abgelehnten Damengambits, und erfahrene Spieler wenden sie " +
      "nicht mehr an.",
    strategy:
      "Besetzt sofort das Zentrum, doch Weiß schlägt einfach: Nach 3.cxd5 Sxd5 4.Sf3 gewinnt " +
      "Weiß Zeit gegen den Springer und errichtet ein breites Zentrum, ohne den Gegenstoß ...e5 " +
      "zuzulassen.",
  },

  "1.d4 Nf6 2.c4 b5": {
    name: "Indische Verteidigung: Pyrenäen-Gambit",
    strategy:
      "Bietet einen Bauern für Druck am Damenflügel an, aber ohne einen Bauern auf d5 und ohne " +
      "...c5, das den Damenflügel öffnen würde. Nach 3.cxb5 hat Weiß einen glatten Mehrbauern, " +
      "und der Druck am Damenflügel gleicht das nicht aus, während Weiß sich in Ruhe entwickelt.",
  },

  "1.d4 Nf6 2.c4 a6": {
    strategy:
      "Bereitet ...b5 vor und hält weiße Figuren von b5 fern, tut aber nichts für Zentrum oder " +
      "Entwicklung. Schwarz verwendet ein Tempo auf einen Randbauernzug, während Weiß in aller " +
      "Ruhe das Zentrum aufbaut.",
  },

  "1.d4 Nf6 2.c4 a5": {
    strategy:
      "Verhindert b4, trägt aber nichts zur Entwicklung oder zum Kampf um das Zentrum bei. " +
      "Schwarz verwendet ein Tempo auf den Randbauern, während Weiß das Zentrum besetzt.",
  },

  "1.d4 Nf6 2.c4 Na6": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er auf b4 und c5 zielt und auf c5 zurückschlagen " +
      "kann, falls Schwarz dort mit dem c-Bauern angreift. Von a6 aus tut er nichts für d5 oder " +
      "e5, und Weiß erhält mühelos ein Übergewicht im Zentrum.",
  },

  "1.d4 Nf6 2.c4 h6": {
    strategy:
      "Verhindert Lg5, verwendet aber ein Tempo auf einen Randbauernzug und lässt das Zentrum " +
      "unbeachtet. Weiß baut einfach das Zentrum auf und hat einen Entwicklungsvorsprung.",
  },

  "1.d4 Nf6 2.c4 h5": {
    strategy:
      "Verwendet ein Tempo auf den Randbauern und tut nichts für Zentrum oder Entwicklung; da " +
      "der Bauer h6 schon überschritten hat, kann Schwarz Lg5 nicht mehr mit ...h6 beantworten. " +
      "Weiß entwickelt sich frei, baut das Zentrum auf und hat einen klaren " +
      "Entwicklungsvorsprung.",
  },

  "1.d4 Nf6 2.c4 Ng8": {
    strategy:
      "Macht die Entwicklung des Springers rückgängig und kostet zwei Tempi. Weiß hat ein " +
      "volles Zentrum und ist am Zug, und Schwarz muss mit ...Sf6 von vorn beginnen.",
  },

  "1.d4 Nf6 2.c4 Ng4": {
    strategy:
      "Zieht denselben Springer ein zweites Mal, ohne ein Ziel zu haben: f2 und h2 sind beide " +
      "gedeckt, und h3 kann ihn später zurücktreiben. Weiß baut das Zentrum auf und gewinnt " +
      "weitere Zeit gegen den Springer.",
  },

  "1.d4 Nf6 2.c4 Nh5": {
    strategy:
      "Zieht den Springer ein zweites Mal, und zwar an den Rand, wo seine einzigen Felder nach " +
      "vorn, f4 und g3, von Weiß gedeckt sind. Weiß besetzt das Zentrum und liegt in der " +
      "Entwicklung klar vorn.",
  },

  "1.d4 Nf6 2.c4 Ne4": {
    strategy:
      "Zieht den Springer erneut, nach e4, wo Dc2 oder f3 ihn mit Tempogewinn vertreiben. " +
      "Schwarz hat noch keinen Bauern auf d5 oder f5, der ihn stützt, und Weiß errichtet mit der " +
      "gewonnenen Zeit ein breites Zentrum.",
  },

  "1.d4 Nf6 2.c4 Rg8": {
    strategy:
      "Verschwendet ein Tempo mit dem Turm und verwirkt für immer das Recht zur kurzen " +
      "Rochade, während Zentrum und Entwicklung unberührt bleiben.",
  },

  "1.d4 Nf6 2.c4 g5": {
    name: "Indische Verteidigung: Medusa-Gambit",
    strategy:
      "Verliert sofort einen Bauern: 3.Lxg5 gewinnt ihn, und nach 3...Se4 zieht sich der Läufer " +
      "einfach zurück, während der geschwächte Königsflügel Schwarz keine echte Kompensation " +
      "lässt.",
  },

  "1.d4 Nf6 2.c4 Nd5": {
    strategy:
      "Stellt den Springer ein: 3.cxd5 gewinnt ihn ohne Gegenwert, weil der Bauer d7 die " +
      "Deckung von d5 durch die Dame verstellt und keine andere Figur das Feld deckt.",
  },

  "1.d4 Nf6 2.Nf3 e6": {
    strategy:
      "Öffnet die Diagonale des Läufers f8 und hält sowohl einen soliden Aufbau im Zentrum als " +
      "auch ein Fianchetto des Läufers c8 in Reichweite. Schwarz bleibt flexibel und solide. Der " +
      "Preis ist ein durch den Bauern e6 eingeengter Läufer c8, der seine Diagonale meist erst " +
      "per Fianchetto findet.",
  },

  "1.d4 Nf6 2.Nf3 g6": {
    name: "Ostindische Verteidigung",
    background:
      "Die Encyclopaedia of Chess Openings ordnet die Ostindische Verteidigung unter A48 ein, " +
      "ihre Przepiórka-Variante (3.g3) unter A49. Der Barry-Angriff von Weiß, der mit 3.Sc3 " +
      "beginnt, wurde auf Großmeisterebene von Mark Hebden und Julian Hodgson erprobt.",
    strategy:
      "Bereitet ...Lg7 und die kurze Rochade vor und hält sowohl einen königsindischen als auch " +
      "einen Grünfeld-indischen Aufbau offen. Schwarz lässt Weiß zuerst das Zentrum aufbauen und " +
      "will es später mit Bauernvorstößen angreifen. Der Preis ist, dass Weiß im Zentrum das " +
      "erste Wort hat.",
  },

  "1.d4 Nf6 2.Nf3 d5": {
    name: "Damenbauernspiel: Symmetrische Variante",
    strategy:
      "Stellt dem Bauern einen Bauern entgegen und sichert Schwarz einen Anteil am Zentrum; " +
      "zudem kann der Läufer c8 noch vor ...e6 herauskommen. Die Partie steuert auf klassische " +
      "Damenbauern-Strukturen zu. Der Preis ist, dass Weiß bestimmt, welche Struktur entsteht.",
  },

  "1.d4 Nf6 2.Nf3 b6": {
    name: "Beschleunigte Damenindische Verteidigung",
    background:
      "Gegen 2.c4 gilt ...b6 vor ...e6 wegen 3.Sc3 Lb7 4.Dc2 als ungenauer als die übliche " +
      "damenindische Zugfolge; in Aljechin–König, Wien 1922, stand Weiß nach diesem Aufbau " +
      "besser. Ist der Springer bereits auf f3 festgelegt, steht diese Variante nicht zur " +
      "Verfügung, weshalb das frühe ...b6 gegen 2.Sf3 etwas häufiger gespielt wird als gegen " +
      "2.c4.",
    strategy:
      "Bereitet ...Lb7 vor, das auf e4 und die lange Diagonale wirkt, und hält einen soliden " +
      "Bauernaufbau in Reserve. Schwarz kontrolliert das Zentrum aus der Ferne, statt es zu " +
      "besetzen. Der Preis ist, dass das Zentrum vorerst Weiß gehört.",
  },

  "1.d4 Nf6 2.Nf3 c5": {
    name: "Indische Verteidigung: Spielmann-Indische Variante",
    strategy:
      "Greift d4 sofort an und steuert eine Benoni-Struktur an, wobei Schwarz Zentrumsraum gegen " +
      "Gegenspiel am Damenflügel tauscht. Der Zug ist seltener als die Hauptantworten, und Weiß, " +
      "der c4 nicht spielen muss, kann ein großes Zentrum aufbauen und mit Raumvorteil Druck " +
      "machen.",
  },

  "1.d4 Nf6 2.Nf3 d6": {
    name: "Indische Verteidigung: Tartakower-Verteidigung",
    strategy:
      "Gibt den Läufer c8 frei und bereitet vor, das Zentrum später anzugreifen, während mehrere " +
      "Aufbauten offen bleiben. Solide, aber bescheiden: Der Bauer d6 beansprucht weniger Raum " +
      "als ...d5, und Weiß behält die freie Wahl des Aufbaus.",
  },

  "1.d4 Nf6 2.Nf3 c6": {
    name: "Indische Verteidigung: Tschechisch-Indisch",
    strategy:
      "Bereitet ...d5 hinter einer soliden Bauernkette vor und hält andere Aufbauten in Reserve. " +
      "Weiß muss c4 nicht spielen, und der Bauer c6 hat dem Springer b8 sein natürliches Feld " +
      "genommen.",
  },

  "1.d4 Nf6 2.Nf3 Ne4": {
    name: "Döry-Verteidigung",
    background:
      "Die Döry-Verteidigung war 1937 in Wien Gegenstand eines Thematurniers, das Paul Keres " +
      "gewann. Sie ist selten und geht manchmal in eine Variante der Damenindischen " +
      "Verteidigung über.",
    strategy:
      "Stellt den Springer sofort auf einen zentralen Posten, wo ihn später Bauernzüge oder ein " +
      "Fianchetto des Läufers c8 stützen. Dieser Springer hat nun zweimal gezogen, und Weiß kann " +
      "ihn mit einem Springerzug nach d2 herausfordern, um ihn abzutauschen oder ihn nach Sfd2 " +
      "mit f3 zu vertreiben und Zeit für e4 zu gewinnen.",
  },

  "1.d4 Nf6 2.Nf3 Nc6": {
    strategy:
      "Entwickelt einen Springer, lädt aber zu 3.d5 ein, das ihn sofort angreift. 3...Se5 " +
      "verliert die Figur nach 4.Sxe5, also geht der Springer nach b8 zurück oder nach a5 " +
      "oder b4, wo er bald weiter vertrieben wird, und Weiß hat Raum und Zeit gewonnen.",
  },

  "1.d4 Nf6 2.Nf3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 ins Auge fasst, aber nichts für das " +
      "Zentrum tut. Weiß kann im Zentrum Raum gewinnen, während die Figur abseits steht.",
  },

  "1.d4 Nf6 2.Nf3 Rg8": {
    strategy:
      "Zieht den Turm ohne Zweck, verliert ein Tempo und gibt das Recht zur kurzen Rochade auf. " +
      "Keine weitere Figur ist entwickelt, und der König hat seinen natürlichen Schutz verloren.",
  },

  "1.d4 Nf6 2.Nf3 a6": {
    name: "Indische Verteidigung: Springervariante, Alburt-Miles-Variante",
    strategy:
      "Bereitet eine Expansion am Damenflügel vor, verbraucht aber ein Tempo für einen " +
      "Randbauern, während Zentrum und Entwicklung unberührt bleiben. Weiß kann in aller Ruhe " +
      "das Zentrum aufbauen.",
  },

  "1.d4 Nf6 2.Nf3 a5": {
    strategy:
      "Verhindert b4 und gewinnt Raum am Damenflügel, verbraucht aber ein Tempo für einen " +
      "Randbauern und schwächt das Feld b5. Weder das Zentrum noch die Entwicklung werden " +
      "angegangen, sodass Weiß einfach das Zentrum aufbaut.",
  },

  "1.d4 Nf6 2.Nf3 b5": {
    name: "Indische Verteidigung: Polnische Variante",
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet ...Lb7 vor, verbraucht aber mit nur einer " +
      "entwickelten Figur ein Tempo für einen Bauernzug. Der Bauer b5 wird zum Angriffsziel: " +
      "e3 oder e4 öffnet dem Läufer f1 die Diagonale nach b5, und auch a4 oder c4 greifen ihn " +
      "an.",
  },

  "1.d4 Nf6 2.Nf3 h6": {
    strategy:
      "Verhindert Lg5 um den Preis eines Tempos und tut nichts für Zentrum oder Entwicklung. " +
      "Weiß baut das Zentrum auf, als hätte Schwarz gepasst, und die Bauern am Königsflügel sind " +
      "gelockert.",
  },

  "1.d4 Nf6 2.Nf3 h5": {
    strategy:
      "Schwächt g5 und g6, ohne etwas zu entwickeln. Weiß nutzt das geschenkte Tempo für den " +
      "Aufbau des Zentrums, und der vorgerückte h-Bauer bringt dafür nichts ein.",
  },

  "1.d4 Nf6 2.Nf3 Ng8": {
    strategy:
      "Zieht den Springer auf sein Ausgangsfeld zurück und macht den ersten Zug von Schwarz " +
      "ungeschehen. Weiß erhält zwei freie Tempi im Zentrum und kann sich nach Belieben " +
      "aufbauen.",
  },

  "1.d4 Nf6 2.Nf3 Ng4": {
    strategy:
      "Zieht den Springer ein zweites Mal ohne echte Drohung, denn Springer f3 und Turm h1 " +
      "decken h2, und der König deckt f2. 3.h3 vertreibt ihn, sodass Schwarz ein Tempo " +
      "verloren und Weiß einen nützlichen Zug gewonnen hat.",
  },

  "1.d4 Nf6 2.Nf3 Nh5": {
    strategy:
      "Stellt den Springer an den Rand, von wo ihn 3.g4 mit Raumgewinn zurücktreibt; 3...Sf4 " +
      "verlöre ihn nach 4.Lxf4. Schwarz hat zwei Züge mit dem Springer verbraucht und sonst " +
      "nichts entwickelt.",
  },

  "1.d4 Nf6 2.Nf3 Nd5": {
    strategy:
      "Zentralisiert den Springer, doch 3.c4 oder 3.e4 vertreibt ihn mit Tempo, sodass er ein " +
      "drittes Mal ziehen muss, während Weiß ein breites Bauernzentrum aufbaut.",
  },

  "1.d4 Nf6 2.Nf3 e5": {
    strategy:
      "Verliert einen Bauern für wenig: Der Springer f3 und der Bauer d4 greifen beide e5 an, " +
      "und nach 3.Sxe5 d6 4.Sf3 hat Weiß einfach einen Bauern mehr.",
  },

  "1.d4 Nf6 2.Nf3 g5": {
    strategy:
      "Lässt den g-Bauern hängen, den sowohl Sf3 als auch Lc1 angreifen und nichts deckt, " +
      "sodass 3.Lxg5 oder 3.Sxg5 einen Bauern ohne Gegenwert gewinnt und den schwarzen " +
      "Königsflügel lockert.",
  },

  "1.d4 Nf6 2.Bg5 Ne4": {
    background:
      "Die häufigste Antwort auf den Trompowsky-Angriff. Deckt Weiß den Läufer mit 3.h4, " +
      "heißt die Fortsetzung Raptor-Variante.",
    strategy:
      "Greift den Läufer sofort an, sodass Weiß ihn erneut ziehen oder decken muss; Schwarz gibt " +
      "dafür ein Entwicklungstempo her. Danach hält Schwarz den Springer auf e4 und greift das " +
      "Zentrum an, und vertreibt Weiß ihn mit f3, nimmt dieser Bauer dem eigenen Springer das " +
      "beste Feld. Das sorglose 3.Sf3 erlaubt 3...Sxg5 4.Sxg5 e5, und der Abzugsangriff auf den " +
      "Springer holt die verlorene Zeit zurück.",
  },

  "1.d4 Nf6 2.Bg5 e6": {
    name: "Trompowsky-Angriff: Klassische Verteidigung",
    background: "Nach 2...Se4 die zweitbeliebteste Antwort auf den Trompowsky-Angriff.",
    strategy:
      "Erlaubt der Dame, nach Lxf6 zurückzuschlagen, sodass Schwarz Doppelbauern vermeidet, und " +
      "öffnet die Diagonale des Läufers f8. Der Preis ist ein gefesselter Springer, und Weiß " +
      "kann sofort ein breites Zentrum aufbauen. Schlägt Weiß auf f6, behält Schwarz das " +
      "Läuferpaar und eine intakte Bauernstruktur gegen das weiße Zentrum.",
  },

  "1.d4 Nf6 2.Bg5 d5": {
    background:
      "Magnus Carlsen wählte in der ersten Partie der Schachweltmeisterschaft 2016 den " +
      "Trompowsky-Angriff, eine auf höchstem Niveau ungewöhnliche Eröffnung, und Sergei " +
      "Karjakin antwortete mit 2...d5. Nach 3.e3 c5 4.Lxf6 gxf6 endete die Partie nach 42 " +
      "Zügen remis.",
    strategy:
      "Besetzt sofort das Zentrum und erlaubt Lxf6 mit Doppelbauern für Schwarz. Meist schlägt " +
      "Schwarz mit dem e-Bauern zurück, behält so eine verteidigungsfähige Struktur und öffnet " +
      "Diagonalen für die Dame und den Läufer f8; auch das Zurückschlagen mit dem g-Bauern ist " +
      "verbreitet. Dafür hat Schwarz das Läuferpaar, und Weiß hat zwei Züge mit einem Läufer " +
      "verbraucht, nur um ihn abzutauschen.",
  },

  "1.d4 Nf6 2.Bg5 c5": {
    strategy:
      "Greift d4 an und will den c-Bauern gegen den weißen d-Bauern tauschen. Da der Läufer c1 " +
      "verlassen hat, greift ...Db6 den Bauern b2 an, sodass Weiß ihn decken oder opfern muss. " +
      "Weiß kann auch zuerst auf f6 schlagen; sind seine Bauern verdoppelt, setzt Schwarz auf " +
      "das Läuferpaar und auf Spiel gegen das weiße Zentrum.",
  },

  "1.d4 Nf6 2.Bg5 g6": {
    strategy:
      "Bereitet das Fianchetto des Königsläufers vor. Der Zug ist solide, doch 3.Lxf6 erzwingt " +
      "3...exf6 vom Zentrum weg, und die Doppelbauern auf der f-Linie verstellen den " +
      "fianchettierten Läufer, wofür Schwarz das Läuferpaar erhält.",
  },

  "1.d4 Nf6 2.Bg5 c6": {
    background:
      "In der Partie Djordjević–Kovačević, Bela Crkva 1984, spielte Weiß 3.e3?? und gab nach " +
      "3...Da5+ angesichts von 4...Dxg5 auf. Graham Burgess nennt sie in The Quickest Chess " +
      "Victories of All Time „die kürzeste Niederlage eines Meisters überhaupt“.",
    strategy:
      "Öffnet die Diagonale d8–a5 und bereitet ...Db6 gegen den Bauern b2 vor, der ungedeckt " +
      "ist, seit der Läufer c1 verlassen hat. Weiß muss 3.e3?? vermeiden, weil 3...Da5+ König " +
      "und Läufer zugleich angreift; mehrere andere Antworten sind solide. Ein abseitiger, aber " +
      "solider Zug.",
  },

  "1.d4 Nf6 2.Bg5 Nc6": {
    strategy:
      "Entwickelt mit Druck auf d4, verstellt aber den c-Bauern, sodass der Hebel ...c5 warten " +
      "muss. 3.d5 treibt den Springer nach e5, wo er erneut vertrieben werden kann, und 3.Lxf6 " +
      "verdoppelt sofort die schwarzen Bauern. Solide, aber langsamer als die zentralen " +
      "Antworten.",
  },

  "1.d4 Nf6 2.Bg5 b6": {
    strategy:
      "Bereitet das Fianchetto des Damenläufers vor. Nach 3.Lxf6 exf6 hat Schwarz Doppelbauern " +
      "auf der f-Linie, und Weiß kann in Ruhe ein breites Zentrum aufbauen. Spielbar, aber " +
      "langsamer als die zentralen Antworten.",
  },

  "1.d4 Nf6 2.Bg5 d6": {
    strategy:
      "Öffnet den Läufer c8 und bereitet einen flexiblen Aufbau vor, überlässt das Zentrum aber " +
      "vorerst Weiß. Nach 3.Lxf6 exf6 kann Weiß das breitere Bauernzentrum bilden, und Schwarz " +
      "hat für die Doppelbauern auf der f-Linie das Läuferpaar. Solide, aber passiver als die " +
      "zentralen Antworten.",
  },

  "1.d4 Nf6 2.Bg5 h6": {
    strategy:
      "Stellt den Läufer sofort zur Rede, statt eine Figur zu entwickeln. 3.Lxf6 exf6 " +
      "verdoppelt die schwarzen Bauern, und ...h6 war ein verlorenes Tempo, während 3.Lh4 g5 " +
      "4.Lg3 den schwarzen Königsflügel schwächt.",
  },

  "1.d4 Nf6 2.Bg5 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er weder d4 noch e5 kontrolliert, und tut nichts " +
      "gegen 3.Lxf6. Weiß entwickelt sich ungestört.",
  },

  "1.d4 Nf6 2.Bg5 a6": {
    strategy:
      "Ein Randbauernzug, der nichts entwickelt und nichts gegen Lxf6 unternimmt. Weiß baut in " +
      "aller Ruhe auf.",
  },

  "1.d4 Nf6 2.Bg5 a5": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel, entwickelt aber nichts und tut nichts gegen Lxf6, das " +
      "die schwarzen Bauern verdoppelt. Weiß kommt kostenlos zu seiner Entwicklung.",
  },

  "1.d4 Nf6 2.Bg5 b5": {
    strategy:
      "Zieht den b-Bauern vor, bevor eine zweite Figur entwickelt ist, und schwächt c6 und den " +
      "Damenflügel. Der Bauer ist schon ein Ziel: 3.Dd3 oder 3.a4 greift ihn an, und Schwarz " +
      "muss einen weiteren Zug für ihn aufwenden.",
  },

  "1.d4 Nf6 2.Bg5 h5": {
    strategy:
      "Ein Flankenbauernzug, der nichts entwickelt und g5 und g6 dauerhaft schwächt. Er " +
      "verhindert 3.Lxf6 nicht, das die schwarzen Bauern verdoppelt, während Weiß sich " +
      "entwickelt.",
  },

  "1.d4 Nf6 2.Bg5 Ng8": {
    strategy:
      "Bringt den Springer auf sein Ausgangsfeld zurück und macht den einzigen " +
      "Entwicklungszug von Schwarz rückgängig. Weiß hat d4 und den aktiven Läufer auf g5 " +
      "umsonst und einen klaren Entwicklungsvorsprung.",
  },

  "1.d4 Nf6 2.Bg5 Ng4": {
    strategy:
      "Zieht den Springer erneut, ohne etwas zu drohen, auf ein Feld, auf dem ihn 3.h3 sofort " +
      "angreift. Danach hat 3...Sf6 nur Zeit verloren, und 3...Sh6 4.Lxh6 gxh6 zerstört die " +
      "schwarzen Königsflügelbauern.",
  },

  "1.d4 Nf6 2.Bg5 Nh5": {
    strategy:
      "Stellt den Springer an den Rand, wo 3.e3 oder 3.e4 die Diagonale der Dame öffnet und " +
      "Dxh5 droht. Schwarz muss ihn dann mit ...g6 decken, wobei er abseits bleibt, oder ihn " +
      "unter Verlust von zwei Tempi nach f6 zurückführen.",
  },

  "1.d4 Nf6 2.Bg5 Nd5": {
    strategy:
      "Zentralisiert den Springer, doch auf d5 ist er ein Ziel: 3.c4 oder 3.e4 greift ihn " +
      "sofort an. Weiß gewinnt mit Tempo Raum im Zentrum, während Schwarz dieselbe Figur " +
      "zweimal gezogen hat.",
  },

  "1.d4 Nf6 2.Bg5 Rg8": {
    strategy:
      "Verzichtet endgültig auf die kurze Rochade und verbraucht ein Tempo, um g7 zu decken, " +
      "das der Läufer f8 bereits deckt. Weiß entwickelt sich ungestört, und Lxf6 verdoppelt " +
      "weiterhin die schwarzen Bauern.",
  },

  "1.d4 Nf6 2.Bg5 e5": {
    strategy:
      "Bietet den e-Bauern an, doch nach 3.dxe5 ist der Springer an die Dame gefesselt, weil e7 " +
      "nun leer ist: 3...Se4 oder 3...Sg4 erlaubt 4.Lxd8. Schwarz bleibt mindestens einen Bauern " +
      "zurück.",
  },

  "1.d4 Nf6 2.Bf4 d5": {
    name: "Londoner System",
    strategy:
      "Stellt dem Bauern einen Bauern entgegen und baut das klassische Zentrum auf; der Läufer " +
      "c8 kann herauskommen. Weiß erhält den gewünschten Aufbau, eine solide Bauernkette und " +
      "einen Springer, der nach e5 strebt, während Schwarz ein gesundes Spiel hat, in dem Weiß " +
      "die klareren Pläne besitzt. Der Preis ist, dass sich e5 schwer bestreiten lässt: Der " +
      "Läufer f4 und der Bauer d4 machen es zu einem hervorragenden Vorposten.",
  },

  "1.d4 Nf6 2.Bf4 e6": {
    strategy:
      "Öffnet die Diagonale des Läufers f8 und hält jeden Aufbau offen: einen Bauernstand im " +
      "Zentrum, das Fianchetto des Damenläufers oder einen Durchbruch gegen d4. Zudem deckt der " +
      "Bauer d5 und f5 gegen weiße Figuren. Der Preis ist ein Läufer c8, der hinter dem Bauern " +
      "e6 eingesperrt ist und einen Plan braucht, um ins Spiel zu kommen.",
  },

  "1.d4 Nf6 2.Bf4 c5": {
    background:
      "Auf höherem Spielniveau gilt ein frühes ...c5 als beliebte Antwort auf das Londoner " +
      "System. Johnsen und Kovačević hielten 1.d4 Sf6 2.Lf4 c5 3.e3 Db6 für die kritischste " +
      "Variante.",
    strategy:
      "Greift d4 sofort an und zielt auf den Bauern b2, den kein Läufer mehr deckt: Nach 3.e3 " +
      "greift ihn 3...Db6 an, und Weiß muss ihn decken oder für aktives Spiel anbieten. Weiß " +
      "kann stattdessen im Zentrum Raum gewinnen. Der Preis ist ein schärferes Spiel, in dem die " +
      "schwarze Entwicklung zurückbleiben kann, wenn der Damenausflug nichts einbringt.",
  },

  "1.d4 Nf6 2.Bf4 g6": {
    strategy:
      "Bereitet das Fianchetto des Königsläufers und die kurze Rochade vor, einen Aufbau, der " +
      "seinen Druck aus der Distanz ausübt. Schwarz überlässt Weiß vorerst das Zentrum und muss " +
      "einen Durchbruch dagegen vorbereiten. Gegen diesen Aufbau steht der weiße Läufer besser " +
      "auf e2 als auf d3, wo ihm das schwarze Fianchetto wenig Wirkung lässt.",
  },

  "1.d4 Nf6 2.Bf4 b6": {
    strategy:
      "Bereitet das Fianchetto des Damenläufers vor, wo der Läufer e4 kontrolliert. Der Zug ist " +
      "gesund, greift aber d4 nicht an und legt den b-Bauern fest, bevor Schwarz den weißen Plan " +
      "kennt, während Weiß sich frei entwickelt. Derselbe Aufbau ist auch nach ...e6 möglich, " +
      "das zusätzlich einen Bauernstand im Zentrum und einen Durchbruch gegen d4 in Reserve " +
      "hält.",
  },

  "1.d4 Nf6 2.Bf4 d6": {
    strategy:
      "Gibt den Läufer c8 frei und bereitet ...e5 gegen den Läufer f4 oder das Fianchetto des " +
      "Königsläufers vor. Der Zug ist gesund, aber bescheiden: Der Bauer d6 beansprucht weniger " +
      "Raum als ...d5, und Weiß entwickelt sich bequem oder gewinnt im Zentrum Raum.",
  },

  "1.d4 Nf6 2.Bf4 c6": {
    strategy:
      "Bereitet ...d5 mit einer soliden Struktur vor, in der der Läufer c8 nach f5 herauskommen " +
      "kann, und öffnet die Diagonale d8-b6 für ...Db6 gegen b2. Der Zug ist gesund, aber " +
      "weniger direkt als ...c5: Der Bauer nimmt dem Springer b8 das Feld c6, und ...c5 kostet " +
      "später ein zweites Tempo.",
  },

  "1.d4 Nf6 2.Bf4 Ne4": {
    strategy:
      "Stellt den Springer sofort auf einen zentralen Posten, wo ihn später ...d5 stützen soll. " +
      "Weiß kann ihm entgegentreten oder ihn mit einem Bauernzug zurücktreiben, sodass Schwarz " +
      "zwei Züge für eine Figur verbraucht hat. Durchaus spielbar, aber nicht zu empfehlen: Weiß " +
      "entwickelt sich bequem, während der Springer eine Aufgabe sucht.",
  },

  "1.d4 Nf6 2.Bf4 Nh5": {
    strategy:
      "Greift den Läufer an und zielt auf ...Sxf4, was Schwarz das Läuferpaar verschaffen würde. " +
      "Weiß kann den Läufer durch einen Zug erhalten, worauf e3 die Diagonale d1-h5 öffnet und " +
      "der Springer am Rand erneut ziehen muss, oder den Tausch zulassen und wiederschlagen, um " +
      "e5 zu kontrollieren. Durchaus spielbar, aber Schwarz verbraucht Zeit mit dem Springer.",
  },

  "1.d4 Nf6 2.Bf4 Nc6": {
    strategy:
      "Entwickelt den Springer, verstellt aber den c-Bauern und erlaubt 3.d5, das ihn sofort " +
      "angreift. Das Feld e5 steht ihm nicht zur Verfügung, da Lxe5 ihn gewinnt, also muss er " +
      "zurück, und Weiß gewinnt Raum mit Tempo.",
  },

  "1.d4 Nf6 2.Bf4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 ins Auge fasst und c7 deckt, aber nichts " +
      "für das Zentrum tut. Weiß entwickelt sich frei oder gewinnt mit c4 weiteren Raum.",
  },

  "1.d4 Nf6 2.Bf4 Rg8": {
    strategy:
      "Gibt die kurze Rochade endgültig auf, und sein einziger Sinn, ein späteres ...g5 gegen " +
      "den Läufer, lockert die schwarze Stellung weiter. Weiß entwickelt sich einfach, während " +
      "der schwarze König im Zentrum bleibt oder lang rochieren muss.",
  },

  "1.d4 Nf6 2.Bf4 a6": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauernzug, der weder eine Figur entwickelt noch um das " +
      "Zentrum kämpft. Weiß entwickelt sich in aller Ruhe oder gewinnt im Zentrum Raum.",
  },

  "1.d4 Nf6 2.Bf4 a5": {
    strategy:
      "Verbraucht ein Tempo für den Randbauern: Er nimmt Weiß das Feld b4, entwickelt aber " +
      "nichts, schwächt b5 und kämpft nicht um das Zentrum. Weiß entwickelt sich in aller Ruhe.",
  },

  "1.d4 Nf6 2.Bf4 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet ...Lb7 vor, schwächt aber c6 und lässt den " +
      "Bauern b5 ohne Deckung: e3 öffnet dem Läufer f1 die Diagonale nach b5, und auch a4 oder " +
      "Sc3 greifen ihn an. Schwarz muss weitere Zeit für den Bauern aufwenden.",
  },

  "1.d4 Nf6 2.Bf4 e5": {
    strategy:
      "Bietet den e-Bauern als Gambit an und zielt auf ...Sg4 und ...Sc6 gegen e5. Nach 3.dxe5 " +
      "deckt der Läufer f4 den Bauern bereits und ein Springer auf f3 deckt ihn ein zweites Mal, " +
      "sodass Schwarz ihn nur schwer zurückgewinnt und wenig Gegenspiel hat.",
  },

  "1.d4 Nf6 2.Bf4 h6": {
    strategy:
      "Nimmt das Feld g5 und bereitet ...g5 vor, um den Läufer zurückzudrängen, verzögert aber " +
      "die Entwicklung und lockert den Königsflügel. Nach ...g5 zieht sich der Läufer nach g3 " +
      "zurück und bleibt auf einer guten Diagonale.",
  },

  "1.d4 Nf6 2.Bf4 h5": {
    strategy:
      "Rückt den Randbauern vor, um einen Springer auf g4 zu stützen, entwickelt aber nichts und " +
      "schwächt g5 und den Königsflügel. Weiß entwickelt sich und sieht sich keiner Drohung " +
      "gegenüber.",
  },

  "1.d4 Nf6 2.Bf4 Ng8": {
    strategy:
      "Zieht den Springer nach g8 zurück und macht den ersten Zug zunichte, sodass Weiß d4 und " +
      "Lf4 gegen eine unentwickelte Armee gespielt hat und nach Belieben das Zentrum besetzen " +
      "kann.",
  },

  "1.d4 Nf6 2.Bf4 Ng4": {
    strategy:
      "Zieht den Springer erneut auf ein Feld, von dem er f2 und h2 angreift, doch beide sind " +
      "gedeckt, und 3.h3 vertreibt ihn mit Tempogewinn. Sonst hat Schwarz nichts entwickelt.",
  },

  "1.d4 Nf6 2.Bf4 Nd5": {
    strategy:
      "Greift den ungedeckten Läufer an, doch Weiß behält ihn mit 3.Lg3 und droht dann c4 " +
      "oder e4, um den Springer mit Tempogewinn zu vertreiben. Schwarz hat denselben Springer " +
      "zweimal gezogen und liegt in der Entwicklung zurück.",
  },

  "1.d4 Nf6 2.Bf4 g5": {
    strategy:
      "Greift den Läufer an, doch der Bauer g5 ist ungedeckt: 3.Lxg5 gewinnt ihn sofort, und " +
      "nach ...Tg8 kann Weiß auf f6 tauschen und den Mehrbauern behalten. Der schwarze " +
      "Königsflügel ist ohne Gegenwert gelockert.",
  },
};
