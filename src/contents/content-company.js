const getContent = () => {
  const content = {
    name: "Webyousoon",
    legalName: "SARL Webyousoon",
    address: {
      street: "61 avenue Lt Lavenne Montoise",
      postcode: "44000",
      locality: "Nantes",
      country: "France",
      countryCode: "FR",
    },
    email: "contact@webyousoon.com",
    phone: "0642135213",
    website: {
      tinyUrl: "webyousoon.com",
      completeUrl: "https://www.webyousoon.com",
    },
    siren: "814553053",
    tva: "FR57814553053",
    rcs: "Nantes 814 553 053",
    account: {
      owner: "Webyousoon",
      bank: {
        name: "CIC Nantes Rond Point de Paris",
        code: "30047",
      },
      number: "00020875001",
      iban: "FR7630047140480002087500114",
      bic: "CMCIFRPP",
    },
    description:
      "Agence web nantaise pour concevoir, réaliser et mettre en service vos applications web et mobiles.",
    keywords: [
      "agence web",
      "web agency",
      "site web",
      "site internet",
      "site mobile",
      "responsive web design",
      "rwd",
      "smartphone",
      "tablet",
      "tablette",
      "html",
      "CSS",
      "JavaScript",
      "application mobile",
      "iOS",
      "application iPhone",
      "application iPad",
      "appstore",
      "app store",
      "Android",
      "application Android",
      "android market",
      "google play",
      "développement mobile",
      "Webyousoon",
      "webyousoon",
      "Nantes",
      "Loire - Atlantique",
      "Pays de la Loire",
    ],
  }
  return content
}

module.exports = {
  getCompany: getContent,
}
