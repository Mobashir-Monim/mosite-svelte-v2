<script lang="ts">
	import type { ProjectType } from '$lib/data/projects';
	import LinkIcon from '../../assets/icons/LinkIcon.svelte';
	import DescriptionComponent from './ReuseableComponents/DescriptionComponent.svelte';
	import SkillTag from './ReuseableComponents/SkillTag.svelte';

	export let doc: ProjectType;
</script>

<div class="flex flex-col gap-2">
	<h1 class="text-[1.5rem] border-b w-full text-center">{doc.name}</h1>
	{#if doc.url}
		<a href={doc.url} target="_blank" class="flex flex-row gap-3 mx-auto">
			<LinkIcon size={25} />
			<span class="my-auto max-w-[200px] line-clamp-1">Link</span>
		</a>
	{/if}
	<div class="flex flex-row gap-3 mx-auto">
		<span
			class="text-[0.65rem] rounded-full cursor-default px-3 py-1.5 bg-gradient-to-tr transition-all duration-200 ease-linear font-mono from-teal-400/80 to-violet-500/80 hover:drop-shadow-[0px_0px_10px_rgba(5,150,105,1)]"
		>
			{doc.project_type[0].toUpperCase()}{doc.project_type.slice(1)}
		</span>
		<span
			class="text-[0.65rem] rounded-full cursor-default px-3 py-1.5 bg-gradient-to-tr transition-all duration-200 ease-linear font-mono from-white/50 to-stone-600/80 hover:drop-shadow-[0px_0px_10px_rgba(120,113,108,1)]"
		>
			{doc.source[0].toUpperCase()}{doc.source.slice(1)} Source
		</span>
	</div>
</div>

{#if doc.company}
	<div class="flex flex-row gap-3 text-justify text-[0.75rem] leading-4 w-full">
		<img src={doc.company.logo} alt={doc.company.name} class="w-[15%] rounded-xl" />
		<div class="flex flex-col justify-center w-full">
			<h1 class="text-[0.9rem] border-b">{doc.company.name}</h1>
			<span>{doc.company.industry}</span>
		</div>
	</div>
{/if}

<div class="flex flex-col gap-3 text-justify text-[0.75rem] leading-4">
	<h3 class="border-b text-[1rem]">Description</h3>
	<DescriptionComponent description={doc.description} />
</div>

{#if doc.features.length}
	<div class="flex flex-col gap-3 text-justify text-[0.75rem] leading-4">
		<h3 class="border-b text-[1rem]">Features</h3>
		<ul class="ml-3 list-disc">
			{#each doc.features as feature}
				<li class="mb-2">{feature}</li>
			{/each}
		</ul>
	</div>
{/if}

{#if doc.skills?.length}
	<div class="flex flex-row flex-wrap justify-center gap-2 text-justify text-[0.7rem] leading-4">
		<h3 class="border-b text-[1rem] w-full">Skills Used</h3>
		{#each doc.skills as skill}
			<SkillTag {skill} />
		{/each}
	</div>
{/if}
