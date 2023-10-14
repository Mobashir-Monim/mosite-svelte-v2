<script lang="ts">
	import { ConicGradient, type ConicStop } from '@skeletonlabs/skeleton';
	import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
	import * as api from '$lib/utils/api';

	const auth = getAuth();
	let isLocked: boolean = true;
	let isAuthenticating: boolean = false;
	let authMessage: string = '';
	const conicStops: ConicStop[] = [
		{ color: 'transparent', start: 0, end: 25 },
		{ color: 'rgb(var(--color-primary-500))', start: 75, end: 100 }
	];

	const initLogin = () => {
		isAuthenticating = true;
		authMessage = 'Authentication in progress';
		const provider = new GoogleAuthProvider();

		signInWithPopup(auth, provider)
			.then(async (response) => {
				const credential = GoogleAuthProvider.credentialFromResult(response);
				const accessToken = credential?.accessToken;
				const user = {
					email: response.user.email,
					uid: response.user.uid,
					displayName: response.user.displayName,
					photoURL: response.user.photoURL,
					idToken: credential?.idToken,
					accessToken: accessToken
				};

				isLocked = false;
				authMessage = 'Authentication successful, please wait for redirection';
				const loginRes = await api.post('/api/login', { user, accessToken });

				setTimeout(() => {
					window.open(loginRes.path, '_self');
				}, 1000);
			})
			.catch((_) => {
				isAuthenticating = false;
				authMessage = 'Authentication unsuccessful';
			});
	};
</script>

<div class="flex flex-col justify-center w-screen h-screen gap-10">
	<div class="container">
		<span class="lock {isLocked ? '' : 'unlocked'}" />
	</div>

	<div class="h-[60px] flex flex-col overflow-hidden">
		<button
			type="button"
			on:click={initLogin}
			class="btn btn-xl variant-outline-primary mx-auto transit {isAuthenticating
				? 'h-[0px] text-[0rem] p-0'
				: 'h-[60px] text-[1.5rem]'} "
		>
			Google Login
		</button>
		<ConicGradient
			width="{isAuthenticating ? 'h-[60px]' : 'h-[0px]'} delay-300 transit"
			stops={conicStops}
			spin
		/>
	</div>
	<div class="text-center text-primary-500">
		{authMessage}
	</div>
</div>

<style lang="postcss">
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
		padding: 0;
		box-sizing: border-box;
	}
	/* Locked */
	.lock {
		width: 150px;
		height: 100px;
		border-radius: 25px;
		position: relative;
		-webkit-transition: all 300ms ease-in-out;
		transition: all 300ms ease-in-out;
		margin-left: auto;
		margin-right: auto;
		@apply border-4 border-primary-500 bg-opacity-100;
	}
	.lock:after {
		content: '';
		display: block;
		width: 10px;
		height: 20px;
		border-radius: 25px;
		position: absolute;
		top: calc(50%);
		left: calc(50% - 5px);
		-webkit-transition: all 300ms ease-in-out;
		transition: all 300ms ease-in-out;
		@apply bg-primary-500;
	}
	.lock:before {
		content: '';
		display: block;
		width: 100px;
		height: 80px;
		bottom: 100%;
		position: absolute;
		left: calc(50% - 50px);
		border-top-right-radius: 50%;
		border-top-left-radius: 50%;
		border-bottom: 0;
		-webkit-transition: all 300ms ease-in-out;
		transition: all 300ms ease-in-out;
		@apply border-4 border-primary-500;
	}
	.unlocked:before {
		bottom: 125%;
		left: -10%;
		transform: rotate(-45deg);
	}
	.unlocked,
	.unlocked:before {
		@apply border-secondary-500;
	}
	.unlocked:after {
		@apply bg-secondary-500;
	}
</style>
