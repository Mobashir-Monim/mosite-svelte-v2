<script lang="ts">
	import NavComponent from '../../../components/NavComponents/NavComponent.svelte';

	let isNavExpanded: boolean = false;

	const navExpansionToggle = (expansion: boolean) => {
		console.log('called');

		isNavExpanded = expansion;
	};
</script>

<div class="admin-dashboard">
	<NavComponent {navExpansionToggle} />
	<div
		class="md:mt-0 mt-[80px] transit md:h-full w-full h-[calc(100vh-80px)] md:ml-auto {isNavExpanded
			? 'md:w-[calc(100vw-250px)]'
			: 'md:w-[calc(100vw-81px)]'}"
	>
		<div class="w-full md:max-w-[1000px] mx-auto pt-10 pb-[80px] transit">
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
	.admin-dashboard {
		@apply flex flex-row justify-between w-full h-screen overflow-y-auto relative;
	}
</style>
