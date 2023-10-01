<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
	import { getMenuRecipeContext } from "./context";

	type $$Props = DropdownMenuPrimitive.LabelProps;

	const classes = getMenuRecipeContext();
</script>

<DropdownMenuPrimitive.Label
	class={classes.itemGroupLabel}
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
</DropdownMenuPrimitive.Label>
