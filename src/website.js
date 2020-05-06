const { getVersion } = require("./contents/content-version")
const { getSkills } = require("./contents/content-skills")
const { getTechnicalSkills } = require("./contents/content-technical-skills")
const { getEducation } = require("./contents/content-education")
const { getWorkExperience } = require("./contents/content-work-experience")
const { getEvents } = require("./contents/content-events")

exports.handler = (event, context, callback) => {
  content = {
    version: getVersion(),
    firstname: "Alvin",
    lastname: "Berthelot",
    skillsSection: getSkills(),
    technicalSkillsSection: getTechnicalSkills(),
    educationSection: getEducation(),
    workExperienceSection: getWorkExperience(),
    eventsSection: getEvents(),
  }
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(content),
  })
}
