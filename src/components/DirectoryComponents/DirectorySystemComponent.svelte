<script lang="ts">
	import { globalDirectorySystemStore } from '$lib/store';
	import type { DirectoryStateType } from '$lib/types';
	import DocumentComponent from './DocumentComponent.svelte';
	import FolderComponent from './FolderComponent.svelte';

	export let directoryName: string;
	let directoryState: DirectoryStateType;
	export let contentContainerClasses: string = '';
	let openedFolder: string = '';
	let selectedContent: string = '';
	$: isSelected = (name: string) => selectedContent === name;

	globalDirectorySystemStore.subscribe((value) => {
		const state = value.find((dir) => dir.name === directoryName);
		if (state) directoryState = state;
	});

	const onOpen = (folder: string) => {
		openedFolder = folder;
		selectedContent = '';
	};

	const onSelect = (content: string) => {
		selectedContent = content;
	};
</script>

<div class="flex flex-row flex-wrap justify-between w-full">
	{#if directoryState}
		{#each directoryState?.contents as content, id}
			{#if content.type === 'folder'}
				<slot name="folder">
					<FolderComponent
						folder={content}
						size={directoryState?.size}
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
						size={directoryState?.size}
						containerClasses={contentContainerClasses}
						isSelected={isSelected(content.name)}
						{onSelect}
						{onOpen}
						tabindex={id}
					/>
				</slot>
			{/if}
		{/each}
	{/if}
</div>
