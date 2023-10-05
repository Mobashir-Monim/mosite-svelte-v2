<script lang="ts">
	export let id: string = '';
	export let name: string;
	export let placeholder: string = name;
	export let value: string | string[] | undefined;
	export let onChangeCallback: (value: string) => void = (value) => {};

	const callback: (event: Event) => void = (event) => {
		const target = event.target as HTMLTextAreaElement;

		onChangeCallback(target.value);
	};
</script>

<textarea
	{id}
	{name}
	class="textarea p-2 w-full text-[0.8rem]"
	on:change={callback}
	rows="5"
	{placeholder}
	bind:value
/>
