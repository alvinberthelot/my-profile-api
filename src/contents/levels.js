const levels = [
  {
    key: "frontend",
    values: [
      {
        key: "web",
        values: [
          {
            key: "html",
            values: ["html5", "awd", "rwd", "pwa"],
          },
          {
            key: "css",
            values: ["css3", "sass", "bootstrap"],
          },
          {
            key: "javascript",
            values: ["jquery", "lodash"],
          },
        ],
      },

      {
        key: "spa",
        values: [
          {
            key: "typescript",
            values: ["angular", "ngrx"],
          },
          {
            key: "javascript",
            values: ["angularjs"],
          },
        ],
      },

      {
        key: "mobile",
        values: [
          {
            key: "hybrid",
            values: ["ionic", "phonegap"],
          },
          {
            key: "android",
            values: [],
          },
          {
            key: "ios",
            values: [],
          },
        ],
      },
    ],
  },

  {
    key: "backend",
    values: [
      {
        key: "nodejs",
        values: [
          {
            key: "express",
            values: ["passport", "mongoose"],
          },
        ],
      },
      {
        key: "javaee",
        values: [
          {
            key: "javaee",
            values: [],
          },
        ],
      },
      {
        key: "database",
        values: [
          {
            key: "nosql",
            values: ["neo4j", "mongodb"],
          },
          {
            key: "sql",
            values: ["mysql", "postgresql", "oracle"],
          },
          {
            key: "dbaas",
            values: ["firebase"],
          },
        ],
      },
    ],
  },

  {
    key: "industrialization",
    values: [
      {
        key: "tests",
        values: [
          {
            key: "javascript",
            values: ["jest", "mocha", "chai", "jasmine", "testcafe"],
          },
        ],
      },
      {
        key: "deploy",
        values: [
          {
            key: "build",
            values: ["webpack", "gulp", "grunt", "npm", "verdaccio"],
          },
        ],
      },
      {
        key: "quality",
        values: [
          {
            key: "versionning",
            values: ["git", "svn", "cvs"],
          },
          {
            key: "ci",
            values: ["jenkins", "travis"],
          },
          {
            key: "metrics",
            values: ["sonar"],
          },
          {
            key: "virtualization",
            values: ["docker"],
          },
        ],
      },
    ],
  },
]

// const unknown = ["agile", "ddd", "fp", "frp"]
// scrum
// security
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
