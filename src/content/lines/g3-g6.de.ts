import type { OpeningTexts } from "../book.ts";

// German prose for g3-g6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.g3 g6 2.Bg2": {
    strategy:
      "Vervollständigt das Fianchetto: Der Läufer auf der langen Diagonale wirkt aus der Ferne " +
      "auf b7 und auf das Zentrum. Weiß hält den Bauernaufbau flexibel, lässt Schwarz aber die " +
      "Freiheit, als Erster das Zentrum zu besetzen.",
  },

  "1.g3 g6 2.c4": {
    strategy:
      "Gewinnt Raum am Damenflügel und kontrolliert d5; es entsteht eine Englische Eröffnung mit " +
      "frühem g3. Der Bauer besetzt kein Zentrumsfeld, sodass Schwarz sich natürlich entwickelt " +
      "und sich einen Anteil am Zentrum sichert.",
  },

  "1.g3 g6 2.Nf3": {
    strategy:
      "Entwickelt den Springer, deckt d4 und e5 und lässt den Bauernaufbau offen. Schwarz " +
      "entwickelt sich frei und kann Raum im Zentrum nehmen, bevor Weiß sich festgelegt hat.",
  },

  "1.g3 g6 2.b3": {
    strategy:
      "Bereitet Lb2 vor, um die lange Diagonale streitig zu machen, doch 2...Lg7 greift über das " +
      "leere Feld b2 den Turm a1 an, und 3.Lb2 Lxb2 kostet eine Figur, da nichts b2 deckt. Weiß " +
      "muss die Diagonale erst verstellen, sodass das doppelte Fianchetto einen Zusatzzug kostet " +
      "und den Damenflügel lockert.",
  },

  "1.g3 g6 2.c3": {
    strategy:
      "Bereitet d4 mit Bauernunterstützung vor und verstellt die lange Diagonale schon vor " +
      "...Lg7. Der Zug entwickelt keine Figur und nimmt dem Damenspringer das Feld c3, während " +
      "Schwarz sich frei entwickelt und das Zentrum besetzt. Er ist solide, aber passiv.",
  },

  "1.g3 g6 2.d3": {
    strategy:
      "Unterstützt ein späteres e4, öffnet den Läufer c1 und bereitet einen kompakten Aufbau mit " +
      "Königsflügel-Fianchetto, Sf3 und Rochade vor. Der Zug ist solide, aber langsam, da er " +
      "keinen Raum im Zentrum gewinnt und Schwarz erlaubt, sich zu entwickeln und das Zentrum zu " +
      "besetzen.",
  },

  "1.g3 g6 2.d4": {
    strategy:
      "Besetzt sofort das Zentrum und erreicht dieselbe Stellung wie nach der Eröffnung mit 1.d4 " +
      "und g3 als zweitem Zug. Der Zug ist solide, gibt aber die Flexibilität von 1.g3 auf, und " +
      "Schwarz greift das Zentrum sofort an.",
  },

  "1.g3 g6 2.e3": {
    strategy:
      "Bereitet einen kompakten Aufbau am Königsflügel vor und hält d4 in Reserve. Der Zug ist " +
      "solide, aber langsam: Der Bauer e3 sperrt den Läufer c1 ein, und Schwarz entwickelt sich " +
      "frei und besetzt das Zentrum.",
  },

  "1.g3 g6 2.e4": {
    strategy:
      "Besetzt sofort das Zentrum und erreicht dieselbe Stellung wie nach der Eröffnung mit 1.e4 " +
      "und g3 als zweitem Zug. Lg2 stützt dann den Bauern über die lange Diagonale, und ein " +
      "kompakter Aufbau mit d3, Sf3 und Rochade folgt. Noch deckt nichts den Bauern e4, sodass " +
      "Schwarz ihn mit ...d5 angreifen kann, wonach 3.exd5 Dxd5 den Turm h1 bedroht, oder ruhig " +
      "aufbauen kann.",
  },

  "1.g3 g6 2.f4": {
    strategy:
      "Kontrolliert e5 und bereitet vor, den Königsflügel mit Fianchetto und Rochade zu " +
      "entwickeln. Der Bauer schwächt e4 und öffnet die Diagonale g1-a7, bevor der König in " +
      "Sicherheit ist, sodass Schwarz sich entwickelt und auf das Zentrum zielt.",
  },

  "1.g3 g6 2.Nc3": {
    strategy:
      "Entwickelt den Damenspringer und überwacht d5 und e4, mit dem Ziel eines Aufbaus am " +
      "Königsflügel mit Fianchetto. Der Springer verstellt den c-Bauern, sodass c4 warten muss, " +
      "und Schwarz kann sich entwickeln und das Zentrum besetzen. Der Zug ist solide, legt den " +
      "Springer aber fest, bevor Weiß einen Bauernaufbau gewählt hat.",
  },

  "1.g3 g6 2.a3": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauernzug, um b4 vorzubereiten, und tut nichts für das " +
      "Zentrum oder die Entwicklung. Schwarz entwickelt sich und gewinnt im Zentrum Raum, " +
      "während Weiß noch keine Figur entwickelt hat.",
  },

  "1.g3 g6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und nimmt Schwarz das Feld b5, lockert aber b4 und das Feld " +
      "b3 und lässt das Zentrum unberührt. Schwarz entwickelt sich und baut in aller Ruhe im " +
      "Zentrum auf.",
  },

  "1.g3 g6 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel, lässt aber b2 leer, sodass 2...Lg7 sofort den Turm a1 " +
      "angreift und 3.Lb2 Lxb2 eine Figur kostet. Weiß muss einen Zug zum Verstellen der " +
      "Diagonale aufwenden, und der Bauer b4 wird zum Angriffsziel für ...a5.",
  },

  "1.g3 g6 2.f3": {
    strategy:
      "Verstellt die lange Diagonale des Läufers, der nach g2 soll, und nimmt dem Königsspringer " +
      "das Feld f3. Zudem öffnet der Zug die Diagonale g1-a7 zum weißen König hin und tut nichts " +
      "für das Zentrum, sodass Schwarz sich entwickelt und das Zentrum besetzt.",
  },

  "1.g3 g6 2.h3": {
    strategy:
      "Nimmt dem schwarzen Läufer und Springer das Feld g4, verbraucht aber ein Tempo für einen " +
      "Randbauernzug, der Weiß nichts bringt. Schwarz entwickelt sich und besetzt als Erster das " +
      "Zentrum.",
  },

  "1.g3 g6 2.h4": {
    strategy:
      "Bereitet h5 gegen den Bauern g6 vor, doch Schwarz kann das mit ...h5 verhindern oder sich " +
      "einfach entwickeln und das Zentrum besetzen. Der Vorstoß lässt den Bauern g3 nur noch von " +
      "f2 gedeckt und entwickelt nichts.",
  },

  "1.g3 g6 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er b5 und c4 ins Auge fasst, aber den a-Bauern " +
      "blockiert und nichts im Zentrum deckt. Schwarz besetzt mit ...d5 das Zentrum, womit er " +
      "auch c4 überwacht, und entwickelt sich frei, während der Springer weitere Züge braucht, " +
      "um ein gutes Feld zu finden.",
  },

  "1.g3 g6 2.Bh3": {
    strategy:
      "Stellt den Läufer nach h3, wo er nur den gedeckten Bauern d7 angreift, statt auf die " +
      "lange Diagonale. Nach ...d5 steht ihm der Läufer c8 gegenüber, sodass die Läufer " +
      "getauscht werden oder Weiß einen weiteren Zug für die Rückkehr auf die lange Diagonale " +
      "aufwendet, während Schwarz sich entwickelt.",
  },

  "1.g3 g6 2.Nh3": {
    strategy:
      "Strebt nach f4 oder g5, doch der Springer steht am Rand, abseits des Zentrums, statt auf " +
      "f3. Schwarz entwickelt sich und besetzt das Zentrum, und ...e5 nimmt dem Springer zudem " +
      "das Feld f4.",
  },

  "1.g3 g6 2.g4": {
    strategy:
      "Zieht den g-Bauern ein zweites Mal, lockert den Königsflügel dauerhaft und lässt den " +
      "Bauern g4 ungedeckt. Nach ...d5 oder ...d6 greift ihn der Läufer c8 an, ebenso ...h5, und " +
      "Weiß muss weitere Züge aufwenden, nur um ihn zu halten.",
  },

  "1.g3 g6": {
    name: "Königsfianchetto: Symmetrische Variante",
  },

  "1.g3 g6 2.Bg2 Bg7": {
    strategy:
      "Vollendet das Fianchetto: Der Läufer blickt über die lange Diagonale auf c3 und b2, und " +
      "Schwarz spiegelt den weißen Aufbau. Noch hat keine Seite einen Bauern im Zentrum, das " +
      "Spiel bleibt also flexibel, und wer sich zuerst festlegt, zeigt seinen Plan.",
  },

  "1.g3 g6 2.Bg2 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, wo er d5 und e4 kontrolliert. Schwarz " +
      "hält jeden Aufbau offen, und das Zentrum bleibt auf beiden Seiten unbesetzt.",
  },

  "1.g3 g6 2.Bg2 d5": {
    strategy:
      "Besetzt sofort das Zentrum und gewinnt Raum, doch der Läufer g2 wirkt bereits auf d5, " +
      "sodass Schwarz den Bauern gedeckt halten muss.",
  },

  "1.g3 g6 2.Bg2 c5": {
    strategy:
      "Kämpft um d4 und gewinnt Raum am Damenflügel, ein Spiegelbild des weißen Aufbaus. Der " +
      "Preis ist ein Zentrum, das Weiß überlassen bleibt: Wird d4 mit …cxd4 beantwortet, trifft " +
      "Dxd4 den Turm h8 über die offene lange Diagonale, bis Schwarz sie verstellt.",
  },

  "1.g3 g6 2.Bg2 e5": {
    strategy:
      "Sichert sich sofort einen Anteil am Zentrum, mit dem Fianchetto am Königsflügel im " +
      "Rücken. Der Bauer legt sich fest, bevor eine Figur entwickelt ist: Sf3 greift ihn sofort " +
      "an, und nach d4 exd4 Dxd4 trifft die Dame über die offene Diagonale den Turm h8.",
  },

  "1.g3 g6 2.Bg2 Nc6": {
    strategy:
      "Entwickelt den Springer, nimmt d4 und e5 ins Visier und verstellt die lange Diagonale des " +
      "Lg2 auf c6. Der Springer nimmt dem c-Bauern allerdings sein Feld, sodass …c5 und …c6 " +
      "entfallen, und Weiß kann im Zentrum Raum gewinnen, bevor Schwarz sich für eine Struktur " +
      "entschieden hat.",
  },

  "1.g3 g6 2.Bg2 d6": {
    strategy:
      "Öffnet den Läufer c8 und steuert einen Aufbau wie in der Modernen oder der " +
      "Königsindischen Verteidigung an. Das Zentrum bleibt vorerst Weiß überlassen, der Raum " +
      "gewinnen kann, während der Lg2 schon entwickelt ist.",
  },

  "1.g3 g6 2.Bg2 c6": {
    strategy:
      "Bereitet …d5 mit Bauernstütze vor und verstellt die lange Diagonale des Lg2 auf c6, " +
      "sodass ein späteres …b6 oder …b5 den Turm a8 nicht mehr einstellt. Das Zentrum bleibt " +
      "vorerst Weiß überlassen, und der c-Bauer ist festgelegt, bevor das Zentrum Gestalt " +
      "angenommen hat.",
  },

  "1.g3 g6 2.Bg2 e6": {
    strategy:
      "Bereitet …d5 in einem kompakten Aufbau vor. Der Bauer e6 sperrt den Läufer c8 ein, der " +
      "nur über d7 oder nach …b6 über b7 herauskommt, und …b6 muss warten, bis …d5 oder …c6 die " +
      "lange Diagonale geschlossen hat.",
  },

  "1.g3 g6 2.Bg2 f5": {
    strategy:
      "Kontrolliert e4 und baut die Bauernstruktur des Leningrader Systems der Holländischen " +
      "Verteidigung auf. Der Aufbau ist zweischneidig: Er schwächt e6 und die Deckung des " +
      "Königs, und Weiß kann sich ungestört entwickeln.",
  },

  "1.g3 g6 2.Bg2 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 im Blick hat, aber kein Zentrumsfeld " +
      "kontrolliert. Weiß nutzt die Zeit, um sich zu entwickeln und das Zentrum zu besetzen.",
  },

  "1.g3 g6 2.Bg2 Nh6": {
    strategy:
      "Schickt den Springer über den Rand nach f5, wo ihn ein Bauer auf e4 vertreiben würde; von " +
      "h6 aus kontrolliert er kein Zentrumsfeld. Weiß entwickelt sich einfach und besetzt das " +
      "Zentrum.",
  },

  "1.g3 g6 2.Bg2 Bh6": {
    strategy:
      "Stellt den Läufer nach h6 statt nach g7, wo der Bauer d2 ihn aufhält und er keinen Anteil " +
      "am Kampf um die lange Diagonale hat. Sobald d3 oder d4 die Diagonale c1–h6 öffnet, muss " +
      "Schwarz entweder den Tausch der schwarzfeldrigen Läufer zulassen, wodurch die durch …g6 " +
      "geschwächten Felder ihren Verteidiger verlieren, oder einen weiteren Zug für …Lg7 " +
      "aufwenden.",
  },

  "1.g3 g6 2.Bg2 a6": {
    strategy:
      "Investiert ein Tempo in einen Randbauern, der …b5 vorbereitet, doch dieser Vorstoß würde " +
      "den Turm a8 an Lxa8 verlieren, solange die lange Diagonale offen ist. Weiß entwickelt " +
      "sich einfach und besetzt das Zentrum.",
  },

  "1.g3 g6 2.Bg2 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und nimmt den weißen Figuren das Feld b4, entwickelt aber " +
      "nichts. Weiß kann sich ungestört entwickeln und das Zentrum besetzen.",
  },

  "1.g3 g6 2.Bg2 f6": {
    strategy:
      "Bereitet …e5 vor, verstellt aber die lange Diagonale vor dem künftigen Läufer g7, nimmt " +
      "dem Königsspringer das Feld f6 und öffnet die Diagonale a2–g8 zum Rochadefeld des Königs. " +
      "Weiß entwickelt sich, während Schwarz noch keine Figur draußen hat.",
  },

  "1.g3 g6 2.Bg2 h6": {
    strategy:
      "Investiert ein Tempo in einen Randbauern, der den weißen Figuren nur das Feld g5 nimmt " +
      "und die schwarze Entwicklung nicht voranbringt. Weiß entwickelt sich einfach und besetzt " +
      "das Zentrum.",
  },

  "1.g3 g6 2.Bg2 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel und bereitet …h4 gegen g3 vor, entwickelt aber nichts. Weiß " +
      "kann den Vorstoß sofort mit h4 aufhalten.",
  },

  "1.g3 g6 2.Bg2 g5": {
    strategy:
      "Zieht den g-Bauern ein zweites Mal und lässt ihn auf g5 ungedeckt: Sobald d3 oder d4 den " +
      "Läufer c1 öffnet, droht Lxg5, und Schwarz muss einen weiteren Zug für seine Deckung " +
      "aufwenden. Der Königsflügel bleibt dauerhaft geschwächt.",
  },

  "1.g3 g6 2.Bg2 b6": {
    strategy:
      "Stellt den Turm ein: Ohne den Bauern b7 ist die lange Diagonale bis a8 offen, und " +
      "3.Lxa8 schlägt den Turm, da weder der Läufer c8 noch die Dame zurückschlagen kann. " +
      "Selbst wenn der Läufer später in der Ecke gefangen wird, bleibt Weiß mindestens eine " +
      "Qualität vorn.",
  },

  "1.g3 g6 2.Bg2 b5": {
    strategy:
      "Öffnet die lange Diagonale bis a8: 3.Lxa8 schlägt den Turm, und keine schwarze Figur " +
      "kann dort zurückschlagen. Weiß bleibt mindestens eine Qualität vorn, selbst wenn der " +
      "Läufer später gefangen wird, und der Raumgewinn am Damenflügel ist kein Ausgleich " +
      "dafür.",
  },
};
