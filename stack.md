---
name: stack.md
description: Stack technique, skills à utiliser et source de contenu pour la refonte du site vitrine ARSE
---

# Stack — Refonte site vitrine ARSE

Site vitrine de l'ARSE (Autorité de régulation du secteur de l'énergie, Burkina Faso), à refondre en version moderne, animée, "full motion", et déployable sur GitHub (GitHub Pages).

## Stack technique retenue

| Rôle | Techno | Pourquoi |
|---|---|---|
| Générateur de site | **Astro** | Sortie 100% statique, ultra-légère, se déploie tel quel sur GitHub Pages. Pas de backend nécessaire pour un site vitrine. |
| Styling | **Tailwind CSS** | Dénominateur commun de tous les skills design installés (`ui-styling`, `frontend-design`, `taste-skill`...). |
| Animation au scroll | **GSAP + ScrollTrigger** | Standard pro pour pin/stagger/scrub/reveal. C'est exactement ce que le skill `gpt-tasteskill` est conçu pour produire. |
| Smooth scroll | **Lenis** | Scroll fluide à inertie, se marie avec ScrollTrigger. |
| Transitions entre pages | **Swup** | Le site reste multi-pages (Astro génère une page HTML par route), Swup intercepte les liens internes et anime la transition entre pages au lieu d'un rechargement brut — effet "SPA" sans en être une. |
| Déploiement | **GitHub Pages** (via GitHub Actions, build Astro statique) | Gratuit, pas de serveur à gérer, correspond à la demande. |

Règles :
- Ne jamais introduire de backend/serveur (Laravel, Node runtime, etc.) — le site doit rester exportable en statique pur.
- Toute interaction complexe (formulaire de contact, recherche) passe par un service tiers (ex: Formspree, EmailJS) ou une fonction serverless externe si strictement nécessaire — pas de backend dans ce repo.
- GSAP/Lenis s'initialisent une fois globalement et doivent survivre aux transitions Swup (ne pas les ré-instancier à chaque changement de page).
- **Toute nouvelle page créée doit être responsive** (mobile, tablette, desktop) avant d'être considérée terminée — pas seulement la landing page. Vérifier au minimum : ~375px (mobile), ~768px (tablette), ~1440px (desktop), sans scroll horizontal parasite, texte lisible, image toujours visible (voir le piège `.parallax-frame` dans `refonte-arse.md`), menu et CTA utilisables au doigt. Ne pas se fier uniquement aux classes Tailwind `sm:`/`lg:` posées à l'écriture du code : **vérifier avec une vraie capture d'écran** à chaque taille, pas seulement des contrôles de propriétés CSS (un bug de layout peut passer inaperçu si on ne regarde jamais le rendu réel — voir le bug `.parallax-frame` ci-dessous, invisible pendant toute la session jusqu'à la première capture d'écran).

## Skills à utiliser (installés dans `.claude/skills/`)

À solliciter systématiquement pendant la conception/reconstruction des pages :

- **`frontend-design`** / **`taste-skill`** — direction artistique générale, éviter le rendu "générique IA".
- **`gpt-tasteskill`** — structure AIDA, typographie éditoriale large, ScrollTrigger strict (pinning, stacking, scrubbing), espacement de sections massif. Skill de référence pour l'aspect "full motion".
- **`ui-styling`** — composants accessibles (base shadcn/Radix/Tailwind), dark mode, patterns de composants.
- **`ui-ux-pro-max`** — styles, palettes, pairs de polices, guidelines UX/accessibilité, presets motion GSAP.
- **`brand-design-references`** — bibliothèque de DESIGN.md de marques réelles (`brand-design-references/design-md/<marque>/DESIGN.md`) à consulter pour caler typographie/couleurs/ton si on veut s'inspirer d'un style précis (ex: institutionnel/pro → regarder des marques sobres type `stripe`, `ibm`, etc.).
- **`design`** / **`design-system`** — tokens de design (couleurs, spacing, typo) à fixer en tout début de projet pour garder la cohérence sur toutes les pages.
- **`redesign-skill`** — spécifiquement pensé pour upgrader un site existant vers un rendu premium sans casser le contenu/la structure : à utiliser en priorité puisqu'on refond un site WordPress existant.
- **`minimalist-skill` / `soft-skill` / `brutalist-skill`** — variantes de direction artistique si on veut trancher entre plusieurs styles avant de valider la DA finale.
- **`banner-design`** / **`slides`** — si besoin de visuels annexes (bannières réseaux sociaux, supports de présentation institutionnels).
- **`image-to-code-skill`** — si des maquettes/captures d'écran sont fournies, pour reconstruire fidèlement une section en code.
- **`output-skill`** — pour toute génération de code longue/complexe, évite les troncatures et le placeholder code.
- **`add-lang` / `agent-eval`** — skills internes à CodeGraph (pas liés à la DA du site), utilisés seulement si on doit étendre le support d'un langage ou benchmarker l'indexation.

## Source de contenu — À CONSULTER À CHAQUE FOIS

Le fichier **[`contenu des pricipale pages et liens.txt`](contenu%20des%20pricipale%20pages%20et%20liens.txt)** à la racine du projet contient le dump HTML brut du site WordPress actuel (thème Newspaper/tagDiv), en commençant par la landing page (`Landingpage: <!doctype html>...`).

**Avant de construire ou reconstruire n'importe quelle page du nouveau site, relire ce fichier** pour en extraire :
- le contenu textuel réel (titres, paragraphes, encarts institutionnels) — ne jamais inventer de contenu, l'organisme est une autorité de régulation officielle ;
- la structure de navigation (menu, liens internes/externes) ;
- les liens vers les sous-pages, documents (PDF réglementaires, journal ARSE, etc.), et réseaux sociaux ;
- les informations de contact (adresse, ex. "10 BP ...").

Le fichier est volumineux (~51 000 lignes, dump HTML complet avec CSS/JS inline) : le lire par section (grep sur des mots-clés, lecture par plages de lignes) plutôt qu'en entier à chaque fois. Le contenu textuel utile est noyé dans du HTML/CSS/JS de thème WordPress — extraire uniquement le texte et les liens pertinents, pas la structure technique WordPress (qui ne doit pas être reproduite dans le site Astro).

## Déploiement GitHub Pages

- Repo Git à initialiser à la racine du projet (hors `Skills/`, déjà exclu via `.gitignore`).
- Workflow GitHub Actions : build Astro (`astro build`) → publication du dossier `dist/` sur la branche `gh-pages` ou via l'action officielle `actions/deploy-pages`.
- Vérifier `astro.config.mjs` (`site` + `base`) si le repo n'est pas servi à la racine du domaine GitHub Pages.
