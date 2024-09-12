const MAJOR = 2
const MINOR = 5
const PATCH = 2

const getContent = () => {
  return `${MAJOR}.${MINOR}.${PATCH}`
}

module.exports = {
  getVersion: getContent,
}
