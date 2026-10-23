import type { OpeningTexts } from "../book.ts";

// German prose for e4-d6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.e4 d6 2.d4": {
    strategy:
      "Errichtet mit d4 und e4 ein breites Bauernzentrum und öffnet die Diagonale des Läufers " +
      "c1. Schwarz lässt das Zentrum vorerst stehen, entwickelt sich mit ...Sf6, ...g6 und " +
      "...Lg7 und greift es später mit ...c5 oder ...e5 an. Weiß deckt e4 meist mit Sc3 und " +
      "wählt dann zwischen dem aggressiven f4, dem ruhigeren Sf3 mit Le2 oder Le3 mit Dd2 und " +
      "f3.",
  },

  "1.e4 d6 2.Nf3": {
    strategy:
      "Entwickelt den Springer, kontrolliert d4 und e5 und hält den Vorstoß d4 in Reserve. " +
      "Nach 2...Sf6 3.Sc3 g6 4.d4 entsteht der klassische Aufbau mit Sf3, während 2...e5 3.d4 " +
      "in die Philidor-Verteidigung und 2...c5 in die Sizilianische Verteidigung führt. Der " +
      "Preis ist das frühe f4 der schärfsten weißen Angriffssysteme, und der Springer kann " +
      "mit ...Lg4 gefesselt werden.",
  },

  "1.e4 d6 2.Nc3": {
    strategy:
      "Entwickelt den Springer, deckt e4 und hält d4, f4 und Sf3 offen. Nach 2...Sf6 3.d4 g6 " +
      "entsteht die Hauptvariante durch Zugumstellung, Schwarz kann aber auch 2...e5 wählen " +
      "und eine Philidor-artige Struktur anstreben. Eine solide, flexible Alternative zum " +
      "sofortigen d4 mit etwas bescheidenerem Anspruch auf das Zentrum.",
  },

  "1.e4 d6 2.b3": {
    strategy:
      "Bereitet Lb2 vor, um Druck auf e5 und die lange Diagonale auszuüben, gefolgt von Sf3 " +
      "und später c4 oder d4. Der Aufbau ist flexibel und solide, überlässt aber Schwarz das " +
      "Zentrum, der es mit ...e5 und ...Sf6 besetzen kann. Langsamer als 2.d4.",
  },

  "1.e4 d6 2.c3": {
    strategy:
      "Unterstützt mit dem c-Bauern ein späteres d4, nimmt aber dem Damenspringer das Feld c3 " +
      "und kostet gegenüber dem sofortigen d4 ein Tempo. Schwarz antwortet mit ...Sf6 gegen " +
      "e4 oder gewinnt mit ...e5 Raum. Solide, aber langsam.",
  },

  "1.e4 d6 2.c4": {
    strategy:
      "Gewinnt mit c4 und e4 gemeinsam Raum, kontrolliert d5 und bereitet Sc3 und d4 vor. " +
      "Schwarz kann mit ...e5 sofort Anspruch auf das Zentrum erheben oder mit ...Sf6 Druck " +
      "auf e4 ausüben. Solide, aber ungewöhnlich und weniger direkt als 2.d4.",
  },

  "1.e4 d6 2.d3": {
    strategy:
      "Stützt e4 bescheiden und öffnet die Diagonale des Läufers c1, mit Sf3 und Le2 oder " +
      "einem Aufbau mit g3 und Lg2 im Blick. Es erhebt keinen Anspruch auf d4, sodass Schwarz " +
      "mit ...e5 Raum gewinnt und sich mühelos mit ...Sf6 entwickelt. Solide, aber weit " +
      "weniger ehrgeizig als 2.d4.",
  },

  "1.e4 d6 2.g3": {
    strategy:
      "Bereitet Lg2 auf der langen Diagonale vor, wo der Läufer e4 stützt, gefolgt von Sf3 " +
      "und der Rochade. Der zurückhaltende Aufbau stellt keinen zweiten Bauern ins Zentrum, " +
      "sodass Schwarz ungehindert mit ...e5 Raum gewinnt und sich mit ...Sf6 entwickelt. " +
      "Solide, aber anspruchslos.",
  },

  "1.e4 d6 2.Be2": {
    strategy:
      "Eine bescheidene Entwicklung, die Sf3 und die Rochade vorbereitet und d4 offenhält. " +
      "Sie erhebt keinen Anspruch auf das Zentrum, sodass Schwarz sofort ...e5 oder ...Sf6 " +
      "spielen kann und keine Probleme hat. Solide, aber langsamer als 2.d4.",
  },

  "1.e4 d6 2.Bc4": {
    strategy:
      "Entwickelt den Läufer sofort mit Blick auf f7, doch ...Sf6 greift e4 an, sodass d3, " +
      "Sc3 oder De2 folgen muss, und Schwarz kann den Läufer mit ...e6 abblocken oder mit " +
      "...e5 Raum gewinnen. Solide und in der Praxis zu sehen, aber weniger wirkungsvoll als " +
      "2.d4.",
  },

  "1.e4 d6 2.f4": {
    name: "Rat-Verteidigung: Harmonist",
    strategy:
      "Stellt sofort Bauern auf e4 und f4, mit Sf3, Sc3 und einem späteren e5 im Blick, doch " +
      "ohne d4 ist das Zentrum weniger stabil als in den f4-Systemen nach 2.d4. Schwarz " +
      "antwortet mit ...Sf6 gegen e4 oder kontert mit ...e5, worauf 3.Sf3 exf4 eine Stellung " +
      "des Angenommenen Königsgambits ergibt. Solide und in der Praxis zu sehen, aber weniger " +
      "flexibel als 2.d4.",
  },

  "1.e4 d6 2.a3": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauernzug, der nichts stützt und nichts droht. " +
      "Schwarz antwortet mit ...Sf6 oder ...e5 und nimmt sich Raum im Zentrum, während der " +
      "weiße d-Bauer und die Springer zu Hause bleiben.",
  },

  "1.e4 d6 2.a4": {
    strategy:
      "Zieht einen Randbauern, statt zu entwickeln oder das Zentrum zu besetzen. Der " +
      "gewonnene Raum am Damenflügel nützt noch nichts, und Schwarz spielt ...Sf6 und ...e5 " +
      "nach Belieben.",
  },

  "1.e4 d6 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 vor, doch der Bauer schwächt c3 und c4, " +
      "und das Zentrum fällt an Schwarz, der mit ...e5 und ...Sf6 ein bequemes Spiel hat.",
  },

  "1.e4 d6 2.f3": {
    strategy:
      "Stützt e4 und bereitet Le3 und Dd2 vor, ergibt aber erst nach d4 und Sc3 Sinn. Hier " +
      "nimmt es dem Königsspringer das Feld f3 und lockert die Diagonale e1-h4 ohne " +
      "Gegenwert, während Schwarz sich frei entwickelt.",
  },

  "1.e4 d6 2.h3": {
    strategy:
      "Ein prophylaktischer Randbauernzug gegen ...Lg4, gespielt, bevor eine Figur entwickelt " +
      "ist. Er verliert ein Tempo und überlässt Schwarz das Zentrum, der ungehindert ...Sf6 " +
      "und ...e5 spielt.",
  },

  "1.e4 d6 2.Na3": {
    strategy:
      "Stellt den Springer an den Rand, fern vom Zentrum und ohne d4 oder e4 zu stützen. " +
      "Schwarz antwortet mit ...e5 oder ...Sf6, und Weiß braucht ein weiteres Tempo, um den " +
      "Springer nach c4 oder c2 zu bringen.",
  },

  "1.e4 d6 2.Qe2": {
    strategy:
      "Bringt die Dame früh ins Spiel und verstellt den Läufer f1, was die kurze Rochade " +
      "verzögert. Sie deckt e4, entwickelt aber keine Leichtfigur und bereitet d4 nicht vor, " +
      "und Schwarz spielt ...Sf6 oder ...e5 mit bequemem Spiel.",
  },

  "1.e4 d6 2.Qf3": {
    strategy:
      "Bringt die Dame früh ins Spiel und nimmt dem Königsspringer das Feld f3. Schwarz " +
      "entwickelt sich mit ...Sf6 und ...Sc6 und gewinnt mit ...Lg4 oder ...Sd4 Zeit gegen " +
      "die Dame.",
  },

  "1.e4 d6 2.Qh5": {
    strategy:
      "Bringt die Dame auf ein Feld, auf dem 2...Sf6 sie und den Bauern e4 zugleich angreift, " +
      "und auch ...g6 vertreibt sie. Da gegen f7 keine echte Drohung besteht, gewinnt Schwarz " +
      "Zeit für die Entwicklung.",
  },

  "1.e4 d6 2.Bd3": {
    strategy:
      "Stellt den Läufer vor den d-Bauern, sodass d4 unmöglich ist, bis er wieder zieht, und " +
      "der Läufer c1 eingesperrt bleibt. Schwarz besetzt mit ...e5 und ...Sf6 ungehindert das " +
      "Zentrum.",
  },

  "1.e4 d6 2.Bb5+": {
    strategy:
      "Gibt ein Schach, auf das Schwarz mit ...c6 antwortet, das den Läufer angreift und ein " +
      "Tempo gewinnt, oder mit ...Ld7 und einem Tausch. Weiß hat den Läufer ohne bleibenden " +
      "Gewinn eingesetzt.",
  },

  "1.e4 d6 2.Nh3": {
    strategy:
      "Strebt vom Rand nach f4 oder g5, doch 2...Lxh3 3.gxh3 verdoppelt sofort die weißen " +
      "h-Bauern und reißt den Königsflügel auf.",
  },

  "1.e4 d6 2.Ne2": {
    strategy:
      "Entwickelt den Springer auf ein passives Feld, wo er den Läufer f1 und den Weg der " +
      "Dame nach e2 verstellt und zwar d4, aber nicht e5 kontrolliert. Schwarz gewinnt mit " +
      "...e5 Raum und entwickelt sich mit ...Sf6 gegen e4.",
  },

  "1.e4 d6 2.g4": {
    name: "Rat-Verteidigung: Spike-Angriff",
    strategy:
      "Schwächt f3, h3 und den ganzen Königsflügel, ohne etwas zu entwickeln, und ...Sf6 " +
      "greift sofort e4 an. Schwarz setzt mit ...h6 und ...e5 gegen die gelockerte Stellung " +
      "fort.",
  },

  "1.e4 d6 2.h4": {
    name: "Rat-Verteidigung: Petruccioli-Angriff",
    strategy:
      "Schiebt den Randbauern für einen Königsangriff vor, hinter dem nichts steht. Zentrum " +
      "und Entwicklung werden vernachlässigt, g4 wird geschwächt, und Schwarz antwortet nach " +
      "Belieben mit ...Sf6 oder ...e5.",
  },

  "1.e4 d6 2.Qg4": {
    strategy:
      "Stellt die Dame ein: 2...Lxg4 gewinnt sie, weil der Läufer c8 auf der offenen " +
      "Diagonale g4 erreicht und nichts das Feld deckt.",
  },

  "1.e4 d6 2.Ke2": {
    strategy:
      "Gibt das Rochaderecht ohne Gegenwert auf, verstellt Läufer und Dame und lässt den " +
      "König im Zentrum, wo ...Lg4+ und ...e5 Zeit gewinnen. Ein dauerhaftes Zugeständnis.",
  },

  "1.e4 d6 2.Ba6": {
    strategy:
      "Verliert einen Läufer für nichts: 2...bxa6 oder 2...Sxa6 schlägt ihn, und keine weiße " +
      "Figur kann auf a6 zurückschlagen.",
  },

  "1.e4 d6 2.e5": {
    strategy:
      "Schiebt den Bauern auf ein Feld, auf dem ihn nichts deckt: 2...dxe5 gewinnt ihn, und " +
      "Weiß kann nicht zurückschlagen und hat keinen Entwicklungsvorsprung als Ausgleich.",
  },

  "1.e4 d6": {
    name: "Pirc-Ufimzew-Verteidigung",
    background:
      "Benannt nach dem slowenischen Großmeister Vasja Pirc, der sie ab den späten " +
      "1940er-Jahren oft spielte; in Russland heißt sie oft Ufimzew-Verteidigung, nach " +
      "Anatoli Ufimzew. Ihr Debüt in einem WM-Kampf gab sie in der 17. Partie des Wettkampfs " +
      "von 1972 in Reykjavík, als Bobby Fischer sie gegen Boris Spasski spielte und " +
      "remisierte.",
  },

  "1.e4 d6 2.d4 Nf6": {
    strategy:
      "Entwickelt den Springer, greift e4 an und hält die Bauernstruktur flexibel. Schwarz " +
      "plant ...g6, ...Lg7 und ...O-O und lässt Weiß ein breites Zentrum errichten, das " +
      "später mit ...c5 oder ...e5 untergraben wird. Der Preis ist ein beengtes Spiel gegen " +
      "scharfe Aufbauten wie den Österreichischen Angriff mit f4.",
  },

  "1.e4 d6 2.d4 g6": {
    background:
      "Dieselbe Stellung entsteht auch nach 1.e4 g6 2.d4 d6, der Modernen Verteidigung, die " +
      "auch Robatsch-Verteidigung heißt. Die zehnte Auflage von Modern Chess Openings (1965) " +
      "fasste die Pirc- und die Robatsch-Verteidigung als Pirc-Robatsch-Verteidigung " +
      "zusammen.",
    strategy:
      "Bereitet ...Lg7 und ...O-O vor und hält ...Sf6 in Reserve, sodass die Partie noch in " +
      "eine Pirc-Verteidigung übergehen oder ein Aufbau der Modernen Verteidigung bleiben " +
      "kann. Weiß kann d4 mit c3 gegen den Läufer g7 absichern oder Sc3, Le3, Dd2 und f3 " +
      "spielen, und Schwarz schlägt später mit ...c5 oder ...e5 zurück. Weil ...Sf6 " +
      "aufgeschoben wird, steht e4 anfangs weniger unter Druck.",
  },

  "1.e4 d6 2.d4 Nd7": {
    name: "Rat-Verteidigung: Antal-Verteidigung",
    strategy:
      "Deckt e5, sodass 3.e5 nach ...dxe5 und ...Sxe5 einfach einen Bauern verlöre, und " +
      "bereitet ...e5 mit einer Struktur wie in der Philidor-Verteidigung vor. Der Springer " +
      "verstellt den Läufer c8, und Schwarz hat noch keinen Raum gewonnen, sodass Weiß sich " +
      "mit Sf3, Sc3 oder Lc4 ungehindert entwickelt und den größeren Anteil am Zentrum " +
      "behält.",
  },

  "1.e4 d6 2.d4 Nc6": {
    name: "Nimzowitsch-Verteidigung: Mikenas-Variante",
    strategy:
      "Entwickelt eine Figur und erhöht den Druck auf d4, doch 3.d5 vertreibt den Springer: " +
      "Auf 3...Se5 folgt 4.f4 mit erneutem Tempogewinn, und 3...Sb8 verliert Zeit. Schwarz " +
      "kann sich mit ...Sg6 oder ...Sed7 umgruppieren und steht solide, doch Weiß behält " +
      "mühelos einen Raumvorteil.",
  },

  "1.e4 d6 2.d4 e5": {
    name: "Königsbauernspiel: Maróczy-Verteidigung",
    strategy:
      "Fordert das Zentrum sofort heraus und steuert eine Bauernstruktur wie in der " +
      "Philidor-Verteidigung an, die nach 3.Sf3 entsteht. Weiß kann stattdessen mit 3.dxe5 " +
      "dxe5 4.Dxd8+ Kxd8 tauschen, wonach Schwarz nicht mehr rochieren kann und Weiß etwas " +
      "bequemer steht. Solide, aber weniger flexibel als ...Sf6.",
  },

  "1.e4 d6 2.d4 c5": {
    strategy:
      "Greift d4 nach sizilianischem Muster an, und 3.Sf3 cxd4 4.Sxd4 Sf6 5.Sc3 führt in die " +
      "offene Sizilianische Verteidigung über. Weiß kann das mit 3.d5 vermeiden und in einer " +
      "Benoni-ähnlichen Struktur Raum gewinnen, oder mit 3.dxc5, wonach 3...dxc5 4.Dxd8+ Kxd8 " +
      "Schwarz das Rochaderecht kostet. Spielbar, doch Weiß bestimmt die Struktur.",
  },

  "1.e4 d6 2.d4 c6": {
    strategy:
      "Hält sowohl einen Pirc-Aufbau mit ...Sf6 und ...g6 als auch einen Philidor-artigen " +
      "Aufbau mit ...Sbd7 und ...e5 offen, und 3.Sc3 Sf6 führt zum Pribyl-System, auch " +
      "tschechische Variante genannt. Der Zug entwickelt nichts und gewinnt keinen Raum, " +
      "sodass Weiß das Zentrum in Ruhe mit Sc3 und Le3 festigen oder mit f4 erweitern kann. " +
      "Solide, aber langsamer als ...Sf6.",
  },

  "1.e4 d6 2.d4 e6": {
    strategy:
      "Errichtet mit Bauern auf d6 und e6 ein kompaktes kleines Zentrum und bereitet ...Sf6, " +
      "...Le7 und ...O-O vor, mit ...c5 oder ...e5 als späteren Hebeln. Der Läufer c8 bleibt " +
      "eingesperrt, bis ...b6 oder ...e5 folgt, während Weiß sich mit Sc3, Sf3 und Ld3 " +
      "ungehindert entwickelt. Solide, aber passiv.",
  },

  "1.e4 d6 2.d4 f5": {
    name: "Balogh-Verteidigung",
    background:
      "Benannt nach János Balogh, einem ungarischen Internationalen Meister im Fernschach, " +
      "der sie 1930 in der Wiener Schachzeitung analysierte. Heute ist sie selten zu sehen, " +
      "doch Hikaru Nakamura besiegte damit beim HB Global Chess Challenge 2005 den " +
      "Großmeister Eugene Perelshteyn.",
    strategy:
      "Greift e4 sofort an, schwächt aber den Königsflügel und das Feld e6. Die meisten " +
      "Bücher halten 3.exf5 Lxf5 4.Df3 Dc8 5.Ld3 für eine Widerlegung, doch der " +
      "Internationale Fernschachmeister Keith Hayward hält die Verteidigung für riskant, aber " +
      "spielbar.",
  },

  "1.e4 d6 2.d4 d5": {
    strategy:
      "Zieht den d-Bauern ein zweites Mal und führt zu einer Stellung wie in der " +
      "Skandinavischen Verteidigung, in der Weiß bereits d4 gespielt hat. Nach 3.exd5 Dxd5 " +
      "4.Sc3 muss die Dame erneut ziehen, sodass Weiß ein klares Tempo voraus ist.",
  },

  "1.e4 d6 2.d4 b6": {
    strategy:
      "Bereitet ...Lb7 mit Druck gegen e4 vor, doch Weiß deckt den Bauern mühelos mit Sc3 und " +
      "Ld3, behält das Zentrum, und Schwarz bleibt in der Entwicklung des Königsflügels " +
      "zurück.",
  },

  "1.e4 d6 2.d4 a6": {
    strategy:
      "Bereitet ...b5 vor oder deckt b5, verliert aber ein Tempo, während Weiß mit Sc3, Sf3 " +
      "oder Ld3 das Zentrum ausbaut. Der Zug entwickelt nichts und hilft dem Zentrum nicht.",
  },

  "1.e4 d6 2.d4 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und deckt b4, kostet aber ein Tempo und gibt die Kontrolle " +
      "des a-Bauern über b5 endgültig auf. Für das Zentrum und die Entwicklung tut der Zug " +
      "nichts.",
  },

  "1.e4 d6 2.d4 h6": {
    strategy:
      "Verhindert Lg5, verliert aber ein Tempo; der Randbauer trägt nichts zum Zentrum oder " +
      "zur Entwicklung bei, sodass Weiß ungestört mit Sc3 und Sf3 fortfährt.",
  },

  "1.e4 d6 2.d4 h5": {
    strategy:
      "Schiebt den Randbauern vor, ohne zu entwickeln oder um das Zentrum zu kämpfen. Der Zug " +
      "schwächt g5 und g6 und kostet ein Tempo; Weiß entwickelt sich mit Sc3 und Lg5, und " +
      "...h6 kann den Läufer nicht mehr vertreiben.",
  },

  "1.e4 d6 2.d4 f6": {
    strategy:
      "Schwächt die Diagonale e8–h5 und das Feld e6 und nimmt dem Springer g8 das Feld f6. " +
      "Schwarz hat einen Zug ohne Figurenentwicklung verbraucht, während Weiß mit Sc3, Sf3 " +
      "und Lc4 fortfährt.",
  },

  "1.e4 d6 2.d4 Bd7": {
    strategy:
      "Entwickelt den Läufer passiv nach d7, wo er dem Springer b8 sein natürliches Feld " +
      "nimmt und nichts für das Zentrum tut. Weiß setzt ohne Gegenwehr mit Sc3 und Sf3 oder " +
      "Le3 fort.",
  },

  "1.e4 d6 2.d4 Be6": {
    strategy:
      "Stellt den Läufer auf ein Feld, das 3.d5 sofort angreift, womit Weiß ein Tempo und " +
      "Raum gewinnt. Nach ...Ld7 oder ...Lc8 hat Weiß einen Entwicklungsvorsprung und einen " +
      "beengten Gegner.",
  },

  "1.e4 d6 2.d4 Qd7": {
    strategy:
      "Bringt die Dame früh nach d7, wo sie den Läufer c8 einsperrt und dem Springer b8 sein " +
      "natürliches Feld nimmt. Schwarz hat einen Zug ohne Leichtfigurenentwicklung " +
      "verbraucht, und Weiß setzt ungehindert mit Sc3 und Sf3 fort.",
  },

  "1.e4 d6 2.d4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er ...c5 unterstützt oder nach c7 strebt, aber " +
      "langsam ist und zu Lxa6 einlädt, wonach ...bxa6 einen Doppelbauern auf der a-Linie " +
      "hinterlässt. Weiß entwickelt sich ungehindert und behält das Zentrum.",
  },

  "1.e4 d6 2.d4 Nh6": {
    strategy:
      "Stellt den Springer an den Rand mit Blick auf f5 und g4, doch Lxh6 gxh6 würde die " +
      "schwarzen Königsflügelbauern verdoppeln. Der Springer tut wenig für das Zentrum, " +
      "während Weiß sich weiter entwickelt.",
  },

  "1.e4 d6 2.d4 Kd7": {
    strategy:
      "Gibt die Rochade auf, verstellt die Dame, den Läufer c8 und das natürliche Feld des " +
      "Springers b8 und lässt den König ungeschützt im Zentrum, wo Weiß mit seinem " +
      "Entwicklungsvorsprung Linien öffnen kann.",
  },

  "1.e4 d6 2.d4 b5": {
    strategy:
      "Verliert den b-Bauern an Lxb5+, da nichts ihn deckt. Weiß hat einen sauberen " +
      "Mehrbauern, und Schwarz hat keine klare Kompensation.",
  },

  "1.e4 d6 2.d4 g5": {
    strategy:
      "Verliert den g-Bauern an Lxg5, weil der Bauer e7 der Dame die Diagonale versperrt und " +
      "sie nicht zurückschlagen kann. Zudem ist der Königsflügel dauerhaft gelockert.",
  },

  "1.e4 d6 2.d4 Bf5": {
    strategy:
      "Stellt den Läufer ein: exf5 gewinnt eine Figur ohne Gegenleistung, da nichts f5 deckt.",
  },

  "1.e4 d6 2.d4 Bg4": {
    strategy:
      "Stellt den Läufer ein: Die weiße Dame schlägt ihn über die offene Diagonale d1–h5 auf " +
      "g4, und nichts deckt das Feld.",
  },

  "1.e4 d6 2.d4 Bh3": {
    strategy:
      "Gibt den Läufer umsonst her: Der Bauer g2 schlägt ihn einfach mit gxh3, und Schwarz " +
      "hat keine Fortsetzung.",
  },

  "1.e4 d6 2.Nf3 Nf6": {
    strategy:
      "Greift sofort den e-Bauern an und entwickelt eine Figur, ohne einen weiteren Bauern " +
      "festzulegen, sodass ...g6, ...c5 und ...e5 alle möglich bleiben. Weiß deckt meist mit " +
      "3.Sc3, seltener mit 3.d3, und nach 3.Sc3 g6 4.d4 Lg7 entstehen die Pirc-Aufbauten, " +
      "etwa das Klassische System mit Le2 und Rochade. Schwarz überlässt Weiß Raum im Zentrum " +
      "und greift es später mit ...c5 oder ...e5 an.",
  },

  "1.e4 d6 2.Nf3 c5": {
    strategy:
      "Kontrolliert d4 und lädt zum Offenen Sizilianer ein: Nach 3.d4 cxd4 4.Sxd4 Sf6 5.Sc3 " +
      "wählt Schwarz zwischen den Aufbauten der Najdorf-, der Klassischen, der Drachen- und " +
      "der Scheveninger Variante. Schwarz erhält eine zentrale Bauernmehrheit und die " +
      "halboffene c-Linie, Weiß einen Entwicklungsvorsprung und mehr Raum. Weiß kann den " +
      "Hauptvarianten auch mit 3.Lb5+ oder 3.c3 ausweichen.",
  },

  "1.e4 d6 2.Nf3 e5": {
    strategy:
      "Erhebt Anspruch auf einen Teil des Zentrums und führt zu einer Philidor-Struktur. " +
      "Gegen 3.d4 gibt Schwarz entweder mit ...exd4 das Zentrum auf und folgt mit ...Sf6, " +
      "...Le7 und der Rochade, oder er hält e5 mit ...Sd7, ...Le7 und ...c6. Der Aufbau ist " +
      "kompakt und solide, aber passiv: Der Läufer f8 hat nur e7, und Weiß behält mehr Raum " +
      "und das leichtere Spiel.",
  },

  "1.e4 d6 2.Nf3 g6": {
    strategy:
      "Bereitet ...Lg7 vor und schiebt ...Sf6 auf, wodurch die Wahl zwischen einem " +
      "Pirc-Aufbau (3.d4 Sf6 4.Sc3 Lg7) und der Modernen Verteidigung offenbleibt. Schwarz " +
      "lässt das weiße Bauernzentrum zu und will es mit ...c5 oder ...e5 untergraben. Der " +
      "Preis ist etwas Raum, und da e4 nicht angegriffen ist, kann Weiß den Zeitpunkt für d4, " +
      "Sc3 oder Lc4 selbst wählen.",
  },

  "1.e4 d6 2.Nf3 Nd7": {
    strategy:
      "Unterstützt ein späteres ...e5 und hält ...Sgf6 offen, mit Blick auf einen " +
      "Philidor-artigen Aufbau nach 3.d4 e5 oder einen Pirc-artigen nach 3.d4 Sgf6 4.Sc3 g6. " +
      "Der Springer verstellt den Läufer c8 und die Dame, und Weiß bestimmt, welche Struktur " +
      "entsteht. Solide, aber beengt.",
  },

  "1.e4 d6 2.Nf3 Nc6": {
    name: "Nimzowitsch-Verteidigung: Williams-Variante",
    background:
      "Dieselbe Stellung entsteht nach 1.e4 Sc6 2.Sf3 d6, der Williams-Variante der " +
      "Nimzowitsch-Verteidigung, die nach Aron Nimzowitsch benannt ist. Der scharfe " +
      "Keene-Angriff 3.d4 Lg4 4.d5 Se5 5.Sxe5 opfert die Dame, die Weiß nach 5...Lxd1 " +
      "zurückgewinnen kann; er ist nach Raymond Keene benannt, der ihn 1964 in einer Partie " +
      "gegen E. Fielder spielte.",
    strategy:
      "Entwickelt den Springer mit Blick auf d4 und e5, verstellt aber den c-Bauern und kann " +
      "mit d4-d5 vertrieben werden. Nach 3.d4 fesselt Schwarz meist mit ...Lg4 oder " +
      "entwickelt sich mit ...Sf6, und Lb5 mit Lxc6+ kann Doppelbauern auf der c-Linie gegen " +
      "das Läuferpaar ergeben, in einer etwa ausgeglichenen Stellung. Solide, aber weniger " +
      "dynamisch als die wichtigsten Pirc-Aufbauten.",
  },

  "1.e4 d6 2.Nf3 Bg4": {
    strategy:
      "Fesselt den Springer an die Dame, bevor Weiß ein Zentrum errichtet hat, mit ...Sf6 und " +
      "...Sc6 gegen d4 oder ...Lxf3 als Fortsetzung. Weiß hebt die Fesselung mit Le2 auf oder " +
      "stellt dem Läufer mit h3 die Frage, und nach ...Lxf3 Dxf3 hat Weiß das Läuferpaar und " +
      "einen Entwicklungsvorsprung. Schwarz kommt schnell zu Figurenspiel, gibt aber oft " +
      "einen Läufer für einen Springer.",
  },

  "1.e4 d6 2.Nf3 c6": {
    strategy:
      "Kontrolliert d5 und b5 und öffnet der Dame die Diagonale d8-a5, mit ...Sf6 und danach " +
      "...Dc7 und ...e5 oder ...b5 als Fortsetzung. Der Bauer nimmt dem Damenspringer das " +
      "Feld c6 und macht d4 nicht streitig, sodass Weiß mit d4 und Sc3 oder c4 ein Zentrum " +
      "errichtet; die schwarze Struktur ist solide, aber passiv.",
  },

  "1.e4 d6 2.Nf3 e6": {
    strategy:
      "Öffnet den Läufer f8 und bereitet ...Sf6, ...Le7 und die Rochade vor, mit ...c5 als " +
      "späterem Hebel. Nach 3.d4 hat Weiß das größere Zentrum, und der Bauer e6 verstellt dem " +
      "Läufer c8 die Diagonale nach h3, sodass Schwarz solide, aber passiv steht.",
  },

  "1.e4 d6 2.Nf3 b6": {
    strategy:
      "Bereitet das Fianchetto ...Lb7 mit Druck auf e4 vor, gefolgt von ...Sf6 und ...e6. Der " +
      "Flankenaufbau lässt Weiß mit 3.d4 das Zentrum besetzen, und Sc3 oder Ld3 deckt e4 " +
      "mühelos, sodass der Läufer b7 auf einen gut gedeckten Bauern trifft.",
  },

  "1.e4 d6 2.Nf3 d5": {
    strategy:
      "Zieht den d-Bauern ein zweites Mal: Nach 3.exd5 Dxd5 4.Sc3 wird die Dame mit " +
      "Tempogewinn vertrieben, und Schwarz hat eine Skandinavische Verteidigung mit einem " +
      "vollen Tempo weniger.",
  },

  "1.e4 d6 2.Nf3 f5": {
    strategy:
      "Greift e4 an, lockert aber die Diagonale e8-h5 vor dem König. Nach 3.exf5 Lxf5 4.d4 " +
      "besetzt Weiß das Zentrum, Sh4 kann den Läufer jagen und das Läuferpaar gewinnen, und " +
      "das Feld e6 bleibt schwach.",
  },

  "1.e4 d6 2.Nf3 f6": {
    strategy:
      "Nimmt dem Königsspringer das Feld f6 und schwächt die Diagonale e8-h5 und das Feld e6, " +
      "ohne die Entwicklung zu fördern. Weiß setzt mit d4 und Sc3 fort, während dem Springer " +
      "g8 nur noch h6 bleibt.",
  },

  "1.e4 d6 2.Nf3 Bd7": {
    strategy:
      "Entwickelt den Läufer auf ein passives Feld, wo er dem Springer b8 das Feld d7 nimmt " +
      "und keinen Druck auf e4 ausübt. Weiß baut ungehindert mit d4 und Sc3 ein Zentrum auf.",
  },

  "1.e4 d6 2.Nf3 Be6": {
    strategy:
      "Bringt den Läufer vor den Springern auf ein Feld, auf dem 3.Sg5 ihn sofort angreift " +
      "und d4-d5 ihn mit Tempogewinn vertreiben kann. Außerdem verstellt er den e-Bauern.",
  },

  "1.e4 d6 2.Nf3 Qd7": {
    strategy:
      "Bringt die Dame auf ein Feld, auf dem sie den Läufer c8 und das Feld d7 für den " +
      "Springer verstellt, ohne etwas zu drohen. Weiß entwickelt sich frei mit d4 und Sc3, " +
      "und die Dame muss noch einmal ziehen, um die Figuren freizugeben.",
  },

  "1.e4 d6 2.Nf3 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo der Bauer e4 das Feld f5 kontrolliert und der " +
      "Springer nichts gegen das Zentrum ausrichtet. Sobald d4 die Diagonale des Läufers c1 " +
      "öffnet, kann Lxh6 gxh6 die schwarzen Königsflügelbauern zerrütten.",
  },

  "1.e4 d6 2.Nf3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er c5 und c7, aber kein Zentrumsfeld kontrolliert " +
      "und nichts gegen e4 unternimmt. Weiß besetzt mit d4 und Sc3 das Zentrum, während " +
      "Schwarz noch ...Sf6 und ...g6 oder ...e5 braucht.",
  },

  "1.e4 d6 2.Nf3 a6": {
    strategy:
      "Ein Randbauernzug, der nichts entwickelt und im Zentrum nichts bekämpft. Weiß spielt " +
      "nach Belieben d4 und Sc3, während Schwarz noch ...Sf6 und ...g6 oder ...e6 braucht.",
  },

  "1.e4 d6 2.Nf3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und nimmt Weiß das Feld b4, entwickelt aber nichts und " +
      "berührt das Zentrum nicht. Weiß spielt einfach d4 und Sc3, und b5 ist dauerhaft " +
      "geschwächt, da nur noch ...c6 es decken kann.",
  },

  "1.e4 d6 2.Nf3 h6": {
    strategy:
      "Verhindert Lg5 und Sg5, verwendet aber ein Tempo auf eine Vorsichtsmaßnahme, die noch " +
      "nicht nötig ist. Nichts wird entwickelt, und Weiß besetzt mit d4 und Sc3 das Zentrum.",
  },

  "1.e4 d6 2.Nf3 h5": {
    strategy:
      "Schwächt g5 und das Feld g6 ohne Zweck. Der Zug entwickelt nichts und berührt das " +
      "Zentrum nicht, und Weiß spielt einfach d4 und Sc3.",
  },

  "1.e4 d6 2.Nf3 b5": {
    strategy:
      "Verliert einen Bauern durch 3.Lxb5+, das mit Schach kommt, und nichts kann den Läufer " +
      "zurückschlagen. Schwarz hat dafür weder Entwicklung noch Angriff vorzuweisen.",
  },

  "1.e4 d6 2.Nf3 g5": {
    strategy:
      "Stellt einen Bauern ein: 3.Sxg5 gewinnt ihn, da nichts g5 deckt, und der Springer " +
      "nimmt dann f7 ins Visier. Der Vorstoß schwächt zudem den Königsflügel ohne Gegenwert.",
  },

  "1.e4 d6 2.Nf3 Kd7": {
    strategy:
      "Gibt das Rochaderecht ohne Gegenwert auf und verstellt den Läufer c8 und die Dame. " +
      "Weiß entwickelt sich mit d4 und Sc3 oder Lc4, während der schwarze König im Zentrum " +
      "steht.",
  },

  "1.e4 d6 2.Nf3 Bf5": {
    strategy:
      "Verliert eine Figur durch 3.exf5, da nichts auf f5 zurückschlagen kann und der e-Bauer " +
      "das Feld bereits angreift.",
  },

  "1.e4 d6 2.Nf3 Bh3": {
    strategy:
      "Stellt den Läufer ein: 3.gxh3 gewinnt eine Figur, und die Doppelbauern auf der h-Linie " +
      "und die offene g-Linie sind kein Ausgleich dafür.",
  },

  "1.e4 d6 2.Nc3 Nf6": {
    strategy:
      "Entwickelt mit Angriff auf e4 und hält jeden Pirc-Aufbau offen. Nach 3.d4 g6 erreicht " +
      "Schwarz mit ...Lg7 und ...O-O die Hauptvariante und greift das Zentrum dann mit ...c5 " +
      "oder ...e5 an. Weicht Weiß dem Zug d4 aus, etwa mit 3.f4 oder 3.Lc4, kann Schwarz " +
      "weiterhin ohne Zugeständnis zwischen ...g6 und ...e5 wählen.",
  },

  "1.e4 d6 2.Nc3 g6": {
    strategy:
      "Bereitet das Fianchetto ...Lg7 vor, bevor der Königsspringer festgelegt wird, und hält " +
      "so ...e5 und ...c5 in Reserve; nach 3.d4 Lg7 und einem späteren ...Sf6 geht die " +
      "Stellung meist in die Pirc-Ufimzew-Verteidigung über. Der Aufschub erlaubt Weiß, mit " +
      "f4 oder mit Le3 und Dd2 ein breites Zentrum aufzubauen, und Schwarz muss rechtzeitig " +
      "mit ...c5 oder ...e5 dagegenhalten.",
  },

  "1.e4 d6 2.Nc3 c5": {
    strategy:
      "Führt in eine Sizilianische Verteidigung mit bereits gespieltem ...d6. Nach 3.Sf3 " +
      "wählt Schwarz ...Sc6 oder ...Sf6 und beantwortet 4.d4 mit ...cxd4, womit die übliche " +
      "Struktur des Offenen Sizilianers mit Gegenspiel am Damenflügel entsteht. Weiß kann " +
      "stattdessen mit 3.g3 oder 3.f4 den Geschlossenen Sizilianer wählen, gegen den ...Sc6 " +
      "und ...g6 der übliche Aufbau sind.",
  },

  "1.e4 d6 2.Nc3 e5": {
    strategy:
      "Besetzt sofort einen Teil des Zentrums und steuert einen Philidor-Aufbau an: nach " +
      "3.Sf3 entwickelt sich Schwarz mit ...Sbd7 oder ...Sf6, dann ...Le7 und ...O-O hinter " +
      "einer soliden Bauernkette. Der Preis ist eine etwas beengte, passive Stellung; Weiß " +
      "kann auch 3.f4 oder 3.Lc4 spielen und in Stellungen der Wiener Partie überleiten.",
  },

  "1.e4 d6 2.Nc3 c6": {
    strategy:
      "Hält ...Sf6 in Reserve: nach 3.d4 Sf6 entsteht das Tschechische System der " +
      "Pirc-Ufimzew-Verteidigung, in dem Schwarz mit ...Da5 und ...e5 fortsetzt oder mit " +
      "...b5 am Damenflügel expandiert. Der Bauer nimmt dem Damenspringer das Feld c6 und tut " +
      "vorerst nichts gegen e4, sodass Weiß mehr Raum und die freie Wahl des Aufbaus erhält.",
  },

  "1.e4 d6 2.Nc3 Nd7": {
    strategy:
      "Zielt auf ...e5 und ...Sgf6 in einem Aufbau nach Art der Hanham-Variante. Der Springer " +
      "verstellt den Läufer c8 und lässt Schwarz wenig Raum, und Weiß kann mit 3.d4 oder 3.f4 " +
      "sofort das Zentrum besetzen. Solide genug, aber passiver als ...Sf6.",
  },

  "1.e4 d6 2.Nc3 Nc6": {
    strategy:
      "Entwickelt, zielt auf d4 und e5 und bereitet ...e5 oder ...Sf6 vor. Der Springer " +
      "verstellt den c-Bauern und lädt zu 3.d4 e5 4.d5 ein, was mit Tempo Raum gewinnt und " +
      "den Springer vertreibt, meist nach e7. Spielbar, doch Weiß kommt leicht zu seinem " +
      "Zentrum.",
  },

  "1.e4 d6 2.Nc3 e6": {
    strategy:
      "Bereitet ...Sf6 und ...Le7 in einem soliden, aber langsamen Aufbau vor. Der Bauer " +
      "sperrt den Läufer c8 ein, und nach 3.d4 d5 erreicht Schwarz eine Stellung der " +
      "Französischen Verteidigung mit einem vollen Tempo weniger, weil der d-Bauer zweimal " +
      "gezogen hat.",
  },

  "1.e4 d6 2.Nc3 b6": {
    strategy:
      "Plant ...Lb7 gegen e4 und einen kompakten hypermodernen Aufbau mit ...Sf6 und ...e6. " +
      "Schwarz verbraucht Zeit am Damenflügel, während Weiß mit d4, Ld3 und Sf3 ein großes " +
      "Zentrum errichtet, sodass der Aufbau solide, aber etwas langsam ist.",
  },

  "1.e4 d6 2.Nc3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, in der Hoffnung auf ...c6 und ...Sc7. Dieser Weg " +
      "kostet Zeit, der Springer tut so lange nichts für das Zentrum, und Weiß spielt einfach " +
      "d4 und Sf3.",
  },

  "1.e4 d6 2.Nc3 Bd7": {
    strategy:
      "Passive Entwicklung, die dem Damenspringer das Feld d7 nimmt und keinen Druck auf e4 " +
      "ausübt. Weiß besetzt mit d4 und Sf3 das Zentrum, und der Läufer hat auf d7 wenig zu " +
      "tun.",
  },

  "1.e4 d6 2.Nc3 Be6": {
    strategy:
      "Bringt den Läufer vor den Springern heraus und blockiert den e-Bauern. Nach 3.d4 wird " +
      "der Läufer zur Zielscheibe: d5 oder f4 nebst f5 vertreibt ihn mit Tempogewinn.",
  },

  "1.e4 d6 2.Nc3 Qd7": {
    strategy:
      "Verstellt den Läufer c8 und nimmt dem Damenspringer das Feld d7, sodass sich Schwarz " +
      "nur umständlich entwickelt. Weiß entwickelt sich mit d4 und Sf3 ungehindert und " +
      "errichtet ein großes Zentrum.",
  },

  "1.e4 d6 2.Nc3 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo der Bauer e4 das Feld f5 kontrolliert. Nach 3.d4 " +
      "droht Weiß Lxh6, was nach ...gxh6 die schwarzen Königsflügelbauern zerrüttet.",
  },

  "1.e4 d6 2.Nc3 a6": {
    strategy:
      "Ein langsamer Wartezug, der ...b5 vorbereitet, aber nichts entwickelt. Weiß besetzt " +
      "mit d4 und Sf3 das Zentrum oder baut mit f4 eine breite Bauernfront auf.",
  },

  "1.e4 d6 2.Nc3 a5": {
    strategy:
      "Verhindert b4, schwächt aber b5, wo ein weißer Springer lästig wird, und hilft weder " +
      "der Entwicklung noch dem Zentrum. Weiß setzt mit d4 und Sf3 fort.",
  },

  "1.e4 d6 2.Nc3 f6": {
    strategy:
      "Nimmt dem Königsspringer das Feld f6, schwächt e6 und die Diagonale e8-h5 und " +
      "entwickelt nichts. Weiß spielt d4 und Sf3 oder Lc4 gegen einen ungelenken Aufbau.",
  },

  "1.e4 d6 2.Nc3 f5": {
    strategy:
      "Ein Schlag gegen e4 nach holländischem Muster, der zu früh kommt: nach 3.exf5 Lxf5 " +
      "bleiben die Diagonale e8-h5 und e6 schwach, und 4.Df3 greift sofort f5 und b7 an, was " +
      "Schwarz bereits Zeit kostet.",
  },

  "1.e4 d6 2.Nc3 h6": {
    strategy:
      "Prophylaxe gegen Lg5, die ein Tempo kostet, bevor Schwarz eine Figur entwickelt hat. " +
      "Weiß besetzt mit d4 und Sf3 oder f4 das Zentrum, und Schwarz muss in der Entwicklung " +
      "aufholen.",
  },

  "1.e4 d6 2.Nc3 h5": {
    strategy:
      "Schwächt g5 und den Königsflügel, ohne etwas zu entwickeln oder auf das Zentrum " +
      "einzuwirken. Weiß setzt mit d4, Sf3 und Lg5 fort und hat einen bequemen Vorsprung.",
  },

  "1.e4 d6 2.Nc3 Bf5": {
    strategy:
      "Stellt den Läufer ein: 3.exf5 gewinnt eine ganze Figur, weil nichts auf f5 " +
      "zurückschlagen kann.",
  },

  "1.e4 d6 2.Nc3 Bg4": {
    strategy:
      "Stellt den Läufer gegen 3.Dxg4 ein, da die Diagonale d1-g4 offen ist. Schwarz verliert " +
      "eine Figur ohne Gegenwert.",
  },

  "1.e4 d6 2.Nc3 Bh3": {
    strategy:
      "Verliert den Läufer gegen 3.gxh3 oder 3.Sxh3, ohne jeden Gegenwert. Der Bauer g2 und " +
      "der Springer auf g1 decken beide h3.",
  },

  "1.e4 d6 2.Nc3 Kd7": {
    strategy:
      "Gibt die Rochade auf und führt den König ohne Zweck ins offene Zentrum. Weiß spielt " +
      "d4, Sf3 und Lb5+ oder Lc4 und greift den ungeschützten König mühelos an.",
  },

  "1.e4 d6 2.Nc3 b5": {
    strategy:
      "Verliert einen Bauern: 3.Sxb5 oder 3.Lxb5+ schlägt ihn, da nichts b5 deckt, und die " +
      "halboffene b-Linie ist kaum Kompensation.",
  },

  "1.e4 d6 2.Nc3 g5": {
    strategy:
      "Schwächt f5, h5 und den ganzen Königsflügel dauerhaft: nach 3.d4 greift der Läufer c1 " +
      "den Bauern g5 an, und ...h6 wird mit h4 beantwortet, das ihn erneut angreift. Schwarz " +
      "entwickelt in der Zwischenzeit nichts.",
  },

  "1.e4 d6 2.Nc3 d5": {
    strategy:
      "Zieht den d-Bauern ein zweites Mal und verliert einen Bauern: nach 3.exd5 deckt Sc3 " +
      "den Bauern d5, sodass 3...Dxd5?? 4.Sxd5 die Dame kostet, und nach 3...Sf6 4.Lc4 kann " +
      "Weiß den Mehrbauern behalten.",
  },
};
