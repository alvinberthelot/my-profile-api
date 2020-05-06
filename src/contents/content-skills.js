const getContent = () => {
  const content = {
    title: "Compétences",
    description:
      "Je propose des services dans toutes les étapes clés pour réaliser des applications web et mobiles de qualité.",
    skills: [
      {
        title: "Tech lead / développeur senior",
        subskills: [
          "Encadrement technique",
          "Développement front-end",
          "Développement back-end",
        ],
      },
    ],
  }
  return content
}

module.exports = {
  getSkills: getContent,
}
