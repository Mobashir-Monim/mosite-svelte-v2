<script lang="ts">
	import { page } from '$app/stores';
	import ErrorIcon from '../assets/icons/ErrorIcon.svelte';
</script>

<div class="w-screen h-screen flex flex-col justify-center gap-5">
	<div class="mx-auto">
		<ErrorIcon size={400} />
	</div>
	<h1 class="text-center text-[2rem]">{$page.error?.message}</h1>
	<span class="text-center">
		{$page.status}
	</span>
</div>
