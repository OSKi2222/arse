import { withBase } from "./base";

/** Données factuelles, identiques dans toutes les langues. */
export const SITE = {
  name: "ARSE",
  url: "https://www.arse.bf",
  address: {
    street: "Rue Georges OUEDRAOGO dit le Gandaogo national, Arrondissement n°5 - secteur n°24 (ZAD)",
    postal: "10 BP 13153",
    city: "Ouagadougou",
    country: "Burkina Faso",
  },
  phone: "+226 25 41 20 38",
  phoneDisplay: "(+226) 25 41 20 38",
  email: "infos@arse.bf",
  social: {
    facebook: "https://web.facebook.com/arse.burkina",
    linkedin: "https://www.linkedin.com/company/arse-burkina",
    youtube: "https://www.youtube.com/@AutoritedeRegulationduSecteurd",
    telegram: "https://t.me/+mdETknvrt400OWY0",
    whatsapp: "https://whatsapp.com/channel/0029Vak9GnPId7nGt4xwTD3Q",
  },
};

/** Visuels et données chiffrées de la page d'accueil (non traduisibles). */
export const HOME_MEDIA = {
  hero: withBase("/images/site/pylone.jpg"),
  president: withBase("/images/site/president.jpg"),
  missions: [
    withBase("/images/site/ingenieur.jpg"),
    withBase("/images/site/sonabel-poteau.jpg"),
    withBase("/images/site/regulation.jpg"),
    withBase("/images/site/photo-arse-1.jpeg"),
  ],
  publications: [
    { image: withBase("/images/site/rapport-2024.jpg"), href: "/documentation/rapports/" },
    { image: withBase("/images/site/rapport-2023.jpg"), href: "/documentation/rapports/" },
    { image: withBase("/images/site/journal-014.jpg"), href: "/documentation/journal/" },
    { image: withBase("/images/site/bulletin-13.jpg"), href: "/documentation/bulletins/" },
  ],
  news: [
    { image: withBase("/images/site/actu-1.jpg"), date: "2026-09-15", href: "/actualite/activite/" },
    { image: withBase("/images/site/actu-2.jpg"), date: "2026-08-14", href: "/actualite/activite/" },
    { image: withBase("/images/site/actu-3.jpg"), date: "2026-08-12", href: "/actualite/activite/" },
    { image: withBase("/images/site/actu-4.jpg"), date: "2026-08-24", href: "/actualite/activite/" },
  ],
};

export const STATS = [
  { value: 1411376568, decimals: 0, unit: "kWh" },
  { value: 227370, decimals: 0, unit: "MWh" },
  { value: 36, decimals: 0, unit: "%" },
  { value: 11.5, decimals: 1, unit: "%" },
];

export const NAV_IMAGES: Record<string, string> = {
  home: withBase("/images/site/pylone.jpg"),
  arse: withBase("/images/site/president.jpg"),
  documentation: withBase("/images/site/rapport-2024.jpg"),
  actualite: withBase("/images/site/actu-1.jpg"),
  consommateur: withBase("/images/site/sonabel-poteau.jpg"),
  contact: withBase("/images/site/photo-arse-1.jpeg"),
};

export const PARTNERS = ["ANEREE", "SONABEL", "Ministère de l'Énergie", "ABER", "Conseil de Régulation"];

/** Images d'en-tête (hero) par page, reprenant les visuels réels du site arse.bf. */
export const PAGE_HERO_IMAGES = {
  historique: withBase("/images/site/pylone.jpg"),
  mission: withBase("/images/site/regulation.jpg"),
  attributions: withBase("/images/site/regulation.jpg"),
  recrutement: withBase("/images/site/regulation.jpg"),
  contact: withBase("/images/site/pylone.jpg"),
  organisation: withBase("/images/site/president.jpg"),
  partenaires: withBase("/images/site/photo-arse-1.jpeg"),
  cookies: withBase("/images/site/pylone.jpg"),
  terms: withBase("/images/site/pylone.jpg"),
};

export const DOC_HERO_IMAGES: Record<string, string> = {
  rapports: withBase("/images/site/rapport-hero.jpg"),
  decrets: withBase("/images/site/rapport-hero.jpg"),
  journal: withBase("/images/site/le-regulateur-hero.png"),
  bulletins: withBase("/images/site/sonabel-poteau.jpg"),
  decisions: withBase("/images/site/decision-hero.jpg"),
  arretes: withBase("/images/site/ingenieur.jpg"),
  lois: withBase("/images/site/ingenieur.jpg"),
  documentation: withBase("/images/site/rapport-hero.jpg"),
  actualiteHub: withBase("/images/site/actu-1.jpg"),
};

export const NEWS_HERO_IMAGES: Record<string, string> = {
  activite: withBase("/images/site/actu-1.jpg"),
  dossier: withBase("/images/site/actu-2.jpg"),
  editorial: withBase("/images/site/actu-3.jpg"),
  interview: withBase("/images/site/actu-4.jpg"),
};
