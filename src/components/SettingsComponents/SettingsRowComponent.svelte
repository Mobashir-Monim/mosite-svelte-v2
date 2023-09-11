<script lang="ts">
	export let prompt: string;
	export let component: ConstructorOfATypedSvelteComponent;
</script>

<div
	class="flex flex-col md:flex-row w-full md:justify-between border-[0.5px] p-3 rounded-2xl border-surface-500 dark:border-white/70 bg-surface-200 dark:bg-white/10"
>
	<div class="md:w-[40%] my-auto text-[0.7rem] mx-auto">
		{prompt}
	</div>
	<div class="mx-auto">
		<svelte:component this={component} />
	</div>
</div>
