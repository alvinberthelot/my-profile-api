const getContent = () => {
  const content = {
    title: "Compétences",
    description:
      "En tant que freelance, je peux proposer mes services pour des postes tels que CTO, engineering manager, consultant, formateur et tech lead / développeur senior pour des environnements techniques à tendance web et mobile.",
    skills: [
      {
        title: "Tech lead front-end",
        period: "De 2018 à 2023",
        subskills: [
          "Encadrement technique et animation d'une équipe de développeur·euse·s avec montée en compétences de l'équipe",
          "Contribution à la rédaction des US, communication et priorisation des futurs développements et suivi des avancées",
          "Définition de l'architecture, industrialisation et mise en place des process qualité",
        ],
      },
      {
        title: "Formateur",
        period: "De 2016 à 2018",
        subskills: [
          "Conception des supports pédagogiques et des ateliers",
          "Interventions théoriques et pratiques auprès des apprenant·e·s",
        ],
      },
      {
        title: "Chef de projet technique",
        period: "De 2012 à 2016",
        subskills: [
          "Développeur front-end sénior",
          "Conseil et sensibilisation sur les applications mobiles en avant vente",
          "Rédaction de spécifications techniques ou fonctionnelles",
          "Animation d'ateliers pour une capitalisation technique web",
        ],
      },
      {
        title: "Ingénieur Java EE & Resp. d'applications",
        period: "De 2004 à 2012",
        subskills: [
          "Études et développement dans des stacks techniques Java EE",
          "Recueil des besoins métier et analyses d'impact",
          "Préparation des plans de tests et recettes des évolutions",
        ],
      },
    ],
  }
  return content
}

module.exports = {
  getSkills: getContent,
}
