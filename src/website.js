const { getFull } = require("./contents/content-full")

exports.handler = (event, context, callback) => {
  const content = getFull()
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(content),
  })
}
