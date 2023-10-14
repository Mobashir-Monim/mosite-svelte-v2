import type { HttpMethodsType } from '$lib/types';
import type { RequestEvent } from '@sveltejs/kit';
import {
	authParamExtractor,
	isAuthenticated,
	isSiteEditor,
	isUnauthenticated
} from './authMiddleware';

export interface RouteDefinitionType {
	pathname: string;
	method: HttpMethodsType;
}

export interface MiddlewareDefinitionType {
	callable: (param: any) => boolean;
	paramExtractor: (event: RequestEvent) => any;
}

export interface MiddlewareKernelRouteInterface {
	routes: RouteDefinitionType[];
	middlewares: MiddlewareDefinitionType[];
}

export const middlewareKernel: MiddlewareKernelRouteInterface[] = [
	{
		routes: [
			{
				pathname: '/admin/dashboard',
				method: 'GET'
			},
			{
				pathname: '/admin/projects',
				method: 'GET'
			},
			{
				pathname: '/admin/skills',
				method: 'GET'
			},
			{
				pathname: '/admin/companies',
				method: 'GET'
			},
			{
				pathname: '/admin/attainments',
				method: 'GET'
			}
		],
		middlewares: [
			{
				callable: isSiteEditor,
				paramExtractor: authParamExtractor
			}
		]
	},
	{
		routes: [
			{
				pathname: '/api/attainments',
				method: 'POST'
			},
			{
				pathname: '/api/companies',
				method: 'POST'
			},
			{
				pathname: '/api/experiences',
				method: 'POST'
			},
			{
				pathname: '/api/profile',
				method: 'POST'
			},
			{
				pathname: '/api/projects',
				method: 'POST'
			},
			{
				pathname: '/api/skills',
				method: 'POST'
			}
		],
		middlewares: [
			{
				callable: isSiteEditor,
				paramExtractor: authParamExtractor
			}
		]
	},
	{
		routes: [
			{
				pathname: '/login',
				method: 'GET'
			}
		],
		middlewares: [
			{
				callable: isUnauthenticated,
				paramExtractor: authParamExtractor
			}
		]
	}
];
