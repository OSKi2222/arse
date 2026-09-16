/**
 * Documents officiels réels, récupérés sur arse.bf (liens PDF d'origine).
 * Les titres d'actes officiels ne sont volontairement pas traduits : un acte
 * légal garde son intitulé français quelle que soit la langue de consultation
 * — pratique standard des sites institutionnels multilingues.
 */
import { withBase } from "./base";

export interface DocEntry {
  title: string;
  meta: string;
  href: string;
  image?: string;
}

export const RAPPORTS: DocEntry[] = [
  { title: "Rapport d'activité 2024", meta: "Rapport", href: "https://www.arse.bf/wp-content/uploads/2025/08/Rapport-dactivite-2024.pdf", image: withBase("/images/site/rapport-2024.jpg") },
  { title: "Rapport d'activité 2023", meta: "Rapport", href: "https://www.arse.bf/wp-content/uploads/2025/08/Rapport-dactivite-2023.pdf", image: withBase("/images/site/rapport-2023.jpg") },
  { title: "Rapport d'activité 2022", meta: "Rapport", href: "https://www.arse.bf/wp-content/uploads/2025/11/rapport-annuel-2022.pdf", image: withBase("/images/site/rapport-2022.jpg") },
  { title: "Rapport d'activité 2021", meta: "Rapport", href: "https://www.arse.bf/wp-content/uploads/2025/11/Rapport-dactivites-2021.pdf", image: withBase("/images/site/rapport-2021.jpg") },
  { title: "Rapport d'activité 2020", meta: "Rapport", href: "https://www.arse.bf/wp-content/uploads/2025/08/Rapport-dactivite-2020.pdf", image: withBase("/images/site/rapport-2020.jpg") },
  { title: "Rapport d'activité 2019", meta: "Rapport", href: "https://www.arse.bf/wp-content/uploads/2025/08/Rapport-dactivite-2019.pdf", image: withBase("/images/site/rapport-2019.jpg") },
  { title: "Rapport d'activité 2018", meta: "Rapport", href: "https://www.arse.bf/wp-content/uploads/2025/08/Rapport-dactivite-2018.pdf", image: withBase("/images/site/rapport-2018.jpg") },
  { title: "Rapport d'activité 2017", meta: "Rapport", href: "https://www.arse.bf/wp-content/uploads/2025/08/Rapport-dactivite-2017.pdf", image: withBase("/images/site/rapport-2017.jpg") },
  { title: "Rapport d'activité 2016", meta: "Rapport", href: "https://www.arse.bf/wp-content/uploads/2025/08/Rapport-dactivite-2016.pdf", image: withBase("/images/site/rapport-2016.jpg") },
  { title: "Rapport d'activité 2015", meta: "Rapport", href: "https://www.arse.bf/wp-content/uploads/2025/08/Rapport-dactivite-2015.pdf", image: withBase("/images/site/rapport-2015.jpg") },
  { title: "Rapport d'activité 2014", meta: "Rapport", href: "https://www.arse.bf/wp-content/uploads/2025/08/Rapport-dactivite-2014.pdf", image: withBase("/images/site/rapport-2014.jpg") },
  { title: "Rapport d'activité 2013", meta: "Rapport", href: "https://www.arse.bf/wp-content/uploads/2025/08/Rapport-dactivite-2013.pdf", image: withBase("/images/site/rapport-2013.jpg") },
];

