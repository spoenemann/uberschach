import type { OpeningTexts } from "../book.ts";

// German prose for b3-d5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.b3 d5 2.Bb2": {
    strategy:
      "Stellt den Läufer auf die lange Diagonale gegen e5 und g7, sodass ...e5 vorbereitet " +
      "werden muss, meist mit ...Sc6. Weiß setzt mit e3, Sf3 und Le2 oder Lb5 fort oder " +
      "greift d5 mit e3 und c4 an; gegen ...c5 und ...Sc6 ist der übliche Aufbau eine " +
      "Nimzo-Indische Verteidigung mit vertauschten Farben. Schwarz muss auf die Ecke h8 " +
      "achten, denn ...g6 vor ...Sf6 erlaubt Lxh8. Der Preis ist, dass das Zentrum vorerst " +
      "Schwarz gehört.",
  },

  "1.b3 d5 2.Nf3": {
    strategy:
      "Entwickelt den Springer, der e5 und d4 kontrolliert, sodass ...e5 zusammen mit Lb2 " +
      "kaum durchzusetzen ist; die Stellung ist dieselbe wie nach 1.Sf3 d5 2.b3. Typische " +
      "Fortsetzungen sind Lb2, e3 und Le2 oder Lb5, mit c4 als späterem Hebel gegen d5. Weiß " +
      "überlässt Schwarz vorerst das Zentrum, und viele Varianten gelten theoretisch nur als " +
      "ausgeglichen.",
  },

  "1.b3 d5 2.e3": {
    strategy:
      "Öffnet die Diagonale des Läufers f1 und bereitet Lb2, Sf3 und Le2 oder Lb5 vor, mit c4 " +
      "als späterem Hebel gegen d5; meist mündet die Partie in die Varianten mit Lb2. " +
      "Antwortet Schwarz sofort mit 2...e5, folgt Lb2, und Lb5 fesselt einen Springer auf c6, " +
      "der den Bauern deckt. Der Zug ist flexibel und gesund, lässt aber Schwarz zuerst die " +
      "Bauernstruktur wählen.",
  },

  "1.b3 d5 2.c4": {
    strategy:
      "Greift d5 sofort an, mit dem Ziel eines Aufbaus wie in der Englischen Eröffnung, mit " +
      "Lb2 dahinter. Nach 2...dxc4 3.bxc4 hat Weiß die halboffene b-Linie und einen " +
      "zusätzlichen Zentrumsbauern, aber einen isolierten a-Bauern, während 2...d4 Schwarz " +
      "Raum verschafft. Spielbar, doch Schwarz wählt die Struktur, bevor Weiß eine Figur " +
      "entwickelt hat.",
  },

  "1.b3 d5 2.d3": {
    strategy:
      "Bereitet e4 mit Sd2, Sgf3 oder g3 und Lg2 vor, für einen Altindischen Aufbau mit " +
      "vertauschten Farben. Der Zug ist flexibel und gesund, aber passiv: Schwarz besetzt mit " +
      "...e5 und ...Sf6 das Zentrum und begegnet e4 auf Augenhöhe.",
  },

  "1.b3 d5 2.d4": {
    strategy:
      "Besetzt das Zentrum und führt in ein Damenbauernspiel, in dem b3 schon gezogen ist, " +
      "gefolgt von Lb2, Sf3 und c4 oder e3. Solide, aber langsam: Gegen d5 geschieht nichts, " +
      "sodass Schwarz seine Entwicklung mit ...Sf6, ...Lf5 und ...e6 oder ...c5 in aller Ruhe " +
      "abschließt.",
  },

  "1.b3 d5 2.g3": {
    strategy:
      "Bereitet Lg2 vor, sodass ein Läufer auf d5 wirkt und der andere, von b2 aus, auf der " +
      "langen schwarzfeldrigen Diagonale. Schwarz entwickelt sich frei mit ...Sf6, ...c5 und " +
      "...Sc6 oder gewinnt mit ...e5 Raum, und Weiß muss den richtigen Moment für c4 oder für " +
      "d3 und e4 finden. Spielbar, aber das Zentrum bleibt unbestritten.",
  },

  "1.b3 d5 2.f4": {
    strategy:
      "Kontrolliert e5 und bereitet Sf3, e3 und Lb2 für einen Aufbau nach Art der " +
      "Bird-Eröffnung vor. Der Zug schwächt die Diagonale e1–h4 und das Feld e3 und legt den " +
      "f-Bauern fest, bevor Schwarz seinen Aufbau gezeigt hat; er ist gesund, gibt aber die " +
      "Flexibilität der anderen Züge auf.",
  },

  "1.b3 d5 2.Ba3": {
    name: "Larsen-Eröffnung: Grazer Angriff",
    strategy:
      "Richtet den Läufer auf e7 und f8, sodass ...e6 Lxf8 erlaubt und ...Kxf8 erzwingt, " +
      "womit Schwarz das Rochaderecht verliert. Der Läufer verzichtet auf die lange Diagonale " +
      "und hat sonst wenig anzugreifen, und Schwarz kann mit ...Sf6 und ...g6 oder ...Lf5 " +
      "antworten, während 2...c5 durch Lxc5 einen Bauern kosten würde.",
  },

  "1.b3 d5 2.Nc3": {
    strategy:
      "Entwickelt den Springer nach c3, auf die lange Diagonale, die b3 für den Läufer " +
      "vorbereitet hat, und 2...d4 greift ihn sofort an, gewinnt Raum und zwingt ihn, erneut " +
      "zu ziehen, etwa nach e4 oder b1. Weiß verliert ein Tempo, und ein späterer Lb2 beißt " +
      "auf den Bauern d4.",
  },

  "1.b3 d5 2.c3": {
    strategy:
      "Verstellt die lange Diagonale, die b3 für den Läufer vorbereitet hat, denn ein Läufer " +
      "auf b2 stünde nun vor dem eigenen Bauern c3. Schwarz entwickelt sich frei mit ...Sf6, " +
      "...e5 oder ...Lf5, und Weiß hat ein Tempo darauf verwendet, den Sinn von b3 " +
      "zunichtezumachen.",
  },

  "1.b3 d5 2.Na3": {
    strategy:
      "Stellt den Springer an den Rand, wo er b5 ins Auge fasst, während c4 vom Bauern d5 " +
      "kontrolliert wird. Er tut nichts für das Zentrum, ...c6 nimmt ihm auch noch b5, und " +
      "Schwarz baut mit ...e5 und ...Sf6 sein Zentrum auf.",
  },

  "1.b3 d5 2.Nh3": {
    strategy:
      "Strebt nach f4 oder g5, doch 2...Lxh3 erzwingt 3.gxh3, da der Läufer f1 durch g2 " +
      "versperrt ist, und lässt Weiß mit verdoppelten, isolierten h-Bauern zurück. Auch ohne " +
      "den Tausch steht der Springer am Rand schlecht.",
  },

  "1.b3 d5 2.b4": {
    strategy:
      "Zieht denselben Bauern ein zweites Mal und erreicht die Stellung nach 1.b4 d5 mit " +
      "Schwarz am Zug, also ein volles Tempo weniger. Auf b4 wird der Bauer zum Ziel von " +
      "...a5, ...Dd6 oder, sobald der e-Bauer gezogen hat, vom Läufer f8, und er braucht a3 " +
      "oder c3 als Stütze.",
  },

  "1.b3 d5 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer g1 das Feld f3 und schwächt die Diagonale " +
      "e1–h4. Schwarz antwortet mit ...e5 oder ...Sf6, und Weiß hat ein Tempo verbraucht, " +
      "ohne eine Figur zu entwickeln.",
  },

  "1.b3 d5 2.a3": {
    strategy:
      "Ein Wartezug, der weder eine Figur entwickelt noch um das Zentrum kämpft; er nimmt den " +
      "schwarzen Figuren nur das Feld b4. Schwarz baut in aller Ruhe mit ...e5 oder ...Sf6 " +
      "auf.",
  },

  "1.b3 d5 2.a4": {
    strategy:
      "Zieht einen Randbauern, der weder eine Figur entwickelt noch um das Zentrum kämpft. Er " +
      "kontrolliert b5, lässt aber b4 schwach, und Schwarz spielt in aller Ruhe ...e5 oder " +
      "...Sf6.",
  },

  "1.b3 d5 2.h3": {
    strategy:
      "Nimmt dem Läufer c8 das Feld g4, verbraucht aber ein Tempo für einen vorbeugenden Zug, " +
      "bevor eine Figur entwickelt ist, und überlässt Schwarz mit ...e5 oder ...Sf6 das " +
      "Zentrum.",
  },

  "1.b3 d5 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel und bereitet h5 vor, tut aber nichts für Zentrum und " +
      "Entwicklung und schwächt die Felder g3 und g4. Schwarz entwickelt sich einfach mit " +
      "...Sf6 und ...Lf5.",
  },

  "1.b3 d5 2.e4": {
    strategy:
      "Stellt einen Bauern nach e4, wo d5 ihn angreift und nichts ihn deckt, sodass 2...dxe4 " +
      "ihn einfach gewinnt. Lb2 greift g7 nur an, bis ...Sf6 die Diagonale schließt, und " +
      "Schwarz behält den Mehrbauern mit ...Lf5 oder ...f5.",
  },

  "1.b3 d5 2.g4": {
    strategy:
      "Verliert einen Bauern durch 2...Lxg4: ...d5 hat die Diagonale c8–h3 geöffnet, und " +
      "nichts deckt g4. Weiß erhält keine Kompensation und hat zudem den Königsflügel " +
      "geschwächt.",
  },

  "1.b3 d5": {
    name: "Larsen-Eröffnung: Klassische Variante",
    background:
      "Aron Nimzowitsch erreichte diese Art von Stellung häufiger über 1.Sf3 d5 2.b3, eine " +
      "Zugfolge, die ...e5 ausschließt. Nach 1.b3 selbst ist 1...d5 mit etwa 27 Prozent der " +
      "Partien die zweithäufigste Antwort von Schwarz.",
  },

  "1.b3 d5 2.Bb2 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, deckt d5, kontrolliert e4 und " +
      "verstellt auf f6 die lange Diagonale, sodass …g6 und …Lg7 möglich werden, ohne den " +
      "Turm h8 zu verlieren. Schwarz hält …c5, …e6, …Lf5 und …Lg4 offen und wählt seinen " +
      "Aufbau nach dem nächsten weißen Zug, meist Sf3 oder e3. Schwarz gibt nichts preis, und " +
      "c4 bleibt der wichtigste weiße Hebel gegen d5.",
  },

  "1.b3 d5 2.Bb2 c5": {
    background:
      "Die Nimzo-Indische Verteidigung ist eine beliebte Verteidigung gegen 1.d4; nach 3.e3 " +
      "Sc6 4.Sf3 Sf6 5.Lb5 hat Weiß sie mit vertauschten Farben und einem Tempo mehr. Aron " +
      "Nimzowitsch erreichte diese Stellung gegen Rudolf Spielmann in New York 1927 über die " +
      "Zugfolge 1.Sf3 d5 2.b3 c5 3.Lb2 Sc6 4.e3 Sf6 5.Lb5 und gewann in 55 Zügen.",
    strategy:
      "Kontrolliert d4, bevor Weiß das Feld besetzen kann, und bereitet hinter der breiten " +
      "Bauernfront c5 und d5 …Sc6 und …Sf6 vor. Nach 3.e3 Sc6 4.Sf3 Sf6 fesselt Weiß den " +
      "Springer oft mit 5.Lb5 und kämpft um e5 und d4. Dafür fehlt d5 bis …e6 die " +
      "Bauerndeckung, und Weiß kann den Läufer auf c6 hergeben, um einen Springer auf e5 zu " +
      "postieren.",
  },

  "1.b3 d5 2.Bb2 Bf5": {
    background:
      "Baadur Jobava besiegte Yu Yangyi aus dieser Stellung beim Tata Steel Challengers 2014 " +
      "in Wijk aan Zee, mit 3.e3 e6 4.h3 h6 5.Sc3 Lh7 6.d4 und langer Rochade im 9. Zug.",
    strategy:
      "Entwickelt den weißfeldrigen Läufer außerhalb der Bauernkette, bevor …e6 ihn " +
      "einsperrt, und strebt ein Londoner System mit vertauschten Farben an, mit …e6, …Sf6 " +
      "und …c6. Der Läufer kontrolliert e4, daher bereitet Weiß diesen Vorstoß oft mit d3, " +
      "Sd2, g3 und Lg2 vor oder spielt Sf3 und später Sh4, um den Läufer zur Rede zu stellen; " +
      "…h6 hält ihm den Rückzug nach h7 offen. Schwarz entwickelt sich bequem, doch der " +
      "Läufer kann zur Zielscheibe werden.",
  },

  "1.b3 d5 2.Bb2 Bg4": {
    background:
      "Raymond Keene, später Autor des Buches „Nimzowitsch/Larsen Attack“ (1977), hatte die " +
      "Stellung nach 3.Sf3 als Weißer gegen Vlatko Kovačević in Amsterdam 1973 auf dem Brett, " +
      "dort über 1.Sf3 d5 2.b3 Lg4 3.Lb2 erreicht, und gewann nach 3…Sd7 4.g3 Lxf3 5.exf3.",
    strategy:
      "Entwickelt den Läufer außerhalb der Bauernkette und fesselt den Bauern e2 an die Dame, " +
      "sodass 3.e3 die Dame durch …Lxd1 verlieren würde. Die üblichen weißen Antworten sind " +
      "Sf3, h3, f3 oder g3 mit Lg2. Schwarz setzt mit …Sd7, …Sgf6 und …e6 oder …c6 fort und " +
      "nimmt einen Springer auf f3, sobald der Tausch die weißen Bauern schwächt oder einen " +
      "Verteidiger von e5 beseitigt.",
  },

  "1.b3 d5 2.Bb2 e6": {
    strategy:
      "Stützt d5 und öffnet dem Läufer f8 den Weg für …Sf6, …Le7 und …O-O, mit …c5 als " +
      "Fortsetzung. Solide, aber der Zug sperrt den Läufer c8 ein, bevor …Lf5 oder …Lg4 " +
      "möglich ist, weshalb Schwarz diesen Läufer meist zuerst entwickelt, während Weiß mit " +
      "Sf3, e3 und c4 ungestört aufbaut.",
  },

  "1.b3 d5 2.Bb2 Nc6": {
    strategy:
      "Entwickelt mit Druck auf d4 und e5 und bereitet …e5 vor. Nach 3.e3 e5 4.Lb5 geht die " +
      "Partie in die Variante 1.b3 e5 2.Lb2 Sc6 3.e3 d5 4.Lb5 über, doch 3.Sf3 verhindert …e5 " +
      "vorerst, denn Sxe5 Sxe5 Lxe5 gewinnt einen Bauern. Solide, aber der Springer verstellt " +
      "den c-Bauern und überlässt Weiß die Wahl des Aufbaus.",
  },

  "1.b3 d5 2.Bb2 c6": {
    strategy:
      "Stützt d5 mit einem Bauern wie in der Slawischen Verteidigung und hält den Läufer c8 " +
      "für …Lf5 oder …Lg4 frei, bevor …e6 folgt. Solide, aber passiv: Der Bauer kontrolliert " +
      "weder d4 noch e5, nimmt dem Springer b8 das Feld c6, und ein späteres …c5 kostet einen " +
      "zweiten Zug, sodass Weiß mit c4, Sf3 und e3 ungestört aufbaut.",
  },

  "1.b3 d5 2.Bb2 b6": {
    strategy:
      "Spiegelt den weißen Aufbau und bereitet …Lb7 vor, allerdings auf der anderen langen " +
      "Diagonale, wo der Läufer auf den eigenen Bauern d5 blickt. Er bleibt wirkungslos, bis " +
      "…c5 und …d4 oder ein Tausch diese Diagonale öffnet, während Weiß mit Sf3, e3 und c4 " +
      "aufbaut. Solide, aber anspruchslos.",
  },

  "1.b3 d5 2.Bb2 Nd7": {
    strategy:
      "Deckt e5 und bereitet so …e5 vor, wobei …Sgf6 möglich bleibt. Doch der Springer sperrt " +
      "den Läufer c8 ein und nimmt der Dame die Deckung von d5, und nach 3.Sf3 verliert ein " +
      "sofortiges …e5 weiterhin einen Bauern durch Sxe5 und Lxe5. Spielbar, aber passiv.",
  },

  "1.b3 d5 2.Bb2 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 ins Auge fasst, aber nichts für d4 " +
      "oder e5 tut, die er von c6 aus kontrollieren würde. Weiß setzt ungehindert mit Sf3, e3 " +
      "und c4 fort.",
  },

  "1.b3 d5 2.Bb2 Bd7": {
    strategy:
      "Entwickelt den Läufer auf ein passives Feld, wo er der Dame die Deckung von d5 nimmt " +
      "und dem Springer b8 den Weg nach d7 verstellt. Nichts wird angegriffen, sodass Weiß " +
      "mit e3 und c4 gegen den Bauern d5 spielt, der …c6 oder …e6 braucht, um sich zu halten.",
  },

  "1.b3 d5 2.Bb2 Be6": {
    strategy:
      "Blockiert den Bauern e7, sodass weder …e6 noch …e5 möglich ist, bis der Läufer wieder " +
      "zieht, und auf e6 leistet der Läufer weniger als auf f5 oder g4. Weiß setzt " +
      "ungehindert mit Sf3, e3 und c4 fort.",
  },

  "1.b3 d5 2.Bb2 Qd7": {
    strategy:
      "Bringt die Dame früh ins Spiel, wo sie den Läufer c8 und den Weg des Springers b8 nach " +
      "d7 verstellt. Nichts wird angegriffen, sodass Weiß mit e3 und Sf3 Zeit gewinnt, " +
      "während die Dame im Weg steht.",
  },

  "1.b3 d5 2.Bb2 Qd6": {
    strategy:
      "Bringt die Dame früh auf die Diagonale a3–f8, wo 3.La3 sie sofort angreift, und Sc3 " +
      "mit Sb5 kann sie später erneut angreifen. Keine Leichtfigur ist entwickelt, und die " +
      "Dame nimmt dem Läufer f8 das Feld d6.",
  },

  "1.b3 d5 2.Bb2 Nh6": {
    strategy:
      "Stellt den Springer g8 auf dem Weg nach f5 an den Rand statt nach f6, wo er e4 decken " +
      "und die lange Diagonale verstellen würde. Weiß spielt Sf3, e3 und c4 ohne jeden " +
      "Widerstand.",
  },

  "1.b3 d5 2.Bb2 a6": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern, ohne eine Figur zu entwickeln oder das " +
      "Zentrum zu berühren; der Sinn ist …b5, und Weiß gewinnt derweil ungehindert Raum mit " +
      "Sf3, e3 und c4.",
  },

  "1.b3 d5 2.Bb2 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel mit der Idee …a4 gegen den Bauern b3, entwickelt aber " +
      "nichts, und der a-Bauer deckt b6 nicht mehr. Weiß spielt Sf3, e3 und c4 ungehindert.",
  },

  "1.b3 d5 2.Bb2 b5": {
    strategy:
      "Rückt einen Flügelbauern vor, ohne eine Figur zu entwickeln, und der Bauer auf b5 ist " +
      "ungedeckt: Schon 3.e3 droht Lxb5+, und auch a4 kann ihn angreifen.",
  },

  "1.b3 d5 2.Bb2 f6": {
    strategy:
      "Bereitet …e5 vor und verstellt die lange Diagonale, nimmt aber dem Springer g8 das " +
      "Feld f6 und schwächt e6 sowie die Diagonale e8–h5, ohne eine Figur zu entwickeln. Weiß " +
      "setzt mit Sf3, e3 und c4 oder d4 fort.",
  },

  "1.b3 d5 2.Bb2 f5": {
    strategy:
      "Legt sich sofort auf eine Bauernformation wie im Stonewall fest, die e5 als " +
      "dauerhaftes Loch für Lb2 und einen Springer hinterlässt, und der Bauer f5 sperrt den " +
      "Läufer c8 von f5, g4 und h3 aus. Zudem öffnet sich die Diagonale e8–h5.",
  },

  "1.b3 d5 2.Bb2 h6": {
    strategy:
      "Verbraucht ein Tempo für einen vorbeugenden Bauernzug, der nichts verhindert, was Weiß " +
      "droht, während Weiß mit e3, Sf3 und c4 fortsetzt und das Zentrum beansprucht.",
  },

  "1.b3 d5 2.Bb2 h5": {
    strategy:
      "Beginnt einen Flügelvorstoß, ohne eine Figur zu entwickeln. Der h-Bauer schwächt g5 " +
      "und g6, legt sich auf einen Angriff fest, hinter dem keine Figuren stehen, und " +
      "überlässt Weiß das Zentrum.",
  },

  "1.b3 d5 2.Bb2 d4": {
    strategy:
      "Gewinnt Raum und verstellt die lange Diagonale, doch der Bauer ist nur durch die Dame " +
      "gedeckt, während Lb2 ihn bereits angreift. 3.Sf3 oder 3.e3 verstärkt den Druck, sodass " +
      "Schwarz weitere Züge wie …c5 oder …Sc6 aufwenden muss, um ihn zu halten, und der Bauer " +
      "kontrolliert c4 und e4 nicht mehr.",
  },

  "1.b3 d5 2.Bb2 Bh3": {
    strategy:
      "Verliert den Läufer sofort durch 3.gxh3 oder 3.Sxh3, denn keine schwarze Figur kann " +
      "auf h3 zurückschlagen.",
  },

  "1.b3 d5 2.Bb2 Kd7": {
    strategy:
      "Gibt ohne Grund das Rochaderecht auf und stellt den König nach d7, wo er der Dame die " +
      "Deckung von d5 nimmt und den Läufer c8 verstellt. Der König bleibt im Zentrum " +
      "ungeschützt, und der Turm h8 ist vom Spiel abgeschnitten.",
  },

  "1.b3 d5 2.Bb2 e5": {
    strategy:
      "Lässt den e-Bauern hängen, denn nichts deckt e5, und 3.Lxe5 gewinnt ihn. Nach 3…Sc6 " +
      "zieht sich der Läufer einfach nach b2 zurück, sodass das gewonnene Tempo nicht " +
      "ausreicht und Weiß den Mehrbauern behält.",
  },

  "1.b3 d5 2.Bb2 g6": {
    strategy:
      "Gibt die lange Diagonale bis h8 frei, sodass 3.Lxh8 den Turm glatt gewinnt, da keine " +
      "schwarze Figur zurückschlagen kann. Das Fianchetto funktioniert erst, wenn …Sf6 die " +
      "Diagonale verstellt hat.",
  },

  "1.b3 d5 2.Bb2 g5": {
    strategy:
      "Gibt die lange Diagonale bis h8 frei, sodass 3.Lxh8 den Turm umsonst gewinnt, da keine " +
      "schwarze Figur zurückschlagen kann. Der Königsflügel wird ohne jeden Gegenwert " +
      "gelockert.",
  },

  "1.b3 d5 2.e3 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, kontrolliert e4 und hält jeden " +
      "Aufbau offen: …e6 mit …c5, …Lf5 mit …e6 oder sofort …c5 und …Sc6. Nach 3.Lb2 sind …e6, " +
      "…Le7 und …O-O oder …c5 und …Sc6 typische Fortsetzungen, und mit Sf3 und Lb5 von Weiß " +
      "führt der zweite Weg in die Nimzo-Indische Verteidigung mit vertauschten Farben. " +
      "Schwarz gibt nichts preis, und der Springer schirmt g7 und h8 gegen den Läufer auf b2 " +
      "ab.",
  },

  "1.b3 d5 2.e3 c5": {
    strategy:
      "Kontrolliert d4 vom Flügel aus und lässt …Sc6 und …Sf6 folgen, sodass Schwarz um das " +
      "Zentrum kämpft, bevor Weiß es besetzt. Nach 3.Lb2 Sc6 4.Sf3 Sf6 5.Lb5 entsteht eine " +
      "Nimzo-Indische Verteidigung mit vertauschten Farben, mit gefesseltem Springer c6. Der " +
      "Bauer c5 steht auf der Diagonale a3–f8, wo La3 ihn angreifen kann, daher folgt meist " +
      "…e6, womit der Läufer f8 hinter den Bauern tritt und d5 gestützt wird.",
  },

  "1.b3 d5 2.e3 e5": {
    strategy:
      "Errichtet das klassische Bauernzentrum d5–e5, das der weiße Aufbau untergraben will. " +
      "3.Lb2 greift den Bauern e5 sofort an, daher folgt meist …Sc6, und durch Zugumstellung " +
      "entsteht die Hauptvariante 1.b3 e5 2.Lb2 Sc6 3.e3 d5. Danach fesselt Lb5 den Springer, " +
      "und f4 greift e5 ein weiteres Mal an, sodass Schwarz den Bauern mit …Ld6 und …De7 oder " +
      "…f6 fest gedeckt halten muss.",
  },

  "1.b3 d5 2.e3 Bf5": {
    strategy:
      "Entwickelt den weißfeldrigen Läufer außerhalb der Bauernkette, bevor …e6 ihn " +
      "einsperrt, und strebt ein Londoner System mit vertauschten Farben an, mit …e6, …Sf6 " +
      "und …c6. Weiß kann mit Ld3 den Tausch anbieten, den Läufer mit Se2-g3 oder mit h3 und " +
      "g4 jagen oder e4 mit d3 und Sd2 vorbereiten. Schwarz entwickelt sich bequem, doch der " +
      "Läufer kann zur Zielscheibe werden.",
  },

  "1.b3 d5 2.e3 e6": {
    strategy:
      "Stützt d5 und öffnet dem Läufer f8 den Weg für …Sf6, …Le7 und …O-O; meist geht der Zug " +
      "in Abspiele von 2…Sf6 mit …e6 über. Solide, aber er sperrt den Läufer c8 ein, bevor " +
      "…Lf5 möglich ist, und verzichtet so ohne Gewinn auf einen der Hauptaufbauten, während " +
      "Weiß mit Lb2, Sf3 und c4 oder d4 aufbaut.",
  },

  "1.b3 d5 2.e3 Nc6": {
    strategy:
      "Entwickelt mit Druck auf d4 und e5 und bereitet …e5 vor, das nach 3.Lb2 e5 durch " +
      "Zugumstellung in die Hauptvariante von 1.b3 e5 führt. Der Springer verstellt den " +
      "c-Bauern, sodass die Aufbauten mit …c5 und …c6 entfallen, und Lb5 kann ihn sofort " +
      "fesseln. Solide, aber weniger flexibel als …Sf6.",
  },

  "1.b3 d5 2.e3 c6": {
    strategy:
      "Stützt d5 mit einem Bauern wie in der Slawischen Verteidigung und hält dem Läufer c8 " +
      "den Weg nach f5 frei, bevor …e6 folgt. Er kämpft weder um d4 noch um e5, sodass Weiß " +
      "sich mit Lb2, Sf3 und Ld3 oder Le2 bequem entwickelt und später c4 oder d4 wählen " +
      "kann. Solide, aber abwartend, und der Bauer nimmt dem Springer b8 das Feld c6.",
  },

  "1.b3 d5 2.e3 b6": {
    strategy:
      "Spiegelt den weißen Aufbau, bereitet …Lb7 vor und lässt …e6, …Sf6 und …Le7 folgen. Der " +
      "Läufer auf b7 blickt auf den eigenen Bauern d5 und bleibt wirkungslos, bis …c5 und …d4 " +
      "oder ein Tausch auf d5 die Diagonale öffnet. Solide, aber anspruchslos, und Weiß " +
      "entwickelt sich ungestört mit Lb2 und Sf3.",
  },

  "1.b3 d5 2.e3 g6": {
    strategy:
      "Bereitet …Lg7 vor, doch 3.Lb2 greift sofort den Turm h8 an, und …Lg7 würde dann den " +
      "Läufer durch Lxg7 verlieren, da nichts auf g7 zurückschlagen kann. Schwarz muss die " +
      "Diagonale zuerst mit …Sf6 verstellen, wonach Lxf6 exf6 die f-Bauern verdoppelt, oder " +
      "mit …f6, das dem Springer sein bestes Feld nimmt und e6 schwächt. Spielbar, doch die " +
      "lange Diagonale gibt Weiß die Initiative.",
  },

  "1.b3 d5 2.e3 f5": {
    strategy:
      "Kontrolliert e4 wie in der Holländischen Verteidigung, hinterlässt aber auf e5 ein " +
      "Loch auf der Diagonale eines Läufers b2 und schwächt e6 sowie die Diagonale e8–h5, " +
      "sodass schon Dh5+ möglich ist. Ein Stonewall-Aufbau mit …e6 und …Sf6 sperrt zudem den " +
      "Läufer c8 ein.",
  },

  "1.b3 d5 2.e3 Nd7": {
    strategy:
      "Unterstützt …e5 und …c5, sperrt aber den Läufer c8 ein, und auf d7 kann der Springer " +
      "durch Lb5 an den König gefesselt werden. Weiß entwickelt sich mit Lb2 und Sf3, während " +
      "Schwarz den Läufer erst noch befreien muss.",
  },

  "1.b3 d5 2.e3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 ins Auge fasst, aber nichts für das " +
      "Zentrum tut. Lxa6 bxa6 hinterlässt Schwarz einen Doppelbauern auf der a-Linie, und auf " +
      "c6 oder d7 stünde der Springer besser.",
  },

  "1.b3 d5 2.e3 Bd7": {
    strategy:
      "Stellt den Läufer auf ein passives Feld, wo er nichts für das Zentrum tut und dem " +
      "Springer b8 das Feld d7 nimmt. Dort hat der Läufer kein Ziel, und Weiß entwickelt sich " +
      "ungestört mit Lb2 und Sf3.",
  },

  "1.b3 d5 2.e3 Be6": {
    strategy:
      "Stellt den Läufer vor den Bauern e7, sodass der Läufer f8 eingesperrt bleibt, bis der " +
      "Läufer e6 wieder zieht oder …g6 folgt. Auf e6 leistet der Läufer weniger als auf f5, " +
      "und Sf3-g5 kann ihn mit Tempo angreifen.",
  },

  "1.b3 d5 2.e3 Qd7": {
    strategy:
      "Stellt die Dame nach d7, wo sie den Läufer c8 einsperrt und dem Springer b8 das Feld " +
      "d7 nimmt. Weiß entwickelt sich mit Lb2 und Sf3 und kann mit Se5 gegen die Dame Zeit " +
      "gewinnen.",
  },

  "1.b3 d5 2.e3 Qd6": {
    strategy:
      "Bringt die Dame früh auf die Diagonale a3–f8, wo La3 sie sofort angreift, sodass sie " +
      "erneut ziehen oder durch …c5 abgeschirmt werden muss. Keine Leichtfigur ist " +
      "entwickelt, und die Dame verliert weiter Zeit, während Weiß mit Sf3 und Le2 aufbaut.",
  },

  "1.b3 d5 2.e3 Nh6": {
    strategy:
      "Stellt den Springer auf dem Weg nach f5 an den Rand statt nach f6, wo er e4 und d5 " +
      "kontrollieren würde. Auf h6 kontrolliert er kein Zentrumsfeld, und Weiß entwickelt " +
      "sich mit Lb2 und Sf3.",
  },

  "1.b3 d5 2.e3 a6": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern, ohne eine Figur zu entwickeln oder ins " +
      "Zentrum einzugreifen. Er nimmt dem Läufer f1 das Feld b5 und bereitet …b5 vor, doch " +
      "Weiß entwickelt sich einfach mit Lb2 und Sf3.",
  },

  "1.b3 d5 2.e3 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet …a4 gegen den Bauern b3 vor, entwickelt aber " +
      "nichts und greift nicht ins Zentrum ein. Weiß setzt mit Lb2 und Sf3 fort oder hält den " +
      "Bauern mit a4 auf.",
  },

  "1.b3 d5 2.e3 f6": {
    strategy:
      "Bereitet …e5 vor, nimmt aber dem Springer g8 das Feld f6 und schwächt e6 sowie die " +
      "Diagonale e8–h5, ohne eine Figur zu entwickeln. Weiß entwickelt sich mit Lb2 und Sf3, " +
      "während dem Springer g8 nur h6 bleibt oder, nach …e5, e7.",
  },

  "1.b3 d5 2.e3 h6": {
    strategy:
      "Verbraucht ein Tempo für einen vorbeugenden Bauernzug gegen einen Springersprung nach " +
      "g5, den niemand droht, während Weiß mit Lb2 und Sf3 fortsetzt und die schwarze " +
      "Entwicklung noch nicht begonnen hat.",
  },

  "1.b3 d5 2.e3 h5": {
    strategy:
      "Beginnt einen Flügelvorstoß, ohne eine Figur zu entwickeln; der Bauer deckt g4 für ein " +
      "späteres …Lg4, schwächt aber g5. Weiß antwortet mit Lb2 und Sf3, während hinter dem " +
      "Vorstoß keine schwarzen Figuren stehen.",
  },

  "1.b3 d5 2.e3 d4": {
    strategy:
      "Gewinnt Raum, doch nach 3.exd4 Dxd4 greift 4.Lb2 sofort die Dame an, sodass Weiß mit " +
      "Tempo entwickelt und Schwarz das Zentrum umsonst geöffnet hat.",
  },

  "1.b3 d5 2.e3 Bg4": {
    strategy:
      "Stellt den Läufer gegen Dxg4 ein. Der e-Bauer hat e2 verlassen, sodass die Dame g4 " +
      "erreicht, und nichts auf schwarzer Seite deckt den Läufer; Schwarz erhält für die " +
      "Figur keine Kompensation.",
  },

  "1.b3 d5 2.e3 Bh3": {
    strategy:
      "Verliert den Läufer ohne Gegenwert durch gxh3 oder Sxh3, da Schwarz auf h3 nicht " +
      "zurückschlagen kann.",
  },

  "1.b3 d5 2.e3 Kd7": {
    strategy:
      "Gibt die Rochade auf und stellt den König auf die d-Linie, wo Lb5+ sofort Schach " +
      "bietet. Der König bleibt im Zentrum, und der Turm h8 ist eingesperrt.",
  },

  "1.b3 d5 2.e3 b5": {
    strategy:
      "Stellt den Bauern ein, denn nichts deckt b5, und Lxb5+ gewinnt ihn mit Schach. Nach " +
      "…c6 oder …Ld7 hat Weiß einen sauberen Mehrbauern und die bessere Entwicklung.",
  },

  "1.b3 d5 2.e3 g5": {
    strategy:
      "Öffnet die lange Diagonale zum Turm h8, den 3.Lb2 sofort angreift. Das Verstellen mit " +
      "…f6 erlaubt Dh5+ und kostet das Rochaderecht, das Verstellen mit …Sf6 erlaubt Lxf6 " +
      "exf6 mit Doppelbauern auf der f-Linie neben dem losen Bauern g5.",
  },
};
