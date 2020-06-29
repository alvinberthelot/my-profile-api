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
    website: "https://www.hello-world.events/",
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
    website: "https://uxdays.eu",
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
  agilemobile: {
    title: "L'agilité dans la mobilité",
    type: "conference",
  },
  bootstrass: {
    title: "Sass, pratique toute de suite",
    type: "workshop",
    description: `
      Sass est devenu en peu de temps le pré-processeur CSS le plus populaire parmi les webdesigners et les développeurs front-end.
      Rien d’étonnant à cela lorsque l’on voit ses fonctionnalités et son écosystème qui permettent de faciliter grandement le développement et la maintenance de feuilles de styles CSS.
      Vous ne l’utilisez pas encore ?! Ou vous n’utilisez que les notions élémentaires …
      Plus pour longtemps, car cet atelier vous apprendra à utiliser Sass, de manière progressive, pour tirer pleinement profit de ses possibilités.
    `,
    toOrganizers: `
      Une initiation step by step du pré-processeur Sass de "je ne sais pas ce que c'est" à "je vais pouvoir l'utiliser demain au boulot sans soucis".
      Bref l'initiation accélérée que j'aurai aimé avoir, plutôt que de faire la veille tout seul dans mon coin.
    `,
    resources: [
      {
        url:
          "https://www.webyousoon.com/resources/bootstrass/Sass, pratique tout de suite.pdf",
        type: "pdf",
      },
    ],
  },
  diywebgame: {
    title: "DIY une console de jeux web",
    type: "conference",
  },
  functionalfornewbies: {
    title: "La programmation fonctionnelle (en JavaScript) pour les nuls",
    type: "workshop",
  },
  goodtoolscss: {
    title: "Les bons outils CSS font les bons ouvriers du web",
    type: "conference",
    description: `
      Le CSS est un pilier de la programmation Web et son intérêt n’est plus à justifier. Pourtant il ne suscite pas franchement l’enthousiasme parmi de nombreux développeurs. Cela se traduit généralement par des développements “à défaut” pour en arriver à des feuilles de styles chaotiques lors de la maintenance.
      Dans cette session, voyons pourquoi il est temps de s’y intéresser sérieusement et surtout comment reprendre le contrôle d’une production CSS de qualité et maîtrisée grâce à un outillage adapté.
    `,
  },
  ideatomarket: {
    title: "De l'idée au marché ... ou pas !",
    type: "conference",
    resources: [
      {
        url:
          "https://www.webyousoon.com/resources/ideatomarket/De l'idée au marché ... ou pas !.V1.pdf",
        type: "pdf",
      },
    ],
  },
  jstests: {
    title: "Les tests en JavaScript",
    type: "conference",
    resources: [
      {
        url: "https://www.webyousoon.com/resources/jstests/js-testing.pdf",
        type: "pdf",
      },
    ],
  },
  letssketchtogether: {
    title: "Let's sketch together",
    type: "workshop",
    resources: [
      {
        url:
          "https://www.webyousoon.com/resources/letssketchtogether/Let's sketch together.pdf",
        type: "pdf",
      },
    ],
  },
  phaserjs: {
    title: "Réaliser un jeu avec PhaserJS",
    type: "workshop",
    resources: [
      {
        url: "https://www.webyousoon.com/resources/phaserjs/Phaser.pdf",
        type: "pdf",
      },
    ],
  },
}

