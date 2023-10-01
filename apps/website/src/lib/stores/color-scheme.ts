import { derived, get, writable } from "svelte/store";
import { mediaQuery } from "$lib/util/store/media-query";
import { browser } from "$app/environment";

export type ColorScheme = "dark" | "light" | "system";

export const colorSchemes: ColorScheme[] = ["light", "dark", "system"];
export const LOCAL_STORAGE_KEY = "brawltracker:color-scheme";

const prefersDarkColorScheme = mediaQuery("(prefers-color-scheme: dark)");

const colorSchemeInternalStore = writable<ColorScheme>(currentColorScheme());

export const colorSchemeStore = {
	...colorSchemeInternalStore,
	set(scheme: ColorScheme) {
		saveColorScheme(scheme);
		colorSchemeInternalStore.set(scheme);
	},
};

export const isDarkColorScheme = derived(
	[colorSchemeStore, prefersDarkColorScheme],
	([$scheme, $prefersDark]) => $scheme === "dark" || ($scheme === "system" && $prefersDark)
);

function currentColorScheme(): ColorScheme {
	const savedValue = browser && localStorage[LOCAL_STORAGE_KEY];
	return savedValue ? savedValue : "system";
}

function saveColorScheme(scheme: ColorScheme) {
	if (!browser) return;

	localStorage[LOCAL_STORAGE_KEY] = scheme;

	const resolvedScheme =
		scheme === "system" ? (get(prefersDarkColorScheme) ? "dark" : "light") : scheme;

	document.documentElement.setAttribute("data-color-scheme", resolvedScheme);
}
