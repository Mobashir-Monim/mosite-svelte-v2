<script lang="ts">
	import '../app.css';
	import { setInitialClassState, setModeCurrent } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import ToolBar from '../components/ToolBarComponents/ToolBar.svelte';
	import Window from '../components/WindowComponents/Window.svelte';
	import type { WindowStateType } from '$lib/types';
	import { globalDirectorySystemStore } from '$lib/store';
	import LoadingScreen from '../components/LoadingScreenComponents/LoadingScreen.svelte';
	import InitialClickSettings from '../components/InitialClickSettings.svelte';
	import { isMobileOrTabBrowser } from '$lib/utils/device-utils';
	import { getClickMode, setClickMode } from '$lib/utils/click-utils';
	import { page } from '$app/stores';

	let webWindows: WindowStateType[];
	let showLoadingScreen: boolean;
	let showInitialClickSettings: boolean;

	globalDirectorySystemStore.subscribe((value) => {
		webWindows = value.filter((win) => win.name !== 'root' && !win.minimized);
	});

	const removeLoadingScreen: () => void = () => {
		showLoadingScreen = false;
		window.sessionStorage.setItem('loading-screen-shown', 'true');
	};

	const removeClickSettings: () => void = () => {
		showInitialClickSettings = false;
	};

	onMount(() => {
		setModeCurrent(false);
		showLoadingScreen = window.sessionStorage.getItem('loading-screen-shown') === null;

		if (isMobileOrTabBrowser(window)) {
			setClickMode(window, 'single');
		} else {
			showInitialClickSettings = getClickMode(window) === null;
		}
	});
</script>

<svelte:head>
	{@html `<script>(${setInitialClassState.toString()})();</script>`}
	<title>Mobashir Monim</title>
</svelte:head>

<main>
	<slot />

	{#if !$page.error}
		<ToolBar />

		{#each webWindows as webWindow (webWindow.name)}
			<Window webWindowState={webWindow} />
		{/each}

		{#if showInitialClickSettings}
			<InitialClickSettings {removeClickSettings} />
		{/if}

		{#if showLoadingScreen}
			<LoadingScreen {removeLoadingScreen} />
		{/if}
	{/if}
</main>

<style lang="postcss">
	main {
		@apply relative h-screen w-screen;
	}
</style>
