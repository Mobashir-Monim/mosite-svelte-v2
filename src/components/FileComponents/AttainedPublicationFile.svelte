<script lang="ts">
	import type { AttainedPublicationType } from '$lib/data/attainments';
	import CalendarIcon from '../../assets/icons/CalendarIcon.svelte';
	import DocumentIcon from '../../assets/icons/DocumentIcon.svelte';
	import OrganizationIcon from '../../assets/icons/OrganizationIcon.svelte';
	import DescriptionComponent from './ReuseableComponents/DescriptionComponent.svelte';

	export let doc: AttainedPublicationType;
</script>

<div class="flex flex-col gap-2">
	<h1 class="text-[1.5rem] border-b w-full text-center">{doc.name}</h1>
	<div class="flex flex-row gap-3 mx-auto">
		<CalendarIcon size={25} />
		<span class="my-auto">{doc.year}</span>
	</div>
	<div class="flex flex-row gap-3 mx-auto">
		<OrganizationIcon size={25} />
		<span class="my-auto">{doc.entity}</span>
	</div>
	<a href={doc.doi} target="_blank" class="flex flex-row gap-3 mx-auto">
		<DocumentIcon size={25} />
		<span class="my-auto">{doc.doi}</span>
	</a>
</div>

<div class="flex flex-col gap-3 text-justify text-[0.75rem] leading-4">
	<h3 class="border-b text-[1rem]">Abstract</h3>
	<DescriptionComponent description={doc.description} />
</div>

<div class="flex flex-row flex-wrap justify-center gap-2 text-justify text-[0.7rem] leading-4">
	<h3 class="border-b text-[1rem] w-full">Authors</h3>
	{#each doc.authors as author}
		<span
			class="text-[0.65rem] rounded-full cursor-default px-3 py-1.5 bg-gradient-to-tr transition-all duration-200 ease-linear font-mono from-amber-400/80 to-pink-500/80 hover:drop-shadow-[0px_0px_10px_rgba(239,68,68,1)]"
		>
			{author.first[0]}. {author.last}
		</span>
	{/each}
</div>
