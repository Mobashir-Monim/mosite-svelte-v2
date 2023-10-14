<script lang="ts">
	import type { NavOptionType } from '$lib/types';
	import NavOptionContent from './NavOptionContent.svelte';

	export let option: NavOptionType;
	export let expanded: boolean = false;

	$: classes = `flex flex-row ${
		expanded ? 'gap-3' : 'gap-0'
	} text-white hover:text-primary-400 transit group justify-left ${option.classes ?? ''}`;
</script>

{#if option.url}
	<a href={option.url} class={classes}>
		<NavOptionContent {option} {expanded} />
	</a>
{:else if option.callback}
	<button type="button" on:click={option.callback} class={classes}>
		<NavOptionContent {option} {expanded} />
	</button>
{/if}
