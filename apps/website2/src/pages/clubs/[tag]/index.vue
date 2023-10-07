<script setup lang="ts">
import { brawlStarsApiClient } from "$lib/brawl-stars";
import { serdeClass } from "$lib/util/objects";

const { params } = useRoute("clubs-tag");
const { data } = useAsyncData(`clubs-${params.tag}`, async () => {
	return serdeClass(await brawlStarsApiClient.clubs.fetch(params.tag)!);
});
</script>

<template>
	{{ data }}
</template>
