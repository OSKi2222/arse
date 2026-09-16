import type { Dictionary } from "./index";

export const en: Dictionary = {
  meta: {
    title: "Energy Sector Regulatory Authority",
    description:
      "ARSE regulates the energy sector in Burkina Faso: it protects users and operators, sets tariffs, settles disputes and reports to the Prime Minister.",
  },

  site: {
    fullName: "Energy Sector Regulatory Authority",
    hoursLabel: "Monday – Friday, 7:30 am – 4:00 pm",
  },

  nav: {
    contact: "Contact us",
    menu: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Home",
    mainNavigation: "Main navigation",
    languageLabel: "Language",
    items: [
      { key: "home", label: "Home", href: "/", desc: "Back to the ARSE home page.", children: [] },
      {
        key: "arse",
        label: "ARSE",
        href: "/arse/presentation/",
        desc: "An independent administrative authority working towards a regulated, transparent and sustainable energy sector.",
        children: [
          { label: "Overview", href: "/arse/presentation/" },
          { label: "History", href: "/arse/historique/" },
          { label: "Mission", href: "/arse/mission/" },
          { label: "Powers", href: "/arse/attributions/" },
          { label: "Organisation", href: "/arse/organisation/" },
          { label: "Careers", href: "/arse/recrutement/" },
        ],
      },
      {
        key: "documentation",
        label: "Documentation",
        href: "/documentation/",
        desc: "Reports, bulletins, decisions, orders, laws and decrees governing the energy sector.",
        children: [
          { label: "Reports", href: "/documentation/rapports/" },
          { label: "Bulletins", href: "/documentation/bulletins/" },
          { label: "Decisions", href: "/documentation/decisions/" },
          { label: "Orders", href: "/documentation/arretes/" },
          { label: "Laws", href: "/documentation/lois/" },
          { label: "Decrees", href: "/documentation/decrets/" },
        ],
      },
      {
        key: "actualite",
        label: "News",
        href: "/actualite/",
        desc: "Features, editorials, interviews and recent activities of the Authority.",
        children: [
          { label: "Activities", href: "/actualite/activite/" },
          { label: "Features", href: "/actualite/dossier/" },
          { label: "Editorials", href: "/actualite/editorial/" },
          { label: "Interviews", href: "/actualite/interview/" },
        ],
      },
      {
        key: "consommateur",
        label: "Consumers",
        href: "/consommateur/",
        desc: "Your rights, remedies and practical information as an energy sector user.",
        children: [],
      },
      {
        key: "contact",
        label: "Contact",
        href: "/contact/",
        desc: "ARSE contact details, Ouagadougou headquarters and official social media.",
        children: [],
      },
    ],
  },

  hero: {
    kicker: "Energy sector under continuous regulation",
    lines: [
      [{ text: "A" }, { text: " regulated", highlight: true }, { text: "," }],
      [{ text: "transparent and sustainable" }],
      [{ text: "energy sector" }],
    ],
    lede: "Explore the ARSE 2025 activity report, a reflection of its achievements and its commitment to a high-performing, sustainable energy sector.",
    cta: "Read the 2025 report",
    counterLabel: "National output — 2024",
    imageAlt: "Technicians working on a power line in Burkina Faso",
  },

  manifesto:
    "The Energy Sector Regulatory Authority is an independent administrative authority with legal personality and financial and management autonomy. It regulates the sector, protects users and operators, sets tariffs, settles disputes and reports to the Prime Minister.",

  missions: {
    kicker: "Our powers",
    heading: "What the Authority does",
    intro: "Four levers defined by law, in service of a reliable and fair public energy service.",
    scrollHint: "Scroll",
    outroTitle: "All of ARSE's powers",
    outroText:
      "The full scope of responsibilities entrusted to the Authority by the law on the general regulation of the energy sector.",
    outroCta: "View details",
    items: [
      {
        title: "Regulate the sector",
        text: "Oversee energy generation, transmission and distribution activities across the entire national territory.",
        alt: "Engineer analysing energy production data",
      },
      {
        title: "Protect users",
        text: "Guarantee fair access, just tariffs and quality service for consumers as well as sector operators.",
        alt: "Electricity distribution network in Burkina Faso",
      },
      {
        title: "Set tariffs",
        text: "Determine and revise the tariff schedules applicable to energy sector operators.",
        alt: "Technical meeting around a solar panel",
      },
      {
        title: "Settle disputes",
        text: "Investigate and arbitrate disputes between operators, or between operators and users of the public energy service.",
        alt: "ARSE working session",
      },
    ],
  },

  stats: {
    kicker: "The sector in figures",
    heading: "2024 energy production data",
    labels: [
      "National electricity output in 2024",
      "Private output fed into the grid",
      "Share of thermal energy",
      "Share of solar energy",
    ],
  },

  president: {
    kicker: "Chairman's message",
    role: "Chairman of the Regulatory Board",
    imageAlt: "The Chairman of the ARSE Regulatory Board",
    quote:
      "On behalf of the Regulatory Board and the entire ARSE team, I welcome you to our website, a space dedicated to information, transparency and the promotion of a high-performing, equitable and sustainable energy sector.",
  },

  publications: {
    heading: "Reports, journals and official bulletins",
    cta: "All documentation",
    items: [
      { title: "2024 activity report", type: "Report" },
      { title: "2023 activity report", type: "Report" },
      { title: "Le Régulateur no. 014", type: "Journal" },
      { title: "Official bulletin no. 13", type: "Bulletin" },
    ],
  },

  news: {
    heading: "Latest news from ARSE",
    cta: "All news",
    items: [
      {
        title:
          "Electricity grid code: ARSE strengthens ownership among stakeholders in Nakambé, Nazinon and Goulmou",
        dateLabel: "15 September 2026",
        category: "Activity",
      },
      {
        title: "Consumer protection: ARSE brings together seven regulators around best practices",
        dateLabel: "14 August 2026",
        category: "Feature",
      },
      {
        title: "Case processing times: ARSE develops a framework to improve responsiveness",
        dateLabel: "12 August 2026",
        category: "Editorial",
      },
      {
        title: "Electricity grid code: ARSE raises awareness among stakeholders in Guiriko",
        dateLabel: "24 August 2026",
        category: "Activity",
      },
    ],
  },

  cta: {
    heading: "A question or a complaint?",
    text: "ARSE listens to users and operators of the energy sector. Contact our team for any information request.",
    primary: "Contact us",
  },

  footer: {
    rights: "All rights reserved.",
    columns: [
      {
        title: "Resources",
        links: [
          { label: "Orders", href: "/documentation/arretes/" },
          { label: "Decisions", href: "/documentation/decisions/" },
          { label: "Official bulletin", href: "/documentation/bulletins/" },
          { label: "ARSE journal", href: "/documentation/journal/" },
          { label: "Consumers", href: "/consommateur/" },
        ],
      },
      {
        title: "News",
        links: [
          { label: "Features", href: "/actualite/dossier/" },
          { label: "Editorials", href: "/actualite/editorial/" },
          { label: "Interviews", href: "/actualite/interview/" },
          { label: "Hearings", href: "/actualite/audience/" },
          { label: "Press releases", href: "/actualite/communique/" },
        ],
      },
      {
        title: "Useful links",
        links: [
          { label: "ANEREE", href: "https://aneree.bf/", external: true },
          { label: "SONABEL", href: "https://www.sonabel.bf/", external: true },
          { label: "Ministry of Energy", href: "https://energie.gov.bf/", external: true },
          { label: "ABER", href: "https://aber.bf/", external: true },
        ],
      },
      {
        title: "Other",
        links: [
          { label: "Partners", href: "/partenaires/" },
          { label: "Careers", href: "/arse/recrutement/" },
          { label: "Cookie policy", href: "/politique-cookies/" },
          { label: "Terms of use", href: "/conditions-utilisation/" },
        ],
      },
    ],
  },

  common: {
    readMore: "Read more",
    download: "Download",
    consult: "View",
    backTo: "Back to",
    viewAll: "View all",
    source: "Official document — source: arse.bf",
  },

  pages: {
    presentation: {
      kicker: "ARSE",
      title: "Overview",
      lede: "An independent administrative authority, with legal personality and financial and management autonomy.",
      intro:
        "The Energy Sector Regulatory Authority (ARSE) is an independent administrative authority with legal personality and financial and management autonomy. It ensures the regulation, oversight and monitoring of the activities of energy sector operators.",
      quote: "ARSE, an independent authority, regulates and oversees the energy sector in Burkina Faso.",
      contextTitle: "A strengthened legal framework",
      context:
        "The Government of Burkina Faso reformed the electricity sector through Law No. 027-2007/AN of 20 November 2007, before extending regulation to the entire energy sector with the law of 20 April 2017.",
      visionTitle: "2027 Vision",
      vision:
        "By 2027, ARSE will have built its reputation and brand image nationally and established itself as a benchmark regulator in the sub-region.",
      valuesTitle: "Our values",
      values: ["Professionalism", "Confidentiality", "Anticipating innovation", "Teamwork and solidarity", "Partnership"],
    },

    historique: {
      kicker: "ARSE",
      title: "History",
      lede: "Two major reforms shaped Burkina Faso's energy sector and gave rise to ARSE.",
      milestones: [
        {
          year: "2007",
          title: "Law No. 027-2007/AN of 20 November 2007",
          text:
            "The Government of Burkina Faso reformed the electricity sector through this law, which changed the structure of the electricity industry by promoting efficiency and quality of service to users through competition, increasing supply to meet demand. This law created the Electricity Sub-sector Regulatory Authority (ARSE), an independent administrative authority attached to the Office of the Prime Minister and enjoying financial autonomy.",
        },
        {
          year: "2017",
          title: "Law of 20 April 2017",
          text:
            "Burkina Faso adopted a new energy law aimed at resolving the imbalance between citizens' electricity demand and the supply of the main operator, Sonabel. Its key innovations: regulating the entire energy sector, excluding the hydrocarbons sub-sector; taking into account the community provisions for the sub-regional electricity market; removing market segmentation and the single-buyer model; allowing certain eligible customers to source electricity from the supplier of their choice, within or outside national territory; introducing provisions to promote renewable energy and energy efficiency; expanding the regulator's powers to the entire energy sector — ARSE became the Energy Sector Regulatory Authority — and setting out its funding arrangements.",
        },
      ],
    },

    mission: {
      kicker: "ARSE",
      title: "Mission",
      lede: "ARSE regulates the energy sector, protects users and operators, sets tariffs, settles disputes, and reports annually to the Prime Minister.",
      items: [
        "Ensure compliance with legislative and regulatory texts governing the energy sector",
        "Safeguard the interests of energy public service users",
        "Protect the rights of energy sector operators",
        "Propose tariffs applicable in the energy sector to the State",
        "Settle disputes between energy sector stakeholders",
        "Ensure the overall financial balance of the energy sector",
      ],
      accountabilityTitle: "Accountability",
      accountability:
        "Each year, the Chairman of ARSE submits a report to the Prime Minister on the Authority's activities for the previous year. A copy of this report is sent to the Minister in charge of energy, to the State's administrative oversight bodies, and to the Court of Auditors.",
    },

    attributions: {
      kicker: "ARSE",
      title: "Powers",
      lede: "A dual power, advisory and decision-making, granted to the Authority by the law on the general regulation of the energy sector.",
      consultativeTitle: "Advisory power",
      consultativeIntro: "ARSE issues a simple opinion in the following cases:",
      consultative: [
        "Draft legislative and regulatory texts relating to the sector",
        "Investment programmes submitted to it by the ministry in charge of energy",
        "The requisition of self-generation facilities",
      ],
      decisionTitle: "Decision-making power",
      decisionIntro: "ARSE issues a binding opinion in the following cases:",
      decision: [
        "The granting, renewal, revision, modification or withdrawal of concessions, licences and authorisations",
        "Third-party access conditions to networks",
        "Specifications applicable to energy sector operators",
      ],
    },

    organisation: {
      kicker: "ARSE",
      title: "Organisation",
      lede: "ARSE is organised around four bodies that ensure the governance, coordination and delivery of its regulatory mandate.",
      organs: [
        {
          title: "Regulatory Board",
          text: "ARSE's collegial decision-making body, responsible for adopting the Authority's opinions, decisions and recommendations in the exercise of its regulatory duties.",
        },
        {
          title: "General Secretariat",
          text: "The body in charge of ARSE's administrative coordination and the operational implementation of the Regulatory Board's decisions.",
        },
        {
          title: "Operational Directorates",
          text: "The directorates responsible for the technical implementation of the energy sector's regulatory duties: tariff-setting, operator oversight and dispute resolution.",
        },
        {
          title: "Cross-functional Directorates and Services",
          text: "The directorates and support services that keep the Authority running: human resources, finance, communications and information systems.",
        },
      ],
    },

    recrutement: {
      kicker: "ARSE",
      title: "Careers",
      lede: "Join ARSE and help build a high-performing, sustainable energy sector that serves everyone.",
      jobsTitle: "Jobs",
      jobsText:
        "The Energy Sector Regulatory Authority (ARSE) takes pride in surrounding itself with qualified talent. Spontaneous applications can be sent by email.",
      internshipsTitle: "Internships",
      internshipsText:
        "ARSE also welcomes academic or professional interns wishing to train in the field of regulation.",
      proceduresTitle: "Application file",
      procedures: ["An application letter", "A cover letter", "A CV"],
      contactTitle: "Send an application",
    },

    documentation: {
      kicker: "Documentation",
      title: "Documentation",
      lede: "Reports, bulletins, journal, laws, decrees, decisions and orders governing the energy sector in Burkina Faso.",
      categories: [
        { label: "Activity reports", href: "/documentation/rapports/", desc: "The Authority's annual record of achievements." },
        { label: "Official bulletins", href: "/documentation/bulletins/", desc: "The reference publication for regulatory acts." },
        { label: "ARSE journal", href: "/documentation/journal/", desc: "Le Régulateur de l'énergie — news and features from the sector." },
        { label: "Laws", href: "/documentation/lois/", desc: "The legislative texts governing the energy sector." },
        { label: "Decrees", href: "/documentation/decrets/", desc: "Implementing decrees adopted in the Council of Ministers." },
        { label: "Decisions", href: "/documentation/decisions/", desc: "ARSE's decisions on matters within its jurisdiction." },
        { label: "Orders", href: "/documentation/arretes/", desc: "Ministerial and inter-ministerial orders." },
      ],
    },
    rapports: { kicker: "Documentation", title: "Activity reports", lede: "The annual record of ARSE's achievements and its commitment to a high-performing, sustainable energy sector." },
    bulletins: { kicker: "Documentation", title: "Official bulletins", lede: "The reference publication for tracking the energy regulator's activities and decisions." },
    journal: { kicker: "Documentation", title: "ARSE Journal — Le Régulateur", lede: "Explore our features and stay informed on developments in the energy sector." },
    lois: { kicker: "Documentation", title: "Laws", lede: "The legislative texts on the general regulation of the energy sector in Burkina Faso." },
    decrets: { kicker: "Documentation", title: "Decrees", lede: "Implementing decrees adopted in the Council of Ministers to enforce sector regulation." },
    decisions: { kicker: "Documentation", title: "Decisions", lede: "Decisions issued by ARSE on matters within its jurisdiction." },
    arretes: { kicker: "Documentation", title: "Orders", lede: "Ministerial and inter-ministerial orders applicable to the energy sector." },

    actualiteHub: {
      kicker: "News",
      title: "News",
      lede: "Features, editorials, interviews and recent activities of the Energy Sector Regulatory Authority.",
      categories: [
        { label: "Activity", href: "/actualite/activite/", desc: "Workshops, field missions and actions carried out by ARSE." },
        { label: "Feature", href: "/actualite/dossier/", desc: "In-depth analysis of the sector's major topics." },
        { label: "Editorial", href: "/actualite/editorial/", desc: "ARSE's perspective on energy sector developments." },
        { label: "Interview", href: "/actualite/interview/", desc: "Conversations with energy sector stakeholders." },
      ],
    },
    activite: { kicker: "News", title: "Activity", lede: "Workshops, field missions and recent actions by ARSE with sector stakeholders." },
    dossier: { kicker: "News", title: "Feature", lede: "In-depth analysis of the major topics shaping the energy sector." },
    editorial: { kicker: "News", title: "Editorial", lede: "ARSE's perspective on current events and challenges in the energy sector." },
    interview: { kicker: "News", title: "Interview", lede: "Conversations with energy sector stakeholders and partners.", empty: "No articles to display at this time." },

    consommateur: {
      kicker: "Consumers",
      title: "Your rights as a user",
      lede: "Protecting energy public service users is one of ARSE's core missions.",
      intro:
        "As an energy sector user, you are entitled to fair access, just tariffs and quality service. ARSE ensures these rights are respected and can be petitioned for any dispute with a sector operator.",
      rightsTitle: "What regulation guarantees",
      rights: [
        "Fair access to energy services across the entire territory",
        "Tariffs set and monitored by the Authority, never arbitrary",
        "Quality service from licensed operators",
        "The right to appeal to ARSE in case of a dispute with an operator",
      ],
      resourcesTitle: "Useful resources",
    },

    contact: {
      kicker: "Contact",
      title: "Contact us",
      lede: "For any information or concern regarding the energy sector, contact ARSE directly.",
      formTitle: "Send us a message",
      fields: {
        name: "Your name",
        phone: "Phone",
        email: "Your email",
        locality: "Your locality",
        province: "Your province",
        subject: "Subject",
        message: "Your message",
      },
      submit: "Send message",
      formNote: "Form to be connected to an email delivery service (e.g. Formspree) before going live.",
      success: "Message validated. (Demo mode: no data was actually sent.)",
      sending: "Sending…",
      infoTitle: "Contact details",
      hoursTitle: "Business hours",
    },

    partenaires: {
      kicker: "Partners",
      title: "Our partners",
      lede: "ARSE works alongside public institutions in Burkina Faso's energy sector.",
      items: [
        { name: "ANEREE", desc: "National Agency for Renewable Energy and Energy Efficiency", href: "https://aneree.bf/" },
        { name: "SONABEL", desc: "National Electricity Company of Burkina Faso", href: "https://www.sonabel.bf/" },
        { name: "Ministry of Energy", desc: "Ministry in charge of energy, mines and quarries", href: "https://www.energie-mines.gov.bf/accueil" },
        { name: "ABER", desc: "Burkinabè Rural Electrification Agency", href: "https://aber.bf/" },
      ],
    },

    cookies: {
      kicker: "Legal information",
      title: "Cookie policy",
      lede: "How the ARSE website uses cookies, and how you can manage your preferences.",
      sections: [
        { title: "Strictly necessary cookies", text: "Essential for the site to function properly; they cannot be disabled." },
        { title: "Performance cookies", text: "They measure site traffic and help analyse usage in order to improve it." },
        { title: "Functionality cookies", text: "They remember your preferences for a smoother experience across visits." },
        { title: "Third-party cookies", text: "Some embedded content (videos, social media) may set its own cookies." },
        { title: "Consent", text: "An information banner is shown on your first visit. Your consent is valid for a maximum of 13 months." },
        { title: "Management", text: "You can adjust your cookie preferences at any time through your browser settings." },
        { title: "Data protection", text: "Your data is processed in accordance with Burkinabè law. It is never sold or transferred to third parties." },
      ],
    },

    terms: {
      kicker: "Legal information",
      title: "Terms of use",
      lede: "The rules governing use of the official website of the Energy Sector Regulatory Authority.",
      sections: [
        { title: "Purpose of the site", text: "This site presents ARSE, its missions, official publications and news." },
        { title: "Intellectual property", text: "All content (text, images, documents) published on this site is the property of ARSE, unless stated otherwise." },
        { title: "Use of documents", text: "Official documents (laws, decrees, decisions, orders) are made available for information purposes. Only publications in the Official Gazette are authoritative." },
        { title: "Liability", text: "ARSE strives to ensure the accuracy of published information but cannot be held liable for errors or omissions." },
        { title: "External links", text: "This site may contain links to third-party sites over which ARSE has no control." },
      ],
    },
  },
};
