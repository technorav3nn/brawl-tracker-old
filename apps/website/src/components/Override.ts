/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ComponentConstructorOptions, ComponentProps } from "svelte";
import Button from "./ui/button/Button.svelte";

export class _ButtonVar extends Button {
	constructor(options: ComponentConstructorOptions<ComponentProps<Button>>) {
		super({ ...options, props: { variant: "tertiary" } });
	}
}

export const ButtonVar = {
	..._ButtonVar,
	$$render: ($$result: any, $$props: any, $$bindings: any, $$slots: any) =>
		(_ButtonVar as any).$$render(
			$$result,
			{ variant: "teritary", ...$$props },
			$$bindings,
			$$slots
		),
} as typeof _ButtonVar & {
	$$render: (...args: any[]) => any;
};
