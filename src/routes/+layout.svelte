<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply relative h-screen w-screen;
	}
</style>
