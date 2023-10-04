<script lang="ts">
	import type { PersonNameType, SocialItemType } from '$lib/data/about-me';
	import type { LocationType } from '$lib/types';
	import InputContainerComponent from '../../../components/InputComponents/InputContainerComponent.svelte';
	import InputGroupComponent from '../../../components/InputComponents/InputGroupComponent.svelte';

	const personName: PersonNameType = {
		first: '',
		middle: '',
		last: ''
	};

	const location: LocationType = {
		city: '',
		state: '',
		country: ''
	};

	let jobTitle: string;
	let description: string;

	const socials: SocialItemType[] = [
		{ label: 'facebook', link: '' },
		{ label: 'twitter', link: '' },
		{ label: 'github', link: '' },
		{ label: 'email', link: '' },
		{ label: 'linkedin', link: '' }
	];
</script>

<div class="flex flex-col gap-5 px-5">
	<InputGroupComponent groupName="Name">
		<div class="flex flex-col md:flex-row gap-3 justify-between">
			<InputContainerComponent name="First Name" value={personName.first} type="line" />
			<InputContainerComponent name="Middle Name" value={personName.middle} type="line" />
			<InputContainerComponent name="Last Name" value={personName.last} type="line" />
		</div>
	</InputGroupComponent>

	<InputGroupComponent groupName="Location and Title">
		<div class="flex flex-col md:flex-row gap-3 justify-between">
			<InputContainerComponent name="City" value={location.city} type="line" />
			<InputContainerComponent name="State" value={location.state} type="line" />
			<InputContainerComponent name="Country" value={location.country} type="line" />
		</div>

		<div class="flex flex-col md:flex-row gap-3 justify-between">
			<InputContainerComponent name="Job Title" value={jobTitle} type="line" />
		</div>
	</InputGroupComponent>

	<InputGroupComponent groupName="Socials">
		<div class="flex flex-col max-w-[400px] gap-3 justify-between">
			{#each socials as social}
				<InputContainerComponent
					name={`${social.label[0].toUpperCase()}${social.label.slice(1)}`}
					value={social.link}
					type="line"
				/>
			{/each}
		</div>
	</InputGroupComponent>

	<InputGroupComponent groupName="Portfolio Description">
		<div class="flex flex-col md:flex-row gap-3 justify-between">
			<InputContainerComponent name="Portfolio Description" value={description} type="text" />
		</div>
	</InputGroupComponent>
</div>
