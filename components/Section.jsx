import styles from "./styles/Hero.module.scss";
import { ParagraphTitle, NormalText } from "./Text";
export const Section = ({ reversed, children, pattern, paragraphTitle }) => (
  <section className={styles["container"]}>
    <div className={reversed ? styles["row-container-reversed"] : styles["row-container"]}>
      <div className={reversed ? styles['pattern-container-reversed'] : styles['pattern-container']}>{pattern}</div>
      <div className={styles["col-container"]}>
        <ParagraphTitle>{paragraphTitle}</ParagraphTitle>
        {children}
      </div>
    </div>
  </section>
);
