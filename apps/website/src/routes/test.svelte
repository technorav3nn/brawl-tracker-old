<script>
	import { css } from "$styled-system/css";

	export let isIcon = false;
</script>

<h1
	class={css({
		fontSize: isIcon ? "10rem" : 5,
	})}
>
	<slot />
</h1>
