<script setup lang="ts">
import { IconChevronRight, IconSearch } from "@tabler/icons-vue";
import { IconButton } from "$components/ui/icon-button";
import { css } from "$styled-system/css";
import { Box, styled } from "$styled-system/jsx";
</script>

<template>
	<Box>
		<NuxtLink
			:class="
				css({
					display: 'inline-flex',
					alignItems: 'center',
					bg: 'bg.muted',
					px: '2',
					py: '1',
					mb: '6',
					color: 'fg.default',
					rounded: 'full',
				})
			"
			href="#"
		>
			<styled.span
				bg="accent.default"
				color="accent.fg"
				mr="3"
				px="3"
				py="1.5"
				rounded="full"
				textStyle="xs"
			>
				New
			</styled.span>
			<styled.span fontWeight="medium" textStyle="md">Leaderboard Stats</styled.span>
			<IconChevronRight :class="css({ width: '5', height: '5', ml: '2' })" />
		</NuxtLink>
		<styled.h1 mb="4" textStyle="h1">The best way to get your stats</styled.h1>
		<styled.p color="fg.subtle" fontSize="md" textStyle="lead">
			Find out how you stack up against the competition in Brawl Stars. View your stats now!
		</styled.p>
		<Box
			bg="bg.canvas"
			borderColor="border.emphasized"
			borderWidth="1px"
			display="flex"
			mt="5"
			mx="20"
			p="2"
			rounded="l2"
		>
			<styled.input
				bg="bg.canvas"
				flexGrow="1"
				ml="1"
				outline="0"
				placeholder="Player Tag, e.g. #RF8JYVJ"
				w="50%"
			/>
			<IconButton>
				<IconSearch />
			</IconButton>
		</Box>
	</Box>
</template>
