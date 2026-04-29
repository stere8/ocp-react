import en from '../../profileContent.en';

const expertise = {
    ...en.expertise,
    sectionLabels: {
      packages: 'Offres',
      metrics: 'Indicateurs',
      bestFit: 'Bon fit',
      approach: 'Approche'
    },
    eyebrow: 'Services et offres',
    title: 'Des offres de conseil construites autour de vrais problèmes backend opérationnels.',
    intro:
      'La pratique est la plus forte lorsque l’architecture, la logique de workflow, les intégrations et la fiabilité des données comptent davantage que le churn superficiel de fonctionnalités.',
    serviceGroups: [
      {
        title: 'Inventaire et plateformes internes',
        description:
          'Pour les équipes qui ont besoin de systèmes d’inventaire, de reporting, d’admin ou de workflows internes auxquels les opérateurs peuvent réellement se fier.',
        items: [
          'Workflows de stock, produits et catégories',
          'Outils de reporting, d’export et de visibilité interne',
          'Interfaces internes et admin orientées rôles',
          'Structure backend pensée pour la maintenabilité à long terme'
        ]
      },
      {
        title: 'Réservations, commandes et backends multi-rôles',
        description:
          'Pour les produits où la logique métier vit dans les transitions d’état, les données partagées et plusieurs acteurs sur le même workflow.',
        items: [
          'Logique de réservation et de booking',
          'Séparation des rôles client, vendeur, opérateur et admin',
          'Design backend guidé par l’état',
          'Modélisation métier riche en workflows'
        ]
      },
      {
        title: 'Performance, intégrations et remise en ordre',
        description:
          'Pour les équipes avec un backend existant trop lent, fragile, complexe ou trop risqué à continuer de patcher à l’aveugle.',
        items: [
          'Tuning et indexation SQL Server',
          'Travail sur les intégrations paiement et logistique',
          'Refactor de backend legacy',
          'Revue d’architecture et des flux de données'
        ]
      },
      {
        title: 'Services Python et automatisation',
        description:
          'Pour les services de support, outils internes, diagnostics et automatisations où Python est le moyen le plus rapide et le plus clair de créer du levier.',
        items: [
          'Services FastAPI et Flask',
          'Scripts d’automatisation et outillage interne',
          'Workflows de diagnostic et d’analyse',
          'Scripting orienté réseau et appareils'
        ]
      }
    ],
    packageTitle: 'Points d’entrée productisés',
    packageIntro:
      'Ces offres existent pour rendre la première mission plus claire et moins risquée qu’un chantier ouvert et flou.',
    packages: [
      {
        title: 'Audit de santé du système',
        description:
          'Une revue ciblée de l’architecture backend, du flux de données, des intégrations et des goulots d’étranglement.',
        bullets: [
          'Idéal lorsque le système paraît lent, fragile ou confus',
          'Identifie les quick wins et les risques structurels plus profonds',
          'Utile avant une refonte, un refactor ou une décision de recrutement'
        ]
      },
      {
        title: 'Sprint de modernisation backend',
        description:
          'Une mission courte focalisée sur une zone douloureuse : performance, logique de workflow ou intégration peu fiable.',
        bullets: [
          'Idéal lorsqu’une seule zone crée une friction opérationnelle répétée',
          'Combine nettoyage technique et implémentation concrète',
          'Laisse une structure plus claire que celle trouvée au départ'
        ]
      },
      {
        title: 'Architecte backend fractionné',
        description:
          'Accompagnement backend senior continu pour les équipes qui ont besoin de clarté architecturale et d’un partenaire technique fort sans recruter à temps plein tout de suite.',
        bullets: [
          'Idéal pour les fondateurs ou équipes produit entre deux phases de croissance',
          'Soutient la planification, l’implémentation et l’alignement avec les parties prenantes',
          'Transforme l’incertitude en décisions techniques plus claires'
        ]
      }
    ],
    metricsTitle: 'Indicateurs d’ingénierie qui comptent',
    metrics: [
      {
        title: 'Latence API et requêtes',
        description:
          'La performance compte parce qu’un backend lent crée une friction utilisateur et un décalage opérationnel. La preuve la plus forte ici reste une amélioration SQL d’environ 25 %.'
      },
      {
        title: 'Confiance dans le changement',
        description:
          'Les tests, des frontières plus claires et des changements petits et sûrs réduisent la peur de toucher au backend à chaque évolution.'
      },
      {
        title: 'Fiabilité des intégrations',
        description:
          'Paiements, logistique et APIs tierces sont souvent le cœur des instabilités. L’objectif n’est pas seulement de se connecter, mais d’avoir un comportement fiable quand quelque chose casse.'
      },
      {
        title: 'Visibilité opérationnelle',
        description:
          'Reporting, exports, auditabilité et clarté interne comptent parce qu’une équipe ne peut pas bien opérer si le système renvoie un signal faible.'
      }
    ],
    whoIHelpTitle: 'Clients et équipes les plus adaptés',
    whoIHelp: [
      'Petites entreprises qui ont dépassé les tableurs ou les processus manuels fragiles',
      'Équipes produit avec des backends .NET lents ou fragiles',
      'Fondateurs qui ont besoin de clarté backend avant de faire passer un produit à l’échelle ou de recruter',
      'Équipes qui ont besoin d’une meilleure architecture et de frontières système plus propres'
    ],
    processTitle: 'Comment je travaille',
    process: [
      {
        title: 'Cartographier le problème métier',
        description:
          'Je pars de la douleur opérationnelle, pas uniquement du ticket, pour que le travail technique reste lié à un vrai résultat.'
      },
      {
        title: 'Lire la forme du système',
        description:
          'J’examine les flux de données, les points de panne, les dépendances, les frontières et les contraintes dans lesquelles le système opère réellement.'
      },
      {
        title: 'Concevoir pour la maintenabilité',
        description:
          'La solution doit rester compréhensible et extensible après la première itération d’implémentation.'
      },
      {
        title: 'Livrer avec clarté',
        description:
          'L’implémentation s’accompagne de communication, documentation et décisions qui rendent le prochain changement plus rapide, pas plus lent.'
      }
    ],
    differentiatorsTitle: 'Ce qui rend cette offre différente',
    differentiators: [
      'Delivery mené par le fondateur plutôt qu’une abstraction de type agence',
      'Vraie expérience backend de production, pas seulement des projets soignés',
      'Pensée systémique issue de la mécatronique qui améliore le jugement architectural',
      'Communication multilingue et expérience d’enseignement qui renforcent la collaboration'
    ],
    focusTitle: 'Direction actuelle',
    focus: [
      'Systèmes backend plus orientés sécurité',
      'Automatisation pour l’analyse et le support opérationnel',
      'Outillage réseau et diagnostic',
      'Environnements produit et plateforme techniquement exigeants'
    ]
  };

export default expertise;
