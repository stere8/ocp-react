import en from '../../profileContent.en';

const projects = [
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
  ];

export default projects;
