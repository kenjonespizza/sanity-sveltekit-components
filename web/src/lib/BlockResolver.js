import Hero from "$lib/components/Hero.svelte";
import Cta from "$lib/components/Cta.svelte";
import BlockNotFound from "$lib/components/BlockNotFound.svelte";

// Match santy object type to Component name.
const Components = {
	hero: Hero,
	cta: Cta,
}

export default (component) => {
	// component does exist
	if (typeof Components[component] !== "undefined") {
		return Components[component];
	}

  // component doesn't exist
	return BlockNotFound;
};
