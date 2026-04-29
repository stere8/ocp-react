import en from '../../profileContent.en';

const projectsPage = {
    ...en.projectsPage,
    labels: {
      context: 'Kontekst',
      constraints: 'Ograniczenia',
      system: 'System',
      outcome: 'Efekt',
      whyItMatters: 'Dlaczego to ważne',
      viewRepository: 'Zobacz repozytorium'
    },
    eyebrow: 'Case studies',
    title: 'Dowody oparte na doświadczeniu dla operacyjnej pracy backendowej.',
    intro:
      'Konsultant backendowy nie może opierać się wyłącznie na zrzutach ekranu. Użyteczny dowód leży w kontekście, konstrukcji systemu, kompromisach i typie problemu operacyjnego, który naprawdę został rozwiązany.',
    commercialAnchor: {
      ...en.projectsPage.commercialAnchor,
      eyebrow: 'Kotwica komercyjna',
      summary:
        'Około 2,5 roku pracy backendowej w produkcji w środowisku e-commerce i systemów biznesowych o dużym ruchu, z użyciem C#, .NET 6/8, ASP.NET Core, EF Core, SQL Server, Dockera i CI/CD.',
      points: [
        'Budowa i utrzymanie API ASP.NET Core w warunkach produkcyjnych',
        'Optymalizacja zapytań SQL i indeksów z powtarzającą się poprawą wydajności rzędu 25%',
        'Praca nad integracjami płatności takimi jak Klarna i PayPal',
        'Praca nad integracjami logistycznymi lub statusami zamówień jak DPD i GLS',
        'Refaktoryzacja backendu legacy z użyciem SOLID i czytelniejszych praktyk architektonicznych'
      ]
    },
    themes: [
      {
        title: 'Realizm operacyjny',
        description:
          'Najmocniejsza praca dotyczy magazynu, rezerwacji, integracji, raportowania i workflowów, które mają znaczenie daleko poza demo.'
      },
      {
        title: 'Architektura przed polerowaniem',
        description:
          'Nacisk jest położony na kształt backendu, przepływ danych, granice usług i maintainability, a nie na powierzchowne listy funkcji.'
      },
      {
        title: 'Szerokość bez utraty tożsamości',
        description:
          'Portfolio porusza się między .NET, Pythonem, automatyzacją i narzędziami bliżej urządzeń, zachowując tę samą dyscyplinę struktury i klarowności.'
      }
    ]
  };

export default projectsPage;
