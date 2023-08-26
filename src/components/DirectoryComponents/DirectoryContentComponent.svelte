<script lang="ts">
	import MediaQuery from '../../MediaQuery.svelte';

	export let containerClasses: string = '';
	export let size: number = 100;
	export let name: string = '';
	export let isSelected: boolean = false;
	export let onSelect: (name: string) => void;
	export let onOpen: (name: string) => void;
	export let tabindex: number;
</script>

<MediaQuery query="(max-width: 480px)" let:matches>
	{#if matches}
		<div
			class="flex flex-col cursor-pointer gap-2 {containerClasses}"
			on:click={() => onOpen(name)}
			on:keydown={() => onOpen(name)}
			role="button"
			{tabindex}
		>
			<div class={isSelected ? 'bg-white/20' : ''}>
				<slot />
			</div>

			<div
				class="line-clamp-2 text-center p-1 {isSelected ? 'bg-white/20' : ''} select-none"
				style="width: {size}px; overflow-wrap: break-word;"
			>
				{name}
			</div>
		</div>
	{:else}
		<div
			class="flex flex-col cursor-pointer gap-2 {containerClasses}"
			on:click={() => onSelect(name)}
			on:keydown={() => onSelect(name)}
			on:dblclick={() => onOpen(name)}
			role="button"
			{tabindex}
		>
			<slot />

			<div
				class="line-clamp-2 text-center p-1 {isSelected ? 'bg-white/20' : ''} select-none"
				style="width: {size}px; overflow-wrap: break-word;"
			>
				{name}
			</div>
		</div>
	{/if}
</MediaQuery>
