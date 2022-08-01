import SectionTitle from './section-title';

const AboutMe = () => {
  return (
    <section className="home-section" id="about-me">
      <div className="container">
        <SectionTitle title="About me" />
        <p>My name is Jeanpier Mendoza, I live in Guayaquil, Ecuador.</p>
        <p>My hobbies:</p>
        <ul>
          <li>Watch science or history documentaries</li>
          <li>Training powerlifting</li>
          <li>Play videogames</li>
          <li>Listen to rancheras</li>
        </ul>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
