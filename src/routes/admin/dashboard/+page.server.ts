import { isSiteEditor } from '$lib/middlewares/authMiddleware.js';
import { getProfile } from '$lib/server/profile';

export const load = async ({ locals, cookies }) => {
	isSiteEditor(locals.user);
	const { id, profile } = await getProfile();
	const accessToken = cookies.get('accessToken');

	return {
		profile,
		id,
		accessToken
	};
};
