<script lang="ts">
	import type { SkeletonThemeType } from '$lib/types';
	import { getThemeMode, setThemeMode } from '$lib/utils/settings-utils';
	import { onMount } from 'svelte';

	const colorSchemes: SkeletonThemeType[] = ['skeleton', 'crimson', 'wintry', 'modern'];
	let defaultValue: string = 'crimson';

	const updateColorTheme = (event: Event) => {
		const target = event.target as HTMLSelectElement;
		defaultValue = getThemeMode(window);

		for (let scheme of colorSchemes) {
			if (target.value === scheme) {
				setThemeMode(window, target.value);
				document.body.setAttribute('data-theme', target.value);
				defaultValue = target.value;
			}
		}
	};

	onMount(() => {
		defaultValue = getThemeMode(window);
	});
</script>

<div class="w-full max-w-[200px]">
	<select class="select text-[0.7rem]" on:change={updateColorTheme} value={defaultValue}>
		{#each colorSchemes as scheme}
			<option value={scheme}>{scheme[0].toUpperCase()}{scheme.slice(1)}</option>
		{/each}
	</select>
</div>
