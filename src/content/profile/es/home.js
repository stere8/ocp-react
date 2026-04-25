import en from '../../profileContent.en';

const home = {
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
  };

export default home;
