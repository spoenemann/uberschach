import type { OpeningTexts } from "../book.ts";

// German prose for g3-Nf6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.g3 Nf6 2.Bg2": {
    strategy:
      "Vollendet das Fianchetto: Der Läufer zielt über die lange Diagonale auf das Zentrum und " +
      "b7, und der König ist nur noch einen Zug von der Rochade entfernt. Der Preis: Weiß " +
      "besitzt noch kein Zentrumsfeld, sodass Schwarz mit Bauern Raum beanspruchen kann und Weiß " +
      "später beweisen muss, dass der Druck des Läufers mehr wiegt.",
  },

  "1.g3 Nf6 2.Nf3": {
    strategy:
      "Entwickelt einen Springer zum Zentrum und kontrolliert e5, sodass Schwarz es nicht " +
      "einfach besetzen kann. Der Zug bereitet die schnelle Rochade vor und hält die weiße " +
      "Bauernstruktur flexibel, doch Weiß hat noch keinen Bauern im Zentrum, das Spiel bleibt " +
      "ruhig und manövrierend, und Schwarz kann Raum nehmen.",
  },

  "1.g3 Nf6 2.c4": {
    strategy:
      "Kämpft von der Flanke aus um d5 und lässt beide Springer und den d-Bauern frei in der " +
      "Wahl ihrer Felder. Ziel ist Druck auf das Zentrum statt seiner Besetzung, was Geduld " +
      "verlangt: Schwarz kann Raum nehmen, und Weiß muss ihn später mit dem fianchettierten " +
      "Läufer und Bauernbrüchen untergraben.",
  },

  "1.g3 Nf6 2.d4": {
    strategy:
      "Besetzt das Zentrum mit einem Bauern und öffnet den Weg für den Läufer und eine schnelle " +
      "Entwicklung. Der Zug ist solide, legt den d-Bauern aber fest, bevor der schwarze Aufbau " +
      "klar ist, und Schwarz kann das Zentrum sofort angreifen.",
  },

  "1.g3 Nf6 2.d3": {
    strategy:
      "Unterstützt e4 und befreit den Läufer c1 für einen ruhigen Aufbau um den fianchettierten " +
      "Läufer. Der Zug ist solide, aber bescheiden: Schwarz besetzt sofort das Zentrum, und das " +
      "weiße Spiel bleibt passiv, bis e4 gespielt werden kann.",
  },

  "1.g3 Nf6 2.Nc3": {
    strategy:
      "Entwickelt den Springer, überwacht d5 und e4 und unterstützt ein späteres e4. Er " +
      "verstellt jedoch den c-Bauern, sodass englische und katalanische Pläne mit c4 vorerst " +
      "ausscheiden, und Schwarz kann sofort Raum gewinnen und den Springer mit einem Bauern " +
      "vertreiben.",
  },

  "1.g3 Nf6 2.c3": {
    strategy:
      "Bereitet d4 mit einer soliden Bauernkette vor, entwickelt aber nichts und nimmt dem " +
      "Damenspringer das Feld c3. Der Bauer kämpft nicht um d5, sodass Schwarz mit ...d5 das " +
      "Zentrum besetzt und sich ungehindert entwickelt.",
  },

  "1.g3 Nf6 2.e3": {
    strategy:
      "Unterstützt d4 und bereitet einen ruhigen Aufbau vor. Der Zug ist solide, aber passiv: " +
      "Sobald d4 folgt, sperrt der Bauer e3 den Läufer c1 ein, der dann b3 braucht, um ins Spiel " +
      "zu kommen, und Schwarz besetzt sofort das Zentrum.",
  },

  "1.g3 Nf6 2.b3": {
    strategy:
      "Bereitet Lb2 vor, sodass nach Lg2 beide Läufer von den langen Diagonalen aus auf das " +
      "Zentrum wirken. Der Zug ist solide, aber im Zentrum langsam: Schwarz kann sofort " +
      "zentralen Raum beanspruchen oder die lange Diagonale mit einem eigenen Fianchetto " +
      "streitig machen.",
  },

  "1.g3 Nf6 2.f4": {
    strategy:
      "Kontrolliert e5 und zielt auf einen Angriff am Königsflügel, wie eine Holländische " +
      "Verteidigung mit vertauschten Farben. Der Zug ist solide, lockert aber die " +
      "Königsstellung: Ohne den f-Bauern liegt die Diagonale g1–a7 zum rochierten König hin " +
      "offen, und Schwarz besetzt sofort das Zentrum.",
  },

  "1.g3 Nf6 2.Nh3": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er den f-Bauern nicht verstellt und nach f4 gehen " +
      "kann, aber kein Zentrumsfeld überwacht. Schwarz besetzt sofort das Zentrum, und Sf3 hätte " +
      "dieselbe Figur auf ein besseres Feld entwickelt.",
  },

  "1.g3 Nf6 2.Bh3": {
    strategy:
      "Entwickelt den Läufer auf die Diagonale c8–h3, statt ihn zu fianchettieren. Sobald " +
      "Schwarz seinen weißfeldrigen Läufer befreit, steht er diesem gegenüber, und entweder " +
      "werden die Läufer getauscht, sodass die durch g3 geschwächten weißen Felder ihren " +
      "Verteidiger verlieren, oder Weiß zieht mit Tempoverlust nach g2 zurück.",
  },

  "1.g3 Nf6 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er b5 und c4 ins Auge fasst, aber nichts im " +
      "Zentrum deckt. Schwarz besetzt mit ...d5 das Zentrum, womit er auch c4 überwacht, und " +
      "dieselbe Figur wäre auf c3 wirksamer.",
  },

  "1.g3 Nf6 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 vor, doch nichts deckt den Bauern: Nach " +
      "...e6 greift ihn der Läufer f8 an, und Weiß muss ein weiteres Tempo für seine Deckung " +
      "aufwenden oder ihn hergeben. Schwarz besetzt unterdessen das Zentrum.",
  },

  "1.g3 Nf6 2.a3": {
    strategy:
      "Verbraucht ein Tempo für einen Bauernzug am Damenflügel, der b4 vorbereitet, aber nichts " +
      "für das Zentrum oder die Entwicklung tut. Schwarz gewinnt sofort Raum im Zentrum.",
  },

  "1.g3 Nf6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und kontrolliert b5, verbraucht aber ein Tempo für einen " +
      "Randbauernzug, der nichts für das Zentrum oder die Entwicklung tut. Schwarz besetzt " +
      "sofort das Zentrum und entwickelt sich ungehindert.",
  },

  "1.g3 Nf6 2.f3": {
    strategy:
      "Bereitet e4 vor, nimmt aber dem Springer g1 das Feld f3, verstellt die lange Diagonale, " +
      "die das Fianchetto nach g3 öffnen sollte, und lockert die Diagonale g1–a7. Schwarz " +
      "besetzt sofort das Zentrum.",
  },

  "1.g3 Nf6 2.h3": {
    strategy:
      "Ein Wartezug, der ...Sg4 und ...Lg4 verhindert, aber ein Tempo kostet, während Zentrum " +
      "und Entwicklung unberührt bleiben. Schwarz besetzt sofort das Zentrum, ohne dass Weiß " +
      "dafür etwas vorzuweisen hat.",
  },

  "1.g3 Nf6 2.h4": {
    strategy:
      "Gewinnt Raum am Königsflügel für h5, verbraucht aber ohne ein ...g6 als Angriffsziel ein " +
      "Tempo für einen Randbauernzug, während Zentrum und Entwicklung warten. Außerdem lockert " +
      "der Zug die Bauern vor dem eigenen König, und Schwarz besetzt sofort das Zentrum.",
  },

  "1.g3 Nf6 2.g4": {
    strategy:
      "Stellt einen Bauern ein: Nichts deckt g4, sodass 2...Sxg4 ihn kostenlos gewinnt, und " +
      "der Königsflügel bleibt geschwächt.",
  },

  "1.g3 Nf6 2.e4": {
    strategy:
      "Lässt den e-Bauern ungedeckt: Nach 2...Sxe4 greift 3.Lg2 den Springer an, doch ...d5 " +
      "hält ihn, und Schwarz behält einen sauberen Mehrbauern.",
  },

  "1.g3 Nf6": {
    name: "Königsfianchetto: Indische Verteidigung",
  },

  "1.g3 Nf6 2.Bg2 d5": {
    strategy:
      "Beansprucht das Zentrum mit einem Bauern, der natürlichen Ergänzung zum Springer auf f6. " +
      "Der Bauer d5 wird zum Ziel des weißen Läufers und der Damenflügelbauern, doch dafür hat " +
      "Schwarz Raum und ein gesundes Spiel. Ein strategischer Kampf um d5 und die lange " +
      "Diagonale, meist ohne frühes Feuerwerk.",
  },

  "1.g3 Nf6 2.Bg2 g6": {
    strategy:
      "Kopiert den weißen Aufbau: Der Läufer beherrscht die lange Diagonale a1–h8, und der König " +
      "rochiert dahinter. Schwarz baut aus der Distanz auf und lässt das Zentrum offen, sodass " +
      "Weiß die Struktur bestimmt. Ein langsames Manövrierspiel, in dem beide langen Diagonalen " +
      "im Spiel sind.",
  },

  "1.g3 Nf6 2.Bg2 e5": {
    strategy:
      "Nimmt mit einem Bauern Raum im Zentrum und öffnet den Läufer f8. Der Bauer braucht " +
      "Unterstützung, sobald ein Springer ihn angreift, und das ist der Preis des Raums. Der " +
      "weiße Läufer auf g2 wacht über das Zentrum, daher ist die Partie ein Kampf um die Mitte " +
      "und kein ruhiger Aufbau.",
  },

  "1.g3 Nf6 2.Bg2 c5": {
    strategy:
      "Kontrolliert d4 von der Flanke aus, statt das Zentrum zu besetzen, und hält jeden Aufbau " +
      "offen. Der Preis: Schwarz beansprucht noch kein Zentrumsfeld, sodass Weiß zuerst Raum " +
      "nehmen kann. Ein flexibles Spiel, das eher durch Manövrieren als durch frühen Kontakt " +
      "entschieden wird.",
  },

  "1.g3 Nf6 2.Bg2 e6": {
    strategy:
      "Öffnet den Läufer f8 und bereitet …d5 für einen soliden Aufbau vor. Der Preis ist der " +
      "Läufer c8, der nach …d5 hinter dem Bauern eingesperrt bleibt und später befreit werden " +
      "muss. Ein ruhiges Spiel mit gesunder Struktur und wenig Risiko.",
  },

  "1.g3 Nf6 2.Bg2 Nc6": {
    strategy:
      "Entwickelt einen Springer in Richtung d4 und e5 und verstellt die lange Diagonale, " +
      "sodass Lxc6 nur den besten weißen Läufer hergeben würde. Der Zug stellt jedoch keinen " +
      "Bauern ins Zentrum, sodass Weiß mit d4 oder c4 Raum gewinnen kann und Schwarz " +
      "reagieren muss. Solide, aber weniger flexibel als …d5 oder …e5.",
  },

  "1.g3 Nf6 2.Bg2 c6": {
    strategy:
      "Bereitet …d5 hinter einer soliden Bauernkette vor und schließt die lange Diagonale " +
      "vorsorglich. Der c-Bauer ist festgelegt, bevor Weiß seinen Aufbau zeigt, und der Springer " +
      "b8 verliert das Feld c6 und entwickelt sich meist über d7. Solide, aber langsamer als " +
      "sofort …d5.",
  },

  "1.g3 Nf6 2.Bg2 d6": {
    strategy:
      "Bereitet …e5 und einen kompakten Aufbau vor und öffnet die Diagonale des Läufers c8. Der " +
      "Zug überlässt Weiß Raum im Zentrum, sodass Weiß ein breites Bauernzentrum aufbauen kann. " +
      "Solide, aber passiv.",
  },

  "1.g3 Nf6 2.Bg2 Na6": {
    strategy:
      "Stellt einen Springer an den Rand, von wo er b4 und c5 ins Auge fasst, aber nichts für " +
      "das Zentrum tut. Weiß gewinnt Zeit, sich zu entwickeln und das Zentrum zu besetzen, und " +
      "ein Bauer auf d4 nähme zudem das Feld c5.",
  },

  "1.g3 Nf6 2.Bg2 Rg8": {
    strategy:
      "Verschenkt ein Tempo und gibt die kurze Rochade endgültig auf, ohne der Entwicklung oder " +
      "dem Zentrum zu helfen. Der Turm hat auf g8 keine Aufgabe, und Weiß entwickelt sich " +
      "einfach weiter.",
  },

  "1.g3 Nf6 2.Bg2 a6": {
    strategy:
      "Ein Wartezug, der …b5 vorbereitet, doch dieser Vorstoß würde den Turm a8 weiterhin an " +
      "Lxa8 verlieren, solange die lange Diagonale offen ist. Er tut nichts für das Zentrum oder " +
      "die Entwicklung.",
  },

  "1.g3 Nf6 2.Bg2 a5": {
    strategy:
      "Gewinnt etwas Raum am Damenflügel und kontrolliert b4, tut aber nichts für das Zentrum " +
      "oder die Entwicklung. Weiß entwickelt sich ungestört.",
  },

  "1.g3 Nf6 2.Bg2 g5": {
    strategy:
      "Gewinnt Raum am Königsflügel, schwächt aber f5 und h5 und die Deckung eines später " +
      "rochierten Königs. Der Bauer ist zudem angreifbar: 3.d4 droht Lxg5, und 3.h4 greift " +
      "ihn direkt an, sodass Schwarz weitere Züge für ihn aufwenden muss.",
  },

  "1.g3 Nf6 2.Bg2 h6": {
    strategy:
      "Ein vorbeugender Bauernzug, der einem noch hinter den eigenen Bauern eingesperrten Läufer " +
      "das Feld g5 nimmt. Er hilft weder der Entwicklung noch dem Zentrum, und Weiß entwickelt " +
      "sich in aller Ruhe.",
  },

  "1.g3 Nf6 2.Bg2 h5": {
    strategy:
      "Bereitet …h4 vor, um Linien gegen g3 zu öffnen, schwächt aber g5 und entwickelt nichts. " +
      "Weiß kann den Bauern mit h4 aufhalten oder sich einfach entwickeln.",
  },

  "1.g3 Nf6 2.Bg2 Ng8": {
    strategy:
      "Nimmt den ersten Zug zurück. Schwarz hat zwei Tempi verbraucht, um zur " +
      "Ausgangsstellung zurückzukehren, während Weiß den Läufer entwickelt hat und im Zentrum " +
      "freie Hand behält.",
  },

  "1.g3 Nf6 2.Bg2 Ng4": {
    strategy:
      "Fasst f2 und h2 ins Auge, doch beide sind gedeckt, und 3.h3 vertreibt den Springer " +
      "sofort; ein Rückzug nach e5 bringt Weiß nur weiteren Zeitgewinn, da der Springer erneut " +
      "angegriffen wird. Nach dem Rückzug nach f6 hat Schwarz zwei Züge mit dem Springer " +
      "verbraucht, während Weiß h3 gespielt hat.",
  },

  "1.g3 Nf6 2.Bg2 Nh5": {
    strategy:
      "Stellt den Springer an den Rand, wo er g3 ins Auge fasst, ihn aber nicht schlagen kann, " +
      "da der Bauer von h2 und f2 gedeckt ist. Der Zug tut nichts für das Zentrum oder die " +
      "Entwicklung, und Weiß bekommt einen Zug geschenkt.",
  },

  "1.g3 Nf6 2.Bg2 b6": {
    strategy:
      "Öffnet die lange Diagonale, und 3.Lxa8 schlägt den Turm, da keine schwarze Figur auf " +
      "a8 zurückschlagen kann; selbst wenn der Läufer dort später eingesperrt wird, bleibt " +
      "Weiß mindestens die Qualität voraus. Ein Damenfianchetto funktioniert erst, wenn die " +
      "Diagonale zuvor geschlossen ist, etwa durch …d5 oder …c6.",
  },

  "1.g3 Nf6 2.Bg2 b5": {
    strategy:
      "Öffnet ebenfalls die lange Diagonale: 3.Lxa8 schlägt den Turm, da keine schwarze Figur " +
      "auf a8 zurückschlagen kann, und Weiß bleibt mindestens die Qualität voraus, selbst " +
      "wenn der Läufer dort später eingesperrt wird. Der Raumgewinn am Damenflügel wiegt das " +
      "Material nicht auf.",
  },

  "1.g3 Nf6 2.Bg2 Ne4": {
    strategy:
      "Läuft in die Diagonale des Läufers: 3.Lxe4 gewinnt den Springer, da nichts e4 deckt " +
      "und Schwarz keinen Bauern auf d5 hat, um zurückzuschlagen.",
  },

  "1.g3 Nf6 2.Bg2 Nd5": {
    strategy:
      "Stellt den Springer ein: 3.Lxd5 gewinnt ihn, da der Bauer d7 der Dame das " +
      "Zurückschlagen auf d5 versperrt und nichts sonst das Feld deckt.",
  },
};
