const MAJOR = 2
const MINOR = 4
const PATCH = 1

const getContent = () => {
  return `${MAJOR}.${MINOR}.${PATCH}`
}

module.exports = {
  getVersion: getContent,
}
