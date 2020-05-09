import React from "react";
import Link from "next/link";
import styles from "./styles/Hero.module.scss";

const DarkButton = ({ children, href }) => (
  <Link href={href}>
    <div className={styles["dark-button"]}>
      <a>{children}</a>
    </div>
  </Link>
);

const LightButton = ({ children, href }) => (
  <Link href={href}>
    <div className={styles["light-button"]}>
      <a>{children}</a>
    </div>
  </Link>
);

export const SvgLink = () => (
  <div className={styles["svg-container"]}>
    <a href='#'>
      <svg width='36' height='36' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M8.027 19.325c0 .099-.11.178-.251.178-.16.015-.271-.064-.271-.178 0-.1.111-.179.251-.179.146-.015.271.065.271.179zM6.523 19.1c-.034.1.062.214.208.244.125.05.27 0 .3-.1.029-.099-.063-.213-.208-.258-.126-.034-.267.015-.3.114zm2.138-.084c-.14.035-.237.13-.222.243.014.1.14.164.285.13.14-.035.237-.13.223-.229-.015-.094-.145-.159-.286-.144zM11.845 0C5.134 0 0 5.226 0 12.109c0 5.504 3.377 10.213 8.202 11.87.619.115.837-.277.837-.6 0-.307-.015-2.005-.015-3.047 0 0-3.387.745-4.098-1.479 0 0-.552-1.444-1.345-1.816 0 0-1.108-.78.077-.764 0 0 1.205.099 1.868 1.28 1.06 1.916 2.835 1.365 3.527 1.037.112-.794.426-1.345.774-1.672-2.704-.308-5.433-.71-5.433-5.484 0-1.365.367-2.05 1.141-2.923-.125-.323-.537-1.653.126-3.37C6.673 4.82 9 6.481 9 6.481a11.103 11.103 0 013.039-.422c1.03 0 2.07.144 3.038.422 0 0 2.328-1.667 3.34-1.34.662 1.722.25 3.047.125 3.37.774.878 1.248 1.563 1.248 2.923 0 4.79-2.85 5.171-5.554 5.484.445.392.822 1.136.822 2.303 0 1.672-.014 3.741-.014 4.148 0 .323.222.715.837.6C20.719 22.323 24 17.614 24 12.11 24 5.226 18.556 0 11.845 0zM4.703 17.116c-.063.05-.048.164.034.258.078.08.189.115.252.05.063-.05.048-.164-.034-.258-.078-.08-.189-.114-.252-.05zm-.522-.402c-.034.065.014.144.11.194.078.05.175.035.209-.035.034-.064-.015-.144-.111-.193-.097-.03-.174-.015-.208.034zm1.567 1.767c-.077.065-.048.213.063.308.112.114.252.129.315.05.063-.065.034-.214-.063-.308-.107-.114-.252-.13-.315-.05zm-.551-.73c-.078.05-.078.18 0 .293.077.114.208.164.27.114.078-.064.078-.193 0-.307-.067-.114-.193-.164-.27-.1z'
          fill='#3A506B'
        />
      </svg>
    </a>
    <a href='#'>
      <svg width='36' height='36' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 0C5.368 0 0 5.367 0 12c0 6.632 5.367 12 12 12 2.33 0 4.613-.684 6.552-1.946.58-.378.708-1.175.269-1.712l-.493-.601a1.158 1.158 0 00-1.518-.249A8.927 8.927 0 0112 20.903c-4.91 0-8.903-3.994-8.903-8.903 0-4.91 3.994-8.903 8.903-8.903 4.845 0 8.903 2.788 8.903 7.742 0 1.877-1.02 3.858-2.814 4.05-.84-.023-.819-.623-.652-1.453l1.133-5.86a1.161 1.161 0 00-1.14-1.382h-2.176a.654.654 0 00-.65.58v.004c-.712-.866-1.958-1.053-2.902-1.053-3.61 0-6.67 3.011-6.67 7.328 0 3.16 1.78 5.123 4.645 5.123 1.306 0 2.776-.756 3.629-1.855.46 1.65 1.965 1.65 3.421 1.65 5.27 0 7.273-3.465 7.273-7.132C24 4.24 18.678 0 12 0zm-1.049 14.73c-1.077 0-1.745-.755-1.745-1.972 0-2.177 1.489-3.52 2.837-3.52 1.078 0 1.722.738 1.722 1.973 0 2.18-1.639 3.52-2.814 3.52z'
          fill='#3A506B'
        />
      </svg>
    </a>
    <a href='#'>
      <svg width='30' height='30' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M4.477 20H.33V6.647h4.147V20zM2.4 4.826C1.075 4.826 0 3.727 0 2.4a2.401 2.401 0 114.803 0c0 1.326-1.076 2.425-2.402 2.425zM19.996 20h-4.138v-6.5c0-1.55-.031-3.536-2.156-3.536-2.156 0-2.486 1.683-2.486 3.424V20H7.074V6.647h3.977v1.821h.058c.553-1.049 1.906-2.156 3.923-2.156C19.23 6.312 20 9.076 20 12.665V20h-.005z'
          fill='#3A506B'
        />
      </svg>
    </a>
  </div>
);

export const Content = () => (
  <div className={styles["content-container"]}>
    <div className={styles["title-container"]}>
      <h1>Hi, I'm Marco Rampazzo</h1>
      <h2>mrampazz</h2>
    </div>
    <div className={styles["text-container"]}>
      <p>
        Junior <em>web developer</em> currently based in italy
      </p>
    </div>
    <div className={styles["button-container"]}>
      <LightButton href='#'>download cv</LightButton>
    </div>
    <SvgLink />
  </div>
);
