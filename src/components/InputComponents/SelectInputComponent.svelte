<script lang="ts">
	import type { SelectOptionsType } from '$lib/types';

    export let id: string = "";
	export let name: string;
	export let placeholder: string = name;
	export let value: string | undefined;
	export let options: SelectOptionsType[] | string[];
	export let onChangeCallback: (value: string) => void = (value) => {};

	const callback: (event: Event) => void = (event) => {
		const target = event.target as HTMLSelectElement;

		onChangeCallback(target.value);
	};
</script>

<select {id} class="select w-full p-2 text-[0.8rem]" {name} bind:value on:change={callback}>
	<option value="">{placeholder}</option>
	{#each options as option}
		{#if typeof option !== 'string'}
			<option value={option.value}>{option.name}</option>
		{:else}
			<option value={option}>{option}</option>
		{/if}
	{/each}
</select>
