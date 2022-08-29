import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../core/interfaces/project.interface';
import DemoIcon from './icons/DemoIcon';
import GithubIcon from './icons/GithubIcon';
import TechnologyChip from './TechnologyChip';

export interface ProjectCardProps extends Project {}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  websiteUrl,
  repositoryUrls,
}: ProjectCardProps) => {
  return (
    <article>
      <h3 className="display-8">{title}</h3>
      <Image
        src={image}
        height="400"
        width="600"
        objectFit="contain"
        quality={100}
        alt={title}
      ></Image>
      <p
        className="text-justify"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <section className="technologies">
        {technologies.map((tech, i) => (
          <TechnologyChip key={i} technology={tech} />
        ))}
      </section>
      <div className="actions">
        {websiteUrl && (
          <Link href={websiteUrl}>
            <a target="_blank">
              <DemoIcon />
            </a>
          </Link>
        )}
        {repositoryUrls?.map((repoUrl, i) => (
          <span key={i} className="action">
            <Link href={repoUrl}>
              <a target="_blank">
                <GithubIcon />
              </a>
            </Link>
          </span>
        ))}
      </div>

      <style jsx>{`
        article {
          padding: 1.4rem;
          border: 1px black solid;
          max-width: 36rem;
          border-radius: 1rem;
        }

        .actions {
          text-align: end;
        }

        .action {
          margin-left: 1.4rem;
        }

        .technologies {
          display: flex;
          flex-wrap: wrap;
          margin: 1rem 0;
        }

        @media (prefers-color-scheme: dark) {
          article {
            border-color: white;
          }
        }
      `}</style>
    </article>
  );
};

export default ProjectCard;
