import { experiences } from '../core/data/experiences.data';
import SectionTitle from './SectionTitle';

const Experience = () => {
  return (
    <section className="home-section" id="experience" data-section="experience">
      <div className="container center">
        <SectionTitle title="Experience" />
        {experiences.map(
          ({ jobTitle, period, company, technologies, description }) => (
            <article key={period} className="text-justify">
              <h3 className="display-8">{jobTitle}</h3>
              <div className="">
                <a href={company.website} target="_blank" rel="noreferrer">
                  {company.name}
                </a>
              </div>
              <div className="period">{period}</div>
              <p dangerouslySetInnerHTML={{ __html: description || '' }}></p>
              <p>
                <strong>Technologies:</strong> {technologies}
              </p>
            </article>
          )
        )}
      </div>

      <style jsx>{`
        h3 {
          margin-bottom: 0;
        }
        article:not(:last-child) {
          margin-bottom: 3rem;
        }

        .period {
          color: #666;
        }

        @media (prefers-color-scheme: dark) {
          .period {
            color: #aaa;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
