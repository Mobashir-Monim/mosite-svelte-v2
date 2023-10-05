<script lang="ts">
	export let id: string = '';
	export let name: string;
	export let placeholder: string = name;
	export let value: string | undefined;
	export let onChangeCallback: (value: string) => void = (value) => {};

	const callback: (event: Event) => void = (event) => {
		const target = event.target as HTMLInputElement;

		onChangeCallback(target.value);
	};
</script>

<input
	{id}
	type="text"
	{name}
	class="input px-2 py-[4.5px] w-full text-[0.8rem]"
	{placeholder}
	bind:value
	on:change={callback}
/>
