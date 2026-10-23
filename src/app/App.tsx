import { parseFen } from "../domain/position.ts";
import { Board } from "../ui/board/Board.tsx";
import styles from "./App.module.css";

// A sample position to look at the board and the pieces in dev mode: the Ruy
// Lopez after 3.Bb5, the bishop's move highlighted. The first capability (the
// opening explainer) is not yet specified; see
// docs/product-specs/product-brief.md, Open questions.
const SAMPLE_POSITION = parseFen(
  "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
);

export function App() {
  return (
    <main className={styles.page}>
      <h1>uberschach</h1>
      <div className={styles.sample}>
        <Board position={SAMPLE_POSITION} highlights={["f1", "b5"]} />
        <p>
          Nothing to train yet. This is the Ruy Lopez after 3.Bb5, shown to
          look at the board.
        </p>
      </div>
    </main>
  );
}
