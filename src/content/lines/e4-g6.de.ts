import type { OpeningTexts } from "../book.ts";

// German prose for e4-g6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.e4 g6 2.d4": {
    strategy:
      "Errichtet sofort das volle Bauernzentrum, genau das, was die Moderne Verteidigung " +
      "zulässt, um es dann mit Bauernvorstößen zu untergraben. Weiß gewinnt Raum und freie Hand " +
      "bei der Entwicklung. Der Preis ist ein Zentrum, das verteidigt werden muss, sobald " +
      "Schwarz seine Figuren entwickelt hat.",
  },

  "1.e4 g6 2.Nc3": {
    strategy:
      "Entwickelt den Damenspringer und deckt e4, hält aber d4 in Reserve, sodass Weiß noch " +
      "zwischen einem Zentrumsaufbau und einer ruhigeren Anlage wählen kann. Der Springer nimmt " +
      "dem c-Bauern das Feld c3, und die Zugfolge lässt Schwarz zwischen einer sizilianischen " +
      "und einer modernen Struktur wählen.",
  },

  "1.e4 g6 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer zum Zentrum hin und kontrolliert d4 und e5, während die " +
      "Zentrumsbauernzüge und der andere Springer in Reserve bleiben. Der Springer deckt e4 " +
      "nicht, sodass Schwarz den Bauern sofort mit ...d5 angreifen oder am Damenflügel Raum " +
      "nehmen kann.",
  },

  "1.e4 g6 2.f4": {
    strategy:
      "Zielt auf einen aggressiven Aufbau mit einem späteren e5. Der Zug ist spielbar, lockert " +
      "aber e4 und die Diagonale e1-h4, bevor das Zentrum geklärt ist, und 2.d4 ist der stärkere " +
      "Zug.",
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
      "Richtet den Läufer auf f7, um Df3 vorzubereiten und rasch anzugreifen, mit d4 als " +
      "Bauerngambit danach. Der Zug gibt einen Bauern für aktive Figuren, doch in der Praxis hat " +
      "sich die Kompensation als dünn erwiesen.",
  },

  "1.e4 g6 2.c4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Sc3 und d4 vor. Der Zug ist solide, aber " +
      "ungewöhnlich, und der c-Bauer ist festgelegt, bevor das Zentrum geklärt ist.",
  },

  "1.e4 g6 2.g3": {
    strategy:
      "Bereitet Lg2 vor, um das schwarze Fianchetto zu spiegeln und e4 über die Diagonale zu " +
      "stützen. Der Plan ist solide, kostet aber Zeit am Königsflügel, solange d4 noch nicht " +
      "gespielt ist, sodass Schwarz sofort gegen e4 vorgehen oder Raum nehmen kann.",
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
      "Entwickelt den Läufer, macht f1 für die Rochade frei und bereitet Sf3 und d4 vor. Der Zug " +
      "ist solide, aber passiv, da der Läufer gegen das Fianchetto nichts ausrichtet.",
  },

  "1.e4 g6 2.h4": {
    background:
      "Bobby Fischer schlug 3.h4 in seinen Anmerkungen zu seiner Partie gegen Pal Benko als " +
      "unorthodoxen Versuch gegen 1...g6 2.d4 Lg7 vor, obwohl er in der Partie selbst 3.Sc3 " +
      "spielte. Die Idee wurde auch schon einen Zug früher versucht.",
    strategy:
      "Bereitet h5 vor, um die h-Linie gegen das schwarze Fianchetto aufzubrechen, denn ...gxh5 " +
      "würde die Deckung des schwarzen Königs stark schwächen. Der Zug ist ein riskanter " +
      "Versuch, der nicht forciert widerlegt ist, aber er schwächt g4 und g3 und tut nichts für " +
      "die Entwicklung.",
  },

  "1.e4 g6 2.d3": {
    strategy:
      "Stützt e4 und bereitet ein ruhiges Fianchetto am Königsflügel mit passender Entwicklung " +
      "vor, was solide, aber bescheiden ist. Der Zug verstellt die Diagonale des Läufers f1 und " +
      "verzichtet vorerst auf d4, sodass Schwarz das Zentrum besetzen oder frei aufbauen kann.",
  },

  "1.e4 g6 2.Ne2": {
    strategy:
      "Unterstützt ein späteres d4, verstellt aber den Läufer f1, verzögert die Rochade und " +
      "stellt den Springer auf ein Feld, auf dem er weniger aktiv ist als auf f3 oder c3.",
  },

  "1.e4 g6 2.Qe2": {
    strategy:
      "Deckt e4, verstellt aber den Läufer f1 und bringt die Dame früh ins Spiel, ohne ein " +
      "Angriffsziel; Schwarz entwickelt sich in Ruhe und greift das Zentrum ohne Eile an.",
  },

  "1.e4 g6 2.Qf3": {
    strategy:
      "Nimmt dem Königsspringer das Feld f3 und bringt die Dame vor den Leichtfiguren heraus, " +
      "mit Blick auf f7 nach einem späteren Lc4. Schwarz entwickelt sich ruhig, beantwortet Lc4 " +
      "mit ...e6, und die Dame findet kein Ziel.",
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
      "Stellt den Läufer vor den d-Bauern, sodass d4 erst nach einem weiteren Läuferzug möglich " +
      "ist; das Zentrum wird vernachlässigt, während Schwarz sich in Ruhe entwickelt und " +
      "entscheidet, wie er das Zentrum angreift.",
  },

  "1.e4 g6 2.Nh3": {
    strategy:
      "Stellt einen Springer an den Rand, mit Blick auf f4 und g5, doch nach ...d6 kann der " +
      "Läufer c8 ihn mit ...Lxh3 schlagen, und nach gxh3 sind die weißen Bauern am " +
      "Königsflügel zerrüttet.",
  },

  "1.e4 g6 2.Na3": {
    strategy:
      "Ein Randspringer, der weit vom Zentrum entfernt steht und den a-Bauern blockiert; Schwarz " +
      "entwickelt sich ungehindert, während der Springer weitere Züge braucht, um ins Zentrum zu " +
      "gelangen.",
  },

  "1.e4 g6 2.a3": {
    strategy:
      "Verwendet einen Zug auf den Randbauern, um b4 vorzubereiten, und lässt Zentrum und " +
      "Entwicklung unberührt, während Schwarz sich entwickelt oder das Zentrum besetzt.",
  },

  "1.e4 g6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel, tut aber nichts für Zentrum und Entwicklung und schwächt b4; " +
      "Schwarz entwickelt sich ungestört.",
  },

  "1.e4 g6 2.b3": {
    strategy:
      "Öffnet die lange Diagonale für Schwarz: Nach 2...Lg7 greift der Läufer den Turm a1 an, " +
      "und 3.Lb2 verliert nach 3...Lxb2 eine Figur. Weiß muss einen Zug zum Verstellen " +
      "aufwenden; der Bauernzug kostet also Zeit und bringt nichts.",
  },

  "1.e4 g6 2.b4": {
    strategy:
      "Öffnet die lange Diagonale für den schwarzen Läufer: Nach 2...Lg7 ist der Turm a1 " +
      "angegriffen und 3.Lb2 verliert nach 3...Lxb2 eine Figur, sodass Weiß einen Zug zum " +
      "Verstellen aufwenden muss, und der Bauer b4 ist dem Angriff ...a5 ausgesetzt.",
  },

  "1.e4 g6 2.f3": {
    strategy:
      "Nimmt dem Springer sein bestes Feld und schwächt die Diagonale e1-h4 und die " +
      "Königsstellung; der Zug ergibt nur mit einem vollen Zentrum und rascher Entwicklung Sinn, " +
      "und Schwarz besetzt inzwischen mit ...Lg7 die lange Diagonale.",
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
      "Entwicklung tut; Schwarz entwickelt sich frei oder schlägt sofort im Zentrum zu.",
  },

  "1.e4 g6 2.e5": {
    strategy:
      "Ein verfrühter Vorstoß: Der Bauer hat keine Deckung, 2...Lg7 greift ihn sofort an und " +
      "...d6 untergräbt ihn, sodass Weiß Züge für die Verteidigung eines Bauern aufwendet, der " +
      "kaum Raum gewinnt.",
  },

  "1.e4 g6 2.Qh5": {
    strategy:
      "Stellt die Dame auf h5, ein Feld, das der Bauer g6 angreift, sodass 2...gxh5 sie ohne " +
      "Gegenwert gewinnt.",
  },

  "1.e4 g6 2.Ke2": {
    strategy:
      "Verliert endgültig das Rochaderecht, verstellt den Läufer f1 und die Diagonale der Dame " +
      "und lässt den König ohne Gewinn in der Mitte; Schwarz entwickelt sich einfach und greift " +
      "das Zentrum an.",
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
      "Der Kern des Aufbaus: Schwarz lässt Weiß ein breites Zentrum aufbauen und richtet den " +
      "Läufer von weitem auf der langen Diagonale darauf, um es später mit einem Bauernvorstoß " +
      "zu untergraben. Die Springer bleiben flexibel, die Rochade folgt bald. Der Preis ist " +
      "Raum, denn Weiß hält das Zentrum, und das schwarze Gegenspiel beginnt langsam.",
  },

  "1.e4 g6 2.d4 d6": {
    strategy:
      "Kontrolliert e5 und c5 und hält mehrere Aufbauten offen, mit dem Läufer auf der langen " +
      "Diagonale oder dem Springer auf f6. Der Bauer stützt außerdem ein späteres ...e5 oder " +
      "...c5, doch bis dahin hat Weiß im Zentrum freie Hand.",
  },

  "1.e4 g6 2.d4 Nf6": {
    name: "Moderne Verteidigung: Norwegische Verteidigung",
    background:
      "Auch Nordsee-Variante genannt. Magnus Carlsen nennt die Fortsetzung 3.e5 Sh5 die " +
      "„Norwegische Ratte“, und er spielte sie mit 4.Le2 d6 gegen Michael Adams bei der " +
      "Schacholympiade 2010 in Chanty-Mansijsk.",
    strategy:
      "Greift e4 sofort an und steuert die Pirc-Ufimzew-Verteidigung an, wenn Weiß es einfach " +
      "deckt. Der Vorstoß nach e5 gewinnt Raum, treibt den Springer aber an den Rand, von wo " +
      "Schwarz e5 mit ...d6 zu untergraben hofft. Ein riskanter, ungewöhnlicher Weg.",
  },

  "1.e4 g6 2.d4 c6": {
    strategy:
      "Stützt ...d5 und erlaubt weiterhin ...d6, sodass Schwarz das Zentrum sofort angreifen " +
      "oder einen ruhigeren Fianchetto-Aufbau wählen kann. Solide, aber weniger flexibel, als " +
      "zuerst den Läufer zu entwickeln, weil der c-Bauer festgelegt ist, bevor der Läufer " +
      "entwickelt ist.",
  },

  "1.e4 g6 2.d4 c5": {
    strategy:
      "Greift d4 sofort an und kann in eine Sizilianische Verteidigung mit frühem ...g6 führen. " +
      "Weiß kann Raum gewinnen oder die Stellung öffnen, und gewinnt Schwarz einen geschlagenen " +
      "Bauern mit der Dame zurück, kommt sie früh ins Spiel und kostet Zeit.",
  },

  "1.e4 g6 2.d4 d5": {
    strategy:
      "Greift e4 sofort an, doch ohne einen Bauern dahinter gewinnt 3.exd5 Dxd5 4.Sc3 Zeit gegen " +
      "die Dame. Nach 3.e5 hat Weiß eine Vorstoßstruktur, in der ein Läufer auf g7 auf e5 beißt, " +
      "und Schwarz muss rasch Gegenspiel finden. Solide genug, aber der Zug kostet Zeit oder " +
      "Raum.",
  },

  "1.e4 g6 2.d4 b6": {
    strategy:
      "Bereitet neben ...Lg7 auch ...Lb7 gegen e4 vor, ein flexibler Aufbau mit beiden Läufern " +
      "auf den langen Diagonalen. Weiß deckt e4 mit einem Entwicklungszug und behält das größere " +
      "Zentrum, sodass Schwarz das Gegenspiel erst beweisen muss. Solide genug, aber der Zug " +
      "gibt Weiß Zeit für den Aufbau.",
  },

  "1.e4 g6 2.d4 e6": {
    strategy:
      "Bereitet ...d5 vor, doch mit bereits gespieltem ...g6 sind die schwarzen Felder f6 und h6 " +
      "schwach, und der Läufer c8 ist hinter e6 eingesperrt. Weiß entwickelt sich ungehindert " +
      "und behält das breitere Zentrum.",
  },

  "1.e4 g6 2.d4 Nc6": {
    strategy:
      "Setzt d4 unter Druck, doch 3.d5 vertreibt den Springer sofort, und Schwarz verliert " +
      "Zeit. Das naheliegende 3...Se5? verliert nach 4.f4 sogar eine Figur, weil Weiß c4, d3, " +
      "f3, g4 und c6 sämtlich kontrolliert.",
  },

  "1.e4 g6 2.d4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, mit Kurs auf c7 oder b4, und tut nichts gegen d4 und e4. " +
      "3.Lxa6 bxa6 verdoppelt die schwarzen a-Bauern um den Preis des Läuferpaars, und sonst " +
      "baut Weiß ungehindert auf.",
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
      "entwickelt sich einfach.",
  },

  "1.e4 g6 2.d4 a6": {
    strategy:
      "Bereitet ...b5 und ...Lb7 vor, bekämpft aber nichts. Weiß entwickelt sich oder gewinnt " +
      "weiteren Raum, während dem Aufbau mit ...g6 noch der Läufer und der d-Bauernzug fehlen.",
  },

  "1.e4 g6 2.d4 a5": {
    strategy:
      "Verwendet ein Tempo auf den Randbauern, während d4 und e4 unangefochten stehen, und der " +
      "Bauer kann b5 nicht mehr von a6 aus decken. Weiß entwickelt sich einfach.",
  },

  "1.e4 g6 2.d4 f6": {
    strategy:
      "Nimmt Weiß das Feld e5, verstellt aber das Feld f6 und die lange Diagonale des künftigen " +
      "Läufers g7 und tut nichts gegen d4 und e4. Weiß baut einfach weiter auf.",
  },

  "1.e4 g6 2.d4 h6": {
    strategy:
      "Verschwendet ein Tempo mit einem Randbauern, der weder d4 noch e4 bekämpft. Der Bauer ist " +
      "sicher, denn nach 3.Lxh6 Lxh6 hat Schwarz eine Figur gewonnen, doch Weiß baut einfach " +
      "weiter auf.",
  },

  "1.e4 g6 2.d4 h5": {
    strategy:
      "Schwächt g5 und g6 dauerhaft und entwickelt nichts. Weiß nutzt das Tempo, um sich zu " +
      "entwickeln oder Raum zu gewinnen, und eine Figur auf g5 kann nicht mehr mit ...h6 " +
      "vertrieben werden.",
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
      "Verliert einen Bauern: 3.exf5 gxf5? läuft in 4.Dh5#, daher muss Schwarz stattdessen " +
      "entwickeln, und nach 4.fxg6 hxg6 steht Schwarz mit einem Bauern weniger da.",
  },

  "1.e4 g6 2.d4 g5": {
    strategy:
      "Stellt den g-Bauern ein: 3.Lxg5 gewinnt ihn, weil der Bauer e7 die Diagonale der Dame " +
      "verstellt und nichts anderes g5 deckt, und der Königsflügel ist ohne Gegenwert " +
      "geschwächt.",
  },

  "1.e4 g6 2.Nc3 Bg7": {
    strategy:
      "Vollendet sofort das Fianchetto, sodass der Läufer auf der langen Diagonale auf d4 und " +
      "den Springer c3 zielt. Schwarz überlässt Weiß das Zentrum und will es aus der Distanz " +
      "untergraben; der Springer auf c3 nimmt Weiß zudem das Feld c3, mit dem er diesen Läufer " +
      "abblocken könnte. Der Preis ist Raum: Weiß baut zuerst ein volles Zentrum auf, und " +
      "Schwarz muss es später aufbrechen.",
  },

  "1.e4 g6 2.Nc3 d6": {
    strategy:
      "Deckt e5 und c5, öffnet dem Läufer c8 den Weg und hält f6, das beste Feld des " +
      "Königsspringers, in Reserve. Schwarz bleibt flexibel zwischen einem Pirc-Aufbau mit " +
      "...Sf6 und einem modernen mit später entwickeltem Springer. Weiß behält das breite " +
      "Zentrum, und Schwarz sucht Gegenspiel, indem er es mit einem Bauern angreift.",
  },

  "1.e4 g6 2.Nc3 c5": {
    strategy:
      "Lenkt das Spiel in eine Sizilianische Verteidigung mit bereits begonnenem Fianchetto. Mit " +
      "dem Springer auf c3 kann Weiß die Bauernklammer mit c4 nicht aufbauen, was dem schwarzen " +
      "Läufer mehr Raum gibt. Weiß, nicht Schwarz, entscheidet, ob die Partie geschlossen und " +
      "langsam bleibt oder sich öffnet.",
  },

  "1.e4 g6 2.Nc3 c6": {
    strategy:
      "Bereitet ...d5 für eine solide Bauernstruktur mit zusätzlichem Fianchetto vor. Schiebt " +
      "Weiß dann den e-Bauern vor, gewinnt er Raum, und dieser Bauer verstellt einem Läufer auf " +
      "g7 die lange Diagonale. Korrekt, aber weniger flexibel als ...Lg7, da die Bauern " +
      "festgelegt werden, bevor die Figuren entwickelt sind.",
  },

  "1.e4 g6 2.Nc3 Nf6": {
    strategy:
      "Greift e4 an und steuert eine solide Aufstellung mit Fianchetto an. Der Zug erlaubt " +
      "jedoch 3.e5 mit Tempogewinn: ...Sd5 verliert nach Sxd5 eine Figur, ...Sg4 nach Dxg4, und " +
      "der Springer muss nach h5 oder zurück nach g8. Spielbar, aber Weiß gewinnt kostenlos " +
      "Raum.",
  },

  "1.e4 g6 2.Nc3 Nc6": {
    name: "Nimzowitsch-Verteidigung: Pirc-Verbindung",
    background:
      "Die Stellung entsteht auch aus der Nimzowitsch-Verteidigung, 1.e4 Sc6 2.Sc3 g6, " +
      "benannt nach Aron Nimzowitsch, der auf 2.d4 meist mit 2...d5 antwortete. Kasparow und " +
      "Keene schrieben, die Eröffnung sei nie ganz als verlässlich anerkannt worden, sei aber " +
      "korrekt.",
    strategy:
      "Entwickelt eine Figur und überwacht d4 und e5. Der Springer verstellt den c-Bauern, " +
      "Schwarz verliert also den Durchbruch ...c5, und ein Bauer auf d5 kann ihn später " +
      "vertreiben. Spielbar, aber Weiß kommt mühelos zu seinem Zentrum.",
  },

  "1.e4 g6 2.Nc3 a6": {
    strategy:
      "Nimmt den weißen Figuren das Feld b5 und bereitet ...b5 und ...Lb7 als Damenflügelspiel " +
      "neben dem Fianchetto vor. Der Zug ist jedoch langsam: Keine Figur wird entwickelt, und " +
      "Weiß errichtet zuerst ein breites Zentrum. Spielbar, aber die Entwicklung kommt zuerst.",
  },

  "1.e4 g6 2.Nc3 b6": {
    strategy:
      "Bereitet ...Lb7 und ...Lg7 vor, sodass beide Läufer auf den langen Diagonalen drücken. " +
      "Schwarz entwickelt keine Figur, während Weiß das Zentrum besetzt, daher ist das doppelte " +
      "Fianchetto korrekt, aber passiv.",
  },

  "1.e4 g6 2.Nc3 e6": {
    strategy:
      "Bereitet ...d5 mit einem soliden Bauern auf e6 vor. Nach 3.d4 d5 4.e5 gewinnt Weiß Raum, " +
      "und der Läufer c8 ist hinter e6 eingesperrt. Korrekt, aber mit Bauern auf e6 und g6 deckt " +
      "kein Bauer mehr f6, und der Bauer e5 verstellt einem Läufer auf g7 die Diagonale.",
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
      "ausrichtet. Schwarz verbraucht ein Tempo vor dem Fianchetto, und Weiß besetzt das volle " +
      "Zentrum.",
  },

  "1.e4 g6 2.Nc3 a5": {
    strategy:
      "Nimmt den weißen Figuren das Feld b4, verbraucht aber ein Tempo für einen Randbauern, und " +
      "ein Springer auf b5 lässt sich nicht mehr mit ...a6 vertreiben. Für Zentrum und " +
      "Entwicklung geschieht nichts, und Weiß besetzt das volle Zentrum.",
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
      "anzugreifen. Weiß besetzt das volle Zentrum, und der Springer braucht weitere Züge, um in " +
      "den Kampf darum einzugreifen.",
  },

  "1.e4 g6 2.Nc3 f6": {
    strategy:
      "Nimmt dem Königsspringer das Feld f6 und öffnet die Diagonale a2–g8: Nach 3.Lc4 zielt der " +
      "Läufer auf g8 und verhindert die kurze Rochade, bis ein Bauernzug die Diagonale " +
      "verstellt. Der Bauer deckt e5, doch der König ist geschwächt, und Weiß besetzt das volle " +
      "Zentrum.",
  },

  "1.e4 g6 2.Nc3 h6": {
    strategy:
      "Deckt g5 gegen Lg5 und Sg5, verbraucht aber ein Tempo für einen Randbauern vor der " +
      "Entwicklung. Weiß nutzt die Zeit, um ein breites Zentrum aufzubauen.",
  },

  "1.e4 g6 2.Nc3 h5": {
    strategy:
      "Zielt auf ...h4, lässt aber g6 nur noch vom Bauern f7 gedeckt und schwächt g5. Der Zug " +
      "kostet ein Tempo, entwickelt nichts, und Weiß besetzt das Zentrum.",
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
      "Zieht den g-Bauern ein zweites Mal, und nach 3.d4 hängt er gegen Lxg5. Ihn mit einem " +
      "weiteren Bauernzug zu halten, schwächt den Königsflügel dauerhaft, und nach ...h6 kann " +
      "Weiß den Bauern mit h4 erneut angreifen.",
  },

  "1.e4 g6 2.Nf3 Bg7": {
    strategy:
      "Vollendet das Fianchetto: Der Läufer zielt über die lange Diagonale auf das Zentrum und " +
      "auf b2, und Schwarz lässt Weiß ein breites Zentrum aufbauen, um es später zu untergraben. " +
      "Schwarz bleibt flexibel, der Bauernaufbau ist noch offen. Der Preis ist Raum, denn ein " +
      "großes weißes Zentrum muss angegriffen statt verhindert werden.",
  },

  "1.e4 g6 2.Nf3 d6": {
    strategy:
      "Beansprucht e5 und c5 mit einem Bauern und bereitet ...Lg7 vor, lässt aber offen, ob der " +
      "Springer nach f6 geht. Der d-Bauer ist früh festgelegt, das schließt ...d5 aus und " +
      "erlaubt das Schach 3.Lb5+, das Schwarz durch Dazwischenziehen beantworten muss. Dafür " +
      "erhält Schwarz eine solide Struktur und ein Spiel mit langsamem Gegendruck auf das weiße " +
      "Zentrum.",
  },

  "1.e4 g6 2.Nf3 c5": {
    strategy:
      "Fordert das Zentrum sofort heraus und steuert eine Sizilianische Verteidigung an, in der " +
      "Schwarz den Königsläufer fianchettiert und am Damenflügel und auf der langen Diagonale " +
      "spielt. Weil der Damenspringer zurückgehalten wird, entfällt der Lb5-Druck auf c6. Das " +
      "Risiko ist, dass Weiß auf d4 mit der Dame zurückschlägt und den Turm h8 angreift oder mit " +
      "c4 auf d4 Druck ausübt.",
  },

  "1.e4 g6 2.Nf3 Nf6": {
    strategy:
      "Greift e4 an und steuert einen Aufbau wie in der Pirc-Ufimzew-Verteidigung an, doch 3.e5 " +
      "vertreibt den Springer sofort, nach h5 an den Rand oder nach d5, wo ihn c4 erneut " +
      "angreift. Weiß gewinnt Raum und Zeit.",
  },

  "1.e4 g6 2.Nf3 c6": {
    strategy:
      "Bereitet ...d5 und ein solides Bauernzentrum vor. Solide, aber passiv: Nach 3.d4 d5 4.e5 " +
      "gewinnt Weiß Raum und sperrt die lange Diagonale, die der Fianchetto-Läufer nutzen soll.",
  },

  "1.e4 g6 2.Nf3 d5": {
    strategy:
      "Greift das Zentrum sofort mit dem d-Bauern an, doch 3.exd5 Dxd5 4.Sc3 gewinnt ein Tempo " +
      "gegen die Dame und verschafft Weiß einen Entwicklungsvorsprung, während 3.e5 Raum " +
      "gewinnt. Spielbar, weil die Dame sichere Felder wie a5, d6 und d8 hat und die Stellung " +
      "solide bleibt, doch der weiße Vorsprung ist nicht leicht auszugleichen.",
  },

  "1.e4 g6 2.Nf3 e6": {
    strategy:
      "Stützt ...d5 und bereitet einen soliden, kompakten Aufbau vor. Solide, aber passiv: Nach " +
      "3.d4 d5 4.e5 sperrt der Bauer e6 den Läufer c8 ein, und Schwarz braucht ...c5, um " +
      "Gegenspiel zu bekommen.",
  },

  "1.e4 g6 2.Nf3 Nc6": {
    strategy:
      "Entwickelt eine Figur in Richtung d4 und e5, verstellt aber den c-Bauern und lädt zu 3.d4 " +
      "mit folgendem d5 ein, das den Springer angreift, sodass Weiß Raum und Zeit gewinnt.",
  },

  "1.e4 g6 2.Nf3 b6": {
    strategy:
      "Plant ...Lb7 und ein doppeltes Fianchetto, das über die lange Diagonale Druck auf e4 " +
      "ausübt. Weiß errichtet einfach ein breites Zentrum, und Schwarz muss zeigen, dass es ein " +
      "Angriffsziel ist. Solide, aber ungewöhnlich und etwas langsam.",
  },

  "1.e4 g6 2.Nf3 a6": {
    strategy:
      "Bereitet ...b5 vor und verhindert Lb5, kostet aber ein Tempo am Rand, während Weiß das " +
      "ganze Zentrum besetzt und der Läufer f8 noch zu Hause steht.",
  },

  "1.e4 g6 2.Nf3 a5": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel, verbraucht aber ein Tempo für einen Randbauern, der " +
      "nichts für das Zentrum tut, und schwächt b5 und b6. Weiß baut in aller Ruhe das Zentrum " +
      "auf.",
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
      "h-Bauern. Weiß besetzt mit 3.d4 das Zentrum und entwickelt sich ungehindert.",
  },

  "1.e4 g6 2.Nf3 e5": {
    strategy:
      "Stellt einen Bauern nach e5, den nichts gegen den Springer f3 deckt. Schwarz kann ihn " +
      "zurückgewinnen, indem er e4 mit der Dame angreift, doch die Dame steht dort exponiert, " +
      "und Weiß gewinnt Zeit gegen sie.",
  },

  "1.e4 g6 2.Nf3 b5": {
    strategy:
      "Lässt den b-Bauern nach 3.Lxb5 hängen, da ihn nichts deckt. Schwarz greift mit ...Lb7 den " +
      "ungedeckten Bauern e4 an, doch Weiß hält ihn mühelos und hat einen glatten Mehrbauern.",
  },

  "1.e4 g6 2.Nf3 g5": {
    strategy:
      "Lässt nach 3.Sxg5 einen Bauern hängen, da weder die Dame noch der Läufer g5 deckt. " +
      "Außerdem hinterlässt der Zug ohne jede Gegenleistung Löcher am Königsflügel.",
  },

  "1.e4 g6 2.c4 Bg7": {
    strategy:
      "Stellt den Läufer auf die lange Diagonale, wo er das Zentrum und b2 ins Visier nimmt, und " +
      "hält jeden Plan offen. Dafür hat Weiß Zeit, ein breites Bauernzentrum zu errichten, das " +
      "Schwarz später mit ...c5 oder ...e5 untergraben muss.",
  },

  "1.e4 g6 2.c4 c5": {
    strategy:
      "Kämpft um d4, bevor Weiß ein volles Zentrum errichten kann. Geht Weiß dennoch auf d4, " +
      "bleibt nach dem Abtausch auf d4 ein raumgewinnendes Bauernpaar auf c4 und e4, gegen das " +
      "Schwarz mit aktivem Figurenspiel arbeitet. Der Preis ist eine beengte Stellung, wenn " +
      "Schwarz nie ein befreiendes ...d5 oder ...b5 erreicht.",
  },

  "1.e4 g6 2.c4 d6": {
    strategy:
      "Kontrolliert e5 und c5, öffnet die Diagonale des Läufers c8 und hält die Entwicklung am " +
      "Königsflügel flexibel. Schwarz wartet ab, bis Weiß sich festlegt, und steuert einen " +
      "soliden Aufbau mit fianchettiertem Läufer an. Der Preis ist der dort übliche: Weiß " +
      "besetzt ein breites Zentrum, wählt den Aufbau und kann auf Königsangriff spielen.",
  },

  "1.e4 g6 2.c4 Nf6": {
    strategy:
      "Entwickelt mit Druck auf e4 und strebt einen Aufbau mit Fianchetto am Königsflügel an. Es " +
      "erlaubt jedoch 3.e5: 3...Sg4 verliert den Springer an 4.Dxg4, 3...Sd5 an 4.cxd5, und nach " +
      "3...Sh5 steht der Springer am Rand, während Weiß einen großen Raumvorteil hat.",
  },

  "1.e4 g6 2.c4 e5": {
    name: "Englische Eröffnung: Adorjan-Verteidigung",
    strategy:
      "Beansprucht Raum im Zentrum und kontrolliert d4, verstellt dafür aber einem Läufer auf g7 " +
      "die lange Diagonale. Ist der e-Bauer getauscht, öffnet sich die Diagonale für Weiß: Nach " +
      "3.d4 exd4 4.Dxd4 greift die Dame den Turm h8 an, 4...Lg7? verliert den Läufer an 5.Dxg7, " +
      "und Schwarz muss die Diagonale verstellen.",
  },

  "1.e4 g6 2.c4 e6": {
    strategy:
      "Bereitet ...d5 und einen flexiblen Aufbau vor. Der Zug ist solide, aber langsam: Weiß " +
      "baut in Ruhe ein volles Zentrum auf, und der Läufer c8 bleibt hinter dem Bauern e6 " +
      "eingesperrt, bis der b-Bauer ihm die lange Diagonale öffnet.",
  },

  "1.e4 g6 2.c4 b6": {
    strategy:
      "Bereitet einen Läufer auf der langen Diagonale gegen e4 und ein Doppelfianchetto vor. Der " +
      "Zug ist solide, überlässt Weiß aber das Zentrum: Weiß kann ein volles Zentrum und eine " +
      "feste Kette aufbauen, die Schwarz später mit ...c5 angreifen muss.",
  },

  "1.e4 g6 2.c4 c6": {
    strategy:
      "Bereitet ...d5 mit einer soliden Bauernkette vor, während die Figuren noch zu entwickeln " +
      "sind. Der Zug ist solide, aber passiv: Spielt Schwarz tatsächlich ...d5, enden die " +
      "Abtäusche auf d5 damit, dass Weiß ein Tempo gegen die Dame gewinnt und das freiere Spiel " +
      "behält.",
  },

  "1.e4 g6 2.c4 Nc6": {
    strategy:
      "Entwickelt den Springer gegen d4 und e5 und hält die übrigen Entwicklungszüge in Reserve. " +
      "Der Zug ist solide, aber nicht zu empfehlen: Der Springer verstellt den c-Bauern, sodass " +
      "weder ...c6 noch ...c5 möglich ist, und ein weißer Bauer auf d5 vertreibt ihn wieder und " +
      "gewinnt dabei Raum.",
  },

  "1.e4 g6 2.c4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, von wo er c5 und b4 ins Auge fasst, doch 3.d4 nimmt ihm " +
      "c5, und gegen das Zentrum unternimmt der Springer nichts. Weiß hat freie Hand beim Ausbau " +
      "des Zentrums.",
  },

  "1.e4 g6 2.c4 Nh6": {
    strategy:
      "Zielt auf f5, doch der Bauer e4 kontrolliert dieses Feld, sodass der Springer ohne " +
      "sinnvolle Fortsetzung am Rand bleibt. Weiß baut das Zentrum ohne Nachteil auf.",
  },

  "1.e4 g6 2.c4 Bh6": {
    strategy:
      "Bietet den Tausch der schwarzfeldrigen Läufer an, also der Figur, für die ...g6 gespielt " +
      "wurde. Nach dem Tausch steht der zurückschlagende Springer am Rand, und die dunklen " +
      "Felder um den schwarzen König sind geschwächt.",
  },

  "1.e4 g6 2.c4 a6": {
    strategy:
      "Bereitet ...b5 vor, doch mit dem Bauern auf c4 scheitert dieser Hebel: 3.d4 b5 4.cxb5 " +
      "axb5 5.Lxb5 gewinnt einen Bauern. So bleibt der Zug ein verbrauchtes Tempo, während Weiß " +
      "das Zentrum aufbaut.",
  },

  "1.e4 g6 2.c4 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel, schwächt aber b5 und tut nichts für die Entwicklung. Weiß " +
      "baut ein volles Zentrum auf, während die schwarzen Figuren zu Hause bleiben.",
  },

  "1.e4 g6 2.c4 f6": {
    strategy:
      "Deckt e5, nimmt aber dem Springer g8 das Feld f6 und schwächt e6 sowie den schwarzen " +
      "König. Der Zug entwickelt nichts, sodass Weiß ungehindert ein volles Zentrum aufbaut.",
  },

  "1.e4 g6 2.c4 h6": {
    strategy:
      "Ein Wartezug, der Lg5 verhindert, aber nichts für das Zentrum oder die Entwicklung tut. " +
      "Weiß baut ein volles Zentrum auf, und das Tempo für den h-Bauern ist schlicht verloren.",
  },

  "1.e4 g6 2.c4 h5": {
    strategy:
      "Beginnt einen Flügelangriff ohne entwickelte Figuren und schwächt g5 und den Bauern g6. " +
      "Weiß entwickelt einfach, und Schwarz hat für den gelockerten Königsflügel nichts " +
      "vorzuweisen.",
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
