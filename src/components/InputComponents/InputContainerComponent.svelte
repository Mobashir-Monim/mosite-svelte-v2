<script lang="ts">
	import type { SelectOptionsType } from '$lib/types';
	import LineInputComponent from './LineInputComponent.svelte';
	import TextInputComponent from './TextInputComponent.svelte';
	import SelectInputComponent from './SelectInputComponent.svelte';

    export let id: string = "";
	export let name: string;
	export let placeholder: string = name;
	export let value: string | string[] | undefined;
	export let type: 'line' | 'text' | 'select' | 'custom';
	export let options: SelectOptionsType[] | string[] = [];
	export let onChangeCallback: (value: string) => void = (value) => {};
</script>

<div class="flex flex-col w-full">
	{#if type === 'line' && typeof value === 'string'}
		<LineInputComponent {id} {name} {placeholder} {value} {onChangeCallback} />
	{:else if type === 'text'}
		<TextInputComponent {id} {name} {placeholder} {value} {onChangeCallback} />
	{:else if type === 'select' && typeof value === 'string'}
		<SelectInputComponent {id} {name} {placeholder} {options} {value} {onChangeCallback} />
	{:else}
		<slot />
	{/if}
	<div class="flex flex-row justify-end text-[0.7rem]">
		{name}
	</div>
</div>
