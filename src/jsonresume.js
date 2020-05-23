const { getBasics } = require("./contents/content-basics")
const { getCompany } = require("./contents/content-company")

const basics = getBasics()
const company = getCompany()

exports.handler = (event, context, callback) => {
  content = {
    basics: {
      name: `${basics.firstname} ${basics.lastname}`,
      label: "Programmer",
      picture: "",
      email: company.email,
      phone: "(912) 555-4321",
      website: basics.website,
      summary: "A summary of John Doe...",
      location: {
        address: company.address.street,
        postalCode: company.address.postcode,
        city: company.address.locality,
        countryCode: company.address.countryCode,
        region: null,
      },
      profiles: basics.profiles,
    },
    work: [
      {
        company: "Company",
        position: "President",
        website: "http://company.com",
        startDate: "2013-01-01",
        endDate: "2014-01-01",
        summary: "Description...",
        highlights: ["Started the company"],
      },
    ],
    volunteer: [],
    education: [
      {
        institution: "University",
        area: "Software Development",
        studyType: "Bachelor",
        startDate: "2011-01-01",
        endDate: "2013-01-01",
        gpa: "4.0",
        courses: ["DB1101 - Basic SQL"],
      },
    ],
    awards: [],
    publications: [],
    skills: [
      {
        name: "Web Development",
        level: "Master",
        keywords: ["HTML", "CSS", "Javascript"],
      },
    ],
    languages: [
      {
        language: "French",
        fluency: "Native speaker",
      },
      {
        language: "English",
        fluency: "Fluent",
      },
    ],
    interests: [
      {
        name: "Sports",
        keywords: ["Ju-Jitsu", "Running"],
      },
    ],
    references: [],
  }
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(content),
  })
}
