import Head from "next/head";
import { Content } from "../components/Hero";
import Pattern from "../components/Pattern";
import { Projects } from "../components/Project";
import { ContactSection } from "../components/Contact";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>mrampazz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,600,700,900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="pattern">
        <Pattern />
      </div>
      <main>
        <Content />
        <Projects />
        <ContactSection />
      </main>
    </div>
  );
}
