import { defineUtility } from "@pandacss/dev";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function colorWithOpacityTransform(property: string): any {
	return (value, { token }) => {
		const lastIndex = value?.lastIndexOf("/");
		if (!lastIndex) {
			return {};
		}
		if (typeof value?.substring !== "function") {
			return {};
		}
		const color = value?.substring(0, lastIndex);
		if (!color) {
			return {};
		}
		const amount = value.split("/").at(-1);
		const colorValue = token(`colors.${color}`);

		const amountValue = `${amount}%`;
		return {
			// Cannot get the type of the property from the type of the transform function
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			[property as any]: `color-mix(in srgb, ${colorValue}, transparent ${amountValue})`,
		};
	};
}

export const utilities = {
	backgroundColorWithOpacity: defineUtility({
		shorthand: ["bgCt", "bgt", "bgColorWithOpacity", "bgColorOpacity"],
		property: "backgroundColor",
		className: "transparentize_bgc",
		transform: colorWithOpacityTransform("backgroundColor"),
	}),
	textColorWithOpacity: defineUtility({
		shorthand: ["textCt", "textt", "textColorWithOpacity", "textColorOpacity"],
		property: "color",
		className: "transparentize_text",
		transform: colorWithOpacityTransform("color"),
	}),
	lineHeight: {
		className: "leading",
		shorthand: "leading",
		values: "lineHeights",
	},
	letterSpacing: {
		className: "tracking",
		shorthand: "tracking",
		values: "letterSpacings",
	},
};
