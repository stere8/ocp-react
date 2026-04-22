import en from './profileContent.en';

const profileContentFr = {
  ...en,
  site: {
    ...en.site,
    booking: {
      ...en.site.booking,
      title: 'Réserver un appel découverte',
      intro:
        'Cet appel court sert à réduire l’ambiguïté dès le départ. Nous examinons le vrai problème backend, le workflow touché et si la meilleure suite est un audit, un sprint ciblé ou un projet plus large.',
      highlights: [
        'Nous parlons du vrai point de friction du système, pas d’un script commercial générique.',
        'Vous pouvez venir avec un workflow chaotique, un backend lent ou une intégration fragile.',
        'S’il y a adéquation, vous repartez avec une suite beaucoup plus claire.'
      ],
      iframeTitle: 'Calendrier de réservation OT Systems Engineering',
      footerNote: 'Si vous préférez ouvrir le calendrier dans un autre onglet, utilisez le lien direct.',
      directLinkLabel: 'Ouvrir le calendrier dans un nouvel onglet',
      stickyEyebrow: 'Besoin de clarté rapidement ?',
      stickyLabel: 'Réserver un appel'
    },
    tagline: 'Conseil backend mené par le fondateur pour les logiciels opérationnels',
    location: 'Bydgoszcz, Pologne',
    availability: 'Disponible à distance en Europe et à l’international',
    seoTitle: 'Conseil en systèmes backend',
    seoDescription:
      'Conseil backend mené par le fondateur pour l’inventaire, les réservations, les intégrations, le reporting et les logiciels opérationnels, soutenu par une vraie expérience .NET et une approche systémique.'
  },
  footer: {
    ...en.footer,
    phoneLabel: 'Tél.',
    emailLabel: 'Email'
  },
  home: {
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
    contactTitle: 'Dites-moi ce qui est lent, fragile ou difficile à fiabiliser',
    contactText:
      'Les bons projets incluent les backends riches en workflows, les outils internes, les systèmes d’inventaire ou de réservation, les intégrations, le tuning SQL et les revues d’architecture pour les équipes qui ont besoin d’une direction backend plus claire.',
    contactPrimaryLabel: 'Me contacter',
    contactSecondaryLabel: 'Réserver un appel découverte'
  },
  about: {
    ...en.about,
    metaTitle: 'Profil',
    metaDescription:
      'Profil mené par le fondateur d’Oreste Twizeyimana : ingénieur backend avec expérience .NET en production, pensée systémique issue de la mécatronique et forte capacité de communication.',
    eyebrow: 'Profil du fondateur',
    title: 'L’ingénieur derrière OT Systems Engineering',
    lead:
      'Cette pratique est fondée sur le modèle founder-led parce que son meilleur atout n’est pas une identité d’agence large, mais une combinaison précise de delivery backend en production, de pensée systémique et de communication claire construite sur du travail réel.',
    intro: [
      'La lecture la plus stable de l’ensemble des preuves n’est pas “développeur générique”. C’est ingénieur backend de production, penseur systémique, formateur et constructeur de logiciels liés à de vrais problèmes opérationnels.',
      'C’est important parce que l’offre de conseil de ce site n’est pas du marketing inventé. C’est une version condensée de ce que l’expérience, les projets et le profil soutiennent de manière cohérente.'
    ],
    quickFactsTitle: 'En un coup d’œil',
    quickFacts: [
      'Basé à Bydgoszcz, en Pologne, et ouvert aux collaborations à distance, hybrides ou avec option de relocalisation.',
      'Socle commercial : C#, .NET, ASP.NET Core, EF Core, SQL Server, intégrations, tests et support de production.',
      'Axe d’expansion : Python, FastAPI, Flask, automatisation, diagnostic et outils proches du système.',
      'Différenciateurs : mécatronique, communication multilingue, tutorat et pensée systémique.'
    ],
    sections: [
      {
        title: 'Ce qui rend ce profil distinctif',
        paragraphs: [
          'Beaucoup de profils en début de carrière ont une ou deux bonnes preuves. Celui-ci combine une vraie expérience backend en production, un projet de fin d’études sérieux lié à un vrai problème métier, une réelle amplitude en Python et une communication au-dessus de la moyenne.',
          'Le résultat est un consultant capable d’entrer dans le détail technique sans perdre le problème métier ni la dimension humaine de la livraison.'
        ]
      },
      {
        title: 'Pourquoi le logiciel opérationnel revient sans cesse',
        paragraphs: [
          'Le fil personnel le plus fort vient d’une exposition directe aux problèmes d’inventaire et de workflow dans les petites entreprises. C’est pour cela que le travail revient sans cesse vers les stocks, les réservations, le reporting, l’automatisation et les systèmes qui réduisent la friction manuelle.',
          'Il s’agit davantage d’empathie pratique que de fascination abstraite : le logiciel doit rendre les opérations complexes plus fiables pour ceux qui les gèrent.'
        ]
      },
      {
        title: 'Fondation commerciale',
        paragraphs: [
          'Le centre de gravité commercial reste Oponeo.pl, où le travail pointe de façon répétée vers des APIs ASP.NET Core, EF Core, SQL Server, des intégrations paiement et logistique, du tuning de performance, du refactoring legacy, une delivery Agile, des tests et du support de production.',
          'Cette expérience compte parce qu’elle prouve la capacité à travailler dans des systèmes avec du vrai trafic, de vraies dépendances et de vraies conséquences opérationnelles.'
        ]
      },
      {
        title: 'Mécatronique et pensée systémique',
        paragraphs: [
          'L’informatique et la mécatronique renforcent une manière de penser fondée sur l’intégration, la mesure, la fiabilité, le contrôle, les contraintes et les modes de panne.',
          'En conseil backend, cela se traduit par un meilleur jugement architectural, plus de rigueur sur les frontières et une meilleure intuition pour comprendre le comportement réel des systèmes.'
        ]
      },
      {
        title: 'Communication et transmission',
        paragraphs: [
          'Le tutorat en programmation et l’enseignement des langues ne sont pas des notes de bas de page. Ils renforcent la décomposition, la clarté, la patience et la capacité à adapter une explication au public concerné.',
          'Cela rend la collaboration plus fluide avec les clients, les fondateurs, les profils produit et les ingénieurs qui ont besoin d’une compréhension partagée de ce que fait le système et pourquoi.'
        ]
      }
    ],
    valuesTitle: 'Façon de travailler',
    values: [
      'Analytique : je cherche les causes, dépendances, contraintes et modes de panne, pas seulement les fonctionnalités livrées.',
      'Pragmatique : je privilégie le travail lié aux opérations, au reporting, aux workflows, aux intégrations et à une utilité métier visible.',
      'Orienté qualité : SOLID, clean architecture, tests, CI/CD et documentation font partie de la livraison.',
      'Adaptable : je peux passer de .NET à Python, du tutorat à l’automatisation et au travail de plateforme sans perdre la même identité centrale.'
    ],
    directionTitle: 'Direction',
    direction: [
      'Travail backend et plateforme dans des environnements produit techniquement exigeants.',
      'Systèmes métiers et plateformes opérationnelles où la fiabilité compte vraiment.',
      'Outils Python, automatisation et backend orienté services.',
      'Ingénierie backend plus orientée sécurité et diagnostic comme axe de progression.'
    ],
    practiceNote:
      'Conseil backend mené par le fondateur pour les logiciels opérationnels. Basé à Bydgoszcz, Pologne. Disponible à distance en Europe et à l’international.',
    closing:
      'Le cœur du profil n’est pas simplement “j’aime coder”. Il ressemble plutôt à ceci : je veux faire fonctionner des systèmes complexes de manière fiable pour de vraies personnes.'
  },
  projectsPage: {
    ...en.projectsPage,
    labels: {
      context: 'Contexte',
      constraints: 'Contraintes',
      system: 'Système',
      outcome: 'Résultat',
      whyItMatters: 'Pourquoi c’est important',
      viewRepository: 'Voir le dépôt'
    },
    eyebrow: 'Études de cas',
    title: 'Des preuves basées sur l’expérience pour le backend opérationnel.',
    intro:
      'Un consultant backend ne peut pas s’appuyer uniquement sur des captures d’écran. La vraie preuve est dans le contexte, la conception du système, les arbitrages et le type de problème opérationnel réellement résolu.',
    commercialAnchor: {
      ...en.projectsPage.commercialAnchor,
      eyebrow: 'Ancrage commercial',
      summary:
        'Environ 2,5 ans de travail backend en production dans un environnement e-commerce et systèmes métier à fort trafic, avec C#, .NET 6/8, ASP.NET Core, EF Core, SQL Server, Docker et CI/CD.',
      points: [
        'Construction et maintenance d’APIs ASP.NET Core en conditions de production',
        'Optimisation de requêtes SQL et d’index avec environ 25 % de gain répété',
        'Travail sur des intégrations de paiement comme Klarna et PayPal',
        'Travail sur des intégrations logistiques ou de statut de commande comme DPD et GLS',
        'Refactor de backend legacy avec SOLID et des habitudes d’architecture plus propres'
      ]
    },
    themes: [
      {
        title: 'Réalisme opérationnel',
        description:
          'Le travail le plus fort ici traite des stocks, réservations, intégrations, reportings et workflows qui comptent bien au-delà d’une démo.'
      },
      {
        title: 'Architecture avant le vernis',
        description:
          'L’accent est mis sur la forme du backend, le flux de données, les frontières de service et la maintenabilité, plutôt que sur des listes de fonctionnalités superficielles.'
      },
      {
        title: 'Amplitude sans perte d’identité',
        description:
          'Le portfolio va de .NET à Python, à l’automatisation et aux outils proches du matériel, tout en gardant la même discipline de structure et de clarté.'
      }
    ]
  },
  projects: [
    {
      ...en.projects[0],
      subtitle: 'Plateforme d’inventaire pour petites entreprises',
      context:
        'Les petites entreprises perdent souvent du temps et de la confiance parce que les stocks sont suivis manuellement, la visibilité reste faible et le reporting trop fragile pour soutenir les décisions.',
      constraints:
        'Le système devait être assez simple pour un usage métier réel tout en modélisant proprement les flux de stock, les catégories, le reporting et les exports.',
      system:
        'Construit avec .NET 8, ASP.NET Core Razor Pages, EF Core, SQL Server, des frontières par couches, l’export CSV/Excel et une structure pensée pour la maintenabilité à long terme.',
      outcome:
        'Le projet de fin d’études et de product ownership le plus fort du portfolio, validé par plus de 10 petits commerçants et ancré dans un vrai problème opérationnel.',
      whyItMatters:
        'C’est la preuve que le travail est guidé par la douleur métier et la clarté système, pas par la copie d’un stack tutoriel.',
      signals: ['Validé par 10+ gérants', 'Workflows d’inventaire', 'Architecture en couches']
    },
    {
      ...en.projects[1],
      subtitle: 'Backend retail multi-tenant orienté réservation',
      context:
        'Les plateformes retail ont besoin de bien plus qu’une vitrine. Elles demandent une séparation des rôles, une gouvernance vendeurs, une logique de réservation et un backend capable de coordonner plusieurs acteurs.',
      constraints:
        'Le domaine devait supporter les flux client, admin et vendeur tout en gardant la cohérence du système comme plateforme opérationnelle unique.',
      system:
        'Backend retail tenant-aware conçu autour de .NET 8 minimal APIs, EF Core, persistance SQL et applications clientes séparées reliées à une source de vérité unique.',
      outcome:
        'Montre une vraie pensée plateforme, une architecture orientée rôles et une aisance avec le commerce riche en workflows au-delà de simples pages catalogue.',
      whyItMatters:
        'C’est le signal le plus fort que je pense en systèmes et en frontières, pas seulement en écrans isolés.',
      signals: ['Pensée plateforme', 'Cycle de vie des réservations', 'Design tenant-aware']
    },
    {
      ...en.projects[2],
      subtitle: 'API de réservation et règles métier',
      context:
        'Disponibilité, état des réservations, filtrage, tarification et logique de booking deviennent vite fragiles quand on les traite comme du CRUD léger au lieu d’un vrai domaine métier.',
      constraints:
        'Le service devait garder de la clarté backend tout en supportant traitement SQL intensif, authentification et logique de workflow.',
      system:
        'Backend .NET en couches avec design d’API structuré, persistance SQL, séparation de la logique métier et frontières de service maintenables.',
      outcome:
        'Un bon exemple de backend de complexité intermédiaire où les transitions d’état et les règles métier comptent davantage que le nombre d’endpoints.',
      whyItMatters:
        'Les clients avec des systèmes de réservation, de workflow ou d’état complexe ont besoin exactement de ce type de discipline backend.',
      signals: ['Workflows de réservation', 'Backend à règles métier', 'Services structurés']
    },
    {
      ...en.projects[3],
      subtitle: 'Service backend Python avec roadmap de production',
      context:
        'Le travail de service moderne demande plus qu’un endpoint rapide. Il faut de la validation, une structure modulaire et un chemin clair du MVP vers une hygiène de production.',
      constraints:
        'Le projet devait rester léger pour avancer vite, tout en étant organisé pour les tests, le packaging, la CI et l’évolutivité future.',
      system:
        'Construit avec FastAPI, Pydantic, flux d’authentification JWT, câblage partagé des dépendances et roadmap explicite vers les tests, Docker, le packaging et l’échelle via base de données.',
      outcome:
        'Représente la partie Python de l’offre de conseil à son meilleur : méthodique, orientée service et construite avec une vraie maturité opérationnelle.',
      whyItMatters:
        'Ce n’est pas une expérimentation aléatoire. Cela montre une voie de conseil pour les services Python, les backends d’automatisation et les systèmes de support proches de l’IA.',
      signals: ['Design de service FastAPI', 'Validation et authentification', 'Discipline de roadmap']
    },
    {
      ...en.projects[4],
      subtitle: 'Diagnostic, automatisation et expérimentations proches de la mécatronique',
      context:
        'Toute l’ingénierie utile ne vit pas dans des produits web polis. Une grande partie du levier vient du diagnostic, de l’automatisation et de la compréhension de ce que les systèmes font sous l’interface.',
      constraints:
        'Ces outils devaient interagir avec des appareils, des réseaux ou des environnements contraints, et non uniquement avec des couches applicatives classiques.',
      system:
        'Utilisation de Python, ADB, Scapy, workflows de type Nmap, MQTT et MicroPython sur ESP pour automatiser des tâches, inspecter des systèmes et explorer la messagerie orientée appareils.',
      outcome:
        'Montre la dimension mécatronique et diagnostic derrière le profil : plus proche de l’OS, de la couche réseau et du comportement réel des systèmes.',
      whyItMatters:
        'Cela prouve une vraie amplitude en automatisation et en pensée système sans perdre la même discipline d’ingénierie.',
      signals: ['Diagnostic et tooling', 'Scripting orienté réseau', 'Expérimentation embarquée']
    }
  ],
  expertise: {
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
  },
  contact: {
    ...en.contact,
    metaTitle: 'Contact',
    metaDescription:
      'Contactez OT Systems Engineering pour du conseil backend, des revues système, la remise en ordre d’intégrations et des logiciels riches en workflows.',
    eyebrow: 'Commencer la conversation',
    title: 'Dites-moi ce qui casse, ralentit ou reste difficile à fiabiliser.',
    lead:
      'Le meilleur premier message est simple : expliquez où le backend fait mal aujourd’hui, ce que le système doit faire et le type de collaboration recherché.',
    fitTitle: 'Projets bien adaptés',
    fitList: [
      'Backends d’inventaire, de commandes, de réservations et de reporting',
      'Nettoyage d’intégrations paiement, logistique ou API tierces',
      'Revue des goulets SQL et des flux de données',
      'Revue d’architecture avant une refonte plus large ou une nouvelle poussée produit'
    ],
    contactMethods: [
      { label: 'Email', value: 'oreste.twizeyimana99@gmail.com', href: 'mailto:oreste.twizeyimana99@gmail.com' },
      { label: 'Téléphone', value: '+48 572 170 919', href: 'tel:+48572170919' },
      { label: 'GitHub', value: 'github.com/stere8', href: 'https://github.com/stere8/' },
      { label: 'LinkedIn', value: 'twizeyimana-o-2302a410a', href: 'https://www.linkedin.com/in/twizeyimana-o-2302a410a' }
    ],
    directContactTitle: 'Contact direct',
    discoveryTitle: 'Ce qui se passe pendant l’appel',
    discoveryIntro:
      'Si réserver est plus simple que rédiger un long message, l’appel découverte est le moyen le plus rapide de transformer un problème backend flou en plan plus net.',
    discoveryBullets: [
      'Nous identifions le workflow touché, le point de pression du système et le niveau d’urgence.',
      'J’explique ce que j’examinerais d’abord et le type d’intervention le plus pertinent.',
      'Vous repartez avec une clarté concrète, même si la prochaine étape reste modeste.'
    ],
    scheduleButtonLabel: 'Réserver un appel découverte',
    closing:
      'Si un court appel est plus simple qu’un long message, réservez directement et je viendrai préparé pour parler du système, des goulets d’étranglement et du meilleur prochain pas.'
  }
};

export default profileContentFr;
