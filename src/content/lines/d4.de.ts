import type { OpeningTexts } from "../book.ts";

// German prose for d4.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.d4 Nf6": {
    name: "Indische Verteidigung",
    background:
      "Der Begriff „Indische Verteidigung“ ist erstmals 1884 belegt, bezogen auf die " +
      "Eröffnungen, die der indische Spieler Moheschunder Bannerjee gegen John Cochrane " +
      "spielte, und Savielly Tartakower machte ihn Anfang der 1920er-Jahre populär. Die " +
      "hypermoderne Schule setzte sich in den 1920er-Jahren für diese Verteidigungen ein, " +
      "voll anerkannt wurden sie aber erst, als russische Spieler Ende der 1940er-Jahre " +
      "zeigten, dass sie für Schwarz korrekt sind.",
    strategy:
      "Entwickelt eine Figur, ohne einen Zentralbauern festzulegen, und kontrolliert e4, " +
      "sodass 2.e4 einen Bauern kosten würde. Je nach den nächsten weißen Zügen kann Schwarz " +
      "...e6 mit ...Lb4 oder ...b6 wählen, ...g6 mit ...Lg7, ...c5 oder ...d5. Viele dieser " +
      "Aufbauten lassen Weiß zuerst ein Zentrum errichten und greifen es später mit Figuren " +
      "und den Hebeln ...c5, ...d5 oder ...e5 an. Weiß kann seinerseits die Hauptvarianten " +
      "mit Systemen wie dem Trompowsky-Angriff, 2.Lg5, oder dem London-System mit Lf4 " +
      "umgehen.",
  },

  "1.d4 d5": {
    name: "Geschlossenes Spiel",
    background:
      "1.d4 d5 war Anfang des 20. Jahrhunderts weit verbreitet, als Weißspieler häufiger " +
      "andere erste Züge als 1.e4 versuchten. 1...d5 ist bis heute die zweithäufigste Antwort " +
      "auf 1.d4, nach 1...Sf6.",
    strategy:
      "Besetzt das Zentrum und verhindert e4, das Weiß nun nur noch als Gambit spielen kann. " +
      "Meist greift Weiß d5 mit 2.c4 an oder wählt einen ruhigeren Aufbau mit Sf3, Lf4 oder " +
      "e3. Schwarz stützt d5 mit ...e6 oder ...c6; nach ...c6 kann der weißfeldrige Läufer " +
      "oft entwickelt werden, bevor ...e6 ihn einsperrt. Der Preis ist geringere " +
      "Flexibilität: Mit dem festgelegten d-Bauern muss Schwarz auf das Damengambit " +
      "vorbereitet sein.",
  },

  "1.d4 e6": {
    name: "Franco-Indische Verteidigung",
    background:
      "Der Name spiegelt wider, dass 1...e6 in die Französische Verteidigung oder in eine der " +
      "Indischen Verteidigungen übergehen kann. Eric Schiller schlug den Namen " +
      "Horwitz-Verteidigung vor, nach Bernhard Horwitz, der sie zwischen 1849 und 1852 gegen " +
      "Daniel Harrwitz spielte.",
    strategy:
      "Öffnet die Diagonale des schwarzfeldrigen Läufers und hält mehrere Systeme offen: Nach " +
      "2.c4 kann Schwarz mit ...d5 ein Abgelehntes Damengambit, mit ...Sf6 eine " +
      "Nimzo-Indische oder Damenindische Verteidigung oder mit ...f5 eine Holländische " +
      "Verteidigung anstreben. Der Preis ist, dass Weiß mit 2.e4 antworten kann, und Schwarz " +
      "muss dann bereit sein, Französisch zu spielen. Der weißfeldrige Läufer bleibt oft " +
      "hinter dem Bauern e6 eingesperrt und braucht ...b6 oder einen späteren Bauernhebel, um " +
      "aktiv zu werden.",
  },

  "1.d4 f5": {
    name: "Holländische Verteidigung",
    background:
      "Elias Stein, ein Elsässer, der sich in Den Haag niedergelassen hatte, empfahl sie in " +
      "seinem 1789 erschienenen Buch „Nouvel essai sur le Jeu des échecs“ als beste Antwort " +
      "auf 1.d4. Im Weltmeisterschaftskampf 1951 spielten sie sowohl Michail Botwinnik als " +
      "auch sein Herausforderer David Bronstein.",
    strategy:
      "Erhebt Anspruch auf e4 und strebt unausgeglichenes Spiel mit Chancen am Königsflügel " +
      "an. Schwarz wählt zwischen dem Stonewall mit ...e6 und ...d5, dem Leningrader System " +
      "mit ...g6 und ...Lg7 und dem klassischen Aufbau mit ...e6 und ...Le7. Der Preis ist " +
      "ein geschwächter Königsflügel mit geöffneter Diagonale e8–h5, den Weiß sofort mit den " +
      "Gambits 2.e4 oder 2.h3 und 3.g4 prüfen kann.",
  },

  "1.d4 Nc6": {
    name: "Bogoljubow-Mikenas-Verteidigung",
    background:
      "Benannt nach Efim Bogoljubow und Vladas Mikėnas. Hypermoderne Spieler wie Aaron " +
      "Nimzowitsch und Bogoljubow versuchten 1...Sc6, doch die Eröffnung wurde nie sehr " +
      "populär.",
    strategy:
      "Entwickelt einen Springer in Richtung Zentrum und bereitet ...e5 vor, verstellt aber " +
      "den c-Bauern, sodass die üblichen Pläne mit ...c5 und ...c6 entfallen. Weiß kann mit " +
      "2.d5 den Springer vertreiben, meist nach e5, mit 2.e4 ein breites Zentrum errichten " +
      "oder mit 2.Sf3 ...e5 verhindern. Solide genug, aber Schwarz legt den Springer fest, " +
      "bevor der weiße Aufbau klar ist.",
  },

  "1.d4 b6": {
    name: "Englische Verteidigung",
    background:
      "Die Englische Verteidigung ist durch 1.d4 e6 2.c4 b6 gekennzeichnet, kann aber auch " +
      "über 1.d4 b6 entstehen, besonders im Vereinsschach, wo manche Spieler 1...b6 und " +
      "2...Lb7 als Universalsystem wählen. In den 1970er-Jahren griffen führende englische " +
      "Spieler wie Tony Miles und Raymond Keene sie auf, und Viktor Kortschnoi setzte sie in " +
      "Évian 1977 in der 6. Partie seines Kandidaten-Halbfinales gegen Lew Polugajewski " +
      "erfolgreich ein.",
    strategy:
      "Bereitet ...Lb7 vor, um e4 über die lange Diagonale unter Druck zu setzen, meist " +
      "gefolgt von ...e6. Errichtet Weiß mit c4 und e4 ein breites Zentrum, greift Schwarz es " +
      "mit Figuren, ...Lb4 und manchmal ...f5 an, statt es selbst zu besetzen. Solide, aber " +
      "selten, und Schwarz muss gegen den weißen Raumvorteil genau spielen.",
  },

  "1.d4 c6": {
    strategy:
      "Bereitet ...d5 vor und steuert nach 2.c4 auf eine Slawische Verteidigung, nach 2.e4 " +
      "auf eine Caro-Kann-Verteidigung zu. Solide, aber Schwarz legt den c-Bauern früh fest " +
      "und muss auf beide Eröffnungen vorbereitet sein, während Weiß entscheidet, welche auf " +
      "dem Brett entsteht.",
  },

  "1.d4 c5": {
    name: "Alt-Benoni-Verteidigung",
    background:
      "Der Name Benoni geht auf Aaron Reinganums 1825 erschienenes Buch „Ben-Oni“ zurück, das " +
      "neben Verteidigungen gegen das Königs- und das Damengambit die damals unbekannte " +
      "Zugfolge 1.d4 c5 untersuchte. Die Eröffnung heißt manchmal auch " +
      "Blackburne-Verteidigung, nach Joseph Henry Blackburne, dem ersten Spieler, von dem " +
      "bekannt ist, dass er sie erfolgreich einsetzte. Im Spitzenschach fand sie nie " +
      "ernsthaftes Interesse, doch Alexander Aljechin besiegte damit Efim Bogoljubow in einer " +
      "Partie ihres zweiten Wettkampfs 1934.",
    strategy:
      "Greift d4 sofort an. Weiß antwortet meist mit 2.d5 und gewinnt Raum, worauf Schwarz " +
      "das Zentrum mit ...e5 schließt oder den vorgerückten Bauern mit ...e6 angreift, " +
      "während 2.dxc5 e6 Weiß nichts verspricht. Spielbar, aber der Raumvorteil, den Weiß " +
      "nach 2.d5 erhält, ist dauerhaft.",
  },

  "1.d4 d6": {
    name: "Pillsbury-Verteidigung",
    strategy:
      "Bereitet ...Sf6 und ...g6 oder ...e5 vor und geht oft in Strukturen der Pirc-Ufimzew-, " +
      "der Philidor-, der Altindischen oder der Königsindischen Verteidigung über. Solide, " +
      "aber bescheiden: Der Zug entwickelt keine Figur, und Weiß gewinnt mit e4 oder c4 Raum " +
      "und wählt die Variante, die ihm liegt.",
  },

  "1.d4 g6": {
    name: "Moderne Verteidigung",
    strategy:
      "Bereitet ...Lg7 vor, sodass die Partie meist in eine Struktur der Königsindischen oder " +
      "der Pirc-Ufimzew-Verteidigung übergeht. Schwarz lässt Weiß ein Zentrum errichten und " +
      "greift es später mit dem Läufer auf g7 und Bauernhebeln wie ...c5 oder ...e5 an. " +
      "Solide, aber nach 2.e4 erhält Weiß ein breites Bauernzentrum, bevor ...Sf6 es " +
      "angreifen kann, und wählt die Variante, die ihm am besten liegt.",
  },

  "1.d4 Na6": {
    name: "Australische Verteidigung",
    strategy:
      "Entwickelt den Springer an den Rand, wo er b4 und c5 im Blick hat, aber wenig für das " +
      "Zentrum tut. Weiß gewinnt mit e4 oder c4 einfach Raum, während der Springer noch " +
      "mehrere Züge braucht, um nützlich zu werden.",
  },

  "1.d4 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo Schwarz nach 2.Lxh6 gxh6 isolierte Doppelbauern " +
      "auf der h-Linie und einen geschwächten Königsflügel hat und dafür nur das Läuferpaar " +
      "bekommt. Auch ohne den Abtausch tut der Springer wenig für das Zentrum.",
  },

  "1.d4 a6": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauernzug, der ...b5 vorbereitet, aber weder eine " +
      "Figur entwickelt noch um das Zentrum kämpft. Weiß baut in aller Ruhe mit e4, c4 und " +
      "Sc3 auf.",
  },

  "1.d4 a5": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauernzug, der b4 kontrolliert, aber nichts für das " +
      "Zentrum oder die Entwicklung tut. Weiß kann ungehindert mit e4 und c4 ein breites " +
      "Zentrum errichten.",
  },

  "1.d4 b5": {
    name: "Polnische Verteidigung",
    background:
      "Der Name ist in Anlehnung an die Polnische Eröffnung, 1.b4, gewählt. Alexander Wagner " +
      "spielte 1.d4 b5 in der Schweizer Fernschachmeisterschaft 1913 gegen Kuhn und " +
      "veröffentlichte 1914 eine Analyse im Deutschen Wochenschach, und Boris Spasski wählte " +
      "die Eröffnung in der 22. Partie seines Weltmeisterschaftskampfes 1966 gegen Tigran " +
      "Petrosjan.",
    strategy:
      "Gewinnt Raum am Damenflügel, vernachlässigt aber das Zentrum und lässt den Bauern auf " +
      "b5 ungedeckt: Nach 2.e4 zielt der Läufer von f1 auf b5, und den Bauern zu decken oder " +
      "zurückzugewinnen kostet Schwarz Zeit.",
  },

  "1.d4 e5": {
    name: "Englund-Gambit",
    background:
      "Benannt nach dem schwedischen Spieler Fritz Englund (1871–1933), der 1932–1933 ein " +
      "Thematurnier stiftete, in dem jede Partie mit der Stellung nach 4.Dd5 begann. Kārlis " +
      "Bētiņš (1867–1943) führte die Hauptvariante mit 2...Sc6 und 3...De7 ein, und Henry " +
      "Charlick, der zweite australische Meister, Anfang der 1890er-Jahre die Variante " +
      "2...d6.",
    strategy:
      "Bietet den e-Bauern für schnelle Entwicklung und Fallenchancen an: Nach 2.dxe5 Sc6 " +
      "3.Sf3 De7 liegen Ideen wie ...Db4+ und ...Dxb2 in der Luft. Bei genauem Spiel behält " +
      "Weiß den Bauern oder einen klaren Vorsprung, sodass die Kompensation fraglich ist.",
  },

  "1.d4 f6": {
    strategy:
      "Nimmt dem Springer das Feld f6, schwächt e6 und die Diagonale e8–h5 und entwickelt " +
      "nichts. Nach 2.e4 hat Weiß ein breites Zentrum und Ideen wie Dh5+.",
  },

  "1.d4 h6": {
    strategy:
      "Verhindert Lg5, verwendet aber ein Tempo auf einen Randbauernzug, der weder eine Figur " +
      "entwickelt noch um das Zentrum kämpft. Weiß kann ungehindert mit e4 und c4 Raum " +
      "gewinnen.",
  },

  "1.d4 h5": {
    strategy:
      "Verwendet ein Tempo auf einen Vorstoß des Randbauern, der nichts entwickelt, das " +
      "Zentrum ignoriert und g6 schwächt. Weiß kann ungehindert mit e4 und c4 das Zentrum " +
      "besetzen.",
  },

  "1.d4 g5": {
    name: "Borg-Verteidigung: Borg-Gambit",
    strategy:
      "Lässt den g-Bauern nach 2.Lxg5 hängen und schwächt den ganzen Königsflügel. Nach " +
      "2...Lg7 zielt der Läufer nur auf d4, das Weiß mit c3 oder e3 deckt, und Weiß behält " +
      "einen glatten Mehrbauern.",
  },

  "1.d4": {
    name: "Damenbauernspiel",
    background:
      "Im 19. Jahrhundert ungewöhnlich, als 1.e4 bei weitem am häufigsten gespielt wurde. " +
      "Seine Stärken wurden im 20. Jahrhundert erschlossen, zuerst mit dem Damengambit, dann " +
      "mit den Indischen Verteidigungen der Hypermodernen.",
  },
};
