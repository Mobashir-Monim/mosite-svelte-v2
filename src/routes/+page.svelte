<script lang="ts">
	import type { UIFolderType } from '$lib/types';
	import Logo from '../assets/icons/Logo.svelte';
	import DirectorySystemComponent from '../components/DirectoryComponents/DirectorySystemComponent.svelte';

	const folders: UIFolderType[] = [
		{
			type: 'folder',
			name: 'About Me',
			contents: []
		},
		{
			type: 'folder',
			name: 'Experiences',
			contents: []
		},
		{
			type: 'folder',
			name: 'Projects',
			contents: []
		},
		{
			type: 'folder',
			name: 'Attainments',
			contents: []
		}
	];
</script>

<div class="max-w-[1300px] h-full mx-auto flex flex-col justify-center">
	<div class="flex flex-col md:flex-row justify-between gap-10">
		<div class="md:w-2/5 md:pl-10 flex flex-col justify-center gap-10">
			<Logo
				size={200}
				svgBoxClasses="mx-auto fill-none"
				containerShape="none"
				solidShapeClasses="stroke-white fill-white stroke-2"
				outlineShapeClasses="stroke-white fill-violet-500"
			/>
			<div
				class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-400 text-center w-full"
			>
				<h1 class="text-[2rem] text-center">Mobashir's Portfolio</h1>
			</div>
		</div>
		<div class="md:w-3/5 flex flex-col justify-center gap-20 px-5 md:pl-0 md:pr-10">
			<DirectorySystemComponent contents={folders} contentSize={150} />
		</div>
	</div>
</div>
