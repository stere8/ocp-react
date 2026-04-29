import en from '../../profileContent.en';

const expertise = {
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
  };

export default expertise;
