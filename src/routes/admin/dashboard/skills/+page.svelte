<script lang="ts">
	import type { SkillTagType } from '$lib/data/skills';
	import type { SkillType } from '$lib/types';
	import CloseIcon from '../../../../assets/icons/CloseIcon.svelte';
	import InputContainerComponent from '../../../../components/InputComponents/InputContainerComponent.svelte';
	import InputGroupComponent from '../../../../components/InputComponents/InputGroupComponent.svelte';

	const skillTypes: SkillType[] = ['general', 'programming-language', 'technical'];

	let skills: SkillTagType[] = [
		{
			type: 'general',
			name: ''
		}
	];

	const addSkill = () => {
		skills = [
			...skills,
			{
				type: 'general',
				name: ''
			}
		];
	};

	const removeSkill = (index: number) => {
		skills.splice(index, 1);
		skills = [...skills];
	};
</script>

<div class="flex flex-col gap-5 px-5">
	<InputGroupComponent groupName="Skills">
		<div class="flex flex-col gap-3 justify-between">
			{#each skills as skill, index (skill)}
				<div class="flex flex-col md:flex-row gap-3 w-full">
					<InputContainerComponent name="Skill Name" value={skill.name} type="line" />
					<div class="flex flex-row md:min-w-[350px]">
						<InputContainerComponent
							name="Skill Type"
							value={skill.type}
							type="select"
							options={skillTypes}
						/>
						<button
							type="button"
							on:click={() => removeSkill(index)}
							class="btn btn-icon btn-sm variant-filled-error mb-auto p-2 ml-5 md:ml-10"
						>
							<CloseIcon size={20} />
						</button>
					</div>
				</div>
			{/each}
		</div>
		<div class="flex flex-row justify-end">
			<button
				type="button"
				on:click={addSkill}
				class="btn btn-sm variant-outline-success mb-auto p-2"
			>
				Add Skill
			</button>
		</div>
	</InputGroupComponent>
</div>
