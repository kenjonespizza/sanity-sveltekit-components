<script>
  // This function is where the magic happens
  import getComponent from '$lib/BlockResolver'
  
  export let module
</script>

{#if module}
  <svelte:component
    data={module}
    this={getComponent(module._type)}
  />
{/if}
