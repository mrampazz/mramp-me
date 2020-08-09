import React from "react";
import styles from "./styles/Menu.module.scss";

const Icon = () => (
  <svg width='10' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M5 0l4.33 4.5H.67L5 0z' fill='#E6332A' />
    <path d='M5 9l4.33-4.5H.67L5 9z' fill='#CC423C' />
  </svg>
);

export const Menu = () => (
  <div className={styles["container"]}>
    <Icon />
    <div>
      <span>
        <a>Home</a>
      </span>
    </div>
    <div>
      <span>
        <a>Projects</a>
      </span>
    </div>
    <div>
      <span>
        <a>Contacts</a>
      </span>
    </div>
  </div>
);
