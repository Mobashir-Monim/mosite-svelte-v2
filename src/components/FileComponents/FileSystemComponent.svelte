<script lang="ts">
	import type { UIFileType } from '$lib/types';
	import AboutMeFile from './AboutMeFile.svelte';
	import AttainedCertificationFile from './AttainedCertificationFile.svelte';
	import AttainedDegreeFile from './AttainedDegreeFile.svelte';
	import AttainedPublicationFile from './AttainedPublicationFile.svelte';
	import CompanyDescriptionFile from './CompanyDescriptionFile.svelte';
	import ExperienceDescriptionFile from './ExperienceDescriptionFile.svelte';
	import ProjectFile from './ProjectFile.svelte';

	export let doc: UIFileType;

	const fileTypes: any = {
		'about-me-type': AboutMeFile,
		'company-type': CompanyDescriptionFile,
		'experience-type': ExperienceDescriptionFile,
		'project-type': ProjectFile,
		'degree-type': AttainedDegreeFile,
		'publication-type': AttainedPublicationFile,
		'certification-type': AttainedCertificationFile
	};
</script>

{#if doc.specialization_type}
	<div class="w-full max-w-[600px] mx-auto flex flex-col gap-12">
		<svelte:component this={fileTypes[doc.specialization_type]} {doc} />
	</div>
{/if}