export const BULLETINS: DocEntry[] = [
  { title: "Bulletin officiel N°013", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2026/05/Bulletin-officiel-N13-2025.pdf", image: withBase("/images/site/bulletin-13.jpg") },
  { title: "Bulletin officiel N°012", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Bulletin-Officiel-N°012.pdf", image: withBase("/images/site/bulletin-012.jpg") },
  { title: "Bulletin officiel N°011", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Bulletin-Officiel-N°011.pdf", image: withBase("/images/site/bulletin-011.jpg") },
  { title: "Bulletin officiel N°009", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Bulletin-Officiel-N°009.pdf", image: withBase("/images/site/bulletin-009.jpg") },
  { title: "Bulletin officiel N°008", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Bulletin-Officiel-N°008.pdf", image: withBase("/images/site/bulletin-008.jpg") },
  { title: "Bulletin officiel N°006", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Bulletin-Officiel-N°006.pdf", image: withBase("/images/site/bulletin-006.jpg") },
  { title: "Bulletin officiel N°005", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Bulletin-Officiel-N°005.pdf", image: withBase("/images/site/bulletin-005.jpg") },
  { title: "Bulletin officiel N°000", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Bulletin-Officiel-N°000.pdf", image: withBase("/images/site/bulletin-000.jpg") },
];

export const JOURNAL: DocEntry[] = [
  { title: "Le Régulateur de l'énergie N°015", meta: "Décembre 2025", href: "https://www.arse.bf/wp-content/uploads/2026/05/JOURNAL-15-Decembre-2025.pdf" },
  { title: "Le Régulateur de l'énergie N°014", meta: "Juin 2025", href: "https://www.arse.bf/wp-content/uploads/2026/05/JOURNAL-LE-REGULATEUR-N°-014-JUIN-2025-.pdf", image: withBase("/images/site/journal-014.jpg") },
  { title: "Le Régulateur de l'énergie N°013", meta: "Décembre 2024", href: "https://www.arse.bf/wp-content/uploads/2026/05/JOURNAL-LE-REGULATEUR-013-DECEMBRE-2024.pdf", image: withBase("/images/site/journal-013.jpg") },
  { title: "Le Régulateur de l'énergie N°012", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Le-Regulateur-de-lenergie-N°12.pdf", image: withBase("/images/site/journal-012.jpg") },
  { title: "Le Régulateur de l'énergie N°011", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Le-Regulateur-de-lenergie-N°11.pdf", image: withBase("/images/site/journal-011.jpg") },
  { title: "Le Régulateur de l'énergie N°010", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Le-Regulateur-de-lenergie-N°10.pdf", image: withBase("/images/site/journal-010.jpg") },
  { title: "Le Régulateur de l'énergie N°008", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Le-Regulateur-de-lenergie-N°08.pdf", image: withBase("/images/site/journal-008.jpg") },
  { title: "Le Régulateur de l'énergie N°007", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Le-Regulateur-de-lenergie-N°07.pdf", image: withBase("/images/site/journal-007.jpg") },
  { title: "Le Régulateur de l'énergie N°006", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Le-Regulateur-de-lenergie-N°06.pdf", image: withBase("/images/site/journal-006.jpg") },
  { title: "Le Régulateur de l'énergie N°005", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Le-Regulateur-de-lenergie-N°05.pdf", image: withBase("/images/site/journal-005.jpg") },
  { title: "Le Régulateur de l'énergie N°003 & 004", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Le-Regulateur-de-lenergie-N°003-004.pdf", image: withBase("/images/site/journal-003-004.jpg") },
  { title: "Le Régulateur de l'énergie N°002", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Le-regulateur-de-lenergie-N°002.pdf", image: withBase("/images/site/journal-002.jpg") },
  { title: "Le Régulateur de l'énergie N°001", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Le-regulateur-de-lenergie-N°001.pdf", image: withBase("/images/site/journal-001.jpg") },
  { title: "Le Régulateur de l'énergie N°000", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/08/Le-regulateur-de-lenergie-N°000.pdf", image: withBase("/images/site/journal-000.jpg") },
];

export const LOIS: DocEntry[] = [
  { title: "Loi n°014-2017/AN portant réglementation générale du secteur de l'énergie", meta: "2017", href: "https://www.arse.bf/wp-content/uploads/2025/09/LOI-N°014_2017_AN-portant-reglementation-generale-du-secteur-de-lenergie.pdf" },
];

export const DECRETS: DocEntry[] = [
  { title: "Décret n°2025-0298/PRES/PM/MEMC/MEF portant adoption des règles techniques d'exploitation du réseau de transport de l'électricité", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2026/05/Decret-n°-2025-0298-PRES-PM-MEMC-MEF-portant-adoption-des-regles-techniques-dexploitation-du-reseau-4-1.pdf" },
  { title: "Décret n°2024-1023 portant organisation de l'électrification dans les centres ruraux", meta: "2024", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°-2024-1023-PRES-PM-MEMC-MATDS-MEFP-MDICAPME-portant-organisation-de-lelectrification-dans-les-centres-ruraux.pdf" },
  { title: "Décret n°2024-0977 portant conditions de l'autoproduction d'énergies renouvelables", meta: "2024", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°-2024-0977-PRES-PM-MEMC-MEFP-MDICAPME-portant-conditions-de-lautoproduction-denergies-renouvelables-modalites-dacces-des-autoproducteurs-denergies-renouvelables-.pdf" },
  { title: "Décret n°2024-0857 portant modalités de fixation des rémunérations des personnels des sociétés d'État", meta: "2024", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°-2024-0857-PRE-PM-MDICAPME-MFPTPS-MEFP-.pdf" },
  { title: "Décret n°2021-1308 portant institution d'une redevance énergétique", meta: "2021", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2021_1308_PRES_PM_MINEFID_MEMC_MICA-portant-institution-dune-redevance-energetique-et-determination-de-la-cle-de-repartition-de-cette-redevance.pdf" },
  { title: "Décret n°2020-0278 portant attributions, organisation et fonctionnement de l'ARSE", meta: "2020", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2020_0278_PRES_PM_ME_MCIA_MINEFID-portant-attributions-organisation-et-fonctionnement-de-lAutorite-de-regulation-du-secteur-de-lenergie.pdf" },
  { title: "Décret n°2020-0255 portant conditions et procédures d'octroi de concession et d'autorisation de production et de distribution d'électricité", meta: "2020", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2020_0255_PRES_PM_ME_MCIA_MINEFID_MATD_CMH-portant-conditions-et-procedures-doctroi-de-concession-et-dautorisation-de-production-et-de-distribution-denergie-electrique.pdf" },
  { title: "Décret n°2019-1260 portant statuts de l'ANEREE", meta: "2019", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2019_1260_PRES_PM_ME_MINEFID-portant-approbation-des-statuts-de-lAgence-nationale-des-energies-renouvelables-et-de-lefficacite-energetique-ANEREE.pdf" },
  { title: "Décret n°2019-0901 portant fixation du niveau de consommation annuelle en énergie électrique du client éligible", meta: "2019", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2019_0901_PRES_PM_ME_MINEFID_MCIA-portant-fixation-du-niveau-de-consommation-annuelle-en-energie-electrique-du-client-eligible-et-les-conditions-de-son-retour-aux-tarifs-regules.pdf" },
  { title: "Décret n°2019-0903 portant seuils de production et conditions d'agrément carburant/gaz à base de biomasse", meta: "2019", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2019_0903_PRES_PM_ME_MINEFID_MCIA-portant-fixation-des-seuils-de-production-et-des-conditions-dobtention-des-agrements-de-production-de-carburant-ou-de-gaz-a-base-de-biomasse.pdf" },
  { title: "Décret n°2019-0902 portant modalités d'accès des autoproducteurs d'énergies renouvelables au réseau électrique", meta: "2019", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2019_0902_PRES_PM_ME_MINEFID_MCIA-portant-modalites-dacces-des-autoproducteurs-denergies-renouvelables-au-reseau-electrique-et-conditions-de-rachat-de-leur-excedent-denergie.pdf" },
  { title: "Décret n°2018-0569 portant cahier des charges applicable au concessionnaire de distribution d'électricité", meta: "2018", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2018_0569_PRES_PM_ME_MINEFID_MCIA_MATD-portant-adoption-dun-cahier-des-charges-applicable-au-concessionnaire-de-distribution-delectricite-au-Burkina-Faso.pdf" },
  { title: "Décret n°2018-0857 portant statuts de la SONABEL", meta: "2018", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2018_0857_PRES_PM_ME_MINEFID-portant-approbation-des-statuts-de-la-Societe-nationale-delectricite-du-Burkina-SONABEL.pdf" },
  { title: "Décret n°2018-1100 portant érection de l'ABER en établissement public", meta: "2018", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2018_1100_PRES_PM_MINEFID_ME-portant-erection-de-lAgence-burkinabe-delectrification-rurale-ABER-en-etablissement-public-de-lEtat-a-caractere-administratif-2.pdf" },
  { title: "Décret n°2018-1119 portant dissolution du Fonds de développement de l'électrification (FDE)", meta: "2018", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2018_1119_PRES_PM_MINEFID_ME-portant-dissolution-du-Fonds-de-Developpement-de-lElectrification-FDE.pdf" },
  { title: "Décret n°2018-1160 portant statuts de l'ABER", meta: "2018", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2018_1160_PRES_PM_ME_MINEFID-portant-approbation-des-statuts-de-lAgence-burkinabe-de-lelectrification-rurale-ABER.pdf" },
  { title: "Décret n°2017-1014 portant normes et exigences d'efficacité énergétique", meta: "2017", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2017_1014_PRES_PM_ME_MCIA_MINEFID-portant-fixation-des-normes-et-exigences-defficacite-energetique-sappliquant-aux-appareils-et-equipements-ainsi-que-leurs-modalites-de-mise-en-oeuvre.pdf" },
  { title: "Décret n°2017-1013 portant cahier des charges applicable aux producteurs d'énergie électrique", meta: "2017", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2017_1013_PRES_PM_ME_MINEFID_MCIA-portant-adoption-dun-cahier-des-charges-applicable-aux-producteurs-denergie-electrique-au-Burkina-Faso.pdf" },
  { title: "Décret n°2017-1012 portant conditions et modalités d'octroi des licences ou autorisations de production d'énergie électrique", meta: "2017", href: "https://www.arse.bf/wp-content/uploads/2025/09/DECRET-N°2017_1012_PRES_PM_ME_MCIA_MINEFID-portant-conditions-et-modalites-doctroi-des-licences-ou-autorisations-de-production-denergie-electrique.pdf" },
];

export const DECISIONS: DocEntry[] = [
  { title: "Décision 2019-001 portant nomination d'une Personne Responsable des Marchés (PRM) à l'ARSE", meta: "2019", href: "https://www.arse.bf/wp-content/uploads/2025/08/Decision-2019-001-portant-nomination-dune-Personne-Responsable-des-Marches-PRM-a-lAutorite-de-Regulation-du-Secteur-de-lEnergie.pdf" },
  { title: "Décision N°2016 portant avis sur les seuils déclencheurs de subventions (hydrocarbures SONABEL, 2017)", meta: "2016", href: "https://www.arse.bf/wp-content/uploads/2025/08/Decision-N°-2016-portant-avis-sur-les-seuils-declencheurs-de-subventions-pour-les-prix-des-hydraucarbures-livres-aux-centrales-thermiques-de-la-SONABEL-au-titre-de-lannee-2017.pdf" },
  { title: "Décision N°2017 portant avis sur les seuils déclencheurs de subventions (hydrocarbures, 2018)", meta: "2017", href: "https://www.arse.bf/wp-content/uploads/2025/08/Decision-N°-2017-portant-avis-sur-les-seuils-declencheurs-de-subventions-pour-les-prix-des-hydrocarbures-livres-a-la-SONABEL-par-la-SONABHY-au-titre-de-lannee-2018.pdf" },
  { title: "Décision N°2019-002 portant avis sur les seuils déclencheurs de subventions (hydrocarbures, 2019)", meta: "2019", href: "https://www.arse.bf/wp-content/uploads/2025/08/Decision-N°-2019-002-portant-avis-sur-les-seuils-declencheurs-de-subventions-pour-les-prix-des-hydraucarbures-livrees-a-la-SONABEL-par-la-SONABHY-au-titre-de-lannee-2019.pdf" },
];

export const ARRETES: DocEntry[] = [
  { title: "Arrêté 2025-262 MEMC/DG/DGE portant adoption d'un contrat-type de rachat de l'excédent d'énergie électrique des énergies renouvelables", meta: "2025", href: "https://www.arse.bf/wp-content/uploads/2025/11/Arrete-2025-262MEMCDGDGE-portant-adoption-dun-contrat-type-de-rachat-de-lexcedent-de-lenergie-electriq.pdf" },
  { title: "Arrêté interministériel n°2024-024-00 portant fixation du tarif de vente d'électricité aux stations de recharge pour véhicules électriques", meta: "2024", href: "https://www.arse.bf/wp-content/uploads/2025/09/n°2024-024-00-Arrete-interministeriel-MEMC-MDICAPME-MEFP-portant-fixation-du-tarif-de-vente-delectricite-aux-stations-de-recharge-pour-vehicules-electriques-ouverte-au-public.pdf" },
  { title: "Arrêté n°2024-519/MEMC/SG portant cahier des charges pour la gestion des infrastructures électriques en zones rurales", meta: "2024", href: "https://www.arse.bf/wp-content/uploads/2025/09/ARRETE-N°2024-519-MEMC-SG-PORTANT-ADOPTION-DUN-CAHIER-DES-CHARGES-APPLICABLE-AUX-TRANSFERTDE-LA-GESTION-ET-LEXPLOITATION-DES-INFRASTRUCTURES-ELECTRIQUES-DANS-LES-CENTRES-RURAUX_0001.pdf" },
  { title: "Arrêté n°2024-518/MEMC/SG portant conditions de conservation des concessions en centres ruraux", meta: "2024", href: "https://www.arse.bf/wp-content/uploads/2025/09/ARRETE-N°2024-518-MEMC-SG-PORTANT-CONDITIONS-DE-CONCERVATION-DES-CONCESSIONS-DANS-LES-CETRES-RURAUX_0001.pdf" },
  { title: "Arrêté n°2024-517/MEMC/SG portant cahier des charges pour l'exploitation des localités transférées", meta: "2024", href: "https://www.arse.bf/wp-content/uploads/2025/09/ARRETE-N°2024-517-MEMC-SG-CAHIER-DES-CHARGES-EXPLOITATION-DES-LOCALITES-TRANSFEREES_0001.pdf" },
  { title: "Arrêté n°2024-304/MEMC/SG/DGE portant règles techniques de raccordement au réseau de transport électrique", meta: "2024", href: "https://www.arse.bf/wp-content/uploads/2025/09/Arrete-n°2024-304-MEMC-SG-DGE-portant-approbation-des-regles-techniques-de-raccordement-au-reseau-de-.pdf" },
  { title: "Arrêté interministériel n°2024-025-0035 portant fixation de prix de vente en gros pour l'électrification rurale", meta: "2024", href: "https://www.arse.bf/wp-content/uploads/2025/09/ARRETE-INTERMINISTERIEL-N°2024-025-0035-MEMC-MICA-MEF-portant-fixation-de-prix-de-vente-en-gros-dans-le-domaine-de-lelectrification-rurale_0001.pdf" },
  { title: "Arrêté interministériel n°2024-025-0034 portant tarifs pour consommateurs finaux en zones rurales électrifiées", meta: "2024", href: "https://www.arse.bf/wp-content/uploads/2025/09/ARRETE-INTERMINISTERIEL-N°2024-025-0034-MEMC-MICA-MEF-portant-fixation-des-tarifs-applicables-aux-consommateurs-finaux-les-localites-electriees-du-domaine-de-lelectrification-rurale_ok_0001.pdf" },
  { title: "Arrêté interministériel n°2024-127 portant commission technique d'examen des dossiers de concessions énergétiques", meta: "2024", href: "https://www.arse.bf/wp-content/uploads/2025/09/ARRETE-INTERMINISTERIE-12-N°2024-MEMC-MATDS-MUAFH-portant-creation-attributions-composition-organisation-et-fonctionnement-de-la-commission-technique-dexamen-des-dossiers-d.pdf" },
  { title: "Arrêté conjoint n°2024-089 portant droits fixes pour octroi/renouvellement de concessions ou autorisations", meta: "2024", href: "https://www.arse.bf/wp-content/uploads/2025/09/ARRETE-CONJOINT-N2024-089-MEMC-MEFP-portant-fixation-des-droits-fixes-a-payer-pour-loctroi-ou-le-renouvellement-dune-concession-ou-dune-autorisation.pdf" },
  { title: "Arrêté interministériel n°2023-382 portant tarifs de vente d'électricité par la SONABEL", meta: "2023", href: "https://www.arse.bf/wp-content/uploads/2025/09/N°2023-2023-382-Arrete-Interministeriel-MEMC-MEFP-MDICAPME-portant-fixation-des-tarifs-de-vente-de-lenergie-electrique-par-la-Societe-Nationale-dElectricite-du-Burkina-SONABEL.pdf" },
  { title: "Arrêté interministériel n°2020-24-099 portant montant et modalités de perception des frais d'autorisation d'installation", meta: "2020", href: "https://www.arse.bf/wp-content/uploads/2025/09/Arrete-interministeriel-no2020.24-099-MEMC-MDICAPME-MEFP-portant-fixation-du-montant-et-des-modalites-de-perceptions-des-frais-doctroi-de-lautorisation-dinstallation-.pdf" },
  { title: "Arrêté interministériel n°2020-033 portant exonération TVA sur équipements et matériels solaires", meta: "2020", href: "https://www.arse.bf/wp-content/uploads/2025/09/ARRETE-interministeriel-N°2020_033_ME_MEF_MCIA-portant-conditions-deligibilite-et-modalites-de-jouissance-de-lexoneration-de-la-TVA-sur-les-importations-et-les-ventes-dequipements-et-de-materiels-solaires.pdf" },
  { title: "Arrêté n°2018-070 portant cahier des charges pour audits énergétiques", meta: "2018", href: "https://www.arse.bf/wp-content/uploads/2025/09/ARRETE_N°2018_070_ME_MCIA-portant_adoption-dun-cahier-des-charges-applicableaux-audits-nergetiques-auB-urkina-Faso-1.pdf" },
  { title: "Arrêté n°2018-097 portant agrément technique pour exercice d'audit énergétique", meta: "2018", href: "https://www.arse.bf/wp-content/uploads/2025/09/ARRETE-N°2018_097_ME_SG_DGEE-portant-conditions-et-modalites-de-delivrance-de-suspension-et-de-retrait-de-lagrement-technique-dexercice-de-laudit-energetique-2-1.pdf" },
  { title: "Arrêté n°2018-095 portant niveaux d'extension ou de modification exigeant un nouvel audit énergétique", meta: "2018", href: "https://www.arse.bf/wp-content/uploads/2025/09/ARRETE-N°2018_095_ME_SG_DGEE-portant-determination-des-niveaux-dextension-ou-de-modifications-exigeant-un-nouvel-audit-energetique-1.pdf" },
  { title: "Arrêté n°17-118 portant règles techniques de production d'énergie électrique", meta: "2017", href: "https://www.arse.bf/wp-content/uploads/2025/09/ARRETE-N°17_118_ME_SG_ME_-portant-fixation-des-regles-techniques-de-production-denergie-electrique-1.pdf" },
];

export interface NewsEntry {
  title: string;
  dateLabel: string;
  date: string;
  category: string;
  excerpt: string;
  href: string;
  image?: string;
}

/** Articles réels, tels que publiés sur arse.bf (liens externes vers l'article d'origine). */
export const NEWS_ACTIVITE: NewsEntry[] = [
  {
    title: "Production et distribution d'électricité : le projet de contrat-type de concession finalisé",
    dateLabel: "16 septembre 2026",
    date: "2026-09-16",
    category: "Activité",
    excerpt: "L'ARSE a organisé le 8 septembre 2026 un atelier d'examen du projet de contrat-type de concession pour la production et distribution d'électricité.",
    href: "https://www.arse.bf/production-et-distribution-delectricite-le-projet-de-contrat-type-de-concession-finalise/",
  },
  {
    title: "Semaine de l'Energie de l'AES : le Premier ministre visite le stand de l'ARSE",
    dateLabel: "15 septembre 2026",
    date: "2026-09-15",
    category: "Activité",
    excerpt: "Le Premier Ministre Rimtalba Jean-Emmanuel OUEDRAOGO a visité le stand de l'ARSE lors de la première édition de la Semaine de l'Energie de l'AES.",
    href: "https://www.arse.bf/semaine-de-lenergie-de-laes-le-premier-ministre-visite-le-stand-de-larse/",
    image: withBase("/images/site/actu-1.jpg"),
  },
  {
    title: "Code de réseau électrique : l'ARSE renforce l'appropriation auprès des acteurs du Nakambé, du Nazinon et du Goulmou",
    dateLabel: "15 septembre 2026",
    date: "2026-09-15",
    category: "Activité",
    excerpt: "Atelier organisé du 08 au 10 septembre 2026 à Tenkodogo pour vulgariser le Code de réseau électrique auprès des acteurs régionaux.",
    href: "https://www.arse.bf/code-de-reseau-electrique-larse-renforce-lappropriation-aupres-des-acteurs-du-nakambe-du-nazinon-et/",
  },
  {
    title: "Code de réseau électrique : l'ARSE vulgarise le contenu auprès des acteurs du Guiriko",
    dateLabel: "24 août 2026",
    date: "2026-08-24",
    category: "Activité",
    excerpt: "Atelier régional organisé du 19 au 21 août 2026 à Bobo-Dioulasso pour les acteurs du secteur énergétique.",
    href: "https://www.arse.bf/code-de-reseau-electrique-larse-vulgarise-le-contenu-aupres-des-acteurs-du-guiriko/",
    image: withBase("/images/site/actu-4.jpg"),
  },
  {
    title: "Protection des consommateurs : l'ARSE fédère sept régulateurs autour des bonnes pratiques",
    dateLabel: "14 août 2026",
    date: "2026-08-14",
    category: "Activité",
    excerpt: "L'ARSE a réuni du 10 au 11 août 2026 des représentants de régulateurs ouest-africains pour renforcer la protection des consommateurs.",
    href: "https://www.arse.bf/protection-des-consommateurs-larse-federe-sept-regulateurs-autour-des-bonnes-pratiques/",
    image: withBase("/images/site/actu-2.jpg"),
  },
  {
    title: "Traitement des délais des dossiers : l'ARSE élabore un référentiel pour renforcer la célérité",
    dateLabel: "12 août 2026",
    date: "2026-08-12",
    category: "Activité",
    excerpt: "Atelier du 3 au 7 août 2026 consacré à l'élaboration d'un référentiel de traitement des délais pour améliorer l'efficacité institutionnelle.",
    href: "https://www.arse.bf/traitement-des-delais-des-dossiers-larse-elabore-un-referentiel-pour-renforcer-la-celerite/",
    image: withBase("/images/site/actu-3.jpg"),
  },
  {
    title: "Régulation du secteur de l'énergie : l'ARSE remet son rapport d'activités au Premier ministre",
    dateLabel: "27 juillet 2026",
    date: "2026-07-27",
    category: "Activité",
    excerpt: "Le président de l'ARSE a remis le rapport d'activités 2025 au Premier ministre, renforçant la redevabilité de l'institution.",
    href: "https://www.arse.bf/regulation-du-secteur-de-lenergie-larse-remet-son-rapport-dactivites-au-premier-ministre/",
  },
  {
    title: "Gouvernance énergétique : l'ARSE renforce les capacités des collectivités territoriales à Ziniaré",
    dateLabel: "14 juillet 2026",
    date: "2026-07-14",
    category: "Activité",
    excerpt: "Atelier du 7 au 9 juillet 2026 destiné aux collectivités territoriales sur le cadre juridique du secteur énergétique.",
    href: "https://www.arse.bf/gouvernance-energetique-larse-renforce-les-capacites-des-collectivites-territoriales-a-ziniare/",
  },
];

/** Les trois premiers articles Activité, tels que catégorisés Dossier/Editorial sur le site d'origine. */
export const NEWS_DOSSIER: NewsEntry[] = NEWS_ACTIVITE.slice(0, 3).map((n) => ({ ...n, category: "Dossier" }));
export const NEWS_EDITORIAL: NewsEntry[] = NEWS_ACTIVITE.slice(0, 3).map((n) => ({ ...n, category: "Editorial" }));
