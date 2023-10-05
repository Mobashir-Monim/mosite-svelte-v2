<script lang="ts">
	import {
		eveneerBlober,
		eveneerBout,
		eveneerBoutV2,
		eveneerLightSaml,
		eveneerBusso,
		grBillingEngine,
		grCalendarAndScheduling,
		grInventoryManagement,
		grPointOfSale,
		grServiceAgreements,
		hobbyBeep,
		hobbyLandReg,
		hobbyMongolTori,
		techynafConnect,
		techynafEcube,
		techynafHuddle,
		techynafAlfred,
		bracUUserValidator,
		bracULMSUsageReportGenerator,
		bracUAutomatedCourseManagementScripts,
		grCliDevTool
	} from '$lib/data/projects';
	import type { ProjectType } from '$lib/data/projects';
	import type { ProjectCategoryType, ProjectSourceType } from '$lib/types';
	import CloseIcon from '../../../../assets/icons/CloseIcon.svelte';
	import InputContainerComponent from '../../../../components/InputComponents/InputContainerComponent.svelte';
	import InputGroupComponent from '../../../../components/InputComponents/InputGroupComponent.svelte';

	let projects: ProjectType[] = [
		grCliDevTool,
		grBillingEngine,
		grInventoryManagement,
		grPointOfSale,
		grServiceAgreements,
		grCalendarAndScheduling,
		eveneerBout,
		eveneerBoutV2,
		eveneerBlober,
		eveneerBusso,
		eveneerLightSaml,
		hobbyBeep,
		hobbyLandReg,
		hobbyMongolTori,
		techynafEcube,
		techynafConnect,
		techynafHuddle,
		techynafAlfred,
		bracUUserValidator,
		bracULMSUsageReportGenerator,
		bracUAutomatedCourseManagementScripts
	];

	projects.forEach((project) => {
		if (typeof project.description !== 'string') {
			project.description = project.description.join('\n\n');
		}

		if (!project.url) {
			project.url = '';
		}
	});

	const projectCategories: ProjectCategoryType[] = ['module', 'package', 'research', 'software'];
	const projectSources: ProjectSourceType[] = ['closed', 'open'];

	const addProjectFeature = (index: number) => {
		projects[index].features = [...projects[index].features, ''];
	};

	const removeProjectFeature = (index: number, featureIndex: number) => {
		projects[index].features.splice(featureIndex, 1);
		projects[index].features = [...projects[index].features];
	};

	const updateProjectName = (value: string, index: number) => {
		projects[index].name = value;
	};

	const updateProjectCategory = (value: string, index: number) => {
		for (let cat of projectCategories) {
			if (cat === value) projects[index].project_type = value;
		}
	};

	const updateProjectSource = (value: string, index: number) => {
		for (let source of projectSources) {
			if (source === value) projects[index].source = value;

			if (value === 'closed') delete projects[index].url;
		}
	};

	const updateProjectUrl = (value: string, index: number) => {
		projects[index].url = value;
	};

	const updateProjectDescription = (value: string, index: number) => {
		const description = value.split('\n\n');

		projects[index].description = description.length === 1 ? description[0] : description;
	};

	const updateProjectFeature = (value: string, index: number, featureIndex: number) => {
		projects[index].features[featureIndex] = value;
	};
</script>

<div class="flex flex-col gap-10 px-5">
	{#each projects as project, index (project)}
		<InputGroupComponent groupName={project.name}>
			<div class="flex flex-col gap-3 w-full">
				<div class="flex flex-col md:flex-row gap-3 w-full">
					<div class="w-full md:w-[60%]">
						<InputContainerComponent
							name="Project Name"
							type="line"
							value={project.name}
							onChangeCallback={(value) => updateProjectName(value, index)}
						/>
					</div>
					<div class="flex flex-col md:flex-row gap-3 w-full md:w-[40%]">
						<InputContainerComponent
							name="Category"
							type="select"
							value={project.project_type}
							options={projectCategories}
							onChangeCallback={(value) => updateProjectCategory(value, index)}
						/>
						<InputContainerComponent
							name="Source"
							type="select"
							value={project.source}
							options={projectSources}
							onChangeCallback={(value) => updateProjectSource(value, index)}
						/>
					</div>
				</div>
				{#if project.source === 'open'}
					<InputContainerComponent
						name="Code URL"
						type="line"
						value={project.url}
						onChangeCallback={(value) => updateProjectUrl(value, index)}
					/>
				{/if}
				<InputContainerComponent
					name="Description"
					type="text"
					value={project.description}
					onChangeCallback={(value) => updateProjectDescription(value, index)}
				/>
				<div class="flex flex-col gap-3">
					<h4>Features</h4>
					{#each project.features as feature, featureIndex (feature + featureIndex)}
						<div class="flex flex-row gap-3">
							<InputContainerComponent
								name=""
								id={`p-${index}-f-${featureIndex}`}
								placeholder="Feature"
								type="line"
								value={feature}
								onChangeCallback={(value) => updateProjectFeature(value, index, featureIndex)}
							/>
							<button
								type="button"
								on:click={() => removeProjectFeature(index, featureIndex)}
								class="btn btn-sm btn-icon variant-outline-error mb-auto"
							>
								<CloseIcon size={20} />
							</button>
						</div>
					{/each}
					<div class="flex flex-row justify-end mt-10">
						<button
							type="button"
							on:click={() => addProjectFeature(index)}
							class="btn btn-sm variant-outline-success">Add Feature</button
						>
					</div>
				</div>
				<div class="flex flex-col gap-3">
					<h4>Skills</h4>
				</div>
			</div>
		</InputGroupComponent>
	{/each}
</div>
