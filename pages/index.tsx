import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMe from '../components/about-me';
import Contact from '../components/contact';
import Experience from '../components/experience';
import Layout from '../components/layout';
import Presentation from '../components/presentation';
import Projects from '../components/projects';
import Skills from '../components/skills';

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
