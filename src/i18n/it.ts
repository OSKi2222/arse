import type { Dictionary } from "./index";

export const it: Dictionary = {
  meta: {
    title: "Autorità di Regolazione del Settore dell'Energia",
    description:
      "L'ARSE regola il settore dell'energia in Burkina Faso: tutela utenti e operatori, fissa le tariffe, risolve le controversie e rende conto al Primo Ministro.",
  },

  site: {
    fullName: "Autorità di Regolazione del Settore dell'Energia",
    hoursLabel: "Lunedì – Venerdì, 07:30 – 16:00",
  },

  nav: {
    contact: "Contattaci",
    menu: "Menu",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    home: "Home",
    mainNavigation: "Navigazione principale",
    languageLabel: "Lingua",
    items: [
      { key: "home", label: "Home", href: "/", desc: "Torna alla pagina iniziale dell'ARSE.", children: [] },
      {
        key: "arse",
        label: "ARSE",
        href: "/arse/presentation/",
        desc: "Un'autorità amministrativa indipendente al servizio di un settore energetico regolato, trasparente e sostenibile.",
        children: [
          { label: "Presentazione", href: "/arse/presentation/" },
          { label: "Storia", href: "/arse/historique/" },
          { label: "Missione", href: "/arse/mission/" },
          { label: "Attribuzioni", href: "/arse/attributions/" },
          { label: "Organizzazione", href: "/arse/organisation/" },
          { label: "Lavora con noi", href: "/arse/recrutement/" },
        ],
      },
      {
        key: "documentation",
        label: "Documentazione",
        href: "/documentation/",
        desc: "Rapporti, bollettini, decisioni, decreti, leggi e regolamenti che disciplinano il settore dell'energia.",
        children: [
          { label: "Rapporti", href: "/documentation/rapports/" },
          { label: "Bollettini", href: "/documentation/bulletins/" },
          { label: "Decisioni", href: "/documentation/decisions/" },
          { label: "Decreti ministeriali", href: "/documentation/arretes/" },
          { label: "Leggi", href: "/documentation/lois/" },
          { label: "Decreti", href: "/documentation/decrets/" },
        ],
      },
      {
        key: "actualite",
        label: "Attualità",
        href: "/actualite/",
        desc: "Approfondimenti, editoriali, interviste e attività recenti dell'Autorità.",
        children: [
          { label: "Attività", href: "/actualite/activite/" },
          { label: "Approfondimento", href: "/actualite/dossier/" },
          { label: "Editoriale", href: "/actualite/editorial/" },
          { label: "Intervista", href: "/actualite/interview/" },
        ],
      },
      {
        key: "consommateur",
        label: "Consumatore",
        href: "/consommateur/",
        desc: "I vostri diritti, i mezzi di ricorso e le informazioni pratiche come utente del settore dell'energia.",
        children: [],
      },
      {
        key: "contact",
        label: "Contatti",
        href: "/contact/",
        desc: "Recapiti dell'ARSE, sede di Ouagadougou e social network ufficiali.",
        children: [],
      },
    ],
  },

  hero: {
    kicker: "Settore dell'energia regolato in modo continuativo",
    lines: [
      [{ text: "Un settore dell'energia" }],
      [{ text: "regolato", highlight: true }, { text: ", trasparente" }],
      [{ text: "e sostenibile" }],
    ],
    lede: "Scoprite il rapporto di attività 2025 dell'ARSE, testimonianza dei suoi risultati e del suo impegno per un settore energetico efficiente e sostenibile.",
    cta: "Leggi il rapporto 2025",
    counterLabel: "Produzione nazionale — 2024",
    imageAlt: "Tecnici al lavoro su una linea elettrica in Burkina Faso",
  },

  manifesto:
    "L'Autorità di Regolazione del Settore dell'Energia è un'autorità amministrativa indipendente, dotata di personalità giuridica e di autonomia finanziaria e gestionale. Regola il settore, tutela utenti e operatori, fissa le tariffe, risolve le controversie e rende conto al Primo Ministro.",

  missions: {
    kicker: "Le nostre attribuzioni",
    heading: "Cosa fa l'Autorità",
    intro: "Quattro leve d'azione definite dalla legge, al servizio di un servizio pubblico dell'energia affidabile ed equo.",
    scrollHint: "Scorri",
    outroTitle: "Tutte le attribuzioni dell'ARSE",
    outroText: "Il dettaglio delle competenze affidate all'Autorità dalla legge sulla regolamentazione generale del settore dell'energia.",
    outroCta: "Consulta",
    items: [
      {
        title: "Regolare il settore",
        text: "Vigilare sulle attività di produzione, trasporto e distribuzione dell'energia su tutto il territorio nazionale.",
        alt: "Ingegnere che analizza dati di produzione energetica",
      },
      {
        title: "Proteggere gli utenti",
        text: "Garantire un accesso equo, tariffe eque e un servizio di qualità sia per i consumatori sia per gli operatori del settore.",
        alt: "Rete di distribuzione elettrica in Burkina Faso",
      },
      {
        title: "Fissare le tariffe",
        text: "Determinare e rivedere le griglie tariffarie applicabili agli operatori del settore dell'energia.",
        alt: "Riunione tecnica attorno a un pannello solare",
      },
      {
        title: "Risolvere le controversie",
        text: "Istruire e arbitrare le controversie tra operatori, o tra operatori e utenti del servizio pubblico dell'energia.",
        alt: "Riunione di lavoro dell'ARSE",
      },
    ],
  },

  stats: {
    kicker: "Il settore in cifre",
    heading: "Dati di produzione energetica 2024",
    labels: [
      "Produzione nazionale di elettricità nel 2024",
      "Produzione privata immessa in rete",
      "Quota di energia termica",
      "Quota di energia solare",
    ],
  },

  president: {
    kicker: "Messaggio del Presidente",
    role: "Presidente del Consiglio di Regolazione",
    imageAlt: "Il Presidente del Consiglio di Regolazione dell'ARSE",
    quote:
      "A nome del Consiglio di Regolazione e di tutto il team dell'ARSE, vi do il benvenuto sul nostro sito web, uno spazio dedicato all'informazione, alla trasparenza e alla promozione di un settore energetico efficiente, equo e sostenibile.",
  },

  publications: {
    heading: "Rapporti, riviste e bollettini ufficiali",
    cta: "Tutta la documentazione",
    items: [
      { title: "Rapporto di attività 2024", type: "Rapporto" },
      { title: "Rapporto di attività 2023", type: "Rapporto" },
      { title: "Le Régulateur n. 014", type: "Rivista" },
      { title: "Bollettino ufficiale n. 13", type: "Bollettino" },
    ],
  },

  news: {
    heading: "Ultime notizie dell'ARSE",
    cta: "Tutta l'attualità",
    items: [
      {
        title: "Codice di rete elettrica: l'ARSE rafforza l'appropriazione presso gli attori del Nakambé, del Nazinon e del Goulmou",
        dateLabel: "15 settembre 2026",
        category: "Attività",
      },
      {
        title: "Protezione dei consumatori: l'ARSE riunisce sette regolatori attorno alle buone pratiche",
        dateLabel: "14 agosto 2026",
        category: "Approfondimento",
      },
      {
        title: "Tempi di trattamento delle pratiche: l'ARSE elabora un quadro di riferimento per rafforzare la celerità",
        dateLabel: "12 agosto 2026",
        category: "Editoriale",
      },
      {
        title: "Codice di rete elettrica: l'ARSE diffonde i contenuti presso gli attori del Guiriko",
        dateLabel: "24 agosto 2026",
        category: "Attività",
      },
    ],
  },

  cta: {
    heading: "Una domanda, un reclamo?",
    text: "L'ARSE è a disposizione degli utenti e degli operatori del settore dell'energia. Contattate il nostro team per qualsiasi richiesta di informazioni.",
    primary: "Contattaci",
  },

  footer: {
    rights: "Tutti i diritti riservati.",
    columns: [
      {
        title: "Risorse",
        links: [
          { label: "Decreti ministeriali", href: "/documentation/arretes/" },
          { label: "Decisioni", href: "/documentation/decisions/" },
          { label: "Bollettino ufficiale", href: "/documentation/bulletins/" },
          { label: "Rivista ARSE", href: "/documentation/journal/" },
          { label: "Consumatore", href: "/consommateur/" },
        ],
      },
      {
        title: "Attualità",
        links: [
          { label: "Approfondimento", href: "/actualite/dossier/" },
          { label: "Editoriale", href: "/actualite/editorial/" },
          { label: "Intervista", href: "/actualite/interview/" },
          { label: "Audizione", href: "/actualite/audience/" },
          { label: "Comunicato", href: "/actualite/communique/" },
        ],
      },
      {
        title: "Link utili",
        links: [
          { label: "ANEREE", href: "https://aneree.bf/", external: true },
          { label: "SONABEL", href: "https://www.sonabel.bf/", external: true },
          { label: "Ministero dell'Energia", href: "https://energie.gov.bf/", external: true },
          { label: "ABER", href: "https://aber.bf/", external: true },
        ],
      },
      {
        title: "Altro",
        links: [
          { label: "Partner", href: "/partenaires/" },
          { label: "Lavora con noi", href: "/arse/recrutement/" },
          { label: "Politica dei cookie", href: "/politique-cookies/" },
          { label: "Condizioni d'uso", href: "/conditions-utilisation/" },
        ],
      },
    ],
  },

  common: {
    readMore: "Leggi tutto",
    download: "Scarica",
    consult: "Consulta",
    backTo: "Torna a",
    viewAll: "Vedi tutto",
    source: "Documento ufficiale — fonte: arse.bf",
  },

  pages: {
    presentation: {
      kicker: "L'ARSE",
      title: "Presentazione",
      lede: "Un'autorità amministrativa indipendente, dotata di personalità giuridica e di autonomia finanziaria e gestionale.",
      intro:
        "L'Autorità di Regolazione del Settore dell'Energia (ARSE) è un'autorità amministrativa indipendente dotata di personalità giuridica e di autonomia finanziaria e gestionale. Garantisce la regolazione, il controllo e il monitoraggio delle attività degli operatori del settore dell'energia.",
      quote: "L'ARSE, autorità indipendente, regola e controlla il settore dell'energia in Burkina Faso.",
      contextTitle: "Un quadro giuridico rafforzato",
      context:
        "Il Governo del Burkina Faso ha riformato il settore elettrico con l'adozione della Legge n. 027-2007/AN del 20 novembre 2007, prima di estendere la regolazione all'intero settore dell'energia con la legge del 20 aprile 2017.",
      visionTitle: "Visione 2027",
      vision:
        "Entro il 2027, l'ARSE avrà consolidato la propria notorietà e la propria immagine a livello nazionale, affermandosi come regolatore di riferimento nella sub-regione.",
      valuesTitle: "I nostri valori",
      values: ["Professionalità", "Riservatezza", "Anticipazione dell'innovazione", "Spirito di squadra e solidarietà", "Partenariato"],
    },

    historique: {
      kicker: "L'ARSE",
      title: "Storia",
      lede: "Due grandi riforme hanno plasmato il settore energetico del Burkina Faso e dato vita all'ARSE.",
      milestones: [
        {
          year: "2007",
          title: "Legge n. 027-2007/AN del 20 novembre 2007",
          text:
            "Il Governo del Burkina Faso ha riformato il settore elettrico con questa legge, che ha modificato la struttura dell'industria elettrica promuovendo l'efficienza e la qualità del servizio agli utenti attraverso la concorrenza, aumentando l'offerta rispetto alla domanda. Da questa legge nasce l'Autorità di Regolazione del Sottosettore dell'Elettricità (ARSE), un'autorità amministrativa indipendente incardinata presso l'Ufficio del Primo Ministro e dotata di autonomia finanziaria.",
        },
        {
          year: "2017",
          title: "Legge del 20 aprile 2017",
          text:
            "Il Burkina Faso si è dotato di una nuova legge sull'energia volta a risolvere lo squilibrio tra la domanda di elettricità dei cittadini e l'offerta dell'operatore principale, la Sonabel. Le sue principali innovazioni: la regolazione dell'intero settore energetico, ad eccezione del sottosettore degli idrocarburi; la presa in considerazione delle disposizioni comunitarie relative al mercato subregionale dell'elettricità; la soppressione della segmentazione e dell'acquirente unico; la possibilità per alcuni clienti idonei di rifornirsi dal fornitore di loro scelta, sul territorio nazionale o all'estero; l'introduzione di disposizioni relative alla promozione delle energie rinnovabili e all'efficienza energetica; l'ampliamento dei poteri del regolatore all'intero settore energetico — l'ARSE diventa l'Autorità di Regolazione del Settore dell'Energia — e la definizione delle modalità del suo finanziamento.",
        },
      ],
    },

    mission: {
      kicker: "L'ARSE",
      title: "Missione",
      lede: "L'ARSE regola il settore dell'energia, tutela utenti e operatori, fissa le tariffe, risolve le controversie e rende conto ogni anno al Primo Ministro.",
      items: [
        "Vigilare sul rispetto dei testi legislativi e regolamentari che disciplinano il settore dell'energia",
        "Salvaguardare gli interessi degli utenti del servizio pubblico dell'energia",
        "Tutelare i diritti degli operatori del settore dell'energia",
        "Proporre allo Stato le tariffe applicabili nel settore dell'energia",
        "Risolvere le controversie nel settore dell'energia tra i diversi operatori",
        "Vigilare sull'equilibrio finanziario complessivo del settore dell'energia",
      ],
      accountabilityTitle: "Responsabilità",
      accountability:
        "Ogni anno, il Presidente dell'ARSE presenta al Primo Ministro una relazione sulle attività svolte nell'anno precedente. Una copia di tale relazione è inviata al Ministro incaricato dell'energia, agli organi di controllo amministrativo dello Stato e alla Corte dei Conti.",
    },

    attributions: {
      kicker: "L'ARSE",
      title: "Attribuzioni",
      lede: "Un doppio potere, consultivo e decisionale, conferito all'Autorità dalla legge sulla regolamentazione generale del settore dell'energia.",
      consultativeTitle: "Potere consultivo",
      consultativeIntro: "L'ARSE esprime un parere semplice nei seguenti casi:",
      consultative: [
        "I progetti di testi legislativi e regolamentari relativi al settore",
        "I programmi di investimento sottoposti dal ministero competente per l'energia",
        "La requisizione degli impianti di autoproduzione",
      ],
      decisionTitle: "Potere decisionale",
      decisionIntro: "L'ARSE esprime un parere vincolante nei seguenti casi:",
      decision: [
        "La concessione, il rinnovo, la revisione, la modifica o la revoca di concessioni, licenze e autorizzazioni",
        "Le condizioni di accesso dei terzi alle reti",
        "I capitolati d'oneri degli operatori del settore dell'energia",
      ],
    },

    organisation: {
      kicker: "L'ARSE",
      title: "Organizzazione",
      lede: "L'ARSE si articola in quattro organi che garantiscono la governance, il coordinamento e l'attuazione delle sue funzioni di regolazione.",
      organs: [
        {
          title: "Consiglio di regolazione",
          text: "L'organo collegiale decisionale dell'ARSE, incaricato di adottare i pareri, le decisioni e le raccomandazioni dell'Autorità nell'esercizio delle sue funzioni di regolazione.",
        },
        {
          title: "Segretariato Generale",
          text: "L'organo incaricato del coordinamento amministrativo dell'ARSE e dell'attuazione operativa delle decisioni del Consiglio di regolazione.",
        },
        {
          title: "Direzioni Operative",
          text: "Le direzioni incaricate dell'attuazione tecnica delle funzioni di regolazione del settore energetico: fissazione delle tariffe, controllo degli operatori e risoluzione delle controversie.",
        },
        {
          title: "Direzioni e servizi trasversali",
          text: "Le direzioni e i servizi di supporto al funzionamento dell'Autorità: risorse umane, finanza, comunicazione e sistemi informativi.",
        },
      ],
    },

    recrutement: {
      kicker: "L'ARSE",
      title: "Lavora con noi",
      lede: "Unisciti all'ARSE e contribuisci a costruire un settore energetico efficiente, sostenibile e al servizio di tutti.",
      jobsTitle: "Opportunità di lavoro",
      jobsText:
        "L'Autorità di Regolazione del Settore dell'Energia (ARSE) tiene particolarmente a circondarsi di competenze qualificate. Le candidature spontanee possono essere inviate via e-mail.",
      internshipsTitle: "Stage",
      internshipsText: "L'ARSE accoglie anche tirocinanti accademici o professionali desiderosi di formarsi nel campo della regolazione.",
      proceduresTitle: "Composizione della domanda",
      procedures: ["Una domanda", "Una lettera di motivazione", "Un curriculum vitae"],
      contactTitle: "Invia una candidatura",
    },

    documentation: {
      kicker: "Documentazione",
      title: "Documentazione",
      lede: "Rapporti, bollettini, rivista, leggi, decreti, decisioni e regolamenti che disciplinano il settore dell'energia in Burkina Faso.",
      categories: [
        { label: "Rapporti di attività", href: "/documentation/rapports/", desc: "Il bilancio annuale dei risultati dell'Autorità." },
        { label: "Bollettini ufficiali", href: "/documentation/bulletins/", desc: "La pubblicazione di riferimento degli atti di regolazione." },
        { label: "Rivista ARSE", href: "/documentation/journal/", desc: "Le Régulateur de l'énergie — notizie e approfondimenti dal settore." },
        { label: "Leggi", href: "/documentation/lois/", desc: "I testi legislativi che disciplinano il settore dell'energia." },
        { label: "Decreti", href: "/documentation/decrets/", desc: "I decreti attuativi adottati in Consiglio dei Ministri." },
        { label: "Decisioni", href: "/documentation/decisions/", desc: "Le decisioni dell'ARSE sulle pratiche di sua competenza." },
        { label: "Regolamenti", href: "/documentation/arretes/", desc: "I decreti ministeriali e interministeriali." },
      ],
    },
    rapports: { kicker: "Documentazione", title: "Rapporti di attività", lede: "Il bilancio annuale dei risultati e dell'impegno dell'ARSE per un settore energetico efficiente e sostenibile." },
    bulletins: { kicker: "Documentazione", title: "Bollettini ufficiali", lede: "La pubblicazione di riferimento per seguire le attività e le decisioni del regolatore dell'energia." },
    journal: { kicker: "Documentazione", title: "Rivista ARSE — Le Régulateur", lede: "Scopri i nostri articoli e resta informato sugli sviluppi del settore dell'energia." },
    lois: { kicker: "Documentazione", title: "Leggi", lede: "I testi legislativi relativi alla regolamentazione generale del settore dell'energia in Burkina Faso." },
    decrets: { kicker: "Documentazione", title: "Decreti", lede: "I decreti attuativi adottati in Consiglio dei Ministri per l'attuazione della regolamentazione del settore." },
    decisions: { kicker: "Documentazione", title: "Decisioni", lede: "Le decisioni emesse dall'ARSE sulle pratiche di sua competenza." },
    arretes: { kicker: "Documentazione", title: "Regolamenti", lede: "I decreti ministeriali e interministeriali applicabili al settore dell'energia." },

    actualiteHub: {
      kicker: "Attualità",
      title: "Attualità",
      lede: "Approfondimenti, editoriali, interviste e attività recenti dell'Autorità di Regolazione del Settore dell'Energia.",
      categories: [
        { label: "Attività", href: "/actualite/activite/", desc: "Workshop, missioni sul campo e azioni dell'ARSE." },
        { label: "Approfondimento", href: "/actualite/dossier/", desc: "Analisi approfondite sui grandi temi del settore." },
        { label: "Editoriale", href: "/actualite/editorial/", desc: "Il punto di vista dell'ARSE sull'attualità del settore dell'energia." },
        { label: "Intervista", href: "/actualite/interview/", desc: "Incontri con gli attori del settore dell'energia." },
      ],
    },
    activite: { kicker: "Attualità", title: "Attività", lede: "Workshop, missioni sul campo e azioni recenti dell'ARSE presso gli attori del settore." },
    dossier: { kicker: "Attualità", title: "Approfondimento", lede: "Analisi approfondite sui grandi temi che strutturano il settore dell'energia." },
    editorial: { kicker: "Attualità", title: "Editoriale", lede: "Il punto di vista dell'ARSE sull'attualità e sulle sfide del settore dell'energia." },
    interview: { kicker: "Attualità", title: "Intervista", lede: "Incontri con gli attori e i partner del settore dell'energia.", empty: "Nessun articolo da visualizzare al momento." },

    consommateur: {
      kicker: "Consumatore",
      title: "I tuoi diritti come utente",
      lede: "Tutelare gli utenti del servizio pubblico dell'energia è una delle missioni centrali dell'ARSE.",
      intro:
        "In quanto utente del settore dell'energia, avete diritto a un accesso equo, tariffe eque e un servizio di qualità. L'ARSE vigila sul rispetto di questi diritti e può essere adita in caso di controversia con un operatore del settore.",
      rightsTitle: "Ciò che la regolazione garantisce",
      rights: [
        "Un accesso equo ai servizi energetici su tutto il territorio",
        "Tariffe fissate e controllate dall'Autorità, mai arbitrarie",
        "Un servizio di qualità da parte degli operatori autorizzati",
        "La possibilità di ricorrere all'ARSE in caso di controversia con un operatore",
      ],
      resourcesTitle: "Risorse utili",
    },

    contact: {
      kicker: "Contatti",
      title: "Contattaci",
      lede: "Per qualsiasi informazione o preoccupazione relativa al settore dell'energia, contattate direttamente l'ARSE.",
      formTitle: "Inviaci un messaggio",
      fields: {
        name: "Il tuo nome",
        phone: "Telefono",
        email: "La tua e-mail",
        locality: "La tua località",
        province: "La tua provincia",
        subject: "Oggetto",
        message: "Il tuo messaggio",
      },
      submit: "Invia il messaggio",
      formNote: "Modulo da collegare a un servizio di invio e-mail (es. Formspree) prima della messa in produzione.",
      success: "Messaggio convalidato. (Modalità demo: nessun dato è stato effettivamente inviato.)",
      sending: "Invio in corso…",
      infoTitle: "Recapiti",
      hoursTitle: "Orari",
    },

    partenaires: {
      kicker: "Partner",
      title: "I nostri partner",
      lede: "L'ARSE opera al fianco delle istituzioni pubbliche del settore dell'energia in Burkina Faso.",
      items: [
        { name: "ANEREE", desc: "Agenzia Nazionale per le Energie Rinnovabili e l'Efficienza Energetica", href: "https://aneree.bf/" },
        { name: "SONABEL", desc: "Società Nazionale di Elettricità del Burkina", href: "https://www.sonabel.bf/" },
        { name: "Ministero dell'Energia", desc: "Ministero competente per l'energia, le miniere e le cave", href: "https://www.energie-mines.gov.bf/accueil" },
        { name: "ABER", desc: "Agenzia Burkinabè per l'Elettrificazione Rurale", href: "https://aber.bf/" },
      ],
    },

    cookies: {
      kicker: "Informazioni legali",
      title: "Politica dei cookie",
      lede: "Come il sito dell'ARSE utilizza i cookie e come potete gestire le vostre preferenze.",
      sections: [
        { title: "Cookie strettamente necessari", text: "Indispensabili per il corretto funzionamento del sito; non possono essere disattivati." },
        { title: "Cookie di prestazione", text: "Misurano il traffico del sito e permettono di analizzarne l'utilizzo per migliorarlo." },
        { title: "Cookie di funzionalità", text: "Memorizzano le vostre preferenze per una navigazione più fluida da una visita all'altra." },
        { title: "Cookie di terze parti", text: "Alcuni contenuti incorporati (video, social network) possono depositare propri cookie." },
        { title: "Consenso", text: "Al primo accesso viene mostrato un banner informativo. Il vostro consenso è valido per un massimo di 13 mesi." },
        { title: "Gestione", text: "Potete in qualsiasi momento configurare le vostre preferenze sui cookie tramite le impostazioni del vostro browser." },
        { title: "Protezione dei dati", text: "Il trattamento dei vostri dati è conforme alla normativa burkinabè vigente. Non vengono né ceduti né rivenduti a terzi." },
      ],
    },

    terms: {
      kicker: "Informazioni legali",
      title: "Condizioni d'uso",
      lede: "Le regole d'uso del sito ufficiale dell'Autorità di Regolazione del Settore dell'Energia.",
      sections: [
        { title: "Finalità del sito", text: "Questo sito ha lo scopo di presentare l'ARSE, le sue missioni, le sue pubblicazioni ufficiali e la sua attualità." },
        { title: "Proprietà intellettuale", text: "Tutti i contenuti (testi, immagini, documenti) pubblicati su questo sito sono di proprietà dell'ARSE, salvo diversa indicazione." },
        { title: "Uso dei documenti", text: "I documenti ufficiali (leggi, decreti, decisioni, regolamenti) sono messi a disposizione a scopo informativo. Fanno fede solo le pubblicazioni sulla Gazzetta Ufficiale." },
        { title: "Responsabilità", text: "L'ARSE si impegna a garantire l'accuratezza delle informazioni pubblicate, ma non può essere ritenuta responsabile di errori o omissioni." },
        { title: "Link esterni", text: "Questo sito può contenere link verso siti di terzi, sui quali l'ARSE non esercita alcun controllo." },
      ],
    },
  },
};
