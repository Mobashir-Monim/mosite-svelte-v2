import { FIREBASE_SERVICE_ACCOUNT_CREDS } from '$env/static/private';
import admin from 'firebase-admin';

if (admin.apps === null || admin.apps.length === 0) {
	admin.initializeApp({
		credential: admin.credential.cert(JSON.parse(FIREBASE_SERVICE_ACCOUNT_CREDS))
	});
}

export default admin;
