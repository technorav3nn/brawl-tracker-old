import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
	pre: {
		fontFamily: "var(--font-code)",
		overflowX: "auto",
		fontSize: "14px !important",
		"--shiki-color-text": "white",
		"--shiki-color-background": "colors.grayPalette.800",
		"--shiki-token-constant": "colors.grayPalette.300",
		"--shiki-token-string": "colors.grayPalette.400",
		"--shiki-token-comment": "colors.grayPalette.400",
		"--shiki-token-keyword": "colors.accent.emphasized",
		"--shiki-token-parameter": "colors.grayPalette.400",
		"--shiki-token-function": "colors.red.300",
		"--shiki-token-string-expression": "colors.grayPalette.400",
		"--shiki-token-punctuation": "colors.grayPalette.400",
		"--shiki-token-link": "colors.grayPalette.400",
		"& code": {
			fontFamily: "inherit",
		},
	},
});
