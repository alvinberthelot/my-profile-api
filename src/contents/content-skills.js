const getContent = () => {
  const content = {
    title: "Compétences",
    description:
      "Contactez-moi si vous avez un projet, un besoin de renfort dans votre équipe ou une demande de formation en lien avec mes compétences.",
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
        title: "Consultant et formateur",
        subskills: [
          "Conseil sur les choix technologiques et fonctionnels pour la réalisation d'applications web et mobiles",
          "Facilitation et mise en place d'ateliers de conception",
          "Intervenant pour des écoles et entreprises pour dispenser des formations",
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
