const expertise = {
    sectionLabels: {
      packages: 'Packages',
      metrics: 'Metrics',
      bestFit: 'Best Fit',
      approach: 'Approach'
    },
    eyebrow: 'Services and Packages',
    title: 'Consulting offers built around operational backend problems.',
    intro:
      'The practice is strongest where architecture, workflow logic, integrations, and data reliability matter more than surface-level feature churn.',
    serviceGroups: [
      {
        title: 'Inventory and Internal Platforms',
        description:
          'For teams that need inventory, reporting, admin, or internal workflow systems that operators can actually trust.',
        items: [
          'Stock, product, and category workflows',
          'Reporting, export, and internal visibility tools',
          'Role-aware internal and admin interfaces',
          'Backend structure designed for long-term maintenance'
        ]
      },
      {
        title: 'Reservations, Orders, and Multi-Role Backends',
        description:
          'For products where the business logic lives in state transitions, shared data, and multiple actors touching the same workflow.',
        items: [
          'Reservation and booking logic',
          'Customer, vendor, operator, and admin role separation',
          'State-driven backend design',
          'Workflow-heavy domain modeling'
        ]
      },
      {
        title: 'Performance, Integrations, and Cleanup',
        description:
          'For teams with an existing backend that is slow, brittle, overcomplicated, or too risky to keep patching blindly.',
        items: [
          'SQL Server query tuning and indexing',
          'Payment and logistics integration work',
          'Legacy backend refactoring',
          'Architecture and data-flow reviews'
        ]
      },
      {
        title: 'Python Services and Automation',
        description:
          'For supporting services, internal tools, diagnostics, and automation where Python is the fastest and clearest way to create leverage.',
        items: [
          'FastAPI and Flask service work',
          'Automation scripts and internal tooling',
          'Diagnostics and analysis workflows',
          'Network and device-aware scripting'
        ]
      }
    ],
    packageTitle: 'Productized starting points',
    packageIntro:
      'These offers exist to make the first engagement clearer and lower risk than a vague open-ended build.',
    packages: [
      {
        title: 'System Health Audit',
        description:
          'A focused review of your backend architecture, data flow, integrations, and bottlenecks.',
        bullets: [
          'Best when the system feels slow, brittle, or confusing',
          'Identifies quick wins and deeper structural risks',
          'Useful before a rebuild, refactor, or hiring decision'
        ]
      },
      {
        title: 'Backend Modernization Sprint',
        description:
          'A short engagement aimed at one painful backend area such as performance, workflow logic, or an unreliable integration.',
        bullets: [
          'Best when a single area is creating repeated operational friction',
          'Pairs technical cleanup with concrete implementation',
          'Leaves a clearer structure than it started with'
        ]
      },
      {
        title: 'Fractional Backend Architect',
        description:
          'Ongoing senior backend guidance for teams that need architectural clarity and a strong technical partner without a full-time hire yet.',
        bullets: [
          'Best for founders or product teams between growth stages',
          'Supports planning, implementation, and stakeholder alignment',
          'Turns uncertainty into clearer technical decisions'
        ]
      }
    ],
    metricsTitle: 'Engineering metrics that matter',
    metrics: [
      {
        title: 'API and query latency',
        description:
          'Performance matters because slow backends create user friction and operational lag. My strongest repeated evidence here is about 25% SQL performance improvement in production work.'
      },
      {
        title: 'Change confidence',
        description:
          'Testing, clearer boundaries, and smaller safe changes reduce the fear of touching the backend every time something needs to evolve.'
      },
      {
        title: 'Integration reliability',
        description:
          'Payments, logistics, and third-party APIs are often where instability hides. The goal is not only connection, but dependable behavior when things go wrong.'
      },
      {
        title: 'Operational visibility',
        description:
          'Reporting, exports, auditability, and internal clarity matter because teams cannot operate well if the system gives weak feedback.'
      }
    ],
    whoIHelpTitle: 'Best-fit clients and teams',
    whoIHelp: [
      'Small businesses that have outgrown spreadsheets or fragile manual workflows',
      'Product teams with slow or brittle .NET backends',
      'Founders who need backend clarity before scaling a product or hiring a team',
      'Teams that need stronger architecture and cleaner system boundaries'
    ],
    processTitle: 'How I work',
    process: [
      {
        title: 'Map the business problem',
        description:
          'I start from the operational pain point, not just the ticket description, so the technical work stays tied to a real outcome.'
      },
      {
        title: 'Trace the system shape',
        description:
          'I look at data flow, failure points, dependencies, boundaries, and the constraints the system is actually operating under.'
      },
      {
        title: 'Design for maintainability',
        description:
          'The solution should remain understandable and extendable after the first implementation pass.'
      },
      {
        title: 'Deliver with clarity',
        description:
          'Implementation is paired with communication, documentation, and decisions that help the next change go faster instead of slower.'
      }
    ],
    differentiatorsTitle: 'What makes this offer different',
    differentiators: [
      'Founder-led delivery rather than agency-style abstraction',
      'Real production backend experience, not only project polish',
      'Mechatronics-shaped systems thinking that improves architectural judgment',
      'Multilingual communication and teaching ability that strengthen collaboration'
    ],
    focusTitle: 'Current direction',
    focus: [
      'Security-aware backend systems',
      'Automation for analysis and operational support',
      'Network and diagnostics tooling',
      'Technically demanding product and platform environments'
    ]
  };

export default expertise;
