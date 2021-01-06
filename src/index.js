const { getTechnicalSkills } = require("./contents/content-technical-skills")
const { getExperiences } = require("./contents/experiences.content")

const test = getExperiences()

console.log("test", JSON.stringify(test))
