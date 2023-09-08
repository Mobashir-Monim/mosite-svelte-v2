<script lang="ts">
	export let size: number = 48;
	export let classes: string = 'fill-gray-600 dark:fill-gray-200';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 -960 960 960"
	class="transit {classes}"
	height={size}
	width={size}
>
	<path
		d="M80-120v-720h400v160h400v560H80Zm80-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm80-240v-80h160v80H560Zm0 160v-80h160v80H560Z"
	/>
</svg>
