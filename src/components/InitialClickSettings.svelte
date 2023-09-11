<script lang="ts">
	import { setClickMode } from '$lib/utils/settings-utils';

	export let removeClickSettings: () => void;

	let showInitialClickSettings: boolean = true;

	const setMode: (mode: 'single' | 'double') => void = (mode) => {
		setClickMode(window, mode);
		showInitialClickSettings = false;

		setTimeout(() => {
			removeClickSettings();
		}, 300);
	};
</script>

<div
	class="absolute top-0 left-0 w-screen h-screen bg-black/50 flex flex-col justify-center transit {showInitialClickSettings
		? ''
		: 'opacity-0'}"
>
	<div
		class="mx-auto w-[50%] max-w-[500px] min-h-[40%] rounded-2xl bg-surface-500 m-5 p-5 md:p-10 flex flex-col justify-center gap-10"
	>
		<h3 class="text-[2rem] text-center">Click settings</h3>
		<p class="text-[0.8rem] text-center">
			Would you like to open files/folders on single click or double click?
		</p>

		<div class="flex flex-row justify-between mx-auto max-w-[300px] w-full">
			<button
				type="button"
				class="text-[0.8rem] transit btn btn-sm variant-ghost-warning"
				on:click={() => setMode('single')}
			>
				Single Click
			</button>
			<button
				type="button"
				class="text-[0.8rem] transit btn btn-sm variant-ghost-error"
				on:click={() => setMode('double')}
			>
				Double Click
			</button>
		</div>
		<p class="text-[0.6rem] text-center">(You can change it from settings later)</p>
	</div>
</div>
