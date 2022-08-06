import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Layout from '../components/Layout';
import Presentation from '../components/Presentation';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Jeanpier Mendoza</title>
        <meta
          name="description"
          content="Web Site & Portfolio of Jeanpier Mendoza"
        />
        <link rel="icon" href="/favicon.ico" />
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
