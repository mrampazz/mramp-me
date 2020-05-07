import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles/Menu.module.scss";

const ActiveLink = ({ children, href }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={`${router.pathname === href ? styles["active-link"] : null}`}>
      {children}
    </a>
  );
};

export default () => (
  <div className={styles["container"]}>
      <ActiveLink href='/'>
        <a>home</a>
        <span className={styles['underline']}></span>
      </ActiveLink>
      <ActiveLink href='/projects'>
        <a>projects</a>
        <span className={styles['underline']}></span>
      </ActiveLink>
      <a href='https://apiplant.com/'>
        APIPlant
        <span className={styles['underline']}></span>
      </a>
  </div>
);
