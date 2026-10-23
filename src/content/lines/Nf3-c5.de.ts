import type { OpeningTexts } from "../book.ts";

// German prose for Nf3-c5.ts: at each line, the name and background of the position it reaches
// and the strategic meaning of its last move, written in German notation (Sf3, Lg2).
export const de: OpeningTexts = {
  "1.Nf3 c5 2.c4": {
    name: "Englische Symmetrievariante",
    background:
      "So benannt, weil beide c-Bauern zwei Felder vorgerückt sind; nach 1.Sf3 c5 ist dies " +
      "einer der beiden Übergänge, zu denen Schwarz einlädt, der andere führt mit 2.e4 in die " +
      "Sizilianische Verteidigung. Die Englische Eröffnung ist nach Howard Staunton benannt, " +
      "der sie in seinem Wettkampf gegen Saint-Amant 1843 und in London 1851, dem ersten " +
      "internationalen Turnier, spielte.",
    strategy:
      "Beantwortet den c-Bauern mit dem c-Bauern: Weiß kämpft um d5, hält d4 in Reserve und " +
      "hat Sc3 und g3 als natürliche Fortsetzungen. Schwarz wählt zwischen ...Sc6 mit ...g6 " +
      "und ...Lg7, dem Igel mit ...Sf6, ...e6, ...b6 und ...Lb7 und einem raschen ...d5. Nach " +
      "d4 cxd4 Sxd4 kann Weiß mit e4 den Maróczy-Aufbau errichten, wie in der Sizilianischen " +
      "Verteidigung.",
  },

  "1.Nf3 c5 2.e4": {
    strategy:
      "Führt in die Hauptlinie der Sizilianischen Verteidigung: Nach ...d6, ...Sc6 oder ...e6 " +
      "spielt Weiß d4 und schlägt auf d4 mit dem Springer zurück, ein Offener Sizilianer. " +
      "Weiß gewinnt Raum im Zentrum und eine schnelle Entwicklung, Schwarz erhält die " +
      "halboffene c-Linie und zwei Zentrumsbauern gegen einen. Das Spiel ist scharf und " +
      "zweischneidig und verlangt Kenntnis der sizilianischen Theorie.",
  },

  "1.Nf3 c5 2.g3": {
    strategy:
      "Bereitet Lg2 und die frühe Rochade vor; der Läufer steht auf der langen Diagonale und " +
      "zielt auf d5 und b7, sobald der Springer f3 zieht. Weiß hält sich sowohl c4 für einen " +
      "Réti- oder englischen Aufbau offen als auch d3 mit e4 wie im Königsindischen Angriff. " +
      "Schwarz kann mit ...d5 Raum nehmen oder den Aufbau mit ...Sc6, ...g6 und ...Lg7 " +
      "spiegeln.",
  },

  "1.Nf3 c5 2.d4": {
    strategy:
      "Greift das Zentrum sofort an: Nach 2...cxd4 3.Sxd4 hat Weiß den d-Bauern gegen den " +
      "schwarzen c-Bauern getauscht, wie in einem Offenen Sizilianer, dem noch e4 fehlt. " +
      "Schwarz kann ...Sf6, ...g6 oder das zentrale ...e5 wählen, und Weiß muss sich noch " +
      "zwischen e4 und c4 entscheiden. Korrekt und als ausgeglichen bewertet, doch der Zug " +
      "überlässt Schwarz die Wahl des Aufbaus.",
  },

  "1.Nf3 c5 2.b3": {
    strategy:
      "Bereitet Lb2 auf der langen Diagonale vor, mit Blick auf e5 und das Zentrum, gefolgt " +
      "von e3 und Le2 wie in der Larsen-Eröffnung. Der Plan ist korrekt, aber langsam: Ohne " +
      "Zentrumsbauern lässt Weiß Schwarz zuerst mit ...d5 und ...Sc6 das Zentrum besetzen.",
  },

  "1.Nf3 c5 2.Nc3": {
    strategy:
      "Entwickelt den Damenspringer mit Blick auf d5 und e4 und hält e4 in Reserve, womit " +
      "eine Sizilianische Verteidigung mit bereits gespieltem Sc3 entstünde. Der Springer " +
      "verstellt den c-Bauern, sodass die englischen Pläne mit c4 entfallen, und Schwarz kann " +
      "mit ...d5 sofort das Zentrum besetzen. Korrekt, aber der Springer legt sich früh fest " +
      "und stellt Schwarz vor keine Probleme.",
  },

  "1.Nf3 c5 2.d3": {
    strategy:
      "Bereitet e4 vor und befreit den Läufer c1, mit dem Ziel des Aufbaus im Königsindischen " +
      "Angriff mit g3, Lg2 und O-O. Das System ist solide, aber langsam, und erlaubt Schwarz, " +
      "...d5 und ...Sc6 kampflos aufzubauen.",
  },

  "1.Nf3 c5 2.e3": {
    strategy:
      "Öffnet dem Läufer f1 die Diagonale und bereitet d4 und Le2 vor. Der Aufbau ist solide, " +
      "aber passiv und sperrt den Läufer c1 ein, sodass Schwarz mit ...d5 das Zentrum nehmen " +
      "oder mit ...g6 fianchettieren kann, während Weiß später mit c4 oder d4 aufholen muss.",
  },

  "1.Nf3 c5 2.c3": {
    strategy:
      "Bereitet d4 vor, sodass Weiß ...cxd4 mit cxd4 beantworten kann und einen Bauern auf d4 " +
      "behält, eine Alapin-ähnliche Idee ohne e4. Der Bauer nimmt dem Damenspringer das Feld " +
      "c3 und tut wenig gegen ...d5, das sofort Raum gewinnt. Solide, aber langsam.",
  },

  "1.Nf3 c5 2.b4": {
    strategy:
      "Bietet den b-Bauern als Flügelgambit an. Nach 2...cxb4 kann Weiß mit a3 Linien öffnen " +
      "oder mit d4 das Zentrum besetzen, doch Schwarz behält den Mehrbauern und erhält eine " +
      "halboffene c-Linie, sodass die Kompensation dürftig ist.",
  },

  "1.Nf3 c5 2.a3": {
    strategy:
      "Bereitet b4 gegen den Bauern c5 vor, verbraucht aber ein Tempo mit einem Randbauern, " +
      "während Schwarz mit ...d5 und ...Sf6 das Zentrum besetzt.",
  },

  "1.Nf3 c5 2.a4": {
    strategy:
      "Verhindert ...b5 und gewinnt Raum am Damenflügel, schwächt aber b4 und verbraucht ein " +
      "Tempo, ohne dem Zentrum zu helfen. Schwarz entwickelt sich mit ...Sc6 und ...d5, und " +
      "Weiß hat dafür nichts vorzuweisen.",
  },

  "1.Nf3 c5 2.g4": {
    strategy:
      "Gewinnt Raum am Königsflügel, lässt den Bauern aber ungedeckt: Nach 2...d5 zielt der " +
      "Läufer c8 auf g4, und ...Lxg4 droht. Der Vorstoß schwächt außerdem f4 und h4, ohne der " +
      "Entwicklung zu helfen.",
  },

  "1.Nf3 c5 2.h3": {
    strategy:
      "Nimmt dem Läufer c8 das Feld g4, verbraucht aber ein Tempo mit einem Randbauern, ohne " +
      "der Entwicklung oder dem Zentrum zu helfen. Schwarz nimmt mit ...d5 und ...Sc6 Raum.",
  },

  "1.Nf3 c5 2.h4": {
    strategy:
      "Schiebt den Randbauern mit dem Gedanken an h5 vor, tut aber nichts für Zentrum und " +
      "Entwicklung, und g4 lässt sich nie mehr durch h3 decken. Schwarz besetzt mit ...d5 und " +
      "...Sc6 das Zentrum.",
  },

  "1.Nf3 c5 2.Rg1": {
    strategy:
      "Gibt das Recht zur kurzen Rochade auf und stellt den Turm ohne Zweck hinter den " +
      "eigenen Bauern g2. Schwarz besetzt mit ...d5 und ...Sc6 das Zentrum, während der weiße " +
      "König nur noch auf dem anderen Flügel Sicherheit finden kann.",
  },

  "1.Nf3 c5 2.Na3": {
    strategy:
      "Strebt nach b5 oder c4, doch der Springer am Rand kontrolliert kein Zentrumsfeld und " +
      "blockiert den a-Bauern. Schwarz besetzt mit ...d5 und ...Sf6 das Zentrum.",
  },

  "1.Nf3 c5 2.Ng5": {
    strategy:
      "Zieht denselben Springer erneut, und seine Angriffe auf f7 und h7 verpuffen, da König " +
      "und Turm h8 diese Felder decken. Nach ...h6 muss der Springer abermals ziehen, und " +
      "Weiß hat Zeit verloren, während Schwarz das Zentrum besetzt.",
  },

  "1.Nf3 c5 2.Nh4": {
    strategy:
      "Zieht den Springer ein zweites Mal, auf ein Randfeld, wo er weniger Felder beherrscht " +
      "als auf f3 und nichts für das Zentrum tut. Schwarz besetzt mit ...d5 und ...Sf6 " +
      "ungestört das Zentrum.",
  },

  "1.Nf3 c5 2.Ne5": {
    strategy:
      "Stellt den Springer nach e5, wo ihn ...d6 sofort vertreibt. Er muss nach f3, d3 oder " +
      "c4 zurück, und Schwarz hat ein Tempo für das Zentrum gewonnen.",
  },

  "1.Nf3 c5 2.Ng1": {
    strategy:
      "Zieht den Springer auf sein Ausgangsfeld zurück, sodass Weiß zwei Züge umsonst " +
      "gespielt hat und Schwarz im Zentrum praktisch einen ganzen Zug voraus ist.",
  },

  "1.Nf3 c5 2.Nd4": {
    strategy:
      "Stellt eine Figur ein: 2...cxd4 gewinnt den Springer, und der Bauer d2 verstellt der " +
      "Dame das Zurückschlagen, sodass Weiß später höchstens einen Bauern zurückgewinnt.",
  },

  "1.Nf3 c5": {
    name: "Zukertort-Eröffnung: Sizilianische Einladung",
  },
};
