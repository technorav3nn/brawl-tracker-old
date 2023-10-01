<script>
	import { NAVIGATION_DRAWER_ITEMS } from "$lib/config";
	import { shouldSetAriaCurrentPage } from "$lib/util/html-tags";
	import { page } from "$app/stores";
	import Drawer from "$components/ui/drawer/Drawer.svelte";
	import { css } from "$styled-system/css";
	import { vstack } from "$styled-system/patterns";
</script>

<Drawer title="Menu">
	<svelte:fragment slot="trigger">
		<slot />
	</svelte:fragment>
	<div slot="content" let:close>
		<div
			class={vstack({
				gap: 2,
				mt: 5,
				// p: 3,

				alignItems: "flex-start",
			})}
		>
			{#each NAVIGATION_DRAWER_ITEMS as { path, label }, index (path)}
				<a
					class={css({
						textAlign: "left",
						width: "100%",
						py: 3,
						color: "fg.subtle",
						borderLeftWidth: 5,
						borderLeftColor: "transparent",
						rounded: "l2",
						_hover: {
							bg: "bg.subtle",
						},
						_currentPage: {
							fontWeight: "semibold",
							color: "fg.default",
							borderLeftColor: "accent.emphasized",
							bgCt: "bg.subtle/50",
						},
						transitionDuration: "normal",
						transitionProperty: "color, font-weight, background-color",
						transitionTimingFunction: "default",
					})}
					aria-current={shouldSetAriaCurrentPage($page.url.pathname, path) ? "page" : undefined}
					aria-label={`Go to ${label}`}
					href={path}
					on:click={close}
				>
					<p
						class={css({
							transform: "translateX(15px)",
						})}
					>
						{label}
					</p>
				</a>
			{/each}
		</div>
	</div>
</Drawer>
