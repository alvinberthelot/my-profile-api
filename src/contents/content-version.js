const MAJOR = 0
const MINOR = 0
const PATCH = 1

const getContent = () => {
  return `${MAJOR}.${MINOR}.${PATCH}`
}

module.exports = {
  getVersion: getContent,
}
