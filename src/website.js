const { getVersion } = require("./contents/content-version")

exports.handler = (event, context, callback) => {
  content = {
    version: getVersion(),
  }
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(content),
  })
}
