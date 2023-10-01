import { defineTokens } from "@pandacss/dev";

export const tokens = defineTokens({
	colors: {
		grayPalette: {
			25: { value: "{colors.gray.25}" },
			50: { value: "{colors.gray.50}" },
			100: { value: "{colors.gray.100}" },
			200: { value: "{colors.gray.200}" },
			300: { value: "{colors.gray.300}" },
			400: { value: "{colors.gray.400}" },
			500: { value: "{colors.gray.500}" },
			600: { value: "{colors.gray.600}" },
			700: { value: "{colors.gray.700}" },
			800: { value: "{colors.gray.800}" },
			900: { value: "{colors.gray.900}" },
			950: { value: "{colors.gray.950}" },
		},
	},
	fonts: {
		inter: {
			value: "var(--font-inter), sans-serif",
		},
		"plus-jakarta-sans": {
			value: "var(--font-plus-jakarta), sans-serif",
		},
	},
	animations: {
		bounce: { value: "" },
	},
});
