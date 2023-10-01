<script lang="ts">
	import Button from "$components/ui/button/Button.svelte";
	import * as Menu from "$components/ui/checkbox-menu/new";
	import { slideFade } from "$lib/util/transitions/slide-fade";
	import { css } from "$styled-system/css";
	import { flex } from "$styled-system/patterns";
	import { lead } from "$styled-system/recipes";
	import { slide } from "svelte/transition";
</script>

<div
	class={css({
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		px: 0,
		py: {
			base: 8,
			md: 32,
		},
		gap: 4,
		maxW: "lg",
	})}
>
	<div class={css({ textStyle: "h1" })}>Brawl Tracker</div>
	<small class={lead({})}>The best way to track stats.</small>
	<div
		class={flex({
			mt: 5,
			gap: 3,
			flexDirection: {
				base: "column",
				md: "row",
			},
			md: { alignItems: "center" },
			w: "full",
		})}
	>
		<Button size="xl" variant="solid">Get Started</Button>
		<Button size="xl" variant="outline">View Leaderboard</Button>

		<Menu.Root size="lg">
			<Menu.Trigger>
				<Button>CLICK ME NOW</Button>
			</Menu.Trigger>
			<Menu.Content transition={slide}>
				<Menu.Label>Hello</Menu.Label>
				<hr />
				<Menu.Group>
					<Menu.Item>Hello world</Menu.Item>
				</Menu.Group>
			</Menu.Content>
		</Menu.Root>
	</div>
</div>
