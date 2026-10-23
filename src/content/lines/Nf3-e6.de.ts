import type { OpeningTexts } from "../book.ts";

// German prose for Nf3-e6.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.Nf3 e6 2.c4": {
    name: "Englische Eröffnung: Agincourt-Verteidigung",
    background:
      "Dieselbe Stellung entsteht nach 1.c4 e6 2.Sf3, einer der beiden üblichen weißen " +
      "Antworten auf 1...e6 in der Englischen Eröffnung. Schwarz strebt ein durch e6 " +
      "gestütztes ...d5 an, vergleichbar mit der Französischen Verteidigung, und die Partie " +
      "geht oft in andere Systeme über, am häufigsten ins Abgelehnte Damengambit oder in die " +
      "Katalanische Eröffnung.",
    strategy:
      "Stellt einen Bauern nach c4, der auf d5 drückt, während der d-Bauer abwartet. Nach " +
      "2...d5 führt 3.d4 ins Abgelehnte Damengambit, 3.g3 mit Lg2 zu einem neokatalanischen " +
      "Aufbau und 3.b3 zu einem Réti-Aufbau. Schwarz kann auch auf ...d5 verzichten und " +
      "...Sf6 mit ...b6 oder ...Lb4 spielen oder mit ...c5 zuschlagen. Der Bauer besetzt noch " +
      "kein Zentrumsfeld, sodass Schwarz die Wahl der Struktur behält.",
  },

  "1.Nf3 e6 2.d4": {
    strategy:
      "Besetzt das Zentrum und öffnet den Läufer c1. Nach 2...d5 wählt Weiß 3.c4 für das " +
      "Abgelehnte Damengambit, Lf4 für das Londoner System oder e3 für einen Colle-Aufbau; " +
      "2...Sf6 3.c4 b6 führt in die Damenindische Verteidigung und 2...f5 in die Holländische " +
      "Verteidigung. Schwarz kann den Bauern d4 auch sofort mit 2...c5 angreifen.",
  },

  "1.Nf3 e6 2.g3": {
    strategy:
      "Bereitet Lg2 und die kurze Rochade vor. Nach 2...d5 3.Lg2 Sf6 4.O-O kann Weiß mit d3, " +
      "Sbd2 und e4 einen Königsindischen Angriff aufbauen oder mit c4 und d4 in eine " +
      "Katalanische Eröffnung übergehen. Schwarz gewinnt mit ...d5 und ...c5 Raum, und der " +
      "Läufer g2 beißt auf den Bauern d5, bis Weiß ihn mit c4 oder e4 angreift.",
  },

  "1.Nf3 e6 2.b3": {
    name: "Larsen-Eröffnung",
    background:
      "Die Eröffnung entsteht häufig durch Zugumstellung, besonders mit 1.Sf3 und " +
      "anschließend 2.b3, wie hier. Aron Nimzowitsch experimentierte in den 1920er- und " +
      "1930er-Jahren mit 1.b3, wählte aber häufiger die Zugfolge 1.Sf3 d5 2.b3; Bent Larsen " +
      "spielte 1.b3 zwischen 1968 und 1972 häufig.",
    strategy:
      "Bereitet Lb2 vor, der über die lange Diagonale auf e5 und f6 zielt, während c4, d3 und " +
      "e3 in Reserve bleiben. Nach 2...d5 3.Lb2 Sf6 4.e3 Le7 steht Weiß solide, und Schwarz " +
      "hat mehr Raum im Zentrum. Die Theorie bewertet viele solcher Linien nur als " +
      "ausgeglichen, sodass der Wert des Aufbaus eher praktischer als objektiver Natur ist.",
  },

  "1.Nf3 e6 2.e4": {
    strategy:
      "Besetzt sofort das Zentrum und geht in die Springervariante 1.e4 e6 2.Sf3 der " +
      "Französischen Verteidigung über. Nach 2...d5 führt 3.exd5 exd5 4.d4 zur " +
      "Abtauschvariante, und 2...c5 3.d4 cxd4 4.Sxd4 ergibt eine offene Sizilianische " +
      "Verteidigung mit ...e6. Der Zug ist solide, doch Schwarz wählt, welche der beiden " +
      "Verteidigungen aufs Brett kommt.",
  },

  "1.Nf3 e6 2.e3": {
    strategy:
      "Öffnet den Läufer f1 und bereitet entweder d4 in einem Colle-artigen Aufbau mit Ld3, " +
      "O-O und Sbd2 oder ein Damenflügelfianchetto mit b3 und Lb2 vor. Sobald d4 folgt, " +
      "sperrt der Bauer e3 den Läufer c1 ein, und da nichts um d5 kämpft, erreicht Schwarz " +
      "bequem ...d5 und ...c5.",
  },

  "1.Nf3 e6 2.d3": {
    strategy:
      "Öffnet den Läufer c1 und bereitet e4 vor, meist mit g3, Lg2, O-O und Sbd2 in einem " +
      "Aufbau des Königsindischen Angriffs. Die Struktur ist solide, aber bescheiden: Schwarz " +
      "gewinnt mit ...d5 und ...c5 Raum, und das weiße Spiel hängt davon ab, e4 " +
      "durchzusetzen.",
  },

  "1.Nf3 e6 2.c3": {
    strategy:
      "Bereitet d4 vor und öffnet der Dame die Diagonale d1–a4 für Db3 oder Da4, entwickelt " +
      "aber nichts und nimmt dem Damenspringer das Feld c3. Schwarz gewinnt ungehindert mit " +
      "...d5 und ...c5 Raum, und ein späteres c4 würde Weiß ein weiteres Tempo kosten.",
  },

  "1.Nf3 e6 2.Nc3": {
    strategy:
      "Entwickelt den Damenspringer und überwacht d5 und e4, verstellt aber den c-Bauern, " +
      "sodass englische Aufbauten mit c4 vorerst ausscheiden. Schwarz besetzt mit 2...d5 das " +
      "Zentrum, worauf 3.e4 in eine Französische Verteidigung und 3.d4 in ein " +
      "Damenbauernspiel ohne c4 führt. Schwarz kann den Springer auch sofort mit 2...Lb4 " +
      "angreifen.",
  },

  "1.Nf3 e6 2.a3": {
    strategy:
      "Ein abwartender Zug, der b4 vorbereitet, aber nichts für das Zentrum oder die " +
      "Entwicklung tut. Weiß verbraucht ein Tempo am Flügel, während Schwarz mit ...d5 Raum " +
      "gewinnt und sich ungehindert entwickelt.",
  },

  "1.Nf3 e6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und verhindert ...b5, kostet aber ein Tempo und hilft Weiß " +
      "im Zentrum nicht. Schwarz gewinnt mit ...d5 und ...c5 Raum und entwickelt sich, ohne " +
      "gefordert zu werden.",
  },

  "1.Nf3 e6 2.h3": {
    strategy:
      "Nimmt einem schwarzen Springer das Feld g4, doch der Läufer c8 ist hinter e6 " +
      "eingesperrt und keine Figur steht bereit, nach g4 zu ziehen, sodass das Tempo " +
      "verschenkt ist. Schwarz besetzt mit ...d5 und ...c5 das Zentrum, während Weiß sich " +
      "noch entwickeln muss.",
  },

  "1.Nf3 e6 2.Na3": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er c4 und b5 ins Auge fasst, aber nichts für " +
      "das Zentrum tut. Nach 2...Lxa3 3.bxa3 hat Weiß das Läuferpaar und die b-Linie, doch " +
      "die isolierten Doppelbauern auf der a-Linie sind eine dauerhafte Schwäche, und 2...d5 " +
      "besetzt einfach das Zentrum.",
  },

  "1.Nf3 e6 2.Ne5": {
    strategy:
      "Zieht den Springer ein zweites Mal auf ein Feld, auf dem ihn 2...d6 angreift, und er " +
      "muss zurück; nach 3.Sc4 gewinnt sogar 3...d5 ein weiteres Tempo. Weiß hat Zeit " +
      "verloren, während Schwarz ein Bauernzentrum aufbaut.",
  },

  "1.Nf3 e6 2.Nd4": {
    strategy:
      "Zentralisiert den Springer, doch 2...c5 oder 2...e5 greift ihn sofort an, und er muss " +
      "erneut ziehen, etwa zurück nach f3 oder an den Rand nach b3 oder b5. Schwarz gewinnt " +
      "mit Tempo Raum im Zentrum.",
  },

  "1.Nf3 e6 2.Ng1": {
    strategy:
      "Zieht den Springer auf sein Ausgangsfeld zurück und macht den ersten Zug rückgängig. " +
      "Weiß hat zwei Tempi verloren, und Schwarz ist mit dem bereits gespielten ...e6 " +
      "praktisch einen Zug voraus.",
  },

  "1.Nf3 e6 2.b4": {
    strategy:
      "Opfert den b-Bauern ohne ausreichende Gegenleistung: Der durch ...e6 befreite Läufer " +
      "f8 schlägt ihn mit 2...Lxb4, und nichts schlägt zurück. c3 und d4 gewinnen nur ein " +
      "paar Tempi gegen einen Läufer, der sich mit ...Le7 oder ...Ld6 zurückzieht.",
  },

  "1.Nf3 e6 2.g4": {
    strategy:
      "Gewinnt Raum am Königsflügel, doch nichts deckt den Bauern g4, und die Bauerndeckung " +
      "des Königs ist dauerhaft gelockert. Schwarz kann den Bauern sofort mit 2...h5 " +
      "angreifen oder einfach mit ...d5 das Zentrum besetzen, und der Vorstoß hat nichts für " +
      "die weiße Entwicklung getan.",
  },

  "1.Nf3 e6 2.h4": {
    strategy:
      "Ein Randbauernvorstoß, der nichts entwickelt und Schwarz Zeit für ...d5 und ...c5 " +
      "gibt. Er schwächt g4 und den Königsflügel dauerhaft, und die Idee Sg5 wird durch ...h6 " +
      "unterbunden.",
  },

  "1.Nf3 e6 2.Rg1": {
    strategy:
      "Der Turm kann nur nach g1 ziehen, weil der Springer das Feld verlassen hat; der Zug " +
      "verwirkt die kurze Rochade endgültig und entwickelt nichts. Schwarz besetzt mit ...d5 " +
      "das Zentrum, während der weiße König in der Mitte bleibt.",
  },

  "1.Nf3 e6 2.Ng5": {
    strategy:
      "Verliert den Springer: Der Bauernzug ...e6 hat die Diagonale von d8 aus geöffnet, " +
      "sodass 2...Dxg5 ihn schlägt, und nichts deckt g5, weil der Bauer d2 den Läufer c1 " +
      "blockiert.",
  },

  "1.Nf3 e6 2.Nh4": {
    strategy:
      "Verliert den Springer nach 2...Dxh4, da ...e6 die Diagonale d8–h4 geöffnet hat und " +
      "nichts h4 deckt. Weiß erhält nichts dafür.",
  },

  "1.Nf3 e6": {
    name: "Zukertort-Eröffnung: Damengambit-Einladung",
  },
};
