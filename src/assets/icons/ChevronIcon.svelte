<script lang="ts">
	export let size: number = 48;
	export let classes: string = 'fill-white';
	export let direction: 'left' | 'right' | 'up' | 'down' = 'right';
	$: rotate =
		direction === 'left'
			? 'rotate-180'
			: direction === 'down'
			? 'rotate-90'
			: direction === 'up'
			? '-rotate-90'
			: '';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 -960 960 960"
	class={`transit inline-block ${rotate} ${classes}`}
	height={`${size}`}
	width={`${size}`}
>
	<path
		d="M530-481 353-658q-9-9-8.5-21t9.5-21q9-9 21.5-9t21.5 9l198 198q5 5 7 10t2 11q0 6-2 11t-7 10L396-261q-9 9-21 8.5t-21-9.5q-9-9-9-21.5t9-21.5l176-176Z"
	/>
</svg>
