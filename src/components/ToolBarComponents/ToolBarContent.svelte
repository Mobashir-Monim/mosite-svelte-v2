<script lang="ts">
	import type { IconPropsType } from '$lib/types';

	export let icon: ConstructorOfATypedSvelteComponent;
	export let props: IconPropsType;
	export let openCount: number = 0;
	export let showToolBarContent: boolean;
	export let onClick: () => void = () => {};
</script>

<div class="relative">
	<button
		class="relative py-1.5 {showToolBarContent
			? 'mx-[4px] w-[47px] px-1.5'
			: 'mx-0 w-0 px-0'} transit cursor-pointer bg-white/30 dark:variant-soft-secondary hover:bg-sky-300/50 dark:hover:bg-blue-500/50 rounded-xl transit overflow-hidden"
		type="button"
		on:click={onClick}
	>
		<svelte:component this={icon} {...props} />
	</button>
	<span
		class="absolute variant-ghost-primary w-[20px] h-[20px] rounded-full top-[-2px] right-[-2px] flex flex-col justify-center transit {openCount >
		1
			? 'opacity-100'
			: 'opacity-0'}"
	>
		<span class="mx-auto text-[0.6rem] tracking-tighter font-normal select-none">{openCount}</span>
	</span>
</div>
