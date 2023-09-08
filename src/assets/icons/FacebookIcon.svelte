<script lang="ts">
	export let circle: boolean = false;
	export let size: number = 48;
	export let classes: string = 'fill-gray-600 dark:fill-gray-200';
</script>

{#if circle}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 50 50"
		class={`transit ${classes}`}
		height={`${size}`}
		width={`${size}`}
	>
		<path
			d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"
		/>
	</svg>
{:else}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 50 50"
		class={`transit ${classes}`}
		height={`${size}`}
		width={`${size}`}
	>
		<path
			d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"
		/>
	</svg>
{/if}
