import { type EasingFunction, type TransitionConfig, slide } from "svelte/transition";

export function slideFade(
	node: Element,
	options: { delay?: number; duration?: number; easing?: EasingFunction; y?: number }
) {
	const { duration, delay } = options;
	const slideTrans = slide(node, options);

	return {
		duration,
		delay,
		easing: slideTrans.easing,
		css: (t, u) => {
			return `
                opacity: ${t};
                transform: translateY(${u * (options.y ?? 4)}px);
            `;
		},
	} satisfies TransitionConfig;
}
