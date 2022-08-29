import { Project, TechnologyIcon } from '../interfaces/project.interface';

const icons = {
  java: { value: 'logos:java' },
  spring: { value: 'logos:spring-icon' },
  jwt: { value: 'logos:jwt-icon' },
  mysql: { value: 'logos:mysql-icon' },
  react: { value: 'logos:react' },
  typescript: { value: 'logos:typescript-icon' },
  mui: { value: 'logos:material-ui' },
  redux: { value: 'logos:redux' },
  linux: { value: 'logos:linux-tux' },
  nestjs: { value: 'logos:nestjs' },
  mongodb: { value: 'logos:mongodb-icon' },
  angular: { value: 'logos:angular-icon' },
  swagger: { value: 'logos:swagger' },
  docker: { value: 'logos:docker-icon' },
  ec2: { value: 'logos:aws-ec2' },
  postgresql: { value: 'logos:postgresql' },
  prime: { value: 'prime:prime' },
  material: { value: 'mdi:material-design' },
  express: { value: 'simple-icons:express' },
  azure: { value: 'logos:microsoft-azure' },
  jest: { value: 'logos:jest' },
  test: { value: 'fluent-emoji-flat:test-tube' },
  quarkus: { value: 'logos:quarkus-icon' },
  puppeteer: { value: 'logos:puppeteer' },
  springboot: { value: 'simple-icons:springboot', style: { color: '#6DB33F' } },
  tool: { value: 'icon-park:tool' },
};

