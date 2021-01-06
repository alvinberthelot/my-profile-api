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
            values: ["rxjs", "lodash", "jquery"],
          },
        ],
      },

      {
        key: "spa",
        values: [
          {
            key: "typescript",
            values: ["angular", "ngrx", "vue3"],
          },
          {
            key: "javascript",
            values: ["angularjs", "vuejs", "knockoutjs"],
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
            key: "java",
            values: ["ant", "junit", "log4j"],
          },
          {
            key: "javaee",
            values: [
              "struts",
              "hibernate",
              "spring",
              "tomcat",
              "jboss",
              "weblogic",
              "websphere",
              "resin",
              "liferay",
              "oracleportal",
              "weblogicportal",
            ],
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
            values: [
              "mysql",
              "postgresql",
              "oracle",
              "sybase",
              "sqldeveloper",
              "toad",
            ],
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
            values: ["jest", "mocha", "chai", "jasmine", "cypress", "testcafe"],
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
          {
            key: "virtualization",
            values: ["docker"],
          },
          {
            key: "paas",
            values: ["heroku"],
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
        ],
      },
    ],
  },
]

// agile
// api
// ddd
// django
// easyphp
// fp
// frp
// ml
// python
// ror
// scrum
// security
// wordpress
// xml
// xsl

module.exports = {
  levels,
}
