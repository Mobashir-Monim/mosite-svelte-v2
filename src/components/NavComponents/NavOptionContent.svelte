<script lang="ts">
	import type { NavOptionType } from '$lib/types';

	export let option: NavOptionType;
	export let expanded: boolean = false;
</script>

<div class="p-2 bg-white/20 rounded-xl transit group-hover:bg-primary-400">
	<svelte:component
		this={option.icon}
		size={25}
		classes="fill-white group-hover:fill-tertiary-400"
	/>
</div>

<div
	class="inline-block my-auto {expanded
		? 'w-full text-[0.8rem] text-opacity-100'
		: 'w-[0%] text-[0rem] text-opacity-0'} transit overflow-hidden"
>
	{option.name}
</div>
