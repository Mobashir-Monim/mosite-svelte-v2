<script lang="ts">
	import { appMenuVisibility } from '$lib/store';
	import { toggleAppMenuVisibility } from '$lib/store/app-menu-visibility-control';
	import CloseIcon from '../../assets/icons/CloseIcon.svelte';

	let isVisible: boolean = false;

	appMenuVisibility.subscribe((val) => {
		isVisible = val;
	});
</script>

<div
	class=" {isVisible
		? 'w-screen h-screen top-[0%] opacity-100 right-[0%]'
		: 'w-[0vw] h-[0vh] top-[100%] opacity-0 right-[50%]'} absolute backdrop-blur-[8px] bg-secondary-400 dark:bg-secondary-700/80 z-50 flex flex-col justify-center transit overflow-hidden"
>
	<button
		class="absolute top-[10px] right-[10px] border-2 border-surface-500 dark:border-white/70 rounded-full"
		on:click={toggleAppMenuVisibility}
	>
		<CloseIcon size={30} />
	</button>
	<p class="text-[2rem] mx-auto text-center">No apps installed yet</p>
</div>
