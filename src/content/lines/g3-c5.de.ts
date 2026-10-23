import type { OpeningTexts } from "../book.ts";

// German prose for g3-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.g3 c5 2.Bg2": {
    strategy:
      "Stellt den Läufer auf die lange Diagonale, wo er auf das Zentrum, c6 und b7 drückt, und " +
      "räumt f1, damit Weiß rochieren kann, sobald der Springer entwickelt ist. Weiß legt sich " +
      "sonst noch nicht fest und hält die Wahl zwischen einem zurückhaltenden Aufbau und einem " +
      "direkteren Zentrumsaufbau offen. Die Partie bleibt ruhig und manövrierend.",
  },

  "1.g3 c5 2.Nf3": {
    strategy:
      "Entwickelt den Königsspringer, der d4 und e5 kontrolliert, und räumt g1, sodass Läufer " +
      "und Rochade schnell folgen können. Ohne Zentrumsbauern lässt Weiß Schwarz zunächst Raum " +
      "nehmen und setzt auf flexible Entwicklung und späteres Gegenspiel gegen dieses Zentrum. " +
      "Die Partie wird ruhig und manövrierend statt früh konfrontativ.",
  },

  "1.g3 c5 2.c4": {
    strategy:
      "Beantwortet den c-Bauern mit dem c-Bauern und kämpft um d5, auf das später der Läufer von " +
      "g2 mitdrücken wird. Die Struktur ist symmetrisch und die Partie langsam, beide Seiten " +
      "manövrieren um die Kontrolle von d4 und d5. Da noch kein weißer Springer auf f3 steht, " +
      "hat Schwarz es leichter, ...e5 anzustreben.",
  },

  "1.g3 c5 2.e4": {
    strategy:
      "Besetzt sofort das Zentrum und führt in eine Sizilianische Verteidigung mit bereits " +
      "gespieltem g3. Schwarz kann sofort mit ...d5 zuschlagen, da exd5 Dxd5 über das freie Feld " +
      "g2 den Turm h1 angreift, sodass Weiß diese Diagonale meist verstellen muss. Korrekt, aber " +
      "weniger ehrgeizig als die Hauptvarianten der Sizilianischen Verteidigung.",
  },

  "1.g3 c5 2.d3": {
    strategy:
      "Bereitet e4 vor und befreit den Läufer c1, mit dem Ziel eines Königsindischen Angriffs. " +
      "Der Zug legt den d-Bauern fest, bevor der schwarze Aufbau bekannt ist, und Schwarz kann " +
      "Raum im Zentrum nehmen. Korrekt, doch Lg2 zuerst hält mehr Möglichkeiten offen.",
  },

  "1.g3 c5 2.Nc3": {
    strategy:
      "Entwickelt den Springer mit Blick auf d5 und e4 und steuert den Aufbau des Geschlossenen " +
      "Sizilianers an. Der Springer verstellt den c-Bauern, sodass der englische Plan mit c4 " +
      "entfällt, und ...d5 nebst ...d4 gewinnt Raum mit Tempo. Korrekt, aber der Springer legt " +
      "sich früh fest und stellt Schwarz vor keine Probleme.",
  },

  "1.g3 c5 2.b3": {
    strategy:
      "Bereitet Lb2 vor, das zusammen mit Lg2 beide Läufer auf die langen Diagonalen bringt. Der " +
      "Aufbau ist korrekt, aber langsam: Ohne Zentrumsbauern lässt Weiß Schwarz zuerst das " +
      "Zentrum besetzen.",
  },

  "1.g3 c5 2.c3": {
    strategy:
      "Bereitet d4 vor, um den Bauern c5 anzugreifen, und baut ein solides Zentrum auf. Der " +
      "Bauer nimmt dem Damenspringer sein natürliches Feld, sodass dieser über d2 herauskommen " +
      "muss, und Schwarz kann zuerst das Zentrum besetzen. Korrekt, aber passiv.",
  },

  "1.g3 c5 2.e3": {
    strategy:
      "Bereitet d4 und Se2 vor, für einen kompakten Aufbau. Der Bauer verstellt dem Läufer c1 " +
      "die Diagonale, sodass dieser meist per Fianchetto ins Spiel kommen muss, und Schwarz kann " +
      "zuerst das Zentrum besetzen. Korrekt, aber langsam.",
  },

  "1.g3 c5 2.f4": {
    strategy:
      "Nimmt e5 unter Kontrolle und steuert einen Holländisch-Aufbau mit vertauschten Farben an. " +
      "Der Bauer lockert die weiße Königsstellung leicht, und Schwarz kann zuerst das Zentrum " +
      "besetzen. Korrekt, aber weniger flexibel als ein Entwicklungszug.",
  },

  "1.g3 c5 2.d4": {
    strategy:
      "Bietet einen Tausch an, der ein Tempo kostet: Nach 2...cxd4 3.Dxd4 Sc6 muss die Dame " +
      "erneut ziehen, und Schwarz entwickelt sich mit Tempogewinn. Da kein Springer auf f3 " +
      "steht, kann nur die Dame sofort zurückschlagen.",
  },

  "1.g3 c5 2.b4": {
    strategy:
      "Bietet den b-Bauern an, um den schwarzen c-Bauern abzulenken, doch nach 2...cxb4 gewinnt " +
      "Weiß ihn nicht rasch zurück. Weiß hat dafür keinen Zentrumsbauern vorzuweisen, und " +
      "Schwarz kann sich einfach entwickeln.",
  },

  "1.g3 c5 2.a3": {
    strategy:
      "Bereitet b4 vor, um den Bauern c5 zu untergraben, verbraucht aber ein Tempo für einen " +
      "Randbauern, bevor eine Figur oder ein Zentrumsbauer gezogen ist. Schwarz kann sich frei " +
      "das Zentrum nehmen.",
  },

  "1.g3 c5 2.a4": {
    strategy:
      "Nimmt b5 unter Kontrolle, verbraucht aber ein Tempo am Rand, ohne etwas für das Zentrum " +
      "oder die Entwicklung zu gewinnen. Schwarz kann sich frei Raum nehmen.",
  },

  "1.g3 c5 2.f3": {
    strategy:
      "Nimmt dem Königsspringer das Feld f3 und verstellt die lange Diagonale, auf der der " +
      "Läufer von g2 aus wirken soll. Der Zug bereitet e4 vor, lockert aber die " +
      "Königsstellung weiter und entwickelt nichts.",
  },

  "1.g3 c5 2.h3": {
    strategy:
      "Verbraucht ein Tempo für einen Randbauern, der g4 deckt, aber weder um das Zentrum kämpft " +
      "noch eine Figur entwickelt. Schwarz kann sich frei Raum nehmen.",
  },

  "1.g3 c5 2.h4": {
    strategy:
      "Verwendet einen zweiten Zug auf die Königsflügelbauern, ohne ein Angriffsziel, da Schwarz " +
      "nicht fianchettiert hat. Der Bauer g3 ist danach nur noch durch f2 gedeckt, und für das " +
      "Zentrum geschieht nichts.",
  },

  "1.g3 c5 2.Bh3": {
    strategy:
      "Verlässt die lange Diagonale zugunsten von h3, wo der Läufer nur den gedeckten Bauern " +
      "d7 angreift. Nach ...d5 steht ihm der Läufer c8 gegenüber, sodass Weiß die Läufer " +
      "tauschen, zurückziehen oder ...Lxh3 Sxh3 mit einem Springer am Rand zulassen muss.",
  },

  "1.g3 c5 2.Nh3": {
    strategy:
      "Strebt nach f4, das der Bauer g3 deckt, doch der Springer steht am Rand statt auf f3 und " +
      "kann auf f4 mit ...e5 vertrieben werden. Schwarz kann sich frei Raum nehmen.",
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
      "Deckung durch die Dame verstellt, und nach ...d5 oder ...d6 greift ihn der Läufer c8 an, " +
      "ebenso ...h5, sodass Weiß sich mit einem Bauernzug weiter schwächen muss.",
  },

  "1.g3 c5": {
    name: "Königsfianchetto: Sizilianische Einladung",
  },

  "1.g3 c5 2.Bg2 Nc6": {
    strategy:
      "Entwickelt einen Springer zum Zentrum, verstärkt den Druck auf d4 und verstellt die lange " +
      "Diagonale des weißen Läufers, sodass der Turm a8 nach einem Bauernzug am Damenflügel " +
      "nicht mehr in Gefahr ist. Schwarz gibt nichts preis, und jeder Aufbau bleibt offen, vom " +
      "symmetrischen Fianchetto bis zu einem flexiblen Zentrumsaufbau.",
  },

  "1.g3 c5 2.Bg2 Nf6": {
    strategy:
      "Entwickelt den Springer zum Zentrum mit Blick auf e4 und d5 und lässt die Wahl zwischen " +
      "Fianchetto und einem Bauern im Zentrum offen. Schwarz legt sich noch nicht fest und kommt " +
      "zu normaler, bequemer Entwicklung.",
  },

  "1.g3 c5 2.Bg2 d5": {
    strategy:
      "Besetzt sofort das Zentrum und schließt die lange Diagonale des weißen Läufers. Der Bauer " +
      "wird von diesem Läufer angegriffen und nur von der Dame gedeckt, braucht also " +
      "Unterstützung, und Schwarz muss sich entwickeln, ohne das Zentrum zu lockern. Dafür " +
      "gewinnt er Raum und bestimmt früh das Geschehen.",
  },

  "1.g3 c5 2.Bg2 g6": {
    strategy:
      "Spiegelt den weißen Aufbau: Der Läufer auf g7 wird die lange Diagonale in Richtung b2 und " +
      "c3 besetzen. Der Zug gibt nichts preis, bietet aber wenig, um das Gleichgewicht zu " +
      "stören, sodass Schwarz in symmetrischer Struktur auf einen langsamen strategischen Kampf " +
      "setzt.",
  },

  "1.g3 c5 2.Bg2 d6": {
    strategy:
      "Öffnet den Läufer c8 und bereitet einen soliden Aufbau wie in der Sizilianischen " +
      "Verteidigung vor. Der Zug beansprucht weniger Zentrum als ...d5, das jetzt ein zweites " +
      "Tempo kosten würde, und lässt Weiß freie Hand zur Entwicklung.",
  },

  "1.g3 c5 2.Bg2 e6": {
    strategy:
      "Öffnet den Läufer f8 und bereitet ein durch einen Bauern gestütztes ...d5 vor. Sobald " +
      "...d5 gespielt ist, sperrt der Bauer e6 den Läufer c8 ein, und Weiß entwickelt sich " +
      "unterdessen in Ruhe.",
  },

  "1.g3 c5 2.Bg2 e5": {
    strategy:
      "Besetzt das Zentrum mit Bauern auf c5 und e5 und kontrolliert d4 und f4. Keiner der " +
      "beiden Bauern kann d5 noch decken, sodass das Feld ein dauerhaftes Loch bleibt, auf das " +
      "Weiß einen Springer richten kann.",
  },

  "1.g3 c5 2.Bg2 f5": {
    strategy:
      "Kontrolliert e4 und bereitet vor, den Königsläufer hinter dem f-Bauern zu fianchettieren. " +
      "Der Zug lockert e6 und die Diagonale a2-g8 und verzögert die Entwicklung, während Weiß " +
      "sich frei entwickelt und e4 vorbereitet.",
  },

  "1.g3 c5 2.Bg2 Na6": {
    strategy:
      "Zieht den Springer an den Rand mit Ziel b4 oder c7, was Zeit kostet und die Diagonale " +
      "g2-a8 offen lässt, sodass ...b6 und ...b5 weiterhin den Turm verlieren. Ein zentrales " +
      "Feld entwickelt den Springer wirkungsvoller.",
  },

  "1.g3 c5 2.Bg2 Qc7": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel. Weiß entwickelt sich mit Tempogewinn, " +
      "denn ein Springer auf b5 oder d5 greift die Dame auf c7 an.",
  },

  "1.g3 c5 2.Bg2 Qb6": {
    strategy:
      "Zielt auf b2, das der Lc1 deckt, sodass keine echte Drohung besteht. Die Dame steht früh " +
      "draußen, und der weiße Springer vertreibt sie mit Tempogewinn.",
  },

  "1.g3 c5 2.Bg2 Qa5": {
    strategy:
      "Bringt die Dame vor jeder Leichtfigur ins Spiel und fesselt nur den Bauern d2, eine " +
      "Fesselung, die Sc3 oder c3 sofort aufhebt. Später wird die Dame auf a5 zum Ziel für " +
      "einen weißen Springer auf b3 oder c4, sodass der Zug Zeit kostet.",
  },

  "1.g3 c5 2.Bg2 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, wo er weder e4 noch d5 kontrolliert. Sobald d3 den " +
      "Läufer c1 öffnet, kann Lxh6 gxh6 die schwarzen Bauern am Königsflügel zerrütten.",
  },

  "1.g3 c5 2.Bg2 a6": {
    strategy:
      "Bereitet ...b5 vor, doch das stellt den Turm a8 gegen Lxa8 ein, solange die lange " +
      "Diagonale offen ist, sodass Schwarz sie zuerst sperren muss. Der Zug verbraucht ein Tempo " +
      "am Flügel, während Weiß sich in Ruhe entwickelt.",
  },

  "1.g3 c5 2.Bg2 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel, entwickelt aber nichts und schwächt b5 für einen weißen " +
      "Springer, der über c3 dorthin kommt. Weiß entwickelt sich ungestört.",
  },

  "1.g3 c5 2.Bg2 f6": {
    strategy:
      "Bereitet ...e5 vor, nimmt aber dem Königsspringer das Feld f6, schwächt e6 und die " +
      "Diagonale e8-h5 und entwickelt nichts.",
  },

  "1.g3 c5 2.Bg2 g5": {
    strategy:
      "Schwächt den Königsflügel und öffnet die Diagonale a1-h8. Nach 3.d4 zielt der Läufer c1 " +
      "auf den ungedeckten Bauern g5, und 3...cxd4 4.Dxd4 greift zudem den Turm h8 an, sodass " +
      "Schwarz die Diagonale sperren muss und der Bauer g5 ein Ziel bleibt.",
  },

  "1.g3 c5 2.Bg2 h6": {
    strategy:
      "Ein Wartezug, der nichts entwickelt und das Zentrum nicht berührt. Weiß gewinnt ein Tempo " +
      "für die Entwicklung; der Bauer auf h6 nimmt einem weißen Läufer oder Springer lediglich " +
      "das Feld g5.",
  },

  "1.g3 c5 2.Bg2 h5": {
    strategy:
      "Zielt mit ...h4 auf den Bauern g3, entwickelt aber nichts und schwächt g5 und g6. Weiß " +
      "kann den Flügel mit h4 schließen und sich weiter entwickeln.",
  },

  "1.g3 c5 2.Bg2 c4": {
    strategy:
      "Gewinnt Raum, doch der Bauer wird sofort mit b3 oder d3 unterminiert und kann nicht " +
      "mit ...b5 gestützt werden, das den Turm a8 einstellt. Nach dem Tausch hat Schwarz zwei " +
      "Züge mit dem c-Bauern verbraucht, und die weißen Figuren erhalten offene Linien.",
  },

  "1.g3 c5 2.Bg2 b6": {
    strategy:
      "Stellt den Turm ein: Ohne den Bauern b7 ist die lange Diagonale offen, und 3.Lxa8 " +
      "gewinnt den Turm a8, weil die Dame nicht über den Läufer c8 und den Springer b8 hinweg " +
      "zurückschlagen kann.",
  },

  "1.g3 c5 2.Bg2 b5": {
    strategy:
      "Stellt den Turm ein: Der b-Bauer verstellt die lange Diagonale nicht mehr, und 3.Lxa8 " +
      "gewinnt den Turm a8, weil die Dame nicht über den Läufer c8 und den Springer b8 hinweg " +
      "zurückschlagen kann. Der Bauer auf b5 gewinnt dafür nichts zurück.",
  },
};
