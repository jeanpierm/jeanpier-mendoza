import { SkillType } from '../enums/skill-type.enum';
import { ExperienceIntf } from '../interfaces/experience.interface';
import { Project } from '../interfaces/project.interface';
import { Skill } from '../interfaces/skill.interface';

export const contact = {
  email: 'jeanpi3rm@gmail.com',
  github: 'https://github.com/jeanpierm',
  gitlab: 'https://gitlab.com/jeanpierm',
  stackOverFlow:
    'https://stackoverflow.com/users/15395091/jeanpier-mendoza?tab=profile',
  linkedIn: 'https://www.linkedin.com/in/jeanpier-mendoza-navarro-810b05200/',
};

export const skills: Record<SkillType, Skill[]> = {
  Frontend: [
    { name: 'HTML/CSS/JS' },
    { name: 'TypeScript' },
    { name: 'React.js' },
    { name: 'Angular' },
  ],
  Backend: [
    { name: 'Java', sub: ['Spring Boot', 'Quarkus.io'] },
    { name: 'Node.js', sub: ['Express.js', 'NestJS', 'Next.js'] },
    { name: 'SQL', sub: ['MySQL', 'PostgreSQL'] },
    { name: 'NoSQL', sub: ['MongoDB', 'CouchDB'] },
  ],
  Tools: [
    { name: 'Docker' },
    { name: 'Git' },
    { name: 'Linux' },
    { name: 'AWS' },
    { name: 'Azure' },
  ],
};

export const experiences: ExperienceIntf[] = [
  {
    jobTitle: 'Software Developer',
    company: { name: 'Gizlo · Full-time', website: 'https://gizlocorp.com/' },
    period: 'Dec 2021 - May 2022 · 6 mos',
    description:
      'Analysis, design, development, testing and documentation of REST services. Remaking a node.js backend of the digital identity of the clients, from Loopback to the NestJS framework, for its maintainability and future projection. Bug fixes, improvements, implementation of unit and e2e tests, error catalog, documentation, as well as development of new REST services.<br/><br/>Unfortunately, due to the development of my degree work, I had to stop working.',
    technologies: `TypeScript, Node.js (Express.js, NestJS), Mongoose, MongoDB, TypeORM, OracleDB, Jest (unit test), Supertest (e2e test), Angular, REST, OpenAPI Swagger, Docker, Linux, Git, Gitlab.`,
  },
  {
    jobTitle: 'Software Developer Internship',
    company: {
      name: 'Viamatica S.A. · Internship',
      website: 'https://viamatica.com/',
    },
    period: 'Mar 2021 - May 2022 · 3 mos',
    description: `
      During my pre-professional internship I developed the backend and
      frontend of a web information management system with several modules
      and user authentication and authorization for an insurance brokerage
      company.`,
    technologies: `
      Java, JavaScript, HTML5, CSS3, Spring
      Boot, REST, JPA, MySQL, CouchDB, Vue.js (Quasar Framework), JWT,
      OpenAPI Swagger, Wildfly, Git, Bitbucket.`,
  },
];

export const projects: Project[] = [
  {
    title: 'Spring Boot microservice',
    description: `A RESTful API microservice example.`,
    image: '/images/projects/spring-jpa.png',
    technologies:
      'Java, Spring Boot, JPA (MySQL), Spring Security, JWT, Docker, Linux, OpenAPI Swagger.',
    repositoryUrl: 'https://github.com/jeanpierm/rest-api-spring-jpa',
    websiteUrl: 'https://github.com/jeanpierm/rest-api-spring-jpa',
  },
  {
    title: 'Quarkus.io microservice',
    description: `A RESTful API microservice example.`,
    image: '/images/projects/quarkus.jpg',
    technologies: 'Java, Quarkus.io, JPA (PostgreSQL), Docker, Linux.',
    repositoryUrl: 'https://github.com/jeanpierm/rest-api-quarkus-postgresql',
    websiteUrl: 'https://github.com/jeanpierm/rest-api-quarkus-postgresql',
  },
  {
    title: 'NestJS RESTful API',
    description: `A RESTful API example.`,
    image: '/images/projects/nestjs-mongo.png',
    repositoryUrl: 'https://github.com/jeanpierm/rest-api-nestjs-mongo',
    technologies:
      'TypeScript, NestJS, Mongoose (MongoDB), JWT, Docker, Linux, OpenAPI Swagger.',
    websiteUrl: 'https://github.com/jeanpierm/rest-api-nestjs-mongo',
  },
  {
    title: 'Angular Auth App',
    description: `An app that allows authentication and registration, as well as maintenance operations (CRUD) of users.`,
    image: '/images/projects/angular-auth-app.png',
    repositoryUrl: 'https://github.com/jeanpierm/auth-app',
    technologies: 'Angular, PrimeNG.',
    websiteUrl: 'https://github.com/jeanpierm/auth-app',
  },
];
