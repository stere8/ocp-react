import en from '../../profileContent.en';

const site = {
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
      iframeTitle: 'Calendrier de réservation Oracle Consults',
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
  };

export default site;
