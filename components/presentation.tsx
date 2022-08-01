import styles from '../styles/home.module.css';

const Presentation = () => {
  return (
    <>
      <section className="main">
        <div className="container">
          <h1 className="title display-1">Hi! I&apos;m Jeanpier</h1>

          <div className="description">
            <p>I enjoy creating software, mainly the web.</p>
            <p>Excited to learn new things and to improve as a person.</p>
            <br />
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </div>
        </div>

        <style jsx>{`
          .main {
            min-height: 100vh;
            padding: 4rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
          }

          .description {
            margin: 4rem 0;
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .title,
          .description {
            text-align: center;
          }

          a {
            padding-top: 1rem;
            padding-bottom: 1rem;
            padding-left: 3rem;
            padding-right: 3rem;
            border: 1px solid black;
            border-radius: 10px;
          }

          a:hover {
            border-color: var(--primary);
          }
        `}</style>
      </section>
    </>
  );
};

export default Presentation;
