<script lang="ts">
	import type { UIFolderType } from '$lib/types';
	import FolderIcon from '../../assets/icons/FolderIcon.svelte';
	import OpenFolderIcon from '../../assets/icons/OpenFolderIcon.svelte';

	export let folder: UIFolderType;
	export let containerClasses: string = '';
	export let size: number = 100;
	export let isSelected: boolean = false;
	export let onSelect: (name: string) => void;
	export let isOpen: boolean = false;
	export let onOpen: (name: string) => void;
	export let tabindex: number;
</script>

<div
	class="flex flex-col cursor-pointer gap-2 {containerClasses}"
	on:click={() => onSelect(folder.name)}
	on:keydown={() => onSelect(folder.name)}
	on:dblclick={() => onOpen(folder.name)}
	role="button"
	{tabindex}
>
	<div class={isSelected ? 'bg-white/20' : ''}>
		{#if !isOpen}
			<FolderIcon {size} />
		{:else}
			<OpenFolderIcon {size} />
		{/if}
	</div>

	<div
		class="line-clamp-2 text-center p-1 {isSelected ? 'bg-white/20' : ''} select-none"
		style="width: {size}px; overflow-wrap: break-word;"
	>
		{folder.name}
	</div>
</div>
