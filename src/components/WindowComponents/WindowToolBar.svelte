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

	export let webWindowName: string;
	export let isFolder: boolean;
	export let origin: WindowStateType | undefined;
	export let tail: WindowStateType | undefined;
	export let onMouseDown: () => void;
	export let onMouseUp: () => void;
	export let onMouseMove: (event: MouseEvent) => void;

	const close = () => {
		closeWindow(webWindowName);
	};

	const minimize = () => {
		minimizeWindow(webWindowName);
	};

	const moveUp = () => {
		if (origin) {
			goToOrigin(webWindowName);
		}
	};

	const moveDown = () => {
		if (tail) {
			goToTail(webWindowName);
		}
	};
</script>

<div
	on:mousedown={onMouseDown}
	role="button"
	class="cursor-move w-full h-[50px] sm:h-[30px] border-b-[0.5px] border-neutral-500 bg-surface-400/70 dark:bg-surface-500 flex flex-row justify-between py-[2.5px] px-[10px]"
	tabindex="0"
>
	<div class="flex flex-row gap-2">
		{#if isFolder}
			<div class="flex flex-row gap-0">
				<button class="my-auto inline-block text-xs" on:click={moveUp}>
					<ChevronIcon
						size={20}
						classes={origin
							? 'fill-gray-700 dark:fill-gray-200 cursor-pointer'
							: 'fill-gray-600/50 dark:fill-gray-200/50 cursor-not-allowed'}
						direction="left"
					/>
				</button>
				<button class="my-auto inline-block text-xs" on:click={moveDown}>
					<ChevronIcon
						size={20}
						classes="{tail
							? 'fill-gray-700 dark:fill-gray-200 cursor-pointer'
							: 'fill-gray-600/50 dark:fill-gray-200/50 cursor-not-allowed'} dark:fill-gray-200"
						direction="right"
					/>
				</button>
			</div>
		{/if}
		<h3 class="text-[0.7rem] font-semibold my-auto max-w-[250px] line-clamp-1">{webWindowName}</h3>
	</div>
	<div class="flex flex-row gap-[5px] my-auto">
		<WindowToolBarButton buttonType="minimize" onClick={minimize} />
		<WindowToolBarButton buttonType="close" onClick={close} />
	</div>
</div>

<svelte:window on:mousemove={onMouseMove} on:mouseup={onMouseUp} />
