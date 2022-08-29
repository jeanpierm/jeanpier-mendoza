import { SkillType } from '../enums/skill-type.enum';
import { Skill } from '../interfaces/skill.interface';

export const skills: Record<SkillType, Skill[]> = {
  Frontend: [
    { name: 'HTML', logo: '/images/skills/HTML5.svg' },
    { name: 'CSS', logo: '/images/skills/CSS3.svg' },
    { name: 'JavaScript', logo: '/images/skills/javascript.svg' },

    { name: 'React.js', logo: '/images/skills/reactjs.svg' },
    { name: 'Angular', logo: '/images/skills/angular.svg' },
  ],
  Backend: [
    {
      name: 'Java',
      logo: '/images/skills/java.svg',
    },
    {
      name: 'Spring',
      logo: '/images/skills/spring.svg',
    },
    {
      name: 'Quarkus.io',
      logo: '/images/skills/quarkus.svg',
    },
    {
      name: 'Node.js',
      logo: '/images/skills/nodejs.svg',
    },
    {
      name: 'Express.js',
      logo: '/images/skills/expressjs.svg',
    },
    {
      name: 'NestJS',
      logo: '/images/skills/nestjs.svg',
    },
    {
      name: 'MySQL',
      logo: '/images/skills/mysql.svg',
    },
    {
      name: 'PostgreSQL',
      logo: '/images/skills/postgresql.svg',
    },
    {
      name: 'MongoDB',
      logo: '/images/skills/mongodb.svg',
    },
    {
      name: 'CouchDB',
      logo: '/images/skills/couchdb.svg',
    },
  ],
  Tools: [
    { name: 'TypeScript', logo: '/images/skills/typescript.svg' },
    { name: 'Jest', logo: '/images/skills/jest.svg' },
    { name: 'Swagger', logo: '/images/skills/swagger.svg' },
    { name: 'Docker', logo: '/images/skills/docker.svg' },
    { name: 'Git', logo: '/images/skills/git.svg' },
    { name: 'Linux', logo: '/images/skills/linux.svg' },
    { name: 'Vercel', logo: '/images/skills/vercel.svg' },
    { name: 'AWS', logo: '/images/skills/aws.svg' },
    { name: 'Azure', logo: '/images/skills/azure.svg' },
  ],
};