const getContent = () => {
  const content = {
    title: "Conférences",
    description: "",
    events: [
      {
        ...events.helloworld,
        date: "2020-05-07",
        organizer: true,
      },
      {
        ...events.dotjs,
        date: "2019-12-05",
      },
      {
        ...events.dotcss,
        date: "2019-12-04",
      },
      {
        ...events.helloworld,
        date: "2019-11-15",
        organizer: true,
      },
      {
        ...events.devfest,
        date: "2019-10-21",
      },
      {
        ...events.parisweb,
        date: "2019-10-10",
      },
      {
        ...events.helloworld,
        date: "2019-06-28",
        organizer: true,
      },
      {
        ...events.web2day,
        date: "2019-06-05",
      },
      {
        ...events.agiletournantes,
        date: "2018-11-08",
        session: sessions.ideatomarket,
      },
      {
        ...events.devfest,
        date: "2018-10-18",
      },
      {
        ...events.bestofweb,
        date: "2018-06-08",
      },
      {
        ...events.ngeurope,
        date: "2018-02-01",
      },
      {
        ...events.dotjs,
        date: "2017-12-01",
      },
      {
        ...events.dotcss,
        date: "2017-11-30",
      },
      {
        title: "BDX I/O",
        date: "2017-11-10",
        website: "https://www.bdx.io",
      },
      {
        ...events.devfest,
        date: "2017-10-19",
      },
      {
        ...events.parisweb,
        date: "2017-10-05",
      },
      {
        title: "FullStack",
        date: "2017-07-11",
        website:
          "https://skillsmatter.com/conferences/8264-fullstack-2017-the-conference-on-javascript-node-and-internet-of-things",
      },
      {
        ...events.flupauxday,
        date: "2017-06-08",
      },
      {
        ...events.web2day,
        date: "2017-06-07",
        session: sessions.functionalfornewbies,
      },
      {
        title: "Agile Vendée",
        date: "2017-06-02",
        session: sessions.letssketchtogether,
        website: "http://agilevendee.org",
      },
      {
        ...events.nantesjs,
        date: "2017-04-20",
        session: sessions.jstests,
      },
      {
        ...events.dotjs,
        date: "2016-12-05",
      },
      {
        ...events.dotcss,
        date: "2016-12-02",
      },
      {
        ...events.devfest,
        date: "2016-11-09",
      },
      {
        ...events.ngeurope,
        date: "2016-10-24",
      },
      {
        ...events.agiletournantes,
        date: "2016-10-13",
      },
      {
        ...events.parisweb,
        date: "2016-09-29",
        session: sessions.phaserjs,
      },
      {
        ...events.web2day,
        date: "2016-06-15",
      },
      {
        title: "nCrafts",
        date: "2016-05-12",
        website: "http://ncrafts.io/",
      },
      {
        title: "Craft",
        date: "2016-04-26",
        website: "http://craft-conf.com",
      },
      {
        ...events.nantesjs,
        date: "2016-04-07",
        session: sessions.phaserjs,
      },
      {
        ...events.breizhcamp,
        date: "2016-03-23",
        session: sessions.bootstrass,
      },
      {
        ...events.dotjs,
        date: "2015-12-07",
      },
      {
        ...events.dotcss,
        date: "2015-12-04",
      },
      {
        ...events.devfest,
        date: "2015-11-06",
      },
      {
        title: "Blend Web Mix",
        date: "2015-10-28",
        website: "http://www.blendwebmix.com",
      },
      {
        ...events.parisweb,
        date: "2015-10-01",
        session: sessions.diywebgame,
      },
      {
        ...events.breizhcamp,
        date: "2015-06-10",
        session: sessions.goodtoolscss,
      },
      {
        ...events.web2day,
        date: "2015-06-03",
      },
      {
        ...events.sudweb,
        date: "2015-05-28",
      },
      {
        ...events.devoxx,
        date: "2015-04-08",
        session: sessions.letssketchtogether,
      },
      {
        ...events.agiletournantes,
        date: "2014-11-27",
        organizer: true,
      },
      {
        ...events.parisweb,
        date: "2014-10-16",
        session: sessions.letssketchtogether,
      },
      {
        title: "Agile Tour Rennes",
        date: "2014-10-09",
        website: "http://agiletour.agilerennes.org",
      },
      {
        ...events.flupauxday,
        date: "2014-09-19",
        session: sessions.letssketchtogether,
      },
      {
        ...events.web2day,
        date: "2014-06-04",
        session: sessions.letssketchtogether,
      },
      {
        title: "Agile France",
        date: "2014-05-22",
        session: sessions.letssketchtogether,
        website: "http://2015.conference-agile.fr",
      },
      {
        ...events.sudweb,
        date: "2014-05-16",
        session: sessions.letssketchtogether,
      },
      {
        ...events.scrumday,
        date: "2014-04-09",
        session: sessions.letssketchtogether,
      },
      {
        ...events.agiletournantes,
        date: "2013-11-14",
        organizer: true,
        session: sessions.letssketchtogether,
      },
      {
        ...events.devfest,
        date: "2013-11-08",
      },
      {
        title: "Agile Tour Vannes",
        date: "2013-11-07",
        session: sessions.letssketchtogether,
      },
      {
        ...events.parisweb,
        date: "2013-10-10",
      },
      {
        ...events.jugsummercamp,
        date: "2013-09-20",
      },
      {
        ...events.flupauxday,
        date: "2013-06-14",
      },
      {
        ...events.breizhcamp,
        date: "2013-06-13",
      },
      {
        ...events.web2day,
        date: "2013-05-16",
      },
      {
        title: "MIX-IT",
        date: "2013-04-25",
        website: "http://www.mix-it.fr",
      },
      {
        ...events.scrumday,
        date: "2013-04-11",
        session: sessions.agilemobile,
      },
      {
        ...events.agiletournantes,
        date: "2012-11-15",
        organizer: true,
        session: sessions.agilemobile,
      },
      {
        ...events.parisweb,
        date: "2012-10-18",
      },
      {
        ...events.jugsummercamp,
        date: "2012-09-14",
      },
      {
        ...events.devoxx,
        date: "2012-04-18",
      },
      {
        ...events.scrumday,
        date: "2012-03-27",
        session: sessions.lego4scrum,
      },
      {
        ...events.agiletournantes,
        date: "2011-04-13",
        organizer: true,
      },
    ],
  }
  return content
}

module.exports = {
  getEvents: getContent,
}
