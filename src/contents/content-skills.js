const getContent = () => {
  const content = {
    title: "Compétences",
    description:
      "Je propose des services dans toutes les étapes clés pour réaliser des applications web et mobiles de qualité.",
    skills: [
      {
        title: "Tech lead / développeur sénior",
        subskills: [
          "Encadrement technique et développement front-end (HTML, CSS, JavaScript)",
          "Développement back-end (API, Node.js, Java EE)",
          "Développement mobile (natif Android et applications hybrides)",
        ],
      },
      {
        title: "Consultant",
        subskills: [
          "Conseil sur les choix technologiques et fonctionnels pour la réalisation d'applications web et mobiles",
          "Facilitation et mise en place d'ateliers de conception",
        ],
      },
      {
        title: "Chef de projet technique",
        subskills: [
          "Rédaction de spécifications techniques ou fonctionnelles",
          "Encadrement et animation d'une équipe de développeurs",
          "Communication et priorisation des différentes phases",
        ],
      },
    ],
  }
  return content
}

module.exports = {
  getSkills: getContent,
}
