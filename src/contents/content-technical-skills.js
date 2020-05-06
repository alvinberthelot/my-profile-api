const getContent = () => {
  const content = {
    title: "Environnements techniques",
    description:
      "Des connaissances larges sur les principales technologies autour de l'industrialisation web.",
    aggregates: [
      {
        title: "front-end",
        stacks: [
          {
            title: "Web",
            substacks: [
              {
                title: "HTML",
                knowledges: ["HTML5", "Adaptive web design"],
              },
            ],
          },
        ],
      },
    ],
  }
  return content
}

module.exports = {
  getTechnicalSkills: getContent,
}
