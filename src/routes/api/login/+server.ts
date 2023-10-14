import { isSiteEditor } from '$lib/middlewares/authMiddleware.js';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, cookies }) {
	const { user, accessToken } = await request.json();

	cookies.set('jwt', btoa(JSON.stringify(user)), { path: '/' });
	cookies.set('accessToken', btoa(JSON.stringify(accessToken)), { path: '/' });

	return json({
		message: 'Logged in',
		path: isSiteEditor(user, false) ? '/admin/dashboard' : '/'
	});
}
