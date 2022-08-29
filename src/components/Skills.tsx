import Image from 'next/image';
import { skills } from '../core/data/skills.data';
import { SkillType } from '../core/enums/skill-type.enum';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <section className="home-section" id="skills">
      <div className="container center">
        <SectionTitle title="Skills" />

        <div className="skill-type-grid">
          {Object.values(SkillType).map((type) => (
            <article key={type} className="skill-type-container">
              <h3 className="display-7 text-center">{type}</h3>
              <div className="skill-grid">
                {skills[type].map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skill-type-grid {
          display: flex;
          width: 100%;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .skill-type-container {
          min-width: 33%;
        }

        .skill-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          max-width: ;
        }
      `}</style>
    </section>
  );
};

export default Skills;
