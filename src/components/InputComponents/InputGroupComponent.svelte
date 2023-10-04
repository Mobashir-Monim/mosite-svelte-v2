<script lang="ts">
	import SaveIcon from '../../assets/icons/SaveIcon.svelte';

	export let groupName: string;
	export let onSaveCallback: undefined | (() => void) = undefined;
</script>

<div class="bg-gray-400/30 dark:bg-gray-500/30 rounded-2xl p-5 flex flex-col gap-5 justify-between">
	<h3>{groupName}</h3>
	<slot />
	{#if onSaveCallback}
		<div class="flex flex-row justify-end">
			<button
				type="button"
				class="btn btn-sm variant-glass-secondary transit"
				on:click={onSaveCallback}
			>
				<SaveIcon size={20} />
				<span>Save</span>
			</button>
		</div>
	{/if}
</div>
