const MAJOR = 2
const MINOR = 1
const PATCH = 2

const getContent = () => {
  return `${MAJOR}.${MINOR}.${PATCH}`
}

module.exports = {
  getVersion: getContent,
}
