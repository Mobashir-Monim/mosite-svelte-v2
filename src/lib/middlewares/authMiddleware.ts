import { AUTHORIZED_EDITOR_EMAIL } from '$env/static/private';
import { error, type RequestEvent } from '@sveltejs/kit';
import { redirect } from 'sveltekit-flash-message/server';
import admin from '$lib/server/admin';
import type { UserType } from '$lib/types';

interface AuthMiddlewareParamType {
	user: UserType | null | undefined;
	event: RequestEvent;
	shouldThrow?: boolean;
}

export const isAuthenticated = ({
	user,
	event,
	shouldThrow = true
}: AuthMiddlewareParamType): boolean => {
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
		throw redirect(302, '/login', { type: 'error', message: 'Please login to continue' }, event);
	}

	return !shouldRedirect;
};

export const isUnauthenticated = ({ user }: AuthMiddlewareParamType): boolean => {
	if (user === undefined || user === null) {
		return true;
	}

	throw redirect(302, '/');
};

export const isSiteEditor = ({
	user,
	event,
	shouldThrow = true
}: AuthMiddlewareParamType): boolean => {
	if (
		!(
			isAuthenticated({ user, event, shouldThrow }) &&
			user &&
			user.email === AUTHORIZED_EDITOR_EMAIL
		)
	) {
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

export const authParamExtractor = (event: RequestEvent): AuthMiddlewareParamType => ({
	user: event.locals.user,
	event: event
});
