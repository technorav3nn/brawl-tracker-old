import { type FlyParams, fly as svelteFly } from "svelte/transition";

export function fly(node: Element, options: FlyParams) {
	return svelteFly(node, {
		...options,
		y: -10,
	});
}
