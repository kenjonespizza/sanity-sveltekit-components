import { createImageUrlBuilder } from '@sanity/image-url';
import {
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_DATASET,
	PUBLIC_SANITY_API_VERSION
} from '$env/static/public';

export const sanityConfig = {
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: PUBLIC_SANITY_API_VERSION
};

const builder = createImageUrlBuilder({
	projectId: sanityConfig.projectId,
	dataset: sanityConfig.dataset
});

export const urlFor = (source: any) => {
	return builder.image(source);
};
