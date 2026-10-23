import type { OpeningTexts } from "../book.ts";

// German prose for g3-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.g3 c5 2.Bg2": {
    strategy:
      "Stellt den Läufer auf die lange Diagonale, wo er auf das Zentrum, c6 und b7 drückt, " +
      "und räumt f1 für die Rochade, sobald der Springer g1 verlassen hat. Weiß hält sich " +
      "alle Pläne offen: Sf3 und O-O, c4 für einen symmetrischen Englischen Aufbau, d3 und e4 " +
      "wie im Königsindischen Angriff oder Sc3 und e4 für den Aufbau des Geschlossenen " +
      "Sizilianers. Schwarz kann den Aufbau mit ...Sc6 und ...g6 spiegeln oder sich mit ...e6 " +
      "und ...Sf6 entwickeln.",
  },

  "1.g3 c5 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer, der d4 und e5 kontrolliert, und räumt g1, sodass Lg2 " +
      "und O-O sofort folgen können. Weiß hält sich sowohl c4 für einen englischen Aufbau " +
      "offen als auch d3 mit e4 wie im Königsindischen Angriff. Da noch kein Zentrumsbauer " +
      "gezogen ist, erlaubt Weiß Schwarz, mit ...d5 Raum zu nehmen oder den Aufbau mit ...Sc6 " +
      "und ...g6 zu spiegeln.",
  },

  "1.g3 c5 2.c4": {
    strategy:
      "Beantwortet den c-Bauern mit dem c-Bauern und führt in die Symmetrische Variante der " +
      "Englischen Eröffnung mit bereits gespieltem g3. Lg2 wird auf d5, c6 und b7 drücken, " +
      "und Weiß folgt mit Sc3, Sf3 und O-O, wobei d4 als späterer Hebel bereitsteht. Schwarz " +
      "kann mit ...Sc6 und ...g6 spiegeln oder, da noch kein weißer Springer auf f3 e5 " +
      "angreift, ...e5 anstreben.",
  },

  "1.g3 c5 2.e4": {
    strategy:
      "Besetzt sofort das Zentrum und führt in eine Sizilianische Verteidigung mit bereits " +
      "gespieltem g3, in der Lg2, d3 und Sc3 oft in den Geschlossenen Sizilianer münden. " +
      "Schwarz kann sofort mit ...d5 zuschlagen, da exd5 Dxd5 über das freie Feld g2 den Turm " +
      "h1 angreift, und Weiß stellt meist Sf3 dazwischen. Korrekt, aber weniger ehrgeizig als " +
      "die Hauptvarianten der Sizilianischen Verteidigung.",
  },

  "1.g3 c5 2.d3": {
    strategy:
      "Bereitet e4 vor und befreit den Läufer c1, mit dem Ziel Lg2, Sf3 und O-O nach Art des " +
      "Königsindischen Angriffs. Der Zug legt den d-Bauern fest, bevor der schwarze Aufbau " +
      "bekannt ist, und Schwarz kann mit ...Sc6 und ...e5 oder mit ...d5 Raum nehmen. " +
      "Korrekt, doch Lg2 zuerst hält mehr Möglichkeiten offen.",
  },

  "1.g3 c5 2.Nc3": {
    strategy:
      "Entwickelt den Springer mit Blick auf d5 und e4 und steuert mit Lg2, d3 und später e4 " +
      "den Aufbau des Geschlossenen Sizilianers an. Der Springer verstellt den c-Bauern, " +
      "sodass der englische Plan mit c4 entfällt, und ...d5 nebst ...d4 gewinnt Raum mit " +
      "Tempo. Korrekt, aber der Springer legt sich früh fest und stellt Schwarz vor keine " +
      "Probleme.",
  },

  "1.g3 c5 2.b3": {
    strategy:
      "Bereitet Lb2 vor, das zusammen mit Lg2 beide Läufer auf die langen Diagonalen bringt; " +
      "es folgen Sf3, O-O und e3 oder d3. Der Aufbau ist korrekt, aber langsam: Ohne " +
      "Zentrumsbauern lässt Weiß Schwarz zuerst mit ...Sc6, ...e5 oder ...d5 das Zentrum " +
      "besetzen.",
  },

  "1.g3 c5 2.c3": {
    strategy:
      "Bereitet d4 vor, um den Bauern c5 anzugreifen, und baut zusammen mit Lg2, Sf3 und O-O " +
      "ein solides Zentrum auf. Der Bauer nimmt dem Damenspringer sein natürliches Feld, " +
      "sodass dieser über d2 herauskommen muss, und ...Sc6 nebst ...d5 lässt Schwarz zuerst " +
      "das Zentrum besetzen. Korrekt, aber passiv.",
  },

  "1.g3 c5 2.e3": {
    strategy:
      "Bereitet d4 und Se2 vor, für einen kompakten Aufbau mit Lg2 und O-O. Der Bauer " +
      "verstellt dem Läufer c1 die Diagonale, sodass dieser meist über b3 und Lb2 ins Spiel " +
      "kommt, und ...Sc6 mit ...d5 lässt Schwarz zuerst das Zentrum besetzen. Korrekt, aber " +
      "langsam.",
  },

  "1.g3 c5 2.f4": {
    strategy:
      "Nimmt e5 unter Kontrolle und steuert ein Leningrader Holländisch mit vertauschten " +
      "Farben an, mit Sf3, Lg2, O-O und d3 als Fortsetzung. Der Bauer lockert die weiße " +
      "Königsstellung leicht, und Schwarz kann mit ...d5 und ...Sc6 zuerst das Zentrum " +
      "besetzen. Korrekt, aber weniger flexibel als Lg2 oder Sf3.",
  },

  "1.g3 c5 2.d4": {
    strategy:
      "Bietet einen Tausch an, der ein Tempo kostet: Nach 2...cxd4 3.Dxd4 Sc6 muss die Dame " +
      "erneut ziehen, und Schwarz entwickelt sich mit Tempogewinn. Da kein Springer auf f3 " +
      "steht, kann nur die Dame sofort zurückschlagen.",
  },

  "1.g3 c5 2.b4": {
    strategy:
      "Bietet den b-Bauern an, um den schwarzen c-Bauern abzulenken, doch nach 2...cxb4 " +
      "gewinnt Weiß ihn nicht rasch zurück. Weiß hat dafür keinen Zentrumsbauern vorzuweisen, " +
      "und Lg2 gegen b7 beantwortet Schwarz mit ...Sc6 oder ...d5.",
  },

  "1.g3 c5 2.a3": {
    strategy:
      "Bereitet b4 vor, um den Bauern c5 zu untergraben, verbraucht aber ein Tempo für einen " +
      "Randbauern, bevor eine Figur oder ein Zentrumsbauer gezogen ist. Schwarz nimmt mit " +
      "...Sc6 und ...e5 oder ...d5 das Zentrum.",
  },

  "1.g3 c5 2.a4": {
    strategy:
      "Nimmt b5 unter Kontrolle, verbraucht aber ein Tempo am Rand, ohne etwas für das " +
      "Zentrum oder die Entwicklung zu gewinnen. Schwarz nimmt mit ...Sc6 und ...d5 oder " +
      "...e5 Raum.",
  },

  "1.g3 c5 2.f3": {
    strategy:
      "Nimmt dem Königsspringer das Feld f3 und verstellt die lange Diagonale, auf der der " +
      "Läufer von g2 aus wirken soll. Der Zug bereitet e4 vor, lockert aber die " +
      "Königsstellung weiter und entwickelt nichts.",
  },

  "1.g3 c5 2.h3": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern, der g4 deckt, aber weder um das Zentrum " +
      "kämpft noch eine Figur entwickelt. Schwarz nimmt mit ...Sc6 und ...e5 oder ...d5 Raum.",
  },

  "1.g3 c5 2.h4": {
    strategy:
      "Verwendet einen zweiten Zug auf die Königsflügelbauern, ohne ein Angriffsziel, da " +
      "Schwarz nicht fianchettiert hat. Der Bauer g3 ist danach nur noch durch f2 gedeckt, " +
      "und für das Zentrum geschieht nichts; ...h5 oder einfache Entwicklung genügt als " +
      "Antwort.",
  },

  "1.g3 c5 2.Bh3": {
    strategy:
      "Verlässt die lange Diagonale zugunsten von h3, wo der Läufer nur den gedeckten Bauern " +
      "d7 angreift. Nach ...d5 steht ihm der Läufer c8 gegenüber, sodass Weiß die Läufer " +
      "tauschen, zurückziehen oder ...Lxh3 Sxh3 mit einem Springer am Rand zulassen muss.",
  },

  "1.g3 c5 2.Nh3": {
    strategy:
      "Strebt nach f4, das der Bauer g3 deckt, doch der Springer steht am Rand statt auf f3 " +
      "und kann auf f4 mit ...e5 vertrieben werden. Schwarz nimmt mit ...d5 und ...Sc6 Raum.",
  },

  "1.g3 c5 2.Na3": {
    strategy:
      "Strebt nach c4 oder b5, doch ein Springer am Rand kontrolliert kein Zentrumsfeld und " +
      "kann auf c4 mit ...d5 und ...b5 vertrieben werden. Sc3 würde denselben Springer zum " +
      "Zentrum hin entwickeln.",
  },

  "1.g3 c5 2.g4": {
    strategy:
      "Lockert den Königsflügel dauerhaft. Der Bauer g4 ist ungedeckt, da der Bauer e2 die " +
      "Deckung durch die Dame verstellt, und nach ...d5 oder ...d6 greift ihn der Läufer c8 " +
      "an, ebenso ...h5, sodass Weiß sich mit h3 oder f3 weiter schwächen muss.",
  },

  "1.g3 c5": {
    name: "Königsfianchetto: Sizilianische Einladung",
  },
};
