<script lang="ts">
	import DirectoryContentContainerComponent from './DirectoryContentContainerComponent.svelte';

	export let containerClasses: string = '';
	export let size: number = 100;
	export let name: string = '';
	export let isSelected: boolean = false;
	export let onSelect: (name: string) => void;
	export let onOpen: (name: string) => void;
</script>

<DirectoryContentContainerComponent {containerClasses} {name} {onSelect} {onOpen}>
	<div class="{isSelected ? 'bg-white/20' : ''} rounded-2xl">
		<slot />
	</div>

	<div
		class="line-clamp-2 text-center p-1 font-semibold dark:font-normal {isSelected
			? 'bg-white/20'
			: ''} select-none rounded-xl leading-4"
		style="width: {size}px; overflow-wrap: break-word; font-size: {size / 10}px"
	>
		{name}
	</div>
</DirectoryContentContainerComponent>
