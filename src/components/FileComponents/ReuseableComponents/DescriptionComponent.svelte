<script lang="ts">
	export let description: string | string[];
</script>

{#if typeof description === 'string'}
	<p>{description}</p>
{:else}
	{#each description as paragraph}
		<p>{paragraph}</p>
	{/each}
{/if}
