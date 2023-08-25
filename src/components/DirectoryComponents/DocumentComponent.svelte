<script lang="ts">
	import type { UIFileType } from '$lib/types';
	import DocumentIcon from '../../assets/icons/DocumentIcon.svelte';
	import OpenDocumentIcon from '../../assets/icons/OpenDocumentIcon.svelte';

	export let file: UIFileType;
	export let size: number = 100;
	export let containerClasses: string = '';
	export let isSelected: boolean = false;
	export let onSelect: (name: string) => void;
	export let onOpen: (name: string) => void;
	export let tabindex: number;
</script>

<div
	class="flex flex-col cursor-pointer gap-2 {containerClasses}"
	on:click={() => onSelect(file.name)}
	on:keydown={() => onSelect(file.name)}
	on:dblclick={() => onOpen(file.name)}
	role="button"
	{tabindex}
>
	<div class={isSelected ? 'bg-white/20' : ''}>
		{#if !file.isOpen}
			<DocumentIcon {size} />
		{:else}
			<OpenDocumentIcon {size} />
		{/if}
	</div>
	<div
		class="line-clamp-2 text-center p-1 {isSelected ? 'bg-white/20' : ''} select-none"
		style="width: {size}px; overflow-wrap: break-word;"
	>
		{file.name}
	</div>
</div>
