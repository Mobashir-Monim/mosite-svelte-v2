<script lang="ts">
	export let name: string;
	export let placeholder: string = name;
	export let value: string | undefined;
</script>

<textarea {name} class="textarea p-2 w-full" {placeholder} bind:value />
