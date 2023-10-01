import { definePreset } from "@pandacss/dev";

import { conditions } from "./theme/conditions";
import { globalCss } from "./theme/global-css";
import { keyframes } from "./theme/keyframes";
import { semanticTokens } from "./theme/semantic-tokens";
import { tokens } from "./theme/tokens";
import { utilities } from "./theme/utilities";

export const preset = definePreset({
	presets: ["@pandacss/dev/presets", "@park-ui/presets"],
	theme: {
		extend: {
			recipes: {},
			tokens,
			semanticTokens,
			keyframes,
		},
	},
	globalCss,
	conditions,
	utilities,
});
