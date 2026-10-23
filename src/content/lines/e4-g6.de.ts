import type { OpeningTexts } from "../book.ts";

// German prose for e4-g6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.e4 g6 2.d4": {
    strategy:
      "Errichtet sofort das volle Bauernzentrum, genau die Struktur, die die Moderne " +
      "Verteidigung später mit ...c5, ...e5 oder ...d5 untergraben will. Nach 2...Lg7 wählt " +
      "Weiß zwischen 3.Sc3 d6 4.f4, dem Awerbach-Aufbau mit 3.c4 oder dem ruhigeren Sf3 und " +
      "Le2, und ...d6 mit ...Sf6 führt oft in die Pirc-Ufimzew-Verteidigung über. Der Preis " +
      "ist ein Zentrum, das verteidigt werden muss, sobald die schwarzen Figuren entwickelt " +
      "sind.",
  },

  "1.e4 g6 2.Nc3": {
    strategy:
      "Entwickelt den Damenspringer und deckt e4, während sowohl d4 als auch ein Aufbau wie " +
      "in der Geschlossenen Sizilianischen Verteidigung mit g3, Lg2 und d3 möglich bleiben. " +
      "Schwarz kann mit 2...c5 in diese Zugumstellung einlenken oder 2...Lg7 spielen, worauf " +
      "3.d4 d6 in die Hauptvariante mit 2.d4 überleitet. Der Springer verstellt den c-Bauern, " +
      "und die Zugfolge lässt Schwarz zwischen einer sizilianischen und einer modernen " +
      "Struktur wählen.",
  },

  "1.e4 g6 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer zum Zentrum hin, kontrolliert d4 und e5 und hält Sc3 und " +
      "d4 in Reserve. Schwarz kann mit 2...c5 in die Sizilianische Verteidigung überleiten " +
      "oder 2...Lg7 3.d4 d6 spielen, was die Linien mit 2.d4 und 3.Sf3 erreicht. Der Springer " +
      "deckt e4 nicht, sodass Schwarz den Bauern auch sofort mit ...d5 oder später mit ...Sf6 " +
      "angreifen kann.",
  },

  "1.e4 g6 2.f4": {
    strategy:
      "Zielt auf einen Aufbau nach Art des Österreichischen Angriffs mit Sf3 und späterem e5, " +
      "und 2...Lg7 3.d4 führt zum Dreibauernangriff. Der Zug ist spielbar, lockert aber e4 " +
      "und die Diagonale e1-h4, bevor das Zentrum geklärt ist, während 2.d4 die stärkere " +
      "Antwort ist.",
  },

  "1.e4 g6 2.Bc4": {
    name: "Moderne Verteidigung: Monkey's Bum",
    background:
      "Von IM Nigel Povah in den 1970er-Jahren entdeckt und propagiert, während einer Welle " +
      "der Beliebtheit der Modernen Verteidigung. Der Name geht auf seinen Freund Ken Coates " +
      "zurück, der sagte, als Povah ihm die ersten Züge zeigte: „If that works then I’m a " +
      "monkey’s bum!“ Povah veröffentlichte die Variante im August 1977 im British Chess " +
      "Magazine.",
    strategy:
      "Richtet den Läufer auf f7 und bereitet Df3 mit späterem d4 vor, ein Bauerngambit nach " +
      "2...Lg7 3.Df3 e6 4.d4 Lxd4 5.Se2. Spielt Schwarz 2...Lg7 und Weiß darauf 3.d4, " +
      "entsteht der Läuferangriff. Das Gambit gibt einen Bauern für aktive Figuren, doch in " +
      "der Praxis hat sich die Kompensation als dünn erwiesen.",
  },

  "1.e4 g6 2.c4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Sc3 und d4 vor, was zum Awerbach-System " +
      "führt, oder nach 2...c5 3.Sf3 Lg7 4.d4 cxd4 5.Sxd4 zum Maróczy-Aufbau. Der Zug ist " +
      "solide, aber ungewöhnlich, und der c-Bauer ist festgelegt, bevor das Zentrum geklärt " +
      "ist.",
  },

  "1.e4 g6 2.g3": {
    strategy:
      "Bereitet Lg2 vor, um das schwarze Fianchetto zu spiegeln und e4 über die Diagonale zu " +
      "stützen. Der Plan ist solide, kostet aber Zeit am Königsflügel, solange d4 noch nicht " +
      "gespielt ist, sodass Schwarz mit ...d5 gegen e4 vorgehen oder mit ...c5 Raum nehmen " +
      "kann.",
  },

  "1.e4 g6 2.c3": {
    strategy:
      "Bereitet wie in der Alapin-Variante der Sizilianischen Verteidigung d4 mit " +
      "Bauernunterstützung vor, und der Bauer auf c3 stumpft den Läufer auf g7 im Voraus ab. " +
      "Der Zug nimmt dem Damenspringer das Feld c3, und Schwarz kann e4 sofort mit ...d5 " +
      "angreifen, bevor d4 gezogen ist.",
  },

  "1.e4 g6 2.Be2": {
    strategy:
      "Entwickelt den Läufer, macht f1 für die Rochade frei und bereitet Sf3 und d4 vor; nach " +
      "2...Lg7 3.d4 d6 4.Sf3 Sf6 5.Sc3 entsteht durch Zugumstellung das Klassische System der " +
      "Pirc-Ufimzew-Verteidigung. Der Zug ist solide, aber passiv, da der Läufer gegen das " +
      "Fianchetto nichts ausrichtet.",
  },

  "1.e4 g6 2.h4": {
    background:
      "Bobby Fischer schlug 3.h4 in seinen Anmerkungen zu seiner Partie gegen Pal Benko als " +
      "unorthodoxen Versuch gegen 1...g6 2.d4 Lg7 vor, obwohl er in der Partie selbst 3.Sc3 " +
      "spielte. Die Idee wurde auch schon einen Zug früher versucht.",
    strategy:
      "Bereitet h5 und hxg6 vor, um die h-Linie gegen das Fianchetto zu öffnen. Schwarz kann " +
      "das mit 2...h5 verhindern oder mit 2...Lg7 und ...d6 übergehen. Der Zug ist ein " +
      "riskanter Versuch, der nicht forciert widerlegt ist, aber er schwächt g4 und g3 und " +
      "tut nichts für die Entwicklung.",
  },

  "1.e4 g6 2.d3": {
    strategy:
      "Stützt e4 und bereitet einen Aufbau wie im Königsindischen Angriff mit g3, Lg2 und Sf3 " +
      "vor, der solide, aber bescheiden ist. Der Zug verstellt die Diagonale des Läufers f1 " +
      "und verzichtet vorerst auf d4, sodass Schwarz mit ...d5 das Zentrum besetzen oder mit " +
      "...Lg7 und ...c5 aufbauen kann.",
  },

  "1.e4 g6 2.Ne2": {
    strategy:
      "Unterstützt ein späteres d4, verstellt aber den Läufer f1, verzögert die Rochade und " +
      "stellt den Springer auf ein Feld, auf dem er weniger aktiv ist als auf f3 oder c3.",
  },

  "1.e4 g6 2.Qe2": {
    strategy:
      "Deckt e4, verstellt aber den Läufer f1 und bringt die Dame früh ins Spiel, ohne ein " +
      "Angriffsziel; Schwarz entwickelt sich mit ...Lg7 und ...d6 und greift das Zentrum in " +
      "aller Ruhe an.",
  },

  "1.e4 g6 2.Qf3": {
    strategy:
      "Nimmt dem Königsspringer das Feld f3 und bringt die Dame vor den Leichtfiguren heraus, " +
      "mit Blick auf f7 nach einem späteren Lc4. Schwarz entwickelt sich mit ...Lg7 und " +
      "...d6, beantwortet Lc4 mit ...e6, und die Dame findet kein Ziel.",
  },

  "1.e4 g6 2.Qg4": {
    strategy:
      "Die Dame geht nach g4, wo ...h5 sie mit Tempo angreift und sie zurückweichen muss. " +
      "Bedroht ist nichts: g6 ist zweimal gedeckt, durch die Bauern h7 und f7.",
  },

  "1.e4 g6 2.Bb5": {
    strategy:
      "Greift den Bauern d7 an, der viermal gedeckt ist, und ...c6 oder ...a6 vertreibt den " +
      "Läufer mit Tempogewinn.",
  },

  "1.e4 g6 2.Bd3": {
    strategy:
      "Stellt den Läufer vor den d-Bauern, sodass d4 erst nach einem weiteren Läuferzug " +
      "möglich ist; das Zentrum wird vernachlässigt, während Schwarz sich in Ruhe mit ...Lg7 " +
      "und ...d6 oder ...c5 entwickelt.",
  },

  "1.e4 g6 2.Nh3": {
    strategy:
      "Stellt einen Springer an den Rand, mit Blick auf f4 und g5, doch nach ...d6 kann der " +
      "Läufer c8 ihn mit ...Lxh3 schlagen, und nach gxh3 sind die weißen Bauern am " +
      "Königsflügel zerrüttet.",
  },

  "1.e4 g6 2.Na3": {
    strategy:
      "Ein Randspringer, der weit vom Zentrum entfernt steht und den a-Bauern blockiert; " +
      "Schwarz entwickelt sich mit ...Lg7 und ...d6, während der Springer weitere Züge " +
      "braucht, um ins Zentrum zu gelangen.",
  },

  "1.e4 g6 2.a3": {
    strategy:
      "Verwendet einen Zug auf den Randbauern, um b4 vorzubereiten, und lässt Zentrum und " +
      "Entwicklung unberührt, während Schwarz ...Lg7 und ...d6 oder ...d5 spielt.",
  },

  "1.e4 g6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel, tut aber nichts für Zentrum und Entwicklung und schwächt " +
      "b4; Schwarz spielt ungestört ...Lg7 und ...d6.",
  },

  "1.e4 g6 2.b3": {
    strategy:
      "Öffnet die lange Diagonale für Schwarz: Nach 2...Lg7 greift der Läufer den Turm a1 an, " +
      "und 3.Lb2 verliert nach 3...Lxb2 eine Figur. Weiß muss mit d4, c3 oder Sc3 verstellen, " +
      "und ein Läufer auf b2 beißt dann auf den eigenen Bauern oder Springer.",
  },

  "1.e4 g6 2.b4": {
    strategy:
      "Öffnet die lange Diagonale für den schwarzen Läufer: Nach 2...Lg7 ist der Turm a1 " +
      "angegriffen, und 3.Lb2 verliert nach 3...Lxb2 eine Figur, sodass Weiß mit c3, d4 oder " +
      "Sc3 verstellen muss, während der Bauer b4 dem Angriff ...a5 ausgesetzt ist.",
  },

  "1.e4 g6 2.f3": {
    strategy:
      "Nimmt dem Springer sein bestes Feld und schwächt die Diagonale e1-h4 und die " +
      "Königsstellung; der Zug ergibt nur mit folgendem d4, Sc3 und Le3 Sinn, und Schwarz " +
      "besetzt inzwischen mit ...Lg7 die lange Diagonale.",
  },

  "1.e4 g6 2.g4": {
    strategy:
      "Schiebt den g-Bauern in ...h5 hinein, wonach er entweder getauscht wird oder überdehnt " +
      "ist, und lockert f4, h4 und die lange Diagonale, während der König noch in der Mitte " +
      "steht.",
  },

  "1.e4 g6 2.h3": {
    strategy:
      "Ein langsamer prophylaktischer Zug, der ...Lg4 verhindert, aber nichts für Zentrum und " +
      "Entwicklung tut; Schwarz entwickelt sich frei mit ...Lg7 und ...d6 oder schlägt sofort " +
      "mit ...c5 oder ...d5 zu.",
  },

  "1.e4 g6 2.e5": {
    strategy:
      "Ein verfrühter Vorstoß: Der Bauer ist ungedeckt und 2...Lg7 greift ihn sofort an, " +
      "sodass Weiß d4, f4 oder Sf3 zu seiner Deckung braucht, während ...d6 ihn untergräbt " +
      "und zu einem Tausch auf d6 oder einem geschwächten Zentrum führt.",
  },

  "1.e4 g6 2.Qh5": {
    strategy:
      "Stellt die Dame auf h5, ein Feld, das der Bauer g6 angreift, sodass 2...gxh5 sie ohne " +
      "Gegenwert gewinnt.",
  },

  "1.e4 g6 2.Ke2": {
    strategy:
      "Verliert endgültig das Rochaderecht, verstellt den Läufer f1 und die Diagonale der " +
      "Dame und lässt den König ohne Gewinn in der Mitte; Schwarz entwickelt sich frei mit " +
      "...Lg7 und ...d5.",
  },

  "1.e4 g6 2.Ba6": {
    strategy:
      "Stellt den Läufer ein: 2...bxa6 oder 2...Sxa6 schlägt ihn, und nichts auf dem Brett " +
      "kann auf a6 zurückschlagen.",
  },

  "1.e4 g6": {
    name: "Moderne Verteidigung",
    background:
      "Auch Robatsch-Verteidigung genannt, nach Karl Robatsch. Sie ist eng mit der " +
      "Pirc-Verteidigung verwandt, und die 10. Auflage von Modern Chess Openings (1965) " +
      "fasste beide als „Pirc–Robatsch Defense“ zusammen.",
  },
};
