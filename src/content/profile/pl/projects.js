import en from '../../profileContent.en';

const projects = [
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
  ];

export default projects;
