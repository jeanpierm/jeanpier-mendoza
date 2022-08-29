import React from 'react';
import { Icon } from '@iconify-icon/react';
import { Technology } from '../core/interfaces/project.interface';

type TechnologyChipProps = { technology: Technology };

const TechnologyChip: React.FC<TechnologyChipProps> = ({
  technology,
}: TechnologyChipProps) => {
  return (
    <>
      <span className="chip">
        <Icon
          icon={technology.icon.value}
          style={{ ...technology.icon.style }}
        />
        <span>{technology.name}</span>
      </span>
      <style jsx>{`
        .chip {
          border: 1px solid black;
          border-radius: 10px;
          padding: 0.3rem 0.6rem;
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
          color: black;
          font-weight: 600;
          display: flex;
          gap: 0.5rem;
        }
        @media (prefers-color-scheme: dark) {
          .chip {
            background-color: var(--bg-body-dark);
            border-color: white;
            color: white;
          }
        }
      `}</style>
    </>
  );
};

export default TechnologyChip;
