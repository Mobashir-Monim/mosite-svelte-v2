<script lang="ts">
	import { focusWindow, moveWindow } from '$lib/store/global-directory-system-store-control';
	import type { WindowStateType } from '$lib/types';
	import { onMount } from 'svelte';
	import DirectorySystemComponent from '../DirectoryComponents/DirectorySystemComponent.svelte';
	import MediaQuery from '../MediaQuery.svelte';
	import WindowSidebar from './WindowSidebar.svelte';
	import WindowToolBar from './WindowToolBar.svelte';
	import FileSystemComponent from '../FileComponents/FileSystemComponent.svelte';
	import Settings from '../SettingsComponents/Settings.svelte';

	export let webWindowState: WindowStateType;

	let leftConst: number = webWindowState.left,
		topConst: number = webWindowState.top,
		screenWidth: number = 700,
		screenHeight: number = 400,
		moving: boolean = false;

	const toolBarHeight: number = 63,
		webWindowClasses: string =
			'backdrop-blur-[8px] border-neutral-500 select-none overflow-hidden drop-shadow-[5px_5px_10px_rgba(0,0,0,0.3)] will-change-transform cursor-default',
		webWindowBgOpacity: string =
			webWindowState.type === 'folder' ? 'bg-opacity-70' : 'bg-opacity-90';
	let width: number = 700,
		height: number = 400;

	onMount(() => {
		width = Math.min(webWindowState.type === 'settings' ? 600 : 700, screenWidth);
		height = Math.min(
			webWindowState.type === 'folder' || webWindowState.type === 'settings' ? 400 : 800,
			screenHeight - toolBarHeight
		);
	});

	const onMouseMove: (event: MouseEvent) => void = (event: MouseEvent) => {
		if (moving) {
			topConst += event.movementY;
			leftConst += event.movementX;

			if (
				topConst >
				screenHeight - (toolBarHeight + 5) - (screenHeight - toolBarHeight) / 2 - height / 2
			) {
				topConst =
					screenHeight - (toolBarHeight + 5) - (screenHeight - toolBarHeight) / 2 - height / 2;
			} else if (topConst < height / 2 - (screenHeight - toolBarHeight) / 2) {
				topConst = height / 2 - (screenHeight - toolBarHeight) / 2;
			}

			if (leftConst > screenWidth / 2 - width / 2) {
				leftConst = screenWidth / 2 - width / 2;
			} else if (leftConst < -(screenWidth / 2) + width / 2) {
				leftConst = -(screenWidth / 2) + width / 2;
			}

			moveWindow(webWindowState.name, topConst, leftConst);
		}
	};

	const onMouseUp: () => void = () => {
		moving = false;
	};

	const onMouseDown: () => void = () => {
		moving = true;
	};
</script>

{#if screenHeight}
	<MediaQuery query="(max-width: 699px)" let:matches>
		{#if matches}
			<div
				class="bg-surface-300 dark:bg-surface-500 absolute border-[0.5px] {webWindowBgOpacity} {webWindowClasses} top-0 left-0 w-[calc(100vw-1px)] h-[calc(100vh-65px)]"
			>
				<WindowToolBar
					webWindowName={webWindowState.name}
					isFolder={webWindowState.type === 'folder'}
					origin={webWindowState.origin}
					tail={webWindowState.tail}
					{onMouseUp}
					{onMouseDown}
					{onMouseMove}
				/>
				<div class="flex flex-row h-[calc(100%-30px)]">
					{#if webWindowState.type === 'folder'}
						<div class="h-full bg-white/10 w-full p-2.5 overflow-y-auto">
							<DirectorySystemComponent webWindowName={webWindowState.name} />
						</div>
					{:else if webWindowState.type === 'settings'}
						<Settings />
					{:else}
						<div class="h-full bg-white/10 w-full p-5 overflow-y-auto">
							{#if webWindowState.doc}
								<FileSystemComponent doc={webWindowState.doc} />
							{/if}
						</div>
					{/if}
				</div>
			</div>
		{:else}
			<div
				class="bg-surface-300 dark:bg-surface-500 absolute rounded-2xl border-[0.5px] {webWindowBgOpacity} {webWindowClasses}"
				style="width: {width}px; height: {height}px; left: {screenWidth / 2 -
					width / 2 +
					leftConst}px; top: {(screenHeight - 63) / 2 - height / 2 + topConst}px"
				on:click={() => focusWindow(webWindowState.name)}
				on:keypress={() => focusWindow(webWindowState.name)}
				role="button"
				tabindex="0"
			>
				<WindowToolBar
					webWindowName={webWindowState.name}
					isFolder={webWindowState.type === 'folder'}
					origin={webWindowState.origin}
					tail={webWindowState.tail}
					{onMouseUp}
					{onMouseDown}
					{onMouseMove}
				/>
				<div class="flex flex-row h-[calc(100%-30px)]">
					<div class="h-full bg-white/10 w-full p-2.5 overflow-y-auto">
						{#if webWindowState.type === 'folder'}
							<DirectorySystemComponent webWindowName={webWindowState.name} />
						{:else if webWindowState.type === 'settings'}
							<Settings />
						{:else if webWindowState.doc}
							<FileSystemComponent doc={webWindowState.doc} />
						{/if}
					</div>

					{#if webWindowState.type === 'folder'}
						<WindowSidebar webWindowName={webWindowState.name} />
					{/if}
				</div>
			</div>
		{/if}
	</MediaQuery>
{/if}
<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />
