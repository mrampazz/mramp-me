import styles from "./styles/Hero.module.scss";
import { Title } from "./Text";
export const Section = ({ children, title }) => (
  <section className={styles["container"]}>
    <Title>{title}</Title>
    <div>
      {children}
    </div>
  </section>
);
