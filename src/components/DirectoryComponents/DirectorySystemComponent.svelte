<script lang="ts">
	import { globalDirectorySystemStore } from '$lib/store';
	import {
		openFile,
		openWindow,
		selectContent
	} from '$lib/store/global-directory-system-store-control';
	import type { UIFileOrFolderType, WindowStateType } from '$lib/types';
	import DocumentComponent from './DocumentComponent.svelte';
	import FolderComponent from './FolderComponent.svelte';

	export let windowName: string;
	let windowState: WindowStateType;
	export let contentContainerClasses: string = '';
	let selectedContent: string = '';
	$: isSelected = (name: string) => selectedContent === name;

	globalDirectorySystemStore.subscribe((value) => {
		const state = value.find((dir) => dir.name === windowName);
		if (state) windowState = state;
	});

	const onOpen = (folder: string) => {
		const target: UIFileOrFolderType | undefined = windowState.contents?.find(
			(dir) => dir.name === folder
		);

		if (target) {
			if (target.type === 'folder') {
				openWindow(target.name, target.contents, 100, windowName);
			} else {
				console.log(target);

				openFile(target.name, target);
			}
		}

		selectedContent = '';
	};

	const onSelect = (content: string) => {
		selectedContent = content;
		selectContent(windowName, content);
	};
</script>

<div class="flex flex-row flex-wrap {windowName === 'root' ? 'justify-between' : ''} gap-5 w-full">
	{#if windowState && windowState?.contents?.length}
		{#each windowState?.contents as content, id}
			{#if content.type === 'folder'}
				<slot name="folder">
					<FolderComponent
						folder={content}
						size={windowState?.size}
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
						size={windowState?.size}
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
