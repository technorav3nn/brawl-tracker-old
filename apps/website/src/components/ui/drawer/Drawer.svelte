<script lang="ts">
	import { createDialog } from "@melt-ui/svelte";
	import { writable } from "svelte/store";
	import { fade, fly } from "svelte/transition";
	import { X } from "tabler-icons-svelte";
	import { emphasizedIn, emphasizedOut } from "$lib/util/transitions/easings";
	import { drawer } from "./Drawer.recipe";
	import { css, cx } from "$styled-system/css";
	import { stack } from "$styled-system/patterns";
	import { button } from "$styled-system/recipes";

	const drawerOpen = writable(false);

	type $$Slots = {
		content: {
			close: () => void;
			open: () => void;
			state: typeof drawerOpen;
		};
		default: {
			close: () => void;
			open: () => void;
			state: typeof drawerOpen;
		};
		trigger: {};
	};

	export let title: string;

	const {
		elements: { trigger, overlay, content, title: titleElement, close, portalled },
	} = createDialog({
		closeOnOutsideClick: true,
		closeOnEscape: true,
		forceVisible: true,
		open: drawerOpen,
	});

	const classes = drawer({ placement: "right" });

	function openDrawer() {
		drawerOpen.set(true);
	}

	function closeDrawer() {
		drawerOpen.set(false);
	}
</script>

<slot close={closeDrawer} open={openDrawer} state={drawerOpen} />

<div {...$trigger} use:$trigger.action>
	<slot name="trigger" />
</div>

<div {...$portalled} use:$portalled.action>
	{#if $drawerOpen}
		<div
			class={classes.backdrop}
			{...$overlay}
			use:$overlay.action
			transition:fade={{ duration: 225 }}
		/>
		<div class={classes.container}>
			<div
				class={classes.content}
				use:$content.action
				in:fly={{
					x: 400,
					duration: 400,
					opacity: 1,
					easing: emphasizedIn,
				}}
				out:fly={{
					x: 400,
					duration: 200,
					opacity: 1,
					easing: emphasizedOut,
				}}
				{...$content}
			>
				<div
					class={stack({
						direction: "row",
						gap: 6,
						alignItems: "center",
						justifyContent: "space-between",
					})}
				>
					<div class={stack({ gap: 1 })}>
						<h2
							class={cx(classes.title, css({ textStyle: "h3!" }))}
							{...$titleElement}
							use:$titleElement.action
						>
							{title}
						</h2>
					</div>
					<button
						class={cx(
							button({ variant: "tertiary" }),
							css({ /* position: "absolute", top: 6, right: 4,*/ padding: 0 })
						)}
						{...$close}
						use:$close.action
					>
						<X />
					</button>
				</div>

				<slot name="content" close={closeDrawer} open={openDrawer} state={drawerOpen} />
			</div>
		</div>
	{/if}
</div>
