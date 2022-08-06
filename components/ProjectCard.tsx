import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../core/interfaces/project.interface';
import DemoIcon from './icons/DemoIcon';
import GithubIcon from './icons/GithubIcon';

export interface ProjectCardProps extends Project {}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  websiteUrl,
  repositoryUrl,
}: ProjectCardProps) => {
  return (
    <article>
      <h3 className="">{title}</h3>
      <Image
        src={image}
        height="250"
        width="400"
        objectFit="cover"
        alt={title}
      ></Image>
      <p
        className="text-justify"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <p>
        <strong>Technologies: </strong>
        {technologies}
      </p>
      <div className="actions">
        {websiteUrl && (
          <Link href={websiteUrl}>
            <a target="_blank">
              <DemoIcon />
            </a>
          </Link>
        )}
        <span className="action">
          <Link href={repositoryUrl}>
            <a target="_blank">
              <GithubIcon />
            </a>
          </Link>
        </span>
      </div>

      <style jsx>{`
        article {
          padding: 2rem;
          border: 1px black solid;
          max-width: 30rem;
          border-radius: 1rem;
        }

        article:not(:last-child) {
          margin-bottom: 3rem;
        }
        .actions {
          text-align: end;
        }
        .action {
          margin-left: 1.4rem;
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
