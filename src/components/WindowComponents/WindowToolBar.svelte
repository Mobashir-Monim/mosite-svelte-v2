<script lang="ts">
	import WindowToolBarButton from './WindowToolBarButton.svelte';

	export let windowName: string;
	export let onMouseDown: () => void;
	export let onMouseUp: () => void;
	export let onMouseMove: (event: MouseEvent) => void;
	const buttonDimension: number = 15;
</script>

<button
	on:mousedown={onMouseDown}
	class="cursor-move w-full h-[30px] bg-white/20 flex flex-row justify-between py-[2.5px] px-[10px]"
>
	<h3 class="text-[0.6rem] font-normal">{windowName}</h3>
	<div class="flex flex-row gap-[5px] my-auto">
		<WindowToolBarButton buttonType="full-screen" />
		<WindowToolBarButton buttonType="minimize" />
		<WindowToolBarButton buttonType="close" />
	</div>
</button>

<svelte:window on:mousemove={onMouseMove} on:mouseup={onMouseUp} />
