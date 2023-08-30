const MAJOR = 2
const MINOR = 4
const PATCH = 3

const getContent = () => {
  return `${MAJOR}.${MINOR}.${PATCH}`
}

module.exports = {
  getVersion: getContent,
}
