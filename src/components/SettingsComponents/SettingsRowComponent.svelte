<script lang="ts">
	export let prompt: string;
	export let component: ConstructorOfATypedSvelteComponent;
</script>

<div
	class="flex flex-row w-full justify-between border-[0.5px] p-3 rounded-2xl border-surface-500 dark:border-white/70 bg-surface-200 dark:bg-white/10"
>
	<div class="w-[40%] my-auto text-[0.7rem]">
		{prompt}
	</div>
	<svelte:component this={component} />
</div>
