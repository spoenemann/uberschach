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

  "1.e4 g6 2.d4 Bg7": {
    strategy:
      "Entwickelt den Läufer auf die lange Diagonale, wo er Druck auf d4 und dahinter auf b2 " +
      "ausübt. Schwarz folgt mit ...d6 und der Rochade und greift das Zentrum später mit " +
      "...c5 oder ...e5 an, wobei die Springer flexibel bleiben. Weiß wählt zwischen 3.Sc3, " +
      "3.c4 mit Kurs auf das Awerbach-System, 3.Sf3 und schärferen Versuchen wie 3.f4 oder " +
      "3.Lc4. Der Preis sind weniger Raum und ein langsamer Anlauf für das schwarze " +
      "Gegenspiel.",
  },

  "1.e4 g6 2.d4 d6": {
    strategy:
      "Kontrolliert e5 und c5 und hält zwei Aufbauten offen: die Moderne Verteidigung mit " +
      "...Lg7 und ...c6 oder die Pirc-Ufimzew-Verteidigung mit ...Sf6. Nach 3.Sc3 oder 3.Sf3 " +
      "und ...Lg7 entstehen die üblichen Stellungen durch Zugumstellung, etwa die " +
      "Pirc-Ufimzew-Verteidigung nach 3.Sf3 Lg7 4.Le2 Sf6 5.Sc3. Der Bauer auf d6 stützt " +
      "später ...e5 oder ...c5, doch bis dahin hat Weiß im Zentrum freie Hand.",
  },

  "1.e4 g6 2.d4 Nf6": {
    name: "Moderne Verteidigung: Norwegische Verteidigung",
    background:
      "Auch Nordsee-Variante genannt. Magnus Carlsen nennt die Fortsetzung 3.e5 Sh5 die " +
      "„Norwegische Ratte“, und er spielte sie mit 4.Le2 d6 gegen Michael Adams bei der " +
      "Schacholympiade 2010 in Chanty-Mansijsk.",
    strategy:
      "Greift e4 sofort an und führt in die Pirc-Ufimzew-Verteidigung, wenn Weiß mit 3.Sc3 d6 " +
      "deckt. Weiß kann stattdessen mit 3.e5 Sh5 Raum gewinnen, worauf 4.g4 den Springer nach " +
      "g7 treibt und 4.Le2 ihn erneut angreift, während Schwarz e5 mit ...d6 zu untergraben " +
      "hofft. Ein riskanter Weg, der aber nicht forciert widerlegt ist.",
  },

  "1.e4 g6 2.d4 c6": {
    strategy:
      "Stützt ...d5 und erlaubt weiterhin ...d6. Nach 3.Sc3 d5 entsteht durch Zugumstellung " +
      "das Gurgenidze-System der Caro-Kann-Verteidigung, und 3.Sc3 Lg7 4.Sf3 d6 führt zu " +
      "einem Aufbau der Modernen Verteidigung mit ...c6. Solide, aber weniger flexibel als " +
      "2...Lg7, weil der c-Bauer festgelegt ist, bevor der Läufer entwickelt ist.",
  },

  "1.e4 g6 2.d4 c5": {
    strategy:
      "Greift d4 sofort an, und 3.Sf3 cxd4 4.Sxd4 führt durch Zugumstellung in eine " +
      "Sizilianische Verteidigung mit frühem ...g6. Weiß kann stattdessen mit 3.d5 Raum " +
      "gewinnen oder mit 3.dxc5 die Stellung öffnen, worauf ...Da5+ und ...Dxc5 den Bauern " +
      "zurückgewinnen, die Dame aber früh ins Spiel bringen, und Le3 gewinnt Zeit gegen sie.",
  },

  "1.e4 g6 2.d4 d5": {
    strategy:
      "Greift e4 sofort an, doch ohne ...c6 oder ...e6 dahinter gewinnt 3.exd5 Dxd5 4.Sc3 " +
      "Zeit gegen die Dame. Nach 3.e5 hat Weiß eine Vorstoßstruktur, in der ein Läufer auf g7 " +
      "auf e5 beißt, und Schwarz braucht ...c5 und ...Lf5 oder ...Lg4 für Gegenspiel. Solide " +
      "genug, aber der Zug kostet Zeit oder Raum.",
  },

  "1.e4 g6 2.d4 b6": {
    strategy:
      "Bereitet neben ...Lg7 auch ...Lb7 gegen e4 vor, ein flexibler Aufbau mit beiden " +
      "Läufern auf den langen Diagonalen. Weiß deckt e4 mit 3.Sc3 oder 3.Ld3 und behält das " +
      "größere Zentrum, sodass Schwarz das Gegenspiel mit ...c5 oder ...e6 und ...Se7 erst " +
      "beweisen muss. Solide genug, aber der Zug gibt Weiß Zeit für den Aufbau.",
  },

  "1.e4 g6 2.d4 e6": {
    strategy:
      "Bereitet ...d5 nach Art der Französischen Verteidigung vor, doch mit bereits " +
      "gespieltem ...g6 sind die schwarzen Felder f6 und h6 schwach, und der Läufer c8 ist " +
      "hinter e6 eingesperrt. Weiß entwickelt sich mit Sf3 und Ld3 oder spielt 3.c4 und " +
      "behält das breitere Zentrum.",
  },

  "1.e4 g6 2.d4 Nc6": {
    strategy:
      "Setzt d4 unter Druck, doch 3.d5 vertreibt den Springer sofort, und Schwarz verliert " +
      "Zeit. Das naheliegende 3...Se5? verliert nach 4.f4 sogar eine Figur, weil Weiß c4, d3, " +
      "f3, g4 und c6 sämtlich kontrolliert.",
  },

  "1.e4 g6 2.d4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, mit Kurs auf c7 oder b4, und tut nichts gegen d4 und " +
      "e4. 3.Lxa6 bxa6 verdoppelt die schwarzen a-Bauern um den Preis des Läuferpaars, und " +
      "sonst baut Weiß mit Sc3 und Sf3 ungehindert auf.",
  },

  "1.e4 g6 2.d4 Bh6": {
    strategy:
      "Lädt zu 3.Lxh6 Sxh6 ein, was den schwarzfeldrigen Läufer abtauscht, für den der Aufbau " +
      "mit ...g6 überhaupt gewählt wird, und einen Springer am Rand zurücklässt. Weiß behält " +
      "das Bauernzentrum, und Schwarz hat nichts dagegen.",
  },

  "1.e4 g6 2.d4 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo beide Felder nach vorn kontrolliert sind: f5 durch " +
      "den Bauern e4 und g4 durch die Dame. Das Zentrum bleibt unangefochten, und Weiß " +
      "entwickelt sich mit Sc3 und Sf3.",
  },

  "1.e4 g6 2.d4 a6": {
    strategy:
      "Bereitet ...b5 und ...Lb7 vor, bekämpft aber nichts. Weiß entwickelt sich mit Sc3 und " +
      "Sf3 oder gewinnt mit 3.c4 weiteren Raum, während dem Aufbau mit ...g6 noch ...Lg7 und " +
      "...d6 fehlen.",
  },

  "1.e4 g6 2.d4 a5": {
    strategy:
      "Verwendet ein Tempo auf den Randbauern, während d4 und e4 unangefochten stehen, und " +
      "der Bauer kann b5 nicht mehr von a6 aus decken. Weiß entwickelt sich einfach mit Sc3 " +
      "und Sf3 oder Ld3.",
  },

  "1.e4 g6 2.d4 f6": {
    strategy:
      "Nimmt Weiß das Feld e5, verstellt aber das Feld f6 und die lange Diagonale des " +
      "künftigen Läufers g7 und tut nichts gegen d4 und e4. Weiß baut mit c4 oder Sc3 und Sf3 " +
      "auf.",
  },

  "1.e4 g6 2.d4 h6": {
    strategy:
      "Verschwendet ein Tempo mit einem Randbauern, der weder d4 noch e4 bekämpft. Der Bauer " +
      "ist sicher, denn nach 3.Lxh6 Lxh6 hat Schwarz eine Figur gewonnen, doch Weiß baut mit " +
      "Sc3 und Sf3 oder c4 auf.",
  },

  "1.e4 g6 2.d4 h5": {
    strategy:
      "Schwächt g5 und g6 dauerhaft und entwickelt nichts. Weiß nutzt das Tempo für Sc3 und " +
      "Sf3 oder c4, und eine Figur auf g5 kann nicht mehr mit ...h6 vertrieben werden.",
  },

  "1.e4 g6 2.d4 b5": {
    strategy:
      "Stellt einen Bauern ohne Gegenwert ein: 3.Lxb5 Lb7 beantwortet Weiß mit 4.Sc3, das e4 " +
      "deckt, und behält den Mehrbauern samt Entwicklungsvorsprung.",
  },

  "1.e4 g6 2.d4 e5": {
    strategy:
      "Gibt einen Bauern her: Nach 3.dxe5 kann nichts zurückschlagen, und ...Lg7 mit " +
      "folgendem ...d6 beantwortet Weiß mit Sf3, sodass Weiß den Mehrbauern samt " +
      "Entwicklungsvorsprung behält.",
  },

  "1.e4 g6 2.d4 f5": {
    name: "Moderne Verteidigung: Fianchetto-Gambit",
    strategy:
      "Verliert einen Bauern: 3.exf5 gxf5? läuft in 4.Dh5#, daher setzt Schwarz mit 3...Lg7 " +
      "oder 3...Sf6 fort, und nach 4.fxg6 hxg6 steht Schwarz mit einem Bauern weniger da.",
  },

  "1.e4 g6 2.d4 g5": {
    strategy:
      "Stellt den g-Bauern ein: 3.Lxg5 gewinnt ihn, weil der Bauer e7 die Diagonale der Dame " +
      "verstellt und nichts anderes g5 deckt, und der Königsflügel ist ohne Gegenwert " +
      "geschwächt.",
  },

  "1.e4 g6 2.Nc3 Bg7": {
    strategy:
      "Vollendet sofort das Fianchetto: Der Läufer auf der langen Diagonale wirkt auf d4 und " +
      "auf den Springer c3, während ...d6, ...c6 und ...c5 möglich bleiben. Nach 3.d4 d6 ist " +
      "die Hauptvariante der Modernen Verteidigung erreicht, und ein späteres ...Sf6 führt in " +
      "die Pirc-Ufimzew-Verteidigung über. Der Preis: Weiß errichtet zuerst das volle " +
      "Zentrum, und Schwarz muss es später mit ...c5 oder ...e5 untergraben.",
  },

  "1.e4 g6 2.Nc3 d6": {
    strategy:
      "Deckt e5 und c5, öffnet den Läufer c8 und bereitet ...Lg7 und ...Sf6 vor. Nach 3.d4 " +
      "Sf6 entsteht die Pirc-Ufimzew-Verteidigung, nach 3.d4 Lg7 die Moderne Verteidigung. In " +
      "beiden Fällen behält Weiß das breite Zentrum, und Schwarz greift es später mit ...c5 " +
      "oder ...e5 an.",
  },

  "1.e4 g6 2.Nc3 c5": {
    strategy:
      "Führt in eine Sizilianische Verteidigung mit bereits begonnenem Fianchetto über. Gegen " +
      "3.g3 folgen ...Lg7, ...Sc6 und ...d6 wie im Geschlossenen Sizilianer, und nach 3.Sf3 " +
      "Lg7 4.d4 cxd4 5.Sxd4 Sc6 verhindert der Springer auf c3 den Maróczy-Aufbau mit c4. " +
      "Weiß, nicht Schwarz, wählt zwischen den geschlossenen und den offenen Varianten.",
  },

  "1.e4 g6 2.Nc3 c6": {
    strategy:
      "Bereitet ...d5 und eine Bauernstruktur der Caro-Kann-Verteidigung mit zusätzlichem " +
      "Fianchetto vor. Nach 3.d4 d5 4.e5 gewinnt Weiß Raum, und der Bauer e5 verstellt einem " +
      "Läufer auf g7 die lange Diagonale. Korrekt, aber weniger flexibel als ...Lg7, da die " +
      "Bauern festgelegt werden, bevor die Figuren entwickelt sind.",
  },

  "1.e4 g6 2.Nc3 Nf6": {
    strategy:
      "Greift e4 an und steuert nach 3.d4 d6 die Pirc-Ufimzew-Verteidigung an. Der Zug " +
      "erlaubt jedoch 3.e5 mit Tempogewinn: ...Sd5 verliert nach Sxd5 eine Figur, ...Sg4 nach " +
      "Dxg4, und der Springer muss nach h5 oder zurück nach g8. Spielbar, aber Weiß gewinnt " +
      "kostenlos Raum.",
  },

  "1.e4 g6 2.Nc3 Nc6": {
    name: "Nimzowitsch-Verteidigung: Pirc-Verbindung",
    background:
      "Die Stellung entsteht auch aus der Nimzowitsch-Verteidigung, 1.e4 Sc6 2.Sc3 g6, " +
      "benannt nach Aron Nimzowitsch, der auf 2.d4 meist mit 2...d5 antwortete. Kasparow und " +
      "Keene schrieben, die Eröffnung sei nie ganz als verlässlich anerkannt worden, sei aber " +
      "korrekt.",
    strategy:
      "Entwickelt eine Figur, überwacht d4 und e5 und bereitet ...Lg7 und ...d6 vor. Der " +
      "Springer verstellt den c-Bauern und kann mit d5 angegriffen werden: Nach 3.d4 d6 4.d5 " +
      "Se5 5.f4 muss er erneut ziehen, und Weiß hat Raum und Zeit gewonnen. Spielbar, aber " +
      "Weiß kommt mühelos zu seinem Zentrum.",
  },

  "1.e4 g6 2.Nc3 a6": {
    strategy:
      "Nimmt den weißen Figuren das Feld b5 und bereitet ...b5 und ...Lb7 als " +
      "Damenflügelspiel neben dem Fianchetto vor. Der Zug ist jedoch langsam: Keine Figur " +
      "wird entwickelt, und nach 3.d4 oder 3.f4 errichtet Weiß zuerst ein breites Zentrum. " +
      "Spielbar, aber ...Lg7 und ...d6 kommen zuerst.",
  },

  "1.e4 g6 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 und ...Lg7 vor, sodass beide Läufer auf den langen Diagonalen drücken, " +
      "gefolgt von ...e6 oder ...c5. Schwarz entwickelt keine Figur, während Weiß mit d4 und " +
      "f4 oder Sf3 das Zentrum besetzt, daher ist das doppelte Fianchetto korrekt, aber " +
      "passiv.",
  },

  "1.e4 g6 2.Nc3 e6": {
    strategy:
      "Bereitet ...d5 nach Art der Französischen Verteidigung vor, gefolgt von ...Se7 oder " +
      "...Sf6 und ...c5. Nach 3.d4 d5 4.e5 gewinnt Weiß Raum, und der Läufer c8 ist hinter e6 " +
      "eingesperrt. Korrekt, aber mit Bauern auf e6 und g6 deckt kein Bauer mehr f6, und der " +
      "Bauer e5 verstellt einem Läufer auf g7 die Diagonale.",
  },

  "1.e4 g6 2.Nc3 e5": {
    strategy:
      "Besetzt sofort das Zentrum, doch nach 3.d4 exd4 4.Dxd4 greift die Dame über die lange " +
      "Diagonale den Turm h8 an, weil der g-Bauer g7 verlassen hat. Schwarz muss die " +
      "Diagonale sofort verstellen, da 4...Lg7? nach 5.Dxg7 den Läufer kostet, und die " +
      "dunklen Felder d6 und f6 bleiben schwach.",
  },

  "1.e4 g6 2.Nc3 Na6": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er den a-Bauern blockiert und im Zentrum wenig " +
      "ausrichtet. Schwarz verbraucht ein Tempo vor ...Lg7, und 3.d4 gibt Weiß das volle " +
      "Zentrum.",
  },

  "1.e4 g6 2.Nc3 a5": {
    strategy:
      "Nimmt den weißen Figuren das Feld b4, verbraucht aber ein Tempo für einen Randbauern, " +
      "und ein Springer auf b5 lässt sich nicht mehr mit ...a6 vertreiben. Für Zentrum und " +
      "Entwicklung geschieht nichts, und 3.d4 gibt Weiß das volle Zentrum.",
  },

  "1.e4 g6 2.Nc3 Bh6": {
    strategy:
      "Stellt den Läufer auf die Diagonale c1–h6 statt auf die lange Diagonale, sodass sich " +
      "nach 3.d4 die schwarzfeldrigen Läufer gegenüberstehen. Jeder Tausch beseitigt die " +
      "Figur, für die ...g6 gespielt wurde, und schwächt die dunklen Felder um den schwarzen " +
      "König, während Weiß das Zentrum behält.",
  },

  "1.e4 g6 2.Nc3 Nh6": {
    strategy:
      "Entwickelt den Springer an den Rand mit Blick auf f5, statt wie ...Sf6 den Bauern e4 " +
      "anzugreifen. Nach 3.d4 hat Weiß das volle Zentrum, und der Springer braucht weitere " +
      "Züge, um in den Kampf darum einzugreifen.",
  },

  "1.e4 g6 2.Nc3 f6": {
    strategy:
      "Nimmt dem Königsspringer das Feld f6 und öffnet die Diagonale a2–g8: Nach 3.Lc4 zielt " +
      "der Läufer auf g8 und verhindert die kurze Rochade, bis ...d5 oder ...e6 die Diagonale " +
      "verstellt. Der Bauer deckt e5, doch der König ist geschwächt, und 3.d4 gibt Weiß das " +
      "volle Zentrum.",
  },

  "1.e4 g6 2.Nc3 h6": {
    strategy:
      "Deckt g5 gegen Lg5 und Sg5, verbraucht aber ein Tempo für einen Randbauern vor ...Lg7 " +
      "oder ...d6. Weiß nutzt die Zeit für d4 und ein breites Zentrum.",
  },

  "1.e4 g6 2.Nc3 h5": {
    strategy:
      "Zielt auf ...h4, lässt aber g6 nur noch vom Bauern f7 gedeckt und schwächt g5. Der Zug " +
      "kostet ein Tempo, entwickelt nichts, und 3.d4 gibt Weiß das Zentrum.",
  },

  "1.e4 g6 2.Nc3 d5": {
    strategy:
      "Bietet den d-Bauern an. Nach 3.exd5 kann die Dame nicht zurückschlagen, da 3...Dxd5 " +
      "sie nach 4.Sxd5 kostet, und nach 3...Sf6 4.Lc4 ist der Bauer gedeckt, weil ...Sxd5 an " +
      "Sxd5 Dxd5 Lxd5 scheitert.",
  },

  "1.e4 g6 2.Nc3 f5": {
    strategy:
      "Verliert nach 3.exf5 einen Bauern, und das naheliegende Zurückschlagen 3...gxf5?? " +
      "läuft in 4.Dh5#, da g6 und f7 beide leer sind. Nach 3...Lg7 4.fxg6 hat Schwarz " +
      "schlicht einen Bauern weniger.",
  },

  "1.e4 g6 2.Nc3 b5": {
    strategy:
      "Lässt den b-Bauern nach 3.Sxb5 oder 3.Lxb5 hängen, da ihn nichts deckt. ...a6 oder " +
      "...c6 vertreibt die Figur nur, und Schwarz hat einen Bauern ohne Entwicklung " +
      "hergegeben.",
  },

  "1.e4 g6 2.Nc3 g5": {
    strategy:
      "Zieht den g-Bauern ein zweites Mal, und nach 3.d4 hängt er gegen Lxg5. Ihn mit ...h6 " +
      "oder ...f6 zu halten, schwächt den Königsflügel dauerhaft, und nach ...h6 kann Weiß " +
      "den Bauern mit h4 erneut angreifen.",
  },

  "1.e4 g6 2.Nf3 Bg7": {
    strategy:
      "Vollendet das Fianchetto und richtet den Läufer über die lange Diagonale auf das " +
      "Zentrum und auf b2, während Schwarz abwartet, welchen Aufbau Weiß wählt. Meist folgen " +
      "...d6, dann ...Sf6 oder ...c6, und später greift Schwarz das Bauernzentrum mit ...c5 " +
      "oder ...e5 an. Nach 3.d4 d6 4.Sc3 Sf6 ist durch Zugumstellung die " +
      "Pirc-Ufimzew-Verteidigung entstanden. Der Preis ist, dass Weiß ein breites Zentrum " +
      "errichten darf, das Schwarz untergraben muss, statt es zu verhindern.",
  },

  "1.e4 g6 2.Nf3 d6": {
    strategy:
      "Bereitet ...Lg7 vor und lässt die Wahl zwischen einer Pirc-Ufimzew-Verteidigung mit " +
      "...Sf6 und einem Aufbau der Modernen Verteidigung ohne diesen Zug. Nach 3.d4 Sf6 4.Sc3 " +
      "Lg7 ist eine Pirc-Ufimzew-Verteidigung entstanden, und Schwarz untergräbt das weiße " +
      "Zentrum später mit ...c5 oder ...e5. Anders als bei 2...Lg7 ist der d-Bauer früh " +
      "festgelegt, und 3.Lb5+ muss durch Dazwischenziehen beantwortet werden, etwa mit ...c6 " +
      "oder ...Ld7.",
  },

  "1.e4 g6 2.Nf3 c5": {
    strategy:
      "Führt durch Zugumstellung in eine Sizilianische Verteidigung mit frühem ...g6 und " +
      "zielt auf den Beschleunigten Drachen. Weil ...Sc6 noch aussteht, umgeht Schwarz die " +
      "Rossolimo-Variante, und nach 3.d4 cxd4 4.Sxd4 entwickelt er sich mit ...Lg7 und " +
      "...Sc6. Der Nachteil ist, dass Weiß mit 4.Dxd4 zurückschlagen kann, was den Turm h8 " +
      "angreift, oder 4.Sxd4 Sc6 mit 5.c4 beantwortet, dem Maróczy-Aufbau.",
  },

  "1.e4 g6 2.Nf3 Nf6": {
    strategy:
      "Greift e4 an und steuert nach 3.Sc3 d6 4.d4 Lg7 eine Pirc-Ufimzew-Verteidigung an. " +
      "Nicht empfehlenswert, weil 3.e5 den Springer sofort vertreibt, etwa nach h5 an den " +
      "Rand oder nach d5, wo ihn c4 erneut angreift, und Weiß Raum und Zeit gewinnt.",
  },

  "1.e4 g6 2.Nf3 c6": {
    strategy:
      "Bereitet ...d5 mit einer Struktur der Caro-Kann-Verteidigung vor, und 3.d4 d5 4.Sc3 " +
      "Lg7 führt durch Zugumstellung zum Gurgenidze-System der Caro-Kann-Verteidigung. " +
      "Solide, aber passiv, denn 3.d4 d5 4.e5 gewinnt Raum und sperrt die lange Diagonale, " +
      "die der Fianchetto-Läufer nutzen soll.",
  },

  "1.e4 g6 2.Nf3 d5": {
    strategy:
      "Greift das Zentrum sofort an, wie in der Skandinavischen Verteidigung, doch 3.exd5 " +
      "Dxd5 4.Sc3 gewinnt ein Tempo gegen die Dame und verschafft Weiß einen " +
      "Entwicklungsvorsprung, während 3.e5 Raum gewinnt. Spielbar, weil die Dame sichere " +
      "Felder wie a5, d6 und d8 hat und die Stellung solide bleibt, doch der weiße Vorsprung " +
      "ist nicht leicht auszugleichen.",
  },

  "1.e4 g6 2.Nf3 e6": {
    strategy:
      "Stützt ...d5 und bereitet einen Aufbau wie in der Französischen Verteidigung mit " +
      "...Lg7 und ...Se7 vor. Solide, aber passiv: Nach 3.d4 d5 4.e5 sperrt der Bauer e6 den " +
      "Läufer c8 ein, und Schwarz braucht ...c5, um Gegenspiel zu bekommen.",
  },

  "1.e4 g6 2.Nf3 Nc6": {
    strategy:
      "Entwickelt eine Figur in Richtung d4 und e5, verstellt aber den c-Bauern und lädt zu " +
      "3.d4 ein. Nach 3...Lg7 4.d5 muss der Springer erneut ziehen, auf ein schlechteres Feld " +
      "oder in einen Tausch auf e5 oder d4, sodass Weiß Raum und Zeit gewinnt.",
  },

  "1.e4 g6 2.Nf3 b6": {
    strategy:
      "Plant ...Lb7 und ein doppeltes Fianchetto, das über die lange Diagonale Druck auf e4 " +
      "ausübt. Weiß errichtet einfach mit 3.d4 Lb7 4.Ld3 oder 4.Sc3 ein breites Zentrum, und " +
      "Schwarz muss zeigen, dass dieses Zentrum ein Angriffsziel ist. Solide, aber " +
      "ungewöhnlich und etwas langsam.",
  },

  "1.e4 g6 2.Nf3 a6": {
    strategy:
      "Bereitet ...b5 vor und verhindert Lb5, kostet aber ein Tempo am Rand, während Weiß mit " +
      "d4 und Sc3 das ganze Zentrum besetzt und der Läufer f8 noch zu Hause steht.",
  },

  "1.e4 g6 2.Nf3 a5": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel, verbraucht aber ein Tempo für einen Randbauern, der " +
      "nichts für das Zentrum tut, und schwächt b5 und b6. Weiß besetzt in aller Ruhe mit d4 " +
      "und Sc3 das Zentrum.",
  },

  "1.e4 g6 2.Nf3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er sofort geschlagen werden kann: 3.Lxa6 bxa6 " +
      "hinterlässt Schwarz isolierte Doppelbauern auf der a-Linie, da der Läufer c8 nicht " +
      "zurückschlagen kann. Das Läuferpaar und die halboffene b-Linie sind nur ein teilweiser " +
      "Ausgleich.",
  },

  "1.e4 g6 2.Nf3 Bh6": {
    strategy:
      "Stellt den Läufer schlecht: 3.d4 öffnet die Diagonale c1–h6, und der Tausch ...Lxc1 " +
      "4.Dxc1 schwächt die dunklen Felder um den König, während ein späteres ...Lg7 ein Tempo " +
      "kostet.",
  },

  "1.e4 g6 2.Nf3 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo er f5 überwacht, aber nicht das Zentrum, und " +
      "verzögert ...Lg7. Nach 3.d4 beherrscht Weiß das ganze Zentrum, und die geöffnete " +
      "Diagonale c1–h6 setzt den Springer dem Schlagzug Lxh6 aus.",
  },

  "1.e4 g6 2.Nf3 f6": {
    strategy:
      "Verstellt die lange Diagonale des künftigen Läufers auf g7 und nimmt dem Springer das " +
      "Feld f6. Außerdem schwächt der Zug das Feld e6, die Diagonale a2–g8 und den König, " +
      "während Weiß mit 3.d4 ungehindert das Zentrum besetzt.",
  },

  "1.e4 g6 2.Nf3 f5": {
    strategy:
      "Greift e4 an, lockert aber die Königsstellung und das Feld e6. Nach 3.exf5 gxf5 4.Sh4 " +
      "greift der Springer f5 an und macht den Weg für Dh5+ frei, sodass Bauer und König kaum " +
      "gleichzeitig zu decken sind.",
  },

  "1.e4 g6 2.Nf3 h6": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern ohne klaren Zweck, denn noch droht nichts " +
      "auf g5. Weiß besetzt mit 3.d4 das Zentrum, während der Königsläufer noch zu Hause " +
      "steht.",
  },

  "1.e4 g6 2.Nf3 h5": {
    strategy:
      "Verbraucht ein Tempo für den Turmbauern und nimmt dem Bauern g6 die Stütze durch den " +
      "h-Bauern. Weiß besetzt mit 3.d4 das Zentrum und entwickelt sich mit Sc3 ungehindert.",
  },

  "1.e4 g6 2.Nf3 e5": {
    strategy:
      "Stellt einen Bauern nach e5, den nichts gegen den Springer f3 deckt. Schwarz gewinnt " +
      "ihn nach 3.Sxe5 De7 4.d4 d6 5.Sf3 Dxe4+ 6.Le2 zurück, doch die Dame steht auf e4 " +
      "exponiert, und Weiß kann mit Sc3 weitere Zeit gegen sie gewinnen.",
  },

  "1.e4 g6 2.Nf3 b5": {
    strategy:
      "Lässt den b-Bauern nach 3.Lxb5 hängen, da ihn nichts deckt. Schwarz greift mit ...Lb7 " +
      "den ungedeckten Bauern e4 an, doch Sc3 oder De2 hält ihn, und Weiß hat einen glatten " +
      "Mehrbauern.",
  },

  "1.e4 g6 2.Nf3 g5": {
    strategy:
      "Lässt nach 3.Sxg5 einen Bauern hängen, da weder die Dame noch der Läufer g5 deckt. " +
      "Außerdem hinterlässt der Zug ohne jede Gegenleistung Löcher am Königsflügel.",
  },

  "1.e4 g6 2.c4 Bg7": {
    strategy:
      "Stellt den Läufer auf die lange Diagonale, wo er das Zentrum und b2 ins Visier nimmt, " +
      "und hält ...d6, ...c5, ...Sf6 und ...Sc6 offen. Nach 3.d4 d6 4.Sc3 Sf6 ist durch " +
      "Zugumstellung die Königsindische Verteidigung entstanden, und 3.Sf3 c5 4.d4 cxd4 " +
      "5.Sxd4 Sc6 ergibt einen Maróczy-Aufbau. Dafür hat Weiß Zeit, das Zentrum mit c4, d4 " +
      "und e4 zu errichten, und Schwarz muss es später mit ...c5 oder ...e5 untergraben.",
  },

  "1.e4 g6 2.c4 c5": {
    strategy:
      "Kämpft um d4, bevor Weiß das volle Zentrum errichten kann. Nach 3.Sf3 Lg7 4.d4 cxd4 " +
      "5.Sxd4 entsteht ein Maróczy-Aufbau: Weiß hat mehr Raum, und Schwarz setzt mit ...Sc6 " +
      "und ...Sf6 auf aktives Figurenspiel. Der Preis ist eine beengte Stellung, wenn Weiß " +
      "die Klammer hält und Schwarz nie zu einem befreienden ...d5 oder ...b5 kommt.",
  },

  "1.e4 g6 2.c4 d6": {
    strategy:
      "Kontrolliert e5 und c5, öffnet die Diagonale des Läufers c8 und hebt ...Lg7 und ...Sf6 " +
      "für die nächsten Züge auf. Nach 3.Sc3 Lg7 4.d4 Sf6 5.Sf3 O-O 6.Le2 e5 ist durch " +
      "Zugumstellung die klassische Variante der Königsindischen Verteidigung entstanden. Der " +
      "Preis ist der übliche im Königsinder: Weiß besetzt das Zentrum mit c4, d4 und e4 und " +
      "wählt den Aufbau, mit Le2, f3 oder f4.",
  },

  "1.e4 g6 2.c4 Nf6": {
    strategy:
      "Entwickelt mit Druck auf e4 und erreicht nach 3.Sc3 d6 4.d4 Lg7 eine Königsindische " +
      "Verteidigung. Es erlaubt jedoch 3.e5: 3...Sg4 verliert den Springer an 4.Dxg4, 3...Sd5 " +
      "an 4.cxd5, und nach 3...Sh5 steht der Springer am Rand, während Weiß einen großen " +
      "Raumvorteil hat.",
  },

  "1.e4 g6 2.c4 e5": {
    name: "Englische Eröffnung: Adorjan-Verteidigung",
    strategy:
      "Beansprucht Raum im Zentrum und kontrolliert d4, verstellt dafür aber einem Läufer auf " +
      "g7 die lange Diagonale. Ist der e-Bauer getauscht, öffnet sich die Diagonale für Weiß: " +
      "Nach 3.d4 exd4 4.Dxd4 greift die Dame den Turm h8 an, 4...Lg7? verliert den Läufer an " +
      "5.Dxg7, und Schwarz muss mit 4...Sf6 oder 4...f6 verstellen.",
  },

  "1.e4 g6 2.c4 e6": {
    strategy:
      "Bereitet ...d5 und einen flexiblen Aufbau mit ...Lg7 und ...Se7 oder ...Sf6 vor. Der " +
      "Zug ist solide, aber langsam: Nach 3.d4 Lg7 4.Sc3 hält Weiß c4, d4 und e4, und der " +
      "Läufer c8 bleibt hinter dem Bauern e6 eingesperrt, bis ...b6 ihm die lange Diagonale " +
      "öffnet.",
  },

  "1.e4 g6 2.c4 b6": {
    strategy:
      "Bereitet ...Lb7 gegen e4 und mit ...Lg7 ein Doppelfianchetto vor. Der Zug ist solide, " +
      "überlässt Weiß aber das Zentrum: Nach 3.d4 Lb7 4.Sc3 Lg7 5.f3 stehen die Bauern c4, d4 " +
      "und e4 fest, und Schwarz muss sie später mit ...c5 angreifen.",
  },

  "1.e4 g6 2.c4 c6": {
    strategy:
      "Bereitet ...d5 mit einer Bauernkette wie in der Caro-Kann-Verteidigung vor, während " +
      "...Lg7 und ...Sf6 noch folgen. Der Zug ist solide, aber passiv: Nach 3.d4 d5 4.exd5 " +
      "cxd5 5.cxd5 Dxd5 6.Sc3 gewinnt Weiß ein Tempo gegen die Dame und behält das freiere " +
      "Spiel.",
  },

  "1.e4 g6 2.c4 Nc6": {
    strategy:
      "Entwickelt den Springer gegen d4 und e5 und hält ...Lg7 und ...d6 in Reserve. Der Zug " +
      "ist solide, aber nicht zu empfehlen: Der Springer verstellt den c-Bauern, sodass weder " +
      "...c6 noch ...c5 möglich ist, und nach 3.d4 Lg7 4.d5 muss er erneut ziehen, während " +
      "Weiß mit Tempo Raum gewinnt.",
  },

  "1.e4 g6 2.c4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, von wo er c5 und b4 ins Auge fasst, doch 3.d4 nimmt " +
      "ihm c5, und gegen das Zentrum unternimmt der Springer nichts. Weiß setzt mit Sc3 fort " +
      "und hat freie Hand.",
  },

  "1.e4 g6 2.c4 Nh6": {
    strategy:
      "Zielt auf f5, doch der Bauer e4 kontrolliert dieses Feld, sodass der Springer ohne " +
      "sinnvolle Fortsetzung am Rand bleibt. Weiß baut ungestört mit d4 und Sc3 das Zentrum " +
      "auf.",
  },

  "1.e4 g6 2.c4 Bh6": {
    strategy:
      "Bietet den Tausch der schwarzfeldrigen Läufer an, also der Figur, für die ...g6 " +
      "gespielt wurde: Nach 3.d4 d6 4.Lxh6 Sxh6 steht der Springer am Rand, und die dunklen " +
      "Felder um den schwarzen König sind geschwächt.",
  },

  "1.e4 g6 2.c4 a6": {
    strategy:
      "Bereitet ...b5 vor, doch mit dem Bauern auf c4 scheitert dieser Hebel: 3.d4 b5 4.cxb5 " +
      "axb5 5.Lxb5 gewinnt einen Bauern. So bleibt der Zug ein verbrauchtes Tempo, während " +
      "Weiß d4 und Sc3 spielt.",
  },

  "1.e4 g6 2.c4 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel, schwächt aber b5 und tut nichts für die Entwicklung. Weiß " +
      "baut mit d4 und Sc3 das Zentrum auf, während die schwarzen Figuren zu Hause bleiben.",
  },

  "1.e4 g6 2.c4 f6": {
    strategy:
      "Deckt e5, nimmt aber dem Springer g8 das Feld f6 und schwächt e6 sowie den schwarzen " +
      "König. Der Zug entwickelt nichts, sodass Weiß ungehindert mit d4 und Sc3 das Zentrum " +
      "aufbaut.",
  },

  "1.e4 g6 2.c4 h6": {
    strategy:
      "Ein Wartezug, der Lg5 verhindert, aber nichts für das Zentrum oder die Entwicklung " +
      "tut. Weiß spielt d4 und Sc3, und das Tempo für den h-Bauern ist schlicht verloren.",
  },

  "1.e4 g6 2.c4 h5": {
    strategy:
      "Beginnt einen Flügelangriff ohne entwickelte Figuren und schwächt g5 und den Bauern " +
      "g6. Weiß entwickelt einfach mit d4 und Sc3, und Schwarz hat für den gelockerten " +
      "Königsflügel nichts vorzuweisen.",
  },

  "1.e4 g6 2.c4 b5": {
    strategy:
      "Bietet einen Bauern ohne Gegenwert an: 3.cxb5 gewinnt ihn, und ...Lg7 holt ihn nicht " +
      "zurück, weil ...Lxb2 mit Lxb2 beantwortet wird. Außerdem behält Weiß den Bauern e4 und " +
      "ein intaktes Zentrum.",
  },

  "1.e4 g6 2.c4 d5": {
    strategy:
      "Bietet einen Bauern an, der sich nicht zurückgewinnen lässt: Nach 3.exd5 deckt der " +
      "Bauer c4 das Feld d5, sodass 3...Sf6 4.Sc3 Sxd5? an 5.cxd5 eine Figur verliert. " +
      "Schwarz bleibt einen Bauern zurück und hat wenig dafür.",
  },

  "1.e4 g6 2.c4 f5": {
    strategy:
      "Bietet den f-Bauern an, und das natürliche Zurückschlagen läuft in eine Falle: 3.exf5 " +
      "gxf5?? erlaubt 4.Dh5#. Nach 3...Lg7 4.fxg6 hxg6 hat Weiß einfach einen Bauern mehr.",
  },

  "1.e4 g6 2.c4 g5": {
    strategy:
      "Zieht den g-Bauern ein zweites Mal und macht ihn zur Zielscheibe: 3.d4 öffnet dem " +
      "Läufer c1 den Weg nach g5, und deckt Schwarz den Bauern mit ...h6, greift h4 ihn " +
      "erneut an. Der Königsflügel bleibt dauerhaft gelockert, während Weiß sich frei " +
      "entwickelt.",
  },
};
