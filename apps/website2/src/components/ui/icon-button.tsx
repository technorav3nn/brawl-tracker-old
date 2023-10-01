import type { Component } from "vue";
import type { ExtendProps, FunctionalComponentProps } from "../../lib/types/vue";
import { Button } from "./button";

export const IconButton: Component<ExtendProps<FunctionalComponentProps<typeof Button>>> = (
	props
) => {
	const slots = useSlots();
	return (
		// @ts-expect-error not sure
		<Button {...props} px={0}>
			{slots.default?.()}
		</Button>
	);
};
