import en from '../../profileContent.en';

const home = {
    ...en.home,
    title: 'Je construis des systèmes backend qui rendent les opérations fiables.',
    intro:
      'Conseil mené par le fondateur pour les logiciels d’inventaire, de commandes, de réservations, de reporting, d’intégration et de workflows internes dont les entreprises dépendent réellement.',
    heroSupport:
      'Ancien Backend Engineer chez Oponeo.pl avec plus de 2,5 ans de livraison .NET en production, un portfolio sérieux orienté systèmes et une façon de penser issue de la mécatronique, centrée sur les contraintes, la fiabilité et les modes de panne.',
    focusAreas: [
      'Systèmes backend en .NET et ASP.NET Core',
      'Optimisation SQL et des flux de données',
      'Automatisation, APIs et diagnostic en Python',
      'Communication claire pour les profils techniques et métier'
    ],
    ctaLabel: 'Réserver un appel de 15 min',
    secondaryCtaLabel: 'Voir les études de cas',
    bookingHint:
      'L’appel est court, concret et sans pression : nous clarifions le problème opérationnel, les contraintes et la meilleure prochaine étape.',
    sectionLabels: {
      credibility: 'Crédibilité',
      problemsSolved: 'Problèmes traités',
      story: 'Histoire',
      packages: 'Offres',
      proof: 'Preuves',
      metrics: 'Indicateurs',
      communication: 'Communication',
      resources: 'Ressources',
      contact: 'Contact',
      bestFor: 'Idéal pour',
      outcome: 'Résultat'
    },
    trustTitle: 'Du logiciel opérationnel, pas du freelancing générique',
    trustSummary:
      'Le récit le plus fort ici est concret et pragmatique : du vrai travail en production, de vrais projets métiers et une offre de conseil construite autour de workflows qui coûtent du temps et de l’argent lorsqu’ils cassent.',
    trustPoints: [
      'Expérience backend commerciale dans un environnement e-commerce à fort trafic chez Oponeo.pl',
      'StockIT validé grâce aux retours de plus de 10 petits commerçants',
      'Preuves répétées d’environ 25 % d’amélioration des performances SQL en production',
      'Communication multilingue et expérience d’enseignement qui renforcent la clarté de livraison'
    ],
    proofBar: [
      { value: 'Oponeo.pl', label: 'ancien backend engineer en e-commerce de production' },
      { value: '~25 %', label: 'amélioration SQL répétée dans les preuves commerciales' },
      { value: '10+ gérants', label: 'validation des workflows d’inventaire de StockIT' },
      { value: '4,26/5,0', label: 'B.Eng. en informatique et mécatronique' },
      { value: '5 langues', label: 'anglais, français, polonais, espagnol et kinyarwanda' }
    ],
    problemTitle: 'Les problèmes sur lesquels j’interviens',
    problemIntro:
      'Les clients n’achètent pas du backend pour le backend. Ils le font parce que l’inventaire est faux, les réservations sont fragiles, les intégrations échouent ou le système ralentit au moment où l’activité en dépend vraiment.',
    problems: [
      {
        title: 'Inventaire et visibilité des stocks',
        description:
          'Backends et outils internes pour les produits, les stocks, le reporting et les exports, là où la précision et la visibilité comptent tous les jours.'
      },
      {
        title: 'Réservations et workflows multi-rôles',
        description:
          'Systèmes où clients, administrateurs, vendeurs ou opérateurs partagent une source de vérité unique et où les transitions d’état doivent être correctement modélisées.'
      },
      {
        title: 'Intégrations et dette héritée',
        description:
          'Intégrations paiement, logistique et APIs où la fiabilité, la forme des données et la maintenabilité comptent davantage qu’une simple démo réussie.'
      },
      {
        title: 'Automatisation et outils internes',
        description:
          'Services et scripts Python qui retirent du travail répétitif, améliorent la visibilité opérationnelle et soutiennent une prise de décision plus nette.'
      }
    ],
    storyTitle: 'Pourquoi je construis des systèmes métiers',
    storyCards: [
      {
        title: 'Motivation personnelle',
        text:
          'J’ai grandi au contact d’activités de petites entreprises et j’ai vu directement comment les écarts de stock, les processus manuels et le manque de visibilité créent une friction quotidienne pour les gérants et les opérateurs.'
      },
      {
        title: 'StockIT comme preuve',
        text:
          'C’est pour cela que StockIT compte. Ce n’était pas un simple projet étudiant. C’était une tentative sérieuse de résoudre un problème opérationnel avec un logiciel structuré et une validation utilisateur.'
      },
      {
        title: 'Mentalité mécatronique',
        text:
          'Ma formation en informatique et en mécatronique me pousse à penser en systèmes : frontières, dépendances, état, diagnostic et fiabilité à long terme.'
      }
    ],
    packageTitle: 'Des façons simples de commencer ensemble',
    packageIntro:
      'Pour réduire l’incertitude, le premier pas n’a pas besoin d’être un gros projet. Voici des points d’entrée plus clairs et plus légers.',
    packages: [
      {
        ...en.home.packages[0],
        title: 'Audit de santé du système',
        format: 'Revue ponctuelle',
        idealFor: 'Les équipes dont le backend semble lent, fragile ou difficile à faire évoluer.',
        deliverables: [
          'Revue de l’architecture, des flux de données, des points de pression d’intégration et des goulets d’étranglement',
          'Liste priorisée des risques techniques et des gains rapides',
          'Guidance écrite exploitable en interne ou avec moi'
        ],
        outcome: 'De la clarté avant de dépenser plus de temps ou d’argent dans la mauvaise direction.'
      },
      {
        ...en.home.packages[1],
        title: 'Sprint intégration et performance',
        format: 'Mission courte et ciblée',
        idealFor: 'Les entreprises confrontées à des requêtes lentes, des intégrations fragiles ou des workflows backend qui génèrent une douleur opérationnelle répétée.',
        deliverables: [
          'Améliorations ciblées sur SQL et les flux backend',
          'Refactor de la zone d’intégration ou de workflow la plus fragile',
          'Documentation concrète avant/après sur la zone modifiée'
        ],
        outcome: 'Un périmètre plus réduit avec un impact technique et opérationnel visible.'
      },
      {
        ...en.home.packages[2],
        title: 'Architecte backend fractionné',
        format: 'Accompagnement continu ou delivery',
        idealFor: 'Les fondateurs et équipes qui ont besoin d’un partenaire backend senior sans recruter à plein temps tout de suite.',
        deliverables: [
          'Guidance d’architecture et direction d’implémentation',
          'Revue des priorités, des risques et des choix d’évolution du système',
          'Soutien de communication entre profils techniques et non techniques'
        ],
        outcome: 'De meilleures décisions backend, moins de rework et davantage de confiance technique.'
      }
    ],
    featuredTitle: 'Preuves sélectionnées',
    featuredIntro:
      'La manière la plus rapide de comprendre l’offre est de regarder le type de travail déjà derrière elle.',
    featuredProof: [
      {
        ...en.home.featuredProof[0],
        title: 'Ancrage commercial : Oponeo.pl',
        summary:
          'Plus de 2,5 ans de travail backend .NET dans un environnement e-commerce à fort trafic avec APIs, SQL, intégrations, refactoring legacy, tests et support de production.',
        linkLabel: 'Voir la preuve commerciale'
      },
      {
        ...en.home.featuredProof[1],
        title: 'Plateforme d’inventaire StockIT',
        summary:
          'Un système d’inventaire de fin d’études né d’un vrai besoin de petite entreprise et validé par plus de 10 gérants.',
        linkLabel: 'Lire le cas StockIT'
      },
      {
        ...en.home.featuredProof[2],
        title: 'Workflows de réservation et de plateforme',
        summary:
          'DreamNDine et la plateforme EStore montrent une vraie maîtrise de la séparation des rôles, de la logique métier, de l’état de réservation et des systèmes backend qui coordonnent des opérations réelles.',
        linkLabel: 'Parcourir les cas'
      }
    ],
    metricsTitle: 'Les indicateurs qui comptent',
    metrics: [
      {
        title: 'Performance des requêtes',
        description:
          'Les preuves commerciales répétées pointent vers environ 25 % d’amélioration SQL grâce au tuning, aux index et à une meilleure structure d’accès aux données.'
      },
      {
        title: 'Fiabilité des workflows',
        description:
          'Les systèmes d’inventaire, de réservation et de reporting n’ont de valeur que si les opérateurs peuvent faire confiance à ce que le système affiche et à l’état dans lequel il se trouve.'
      },
      {
        title: 'Fiabilité des intégrations',
        description:
          'Les paiements, la logistique et les APIs tierces sont souvent les zones les plus fragiles. Je me concentre sur les frontières et la gestion des pannes, pas seulement sur le happy path.'
      },
      {
        title: 'Temps opérationnel gagné',
        description:
          'Un bon backend réduit le travail manuel répétitif, améliore la visibilité et laisse moins de chaos quotidien à gérer.'
      }
    ],
    communicationTitle: 'Style de communication et de delivery',
    communication:
      'Je ne fais pas que construire du logiciel. J’enseigne aussi la programmation et les langues, ce qui a renforcé ma capacité à expliquer des systèmes complexes, documenter les décisions et adapter ma communication à différents niveaux techniques et culturels.',
    resourcesTitle: 'Des prochaines étapes utiles pour les acheteurs prudents',
    resourcesIntro:
      'Tout le monde ne veut pas démarrer un projet immédiatement. Ces ressources aident à juger l’adéquation, à mieux comprendre le travail et à commencer par des éléments à faible friction.',
    resources: [
      {
        kicker: 'Insights',
        title: 'Lire des notes backend et des articles techniques',
        summary:
          'Parcourez des notes pratiques sur la performance backend, les intégrations, l’automatisation, le diagnostic et la conception de logiciels opérationnels.',
        link: '/blog',
        linkLabel: 'Ouvrir les insights',
        external: false
      },
      {
        kicker: 'Checklist',
        title: 'Télécharger la checklist d’audit backend',
        summary:
          'Une checklist concise pour repérer les workflows fragiles, les flux de données lents, les intégrations risquées et les problèmes d’architecture avant qu’ils ne coûtent plus cher.',
        link: '/doc/backend-health-audit-checklist.md',
        linkLabel: 'Télécharger la checklist',
        external: true,
        download: true
      },
      {
        kicker: 'Adéquation',
        title: 'Voir les formats d’intervention et les projets les plus adaptés',
        summary:
          'Consultez la structure des offres, les types d’équipes que j’aide le plus et la façon dont un audit ou un sprint ciblé commence généralement.',
        link: '/expertise',
        linkLabel: 'Voir les services',
        external: false
      }
    ],
    contactTitle: 'Dites-moi ce qui est lent, fragile ou difficile à fiabiliser',
    contactText:
      'Les bons projets incluent les backends riches en workflows, les outils internes, les systèmes d’inventaire ou de réservation, les intégrations, le tuning SQL et les revues d’architecture pour les équipes qui ont besoin d’une direction backend plus claire.',
    contactPrimaryLabel: 'Me contacter',
    contactSecondaryLabel: 'Réserver un appel découverte'
  };

export default home;
