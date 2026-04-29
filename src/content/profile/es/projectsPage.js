import en from '../../profileContent.en';

const projectsPage = {
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
  };

export default projectsPage;
