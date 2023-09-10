<script lang="ts">
	import Logo from '../../assets/icons/Logo.svelte';
	import LoadingScreenMessage from './LoadingScreenMessage.svelte';

	export let removeLoadingScreen: () => void;

	let loadingStatusWidth: number = 0;
	let shouldFade: boolean = false;

	const incrementLoadingProgress: () => void = () => {
		if (loadingStatusWidth < 100) {
			setTimeout(() => {
				loadingStatusWidth += Math.round(Math.random() * 10);
				incrementLoadingProgress();
			}, 300);
		} else {
			shouldFade = true;

			setTimeout(() => {
				removeLoadingScreen();
			}, 300);
		}
	};

	incrementLoadingProgress();
</script>

<div
	class="absolute top-0 left-0 w-screen h-screen bg-black flex flex-col justify-center gap-20 {shouldFade
		? 'opacity-0'
		: ''} transit"
>
	<Logo
		size={300}
		svgBoxClasses="mx-auto fill-none mx-auto"
		containerShape="none"
		solidShapeClasses="stroke-gray-600 fill-gray-600 dark:stroke-gray-200 dark:fill-gray-200"
		outlineShapeClasses="stroke-gray-600 dark:stroke-gray-200 fill-gray-600 dark:fill-gray-200"
	/>
	<div class="w-full flex flex-col justify-center px-5 gap-3">
		<div
			class="h-[7.5px] w-full max-w-[400px] rounded-full mx-auto bg-white/30 transit relative overflow-hidden"
		>
			<span
				class="absolute top-0 left-0 inline-block h-[7.5px] rounded-full bg-white transit"
				style="width: {loadingStatusWidth}%;"
			/>
		</div>
		<LoadingScreenMessage {loadingStatusWidth} />
	</div>
</div>
