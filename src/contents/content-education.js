const getContent = () => {
  const content = {
    title: "Formations",
    description: "Mon objectif c'est de faire au minimum 2 formations par an.",
    years: [
      {
        title: "2019",
        educations: ["tutu", "titi"],
      },
    ],
  }
  return content
}

module.exports = {
  getEducation: getContent,
}
