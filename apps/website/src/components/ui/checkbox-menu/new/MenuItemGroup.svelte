<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
	import { getMenuRecipeContext } from "./context";

	type $$Props = DropdownMenuPrimitive.GroupProps;

	const classes = getMenuRecipeContext();
</script>

<DropdownMenuPrimitive.Group
	class={classes.itemGroup}
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
</DropdownMenuPrimitive.Group>
