<script lang="ts">
	import { Menu2, Moon, Sun } from "tabler-icons-svelte";
	import DesktopLinks from "./DesktopLinks.svelte";
	import MobileDrawer from "./MobileDrawer.svelte";
	import { colorSchemeToggle } from "./Navbar.styles";
	import IconButton from "$components/ui/icon-button/IconButton.svelte";
	import { colorSchemeStore } from "$stores/color-scheme";
	import { css } from "$styled-system/css";
	import { container, hstack } from "$styled-system/patterns";

	function toggleColorScheme() {
		if ($colorSchemeStore === "light") {
			colorSchemeStore.set("dark");
		} else {
			colorSchemeStore.set("light");
		}
	}
</script>

<nav class={css({ pos: "sticky", top: 0, zIndex: "sticky", bg: "bg.default" })}>
	<div class={css({ pos: "relative", borderBottomWidth: "1px" })}>
		<div class={container({ py: { base: 3, md: 4 }, maxW: "7xl" })}>
			<section class={hstack({ justify: "space-between", gap: 8 })}>
				<div class={hstack({ gap: 10 })}>
					<DesktopLinks />
				</div>
				<section class={hstack({ gap: 1 })}>
					<IconButton variant="tertiary" on:click={toggleColorScheme}>
						<Sun class={colorSchemeToggle({ variant: "sun" })} />
						<Moon class={colorSchemeToggle({ variant: "moon" })} />
					</IconButton>
					<MobileDrawer>
						<IconButton
							css={{
								display: {
									base: "flex",
									lg: "none",
								},
							}}
							variant="tertiary"
						>
							<Menu2 />
						</IconButton>
					</MobileDrawer>
				</section>
			</section>
		</div>
	</div>
</nav>
