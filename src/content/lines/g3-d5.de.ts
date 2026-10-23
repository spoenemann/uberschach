import type { OpeningTexts } from "../book.ts";

// German prose for g3-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.g3 d5 2.Bg2": {
    strategy:
      "Vollendet das Fianchetto: Der Läufer wirkt auf d5 und entlang der langen Diagonale in " +
      "Richtung b7, und nach Sf3 kann Weiß rasch rochieren. Von hier aus wählt Weiß zwischen " +
      "einem Aufbau des Königsindischen Angriffs mit d3, Sbd2 und e4 oder c4, das d5 nach Art " +
      "der Katalanischen Eröffnung oder der Réti-Eröffnung angreift. Der Preis ist das " +
      "Zentrum, das Schwarz mit ...Sf6, ...c5 oder ...e5 besetzen kann und das Weiß später " +
      "angreifen muss.",
  },

  "1.g3 d5 2.Nf3": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, wo er d4 und e5 kontrolliert, " +
      "sodass 2...e5? nach 3.Sxe5 einen Bauern verliert. Es folgen Lg2 und O-O, danach d3, " +
      "Sbd2 und e4 für einen Königsindischen Angriff oder c4 für eine Struktur der Réti- oder " +
      "Katalanischen Eröffnung. Schwarz kann sich mit ...Sf6, ...c5 oder ...c6 nebst ...Lg4 " +
      "oder ...Lf5 entwickeln und behält den größeren Anteil am Zentrum.",
  },

  "1.g3 d5 2.d4": {
    strategy:
      "Besetzt sofort das Zentrum und führt in ein Damenbauernspiel, in dem g3 bereits " +
      "gespielt ist; Lg2, Sf3 und c4 folgen nach Art der Katalanischen Eröffnung. Der Zug ist " +
      "solide, aber langsam: d5 wird noch nicht angegriffen, sodass Schwarz sich mit ...Sf6, " +
      "...Lf5 und ...e6 oder ...c5 problemlos entwickeln kann.",
  },

  "1.g3 d5 2.c4": {
    strategy:
      "Greift d5 von der Flanke an; Lg2 und Sc3 folgen. Nach 2...dxc4 gewinnt Weiß den Bauern " +
      "mit Da4+ und Dxc4 zurück, während 2...d4 Schwarz Raum verschafft. Der Zug ist solide, " +
      "wird aber selten gespielt, da der Bauer d5 angreift, bevor der Läufer auf g2 auf der " +
      "langen Diagonale mitwirken kann.",
  },

  "1.g3 d5 2.d3": {
    strategy:
      "Unterstützt ein späteres e4 und hält Lg2, Sf3 und Sbd2 in Reserve, mit Kurs auf einen " +
      "Aufbau des Königsindischen Angriffs. Der Zug ist solide und flexibel, aber passiv: " +
      "Schwarz besetzt das Zentrum mit ...e5 und ...Sf6 oder ...c5 und begegnet e4 mit " +
      "gleichen Chancen.",
  },

  "1.g3 d5 2.b3": {
    strategy:
      "Bereitet Lb2 vor, sodass in einem Doppelfianchetto beide Läufer auf den langen " +
      "Diagonalen wirken; Lg2 und Sf3 folgen. Der Zug ist solide, aber langsam: Schwarz kann " +
      "mit ...e5 und ...Sf6 Raum gewinnen, während Weiß noch nichts gegen d5 unternimmt.",
  },

  "1.g3 d5 2.Nc3": {
    strategy:
      "Entwickelt eine Figur, zielt auf d5 und bereitet e4 vor, verstellt aber den c-Bauern " +
      "und lädt zu 2...d4 ein. Der Springer muss dann erneut ziehen, nach e4 oder b5, wo ihn " +
      "...Sf6 oder ...f5 beziehungsweise ...c6 angreifen, sodass Schwarz mit Tempo Raum " +
      "gewinnt.",
  },

  "1.g3 d5 2.f4": {
    strategy:
      "Kontrolliert e5 und strebt einen Aufbau der Bird-Eröffnung mit Sf3, Lg2 und O-O an. " +
      "Der Zug ist solide, lockert aber die Diagonale a7–g1 und das Feld e3, und Schwarz " +
      "entwickelt sich bequem mit ...Sf6, ...g6 und ...Lg7 oder mit ...c5 und ...Sc6.",
  },

  "1.g3 d5 2.a3": {
    strategy:
      "Verwendet ein Tempo auf einen Flankenzug, der nur ein späteres b4 vorbereitet. Weder " +
      "im Zentrum noch in der Entwicklung verbessert sich Weiß, und Schwarz besetzt mit ...e5 " +
      "und ...Sf6 ungehindert das Zentrum.",
  },

  "1.g3 d5 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel, trägt aber nichts zum Zentrum oder zur Entwicklung bei, " +
      "und der a-Bauer kann ein späteres b4 nicht mehr stützen. Schwarz baut mit ...e5 und " +
      "...Sf6 auf, und Weiß hat ein Tempo eingebüßt.",
  },

  "1.g3 d5 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 vor, doch der Bauer auf b4 ist ungedeckt: " +
      "...a5 greift ihn sofort an, und sobald der e-Bauer zieht, nimmt ihn auch der Läufer f8 " +
      "ins Visier. Schwarz entwickelt sich mit ...Sf6 und ...e5 oder ...e6, während Weiß sich " +
      "um den Bauern kümmern muss.",
  },

  "1.g3 d5 2.c3": {
    strategy:
      "Unterstützt ein späteres d4, nimmt aber dem Springer b1 das Feld c3, sodass er über d2 " +
      "oder a3 entwickelt werden muss, und unternimmt noch nichts gegen d5. Schwarz " +
      "entwickelt sich frei mit ...Sf6, ...e5 oder ...c5.",
  },

  "1.g3 d5 2.e3": {
    strategy:
      "Öffnet dem Läufer f1 eine Diagonale, obwohl ihm g2 bereits offenstand, und sperrt den " +
      "Läufer c1 ein. Der Bauer kontrolliert d4, unternimmt aber nichts gegen d5, sodass " +
      "Schwarz mit ...e5 Raum gewinnt oder sich mit ...Sf6 und ...c5 entwickelt.",
  },

  "1.g3 d5 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Königsspringer das Feld f3 und öffnet die Diagonale " +
      "a7–g1, was die kurze Rochade unsicherer macht. Schwarz baut mit ...e5 und ...Sf6 das " +
      "Zentrum auf, während sich Weiß nur umständlich entwickeln kann.",
  },

  "1.g3 d5 2.h3": {
    strategy:
      "Verhindert ...Lg4, ist aber ein langsamer Zug, der weder eine Figur entwickelt noch um " +
      "das Zentrum kämpft. Schwarz besetzt mit ...e5 und ...Sf6 das Zentrum und hat das " +
      "leichtere Spiel.",
  },

  "1.g3 d5 2.h4": {
    strategy:
      "Leitet mit Blick auf h5 einen Bauernvorstoß am Königsflügel ein, doch es gibt noch " +
      "nichts anzugreifen: Der Zug nimmt dem Bauern g3 die Stütze des h-Bauern und " +
      "vernachlässigt das Zentrum. Schwarz antwortet mit ...h5 oder baut einfach mit ...Sf6 " +
      "und ...e5 auf.",
  },

  "1.g3 d5 2.Na3": {
    strategy:
      "Strebt nach b5, doch ...c6 nimmt dem Springer dieses Feld, und der Bauer d5 " +
      "kontrolliert bereits c4, sodass er kaum nützliche Felder hat. Er verlässt b1 in " +
      "Richtung Rand, verstellt den a-Bauern und tut nichts für das Zentrum.",
  },

  "1.g3 d5 2.Bh3": {
    strategy:
      "Bietet nach 2...Lxh3 3.Sxh3 den Läufertausch an, der das Fianchetto aufgibt, den " +
      "Springer an den Rand stellt und die lange Diagonale sowie die weißen Felder schwächt. " +
      "Schwarz kann den Zug auch ignorieren und mit ...e5 und ...Sf6 aufbauen.",
  },

  "1.g3 d5 2.Nh3": {
    strategy:
      "Hält g2 für den Läufer frei und strebt nach f4, um Druck auf d5 auszuüben, doch 2...e5 " +
      "kontrolliert f4 und lässt den Springer am Rand ohne gutes Feld zurück. Schwarz " +
      "entwickelt sich frei mit ...Sf6 und ...Sc6, während Weiß den Springer erst wieder ins " +
      "Spiel bringen muss.",
  },

  "1.g3 d5 2.e4": {
    strategy:
      "Opfert den e-Bauern im Vertrauen auf das Fianchetto, doch nach 2...dxe4 3.Lg2 " +
      "behauptet Schwarz den Mehrbauern mit ...Sf6 oder ...f5. Der Entwicklungsvorsprung von " +
      "Weiß ist zu gering, um dafür zu entschädigen.",
  },

  "1.g3 d5 2.g4": {
    strategy:
      "Stellt den Bauern ein: 2...Lxg4 gewinnt ihn, weil der Bauer e2 der Dame den Weg " +
      "versperrt und nichts g4 deckt. Weiß hat dafür keinen Entwicklungsvorsprung, und 3.h3 " +
      "treibt den Läufer nur auf ein gutes Feld.",
  },

  "1.g3 d5": {
    background:
      "Die häufigste Antwort auf 1.g3: In jeder der fünf Partiedatenbanken, die die " +
      "Eröffnungstheorie bei Wikibooks vergleicht, wird 1...d5 in rund 28 bis 37 Prozent der " +
      "Partien gespielt.",
  },

  "1.g3 d5 2.Bg2 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, wo er d5 deckt und auf e4 zielt. " +
      "Schwarz hält sich jeden Aufbau offen: ...c6 mit ...Lf5 oder ...Lg4, ...e6 mit ...Le7 " +
      "oder ...c5 mit ...Sc6. Weiß setzt meist mit Sf3 und O-O fort, dann mit d3 und e4 zum " +
      "Königsindischen Angriff oder mit c4 zu einem Aufbau wie in der Réti- oder der " +
      "Katalanischen Eröffnung. Dieselbe Stellung entsteht nach 1.g3 Sf6 2.Lg2 d5.",
  },

  "1.g3 d5 2.Bg2 c6": {
    name: "Königsfianchetto: Slawische Formation",
    background:
      "Der Name verweist auf die Slawische Verteidigung, 1.d4 d5 2.c4 c6, mit denselben " +
      "Bauern auf c6 und d5. Diese Eröffnung wurde schon 1590 analysiert, aber erst ab den " +
      "1920er-Jahren gründlich erforscht, und viele Meister slawischer Herkunft, darunter " +
      "Alapin, Aljechin, Bogoljubow und Vidmar, trugen zu ihrer Theorie bei.",
    strategy:
      "Stützt d5 mit einem zweiten Bauern, der den Läufer g2 auf der langen Diagonale " +
      "abstumpft. Schwarz setzt mit ...Sf6 fort und bringt den Läufer c8 nach f5 oder g4, " +
      "bevor ...e6 die Bauernkette vervollständigt; der Springer b8 entwickelt sich über d7, " +
      "da c6 besetzt ist. Weiß wählt zwischen c4 gegen d5 und einem Königsindischen Angriff " +
      "mit Sf3, O-O, d3 und e4.",
  },

  "1.g3 d5 2.Bg2 c5": {
    name: "Königsfianchetto: Moderne Verteidigung mit vertauschten Farben",
    strategy:
      "Kontrolliert d4 und gewinnt Raum am Damenflügel, mit ...Sc6, ...Sf6 und ...e5 oder " +
      "...e6 als Fortsetzung. Weiß wählt zwischen c4, das d5 angreift, und Sf3, O-O und d3 " +
      "für einen Königsindischen Angriff. Schwarz muss auf d5 achten, das nur die Dame gegen " +
      "den Läufer g2 deckt, und kann c4 mit ...d4, ...e6 oder ...Sf6 beantworten.",
  },

  "1.g3 d5 2.Bg2 e5": {
    strategy:
      "Besetzt das Zentrum mit einem zweiten Bauern; dieselbe Stellung entsteht nach 1.g3 e5 " +
      "2.Lg2 d5. Schwarz setzt mit ...Sf6, ...Sc6 und ...Le7 fort. Weiß bleibt beim Aufbau " +
      "des Königsindischen Angriffs mit d3, Sf3 und O-O oder schlägt sofort mit c4 oder d4 " +
      "zu. Beide Zentrumsbauern brauchen Schutz: Der Läufer g2 und c4 zielen auf d5, Sf3 und " +
      "d4 greifen e5 an.",
  },

  "1.g3 d5 2.Bg2 e6": {
    name: "Königsfianchetto: Katalanische Formation",
    background:
      "Der Name verweist auf die Katalanische Eröffnung, in der Weiß d4 und c4 spielt und den " +
      "Läufer auf g2 fianchettiert. Diese Eröffnung ist nach Katalonien benannt: Die " +
      "Veranstalter des Turniers von Barcelona 1929 baten Savielly Tartakower, zu Ehren der " +
      "Schachgeschichte Kataloniens eine neue Variante zu schaffen.",
    strategy:
      "Stützt d5 und öffnet dem Läufer f8 die Diagonale für ...Le7, mit ...Sf6 und der " +
      "Rochade als Fortsetzung. Weiß antwortet mit Sf3, O-O, d3 und e4 nach Art des " +
      "Königsindischen Angriffs oder mit c4 gegen d5. Solide, aber passiv: Der Läufer c8 " +
      "bleibt hinter e6 eingesperrt, bis ...b6 und ...Lb7 oder ein späteres ...e5 ihn " +
      "befreien.",
  },

  "1.g3 d5 2.Bg2 Nc6": {
    strategy:
      "Entwickelt den Springer mit Blick auf d4 und e5, verstellt aber den c-Bauern, sodass " +
      "...c6 den Bauern d5 nicht mehr stützen kann. Nach c4 ist d5 zweimal angegriffen und " +
      "nur von der Dame gedeckt, sodass Schwarz ...e6, ...Sf6 oder ...d4 braucht. Spielbar, " +
      "aber ...Sf6 entwickelt eine Figur, ohne den c-Bauern zu verstellen.",
  },

  "1.g3 d5 2.Bg2 f5": {
    strategy:
      "Nimmt Weiß das Feld e4 und strebt einen Stonewall-Aufbau mit ...Sf6, ...e6 und ...c6 " +
      "an. Die Struktur ist solide, hinterlässt aber ein Loch auf e5, schwächt die Diagonale " +
      "e8–h5 und sperrt den Läufer c8 ein, sobald ...e6 folgt. Weiß entwickelt sich mit Sf3 " +
      "und O-O, und nach d4 wird e5 zum Vorposten für einen Springer.",
  },

  "1.g3 d5 2.Bg2 g6": {
    strategy:
      "Spiegelt den weißen Aufbau mit ...Lg7, ...Sf6 und ...O-O, gefolgt von ...c6 oder " +
      "...c5. Der Läufer g7 tut nichts für d5, daher prüft c4 den Bauern sofort: Er ist " +
      "zweimal angegriffen und nur von der Dame gedeckt. Solide, aber weniger flexibel als " +
      "...Sf6.",
  },

  "1.g3 d5 2.Bg2 d4": {
    strategy:
      "Gewinnt Raum und nimmt den weißen Figuren die Felder c3 und e3, wobei ...c5 und ...e5 " +
      "den vorgerückten Bauern stützen sollen. Der Preis ist die lange Diagonale: Da d5 " +
      "geräumt ist, zielt der Läufer g2 auf b7, sodass der Läufer c8 an dessen Deckung " +
      "gebunden ist, bis ...c6 oder ...Sc6 die Linie schließt, und c3 oder e3 mit Sf3 können " +
      "den Bauern später untergraben.",
  },

  "1.g3 d5 2.Bg2 Be6": {
    strategy:
      "Deckt d5, verstellt aber den Bauern e7, sodass der Läufer f8 nur noch über ...g6 " +
      "herauskommt, und ohne den Läufer c8 fehlt b7 der Schutz gegen c4 und Db3. Weiß gewinnt " +
      "außerdem Zeit mit Sf3 und Sg5, das den Läufer angreift.",
  },

  "1.g3 d5 2.Bg2 Bf5": {
    strategy:
      "Entwickelt den Läufer außerhalb der Bauernkette, nimmt aber b7 seinen Schutz. Nach " +
      "3.c4 c6 4.cxd5 cxd5 5.Db3 greift die Dame b7 und, zusammen mit dem Läufer g2, d5 an, " +
      "sodass Schwarz beide Bauern zugleich decken muss.",
  },

  "1.g3 d5 2.Bg2 Bg4": {
    strategy:
      "Entwickelt den Läufer, bevor der weiße Springer auf f3 steht, sodass er nichts " +
      "fesselt, und h3 zwingt ihn sofort zu einem weiteren Zug. Ohne den Läufer auf c8 ist b7 " +
      "ungedeckt, und c4 mit Db3 greift b7 und d5 zugleich an.",
  },

  "1.g3 d5 2.Bg2 Qd7": {
    strategy:
      "Hält d5 gedeckt, aber die Dame verstellt den Läufer c8 und nimmt dem Springer b8 das " +
      "Feld d7, sodass die schwarze Entwicklung stockt. Weiß baut mit c4, Sc3 und Sf3 auf, " +
      "und die Dame muss meist erneut ziehen, um den Läufer c8 freizugeben.",
  },

  "1.g3 d5 2.Bg2 Qd6": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel. 3.Sc3 greift d5 ein zweites Mal an " +
      "und droht Sb5 gegen die Dame und c7, sodass Schwarz Zeit mit der Verteidigung " +
      "verliert, während Weiß e4 vorbereitet.",
  },

  "1.g3 d5 2.Bg2 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er weder d5 noch e5 deckt und einen weiteren Zug, " +
      "nach b4 oder c7, braucht, um d5 zu stützen. Weiß baut ungestört mit c4 und Sf3 auf.",
  },

  "1.g3 d5 2.Bg2 Nh6": {
    strategy:
      "Strebt nach f5 statt nach f6, dem natürlichen Feld, von dem aus der Springer d5 deckt " +
      "und e4 kontrolliert. Sobald der weiße d-Bauer gezogen hat, verdoppelt Lxh6 gxh6 die " +
      "schwarzen h-Bauern.",
  },

  "1.g3 d5 2.Bg2 a6": {
    strategy:
      "Verbraucht ein Tempo für einen Flügelzug, der nur ...b5 vorbereitet. Für Zentrum und " +
      "Entwicklung geschieht nichts, und Weiß kann mit c4 oder d4 Raum gewinnen und sich frei " +
      "entwickeln.",
  },

  "1.g3 d5 2.Bg2 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und verhindert b4, tut aber nichts für Zentrum oder " +
      "Entwicklung. Weiß setzt ungestört mit c4, Sf3 und O-O fort.",
  },

  "1.g3 d5 2.Bg2 b6": {
    strategy:
      "Bereitet ...Lb7 vor, doch der Bauer d5 verstellt diesen Läufer, und ohne den b-Bauern " +
      "öffnet sich die lange Diagonale bis a8, sobald d5 weicht: Nach 3.c4 dxc4? 4.Lxa8 " +
      "gewinnt Weiß mindestens die Qualität.",
  },

  "1.g3 d5 2.Bg2 b5": {
    strategy:
      "Rückt einen Flügelbauern vor, bevor eine Figur entwickelt ist. 3.Sc3 greift b5 und d5 " +
      "zugleich an, sodass Schwarz mit ...c6 antworten muss, und die Bauern b5, c6 und d5 " +
      "hinterlassen ein dauerhaftes Loch auf c5.",
  },

  "1.g3 d5 2.Bg2 f6": {
    strategy:
      "Bereitet ...e5 vor, nimmt aber dem Springer g8 sein bestes Feld, schwächt die " +
      "Diagonale e8–h5 und das Feld e6 und entwickelt nichts. Weiß greift mit c4 oder d4 nach " +
      "dem Zentrum.",
  },

  "1.g3 d5 2.Bg2 g5": {
    strategy:
      "Schwächt f5, h5 und die Diagonale a1–h8, ohne etwas zu entwickeln, und 3.h4 greift den " +
      "ungedeckten Bauern sofort an. Der Königsflügel ist dauerhaft gelockert, und der König " +
      "findet dort kein sicheres Zuhause.",
  },

  "1.g3 d5 2.Bg2 h6": {
    strategy:
      "Nimmt den weißen Figuren das Feld g5, obwohl Weiß gar nicht droht, dorthin zu gehen, " +
      "und tut nichts für Entwicklung oder Zentrum. Das Tempo ist mit ...Sf6, ...c6 oder " +
      "...e6 besser genutzt.",
  },

  "1.g3 d5 2.Bg2 h5": {
    strategy:
      "Bereitet ...h4 gegen g3 vor, doch ohne entwickelte Figur kommt der Angriff verfrüht. " +
      "Der Zug lockert g5 und den Königsflügel und gibt Weiß Zeit, mit c4 oder d4 das Zentrum " +
      "zu besetzen.",
  },

  "1.g3 d5 2.Bg2 Nd7": {
    strategy:
      "Verstellt der Dame den Weg nach d5, sodass 3.Lxd5 einen Bauern gewinnt; ...Sb6 gewinnt " +
      "nur ein Tempo gegen den Läufer, der mit dem Mehrbauern zurückgeht.",
  },

  "1.g3 d5 2.Bg2 Bd7": {
    strategy:
      "Verstellt der Dame den Weg nach d5 und lässt b7 ohne seinen Läufer, sodass 3.Lxd5 " +
      "einen Bauern gewinnt und zugleich b7 angreift.",
  },

  "1.g3 d5 2.Bg2 Kd7": {
    strategy:
      "Verstellt die d-Linie, sodass d5 den Schutz der Dame verliert und 3.Lxd5 einen Bauern " +
      "gewinnt; der König verliert zudem das Rochaderecht und bleibt im Zentrum stehen.",
  },

  "1.g3 d5 2.Bg2 Bh3": {
    strategy:
      "Greift den Läufer g2 an, stellt aber den eigenen ein: 3.Lxh3 oder 3.Sxh3 gewinnt eine " +
      "ganze Figur, da nichts h3 deckt.",
  },
};
