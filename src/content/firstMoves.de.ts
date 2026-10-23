import type { OpeningTexts } from "./book.ts";

// German prose for firstMoves.ts, written in German notation (Sf3, Lg2). The
// keys are the English lines of the data file; the line "" is the initial
// position, and its background is the introduction.
export const de: OpeningTexts = {
  "": {
    background:
      "Aus der Grundstellung sind zwanzig Züge möglich: je zwei für jeden der acht Bauern " +
      "und je zwei für die Springer. Vier davon, 1.e4, 1.d4, 1.Sf3 und 1.c4, werden bei weitem " +
      "am häufigsten gespielt und lohnen das Lernen. Die übrigen werden hier bewertet, damit " +
      "jeder erste Zug ein Urteil bekommt, aber nur die guten werden weiterverfolgt.",
  },

  "1.e4": {
    strategy:
      "Besetzt ein Zentrumsfeld, greift d5 an und öffnet die Diagonalen für Dame und " +
      "Königsläufer, sodass Weiß schnell entwickeln und früh rochieren kann. Der Bauer auf e4 " +
      "ist nicht von einem anderen Bauern gedeckt, und die offenen Linien führen oft zu " +
      "scharfem, taktischem Spiel.",
  },

  "1.d4": {
    strategy:
      "Besetzt das Zentrum und greift c5 und e5 an. Anders als der e-Bauer ist der d-Bauer von " +
      "Anfang an durch die Dame gedeckt, sodass Schwarz ihn nicht so leicht angreifen kann; die " +
      "Stellung bleibt meist länger geschlossen, und der Kampf ist eher strategisch als " +
      "taktisch.",
  },

  "1.Nf3": {
    strategy:
      "Entwickelt eine Figur zum Zentrum hin und kontrolliert e5 und d4, ohne einen Bauern " +
      "festzulegen. Der flexibelste erste Zug: Weiß kann noch in 1.d4-, 1.c4- oder " +
      "1.e4-Eröffnungen einlenken oder mit einem Königsfianchetto beim hypermodernen Aufbau " +
      "bleiben. Außerdem verhindert er 1...e5.",
  },

  "1.c4": {
    strategy:
      "Beansprucht d5 von der Flanke aus und hält die Zentrumsbauern zurück, sodass Weiß " +
      "später entscheidet, ob d4, e4 oder ein Fianchetto folgt. Flexibel und solide, mit " +
      "asymmetrischen Stellungen, wenn Schwarz 1...e5 antwortet. Der Zug entwickelt keine Figur " +
      "und öffnet dem Königsläufer keine Diagonale, die Entwicklung kommt also einen Zug " +
      "später.",
  },

  "1.g3": {
    strategy:
      "Bereitet das Fianchetto Lg2 vor, das die lange Diagonale kontrolliert und ein späteres " +
      "e4 und d5 unterstützt. Der Zug legt im Zentrum nichts fest und geht meist in eine andere " +
      "Eröffnung mit fianchettiertem Königsläufer über; Schwarz kann sofort Raum im Zentrum " +
      "nehmen.",
  },

  "1.b3": {
    strategy:
      "Bereitet das Fianchetto Lb2 vor, das auf e5 und über die lange Diagonale auf den " +
      "schwarzen Königsflügel zielt. Weiß lässt Schwarz ein klassisches Bauernzentrum " +
      "aufbauen und will es später untergraben. Die Theorie bewertet die entstehenden " +
      "Stellungen als ausgeglichen, der Wert der Eröffnung ist also eher praktisch als " +
      "objektiv.",
  },

  "1.f4": {
    name: "Bird-Eröffnung",
    background:
      "Benannt nach Henry Bird, dem englischen Meister, der den Zug 1855 erstmals spielte und " +
      "vierzig Jahre lang dabei blieb; den Namen prägte die Hereford Times 1885. Es ist eine " +
      "Holländische Verteidigung mit vertauschten Farben.",
    strategy:
      "Übernimmt die Kontrolle über e5 und bereitet einen Angriff am Königsflügel vor, wie " +
      "ein umgekehrter Holländer. Der Preis ist eine frühe Schwächung der Königsstellung: " +
      "Die Diagonale e1–h4 ist offen, und das From-Gambit 1...e5 nutzt das sofort aus. Für " +
      "die Entwicklung tut der Zug nichts.",
  },

  "1.Nc3": {
    name: "Dunst-Eröffnung",
    background:
      "Benannt nach Ted A. Dunst (1907–1985), einem New Yorker Meister; in den Niederlanden " +
      "Van-Geet-Eröffnung nach Dick van Geet (1932–2012), der sie häufig spielte. Im Deutschen " +
      "auch „der Linksspringer“. Als Ursprung gilt die Partie Blackburne gegen Noa, London " +
      "1883.",
    strategy:
      "Entwickelt eine Figur zum Zentrum hin und greift d5 und e4 an. Der Springer blockiert " +
      "den c-Bauern, den Weiß in den meisten Damenbauernstrukturen braucht, und kann mit ...d5 " +
      "und ...d4 vertrieben werden. Spielbar, aber ein unterlegener Weg, den Anzugsvorteil zu " +
      "nutzen.",
  },

  "1.b4": {
    name: "Sokolski-Eröffnung",
    background:
      "Benannt nach dem sowjetischen Spieler Alexei Sokolski (1908–1969), dessen Monographie " +
      "von 1963 die Eröffnung verteidigte. Auch Polnische Eröffnung und Orang-Utan-Eröffnung " +
      "nach Tartakower, der behauptete, ein Orang-Utan im Bronx Zoo habe ihm den Zug vor seiner " +
      "Partie gegen Maróczy in New York 1924 empfohlen.",
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 gegen e5 und g7 vor. Der Zug verrät den " +
      "weißen Plan, bevor Schwarz etwas gezeigt hat, der Bauer auf b4 braucht Aufmerksamkeit, " +
      "und Schwarz nimmt mit ...e5 oder ...d5 das Zentrum. Auf höchstem Niveau selten.",
  },

  "1.e3": {
    name: "Van-’t-Kruijs-Eröffnung",
    background:
      "Benannt nach Maarten van ’t Kruijs (1813–1885), der 1878 die sechste niederländische " +
      "Meisterschaft gewann. Nimzowitsch und Larsen spielten den Zug gelegentlich; er ist der " +
      "sechsthäufigste erste Zug, in der modernen Meisterpraxis aber selten.",
    strategy:
      "Öffnet den Königsläufer und hält alle Möglichkeiten offen, da der Zug in viele " +
      "Eröffnungen übergehen kann. Für sich genommen beansprucht er wenig: Der e-Bauer geht " +
      "nur einen Schritt, der Damenläufer bleibt eingeschlossen, und Weiß gibt den größten " +
      "Teil des Anzugsvorteils ab.",
  },

  "1.d3": {
    name: "Mieses-Eröffnung",
    background:
      "Benannt nach Jacques Mieses, der den Zug 1910 in seinem Wettkampf gegen Teichmann " +
      "einsetzte. Deep Blue spielte ihn 1997 in der dritten Partie gegen Kasparow, die remis " +
      "endete.",
    strategy:
      "Deckt e4 und öffnet den Damenläufer, oft mit dem Ziel eines Königsindischen Angriffs " +
      "mit Sf3, g3 und Lg2. Ein bescheidener Anspruch auf das Zentrum: Schwarz kann mit jedem " +
      "Zentrumszug antworten und die Initiative übernehmen.",
  },

  "1.c3": {
    name: "Saragossa-Eröffnung",
    background:
      "Wurde 1919 im Schachklub von Saragossa beliebt; im Jahr darauf analysierte das " +
      "Klubmitglied José Juncosa den Zug, und 1922 verlangte ein Thementurnier in Mannheim, das " +
      "Tarrasch gewann, von allen Teilnehmern diese Eröffnung.",
    strategy:
      "Bereitet d4 mit Bauernunterstützung vor und hält die Partie solide, oft mit Übergang in " +
      "einen Slawen oder Caro-Kann mit vertauschten Farben. Der Zug nimmt dem Springer das Feld " +
      "c3 und erhebt nur einen zaghaften Anspruch auf das Zentrum. Nicht schlecht, aber 1.e4 und " +
      "1.d4 leisten mehr.",
  },

  "1.a3": {
    name: "Anderssen-Eröffnung",
    background:
      "Benannt nach Adolf Anderssen, der den Zug im Pariser Wettkampf vom Dezember 1858 dreimal " +
      "gegen Paul Morphy spielte und dabei 1½ aus 3 holte. Steinitz, Blackburne und Mieses " +
      "versuchten ihn später, und Nakamura schlug Carlsen damit 2023 in einer Online-Blitzpartie.",
    strategy:
      "Ein Abwartezug: Er kontrolliert b4 und lässt alle Figuren zu Hause, sodass Schwarz zuerst " +
      "einen Plan zeigen muss. Für Entwicklung und Zentrum leistet er wenig und überlässt " +
      "Schwarz den Anzugsvorteil, der damit gewissermaßen Weiß spielt.",
  },

  "1.h3": {
    name: "Clemenz-Eröffnung",
    background:
      "Benannt nach Hermann Clemenz (1846–1908), einem estnischen Spieler. Einer der seltensten " +
      "ersten Züge; Michael Basman hat damit als Vorbereitung von 2.g4 oder 2.a3 experimentiert.",
    strategy:
      "Nimmt den schwarzen Figuren das Feld g4 und mehr nicht: Der Zug beansprucht kein " +
      "Zentrumsfeld, entwickelt nichts und schwächt leicht den Königsflügel, wo Weiß meist " +
      "rochiert. Ein Tempo für später, wie 1.a3.",
  },

  "1.g4": {
    name: "Grob-Angriff",
    background:
      "Benannt nach dem Schweizer Meister Henri Grob (1904–1974), der den Zug ausführlich " +
      "analysierte und Hunderte Fernpartien damit spielte; Carl Ahlhausen aus Berlin war im 19. " +
      "Jahrhundert einer der Ersten, die ihn spielten. Michael Basman besiegte damit 1978 John " +
      "Nunn. Engines geben Schwarz nach 1.g4 klaren Vorteil.",
    strategy:
      "Nimmt Raum am Königsflügel und bereitet Lg2 auf der langen Diagonale vor, in der " +
      "Hoffnung auf einen Gegner, der die Widerlegung nicht kennt. Der Bauer auf g4 ist " +
      "ungedeckt, der Königsflügel ist dauerhaft geschwächt, und Schwarz nimmt das Zentrum. " +
      "Gilt weithin als einer der schlechtesten ersten Züge.",
  },

  "1.f3": {
    name: "Barnes-Eröffnung",
    background:
      "Benannt nach Thomas Wilson Barnes (1825–1874), dem englischen Spieler, der 1858 acht " +
      "Partien gegen Paul Morphy gewann, eine davon mit 1.e4 f6 als Schwarzer. Edmar Mednis " +
      "hielt 1.f3 für den schlechtesten der zwanzig ersten Züge.",
    strategy:
      "Deckt e4 und sonst nichts: Der Zug entwickelt keine Figur, öffnet keine Linie, nimmt dem " +
      "Springer sein bestes Feld f3 und öffnet die Diagonale e1–h4 gegen den unrochierten " +
      "weißen König. Fast jeder andere Zug erreicht dasselbe Ziel besser.",
  },

  "1.h4": {
    name: "Kádas-Eröffnung",
    background:
      "Auch Desprez-Eröffnung nach dem französischen Spieler Marcel Després; Kádas ist der " +
      "Name, den Schachseiten heute verwenden. Einer der seltensten ersten Züge. David " +
      "Bronstein erzählte gern von einem russischen Spieler, der immer mit 1.h4 eröffnete und " +
      "immer gewann.",
    strategy:
      "Gewinnt Raum am Königsflügel und droht h5 gegen ein Fianchetto, tut aber nichts für " +
      "Zentrum und Entwicklung, und der Turm kommt selten über h3 ins Spiel. Der Königsflügel " +
      "ist dauerhaft geschwächt.",
  },

  "1.a4": {
    name: "Ware-Eröffnung",
    background:
      "Benannt nach Preston Ware, dem amerikanischen Spieler, der ungewöhnliche Eröffnungen " +
      "bevorzugte und sie um 1880 in Turnieren spielte. Carlsen eröffnete damit bei der " +
      "Blitzweltmeisterschaft 2012 gegen Radjabow als Scherz, und gewann.",
    strategy:
      "Greift b5 an und bereitet vor, den Turm über a3 ins Spiel zu bringen, aber b5 " +
      "interessiert niemanden, und nach 1...e5 hält der Läufer auf f8 den Turm zurück. Ein " +
      "verlorenes Tempo, das das Zentrum völlig übergeht.",
  },

  "1.Na3": {
    name: "Durkin-Eröffnung",
    background:
      "Benannt nach Robert T. Durkin (1923–2014) aus New Jersey, der 1959 seine Analyse dazu " +
      "veröffentlichte. Auch Natrium-Angriff, weil Na das chemische Symbol für Natrium " +
      "ist.",
    strategy:
      "Ein Springer am Rand kontrolliert kein Zentrumsfeld, und dieser kann vom Läufer auf f8 " +
      "geschlagen werden, was die weißen Bauern verdoppelt. Weiß gibt den größten Teil des " +
      "Anzugsvorteils ab; mit einem späteren c4 oder e4 ist noch eine vernünftige Stellung " +
      "erreichbar.",
  },

  "1.Nh3": {
    name: "Amar-Eröffnung",
    background:
      "Benannt nach Charles Amar, einem Pariser Amateur, der den Zug in den 1930er-Jahren " +
      "spielte, wahrscheinlich von Tartakower, der ihn auch Pariser Eröffnung nannte. Carlsen " +
      "besiegte damit 2018 Drejew in einer Online-Schnellpartie.",
    strategy:
      "Ein Springer am Rand kontrolliert kein Zentrumsfeld, und 1...d5 droht bereits ...Lxh3, " +
      "was die weißen Bauern vor dem König verdoppeln würde. Schwarz nimmt ungestört das " +
      "Zentrum.",
  },
};
