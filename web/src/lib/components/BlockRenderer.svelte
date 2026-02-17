<script lang="ts">
	import type { Component } from 'svelte';
	import Hero from './Hero.svelte';
	import Cta from './Cta.svelte';
	import BlockNotFound from './BlockNotFound.svelte';

	let { module }: { module: any } = $props();

	const components: Record<string, Component<any>> = {
		hero: Hero,
		cta: Cta
	};

	const resolved = $derived(components[module?._type] ?? BlockNotFound);
</script>

{#if module}
	{@const Comp = resolved}
	<Comp data={module} />
{/if}
