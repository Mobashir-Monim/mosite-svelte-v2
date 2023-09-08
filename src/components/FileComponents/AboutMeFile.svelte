<script lang="ts">
	import type { AboutMeType } from '$lib/data/about-me';
	import LocationIcon from '../../assets/icons/LocationIcon.svelte';
	import Logo from '../../assets/icons/Logo.svelte';
	import WorkIcon from '../../assets/icons/WorkIcon.svelte';
	import DescriptionComponent from './ReuseableComponents/DescriptionComponent.svelte';
	import SkillTag from './ReuseableComponents/SkillTag.svelte';
	import Social from './ReuseableComponents/Social.svelte';

	export let doc: AboutMeType;
</script>

<Logo
	size={250}
	svgBoxClasses="mx-auto fill-none"
	containerShape="none"
	solidShapeClasses="stroke-gray-600 fill-gray-600 dark:stroke-gray-200 dark:fill-gray-200 stroke-2"
/>
<h1 class="text-[1.5rem] mx-auto">{doc.person.first} {doc.person.last}</h1>
<div class="flex flex-col gap-1">
	<div class="flex flex-row gap-3 mx-auto">
		<LocationIcon circle={true} size={25} />
		<span class="my-auto">{doc.location.city}, {doc.location.country}</span>
	</div>
	<div class="flex flex-row gap-3 mx-auto">
		<WorkIcon size={25} />
		<span class="my-auto">{doc.job_title}</span>
	</div>
</div>
<div class="flex flex-row flex-wrap justify-center gap-2 text-justify text-[0.7rem] leading-4">
	{#each doc.socials as social}
		<Social {social} />
	{/each}
</div>
<div class="flex flex-col gap-3 text-justify text-[0.75rem] leading-4">
	<h3 class="border-b text-[1rem]">Description</h3>
	<DescriptionComponent description={doc.description} />
</div>
<div class="flex flex-row flex-wrap justify-center gap-2 text-justify text-[0.7rem] leading-4">
	<h3 class="border-b text-[1rem] w-full">Skills</h3>
	{#each doc.skills as skill}
		<SkillTag {skill} />
	{/each}
</div>
