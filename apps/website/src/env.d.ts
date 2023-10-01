import type { SvelteComponent } from "svelte";

declare module "svelte/internal" {
	interface ComponentInternals {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		callbacks: { [index: string]: ((event: any) => void)[] };
	}
	interface ExposedSvelteComponent {
		$$: ComponentInternals;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let get_current_component: () => SvelteComponent<any, any, any>;
	export function flush(): void;
}
