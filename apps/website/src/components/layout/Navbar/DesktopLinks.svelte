<script>
	import { Crown } from "tabler-icons-svelte";
	import { NAVBAR_ITEMS } from "$lib/config";
	import { shouldSetAriaCurrentPage } from "$lib/util/html-tags";
	import { navbarLink } from "./Navbar.styles";
	import { page } from "$app/stores";
	import { css } from "$styled-system/css";
	import { hstack } from "$styled-system/patterns";
</script>

<!-- Desktop Navbar -->
<a
	class={css({
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 2,
		fontSize: "xl",
		fontWeight: "bold",
	})}
	href="/"
>
	<Crown size={30} strokeWidth={2.1} />
	Royale Stats
</a>
<div class={hstack({ gap: 8, display: { base: "none", lg: "flex" } })}>
	{#each NAVBAR_ITEMS as { label, path }}
		<a
			class={navbarLink}
			aria-current={shouldSetAriaCurrentPage($page.url.pathname, path) ? "page" : undefined}
			href={path}>{label}</a
		>
	{/each}
</div>
