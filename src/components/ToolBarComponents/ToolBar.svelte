<script lang="ts">
	import { globalDirectorySystemStore } from '$lib/store';
	import { toggleAppMenuVisibility } from '$lib/store/app-menu-visibility-control';
	import { openSettings, unminimizeAll } from '$lib/store/global-directory-system-store-control';
	import type { WindowStateType } from '$lib/types';
	import AppsIcon from '../../assets/icons/AppsIcon.svelte';
	import OpenDocumentIcon from '../../assets/icons/OpenDocumentIcon.svelte';
	import OpenFolderIcon from '../../assets/icons/OpenFolderIcon.svelte';
	import SettingsIcon from '../../assets/icons/SettingsIcon.svelte';
	import ToolBarContent from './ToolBarContent.svelte';
	import ToolBarContentDivider from './ToolBarContentDivider.svelte';

	const toolBarIconSize: number = 35;
	let webWindows: WindowStateType[];
	globalDirectorySystemStore.subscribe((value) => {
		webWindows = value;
	});

	$: hasOpenFile = webWindows.filter((w) => w.type === 'file').length > 0;
	$: hasOpenFolder =
		webWindows.filter((w) => w.type === 'folder' && w.name !== 'root' && w.name !== 'settings')
			.length > 0;

	$: openFileCount = webWindows.filter((w) => w.type === 'file').length;
	$: openFolderCount = webWindows.filter(
		(w) => w.type === 'folder' && w.name !== 'root' && w.name !== 'settings'
	).length;
</script>

<div class="absolute bottom-0 w-full flex flex-row justify-center">
	<div class="flex flex-row py-2 px-2 bg-gray-400/30 dark:bg-gray-500/30 rounded-2xl transit">
		<ToolBarContent
			icon={AppsIcon}
			props={{ size: toolBarIconSize }}
			showToolBarContent={true}
			onClick={toggleAppMenuVisibility}
		/>
		<ToolBarContent
			icon={SettingsIcon}
			props={{ size: toolBarIconSize }}
			showToolBarContent={true}
			onClick={openSettings}
		/>
		<ToolBarContentDivider {toolBarIconSize} showToolBarDivider={hasOpenFile || hasOpenFolder} />
		<ToolBarContent
			icon={OpenDocumentIcon}
			props={{ size: toolBarIconSize }}
			openCount={openFileCount}
			showToolBarContent={hasOpenFile}
			onClick={() => unminimizeAll('file')}
		/>
		<ToolBarContent
			icon={OpenFolderIcon}
			props={{ size: toolBarIconSize }}
			openCount={openFolderCount}
			showToolBarContent={hasOpenFolder}
			onClick={() => unminimizeAll('folder')}
		/>
	</div>
</div>
