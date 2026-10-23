import type { OpeningTexts } from "../book.ts";

// German prose for Nf3-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.Nf3 d5 2.c4": {
    name: "Réti-Eröffnung",
    background:
      "Nach Rétis eigener Angabe kam die Eröffnung Anfang 1923 in die Meisterpraxis, und Hans " +
      "Kmoch nannte das Angriffssystem, das Réti in Karlsbad 1923 gegen Rubinstein anwandte, " +
      "Réti-Eröffnung oder Réti-System. Heute bezeichnet der Name nur noch Sf3 und c4 von " +
      "Weiß gegen ...d5, wobei mindestens ein Läufer fianchettiert wird und kein frühes d4 " +
      "folgt.",
    strategy:
      "Greift d5 von der Flanke an, bevor sich Weiß mit den Zentrumsbauern festlegt; meist " +
      "folgen g3 und Lg2. Schwarz kann mit 2...dxc4 schlagen, worauf e3, Sa3 oder Da4+ den " +
      "Bauern zurückgewinnt, d5 mit ...e6 oder ...c6 halten, was oft zu Stellungen des " +
      "Damengambits führt, oder 2...d4 vorstoßen, worauf e3 oder das schärfere b4 folgt. Es " +
      "ist die häufigste eigenständige Fortsetzung nach 1.Sf3, auch wenn das Zentrum vorerst " +
      "Schwarz überlassen bleibt.",
  },

  "1.Nf3 d5 2.d4": {
    strategy:
      "Besetzt sofort das Zentrum und führt ins Damenbauernspiel mit dem Springer bereits auf " +
      "f3. Weiß kann mit c4 ein Damengambit anstreben, mit e3 und Ld3 einen Colle-Aufbau oder " +
      "mit Lf4 ein London-System. Der Zug gibt den eigenständigen Charakter von 1.Sf3 auf und " +
      "lässt Schwarz eine Standardverteidigung wählen, ist aber völlig gesund.",
  },

  "1.Nf3 d5 2.g3": {
    name: "Königsindischer Angriff",
    background:
      "Auf Großmeisterebene kam er als Ableger der in den 1950er-Jahren weit verbreiteten " +
      "Königsindischen Verteidigung auf. Zu seinen bekannten Anwendern zählen Bobby Fischer " +
      "(vor allem früh in seiner Laufbahn), Michail Botwinnik, Wassili Smyslow und Tigran " +
      "Petrosjan; heute ist er auf Großmeisterebene relativ selten, auf Vereinsebene aber " +
      "beliebt.",
    strategy:
      "Bereitet Lg2 und die Rochade vor, danach d3, Sbd2 und e4 für ein kompaktes System, das " +
      "sich gegen die meisten Aufstellungen wiederholen lässt. Schwarz kann mit ...Sf6, ...c5 " +
      "und ...e6 ein Zentrum errichten, den Läufer mit ...c6 und ...Lg4 entwickeln oder mit " +
      "...c5, ...Sc6 und ...e5 eine Königsindische Verteidigung mit vertauschten Farben " +
      "wählen. Weiß überlässt Schwarz zunächst das Zentrum und strebt später e4-e5 an, das " +
      "Raum am Königsflügel und Angriffschancen bringt.",
  },

  "1.Nf3 d5 2.b3": {
    name: "Larsen-Eröffnung",
    background:
      "Aron Nimzowitsch experimentierte in den 1920er- und 1930er-Jahren mit 1.b3, wählte " +
      "aber häufiger die Zugfolge 1.Sf3 d5 2.b3. Bent Larsen spielte 1.b3 von 1968 bis 1972 " +
      "häufig, und Bobby Fischer setzte es 1970 fünfmal ein.",
    strategy:
      "Bereitet Lb2 vor, der auf der langen Diagonale gegen e5 und g7 wirkt, oft gefolgt von " +
      "e3 und Lb5 gegen einen Springer auf c6, eine Nimzo-Indische Verteidigung mit " +
      "vertauschten Farben. Der Springer auf f3 hindert Schwarz daran, sofort mit ...e5 zu " +
      "antworten. Viele dieser Varianten gelten theoretisch nur als ausgeglichen, und Weiß " +
      "überlässt Schwarz vorerst das Zentrum.",
  },

  "1.Nf3 d5 2.e3": {
    strategy:
      "Öffnet die Diagonale des Läufers f1 und strebt Le2 oder Ld3 mit anschließendem d4 oder " +
      "c4 an, hin zu einem Colle-artigen Aufbau oder einem Damengambit. Der Zug ist solide, " +
      "sperrt aber den Läufer c1 ein und legt Weiß auf einen langsamen Plan fest, sodass " +
      "Schwarz sich mit ...Sf6, ...c5 oder ...Lg4 frei entwickelt.",
  },

  "1.Nf3 d5 2.d3": {
    name: "Zukertort-Eröffnung: Altindischer Angriff",
    strategy:
      "Unterstützt den Vorstoß e4 für einen Altindischen Aufbau mit vertauschten Farben, mit " +
      "Sbd2, g3 oder Le2. Der Zug ist flexibel und gesund, aber passiv: Schwarz besetzt mit " +
      "...Sf6, ...Sc6 und ...e5 oder mit ...c5 das Zentrum und begegnet e4 auf Augenhöhe.",
  },

  "1.Nf3 d5 2.c3": {
    strategy:
      "Bereitet d4 für eine Colle- oder Slawisch-artige Struktur vor, oder später e4. Der " +
      "Bauer nimmt dem Springer b1 das Feld c3, sodass dieser über d2 entwickelt werden muss, " +
      "während Schwarz sich mit ...Sf6 und ...Lf5 oder ...Lg4 frei entwickelt.",
  },

  "1.Nf3 d5 2.Nc3": {
    name: "Zukertort-Eröffnung: Mexikanisch im Anzuge",
    strategy:
      "Entwickelt eine Figur und bereitet e4 vor, verstellt aber den c-Bauern, sodass die " +
      "c4-Aufbauten der Hauptvarianten nicht mehr möglich sind. Schwarz kann mit ...d4 Raum " +
      "gewinnen oder mit ...Sf6 und ...Lf5 eine bequeme Stellung erreichen.",
  },

  "1.Nf3 d5 2.e4": {
    strategy:
      "Bietet den e-Bauern für schnelles Figurenspiel an: Nach 2...dxe4 3.Sg5 will Weiß ihn " +
      "zurückgewinnen oder f7 angreifen. Schwarz gibt ihn mit 3...e5 zurück oder behält ihn " +
      "mit 3...Lf5 und steht in beiden Fällen besser, auch wenn ein unvorbereiteter " +
      "Verteidiger in taktische Fallen geraten kann.",
  },

  "1.Nf3 d5 2.a3": {
    strategy:
      "Bereitet b4 vor und nimmt einem Läufer das Feld b4, kostet aber ein Tempo für einen " +
      "Randbauern, während Schwarz mit ...Sf6, ...c5 und ...e6 das Zentrum besetzt.",
  },

  "1.Nf3 d5 2.a4": {
    name: "Zukertort-Eröffnung: The Potato",
    strategy:
      "Gewinnt Raum am Damenflügel und verhindert ...b5, bereitet aber nichts vor und " +
      "schwächt b4. Schwarz entwickelt sich mühelos und baut mit ...Sf6, ...e6 und ...c5 sein " +
      "Zentrum auf.",
  },

  "1.Nf3 d5 2.b4": {
    name: "Santasiere's Folly",
    background:
      "Benannt nach dem amerikanischen Meister Anthony Santasiere (1904–1977), der die " +
      "Eröffnung erfand, ausarbeitete und ihr ein Buch widmete, „The Futuristic Chess " +
      "Opening: Santasiere's Folly“ (Chess Digest, Dallas 1973).",
    strategy:
      "Gewinnt Raum am Damenflügel mit Blick auf Lb2, doch der Bauer b4 hat keine " +
      "Bauerndeckung und wird zum Ziel von ...e6 und ...Lxb4, ...Dd6 oder ...a5. Weiß " +
      "verbringt Zeit am Flügel, während Schwarz sich frei entwickelt.",
  },

  "1.Nf3 d5 2.h3": {
    strategy:
      "Nimmt dem schwarzen Läufer das Feld g4, bevor ...Lg4 überhaupt droht, und kostet ein " +
      "Tempo, das Schwarz nutzt, um mit ...Sf6, ...e6 und ...c5 das Zentrum zu besetzen.",
  },

  "1.Nf3 d5 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel, tut aber nichts für Zentrum und Entwicklung und lockert " +
      "den Königsflügel, auf dem der weiße König rochieren würde. Schwarz entwickelt sich " +
      "frei mit ...Sf6 und ...e6 oder ...Lf5.",
  },

  "1.Nf3 d5 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, von wo er b5 und c4 ins Auge fasst, doch dort " +
      "steht er schlecht und blockiert den a-Bauern. Schwarz besetzt mit ...Sf6 und ...e6 " +
      "oder ...c5 das Zentrum.",
  },

  "1.Nf3 d5 2.Rg1": {
    name: "Zukertort-Eröffnung: Ampel-Variante",
    strategy:
      "Verzichtet auf die kurze Rochade, um einen späteren Vorstoß g4 zu stützen, ohne dass " +
      "sonst etwas diesen Vorstoß vorbereitet. Schwarz entwickelt sich mit ...Sf6 und ...e6, " +
      "und Weiß kann nur noch lang rochieren oder den König im Zentrum lassen.",
  },

  "1.Nf3 d5 2.Ng5": {
    strategy:
      "Zieht den Springer ein zweites Mal, um f7 und h7 anzugreifen, die König und Turm " +
      "decken. Nach 2...h6 muss er nach f3 oder h3 zurück, und Schwarz hat ein Tempo " +
      "gewonnen.",
  },

  "1.Nf3 d5 2.Nh4": {
    strategy:
      "Stellt den Springer ungedeckt an den Rand, wo 2...e6 oder 2...e5 die Diagonale der " +
      "Dame nach h4 öffnet. Weiß muss ein weiteres Tempo aufwenden, um ihn zurückzuziehen " +
      "oder mit g3 zu decken.",
  },

  "1.Nf3 d5 2.Ne5": {
    strategy:
      "Zieht den Springer ein zweites Mal, nach e5, wo ihn kein Bauer stützt. ...Sd7 bietet " +
      "den Tausch an, und ...f6 vertreibt ihn mit Zeitgewinn, während Weiß sonst nichts " +
      "entwickelt hat.",
  },

  "1.Nf3 d5 2.Nd4": {
    strategy:
      "Zentralisiert den Springer mit einem zweiten Zug, doch 2...e5 oder 2...c5 greift ihn " +
      "sofort an, und er muss erneut ziehen, nach f3, b3 oder b5. Schwarz baut mit Zeitgewinn " +
      "ein breites Zentrum auf.",
  },

  "1.Nf3 d5 2.Ng1": {
    strategy:
      "Bringt den Springer auf sein Ausgangsfeld zurück und macht den ersten Zug rückgängig. " +
      "Weiß hat nichts erreicht, und Schwarz hat mit d5 ein zusätzliches Tempo in der Hand.",
  },

  "1.Nf3 d5 2.g4": {
    strategy:
      "Verliert sofort einen Bauern: Nichts deckt g4, also schlägt 2...Lxg4, und Weiß hat für " +
      "den geschwächten Königsflügel nur die halboffene g-Linie vorzuweisen.",
  },

  "1.Nf3 d5": {
    background:
      "In den 1920er-Jahren die übliche Antwort, als Richard Réti viele seiner Partien mit " +
      "1.Sf3 begann; er spielte dagegen 2.c4, die Zugfolge, die heute seinen Namen trägt.",
  },
};
