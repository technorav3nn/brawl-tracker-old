<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
	import { getMenuRecipeContext } from "./context";

	type $$Props = DropdownMenuPrimitive.ItemProps;
	type $$Events = DropdownMenuPrimitive.ItemEvents;

	const classes = getMenuRecipeContext();
</script>

<DropdownMenuPrimitive.Item
	class={classes.item}
	{...$$restProps}
	on:click
	on:keydown
	on:focusin
	on:focusout
	on:pointerdown
	on:pointerleave
	on:pointermove
>
	<slot />
</DropdownMenuPrimitive.Item>
