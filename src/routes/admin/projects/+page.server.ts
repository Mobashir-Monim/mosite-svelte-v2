import { isSiteEditor } from '$lib/middlewares/authMiddleware.js';

export const load = async ({ locals, cookies }) => {
	isSiteEditor(locals.user);
	const accessToken = cookies.get('accessToken');

	return {
		accessToken
	};
};
