import { defineConfig } from "@pandacss/dev";
import { conditions } from "./theme/conditions";
import { globalCss } from "./theme/global-css";
import { keyframes } from "./theme/keyframes";
import { tableRecipes } from "./theme/recipes/table";
import { typographyRecipes } from "./theme/recipes/typography";
import { semanticTokens } from "./theme/semantic-tokens";
import { textStyles } from "./theme/text-styles";
import { tokens } from "./theme/tokens";
import { utilities } from "./theme/utilities";

export default defineConfig({
	preflight: true,
	include: ["./src/**/*.{js,ts,svelte}"],
	exclude: [],
	presets: ["@pandacss/dev/presets", "@park-ui/presets"],
	outdir: "styled-system",
	staticCss: {
		recipes: {
			button: ["*"],
		},
	},
	// for the isCssProperty function
	jsxFramework: "react",
	theme: {
		extend: {
			recipes: {
				...typographyRecipes,
				...tableRecipes,
			},
			tokens,
			semanticTokens,
			keyframes,
			textStyles,
		},
	},
	globalCss,
	conditions,
	utilities,
});
