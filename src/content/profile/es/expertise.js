import en from '../../profileContent.en';

const expertise = {
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
  };

export default expertise;
