import { withBase } from "../lib/base";
import { fr } from "./fr";
import { en } from "./en";
import { zh } from "./zh";
import { es } from "./es";
import { de } from "./de";
import { ar } from "./ar";
import { it } from "./it";
import { ja } from "./ja";
import { ru } from "./ru";

export const languages = {
  fr: { label: "Français", short: "FR", htmlLang: "fr-BF", ogLocale: "fr_BF", dir: "ltr", flag: "🇫🇷" },
  en: { label: "English", short: "EN", htmlLang: "en", ogLocale: "en_US", dir: "ltr", flag: "🇬🇧" },
  es: { label: "Español", short: "ES", htmlLang: "es", ogLocale: "es_ES", dir: "ltr", flag: "🇪🇸" },
  de: { label: "Deutsch", short: "DE", htmlLang: "de", ogLocale: "de_DE", dir: "ltr", flag: "🇩🇪" },
  it: { label: "Italiano", short: "IT", htmlLang: "it", ogLocale: "it_IT", dir: "ltr", flag: "🇮🇹" },
  ru: { label: "Русский", short: "RU", htmlLang: "ru", ogLocale: "ru_RU", dir: "ltr", flag: "🇷🇺" },
  zh: { label: "中文", short: "ZH", htmlLang: "zh", ogLocale: "zh_CN", dir: "ltr", flag: "🇨🇳" },
  ja: { label: "日本語", short: "JA", htmlLang: "ja", ogLocale: "ja_JP", dir: "ltr", flag: "🇯🇵" },
  ar: { label: "العربية", short: "AR", htmlLang: "ar", ogLocale: "ar_AR", dir: "rtl", flag: "🇸🇦" },
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "fr";

export const translations = { fr, en, es, de, it, ru, zh, ja, ar } as const;

/** Type du dictionnaire : le français fait référence. */
export type Dictionary = typeof fr;

/** Déduit la langue depuis l'URL (`/en/...` → "en", sinon la langue par défaut). */
export function getLangFromUrl(url: URL): Lang {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const pathname = base && url.pathname.startsWith(base) ? url.pathname.slice(base.length) : url.pathname;
  const [, segment] = pathname.split("/");
  if (segment in languages) return segment as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang): Dictionary {
  return translations[lang] as Dictionary;
}

/**
 * Préfixe un chemin interne avec la langue courante.
 * La langue par défaut n'est pas préfixée (`/contact/`), les autres le sont
 * (`/en/contact/`).
 */
export function localizePath(path: string, lang: Lang): string {
  if (!path.startsWith("/")) return path;
  const localized = lang === defaultLang ? path : `/${lang}${path}`;
  return withBase(localized);
}

/** Équivalent d'un chemin dans une autre langue, pour le sélecteur de langue. */
export function switchLangPath(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let path = url.pathname;
  if (base && path.startsWith(base)) path = path.slice(base.length) || "/";
  if (current !== defaultLang) path = path.replace(`/${current}`, "") || "/";
  return localizePath(path, target);
}
