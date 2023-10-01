import { getContext, setContext } from "svelte";
import type { InferRecipeSlots } from "$lib/types/slot-recipes";
import { type MenuVariantProps, menu } from "./Menu.recipe";

const CONTEXT_NAME = "menu-styles";

export function getMenuRecipeContext() {
	return getContext<InferRecipeSlots<typeof menu>>(CONTEXT_NAME);
}

export function setMenuRecipeContext(props: MenuVariantProps) {
	return setContext(CONTEXT_NAME, menu(props));
}
