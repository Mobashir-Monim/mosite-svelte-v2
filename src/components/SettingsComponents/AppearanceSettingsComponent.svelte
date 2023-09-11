<script lang="ts">
	import Logo from '../../assets/icons/Logo.svelte';
	import { setModeCurrent, autoModeWatcher } from '@skeletonlabs/skeleton';

	const setMode = (mode: 'dark' | 'light' | 'auto') => {
		if (mode === 'dark') {
			setModeCurrent(false);
		} else if (mode === 'light') {
			setModeCurrent(true);
		} else {
			autoModeWatcher();
		}
	};
</script>

<div class="flex flex-row gap-3">
	<button class="flex flex-col gap-1 justify-center" on:click={() => setMode('dark')}>
		<div class="rounded-2xl bg-surface-500 py-5">
			<Logo
				size={80}
				svgBoxClasses="mx-auto fill-none"
				containerShape="none"
				solidShapeClasses="stroke-gray-200 fill-gray-200 stroke-2"
				outlineShapeClasses="stroke-gray-200 fill-violet-500"
			/>
		</div>
		<span class="mx-auto text-[0.7rem]">Dark</span>
	</button>
	<button class="flex flex-col gap-1 justify-center" on:click={() => setMode('light')}>
		<div class="rounded-2xl bg-white py-5">
			<Logo
				size={80}
				svgBoxClasses="mx-auto fill-none"
				containerShape="none"
				solidShapeClasses="stroke-gray-600 fill-gray-600 stroke-2"
				outlineShapeClasses="stroke-gray-600 fill-violet-400"
			/>
		</div>
		<span class="mx-auto text-[0.7rem]">Light</span>
	</button>
	<button class="flex flex-col gap-1 justify-center" on:click={() => setMode('auto')}>
		<div class="relative overflow-hidden rounded-2xl w-[80px] h-[80px]">
			<div
				class="absolute top-0 left-0 rounded-2xl bg-white py-5 overflow-hidden w-[80px] h-[80px]"
			>
				<Logo
					size={80}
					svgBoxClasses="mx-auto fill-none"
					containerShape="none"
					solidShapeClasses="stroke-gray-600 fill-gray-600 stroke-2"
					outlineShapeClasses="stroke-gray-600  fill-violet-400"
				/>
			</div>
			<div
				class="absolute top-0 left-0 rounded-l-2xl bg-surface-500 py-5 overflow-hidden w-[40px] h-[80px]"
			>
				<Logo
					size={80}
					svgBoxClasses="mx-auto fill-none"
					containerShape="none"
					solidShapeClasses="stroke-gray-200 fill-gray-200 stroke-2"
					outlineShapeClasses="stroke-gray-200 fill-violet-500"
				/>
			</div>
		</div>
		<span class="mx-auto text-[0.7rem]">Auto</span>
	</button>
</div>
