import { isSiteEditor } from '$lib/middlewares/authMiddleware.js';

export const load = async (event) => {
	isSiteEditor({
		user: event.locals.user,
		event
	});
	const accessToken = event.cookies.get('accessToken');

	return {
		accessToken
	};
};
