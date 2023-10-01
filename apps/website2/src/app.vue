<script setup lang="ts">
useFont([
	{
		src: "/fonts/inter-latin-wght-normal.woff2",
		family: "Inter Variable",
		weight: "100 900",
		class: "font-inter-body",
		preload: true,
		fallback: ["-apple-system", "BlinkMacSystemFont", "system-ui", "-ui-sans-serif", "sans-serif"],
	},
]);
</script>

<template>
	<NuxtLayout name="main">
		<NuxtPage />
	</NuxtLayout>
</template>
