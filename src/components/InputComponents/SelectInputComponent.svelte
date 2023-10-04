<script lang="ts">
	import type { SelectOptionsType } from '$lib/types';

	export let name: string;
	export let placeholder: string = name;
	export let value: string | undefined;
	export let options: SelectOptionsType[] | string[];
</script>

<select class="select w-full p-2" {name} bind:value>
	<option value="">{placeholder}</option>
	{#each options as option}
		{#if typeof option !== 'string'}
			<option value={option.value}>{option.name}</option>
		{:else}
			<option value={option}>{option}</option>
		{/if}
	{/each}
</select>
