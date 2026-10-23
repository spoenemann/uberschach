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

  "1.g3 g6 2.Bg2 Bg7": {
    strategy:
      "Vollendet das Fianchetto: Der Läufer blickt über die lange Diagonale nach c3 und b2, " +
      "und …Sf6 sowie …O-O können sofort folgen. Schwarz spiegelt den weißen Aufbau und hält " +
      "das Zentrum flexibel; zwischen …c5, …d5 und …e5 entscheidet er, sobald der weiße Plan " +
      "feststeht. Noch hat keine Seite einen Bauern im Zentrum, also legt sich Weiß zuerst " +
      "fest: auf c4 mit Sc3, auf Sf3 und d3 nebst e4 oder auf d4.",
  },

  "1.g3 g6 2.Bg2 Nf6": {
    strategy:
      "Entwickelt den Springer auf sein natürliches Feld, wo er d5 und e4 kontrolliert, und " +
      "führt zur Stellung nach 1.g3 Sf6 2.Lg2 g6. Schwarz lässt …Lg7 und …O-O folgen und " +
      "wählt …d6, …d5 oder …c5, sobald Weiß seinen Plan gezeigt hat. Das Zentrum bleibt auf " +
      "beiden Seiten unbesetzt, sodass Weiß weiter zwischen c4 mit Sc3, dem ruhigeren d3 " +
      "nebst e4 oder d4 wählen kann.",
  },

  "1.g3 g6 2.Bg2 d5": {
    strategy:
      "Besetzt sofort das Zentrum und führt zur Stellung nach 1.g3 d5 2.Lg2 g6, mit …Lg7 und " +
      "…Sf6 als Fortsetzung. Der Läufer g2 wirkt bereits auf d5, und c4 bringt einen zweiten " +
      "Angreifer, also deckt Schwarz den Bauern mit …c6 oder …Sf6. Weiß kann stattdessen Sf3, " +
      "O-O, d3 und e4 spielen, einen Aufbau des Königsindischen Angriffs, der d5 erst später " +
      "angreift.",
  },

  "1.g3 g6 2.Bg2 c5": {
    strategy:
      "Kämpft um d4 und gewinnt Raum am Damenflügel, mit …Lg7 und …Sc6 als Fortsetzung. Nach " +
      "c4 entsteht die Symmetrievariante der Englischen Eröffnung, in der beide Königsläufer " +
      "fianchettiert sind. Weiß kann stattdessen mit d4 das Zentrum öffnen; nach …cxd4 Dxd4 " +
      "greift die Dame über die offene lange Diagonale den Turm h8 an, und Schwarz verstellt " +
      "sie mit …Sf6. Bis …d6 oder …d5 hat Schwarz keinen Bauern im Zentrum.",
  },

  "1.g3 g6 2.Bg2 e5": {
    strategy:
      "Sichert sich sofort einen Anteil am Zentrum, mit …Lg7, …d6 und …Sc6 oder …Se7 als " +
      "Fortsetzung in einer königsindischen Bauernstruktur. Weiß antwortet mit c4 und Sc3 " +
      "oder mit d3, Sf3 und O-O. Der Bauer legt sich fest, bevor eine Figur entwickelt ist: " +
      "Sf3 greift ihn sofort an, und nach d4 exd4 Dxd4 trifft die Dame über die offene " +
      "Diagonale den Turm h8.",
  },

  "1.g3 g6 2.Bg2 Nc6": {
    strategy:
      "Entwickelt den Springer, nimmt d4 und e5 ins Visier und verstellt die lange Diagonale " +
      "des Lg2 auf c6, wobei …Lg7 und …e5 möglich bleiben. Der Springer blockiert allerdings " +
      "den c-Bauern, sodass …c5 und …c6 entfallen, und Weiß kann mit e4 und d4 Raum gewinnen, " +
      "bevor Schwarz sich für eine Struktur entschieden hat.",
  },

  "1.g3 g6 2.Bg2 d6": {
    strategy:
      "Öffnet den Läufer c8 und steuert einen Aufbau wie in der Modernen oder der " +
      "Königsindischen Verteidigung an, mit …Lg7 und …Sf6 oder …e5 als Fortsetzung. Das " +
      "Zentrum bleibt vorerst Weiß überlassen, sodass c4, d4 oder e4 folgen können, während " +
      "der Lg2 schon entwickelt ist.",
  },

  "1.g3 g6 2.Bg2 c6": {
    strategy:
      "Bereitet …d5 mit Bauernstütze vor und verstellt die lange Diagonale des Lg2 auf c6, " +
      "sodass ein späteres …b6 oder …b5 den Turm a8 nicht mehr einstellt. Das Zentrum bleibt " +
      "vorerst Weiß überlassen, sodass e4 oder d4 sofort folgen kann, und der c-Bauer ist " +
      "festgelegt, bevor das Zentrum Gestalt angenommen hat.",
  },

  "1.g3 g6 2.Bg2 e6": {
    strategy:
      "Bereitet …d5 und …Se7 neben …Lg7 in einem kompakten Aufbau vor. Der Bauer e6 sperrt " +
      "den Läufer c8 ein, der nur über d7 oder nach …b6 über b7 herauskommt, und …b6 muss " +
      "warten, bis …d5 oder …c6 die lange Diagonale geschlossen hat. Weiß entwickelt sich " +
      "ungestört mit Sf3, O-O und c4 oder d4.",
  },

  "1.g3 g6 2.Bg2 f5": {
    strategy:
      "Kontrolliert e4 und bereitet …Sf6, …Lg7 und …O-O vor, die Bauernstruktur des " +
      "Leningrader Systems der Holländischen Verteidigung. Der Aufbau ist zweischneidig: Er " +
      "schwächt e6 und die Deckung des Königs, und Weiß antwortet mit Sf3, O-O und d3 nebst " +
      "e4 oder mit c4 und d4.",
  },

  "1.g3 g6 2.Bg2 Na6": {
    strategy:
      "Stellt den Springer an den Rand, wo er b4 und c5 im Blick hat, aber kein Zentrumsfeld " +
      "kontrolliert. Weiß nutzt die Zeit für Sf3, O-O und d4 oder c4, und d4 nimmt dem " +
      "Springer zudem das Feld c5.",
  },

  "1.g3 g6 2.Bg2 Nh6": {
    strategy:
      "Schickt den Springer über den Rand nach f5, wo ihn ein Bauer auf e4 vertreiben würde; " +
      "von h6 aus kontrolliert er kein Zentrumsfeld. Weiß setzt mit Sf3, O-O und d4 oder c4 " +
      "fort.",
  },

  "1.g3 g6 2.Bg2 Bh6": {
    strategy:
      "Stellt den Läufer nach h6 statt nach g7, wo der Bauer d2 seine Diagonale versperrt und " +
      "er keinen Anteil am Kampf um die lange Diagonale hat. Sobald d3 oder d4 die Diagonale " +
      "c1–h6 öffnet, muss Schwarz entweder den Tausch der schwarzfeldrigen Läufer zulassen, " +
      "wodurch die durch …g6 geschwächten Felder ihren Verteidiger verlieren, oder einen " +
      "weiteren Zug für …Lg7 aufwenden.",
  },

  "1.g3 g6 2.Bg2 a6": {
    strategy:
      "Investiert ein Tempo in einen Randbauern, der …b5 vorbereitet, doch dieser Vorstoß " +
      "würde den Turm a8 an Lxa8 verlieren, solange die lange Diagonale offen ist. Weiß " +
      "entwickelt sich mit Sf3 und O-O und besetzt dann mit c4 oder d4 das Zentrum.",
  },

  "1.g3 g6 2.Bg2 a5": {
    strategy:
      "Gewinnt Raum am Damenflügel und deckt b4, entwickelt aber nichts, und der a-Bauer kann " +
      "b5 und b6 nicht mehr decken. Weiß setzt mit Sf3, O-O und d4 oder c4 ungestört fort.",
  },

  "1.g3 g6 2.Bg2 f6": {
    strategy:
      "Bereitet …e5 vor, verstellt aber die lange Diagonale vor dem künftigen Läufer g7, " +
      "nimmt dem Königsspringer das Feld f6 und öffnet die Diagonale a2–g8 zum Rochadefeld " +
      "des Königs. Weiß entwickelt sich mit Sf3, O-O und c4 oder d4, während Schwarz noch " +
      "keine Figur entwickelt hat.",
  },

  "1.g3 g6 2.Bg2 h6": {
    strategy:
      "Investiert ein Tempo in einen Randbauern, der den weißen Figuren nur das Feld g5 nimmt " +
      "und die schwarze Entwicklung nicht voranbringt. Weiß entwickelt sich mit Sf3 und O-O " +
      "und besetzt dann mit c4 oder d4 das Zentrum.",
  },

  "1.g3 g6 2.Bg2 h5": {
    strategy:
      "Gewinnt Raum am Königsflügel und bereitet …h4 gegen g3 vor, entwickelt aber nichts. " +
      "3.h4 hält den Vorstoß sofort auf, und der Bauer h4 stützt dann einen weißen Springer " +
      "auf g5.",
  },

  "1.g3 g6 2.Bg2 g5": {
    strategy:
      "Zieht den g-Bauern ein zweites Mal und lässt ihn auf g5 ungedeckt: Sobald d3 oder d4 " +
      "den Läufer c1 öffnet, droht Lxg5, und Schwarz muss einen weiteren Zug für …h6, …f6 " +
      "oder …Lh6 aufwenden. Der Königsflügel bleibt dauerhaft geschwächt.",
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
