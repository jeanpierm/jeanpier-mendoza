import { ExperienceIntf } from '../interfaces/experience.interface';

export const experiences: ExperienceIntf[] = [
  {
    jobTitle: 'SSR. Software Developer',
    company: { name: 'Gizlo · Full-time', website: 'https://gizlocorp.com/' },
    period: 'Sep 2022 - present',
    description:
      'Migration of Corporate Credit Card web services for a financial institution, oriented towards a microservices architecture, improving the scalability, maintainability and future projection of the product.<br/>Development of user interface to facilitate the configuration of the internal component of the telecommunications company.',
    technologies: `Gitlab · OpenShift · AWS Lambda · Amazon Web Services (AWS) · Spring Boot · Java · Docker · RESTful WebServices · Quarkus · React · TypeScript`,
  },
  {
    jobTitle: 'JR. Software Developer',
    company: { name: 'Gizlo · Full-time', website: 'https://gizlocorp.com/' },
    period: 'Dec 2021 - May 2022 · 6 mos',
    description:
      'Analysis, design, development, testing and documentation of REST services. Remaking a node.js backend of the digital identity of the clients, from Loopback to the NestJS framework, for its maintainability and future projection. Bug fixes, improvements, implementation of unit and e2e tests, error catalog, documentation, as well as development of new REST services.<br/><br/>Unfortunately, due to the development of my degree work, I had to stop working.',
    technologies: `Node.js · NestJS · TypeScript · Mongoose · MongoDB · TypeORM · OracleDB · Jest · Supertest · REST API · Microservices · OpenAPI Swagger · Angular · Docker · Linux · Git · Gitlab`,
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
    Java · Spring Boot · REST API · JPA · MySQL · CouchDB · JWT · OpenAPI Swagger · Wildfly · HTML5 · CSS3 · JavaScript · Vue.js · Quasar Framework · Git · Bitbucket`,
  },
];
