<script lang="ts">
	import AppsIcon from '../../assets/icons/AppsIcon.svelte';
	import OpenDocumentIcon from '../../assets/icons/OpenDocumentIcon.svelte';
	import OpenFolderIcon from '../../assets/icons/OpenFolderIcon.svelte';
	import SettingsIcon from '../../assets/icons/SettingsIcon.svelte';
	import ToolBarContent from './ToolBarContent.svelte';
	import ToolBarContentDivider from './ToolBarContentDivider.svelte';

	const toolBarIconSize: number = 35;
</script>

<div class="absolute bottom-0 w-full flex flex-row justify-center">
	<div class="flex flex-row gap-2 py-2 px-3 bg-gray-400/30 dark:bg-gray-500/30 rounded-2xl">
		<ToolBarContent icon={AppsIcon} props={{ size: toolBarIconSize }} />
		<ToolBarContent icon={SettingsIcon} props={{ size: toolBarIconSize }} />
		<ToolBarContentDivider {toolBarIconSize} />
		<ToolBarContent icon={OpenDocumentIcon} props={{ size: toolBarIconSize }} />
		<ToolBarContent icon={OpenFolderIcon} props={{ size: toolBarIconSize }} />
	</div>
</div>
