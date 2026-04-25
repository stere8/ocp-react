import en from '../../profileContent.en';

const site = {
    ...en.site,
    booking: {
      ...en.site.booking,
      title: 'Umów rozmowę wstępną',
      intro:
        'Ta krótka rozmowa ma szybko zmniejszyć niejasność. Patrzymy na realny problem backendowy, workflow, którego dotyczy, oraz na to, czy następnym krokiem powinien być audyt, krótki sprint czy większa implementacja.',
      highlights: [
        'Skupiamy się na realnym bólu systemu, a nie na generycznym skrypcie sprzedażowym.',
        'Możesz przyjść z chaotycznym workflowem, wolnym backendem albo kruchą integracją.',
        'Jeśli jest dopasowanie, wychodzisz z dużo jaśniejszym następnym krokiem.'
      ],
      iframeTitle: 'Kalendarz rezerwacji Oracle Consults',
      footerNote: 'Jeśli wolisz otworzyć kalendarz w osobnej karcie, użyj bezpośredniego linku.',
      directLinkLabel: 'Otwórz kalendarz w nowej karcie',
      stickyEyebrow: 'Potrzebujesz szybkiej jasności?',
      stickyLabel: 'Umów rozmowę'
    },
    tagline: 'Konsulting backendowy prowadzony przez założyciela dla oprogramowania operacyjnego',
    location: 'Bydgoszcz, Polska',
    availability: 'Dostępny zdalnie w Europie i międzynarodowo',
    seoTitle: 'Konsulting systemów backendowych',
    seoDescription:
      'Konsulting backendowy prowadzony przez założyciela dla systemów magazynowych, rezerwacji, integracji, raportowania i oprogramowania operacyjnego, oparty na realnym doświadczeniu .NET i myśleniu systemowym.'
  };

export default site;
