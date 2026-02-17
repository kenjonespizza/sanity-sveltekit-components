<script lang="ts">
	import BlockRenderer from '$lib/components/BlockRenderer.svelte';

	let { data } = $props();
	const page = $derived(data.page);
</script>

<h1>{page.name}</h1>

{#if page.modules}
	{#each page.modules as module (module._key)}
		<BlockRenderer {module} />
	{/each}
{/if}
