<script lang="ts">
	import { forwardEventsBuilder } from "@smui/common/internal";
	import type { ComponentProps } from "svelte";
	import { getCurrentComponent } from "$lib/util/svelte";
	import Button from "../button/Button.svelte";

	type $$Props = ComponentProps<Button>;

	const forwardEvents = forwardEventsBuilder(getCurrentComponent());
</script>

<Button px={0} {...$$restProps} use={[forwardEvents]}>
	<slot />
</Button>
