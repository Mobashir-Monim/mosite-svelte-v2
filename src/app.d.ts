// See https://kit.svelte.dev/docs/types#app

import type { UserType } from '$lib/types';
import type { UserInfo } from 'firebase-admin/lib/auth/user-record';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: UserType | null | undefined;
			accessToken: string | null;
		}
		interface PageData {
			flash?: { type: 'success' | 'error'; message: string };
		}
		// interface Platform {}
	}

	interface Window {
		opera: any;
	}
}

export {};
