<script lang="ts">
	import type { ClickType } from '$lib/types';
	import { getClickMode, setClickMode } from '$lib/utils/settings-utils';
	import { onMount } from 'svelte';

	const clickTypes: ClickType[] = ['single', 'double'];
	let currentClickSettings: ClickType;

	const updateClickSetting = (event: Event) => {
		const target = event.target as HTMLSelectElement;

		for (let clickType of clickTypes) {
			if (target.value === clickType) {
				setClickMode(window, target.value);
			}
		}
	};

	onMount(() => {
		let clickMode: string | null = getClickMode(window);
		for (let clickType of clickTypes) {
			if (clickType === clickMode) {
				currentClickSettings = clickType;
			}
		}
	});
</script>

<div class="w-full max-w-[200px]">
	<select class="select text-[0.7rem]" on:change={updateClickSetting} value={currentClickSettings}>
		{#each clickTypes as clickType}
			<option value={clickType}>{clickType[0].toUpperCase()}{clickType.slice(1)}</option>
		{/each}
	</select>
</div>
