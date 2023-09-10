<script lang="ts">
	import { globalDirectorySystemStore } from '$lib/store';
	import {
		openFile,
		openWindow,
		selectContent
	} from '$lib/store/global-directory-system-store-control';
	import type { UIFileOrFolderType, WindowStateType } from '$lib/types';
	import { getClickMode } from '$lib/utils/click-utils';
	import DocumentComponent from './DocumentComponent.svelte';
	import FolderComponent from './FolderComponent.svelte';

	export let webWindowName: string;
	let webWindowState: WindowStateType;
	export let contentContainerClasses: string = '';
	let selectedContent: string = '';
	$: isSelected = (name: string) => selectedContent === name;

	globalDirectorySystemStore.subscribe((value) => {
		const state = value.find((dir) => dir.name === webWindowName);
		if (state) webWindowState = state;
	});

	const onOpen = (name: string, singleClickCall?: boolean) => {
		if (getClickMode(window) === 'single' && !singleClickCall) return;

		const target: UIFileOrFolderType | undefined = webWindowState.contents?.find(
			(dir) => dir.name === name
		);

		if (target) {
			if (target.type === 'folder') {
				openWindow(target.name, target.contents, 100, webWindowName);
			} else {
				openFile(target.name, target);
			}
		}

		selectedContent = '';
	};

	const onSelect = (content: string) => {
		selectedContent = content;
		selectContent(webWindowName, content);

		if (getClickMode(window) === 'single') onOpen(content, true);
	};
</script>

<div
	class="flex flex-row flex-wrap {webWindowName === 'root' ? 'justify-between' : ''} gap-5 w-full"
>
	{#if webWindowState && webWindowState?.contents?.length}
		{#each webWindowState?.contents as content, id}
			{#if content.type === 'folder'}
				<slot name="folder">
					<FolderComponent
						folder={content}
						size={webWindowState?.size}
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
						size={webWindowState?.size}
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
