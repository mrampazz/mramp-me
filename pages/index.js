import Head from "next/head";
import { Section } from "../components/Section";
import { NormalText, NormalLink } from "../components/Text";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [cursorHidden, setCursor] = useState(false);

  const callback = (e) => {
    const cursorTrail = document.querySelector(".cursor-trail");
    setTimeout(() => {
      cursorTrail.style.left = `${e.pageX}px`;
      cursorTrail.style.top = `${e.pageY}px`;
    }, 50);
  };
  const handleMouseMove = (e, callback) => {
    const cursor = document.querySelector(".cursor");
    const cursorTrail = document.querySelector(".cursor-trail");

    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    e.persist();
    callback(e);
  };

  useEffect(() => {
    const links = document.getElementsByTagName("a");
    const cursorTrail = document.querySelector(".cursor-trail");
    for (let i = 0; i < links.length; i++) {
      const l = links[i];
      l.addEventListener("mouseenter", () => {
        cursorTrail.style.transform = "scale(2) translateX(-25%) translateY(-25%)";
        cursorTrail.style.mixBlendMode = "difference"
      });
      l.addEventListener("mouseleave", () => {
        cursorTrail.style.transform = "scale(1) translateX(-50%) translateY(-50%)";
      });
    }
  });
  return (
    <div className='container'>
      <div className='bg' />
      <Head>
        <title>mrampazz</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
        <link href='https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap' rel='stylesheet' />
      </Head>
      <main id='main-container' onMouseMove={(e) => handleMouseMove(e, callback)} onMouseEnter={() => setCursor(true)} onMouseLeave={() => setCursor(false)}>
        {cursorHidden ? (
          <div className='cursors'>
          <div className='cursor' />
          <div className='cursor-trail' />
        </div>
        ) : <div className='cursors-hidden'>
        <div className='cursor' />
        <div className='cursor-trail' />
      </div>}
        <Section title='Hey!'>
          <NormalText> I am Marco Rampazzo, a junior web developer currently residing in Italy, I’m studying computer science at the university of Padova. During my free time I enjoy basketball a good movie and some coffe.</NormalText>
          <NormalText>
            If you want to work together send me an e-mail at <NormalLink href='mailto:mrampazz@gmail.com'>mrampazz@gmail.com</NormalLink>
          </NormalText>
        </Section>
      </main>
    </div>
  );
}
