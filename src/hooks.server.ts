import { middlewareKernel, type RouteDefinitionType } from '$lib/middlewares/kernel';
import { sequence } from '@sveltejs/kit/hooks';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const jwt = event.cookies.get('jwt');
	const accessToken = event.cookies.get('accessToken');
	event.locals.user = jwt ? JSON.parse(atob(jwt)) : null;
	event.locals.accessToken = accessToken ? JSON.parse(atob(accessToken)) : null;

	middlewareKernel.forEach((group) => {
		const route: RouteDefinitionType | undefined = group.routes.find(
			(r) => r.pathname === event.url.pathname && r.method === event.request.method
		);

		if (route) {
			for (let middleware of group.middlewares) {
				middleware.callable(middleware.paramExtractor(event));
			}
		}
	});

	const res = await resolve(event);

	return res;
}
