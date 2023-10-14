import { AUTHORIZED_EDITOR_EMAIL } from '$env/static/private';
import { redirect, error, type RequestEvent } from '@sveltejs/kit';
import admin from '$lib/server/admin';
import type { UserType } from '$lib/types';

export const isAuthenticated = (
	user: UserType | null | undefined,
	shouldThrow: boolean = true
): boolean => {
	let shouldRedirect = user === undefined || user === null;

	if (user !== undefined && user !== null) {
		admin
			.auth()
			.verifyIdToken(user.idToken, true)
			.then((decodedToken) => {
				shouldRedirect = shouldRedirect && decodedToken.uid !== user.uid;
			})
			.catch((_) => {
				shouldRedirect = true;
			});
	}

	if (shouldRedirect && shouldThrow) {
		throw redirect(302, '/login');
	}

	return !shouldRedirect;
};

export const isUnauthenticated = (user: UserType | null | undefined): boolean => {
	if (user === undefined || user === null) {
		return true;
	}

	throw redirect(302, '/');
};

export const isSiteEditor = (
	user: UserType | null | undefined,
	shouldThrow: boolean = true
): boolean => {
	if (!(isAuthenticated(user, shouldThrow) && user && user.email === AUTHORIZED_EDITOR_EMAIL)) {
		if (shouldThrow) {
			throw error(401, {
				message: 'Unauthorized user'
			});
		} else {
			return false;
		}
	}

	return true;
};

export const authParamExtractor = (event: RequestEvent): UserType | null | undefined =>
	event.locals.user;
