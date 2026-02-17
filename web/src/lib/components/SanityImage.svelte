<script lang="ts">
	import { urlFor } from '$lib/sanity';

	let { image, maxWidth = 1200, alt = '' }: { image: any; maxWidth?: number; alt?: string } =
		$props();

	let loaded = $state(false);

	const dimensions = $derived(image?.asset?._ref?.split('-')[2] ?? '0x0');
	const width = $derived(Number(dimensions.split('x')[0]));
	const height = $derived(Number(dimensions.split('x')[1]));
	const aspectRatio = $derived(width / height);
</script>

{#if image}
	<img
		loading="lazy"
		src={urlFor(image).width(maxWidth).fit('fillmax').url()}
		alt={alt || image.alt || ''}
		style="aspect-ratio: {aspectRatio}; opacity: {loaded ? 1 : 0}; transition: .2s opacity;"
		onload={() => (loaded = true)}
	/>
{/if}
