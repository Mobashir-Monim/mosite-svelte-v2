<script lang="ts">
	import MediaQuery from '../../MediaQuery.svelte';

	export let containerClasses: string = '';
	export let name: string = '';
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
			<slot />
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
		</div>
	{/if}
</MediaQuery>
