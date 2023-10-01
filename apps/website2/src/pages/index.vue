<script setup lang="ts">
import { Button } from "$components/ui/button";
import { Box, Flex, styled } from "$styled-system/jsx";
</script>

<template>
	<Box
		:py="{
			base: '8',
			md: '32',
		}"
		alignItems="flex-start"
		display="flex"
		flexDirection="column"
		gap="4"
		maxW="lg"
		px="0"
	>
		<styled.h1 textStyle="h1">Royale Stats</styled.h1>
		<styled.small textStyle="small">A simple stats tracker for Clash Royale</styled.small>
		<Flex
			:alignItems="{ md: 'center' }"
			:flexDirection="{
				base: 'column',
				md: 'row',
			}"
			gap="3"
			mt="5"
			w="full"
		>
			<Button size="xl" variant="solid">Get Started</Button>
			<Button size="xl" variant="outline">View Leaderboard</Button>
		</Flex>
	</Box>
</template>
