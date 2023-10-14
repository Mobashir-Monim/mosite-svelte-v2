import { isSiteEditor } from '$lib/middlewares/authMiddleware.js';
import { getProfile } from '$lib/server/profile';

export const load = async (event) => {
	isSiteEditor({
		user: event.locals.user,
		event
	});
	const { id, profile } = await getProfile();
	const accessToken = event.cookies.get('accessToken');

	return {
		profile,
		id,
		accessToken
	};
};
