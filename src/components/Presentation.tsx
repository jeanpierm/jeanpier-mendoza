const Presentation = () => {
  return (
    <>
      <section className="main">
        <div className="container">
          <h1 className="title display-1">Hi! I&apos;m Jeanpier Mendoza</h1>

          <div className="description">
            <p>I like to build software</p>
            <p>Excited to learn more</p>
            <br />
            <a href="https://drive.google.com/drive/folders/1uVflLZOAY2Iq1TjbRkxbjgshn0LGJNve?usp=sharing" target="_blank" rel="noreferrer">
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

          @media (prefers-color-scheme: dark) {
            a {
              border-color: white;
            }
            a:hover {
              border-color: var(--primary-dark);
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Presentation;
