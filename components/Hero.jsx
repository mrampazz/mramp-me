import React from "react";
import styles from "./styles/Hero.module.scss";
import { HeroPattern } from "./Patterns";
import { Title, ParagraphTitle, NormalLink, NormalText } from "./Text";
import Logo from "./Logo";
const txt1 = "I am a junior web developer currently residing in Italy, I’m studying computer science at the university of Padova.";

export const Hero = () => (
  <header className={styles["container"]}>
    <Logo />
    <Title>marco rampazzo</Title>
    <div className={styles["row-container"]}>
      <div className={styles['hero-pattern-container']}>
        <HeroPattern />
      </div>
      <div className={styles["col-container"]}>
        <ParagraphTitle>Hello!</ParagraphTitle>
        <div>
          <NormalText> {txt1} </NormalText>
          <NormalText>
            If you want to work together send me an e-mail at <NormalLink href='mailto:mrampazz@gmail.com'>mrampazz@gmail.com</NormalLink>
          </NormalText>
        </div>
      </div>
    </div>
  </header>
);
