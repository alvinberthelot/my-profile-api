const tags = {
  agile: {
    wordings: { fr: "Agile" },
  },
  android: {
    wordings: { fr: "Android" },
  },
  angular: {
    wordings: { fr: "Angular" },
  },
  angularjs: {
    wordings: { fr: "AngularJS" },
  },
  api: {
    wordings: { fr: "API" },
  },
  awd: {
    wordings: { fr: "Adaptive Web Design" },
  },
  backend: {
    wordings: { fr: "Back-end" },
  },
  bootstrap: {
    wordings: { fr: "Bootstrap" },
  },
  ci: {
    wordings: { fr: "Intégration continue" },
  },
  css: {
    wordings: { fr: "CSS" },
  },
  css3: {
    wordings: { fr: "CSS3" },
  },
  cvs: {
    wordings: { fr: "CVS" },
  },
  database: {
    wordings: { fr: "Base de données" },
  },
  dbaas: {
    wordings: { fr: "DBaaS" },
  },
  ddd: {
    wordings: { fr: "DDD" },
  },
  django: {
    wordings: { fr: "Django" },
  },
  docker: {
    wordings: { fr: "Docker" },
  },
  express: {
    wordings: { fr: "Express" },
  },
  fp: {
    wordings: { fr: "Programmation fonctionnelle" },
  },
  firebase: {
    wordings: { fr: "Firebase" },
  },
  frontend: {
    wordings: { fr: "Front-end" },
  },
  frp: {
    wordings: { fr: "Programmation réactive fonctionnelle" },
  },
  git: {
    wordings: { fr: "Git" },
  },
  gulp: {
    wordings: { fr: "Gulp" },
  },
  html: {
    wordings: { fr: "HTML" },
  },
  html5: {
    wordings: { fr: "HTML5" },
  },
  hybrid: {
    wordings: { fr: "Application mobile hybride" },
  },
  industrialization: {
    wordings: { fr: "Industrialisation" },
  },
  ionic: {
    wordings: { fr: "Ionic" },
  },
  ios: {
    wordings: { fr: "iOS" },
  },
  java: {
    wordings: { fr: "Java" },
  },
  javaee: {
    wordings: { fr: "Java EE" },
  },
  javascript: {
    wordings: { fr: "JavaScript" },
  },
  jenkins: {
    wordings: { fr: "JavaScript" },
  },
  jquery: {
    wordings: { fr: "jQuery" },
  },
  lodash: {
    wordings: { fr: "Lodash" },
  },
  ml: {
    wordings: { fr: "ML" },
  },
  mobile: {
    wordings: { fr: "Mobile" },
  },
  mongodb: {
    wordings: { fr: "MongoDB" },
  },
  mongoose: {
    wordings: { fr: "Mongoose" },
  },
  mysql: {
    wordings: { fr: "MySQL" },
  },
  ngrx: {
    wordings: { fr: "ngRx" },
  },
  neo4j: {
    wordings: { fr: "Neo4j" },
  },
  nodejs: {
    wordings: { fr: "Node.js" },
  },
  nosql: {
    wordings: { fr: "NoSQL" },
  },
  oracle: {
    wordings: { fr: "Oracle" },
  },
  passport: {
    wordings: { fr: "Passport" },
  },
  phonegap: {
    wordings: { fr: "PhoneGap" },
  },
  postgresql: {
    wordings: { fr: "PostgreSQL" },
  },
  python: {
    wordings: { fr: "Python" },
  },
  pwa: {
    wordings: { fr: "Progressive Web Apps" },
  },
  rxjs: {
    wordings: { fr: "RxJS" },
  },
  rwd: {
    wordings: { fr: "Responsive Web Design" },
  },
  sass: {
    wordings: { fr: "Sass" },
  },
  scrum: {
    wordings: { fr: "Scrum" },
  },
  security: {
    wordings: { fr: "Sécurité" },
  },
  sql: {
    wordings: { fr: "SQL" },
  },
  sonar: {
    wordings: { fr: "Sonar" },
  },
  svn: {
    wordings: { fr: "SVN" },
  },
  testcafe: {
    wordings: { fr: "TestCafe" },
  },
  travis: {
    wordings: { fr: "Travis" },
  },
  typescript: {
    wordings: { fr: "TypeScript" },
  },
  verdaccio: {
    wordings: { fr: "Verdaccio" },
  },
  versionning: {
    wordings: { fr: "Versionning" },
  },
  virtualization: {
    wordings: { fr: "Virtualisation" },
  },
  web: {
    wordings: { fr: "Web" },
  },
  webpack: {
    wordings: { fr: "webpack" },
  },
}

const getTagLabel = (key, language = "fr") => {
  const tag = tags[key]
  if (!tag) {
    throw new Error(`Tag ${key} is unknown`)
  }
  return tag.wordings[language]
}

module.exports = {
  getTagLabel,
}
