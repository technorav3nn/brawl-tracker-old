import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
	colors: {
		accent: {
			default: { value: { base: "{colors.sky.600}", _dark: "{colors.sky.300}" } },
			emphasized: { value: { base: "{colors.sky.700}", _dark: "{colors.sky.400}" } },
			fg: { value: { base: "{colors.white}", _dark: "{colors.gray-palette.950}" } },
		},
		border: {
			accent: { value: { base: "{colors.sky.500}", _dark: "{colors.sky.500}" } },
		},
	},
	radii: {
		l1: { value: "{radii.md}" },
		l2: { value: "{radii.lg}" },
		l3: { value: "{radii.xl}" },
	},
});
