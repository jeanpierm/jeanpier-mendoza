import { ExperienceIntf } from '../interfaces/experience.interface';

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
