<script lang="ts">
	import AppearanceSettingsComponent from './AppearanceSettingsComponent.svelte';
	import ClickSettingsComponent from './ClickSettingsComponent.svelte';
	import ColorSchemeSettingsComponent from './ColorSchemeSettingsComponent.svelte';
	import SettingsRowComponent from './SettingsRowComponent.svelte';

	const settingsOptions = [
		{
			prompt: 'Appearance Mode',
			component: AppearanceSettingsComponent
		},
		{
			prompt: 'Color Scheme',
			component: ColorSchemeSettingsComponent
		},
		{
			prompt: 'Open file/folder when',
			component: ClickSettingsComponent
		}
	];
</script>

<div
	class="w-full h-full flex flex-col gap-5 p-5 md:p-2.5 min-h-full justify-center overflow-y-auto"
>
	{#each settingsOptions as option}
		<SettingsRowComponent prompt={option.prompt} component={option.component} />
	{/each}
</div>
