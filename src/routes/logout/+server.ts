import { json, redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ locals, cookies }) {
	cookies.delete('jwt', { path: '/' });
	cookies.delete('accessToken', { path: '/' });
	locals.user = null;
	locals.accessToken = null;

	return json('Logged out');
}
