import SectionTitle from './SectionTitle';

const AboutMe = () => {
  return (
    <section className="home-section" id="about-me">
      <div className="container center">
        <SectionTitle title="About me" />
        <div className="text-justify">
          <p>
            My name is <b>Jeanpier Mendoza</b>, I live in Guayaquil, Ecuador.
          </p>
          <p>
            I like technology, science and history,{' '}
            <b>I consider myself curious by human nature</b>. Since I can
            remember I love being on the computer trying and learning new things
            thanks to the Internet.
          </p>
          <p>
            In 2017 when studying <b>Computer Systems Engineering</b>, I
            immersed myself in the world of programming and since then{' '}
            <b>I have not stopped of learning.</b> (I am currently finishing my
            graduation process).
          </p>
          <p>
            I learned to program with languages like C, C++ and Java which
            allowed me to create strong programming logic. Then, in 2020, I
            started studying <b>web development</b> where I was fascinated by
            the dynamism and possibilities that exist, learning
            HTML/CSS/JavaScript and then self-taught I specialized in my{' '}
            <a href="#skills">
              <b>Skills</b>
            </a>
            .
          </p>
          <p>My hobbies are:</p>
          <ul>
            <li>Training powerlifting</li>
            <li>Watch science or history documentaries</li>
            <li>Listen to rancheras</li>
            <li>Play videogames</li>
          </ul>
        </div>
      </div>

      <style jsx>{``}</style>
    </section>
  );
};

export default AboutMe;
