import en from '../../profileContent.en';

const contact = {
    ...en.contact,
    metaTitle: 'Contact',
    metaDescription:
      'Contactez Oracle Consults pour du conseil backend, des revues système, la remise en ordre d’intégrations et des logiciels riches en workflows.',
    eyebrow: 'Commencer la conversation',
    title: 'Dites-moi ce qui casse, ralentit ou reste difficile à fiabiliser.',
    lead:
      'Le meilleur premier message est simple : expliquez où le backend fait mal aujourd’hui, ce que le système doit faire et le type de collaboration recherché.',
    fitTitle: 'Projets bien adaptés',
    fitList: [
      'Backends d’inventaire, de commandes, de réservations et de reporting',
      'Nettoyage d’intégrations paiement, logistique ou API tierces',
      'Revue des goulets SQL et des flux de données',
      'Revue d’architecture avant une refonte plus large ou une nouvelle poussée produit'
    ],
    contactMethods: [
      { label: 'Email', value: 'oreste.twizeyimana99@gmail.com', href: 'mailto:oreste.twizeyimana99@gmail.com' },
      { label: 'Téléphone', value: '+48 572 170 919', href: 'tel:+48572170919' },
      { label: 'GitHub', value: 'github.com/stere8', href: 'https://github.com/stere8/' },
      { label: 'LinkedIn', value: 'twizeyimana-o-2302a410a', href: 'https://www.linkedin.com/in/twizeyimana-o-2302a410a' }
    ],
    directContactTitle: 'Contact direct',
    discoveryTitle: 'Ce qui se passe pendant l’appel',
    discoveryIntro:
      'Si réserver est plus simple que rédiger un long message, l’appel découverte est le moyen le plus rapide de transformer un problème backend flou en plan plus net.',
    discoveryBullets: [
      'Nous identifions le workflow touché, le point de pression du système et le niveau d’urgence.',
      'J’explique ce que j’examinerais d’abord et le type d’intervention le plus pertinent.',
      'Vous repartez avec une clarté concrète, même si la prochaine étape reste modeste.'
    ],
    scheduleButtonLabel: 'Réserver un appel découverte',
    closing:
      'Si un court appel est plus simple qu’un long message, réservez directement et je viendrai préparé pour parler du système, des goulets d’étranglement et du meilleur prochain pas.'
  };

export default contact;
