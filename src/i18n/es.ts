import type { Dictionary } from "./index";

export const es: Dictionary = {
  meta: {
    title: "Autoridad de Regulación del Sector de la Energía",
    description:
      "La ARSE regula el sector de la energía en Burkina Faso: protege a los usuarios y a los operadores, fija las tarifas, resuelve los litigios y rinde cuentas al Primer Ministro.",
  },

  site: {
    fullName: "Autoridad de Regulación del Sector de la Energía",
    hoursLabel: "Lunes a viernes, 07:30 – 16:00",
  },

  nav: {
    contact: "Contáctenos",
    menu: "Menú",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
    home: "Inicio",
    mainNavigation: "Navegación principal",
    languageLabel: "Idioma",
    items: [
      { key: "home", label: "Inicio", href: "/", desc: "Volver a la página de inicio de la ARSE.", children: [] },
      {
        key: "arse",
        label: "ARSE",
        href: "/arse/presentation/",
        desc: "Una autoridad administrativa independiente al servicio de un sector energético regulado, transparente y sostenible.",
        children: [
          { label: "Presentación", href: "/arse/presentation/" },
          { label: "Historia", href: "/arse/historique/" },
          { label: "Misión", href: "/arse/mission/" },
          { label: "Atribuciones", href: "/arse/attributions/" },
          { label: "Organización", href: "/arse/organisation/" },
          { label: "Empleo", href: "/arse/recrutement/" },
        ],
      },
      {
        key: "documentation",
        label: "Documentación",
        href: "/documentation/",
        desc: "Informes, boletines, decisiones, decretos, leyes y reglamentos que rigen el sector de la energía.",
        children: [
          { label: "Informes", href: "/documentation/rapports/" },
          { label: "Boletines", href: "/documentation/bulletins/" },
          { label: "Decisiones", href: "/documentation/decisions/" },
          { label: "Decretos ministeriales", href: "/documentation/arretes/" },
          { label: "Leyes", href: "/documentation/lois/" },
          { label: "Decretos", href: "/documentation/decrets/" },
        ],
      },
      {
        key: "actualite",
        label: "Noticias",
        href: "/actualite/",
        desc: "Reportajes, editoriales, entrevistas y actividades recientes de la Autoridad.",
        children: [
          { label: "Actividad", href: "/actualite/activite/" },
          { label: "Reportaje", href: "/actualite/dossier/" },
          { label: "Editorial", href: "/actualite/editorial/" },
          { label: "Entrevista", href: "/actualite/interview/" },
        ],
      },
      {
        key: "consommateur",
        label: "Consumidor",
        href: "/consommateur/",
        desc: "Sus derechos, recursos e información práctica como usuario del sector de la energía.",
        children: [],
      },
      {
        key: "contact",
        label: "Contacto",
        href: "/contact/",
        desc: "Datos de contacto de la ARSE, sede de Uagadugú y redes sociales oficiales.",
        children: [],
      },
    ],
  },

  hero: {
    kicker: "Sector energético regulado de forma continua",
    lines: [
      [{ text: "Un sector energético" }],
      [{ text: "regulado", highlight: true }, { text: ", transparente" }],
      [{ text: "y sostenible" }],
    ],
    lede: "Descubra el informe de actividad de la ARSE 2025, reflejo de sus logros y de su compromiso con un sector energético eficiente y sostenible.",
    cta: "Leer el informe 2025",
    counterLabel: "Producción nacional — 2024",
    imageAlt: "Técnicos trabajando en una línea eléctrica en Burkina Faso",
  },

  manifesto:
    "La Autoridad de Regulación del Sector de la Energía es una autoridad administrativa independiente, dotada de personalidad jurídica y de autonomía financiera y de gestión. Regula el sector, protege a los usuarios y a los operadores, fija las tarifas, resuelve los litigios y rinde cuentas al Primer Ministro.",

  missions: {
    kicker: "Nuestras atribuciones",
    heading: "Qué hace la Autoridad",
    intro: "Cuatro ejes de acción definidos por la ley, al servicio de un servicio público de la energía fiable y equitativo.",
    scrollHint: "Desplácese",
    outroTitle: "Todas las atribuciones de la ARSE",
    outroText: "El detalle de las competencias otorgadas a la Autoridad por la ley de reglamentación general del sector de la energía.",
    outroCta: "Consultar",
    items: [
      {
        title: "Regular el sector",
        text: "Supervisar las actividades de producción, transporte y distribución de energía en todo el territorio nacional.",
        alt: "Ingeniero analizando datos de producción energética",
      },
      {
        title: "Proteger a los usuarios",
        text: "Garantizar un acceso equitativo, tarifas justas y un servicio de calidad tanto para los consumidores como para los operadores del sector.",
        alt: "Red de distribución eléctrica en Burkina Faso",
      },
      {
        title: "Fijar las tarifas",
        text: "Determinar y revisar los cuadros tarifarios aplicables a los operadores del sector de la energía.",
        alt: "Reunión técnica en torno a un panel solar",
      },
      {
        title: "Resolver los litigios",
        text: "Instruir y arbitrar las controversias entre operadores, o entre operadores y usuarios del servicio público de la energía.",
        alt: "Sesión de trabajo de la ARSE",
      },
    ],
  },

  stats: {
    kicker: "El sector en cifras",
    heading: "Datos de producción energética 2024",
    labels: [
      "Producción nacional de electricidad en 2024",
      "Producción privada inyectada en la red",
      "Parte de la energía térmica",
      "Parte de la energía solar",
    ],
  },

  president: {
    kicker: "Palabras del Presidente",
    role: "Presidente del Consejo de Regulación",
    imageAlt: "El Presidente del Consejo de Regulación de la ARSE",
    quote:
      "En nombre del Consejo de Regulación y de todo el equipo de la ARSE, le doy la bienvenida a nuestro sitio web, un espacio dedicado a la información, la transparencia y la promoción de un sector energético eficiente, equitativo y sostenible.",
  },

  publications: {
    heading: "Informes, boletines y publicaciones oficiales",
    cta: "Toda la documentación",
    items: [
      { title: "Informe de actividad 2024", type: "Informe" },
      { title: "Informe de actividad 2023", type: "Informe" },
      { title: "Le Régulateur n.º 014", type: "Revista" },
      { title: "Boletín oficial n.º 13", type: "Boletín" },
    ],
  },

  news: {
    heading: "Últimas noticias de la ARSE",
    cta: "Todas las noticias",
    items: [
      {
        title: "Código de red eléctrica: la ARSE refuerza su apropiación entre los actores del Nakambé, el Nazinon y el Goulmou",
        dateLabel: "15 de septiembre de 2026",
        category: "Actividad",
      },
      {
        title: "Protección de los consumidores: la ARSE reúne a siete reguladores en torno a las buenas prácticas",
        dateLabel: "14 de agosto de 2026",
        category: "Reportaje",
      },
      {
        title: "Tramitación de expedientes: la ARSE elabora un marco de referencia para mejorar la celeridad",
        dateLabel: "12 de agosto de 2026",
        category: "Editorial",
      },
      {
        title: "Código de red eléctrica: la ARSE divulga su contenido entre los actores del Guiriko",
        dateLabel: "24 de agosto de 2026",
        category: "Actividad",
      },
    ],
  },

  cta: {
    heading: "¿Tiene alguna pregunta o reclamación?",
    text: "La ARSE está a la escucha de los usuarios y de los operadores del sector de la energía. Contacte con nuestro equipo para cualquier solicitud de información.",
    primary: "Contáctenos",
  },

  footer: {
    rights: "Todos los derechos reservados.",
    columns: [
      {
        title: "Recursos",
        links: [
          { label: "Decretos ministeriales", href: "/documentation/arretes/" },
          { label: "Decisiones", href: "/documentation/decisions/" },
          { label: "Boletín oficial", href: "/documentation/bulletins/" },
          { label: "Revista ARSE", href: "/documentation/journal/" },
          { label: "Consumidor", href: "/consommateur/" },
        ],
      },
      {
        title: "Noticias",
        links: [
          { label: "Reportaje", href: "/actualite/dossier/" },
          { label: "Editorial", href: "/actualite/editorial/" },
          { label: "Entrevista", href: "/actualite/interview/" },
          { label: "Audiencia", href: "/actualite/audience/" },
          { label: "Comunicado", href: "/actualite/communique/" },
        ],
      },
      {
        title: "Enlaces útiles",
        links: [
          { label: "ANEREE", href: "https://aneree.bf/", external: true },
          { label: "SONABEL", href: "https://www.sonabel.bf/", external: true },
          { label: "Ministerio de Energía", href: "https://energie.gov.bf/", external: true },
          { label: "ABER", href: "https://aber.bf/", external: true },
        ],
      },
      {
        title: "Otros",
        links: [
          { label: "Socios", href: "/partenaires/" },
          { label: "Empleo", href: "/arse/recrutement/" },
          { label: "Política de cookies", href: "/politique-cookies/" },
          { label: "Condiciones de uso", href: "/conditions-utilisation/" },
        ],
      },
    ],
  },

  common: {
    readMore: "Leer más",
    download: "Descargar",
    consult: "Consultar",
    backTo: "Volver a",
    viewAll: "Ver todo",
    source: "Documento oficial — fuente: arse.bf",
  },

  pages: {
    presentation: {
      kicker: "La ARSE",
      title: "Presentación",
      lede: "Una autoridad administrativa independiente, dotada de personalidad jurídica y de autonomía financiera y de gestión.",
      intro:
        "La Autoridad de Regulación del Sector de la Energía (ARSE) es una autoridad administrativa independiente dotada de personalidad jurídica y de autonomía financiera y de gestión. Garantiza la regulación, el control y el seguimiento de las actividades de los operadores del sector de la energía.",
      quote: "La ARSE, autoridad independiente, regula y supervisa el sector de la energía en Burkina Faso.",
      contextTitle: "Un marco legal reforzado",
      context:
        "El Gobierno de Burkina Faso llevó a cabo la reforma del sector eléctrico mediante la adopción de la Ley n.º 027-2007/AN del 20 de noviembre de 2007, antes de extender la regulación a todo el sector de la energía con la ley del 20 de abril de 2017.",
      visionTitle: "Visión 2027",
      vision:
        "De cara a 2027, la ARSE habrá consolidado su reputación e imagen de marca a nivel nacional y se habrá posicionado como un regulador de referencia en la subregión.",
      valuesTitle: "Nuestros valores",
      values: ["Profesionalidad", "Confidencialidad", "Anticipación de la innovación", "Espíritu de equipo y solidaridad", "Colaboración"],
    },

    historique: {
      kicker: "La ARSE",
      title: "Historia",
      lede: "Dos grandes reformas dieron forma al sector energético de Burkina Faso y dieron origen a la ARSE.",
      milestones: [
        {
          year: "2007",
          title: "Ley n.º 027-2007/AN del 20 de noviembre de 2007",
          text:
            "El Gobierno de Burkina Faso reformó el sector eléctrico mediante esta ley, que transformó la estructura de la industria eléctrica promoviendo la eficiencia y la calidad del servicio a los usuarios mediante la competencia, aumentando la oferta frente a la demanda. De esta ley nace la Autoridad de Regulación del Subsector de la Electricidad (ARSE), una autoridad administrativa independiente adscrita a la Oficina del Primer Ministro y con autonomía financiera.",
        },
        {
          year: "2017",
          title: "Ley del 20 de abril de 2017",
          text:
            "Burkina Faso se dotó de una nueva ley de energía destinada a resolver el desequilibrio entre la demanda de electricidad de los ciudadanos y la oferta del operador principal, Sonabel. Sus principales innovaciones: la regulación de todo el sector energético, excepto el subsector de los hidrocarburos; la consideración de las disposiciones comunitarias del mercado subregional de electricidad; la supresión de la segmentación y del comprador único; la posibilidad para ciertos clientes elegibles de abastecerse del proveedor de su elección, dentro o fuera del territorio nacional; la introducción de disposiciones relativas a la promoción de las energías renovables y la eficiencia energética; la ampliación de las competencias del regulador a todo el sector energético —la ARSE se convierte en la Autoridad de Regulación del Sector de la Energía— y la definición de las modalidades de su financiación.",
        },
      ],
    },

    mission: {
      kicker: "La ARSE",
      title: "Misión",
      lede: "La ARSE regula el sector de la energía, protege a usuarios y operadores, fija las tarifas, resuelve los litigios y rinde cuentas cada año al Primer Ministro.",
      items: [
        "Velar por el cumplimiento de los textos legislativos y reglamentarios que rigen el sector de la energía",
        "Salvaguardar los intereses de los usuarios del servicio público de la energía",
        "Proteger los derechos de los operadores del sector de la energía",
        "Proponer al Estado las tarifas aplicables en el sector de la energía",
        "Resolver los litigios en el sector de la energía entre los distintos operadores",
        "Velar por el equilibrio financiero global del sector de la energía",
      ],
      accountabilityTitle: "Rendición de cuentas",
      accountability:
        "Cada año, el Presidente de la ARSE presenta al Primer Ministro un informe sobre las actividades de la Autoridad durante el año anterior. Una copia de dicho informe se envía al Ministro encargado de la energía, a los organismos de control administrativo del Estado y al Tribunal de Cuentas.",
    },

    attributions: {
      kicker: "La ARSE",
      title: "Atribuciones",
      lede: "Una doble competencia, consultiva y decisoria, otorgada a la Autoridad por la ley de reglamentación general del sector de la energía.",
      consultativeTitle: "Competencia consultiva",
      consultativeIntro: "La ARSE emite un dictamen simple en los siguientes casos:",
      consultative: [
        "Los proyectos de textos legislativos y reglamentarios relativos al sector",
        "Los programas de inversión que le somete el ministerio encargado de la energía",
        "La requisición de instalaciones de autoproducción",
      ],
      decisionTitle: "Competencia decisoria",
      decisionIntro: "La ARSE emite un dictamen vinculante en los siguientes casos:",
      decision: [
        "El otorgamiento, la renovación, la revisión, la modificación o la retirada de concesiones, licencias y autorizaciones",
        "Las condiciones de acceso de terceros a las redes",
        "Los pliegos de condiciones de los operadores del sector de la energía",
      ],
    },

    organisation: {
      kicker: "La ARSE",
      title: "Organización",
      lede: "La ARSE se organiza en torno a cuatro órganos que garantizan la gobernanza, la coordinación y el cumplimiento de sus funciones de regulación.",
      organs: [
        {
          title: "Consejo de regulación",
          text: "El órgano colegiado de decisión de la ARSE, encargado de adoptar los dictámenes, decisiones y recomendaciones de la Autoridad en el ejercicio de sus funciones de regulación.",
        },
        {
          title: "Secretaría General",
          text: "El órgano encargado de la coordinación administrativa de la ARSE y de la ejecución operativa de las decisiones del Consejo de regulación.",
        },
        {
          title: "Direcciones Operativas",
          text: "Las direcciones encargadas de la ejecución técnica de las funciones de regulación del sector energético: fijación de tarifas, control de los operadores y resolución de litigios.",
        },
        {
          title: "Direcciones y servicios transversales",
          text: "Las direcciones y servicios de apoyo al funcionamiento de la Autoridad: recursos humanos, finanzas, comunicación y sistemas de información.",
        },
      ],
    },

    recrutement: {
      kicker: "La ARSE",
      title: "Empleo",
      lede: "Únase a la ARSE y contribuya a construir un sector energético eficiente, sostenible y al servicio de todos.",
      jobsTitle: "Empleos",
      jobsText:
        "La Autoridad de Regulación del Sector de la Energía (ARSE) se enorgullece de rodearse de talento cualificado. Las candidaturas espontáneas pueden enviarse por correo electrónico.",
      internshipsTitle: "Prácticas",
      internshipsText: "La ARSE también acoge a estudiantes en prácticas académicas o profesionales que deseen formarse en el ámbito de la regulación.",
      proceduresTitle: "Composición del expediente",
      procedures: ["Una solicitud", "Una carta de motivación", "Un currículum vitae"],
      contactTitle: "Enviar una candidatura",
    },

    documentation: {
      kicker: "Documentación",
      title: "Documentación",
      lede: "Informes, boletines, revista, leyes, decretos, decisiones y reglamentos que rigen el sector de la energía en Burkina Faso.",
      categories: [
        { label: "Informes de actividad", href: "/documentation/rapports/", desc: "El balance anual de los logros de la Autoridad." },
        { label: "Boletines oficiales", href: "/documentation/bulletins/", desc: "La publicación de referencia de los actos de regulación." },
        { label: "Revista ARSE", href: "/documentation/journal/", desc: "Le Régulateur de l'énergie: noticias y reportajes del sector." },
        { label: "Leyes", href: "/documentation/lois/", desc: "Los textos legislativos que rigen el sector de la energía." },
        { label: "Decretos", href: "/documentation/decrets/", desc: "Los decretos de aplicación adoptados en Consejo de Ministros." },
        { label: "Decisiones", href: "/documentation/decisions/", desc: "Las decisiones de la ARSE sobre asuntos del sector." },
        { label: "Reglamentos", href: "/documentation/arretes/", desc: "Los decretos ministeriales e interministeriales." },
      ],
    },
    rapports: { kicker: "Documentación", title: "Informes de actividad", lede: "El balance anual de los logros y del compromiso de la ARSE con un sector energético eficiente y sostenible." },
    bulletins: { kicker: "Documentación", title: "Boletines oficiales", lede: "La publicación de referencia para seguir las actividades y decisiones del regulador de la energía." },
    journal: { kicker: "Documentación", title: "Revista ARSE — Le Régulateur", lede: "Descubra nuestros artículos y manténgase informado sobre la evolución del sector de la energía." },
    lois: { kicker: "Documentación", title: "Leyes", lede: "Los textos legislativos relativos a la reglamentación general del sector de la energía en Burkina Faso." },
    decrets: { kicker: "Documentación", title: "Decretos", lede: "Los decretos de aplicación adoptados en Consejo de Ministros para la ejecución de la reglamentación del sector." },
    decisions: { kicker: "Documentación", title: "Decisiones", lede: "Las decisiones emitidas por la ARSE sobre asuntos de su competencia." },
    arretes: { kicker: "Documentación", title: "Reglamentos", lede: "Los decretos ministeriales e interministeriales aplicables al sector de la energía." },

    actualiteHub: {
      kicker: "Noticias",
      title: "Noticias",
      lede: "Reportajes, editoriales, entrevistas y actividades recientes de la Autoridad de Regulación del Sector de la Energía.",
      categories: [
        { label: "Actividad", href: "/actualite/activite/", desc: "Talleres, misiones de campo y acciones de la ARSE." },
        { label: "Reportaje", href: "/actualite/dossier/", desc: "Análisis en profundidad de los grandes temas del sector." },
        { label: "Editorial", href: "/actualite/editorial/", desc: "La visión de la ARSE sobre la actualidad del sector de la energía." },
        { label: "Entrevista", href: "/actualite/interview/", desc: "Encuentros con los actores del sector de la energía." },
      ],
    },
    activite: { kicker: "Noticias", title: "Actividad", lede: "Talleres, misiones de campo y acciones recientes de la ARSE junto a los actores del sector." },
    dossier: { kicker: "Noticias", title: "Reportaje", lede: "Análisis en profundidad de los grandes temas que estructuran el sector de la energía." },
    editorial: { kicker: "Noticias", title: "Editorial", lede: "La visión de la ARSE sobre la actualidad y los retos del sector de la energía." },
    interview: { kicker: "Noticias", title: "Entrevista", lede: "Encuentros con los actores y socios del sector de la energía.", empty: "No hay artículos para mostrar por el momento." },

    consommateur: {
      kicker: "Consumidor",
      title: "Sus derechos como usuario",
      lede: "Proteger a los usuarios del servicio público de la energía es una de las misiones centrales de la ARSE.",
      intro:
        "Como usuario del sector de la energía, tiene derecho a un acceso equitativo, tarifas justas y un servicio de calidad. La ARSE vela por el respeto de estos derechos y puede ser consultada en caso de litigio con un operador del sector.",
      rightsTitle: "Lo que garantiza la regulación",
      rights: [
        "Un acceso equitativo a los servicios de energía en todo el territorio",
        "Tarifas fijadas y controladas por la Autoridad, nunca arbitrarias",
        "Un servicio de calidad por parte de los operadores autorizados",
        "La posibilidad de recurrir a la ARSE en caso de litigio con un operador",
      ],
      resourcesTitle: "Recursos útiles",
    },

    contact: {
      kicker: "Contacto",
      title: "Contáctenos",
      lede: "Para cualquier información o inquietud relacionada con el sector de la energía, contacte directamente con la ARSE.",
      formTitle: "Envíenos un mensaje",
      fields: {
        name: "Su nombre",
        phone: "Teléfono",
        email: "Su correo electrónico",
        locality: "Su localidad",
        province: "Su provincia",
        subject: "Asunto",
        message: "Su mensaje",
      },
      submit: "Enviar el mensaje",
      formNote: "Formulario a conectar con un servicio de envío de correos (p. ej. Formspree) antes de la puesta en producción.",
      success: "Mensaje validado. (Modo de demostración: no se ha enviado ningún dato.)",
      sending: "Enviando…",
      infoTitle: "Datos de contacto",
      hoursTitle: "Horario",
    },

    partenaires: {
      kicker: "Socios",
      title: "Nuestros socios",
      lede: "La ARSE trabaja junto a las instituciones públicas del sector de la energía en Burkina Faso.",
      items: [
        { name: "ANEREE", desc: "Agencia Nacional de Energías Renovables y Eficiencia Energética", href: "https://aneree.bf/" },
        { name: "SONABEL", desc: "Sociedad Nacional de Electricidad de Burkina", href: "https://www.sonabel.bf/" },
        { name: "Ministerio de Energía", desc: "Ministerio encargado de la energía, las minas y las canteras", href: "https://www.energie-mines.gov.bf/accueil" },
        { name: "ABER", desc: "Agencia Burkinesa de Electrificación Rural", href: "https://aber.bf/" },
      ],
    },

    cookies: {
      kicker: "Información legal",
      title: "Política de cookies",
      lede: "Cómo utiliza el sitio web de la ARSE las cookies, y cómo puede usted gestionar sus preferencias.",
      sections: [
        { title: "Cookies estrictamente necesarias", text: "Indispensables para el buen funcionamiento del sitio; no se pueden desactivar." },
        { title: "Cookies de rendimiento", text: "Miden la afluencia del sitio y permiten analizar su uso para mejorarlo." },
        { title: "Cookies de funcionalidad", text: "Memorizan sus preferencias para una navegación más fluida de una visita a otra." },
        { title: "Cookies de terceros", text: "Algunos contenidos integrados (vídeos, redes sociales) pueden depositar sus propias cookies." },
        { title: "Consentimiento", text: "Se muestra un aviso informativo en su primera visita. Su consentimiento es válido por un máximo de 13 meses." },
        { title: "Gestión", text: "Puede configurar en cualquier momento sus preferencias de cookies mediante los ajustes de su navegador." },
        { title: "Protección de datos", text: "El tratamiento de sus datos cumple con la legislación de Burkina Faso vigente. Nunca se ceden ni se venden a terceros." },
      ],
    },

    terms: {
      kicker: "Información legal",
      title: "Condiciones de uso",
      lede: "Las normas de uso del sitio web oficial de la Autoridad de Regulación del Sector de la Energía.",
      sections: [
        { title: "Objeto del sitio", text: "Este sitio tiene por objeto presentar la ARSE, sus misiones, sus publicaciones oficiales y su actualidad." },
        { title: "Propiedad intelectual", text: "Todos los contenidos (textos, imágenes, documentos) publicados en este sitio son propiedad de la ARSE, salvo indicación contraria." },
        { title: "Uso de los documentos", text: "Los documentos oficiales (leyes, decretos, decisiones, reglamentos) se ponen a disposición con fines informativos. Solo las publicaciones en el Diario Oficial son fehacientes." },
        { title: "Responsabilidad", text: "La ARSE se esfuerza por garantizar la exactitud de la información publicada, pero no puede ser considerada responsable de errores u omisiones." },
        { title: "Enlaces externos", text: "Este sitio puede contener enlaces a sitios de terceros, sobre los cuales la ARSE no ejerce ningún control." },
      ],
    },
  },
};
