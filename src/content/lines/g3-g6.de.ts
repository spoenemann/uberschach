import type { OpeningTexts } from "../book.ts";

// German prose for g3-g6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.g3 g6 2.Bg2": {
    strategy:
      "Vervollständigt das Fianchetto: Der Läufer auf der langen Diagonale wirkt aus der " +
      "Ferne auf b7 und auf das Zentrum. Nach 2...Lg7 wählt Weiß vor allem zwischen 3.c4 mit " +
      "Sc3, d3, e4 und Sge2, dem Botwinnik-System der Englischen Eröffnung, und 3.Sf3 mit O-O " +
      "für einen Aufbau nach Art des Königsindischen Angriffs. Weiß bleibt flexibel, lässt " +
      "Schwarz aber die Freiheit, mit ...d5, ...c5 oder ...e5 als Erster das Zentrum zu " +
      "besetzen.",
  },

  "1.g3 g6 2.c4": {
    strategy:
      "Gewinnt Raum am Damenflügel, kontrolliert d5 und erreicht die Stellung nach 1.c4 g6 " +
      "2.g3, eine Englische Eröffnung mit frühem g3. Es folgen Lg2 und Sc3, dann d3 und e4 im " +
      "Botwinnik-System oder Sf3 und d4. Der Bauer besetzt kein Zentrumsfeld, sodass Schwarz " +
      "mit ...Lg7 antwortet und sich mit ...e5 oder ...c5 einen Anteil am Zentrum sichert.",
  },

  "1.g3 g6 2.Nf3": {
    strategy:
      "Entwickelt den Springer, deckt d4 und e5 und erreicht die Stellung nach 1.Sf3 g6 2.g3. " +
      "Mit Lg2 und O-O im Anschluss baut Weiß mit d3 und e4 einen Königsindischen Angriff " +
      "oder mit c4 einen Réti- oder englischen Aufbau auf. Schwarz entwickelt sich mit ...Lg7 " +
      "und kann mit ...d5 Raum im Zentrum nehmen, bevor Weiß sich festgelegt hat.",
  },

  "1.g3 g6 2.b3": {
    strategy:
      "Bereitet Lb2 vor, um die lange Diagonale streitig zu machen, doch 2...Lg7 greift über " +
      "das leere Feld b2 den Turm a1 an, und 3.Lb2 Lxb2 kostet eine Figur, da nichts b2 " +
      "deckt. Weiß muss die Diagonale erst mit c3, d4 oder Sc3 verstellen, sodass das " +
      "doppelte Fianchetto einen Zusatzzug kostet und den Damenflügel lockert.",
  },

  "1.g3 g6 2.c3": {
    strategy:
      "Bereitet d4 mit Bauernunterstützung vor und verstellt die lange Diagonale schon vor " +
      "...Lg7. Der Zug entwickelt keine Figur und nimmt dem Damenspringer das Feld c3, " +
      "während Schwarz sich mit ...Lg7 entwickelt und mit ...d5 oder ...e5 das Zentrum " +
      "besetzt. Er ist solide, aber passiv.",
  },

  "1.g3 g6 2.d3": {
    strategy:
      "Unterstützt ein späteres e4, öffnet den Läufer c1 und bereitet Lg2, Sf3 und O-O für " +
      "einen Aufbau nach Art des Königsindischen Angriffs vor. Der Zug ist solide, aber " +
      "langsam, da er keinen Raum im Zentrum gewinnt und Schwarz erlaubt, sich mit ...Lg7 zu " +
      "entwickeln und mit ...e5 oder ...d5 das Zentrum zu besetzen.",
  },

  "1.g3 g6 2.d4": {
    strategy:
      "Besetzt sofort das Zentrum und erreicht die Stellung nach 1.d4 g6 2.g3. Mit Lg2, Sf3 " +
      "und c4 steuert die Partie auf königsindische oder Grünfeld-Strukturen mit dem Läufer " +
      "auf g2 zu, sobald ...Sf6 gespielt ist. Der Zug ist solide, gibt aber die Flexibilität " +
      "von 1.g3 auf, und Schwarz greift das Zentrum sofort mit ...Lg7 und ...c5 an.",
  },

  "1.g3 g6 2.e3": {
    strategy:
      "Bereitet einen kompakten Aufbau mit Lg2, Se2, O-O und d3 vor und hält d4 in Reserve. " +
      "Der Zug ist solide, aber langsam: Der Bauer e3 sperrt den Läufer c1 ein, und Schwarz " +
      "entwickelt sich mit ...Lg7 und ...Sf6 und besetzt mit ...d5 und ...e5 das Zentrum.",
  },

  "1.g3 g6 2.e4": {
    strategy:
      "Besetzt sofort das Zentrum und erreicht die Stellung nach 1.e4 g6 2.g3. Lg2 stützt " +
      "dann den Bauern über die lange Diagonale, und d3, Sf3 und O-O vervollständigen einen " +
      "Aufbau nach Art des Königsindischen Angriffs. Noch deckt nichts den Bauern e4, sodass " +
      "Schwarz ihn mit ...d5 angreifen kann, wonach 3.exd5 Dxd5 den Turm h1 bedroht, oder mit " +
      "...Lg7 und ...d6 aufbauen kann.",
  },

  "1.g3 g6 2.f4": {
    strategy:
      "Kontrolliert e5 und bereitet Sf3, Lg2 und O-O in einem Aufbau nach Art der " +
      "Bird-Eröffnung vor. Der Bauer schwächt e4 und öffnet die Diagonale g1-a7, bevor der " +
      "König in Sicherheit ist, sodass Schwarz sich mit ...Lg7 entwickelt und mit ...d5 oder " +
      "...c5 auf das Zentrum zielt.",
  },

  "1.g3 g6 2.Nc3": {
    strategy:
      "Entwickelt den Damenspringer und überwacht d5 und e4, worauf Lg2, d3 und e4 folgen. " +
      "Der Springer verstellt den c-Bauern, sodass c4 warten muss, und Schwarz kann nach " +
      "...Lg7 mit ...d5 oder ...e5 das Zentrum besetzen. Der Zug ist solide, legt den " +
      "Springer aber fest, bevor Weiß einen Bauernaufbau gewählt hat.",
  },

  "1.g3 g6 2.a3": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauernzug, um b4 vorzubereiten, und tut nichts für " +
      "das Zentrum oder die Entwicklung. Schwarz entwickelt sich mit ...Lg7 und gewinnt mit " +
      "...d5 oder ...e5 Raum, während Weiß noch keine Figur entwickelt hat.",
  },

  "1.g3 g6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und nimmt Schwarz das Feld b5, lockert aber b4 und das " +
      "Feld b3 und tut nichts für das Zentrum oder die Entwicklung. Schwarz baut in aller " +
      "Ruhe mit ...Lg7 und ...d5 oder ...e5 auf.",
  },

  "1.g3 g6 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel, lässt aber b2 leer, sodass 2...Lg7 sofort den Turm a1 " +
      "angreift und 3.Lb2 Lxb2 eine Figur kostet. Weiß muss einen Zug für c3, d4 oder Sc3 " +
      "aufwenden, und der Bauer b4 wird zum Angriffsziel für ...a5.",
  },

  "1.g3 g6 2.f3": {
    strategy:
      "Verstellt die lange Diagonale des Läufers, der nach g2 soll, und nimmt dem " +
      "Königsspringer das Feld f3. Zudem öffnet der Zug die Diagonale g1-a7 zum weißen König " +
      "hin und tut nichts für das Zentrum, sodass Schwarz sich mit ...Lg7 entwickelt und es " +
      "mit ...d5 oder ...e5 besetzt.",
  },

  "1.g3 g6 2.h3": {
    strategy:
      "Nimmt dem schwarzen Läufer und Springer das Feld g4, verbraucht aber ein Tempo für " +
      "einen Randbauernzug und tut nichts für das Zentrum oder die Entwicklung. Schwarz " +
      "spielt ...Lg7 und ...d5 oder ...e5 und besetzt als Erster das Zentrum.",
  },

  "1.g3 g6 2.h4": {
    strategy:
      "Bereitet h5 gegen den Bauern g6 vor, doch Schwarz kann das mit ...h5 verhindern oder " +
      "sich einfach mit ...Lg7 entwickeln und mit ...d5 das Zentrum besetzen. Der Vorstoß " +
      "lässt den Bauern g3 nur noch von f2 gedeckt und entwickelt nichts.",
  },

  "1.g3 g6 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er b5 und c4 ins Auge fasst, aber den a-Bauern " +
      "blockiert und nichts im Zentrum deckt. Schwarz besetzt mit ...d5 das Zentrum, womit er " +
      "auch c4 überwacht, und entwickelt sich mit ...Lg7, während der Springer weitere Züge " +
      "braucht, um ein gutes Feld zu finden.",
  },

  "1.g3 g6 2.Bh3": {
    strategy:
      "Stellt den Läufer nach h3, wo er nur den gedeckten Bauern d7 angreift, statt auf die " +
      "lange Diagonale. Nach ...d5 steht ihm der Läufer c8 gegenüber, sodass die Läufer " +
      "getauscht werden oder Weiß einen weiteren Zug für Lg2 aufwendet, während Schwarz sich " +
      "mit ...Lg7 entwickelt.",
  },

  "1.g3 g6 2.Nh3": {
    strategy:
      "Strebt nach f4 oder g5, doch der Springer steht am Rand, abseits des Zentrums, statt " +
      "auf f3. Schwarz entwickelt sich mit ...Lg7 und besetzt mit ...d5 oder ...e5 das " +
      "Zentrum, wobei ...e5 dem Springer auch das Feld f4 nimmt.",
  },

  "1.g3 g6 2.g4": {
    strategy:
      "Zieht den g-Bauern ein zweites Mal, lockert den Königsflügel dauerhaft und lässt den " +
      "Bauern g4 ungedeckt. Nach ...d5 oder ...d6 greift ihn der Läufer c8 an, ebenso ...h5, " +
      "und Weiß muss weitere Züge für h3, f3, Lh3 oder e3 aufwenden, nur um ihn zu halten.",
  },

  "1.g3 g6": {
    name: "Königsfianchetto: Symmetrische Variante",
  },
};
