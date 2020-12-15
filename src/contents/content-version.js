const MAJOR = 1
const MINOR = 1
const PATCH = 0

const getContent = () => {
  return `${MAJOR}.${MINOR}.${PATCH}`
}

module.exports = {
  getVersion: getContent,
}
