<script lang="ts">
	import type { NavOptionType } from '$lib/types';
	import Logo from '../../assets/icons/Logo.svelte';
	import ProfileIcon from '../../assets/icons/ProfileIcon.svelte';
	import SkillIcon from '../../assets/icons/SkillIcon.svelte';
	import ProjectIcon from '../../assets/icons/ProjectIcon.svelte';
	import WorkIcon from '../../assets/icons/WorkIcon.svelte';
	import TrophyIcon from '../../assets/icons/TrophyIcon.svelte';
	import LogoutIcon from '../../assets/icons/LogoutIcon.svelte';
	import NavOptionComponent from './NavOptionComponent.svelte';
	import * as api from '$lib/utils/api';

	export let navExpansionToggle: (expansion: boolean) => void;

	const logout = async () => {
		await api.post('/logout');
		window.open('/', '_self');
	};

	const navOptions: NavOptionType[] = [
		{
			name: 'Profile',
			url: '/admin/dashboard',
			icon: ProfileIcon
		},
		{
			name: 'Skills',
			url: '/admin/skills',
			icon: SkillIcon
		},
		{
			name: 'Projects',
			url: '/admin/projects',
			icon: ProjectIcon
		},
		{
			name: 'Experiences',
			url: '/admin/experiences',
			icon: WorkIcon
		},
		{
			name: 'Attainments',
			url: '/admin/attainments',
			icon: TrophyIcon
		},
		{
			name: 'Logout',
			icon: LogoutIcon,
			classes: 'mt-auto',
			callback: logout
		}
	];

	let expanded: boolean = false;

	const toggleExpansion = () => {
		expanded = !expanded;
		navExpansionToggle(expanded);
	};

	$: width = `w-full ${expanded ? `md:w-[250px]` : `md:w-[81px]`}`;
	$: height = `${expanded ? `h-[100vh]` : `h-[80px]`} md:h-full`;
</script>

<nav class="admin-nav transit {width} {height}">
	<button
		type="button"
		class="block mx-auto mb-20 md:mb-10 w-full relative transit"
		on:click={toggleExpansion}
	>
		<Logo
			size={82}
			svgBoxClasses="fill-none cursor-pointer absolute left-[calc(50%-41px)] {expanded
				? 'md:left-[calc(50%-50px)]'
				: 'md:left-[-20px]'}"
			containerShape="none"
			solidShapeClasses="stroke-gray-600 fill-gray-600 dark:stroke-gray-200 dark:fill-gray-200 stroke-2"
			outlineShapeClasses="stroke-gray-600 dark:stroke-gray-200 fill-violet-400 dark:fill-violet-500"
		/>
	</button>
	<div
		class="border-b-2 border-white rounded-full hidden md:block mb-10 {expanded
			? 'opacity-100'
			: 'opacity-0'} transit"
	/>
	{#each navOptions as option}
		<NavOptionComponent {option} {expanded} />
	{/each}
</nav>

<style lang="postcss">
	.admin-nav {
		@apply fixed top-0 left-0 p-5 bg-surface-500 flex flex-col gap-5 z-20 overflow-hidden;
	}
</style>
