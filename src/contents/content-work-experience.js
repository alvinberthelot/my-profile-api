const getContent = () => {
  const content = {
    title: "Expériences",
    description: "",
    missions: [
      {
        company: "CBP",
        dateBegin: "23-04-2018",
        dateEnd: null,
        place: "Nantes",
        title: "Encadrement et développement Angular",
        description:
          "Expert technique Angular au sein de l'équipe CBP pour la mise en place d'une architecture front-end avec encadrement de l'équipe interne pour une montée en compétences",
        tasks: [
          "Mise en place de l'architecture front-end Angular",
          "Encadrement technique de l'équipe interne",
          "Mise en place de l'outillage et de l'industrialisation",
        ],
        tags: [
          "TypeScript",
          "Angular",
          "ngRx",
          "ngBootstrap",
          "Node.js",
          "HTML5",
          "CSS3",
          "Sass",
          "Travis",
          "Git",
        ],
        repository: null,
        downloads: null,
      },
    ],
  }
  return content
}

module.exports = {
  getWorkExperience: getContent,
}
