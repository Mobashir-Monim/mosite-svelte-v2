<script lang="ts">
	export let toolBarIconSize: number = 35;
	export let showToolBarDivider: boolean;
</script>

<div
	class="my-auto {showToolBarDivider
		? 'border-[0.5px] mx-[4px]'
		: 'border-0 mx-[0px]'} border-surface-500 dark:border-white/70 rounded-full transit"
	style="height: {toolBarIconSize}px;"
/>
