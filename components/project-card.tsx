import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../core/interfaces/project.interface';
import DemoIcon from './demo-icon';
import GithubIcon from './github-icon';

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
        height="200px"
        width="448px"
        objectFit="contain"
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
          margin-left: 0.6rem;
        }
      `}</style>
    </article>
  );
};

export default ProjectCard;
