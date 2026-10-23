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
      "Greift d5 an, bevor Schwarz es besetzt hat, während der d-Bauer abwartet, sodass noch ein " +
      "Damenbauernspiel, ein Aufbau mit dem Königsläufer auf der langen Diagonale oder eine " +
      "Flankeneröffnung entstehen kann. Der Preis: Noch steht kein Bauer im Zentrum, Schwarz " +
      "kann dort aufbauen, und Weiß muss zeigen, dass sich der Druck lohnt.",
  },

  "1.Nf3 e6 2.d4": {
    strategy:
      "Beansprucht das Zentrum mit einem Bauern und öffnet den Läufer c1, sodass Weiß sofort " +
      "Raum und einen klaren Plan hat. Der Preis ist die Festlegung: Schwarz kann den Bauern " +
      "sofort angreifen oder solide im Zentrum dagegenhalten. Ein klassisches Damenbauernspiel " +
      "mit direktem Kampf um das Zentrum.",
  },

  "1.Nf3 e6 2.g3": {
    strategy:
      "Bereitet Lg2 und die kurze Rochade vor; der Läufer wirkt auf der langen Diagonale, sobald " +
      "der Springer gezogen hat. Weiß hält das Zentrum flexibel, überlässt es aber Schwarz, der " +
      "im Zentrum Raum gewinnen kann. Ein langsameres Manövrierspiel, in dem Weiß allmählich " +
      "Druck aufbaut.",
  },

  "1.Nf3 e6 2.b3": {
    name: "Larsen-Eröffnung",
    background:
      "Die Eröffnung entsteht häufig durch Zugumstellung, besonders mit 1.Sf3 und " +
      "anschließend 2.b3, wie hier. Aron Nimzowitsch experimentierte in den 1920er- und " +
      "1930er-Jahren mit 1.b3, wählte aber häufiger die Zugfolge 1.Sf3 d5 2.b3; Bent Larsen " +
      "spielte 1.b3 zwischen 1968 und 1972 häufig.",
    strategy:
      "Bereitet Lb2 vor, der über die lange Diagonale auf e5 und f6 zielt und das Zentrum aus " +
      "der Distanz kontrolliert, statt es zu besetzen. Weiß bleibt flexibel und solide, doch " +
      "Schwarz kann ein Bauernzentrum aufbauen, sodass es darum geht, ob Weiß es später " +
      "untergraben kann.",
  },

  "1.Nf3 e6 2.e4": {
    strategy:
      "Besetzt sofort das Zentrum und steuert auf eine Französische Verteidigung zu, da der " +
      "schwarze Bauer schon auf e6 steht. Der Zug ist solide, doch Schwarz bestimmt den " +
      "Charakter der Partie, von einer soliden Bauernkette bis zu einem frühen Angriff auf das " +
      "weiße Zentrum mit dem c-Bauern.",
  },

  "1.Nf3 e6 2.e3": {
    strategy:
      "Öffnet den Läufer f1 und bereitet d4 in einem soliden Aufbau vor. Der Zug ist bescheiden: " +
      "Sobald d4 folgt, sperrt der Bauer e3 den Läufer c1 ein, und da nichts um d5 kämpft, baut " +
      "Schwarz bequem ein Zentrum auf.",
  },

  "1.Nf3 e6 2.d3": {
    strategy:
      "Öffnet den Läufer c1 und bereitet e4 vor, meist in einem Aufbau um einen fianchettierten " +
      "Königsläufer. Die Struktur ist solide, aber bescheiden: Schwarz gewinnt im Zentrum Raum, " +
      "und das weiße Spiel hängt davon ab, e4 durchzusetzen.",
  },

  "1.Nf3 e6 2.c3": {
    strategy:
      "Bereitet d4 vor und öffnet der Dame die Diagonale d1–a4, entwickelt aber nichts und nimmt " +
      "dem Damenspringer das Feld c3. Schwarz gewinnt ungehindert im Zentrum Raum, und ein " +
      "späteres c4 würde Weiß ein weiteres Tempo kosten.",
  },

  "1.Nf3 e6 2.Nc3": {
    strategy:
      "Entwickelt den Damenspringer und überwacht d5 und e4, verstellt aber den c-Bauern, sodass " +
      "Aufbauten mit c4 vorerst ausscheiden. Schwarz kann sofort das Zentrum besetzen oder den " +
      "Springer mit 2...Lb4 angreifen.",
  },

  "1.Nf3 e6 2.a3": {
    strategy:
      "Ein abwartender Zug, der b4 vorbereitet, aber nichts für das Zentrum oder die " +
      "Entwicklung tut. Weiß verbraucht ein Tempo am Flügel, während Schwarz mit ...d5 Raum " +
      "gewinnt und sich ungehindert entwickelt.",
  },

  "1.Nf3 e6 2.a4": {
    strategy:
      "Gewinnt Raum am Damenflügel und verhindert ...b5, kostet aber ein Tempo und hilft Weiß im " +
      "Zentrum nicht. Schwarz gewinnt im Zentrum Raum und entwickelt sich, ohne gefordert zu " +
      "werden.",
  },

  "1.Nf3 e6 2.h3": {
    strategy:
      "Nimmt einem schwarzen Springer das Feld g4, doch der Läufer c8 ist hinter e6 eingesperrt " +
      "und keine Figur steht bereit, nach g4 zu ziehen, sodass das Tempo verschenkt ist. Schwarz " +
      "besetzt das Zentrum, während Weiß sich noch entwickeln muss.",
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
      "Opfert den b-Bauern ohne ausreichende Gegenleistung: Der durch ...e6 befreite Läufer f8 " +
      "schlägt ihn mit 2...Lxb4, und nichts schlägt zurück. Ein späterer Angriff auf den Läufer " +
      "gewinnt nur ein paar Tempi, denn er kann sich zurückziehen.",
  },

  "1.Nf3 e6 2.g4": {
    strategy:
      "Gewinnt Raum am Königsflügel, doch nichts deckt den Bauern g4, und die Bauerndeckung des " +
      "Königs ist dauerhaft gelockert. Schwarz kann den Bauern sofort mit 2...h5 angreifen oder " +
      "einfach das Zentrum besetzen, und der Vorstoß hat nichts für die weiße Entwicklung getan.",
  },

  "1.Nf3 e6 2.h4": {
    strategy:
      "Ein Randbauernvorstoß, der nichts entwickelt und Schwarz Zeit gibt, das Zentrum zu " +
      "besetzen. Er schwächt g4, und die Idee Sg5 lässt sich leicht mit ...h6 beantworten.",
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

  "1.Nf3 e6 2.c4 Nf6": {
    strategy:
      "Das flexible Spiel: Schwarz entwickelt eine Figur und legt die Bauern auf nichts fest, " +
      "sodass Damengambit, Katalanisch, indische Systeme und symmetrische Aufstellungen möglich " +
      "bleiben. Der Preis: Weiß bestimmt, welche Struktur entsteht, und Schwarz muss in mehreren " +
      "zu Hause sein.",
  },

  "1.Nf3 e6 2.c4 d5": {
    strategy:
      "Erhebt sofort Anspruch auf das Zentrum und steuert eine Stellung vom Typ des Damengambits " +
      "an, wobei der Bauer e6 d5 solide stützt. Der Preis ist der Läufer c8, der hinter der " +
      "Bauernkette eingesperrt bleibt, bis Schwarz einen Weg findet, ihn zu befreien.",
  },

  "1.Nf3 e6 2.c4 c5": {
    strategy:
      "Kontrolliert d4 und strebt eine symmetrische Struktur der Englischen Eröffnung an, mit " +
      "dem Bauern bereits auf e6, sodass ...d5 möglich bleibt. Der Preis: Ein späteres ...d5 " +
      "kann Schwarz einen isolierten d-Bauern oder hängende Bauern einbringen.",
  },

  "1.Nf3 e6 2.c4 Nc6": {
    strategy:
      "Entwickelt einen Springer und zielt auf d4 und e5, verstellt aber den c-Bauern, sodass " +
      "...c5 vorerst ausgeschlossen ist. Weiß kann sofort das Zentrum besetzen. Solide, aber " +
      "weniger flexibel, als den anderen Springer zu entwickeln oder im Zentrum zuzuschlagen.",
  },

  "1.Nf3 e6 2.c4 Be7": {
    strategy:
      "Entwickelt den schwarzfeldrigen Läufer und macht den Weg zur Rochade frei, während ...d5 " +
      "für später bleibt. Der Zug verzichtet auf das aktive ...Lb4 und überlässt Weiß die " +
      "Gestaltung des Zentrums. Solide, aber langsamer und weniger flexibel, als den Springer zu " +
      "entwickeln oder im Zentrum zuzuschlagen.",
  },

  "1.Nf3 e6 2.c4 Bb4": {
    strategy:
      "Entwickelt den Läufer mit einer Fesselung des Bauern d2, sodass d4 unmöglich ist, bis " +
      "Weiß die Diagonale verstellt oder den Läufer vertreibt. Spielbar, doch der Läufer hat " +
      "kein klares Ziel, solange Weiß nicht d4 zieht.",
  },

  "1.Nf3 e6 2.c4 b6": {
    strategy:
      "Bereitet ...Lb7 auf der langen Diagonale vor, um das Zentrum aus der Distanz unter Druck " +
      "zu setzen. Weiß kann sofort Raum im Zentrum beanspruchen, daher muss Schwarz bereit sein, " +
      "das Zentrum später anzugreifen. Solide und flexibel, aber ein weniger direkter Kampf um " +
      "das Zentrum als ein zentraler Bauernzug oder die Springerentwicklung.",
  },

  "1.Nf3 e6 2.c4 c6": {
    strategy:
      "Bereitet ...d5 mit einer soliden Bauernstruktur vor. Der Zug ist langsam und nimmt dem " +
      "Springer b8 das Feld c6, und Weiß kann stattdessen mit einem Fianchetto antworten. " +
      "Solide, aber weniger flexibel, als sofort zu entwickeln oder im Zentrum zuzuschlagen.",
  },

  "1.Nf3 e6 2.c4 d6": {
    strategy:
      "Baut ein kompaktes Bauernpaar auf d6 und e6, hinter dem Schwarz sich entwickelt und " +
      "später einen Durchbruch im Zentrum anstrebt. Der Zug bestreitet e4 nicht, sodass Weiß " +
      "frei ein breites Zentrum aufbauen kann. Spielbar und solide, aber passiv.",
  },

  "1.Nf3 e6 2.c4 f5": {
    strategy:
      "Steuert eine holländische Aufstellung an und kontrolliert e4. Der Zug lockert die " +
      "Diagonale e8–h5 und hinterlässt in einer Stonewall-Struktur ein Loch auf e5. Korrekt, " +
      "aber festlegend und weniger solide als ...d5.",
  },

  "1.Nf3 e6 2.c4 g6": {
    strategy:
      "Bereitet ...Lg7 vor, der auf der langen Diagonale drückt. Der Zug tut sofort nichts für " +
      "das Zentrum, sodass Weiß dort zuerst aufbauen kann. Ein flexibler, aber langsamer Aufbau; " +
      "ein direkter Kampf um das Zentrum ist vorzuziehen.",
  },

  "1.Nf3 e6 2.c4 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er auf b4 und c5 zielt, aber d5 und das Zentrum nicht " +
      "umkämpft. Weiß gewinnt Raum, während Schwarz Zeit verloren hat.",
  },

  "1.Nf3 e6 2.c4 Qe7": {
    strategy:
      "Bringt die Dame früh nach e7, wo sie dem Läufer f8 die einzige offene Diagonale " +
      "verstellt, sodass sich die Figuren des Königsflügels nur langsam entwickeln. Weiß baut " +
      "das Zentrum auf und gewinnt Zeit.",
  },

  "1.Nf3 e6 2.c4 Qf6": {
    strategy:
      "Bringt die Dame früh heraus und nimmt dem Springer g8 das Feld f6. Der Angriff auf b2 ist " +
      "leer, denn ...Dxb2 verliert die Dame gegen Lxb2, und Weiß gewinnt Zeit, indem es die Dame " +
      "zurückdrängt.",
  },

  "1.Nf3 e6 2.c4 Bd6": {
    strategy:
      "Blockiert den Bauern d7, sodass ...d5 unmöglich ist, solange der Läufer auf d6 steht, und " +
      "der Läufer wird zum Ziel für den weißen Springer und die Zentrumsbauern. Weiß baut " +
      "einfach das Zentrum auf.",
  },

  "1.Nf3 e6 2.c4 Bc5": {
    strategy:
      "Stellt den Läufer dorthin, wo ihn d4 angreift, sodass Weiß mit Tempo Raum im Zentrum " +
      "gewinnt, während der Läufer erneut ziehen muss.",
  },

  "1.Nf3 e6 2.c4 Nh6": {
    strategy:
      "Stellt den Springer an den Rand. Nach d4 greift ihn der Läufer c1 an, und Lxh6 gxh6 " +
      "würde die h-Bauern verdoppeln, während ...Sf5 mit Tempogewinn durch e4 beantwortet " +
      "werden kann.",
  },

  "1.Nf3 e6 2.c4 Ne7": {
    strategy:
      "Verstellt den Läufer f8 und verzichtet auf das natürliche ...Sf6. Der Springer " +
      "unterstützt von e7 aus ...d5, doch der Läufer bleibt eingesperrt, bis der Springer erneut " +
      "zieht oder Schwarz den Läufer fianchettiert, und Weiß gewinnt im Zentrum Zeit.",
  },

  "1.Nf3 e6 2.c4 a6": {
    strategy:
      "Verwendet ein Tempo auf einen Randbauern, der weder um das Zentrum kämpft noch eine Figur " +
      "entwickelt; bestenfalls bereitet er ...b5 vor, das c4 bereits erschwert. Weiß entwickelt " +
      "sich ungestört weiter.",
  },

  "1.Nf3 e6 2.c4 a5": {
    strategy:
      "Zieht den a-Bauern ohne Zweck vor und schwächt für ein Tempo b5 und den Damenflügel. Weiß " +
      "baut ungestört das Zentrum auf.",
  },

  "1.Nf3 e6 2.c4 f6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6, sodass ihm nur e7 und h6 bleiben, und öffnet die " +
      "Diagonale e8–h5 zum König, ohne eine Figur zu entwickeln. Weiß errichtet ein breites " +
      "Zentrum.",
  },

  "1.Nf3 e6 2.c4 g5": {
    strategy:
      "Lockert den Königsflügel dauerhaft und tut nichts für Zentrum oder Entwicklung. Die " +
      "Dame deckt g5, doch d4 bringt den Läufer c1 als zweiten Angreifer ins Spiel, sodass " +
      "Schwarz ein weiteres Tempo für ...h6 oder ...g4 aufwenden muss, und nach ...g4 Se5 " +
      "wird der Bauer zum Angriffsziel.",
  },

  "1.Nf3 e6 2.c4 h6": {
    strategy:
      "Verhindert vorbeugend Lg5 und Sg5, doch keiner der beiden Züge droht schon, sodass der " +
      "Zug vor allem ein Tempo kostet, während das Zentrum noch unumkämpft ist. Weiß baut " +
      "ungestört das Zentrum auf.",
  },

  "1.Nf3 e6 2.c4 h5": {
    strategy:
      "Schiebt den Randbauern ohne Zweck vor und verliert ein Tempo; ...h6 steht nicht mehr zur " +
      "Verfügung, um einen Läufer oder Springer von g5 zu vertreiben. Weiß baut einfach das " +
      "Zentrum auf.",
  },

  "1.Nf3 e6 2.c4 Qg5": {
    strategy:
      "Stellt die Dame auf ein Feld, das der Springer f3 angreift; Sxg5 gewinnt sie ohne " +
      "Weiteres.",
  },

  "1.Nf3 e6 2.c4 Qh4": {
    strategy:
      "Der Springer f3 greift h4 an, und nichts deckt die Dame, sodass Sxh4 sie sofort " +
      "gewinnt.",
  },

  "1.Nf3 e6 2.c4 Ke7": {
    strategy:
      "Verzichtet endgültig auf die Rochade und verstellt den Läufer f8 und die Diagonale der " +
      "Dame, ohne etwas zu gewinnen. Der König bleibt im Zentrum, wo er zur Zielscheibe wird, " +
      "sobald Weiß die Stellung mit d4 öffnet.",
  },

  "1.Nf3 e6 2.c4 Ba3": {
    strategy: "Verschenkt den Läufer: bxa3 oder Sxa3 schlägt ihn, und Schwarz erhält nichts dafür.",
  },

  "1.Nf3 e6 2.c4 b5": {
    strategy:
      "Lässt einen Bauern hängen: cxb5 schlägt ihn, und Schwarz hat keine echte Kompensation " +
      "dafür.",
  },

  "1.Nf3 e6 2.c4 e5": {
    strategy:
      "Zieht den e-Bauern ein zweites Mal und verliert ihn: Nichts deckt e5, sodass Sxe5 " +
      "einen Bauern gewinnt, und Schwarz hat keine Entwicklung dafür vorzuweisen.",
  },

  "1.Nf3 e6 2.g3 d5": {
    strategy:
      "Besetzt sofort das Zentrum und baut mit dem bereits gespielten ...e6 das solide " +
      "französische Bauernpaar d5 und e6 auf. Schwarz hält das Zentrum fest in der Hand und " +
      "erhält eine geschlossene, manövrierende Partie gegen den flexiblen weißen Aufbau. Der " +
      "Preis ist der Läufer c8, der hinter dem Bauern e6 eingesperrt bleibt.",
  },

  "1.Nf3 e6 2.g3 Nf6": {
    strategy:
      "Entwickelt den Springer, der d5 und e4 kontrolliert. Schwarz hat noch die Wahl zwischen " +
      "einem soliden Bauern auf d5 und einem Fianchetto des Damenläufers, doch noch steht kein " +
      "Bauer im Zentrum, sodass Weiß sich weiterhin frei aufstellen kann.",
  },

  "1.Nf3 e6 2.g3 c5": {
    strategy:
      "Kämpft um d4 und hält Springer und d-Bauer flexibel. Öffnet Weiß das Zentrum, steht der " +
      "c-Bauer gegen den weißen d-Bauern, wobei ...e6 bereits gespielt ist; sonst wird die " +
      "Partie langsamer, mit Spiel am Damenflügel und auf der langen Diagonale. Schwarz hat noch " +
      "keine Figur entwickelt.",
  },

  "1.Nf3 e6 2.g3 Nc6": {
    strategy:
      "Entwickelt mit Druck auf d4 und e5 und hält einen zentralen Bauernzug und die Entwicklung " +
      "des anderen Springers offen. Der Springer verstellt den c-Bauern, sodass ...c5 vorerst " +
      "ausgeschlossen ist. Solide, doch der Springer legt sich fest, bevor die Bauernstruktur " +
      "geklärt ist.",
  },

  "1.Nf3 e6 2.g3 Be7": {
    strategy:
      "Entwickelt den Läufer und bereitet die Rochade in einem soliden Aufbau vor. Der Zug " +
      "erhebt keinen Anspruch auf das Zentrum, sodass Weiß seinen Plan frei wählen kann. Solide, " +
      "aber weniger direkt als ein Zentrumsbauernzug oder die Entwicklung des Springers.",
  },

  "1.Nf3 e6 2.g3 b6": {
    strategy:
      "Bereitet ...Lb7 vor, das dem Läufer c8 eine offene Diagonale gibt und dem kommenden " +
      "weißen Läufer auf g2 die lange Diagonale streitig macht. Noch beansprucht kein schwarzer " +
      "Bauer das Zentrum. Solide, aber langsamer als den Zentrumsanspruch zu erheben oder den " +
      "Springer zu entwickeln.",
  },

  "1.Nf3 e6 2.g3 b5": {
    strategy:
      "Gewinnt Raum am Damenflügel und bereitet ...Lb7 gegen die lange Diagonale vor. Nichts " +
      "deckt den Bauern b5, sodass a4 ihn sofort angreift. Für das Zentrum tut der Zug nichts, " +
      "dort ist ein Bauer auf d5 der direktere Anspruch.",
  },

  "1.Nf3 e6 2.g3 c6": {
    strategy:
      "Bereitet ...d5 hinter einer kompakten Bauernkette c6, d5 und e6 vor und kontrolliert b5 " +
      "und d5. Steht der Bauer erst auf d5, ist der Läufer c8 hinter e6 eingesperrt. Solide, " +
      "aber langsamer als das sofortige ...d5.",
  },

  "1.Nf3 e6 2.g3 d6": {
    strategy:
      "Bereitet einen kompakten Aufbau vor, vielleicht mit einem späteren Zentrumsvorstoß. Der " +
      "Zug überlässt Weiß Raum im Zentrum, denn Weiß kann das Zentrum sofort nehmen, ohne dass " +
      "ein schwarzer Bauer es herausfordert. Solide, aber passiv.",
  },

  "1.Nf3 e6 2.g3 f5": {
    strategy:
      "Kontrolliert e4 und steuert einen Aufbau um den Bauern f5 an, bei dem die " +
      "Königsflügelfiguren entwickelt werden und danach der d-Bauer das Zentrum schließt. Der " +
      "Bauernzug schwächt die Diagonale e8-h5, und sobald der d-Bauer auf d5 steht, wird e5 zu " +
      "einem Loch für einen weißen Springer.",
  },

  "1.Nf3 e6 2.g3 g6": {
    strategy:
      "Bereitet ...Lg7 und ein spiegelbildliches Fianchetto vor, mit kurzer Rochade als " +
      "Fortsetzung. Noch beansprucht kein schwarzer Bauer das Zentrum, sodass Weiß frei Raum " +
      "nehmen kann. Solide, aber langsam.",
  },

  "1.Nf3 e6 2.g3 Na6": {
    strategy:
      "Entwickelt den Springer an den Rand, wo er b4 und c5 ins Auge fasst, aber wenig Einfluss " +
      "auf das Zentrum hat. Weiß gewinnt Zeit, das Zentrum zu besetzen.",
  },

  "1.Nf3 e6 2.g3 Qe7": {
    strategy:
      "Stellt die Dame vor den Läufer f8 und versperrt ihm seine einzige offene Diagonale, " +
      "sodass die Entwicklung des schwarzen Königsflügels warten muss, bis die Dame wieder " +
      "zieht. Weiß entwickelt sich einfach und besetzt das Zentrum.",
  },

  "1.Nf3 e6 2.g3 Qf6": {
    strategy:
      "Bringt die Dame früh heraus, wo sie b2 ins Visier nimmt, das der Läufer c1 deckt, und " +
      "nimmt dem Springer g8 das Feld f6. Nach 3.d4 kann der Läufer nach g5 kommen und die Dame " +
      "mit Tempogewinn angreifen.",
  },

  "1.Nf3 e6 2.g3 Bd6": {
    strategy:
      "Verstellt den d-Bauern, sodass ...d5 unmöglich ist, bis der Läufer wieder zieht, und " +
      "macht den Läufer zum Ziel für einen späteren Vorstoß e4-e5. Weiß entwickelt sich und " +
      "besetzt das Zentrum.",
  },

  "1.Nf3 e6 2.g3 Bc5": {
    strategy:
      "Zielt auf f2, das der König deckt, doch 3.d4 greift den Läufer an, der erneut ziehen " +
      "muss, während Weiß mit Tempogewinn das Zentrum besetzt hat.",
  },

  "1.Nf3 e6 2.g3 Bb4": {
    strategy:
      "Zielt auf d2, das mehrfach gedeckt ist, sodass keine Drohung besteht, und 3.c3 " +
      "vertreibt den Läufer mit einem nützlichen Zug, der zugleich d4 vorbereitet.",
  },

  "1.Nf3 e6 2.g3 Nh6": {
    strategy:
      "Strebt nach f5, doch der Springer steht bis dahin am Rand, und sobald der d-Bauer gezogen " +
      "hat, hinterlässt Lxh6 gxh6 Schwarz einen Doppelbauern auf der h-Linie. Weiß kann den " +
      "Springer später mit g4 von f5 vertreiben.",
  },

  "1.Nf3 e6 2.g3 Ne7": {
    strategy:
      "Verstellt den Läufer f8, dessen natürliches Feld e7 ist, und erhebt keinen Anspruch auf " +
      "das Zentrum. Die Entwicklung des schwarzen Königsflügels bleibt zurück, während Weiß Raum " +
      "nimmt.",
  },

  "1.Nf3 e6 2.g3 a6": {
    strategy:
      "Ein Wartezug, der ...b5 vorbereitet, aber ein Tempo verbraucht, ohne eine Figur zu " +
      "entwickeln oder Raum im Zentrum zu gewinnen.",
  },

  "1.Nf3 e6 2.g3 a5": {
    strategy:
      "Kontrolliert b4, nimmt aber nicht am Kampf um das Zentrum teil und schwächt b5, das der " +
      "a-Bauer nicht mehr decken kann.",
  },

  "1.Nf3 e6 2.g3 f6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6 und schwächt den Bauern e6 sowie die Diagonale e8-h5, " +
      "ohne eine Figur zu entwickeln. Weiß kann die geschwächten weißen Felder ins Visier " +
      "nehmen.",
  },

  "1.Nf3 e6 2.g3 g5": {
    strategy:
      "Bereitet ...g4 gegen den Springer f3 vor, lockert aber den Königsflügel dauerhaft. Nur " +
      "die Dame deckt den Bauern, sodass sich nach einem Zug des d-Bauern der Läufer c1 dem " +
      "Springer im Angriff anschließt und Schwarz weitere Zeit für die Verteidigung aufwenden " +
      "muss.",
  },

  "1.Nf3 e6 2.g3 h6": {
    strategy:
      "Ein prophylaktischer Bauernzug, der ein Tempo verbraucht, ohne etwas Konkretes zu " +
      "verhindern, keine Figur entwickelt und keinen Raum im Zentrum gewinnt.",
  },

  "1.Nf3 e6 2.g3 h5": {
    strategy:
      "Bereitet ...h4 gegen g3 vor, verbraucht aber ein Tempo für einen Flügelvorstoß, der g5 " +
      "und den Königsflügel schwächt und nichts entwickelt. Weiß kann die Idee mit h4 endgültig " +
      "unterbinden.",
  },

  "1.Nf3 e6 2.g3 Ke7": {
    strategy:
      "Gibt die Rochade endgültig auf und verstellt den Läufer f8 sowie die Diagonale d8-h4 der " +
      "Dame. Nach d4 kann der Läufer c1 mit Schach nach g5 kommen, während der König im Zentrum " +
      "festsitzt.",
  },

  "1.Nf3 e6 2.g3 Qg5": {
    strategy:
      "Stellt die Dame auf ein Feld, das der Springer f3 angreift, und 3.Sxg5 schlägt sie, " +
      "weil keine schwarze Figur g5 deckt.",
  },

  "1.Nf3 e6 2.g3 Qh4": {
    strategy:
      "Stellt die Dame in den Angriff sowohl des Springers f3 als auch des Bauern g3, sodass " +
      "3.Sxh4 oder 3.gxh4 sie ohne Gegenwert gewinnt.",
  },

  "1.Nf3 e6 2.g3 Ba3": {
    strategy:
      "Der Bauer b2 und der Springer b1 greifen beide a3 an, sodass 3.bxa3 oder 3.Sxa3 den " +
      "Läufer glatt gewinnt.",
  },

  "1.Nf3 e6 2.g3 e5": {
    strategy:
      "Stellt einen Bauern ein: Der Springer f3 greift e5 an und nichts deckt ihn, sodass " +
      "3.Sxe5 ihn gewinnt. Nach 3...Dg5 öffnet 4.d4 dem Läufer c1 die Diagonale gegen die " +
      "Dame und deckt zugleich den Springer.",
  },

  "1.Nf3 e6 2.b3 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürlichstes Feld, wo er e4 und d5 kontrolliert und " +
      "sich im Zentrum auf nichts festlegt. Schwarz kann sich noch zwischen einem soliden " +
      "Bauernzentrum und einem Fianchetto im Stil der Damenindischen Verteidigung entscheiden. " +
      "Der Preis ist, dass Weiß seinen Aufbau mit Läufer und Bauern ungestört nach eigenen " +
      "Vorstellungen vollenden kann.",
  },

  "1.Nf3 e6 2.b3 d5": {
    strategy:
      "Besetzt sofort das Zentrum und erschwert mit dem Bauern e6 dahinter den weißen Vorstoß " +
      "e4. Das solide Bauernpaar hat einen kleinen Preis: Der Läufer c8 bleibt hinter e6 " +
      "eingesperrt, bis ein Fianchetto ihm die lange Diagonale gibt. Von dieser soliden Basis " +
      "aus kann Schwarz um d4 und e5 kämpfen.",
  },

  "1.Nf3 e6 2.b3 c5": {
    strategy:
      "Kämpft vom Flügel aus um d4 und lässt die Wahl zwischen einem Bauern auf d5 und einem " +
      "Fianchetto offen. Schwarz erreicht eine flexible Struktur, die nach c4 in eine " +
      "symmetrische Stellung wie in der Englischen Eröffnung übergehen kann. Weiß kann ruhig " +
      "aufbauen oder um das Zentrum kämpfen, sodass keine Seite auf einen festen Plan festgelegt " +
      "ist.",
  },

  "1.Nf3 e6 2.b3 f5": {
    strategy:
      "Bringt e4 unter Kontrolle und steuert einen holländischen Aufbau an, wobei eine " +
      "Stonewall-Kette eine Möglichkeit ist, ihn zu errichten. Der Bauer lockert die Diagonale " +
      "e8–h5, und sobald Schwarz einen Bauern auf d5 hat, wird e5 zu einem Loch, das der weiße " +
      "Läufer und ein Springer nutzen können. Der Zug legt fest: Schwarz kämpft um die " +
      "Initiative und nimmt dafür einen Verlust an Sicherheit am Königsflügel in Kauf.",
  },

  "1.Nf3 e6 2.b3 Nc6": {
    strategy:
      "Entwickelt eine Figur und zielt auf d4 und e5, doch der Springer verstellt den c-Bauern, " +
      "sodass …c5 vorerst ausgeschlossen ist. Nach Lb2 wäre der Bauer nach …e5 zweimal " +
      "angegriffen und nur einmal gedeckt, daher muss Schwarz den Zug erst vorbereiten. Solide, " +
      "aber weniger flexibel als die Entwicklung des Königsspringers oder ein sofortiger Schlag " +
      "gegen das Zentrum.",
  },

  "1.Nf3 e6 2.b3 Be7": {
    strategy:
      "Entwickelt den Läufer und macht, sobald der Königsspringer entwickelt ist, den Weg für " +
      "die Rochade frei, während …d5 und …c5 für später bleiben. Nach 3.Lb2 ist der Bauer g7 " +
      "angegriffen und nicht mehr vom Läufer gedeckt, sodass Schwarz die Diagonale sofort " +
      "blockieren muss. Solide, aber weniger direkt als die Springerentwicklung oder ein Schlag " +
      "gegen das Zentrum.",
  },

  "1.Nf3 e6 2.b3 Bb4": {
    strategy:
      "Fesselt den Bauern d2, sodass d3 und d4 unmöglich sind, bis Weiß den Läufer vertreibt " +
      "oder die Diagonale verstellt. Nach 3.Lb2 ist der Bauer g7 angegriffen und nicht mehr vom " +
      "Läufer gedeckt, sodass Schwarz die Diagonale blockieren muss. Spielbar, doch der Läufer " +
      "hat kein klares Ziel und muss womöglich erneut ziehen.",
  },

  "1.Nf3 e6 2.b3 b6": {
    strategy:
      "Bereitet …Lb7 vor, um sich Lb2 auf der langen Diagonale entgegenzustellen. Die Stellung " +
      "ist solide, aber etwas passiv, da Schwarz meist auf den weißen Plan reagiert und kaum " +
      "schnelles Gegenspiel hat.",
  },

  "1.Nf3 e6 2.b3 c6": {
    strategy:
      "Bereitet …d5 mit einer Bauernkette c6, d5 und e6 wie in der Halbslawischen Verteidigung " +
      "vor. Der Zug ist langsam, nimmt dem Springer b8 das Feld c6 und lässt den Läufer c8 " +
      "eingesperrt, sobald …d5 gespielt ist, sodass Weiß Zeit zur Entwicklung und zur Besetzung " +
      "des Zentrums erhält. Solide, aber sofortiges …d5 ist direkter.",
  },

  "1.Nf3 e6 2.b3 d6": {
    strategy:
      "Bildet ein kompaktes Bauernpaar auf d6 und e6, das e5 gegen das kommende Lb2 unter " +
      "Kontrolle hält. Der Zug überlässt Weiß Raum im Zentrum, und der Läufer c8 kann bis zu …b6 " +
      "nur nach d7 ziehen, sodass Weiß sich in Ruhe entwickelt und das Zentrum besetzt. Solide, " +
      "aber passiv.",
  },

  "1.Nf3 e6 2.b3 g6": {
    strategy:
      "Bereitet …Lg7 gegen das kommende Lb2 vor, doch nach 3.Lb2 ist der Turm h8 auf der langen " +
      "Diagonale angegriffen, und …Lg7 verliert den Läufer nach Lxg7, sodass Schwarz zuerst die " +
      "Diagonale blockieren muss. Mit Bauern auf e6 und g6 werden zudem die dunklen Felder f6 " +
      "und h6 schwach, sobald die schwarzfeldrigen Läufer getauscht sind. Solide, aber " +
      "umständlicher als natürliche Entwicklung.",
  },

  "1.Nf3 e6 2.b3 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 ins Auge fasst, aber weder d4 noch e5 " +
      "kontrolliert. Sobald e3 die Diagonale des Läufers f1 öffnet, würde Lxa6 bxa6 die " +
      "schwarzen a-Bauern verdoppeln, und Weiß entwickelt sich ungestört.",
  },

  "1.Nf3 e6 2.b3 Qe7": {
    strategy:
      "Stellt die Dame vor den Läufer f8 und versperrt ihm seine einzige offene Diagonale, " +
      "sodass die Entwicklung des schwarzen Königsflügels warten muss. 3.La3 greift die Dame " +
      "sofort auf der Diagonale a3–f8 an, und Schwarz muss die Diagonale verstellen oder die " +
      "Dame erneut ziehen.",
  },

  "1.Nf3 e6 2.b3 Qf6": {
    strategy:
      "Greift über die offene lange Diagonale den ungedeckten Turm a1 an und verhindert vorerst " +
      "Lb2, weil Dxb2 den Läufer gewinnen würde. Sobald Weiß die Diagonale verstellt, ist die " +
      "Drohung pariert, und die Dame ist Se4 und dem Bauernvorstoß e4–e5 ausgesetzt, während die " +
      "schwarze Entwicklung zurückbleibt.",
  },

  "1.Nf3 e6 2.b3 Bd6": {
    strategy:
      "Verstellt den Bauern d7, sodass …d5 unmöglich ist, solange der Läufer auf d6 steht, und " +
      "der Läufer wird zum Ziel eines späteren e4–e5. Weiß entwickelt sich frei und gewinnt Raum " +
      "im Zentrum.",
  },

  "1.Nf3 e6 2.b3 Bc5": {
    strategy:
      "Stellt den Läufer dorthin, wo ihn 3.d4 angreift, sodass Weiß mit Tempo Raum im Zentrum " +
      "gewinnt, während der Läufer erneut ziehen muss.",
  },

  "1.Nf3 e6 2.b3 Nh6": {
    strategy:
      "Stellt den Springer an den Rand, mit Ziel f5 und g4, ohne etwas für das Zentrum zu tun. " +
      "Sobald der d-Bauer gezogen hat, würde Lxh6 gxh6 die schwarzen h-Bauern verdoppeln, und " +
      "Weiß entwickelt sich und besetzt in Ruhe das Zentrum.",
  },

  "1.Nf3 e6 2.b3 Ne7": {
    strategy:
      "Verstellt den Läufer f8, dessen natürliches Feld e7 ist, und verzichtet auf …Sf6, das " +
      "beste Feld des Springers. Der Läufer bleibt eingesperrt, bis der Springer erneut zieht " +
      "oder …g6 folgt, und Weiß entwickelt sich frei und gewinnt Raum im Zentrum.",
  },

  "1.Nf3 e6 2.b3 a6": {
    strategy:
      "Ein Wartezug, der weder eine Figur entwickelt noch um das Zentrum kämpft; bestenfalls " +
      "bereitet er …b5 vor. Weiß erlangt einen Entwicklungsvorsprung.",
  },

  "1.Nf3 e6 2.b3 a5": {
    strategy:
      "Bereitet …a4 gegen den Bauern b3 vor, verbraucht aber ein Tempo am Flügel, solange das " +
      "Zentrum unbestritten ist. Weiß entwickelt sich ungestört.",
  },

  "1.Nf3 e6 2.b3 b5": {
    strategy:
      "Rückt einen Flügelbauern vor, ohne eine Figur zu entwickeln, und auf b5 deckt ihn " +
      "nichts. Sobald der e-Bauer gezogen hat, greift ihn der Läufer f1 an, und Schwarz muss " +
      "ein weiteres Tempo für …a6 oder …c6 aufwenden, um ihn zu halten.",
  },

  "1.Nf3 e6 2.b3 f6": {
    strategy:
      "Nimmt dem Springer g8 das Feld f6, sodass ihm nur e7 und h6 bleiben, und öffnet die " +
      "Diagonale e8–h5 zum König, ohne eine Figur zu entwickeln. Weiß entwickelt sich einfach " +
      "und beansprucht das Zentrum.",
  },

  "1.Nf3 e6 2.b3 h6": {
    strategy:
      "Verhindert vorbeugend Sg5 und ein späteres Lg5, doch beides droht nicht, sodass der Zug " +
      "nur ein Tempo kostet, während das Zentrum unbestritten bleibt. Weiß entwickelt sich und " +
      "besetzt ungestört das Zentrum.",
  },

  "1.Nf3 e6 2.b3 h5": {
    strategy:
      "Rückt den Randbauern ohne Zweck vor: Der Zug entwickelt nichts, überlässt Weiß das " +
      "Zentrum und lockert den Königsflügel, wo …h6 nicht mehr zur Verfügung steht, um eine " +
      "Figur von g5 zu vertreiben. Weiß entwickelt sich in Ruhe.",
  },

  "1.Nf3 e6 2.b3 Qg5": {
    strategy:
      "Stellt sofort die Dame ein: Der Springer f3 greift g5 an, und Sxg5 gewinnt sie ohne " +
      "Gegenwert.",
  },

  "1.Nf3 e6 2.b3 Qh4": {
    strategy:
      "Stellt sofort die Dame ein: Der Springer f3 greift h4 an, und Sxh4 gewinnt sie ohne " +
      "Gegenwert.",
  },

  "1.Nf3 e6 2.b3 Ke7": {
    strategy:
      "Gibt die Rochade endgültig auf und verstellt den Läufer f8 sowie die Diagonale d8–h4 " +
      "der Dame. 3.La3+ bietet sofort auf der offenen Diagonale a3–f8 Schach, und Schwarz " +
      "muss mit …d6 antworten, das dann gefesselt ist, oder den König erneut ziehen, da …c5 " +
      "nach Lxc5+ einen Bauern verliert.",
  },

  "1.Nf3 e6 2.b3 Ba3": {
    strategy:
      "Stellt den Läufer ein: Nichts deckt a3, und Lxa3 oder Sxa3 gewinnt ihn ohne Gegenwert.",
  },

  "1.Nf3 e6 2.b3 g5": {
    strategy:
      "Lockert den Königsflügel und öffnet die lange Diagonale zum Turm h8. 3.Lb2 greift den " +
      "Turm an, und jede Antwort kostet etwas: …Lg7 verliert den Läufer nach Lxg7, …Sf6 " +
      "schneidet die Dame von g5 ab, sodass Sxg5 einen Bauern gewinnt, und …f6 hinterlässt " +
      "einen löchrigen Königsflügel.",
  },

  "1.Nf3 e6 2.b3 e5": {
    strategy:
      "Verwendet einen zweiten Zug auf den e-Bauern und stellt ihn ein: Der Springer f3 greift " +
      "e5 an, und nichts deckt ihn, sodass Sxe5 einen Bauern gewinnt.",
  },
};
