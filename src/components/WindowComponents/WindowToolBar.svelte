<script lang="ts">
	import { closeWindow } from '$lib/store/global-directory-system-store-control';
	import ChevronIcon from '../../assets/icons/ChevronIcon.svelte';
	import WindowToolBarButton from './WindowToolBarButton.svelte';

	export let windowName: string;
	export let onMouseDown: () => void;
	export let onMouseUp: () => void;
	export let onMouseMove: (event: MouseEvent) => void;

	const close = () => {
		closeWindow(windowName);
	};
</script>

<div
	on:mousedown={onMouseDown}
	role="button"
	class="cursor-move w-full h-[30px] bg-surface-500 flex flex-row justify-between py-[2.5px] px-[10px]"
	tabindex="0"
>
	<div class="flex flex-row gap-2">
		<div class="flex flex-row gap-0">
			<ChevronIcon
				size={20}
				classes="my-auto fill-gray-600 dark:fill-gray-200 cursor-pointer"
				direction="left"
			/>
			<ChevronIcon
				size={20}
				classes="my-auto fill-gray-600 dark:fill-gray-200 cursor-pointer"
				direction="right"
			/>
		</div>
		<h3 class="text-[0.6rem] font-normal">{windowName}</h3>
	</div>
	<div class="flex flex-row gap-[5px] my-auto">
		<WindowToolBarButton buttonType="full-screen" />
		<WindowToolBarButton buttonType="minimize" />
		<WindowToolBarButton buttonType="close" onClick={close} />
	</div>
</div>

<svelte:window on:mousemove={onMouseMove} on:mouseup={onMouseUp} />
