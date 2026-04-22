import en from './profileContent.en';

const profileContentPl = {
  ...en,
  site: {
    ...en.site,
    tagline: 'Konsulting backendowy prowadzony przez założyciela dla oprogramowania operacyjnego',
    location: 'Bydgoszcz, Polska',
    availability: 'Dostępny zdalnie w Europie i międzynarodowo',
    seoTitle: 'Konsulting systemów backendowych',
    seoDescription:
      'Konsulting backendowy prowadzony przez założyciela dla systemów magazynowych, rezerwacji, integracji, raportowania i oprogramowania operacyjnego, oparty na realnym doświadczeniu .NET i myśleniu systemowym.'
  },
  footer: {
    ...en.footer,
    phoneLabel: 'Tel.',
    emailLabel: 'Email'
  },
  home: {
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
    sectionLabels: {
      credibility: 'Wiarygodność',
      problemsSolved: 'Jakie problemy rozwiązuję',
      story: 'Historia',
      packages: 'Pakiety',
      proof: 'Dowody',
      metrics: 'Metryki',
      communication: 'Komunikacja',
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
    contactTitle: 'Powiedz mi, co jest wolne, kruche albo trudne do zaufania',
    contactText:
      'Najlepiej dopasowane projekty obejmują backendy złożone z workflowów, narzędzia wewnętrzne, systemy magazynowe lub rezerwacyjne, integracje, tuning SQL i przeglądy architektoniczne dla zespołów potrzebujących wyraźniejszego kierunku backendowego.',
    contactPrimaryLabel: 'Skontaktuj się',
    contactSecondaryLabel: 'Umów rozmowę wstępną'
  },
  about: {
    ...en.about,
    metaTitle: 'Profil',
    metaDescription:
      'Profil prowadzony przez założyciela: Oreste Twizeyimana jako inżynier backendu z doświadczeniem .NET w produkcji, mechatronicznym myśleniem systemowym i mocną komunikacją.',
    eyebrow: 'Profil założyciela',
    title: 'Inżynier stojący za OT Systems Engineering',
    lead:
      'Ta praktyka jest founder-led, ponieważ jej najmocniejszym aktywem nie jest szeroka tożsamość agencyjna, lecz konkretne połączenie backendowego delivery w produkcji, myślenia systemowego i jasnej komunikacji opartej na realnej pracy.',
    intro: [
      'Najbardziej stabilna interpretacja całego materiału nie brzmi „generyczny developer”. To inżynier backendowy od produkcji, myślenia systemowego, mentoringu i budowy oprogramowania osadzonego w realnych problemach operacyjnych.',
      'To ważne, ponieważ oferta konsultingowa na tej stronie nie jest marketingowym wymysłem. To skondensowana wersja tego, co spójnie potwierdzają doświadczenie, projekty i profil.'
    ],
    quickFactsTitle: 'W skrócie',
    quickFacts: [
      'Na co dzień w Bydgoszczy, z otwartością na współpracę zdalną, hybrydową i opcje relokacyjne.',
      'Komercyjny rdzeń: C#, .NET, ASP.NET Core, EF Core, SQL Server, integracje, testy i wsparcie produkcyjne.',
      'Kierunek rozwoju: Python, FastAPI, Flask, automatyzacja, diagnostyka i narzędzia blisko systemu.',
      'Wyróżniki: mechatronika, komunikacja wielojęzyczna, tutoring i myślenie systemowe.'
    ],
    sections: [
      {
        title: 'Co wyróżnia ten profil',
        paragraphs: [
          'Wiele wczesnoetapowych profili ma jedną lub dwie mocne przesłanki. Ten łączy realne doświadczenie backendowe w produkcji, poważną pracę dyplomową osadzoną w realnym problemie biznesowym, sensowną szerokość w Pythonie oraz ponadprzeciętną komunikację.',
          'Rezultatem jest konsultant, który potrafi wejść w techniczny detal bez gubienia problemu biznesowego ani ludzkiej strony delivery.'
        ]
      },
      {
        title: 'Dlaczego software operacyjny wraca tak często',
        paragraphs: [
          'Najsilniejsza osobista nić bierze się z bezpośredniego kontaktu z problemami magazynowymi i workflowowymi w małych firmach. Dlatego praca ciągle wraca do stanów magazynowych, rezerwacji, raportowania, automatyzacji i systemów ograniczających ręczną frikcję.',
          'To bardziej praktyczna empatia niż abstrakcyjna fascynacja: software powinien robić skomplikowane operacje bardziej niezawodnymi dla ludzi, którzy nimi zarządzają.'
        ]
      },
      {
        title: 'Fundament komercyjny',
        paragraphs: [
          'Komercyjne centrum ciężkości pozostaje Oponeo.pl, gdzie praca konsekwentnie wskazuje na API w ASP.NET Core, EF Core, SQL Server, integracje płatności i logistyki, tuning wydajności, refaktoryzację legacy, delivery Agile, testy i wsparcie produkcyjne.',
          'To doświadczenie ma znaczenie, bo potwierdza zdolność pracy wewnątrz systemów z realnym ruchem, realnymi zależnościami i realnymi konsekwencjami operacyjnymi.'
        ]
      },
      {
        title: 'Mechatronika i myślenie systemowe',
        paragraphs: [
          'Informatyka i mechatronika wzmacniają sposób myślenia oparty na integracji, pomiarze, niezawodności, sterowaniu, ograniczeniach i trybach awarii.',
          'W konsultingu backendowym przekłada się to na lepszy osąd architektoniczny, większą ostrożność w myśleniu o granicach i trafniejsze rozumienie zachowania systemu pod realną presją.'
        ]
      },
      {
        title: 'Komunikacja i uczenie',
        paragraphs: [
          'Tutoring programistyczny i nauczanie języków nie są przypisem. Wzmacniają rozkładanie złożonych tematów, klarowność, cierpliwość i umiejętność dopasowania wyjaśnienia do konkretnego odbiorcy.',
          'To ułatwia współpracę z klientami, founderami, productem i inżynierami, którzy potrzebują wspólnego obrazu tego, co robi system i dlaczego.'
        ]
      }
    ],
    valuesTitle: 'Styl pracy',
    values: [
      'Analityczny: szukam przyczyn, zależności, ograniczeń i trybów awarii zamiast patrzeć tylko na output feature’ów.',
      'Praktyczny: preferuję pracę związaną z operacjami, raportowaniem, workflowami, integracjami i widoczną użytecznością biznesową.',
      'Zorientowany na jakość: SOLID, clean architecture, testy, CI/CD i dokumentacja są częścią delivery.',
      'Adaptacyjny: mogę poruszać się między .NET, Pythonem, tutoringiem, automatyzacją i pracą platformową bez utraty tej samej tożsamości.'
    ],
    directionTitle: 'Kierunek',
    direction: [
      'Praca backendowa i platformowa w technicznie wymagających środowiskach produktowych.',
      'Systemy biznesowe i platformy operacyjne, w których niezawodność naprawdę ma znaczenie.',
      'Narzędzia w Pythonie, automatyzacja i backend usługowy.',
      'Backend z mocniejszym naciskiem na bezpieczeństwo i diagnostykę jako przewagę rozwojową.'
    ],
    practiceNote:
      'Konsulting backendowy prowadzony przez założyciela dla oprogramowania operacyjnego. Bydgoszcz, Polska. Dostępny zdalnie w Europie i międzynarodowo.',
    closing:
      'Sednem tego profilu nie jest po prostu „lubię kodować”. To raczej: chcę sprawiać, by złożone systemy działały niezawodnie dla prawdziwych ludzi.'
  },
  projectsPage: {
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
  },
  projects: [
    {
      ...en.projects[0],
      subtitle: 'Platforma magazynowa dla małych firm',
      context:
        'Małe firmy często tracą czas i zaufanie, bo stany magazynowe są śledzone ręcznie, widoczność jest słaba, a raportowanie zbyt kruche, by wspierać decyzje.',
      constraints:
        'System musiał być wystarczająco prosty do realnego użycia biznesowego, a jednocześnie poprawnie modelować przepływy magazynowe, kategorie, raportowanie i eksport.',
      system:
        'Zbudowany w .NET 8, ASP.NET Core Razor Pages, EF Core i SQL Server, z warstwową strukturą, eksportem CSV/Excel i układem nastawionym na długoterminową utrzymywalność.',
      outcome:
        'Najmocniejszy projekt dyplomowy i ownershipowy w portfolio, zwalidowany feedbackiem od ponad 10 właścicieli małych firm i osadzony w realnym problemie operacyjnym.',
      whyItMatters:
        'To dowód, że praca wynika z realnego bólu biznesowego i klarowności systemowej, a nie z kopiowania tutorialowego stacku.',
      signals: ['Zweryfikowany przez 10+ właścicieli', 'Workflowy magazynowe', 'Architektura warstwowa']
    },
    {
      ...en.projects[1],
      subtitle: 'Wielodzierżawowy backend retail nastawiony na rezerwacje',
      context:
        'Platformy retail potrzebują więcej niż sklepu. Wymagają separacji ról, zarządzania sprzedawcami, logiki rezerwacji i backendu zdolnego koordynować wielu uczestników.',
      constraints:
        'Domena musiała wspierać przepływy klienta, administratora i sprzedawcy, utrzymując cały system jako spójną platformę operacyjną.',
      system:
        'Backend retail tenant-aware zaprojektowany wokół .NET 8 minimal APIs, EF Core, persystencji SQL i oddzielnych aplikacji klienckich połączonych z jednym źródłem prawdy.',
      outcome:
        'Pokazuje myślenie platformowe, architekturę świadomą ról i swobodę w pracy nad handlem opartym na workflowach, a nie tylko stronami katalogowymi.',
      whyItMatters:
        'To najmocniejszy sygnał, że myślę o systemach i granicach, a nie tylko o odseparowanych ekranach.',
      signals: ['Myślenie platformowe', 'Cykl życia rezerwacji', 'Projekt tenant-aware']
    },
    {
      ...en.projects[2],
      subtitle: 'API rezerwacyjne i reguły biznesowe',
      context:
        'Dostępność, stan rezerwacji, filtrowanie, cenniki i logika bookingowa szybko stają się kruche, gdy traktuje się je jak cienki CRUD zamiast prawdziwej domeny.',
      constraints:
        'Usługa musiała zachować klarowność backendu przy jednoczesnym wsparciu przetwarzania opartego o SQL, autentykacji i logiki workflowów.',
      system:
        'Warstwowy backend .NET ze strukturalnym API, persystencją SQL, separacją logiki biznesowej i maintainable granicami usług.',
      outcome:
        'Dobry przykład backendu średniej złożoności, w którym przejścia stanów i reguły biznesowe znaczą więcej niż liczba endpointów.',
      whyItMatters:
        'Klienci z systemami rezerwacji, workflowami albo złożonym stanem potrzebują dokładnie tego rodzaju dyscypliny backendowej.',
      signals: ['Workflowy rezerwacyjne', 'Backend reguł biznesowych', 'Ustrukturyzowane usługi']
    },
    {
      ...en.projects[3],
      subtitle: 'Backendowy serwis Python z roadmapą produkcyjną',
      context:
        'Współczesna praca usługowa wymaga więcej niż szybkiego endpointu. Potrzebuje walidacji, struktury modułowej i jasnej ścieżki od MVP do higieny produkcyjnej.',
      constraints:
        'Projekt musiał pozostać lekki, żeby szybko iść do przodu, a jednocześnie być uporządkowany pod testy, packaging, CI i przyszłe skalowanie.',
      system:
        'Zbudowany z FastAPI, Pydantic, JWT, współdzielonym wiringiem zależności i jawną roadmapą do testów, Dockera, packagingu i skali opartej o bazę danych.',
      outcome:
        'Reprezentuje część pythonową oferty konsultingowej w najlepszej formie: metodyczną, usługową i budowaną z dojrzałością operacyjną.',
      whyItMatters:
        'To nie jest przypadkowe eksperymentowanie. Pokazuje ścieżkę konsultingową dla usług w Pythonie, backendów automatyzacyjnych i systemów wspierających rozwiązania AI-adjacent.',
      signals: ['Projekt usług FastAPI', 'Walidacja i autentykacja', 'Dyscyplina roadmapy']
    },
    {
      ...en.projects[4],
      subtitle: 'Diagnostyka, automatyzacja i eksperymenty mechatroniczne',
      context:
        'Nie cała wartościowa inżynieria dzieje się w dopracowanych produktach webowych. Duża część dźwigni bierze się z diagnostyki, automatyzacji i rozumienia tego, co system robi pod warstwą UI.',
      constraints:
        'Te narzędzia musiały pracować z urządzeniami, sieciami lub środowiskami ograniczonymi, a nie wyłącznie ze standardową warstwą aplikacyjną.',
      system:
        'Wykorzystanie Pythona, ADB, Scapy, workflowów zbliżonych do Nmap, MQTT i MicroPython na ESP do automatyzacji zadań, inspekcji systemów i eksploracji komunikacji urządzeniowej.',
      outcome:
        'Pokazuje mechatroniczny i diagnostyczny wymiar profilu: bliżej systemu operacyjnego, warstwy sieciowej i realnego zachowania systemów.',
      whyItMatters:
        'Udowadnia szerokość w automatyzacji i myśleniu systemowym bez utraty tej samej dyscypliny inżynierskiej.',
      signals: ['Diagnostyka i tooling', 'Scripting sieciowy', 'Eksperymenty embedded']
    }
  ],
  expertise: {
    ...en.expertise,
    sectionLabels: {
      packages: 'Pakiety',
      metrics: 'Metryki',
      bestFit: 'Najlepsze dopasowanie',
      approach: 'Podejście'
    },
    eyebrow: 'Usługi i pakiety',
    title: 'Oferta konsultingowa zbudowana wokół realnych problemów backendowych.',
    intro:
      'Ta praktyka jest najsilniejsza tam, gdzie architektura, logika workflowów, integracje i niezawodność danych znaczą więcej niż powierzchowny churn funkcjonalny.',
    serviceGroups: [
      {
        title: 'Magazyn i platformy wewnętrzne',
        description:
          'Dla zespołów potrzebujących systemów magazynowych, raportowych, administracyjnych lub wewnętrznych workflowów, którym operatorzy mogą zaufać.',
        items: [
          'Workflowy stanów magazynowych, produktów i kategorii',
          'Narzędzia raportowe, eksporty i widoczność wewnętrzna',
          'Wewnętrzne i administracyjne interfejsy świadome ról',
          'Struktura backendu projektowana pod długoterminowe utrzymanie'
        ]
      },
      {
        title: 'Rezerwacje, zamówienia i backendy wieloról',
        description:
          'Dla produktów, w których logika biznesowa żyje w przejściach stanów, współdzielonych danych i wielu aktorach dotykających tego samego workflowu.',
        items: [
          'Logika rezerwacji i bookingów',
          'Separacja ról klienta, sprzedawcy, operatora i administratora',
          'Projekt backendu sterowany stanem',
          'Modelowanie domenowe bogate w workflowy'
        ]
      },
      {
        title: 'Wydajność, integracje i porządkowanie',
        description:
          'Dla zespołów z istniejącym backendem, który jest wolny, kruchy, nadmiernie skomplikowany albo zbyt ryzykowny, by dalej łatać go po omacku.',
        items: [
          'Tuning i indeksowanie SQL Server',
          'Praca z integracjami płatności i logistyki',
          'Refaktoryzacja backendu legacy',
          'Przeglądy architektury i przepływu danych'
        ]
      },
      {
        title: 'Usługi Python i automatyzacja',
        description:
          'Dla usług wspierających, narzędzi wewnętrznych, diagnostyki i automatyzacji, w których Python daje najszybszą i najczytelniejszą dźwignię.',
        items: [
          'Usługi FastAPI i Flask',
          'Skrypty automatyzacyjne i narzędzia wewnętrzne',
          'Workflowy diagnostyczne i analityczne',
          'Scripting ukierunkowany na sieć i urządzenia'
        ]
      }
    ],
    packageTitle: 'Produktowe punkty wejścia',
    packageIntro:
      'Te oferty istnieją po to, aby pierwszy engagement był bardziej klarowny i mniej ryzykowny niż otwarty, nieokreślony projekt.',
    packages: [
      {
        title: 'Audyt zdrowia systemu',
        description:
          'Skupiony przegląd architektury backendowej, przepływu danych, integracji i wąskich gardeł.',
        bullets: [
          'Najlepszy, gdy system wydaje się wolny, kruchy albo nieczytelny',
          'Wskazuje szybkie wygrane i głębsze ryzyka strukturalne',
          'Przydatny przed przebudową, refaktorem albo decyzją rekrutacyjną'
        ]
      },
      {
        title: 'Sprint modernizacji backendu',
        description:
          'Krótka współpraca ukierunkowana na jeden bolesny obszar: wydajność, logikę workflowów albo zawodną integrację.',
        bullets: [
          'Najlepszy, gdy jeden obszar generuje powtarzalną frikcję operacyjną',
          'Łączy techniczne porządkowanie z konkretną implementacją',
          'Pozostawia po sobie wyraźniejszą strukturę niż zastał'
        ]
      },
      {
        title: 'Fractional Backend Architect',
        description:
          'Stałe senioralne wsparcie backendowe dla zespołów potrzebujących klarowności architektonicznej i mocnego partnera technicznego bez zatrudnienia full-time na tym etapie.',
        bullets: [
          'Najlepsze dla founderów lub zespołów produktowych między etapami wzrostu',
          'Wspiera planowanie, implementację i alignment interesariuszy',
          'Zamienia niepewność w czytelniejsze decyzje techniczne'
        ]
      }
    ],
    metricsTitle: 'Metryki inżynierskie, które mają znaczenie',
    metrics: [
      {
        title: 'Latencja API i zapytań',
        description:
          'Wydajność ma znaczenie, bo wolny backend tworzy frikcję użytkownika i opóźnienie operacyjne. Najmocniejszy dowód tutaj to powtarzająca się poprawa SQL na poziomie około 25%.'
      },
      {
        title: 'Pewność zmian',
        description:
          'Testy, wyraźniejsze granice i małe, bezpieczne zmiany redukują strach przed dotykaniem backendu przy każdej ewolucji systemu.'
      },
      {
        title: 'Niezawodność integracji',
        description:
          'Płatności, logistyka i zewnętrzne API często kryją największą niestabilność. Celem nie jest tylko połączenie, lecz przewidywalne zachowanie wtedy, gdy coś się psuje.'
      },
      {
        title: 'Widoczność operacyjna',
        description:
          'Raportowanie, eksporty, audytowalność i klarowność wewnętrzna są istotne, bo zespół nie może dobrze operować, jeśli system daje słaby sygnał zwrotny.'
      }
    ],
    whoIHelpTitle: 'Najlepiej dopasowani klienci i zespoły',
    whoIHelp: [
      'Małe firmy, które wyrosły już z arkuszy i kruchych ręcznych procesów',
      'Zespoły produktowe z wolnymi lub niestabilnymi backendami .NET',
      'Founderzy potrzebujący klarowności backendowej przed skalowaniem produktu lub budową zespołu',
      'Zespoły potrzebujące mocniejszej architektury i czystszych granic systemowych'
    ],
    processTitle: 'Jak pracuję',
    process: [
      {
        title: 'Mapowanie problemu biznesowego',
        description:
          'Zaczynam od bólu operacyjnego, a nie tylko od opisu taska, żeby praca techniczna była związana z realnym efektem.'
      },
      {
        title: 'Czytanie kształtu systemu',
        description:
          'Patrzę na przepływ danych, punkty awarii, zależności, granice i ograniczenia, w jakich system naprawdę działa.'
      },
      {
        title: 'Projektowanie pod maintainability',
        description:
          'Rozwiązanie powinno pozostać zrozumiałe i rozszerzalne po pierwszym wdrożeniu.'
      },
      {
        title: 'Delivery z jasnością',
        description:
          'Implementacji towarzyszy komunikacja, dokumentacja i decyzje, które przyspieszają kolejną zmianę zamiast ją spowalniać.'
      }
    ],
    differentiatorsTitle: 'Co wyróżnia tę ofertę',
    differentiators: [
      'Delivery prowadzony przez założyciela, a nie agencyjna abstrakcja',
      'Realne doświadczenie backendowe w produkcji, nie tylko dopracowane projekty',
      'Mechatroniczne myślenie systemowe poprawiające osąd architektoniczny',
      'Wielojęzyczna komunikacja i doświadczenie dydaktyczne wzmacniające współpracę'
    ],
    focusTitle: 'Obecny kierunek',
    focus: [
      'Backendy bardziej świadome bezpieczeństwa',
      'Automatyzacja do analizy i wsparcia operacyjnego',
      'Narzędzia sieciowe i diagnostyczne',
      'Technicznie wymagające środowiska produktowe i platformowe'
    ]
  },
  contact: {
    ...en.contact,
    metaTitle: 'Kontakt',
    metaDescription:
      'Skontaktuj się z OT Systems Engineering w sprawie konsultingu backendowego, przeglądów systemowych, porządkowania integracji i oprogramowania bogatego w workflowy.',
    eyebrow: 'Rozpocznij rozmowę',
    title: 'Powiedz, co się psuje, co jest wolne albo czemu trudno zaufać.',
    lead:
      'Najlepsza pierwsza wiadomość jest prosta: opisz, gdzie backend boli dzisiaj, co system powinien robić i jakiego typu współpracy szukasz.',
    fitTitle: 'Najlepiej dopasowane projekty',
    fitList: [
      'Backendy do magazynu, zamówień, rezerwacji i raportowania',
      'Porządkowanie integracji płatności, logistyki i API zewnętrznych',
      'Przegląd wąskich gardeł SQL i przepływu danych',
      'Przegląd architektury przed większą przebudową albo nowym impulsem produktowym'
    ],
    contactMethods: [
      { label: 'Email', value: 'oreste.twizeyimana99@gmail.com', href: 'mailto:oreste.twizeyimana99@gmail.com' },
      { label: 'Telefon', value: '+48 572 170 919', href: 'tel:+48572170919' },
      { label: 'GitHub', value: 'github.com/stere8', href: 'https://github.com/stere8/' },
      { label: 'LinkedIn', value: 'twizeyimana-o-2302a410a', href: 'https://www.linkedin.com/in/twizeyimana-o-2302a410a' }
    ],
    directContactTitle: 'Kontakt bezpośredni',
    scheduleButtonLabel: 'Umów rozmowę wstępną',
    closing:
      'Jeśli krótka rozmowa jest wygodniejsza niż długi opis, umów ją bezpośrednio, a przyjdę przygotowany do rozmowy o systemie, wąskich gardłach i najlepszym następnym kroku.'
  }
};

export default profileContentPl;
