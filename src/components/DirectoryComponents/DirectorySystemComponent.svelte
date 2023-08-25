<script lang="ts">
	import type { UIFileType, UIFolderType } from '$lib/types';
	import DocumentComponent from './DocumentComponent.svelte';
	import FolderComponent from './FolderComponent.svelte';

	export let contents: (UIFileType | UIFolderType)[];
	export let contentSize: number = 100;
	export let contentContainerClasses: string = '';
	let openedFolder: string = '';
	let selectedContent: string = '';
	$: isOpen = (name: string) => openedFolder === name;
	$: isSelected = (name: string) => selectedContent === name;

	const onOpen = (folder: string) => {
		openedFolder = folder;
		selectedContent = '';
	};

	const onSelect = (content: string) => {
		selectedContent = content;
	};
</script>

<div class="flex flex-row flex-wrap justify-between w-full">
	{#each contents as content, id}
		{#if content.type === 'folder'}
			<slot name="folder">
				<FolderComponent
					folder={content}
					size={contentSize}
					containerClasses={contentContainerClasses}
					isSelected={isSelected(content.name)}
					{onSelect}
					{onOpen}
					tabindex={id}
				/>
			</slot>
		{:else}
			<slot name="file">
				<DocumentComponent
					file={content}
					size={contentSize}
					containerClasses={contentContainerClasses}
					isSelected={isSelected(content.name)}
					{onSelect}
					{onOpen}
					tabindex={id}
				/>
			</slot>
		{/if}
	{/each}
</div>
