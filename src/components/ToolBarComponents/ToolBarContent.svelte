<script lang="ts">
	import type { IconPropsType } from '$lib/types';

	export let icon: ConstructorOfATypedSvelteComponent;
	export let props: IconPropsType;
</script>

<span
	class="p-1.5 transit cursor-pointer bg-white/30 dark:variant-soft-secondary hover:bg-sky-300/50 dark:hover:bg-blue-500/50 rounded-xl"
>
	<svelte:component this={icon} {...props} />
</span>
