<script>
	import { LOCAL_STORAGE_KEY } from "$lib/stores/color-scheme";
</script>

<!-- Have to use @html since I don't want to use svelte:head -->
<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html `
    <script data-theme-script="true" data-local-storage-key=${LOCAL_STORAGE_KEY}>
		const key = document.currentScript.dataset.localStorageKey;
		const colorScheme = localStorage[key];
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

		if (colorScheme === "dark" || (colorScheme !== "light" && prefersDark)) {
			document.documentElement.setAttribute("data-color-scheme", "dark");
		} else {
			document.documentElement.setAttribute("data-color-scheme", "light");
		}
	</script>
`}
