<script setup lang="ts">
import PlayerTagDetails from "./_components/player-tag-details.vue";
import StatsHero from "./_components/stats-hero.vue";
import { Box } from "styled-system/jsx";
</script>

<template>
	<Box :py="{ base: '16', lg: '16' }" maxW="7xl" mx="auto" px="4">
		<Box alignItems="center" display="flex" flexDir="column" textAlign="center">
			<StatsHero />
			<PlayerTagDetails />
		</Box>
	</Box>
</template>
