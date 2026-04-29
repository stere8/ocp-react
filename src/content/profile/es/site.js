import en from '../../profileContent.en';

const site = {
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
      iframeTitle: 'Calendario de reservas de Oracle Consults',
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
  };

export default site;
