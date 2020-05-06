const events = {
  dotjs: {
    title: "DotJS",
    website: "https://www.dotjs.io",
  },
  dotcss: {
    title: "DotCSS",
    website: "https://www.dotcss.io",
  },
  helloworld: {
    title: "Hello World",
    website: "https://hello-world-conference.github.io/",
  },
  parisweb: {
    title: "Paris Web",
    website: "http://www.paris-web.fr",
  },
  devfest: {
    title: "DevFest Nantes",
    website: "https://devfest.gdgnantes.com",
  },
  web2day: {
    title: "Web2Day",
    website: "http://web2day.co",
  },
  agiletournantes: {
    title: "Agile Tour Nantes",
    website: "http://www.agilenantes.org",
  },
  bestofweb: {
    title: "Best of Web",
    website: "http://bestofweb.paris",
  },
  ngeurope: {
    title: "ng-europe",
    website: "https://ngeurope.org",
  },
  flupauxday: {
    title: "FLUPA UX Day",
    website: "http://uxday.flupa.eu",
  },
  scrumday: {
    title: "ScrumDay",
    website: "http://scrumday.fr",
  },
  breizhcamp: {
    title: "BreizhCamp",
    website: "http://www.breizhcamp.org",
  },
  nantesjs: {
    title: "NantesJS",
    website: "http://nantesjs.org",
  },
  devoxx: {
    title: "Devoxx France",
    website: "http://www.devoxx.fr",
  },
  sudweb: {
    title: "Sud Web",
    website: "http://sudweb.fr",
  },
  jugsummercamp: {
    title: "JUG SummerCamp",
    website: "http://www.jugsummercamp.org",
  },
  lego4scrum: {
    title: "Lego4Scrum",
  },
}

const sessions = {
  ideatomarket: {
    title: "De l'idée au marché ... ou pas !",
  },
  functionalfornewbies: {
    title: "La programmation fonctionnelle (en JavaScript) pour les nuls",
  },
  letssketchtogether: {
    title: "Let's sketch together",
  },
  jstests: {
    title: "Les tests en JavaScript",
  },
  phaserjs: {
    title: "Réaliser un jeu avec PhaserJS",
  },
  bootstrass: {
    title: "Sass, pratique toute de suite",
  },
  diywebgame: {
    title: "DIY une console de jeux web",
  },
  goodtoolscss: {
    title: "Les bons outils CSS font les bons ouvriers du web",
  },
  agilemobile: {
    title: "L'agilité dans la mobilité",
  },
}

