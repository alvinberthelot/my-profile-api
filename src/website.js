const { getVersion } = require("./contents/content-version")
const { getSkills } = require("./contents/content-skills")
const { getTechnicalSkills } = require("./contents/content-technical-skills")
const { getEducations } = require("./contents/content-educations")
const { getWorkExperiences } = require("./contents/content-work-experiences")
const { getEvents } = require("./contents/content-events")

exports.handler = (event, context, callback) => {
  content = {
    version: getVersion(),
    firstname: "Alvin",
    lastname: "Berthelot",
    skillsSection: getSkills(),
    technicalSkillsSection: getTechnicalSkills(),
    educationSection: {
      title: "Formations",
      description:
        "Mon objectif c'est de faire au minimum 2 formations par an.",
      educations: getEducations(),
    },
    workExperienceSection: {
      title: "Expériences",
      description: "",
      experiences: getWorkExperiences(),
    },
    eventsSection: getEvents(),
  }
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(content),
  })
}
