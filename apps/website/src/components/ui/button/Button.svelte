<script lang="ts">
	import { type ActionArray, forwardEventsBuilder, useActions } from "@smui/common/internal";
	import type { HTMLAttributes } from "svelte/elements";
	import { type CssProp, extractCssProp } from "$lib/util/css/css-prop";
	import { getCurrentComponent } from "$lib/util/svelte";
	import { css, cx } from "$styled-system/css";
	import { type ButtonVariant, button } from "$styled-system/recipes";
	import { token } from "$styled-system/tokens";
	import type { SystemStyleObject } from "$styled-system/types";

	type $$Props = {
		cssProp?: CssProp;
		px?: SystemStyleObject["padding"];
		size?: ButtonVariant["size"];
		use?: ActionArray;
		variant?: ButtonVariant["variant"];
	} & HTMLAttributes<HTMLButtonElement> &
		HTMLAttributes<HTMLAnchorElement>;

	export let variant: $$Props["variant"] = "primary";
	export let size: $$Props["size"] = "md";
	export let px: $$Props["px"] = token("spacing.5");
	export let cssProp: CssProp = {};
	export let use: ActionArray = [];

	export { cssProp as css };

	const customStyles = extractCssProp(cssProp);
	const forwardEvents = forwardEventsBuilder(getCurrentComponent());
</script>

<button
	class={cx(
		button({ variant, size }),
		css({
			px,
			...customStyles,
		})
	)}
	use:forwardEvents
	use:useActions={use}
>
	<slot />
</button>
