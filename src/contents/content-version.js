const MAJOR = 2
const MINOR = 3
const PATCH = 0

const getContent = () => {
  return `${MAJOR}.${MINOR}.${PATCH}`
}

module.exports = {
  getVersion: getContent,
}
