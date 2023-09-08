<script lang="ts">
	import type { IconPropsType } from '$lib/types';

	export let icon: ConstructorOfATypedSvelteComponent;
	export let props: IconPropsType;
	export let openCount: number = 0;
	export let onClick: () => void = () => {};
</script>

<button
	class="relative p-1.5 transit cursor-pointer bg-white/30 dark:variant-soft-secondary hover:bg-sky-300/50 dark:hover:bg-blue-500/50 rounded-xl"
	on:click={onClick}
>
	<svelte:component this={icon} {...props} />
	{#if openCount > 1}
		<span
			class="absolute variant-ghost-primary w-[20px] h-[20px] rounded-full top-[-5px] right-[-5px] flex flex-col justify-center"
		>
			<span class="mx-auto text-[0.6rem] tracking-tighter font-normal">{openCount}</span>
		</span>
	{/if}
</button>
