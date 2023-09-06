<script lang="ts">
	import '../app.css';
	import { setInitialClassState, setModeCurrent } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import ToolBar from '../components/ToolBarComponents/ToolBar.svelte';
	import Window from '../components/WindowComponents/Window.svelte';

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
	<Window name="Test" />
</main>

<style lang="postcss">
	main {
		@apply relative h-screen w-screen;
	}
</style>
