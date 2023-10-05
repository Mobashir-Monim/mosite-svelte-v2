<script lang="ts">
	import type { CompanyType } from '$lib/data/companies';
	import IndustryIcon from '../../assets/icons/IndustryIcon.svelte';
	import LinkIcon from '../../assets/icons/LinkIcon.svelte';
	import LocationIcon from '../../assets/icons/LocationIcon.svelte';
	import DescriptionComponent from './ReuseableComponents/DescriptionComponent.svelte';

	export let doc: CompanyType;
</script>

<div class="flex flex-col gap-5">
	<h1 class="text-[1.5rem] border-b w-full text-center hidden md:block">
		{doc.name.replace('About ', '')}
	</h1>
	<div class="flex flex-col md:flex-row gap-10">
		<div class="md:w-[50%] max-w-[120px] mx-auto md:mx-0 my-auto">
			<img src={doc.logo} class="mx-auto rounded-2xl" alt={doc.name.replace('About ', '')} />
		</div>

		<div class="flex flex-col gap-3 w-full my-auto">
			<h1 class="text-[1.5rem] border-b w-full md:hidden text-center">
				{doc.name.replace('About ', '')}
			</h1>
			<div class="flex flex-row gap-3">
				<IndustryIcon size={25} />
				<span class="my-auto">{doc.industry}</span>
			</div>
			<div class="flex flex-row gap-3">
				<LocationIcon circle={true} size={25} />
				{#if doc.location.state}
					<span class="my-auto"
						>{doc.location.city}, {doc.location.state}, {doc.location.country}</span
					>
				{:else}
					<span class="my-auto">{doc.location.city}, {doc.location.country}</span>
				{/if}
			</div>
			<a href="https://{doc.website}" target="_blank" class="flex flex-row gap-3">
				<LinkIcon size={25} />
				<span class="my-auto max-w-[200px] line-clamp-1">Website</span>
			</a>
		</div>
	</div>
</div>
<div class="flex flex-col gap-3 text-justify text-[0.75rem] leading-4">
	<h3 class="border-b text-[1rem]">Description</h3>
	<DescriptionComponent description={doc.description} />
</div>
