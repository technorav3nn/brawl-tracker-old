import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
	srcDir: "src/",
	modules: ["@hypernym/nuxt-font", "@nuxtjs/color-mode"],
	css: ["$/assets/css/global.css"],
	colorMode: {
		dataValue: "color-scheme",
	},
	postcss: {
		plugins: {
			"@pandacss/dev/postcss": {},
		},
	},
	components: {
		dirs: [],
	},
	alias: {
		"styled-system": resolve("./styled-system"),
		$components: resolve("./src/components"),
		$pages: resolve("./src/pages"),
		$layouts: resolve("./src/layouts"),
		$composables: resolve("./src/hooks"),
		$lib: resolve("./src/lib"),
		$: resolve("./src"),
	},
	hooks: {
		"prepare:types": ({ tsConfig }) => {
			const aliasesToRemoveFromAutocomplete = ["~~", "~~/*", "@@", "@@/*", "@/*", "@", "~/", "~/*"];
			for (const alias of aliasesToRemoveFromAutocomplete) {
				if (tsConfig.compilerOptions && tsConfig.compilerOptions.paths[alias]) {
					delete tsConfig.compilerOptions!.paths[alias];
				}
			}
		},
	},
	experimental: {
		typedPages: true,
	},
	devtools: {
		enabled: true,
	},
	font: {
		autoImport: true,
	},
});
