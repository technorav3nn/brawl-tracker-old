// @ts-expect-error Internal api
import { get_current_component } from "svelte/internal";

export const getCurrentComponent = get_current_component;