export const projects: Project[] = [
  {
    title: 'Clínica de Puertas de Carros J & G Management System',
    description:
      'A management system to control sales, inventory and other aspects of the business. Currently in development.',
    image: '/images/projects/clinica-puertas.png',
    repositoryUrls: ['https://github.com/jeanpierm/clinica-puertas-jg'],
    technologies: [
      { name: 'Java', icon: icons.java },
      {
        name: 'Spring Boot',
        icon: icons.springboot,
      },
      { name: 'Spring Security/JWT', icon: icons.jwt },
      { name: 'Spring Data JPA/MySQL', icon: icons.mysql },
      { name: 'ReactJS', icon: icons.react },
      { name: 'TypeScript', icon: icons.typescript },
      { name: 'Material UI (MUI)', icon: icons.mui },
      { name: 'Redux Toolkit (RTK) & RTK Query', icon: icons.redux },
      { name: 'React Hook Form', icon: icons.tool },
      { name: 'Linux', icon: icons.linux },
    ],
  },
  {
    title: 'Professional Profile Generator (PPG)',
    description: `A web platform that allows you to discover the most demanded technologies in your city in real time using web scraping. Developed in team with <a target="_blank" href="https://github.com/EmilyLino">@EmilyLino</a>.`,
    image: '/images/projects/ppg.png',
    repositoryUrls: [
      'https://github.com/jeanpierm/ppg-server',
      'https://github.com/jeanpierm/ppg-client',
    ],
    technologies: [
      { name: 'TypeScript', icon: icons.typescript },
      { name: 'Node.js/NestJS', icon: icons.nestjs },
      { name: 'Puppeteer', icon: icons.puppeteer },
      { name: 'JWT', icon: icons.jwt },
      { name: 'Mongoose/MongoDB', icon: icons.mongodb },
      { name: 'Angular', icon: icons.angular },
      { name: 'Angular Material', icon: icons.material },
      { name: 'OpenAPI/Swagger', icon: icons.swagger },
      { name: 'Docker', icon: icons.docker },
      { name: 'Linux', icon: icons.linux },
      { name: 'AWS', icon: icons.ec2 },
    ],
  },
  {
    title: 'Auth App',
    description: `An app that allows authentication and registration, as well as maintenance operations (CRUD) of users.`,
    image: '/images/projects/angular-auth-app.png',
    repositoryUrls: [
      'https://github.com/jeanpierm/auth-app',
      'https://github.com/jeanpierm/rest-api-spring-jpa',
    ],
    technologies: [
      { name: 'Java', icon: icons.java },
      { name: 'Spring Boot', icon: icons.springboot },
      { name: 'Spring Security/JWT', icon: icons.jwt },
      { name: 'Spring Data JPA/PostgreSQL', icon: icons.postgresql },
      { name: 'OpenAPI/Swagger', icon: icons.swagger },
      { name: 'Angular', icon: icons.angular },
      { name: 'PrimeNG', icon: icons.prime },
      { name: 'Docker', icon: icons.docker },
      { name: 'Linux', icon: icons.linux },
    ],
  },
  {
    title: 'CaniCat Backend',
    description: `The backend for a mobile application that allows you to manage your pets' vaccinations. Developed in team with <a target="_blank" href="https://github.com/EmilyLino">@EmilyLino</a>.`,
    image: '/images/projects/canicat-backend.png',
    repositoryUrls: ['https://github.com/jeanpierm/canicat-backend'],
    technologies: [
      { name: 'TypeScript', icon: icons.typescript },
      { name: 'Node.js/Express.js', icon: icons.express },
      { name: 'JWT', icon: icons.jwt },
      { name: 'Sequelize/MySQL', icon: icons.mysql },
      { name: 'Docker', icon: icons.docker },
      { name: 'Linux', icon: icons.linux },
      { name: 'Azure', icon: icons.azure },
    ],
  },
  {
    title: 'Users & Auth RESTful API (NestJS)',
    description: `An example of a RESTful API for users with authentication.`,
    image: '/images/projects/nestjs-mongo.png',
    repositoryUrls: ['https://github.com/jeanpierm/rest-api-nestjs-mongo'],
    technologies: [
      { name: 'TypeScript', icon: icons.typescript },
      { name: 'Node.js/NestJS', icon: icons.nestjs },
      { name: 'JWT', icon: icons.jwt },
      { name: 'Mongoose/MongoDB', icon: icons.mongodb },
      { name: 'Jest (unit test)', icon: icons.jest },
      { name: 'Supertest (e2e test)', icon: icons.test },
      { name: 'OpenAPI/Swagger', icon: icons.swagger },
      { name: 'Docker', icon: icons.docker },
      { name: 'Linux', icon: icons.linux },
    ],
  },
  {
    title: 'Warframes RESTful API (Spring Boot)',
    description:
      'An example of RESTful API for warframes (videogame characters) and their abilities.',
    image: '/images/projects/spring-mongo.png',
    repositoryUrls: ['https://github.com/jeanpierm/rest-api-spring-mongo'],
    technologies: [
      { name: 'Java', icon: icons.java },
      {
        name: 'Spring Boot',
        icon: icons.springboot,
      },
      { name: 'Spring Data MongoDB', icon: icons.mongodb },
      { name: 'Docker', icon: icons.docker },
      { name: 'Linux', icon: icons.linux },
    ],
  },
  {
    title: 'Users & Auth RESTful API (Express.js)',
    description:
      'An example of RESTful API for users with authentication and authorization.',
    image: '/images/projects/express-mongo.png',
    repositoryUrls: ['https://github.com/jeanpierm/rest-api-express-mongo'],
    technologies: [
      { name: 'TypeScript', icon: icons.typescript },
      { name: 'Node.js/Express.js', icon: icons.express },
      { name: 'JWT', icon: icons.jwt },
      { name: 'Mongoose/MongoDB', icon: icons.mongodb },
      { name: 'Docker', icon: icons.docker },
      { name: 'Linux', icon: icons.linux },
    ],
  },
  {
    title: 'Monitors RESTful API (Quarkus.io)',
    description: `An example of RESTful API microservice for monitors.`,
    image: '/images/projects/quarkus.jpg',
    technologies: [
      { name: 'Java', icon: icons.java },
      { name: 'Quarkus.io', icon: icons.quarkus },
      { name: 'Spring Data JPA/PostgreSQL', icon: icons.postgresql },
      { name: 'Docker', icon: icons.docker },
      { name: 'Linux', icon: icons.linux },
    ],
    repositoryUrls: [
      'https://github.com/jeanpierm/rest-api-quarkusio-postgresql',
    ],
  },
];