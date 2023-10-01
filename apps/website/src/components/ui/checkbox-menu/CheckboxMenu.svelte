<script lang="ts">
	import { DropdownMenu } from "bits-ui";
	import { writable } from "svelte/store";
	import { Check } from "tabler-icons-svelte";
	import { flyAndScale } from "$lib/util/transitions/fly-and-scale";
	import { menu } from "./new/Menu.recipe";
	import { css, cx } from "$styled-system/css";

	type $$Slots = {
		default: {};
		label: {
			labelClass: string;
		};
		trigger: {};
	};

	const classes = menu({ size: "sm" });
	const checkedItems = writable<string[]>([]);

	function createOnCheckHandler(item: string) {
		return () => {
			checkedItems.update(($checkedItems) => {
				if ($checkedItems.includes(item)) {
					return $checkedItems.filter((_item) => _item !== item);
				} else {
					return [...$checkedItems, item];
				}
			});
		};
	}

	export let items: string[];
	export let label: string | undefined = undefined;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		<slot name="trigger" />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class={cx(classes.content, css({ minW: "8rem" }))} transition={flyAndScale}>
		<div class={classes.itemGroup}>
			{#if label}
				<p class={cx(classes.itemGroupLabel, css({ py: "1!" }))}>{label}</p>
				<hr />
			{/if}
			{#each items as item}
				<DropdownMenu.CheckboxItem
					class={cx(
						classes.item,
						/**
						 * TODO: Refactor once Park UI finishes refactoring the menu component
						 */
						css({
							position: "relative",
							display: "flex",
							userSelect: "none",
							alignItems: "center",
							rounded: "l1",
							pt: "1.5",
							pb: "1.5",
							pl: "2",
							pr: "2",
							fontSize: "sm",
							_disabled: { pointerEvents: "none", opacity: "0.5" },
						})
					)}
					checked={$checkedItems.includes(item)}
					on:click={createOnCheckHandler(item)}
				>
					<span
						class={css({
							pos: "absolute",
							left: "2",
							display: "flex",
							h: "3.5",
							w: "3.5",
							alignItems: "center",
							justifyContent: "center",
						})}
					>
						{#if $checkedItems.includes(item)}
							<DropdownMenu.CheckboxIndicator>
								<Check class={css({ h: "15px", w: "15px" })} strokeWidth={2.5} />
							</DropdownMenu.CheckboxIndicator>
						{/if}
					</span>
					<p class={css({ pl: 6 })}>{item}</p>
				</DropdownMenu.CheckboxItem>
			{/each}
		</div>
	</DropdownMenu.Content>
</DropdownMenu.Root>
