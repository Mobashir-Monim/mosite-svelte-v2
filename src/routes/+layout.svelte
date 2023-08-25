<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style lang="postcss">
    main {
        @apply bg-gray-700 h-screen w-screen;
    }
</style>