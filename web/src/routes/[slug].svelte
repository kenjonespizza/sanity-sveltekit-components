<script context="module">
   export async function load({ params, fetch }) {
     const resourceUrl = `/api/pages/${params.slug}`;
     const res = await fetch(resourceUrl);
     const {data} = await res.json()
   
   if (res.ok) {
     return {
       props: {
         page: data
       }
     };
   }
   
   return {
     status: res.status,
       error: new Error(`Could not load url`)
     };
   }
</script>
<script>
  import BlockRenderer from "$lib/components/BlockRenderer.svelte"

  export let page;
</script>

<style>

</style>

<h1>Page: {page.name}</h1>

{#each page.modules as module}
  <BlockRenderer {module}/>
{/each}