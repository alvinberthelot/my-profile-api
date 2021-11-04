const MAJOR = 2
const MINOR = 2
const PATCH = 4

const getContent = () => {
  return `${MAJOR}.${MINOR}.${PATCH}`
}

module.exports = {
  getVersion: getContent,
}
