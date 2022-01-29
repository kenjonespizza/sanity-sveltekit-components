import Hero from "$lib/components/Hero.svelte";
import Cta from "$lib/components/Cta.svelte";
import BlockNotFound from "$lib/components/BlockNotFound.svelte";

// Match santy object type to Component name.  I originally yoinked this code from https://www.storyblok.com/tp/add-a-headless-cms-to-svelte-in-5-minutes where you can read more if you'd like
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
