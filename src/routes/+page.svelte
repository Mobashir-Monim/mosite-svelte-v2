<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from '../assets/icons/Logo.svelte';
	import DirectorySystemComponent from '../components/DirectoryComponents/DirectorySystemComponent.svelte';
	import { openWindow } from '$lib/store/global-directory-system-store-control';
	import { rootFolder } from '$lib/data/directory-contents';
	import { aboutMe } from '$lib/data/about-me';

	const webWindowName: string = 'root';

	onMount(() => {
		openWindow('root', rootFolder, 120);
	});
</script>

<div class="max-w-[1000px] h-full mx-auto flex flex-col justify-center">
	<div class="flex flex-col md:flex-row justify-between gap-10">
		<div class="md:w-2/5 md:pl-10 flex flex-col justify-center gap-10">
			<Logo
				size={200}
				svgBoxClasses="mx-auto fill-none"
				containerShape="none"
				solidShapeClasses="stroke-gray-600 fill-gray-600 dark:stroke-gray-200 dark:fill-gray-200 stroke-2"
				outlineShapeClasses="stroke-gray-600 dark:stroke-gray-200 fill-violet-400 dark:fill-violet-500"
			/>
			<div
				class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-400 text-center w-full select-none"
			>
				<h1 class="text-[2rem] text-center leading-8 tracking-wider">
					{aboutMe.person.first}'s Portfolio
				</h1>
			</div>
		</div>
		<div class="max-w-[340px] mx-auto flex flex-col justify-center gap-20 px-5 md:pl-0 md:pr-10">
			<DirectorySystemComponent {webWindowName} />
		</div>
	</div>
</div>
