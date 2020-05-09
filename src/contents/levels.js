const levels = {
  backend: {
    api: {},
    python: {
      django: [],
      ml: [],
    },
    database: {
      nosql: ["neo4j", "mongodb"],
      sql: ["mysql", "postgresql", "oracle"],
      dbaas: ["firebase"],
    },
    java: {
      javaee: [],
    },
    nodejs: {
      express: ["passport", "mongoose"],
    },
  },
  frontend: {
    web: {
      html: ["html5", "awd", "rwd", "pwa"],
      css: ["css3", "sass", "bootstrap"],
      javascript: ["angularjs"],
      typescript: ["angular", "ngrx"],
    },
    mobile: {
      android: [],
      hybrid: ["ionic", "phonegap"],
      ios: [],
    },
  },
  industrialization: {
    ci: {
      jenkins: [],
      travis: [],
      verdaccio: [],
    },
    versionning: {
      cvs: [],
      git: [],
      svn: [],
    },
    virtualization: {
      docker: [],
    },
  },
}

// const unknown = ["agile", "ddd", "fp", "frp"]
// scrum
// security
// lodash
// rxjs
// testcafe
// webpack
// gulp
// grunt
// jest
// jasmine
// phonegap

module.exports = {
  levels,
}
