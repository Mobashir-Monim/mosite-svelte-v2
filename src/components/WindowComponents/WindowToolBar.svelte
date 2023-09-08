<script lang="ts">
	import {
		closeWindow,
		goToOrigin,
		goToTail,
		minimizeWindow
	} from '$lib/store/global-directory-system-store-control';
	import type { WindowStateType } from '$lib/types';
	import ChevronIcon from '../../assets/icons/ChevronIcon.svelte';
	import WindowToolBarButton from './WindowToolBarButton.svelte';

	export let windowName: string;
	export let isFolder: boolean;
	export let origin: WindowStateType | undefined;
	export let tail: WindowStateType | undefined;
	export let onMouseDown: () => void;
	export let onMouseUp: () => void;
	export let onMouseMove: (event: MouseEvent) => void;

	const close = () => {
		closeWindow(windowName);
	};

	const minimize = () => {
		minimizeWindow(windowName);
	};

	const moveUp = () => {
		if (origin) {
			goToOrigin(windowName);
		}
	};

	const moveDown = () => {
		if (tail) {
			goToTail(windowName);
		}
	};
</script>

<div
	on:mousedown={onMouseDown}
	role="button"
	class="cursor-move w-full h-[30px] bg-surface-500 flex flex-row justify-between py-[2.5px] px-[10px]"
	tabindex="0"
>
	<div class="flex flex-row gap-2">
		{#if isFolder}
			<div class="flex flex-row gap-0">
				<button class="my-auto inline-block text-xs" on:click={moveUp}>
					<ChevronIcon
						size={20}
						classes={origin
							? 'fill-gray-600 dark:fill-gray-200 cursor-pointer'
							: 'fill-gray-600/50 dark:fill-gray-200/50 cursor-not-allowed'}
						direction="left"
					/>
				</button>
				<button class="my-auto inline-block text-xs" on:click={moveDown}>
					<ChevronIcon
						size={20}
						classes="{tail
							? 'fill-gray-600 dark:fill-gray-200 cursor-pointer'
							: 'fill-red-600/50 dark:fill-gray-200/50 cursor-not-allowed'} dark:fill-gray-200"
						direction="right"
					/>
				</button>
			</div>
		{/if}
		<h3 class="text-[0.6rem] font-normal my-auto">{windowName}</h3>
	</div>
	<div class="flex flex-row gap-[5px] my-auto">
		<WindowToolBarButton buttonType="full-screen" />
		<WindowToolBarButton buttonType="minimize" onClick={minimize} />
		<WindowToolBarButton buttonType="close" onClick={close} />
	</div>
</div>

<svelte:window on:mousemove={onMouseMove} on:mouseup={onMouseUp} />
