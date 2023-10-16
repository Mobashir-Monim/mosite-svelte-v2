<script lang="ts">
	import { appMenuVisibility } from '$lib/store';
	import { toggleAppMenuVisibility } from '$lib/store/app-menu-visibility-control';
	import type { AppMenuItemType } from '$lib/types';
	import CloseIcon from '../../assets/icons/CloseIcon.svelte';
	import LogoutIcon from '../../assets/icons/LogoutIcon.svelte';
	import AuthIcon from '../../assets/icons/AuthIcon.svelte';
	import * as api from '$lib/utils/api';

	export let accessToken: string | null;

	let isVisible: boolean = false;
	let apps: AppMenuItemType[] = [];

	appMenuVisibility.subscribe((val) => {
		isVisible = val;
	});

	if (accessToken) {
		apps.unshift({
			name: 'Logout',
			icon: LogoutIcon,
			onclick: async () => {
				await api.post('/logout');
				window.open('/', '_self');
			}
		});
	} else {
		apps.unshift({
			name: 'Login',
			icon: AuthIcon,
			onclick: () => {
				window.open('/login', '_self');
			}
		});
	}
</script>

<div
	class=" {isVisible
		? 'w-screen h-screen top-[0%] opacity-100 right-[0%] p-10'
		: 'w-[0vw] h-[0vh] top-[100%] opacity-0 right-[50%] p-0'} absolute backdrop-blur-[8px] bg-secondary-400 dark:bg-secondary-700/80 z-50 flex flex-col justify-center transit overflow-hidden"
>
	<button
		class="absolute top-[10px] right-[10px] border-2 border-surface-500 dark:border-white/70 rounded-full"
		on:click={toggleAppMenuVisibility}
	>
		<CloseIcon size={30} />
	</button>
	<!-- <p class="text-[2rem] mx-auto text-center">No apps installed yet</p> -->
	<div class="flex flex-row flex-wrap justify-center gap-10">
		{#each apps as menuApp}
			<button
				class="flex flex-col gap-2 justify-center w-[100px] h-[115px]"
				type="button"
				on:click={menuApp.onclick}
			>
				<div
					class="border-primary-300 bg-tertiary-700 hover:bg-tertiary-500 transit rounded-2xl p-3 mx-auto"
				>
					<svelte:component this={menuApp.icon} size={50} />
				</div>
				<span class="w-full block text-[0.8rem] text-center">{menuApp.name}</span>
			</button>
		{/each}
	</div>
</div>
