exports.handler = (event, context, callback) => {
  content = {
    name: "Webyousoon",
    legalName: "Webyousoon SARL",
    address: {
      street: "61 avenue Lt Lavenne Montoise",
      postcode: "44000",
      locality: "Nantes",
      country: "France",
    },
    email: "contact@webyousoon.com",
    phone: "0642135213",
    website: "webyousoon.com",
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
  }
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(content),
  })
}
