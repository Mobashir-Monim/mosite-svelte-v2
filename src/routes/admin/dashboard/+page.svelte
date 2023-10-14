<script lang="ts">
	import type { LocationType, PersonNameType, SocialItemType } from '$lib/data/about-me';
	import type { SocialLabelType } from '$lib/types';
	import SaveIcon from '../../../assets/icons/SaveIcon.svelte';
	import InputContainerComponent from '../../../components/InputComponents/InputContainerComponent.svelte';
	import InputGroupComponent from '../../../components/InputComponents/InputGroupComponent.svelte';
	import * as api from '$lib/utils/api';

	export let data;

	let profile = data.profile;
	let id = data.id;

	const updateName = (value: string, key: keyof PersonNameType) => {
		profile.name[key] = value;
	};

	const updateLocation = (value: string, key: keyof LocationType) => {
		profile.location[key] = value;
	};

	const updateJobTitle = (value: string) => {
		profile.title = value;
	};

	const updateSocial = (value: string, label: SocialLabelType) => {
		const social = profile.socials.find((s: SocialItemType) => s.label === label);
		if (label === 'email' && !value.startsWith('mailto:')) value = `mailto:${value}`;

		social.link = value;
	};

	const updateDescription = (value: string) => {
		profile.description = value.split('\n\n');
	};

	const saveProfile = async () => {
		const response = await api.post('/api/profile', { id, profile }, data.accessToken);

		response.json().then((res: any) => {
			profile = res.data.profile;
			profile.description = profile.description.join('\n\n');
			id = res.data.id;
		});
	};
</script>

<div class="flex flex-col gap-5 px-5">
	<InputGroupComponent groupName="Name">
		<div class="flex flex-col md:flex-row gap-3 justify-between">
			<InputContainerComponent
				onChangeCallback={(value) => updateName(value, 'first')}
				name="First Name"
				value={profile.name.first}
				type="line"
			/>
			<InputContainerComponent
				onChangeCallback={(value) => updateName(value, 'middle')}
				name="Middle Name"
				value={profile.name.middle}
				type="line"
			/>
			<InputContainerComponent
				onChangeCallback={(value) => updateName(value, 'last')}
				name="Last Name"
				value={profile.name.last}
				type="line"
			/>
		</div>
	</InputGroupComponent>

	<InputGroupComponent groupName="Location and Title">
		<div class="flex flex-col md:flex-row gap-3 justify-between">
			<InputContainerComponent
				onChangeCallback={(value) => updateLocation(value, 'city')}
				name="City"
				value={profile.location.city}
				type="line"
			/>
			<InputContainerComponent
				onChangeCallback={(value) => updateLocation(value, 'state')}
				name="State"
				value={profile.location.state}
				type="line"
			/>
			<InputContainerComponent
				onChangeCallback={(value) => updateLocation(value, 'country')}
				name="Country"
				value={profile.location.country}
				type="line"
			/>
		</div>

		<div class="flex flex-col md:flex-row gap-3 justify-between">
			<InputContainerComponent
				onChangeCallback={(value) => updateJobTitle(value)}
				name="Job Title"
				value={profile.title}
				type="line"
			/>
		</div>
	</InputGroupComponent>

	<InputGroupComponent groupName="Socials">
		<div class="flex flex-col max-w-[400px] gap-3 justify-between">
			{#each profile.socials as social}
				<InputContainerComponent
					onChangeCallback={(value) => updateSocial(value, social.label)}
					name={`${social.label[0].toUpperCase()}${social.label.slice(1)}`}
					value={social.link}
					type="line"
				/>
			{/each}
		</div>
	</InputGroupComponent>

	<InputGroupComponent groupName="Portfolio Description">
		<div class="flex flex-col md:flex-row gap-3 justify-between">
			<InputContainerComponent
				onChangeCallback={(value) => updateDescription(value)}
				name="Portfolio Description"
				value={profile.description}
				type="text"
			/>
		</div>
	</InputGroupComponent>

	<div class="flex flex-row justify-center">
		<button type="button" on:click={saveProfile} class="btn btn-md variant-outline-success transit">
			<SaveIcon size={20} />
			<span>Save</span>
		</button>
	</div>
</div>
