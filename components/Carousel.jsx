import React, { useState, useEffect } from "react";
import styles from "./styles/Carousel.module.scss";

export const Carousel = ({ children }) => {
  const [page, setPage] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollDown = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const scrollUp = () => {
    if (page < 4) {
      setPage(page - 1);
    }
  };

  const handleScroll = (e) => {
    const position = window.pageYOffset;
    if (position > scrollPosition) {
      // scroll down
      scrollDown();
    } else if (position < scrollPosition) {
      // scroll up
      scrollUp();
    }
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const array = ["zero", "one", "two", "three"];
  const items = array.map((item, index) => (
    <span key={index} className={index === page ? styles["i-visible"] : styles["i-hidden"]}>
      {item}
    </span>
  ));
  return (
    <div className={styles["container"]}>
      {items}
    </div>
  );
};
