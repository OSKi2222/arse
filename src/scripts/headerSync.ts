import { getLangFromUrl, localizePath, switchLangPath, type Lang } from "../i18n";

/**
 * Le Header et le Footer vivent hors du conteneur #swup (voir motion.ts) et
 * ne sont donc jamais reconstruits par une navigation SPA : leurs liens
 * `href` restent figés sur la langue/le chemin de la dernière navigation
 * complète (souvent la page d'accueil). Cette fonction recalcule ces liens
 * à partir de l'URL réelle du navigateur à chaque changement de page —
 * appelée au chargement initial et à chaque hook `page:view` de Swup.
 */
export function syncHeaderLinks() {
  const url = new URL(window.location.href);
  const lang: Lang = getLangFromUrl(url);

  document.querySelectorAll<HTMLAnchorElement>("[data-path]").forEach((a) => {
    const rawPath = a.dataset.path;
    if (rawPath) a.href = localizePath(rawPath, lang);
  });

  document.querySelectorAll<HTMLAnchorElement>("[data-lang-switch]").forEach((a) => {
    const target = a.dataset.langSwitch as Lang;
    a.href = switchLangPath(url, target);
  });
}
