<script lang="ts">
	import { DropdownMenu } from "bits-ui";
	import { setMenuRecipeContext } from "./context";
	import type { MenuVariantProps } from "$styled-system/recipes";

	type $$Props = MenuVariantProps;

	setMenuRecipeContext($$restProps);
</script>

<DropdownMenu.Root {...$$restProps}>
	<slot />
</DropdownMenu.Root>
