const MAJOR = 1
const MINOR = 1
const PATCH = 1

const getContent = () => {
  return `${MAJOR}.${MINOR}.${PATCH}`
}

module.exports = {
  getVersion: getContent,
}
