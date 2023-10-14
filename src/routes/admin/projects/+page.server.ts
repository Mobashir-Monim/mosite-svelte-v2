import { isSiteEditor } from '$lib/middlewares/authMiddleware.js';

export const load = async ({ locals, cookies }) => {
	isSiteEditor(locals);
	const accessToken = cookies.get('accessToken');

	return {
		accessToken
	};
};
