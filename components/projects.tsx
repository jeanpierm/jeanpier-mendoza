import { projects } from '../core/data/home.data';
import ProjectCard from './project-card';
import SectionTitle from './section-title';

const Projects = () => {
  return (
    <section className="home-section" id="projects">
      <div className="container">
        <SectionTitle title="Open Source Projects" />
        <div className="grid">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .grid {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
      `}</style>
    </section>
  );
};

export default Projects;
