import Head from "next/head";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { TheBeginningPattern, OrganisingPattern, ContactsPattern } from "../components/Patterns";
import { SectionTitle, NormalText } from "../components/Text";

const theBeginning = (
  <NormalText>
    I started programming with c++ but quickly made my way to the web, ever since then I have not looked back. Nowadays for my projects I use <em>Next.js</em> & <em>React</em>.
  </NormalText>
);
const organising = (
  <NormalText>
    I believe keeping things under control and organised is the key to success. That’s why I always use <em>Git</em> and <em>Github</em> for my code and <em>Trello</em> for my ideas.
  </NormalText>
);
export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>mrampazz</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
        <link href='https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' rel='stylesheet' />
      </Head>
      <main>
        <Hero />
        <SectionTitle>About me</SectionTitle>
        <Section paragraphTitle='The beginning' reversed={true} pattern={<TheBeginningPattern />}>
          {theBeginning}
        </Section>
        <Section paragraphTitle='Organising' reversed={false} pattern={<OrganisingPattern />}>
          {organising}
        </Section>
        <SectionTitle>Contacts</SectionTitle>

        <ContactsPattern />
        <NormalText>&copy; 2020 Marco Rampazzo</NormalText>
      </main>
    </div>
  );
}
