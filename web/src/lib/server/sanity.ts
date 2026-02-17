import { createClient } from '@sanity/client';
import { sanityConfig } from '$lib/sanity';

export const client = createClient({
	...sanityConfig,
	useCdn: false
});
