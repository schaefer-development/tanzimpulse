<script lang="ts">
  import { onMount } from 'svelte';

  let mounted = false;
  onMount(async () => {
    mounted = true;
  });
</script>

{#if mounted}
  <slot name="mounted" />
{:else}
  <slot name="loading" />
{/if}