const getContent = () => {
  const content = {
    title: "Conférences",
    description: "",
    events: [
      {
        ...events.dotjs,
        date: "05-12-2019",
      },
      {
        ...events.dotcss,
        date: "04-12-2019",
      },
      {
        ...events.helloworld,
        date: "15-11-2019",
        organizer: true,
      },
      {
        ...events.devfest,
        date: "21-10-2019",
      },
      {
        ...events.parisweb,
        date: "10-10-2019",
      },
      {
        ...events.helloworld,
        date: "28-06-2019",
        organizer: true,
      },
      {
        ...events.web2day,
        date: "05-06-2019",
      },
      {
        ...events.agiletournantes,
        date: "08-11-2018",
        session: sessions.ideatomarket,
      },
      {
        ...events.devfest,
        date: "18-10-2018",
      },
      {
        ...events.bestofweb,
        date: "08-06-2018",
      },
      {
        ...events.ngeurope,
        date: "01-02-2018",
      },
      {
        ...events.dotjs,
        date: "01-12-2017",
      },
      {
        ...events.dotcss,
        date: "30-11-2017",
      },
      {
        title: "BDX I/O",
        date: "10-11-2017",
        website: "https://www.bdx.io",
      },
      {
        ...events.devfest,
        date: "19-10-2017",
      },
      {
        ...events.parisweb,
        date: "05-10-2017",
      },
      {
        title: "FullStack",
        date: "11-07-2017",
        website:
          "https://skillsmatter.com/conferences/8264-fullstack-2017-the-conference-on-javascript-node-and-internet-of-things",
      },
      {
        ...events.flupauxday,
        date: "08-06-2017",
      },
      {
        ...events.web2day,
        date: "07-06-2017",
        session: sessions.functionalfornewbies,
      },
      {
        title: "Agile Vendée",
        date: "02-06-2017",
        session: sessions.letssketchtogether,
        website: "http://agilevendee.org",
      },
      {
        ...events.nantesjs,
        date: "20-04-2017",
        session: sessions.jstests,
      },
      {
        ...events.dotjs,
        date: "05-12-2016",
      },
      {
        ...events.dotcss,
        date: "02-12-2016",
      },
      {
        ...events.devfest,
        date: "09-11-2016",
      },
      {
        ...events.ngeurope,
        date: "24-10-2016",
      },
      {
        ...events.agiletournantes,
        date: "13-10-2016",
      },
      {
        ...events.parisweb,
        date: "29-09-2016",
        session: sessions.phaserjs,
      },
      {
        ...events.web2day,
        date: "15-06-2016",
      },
      {
        title: "nCrafts",
        date: "12-05-2016",
        website: "http://ncrafts.io/",
      },
      {
        title: "Craft",
        date: "26-04-2016",
        website: "http://craft-conf.com",
      },
      {
        ...events.nantesjs,
        date: "07-04-2016",
        session: sessions.phaserjs,
      },
      {
        ...events.breizhcamp,
        date: "23-03-2016",
        session: sessions.bootstrass,
      },
      {
        ...events.dotjs,
        date: "07-12-2015",
      },
      {
        ...events.dotcss,
        date: "04-12-2015",
      },
      {
        ...events.devfest,
        date: "06-11-2015",
      },
      {
        title: "Blend Web Mix",
        date: "28-10-2015",
        website: "http://www.blendwebmix.com",
      },
      {
        ...events.parisweb,
        date: "01-10-2015",
        session: sessions.diywebgame,
      },
      {
        ...events.breizhcamp,
        date: "10-06-2015",
        session: sessions.goodtoolscss,
      },
      {
        ...events.web2day,
        date: "03-06-2015",
      },
      {
        ...events.sudweb,
        date: "28-05-2015",
      },
      {
        ...events.devoxx,
        date: "08-04-2015",
        session: sessions.letssketchtogether,
      },
      {
        ...events.agiletournantes,
        date: "27-11-2014",
        organizer: true,
      },
      {
        ...events.parisweb,
        date: "16-10-2014",
        session: sessions.letssketchtogether,
      },
      {
        title: "Agile Tour Rennes",
        date: "09-10-2014",
        website: "http://agiletour.agilerennes.org",
      },
      {
        ...events.flupauxday,
        date: "19-09-2014",
        session: sessions.letssketchtogether,
      },
      {
        ...events.web2day,
        date: "04-06-2014",
        session: sessions.letssketchtogether,
      },
      {
        title: "Agile France",
        date: "22-05-2014",
        session: sessions.letssketchtogether,
        website: "http://2015.conference-agile.fr",
      },
      {
        ...events.sudweb,
        date: "16-05-2014",
        session: sessions.letssketchtogether,
      },
      {
        ...events.scrumday,
        date: "09-04-2014",
        session: sessions.letssketchtogether,
      },
      {
        ...events.agiletournantes,
        date: "14-11-2013",
        organizer: true,
        session: sessions.letssketchtogether,
      },
      {
        ...events.devfest,
        date: "08-11-2013",
      },
      {
        title: "Agile Tour Vannes",
        date: "07-11-2013",
        session: sessions.letssketchtogether,
      },
      {
        ...events.parisweb,
        date: "10-10-2013",
      },
      {
        ...events.jugsummercamp,
        date: "20-09-2013",
      },
      {
        ...events.flupauxday,
        date: "14-06-2013",
      },
      {
        ...events.breizhcamp,
        date: "13-06-2013",
      },
      {
        ...events.web2day,
        date: "16-05-2013",
      },
      {
        title: "MIX-IT",
        date: "25-04-2013",
        website: "http://www.mix-it.fr",
      },
      {
        ...events.scrumday,
        date: "11-04-2013",
        session: sessions.agilemobile,
      },
      {
        ...events.agiletournantes,
        date: "15-11-2012",
        organizer: true,
        session: sessions.agilemobile,
      },
      {
        ...events.parisweb,
        date: "18-10-2012",
      },
      {
        ...events.jugsummercamp,
        date: "14-09-2012",
      },
      {
        ...events.devoxx,
        date: "18-04-2012",
      },
      {
        ...events.scrumday,
        date: "27-03-2012",
        session: sessions.lego4scrum,
      },
      {
        ...events.agiletournantes,
        date: "13-04-2011",
        organizer: true,
      },
    ],
  }
  return content
}

module.exports = {
  getEvents: getContent,
}
