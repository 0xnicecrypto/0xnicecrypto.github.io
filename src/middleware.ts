import { defineMiddleware } from "astro:middleware";
import { defaultLocale, locales, type Locale } from "./i18n";

// This middleware is only used for SSR mode
// For static sites, we handle locale in client-side
export const onRequest = defineMiddleware(async (context, next) => {
	return next();
});
