<script lang="ts">
	import type { UIFileType } from '$lib/types';
	import DescriptionComponent from './ReuseableComponents/DescriptionComponent.svelte';

	export let doc: UIFileType;
</script>

<div class="flex flex-col md:flex-row gap-5">
	<div class="mx-auto md:mx-0 max-w-[120px]">
		<img src={doc.doc.company.logo} class="w-full rounded-2xl mx-auto" alt={doc.doc.company.name} />
	</div>
	<div class="flex flex-col w-full my-auto">
		<h1 class="text-[1.5rem] border-b text-center md:text-left">{doc.doc.company.name}</h1>
		<h3 class="text-[1rem] text-center md:text-left">{doc.doc.position}</h3>
		<div class="text-[0.7rem] text-center md:text-left">
			{#if doc.doc.end}
				{doc.doc.start.month}, {doc.doc.start.year} - {doc.doc.end.month}, {doc.doc.end.year}
			{:else}
				{doc.doc.start.month}, {doc.doc.start.year} - Present
			{/if}
		</div>
	</div>
</div>

<div class="flex flex-col gap-3 text-justify text-[0.75rem] leading-4">
	<h3 class="border-b text-[1rem]">Description</h3>
	<DescriptionComponent description={doc.doc.description} />
</div>

{#if doc.doc.works.length}
	<div class="flex flex-row flex-wrap justify-center gap-2 text-justify text-[0.7rem] leading-4">
		<h3 class="border-b text-[1rem] w-full">Works</h3>
		{#each doc.doc.works as work}
			<span
				class="text-[0.65rem] rounded-full cursor-default px-3 py-1.5 bg-gradient-to-tr transition-all duration-200 ease-linear font-mono from-white/50 to-stone-600/80 hover:drop-shadow-[0px_0px_10px_rgba(120,113,108,1)]"
			>
				{work.name}
			</span>
		{/each}
	</div>
{/if}
