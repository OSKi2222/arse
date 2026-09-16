import type { Dictionary } from "./index";

export const de: Dictionary = {
  meta: {
    title: "Regulierungsbehörde für den Energiesektor",
    description:
      "Die ARSE reguliert den Energiesektor in Burkina Faso: Sie schützt Nutzer und Marktteilnehmer, legt Tarife fest, schlichtet Streitigkeiten und berichtet dem Premierminister.",
  },

  site: {
    fullName: "Regulierungsbehörde für den Energiesektor",
    hoursLabel: "Montag – Freitag, 07:30 – 16:00 Uhr",
  },

  nav: {
    contact: "Kontaktieren Sie uns",
    menu: "Menü",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    home: "Startseite",
    mainNavigation: "Hauptnavigation",
    languageLabel: "Sprache",
    items: [
      { key: "home", label: "Startseite", href: "/", desc: "Zurück zur Startseite der ARSE.", children: [] },
      {
        key: "arse",
        label: "ARSE",
        href: "/arse/presentation/",
        desc: "Eine unabhängige Verwaltungsbehörde im Dienst eines regulierten, transparenten und nachhaltigen Energiesektors.",
        children: [
          { label: "Vorstellung", href: "/arse/presentation/" },
          { label: "Geschichte", href: "/arse/historique/" },
          { label: "Auftrag", href: "/arse/mission/" },
          { label: "Befugnisse", href: "/arse/attributions/" },
          { label: "Organisation", href: "/arse/organisation/" },
          { label: "Karriere", href: "/arse/recrutement/" },
        ],
      },
      {
        key: "documentation",
        label: "Dokumentation",
        href: "/documentation/",
        desc: "Berichte, Amtsblätter, Entscheidungen, Verordnungen, Gesetze und Dekrete zur Regulierung des Energiesektors.",
        children: [
          { label: "Berichte", href: "/documentation/rapports/" },
          { label: "Amtsblätter", href: "/documentation/bulletins/" },
          { label: "Entscheidungen", href: "/documentation/decisions/" },
          { label: "Verordnungen", href: "/documentation/arretes/" },
          { label: "Gesetze", href: "/documentation/lois/" },
          { label: "Dekrete", href: "/documentation/decrets/" },
        ],
      },
      {
        key: "actualite",
        label: "Aktuelles",
        href: "/actualite/",
        desc: "Berichte, Leitartikel, Interviews und aktuelle Aktivitäten der Behörde.",
        children: [
          { label: "Aktivität", href: "/actualite/activite/" },
          { label: "Bericht", href: "/actualite/dossier/" },
          { label: "Leitartikel", href: "/actualite/editorial/" },
          { label: "Interview", href: "/actualite/interview/" },
        ],
      },
      {
        key: "consommateur",
        label: "Verbraucher",
        href: "/consommateur/",
        desc: "Ihre Rechte, Ansprüche und praktische Informationen als Nutzer des Energiesektors.",
        children: [],
      },
      {
        key: "contact",
        label: "Kontakt",
        href: "/contact/",
        desc: "Kontaktdaten der ARSE, Hauptsitz Ouagadougou und offizielle soziale Netzwerke.",
        children: [],
      },
    ],
  },

  hero: {
    kicker: "Energiesektor durchgehend reguliert",
    lines: [
      [{ text: "Ein Energiesektor," }],
      [{ text: "reguliert", highlight: true }, { text: ", transparent" }],
      [{ text: "und nachhaltig" }],
    ],
    lede: "Entdecken Sie den Tätigkeitsbericht 2025 der ARSE — Ausdruck ihrer Erfolge und ihres Engagements für einen leistungsfähigen und nachhaltigen Energiesektor.",
    cta: "Bericht 2025 lesen",
    counterLabel: "Nationale Produktion — 2024",
    imageAlt: "Techniker bei Arbeiten an einer Stromleitung in Burkina Faso",
  },

  manifesto:
    "Die Regulierungsbehörde für den Energiesektor ist eine unabhängige Verwaltungsbehörde mit eigener Rechtspersönlichkeit sowie finanzieller und organisatorischer Autonomie. Sie reguliert den Sektor, schützt Nutzer und Marktteilnehmer, legt Tarife fest, schlichtet Streitigkeiten und berichtet dem Premierminister.",

  missions: {
    kicker: "Unsere Befugnisse",
    heading: "Was die Behörde tut",
    intro: "Vier gesetzlich verankerte Handlungsfelder im Dienst eines zuverlässigen und fairen öffentlichen Energiedienstes.",
    scrollHint: "Scrollen",
    outroTitle: "Alle Befugnisse der ARSE",
    outroText: "Die detaillierten Zuständigkeiten, die der Behörde durch das Gesetz zur allgemeinen Regulierung des Energiesektors übertragen wurden.",
    outroCta: "Ansehen",
    items: [
      {
        title: "Den Sektor regulieren",
        text: "Überwachung der Produktions-, Übertragungs- und Verteilungsaktivitäten von Energie im gesamten Staatsgebiet.",
        alt: "Ingenieur bei der Analyse von Energieproduktionsdaten",
      },
      {
        title: "Nutzer schützen",
        text: "Gewährleistung eines gerechten Zugangs, fairer Tarife und eines qualitativ hochwertigen Dienstes für Verbraucher und Marktteilnehmer.",
        alt: "Stromverteilungsnetz in Burkina Faso",
      },
      {
        title: "Tarife festlegen",
        text: "Festlegung und Überarbeitung der für die Betreiber des Energiesektors geltenden Tarife.",
        alt: "Technisches Treffen rund um ein Solarpanel",
      },
      {
        title: "Streitigkeiten schlichten",
        text: "Prüfung und Schlichtung von Streitigkeiten zwischen Betreibern oder zwischen Betreibern und Nutzern des öffentlichen Energiedienstes.",
        alt: "Arbeitssitzung der ARSE",
      },
    ],
  },

  stats: {
    kicker: "Der Sektor in Zahlen",
    heading: "Daten zur Energieproduktion 2024",
    labels: [
      "Nationale Stromproduktion im Jahr 2024",
      "In das Netz eingespeiste private Produktion",
      "Anteil thermischer Energie",
      "Anteil Solarenergie",
    ],
  },

  president: {
    kicker: "Ansprache des Präsidenten",
    role: "Präsident des Regulierungsrats",
    imageAlt: "Der Präsident des Regulierungsrats der ARSE",
    quote:
      "Im Namen des Regulierungsrats und des gesamten ARSE-Teams heiße ich Sie auf unserer Website willkommen — einem Ort, der der Information, Transparenz und Förderung eines leistungsfähigen, fairen und nachhaltigen Energiesektors gewidmet ist.",
  },

  publications: {
    heading: "Berichte, Zeitschriften und amtliche Bekanntmachungen",
    cta: "Zur gesamten Dokumentation",
    items: [
      { title: "Tätigkeitsbericht 2024", type: "Bericht" },
      { title: "Tätigkeitsbericht 2023", type: "Bericht" },
      { title: "Le Régulateur Nr. 014", type: "Zeitschrift" },
      { title: "Amtsblatt Nr. 13", type: "Amtsblatt" },
    ],
  },

  news: {
    heading: "Neuigkeiten der ARSE",
    cta: "Alle Neuigkeiten",
    items: [
      {
        title: "Stromnetzkodex: ARSE stärkt die Verankerung bei den Akteuren von Nakambé, Nazinon und Goulmou",
        dateLabel: "15. September 2026",
        category: "Aktivität",
      },
      {
        title: "Verbraucherschutz: ARSE bringt sieben Regulierungsbehörden für bewährte Verfahren zusammen",
        dateLabel: "14. August 2026",
        category: "Bericht",
      },
      {
        title: "Bearbeitungsfristen: ARSE erarbeitet ein Referenzsystem zur Beschleunigung der Verfahren",
        dateLabel: "12. August 2026",
        category: "Leitartikel",
      },
      {
        title: "Stromnetzkodex: ARSE verbreitet die Inhalte bei den Akteuren der Region Guiriko",
        dateLabel: "24. August 2026",
        category: "Aktivität",
      },
    ],
  },

  cta: {
    heading: "Eine Frage oder Beschwerde?",
    text: "Die ARSE steht Nutzern und Marktteilnehmern des Energiesektors zur Verfügung. Kontaktieren Sie unser Team für jede Informationsanfrage.",
    primary: "Kontaktieren Sie uns",
  },

  footer: {
    rights: "Alle Rechte vorbehalten.",
    credits: "Konzeption: Agence UBICOM · Neugestaltung: OSKi_an_Co",
    columns: [
      {
        title: "Ressourcen",
        links: [
          { label: "Verordnungen", href: "/documentation/arretes/" },
          { label: "Entscheidungen", href: "/documentation/decisions/" },
          { label: "Amtsblatt", href: "/documentation/bulletins/" },
          { label: "ARSE-Zeitschrift", href: "/documentation/journal/" },
          { label: "Verbraucher", href: "/consommateur/" },
        ],
      },
      {
        title: "Aktuelles",
        links: [
          { label: "Bericht", href: "/actualite/dossier/" },
          { label: "Leitartikel", href: "/actualite/editorial/" },
          { label: "Interview", href: "/actualite/interview/" },
          { label: "Anhörung", href: "/actualite/audience/" },
          { label: "Pressemitteilung", href: "/actualite/communique/" },
        ],
      },
      {
        title: "Nützliche Links",
        links: [
          { label: "ANEREE", href: "https://aneree.bf/", external: true },
          { label: "SONABEL", href: "https://www.sonabel.bf/", external: true },
          { label: "Energieministerium", href: "https://energie.gov.bf/", external: true },
          { label: "ABER", href: "https://aber.bf/", external: true },
        ],
      },
      {
        title: "Weitere",
        links: [
          { label: "Partner", href: "/partenaires/" },
          { label: "Karriere", href: "/arse/recrutement/" },
          { label: "Cookie-Richtlinie", href: "/politique-cookies/" },
          { label: "Nutzungsbedingungen", href: "/conditions-utilisation/" },
        ],
      },
    ],
  },

  common: {
    readMore: "Weiterlesen",
    download: "Herunterladen",
    consult: "Ansehen",
    backTo: "Zurück zu",
    viewAll: "Alle ansehen",
    source: "Amtliches Dokument — Quelle: arse.bf",
  },

  pages: {
    presentation: {
      kicker: "Die ARSE",
      title: "Vorstellung",
      lede: "Eine unabhängige Verwaltungsbehörde mit eigener Rechtspersönlichkeit sowie finanzieller und organisatorischer Autonomie.",
      intro:
        "Die Regulierungsbehörde für den Energiesektor (ARSE) ist eine unabhängige Verwaltungsbehörde mit eigener Rechtspersönlichkeit sowie finanzieller und organisatorischer Autonomie. Sie gewährleistet die Regulierung, Kontrolle und Überwachung der Tätigkeiten der Akteure des Energiesektors.",
      quote: "Die ARSE, eine unabhängige Behörde, reguliert und überwacht den Energiesektor in Burkina Faso.",
      contextTitle: "Ein gestärkter rechtlicher Rahmen",
      context:
        "Die Regierung von Burkina Faso reformierte den Stromsektor mit dem Gesetz Nr. 027-2007/AN vom 20. November 2007, bevor sie die Regulierung mit dem Gesetz vom 20. April 2017 auf den gesamten Energiesektor ausweitete.",
      visionTitle: "Vision 2027",
      vision:
        "Bis 2027 wird die ARSE ihre Bekanntheit und ihr Markenimage auf nationaler Ebene ausgebaut haben und sich als Referenzregulierer in der Subregion etabliert haben.",
      valuesTitle: "Unsere Werte",
      values: ["Professionalität", "Vertraulichkeit", "Antizipation von Innovationen", "Teamgeist und Solidarität", "Partnerschaft"],
    },

    historique: {
      kicker: "Die ARSE",
      title: "Geschichte",
      lede: "Zwei große Reformen haben den Energiesektor Burkina Fasos geprägt und die ARSE hervorgebracht.",
      milestones: [
        {
          year: "2007",
          title: "Gesetz Nr. 027-2007/AN vom 20. November 2007",
          text:
            "Die Regierung von Burkina Faso reformierte den Stromsektor mit diesem Gesetz, das die Struktur der Stromindustrie veränderte, indem es Effizienz und Servicequalität für die Nutzer durch Wettbewerb förderte und das Angebot an die Nachfrage anpasste. Aus diesem Gesetz entsteht die Regulierungsbehörde für den Stromteilsektor (ARSE), eine unabhängige Verwaltungsbehörde, die dem Amt des Premierministers unterstellt ist und finanzielle Eigenständigkeit genießt.",
        },
        {
          year: "2017",
          title: "Gesetz vom 20. April 2017",
          text:
            "Burkina Faso erließ ein neues Energiegesetz, um das Ungleichgewicht zwischen der Stromnachfrage der Bürger und dem Angebot des Hauptbetreibers Sonabel zu beheben. Die wichtigsten Neuerungen: die Regulierung des gesamten Energiesektors mit Ausnahme des Kohlenwasserstoff-Teilsektors; die Berücksichtigung der Gemeinschaftsbestimmungen für den subregionalen Strommarkt; die Abschaffung der Marktsegmentierung und des Einheitsabnehmers; die Möglichkeit für bestimmte berechtigte Kunden, sich bei einem Lieferanten ihrer Wahl im In- oder Ausland zu versorgen; die Einführung von Bestimmungen zur Förderung erneuerbarer Energien und Energieeffizienz; die Ausweitung der Befugnisse des Regulierers auf den gesamten Energiesektor — die ARSE wird zur Regulierungsbehörde für den Energiesektor — sowie die Festlegung der Modalitäten ihrer Finanzierung.",
        },
      ],
    },

    mission: {
      kicker: "Die ARSE",
      title: "Auftrag",
      lede: "Die ARSE reguliert den Energiesektor, schützt Nutzer und Marktteilnehmer, legt Tarife fest, schlichtet Streitigkeiten und berichtet jährlich dem Premierminister.",
      items: [
        "Einhaltung der gesetzlichen und regulatorischen Texte für den Energiesektor sicherstellen",
        "Interessen der Nutzer des öffentlichen Energiedienstes wahren",
        "Rechte der Marktteilnehmer des Energiesektors schützen",
        "Dem Staat anwendbare Tarife für den Energiesektor vorschlagen",
        "Streitigkeiten zwischen den verschiedenen Akteuren des Energiesektors schlichten",
        "Über das finanzielle Gesamtgleichgewicht des Energiesektors wachen",
      ],
      accountabilityTitle: "Rechenschaftspflicht",
      accountability:
        "Jedes Jahr legt der Präsident der ARSE dem Premierminister einen Bericht über die Tätigkeiten des Vorjahres vor. Eine Kopie dieses Berichts geht an den für Energie zuständigen Minister, an die staatlichen Aufsichtsbehörden und an den Rechnungshof.",
    },

    attributions: {
      kicker: "Die ARSE",
      title: "Befugnisse",
      lede: "Eine doppelte Zuständigkeit — beratend und entscheidend —, die der Behörde durch das Gesetz zur allgemeinen Regulierung des Energiesektors übertragen wurde.",
      consultativeTitle: "Beratende Zuständigkeit",
      consultativeIntro: "Die ARSE gibt in folgenden Fällen eine einfache Stellungnahme ab:",
      consultative: [
        "Entwürfe von Gesetzes- und Verordnungstexten zum Sektor",
        "Investitionsprogramme, die ihr vom zuständigen Energieministerium vorgelegt werden",
        "Die Beschlagnahme von Eigenerzeugungsanlagen",
      ],
      decisionTitle: "Entscheidende Zuständigkeit",
      decisionIntro: "Die ARSE gibt in folgenden Fällen eine bindende Stellungnahme ab:",
      decision: [
        "Erteilung, Verlängerung, Überarbeitung, Änderung oder Entzug von Konzessionen, Lizenzen und Genehmigungen",
        "Bedingungen für den Zugang Dritter zu den Netzen",
        "Pflichtenhefte der Betreiber des Energiesektors",
      ],
    },

    organisation: {
      kicker: "Die ARSE",
      title: "Organisation",
      lede: "Die ARSE gliedert sich in vier Organe, die die Führung, Koordination und Umsetzung ihres Regulierungsauftrags sicherstellen.",
      organs: [
        {
          title: "Regulierungsrat",
          text: "Das kollegiale Entscheidungsorgan der ARSE, zuständig für die Verabschiedung von Stellungnahmen, Entscheidungen und Empfehlungen der Behörde bei der Ausübung ihrer Regulierungsaufgaben.",
        },
        {
          title: "Generalsekretariat",
          text: "Das Organ, das für die administrative Koordination der ARSE und die operative Umsetzung der Entscheidungen des Regulierungsrats zuständig ist.",
        },
        {
          title: "Operative Direktionen",
          text: "Die Direktionen, die für die technische Umsetzung der Regulierungsaufgaben im Energiesektor zuständig sind: Tarifgestaltung, Aufsicht über die Betreiber und Streitbeilegung.",
        },
        {
          title: "Querschnittsdirektionen und -dienste",
          text: "Die Direktionen und Unterstützungsdienste, die den Betrieb der Behörde gewährleisten: Personalwesen, Finanzen, Kommunikation und Informationssysteme.",
        },
      ],
    },

    recrutement: {
      kicker: "Die ARSE",
      title: "Karriere",
      lede: "Werden Sie Teil der ARSE und tragen Sie zum Aufbau eines leistungsfähigen, nachhaltigen Energiesektors im Dienst aller bei.",
      jobsTitle: "Stellenangebote",
      jobsText:
        "Die Regulierungsbehörde für den Energiesektor (ARSE) legt großen Wert darauf, sich mit qualifizierten Fachkräften zu umgeben. Initiativbewerbungen können per E-Mail eingereicht werden.",
      internshipsTitle: "Praktika",
      internshipsText: "Die ARSE nimmt auch akademische oder berufliche Praktikanten auf, die sich im Bereich der Regulierung weiterbilden möchten.",
      proceduresTitle: "Zusammenstellung der Bewerbungsunterlagen",
      procedures: ["Ein Antragsschreiben", "Ein Motivationsschreiben", "Ein Lebenslauf"],
      contactTitle: "Bewerbung senden",
    },

    documentation: {
      kicker: "Dokumentation",
      title: "Dokumentation",
      lede: "Berichte, Amtsblätter, Zeitschrift, Gesetze, Dekrete, Entscheidungen und Verordnungen zur Regulierung des Energiesektors in Burkina Faso.",
      categories: [
        { label: "Tätigkeitsberichte", href: "/documentation/rapports/", desc: "Die jährliche Bilanz der Erfolge der Behörde." },
        { label: "Amtsblätter", href: "/documentation/bulletins/", desc: "Die Referenzpublikation für regulatorische Akte." },
        { label: "ARSE-Zeitschrift", href: "/documentation/journal/", desc: "Le Régulateur de l'énergie — Neuigkeiten und Berichte aus dem Sektor." },
        { label: "Gesetze", href: "/documentation/lois/", desc: "Die gesetzlichen Texte zur Regulierung des Energiesektors." },
        { label: "Dekrete", href: "/documentation/decrets/", desc: "Die im Ministerrat verabschiedeten Durchführungsdekrete." },
        { label: "Entscheidungen", href: "/documentation/decisions/", desc: "Die Entscheidungen der ARSE zu Angelegenheiten ihrer Zuständigkeit." },
        { label: "Verordnungen", href: "/documentation/arretes/", desc: "Die ministeriellen und interministeriellen Verordnungen." },
      ],
    },
    rapports: { kicker: "Dokumentation", title: "Tätigkeitsberichte", lede: "Die jährliche Bilanz der Erfolge und des Engagements der ARSE für einen leistungsfähigen und nachhaltigen Energiesektor." },
    bulletins: { kicker: "Dokumentation", title: "Amtsblätter", lede: "Die Referenzpublikation zur Verfolgung der Tätigkeiten und Entscheidungen des Energieregulierers." },
    journal: { kicker: "Dokumentation", title: "ARSE-Zeitschrift — Le Régulateur", lede: "Entdecken Sie unsere Artikel und bleiben Sie über die Entwicklungen im Energiesektor informiert." },
    lois: { kicker: "Dokumentation", title: "Gesetze", lede: "Die gesetzlichen Texte zur allgemeinen Regulierung des Energiesektors in Burkina Faso." },
    decrets: { kicker: "Dokumentation", title: "Dekrete", lede: "Die im Ministerrat verabschiedeten Durchführungsdekrete zur Umsetzung der Sektorregulierung." },
    decisions: { kicker: "Dokumentation", title: "Entscheidungen", lede: "Die von der ARSE zu Angelegenheiten ihrer Zuständigkeit getroffenen Entscheidungen." },
    arretes: { kicker: "Dokumentation", title: "Verordnungen", lede: "Die für den Energiesektor geltenden ministeriellen und interministeriellen Verordnungen." },

    actualiteHub: {
      kicker: "Aktuelles",
      title: "Aktuelles",
      lede: "Berichte, Leitartikel, Interviews und aktuelle Aktivitäten der Regulierungsbehörde für den Energiesektor.",
      categories: [
        { label: "Aktivität", href: "/actualite/activite/", desc: "Workshops, Außeneinsätze und Maßnahmen der ARSE." },
        { label: "Bericht", href: "/actualite/dossier/", desc: "Vertiefte Analysen zu den großen Themen des Sektors." },
        { label: "Leitartikel", href: "/actualite/editorial/", desc: "Die Sichtweise der ARSE auf die aktuellen Entwicklungen im Energiesektor." },
        { label: "Interview", href: "/actualite/interview/", desc: "Begegnungen mit Akteuren des Energiesektors." },
      ],
    },
    activite: { kicker: "Aktuelles", title: "Aktivität", lede: "Workshops, Außeneinsätze und aktuelle Maßnahmen der ARSE mit den Akteuren des Sektors." },
    dossier: { kicker: "Aktuelles", title: "Bericht", lede: "Vertiefte Analysen zu den großen Themen, die den Energiesektor prägen." },
    editorial: { kicker: "Aktuelles", title: "Leitartikel", lede: "Die Sichtweise der ARSE auf aktuelle Entwicklungen und Herausforderungen im Energiesektor." },
    interview: { kicker: "Aktuelles", title: "Interview", lede: "Begegnungen mit Akteuren und Partnern des Energiesektors.", empty: "Derzeit sind keine Artikel verfügbar." },

    consommateur: {
      kicker: "Verbraucher",
      title: "Ihre Rechte als Nutzer",
      lede: "Der Schutz der Nutzer des öffentlichen Energiedienstes ist eine der zentralen Aufgaben der ARSE.",
      intro:
        "Als Nutzer des Energiesektors haben Sie Anspruch auf gerechten Zugang, faire Tarife und einen qualitativ hochwertigen Dienst. Die ARSE achtet auf die Einhaltung dieser Rechte und kann bei jedem Streit mit einem Betreiber des Sektors angerufen werden.",
      rightsTitle: "Was die Regulierung garantiert",
      rights: [
        "Gerechter Zugang zu Energiedienstleistungen im gesamten Staatsgebiet",
        "Von der Behörde festgelegte und kontrollierte, nicht willkürliche Tarife",
        "Qualitativ hochwertiger Service durch zugelassene Betreiber",
        "Die Möglichkeit, sich bei Streitigkeiten mit einem Betreiber an die ARSE zu wenden",
      ],
      resourcesTitle: "Nützliche Ressourcen",
    },

    contact: {
      kicker: "Kontakt",
      title: "Kontaktieren Sie uns",
      lede: "Für alle Informationen oder Anliegen zum Energiesektor wenden Sie sich direkt an die ARSE.",
      formTitle: "Senden Sie uns eine Nachricht",
      fields: {
        name: "Ihr Name",
        phone: "Telefon",
        email: "Ihre E-Mail-Adresse",
        locality: "Ihr Wohnort",
        province: "Ihre Provinz",
        subject: "Betreff",
        message: "Ihre Nachricht",
      },
      submit: "Nachricht senden",
      formNote: "Dieses Formular muss vor der Inbetriebnahme mit einem E-Mail-Versanddienst (z. B. Formspree) verbunden werden.",
      success: "Nachricht bestätigt. (Demo-Modus: Es wurden keine Daten übermittelt.)",
      sending: "Wird gesendet…",
      infoTitle: "Kontaktdaten",
      hoursTitle: "Öffnungszeiten",
    },

    partenaires: {
      kicker: "Partner",
      title: "Unsere Partner",
      lede: "Die ARSE arbeitet eng mit den öffentlichen Institutionen des Energiesektors in Burkina Faso zusammen.",
      items: [
        { name: "ANEREE", desc: "Nationale Agentur für erneuerbare Energien und Energieeffizienz", href: "https://aneree.bf/" },
        { name: "SONABEL", desc: "Nationale Elektrizitätsgesellschaft von Burkina Faso", href: "https://www.sonabel.bf/" },
        { name: "Energieministerium", desc: "Für Energie, Bergbau und Steinbrüche zuständiges Ministerium", href: "https://www.energie-mines.gov.bf/accueil" },
        { name: "ABER", desc: "Burkinische Agentur für ländliche Elektrifizierung", href: "https://aber.bf/" },
      ],
    },

    cookies: {
      kicker: "Rechtliche Hinweise",
      title: "Cookie-Richtlinie",
      lede: "Wie die Website der ARSE Cookies verwendet und wie Sie Ihre Einstellungen verwalten können.",
      sections: [
        { title: "Unbedingt erforderliche Cookies", text: "Für den ordnungsgemäßen Betrieb der Website unerlässlich; sie können nicht deaktiviert werden." },
        { title: "Performance-Cookies", text: "Sie messen den Besucherverkehr der Website und ermöglichen eine Analyse zur Verbesserung des Angebots." },
        { title: "Funktionale Cookies", text: "Sie speichern Ihre Präferenzen für ein reibungsloseres Erlebnis bei erneuten Besuchen." },
        { title: "Cookies von Drittanbietern", text: "Bestimmte eingebettete Inhalte (Videos, soziale Netzwerke) können eigene Cookies setzen." },
        { title: "Einwilligung", text: "Bei Ihrem ersten Besuch wird ein Hinweisbanner angezeigt. Ihre Einwilligung ist maximal 13 Monate gültig." },
        { title: "Verwaltung", text: "Sie können Ihre Cookie-Einstellungen jederzeit über die Einstellungen Ihres Browsers anpassen." },
        { title: "Datenschutz", text: "Die Verarbeitung Ihrer Daten erfolgt gemäß dem geltenden Recht Burkina Fasos. Sie werden weder verkauft noch an Dritte weitergegeben." },
      ],
    },

    terms: {
      kicker: "Rechtliche Hinweise",
      title: "Nutzungsbedingungen",
      lede: "Die Nutzungsregeln der offiziellen Website der Regulierungsbehörde für den Energiesektor.",
      sections: [
        { title: "Zweck der Website", text: "Diese Website dient der Vorstellung der ARSE, ihrer Aufgaben, ihrer offiziellen Publikationen und ihrer Aktualitäten." },
        { title: "Geistiges Eigentum", text: "Sämtliche auf dieser Website veröffentlichten Inhalte (Texte, Bilder, Dokumente) sind Eigentum der ARSE, sofern nicht anders angegeben." },
        { title: "Nutzung der Dokumente", text: "Amtliche Dokumente (Gesetze, Dekrete, Entscheidungen, Verordnungen) werden zu Informationszwecken bereitgestellt. Rechtsverbindlich sind nur die Veröffentlichungen im Amtsblatt." },
        { title: "Haftung", text: "Die ARSE bemüht sich um die Richtigkeit der veröffentlichten Informationen, haftet jedoch nicht für Fehler oder Auslassungen." },
        { title: "Externe Links", text: "Diese Website kann Links zu Websites Dritter enthalten, auf die die ARSE keinen Einfluss hat." },
      ],
    },
  },
};
