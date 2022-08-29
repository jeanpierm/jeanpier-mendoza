import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Presentation from '../components/Presentation';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Layout from '../layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Jeanpier Mendoza - Website & Portfolio</title>
        <meta
          name="description"
          content="Web Site & Portfolio of Jeanpier Mendoza"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Presentation />
      <Skills />
      <Experience />
      <Projects />
      <AboutMe />
      <Contact />
    </Layout>
  );
};

export default Home;
