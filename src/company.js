const { getCompany } = require("./contents/content-company")

exports.handler = (event, context, callback) => {
  content = getCompany()
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(content),
  })
}
