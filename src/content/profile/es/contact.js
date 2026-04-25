import en from '../../profileContent.en';

const contact = {
    ...en.contact,
    metaTitle: 'Contacto',
    metaDescription:
      'Contacta con Oracle Consults sobre consultoría backend, revisiones de sistemas, limpieza de integraciones y software con workflows complejos.',
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
  };

export default contact;
