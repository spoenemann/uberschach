import { useT } from "../language/LanguageContext.ts";
import styles from "./Home.module.css";

/**
 * The entry page: one card per capability that exists, its name and one
 * sentence, and nothing planned (docs/product-specs/product-brief.md, Entry
 * page). A card is a link to the capability's address.
 */
export function Home() {
  const t = useT();
  return (
    <ul className={styles.cards}>
      <li>
        <a className={styles.card} href="#/openings">
          <h2>{t("Opening explorer")}</h2>
          <p>
            {t(
              "Play through an opening for both sides and read after every move why it is played, what it aims for and which replies matter.",
            )}
          </p>
        </a>
      </li>
    </ul>
  );
}
