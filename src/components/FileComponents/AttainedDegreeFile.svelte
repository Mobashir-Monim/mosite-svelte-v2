<script lang="ts">
	import type { AttainedDegreeType } from '$lib/data/attainments';
	import CalendarIcon from '../../assets/icons/CalendarIcon.svelte';
	import LocationIcon from '../../assets/icons/LocationIcon.svelte';
	import OrganizationIcon from '../../assets/icons/OrganizationIcon.svelte';
	import DescriptionComponent from './ReuseableComponents/DescriptionComponent.svelte';

	export let doc: AttainedDegreeType;
</script>

<div class="flex flex-col gap-2">
	<h1 class="text-[1.5rem] border-b w-full text-center">{doc.name}</h1>
	<div class="flex flex-row gap-3 mx-auto">
		<CalendarIcon size={25} />
		<span class="my-auto">
			{doc.start.month}, {doc.start.year} -
			{doc.end ? `${doc.end.month}, ${doc.end.year}` : 'Present'}
		</span>
	</div>
	<div class="flex flex-row gap-3 mx-auto">
		<OrganizationIcon size={25} />
		<span class="my-auto">{doc.entity}</span>
	</div>
	<div class="flex flex-row gap-3 mx-auto">
		<LocationIcon circle={true} size={25} />
		<span class="my-auto">{doc.location.city}, {doc.location.country}</span>
	</div>
</div>

<div class="flex flex-col gap-3 text-justify text-[0.75rem] leading-4">
	<h3 class="border-b text-[1rem]">Description</h3>
	<DescriptionComponent description={doc.description} />
</div>
