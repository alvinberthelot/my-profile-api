const { tags } = require("./tags")

const getContent = () => {
  const experiences = [
    {
      company: "CBP",
      dateBegin: "23-04-2018",
      dateEnd: null,
      place: "Nantes",
      title: "Encadrement et développement Angular",
      description:
        "Expert technique Angular au sein de l'équipe CBP pour la mise en place d'une architecture front-end avec encadrement de l'équipe interne pour une montée en compétences.",
      tasks: [
        "Mise en place de l'architecture front-end Angular",
        "Encadrement technique de l'équipe interne",
        "Mise en place de l'outillage et de l'industrialisation",
      ],
      tags: [
        "typescript",
        "angular",
        "ngrx",
        "bootstrap",
        "nodejs",
        "html",
        "css",
        "sass",
        "travis",
        "git",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "Ynov",
      dateBegin: "01-11-2017",
      dateEnd: "31-03-2018",
      place: "Nantes",
      title: "Intervenant pédagogique",
      description:
        "Intervenant dans le cursus Ynov pour les étudiants sur différentes années et différents modules. Pour chaque module, conception des supports pédagogiques puis interventions théoriques et pratiques auprès des étudiants",
      tasks: [
        "Git & JS : étudiants de 1ère année",
        "Node.js : étudiants de 2ème année",
        "Node.js : étudiants de 3ème année",
        "Projet web : étudiants de 3ème année",
        "Développement mobile : étudiants de 3ème année",
        "Développement mobile : étudiants de 4ème et 5ème année",
        "Programmation fonctionnelle en JavaScript : étudiants de 4ème et 5ème année",
      ],
      tags: ["git", "html", "css", "javascript", "nodejs", "lodash", "ionic"],
      repository: null,
      downloads: null,
    },

    {
      company: "DSIA",
      dateBegin: "01-03-2017",
      dateEnd: "31-10-2017",
      place: "Nantes",
      title: "Encadrement technique Angular",
      description:
        "Expert technique Angular pour la mise en place d'une architecture front-end avec encadrement de l'équipe interne pour une montée en compétences",
      tasks: [
        "Mise en place de l'architecture front-end Angular",
        "Encadrement technique de l'équipe interne",
        "Mise en place de l'outillage et de l'industrialisation",
      ],
      tags: [
        "javascript",
        "angular",
        "bootstrap",
        "nodejs",
        "html",
        "css",
        "sass",
        "jenkins",
        "verdaccio",
        "testcafe",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "Ynov",
      dateBegin: "01-02-2017",
      dateEnd: "28-02-2017",
      place: "Nantes",
      title: "Intervenant pédagogique",
      description:
        "Intervenant dans le cursus Ynov pour les étudiants de 4ème et 5ème année sur le module “Programmation fonctionnelle en JavaScript“",
      tasks: [
        "Conception des supports pédagogiques",
        "Interventions théoriques et pratiques auprès des étudiants",
      ],
      tags: ["javascript", "nodejs", "fp", "lodash"],
      repository: null,
      downloads: null,
    },

    {
      company: "WIS (Web Internet School)",
      dateBegin: "01-01-2017",
      dateEnd: "31-01-2017",
      place: "Nantes",
      title: "Intervenant pédagogique",
      description:
        "Intervenant dans le cursus WIS pour les étudiants de 2ème année sur le module “Développement d’applications mobiles“",
      tasks: [
        "Conception des supports pédagogiques",
        "Interventions théoriques et pratiques auprès des étudiants",
      ],
      tags: ["html", "css", "android", "ios", "hybrid"],
      repository: null,
      downloads: null,
    },

    {
      company: null,
      dateBegin: "01-12-2016",
      dateEnd: "31-12-2016",
      place: "Nantes",
      title: "Développeur fullstack sénior",
      description:
        "Réalisation d’une application web (front-end et back-end) de gestion de listes de courses",
      tasks: ["Développements back-end", "Développements front-end"],
      tags: [
        "html",
        "css",
        "sass",
        "angular",
        "nodejs",
        "express",
        "neo4j",
        "docker",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "Intuitive Robots",
      dateBegin: "01-10-2016",
      dateEnd: "30-11-2016",
      place: "Nantes",
      title: "Développeur front-end sénior",
      description:
        "Conseil et réalisation d’une application front-end CMS spécifique à la gestion de contenus",
      tasks: [
        "Conseils sur la stack technique front-end (JavaScript, CSS)",
        "Développements front-end",
      ],
      tags: ["html", "css", "sass", "angularjs", "gulp", "python", "django"],
      repository: null,
      downloads: null,
    },

    {
      company: "GE Money Bank",
      dateBegin: "01-07-2016",
      dateEnd: "30-10-2016",
      place: "Nantes",
      title: "Scrum master",
      description:
        "Scrum Master pour l’intégration d’une signature électronique sur tablette au sein d’une application de proposition de crédits",
      tasks: [
        "Facilitation au sein de l’équipe de développement",
        "Coordination avec les différents interlocuteurs du SI",
      ],
      tags: ["html", "css", "angularjs", "javaee"],
      repository: null,
      downloads: null,
    },

    {
      company: "Intuitive Robots",
      dateBegin: "01-03-2016",
      dateEnd: "31-05-2016",
      place: "Nantes",
      title: "Développeur front-end sénior",
      description:
        "Conseil et réalisation d’une application front-end CMS spécifique à la gestion de contenus",
      tasks: [
        "Conseils sur la stack technique front-end (JavaScript, CSS)",
        "Développements front-end",
      ],
      tags: ["html", "css", "sass", "angularjs", "gulp", "python", "django"],
      repository: null,
      downloads: null,
    },

    {
      company: "WIS (Web Internet School)",
      dateBegin: "01-01-2016",
      dateEnd: "31-03-2016",
      place: "Nantes",
      title: "Intervenant pédagogique",
      description:
        "Intervenant dans le cursus WIS pour les étudiants de 2ème année sur le module “Développement d’applications mobiles”",
      tasks: [
        "Conception des supports pédagogiques",
        "Interventions théoriques et pratiques auprès des étudiants",
      ],
      tags: ["html", "css", "android", "ios", "hybrid"],
      repository: null,
      downloads: null,
    },

    {
      company: "Hop-Cube",
      dateBegin: "01-02-2016",
      dateEnd: "28-02-2016",
      place: "Nantes",
      title: "Consultant mobile",
      description:
        "Consultant mobile pour l’entreprise Hop-Cube pour effectuer une sensibilisation/formation auprès des interlocuteurs de l’ADEME sur les opportunités et le contexte des applications mobiles",
      tasks: [
        "Conception des supports de sensibilisation/formation",
        "Intervention auprès des interlocuteurs de l’ADEME",
      ],
      tags: ["html", "css", "android", "ios", "hybrid"],
      repository: null,
      downloads: null,
    },

    {
      company: "LIST’N",
      dateBegin: "01-11-2015",
      dateEnd: "31-05-2016",
      place: "Nantes",
      title: "Consultant et développeur mobile sénior",
      description:
        "Consultant pour une étude technique sur la réalisation d’une application mobile de réseau social musical, puis chargé de projet et développeur pour la réalisation",
      tasks: [
        "Réalisation d'une étude technique sur la faisabilité d'une application mobile de réseau social musical utilisant des API publiques : Facebook, Spotify",
        "Réalisation d'une application mobile hybride (Ionic) utilisant les API publiques Facebook, Spotify et utilisant Firebase comme back-end spécifique",
        "Distribution des applications mobiles sur les stores Google Play et App Store",
      ],
      tags: [
        "html",
        "css",
        "sass",
        "angularjs",
        "ionic",
        "hybrid",
        "android",
        "ios",
        "api",
        "firebase",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "Intuitive Robots",
      dateBegin: "01-07-2015",
      dateEnd: "30-09-2015",
      place: "Nantes",
      title: "Développeur front-end sénior",
      description:
        "Conseils et réalisation d’applications front-end dédiées à la tablette du robot humanoïde Pepper d’Aldebaran, applications s’interfaçant avec NAOqi (OS du robot)",
      tasks: [
        "Conseils sur la stack technique front-end (JavaScript, CSS)",
        "Développements front-end",
      ],
      tags: ["html", "css", "sass", "angularjs", "gulp"],
      repository: null,
      downloads: null,
    },
  ]

  const content = experiences.map((experience) => {
    return {
      ...experience,
      tags: experience.tags.map((tag) => ({
        tag,
        wording: tags[tag] ? tags[tag].wordings.fr : "oups",
      })),
    }
  })

  return content
}

module.exports = {
  getWorkExperiences: getContent,
}
