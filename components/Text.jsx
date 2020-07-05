import React from "react";
import styles from "./styles/Text.module.scss";

export const Title = ({ children }) => (
  <div className={styles["title-container"]}>
    <h1>{children}</h1>
  </div>
);

export const SectionTitle = ({ children }) => (
  <div className={styles["sectionTitle-container"]}>
    <h2>{children}</h2>
  </div>
);

export const ParagraphTitle = ({ children }) => (
  <div className={styles["paragraphTitle-container"]}>
    <h3>{children}</h3>
    <span></span>
  </div>
);

export const NormalText = ({ children }) => (
  <div className={styles["normalText-container"]}>
    <p>{children}</p>
  </div>
);

export const NormalLink = ({ children, href }) => (
  <a className={styles["normalLink"]} href={href}>
    {children}
  </a>
);