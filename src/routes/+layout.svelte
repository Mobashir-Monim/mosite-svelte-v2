<script lang="ts">
	import '../app.css';
	import { setInitialClassState, setModeCurrent } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import ToolBar from '../components/ToolBarComponents/ToolBar.svelte';
	import Window from '../components/WindowComponents/Window.svelte';
	import type { WindowStateType } from '$lib/types';
	import { globalDirectorySystemStore } from '$lib/store';

	onMount(() => {
		setModeCurrent(false);
	});

	const toolBarIconSize: number = 35;
	let windows: WindowStateType[];
	globalDirectorySystemStore.subscribe((value) => {
		windows = value.filter((win) => win.name !== 'root' && !win.minimized);
	});
</script>

<svelte:head>
	{@html `<script>(${setInitialClassState.toString()})();</script>`}
	<title>Mobashir Monim</title>
</svelte:head>

<main>
	<slot />

	<ToolBar />

	{#each windows as window (window.name)}
		<Window windowState={window} />
	{/each}
</main>

<style lang="postcss">
	main {
		@apply relative h-screen w-screen;
	}
</style>
