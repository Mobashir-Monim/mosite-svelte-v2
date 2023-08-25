<script lang="ts">
	export let svgBoxClasses: string = 'fill-none';
	export let size: number = 100;
	export let containerShape: string = 'rect';
	export let containerClasses: string = 'stroke-white !fill-none';
	export let outlineShapeClasses: string = 'fill-none stroke-white';
	export let solidShapeClasses: string = 'stroke-white fill-white';
	export let outlineShapeLeftClasses: string = '';
	export let outlineShapeRightClasses: string = '';
	export let solidShapeLeftClasses: string = '';
	export let solidShapeRightClasses: string = '';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size / 2}
	viewBox="0 0 520 520"
	class="transit {svgBoxClasses}"
>
	<rect
		x="388.003"
		y="42.5239"
		width="90.2863"
		height="446.154"
		rx="45.1432"
		stroke-width="25"
		class="transit {outlineShapeClasses} {outlineShapeRightClasses}"
	/>
	<rect
		x="16.7064"
		y="5.28256"
		width="90.8226"
		height="472.546"
		rx="45.4113"
		transform="matrix(0.883305 -0.468799 0.45321 0.891403 9.55545 74.8822)"
		stroke-width="25"
		class="transit {outlineShapeClasses} {outlineShapeLeftClasses}"
	/>
	<rect
		x="29.6436"
		y="30.0239"
		width="115.286"
		height="471.154"
		rx="57.6432"
		class="transit stroke-2 {solidShapeClasses} {solidShapeLeftClasses}"
	/>

	<rect
		width="115.822"
		height="499.991"
		rx="57.9112"
		transform="matrix(0.88334 0.468733 -0.453146 0.891436 407.689 10)"
		class="transit stroke-2 {solidShapeClasses} {solidShapeRightClasses}"
	/>

	{#if containerShape !== 'none'}
		{#if containerShape === 'circle'}
			<rect x="0.5" y="0.5" width="99" height="99" rx="49.5" class={containerClasses} />
		{:else}
			<rect x="0.5" y="0.5" width="99" height="99" class={containerClasses} />
		{/if}
	{/if}
</svg>
