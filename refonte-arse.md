# Refonte du site ARSE.bf

## Statut du projet
**Refonte complète** du site web de l'ARSE (Autorité de régulation du secteur de l'énergie du Burkina Faso).

- **Mandat** : OSKi_an_Co intervient comme prestataire mandaté par l'ARSE
- **Mode de livraison** : Clé en main — l'équipe ARSE reprendra la gestion du site en autonomie après livraison (pas de contrat de maintenance long terme prévu)
- **Cadrage** : Libre — pas de cahier des charges fourni par l'ARSE, c'est OSKi qui structure le projet
- **Site actuel** : arse.bf, WordPress + Slider Revolution, conçu par l'Agence UBICOM

## Constats sur le site actuel
- Structure de menu avec liens placeholder jamais nettoyés (`/token/`, `/pricing/` au lieu de vraies pages "Conseil de régulation", "Secrétariat Général")
- Liens dupliqués dans la section Documentation (plusieurs liens identiques vers la même URL)
- Réseaux sociaux fantômes (Instagram, X, Discord, Medium, Reddit → liens `#`)
- Site lourd (slider avec beaucoup d'images), thème premium mal optimisé
- Contenu institutionnel riche à conserver : rapports d'activité, documentation réglementaire (lois, décrets, arrêtés, décisions, bulletins), actualités, données sectorielles (production énergétique)

## Accès au site en ligne
Le site actuel est accessible directement à **arse.bf** — je peux y naviguer (WebFetch) pour extraire images, textes manquants, ou vérifier une info à tout moment, sans dépendre uniquement du dump `contenu des pricipale pages et liens.txt`. À utiliser systématiquement quand une donnée manque ou semble incomplète dans ce dump (page non capturée, image cassée, contenu mis à jour depuis l'export).

Logos déjà récupérés depuis le site :
- Logo principal : `https://www.arse.bf/wp-content/uploads/2026/04/logo-ARSE-SITE-WEB-2.png`
- Logo carré (variante) : `https://www.arse.bf/wp-content/uploads/2026/04/Logo-ARSE-CARRE-3.png`

## Palette de couleurs — VALIDÉE
Codes hexadécimaux **réels**, extraits du CSS de production de arse.bf (fréquence d'utilisation entre parenthèses) :

| Usage | Hex | Occurrences dans le CSS |
|---|---|---|
| Rouge institutionnel | `#dd3333` | 272 |
| Rouge secondaire | `#e5322d` | 107 |
| Vert institutionnel | `#029644` | 242 |
| Vert foncé | `#017a2b` / `#056824` | 44 / 35 |
| Jaune (drapeau BF) | `#fcd116` | 130 |
| Jaune vif (soleil du logo) | `#eeee22` / `#fff011` | 435 / 292 |
| Crème (fonds) | `#f7ecd2` | 52 |

Ces valeurs sont intégrées dans les tokens Tailwind (`src/styles/global.css`, préfixe `arse-`). Elles remplacent les estimations visuelles faites précédemment, qui étaient proches mais inexactes.

Symbolique du logo à conserver dans la nouvelle DA : énergie (éclair, soleil), croissance/régulation (courbe ascendante), sobriété institutionnelle (rouge/vert/noir, pas de dégradés flashy).

## Images récupérées
Téléchargées depuis arse.bf vers `public/images/site/` :
- `pylone.jpg` — techniciens sur une ligne électrique (utilisée en hero)
- `president.jpg` — Président du Conseil de Régulation à son bureau
- `regulation.jpg`, `ingenieur.jpg`, `sonabel-poteau.jpg`, `photo-arse-1.jpeg` — visuels des missions
- `actu-1.jpg` à `actu-4.jpg` — photos des actualités récentes
- `rapport-2024.jpg`, `rapport-2023.jpg`, `journal-014.jpg`, `bulletin-13.jpg` — couvertures des publications

⚠️ **Constat supplémentaire sur le site actuel** : le slider de la page d'accueil contient toujours les images de démonstration du thème (`revslider/Food-Presentation-Template-Slider/` — sashimi, panacota, carpaccio). Le template n'a jamais été nettoyé après installation. À ne surtout pas reprendre.

## Coordonnées officielles (récupérées sur arse.bf/contact)
- **Adresse** : Arrondissement n°5 - secteur n°24 (ZAD), Rue Georges OUEDRAOGO dit le Gandaogo national, 10 BP 13153 Ouagadougou 10, Burkina Faso
- **Téléphone** : (+226) 25 41 20 38
- **Email** : infos@arse.bf
- **Horaires** : Lundi–Vendredi, 07:30–16:00
- **Réseaux sociaux réels** (à utiliser à la place des liens fantômes `#`) :
  - Facebook : https://web.facebook.com/arse.burkina
  - LinkedIn : https://www.linkedin.com/company/arse-burkina
  - YouTube : https://www.youtube.com/@AutoritedeRegulationduSecteurd
  - Telegram : https://t.me/+mdETknvrt400OWY0
  - WhatsApp : https://whatsapp.com/channel/0029Vak9GnPId7nGt4xwTD3Q

## Navigation réelle du site (récupérée sur arse.bf)
- Accueil
- ARSE — Présentation, Historique, Mission, Attributions, Recrutement
- Documentation — Rapports, Bulletins, Décisions, Arrêtés, Lois, Décrets
- Actualité — Activité, Dossier, Editorial, Interview
- Consommateur
- Contact

## Avancement
- ✅ Projet Astro scaffoldé à la racine (Tailwind v4, GSAP+ScrollTrigger, Lenis, Swup + plugins head/preload, `@astrojs/sitemap`)
- ✅ `Layout.astro` avec SEO complet : title/description dynamiques, canonical, Open Graph, Twitter card, JSON-LD `GovernmentOrganization`, favicons, `robots.txt`, sitemap auto-généré
- ✅ `Header.astro` / `Footer.astro` avec la vraie navigation, les vraies coordonnées et les vrais liens sociaux
- ✅ Landing page (`src/pages/index.astro`) avec le contenu réel récupéré sur arse.bf : hero (accroche slider), mot du président, présentation, missions, chiffres clés production 2024, actualités récentes, CTA contact
- ✅ Menu plein écran (reveal clip-path GSAP, 3 colonnes avec visuel de la rubrique survolée), inspiré du header du projet IAM(UA)
- ✅ Landing page restructurée autour des vraies photos : hero cinématique, manifeste en scrub-reveal, galerie horizontale épinglée des 4 missions, chiffres clés animés, mot du président épinglé, marquee partenaires, publications, actualités, CTA
- ✅ Moteur d'animation optimisé : `ScrollTrigger.batch` (un trigger pour N éléments), `gsap.matchMedia` (pinning desktop uniquement + respect de `prefers-reduced-motion`), Lenis calibré en `lerp`, promotion GPU via `will-change`, `ignoreMobileResize`
- ⚠️ Les liens de sous-navigation (ARSE/Présentation, Documentation/Rapports, Actualité/Activité, Contact, etc.) pointent vers des routes **pas encore créées** — 404 tant que ces pages n'existent pas
- ⚠️ Logos récupérés (`public/images/logo-arse.png`, `logo-arse-carre.png`) mais pas d'image OG dédiée 1200×630 — utilise le logo carré en attendant

## Pièges techniques rencontrés (à ne pas réintroduire)
- **`overflow-x: hidden` sur `html`/`body` casse le pinning de ScrollTrigger** : cela crée un conteneur de défilement parasite. Utiliser `overflow-x: clip` à la place (déjà en place dans `global.css`).
- **`force3D` ne doit pas être mis dans `gsap.defaults()`** : ce défaut global pollue les tweens d'objets JavaScript simples (les compteurs chiffrés), qui n'ont pas de plugin CSS pour le consommer, et les fait échouer silencieusement.
- **Le cache de dépendances de Vite (`node_modules/.vite`) se périme** dès qu'on installe un paquet ou qu'on lance `astro check`/`astro build` pendant que `astro dev` tourne. Symptôme : erreurs `504 (Outdated Optimize Dep)` en console et plus aucun script ne s'exécute (la page s'affiche mais rien n'est interactif). Solution : arrêter le serveur, `rm -rf node_modules/.vite`, relancer `npm run dev`.
- Un `ScrollTrigger` avec `once: true` **ne déclenche pas `onEnter` rétroactivement** pour un élément déjà visible au chargement (cas du compteur du hero) : il faut tester la position et lancer l'animation directement.
- **`pin: cible` (via GSAP ScrollTrigger) avec `pinSpacing:false` sur un enfant de grid CSS peut se désynchroniser** : après dépin, l'élément ne revient pas toujours à sa position naturelle correcte (bug intermittent, pas lié au réseau ni aux polices — confirmé en isolant tous les autres facteurs). C'est un cas limite documenté de ce pattern GSAP. **Solution retenue : `position: sticky` en CSS pur** pour l'effet "photo qui reste visible pendant que le texte défile à côté" (section Mot du Président) — déterministe par construction, aucun calcul JS, donc aucun risque de désync. Point d'attention avec `sticky` : l'élément collant a besoin d'un **parent plus haut que lui-même** pour avoir de la place où "voyager" — ne pas mettre `sticky` directement sur la cellule de grid stretchée (`self-start` la réduit à sa hauteur naturelle et casse l'effet), mais sur un enfant à l'intérieur d'un wrapper explicitement grand (`h-[140vh]` par exemple).
- **`ScrollTrigger.batch` avec `once:true` ne déclenche jamais `onEnter` pour un élément déjà visible à l'écran au chargement** — même piège que celui déjà rencontré (et corrigé isolément) sur le compteur du hero, mais touchant cette fois `initScrollReveals()`/`initCardStack()` de façon générale. Sur les pages internes (plus courtes que la landing), la 2ᵉ ou 3ᵉ section peut déjà être visible sans le moindre scroll : ses éléments `[data-reveal-item]`/`[data-stack-item]` restaient alors bloqués à `opacity:0` **pour toujours**. Repéré sur `/contact/` (colonne coordonnées invisible), mais le bug touchait potentiellement toute page suffisamment courte. Correctif généralisé dans `motion.ts` : avant de créer le `ScrollTrigger.batch`, chaque groupe de cibles est scindé en deux — celles déjà au-dessus du seuil de déclenchement sont révélées immédiatement (sans animation de scroll), le reste suit le mécanisme `batch` habituel.
- **`loading="lazy"` ne fonctionne pas sur une image déplacée par transformation dans une section en `position: fixed`.** Le chargement paresseux natif du navigateur se base sur la proximité de défilement réelle ; comme le déplacement horizontal de la galerie missions se fait via un `transform` GSAP (pas un vrai scroll), le navigateur ne détecte jamais que les cartes 3 et 4 "arrivent bientôt" — elles restent non chargées indéfiniment, même une fois visuellement à l'écran (photo invisible, carte noire). Repéré après un rapport utilisateur montrant des cartes sans photo suite à l'activation du pin sur mobile. Correctif : retirer `loading="lazy"` sur les images de la galerie missions spécifiquement (les autres images du site, en flux de page normal, n'ont pas ce problème et gardent le lazy-loading).
- **Le pin GSAP de la galerie missions est actif à toutes les tailles d'écran**, y compris mobile — ce n'était pas le cas initialement (désactivé sous 1024px par prudence, en pensant le pinning "coûteux sur petit écran"), jusqu'à ce que l'utilisateur signale l'absence de l'effet au toucher. Vérifié au geste tactile réel (`Input.dispatchTouchEvent`, pas seulement `mouseWheel`) : le pin s'engage correctement, Lenis (`syncTouch:false`) laisse le scroll tactile natif piloter la page sans interférence. Les classes de mise en page de la section (hauteur plein écran, centrage vertical, padding horizontal) ont dû perdre leur préfixe `lg:` pour s'appliquer dès mobile, sinon le pin JS épinglait une section dont le CSS n'était pas prévu pour être pinné à cette taille.
- **Ne jamais combiner la classe `.parallax-frame` avec l'utilitaire Tailwind `absolute` sur le même élément.** `.parallax-frame` posait `position: relative` en CSS non-calqué ; sous Tailwind v4 (cascade layers), le CSS non-calqué l'emporte toujours sur `@layer utilities`, donc `absolute` était silencieusement neutralisé. Le cadre se retrouvait sans hauteur (son seul enfant, l'image en position absolue, ne compte pas pour la hauteur du parent) → **photo invisible**, sur tous les écrans. Bug resté invisible pendant toute la session car je ne vérifiais qu'avec des contrôles de propriétés (`naturalWidth`, `opacity`...), jamais avec une vraie capture d'écran — trouvé uniquement en auditant le responsive. Correctif : `.parallax-frame` ne pose plus de `position` du tout ; chaque usage déclare `relative` ou `absolute` explicitement dans le markup selon son besoin. **Leçon générale : les contrôles de propriétés CSS ne suffisent pas à valider un rendu — prendre de vraies captures d'écran reste indispensable.**
- **Ne jamais créer un second ScrollTrigger visant le même élément qu'un pin.** Cela perturbe la prise en compte du pin-spacer et décale tous les déclencheurs des sections situées plus bas (elles s'animent alors hors écran). Pour déclencher quelque chose à l'arrivée d'une section épinglée, utiliser un `IntersectionObserver` — hors de ScrollTrigger, donc sans interférence. Corollaire : éviter aussi de placer des cibles de `ScrollTrigger.batch` à l'intérieur d'une section épinglée.
- **L'ordre de création des ScrollTrigger compte quand une section est épinglée.** Un `pin` insère un "pin-spacer" qui allonge le document (ici ~2124px pour la galerie horizontale). Tous les déclencheurs créés *avant* lui conservent des positions calculées sans ce décalage — concrètement, les animations des sections situées plus bas se jouaient ~2700px sous le viewport, donc totalement hors écran : le contenu apparaissait déjà figé quand on y arrivait. **Créer les sections épinglées en premier** (dans `initPage()`), puis appeler `ScrollTrigger.sort()` avant `ScrollTrigger.refresh()`.
- **`font-display: swap` (défaut de Google Fonts) peut faire bouger tout le document après le premier rendu**, une fois la police téléchargée — ce qui invalide la géométrie de n'importe quel calcul basé sur le scroll (ScrollTrigger, parallax...) calculé avant. Utiliser `display=optional` dans l'URL Google Fonts : la police ne s'applique qu'au tout premier rendu ou pas du tout, jamais en cours de lecture — élimine la classe de bug entièrement plutôt que d'essayer de réagir après coup.

## Avancement — pages internes et internationalisation (9 langues)

**23 pages internes créées** (FR/EN d'abord, même standard que la landing), avec du contenu réel récupéré sur arse.bf via WebFetch — pas de contenu inventé :
- ARSE : Présentation, Historique, Mission, Attributions, Recrutement
- Documentation (+ hub) : Rapports (12 vrais PDF), Bulletins (8), Journal (14), Lois (1), Décrets (19), Décisions (4), Arrêtés (17) — tous avec les vrais liens PDF officiels
- Actualité (+ hub) : Activité (8 vrais articles), Dossier, Editorial, Interview (volontairement vide, comme le vrai site — aucun article n'existe dans cette catégorie sur arse.bf)
- Consommateur, Contact (formulaire avec `action` placeholder Formspree à remplacer), Partenaires, Politique des cookies, Conditions d'utilisation

Composants réutilisables créés : `PageHero`, `DocumentGrid`, `NewsGrid`, `CtaSection`, `HubPage`, `DocumentListPage`, `NewsListPage`, `LegalPage` (dans `src/components/pages/`).

**Extension à 9 langues** : ajout de espagnol, allemand, italien, russe, mandarin, japonais et arabe (en plus de FR/EN). Traduction intégrale par IA de tout le contenu (landing + 23 pages internes, soit ~2000 mots × 7 langues) — **à faire relire par un locuteur natif avant mise en production**, en particulier pour l'arabe, le mandarin et le japonais où les nuances sont plus difficiles à valider sans révision humaine. Les titres d'actes officiels (lois, décrets, arrêtés...) restent volontairement en français dans toutes les langues, conformément à la pratique des sites institutionnels multilingues.

**RTL arabe — complet** : `dir="rtl"` posé dynamiquement sur `<html>`. La mise en page se retourne automatiquement (flexbox suit le sens d'écriture, classes Tailwind logiques `start-*`/`end-*` dans le Header). Deux points qui NE se retournaient PAS automatiquement ont été corrigés spécifiquement :
- **Flèches directionnelles ("→")** : ce sont des caractères, pas des propriétés CSS — ajout d'une classe `.i-arrow` (`src/styles/global.css`) qui applique `scaleX(-1)` sous `[dir="rtl"]`, posée sur toutes les occurrences du site (Header, HomePage, DocumentGrid, ContactPage, HubPage, PartenairesPage).
- **Carrousel horizontal de la galerie missions** (piloté par GSAP, pas un vrai scroll) : `initHorizontalScroll()` dans `motion.ts` détecte `document.documentElement.dir === "rtl"` et inverse le sens du tween (`+distance` au lieu de `-distance`), avec une condition de révélation des panneaux rendue symétrique (basée sur le pourcentage de largeur visible, plus sur un simple `left <`) pour fonctionner dans les deux sens. Vérifié par capture d'écran et trace complète de la séquence de révélation (1,2,3 déjà visibles au repos → 4,5,6 se révèlent dans l'ordre en scrollant), identique au comportement LTR.

**Drapeaux en SVG, pas en emoji** (`src/components/LangFlag.astro`) : un emoji drapeau dépend d'une police couleur (Noto Color Emoji ou équivalent) absente sur certains systèmes — sans elle, le glyphe retombe sur le code pays en texte brut ("SA" au lieu du drapeau 🇸🇦). Neuf mini-drapeaux SVG inline (simplifiés mais reconnaissables) garantissent un rendu identique partout, utilisés dans le sélecteur de langue du Header.

**Formulaire de contact connecté sans envoi de données** (`src/scripts/contactForm.ts`) : validation HTML5, état "envoi en cours" (bouton désactivé + libellé traduit), message de confirmation, réinitialisation du formulaire — comportement complet côté client, mais **aucune requête réseau n'est envoyée** (le `fetch()` vers un vrai service est en commentaire, prêt à activer). Vérifié : aucune requête sortante pendant la soumission (uniquement les préchargements d'images normaux du site). Le formulaire n'a plus d'`action`/`method` HTML pour empêcher toute soumission native en cas d'échec du script.

Sélecteur de langue : liste déroulante avec drapeau SVG + nom natif de chaque langue, dans `Header.astro`.

Total : **216 pages générées** (24 routes × 9 langues), toutes vérifiées (`astro check` 0 erreur, build de production, captures d'écran réelles sur plusieurs langues dont l'arabe RTL, comportement du carrousel RTL tracé pas à pas, formulaire testé sans fuite réseau).

## Audit de contenu (fait)
Passage systématique des **26 pages** du dump `contenu des pricipale pages et liens.txt` (dont 2 pages parasites "token"/"Pricing" issues du thème WP et plusieurs doublons) contre les 9 traductions construites. Résultat :
- **Historique** : les résumés des lois 2007 et 2017 étaient trop condensés par rapport au vrai texte (autonomie financière de l'ARSE en 2007 ; en 2017, liste complète des innovations manquante : exception hydrocarbures, dispositions communautaires du marché sous-régional, suppression de la segmentation, clients éligibles, énergies renouvelables/efficacité énergétique, modalités de financement). **Corrigé** dans `fr.ts` puis traduit et propagé dans les 8 autres langues (`en/es/de/it/ru/zh/ja/ar.ts`).
- **Mission → Redevabilité** : phrase manquante sur la diffusion du rapport annuel (copie au Ministre de l'énergie, aux corps de contrôle administratifs de l'État, à la Cour des Comptes). **Corrigé** dans les 9 langues.
- Pages vérifiées conformes sans modification nécessaire : Présentation, Mission (liste des 6 missions + attributions), Attributions (duplique volontairement Mission sur le vrai site — restructuration en 2 pages jugée correcte), Contact (coordonnées exactes), Consommateur, les 7 pages "Documentation" (Rapports/Bulletins/Journal/Lois/Décrets/Décisions/Arrêtés — ledes déjà fidèles, documents réels déjà dans `documents.ts`), les 4 pages "Actualité" (Activité/Dossier/Editorial/Interview — pas de contenu descriptif propre sur le vrai site au-delà de la nav commune).
- `astro check` : 0 erreur après les 9 traductions mises à jour.
- **Simplification assumée, non corrigée** : le vrai site a un formulaire de candidature dédié sur Recrutement (nom/prénom/profession/email/emploi ou stage/niveau et domaine d'étude/message/pièce jointe) ; la page actuelle propose un simple CTA "nous contacter par email" — à décider si le formulaire complet doit être construit.

## Organisation (fait)
Ajout d'une page **`/arse/organisation/`** (9 langues) reprenant les 4 organes listés dans le méga-menu "ORGANISATION" du vrai site : Conseil de régulation, Secrétariat Général, Directions Opérationnelles, Directions et services transversaux. Sur le vrai site ces 4 libellés de menu n'ont **pas de lien** et aucune des 26 pages du dump ne développe leur contenu — descriptions rédigées de façon générique et factuelle (rôle standard de ces organes dans une autorité de régulation), sans inventer de noms, effectifs ou composition. `astro check` 0 erreur, rendu vérifié en FR/EN/AR (RTL correct).

## Images manquantes sur les pages intérieures (fait)
Le vrai site attribue à chaque page une image de fond d'en-tête (opacity ~0.3, `background-size:cover`), extraite du CSS `background-image:url(...)` de chaque page du dump — absente jusqu'ici sur Historique, Mission, Attributions, Recrutement, Contact et les 7 pages Documentation, qui n'affichaient que le fond sombre à grille par défaut.
- **Historique / Contact** → `pylone.jpg` (thème "Pilonne électrique", déjà en stock, sujet identique confirmé visuellement)
- **Mission / Attributions / Recrutement** → `regulation.jpg` (thème "Regulation", déjà en stock)
- **Rapports / Décrets** → `rapport-hero.jpg` (nouveau, téléchargé depuis `Rapport-1024x602.jpg`)
- **Journal** → `le-regulateur-hero.png` (nouveau, bandeau réel "Le Régulateur")
- **Bulletins** → `sonabel-poteau.jpg` (déjà en stock, octets identiques à `SONABEL-poteau.jpg` du vrai site — confirmé)
- **Décisions** → `decision-hero.jpg` (nouveau, téléchargé depuis `DECISION-1024x576.jpg`)
- **Arrêtés / Lois** → `ingenieur.jpg` (déjà en stock, même sujet que `l-ingenieur-...jpg`)
- **Activité/Dossier/Editorial/Interview** : le vrai site utilise `xxx_lines_xxx.png`, un simple filet d'ondes décoratif blanc/violet — incompatible avec le traitement sombre (gradient `arse-ink/85`) appliqué aux photos ; laissé sur le fond à grille par défaut plutôt que de forcer un rendu qui rendrait le motif invisible.

Nouveau mapping centralisé dans `src/lib/site.ts` : `PAGE_HERO_IMAGES` (pages ARSE) et `DOC_HERO_IMAGES` (pages Documentation, indexé par `pageKey`).

**Vignettes de documents manquantes** : en creusant, seuls 2/12 rapports, 1/8 bulletins et 2/14 numéros du journal avaient une image de couverture dans `documents.ts` (le reste tombait sur l'icône PDF générique) alors que le vrai site a une couverture propre pour chaque numéro. Téléchargé et ajouté les couvertures manquantes : **10 rapports, 7 bulletins, 11 numéros de journal** (un seul numéro — Journal N°015 — n'a pas de couverture sur le vrai site non plus, laissé tel quel). Vérifié : Décisions/Décrets/Arrêtés/Lois n'ont **aucune** vignette par document sur le vrai site (juste le logo) — mon traitement actuel (icône PDF) était donc déjà correct, pas de changement nécessaire là.

Vérifié en direct (captures d'écran réelles via CDP headless Chrome) sur Historique, Mission, Rapports, Bulletins, Journal, Décisions : toutes les images réelles s'affichent correctement. `astro check` 0 erreur.

## Prochaines étapes
- Voir `stack.md` pour la stack technique retenue
- **Faire relire toutes les traductions par des locuteurs natifs** avant mise en production (priorité : arabe, mandarin, japonais, russe)
- Activer le vrai envoi du formulaire de contact (décommenter le `fetch()` dans `contactForm.ts` une fois un service — Formspree ou équivalent — configuré)
- Décider si les 4 pages "ORGANISATION" repérées dans le menu ARSE doivent être ajoutées
- Affiner la palette avec un color picker pixel-exact sur les assets récupérés
- Vérifier l'existence d'une charte graphique officielle auprès de l'ARSE
- Créer une vraie image Open Graph (1200×630)
- Initialiser le dépôt Git + workflow GitHub Actions de déploiement (voir `stack.md`)
