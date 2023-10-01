<script>
	import ColorSchemeScript from "$components/ColorSchemeScript.svelte";
	import Navbar from "$components/layout/Navbar";
	import { container } from "$styled-system/patterns";
	import "../app.pcss";
	import "@fontsource-variable/inter/index.css";
	import "@fontsource-variable/plus-jakarta-sans/index.css";
</script>

<svelte:head>
	<title>Brawl Tracker - Track your Brawl Stars stats</title>
	<ColorSchemeScript />
</svelte:head>

<Navbar />
<div class={container({ flex: 1, maxW: "7xl" })}>
	<slot />
</div>
