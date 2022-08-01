import { SkillType } from '../core/enums/skill-type.enum';
import { skills } from '../core/data/home.data';
import SectionTitle from './section-title';

const Skills = () => {
  return (
    <section className="home-section" id="skills">
      <div className="container">
        <SectionTitle title="Skills" />
        <div className="grid">
          {Object.values(SkillType).map((type) => (
            <article key={type}>
              <h3 className="display-7">{type}</h3>
              <ul>
                {skills[type].map((skill) => (
                  <div key={skill.name}>
                    <li>{skill.name}</li>
                    {skill.sub?.map((value) => (
                      <ul key={value}>
                        <li>{value}</li>
                      </ul>
                    ))}
                  </div>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .grid {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default Skills;
