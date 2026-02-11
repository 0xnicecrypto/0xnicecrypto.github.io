import type { AstroGlobal } from "astro";
import en from "./en.json";
import zh from "./zh.json";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
	en: "English",
	zh: "中文",
};

const translations = {
	en,
	zh,
};

export function getLocaleFromUrl(url: URL): Locale {
	const [, lang] = url.pathname.split("/");
	if (lang && locales.includes(lang as Locale)) {
		return lang as Locale;
	}
	return defaultLocale;
}

export function useTranslations(locale: Locale) {
	const t = (key: string): string => {
		const keys = key.split(".");
		let value: unknown = translations[locale];

		for (const k of keys) {
			if (value && typeof value === "object" && k in value) {
				value = (value as Record<string, unknown>)[k];
			} else {
				// Fallback to English if key not found
				let fallbackValue: unknown = translations[defaultLocale];
				for (const fk of keys) {
					if (fallbackValue && typeof fallbackValue === "object" && fk in fallbackValue) {
						fallbackValue = (fallbackValue as Record<string, unknown>)[fk];
					} else {
						return key;
					}
				}
				return typeof fallbackValue === "string" ? fallbackValue : key;
			}
		}

		return typeof value === "string" ? value : key;
	};

	return { t, locale };
}

export function getLocalizedPath(path: string, locale: Locale): string {
	// Remove any existing locale prefix
	const pathWithoutLocale = path.replace(new RegExp(`^/(${locales.join("|")})(/|$)`), "/");

	// Don't add locale prefix for default locale
	if (locale === defaultLocale) {
		return pathWithoutLocale || "/";
	}

	// Add locale prefix for non-default locales
	return `/${locale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
}

export function createI18n(Astro: AstroGlobal) {
	const locale = getLocaleFromUrl(Astro.url);
	const { t } = useTranslations(locale);

	return {
		locale,
		t,
		getLocalizedPath: (path: string) => getLocalizedPath(path, locale),
	};
}
