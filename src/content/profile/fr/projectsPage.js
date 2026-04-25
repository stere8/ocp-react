import en from '../../profileContent.en';

const projectsPage = {
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
  };

export default projectsPage;
