<script lang="ts">
	import type { UIFolderType } from '$lib/types';
	import FolderIcon from '../../assets/icons/FolderIcon.svelte';
	import DirectoryContentComponent from './DirectoryContentComponent.svelte';

	export let folder: UIFolderType;
	export let containerClasses: string = '';
	export let size: number = 100;
	export let isSelected: boolean = false;
	export let onSelect: (name: string) => void;
	export let onOpen: (name: string) => void;
</script>

<DirectoryContentComponent
	{containerClasses}
	{size}
	name={folder.name}
	{isSelected}
	{onSelect}
	{onOpen}
>
	<FolderIcon {size} />
</DirectoryContentComponent>
