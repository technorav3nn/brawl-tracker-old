<script setup lang="ts">
import { IconChevronDown, IconChevronRight } from "@tabler/icons-vue";
import { css, cx } from "$styled-system/css";
import { styled } from "$styled-system/jsx";
import { wrap } from "$styled-system/patterns";
import { details } from "$styled-system/recipes";

const tagInfoState = ref(false);
const detailsClasses = details();
</script>

<template>
	<details
		:class="cx(detailsClasses.root, css({ w: '250px', mt: 5 }))"
		:open="tagInfoState"
		@toggle="tagInfoState = ($event.target as HTMLDetailsElement).open"
	>
		<summary
			:class="
				cx(
					detailsClasses.summary,
					wrap({
						justifyContent: 'flex-start',
						alignItems: 'center',
						gap: 1,
						userSelect: 'none',
					})
				)
			"
		>
			<IconChevronDown :size="20" v-if="tagInfoState" />
			<IconChevronRight :size="20" v-else />
			<styled.p mx="auto">Where is my Tag?</styled.p>
		</summary>
		<p :class="detailsClasses.content">
			Your tag is the 9 character code that is unique to your account. You can find it by clicking
			on your profile in the game.
		</p>
	</details>
</template>
