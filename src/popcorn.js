exports.handler = (event, context, callback) => {
  const profile = {
    titre: "Développeur JavaScript FullStack, spécialisation Angular",
    sous_titre: "15 ans d'expérience",
    prenom: "Alvin",
    nom: "Berthelot",
    mail: "alvin.berthelot+popcorn@webyousoon.com",
    telephone: null,
    photo: "alvin-berthelot.jpg",
    domaines_metiers: [
      "applications métiers / sites web",
      "applications mobiles",
    ],
    technologies: [
      "JavaScript",
      "Angular",
      "Node.js",
      "TypeScript",
      "Java",
      "Android",
      "Sass",
      "Ionic",
      "MySQL",
      "Neo4j",
      "Git",
      "Docker",
      "webpack",
    ],
    $html:
      "<p>Bonjour, moi c'est Alvin, <strong>je travaille dans le web depuis plus de 10 ans maintenant</strong>. Au cours de mes nombreuses expériences j'ai connu des environnements techniques et des domaines métiers variés.</p>\n" +
      "<p>Aujourd'hui j'interviens principalement sur des missions de développement et d'encadrement d'équipe sur l'<strong>écosystème JavaScript</strong>, avec une spécialisation <strong>Angular</strong>.</p>\n" +
      "<p>Je suis quelqu'un de communicant, rigoureux et engagé (ne me demandez pas de faire l'impasse sur les tests).</p>\n" +
      '<p>Vous trouverez plus de détails sur mon parcours sur ma page personnelle <a href="http://alvin.berthelot.rocks">alvin.berthelot.rocks</a>.</p>\n' +
      "<p>Contactez-moi si vous avez <strong>un projet, un besoin de renfort dans votre équipe ou une demande de formation</strong> en lien avec mes compétences.</p>\n",
    $slug: "alvin-berthelot",
  };
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(profile),
  });
};
