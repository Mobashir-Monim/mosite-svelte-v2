<script lang="ts">
	import MediaQuery from '../MediaQuery.svelte';

	export let containerClasses: string = '';
	export let name: string = '';
	export let onSelect: (name: string) => void;
	export let onOpen: (name: string) => void;
</script>

<MediaQuery query="(max-width: 480px)" let:matches>
	{#if matches}
		<button
			class="flex flex-col cursor-pointer gap-2 {containerClasses}"
			on:click={() => onOpen(name)}
		>
			<slot />
		</button>
	{:else}
		<button
			class="flex flex-col cursor-pointer gap-1 {containerClasses}"
			on:click={() => onSelect(name)}
			on:keydown={() => onSelect(name)}
			on:dblclick={() => onOpen(name)}
		>
			<slot />
		</button>
	{/if}
</MediaQuery>
