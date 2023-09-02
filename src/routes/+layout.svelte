<script lang="ts">
	import '../app.css';
	import SettingsIcon from '../assets/icons/SettingsIcon.svelte';
	import OpenDocumentIcon from '../assets/icons/OpenDocumentIcon.svelte';
	import OpenFolderIcon from '../assets/icons/OpenFolderIcon.svelte';
	import { autoModeWatcher, setInitialClassState, setModeCurrent } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import AppsIcon from '../assets/icons/AppsIcon.svelte';
	import ToolBar from '../components/ToolBarComponents/ToolBar.svelte';

	onMount(() => {
		setModeCurrent(false);
	});

	const toolBarIconSize: number = 35;
</script>

<svelte:head>
	{@html `<script>(${setInitialClassState.toString()})();</script>`}
	<title>Mobashir Monim</title>
</svelte:head>

<main>
	<slot />

	<ToolBar />
</main>

<style lang="postcss">
	main {
		@apply relative h-screen w-screen;
	}
</style>
