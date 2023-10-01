<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
	import { slideFade } from "$lib/util/transitions/slide-fade";
	import { getMenuRecipeContext } from "./context";

	type $$Props = DropdownMenuPrimitive.ContentProps;
	type $$Events = DropdownMenuPrimitive.ContentEvents;

	const classes = getMenuRecipeContext();
</script>

<DropdownMenuPrimitive.Content class={classes.content} {...$$restProps} on:keydown>
	<slot />
</DropdownMenuPrimitive.Content>
