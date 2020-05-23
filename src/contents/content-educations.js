const getContent = () => {
  const content = [
    {
      title: "Formation continue en anglais",
      date: "01-01-2020",
      tags: [],
    },
    {
      title: "Formation Node.js avancé",
      date: "17-09-2019",
      tags: ["web", "nodejs", "javascript", "frontend", "backend"],
    },
    {
      title: "Formation continue en anglais",
      date: "01-01-2019",
      tags: [],
    },
    {
      title: "Formation DDD (Domain Driven Design)",
      date: "03-12-2018",
      tags: ["ddd"],
    },
    {
      title: "Formation Angular avancé",
      date: "25-10-2018",
      tags: ["web", "angular", "javascript", "typescript", "frontend"],
    },
    {
      title: "Formation webpack",
      date: "21-02-2018",
      tags: [
        "web",
        "webpack",
        "javascript",
        "typescript",
        "frontend",
        "backend",
        "industrialization",
      ],
    },
    {
      title: "Formation GraphQL",
      date: "16-11-2017",
      tags: ["web", "api", "javascript", "frontend", "backend"],
    },
    {
      title: "Formation Machine Learning",
      date: "08-11-2017",
      tags: ["ml", "python", "backend"],
    },
    {
      title: "Formation sécurité pour les applications web",
      date: "09-10-2017",
      tags: ["web", "security", "frontend", "backend"],
    },
    {
      title: "Formation Docker",
      date: "21-11-2016",
      tags: ["docker", "industrialization"],
    },
    {
      title: "Formation Angular",
      date: "19-09-2016",
      tags: ["web", "angular", "javascript", "typescript", "frontend"],
    },
    {
      title: "Formation Git",
      date: "27-01-2016",
      tags: ["git", "industrialization"],
    },
    {
      title: "Certifié Developer Android Apps",
      date: "01-01-2015",
      tags: ["java", "android"],
    },
    {
      title: "Certifié ScrumMaster",
      date: "01-01-2010",
      tags: ["agile", "scrum"],
    },
    {
      title: "Certifié Sun Developer Web Component 1.4",
      date: "01-01-2006",
      tags: ["java", "backend"],
    },
    {
      title: "Certifié Sun Programmer Java 1.4",
      date: "01-01-2004",
      tags: ["java", "backend"],
    },
    {
      title: "DESS MAI(Mathématiques Appliquées à l’Informatique)",
      date: "01-01-2004",
      tags: [],
    },
    {
      title:
        "Diplôme IMA(Institut de Mathématiques Appliquées) homologué de niveau 1, reconnu niveau ingénieur",
      date: "01-01-2004",
      tags: [],
    },
  ]
  return content
}

module.exports = {
  getEducations: getContent,
}
