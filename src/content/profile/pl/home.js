import en from '../../profileContent.en';

const home = {
    ...en.home,
    title: 'Buduję systemy backendowe, którym można zaufać operacyjnie.',
    intro:
      'Konsulting prowadzony przez założyciela dla oprogramowania obsługującego magazyn, zamówienia, rezerwacje, raportowanie, integracje i wewnętrzne workflowy, od których firmy naprawdę zależą.',
    heroSupport:
      'Były Backend Engineer w Oponeo.pl z ponad 2,5 roku doświadczenia w produkcyjnym .NET, poważnym portfolio systemowym i mechatronicznym sposobem myślenia o ograniczeniach, niezawodności i trybach awarii.',
    focusAreas: [
      'Systemy backendowe w .NET i ASP.NET Core',
      'Optymalizacja SQL i przepływu danych',
      'Automatyzacja, API i diagnostyka w Pythonie',
      'Jasna komunikacja dla biznesu i zespołów technicznych'
    ],
    ctaLabel: 'Umów 15-minutową rozmowę',
    secondaryCtaLabel: 'Zobacz case studies',
    bookingHint:
      'Rozmowa jest krótka, praktyczna i bez presji: porządkujemy problem operacyjny, ograniczenia i najlepszy następny krok.',
    sectionLabels: {
      credibility: 'Wiarygodność',
      problemsSolved: 'Jakie problemy rozwiązuję',
      story: 'Historia',
      packages: 'Pakiety',
      proof: 'Dowody',
      metrics: 'Metryki',
      communication: 'Komunikacja',
      resources: 'Materiały',
      contact: 'Kontakt',
      bestFor: 'Najlepsze dla',
      outcome: 'Efekt'
    },
    trustTitle: 'Oprogramowanie operacyjne, nie generyczny freelancing',
    trustSummary:
      'Najmocniejsza historia jest tutaj praktyczna i konkretna: realna praca produkcyjna, realne projekty biznesowe i oferta konsultingowa zbudowana wokół workflowów, które kosztują czas i pieniądze, gdy zawodzą.',
    trustPoints: [
      'Komercyjna praca backendowa w środowisku e-commerce o dużym ruchu w Oponeo.pl',
      'StockIT zweryfikowany feedbackiem od ponad 10 właścicieli małych firm',
      'Powtarzająca się evidencja około 25% poprawy wydajności SQL w pracy produkcyjnej',
      'Komunikacja wielojęzyczna i doświadczenie dydaktyczne wzmacniające klarowność delivery'
    ],
    proofBar: [
      { value: 'Oponeo.pl', label: 'były backend engineer w produkcyjnym e-commerce' },
      { value: '~25%', label: 'powtarzalna poprawa wydajności SQL w dowodach komercyjnych' },
      { value: '10+ właścicieli', label: 'walidacja workflowów magazynowych StockIT' },
      { value: '4,26/5,0', label: 'B.Eng. z Informatyki i Mechatroniki' },
      { value: '5 języków', label: 'angielski, francuski, polski, hiszpański i kinyarwanda' }
    ],
    problemTitle: 'Problemy, które pomagam rozwiązać',
    problemIntro:
      'Klienci nie kupują backendu dla samego backendu. Kupują go dlatego, że magazyn pokazuje błędne dane, rezerwacje są kruche, integracje zawodzą albo system zwalnia wtedy, gdy biznes naprawdę zaczyna na nim polegać.',
    problems: [
      {
        title: 'Magazyn i widoczność stanów',
        description:
          'Backendy i narzędzia wewnętrzne do produktów, stanów magazynowych, raportów i eksportów tam, gdzie liczy się codzienna dokładność i widoczność.'
      },
      {
        title: 'Rezerwacje i workflowy wieloról',
        description:
          'Systemy, w których klienci, administratorzy, sprzedawcy lub operatorzy współdzielą jedno źródło prawdy, a przejścia stanów muszą być dobrze zaprojektowane.'
      },
      {
        title: 'Integracje i tarcie w legacy',
        description:
          'Integracje płatności, logistyki i API, w których niezawodność, kształt danych i maintainability znaczą więcej niż szczęśliwa ścieżka z dema.'
      },
      {
        title: 'Automatyzacja i narzędzia wewnętrzne',
        description:
          'Usługi i skrypty w Pythonie, które usuwają powtarzalną pracę, poprawiają widoczność operacyjną i wspierają lepsze decyzje.'
      }
    ],
    storyTitle: 'Dlaczego buduję systemy biznesowe',
    storyCards: [
      {
        title: 'Motywacja osobista',
        text:
          'Dorastałem w otoczeniu małych biznesów i widziałem bezpośrednio, jak luki magazynowe, procesy ręczne i słaba widoczność tworzą codzienną frikcję dla właścicieli i operatorów.'
      },
      {
        title: 'StockIT jako dowód',
        text:
          'Dlatego StockIT ma znaczenie. To nie był generyczny projekt studencki. To była poważna próba rozwiązania problemu operacyjnego poprzez uporządkowane oprogramowanie i walidację z użytkownikami.'
      },
      {
        title: 'Mentalność mechatroniczna',
        text:
          'Moje zaplecze informatyczne i mechatroniczne sprawia, że myślę systemowo: granice, zależności, stan, diagnostyka i długoterminowa niezawodność.'
      }
    ],
    packageTitle: 'Jak można zacząć współpracę',
    packageIntro:
      'Aby zmniejszyć niepewność projektu, pierwszy krok nie musi oznaczać dużej implementacji. To czytelne, lżejsze sposoby rozpoczęcia współpracy.',
    packages: [
      {
        ...en.home.packages[0],
        title: 'Audyt zdrowia systemu',
        format: 'Jednorazowy przegląd',
        idealFor: 'Dla zespołów, których backend wydaje się wolny, kruchy albo trudny do rozwijania.',
        deliverables: [
          'Przegląd architektury, przepływu danych, punktów nacisku integracyjnego i wąskich gardeł',
          'Priorytetyzowana lista największych ryzyk technicznych i szybkich wygranych',
          'Pisemmna rekomendacja do użycia wewnątrz zespołu lub dalszej współpracy ze mną'
        ],
        outcome: 'Więcej jasności zanim czas i budżet pójdą w złą stronę.'
      },
      {
        ...en.home.packages[1],
        title: 'Sprint integracji i wydajności',
        format: 'Krótka, skupiona współpraca',
        idealFor: 'Dla firm z wolnymi zapytaniami, kruchymi integracjami albo backendowymi workflowami, które stale generują ból operacyjny.',
        deliverables: [
          'Ukierunkowane usprawnienia SQL i przepływów backendowych',
          'Refaktor najbardziej kruchego obszaru integracji lub workflowu',
          'Konkretna dokumentacja stanu przed i po zmianach'
        ],
        outcome: 'Mniejszy zakres z widoczną poprawą techniczną i operacyjną.'
      },
      {
        ...en.home.packages[2],
        title: 'Fractional Backend Architect',
        format: 'Ciągłe wsparcie doradcze lub delivery',
        idealFor: 'Dla founderów i zespołów, które potrzebują senioralnego partnera backendowego bez natychmiastowego zatrudniania full-time.',
        deliverables: [
          'Guidance architektoniczny i kierunek implementacji',
          'Przegląd priorytetów, ryzyk i decyzji ewolucyjnych systemu',
          'Wsparcie komunikacyjne między osobami technicznymi i nietechnicznymi'
        ],
        outcome: 'Lepsze decyzje backendowe, mniej przeróbek i większa pewność techniczna.'
      }
    ],
    featuredTitle: 'Wybrane dowody',
    featuredIntro:
      'Najszybszy sposób zrozumienia oferty to spojrzenie na rodzaj pracy, która już za nią stoi.',
    featuredProof: [
      {
        ...en.home.featuredProof[0],
        title: 'Komercyjna kotwica: Oponeo.pl',
        summary:
          'Ponad 2,5 roku pracy backendowej w .NET w środowisku e-commerce o dużym ruchu, obejmującej API, SQL, integracje, refaktoryzację legacy, testy i wsparcie produkcyjne.',
        linkLabel: 'Zobacz dowód komercyjny'
      },
      {
        ...en.home.featuredProof[1],
        title: 'Platforma magazynowa StockIT',
        summary:
          'System magazynowy powstały z realnego bólu małych firm i zwalidowany feedbackiem od ponad 10 właścicieli.',
        linkLabel: 'Przeczytaj case study StockIT'
      },
      {
        ...en.home.featuredProof[2],
        title: 'Workflowy rezerwacji i platformy',
        summary:
          'DreamNDine oraz platforma EStore pokazują biegłość w separacji ról, logice domenowej, stanie rezerwacji i backendach koordynujących realne operacje.',
        linkLabel: 'Przeglądaj case studies'
      }
    ],
    metricsTitle: 'Metryki, które mają znaczenie',
    metrics: [
      {
        title: 'Wydajność zapytań',
        description:
          'Powtarzająca się evidencja komercyjna wskazuje na około 25% poprawy SQL dzięki tuningowi, indeksowaniu i lepszej strukturze dostępu do danych.'
      },
      {
        title: 'Dokładność workflowów',
        description:
          'Systemy magazynowe, rezerwacyjne i raportowe mają wartość tylko wtedy, gdy operatorzy mogą ufać temu, co system pokazuje i w jakim jest stanie.'
      },
      {
        title: 'Niezawodność integracji',
        description:
          'Płatności, logistyka i zewnętrzne API to miejsca, w których kruche systemy najczęściej zawodzą. Skupiam się na granicach i obsłudze awarii, a nie tylko na happy path.'
      },
      {
        title: 'Oszczędność czasu operacyjnego',
        description:
          'Dobry backend ogranicza powtarzalną pracę ręczną, poprawia widoczność i zostawia zespołowi mniej codziennego chaosu.'
      }
    ],
    communicationTitle: 'Styl komunikacji i delivery',
    communication:
      'Nie tylko buduję oprogramowanie. Uczę też programowania i języków, co wzmocniło moją zdolność tłumaczenia złożonych systemów, dokumentowania decyzji i dopasowywania komunikacji do różnych poziomów technicznych i kulturowych.',
    resourcesTitle: 'Przydatne następne kroki dla ostrożnych klientów',
    resourcesIntro:
      'Nie każdy chce zaczynać od projektu od razu. Te materiały pomagają ocenić dopasowanie, lepiej zrozumieć charakter pracy i zacząć od niższego progu wejścia.',
    resources: [
      {
        kicker: 'Insights',
        title: 'Przeczytaj notatki backendowe i wpisy techniczne',
        summary:
          'Przejrzyj praktyczne materiały o wydajności backendu, integracjach, automatyzacji, diagnostyce i projektowaniu oprogramowania operacyjnego.',
        link: '/blog',
        linkLabel: 'Otwórz materiały',
        external: false
      },
      {
        kicker: 'Checklist',
        title: 'Pobierz checklistę audytu backendu',
        summary:
          'Krótka checklista do wychwytywania kruchych workflowów, wolnych przepływów danych, ryzykownych integracji i problemów architektonicznych zanim staną się droższe.',
        link: '/doc/backend-health-audit-checklist.md',
        linkLabel: 'Pobierz checklistę',
        external: true,
        download: true
      },
      {
        kicker: 'Dopasowanie',
        title: 'Zobacz formaty współpracy i najlepiej dopasowane projekty',
        summary:
          'Sprawdź strukturę pakietów, typy zespołów, którym pomagam najczęściej, oraz jak zwykle zaczyna się audyt lub sprint skoncentrowany na jednym problemie.',
        link: '/expertise',
        linkLabel: 'Przejrzyj usługi',
        external: false
      }
    ],
    contactTitle: 'Powiedz mi, co jest wolne, kruche albo trudne do zaufania',
    contactText:
      'Najlepiej dopasowane projekty obejmują backendy złożone z workflowów, narzędzia wewnętrzne, systemy magazynowe lub rezerwacyjne, integracje, tuning SQL i przeglądy architektoniczne dla zespołów potrzebujących wyraźniejszego kierunku backendowego.',
    contactPrimaryLabel: 'Skontaktuj się',
    contactSecondaryLabel: 'Umów rozmowę wstępną'
  };

export default home;
