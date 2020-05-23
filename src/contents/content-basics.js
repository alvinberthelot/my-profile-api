const getContent = () => {
  const content = {
    firstname: "Alvin",
    lastname: "Berthelot",
    website: "https://www.webyousoon.com/alvin-berthelot.html",
    profiles: [
      {
        network: "GitHub",
        username: "alvinberthelot",
        url: "https://github.com/alvinberthelot",
      },
      {
        network: "Twitter",
        username: "alvinberthelot",
        url: "https://twitter.com/alvinberthelot",
      },
    ],
  }
  return content
}

module.exports = {
  getBasics: getContent,
}
