import cubicBezier from "bezier-easing";
import type { EasingFunction } from "svelte/transition";

export const emphasizedIn: EasingFunction = (t) => {
	const bezier = cubicBezier(0.05, 0.7, 0.1, 1.0);
	return bezier(t);
};

export const emphasizedOut: EasingFunction = (t) => {
	const bezier = cubicBezier(0.3, 0.0, 0.8, 0.15);
	return bezier(t);
};
