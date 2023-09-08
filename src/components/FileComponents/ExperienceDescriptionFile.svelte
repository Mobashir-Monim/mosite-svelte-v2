<script lang="ts">
	import { experiences } from '$lib/data/directory-contents';
	import type { ExperienceType } from '$lib/data/experiences';
	import type Experience from '$lib/models/Experience';
	import type { UIFileType } from '$lib/types';
	import DescriptionComponent from './ReuseableComponents/DescriptionComponent.svelte';

	export let doc: UIFileType;
</script>

<img src={doc.doc.company.logo} class="w-[20%] rounded-full mx-auto" alt={doc.doc.company.name} />

<div class="flex flex-col my-auto w-full">
	<h1 class="text-[1.5rem] border-b text-center">{doc.doc.company.name}</h1>
	<h3 class="text-[1rem] text-center">{doc.doc.position}</h3>
	<div class="mx-auto text-[0.7rem]">
		{#if doc.doc.end}
			{doc.doc.start.month}, {doc.doc.start.year} - {doc.doc.end.month}, {doc.doc.end.year}
		{:else}
			{doc.doc.start.month}, {doc.doc.start.year} - Present
		{/if}
	</div>
</div>

<div class="flex flex-col gap-3 text-justify text-[0.75rem] leading-4">
    <h3 class="border-b text-[1rem]">Description</h3>
	<DescriptionComponent description={doc.doc.description} />
</div>

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
