import { defaultProfile, profileCollectionName } from '$lib/constants';
import type { ProfileType } from '$lib/types';
import admin from './admin';

export const getProfile = async () => {
	const profileDoc = await getProfileDoc();
	let profile;
	let id = '';

	if (profileDoc) {
		profile = profileDoc.data();
		id = profileDoc.id;
	} else {
		profile = defaultProfile;
	}

	profile.description = profile.description.join('\n\n');

	return { id, profile };
};

export const getProfileDoc = async () => {
	const profile = await admin.firestore().collection(profileCollectionName).get();

	return profile.docs[0];
};

export const setProfile = async (id: string, profile: ProfileType) => {
	if (id !== '') {
		admin.firestore().collection(profileCollectionName).doc(id).set(profile);
	} else {
		const doc = await admin.firestore().collection(profileCollectionName).add(profile);
		id = doc.id;
	}

	return id;
};
