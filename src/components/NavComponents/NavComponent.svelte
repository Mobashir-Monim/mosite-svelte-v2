<script lang="ts">
	import type { NavOptionType } from '$lib/types';
	import Logo from '../../assets/icons/Logo.svelte';

	import ProfileIcon from '../../assets/icons/ProfileIcon.svelte';
	import SkillIcon from '../../assets/icons/SkillIcon.svelte';
	import ProjectIcon from '../../assets/icons/ProjectIcon.svelte';
	import WorkIcon from '../../assets/icons/WorkIcon.svelte';
	import TrophyIcon from '../../assets/icons/TrophyIcon.svelte';
	import NavOptionComponent from './NavOptionComponent.svelte';
	import { collapsedNavWidth, expandedNavWidth } from '$lib/constants';

	const navOptions: NavOptionType[] = [
		{
			name: 'Profile',
			url: '/admin/dashboard',
			icon: ProfileIcon
		},
		{
			name: 'Skills',
			url: '/admin/dashboard/skills',
			icon: SkillIcon
		},
		{
			name: 'Projects',
			url: '/admin/dashboard/projects',
			icon: ProjectIcon
		},
		{
			name: 'Experiences',
			url: '/admin/dashboard/experiences',
			icon: WorkIcon
		},
		{
			name: 'Attainments',
			url: '/admin/dashboard/attainments',
			icon: TrophyIcon
		}
	];

	let expanded: boolean = false;

	const toggleExpansion = () => {
		expanded = !expanded;
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
