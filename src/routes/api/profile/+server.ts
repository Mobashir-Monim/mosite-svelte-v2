import { getProfile, setProfile } from '$lib/server/profile.js';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	let { id, profile } = await request.json();
	profile.description = profile.description.split('\n\n');
	id = await setProfile(id, profile);

	return json({
		message: 'Profile updated',
		data: { id, profile }
	});
}

/** @type {import('./$types').RequestHandler} */
export async function GET({}) {
	const { id, profile } = await getProfile();

	return json({ profile, id });
}
