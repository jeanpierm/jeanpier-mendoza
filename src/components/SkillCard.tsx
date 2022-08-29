import Image from 'next/image';
import React from 'react';
import { Skill } from './../core/interfaces/skill.interface';

type SkillCardProps = Skill;
const SkillCard: React.FC<SkillCardProps> = ({ name, logo }) => {
  return (
    <>
      <div className="card">
        <Image src={logo} height="64" width="64" alt={name} />
        <span className="skill-name">{name}</span>
      </div>
      <style jsx>
        {`
          .card {
            padding: 1rem;
            border: 1px black solid;
            max-width: 30rem;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .skill-name {
            font-weight: 500;
            margin-top: 1rem;
          }

          @media (prefers-color-scheme: dark) {
            .card {
              border-color: white;
            }
          }
        `}
      </style>
    </>
  );
};

export default SkillCard;
