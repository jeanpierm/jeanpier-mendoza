import { projects } from '../core/data/projects.data';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

const Projects = () => {
  return (
    <section className="home-section" id="projects">
      <div className="container center">
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
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
        }
      `}</style>
    </section>
  );
};

export default Projects;
