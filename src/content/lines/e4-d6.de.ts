import type { OpeningTexts } from "../book.ts";

// German prose for e4-d6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.e4 d6 2.d4": {
    strategy:
      "Errichtet mit d4 und e4 ein breites Bauernzentrum und öffnet die Diagonale des Läufers " +
      "c1. Schwarz lässt das Zentrum vorerst stehen, entwickelt sich mit ...Sf6, ...g6 und " +
      "...Lg7 und greift es später mit ...c5 oder ...e5 an. Weiß deckt e4 meist mit Sc3 und " +
      "wählt dann zwischen dem aggressiven f4, dem ruhigeren Sf3 mit Le2 oder Le3 mit Dd2 und " +
      "f3.",
  },

  "1.e4 d6 2.Nf3": {
    strategy:
      "Entwickelt den Springer, kontrolliert d4 und e5 und hält den Vorstoß d4 in Reserve. " +
      "Nach 2...Sf6 3.Sc3 g6 4.d4 entsteht der klassische Aufbau mit Sf3, während 2...e5 3.d4 " +
      "in die Philidor-Verteidigung und 2...c5 in die Sizilianische Verteidigung führt. Der " +
      "Preis ist das frühe f4 der schärfsten weißen Angriffssysteme, und der Springer kann " +
      "mit ...Lg4 gefesselt werden.",
  },

  "1.e4 d6 2.Nc3": {
    strategy:
      "Entwickelt den Springer, deckt e4 und hält d4, f4 und Sf3 offen. Nach 2...Sf6 3.d4 g6 " +
      "entsteht die Hauptvariante durch Zugumstellung, Schwarz kann aber auch 2...e5 wählen " +
      "und eine Philidor-artige Struktur anstreben. Eine solide, flexible Alternative zum " +
      "sofortigen d4 mit etwas bescheidenerem Anspruch auf das Zentrum.",
  },

  "1.e4 d6 2.b3": {
    strategy:
      "Bereitet Lb2 vor, um Druck auf e5 und die lange Diagonale auszuüben, gefolgt von Sf3 " +
      "und später c4 oder d4. Der Aufbau ist flexibel und solide, überlässt aber Schwarz das " +
      "Zentrum, der es mit ...e5 und ...Sf6 besetzen kann. Langsamer als 2.d4.",
  },

  "1.e4 d6 2.c3": {
    strategy:
      "Unterstützt mit dem c-Bauern ein späteres d4, nimmt aber dem Damenspringer das Feld c3 " +
      "und kostet gegenüber dem sofortigen d4 ein Tempo. Schwarz antwortet mit ...Sf6 gegen " +
      "e4 oder gewinnt mit ...e5 Raum. Solide, aber langsam.",
  },

  "1.e4 d6 2.c4": {
    strategy:
      "Gewinnt mit c4 und e4 gemeinsam Raum, kontrolliert d5 und bereitet Sc3 und d4 vor. " +
      "Schwarz kann mit ...e5 sofort Anspruch auf das Zentrum erheben oder mit ...Sf6 Druck " +
      "auf e4 ausüben. Solide, aber ungewöhnlich und weniger direkt als 2.d4.",
  },

  "1.e4 d6 2.d3": {
    strategy:
      "Stützt e4 bescheiden und öffnet die Diagonale des Läufers c1, mit Sf3 und Le2 oder " +
      "einem Aufbau mit g3 und Lg2 im Blick. Es erhebt keinen Anspruch auf d4, sodass Schwarz " +
      "mit ...e5 Raum gewinnt und sich mühelos mit ...Sf6 entwickelt. Solide, aber weit " +
      "weniger ehrgeizig als 2.d4.",
  },

  "1.e4 d6 2.g3": {
    strategy:
      "Bereitet Lg2 auf der langen Diagonale vor, wo der Läufer e4 stützt, gefolgt von Sf3 " +
      "und der Rochade. Der zurückhaltende Aufbau stellt keinen zweiten Bauern ins Zentrum, " +
      "sodass Schwarz ungehindert mit ...e5 Raum gewinnt und sich mit ...Sf6 entwickelt. " +
      "Solide, aber anspruchslos.",
  },

  "1.e4 d6 2.Be2": {
    strategy:
      "Eine bescheidene Entwicklung, die Sf3 und die Rochade vorbereitet und d4 offenhält. " +
      "Sie erhebt keinen Anspruch auf das Zentrum, sodass Schwarz sofort ...e5 oder ...Sf6 " +
      "spielen kann und keine Probleme hat. Solide, aber langsamer als 2.d4.",
  },

  "1.e4 d6 2.Bc4": {
    strategy:
      "Entwickelt den Läufer sofort mit Blick auf f7, doch ...Sf6 greift e4 an, sodass d3, " +
      "Sc3 oder De2 folgen muss, und Schwarz kann den Läufer mit ...e6 abblocken oder mit " +
      "...e5 Raum gewinnen. Solide und in der Praxis zu sehen, aber weniger wirkungsvoll als " +
      "2.d4.",
  },

  "1.e4 d6 2.f4": {
    name: "Rat-Verteidigung: Harmonist",
    strategy:
      "Stellt sofort Bauern auf e4 und f4, mit Sf3, Sc3 und einem späteren e5 im Blick, doch " +
      "ohne d4 ist das Zentrum weniger stabil als in den f4-Systemen nach 2.d4. Schwarz " +
      "antwortet mit ...Sf6 gegen e4 oder kontert mit ...e5, worauf 3.Sf3 exf4 eine Stellung " +
      "des Angenommenen Königsgambits ergibt. Solide und in der Praxis zu sehen, aber weniger " +
      "flexibel als 2.d4.",
  },

  "1.e4 d6 2.a3": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauernzug, der nichts stützt und nichts droht. " +
      "Schwarz antwortet mit ...Sf6 oder ...e5 und nimmt sich Raum im Zentrum, während der " +
      "weiße d-Bauer und die Springer zu Hause bleiben.",
  },

  "1.e4 d6 2.a4": {
    strategy:
      "Zieht einen Randbauern, statt zu entwickeln oder das Zentrum zu besetzen. Der " +
      "gewonnene Raum am Damenflügel nützt noch nichts, und Schwarz spielt ...Sf6 und ...e5 " +
      "nach Belieben.",
  },

  "1.e4 d6 2.b4": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet Lb2 vor, doch der Bauer schwächt c3 und c4, " +
      "und das Zentrum fällt an Schwarz, der mit ...e5 und ...Sf6 ein bequemes Spiel hat.",
  },

  "1.e4 d6 2.f3": {
    strategy:
      "Stützt e4 und bereitet Le3 und Dd2 vor, ergibt aber erst nach d4 und Sc3 Sinn. Hier " +
      "nimmt es dem Königsspringer das Feld f3 und lockert die Diagonale e1-h4 ohne " +
      "Gegenwert, während Schwarz sich frei entwickelt.",
  },

  "1.e4 d6 2.h3": {
    strategy:
      "Ein prophylaktischer Randbauernzug gegen ...Lg4, gespielt, bevor eine Figur entwickelt " +
      "ist. Er verliert ein Tempo und überlässt Schwarz das Zentrum, der ungehindert ...Sf6 " +
      "und ...e5 spielt.",
  },

  "1.e4 d6 2.Na3": {
    strategy:
      "Stellt den Springer an den Rand, fern vom Zentrum und ohne d4 oder e4 zu stützen. " +
      "Schwarz antwortet mit ...e5 oder ...Sf6, und Weiß braucht ein weiteres Tempo, um den " +
      "Springer nach c4 oder c2 zu bringen.",
  },

  "1.e4 d6 2.Qe2": {
    strategy:
      "Bringt die Dame früh ins Spiel und verstellt den Läufer f1, was die kurze Rochade " +
      "verzögert. Sie deckt e4, entwickelt aber keine Leichtfigur und bereitet d4 nicht vor, " +
      "und Schwarz spielt ...Sf6 oder ...e5 mit bequemem Spiel.",
  },

  "1.e4 d6 2.Qf3": {
    strategy:
      "Bringt die Dame früh ins Spiel und nimmt dem Königsspringer das Feld f3. Schwarz " +
      "entwickelt sich mit ...Sf6 und ...Sc6 und gewinnt mit ...Lg4 oder ...Sd4 Zeit gegen " +
      "die Dame.",
  },

  "1.e4 d6 2.Qh5": {
    strategy:
      "Bringt die Dame auf ein Feld, auf dem 2...Sf6 sie und den Bauern e4 zugleich angreift, " +
      "und auch ...g6 vertreibt sie. Da gegen f7 keine echte Drohung besteht, gewinnt Schwarz " +
      "Zeit für die Entwicklung.",
  },

  "1.e4 d6 2.Bd3": {
    strategy:
      "Stellt den Läufer vor den d-Bauern, sodass d4 unmöglich ist, bis er wieder zieht, und " +
      "der Läufer c1 eingesperrt bleibt. Schwarz besetzt mit ...e5 und ...Sf6 ungehindert das " +
      "Zentrum.",
  },

  "1.e4 d6 2.Bb5+": {
    strategy:
      "Gibt ein Schach, auf das Schwarz mit ...c6 antwortet, das den Läufer angreift und ein " +
      "Tempo gewinnt, oder mit ...Ld7 und einem Tausch. Weiß hat den Läufer ohne bleibenden " +
      "Gewinn eingesetzt.",
  },

  "1.e4 d6 2.Nh3": {
    strategy:
      "Strebt vom Rand nach f4 oder g5, doch 2...Lxh3 3.gxh3 verdoppelt sofort die weißen " +
      "h-Bauern und reißt den Königsflügel auf.",
  },

  "1.e4 d6 2.Ne2": {
    strategy:
      "Entwickelt den Springer auf ein passives Feld, wo er den Läufer f1 und den Weg der " +
      "Dame nach e2 verstellt und zwar d4, aber nicht e5 kontrolliert. Schwarz gewinnt mit " +
      "...e5 Raum und entwickelt sich mit ...Sf6 gegen e4.",
  },

  "1.e4 d6 2.g4": {
    name: "Rat-Verteidigung: Spike-Angriff",
    strategy:
      "Schwächt f3, h3 und den ganzen Königsflügel, ohne etwas zu entwickeln, und ...Sf6 " +
      "greift sofort e4 an. Schwarz setzt mit ...h6 und ...e5 gegen die gelockerte Stellung " +
      "fort.",
  },

  "1.e4 d6 2.h4": {
    name: "Rat-Verteidigung: Petruccioli-Angriff",
    strategy:
      "Schiebt den Randbauern für einen Königsangriff vor, hinter dem nichts steht. Zentrum " +
      "und Entwicklung werden vernachlässigt, g4 wird geschwächt, und Schwarz antwortet nach " +
      "Belieben mit ...Sf6 oder ...e5.",
  },

  "1.e4 d6 2.Qg4": {
    strategy:
      "Stellt die Dame ein: 2...Lxg4 gewinnt sie, weil der Läufer c8 auf der offenen " +
      "Diagonale g4 erreicht und nichts das Feld deckt.",
  },

  "1.e4 d6 2.Ke2": {
    strategy:
      "Gibt das Rochaderecht ohne Gegenwert auf, verstellt Läufer und Dame und lässt den " +
      "König im Zentrum, wo ...Lg4+ und ...e5 Zeit gewinnen. Ein dauerhaftes Zugeständnis.",
  },

  "1.e4 d6 2.Ba6": {
    strategy:
      "Verliert einen Läufer für nichts: 2...bxa6 oder 2...Sxa6 schlägt ihn, und keine weiße " +
      "Figur kann auf a6 zurückschlagen.",
  },

  "1.e4 d6 2.e5": {
    strategy:
      "Schiebt den Bauern auf ein Feld, auf dem ihn nichts deckt: 2...dxe5 gewinnt ihn, und " +
      "Weiß kann nicht zurückschlagen und hat keinen Entwicklungsvorsprung als Ausgleich.",
  },

  "1.e4 d6": {
    name: "Pirc-Ufimzew-Verteidigung",
    background:
      "Benannt nach dem slowenischen Großmeister Vasja Pirc, der sie ab den späten " +
      "1940er-Jahren oft spielte; in Russland heißt sie oft Ufimzew-Verteidigung, nach " +
      "Anatoli Ufimzew. Ihr Debüt in einem WM-Kampf gab sie in der 17. Partie des Wettkampfs " +
      "von 1972 in Reykjavík, als Bobby Fischer sie gegen Boris Spasski spielte und " +
      "remisierte.",
  },
};
