import en from './profileContent.en';

const profileContentEs = {
  ...en,
  site: {
    ...en.site,
    booking: {
      ...en.site.booking,
      title: 'Reserva una llamada de descubrimiento',
      intro:
        'Esta llamada breve está pensada para reducir la ambigüedad desde el inicio. Revisamos el problema real del backend, el flujo operativo que afecta y si el siguiente paso debe ser una auditoría, un sprint enfocado o una implementación mayor.',
      highlights: [
        'Nos centramos en el dolor real del sistema, no en un guion de ventas genérico.',
        'Puedes traer un workflow desordenado, un backend lento o una integración inestable.',
        'Si hay encaje, sales con un siguiente paso mucho más claro.'
      ],
      iframeTitle: 'Calendario de reservas de OT Systems Engineering',
      footerNote: 'Si prefieres abrir el calendario en otra pestaña, usa el enlace directo.',
      directLinkLabel: 'Abrir calendario en una nueva pestaña',
      stickyEyebrow: '¿Necesitas claridad rápida?',
      stickyLabel: 'Reservar llamada'
    },
    tagline: 'Consultoría backend liderada por el fundador para software operativo',
    location: 'Bydgoszcz, Polonia',
    availability: 'Disponible de forma remota en Europa e internacionalmente',
    seoTitle: 'Consultoría de sistemas backend',
    seoDescription:
      'Consultoría backend liderada por el fundador para inventario, reservas, integraciones, reportes y software operativo, respaldada por experiencia real en .NET y pensamiento sistémico.'
  },
  footer: {
    ...en.footer,
    phoneLabel: 'Tel.',
    emailLabel: 'Correo'
  },
  home: {
    ...en.home,
    title: 'Construyo sistemas backend que hacen fiables las operaciones.',
    intro:
      'Consultoría liderada por el fundador para software de inventario, pedidos, reservas, reportes, integraciones y flujos internos del que las empresas dependen de verdad.',
    heroSupport:
      'Ex Backend Engineer en Oponeo.pl con más de 2,5 años entregando .NET en producción, un portfolio serio de sistemas y una mentalidad de mecatrónica centrada en restricciones, fiabilidad y modos de fallo.',
    focusAreas: [
      'Sistemas backend con .NET y ASP.NET Core',
      'Optimización de SQL y del flujo de datos',
      'Automatización, APIs y diagnóstico con Python',
      'Comunicación clara para perfiles técnicos y de negocio'
    ],
    ctaLabel: 'Reservar una llamada de 15 min',
    secondaryCtaLabel: 'Ver casos',
    bookingHint:
      'La llamada es breve, práctica y sin presión: aclaramos el problema operativo, las restricciones y el mejor siguiente paso.',
    sectionLabels: {
      credibility: 'Credibilidad',
      problemsSolved: 'Problemas que resuelvo',
      story: 'Historia',
      packages: 'Paquetes',
      proof: 'Pruebas',
      metrics: 'Métricas',
      communication: 'Comunicación',
      resources: 'Recursos',
      contact: 'Contacto',
      bestFor: 'Ideal para',
      outcome: 'Resultado'
    },
    trustTitle: 'Software operativo, no freelancing genérico',
    trustSummary:
      'La historia más fuerte aquí es práctica y concreta: trabajo real en producción, proyectos ligados a operaciones reales y una oferta de consultoría diseñada para flujos que cuestan tiempo y dinero cuando fallan.',
    trustPoints: [
      'Trabajo backend comercial en un entorno e-commerce de alto tráfico en Oponeo.pl',
      'StockIT validado con feedback de más de 10 pequeños empresarios',
      'Evidencia repetida de mejoras de alrededor del 25 % en rendimiento SQL en trabajo productivo',
      'Comunicación multilingüe y experiencia enseñando que mejoran la claridad de entrega'
    ],
    proofBar: [
      { value: 'Oponeo.pl', label: 'ex backend engineer en e-commerce productivo' },
      { value: '~25 %', label: 'mejora de rendimiento SQL repetida en evidencia comercial' },
      { value: '10+ dueños', label: 'validación de los flujos de inventario de StockIT' },
      { value: '4,26/5,0', label: 'B.Eng. en Ingeniería Informática y Mecatrónica' },
      { value: '5 idiomas', label: 'inglés, francés, polaco, español y kinyarwanda' }
    ],
    problemTitle: 'Problemas en los que puedo ayudar',
    problemIntro:
      'Los clientes no pagan backend por sí mismo. Lo pagan porque el inventario falla, las reservas son frágiles, las integraciones se rompen o el sistema se vuelve lento justo cuando el negocio empieza a depender de él.',
    problems: [
      {
        title: 'Inventario y visibilidad del stock',
        description:
          'Backends y herramientas internas para productos, stock, reportes y exportaciones donde la precisión y la visibilidad importan cada día.'
      },
      {
        title: 'Reservas y flujos con múltiples roles',
        description:
          'Sistemas donde clientes, administradores, vendedores u operadores comparten una única fuente de verdad y las transiciones de estado deben estar bien modeladas.'
      },
      {
        title: 'Integraciones y fricción heredada',
        description:
          'Integraciones de pagos, logística y APIs donde la fiabilidad, la forma de los datos y la mantenibilidad importan más que una demo feliz.'
      },
      {
        title: 'Automatización y herramientas internas',
        description:
          'Servicios y scripts en Python que eliminan trabajo repetitivo, mejoran la visibilidad operativa y apoyan una toma de decisiones más nítida.'
      }
    ],
    storyTitle: 'Por qué construyo sistemas de negocio',
    storyCards: [
      {
        title: 'Motivación personal',
        text:
          'Crecí alrededor de operaciones de pequeños negocios y vi directamente cómo las brechas de inventario, los procesos manuales y la mala visibilidad generan fricción diaria para dueños y operadores.'
      },
      {
        title: 'StockIT como prueba',
        text:
          'Por eso StockIT importa. No fue un proyecto estudiantil genérico. Fue un intento serio de resolver un problema operativo mediante software estructurado y validación con usuarios.'
      },
      {
        title: 'Mentalidad de mecatrónica',
        text:
          'Mi base en ingeniería informática y mecatrónica me hace pensar en sistemas: límites, dependencias, estado, diagnóstico y fiabilidad a largo plazo.'
      }
    ],
    packageTitle: 'Formas de empezar a trabajar juntos',
    packageIntro:
      'Para reducir la incertidumbre del proyecto, el primer paso no tiene que ser una implementación grande. Estas son formas claras y de menor fricción para comenzar.',
    packages: [
      {
        ...en.home.packages[0],
        title: 'Auditoría de salud del sistema',
        format: 'Revisión puntual',
        idealFor: 'Equipos con un backend que se siente lento, frágil o difícil de extender.',
        deliverables: [
          'Revisión de arquitectura, flujo de datos, puntos de presión de integraciones y cuellos de botella',
          'Lista priorizada de riesgos técnicos y mejoras rápidas',
          'Guía escrita que puedes usar internamente o continuar conmigo'
        ],
        outcome: 'Claridad antes de gastar más tiempo o dinero en la dirección equivocada.'
      },
      {
        ...en.home.packages[1],
        title: 'Sprint de integración y rendimiento',
        format: 'Engagement corto y enfocado',
        idealFor: 'Empresas con consultas lentas, integraciones frágiles o flujos backend que causan dolor operativo continuo.',
        deliverables: [
          'Mejoras dirigidas en SQL y en flujos backend',
          'Refactor del área de integración o workflow más frágil',
          'Documentación concreta del antes y después'
        ],
        outcome: 'Un alcance menor con mejora técnica y operativa visible.'
      },
      {
        ...en.home.packages[2],
        title: 'Arquitecto backend fraccional',
        format: 'Soporte continuo de asesoría o delivery',
        idealFor: 'Founders y equipos que necesitan un socio backend senior sin contratar a tiempo completo todavía.',
        deliverables: [
          'Guía de arquitectura y dirección de implementación',
          'Revisión de prioridades, riesgos y decisiones de evolución del sistema',
          'Apoyo de comunicación entre perfiles técnicos y no técnicos'
        ],
        outcome: 'Mejores decisiones backend, menos retrabajo y más confianza técnica.'
      }
    ],
    featuredTitle: 'Pruebas seleccionadas',
    featuredIntro:
      'La forma más rápida de entender la oferta es mirar el tipo de trabajo que ya la respalda.',
    featuredProof: [
      {
        ...en.home.featuredProof[0],
        title: 'Ancla comercial: Oponeo.pl',
        summary:
          'Más de 2,5 años de trabajo backend en .NET dentro de un e-commerce de alto tráfico con APIs, SQL, integraciones, refactorización heredada, testing y soporte en producción.',
        linkLabel: 'Ver prueba comercial'
      },
      {
        ...en.home.featuredProof[1],
        title: 'Plataforma de inventario StockIT',
        summary:
          'Un sistema de inventario de tesis, nacido de un dolor real en pequeños negocios y validado con feedback de más de 10 propietarios.',
        linkLabel: 'Leer el caso de StockIT'
      },
      {
        ...en.home.featuredProof[2],
        title: 'Flujos de reservas y plataformas',
        summary:
          'DreamNDine y la plataforma EStore muestran dominio de separación de roles, lógica de dominio, estado de reservas y sistemas backend que coordinan operaciones reales.',
        linkLabel: 'Explorar casos'
      }
    ],
    metricsTitle: 'Métricas que me importan',
    metrics: [
      {
        title: 'Rendimiento de consultas',
        description:
          'La evidencia comercial repetida apunta a mejoras de alrededor del 25 % en SQL mediante tuning, índices y una mejor estructura de acceso a datos.'
      },
      {
        title: 'Precisión del flujo',
        description:
          'Los sistemas de inventario, reservas y reportes solo sirven si los operadores pueden confiar en lo que el sistema dice y en el estado en el que está.'
      },
      {
        title: 'Fiabilidad de las integraciones',
        description:
          'Pagos, logística y APIs de terceros son lugares donde los sistemas frágiles suelen fallar. Me enfoco en límites y manejo de fallos, no solo en el camino feliz.'
      },
      {
        title: 'Tiempo operativo ahorrado',
        description:
          'Un buen backend reduce trabajo manual repetitivo, mejora la visibilidad y deja menos caos diario al equipo.'
      }
    ],
    communicationTitle: 'Estilo de comunicación y entrega',
    communication:
      'No solo construyo software. También enseño programación e idiomas, lo que fortaleció mi capacidad para explicar sistemas complejos, documentar decisiones y adaptar la comunicación a distintos niveles técnicos y culturales.',
    resourcesTitle: 'Siguientes pasos útiles para compradores prudentes',
    resourcesIntro:
      'No todo el mundo quiere empezar un proyecto de inmediato. Estos recursos ayudan a evaluar el encaje, entender mejor el trabajo y empezar con materiales de menor fricción.',
    resources: [
      {
        kicker: 'Insights',
        title: 'Leer notas de backend y artículos técnicos',
        summary:
          'Explora notas prácticas sobre rendimiento backend, integraciones, automatización, diagnóstico y diseño de software operativo.',
        link: '/blog',
        linkLabel: 'Abrir insights',
        external: false
      },
      {
        kicker: 'Checklist',
        title: 'Descargar la checklist de auditoría backend',
        summary:
          'Una checklist breve para detectar workflows frágiles, flujos de datos lentos, integraciones riesgosas y problemas de arquitectura antes de que cuesten más.',
        link: '/doc/backend-health-audit-checklist.md',
        linkLabel: 'Descargar checklist',
        external: true,
        download: true
      },
      {
        kicker: 'Encaje',
        title: 'Ver los formatos de servicio y proyectos ideales',
        summary:
          'Revisa la estructura de los paquetes, los equipos a los que más ayudo y cómo suele empezar una auditoría o un sprint enfocado.',
        link: '/expertise',
        linkLabel: 'Revisar servicios',
        external: false
      }
    ],
    contactTitle: 'Cuéntame qué es lento, frágil o difícil de confiar',
    contactText:
      'Los proyectos ideales incluyen backends con workflows complejos, herramientas internas, sistemas de inventario o reservas, integraciones, tuning SQL y revisiones de arquitectura para equipos que necesitan una dirección backend más clara.',
    contactPrimaryLabel: 'Contáctame',
    contactSecondaryLabel: 'Agendar llamada de descubrimiento'
  },
  about: {
    ...en.about,
    metaTitle: 'Perfil',
    metaDescription:
      'Perfil liderado por el fundador de Oreste Twizeyimana: ingeniero backend con experiencia real en .NET, pensamiento sistémico influido por mecatrónica y comunicación fuerte.',
    eyebrow: 'Perfil del fundador',
    title: 'El ingeniero detrás de OT Systems Engineering',
    lead:
      'Esta práctica es liderada por el fundador porque el activo más fuerte detrás de ella no es una identidad de agencia amplia. Es una combinación concreta de delivery backend en producción, pensamiento sistémico y comunicación clara construida sobre trabajo real.',
    intro: [
      'La lectura más estable de la evidencia no es “desarrollador genérico”. Es ingeniero backend de producción, pensador sistémico, tutor y constructor de software ligado a problemas operativos reales.',
      'Eso importa porque la oferta de consultoría en este sitio no es marketing inventado. Es una versión comprimida de lo que el historial real de trabajo, proyectos y perfil sostiene de forma consistente.'
    ],
    quickFactsTitle: 'Vista rápida',
    quickFacts: [
      'Basado en Bydgoszcz, Polonia, y abierto a colaboración remota, híbrida y opciones con reubicación.',
      'Núcleo comercial: C#, .NET, ASP.NET Core, EF Core, SQL Server, integraciones, testing y soporte productivo.',
      'Espacio de expansión: Python, FastAPI, Flask, automatización, diagnóstico y herramientas cercanas al sistema.',
      'Diferenciadores: mecatrónica, comunicación multilingüe, tutoría y pensamiento sistémico.'
    ],
    sections: [
      {
        title: 'Lo que hace distintivo al perfil',
        paragraphs: [
          'Muchos perfiles en etapa temprana tienen una o dos señales fuertes. Este combina experiencia backend real en producción, una tesis seria ligada a un problema de negocio real, amplitud significativa en Python y una comunicación inusualmente sólida.',
          'El resultado es un consultor capaz de manejar detalle técnico sin perder el problema de negocio ni el lado humano de la entrega.'
        ]
      },
      {
        title: 'Por qué el software operativo aparece una y otra vez',
        paragraphs: [
          'El hilo personal más fuerte nace de la exposición directa a problemas de inventario y workflow en pequeños negocios. Por eso el trabajo vuelve a stock, reservas, reportes, automatización y sistemas que reducen fricción manual.',
          'Se trata más de empatía práctica que de fascinación abstracta: el software debe hacer más fiables los procesos complicados para la gente que los gestiona.'
        ]
      },
      {
        title: 'Base comercial',
        paragraphs: [
          'El centro de gravedad comercial es Oponeo.pl, donde el trabajo apunta repetidamente a APIs con ASP.NET Core, EF Core, SQL Server, integraciones de pagos y logística, tuning de rendimiento, refactorización heredada, delivery ágil, testing y soporte en producción.',
          'Esa experiencia importa porque demuestra capacidad de trabajar dentro de sistemas con tráfico real, dependencias reales y consecuencias operativas reales.'
        ]
      },
      {
        title: 'Mecatrónica y pensamiento sistémico',
        paragraphs: [
          'La ingeniería informática y la mecatrónica refuerzan una forma de pensar basada en integración, medición, fiabilidad, control, restricciones y modos de fallo.',
          'En consultoría backend, eso se traduce en mejor juicio arquitectónico, más cuidado al razonar sobre límites y mejor instinto para entender cómo se comportan los sistemas bajo presión real.'
        ]
      },
      {
        title: 'Comunicación y enseñanza',
        paragraphs: [
          'La tutoría en programación y la enseñanza de idiomas no son notas al pie. Fortalecen descomposición, claridad, paciencia y la capacidad de adaptar una explicación al público que tienes delante.',
          'Eso facilita la colaboración con clientes, founders, producto e ingeniería, que necesitan una visión compartida de lo que hace el sistema y por qué.'
        ]
      }
    ],
    valuesTitle: 'Forma de trabajar',
    values: [
      'Analítico: busco causas, dependencias, restricciones y modos de fallo en lugar de solo salida funcional.',
      'Práctico: prefiero trabajo ligado a operaciones, reportes, workflows, integraciones y utilidad visible para el negocio.',
      'Orientado a calidad: SOLID, clean architecture, testing, CI/CD y documentación forman parte de la entrega, no son decoración.',
      'Adaptable: puedo moverme entre .NET, Python, tutoría, automatización y trabajo de plataforma sin perder la misma identidad central.'
    ],
    directionTitle: 'Dirección',
    direction: [
      'Trabajo backend y de plataformas en entornos de producto técnicamente exigentes.',
      'Sistemas de negocio y plataformas operativas donde la fiabilidad importa.',
      'Herramientas en Python, automatización y trabajo backend orientado a servicios.',
      'Ingeniería backend con conciencia de seguridad y orientación al diagnóstico como ventaja de crecimiento.'
    ],
    practiceNote:
      'Consultoría backend liderada por el fundador para software operativo. Basado en Bydgoszcz, Polonia. Disponible de forma remota en Europa e internacionalmente.',
    closing:
      'El centro del perfil no es simplemente “me gusta programar”. Se parece más a esto: quiero hacer que sistemas complejos funcionen de forma fiable para personas reales.'
  },
  projectsPage: {
    ...en.projectsPage,
    labels: {
      context: 'Contexto',
      constraints: 'Restricciones',
      system: 'Sistema',
      outcome: 'Resultado',
      whyItMatters: 'Por qué importa',
      viewRepository: 'Ver repositorio'
    },
    eyebrow: 'Casos',
    title: 'Pruebas basadas en experiencia para trabajo backend operativo.',
    intro:
      'Un consultor backend no puede depender solo de capturas. La prueba útil está en el contexto, el diseño del sistema, los trade-offs y el tipo de problema operativo que realmente resolvió.',
    commercialAnchor: {
      ...en.projectsPage.commercialAnchor,
      eyebrow: 'Ancla comercial',
      summary:
        'Aproximadamente 2,5 años de trabajo backend en producción dentro de un entorno e-commerce y de sistemas de negocio de alto tráfico usando C#, .NET 6/8, ASP.NET Core, EF Core, SQL Server, Docker y CI/CD.',
      points: [
        'Construcción y mantenimiento de APIs ASP.NET Core en producción',
        'Optimización de consultas SQL e índices con evidencia repetida de alrededor del 25 % de mejora',
        'Trabajo con integraciones de pago como Klarna y PayPal',
        'Trabajo con integraciones logísticas o de estado de pedido como DPD y GLS',
        'Refactorización de backend legado con SOLID y hábitos de arquitectura más claros'
      ]
    },
    themes: [
      {
        title: 'Realismo operativo',
        description:
          'El trabajo más fuerte aquí trata de inventario, reservas, integraciones, reportes y workflows que importan más allá de una demo.'
      },
      {
        title: 'Arquitectura antes que maquillaje',
        description:
          'El énfasis está en la forma del backend, el flujo de datos, los límites de servicio y la mantenibilidad más que en listas superficiales de funcionalidades.'
      },
      {
        title: 'Amplitud sin perder identidad',
        description:
          'El portfolio se mueve entre .NET, Python, automatización y herramientas cercanas al dispositivo manteniendo la misma disciplina de estructura y claridad.'
      }
    ]
  },
  projects: [
    {
      ...en.projects[0],
      subtitle: 'Plataforma de inventario para pequeños negocios',
      context:
        'Los pequeños negocios suelen perder tiempo y confianza porque el stock se controla manualmente, la visibilidad es débil y los reportes son demasiado frágiles para apoyar decisiones.',
      constraints:
        'El sistema debía ser lo bastante simple para uso real de negocio y al mismo tiempo modelar bien flujos de inventario, categorías, reportes y exportaciones.',
      system:
        'Construido con .NET 8, ASP.NET Core Razor Pages, EF Core, SQL Server, límites por capas, soporte para exportación CSV y Excel y una estructura pensada para mantenimiento a largo plazo.',
      outcome:
        'El proyecto de tesis y de ownership de producto más sólido del portfolio, validado con feedback de más de 10 pequeños empresarios y anclado en un problema operativo real.',
      whyItMatters:
        'Esto demuestra que el trabajo está guiado por dolor de negocio y claridad de sistema, no por copiar un stack tutorial.',
      signals: ['Validado por más de 10 dueños', 'Flujos de inventario', 'Arquitectura por capas']
    },
    {
      ...en.projects[1],
      subtitle: 'Backend retail multi-tenant centrado en reservas',
      context:
        'Las plataformas retail necesitan más que una tienda. Necesitan separación de roles, gobierno de vendedores, lógica de reservas y un backend capaz de coordinar múltiples actores.',
      constraints:
        'El dominio tenía que soportar flujos de cliente, administrador y vendedor manteniendo el sistema coherente como una sola plataforma operativa.',
      system:
        'Backend retail tenant-aware diseñado con .NET 8 minimal APIs, EF Core, persistencia SQL y aplicaciones cliente separadas conectadas a una única fuente de verdad.',
      outcome:
        'Muestra pensamiento de plataforma, arquitectura orientada a roles y soltura con comercio basado en workflows más allá de simples pantallas de catálogo.',
      whyItMatters:
        'Es la señal más fuerte de que puedo pensar en sistemas y límites, no solo en pantallas aisladas.',
      signals: ['Pensamiento de plataforma', 'Ciclo de vida de reservas', 'Diseño tenant-aware']
    },
    {
      ...en.projects[2],
      subtitle: 'API de reservas y reglas de negocio',
      context:
        'Disponibilidad, estado de reservas, filtros, precios y lógica de booking se vuelven frágiles cuando se tratan como CRUD superficial en lugar de un dominio real.',
      constraints:
        'El servicio debía preservar claridad backend mientras soportaba procesamiento intenso en SQL, autenticación y lógica de workflow.',
      system:
        'Backend .NET por capas con diseño de API estructurado, persistencia basada en SQL, separación de lógica de negocio y límites de servicio mantenibles.',
      outcome:
        'Un buen ejemplo de trabajo backend de complejidad media donde las transiciones de estado y las reglas de negocio importan más que la cantidad de endpoints.',
      whyItMatters:
        'Los clientes con sistemas de booking, workflow o estado pesado necesitan exactamente este tipo de disciplina backend.',
      signals: ['Workflows de reservas', 'Backend de reglas de negocio', 'Servicios estructurados']
    },
    {
      ...en.projects[3],
      subtitle: 'Servicio backend en Python con hoja de ruta productiva',
      context:
        'El trabajo moderno de servicios necesita más que un endpoint rápido. Necesita validación, estructura modular y una ruta clara desde MVP hasta higiene de producción.',
      constraints:
        'El proyecto debía mantenerse ligero para moverse rápido, pero ordenado para testing, packaging, CI y escalado futuro.',
      system:
        'Construido con FastAPI, Pydantic, flujo de autenticación con JWT, wiring compartido de dependencias y una hoja de ruta explícita hacia tests, Docker, packaging y escalado con base de datos.',
      outcome:
        'Representa la parte Python de la oferta de consultoría en su mejor versión: metódica, orientada a servicios y construida con madurez operativa.',
      whyItMatters:
        'No es experimentación aleatoria. Muestra una vía de consultoría para servicios Python, backends de automatización y sistemas de soporte cercanos a IA.',
      signals: ['Diseño de servicios FastAPI', 'Validación y autenticación', 'Disciplina de roadmap']
    },
    {
      ...en.projects[4],
      subtitle: 'Diagnóstico, automatización y experimentos cercanos a mecatrónica',
      context:
        'No toda la ingeniería útil ocurre en productos web pulidos. Parte del mayor apalancamiento viene del diagnóstico, la automatización y entender lo que los sistemas hacen por debajo de la UI.',
      constraints:
        'Estas herramientas debían interactuar con dispositivos, redes o entornos restringidos y no solo con capas estándar de aplicación.',
      system:
        'Uso de Python, ADB, Scapy, flujos tipo Nmap, MQTT y MicroPython sobre dispositivos ESP para automatizar tareas, inspeccionar sistemas y explorar mensajería orientada a dispositivos.',
      outcome:
        'Muestra el borde de mecatrónica y diagnóstico detrás del perfil: más cerca del SO, la red y el comportamiento real de sistemas.',
      whyItMatters:
        'Demuestra amplitud en automatización y pensamiento sistémico sin perder la misma disciplina de ingeniería.',
      signals: ['Diagnóstico y tooling', 'Scripting orientado a red', 'Experimentación embebida']
    }
  ],
  expertise: {
    ...en.expertise,
    sectionLabels: {
      packages: 'Paquetes',
      metrics: 'Métricas',
      bestFit: 'Encaje ideal',
      approach: 'Enfoque'
    },
    eyebrow: 'Servicios y paquetes',
    title: 'Ofertas de consultoría construidas alrededor de problemas backend operativos.',
    intro:
      'La práctica es más fuerte cuando arquitectura, lógica de workflow, integraciones y fiabilidad de datos importan más que el churn superficial de funcionalidades.',
    serviceGroups: [
      {
        title: 'Inventario y plataformas internas',
        description:
          'Para equipos que necesitan inventario, reportes, administración o sistemas internos de workflow en los que los operadores puedan confiar.',
        items: [
          'Flujos de stock, producto y categorías',
          'Herramientas de reporte, exportación y visibilidad interna',
          'Interfaces internas y de administración orientadas a roles',
          'Estructura backend diseñada para mantenimiento a largo plazo'
        ]
      },
      {
        title: 'Reservas, pedidos y backends multirol',
        description:
          'Para productos donde la lógica de negocio vive en transiciones de estado, datos compartidos y múltiples actores tocando el mismo workflow.',
        items: [
          'Lógica de reservas y booking',
          'Separación de roles entre cliente, vendedor, operador y administrador',
          'Diseño backend guiado por estado',
          'Modelado de dominio intensivo en workflows'
        ]
      },
      {
        title: 'Rendimiento, integraciones y limpieza',
        description:
          'Para equipos con un backend existente que es lento, frágil, demasiado complejo o demasiado riesgoso para seguir parcheándolo a ciegas.',
        items: [
          'Optimización e indexación en SQL Server',
          'Trabajo con integraciones de pago y logística',
          'Refactorización de backend legado',
          'Revisiones de arquitectura y flujo de datos'
        ]
      },
      {
        title: 'Servicios Python y automatización',
        description:
          'Para servicios de soporte, herramientas internas, diagnóstico y automatización donde Python es la forma más rápida y clara de crear apalancamiento.',
        items: [
          'Servicios con FastAPI y Flask',
          'Scripts de automatización y tooling interno',
          'Flujos de diagnóstico y análisis',
          'Scripting orientado a red y dispositivos'
        ]
      }
    ],
    packageTitle: 'Puntos de partida productizados',
    packageIntro:
      'Estas ofertas existen para que el primer engagement sea más claro y menos riesgoso que una propuesta abierta y difusa.',
    packages: [
      {
        title: 'Auditoría de salud del sistema',
        description:
          'Una revisión enfocada de la arquitectura backend, el flujo de datos, las integraciones y los cuellos de botella.',
        bullets: [
          'Ideal cuando el sistema se siente lento, frágil o confuso',
          'Identifica mejoras rápidas y riesgos estructurales más profundos',
          'Útil antes de un rebuild, refactor o decisión de contratación'
        ]
      },
      {
        title: 'Sprint de modernización backend',
        description:
          'Un engagement corto centrado en una zona dolorosa: rendimiento, lógica de workflow o una integración poco fiable.',
        bullets: [
          'Ideal cuando un área genera fricción operativa repetida',
          'Combina limpieza técnica con implementación concreta',
          'Deja una estructura más clara que la que encontró'
        ]
      },
      {
        title: 'Arquitecto backend fraccional',
        description:
          'Acompañamiento backend senior continuo para equipos que necesitan claridad arquitectónica y un socio técnico fuerte sin contratar full-time todavía.',
        bullets: [
          'Ideal para founders o equipos de producto entre etapas de crecimiento',
          'Apoya planificación, implementación y alineación con stakeholders',
          'Convierte incertidumbre en decisiones técnicas más claras'
        ]
      }
    ],
    metricsTitle: 'Métricas de ingeniería que importan',
    metrics: [
      {
        title: 'Latencia de API y consultas',
        description:
          'El rendimiento importa porque un backend lento crea fricción de usuario y retraso operativo. La evidencia más fuerte aquí apunta a mejoras de alrededor del 25 % en SQL.'
      },
      {
        title: 'Confianza al cambiar',
        description:
          'Testing, límites más claros y cambios pequeños y seguros reducen el miedo a tocar el backend cada vez que debe evolucionar.'
      },
      {
        title: 'Fiabilidad de integraciones',
        description:
          'Pagos, logística y APIs de terceros suelen esconder la inestabilidad. El objetivo no es solo conectarse, sino comportarse bien cuando algo falla.'
      },
      {
        title: 'Visibilidad operativa',
        description:
          'Reportes, exportaciones, trazabilidad y claridad interna importan porque los equipos no pueden operar bien si el sistema da poca retroalimentación.'
      }
    ],
    whoIHelpTitle: 'Clientes y equipos con mejor encaje',
    whoIHelp: [
      'Pequeños negocios que ya superaron hojas de cálculo o procesos manuales frágiles',
      'Equipos de producto con backends .NET lentos o frágiles',
      'Founders que necesitan claridad backend antes de escalar un producto o contratar un equipo',
      'Equipos que necesitan mejor arquitectura y límites de sistema más limpios'
    ],
    processTitle: 'Cómo trabajo',
    process: [
      {
        title: 'Mapear el problema de negocio',
        description:
          'Empiezo desde el dolor operativo, no solo desde el ticket, para que el trabajo técnico siga atado a un resultado real.'
      },
      {
        title: 'Trazar la forma del sistema',
        description:
          'Observo flujo de datos, puntos de fallo, dependencias, límites y restricciones bajo las que el sistema realmente opera.'
      },
      {
        title: 'Diseñar para mantenibilidad',
        description:
          'La solución debe seguir siendo entendible y extensible después del primer pase de implementación.'
      },
      {
        title: 'Entregar con claridad',
        description:
          'La implementación se acompaña de comunicación, documentación y decisiones que hacen más rápido el siguiente cambio, no más lento.'
      }
    ],
    differentiatorsTitle: 'Qué hace diferente esta oferta',
    differentiators: [
      'Delivery liderado por el fundador en lugar de abstracción estilo agencia',
      'Experiencia backend real en producción, no solo proyectos pulidos',
      'Pensamiento sistémico influido por mecatrónica que mejora el juicio arquitectónico',
      'Comunicación multilingüe y experiencia enseñando que fortalecen la colaboración'
    ],
    focusTitle: 'Dirección actual',
    focus: [
      'Sistemas backend con conciencia de seguridad',
      'Automatización para análisis y soporte operativo',
      'Herramientas de red y diagnóstico',
      'Entornos de producto y plataforma técnicamente exigentes'
    ]
  },
  contact: {
    ...en.contact,
    metaTitle: 'Contacto',
    metaDescription:
      'Contacta con OT Systems Engineering sobre consultoría backend, revisiones de sistemas, limpieza de integraciones y software con workflows complejos.',
    eyebrow: 'Inicia la conversación',
    title: 'Cuéntame qué se rompe, qué va lento o qué es difícil de confiar.',
    lead:
      'El mejor primer mensaje es simple: cuéntame dónde duele el backend hoy, qué debería hacer el sistema y qué tipo de colaboración estás buscando.',
    fitTitle: 'Proyectos ideales',
    fitList: [
      'Backends de inventario, pedidos, reservas y reportes',
      'Limpieza de integraciones de pago, logística o APIs de terceros',
      'Revisión de cuellos de botella en SQL y flujo de datos',
      'Revisión de arquitectura antes de un rebuild mayor o un nuevo impulso de producto'
    ],
    contactMethods: [
      { label: 'Correo', value: 'oreste.twizeyimana99@gmail.com', href: 'mailto:oreste.twizeyimana99@gmail.com' },
      { label: 'Teléfono', value: '+48 572 170 919', href: 'tel:+48572170919' },
      { label: 'GitHub', value: 'github.com/stere8', href: 'https://github.com/stere8/' },
      { label: 'LinkedIn', value: 'twizeyimana-o-2302a410a', href: 'https://www.linkedin.com/in/twizeyimana-o-2302a410a' }
    ],
    directContactTitle: 'Contacto directo',
    discoveryTitle: 'Qué ocurre en la llamada',
    discoveryIntro:
      'Si reservar es más fácil que escribir un mensaje largo, la llamada de descubrimiento es la vía más rápida para convertir un problema difuso del backend en un plan más claro.',
    discoveryBullets: [
      'Identificamos el flujo afectado, el punto de presión del sistema y la urgencia.',
      'Te explico qué revisaría primero y qué tipo de colaboración encaja mejor.',
      'Sales con claridad práctica, incluso si el siguiente paso es pequeño.'
    ],
    scheduleButtonLabel: 'Agendar llamada de descubrimiento',
    closing:
      'Si una llamada corta es más fácil que un mensaje largo, reserva directamente y llegaré preparado para hablar del sistema, los cuellos de botella y el mejor siguiente paso.'
  }
};

export default profileContentEs;
