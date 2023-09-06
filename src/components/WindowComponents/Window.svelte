<script lang="ts">
	import MediaQuery from '../MediaQuery.svelte';
	import WindowSidebar from './WindowSidebar.svelte';
	import WindowToolBar from './WindowToolBar.svelte';

	export let name: string;

	const width: number = 700,
		height: number = 400,
		toolBarHeight: number = 63;

	let leftConst: number = 0,
		topConst: number = 0,
		screenWidth: number,
		screenHeight: number,
		moving: boolean = false;

	$: top = (screenHeight - 63) / 2 - height / 2 + topConst;
	$: left = screenWidth / 2 - width / 2 + leftConst;

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
				class="bg-neutral-800 absolute rounded-2xl border-[0.5px] border-neutral-500 select-none overflow-hidden drop-shadow-[5px_5px_10px_rgba(0,0,0,0.3)]"
				style="width: {width}px; height: {height}px; left: {left}px; top: {top}px"
			>
				<WindowToolBar windowName={name} {onMouseUp} {onMouseDown} {onMouseMove} />
				<div class="flex flex-row h-[calc(100%-30px)]">
					<div class="h-full bg-white/10 w-full p-2.5">henlo~ <br /> :3</div>
					<WindowSidebar />
				</div>
			</div>
		{/if}
	</MediaQuery>
{/if}
<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />
