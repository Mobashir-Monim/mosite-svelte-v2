<script lang="ts">
	import CloseIcon from '../../assets/icons/CloseIcon.svelte';
	import CollapseIcon from '../../assets/icons/CollapseIcon.svelte';
	import ExpandIcon from '../../assets/icons/ExpandIcon.svelte';
	import MinimizeIcon from '../../assets/icons/MinimizeIcon.svelte';

	export let buttonDimension: number = 15;
	export let buttonType: 'close' | 'minimize' | 'full-screen' = 'close';
	export let isDisabled: boolean = false;
	export let isExpanded: boolean = false;

	const defaultIconClasses: string = 'fill-gray-600 dark:fill-white stroke-2';

	const getButtonColorClasses: () => string = () => {
		if (isDisabled) {
			switch (buttonType) {
				case 'minimize':
					return 'bg-orange-300 !cursor-not-allowed';
				case 'full-screen':
					return 'bg-green-300 !cursor-not-allowed';
				default:
					return 'bg-rose-300 !cursor-not-allowed';
			}
		} else {
			switch (buttonType) {
				case 'minimize':
					return 'bg-orange-500 hover:bg-orange-400';
				case 'full-screen':
					return 'bg-green-500 hover:bg-green-400';
				default:
					return 'bg-rose-500 hover:bg-rose-400';
			}
		}
	};
</script>

<button
	class="{getButtonColorClasses()} rounded-full transit cursor-pointer p-[0.5px]"
	style="width: {buttonDimension}px; height: {buttonDimension}px;"
>
	{#if buttonType === 'close'}
		<CloseIcon size={14} classes={defaultIconClasses} />
	{:else if buttonType === 'minimize'}
		<MinimizeIcon size={14} classes={defaultIconClasses} />
	{:else if isExpanded}
		<CollapseIcon size={14} classes="{defaultIconClasses} rotate-45" />
	{:else}
		<ExpandIcon size={14} classes="{defaultIconClasses} rotate-45" />
	{/if}
</button>
