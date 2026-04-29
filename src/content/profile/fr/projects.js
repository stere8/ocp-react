import en from '../../profileContent.en';

const projects = [
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
  ];

export default projects;
