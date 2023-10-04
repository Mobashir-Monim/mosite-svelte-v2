<script lang="ts">
	import type { SelectOptionsType } from '$lib/types';
	import LineInputComponent from './LineInputComponent.svelte';
	import TextInputComponent from './TextInputComponent.svelte';
	import SelectInputComponent from './SelectInputComponent.svelte';

	export let name: string;
	export let placeholder: string = name;
	export let value: string | undefined;
	export let type: 'line' | 'text' | 'select';
	export let options: SelectOptionsType[] = [];
</script>

<div class="flex flex-col w-full">
	{#if type === 'line'}
		<LineInputComponent {name} {placeholder} {value} />
	{:else if type === 'text'}
		<TextInputComponent {name} {placeholder} {value} />
	{:else}
		<SelectInputComponent {name} {placeholder} {options} {value} />
	{/if}
	<div class="flex flex-row justify-end text-[0.7rem]">
		{name}
	</div>
</div>
