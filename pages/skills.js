import Skills from "../components/UI/Skills"
import Head from 'next/head';

export default function Skill() {
    return (
      <div>
        <Head>
          <title>Abhay | Skills</title>
          <meta name="description" content="Abhay skills" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Skills/>
      </div>
    );
  }