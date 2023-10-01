import type { Slots } from "vue";

export function renderAsChild(slots: Slots, attrs: Record<string, unknown>) {
	if (!slots.default?.().length) return null;

	return h(slots.default()[0], { ...attrs });
}
