import type { OpeningTexts } from "../book.ts";

// German prose for b3-e5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.b3 e5 2.Bb2": {
    strategy:
      "Stellt den Läufer auf die lange Diagonale gegen e5, das noch ungedeckt ist, sodass " +
      "Schwarz den Bauern mit 2...Sc6 oder 2...d6 hält. Nach 2...Sc6 3.e3 d5 4.Lb5 Ld6 5.f4 " +
      "greift Weiß das breite schwarze Zentrum vom Flügel aus an, und da 5...exf4 durch Lxg7 " +
      "den Turm h8 verliert, deckt Schwarz e5 mit 5...De7 oder 5...f6 ein zweites Mal. Mit " +
      "3.c4 kämpft Weiß stattdessen um d5, wie in Sizilianisch mit vertauschten Farben.",
  },

  "1.b3 e5 2.e3": {
    strategy:
      "Öffnet die Diagonale des Läufers f1 für Lb5 und hält Lb2, Se2 und ein späteres f4 oder " +
      "d4 in Reserve. Meist geht der Zug in die Hauptvariante über, etwa mit 2...Sc6 3.Lb2 d5 " +
      "4.Lb5 Ld6 5.f4. Der Preis ist, dass e5 noch nicht angegriffen wird, sodass Schwarz " +
      "zuerst seinen Aufbau wählen kann, etwa 2...d5 oder 2...Sf6, und Lb2 mit ...Sc6 oder " +
      "...Ld6 beantwortet.",
  },

  "1.b3 e5 2.Nf3": {
    strategy:
      "Greift e5 an und entwickelt, doch 2...e4 vertreibt den Springer: Nach 3.Sd4 c5 4.Sb5 " +
      "d5 steht er abseits, während Schwarz Raum gewinnt, und 3...Sc6 4.Sxc6 dxc6 befreit den " +
      "schwarzen Läufer c8 und öffnet die d-Linie. Gegen 2...Sc6 3.Lb2 kehrt die Partie zu " +
      "vertrauten Larsen-Aufbauten zurück. Solide, doch Schwarz hat die leichtere Wahl.",
  },

  "1.b3 e5 2.c4": {
    strategy:
      "Erreicht durch Zugumstellung eine Struktur der Englischen Eröffnung, mit Lb2 gegen e5 " +
      "und Sc3, g3 oder e3 als Fortsetzung. Schwarz hält e5 mit ...Sc6 oder ...d6 und " +
      "entwickelt sich mit ...Sf6, sodass der Läufer zunächst wenig bewirkt. Solide, aber " +
      "langsamer als die Hauptzüge.",
  },

  "1.b3 e5 2.d3": {
    strategy:
      "Unterstützt ein späteres e4 und schafft Platz für Sd2 in einem ruhigen Aufbau mit g3, " +
      "Lg2 und Sf3. Der Zug greift weder e5 noch d5 an, sodass Schwarz mit ...Sf6, ...Sc6 und " +
      "...d5 ein Bauernzentrum errichtet. Solide, aber passiv.",
  },

  "1.b3 e5 2.d4": {
    strategy:
      "Greift e5 sofort an. Nach 2...exd4 kann nur die Dame zurückschlagen, und 3.Dxd4 Sc6 " +
      "vertreibt sie mit Tempogewinn für Schwarz, während nach 2...e4 der Bauer d4 die lange " +
      "Diagonale verstellt, die b3 für den Läufer geöffnet hat. Spielbar, aber Weiß erreicht " +
      "nicht mehr als mit den Hauptzügen.",
  },

  "1.b3 e5 2.e4": {
    strategy:
      "Besetzt sofort das Zentrum und lässt Lb2 und Sf3 gegen e5 wirken, mit Sc3 und d4 als " +
      "späteren Ideen. Nach ...Sf6 braucht der Bauer e4 Schutz, ...Lc5 zielt auf f2, und " +
      "Schwarz entwickelt sich mit ...Sc6 mühelos. Solide, doch der Zug gibt die Flexibilität " +
      "des Larsen-Aufbaus auf und verspricht nicht mehr als Lb2.",
  },

  "1.b3 e5 2.Nc3": {
    strategy:
      "Entwickelt einen Springer und überwacht e4 und d5, mit e3 oder g3 und Sf3 als " +
      "Fortsetzung. Der Springer verstellt den c-Bauern und die lange Diagonale eines Läufers " +
      "auf b2 und hindert Schwarz nicht daran, mit ...Sf6, ...Sc6 und ...d5 das Zentrum zu " +
      "besetzen. Spielbar, aber der Springer legt sich fest, bevor der weiße Plan feststeht.",
  },

  "1.b3 e5 2.g3": {
    strategy:
      "Bereitet Lg2 für ein doppeltes Fianchetto vor, mit Läufern auf b2 und g2, die auf die " +
      "langen Diagonalen zielen. Der Zug überlässt Schwarz das Zentrum, der sich mit ...Sc6, " +
      "...d6 und ...Sf6 aufstellen oder mit ...d5 Raum gewinnen kann, und e5 wird erst " +
      "angegriffen, wenn Lb2 folgt. Solide, stellt Schwarz aber vor keine Probleme.",
  },

  "1.b3 e5 2.a3": {
    strategy:
      "Verhindert ...Lb4, entwickelt aber nichts und greift nicht ins Zentrum ein. Schwarz " +
      "besetzt es mit ...Sf6, ...Sc6 und ...d5, und der Bauer a3 hat keine weitere Aufgabe, " +
      "sodass Weiß ein Tempo zurückliegt.",
  },

  "1.b3 e5 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und überwacht b5, nimmt aber nicht am Kampf um das Zentrum " +
      "teil, und da der a-Bauer an a3 vorbeigezogen ist, kann nur noch c3 das Feld b4 decken. " +
      "Schwarz entwickelt sich ungehindert mit ...Sf6, ...Sc6 und ...d5.",
  },

  "1.b3 e5 2.c3": {
    strategy:
      "Bereitet d4 für ein breites Zentrum vor, doch der Bauer verstellt die lange Diagonale, " +
      "die b3 für den Läufer öffnen sollte. Schwarz wird mit 2...d5 oder 2...Sf6 zuerst im " +
      "Zentrum aktiv, und Weiß braucht d4 und weitere Tempi, um aufzuholen.",
  },

  "1.b3 e5 2.f3": {
    strategy:
      "Unterstützt ein späteres e4, nimmt aber dem Springer g1 sein bestes Feld f3 und " +
      "schwächt die Diagonale e1–h4, sodass 2...Dh4+ den Zug 3.g3 erzwingt. Weiß tauscht " +
      "Entwicklung gegen eine langsame Struktur, und Schwarz besetzt mit ...Sc6 und ...d5 das " +
      "Zentrum.",
  },

  "1.b3 e5 2.Nh3": {
    strategy:
      "Strebt nach f4 oder g5, doch der Bauer e5 überwacht f4 bereits, und der Springer steht " +
      "am Rand. Nach 2...d5 zielt der Läufer c8 auf h3, und ...Lxh3 gxh3 beschert Weiß einen " +
      "Doppelbauern auf der h-Linie, während Schwarz ein freies Zentrum behält.",
  },

  "1.b3 e5 2.Na3": {
    strategy:
      "Zielt auf c4, von wo der Springer e5 angreifen würde, lässt ihn aber am Rand und fern " +
      "vom Zentrum stehen. Schwarz besetzt das Zentrum mit ...d5, das auch c4 überwacht, und " +
      "entwickelt sich mit ...Sf6 und ...Sc6, während der Springer noch ein brauchbares Feld " +
      "suchen muss.",
  },

  "1.b3 e5 2.Ba3": {
    strategy:
      "Bietet den Tausch des Läufers an, den b3 auf die lange Diagonale bringen sollte, und " +
      "nach 2...Lxa3 3.Sxa3 steht der zurückschlagende Springer am Rand. Schwarz besetzt dann " +
      "mit ...d5 und ...Sf6 das Zentrum.",
  },

  "1.b3 e5 2.h3": {
    strategy:
      "Ein Wartezug, der ...Lg4 verhindert, aber weder eine Figur entwickelt noch um das " +
      "Zentrum kämpft. Schwarz antwortet mit ...Sf6, ...Sc6 und ...d5, während Lb2 noch " +
      "aussteht.",
  },

  "1.b3 e5 2.h4": {
    strategy:
      "Zielt auf h5 und Raum am Königsflügel, nimmt aber nicht am Kampf um das Zentrum teil " +
      "und schwächt g4. Schwarz entwickelt sich mit ...Sf6 und ...Sc6 und gewinnt mit ...d5 " +
      "Raum.",
  },

  "1.b3 e5 2.b4": {
    strategy:
      "Bietet den b-Bauern ohne jede Entwicklung dahinter an: 2...Lxb4 gewinnt ihn, und nach " +
      "3.Lb2 lässt sich der Druck auf e5 mit ...Sc6 oder ...d6 leicht abwehren, sodass Weiß " +
      "ohne Gegenwert einen Bauern weniger hat.",
  },

  "1.b3 e5 2.f4": {
    strategy:
      "Bietet den f-Bauern ohne Entwicklungsvorsprung an: 2...exf4 gewinnt ihn, und die " +
      "geschwächte Diagonale e1–h4 macht ...Dh4+ zu einer ständigen Drohung, etwa 3.Lb2 Dh4+ " +
      "4.g3 fxg3, und nach hxg3 hängt der Turm h1.",
  },

  "1.b3 e5 2.g4": {
    strategy:
      "Gewinnt Raum am Königsflügel, lässt den Bauern aber ungedeckt: ...d5 öffnet dem Läufer " +
      "c8 den Weg gegen g4, und f3, h3 sowie die lange Diagonale sind dauerhaft geschwächt, " +
      "während nichts entwickelt ist.",
  },

  "1.b3 e5": {
    name: "Larsen-Eröffnung: Moderne Variante",
    background:
      "Die meistgespielte und ehrgeizigste Antwort von Schwarz auf 1.b3; sie kommt in etwa 45 " +
      "Prozent der Partien vor.",
  },

  "1.b3 e5 2.Bb2 Nc6": {
    background:
      "Die häufigere der beiden natürlichen Arten, den Bauern e5 nach 2.Lb2 zu decken; die " +
      "andere ist 2...d6. Eine Musterpartie ist Bent Larsen gegen Brian Eley, Hastings 1972, " +
      "die Weiß nach 3.e3 Sf6 4.Lb5 d6 5.Se2 gewann.",
    strategy:
      "Deckt e5 mit einem Entwicklungszug und bereitet ...Sf6 und ...d5 vor, womit Schwarz " +
      "ein breites Bauernzentrum vor dem Läufer b2 errichten würde. Weiß kann das mit 3.e3 " +
      "zulassen und das Zentrum vom Flügel aus angreifen, etwa mit 3...d5 4.Lb5 Ld6 5.f4, " +
      "oder mit 3.c4 sofort um d5 kämpfen, im Stil einer Sizilianischen Verteidigung mit " +
      "vertauschten Farben. Der Springer verstellt den c-Bauern, und Schwarz muss auf Lb5 und " +
      "ein späteres f4 gegen e5 achten.",
  },

  "1.b3 e5 2.Bb2 d6": {
    strategy:
      "Hält e5 mit einem Bauern und die Stellung kompakt; es folgen ...Sf6, ...Sc6 und ...Le7 " +
      "oder ...g6 und ...Lg7. Weiß kann mit e3 und Se2 aufbauen und dann das Zentrum mit d4 " +
      "oder f4 angreifen, oder c4 spielen, mit einem Aufbau wie in der Geschlossenen " +
      "Sizilianischen Verteidigung mit vertauschten Farben oder in der Englischen Eröffnung. " +
      "Der Zug ist solide, aber passiv: Schwarz hat weniger Raum im Zentrum als mit ...Sc6 " +
      "und ...d5, und der Läufer f8 ist vorerst eingeschränkt.",
  },

  "1.b3 e5 2.Bb2 Qe7": {
    strategy:
      "Deckt e5 und nimmt die e-Linie ins Visier, verstellt aber den Läufer f8 und lädt zu " +
      "Sc3 und Sd5 mit Tempo ein. Solide genug, doch ein Springer oder ein Bauer ist der " +
      "natürlichere Verteidiger, und Weiß entwickelt sich mit e3, Sc3 oder c4, während der " +
      "Läufer f8 eingesperrt bleibt.",
  },

  "1.b3 e5 2.Bb2 Bd6": {
    strategy:
      "Deckt e5 mit dem Läufer, doch er steht vor dem d-Bauern, sodass weder ...d6 noch ...d5 " +
      "möglich ist und der Läufer c8 eingesperrt bleibt, bis der Läufer d6 wieder zieht. Sc3 " +
      "und Sb5 gewinnen Zeit gegen ihn, und Weiß kann auch mit e3 und Sf3 aufbauen. Spielbar, " +
      "aber weniger harmonisch als die Deckung von e5 durch einen Springer oder Bauern.",
  },

  "1.b3 e5 2.Bb2 Nf6": {
    strategy:
      "Entwickelt, lässt aber e5 ungedeckt: 3.Lxe5 Sc6 4.Lb2 gewinnt einen sauberen Bauern. " +
      "Der Entwicklungsvorsprung nach ...d5 und ...Ld6 ist nur eine bescheidene Kompensation, " +
      "und Weiß kann ihn mit e3 und Sf3 neutralisieren.",
  },

  "1.b3 e5 2.Bb2 d5": {
    strategy:
      "Greift im Zentrum an, übergeht aber den Angriff auf e5: 3.Lxe5 gewinnt einen sauberen " +
      "Bauern. Der schwarze Entwicklungsvorsprung nach ...Sf6, ...Sc6 und ...Ld6 wiegt ihn " +
      "nicht auf.",
  },

  "1.b3 e5 2.Bb2 Qf6": {
    strategy:
      "Deckt e5, nimmt aber dem Springer g8 sein natürliches Feld f6 und stellt die Dame " +
      "bloß. Sc3 mit Sd5 oder Se4 gewinnt Zeit gegen sie, und sobald der Bauer e5 " +
      "verschwindet, greift auch der Läufer b2 f6 an.",
  },

  "1.b3 e5 2.Bb2 f6": {
    strategy:
      "Hält e5 mit einem Bauern, nimmt aber dem Springer g8 das Feld f6 und öffnet die " +
      "Diagonale e8–h5, sodass Dh5+ möglich wird, sobald der weiße e-Bauer gezogen hat. Der " +
      "Springer muss sich stattdessen über e7 oder h6 entwickeln.",
  },

  "1.b3 e5 2.Bb2 e4": {
    strategy:
      "Gewinnt Raum und weicht dem Angriff auf e5 aus, doch der Bauer ist ungestützt, und die " +
      "Diagonale b2–g7 öffnet sich. Sc3 greift e4 an, f3 oder d3 untergraben ihn, und Schwarz " +
      "muss Zeit für ...Sf6 oder ...d5 aufwenden, um ihn zu halten.",
  },

  "1.b3 e5 2.Bb2 Na6": {
    strategy:
      "Stellt den Springer an den Rand und tut nichts gegen den Angriff auf e5: 3.Lxe5 " +
      "gewinnt einen sauberen Bauern, und der Springer auf a6 steht weit weg vom Zentrum und " +
      "vom Königsflügel.",
  },

  "1.b3 e5 2.Bb2 Nh6": {
    strategy:
      "Schickt den Springer an den Rand, wo er f7 deckt, aber nicht e5: 3.Lxe5 gewinnt " +
      "kampflos einen Bauern.",
  },

  "1.b3 e5 2.Bb2 Ne7": {
    strategy:
      "Verstellt den Läufer f8 und deckt e5 nicht: 3.Lxe5 gewinnt einen Bauern, und die Jagd " +
      "auf den Läufer mit ...Sbc6 oder ...Sg6 bringt Zeit, aber nicht den Bauern zurück.",
  },

  "1.b3 e5 2.Bb2 Qg5": {
    strategy:
      "Deckt e5 entlang der Reihe und zielt auf g2, das Lf1 deckt. 3.Sf3 greift Dame und e5 " +
      "zugleich an, und nachdem die Dame gezogen hat, ist e5 zweimal angegriffen und fällt.",
  },

  "1.b3 e5 2.Bb2 Qh4": {
    strategy:
      "Zielt auf f2 und h2, lässt aber e5 ungedeckt. 3.Lxe5 gewinnt sofort einen Bauern, und " +
      "3.Sf3 greift Dame und e5 zugleich an, sodass die frühe Dame nur Zeit verliert.",
  },

  "1.b3 e5 2.Bb2 Ke7": {
    strategy:
      "Verstellt Dame und Läufer f8, gibt die Rochade auf und lässt e5 hängen: 3.Lxe5 gewinnt " +
      "einen Bauern ohne Gegenwert, und der König bleibt im Zentrum.",
  },

  "1.b3 e5 2.Bb2 Be7": {
    strategy:
      "Entwickelt den Läufer, lässt aber e5 hängen, und ohne den Läufer f8 ist g7 ungedeckt: " +
      "3.Lxe5 gewinnt den Bauern und droht Lxg7 mit Angriff auf h8, sodass Schwarz einen Zug " +
      "für ...Sf6 oder ...Lf6 aufwenden muss und mit einem Bauern weniger dasteht.",
  },

  "1.b3 e5 2.Bb2 Bc5": {
    strategy:
      "Zielt auf f2, lässt aber e5 hängen. 3.Lxe5 gewinnt den Bauern und droht zudem Lxg7 mit " +
      "Angriff auf den Turm h8, da der Läufer f8 g7 nicht mehr deckt.",
  },

  "1.b3 e5 2.Bb2 Bb4": {
    strategy:
      "Entwickelt mit Blick auf c3, lässt aber e5 hängen, und ohne den Läufer f8 ist g7 " +
      "ungedeckt: 3.Lxe5 gewinnt den Bauern und droht Lxg7. Ein späteres c3 gewinnt zudem ein " +
      "Tempo gegen den Läufer.",
  },

  "1.b3 e5 2.Bb2 Ba3": {
    strategy:
      "Läuft in Sxa3 oder Lxa3: Der Läufer ist zweimal angegriffen und ungedeckt, sodass " +
      "schlicht eine Figur ohne Gegenwert verloren geht.",
  },

  "1.b3 e5 2.Bb2 a6": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauern und übergeht den Angriff auf e5: 3.Lxe5 " +
      "gewinnt einen Bauern ohne Gegenwert.",
  },

  "1.b3 e5 2.Bb2 a5": {
    strategy:
      "Zieht einen Randbauern vor, ohne e5 zu decken, sodass 3.Lxe5 einen Bauern gewinnt; der " +
      "Bauer auf a5 schwächt zudem das Feld b5.",
  },

  "1.b3 e5 2.Bb2 b6": {
    strategy:
      "Bereitet ...Lb7 vor, doch 3.Lxe5 nimmt zuerst den e-Bauern, und ...Lb7 kann den Bauern " +
      "nicht zurückgewinnen, da Lf1 g2 deckt.",
  },

  "1.b3 e5 2.Bb2 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet ...Lb7 vor, übergeht aber e5: 3.Lxe5 gewinnt " +
      "den Bauern, und der vorgerückte b-Bauer bietet Weiß weitere Angriffsziele.",
  },

  "1.b3 e5 2.Bb2 c6": {
    strategy:
      "Bereitet ...d5 vor, lässt aber e5 hängen: 3.Lxe5 gewinnt den Bauern, und ...c6 nimmt " +
      "zudem dem Springer b8 sein natürliches Feld c6.",
  },

  "1.b3 e5 2.Bb2 c5": {
    strategy:
      "Gewinnt Raum am Damenflügel, übergeht aber den Angriff auf e5: Nach 3.Lxe5 Sc6 4.Lb2 " +
      "steht Weiß mit einem sauberen Mehrbauern da.",
  },

  "1.b3 e5 2.Bb2 f5": {
    strategy:
      "Kontrolliert e4 wie in der Holländischen Verteidigung, deckt aber e5 nicht: 3.Lxe5 " +
      "gewinnt einen Bauern, und die Diagonale e8–h5 ist geschwächt.",
  },

  "1.b3 e5 2.Bb2 g6": {
    strategy:
      "Bereitet ein Fianchetto vor, doch sobald e5 fällt, reicht die lange Diagonale bis zum " +
      "Turm h8: 3.Lxe5 gewinnt den Bauern mit Angriff auf h8, sodass Schwarz den nächsten Zug " +
      "für ...Sf6 oder ...f6 aufwenden muss.",
  },

  "1.b3 e5 2.Bb2 g5": {
    strategy:
      "Öffnet die lange Diagonale bis h8 und übergeht e5: 3.Lxe5 gewinnt den Bauern und " +
      "greift den Turm h8 an, sodass Schwarz mit ...Sf6 oder ...f6 antworten muss und den " +
      "Königsflügel umsonst geschwächt hat.",
  },

  "1.b3 e5 2.Bb2 h6": {
    strategy:
      "Verschenkt ein Tempo mit einem Randbauern und übergeht den Angriff auf e5: 3.Lxe5 " +
      "gewinnt einen Bauern.",
  },

  "1.b3 e5 2.Bb2 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel, ohne e5 zu decken: 3.Lxe5 gewinnt den Bauern, und der " +
      "Bauer auf h5 schwächt g5 und g6.",
  },

  "1.b3 e5 2.e3 Nc6": {
    strategy:
      "Entwickelt einen Springer Richtung Zentrum und deckt e5, bevor Lb2 den Bauern " +
      "angreift. Der d-Bauer bleibt frei für ...d5, und nach 3.Lb2 d5 4.Lb5 Ld6 5.f4 greift " +
      "Weiß das breite schwarze Zentrum vom Flügel aus an. Der Springer verstellt den " +
      "c-Bauern, was ...c5 vorerst ausschließt.",
  },

  "1.b3 e5 2.e3 d5": {
    strategy:
      "Besetzt sofort das Zentrum, sodass Schwarz das Bauernpaar d5 und e5 aufgebaut hat, " +
      "bevor Weiß eine Figur entwickelt. Der Bauer deckt e5 nicht, daher wird 3.Lb2 mit " +
      "...Sc6 oder ...Ld6 beantwortet, und nach 3...Sc6 4.Lb5 Ld6 5.f4 greift Weiß das breite " +
      "Zentrum vom Flügel aus an.",
  },

  "1.b3 e5 2.e3 Nf6": {
    strategy:
      "Entwickelt Richtung Zentrum, überwacht e4 und d5 und hält sowohl ...d5 als auch ...d6 " +
      "offen. Der Springer deckt e5 nicht, daher muss Schwarz 3.Lb2 mit ...Sc6 oder ...d6 " +
      "beantworten, und nach 3...Sc6 4.Lb5 hält er den Bauern mit ...d6 oder ...Ld6.",
  },

  "1.b3 e5 2.e3 d6": {
    strategy:
      "Deckt e5 mit einem Bauern und öffnet die Diagonale des Läufers c8, ein solider Aufbau. " +
      "Weiß kann mit Lb2 und Se2 fortsetzen und dann mit d4 oder f4 das Zentrum angreifen, " +
      "während Schwarz mit ...Sf6, ...Sc6 und ...Le7 folgt. Der Preis ist eine gewisse " +
      "Passivität, da ein Bauer auf d6 weniger Raum im Zentrum beansprucht als einer auf d5.",
  },

  "1.b3 e5 2.e3 Be7": {
    strategy:
      "Bereitet die Rochade vor und lässt die Bauern flexibel, doch der Läufer deckt weder " +
      "e5, noch kämpft er um das Zentrum. 3.Lb2 greift e5 sofort an, sodass Schwarz den " +
      "nächsten Zug für ...d6 oder ...Sc6 aufwenden muss.",
  },

  "1.b3 e5 2.e3 Bd6": {
    strategy:
      "Deckt e5 und bereitet die Rochade vor, doch der Läufer blockiert den Bauern d7, sodass " +
      "weder ...d6 noch ...d5 möglich ist, bevor er erneut zieht. Auch der Läufer c8 bleibt " +
      "eingesperrt, solange Schwarz keinen Zug für ...b6 aufwendet.",
  },

  "1.b3 e5 2.e3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, ein Fianchetto als Spiegelbild des weißen, mit dem Läufer gegen " +
      "g2. e5 ist weiterhin ungedeckt, daher erzwingt 3.Lb2 zuerst eine Deckung wie ...Sc6 " +
      "oder ...d6, denn 3...Lb7 verliert den Bauern nach 4.Lxe5.",
  },

  "1.b3 e5 2.e3 c6": {
    strategy:
      "Bereitet ...d5 mit dem Bauern c6 als Stütze vor und hält Läufer und Springer von b5 " +
      "fern. Allerdings entwickelt der Zug nichts, und 3.Lb2 erzwingt ...d6 oder einen " +
      "Damenzug wie ...Dc7, um e5 zu halten.",
  },

  "1.b3 e5 2.e3 c5": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet ...Sc6 und ...d6 vor, doch mit Bauern auf c5 " +
      "und e5 kann kein schwarzer Bauer mehr d5 decken, ein Loch für einen weißen Springer " +
      "nach c4 und Sc3. Außerdem braucht e5 gegen 3.Lb2 noch eine Deckung.",
  },

  "1.b3 e5 2.e3 g6": {
    strategy:
      "Bereitet ...Lg7 vor, das e5 über die lange Diagonale deckt, sodass Schwarz 3.Lb2 mit " +
      "3...Lg7 beantworten kann. Der Aufbau ist solide, aber langsam, und der Bauer e5 " +
      "verstellt dann die Diagonale des Läufers, der daher eher verteidigt als angreift.",
  },

  "1.b3 e5 2.e3 Na6": {
    strategy:
      "Ein Randspringer, der b4 und c5 ins Auge fasst, aber e5 nicht deckt, sodass Schwarz " +
      "nach 3.Lb2 einen weiteren Zug für den Bauern aufwenden muss. Außerdem verdoppelt " +
      "3.Lxa6 bxa6 die schwarzen a-Bauern.",
  },

  "1.b3 e5 2.e3 Qe7": {
    strategy:
      "Deckt e5, sperrt aber den Läufer f8 ein, dessen einzige offene Diagonale über e7 " +
      "führt. 3.La3 greift die Dame sofort auf der Diagonale a3–f8 an und erzwingt ...d6, " +
      "...c5 oder einen weiteren Damenzug.",
  },

  "1.b3 e5 2.e3 Qf6": {
    strategy:
      "Bringt die Dame früh ins Spiel und nimmt dem Königsspringer das Feld f6. Sie deckt e5, " +
      "doch 3.Sc3 droht Sd5 mit Angriff auf die Dame und c7, und auch Se4 gewinnt Zeit gegen " +
      "sie.",
  },

  "1.b3 e5 2.e3 Qg5": {
    strategy:
      "Die Dame zielt auf g2, das der Läufer f1 deckt, sodass nichts droht. 3.Sf3 greift Dame " +
      "und e5 zugleich an, und nach dem Rückzug nach e7 oder f6 hat sich Weiß mit Tempo " +
      "entwickelt.",
  },

  "1.b3 e5 2.e3 Qh4": {
    strategy:
      "Die Dame greift nichts an, da f2 und h2 beide gedeckt sind. 3.Sf3 trifft Dame und e5 " +
      "zugleich, und die Dame braucht einen zweiten Zug nach e7 oder f6, Felder, die sie " +
      "sofort hätte erreichen können.",
  },

  "1.b3 e5 2.e3 Bc5": {
    strategy:
      "Der Bauer e3 entschärft den Läufer auf der Diagonale a7–g1, und 3.d4 greift Läufer und " +
      "e5 zugleich an. Nach 3...exd4 4.exd4 muss der Läufer erneut ziehen, während Weiß einen " +
      "Bauern auf d4 und offene Diagonalen für beide Läufer hat.",
  },

  "1.b3 e5 2.e3 Bb4": {
    strategy:
      "Der Läufer greift nur den Bauern d2 an, der viermal gedeckt ist, und 3.a3 oder 3.c3 " +
      "vertreibt ihn sofort wieder. Außerdem bleibt e5 gegen Lb2 ungedeckt.",
  },

  "1.b3 e5 2.e3 Nh6": {
    strategy:
      "Ein Randspringer, der f5 und g4 kontrolliert, aber nicht das Zentrum, und e5 ungedeckt " +
      "lässt, das 3.Lb2 sofort angreift. Anders als ...Sf6 hat er keinen Einfluss auf d5 oder " +
      "e4.",
  },

  "1.b3 e5 2.e3 Ne7": {
    strategy:
      "Verstellt Läufer f8 und Dame und deckt e5 nicht, das 3.Lb2 sofort angreift. Der " +
      "Springer kann später nach c6 oder g6 gelangen, aber nur um den Preis eines weiteren " +
      "Zuges.",
  },

  "1.b3 e5 2.e3 a6": {
    strategy:
      "Verhindert Lb5, entwickelt aber nichts und lässt e5 ungedeckt, sodass Schwarz nach " +
      "3.Lb2 einen weiteren Zug für den Bauern aufwenden muss.",
  },

  "1.b3 e5 2.e3 a5": {
    strategy:
      "Bereitet ...a4 gegen den Bauern b3 vor, entwickelt aber nichts, und 3.Lb2 greift den " +
      "ungedeckten Bauern e5 sofort an, sodass Schwarz den nächsten Zug stattdessen für " +
      "dessen Deckung aufwendet.",
  },

  "1.b3 e5 2.e3 f6": {
    strategy:
      "Deckt e5, nimmt aber dem Königsspringer das Feld f6 und öffnet die Diagonale e8–h5: " +
      "3.Dh5+ erzwingt ...g6 oder ...Ke7. Schwarz bleibt mit geschwächten weißen Feldern und " +
      "ohne Entwicklung zurück.",
  },

  "1.b3 e5 2.e3 f5": {
    strategy:
      "Gewinnt Raum am Königsflügel, öffnet aber die Diagonale e8–h5: 3.Dh5+ erzwingt ...g6 " +
      "oder ...Ke7. Zudem ist der Bauer e5 gegen Lb2 ungedeckt, sodass Schwarz ihn mit " +
      "geschwächtem König halten muss.",
  },

  "1.b3 e5 2.e3 g5": {
    strategy:
      "Gewinnt Raum, schafft aber Löcher auf f5 und h5, und 3.h4 greift den Bauern sofort an. " +
      "Der Königsflügel ist geschwächt, ohne dass Schwarz dafür Entwicklung erhält.",
  },

  "1.b3 e5 2.e3 h6": {
    strategy:
      "Kontrolliert g5, tut aber nichts für Entwicklung oder Zentrum. 3.Lb2 greift dann e5 " +
      "an, sodass Schwarz einen weiteren Zug für ...d6 oder ...Sc6 aufwenden muss.",
  },

  "1.b3 e5 2.e3 h5": {
    strategy:
      "Entwickelt nichts, und der Bauer h5 ist nur durch den Turm gedeckt, sodass 3.Le2 mit " +
      "der Dame dahinter ihn zweimal angreift. Auch e5 ist gegen Lb2 weiterhin ungedeckt.",
  },

  "1.b3 e5 2.e3 e4": {
    strategy:
      "Gewinnt Raum, doch der vorgerückte Bauer hat keine Stütze, und 3.d3 greift ihn sofort " +
      "an; nach 3...exd3 4.Lxd3 ist der weiße Läufer entwickelt und der schwarze e-Bauer " +
      "verschwunden. Der Vorstoß öffnet außerdem die lange Diagonale für Lb2 in Richtung g7.",
  },

  "1.b3 e5 2.e3 Ke7": {
    strategy:
      "Gibt die Rochade auf und verstellt Dame und Läufer f8 ohne jede Gegenleistung. 3.La3+ " +
      "gibt sofort auf der Diagonale a3–f8 Schach: ...d6 lässt einen gefesselten Bauern " +
      "zurück, ...c5 verliert nach Lxc5+ einen Bauern, und alles andere ist ein weiterer " +
      "Königszug.",
  },

  "1.b3 e5 2.e3 Ba3": {
    strategy:
      "Läuft in die Diagonale des Läufers c1: 3.Lxa3 oder 3.Sxa3 gewinnt die Figur ohne " +
      "Gegenleistung.",
  },

  "1.b3 e5 2.e3 b5": {
    strategy:
      "Stellt den Bauern ein: 3.Lxb5 schlägt ihn umsonst, da nichts b5 deckt und Schwarz " +
      "keinen Entwicklungsvorsprung als Ausgleich hat.",
  },
};
