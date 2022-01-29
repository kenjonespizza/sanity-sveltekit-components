import {client} from '$lib/sanityClient';
export async function get({ params, url }) {
	console.log('params.slug:', params.slug)
	const data = await client.fetch(`*[slug.current == "${params.slug}"][0]{...}`)
	console.log('data:', data)

	if (data) {
		return {
      status: 200,
			body: {
				data
			}
		};
	}

	return {
		status: 404
	};
}