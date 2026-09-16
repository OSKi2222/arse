/**
 * Préfixe un chemin absolu (commençant par "/") avec le `base` configuré
 * dans astro.config.mjs (ex. "/arse/" sur GitHub Pages). Nécessaire car les
 * images et liens internes sont stockés comme chemins racine dans src/lib.
 */
export function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
