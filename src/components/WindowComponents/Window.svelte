<script lang="ts">
	import { focusWindow, moveWindow } from '$lib/store/global-directory-system-store-control';
	import type { WindowStateType } from '$lib/types';
	import DirectorySystemComponent from '../DirectoryComponents/DirectorySystemComponent.svelte';
	import MediaQuery from '../MediaQuery.svelte';
	import WindowSidebar from './WindowSidebar.svelte';
	import WindowToolBar from './WindowToolBar.svelte';

	export let windowState: WindowStateType;

	const width: number = 700,
		height: number = 400,
		toolBarHeight: number = 63;

	let leftConst: number = windowState.left,
		topConst: number = windowState.top,
		screenWidth: number,
		screenHeight: number,
		moving: boolean = false;

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

			moveWindow(windowState.name, topConst, leftConst);
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
			<div />
		{:else}
			<div
				class="bg-neutral-800 absolute rounded-2xl border-[0.5px] border-neutral-500 select-none overflow-hidden drop-shadow-[5px_5px_10px_rgba(0,0,0,0.3)] will-change-transform cursor-default"
				style="width: {width}px; height: {height}px; left: {screenWidth / 2 -
					width / 2 +
					leftConst}px; top: {(screenHeight - 63) / 2 - height / 2 + topConst}px"
				on:click={() => focusWindow(windowState.name)}
				on:keypress={() => focusWindow(windowState.name)}
				role="button"
				tabindex="0"
			>
				<WindowToolBar windowName={windowState.name} {onMouseUp} {onMouseDown} {onMouseMove} />
				<div class="flex flex-row h-[calc(100%-30px)]">
					<div class="h-full bg-white/10 w-full p-2.5 overflow-y-auto">
						<DirectorySystemComponent windowName={windowState.name} />
					</div>
					<WindowSidebar />
				</div>
			</div>
		{/if}
	</MediaQuery>
{/if}
<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />
