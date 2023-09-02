<script lang="ts">
	import type { IconPropsType } from '$lib/types';

	export let icon: ConstructorOfATypedSvelteComponent;
	export let props: IconPropsType;
</script>

<span class="p-2 transit cursor-pointer hover:bg-white/20 rounded-2xl">
	<svelte:component this={icon} {...props} />
</span>
