<script lang="ts">
	export let prompt: string;
	export let component: ConstructorOfATypedSvelteComponent;
</script>

<div
	class="flex flex-col md:flex-row w-full md:justify-between border-[0.5px] p-3 rounded-2xl border-surface-500 dark:border-white/70 bg-surface-200 dark:bg-white/10"
>
	<div class="md:w-[40%] my-auto text-[0.7rem] mx-auto md:ml-0 md:mr-auto text-left">
		{prompt}
	</div>
	<div class="mx-auto md:ml-auto md:mr-0">
		<svelte:component this={component} />
	</div>
</div>
