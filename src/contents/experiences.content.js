const { levels } = require("./levels")
const { mapExperience } = require("./experiences.helper")

const getContent = () => {
  const experiences = [
    {
      company: "Hermès - Cap Gemini",
      dateBegin: "2023-11-20",
      dateEnd: "2024-09-10",
      place: "Nantes",
      title: "Développeur expérimenté TypeScript front-end / back-end",
      description: `Développeur expérimenté TypeScript front-end / back-end et membre de la "Design Authority" au sein d'une grosse équipe Hermès - Cap Gemini pour le site e-commerce.`,
      tasks: [
        "Réalisation, maintenance et conception au sein d'une application Angular (SSR/SPA)",
        "Réalisation, maintenance et conception au sein d'une application Express (API) avec Node.js/TypeScript",
        "Être mentor en interne pour accompagner les développeur·ses moins expérimenté·es",
        "Impulser un haut niveau de qualité du code grâce à une politique de relecture de code et une couverture de code via des tests unitaires",
        "Participer aux différentes cérémonies agiles",
      ],
      tags: [
        "typescript",
        "frontend",
        "angular",
        "ngrx",
        "backend",
        "express",
        "nodejs",
        "html5",
        "css3",
        "sass",
        "jest",
        "npm",
        "git",
        "bitbucket",
        "storybook",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "PeeK'in",
      dateBegin: "2023-03-21",
      dateEnd: "2023-11-10",
      place: "Nantes",
      title: "Coaching front-end / tests E2E avec Playwright",
      description:
        "Coaching pour industrialiser des tests E2E avec Playwright dans 2 applications inter-dépendantes B2C et B2B en Vue",
      tasks: [
        "Élaboration d'un plan d'actions pour migrer des tests E2E vers Playwright avec une harmonisation des conventions",
        "Implémentation de tests",
        "Rédaction de la documentation et support à l'équipe",
      ],
      tags: [
        "typescript",
        "vue3",
        "nodejs",
        "playwright",
        "e2e",
        "html5",
        "npm",
        "git",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "Cosling",
      dateBegin: "2023-07-03",
      dateEnd: "2023-07-06",
      place: "Nantes",
      title: "Consultant Angular",
      description:
        "Réalisation d'un audit technique et migration d'une application Angular de la version 9 à la version 15",
      tasks: [],
      tags: ["typescript", "nodejs", "angular", "nodejs", "npm", "git"],
      repository: null,
      downloads: null,
    },

    {
      company: "Oniris",
      dateBegin: "2023-04-05",
      dateEnd: "2023-05-11",
      place: "Nantes",
      title: "Consultant data-visualisation",
      description:
        "Prestation de développement d'une application web de simulation d'un lapin dans le cadre d'une intervention vétérinaire",
      tasks: [
        "Préconisations d'une architecture technique web par rapport à un existant",
        "Initialisation d'un dépôt WebSocket en Python pour la partie serveur",
        "Développement d'une IHM de data-visualisation affichant des données physiologiques en client web",
      ],
      tags: [
        "typescript",
        "nodejs",
        "chartjs",
        "html5",
        "npm",
        "git",
        "python",
        "websockets",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "La Poste",
      dateBegin: "2023-02-20",
      dateEnd: "2023-06-30",
      place: "Nantes",
      title: "Tech lead front-end",
      description:
        "Consultant Angular au sein d'une équipe La Poste (C2IA : Déploiements d'IA dans un contexte industriel).",
      tasks: [
        "Assurer la montée en compétence des juniors sur le projet",
        "Analyser le code et l'environnement de développement pour suggérer des axes d'amélioration",
        "Contribuer au développement des US, l'implémentation des TU, la relecture du code",
      ],
      tags: [
        "typescript",
        "angular",
        "nodejs",
        "html5",
        "css3",
        "sass",
        "jasmine",
        "npm",
        "git",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "La Poste",
      dateBegin: "2021-06-17",
      dateEnd: "2023-02-10",
      place: "Nantes",
      title: "Tech lead front-end",
      description:
        "Tech lead front-end / Angular au sein d'une équipe La Poste (Édition de Plan Tri Courrier).",
      tasks: [
        "Création, maintenance et conception d'une application Angular et de son architecture avec la mise en place de l'outillage et de l'industrialisation",
        "Contribution à la construction de la roadmap, aux échanges de données via les API et la spécification du produit",
        "Impulser un haut niveau de qualité du code grâce à une politique de relecture de code et une couverture de code via des tests unitaires et E2E",
        "Apporter un support technique (en interne et en off-shore) à l'équipe (10 développeurs front) et prendre les décisions d'arbitrage logicielle",
        "Être mentor en interne pour accompagner les développeur·ses moins expérimenté·es",
        "Faire émerger un design system avec un UX designer pour assurer la cohérence des IHM et du code",
        "Participer aux différentes cérémonies agiles",
      ],
      tags: [
        "typescript",
        "angular",
        "ngrx",
        "nodejs",
        "html5",
        "css3",
        "sass",
        "jasmine",
        "npm",
        "travis",
        "git",
        "storybook",
        "e2e",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "Pasquier",
      dateBegin: "2020-11-26",
      dateEnd: "2021-05-03",
      place: "Nantes",
      title: "Industrialisation web et réalisation d'applications Vue.js",
      description:
        "Prestation de conseil pour l'architecture et l'industrialisation d'applications web avec Vue.js. Ainsi que développement de deux applications métier.",
      tasks: [
        "Mise en place de l'outillage et de l'industrialisation",
        "Développement d'une application métier Vue.js avec des API",
        "Développement d'une application métier Vue.js avec des WebSockets",
      ],
      tags: [
        "typescript",
        "javascript",
        "vuejs",
        "nodejs",
        "html5",
        "css3",
        "websockets",
        "npm",
        "git",
        "sonar",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "CBP",
      dateBegin: "2018-04-23",
      dateEnd: "2020-12-11",
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
        "html5",
        "css3",
        "sass",
        "jasmine",
        "cypress",
        "npm",
        "travis",
        "git",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "Ynov",
      dateBegin: "2017-11-01",
      dateEnd: "2018-03-31",
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
      tags: ["git", "html5", "css3", "javascript", "nodejs", "lodash", "ionic"],
      repository: null,
      downloads: null,
    },

    {
      company: "DSIA",
      dateBegin: "2017-03-01",
      dateEnd: "2017-10-31",
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
        "html5",
        "css3",
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
      dateBegin: "2017-02-01",
      dateEnd: "2017-02-28",
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
      dateBegin: "2017-01-01",
      dateEnd: "2017-01-31",
      place: "Nantes",
      title: "Intervenant pédagogique",
      description:
        "Intervenant dans le cursus WIS pour les étudiants de 2ème année sur le module “Développement d’applications mobiles“",
      tasks: [
        "Conception des supports pédagogiques",
        "Interventions théoriques et pratiques auprès des étudiants",
      ],
      tags: ["html5", "css3", "android", "ios", "hybrid"],
      repository: null,
      downloads: null,
    },

    {
      company: "Cababam",
      dateBegin: "2016-12-01",
      dateEnd: "2016-12-31",
      place: "Nantes",
      title: "Développeur fullstack sénior",
      description:
        "Réalisation d’une application web (front-end et back-end) de gestion de listes de courses",
      tasks: ["Développements back-end", "Développements front-end"],
      tags: [
        "html5",
        "css3",
        "sass",
        "angular",
        "nodejs",
        "express",
        "passport",
        "neo4j",
        "docker",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "Intuitive Robots",
      dateBegin: "2016-10-01",
      dateEnd: "2016-11-30",
      place: "Nantes",
      title: "Développeur front-end sénior",
      description:
        "Conseil et réalisation d’une application front-end CMS spécifique à la gestion de contenus",
      tasks: [
        "Conseils sur la stack technique front-end (JavaScript, CSS)",
        "Développements front-end",
      ],
      tags: ["html5", "css3", "sass", "angularjs", "gulp", "python", "django"],
      repository: null,
      downloads: null,
    },

    {
      company: "GE Money Bank",
      dateBegin: "2016-07-01",
      dateEnd: "2016-10-30",
      place: "Nantes",
      title: "Scrum master",
      description:
        "Scrum Master pour l’intégration d’une signature électronique sur tablette au sein d’une application de proposition de crédits",
      tasks: [
        "Facilitation au sein de l’équipe de développement",
        "Coordination avec les différents interlocuteurs du SI",
      ],
      tags: ["html5", "css3", "angularjs", "javaee"],
      repository: null,
      downloads: null,
    },

    {
      company: "Intuitive Robots",
      dateBegin: "2016-03-01",
      dateEnd: "2016-05-31",
      place: "Nantes",
      title: "Développeur front-end sénior",
      description:
        "Conseil et réalisation d’une application front-end CMS spécifique à la gestion de contenus",
      tasks: [
        "Conseils sur la stack technique front-end (JavaScript, CSS)",
        "Développements front-end",
      ],
      tags: ["html5", "css3", "sass", "angularjs", "gulp", "python", "django"],
      repository: null,
      downloads: null,
    },

    {
      company: "WIS (Web Internet School)",
      dateBegin: "2016-01-01",
      dateEnd: "2016-03-31",
      place: "Nantes",
      title: "Intervenant pédagogique",
      description:
        "Intervenant dans le cursus WIS pour les étudiants de 2ème année sur le module “Développement d’applications mobiles”",
      tasks: [
        "Conception des supports pédagogiques",
        "Interventions théoriques et pratiques auprès des étudiants",
      ],
      tags: ["html5", "css3", "android", "ios", "hybrid"],
      repository: null,
      downloads: null,
    },

    {
      company: "Hop-Cube",
      dateBegin: "2016-02-01",
      dateEnd: "2016-02-28",
      place: "Nantes",
      title: "Consultant mobile",
      description:
        "Consultant mobile pour l’entreprise Hop-Cube pour effectuer une sensibilisation/formation auprès des interlocuteurs de l’ADEME sur les opportunités et le contexte des applications mobiles",
      tasks: [
        "Conception des supports de sensibilisation/formation",
        "Intervention auprès des interlocuteurs de l’ADEME",
      ],
      tags: ["html5", "css3", "android", "ios", "hybrid"],
      repository: null,
      downloads: null,
    },

    {
      company: "LIST’N",
      dateBegin: "2015-11-01",
      dateEnd: "2016-05-31",
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
        "html5",
        "css3",
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
      dateBegin: "2015-07-01",
      dateEnd: "2015-09-30",
      place: "Nantes",
      title: "Développeur front-end sénior",
      description:
        "Conseils et réalisation d’applications front-end dédiées à la tablette du robot humanoïde Pepper d’Aldebaran, applications s’interfaçant avec NAOqi (OS du robot)",
      tasks: [
        "Conseils sur la stack technique front-end (JavaScript, CSS)",
        "Développements front-end",
      ],
      tags: ["html5", "css3", "sass", "angularjs", "gulp"],
      repository: null,
      downloads: null,
    },

    {
      company: "Meeschaert",
      dateBegin: "2015-02-01",
      dateEnd: "2015-02-28",
      place: "Nantes - Paris",
      title: "Consultant mobile",
      description:
        "Consultant fonctionnel pour une application mobile native iOS et Android pour la gestion des portefeuilles bancaires pour les clients Meeschaert",
      tasks: [
        "Recueil des besoins, mise en place d'ateliers de conception ergonomique avec les conseillers clients",
        "Rédaction des spécifications fonctionnelles",
      ],
      tags: ["android", "ios"],
      repository: null,
      downloads: null,
    },

    {
      company: "Agglomération de La Rochelle",
      dateBegin: "2014-06-01",
      dateEnd: "2015-02-01",
      place: "Nantes - La Rochelle",
      title: "Chef de projet technique",
      description:
        "Chef de projet technique pour la refonte RWD du portail d'agglomération de La Rochelle",
      tasks: [
        "Recueil des besoins, mise en place d'ateliers de conception ergonomique",
        "Encadrement des développeurs",
        "Développement web RWD",
      ],
      tags: [
        "javaee",
        "liferay",
        "html5",
        "css3",
        "javascript",
        "nodejs",
        "grunt",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "AFD (Agence Française de Développement)",
      dateBegin: "2014-11-01",
      dateEnd: "2014-11-30",
      place: "Paris",
      title: "Consultant Agile",
      description:
        "Consultant dans le cadre de la mise ne place d'une organisation Agile au sein du département informatique de l'AFD",
      tasks: [
        "Interview des collaborateurs de l'AFD",
        "Rédaction des préconisations pour une mise en place de l'agilité au sein de l'organisation",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "CSOEC (Conseil Supérieur de l'Ordre des Experts Comptables)",
      dateBegin: "2014-05-01",
      dateEnd: "2014-05-31",
      place: "Nantes - Paris",
      title: "Consultant mobile",
      description:
        "Consultant technique et fonctionnel pour le démarrage de la réalisation d'applications mobiles natives Android et iOS",
      tasks: [
        "Rédaction des spécifications fonctionelles",
        "Mise en place des canaux de distribution",
        "Rédaction des préconisations techniques mobiles",
      ],
      tags: ["android", "ios", "html5", "css3"],
      repository: null,
      downloads: null,
    },

    {
      company: "AssurOnline",
      dateBegin: "2014-04-01",
      dateEnd: "2014-04-30",
      place: "Nantes",
      title: "Consultant mobile",
      description:
        "Consultant technique et fonctionnel pour le démarrage de la réalisation d'applications mobiles natives Android et iOS",
      tasks: [
        "Mise en place des canaux de distribution",
        "Rédaction des spécifications fonctionelles",
      ],
      tags: ["android", "ios"],
      repository: null,
      downloads: null,
    },

    {
      company: "EDF",
      dateBegin: "2014-02-01",
      dateEnd: "2014-03-31",
      place: "Nantes",
      title: "Chef de projet technique",
      description:
        "Chef de projet technique pour une application native pour tablettes iOS et Android à destination des partenaires EDF",
      tasks: [
        "Recueil des besoins, mise en place d'ateliers de conception ergonomique avec les partenaires",
        "Rédaction des spécifications fonctionnelles",
        "Mise en place des canaux de distribution",
        "Suivi du déroulement du projet",
      ],
      tags: ["android", "ios", "ror", "heroku"],
      repository: null,
      downloads: null,
    },

    {
      company: "En continu chez divers clients",
      dateBegin: "2013-11-01",
      dateEnd: "2015-02-28",
      place: "Nantes",
      title: "Formateur web",
      description: "Formateur sur les technologies web front-end",
      tasks: [
        "Rédaction des supports de formation et des exercices",
        "Déroulement des formations",
      ],
      tags: ["html5", "css", "sass", "javascript", "nodejs", "grunt", "gulp"],
      repository: null,
      downloads: null,
    },

    {
      company: "Ippon technologies",
      dateBegin: "2013-05-01",
      dateEnd: "2013-09-30",
      place: "Nantes",
      description:
        "Consultant technique et animation d’ateliers pour la mise en place d’une capitalisation technique web",
      title: "Facilitateur capitalisation technique web",
      tasks: [
        "Création des ateliers de développement",
        "Déroulement des ateliers techniques",
      ],
      tags: [
        "html5",
        "css",
        "sass",
        "javascript",
        "angularjs",
        "nodejs",
        "express",
        "mongodb",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "Ippon technologies",
      dateBegin: "2012-07-01",
      dateEnd: "2013-09-30",
      place: "Nantes",
      title: "Chef de projet technique",
      description:
        "Chef de projet technique pour la refonte de 2 CMS sous une approche RWD",
      tasks: [
        "Facilitation et mise en place d'ateliers de conception ergonomique RWD",
        "Rédaction des spécifications fonctionnelles",
        "Développement HTML, CSS, JavaScript",
      ],
      tags: [
        "wordpress",
        "html5",
        "css",
        "sass",
        "javascript",
        "nodejs",
        "grunt",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "Alljudo",
      dateBegin: "2012-04-01",
      dateEnd: "2012-10-31",
      place: "Nantes",
      title: "Chef de projet technique",
      description:
        "Chef de projet technique d'une application mobile hybride d'actualités multimédia sur le judo pour smartphones et tablettes Android et iOS, données administrées par un back-office avec une IHM Web",
      tasks: [
        "Rédaction des spécifications fonctionnelles",
        "Développement web (HTML, CSS, JavaScript) pour les applications hybrides (PhoneGap) et pour l’interface back-office (web Java EE)",
        "Mise en place des canaux de distribution",
      ],
      tags: [
        "phonegap",
        "html5",
        "css",
        "sass",
        "javascript",
        "knockoutjs",
        "javaee",
        "tomcat",
        "mysql",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "DGFiP (Direction Générale des Finances Publiques)",
      dateBegin: "2010-07-01",
      dateEnd: "2012-02-29",
      place: "Nantes",
      title: "Responsable d’applications Java EE",
      description:
        "Responsable d’applications dans une TMA pour un ensemble d’applications liées à la déclaration des taxes pour les entreprises",
      tasks: [
        "Analyses d’impact sur les nouvelles demandes métier",
        "Rédaction des définitions de commande appropriées dans le cadre d’un CCTP",
        "Estimation des évolutions souhaitées, conception, mise en oeuvre et suivi des plannings de tests",
        "Organisation des déploiements, des recettes internes, des livraisons client et suivi des anomalies",
        "Encadrement des développeurs et suivi des avancements",
      ],
      tags: ["jboss", "hibernate", "struts", "oracle", "sqldeveloper"],
      repository: null,
      downloads: null,
    },

    {
      company: "Orange Business Service",
      dateBegin: "2010-05-01",
      dateEnd: "2010-07-31",
      place: "Nantes",
      title: "Développeur Java EE",
      description:
        "Ingénieur études et développement web Java EE dans le cadre d’un projet au forfait, pour une application d’adhésion en ligne dans le cadre des activités de La Poste",
      tasks: [
        "Réalisation de développements web / Java EE",
        "Partage des spécifications / fonctionnalités attendues avec les autres développeurs",
      ],
      tags: ["websphere", "spring", "hibernate", "struts", "oracle"],
      repository: null,
      downloads: null,
    },

    {
      company:
        "CNAMTS (Caisse Nationale de l'Assurance Maladie des Travailleurs Salariés)",
      dateBegin: "2008-01-01",
      dateEnd: "2010-04-01",
      place: "Angers",
      title: "Responsable d’applications Java EE",
      description:
        "Ingénieur études et développement web Java EE puis responsable d’applications dans le cadre du portail Ameli pour les professionnels de santé",
      tasks: [
        "Encadrement opérationnel d’une équipe de 4 personnes",
        "Recueil des besoins métiers et rédaction des spécifications fonctionnelles",
        "Conception UML et du MCD pour la base de données",
        "Réalisation des développements et support technique",
        "Reporting des avancements des évolutions sur des jalons",
        "Préparation des plans de tests et homologation des évolutions",
        "Suivi des anomalies",
        "Suivi technique de la migration du portail existant Oracle Portal vers la solution Weblogic portal",
      ],
      tags: [
        "oracleportal",
        "weblogicportal",
        "ant",
        "struts",
        "oracle",
        "toad",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "GIE Sesam-Vitale",
      dateBegin: "2007-06-01",
      dateEnd: "2007-12-01",
      place: "Le Mans",
      title: "Développeur Java EE",
      description:
        "Ingénieur études et développement web Java EE pour la réalisation d’un module de facturation avec réception des factures et affichage des résultats",
      tasks: [
        "Rédaction des spécifications techniques du module de facturation",
        "Conception UML et du MCD pour la base de données",
        "Réalisation des développements avec réception des factures (files JMS) et affichage des résultats via une application web Java EE",
      ],
      tags: [
        "javaee",
        "tomcat",
        "weblogic",
        "ant",
        "struts",
        "junit",
        "log4j",
        "sqldeveloper",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "Ippon technologies",
      dateBegin: "2007-01-01",
      dateEnd: "2007-05-01",
      place: "Nantes",
      title: "Développeur Java EE",
      description:
        "Ingénieur études et développement web Java EE pour la réalisation de portlets de gestion de ressources avec géolocalisation Google Map",
      tasks: [
        "Recueil de besoins métiers dans un portail d’entreprise existant (Intranet)",
        "Réalisation des développements des portlets au sein du portail existant",
      ],
      tags: [
        "liferay",
        "spring",
        "hibernate",
        "struts",
        "ant",
        "mysql",
        "easyphp",
      ],
      repository: null,
      downloads: null,
    },

    {
      company: "Studio Canal",
      dateBegin: "2005-09-01",
      dateEnd: "2006-09-01",
      place: "Paris",
      title: "Développeur Java EE",
      description:
        "Ingénieur études et développement web Java EE pour la réalisation d’un module de gestion de royalties pour les utilisateurs internes Studio Canal dans une application Intranet",
      tasks: [
        "Conception du MCD pour la réalisation d’une application Internet de vente de matériel cinématographique",
        "Développement d’une interface de vente front-office et d’une interface de gestion back-office",
      ],
      tags: ["javaee", "websphere", "struts", "oracle", "toad"],
      repository: null,
      downloads: null,
    },

    {
      company: "1001 Listes",
      dateBegin: "2005-05-01",
      dateEnd: "2005-08-01",
      place: "Paris",
      title: "Développeur Java EE",
      description:
        "Ingénieur études et développement web Java EE pour la réalisation d’un module de gestion de prospects",
      tasks: [
        "Recueil des besoins métiers pour les utilisateurs internes",
        "Rédaction des spécifications techniques détaillées",
        "Réalisation des développements web Java EE",
      ],
      tags: ["javaee", "resin", "hibernate", "sybase"],
      repository: null,
      downloads: null,
    },

    {
      company: "INPN (Inventaire National du Patrimoine Naturel)",
      dateBegin: "2005-01-01",
      dateEnd: "2005-04-01",
      place: "Paris",
      title: "Chargé de projet",
      description:
        "Chargé de projet pour la réalisation d’une application back-office de gestion de droits et trafic de visite",
      tasks: [
        "Recueil de besoins métiers de l’application",
        "Rédaction des spécifications techniques (avec UML et MCD) et fonctionnelles détaillées",
        "Réalisation des développements web Java EE",
        "Préparation du plan de tests et homologation",
      ],
      tags: ["javaee", "tomcat", "struts", "ant", "oracle", "toad"],
      repository: null,
      downloads: null,
    },

    {
      company: "MNHN (Muséum National d’Histoire Naturelle)",
      dateBegin: "2004-10-01",
      dateEnd: "2004-12-01",
      place: "Paris",
      title: "Développeur Java EE",
      description:
        "Ingénieur études et développement web Java EE pour implémenter un moteur de recherche sur un portail",
      tasks: [
        "Réalisation du développement web Java EE",
        "Réalisation des développements XML et XSLT pour implémenter un moteur de recherche externe et XML et XSL/FO pour créer des fichiers binaires",
      ],
      tags: ["javaee", "tomcat", "struts", "xml", "xsl", "oracle"],
      repository: null,
      downloads: null,
    },

    {
      company: "Nexans",
      dateBegin: "2004-02-01",
      dateEnd: "2004-08-01",
      place: "Paris",
      title: "Chargé de projet",
      description:
        "Chargé de projet pour la réalisation d’un module de gestion de brevets dans une application Intranet",
      tasks: [
        "Recueil de besoins métiers de l’application",
        "Rédaction des spécifications techniques (avec UML et MCD) et fonctionnelles détaillées",
        "Réalisation des développements web Java EE",
      ],
      tags: ["javaee", "tomcat", "ant", "oracle", "toad"],
      repository: null,
      downloads: null,
    },
  ]

  return experiences
}

const getExperiences = () =>
  getContent().map((experience) => mapExperience(experience, levels))

module.exports = {
  getExperiences,
}
