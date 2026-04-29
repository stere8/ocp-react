const projects = [
    {
      title: 'StockIT',
      subtitle: 'Inventory platform for small businesses',
      context:
        'Small businesses often lose time and confidence because stock is tracked manually, visibility is weak, and reporting is too fragile to support decisions.',
      constraints:
        'The system needed to be simple enough for real business use while still modeling inventory flows, categories, reporting, and export logic cleanly.',
      system:
        'Built with .NET 8, ASP.NET Core Razor Pages, EF Core, SQL Server, layered boundaries, CSV and Excel export support, and testing-minded structure for long-term maintainability.',
      outcome:
        'The strongest thesis and product-ownership project in the portfolio, validated with feedback from more than 10 small business owners and grounded in a real operational problem.',
      whyItMatters:
        'This is proof that the work is driven by business pain and system clarity, not by copying a tutorial stack.',
      signals: [
        'Validated by 10+ owners',
        'Inventory workflows',
        'Layered architecture'
      ],
      technologies: ['ASP.NET Core 8', 'Razor Pages', 'Entity Framework Core', 'SQL Server', 'Bootstrap', 'Docker', 'Azure'],
      repository: 'https://github.com/stere8/stockit'
    },
    {
      title: 'Stere8 EStore Platform',
      subtitle: 'Reservation-first multi-tenant retail backend',
      context:
        'Retail platforms need more than a storefront. They need role separation, vendor governance, reservation logic, and one backend model capable of coordinating multiple actors.',
      constraints:
        'The domain had to support customer, admin, and vendor flows while keeping the system coherent as one operational platform.',
      system:
        'Designed a tenant-aware retail backend around .NET 8 minimal APIs, EF Core, SQL persistence, and separate client applications tied to one source of truth.',
      outcome:
        'Shows platform thinking, role-aware architecture, and comfort with workflow-heavy commerce beyond simple product listing screens.',
      whyItMatters:
        'This is the strongest signal that I can think in systems and boundaries, not only in isolated app pages.',
      signals: [
        'Platform thinking',
        'Reservation lifecycle',
        'Tenant-aware design'
      ],
      technologies: ['.NET 8', 'ASP.NET Minimal APIs', 'Entity Framework Core', 'SQL Server', 'Next.js', 'React', 'TypeScript'],
      repository: ''
    },
    {
      title: 'DreamNDine',
      subtitle: 'Reservation and business-rule API',
      context:
        'Availability, booking state, filtering, pricing, and reservation logic become brittle fast when they are treated like thin CRUD instead of a real domain problem.',
      constraints:
        'The service needed to preserve backend clarity while supporting SQL-heavy processing, authentication, and workflow logic.',
      system:
        'Built as a layered .NET backend with structured API design, SQL-backed persistence, business logic separation, and maintainable service boundaries.',
      outcome:
        'A good example of mid-complexity backend work where state transitions and business rules matter more than endpoint count.',
      whyItMatters:
        'Clients with booking, workflow, or state-heavy systems need this exact kind of backend discipline.',
      signals: [
        'Reservation workflows',
        'Business-rule backend',
        'Structured services'
      ],
      technologies: ['.NET 8', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'Swagger'],
      repository: 'https://github.com/stere8/DreamNDine'
    },
    {
      title: 'FaceAPI',
      subtitle: 'Python backend service with production roadmap',
      context:
        'Modern service work needs more than a quick endpoint demo. It needs validation, modular structure, and a clear path from MVP to production hygiene.',
      constraints:
        'The project had to stay lean enough to move fast while still being organized for testing, packaging, CI, and future scale.',
      system:
        'Built with FastAPI, Pydantic, JWT-based auth flow, shared dependency wiring, and an explicit roadmap toward tests, Docker, packaging, and database-backed scale.',
      outcome:
        'Represents the Python side of the consulting offer at its best: methodical, service-oriented, and built with operational maturity in mind.',
      whyItMatters:
        'This is not random experimentation. It shows a consulting path for Python services, automation backends, and AI-adjacent support systems.',
      signals: [
        'FastAPI service design',
        'Validation and auth',
        'Roadmap discipline'
      ],
      technologies: ['Python 3.12', 'FastAPI', 'Pydantic v2', 'JWT', 'Uvicorn', 'Docker roadmap'],
      repository: ''
    },
    {
      title: 'Systems, Device, and Network Tooling',
      subtitle: 'Diagnostics, automation, and mechatronics-adjacent experiments',
      context:
        'Not all useful engineering happens in polished web products. Some of the highest leverage work comes from diagnostics, automation, and understanding what systems are doing below the UI.',
      constraints:
        'These tools had to interact with devices, networks, or constrained environments rather than only standard application layers.',
      system:
        'Used Python, ADB, Scapy, Nmap-oriented workflows, MQTT, and MicroPython on ESP-class devices to automate tasks, inspect systems, and explore device-aware messaging.',
      outcome:
        'Shows the mechatronics and diagnostics edge behind the consulting profile: closer to the OS, the network layer, and real-world system behavior.',
      whyItMatters:
        'It proves range in automation and systems thinking without losing the same engineering discipline.',
      signals: [
        'Diagnostics and tooling',
        'Network-aware scripting',
        'Embedded experimentation'
      ],
      technologies: ['Python', 'ADB', 'Scapy', 'Nmap', 'MicroPython', 'MQTT', 'ESP32', 'ESP8266'],
      repository: ''
    }
  ];

export default projects;
