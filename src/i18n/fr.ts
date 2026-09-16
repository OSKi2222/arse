export const fr = {
  meta: {
    title: "Autorité de Régulation du Secteur de l'Énergie",
    description:
      "L'ARSE régule le secteur de l'énergie au Burkina Faso : elle protège les usagers et les acteurs, fixe les tarifs, règle les litiges et rend compte au Premier ministre.",
  },

  site: {
    fullName: "Autorité de Régulation du Secteur de l'Énergie",
    hoursLabel: "Lundi – Vendredi, 07h30 – 16h00",
  },

  nav: {
    contact: "Nous contacter",
    menu: "Menu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    home: "Accueil",
    mainNavigation: "Navigation principale",
    languageLabel: "Langue",
    items: [
      { key: "home", label: "Accueil", href: "/", desc: "Retour à la page d'accueil de l'ARSE.", children: [] },
      {
        key: "arse",
        label: "ARSE",
        href: "/arse/presentation/",
        desc: "Une autorité administrative indépendante au service d'un secteur de l'énergie régulé, transparent et durable.",
        children: [
          { label: "Présentation", href: "/arse/presentation/" },
          { label: "Historique", href: "/arse/historique/" },
          { label: "Mission", href: "/arse/mission/" },
          { label: "Attributions", href: "/arse/attributions/" },
          { label: "Organisation", href: "/arse/organisation/" },
          { label: "Recrutement", href: "/arse/recrutement/" },
        ],
      },
      {
        key: "documentation",
        label: "Documentation",
        href: "/documentation/",
        desc: "Rapports, bulletins, décisions, arrêtés, lois et décrets qui encadrent le secteur de l'énergie.",
        children: [
          { label: "Rapports", href: "/documentation/rapports/" },
          { label: "Bulletins", href: "/documentation/bulletins/" },
          { label: "Décisions", href: "/documentation/decisions/" },
          { label: "Arrêtés", href: "/documentation/arretes/" },
          { label: "Lois", href: "/documentation/lois/" },
          { label: "Décrets", href: "/documentation/decrets/" },
        ],
      },
      {
        key: "actualite",
        label: "Actualité",
        href: "/actualite/",
        desc: "Dossiers, éditoriaux, interviews et activités récentes de l'Autorité.",
        children: [
          { label: "Activité", href: "/actualite/activite/" },
          { label: "Dossier", href: "/actualite/dossier/" },
          { label: "Editorial", href: "/actualite/editorial/" },
          { label: "Interview", href: "/actualite/interview/" },
        ],
      },
      {
        key: "consommateur",
        label: "Consommateur",
        href: "/consommateur/",
        desc: "Vos droits, recours et informations pratiques en tant qu'usager du secteur de l'énergie.",
        children: [],
      },
      {
        key: "contact",
        label: "Contact",
        href: "/contact/",
        desc: "Coordonnées de l'ARSE, siège de Ouagadougou et réseaux sociaux officiels.",
        children: [],
      },
    ],
  },

  hero: {
    kicker: "Secteur de l'énergie régulé en continu",
    lines: [
      [{ text: "Un secteur de l'énergie" }],
      [{ text: "régulé", highlight: true }, { text: ", transparent" }],
      [{ text: "et durable" }],
    ],
    lede: "Découvrez le rapport d'activité de l'ARSE 2025, reflet de ses réalisations et de son engagement pour un secteur énergétique performant et durable.",
    cta: "Lire le rapport 2025",
    counterLabel: "Production nationale — 2024",
    imageAlt: "Techniciens intervenant sur une ligne électrique au Burkina Faso",
  },

  manifesto:
    "L'Autorité de régulation du secteur de l'énergie est une autorité administrative indépendante, dotée de la personnalité juridique et de l'autonomie financière et de gestion. Elle régule le secteur, protège les usagers et les acteurs, fixe les tarifs, règle les litiges et rend compte au Premier ministre.",

  missions: {
    kicker: "Nos attributions",
    heading: "Ce que fait l'Autorité",
    intro: "Quatre leviers d'action définis par la loi, au service d'un service public de l'énergie fiable et équitable.",
    scrollHint: "Faites défiler",
    outroTitle: "Toutes les attributions de l'ARSE",
    outroText:
      "Le détail des compétences confiées à l'Autorité par la loi portant réglementation générale du secteur de l'énergie.",
    outroCta: "Consulter",
    items: [
      {
        title: "Réguler le secteur",
        text: "Encadrer les activités de production, de transport et de distribution d'énergie sur l'ensemble du territoire national.",
        alt: "Ingénieur analysant des données de production énergétique",
      },
      {
        title: "Protéger les usagers",
        text: "Garantir un accès équitable, des tarifs justes et un service de qualité pour les consommateurs comme pour les acteurs du secteur.",
        alt: "Réseau de distribution électrique au Burkina Faso",
      },
      {
        title: "Fixer les tarifs",
        text: "Déterminer et réviser les grilles tarifaires applicables aux opérateurs du secteur de l'énergie.",
        alt: "Réunion technique autour d'un panneau solaire",
      },
      {
        title: "Régler les litiges",
        text: "Instruire et arbitrer les différends entre opérateurs, ou entre opérateurs et usagers du service public de l'énergie.",
        alt: "Séance de travail de l'ARSE",
      },
    ],
  },

  stats: {
    kicker: "Le secteur en chiffres",
    heading: "Les données de production énergétique 2024",
    labels: [
      "Production nationale d'électricité en 2024",
      "Production privée injectée sur le réseau",
      "Part de l'énergie thermique",
      "Part de l'énergie solaire",
    ],
  },

  president: {
    kicker: "Mot du Président",
    role: "Président du Conseil de Régulation",
    imageAlt: "Le Président du Conseil de Régulation de l'ARSE",
    quote:
      "Au nom du Conseil de Régulation et de l'ensemble de l'équipe de l'ARSE, je vous souhaite la bienvenue sur notre site web, espace dédié à l'information, à la transparence et à la promotion d'un secteur énergétique performant, équitable et durable.",
  },

  publications: {
    heading: "Rapports, journaux et bulletins officiels",
    cta: "Toute la documentation",
    items: [
      { title: "Rapport d'activité 2024", type: "Rapport" },
      { title: "Rapport d'activité 2023", type: "Rapport" },
      { title: "Le Régulateur n°014", type: "Journal" },
      { title: "Bulletin officiel n°13", type: "Bulletin" },
    ],
  },

  news: {
    heading: "Dernières nouvelles de l'ARSE",
    cta: "Toute l'actualité",
    items: [
      {
        title:
          "Code de réseau électrique : l'ARSE renforce l'appropriation auprès des acteurs du Nakambé, du Nazinon et du Goulmou",
        dateLabel: "15 septembre 2026",
        category: "Activité",
      },
      {
        title: "Protection des consommateurs : l'ARSE fédère sept régulateurs autour des bonnes pratiques",
        dateLabel: "14 août 2026",
        category: "Dossier",
      },
      {
        title: "Traitement des délais des dossiers : l'ARSE élabore un référentiel pour renforcer la célérité",
        dateLabel: "12 août 2026",
        category: "Editorial",
      },
      {
        title: "Code de réseau électrique : l'ARSE vulgarise le contenu auprès des acteurs du Guiriko",
        dateLabel: "24 août 2026",
        category: "Activité",
      },
    ],
  },

  cta: {
    heading: "Une question, une réclamation ?",
    text: "L'ARSE est à l'écoute des usagers et des acteurs du secteur de l'énergie. Contactez notre équipe pour toute demande d'information.",
    primary: "Nous contacter",
  },

  footer: {
    rights: "Tous droits réservés.",
    credits: "Conception : Agence UBICOM · Refonte : OSKi_an_Co",
    columns: [
      {
        title: "Ressources",
        links: [
          { label: "Arrêtés", href: "/documentation/arretes/" },
          { label: "Décisions", href: "/documentation/decisions/" },
          { label: "Bulletin officiel", href: "/documentation/bulletins/" },
          { label: "Journal ARSE", href: "/documentation/journal/" },
          { label: "Consommateur", href: "/consommateur/" },
        ],
      },
      {
        title: "Actualité",
        links: [
          { label: "Dossier", href: "/actualite/dossier/" },
          { label: "Editorial", href: "/actualite/editorial/" },
          { label: "Interview", href: "/actualite/interview/" },
          { label: "Audience", href: "/actualite/audience/" },
          { label: "Communiqué", href: "/actualite/communique/" },
        ],
      },
      {
        title: "Liens utiles",
        links: [
          { label: "ANEREE", href: "https://aneree.bf/", external: true },
          { label: "SONABEL", href: "https://www.sonabel.bf/", external: true },
          { label: "Ministère de l'Énergie", href: "https://energie.gov.bf/", external: true },
          { label: "ABER", href: "https://aber.bf/", external: true },
        ],
      },
      {
        title: "Autres",
        links: [
          { label: "Partenaires", href: "/partenaires/" },
          { label: "Recrutement", href: "/arse/recrutement/" },
          { label: "Politique des cookies", href: "/politique-cookies/" },
          { label: "Conditions d'utilisation", href: "/conditions-utilisation/" },
        ],
      },
    ],
  },

  common: {
    readMore: "Lire la suite",
    download: "Télécharger",
    consult: "Consulter",
    backTo: "Retour",
    viewAll: "Tout voir",
    source: "Document officiel — source : arse.bf",
  },

  pages: {
    presentation: {
      kicker: "L'ARSE",
      title: "Présentation",
      lede: "Une autorité administrative indépendante, dotée de la personnalité juridique et de l'autonomie financière et de gestion.",
      intro:
        "L'Autorité de régulation du secteur de l'énergie (ARSE) est une autorité administrative indépendante dotée de la personnalité juridique et de l'autonomie financière et de gestion. Elle assure la régulation, le contrôle et le suivi des activités des exploitants et des opérateurs du secteur de l'énergie.",
      quote: "L'ARSE, autorité indépendante, régule et contrôle le secteur de l'énergie au Burkina Faso.",
      contextTitle: "Un cadre légal renforcé",
      context:
        "Le Gouvernement du Burkina Faso a procédé à la réforme du secteur de l'électricité par l'adoption de la Loi n°027-2007/AN du 20 novembre 2007, avant d'élargir la régulation à l'ensemble du secteur de l'énergie avec la loi du 20 avril 2017.",
      visionTitle: "Vision 2027",
      vision:
        "À l'horizon 2027, l'ARSE a développé sa notoriété et son image de marque au niveau national et s'impose comme un régulateur de référence dans la sous-région.",
      valuesTitle: "Nos valeurs",
      values: ["Professionnalisme", "Confidentialité", "Anticipation des innovations", "Esprit d'équipe et de solidarité", "Partenariat"],
    },

    historique: {
      kicker: "L'ARSE",
      title: "Historique",
      lede: "Deux réformes majeures ont façonné le secteur de l'énergie au Burkina Faso et donné naissance à l'ARSE.",
      milestones: [
        {
          year: "2007",
          title: "Loi n°027-2007/AN du 20 novembre 2007",
          text:
            "Le Gouvernement du Burkina Faso a procédé à la réforme du secteur de l'électricité par l'adoption de cette loi, qui a apporté des changements dans la structure de l'industrie de l'électricité en promouvant l'efficacité et la qualité du service offert aux usagers par le jeu de la concurrence, en accroissant l'offre au regard de la demande. C'est de cette loi que naît l'Autorité de Régulation du Sous-secteur de l'Électricité (ARSE), une autorité administrative indépendante rattachée au Premier Ministère et jouissant de l'autonomie financière.",
        },
        {
          year: "2017",
          title: "Loi du 20 avril 2017",
          text:
            "Le Burkina s'est doté d'une nouvelle loi sur l'énergie visant à résoudre le déséquilibre entre la demande des citoyens en électricité et l'offre de l'opérateur principal, la Sonabel. Ses innovations majeures : la réglementation de l'ensemble du secteur de l'énergie, à l'exception du sous-secteur des hydrocarbures ; la prise en compte des dispositions communautaires du marché sous-régional de l'électricité ; la suppression de la segmentation et de l'acheteur unique ; la possibilité pour certains clients éligibles de s'approvisionner auprès du fournisseur de leur choix, sur le territoire national ou hors du territoire ; l'introduction de dispositions relatives à la promotion des énergies renouvelables et à l'efficacité énergétique ; l'élargissement des pouvoirs du régulateur à l'ensemble du secteur de l'énergie — l'ARSE devient l'Autorité de Régulation du Secteur de l'Énergie — et l'inscription des modalités de son financement.",
        },
      ],
    },

    mission: {
      kicker: "L'ARSE",
      title: "Mission",
      lede: "L'ARSE régule le secteur de l'énergie, protège usagers et acteurs, fixe les tarifs, règle les litiges et rend compte chaque année au Premier ministre.",
      items: [
        "Veiller au respect des textes législatifs et règlementaires régissant le secteur de l'énergie",
        "Préserver les intérêts des usagers du service public de l'énergie",
        "Protéger les droits des acteurs du secteur de l'énergie",
        "Proposer à l'État des tarifs applicables dans le secteur de l'énergie",
        "Régler les litiges dans le secteur de l'énergie entre les différents acteurs",
        "Veiller à l'équilibre financier du secteur de l'énergie dans sa globalité",
      ],
      accountabilityTitle: "Redevabilité",
      accountability:
        "Chaque année, le Président de l'ARSE adresse au Premier Ministre un rapport qui rend compte de ses activités de l'année précédente. Une copie dudit rapport est adressée au Ministre chargé de l'énergie, aux corps de contrôles administratifs de l'État et à la Cour des Comptes.",
    },

    attributions: {
      kicker: "L'ARSE",
      title: "Attributions",
      lede: "Un double pouvoir, consultatif et décisionnel, confié à l'Autorité par la loi portant réglementation générale du secteur de l'énergie.",
      consultativeTitle: "Pouvoir consultatif",
      consultativeIntro: "L'ARSE donne un avis simple dans les cas suivants :",
      consultative: [
        "Les projets de textes législatifs et réglementaires relatifs au secteur",
        "Les programmes d'investissement qui lui sont soumis par le ministère chargé de l'énergie",
        "La réquisition des installations d'autoproduction",
      ],
      decisionTitle: "Pouvoir décisionnel",
      decisionIntro: "L'ARSE donne un avis conforme dans les cas suivants :",
      decision: [
        "L'octroi, le renouvellement, la révision, la modification ou le retrait des concessions, licences et autorisations",
        "Les conditions d'accès des tiers aux réseaux",
        "Les cahiers des charges des opérateurs du secteur de l'énergie",
      ],
    },

    organisation: {
      kicker: "L'ARSE",
      title: "Organisation",
      lede: "L'ARSE s'organise autour de quatre organes qui assurent la gouvernance, la coordination et la mise en œuvre de ses missions de régulation.",
      organs: [
        {
          title: "Conseil de régulation",
          text: "L'organe collégial de décision de l'ARSE, chargé d'adopter les avis, décisions et recommandations de l'Autorité dans l'exercice de ses missions de régulation.",
        },
        {
          title: "Secrétariat Général",
          text: "L'organe chargé de la coordination administrative de l'ARSE et de la mise en œuvre opérationnelle des décisions du Conseil de régulation.",
        },
        {
          title: "Directions Opérationnelles",
          text: "Les directions en charge de la mise en œuvre technique des missions de régulation du secteur de l'énergie : tarification, contrôle des opérateurs et règlement des litiges.",
        },
        {
          title: "Directions et services transversaux",
          text: "Les directions et services d'appui au fonctionnement de l'Autorité : ressources humaines, finances, communication et systèmes d'information.",
        },
      ],
    },

    recrutement: {
      kicker: "L'ARSE",
      title: "Recrutement",
      lede: "Rejoignez l'ARSE et contribuez à bâtir un secteur énergétique performant, durable et au service de tous.",
      jobsTitle: "Emplois",
      jobsText:
        "L'Autorité de Régulation du Secteur de l'Énergie (ARSE) met un point d'honneur à s'entourer de compétences qualifiées. Les candidatures spontanées peuvent être transmises par courriel.",
      internshipsTitle: "Stages",
      internshipsText:
        "L'ARSE accueille également des stagiaires académiques ou professionnels désireux de se former aux métiers de la régulation.",
      proceduresTitle: "Constitution du dossier",
      procedures: ["Une demande", "Une lettre de motivation", "Un curriculum vitae"],
      contactTitle: "Envoyer une candidature",
    },

    documentation: {
      kicker: "Documentation",
      title: "Documentation",
      lede: "Rapports, bulletins, journal, lois, décrets, décisions et arrêtés qui encadrent le secteur de l'énergie au Burkina Faso.",
      categories: [
        { label: "Rapports d'activité", href: "/documentation/rapports/", desc: "Le bilan annuel des réalisations de l'Autorité." },
        { label: "Bulletins officiels", href: "/documentation/bulletins/", desc: "La publication de référence des actes de régulation." },
        { label: "Journal ARSE", href: "/documentation/journal/", desc: "Le Régulateur de l'énergie, actualités et dossiers du secteur." },
        { label: "Lois", href: "/documentation/lois/", desc: "Les textes législatifs qui régissent le secteur de l'énergie." },
        { label: "Décrets", href: "/documentation/decrets/", desc: "Les décrets d'application pris en Conseil des ministres." },
        { label: "Décisions", href: "/documentation/decisions/", desc: "Les décisions de l'ARSE sur les dossiers du secteur." },
        { label: "Arrêtés", href: "/documentation/arretes/", desc: "Les arrêtés ministériels et interministériels." },
      ],
    },
    rapports: { kicker: "Documentation", title: "Rapports d'activité", lede: "Le bilan annuel des réalisations et de l'engagement de l'ARSE pour un secteur énergétique performant et durable." },
    bulletins: { kicker: "Documentation", title: "Bulletins officiels", lede: "La publication de référence pour suivre les activités et décisions du régulateur de l'énergie." },
    journal: { kicker: "Documentation", title: "Journal ARSE — Le Régulateur", lede: "Plongez dans nos articles et restez informé sur les évolutions du secteur de l'énergie." },
    lois: { kicker: "Documentation", title: "Lois", lede: "Les textes législatifs relatifs à la réglementation générale du secteur de l'énergie au Burkina Faso." },
    decrets: { kicker: "Documentation", title: "Décrets", lede: "Les décrets d'application pris en Conseil des ministres pour la mise en œuvre de la réglementation du secteur." },
    decisions: { kicker: "Documentation", title: "Décisions", lede: "Les décisions rendues par l'ARSE sur les dossiers relevant de sa compétence." },
    arretes: { kicker: "Documentation", title: "Arrêtés", lede: "Les arrêtés ministériels et interministériels applicables au secteur de l'énergie." },

    actualiteHub: {
      kicker: "Actualité",
      title: "Actualité",
      lede: "Dossiers, éditoriaux, interviews et activités récentes de l'Autorité de régulation du secteur de l'énergie.",
      categories: [
        { label: "Activité", href: "/actualite/activite/", desc: "Ateliers, missions et actions de terrain de l'ARSE." },
        { label: "Dossier", href: "/actualite/dossier/", desc: "Analyses approfondies sur les grands sujets du secteur." },
        { label: "Editorial", href: "/actualite/editorial/", desc: "Le regard de l'ARSE sur l'actualité du secteur de l'énergie." },
        { label: "Interview", href: "/actualite/interview/", desc: "Rencontres avec les acteurs du secteur de l'énergie." },
      ],
    },
    activite: { kicker: "Actualité", title: "Activité", lede: "Ateliers, missions de terrain et actions récentes de l'ARSE auprès des acteurs du secteur." },
    dossier: { kicker: "Actualité", title: "Dossier", lede: "Analyses approfondies sur les grands sujets qui structurent le secteur de l'énergie." },
    editorial: { kicker: "Actualité", title: "Editorial", lede: "Le regard de l'ARSE sur l'actualité et les enjeux du secteur de l'énergie." },
    interview: { kicker: "Actualité", title: "Interview", lede: "Rencontres avec les acteurs et partenaires du secteur de l'énergie.", empty: "Aucun article à afficher pour le moment." },

    consommateur: {
      kicker: "Consommateur",
      title: "Vos droits en tant qu'usager",
      lede: "Protéger les usagers du service public de l'énergie est l'une des missions centrales de l'ARSE.",
      intro:
        "En tant qu'usager du secteur de l'énergie, vous avez droit à un accès équitable, des tarifs justes et un service de qualité. L'ARSE veille au respect de ces droits et peut être saisie pour tout litige avec un opérateur du secteur.",
      rightsTitle: "Ce que garantit la régulation",
      rights: [
        "Un accès équitable aux services d'énergie sur l'ensemble du territoire",
        "Des tarifs fixés et contrôlés par l'Autorité, non arbitraires",
        "Un service de qualité de la part des opérateurs agréés",
        "Un recours possible auprès de l'ARSE en cas de litige avec un opérateur",
      ],
      resourcesTitle: "Ressources utiles",
    },

    contact: {
      kicker: "Contact",
      title: "Nous contacter",
      lede: "Pour toute information ou préoccupation relative au secteur de l'énergie, contactez directement l'ARSE.",
      formTitle: "Envoyez-nous un message",
      fields: {
        name: "Votre nom",
        phone: "Téléphone",
        email: "Votre e-mail",
        locality: "Votre localité",
        province: "Votre Province",
        subject: "Objet",
        message: "Votre message",
      },
      submit: "Envoyer le message",
      formNote: "Formulaire à connecter à un service d'envoi d'e-mails (ex. Formspree) avant mise en production.",
      success: "Message validé. (Mode démonstration : aucune donnée n'a été envoyée.)",
      sending: "Envoi en cours…",
      infoTitle: "Coordonnées",
      hoursTitle: "Horaires",
    },

    partenaires: {
      kicker: "Partenaires",
      title: "Nos partenaires",
      lede: "L'ARSE travaille aux côtés des institutions publiques du secteur de l'énergie au Burkina Faso.",
      items: [
        { name: "ANEREE", desc: "Agence Nationale des Énergies Renouvelables et de l'Efficacité Énergétique", href: "https://aneree.bf/" },
        { name: "SONABEL", desc: "Société Nationale d'Électricité du Burkina", href: "https://www.sonabel.bf/" },
        { name: "Ministère de l'Énergie", desc: "Ministère en charge de l'énergie, des mines et des carrières", href: "https://www.energie-mines.gov.bf/accueil" },
        { name: "ABER", desc: "Agence Burkinabè de l'Électrification Rurale", href: "https://aber.bf/" },
      ],
    },

    cookies: {
      kicker: "Informations légales",
      title: "Politique des cookies",
      lede: "Comment le site de l'ARSE utilise les cookies, et comment vous pouvez gérer vos préférences.",
      sections: [
        { title: "Cookies strictement nécessaires", text: "Indispensables au bon fonctionnement du site ; ils ne peuvent pas être désactivés." },
        { title: "Cookies de performance", text: "Ils mesurent la fréquentation du site et permettent d'analyser son usage afin de l'améliorer." },
        { title: "Cookies de fonctionnalité", text: "Ils mémorisent vos préférences pour une navigation plus fluide d'une visite à l'autre." },
        { title: "Cookies tiers", text: "Certains contenus intégrés (vidéos, réseaux sociaux) peuvent déposer leurs propres cookies." },
        { title: "Consentement", text: "Un bandeau informatif s'affiche lors de votre première visite. Votre consentement est valable 13 mois maximum." },
        { title: "Gestion", text: "Vous pouvez à tout moment paramétrer vos préférences de cookies via les réglages de votre navigateur." },
        { title: "Protection des données", text: "Le traitement de vos données est conforme à la législation burkinabè en vigueur. Elles ne sont ni cédées ni revendues à des tiers." },
      ],
    },

    terms: {
      kicker: "Informations légales",
      title: "Conditions d'utilisation",
      lede: "Les règles d'usage du site officiel de l'Autorité de Régulation du Secteur de l'Énergie.",
      sections: [
        { title: "Objet du site", text: "Ce site a pour objet de présenter l'ARSE, ses missions, ses publications officielles et son actualité." },
        { title: "Propriété intellectuelle", text: "L'ensemble des contenus (textes, images, documents) publiés sur ce site est la propriété de l'ARSE, sauf mention contraire." },
        { title: "Usage des documents", text: "Les documents officiels (lois, décrets, décisions, arrêtés) sont mis à disposition à titre informatif. Seules les publications au Journal officiel font foi." },
        { title: "Responsabilité", text: "L'ARSE s'efforce d'assurer l'exactitude des informations publiées, mais ne saurait être tenue responsable des erreurs ou omissions." },
        { title: "Liens externes", text: "Ce site peut contenir des liens vers des sites tiers, sur lesquels l'ARSE n'exerce aucun contrôle." },
      ],
    },
  },
};
