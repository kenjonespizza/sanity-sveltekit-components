import { client } from '$lib/server/sanity';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const data = await client.fetch(`*[slug.current == $slug][0]{...}`, {
		slug: params.slug
	});

	if (!data) {
		error(404, 'Page not found');
	}

	return { page: data };
};
