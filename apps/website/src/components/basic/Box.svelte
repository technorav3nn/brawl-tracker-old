<script lang="ts">
	import { forwardEventsBuilder } from "@smui/common/internal";
	import type { HTMLAttributes } from "svelte/elements";
	import { createBoxExtractor } from "$lib/util/css/css-prop";
	import { getCurrentComponent } from "$lib/util/svelte";
	import { css } from "$styled-system/css";
	import type { SystemProperties } from "$styled-system/types/style-props";
	import type { MinimalNested, SystemStyleObject } from "$styled-system/types/system-types";

	type $$Props = {
		as?: string;
		element?: unknown;
	} & HTMLAttributes<HTMLDivElement> &
		Partial<SystemProperties & MinimalNested<SystemStyleObject>>;

	export let as: $$Props["as"] = "div";
	export let element: $$Props["element"] = undefined;

	const forwardEvents = forwardEventsBuilder(getCurrentComponent());
	const extracted = createBoxExtractor($$restProps);
	const boxCss = css(extracted);
</script>

<svelte:element this={as} bind:this={element} class={boxCss} {...$$restProps} use:forwardEvents>
	<slot />
</svelte:element>
