<script lang="ts">
	import type { UIFileType } from '$lib/types';
	import DocumentIcon from '../../assets/icons/DocumentIcon.svelte';
	import DirectoryContentComponent from './DirectoryContentComponent.svelte';

	export let file: UIFileType;
	export let size: number = 100;
	export let containerClasses: string = '';
	export let isSelected: boolean = false;
	export let onSelect: (name: string) => void;
	export let onOpen: (name: string) => void;
	export let tabindex: number;
</script>

<DirectoryContentComponent
	{containerClasses}
	{size}
	name={file.name}
	{isSelected}
	{onSelect}
	{onOpen}
	{tabindex}
>
	<DocumentIcon {size} />
</DirectoryContentComponent>
