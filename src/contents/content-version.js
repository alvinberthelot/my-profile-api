const MAJOR = 2
const MINOR = 2
const PATCH = 5

const getContent = () => {
  return `${MAJOR}.${MINOR}.${PATCH}`
}

module.exports = {
  getVersion: getContent,
}
