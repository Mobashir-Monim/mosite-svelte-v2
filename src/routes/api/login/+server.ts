import { isSiteEditor } from '$lib/middlewares/authMiddleware.js';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST(event) {
	const { user, accessToken } = await event.request.json();

	event.cookies.set('jwt', btoa(JSON.stringify(user)), { path: '/' });
	event.cookies.set('accessToken', btoa(JSON.stringify(accessToken)), { path: '/' });

	return json({
		message: 'Logged in',
		path: isSiteEditor({
			user,
			event,
			shouldThrow: false
		})
			? '/admin/dashboard'
			: '/'
	});
}
